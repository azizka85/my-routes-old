import './types/window';

import { Page } from '@azizka/router';

import { BaseLayout } from './views/layouts/base-layout';
import { DefaultLayout } from './views/layouts/default-layout';

import { toCamel } from '../helpers';

export async function initLayouts(layouts: string[], parent: HTMLElement | null, firstTime: boolean) {
  const firstLoad: {
    [key: string]: boolean
  } = {};

  for(const layout of layouts) {
    if(!(layout in window.layouts)) {
      const module = await import(`./views/layouts/${layout}.js?time=${Date.now()}`) as any;

      parent = await module[toCamel(layout)]?.instance?.init?.(parent, firstTime);

      window.layouts[layout] = module[toCamel(layout)]?.instance;

      firstLoad[layout] = true;
    }
  }

  return firstLoad;
}

export async function loadLayouts(
  page: Page,
  layouts: string[], 
  firstLoad: {
    [key: string]: boolean
  }
) {
  const reverseLayouts = [...layouts].reverse();

  let parentLayout = DefaultLayout.instance;
  
  for(const layout of reverseLayouts) {
    if(parentLayout['content'] !== window.layouts[layout]) {
      await parentLayout.replaceContent(window.layouts[layout]);
    }

    await window.layouts[layout].load?.(page, firstLoad[layout] ?? false);

    parentLayout = window.layouts[layout];
  }  
}

export async function loadPage(
  page: Page, 
  name: string, 
  layouts: string[], 
  firstTime: boolean
) {
  window.page = page;

  let parent: HTMLElement | null = null;

  let pageFirstLoad = false;

  if(!(name in window.pages)) {
    const module = await import(`./views/pages/${name}.js?time=${Date.now()}`) as any;

    parent = await module[toCamel(name)]?.instance?.init?.(parent, firstTime);

    window.pages[name] = module[toCamel(name)]?.instance;

    pageFirstLoad = true;
  }

  const firstLoad = await initLayouts(layouts, parent, firstTime);

  if(window.page.fragment === page.fragment) {
    await loadLayouts(page, layouts, firstLoad);

    const layout: BaseLayout = layouts.length > 0 ? window.layouts[layouts[0]] : DefaultLayout.instance;

    if(layout && layout['content'] !== window.pages[name]) {
      await layout.replaceContent(window.pages[name]);
    }

    await window.pages[name].load?.(page, pageFirstLoad);
  }
}

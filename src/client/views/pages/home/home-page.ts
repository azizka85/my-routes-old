import '../../../types/window';

import * as router from '@azizka/router';

import { Page } from "../../view";

import { MDCRipple } from '@material/ripple';

import { loadContent, navigateHandler } from '../../../helpers';

import { ScrollActionTo, ScrollActionTop, ScrollEventData, ScrollEventType } from '../../../types/scroll';

export class HomePage implements Page {
  protected static page: HomePage | null = null;

  protected node: HTMLElement | null = null;

  protected scrollTopBtn: MDCRipple | null = null;

  protected currScroll = 0;

  static get instance(): HomePage {
    if(!HomePage.page) {
      HomePage.page = new HomePage();
    }

    return HomePage.page;
  }

  get elem(): HTMLElement | null {
    return this.node;
  }

  async init(parent: HTMLElement | null, firstTime: boolean) {
    let content = await loadContent(parent, firstTime, ['main-layout']);    

    this.node = content.querySelector('[data-page="home-page"]') || null;

    if(this.node) {
      const buttons = this.node.querySelectorAll('.mdc-button');      

      for(let button of buttons) {
        const ripple = new MDCRipple(button);        

        if(button.hasAttribute('href')) {
          ripple.listen('click', event => navigateHandler(event, ripple.root as HTMLElement));
        }
      }

      const scrollTopBtnElem = this.node.querySelector('.mdc-fab');

      if(scrollTopBtnElem) {
        this.scrollTopBtn = new MDCRipple(scrollTopBtnElem);

        this.scrollTopBtn.listen('click', () => {
          window.layouts['main-layout']?.doAction?.(ScrollActionTop, null);
        });
      }
    }
    
    return content;
  }

  async mount() {
    console.log('home-page', 'mounted');
  }

  async unmount() {
    console.log('home-page', 'unmounted');
  }

  async load(page: router.Page, firstLoad: boolean) {
    if(firstLoad) {
      window.layouts['main-layout']?.listen?.(ScrollEventType, (event) => {
        const data = (event as CustomEvent<ScrollEventData>).detail;

        if(data.currScroll <= 0) {
          this.scrollTopBtn?.root.classList.add('mdc-fab--exited');
        } else {
          this.scrollTopBtn?.root.classList.remove('mdc-fab--exited');
        }

        this.currScroll = data.currScroll;
      });
    }

    window.layouts['main-layout']?.doAction?.(ScrollActionTo, {
      top: this.currScroll,
      noSmooth: true
    });
  }
}

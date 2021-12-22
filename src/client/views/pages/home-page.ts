import '../../types/window';

import * as router from '@azizka/router';

import { Page } from "../view";

import { MDCRipple } from '@material/ripple';

import { loadContent, mount, unmount } from '../../helpers';

import { ScrollActionTo, ScrollActionTop, ScrollEventData, ScrollEventType } from '../../types/scroll';

export class HomePage implements Page {
  protected static page: HomePage | null = null;

  protected node: HTMLElement | null = null;

  protected scrollTopBtn: MDCRipple | null = null;

  protected scrollTopBtnClickHandler: () => void;

  protected windowScrollHandler: (event: Event) => void;

  protected currScroll = 0;

  static get instance(): HomePage {
    if(!HomePage.page) {
      HomePage.page = new HomePage();
    }

    return HomePage.page;
  }

  constructor() {
    this.scrollTopBtnClickHandler = () => {
      window.layouts['main-layout']?.performAction?.(ScrollActionTop, null);
    };

    this.windowScrollHandler = event => {
      const data = (event as CustomEvent<ScrollEventData>).detail;

      if(data.currScroll <= 0) {
        this.scrollTopBtn?.root.classList.add('mdc-fab--exited');
      } else {
        this.scrollTopBtn?.root.classList.remove('mdc-fab--exited');
      }

      this.currScroll = data.currScroll;
    };
  }

  get elem(): HTMLElement | null {
    return this.node;
  }

  async init(parent: HTMLElement | null, firstTime: boolean) {
    let content = await loadContent(parent, firstTime, ['main-layout']);    

    this.node = content.querySelector('[data-page="home-page"]') || null;

    if(this.node) {      
      const scrollTopBtnElem = this.node.querySelector('.mdc-fab');

      if(scrollTopBtnElem) {
        this.scrollTopBtn = new MDCRipple(scrollTopBtnElem);        
      }
    }
    
    return content;
  }

  async mount() {
    this.scrollTopBtn?.listen('click', this.scrollTopBtnClickHandler);
    window.layouts['main-layout']?.listen?.(ScrollEventType, this.windowScrollHandler);

    await mount(this.node);
  }

  async unmount() {
    this.scrollTopBtn?.unlisten('click', this.scrollTopBtnClickHandler);
    window.layouts['main-layout']?.unlisten?.(ScrollEventType, this.windowScrollHandler);

    await unmount(this.node);
  }

  async load(lang: string, page: router.Page, firstLoad: boolean) {    
    window.layouts['main-layout']?.performAction?.(ScrollActionTo, {
      top: this.currScroll,
      noSmooth: true
    });    
  }
}

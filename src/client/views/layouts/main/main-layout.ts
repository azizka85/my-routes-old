import * as router from '@azizka/router';

import { SCROLL_THRESHOLD } from "../../../../globals";
import { Page } from '../../view';
import { BaseLayout } from "../base-layout";

import { MDCRipple } from '@material/ripple';
import { MDCList } from '@material/list';

import { toggleQueryParameter } from "../../../../helpers";
import { navigateHandler } from '../../../helpers';

import { ScrollActionTo, ScrollActionTop, ScrollEventData, ScrollEventType } from '../../../types/scroll';

export class MainLayout extends BaseLayout implements Page {
  protected static layout: MainLayout | null = null;    

  protected node: HTMLElement | null = null;

  protected appBarElem: HTMLElement | null = null;
  protected drawerElem: HTMLElement | null = null;  

  protected mainContentElem: HTMLElement | null = null;

  protected navIcon: MDCRipple | null = null;
  protected searchIcon: MDCRipple | null = null;

  protected headerIconElem: HTMLElement | null = null;
  protected headerIconBtn: MDCRipple | null = null;

  protected list: MDCList | null = null;

  protected searchForm: HTMLFormElement | null = null;

  static get instance(): MainLayout {
    if(!MainLayout.layout) {
      MainLayout.layout = new MainLayout();
    }

    return MainLayout.layout;
  }

  get elem(): HTMLElement | null {
    return this.node;
  }

  async init(parent: HTMLElement | null, firstTime: boolean) {
    let content = parent || document.body;

    this.node = content.querySelector('[data-layout="main-layout"]') || null; 

    if(this.node) {
      this.appBarElem = this.node.querySelector('.app-bar'); 
      this.drawerElem = this.node.querySelector('.drawer');

      let prevScroll = 0;

      this.mainContentElem = this.node.querySelector('.main-content');     
      this.mainContentElem?.addEventListener('scroll', () => {      
        const currScroll = this.mainContentElem?.scrollTop || 0;
  
        if(Math.abs(currScroll - prevScroll) > SCROLL_THRESHOLD) {
          if(prevScroll >= currScroll) {
            this.appBarElem?.classList.remove('app-bar--hide');            
          } else {
            this.appBarElem?.classList.add('app-bar--hide');
          }
        }      
  
        if(currScroll <= 0) {
          this.appBarElem?.classList.remove('app-bar--scrolled');
        } else {
          this.appBarElem?.classList.add('app-bar--scrolled');
        }

        this.node?.dispatchEvent(new CustomEvent<ScrollEventData>(ScrollEventType, {
          detail: {
            currScroll,
            prevScroll
          }
        }));
        
        prevScroll = currScroll;
      });

      const navIconElem = this.appBarElem?.querySelector('[data-button="navigation"]');

      if(navIconElem) {
        this.navIcon = new MDCRipple(navIconElem);
        this.navIcon.unbounded = true;

        this.navIcon.listen('click', event => navigateHandler(event, this.navIcon?.root as HTMLElement));
      }

      const searchIconElem = this.appBarElem?.querySelector('[data-button="search"]');

      if(searchIconElem) {
        this.searchIcon = new MDCRipple(searchIconElem);
        this.searchIcon.unbounded = true;

        this.searchIcon.listen('click', event => navigateHandler(event, this.searchIcon?.root as HTMLElement));
      }

      const headerIconBtnElem = this.node.querySelector('[data-button="header-navigation"]');

      if(headerIconBtnElem) {
        this.headerIconElem = headerIconBtnElem.querySelector('.mdc-icon-button__ripple');

        this.headerIconBtn = new MDCRipple(headerIconBtnElem);
        this.headerIconBtn.unbounded = true;

        this.headerIconBtn.listen('click', event => navigateHandler(event, this.headerIconBtn?.root as HTMLElement));
      }

      const listElem = this.node.querySelector('.mdc-list');

      if(listElem) {
        this.list = new MDCList(listElem);

        this.list.listElements.forEach(item => {
          item.addEventListener(
            'mouseenter', 
            () => this.drawerElem?.classList.add('drawer--hover')
          );

          new MDCRipple(item);
        });

        this.drawerElem?.addEventListener(
          'mouseleave', 
          () => this.drawerElem?.classList.remove('drawer--hover')
        );
      }

      this.searchForm = this.node.querySelector('form.search');

      if(this.searchForm) {
        const buttons = this.searchForm.querySelectorAll('.mdc-icon-button');

        for(let button of buttons) {
          const ripple = new MDCRipple(button);
          ripple.unbounded = true;
        }

        this.searchForm.addEventListener('submit', event => {
          event.preventDefault();

          const data = new FormData(this.searchForm as HTMLFormElement);

          console.log('form submited', data);          

          this.searchForm?.reset();
        });
      }
    }

    return content;
  }

  async mount() {
    console.log('main-layout', 'mounted');       
  }

  async unmount() {
    console.log('main-layout', 'unmounted');    
  } 

  async load(page: router.Page, firstLoad: boolean) {    
    const navigation = page.query['main-layout-navigation'];    

    if(this.navIcon) {      
      const path = `?${toggleQueryParameter(page.query, 'main-layout-navigation')}`;

      this.navIcon.root.setAttribute('href', path);
    }

    if(this.headerIconBtn) {
      const path = `?${toggleQueryParameter(page.query, 'main-layout-navigation')}`;

      this.headerIconBtn.root.setAttribute('href', path);
    }

    if(this.searchIcon) {    
      const path = `?${toggleQueryParameter(page.query, 'main-layout-search')}`;

      this.searchIcon.root.setAttribute('href', path);
    }

    if(navigation) {
      if(this.headerIconElem) {
        this.headerIconElem.innerHTML = 'arrow_circle_left';
      }

      this.drawerElem?.classList.add('drawer--open');
    } else {
      if(this.headerIconElem) {
        this.headerIconElem.innerHTML = 'arrow_circle_right';
      }

      this.drawerElem?.classList.remove('drawer--open');
    }
  }

  listen(type: string, listener: EventListenerOrEventListenerObject) {
    this.node?.addEventListener(type, listener);
  }

  doAction(type: string, data: any) {
    switch(type) {
      case ScrollActionTop:
        this.mainContentElem?.scrollTo({
          top: 0
        });
        break;
      case ScrollActionTo: 
        if(data?.noSmooth) {
          this.mainContentElem?.classList.add('main-content--no-smooth');
        } 

        this.mainContentElem?.scrollTo({
          top: data?.top
        });
        
        if(data?.noSmooth) {
          this.mainContentElem?.classList.remove('main-content--no-smooth');
        }

        break;
    }
  }
}

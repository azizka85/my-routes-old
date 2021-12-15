import * as router from '@azizka/router';

import { SCROLL_THRESHOLD } from "../../../globals";
import { Page } from '../view';
import { BaseLayout } from "./base-layout";

import { MDCRipple } from '@material/ripple';
import { MDCList } from '@material/list';

import { toggleQueryParameter } from "../../../helpers";
import { mount, navigateHandler, unmount } from '../../helpers';

import { ScrollActionTo, ScrollActionTop, ScrollEventData, ScrollEventType } from '../../types/scroll';

export class MainLayout extends BaseLayout implements Page {
  protected static layout: MainLayout | null = null;    

  protected node: HTMLElement | null = null;

  protected appBarElem: HTMLElement | null = null;
  protected drawerElem: HTMLElement | null = null;  

  protected navIcon: HTMLElement | null = null;
  protected searchIcon: HTMLElement | null = null;

  protected headerIconElem: HTMLElement | null = null;
  protected headerIconBtn: HTMLElement | null = null;

  protected list: MDCList | null = null;

  protected searchPanel: HTMLElement | null = null;
  protected searchForm: HTMLFormElement | null = null;  
  protected searchInput: HTMLInputElement | null = null;

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

      this.navIcon = this.appBarElem?.querySelector('[data-button="navigation"]') || null;
      this.navIcon?.addEventListener('click', event => navigateHandler(event, this.navIcon as HTMLElement));

      this.searchIcon = this.appBarElem?.querySelector('[data-button="search"]') || null;
      this.searchIcon?.addEventListener('click', event => navigateHandler(event, this.searchIcon as HTMLElement));      

      this.headerIconBtn = this.node.querySelector('[data-button="header-navigation"]');

      if(this.headerIconBtn) {
        this.headerIconElem = this.headerIconBtn.querySelector('.mdc-icon-button__ripple');

        this.headerIconBtn.addEventListener('click', event => navigateHandler(event, this.headerIconBtn as HTMLElement));
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

      this.searchPanel = this.appBarElem?.querySelector('.search') || null;

      this.searchForm = this.searchPanel?.querySelector('form') || null; 
      
      this.searchInput = this.searchForm?.querySelector('.search__input') || null;

      this.searchInput?.addEventListener('focus', () => {              
        this.searchPanel?.classList.add('search--focus');
      });

      this.searchForm?.querySelector('.search__icon-right')?.addEventListener('click', () => {        
        if(this.searchInput) {
          this.searchInput.value = '';
          this.searchInput.focus();
        }
      });

      this.searchForm?.querySelector('.search__icon-left')?.addEventListener('click', () => {
        this.searchPanel?.classList.remove('search--focus');
      });

      this.searchForm?.addEventListener('submit', event => {
        event.preventDefault();        

        console.log('Form submited:', this.searchInput?.value);          
      });

      let prevScroll = 0;

      window.addEventListener('scroll', () => {      
        const currScroll = window.scrollY || 0;
  
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
    }

    return content;
  }

  async mount() {
    await mount(this.node);      
  }

  async unmount() {
    await unmount(this.node);    
  } 

  async load(page: router.Page, firstLoad: boolean) {    
    const navigation = page.query['main-layout-navigation'];    

    if(this.navIcon) {      
      const path = `?${toggleQueryParameter(page.query, 'main-layout-navigation')}`;

      this.navIcon.setAttribute('href', path);
    }

    if(this.headerIconBtn) {
      const path = `?${toggleQueryParameter(page.query, 'main-layout-navigation')}`;

      this.headerIconBtn.setAttribute('href', path);
    }

    if(this.searchIcon) {    
      const path = `?${toggleQueryParameter(page.query, 'main-layout-search')}`;

      this.searchIcon.setAttribute('href', path);
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
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        break;
      case ScrollActionTo: 
        window.scrollTo({
          top: data?.top,
          behavior: data?.noSmooth ? 'auto' : 'smooth'
        });                
        break;
    }
  }
}

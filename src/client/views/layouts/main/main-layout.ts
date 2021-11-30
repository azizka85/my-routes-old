import * as router from '@azizka/router';

import { SCROLL_THRESHOLD } from "../../../../globals";
import { Page } from '../../view';
import { BaseLayout } from "../base-layout";

import { MDCRipple } from '@material/ripple';
import { MDCList } from '@material/list';

import { toggleQueryParameter } from "../../../../helpers";

export class MainLayout extends BaseLayout implements Page {
  protected static layout: MainLayout | null = null;    

  protected node: HTMLElement | null = null;

  protected appBarElem: HTMLElement | null = null;
  protected drawerElem: HTMLElement | null = null;  

  protected mainContentElem: HTMLElement | null = null;

  protected navIcon: MDCRipple | null = null;
  protected searchIcon: MDCRipple | null = null;

  protected list: MDCList | null = null;

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
        
        prevScroll = currScroll;
      });

      const navIconElem = this.appBarElem?.querySelector('[data-button="navigation"]');

      if(navIconElem) {
        this.navIcon = new MDCRipple(navIconElem);
        this.navIcon.unbounded = true;

        this.navIcon.listen('click', (event) => this.navigateHandler(event));
      }

      const searchIconElem = this.appBarElem?.querySelector('[data-button="search"]');

      if(searchIconElem) {
        this.searchIcon = new MDCRipple(searchIconElem);
        this.searchIcon.unbounded = true;

        this.searchIcon.listen('click', (event) => this.navigateHandler(event));
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
    const search = page.query['main-layout-search'];

    if(this.navIcon) {      
      const path = `${window.location.pathname}?${toggleQueryParameter(page.query, 'main-layout-navigation')}`;

      this.navIcon.root.setAttribute('href', path);
    }

    if(this.searchIcon) {    
      const path = `${window.location.pathname}?${toggleQueryParameter(page.query, 'main-layout-search')}`;

      this.searchIcon.root.setAttribute('href', path);
    }

    if(navigation) {
      this.drawerElem?.classList.add('drawer--open');
    } else {
      this.drawerElem?.classList.remove('drawer--open');
    }
  }

  protected navigateHandler(event: Event) {
    event.preventDefault();

    const path = (event.target as HTMLElement)?.getAttribute?.('href');

    if(path) {
      window.router.navigateTo(path);
    }
  }
}

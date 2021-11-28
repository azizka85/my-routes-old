import { MAIN_LAYOUT, SCROLL_THRESHOLD } from "../../../../globals";
import { Page } from '../../view';
import { BaseLayout } from "../base-layout";

import { MDCTopAppBar } from '@material/top-app-bar';

export class MainLayout extends BaseLayout implements Page {
  protected static layout: MainLayout | null = null;    

  protected node: HTMLElement | null = null;
  protected appBarElem: HTMLElement | null = null;
  protected appBar: MDCTopAppBar | null = null;

  protected prevTop = 0;

  protected scrollHandler: () => void;

  constructor() {
    super();

    this.scrollHandler = this.handleScroll.bind(this);
  }

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

    this.node = content.querySelector(`[data-layout="${MAIN_LAYOUT}"]`) || null; 

    if(this.node) {
      this.appBarElem = this.node.querySelector('.mdc-top-app-bar');

      if(this.appBarElem) {
        this.appBar = new MDCTopAppBar(this.appBarElem);      
      }
    }

    return content;
  }

  async mount() {
    if(this.appBarElem) {
      this.prevTop = window.scrollY;

      window.addEventListener('scroll', this.scrollHandler);

      this.appBarElem.classList.remove('hide');
    }
  }

  async unmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  protected handleScroll() {
    const currTop = window.scrollY;    

    if(this.appBarElem) {
      if(Math.abs(currTop - this.prevTop) > SCROLL_THRESHOLD) {
        if(this.prevTop > currTop) {
          this.appBarElem.classList.remove('hide');
        } else {
          this.appBarElem.classList.add('hide');
        }
      }
  
      this.prevTop = currTop;
    }
  }
}

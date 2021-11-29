import { MAIN_LAYOUT } from "../../../../globals";
import { Page } from '../../view';
import { BaseLayout } from "../base-layout";

import { MDCRipple } from '@material/ripple';

export class MainLayout extends BaseLayout implements Page {
  protected static layout: MainLayout | null = null;    

  protected node: HTMLElement | null = null;

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

    return content;
  }

  async mount() {
    console.log(MAIN_LAYOUT, 'mounted');    
  }

  async unmount() {
    console.log(MAIN_LAYOUT, 'unmounted');    
  }  
}

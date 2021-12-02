import { Page } from "../../view";

import { MDCRipple } from '@material/ripple';

import { loadContent, navigateHandler } from '../../../helpers';

export class HomePage implements Page {
  protected static page: HomePage | null = null;

  protected node: HTMLElement | null = null;

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
    }
    
    return content;
  }

  async mount() {
    console.log('home-page', 'mounted');
  }

  async unmount() {
    console.log('home-page', 'unmounted');
  }
}

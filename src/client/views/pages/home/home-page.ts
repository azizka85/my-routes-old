import '../../../types/window';

import { Page } from "../../view";

import { MDCRipple } from '@material/ripple';

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
    let content: HTMLElement;

    if(firstTime || parent) {
      content = parent || document.body;
    } else {
      let path = window.location.pathname + '?ajax=1&init=1';

      if(!('main-layout' in window.layouts)) {
        path += '&layouts=main-layout';
      }

      const html = await (await fetch(path)).text();
      
      content = document.createElement('div');

      content.innerHTML = html;
    }

    this.node = content.querySelector('[data-page="home-page"]') || null;

    if(this.node) {
      const buttons = this.node.querySelectorAll('.mdc-button');

      for(let button of buttons) {
        new MDCRipple(button);

        if(button.hasAttribute('href')) {
          button.addEventListener('click', event => {
            event.preventDefault();

            window.router.navigateTo(button.getAttribute('href') || '');
          });
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

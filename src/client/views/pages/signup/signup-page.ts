import '../../../types/window';

import { PAGE_ROOT, SIGN_UP_PAGE } from '../../../../globals';
import { Page } from '../../view';

import { MDCRipple } from '@material/ripple';

export class SignUpPage implements Page {
  protected static page: SignUpPage | null = null;

  protected node: HTMLElement | null = null;

  static get instance(): SignUpPage {
    if(!SignUpPage.page) {
      SignUpPage.page = new SignUpPage();
    }

    return SignUpPage.page;
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

      const html = await (await fetch(path)).text();
      
      content = document.createElement('div');

      content.innerHTML = html;
    }

    this.node = content.querySelector(`[data-page="${SIGN_UP_PAGE}"]`) || null;

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
    console.log(SIGN_UP_PAGE, 'mounted');
  }

  async unmount() {
    console.log(SIGN_UP_PAGE, 'unmounted');
  }
}

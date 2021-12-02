import { Page } from '../../view';

import { MDCRipple } from '@material/ripple';

import { loadContent, navigateHandler } from '../../../helpers';

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
    let content = await loadContent(parent, firstTime, []);

    this.node = content.querySelector('[data-page="signup-page"]') || null;

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
    console.log('signup-page', 'mounted');
  }

  async unmount() {
    console.log('signup-page', 'unmounted');
  }
}

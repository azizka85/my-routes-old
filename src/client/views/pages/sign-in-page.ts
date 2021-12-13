import { Page } from '../view';

import { MDCRipple } from '@material/ripple';

import { loadContent, mount, navigateHandler, unmount } from '../../helpers';

export class SignInPage implements Page {
  protected static page: SignInPage | null = null;

  protected node: HTMLElement | null = null;

  static get instance(): SignInPage {
    if(!SignInPage.page) {
      SignInPage.page = new SignInPage();
    }

    return SignInPage.page;
  }

  get elem(): HTMLElement | null {
    return this.node;
  }

  async init(parent: HTMLElement | null, firstTime: boolean) {
    let content = await loadContent(parent, firstTime, []);    

    this.node = content.querySelector('[data-page="signin-page"]') || null;

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
    await mount(this.node);
  }

  async unmount() {
    await unmount(this.node);
  }
}

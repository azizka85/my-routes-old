import { Page } from '../view';

import { MDCRipple } from '@material/ripple';
import { MDCTextField } from '@material/textfield';

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

      const textFields = this.node.querySelectorAll('.main-card__text-field');

      for(const textField of textFields) {
        textField.classList.remove('mdc-text-field--no-label');

        new MDCTextField(textField);
      }

      const form = this.node.querySelector('.main-card form');

      form?.addEventListener('submit', event => {
        event.preventDefault();

        const data = new FormData(form as HTMLFormElement);

        console.log('Form submited: ');          

        for(let item of data.entries()) {
          console.log(item[0] + ':', item[1]);          
        }
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
}

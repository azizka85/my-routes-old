import * as router from '@azizka/router';

import { Page } from '../view';

import { MDCRipple } from '@material/ripple';
import { MDCTextField } from '@material/textfield';

import { loadContent, mount, navigateHandler, unmount } from '../../helpers';

import { AuthServiceComponent } from '../components/auth-service-component';

import { DEFAULT_LANGUAGE } from '../../../globals';

export class SignInPage implements Page {
  protected static page: SignInPage | null = null;

  protected node: HTMLElement | null = null;

  protected titleElem: HTMLElement | null = null;

  protected emailHelperElem: HTMLElement | null = null;

  protected passwordInputElem: HTMLInputElement | null = null;
  protected passwordLabelElem: HTMLElement | null = null;
  protected passwordHelperElem: HTMLElement | null = null;

  protected signUpBtn: MDCRipple | null = null;
  protected signUpBtnLabel: HTMLElement | null = null;

  protected signInBtnLabel: HTMLElement | null = null;

  protected cancelBtn: MDCRipple | null = null;
  protected cancelBtnLabel: HTMLElement | null = null;

  protected authService: AuthServiceComponent | null = null;

  protected signUpBtnClickHandler: (event: MouseEvent) => void;
  protected cancelBtnClickHandler: (event: MouseEvent) => void;

  protected formSubmitHandler: (event: SubmitEvent) => void;

  static get instance(): SignInPage {
    if(!SignInPage.page) {
      SignInPage.page = new SignInPage();
    }

    return SignInPage.page;
  }

  constructor() {
    this.signUpBtnClickHandler = event => navigateHandler(event, this.signUpBtn?.root as HTMLElement);
    this.cancelBtnClickHandler = event => navigateHandler(event, this.cancelBtn?.root as HTMLElement);    

    this.formSubmitHandler = event => {
      event.preventDefault();

      const form = this.node?.querySelector('.main-card form') as HTMLFormElement;
      const data = new FormData(form as HTMLFormElement);

      console.log('Form submited: ');          

      for(let item of data.entries()) {
        console.log(item[0] + ':', item[1]);          
      }
    };
  }

  get elem(): HTMLElement | null {
    return this.node;
  }

  async init(parent: HTMLElement | null, firstTime: boolean) {
    let content = await loadContent(parent, firstTime, []);    

    this.node = content.querySelector('[data-page="signin-page"]') || null;

    if(this.node) {
      const textFields = this.node.querySelectorAll('.main-card__text-field');

      for(const textField of textFields) {
        textField.classList.remove('mdc-text-field--no-label');

        new MDCTextField(textField);
      }

      const form = this.node.querySelector('.main-card form') as HTMLFormElement;      

      this.titleElem = this.node.querySelector('[data-title="main"]') || null;

      this.emailHelperElem = form?.querySelector('#email-helper') || null;

      this.passwordInputElem = form?.querySelector('[name="password"]') || null;
      this.passwordLabelElem = form?.querySelector('#password-label') || null;
      this.passwordHelperElem = form?.querySelector('#password-helper') || null;

      const signUpBtnElem = form?.querySelector('[data-button="sign-up"]') || null;

      if(signUpBtnElem) {
        this.signUpBtn = new MDCRipple(signUpBtnElem);

        this.signUpBtnLabel = signUpBtnElem.querySelector('.mdc-button__label');
      }

      const signInBtn = form?.querySelector('[data-button="sign-in"]') || null;

      if(signInBtn) {
        new MDCRipple(signInBtn);

        this.signInBtnLabel = signInBtn.querySelector('.mdc-button__label');
      }

      const cancelBtnElem = form?.querySelector('[data-button="cancel"]') || null;

      if(cancelBtnElem) {
        this.cancelBtn = new MDCRipple(cancelBtnElem);

        this.cancelBtnLabel = cancelBtnElem.querySelector('.mdc-button__label');
      }
    }

    this.authService = new AuthServiceComponent();

    await this.authService.init(this, firstTime);
    
    return content;
  }

  async mount() {
    const form = this.node?.querySelector('.main-card form') as HTMLFormElement;

    form?.addEventListener('submit', this.formSubmitHandler);

    this.signUpBtn?.listen('click', this.signUpBtnClickHandler);
    this.cancelBtn?.listen('click', this.cancelBtnClickHandler);

    await mount(this.node);
  }

  async unmount() {
    const form = this.node?.querySelector('.main-card form') as HTMLFormElement;

    form?.removeEventListener('submit', this.formSubmitHandler);

    this.signUpBtn?.unlisten('click', this.signUpBtnClickHandler);
    this.cancelBtn?.unlisten('click', this.cancelBtnClickHandler);

    await unmount(this.node);
  }

  async load(lang: string , page: router.Page, firstLoad: boolean): Promise<void> {
    if(this.titleElem) {
      this.titleElem.textContent = window.tr('Sign In');
    }

    if(this.emailHelperElem) {
      this.emailHelperElem.textContent = window.tr('Email required');
    }

    if(this.passwordInputElem) {
      this.passwordInputElem.placeholder = window.tr('Password');
    }

    if(this.passwordLabelElem) {
      this.passwordLabelElem.textContent = window.tr('Password');
    }

    if(this.passwordHelperElem) {
      this.passwordHelperElem.textContent = window.tr('Password required');
    }

    if(this.signUpBtnLabel) {
      this.signUpBtnLabel.textContent = window.tr('Sign Up');
    }

    if(this.signInBtnLabel) {
      this.signInBtnLabel.textContent = window.tr('Sign In');
    }

    if(this.cancelBtnLabel) {
      this.cancelBtnLabel.textContent = window.tr('Cancel');
    }

    this.signUpBtn?.root?.setAttribute('href', (lang === DEFAULT_LANGUAGE ? '' : `/${lang}`) + '/sign-up');
    this.cancelBtn?.root?.setAttribute('href', (lang === DEFAULT_LANGUAGE ? '' : `/${lang}`) + '/');

    await this.authService?.load?.(lang, page, firstLoad);
  }
}

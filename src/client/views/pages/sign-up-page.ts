import * as router from '@azizka/router';

import { Page } from '../view';

import { MDCRipple } from '@material/ripple';
import { MDCTextField } from '@material/textfield';

import { loadContent, mount, navigateHandler, unmount } from '../../helpers';

import { AuthServiceComponent } from '../components/auth-service-component';

import { DEFAULT_LANGUAGE } from '../../../globals';

export class SignUpPage implements Page {
  protected static page: SignUpPage | null = null;

  protected node: HTMLElement | null = null;

  protected titleElem: HTMLElement | null = null;

  protected nameInputElem: HTMLInputElement | null = null;
  protected nameLabelElem: HTMLElement | null = null;
  protected nameHelperElem: HTMLElement | null = null;

  protected emailHelperElem: HTMLElement | null = null;

  protected passwordInputElem: HTMLInputElement | null = null;
  protected passwordLabelElem: HTMLElement | null = null;
  protected passwordHelperElem: HTMLElement | null = null;

  protected signInBtn: MDCRipple | null = null;
  protected signInBtnLabel: HTMLElement | null = null;

  protected signUpBtnLabel: HTMLElement | null = null;
  
  protected cancelBtn: MDCRipple | null = null;
  protected cancelBtnLabel: HTMLElement | null = null;

  protected authService: AuthServiceComponent | null = null;

  protected signInBtnClickHandler: (event: MouseEvent) => void;
  protected cancelBtnClickHandler: (event: MouseEvent) => void;

  protected formSubmitHandler: (event: SubmitEvent) => void;

  static get instance(): SignUpPage {
    if(!SignUpPage.page) {
      SignUpPage.page = new SignUpPage();
    }

    return SignUpPage.page;
  }

  constructor() {
    this.formSubmitHandler = event => {
      event.preventDefault();

      const form = this.node?.querySelector('.main-card form') as HTMLFormElement;
      const data = new FormData(form as HTMLFormElement);

      console.log('Form submited: ');          

      for(let item of data.entries()) {
        console.log(item[0] + ':', item[1]);          
      }
    };

    this.signInBtnClickHandler = (event: MouseEvent) => navigateHandler(event, this.signInBtn?.root as HTMLElement);
    this.cancelBtnClickHandler = (event: MouseEvent) => navigateHandler(event, this.cancelBtn?.root as HTMLElement);
  }

  get elem(): HTMLElement | null {
    return this.node;
  }

  async init(parent: HTMLElement | null, firstTime: boolean) {
    let content = await loadContent(parent, firstTime, []);

    this.node = content.querySelector('[data-page="signup-page"]') || null;

    if(this.node) {
      const textFields = this.node.querySelectorAll('.main-card__text-field');

      for(const textField of textFields) {
        textField.classList.remove('mdc-text-field--no-label');

        new MDCTextField(textField);
      }

      const form = this.node.querySelector('.main-card form') as HTMLFormElement;      

      this.titleElem = this.node.querySelector('[data-title="main"]') || null;

      this.nameInputElem = form?.querySelector('[name="name"]') || null;
      this.nameLabelElem = form?.querySelector('#name-label') || null;
      this.nameHelperElem = form?.querySelector('#name-helper') || null;

      this.emailHelperElem = form?.querySelector('#email-helper') || null;

      this.passwordInputElem = form?.querySelector('[name="password"]') || null;
      this.passwordLabelElem = form?.querySelector('#password-label') || null;
      this.passwordHelperElem = form?.querySelector('#password-helper') || null;

      const signInBtnElem = form?.querySelector('[data-button="sign-in"]') || null;

      if(signInBtnElem) {
        this.signInBtn = new MDCRipple(signInBtnElem);

        this.signInBtnLabel = signInBtnElem.querySelector('.mdc-button__label');
      }

      const signUpBtn = form?.querySelector('[data-button="sign-up"]');

      if(signUpBtn) {
        new MDCRipple(signUpBtn);

        this.signUpBtnLabel = signUpBtn.querySelector('.mdc-button__label');
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

    this.signInBtn?.listen('click', this.signInBtnClickHandler);
    this.cancelBtn?.listen('click', this.cancelBtnClickHandler);

    await mount(this.node);
  }

  async unmount() {
    const form = this.node?.querySelector('.main-card form') as HTMLFormElement;

    form?.removeEventListener('submit', this.formSubmitHandler);

    this.signInBtn?.unlisten('click', this.signInBtnClickHandler);
    this.cancelBtn?.unlisten('click', this.cancelBtnClickHandler);

    await unmount(this.node);
  }

  async load(lang: string , page: router.Page, firstLoad: boolean): Promise<void> {
    if(this.titleElem) {
      this.titleElem.textContent = window.tr('Sign Up');
    }

    if(this.nameInputElem) {
      this.nameInputElem.placeholder = window.tr('Name');
    }

    if(this.nameLabelElem) {
      this.nameLabelElem.textContent = window.tr('Name');
    }

    if(this.nameHelperElem) {
      this.nameHelperElem.textContent = window.tr('Name required');
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

    if(this.signInBtnLabel) {
      this.signInBtnLabel.textContent = window.tr('Sign In');
    }

    if(this.signUpBtnLabel) {
      this.signUpBtnLabel.textContent = window.tr('Sign Up');
    }

    if(this.cancelBtnLabel) {
      this.cancelBtnLabel.textContent = window.tr('Cancel');
    }

    this.signInBtn?.root?.setAttribute('href', (lang === DEFAULT_LANGUAGE ? '' : `/${lang}`) + '/sign-in');
    this.cancelBtn?.root?.setAttribute('href', (lang === DEFAULT_LANGUAGE ? '' : `/${lang}`) + '/');

    await this.authService?.load(lang, page, firstLoad);
  }
}

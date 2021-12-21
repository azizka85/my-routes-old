import * as router from '@azizka/router';

import { MDCRipple } from '@material/ripple';
import { MDCDialog } from '@material/dialog';

import { Component, Page } from "../view";

export class AuthServiceComponent implements Component {
  protected titleElem: HTMLElement | null = null;

  protected googleBtn: MDCRipple | null = null;

  protected dialog: MDCDialog | null = null;
  protected dialogTitle: HTMLElement | null = null;
  protected dialogContent: HTMLIFrameElement | null = null;

  protected googleBtnClickHandler: (event: MouseEvent) => void;

  constructor() {
    this.googleBtnClickHandler = event => {
      event.preventDefault();

      this.dialog?.open();
      
      if(this.dialogTitle) {
        this.dialogTitle.textContent = `Google - ${window.tr('Auth service')}`;        
      }

      if(this.dialogContent) {
        this.dialogContent.src = this.googleBtn?.root.getAttribute('href') || '';
      }
    };
  }

  async init(page: Page, firstTime: boolean) {
    this.titleElem = page.elem?.querySelector('[data-title="auth-service"]') || null;

    const googleBtnElem = page.elem?.querySelector('[data-button="auth-service-google"]');

    if(googleBtnElem) {
      this.googleBtn = new MDCRipple(googleBtnElem);
    }

    const dialogElem = page.elem?.querySelector('.mdc-dialog');

    if(dialogElem) {
      this.dialog = new MDCDialog(dialogElem);
      this.dialogTitle = dialogElem.querySelector('.mdc-dialog__title');
      this.dialogContent = dialogElem.querySelector('.mdc-dialog__content');
    }
  }

  async mount() {
    this.googleBtn?.listen('click', this.googleBtnClickHandler);
  }

  async unmount() {
    this.googleBtn?.unlisten('click', this.googleBtnClickHandler);
  }

  async load(lang: string, page: router.Page, firstLoad: boolean) {
    if(this.titleElem) {
      this.titleElem.textContent = window.tr('Or use the service');
    }
  }
}

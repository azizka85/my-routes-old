import * as router from '@azizka/router';

import { MDCRipple } from '@material/ripple';

import { Component, Page } from "../view";

export class AuthServiceComponent implements Component {
  protected titleElem: HTMLElement | null = null;

  protected googleBtn: MDCRipple | null = null;

  async init(page: Page, firstTime: boolean) {
    this.titleElem = page.elem?.querySelector('[data-title="auth-service"]') || null;

    const googleBtnElem = page.elem?.querySelector('[data-button="auth-service-google"]');

    if(googleBtnElem) {
      this.googleBtn = new MDCRipple(googleBtnElem);
    }
  }

  async load(lang: string, page: router.Page, firstLoad: boolean) {
    if(this.titleElem) {
      this.titleElem.textContent = window.tr('Or use the service');
    }
  }
}

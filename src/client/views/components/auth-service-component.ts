import * as router from '@azizka/router';

import { Component, Page } from "../view";

export class AuthServiceComponent implements Component {
  protected titleElem: HTMLElement | null = null;

  async init(page: Page, firstTime: boolean) {
    this.titleElem = page.elem?.querySelector('[data-title="auth-service"]') || null;
  }

  async load?(lang: string, page: router.Page, firstLoad: boolean) {
    if(this.titleElem) {
      this.titleElem.textContent = window.tr('Or use the service');
    }
  }
}

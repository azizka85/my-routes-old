import './types/window';

import { 
  MAIN_LAYOUT,
  HOME_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE 
} from '../globals';

import { Page } from '@azizka/router';

import * as view from './views/view';
import { DefaultLayout } from './views/layouts/default/default-layout';
import { BaseLayout } from './views/layouts/base-layout';

const pages: {
  [key: string]: view.Page
} = {};

const layouts: {
  [key: string]: BaseLayout & view.Page
} = {};

export async function loadHomePage(page: Page, firstTime: boolean) {
  window.page = page;

  let parent: HTMLElement | null = null;

  if(!(HOME_PAGE in pages)) {    
    const module = await import('./views/pages/home/home-page');
    
    pages[HOME_PAGE] = module.HomePage.instance;
    parent = await pages[HOME_PAGE].init(parent, firstTime);
  } 

  if(!(MAIN_LAYOUT in layouts)) {
    const module = await import('./views/layouts/main/main-layout');

    layouts[MAIN_LAYOUT] = module.MainLayout.instance;
    parent = await layouts[MAIN_LAYOUT].init(parent, firstTime);
  } 
  
  if(DefaultLayout.instance['content'] !== layouts[MAIN_LAYOUT]) {
    DefaultLayout.instance.replaceContent(layouts[MAIN_LAYOUT]);  
  }
  
  if(layouts[MAIN_LAYOUT]['content'] !== pages[HOME_PAGE]) {
    layouts[MAIN_LAYOUT].replaceContent(pages[HOME_PAGE]);
  }
}

export async function loadSignInPage(page: Page, firstTime: boolean) {
  window.page = page;

  let parent: HTMLElement | null = null;

  if(!(SIGN_IN_PAGE in pages)) {
    const module = await import('./views/pages/signin/signin-page');

    pages[SIGN_IN_PAGE] = module.SignInPage.instance;
    parent = await pages[SIGN_IN_PAGE].init(parent, firstTime);
  }

  if(DefaultLayout.instance['content'] !== pages[SIGN_IN_PAGE]) {
    DefaultLayout.instance.replaceContent(pages[SIGN_IN_PAGE]);
  }
}

export async function loadSignUpPage(page: Page, firstTime: boolean) {
  window.page = page;

  let parent: HTMLElement | null = null;

  if(!(SIGN_UP_PAGE in pages)) {
    const module = await import('./views/pages/signup/signup-page');

    pages[SIGN_UP_PAGE] = module.SignUpPage.instance;
    parent = await pages[SIGN_UP_PAGE].init(parent, firstTime);
  }

  if(DefaultLayout.instance['content'] !== pages[SIGN_UP_PAGE]) {
    DefaultLayout.instance.replaceContent(pages[SIGN_UP_PAGE]);
  }
}

window.pages = pages;
window.layouts = layouts;

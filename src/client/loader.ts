import './types/window';

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

  let homePageFirstLoad = false;
  let mainLayoutFirstLoad = false;

  if(!('home-page' in pages)) {    
    const module = await import('./views/pages/home/home-page');
    
    pages['home-page'] = module.HomePage.instance;
    parent = await pages['home-page'].init(parent, firstTime);

    homePageFirstLoad = true;
  } 

  if(!('main-layout' in layouts)) {
    const module = await import('./views/layouts/main/main-layout');

    layouts['main-layout'] = module.MainLayout.instance;
    parent = await layouts['main-layout'].init(parent, firstTime);

    mainLayoutFirstLoad = true;
  } 
  
  if(DefaultLayout.instance['content'] !== layouts['main-layout']) {
    DefaultLayout.instance.replaceContent(layouts['main-layout']);  
  }
  
  if(layouts['main-layout']['content'] !== pages['home-page']) {
    layouts['main-layout'].replaceContent(pages['home-page']);
  }

  layouts['main-layout']?.load?.(page, mainLayoutFirstLoad);
  pages['home-page']?.load?.(page, homePageFirstLoad);
}

export async function loadSignInPage(page: Page, firstTime: boolean) {
  window.page = page;

  let parent: HTMLElement | null = null;

  let signInPageFirstLoad = false;

  if(!('signin-page' in pages)) {
    const module = await import('./views/pages/signin/signin-page');

    pages['signin-page'] = module.SignInPage.instance;
    parent = await pages['signin-page'].init(parent, firstTime);

    signInPageFirstLoad = true;
  }

  if(DefaultLayout.instance['content'] !== pages['signin-page']) {
    DefaultLayout.instance.replaceContent(pages['signin-page']);
  }

  pages['signin-page']?.load?.(page, signInPageFirstLoad);
}

export async function loadSignUpPage(page: Page, firstTime: boolean) {
  window.page = page;

  let parent: HTMLElement | null = null;

  let signUpPageFirstLoad = false;

  if(!('signup-page' in pages)) {
    const module = await import('./views/pages/signup/signup-page');

    pages['signup-page'] = module.SignUpPage.instance;
    parent = await pages['signup-page'].init(parent, firstTime);

    signUpPageFirstLoad = true;
  }

  if(DefaultLayout.instance['content'] !== pages['signup-page']) {
    DefaultLayout.instance.replaceContent(pages['signup-page']);
  }

  pages['signup-page']?.load?.(page, signUpPageFirstLoad);
}

window.pages = pages;
window.layouts = layouts;

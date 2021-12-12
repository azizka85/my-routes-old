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

async function initMainLayout(parent: HTMLElement | null, firstTime: boolean) {
  let firstLoad = false;

  if(!('main-layout' in layouts)) {
    const module = await import('./views/layouts/main/main-layout');
    
    parent = await module.MainLayout.instance.init(parent, firstTime);

    layouts['main-layout'] = module.MainLayout.instance;

    firstLoad = true;
  } 
  
  return firstLoad;
}

export async function loadHomePage(page: Page, firstTime: boolean) {
  window.page = page;

  let parent: HTMLElement | null = null;

  let homePageFirstLoad = false;  

  if(!('home-page' in pages)) {    
    const module = await import('./views/pages/home/home-page');
        
    parent = await module.HomePage.instance.init(parent, firstTime);

    pages['home-page'] = module.HomePage.instance;

    homePageFirstLoad = true;
  } 

  const mainLayoutFirstLoad = await initMainLayout(parent, firstTime);

  if(window.page.fragment === page.fragment) {
    if(DefaultLayout.instance['content'] !== layouts['main-layout']) {
      await DefaultLayout.instance.replaceContent(layouts['main-layout']);  
    }

    if(layouts['main-layout']['content'] !== pages['home-page']) {
      await layouts['main-layout'].replaceContent(pages['home-page']);
    }

    await layouts['main-layout']?.load?.(page, mainLayoutFirstLoad);
    await pages['home-page']?.load?.(page, homePageFirstLoad);
  }    
}

export async function loadSignInPage(page: Page, firstTime: boolean) {
  window.page = page;

  let parent: HTMLElement | null = null;

  let signInPageFirstLoad = false;

  if(!('signin-page' in pages)) {
    const module = await import('./views/pages/signin/signin-page');
    
    parent = await module.SignInPage.instance.init(parent, firstTime);

    pages['signin-page'] = module.SignInPage.instance;

    signInPageFirstLoad = true;
  }

  if(window.page.fragment === page.fragment) {
    if(DefaultLayout.instance['content'] !== pages['signin-page']) {
      await DefaultLayout.instance.replaceContent(pages['signin-page']);
    }
  
    await pages['signin-page']?.load?.(page, signInPageFirstLoad);
  }
}

export async function loadSignUpPage(page: Page, firstTime: boolean) {
  window.page = page;

  let parent: HTMLElement | null = null;

  let signUpPageFirstLoad = false;

  if(!('signup-page' in pages)) {
    const module = await import('./views/pages/signup/signup-page');
    
    parent = await module.SignUpPage.instance.init(parent, firstTime);

    pages['signup-page'] = module.SignUpPage.instance;

    signUpPageFirstLoad = true;
  }

  if(window.page.fragment === page.fragment) {
    if(DefaultLayout.instance['content'] !== pages['signup-page']) {
      await DefaultLayout.instance.replaceContent(pages['signup-page']);
    }
  
    await pages['signup-page']?.load?.(page, signUpPageFirstLoad);
  }
}

window.pages = pages;
window.layouts = layouts;

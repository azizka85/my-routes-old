import './types/window';

import { PAGE_ROOT } from '../globals';

import { Router } from '@azizka/router';

import { loadPage } from './loader';

function hideSplash() {
  const splashElem = document.querySelector('.splash');

  splashElem?.classList.remove('splash--open');   
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    let firstTime = true;
  
    const router = new Router({
      root: PAGE_ROOT,
      routes: [{
        rule: '',
        async handler(page) {
          await loadPage(
            page, 'home-page', 
            ['main-layout'],
            firstTime
          );
        },
        options: {}
      }, {
        rule: '/sign-in',
        async handler(page) {
          await loadPage(page, 'sign-in-page', [], firstTime);
        },
        options: {}
      }, {
        rule: '/sign-up',
        async handler(page) {
          await loadPage(page, 'sign-up-page', [], firstTime);
        }, 
        options: {}
      }]
    });
    
    window.pages = {};
    window.layouts = {};
    window.router = router;
    
    router.addUriListener();
    
    router.processUri().then(
      () => hideSplash(),
      reason => {
        console.error(reason);              
        hideSplash();
      }
    );
    
    firstTime = false;         
  }, 500);  
});

import './styles/main.scss';

import './types/window';

import { PAGE_ROOT } from '../globals';

import { Router } from '@azizka/router';

import { loadHomePage, loadSignInPage, loadSignUpPage } from './loader';

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
          await loadHomePage(page, firstTime);
        },
        options: {}
      }, {
        rule: '/signin',
        async handler(page) {
          await loadSignInPage(page, firstTime);
        },
        options: {}
      }, {
        rule: '/signup',
        async handler(page) {
          await loadSignUpPage(page, firstTime);
        }, 
        options: {}
      }]
    });
    
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

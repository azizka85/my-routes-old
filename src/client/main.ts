import './styles/main.scss';

import './types/window';

import { PAGE_ROOT } from '../globals';

import { Router } from '@azizka/router';

import { loadHomePage, loadSignInPage, loadSignUpPage } from './loader';

let firstTime = true;

const router = new Router({
  root: PAGE_ROOT,
  routes: [{
    rule: '',
    handler(page) {
      loadHomePage(page, firstTime);
    },
    options: {}
  }, {
    rule: '/signin',
    handler(page) {
      loadSignInPage(page, firstTime);
    },
    options: {}
  }, {
    rule: '/signup',
    handler(page) {
      loadSignUpPage(page, firstTime);
    }, 
    options: {}
  }]
});

window.router = router;

router.addUriListener();

router.processUri();

firstTime = false;

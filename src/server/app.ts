import './declarations';

import { 
  PAGE_ROOT
} from '../globals';

import express from 'express';

import Handlebars from 'handlebars';

import { getLayoutHandlers, renderPage, stringToArray } from './helpers/layout-helpers';

import homePageTpl from './templates/pages/home-page.hbs';
import signInPageTpl from './templates/pages/signin-page.hbs';
import signUpPageTpl from './templates/pages/signup-page.hbs';

import { version } from '../../package.json';

const mode = process.env.NODE_ENV || 'development';
const dev = mode === 'development';

const homePage = Handlebars.template(homePageTpl);
const signInPage = Handlebars.template(signInPageTpl);
const signUpPage = Handlebars.template(signUpPageTpl);

export const app = express();
export const port = parseInt(process.env.PORT || '') || 3000;

app.use(express.static('public'));

if(dev) {
  app.use(express.static('./'));
}

app.get('/', (req, res) => {
  try {
    let data: any = {
      time: Date.now(),
      PAGE_ROOT
    };
  
    if(req.query.ajax && !req.query.init) {
      res.send(data);
    } else {             
      const layouts = !req.query.ajax 
        ? ['main-layout'] 
        : stringToArray(req.query.layouts as string);
  
      const layoutHandlers = getLayoutHandlers(layouts);
  
      res.send(
        renderPage(
          version,
          req,
          'home-page',
          homePage,
          data,
          layoutHandlers
        )
      );
    }
  } finally {
    res.end();
  }
});

app.get('/signin', (req, res) => {
  try {
    let data: any = {
      time: Date.now(),
      PAGE_ROOT
    };
  
    if(req.query.ajax && !req.query.init) {
      res.send(data);
    } else {          
      res.send(
        renderPage(
          version,
          req,
          'signin-page',
          signInPage,
          data
        )
      );
    }
  } finally {
    res.end();
  }
});

app.get('/signup', (req, res) => {
  try {
    let data: any = {
      time: Date.now(),
      PAGE_ROOT
    };
  
    if(req.query.ajax && !req.query.init) {
      res.send(data);
    } else {          
      res.send(
        renderPage(
          version,
          req,
          'signup-page',
          signUpPage,
          data
        )
      );
    }
  } finally {
    res.end();
  }
});

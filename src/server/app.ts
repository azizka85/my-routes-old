import './declarations';

import { 
  PAGE_ROOT
} from '../globals';

import express from 'express';

import Handlebars from 'handlebars';

import { condition, toggleQueryParameter } from '../helpers';

import defaultLayoutTpl from './templates/layouts/default-layout.hbs';
import mainLayoutTpl from './templates/layouts/main-layout.hbs';

import homePageTpl from './templates/pages/home-page.hbs';
import signInPageTpl from './templates/pages/signin-page.hbs';
import signUpPageTpl from './templates/pages/signup-page.hbs';

import { version } from '../../package.json';

const mode = process.env.NODE_ENV || 'development';
const dev = mode === 'development';

const defaultLayout = Handlebars.template(defaultLayoutTpl);
const mainLayout = Handlebars.template(mainLayoutTpl);

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
      let partials: any = {};
      let helpers: any = {};
  
      let view = homePage;
      
      let layouts = req.query.layouts as string | undefined;
  
      if(!req.query.ajax || layouts?.includes('main-layout')) {
        view = mainLayout;
  
        partials = { homePage };
        helpers = { condition, toggleQueryParameter };

        const navigation = req.query['main-layout-navigation'] === '1';
        const search = req.query['main-layout-search'] === '1';
  
        data = {
          navigation,
          search,
          query: req.query,
          content: 'homePage',
          contentData: data
        };
      }
  
      if(!req.query.ajax) {
        view = defaultLayout;
  
        partials = {
          ...partials,
          mainLayout
        };
  
        data = {
          version,
          content: 'mainLayout',
          contentData: data
        };
      }
  
      res.send(view({ 
        data 
      }, {
        partials,
        helpers
      }));
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
      let partials: any = {};
  
      let view = signInPage;
  
      if(!req.query.ajax) {
        view = defaultLayout;
  
        partials = { signInPage };
  
        data = {
          version,
          content: 'signInPage',
          contentData: data
        };
      }
  
      res.send(view({ 
        data 
      }, {
        partials
      }));
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
      let partials: any = {};
  
      let view = signUpPage;
  
      if(!req.query.ajax) {
        view = defaultLayout;
  
        partials = { signUpPage };
  
        data = {
          version,
          content: 'signUpPage',
          contentData: data
        };
      }
  
      res.send(view({ 
        data 
      }, {
        partials
      }));
    }
  } finally {
    res.end();
  }
});
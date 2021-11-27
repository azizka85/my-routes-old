import './declarations';

import { 
  PAGE_ROOT,
  MAIN_LAYOUT
} from '../globals';

import express from 'express';

import defaultLayout from './templates/layouts/default-layout.hbs';
import mainLayout from './templates/layouts/main-layout.hbs';

import homePage from './templates/pages/home-page.hbs';
import signInPage from './templates/pages/signin-page.hbs';
import signUpPage from './templates/pages/signup-page.hbs';

const app = express();
const port = parseInt(process.env.PORT || '') || 10001;

app.use(express.static('public'));

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
  
      let view = homePage;
      
      let layouts = req.query.layouts as string | undefined;
  
      if(!req.query.ajax || layouts?.includes(MAIN_LAYOUT)) {
        view = mainLayout;
  
        partials = { homePage };
  
        data = {
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
          requestTime: Date.now(),
          content: 'mainLayout',
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
          requestTime: Date.now(),
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
          requestTime: Date.now(),
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

app.listen(port, () => console.log(`Running on port: ${port}`));

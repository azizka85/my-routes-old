import '../declarations';

import express from 'express';

import Handlebars from 'handlebars';

import { 
  PAGE_ROOT
} from '../../globals';

import { renderPage } from '../helpers/layout-helpers';

import { version } from '../../../package.json';

import signUpPageTpl from '../templates/pages/signup-page.hbs';

const signUpPage = Handlebars.template(signUpPageTpl);

const router = express.Router();

router.get('', (req, res) => {
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

export default router;

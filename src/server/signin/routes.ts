import '../declarations';

import express from 'express';

import Handlebars from 'handlebars';

import { 
  PAGE_ROOT
} from '../../globals';

import { renderPage } from '../helpers/layout-helpers';

import { version } from '../../../package.json';

import signInPageTpl from '../templates/pages/signin-page.hbs';

const signInPage = Handlebars.template(signInPageTpl);

const router = express.Router();

router.get('', (req, res) => {
  try {
    const data: any = {
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

export default router;

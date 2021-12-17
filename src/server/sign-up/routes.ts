import '../declarations';

import express from 'express';

import { 
  DEFAULT_LANGUAGE,
  PAGE_ROOT
} from '../../globals';

import { trimSlashes } from '../../helpers';
import { Langs } from '../helpers/locale-helpers';
import { renderPage } from '../helpers/layout-helpers';

import signUpPage from '../templates/pages/sign-up-page';

import authServiceComponent from '../templates/components/auth-service-component';

import { version } from '../../../package.json';

const router = express.Router({ mergeParams: true });

router.get('', (req, res) => {
  try {
    const params = req.params as any;
    const lang = trimSlashes(params[0] || DEFAULT_LANGUAGE) as Langs;

    const rootLink = PAGE_ROOT + (params[0] ? `${lang}/` : '');

    const data: any = {
      time: Date.now()
    };
  
    if(req.query.ajax && !req.query.init) {
      res.send(data);
    } else {          
      res.send(
        renderPage(
          lang,
          rootLink,
          version,
          req,
          'sign-up-page',
          signUpPage, 
          data,
          undefined, {
            'auth-service-component': authServiceComponent
          }
        )
      );
    }
  } finally {
    res.end();
  }
});

export default router;

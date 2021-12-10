import express from 'express';

import homeRoutes from './home/routes';

import signInRoutes from './signin/routes';
import signUpRoutes from './signup/routes';

const mode = process.env.NODE_ENV || 'development';
const dev = mode === 'development';

export const app = express();
export const port = parseInt(process.env.PORT || '') || 3000;

app.use(express.static('public'));

if(dev) {
  app.use(express.static('./'));
}

app.use('/', homeRoutes);

app.use('/signin', signInRoutes);
app.use('/signup', signUpRoutes);

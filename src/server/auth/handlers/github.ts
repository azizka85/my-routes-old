import express from 'express';

import fetch from 'node-fetch';

import { getQueryParameters } from '../../../helpers';

import dialogReceiveDataHandler from '../../templates/handlers/dialog-receive-data-handler';

import { DIALOG_DATA_RECEIVED_EVENT_TYPE } from '../../../globals';

const githubAuthorizeUrl = 'https://github.com/login/oauth/authorize';
const githubAccessTokenUrl = 'https://github.com/login/oauth/access_token';
const githubUserInfoUrl = 'https://api.github.com/user';

export default {
  service(req: express.Request, res: express.Response) {
    const params = {
      client_id: process.env.GITHUB_CLIENT_ID
    } as any;

    if(req.query.ajax) {
      params.state = 1;
    }

    res.redirect(`${githubAuthorizeUrl}?${getQueryParameters(params)}`);
  },

  async callback(req: express.Request, res: express.Response) {
    const ajax = req.query.state === '1';

    const params = new URLSearchParams();

    params.append('client_id', process.env.GITHUB_CLIENT_ID as string);
    params.append('client_secret', process.env.GITHUB_CLIENT_SECRET as string);
    params.append('code', req.query.code as string);

    const response = await fetch(
      githubAccessTokenUrl, {
        method: 'POST',
        headers: { accept: 'application/json' },
        body: params
      }
    );

    const responseData = await response.json() as any;       

    if(responseData.access_token) {
      const userResponse = await fetch(
        githubUserInfoUrl, {
          headers: { Authorization: `token ${responseData.access_token}` }
        }
      );

      const userData = await userResponse.json() as any;

      const data = {
        name: userData.name,
        email: userData.email,
        photo: userData.avatar_url,
        oauthApp: 'github'          
      };

      if(req.session) {
        req.session.oauthApp = 'github';
        req.session.accessToken = responseData.access_token;
        req.session.tokenType = responseData.token_type;
        req.session.scope = responseData.scope;
        req.session.user = data;
      }      

      if(ajax) {
        res.send(
          dialogReceiveDataHandler({
            data: JSON.stringify(data),
            DIALOG_DATA_RECEIVED_EVENT_TYPE
          })
        );
      } else {
        // res.redirect('/');
        res.send(data);
      }
    } else {
      res.statusCode = 401;
      res.send(responseData);
    }
  }
};
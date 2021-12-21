import '../../types/window';

import { JSDOM } from "jsdom";

import { MDCRipple } from '@material/ripple';

import { DEFAULT_LANGUAGE } from '../../../globals';

import { locales } from '../../../server/helpers/locale-helpers';

import { LocationMock } from '../../mocks/location-mock';
import { HistoryMock } from '../../mocks/history-mock';
import { fetchGetMock } from '../../mocks/request/fetch-get-mock';

import { SignInPage } from "./sign-in-page";

describe('SignInPage test', () => {
  beforeEach(() => {
    const dom = new JSDOM();    

    global.document = dom.window.document;
    global.window = (dom.window as unknown) as Window & typeof globalThis;  
    global.location = (new LocationMock() as unknown) as Location;
    global.history = (new HistoryMock(location) as unknown) as History;

    location.pathname = '/ru/sign-in';
    location.search = '';  

    global.requestAnimationFrame = () => 0;

    global.MutationObserver = dom.window.MutationObserver;

    global.Event = (document.defaultView as Window & typeof globalThis).Event;
    global.CustomEvent = (document.defaultView as Window & typeof globalThis).CustomEvent;

    global.HTMLElement = dom.window.HTMLElement;
    global.HTMLInputElement = dom.window.HTMLInputElement;

    window.layouts = {};
    window.pages = {};    

    global.fetch = req => (fetchGetMock(req as string) as unknown) as Promise<Response>;
  });

  test('Should get single instance of SignInPage', () => {
    const instance = SignInPage.instance;

    expect(instance).toBeTruthy();
    expect(instance).toBeInstanceOf(SignInPage);
    expect(instance).toBe(SignInPage.instance);

    expect(instance['node']).toBeFalsy();

    expect(instance['titleElem']).toBeFalsy();

    expect(instance['emailHelperElem']).toBeFalsy();

    expect(instance['passwordInputElem']).toBeFalsy();
    expect(instance['passwordLabelElem']).toBeFalsy();
    expect(instance['passwordHelperElem']).toBeFalsy();

    expect(instance['signUpBtn']).toBeFalsy();
    expect(instance['signUpBtnLabel']).toBeFalsy();

    expect(instance['signInBtnLabel']).toBeFalsy();

    expect(instance['cancelBtn']).toBeFalsy();
    expect(instance['cancelBtnLabel']).toBeFalsy();

    expect(instance['authService']).toBeFalsy();
  });

  test('Should load content via fetch content data', async () => {
    const pageInstance = SignInPage.instance;

    await pageInstance.init(null, false);

    window.tr = locales[DEFAULT_LANGUAGE];
    window.pages['sign-in-page'] = pageInstance;

    await pageInstance.load('ru', {
      fragment: '',
      query: {},
      match: [],
      options: {}
    }, true);

    expect(pageInstance['node']).toBeTruthy();
    expect(pageInstance['node']).toBeInstanceOf(HTMLElement);
    expect(pageInstance['node']?.getAttribute('data-page')).toEqual('signin-page');

    expect(pageInstance['titleElem']).toBeTruthy();
    expect(pageInstance['titleElem']).toBeInstanceOf(HTMLElement);
    expect(pageInstance['titleElem']?.textContent).toContain(window.tr('Sign In'));

    expect(pageInstance['emailHelperElem']).toBeTruthy();
    expect(pageInstance['emailHelperElem']).toBeInstanceOf(HTMLElement);
    expect(pageInstance['emailHelperElem']?.textContent).toContain(window.tr('Email required'));

    expect(pageInstance['passwordInputElem']).toBeTruthy();
    expect(pageInstance['passwordInputElem']).toBeInstanceOf(HTMLInputElement);
    expect(pageInstance['passwordInputElem']?.required).toBeTruthy();
    expect(pageInstance['passwordInputElem']?.placeholder).toContain(window.tr('Password'));

    expect(pageInstance['passwordLabelElem']).toBeTruthy();
    expect(pageInstance['passwordLabelElem']).toBeInstanceOf(HTMLElement);
    expect(pageInstance['passwordLabelElem']?.textContent).toContain(window.tr('Password'));

    expect(pageInstance['passwordHelperElem']).toBeTruthy();
    expect(pageInstance['passwordHelperElem']).toBeInstanceOf(HTMLElement);
    expect(pageInstance['passwordHelperElem']?.textContent).toContain(window.tr('Password required'));

    expect(pageInstance['signUpBtn']).toBeTruthy();
    expect(pageInstance['signUpBtn']).toBeInstanceOf(MDCRipple);
    expect(pageInstance['signUpBtn']?.root?.getAttribute('data-button')).toEqual('sign-up');
    expect(pageInstance['signUpBtn']?.root?.getAttribute('href')).toEqual('/ru/sign-up');

    expect(pageInstance['signUpBtnLabel']).toBeTruthy();
    expect(pageInstance['signUpBtnLabel']).toBeInstanceOf(HTMLElement);
    expect(pageInstance['signUpBtnLabel']?.textContent).toContain(window.tr('Sign Up'));

    expect(pageInstance['signInBtnLabel']).toBeTruthy();
    expect(pageInstance['signInBtnLabel']).toBeInstanceOf(HTMLElement);
    expect(pageInstance['signInBtnLabel']?.textContent).toContain(window.tr('Sign In'));

    expect(pageInstance['cancelBtn']).toBeTruthy();
    expect(pageInstance['cancelBtn']).toBeInstanceOf(MDCRipple);
    expect(pageInstance['cancelBtn']?.root?.getAttribute('data-button')).toEqual('cancel');
    expect(pageInstance['cancelBtn']?.root?.getAttribute('href')).toEqual('/ru/');

    expect(pageInstance['cancelBtnLabel']).toBeTruthy();
    expect(pageInstance['cancelBtnLabel']).toBeInstanceOf(HTMLElement);
    expect(pageInstance['cancelBtnLabel']?.textContent).toContain(window.tr('Cancel'));

    expect(pageInstance['authService']).toBeTruthy();
  });
});

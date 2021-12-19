import '../../types/window';

import { JSDOM } from "jsdom";

import { DEFAULT_LANGUAGE } from '../../../globals';

import { locales } from '../../../server/helpers/locale-helpers';

import { LocationMock } from '../../mocks/location-mock';
import { HistoryMock } from '../../mocks/history-mock';
import { fetchGetMock } from '../../mocks/request/fetch-get-mock';

import { SignUpPage } from "./sign-up-page";

describe('SignUpPage test', () => {
  beforeEach(() => {
    const dom = new JSDOM();    

    global.document = dom.window.document;
    global.window = (dom.window as unknown) as Window & typeof globalThis;  
    global.location = (new LocationMock() as unknown) as Location;
    global.history = (new HistoryMock(location) as unknown) as History;

    location.pathname = '/ru/sign-up';
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

  test('Should get single instance of SignUpPage', () => {
    const instance = SignUpPage.instance;

    expect(instance).toBeTruthy();
    expect(instance).toBeInstanceOf(SignUpPage);
    expect(instance).toBe(SignUpPage.instance);

    expect(instance['node']).toBeFalsy();

    expect(instance['titleElem']).toBeFalsy();

    expect(instance['emailHelperElem']).toBeFalsy();

    expect(instance['nameInputElem']).toBeFalsy();
    expect(instance['nameLabelElem']).toBeFalsy();
    expect(instance['nameHelperElem']).toBeFalsy();

    expect(instance['passwordInputElem']).toBeFalsy();
    expect(instance['passwordLabelElem']).toBeFalsy();
    expect(instance['passwordHelperElem']).toBeFalsy();

    expect(instance['signInBtn']).toBeFalsy();
    expect(instance['signInBtnLabel']).toBeFalsy();

    expect(instance['signUpBtnLabel']).toBeFalsy();

    expect(instance['cancelBtn']).toBeFalsy();
    expect(instance['cancelBtnLabel']).toBeFalsy();

    expect(instance['authService']).toBeFalsy();
  });

  test('Should load content via fetch content data', async () => {
    const pageInstance = SignUpPage.instance;

    await pageInstance.init(null, false);

    window.tr = locales[DEFAULT_LANGUAGE];
    window.pages['sign-up-page'] = pageInstance;

    await pageInstance.load('ru', {
      fragment: '',
      query: {},
      match: [],
      options: {}
    }, true);

    expect(pageInstance['node']).toBeTruthy();
    expect(pageInstance['node']).toBeInstanceOf(HTMLElement);
    expect(pageInstance['node']?.getAttribute('data-page')).toEqual('signup-page');

    expect(pageInstance['titleElem']).toBeTruthy();
    expect(pageInstance['titleElem']).toBeInstanceOf(HTMLElement);
    expect(pageInstance['titleElem']?.textContent).toContain(window.tr('Sign Up'));

    expect(pageInstance['emailHelperElem']).toBeTruthy();
    expect(pageInstance['emailHelperElem']).toBeInstanceOf(HTMLElement);
    expect(pageInstance['emailHelperElem']?.textContent).toContain(window.tr('Email required'));

    expect(pageInstance['nameInputElem']).toBeTruthy();
    expect(pageInstance['nameInputElem']).toBeInstanceOf(HTMLInputElement);
    expect(pageInstance['nameInputElem']?.required).toBeTruthy();
    expect(pageInstance['nameInputElem']?.placeholder).toContain(window.tr('Name'));

    expect(pageInstance['nameLabelElem']).toBeTruthy();
    expect(pageInstance['nameLabelElem']).toBeInstanceOf(HTMLElement);
    expect(pageInstance['nameLabelElem']?.textContent).toContain(window.tr('Name'));

    expect(pageInstance['nameHelperElem']).toBeTruthy();
    expect(pageInstance['nameHelperElem']).toBeInstanceOf(HTMLElement);
    expect(pageInstance['nameHelperElem']?.textContent).toContain(window.tr('Name required'));

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

    expect(pageInstance['signInBtn']).toBeTruthy();
    expect(pageInstance['signInBtn']).toBeInstanceOf(HTMLElement);
    expect(pageInstance['signInBtn']?.getAttribute('data-button')).toEqual('sign-in');
    expect(pageInstance['signInBtn']?.getAttribute('href')).toEqual('/ru/sign-in');

    expect(pageInstance['signInBtnLabel']).toBeTruthy();
    expect(pageInstance['signInBtnLabel']).toBeInstanceOf(HTMLElement);
    expect(pageInstance['signInBtnLabel']?.textContent).toContain(window.tr('Sign In'));

    expect(pageInstance['signUpBtnLabel']).toBeTruthy();
    expect(pageInstance['signUpBtnLabel']).toBeInstanceOf(HTMLElement);
    expect(pageInstance['signUpBtnLabel']?.textContent).toContain(window.tr('Sign Up'));    

    expect(pageInstance['cancelBtn']).toBeTruthy();
    expect(pageInstance['cancelBtn']).toBeInstanceOf(HTMLElement);
    expect(pageInstance['cancelBtn']?.getAttribute('data-button')).toEqual('cancel');
    expect(pageInstance['cancelBtn']?.getAttribute('href')).toEqual('/ru/');

    expect(pageInstance['authService']).toBeTruthy();
  });
});

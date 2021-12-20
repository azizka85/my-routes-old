import '../../types/window';

import { JSDOM } from 'jsdom';

import { Router } from '@azizka/router';

import { MainLayout } from "./main-layout";

import { MDCList } from '@material/list';

import { LocationMock } from '../../mocks/location-mock';
import { HistoryMock } from '../../mocks/history-mock';

import { locales } from '../../../server/helpers/locale-helpers';
import { getQueryParameters, toggleQueryParameter } from "../../../helpers";

import { DEFAULT_LANGUAGE } from '../../../globals';

describe('MainLayout test', () => {
  beforeEach(() => {
    const dom = new JSDOM();

    global.document = dom.window.document;
    global.window = (dom.window as unknown) as Window & typeof globalThis;  
    global.location = (new LocationMock() as unknown) as Location;
    global.history = (new HistoryMock(location) as unknown) as History;

    location.pathname = '/';
    location.search = '?main-layout-navigation=1&test=123';  

    global.HTMLElement = dom.window.HTMLElement;
    global.HTMLImageElement = dom.window.HTMLImageElement;
    global.HTMLAnchorElement = dom.window.HTMLAnchorElement;
    global.HTMLFormElement = dom.window.HTMLFormElement;
    global.HTMLInputElement = dom.window.HTMLInputElement;

    global.Event = (document.defaultView as Window & typeof globalThis).Event;
    global.MouseEvent = (document.defaultView as Window & typeof globalThis).MouseEvent;
    global.FocusEvent = (document.defaultView as Window & typeof globalThis).FocusEvent;
    global.CustomEvent = (document.defaultView as Window & typeof globalThis).CustomEvent;

    window.router = new Router();
  });

  test('Should get single instance of MainLayout', () => {
    const instance = MainLayout.instance;
    
    expect(instance).toBeTruthy();
    expect(instance).toBeInstanceOf(MainLayout);
    expect(instance).toBe(MainLayout.instance);

    expect(instance['node']).toBeFalsy();

    expect(instance['appBarElem']).toBeFalsy();
    expect(instance['drawerElem']).toBeFalsy();

    expect(instance['navIcon']).toBeFalsy();
    expect(instance['searchIcon']).toBeFalsy();

    expect(instance['headerIconBtn']).toBeFalsy();

    expect(instance['signInUpElem']).toBeFalsy();

    expect(instance['list']).toBeFalsy();
    expect(instance['langList']).toBeFalsy();

    expect(instance['langElem']).toBeFalsy();
    expect(instance['langImageElem']).toBeFalsy();

    expect(instance['searchPanel']).toBeFalsy();
    expect(instance['searchForm']).toBeFalsy();   
    expect(instance['searchInput']).toBeFalsy();
  });

  test('Should init from html', async () => {
    const query = window.router.query;

    let lang = 'ru';
    const navigation = query['main-layout-navigation'] ? true : false;

    document.body.innerHTML = `
      <div data-layout="main-layout">
        <header class="app-bar">
          <div class="app-bar__row">      
            <div class="app-bar__section app-bar__section--fill">
              <div class="search search--focus">
                <form method="post">          
                  <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    class="search__input app-bar__title"
                    autocomplete="off"
                  >
                  <label  
                    for="main-content"
                    class="material-icons mdc-icon-button search__icon-left"           
                  >
                    <span class="mdc-icon-button__ripple"></span>
                    arrow_back
                  </label>
                  <button
                    type="reset" 
                    class="material-icons mdc-icon-button search__icon-right"   
                  >
                    <span class="mdc-icon-button__ripple"></span>
                    cancel
                  </button>          
                </form>    
                <div class="search__list">
                  <div style="height: 20rem;"></div>
                </div>    
              </div>
            </div>
            <div class="app-bar__section app-bar__section--align-start">
              <a 
                data-button="navigation"
                class="material-icons mdc-icon-button" 
                href="?${ toggleQueryParameter(query, 'main-layout-navigation') }"
              >
                <span class="mdc-icon-button__ripple"></span>
                menu
              </a>
            </div>
            <div class="app-bar__section app-bar__section--align-end">
              <a 
                data-button="search"
                class="material-icons mdc-icon-button" 
                href="?${ toggleQueryParameter(query, 'main-layout-search') }"
              >
                <span class="mdc-icon-button__ripple"></span>
                filter_list
              </a>
            </div>
          </div>
        </header>
        <aside class="drawer ${ navigation ? 'drawer--open' : '' }">
          <div class="drawer__header">
            <a 
              data-button="header-navigation"
              class="material-icons mdc-icon-button ${ navigation ? 'header-navigation--open' : '' }" 
              href="?${ toggleQueryParameter(query, 'main-layout-navigation') }"
            >
              <span class="mdc-icon-button__ripple">
                arrow_circle_right
              </span>        
            </a>
          </div>
          <div class="drawer__content">
            <div class="drawer__account-bar">
              <div class="drawer__account-bar__avatar">   
                <i class="material-icons">person_outline</i>       
              </div>
              <div class="drawer__account-bar__actions">   
                <br>
                <a href="/${lang}/sign-in" data-content="sign-in-up">Sign In/Up</a>
              </div>
            </div>
            <div class="drawer__lang-bar">
              <img                 
                class="drawer__lang-bar__flag"
                data-image="lang"
              >
              <label>
                <input type="checkbox">
                <div class="drawer__lang-bar__current">            
                  <span data-content="lang"></span> 
                  <i class="material-icons">arrow_circle_down</i>
                </div>
                <div class="mdc-list" data-list="lang">
                  <a 
                    data-list-item="lang-kz"
                    class="mdc-list-item ${ lang === 'kz' ? 'mdc-list-item--activated' : '' }" 
                    href="/kz?${ getQueryParameters(query) }"
                  >
                    <span class="mdc-list-item__ripple"></span>
                    <img src="/images/flags/kz.svg" class="drawer__lang-bar__flag">
                    <span class="mdc-list-item__text"></span>
                  </a>
                  <a 
                    data-list-item="lang-ru"
                    class="mdc-list-item ${ lang === 'ru' ? 'mdc-list-item--activated' : '' }" 
                    href="/ru?${ getQueryParameters(query) }"
                  >
                    <span class="mdc-list-item__ripple"></span>
                    <img src="/images/flags/ru.svg" class="drawer__lang-bar__flag">
                    <span class="mdc-list-item__text"></span>
                  </a>                  
                </div>
              </label>
            </div>          
            <div class="mdc-list" data-list="main">
              <a class="mdc-list-item mdc-list-item--activated" href="#">
                <span class="mdc-list-item__ripple"></span>
                <i class="material-icons">inbox</i>
                <span class="mdc-list-item__text">Inbox</span>
              </a>
              <a class="mdc-list-item" href="#">
                <span class="mdc-list-item__ripple"></span>
                <i class="material-icons">send</i>
                <span class="mdc-list-item__text">Outgoing</span>
              </a>            
            </div>
          </div>
        </aside>
        <main id="main-content" class="main-content app-bar--fixed-adjust">          
        </main>
      </div>  
    `;

    const instance = MainLayout.instance;

    await instance.init(null, false);

    expect(instance['node']).toBeTruthy();
    expect(instance['node']).toBeInstanceOf(HTMLElement);
    expect(instance['node']?.getAttribute('data-layout')).toEqual('main-layout');

    expect(instance['appBarElem']).toBeTruthy();
    expect(instance['appBarElem']).toBeInstanceOf(HTMLElement);
    expect(instance['appBarElem']?.classList.contains('app-bar')).toBeTruthy();
    expect(instance['appBarElem']?.classList.contains('app-bar--hide')).toBeFalsy();
    expect(instance['appBarElem']?.classList.contains('app-bar--scrolled')).toBeFalsy();

    expect(instance['drawerElem']).toBeTruthy();
    expect(instance['drawerElem']).toBeInstanceOf(HTMLElement);
    expect(instance['drawerElem']?.classList.contains('drawer--open')).toBeTruthy();

    expect(instance['navIcon']).toBeTruthy();
    expect(instance['navIcon']).toBeInstanceOf(HTMLElement);
    expect(instance['navIcon']?.getAttribute('data-button')).toEqual('navigation');
    expect(instance['navIcon']?.getAttribute('href')).toEqual(`?test=${query.test}`);

    expect(instance['searchIcon']).toBeTruthy();
    expect(instance['searchIcon']).toBeInstanceOf(HTMLElement);
    expect(instance['searchIcon']?.getAttribute('data-button')).toEqual('search');
    expect(instance['searchIcon']?.getAttribute('href')).toEqual(`?main-layout-navigation=1&test=${query.test}&main-layout-search=1`);

    expect(instance['headerIconBtn']).toBeTruthy();
    expect(instance['headerIconBtn']).toBeInstanceOf(HTMLElement);
    expect(instance['headerIconBtn']?.classList.contains('header-navigation--open')).toBeTruthy();
    expect(instance['headerIconBtn']?.getAttribute('data-button')).toEqual('header-navigation');
    expect(instance['headerIconBtn']?.getAttribute('href')).toEqual(`?test=${query.test}`);

    expect(instance['signInUpElem']).toBeTruthy();
    expect(instance['signInUpElem']).toBeInstanceOf(HTMLElement);
    expect(instance['signInUpElem']?.getAttribute('data-content')).toEqual('sign-in-up');
    expect(instance['signInUpElem']?.getAttribute('href')).toEqual(`/${lang}/sign-in`);
    expect(instance['signInUpElem']?.textContent).toContain('Sign In/Up');

    expect(instance['list']).toBeTruthy();
    expect(instance['list']).toBeInstanceOf(MDCList);
    expect(instance['list']?.listElements.length).toEqual(2);

    expect(instance['langList']).toBeTruthy();
    expect(instance['langList']).toBeInstanceOf(MDCList);
    expect(instance['langList']?.listElements.length).toEqual(2);

    expect(instance['langList']?.listElements[0]).toBeInstanceOf(HTMLAnchorElement);
    expect(instance['langList']?.listElements[0].getAttribute('data-list-item')).toEqual('lang-kz');
    expect(instance['langList']?.listElements[0].classList.contains('mdc-list-item--activated')).toBeFalsy();
    expect(instance['langList']?.listElements[0].getAttribute('href')).toEqual('/kz?main-layout-navigation=1&test=123');

    expect(instance['langList']?.listElements[1]).toBeInstanceOf(HTMLAnchorElement);
    expect(instance['langList']?.listElements[1].getAttribute('data-list-item')).toEqual('lang-ru');
    expect(instance['langList']?.listElements[1].classList.contains('mdc-list-item--activated')).toBeTruthy();
    expect(instance['langList']?.listElements[1].getAttribute('href')).toEqual('/ru?main-layout-navigation=1&test=123');

    expect(instance['langElem']).toBeTruthy();
    expect(instance['langElem']).toBeInstanceOf(HTMLElement);
    expect(instance['langElem']?.getAttribute('data-content')).toEqual('lang');

    expect(instance['langImageElem']).toBeTruthy();
    expect(instance['langImageElem']).toBeInstanceOf(HTMLImageElement);
    expect(instance['langImageElem']?.getAttribute('data-image')).toEqual('lang');

    expect(instance['searchPanel']).toBeTruthy();
    expect(instance['searchPanel']).toBeInstanceOf(HTMLElement);
    expect(instance['searchPanel']?.classList.contains('search--focus')).toBeTruthy();

    expect(instance['searchForm']).toBeTruthy();
    expect(instance['searchForm']).toBeInstanceOf(HTMLFormElement);

    expect(instance['searchInput']).toBeTruthy();
    expect(instance['searchInput']).toBeInstanceOf(HTMLInputElement);
  });

  test('Handlers should work correctly', async () => {        
    const query = window.router.query;

    window.tr = locales[DEFAULT_LANGUAGE];

    const navigation = query['main-layout-navigation'] ? true : false;

    document.body.innerHTML = `
      <div data-layout="main-layout">
        <header class="app-bar">
          <div class="app-bar__row">      
            <div class="app-bar__section app-bar__section--fill">
            <div class="search">
              <form method="post">          
                <input               
                  type="text" 
                  name="search" 
                  class="search__input app-bar__title"
                  autocomplete="off"
                >
                <button  
                  type="button"
                  class="material-icons mdc-icon-button search__icon-left"           
                >
                  <span class="mdc-icon-button__ripple"></span>
                  arrow_back
                </button>
                <button
                  type="reset" 
                  class="material-icons mdc-icon-button search__icon-right"   
                >
                  <span class="mdc-icon-button__ripple"></span>
                  cancel
                </button>          
              </form>    
              <div class="search__list">
                <div style="height: 20rem;"></div>
              </div>    
            </div>
            </div>
            <div class="app-bar__section app-bar__section--align-start">
              <a 
                data-button="navigation"
                class="material-icons mdc-icon-button" 
                href="?${ toggleQueryParameter(query, 'main-layout-navigation') }"
              >
                <span class="mdc-icon-button__ripple"></span>
                menu
              </a>
            </div>
            <div class="app-bar__section app-bar__section--align-end">
              <a 
                data-button="search"
                class="material-icons mdc-icon-button" 
                href="?${ toggleQueryParameter(query, 'main-layout-search') }"
              >
                <span class="mdc-icon-button__ripple"></span>
                filter_list
              </a>
            </div>
          </div>
        </header>
        <aside class="drawer ${ navigation ? 'drawer--open' : '' }">
          <div class="drawer__header">
            <a 
              data-button="header-navigation"
              class="material-icons mdc-icon-button" 
              href="?${ toggleQueryParameter(query, 'main-layout-navigation') }"
            >
              <span class="mdc-icon-button__ripple">
                ${ navigation ? 'arrow_circle_left' : 'arrow_circle_right' }
              </span>        
            </a>
          </div>
          <div class="drawer__content">
            <div class="drawer__account-bar">
              <div class="drawer__account-bar__avatar">   
                <i class="material-icons">person_outline</i>       
              </div>
              <div class="drawer__account-bar__actions">   
                <br>
                <a href="/en/sign-in" data-content="sign-in-up">Sign In/Up</a>
              </div>
            </div>
            <div class="drawer__lang-bar">
              <img                 
                class="drawer__lang-bar__flag"
                data-image="lang"
              >
              <label>
                <input type="checkbox">
                <div class="drawer__lang-bar__current">            
                  <span data-content="lang"></span> 
                  <i class="material-icons">arrow_circle_down</i>
                </div>
                <div class="mdc-list" data-list="lang">
                  <a 
                    data-list-item="lang-kz"
                    class="mdc-list-item" 
                    href="/kz"
                  >
                    <span class="mdc-list-item__ripple"></span>
                    <img src="/images/flags/kz.svg" class="drawer__lang-bar__flag">
                    <span class="mdc-list-item__text"></span>
                  </a>
                  <a 
                    data-list-item="lang-ru"
                    class="mdc-list-item" 
                    href="/ru"
                  >
                    <span class="mdc-list-item__ripple"></span>
                    <img src="/images/flags/ru.svg" class="drawer__lang-bar__flag">
                    <span class="mdc-list-item__text"></span>
                  </a>                  
                </div>
              </label>
            </div> 
            <div class="mdc-list" data-list="main">
              <a class="mdc-list-item mdc-list-item--activated" href="#">
                <span class="mdc-list-item__ripple"></span>
                <i class="material-icons">inbox</i>
                <span class="mdc-list-item__text">Inbox</span>
              </a>
              <a class="mdc-list-item" href="#">
                <span class="mdc-list-item__ripple"></span>
                <i class="material-icons">send</i>
                <span class="mdc-list-item__text">Outgoing</span>
              </a>
              <a class="mdc-list-item" href="#">
                <span class="mdc-list-item__ripple"></span>
                <i class="material-icons">drafts</i>
                <span class="mdc-list-item__text">Drafts</span>
              </a>
            </div>
          </div>
        </aside>
        <main id="main-content" class="main-content app-bar--fixed-adjust">          
        </main>
      </div>  
    `;

    const instance = MainLayout.instance;

    await instance.init(null, false);
    
    const objWindow = window as any;

    objWindow.scrollY = 100;
    
    window.dispatchEvent(new Event('scroll'));

    expect(instance['appBarElem']?.classList.contains('app-bar--hide')).toBeTruthy();
    expect(instance['appBarElem']?.classList.contains('app-bar--scrolled')).toBeTruthy();

    objWindow.scrollY = 50;

    window.dispatchEvent(new Event('scroll'));

    expect(instance['appBarElem']?.classList.contains('app-bar--hide')).toBeFalsy();
    expect(instance['appBarElem']?.classList.contains('app-bar--scrolled')).toBeTruthy();

    objWindow.scrollY = 0;

    window.dispatchEvent(new Event('scroll'));

    expect(instance['appBarElem']?.classList.contains('app-bar--hide')).toBeFalsy();
    expect(instance['appBarElem']?.classList.contains('app-bar--scrolled')).toBeFalsy();

    instance['navIcon']?.dispatchEvent(new MouseEvent('click'));
    
    await instance.load(DEFAULT_LANGUAGE, {
      fragment: window.router.fragment,
      query: window.router.query,
      match: [],
      options: {}
    }, false);
    
    expect(instance['drawerElem']?.classList.contains('drawer--open')).toBeFalsy();
    expect(instance['navIcon']?.getAttribute('href')).toEqual(`?test=${query.test}&main-layout-navigation=1`);
    expect(instance['headerIconBtn']?.classList.contains('header-navigation--open')).toBeFalsy();
    expect(instance['headerIconBtn']?.getAttribute('href')).toEqual(`?test=${query.test}&main-layout-navigation=1`);    
    expect(instance['searchIcon']?.getAttribute('href')).toEqual(`?test=${query.test}&main-layout-search=1`);
    expect(instance['langList']?.listElements[0].classList.contains('mdc-list-item--activated')).toBeTruthy();
    expect(instance['langList']?.listElements[0].getAttribute('href')).toEqual('/kz/?test=123');
    expect(instance['langList']?.listElements[1].classList.contains('mdc-list-item--activated')).toBeFalsy();
    expect(instance['langList']?.listElements[1].getAttribute('href')).toEqual('/ru/?test=123');

    instance['searchIcon']?.dispatchEvent(new MouseEvent('click'));

    await instance.load('ru', {
      fragment: window.router.fragment,
      query: window.router.query,
      match: [],
      options: {}
    }, false);

    expect(instance['navIcon']?.getAttribute('href')).toEqual(`?test=${query.test}&main-layout-search=1&main-layout-navigation=1`);
    expect(instance['headerIconBtn']?.getAttribute('href')).toEqual(`?test=${query.test}&main-layout-search=1&main-layout-navigation=1`);
    expect(instance['searchIcon']?.getAttribute('href')).toEqual(`?test=${query.test}`);
    expect(instance['langList']?.listElements[0].classList.contains('mdc-list-item--activated')).toBeFalsy();
    expect(instance['langList']?.listElements[0].getAttribute('href')).toEqual('/kz/?test=123&main-layout-search=1');
    expect(instance['langList']?.listElements[1].classList.contains('mdc-list-item--activated')).toBeTruthy();
    expect(instance['langList']?.listElements[1].getAttribute('href')).toEqual('/ru/?test=123&main-layout-search=1');

    instance['headerIconBtn']?.dispatchEvent(new MouseEvent('click'));

    await instance.load('en', {
      fragment: window.router.fragment,
      query: window.router.query,
      match: [],
      options: {}
    }, false);

    expect(instance['drawerElem']?.classList.contains('drawer--open')).toBeTruthy();
    expect(instance['navIcon']?.getAttribute('href')).toEqual(`?test=${query.test}&main-layout-search=1`);
    expect(instance['headerIconBtn']?.classList.contains('header-navigation--open')).toBeTruthy();
    expect(instance['headerIconBtn']?.getAttribute('href')).toEqual(`?test=${query.test}&main-layout-search=1`);
    expect(instance['searchIcon']?.getAttribute('href')).toEqual(`?test=${query.test}&main-layout-navigation=1`);
    expect(instance['langList']?.listElements[0].classList.contains('mdc-list-item--activated')).toBeFalsy();
    expect(instance['langList']?.listElements[0].getAttribute('href')).toEqual('/kz/?test=123&main-layout-search=1&main-layout-navigation=1');
    expect(instance['langList']?.listElements[1].classList.contains('mdc-list-item--activated')).toBeFalsy();
    expect(instance['langList']?.listElements[1].getAttribute('href')).toEqual('/ru/?test=123&main-layout-search=1&main-layout-navigation=1');

    instance['signInUpElem']?.dispatchEvent(new MouseEvent('click'));

    expect(location.pathname).toEqual('/en/sign-in');

    instance['langList']?.listElements[0].dispatchEvent(new MouseEvent('click'));

    expect(location.pathname).toEqual('/kz');

    instance['langList']?.listElements[1].dispatchEvent(new MouseEvent('click'));

    expect(location.pathname).toEqual('/ru');

    instance['list']?.listElements[0].dispatchEvent(new MouseEvent('mouseenter'));

    expect(instance['drawerElem']?.classList.contains('drawer--hover')).toBeTruthy();

    instance['drawerElem']?.dispatchEvent(new MouseEvent('mouseleave'));

    expect(instance['drawerElem']?.classList.contains('drawer--hover')).toBeFalsy();

    instance['drawerElem']?.querySelector('.drawer__lang-bar')?.dispatchEvent(new MouseEvent('mouseenter'));

    expect(instance['drawerElem']?.classList.contains('drawer--hover')).toBeTruthy();

    instance['searchInput']?.dispatchEvent(new FocusEvent('focus'));

    expect(instance['searchPanel']?.classList.contains('search--focus')).toBeTruthy();

    (instance['searchInput'] as HTMLInputElement).value = 'Hello World!';

    instance['searchForm']?.querySelector('.search__icon-right')?.dispatchEvent(new MouseEvent('click'));

    expect(instance['searchPanel']?.classList.contains('search--focus')).toBeTruthy();
    expect(instance['searchInput']?.value).toBeFalsy();

    instance['searchForm']?.querySelector('.search__icon-left')?.dispatchEvent(new MouseEvent('click'));

    expect(instance['searchPanel']?.classList.contains('search--focus')).toBeFalsy();

    instance['searchInput']?.dispatchEvent(new FocusEvent('focus'));

    expect(instance['searchPanel']?.classList.contains('search--focus')).toBeTruthy();

    instance['searchForm']?.dispatchEvent(new Event('submit'));

    expect(instance['searchPanel']?.classList.contains('search--focus')).toBeFalsy();
  });
});

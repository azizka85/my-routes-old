import '../../../types/window';

import { JSDOM } from "jsdom";

import { MDCRipple } from '@material/ripple';

import { HomePage } from "./home-page";
import { MainLayout } from "../../layouts/main/main-layout";

describe('HomePage test', () => {
  beforeEach(() => {
    const dom = new JSDOM();

    global.document = dom.window.document;
    global.window = (dom.window as unknown) as Window & typeof globalThis;  

    global.Event = (document.defaultView as Window & typeof globalThis).Event;
    global.CustomEvent = (document.defaultView as Window & typeof globalThis).CustomEvent;

    global.HTMLElement = dom.window.HTMLElement;

    window.layouts = {};
    window.pages = {};

    window.scrollTo = options => {
      const winObj = window as any;

      winObj.scrollX = typeof options === 'number' ? options : options?.left || 0;
      winObj.scrollY = typeof options === 'number' ? options : options?.top || 0;
    };
  });

  test('Should get single instance of HomePage', () => {
    const instance = HomePage.instance;

    expect(instance).toBeTruthy();
    expect(instance).toBeInstanceOf(HomePage);
    expect(instance).toBe(HomePage.instance);

    expect(instance['node']).toBeFalsy();

    expect(instance['scrollTopBtn']).toBeFalsy();

    expect(instance['currScroll']).toEqual(0);
  });

  test('Should init from html', async () => {
    document.body.innerHTML = `
      <div data-page="home-page">            
        <div>
          Home page, time: {{ data.time }}
        </div>
        <button class="mdc-fab mdc-fab--exited" data-button="scroll-top">
          <div class="mdc-fab__ripple"></div>
          <span class="mdc-fab__icon material-icons">keyboard_arrow_up</span>
        </button>    
      </div>
    `;

    const instance = HomePage.instance;

    await instance.init(null, true);

    expect(instance['node']).toBeTruthy();
    expect(instance['node']).toBeInstanceOf(HTMLElement);
    expect(instance['node']?.getAttribute('data-page')).toEqual('home-page');

    expect(instance['scrollTopBtn']).toBeTruthy();
    expect(instance['scrollTopBtn']).toBeInstanceOf(MDCRipple);
    expect(instance['scrollTopBtn']?.root.getAttribute('data-button')).toEqual('scroll-top');
    expect(instance['scrollTopBtn']?.root.classList.contains('mdc-fab--exited')).toBeTruthy();

    expect(instance['currScroll']).toEqual(0);
  });

  test('Handlers should work correctly', async () => {   
    document.body.innerHTML = `
      <div data-layout="main-layout">
        <div data-page="home-page">            
          <div>
            Home page, time: {{ data.time }}
          </div>
          <button class="mdc-fab mdc-fab--exited" data-button="scroll-top">
            <div class="mdc-fab__ripple"></div>
            <span class="mdc-fab__icon material-icons">keyboard_arrow_up</span>
          </button>    
        </div>
      </div>
    `;

    const layoutInstance = MainLayout.instance;
    const pageInstance = HomePage.instance;

    await pageInstance.init(null, true);
    await layoutInstance.init(null, true);

    window.layouts['main-layout'] = layoutInstance;
    window.pages['home-page'] = pageInstance;

    await layoutInstance.mount();

    await pageInstance.load({
      fragment: '',
      query: {},
      match: [],
      options: {}
    }, true);

    expect(pageInstance['currScroll']).toEqual(0);
    expect(window.scrollY).toEqual(pageInstance['currScroll']);
    
    expect(pageInstance['scrollTopBtn']?.root.classList.contains('mdc-fab--exited')).toBeTruthy();

    window.scrollTo({
      top: 100
    });

    window.dispatchEvent(new Event('scroll'));

    expect(pageInstance['currScroll']).toEqual(100);
    expect(window.scrollY).toEqual(pageInstance['currScroll']);

    expect(pageInstance['scrollTopBtn']?.root.classList.contains('mdc-fab--exited')).toBeFalsy();

    window.scrollTo({
      top: 0
    });

    expect(pageInstance['currScroll']).toEqual(100);
    expect(window.scrollY).toEqual(0);

    await pageInstance.load({
      fragment: '',
      query: {},
      match: [],
      options: {}
    }, false);

    expect(pageInstance['currScroll']).toEqual(100);
    expect(window.scrollY).toEqual(pageInstance['currScroll']);

    expect(pageInstance['scrollTopBtn']?.root.classList.contains('mdc-fab--exited')).toBeFalsy();

    window.scrollTo({
      top: 0
    });

    window.dispatchEvent(new Event('scroll'));

    expect(pageInstance['currScroll']).toEqual(0);
    expect(window.scrollY).toEqual(pageInstance['currScroll']);
    
    expect(pageInstance['scrollTopBtn']?.root.classList.contains('mdc-fab--exited')).toBeTruthy();
  });
});

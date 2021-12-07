import { Router } from "@azizka/router";

import { JSDOM } from "jsdom";

import { HistoryMock } from "./mocks/history-mock";
import { LocationMock } from "./mocks/location-mock";

import { navigateHandler } from "./helpers";

describe('Client helper functions test', () => {
  beforeEach(() => {
    const dom = new JSDOM();

    global.document = dom.window.document;
    global.window = (dom.window as unknown) as Window & typeof globalThis;  
    global.location = (new LocationMock() as unknown) as Location;
    global.history = (new HistoryMock(location) as unknown) as History;

    location.pathname = '/';
    location.search = '?test=123';  

    global.HTMLElement = dom.window.HTMLElement;

    global.MouseEvent = (document.defaultView as Window & typeof globalThis).MouseEvent;

    window.router = new Router();
  });

  test('Should navigateHandler work correctly', () => {
    expect(location.pathname).toEqual('/');
    expect(location.search).toEqual('?test=123');

    const link = document.createElement('a');

    link.href = '/search?test=234';

    navigateHandler(new MouseEvent('click'), link);

    expect(location.pathname).toEqual('/search');
    expect(location.search).toEqual('?test=234');
  });

  test('Should loadContent work correctly', () => {
  });
});

import { JSDOM } from "jsdom";

import { DEFAULT_LANGUAGE } from '../../../globals';

import { MDCRipple } from '@material/ripple';

import { locales } from '../../../server/helpers/locale-helpers';

import { SignUpPage } from '../pages/sign-up-page';

import { AuthServiceComponent } from "./auth-service-component";

describe('SignInPage test', () => {
	beforeEach(() => {
		const dom = new JSDOM();    

    global.document = dom.window.document;
		global.window = (dom.window as unknown) as Window & typeof globalThis;  

		global.HTMLElement = dom.window.HTMLElement;
	});

	test('Should init from html', async () => {
		document.body.innerHTML = `
			<div data-page="signup-page">
				<h6 
					data-title="auth-service"
					class="main-card__title main-card--justify mdc-typography--headline6"
				>
					Or use the service
				</h6>					
				<a href="#" class="mdc-button" data-button="auth-service-google" title="Google">
					<span class="mdc-button__ripple"></span>
					<svg class="main-card__service-icon" viewBox="0 0 16 16"></svg>    
				</a>	
			</div>
		`;

		window.tr = locales[DEFAULT_LANGUAGE];

		await SignUpPage.instance.init(null, true);		

		const component = SignUpPage.instance['authService'] as AuthServiceComponent;
		
		expect(component).toBeTruthy();
		expect(component).toBeInstanceOf(AuthServiceComponent);

		expect(component['titleElem']).toBeTruthy();
		expect(component['titleElem']).toBeInstanceOf(HTMLElement);
		expect(component['titleElem']?.getAttribute('data-title')).toEqual('auth-service');
		expect(component['titleElem']?.textContent).toContain('Or use the service');

		expect(component['googleBtn']).toBeTruthy();
		expect(component['googleBtn']).toBeInstanceOf(MDCRipple);
		expect(component['googleBtn']?.root?.getAttribute('data-button')).toEqual('auth-service-google');
		expect((component['googleBtn']?.root as HTMLElement)?.title).toEqual('Google');

		await SignUpPage.instance.load('ru', {
			fragment: '',
			match: [],
			options: {},
			query: {}
		}, false);

		expect(component['titleElem']?.textContent).toContain(window.tr('Or use the service'));
	});
});

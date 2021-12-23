import { JSDOM } from "jsdom";

import { DEFAULT_LANGUAGE } from '../../../globals';

import { MDCRipple } from '@material/ripple';
import { MDCDialog } from "@material/dialog";

import { locales } from '../../../server/helpers/locale-helpers';

import { SignUpPage } from '../pages/sign-up-page';

import { AuthServiceComponent } from "./auth-service-component";

describe('SignInPage test', () => {
	beforeEach(() => {
		const dom = new JSDOM();    

    global.document = dom.window.document;
		global.window = (dom.window as unknown) as Window & typeof globalThis;  

		global.cancelAnimationFrame = () => {};
		global.requestAnimationFrame = () => 0;

		global.HTMLElement = dom.window.HTMLElement;
		global.HTMLIFrameElement = dom.window.HTMLIFrameElement;

		global.MouseEvent = (document.defaultView as Window & typeof globalThis).MouseEvent;
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
				<div class="mdc-dialog mdc-dialog--fullscreen">
					<div class="mdc-dialog__container">
						<div class="auth-service-dialog mdc-dialog__surface">
							<div class="mdc-dialog__header">
								<h2 class="mdc-dialog__title"></h2>
							</div>
							<iframe class="mdc-dialog__content"></iframe>
						</div>
					</div>										
				</div>
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

		expect(component['dialog']).toBeTruthy();
		expect(component['dialog']).toBeInstanceOf(MDCDialog);

		expect(component['dialogTitle']).toBeTruthy();
		expect(component['dialogTitle']).toBeInstanceOf(HTMLElement);		
		
		expect(component['dialogContent']).toBeTruthy();
		expect(component['dialogContent']).toBeInstanceOf(HTMLIFrameElement);

		await SignUpPage.instance.load('ru', {
			fragment: '',
			match: [],
			options: {},
			query: {}
		}, false);

		expect(component['titleElem']?.textContent).toContain(window.tr('Or use the service'));
	});

	test('Handlers should work correctly', async () => {   
		document.body.innerHTML = `
			<div data-page="signup-page">
				<h6 
					data-title="auth-service"
					class="main-card__title main-card--justify mdc-typography--headline6"
				>
					Or use the service
				</h6>					
				<a href="www.auth-service.com" class="mdc-button" data-button="auth-service-google" title="Google">
					<span class="mdc-button__ripple"></span>
					<svg class="main-card__service-icon" viewBox="0 0 16 16"></svg>    
				</a>	
				<div class="mdc-dialog mdc-dialog--fullscreen">
					<div class="mdc-dialog__container">
						<div class="auth-service-dialog mdc-dialog__surface">
							<div class="mdc-dialog__header">
								<h2 class="mdc-dialog__title"></h2>
							</div>
							<iframe class="mdc-dialog__content"></iframe>
						</div>
					</div>										
				</div>
			</div>
		`;

		window.tr = locales[DEFAULT_LANGUAGE];

		await SignUpPage.instance.init(null, true);		
		await SignUpPage.instance.mount();

		const component = SignUpPage.instance['authService'] as AuthServiceComponent;

		component['googleBtn']?.root.dispatchEvent(new MouseEvent('click'));

		expect(component['dialog']?.isOpen).toBeTruthy();
		expect(component['dialogTitle']?.textContent).toContain(`Google - ${window.tr('Auth service')}`);
		expect(component['dialogContent']?.src).toEqual('www.auth-service.com');		
	});
});

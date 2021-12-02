import { l as loadContent, n as navigateHandler } from './client-helpers.js';
import { M as MDCRipple } from './ripple.js';
import './base.js';
import './dom.js';

class SignInPage {
    static page = null;
    node = null;
    static get instance() {
        if (!SignInPage.page) {
            SignInPage.page = new SignInPage();
        }
        return SignInPage.page;
    }
    get elem() {
        return this.node;
    }
    async init(parent, firstTime) {
        let content = await loadContent(parent, firstTime, []);
        this.node = content.querySelector('[data-page="signin-page"]') || null;
        if (this.node) {
            const buttons = this.node.querySelectorAll('.mdc-button');
            for (let button of buttons) {
                const ripple = new MDCRipple(button);
                if (button.hasAttribute('href')) {
                    ripple.listen('click', event => navigateHandler(event, ripple.root));
                }
            }
        }
        return content;
    }
    async mount() {
        console.log('signin-page', 'mounted');
    }
    async unmount() {
        console.log('signin-page', 'unmounted');
    }
}

export { SignInPage };
//# sourceMappingURL=signin-page.js.map

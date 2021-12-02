import { l as loadContent, n as navigateHandler } from './client-helpers.js';
import { M as MDCRipple } from './ripple.js';
import './base.js';
import './dom.js';

class SignUpPage {
    static page = null;
    node = null;
    static get instance() {
        if (!SignUpPage.page) {
            SignUpPage.page = new SignUpPage();
        }
        return SignUpPage.page;
    }
    get elem() {
        return this.node;
    }
    async init(parent, firstTime) {
        let content = await loadContent(parent, firstTime, []);
        this.node = content.querySelector('[data-page="signup-page"]') || null;
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
        console.log('signup-page', 'mounted');
    }
    async unmount() {
        console.log('signup-page', 'unmounted');
    }
}

export { SignUpPage };
//# sourceMappingURL=signup-page.js.map

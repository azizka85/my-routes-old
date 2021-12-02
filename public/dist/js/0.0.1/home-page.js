import { l as loadContent, n as navigateHandler } from './client-helpers.js';
import { M as MDCRipple } from './ripple.js';
import './base.js';
import './dom.js';

class HomePage {
    static page = null;
    node = null;
    static get instance() {
        if (!HomePage.page) {
            HomePage.page = new HomePage();
        }
        return HomePage.page;
    }
    get elem() {
        return this.node;
    }
    async init(parent, firstTime) {
        let content = await loadContent(parent, firstTime, ['main-layout']);
        this.node = content.querySelector('[data-page="home-page"]') || null;
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
        console.log('home-page', 'mounted');
    }
    async unmount() {
        console.log('home-page', 'unmounted');
    }
}

export { HomePage };
//# sourceMappingURL=home-page.js.map

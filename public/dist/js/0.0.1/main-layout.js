import { S as SCROLL_THRESHOLD } from './globals.js';
import { B as BaseLayout } from './base-layout.js';
import { t as toggleQueryParameter } from './helpers.js';
import { n as navigateHandler } from './client-helpers.js';
import { M as MDCList } from './list.js';
import { M as MDCRipple } from './ripple.js';
import './base.js';
import './dom.js';

class MainLayout extends BaseLayout {
    static layout = null;
    node = null;
    appBarElem = null;
    drawerElem = null;
    mainContentElem = null;
    navIcon = null;
    searchIcon = null;
    headerIconElem = null;
    headerIconBtn = null;
    list = null;
    static get instance() {
        if (!MainLayout.layout) {
            MainLayout.layout = new MainLayout();
        }
        return MainLayout.layout;
    }
    get elem() {
        return this.node;
    }
    async init(parent, firstTime) {
        let content = parent || document.body;
        this.node = content.querySelector('[data-layout="main-layout"]') || null;
        if (this.node) {
            this.appBarElem = this.node.querySelector('.app-bar');
            this.drawerElem = this.node.querySelector('.drawer');
            let prevScroll = 0;
            this.mainContentElem = this.node.querySelector('.main-content');
            this.mainContentElem?.addEventListener('scroll', () => {
                const currScroll = this.mainContentElem?.scrollTop || 0;
                if (Math.abs(currScroll - prevScroll) > SCROLL_THRESHOLD) {
                    if (prevScroll >= currScroll) {
                        this.appBarElem?.classList.remove('app-bar--hide');
                    }
                    else {
                        this.appBarElem?.classList.add('app-bar--hide');
                    }
                }
                if (currScroll <= 0) {
                    this.appBarElem?.classList.remove('app-bar--scrolled');
                }
                else {
                    this.appBarElem?.classList.add('app-bar--scrolled');
                }
                prevScroll = currScroll;
            });
            const navIconElem = this.appBarElem?.querySelector('[data-button="navigation"]');
            if (navIconElem) {
                this.navIcon = new MDCRipple(navIconElem);
                this.navIcon.unbounded = true;
                this.navIcon.listen('click', event => navigateHandler(event, this.navIcon?.root));
            }
            const searchIconElem = this.appBarElem?.querySelector('[data-button="search"]');
            if (searchIconElem) {
                this.searchIcon = new MDCRipple(searchIconElem);
                this.searchIcon.unbounded = true;
                this.searchIcon.listen('click', event => navigateHandler(event, this.searchIcon?.root));
            }
            const headerIconBtnElem = this.node.querySelector('[data-button="header-navigation"]');
            if (headerIconBtnElem) {
                this.headerIconElem = headerIconBtnElem.querySelector('.mdc-icon-button__ripple');
                this.headerIconBtn = new MDCRipple(headerIconBtnElem);
                this.headerIconBtn.unbounded = true;
                this.headerIconBtn.listen('click', event => navigateHandler(event, this.headerIconBtn?.root));
            }
            const listElem = this.node.querySelector('.mdc-list');
            if (listElem) {
                this.list = new MDCList(listElem);
                this.list.listElements.forEach(item => {
                    item.addEventListener('mouseenter', () => this.drawerElem?.classList.add('drawer--hover'));
                    new MDCRipple(item);
                });
                this.drawerElem?.addEventListener('mouseleave', () => this.drawerElem?.classList.remove('drawer--hover'));
            }
        }
        return content;
    }
    async mount() {
        console.log('main-layout', 'mounted');
    }
    async unmount() {
        console.log('main-layout', 'unmounted');
    }
    async load(page, firstLoad) {
        const navigation = page.query['main-layout-navigation'];
        if (this.navIcon) {
            const path = `?${toggleQueryParameter(page.query, 'main-layout-navigation')}`;
            this.navIcon.root.setAttribute('href', path);
        }
        if (this.headerIconBtn) {
            const path = `?${toggleQueryParameter(page.query, 'main-layout-navigation')}`;
            this.headerIconBtn.root.setAttribute('href', path);
        }
        if (this.searchIcon) {
            const path = `?${toggleQueryParameter(page.query, 'main-layout-search')}`;
            this.searchIcon.root.setAttribute('href', path);
        }
        if (navigation) {
            if (this.headerIconElem) {
                this.headerIconElem.innerHTML = 'arrow_circle_left';
            }
            this.drawerElem?.classList.add('drawer--open');
        }
        else {
            if (this.headerIconElem) {
                this.headerIconElem.innerHTML = 'arrow_circle_right';
            }
            this.drawerElem?.classList.remove('drawer--open');
        }
    }
}

export { MainLayout };
//# sourceMappingURL=main-layout.js.map

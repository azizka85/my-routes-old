import { P as PAGE_ROOT } from './globals.js';
import { R as Router_1 } from './router.js';
import { D as DefaultLayout } from './default-layout.js';
import './base-layout.js';

const pages = {};
const layouts = {};
async function loadHomePage(page, firstTime) {
    window.page = page;
    let parent = null;
    let homePageFirstLoad = false;
    let mainLayoutFirstLoad = false;
    if (!('home-page' in pages)) {
        const module = await import('./home-page.js');
        pages['home-page'] = module.HomePage.instance;
        parent = await pages['home-page'].init(parent, firstTime);
        homePageFirstLoad = true;
    }
    if (!('main-layout' in layouts)) {
        const module = await import('./main-layout.js');
        layouts['main-layout'] = module.MainLayout.instance;
        parent = await layouts['main-layout'].init(parent, firstTime);
        mainLayoutFirstLoad = true;
    }
    if (DefaultLayout.instance['content'] !== layouts['main-layout']) {
        DefaultLayout.instance.replaceContent(layouts['main-layout']);
    }
    if (layouts['main-layout']['content'] !== pages['home-page']) {
        layouts['main-layout'].replaceContent(pages['home-page']);
    }
    await layouts['main-layout']?.load?.(page, mainLayoutFirstLoad);
    await pages['home-page']?.load?.(page, homePageFirstLoad);
}
async function loadSignInPage(page, firstTime) {
    window.page = page;
    let parent = null;
    let signInPageFirstLoad = false;
    if (!('signin-page' in pages)) {
        const module = await import('./signin-page.js');
        pages['signin-page'] = module.SignInPage.instance;
        parent = await pages['signin-page'].init(parent, firstTime);
        signInPageFirstLoad = true;
    }
    if (DefaultLayout.instance['content'] !== pages['signin-page']) {
        DefaultLayout.instance.replaceContent(pages['signin-page']);
    }
    await pages['signin-page']?.load?.(page, signInPageFirstLoad);
}
async function loadSignUpPage(page, firstTime) {
    window.page = page;
    let parent = null;
    let signUpPageFirstLoad = false;
    if (!('signup-page' in pages)) {
        const module = await import('./signup-page.js');
        pages['signup-page'] = module.SignUpPage.instance;
        parent = await pages['signup-page'].init(parent, firstTime);
        signUpPageFirstLoad = true;
    }
    if (DefaultLayout.instance['content'] !== pages['signup-page']) {
        DefaultLayout.instance.replaceContent(pages['signup-page']);
    }
    await pages['signup-page']?.load?.(page, signUpPageFirstLoad);
}
window.pages = pages;
window.layouts = layouts;

function hideSplash() {
    const splashElem = document.querySelector('.splash');
    splashElem?.classList.remove('splash--open');
}
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        let firstTime = true;
        const router = new Router_1({
            root: PAGE_ROOT,
            routes: [{
                    rule: '',
                    async handler(page) {
                        await loadHomePage(page, firstTime);
                    },
                    options: {}
                }, {
                    rule: '/signin',
                    async handler(page) {
                        await loadSignInPage(page, firstTime);
                    },
                    options: {}
                }, {
                    rule: '/signup',
                    async handler(page) {
                        await loadSignUpPage(page, firstTime);
                    },
                    options: {}
                }]
        });
        window.router = router;
        router.addUriListener();
        router.processUri().then(() => hideSplash(), reason => {
            console.error(reason);
            hideSplash();
        });
        firstTime = false;
    }, 500);
});
//# sourceMappingURL=main.js.map

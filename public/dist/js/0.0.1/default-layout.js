import { B as BaseLayout } from './base-layout.js';

class DefaultLayout extends BaseLayout {
    static layout = null;
    static get instance() {
        if (!DefaultLayout.layout) {
            DefaultLayout.layout = new DefaultLayout();
        }
        return DefaultLayout.layout;
    }
}

export { DefaultLayout as D };
//# sourceMappingURL=default-layout.js.map

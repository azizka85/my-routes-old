function navigateHandler(event, elem) {
    event.preventDefault();
    const path = elem.getAttribute?.('href');
    if (path) {
        window.router.navigateTo(path);
    }
}
async function loadContent(parent, firstTime, layouts) {
    let content;
    if (firstTime || parent) {
        content = parent || document.body;
    }
    else {
        let path = window.location.pathname + '?ajax=1&init=1';
        const layoutsToLoad = [];
        for (let layout of layouts) {
            if (!(layout in window.layouts)) {
                layoutsToLoad.push(layout);
            }
        }
        if (layoutsToLoad.length > 0) {
            path += '&layouts=' + layoutsToLoad.join(',');
        }
        const html = await (await fetch(path)).text();
        content = document.createElement('div');
        content.innerHTML = html;
    }
    return content;
}

export { loadContent as l, navigateHandler as n };
//# sourceMappingURL=client-helpers.js.map

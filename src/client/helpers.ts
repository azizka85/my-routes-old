import './types/window';

export async function navigateHandler(event: Event, elem: HTMLElement) {
  event.preventDefault();

  const path = elem.getAttribute?.('href');

  if(path) {
    await window.router.navigateTo(path);
  }
}

export async function loadContent(
  parent: HTMLElement | null, 
  firstTime: boolean, 
  layouts: string[]
): Promise<HTMLElement> {
  let content: HTMLElement;

  if(firstTime || parent) {
    content = parent || document.body;
  } else {
    let path = location.pathname + '?ajax=1&init=1';

    const layoutsToLoad = [];

    for(let layout of layouts) {
      if(!(layout in window.layouts)) {
        layoutsToLoad.push(layout);
      }
    }

    if(layoutsToLoad.length > 0) {
      path += '&layouts=' + layoutsToLoad.join(',');
    }

    const html = await (await fetch(path)).text();
    
    content = document.createElement('div');

    content.innerHTML = html;
  }

  return content;
}

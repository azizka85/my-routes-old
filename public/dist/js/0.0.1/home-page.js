import{M as e}from"./ripple.js";import"./base.js";import"./dom.js";class t{static page=null;node=null;static get instance(){return t.page||(t.page=new t),t.page}get elem(){return this.node}async init(t,n){let o;if(n||t)o=t||document.body;else{let e=window.location.pathname+"?ajax=1&init=1";"main-layout"in window.layouts||(e+="&layouts=main-layout");const t=await(await fetch(e)).text();o=document.createElement("div"),o.innerHTML=t}if(this.node=o.querySelector('[data-page="home-page"]')||null,this.node){const t=this.node.querySelectorAll(".mdc-button");for(let n of t)new e(n),n.hasAttribute("href")&&n.addEventListener("click",(e=>{e.preventDefault(),window.router.navigateTo(n.getAttribute("href")||"")}))}return o}async mount(){console.log("home-page","mounted")}async unmount(){console.log("home-page","unmounted")}}export{t as HomePage};

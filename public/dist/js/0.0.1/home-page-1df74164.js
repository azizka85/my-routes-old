import{H as e,M as t}from"./globals-8c5333fc.js";import{M as n}from"./ripple-20b9f9d2.js";import"./base-7d67c7c4.js";import"./dom-d387e2d6.js";class o{static page=null;node=null;static get instance(){return o.page||(o.page=new o),o.page}get elem(){return this.node}async init(o,a){let i;if(a||o)i=o||document.body;else{let e=window.location.pathname+"?ajax=1&init=1";t in window.layouts||(e+=`&layouts=${t}`);const n=await(await fetch(e)).text();i=document.createElement("div"),i.innerHTML=n}if(this.node=i.querySelector(`[data-page="${e}"]`)||null,this.node){const e=this.node.querySelectorAll(".mdc-button");for(let t of e)new n(t),t.hasAttribute("href")&&t.addEventListener("click",(e=>{e.preventDefault(),window.router.navigateTo(t.getAttribute("href")||"")}))}return i}async mount(){console.log(e,"mounted")}async unmount(){console.log(e,"unmounted")}}export{o as HomePage};

import{a as e}from"./globals-8c5333fc.js";import{M as t}from"./ripple-f094ddc8.js";class n{static page=null;node=null;static get instance(){return n.page||(n.page=new n),n.page}get elem(){return this.node}async init(n,o){let a;if(o||n)a=n||document.body;else{let e=window.location.pathname+"?ajax=1&init=1";const t=await(await fetch(e)).text();a=document.createElement("div"),a.innerHTML=t}if(this.node=a.querySelector(`[data-page="${e}"]`)||null,this.node){const e=this.node.querySelectorAll(".mdc-button");for(let n of e)new t(n),n.hasAttribute("href")&&n.addEventListener("click",(e=>{e.preventDefault(),window.router.navigateTo(n.getAttribute("href")||"")}))}return a}async mount(){console.log(e,"mounted")}async unmount(){console.log(e,"unmounted")}}export{n as SignUpPage};
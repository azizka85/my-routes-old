import{a as f,b as h,c as g}from"../../chunk-DURSSFQP.js";import{k as n}from"../../chunk-SG6BWAK5.js";import{a as u,b as m,c as p,d}from"../../chunk-CVCDAUDG.js";import{c as s}from"../../chunk-WSRL3A7G.js";var t=class{node=null;scrollTopBtn=null;currScroll=0;static get instance(){return t.page||(t.page=new t),t.page}get elem(){return this.node}async init(r,a){let e=await m(r,a,["main-layout"]);if(this.node=e.querySelector('[data-page="home-page"]')||null,this.node){let l=this.node.querySelectorAll(".mdc-button");for(let i of l){let c=new n(i);i.hasAttribute("href")&&c.listen("click",S=>u(S,c.root))}let o=this.node.querySelector(".mdc-fab");o&&(this.scrollTopBtn=new n(o),this.scrollTopBtn.listen("click",()=>{window.layouts["main-layout"]?.doAction?.(f,null)}))}return e}async mount(){await p(this.node)}async unmount(){await d(this.node)}async load(r,a,e){e&&window.layouts["main-layout"]?.listen?.(g,l=>{let o=l.detail;o.currScroll<=0?this.scrollTopBtn?.root.classList.add("mdc-fab--exited"):this.scrollTopBtn?.root.classList.remove("mdc-fab--exited"),this.currScroll=o.currScroll}),window.layouts["main-layout"]?.doAction?.(h,{top:this.currScroll,noSmooth:!0})}},y=t;s(y,"page",null);export{y as HomePage};

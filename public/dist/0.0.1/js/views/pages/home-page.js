import{a as u,b as p,c as n}from"../../chunk-DURSSFQP.js";import{k as d}from"../../chunk-IHJQUDGI.js";import{b as a,c,d as s}from"../../chunk-CVCDAUDG.js";import{c as i}from"../../chunk-WSRL3A7G.js";var t=class{node=null;scrollTopBtn=null;scrollTopBtnClickHandler;windowScrollHandler;currScroll=0;static get instance(){return t.page||(t.page=new t),t.page}constructor(){this.scrollTopBtnClickHandler=()=>{window.layouts["main-layout"]?.performAction?.(u,null)},this.windowScrollHandler=l=>{let o=l.detail;o.currScroll<=0?this.scrollTopBtn?.root.classList.add("mdc-fab--exited"):this.scrollTopBtn?.root.classList.remove("mdc-fab--exited"),this.currScroll=o.currScroll}}get elem(){return this.node}async init(l,o){let e=await a(l,o,["main-layout"]);if(this.node=e.querySelector('[data-page="home-page"]')||null,this.node){let r=this.node.querySelector(".mdc-fab");r&&(this.scrollTopBtn=new d(r))}return e}async mount(){this.scrollTopBtn?.listen("click",this.scrollTopBtnClickHandler),window.layouts["main-layout"]?.listen?.(n,this.windowScrollHandler),await c(this.node)}async unmount(){this.scrollTopBtn?.unlisten("click",this.scrollTopBtnClickHandler),window.layouts["main-layout"]?.unlisten?.(n,this.windowScrollHandler),await s(this.node)}async load(l,o,e){window.layouts["main-layout"]?.performAction?.(p,{top:this.currScroll,noSmooth:!0})}},m=t;i(m,"page",null);export{m as HomePage};

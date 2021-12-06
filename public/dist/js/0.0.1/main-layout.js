import{S as e}from"./globals.js";import{B as t}from"./base-layout.js";import{t as r}from"./helpers.js";import{n as s}from"./client-helpers.js";import{S as a,a as o,b as n}from"./scroll.js";import{M as l}from"./list.js";import{M as i}from"./ripple.js";import"./base.js";import"./dom.js";class c extends t{static layout=null;node=null;appBarElem=null;drawerElem=null;navIcon=null;searchIcon=null;headerIconElem=null;headerIconBtn=null;list=null;searchForm=null;prevScroll=0;scrollHandler;constructor(){super(),this.scrollHandler=()=>{const t=window.scrollY||0;Math.abs(t-this.prevScroll)>e&&(this.prevScroll>=t?this.appBarElem?.classList.remove("app-bar--hide"):this.appBarElem?.classList.add("app-bar--hide")),t<=0?this.appBarElem?.classList.remove("app-bar--scrolled"):this.appBarElem?.classList.add("app-bar--scrolled"),this.node?.dispatchEvent(new CustomEvent(a,{detail:{currScroll:t,prevScroll:this.prevScroll}})),this.prevScroll=t}}static get instance(){return c.layout||(c.layout=new c),c.layout}get elem(){return this.node}async init(e,t){let r=e||document.body;if(this.node=r.querySelector('[data-layout="main-layout"]')||null,this.node){this.appBarElem=this.node.querySelector(".app-bar"),this.drawerElem=this.node.querySelector(".drawer"),this.navIcon=this.appBarElem?.querySelector('[data-button="navigation"]')||null,this.navIcon?.addEventListener("click",(e=>s(e,this.navIcon))),this.searchIcon=this.appBarElem?.querySelector('[data-button="search"]')||null,this.searchIcon?.addEventListener("click",(e=>s(e,this.searchIcon))),this.headerIconBtn=this.node.querySelector('[data-button="header-navigation"]'),this.headerIconBtn&&(this.headerIconElem=this.headerIconBtn.querySelector(".mdc-icon-button__ripple"),this.headerIconBtn.addEventListener("click",(e=>s(e,this.headerIconBtn))));const e=this.node.querySelector(".mdc-list");e&&(this.list=new l(e),this.list.listElements.forEach((e=>{e.addEventListener("mouseenter",(()=>this.drawerElem?.classList.add("drawer--hover"))),new i(e)})),this.drawerElem?.addEventListener("mouseleave",(()=>this.drawerElem?.classList.remove("drawer--hover")))),this.searchForm=this.appBarElem?.querySelector(".search form")||null,this.searchForm?.addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(this.searchForm);console.log("Form submited: ");for(let e of t.entries())console.log(e[0]+":",e[1])}))}return r}async mount(){window.addEventListener("scroll",this.scrollHandler)}async unmount(){window.removeEventListener("scroll",this.scrollHandler)}async load(e,t){const s=e.query["main-layout-navigation"];if(this.navIcon){const t=`?${r(e.query,"main-layout-navigation")}`;this.navIcon.setAttribute("href",t)}if(this.headerIconBtn){const t=`?${r(e.query,"main-layout-navigation")}`;this.headerIconBtn.setAttribute("href",t)}if(this.searchIcon){const t=`?${r(e.query,"main-layout-search")}`;this.searchIcon.setAttribute("href",t)}s?(this.headerIconElem&&(this.headerIconElem.innerHTML="arrow_circle_left"),this.drawerElem?.classList.add("drawer--open")):(this.headerIconElem&&(this.headerIconElem.innerHTML="arrow_circle_right"),this.drawerElem?.classList.remove("drawer--open"))}listen(e,t){this.node?.addEventListener(e,t)}doAction(e,t){switch(e){case n:window.scrollTo({top:0,behavior:"smooth"});break;case o:window.scrollTo({top:t?.top,behavior:t?.noSmooth?"auto":"smooth"})}}}export{c as MainLayout};

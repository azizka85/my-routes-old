import{S as e}from"./globals.js";import{B as t}from"./base-layout.js";import{t as a}from"./helpers.js";import{M as n}from"./list.js";import{M as s}from"./ripple.js";import"./base.js";import"./dom.js";class o extends t{static layout=null;node=null;appBarElem=null;drawerElem=null;mainContentElem=null;navIcon=null;searchIcon=null;list=null;static get instance(){return o.layout||(o.layout=new o),o.layout}get elem(){return this.node}async init(t,a){let o=t||document.body;if(this.node=o.querySelector('[data-layout="main-layout"]')||null,this.node){this.appBarElem=this.node.querySelector(".app-bar"),this.drawerElem=this.node.querySelector(".drawer");let t=0;this.mainContentElem=this.node.querySelector(".main-content"),this.mainContentElem?.addEventListener("scroll",(()=>{const a=this.mainContentElem?.scrollTop||0;Math.abs(a-t)>e&&(t>=a?this.appBarElem?.classList.remove("app-bar--hide"):this.appBarElem?.classList.add("app-bar--hide")),a<=0?this.appBarElem?.classList.remove("app-bar--scrolled"):this.appBarElem?.classList.add("app-bar--scrolled"),t=a}));const a=this.appBarElem?.querySelector('[data-button="navigation"]');a&&(this.navIcon=new s(a),this.navIcon.unbounded=!0,this.navIcon.listen("click",(e=>this.navigateHandler(e))));const o=this.appBarElem?.querySelector('[data-button="search"]');o&&(this.searchIcon=new s(o),this.searchIcon.unbounded=!0,this.searchIcon.listen("click",(e=>this.navigateHandler(e))));const r=this.node.querySelector(".mdc-list");r&&(this.list=new n(r),this.list.listElements.forEach((e=>{e.addEventListener("mouseenter",(()=>this.drawerElem?.classList.add("drawer--hover"))),new s(e)})),this.drawerElem?.addEventListener("mouseleave",(()=>this.drawerElem?.classList.remove("drawer--hover"))))}return o}async mount(){console.log("main-layout","mounted")}async unmount(){console.log("main-layout","unmounted")}async load(e,t){const n=e.query["main-layout-navigation"];if(e.query["main-layout-search"],this.navIcon){const t=`${window.location.pathname}?${a(e.query,"main-layout-navigation")}`;this.navIcon.root.setAttribute("href",t)}if(this.searchIcon){const t=`${window.location.pathname}?${a(e.query,"main-layout-search")}`;this.searchIcon.root.setAttribute("href",t)}n?this.drawerElem?.classList.add("drawer--open"):this.drawerElem?.classList.remove("drawer--open")}navigateHandler(e){e.preventDefault();const t=e.target?.getAttribute?.("href");t&&window.router.navigateTo(t)}}export{o as MainLayout};
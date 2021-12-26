import{a as M,c as L,d as E,e as S}from"./chunk-X4UVQ76S.js";import{a as k,d as x}from"./chunk-VTHP63GR.js";import{c as _,d as H}from"./chunk-CVCDAUDG.js";import{a as A,b as P,c as U}from"./chunk-WSRL3A7G.js";var q=A(B=>{var j=class{routes=[];root="/";before;page404;constructor(t){t?.root&&(this.root=t.root==="/"?"/":"/"+this.trimSlashes(t.root)+"/"),typeof t?.before=="function"&&(this.before=t.before),typeof t?.page404=="function"&&(this.page404=t.page404),t?.routes?.length>0&&t.routes.forEach(n=>{this.add(n.rule,n.handler,n.options)})}get fragment(){let t=decodeURI(location.pathname);return this.root!=="/"&&(t=t.replace(this.root,"")),this.trimSlashes(t)}get query(){return this.parseQuery(location.search)}add(t,n,a){return this.routes.push({rule:this.parseRouteRule(t),handler:n,options:a}),this}remove(t){return typeof t=="string"&&(t=this.parseRouteRule(t)),this.routes.some((n,a)=>n.handler===t||n.rule===t?(this.routes.splice(a,1),!0):!1),this}async redirectTo(t,n){let a=this.transformURL(t);return history.replaceState(n,null,this.root+a),await this.processUri(),this}async navigateTo(t,n){let a=this.transformURL(t);return history.pushState(n,null,this.root+a),await this.processUri(),this}refresh(){return this.redirectTo(this.fragment+location.search,history.state)}transformURL(t){if(typeof t!="string")return"";let a=t.trim().split("?"),i="",e="";return a.length===1?i=a[0]:(i=a[0].trim(),e=a[1].trim()),i?(this.root!=="/"&&(i=i.replace(this.root,"")),i=this.trimSlashes(i)):i=this.fragment,e?`${i}?${e}`:i}trimSlashes(t){return typeof t!="string"?"":t.replace(/\/$/,"").replace(/^\//,"")}parseRouteRule(t){if(typeof t!="string")return t;let a=this.trimSlashes(t).replace(/([\\\/\-\_\.])/g,"\\$1").replace(/\{[a-zA-Z]+\}/g,"(:any)").replace(/\:any/g,"[\\w\\-\\_\\.]+").replace(/\:word/g,"[a-zA-Z]+").replace(/\:num/g,"\\d+");return new RegExp("^"+a+"$","i")}parseQuery(t){let n={};return typeof t!="string"||(t[0]==="?"&&(t=t.substr(1)),t.split("&").forEach(a=>{let i=a.split("=");i[0]!==""&&(i[1]===void 0&&(i[1]=!0),n[decodeURIComponent(i[0])]=i[1])})),n}async findRoute(){let t=this.fragment,n=this.query,a=!1;if(!this.before?.({fragment:t,query:n}))for(let e of this.routes){let r=t.match(e.rule);if(r){r.shift();let o={fragment:t,query:n,match:r,options:e.options};await e.handler?.(o),a=!0;break}}return a}async processUri(){let t=this.fragment;await this.findRoute()||this.page404?.(t)}addUriListener(){window.onpopstate=this.processUri.bind(this)}removeUriListener(){window.onpopstate=null}};B.Router=j});var z=A((G,C)=>{(function(){"use strict";var f=function(t,n){return function(){return t.apply(n,arguments)}};(function(t,n){return typeof define=="function"&&define.amd?define([],function(){return t.i18n=n()}):typeof C=="object"&&C.exports?C.exports=n():t.i18n=n()})(typeof self!="undefined"&&self!==null?self:this,function(){var t,n,a;return t=function(){function i(){this.translate=f(this.translate,this),this.data={values:{},contexts:[]},this.globalContext={}}return i.prototype.translate=function(e,r,o,s,l){var p,u,c,h;return l==null&&(l=this.globalContext),c=function(y){var g;return g=typeof y,g==="function"||g==="object"&&!!y},c(r)?(p=null,h=null,u=r,l=o||this.globalContext):typeof r=="number"?(p=null,h=r,u=o,l=s||this.globalContext):(p=r,typeof o=="number"?(h=o,u=s,l=l):(h=null,u=o,l=s||this.globalContext)),c(e)?(c(e.i18n)&&(e=e.i18n),this.translateHash(e,l)):this.translateText(e,h,u,l,p)},i.prototype.add=function(e){var r,o,s,l,p,u,c,h;if(e.values!=null){u=e.values;for(o in u)s=u[o],this.data.values[o]=s}if(e.contexts!=null){for(c=e.contexts,h=[],l=0,p=c.length;l<p;l++)r=c[l],h.push(this.data.contexts.push(r));return h}},i.prototype.setContext=function(e,r){return this.globalContext[e]=r},i.prototype.extend=function(e){return this.extension=e},i.prototype.clearContext=function(e){return this.globalContext[e]=null},i.prototype.reset=function(){return this.resetData(),this.resetContext()},i.prototype.resetData=function(){return this.data={values:{},contexts:[]}},i.prototype.resetContext=function(){return this.globalContext={}},i.prototype.translateHash=function(e,r){var o,s;for(o in e)s=e[o],typeof s=="string"&&(e[o]=this.translateText(s,null,null,r));return e},i.prototype.translateText=function(e,r,o,s,l){var p,u;return s==null&&(s=this.globalContext),this.data==null?this.useOriginalText(l||e,r,o):(p=this.getContextData(this.data,s),p!=null&&(u=this.findTranslation(e,r,o,p.values,l)),u==null&&(u=this.findTranslation(e,r,o,this.data.values,l)),u??this.useOriginalText(l||e,r,o))},i.prototype.findTranslation=function(e,r,o,s,l){var p,u,c,h,y,g,m,d,T,D;if(d=s[e],d==null)return null;if(typeof d=="object"&&!Array.isArray(d))return this.extension&&typeof this.extension=="function"?(d=this.extension(e,r,o,d),d=this.applyNumbers(d,r),this.applyFormatting(d,r,o)):this.useOriginalText(l||e,r,o);if(r==null&&!Array.isArray(d)){if(typeof d=="string")return this.applyFormatting(d,r,o)}else if(d instanceof Array||d.length){for(p=r===null,T=0,D=d.length;T<D;T++)if(m=d[T],u=m[0]===null,c=m[1]===null,h=r>=m[0],y=r<=m[1],p&&u&&c||!p&&(!u&&h&&(c||y)||u&&!c&&y))return g=this.applyFormatting(m[2].replace("-%n",String(-r)),r,o),this.applyFormatting(g.replace("%n",String(r)),r,o)}return null},i.prototype.applyNumbers=function(e,r){return e=e.replace("-%n",String(-r)),e=e.replace("%n",String(r)),e},i.prototype.getContextData=function(e,r){var o,s,l,p,u,c,h,y;if(e.contexts==null)return null;for(h=e.contexts,u=0,c=h.length;u<c;u++){o=h[u],s=!0,y=o.matches;for(l in y)p=y[l],s=s&&p===r[l];if(s)return o}return null},i.prototype.useOriginalText=function(e,r,o){return r==null?this.applyFormatting(e,r,o):this.applyFormatting(e.replace("%n",String(r)),r,o)},i.prototype.applyFormatting=function(e,r,o){var s,l;for(s in o)l=new RegExp("%{"+s+"}","g"),e=e.replace(l,o[s]);return e},i}(),a=new t,n=a.translate,n.translator=a,n.create=function(i){var e;return e=new t,i!=null&&e.add(i),e.translate.create=n.create,e.translate.translator=e,e.translate},n})}).call(G)});var Q=P(q());var b=class{node=null;static get instance(){return b.page||(b.page=new b),b.page}get elem(){return this.node}async init(t,n){let a=t||document.body;return this.node=a.querySelector('[data-page="loader-page"]'),a}async mount(){await _(this.node)}async unmount(){await H(this.node)}},w=b;U(w,"page",null);var I=P(z());var v=class extends M{static get instance(){return v.layout||(v.layout=new v),v.layout}},R=v;U(R,"layout",null);function Z(){document.querySelector(".splash")?.classList.remove("splash--open")}function F(f){let t=R.instance;for(let n of f)if(window.layouts[n]){t=window.layouts[n];break}return t}async function J(f,t,n){let a={};for(let i of f)if(!(i in window.layouts)){let e=await import(`./views/layouts/${i}.js?time=${Date.now()}`);t=await e[L(i)]?.instance?.init?.(t,n),window.layouts[i]=e[L(i)]?.instance,a[i]=!0}return a}async function K(f,t,n,a){let i=[...n].reverse(),e=R.instance;for(let r of i)e.content!==window.layouts[r]&&await e.replaceContent(window.layouts[r]),await window.layouts[r].load?.(f,t,a[r]??!1),e=window.layouts[r];return e}async function $(f,t,n,a,i){window.page=t;let e=null,r=!1;if(!i&&(!(f in window.languages)||!(n in window.pages))){let s=F(a);s.content!==w.instance&&await s.replaceContent(w.instance)}if(!(f in window.languages)){let s=await import(`./locales/${f}.js?time=${Date.now()}`);window.languages[f]=I.default.create(s.default)}if(window.tr=window.languages[f],document.documentElement.lang=f,document.title=window.tr("My Routes"),!(n in window.pages)){let s=await import(`./views/pages/${n}.js?time=${Date.now()}`);e=await s[L(n)]?.instance?.init?.(e,i),window.pages[n]=s[L(n)]?.instance,r=!0}let o=await J(a,e,i);if(window.page.fragment===t.fragment){let s=await K(f,t,a,o);s.content!==window.pages[n]&&await s.replaceContent(window.pages[n]),await window.pages[n].load?.(f,t,r)}i&&Z()}window.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{let f=!0;w.instance.init(null,f);let t=new Q.Router({root:k,routes:[{rule:`${E}/?`,async handler(n){await $(S(n.match[0]||x),n,"home-page",["main-layout"],f)},options:{}},{rule:`${E}/?sign-in`,async handler(n){await $(S(n.match[0]||x),n,"sign-in-page",[],f)},options:{}},{rule:`${E}/?sign-up`,async handler(n){await $(S(n.match[0]||x),n,"sign-up-page",[],f)},options:{}}]});window.pages={},window.layouts={},window.languages={},window.router=t,t.addUriListener(),t.processUri().catch(n=>console.error(n)).finally(()=>f=!1)},500)});

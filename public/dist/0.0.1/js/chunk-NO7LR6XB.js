import{a as dt,b as ft}from"./chunk-SAEICZ7T.js";var Y=dt((ht,A)=>{var U,G,j,L,B,P,z,I,X,_,H,q,W,V,y,E,k,Z,J,K,Q,$,T,w;(function(s){var i=typeof global=="object"?global:typeof self=="object"?self:typeof this=="object"?this:{};typeof define=="function"&&define.amd?define("tslib",["exports"],function(t){s(n(i,n(t)))}):typeof A=="object"&&typeof A.exports=="object"?s(n(i,n(A.exports))):s(n(i));function n(t,e){return t!==i&&(typeof Object.create=="function"?Object.defineProperty(t,"__esModule",{value:!0}):t.__esModule=!0),function(r,a){return t[r]=e?e(r,a):a}}})(function(s){var i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])};U=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)},G=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++){e=arguments[r];for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u])}return t},j=function(t,e){var r={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,a=Object.getOwnPropertySymbols(t);u<a.length;u++)e.indexOf(a[u])<0&&Object.prototype.propertyIsEnumerable.call(t,a[u])&&(r[a[u]]=t[a[u]]);return r},L=function(t,e,r,a){var u=arguments.length,o=u<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,r):a,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,a);else for(var d=t.length-1;d>=0;d--)(c=t[d])&&(o=(u<3?c(o):u>3?c(e,r,o):c(e,r))||o);return u>3&&o&&Object.defineProperty(e,r,o),o},B=function(t,e){return function(r,a){e(r,a,t)}},P=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)},z=function(t,e,r,a){function u(o){return o instanceof r?o:new r(function(c){c(o)})}return new(r||(r=Promise))(function(o,c){function d(f){try{l(a.next(f))}catch(h){c(h)}}function v(f){try{l(a.throw(f))}catch(h){c(h)}}function l(f){f.done?o(f.value):u(f.value).then(d,v)}l((a=a.apply(t,e||[])).next())})},I=function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},a,u,o,c;return c={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function d(l){return function(f){return v([l,f])}}function v(l){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,u&&(o=l[0]&2?u.return:l[0]?u.throw||((o=u.return)&&o.call(u),0):u.next)&&!(o=o.call(u,l[1])).done)return o;switch(u=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,u=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(l[0]===6&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=e.call(t,r)}catch(f){l=[6,f],u=0}finally{a=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},X=function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&w(e,t,r)},w=Object.create?function(t,e,r,a){a===void 0&&(a=r),Object.defineProperty(t,a,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,a){a===void 0&&(a=r),t[a]=e[r]},_=function(t){var e=typeof Symbol=="function"&&Symbol.iterator,r=e&&t[e],a=0;if(r)return r.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&a>=t.length&&(t=void 0),{value:t&&t[a++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},H=function(t,e){var r=typeof Symbol=="function"&&t[Symbol.iterator];if(!r)return t;var a=r.call(t),u,o=[],c;try{for(;(e===void 0||e-- >0)&&!(u=a.next()).done;)o.push(u.value)}catch(d){c={error:d}}finally{try{u&&!u.done&&(r=a.return)&&r.call(a)}finally{if(c)throw c.error}}return o},q=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(H(arguments[e]));return t},W=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var a=Array(t),u=0,e=0;e<r;e++)for(var o=arguments[e],c=0,d=o.length;c<d;c++,u++)a[u]=o[c];return a},V=function(t,e,r){if(r||arguments.length===2)for(var a=0,u=e.length,o;a<u;a++)(o||!(a in e))&&(o||(o=Array.prototype.slice.call(e,0,a)),o[a]=e[a]);return t.concat(o||Array.prototype.slice.call(e))},y=function(t){return this instanceof y?(this.v=t,this):new y(t)},E=function(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=r.apply(t,e||[]),u,o=[];return u={},c("next"),c("throw"),c("return"),u[Symbol.asyncIterator]=function(){return this},u;function c(p){a[p]&&(u[p]=function(m){return new Promise(function(x,lt){o.push([p,m,x,lt])>1||d(p,m)})})}function d(p,m){try{v(a[p](m))}catch(x){h(o[0][3],x)}}function v(p){p.value instanceof y?Promise.resolve(p.value.v).then(l,f):h(o[0][2],p)}function l(p){d("next",p)}function f(p){d("throw",p)}function h(p,m){p(m),o.shift(),o.length&&d(o[0][0],o[0][1])}},k=function(t){var e,r;return e={},a("next"),a("throw",function(u){throw u}),a("return"),e[Symbol.iterator]=function(){return this},e;function a(u,o){e[u]=t[u]?function(c){return(r=!r)?{value:y(t[u](c)),done:u==="return"}:o?o(c):c}:o}},Z=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],r;return e?e.call(t):(t=typeof _=="function"?_(t):t[Symbol.iterator](),r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r);function a(o){r[o]=t[o]&&function(c){return new Promise(function(d,v){c=t[o](c),u(d,v,c.done,c.value)})}}function u(o,c,d,v){Promise.resolve(v).then(function(l){o({value:l,done:d})},c)}},J=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};var n=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};K=function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&w(e,t,r);return n(e,t),e},Q=function(t){return t&&t.__esModule?t:{default:t}},$=function(t,e,r,a){if(r==="a"&&!a)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!a:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?a:r==="a"?a.call(t):a?a.value:e.get(t)},T=function(t,e,r,a,u){if(a==="m")throw new TypeError("Private method is not writable");if(a==="a"&&!u)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!u:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return a==="a"?u.call(t,r):u?u.value=r:e.set(t,r),r},s("__extends",U),s("__assign",G),s("__rest",j),s("__decorate",L),s("__param",B),s("__metadata",P),s("__awaiter",z),s("__generator",I),s("__exportStar",X),s("__createBinding",w),s("__values",_),s("__read",H),s("__spread",q),s("__spreadArrays",W),s("__spreadArray",V),s("__await",y),s("__asyncGenerator",E),s("__asyncDelegator",k),s("__asyncValues",Z),s("__makeTemplateObject",J),s("__importStar",K),s("__importDefault",Q),s("__classPrivateFieldGet",$),s("__classPrivateFieldSet",T)})});var N=ft(Y()),{__extends:C,__assign:S,__rest:mt,__decorate:yt,__param:gt,__metadata:bt,__awaiter:_t,__generator:wt,__exportStar:At,__createBinding:Ct,__values:g,__read:tt,__spread:St,__spreadArrays:Dt,__spreadArray:et,__await:Ft,__asyncGenerator:Rt,__asyncDelegator:xt,__asyncValues:Ht,__makeTemplateObject:Mt,__importStar:Ot,__importDefault:Ut,__classPrivateFieldGet:Gt,__classPrivateFieldSet:jt}=N.default;var D=function(){function s(i){i===void 0&&(i={}),this.adapter=i}return Object.defineProperty(s,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(s,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(s,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(s,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),s.prototype.init=function(){},s.prototype.destroy=function(){},s}();var nt=function(){function s(i,n){for(var t=[],e=2;e<arguments.length;e++)t[e-2]=arguments[e];this.root=i,this.initialize.apply(this,et([],tt(t))),this.foundation=n===void 0?this.getDefaultFoundation():n,this.foundation.init(),this.initialSyncWithDOM()}return s.attachTo=function(i){return new s(i,new D({}))},s.prototype.initialize=function(){for(var i=[],n=0;n<arguments.length;n++)i[n]=arguments[n]},s.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},s.prototype.initialSyncWithDOM=function(){},s.prototype.destroy=function(){this.foundation.destroy()},s.prototype.listen=function(i,n,t){this.root.addEventListener(i,n,t)},s.prototype.unlisten=function(i,n,t){this.root.removeEventListener(i,n,t)},s.prototype.emit=function(i,n,t){t===void 0&&(t=!1);var e;typeof CustomEvent=="function"?e=new CustomEvent(i,{bubbles:t,detail:n}):(e=document.createEvent("CustomEvent"),e.initCustomEvent(i,t,!1,n)),this.root.dispatchEvent(e)},s}();function b(s){return s===void 0&&(s=window),pt(s)?{passive:!0}:!1}function pt(s){s===void 0&&(s=window);var i=!1;try{var n={get passive(){return i=!0,!1}},t=function(){};s.document.addEventListener("test",t,n),s.document.removeEventListener("test",t,n)}catch{i=!1}return i}function qt(s,i){if(s.closest)return s.closest(i);for(var n=s;n;){if(M(n,i))return n;n=n.parentElement}return null}function M(s,i){var n=s.matches||s.webkitMatchesSelector||s.msMatchesSelector;return n.call(s,i)}function Wt(s){var i=s;if(i.offsetParent!==null)return i.scrollWidth;var n=i.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var t=n.scrollWidth;return document.documentElement.removeChild(n),t}var rt={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},at={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},O={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};var F;function it(s,i){i===void 0&&(i=!1);var n=s.CSS,t=F;if(typeof F=="boolean"&&!i)return F;var e=n&&typeof n.supports=="function";if(!e)return!1;var r=n.supports("--css-vars","yes"),a=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return t=r||a,i||(F=t),t}function ot(s,i,n){if(!s)return{x:0,y:0};var t=i.x,e=i.y,r=t+n.left,a=e+n.top,u,o;if(s.type==="touchstart"){var c=s;u=c.changedTouches[0].pageX-r,o=c.changedTouches[0].pageY-a}else{var d=s;u=d.pageX-r,o=d.pageY-a}return{x:u,y:o}}var st=["touchstart","pointerdown","mousedown","keydown"],ut=["touchend","pointerup","mouseup","contextmenu"],R=[],ct=function(s){C(i,s);function i(n){var t=s.call(this,S(S({},i.defaultAdapter),n))||this;return t.activationAnimationHasEnded=!1,t.activationTimer=0,t.fgDeactivationRemovalTimer=0,t.fgScale="0",t.frame={width:0,height:0},t.initialSize=0,t.layoutFrame=0,t.maxRadius=0,t.unboundedCoords={left:0,top:0},t.activationState=t.defaultActivationState(),t.activationTimerCallback=function(){t.activationAnimationHasEnded=!0,t.runDeactivationUXLogicIfReady()},t.activateHandler=function(e){t.activateImpl(e)},t.deactivateHandler=function(){t.deactivateImpl()},t.focusHandler=function(){t.handleFocus()},t.blurHandler=function(){t.handleBlur()},t.resizeHandler=function(){t.layout()},t}return Object.defineProperty(i,"cssClasses",{get:function(){return rt},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return at},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return O},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){var n=this,t=this.supportsPressRipple();if(this.registerRootHandlers(t),t){var e=i.cssClasses,r=e.ROOT,a=e.UNBOUNDED;requestAnimationFrame(function(){n.adapter.addClass(r),n.adapter.isUnbounded()&&(n.adapter.addClass(a),n.layoutInternal())})}},i.prototype.destroy=function(){var n=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(i.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(i.cssClasses.FG_DEACTIVATION));var t=i.cssClasses,e=t.ROOT,r=t.UNBOUNDED;requestAnimationFrame(function(){n.adapter.removeClass(e),n.adapter.removeClass(r),n.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},i.prototype.activate=function(n){this.activateImpl(n)},i.prototype.deactivate=function(){this.deactivateImpl()},i.prototype.layout=function(){var n=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){n.layoutInternal(),n.layoutFrame=0})},i.prototype.setUnbounded=function(n){var t=i.cssClasses.UNBOUNDED;n?this.adapter.addClass(t):this.adapter.removeClass(t)},i.prototype.handleFocus=function(){var n=this;requestAnimationFrame(function(){return n.adapter.addClass(i.cssClasses.BG_FOCUSED)})},i.prototype.handleBlur=function(){var n=this;requestAnimationFrame(function(){return n.adapter.removeClass(i.cssClasses.BG_FOCUSED)})},i.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},i.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},i.prototype.registerRootHandlers=function(n){var t,e;if(n){try{for(var r=g(st),a=r.next();!a.done;a=r.next()){var u=a.value;this.adapter.registerInteractionHandler(u,this.activateHandler)}}catch(o){t={error:o}}finally{try{a&&!a.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},i.prototype.registerDeactivationHandlers=function(n){var t,e;if(n.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=g(ut),a=r.next();!a.done;a=r.next()){var u=a.value;this.adapter.registerDocumentInteractionHandler(u,this.deactivateHandler)}}catch(o){t={error:o}}finally{try{a&&!a.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}},i.prototype.deregisterRootHandlers=function(){var n,t;try{for(var e=g(st),r=e.next();!r.done;r=e.next()){var a=r.value;this.adapter.deregisterInteractionHandler(a,this.activateHandler)}}catch(u){n={error:u}}finally{try{r&&!r.done&&(t=e.return)&&t.call(e)}finally{if(n)throw n.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},i.prototype.deregisterDeactivationHandlers=function(){var n,t;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var e=g(ut),r=e.next();!r.done;r=e.next()){var a=r.value;this.adapter.deregisterDocumentInteractionHandler(a,this.deactivateHandler)}}catch(u){n={error:u}}finally{try{r&&!r.done&&(t=e.return)&&t.call(e)}finally{if(n)throw n.error}}},i.prototype.removeCssVars=function(){var n=this,t=i.strings,e=Object.keys(t);e.forEach(function(r){r.indexOf("VAR_")===0&&n.adapter.updateCssVariable(t[r],null)})},i.prototype.activateImpl=function(n){var t=this;if(!this.adapter.isSurfaceDisabled()){var e=this.activationState;if(!e.isActivated){var r=this.previousActivationEvent,a=r&&n!==void 0&&r.type!==n.type;if(!a){e.isActivated=!0,e.isProgrammatic=n===void 0,e.activationEvent=n,e.wasActivatedByPointer=e.isProgrammatic?!1:n!==void 0&&(n.type==="mousedown"||n.type==="touchstart"||n.type==="pointerdown");var u=n!==void 0&&R.length>0&&R.some(function(o){return t.adapter.containsEventTarget(o)});if(u){this.resetActivationState();return}n!==void 0&&(R.push(n.target),this.registerDeactivationHandlers(n)),e.wasElementMadeActive=this.checkElementMadeActive(n),e.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){R=[],!e.wasElementMadeActive&&n!==void 0&&(n.key===" "||n.keyCode===32)&&(e.wasElementMadeActive=t.checkElementMadeActive(n),e.wasElementMadeActive&&t.animateActivation()),e.wasElementMadeActive||(t.activationState=t.defaultActivationState())})}}}},i.prototype.checkElementMadeActive=function(n){return n!==void 0&&n.type==="keydown"?this.adapter.isSurfaceActive():!0},i.prototype.animateActivation=function(){var n=this,t=i.strings,e=t.VAR_FG_TRANSLATE_START,r=t.VAR_FG_TRANSLATE_END,a=i.cssClasses,u=a.FG_DEACTIVATION,o=a.FG_ACTIVATION,c=i.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var d="",v="";if(!this.adapter.isUnbounded()){var l=this.getFgTranslationCoordinates(),f=l.startPoint,h=l.endPoint;d=f.x+"px, "+f.y+"px",v=h.x+"px, "+h.y+"px"}this.adapter.updateCssVariable(e,d),this.adapter.updateCssVariable(r,v),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(u),this.adapter.computeBoundingRect(),this.adapter.addClass(o),this.activationTimer=setTimeout(function(){n.activationTimerCallback()},c)},i.prototype.getFgTranslationCoordinates=function(){var n=this.activationState,t=n.activationEvent,e=n.wasActivatedByPointer,r;e?r=ot(t,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var a={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:a}},i.prototype.runDeactivationUXLogicIfReady=function(){var n=this,t=i.cssClasses.FG_DEACTIVATION,e=this.activationState,r=e.hasDeactivationUXRun,a=e.isActivated,u=r||!a;u&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(t),this.fgDeactivationRemovalTimer=setTimeout(function(){n.adapter.removeClass(t)},O.FG_DEACTIVATION_MS))},i.prototype.rmBoundedActivationClasses=function(){var n=i.cssClasses.FG_ACTIVATION;this.adapter.removeClass(n),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},i.prototype.resetActivationState=function(){var n=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return n.previousActivationEvent=void 0},i.numbers.TAP_DELAY_MS)},i.prototype.deactivateImpl=function(){var n=this,t=this.activationState;if(!!t.isActivated){var e=S({},t);t.isProgrammatic?(requestAnimationFrame(function(){n.animateDeactivation(e)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){n.activationState.hasDeactivationUXRun=!0,n.animateDeactivation(e),n.resetActivationState()}))}},i.prototype.animateDeactivation=function(n){var t=n.wasActivatedByPointer,e=n.wasElementMadeActive;(t||e)&&this.runDeactivationUXLogicIfReady()},i.prototype.layoutInternal=function(){var n=this;this.frame=this.adapter.computeBoundingRect();var t=Math.max(this.frame.height,this.frame.width),e=function(){var a=Math.sqrt(Math.pow(n.frame.width,2)+Math.pow(n.frame.height,2));return a+i.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?t:e();var r=Math.floor(t*i.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!=0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},i.prototype.updateLayoutCssVars=function(){var n=i.strings,t=n.VAR_FG_SIZE,e=n.VAR_LEFT,r=n.VAR_TOP,a=n.VAR_FG_SCALE;this.adapter.updateCssVariable(t,this.initialSize+"px"),this.adapter.updateCssVariable(a,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(e,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},i}(D);var ee=function(s){C(i,s);function i(){var n=s!==null&&s.apply(this,arguments)||this;return n.disabled=!1,n}return i.attachTo=function(n,t){t===void 0&&(t={isUnbounded:void 0});var e=new i(n);return t.isUnbounded!==void 0&&(e.unbounded=t.isUnbounded),e},i.createAdapter=function(n){return{addClass:function(t){return n.root.classList.add(t)},browserSupportsCssVars:function(){return it(window)},computeBoundingRect:function(){return n.root.getBoundingClientRect()},containsEventTarget:function(t){return n.root.contains(t)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,b())},deregisterInteractionHandler:function(t,e){return n.root.removeEventListener(t,e,b())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return M(n.root,":active")},isSurfaceDisabled:function(){return Boolean(n.disabled)},isUnbounded:function(){return Boolean(n.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,b())},registerInteractionHandler:function(t,e){return n.root.addEventListener(t,e,b())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(t){return n.root.classList.remove(t)},updateCssVariable:function(t,e){return n.root.style.setProperty(t,e)}}},Object.defineProperty(i.prototype,"unbounded",{get:function(){return Boolean(this.isUnbounded)},set:function(n){this.isUnbounded=Boolean(n),this.setUnbounded()},enumerable:!1,configurable:!0}),i.prototype.activate=function(){this.foundation.activate()},i.prototype.deactivate=function(){this.foundation.deactivate()},i.prototype.layout=function(){this.foundation.layout()},i.prototype.getDefaultFoundation=function(){return new ct(i.createAdapter(this))},i.prototype.initialSyncWithDOM=function(){var n=this.root;this.isUnbounded="mdcRippleIsUnbounded"in n.dataset},i.prototype.setUnbounded=function(){this.foundation.setUnbounded(Boolean(this.isUnbounded))},i}(nt);export{C as a,S as b,g as c,D as d,nt as e,b as f,qt as g,M as h,Wt as i,ct as j,ee as k};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

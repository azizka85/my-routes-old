var e=class{routes=[];root="/";before;page404;constructor(e){e?.root&&(this.root="/"===e.root?"/":"/"+this.trimSlashes(e.root)+"/"),"function"==typeof e?.before&&(this.before=e.before),"function"==typeof e?.page404&&(this.page404=e.page404),e?.routes?.length>0&&e.routes.forEach((e=>{this.add(e.rule,e.handler,e.options)}))}get fragment(){let e=decodeURI(location.pathname);return"/"!==this.root&&(e=e.replace(this.root,"")),this.trimSlashes(e)}get query(){return this.parseQuery(location.search)}add(e,t,r){return this.routes.push({rule:this.parseRouteRule(e),handler:t,options:r}),this}remove(e){return"string"==typeof e&&(e=this.parseRouteRule(e)),this.routes.some(((t,r)=>(t.handler===e||t.rule===e)&&(this.routes.splice(r,1),!0))),this}async redirectTo(e,t){return e=this.trimSlashes(e),history.replaceState(t,null,this.root+e),await this.processUri(),this}async navigateTo(e,t){return e=this.trimSlashes(e),history.pushState(t,null,this.root+e),await this.processUri(),this}refresh(){return this.redirectTo(this.fragment+location.search,history.state)}trimSlashes(e){return"string"!=typeof e?"":e.replace(/\/$/,"").replace(/^\//,"")}parseRouteRule(e){if("string"!=typeof e)return e;let t=this.trimSlashes(e).replace(/([\\\/\-\_\.])/g,"\\$1").replace(/\{[a-zA-Z]+\}/g,"(:any)").replace(/\:any/g,"[\\w\\-\\_\\.]+").replace(/\:word/g,"[a-zA-Z]+").replace(/\:num/g,"\\d+");return new RegExp("^"+t+"$","i")}parseQuery(e){let t={};return"string"!=typeof e||("?"===e[0]&&(e=e.substr(1)),e.split("&").forEach((e=>{let r=e.split("=");""!==r[0]&&(void 0===r[1]&&(r[1]=!0),t[decodeURIComponent(r[0])]=r[1])}))),t}async findRoute(){let e=this.fragment;return this.routes.some((t=>{let r=e.match(t.rule);if(r){r.shift();let s=this.query,o={fragment:e,query:s,match:r,options:t.options},i=this.before?.(o);return i||t.handler?.(o),!0}return!1}))}async processUri(){let e=this.fragment;await this.findRoute()||this.page404?.(e)}addUriListener(){window.onpopstate=this.processUri.bind(this)}removeUriListener(){window.onpopstate=null}};export{e as R};

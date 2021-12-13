import{b as q,c as z,d as F}from"../../chunk-PM37KJF3.js";import{a as Q,b as J,c as ee}from"../../chunk-DURSSFQP.js";import{a as N,b as H,d as j,e as Y,g as $,h as b,k as Z}from"../../chunk-NO7LR6XB.js";import{c as X,d as M,f as V,g as G}from"../../chunk-SAEICZ7T.js";var C,A,a={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"},te=(C={},C[""+a.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",C[""+a.LIST_ITEM_CLASS]="mdc-list-item",C[""+a.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",C[""+a.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",C[""+a.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",C[""+a.ROOT]="mdc-list",C),T=(A={},A[""+a.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",A[""+a.LIST_ITEM_CLASS]="mdc-deprecated-list-item",A[""+a.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",A[""+a.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",A[""+a.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",A[""+a.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",A[""+a.ROOT]="mdc-deprecated-list",A),c={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+a.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+a.LIST_ITEM_CLASS+` a,
    .`+T[a.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+T[a.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+a.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+a.LIST_ITEM_CLASS+` a,
    .`+a.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+a.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+T[a.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+T[a.LIST_ITEM_CLASS]+` a,
    .`+T[a.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+T[a.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},h={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300},re="evolution";var l={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},E=new Set;E.add(l.BACKSPACE);E.add(l.ENTER);E.add(l.SPACEBAR);E.add(l.PAGE_UP);E.add(l.PAGE_DOWN);E.add(l.END);E.add(l.HOME);E.add(l.ARROW_LEFT);E.add(l.ARROW_UP);E.add(l.ARROW_RIGHT);E.add(l.ARROW_DOWN);E.add(l.DELETE);E.add(l.ESCAPE);E.add(l.TAB);var p={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},f=new Map;f.set(p.BACKSPACE,l.BACKSPACE);f.set(p.ENTER,l.ENTER);f.set(p.SPACEBAR,l.SPACEBAR);f.set(p.PAGE_UP,l.PAGE_UP);f.set(p.PAGE_DOWN,l.PAGE_DOWN);f.set(p.END,l.END);f.set(p.HOME,l.HOME);f.set(p.ARROW_LEFT,l.ARROW_LEFT);f.set(p.ARROW_UP,l.ARROW_UP);f.set(p.ARROW_RIGHT,l.ARROW_RIGHT);f.set(p.ARROW_DOWN,l.ARROW_DOWN);f.set(p.DELETE,l.DELETE);f.set(p.ESCAPE,l.ESCAPE);f.set(p.TAB,l.TAB);var L=new Set;L.add(l.PAGE_UP);L.add(l.PAGE_DOWN);L.add(l.END);L.add(l.HOME);L.add(l.ARROW_LEFT);L.add(l.ARROW_UP);L.add(l.ARROW_RIGHT);L.add(l.ARROW_DOWN);function I(d){var r=d.key;if(E.has(r))return r;var e=f.get(d.keyCode);return e||l.UNKNOWN}var de=["input","button","textarea","select"],S=function(d){var r=d.target;if(!!r){var e=(""+r.tagName).toLowerCase();de.indexOf(e)===-1&&d.preventDefault()}};function ne(){var d={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return d}function ie(d,r){for(var e=new Map,t=0;t<d;t++){var n=r(t).trim();if(!!n){var i=n[0].toLowerCase();e.has(i)||e.set(i,[]),e.get(i).push({text:n.toLowerCase(),index:t})}}return e.forEach(function(s){s.sort(function(o,u){return o.index-u.index})}),e}function B(d,r){var e=d.nextChar,t=d.focusItemAtIndex,n=d.sortedIndexByFirstChar,i=d.focusedItemIndex,s=d.skipFocus,o=d.isItemAtIndexDisabled;clearTimeout(r.bufferClearTimeout),r.bufferClearTimeout=setTimeout(function(){K(r)},h.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),r.typeaheadBuffer=r.typeaheadBuffer+e;var u;return r.typeaheadBuffer.length===1?u=le(n,i,o,r):u=ue(n,o,r),u!==-1&&!s&&t(u),u}function le(d,r,e,t){var n=t.typeaheadBuffer[0],i=d.get(n);if(!i)return-1;if(n===t.currentFirstChar&&i[t.sortedIndexCursor].index===r){t.sortedIndexCursor=(t.sortedIndexCursor+1)%i.length;var s=i[t.sortedIndexCursor].index;if(!e(s))return s}t.currentFirstChar=n;var o=-1,u;for(u=0;u<i.length;u++)if(!e(i[u].index)){o=u;break}for(;u<i.length;u++)if(i[u].index>r&&!e(i[u].index)){o=u;break}return o!==-1?(t.sortedIndexCursor=o,i[t.sortedIndexCursor].index):-1}function ue(d,r,e){var t=e.typeaheadBuffer[0],n=d.get(t);if(!n)return-1;var i=n[e.sortedIndexCursor];if(i.text.lastIndexOf(e.typeaheadBuffer,0)===0&&!r(i.index))return i.index;for(var s=(e.sortedIndexCursor+1)%n.length,o=-1;s!==e.sortedIndexCursor;){var u=n[s],x=u.text.lastIndexOf(e.typeaheadBuffer,0)===0,_=!r(u.index);if(x&&_){o=s;break}s=(s+1)%n.length}return o!==-1?(e.sortedIndexCursor=o,n[e.sortedIndexCursor].index):-1}function U(d){return d.typeaheadBuffer.length>0}function K(d){d.typeaheadBuffer=""}function W(d,r){var e=d.event,t=d.isTargetListItem,n=d.focusedItemIndex,i=d.focusItemAtIndex,s=d.sortedIndexByFirstChar,o=d.isItemAtIndexDisabled,u=I(e)==="ArrowLeft",x=I(e)==="ArrowUp",_=I(e)==="ArrowRight",O=I(e)==="ArrowDown",D=I(e)==="Home",w=I(e)==="End",P=I(e)==="Enter",y=I(e)==="Spacebar";if(e.ctrlKey||e.metaKey||u||x||_||O||D||w||P)return-1;var m=!y&&e.key.length===1;if(m){S(e);var v={focusItemAtIndex:i,focusedItemIndex:n,nextChar:e.key.toLowerCase(),sortedIndexByFirstChar:s,skipFocus:!1,isItemAtIndexDisabled:o};return B(v,r)}if(!y)return-1;t&&S(e);var g=t&&U(r);if(g){var v={focusItemAtIndex:i,focusedItemIndex:n,nextChar:" ",sortedIndexByFirstChar:s,skipFocus:!1,isItemAtIndexDisabled:o};return B(v,r)}return-1}function he(d){return d instanceof Array}var se=function(d){N(r,d);function r(e){var t=d.call(this,H(H({},r.defaultAdapter),e))||this;return t.wrapFocus=!1,t.isVertical=!0,t.isSingleSelectionList=!1,t.selectedIndex=h.UNSET_INDEX,t.focusedItemIndex=h.UNSET_INDEX,t.useActivatedClass=!1,t.useSelectedAttr=!1,t.ariaCurrentAttrValue=null,t.isCheckboxList=!1,t.isRadioList=!1,t.hasTypeahead=!1,t.typeaheadState=ne(),t.sortedIndexByFirstChar=new Map,t}return Object.defineProperty(r,"strings",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(r,"cssClasses",{get:function(){return a},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return h},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),r.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},r.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},r.prototype.setWrapFocus=function(e){this.wrapFocus=e},r.prototype.setVerticalOrientation=function(e){this.isVertical=e},r.prototype.setSingleSelection=function(e){this.isSingleSelectionList=e,e&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},r.prototype.maybeInitializeSingleSelection=function(){var e=this.getSelectedIndexFromDOM();if(e!==h.UNSET_INDEX){var t=this.adapter.listItemAtIndexHasClass(e,a.LIST_ITEM_ACTIVATED_CLASS);t&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=e}},r.prototype.getSelectedIndexFromDOM=function(){for(var e=h.UNSET_INDEX,t=this.adapter.getListItemCount(),n=0;n<t;n++){var i=this.adapter.listItemAtIndexHasClass(n,a.LIST_ITEM_SELECTED_CLASS),s=this.adapter.listItemAtIndexHasClass(n,a.LIST_ITEM_ACTIVATED_CLASS);if(!!(i||s)){e=n;break}}return e},r.prototype.setHasTypeahead=function(e){this.hasTypeahead=e,e&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},r.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&U(this.typeaheadState)},r.prototype.setUseActivatedClass=function(e){this.useActivatedClass=e},r.prototype.setUseSelectedAttribute=function(e){this.useSelectedAttr=e},r.prototype.getSelectedIndex=function(){return this.selectedIndex},r.prototype.setSelectedIndex=function(e,t){var n=t===void 0?{}:t,i=n.forceUpdate;!this.isIndexValid(e)||(this.isCheckboxList?this.setCheckboxAtIndex(e):this.isRadioList?this.setRadioAtIndex(e):this.setSingleSelectionAtIndex(e,{forceUpdate:i}))},r.prototype.handleFocusIn=function(e){e>=0&&(this.focusedItemIndex=e,this.adapter.setAttributeForElementIndex(e,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(e,"0"))},r.prototype.handleFocusOut=function(e){var t=this;e>=0&&(this.adapter.setAttributeForElementIndex(e,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(e,"-1")),setTimeout(function(){t.adapter.isFocusInsideList()||t.setTabindexToFirstSelectedOrFocusedItem()},0)},r.prototype.handleKeydown=function(e,t,n){var i=this,s=I(e)==="ArrowLeft",o=I(e)==="ArrowUp",u=I(e)==="ArrowRight",x=I(e)==="ArrowDown",_=I(e)==="Home",O=I(e)==="End",D=I(e)==="Enter",w=I(e)==="Spacebar",P=e.key==="A"||e.key==="a";if(this.adapter.isRootFocused()){if(o||O?(e.preventDefault(),this.focusLastElement()):(x||_)&&(e.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var y={event:e,focusItemAtIndex:function(g){i.focusItemAtIndex(g)},focusedItemIndex:-1,isTargetListItem:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(g){return i.adapter.listItemAtIndexHasClass(g,a.LIST_ITEM_DISABLED_CLASS)}};W(y,this.typeaheadState)}return}var m=this.adapter.getFocusedElementIndex();if(!(m===-1&&(m=n,m<0))){if(this.isVertical&&x||!this.isVertical&&u)S(e),this.focusNextElement(m);else if(this.isVertical&&o||!this.isVertical&&s)S(e),this.focusPrevElement(m);else if(_)S(e),this.focusFirstElement();else if(O)S(e),this.focusLastElement();else if(P&&e.ctrlKey&&this.isCheckboxList)e.preventDefault(),this.toggleAll(this.selectedIndex===h.UNSET_INDEX?[]:this.selectedIndex);else if((D||w)&&t){var v=e.target;if(v&&v.tagName==="A"&&D||(S(e),this.adapter.listItemAtIndexHasClass(m,a.LIST_ITEM_DISABLED_CLASS)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(m),this.adapter.notifyAction(m))}if(this.hasTypeahead){var y={event:e,focusItemAtIndex:function(k){i.focusItemAtIndex(k)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(k){return i.adapter.listItemAtIndexHasClass(k,a.LIST_ITEM_DISABLED_CLASS)}};W(y,this.typeaheadState)}}},r.prototype.handleClick=function(e,t){e!==h.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(e,a.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(e,t),this.adapter.notifyAction(e)))},r.prototype.focusNextElement=function(e){var t=this.adapter.getListItemCount(),n=e+1;if(n>=t)if(this.wrapFocus)n=0;else return e;return this.focusItemAtIndex(n),n},r.prototype.focusPrevElement=function(e){var t=e-1;if(t<0)if(this.wrapFocus)t=this.adapter.getListItemCount()-1;else return e;return this.focusItemAtIndex(t),t},r.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},r.prototype.focusLastElement=function(){var e=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(e),e},r.prototype.focusInitialElement=function(){var e=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(e),e},r.prototype.setEnabled=function(e,t){!this.isIndexValid(e)||(t?(this.adapter.removeClassForElementIndex(e,a.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(e,c.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(e,a.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(e,c.ARIA_DISABLED,"true")))},r.prototype.setSingleSelectionAtIndex=function(e,t){var n=t===void 0?{}:t,i=n.forceUpdate;if(!(this.selectedIndex===e&&!i)){var s=a.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(s=a.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==h.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,s),this.setAriaForSingleSelectionAtIndex(e),this.setTabindexAtIndex(e),e!==h.UNSET_INDEX&&this.adapter.addClassForElementIndex(e,s),this.selectedIndex=e}},r.prototype.setAriaForSingleSelectionAtIndex=function(e){this.selectedIndex===h.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(e,c.ARIA_CURRENT));var t=this.ariaCurrentAttrValue!==null,n=t?c.ARIA_CURRENT:c.ARIA_SELECTED;if(this.selectedIndex!==h.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,n,"false"),e!==h.UNSET_INDEX){var i=t?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(e,n,i)}},r.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?c.ARIA_SELECTED:c.ARIA_CHECKED},r.prototype.setRadioAtIndex=function(e){var t=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(e,!0),this.selectedIndex!==h.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,t,"false"),this.adapter.setAttributeForElementIndex(e,t,"true"),this.selectedIndex=e},r.prototype.setCheckboxAtIndex=function(e){for(var t=this.getSelectionAttribute(),n=0;n<this.adapter.getListItemCount();n++){var i=!1;e.indexOf(n)>=0&&(i=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(n,i),this.adapter.setAttributeForElementIndex(n,t,i?"true":"false")}this.selectedIndex=e},r.prototype.setTabindexAtIndex=function(e){this.focusedItemIndex===h.UNSET_INDEX&&e!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==e&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==e&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),e!==h.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(e,"tabindex","0")},r.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},r.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var e=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(e)},r.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==h.UNSET_INDEX?this.selectedIndex:he(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(e,t){return Math.min(e,t)}):0:Math.max(this.focusedItemIndex,0)},r.prototype.isIndexValid=function(e){var t=this;if(e instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return e.length===0?!0:e.some(function(n){return t.isIndexInRange(n)})}else if(typeof e=="number"){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+e);return this.isIndexInRange(e)||this.isSingleSelectionList&&e===h.UNSET_INDEX}else return!1},r.prototype.isIndexInRange=function(e){var t=this.adapter.getListItemCount();return e>=0&&e<t},r.prototype.setSelectedIndexOnAction=function(e,t){t===void 0&&(t=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(e,t):this.setSelectedIndex(e)},r.prototype.toggleCheckboxAtIndex=function(e,t){var n=this.getSelectionAttribute(),i=this.adapter.isCheckboxCheckedAtIndex(e);t&&(i=!i,this.adapter.setCheckedCheckboxOrRadioAtIndex(e,i)),this.adapter.setAttributeForElementIndex(e,n,i?"true":"false");var s=this.selectedIndex===h.UNSET_INDEX?[]:this.selectedIndex.slice();i?s.push(e):s=s.filter(function(o){return o!==e}),this.selectedIndex=s},r.prototype.focusItemAtIndex=function(e){this.adapter.focusItemAtIndex(e),this.focusedItemIndex=e},r.prototype.toggleAll=function(e){var t=this.adapter.getListItemCount();if(e.length===t)this.setCheckboxAtIndex([]);else{for(var n=[],i=0;i<t;i++)(!this.adapter.listItemAtIndexHasClass(i,a.LIST_ITEM_DISABLED_CLASS)||e.indexOf(i)>-1)&&n.push(i);this.setCheckboxAtIndex(n)}},r.prototype.typeaheadMatchItem=function(e,t,n){var i=this;n===void 0&&(n=!1);var s={focusItemAtIndex:function(o){i.focusItemAtIndex(o)},focusedItemIndex:t||this.focusedItemIndex,nextChar:e,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:n,isItemAtIndexDisabled:function(o){return i.adapter.listItemAtIndexHasClass(o,a.LIST_ITEM_DISABLED_CLASS)}};return B(s,this.typeaheadState)},r.prototype.typeaheadInitSortedIndex=function(){return ie(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},r.prototype.clearTypeaheadBuffer=function(){K(this.typeaheadState)},r}(j);var ae=function(d){N(r,d);function r(){return d!==null&&d.apply(this,arguments)||this}return Object.defineProperty(r.prototype,"vertical",{set:function(e){this.foundation.setVerticalOrientation(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"listElements",{get:function(){return Array.from(this.root.querySelectorAll("."+this.classNameMap[a.LIST_ITEM_CLASS]))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"wrapFocus",{set:function(e){this.foundation.setWrapFocus(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"typeaheadInProgress",{get:function(){return this.foundation.isTypeaheadInProgress()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"hasTypeahead",{set:function(e){this.foundation.setHasTypeahead(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"singleSelection",{set:function(e){this.foundation.setSingleSelection(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"selectedIndex",{get:function(){return this.foundation.getSelectedIndex()},set:function(e){this.foundation.setSelectedIndex(e)},enumerable:!1,configurable:!0}),r.attachTo=function(e){return new r(e)},r.prototype.initialSyncWithDOM=function(){this.isEvolutionEnabled=re in this.root.dataset,this.isEvolutionEnabled?this.classNameMap=te:b(this.root,c.DEPRECATED_SELECTOR)?this.classNameMap=T:this.classNameMap=Object.values(a).reduce(function(e,t){return e[t]=t,e},{}),this.handleClick=this.handleClickEvent.bind(this),this.handleKeydown=this.handleKeydownEvent.bind(this),this.focusInEventListener=this.handleFocusInEvent.bind(this),this.focusOutEventListener=this.handleFocusOutEvent.bind(this),this.listen("keydown",this.handleKeydown),this.listen("click",this.handleClick),this.listen("focusin",this.focusInEventListener),this.listen("focusout",this.focusOutEventListener),this.layout(),this.initializeListType(),this.ensureFocusable()},r.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten("click",this.handleClick),this.unlisten("focusin",this.focusInEventListener),this.unlisten("focusout",this.focusOutEventListener)},r.prototype.layout=function(){var e=this.root.getAttribute(c.ARIA_ORIENTATION);this.vertical=e!==c.ARIA_ORIENTATION_HORIZONTAL;var t="."+this.classNameMap[a.LIST_ITEM_CLASS]+":not([tabindex])",n=c.FOCUSABLE_CHILD_ELEMENTS,i=this.root.querySelectorAll(t);i.length&&Array.prototype.forEach.call(i,function(o){o.setAttribute("tabindex","-1")});var s=this.root.querySelectorAll(n);s.length&&Array.prototype.forEach.call(s,function(o){o.setAttribute("tabindex","-1")}),this.isEvolutionEnabled&&this.foundation.setUseSelectedAttribute(!0),this.foundation.layout()},r.prototype.getPrimaryText=function(e){var t,n=e.querySelector("."+this.classNameMap[a.LIST_ITEM_PRIMARY_TEXT_CLASS]);if(this.isEvolutionEnabled||n)return(t=n==null?void 0:n.textContent)!==null&&t!==void 0?t:"";var i=e.querySelector("."+this.classNameMap[a.LIST_ITEM_TEXT_CLASS]);return i&&i.textContent||""},r.prototype.initializeListType=function(){var e=this;if(this.isInteractive=b(this.root,c.ARIA_INTERACTIVE_ROLES_SELECTOR),this.isEvolutionEnabled&&this.isInteractive){var t=Array.from(this.root.querySelectorAll(c.SELECTED_ITEM_SELECTOR),function(o){return e.listElements.indexOf(o)});b(this.root,c.ARIA_MULTI_SELECTABLE_SELECTOR)?this.selectedIndex=t:t.length>0&&(this.selectedIndex=t[0]);return}var n=this.root.querySelectorAll(c.ARIA_ROLE_CHECKBOX_SELECTOR),i=this.root.querySelector(c.ARIA_CHECKED_RADIO_SELECTOR);if(n.length){var s=this.root.querySelectorAll(c.ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=Array.from(s,function(o){return e.listElements.indexOf(o)})}else i&&(this.selectedIndex=this.listElements.indexOf(i))},r.prototype.setEnabled=function(e,t){this.foundation.setEnabled(e,t)},r.prototype.typeaheadMatchItem=function(e,t){return this.foundation.typeaheadMatchItem(e,t,!0)},r.prototype.getDefaultFoundation=function(){var e=this,t={addClassForElementIndex:function(n,i){var s=e.listElements[n];s&&s.classList.add(e.classNameMap[i])},focusItemAtIndex:function(n){var i=e.listElements[n];i&&i.focus()},getAttributeForElementIndex:function(n,i){return e.listElements[n].getAttribute(i)},getFocusedElementIndex:function(){return e.listElements.indexOf(document.activeElement)},getListItemCount:function(){return e.listElements.length},getPrimaryTextAtIndex:function(n){return e.getPrimaryText(e.listElements[n])},hasCheckboxAtIndex:function(n){var i=e.listElements[n];return!!i.querySelector(c.CHECKBOX_SELECTOR)},hasRadioAtIndex:function(n){var i=e.listElements[n];return!!i.querySelector(c.RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(n){var i=e.listElements[n],s=i.querySelector(c.CHECKBOX_SELECTOR);return s.checked},isFocusInsideList:function(){return e.root!==document.activeElement&&e.root.contains(document.activeElement)},isRootFocused:function(){return document.activeElement===e.root},listItemAtIndexHasClass:function(n,i){return e.listElements[n].classList.contains(e.classNameMap[i])},notifyAction:function(n){e.emit(c.ACTION_EVENT,{index:n},!0)},removeClassForElementIndex:function(n,i){var s=e.listElements[n];s&&s.classList.remove(e.classNameMap[i])},setAttributeForElementIndex:function(n,i,s){var o=e.listElements[n];o&&o.setAttribute(i,s)},setCheckedCheckboxOrRadioAtIndex:function(n,i){var s=e.listElements[n],o=s.querySelector(c.CHECKBOX_RADIO_SELECTOR);o.checked=i;var u=document.createEvent("Event");u.initEvent("change",!0,!0),o.dispatchEvent(u)},setTabIndexForListItemChildren:function(n,i){var s=e.listElements[n],o=c.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;Array.prototype.forEach.call(s.querySelectorAll(o),function(u){u.setAttribute("tabindex",i)})}};return new se(t)},r.prototype.ensureFocusable=function(){if(this.isEvolutionEnabled&&this.isInteractive&&!this.root.querySelector("."+this.classNameMap[a.LIST_ITEM_CLASS]+'[tabindex="0"]')){var e=this.initialFocusIndex();e!==-1&&(this.listElements[e].tabIndex=0)}},r.prototype.initialFocusIndex=function(){if(this.selectedIndex instanceof Array&&this.selectedIndex.length>0)return this.selectedIndex[0];if(typeof this.selectedIndex=="number"&&this.selectedIndex!==h.UNSET_INDEX)return this.selectedIndex;var e=this.root.querySelector("."+this.classNameMap[a.LIST_ITEM_CLASS]+":not(."+this.classNameMap[a.LIST_ITEM_DISABLED_CLASS]+")");return e===null?-1:this.getListItemIndex(e)},r.prototype.getListItemIndex=function(e){var t=$(e,"."+this.classNameMap[a.LIST_ITEM_CLASS]+", ."+this.classNameMap[a.ROOT]);return t&&b(t,"."+this.classNameMap[a.LIST_ITEM_CLASS])?this.listElements.indexOf(t):-1},r.prototype.handleFocusInEvent=function(e){var t=this.getListItemIndex(e.target);this.foundation.handleFocusIn(t)},r.prototype.handleFocusOutEvent=function(e){var t=this.getListItemIndex(e.target);this.foundation.handleFocusOut(t)},r.prototype.handleKeydownEvent=function(e){var t=this.getListItemIndex(e.target),n=e.target;this.foundation.handleKeydown(e,n.classList.contains(this.classNameMap[a.LIST_ITEM_CLASS]),t)},r.prototype.handleClickEvent=function(e){var t=this.getListItemIndex(e.target),n=e.target,i=!b(n,c.CHECKBOX_RADIO_SELECTOR);this.foundation.handleClick(t,i)},r}(Y);var R=class extends z{node=null;appBarElem=null;drawerElem=null;navIcon=null;searchIcon=null;headerIconElem=null;headerIconBtn=null;list=null;searchForm=null;static get instance(){return R.layout||(R.layout=new R),R.layout}get elem(){return this.node}async init(r,e){let t=r||document.body;if(this.node=t.querySelector('[data-layout="main-layout"]')||null,this.node){this.appBarElem=this.node.querySelector(".app-bar"),this.drawerElem=this.node.querySelector(".drawer"),this.navIcon=this.appBarElem?.querySelector('[data-button="navigation"]')||null,this.navIcon?.addEventListener("click",s=>M(s,this.navIcon)),this.searchIcon=this.appBarElem?.querySelector('[data-button="search"]')||null,this.searchIcon?.addEventListener("click",s=>M(s,this.searchIcon)),this.headerIconBtn=this.node.querySelector('[data-button="header-navigation"]'),this.headerIconBtn&&(this.headerIconElem=this.headerIconBtn.querySelector(".mdc-icon-button__ripple"),this.headerIconBtn.addEventListener("click",s=>M(s,this.headerIconBtn)));let n=this.node.querySelector(".mdc-list");n&&(this.list=new ae(n),this.list.listElements.forEach(s=>{s.addEventListener("mouseenter",()=>this.drawerElem?.classList.add("drawer--hover")),new Z(s)}),this.drawerElem?.addEventListener("mouseleave",()=>this.drawerElem?.classList.remove("drawer--hover"))),this.searchForm=this.appBarElem?.querySelector(".search form")||null,this.searchForm?.addEventListener("submit",s=>{s.preventDefault();let o=new FormData(this.searchForm);console.log("Form submited: ");for(let u of o.entries())console.log(u[0]+":",u[1])});let i=0;window.addEventListener("scroll",()=>{let s=window.scrollY||0;Math.abs(s-i)>q&&(i>=s?this.appBarElem?.classList.remove("app-bar--hide"):this.appBarElem?.classList.add("app-bar--hide")),s<=0?this.appBarElem?.classList.remove("app-bar--scrolled"):this.appBarElem?.classList.add("app-bar--scrolled"),this.node?.dispatchEvent(new CustomEvent(ee,{detail:{currScroll:s,prevScroll:i}})),i=s})}return t}async mount(){await V(this.node)}async unmount(){await G(this.node)}async load(r,e){let t=r.query["main-layout-navigation"];if(this.navIcon){let n=`?${F(r.query,"main-layout-navigation")}`;this.navIcon.setAttribute("href",n)}if(this.headerIconBtn){let n=`?${F(r.query,"main-layout-navigation")}`;this.headerIconBtn.setAttribute("href",n)}if(this.searchIcon){let n=`?${F(r.query,"main-layout-search")}`;this.searchIcon.setAttribute("href",n)}t?(this.headerIconElem&&(this.headerIconElem.innerHTML="arrow_circle_left"),this.drawerElem?.classList.add("drawer--open")):(this.headerIconElem&&(this.headerIconElem.innerHTML="arrow_circle_right"),this.drawerElem?.classList.remove("drawer--open"))}listen(r,e){this.node?.addEventListener(r,e)}doAction(r,e){switch(r){case Q:window.scrollTo({top:0,behavior:"smooth"});break;case J:window.scrollTo({top:e?.top,behavior:e?.noSmooth?"auto":"smooth"});break}}},oe=R;X(oe,"layout",null);export{oe as MainLayout};
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
 * Copyright 2020 Google Inc.
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
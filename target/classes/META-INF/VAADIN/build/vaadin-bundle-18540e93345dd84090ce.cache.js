!function(e){function t(t){for(var i,n,o=t[0],s=t[1],a=0,d=[];a<o.length;a++)n=o[a],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);for(l&&l(t);d.length;)d.shift()()}var i={},r={1:0};function n(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.e=function(e){var t=[],i=r[e];if(0!==i)if(i)t.push(i[2]);else{var o=new Promise((function(t,n){i=r[e]=[t,n]}));t.push(i[2]=o);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.src=function(e){return n.p+"build/vaadin-"+({}[e]||e)+"-"+{0:"485c5b2dd67b9b53401d",4:"8f5ecf63d6836ebebc74",6:"495aa358bbc683d590f1"}[e]+".cache.js"}(e);var l=new Error;s=function(t){a.onerror=a.onload=null,clearTimeout(d);var i=r[e];if(0!==i){if(i){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,i[1](l)}r[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(t)},n.m=e,n.c=i,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="VAADIN/",n.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var l=s;n(n.s=231)}([,,,,,,function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));i(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class r{constructor(e){this.value=e.toString()}toString(){return this.value}}function n(e){if(e instanceof r)return e.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+e)}var o=function(e,...t){var i=document.createElement("template");return i.innerHTML=t.reduce((t,i,o)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof r)return n(e);throw new Error("non-template value passed to Polymer's html function: "+e)}(i)+e[o+1],e[0]),i}},,,function(e,t,i){"use strict";i.d(t,"d",(function(){return l})),i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return h}));i(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var r=0,n=0,o=[],s=0,a=document.createTextNode("");new window.MutationObserver((function(){for(var e=o.length,t=0;t<e;t++){var i=o[t];if(i)try{i()}catch(e){setTimeout(()=>{throw e})}}o.splice(0,e),n+=e})).observe(a,{characterData:!0});var l={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},d={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},c={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},h={run:e=>(a.textContent=s++,o.push(e),r++),cancel(e){var t=e-n;if(t>=0){if(!o[t])throw new Error("invalid async handle: "+e);o[t]=null}}}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:e=>e},,function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i(99),n=(i(6),Object(r.a)(HTMLElement))},,function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return s}));i(25),i(28),i(9);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class r{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,n.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),n.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof r?e._cancelAsync():e=new r,e.setConfig(t,i),e}}var n=new Set,o=function(e){n.add(e)},s=function(){var e=Boolean(n.size);return n.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e}},,function(e,t,i){"use strict";i.d(t,"d",(function(){return r})),i.d(t,"g",(function(){return n})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return s})),i.d(t,"i",(function(){return a})),i.d(t,"e",(function(){return l})),i.d(t,"f",(function(){return d})),i.d(t,"a",(function(){return h})),i.d(t,"h",(function(){return u}));i(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(e){return e.indexOf(".")>=0}function n(e){var t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function o(e,t){return 0===e.indexOf(t+".")}function s(e,t){return 0===t.indexOf(e+".")}function a(e,t,i){return t+i.slice(e.length)}function l(e,t){return e===t||o(e,t)||s(e,t)}function d(e){if(Array.isArray(e)){for(var t=[],i=0;i<e.length;i++)for(var r=e[i].toString().split("."),n=0;n<r.length;n++)t.push(r[n]);return t.join(".")}return e}function c(e){return Array.isArray(e)?d(e).split("."):e.toString().split(".")}function h(e,t,i){for(var r=e,n=c(t),o=0;o<n.length;o++){if(!r)return;r=r[n[o]]}return i&&(i.path=n.join(".")),r}function u(e,t,i){var r=e,n=c(t),o=n[n.length-1];if(n.length>1){for(var s=0;s<n.length-1;s++){if(!(r=r[n[s]]))return}r[o]=i}else r[t]=i;return n.join(".")}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var r=i(48),n=i(97),o=e=>class extends(Object(n.a)(e)){static finalize(){super.finalize();var e=this.prototype._template,t=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,i=Object.getPrototypeOf(this.prototype)._template;i&&!t&&Array.from(i.content.querySelectorAll("style[include]")).forEach(t=>{this._includeStyle(t.getAttribute("include"),e)}),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){var t=r.a.prototype.modules,i=!1,n=this.is+"-default-theme";Object.keys(t).sort((e,t)=>{var i=0===e.indexOf("vaadin-"),r=0===t.indexOf("vaadin-"),n=["lumo-","material-"],o=n.filter(t=>0===e.indexOf(t)).length>0,s=n.filter(e=>0===t.indexOf(e)).length>0;return i!==r?i?-1:1:o!==s?o?-1:1:0}).forEach(r=>{if(r!==n){var o=t[r].getAttribute("theme-for");o&&o.split(" ").forEach(t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(i=!0,this._includeStyle(r,e))})}}),!i&&t[n]&&this._includeStyle(n,e)}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){var i=document.createElement("style");i.setAttribute("include",e),t.content.appendChild(i)}}}},,function(e,t,i){"use strict";i.d(t,"h",(function(){return n})),i.d(t,"d",(function(){return o})),i.d(t,"e",(function(){return s})),i.d(t,"c",(function(){return a})),i.d(t,"f",(function(){return l})),i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return c})),i.d(t,"g",(function(){return h}));i(25);var r=i(56),n=!window.ShadyDOM,o=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,Object(r.a)(document.baseURI||window.location.href)),s=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,a=!1,l=!1,d=!1,c=!1,h=!1},,function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var r=i(9),n=i(15),o=i(36),s=i(63),a=i(148);function l(){}var d,c=function(){if("function"==typeof a.a)return Object(a.a)(l)};window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){c&&c()};var h=new Set,u=e=>class extends(Object(s.a)(e)){static finalize(){super.finalize();var{is:e}=this;e&&!h.has(e)&&(window.Vaadin.registrations.push(this),h.add(e),window.Vaadin.developmentModeCallback&&(d=n.a.debounce(d,r.b,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Object(o.a)(d)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}},,function(e,t,i){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(e,t){return e}},,,function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));i(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var r=0;function n(){}n.prototype.__mixinApplications,n.prototype.__mixinSet;var o=function(e){var t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);var i=r++;return function(r){var n=r.__mixinSet;if(n&&n[i])return r;var o=t,s=o.get(r);s||(s=e(r),o.set(r,s));var a=Object.create(s.__mixinSet||n||null);return a[i]=!0,s.__mixinSet=a,s}}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i(25);var r=i(125),n=i(9),o=i(11);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function s(e){return"slot"===e.localName}var a=class{static getFlattenedNodes(e){var t=Object(o.a)(e);return s(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>s(e)?(e=e,Object(o.a)(e).assignedNodes({flatten:!0})):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){s(this._target)?this._listenSlots([this._target]):Object(o.a)(this._target).children&&(this._listenSlots(Object(o.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){s(this._target)?this._unlistenSlots([this._target]):Object(o.a)(this._target).children&&(this._unlistenSlots(Object(o.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,n.c.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(var t=0;t<e.length;t++){var i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;for(var e,t={target:this._target,addedNodes:[],removedNodes:[]},i=this.constructor.getFlattenedNodes(this._target),n=Object(r.a)(i,this._effectiveNodes),o=0;o<n.length&&(e=n[o]);o++)for(var s,a=0;a<e.removed.length&&(s=e.removed[a]);a++)t.removedNodes.push(s);for(var l,d=0;d<n.length&&(l=n[d]);d++)for(var c=l.index;c<l.index+l.addedCount;c++)t.addedNodes.push(i[c]);this._effectiveNodes=i;var h=!1;return(t.addedNodes.length||t.removedNodes.length)&&(h=!0,this.callback.call(this._target,t)),h}_listenSlots(e){for(var t=0;t<e.length;t++){var i=e[t];s(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(var t=0;t<e.length;t++){var i=e[t];s(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}}},,function(e,t,i){"use strict";i.r(t),i.d(t,"gestures",(function(){return I})),i.d(t,"recognizers",(function(){return T})),i.d(t,"deepTargetFind",(function(){return k})),i.d(t,"addListener",(function(){return L})),i.d(t,"removeListener",(function(){return R})),i.d(t,"register",(function(){return N})),i.d(t,"setTouchAction",(function(){return M})),i.d(t,"prevent",(function(){return F})),i.d(t,"resetMouseCanceller",(function(){return j})),i.d(t,"findOriginalTarget",(function(){return q})),i.d(t,"add",(function(){return G})),i.d(t,"remove",(function(){return W}));i(25);var r=i(9),n=i(15),o=i(21),s=i(11),a="string"==typeof document.head.style.touchAction,l="__polymerGesturesHandled",d="__polymerGesturesTouchAction",c=["mousedown","mousemove","mouseup","click"],h=[0,1,4,2],u=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function p(e){return c.indexOf(e)>-1}var m=!1;function _(e){if(!p(e)&&"touchend"!==e)return a&&m&&o.c?{passive:!0}:void 0}!function(){try{var e=Object.defineProperty({},"passive",{get(){m=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();var f=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),v=[],g={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},b={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function y(e){var t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];var i=e.getRootNode();if(e.id)for(var r=i.querySelectorAll(`label[for = ${e.id}]`),n=0;n<r.length;n++)t.push(r[n])}return t}var A=function(e){var t,i=e.sourceCapabilities;if((!i||i.firesTouchEvents)&&(e[l]={skip:!0},"click"===e.type)){for(var r=!1,n=O(e),o=0;o<n.length;o++){if(n[o].nodeType===Node.ELEMENT_NODE)if("label"===n[o].localName)v.push(n[o]);else if(t=n[o],g[t.localName])for(var s=y(n[o]),a=0;a<s.length;a++)r=r||v.indexOf(s[a])>-1;if(n[o]===C.mouse.target)return}if(r)return;e.preventDefault(),e.stopPropagation()}};function w(e){for(var t,i=f?["click"]:c,r=0;r<i.length;r++)t=i[r],e?(v.length=0,document.addEventListener(t,A,!0)):document.removeEventListener(t,A,!0)}function x(e){var t=e.type;if(!p(t))return!1;if("mousemove"===t){var i=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!u&&(i=h[e.which]||0),Boolean(1&i)}return 0===(void 0===e.button?0:e.button)}var C={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function E(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function S(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){C.mouse.mouseIgnoreJob||w(!0),C.mouse.target=O(e)[0],C.mouse.mouseIgnoreJob=n.a.debounce(C.mouse.mouseIgnoreJob,r.d.after(2500),(function(){w(),C.mouse.target=null,C.mouse.mouseIgnoreJob=null}))}),!!m&&{passive:!0});var O=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],I={},T=[];function k(e,t){for(var i=document.elementFromPoint(e,t),r=i;r&&r.shadowRoot&&!window.ShadyDOM;){if(r===(r=r.shadowRoot.elementFromPoint(e,t)))break;r&&(i=r)}return i}function P(e){var t=O(e);return t.length>0?t[0]:e.target}function z(e){var t,i=e.type,r=e.currentTarget.__polymerGestures;if(r){var n=r[i];if(n){if(!e[l]&&(e[l]={},"touch"===i.slice(0,5))){var o=(e=e).changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(C.touch.id=o.identifier),C.touch.id!==o.identifier)return;a||"touchstart"!==i&&"touchmove"!==i||function(e){var t=e.changedTouches[0],i=e.type;if("touchstart"===i)C.touch.x=t.clientX,C.touch.y=t.clientY,C.touch.scrollDecided=!1;else if("touchmove"===i){if(C.touch.scrollDecided)return;C.touch.scrollDecided=!0;var r=function(e){for(var t,i="auto",r=O(e),n=0;n<r.length;n++)if((t=r[n])[d]){i=t[d];break}return i}(e),n=!1,o=Math.abs(C.touch.x-t.clientX),s=Math.abs(C.touch.y-t.clientY);e.cancelable&&("none"===r?n=!0:"pan-x"===r?n=s>o:"pan-y"===r&&(n=o>s)),n?e.preventDefault():F("track")}}(e)}if(!(t=e[l]).skip){for(var s,c=0;c<T.length;c++)n[(s=T[c]).name]&&!t[s.name]&&s.flow&&s.flow.start.indexOf(e.type)>-1&&s.reset&&s.reset();for(var h,u=0;u<T.length;u++)n[(h=T[u]).name]&&!t[h.name]&&(t[h.name]=!0,h[i](e))}}}}function L(e,t,i){return!!I[t]&&(function(e,t,i){var r=I[t],n=r.deps,o=r.name,s=e.__polymerGestures;s||(e.__polymerGestures=s={});for(var a,l,d=0;d<n.length;d++)a=n[d],f&&p(a)&&"click"!==a||((l=s[a])||(s[a]=l={_count:0}),0===l._count&&e.addEventListener(a,z,_(a)),l[o]=(l[o]||0)+1,l._count=(l._count||0)+1);e.addEventListener(t,i),r.touchAction&&M(e,r.touchAction)}(e,t,i),!0)}function R(e,t,i){return!!I[t]&&(function(e,t,i){var r=I[t],n=r.deps,o=r.name,s=e.__polymerGestures;if(s)for(var a,l,d=0;d<n.length;d++)a=n[d],(l=s[a])&&l[o]&&(l[o]=(l[o]||1)-1,l._count=(l._count||1)-1,0===l._count&&e.removeEventListener(a,z,_(a)));e.removeEventListener(t,i)}(e,t,i),!0)}function N(e){T.push(e);for(var t=0;t<e.emits.length;t++)I[e.emits[t]]=e}function M(e,t){a&&e instanceof HTMLElement&&r.c.run(()=>{e.style.touchAction=t}),e[d]=t}function D(e,t,i){var r=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=i,Object(s.a)(e).dispatchEvent(r),r.defaultPrevented){var n=i.preventer||i.sourceEvent;n&&n.preventDefault&&n.preventDefault()}}function F(e){var t=function(e){for(var t,i=0;i<T.length;i++){t=T[i];for(var r=0;r<t.emits.length;r++)if(t.emits[r]===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function j(){C.mouse.mouseIgnoreJob&&C.mouse.mouseIgnoreJob.flush()}function B(e,t,i,r){t&&D(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:r,prevent:function(e){return F(e)}})}function H(e,t,i){if(e.prevent)return!1;if(e.started)return!0;var r=Math.abs(e.x-t),n=Math.abs(e.y-i);return r>=5||n>=5}function $(e,t,i){if(t){var r,n=e.moves[e.moves.length-2],o=e.moves[e.moves.length-1],s=o.x-e.x,a=o.y-e.y,l=0;n&&(r=o.x-n.x,l=o.y-n.y),D(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:s,dy:a,ddx:r,ddy:l,sourceEvent:i,hover:function(){return k(i.clientX,i.clientY)}})}}function V(e,t,i){var r=Math.abs(t.clientX-e.x),n=Math.abs(t.clientY-e.y),o=P(i||t);!o||b[o.localName]&&o.hasAttribute("disabled")||(isNaN(r)||isNaN(n)||r<=25&&n<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;var t=P(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;var i=t.getBoundingClientRect(),r=e.pageX,n=e.pageY;return!(r>=i.left&&r<=i.right&&n>=i.top&&n<=i.bottom)}return!1}(t))&&(e.prevent||D(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}N({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){S(this.info)},mousedown:function(e){if(x(e)){var t=P(e),i=this;E(this.info,(function(e){x(e)||(B("up",t,e),S(i.info))}),(function(e){x(e)&&B("up",t,e),S(i.info)})),B("down",t,e)}},touchstart:function(e){B("down",P(e),e.changedTouches[0],e)},touchend:function(e){B("up",P(e),e.changedTouches[0],e)}}),N({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,S(this.info)},mousedown:function(e){if(x(e)){var t=P(e),i=this,r=function(e){var r=e.clientX,n=e.clientY;H(i.info,r,n)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&F("tap"),i.info.addMove({x:r,y:n}),x(e)||(i.info.state="end",S(i.info)),t&&$(i.info,t,e),i.info.started=!0)};E(this.info,r,(function(e){i.info.started&&r(e),S(i.info)})),this.info.x=e.clientX,this.info.y=e.clientY}},touchstart:function(e){var t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){var t=P(e),i=e.changedTouches[0],r=i.clientX,n=i.clientY;H(this.info,r,n)&&("start"===this.info.state&&F("tap"),this.info.addMove({x:r,y:n}),$(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){var t=P(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),$(this.info,t,i))}}),N({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){x(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){x(e)&&V(this.info,e)},touchstart:function(e){var t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){V(this.info,e.changedTouches[0],e)}});var q=P,G=L,W=R},,function(e,t,i){"use strict";i.d(t,"a",(function(){return f}));var r=i(105),n=(i(73),i(191),i(25),i(101)),o=i(78),s=i(44),a=i(21),l=i(11),d=Object(s.a)(Object(o.b)(Object(n.a)(HTMLElement)));customElements.define("dom-bind",class extends d{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),a.f)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(l.a)(Object(l.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(var e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){var e;if(!this.__children){if(!(e=e||this.querySelector("template"))){var t=new MutationObserver(()=>{if(!(e=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(var i=this.root.firstChild;i;i=i.nextSibling)this.__children[this.__children.length]=i;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});i(181),i(192);var c=i(13),h=i(28),u=i(125),p=i(99),m=Object(h.a)(e=>{var t=Object(p.a)(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){var i=t.path;if(i==JSCompiler_renameProperty("items",this)){var r=t.base||[],n=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),n){var o=Object(u.a)(r,n);this.__applySplices(o)}this.__lastItems=r,this.__lastMulti=e}else if(t.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(t.value.indexSplices);else{var s=i.slice((JSCompiler_renameProperty("items",this)+".").length),a=parseInt(s,10);s.indexOf(".")<0&&s==a&&this.__deselectChangedIdx(a)}}__applySplices(e){for(var t=this,i=this.__selectedMap,r=function(r){var n=e[r];i.forEach((e,t)=>{e<n.index||(e>=n.index+n.removed.length?i.set(t,e+n.addedCount-n.removed.length):i.set(t,-1))});for(var o=0;o<n.addedCount;o++){var s=n.index+o;i.has(t.items[s])&&i.set(t.items[s],s)}},n=0;n<e.length;n++)r(n);this.__updateLinks();var o=0;i.forEach((e,t)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null,i.delete(t)):o++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){var e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){var t=this.__selectedIndexForItemIndex(e);if(t>=0){var i=0;this.__selectedMap.forEach((e,r)=>{t==i++&&this.deselect(r)})}}__selectedIndexForItemIndex(e){var t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(e){var t,i=this.__selectedMap.get(e);i>=0&&(this.__selectedMap.delete(e),this.multi&&(t=this.__selectedIndexForItemIndex(i)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),t,1):this.selected=this.selectedItem=null)}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){var t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(c.a);class _ extends m{static get is(){return"array-selector"}static get template(){return null}}customElements.define(_.is,_);i(69),i(193),i(6);var f=Object(r.a)(HTMLElement).prototype},,function(e,t,i){"use strict";i.d(t,"b",(function(){return n}));i(25);var r=i(15);i.d(t,"a",(function(){return r.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var n=function(){var e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Object(r.c)()}while(e||t)}},,function(e,t,i){"use strict";i.d(t,"d",(function(){return o})),i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return l}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r,n,o=!(window.ShadyDOM&&window.ShadyDOM.inUse);function s(e){r=(!e||!e.shimcssproperties)&&(o||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(n=window.ShadyCSS.cssBuild);var a=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?r=window.ShadyCSS.nativeCss:window.ShadyCSS?(s(window.ShadyCSS),window.ShadyCSS=void 0):s(window.WebComponents&&window.WebComponents.flags);var l=r},,function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"a",(function(){return u}));i(25);var r=i(11),n=(i(21),i(30)),o=(i(36),i(15),Element.prototype),s=o.matches||o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector,a=function(e,t){return s.call(e,t)};class l{constructor(e){this.node=e}observeNodes(e){return new n.a(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(Object(r.a)(this.node).contains(e))return!0;for(var t=e,i=e.ownerDocument;t&&t!==i&&t!==this.node;)t=Object(r.a)(t).parentNode||Object(r.a)(t).host;return t===this.node}getOwnerRoot(){return Object(r.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(r.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){for(var e=[],t=Object(r.a)(this.node).assignedSlot;t;)e.push(t),t=Object(r.a)(t).assignedSlot;return e}importNode(e,t){var i=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(r.a)(i).importNode(e,t)}getEffectiveChildNodes(){return n.a.getFlattenedNodes(this.node)}queryDistributedElements(e){for(var t,i=this.getEffectiveChildNodes(),r=[],n=0,o=i.length;n<o&&(t=i[n]);n++)t.nodeType===Node.ELEMENT_NODE&&a(t,e)&&r.push(t);return r}get activeElement(){var e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function d(e,t){for(var i=function(i){var r=t[i];Object.defineProperty(e,r,{get:function(){return this.node[r]},configurable:!0})},r=0;r<t.length;r++)i(r)}class c{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}l.prototype.cloneNode,l.prototype.appendChild,l.prototype.insertBefore,l.prototype.removeChild,l.prototype.replaceChild,l.prototype.setAttribute,l.prototype.removeAttribute,l.prototype.querySelector,l.prototype.querySelectorAll,l.prototype.parentNode,l.prototype.firstChild,l.prototype.lastChild,l.prototype.nextSibling,l.prototype.previousSibling,l.prototype.firstElementChild,l.prototype.lastElementChild,l.prototype.nextElementSibling,l.prototype.previousElementSibling,l.prototype.childNodes,l.prototype.children,l.prototype.classList,l.prototype.textContent,l.prototype.innerHTML;var h=l;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(l.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=l.prototype[t])}),d(e.prototype,["classList"]),h=e,Object.defineProperties(c.prototype,{localTarget:{get(){return this.event.currentTarget},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(var i=function(i){var r=t[i];e[r]=function(){return this.node[r].apply(this.node,arguments)}},r=0;r<t.length;r++)i(r)}(l.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),d(l.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(var i=function(i){var r=t[i];Object.defineProperty(e,r,{get:function(){return this.node[r]},set:function(e){this.node[r]=e},configurable:!0})},r=0;r<t.length;r++)i(r)}(l.prototype,["textContent","innerHTML"]);var u=function(e){if((e=e||document)instanceof h)return e;if(e instanceof c)return e;var t=e.__domApi;return t||(t=e instanceof Event?new c(e):new h(e),e.__domApi=t),t}},,function(e,t,i){"use strict";i(87),i(69);var r=document.createElement("template");r.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(r.content)},,function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));i(25);var r=i(28),n=i(32),o=Object(r.a)(e=>class extends e{_addEventListenerToNode(e,t,i){Object(n.addListener)(e,t,i)||super._addEventListenerToNode(e,t,i)}_removeEventListenerFromNode(e,t,i){Object(n.removeListener)(e,t,i)||super._removeEventListenerFromNode(e,t,i)}})},,function(e,t,i){"use strict";i(87),i(69);var r=document.createElement("template");r.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(r.content)},,function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));i(25);var r=i(56),n=i(21),o={},s={};function a(e,t){o[e]=s[e.toLowerCase()]=t}function l(e){return o[e]||s[e.toLowerCase()]}class d extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){var i=l(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,r){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){var e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Object(r.c)(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Object(r.a)(t)}return this.__assetpath}register(e){if(e=e||this.id){if(n.f&&void 0!==l(e))throw a(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,a(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}d.prototype.modules=o,customElements.define("dom-module",d)},,function(e,t,i){"use strict";i.d(t,"p",(function(){return d})),i.d(t,"m",(function(){return c})),i.d(t,"j",(function(){return h})),i.d(t,"f",(function(){return u})),i.d(t,"a",(function(){return p})),i.d(t,"c",(function(){return _})),i.d(t,"b",(function(){return f})),i.d(t,"e",(function(){return v})),i.d(t,"l",(function(){return g})),i.d(t,"n",(function(){return b})),i.d(t,"q",(function(){return y})),i.d(t,"i",(function(){return A})),i.d(t,"g",(function(){return w})),i.d(t,"o",(function(){return x})),i.d(t,"h",(function(){return C})),i.d(t,"d",(function(){return E})),i.d(t,"k",(function(){return S}));var r=i(38),n=i(65),o=i(67),s=new Set;function a(e){var t=e.textContent;if(!s.has(t)){s.add(t);var i=document.createElement("style");i.setAttribute("shady-unscoped",""),i.textContent=t,document.head.appendChild(i)}}function l(e){return e.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function d(e,t){return e?("string"==typeof e&&(e=Object(n.b)(e)),t&&u(e,t),Object(n.d)(e,r.c)):""}function c(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=Object(n.b)(e.textContent)),e.__cssRules||null}function h(e){return Boolean(e.parent)&&e.parent.type===n.e.KEYFRAMES_RULE}function u(e,t,i,r){if(e){var s=!1,a=e.type;if(r&&a===n.e.MEDIA_RULE){var l=e.selector.match(o.e);l&&(window.matchMedia(l[1]).matches||(s=!0))}a===n.e.STYLE_RULE?t(e):i&&a===n.e.KEYFRAMES_RULE?i(e):a===n.e.MIXIN_RULE&&(s=!0);var d=e.rules;if(d&&!s)for(var c,h=0,p=d.length;h<p&&(c=d[h]);h++)u(c,t,i,r)}}function p(e,t,i,r){var n=function(e,t){var i=document.createElement("style");t&&i.setAttribute("scope",t);return i.textContent=e,i}(e,t);return f(n,i,r),n}var m=null;function _(e){var t=document.createComment(" Shady DOM styles for "+e+" "),i=m?m.nextSibling:null,r=document.head;return r.insertBefore(t,i||r.firstChild),m=t,t}function f(e,t,i){t=t||document.head;var r=i&&i.nextSibling||t.firstChild;(t.insertBefore(e,r),m)?e.compareDocumentPosition(m)===Node.DOCUMENT_POSITION_PRECEDING&&(m=e):m=e}function v(e,t){for(var i=0,r=t,n=e.length;r<n;r++)if("("===e[r])i++;else if(")"===e[r]&&0==--i)return r;return-1}function g(e,t){var i=e.indexOf("var(");if(-1===i)return t(e,"","","");var r=v(e,i+3),n=e.substring(i+4,r),o=e.substring(0,i),s=g(e.substring(r+1),t),a=n.indexOf(",");return-1===a?t(o,n.trim(),"",s):t(o,n.substring(0,a).trim(),n.substring(a+1).trim(),s)}function b(e,t){r.d?e.setAttribute("class",t):window.ShadyDOM.nativeMethods.setAttribute.call(e,"class",t)}var y=window.ShadyDOM&&window.ShadyDOM.wrap||(e=>e);function A(e){var t=e.localName,i="",r="";return t?t.indexOf("-")>-1?i=t:(r=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,r=e.extends),{is:i,typeExtension:r}}function w(e){for(var t=[],i=e.querySelectorAll("style"),n=0;n<i.length;n++){var o=i[n];l(o)?r.d||(a(o),o.parentNode.removeChild(o)):(t.push(o.textContent),o.parentNode.removeChild(o))}return t.join("").trim()}function x(e){for(var t=[],i="",r=0;r>=0&&r<e.length;r++)if("("===e[r]){var n=v(e,r);i+=e.slice(r,n+1),r=n}else","===e[r]?(t.push(i),i=""):i+=e[r];return i&&t.push(i),t}function C(e){if(void 0!==r.a)return r.a;if(void 0===e.__cssBuild){var t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{var i=function(e){var t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){var i=t.textContent.trim().split(":");if("css-build"===i[0])return i[1]}return""}(e);""!==i&&function(e){var t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}(e),e.__cssBuild=i}}return e.__cssBuild||""}function E(e){return""!==C(e)}function S(e=""){return!(""===e||!r.c)&&(r.d?"shadow"===e:"shady"===e)}},,function(e,t,i){"use strict";i(87),i(69),i(48);var r=document.createElement("template");r.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content)},,function(e,t,i){"use strict";i.d(t,"b",(function(){return b})),i.d(t,"a",(function(){return y}));i(25);var r=i(101),n=i(78),o=i(21),s=i(11),a=null;function l(){return a}l.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:l,writable:!0}});var d=Object(r.a)(l),c=Object(n.a)(d);var h=Object(r.a)(class{});class u extends h{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);for(var t=this.children=[],i=this.root.firstChild;i;i=i.nextSibling)t.push(i),i.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);var r=this.__templatizeOptions;(e&&r.instanceProps||!r.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(var t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(var i in e)this._setPendingProperty(i,e[i])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,i(e)});else{var r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(e,t,i)}}_showHideChildren(e){for(var t=this.children,i=0;i<t.length;i++){var r=t[i];if(Boolean(e)!=Boolean(r.__hideTemplateChildren__))if(r.nodeType===Node.TEXT_NODE)e?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if("slot"===r.localName)if(e)r.__polymerReplaced__=document.createComment("hidden-slot"),Object(s.a)(Object(s.a)(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{var n=r.__polymerReplaced__;n&&Object(s.a)(Object(s.a)(n).parentNode).replaceChild(r,n)}else r.style&&(e?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=e,r._showHideChildren&&r._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i)}get parentModel(){var e=this.__parentModel;if(!e){var t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}u.prototype.__dataHost,u.prototype.__templatizeOptions,u.prototype._methodHost,u.prototype.__templatizeOwner,u.prototype.__hostProps;var p=Object(n.a)(u);function m(e){var t=e.__dataHost;return t&&t._methodHost||t}function _(e,t,i){var r=i.mutableData?p:u;b.mixin&&(r=b.mixin(r));var n=class extends r{};return n.prototype.__templatizeOptions=i,n.prototype._bindTemplate(e),function(e,t,i,r){var n=i.hostProps||{};for(var o in r.instanceProps){delete n[o];var s=r.notifyInstanceProp;s&&e.prototype._addPropertyEffect(o,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:g(o,s)})}if(r.forwardHostProp&&t.__dataHost)for(var a in n)e.prototype._addPropertyEffect(a,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0)}})}(n,e,t,i),n}function f(e,t,i){var r=i.forwardHostProp;if(r){var n=t.templatizeTemplateClass;if(!n){var o=i.mutableData?c:d;n=t.templatizeTemplateClass=class extends o{};var s=t.hostProps;for(var l in s)n.prototype._addPropertyEffect("_host_"+l,n.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:v(l,r)}),n.prototype._createNotifyingProperty("_host_"+l)}!function(e,t){a=e,Object.setPrototypeOf(e,t.prototype),new t,a=null}(e,n),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function v(e,t){return function(e,i,r){t.call(e.__templatizeOwner,i.substring("_host_".length),r[i])}}function g(e,t){return function(e,i,r){t.call(e.__templatizeOwner,e,i,r[i])}}function b(e,t,i){if(o.f&&!m(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;var r=(t?t.constructor:u)._parseTemplate(e),n=r.templatizeInstanceClass;n||(n=_(e,r,i),r.templatizeInstanceClass=n),f(e,r,i);var s=class extends n{};return s.prototype._methodHost=m(e),s.prototype.__dataHost=e,s.prototype.__templatizeOwner=t,s.prototype.__hostProps=r.hostProps,s=s}function y(e,t){for(var i;t;)if(i=t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost}else t=Object(s.a)(t).parentNode;return null}},,function(e,t,i){"use strict";i.d(t,"c",(function(){return a})),i.d(t,"b",(function(){return l})),i.d(t,"a",(function(){return d}));i(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var r,n,o=/(url\()([^)]*)(\))/g,s=/(^\/)|(^#)|(^[\w-\d]*:)/;function a(e,t){if(e&&s.test(e))return e;if(void 0===r){r=!1;try{var i=new URL("b","http://a");i.pathname="c%20d",r="http://a/c%20d"===i.href}catch(e){}}return t||(t=document.baseURI||window.location.href),r?new URL(e,t).href:(n||((n=document.implementation.createHTMLDocument("temp")).base=n.createElement("base"),n.head.appendChild(n.base),n.anchor=n.createElement("a"),n.body.appendChild(n.anchor)),n.base.href=t,n.anchor.href=e,n.anchor.href||e)}function l(e,t){return e.replace(o,(function(e,i,r,n){return i+"'"+a(r.replace(/["']/g,""),t)+"'"+n}))}function d(e){return e.substring(0,e.lastIndexOf("/")+1)}},,function(e,t,i){"use strict";i(87),i(69);var r=document.createElement("template");r.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(r.content)},,,function(e,t,i){"use strict";i(87),i(69),i(48);var r=document.createElement("template");r.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content)},,function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var r,n=i(92),o=[];new MutationObserver((function(){var e=a();o.forEach(t=>{s(t,e)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});var s=function(e,t){t?e.setAttribute("dir",t):e.removeAttribute("dir")},a=function(){return document.documentElement.getAttribute("dir")},l=e=>class extends e{static get properties(){return{dir:{type:String,readOnly:!0}}}static finalize(){super.finalize(),r||(r=n.a.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),s(this,a()))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"dir"===e){var r=i===a()&&-1===o.indexOf(this),n=!i&&t&&-1===o.indexOf(this),l=i!==a()&&t===a();r||n?(this.__subscribe(),s(this,a())):l&&this.__subscribe(!1)}}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}__subscribe(e=!0){e?-1===o.indexOf(this)&&o.push(this):o.indexOf(this)>-1&&o.splice(o.indexOf(this),1)}__getNormalizedScrollLeft(e){return n.a.getNormalizedScrollLeft(r,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,t){return n.a.setNormalizedScrollLeft(r,this.getAttribute("dir")||"ltr",e,t)}}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return n})),i.d(t,"d",(function(){return o})),i.d(t,"c",(function(){return s})),i.d(t,"e",(function(){return a}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class r{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function n(e){return function e(t,i){var r=i.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=r.trim(),t.parent){var n=t.previous?t.previous.end:t.parent.start;r=(r=(r=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){for(var e=arguments[1],t=6-e.length;t--;)e="0"+e;return"\\"+e}))}(r=i.substring(n,t.start-1))).replace(c.multipleSpaces," ")).substring(r.lastIndexOf(";")+1);var o=t.parsedSelector=t.selector=r.trim();t.atRule=0===o.indexOf(p),t.atRule?0===o.indexOf(u)?t.type=a.MEDIA_RULE:o.match(c.keyframesRule)&&(t.type=a.KEYFRAMES_RULE,t.keyframesName=t.selector.split(c.multipleSpaces).pop()):0===o.indexOf(h)?t.type=a.MIXIN_RULE:t.type=a.STYLE_RULE}var s=t.rules;if(s)for(var l,d=0,m=s.length;d<m&&(l=s[d]);d++)e(l,i);return t}(function(e){var t=new r;t.start=0,t.end=e.length;for(var i=t,n=0,o=e.length;n<o;n++)if(e[n]===l){i.rules||(i.rules=[]);var s=i,a=s.rules[s.rules.length-1]||null;(i=new r).start=n+1,i.parent=s,i.previous=a,s.rules.push(i)}else e[n]===d&&(i.end=n+1,i=i.parent||t);return t}(e=e.replace(c.comments,"").replace(c.port,"")),e)}function o(e,t,i=""){var r="";if(e.cssText||e.rules){var n=e.rules;if(n&&!function(e){var t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(h)}(n))for(var a,u=0,p=n.length;u<p&&(a=n[u]);u++)r=o(a,t,r);else(r=(r=t?e.cssText:function(e){return function(e){return e.replace(c.mixinApply,"").replace(c.varApply,"")}(e=s(e))}(e.cssText)).trim())&&(r="  "+r+"\n")}return r&&(e.selector&&(i+=e.selector+" "+l+"\n"),i+=r,e.selector&&(i+=d+"\n\n")),i}function s(e){return e.replace(c.customProp,"").replace(c.mixinProp,"")}var a={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",d="}",c={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},h="--",u="@media",p="@"},,function(e,t,i){"use strict";i.d(t,"g",(function(){return r})),i.d(t,"f",(function(){return n})),i.d(t,"h",(function(){return o})),i.d(t,"a",(function(){return s})),i.d(t,"e",(function(){return a})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return d})),i.d(t,"d",(function(){return c}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,n=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,o=/(--[\w-]+)\s*([:,;)]|$)/gi,s=/(animation\s*:)|(animation-name\s*:)/,a=/@media\s(.*)/,l=/\{[^}]*\}/g,d="(?:^|[^.#[:])",c="($|[.:[\\s>+~])"},,function(e,t,i){"use strict";var r=i(146),n=i(77),o=i(38),s=new r.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){s.processStyles(),Object(n.c)(e,t)},styleElement(e){s.processStyles()},styleDocument(e){s.processStyles(),Object(n.c)(document.body,e)},getComputedStyleValue:(e,t)=>Object(n.b)(e,t),flushCustomStyles(){},nativeCss:o.c,nativeShadow:o.d,cssBuild:o.a,disableRuntime:o.b}),window.ShadyCSS.CustomStyleInterface=s;var a=i(114),l=window.ShadyCSS.CustomStyleInterface;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class d extends HTMLElement{constructor(){super(),this._style=null,l.addCustomStyle(this)}getStyle(){if(this._style)return this._style;var e=this.querySelector("style");if(!e)return null;this._style=e;var t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=Object(a.a)(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",d)},,function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var r=!1;window.addEventListener("keydown",()=>{r=!0},{capture:!0}),window.addEventListener("mousedown",()=>{r=!1},{capture:!0});var n=e=>class extends((e=>class extends e{static get properties(){var e={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(e.tabIndex=e.tabindex),e}})(e)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",e=>{e.composedPath()[0]===this?this.contains(e.relatedTarget)||this._focus():-1===e.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",e=>this._setFocused(!1)),super.ready();var e=e=>{e.composed||e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",e),this.shadowRoot.addEventListener("focusout",e),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&9===e.keyCode)if(e.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{var t=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(t&&parseFloat(t[1])>=63&&parseFloat(t[1])<66&&this.parentNode&&this.nextSibling){var i=document.createElement("input");i.style.position="absolute",i.style.opacity="0",i.tabIndex=this.tabIndex,this.parentNode.insertBefore(i,this.nextSibling),i.focus(),i.addEventListener("focusout",()=>this.parentNode.removeChild(i))}}}),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")})}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&r?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this.focusElement&&!this._isShiftTabbing&&(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0),window.ShadyDOM&&this.setProperties({tabIndex:e,tabindex:e})}click(){this.disabled||super.click()}}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i(83),n=(i(25),function(e){var t;return t="function"==typeof e?e:n.Class(e),customElements.define(t.is,t),t});n.Class=r.a},,function(e,t,i){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/t.a={}},,function(e,t,i){"use strict";i.d(t,"c",(function(){return n})),i.d(t,"b",(function(){return o})),i.d(t,"a",(function(){return s}));var r=i(67);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(e,t){for(var i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function o(e,t){var i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}function s(e){var t=r.f.test(e)||r.g.test(e);return r.f.lastIndex=0,r.g.lastIndex=0,t}},function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return s}));var r=i(28);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(e,t,i,r,n){var o;n&&(o="object"==typeof i&&null!==i)&&(r=e.__dataTemp[t]);var s=r!==i&&(r==r||i==i);return o&&s&&(e.__dataTemp[t]=i),s}var o=Object(r.a)(e=>class extends e{_shouldPropertyChange(e,t,i){return n(this,e,t,i,!0)}}),s=Object(r.a)(e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,i){return n(this,e,t,i,this.mutableData)}});o._mutablePropertyChange=n},,,function(e,t,i){"use strict";i(69),i(87);var r=document.createElement("template");r.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(r.content)},,function(e,t,i){"use strict";i.d(t,"b",(function(){return l})),i.d(t,"a",(function(){return u}));var r=i(105),n=i(21),o={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},s={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},a=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},s);function l(e,t){return h({},Object(r.a)(t),e)}function d(e,t,i,r){for(var n in function(e,t,i){for(var r=e._noAccessors,n=Object.getOwnPropertyNames(e),o=0;o<n.length;o++){var s=n[o];if(!(s in i))if(r)t[s]=e[s];else{var a=Object.getOwnPropertyDescriptor(e,s);a&&(a.configurable=!0,Object.defineProperty(t,s,a))}}}(t,e,r),o)t[n]&&(i[n]=i[n]||[],i[n].push(t[n]))}function c(e,t){for(var i in t){var r=e[i],n=t[i];e[i]=!("value"in n)&&r&&"value"in r?Object.assign({value:r.value},n):n}}function h(e,t,i){var r,o={};class l extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(r)for(var t,i=0;i<r.length;i++)(t=r[i]).properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else super._finalizeClass()}static get properties(){var t={};if(r)for(var i=0;i<r.length;i++)c(t,r[i].properties);return c(t,e.properties),t}static get observers(){var t=[];if(r)for(var i,n=0;n<r.length;n++)(i=r[n]).observers&&(t=t.concat(i.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();var e=o.created;if(e)for(var t=0;t<e.length;t++)e[t].call(this)}_registered(){var e=l.prototype;if(!e.hasOwnProperty("__hasRegisterFinished")){e.__hasRegisterFinished=!0,super._registered(),n.b&&u(e);var t=Object.getPrototypeOf(this),i=o.beforeRegister;if(i)for(var r=0;r<i.length;r++)i[r].call(t);if(i=o.registered)for(var s=0;s<i.length;s++)i[s].call(t)}}_applyListeners(){super._applyListeners();var e=o.listeners;if(e)for(var t=0;t<e.length;t++){var i=e[t];if(i)for(var r in i)this._addMethodEventListenerToNode(this,r,i[r])}}_ensureAttributes(){var e=o.hostAttributes;if(e)for(var t=e.length-1;t>=0;t--){var i=e[t];for(var r in i)this._ensureAttribute(r,i[r])}super._ensureAttributes()}ready(){super.ready();var e=o.ready;if(e)for(var t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();var e=o.attached;if(e)for(var t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();var e=o.detached;if(e)for(var t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,i){super.attributeChanged();var r=o.attributeChanged;if(r)for(var n=0;n<r.length;n++)r[n].call(this,e,t,i)}}if(i){Array.isArray(i)||(i=[i]);var h=t.prototype.behaviors;r=function e(t,i,r){i=i||[];for(var n=t.length-1;n>=0;n--){var o=t[n];o?Array.isArray(o)?e(o,i):i.indexOf(o)<0&&(!r||r.indexOf(o)<0)&&i.unshift(o):console.warn("behavior is null, check for missing or 404 import")}return i}(i,null,h),l.prototype.behaviors=h?h.concat(i):r}var u=t=>{r&&function(e,t,i){for(var r=0;r<t.length;r++)d(e,t[r],i,a)}(t,r,o),d(t,e,o,s)};return n.b||u(l.prototype),l.generatedFrom=e,l}var u=function(e,t){e||console.warn("Polymer.Class requires `info` argument");var i=t?t(Object(r.a)(HTMLElement)):Object(r.a)(HTMLElement);return(i=h(e,i,e.behaviors)).is=i.prototype.is=e.is,i}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return c}));var r=i(13),n=i(30),o=i(63),s=i(127),a=i(15),l=i(9),d=e=>class extends e{static get properties(){return{resizable:{type:Boolean,value:function(){if("vaadin-grid-column-group"!==this.localName){var e=this.parentNode;return e&&"vaadin-grid-column-group"===e.localName&&e.resizable||!1}}},_headerTemplate:{type:Object},_footerTemplate:{type:Object},frozen:{type:Boolean,value:!1},hidden:{type:Boolean},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,headerRenderer:Function,footerRenderer:Function}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*)","_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell)","_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),this._bodyTemplate&&(this._bodyTemplate.templatizer._grid=this._grid),this._headerTemplate&&(this._headerTemplate.templatizer._grid=this._grid),this._footerTemplate&&(this._footerTemplate.templatizer._grid=this._grid),this._templateObserver.flush(),this._bodyTemplate||this._templateObserver.callback(),requestAnimationFrame(()=>{this._allCells.forEach(e=>{e._content.parentNode||this._grid&&this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._findHostGrid()||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}_findHostGrid(){for(var e=this;e&&!/^vaadin.*grid(-pro)?$/.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}constructor(){super(),this._templateObserver=new n.a(this,e=>{this._headerTemplate=this._prepareHeaderTemplate(),this._footerTemplate=this._prepareFooterTemplate(),this._bodyTemplate=this._prepareBodyTemplate()})}_prepareHeaderTemplate(){return this._prepareTemplatizer(this._findTemplate(!0)||null,{})}_prepareFooterTemplate(){return this._prepareTemplatizer(this._findTemplate(!1,!0)||null,{})}_prepareBodyTemplate(){return this._prepareTemplatizer(this._findTemplate()||null)}_prepareTemplatizer(e,t){if(e&&!e.templatizer){var i=new s.a;i._grid=this._grid,i.dataHost=this.dataHost,i._instanceProps=t||i._instanceProps,i.template=e,e.templatizer=i}return e}_renderHeaderAndFooter(){this.headerRenderer&&this._headerCell&&this.__runRenderer(this.headerRenderer,this._headerCell),this.footerRenderer&&this._footerCell&&this.__runRenderer(this.footerRenderer,this._footerCell)}__runRenderer(e,t,i){var r=[t._content,this];i&&i.item&&r.push(i),e.apply(this,r)}__setColumnTemplateOrRenderer(e,t,i){if(e&&t)throw new Error("You should only use either a renderer or a template");i.forEach(i=>{var r=this._grid.__getRowModel(i.parentElement);if(t)i._renderer=t,(r.item||t===this.headerRenderer||t===this.footerRenderer)&&this.__runRenderer(t,i,r);else if(i._template!==e){i._template=e,i._content.innerHTML="",e.templatizer._grid=e.templatizer._grid||this._grid;var n=e.templatizer.createInstance();i._content.appendChild(n.root),i._instance=n,r.item&&i._instance.setProperties(r)}})}_setBodyTemplateOrRenderer(e,t,i,r){(e||t)&&i&&this.__setColumnTemplateOrRenderer(e,t,i)}_setHeaderTemplateOrRenderer(e,t,i){(e||t)&&i&&this.__setColumnTemplateOrRenderer(e,t,[i])}_setFooterTemplateOrRenderer(e,t,i){(e||t)&&i&&(this.__setColumnTemplateOrRenderer(e,t,[i]),this._grid.__updateHeaderFooterRowVisibility(i.parentElement))}_selectFirstTemplate(e=!1,t=!1){return n.a.getFlattenedNodes(this).filter(i=>"template"===i.localName&&i.classList.contains("header")===e&&i.classList.contains("footer")===t)[0]}_findTemplate(e,t){var i=this._selectFirstTemplate(e,t);return i&&this.dataHost&&(i._rootDataHost=this.dataHost._rootDataHost||this.dataHost),i}_flexGrowChanged(e,t,i,r){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(t=>t.style.flexGrow=e)}_orderChanged(e,t,i,r){this._allCells.forEach(t=>t.style.order=e)}_widthChanged(e,t,i,r){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(t=>t.style.width=e),this._grid&&this._grid.__forceReflow&&this._grid.__forceReflow()}_frozenChanged(e,t,i,r){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(t=>this._toggleAttribute("frozen",e,t)),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(t=>this._toggleAttribute("last-frozen",e,t)),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_pathOrHeaderChanged(e,t,i,r,n,o,s,a,l){var d=void 0!==t;if(!s&&!l&&d&&i&&this.__setTextContent(i._content,t),e&&n.value){if(!o&&!a){this.__setColumnTemplateOrRenderer(void 0,(t,i,{item:r})=>this.__setTextContent(t,this.get(e,r)),n.value)}s||l||d||!i||null===t||this.__setTextContent(i._content,this._generateHeader(e))}i&&this._grid.__updateHeaderFooterRowVisibility(i.parentElement)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,e=>e.toUpperCase())}_toggleAttribute(e,t,i){i.hasAttribute(e)===!t&&(t?i.setAttribute(e,""):i.removeAttribute(e))}_reorderStatusChanged(e,t,i,r){this._allCells.forEach(t=>t.setAttribute("reorder-status",e))}_resizableChanged(e,t){void 0!==e&&void 0!==t&&t&&[t].concat(this._emptyCells).forEach(t=>{if(t){var i=t.querySelector('[part~="resize-handle"]');if(i&&t.removeChild(i),e){var r=document.createElement("div");r.setAttribute("part","resize-handle"),t.appendChild(r)}}})}_textAlignChanged(e,t,i,r){var n;void 0!==e&&(-1!==["start","end","center"].indexOf(e)?("ltr"===getComputedStyle(this._grid).direction?"start"===e?n="left":"end"===e&&(n="right"):"start"===e?n="right":"end"===e&&(n="left"),this._allCells.forEach(t=>{t._content.style.textAlign=e,getComputedStyle(t._content).textAlign!==e&&(t._content.style.textAlign=n)})):console.warn('textAlign can only be set as "start", "end" or "center"'))}_hiddenChanged(e,t,i,r){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(!0===e&&this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)}),this._grid._debouncerHiddenChanged=a.a.debounce(this._grid._debouncerHiddenChanged,l.a,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._updateLastFrozen&&this._grid._updateLastFrozen(),this._grid.notifyResize&&this._grid.notifyResize(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}};class c extends(d(Object(o.a)(r.a))){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,path:{type:String},autoWidth:{type:Boolean,value:!1},_bodyTemplate:{type:Object},_cells:Array}}}customElements.define(c.is,c)},,function(e,t,i){"use strict";class r extends HTMLElement{static get version(){return"1.6.0"}}customElements.define("vaadin-lumo-styles",r)},,,function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"a",(function(){return a}));i(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var r={},n=/-[a-z]/g,o=/([A-Z])/g;function s(e){return r[e]||(r[e]=e.indexOf("-")<0?e:e.replace(n,e=>e[1].toUpperCase()))}function a(e){return r[e]||(r[e]=e.replace(o,"-$1").toLowerCase())}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));
/**
@license
Copyright (c) 2020 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class r{static detectScrollType(){var e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);var t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=2,e.scrollLeft<2&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,i){var{scrollLeft:r}=i;if("rtl"!==t||!e)return r;switch(e){case"negative":return i.scrollWidth-i.clientWidth+r;case"reverse":return i.scrollWidth-i.clientWidth-r}return r}static setNormalizedScrollLeft(e,t,i,r){if("rtl"===t&&e)switch(e){case"negative":i.scrollLeft=i.clientWidth-i.scrollWidth+r;break;case"reverse":i.scrollLeft=i.scrollWidth-i.clientWidth-r;break;default:i.scrollLeft=r}else i.scrollLeft=r}}},,function(e,t,i){"use strict";i.d(t,"b",(function(){return d})),i.d(t,"a",(function(){return c}));i(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var r=!1,n=[],o=[];function s(){r=!0,requestAnimationFrame((function(){r=!1,a(n),setTimeout((function(){!function(e){for(var t=0,i=e.length;t<i;t++)l(e.shift())}(o)}))}))}function a(e){for(;e.length;)l(e.shift())}function l(e){var t=e[0],i=e[1],r=e[2];try{i.apply(t,r)}catch(e){setTimeout(()=>{throw e})}}function d(e,t,i){r||s(),n.push([e,t,i])}function c(e,t,i){r||s(),o.push([e,t,i])}},,,function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var r=e=>class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"theme"===e&&this._setTheme(i)}}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return m}));i(25);var r=i(21),n=i(28),o=i(114),s=i(56),a=i(48),l=i(101);var d=[];var c=i(124);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var h=Object(n.a)(e=>{var t=Object(c.a)(e);function i(e){var t=Object.getPrototypeOf(e);return t.prototype instanceof n?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){var t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){var i=e.properties;i&&(t=function(e){var t={};for(var i in e){var r=e[i];t[i]="function"==typeof r?{type:r}:r}return t}(i))}e.__ownProperties=t}return e.__ownProperties}class n extends t{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){t=this.prototype,d.push(t);var e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.attributeNameForProperty(e)):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){var e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){var e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){var e=i(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){var t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n}),u=i(11),p=window.ShadyCSS&&window.ShadyCSS.cssBuild,m=Object(n.a)(e=>{var t=h(Object(l.a)(e));return class extends t{static get polymerElementVersion(){return"3.2.0"}static _finalizeClass(){super._finalizeClass();var e,t=((e=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty("observers",e))?e.observers:null),e.__ownObservers);t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){var e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):r.b||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(var t in e)i=this.prototype,r=t,n=e[t],o=e,n.computed&&(n.readOnly=!0),n.computed&&(i._hasReadOnlyEffect(r)?console.warn(`Cannot redefine computed property '${r}'.`):i._createComputedProperty(r,n.computed,o)),n.readOnly&&!i._hasReadOnlyEffect(r)?i._createReadOnlyProperty(r,!n.computed):!1===n.readOnly&&i._hasReadOnlyEffect(r)&&console.warn(`Cannot make readOnly property '${r}' non-readOnly.`),n.reflectToAttribute&&!i._hasReflectEffect(r)?i._createReflectedProperty(r):!1===n.reflectToAttribute&&i._hasReflectEffect(r)&&console.warn(`Cannot make reflected property '${r}' non-reflected.`),n.notify&&!i._hasNotifyEffect(r)?i._createNotifyingProperty(r):!1===n.notify&&i._hasNotifyEffect(r)&&console.warn(`Cannot make notify property '${r}' non-notify.`),n.observer&&i._createPropertyObserver(r,n.observer,o[n.observer]),i._addPropertyToAttributeMap(r);var i,r,n,o}static createObservers(e,t){for(var i=this.prototype,r=0;r<e.length;r++)i._createMethodObserver(e[r],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){var t=null;if(e&&(!r.f||r.a)&&(t=a.a.import(e,"template"),r.f&&!t))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+e);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){var e=this.importMeta;if(e)this._importPath=Object(s.a)(e.url);else{var t=a.a.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=r.d,this.importPath=this.constructor.importPath;var e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;var t=e._properties;for(var i in t){var r=t[i];"value"in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=r)}}return e.__propertyDefaults}(this.constructor);if(e)for(var t in e){var i=e[t];if(!this.hasOwnProperty(t)){var n="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,n,!0):this[t]=n}}}static _processStyleText(e,t){return Object(s.b)(e,t)}static _finalizeTemplate(e){var t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;var i=this.importPath;!function(e,t,i,r){if(!p){for(var n=t.content.querySelectorAll("style"),s=Object(o.c)(t),a=Object(o.b)(i),l=t.content.firstElementChild,d=0;d<a.length;d++){var c=a[d];c.textContent=e._processStyleText(c.textContent,r),t.content.insertBefore(c,l)}for(var h=0,u=0;u<s.length;u++){var m=s[u],_=n[h];_!==m?(m=m.cloneNode(!0),_.parentNode.insertBefore(m,_)):h++,m.textContent=e._processStyleText(m.textContent,r)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i)}(this,t,e,i?Object(s.c)(i):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){var t=Object(u.a)(this);if(t.attachShadow)return e?(t.shadowRoot||t.attachShadow({mode:"open"}),t.shadowRoot.appendChild(e),r.g&&window.ShadyDOM&&ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Object(s.c)(this.importPath)),Object(s.c)(e,t)}static _parseTemplateContent(e,t,i){return t.dynamicFns=t.dynamicFns||this._properties,super._parseTemplateContent(e,t,i)}static _addTemplatePropertyEffect(e,t,i){return r.b&&!(t in this._properties)&&console.warn(`Property '${t}' used in template but not declared in 'properties'; attribute will not be observed.`),super._addTemplatePropertyEffect(e,t,i)}}})},,function(e,t,i){"use strict";i.d(t,"a",(function(){return G}));i(25);var r=i(11),n=i(28),o=i(17),s=i(90),a=i(123),l=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),d={"dom-if":!0,"dom-repeat":!0};function c(e){var t=e.getAttribute("is");if(t&&d[t]){var i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;)e.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return e}function h(e,t){var i=t.parentInfo&&h(e,t.parentInfo);if(!i)return e;l.currentNode=i;for(var r=l.firstChild(),n=0;r;r=l.nextSibling())if(t.parentIndex===n++)return r}function u(e,t,i,r){r.id&&(t[r.id]=i)}function p(e,t,i){if(i.events&&i.events.length)for(var r,n=0,o=i.events;n<o.length&&(r=o[n]);n++)e._addMethodEventListenerToNode(t,r.name,r.value,e)}function m(e,t,i){i.templateInfo&&(t._templateInfo=i.templateInfo)}var _=Object(n.a)(e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){var i=e._templateInfo={};i.nodeInfoList=[],i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){var r,n=e;return"template"!=n.localName||n.hasAttribute("preserve-content")?"slot"===n.localName&&(t.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(n,t,i)||r,l.currentNode=n,l.firstChild()&&(r=this._parseTemplateChildNodes(n,t,i)||r),n.hasAttributes&&n.hasAttributes()&&(r=this._parseTemplateNodeAttributes(n,t,i)||r),r}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName){l.currentNode=e;for(var r,n=l.firstChild(),o=0;n;n=r){if("template"==n.localName&&(n=c(n)),l.currentNode=n,r=l.nextSibling(),n.nodeType===Node.TEXT_NODE){for(var s=r;s&&s.nodeType===Node.TEXT_NODE;)n.textContent+=s.textContent,r=l.nextSibling(),e.removeChild(s),s=r;if(t.stripWhiteSpace&&!n.textContent.trim()){e.removeChild(n);continue}}var a={parentIndex:o,parentInfo:i};this._parseTemplateNode(n,t,a)&&(a.infoIndex=t.nodeInfoList.push(a)-1),l.currentNode=n,l.parentNode()&&o++}}}static _parseTemplateNestedTemplate(e,t,i){var r=this._parseTemplate(e,t);return(r.content=e.content.ownerDocument.createDocumentFragment()).appendChild(e.content),i.templateInfo=r,!0}static _parseTemplateNodeAttributes(e,t,i){for(var r,n=!1,o=Array.from(e.attributes),s=o.length-1;r=o[s];s--)n=this._parseTemplateNodeAttribute(e,t,i,r.name,r.value)||n;return n}static _parseTemplateNodeAttribute(e,t,i,r,n){return"on-"===r.slice(0,3)?(e.removeAttribute(r),i.events=i.events||[],i.events.push({name:r.slice(3),value:n}),!0):"id"===r&&(i.id=n,!0)}static _contentForTemplate(e){var t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);var t=this.constructor._parseTemplate(e),i=t.nodeInfoList,r=t.content||e.content,n=document.importNode(r,!0);n.__noInsertionPoint=!t.hasInsertionPoint;var o=n.nodeList=new Array(i.length);n.$={};for(var s,a=0,l=i.length;a<l&&(s=i[a]);a++){var d=o[a]=h(n,s);u(0,n.$,d,s),m(0,d,s),p(this,d,s)}return n=n}_addMethodEventListenerToNode(e,t,i,r){var n=function(e,t,i){return e=e._methodHost||e,function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined")}}(r=r||e,0,i);return this._addEventListenerToNode(e,t,n),n}_addEventListenerToNode(e,t,i){e.addEventListener(t,i)}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i)}}),f=i(21),v=0,g={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},b=/[A-Z]/;function y(e,t){var i=e[t];if(i){if(!e.hasOwnProperty(t))for(var r in i=e[t]=Object.create(e[t]))for(var n=i[r],o=i[r]=Array(n.length),s=0;s<n.length;s++)o[s]=n[s]}else i=e[t]={};return i}function A(e,t,i,r,n,o){if(t){var s=!1,a=v++;for(var l in i)w(e,t,a,l,i,r,n,o)&&(s=!0);return s}return!1}function w(e,t,i,r,n,s,a,l){var d=!1,c=t[a?Object(o.g)(r):r];if(c)for(var h,u=0,p=c.length;u<p&&(h=c[u]);u++)h.info&&h.info.lastRun===i||a&&!x(r,h.trigger)||(h.info&&(h.info.lastRun=i),h.fn(e,r,n,s,h.info,a,l),d=!0);return d}function x(e,t){if(t){var i=t.name;return i==e||!(!t.structured||!Object(o.b)(i,e))||!(!t.wildcard||!Object(o.c)(i,e))}return!0}function C(e,t,i,r,n){var o="string"==typeof n.method?e[n.method]:n.method,s=n.property;o?o.call(e,e.__data[s],r[s]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function E(e,t,i){var r=Object(o.g)(t);return r!==t&&(S(e,Object(s.a)(r)+"-changed",i[t],t),!0)}function S(e,t,i,n){var o={value:i,queueProperty:!0};n&&(o.path=n),Object(r.a)(e).dispatchEvent(new CustomEvent(t,{detail:o}))}function O(e,t,i,r,n,s){var a=(s?Object(o.g)(t):t)!=t?t:null,l=a?Object(o.a)(e,a):e.__data[t];a&&void 0===l&&(l=i[t]),S(e,n.eventName,l,a)}function I(e,t,i,r,n){var o=e.__data[t];f.e&&(o=Object(f.e)(o,n.attrName,"attribute",e)),e._propertyToAttribute(t,n.attrName,o)}function T(e,t,i,r,n){var o=M(e,t,i,r,n),s=n.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[s]?e._setPendingProperty(s,o,!0):e[s]=o}function k(e,t,i,r,n,o,a){i.bindings=i.bindings||[];var l={kind:r,target:n,parts:o,literal:a,isCompound:1!==o.length};if(i.bindings.push(l),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(l)){var{event:d,negate:c}=l.parts[0];l.listenerEvent=d||Object(s.a)(n)+"-changed",l.listenerNegate=c}for(var h=t.nodeInfoList.length,u=0;u<l.parts.length;u++){var p=l.parts[u];p.compoundIndex=u,P(e,t,l,p,h)}}function P(e,t,i,r,n){if(!r.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else for(var o=r.dependencies,s={index:n,binding:i,part:r,evaluator:e},a=0;a<o.length;a++){var l=o[a];"string"==typeof l&&((l=H(l)).wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:z,info:s,trigger:l})}}function z(e,t,i,r,n,s,a){var l=a[n.index],d=n.binding,c=n.part;if(s&&c.source&&t.length>c.source.length&&"property"==d.kind&&!d.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[d.target]){var h=i[t];t=Object(o.i)(c.source,d.target,t),l._setPendingPropertyOrPath(t,h,!1,!0)&&e._enqueueClient(l)}else{!function(e,t,i,r,n){n=function(e,t,i,r){if(i.isCompound){var n=e.__dataCompoundStorage[i.target];n[r.compoundIndex]=t,t=n.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,n,i,r),f.e&&(n=Object(f.e)(n,i.target,i.kind,t));if("attribute"==i.kind)e._valueToNodeAttribute(t,n,i.target);else{var o=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[o]?t[g.READ_ONLY]&&t[g.READ_ONLY][o]||t._setPendingProperty(o,n)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,o,n)}}(e,l,d,c,n.evaluator._evaluateBinding(e,c,t,i,r,s))}}function L(e,t){if(t.isCompound){for(var i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,n=new Array(r.length),o=0;o<r.length;o++)n[o]=r[o].literal;var s=t.target;i[s]=n,t.literal&&"property"==t.kind&&(e[s]=t.literal)}}function R(e,t,i){if(i.listenerEvent){var r=i.parts[0];e.addEventListener(i.listenerEvent,(function(e){!function(e,t,i,r,n){var s,a=e.detail,l=a&&a.path;l?(r=Object(o.i)(i,r,l),s=a&&a.value):s=e.currentTarget[i],s=n?!s:s,t[g.READ_ONLY]&&t[g.READ_ONLY][r]||!t._setPendingPropertyOrPath(r,s,!0,Boolean(l))||a&&a.queueProperty||t._invalidateProperties()}(e,t,i.target,r.source,r.negate)}))}}function N(e,t,i,r,n,o){o=t.static||o&&("object"!=typeof o||o[t.methodName]);for(var s,a={methodName:t.methodName,args:t.args,methodInfo:n,dynamicFn:o},l=0;l<t.args.length&&(s=t.args[l]);l++)s.literal||e._addPropertyEffect(s.rootProperty,i,{fn:r,info:a,trigger:s});o&&e._addPropertyEffect(t.methodName,i,{fn:r,info:a})}function M(e,t,i,r,n){var o=e._methodHost||e,s=o[n.methodName];if(s){var a=e._marshalArgs(n.args,t,i);return s.apply(o,a)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}var D=[],F=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function j(e){for(var t="",i=0;i<e.length;i++){t+=e[i].literal||""}return t}function B(e){var t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){var i={methodName:t[1],static:!0,args:D};return t[2].trim()?function(e,t){return t.args=e.map((function(e){var i=H(e);return i.literal||(t.static=!1),i}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),i):i}return null}function H(e){var t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},r=t[0];switch("-"===r&&(r=t[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0}return i.literal||(i.rootProperty=Object(o.g)(t),i.structured=Object(o.d)(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function $(e,t,i){var r=Object(o.a)(e,i);return void 0===r&&(r=t[i]),r}function V(e,t,i,r){e.notifyPath(i+".splices",{indexSplices:r}),e.notifyPath(i+".length",t.length)}function q(e,t,i,r,n,o){V(e,t,i,[{index:r,addedCount:n,removed:o,object:t,type:"splice"}])}var G=Object(n.a)(e=>{var t=_(Object(a.a)(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return g}_initializeProperties(){super._initializeProperties(),W.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){var t=this[g.READ_ONLY];for(var i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i])}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==g.READ_ONLY);var r=y(this,t)[e];r||(r=this[t][e]=[]),r.push(i)}_removePropertyEffect(e,t,i){var r=y(this,t)[e],n=r.indexOf(i);n>=0&&r.splice(n,1)}_hasPropertyEffect(e,t){var i=this[t];return Boolean(i&&i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,g.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,g.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,g.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,g.COMPUTE)}_setPendingPropertyOrPath(e,t,i,r){if(r||Object(o.g)(Array.isArray(e)?e[0]:e)!==e){if(!r){var n=Object(o.a)(this,e);if(!(e=Object(o.h)(this,e,t))||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return function(e,t,i){var r,n=e.__dataLinkedPaths;if(n)for(var s in n){var a=n[s];Object(o.c)(s,t)?(r=Object(o.i)(s,a,t),e._setPendingPropertyOrPath(r,i,!0,!0)):Object(o.c)(a,t)&&(r=Object(o.i)(a,s,t),e._setPendingPropertyOrPath(r,i,!0,!0))}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||(e[t]=i)}_setPendingProperty(e,t,i){var r=this.__dataHasPaths&&Object(o.d)(e),n=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,n[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[g.NOTIFY]&&this[g.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){var e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(var t=0;t<e.length;t++){var i=e[t];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(var i in e)!t&&this[g.READ_ONLY]&&this[g.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,i){var r=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,i,r){var n=e[g.COMPUTE];if(n)for(var o=t;A(e,n,o,i,r);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),o=e.__dataPending,e.__dataPending=null}(this,t,i,r);var n=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,i,r),this._flushClients(),A(this,this[g.REFLECT],t,i,r),A(this,this[g.OBSERVE],t,i,r),n&&function(e,t,i,r,n){var o,s,a=e[g.NOTIFY],l=v++;for(var d in t)t[d]&&(a&&w(e,a,l,d,i,r,n)||n&&E(e,d,i))&&(o=!0);o&&(s=e.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,n,t,i,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,i){this[g.PROPAGATE]&&A(this,this[g.PROPAGATE],e,t,i);for(var r=this.__templateInfo;r;)A(this,r.propertyEffects,e,t,i,r.nodeList),r=r.nextTemplateInfo}linkPaths(e,t){e=Object(o.f)(e),t=Object(o.f)(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=Object(o.f)(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){var i={path:""};V(this,Object(o.a)(this,e,i),i.path,t)}get(e,t){return Object(o.a)(t||this,e)}set(e,t,i){i?Object(o.h)(i,e,t):this[g.READ_ONLY]&&this[g.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){var i={path:""},r=Object(o.a)(this,e,i),n=r.length,s=r.push(...t);return t.length&&q(this,r,i.path,n,t.length,[]),s}pop(e){var t={path:""},i=Object(o.a)(this,e,t),r=Boolean(i.length),n=i.pop();return r&&q(this,i,t.path,i.length,0,[n]),n}splice(e,t,i,...r){var n,s={path:""},a=Object(o.a)(this,e,s);return t<0?t=a.length-Math.floor(-t):t&&(t=Math.floor(t)),n=2===arguments.length?a.splice(t):a.splice(t,i,...r),(r.length||n.length)&&q(this,a,s.path,t,r.length,n),n}shift(e){var t={path:""},i=Object(o.a)(this,e,t),r=Boolean(i.length),n=i.shift();return r&&q(this,i,t.path,0,0,[n]),n}unshift(e,...t){var i={path:""},r=Object(o.a)(this,e,i),n=r.unshift(...t);return t.length&&q(this,r,i.path,0,t.length,[]),n}notifyPath(e,t){var i;if(1==arguments.length){var r={path:""};t=Object(o.a)(this,e,r),i=r.path}else i=Array.isArray(e)?Object(o.f)(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var i;this._addPropertyEffect(e,g.READ_ONLY),t&&(this["_set"+(i=e,i[0].toUpperCase()+i.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,i){var r={property:e,method:t,dynamicFn:Boolean(i)};this._addPropertyEffect(e,g.OBSERVE,{fn:C,info:r,trigger:{name:e}}),i&&this._addPropertyEffect(t,g.OBSERVE,{fn:C,info:r,trigger:{name:t}})}_createMethodObserver(e,t){var i=B(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");N(this,i,g.OBSERVE,M,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,g.NOTIFY,{fn:O,info:{eventName:Object(s.a)(e)+"-changed",property:e}})}_createReflectedProperty(e){var t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,g.REFLECT,{fn:I,info:{attrName:t}})}_createComputedProperty(e,t,i){var r=B(t);if(!r)throw new Error("Malformed computed expression '"+t+"'");N(this,r,g.COMPUTE,T,e,i)}_marshalArgs(e,t,i){for(var r=this.__data,n=[],s=0,a=e.length;s<a;s++){var{name:l,structured:d,wildcard:c,value:h,literal:u}=e[s];if(!u)if(c){var p=Object(o.c)(l,t),m=$(r,i,p?t:l);h={path:p?t:l,value:m,base:p?Object(o.a)(r,l):m}}else h=d?$(r,i,l):r[l];n[s]=h}return n}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i)}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){var i=this.constructor._parseTemplate(e),r=this.__templateInfo==i;if(!r)for(var n in i.propertyEffects)this._createPropertyAccessor(n);if(t&&((i=Object.create(i)).wasPreBound=r,!r&&this.__templateInfo)){var o=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=o.nextTemplateInfo=i,i.previousTemplateInfo=o,i}return this.__templateInfo=i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;var r=e.propertyEffects=e.propertyEffects||{};(r[t]=r[t]||[]).push(i)}_stampTemplate(e){W.beginHosting(this);var t=super._stampTemplate(e);W.endHosting(this);var i=this._bindTemplate(e,!0);if(i.nodeList=t.nodeList,!i.wasPreBound)for(var r=i.childNodes=[],n=t.firstChild;n;n=n.nextSibling)r.push(n);return t.templateInfo=i,function(e,t){var{nodeList:i,nodeInfoList:r}=t;if(r.length)for(var n=0;n<r.length;n++){var o=r[n],s=i[n],a=o.bindings;if(a)for(var l=0;l<a.length;l++){var d=a[l];L(s,d),R(s,e,d)}s.__dataHost=e}}(this,i),this.__dataReady&&A(this,i.propertyEffects,this.__data,null,!1,i.nodeList),t}_removeBoundDom(e){var t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;for(var i=t.childNodes,r=0;r<i.length;r++){var n=i[r];n.parentNode.removeChild(n)}}static _parseTemplateNode(e,t,i){var r=super._parseTemplateNode(e,t,i);if(e.nodeType===Node.TEXT_NODE){var n=this._parseBindings(e.textContent,t);n&&(e.textContent=j(n)||" ",k(this,t,i,"text","textContent",n),r=!0)}return r}static _parseTemplateNodeAttribute(e,t,i,r,n){var o=this._parseBindings(n,t);if(o){var a=r,l="property";b.test(r)?l="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),l="attribute");var d=j(o);return d&&"attribute"==l&&("class"==r&&e.hasAttribute("class")&&(d+=" "+e.getAttribute(r)),e.setAttribute(r,d)),"input"===e.localName&&"value"===a&&e.setAttribute(a,""),e.removeAttribute(a),"property"===l&&(r=Object(s.b)(r)),k(this,t,i,l,r,o,d),!0}return super._parseTemplateNodeAttribute(e,t,i,r,n)}static _parseTemplateNestedTemplate(e,t,i){var r=super._parseTemplateNestedTemplate(e,t,i),n=i.templateInfo.hostProps;for(var o in n){k(this,t,i,"property","_host_"+o,[{mode:"{",source:o,dependencies:[o]}])}return r}static _parseBindings(e,t){for(var i,r=[],n=0;null!==(i=F.exec(e));){i.index>n&&r.push({literal:e.slice(n,i.index)});var o=i[1][0],s=Boolean(i[2]),a=i[3].trim(),l=!1,d="",c=-1;"{"==o&&(c=a.indexOf("::"))>0&&(d=a.substring(c+2),a=a.substring(0,c),l=!0);var h=B(a),u=[];if(h){for(var{args:p,methodName:m}=h,_=0;_<p.length;_++){var f=p[_];f.literal||u.push(f)}var v=t.dynamicFns;(v&&v[m]||h.static)&&(u.push(m),h.dynamicFn=!0)}else u.push(a);r.push({source:a,mode:o,negate:s,customEvent:l,signature:h,dependencies:u,event:d}),n=F.lastIndex}if(n&&n<e.length){var g=e.substring(n);g&&r.push({literal:g})}return r.length?r:null}static _evaluateBinding(e,t,i,r,n,s){var a;return a=t.signature?M(e,i,r,0,t.signature):i!=t.source?Object(o.a)(e,t.source):s&&Object(o.d)(i)?Object(o.a)(e,i):e.__data[i],t.negate&&(a=!a),a}}});var W=new class{constructor(){this.stack=[]}registerHost(e){this.stack.length&&this.stack[this.stack.length-1]._enqueueClient(e)}beginHosting(e){this.stack.push(e)}endHosting(e){var t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));i(34);var r=i(40),n=i(21),o=new Set,s={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(o.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():n.h||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=Object(r.a)(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(o.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?o.delete(this):o.add(this)}}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return V}));var r=i(50),n=i(67),o=i(77),s=(i(65),/;\s*/m),a=/^\s*(initial)|(inherit)\s*$/,l=/\s*!important/;class d{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}var c=null;class h{constructor(){this._currentElement=null,this._measureElement=null,this._map=new d}detectMixin(e){return Object(o.a)(e)}gatherStyles(e){var t=Object(r.g)(e.content);if(t){var i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));var i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){var i=Object(r.m)(e);return this.transformRules(i,t),e.textContent=Object(r.p)(i),i}transformCustomStyle(e){var t=Object(r.m)(e);return Object(r.f)(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=Object(r.p)(t),t}transformRules(e,t){this._currentElement=t,Object(r.f)(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(n.g,(e,i,r,n)=>this._produceCssProperties(e,i,r,n,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){for(var t=e;t.parent;)t=t.parent;var i={},n=!1;return Object(r.f)(t,t=>{(n=n||t===e)||t.selector===e.selector&&Object.assign(i,this._cssTextToMap(t.parsedCssText))}),i}_consumeCssProperties(e,t){for(var i=null;i=n.f.exec(e);){var r=i[0],o=i[1],s=i.index,a=s+r.indexOf("@apply"),l=s+r.length,d=e.slice(0,a),c=e.slice(l),h=t?this._fallbacksFromPreviousRules(t):{};Object.assign(h,this._cssTextToMap(d));var u=this._atApplyToCssProperties(o,h);e=`${d}${u}${c}`,n.f.lastIndex=s+u.length}return e}_atApplyToCssProperties(e,t){e=e.replace(s,"");var i=[],r=this._map.get(e);if(r||(this._map.set(e,{}),r=this._map.get(e)),r){var n,o,a;this._currentElement&&(r.dependants[this._currentElement]=!0);var d=r.properties;for(n in d)o=[n,": var(",e,"_-_",n],(a=t&&t[n])&&o.push(",",a.replace(l,"")),o.push(")"),l.test(d[n])&&o.push(" !important"),i.push(o.join(""))}return i.join("; ")}_replaceInitialOrInherit(e,t){var i=a.exec(t);return i&&(t=i[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){for(var i,r,n,o,s=e.split(";"),a={},l=0;l<s.length;l++)(n=s[l])&&(o=n.split(":")).length>1&&(i=o[0].trim(),r=o.slice(1).join(":"),t&&(r=this._replaceInitialOrInherit(i,r)),a[i]=r);return a}_invalidateMixinEntry(e){if(c)for(var t in e.dependants)t!==this._currentElement&&c(t)}_produceCssProperties(e,t,i,n,o){if(i&&Object(r.l)(i,(e,t)=>{t&&this._map.get(t)&&(n=`@apply ${t};`)}),!n)return e;var s=this._consumeCssProperties(""+n,o),a=e.slice(0,e.indexOf("--")),l=this._cssTextToMap(s,!0),d=l,c=this._map.get(t),h=c&&c.properties;h?d=Object.assign(Object.create(h),l):this._map.set(t,d);var u,p,m=[],_=!1;for(u in d)void 0===(p=l[u])&&(p="initial"),h&&!(u in h)&&(_=!0),m.push(`${t}_-_${u}: ${p}`);return _&&this._invalidateMixinEntry(c),c&&(c.properties=d),i&&(a=`${e};${a}`),`${a}${m.join("; ")};`}}h.prototype.detectMixin=h.prototype.detectMixin,h.prototype.transformStyle=h.prototype.transformStyle,h.prototype.transformCustomStyle=h.prototype.transformCustomStyle,h.prototype.transformRules=h.prototype.transformRules,h.prototype.transformRule=h.prototype.transformRule,h.prototype.transformTemplate=h.prototype.transformTemplate,h.prototype._separator="_-_",Object.defineProperty(h.prototype,"invalidCallback",{get:()=>c,set(e){c=e}});var u=h,p=i(75),m=i(113),_=(i(146),i(38)),f=new u;class v{constructor(){this.customStyleInterface=null,f.invalidCallback=m.a}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{f.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),!Object(r.d)(e)){p.a[t]=e;var i=f.transformTemplate(e,t);e._styleAst=i}}flushCustomStyles(){if(this.ensure(),this.customStyleInterface){var e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(var t=0;t<e.length;t++){var i=e[t],r=this.customStyleInterface.getStyleForCustomStyle(i);r&&f.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}}styleSubtree(e,t){if(this.ensure(),t&&Object(o.c)(e,t),e.shadowRoot){this.styleElement(e);for(var i=e.shadowRoot.children||e.shadowRoot.childNodes,r=0;r<i.length;r++)this.styleSubtree(i[r])}else for(var n=e.children||e.childNodes,s=0;s<n.length;s++)this.styleSubtree(n[s])}styleElement(e){this.ensure();var{is:t}=Object(r.i)(e),i=p.a[t];if((!i||!Object(r.d)(i))&&i&&!m.c(i)){m.d(i)||(this.prepareTemplate(i,t),m.b(i));var n=e.shadowRoot;if(n){var o=n.querySelector("style");o&&(o.__cssRules=i._styleAst,o.textContent=Object(r.p)(i._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){var g=new v,b=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,t,i){g.flushCustomStyles(),g.prepareTemplate(e,t)},prepareTemplateStyles(e,t,i){window.ShadyCSS.prepareTemplate(e,t,i)},prepareTemplateDom(e,t){},styleSubtree(e,t){g.flushCustomStyles(),g.styleSubtree(e,t)},styleElement(e){g.flushCustomStyles(),g.styleElement(e)},styleDocument(e){g.flushCustomStyles(),g.styleDocument(e)},getComputedStyleValue:(e,t)=>Object(o.b)(e,t),flushCustomStyles(){g.flushCustomStyles()},nativeCss:_.c,nativeShadow:_.d,cssBuild:_.a,disableRuntime:_.b},b&&(window.ShadyCSS.CustomStyleInterface=b)}window.ShadyCSS.ApplyShim=f;var y=i(99),A=i(44),w=i(123),x=i(28),C=/:host\(:dir\((ltr|rtl)\)\)/g,E=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,S=/:dir\((?:ltr|rtl)\)/,O=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),I=[],T=null,k="";function P(){k=document.documentElement.getAttribute("dir")}function z(e){e.__autoDirOptOut||e.setAttribute("dir",k)}function L(){P(),k=document.documentElement.getAttribute("dir");for(var e=0;e<I.length;e++)z(I[e])}var R=Object(x.a)(e=>{O||T||(P(),(T=new MutationObserver(L)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));var t=Object(w.a)(e);class i extends t{static _processStyleText(e,t){return e=super._processStyleText(e,t),!O&&S.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){var t=e;return t=(t=t.replace(C,':host([dir="$1"])')).replace(E,':host([dir="$2"]) $1')}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(T&&T.takeRecords().length&&L(),I.push(this),z(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){var e=I.indexOf(this);e>-1&&I.splice(e,1)}}}return i.__activateDir=!1,i});i(94);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function N(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?N():window.addEventListener("DOMContentLoaded",N);var M=i(40),D=i(32),F=i(15),j=i(9),B=i(17),H=i(11),$=window.ShadyCSS,V=Object(x.a)(e=>{var t=R(Object(A.a)(Object(y.a)(e))),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,i,r){t!==i&&(super.attributeChangedCallback(e,t,i,r),this.attributeChanged(e,t,i))}attributeChanged(e,t,i){}_initializeProperties(){var e=Object.getPrototypeOf(this);e.hasOwnProperty("__hasRegisterFinished")||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,i){this._propertyToAttribute(e,t,i)}serializeValueToAttribute(e,t,i){this._valueToNodeAttribute(i||this,e,t)}extend(e,t){if(!e||!t)return e||t;for(var i,r=Object.getOwnPropertyNames(t),n=0;n<r.length&&(i=r[n]);n++){var o=Object.getOwnPropertyDescriptor(t,i);o&&Object.defineProperty(e,i,o)}return e}mixin(e,t){for(var i in t)e[i]=t[i];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){var t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,i){i=i||{},t=null==t?{}:t;var r=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});r.detail=t;var n=i.node||this;return Object(H.a)(n).dispatchEvent(r),r}listen(e,t,i){e=e||this;var r=this.__boundListeners||(this.__boundListeners=new WeakMap),n=r.get(e);n||(n={},r.set(e,n));var o=t+i;n[o]||(n[o]=this._addMethodEventListenerToNode(e,t,i,this))}unlisten(e,t,i){e=e||this;var r=this.__boundListeners&&this.__boundListeners.get(e),n=t+i,o=r&&r[n];o&&(this._removeEventListenerFromNode(e,t,o),r[n]=null)}setScrollDirection(e,t){Object(D.setTouchAction)(t||this,i[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){var e=Object(H.a)(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){var e=Object(M.a)(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(M.a)(this).getEffectiveChildNodes()}queryDistributedElements(e){return Object(M.a)(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){for(var e,t=this.getEffectiveChildNodes(),i=[],r=0;e=t[r];r++)e.nodeType!==Node.COMMENT_NODE&&i.push(e.textContent);return i.join("")}queryEffectiveChildren(e){var t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){var t=this.root.querySelector(e||"slot");return t?Object(M.a)(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&Object(H.a)(this).contains(e)&&Object(H.a)(this).getRootNode()===Object(H.a)(e).getRootNode()}isLocalDescendant(e){return this.root===Object(H.a)(e).getRootNode()}scopeSubtree(e,t){}getComputedStyleValue(e){return $.getComputedStyleValue(this,e)}debounce(e,t,i){return this._debouncers=this._debouncers||{},this._debouncers[e]=F.a.debounce(this._debouncers[e],i>0?j.d.after(i):j.c,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};var t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};var t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};var t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?j.d.run(e.bind(this),t):~j.c.run(e.bind(this))}cancelAsync(e){e<0?j.c.cancel(~e):j.d.cancel(e)}create(e,t){var i=document.createElement(e);if(t)if(i.setProperties)i.setProperties(t);else for(var r in t)i[r]=t[r];return i}elementMatches(e,t){return Object(M.b)(t||this,e)}toggleAttribute(e,t){var i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(t=!i.hasAttribute(e)),t?(Object(H.a)(i).setAttribute(e,""),!0):(Object(H.a)(i).removeAttribute(e),!1)}toggleClass(e,t,i){i=i||this,1==arguments.length&&(t=!i.classList.contains(e)),t?i.classList.add(e):i.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,i,r){r=r||this,this.transform("translate3d("+e+","+t+","+i+")",r)}arrayDelete(e,t){var i;if(Array.isArray(e)){if((i=e.indexOf(t))>=0)return e.splice(i,1)}else if((i=Object(B.a)(this,e).indexOf(t))>=0)return this.splice(e,i,1);return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return r.prototype.is="",r})},,function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var r=i(13),n=i(128),o=i(71),s=i(19),a=i(23),l=i(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(a.a)(Object(n.a)(Object(o.a)(Object(s.a)(r.a))))){static get template(){return l.a`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="helper-text" on-click="focus" id="[[_helperTextId]]">
        <slot name="helper">[[helperText]]</slot>
      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-field"}static get version(){return"2.8.4"}static get properties(){return{list:{type:String},pattern:{type:String},title:{type:String}}}}customElements.define(d.is,d)},,function(e,t,i){"use strict";t.a="/*\n   CSS styling examples for the Vaadin app.\n   Visit https://vaadin.com/docs/flow/theme/theming-overview.html and\n   https://vaadin.com/themes/lumo for more information.\n*/\n\n/* Example: CSS class name to center align the content . */\n.centered-content {\n  margin: 0 auto;\n  max-width: 250px;\n}\n\n"},function(e,t,i){"use strict";t.a="label{\n    font-size: 50px;\n    margin: auto;\n    color: green;\n}\n"},function(e,t,i){"use strict";t.a=".error {\n\tcolor: black;\n\tbackground-color: #ff6666;\n}\n.success {\n    color: black;\n\tbackground-color: #85e085;\n}"},function(e,t,i){"use strict";t.a='/*\n   CSS styling examples for the Vaadin app.\n   Visit https://vaadin.com/docs/flow/theme/theming-overview.html and\n   https://vaadin.com/themes/lumo for more information.\n*/\n\n/* Example: the style is applied only to the textfields which has the `bordered` theme attribute. */\n:host([theme~="bordered"]) [part="input-field"] {\n    box-shadow: inset 0 0 0 1px var(--lumo-contrast-30pct);\n    background-color: var(--lumo-base-color);\n}\n'},function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return d})),i.d(t,"b",(function(){return c}));var r=i(75),n=(i(65),"_applyShimCurrentVersion"),o="_applyShimNextVersion",s=Promise.resolve();function a(e){var t=r.a[e];t&&function(e){e[n]=e[n]||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e[o]=(e[o]||0)+1}(t)}function l(e){return e[n]===e[o]}function d(e){return!l(e)&&e._applyShimValidatingVersion===e[o]}function c(e){e._applyShimValidatingVersion=e[o],e._validating||(e._validating=!0,s.then((function(){e[n]=e[o],e._validating=!1})))}},function(e,t,i){"use strict";i.d(t,"c",(function(){return d})),i.d(t,"b",(function(){return c})),i.d(t,"a",(function(){return u}));var r=i(48),n=i(56);function o(e){return r.a.import(e)}function s(e){var t=e.body?e.body:e,i=Object(n.b)(t.textContent,e.baseURI),r=document.createElement("style");return r.textContent=i,r}function a(e){for(var t=e.trim().split(/\s+/),i=[],r=0;r<t.length;r++)i.push(...l(t[r]));return i}function l(e){var t=o(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){var i=[];i.push(...h(t));var r=t.querySelector("template");r&&i.push(...d(r,t.assetpath)),t._styles=i}return t._styles}function d(e,t){if(!e._styles){for(var i=[],r=e.content.querySelectorAll("style"),o=0;o<r.length;o++){var s=r[o],l=s.getAttribute("include");l&&i.push(...a(l).filter((function(e,t,i){return i.indexOf(e)===t}))),t&&(s.textContent=Object(n.b)(s.textContent,t)),i.push(s)}e._styles=i}return e._styles}function c(e){var t=o(e);return t?h(t):[]}function h(e){for(var t=[],i=e.querySelectorAll("link[rel=import][type~=css]"),r=0;r<i.length;r++){var n=i[r];if(n.import){var o=n.import,a=n.hasAttribute("shady-unscoped");if(a&&!o._unscopedStyle){var l=s(o);l.setAttribute("shady-unscoped",""),o._unscopedStyle=l}else o._style||(o._style=s(o));t.push(a?o._unscopedStyle:o._style)}}return t}function u(e){for(var t=e.trim().split(/\s+/),i="",r=0;r<t.length;r++)i+=p(t[r]);return i}function p(e){var t=o(e);if(t&&void 0===t._cssText){var i=m(t),r=t.querySelector("template");r&&(i+=function(e,t){for(var i="",r=d(e,t),n=0;n<r.length;n++){var o=r[n];o.parentNode&&o.parentNode.removeChild(o),i+=o.textContent}return i}(r,t.assetpath)),t._cssText=i||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function m(e){for(var t="",i=h(e),r=0;r<i.length;r++)t+=i[r].textContent;return t}},,,function(e,t,i){"use strict";i(52),i(58),i(42),i(46),i(61),i(182),i(81),i(137);var r=i(6).a`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="lumo-required-field lumo-field-button">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      :host([has-helper]) [part="helper-text"]::before {
        content: "";
        display: block;
        height: 0.4em;
      }

      [part="helper-text"],
      [part="helper-text"] ::slotted(*) {
        display: block;
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        transition: color 0.2s;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        cursor: inherit;
        min-height: var(--lumo-text-field-size);
        padding: 0 0.25em;
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      }

      [part="value"]:focus,
      :host([focused]) [part="input-field"] ::slotted(input),
      :host([focused]) [part="input-field"] ::slotted(textarea) {
        -webkit-mask-image: none;
        mask-image: none;
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="value"],
        [part="input-field"] ::slotted(input),
        [part="input-field"] ::slotted(textarea),
        [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      [part="value"]::-webkit-input-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]:-ms-input-placeholder {
        color: inherit;
        opacity: 0.5;
      }

      [part="value"]::-moz-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]::placeholder {
        color: inherit;
        transition: opacity 0.175s 0.1s;
        opacity: 0.5;
      }

      [part="input-field"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: text;
        box-sizing: border-box;
      }

      /* Used for hover and activation effects */
      [part="input-field"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        pointer-events: none;
        background-color: var(--lumo-contrast-50pct);
        opacity: 0;
        transition: transform 0.15s, opacity 0.2s;
        transform-origin: 100% 0;
      }

      /* Hover */

      :host(:hover:not([readonly]):not([focused])) [part="label"],
      :host(:hover:not([readonly])) [part="helper-text"],
      :host(:hover:not([readonly])) [part="helper-text"] ::slotted(*) {
        color: var(--lumo-body-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
        opacity: 0.1;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }

        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0;
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0.2;
        }
      }

      /* Trigger when not focusing using the keyboard */
      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
        transform: scaleX(0);
        transition-duration: 0.15s, 1s;
      }

      /* Focus-ring */

      :host([focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Read-only and disabled */
      :host([readonly]) [part="value"]::-webkit-input-placeholder,
      :host([disabled]) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]:-ms-input-placeholder,
      :host([disabled]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::-moz-placeholder,
      :host([disabled]) [part="value"]::-moz-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::placeholder,
      :host([disabled]) [part="value"]::placeholder {
        opacity: 0;
      }

      /* Read-only */

      :host([readonly]) [part="input-field"] {
        color: var(--lumo-secondary-text-color);
        background-color: transparent;
        cursor: default;
      }

      :host([readonly]) [part="input-field"]::after {
        background-color: transparent;
        opacity: 1;
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      /* Disabled style */

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        background-color: var(--lumo-contrast-5pct);
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="helper-text"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(*) {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Invalid style */

      :host([invalid]) [part="input-field"] {
        background-color: var(--lumo-error-color-10pct);
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([invalid][focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--lumo-error-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }

      /* Text align */

      :host([theme~="align-left"]) [part="value"] {
        text-align: left;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-center"]) [part="value"] {
        text-align: center;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) [part="value"] {
        text-align: right;
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-left"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
        }
      }
      /* helper-text position */

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::before {
        display: none;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::after {
        content: "";
        display: block;
        height: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="label"] {
        order: 0;
        padding-bottom: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"] {
        order: 1;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="input-field"] {
        order: 2;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="error-message"] {
        order: 3;
      }

      /* Slotted content */

      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
        color: var(--lumo-secondary-text-color);
        font-weight: 400;
      }

      /* Slotted icons */

      [part="input-field"] ::slotted(iron-icon) {
        color: var(--lumo-contrast-60pct);
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="input-field"]::after {
        transform-origin: 0% 0;
      }

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input),
      :host([dir="rtl"]) [part="input-field"] ::slotted(textarea) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
      }

      :host([dir="rtl"]) [part="value"]:focus,
      :host([focused][dir="rtl"]) [part="input-field"] ::slotted(input),
      :host([focused][dir="rtl"]) [part="input-field"] ::slotted(textarea) {
        -webkit-mask-image: none;
        mask-image: none;
      }

      @-moz-document url-prefix() {
        :host([dir="rtl"]) [part="value"],
        :host([dir="rtl"]) [part="input-field"] ::slotted(input),
        :host([dir="rtl"]) [part="input-field"] ::slotted(textarea),
        :host([dir="rtl"]) [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      :host([theme~="align-left"][dir="rtl"]) [part="value"] {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-center"][dir="rtl"]) [part="value"] {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"][dir="rtl"]) [part="value"] {
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"][dir="rtl"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-left"][dir="rtl"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);i(107)},,function(e,t,i){"use strict";i.d(t,"a",(function(){return _}));var r=i(13),n=i(54),o=i(94),s=i(30),a=i(19),l=i(63),d=Element.prototype,c=d.matches||d.matchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector||d.webkitMatchesSelector;var h=i(6),u=0,p={},m=e=>{var t="vaadin-overlay-content-"+ ++u,i=document.createElement("template"),r=document.createElement("style");r.textContent=":host { display: block; }"+e,i.content.appendChild(r),window.ShadyCSS&&window.ShadyCSS.prepareTemplate(i,t);var n=class extends HTMLElement{static get is(){return t}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.importNode(i.content,!0)))}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}};return customElements.define(n.is,n),p[e]=t,t};
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class _ extends(Object(a.a)(Object(l.a)(r.a))){static get template(){return h.a`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new s.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(this.opened){var e=window.innerHeight,t=window.innerWidth>e,i=document.documentElement.clientHeight;t&&i>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",i-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}}_setTemplateFromNodes(e){this.template=e.filter(e=>e.localName&&"template"===e.localName)[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(this._last){var t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_keydownListener(e){if(this._last)if("Tab"===e.key&&this.focusTrap&&!e.defaultPrevented)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if("Escape"===e.key||"Esc"===e.key){var t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),Object(o.a)(this,()=>{this.focusTrap&&!this.contains(document._activeElement||document.activeElement)&&this._cycleTab(0,0);var e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)}),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){var e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){var i=`__${e}Handler`,r=e=>{e&&e.target!==this||(t(),this.removeEventListener("animationend",r),delete this[i])};this[i]=r,this.addEventListener("animationend",r)}_flushAnimation(e){var t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening","");var e=()=>{document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){if(this._exitModalState(),this.restoreFocusOnClose&&this.__restoreFocusNode){var e=this._getActiveElement();(e===document.body||this._deepContains(e))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}this.setAttribute("closing","");var t=()=>{document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this.removeAttribute("closing")};this._shouldAnimate()?this._enqueueAnimation("closing",t):t()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(e=>e instanceof _&&!e.hasAttribute("closing")).sort((e,t)=>e.__zIndex-t.__zIndex||0)}get _last(){return this===_.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),_.__attachedInstances.forEach(e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);for(var e,t=_.__attachedInstances;(e=t.pop())&&(e===this||(e.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),e.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach(e=>{e.parentNode===this.content&&this.content.removeChild(e)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=Object(n.b)(e,this,{instanceProps:t,forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);var i,r,o=e._templateRoot||(e._templateRoot=e.getRootNode());if(o!==document){var s=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});var a=Array.from(o.querySelectorAll("style")).reduce((e,t)=>e+t.textContent,"");if(s){var l=window.ShadyCSS.ScopingShim._styleInfoForNode(o.host);l&&(a+=l._getStyleRules().parsedCssText,a+="}")}if(a=a.replace(/:host/g,":host-nomatch"))if(s){var d=(r=p[i=a]||m(i),document.createElement(r));d.id="content",d.setAttribute("part","content"),this.$.content.parentNode.replaceChild(d,this.$.content),d.className=this.$.content.className,this._originalContentPart=this.$.content,this.$.content=d}else{var c=document.createElement("style");c.textContent=a,this.$.content.shadowRoot.appendChild(c),this._contentNodes.unshift(c)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,i,r){e!==t?this.template=void 0:i!==r&&(this.renderer=void 0)}render(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_templateOrRendererChanged(e,t,i,r,n,o){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");var s=this._oldOwner!==i||this._oldModel!==r;this._oldModel=r,this._oldOwner=i;var a=this._oldInstanceProps!==n||this._oldTemplate!==e;this._oldInstanceProps=n,this._oldTemplate=e;var l=this._oldRenderer!==t;this._oldRenderer=t;var d=this._oldOpened!==o;if(this._oldOpened=o,e&&a)this._stampOverlayTemplate(e,n);else if(t&&(l||d||s)){if(this.content=this,l)for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild);o&&this.render()}}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return(e=e||this._getFocusableElements()).indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){var i=this._getFocusableElements();void 0===t&&(t=this._focusedIndex(i)),(t+=e)>=i.length?t=0:t<0&&(t=i.length-1),i[t].focus()}_getFocusableElements(){return class{static getTabbableNodes(e){var t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t}static isFocusable(e){return c.call(e,"input, select, textarea, button, object")?c.call(e,":not([disabled])"):c.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")}static isTabbable(e){return this.isFocusable(e)&&c.call(e,':not([tabindex="-1"])')&&this._isVisible(e)}static _normalizedTabIndex(e){if(this.isFocusable(e)){var t=e.getAttribute("tabindex")||0;return Number(t)}return-1}static _collectTabbableNodes(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;var i,r=e,n=this._normalizedTabIndex(r),o=n>0;if(n>=0&&t.push(r),i="slot"===r.localName?r.assignedNodes({flatten:!0}):(r.shadowRoot||r).children)for(var s=0;s<i.length;s++)o=this._collectTabbableNodes(i[s],t)||o;return o}static _isVisible(e){var t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&("hidden"!==(t=window.getComputedStyle(e)).visibility&&"none"!==t.display)}static _sortByTabIndex(e){var t=e.length;if(t<2)return e;var i=Math.ceil(t/2),r=this._sortByTabIndex(e.slice(0,i)),n=this._sortByTabIndex(e.slice(i));return this._mergeSortByTabIndex(r,n)}static _mergeSortByTabIndex(e,t){for(var i=[];e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return i.concat(e,t)}static _hasLowerTabOrder(e,t){var i=Math.max(e.tabIndex,0),r=Math.max(t.tabIndex,0);return 0===i||0===r?r>i:i>r}}.getTabbableNodes(this.$.overlay)}_getActiveElement(){var e=document._activeElement||document.activeElement;for(e&&e!==document.documentElement&&e instanceof Element!=!1||(e=document.body);e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;for(var t=e,i=e.ownerDocument;t&&t!==i&&t!==this;)t=t.parentNode||t.host;return t===this}bringToFront(){var e="",t=_.__attachedInstances.filter(e=>e!==this).pop();t&&(e=t.__zIndex+1);this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(_.is,_)},,function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var r=i(13),n=i(19),o=i(63),s=i(168),a=i(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class l extends(Object(s.a)(Object(n.a)(Object(o.a)(r.a)))){static get template(){return a.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>
    <div part="content">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-item"}static get version(){return"2.3.0"}constructor(){super(),this.value}}customElements.define(l.is,l)},,function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));i(25);for(var r=i(28),n=i(90),o=i(124),s={},a=HTMLElement.prototype;a;){for(var l=Object.getOwnPropertyNames(a),d=0;d<l.length;d++)s[l[d]]=!0;a=Object.getPrototypeOf(a)}var c=Object(r.a)(e=>{var t=Object(o.a)(e);return class extends t{static createPropertiesForAttributes(){for(var e=this.observedAttributes,t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Object(n.b)(e[t]))}static attributeNameForProperty(e){return Object(n.a)(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(var t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){this.hasAttribute(e)||this._valueToNodeAttribute(this,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){var i;switch(t){case Object:try{i=JSON.parse(e)}catch(t){i=e}break;case Array:try{i=JSON.parse(e)}catch(t){i=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+e)}break;case Date:i=isNaN(e)?String(e):Number(e),i=new Date(i);break;default:i=super._deserializeValue(e,t)}return i}_definePropertyAccessor(e,t){!function(e,t){if(!s[t]){var i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})},function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i(25);var r=i(28),n=i(9),o=i(11),s=n.c,a=Object(r.a)(e=>class extends e{static createProperties(e){var t=this.prototype;for(var i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){var t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(var e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){var r=this.__data[e],n=this._shouldPropertyChange(e,t,r);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),n}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,s.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){var e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i))}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,r){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,r)}_attributeToProperty(e,t,i){if(!this.__serializing){var r=this.__dataAttributes,n=r&&r[e]||e;this[n]=this._deserializeValue(t,i||this.constructor.typeForProperty(n))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){var r=this._serializeValue(t);void 0===r?e.removeAttribute(i):("class"!==i&&"name"!==i&&"slot"!==i||(e=Object(o.a)(e)),e.setAttribute(i,r))}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})},function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));i(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(e,t,i){return{index:e,removed:t,addedCount:i}}function n(e,t,i,n,o,a){var l,d=0,c=0,h=Math.min(i-t,a-o);if(0==t&&0==o&&(d=function(e,t,i){for(var r=0;r<i;r++)if(!s(e[r],t[r]))return r;return i}(e,n,h)),i==e.length&&a==n.length&&(c=function(e,t,i){var r=e.length,n=t.length,o=0;for(;o<i&&s(e[--r],t[--n]);)o++;return o}(e,n,h-d)),o+=d,a-=c,(i-=c)-(t+=d)==0&&a-o==0)return[];if(t==i){for(l=r(t,[],0);o<a;)l.removed.push(n[o++]);return[l]}if(o==a)return[r(t,[],i-t)];var u=function(e){for(var t=e.length-1,i=e[0].length-1,r=e[t][i],n=[];t>0||i>0;)if(0!=t)if(0!=i){var o=e[t-1][i-1],s=e[t-1][i],a=e[t][i-1],l=void 0;(l=s<a?s<o?s:o:a<o?a:o)==o?(o==r?n.push(0):(n.push(1),r=o),t--,i--):l==s?(n.push(3),t--,r=s):(n.push(2),i--,r=a)}else n.push(3),t--;else n.push(2),i--;return n.reverse(),n}(function(e,t,i,r,n,o){for(var a=o-n+1,l=i-t+1,d=new Array(a),c=0;c<a;c++)d[c]=new Array(l),d[c][0]=c;for(var h=0;h<l;h++)d[0][h]=h;for(var u=1;u<a;u++)for(var p=1;p<l;p++)if(s(e[t+p-1],r[n+u-1]))d[u][p]=d[u-1][p-1];else{var m=d[u-1][p]+1,_=d[u][p-1]+1;d[u][p]=m<_?m:_}return d}(e,t,i,n,o,a));l=void 0;for(var p=[],m=t,_=o,f=0;f<u.length;f++)switch(u[f]){case 0:l&&(p.push(l),l=void 0),m++,_++;break;case 1:l||(l=r(m,[],0)),l.addedCount++,m++,l.removed.push(n[_]),_++;break;case 2:l||(l=r(m,[],0)),l.addedCount++,m++;break;case 3:l||(l=r(m,[],0)),l.removed.push(n[_]),_++}return l&&p.push(l),p}function o(e,t){return n(e,0,e.length,t,0,t.length)}function s(e,t){return e===t}},function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"a",(function(){return s}));var r=i(15),n=i(9),o=class e{constructor(e,t,i){this.grid=e,this.parentCache=t,this.parentItem=i,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Boolean(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(e=>this.itemCaches[e].isLoading())[0])}getItemForIndex(e){var{cache:t,scaledIndex:i}=this.getCacheAndIndex(e);return t.items[i]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((e,t)=>{var i=this.itemCaches[t];return i.updateSize(),e+i.effectiveSize},0):0}ensureSubCacheForScaledIndex(t){if(!this.itemCaches[t]){var i=new e(this.grid,this,this.items[t]);this.itemCaches[t]=i,this.grid._loadPage(0,i)}}getCacheAndIndex(e){for(var t=e,i=Object.keys(this.itemCaches),r=0;r<i.length;r++){var n=Number(i[r]),o=this.itemCaches[n];if(t<=n)return{cache:this,scaledIndex:t};if(t<=n+o.effectiveSize)return o.getCacheAndIndex(t-n-1);t-=o.effectiveSize}return{cache:this,scaledIndex:t}}},s=e=>class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value:function(){return new o(this)}},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_sizeChanged(size)","_itemIdPathChanged(itemIdPath)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(e){var t=e-this._cache.size;this._cache.size+=t,this._cache.effectiveSize+=t,this._effectiveSize=this._cache.effectiveSize,this._increasePoolIfNeeded(0),this._debounceIncreasePool&&this._debounceIncreasePool.flush()}_getItem(e,t){if(!(e>=this._effectiveSize)){t.index=e;var{cache:i,scaledIndex:r}=this._cache.getCacheAndIndex(e),n=i.items[r];n?(this._toggleAttribute("loading",!1,t),this._updateItem(t,n),this._isExpanded(n)&&i.ensureSubCacheForScaledIndex(r)):(this._toggleAttribute("loading",!0,t),this._loadPage(this._getPageForIndex(r),i))}}_expandedInstanceChangedCallback(e,t){void 0!==e.item&&(t?this.expandItem(e.item):this.collapseItem(e.item))}getItemId(e){return this.itemIdPath?this.get(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(e){this.__cacheExpandedKeys(),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this._assignModels()}_itemIdPathChanged(e){this.__cacheExpandedKeys()}__cacheExpandedKeys(){this.expandedItems&&(this.__expandedKeys=new Set,this.expandedItems.forEach(e=>{this.__expandedKeys.add(this.getItemId(e))}))}expandItem(e){this._isExpanded(e)||this.push("expandedItems",e)}collapseItem(e){this._isExpanded(e)&&this.splice("expandedItems",this._getItemIndexInArray(e,this.expandedItems),1)}_getIndexLevel(e){for(var{cache:t}=this._cache.getCacheAndIndex(e),i=0;t.parentCache;)t=t.parentCache,i++;return i}_canPopulate(){return Boolean(this._hasData&&this._columnTree)}_loadPage(e,t){if(!t.pendingRequests[e]&&this.dataProvider){this._setLoading(!0),t.pendingRequests[e]=!0;var i={page:e,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:t.parentItem};this._debounceIncreasePool&&this._debounceIncreasePool.flush(),this.dataProvider(i,(o,s)=>{void 0!==s?t.size=s:i.parentItem&&(t.size=o.length);var a=Array.from(this.$.items.children).map(e=>e._item);o.forEach((i,r)=>{var n=e*this.pageSize+r;t.items[n]=i,this._isExpanded(i)&&a.indexOf(i)>-1&&t.ensureSubCacheForScaledIndex(n)}),this._hasData=!0,delete t.pendingRequests[e],this._debouncerApplyCachedData=r.a.debounce(this._debouncerApplyCachedData,n.d.after(0),()=>{this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>{this._cache.getItemForIndex(e.index)&&this._getItem(e.index,e)}),this._increasePoolIfNeeded(0),this.__scrollToPendingIndex()}),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this.__itemsReceived()})}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){this._cache=new o(this),Array.from(this.$.items.children).forEach(e=>{Array.from(e.children).forEach(e=>{e._instance&&e._instance._setPendingProperty("item",{},!1)})}),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this._assignModels(),this._effectiveSize&&this._initialPoolCreated||this._loadPage(0,this._cache)}_pageSizeChanged(e,t){void 0!==t&&e!==t&&this.clearCache()}_checkSize(){void 0===this.size&&0===this._effectiveSize&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`’s `callback` call.")}_dataProviderChanged(e,t){void 0!==t&&this.clearCache(),e&&this.items&&this.items.length&&this._scrollToIndex(this._firstVisibleIndex),this._ensureFirstPageLoaded(),this._debouncerCheckSize=r.a.debounce(this._debouncerCheckSize,n.d.after(2e3),this._checkSize.bind(this)),this._scrollHandler()}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){var i=-1;return t.forEach((t,r)=>{this._itemsEqual(t,e)&&(i=r)}),i}scrollToIndex(e){super.scrollToIndex(e),isNaN(e)||!this._cache.isLoading()&&this.clientHeight||(this.__pendingScrollToIndex=e)}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){var e=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex,this.scrollToIndex(e)}}}},function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var r=i(13),n=i(54);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class o extends class extends r.a{}{static get is(){return"vaadin-grid-templatizer"}static get properties(){return{dataHost:Object,template:Object,_templateInstances:{type:Array,value:function(){return[]}},_parentPathValues:{value:function(){return{}}},_grid:Object}}static get observers(){return["_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)"]}constructor(){super(),this._instanceProps={detailsOpened:!0,index:!0,item:!0,selected:!0,expanded:!0,level:!0}}createInstance(){this._ensureTemplatized();var e=new this._TemplateClass({});return this.addInstance(e),e}addInstance(e){-1===this._templateInstances.indexOf(e)&&(this._templateInstances.push(e),requestAnimationFrame(()=>this.notifyPath("_templateInstances.*",this._templateInstances)))}removeInstance(e){var t=this._templateInstances.indexOf(e);this.splice("_templateInstances",t,1)}_ensureTemplatized(){this._TemplateClass||(this._TemplateClass=Object(n.b)(this.template,this,{instanceProps:this._instanceProps,parentModel:!0,forwardHostProp:function(e,t){this._forwardParentProp(e,t),this._templateInstances&&this._templateInstances.forEach(i=>i.notifyPath(e,t))},notifyInstanceProp:function(e,t,i){if("index"!==t&&"item"!==t){var r=`__${t}__`;if(e[r]!==i){e[r]=i;var n=Array.from(this._grid.$.items.children).filter(t=>this._grid._itemsEqual(t._item,e.item))[0];n&&Array.from(n.children).forEach(e=>{e._instance&&(e._instance[r]=i,e._instance.notifyPath(t,i))});if(Array.isArray(this._grid.items)&&0===t.indexOf("item.")){var o=this._grid.items.indexOf(e.item),s=t.slice("item.".length);this._grid.notifyPath(`items.${o}.${s}`,i)}var a=`_${t}InstanceChangedCallback`;this._grid&&this._grid[a]&&this._grid[a](e,i)}}}}))}_forwardParentProp(e,t){this._parentPathValues[e]=t,this._templateInstances.forEach(i=>i.notifyPath(e,t))}_templateInstancesChanged(e,t){var i,r;if("_templateInstances"===e.path)i=0,r=this._templateInstances.length;else{if("_templateInstances.splices"!==e.path)return;i=e.value.index,r=e.value.addedCount}Object.keys(this._parentPathValues||{}).forEach(e=>{for(var t=i;t<i+r;t++)this._templateInstances[t].set(e,this._parentPathValues[e])})}}customElements.define(o.is,o)},function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var r=i(9),n=i(15),o=i(6).a`<dom-module id="vaadin-text-field-shared-styles">
  <template>
    <style>
      :host {
        display: inline-flex;
        outline: none;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
        /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-text-field-container,
      .vaadin-text-area-container {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        max-width: 100%;
        width: var(--vaadin-text-field-default-width, 12em);
      }

      [part="label"]:empty {
        display: none;
      }

      [part="input-field"] {
        display: flex;
        align-items: center;
        flex: auto;
      }

      .vaadin-text-field-container [part="input-field"] {
        flex-grow: 0;
      }

      /* Reset the native input styles */
      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea) {
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: none;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        min-width: 0;
        font: inherit;
        font-size: 1em;
        line-height: normal;
        color: inherit;
        background-color: transparent;
        /* Disable default invalid style in Firefox */
        box-shadow: none;
      }

      [part="input-field"] ::slotted(*) {
        flex: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        flex: auto;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      [part="input-field"] ::slotted(textarea) {
        resize: none;
      }

      [part="value"]::-ms-clear,
      [part="input-field"] ::slotted(input)::-ms-clear {
        display: none;
      }

      [part="clear-button"] {
        cursor: default;
      }

      [part="clear-button"]::before {
        content: "✕";
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);var s={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title","disabled","readonly","required"],accessible:["invalid"]},a={DEFAULT:"default",ACCESSIBLE:"accessible"},l=e=>class extends e{static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},i18n:{type:Object,value:()=>({clear:"Clear"})},label:{type:String,value:"",observer:"_labelChanged"},helperText:{type:String,value:"",observer:"_helperTextChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},hasValue:{type:Boolean,reflectToAttribute:!0},preventInvalidInput:{type:Boolean},_enabledCharPattern:String,_labelId:String,_helperTextId:String,_errorId:String,_inputId:String,_hasSlottedHelper:Boolean}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+s.default.join(", ")+")","_hostAccessiblePropsChanged("+s.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId, helperText, _helperTextId, _hasSlottedHelper)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label, helperText)","__enabledCharPatternChanged(_enabledCharPattern)"]}get focusElement(){if(this.shadowRoot){var e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);return e||this.shadowRoot.querySelector('[part="value"]')}}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_createConstraintsObserver(){this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern)")}_onInput(e){if(this.__preventInput)return e.stopImmediatePropagation(),void(this.__preventInput=!1);if(this.preventInvalidInput){var t=this.inputElement;if(t.value.length>0&&!this.checkValidity())return t.value=this.value||"",this.setAttribute("input-prevented",""),void(this._inputDebouncer=n.a.debounce(this._inputDebouncer,r.d.after(200),()=>{this.removeAttribute("input-prevented")}))}e.__fromClearButton||(this.__userInput=!0),this.value=e.target.value,this.__userInput=!1}_stateChanged(e,t,i,r){!e&&!t&&i&&r?this.$.clearButton.removeAttribute("hidden"):this.$.clearButton.setAttribute("hidden",!0)}_onChange(e){if(!this._valueClearing){var t=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(t)}}_valueChanged(e,t){""===e&&void 0===t||(this.hasValue=""!==e&&null!=e,this.__userInput||(void 0!==e?this.inputElement.value=e:this.value=this.inputElement.value="",this.invalid&&this.validate()))}_labelChanged(e){this._setOrToggleAttribute("has-label",!!e,this)}_helperTextChanged(e){this._setOrToggleAttribute("has-helper",!!e,this)}_errorMessageChanged(e){this._setOrToggleAttribute("has-error-message",!!e,this)}_onHelperSlotChange(){var e=this.shadowRoot.querySelector('[name="helper"]').assignedNodes({flatten:!0});this._hasSlottedHelper=e.filter(e=>3!==e.nodeType).length,this._hasSlottedHelper?this.setAttribute("has-helper","slotted"):""!==this.helperText&&null!==this.helperText||this.removeAttribute("has-helper")}_onSlotChange(){var e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this.value&&(this.inputElement.value=this.value,this.validate()),e&&!this._slottedInput?(this._validateSlottedValue(e),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput=e):!e&&this._slottedInput&&(this._removeInputListeners(this._slottedInput),this._removeIEListeners(this._slottedInput),this._slottedInput=void 0),Object.keys(a).map(e=>a[e]).forEach(e=>this._propagateHostAttributes(s[e].map(e=>this[e]),e))}_hostPropsChanged(...e){this._propagateHostAttributes(e,a.DEFAULT)}_hostAccessiblePropsChanged(...e){this._propagateHostAttributes(e,a.ACCESSIBLE)}_validateSlottedValue(e){e.value!==this.value&&(console.warn("Please define value on the vaadin-text-field component!"),e.value="")}_propagateHostAttributes(e,t){var i=this.inputElement,r=s[t];t===a.ACCESSIBLE?r.forEach((t,r)=>{this._setOrToggleAttribute(t,e[r],i),this._setOrToggleAttribute("aria-"+t,!!e[r]&&"true",i)}):r.forEach((t,r)=>{this._setOrToggleAttribute(t,e[r],i)})}_setOrToggleAttribute(e,t,i){e&&i&&(t?i.setAttribute(e,"boolean"==typeof t?"":t):i.removeAttribute(e))}_constraintsChanged(e,t,i,r){this.invalid&&(e||t||i||r?this.validate():this.invalid=!1)}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength||this.__forceCheckValidity?this.inputElement.checkValidity():!this.invalid}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange),e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange),e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}ready(){super.ready(),this._createConstraintsObserver(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this);var e=this.shadowRoot.querySelector('[part="value"]');this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput&&(this._addIEListeners(this._slottedInput),this._addInputListeners(this._slottedInput)),this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener("slotchange",this._onSlotChange.bind(this)),this._onHelperSlotChange(),this.shadowRoot.querySelector('[name="helper"]').addEventListener("slotchange",this._onHelperSlotChange.bind(this)),window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles(),this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0),this.$.clearButton.addEventListener("mouseleave",()=>this._valueClearing=!1),this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this));var t=l._uniqueId=1+l._uniqueId||0;this._errorId=`${this.constructor.is}-error-${t}`,this._labelId=`${this.constructor.is}-label-${t}`,this._helperTextId=`${this.constructor.is}-helper-${t}`,this._inputId=`${this.constructor.is}-input-${t}`,this.shadowRoot.querySelector('[part="error-message"]').addEventListener("transitionend",()=>{this.__observeOffsetHeight()})}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){this.autoselect&&(this.inputElement.select(),setTimeout(()=>{try{this.inputElement.setSelectionRange(0,9999)}catch(e){}}))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this.clear(),this._valueClearing=!1,navigator.userAgent.match(/Trident/)&&(this.__preventInput=!1);var t=new Event("input",{bubbles:!0,composed:!0});t.__fromClearButton=!0;var i=new Event("change",{bubbles:!this._slottedInput});i.__fromClearButton=!0,this.inputElement.dispatchEvent(t),this.inputElement.dispatchEvent(i)}_onKeyDown(e){if(27===e.keyCode&&this.clearButtonVisible){var t=!!this.value;this.clear(),t&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}this._enabledCharPattern&&!this.__shouldAcceptKey(e)&&e.preventDefault()}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||1!==e.key.length||this.__enabledCharRegExp.test(e.key)}_onPaste(e){if(this._enabledCharPattern){var t=(e.clipboardData||window.clipboardData).getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onDrop(e){if(this._enabledCharPattern){var t=e.dataTransfer.getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onBeforeInput(e){this._enabledCharPattern&&e.data&&!this.__enabledTextRegExp.test(e.data)&&e.preventDefault()}__enabledCharPatternChanged(e){this.__enabledCharRegExp=e&&new RegExp("^"+e+"$"),this.__enabledTextRegExp=e&&new RegExp("^"+e+"*$")}_addIEListeners(e){navigator.userAgent.match(/Trident/)&&(this._shouldPreventInput=()=>{this.__preventInput=!0,requestAnimationFrame(()=>{this.__preventInput=!1})},e.addEventListener("focusin",this._shouldPreventInput),e.addEventListener("focusout",this._shouldPreventInput),this._createPropertyObserver("placeholder",this._shouldPreventInput))}_removeIEListeners(e){navigator.userAgent.match(/Trident/)&&(e.removeEventListener("focusin",this._shouldPreventInput),e.removeEventListener("focusout",this._shouldPreventInput))}_getActiveErrorId(e,t,i,r,n,o){var s=[];(r||o)&&s.push(n),t&&e&&s.push(i),this._setOrToggleAttribute("aria-describedby",s.join(" "),this.focusElement)}_getActiveLabelId(e,t,i){var r=i;e&&(r=`${t} ${i}`),this.focusElement.setAttribute("aria-labelledby",r)}_getErrorMessageAriaHidden(e,t,i){return(!(t&&e?i:void 0)).toString()}_dispatchIronResizeEventIfNeeded(e,t){var i="__previous"+e;void 0!==this[i]&&this[i]!==t&&this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0,composed:!0})),this[i]=t}__observeOffsetHeight(){this.__observeOffsetHeightDebouncer=n.a.debounce(this.__observeOffsetHeightDebouncer,r.a,()=>{this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),window.ShadyCSS&&window.ShadyCSS.nativeCss||!/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(e)||this.updateStyles(),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root){this.root.querySelectorAll("*").forEach(e=>{e.style["-webkit-backface-visibility"]="visible",e.style["-webkit-backface-visibility"]=""})}}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}}},,,,,,,function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var r=i(13),n=i(44),o=i(19),s=i(71),a=i(23),l=i(6),d=i(32);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class c extends(Object(a.a)(Object(s.a)(Object(o.a)(Object(n.a)(r.a))))){static get template(){return l.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.4.0"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners(),window.ShadyDOM&&window.ShadyDOM.flush()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){Object(d.addListener)(this,"down",()=>!this.disabled&&this.setAttribute("active","")),Object(d.addListener)(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>!this.disabled&&[13,32].indexOf(e.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(c.is,c)},,function(e,t,i){"use strict";i(52),i(81),i(58),i(46);var r=document.createElement("template");r.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content)},,function(e,t,i){"use strict";i(194),i(185)},,function(e,t,i){"use strict";i.d(t,"a",(function(){return Z}));var r=i(34),n=i(19),o=i(94),s=i(9),a=i(36),l=i(103),d=i(165),c=i(83),h=i(15),u=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),p=u&&u[1]>=8,m=s.a,_=s.b,f=s.c,v=Object(c.a)({behaviors:[l.a,d.a],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_collection:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedVirtualIndex:-1,_itemsPerRow:1,_rowHeight:0,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return(this.grid?this._physicalRows*this._rowHeight:this._physicalSize)-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var e=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,e-this._physicalCount)},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this.grid&&(e-=e%this._itemsPerRow),this._virtualStartVal=e},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this.grid&&(e-=e%this._itemsPerRow),this._physicalStartVal=e},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(e){this._physicalCountVal=e},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var e=this._firstVisibleIndexVal;if(null==e){var t=this._physicalTop+this._scrollOffset;e=this._iterateItems((function(e,i){return(t+=this._getPhysicalSizeIncrement(e))>this._scrollPosition?this.grid?i-i%this._itemsPerRow:i:this.grid&&this._virtualCount-1===i?i-i%this._itemsPerRow:void 0}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){var e=this._lastVisibleIndexVal;if(null==e){if(this.grid)e=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems((function(i,r){t<this._scrollBottom&&(e=r),t+=this._getPhysicalSizeIncrement(i)}))}this._lastVisibleIndexVal=e}return e},get _scrollOffset(){return this._scrollerPaddingTop},attached:function(){this._debounce("_render",this._render,m),this.listen(this,"iron-resize","_resizeHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler")},updateViewportBoundaries:function(){var e=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=e-this._scrollPosition,i=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;var r=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+r,this._physicalStart=this._physicalStart+r,this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._update()}else if(this._physicalCount>0){var n=this._getReusables(i);i?(this._physicalTop=n.physicalTop,this._virtualStart=this._virtualStart+n.indexes.length,this._physicalStart=this._physicalStart+n.indexes.length):(this._virtualStart=this._virtualStart-n.indexes.length,this._physicalStart=this._physicalStart-n.indexes.length),this._update(n.indexes,i?null:n.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),f)}},_getReusables:function(e){var t,i,r,n=[],o=this._hiddenContentSize*this._ratio,s=this._virtualStart,a=this._virtualEnd,l=this._physicalCount,d=this._physicalTop+this._scrollOffset,c=this._physicalBottom+this._scrollOffset,h=this._scrollTop,u=this._scrollBottom;for(e?(t=this._physicalStart,i=h-d):(t=this._physicalEnd,i=c-u);i-=r=this._getPhysicalSizeIncrement(t),!(n.length>=l||i<=o);)if(e){if(a+n.length+1>=this._virtualCount)break;if(d+r>=h-this._scrollOffset)break;n.push(t),d+=r,t=(t+1)%l}else{if(s-n.length<=0)break;if(d+this._physicalSize-r<=u)break;n.push(t),d-=r,t=0===t?l-1:t-1}return{indexes:n,physicalTop:d-this._scrollOffset}},_update:function(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._manageFocus(),this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){var i=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(i)}this._positionItems(),this._updateScrollerSize()}},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(e){var t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart),i=(t=this._convertIndexToCompleteRow(t))-this._physicalCount,r=Math.round(.5*this._physicalCount);if(!(i<0)){if(i>0){var n=window.performance.now();[].push.apply(this._physicalItems,this._createPool(i));for(var o=0;o<i;o++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+i,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+i),this._update(),this._templateCost=(window.performance.now()-n)/i,r=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===r||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,r)),_):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,r),f))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){var e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart=this._virtualStart+e.indexes.length,this._physicalStart=this._physicalStart+e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_itemsChanged:function(e){"items"===e.path&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._collection=(this.items,null),this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,m))},_iterateItems:function(e,t){var i,r,n,o;if(2===arguments.length&&t){for(o=0;o<t.length;o++)if(i=t[o],r=this._computeVidx(i),null!=(n=e.call(this,i,r)))return n}else{for(i=this._physicalStart,r=this._virtualStart;i<this._physicalCount;i++,r++)if(null!=(n=e.call(this,i,r)))return n;for(i=0;i<this._physicalStart;i++,r++)if(null!=(n=e.call(this,i,r)))return n}},_computeVidx:function(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_updateMetrics:function(e){Object(a.b)();var t=0,i=0,r=this._physicalAverageCount,n=this._physicalAverage;this._iterateItems((function(e,r){i+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(i=1===this._itemsPerRow?i:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-i,this._itemsPerRow=1),this._physicalAverageCount!==r&&(this._physicalAverage=Math.round((n*r+t)/this._physicalAverageCount))},_positionItems:function(){this._adjustScrollPosition();var e=this._physicalTop;this._iterateItems((function(t,i){this.translate3d(0,e+"px",0,this._physicalItems[t]),e+=this._physicalSizes[t]}))},_getPhysicalSizeIncrement:function(e){return this.grid?this._computeVidx(e)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[e]},_adjustScrollPosition:function(){var e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop=this._physicalTop-e;var t=this._scrollTop;!p&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition:function(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(e){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||this.grid&&this.$.items.style.height<this._estScrollHeight)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToIndex:function(e){if(!("number"!=typeof e||e<0||e>this.items.length-1)&&(Object(a.b)(),0!==this._physicalCount)){e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=this.grid?e-2*this._itemsPerRow:e-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,i=this._virtualStart,r=0,n=this._hiddenContentSize;i<e&&r<=n;)r+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,i++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+r),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this.updateViewportBoundaries(),this._isVisible?(this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),m)},_convertIndexToCompleteRow:function(e){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(e/this._itemsPerRow)*this._itemsPerRow:e},_isIndexRendered:function(e){return e>=this._virtualStart&&e<=this._virtualEnd},_getPhysicalIndex:function(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},_clamp:function(e,t,i){return Math.min(i,Math.max(t,e))},_debounce:function(e,t,i){this._debouncers=this._debouncers||{},this._debouncers[e]=h.a.debounce(this._debouncers[e],i,t.bind(this)),Object(h.b)(this._debouncers[e])}});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class g extends v{static get is(){return"vaadin-grid-scroller"}static get properties(){return{size:{type:Number,notify:!0},_vidxOffset:{value:0}}}static get observers(){return["_effectiveSizeChanged(_effectiveSize)"]}connectedCallback(){super.connectedCallback(),this._scrollHandler()}_updateScrollerItem(e,t){}_afterScroll(){}_getRowTarget(){}_createScrollerRows(){}_canPopulate(){}scrollToIndex(e){this._warnPrivateAPIAccess("scrollToIndex"),this._scrollingToIndex=!0,e=Math.min(Math.max(e,0),this._effectiveSize-1),this.$.table.scrollTop=e/this._effectiveSize*(this.$.table.scrollHeight-this.$.table.offsetHeight),this._scrollHandler(),this._accessIronListAPI(()=>this._maxScrollTop)&&this._virtualCount<this._effectiveSize&&this._adjustVirtualIndexOffset(1e6),this._accessIronListAPI(()=>super.scrollToIndex(e-this._vidxOffset)),this._scrollHandler();var t=Array.from(this.$.items.children).filter(t=>t.index===e)[0];if(t){var i=t.getBoundingClientRect().top-this.$.header.getBoundingClientRect().bottom;Math.abs(i)>1&&(this.$.table.scrollTop+=i,this._scrollHandler())}this._scrollingToIndex=!1}_effectiveSizeChanged(e){var t,i=0;if(this._iterateItems((e,r)=>{if(r===this._firstVisibleIndex){var n=this._physicalItems[e];t=n.index,i=n.getBoundingClientRect().top}}),this.items&&e<this.items.length&&(this._scrollTop=0),!Array.isArray(this.items)){var r=this._edge||this._ie?3e4:1e5;this.items={length:Math.min(e,r)}}this._accessIronListAPI(()=>super._itemsChanged({path:"items"})),this._virtualCount=Math.min(this.items.length,e)||0,0===this._scrollTop&&(this._accessIronListAPI(()=>this._scrollToIndex(Math.min(e-1,t))),this._iterateItems((e,r)=>{var n=this._physicalItems[e];if(n.index===t&&(this.$.table.scrollTop+=Math.round(n.getBoundingClientRect().top-i)),n.index===this._focusedItemIndex&&this._itemsFocusable&&this.$.items.contains(this.shadowRoot.activeElement)){var o=Array.from(this._itemsFocusable.parentElement.children).indexOf(this._itemsFocusable);n.children[o].focus()}})),this._assignModels(),requestAnimationFrame(()=>this._update()),this.__updateFooterPositioning(),this._ie&&(this.$.table.style.display="block",setTimeout(()=>{this.$.table.style.display="flex",this._translateStationaryElements()}))}_positionItems(){var e;this._adjustScrollPosition(),isNaN(this._physicalTop)&&(e=!0,this._physicalTop=0);var t=this._physicalTop;this._iterateItems((e,i)=>{this._physicalItems[e].style.transform=`translateY(${t}px)`,t+=this._physicalSizes[e]}),e&&this._scrollToIndex(0)}_increasePoolIfNeeded(e){0===e&&this._scrollingToIndex||!this._canPopulate()||!this._effectiveSize||(this._initialPoolCreated?this._optPhysicalSize!==1/0&&(this._debounceIncreasePool=h.a.debounce(this._debounceIncreasePool,s.a,()=>{this._updateMetrics();var e=this._optPhysicalSize-this._physicalSize,t=Math.ceil(e/this._physicalAverage);this._physicalCount+t>this._effectiveSize&&(t=Math.max(0,this._effectiveSize-this._physicalCount)),this._physicalSize&&t>0&&this._optPhysicalSize!==1/0&&(super._increasePoolIfNeeded(t),this.__reorderChildNodes())})):(this._initialPoolCreated=!0,super._increasePoolIfNeeded(25)))}__reorderChildNodes(){var e=Array.from(this.$.items.childNodes);!!e.reduce((e,t,i,r)=>{if(0===i||r[i-1].index===t.index-1)return e},!0)||e.sort((e,t)=>e.index-t.index).forEach(e=>this.$.items.appendChild(e))}_createPool(e){var t=document.createDocumentFragment(),i=this._createScrollerRows(e);i.forEach(e=>t.appendChild(e)),this._getRowTarget().appendChild(t);var r=this.querySelector("[slot]");if(r){var n=r.getAttribute("slot");r.setAttribute("slot","foo-bar"),r.setAttribute("slot",n)}return Object(o.a)(this,()=>this.notifyResize()),i}_assignModels(e){this._iterateItems((e,t)=>{var i=this._physicalItems[e];this._toggleAttribute("hidden",t>=this._effectiveSize,i),this._updateScrollerItem(i,t+(this._vidxOffset||0))},e)}_scrollHandler(){var e=this.$.table.scrollTop-this._scrollPosition;this._accessIronListAPI(super._scrollHandler);var t=this._vidxOffset;this._accessIronListAPI(()=>this._maxScrollTop)&&this._virtualCount<this._effectiveSize?this._adjustVirtualIndexOffset(e):this._vidxOffset=0,this._vidxOffset!==t&&this._update(),this._afterScroll()}_adjustVirtualIndexOffset(e){if(Math.abs(e)>1e4){if(this._noScale)return void(this._noScale=!1);var t=this.$.table.scrollTop/(this.$.table.scrollHeight-this.$.table.offsetHeight),i=t*this._effectiveSize;this._vidxOffset=Math.round(i-t*this._virtualCount)}else{var r=this._vidxOffset||0;0===this._scrollTop?(this._vidxOffset=0,r!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<1e3&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,100),r!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex+(r-this._vidxOffset)),this._noScale=!0);var n=this._effectiveSize-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=n,r!==this._vidxOffset&&super.scrollToIndex(this._virtualCount)):this.firstVisibleIndex>this._virtualCount-1e3&&this._vidxOffset<n&&(this._vidxOffset+=Math.min(n-this._vidxOffset,100),r!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-r)),this._noScale=!0)}}_accessIronListAPI(e){this._warnPrivateAPIAccessAsyncEnabled=!1;var t=e.apply(this);return this._debouncerWarnPrivateAPIAccess=h.a.debounce(this._debouncerWarnPrivateAPIAccess,s.a,()=>this._warnPrivateAPIAccessAsyncEnabled=!0),t}_debounceRender(e,t){super._debounceRender(()=>this._accessIronListAPI(e),t)}_warnPrivateAPIAccess(e){this._warnPrivateAPIAccessAsyncEnabled&&console.warn(`Accessing private API (${e})!`)}_render(){this._accessIronListAPI(super._render)}_createFocusBackfillItem(){}_multiSelectionChanged(){}clearSelection(){}_itemsChanged(){}_manageFocus(){}_removeFocusedItem(){}get _firstVisibleIndex(){return this._accessIronListAPI(()=>super.firstVisibleIndex)}get _lastVisibleIndex(){return this._accessIronListAPI(()=>super.lastVisibleIndex)}_scrollToIndex(e){this._accessIronListAPI(()=>this.scrollToIndex(e))}get firstVisibleIndex(){return this._warnPrivateAPIAccess("firstVisibleIndex"),super.firstVisibleIndex}set firstVisibleIndex(e){this._warnPrivateAPIAccess("firstVisibleIndex"),super.firstVisibleIndex=e}get lastVisibleIndex(){return this._warnPrivateAPIAccess("lastVisibleIndex"),super.lastVisibleIndex}set lastVisibleIndex(e){this._warnPrivateAPIAccess("lastVisibleIndex"),super.lastVisibleIndex=e}updateViewportBoundaries(){this._warnPrivateAPIAccess("updateViewportBoundaries"),super.updateViewportBoundaries.apply(this,arguments)}_resizeHandler(){super._resizeHandler(),Object(a.b)()}}customElements.define(g.is,g);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var b=e=>class extends e{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(e){return e.filter(e=>e.some(e=>e._headerTemplate||e.headerRenderer||e.path||e.header)).length}_a11yGetFooterRowCount(e){return e.filter(e=>e.some(e=>e._headerTemplate||e.headerRenderer)).length}_a11yUpdateGridSize(e,t){if(void 0!==e&&void 0!==t){var i=t[t.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(t)+this._a11yGetFooterRowCount(t)),this.$.table.setAttribute("aria-colcount",i&&i.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach((e,t)=>e.setAttribute("aria-rowindex",t+1))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach((e,t)=>e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+t+1))}_a11yUpdateRowRowindex(e,t){e.setAttribute("aria-rowindex",t+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",Boolean(t)),Array.from(e.children).forEach(e=>e.setAttribute("aria-selected",Boolean(t)))}_a11yUpdateRowLevel(e,t){e.setAttribute("aria-level",t+1)}_a11yUpdateRowDetailsOpened(e,t){Array.from(e.children).forEach(e=>{"boolean"==typeof t?e.setAttribute("aria-expanded",t):e.hasAttribute("aria-expanded")&&e.removeAttribute("aria-expanded")})}_a11ySetRowDetailsCell(e,t){Array.from(e.children).forEach(e=>{e!==t&&e.setAttribute("aria-controls",t.id)})}_a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{for(var t=e.parentNode;t&&"vaadin-grid-cell-content"!==t.localName;)t=t.parentNode;t&&t.assignedSlot&&t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}},y=i(166),A=e=>class extends e{static get properties(){return{items:Array}}static get observers(){return["_itemsChanged(items, items.*, isAttached)"]}_itemsChanged(e,t,i){if(i){if(!Array.isArray(e))return null==e&&(this.size=0),void(this.dataProvider===this._arrayDataProvider&&(this.dataProvider=void 0));this.size=e.length,this.dataProvider=this.dataProvider||this._arrayDataProvider,this.clearCache(),this._ensureFirstPageLoaded()}}_arrayDataProvider(e,t){var i=(Array.isArray(this.items)?this.items:[]).slice(0);this._filters&&this._checkPaths(this._filters,"filtering",i)&&(i=this._filter(i)),this.size=i.length,e.sortOrders.length&&this._checkPaths(this._sorters,"sorting",i)&&(i=i.sort(this._multiSort.bind(this)));var r=e.page*e.pageSize,n=r+e.pageSize;t(i.slice(r,n),i.length)}_checkPaths(e,t,i){if(!i.length)return!1;var n=!0;for(var o in e){var s=e[o].path;if(s&&-1!==s.indexOf(".")){var a=s.replace(/\.[^\.]*$/,"");void 0===r.a.get(a,i[0])&&(console.warn(`Path "${s}" used for ${t} does not exist in all of the items, ${t} is disabled.`),n=!1)}}return n}_multiSort(e,t){return this._sorters.map(i=>"asc"===i.direction?this._compare(r.a.get(i.path,e),r.a.get(i.path,t)):"desc"===i.direction?this._compare(r.a.get(i.path,t),r.a.get(i.path,e)):0).reduce((e,t)=>e||t,0)}_normalizeEmptyValue(e){return[void 0,null].indexOf(e)>=0?"":isNaN(e)?e.toString():e}_compare(e,t){return(e=this._normalizeEmptyValue(e))<(t=this._normalizeEmptyValue(t))?-1:e>t?1:0}_filter(e){return e.filter((e,t)=>0===this._filters.filter(t=>{var i=this._normalizeEmptyValue(r.a.get(t.path,e)),n=this._normalizeEmptyValue(t.value).toString().toLowerCase();return-1===i.toString().toLowerCase().indexOf(n)}).length)}},w=i(44),x=i(32),C=e=>class extends(Object(w.a)(e)){ready(){super.ready();var e=this.$.scroller;Object(x.addListener)(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",t=>e.hasAttribute("column-resizing")&&t.preventDefault()),e.addEventListener("contextmenu",e=>"resize-handle"==e.target.getAttribute("part")&&e.preventDefault()),e.addEventListener("mousedown",e=>"resize-handle"===e.target.getAttribute("part")&&e.preventDefault())}_onHeaderTrack(e){var t=e.target;if("resize-handle"===t.getAttribute("part")){var i=t.parentElement._column;for(this._toggleAttribute("column-resizing",!0,this.$.scroller);"vaadin-grid-column-group"===i.localName;)i=Array.prototype.slice.call(i._childColumns,0).sort((function(e,t){return e._order-t._order})).filter((function(e){return!e.hidden})).pop();var r=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),n=r.filter(e=>e._column===i)[0];if(n.offsetWidth){var o=window.getComputedStyle(n),s=10+parseInt(o.paddingLeft)+parseInt(o.paddingRight)+parseInt(o.borderLeftWidth)+parseInt(o.borderRightWidth)+parseInt(o.marginLeft)+parseInt(o.marginRight),a=n.offsetWidth+(this.__isRTL?n.getBoundingClientRect().left-e.detail.x:e.detail.x-n.getBoundingClientRect().right);i.width=Math.max(s,a)+"px",i.flexGrow=0}r.sort((function(e,t){return e._column._order-t._column._order})).forEach((function(e,t,i){t<i.indexOf(n)&&(e._column.width=e.offsetWidth+"px",e._column.flexGrow=0)})),"end"===e.detail.state&&(this._toggleAttribute("column-resizing",!1,this.$.scroller),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:i}}))),this._resizeHandler()}}},E=i(126),S=i(30),O=i(13),I=e=>class extends e{ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){for(var t=0;t<e.length;t++)if("vaadin-grid-column-group"===e[t].localName)return!0;return!1}_getChildColumns(e){return S.a.getFlattenedNodes(e).filter(this._isColumnElement)}_flattenColumnGroups(e){return e.map(e=>"vaadin-grid-column-group"===e.localName?this._getChildColumns(e):[e]).reduce((e,t)=>e.concat(t),[])}_getColumnTree(){for(var e=[],t=S.a.getFlattenedNodes(this).filter(this._isColumnElement);e.push(t),this._hasColumnGroups(t);)t=this._flattenColumnGroups(t);return e}_updateColumnTree(){var e=this._getColumnTree();this._arrayEquals(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new S.a(this,e=>{var t=e.addedNodes.filter(e=>"template"===e.localName&&e.classList.contains("row-details"))[0];t&&this._rowDetailsTemplate!==t&&(this._rowDetailsTemplate=t),(e.addedNodes.filter(this._isColumnElement).length>0||e.removedNodes.filter(this._isColumnElement).length>0)&&this._updateColumnTree(),this._debouncerCheckImports=h.a.debounce(this._debouncerCheckImports,s.d.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_arrayEquals(e,t){if(!e||!t||e.length!=t.length)return!1;for(var i=0,r=e.length;i<r;i++)if(e[i]instanceof Array&&t[i]instanceof Array){if(!this._arrayEquals(e[i],t[i]))return!1}else if(e[i]!=t[i])return!1;return!0}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{var t=this.querySelector(e);!t||t instanceof O.a||console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((e,t)=>e._column._order-t._column._order).forEach((e,t,i)=>{this._toggleAttribute("first-column",0===t,e),this._toggleAttribute("last-column",t===i.length-1,e)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}}
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,T=e=>class extends e{getEventContext(e){var t={},i=e.composedPath(),r=i[i.indexOf(this.$.table)-3];return r?(t.section=["body","header","footer","details"].filter(e=>r.getAttribute("part").indexOf(e)>-1)[0],r._column&&(t.column=r._column),"body"!==t.section&&"details"!==t.section||Object.assign(t,this.__getRowModel(r.parentElement)),t):t}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,k=e=>class extends e{static get properties(){return{_filters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){-1===this._filters.indexOf(e.target)&&this._filters.push(e.target),e.stopPropagation(),this.dataProvider&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}},P=i(127),z=e=>class extends e{static get properties(){return{detailsOpenedItems:{type:Array,value:function(){return[]}},_rowDetailsTemplate:Object,rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, _rowDetailsTemplate, rowDetailsRenderer)","_rowDetailsTemplateOrRendererChanged(_rowDetailsTemplate, rowDetailsRenderer)"]}_rowDetailsTemplateOrRendererChanged(e,t){if(e&&t)throw new Error("You should only use either a renderer or a template for row details");if(e||t){if(e&&!e.templatizer){var i=new P.a;i._grid=this,i.dataHost=this.dataHost,i.template=e,e.templatizer=i}this._columnTree&&Array.from(this.$.items.children).forEach(e=>{e.querySelector("[part~=details-cell]")||(this._updateRow(e,this._columnTree[this._columnTree.length-1]),this._a11yUpdateRowDetailsOpened(e,!1)),delete e.querySelector("[part~=details-cell]")._instance}),this.detailsOpenedItems.length&&(Array.from(this.$.items.children).forEach(this._toggleDetailsCell,this),this._update())}}_detailsOpenedItemsChanged(e,t,i){"detailsOpenedItems.length"!==e.path&&e.value&&Array.from(this.$.items.children).forEach(e=>{this._toggleDetailsCell(e,e._item),this._a11yUpdateRowDetailsOpened(e,this._isDetailsOpened(e._item)),this._toggleAttribute("details-opened",this._isDetailsOpened(e._item),e)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),this._toggleAttribute("frozen",!0,e)}_toggleDetailsCell(e,t){var i=e.querySelector('[part~="details-cell"]');if(i){var r=!this._isDetailsOpened(t),n=!!i.hidden!==r;(i._instance||i._renderer)&&i.hidden===r||(i.hidden=r,r?e.style.removeProperty("padding-bottom"):(this.rowDetailsRenderer?(i._renderer=this.rowDetailsRenderer,i._renderer.call(this,i._content,this,{index:e.index,item:t})):this._rowDetailsTemplate&&!i._instance&&(i._instance=this._rowDetailsTemplate.templatizer.createInstance(),i._content.innerHTML="",i._content.appendChild(i._instance.root),this._updateItem(e,t)),Object(a.b)(),e.style.setProperty("padding-bottom",i.offsetHeight+"px"),requestAnimationFrame(()=>this.notifyResize()))),n&&(this._updateMetrics(),this._positionItems())}}_updateDetailsCellHeights(){Array.from(this.$.items.querySelectorAll('[part~="details-cell"]:not([hidden])')).forEach(e=>{e.parentElement.style.setProperty("padding-bottom",e.offsetHeight+"px")})}_isDetailsOpened(e){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(e,this.detailsOpenedItems)}openItemDetails(e){this._isDetailsOpened(e)||this.push("detailsOpenedItems",e)}closeItemDetails(e){this._isDetailsOpened(e)&&this.splice("detailsOpenedItems",this._getItemIndexInArray(e,this.detailsOpenedItems),1)}_detailsOpenedInstanceChangedCallback(e,t){super._detailsOpenedInstanceChangedCallback&&super._detailsOpenedInstanceChangedCallback(e,t),t?this.openItemDetails(e.item):this.closeItemDetails(e.item)}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,L=e=>class extends e{get _timeouts(){return{SCROLLING:500,IGNORE_WHEEL:500}}static get properties(){return{_frozenCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element,_deltaYAcc:{type:Number,value:0},_useSticky:{type:Boolean,value:window.CSS&&window.CSS.supports&&(window.CSS.supports("position","sticky")||window.CSS.supports("position","-webkit-sticky"))}}}static get observers(){return["_scrollViewportHeightUpdated(_viewportHeight)"]}set _scrollTop(e){this.$.table.scrollTop=e}get _scrollTop(){return this.$.table.scrollTop}constructor(){super(),this._scrollLineHeight=this._getScrollLineHeight()}_getScrollLineHeight(){var e=document.createElement("div");e.style.fontSize="initial",e.style.display="none",document.body.appendChild(e);var t=window.getComputedStyle(e).fontSize;return document.body.removeChild(e),t?window.parseInt(t):void 0}_scrollViewportHeightUpdated(e){this._scrollPageHeight=e-this.$.header.clientHeight-this.$.footer.clientHeight-this._scrollLineHeight}ready(){super.ready(),this.$.outerscroller=document.createElement("div"),this.scrollTarget=this.$.table,this.addEventListener("wheel",this._onWheel),this.$.items.addEventListener("focusin",e=>{var t=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[t-1]}),this.$.items.addEventListener("focusout",()=>this._rowWithFocusedElement=void 0),this.scrollTarget.addEventListener("mousedown",()=>this.__mouseDown=!0),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&(this.__pendingReorder=!1,setTimeout(()=>this._reorderRows(),this._timeouts.SCROLLING))})}scrollToIndex(e){this._accessIronListAPI(()=>super.scrollToIndex(e))}_onWheel(e){if(!e.ctrlKey&&!this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY)){var t=this.$.table,i=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE?i*=this._scrollLineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(i*=this._scrollPageHeight),this._wheelAnimationFrame)return this._deltaYAcc+=i,void e.preventDefault();i+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this._debouncerWheelAnimationFrame=h.a.debounce(this._debouncerWheelAnimationFrame,s.a,()=>this._wheelAnimationFrame=!1);var r=Math.abs(e.deltaX)+Math.abs(i);this._canScroll(t,e.deltaX,i)?(e.preventDefault(),t.scrollTop+=i,t.scrollLeft+=e.deltaX,this._scrollHandler(),this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=h.a.debounce(this._debouncerIgnoreNewWheel,s.d.after(this._timeouts.IGNORE_WHEEL),()=>this._ignoreNewWheel=!1)):this._hasResidualMomentum&&r<=this._previousMomentum||this._ignoreNewWheel?e.preventDefault():r>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=r}}_hasScrolledAncestor(e,t,i){return"vaadin-grid-cell-content"!==e.localName&&(!(!this._canScroll(e,t,i)||-1===["auto","scroll"].indexOf(getComputedStyle(e).overflow))||(e!==this&&e.parentElement?this._hasScrolledAncestor(e.parentElement,t,i):void 0))}_canScroll(e,t,i){return i>0&&e.scrollTop<e.scrollHeight-e.offsetHeight||i<0&&e.scrollTop>0||t>0&&e.scrollLeft<e.scrollWidth-e.offsetWidth||t<0&&e.scrollLeft>0}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this._toggleAttribute("scrolling",!0,this.$.scroller))),this._debounceScrolling=h.a.debounce(this._debounceScrolling,s.d.after(this._timeouts.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this._toggleAttribute("scrolling",!1,this.$.scroller),this._reorderRows()})}_afterScroll(){this._translateStationaryElements(),this.hasAttribute("reordering")||this._scheduleScrolling(),this._updateOverflow()}_updateOverflow(){var e="",t=this.$.table;t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),t.scrollTop>0&&(e+=" top"),t.scrollLeft<t.scrollWidth-t.clientWidth&&(e+=" right"),t.scrollLeft>0&&(e+=" left"),this._debounceOverflow=h.a.debounce(this._debounceOverflow,s.a,()=>{var t=e.trim();t.length>0&&this.getAttribute("overflow")!==t?this.setAttribute("overflow",t):0==t.length&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")})}_reorderRows(){if(this.__mouseDown)this.__pendingReorder=!0;else{var e=this.$.items,t=e.querySelectorAll("tr");if(t.length){var i=this._virtualStart+this._vidxOffset,r=this._rowWithFocusedElement||Array.from(t).filter(e=>!e.hidden)[0];if(r){var n=r.index-i,o=Array.from(t).indexOf(r)-n;if(o>0)for(var s=0;s<o;s++)e.appendChild(t[s]);else if(o<0)for(var a=t.length+o;a<t.length;a++)e.insertBefore(t[a],t[0]);if(this._safari){var{transform:l}=this.$.header.style;this.$.header.style.transform="",setTimeout(()=>this.$.header.style.transform=l)}}}}}_frozenCellsChanged(){this._debouncerCacheElements=h.a.debounce(this._debouncerCacheElements,s.c,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach((function(e){e.style.transform=""})),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._updateScrollerMeasurements(),this._translateStationaryElements()}),this._updateLastFrozen()}_updateScrollerMeasurements(){this._frozenCells.length>0&&this.__isRTL&&(this.__scrollerMetrics={scrollWidth:this.$.table.scrollWidth,clientWidth:this.$.table.clientWidth})}_updateLastFrozen(){if(this._columnTree){var e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((e,t)=>e._order-t._order);var t=e.reduce((e,t,i)=>(t._lastFrozen=!1,t.frozen&&!t.hidden?i:e),void 0);void 0!==t&&(e[t]._lastFrozen=!0)}}_translateStationaryElements(){var e=Math.max(0,this._scrollLeft),t=Math.max(0,this._scrollTop),i=0,r=0,n=0;if(this._useSticky||(i=e,r=t,n=this.$.table.clientHeight-this.$.footer.offsetHeight-this.$.footer.offsetTop),this.$.header.style.transform=this._getTranslate(-e+i,r),this.$.footer.style.transform=this._getTranslate(-e+i,r+n),this.$.items.style.transform=this._getTranslate(-e+i,0),this._frozenCells.length>0)for(var o=this.__isRTL?this.__getNormalizedScrollLeft(this.$.table)+this.__scrollerMetrics.clientWidth-this.__scrollerMetrics.scrollWidth:this._scrollLeft,s=this._getTranslate(o,0),a=0;a<this._frozenCells.length;a++)this._frozenCells[a].style.transform=s}_getTranslate(e,t){return`translate(${e}px, ${t}px)`}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,R=e=>class extends e{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_selectedItemsChanged(selectedItems.*)"]}_isSelected(e){return this.selectedItems&&this._getItemIndexInArray(e,this.selectedItems)>-1}selectItem(e){this._isSelected(e)||this.push("selectedItems",e)}deselectItem(e){var t=this._getItemIndexInArray(e,this.selectedItems);t>-1&&this.splice("selectedItems",t,1)}_toggleItem(e){-1===this._getItemIndexInArray(e,this.selectedItems)?this.selectItem(e):this.deselectItem(e)}_selectedItemsChanged(e){!this.$.items.children.length||"selectedItems"!==e.path&&"selectedItems.splices"!==e.path||Array.from(this.$.items.children).forEach(e=>{this._updateItem(e,e._item)})}_selectedInstanceChangedCallback(e,t){super._selectedInstanceChangedCallback&&super._selectedInstanceChangedCallback(e,t),t?this.selectItem(e.item):this.deselectItem(e.item)}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,N=e=>class extends e{static get properties(){return{multiSort:{type:Boolean,value:!1},_sorters:{type:Array,value:function(){return[]}},_previousSorters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged),window.ShadyDOM&&s.c.run(()=>{var e=this.querySelectorAll("vaadin-grid-sorter");Array.from(e).forEach(e=>{e instanceof O.a&&e.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))})})}_onSorterChanged(e){var t=e.target;this._removeArrayItem(this._sorters,t),t._order=null,this.multiSort?(t.direction&&this._sorters.unshift(t),this._sorters.forEach((e,t)=>e._order=this._sorters.length>1?t:null,this)):t.direction&&(this._sorters.forEach(e=>{e._order=null,e.direction=null}),this._sorters=[t]),e.stopPropagation(),this.dataProvider&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(e=>({path:e.path,direction:e.direction}))}_removeArrayItem(e,t){var i=e.indexOf(t);i>-1&&e.splice(i,1)}}
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,M=e=>class extends e{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(e){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>this._generateCellClassNames(e,this.__getRowModel(e)))}_generateCellClassNames(e,t){Array.from(e.children).forEach(e=>{if(e.__generatedClasses&&e.__generatedClasses.forEach(t=>e.classList.remove(t)),this.cellClassNameGenerator){var i=this.cellClassNameGenerator(e._column,t);e.__generatedClasses=i&&i.split(" ").filter(e=>e.length>0),e.__generatedClasses&&e.__generatedClasses.forEach(t=>e.classList.add(t))}})}}
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,D="between",F="on-top-or-between",j="on-grid",B="on-top",H="above",$="below",V="empty",q=e=>class extends e{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}_onDragStart(e){if(this.rowsDraggable){var t=e.target;if("vaadin-grid-cell-content"===t.localName&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this._toggleAttribute("dragging-rows",!0,this),this._safari){var i=t.style.transform;t.style.top=/translateY\((.*)\)/.exec(i)[1],t.style.transform="none",requestAnimationFrame(()=>{t.style.top="",t.style.transform=i})}var r=t.getBoundingClientRect();window.ShadyDOM||(this._ios?e.dataTransfer.setDragImage(t):e.dataTransfer.setDragImage(t,e.clientX-r.left,e.clientY-r.top));var n=[t];this._isSelected(t._item)&&(n=this.__getViewportRows().filter(e=>this._isSelected(e._item)).filter(e=>!this.dragFilter||this.dragFilter(this.__getRowModel(e)))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(n)),t.setAttribute("dragstart",n.length>1?n.length:""),this.updateStyles({"--_grid-drag-start-x":e.clientX-r.left+20+"px","--_grid-drag-start-y":e.clientY-r.top+10+"px"}),requestAnimationFrame(()=>{t.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})});var o=new CustomEvent("grid-dragstart",{detail:{draggedItems:n.map(e=>e._item),setDragData:(t,i)=>e.dataTransfer.setData(t,i),setDraggedItemsCount:e=>t.setAttribute("dragstart",e)}});o.originalEvent=e,this.dispatchEvent(o)}}_onDragEnd(e){this._toggleAttribute("dragging-rows",!1,this),e.stopPropagation();var t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY))return void this._clearDragStyles();var t=e.composedPath().filter(e=>"tr"===e.localName)[0];if(this._effectiveSize&&this.dropMode!==j)if(t&&t.parentNode===this.$.items){var i=t.getBoundingClientRect();if(this._dropLocation=B,this.dropMode===D){var r=e.clientY-i.top<i.bottom-e.clientY;this._dropLocation=r?H:$}else this.dropMode===F&&(e.clientY-i.top<i.height/3?this._dropLocation=H:e.clientY-i.top>i.height/3*2&&(this._dropLocation=$))}else{if(t)return;if(this.dropMode!==D&&this.dropMode!==F)return;t=Array.from(this.$.items.children).filter(e=>!e.hidden).pop(),this._dropLocation=$}else this._dropLocation=V;if(t&&t.hasAttribute("drop-disabled"))return void(this._dropLocation=void 0);e.stopPropagation(),e.preventDefault(),this._dropLocation===V?this._toggleAttribute("dragover",!0,this):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&t.setAttribute("dragover",this._dropLocation)):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;var t=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top,r=t-e+this.__dndAutoScrollThreshold,n=e-i+this.__dndAutoScrollThreshold,o=0;if(n>0?o=2*n:r>0&&(o=2*-r),o){var s=this.$.table.scrollTop;if(this.$.table.scrollTop+=o,s!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>this.__dndAutoScrolling=!1,20),this._scrollHandler(),!0}}__getViewportRows(){var e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(i=>{var r=i.getBoundingClientRect();return r.bottom>e&&r.top<t})}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach(e=>e.removeAttribute("dragover"))}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();var t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(t=>({type:t,data:e.dataTransfer.getData(t)}));this._clearDragStyles();var i=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});i.originalEvent=e,this.dispatchEvent(i)}}__formatDefaultTransferData(e){return e.map(e=>Array.from(e.children).filter(e=>!e.hidden&&-1===e.getAttribute("part").indexOf("details-cell")).sort((e,t)=>e._column._order>t._column._order?1:-1).map(e=>e._content.textContent.trim()).filter(e=>e).join("\t")).join("\n")}_dragDropAccessChanged(e,t,i,r){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>{this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,t){var i=!this.rowsDraggable||this.dragFilter&&!this.dragFilter(t),r=!this.dropMode||this.dropFilter&&!this.dropFilter(t);(window.ShadyDOM?[e]:Array.from(e.children).map(e=>e._content)).forEach(e=>{i?e.removeAttribute("draggable"):e.setAttribute("draggable",!0)}),this._toggleAttribute("drag-disabled",i,e),this._toggleAttribute("drop-disabled",r,e)}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,G=e=>class extends e{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number}}ready(){super.ready(),this._ios||this._android||(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onCellFocusIn.bind(this)),this.$.table.addEventListener("focusout",this._onCellFocusOut.bind(this)),this.addEventListener("mousedown",()=>{this._toggleAttribute("navigating",!1,this),this._isMousedown=!0}),this.addEventListener("mouseup",()=>this._isMousedown=!1))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&e.setAttribute("tabindex","0")}_onKeyDown(e){var t,i=e.key;switch("Up"!==i&&"Down"!==i&&"Left"!==i&&"Right"!==i||(i="Arrow"+i),"Esc"===i&&(i="Escape"),"Spacebar"===i&&(i=" "),i){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":t="Navigation";break;case"Enter":case"Escape":case"F2":t="Interaction";break;case"Tab":t="Tab";break;case" ":t="Space"}this._detectInteracting(e),this.hasAttribute("interacting")&&"Interaction"!==t&&(t=void 0),t&&this[`_on${t}KeyDown`](e,i)}_ensureScrolledToIndex(e){Array.from(this.$.items.children).filter(t=>t.index===e)[0]||this._scrollToIndex(e)}_onNavigationKeyDown(e,t){function i(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}this._scrollHandler(),e.preventDefault();var r=this._lastVisibleIndex-this._firstVisibleIndex-1,n=0,o=0;switch(t){case"ArrowRight":n=this.__isRTL?-1:1;break;case"ArrowLeft":n=this.__isRTL?1:-1;break;case"Home":n=-1/0,e.ctrlKey&&(o=-1/0);break;case"End":n=1/0,e.ctrlKey&&(o=1/0);break;case"ArrowDown":o=1;break;case"ArrowUp":o=-1;break;case"PageDown":o=r;break;case"PageUp":o=-r}var s=e.composedPath()[0],a=i(s),l=this._elementMatches(s,'[part~="details-cell"]'),d=s.parentNode,c=d.parentNode,h=(c===this.$.items?this._effectiveSize:c.children.length)-1,u=c===this.$.items?void 0!==this._focusedItemIndex?this._focusedItemIndex:d.index:i(d),p=Math.max(0,Math.min(u+o,h)),m=!1;if(c===this.$.items){var _=d._item,f=this._cache.getItemForIndex(p);(m=l?0===o:1===o&&this._isDetailsOpened(_)||-1===o&&p!==u&&this._isDetailsOpened(f))!==l&&(1===o&&m||-1===o&&!m)&&(p=u)}if(c!==this.$.items)if(p>u)for(;p<h&&c.children[p].hidden;)p++;else if(p<u)for(;p>0&&c.children[p].hidden;)p--;void 0===this._focusedColumnOrder&&(this._focusedColumnOrder=l?0:this._getColumns(c,u).filter(e=>!e.hidden)[a]._order);var v=this._getColumns(c,p).filter(e=>!e.hidden),g=v.map(e=>e._order).sort((e,t)=>e-t),b=g.length-1,y=g.indexOf(g.slice(0).sort((e,t)=>Math.abs(e-this._focusedColumnOrder)-Math.abs(t-this._focusedColumnOrder))[0]),A=0===o&&l?y:Math.max(0,Math.min(y+n,b));A!==y&&(this._focusedColumnOrder=void 0),c===this.$.items&&this._ensureScrolledToIndex(p),this._toggleAttribute("navigating",!0,this);var w=v.reduce((e,t,i)=>(e[t._order]=i,e),{})[g[A]],x=c===this.$.items?Array.from(c.children).filter(e=>e.index===p)[0]:c.children[p];if(x){var C=m?Array.from(x.children).filter(e=>this._elementMatches(e,'[part~="details-cell"]'))[0]:x.children[w];if(this._scrollHorizontallyToCell(C),c===this.$.items&&(this._focusedItemIndex=p),c===this.$.items){var E=C.getBoundingClientRect(),S=this.$.footer.getBoundingClientRect().top,O=this.$.header.getBoundingClientRect().bottom;E.bottom>S?(this.$.table.scrollTop+=E.bottom-S,this._scrollHandler()):E.top<O&&(this.$.table.scrollTop-=O-E.top,this._scrollHandler())}C.focus()}}_parseEventPath(e){var t=e.indexOf(this.$.table);return{rowGroup:e[t-1],row:e[t-2],cell:e[t-3]}}_onInteractionKeyDown(e,t){var i,r=e.composedPath()[0],n="input"===r.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(r.type);switch(t){case"Enter":i=!this.hasAttribute("interacting")||!n;break;case"Escape":i=!1;break;case"F2":i=!this.hasAttribute("interacting")}var{cell:o}=this._parseEventPath(e.composedPath());if(this.hasAttribute("interacting")!==i)if(i){var s=o._content.querySelector("[focus-target]")||o._content.firstElementChild;s&&(e.preventDefault(),s.focus(),this._toggleAttribute("interacting",!0,this),this._toggleAttribute("navigating",!1,this))}else e.preventDefault(),this._focusedColumnOrder=void 0,o.focus(),this._toggleAttribute("interacting",!1,this),this._toggleAttribute("navigating",!0,this)}_predictFocusStepTarget(e,t){var i=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit],r=i.indexOf(e);for(r+=t;r>=0&&r<=i.length-1&&(!i[r]||i[r].parentNode.hidden);)r+=t;return i[r]}_onTabKeyDown(e){var t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(t===this.$.table)this.$.table.focus();else if(t===this.$.focusexit)this.$.focusexit.focus();else if(t===this._itemsFocusable){var i=t,r=this._itemsFocusable.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),r.index!==this._focusedItemIndex){var n=Array.from(r.children).indexOf(this._itemsFocusable),o=Array.from(this.$.items.children).filter(e=>e.index===this._focusedItemIndex)[0];o&&(i=o.children[n])}e.preventDefault(),i.focus()}else e.preventDefault(),t.focus();this._toggleAttribute("navigating",!0,this)}_onSpaceKeyDown(e){e.preventDefault();var t=e.composedPath()[0];t._content&&t._content.firstElementChild||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(t.parentElement)}}))}_onKeyUp(e){if(/^( |SpaceBar)$/.test(e.key)){e.preventDefault();var t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){var i=this.hasAttribute("navigating");t._content.firstElementChild.click(),this._toggleAttribute("navigating",i,this)}}}_onFocusIn(e){this._isMousedown||this._toggleAttribute("navigating",!0,this);var t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._toggleAttribute("interacting",!1,this)):this._detectInteracting(e)}_onFocusOut(e){this._toggleAttribute("navigating",!1,this),this._detectInteracting(e)}_onCellFocusIn(e){if(this._detectInteracting(e),3===e.composedPath().indexOf(this.$.table)){var t=e.composedPath()[0];this._activeRowGroup=t.parentNode.parentNode,this._activeRowGroup===this.$.header?this._headerFocusable=t:this._activeRowGroup===this.$.items?this._itemsFocusable=t:this._activeRowGroup===this.$.footer&&(this._footerFocusable=t),t._content.dispatchEvent(new CustomEvent("cell-focusin",{bubbles:!1}))}this._detectFocusedItemIndex(e)}_onCellFocusOut(e){3===e.composedPath().indexOf(this.$.table)&&e.composedPath()[0]._content.dispatchEvent(new CustomEvent("cell-focusout",{bubbles:!1}))}_detectInteracting(e){this._toggleAttribute("interacting",e.composedPath().some(e=>"vaadin-grid-cell-content"===e.localName),this)}_detectFocusedItemIndex(e){var{rowGroup:t,row:i}=this._parseEventPath(e.composedPath());t===this.$.items&&(this._focusedItemIndex=i.index)}_preventScrollerRotatingCellFocus(e,t){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this._toggleAttribute("navigating",!1,this)),t===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this._toggleAttribute("navigating",!0,this))}_getColumns(e,t){var i=this._columnTree.length-1;return e===this.$.header?i=t:e===this.$.footer&&(i=this._columnTree.length-1-t),this._columnTree[i]}_resetKeyboardNavigation(){if(this.$.header.firstElementChild&&(this._headerFocusable=Array.from(this.$.header.firstElementChild.children).filter(e=>!e.hidden)[0]),this.$.items.firstElementChild){var e=this._iterateItems((e,t)=>{if(this._firstVisibleIndex===t)return this.$.items.children[e]});e&&(this._itemsFocusable=Array.from(e.children).filter(e=>!e.hidden)[0])}this.$.footer.firstElementChild&&(this._footerFocusable=Array.from(this.$.footer.firstElementChild.children).filter(e=>!e.hidden)[0])}_scrollHorizontallyToCell(e){if(!e.hasAttribute("frozen")&&!this._elementMatches(e,'[part~="details-cell"]')){for(var t=e.getBoundingClientRect(),i=e.parentNode,r=Array.from(i.children).indexOf(e),n=this.$.table.getBoundingClientRect(),o=n.left,s=n.right,a=r-1;a>=0;a--){var l=i.children[a];if(!l.hasAttribute("hidden")&&!this._elementMatches(l,'[part~="details-cell"]')&&l.hasAttribute("frozen")){o=l.getBoundingClientRect().right;break}}for(var d=r+1;d<i.children.length;d++){var c=i.children[d];if(!c.hasAttribute("hidden")&&!this._elementMatches(c,'[part~="details-cell"]')&&c.hasAttribute("frozen")){s=c.getBoundingClientRect().left;break}}t.left<o&&(this.$.table.scrollLeft+=Math.round(t.left-o)),t.right>s&&(this.$.table.scrollLeft+=Math.round(t.right-s))}}_elementMatches(e,t){return e.matches?e.matches(t):-1!==Array.from(e.parentNode.querySelectorAll(t)).indexOf(e)}},W=i(40),Y=i(21),U=e=>class extends(Object(w.a)(e)){static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree, _columnTree.*)"]}ready(){super.ready(),Object(x.addListener)(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&e.preventDefault()}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if("start"===e.detail.state){var t=e.composedPath(),i=t[t.indexOf(this.$.header)-2];if(!i||!i._content)return;var r=this.getRootNode().activeElement;if(i._content.contains(this.getRootNode().activeElement)&&(!this._ie||!this._isFocusable(r)))return;if(this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else"track"===e.detail.state?this._onTrack(e):"end"===e.detail.state&&this._onTrackEnd(e)}_onTrackStart(e){if(this.columnReorderingAllowed){var t=e.path||Object(W.a)(e).path;if(!t||!t.filter(e=>e.hasAttribute&&e.hasAttribute("draggable"))[0]){var i=this._cellFromPoint(e.detail.x,e.detail.y);if(i&&-1!==i.getAttribute("part").indexOf("header-cell")){for(this._toggleAttribute("reordering",!0,this),this._draggedColumn=i._column;1===this._draggedColumn.parentElement.childElementCount;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(i),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}}}_onTrack(e){if(this._draggedColumn){var t=this._cellFromPoint(e.detail.x,e.detail.y);if(t){var i=this._getTargetColumn(t,this._draggedColumn);this._isSwapAllowed(this._draggedColumn,i)&&this._isSwappableByPosition(i,e.detail.x)&&this._swapColumnOrders(this._draggedColumn,i),this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}}}_onTrackEnd(){this._draggedColumn&&(this._toggleAttribute("reordering",!1,this),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(){return this._columnTree.slice(0).pop().filter(e=>!e.hidden).sort((e,t)=>e._order-t._order)}_cellFromPoint(e,t){var i;if(e=e||0,t=t||0,this._draggedColumn||this._toggleAttribute("no-content-pointer-events",!0,this.$.scroller),Y.h?i=this.shadowRoot.elementFromPoint(e,t):"vaadin-grid-cell-content"===(i=document.elementFromPoint(e,t)).localName&&(i=i.assignedSlot.parentNode),this._toggleAttribute("no-content-pointer-events",!1,this.$.scroller),i&&i._column)return i}_updateGhostPosition(e,t){var i=this._reorderGhost.getBoundingClientRect(),r=e-i.width/2,n=t-i.height/2,o=parseInt(this._reorderGhost._left||0),s=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=o-(i.left-r),this._reorderGhost._top=s-(i.top-n),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_getInnerText(e){return e.localName?"none"===getComputedStyle(e).display?"":Array.from(e.childNodes).map(e=>this._getInnerText(e)).join(""):e.textContent}_updateGhost(e){var t=this._reorderGhost;t.textContent=this._getInnerText(e._content);var i=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(e=>t.style[e]=i[e]),t}_updateOrders(e,t){void 0!==e&&void 0!==t&&(e[0].forEach((e,t)=>e._order=0),e[0].forEach((e,t)=>e._order=(t+1)*this._orderBaseScope))}_setSiblingsReorderStatus(e,t){Array.from(e.parentNode.children).filter(t=>/column/.test(t.localName)&&this._isSwapAllowed(t,e)).forEach(e=>e._reorderStatus=t)}_autoScroller(){if(this._lastDragClientX){var e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10),this._scrollHandler()}this._draggedColumn&&this.async(this._autoScroller,10)}_isSwapAllowed(e,t){if(e&&t){var i=e!==t,r=e.parentElement===t.parentElement,n=e.frozen===t.frozen;return i&&r&&n}}_isSwappableByPosition(e,t){var i=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter(t=>e.contains(t._column))[0],r=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),n=i.getBoundingClientRect();return n.left>r.left?t>n.right-r.width:t<n.left+r.width}_swapColumnOrders(e,t){var i=e._order;e._order=t._order,t._order=i,this._updateLastFrozen(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){for(var i=e._column;i.parentElement!==t.parentElement&&i!==this;)i=i.parentElement;return i.parentElement===t.parentElement?i:e._column}}},K=(i(85),i(48),i(6)),Q=document.createElement("dom-module");Q.appendChild(K.a`
  <style>
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([height-by-rows]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([height-by-rows]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~="row"] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~="row"][loading] [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~="row"] {
      position: absolute;
    }

    #items [part~="row"]:empty {
      height: 1em;
    }

    [part~="cell"]:not([part~="details-cell"]) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~="details-cell"] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~="cell"] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~="resize-handle"],
    #scroller[no-content-pointer-events] [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~="reorder-ghost"] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    #scroller[ie][column-reordering-allowed] [part~="header-cell"] {
      -ms-user-select: none;
    }

    /* Resizing styles */
    [part~="resize-handle"] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~="resize-handle"]::before {
      position: absolute;
      content: "";
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~="resize-handle"]::before,
    [last-frozen] [part~="resize-handle"]::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~="details-cell"] {
      display: none !important;
    }

    #sizer [part~="cell"][hidden] {
      display: none !important;
    }

    #sizer [part~="cell"] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~="cell"]::before {
      content: "-";
    }

    #sizer [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir="rtl"]) #items,
    :host([dir="rtl"]) #header,
    :host([dir="rtl"]) #footer {
      left: auto;
    }

    :host([dir="rtl"]) [part~="reorder-ghost"] {
      left: auto;
      right: 0;
    }

    :host([dir="rtl"]) [part~="resize-handle"] {
      left: 0;
      right: auto;
    }

    :host([dir="rtl"]) [part~="resize-handle"]::before {
      transform: translateX(50%);
    }

    :host([dir="rtl"]) [last-column] [part~="resize-handle"]::before,
    :host([dir="rtl"]) [last-frozen] [part~="resize-handle"]::before {
      left: 0;
      right: auto;
    }
  </style>
`),Q.register("vaadin-grid-styles");var J=i(23),X=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class Z extends(Object(J.a)(Object(n.a)(Object(E.a)(A(I(Object(y.a)(L(R(N(z(G(b(k(U(C(T(q(M(g))))))))))))))))))){static get template(){return K.a`
    <style include="vaadin-grid-styles"></style>

    <div id="scroller" safari\$="[[_safari]]" ios\$="[[_ios]]" ie\$="[[_ie]]" loading\$="[[loading]]" column-reordering-allowed\$="[[columnReorderingAllowed]]">

      <table id="table" role="grid" aria-multiselectable="true" tabindex="0">
        <caption id="sizer" part="row"></caption>
        <thead id="header" role="rowgroup"></thead>
        <tbody id="items" role="rowgroup"></tbody>
        <tfoot id="footer" role="rowgroup"></tfoot>
      </table>

      <div part="reorder-ghost"></div>
    </div>

    <!-- The template needs at least one slot or else shady doesn't distribute -->
    <slot name="nodistribute"></slot>

    <div id="focusexit" tabindex="0"></div>
`}static get is(){return"vaadin-grid"}static get version(){return"5.7.9"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)"]}static get properties(){return{_safari:{type:Boolean,value:/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},_ios:{type:Boolean,value:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1},_edge:{type:Boolean,value:"undefined"!=typeof CSS&&CSS.supports("(-ms-ime-align:auto)")},_ie:{type:Boolean,value:!(!navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/MSIE/))},_firefox:{type:Boolean,value:navigator.userAgent.toLowerCase().indexOf("firefox")>-1},_android:{type:Boolean,value:/android/i.test(navigator.userAgent)},_touchDevice:{type:Boolean,value:X},heightByRows:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_heightByRowsChanged"},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback(),this.recalculateColumnWidths()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"dir"===e&&(this.__isRTL="rtl"===i,this._updateScrollerMeasurements())}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(e=>e.clientHeight).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}_recalculateColumnWidths(e){e.forEach(e=>{e.width="auto",e._origFlexGrow=e.flexGrow,e.flexGrow=0}),e.forEach(e=>{e._currentWidth=0,e._allCells.forEach(t=>{var i=t.offsetWidth+1;e._currentWidth=Math.max(e._currentWidth,i)})}),e.forEach(e=>{e.width=e._currentWidth+"px",e.flexGrow=e._origFlexGrow,e._currentWidth=void 0,e._origFlexGrow=void 0})}recalculateColumnWidths(){if(this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{var e=this._getColumns().filter(e=>!e.hidden&&e.autoWidth);this._recalculateColumnWidths(e)}}_createScrollerRows(e){for(var t=[],i=0;i<e;i++){var r=document.createElement("tr");r.setAttribute("part","row"),r.setAttribute("role","row"),this._columnTree&&this._updateRow(r,this._columnTree[this._columnTree.length-1],"body",!1,!0),t.push(r)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(e=>e.notifyPath&&e.notifyPath("_cells.*",e._cells)),Object(o.b)(this,()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation()}),t}_getRowTarget(){return this.$.items}_createCell(e){var t="vaadin-grid-cell-content-"+(this._contentIndex=this._contentIndex+1||0),i=document.createElement("vaadin-grid-cell-content");i.setAttribute("slot",t);var r=document.createElement(e);r.id=t.replace("-content-","-"),r.setAttribute("tabindex","-1"),r.setAttribute("role","td"===e?"gridcell":"columnheader");var n=document.createElement("slot");return n.setAttribute("name",t),r.appendChild(n),r._content=i,i.addEventListener("mousedown",()=>{if(window.chrome){var e=()=>{i.contains(this.getRootNode().activeElement)||r.focus(),document.removeEventListener("mouseup",e,!0)};document.addEventListener("mouseup",e,!0)}else setTimeout(()=>{i.contains(this.getRootNode().activeElement)||r.focus()})}),r}_updateRow(e,t,i,r,n){i=i||"body";var o=document.createDocumentFragment();Array.from(e.children).forEach(e=>e._vacant=!0),e.innerHTML="","sizer"!==e.id&&(e.hidden=!0),t.filter(e=>!e.hidden).forEach((t,s,a)=>{var l;if("body"===i){if(t._cells=t._cells||[],(l=t._cells.filter(e=>e._vacant)[0])||(l=this._createCell("td"),t._cells.push(l)),l.setAttribute("part","cell body-cell"),e.appendChild(l),s===a.length-1&&(this._rowDetailsTemplate||this.rowDetailsRenderer)){this._detailsCells=this._detailsCells||[];var d=this._detailsCells.filter(e=>e._vacant)[0]||this._createCell("td");-1===this._detailsCells.indexOf(d)&&this._detailsCells.push(d),d._content.parentElement||o.appendChild(d._content),this._configureDetailsCell(d),e.appendChild(d),this._a11ySetRowDetailsCell(e,d),d._vacant=!1}t.notifyPath&&!n&&t.notifyPath("_cells.*",t._cells)}else{var c="header"===i?"th":"td";r||"vaadin-grid-column-group"===t.localName?((l=t[`_${i}Cell`]||this._createCell(c))._column=t,e.appendChild(l),t[`_${i}Cell`]=l):(t._emptyCells=t._emptyCells||[],(l=t._emptyCells.filter(e=>e._vacant)[0]||this._createCell(c))._column=t,e.appendChild(l),-1===t._emptyCells.indexOf(l)&&t._emptyCells.push(l)),l.setAttribute("part",`cell ${i}-cell`),this.__updateHeaderFooterRowVisibility(e)}l._content.parentElement||o.appendChild(l._content),l._vacant=!1,l._column=t}),this.appendChild(o),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(e)}__updateHeaderFooterRowVisibility(e){if(e){var t=Array.from(e.children).filter(t=>{var i=t._column;if(i._emptyCells&&i._emptyCells.indexOf(t)>-1)return!1;if(e.parentElement===this.$.header){if(i.headerRenderer||i._headerTemplate)return!0;if(null===i.header)return!1;if(i.path||void 0!==i.header)return!0}else if(i.footerRenderer||i._footerTemplate)return!0});e.hidden!==!t.length&&(e.hidden=!t.length,this.notifyResize())}}_updateScrollerItem(e,t){this._preventScrollerRotatingCellFocus(e,t),this._columnTree&&(this._toggleAttribute("first",0===t,e),this._toggleAttribute("odd",t%2,e),this._a11yUpdateRowRowindex(e,t),this._getItem(t,e))}_columnTreeChanged(e,t){this._renderColumnTree(e),this.recalculateColumnWidths()}_renderColumnTree(e){for(Array.from(this.$.items.children).forEach(t=>this._updateRow(t,e[e.length-1],null,!1,!0));this.$.header.children.length<e.length;){var t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),this.$.header.appendChild(t);var i=document.createElement("tr");i.setAttribute("part","row"),i.setAttribute("role","row"),this.$.footer.appendChild(i)}for(;this.$.header.children.length>e.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach((t,i)=>this._updateRow(t,e[i],"header",i===e.length-1)),Array.from(this.$.footer.children).forEach((t,i)=>this._updateRow(t,e[e.length-1-i],"footer",0===i)),this._updateRow(this.$.sizer,e[e.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning()}__updateFooterPositioning(){(this._firefox&&(this.$.items.style.paddingBottom=0,this.heightByRows||(this.$.items.style.paddingBottom=this.$.footer.offsetHeight+"px")),this._ios)&&(!window.CSS.supports("position","sticky")&&(this.$.table.style.height="",this.$.table.style.minHeight="100%",this.$.table.style.maxHeight="100%",setTimeout(()=>this.$.table.style.height=this.$.scroller.offsetHeight+"px")))}_updateItem(e,t){e._item=t;var i=this.__getRowModel(e);this._toggleAttribute("selected",i.selected,e),this._a11yUpdateRowSelected(e,i.selected),this._a11yUpdateRowLevel(e,i.level),this._toggleAttribute("expanded",i.expanded,e),(this._rowDetailsTemplate||this.rowDetailsRenderer)&&this._toggleDetailsCell(e,t),this._generateCellClassNames(e,i),this._filterDragAndDrop(e,i),Array.from(e.children).forEach(e=>{if(e._renderer){var t=e._column||this;e._renderer.call(t,e._content,t,i)}else e._instance&&(e._instance.__detailsOpened__=i.detailsOpened,e._instance.__selected__=i.selected,e._instance.__level__=i.level,e._instance.__expanded__=i.expanded,e._instance.setProperties(i))}),this._debouncerUpdateHeights=h.a.debounce(this._debouncerUpdateHeights,s.d.after(1),()=>{this._updateMetrics(),this._positionItems(),this._updateScrollerSize()})}_resizeHandler(){this._updateDetailsCellHeights(),this._accessIronListAPI(super._resizeHandler,!0),this._updateScrollerMeasurements(),this.__updateFooterPositioning()}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-grid-appear")&&(this._render(),e.stopPropagation(),this.notifyResize(),this.__itemsReceived(),requestAnimationFrame(()=>{this.__scrollToPendingIndex(),this.$.table.style.webkitOverflowScrolling="touch"}))}_toggleAttribute(e,t,i){i.hasAttribute(e)===!t&&(t?i.setAttribute(e,""):i.removeAttribute(e))}__getRowModel(e){return{index:e.index,item:e._item,level:this._getIndexLevel(e.index),expanded:this._isExpanded(e._item),selected:this._isSelected(e._item),detailsOpened:!(!this._rowDetailsTemplate&&!this.rowDetailsRenderer)&&this._isDetailsOpened(e._item)}}render(){this._columnTree&&(this._columnTree.forEach(e=>{e.forEach(e=>e._renderHeaderAndFooter())}),this._update())}notifyResize(){super.notifyResize()}_heightByRowsChanged(e,t){(e||t)&&this.notifyResize()}__forceReflow(){this._debouncerForceReflow=h.a.debounce(this._debouncerForceReflow,s.a,()=>{this.$.scroller.style.overflow="hidden",setTimeout(()=>this.$.scroller.style.overflow="")})}}customElements.define(Z.is,Z)},,,function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var r=i(13),n=i(19),o=i(169),s=e=>class extends(Object(o.a)(e)){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",e=>this._onMultipleClick(e)),super.ready()}_enhanceMultipleItems(e,t,i,r){if(e&&t){if(r){var n=r.map(t=>e[t]);e.forEach(e=>e.selected=-1!==n.indexOf(e))}this._scrollToLastSelectedItem()}}_scrollToLastSelectedItem(){var e=this.selectedValues.slice(-1)[0];e&&!e.disabled&&this._scrollToItem(e)}_onMultipleClick(e){var t=this._filterItems(e.composedPath())[0],i=t&&!t.disabled?this.items.indexOf(t):-1;i<0||!this.multiple||(e.preventDefault(),-1!==this.selectedValues.indexOf(i)?this.selectedValues=this.selectedValues.filter(e=>e!==i):this.selectedValues=this.selectedValues.concat(i))}_multipleChanged(e,t){!e&&t&&(this.selectedValues=[],this.items.forEach(e=>e.selected=!1)),e&&!t&&void 0!==this.selected&&(this.push("selectedValues",this.selected),this.selected=void 0)}},a=i(23),l=i(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(a.a)(s(Object(n.a)(r.a)))){static get template(){return l.a`
    <style>
      :host {
        display: flex;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="items"] {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
    </style>
    <div part="items">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-list-box"}static get version(){return"1.4.0"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}ready(){super.ready(),this.setAttribute("role","list"),setTimeout(this._checkImport.bind(this),2e3)}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}_checkImport(){var e=this.querySelector("vaadin-item");!e||e instanceof r.a||console.warn("Make sure you have imported the vaadin-item element.")}}customElements.define(d.is,d)},,function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r,n=null,o=window.HTMLImports&&window.HTMLImports.whenReady||null;function s(e){requestAnimationFrame((function(){o?o(e):(n||(n=new Promise(e=>{r=e}),"complete"===document.readyState?r():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&r()})),n.then((function(){e&&e()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var a="__shadyCSSCachedStyle",l=null,d=null;class c{constructor(){this.customStyles=[],this.enqueued=!1,s(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&d&&(this.enqueued=!0,s(d))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){return e[a]?e[a]:e.getStyle?e.getStyle():e}processStyles(){for(var e=this.customStyles,t=0;t<e.length;t++){var i=e[t];if(!i[a]){var r=this.getStyleForCustomStyle(i);if(r){var n=r.__appliedElement||r;l&&l(n),i[a]=n}}}return e}}c.prototype.addCustomStyle=c.prototype.addCustomStyle,c.prototype.getStyleForCustomStyle=c.prototype.getStyleForCustomStyle,c.prototype.processStyles=c.prototype.processStyles,Object.defineProperties(c.prototype,{transformCallback:{get:()=>l,set(e){l=e}},validateCallback:{get:()=>d,set(e){var t=!1;d||(t=!0),d=e,t&&this.enqueueDocumentValidation()}}})},,function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var r=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,n=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function o(e,t){if("function"==typeof e){var i=r.exec(e.toString());if(i)try{e=new Function(i[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}}window.Vaadin=window.Vaadin||{};var s=function(e,t){if(window.Vaadin.developmentMode)return o(e,t)};void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(n?!function(){if(n){if(Object.keys(n).map(e=>n[e]).filter(e=>e.productionMode).length>0)return!0}return!1}():!o((function(){return!0})))}catch(e){return!1}}())},function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));i(34);var r=i(73);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class n{constructor(e){n[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return n.types[e]&&n.types[e][t]}set value(e){var t=this.type,i=this.key;t&&i&&(t=n.types[t]=n.types[t]||{},null==e?delete t[i]:t[i]=e)}get list(){if(this.type){var e=n.types[this.type];return e?Object.keys(e).map((function(e){return o[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}n[" "]=function(){},n.types={};var o=n.types;Object(r.a)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,i){var r=new n({type:e,key:t});return void 0!==i&&i!==r.value?r.value=i:this.value!==r.value&&(this.value=r.value),r},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new n({type:this.type,key:e}).value}})},,,,function(e,t,i){"use strict";i(34);var r=i(73);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(r.a)({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}})},,function(e,t,i){"use strict";i(81),i(58),i(42),i(46),i(61);var r=i(6).a`<dom-module id="lumo-item" theme-for="vaadin-item">
  <template>
    <style>
      :host {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        padding: 0.5em 1em;
        min-height: var(--lumo-size-m);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
      }

      /* Selectable items have a checkmark icon */
      :host([tabindex])::before {
        display: var(--_lumo-item-selected-icon-display, none);
        content: var(--lumo-icons-checkmark);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        font-weight: normal;
        width: 1em;
        height: 1em;
        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
        color: var(--lumo-primary-text-color);
        flex: none;
        opacity: 0;
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;
      }

      :host([selected])::before {
        opacity: 1;
      }

      :host([active]:not([selected]))::before {
        transform: scale(0.8);
        opacity: 0;
        transition-duration: 0s;
      }

      [part="content"] {
        flex: auto;
      }

      /* Disabled item */

      :host([disabled]) {
        color: var(--lumo-disabled-text-color);
        cursor: default;
        pointer-events: none;
      }

      /* Slotted icons */

      :host ::slotted(iron-icon) {
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);i(121)},,function(e,t,i){"use strict";i(42),i(46),i(186);var r=document.createElement("template");r.innerHTML='<dom-module id="lumo-menu-overlay-core">\n  <template>\n    <style>\n      :host([opening]),\n      :host([closing]) {\n        animation: 0.14s lumo-overlay-dummy-animation;\n      }\n\n      [part="overlay"] {\n        will-change: opacity, transform;\n      }\n\n      :host([opening]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-enter ease-out both;\n      }\n\n      @keyframes lumo-menu-overlay-enter {\n        0% {\n          opacity: 0;\n          transform: translateY(-4px);\n        }\n      }\n\n      :host([closing]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-exit both;\n      }\n\n      @keyframes lumo-menu-overlay-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-menu-overlay">\n  <template>\n    <style include="lumo-overlay lumo-menu-overlay-core">\n      /* Small viewport (bottom sheet) styles */\n      /* Use direct media queries instead of the state attributes (`[phone]` and `[fullscreen]`) provided by the elements */\n      @media (max-width: 420px), (max-height: 420px) {\n        :host {\n          top: 0 !important;\n          right: 0 !important;\n          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n          left: 0 !important;\n          align-items: stretch !important;\n          justify-content: flex-end !important;\n        }\n\n        [part="overlay"] {\n          max-height: 50vh;\n          width: 100vw;\n          border-radius: 0;\n          box-shadow: var(--lumo-box-shadow-xl);\n        }\n\n        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n        [part="content"] {\n          padding: 30px var(--lumo-space-m);\n          max-height: inherit;\n          box-sizing: border-box;\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n        }\n\n        [part="backdrop"] {\n          display: block;\n        }\n\n        /* Animations */\n\n        :host([opening]) [part="overlay"] {\n          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;\n        }\n\n        :host([closing]),\n        :host([closing]) [part="backdrop"] {\n          animation-delay: 0.14s;\n        }\n\n        :host([closing]) [part="overlay"] {\n          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-enter {\n        0% {\n          transform: translateY(150%);\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-exit {\n        100% {\n          transform: translateY(150%);\n        }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content)},,function(e,t,i){"use strict";i(52),i(42),i(46);var r=i(6).a`<dom-module id="lumo-list-box" theme-for="vaadin-list-box">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
      }

      /* IE11 flexbox issue workaround (vaadin-items are flex containers with min-height) */
      [part="items"] {
        display: flex;
        flex-direction: column;
      }

      [part="items"] ::slotted(*) {
        flex: none;
      }

      /* Normal item */

      [part="items"] ::slotted(vaadin-item) {
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        cursor: default;
      }

      [part="items"] ::slotted(vaadin-item) {
        outline: none;
        border-radius: var(--lumo-border-radius);
        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
      [part="items"] ::slotted(vaadin-item)::before {
        display: var(--_lumo-item-selected-icon-display);
      }

      /* Hovered item */
      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */

      [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* Focused item */

      [part="items"] ::slotted([focus-ring]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
          background-color: transparent;
        }

        [part="items"] ::slotted([focus-ring]:not([disabled])) {
          box-shadow: none;
        }
      }

      /* Easily add section dividers */

      [part="items"] ::slotted(hr) {
        height: 1px;
        border: 0;
        padding: 0;
        margin: var(--lumo-space-s) var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="items"] ::slotted(vaadin-item) {
        padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);i(144)},,function(e,t,i){"use strict";i(52),i(58),i(42),i(46),i(61);var r=i(6).a`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="prefix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      :host([dir="rtl"]) [part="suffix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      :host([dir="rtl"][theme~="icon"]) [part="prefix"],
      :host([dir="rtl"][theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content)},,function(e,t){var i;i=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Context Menu","vaadin-context-menu-flow")},window.Vaadin.Flow.Legacy=window.Vaadin.Flow.Legacy||{},window.Vaadin.Flow.contextMenuConnector={init:e=>i((function(e){if(!e.$contextMenuConnector){if(window.Polymer)window.Vaadin.Flow.Legacy.GestureEventListeners=window.Vaadin.Flow.Legacy.GestureEventListeners||Polymer.GestureEventListeners,window.Vaadin.Flow.Legacy.Gestures=window.Vaadin.Flow.Legacy.Gestures||Polymer.Gestures;else if(!window.Vaadin.Flow.Legacy.Gestures)return void console.log("ContextMenu is unable to load Polymer helpers.");window.Vaadin.Flow.Legacy.GestureEventListeners;var t=window.Vaadin.Flow.Legacy.Gestures;e.$contextMenuConnector={openOnHandler:i((function(t){t.preventDefault(),t.stopPropagation(),this.$contextMenuConnector.openEvent=t;var i={};e.getContextMenuBeforeOpenDetail&&(i=e.getContextMenuBeforeOpenDetail(t)),e.dispatchEvent(new CustomEvent("vaadin-context-menu-before-open",{detail:i}))})),updateOpenOn:i((function(r){this.removeListener(),this.openOnEventType=r,customElements.whenDefined("vaadin-context-menu").then(i(()=>{t.gestures[r]?t.addListener(e,r,this.openOnHandler):e.addEventListener(r,this.openOnHandler)}))})),removeListener:i((function(){this.openOnEventType&&(t.gestures[this.openOnEventType]?t.removeListener(e,this.openOnEventType,this.openOnHandler):e.removeEventListener(this.openOnEventType,this.openOnHandler))})),openMenu:i((function(e){e.open(this.openEvent)})),removeConnector:i((function(){this.removeListener(),e.$contextMenuConnector=void 0}))}}}))(e),generateItems:(e,t,r)=>i((function(e,t,i){e._containerNodeId=i;var r=function(e){var i=function(e){try{return window.Vaadin.Flow.clients[t].getByNodeId(e)}catch(i){console.error("Could not get node %s from app %s",e,t),console.error(i)}}(e._containerNodeId);return i&&Array.from(i.children).map(e=>{var t={component:e,checked:e._checked};return"VAADIN-CONTEXT-MENU-ITEM"==e.tagName&&e._containerNodeId&&(t.children=r(e)),e._item=t,t})},n=r(e);e.items=n}))(e,t,r),setChecked:(e,t)=>i((function(e,t){e._item&&(e._item.checked=t)}))(e,t)}},function(e,t){window.Vaadin=window.Vaadin||{},window.Vaadin.Flow=window.Vaadin.Flow||{},window.Vaadin.Flow.dndConnector={__ondragenterListener:function(e){var t=e.currentTarget.__dropEffect;e.currentTarget.hasAttribute("disabled")||(t&&(e.dataTransfer.dropEffect=t),t&&"none"!==t&&(e.currentTarget.classList.contains("v-drag-over-target")?e.currentTarget["__skip-leave"]=!0:e.currentTarget.classList.add("v-drag-over-target"),e.preventDefault(),e.stopPropagation()))},__ondragoverListener:function(e){if(!e.currentTarget.hasAttribute("disabled")){var t=e.currentTarget.__dropEffect;t&&(e.dataTransfer.dropEffect=t),e.preventDefault(),e.stopPropagation()}},__ondragleaveListener:function(e){e.currentTarget["__skip-leave"]?e.currentTarget["__skip-leave"]=!1:e.currentTarget.classList.remove("v-drag-over-target"),e.stopPropagation()},__ondropListener:function(e){var t=e.currentTarget.__dropEffect;t&&(e.dataTransfer.dropEffect=t),e.currentTarget.classList.remove("v-drag-over-target"),e.preventDefault(),e.stopPropagation()},updateDropTarget:function(e){e.__active?(e.addEventListener("dragenter",this.__ondragenterListener,!1),e.addEventListener("dragover",this.__ondragoverListener,!1),e.addEventListener("dragleave",this.__ondragleaveListener,!1),e.addEventListener("drop",this.__ondropListener,!1)):(e.removeEventListener("dragenter",this.__ondragenterListener,!1),e.removeEventListener("dragover",this.__ondragoverListener,!1),e.removeEventListener("dragleave",this.__ondragleaveListener,!1),e.removeEventListener("drop",this.__ondropListener,!1),e.classList.remove("v-drag-over-target"))},__dragstartListener:function(e){e.stopPropagation(),e.dataTransfer.setData("text/plain",""),e.currentTarget.hasAttribute("disabled")?e.preventDefault():(e.currentTarget.__effectAllowed&&(e.dataTransfer.effectAllowed=e.currentTarget.__effectAllowed),e.currentTarget.classList.add("v-dragged"))},__dragendListener:function(e){e.currentTarget.classList.remove("v-dragged")},updateDragSource:function(e){e.draggable?(e.addEventListener("dragstart",this.__dragstartListener,!1),e.addEventListener("dragend",this.__dragendListener,!1)):(e.removeEventListener("dragstart",this.__dragstartListener,!1),e.removeEventListener("dragend",this.__dragendListener,!1))}}},function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));i(34);var r=i(40),n={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),t)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var i=this.domHost;this.scrollTarget=i&&i.$?i.$[e]:Object(r.a)(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var i;"object"==typeof e?(i=e.left,t=e.top):i=e,i=i||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(i,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var i=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}}},function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return n}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var r=e=>class extends e{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this))}_activateItem(e){var t=e.detail.model,i=t?t.item:null;i&&(this.activeItem=this._itemsEqual(this.activeItem,i)?null:i)}_onClick(e){if(!e.defaultPrevented){var t=e.composedPath(),i=t[t.indexOf(this.$.table)-3];if(i&&!(i.getAttribute("part").indexOf("details-cell")>-1)){var r=i._content,n=this.getRootNode().activeElement;r.contains(n)&&(!this._ie||this._isFocusable(n))||this._isFocusable(e.target)||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(i.parentElement)}}))}}}_isFocusable(e){return n(e)}},n=e=>{if(!e.parentNode)return!1;var t=-1!==Array.from(e.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter(e=>"cell body-cell"!==e.getAttribute("part")).indexOf(e);return!e.disabled&&t}},function(e,t){!function(){var e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Grid","vaadin-grid-flow")};window.Vaadin.Flow.Legacy=window.Vaadin.Flow.Legacy||{};var t=!1;window.Vaadin.Flow.gridConnector={initLazy:i=>e((function(i){if(!i.$connector){if(window.Polymer)window.Vaadin.Flow.Legacy.Debouncer=Polymer.Debouncer,window.Vaadin.Flow.Legacy.timeOut=Polymer.Async.timeOut,window.Vaadin.Flow.Legacy.animationFrame=Polymer.Async.animationFrame,window.Vaadin.Flow.Legacy.GridElement=Vaadin.GridElement,window.Vaadin.Flow.Legacy.ItemCache=Vaadin.Grid.ItemCache;else if(!window.Vaadin.Flow.Legacy.Debouncer)return void console.log("Grid is unable to load Polymer helpers.");var r=window.Vaadin.Flow.Legacy.Debouncer,n=window.Vaadin.Flow.Legacy.timeOut,o=window.Vaadin.Flow.Legacy.animationFrame,s=window.Vaadin.Flow.Legacy.GridElement,a=window.Vaadin.Flow.Legacy.ItemCache;t||(t=!0,a.prototype.ensureSubCacheForScaledIndexOriginal=a.prototype.ensureSubCacheForScaledIndex,a.prototype.ensureSubCacheForScaledIndex=e((function(e){this.grid.$connector?this.itemCaches[e]||this.grid.$connector.beforeEnsureSubCacheForScaledIndex(this,e):this.ensureSubCacheForScaledIndexOriginal(e)})),a.prototype.isLoading=e((function(){return Boolean(_.length||Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(e=>this.itemCaches[e].isLoading())[0])})),a.prototype.doEnsureSubCacheForScaledIndex=e((function(e){if(!this.itemCaches[e]){var t=new a.prototype.constructor(this.grid,this,this.items[e]);t.itemkeyCaches={},this.itemkeyCaches||(this.itemkeyCaches={}),this.itemCaches[e]=t,this.itemkeyCaches[this.grid.getItemId(t.parentItem)]=t,this.grid._loadPage(0,t)}})),a.prototype.getCacheAndIndexByKey=e((function(e){for(var t in this.items)if(this.grid.getItemId(this.items[t])===e)return{cache:this,scaledIndex:t};for(var i=Object.keys(this.itemkeyCaches),r=0;r<i.length;r++){var n=i[r],o=this.itemkeyCaches[n].getCacheAndIndexByKey(e);if(o)return o}})),a.prototype.getLevel=e((function(){for(var e=this,t=0;e.parentCache;)e=e.parentCache,t++;return t})));var l,d,c,h={},u={},p={},m=[],_=[],f={},v="null";f[v]=[0,0];var g=["SINGLE","NONE","MULTI"],b={},y="SINGLE",A=!0,w=!1;i.size=0,i.itemIdPath="key",i.$connector={},i.$connector.hasEnsureSubCacheQueue=e(()=>_.length>0),i.$connector.hasParentRequestQueue=e(()=>m.length>0),i.$connector.hasRootRequestQueue=e(()=>Object.keys(h).length>0||c&&c.isActive()),i.$connector.beforeEnsureSubCacheForScaledIndex=e((function(e,t){_.push({cache:e,scaledIndex:t,itemkey:i.getItemId(e.items[t]),level:e.getLevel()}),_.sort((function(e,t){return e.scaledIndex-t.scaledIndex||e.level-t.level})),d=r.debounce(d,o,()=>{for(;_.length;)i.$connector.flushEnsureSubCache()})})),i.$connector.doSelection=e((function(e,t){"NONE"===y||!e.length||t&&i.hasAttribute("disabled")||("SINGLE"===y&&(i.selectedItems=[],b={}),i.selectedItems=i.selectedItems.concat(e),e.forEach(e=>{e&&(b[e.key]=e,t&&(e.selected=!0,i.$server.select(e.key)));var r=!i.activeItem||!e||e.key!=i.activeItem.key;!t&&"SINGLE"===y&&r&&(i.activeItem=e,i.$connector.activeItem=e)}))})),i.$connector.doDeselection=e((function(e,t){if(!("NONE"===y||!e.length||t&&i.hasAttribute("disabled"))){for(var r=i.selectedItems.slice();e.length;){for(var n=e.shift(),o=0;o<r.length;o++){var s=r[o];if(n&&n.key===s.key){r.splice(o,1);break}}n&&(delete b[n.key],t&&(delete n.selected,i.$server.deselect(n.key)))}i.selectedItems=r}})),i.__activeItemChanged=e((function(e,t){"SINGLE"==y&&(e?b[e.key]||i.$connector.doSelection([e],!0):t&&b[t.key]&&(i.$connector.deselectAllowed?i.$connector.doDeselection([t],!0):i.activeItem=t))})),i._createPropertyObserver("activeItem","__activeItemChanged",!0),i.__activeItemChangedDetails=e((function(e,t){A&&(null==e&&void 0===t||(e&&!e.detailsOpened?i.$server.setDetailsVisible(e.key):i.$server.setDetailsVisible(null)))})),i._createPropertyObserver("activeItem","__activeItemChangedDetails",!0),i.$connector.setDetailsVisibleOnClick=e((function(e){A=e})),i.$connector._getPageIfSameLevel=e((function(e,t,r){var n=i._cache.getCacheAndIndex(t),o=n.cache.parentItem;return e!==(o?i.getItemId(o):v)?r:i._getPageForIndex(n.scaledIndex)})),i.$connector.getCacheByKey=e((function(e){var t=i._cache.getCacheAndIndexByKey(e);if(t)return t.cache})),i.$connector.flushEnsureSubCache=e((function(){for(var e=_.splice(0,1)[0],t=e.itemkey,r=i._virtualStart,n=i._virtualEnd,o=n-r,s=Math.max(0,r+i._vidxOffset-o),a=Math.min(n+i._vidxOffset+o,i._effectiveSize),l=s;l<=a;l++){var d=i._cache.getItemForIndex(l);if(i.getItemId(d)===t){if(i._isExpanded(d))return e.cache.doEnsureSubCacheForScaledIndex(e.scaledIndex),!0;break}}return!1})),i.$connector.flushParentRequests=e((function(){var e=m.splice(0,20);return!!e.length&&(i.$server.setParentRequestedRanges(e),!0)})),i.$connector.beforeParentRequest=e((function(e,t,o){m.push({firstIndex:e,size:t,parentKey:o}),l=r.debounce(l,n.after(50),()=>{for(;m.length;)i.$connector.flushParentRequests()})})),i.$connector.fetchPage=e((function(e,t,r){for(var n=i._virtualStart,o=i._virtualEnd,s=o-n,a=Math.max(0,n+i._vidxOffset-s),l=Math.min(o+i._vidxOffset+s,i._effectiveSize),d=t,c=t,h=a;h<=l;h++)d=Math.min(d,i.$connector._getPageIfSameLevel(r,h,d)),c=Math.max(c,i.$connector._getPageIfSameLevel(r,h,c));var u=Math.max(0,d),p=r!==v?c:Math.min(c,Math.floor(i.size/i.pageSize)),m=f[r];if(m||(m=[-1,-1]),m[0]!=u||m[1]!=p){m=[u,p],f[r]=m;var _=p-u+1;e(u*i.pageSize,_*i.pageSize)}})),i.dataProvider=e((function(e,t){if(e.pageSize!=i.pageSize)throw"Invalid pageSize";var o=e.page;if(e.parentItem){var s=i.getItemId(e.parentItem);u[s]||(u[s]={});var a=i.$connector.getCacheByKey(s),l=a&&a.itemkeyCaches?a.itemkeyCaches[s]:void 0;p[s]&&p[s][o]&&l?(o=Math.min(o,Math.floor(p[s].size/i.pageSize)),t(p[s][o],p[s].size)):u[s][o]=t,i.$connector.fetchPage((t,r)=>i.$connector.beforeParentRequest(t,r,e.parentItem.key),o,s)}else o=Math.min(o,Math.floor(i.size/i.pageSize)),p[v]&&p[v][o]?t(p[v][o]):h[o]=t,c=r.debounce(c,n.after(i._hasData?150:0),()=>{i.$connector.fetchPage((e,t)=>i.$server.setRequestedRange(e,t),o,v)})}));var x=e((function(e,t){void 0===t||w||i.$server.sortersChanged(i._sorters.map((function(e){return{path:e.path,direction:e.direction}})))}));i.$connector.setSorterDirections=e((function(t){w=!0,setTimeout(e(()=>{try{var e=Array.from(i.querySelectorAll("vaadin-grid-sorter"));e.forEach(e=>{t.filter(t=>t.column===e.getAttribute("path"))[0]||(e.direction=null)}),t.reverse().forEach(({column:t,direction:i})=>{e.forEach(e=>{e.getAttribute("path")===t&&e.direction!==i&&(e.direction=i)})})}finally{w=!1}}))})),i._createPropertyObserver("_previousSorters",x),i._updateItem=e((function(e,t){s.prototype._updateItem.call(i,e,t),e.hidden||Array.from(e.children).forEach(e=>{e._instance&&e._instance.children&&Array.from(e._instance.children).forEach(e=>{e._attachRenderedComponentIfAble&&e._attachRenderedComponentIfAble(),e.children&&Array.from(e.children).forEach(e=>{e._attachRenderedComponentIfAble&&e._attachRenderedComponentIfAble()})})})})),i._expandedInstanceChangedCallback=e((function(e,t){if(null!=e.item&&null!=i.$server.updateExpandedState){var r=i.getItemId(e.item);if(i.$server.updateExpandedState(r,t),t)this.expandItem(e.item);else{delete p[r];var n=i.$connector.getCacheByKey(r);n&&n.itemkeyCaches&&n.itemkeyCaches[r]&&delete n.itemkeyCaches[r],n&&n.itemkeyCaches&&Object.keys(n.itemCaches).filter(e=>n.items[e].key===r).forEach(e=>delete n.itemCaches[e]),delete f[r],this.collapseItem(e.item)}}}));var C=function(e){if(!e||!Array.isArray(e))throw"Attempted to call itemsUpdated with an invalid value: "+JSON.stringify(e);for(var t=Array.from(i.detailsOpenedItems),r=!1,n=0;n<e.length;++n){var o=e[n];o&&(o.detailsOpened?i._getItemIndexInArray(o,t)<0&&t.push(o):i._getItemIndexInArray(o,t)>=0&&t.splice(i._getItemIndexInArray(o,t),1),b[o.key]&&(b[o.key]=o,o.selected=!0,r=!0))}i.detailsOpenedItems=t,r&&(i.selectedItems=Object.keys(b).map((function(e){return b[e]})))},E=function(e,t){var r;if((t||v)!==v){r=p[t][e];var n=i.$connector.getCacheByKey(t);if(n&&n.itemkeyCaches){var o=n.itemkeyCaches[t],s=u[t],a=s&&s[e];S(e,r,a,o)}}else r=p[v][e],S(e,r,h[e],i._cache);return r},S=function(e,t,r,n){if(!r){var o=e*i.pageSize,s=o+i.pageSize;if(t){if(n&&n.items)for(var a=o;a<s;a++)n.items[a]&&(n.items[a]=t[a-o])}else if(n&&n.items)for(var l=o;l<s;l++)delete n.items[l]}},O=function(){i._cache.updateSize(),i._effectiveSize=i._cache.effectiveSize,i._assignModels()},I=function(e){if(e&&i._physicalItems){var t=e.map(e=>e.key),r=i._physicalItems.map((e,i)=>e._item&&e._item.key&&t.indexOf(e._item.key)>-1?i:null).filter(e=>null!==e);r.length>0&&i._assignModels(r)}};i.$connector.set=e((function(e,t,r){if(e%i.pageSize!=0)throw"Got new data to index "+e+" which is not aligned with the page size of "+i.pageSize;for(var n=r||v,o=e/i.pageSize,s=Math.ceil(t.length/i.pageSize),a=0;a<s;a++){var l=o+a,d=t.slice(a*i.pageSize,(a+1)*i.pageSize);p[n]||(p[n]={}),p[n][l]=d,i.$connector.doSelection(d.filter(e=>e.selected&&!k(e))),i.$connector.doDeselection(d.filter(e=>!e.selected&&(b[e.key]||k(e))));var c=E(l,n);c&&(C(c),I(c))}}));var T=function(e){var t=e.parentUniqueKey||v;if(p[t])for(var r in p[t])for(var n in p[t][r])if(i.getItemId(p[t][r][n])===i.getItemId(e))return{page:r,index:n,parentKey:t};return null};i.$connector.updateHierarchicalData=e((function(e){for(var t=[],i=0;i<e.length;i++){var r=T(e[i]);if(r){p[r.parentKey][r.page][r.index]=e[i];var n=r.parentKey+":"+r.page;t[n]||(t[n]={parentKey:r.parentKey,page:r.page})}}for(var o=Object.keys(t),s=0;s<o.length;s++){var a=t[o[s]],l=E(a.page,a.parentKey);l&&(C(l),I(l))}})),i.$connector.updateFlatData=e((function(e){for(var t=0;t<e.length;t++){var r=T(e[t]);if(r){p[r.parentKey][r.page][r.index]=e[t];var n=parseInt(r.page)*i.pageSize+parseInt(r.index);i._cache.items[n]&&(i._cache.items[n]=e[t])}}C(e),I(e)})),i.$connector.clearExpanded=e((function(){i.expandedItems=[],_=[],m=[]})),i.$connector.clear=e((function(e,t,r){var n=r||v;if(p[n]&&0!==Object.keys(p[n]).length){if(e%i.pageSize!=0)throw"Got cleared data for index "+e+" which is not aligned with the page size of "+i.pageSize;for(var o=Math.floor(e/i.pageSize),s=Math.ceil(t/i.pageSize),a=0;a<s;a++){var l=o+a,d=p[n][l];i.$connector.doDeselection(d.filter(e=>b[e.key])),delete p[n][l];var c=E(l,r);c&&C(c),I(d)}var h=i._cache;if(r){var u=i._cache.getCacheAndIndexByKey(n);h=u.cache.itemCaches[u.scaledIndex]}for(var m=e+s*i.pageSize,_=e;_<m;_++){delete h.items[_];var f=h.itemCaches[_];delete h.itemCaches[_];var g=f&&f.parentItem.key;g&&delete h.itemkeyCaches[g]}i._cache.updateSize()}}));var k=function(e){for(var t=i.selectedItems,r=0;r<t;r++){if(t[r].key===e.key)return!0}return!1};i.$connector.reset=e((function(){i.size=0,P(p),P(i._cache.items),P(f),d&&d.cancel(),l&&l.cancel(),c&&c.cancel(),d=void 0,l=void 0,_=[],m=[],O()}));var P=e=>Object.keys(e).forEach(t=>delete e[t]);i.$connector.updateSize=e=>i.size=e,i.$connector.updateUniqueItemIdPath=e=>i.itemIdPath=e,i.$connector.expandItems=e((function(e){var t=Array.from(i.expandedItems);e.filter(e=>!i._isExpanded(e)).forEach(e=>t.push(e)),i.expandedItems=t})),i.$connector.collapseItems=e((function(e){var t=Array.from(i.expandedItems);e.forEach(e=>{var r=i._getItemIndexInArray(e,t);r>=0&&t.splice(r,1)}),i.expandedItems=t,e.forEach(e=>i.$connector.removeFromQueue(e))})),i.$connector.removeFromQueue=e((function(e){var t=i.getItemId(e);delete u[t],i.$connector.removeFromArray(_,e=>e.itemkey===t),i.$connector.removeFromArray(m,e=>e.parentKey===t)})),i.$connector.removeFromArray=e((function(e,t){if(e.length)for(var i=e.length-1;i--;)t(e[i])&&e.splice(i,1)})),i.$connector.confirmParent=e((function(e,t,r){if(u[t]){p[t]&&(p[t].size=r);for(var n=Object.getOwnPropertyNames(u[t]),o=0;o<n.length;o++){var s=n[o],a=f[t]||[0,0],l=u[t][s];if(p[t]&&p[t][s]||s<a[0]||s>a[1])delete u[t][s],l(p[t][s]||new Array(r),r);else l&&0===r&&(delete u[t][s],l([],r))}i.$server.confirmParentUpdate(e,t),i.loading||i._assignModels()}})),i.$connector.confirm=e((function(e){for(var t=Object.getOwnPropertyNames(h),r=0;r<t.length;r++){var n=t[r],o=f[v]||[0,0],s=i.size?Math.ceil(i.size/i.pageSize)-1:0,a=Math.min(o[1],s),l=h[n];p[v]&&p[v][n]||n<o[0]||+n>a?(delete h[n],l(p[v][n]||new Array(i.pageSize)),i._debounceIncreasePool&&i._debounceIncreasePool.flush()):l&&0===i.size&&(delete h[n],l([]))}i.$server.confirmUpdate(e)})),i.$connector.ensureHierarchy=e((function(){for(var e in p)e!==v&&delete p[e];P(f),i._cache.itemCaches={},i._cache.itemkeyCaches={},O()})),i.$connector.setSelectionMode=e((function(e){if(!(("string"==typeof e||e instanceof String)&&g.indexOf(e)>=0))throw"Attempted to set an invalid selection mode";y=e,b={}})),i.$connector.deselectAllowed=!0,i.$connector.setVerticalScrollingEnabled=e((function(e){z(i.$.table,e),i.notifyResize()}));var z=function(t,i){t.style.overflowY=i?"":"hidden",t.removeEventListener("wheel",t.__wheelListener),!i&&t.addEventListener("wheel",t.__wheelListener=e(e=>{e.deltaX?Object.defineProperty(e,"deltaY",{value:0}):e.stopImmediatePropagation()}))};i.addEventListener("vaadin-context-menu-before-open",e((function(e){!function(e){var t=i.getEventContext(e),r=t.item&&t.item.key,n=t.column&&t.column.id;i.$server.updateContextMenuTargetItem(r,n)}(i.$contextMenuConnector.openEvent)}))),i.getContextMenuBeforeOpenDetail=e((function(e){var t=i.getEventContext(e);return{key:t.item&&t.item.key||""}})),i.addEventListener("cell-activate",e(e=>{i.$connector.activeItem=e.detail.model.item,setTimeout(()=>i.$connector.activeItem=void 0)})),i.addEventListener("click",e(e=>L(e,"item-click"))),i.addEventListener("dblclick",e(e=>L(e,"item-double-click"))),i.addEventListener("column-resize",e(e=>{i._getColumnsInOrder().filter(e=>!e.hidden).forEach(e=>{e.dispatchEvent(new CustomEvent("column-drag-resize"))}),i.dispatchEvent(new CustomEvent("column-drag-resize",{detail:{resizedColumnKey:e.detail.resizedColumn._flowId}}))})),i.addEventListener("column-reorder",e(e=>{var t=i._columnTree.slice(0).pop().filter(e=>e._flowId).sort((e,t)=>e._order-t._order).map(e=>e._flowId);i.dispatchEvent(new CustomEvent("column-reorder-all-columns",{detail:{columns:t}}))})),i.cellClassNameGenerator=e((function(e,t){var i=t.item.style;if(i)return(i.row||"")+" "+(e&&i[e._flowId]||"")})),i.dropFilter=e(e=>!e.item.dropDisabled),i.dragFilter=e(e=>!e.item.dragDisabled),i.addEventListener("grid-dragstart",e(e=>{i._isSelected(e.detail.draggedItems[0])?(i.__selectionDragData?Object.keys(i.__selectionDragData).forEach(t=>{e.detail.setDragData(t,i.__selectionDragData[t])}):(i.__dragDataTypes||[]).forEach(t=>{e.detail.setDragData(t,e.detail.draggedItems.map(e=>e.dragData[t]).join("\n"))}),i.__selectionDraggedItemsCount>1&&e.detail.setDraggedItemsCount(i.__selectionDraggedItemsCount)):(i.__dragDataTypes||[]).forEach(t=>{e.detail.setDragData(t,e.detail.draggedItems[0].dragData[t])})}))}function L(e,t){if(i.$connector.activeItem){e.itemKey=i.$connector.activeItem.key;var r=i.getEventContext(e);r.column&&(e.internalColumnId=r.column._flowId),i.dispatchEvent(new CustomEvent(t,{detail:e}))}}}))(i)}}()},function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var r=e=>class extends e{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();var e=this.getAttribute("value");null!==e&&(this.value=e),this.addEventListener("focus",e=>this._setFocused(!0),!0),this.addEventListener("blur",e=>this._setFocused(!1),!0),this.addEventListener("mousedown",e=>{this._setActive(this._mousedown=!0);var t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)}),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("keyup",e=>this._onKeyup(e))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){e?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(e){e?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(e){e?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(e){/^( |SpaceBar|Enter)$/.test(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this._setActive(!0))}_onKeyup(e){this.hasAttribute("active")&&(this._setActive(!1),this.click())}}},function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i(30),n=i(92),o=i(15),s=i(9),a=e=>class extends e{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("click",e=>this._onClick(e)),this._observer=new r.a(this,e=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(e,t,i,r){if(!r&&e){this.setAttribute("aria-orientation",t||"vertical"),this.items.forEach(e=>{t?e.setAttribute("orientation",t):e.removeAttribute("orientation"),e.updateStyles()}),this._setFocusable(i);var n=e[i];e.forEach(e=>e.selected=e===n),n&&!n.disabled&&this._scrollToItem(i)}}get focused(){return this.getRootNode().activeElement}_filterItems(e){return e.filter(e=>e._hasVaadinItemMixin)}_onClick(e){if(!(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)){var t,i=this._filterItems(e.composedPath())[0];i&&!i.disabled&&(t=this.items.indexOf(i))>=0&&(this.selected=t)}}_searchKey(e,t){this._searchReset=o.a.debounce(this._searchReset,s.d.after(500),()=>this._searchBuf=""),this._searchBuf+=t.toLowerCase();this.items.some(e=>0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))||(this._searchBuf=t.toLowerCase());var i=1===this._searchBuf.length?e+1:e;return this._getAvailableIndex(i,1,e=>!(e.disabled||this._isItemHidden(e))&&0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))}get _isRTL(){return!this._vertical&&"rtl"===this.getAttribute("dir")}_onKeydown(e){if(!e.metaKey&&!e.ctrlKey){var t=e.key.replace(/^Arrow/,""),i=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(t)&&1===t.length){var r=this._searchKey(i,t);r>=0&&this._focus(r)}else{var n,o,s=this._isRTL?-1:1;this._vertical&&"Up"===t||!this._vertical&&"Left"===t?(o=-s,n=i-s):this._vertical&&"Down"===t||!this._vertical&&"Right"===t?(o=s,n=i+s):"Home"===t?(o=1,n=0):"End"===t&&(o=-1,n=this.items.length-1),(n=this._getAvailableIndex(n,o,e=>!(e.disabled||this._isItemHidden(e))))>=0&&(this._focus(n),e.preventDefault())}}}_getAvailableIndex(e,t,i){for(var r=this.items.length,n=0;"number"==typeof e&&n<r;n++,e+=t||1){if(e<0?e=r-1:e>=r&&(e=0),i(this.items[e]))return e}return-1}_isItemHidden(e){return"none"===getComputedStyle(e).display}_setFocusable(e){e=this._getAvailableIndex(e,1,e=>!e.disabled);var t=this.items[e]||this.items[0];this.items.forEach(e=>e.tabIndex=e===t?0:-1)}_focus(e){var t=this.items[e];this.items.forEach(e=>e.focused=e===t),this._setFocusable(e),this._scrollToItem(e),t.focus()}focus(){this._observer&&this._observer.flush();var e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);e&&e.focus()}get _scrollerElement(){}_scrollToItem(e){var t=this.items[e];if(t){var i=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],r=this._scrollerElement.getBoundingClientRect(),n=(this.items[e+1]||t).getBoundingClientRect(),o=(this.items[e-1]||t).getBoundingClientRect(),s=0;!this._isRTL&&n[i[1]]>=r[i[1]]||this._isRTL&&n[i[1]]<=r[i[1]]?s=n[i[1]]-r[i[1]]:(!this._isRTL&&o[i[0]]<=r[i[0]]||this._isRTL&&o[i[0]]>=r[i[0]])&&(s=o[i[0]]-r[i[0]]),this._scroll(s)}}get _vertical(){return"horizontal"!==this.orientation}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{var t=n.a.detectScrollType(),i=n.a.getNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement)+e;n.a.setNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement,i)}}}},,,,,,,,,,function(e,t,i){"use strict";i(161),i(135)},,function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var r=i(13),n=i(54),o=i(15),s=i(36),a=i(78),l=i(17),d=i(9),c=i(11),h=Object(a.b)(r.a);class u extends h{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(var e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;for(var e=Object(c.a)(Object(c.a)(this).parentNode),t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){var e=this.template=this.querySelector("template");if(!e){var t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}var i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=Object(n.b)(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(e,t){for(var i,r=this.__instances,n=0;n<r.length&&(i=r[n]);n++)i.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,i){if(Object(l.e)(this.as,t)){var r=e[this.itemsIndexAs];t==this.as&&(this.items[r]=i);var n=Object(l.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${r}`,t);this.notifyPath(n,i)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){var t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){var e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths)for(var t=this.__observePaths,i=0;i<t.length;i++)0===e.indexOf(t[i])&&this.__debounceRender(this.__render,this.delay)}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=o.a.debounce(this.__renderDebouncer,t>0?d.d.after(t):d.c,e.bind(this)),Object(s.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(s.b)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){for(var e=this.items||[],t=new Array(e.length),i=0;i<e.length;i++)t[i]=i;this.__filterFn&&(t=t.filter((t,i,r)=>this.__filterFn(e[t],i,r))),this.__sortFn&&t.sort((t,i)=>this.__sortFn(e[t],e[i]));for(var r=this.__itemsIdxToInstIdx={},n=0,o=Math.min(t.length,this.__limit);n<o;n++){var s=this.__instances[n],a=t[n],l=e[a];r[a]=n,s?(s._setPendingProperty(this.as,l),s._setPendingProperty(this.indexAs,n),s._setPendingProperty(this.itemsIndexAs,a),s._flushProperties()):this.__insertInstance(l,n,a)}for(var d=this.__instances.length-1;d>=n;d--)this.__detachAndRemoveInstance(d)}__detachInstance(e){for(var t=this.__instances[e],i=Object(c.a)(t.root),r=0;r<t.children.length;r++){var n=t.children[r];i.appendChild(n)}return t}__attachInstance(e,t){var i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){var t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,i){var r={};return r[this.as]=e,r[this.indexAs]=t,r[this.itemsIndexAs]=i,new this.__ctor(r)}__insertInstance(e,t,i){var r=this.__pool.pop();r?(r._setPendingProperty(this.as,e),r._setPendingProperty(this.indexAs,t),r._setPendingProperty(this.itemsIndexAs,i),r._flushProperties()):r=this.__stampInstance(e,t,i);var n=this.__instances[t+1],o=n?n.children[0]:this;return Object(c.a)(Object(c.a)(this).parentNode).insertBefore(r.root,o),this.__instances[t]=r,r}_showHideChildren(e){for(var t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){var i=e.slice(6),r=i.indexOf("."),n=r<0?i:i.substring(0,r);if(n==parseInt(n,10)){var o=r<0?"":i.substring(r+1);this.__handleObservedPaths(o);var s=this.__itemsIdxToInstIdx[n],a=this.__instances[s];if(a){var l=this.as+(o?"."+o:"");a._setPendingPropertyOrPath(l,t,!1,!0),a._flushProperties()}return!0}}itemForElement(e){var t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){var t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return Object(n.a)(this.template,e)}}customElements.define(u.is,u)},function(e,t,i){"use strict";i(52),i(42),i(46),i(61);var r=document.createElement("template");r.innerHTML='<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n\n      /* RTL specific styles */\n\n      :host([dir="rtl"]) [part="label"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n      :host([required][dir="rtl"]) [part="label"] {\n        padding-left: 1em;\n        padding-right: 0;\n      }\n\n      :host([dir="rtl"]) [part="label"]::after {\n        right: auto;\n        left: 0;\n      }\n\n      :host([dir="rtl"]) [part="error-message"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content)},,,function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var r=i(13),n=i(44),o=i(19),s=i(71),a=i(23),l=i(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(a.a)(Object(s.a)(Object(o.a)(Object(n.a)(r.a))))){static get template(){return l.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="checkbox"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="checkbox"] {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label>
      <span part="checkbox">
        <input type="checkbox" checked="{{checked::change}}" disabled\$="[[disabled]]" indeterminate="{{indeterminate::change}}" role="presentation" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`}static get is(){return"vaadin-checkbox"}static get version(){return"2.5.0"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super(),this.name}get name(){return this.checked?this._storedName:""}set name(e){this._storedName=e}ready(){super.ready(),this.setAttribute("role","checkbox"),this._nativeCheckbox=this.shadowRoot.querySelector('input[type="checkbox"]'),this.addEventListener("click",this._handleClick.bind(this)),this._addActiveListeners();var e=this.getAttribute("name");e&&(this.name=e),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){var e=this.shadowRoot.querySelector('[part~="label"]'),t=e.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(t)?e.setAttribute("empty",""):e.removeAttribute("empty")}_isAssignedNodesEmpty(e){return 0===e.length||1==e.length&&e[0].nodeType==Node.TEXT_NODE&&""===e[0].textContent.trim()}_checkedChanged(e){this.indeterminate?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",Boolean(e))}_indeterminateChanged(e){e?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",this.checked)}_addActiveListeners(){this._addEventListenerToNode(this,"down",e=>{this.__interactionsAllowed(e)&&this.setAttribute("active","")}),this._addEventListenerToNode(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this.setAttribute("active",""))}),this.addEventListener("keyup",e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this._toggleChecked(),this.removeAttribute("active"),this.indeterminate&&(this.indeterminate=!1))})}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(e){return!this.disabled&&"a"!==e.target.localName}_handleClick(e){this.__interactionsAllowed(e)&&(this.indeterminate?(this.indeterminate=!1,e.preventDefault(),this._toggleChecked()):e.composedPath()[0]!==this._nativeCheckbox&&(e.preventDefault(),this._toggleChecked()))}_toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{composed:!1,bubbles:!0}))}}customElements.define(d.is,d)},function(e,t,i){"use strict";i(52),i(42),i(46),i(61);var r=document.createElement("template");r.innerHTML='<dom-module id="lumo-overlay">\n  <template>\n    <style>\n      :host {\n        top: var(--lumo-space-m);\n        right: var(--lumo-space-m);\n        bottom: var(--lumo-space-m);\n        left: var(--lumo-space-m);\n        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n        /* stylelint-disable-next-line */\n        outline: 0px solid transparent;\n      }\n\n      [part="overlay"] {\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        border-radius: var(--lumo-border-radius-m);\n        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n        color: var(--lumo-body-text-color);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 400;\n        line-height: var(--lumo-line-height-m);\n        letter-spacing: 0;\n        text-transform: none;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      [part="content"] {\n        padding: var(--lumo-space-xs);\n      }\n\n      [part="backdrop"] {\n        background-color: var(--lumo-shade-20pct);\n        animation: 0.2s lumo-overlay-backdrop-enter both;\n        will-change: opacity;\n      }\n\n      @keyframes lumo-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n\n      :host([closing]) [part="backdrop"] {\n        animation: 0.2s lumo-overlay-backdrop-exit both;\n      }\n\n      @keyframes lumo-overlay-backdrop-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes lumo-overlay-dummy-animation {\n        0% { opacity: 1; }\n        100% { opacity: 1; }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content)},,,function(e,t,i){"use strict";var r=i(34),n=i(6),o=n.a`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;o.setAttribute("style","display: none;"),document.head.appendChild(o.content);var s=document.createElement("style");s.textContent="[hidden] { display: none !important; }",document.head.appendChild(s);i(149);var a=i(73),l=i(40);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(a.a)({_template:n.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:r.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(l.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(l.a)(this.root).appendChild(this._img))}})},,function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i(54),n={templatize(e,t){this._templatizerTemplate=e,this.ctor=Object(r.b)(e,this,{mutableData:Boolean(t),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(e){return new this.ctor(e)},modelForElement(e){return Object(r.a)(this._templatizerTemplate,e)}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/},function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var r=i(13),n=i(54),o=i(15),s=i(36),a=i(9),l=i(17),d=i(11);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class c extends r.a{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=o.a.debounce(this.__renderDebouncer,a.c,()=>this.__render()),Object(s.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();var e=Object(d.a)(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(d.a)(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){Object(s.b)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){var e=Object(d.a)(this).parentNode;if(e){if(!this.__ctor){var t=Object(d.a)(this).querySelector("template");if(!t){var i=new MutationObserver(()=>{if(!Object(d.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");i.disconnect(),this.__render()});return i.observe(this,{childList:!0}),!1}this.__ctor=Object(n.b)(t,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(l.g)(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();var r=this.__instance.children;if(r&&r.length)if(Object(d.a)(this).previousSibling!==r[r.length-1])for(var o,s=0;s<r.length&&(o=r[s]);s++)Object(d.a)(e).insertBefore(o,this)}else this.__instance=new this.__ctor,Object(d.a)(e).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){var e=this.__invalidProps;if(e){for(var t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){var e=this.__instance.children;if(e&&e.length){var t=Object(d.a)(e[0]).parentNode;if(t){t=Object(d.a)(t);for(var i,r=0;r<e.length&&(i=e[r]);r++)t.removeChild(i)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){var e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(c.is,c)},function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var r,n=i(78);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/r=n.a._mutablePropertyChange;var o={properties:{mutableData:Boolean},_shouldPropertyChange(e,t,i){return r(this,e,t,i,this.mutableData)}}},function(e,t,i){"use strict";i(52),i(46);var r=i(6).a`<dom-module id="lumo-checkbox" theme-for="vaadin-checkbox">
  <template>
    <style include="lumo-checkbox-style lumo-checkbox-effects">
      /* IE11 only */
      ::-ms-backdrop,
      [part="checkbox"] {
        line-height: 1;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-style">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        outline: none;
      }

      [part="label"]:not([empty]) {
        margin: 0.1875em 0.875em 0.1875em 0.375em;
      }

      [part="checkbox"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: var(--lumo-border-radius-s);
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        line-height: 1.2;
      }

      :host([indeterminate]) [part="checkbox"],
      :host([checked]) [part="checkbox"] {
        background-color: var(--lumo-primary-color);
      }

      /* Needed to align the checkbox nicely on the baseline */
      [part="checkbox"]::before {
        content: "\\2003";
      }

      /* Checkmark */
      [part="checkbox"]::after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border: 0 solid var(--lumo-primary-contrast-color);
        border-width: 0.1875em 0 0 0.1875em;
        box-sizing: border-box;
        transform-origin: 0 0;
        position: absolute;
        top: 0.8125em;
        left: 0.5em;
        transform: scale(0.55) rotate(-135deg);
        opacity: 0;
      }

      :host([checked]) [part="checkbox"]::after {
        opacity: 1;
        width: 0.625em;
        height: 1.0625em;
      }

      /* Indeterminate checkmark */

      :host([indeterminate]) [part="checkbox"]::after {
        transform: none;
        opacity: 1;
        top: 45%;
        height: 10%;
        left: 22%;
        right: 22%;
        width: auto;
        border: 0;
        background-color: var(--lumo-primary-contrast-color);
        transition: opacity 0.25s;
      }

      /* Focus ring */

      :host([focus-ring]) [part="checkbox"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) [part="label"] ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="checkbox"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="checkbox"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      :host([indeterminate][disabled]) [part="checkbox"]::after {
        background-color: var(--lumo-contrast-30pct);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="label"]:not([empty]) {
        margin: 0.1875em 0.375em 0.1875em 0.875em;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-effects">
  <template>
    <style>
      /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
      :host(:hover) [part="checkbox"]::after {
        transition: width 0.1s, height 0.25s;
      }

      /* Used for activation "halo" */
      [part="checkbox"]::before {
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
      }

      /* Hover */

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
        background-color: var(--lumo-contrast-30pct);
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      /* Active */

      :host([active]) [part="checkbox"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="checkbox"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="checkbox"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content)},function(e,t,i){"use strict";i(34);var r=i(9),n=i(30),o=i(85),s=i(13);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class a extends(Object(o.a)(s.a)){static get is(){return"vaadin-grid-column-group"}static get properties(){return{_childColumns:{value:function(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_updateVisibleChildColumns(_childColumns)","_childColumnsChanged(_childColumns)","_groupFrozenChanged(frozen, _rootColumns)","_groupHiddenChanged(hidden, _rootColumns)","_visibleChildColumnsChanged(_visibleChildColumns)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(e,t){"hidden"===e&&(this._preventHiddenCascade=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenCascade=!1),/flexGrow|width|hidden|_childColumns/.test(e)&&this._updateFlexAndWidth(),"frozen"===e&&(this.frozen=this.frozen||t),"lastFrozen"===e&&(this._lastFrozen=this._lastFrozen||t)}_groupOrderChanged(e,t){if(t){var i=t.slice(0);if(!e)return void i.forEach(e=>e._order=0);var r=/(0+)$/.exec(e).pop().length,n=1+~~(Math.log(t.length)/Math.log(Math.LN10)),o=Math.pow(10,r-n);i[0]&&i[0]._order&&i.sort((e,t)=>e._order-t._order),i.forEach((t,i)=>t._order=e+(i+1)*o)}}_groupReorderStatusChanged(e,t){void 0!==e&&void 0!==t&&t.forEach(t=>t._reorderStatus=e)}_groupResizableChanged(e,t){void 0!==e&&void 0!==t&&t.forEach(t=>t.resizable=e)}_updateVisibleChildColumns(e){this._visibleChildColumns=Array.prototype.filter.call(e,e=>!e.hidden)}_childColumnsChanged(e){!this._autoHidden&&this.hidden&&(Array.prototype.forEach.call(e,e=>e.hidden=!0),this._updateVisibleChildColumns(e))}_updateFlexAndWidth(){this._visibleChildColumns&&(this._visibleChildColumns.length?this._setWidth("calc("+Array.prototype.reduce.call(this._visibleChildColumns,(e,t)=>e+" + "+(t.width||"0px").replace("calc",""),"").substring(3)+")"):this._setWidth("0px"),this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,(e,t)=>e+t.flexGrow,0)))}_groupFrozenChanged(e,t){void 0!==t&&void 0!==e&&!1!==e&&Array.from(t).forEach(t=>t.frozen=e)}_groupHiddenChanged(e,t){t&&!this._preventHiddenCascade&&(this._ignoreVisibleChildColumns=!0,t.forEach(t=>t.hidden=e),this._ignoreVisibleChildColumns=!1),this._columnPropChanged("hidden")}_visibleChildColumnsChanged(e){this._colSpan=e.length,this._ignoreVisibleChildColumns||(0===e.length?this._autoHidden=this.hidden=!0:this.hidden&&this._autoHidden&&(this._autoHidden=this.hidden=!1))}_colSpanChanged(e,t,i){t&&(t.setAttribute("colspan",e),this._grid&&this._grid._a11yUpdateCellColspan(t,e)),i&&(i.setAttribute("colspan",e),this._grid&&this._grid._a11yUpdateCellColspan(i,e))}_getChildColumns(e){return n.a.getFlattenedNodes(e).filter(this._isColumnElement)}_addNodeObserver(){this._observer=new n.a(this,e=>{(e.addedNodes.filter(this._isColumnElement).length>0||e.removedNodes.filter(this._isColumnElement).length>0)&&(this._preventHiddenCascade=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._preventHiddenCascade=!1,r.c.run(()=>{this._grid&&this._grid._updateColumnTree&&this._grid._updateColumnTree()}))}),this._observer.flush()}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}}customElements.define(a.is,a)},function(e,t,i){"use strict";i(34),i(69);var r=i(19),n=i(63),o=i(6),s=i(13),a=document.createElement("template");a.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: 'vaadin-grid-sorter-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(a.content);class l extends(Object(r.a)(Object(n.a)(s.a))){static get template(){return o.a`
    <style>
      :host {
        display: inline-flex;
        cursor: pointer;
        max-width: 100%;
      }

      [part="content"] {
        flex: 1 1 auto;
      }

      [part="indicators"] {
        position: relative;
        align-self: center;
        flex: none;
      }

      [part="order"] {
        display: inline;
        vertical-align: super;
      }

      [part="indicators"]::before {
        font-family: 'vaadin-grid-sorter-icons';
        display: inline-block;
      }

      :host(:not([direction])) [part="indicators"]::before {
        content: "\\e901";
      }

      :host([direction=asc]) [part="indicators"]::before {
        content: "\\e900";
      }

      :host([direction=desc]) [part="indicators"]::before {
        content: "\\e902";
      }
    </style>

    <div part="content">
      <slot></slot>
    </div>
    <div part="indicators">
      <span part="order">[[_getDisplayOrder(_order)]]</span>
    </div>
`}static get is(){return"vaadin-grid-sorter"}static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,value:!1}}}static get observers(){return["_pathOrDirectionChanged(path, direction, _isConnected)","_directionOrOrderChanged(direction, _order)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1}_pathOrDirectionChanged(e,t,i){void 0!==e&&void 0!==t&&void 0!==i&&i&&this.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))}_getDisplayOrder(e){return null===e?"":e+1}_onClick(e){var t=this.getRootNode().activeElement;this!==t&&this.contains(t)||(e.preventDefault(),"asc"===this.direction?this.direction="desc":"desc"===this.direction?this.direction=null:this.direction="asc")}_directionOrOrderChanged(e,t){void 0!==e&&void 0!==t&&(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root&&this.root.querySelectorAll("*").forEach((function(e){e.style["-webkit-backface-visibility"]="visible",e.style["-webkit-backface-visibility"]=""})))}}customElements.define(l.is,l)},function(e,t,i){"use strict";i(52),i(81),i(58),i(42),i(46),i(61),i(139),i(198),i(141)},function(e,t,i){"use strict";i(52),i(81),i(58),i(42),i(46),i(61),i(139);var r=i(6).a`<dom-module id="lumo-grid" theme-for="vaadin-grid">
  <template>
    <style>
      :host {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
        box-sizing: border-box;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        /* For internal use only */
        --_lumo-grid-border-color: var(--lumo-contrast-20pct);
        --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
        --_lumo-grid-border-width: 1px;
        --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
      }

      /* No (outer) border */

      :host(:not([theme~="no-border"])) {
        border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
      }

      /* Cell styles */

      [part~="cell"] {
        min-height: var(--lumo-size-m);
        background-color: var(--lumo-base-color);
      }

      [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        cursor: default;
        padding: var(--lumo-space-xs) var(--lumo-space-m);
      }

      /* Apply row borders by default and introduce the "no-row-borders" variant */
      :host(:not([theme~="no-row-borders"])) [part~="cell"]:not([part~="details-cell"]) {
        border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Hide first body row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        border-top: 0;
        min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
      }

      /* Focus-ring */

      [part~="cell"]:focus {
        outline: none;
      }

      :host([navigating]) [part~="cell"]:focus::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Drag and Drop styles */
      :host([dragover])::after {
        content: "";
        position: absolute;
        z-index: 100;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      [part~="row"][dragover] {
        z-index: 100 !important;
      }

      [part~="row"][dragover] [part~="cell"] {
        overflow: visible;
      }

      [part~="row"][dragover] [part~="cell"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: calc(var(--_lumo-grid-border-width) + 2px);
        pointer-events: none;
        background: var(--lumo-primary-color-50pct);
      }

      :host([theme~="no-row-borders"]) [dragover] [part~="cell"]::after {
        height: 2px;
      }

      [part~="row"][dragover="below"] [part~="cell"]::after {
        top: 100%;
        bottom: auto;
        margin-top: -1px;
      }

      [part~="row"][dragover="above"] [part~="cell"]::after {
        top: auto;
        bottom: 100%;
        margin-bottom: -1px;
      }

      [part~="row"][details-opened][dragover="below"] [part~="cell"]:not([part~="details-cell"])::after,
      [part~="row"][details-opened][dragover="above"] [part~="details-cell"]::after {
        display: none;
      }

      [part~="row"][dragover][dragover="on-top"] [part~="cell"]::after {
        height: 100%;
      }

      [part~="row"][dragstart] {
        /* Add bottom-space to the row so the drag number doesn't get clipped. Needed for IE/Edge */
        border-bottom: 100px solid transparent;
        z-index: 100 !important;
        opacity: 0.9;
      }

      [part~="row"][dragstart] [part~="cell"] {
        border: none !important;
        box-shadow: none !important;
      }

      [part~="row"][dragstart] [part~="cell"][last-column] {
        border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      }

      [part~="row"][dragstart] [part~="cell"][first-column] {
        border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      }

      [ios] [part~="row"][dragstart] [part~="cell"] {
        background: var(--lumo-primary-color-50pct);
      }

      #scroller:not([ios]) [part~="row"][dragstart]:not([dragstart=""])::after {
        display: block;
        position: absolute;
        left: var(--_grid-drag-start-x);
        top: var(--_grid-drag-start-y);
        z-index: 100;
        content: attr(dragstart);
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: calc(var(--lumo-space-xs) * 0.8);
        color: var(--lumo-error-contrast-color);
        background-color: var(--lumo-error-color);
        border-radius: var(--lumo-border-radius-m);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
        font-weight: 500;
        text-transform: initial;
        letter-spacing: initial;
        min-width: calc(var(--lumo-size-s) * 0.7);
        text-align: center;
      }

      /* Headers and footers */

      [part~="header-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="reorder-ghost"] {
        font-size: var(--lumo-font-size-s);
        font-weight: 500;
      }

      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content) {
        font-weight: 400;
      }

      [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-xl);
      }

      /* Header borders */

      /* Hide first header row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="header-cell"] {
        border-top: 0;
      }

      [part="row"]:last-child [part~="header-cell"] {
        border-bottom: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="top"]) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-border-color);
      }

      /* Footer borders */

      [part="row"]:first-child [part~="footer-cell"] {
        border-top: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="bottom"]) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-border-color);
      }

      /* Column reordering */

      :host([reordering]) [part~="cell"] {
        background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="allowed"] {
        background: var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="dragging"] {
        background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
      }

      [part~="reorder-ghost"] {
        opacity: 0.85;
        box-shadow: var(--lumo-box-shadow-s);
        /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
        padding: var(--lumo-space-s) var(--lumo-space-m) !important;
      }

      /* Column resizing */

      [part="resize-handle"] {
        width: 3px;
        background-color: var(--lumo-primary-color-50pct);
        opacity: 0;
        transition: opacity 0.2s;
      }

      :host(:not([reordering])) *:not([column-resizing]) [part~="cell"]:hover [part="resize-handle"],
      [part="resize-handle"]:active {
        opacity: 1;
        transition-delay: 0.15s;
      }

      /* Column borders */

      :host([theme~="column-borders"]) [part~="cell"]:not([last-column]):not([part~="details-cell"]) {
        border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Frozen columns */

      [last-frozen] {
        border-right: var(--_lumo-grid-border-width) solid transparent;
        overflow: hidden;
      }

      :host([overflow~="left"]) [part~="cell"][last-frozen]:not([part~="details-cell"]) {
        border-right-color: var(--_lumo-grid-border-color);
      }

      /* Row stripes */

      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="body-cell"],
      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="details-cell"] {
        background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
        background-repeat: repeat-x;
      }

      /* Selected row */

      /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
      :host(:not([reordering])) [part~="row"][selected] {
        z-index: 1;
      }

      :host(:not([reordering])) [part~="row"][selected] [part~="body-cell"]:not([part~="details-cell"]) {
        background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
        background-repeat: repeat;
      }

      /* Cover the border of an unselected row */
      :host(:not([theme~="no-row-borders"])) [part~="row"][selected] [part~="cell"]:not([part~="details-cell"]) {
        box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
      }

      /* Compact */

      :host([theme~="compact"]) [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-m);
      }

      :host([theme~="compact"]) [part~="cell"] {
        min-height: var(--lumo-size-s);
      }

      :host([theme~="compact"]) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
      }

      :host([theme~="compact"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        padding: var(--lumo-space-xs) var(--lumo-space-s);
      }

      /* Wrap cell contents */

      :host([theme~="wrap-cell-content"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        white-space: normal;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part~="row"][dragstart] [part~="cell"][last-column] {
        border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      }

      :host([dir="rtl"]) [part~="row"][dragstart] [part~="cell"][first-column] {
        border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      }

      :host([dir="rtl"][theme~="column-borders"]) [part~="cell"]:not([last-column]):not([part~="details-cell"]) {
        border-right: none;
        border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      :host([dir="rtl"]) [last-frozen] {
        border-right: none;
        border-left: var(--_lumo-grid-border-width) solid transparent;
      }

      :host([dir="rtl"][overflow~="right"]) [part~="cell"][last-frozen]:not([part~="details-cell"]) {
        border-left-color: var(--_lumo-grid-border-color);
      }
    </style>
  </template>
</dom-module><dom-module theme-for="vaadin-checkbox" id="vaadin-grid-select-all-checkbox-lumo">
  <template>
    <style>
      :host(.vaadin-grid-select-all-checkbox) {
        font-size: var(--lumo-font-size-m);
      }
   </style>
  </template>
</dom-module>`;document.head.appendChild(r.content)},function(e,t,i){"use strict";i(34);var r=i(149),n=i(73),o=i(40);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(n.a)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new r.a({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(e){return this.name+":"+e}),this)},applyIcon:function(e,t){this.removeIcon(e);var i=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(i){var r=Object(o.a)(e.root||e);return r.insertBefore(i,r.childNodes[0]),e._svgIcon=i}return null},removeIcon:function(e){e._svgIcon&&(Object(o.a)(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var e=Object.create(null);return Object(o.a)(this).querySelectorAll("[id]").forEach((function(t){e[t.id]=t})),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,i){if(e){var r=e.cloneNode(!0),n=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=r.getAttribute("viewBox")||"0 0 "+t+" "+t,s="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&r.hasAttribute("mirror-in-rtl")&&(s+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),n.setAttribute("viewBox",o),n.setAttribute("preserveAspectRatio","xMidYMid meet"),n.setAttribute("focusable","false"),n.style.cssText=s,n.appendChild(r).removeAttribute("id"),n}return null}})},function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i(13),i(69);var r,n=i(107),o=i(48),s=i(6).a`<dom-module id="vaadin-number-field-template">
  <template>
    <style>
      :host([readonly]) [part\$="button"] {
        pointer-events: none;
      }

      [part="decrease-button"]::before {
        content: "−";
      }

      [part="increase-button"]::before {
        content: "+";
      }

      [part="decrease-button"],
      [part="increase-button"] {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      /* Hide the native arrow icons */
      [part="value"]::-webkit-outer-spin-button,
      [part="value"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      [part="value"] {
        /* Older Firefox versions (v47.0) requires !important */
        -moz-appearance: textfield !important;
      }

      :host([dir="rtl"]) [part="input-field"] {
        direction: ltr;
      }

      :host([dir="rtl"]) [part="value"]::placeholder {
        direction: rtl;
      }

      :host([dir="rtl"]) [part="input-field"] ::slotted(input)::placeholder {
        direction: rtl;
      }

      :host([dir="rtl"]) [part="value"]:-ms-input-placeholder,
      :host([dir="rtl"]) [part="input-field"] ::slotted(input):-ms-input-placeholder {
        direction: rtl;
      }

      :host([dir="rtl"]:not([has-controls])) [part="value"]::placeholder {
        text-align: left;
      }

      :host([dir="rtl"]:not([has-controls])) [part="input-field"] ::slotted(input)::placeholder {
        text-align: left;
      }

      :host([dir="rtl"]:not([has-controls])) [part="value"]:-ms-input-placeholder,
      :host([dir="rtl"]:not([has-controls])) [part="input-field"] ::slotted(input):-ms-input-placeholder {
        text-align: left;
      }
    </style>

    <div disabled\$="[[!_allowed(-1, value, min, max, step)]]" part="decrease-button" on-click="_decreaseValue" on-touchend="_decreaseButtonTouchend" hidden\$="[[!hasControls]]">
    </div>

    <div disabled\$="[[!_allowed(1, value, min, max, step)]]" part="increase-button" on-click="_increaseValue" on-touchend="_increaseButtonTouchend" hidden\$="[[!hasControls]]">
    </div>
  </template>

  
</dom-module>`;document.head.appendChild(s.content);class a extends n.a{static get is(){return"vaadin-number-field"}static get version(){return"2.8.4"}static get properties(){return{hasControls:{type:Boolean,value:!1,reflectToAttribute:!0},min:{type:Number,reflectToAttribute:!0,observer:"_minChanged"},max:{type:Number,reflectToAttribute:!0,observer:"_maxChanged"},step:{type:Number,value:1,observer:"_stepChanged"}}}ready(){super.ready(),this.__previousValidInput=this.value||"",this.inputElement.type="number",this.inputElement.addEventListener("change",this.__onInputChange.bind(this))}_decreaseButtonTouchend(e){e.preventDefault(),this._decreaseValue()}_increaseButtonTouchend(e){e.preventDefault(),this._increaseValue()}static get template(){if(!r){r=super.template.cloneNode(!0);var e=o.a.import(this.is+"-template","template"),t=e.content.querySelector('[part="decrease-button"]'),i=e.content.querySelector('[part="increase-button"]'),n=e.content.querySelector("style"),s=r.content.querySelector('[part="input-field"]'),a=r.content.querySelector('[name="prefix"]');s.insertBefore(t,a),s.appendChild(i),r.content.appendChild(n)}return r}_createConstraintsObserver(){this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern, min, max, step)")}_constraintsChanged(e,t,i,r,n,o,s){if(this.invalid){var a=e=>!e&&0!==e;a(n)&&a(o)?super._constraintsChanged(e,t,i,r):this.validate()}}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(e){if(!this.disabled&&!this.readonly){var t=parseFloat(this.value);this.value?t<this.min?(e=0,t=this.min):t>this.max&&(e=0,t=this.max):0==this.min&&e<0||0==this.max&&e>0||0==this.max&&0==this.min?(e=0,t=0):(null==this.max||this.max>=0)&&(null==this.min||this.min<=0)?t=0:this.min>0?(t=this.min,this.max<0&&e<0&&(t=this.max),e=0):this.max<0&&(t=this.max,e<0?e=0:this._getIncrement(1,t-this.step)>this.max?t-=2*this.step:t-=this.step);var i=this._getIncrement(e,t);this.value&&0!=e&&!this._incrementIsInsideTheLimits(e,t)||this._setValue(i)}}_setValue(e){this.value=this.inputElement.value=String(parseFloat(e)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(e,t){var i=this.step||1,r=this.min||0,n=Math.max(this._getMultiplier(t),this._getMultiplier(i),this._getMultiplier(r));i*=n;var o=((t=Math.round(t*n))-(r*=n))%i;return e>0?(t-o+i)/n:e<0?(t-(o||i))/n:t/n}_getDecimalCount(e){var t=String(e),i=t.indexOf(".");return-1===i?1:t.length-i-1}_getMultiplier(e){if(!isNaN(e))return Math.pow(10,this._getDecimalCount(e))}_incrementIsInsideTheLimits(e,t){return e<0?null==this.min||this._getIncrement(e,t)>=this.min:e>0?null==this.max||this._getIncrement(e,t)<=this.max:this._getIncrement(e,t)<=this.max&&this._getIncrement(e,t)>=this.min}_allowed(e){var t=e*(this.step||1),i=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(t,i)}_stepChanged(e,t){this.__validateByStep=this.__stepChangedCalled||null!==this.getAttribute("step"),this.inputElement.step=this.__validateByStep?e:"any",this.__stepChangedCalled=!0,this.setAttribute("step",e)}_minChanged(e){this.inputElement.min=e}_maxChanged(e){this.inputElement.max=e}_valueChanged(e,t){e&&isNaN(parseFloat(e))?this.value="":"string"!=typeof this.value&&(this.value=String(this.value)),super._valueChanged(this.value,t)}_onKeyDown(e){38==e.keyCode?(e.preventDefault(),this._increaseValue()):40==e.keyCode&&(e.preventDefault(),this._decreaseValue()),super._onKeyDown(e)}__onInputChange(){this.validate()}checkValidity(){return void 0!==this.min||void 0!==this.max||this.__validateByStep?this.inputElement.checkValidity():super.checkValidity()}}window.customElements.define(a.is,a)},,,,,,,,,,,,,function(e,t,i){"use strict";i.d(t,"a",(function(){return g}));var r=i(13),n=(i(69),i(19)),o=(i(97),i(71)),s=i(103),a=(i(153),i(23)),l=(i(48),i(119)),d=document.createElement("template");d.innerHTML='<dom-module id="vaadin-select-overlay-styles" theme-for="vaadin-select-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(d.content);class c extends l.a{static get is(){return"vaadin-select-overlay"}}customElements.define(c.is,c);var h,u=i(107);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class p extends u.a{static get is(){return"vaadin-select-text-field"}static get template(){if(super.template.content.querySelector('slot[name="input"]'))return super.template;if(!h){h=super.template.cloneNode(!0);var e=document.createElement("slot");e.setAttribute("name","value");var t=h.content.querySelector("input");t.parentElement.replaceChild(e,t),e.appendChild(t)}return h}get focusElement(){return this.shadowRoot.querySelector("[part=input-field]")}get inputElement(){return this.shadowRoot.querySelector("input")}}customElements.define(p.is,p);var m=i(6),_=i(30),f=i(83),v=document.createElement("template");v.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: \"vaadin-select-icons\";\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAASEAAsAAAAABDgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIGKmNtYXAAAAFoAAAAVAAAAFQXVtKHZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAHwAAAB8CohkJ2hlYWQAAAJAAAAANgAAADYOavgEaGhlYQAAAngAAAAkAAAAJAarA8ZobXR4AAACnAAAABQAAAAUCAABP2xvY2EAAAKwAAAADAAAAAwAKABSbWF4cAAAArwAAAAgAAAAIAAHABduYW1lAAAC3AAAAYYAAAGGmUoJ+3Bvc3QAAARkAAAAIAAAACAAAwAAAAMEAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QADwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkA//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQE/AUAC6QIVABQAAAEwFx4BFxYxMDc+ATc2MTAjKgEjIgE/ISJPIiEhIk8iIUNCoEJDAhUhIk8iISEiTyIhAAEAAAABAABvL5bdXw889QALBAAAAAAA1jHaeQAAAADWMdp5AAAAAALpAhUAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAukAAQAAAAAAAAAAAAAAAAAAAAUEAAAAAAAAAAAAAAAAAAAABAABPwAAAAAACgAUAB4APgABAAAABQAVAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(v.content);class g extends(Object(a.a)(Object(o.a)(Object(n.a)(Object(f.b)(s.a,r.a))))){static get template(){return m.a`
    <style>
      :host {
        display: inline-block;
      }

      vaadin-select-text-field {
        width: 100%;
        min-width: 0;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="toggle-button"] {
        font-family: "vaadin-select-icons";
      }

      [part="toggle-button"]::before {
        content: "\\e900";
      }
    </style>

    <vaadin-select-text-field placeholder="[[placeholder]]" label="[[label]]" required="[[required]]" invalid="[[invalid]]" error-message="[[errorMessage]]" readonly\$="[[readonly]]" helper-text="[[helperText]]" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <slot name="helper" slot="helper">[[helperText]]</slot>
      <div part="value"></div>
      <div part="toggle-button" slot="suffix" role="button" aria-haspopup="listbox" aria-label="Toggle"></div>
    </vaadin-select-text-field>
    <vaadin-select-overlay opened="{{opened}}" with-backdrop="[[_phone]]" phone\$="[[_phone]]" theme\$="[[theme]]"></vaadin-select-overlay>

    <iron-media-query query="[[_phoneMediaQuery]]" query-matches="{{_phone}}"></iron-media-query>
`}static get is(){return"vaadin-select"}static get version(){return"2.4.0"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:Function,errorMessage:{type:String,value:""},label:{type:String},value:{type:String,value:"",notify:!0,observer:"_valueChanged"},required:{type:Boolean,reflectToAttribute:!0,observer:"_requiredChanged"},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String},helperText:{type:String,value:""},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_overlayElement:Object,_inputElement:Object,_toggleElement:Object,_items:Object,_contentTemplate:Object,_oldTemplate:Object,_oldRenderer:Object}}static get observers(){return["_updateSelectedItem(value, _items)","_updateAriaExpanded(opened, _toggleElement, _inputElement)","_templateOrRendererChanged(_contentTemplate, renderer, _overlayElement)"]}constructor(){super(),this._boundSetPosition=this._setPosition.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("iron-resize",this._boundSetPosition)}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay"),this._valueElement=this.shadowRoot.querySelector('[part="value"]'),this._toggleElement=this.shadowRoot.querySelector('[part="toggle-button"]'),this._nativeInput=this.focusElement.shadowRoot.querySelector("input"),this._nativeInput.setAttribute("aria-hidden",!0),this._nativeInput.setAttribute("tabindex",-1),this._nativeInput.style.pointerEvents="none",this.focusElement.addEventListener("click",e=>this.opened=!this.readonly),this.focusElement.addEventListener("keydown",e=>this._onKeyDown(e)),this._observer=new _.a(this,e=>this._setTemplateFromNodes(e.addedNodes)),this._observer.flush()}_setTemplateFromNodes(e){var t=Array.from(e).filter(e=>e.localName&&"template"===e.localName)[0]||this._contentTemplate;this._overlayElement.template=this._contentTemplate=t,this._setForwardHostProps()}_setForwardHostProps(){if(this._overlayElement.content){var e=this._overlayElement._instance&&this._overlayElement._instance.forwardHostProp;this._overlayElement._instance&&(this._overlayElement._instance.forwardHostProp=(...t)=>{e.apply(this._overlayElement._instance,t),setTimeout(()=>{this._updateValueSlot()})},this._assignMenuElement())}}render(){this._overlayElement.render(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items)}_removeNewRendererOrTemplate(e,t,i,r){e!==t?this._contentTemplate=void 0:i!==r&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,i){if(i){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for select content");this._oldTemplate=e,this._oldRenderer=t,t&&(i.setProperties({owner:this,renderer:t}),this.render(),i.content.firstChild&&this._assignMenuElement())}}_assignMenuElement(){this._menuElement=Array.from(this._overlayElement.content.children).filter(e=>"style"!==e.localName)[0],this._menuElement&&(this._menuElement.addEventListener("items-changed",e=>{this._items=this._menuElement.items,this._items.forEach(e=>e.setAttribute("role","option"))}),this._menuElement.addEventListener("selected-changed",e=>this._updateValueSlot()),this._menuElement.addEventListener("keydown",e=>this._onKeyDownInside(e)),this._menuElement.addEventListener("click",e=>{this.__userInteraction=!0,this.opened=!1},!0),this._menuElement.setAttribute("role","listbox"))}get focusElement(){return this._inputElement||(this._inputElement=this.shadowRoot.querySelector("vaadin-select-text-field"))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("iron-resize",this._boundSetPosition),this.opened=!1}notifyResize(){super.notifyResize(),this.positionTarget&&this.opened&&(this._setPosition(),requestAnimationFrame(this._setPosition.bind(this)))}_requiredChanged(e){this.setAttribute("aria-required",e)}_valueChanged(e,t){""===e?this.focusElement.removeAttribute("has-value"):this.focusElement.setAttribute("has-value",""),""===e&&void 0===t||this.validate()}_onKeyDown(e){if(!this.readonly&&!this.opened)if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(e.key))e.preventDefault(),this.opened=!0;else if(/[a-zA-Z0-9]/.test(e.key)&&1===e.key.length){var t=this._menuElement.selected,i=void 0!==t?t:-1,r=this._menuElement._searchKey(i,e.key);r>=0&&(this.__userInteraction=!0,this._updateSelectedItem(this._items[r].value,this._items))}}_onKeyDownInside(e){/^(Tab)$/.test(e.key)&&(this.opened=!1)}_openedChanged(e,t){if(e){if(!this._overlayElement||!this._menuElement||!this._toggleElement||!this.focusElement||this.disabled||this.readonly)return void(this.opened=!1);this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement.hasAttribute("focus-ring"),this._menuElement.focus(),this._setPosition(),window.addEventListener("scroll",this._boundSetPosition,!0)}else t&&(this._phone?this._setFocused(!1):(this.focusElement.focus(),this._openedWithFocusRing&&this.focusElement.setAttribute("focus-ring","")),this.validate(),window.removeEventListener("scroll",this._boundSetPosition,!0))}_hasContent(e){return!!e&&Boolean(e.hasAttribute("label")?e.getAttribute("label"):e.textContent.trim()||e.children.length)}_attachSelectedItem(e){var t;e&&(e.hasAttribute("label")?(t=document.createElement("vaadin-item")).textContent=e.getAttribute("label"):t=e.cloneNode(!0),t._sourceItem=e,t.removeAttribute("tabindex"),t.removeAttribute("role"),this._valueElement.appendChild(t),t.selected=!0)}_updateAriaExpanded(e,t,i){t&&t.setAttribute("aria-expanded",e),i&&i.focusElement&&i.focusElement.setAttribute("aria-expanded",e)}_updateValueSlot(){this.opened=!1,this._valueElement.innerHTML="";var e=this._items[this._menuElement.selected],t=this._hasContent(e),i=this._inputElement.shadowRoot.querySelector('slot[name="input"]')?"input":"value";this._valueElement.slot=t?i:"",t&&window.ShadyDOM&&window.ShadyDOM.flush(),this._attachSelectedItem(e),!this._valueChanging&&e&&(this._selectedChanging=!0,this.value=e.value||"",this.__userInteraction&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__userInteraction=!1),delete this._selectedChanging)}_updateSelectedItem(e,t){t&&(this._menuElement.selected=t.reduce((t,i,r)=>void 0===t&&i.value===e?r:t,void 0),this._selectedChanging||(this._valueChanging=!0,this._updateValueSlot(),delete this._valueChanging))}_setFocused(e){super._setFocused(this.opened||e),this.focusElement._setFocused(this.hasAttribute("focused")),!this.hasAttribute("focused")&&this.validate()}_setPosition(){var e=this._inputElement.shadowRoot.querySelector('[part~="input-field"]').getBoundingClientRect(),t=Math.min(window.innerHeight,document.documentElement.clientHeight),i=e.top>(t-e.height)/2;"rtl"===this.getAttribute("dir")?this._overlayElement.style.right=document.documentElement.clientWidth-e.right+"px":this._overlayElement.style.left=e.left+"px",i?(this._overlayElement.setAttribute("bottom-aligned",""),this._overlayElement.style.removeProperty("top"),this._overlayElement.style.bottom=t-e.bottom+"px"):(this._overlayElement.removeAttribute("bottom-aligned"),this._overlayElement.style.removeProperty("bottom"),this._overlayElement.style.top=e.top+"px"),this._overlayElement.updateStyles({"--vaadin-select-text-field-width":e.width+"px"})}validate(){return!(this.invalid=!(this.disabled||!this.required||this.value))}}customElements.define(g.is,g)},,function(e,t,i){"use strict";i(52);var r=i(6).a`<dom-module id="lumo-grid-sorter" theme-for="vaadin-grid-sorter">
  <template>
    <style>
      :host {
        justify-content: flex-start;
        align-items: baseline;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="content"] {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      [part="indicators"] {
        margin-left: var(--lumo-space-s);
      }

      :host(:not([direction])) [part="indicators"]::before {
        opacity: 0.2;
      }

      :host([direction]) {
        color: var(--lumo-primary-text-color);
      }

      [part="order"] {
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="indicators"] {
        margin-right: var(--lumo-space-s);
        margin-left: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);i(196)},function(e,t,i){"use strict";i(58),i(42),i(46),i(81),i(157),i(137),i(117),i(155),i(159);var r=i(6).a`<dom-module id="lumo-select" theme-for="vaadin-select">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }

      [selected] {
        padding-left: 0;
        padding-right: 0;
        flex: auto;
      }

      :host([theme~="small"]) [selected] {
        padding: 0;
        min-height: var(--lumo-size-s);
      }

      :host([theme~="align-left"]) [selected] {
        text-align: left;
      }

      :host([theme~="align-right"]) [selected] {
        text-align: right;
      }

      :host([theme~="align-center"]) [selected] {
        text-align: center;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-dropdown);
      }

      /* Highlight the toggle button when hovering over the entire component */
      :host(:hover:not([readonly]):not([disabled])) [part="toggle-button"] {
        color: var(--lumo-contrast-80pct);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-select-text-field" theme-for="vaadin-select-text-field">
  <template>
    <style>
      :host([theme~="align-center"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }

      :host([theme~="align-center"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }

      [part="input-field"] {
        cursor: default;
      }

      [part="input-field"] ::slotted([part="value"]) {
        display: flex;
      }

      /* ShadyCSS limitation workaround */
      [part="input-field"] ::slotted([part="value"]) [selected]::before {
        display: none;
      }

      [part="input-field"]:focus {
        outline: none;
      }

      /* RTL specific styles */

      :host([theme~="align-left"][dir="rtl"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }

      :host([theme~="align-center"][dir="rtl"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([dir="rtl"]) ::slotted([part~="value"]),
      :host([theme~="align-right"][dir="rtl"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-select-overlay" theme-for="vaadin-select-overlay">
  <template>
    <style include="lumo-menu-overlay">
      :host {
        --_lumo-item-selected-icon-display: block;
      }

      :host([bottom-aligned]) {
        justify-content: flex-end;
      }

      [part~="overlay"] {
        min-width: var(--vaadin-select-text-field-width);
      }

      /* Small viewport adjustment */
      :host([phone]) {
        top: 0 !important;
        right: 0 !important;
        bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
        left: 0 !important;
        align-items: stretch;
        justify-content: flex-end;
      }

      :host([theme~="align-left"]) {
        text-align: left;
      }

      :host([theme~="align-right"]) {
        text-align: right;
      }

      :host([theme~="align-center"]) {
        text-align: center;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);i(213)},function(e,t,i){"use strict";i(81),i(58),i(137);var r=i(6).a`<dom-module id="lumo-number-field" theme-for="vaadin-number-field">
  <template>
    <style include="lumo-field-button">
      :host {
        width: 8em;
      }

      :host([has-controls]:not([theme~="align-right"])) [part="value"] {
        text-align: center;
      }

      [part="decrease-button"][disabled],
      [part="increase-button"][disabled] {
        opacity: 0.2;
      }

      :host([has-controls]) [part="input-field"] {
        padding: 0;
      }

      [part="decrease-button"],
      [part="increase-button"] {
        cursor: pointer;
        font-size: var(--lumo-icon-size-s);
        width: 1.6em;
        height: 1.6em;
      }

      [part="decrease-button"]::before,
      [part="increase-button"]::before {
        margin-top: 0.2em;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);i(117),i(200)},,,,function(e,t){window.Vaadin.Flow.menubarConnector={initLazy:function(e){var t;e.$connector||(e.$connector={updateButtons:(t=function(){e.shadowRoot?(e.items.forEach(e=>e.disabled=e.component.disabled),e.items=e.items.filter(e=>!e.component.hidden),e._buttons.forEach(e=>{e.item&&e.item.component&&e.addEventListener("click",t=>{-1===t.composedPath().indexOf(e.item.component)&&e.item.component.click()})})):setTimeout(()=>e.$connector.updateButtons())},window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Menu Bar","vaadin-menu-bar-flow"))})}}},function(e,t){var i;i=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Select","vaadin-select-flow")},window.Vaadin.Flow.selectConnector={initLazy:e=>i((function(e){var t=i((function(){for(var t=0;t<e.childElementCount;t++){var i=e.children[t];if("VAADIN-LIST-BOX"===i.tagName.toUpperCase())return i}}));e.$connector||(e.$connector={},e.renderer=i((function(e){var i=t();i&&(e.firstChild&&e.removeChild(e.firstChild),e.appendChild(i))})))}))(e)}},,,,,,,,,function(e,t,i){"use strict";i.r(t);var r=i(109),n=i(110),o=i(111),s=i(112),a=i(44),l=i(32);i(163);window.Vaadin.Flow.Legacy.GestureEventListeners=a.a,window.Vaadin.Flow.Legacy.Gestures=l;i(164),i(34);var d=i(6),c=i(15),h=i(9),u=i(13);class p extends u.a{static get template(){return d.a`
    <style>
      @keyframes flow-component-renderer-appear {
        to {
          opacity: 1;
        }
      }
      :host {
        animation: 1ms flow-component-renderer-appear;
      }
    </style>
    <slot></slot>
`}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}connectedCallback(){super.connectedCallback(),this._runChrome72ShadowDomBugWorkaround()}_runChrome72ShadowDomBugWorkaround(){var e=navigator.userAgent;if(e&&e.match("Chrome/")){var t=e.split("Chrome/")[1].split(".")[0];if(t&&parseInt(t)>71){var i=this._getDebouncedNotifyResizeFunction();i&&(this.style.visibility="hidden",requestAnimationFrame(()=>{this.style.visibility="",i()}))}}}_getDebouncedNotifyResizeFunction(){for(var e=this.parentElement;;){if(!e)return;if(e.notifyResize)break;e=e.parentElement}return e._debouncedNotifyResize||(e._debouncedNotifyResize=function(){e.__debouncedNotifyResize=c.a.debounce(e.__debouncedNotifyResize,h.a,e.notifyResize)}),e._debouncedNotifyResize}ready(){super.ready(),this.addEventListener("click",(function(e){this.firstChild&&"function"==typeof this.firstChild.click&&e.target===this&&this.firstChild.click()})),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=c.a.debounce(this._debouncer,h.b,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(this.nodeid&&this.appid){var e=this._getRenderedComponent();this.firstChild?e?this.firstChild!==e?(this.replaceChild(e,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):(this._clear(),this._asyncAttachRenderedComponentIfAble()):e?(this.appendChild(e),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(e){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(e)}return null}_clear(){for(;this.firstChild;)this.removeChild(this.firstChild)}onComponentRendered(){}_defineFocusTarget(){var e=this._getFirstFocusableDescendant(this.firstChild);null!==e&&e.setAttribute("focus-target","true")}_getFirstFocusableDescendant(e){if(this._isFocusable(e))return e;if(!e.children)return null;for(var t=0;t<e.children.length;t++){var i=this._getFirstFocusableDescendant(e.children[t]);if(null!==i)return i}return null}_isFocusable(e){return(!e.hasAttribute||"function"!=typeof e.hasAttribute||!e.hasAttribute("disabled")&&!e.hasAttribute("hidden"))&&0===e.tabIndex}_onAnimationEnd(e){0===e.animationName.indexOf("flow-component-renderer-appear")&&this._attachRenderedComponentIfAble()}}window.customElements.define(p.is,p);var m=i(141),_=i(126);i(167);window.Vaadin.Flow.Legacy.Debouncer=c.a,window.Vaadin.Flow.Legacy.timeOut=h.d,window.Vaadin.Flow.Legacy.animationFrame=h.a,window.Vaadin.Flow.Legacy.GridElement=m.a,window.Vaadin.Flow.Legacy.ItemCache=_.b;i(221);var f=i(85);{class e extends f.b{static get template(){return d.a`
    <template class="header" id="defaultHeaderTemplate">
      <vaadin-checkbox id="selectAllCheckbox" aria-label="Select All" hidden\$="[[selectAllHidden]]" on-click="_onSelectAllClick" checked="[[selectAll]]">
      </vaadin-checkbox>
    </template>
    <template id="defaultBodyTemplate">
      <vaadin-checkbox aria-label="Select Row" checked="[[selected]]" on-click="_onSelectClick">
      </vaadin-checkbox>
    </template>
`}static get is(){return"vaadin-grid-flow-selection-column"}static get properties(){return{autoWidth:{type:Boolean,value:!0},width:{type:String,value:"56px"},flexGrow:{type:Number,value:0},selectAll:{type:Boolean,value:!1,notify:!0},selectAllHidden:Boolean}}constructor(){super(),this._boundOnSelectEvent=this._onSelectEvent.bind(this),this._boundOnDeselectEvent=this._onDeselectEvent.bind(this)}_prepareHeaderTemplate(){return this._prepareTemplatizer(this.$.defaultHeaderTemplate)}_prepareBodyTemplate(){return this._prepareTemplatizer(this.$.defaultBodyTemplate)}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("select",this._boundOnSelectEvent),this._grid.addEventListener("deselect",this._boundOnDeselectEvent))}disconnectedCallback(){if((super.disconnectedCallback(),this._grid)&&(this._grid.removeEventListener("select",this._boundOnSelectEvent),this._grid.removeEventListener("deselect",this._boundOnDeselectEvent),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&window.ShadyDOM&&this.parentElement)){var e=this.parentElement,t=this.nextElementSibling;e.removeChild(this),t?e.insertBefore(this,t):e.appendChild(this)}}_onSelectClick(e){e.target.checked?this._grid.$connector.doDeselection([e.model.item],!0):this._grid.$connector.doSelection([e.model.item],!0),e.target.checked=!e.target.checked}_onSelectAllClick(e){e.preventDefault(),this._grid.hasAttribute("disabled")?e.target.checked=!e.target.checked:this.selectAll?this.$server.deselectAll():this.$server.selectAll()}_onSelectEvent(e){}_onDeselectEvent(e){e.detail.userOriginated&&(this.selectAll=!1)}}customElements.define(e.is,e),Vaadin.GridFlowSelectionColumnElement=e}i(179),i(139),i(42),i(46),i(157),i(81),i(52),i(58),i(61);var v=d.a`<dom-module id="lumo-context-menu-overlay" theme-for="vaadin-context-menu-overlay">
  <template>
    <style include="lumo-menu-overlay">
      :host([phone]) {
        top: 0 !important;
        right: 0 !important;
        bottom: var(--vaadin-overlay-viewport-bottom) !important;
        left: 0 !important;
        align-items: stretch;
        justify-content: flex-end;
      }

    /* TODO These style overrides should not be needed.
       We should instead offer a way to have non-selectable items inside the context menu. */

      :host {
        --_lumo-list-box-item-selected-icon-display: none;
        --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius) / 4);
      }

      [part="overlay"] {
        outline: none;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-context-menu-list-box" theme-for="vaadin-context-menu-list-box">
  <template>
    <style>
      :host(.vaadin-menu-list-box) {
        --_lumo-list-box-item-selected-icon-display: block;
      }

      /* Normal item */

      [part="items"] ::slotted(.vaadin-menu-item) {
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        cursor: default;
      }

      [part="items"] ::slotted(.vaadin-menu-item) {
        outline: none;
        border-radius: var(--lumo-border-radius);
        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      :host(.vaadin-menu-list-box) [part="items"] ::slotted(.vaadin-menu-item) {
        padding-left: calc(var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
      [part="items"] ::slotted(.vaadin-menu-item)::before {
        display: var(--_lumo-item-selected-icon-display);
      }

      /* Hovered item */
      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */

      [part="items"] ::slotted(.vaadin-menu-item:hover:not([disabled])),
      [part="items"] ::slotted(.vaadin-menu-item[expanded]:not([disabled])) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* RTL styles */
      :host([dir="rtl"])[part="items"] ::slotted(.vaadin-menu-item) {
        padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
      }

      :host([dir="rtl"].vaadin-menu-list-box) [part="items"] ::slotted(.vaadin-menu-item) {
        padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-border-radius) / 4);
      }

      /* Focused item */

      @media (pointer: coarse) {
        [part="items"] ::slotted(.vaadin-menu-item:hover:not([expanded]):not([disabled])) {
          background-color: transparent;
        }
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-context-menu-item" theme-for="vaadin-context-menu-item">
  <template>
    <style>
      :host {
        user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
      }

      :host(.vaadin-menu-item[menu-item-checked])::before {
        opacity: 1;
      }

      :host(.vaadin-menu-item.vaadin-context-menu-parent-item)::after {
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-xs);
        content: var(--lumo-icons-angle-right);
        color: var(--lumo-tertiary-text-color);
      }

      :host(:not([dir="rtl"]).vaadin-menu-item.vaadin-context-menu-parent-item)::after {
        margin-right: calc(var(--lumo-space-m) * -1);
        padding-left: var(--lumo-space-m);
      }

      :host([expanded]) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* RTL styles */
      :host([dir="rtl"].vaadin-menu-item.vaadin-context-menu-parent-item)::after {
        content: var(--lumo-icons-angle-left);
        margin-left: calc(var(--lumo-space-m) * -1);
        padding-right: var(--lumo-space-m);
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild(v.content);i(155),i(159);var g=i(30);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
Object(l.register)({name:"vaadin-contextmenu",deps:["touchstart","touchmove","touchend","contextmenu"],flow:{start:["touchstart","contextmenu"],end:["contextmenu"]},emits:["vaadin-contextmenu"],info:{sourceEvent:null,_ios:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1},reset:function(){this.info.sourceEvent=null,this._cancelTimer(),this.info.touchJob=null,this.info.touchStartCoords=null},_cancelTimer:function(){this._timerId&&(clearTimeout(this._timerId),delete this._fired)},touchstart:function(e){this.info.sourceEvent=e,this.info.touchStartCoords={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};var t=e.composedPath()[0]||e.target;this._timerId=setTimeout(()=>{var i=e.changedTouches[0];e.shiftKey||(this.info._ios&&(this._fired=!0,this.fire(t,i.clientX,i.clientY)),Object(l.prevent)("tap"))},500)},touchmove:function(e){var t=this.info.touchStartCoords;(Math.abs(t.x-e.changedTouches[0].clientX)>15||Math.abs(t.y-e.changedTouches[0].clientY)>15)&&this._cancelTimer()},touchend:function(e){this._fired&&e.preventDefault(),this._cancelTimer()},contextmenu:function(e){e.shiftKey||(this.info.sourceEvent=e,this.fire(e.target,e.clientX,e.clientY),Object(l.prevent)("tap"))},fire:function(e,t,i){var r=this.info.sourceEvent,n=new Event("vaadin-contextmenu",{bubbles:!0,cancelable:!0,composed:!0});n.detail={x:t,y:i,sourceEvent:r},e.dispatchEvent(n),n.defaultPrevented&&r&&r.preventDefault&&r.preventDefault()}});i(153);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class b extends class extends u.a{}{static get template(){return d.a`
    <iron-media-query query="min-device-width: 750px" query-matches="{{wide}}"></iron-media-query>
`}static get is(){return"vaadin-device-detector"}static get properties(){return{phone:{type:Boolean,computed:"_phone(wide, touch)",notify:!0},touch:{type:Boolean,notify:!0,value:()=>this._touch()},wide:{type:Boolean,notify:!0}}}static _touch(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}_phone(e,t){return!e&&t}}customElements.define(b.is,b);var y=i(121),A=i(144),w=(i(63),i(36));class x extends y.a{static get is(){return"vaadin-context-menu-item"}}class C extends A.a{static get is(){return"vaadin-context-menu-list-box"}}customElements.define(x.is,x),customElements.define(C.is,C);var E=e=>class extends e{static get properties(){return{items:Array}}ready(){super.ready(),this.__itemsOutsideClickListener=e=>{e.composedPath().filter(e=>"vaadin-context-menu-overlay"===e.localName)[0]||this.dispatchEvent(new CustomEvent("items-outside-click"))},this.addEventListener("items-outside-click",e=>this.items&&this.close())}connectedCallback(){super.connectedCallback(),document.documentElement.addEventListener("click",this.__itemsOutsideClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.documentElement.removeEventListener("click",this.__itemsOutsideClickListener)}get __isRTL(){return"rtl"===this.getAttribute("dir")}__forwardFocus(){var e=this.$.overlay,t=e.getFirstChild();if(e.parentOverlay){var i=e.parentOverlay.querySelector("[expanded]");i&&i.hasAttribute("focused")&&t?t.focus():e.$.overlay.focus()}else t&&t.focus()}__openSubMenu(e,t){e.items=t._item.children,e.listenOn=t;var i,r=t.getBoundingClientRect(),n=e.$.overlay.$.content,o=getComputedStyle(n),s=this.$.overlay,a=s.hasAttribute("bottom-aligned")?r.bottom+parseFloat(o.paddingBottom):r.top-parseFloat(o.paddingTop);e.$.overlay._setParentOverlay(s),s.theme?e.setAttribute("theme",s.theme):e.removeAttribute("theme"),n.style.minWidth="",document.documentElement.clientWidth-r.right>r.width?i=r.right:(i=r.left-r.width,n.style.minWidth=s.$.content.clientWidth+"px"),i=Math.max(i,0),t.dispatchEvent(new CustomEvent("opensubmenu",{detail:{x:i,y:a,children:t._item.children}}))}__itemsRenderer(e,t,i){this.__initMenu(e,t),e.querySelector(this.constructor.is).closeOn=t.closeOn;var r=e.querySelector("vaadin-context-menu-list-box");r.innerHTML="",Array.from(i.detail.children||t.items).forEach(e=>{var t;(t=e.component instanceof HTMLElement?e.component:document.createElement(e.component||"vaadin-context-menu-item"))instanceof y.a?(t.setAttribute("role","menuitem"),t.classList.add("vaadin-menu-item")):"hr"===t.localName&&t.setAttribute("role","separator"),this.theme&&t.setAttribute("theme",this.theme),t._item=e,e.text&&(t.textContent=e.text),this.__toggleMenuComponentAttribute(t,"menu-item-checked",e.checked),this.__toggleMenuComponentAttribute(t,"disabled",e.disabled),t.setAttribute("aria-haspopup","false"),t.classList.remove("vaadin-context-menu-parent-item"),e.children&&e.children.length&&(t.classList.add("vaadin-context-menu-parent-item"),t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded","false"),t.removeAttribute("expanded")),r.appendChild(t)})}__toggleMenuComponentAttribute(e,t,i){i?(e.setAttribute(t,""),e["__has-"+t]=!0):e["__has-"+t]&&(e.removeAttribute(t),e["__has-"+t]=!1)}__initMenu(e,t){if(e.firstElementChild){var i=e.querySelector("vaadin-context-menu-list-box");this.theme?i.setAttribute("theme",this.theme):i.removeAttribute("theme")}else{var r=this.constructor.is;e.innerHTML=`\n        <vaadin-context-menu-list-box></vaadin-context-menu-list-box>\n        <${r} hidden></${r}>\n      `,Object(w.b)();var n=e.querySelector("vaadin-context-menu-list-box");this.theme&&n.setAttribute("theme",this.theme),n.classList.add("vaadin-menu-list-box"),requestAnimationFrame(()=>n.setAttribute("role","menu"));var o=e.querySelector(r);o.$.overlay.modeless=!0,o.openOn="opensubmenu",t.addEventListener("opened-changed",e=>!e.detail.value&&o.close()),o.addEventListener("opened-changed",e=>{if(!e.detail.value){var t=n.querySelector("[expanded]");t&&(t.setAttribute("aria-expanded","false"),t.removeAttribute("expanded"))}}),n.addEventListener("selected-changed",e=>{if("number"==typeof e.detail.value){var i=e.target.items[e.detail.value]._item;if(!i.children){var r={value:i};t.dispatchEvent(new CustomEvent("item-selected",{detail:r}))}n.selected=null}}),o.addEventListener("item-selected",e=>{t.dispatchEvent(new CustomEvent("item-selected",{detail:e.detail}))}),o.addEventListener("close-all-menus",()=>{t.dispatchEvent(new CustomEvent("close-all-menus"))}),t.addEventListener("close-all-menus",t.close),t.addEventListener("item-selected",t.close),t.$.overlay.$.backdrop.addEventListener("click",()=>t.close()),t.$.overlay.addEventListener("keydown",e=>{var i=this.__isRTL;!i&&37===e.keyCode||i&&39===e.keyCode?(t.close(),t.listenOn.focus()):27===e.keyCode&&t.dispatchEvent(new CustomEvent("close-all-menus"))}),requestAnimationFrame(()=>this.__openListenerActive=!0);var s=(e,i=e.composedPath().filter(e=>"vaadin-context-menu-item"===e.localName)[0])=>{if(this.__openListenerActive)if(t.$.overlay.hasAttribute("opening"))requestAnimationFrame(()=>s(e,i));else if(i){if(o.items!==i._item.children&&o.close(),!t.opened)return;i._item.children&&i._item.children.length?(i.setAttribute("aria-expanded","true"),i.setAttribute("expanded",""),this.__openSubMenu(o,i)):o.listenOn.focus()}};t.$.overlay.addEventListener("mouseover",s),t.$.overlay.addEventListener("keydown",e=>{var t=this.__isRTL;(!t&&39===e.keyCode||t&&37===e.keyCode||13===e.keyCode||32===e.keyCode)&&s(e)})}}},S=i(23),O=i(97),I=(i(48),i(119)),T=document.createElement("template");T.innerHTML='<dom-module id="vaadin-context-menu-overlay-styles" theme-for="vaadin-context-menu-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([right-aligned]),\n      :host([end-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      [part="overlay"] {\n        background-color: #fff;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(T.content);class k extends I.a{static get is(){return"vaadin-context-menu-overlay"}static get properties(){return{instanceProps:{type:Object,value:()=>({detail:!0,target:!0})},parentOverlay:{type:Object,readOnly:!0}}}static get observers(){return["_themeChanged(theme)"]}ready(){super.ready(),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&e.composedPath()[0]===this.$.overlay&&[38,40].indexOf(e.keyCode)>-1){var t=this.getFirstChild();t&&Array.isArray(t.items)&&t.items.length&&(e.preventDefault(),38===e.keyCode?t.items[t.items.length-1].focus():t.focus())}})}getFirstChild(){return this.content.querySelector(":not(style):not(slot)")}_themeChanged(e){this.close()}getBoundaries(){var e=this.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),i=e.bottom-t.height,r=this.parentOverlay;if(r&&r.hasAttribute("bottom-aligned")){var n=getComputedStyle(r);i=i-parseFloat(n.bottom)-parseFloat(n.height)}return{xMax:e.right-t.width,xMin:e.left+t.width,yMax:i,left:e.left,right:e.right,top:e.top,width:t.width}}}customElements.define(k.is,k);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class P extends(Object(S.a)(Object(O.a)(E(Object(a.a)(u.a))))){static get template(){return d.a`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>

    <slot id="slot"></slot>

    <vaadin-device-detector phone="{{_phone}}" touch="{{_touch}}"></vaadin-device-detector>

    <vaadin-context-menu-overlay id="overlay" on-opened-changed="_onOverlayOpened" on-vaadin-overlay-open="_onVaadinOverlayOpen" with-backdrop="[[_phone]]" phone\$="[[_phone]]" model="[[_context]]" theme\$="[[theme]]">
    </vaadin-context-menu-overlay>
`}static get is(){return"vaadin-context-menu"}static get version(){return"4.5.0"}static get properties(){return{selector:{type:String},opened:{type:Boolean,value:!1,notify:!0,readOnly:!0},openOn:{type:String,value:"vaadin-contextmenu"},listenOn:{type:Object,value:function(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged"},renderer:{type:Function},_context:Object,_boundClose:Object,_boundOpen:Object,_contentTemplate:Object,_oldTemplate:Object,_oldRenderer:Object,_touch:Boolean}}static get observers(){return["_openedChanged(opened)","_contextChanged(_context, _instance)","_targetOrOpenOnChanged(listenOn, openOn)","_templateOrRendererChanged(_contentTemplate, renderer, _context, items)"]}constructor(){super(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundOnGlobalContextMenu=this._onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0),this.close()}ready(){super.ready(),this._observer=new g.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}_setTemplateFromNodes(e){this._contentTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._contentTemplate}_onOverlayOpened(e){this._setOpened(e.detail.value),this.__alignOverlayPosition()}_onVaadinOverlayOpen(e){this.__alignOverlayPosition(),this.$.overlay.style.opacity="",this.__forwardFocus()}_targetOrOpenOnChanged(e,t){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn.style.msUserSelect="",this._oldListenOn.style.userSelect="",this._oldListenOn=null,this._oldOpenOn=null),e&&t&&(this._listen(e,t,this._boundOpen),this._oldListenOn=e,this._oldOpenOn=t)}_setListenOnUserSelect(e){this.listenOn.style.webkitTouchCallout=e,this.listenOn.style.webkitUserSelect=e,this.listenOn.style.msUserSelect=e,this.listenOn.style.userSelect=e,document.getSelection().removeAllRanges()}_closeOnChanged(e,t){t&&(this._unlisten(this.$.overlay,t,this._boundClose),this._unlisten(this.$.overlay.root,t,this._boundClose)),e?(this._listen(this.$.overlay,e,this._boundClose),this._listen(this.$.overlay.root,e,this._boundClose),this._unlisten(this.$.overlay,"vaadin-overlay-outside-click",this._preventDefault)):this._listen(this.$.overlay,"vaadin-overlay-outside-click",this._preventDefault)}_preventDefault(e){e.preventDefault()}_openedChanged(e){e?(this._instance||(this.$.overlay.template=this.querySelector("template"),this._instance=this.$.overlay._instance),document.documentElement.addEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("none")):(document.documentElement.removeEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("")),this.$.overlay.opened=e}render(){this.$.overlay.render()}_removeNewRendererOrTemplate(e,t,i,r){e!==t?this._contentTemplate=void 0:i!==r&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,i,r){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for context-menu content");if(this._oldTemplate=e,this._oldRenderer=t,r){if(e||t)throw new Error("The items API cannot be used together with a template/renderer");"click"===this.closeOn&&(this.closeOn=""),t=this.__itemsRenderer}t&&i&&this.$.overlay.setProperties({owner:this,renderer:t})}_contextChanged(e,t){void 0!==e&&void 0!==t&&(t.detail=e.detail,t.target=e.target)}close(){this._setOpened(!1)}_contextTarget(e){if(this.selector){var t=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(t,t=>e.composedPath().indexOf(t)>-1)[0]}return e.target}open(e){e&&!this.opened&&(this._context={detail:e.detail,target:this._contextTarget(e)},this._context.target&&(this._preventDefault(e),e.stopPropagation(),this.__x=this._getEventCoordinate(e,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(e,"y"),this.__pageYOffset=window.pageYOffset,this.$.overlay.style.opacity="0",this._setOpened(!0)))}__onScroll(){if(this.opened){var e=window.pageYOffset-this.__pageYOffset,t=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-t),this.__adjustPosition("right",t),this.__adjustPosition("top",-e),this.__adjustPosition("bottom",e),this.__pageYOffset+=e,this.__pageXOffset+=t}}__adjustPosition(e,t){var i=this.$.overlay.style;i[e]=(parseInt(i[e])||0)+t+"px"}__alignOverlayPosition(){var e=this.$.overlay,t=e.style;["top","right","bottom","left"].forEach(e=>t.removeProperty(e)),["right-aligned","end-aligned","bottom-aligned"].forEach(t=>e.removeAttribute(t));var i,{xMax:r,xMin:n,yMax:o,left:s,right:a,top:l,width:d}=e.getBoundaries(),c=this.__x||(this.__isRTL?a:s),h=this.__y||l,u=document.documentElement.clientWidth,p=document.documentElement.clientHeight,m=e.parentOverlay,_=!1;if(m)if(i=m.$.overlay.getBoundingClientRect(),m.hasAttribute("right-aligned")||m.hasAttribute("end-aligned")){var f=getComputedStyle(m),v=(e,t)=>parseFloat(getComputedStyle(e.$.content)["padding"+t]),g=parseFloat(f[this.__isRTL?"left":"right"])+i.width;u-(g-(v(m,"Left")+v(e,"Right")))>d&&(this._setEndAligned(e),t[this.__isRTL?"left":"right"]=g+"px",_=!0)}else c<i.x&&(c-=d-i.width);_||(this.__isRTL?(c>u/2||c>n)&&!m?t.right=Math.max(0,u-c)+"px":m&&i.left>=i.width?t.right=u-i.right+i.width+"px":m?(t.right="auto",t.left=Math.max(e.getBoundingClientRect().left-e.getBoundingClientRect().width,i.right)+"px",this._setEndAligned(e)):(t.left=c+"px",this._setEndAligned(e)):(c<u/2||c<r)&&!m?t.left=c+"px":m&&u-i.width-i.left>=i.width?t.left=i.left+i.width+"px":m?(t.right="auto",t.left=Math.max(e.getBoundingClientRect().left,i.left-e.getBoundingClientRect().width)+"px",this._setEndAligned(e)):(t.right=Math.max(0,u-c)+"px",this._setEndAligned(e))),h<p/2||h<o?t.top=h+"px":(t.bottom=Math.max(0,p-h)+"px",e.setAttribute("bottom-aligned",""))}_setEndAligned(e){e.setAttribute("end-aligned",""),this.__isRTL||e.setAttribute("right-aligned","")}_getEventCoordinate(e,t){if(!(e.detail instanceof Object)){var i="client"+t.toUpperCase(),r=e.changedTouches?e.changedTouches[0][i]:e[i];if(0===r){var n=e.target.getBoundingClientRect();return"x"===t?n.left:n.top+n.height}return r}return e.detail[t]?e.detail[t]:e.detail.sourceEvent?this._getEventCoordinate(e.detail.sourceEvent,t):void 0}_listen(e,t,i){l.gestures[t]?Object(l.addListener)(e,t,i):e.addEventListener(t,i)}_unlisten(e,t,i){l.gestures[t]?Object(l.removeListener)(e,t,i):e.removeEventListener(t,i)}_onGlobalContextMenu(e){e.shiftKey||(e.preventDefault(),this.close())}}customElements.define(P.is,P);i(195),i(215),i(197),i(87),i(189),i(199);var z=document.createElement("template");z.innerHTML='<iron-iconset-svg size="1000" name="lumo">\n<svg xmlns="http://www.w3.org/2000/svg">\n<defs>\n<g id="angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>\n<g id="angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>\n<g id="angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>\n<g id="angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>\n<g id="arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>\n<g id="arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>\n<g id="arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>\n<g id="arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>\n<g id="bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>\n<g id="bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>\n<g id="calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>\n<g id="checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>\n<g id="chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>\n<g id="chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>\n<g id="chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>\n<g id="chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>\n<g id="clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>\n<g id="cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>\n<g id="cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>\n<g id="download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>\n<g id="dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>\n<g id="edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>\n<g id="error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>\n<g id="eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>\n<g id="eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>\n<g id="menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>\n<g id="minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>\n<g id="ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>\n<g id="photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>\n<g id="play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>\n<g id="plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>\n<g id="redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>\n<g id="reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>\n<g id="search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>\n<g id="undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>\n<g id="unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>\n<g id="user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>\n</defs>\n</svg>\n</iron-iconset-svg>',document.head.appendChild(z.content);i(161);var L=d.a`<dom-module id="lumo-menu-bar-button" theme-for="vaadin-menu-bar-button">
  <template>
    <style include="lumo-button">
      :host {
        margin: calc(var(--lumo-space-xs) / 2);
        margin-left: 0;
        border-radius: 0;
      }

      [part="label"] {
        width: 100%;
      }

      /* NOTE(web-padawan): avoid using shorthand padding property for IE11 */
      [part="label"] ::slotted(vaadin-context-menu-item) {
        justify-content: center;
        height: var(--lumo-button-size);
        margin: 0 calc((var(--lumo-size-m) / 3 + var(--lumo-border-radius) / 2) * -1);
        padding-left: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius) / 2);
        padding-right: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius) / 2);
      }

      :host([theme~="small"]) [part="label"] ::slotted(vaadin-context-menu-item) {
        min-height: var(--lumo-size-s);
        margin: 0 calc((var(--lumo-size-s) / 3 + var(--lumo-border-radius) / 2) * -1);
        padding-left: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius) / 2);
        padding-right: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius) / 2);
      }

      :host([theme~="tertiary"]) [part="label"] ::slotted(vaadin-context-menu-item) {
        margin: 0 calc((var(--lumo-button-size) / 6) * -1);
        padding-left: calc(var(--lumo-button-size) / 6);
        padding-right: calc(var(--lumo-button-size) / 6);
      }

      :host([theme~="tertiary-inline"]) {
        margin-top: calc(var(--lumo-space-xs) / 2);
        margin-bottom: calc(var(--lumo-space-xs) / 2);
        margin-right: calc(var(--lumo-space-xs) / 2);
      }

      :host([theme~="tertiary-inline"]) [part="label"] ::slotted(vaadin-context-menu-item) {
        margin: 0;
        padding: 0;
      }

      :host([expanded]) {
        background-color: var(--lumo-primary-color-10pct);
      }

      :host([expanded][theme~="primary"]) {
        background-color: var(--lumo-primary-color-50pct);
      }

      :host([disabled][theme~="primary"]) {
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      :host([expanded][theme~="tertiary"]),
      :host([expanded][theme~="tertiary-inline"]) {
        background-color: var(--lumo-primary-color-10pct) !important;
      }

      :host(:first-of-type) {
        border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);

        /* Needed to retain the focus-ring with border-radius */
        margin-left: calc(var(--lumo-space-xs) / 2);
      }

      :host(:nth-last-of-type(2)),
      :host([part="overflow-button"]) {
        border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
      }

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        border-radius: var(--lumo-border-radius-m);
      }

      :host([part="overflow-button"]) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([part="overflow-button"]) ::slotted(*) {
        font-size: var(--lumo-font-size-xl);
      }

      :host([part="overflow-button"]) [part="prefix"],
      :host([part="overflow-button"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }

      /* RTL styles */
      :host([dir="rtl"]) {
        margin-left: calc(var(--lumo-space-xs) / 2);
        margin-right: 0;
        border-radius: 0;
      }

      :host([dir="rtl"]:first-of-type) {
        border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
        margin-right: calc(var(--lumo-space-xs) / 2);
      }

      :host([dir="rtl"]:nth-last-of-type(2)),
      :host([dir="rtl"][part="overflow-button"]) {
        border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(L.content);var R=i(135),N=document.createElement("template");
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/N.innerHTML='<dom-module id="vaadin-menu-bar-button-styles" theme-for="vaadin-menu-bar-button">\n  <template>\n    <style>\n      [part="label"] ::slotted(vaadin-context-menu-item) {\n        position: relative;\n        z-index: 1;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(N.content);class M extends R.a{static get is(){return"vaadin-menu-bar-button"}}customElements.define(M.is,M);var D=d.a`<dom-module id="lumo-menu-bar-item" theme-for="vaadin-context-menu-item">
  <template>
    <style>
      :host([theme="menu-bar-item"]) [part="content"] {
        display: flex;
        /* tweak to inherit centering from menu bar button */
        align-items: inherit;
        justify-content: inherit;
      }

      :host([theme="menu-bar-item"]) [part="content"] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      :host([theme="menu-bar-item"]) [part="content"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: var(--lumo-space-xs);
        box-sizing: border-box !important;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(D.content);var F=d.a`<dom-module id="lumo-menu-bar-overlay" theme-for="vaadin-context-menu-overlay">
  <template>
    <style>
      :host(:first-of-type) {
        padding-top: var(--lumo-space-xs);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(F.content);var j=i(19),B=i(103),H=i(83),$=e=>class extends(Object(H.b)(B.a,e)){static get properties(){return{_hasOverflow:{type:Boolean,value:!1}}}static get observers(){return["_menuItemsChanged(items, items.splices)"]}ready(){super.ready(),this.setAttribute("role","menubar"),this.addEventListener("iron-resize",e=>this.__onResize()),this._overflow.setAttribute("role","menuitem"),this._overflow.setAttribute("aria-haspopup","true"),this._overflow.setAttribute("aria-expanded","false")}get _buttons(){return Array.from(this.shadowRoot.querySelectorAll('[part$="button"]'))}get _container(){return this.shadowRoot.querySelector('[part="container"]')}get _overflow(){return this.shadowRoot.querySelector('[part="overflow-button"]')}_menuItemsChanged(e,t){e!==this._oldItems&&(this._oldItems=e,this.__renderButtons(e))}__detectOverflow(){for(var e=this._container,t=this._buttons.slice(0),i=t.pop(),r="rtl"===this.getAttribute("dir"),n=i.item&&i.item.children&&i.item.children.length||0,o=0;o<t.length;o++){var s=t[o];s.disabled=s.item.disabled,s.style.visibility="",s.style.position="";var a=s.item&&s.item.component;a instanceof HTMLElement&&a.classList.contains("vaadin-menu-item")&&(s.appendChild(a),a.classList.remove("vaadin-menu-item"))}if(i.item={children:[]},this._hasOverflow=!1,e.offsetWidth<e.scrollWidth){var l;for(this._hasOverflow=!0,l=t.length;l>0;l--){var d=t[l-1],c=getComputedStyle(d),h=d.offsetWidth;if(!r&&d.offsetLeft+h<e.offsetWidth-i.offsetWidth||r&&d.offsetLeft>=i.offsetWidth)break;d.disabled=!0,d.style.visibility="hidden",d.style.position="absolute",d.style.width=c.width}i.item={children:t.filter((e,t)=>t>=l).map(e=>e.item)}}n!==(i.item&&i.item.children&&i.item.children.length||0)&&this._subMenu.opened&&this._subMenu.close()}render(){this.shadowRoot&&this.__renderButtons(this.items)}__renderButtons(e=[]){for(var t=this._container,i=this._overflow;t.children.length>1;)t.removeChild(t.firstElementChild);e.forEach(e=>{var r=document.createElement("vaadin-menu-bar-button"),n=Object.assign({},e);r.item=n;var o=e.component;if(o){var s,a=o instanceof HTMLElement;if(a&&"vaadin-context-menu-item"===o.localName?s=o:(s=document.createElement("vaadin-context-menu-item")).appendChild(a?o:document.createElement(o)),e.text)(s.firstChild||s).textContent=e.text;n.component=s,s.item=n,s.setAttribute("theme","menu-bar-item"),r.appendChild(s)}else e.text&&(r.textContent=e.text);e.disabled?(r.disabled=!0,r.setAttribute("tabindex","-1")):r.setAttribute("tabindex","0"),r.item.children&&(r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded","false")),r.setAttribute("part","menu-bar-button"),this.theme&&""!==this.theme&&r.setAttribute("theme",this.theme),t.insertBefore(r,i),r.setAttribute("role","menuitem")}),this.__detectOverflow()}__onResize(){this.__debounceOverflow=c.a.debounce(this.__debounceOverflow,h.a,this.__detectOverflow.bind(this))}}
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,V=e=>class extends e{static get properties(){return{openOnHover:{type:Boolean}}}constructor(){super(),this.__boundOnContextMenuKeydown=this.__onContextMenuKeydown.bind(this)}static get observers(){return["_itemsChanged(items, items.splices)","_themeChanged(theme)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("focusin",e=>this._onFocusin(e)),this._subMenu.addEventListener("item-selected",this.__onItemSelected.bind(this)),this._subMenu.addEventListener("close-all-menus",this.__onEscapeClose.bind(this));var e=this._subMenu.$.overlay;e.addEventListener("keydown",this.__boundOnContextMenuKeydown),e.addEventListener("vaadin-overlay-open",this.__alignOverlayPosition.bind(this));var t=this._container;t.addEventListener("click",this.__onButtonClick.bind(this)),t.addEventListener("mouseover",e=>this._onMouseOver(e))}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.__boundOutsideClickListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.__boundOutsideClickListener,!0)}notifyResize(){super.notifyResize()}get __isRTL(){return"rtl"===this.getAttribute("dir")}_themeChanged(e){e?(this._buttons.forEach(t=>t.setAttribute("theme",e)),this._subMenu.setAttribute("theme",e)):(this._buttons.forEach(e=>e.removeAttribute("theme")),this._subMenu.removeAttribute("theme"))}_focusButton(e){e.focus(),e.setAttribute("focus-ring",""),this._buttons.forEach(t=>{t.setAttribute("tabindex",t===e?"0":"-1")})}_getButtonFromEvent(e){return Array.from(e.composedPath()).filter(e=>"vaadin-menu-bar-button"===e.localName)[0]}_onFocusin(e){var t=this.shadowRoot.querySelector('[part$="button"][tabindex="0"]');t&&this._buttons.forEach(e=>{e.setAttribute("tabindex",e===t?"0":"-1")})}_onKeydown(e){var t=this._getButtonFromEvent(e);t&&(40===e.keyCode?(e.preventDefault(),t===this._expandedButton?this._focusFirstItem():this.__openSubMenu(t,e)):38===e.keyCode?(e.preventDefault(),t===this._expandedButton?this._focusLastItem():this.__openSubMenu(t,e,{focusLast:!0})):27===e.keyCode&&t===this._expandedButton?this._close(!0):this._navigateByKey(e))}_navigateByKey(e){var t,i,r=e.key.replace(/^Arrow/,""),n=this._buttons,o=this.shadowRoot.activeElement||this._expandedButton,s=n.indexOf(o),a=this.__isRTL?-1:1;switch(r){case"Left":i=-a,t=s-a;break;case"Right":i=a,t=s+a;break;case"Home":i=1,t=0;break;case"End":i=-1,t=n.length-1}if((t=this._getAvailableIndex(t,i,n))>=0){e.preventDefault();var l=n[t],d=o===this._expandedButton;d&&this._close(),this._focusButton(l),d&&l.item&&l.item.children&&this.__openSubMenu(l,e,{keepFocus:!0})}}_getAvailableIndex(e,t,i){for(var r=i.length,n=e,o=0;"number"==typeof n&&o<r;o++,n+=t||1){n<0?n=r-1:n>=r&&(n=0);var s=i[n];if(!s.disabled&&!s.hasAttribute("hidden"))return n}return-1}get _subMenu(){return this.shadowRoot.querySelector("vaadin-menu-bar-submenu")}__alignOverlayPosition(e){if(this._expandedButton){var t=e.target,{width:i,height:r,left:n}=this._expandedButton.getBoundingClientRect();t.hasAttribute("bottom-aligned")&&(t.style.bottom=parseInt(getComputedStyle(t).bottom)+r+"px"),t.hasAttribute("end-aligned")&&(this.__isRTL?t.style.left=n+"px":t.style.right=parseInt(getComputedStyle(t).right)-i+"px")}}_itemsChanged(e,t){var i=this._subMenu;i&&i.opened&&i.close()}_onMouseOver(e){var t=this._getButtonFromEvent(e);if(t&&t!==this._expandedButton){var i=this._subMenu.opened;t.item.children&&(this.openOnHover||i)?this.__openSubMenu(t,e):i&&this._close()}}__onContextMenuKeydown(e){var t=Array.from(e.composedPath()).filter(e=>e._item)[0];if(t){var i=t.parentNode;if(38===e.keyCode&&t===i.items[0]&&this._close(!0),37===e.keyCode||39===e.keyCode&&!t._item.children){e.stopImmediatePropagation(),this._navigateByKey(e);var r=this.shadowRoot.activeElement;r&&r.item&&r.item.children&&this.__openSubMenu(r,e,{keepFocus:!0})}}}__fireItemSelected(e){this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:e}}))}__onButtonClick(e){e.stopPropagation();var t=this._getButtonFromEvent(e);t&&this.__openSubMenu(t,e)}__openSubMenu(e,t,i={}){var r=this._subMenu,n=e.item;if(!r.opened||(this._close(),r.listenOn!==e)){var o=n&&n.children;if(o&&0!==o.length){r.items=o,r.listenOn=e,this._expandedButton=e;var s=e.getBoundingClientRect();requestAnimationFrame(()=>{e.dispatchEvent(new CustomEvent("opensubmenu",{detail:{x:this.__isRTL?s.right:s.left,y:s.bottom,children:o}})),e.setAttribute("expanded",""),e.setAttribute("aria-expanded","true")}),i.focusLast&&this.__onceOpened(()=>this._focusLastItem()),i.keepFocus&&this.__onceOpened(()=>{this._focusButton(this._expandedButton)}),"keydown"!==t.type&&this.__onceOpened(()=>{r.$.overlay.$.overlay.focus()})}else this.__fireItemSelected(n)}}_focusFirstItem(){this._subMenu.$.overlay.firstElementChild.focus()}_focusLastItem(){var e=this._subMenu.$.overlay.firstElementChild,t=e.items[e.items.length-1];t&&t.focus()}__onceOpened(e){this.style.pointerEvents="auto";var t=this._subMenu.$.overlay,i=()=>{e(),t.removeEventListener("vaadin-overlay-open",i)};t.addEventListener("vaadin-overlay-open",i)}__onItemSelected(e){e.stopPropagation(),this._close(),this.__fireItemSelected(e.detail.value)}__onEscapeClose(e){this.__deactivateButton(!0)}__deactivateButton(e){var t=this._expandedButton;t&&t.hasAttribute("expanded")&&(t.removeAttribute("expanded"),t.setAttribute("aria-expanded","false"),e&&this._focusButton(t),this._expandedButton=null)}_close(e){this.style.pointerEvents="",this.__deactivateButton(e),this._subMenu.opened&&this._subMenu.close()}}
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/;class q extends P{static get is(){return"vaadin-menu-bar-submenu"}constructor(){super(),this.openOn="opensubmenu"}_openedChanged(e){this.$.overlay.opened=e}close(){super.close(),this.hasAttribute("is-root")&&this.getRootNode().host._close()}}customElements.define(q.is,q);
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class G extends($(V(Object(S.a)(Object(j.a)(u.a))))){static get template(){return d.a`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="container"] {
        position: relative;
        display: flex;
        width: 100%;
        flex-wrap: nowrap;
        overflow: hidden;
      }

      [part\$="button"] {
        flex-shrink: 0;
      }

      [part="overflow-button"] {
        margin-right: 0;
      }

      .dots::before {
        display: block;
        content: "\\00B7\\00B7\\00B7";
        font-size: inherit;
        line-height: inherit;
      }
    </style>

    <div part="container">
      <vaadin-menu-bar-button part="overflow-button" hidden\$="[[!_hasOverflow]]">
        <div class="dots"></div>
      </vaadin-menu-bar-button>
    </div>
    <vaadin-menu-bar-submenu is-root=""></vaadin-menu-bar-submenu>
`}static get is(){return"vaadin-menu-bar"}static get version(){return"1.2.2"}static get properties(){return{items:{type:Array,value:()=>[]}}}}customElements.define(G.is,G);var W=d.a`<dom-module id="lumo-notification-card" theme-for="vaadin-notification-card">
  <template>
    <style>
      :host {
        position: relative;
        margin: var(--lumo-space-s);
      }

      [part="overlay"] {
        background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 400;
        line-height: var(--lumo-line-height-s);
        letter-spacing: 0;
        text-transform: none;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      [part="content"] {
        padding: var(--lumo-space-wide-l);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      [part="content"] ::slotted(vaadin-button) {
        flex: none;
        margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
      }

      :host([slot^="middle"]) {
        width: 20em;
        max-width: 80vw;
        margin: var(--lumo-space-s) auto;
      }

      :host([slot\$="stretch"]) {
        margin: 0;
      }

      :host([slot\$="stretch"]) [part="overlay"] {
        border-radius: 0;
      }

      @media (min-width: 421px) {
        :host(:not([slot\$="stretch"])) {
          display: flex;
        }

        :host([slot\$="end"]) {
          justify-content: flex-end;
        }

        :host([slot^="middle"]),
        :host([slot\$="center"]) {
          display: flex;
          justify-content: center;
        }
      }

      @keyframes lumo-notification-exit-fade-out {
        100% {
          opacity: 0;
        }
      }

      @keyframes lumo-notification-enter-fade-in {
        0% {
          opacity: 0;
        }
      }

      @keyframes lumo-notification-enter-slide-down {
        0% {
          transform: translateY(-200%);
          opacity: 0;
        }
      }

      @keyframes lumo-notification-exit-slide-up {
        100% {
          transform: translateY(-200%);
          opacity: 0;
        }
      }

      @keyframes lumo-notification-enter-slide-up {
        0% {
          transform: translateY(200%);
          opacity: 0;
        }
      }

      @keyframes lumo-notification-exit-slide-down {
        100% {
          transform: translateY(200%);
          opacity: 0;
        }
      }

      :host([slot="middle"][opening]) {
        animation: lumo-notification-enter-fade-in 300ms;
      }

      :host([slot="middle"][closing]) {
        animation: lumo-notification-exit-fade-out 300ms;
      }

      :host([slot^="top"][opening]) {
        animation: lumo-notification-enter-slide-down 300ms;
      }

      :host([slot^="top"][closing]) {
        animation: lumo-notification-exit-slide-up 300ms;
      }

      :host([slot^="bottom"][opening]) {
        animation: lumo-notification-enter-slide-up 300ms;
      }

      :host([slot^="bottom"][closing]) {
        animation: lumo-notification-exit-slide-down 300ms;
      }

      :host([theme~="primary"]) [part="overlay"] {
        background: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
        box-shadow: var(--lumo-box-shadow-l);
      }

      :host([theme~="primary"]) {
        --_lumo-button-background-color: var(--lumo-shade-20pct);
        --_lumo-button-color: var(--lumo-primary-contrast-color);
        --_lumo-button-primary-background-color: var(--lumo-primary-contrast-color);
        --_lumo-button-primary-color: var(--lumo-primary-text-color);
      }

      :host([theme~="contrast"]) [part="overlay"] {
        background: var(--lumo-contrast);
        color: var(--lumo-base-color);
        box-shadow: var(--lumo-box-shadow-l);
      }

      :host([theme~="contrast"]) {
        --_lumo-button-background-color: var(--lumo-contrast-20pct);
        --_lumo-button-color: var(--lumo-base-color);
        --_lumo-button-primary-background-color: var(--lumo-base-color);
        --_lumo-button-primary-color: var(--lumo-contrast);
      }

      :host([theme~="success"]) [part="overlay"] {
        background: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
        box-shadow: var(--lumo-box-shadow-l);
      }

      :host([theme~="success"]) {
        --_lumo-button-background-color: var(--lumo-shade-20pct);
        --_lumo-button-color: var(--lumo-success-contrast-color);
        --_lumo-button-primary-background-color: var(--lumo-success-contrast-color);
        --_lumo-button-primary-color: var(--lumo-success-text-color);
      }

      :host([theme~="error"]) [part="overlay"] {
        background: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
        box-shadow: var(--lumo-box-shadow-l);
      }

      :host([theme~="error"]) {
        --_lumo-button-background-color: var(--lumo-shade-20pct);
        --_lumo-button-color: var(--lumo-error-contrast-color);
        --_lumo-button-primary-background-color: var(--lumo-error-contrast-color);
        --_lumo-button-primary-color: var(--lumo-error-text-color);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(W.content);var Y=i(54);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class U extends(Object(j.a)(Object(S.a)(u.a))){static get template(){return d.a`
    <style>
      :host {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        align-items: stretch;
        pointer-events: none;
      }

      [region-group] {
        flex: 1 1 0%;
        display: flex;
      }

      [region-group="top"] {
        align-items: flex-start;
      }

      [region-group="bottom"] {
        align-items: flex-end;
      }

      [region-group] > [region] {
        flex: 1 1 0%;
      }

      @media (max-width: 420px) {
        [region-group] {
          flex-direction: column;
          align-items: stretch;
        }

        [region-group="top"] {
          justify-content: flex-start;
        }

        [region-group="bottom"] {
          justify-content: flex-end;
        }

        [region-group] > [region] {
          flex: initial;
        }
      }
    </style>

    <div region="top-stretch"><slot name="top-stretch"></slot></div>
    <div region-group="top">
      <div region="top-start"><slot name="top-start"></slot></div>
      <div region="top-center"><slot name="top-center"></slot></div>
      <div region="top-end"><slot name="top-end"></slot></div>
    </div>
    <div region="middle"><slot name="middle"></slot></div>
    <div region-group="bottom">
      <div region="bottom-start"><slot name="bottom-start"></slot></div>
      <div region="bottom-center"><slot name="bottom-center"></slot></div>
      <div region="bottom-end"><slot name="bottom-end"></slot></div>
    </div>
    <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
`}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}_openedChanged(e){e?(document.body.appendChild(this),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}constructor(){super(),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_detectIosNavbar(){var e=window.innerHeight,t=window.innerWidth>e,i=document.documentElement.clientHeight;this.style.bottom=t&&i>e?i-e+"px":"0"}}class K extends(Object(j.a)(u.a)){static get template(){return d.a`
    <style>
      :host {
        display: block;
      }

      [part="overlay"] {
        pointer-events: auto;
      }
    </style>

    <div part="overlay">
      <div part="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class Q extends(Object(O.a)(Object(S.a)(u.a))){static get template(){return d.a`
    <style>
      :host {
        display: none;
      }
    </style>
    <vaadin-notification-card id="vaadin-notification-card" theme\$="[[theme]]">
    </vaadin-notification-card>
`}static get is(){return"vaadin-notification"}static get version(){return"1.6.1"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function,_notificationTemplate:Object}}static get observers(){return["_durationChanged(duration, opened)","_templateOrRendererChanged(_notificationTemplate, renderer, opened)"]}ready(){super.ready(),this._observer=new g.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}_setTemplateFromNodes(e){this._notificationTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._notificationTemplate}render(){"function"==typeof this.renderer&&this.renderer(this._card,this)}_removeNewRendererOrTemplate(e,t,i,r){e!==t?this._notificationTemplate=void 0:i!==r&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,i){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for notification content");this._oldTemplate=e;var r=this._oldRenderer!==t;if(this._oldRenderer=t,t){if(this._card=this.$["vaadin-notification-card"],r)for(;this._card.firstChild;)this._card.removeChild(this._card.firstChild);i&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.render())}}open(){this.opened=!0}close(){this.opened=!1}get _container(){return Q._container||(Q._container=document.createElement("vaadin-notification-container"),document.body.appendChild(Q._container)),Q._container}_openedChanged(e){e?(this._container.opened=!0,this._instance||this.renderer||this._ensureTemplatized(),this._animatedAppendNotificationCard(),setTimeout(()=>this._updateShadyButtonStyles())):this._card&&this._closeNotificationCard()}_ensureTemplatized(){if(this._notificationTemplate=this.querySelector("template")||this._notificationTemplate,this._notificationTemplate){this._notificationTemplate._Templatizer||(this._notificationTemplate._Templatizer=Object(Y.b)(this._notificationTemplate,this,{forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new this._notificationTemplate._Templatizer({});var e=this._notificationTemplate.getRootNode(),t=e!==document;if(this._card=this.$["vaadin-notification-card"],this._cardContent=this._card.shadowRoot.querySelector('[part~="content"]'),t){if(this._cardContent.shadowRoot||this._cardContent.attachShadow({mode:"open"}),window.ShadyCSS&&!window.ShadyCSS.nativeShadow){var i=e.host&&e.host.localName;i&&-1===i.indexOf("-")&&(i=e.host.getAttribute("is")),i&&this._cardContent.setAttribute("is",i)}else{var r=Array.from(e.querySelectorAll("style")).reduce((e,t)=>e+t.textContent,"").replace(/:host/g,":host-nomatch");if(r){var n=document.createElement("style");n.textContent=r,this._cardContent.shadowRoot.appendChild(n)}}this._cardContent.shadowRoot.appendChild(this._instance.root)}else this._card.appendChild(this._instance.root);this._card.setAttribute("aria-label",this._card.textContent.trim())}}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();var e=()=>{this._card.removeEventListener("animationend",e),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",e),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){this._card&&(this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)?(this._card.slot=this.position,this._container.firstElementChild&&/top/.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)):window.console.warn("Invalid alignment parameter provided: position="+this.position))}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=Boolean(this._container.firstElementChild)}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");var e=getComputedStyle(this._card).getPropertyValue("animation-name");if(e&&"none"!=e){var t=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",t)};this._card.addEventListener("animationend",t)}else this._removeNotificationCard()}_positionChanged(e){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(e,t){t&&(clearTimeout(this._durationTimeoutId),e>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),e)))}_updateShadyButtonStyles(){window.ShadyCSS&&!this.__buttonStylesPending&&(customElements.whenDefined("vaadin-button").then(()=>{Array.from(this._card.querySelectorAll("*")).filter(e=>e instanceof customElements.get("vaadin-button")).forEach(e=>{var t=["--_lumo-button-color","--_lumo-button-background-color","--_lumo-button-primary-color","--_lumo-button-primary-background-color"].reduce((e,t)=>{var i=window.ShadyCSS.getComputedStyleValue(this._card,t);return i&&(e[t]=i),e},{});e.updateStyles(t)}),this.__buttonStylesPending=!1}),this.__buttonStylesPending=!0)}}customElements.define(U.is,U),customElements.define(K.is,K),customElements.define(Q.is,Q);var J=document.createElement("template");J.innerHTML='<dom-module id="lumo-ordered-layout">\n  <template>\n    <style>\n      :host([theme~="margin"]) {\n        margin: var(--lumo-space-m);\n      }\n\n      :host([theme~="padding"]) {\n        padding: var(--lumo-space-m);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(J.content);var X=d.a`<dom-module id="lumo-horizontal-layout" theme-for="vaadin-horizontal-layout">
  <template>
    <style include="lumo-ordered-layout">
      :host([theme~="spacing-xs"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-xs);
      }

      :host([theme~="spacing-s"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-s);
      }

      :host([theme~="spacing"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-m);
      }

      :host([theme~="spacing-l"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-l);
      }

      :host([theme~="spacing-xl"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-xl);
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing-xs"])::before,
      :host([theme~="spacing-s"])::before,
      :host([theme~="spacing"])::before,
      :host([theme~="spacing-l"])::before,
      :host([theme~="spacing-xl"])::before {
        content: "";
      }

      :host([theme~="spacing-xs"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-xs) * -1);
      }

      :host([theme~="spacing-s"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-s) * -1);
      }

      :host([theme~="spacing"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-m) * -1);
      }

      :host([theme~="spacing-l"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-l) * -1);
      }

      :host([theme~="spacing-xl"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-xl) * -1);
      }

      /* RTL styles */
      :host([dir="rtl"][theme~="spacing-xs"]) ::slotted(*) {
        margin-right: var(--lumo-space-xs);
      }

      :host([dir="rtl"][theme~="spacing-s"]) ::slotted(*) {
        margin-right: var(--lumo-space-s);
      }

      :host([dir="rtl"][theme~="spacing"]) ::slotted(*) {
        margin-right: var(--lumo-space-m);
      }

      :host([dir="rtl"][theme~="spacing-l"]) ::slotted(*) {
        margin-right: var(--lumo-space-l);
      }

      :host([dir="rtl"][theme~="spacing-xl"]) ::slotted(*) {
        margin-right: var(--lumo-space-xl);
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([dir="rtl"][theme~="spacing-xs"])::before {
        margin-right: calc(var(--lumo-space-xs) * -1);
      }

      :host([dir="rtl"][theme~="spacing-s"])::before {
        margin-right: calc(var(--lumo-space-s) * -1);
      }

      :host([dir="rtl"][theme~="spacing"])::before {
        margin-right: calc(var(--lumo-space-m) * -1);
      }

      :host([dir="rtl"][theme~="spacing-l"])::before {
        margin-right: calc(var(--lumo-space-l) * -1);
      }

      :host([dir="rtl"][theme~="spacing-xl"])::before {
        margin-right: calc(var(--lumo-space-xl) * -1);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(X.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class Z extends(Object(S.a)(Object(j.a)(u.a))){static get template(){return d.a`
    <style>
      :host {
        display: flex;
        box-sizing: border-box;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Theme variations */
      :host([theme~="margin"]) {
        margin: 1em;
      }

      :host([theme~="padding"]) {
        padding: 1em;
      }

      :host([theme~="spacing"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: 1em;
      }

      :host([theme~="spacing"][dir="rtl"]) ::slotted(*) {
        margin-right: 1em;
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing"])::before {
        content: "";
      }

      :host([theme~="spacing"]:not([dir="rtl"]))::before {
        margin-left: -1em;
      }

      :host([theme~="spacing"][dir="rtl"])::before {
        margin-right: -1em;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-horizontal-layout"}static get version(){return"1.4.0"}}customElements.define(Z.is,Z);var ee=d.a`<dom-module id="lumo-vertical-layout" theme-for="vaadin-vertical-layout">
  <template>
    <style include="lumo-ordered-layout">
      :host([theme~="spacing-xs"]) ::slotted(*) {
        margin-top: var(--lumo-space-xs);
      }

      :host([theme~="spacing-s"]) ::slotted(*) {
        margin-top: var(--lumo-space-s);
      }

      :host([theme~="spacing"]) ::slotted(*) {
        margin-top: var(--lumo-space-m);
      }

      :host([theme~="spacing-l"]) ::slotted(*) {
        margin-top: var(--lumo-space-l);
      }

      :host([theme~="spacing-xl"]) ::slotted(*) {
        margin-top: var(--lumo-space-xl);
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
       :host([theme~="spacing-xs"])::before {
         content: "";
         margin-top: calc(var(--lumo-space-xs) * -1);
       }

       :host([theme~="spacing-s"])::before {
         content: "";
         margin-top: calc(var(--lumo-space-s) * -1);
       }

      :host([theme~="spacing"])::before {
        content: "";
        margin-top: calc(var(--lumo-space-m) * -1);
      }

      :host([theme~="spacing-l"])::before {
        content: "";
        margin-top: calc(var(--lumo-space-l) * -1);
      }

      :host([theme~="spacing-xl"])::before {
        content: "";
        margin-top: calc(var(--lumo-space-xl) * -1);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(ee.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class te extends(Object(S.a)(Object(j.a)(u.a))){static get template(){return d.a`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Theme variations */
      :host([theme~="margin"]) {
        margin: 1em;
      }

      :host([theme~="padding"]) {
        padding: 1em;
      }

      :host([theme~="spacing"]) ::slotted(*) {
        margin-top: 1em;
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing"])::before {
        content: "";
        margin-top: -1em;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-vertical-layout"}static get version(){return"1.4.0"}}customElements.define(te.is,te);i(216),i(217);var ie=d.a`<dom-module id="lumo-text-area" theme-for="vaadin-text-area">
  <template>
    <style include="lumo-text-field">
      [part="input-field"],
      [part="input-field"] ::slotted(textarea) {
        /* Equal to the implicit padding in vaadin-text-field */
        padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
        padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
        height: auto;
        box-sizing: border-box;
        transition: background-color 0.1s;
        line-height: var(--lumo-line-height-s);
      }

      :host(:not([readonly])) [part="input-field"]::after {
        display: none;
      }

      :host([readonly]) [part="input-field"] {
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      :host([readonly]) [part="input-field"]::after {
        border: none;
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"] {
        background-color: var(--lumo-contrast-20pct);
      }

      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="input-field"] {
          background-color: var(--lumo-contrast-10pct);
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      [part="value"],
      [part="input-field"] ::slotted(textarea) {
        line-height: inherit;
        --_lumo-text-field-overflow-mask-image: none;
      }

      /* Vertically align icon prefix/suffix with the first line of text */
      [part="input-field"] ::slotted(iron-icon) {
        margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
      }

      [part="input-field"] [part="value"],
      [part="input-field"] ::slotted(textarea) {
        white-space: pre-wrap; /* override \`nowrap\` from <vaadin-text-field> */
        align-self: stretch; /* override \`baseline\` from <vaadin-text-field> */
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(ie.content);i(117);var re=i(128),ne=i(71);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class oe extends(Object(S.a)(Object(re.a)(Object(ne.a)(Object(j.a)(u.a))))){static get template(){return d.a`
    <style include="vaadin-text-field-shared-styles">
      .vaadin-text-area-container {
        flex: auto;
        max-height: inherit; /* MSIE 11 */
        min-height: inherit; /* MSIE 11 */
      }

      /* The label, helper text and the error message should neither grow nor shrink. */
      [part="label"],
      [part="helper-text"],
      [part="error-message"] {
        flex: none;
      }

      [part="input-field"] {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      [part="value"] {
        resize: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(*) {
        align-self: flex-start;
      }

      @keyframes vaadin-text-area-appear {
        to {
          opacity: 1;
        }
      }

      :host {
        animation: 1ms vaadin-text-area-appear;
      }
    </style>

    <div class="vaadin-text-area-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="textarea">
          <textarea part="value"></textarea>
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="helper-text" on-click="focus" id="[[_helperTextId]]">
        <slot name="helper">[[helperText]]</slot>
      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-area"}static get version(){return"2.8.4"}static get observers(){return["_textAreaValueChanged(value)"]}ready(){super.ready(),this._updateHeight(),this.addEventListener("animationend",this._onAnimationEnd),this.__safari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-text-area-appear")&&this._updateHeight()}get _slottedTagName(){return"textarea"}_textAreaValueChanged(e){this._updateHeight()}_updateHeight(){var e=this.root.querySelector("[part=input-field]"),t=e.scrollTop,i=this.inputElement,r=getComputedStyle(i).width,n=this.value?this.value.length:0;this._oldValueLength>=n&&(i.style.maxWidth=r,i.style.height="auto",this.__safari&&(e.style.display="block")),this._oldValueLength=n;var o=i.scrollHeight;o>i.clientHeight&&(i.style.height=o+"px"),i.style.removeProperty("max-width"),e.style.removeProperty("display"),e.scrollTop=t,this._dispatchIronResizeEventIfNeeded("InputHeight",o)}}customElements.define(oe.is,oe);i(222);var se=document.createElement("div");function ae(e){var t=document.createElement("template");t.innerHTML=e,document.head.appendChild(t.content)}se.innerHTML='<custom-style><style include="lumo-color lumo-typography"></style></custom-style>',document.head.insertBefore(se.firstElementChild,document.head.firstChild),ae(`<custom-style><style>${r.a}</style></custom-style>`),ae(`<custom-style><style>${n.a}</style></custom-style>`),ae(`<dom-module id="flow_css_mod_2" theme-for="vaadin-grid"><template><style>${o.a}</style></template></dom-module>`),ae(`<dom-module id="flow_css_mod_3" theme-for="vaadin-text-field"><template><style>${s.a}</style></template></dom-module>`);document.getElementsByTagName("script");for(var le,de=document.getElementsByTagName("script"),ce=0;ce<de.length;ce++){var he=de[ce];if("module"==he.getAttribute("type")&&he.getAttribute("data-app-id")&&!he["vaadin-bundle"]){le=he;break}}if(!le)throw new Error("Could not find the bundle script to identify the application id");le["vaadin-bundle"]=!0,window.Vaadin.Flow.fallbacks||(window.Vaadin.Flow.fallbacks={});var ue=window.Vaadin.Flow.fallbacks;ue[le.getAttribute("data-app-id")]={},ue[le.getAttribute("data-app-id")].loadFallback=function(){return Promise.all([i.e(0),i.e(4),i.e(6)]).then(i.bind(null,477))}}]);
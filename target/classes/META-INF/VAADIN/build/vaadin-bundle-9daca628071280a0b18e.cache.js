!function(t){function e(e){for(var n,i,o=e[0],a=e[1],s=0,c=[];s<o.length;s++)i=o[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&c.push(r[i][0]),r[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(l&&l(e);c.length;)c.shift()()}var n={},r={1:0};function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,i){n=r[t]=[e,i]}));e.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(t){return i.p+"build/vaadin-"+({}[t]||t)+"-"+{0:"704680d2991b6b21b76b",4:"fc4f34ba40ff7f53b43b",6:"b95c9c2224987f5fb82c"}[t]+".cache.js"}(t);var l=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,n[1](l)}r[t]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="VAADIN/",i.oe=function(t){throw console.error(t),t};var o=window.webpackJsonp=window.webpackJsonp||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var l=a;i(i.s=161)}([,,,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:t=>t},,function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"g",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"i",(function(){return s})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"h",(function(){return h}));n(15);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(t){return t.indexOf(".")>=0}function i(t){var e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function o(t,e){return 0===t.indexOf(e+".")}function a(t,e){return 0===e.indexOf(t+".")}function s(t,e,n){return e+n.slice(t.length)}function l(t,e){return t===e||o(t,e)||a(t,e)}function c(t){if(Array.isArray(t)){for(var e=[],n=0;n<t.length;n++)for(var r=t[n].toString().split("."),i=0;i<r.length;i++)e.push(r[i]);return e.join(".")}return t}function d(t){return Array.isArray(t)?c(t).split("."):t.toString().split(".")}function u(t,e,n){for(var r=t,i=d(e),o=0;o<i.length;o++){if(!r)return;r=r[i[o]]}return n&&(n.path=i.join(".")),r}function h(t,e,n){var r=t,i=d(e),o=i[i.length-1];if(i.length>1){for(var a=0;a<i.length-1;a++){if(!(r=r[i[a]]))return}r[o]=n}else r[e]=n;return i.join(".")}},,function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(15);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class r{constructor(t){this.value=t.toString()}toString(){return this.value}}function i(t){if(t instanceof r)return t.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+t)}var o=function(t,...e){var n=document.createElement("template");return n.innerHTML=e.reduce((e,n,o)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof r)return i(t);throw new Error("non-template value passed to Polymer's html function: "+t)}(n)+t[o+1],t[0]),n}},,function(t,e,n){"use strict";n.d(e,"d",(function(){return l})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return u}));n(15);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var r=0,i=0,o=[],a=0,s=document.createTextNode("");new window.MutationObserver((function(){for(var t=o.length,e=0;e<t;e++){var n=o[e];if(n)try{n()}catch(t){setTimeout(()=>{throw t})}}o.splice(0,t),i+=t})).observe(s,{characterData:!0});var l={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},c={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},d={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},u={run:t=>(s.textContent=a++,o.push(t),r++),cancel(t){var e=t-i;if(e>=0){if(!o[e])throw new Error("invalid async handle: "+t);o[e]=null}}}},,,function(t,e,n){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t}},,function(t,e,n){"use strict";n.d(e,"h",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"g",(function(){return u}));n(15);var r=n(29),i=!window.ShadyDOM,o=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,Object(r.a)(document.baseURI||window.location.href)),a=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,s=!1,l=!1,c=!1,d=!1,u=!1},,function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(15);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var r=0;function i(){}i.prototype.__mixinApplications,i.prototype.__mixinSet;var o=function(t){var e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);var n=r++;return function(r){var i=r.__mixinSet;if(i&&i[n])return r;var o=e,a=o.get(r);a||(a=t(r),o.set(r,a));var s=Object.create(a.__mixinSet||i||null);return s[n]=!0,a.__mixinSet=s,a}}},,function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a}));n(15),n(19),n(12);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class r{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,i.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),i.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,n){return t instanceof r?t._cancelAsync():t=new r,t.setConfig(e,n),t}}var i=new Set,o=function(t){i.add(t)},a=function(){var t=Boolean(i.size);return i.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t}},,function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return l}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r,i,o=!(window.ShadyDOM&&window.ShadyDOM.inUse);function a(t){r=(!t||!t.shimcssproperties)&&(o||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(i=window.ShadyCSS.cssBuild);var s=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?r=window.ShadyCSS.nativeCss:window.ShadyCSS?(a(window.ShadyCSS),window.ShadyCSS=void 0):a(window.WebComponents&&window.WebComponents.flags);var l=r},,function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(67),i=(n(10),Object(r.a)(HTMLElement))},,function(t,e,n){"use strict";n.d(e,"p",(function(){return c})),n.d(e,"m",(function(){return d})),n.d(e,"j",(function(){return u})),n.d(e,"f",(function(){return h})),n.d(e,"a",(function(){return p})),n.d(e,"c",(function(){return f})),n.d(e,"b",(function(){return _})),n.d(e,"e",(function(){return v})),n.d(e,"l",(function(){return b})),n.d(e,"n",(function(){return y})),n.d(e,"q",(function(){return g})),n.d(e,"i",(function(){return w})),n.d(e,"g",(function(){return C})),n.d(e,"o",(function(){return x})),n.d(e,"h",(function(){return O})),n.d(e,"d",(function(){return A})),n.d(e,"k",(function(){return S}));var r=n(23),i=n(35),o=n(37),a=new Set;function s(t){var e=t.textContent;if(!a.has(e)){a.add(e);var n=document.createElement("style");n.setAttribute("shady-unscoped",""),n.textContent=e,document.head.appendChild(n)}}function l(t){return t.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function c(t,e){return t?("string"==typeof t&&(t=Object(i.b)(t)),e&&h(t,e),Object(i.d)(t,r.c)):""}function d(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=Object(i.b)(t.textContent)),t.__cssRules||null}function u(t){return Boolean(t.parent)&&t.parent.type===i.e.KEYFRAMES_RULE}function h(t,e,n,r){if(t){var a=!1,s=t.type;if(r&&s===i.e.MEDIA_RULE){var l=t.selector.match(o.e);l&&(window.matchMedia(l[1]).matches||(a=!0))}s===i.e.STYLE_RULE?e(t):n&&s===i.e.KEYFRAMES_RULE?n(t):s===i.e.MIXIN_RULE&&(a=!0);var c=t.rules;if(c&&!a)for(var d,u=0,p=c.length;u<p&&(d=c[u]);u++)h(d,e,n,r)}}function p(t,e,n,r){var i=function(t,e){var n=document.createElement("style");e&&n.setAttribute("scope",e);return n.textContent=t,n}(t,e);return _(i,n,r),i}var m=null;function f(t){var e=document.createComment(" Shady DOM styles for "+t+" "),n=m?m.nextSibling:null,r=document.head;return r.insertBefore(e,n||r.firstChild),m=e,e}function _(t,e,n){e=e||document.head;var r=n&&n.nextSibling||e.firstChild;(e.insertBefore(t,r),m)?t.compareDocumentPosition(m)===Node.DOCUMENT_POSITION_PRECEDING&&(m=t):m=t}function v(t,e){for(var n=0,r=e,i=t.length;r<i;r++)if("("===t[r])n++;else if(")"===t[r]&&0==--n)return r;return-1}function b(t,e){var n=t.indexOf("var(");if(-1===n)return e(t,"","","");var r=v(t,n+3),i=t.substring(n+4,r),o=t.substring(0,n),a=b(t.substring(r+1),e),s=i.indexOf(",");return-1===s?e(o,i.trim(),"",a):e(o,i.substring(0,s).trim(),i.substring(s+1).trim(),a)}function y(t,e){r.d?t.setAttribute("class",e):window.ShadyDOM.nativeMethods.setAttribute.call(t,"class",e)}var g=window.ShadyDOM&&window.ShadyDOM.wrap||(t=>t);function w(t){var e=t.localName,n="",r="";return e?e.indexOf("-")>-1?n=e:(r=e,n=t.getAttribute&&t.getAttribute("is")||""):(n=t.is,r=t.extends),{is:n,typeExtension:r}}function C(t){for(var e=[],n=t.querySelectorAll("style"),i=0;i<n.length;i++){var o=n[i];l(o)?r.d||(s(o),o.parentNode.removeChild(o)):(e.push(o.textContent),o.parentNode.removeChild(o))}return e.join("").trim()}function x(t){for(var e=[],n="",r=0;r>=0&&r<t.length;r++)if("("===t[r]){var i=v(t,r);n+=t.slice(r,i+1),r=i}else","===t[r]?(e.push(n),n=""):n+=t[r];return n&&e.push(n),e}function O(t){if(void 0!==r.a)return r.a;if(void 0===t.__cssBuild){var e=t.getAttribute("css-build");if(e)t.__cssBuild=e;else{var n=function(t){var e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){var n=e.textContent.trim().split(":");if("css-build"===n[0])return n[1]}return""}(t);""!==n&&function(t){var e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}(t),t.__cssBuild=n}}return t.__cssBuild||""}function A(t){return""!==O(t)}function S(t=""){return!(""===t||!r.c)&&(r.d?"shadow"===t:"shady"===t)}},,function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return c}));n(15);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var r,i,o=/(url\()([^)]*)(\))/g,a=/(^\/)|(^#)|(^[\w-\d]*:)/;function s(t,e){if(t&&a.test(t))return t;if(void 0===r){r=!1;try{var n=new URL("b","http://a");n.pathname="c%20d",r="http://a/c%20d"===n.href}catch(t){}}return e||(e=document.baseURI||window.location.href),r?new URL(t,e).href:(i||((i=document.implementation.createHTMLDocument("temp")).base=i.createElement("base"),i.head.appendChild(i.base),i.anchor=i.createElement("a"),i.body.appendChild(i.anchor)),i.base.href=e,i.anchor.href=t,i.anchor.href||t)}function l(t,e){return t.replace(o,(function(t,n,r,i){return n+"'"+s(r.replace(/["']/g,""),e)+"'"+i}))}function c(t){return t.substring(0,t.lastIndexOf("/")+1)}},,function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return h}));n(15);var r=n(6),i=(n(17),n(84)),o=(n(33),n(21),Element.prototype),a=o.matches||o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector,s=function(t,e){return a.call(t,e)};class l{constructor(t){this.node=t}observeNodes(t){return new i.a(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Object(r.a)(this.node).contains(t))return!0;for(var e=t,n=t.ownerDocument;e&&e!==n&&e!==this.node;)e=Object(r.a)(e).parentNode||Object(r.a)(e).host;return e===this.node}getOwnerRoot(){return Object(r.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(r.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){for(var t=[],e=Object(r.a)(this.node).assignedSlot;e;)t.push(e),e=Object(r.a)(e).assignedSlot;return t}importNode(t,e){var n=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(r.a)(n).importNode(t,e)}getEffectiveChildNodes(){return i.a.getFlattenedNodes(this.node)}queryDistributedElements(t){for(var e,n=this.getEffectiveChildNodes(),r=[],i=0,o=n.length;i<o&&(e=n[i]);i++)e.nodeType===Node.ELEMENT_NODE&&s(e,t)&&r.push(e);return r}get activeElement(){var t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function c(t,e){for(var n=function(n){var r=e[n];Object.defineProperty(t,r,{get:function(){return this.node[r]},configurable:!0})},r=0;r<e.length;r++)n(r)}class d{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}l.prototype.cloneNode,l.prototype.appendChild,l.prototype.insertBefore,l.prototype.removeChild,l.prototype.replaceChild,l.prototype.setAttribute,l.prototype.removeAttribute,l.prototype.querySelector,l.prototype.querySelectorAll,l.prototype.parentNode,l.prototype.firstChild,l.prototype.lastChild,l.prototype.nextSibling,l.prototype.previousSibling,l.prototype.firstElementChild,l.prototype.lastElementChild,l.prototype.nextElementSibling,l.prototype.previousElementSibling,l.prototype.childNodes,l.prototype.children,l.prototype.classList,l.prototype.textContent,l.prototype.innerHTML;var u=l;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(l.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=l.prototype[e])}),c(t.prototype,["classList"]),u=t,Object.defineProperties(d.prototype,{localTarget:{get(){return this.event.currentTarget},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(var n=function(n){var r=e[n];t[r]=function(){return this.node[r].apply(this.node,arguments)}},r=0;r<e.length;r++)n(r)}(l.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),c(l.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(var n=function(n){var r=e[n];Object.defineProperty(t,r,{get:function(){return this.node[r]},set:function(t){this.node[r]=t},configurable:!0})},r=0;r<e.length;r++)n(r)}(l.prototype,["textContent","innerHTML"]);var h=function(t){if((t=t||document)instanceof u)return t;if(t instanceof d)return t;var e=t.__domApi;return e||(e=t instanceof Event?new d(t):new u(t),t.__domApi=e),e}},,function(t,e,n){"use strict";n.d(e,"b",(function(){return i}));n(15);var r=n(21);n.d(e,"a",(function(){return r.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var i=function(){var t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Object(r.c)()}while(t||e)}},,function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"e",(function(){return s}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class r{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function i(t){return function t(e,n){var r=n.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=r.trim(),e.parent){var i=e.previous?e.previous.end:e.parent.start;r=(r=(r=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){for(var t=arguments[1],e=6-t.length;e--;)t="0"+t;return"\\"+t}))}(r=n.substring(i,e.start-1))).replace(d.multipleSpaces," ")).substring(r.lastIndexOf(";")+1);var o=e.parsedSelector=e.selector=r.trim();e.atRule=0===o.indexOf(p),e.atRule?0===o.indexOf(h)?e.type=s.MEDIA_RULE:o.match(d.keyframesRule)&&(e.type=s.KEYFRAMES_RULE,e.keyframesName=e.selector.split(d.multipleSpaces).pop()):0===o.indexOf(u)?e.type=s.MIXIN_RULE:e.type=s.STYLE_RULE}var a=e.rules;if(a)for(var l,c=0,m=a.length;c<m&&(l=a[c]);c++)t(l,n);return e}(function(t){var e=new r;e.start=0,e.end=t.length;for(var n=e,i=0,o=t.length;i<o;i++)if(t[i]===l){n.rules||(n.rules=[]);var a=n,s=a.rules[a.rules.length-1]||null;(n=new r).start=i+1,n.parent=a,n.previous=s,a.rules.push(n)}else t[i]===c&&(n.end=i+1,n=n.parent||e);return e}(t=t.replace(d.comments,"").replace(d.port,"")),t)}function o(t,e,n=""){var r="";if(t.cssText||t.rules){var i=t.rules;if(i&&!function(t){var e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(u)}(i))for(var s,h=0,p=i.length;h<p&&(s=i[h]);h++)r=o(s,e,r);else(r=(r=e?t.cssText:function(t){return function(t){return t.replace(d.mixinApply,"").replace(d.varApply,"")}(t=a(t))}(t.cssText)).trim())&&(r="  "+r+"\n")}return r&&(t.selector&&(n+=t.selector+" "+l+"\n"),n+=r,t.selector&&(n+=c+"\n\n")),n}function a(t){return t.replace(d.customProp,"").replace(d.mixinProp,"")}var s={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",c="}",d={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},u="--",h="@media",p="@"},,function(t,e,n){"use strict";n.d(e,"g",(function(){return r})),n.d(e,"f",(function(){return i})),n.d(e,"h",(function(){return o})),n.d(e,"a",(function(){return a})),n.d(e,"e",(function(){return s})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return d}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,i=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,o=/(--[\w-]+)\s*([:,;)]|$)/gi,a=/(animation\s*:)|(animation-name\s*:)/,s=/@media\s(.*)/,l=/\{[^}]*\}/g,c="(?:^|[^.#[:])",d="($|[.:[\\s>+~])"},,,function(t,e,n){"use strict";n.d(e,"b",(function(){return y})),n.d(e,"a",(function(){return g}));n(15);var r=n(69),i=n(51),o=n(17),a=n(6),s=null;function l(){return s}l.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:l,writable:!0}});var c=Object(r.a)(l),d=Object(i.a)(c);var u=Object(r.a)(class{});class h extends u{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);for(var e=this.children=[],n=this.root.firstChild;n;n=n.nextSibling)e.push(n),n.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);var r=this.__templatizeOptions;(t&&r.instanceProps||!r.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(var e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(var n in t)this._setPendingProperty(n,t[n])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,n(t)});else{var r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(t,e,n)}}_showHideChildren(t){for(var e=this.children,n=0;n<e.length;n++){var r=e[n];if(Boolean(t)!=Boolean(r.__hideTemplateChildren__))if(r.nodeType===Node.TEXT_NODE)t?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if("slot"===r.localName)if(t)r.__polymerReplaced__=document.createComment("hidden-slot"),Object(a.a)(Object(a.a)(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{var i=r.__polymerReplaced__;i&&Object(a.a)(Object(a.a)(i).parentNode).replaceChild(r,i)}else r.style&&(t?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=t,r._showHideChildren&&r._showHideChildren(t)}}_setUnmanagedPropertyToNode(t,e,n){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(t,e,n)}get parentModel(){var t=this.__parentModel;if(!t){var e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}h.prototype.__dataHost,h.prototype.__templatizeOptions,h.prototype._methodHost,h.prototype.__templatizeOwner,h.prototype.__hostProps;var p=Object(i.a)(h);function m(t){var e=t.__dataHost;return e&&e._methodHost||e}function f(t,e,n){var r=n.mutableData?p:h;y.mixin&&(r=y.mixin(r));var i=class extends r{};return i.prototype.__templatizeOptions=n,i.prototype._bindTemplate(t),function(t,e,n,r){var i=n.hostProps||{};for(var o in r.instanceProps){delete i[o];var a=r.notifyInstanceProp;a&&t.prototype._addPropertyEffect(o,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:b(o,a)})}if(r.forwardHostProp&&e.__dataHost)for(var s in i)t.prototype._addPropertyEffect(s,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,n){t.__dataHost._setPendingPropertyOrPath("_host_"+e,n[e],!0,!0)}})}(i,t,e,n),i}function _(t,e,n){var r=n.forwardHostProp;if(r){var i=e.templatizeTemplateClass;if(!i){var o=n.mutableData?d:c;i=e.templatizeTemplateClass=class extends o{};var a=e.hostProps;for(var l in a)i.prototype._addPropertyEffect("_host_"+l,i.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:v(l,r)}),i.prototype._createNotifyingProperty("_host_"+l)}!function(t,e){s=t,Object.setPrototypeOf(t,e.prototype),new e,s=null}(t,i),t.__dataProto&&Object.assign(t.__data,t.__dataProto),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}}function v(t,e){return function(t,n,r){e.call(t.__templatizeOwner,n.substring("_host_".length),r[n])}}function b(t,e){return function(t,n,r){e.call(t.__templatizeOwner,t,n,r[n])}}function y(t,e,n){if(o.f&&!m(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(n=n||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;var r=(e?e.constructor:h)._parseTemplate(t),i=r.templatizeInstanceClass;i||(i=f(t,r,n),r.templatizeInstanceClass=i),_(t,r,n);var a=class extends i{};return a.prototype._methodHost=m(t),a.prototype.__dataHost=t,a.prototype.__templatizeOwner=e,a.prototype.__hostProps=r.hostProps,a=a}function g(t,e){for(var n;e;)if(n=e.__templatizeInstance){if(n.__dataHost==t)return n;e=n.__dataHost}else e=Object(a.a)(e).parentNode;return null}},,function(t,e,n){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/e.a={}},,function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(48),i=n(97),o=t=>class extends(Object(i.a)(t)){static finalize(){super.finalize();var t=this.prototype._template,e=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,n=Object.getPrototypeOf(this.prototype)._template;n&&!e&&Array.from(n.content.querySelectorAll("style[include]")).forEach(e=>{this._includeStyle(e.getAttribute("include"),t)}),this._includeMatchingThemes(t)}static _includeMatchingThemes(t){var e=r.a.prototype.modules,n=!1,i=this.is+"-default-theme";Object.keys(e).sort((t,e)=>{var n=0===t.indexOf("vaadin-"),r=0===e.indexOf("vaadin-"),i=["lumo-","material-"],o=i.filter(e=>0===t.indexOf(e)).length>0,a=i.filter(t=>0===e.indexOf(t)).length>0;return n!==r?n?-1:1:o!==a?o?-1:1:0}).forEach(r=>{if(r!==i){var o=e[r].getAttribute("theme-for");o&&o.split(" ").forEach(e=>{new RegExp("^"+e.split("*").join(".*")+"$").test(this.is)&&(n=!0,this._includeStyle(r,t))})}}),!n&&e[i]&&this._includeStyle(i,t)}static _includeStyle(t,e){if(e&&!e.content.querySelector(`style[include="${t}"]`)){var n=document.createElement("style");n.setAttribute("include",t),e.content.appendChild(n)}}}},,function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(12),i=n(21),o=n(33),a=n(118),s=n(110);function l(){}var c,d=function(){if("function"==typeof s.a)return Object(s.a)(l)};window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){d&&d()};var u=new Set,h=t=>class extends(Object(a.a)(t)){static finalize(){super.finalize();var{is:t}=this;t&&!u.has(t)&&(window.Vaadin.registrations.push(this),u.add(t),window.Vaadin.developmentModeCallback&&(c=i.a.debounce(c,r.b,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Object(o.a)(c)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}},,function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(15);var r=n(29),i=n(17),o={},a={};function s(t,e){o[t]=a[t.toLowerCase()]=e}function l(t){return o[t]||a[t.toLowerCase()]}class c extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){var n=l(t);return n&&e?n.querySelector(e):n}return null}attributeChangedCallback(t,e,n,r){e!==n&&this.register()}get assetpath(){if(!this.__assetpath){var t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Object(r.c)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Object(r.a)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(i.f&&void 0!==l(t))throw s(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,s(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}c.prototype.modules=o,customElements.define("dom-module",c)},,function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}));var r=n(37);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function i(t,e){for(var n in e)null===n?t.style.removeProperty(n):t.style.setProperty(n,e[n])}function o(t,e){var n=window.getComputedStyle(t).getPropertyValue(e);return n?n.trim():""}function a(t){var e=r.f.test(t)||r.g.test(t);return r.f.lastIndex=0,r.g.lastIndex=0,e}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a}));var r=n(19);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function i(t,e,n,r,i){var o;i&&(o="object"==typeof n&&null!==n)&&(r=t.__dataTemp[e]);var a=r!==n&&(r==r||n==n);return o&&a&&(t.__dataTemp[e]=n),a}var o=Object(r.a)(t=>class extends t{_shouldPropertyChange(t,e,n){return i(this,t,e,n,!0)}}),a=Object(r.a)(t=>class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,n){return i(this,t,e,n,this.mutableData)}});o._mutablePropertyChange=i},,,function(t,e,n){"use strict";n.r(e),n.d(e,"gestures",(function(){return E})),n.d(e,"recognizers",(function(){return T})),n.d(e,"deepTargetFind",(function(){return k})),n.d(e,"addListener",(function(){return N})),n.d(e,"removeListener",(function(){return j})),n.d(e,"register",(function(){return L})),n.d(e,"setTouchAction",(function(){return M})),n.d(e,"prevent",(function(){return D})),n.d(e,"resetMouseCanceller",(function(){return F})),n.d(e,"findOriginalTarget",(function(){return Y})),n.d(e,"add",(function(){return U})),n.d(e,"remove",(function(){return J}));n(15);var r=n(12),i=n(21),o=n(17),a=n(6),s="string"==typeof document.head.style.touchAction,l="__polymerGesturesHandled",c="__polymerGesturesTouchAction",d=["mousedown","mousemove","mouseup","click"],u=[0,1,4,2],h=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function p(t){return d.indexOf(t)>-1}var m=!1;function f(t){if(!p(t)&&"touchend"!==t)return s&&m&&o.c?{passive:!0}:void 0}!function(){try{var t=Object.defineProperty({},"passive",{get(){m=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();var _=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),v=[],b={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},y={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function g(t){var e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];var n=t.getRootNode();if(t.id)for(var r=n.querySelectorAll(`label[for = ${t.id}]`),i=0;i<r.length;i++)e.push(r[i])}return e}var w=function(t){var e,n=t.sourceCapabilities;if((!n||n.firesTouchEvents)&&(t[l]={skip:!0},"click"===t.type)){for(var r=!1,i=P(t),o=0;o<i.length;o++){if(i[o].nodeType===Node.ELEMENT_NODE)if("label"===i[o].localName)v.push(i[o]);else if(e=i[o],b[e.localName])for(var a=g(i[o]),s=0;s<a.length;s++)r=r||v.indexOf(a[s])>-1;if(i[o]===O.mouse.target)return}if(r)return;t.preventDefault(),t.stopPropagation()}};function C(t){for(var e,n=_?["click"]:d,r=0;r<n.length;r++)e=n[r],t?(v.length=0,document.addEventListener(e,w,!0)):document.removeEventListener(e,w,!0)}function x(t){var e=t.type;if(!p(e))return!1;if("mousemove"===e){var n=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!h&&(n=u[t.which]||0),Boolean(1&n)}return 0===(void 0===t.button?0:t.button)}var O={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function A(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function S(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",(function(t){O.mouse.mouseIgnoreJob||C(!0),O.mouse.target=P(t)[0],O.mouse.mouseIgnoreJob=i.a.debounce(O.mouse.mouseIgnoreJob,r.d.after(2500),(function(){C(),O.mouse.target=null,O.mouse.mouseIgnoreJob=null}))}),!!m&&{passive:!0});var P=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],E={},T=[];function k(t,e){for(var n=document.elementFromPoint(t,e),r=n;r&&r.shadowRoot&&!window.ShadyDOM;){if(r===(r=r.shadowRoot.elementFromPoint(t,e)))break;r&&(n=r)}return n}function I(t){var e=P(t);return e.length>0?e[0]:t.target}function z(t){var e,n=t.type,r=t.currentTarget.__polymerGestures;if(r){var i=r[n];if(i){if(!t[l]&&(t[l]={},"touch"===n.slice(0,5))){var o=(t=t).changedTouches[0];if("touchstart"===n&&1===t.touches.length&&(O.touch.id=o.identifier),O.touch.id!==o.identifier)return;s||"touchstart"!==n&&"touchmove"!==n||function(t){var e=t.changedTouches[0],n=t.type;if("touchstart"===n)O.touch.x=e.clientX,O.touch.y=e.clientY,O.touch.scrollDecided=!1;else if("touchmove"===n){if(O.touch.scrollDecided)return;O.touch.scrollDecided=!0;var r=function(t){for(var e,n="auto",r=P(t),i=0;i<r.length;i++)if((e=r[i])[c]){n=e[c];break}return n}(t),i=!1,o=Math.abs(O.touch.x-e.clientX),a=Math.abs(O.touch.y-e.clientY);t.cancelable&&("none"===r?i=!0:"pan-x"===r?i=a>o:"pan-y"===r&&(i=o>a)),i?t.preventDefault():D("track")}}(t)}if(!(e=t[l]).skip){for(var a,d=0;d<T.length;d++)i[(a=T[d]).name]&&!e[a.name]&&a.flow&&a.flow.start.indexOf(t.type)>-1&&a.reset&&a.reset();for(var u,h=0;h<T.length;h++)i[(u=T[h]).name]&&!e[u.name]&&(e[u.name]=!0,u[n](t))}}}}function N(t,e,n){return!!E[e]&&(function(t,e,n){var r=E[e],i=r.deps,o=r.name,a=t.__polymerGestures;a||(t.__polymerGestures=a={});for(var s,l,c=0;c<i.length;c++)s=i[c],_&&p(s)&&"click"!==s||((l=a[s])||(a[s]=l={_count:0}),0===l._count&&t.addEventListener(s,z,f(s)),l[o]=(l[o]||0)+1,l._count=(l._count||0)+1);t.addEventListener(e,n),r.touchAction&&M(t,r.touchAction)}(t,e,n),!0)}function j(t,e,n){return!!E[e]&&(function(t,e,n){var r=E[e],i=r.deps,o=r.name,a=t.__polymerGestures;if(a)for(var s,l,c=0;c<i.length;c++)s=i[c],(l=a[s])&&l[o]&&(l[o]=(l[o]||1)-1,l._count=(l._count||1)-1,0===l._count&&t.removeEventListener(s,z,f(s)));t.removeEventListener(e,n)}(t,e,n),!0)}function L(t){T.push(t);for(var e=0;e<t.emits.length;e++)E[t.emits[e]]=t}function M(t,e){s&&t instanceof HTMLElement&&r.c.run(()=>{t.style.touchAction=e}),t[c]=e}function R(t,e,n){var r=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=n,Object(a.a)(t).dispatchEvent(r),r.defaultPrevented){var i=n.preventer||n.sourceEvent;i&&i.preventDefault&&i.preventDefault()}}function D(t){var e=function(t){for(var e,n=0;n<T.length;n++){e=T[n];for(var r=0;r<e.emits.length;r++)if(e.emits[r]===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function F(){O.mouse.mouseIgnoreJob&&O.mouse.mouseIgnoreJob.flush()}function H(t,e,n,r){e&&R(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:r,prevent:function(t){return D(t)}})}function B(t,e,n){if(t.prevent)return!1;if(t.started)return!0;var r=Math.abs(t.x-e),i=Math.abs(t.y-n);return r>=5||i>=5}function V(t,e,n){if(e){var r,i=t.moves[t.moves.length-2],o=t.moves[t.moves.length-1],a=o.x-t.x,s=o.y-t.y,l=0;i&&(r=o.x-i.x,l=o.y-i.y),R(e,"track",{state:t.state,x:n.clientX,y:n.clientY,dx:a,dy:s,ddx:r,ddy:l,sourceEvent:n,hover:function(){return k(n.clientX,n.clientY)}})}}function q(t,e,n){var r=Math.abs(e.clientX-t.x),i=Math.abs(e.clientY-t.y),o=I(n||e);!o||y[o.localName]&&o.hasAttribute("disabled")||(isNaN(r)||isNaN(i)||r<=25&&i<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;var e=I(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;var n=e.getBoundingClientRect(),r=t.pageX,i=t.pageY;return!(r>=n.left&&r<=n.right&&i>=n.top&&i<=n.bottom)}return!1}(e))&&(t.prevent||R(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:n}))}L({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){S(this.info)},mousedown:function(t){if(x(t)){var e=I(t),n=this;A(this.info,(function(t){x(t)||(H("up",e,t),S(n.info))}),(function(t){x(t)&&H("up",e,t),S(n.info)})),H("down",e,t)}},touchstart:function(t){H("down",I(t),t.changedTouches[0],t)},touchend:function(t){H("up",I(t),t.changedTouches[0],t)}}),L({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,S(this.info)},mousedown:function(t){if(x(t)){var e=I(t),n=this,r=function(t){var r=t.clientX,i=t.clientY;B(n.info,r,i)&&(n.info.state=n.info.started?"mouseup"===t.type?"end":"track":"start","start"===n.info.state&&D("tap"),n.info.addMove({x:r,y:i}),x(t)||(n.info.state="end",S(n.info)),e&&V(n.info,e,t),n.info.started=!0)};A(this.info,r,(function(t){n.info.started&&r(t),S(n.info)})),this.info.x=t.clientX,this.info.y=t.clientY}},touchstart:function(t){var e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){var e=I(t),n=t.changedTouches[0],r=n.clientX,i=n.clientY;B(this.info,r,i)&&("start"===this.info.state&&D("tap"),this.info.addMove({x:r,y:i}),V(this.info,e,n),this.info.state="track",this.info.started=!0)},touchend:function(t){var e=I(t),n=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),V(this.info,e,n))}}),L({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){x(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){x(t)&&q(this.info,t)},touchstart:function(t){var e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){q(this.info,t.changedTouches[0],t)}});var Y=I,U=N,J=j},,function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(116),i=(n(15),function(t){var e;return e="function"==typeof t?t:i.Class(t),customElements.define(e.is,e),e});i.Class=r.a},function(t,e,n){"use strict";class r extends HTMLElement{static get version(){return"1.6.0"}}customElements.define("vaadin-lumo-styles",r)},,,function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s}));n(15);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var r={},i=/-[a-z]/g,o=/([A-Z])/g;function a(t){return r[t]||(r[t]=t.indexOf("-")<0?t:t.replace(i,t=>t[1].toUpperCase()))}function s(t){return r[t]||(r[t]=t.replace(o,"-$1").toLowerCase())}},,function(t,e,n){"use strict";n(57),n(64);var r=document.createElement("template");r.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(r.content)},,function(t,e,n){"use strict";var r=n(108),i=n(50),o=n(23),a=new r.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,n){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,n){},styleSubtree(t,e){a.processStyles(),Object(i.c)(t,e)},styleElement(t){a.processStyles()},styleDocument(t){a.processStyles(),Object(i.c)(document.body,t)},getComputedStyleValue:(t,e)=>Object(i.b)(t,e),flushCustomStyles(){},nativeCss:o.c,nativeShadow:o.d,cssBuild:o.a,disableRuntime:o.b}),window.ShadyCSS.CustomStyleInterface=a;var s=n(90),l=window.ShadyCSS.CustomStyleInterface;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class c extends HTMLElement{constructor(){super(),this._style=null,l.addCustomStyle(this)}getStyle(){if(this._style)return this._style;var t=this.querySelector("style");if(!t)return null;this._style=t;var e=t.getAttribute("include");return e&&(t.removeAttribute("include"),t.textContent=Object(s.a)(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",c)},,,function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));n(15);var r=n(17),i=n(19),o=n(90),a=n(29),s=n(48),l=n(69);var c=[];var d=n(100);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var u=Object(i.a)(t=>{var e=Object(d.a)(t);function n(t){var e=Object.getPrototypeOf(t);return e.prototype instanceof i?e:null}function r(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){var e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){var n=t.properties;n&&(e=function(t){var e={};for(var n in t){var r=t[n];e[n]="function"==typeof r?{type:r}:r}return e}(n))}t.__ownProperties=e}return t.__ownProperties}class i extends e{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){e=this.prototype,c.push(e);var t=this._properties;this.__observedAttributes=t?Object.keys(t).map(t=>this.attributeNameForProperty(t)):[]}var e;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){var t=n(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){var t=r(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){var t=n(this);this.__properties=Object.assign({},t&&t._properties,r(this))}return this.__properties}static typeForProperty(t){var e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i}),h=n(6),p=window.ShadyCSS&&window.ShadyCSS.cssBuild,m=Object(i.a)(t=>{var e=u(Object(l.a)(t));return class extends e{static get polymerElementVersion(){return"3.2.0"}static _finalizeClass(){super._finalizeClass();var t,e=((t=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",t))||(t.__ownObservers=t.hasOwnProperty(JSCompiler_renameProperty("observers",t))?t.observers:null),t.__ownObservers);e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){var t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):r.b||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(var e in t)n=this.prototype,r=e,i=t[e],o=t,i.computed&&(i.readOnly=!0),i.computed&&(n._hasReadOnlyEffect(r)?console.warn(`Cannot redefine computed property '${r}'.`):n._createComputedProperty(r,i.computed,o)),i.readOnly&&!n._hasReadOnlyEffect(r)?n._createReadOnlyProperty(r,!i.computed):!1===i.readOnly&&n._hasReadOnlyEffect(r)&&console.warn(`Cannot make readOnly property '${r}' non-readOnly.`),i.reflectToAttribute&&!n._hasReflectEffect(r)?n._createReflectedProperty(r):!1===i.reflectToAttribute&&n._hasReflectEffect(r)&&console.warn(`Cannot make reflected property '${r}' non-reflected.`),i.notify&&!n._hasNotifyEffect(r)?n._createNotifyingProperty(r):!1===i.notify&&n._hasNotifyEffect(r)&&console.warn(`Cannot make notify property '${r}' non-notify.`),i.observer&&n._createPropertyObserver(r,i.observer,o[i.observer]),n._addPropertyToAttributeMap(r);var n,r,i,o}static createObservers(t,e){for(var n=this.prototype,r=0;r<t.length;r++)n._createMethodObserver(t[r],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(t){var e=null;if(t&&(!r.f||r.a)&&(e=s.a.import(t,"template"),r.f&&!e))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+t);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){var t=this.importMeta;if(t)this._importPath=Object(a.a)(t.url);else{var e=s.a.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=r.d,this.importPath=this.constructor.importPath;var t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;var e=t._properties;for(var n in e){var r=e[n];"value"in r&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[n]=r)}}return t.__propertyDefaults}(this.constructor);if(t)for(var e in t){var n=t[e];if(!this.hasOwnProperty(e)){var i="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(e)?this._setPendingProperty(e,i,!0):this[e]=i}}}static _processStyleText(t,e){return Object(a.b)(t,e)}static _finalizeTemplate(t){var e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;var n=this.importPath;!function(t,e,n,r){if(!p){for(var i=e.content.querySelectorAll("style"),a=Object(o.c)(e),s=Object(o.b)(n),l=e.content.firstElementChild,c=0;c<s.length;c++){var d=s[c];d.textContent=t._processStyleText(d.textContent,r),e.content.insertBefore(d,l)}for(var u=0,h=0;h<a.length;h++){var m=a[h],f=i[u];f!==m?(m=m.cloneNode(!0),f.parentNode.insertBefore(m,f)):u++,m.textContent=t._processStyleText(m.textContent,r)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,n)}(this,e,t,n?Object(a.c)(n):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){var e=Object(h.a)(this);if(e.attachShadow)return t?(e.shadowRoot||e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(t),r.g&&window.ShadyDOM&&ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Object(a.c)(this.importPath)),Object(a.c)(t,e)}static _parseTemplateContent(t,e,n){return e.dynamicFns=e.dynamicFns||this._properties,super._parseTemplateContent(t,e,n)}static _addTemplatePropertyEffect(t,e,n){return r.b&&!(e in this._properties)&&console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`),super._addTemplatePropertyEffect(t,e,n)}}})},,function(t,e,n){"use strict";n.d(e,"a",(function(){return U}));n(15);var r=n(6),i=n(19),o=n(8),a=n(60),s=n(99),l=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),c={"dom-if":!0,"dom-repeat":!0};function d(t){var e=t.getAttribute("is");if(e&&c[e]){var n=t;for(n.removeAttribute("is"),t=n.ownerDocument.createElement(e),n.parentNode.replaceChild(t,n),t.appendChild(n);n.attributes.length;)t.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return t}function u(t,e){var n=e.parentInfo&&u(t,e.parentInfo);if(!n)return t;l.currentNode=n;for(var r=l.firstChild(),i=0;r;r=l.nextSibling())if(e.parentIndex===i++)return r}function h(t,e,n,r){r.id&&(e[r.id]=n)}function p(t,e,n){if(n.events&&n.events.length)for(var r,i=0,o=n.events;i<o.length&&(r=o[i]);i++)t._addMethodEventListenerToNode(e,r.name,r.value,t)}function m(t,e,n){n.templateInfo&&(e._templateInfo=n.templateInfo)}var f=Object(i.a)(t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){var n=t._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,n,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,n){return this._parseTemplateNode(t.content,e,n)}static _parseTemplateNode(t,e,n){var r,i=t;return"template"!=i.localName||i.hasAttribute("preserve-content")?"slot"===i.localName&&(e.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(i,e,n)||r,l.currentNode=i,l.firstChild()&&(r=this._parseTemplateChildNodes(i,e,n)||r),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,e,n)||r),r}static _parseTemplateChildNodes(t,e,n){if("script"!==t.localName&&"style"!==t.localName){l.currentNode=t;for(var r,i=l.firstChild(),o=0;i;i=r){if("template"==i.localName&&(i=d(i)),l.currentNode=i,r=l.nextSibling(),i.nodeType===Node.TEXT_NODE){for(var a=r;a&&a.nodeType===Node.TEXT_NODE;)i.textContent+=a.textContent,r=l.nextSibling(),t.removeChild(a),a=r;if(e.stripWhiteSpace&&!i.textContent.trim()){t.removeChild(i);continue}}var s={parentIndex:o,parentInfo:n};this._parseTemplateNode(i,e,s)&&(s.infoIndex=e.nodeInfoList.push(s)-1),l.currentNode=i,l.parentNode()&&o++}}}static _parseTemplateNestedTemplate(t,e,n){var r=this._parseTemplate(t,e);return(r.content=t.content.ownerDocument.createDocumentFragment()).appendChild(t.content),n.templateInfo=r,!0}static _parseTemplateNodeAttributes(t,e,n){for(var r,i=!1,o=Array.from(t.attributes),a=o.length-1;r=o[a];a--)i=this._parseTemplateNodeAttribute(t,e,n,r.name,r.value)||i;return i}static _parseTemplateNodeAttribute(t,e,n,r,i){return"on-"===r.slice(0,3)?(t.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:i}),!0):"id"===r&&(n.id=i,!0)}static _contentForTemplate(t){var e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);var e=this.constructor._parseTemplate(t),n=e.nodeInfoList,r=e.content||t.content,i=document.importNode(r,!0);i.__noInsertionPoint=!e.hasInsertionPoint;var o=i.nodeList=new Array(n.length);i.$={};for(var a,s=0,l=n.length;s<l&&(a=n[s]);s++){var c=o[s]=u(i,a);h(0,i.$,c,a),m(0,c,a),p(this,c,a)}return i=i}_addMethodEventListenerToNode(t,e,n,r){var i=function(t,e,n){return t=t._methodHost||t,function(e){t[n]?t[n](e,e.detail):console.warn("listener method `"+n+"` not defined")}}(r=r||t,0,n);return this._addEventListenerToNode(t,e,i),i}_addEventListenerToNode(t,e,n){t.addEventListener(e,n)}_removeEventListenerFromNode(t,e,n){t.removeEventListener(e,n)}}),_=n(17),v=0,b={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},y=/[A-Z]/;function g(t,e){var n=t[e];if(n){if(!t.hasOwnProperty(e))for(var r in n=t[e]=Object.create(t[e]))for(var i=n[r],o=n[r]=Array(i.length),a=0;a<i.length;a++)o[a]=i[a]}else n=t[e]={};return n}function w(t,e,n,r,i,o){if(e){var a=!1,s=v++;for(var l in n)C(t,e,s,l,n,r,i,o)&&(a=!0);return a}return!1}function C(t,e,n,r,i,a,s,l){var c=!1,d=e[s?Object(o.g)(r):r];if(d)for(var u,h=0,p=d.length;h<p&&(u=d[h]);h++)u.info&&u.info.lastRun===n||s&&!x(r,u.trigger)||(u.info&&(u.info.lastRun=n),u.fn(t,r,i,a,u.info,s,l),c=!0);return c}function x(t,e){if(e){var n=e.name;return n==t||!(!e.structured||!Object(o.b)(n,t))||!(!e.wildcard||!Object(o.c)(n,t))}return!0}function O(t,e,n,r,i){var o="string"==typeof i.method?t[i.method]:i.method,a=i.property;o?o.call(t,t.__data[a],r[a]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function A(t,e,n){var r=Object(o.g)(e);return r!==e&&(S(t,Object(a.a)(r)+"-changed",n[e],e),!0)}function S(t,e,n,i){var o={value:n,queueProperty:!0};i&&(o.path=i),Object(r.a)(t).dispatchEvent(new CustomEvent(e,{detail:o}))}function P(t,e,n,r,i,a){var s=(a?Object(o.g)(e):e)!=e?e:null,l=s?Object(o.a)(t,s):t.__data[e];s&&void 0===l&&(l=n[e]),S(t,i.eventName,l,s)}function E(t,e,n,r,i){var o=t.__data[e];_.e&&(o=Object(_.e)(o,i.attrName,"attribute",t)),t._propertyToAttribute(e,i.attrName,o)}function T(t,e,n,r,i){var o=M(t,e,n,r,i),a=i.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[a]?t._setPendingProperty(a,o,!0):t[a]=o}function k(t,e,n,r,i,o,s){n.bindings=n.bindings||[];var l={kind:r,target:i,parts:o,literal:s,isCompound:1!==o.length};if(n.bindings.push(l),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(l)){var{event:c,negate:d}=l.parts[0];l.listenerEvent=c||Object(a.a)(i)+"-changed",l.listenerNegate=d}for(var u=e.nodeInfoList.length,h=0;h<l.parts.length;h++){var p=l.parts[h];p.compoundIndex=h,I(t,e,l,p,u)}}function I(t,e,n,r,i){if(!r.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else for(var o=r.dependencies,a={index:i,binding:n,part:r,evaluator:t},s=0;s<o.length;s++){var l=o[s];"string"==typeof l&&((l=B(l)).wildcard=!0),t._addTemplatePropertyEffect(e,l.rootProperty,{fn:z,info:a,trigger:l})}}function z(t,e,n,r,i,a,s){var l=s[i.index],c=i.binding,d=i.part;if(a&&d.source&&e.length>d.source.length&&"property"==c.kind&&!c.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[c.target]){var u=n[e];e=Object(o.i)(d.source,c.target,e),l._setPendingPropertyOrPath(e,u,!1,!0)&&t._enqueueClient(l)}else{!function(t,e,n,r,i){i=function(t,e,n,r){if(n.isCompound){var i=t.__dataCompoundStorage[n.target];i[r.compoundIndex]=e,e=i.join("")}"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,i,n,r),_.e&&(i=Object(_.e)(i,n.target,n.kind,e));if("attribute"==n.kind)t._valueToNodeAttribute(e,i,n.target);else{var o=n.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[o]?e[b.READ_ONLY]&&e[b.READ_ONLY][o]||e._setPendingProperty(o,i)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,o,i)}}(t,l,c,d,i.evaluator._evaluateBinding(t,d,e,n,r,a))}}function N(t,e){if(e.isCompound){for(var n=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),r=e.parts,i=new Array(r.length),o=0;o<r.length;o++)i[o]=r[o].literal;var a=e.target;n[a]=i,e.literal&&"property"==e.kind&&(t[a]=e.literal)}}function j(t,e,n){if(n.listenerEvent){var r=n.parts[0];t.addEventListener(n.listenerEvent,(function(t){!function(t,e,n,r,i){var a,s=t.detail,l=s&&s.path;l?(r=Object(o.i)(n,r,l),a=s&&s.value):a=t.currentTarget[n],a=i?!a:a,e[b.READ_ONLY]&&e[b.READ_ONLY][r]||!e._setPendingPropertyOrPath(r,a,!0,Boolean(l))||s&&s.queueProperty||e._invalidateProperties()}(t,e,n.target,r.source,r.negate)}))}}function L(t,e,n,r,i,o){o=e.static||o&&("object"!=typeof o||o[e.methodName]);for(var a,s={methodName:e.methodName,args:e.args,methodInfo:i,dynamicFn:o},l=0;l<e.args.length&&(a=e.args[l]);l++)a.literal||t._addPropertyEffect(a.rootProperty,n,{fn:r,info:s,trigger:a});o&&t._addPropertyEffect(e.methodName,n,{fn:r,info:s})}function M(t,e,n,r,i){var o=t._methodHost||t,a=o[i.methodName];if(a){var s=t._marshalArgs(i.args,e,n);return a.apply(o,s)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}var R=[],D=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function F(t){for(var e="",n=0;n<t.length;n++){e+=t[n].literal||""}return e}function H(t){var e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){var n={methodName:e[1],static:!0,args:R};return e[2].trim()?function(t,e){return e.args=t.map((function(t){var n=B(t);return n.literal||(e.static=!1),n}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),n):n}return null}function B(t){var e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:e,value:"",literal:!1},r=e[0];switch("-"===r&&(r=e[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':n.value=e.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(e),n.literal=!0}return n.literal||(n.rootProperty=Object(o.g)(e),n.structured=Object(o.d)(e),n.structured&&(n.wildcard=".*"==e.slice(-2),n.wildcard&&(n.name=e.slice(0,-2)))),n}function V(t,e,n){var r=Object(o.a)(t,n);return void 0===r&&(r=e[n]),r}function q(t,e,n,r){t.notifyPath(n+".splices",{indexSplices:r}),t.notifyPath(n+".length",e.length)}function Y(t,e,n,r,i,o){q(t,e,n,[{index:r,addedCount:i,removed:o,object:e,type:"splice"}])}var U=Object(i.a)(t=>{var e=f(Object(s.a)(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return b}_initializeProperties(){super._initializeProperties(),J.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){var e=this[b.READ_ONLY];for(var n in t)e&&e[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=t[n])}_addPropertyEffect(t,e,n){this._createPropertyAccessor(t,e==b.READ_ONLY);var r=g(this,e)[t];r||(r=this[e][t]=[]),r.push(n)}_removePropertyEffect(t,e,n){var r=g(this,e)[t],i=r.indexOf(n);i>=0&&r.splice(i,1)}_hasPropertyEffect(t,e){var n=this[e];return Boolean(n&&n[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,b.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,b.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,b.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,b.COMPUTE)}_setPendingPropertyOrPath(t,e,n,r){if(r||Object(o.g)(Array.isArray(t)?t[0]:t)!==t){if(!r){var i=Object(o.a)(this,t);if(!(t=Object(o.h)(this,t,e))||!super._shouldPropertyChange(t,e,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,n))return function(t,e,n){var r,i=t.__dataLinkedPaths;if(i)for(var a in i){var s=i[a];Object(o.c)(a,e)?(r=Object(o.i)(a,s,e),t._setPendingPropertyOrPath(r,n,!0,!0)):Object(o.c)(s,e)&&(r=Object(o.i)(s,a,e),t._setPendingPropertyOrPath(r,n,!0,!0))}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,n);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,n){n===t[e]&&"object"!=typeof n||(t[e]=n)}_setPendingProperty(t,e,n){var r=this.__dataHasPaths&&Object(o.d)(t),i=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,i[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),r?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(r||this[b.NOTIFY]&&this[b.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=n),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){var t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(var e=0;e<t.length;e++){var n=t[e];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(var n in t)!e&&this[b.READ_ONLY]&&this[b.READ_ONLY][n]||this._setPendingPropertyOrPath(n,t[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,n){var r=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,n,r){var i=t[b.COMPUTE];if(i)for(var o=e;w(t,i,o,n,r);)Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),o=t.__dataPending,t.__dataPending=null}(this,e,n,r);var i=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,n,r),this._flushClients(),w(this,this[b.REFLECT],e,n,r),w(this,this[b.OBSERVE],e,n,r),i&&function(t,e,n,r,i){var o,a,s=t[b.NOTIFY],l=v++;for(var c in e)e[c]&&(s&&C(t,s,l,c,n,r,i)||i&&A(t,c,n))&&(o=!0);o&&(a=t.__dataHost)&&a._invalidateProperties&&a._invalidateProperties()}(this,i,e,n,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,n){this[b.PROPAGATE]&&w(this,this[b.PROPAGATE],t,e,n);for(var r=this.__templateInfo;r;)w(this,r.propertyEffects,t,e,n,r.nodeList),r=r.nextTemplateInfo}linkPaths(t,e){t=Object(o.f)(t),e=Object(o.f)(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Object(o.f)(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){var n={path:""};q(this,Object(o.a)(this,t,n),n.path,e)}get(t,e){return Object(o.a)(e||this,t)}set(t,e,n){n?Object(o.h)(n,t,e):this[b.READ_ONLY]&&this[b.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){var n={path:""},r=Object(o.a)(this,t,n),i=r.length,a=r.push(...e);return e.length&&Y(this,r,n.path,i,e.length,[]),a}pop(t){var e={path:""},n=Object(o.a)(this,t,e),r=Boolean(n.length),i=n.pop();return r&&Y(this,n,e.path,n.length,0,[i]),i}splice(t,e,n,...r){var i,a={path:""},s=Object(o.a)(this,t,a);return e<0?e=s.length-Math.floor(-e):e&&(e=Math.floor(e)),i=2===arguments.length?s.splice(e):s.splice(e,n,...r),(r.length||i.length)&&Y(this,s,a.path,e,r.length,i),i}shift(t){var e={path:""},n=Object(o.a)(this,t,e),r=Boolean(n.length),i=n.shift();return r&&Y(this,n,e.path,0,0,[i]),i}unshift(t,...e){var n={path:""},r=Object(o.a)(this,t,n),i=r.unshift(...e);return e.length&&Y(this,r,n.path,0,e.length,[]),i}notifyPath(t,e){var n;if(1==arguments.length){var r={path:""};e=Object(o.a)(this,t,r),n=r.path}else n=Array.isArray(t)?Object(o.f)(t):t;this._setPendingPropertyOrPath(n,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var n;this._addPropertyEffect(t,b.READ_ONLY),e&&(this["_set"+(n=t,n[0].toUpperCase()+n.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,n){var r={property:t,method:e,dynamicFn:Boolean(n)};this._addPropertyEffect(t,b.OBSERVE,{fn:O,info:r,trigger:{name:t}}),n&&this._addPropertyEffect(e,b.OBSERVE,{fn:O,info:r,trigger:{name:e}})}_createMethodObserver(t,e){var n=H(t);if(!n)throw new Error("Malformed observer expression '"+t+"'");L(this,n,b.OBSERVE,M,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,b.NOTIFY,{fn:P,info:{eventName:Object(a.a)(t)+"-changed",property:t}})}_createReflectedProperty(t){var e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,b.REFLECT,{fn:E,info:{attrName:e}})}_createComputedProperty(t,e,n){var r=H(e);if(!r)throw new Error("Malformed computed expression '"+e+"'");L(this,r,b.COMPUTE,T,t,n)}_marshalArgs(t,e,n){for(var r=this.__data,i=[],a=0,s=t.length;a<s;a++){var{name:l,structured:c,wildcard:d,value:u,literal:h}=t[a];if(!h)if(d){var p=Object(o.c)(l,e),m=V(r,n,p?e:l);u={path:p?e:l,value:m,base:p?Object(o.a)(r,l):m}}else u=c?V(r,n,l):r[l];i[a]=u}return i}static addPropertyEffect(t,e,n){this.prototype._addPropertyEffect(t,e,n)}static createPropertyObserver(t,e,n){this.prototype._createPropertyObserver(t,e,n)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,n){this.prototype._createComputedProperty(t,e,n)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){var n=this.constructor._parseTemplate(t),r=this.__templateInfo==n;if(!r)for(var i in n.propertyEffects)this._createPropertyAccessor(i);if(e&&((n=Object.create(n)).wasPreBound=r,!r&&this.__templateInfo)){var o=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=o.nextTemplateInfo=n,n.previousTemplateInfo=o,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(t,e,n){(t.hostProps=t.hostProps||{})[e]=!0;var r=t.propertyEffects=t.propertyEffects||{};(r[e]=r[e]||[]).push(n)}_stampTemplate(t){J.beginHosting(this);var e=super._stampTemplate(t);J.endHosting(this);var n=this._bindTemplate(t,!0);if(n.nodeList=e.nodeList,!n.wasPreBound)for(var r=n.childNodes=[],i=e.firstChild;i;i=i.nextSibling)r.push(i);return e.templateInfo=n,function(t,e){var{nodeList:n,nodeInfoList:r}=e;if(r.length)for(var i=0;i<r.length;i++){var o=r[i],a=n[i],s=o.bindings;if(s)for(var l=0;l<s.length;l++){var c=s[l];N(a,c),j(a,t,c)}a.__dataHost=t}}(this,n),this.__dataReady&&w(this,n.propertyEffects,this.__data,null,!1,n.nodeList),e}_removeBoundDom(t){var e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;for(var n=e.childNodes,r=0;r<n.length;r++){var i=n[r];i.parentNode.removeChild(i)}}static _parseTemplateNode(t,e,n){var r=super._parseTemplateNode(t,e,n);if(t.nodeType===Node.TEXT_NODE){var i=this._parseBindings(t.textContent,e);i&&(t.textContent=F(i)||" ",k(this,e,n,"text","textContent",i),r=!0)}return r}static _parseTemplateNodeAttribute(t,e,n,r,i){var o=this._parseBindings(i,e);if(o){var s=r,l="property";y.test(r)?l="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),l="attribute");var c=F(o);return c&&"attribute"==l&&("class"==r&&t.hasAttribute("class")&&(c+=" "+t.getAttribute(r)),t.setAttribute(r,c)),"input"===t.localName&&"value"===s&&t.setAttribute(s,""),t.removeAttribute(s),"property"===l&&(r=Object(a.b)(r)),k(this,e,n,l,r,o,c),!0}return super._parseTemplateNodeAttribute(t,e,n,r,i)}static _parseTemplateNestedTemplate(t,e,n){var r=super._parseTemplateNestedTemplate(t,e,n),i=n.templateInfo.hostProps;for(var o in i){k(this,e,n,"property","_host_"+o,[{mode:"{",source:o,dependencies:[o]}])}return r}static _parseBindings(t,e){for(var n,r=[],i=0;null!==(n=D.exec(t));){n.index>i&&r.push({literal:t.slice(i,n.index)});var o=n[1][0],a=Boolean(n[2]),s=n[3].trim(),l=!1,c="",d=-1;"{"==o&&(d=s.indexOf("::"))>0&&(c=s.substring(d+2),s=s.substring(0,d),l=!0);var u=H(s),h=[];if(u){for(var{args:p,methodName:m}=u,f=0;f<p.length;f++){var _=p[f];_.literal||h.push(_)}var v=e.dynamicFns;(v&&v[m]||u.static)&&(h.push(m),u.dynamicFn=!0)}else h.push(s);r.push({source:s,mode:o,negate:a,customEvent:l,signature:u,dependencies:h,event:c}),i=D.lastIndex}if(i&&i<t.length){var b=t.substring(i);b&&r.push({literal:b})}return r.length?r:null}static _evaluateBinding(t,e,n,r,i,a){var s;return s=e.signature?M(t,n,r,0,e.signature):n!=e.source?Object(o.a)(t,e.source):a&&Object(o.d)(n)?Object(o.a)(t,n):t.__data[n],e.negate&&(s=!s),s}}});var J=new class{constructor(){this.stack=[]}registerHost(t){this.stack.length&&this.stack[this.stack.length-1]._enqueueClient(t)}beginHosting(t){this.stack.push(t)}endHosting(t){var e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}}},,function(t,e,n){"use strict";n(57),n(64),n(48);var r=document.createElement("template");r.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content)},,function(t,e,n){"use strict";n(57),n(64);var r=document.createElement("template");r.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(r.content)},,function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var r=n(80),i=(n(56),n(143),n(15),n(69)),o=n(51),a=n(77),s=n(17),l=n(6),c=Object(a.a)(Object(o.b)(Object(i.a)(HTMLElement)));customElements.define("dom-bind",class extends c{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),s.f)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(l.a)(Object(l.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(var t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){var t;if(!this.__children){if(!(t=t||this.querySelector("template"))){var e=new MutationObserver(()=>{if(!(t=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(var n=this.root.firstChild;n;n=n.nextSibling)this.__children[this.__children.length]=n;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});n(135),n(144);var d=n(25),u=n(19),h=n(101),p=n(67),m=Object(u.a)(t=>{var e=Object(p.a)(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){var n=e.path;if(n==JSCompiler_renameProperty("items",this)){var r=e.base||[],i=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),i){var o=Object(h.a)(r,i);this.__applySplices(o)}this.__lastItems=r,this.__lastMulti=t}else if(e.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(e.value.indexSplices);else{var a=n.slice((JSCompiler_renameProperty("items",this)+".").length),s=parseInt(a,10);a.indexOf(".")<0&&a==s&&this.__deselectChangedIdx(s)}}__applySplices(t){for(var e=this,n=this.__selectedMap,r=function(r){var i=t[r];n.forEach((t,e)=>{t<i.index||(t>=i.index+i.removed.length?n.set(e,t+i.addedCount-i.removed.length):n.set(e,-1))});for(var o=0;o<i.addedCount;o++){var a=i.index+o;n.has(e.items[a])&&n.set(e.items[a],a)}},i=0;i<t.length;i++)r(i);this.__updateLinks();var o=0;n.forEach((t,e)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null,n.delete(e)):o++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){var t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){var e=this.__selectedIndexForItemIndex(t);if(e>=0){var n=0;this.__selectedMap.forEach((t,r)=>{e==n++&&this.deselect(r)})}}__selectedIndexForItemIndex(t){var e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(t){var e,n=this.__selectedMap.get(t);n>=0&&(this.__selectedMap.delete(t),this.multi&&(e=this.__selectedIndexForItemIndex(n)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),e,1):this.selected=this.selectedItem=null)}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){var e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(d.a);class f extends m{static get is(){return"array-selector"}static get template(){return null}}customElements.define(f.is,f);n(64),n(145),n(10);var _=Object(r.a)(HTMLElement).prototype},,function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(15);var r=n(19),i=n(54),o=Object(r.a)(t=>class extends t{_addEventListenerToNode(t,e,n){Object(i.addListener)(t,e,n)||super._addEventListenerToNode(t,e,n)}_removeEventListenerFromNode(t,e,n){Object(i.removeListener)(t,e,n)||super._removeEventListenerFromNode(t,e,n)}})},,,function(t,e,n){"use strict";n.d(e,"a",(function(){return q}));var r=n(27),i=n(37),o=n(50),a=(n(35),/;\s*/m),s=/^\s*(initial)|(inherit)\s*$/,l=/\s*!important/;class c{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}var d=null;class u{constructor(){this._currentElement=null,this._measureElement=null,this._map=new c}detectMixin(t){return Object(o.a)(t)}gatherStyles(t){var e=Object(r.g)(t.content);if(e){var n=document.createElement("style");return n.textContent=e,t.content.insertBefore(n,t.content.firstChild),n}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));var n=t._gatheredStyle;return n?this.transformStyle(n,e):null}transformStyle(t,e=""){var n=Object(r.m)(t);return this.transformRules(n,e),t.textContent=Object(r.p)(n),n}transformCustomStyle(t){var e=Object(r.m)(t);return Object(r.f)(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=Object(r.p)(e),e}transformRules(t,e){this._currentElement=e,Object(r.f)(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(i.g,(t,n,r,i)=>this._produceCssProperties(t,n,r,i,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){for(var e=t;e.parent;)e=e.parent;var n={},i=!1;return Object(r.f)(e,e=>{(i=i||e===t)||e.selector===t.selector&&Object.assign(n,this._cssTextToMap(e.parsedCssText))}),n}_consumeCssProperties(t,e){for(var n=null;n=i.f.exec(t);){var r=n[0],o=n[1],a=n.index,s=a+r.indexOf("@apply"),l=a+r.length,c=t.slice(0,s),d=t.slice(l),u=e?this._fallbacksFromPreviousRules(e):{};Object.assign(u,this._cssTextToMap(c));var h=this._atApplyToCssProperties(o,u);t=`${c}${h}${d}`,i.f.lastIndex=a+h.length}return t}_atApplyToCssProperties(t,e){t=t.replace(a,"");var n=[],r=this._map.get(t);if(r||(this._map.set(t,{}),r=this._map.get(t)),r){var i,o,s;this._currentElement&&(r.dependants[this._currentElement]=!0);var c=r.properties;for(i in c)o=[i,": var(",t,"_-_",i],(s=e&&e[i])&&o.push(",",s.replace(l,"")),o.push(")"),l.test(c[i])&&o.push(" !important"),n.push(o.join(""))}return n.join("; ")}_replaceInitialOrInherit(t,e){var n=s.exec(e);return n&&(e=n[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){for(var n,r,i,o,a=t.split(";"),s={},l=0;l<a.length;l++)(i=a[l])&&(o=i.split(":")).length>1&&(n=o[0].trim(),r=o.slice(1).join(":"),e&&(r=this._replaceInitialOrInherit(n,r)),s[n]=r);return s}_invalidateMixinEntry(t){if(d)for(var e in t.dependants)e!==this._currentElement&&d(e)}_produceCssProperties(t,e,n,i,o){if(n&&Object(r.l)(n,(t,e)=>{e&&this._map.get(e)&&(i=`@apply ${e};`)}),!i)return t;var a=this._consumeCssProperties(""+i,o),s=t.slice(0,t.indexOf("--")),l=this._cssTextToMap(a,!0),c=l,d=this._map.get(e),u=d&&d.properties;u?c=Object.assign(Object.create(u),l):this._map.set(e,c);var h,p,m=[],f=!1;for(h in c)void 0===(p=l[h])&&(p="initial"),u&&!(h in u)&&(f=!0),m.push(`${e}_-_${h}: ${p}`);return f&&this._invalidateMixinEntry(d),d&&(d.properties=c),n&&(s=`${t};${s}`),`${s}${m.join("; ")};`}}u.prototype.detectMixin=u.prototype.detectMixin,u.prototype.transformStyle=u.prototype.transformStyle,u.prototype.transformCustomStyle=u.prototype.transformCustomStyle,u.prototype.transformRules=u.prototype.transformRules,u.prototype.transformRule=u.prototype.transformRule,u.prototype.transformTemplate=u.prototype.transformTemplate,u.prototype._separator="_-_",Object.defineProperty(u.prototype,"invalidCallback",{get:()=>d,set(t){d=t}});var h=u,p=n(42),m=n(89),f=(n(108),n(23)),_=new h;class v{constructor(){this.customStyleInterface=null,_.invalidCallback=m.a}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{_.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),!Object(r.d)(t)){p.a[e]=t;var n=_.transformTemplate(t,e);t._styleAst=n}}flushCustomStyles(){if(this.ensure(),this.customStyleInterface){var t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(var e=0;e<t.length;e++){var n=t[e],r=this.customStyleInterface.getStyleForCustomStyle(n);r&&_.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}}styleSubtree(t,e){if(this.ensure(),e&&Object(o.c)(t,e),t.shadowRoot){this.styleElement(t);for(var n=t.shadowRoot.children||t.shadowRoot.childNodes,r=0;r<n.length;r++)this.styleSubtree(n[r])}else for(var i=t.children||t.childNodes,a=0;a<i.length;a++)this.styleSubtree(i[a])}styleElement(t){this.ensure();var{is:e}=Object(r.i)(t),n=p.a[e];if((!n||!Object(r.d)(n))&&n&&!m.c(n)){m.d(n)||(this.prepareTemplate(n,e),m.b(n));var i=t.shadowRoot;if(i){var o=i.querySelector("style");o&&(o.__cssRules=n._styleAst,o.textContent=Object(r.p)(n._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){var b=new v,y=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,e,n){b.flushCustomStyles(),b.prepareTemplate(t,e)},prepareTemplateStyles(t,e,n){window.ShadyCSS.prepareTemplate(t,e,n)},prepareTemplateDom(t,e){},styleSubtree(t,e){b.flushCustomStyles(),b.styleSubtree(t,e)},styleElement(t){b.flushCustomStyles(),b.styleElement(t)},styleDocument(t){b.flushCustomStyles(),b.styleDocument(t)},getComputedStyleValue:(t,e)=>Object(o.b)(t,e),flushCustomStyles(){b.flushCustomStyles()},nativeCss:f.c,nativeShadow:f.d,cssBuild:f.a,disableRuntime:f.b},y&&(window.ShadyCSS.CustomStyleInterface=y)}window.ShadyCSS.ApplyShim=_;var g=n(67),w=n(77),C=n(99),x=n(19),O=/:host\(:dir\((ltr|rtl)\)\)/g,A=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,S=/:dir\((?:ltr|rtl)\)/,P=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),E=[],T=null,k="";function I(){k=document.documentElement.getAttribute("dir")}function z(t){t.__autoDirOptOut||t.setAttribute("dir",k)}function N(){I(),k=document.documentElement.getAttribute("dir");for(var t=0;t<E.length;t++)z(E[t])}var j=Object(x.a)(t=>{P||T||(I(),(T=new MutationObserver(N)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));var e=Object(C.a)(t);class n extends e{static _processStyleText(t,e){return t=super._processStyleText(t,e),!P&&S.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){var e=t;return e=(e=e.replace(O,':host([dir="$1"])')).replace(A,':host([dir="$2"]) $1')}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(T&&T.takeRecords().length&&N(),E.push(this),z(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){var t=E.indexOf(this);t>-1&&E.splice(t,1)}}}return n.__activateDir=!1,n});n(127);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function L(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?L():window.addEventListener("DOMContentLoaded",L);var M=n(31),R=n(54),D=n(21),F=n(12),H=n(8),B=n(6),V=window.ShadyCSS,q=Object(x.a)(t=>{var e=j(Object(w.a)(Object(g.a)(t))),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(t,e,n,r){e!==n&&(super.attributeChangedCallback(t,e,n,r),this.attributeChanged(t,e,n))}attributeChanged(t,e,n){}_initializeProperties(){var t=Object.getPrototypeOf(this);t.hasOwnProperty("__hasRegisterFinished")||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,n){this._propertyToAttribute(t,e,n)}serializeValueToAttribute(t,e,n){this._valueToNodeAttribute(n||this,t,e)}extend(t,e){if(!t||!e)return t||e;for(var n,r=Object.getOwnPropertyNames(e),i=0;i<r.length&&(n=r[i]);i++){var o=Object.getOwnPropertyDescriptor(e,n);o&&Object.defineProperty(t,n,o)}return t}mixin(t,e){for(var n in e)t[n]=e[n];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){var e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,n){n=n||{},e=null==e?{}:e;var r=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});r.detail=e;var i=n.node||this;return Object(B.a)(i).dispatchEvent(r),r}listen(t,e,n){t=t||this;var r=this.__boundListeners||(this.__boundListeners=new WeakMap),i=r.get(t);i||(i={},r.set(t,i));var o=e+n;i[o]||(i[o]=this._addMethodEventListenerToNode(t,e,n,this))}unlisten(t,e,n){t=t||this;var r=this.__boundListeners&&this.__boundListeners.get(t),i=e+n,o=r&&r[i];o&&(this._removeEventListenerFromNode(t,e,o),r[i]=null)}setScrollDirection(t,e){Object(R.setTouchAction)(e||this,n[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){var t=Object(B.a)(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){var t=Object(M.a)(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(M.a)(this).getEffectiveChildNodes()}queryDistributedElements(t){return Object(M.a)(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){for(var t,e=this.getEffectiveChildNodes(),n=[],r=0;t=e[r];r++)t.nodeType!==Node.COMMENT_NODE&&n.push(t.textContent);return n.join("")}queryEffectiveChildren(t){var e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){var e=this.root.querySelector(t||"slot");return e?Object(M.a)(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&Object(B.a)(this).contains(t)&&Object(B.a)(this).getRootNode()===Object(B.a)(t).getRootNode()}isLocalDescendant(t){return this.root===Object(B.a)(t).getRootNode()}scopeSubtree(t,e){}getComputedStyleValue(t){return V.getComputedStyleValue(this,t)}debounce(t,e,n){return this._debouncers=this._debouncers||{},this._debouncers[t]=D.a.debounce(this._debouncers[t],n>0?F.d.after(n):F.c,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};var e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};var e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};var e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?F.d.run(t.bind(this),e):~F.c.run(t.bind(this))}cancelAsync(t){t<0?F.c.cancel(~t):F.d.cancel(t)}create(t,e){var n=document.createElement(t);if(e)if(n.setProperties)n.setProperties(e);else for(var r in e)n[r]=e[r];return n}elementMatches(t,e){return Object(M.b)(e||this,t)}toggleAttribute(t,e){var n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(e=!n.hasAttribute(t)),e?(Object(B.a)(n).setAttribute(t,""),!0):(Object(B.a)(n).removeAttribute(t),!1)}toggleClass(t,e,n){n=n||this,1==arguments.length&&(e=!n.classList.contains(t)),e?n.classList.add(t):n.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,n,r){r=r||this,this.transform("translate3d("+t+","+e+","+n+")",r)}arrayDelete(t,e){var n;if(Array.isArray(t)){if((n=t.indexOf(e))>=0)return t.splice(n,1)}else if((n=Object(H.a)(this,t).indexOf(e))>=0)return this.splice(t,n,1);return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return r.prototype.is="",r})},,function(t,e,n){"use strict";n(57),n(64),n(48);var r=document.createElement("template");r.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content)},,function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n(15);var r=n(101),i=n(12),o=n(6);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function a(t){return"slot"===t.localName}var s=class{static getFlattenedNodes(t){var e=Object(o.a)(t);return a(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>a(t)?(t=t,Object(o.a)(t).assignedNodes({flatten:!0})):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){a(this._target)?this._listenSlots([this._target]):Object(o.a)(this._target).children&&(this._listenSlots(Object(o.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){a(this._target)?this._unlistenSlots([this._target]):Object(o.a)(this._target).children&&(this._unlistenSlots(Object(o.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,i.c.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(var e=0;e<t.length;e++){var n=t[e];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;for(var t,e={target:this._target,addedNodes:[],removedNodes:[]},n=this.constructor.getFlattenedNodes(this._target),i=Object(r.a)(n,this._effectiveNodes),o=0;o<i.length&&(t=i[o]);o++)for(var a,s=0;s<t.removed.length&&(a=t.removed[s]);s++)e.removedNodes.push(a);for(var l,c=0;c<i.length&&(l=i[c]);c++)for(var d=l.index;d<l.index+l.addedCount;d++)e.addedNodes.push(n[d]);this._effectiveNodes=n;var u=!1;return(e.addedNodes.length||e.removedNodes.length)&&(u=!0,this.callback.call(this._target,e)),u}_listenSlots(t){for(var e=0;e<t.length;e++){var n=t[e];a(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(var e=0;e<t.length;e++){var n=t[e];a(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}}},,,function(t,e,n){"use strict";e.a="/*\n   CSS styling examples for the Vaadin app.\n   Visit https://vaadin.com/docs/flow/theme/theming-overview.html and\n   https://vaadin.com/themes/lumo for more information.\n*/\n\n/* Example: CSS class name to center align the content . */\n.centered-content {\n  margin: 0 auto;\n  max-width: 250px;\n}\n\n"},function(t,e,n){"use strict";e.a='/*\n   CSS styling examples for the Vaadin app.\n   Visit https://vaadin.com/docs/flow/theme/theming-overview.html and\n   https://vaadin.com/themes/lumo for more information.\n*/\n\n/* Example: the style is applied only to the textfields which has the `bordered` theme attribute. */\n:host([theme~="bordered"]) [part="input-field"] {\n    box-shadow: inset 0 0 0 1px var(--lumo-contrast-30pct);\n    background-color: var(--lumo-base-color);\n}\n'},function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return d}));var r=n(42),i=(n(35),"_applyShimCurrentVersion"),o="_applyShimNextVersion",a=Promise.resolve();function s(t){var e=r.a[t];e&&function(t){t[i]=t[i]||0,t._applyShimValidatingVersion=t._applyShimValidatingVersion||0,t[o]=(t[o]||0)+1}(e)}function l(t){return t[i]===t[o]}function c(t){return!l(t)&&t._applyShimValidatingVersion===t[o]}function d(t){t._applyShimValidatingVersion=t[o],t._validating||(t._validating=!0,a.then((function(){t[i]=t[o],t._validating=!1})))}},function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return h}));var r=n(48),i=n(29);function o(t){return r.a.import(t)}function a(t){var e=t.body?t.body:t,n=Object(i.b)(e.textContent,t.baseURI),r=document.createElement("style");return r.textContent=n,r}function s(t){for(var e=t.trim().split(/\s+/),n=[],r=0;r<e.length;r++)n.push(...l(e[r]));return n}function l(t){var e=o(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){var n=[];n.push(...u(e));var r=e.querySelector("template");r&&n.push(...c(r,e.assetpath)),e._styles=n}return e._styles}function c(t,e){if(!t._styles){for(var n=[],r=t.content.querySelectorAll("style"),o=0;o<r.length;o++){var a=r[o],l=a.getAttribute("include");l&&n.push(...s(l).filter((function(t,e,n){return n.indexOf(t)===e}))),e&&(a.textContent=Object(i.b)(a.textContent,e)),n.push(a)}t._styles=n}return t._styles}function d(t){var e=o(t);return e?u(e):[]}function u(t){for(var e=[],n=t.querySelectorAll("link[rel=import][type~=css]"),r=0;r<n.length;r++){var i=n[r];if(i.import){var o=i.import,s=i.hasAttribute("shady-unscoped");if(s&&!o._unscopedStyle){var l=a(o);l.setAttribute("shady-unscoped",""),o._unscopedStyle=l}else o._style||(o._style=a(o));e.push(s?o._unscopedStyle:o._style)}}return e}function h(t){for(var e=t.trim().split(/\s+/),n="",r=0;r<e.length;r++)n+=p(e[r]);return n}function p(t){var e=o(t);if(e&&void 0===e._cssText){var n=m(e),r=e.querySelector("template");r&&(n+=function(t,e){for(var n="",r=c(t,e),i=0;i<r.length;i++){var o=r[i];o.parentNode&&o.parentNode.removeChild(o),n+=o.textContent}return n}(r,e.assetpath)),e._cssText=n||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function m(t){for(var e="",n=u(t),r=0;r<n.length;r++)e+=n[r].textContent;return e}},,,function(t,e,n){"use strict";n(57),n(64);var r=document.createElement("template");r.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(r.content)},,function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var r=!1;window.addEventListener("keydown",()=>{r=!0},{capture:!0}),window.addEventListener("mousedown",()=>{r=!1},{capture:!0});var i=t=>class extends((t=>class extends t{static get properties(){var t={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(t.tabIndex=t.tabindex),t}})(t)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",t=>{t.composedPath()[0]===this?this.contains(t.relatedTarget)||this._focus():-1===t.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",t=>this._setFocused(!1)),super.ready();var t=t=>{t.composed||t.target.dispatchEvent(new CustomEvent(t.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",t),this.shadowRoot.addEventListener("focusout",t),this.addEventListener("keydown",t=>{if(!t.defaultPrevented&&9===t.keyCode)if(t.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{var e=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(e&&parseFloat(e[1])>=63&&parseFloat(e[1])<66&&this.parentNode&&this.nextSibling){var n=document.createElement("input");n.style.position="absolute",n.style.opacity="0",n.tabIndex=this.tabIndex,this.parentNode.insertBefore(n,this.nextSibling),n.focus(),n.addEventListener("focusout",()=>this.parentNode.removeChild(n))}}}),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")})}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){t?this.setAttribute("focused",""):this.removeAttribute("focused"),t&&r?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this.focusElement&&!this._isShiftTabbing&&(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}_disabledChanged(t){this.focusElement.disabled=t,t?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(t){void 0!==t&&(this.focusElement.tabIndex=t),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=t=void 0),window.ShadyDOM&&this.setProperties({tabIndex:t,tabindex:t})}click(){this.disabled||super.click()}}},,function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=t=>class extends t{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),"theme"===t&&this._setTheme(n)}}},,function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));n(15);for(var r=n(19),i=n(60),o=n(100),a={},s=HTMLElement.prototype;s;){for(var l=Object.getOwnPropertyNames(s),c=0;c<l.length;c++)a[l[c]]=!0;s=Object.getPrototypeOf(s)}var d=Object(r.a)(t=>{var e=Object(o.a)(t);return class extends e{static createPropertiesForAttributes(){for(var t=this.observedAttributes,e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Object(i.b)(t[e]))}static attributeNameForProperty(t){return Object(i.a)(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(var e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){this.hasAttribute(t)||this._valueToNodeAttribute(this,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){var n;switch(e){case Object:try{n=JSON.parse(t)}catch(e){n=t}break;case Array:try{n=JSON.parse(t)}catch(e){n=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+t)}break;case Date:n=isNaN(t)?String(t):Number(t),n=new Date(n);break;default:n=super._deserializeValue(t,e)}return n}_definePropertyAccessor(t,e){!function(t,e){if(!a[e]){var n=t[e];void 0!==n&&(t.__data?t._setPendingProperty(e,n):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=n))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n(15);var r=n(19),i=n(12),o=n(6),a=i.c,s=Object(r.a)(t=>class extends t{static createProperties(t){var e=this.prototype;for(var n in t)n in e||e._createPropertyAccessor(n)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){var e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(var t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,n){var r=this.__data[t],i=this._shouldPropertyChange(t,e,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=r),this.__data[t]=e,this.__dataPending[t]=e),i}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,a.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){var t=this.__data,e=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(t,e,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,n))}_shouldPropertiesChange(t,e,n){return Boolean(e)}_propertiesChanged(t,e,n){}_shouldPropertyChange(t,e,n){return n!==e&&(n==n||e==e)}attributeChangedCallback(t,e,n,r){e!==n&&this._attributeToProperty(t,n),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,n,r)}_attributeToProperty(t,e,n){if(!this.__serializing){var r=this.__dataAttributes,i=r&&r[t]||t;this[i]=this._deserializeValue(e,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(t,e,n){this.__serializing=!0,n=arguments.length<3?this[t]:n,this._valueToNodeAttribute(this,n,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,n){var r=this._serializeValue(e);void 0===r?t.removeAttribute(n):("class"!==n&&"name"!==n&&"slot"!==n||(t=Object(o.a)(t)),t.setAttribute(n,r))}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(15);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(t,e,n){return{index:t,removed:e,addedCount:n}}function i(t,e,n,i,o,s){var l,c=0,d=0,u=Math.min(n-e,s-o);if(0==e&&0==o&&(c=function(t,e,n){for(var r=0;r<n;r++)if(!a(t[r],e[r]))return r;return n}(t,i,u)),n==t.length&&s==i.length&&(d=function(t,e,n){var r=t.length,i=e.length,o=0;for(;o<n&&a(t[--r],e[--i]);)o++;return o}(t,i,u-c)),o+=c,s-=d,(n-=d)-(e+=c)==0&&s-o==0)return[];if(e==n){for(l=r(e,[],0);o<s;)l.removed.push(i[o++]);return[l]}if(o==s)return[r(e,[],n-e)];var h=function(t){for(var e=t.length-1,n=t[0].length-1,r=t[e][n],i=[];e>0||n>0;)if(0!=e)if(0!=n){var o=t[e-1][n-1],a=t[e-1][n],s=t[e][n-1],l=void 0;(l=a<s?a<o?a:o:s<o?s:o)==o?(o==r?i.push(0):(i.push(1),r=o),e--,n--):l==a?(i.push(3),e--,r=a):(i.push(2),n--,r=s)}else i.push(3),e--;else i.push(2),n--;return i.reverse(),i}(function(t,e,n,r,i,o){for(var s=o-i+1,l=n-e+1,c=new Array(s),d=0;d<s;d++)c[d]=new Array(l),c[d][0]=d;for(var u=0;u<l;u++)c[0][u]=u;for(var h=1;h<s;h++)for(var p=1;p<l;p++)if(a(t[e+p-1],r[i+h-1]))c[h][p]=c[h-1][p-1];else{var m=c[h-1][p]+1,f=c[h][p-1]+1;c[h][p]=m<f?m:f}return c}(t,e,n,i,o,s));l=void 0;for(var p=[],m=e,f=o,_=0;_<h.length;_++)switch(h[_]){case 0:l&&(p.push(l),l=void 0),m++,f++;break;case 1:l||(l=r(m,[],0)),l.addedCount++,m++,l.removed.push(i[f]),f++;break;case 2:l||(l=r(m,[],0)),l.addedCount++,m++;break;case 3:l||(l=r(m,[],0)),l.removed.push(i[f]),f++}return l&&p.push(l),p}function o(t,e){return i(t,0,t.length,e,0,e.length)}function a(t,e){return t===e}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));
/**
@license
Copyright (c) 2020 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class r{static detectScrollType(){var t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);var e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,n){var{scrollLeft:r}=n;if("rtl"!==e||!t)return r;switch(t){case"negative":return n.scrollWidth-n.clientWidth+r;case"reverse":return n.scrollWidth-n.clientWidth-r}return r}static setNormalizedScrollLeft(t,e,n,r){if("rtl"===e&&t)switch(t){case"negative":n.scrollLeft=n.clientWidth-n.scrollWidth+r;break;case"reverse":n.scrollLeft=n.scrollWidth-n.clientWidth-r;break;default:n.scrollLeft=r}else n.scrollLeft=r}}},,,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r,i=null,o=window.HTMLImports&&window.HTMLImports.whenReady||null;function a(t){requestAnimationFrame((function(){o?o(t):(i||(i=new Promise(t=>{r=t}),"complete"===document.readyState?r():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&r()})),i.then((function(){t&&t()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var s="__shadyCSSCachedStyle",l=null,c=null;class d{constructor(){this.customStyles=[],this.enqueued=!1,a(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&c&&(this.enqueued=!0,a(c))}addCustomStyle(t){t.__seenByShadyCSS||(t.__seenByShadyCSS=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){return t[s]?t[s]:t.getStyle?t.getStyle():t}processStyles(){for(var t=this.customStyles,e=0;e<t.length;e++){var n=t[e];if(!n[s]){var r=this.getStyleForCustomStyle(n);if(r){var i=r.__appliedElement||r;l&&l(i),n[s]=i}}}return t}}d.prototype.addCustomStyle=d.prototype.addCustomStyle,d.prototype.getStyleForCustomStyle=d.prototype.getStyleForCustomStyle,d.prototype.processStyles=d.prototype.processStyles,Object.defineProperties(d.prototype,{transformCallback:{get:()=>l,set(t){l=t}},validateCallback:{get:()=>c,set(t){var e=!1;c||(e=!0),c=t,e&&this.enqueueDocumentValidation()}}})},,function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,i=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function o(t,e){if("function"==typeof t){var n=r.exec(t.toString());if(n)try{t=new Function(n[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}}window.Vaadin=window.Vaadin||{};var a=function(t,e){if(window.Vaadin.developmentMode)return o(t,e)};void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(i?!function(){if(i){if(Object.keys(i).map(t=>i[t]).filter(t=>t.productionMode).length>0)return!0}return!1}():!o((function(){return!0})))}catch(t){return!1}}())},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(75);var r=n(56);
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
class i{constructor(t){i[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return i.types[t]&&i.types[t][e]}set value(t){var e=this.type,n=this.key;e&&n&&(e=i.types[e]=i.types[e]||{},null==t?delete e[n]:e[n]=t)}get list(){if(this.type){var t=i.types[this.type];return t?Object.keys(t).map((function(t){return o[this.type][t]}),this):[]}}byKey(t){return this.key=t,this.value}}i[" "]=function(){},i.types={};var o=i.types;Object(r.a)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,n){var r=new i({type:t,key:e});return void 0!==n&&n!==r.value?r.value=n:this.value!==r.value&&(this.value=r.value),r},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new i({type:this.type,key:t}).value}})},,,function(t,e,n){"use strict";n(64),n(57);var r=document.createElement("template");r.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(r.content)},,function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return h}));var r=n(80),i=n(17),o={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},a={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},s=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},a);function l(t,e){return u({},Object(r.a)(e),t)}function c(t,e,n,r){for(var i in function(t,e,n){for(var r=t._noAccessors,i=Object.getOwnPropertyNames(t),o=0;o<i.length;o++){var a=i[o];if(!(a in n))if(r)e[a]=t[a];else{var s=Object.getOwnPropertyDescriptor(t,a);s&&(s.configurable=!0,Object.defineProperty(e,a,s))}}}(e,t,r),o)e[i]&&(n[i]=n[i]||[],n[i].push(e[i]))}function d(t,e){for(var n in e){var r=t[n],i=e[n];t[n]=!("value"in i)&&r&&"value"in r?Object.assign({value:r.value},i):i}}function u(t,e,n){var r,o={};class l extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(r)for(var e,n=0;n<r.length;n++)(e=r[n]).properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else super._finalizeClass()}static get properties(){var e={};if(r)for(var n=0;n<r.length;n++)d(e,r[n].properties);return d(e,t.properties),e}static get observers(){var e=[];if(r)for(var n,i=0;i<r.length;i++)(n=r[i]).observers&&(e=e.concat(n.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();var t=o.created;if(t)for(var e=0;e<t.length;e++)t[e].call(this)}_registered(){var t=l.prototype;if(!t.hasOwnProperty("__hasRegisterFinished")){t.__hasRegisterFinished=!0,super._registered(),i.b&&h(t);var e=Object.getPrototypeOf(this),n=o.beforeRegister;if(n)for(var r=0;r<n.length;r++)n[r].call(e);if(n=o.registered)for(var a=0;a<n.length;a++)n[a].call(e)}}_applyListeners(){super._applyListeners();var t=o.listeners;if(t)for(var e=0;e<t.length;e++){var n=t[e];if(n)for(var r in n)this._addMethodEventListenerToNode(this,r,n[r])}}_ensureAttributes(){var t=o.hostAttributes;if(t)for(var e=t.length-1;e>=0;e--){var n=t[e];for(var r in n)this._ensureAttribute(r,n[r])}super._ensureAttributes()}ready(){super.ready();var t=o.ready;if(t)for(var e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();var t=o.attached;if(t)for(var e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();var t=o.detached;if(t)for(var e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,n){super.attributeChanged();var r=o.attributeChanged;if(r)for(var i=0;i<r.length;i++)r[i].call(this,t,e,n)}}if(n){Array.isArray(n)||(n=[n]);var u=e.prototype.behaviors;r=function t(e,n,r){n=n||[];for(var i=e.length-1;i>=0;i--){var o=e[i];o?Array.isArray(o)?t(o,n):n.indexOf(o)<0&&(!r||r.indexOf(o)<0)&&n.unshift(o):console.warn("behavior is null, check for missing or 404 import")}return n}(n,null,u),l.prototype.behaviors=u?u.concat(n):r}var h=e=>{r&&function(t,e,n){for(var r=0;r<e.length;r++)c(t,e[r],n,s)}(e,r,o),c(e,t,o,a)};return i.b||h(l.prototype),l.generatedFrom=t,l}var h=function(t,e){t||console.warn("Polymer.Class requires `info` argument");var n=e?e(Object(r.a)(HTMLElement)):Object(r.a)(HTMLElement);return(n=u(t,n,t.behaviors)).is=n.prototype.is=t.is,n}},,function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r,i=n(102),o=[];new MutationObserver((function(){var t=s();o.forEach(e=>{a(e,t)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});var a=function(t,e){e?t.setAttribute("dir",e):t.removeAttribute("dir")},s=function(){return document.documentElement.getAttribute("dir")},l=t=>class extends t{static get properties(){return{dir:{type:String,readOnly:!0}}}static finalize(){super.finalize(),r||(r=i.a.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),a(this,s()))}attributeChangedCallback(t,e,n){if(super.attributeChangedCallback(t,e,n),"dir"===t){var r=n===s()&&-1===o.indexOf(this),i=!n&&e&&-1===o.indexOf(this),l=n!==s()&&e===s();r||i?(this.__subscribe(),a(this,s())):l&&this.__subscribe(!1)}}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}__subscribe(t=!0){t?-1===o.indexOf(this)&&o.push(this):o.indexOf(this)>-1&&o.splice(o.indexOf(this),1)}__getNormalizedScrollLeft(t){return i.a.getNormalizedScrollLeft(r,this.getAttribute("dir")||"ltr",t)}__setNormalizedScrollLeft(t,e){return i.a.setNormalizedScrollLeft(r,this.getAttribute("dir")||"ltr",t,e)}}},,function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(12),i=n(21),o=n(10).a`<dom-module id="vaadin-text-field-shared-styles">
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
</dom-module>`;document.head.appendChild(o.content);var a={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title","disabled","readonly","required"],accessible:["invalid"]},s={DEFAULT:"default",ACCESSIBLE:"accessible"},l=t=>class extends t{static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},i18n:{type:Object,value:()=>({clear:"Clear"})},label:{type:String,value:"",observer:"_labelChanged"},helperText:{type:String,value:"",observer:"_helperTextChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},hasValue:{type:Boolean,reflectToAttribute:!0},preventInvalidInput:{type:Boolean},_enabledCharPattern:String,_labelId:String,_helperTextId:String,_errorId:String,_inputId:String,_hasSlottedHelper:Boolean}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+a.default.join(", ")+")","_hostAccessiblePropsChanged("+a.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId, helperText, _helperTextId, _hasSlottedHelper)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label, helperText)","__enabledCharPatternChanged(_enabledCharPattern)"]}get focusElement(){if(this.shadowRoot){var t=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);return t||this.shadowRoot.querySelector('[part="value"]')}}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_createConstraintsObserver(){this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern)")}_onInput(t){if(this.__preventInput)return t.stopImmediatePropagation(),void(this.__preventInput=!1);if(this.preventInvalidInput){var e=this.inputElement;if(e.value.length>0&&!this.checkValidity())return e.value=this.value||"",this.setAttribute("input-prevented",""),void(this._inputDebouncer=i.a.debounce(this._inputDebouncer,r.d.after(200),()=>{this.removeAttribute("input-prevented")}))}t.__fromClearButton||(this.__userInput=!0),this.value=t.target.value,this.__userInput=!1}_stateChanged(t,e,n,r){!t&&!e&&n&&r?this.$.clearButton.removeAttribute("hidden"):this.$.clearButton.setAttribute("hidden",!0)}_onChange(t){if(!this._valueClearing){var e=new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable});this.dispatchEvent(e)}}_valueChanged(t,e){""===t&&void 0===e||(this.hasValue=""!==t&&null!=t,this.__userInput||(void 0!==t?this.inputElement.value=t:this.value=this.inputElement.value="",this.invalid&&this.validate()))}_labelChanged(t){this._setOrToggleAttribute("has-label",!!t,this)}_helperTextChanged(t){this._setOrToggleAttribute("has-helper",!!t,this)}_errorMessageChanged(t){this._setOrToggleAttribute("has-error-message",!!t,this)}_onHelperSlotChange(){var t=this.shadowRoot.querySelector('[name="helper"]').assignedNodes({flatten:!0});this._hasSlottedHelper=t.filter(t=>3!==t.nodeType).length,this._hasSlottedHelper?this.setAttribute("has-helper","slotted"):""!==this.helperText&&null!==this.helperText||this.removeAttribute("has-helper")}_onSlotChange(){var t=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this.value&&(this.inputElement.value=this.value,this.validate()),t&&!this._slottedInput?(this._validateSlottedValue(t),this._addInputListeners(t),this._addIEListeners(t),this._slottedInput=t):!t&&this._slottedInput&&(this._removeInputListeners(this._slottedInput),this._removeIEListeners(this._slottedInput),this._slottedInput=void 0),Object.keys(s).map(t=>s[t]).forEach(t=>this._propagateHostAttributes(a[t].map(t=>this[t]),t))}_hostPropsChanged(...t){this._propagateHostAttributes(t,s.DEFAULT)}_hostAccessiblePropsChanged(...t){this._propagateHostAttributes(t,s.ACCESSIBLE)}_validateSlottedValue(t){t.value!==this.value&&(console.warn("Please define value on the vaadin-text-field component!"),t.value="")}_propagateHostAttributes(t,e){var n=this.inputElement,r=a[e];e===s.ACCESSIBLE?r.forEach((e,r)=>{this._setOrToggleAttribute(e,t[r],n),this._setOrToggleAttribute("aria-"+e,!!t[r]&&"true",n)}):r.forEach((e,r)=>{this._setOrToggleAttribute(e,t[r],n)})}_setOrToggleAttribute(t,e,n){t&&n&&(e?n.setAttribute(t,"boolean"==typeof e?"":e):n.removeAttribute(t))}_constraintsChanged(t,e,n,r){this.invalid&&(t||e||n||r?this.validate():this.invalid=!1)}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength||this.__forceCheckValidity?this.inputElement.checkValidity():!this.invalid}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange),t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus),t.addEventListener("paste",this._boundOnPaste),t.addEventListener("drop",this._boundOnDrop),t.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange),t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus),t.removeEventListener("paste",this._boundOnPaste),t.removeEventListener("drop",this._boundOnDrop),t.removeEventListener("beforeinput",this._boundOnBeforeInput)}ready(){super.ready(),this._createConstraintsObserver(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this);var t=this.shadowRoot.querySelector('[part="value"]');this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`),this._addInputListeners(t),this._addIEListeners(t),this._slottedInput&&(this._addIEListeners(this._slottedInput),this._addInputListeners(this._slottedInput)),this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener("slotchange",this._onSlotChange.bind(this)),this._onHelperSlotChange(),this.shadowRoot.querySelector('[name="helper"]').addEventListener("slotchange",this._onHelperSlotChange.bind(this)),window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles(),this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0),this.$.clearButton.addEventListener("mouseleave",()=>this._valueClearing=!1),this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this));var e=l._uniqueId=1+l._uniqueId||0;this._errorId=`${this.constructor.is}-error-${e}`,this._labelId=`${this.constructor.is}-label-${e}`,this._helperTextId=`${this.constructor.is}-helper-${e}`,this._inputId=`${this.constructor.is}-input-${e}`,this.shadowRoot.querySelector('[part="error-message"]').addEventListener("transitionend",()=>{this.__observeOffsetHeight()})}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){this.autoselect&&(this.inputElement.select(),setTimeout(()=>{try{this.inputElement.setSelectionRange(0,9999)}catch(t){}}))}_onClearButtonClick(t){t.preventDefault(),this.inputElement.focus(),this.clear(),this._valueClearing=!1,navigator.userAgent.match(/Trident/)&&(this.__preventInput=!1);var e=new Event("input",{bubbles:!0,composed:!0});e.__fromClearButton=!0;var n=new Event("change",{bubbles:!this._slottedInput});n.__fromClearButton=!0,this.inputElement.dispatchEvent(e),this.inputElement.dispatchEvent(n)}_onKeyDown(t){if(27===t.keyCode&&this.clearButtonVisible){var e=!!this.value;this.clear(),e&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}this._enabledCharPattern&&!this.__shouldAcceptKey(t)&&t.preventDefault()}__shouldAcceptKey(t){return t.metaKey||t.ctrlKey||!t.key||1!==t.key.length||this.__enabledCharRegExp.test(t.key)}_onPaste(t){if(this._enabledCharPattern){var e=(t.clipboardData||window.clipboardData).getData("text");this.__enabledTextRegExp.test(e)||t.preventDefault()}}_onDrop(t){if(this._enabledCharPattern){var e=t.dataTransfer.getData("text");this.__enabledTextRegExp.test(e)||t.preventDefault()}}_onBeforeInput(t){this._enabledCharPattern&&t.data&&!this.__enabledTextRegExp.test(t.data)&&t.preventDefault()}__enabledCharPatternChanged(t){this.__enabledCharRegExp=t&&new RegExp("^"+t+"$"),this.__enabledTextRegExp=t&&new RegExp("^"+t+"*$")}_addIEListeners(t){navigator.userAgent.match(/Trident/)&&(this._shouldPreventInput=()=>{this.__preventInput=!0,requestAnimationFrame(()=>{this.__preventInput=!1})},t.addEventListener("focusin",this._shouldPreventInput),t.addEventListener("focusout",this._shouldPreventInput),this._createPropertyObserver("placeholder",this._shouldPreventInput))}_removeIEListeners(t){navigator.userAgent.match(/Trident/)&&(t.removeEventListener("focusin",this._shouldPreventInput),t.removeEventListener("focusout",this._shouldPreventInput))}_getActiveErrorId(t,e,n,r,i,o){var a=[];(r||o)&&a.push(i),e&&t&&a.push(n),this._setOrToggleAttribute("aria-describedby",a.join(" "),this.focusElement)}_getActiveLabelId(t,e,n){var r=n;t&&(r=`${e} ${n}`),this.focusElement.setAttribute("aria-labelledby",r)}_getErrorMessageAriaHidden(t,e,n){return(!(e&&t?n:void 0)).toString()}_dispatchIronResizeEventIfNeeded(t,e){var n="__previous"+t;void 0!==this[n]&&this[n]!==e&&this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0,composed:!0})),this[n]=e}__observeOffsetHeight(){this.__observeOffsetHeightDebouncer=i.a.debounce(this.__observeOffsetHeightDebouncer,r.a,()=>{this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)})}attributeChangedCallback(t,e,n){if(super.attributeChangedCallback(t,e,n),window.ShadyCSS&&window.ShadyCSS.nativeCss||!/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(t)||this.updateStyles(),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root){this.root.querySelectorAll("*").forEach(t=>{t.style["-webkit-backface-visibility"]="visible",t.style["-webkit-backface-visibility"]=""})}}get __data(){return this.__dataValue||{}}set __data(t){this.__dataValue=t}}},,,function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(25),i=n(120),o=n(95),a=n(44),s=n(46),l=n(10);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class c extends(Object(s.a)(Object(i.a)(Object(o.a)(Object(a.a)(r.a))))){static get template(){return l.a`
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
`}static get is(){return"vaadin-text-field"}static get version(){return"2.8.4"}static get properties(){return{list:{type:String},pattern:{type:String},title:{type:String}}}}customElements.define(c.is,c)},,function(t,e,n){"use strict";n(71),n(93),n(62),n(73),n(82),n(136),n(114),n(133);var r=n(10).a`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
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
</dom-module>`;document.head.appendChild(r.content);n(123)},,function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return d}));n(15);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var r=!1,i=[],o=[];function a(){r=!0,requestAnimationFrame((function(){r=!1,s(i),setTimeout((function(){!function(t){for(var e=0,n=t.length;e<n;e++)l(t.shift())}(o)}))}))}function s(t){for(;t.length;)l(t.shift())}function l(t){var e=t[0],n=t[1],r=t[2];try{n.apply(e,r)}catch(t){setTimeout(()=>{throw t})}}function c(t,e,n){r||a(),i.push([t,e,n])}function d(t,e,n){r||a(),o.push([t,e,n])}},,function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(25),i=n(77),o=n(44),a=n(95),s=n(46),l=n(10),c=n(54);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(s.a)(Object(a.a)(Object(o.a)(Object(i.a)(r.a))))){static get template(){return l.a`
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
`}static get is(){return"vaadin-button"}static get version(){return"2.4.0"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners(),window.ShadyDOM&&window.ShadyDOM.flush()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){Object(c.addListener)(this,"down",()=>!this.disabled&&this.setAttribute("active","")),Object(c.addListener)(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",t=>!this.disabled&&[13,32].indexOf(t.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(d.is,d)},,function(t,e,n){"use strict";n(139),n(129)},,function(t,e,n){"use strict";n(71),n(114),n(93),n(73);var r=document.createElement("template");r.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content)},,function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(25),i=n(40),o=n(21),a=n(33),s=n(51),l=n(8),c=n(12),d=n(6),u=Object(s.b)(r.a);class h extends u{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(var t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;for(var t=Object(d.a)(Object(d.a)(this).parentNode),e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){var t=this.template=this.querySelector("template");if(!t){var e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}var n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=Object(i.b)(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(t,e){for(var n,r=this.__instances,i=0;i<r.length&&(n=r[i]);i++)n.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,n){if(Object(l.e)(this.as,e)){var r=t[this.itemsIndexAs];e==this.as&&(this.items[r]=n);var i=Object(l.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${r}`,e);this.notifyPath(i,n)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){var e=t,n=this.__getMethodHost();return function(){return n[e].apply(n,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){var t=performance.now(),e=this._targetFrameTime/(t-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*e)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=t,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths)for(var e=this.__observePaths,n=0;n<e.length;n++)0===t.indexOf(e[n])&&this.__debounceRender(this.__render,this.delay)}else this.__debounceRender(this.__render,this.delay)}__debounceRender(t,e=0){this.__renderDebouncer=o.a.debounce(this.__renderDebouncer,e>0?c.d.after(e):c.c,t.bind(this)),Object(a.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(a.b)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){for(var t=this.items||[],e=new Array(t.length),n=0;n<t.length;n++)e[n]=n;this.__filterFn&&(e=e.filter((e,n,r)=>this.__filterFn(t[e],n,r))),this.__sortFn&&e.sort((e,n)=>this.__sortFn(t[e],t[n]));for(var r=this.__itemsIdxToInstIdx={},i=0,o=Math.min(e.length,this.__limit);i<o;i++){var a=this.__instances[i],s=e[i],l=t[s];r[s]=i,a?(a._setPendingProperty(this.as,l),a._setPendingProperty(this.indexAs,i),a._setPendingProperty(this.itemsIndexAs,s),a._flushProperties()):this.__insertInstance(l,i,s)}for(var c=this.__instances.length-1;c>=i;c--)this.__detachAndRemoveInstance(c)}__detachInstance(t){for(var e=this.__instances[t],n=Object(d.a)(e.root),r=0;r<e.children.length;r++){var i=e.children[r];n.appendChild(i)}return e}__attachInstance(t,e){var n=this.__instances[t];e.insertBefore(n.root,this)}__detachAndRemoveInstance(t){var e=this.__detachInstance(t);e&&this.__pool.push(e),this.__instances.splice(t,1)}__stampInstance(t,e,n){var r={};return r[this.as]=t,r[this.indexAs]=e,r[this.itemsIndexAs]=n,new this.__ctor(r)}__insertInstance(t,e,n){var r=this.__pool.pop();r?(r._setPendingProperty(this.as,t),r._setPendingProperty(this.indexAs,e),r._setPendingProperty(this.itemsIndexAs,n),r._flushProperties()):r=this.__stampInstance(t,e,n);var i=this.__instances[e+1],o=i?i.children[0]:this;return Object(d.a)(Object(d.a)(this).parentNode).insertBefore(r.root,o),this.__instances[e]=r,r}_showHideChildren(t){for(var e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){var n=t.slice(6),r=n.indexOf("."),i=r<0?n:n.substring(0,r);if(i==parseInt(i,10)){var o=r<0?"":n.substring(r+1);this.__handleObservedPaths(o);var a=this.__itemsIdxToInstIdx[i],s=this.__instances[a];if(s){var l=this.as+(o?"."+o:"");s._setPendingPropertyOrPath(l,e,!1,!0),s._flushProperties()}return!0}}itemForElement(t){var e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){var e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return Object(i.a)(this.template,t)}}customElements.define(h.is,h)},function(t,e,n){"use strict";n(71),n(62),n(73),n(82);var r=document.createElement("template");r.innerHTML='<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n\n      /* RTL specific styles */\n\n      :host([dir="rtl"]) [part="label"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n      :host([required][dir="rtl"]) [part="label"] {\n        padding-left: 1em;\n        padding-right: 0;\n      }\n\n      :host([dir="rtl"]) [part="label"]::after {\n        right: auto;\n        left: 0;\n      }\n\n      :host([dir="rtl"]) [part="error-message"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content)},,,function(t,e,n){"use strict";n(71),n(93),n(62),n(73),n(82);var r=n(10).a`<dom-module id="lumo-button" theme-for="vaadin-button">
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
</dom-module>`;document.head.appendChild(r.content)},,function(t,e,n){"use strict";var r=n(75),i=n(10),o=i.a`
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
</custom-style>`;o.setAttribute("style","display: none;"),document.head.appendChild(o.content);var a=document.createElement("style");a.textContent="[hidden] { display: none !important; }",document.head.appendChild(a);n(111);var s=n(56),l=n(31);
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
Object(s.a)({_template:i.a`
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
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:r.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(l.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(l.a)(this.root).appendChild(this._img))}})},,function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(40),i={templatize(t,e){this._templatizerTemplate=t,this.ctor=Object(r.b)(t,this,{mutableData:Boolean(e),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(t){return new this.ctor(t)},modelForElement(t){return Object(r.a)(this._templatizerTemplate,t)}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/},function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(25),i=n(40),o=n(21),a=n(33),s=n(12),l=n(8),c=n(6);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class d extends r.a{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=o.a.debounce(this.__renderDebouncer,s.c,()=>this.__render()),Object(a.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();var t=Object(c.a)(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(c.a)(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){Object(a.b)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){var t=Object(c.a)(this).parentNode;if(t){if(!this.__ctor){var e=Object(c.a)(this).querySelector("template");if(!e){var n=new MutationObserver(()=>{if(!Object(c.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");n.disconnect(),this.__render()});return n.observe(this,{childList:!0}),!1}this.__ctor=Object(i.b)(e,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(l.g)(t)]=!0))}})}if(this.__instance){this.__syncHostProperties();var r=this.__instance.children;if(r&&r.length)if(Object(c.a)(this).previousSibling!==r[r.length-1])for(var o,a=0;a<r.length&&(o=r[a]);a++)Object(c.a)(t).insertBefore(o,this)}else this.__instance=new this.__ctor,Object(c.a)(t).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){var t=this.__invalidProps;if(t){for(var e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){var t=this.__instance.children;if(t&&t.length){var e=Object(c.a)(t[0]).parentNode;if(e){e=Object(c.a)(e);for(var n,r=0;r<t.length&&(n=t[r]);r++)e.removeChild(n)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){var t=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(t)}}customElements.define(d.is,d)},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r,i=n(51);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/r=i.a._mutablePropertyChange;var o={properties:{mutableData:Boolean},_shouldPropertyChange(t,e,n){return r(this,t,e,n,this.mutableData)}}},function(t,e,n){"use strict";n(75);var r=n(111),i=n(56),o=n(31);
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
Object(i.a)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new r.a({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(t){return this.name+":"+t}),this)},applyIcon:function(t,e){this.removeIcon(t);var n=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(n){var r=Object(o.a)(t.root||t);return r.insertBefore(n,r.childNodes[0]),t._svgIcon=n}return null},removeIcon:function(t){t._svgIcon&&(Object(o.a)(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===e.getAttribute("dir")}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&"rtl"===window.getComputedStyle(t).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var t=Object.create(null);return Object(o.a)(this).querySelectorAll("[id]").forEach((function(e){t[e.id]=e})),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,n){if(t){var r=t.cloneNode(!0),i=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=r.getAttribute("viewBox")||"0 0 "+e+" "+e,a="pointer-events: none; display: block; width: 100%; height: 100%;";return n&&r.hasAttribute("mirror-in-rtl")&&(a+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),i.setAttribute("viewBox",o),i.setAttribute("preserveAspectRatio","xMidYMid meet"),i.setAttribute("focusable","false"),i.style.cssText=a,i.appendChild(r).removeAttribute("id"),i}return null}})},function(t,e,n){"use strict";n(62);var r=document.createElement("template");r.innerHTML='<dom-module id="lumo-ordered-layout">\n  <template>\n    <style>\n      :host([theme~="margin"]) {\n        margin: var(--lumo-space-m);\n      }\n\n      :host([theme~="padding"]) {\n        padding: var(--lumo-space-m);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content)},,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(87),i=n(88),o=(n(75),n(10)),a=n(21),s=n(12),l=n(25);class c extends l.a{static get template(){return o.a`
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
`}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}connectedCallback(){super.connectedCallback(),this._runChrome72ShadowDomBugWorkaround()}_runChrome72ShadowDomBugWorkaround(){var t=navigator.userAgent;if(t&&t.match("Chrome/")){var e=t.split("Chrome/")[1].split(".")[0];if(e&&parseInt(e)>71){var n=this._getDebouncedNotifyResizeFunction();n&&(this.style.visibility="hidden",requestAnimationFrame(()=>{this.style.visibility="",n()}))}}}_getDebouncedNotifyResizeFunction(){for(var t=this.parentElement;;){if(!t)return;if(t.notifyResize)break;t=t.parentElement}return t._debouncedNotifyResize||(t._debouncedNotifyResize=function(){t.__debouncedNotifyResize=a.a.debounce(t.__debouncedNotifyResize,s.a,t.notifyResize)}),t._debouncedNotifyResize}ready(){super.ready(),this.addEventListener("click",(function(t){this.firstChild&&"function"==typeof this.firstChild.click&&t.target===this&&this.firstChild.click()})),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=a.a.debounce(this._debouncer,s.b,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(this.nodeid&&this.appid){var t=this._getRenderedComponent();this.firstChild?t?this.firstChild!==t?(this.replaceChild(t,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):(this._clear(),this._asyncAttachRenderedComponentIfAble()):t?(this.appendChild(t),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(t){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(t)}return null}_clear(){for(;this.firstChild;)this.removeChild(this.firstChild)}onComponentRendered(){}_defineFocusTarget(){var t=this._getFirstFocusableDescendant(this.firstChild);null!==t&&t.setAttribute("focus-target","true")}_getFirstFocusableDescendant(t){if(this._isFocusable(t))return t;if(!t.children)return null;for(var e=0;e<t.children.length;e++){var n=this._getFirstFocusableDescendant(t.children[e]);if(null!==n)return n}return null}_isFocusable(t){return(!t.hasAttribute||"function"!=typeof t.hasAttribute||!t.hasAttribute("disabled")&&!t.hasAttribute("hidden"))&&0===t.tabIndex}_onAnimationEnd(t){0===t.animationName.indexOf("flow-component-renderer-appear")&&this._attachRenderedComponentIfAble()}}window.customElements.define(c.is,c);n(131),n(71),n(57),n(141),n(146);var d=document.createElement("template");d.innerHTML='<iron-iconset-svg size="1000" name="lumo">\n<svg xmlns="http://www.w3.org/2000/svg">\n<defs>\n<g id="angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>\n<g id="angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>\n<g id="angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>\n<g id="angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>\n<g id="arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>\n<g id="arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>\n<g id="arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>\n<g id="arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>\n<g id="bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>\n<g id="bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>\n<g id="calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>\n<g id="checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>\n<g id="chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>\n<g id="chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>\n<g id="chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>\n<g id="chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>\n<g id="clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>\n<g id="cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>\n<g id="cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>\n<g id="download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>\n<g id="dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>\n<g id="edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>\n<g id="error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>\n<g id="eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>\n<g id="eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>\n<g id="menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>\n<g id="minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>\n<g id="ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>\n<g id="photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>\n<g id="play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>\n<g id="plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>\n<g id="redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>\n<g id="reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>\n<g id="search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>\n<g id="undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>\n<g id="unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>\n<g id="user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>\n</defs>\n</svg>\n</iron-iconset-svg>',document.head.appendChild(d.content);n(93),n(62),n(73),n(82);var u=o.a`<dom-module id="lumo-notification-card" theme-for="vaadin-notification-card">
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
</dom-module>`;document.head.appendChild(u.content);var h=n(40),p=n(46),m=n(44),f=n(97),_=n(84);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class v extends(Object(m.a)(Object(p.a)(l.a))){static get template(){return o.a`
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
`}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}_openedChanged(t){t?(document.body.appendChild(this),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}constructor(){super(),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_detectIosNavbar(){var t=window.innerHeight,e=window.innerWidth>t,n=document.documentElement.clientHeight;this.style.bottom=e&&n>t?n-t+"px":"0"}}class b extends(Object(m.a)(l.a)){static get template(){return o.a`
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
`}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class y extends(Object(f.a)(Object(p.a)(l.a))){static get template(){return o.a`
    <style>
      :host {
        display: none;
      }
    </style>
    <vaadin-notification-card id="vaadin-notification-card" theme\$="[[theme]]">
    </vaadin-notification-card>
`}static get is(){return"vaadin-notification"}static get version(){return"1.6.1"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function,_notificationTemplate:Object}}static get observers(){return["_durationChanged(duration, opened)","_templateOrRendererChanged(_notificationTemplate, renderer, opened)"]}ready(){super.ready(),this._observer=new _.a(this,t=>{this._setTemplateFromNodes(t.addedNodes)})}_setTemplateFromNodes(t){this._notificationTemplate=t.filter(t=>t.localName&&"template"===t.localName)[0]||this._notificationTemplate}render(){"function"==typeof this.renderer&&this.renderer(this._card,this)}_removeNewRendererOrTemplate(t,e,n,r){t!==e?this._notificationTemplate=void 0:n!==r&&(this.renderer=void 0)}_templateOrRendererChanged(t,e,n){if(t&&e)throw this._removeNewRendererOrTemplate(t,this._oldTemplate,e,this._oldRenderer),new Error("You should only use either a renderer or a template for notification content");this._oldTemplate=t;var r=this._oldRenderer!==e;if(this._oldRenderer=e,e){if(this._card=this.$["vaadin-notification-card"],r)for(;this._card.firstChild;)this._card.removeChild(this._card.firstChild);n&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.render())}}open(){this.opened=!0}close(){this.opened=!1}get _container(){return y._container||(y._container=document.createElement("vaadin-notification-container"),document.body.appendChild(y._container)),y._container}_openedChanged(t){t?(this._container.opened=!0,this._instance||this.renderer||this._ensureTemplatized(),this._animatedAppendNotificationCard(),setTimeout(()=>this._updateShadyButtonStyles())):this._card&&this._closeNotificationCard()}_ensureTemplatized(){if(this._notificationTemplate=this.querySelector("template")||this._notificationTemplate,this._notificationTemplate){this._notificationTemplate._Templatizer||(this._notificationTemplate._Templatizer=Object(h.b)(this._notificationTemplate,this,{forwardHostProp:function(t,e){this._instance&&this._instance.forwardHostProp(t,e)}})),this._instance=new this._notificationTemplate._Templatizer({});var t=this._notificationTemplate.getRootNode(),e=t!==document;if(this._card=this.$["vaadin-notification-card"],this._cardContent=this._card.shadowRoot.querySelector('[part~="content"]'),e){if(this._cardContent.shadowRoot||this._cardContent.attachShadow({mode:"open"}),window.ShadyCSS&&!window.ShadyCSS.nativeShadow){var n=t.host&&t.host.localName;n&&-1===n.indexOf("-")&&(n=t.host.getAttribute("is")),n&&this._cardContent.setAttribute("is",n)}else{var r=Array.from(t.querySelectorAll("style")).reduce((t,e)=>t+e.textContent,"").replace(/:host/g,":host-nomatch");if(r){var i=document.createElement("style");i.textContent=r,this._cardContent.shadowRoot.appendChild(i)}}this._cardContent.shadowRoot.appendChild(this._instance.root)}else this._card.appendChild(this._instance.root);this._card.setAttribute("aria-label",this._card.textContent.trim())}}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();var t=()=>{this._card.removeEventListener("animationend",t),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",t),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){this._card&&(this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)?(this._card.slot=this.position,this._container.firstElementChild&&/top/.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)):window.console.warn("Invalid alignment parameter provided: position="+this.position))}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=Boolean(this._container.firstElementChild)}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");var t=getComputedStyle(this._card).getPropertyValue("animation-name");if(t&&"none"!=t){var e=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",e)};this._card.addEventListener("animationend",e)}else this._removeNotificationCard()}_positionChanged(t){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(t,e){e&&(clearTimeout(this._durationTimeoutId),t>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),t)))}_updateShadyButtonStyles(){window.ShadyCSS&&!this.__buttonStylesPending&&(customElements.whenDefined("vaadin-button").then(()=>{Array.from(this._card.querySelectorAll("*")).filter(t=>t instanceof customElements.get("vaadin-button")).forEach(t=>{var e=["--_lumo-button-color","--_lumo-button-background-color","--_lumo-button-primary-color","--_lumo-button-primary-background-color"].reduce((t,e)=>{var n=window.ShadyCSS.getComputedStyleValue(this._card,e);return n&&(t[e]=n),t},{});t.updateStyles(e)}),this.__buttonStylesPending=!1}),this.__buttonStylesPending=!0)}}customElements.define(v.is,v),customElements.define(b.is,b),customElements.define(y.is,y);n(147);var g=o.a`<dom-module id="lumo-vertical-layout" theme-for="vaadin-vertical-layout">
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
</dom-module>`;document.head.appendChild(g.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class w extends(Object(p.a)(Object(m.a)(l.a))){static get template(){return o.a`
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
`}static get is(){return"vaadin-vertical-layout"}static get version(){return"1.4.0"}}customElements.define(w.is,w);n(125);var C=document.createElement("div");function x(t){var e=document.createElement("template");e.innerHTML=t,document.head.appendChild(e.content)}C.innerHTML='<custom-style><style include="lumo-color lumo-typography"></style></custom-style>',document.head.insertBefore(C.firstElementChild,document.head.firstChild),x(`<custom-style><style>${r.a}</style></custom-style>`),x(`<dom-module id="flow_css_mod_1" theme-for="vaadin-text-field"><template><style>${i.a}</style></template></dom-module>`);document.getElementsByTagName("script");for(var O,A=document.getElementsByTagName("script"),S=0;S<A.length;S++){var P=A[S];if("module"==P.getAttribute("type")&&P.getAttribute("data-app-id")&&!P["vaadin-bundle"]){O=P;break}}if(!O)throw new Error("Could not find the bundle script to identify the application id");O["vaadin-bundle"]=!0,window.Vaadin.Flow.fallbacks||(window.Vaadin.Flow.fallbacks={});var E=window.Vaadin.Flow.fallbacks;E[O.getAttribute("data-app-id")]={},E[O.getAttribute("data-app-id")].loadFallback=function(){return Promise.all([n.e(0),n.e(4),n.e(6)]).then(n.bind(null,499))}}]);
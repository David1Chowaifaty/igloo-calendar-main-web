'use strict';

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/internal/validators/mirror-validator.ts
var MirrorValidator = () => {
  return {
    checkValidity(element) {
      const formControl = element.input;
      const validity = {
        message: "",
        isValid: true,
        invalidKeys: []
      };
      if (!formControl) {
        return validity;
      }
      let isValid = true;
      if ("checkValidity" in formControl) {
        isValid = formControl.checkValidity();
      }
      if (isValid) {
        return validity;
      }
      validity.isValid = false;
      if ("validationMessage" in formControl) {
        validity.message = formControl.validationMessage;
      }
      if (!("validity" in formControl)) {
        validity.invalidKeys.push("customError");
        return validity;
      }
      for (const key in formControl.validity) {
        if (key === "valid") {
          continue;
        }
        const checkedKey = key;
        if (formControl.validity[checkedKey]) {
          validity.invalidKeys.push(checkedKey);
        }
      }
      return validity;
    }
  };
};

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=globalThis,e$8=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$8=new WeakMap;class n$5{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$8&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$8.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$8.set(s,t));}return t}toString(){return this.cssText}}const r$5=t=>new n$5("string"==typeof t?t:t+"",void 0,s$2),S$1=(s,o)=>{if(e$8)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$3.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$8?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$5(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$4,defineProperty:e$7,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$4,getOwnPropertySymbols:o$7,getPrototypeOf:n$4}=Object,a$2=globalThis,c$1=a$2.trustedTypes,l$3=c$1?c$1.emptyScript:"",p$1=a$2.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$3={toAttribute(t,s){switch(s){case Boolean:t=t?l$3:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$2=(t,s)=>!i$4(t,s),b={attribute:!0,type:String,converter:u$3,reflect:!1,useDefault:!1,hasChanged:f$2};Symbol.metadata??=Symbol("metadata"),a$2.litPropertyMetadata??=new WeakMap;class y$1 extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$7(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$4(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$4(t),...o$7(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$3).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$3;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){const e=this.constructor,h=this[t];if(i??=e.getPropertyOptions(t),!((i.hasChanged??f$2)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(e._$Eu(t,i))))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),!0!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),!0===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];!0!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EM();}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM();}updated(t){}firstUpdated(t){}}y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$2.reactiveElementVersions??=[]).push("2.1.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,i$3=t$2.trustedTypes,s$1=i$3?i$3.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$6="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$6="?"+h,n$3=`<${o$6}>`,r$3=document,l$2=()=>r$3.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a$1=Array.isArray,u$2=t=>a$1(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m$1=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$3.createTreeWalker(r$3,129);function P(t,i){if(!a$1(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f$1;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f$1?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m$1):void 0!==u[3]&&(c=m$1):c===m$1?">"===u[0]?(c=r??f$1,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m$1:'"'===u[3]?g:p):c===g||c===p?c=m$1:c===v||c===_?c=f$1:(c=m$1,r=void 0);const x=c===m$1&&t[i+1].startsWith("/>")?" ":"";l+=c===f$1?s+n$3:d>=0?(o.push(a),s.slice(0,d)+e$6+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$6)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$3?i$3.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l$2()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l$2());}}}else if(8===r.nodeType)if(r.data===o$6)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$3.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$3).importNode(i,!0);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=C.nextNode(),o++);}return C.currentNode=r$3,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u$2(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$3.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a$1(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l$2()),this.O(l$2()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===E?void 0:t;}}class I extends k{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E);}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const j=t$2.litHtmlPolyfillSupport;j?.(N,R),(t$2.litHtmlVersions??=[]).push("3.3.1");const B=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new R(i.insertBefore(l$2(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i$2 extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return T}}i$2._$litElement$=!0,i$2["finalized"]=!0,s.litElementHydrateSupport?.({LitElement:i$2});const o$5=s.litElementPolyfillSupport;o$5?.({LitElement:i$2});(s.litElementVersions??=[]).push("4.2.1");

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$4=!1;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$3={attribute:!0,type:String,converter:u$3,reflect:!1,hasChanged:f$2},r$2=(t=o$3,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n$2(t){return (e,o)=>"object"==typeof o?r$2(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r$1(r){return n$2({...r,state:!0,attribute:!1})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$5=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$4(e,r){return (n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(r){const{get:e,set:r}="object"==typeof s?n:i??(()=>{const t=Symbol();return {get(){return this[t]},set(e){this[t]=e;}}})();return e$5(n,s,{get(){let t=e.call(this);return void 0===t&&(t=o(this),(null!==t||this.hasUpdated)&&r.call(this,t)),t}})}return e$5(n,s,{get(){return o(this)}})}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function r(r){return (n,e)=>e$5(n,e,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(r)??null}})}

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/styles/component/host.css
var host_default = ":host {\n  box-sizing: border-box !important;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: inherit !important;\n}\n\n[hidden] {\n  display: none !important;\n}\n";

// src/internal/webawesome-element.ts
var _hasRecordedInitialProperties;
var WebAwesomeElement = class extends i$2 {
  constructor() {
    super();
    __privateAdd(this, _hasRecordedInitialProperties, false);
    this.initialReflectedProperties = /* @__PURE__ */ new Map();
    this.didSSR = Boolean(this.shadowRoot);
    /**
     * Methods for setting and checking custom states.
     */
    this.customStates = {
      /** Adds or removes the specified custom state. */
      set: (customState, active) => {
        if (!Boolean(this.internals?.states)) return;
        try {
          if (active) {
            this.internals.states.add(customState);
          } else {
            this.internals.states.delete(customState);
          }
        } catch (e) {
          if (String(e).includes("must start with '--'")) {
            console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");
          } else {
            throw e;
          }
        }
      },
      /** Determines whether or not the element currently has the specified state. */
      has: (customState) => {
        if (!Boolean(this.internals?.states)) return false;
        try {
          return this.internals.states.has(customState);
        } catch {
          return false;
        }
      }
    };
    try {
      this.internals = this.attachInternals();
    } catch {
      console.error("Element internals are not supported in your browser. Consider using a polyfill");
    }
    this.customStates.set("wa-defined", true);
    let Self = this.constructor;
    for (let [property2, spec] of Self.elementProperties) {
      if (spec.default === "inherit" && spec.initial !== void 0 && typeof property2 === "string") {
        this.customStates.set(`initial-${property2}-${spec.initial}`, true);
      }
    }
  }
  /**
   * Override the default styles property to fetch and convert string CSS files. Components can override this behavior
   * by setting their own `static styles = []` property.
   */
  static get styles() {
    const styles = Array.isArray(this.css) ? this.css : this.css ? [this.css] : [];
    return [host_default, ...styles].map((style) => typeof style === "string" ? r$5(style) : style);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (!__privateGet(this, _hasRecordedInitialProperties)) {
      this.constructor.elementProperties.forEach(
        (obj, prop) => {
          if (obj.reflect && this[prop] != null) {
            this.initialReflectedProperties.set(prop, this[prop]);
          }
        }
      );
      __privateSet(this, _hasRecordedInitialProperties, true);
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    this.initialReflectedProperties.forEach((value, prop) => {
      if (changedProperties.has(prop) && this[prop] == null) {
        this[prop] = value;
      }
    });
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    if (this.didSSR) {
      this.shadowRoot?.querySelectorAll("slot").forEach((slotElement) => {
        slotElement.dispatchEvent(new Event("slotchange", { bubbles: true, composed: false, cancelable: false }));
      });
    }
  }
  update(changedProperties) {
    try {
      super.update(changedProperties);
    } catch (e) {
      if (this.didSSR && !this.hasUpdated) {
        const event = new Event("lit-hydration-error", { bubbles: true, composed: true, cancelable: false });
        event.error = e;
        this.dispatchEvent(event);
      }
      throw e;
    }
  }
  /**
   * Given a native event, this function cancels it and dispatches it again from the host element using the desired
   * event options.
   */
  relayNativeEvent(event, eventOptions) {
    event.stopImmediatePropagation();
    this.dispatchEvent(
      new event.constructor(event.type, {
        ...event,
        ...eventOptions
      })
    );
  }
};
_hasRecordedInitialProperties = new WeakMap();
__decorateClass([
  n$2()
], WebAwesomeElement.prototype, "dir", 2);
__decorateClass([
  n$2()
], WebAwesomeElement.prototype, "lang", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true, attribute: "did-ssr" })
], WebAwesomeElement.prototype, "didSSR", 2);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/events/invalid.ts
var WaInvalidEvent = class extends Event {
  constructor() {
    super("wa-invalid", { bubbles: true, cancelable: false, composed: true });
  }
};

// src/internal/validators/custom-error-validator.ts
var CustomErrorValidator = () => {
  return {
    observedAttributes: ["custom-error"],
    checkValidity(element) {
      const validity = {
        message: "",
        isValid: true,
        invalidKeys: []
      };
      if (element.customError) {
        validity.message = element.customError;
        validity.isValid = false;
        validity.invalidKeys = ["customError"];
      }
      return validity;
    }
  };
};

// src/internal/webawesome-form-associated-element.ts
var WebAwesomeFormAssociatedElement = class extends WebAwesomeElement {
  constructor() {
    super();
    this.name = null;
    this.disabled = false;
    this.required = false;
    this.assumeInteractionOn = ["input"];
    this.validators = [];
    this.valueHasChanged = false;
    this.hasInteracted = false;
    this.customError = null;
    this.emittedEvents = [];
    this.emitInvalid = (e) => {
      if (e.target !== this) return;
      this.hasInteracted = true;
      this.dispatchEvent(new WaInvalidEvent());
    };
    this.handleInteraction = (event) => {
      const emittedEvents = this.emittedEvents;
      if (!emittedEvents.includes(event.type)) {
        emittedEvents.push(event.type);
      }
      if (emittedEvents.length === this.assumeInteractionOn?.length) {
        this.hasInteracted = true;
      }
    };
    {
      this.addEventListener("invalid", this.emitInvalid);
    }
  }
  /**
   * Validators are static because they have `observedAttributes`, essentially attributes to "watch"
   * for changes. Whenever these attributes change, we want to be notified and update the validator.
   */
  static get validators() {
    return [CustomErrorValidator()];
  }
  // Append all Validator "observedAttributes" into the "observedAttributes" so they can run.
  static get observedAttributes() {
    const parentAttrs = new Set(super.observedAttributes || []);
    for (const validator of this.validators) {
      if (!validator.observedAttributes) {
        continue;
      }
      for (const attr of validator.observedAttributes) {
        parentAttrs.add(attr);
      }
    }
    return [...parentAttrs];
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateValidity();
    this.assumeInteractionOn.forEach((event) => {
      this.addEventListener(event, this.handleInteraction);
    });
  }
  firstUpdated(...args) {
    super.firstUpdated(...args);
    this.updateValidity();
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("customError")) {
      if (!this.customError) {
        this.customError = null;
      }
      this.setCustomValidity(this.customError || "");
    }
    if (changedProperties.has("value") || changedProperties.has("disabled")) {
      const value = this.value;
      if (Array.isArray(value)) {
        if (this.name) {
          const formData = new FormData();
          for (const val of value) {
            formData.append(this.name, val);
          }
          this.setValue(formData, formData);
        }
      } else {
        this.setValue(value, value);
      }
    }
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
      if (this.hasAttribute("disabled") || !this.matches(":disabled")) {
        this.toggleAttribute("disabled", this.disabled);
      }
    }
    this.updateValidity();
    super.willUpdate(changedProperties);
  }
  get labels() {
    return this.internals.labels;
  }
  getForm() {
    return this.internals.form;
  }
  get validity() {
    return this.internals.validity;
  }
  // Not sure if this supports `novalidate`. Will need to test.
  get willValidate() {
    return this.internals.willValidate;
  }
  get validationMessage() {
    return this.internals.validationMessage;
  }
  checkValidity() {
    this.updateValidity();
    return this.internals.checkValidity();
  }
  reportValidity() {
    this.updateValidity();
    this.hasInteracted = true;
    return this.internals.reportValidity();
  }
  /**
   * Override this to change where constraint validation popups are anchored.
   */
  get validationTarget() {
    return this.input || void 0;
  }
  setValidity(...args) {
    const flags = args[0];
    const message = args[1];
    let anchor = args[2];
    if (!anchor) {
      anchor = this.validationTarget;
    }
    this.internals.setValidity(flags, message, anchor || void 0);
    this.requestUpdate("validity");
    this.setCustomStates();
  }
  setCustomStates() {
    const required = Boolean(this.required);
    const isValid = this.internals.validity.valid;
    const hasInteracted = this.hasInteracted;
    this.customStates.set("required", required);
    this.customStates.set("optional", !required);
    this.customStates.set("invalid", !isValid);
    this.customStates.set("valid", isValid);
    this.customStates.set("user-invalid", !isValid && hasInteracted);
    this.customStates.set("user-valid", isValid && hasInteracted);
  }
  /**
   * Do not use this when creating a "Validator". This is intended for end users of components.
   * We track manually defined custom errors so we don't clear them on accident in our validators.
   *
   */
  setCustomValidity(message) {
    if (!message) {
      this.customError = null;
      this.setValidity({});
      return;
    }
    this.customError = message;
    this.setValidity({ customError: true }, message, this.validationTarget);
  }
  formResetCallback() {
    this.resetValidity();
    this.hasInteracted = false;
    this.valueHasChanged = false;
    this.emittedEvents = [];
    this.updateValidity();
  }
  formDisabledCallback(isDisabled) {
    this.disabled = isDisabled;
    this.updateValidity();
  }
  /**
   * Called when the browser is trying to restore element’s state to state in which case reason is "restore", or when
   * the browser is trying to fulfill autofill on behalf of user in which case reason is "autocomplete". In the case of
   * "restore", state is a string, File, or FormData object previously set as the second argument to setFormValue.
   */
  formStateRestoreCallback(state, reason) {
    this.value = state;
    if (reason === "restore") {
      this.resetValidity();
    }
    this.updateValidity();
  }
  setValue(...args) {
    const [value, state] = args;
    this.internals.setFormValue(value, state);
  }
  get allValidators() {
    const staticValidators = this.constructor.validators || [];
    const validators = this.validators || [];
    return [...staticValidators, ...validators];
  }
  /**
   * Reset validity is a way of removing manual custom errors and native validation.
   */
  resetValidity() {
    this.setCustomValidity("");
    this.setValidity({});
  }
  updateValidity() {
    if (this.disabled || this.hasAttribute("disabled") || !this.willValidate) {
      this.resetValidity();
      return;
    }
    const validators = this.allValidators;
    if (!validators?.length) {
      return;
    }
    const flags = {
      // Don't trust custom errors from the Browser. Safari breaks the spec.
      customError: Boolean(this.customError)
    };
    const formControl = this.validationTarget || this.input || void 0;
    let finalMessage = "";
    for (const validator of validators) {
      const { isValid, message, invalidKeys } = validator.checkValidity(this);
      if (isValid) {
        continue;
      }
      if (!finalMessage) {
        finalMessage = message;
      }
      if (invalidKeys?.length >= 0) {
        invalidKeys.forEach((str) => flags[str] = true);
      }
    }
    if (!finalMessage) {
      finalMessage = this.validationMessage;
    }
    this.setValidity(flags, finalMessage, formControl);
  }
};
WebAwesomeFormAssociatedElement.formAssociated = true;
__decorateClass([
  n$2({ reflect: true })
], WebAwesomeFormAssociatedElement.prototype, "name", 2);
__decorateClass([
  n$2({ type: Boolean })
], WebAwesomeFormAssociatedElement.prototype, "disabled", 2);
__decorateClass([
  n$2({ state: true, attribute: false })
], WebAwesomeFormAssociatedElement.prototype, "valueHasChanged", 2);
__decorateClass([
  n$2({ state: true, attribute: false })
], WebAwesomeFormAssociatedElement.prototype, "hasInteracted", 2);
__decorateClass([
  n$2({ attribute: "custom-error", reflect: true })
], WebAwesomeFormAssociatedElement.prototype, "customError", 2);
__decorateClass([
  n$2({ attribute: false, state: true, type: Object })
], WebAwesomeFormAssociatedElement.prototype, "validity", 1);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/styles/utilities/variants.css
var variants_default = "@layer wa-utilities {\n  :where(:root),\n  .wa-neutral,\n  :host([variant='neutral']) {\n    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-neutral-border-loud);\n    --wa-color-border-normal: var(--wa-color-neutral-border-normal);\n    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);\n    --wa-color-on-loud: var(--wa-color-neutral-on-loud);\n    --wa-color-on-normal: var(--wa-color-neutral-on-normal);\n    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);\n  }\n\n  .wa-brand,\n  :host([variant='brand']) {\n    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-brand-border-loud);\n    --wa-color-border-normal: var(--wa-color-brand-border-normal);\n    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);\n    --wa-color-on-loud: var(--wa-color-brand-on-loud);\n    --wa-color-on-normal: var(--wa-color-brand-on-normal);\n    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);\n  }\n\n  .wa-success,\n  :host([variant='success']) {\n    --wa-color-fill-loud: var(--wa-color-success-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-success-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-success-border-loud);\n    --wa-color-border-normal: var(--wa-color-success-border-normal);\n    --wa-color-border-quiet: var(--wa-color-success-border-quiet);\n    --wa-color-on-loud: var(--wa-color-success-on-loud);\n    --wa-color-on-normal: var(--wa-color-success-on-normal);\n    --wa-color-on-quiet: var(--wa-color-success-on-quiet);\n  }\n\n  .wa-warning,\n  :host([variant='warning']) {\n    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-warning-border-loud);\n    --wa-color-border-normal: var(--wa-color-warning-border-normal);\n    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);\n    --wa-color-on-loud: var(--wa-color-warning-on-loud);\n    --wa-color-on-normal: var(--wa-color-warning-on-normal);\n    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);\n  }\n\n  .wa-danger,\n  :host([variant='danger']) {\n    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-danger-border-loud);\n    --wa-color-border-normal: var(--wa-color-danger-border-normal);\n    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);\n    --wa-color-on-loud: var(--wa-color-danger-on-loud);\n    --wa-color-on-normal: var(--wa-color-danger-on-normal);\n    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);\n  }\n}\n";

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/internal/slot.ts
var HasSlotController = class {
  constructor(host, ...slotNames) {
    this.slotNames = [];
    this.handleSlotChange = (event) => {
      const slot = event.target;
      if (this.slotNames.includes("[default]") && !slot.name || slot.name && this.slotNames.includes(slot.name)) {
        this.host.requestUpdate();
      }
    };
    (this.host = host).addController(this);
    this.slotNames = slotNames;
  }
  hasDefaultSlot() {
    return [...this.host.childNodes].some((node) => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
        return true;
      }
      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node;
        const tagName = el.tagName.toLowerCase();
        if (tagName === "wa-visually-hidden") {
          return false;
        }
        if (!el.hasAttribute("slot")) {
          return true;
        }
      }
      return false;
    });
  }
  hasNamedSlot(name) {
    return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
  }
  test(slotName) {
    return slotName === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
  }
  hostConnected() {
    this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
};

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/styles/utilities/size.css
var size_default = "@layer wa-utilities {\n  :host([size='small']),\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  :host([size='medium']),\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  :host([size='large']),\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n";

const connectedElements = new Set();
const translations = new Map();
let fallback;
let documentDirection = 'ltr';
let documentLanguage = 'en';
const isClient = (typeof MutationObserver !== "undefined" && typeof document !== "undefined" && typeof document.documentElement !== "undefined");
if (isClient) {
    const documentElementObserver = new MutationObserver(update);
    documentDirection = document.documentElement.dir || 'ltr';
    documentLanguage = document.documentElement.lang || navigator.language;
    documentElementObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['dir', 'lang']
    });
}
function registerTranslation(...translation) {
    translation.map(t => {
        const code = t.$code.toLowerCase();
        if (translations.has(code)) {
            translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t));
        }
        else {
            translations.set(code, t);
        }
        if (!fallback) {
            fallback = t;
        }
    });
    update();
}
function update() {
    if (isClient) {
        documentDirection = document.documentElement.dir || 'ltr';
        documentLanguage = document.documentElement.lang || navigator.language;
    }
    [...connectedElements.keys()].map((el) => {
        if (typeof el.requestUpdate === 'function') {
            el.requestUpdate();
        }
    });
}
class LocalizeController$1 {
    constructor(host) {
        this.host = host;
        this.host.addController(this);
    }
    hostConnected() {
        connectedElements.add(this.host);
    }
    hostDisconnected() {
        connectedElements.delete(this.host);
    }
    dir() {
        return `${this.host.dir || documentDirection}`.toLowerCase();
    }
    lang() {
        return `${this.host.lang || documentLanguage}`.toLowerCase();
    }
    getTranslationData(lang) {
        var _a, _b;
        const locale = new Intl.Locale(lang.replace(/_/g, '-'));
        const language = locale === null || locale === void 0 ? void 0 : locale.language.toLowerCase();
        const region = (_b = (_a = locale === null || locale === void 0 ? void 0 : locale.region) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : '';
        const primary = translations.get(`${language}-${region}`);
        const secondary = translations.get(language);
        return { locale, language, region, primary, secondary };
    }
    exists(key, options) {
        var _a;
        const { primary, secondary } = this.getTranslationData((_a = options.lang) !== null && _a !== void 0 ? _a : this.lang());
        options = Object.assign({ includeFallback: false }, options);
        if ((primary && primary[key]) ||
            (secondary && secondary[key]) ||
            (options.includeFallback && fallback && fallback[key])) {
            return true;
        }
        return false;
    }
    term(key, ...args) {
        const { primary, secondary } = this.getTranslationData(this.lang());
        let term;
        if (primary && primary[key]) {
            term = primary[key];
        }
        else if (secondary && secondary[key]) {
            term = secondary[key];
        }
        else if (fallback && fallback[key]) {
            term = fallback[key];
        }
        else {
            console.error(`No translation found for: ${String(key)}`);
            return String(key);
        }
        if (typeof term === 'function') {
            return term(...args);
        }
        return term;
    }
    date(dateToFormat, options) {
        dateToFormat = new Date(dateToFormat);
        return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
    }
    number(numberToFormat, options) {
        numberToFormat = Number(numberToFormat);
        return isNaN(numberToFormat) ? '' : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
    }
    relativeTime(value, unit, options) {
        return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
    }
}

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var translation = {
  $code: "en",
  $name: "English",
  $dir: "ltr",
  carousel: "Carousel",
  clearEntry: "Clear entry",
  close: "Close",
  copied: "Copied",
  copy: "Copy",
  currentValue: "Current value",
  error: "Error",
  goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
  hidePassword: "Hide password",
  loading: "Loading",
  nextSlide: "Next slide",
  numOptionsSelected: (num) => {
    if (num === 0) return "No options selected";
    if (num === 1) return "1 option selected";
    return `${num} options selected`;
  },
  pauseAnimation: "Pause animation",
  playAnimation: "Play animation",
  previousSlide: "Previous slide",
  progress: "Progress",
  remove: "Remove",
  resize: "Resize",
  scrollableRegion: "Scrollable region",
  scrollToEnd: "Scroll to end",
  scrollToStart: "Scroll to start",
  selectAColorFromTheScreen: "Select a color from the screen",
  showPassword: "Show password",
  slideNum: (slide) => `Slide ${slide}`,
  toggleColorFormat: "Toggle color format",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out"
};
registerTranslation(translation);
var en_default = translation;

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var LocalizeController = class extends LocalizeController$1 {
};
registerTranslation(en_default);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/internal/watch.ts
function watch(propertyName, options) {
  const resolvedOptions = {
    waitUntilFirstUpdate: false,
    ...options
  };
  return (proto, decoratedFnName) => {
    const { update } = proto;
    const watchedProperties = Array.isArray(propertyName) ? propertyName : [propertyName];
    proto.update = function(changedProps) {
      watchedProperties.forEach((property) => {
        const key = property;
        if (changedProps.has(key)) {
          const oldValue = changedProps.get(key);
          const newValue = this[key];
          if (oldValue !== newValue) {
            if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
              this[decoratedFnName](oldValue, newValue);
            }
          }
        }
      });
      update.call(this, changedProps);
    };
  };
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$3=t=>(...e)=>({_$litDirective$:t,values:e});class i$1{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$2=e$3(class extends i$1{constructor(t$1){if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||t$1.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[i]){if(void 0===this.st){this.st=new Set,void 0!==s.strings&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.st)t in i||(r.remove(t),this.st.delete(t));for(const t in i){const s=!!i[t];s===this.st.has(t)||this.nt?.has(t)||(s?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)));}return T}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$2=o=>o??E;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a=Symbol.for(""),o$1=t=>{if(t?.r===a)return t?._$litStatic$},i=(t,...r)=>({_$litStatic$:r.reduce(((r,e,a)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[a+1]),t[0]),r:a}),l$1=new Map,n$1=t=>(r,...e)=>{const a=e.length;let s,i;const n=[],u=[];let c,$=0,f=!1;for(;$<a;){for(c=r[$];$<a&&void 0!==(i=e[$],s=o$1(i));)c+=s+r[++$],f=!0;$!==a&&u.push(i),n.push(c),$++;}if($===a&&n.push(r[a]),f){const t=n.join("$$lit$$");void 0===(r=l$1.get(t))&&(n.raw=n,l$1.set(t,r=n)),e=u;}return t(r,...e)},u$1=n$1(x);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/button/button.css
var button_default = "@layer wa-component {\n  :host {\n    display: inline-block;\n\n    /* Workaround because Chrome doesn't like :host(:has()) below\n     * https://issues.chromium.org/issues/40062355\n     * Firefox doesn't like this nested rule, so both are needed */\n    &:has(wa-badge) {\n      position: relative;\n    }\n  }\n\n  /* Apply relative positioning only when needed to position wa-badge\n   * This avoids creating a new stacking context for every button */\n  :host(:has(wa-badge)) {\n    position: relative;\n  }\n}\n\n.button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  white-space: nowrap;\n  vertical-align: middle;\n  transition-property: background, border, box-shadow, color;\n  transition-duration: var(--wa-transition-fast);\n  transition-timing-function: var(--wa-transition-easing);\n  cursor: pointer;\n  padding: 0 var(--wa-form-control-padding-inline);\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: var(--wa-font-weight-action);\n  line-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);\n  height: var(--wa-form-control-height);\n  width: 100%;\n\n  background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));\n  border-color: transparent;\n  color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));\n  border-radius: var(--wa-form-control-border-radius);\n  border-style: var(--wa-border-style);\n  border-width: var(--wa-border-width-s);\n}\n\n/* Appearance modifiers */\n:host([appearance='plain']) {\n  .button {\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    background-color: transparent;\n    border-color: transparent;\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    background-color: color-mix(\n      in oklab,\n      var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),\n      var(--wa-color-mix-active)\n    );\n  }\n}\n\n:host([appearance='outlined']) {\n  .button {\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    background-color: transparent;\n    border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    background-color: color-mix(\n      in oklab,\n      var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),\n      var(--wa-color-mix-active)\n    );\n  }\n}\n\n:host([appearance='filled']) {\n  .button {\n    color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));\n    background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));\n    border-color: transparent;\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));\n      background-color: color-mix(\n        in oklab,\n        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),\n        var(--wa-color-mix-hover)\n      );\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));\n    background-color: color-mix(\n      in oklab,\n      var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),\n      var(--wa-color-mix-active)\n    );\n  }\n}\n\n:host([appearance='filled-outlined']) {\n  .button {\n    color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));\n    background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));\n    border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));\n      background-color: color-mix(\n        in oklab,\n        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),\n        var(--wa-color-mix-hover)\n      );\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));\n    background-color: color-mix(\n      in oklab,\n      var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),\n      var(--wa-color-mix-active)\n    );\n  }\n}\n\n:host([appearance='accent']) {\n  .button {\n    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));\n    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));\n    border-color: transparent;\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      background-color: color-mix(\n        in oklab,\n        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),\n        var(--wa-color-mix-hover)\n      );\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    background-color: color-mix(\n      in oklab,\n      var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),\n      var(--wa-color-mix-active)\n    );\n  }\n}\n\n/* Focus states */\n.button:focus {\n  outline: none;\n}\n\n.button:focus-visible {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n/* Disabled state */\n.button.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n/* When disabled, prevent mouse events from bubbling up from children */\n.button.disabled * {\n  pointer-events: none;\n}\n\n/* Keep it last so Safari doesn't stop parsing this block */\n.button::-moz-focus-inner {\n  border: 0;\n}\n\n/* Icon buttons */\n.button.is-icon-button {\n  outline-offset: 2px;\n  width: var(--wa-form-control-height);\n  aspect-ratio: 1;\n}\n\n.button.is-icon-button:has(wa-icon) {\n  width: auto;\n}\n\n/* Pill modifier */\n:host([pill]) .button {\n  border-radius: var(--wa-border-radius-pill);\n}\n\n/*\n * Label\n */\n\n.start,\n.end {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  pointer-events: none;\n}\n\n.label {\n  display: inline-block;\n}\n\n.is-icon-button .label {\n  display: flex;\n}\n\n.label::slotted(wa-icon) {\n  align-self: center;\n}\n\n/*\n * Caret modifier\n */\n\nwa-icon[part='caret'] {\n  display: flex;\n  align-self: center;\n  align-items: center;\n\n  &::part(svg) {\n    width: 0.875em;\n    height: 0.875em;\n  }\n\n  .button:has(&) .end {\n    display: none;\n  }\n}\n\n/*\n * Loading modifier\n */\n\n.loading {\n  position: relative;\n  cursor: wait;\n\n  .start,\n  .label,\n  .end,\n  .caret {\n    visibility: hidden;\n  }\n\n  wa-spinner {\n    --indicator-color: currentColor;\n    --track-color: color-mix(in oklab, currentColor, transparent 90%);\n\n    position: absolute;\n    font-size: 1em;\n    height: 1em;\n    width: 1em;\n    top: calc(50% - 0.5em);\n    left: calc(50% - 0.5em);\n  }\n}\n\n/*\n * Badges\n */\n\n.button ::slotted(wa-badge) {\n  border-color: var(--wa-color-surface-default);\n  position: absolute;\n  inset-block-start: 0;\n  inset-inline-end: 0;\n  translate: 50% -50%;\n  pointer-events: none;\n}\n\n:host(:dir(rtl)) ::slotted(wa-badge) {\n  translate: -50% -50%;\n}\n\n/*\n* Button spacing\n*/\n\nslot[name='start']::slotted(*) {\n  margin-inline-end: 0.75em;\n}\n\nslot[name='end']::slotted(*),\n.button:not(.visually-hidden-label) [part='caret'] {\n  margin-inline-start: 0.75em;\n}\n\n/*\n * Button group border radius modifications\n */\n\n/* Remove border radius from all grouped buttons by default */\n:host(.wa-button-group__button) .button {\n  border-radius: 0;\n}\n\n/* Horizontal orientation */\n:host(.wa-button-group__horizontal.wa-button-group__button-first) .button {\n  border-start-start-radius: var(--wa-form-control-border-radius);\n  border-end-start-radius: var(--wa-form-control-border-radius);\n}\n\n:host(.wa-button-group__horizontal.wa-button-group__button-last) .button {\n  border-start-end-radius: var(--wa-form-control-border-radius);\n  border-end-end-radius: var(--wa-form-control-border-radius);\n}\n\n/* Vertical orientation */\n:host(.wa-button-group__vertical) {\n  flex: 1 1 auto;\n}\n\n:host(.wa-button-group__vertical) .button {\n  width: 100%;\n  justify-content: start;\n}\n\n:host(.wa-button-group__vertical.wa-button-group__button-first) .button {\n  border-start-start-radius: var(--wa-form-control-border-radius);\n  border-start-end-radius: var(--wa-form-control-border-radius);\n}\n\n:host(.wa-button-group__vertical.wa-button-group__button-last) .button {\n  border-end-start-radius: var(--wa-form-control-border-radius);\n  border-end-end-radius: var(--wa-form-control-border-radius);\n}\n\n/* Handle pill modifier for button groups */\n:host([pill].wa-button-group__horizontal.wa-button-group__button-first) .button {\n  border-start-start-radius: var(--wa-border-radius-pill);\n  border-end-start-radius: var(--wa-border-radius-pill);\n}\n\n:host([pill].wa-button-group__horizontal.wa-button-group__button-last) .button {\n  border-start-end-radius: var(--wa-border-radius-pill);\n  border-end-end-radius: var(--wa-border-radius-pill);\n}\n\n:host([pill].wa-button-group__vertical.wa-button-group__button-first) .button {\n  border-start-start-radius: var(--wa-border-radius-pill);\n  border-start-end-radius: var(--wa-border-radius-pill);\n}\n\n:host([pill].wa-button-group__vertical.wa-button-group__button-last) .button {\n  border-end-start-radius: var(--wa-border-radius-pill);\n  border-end-end-radius: var(--wa-border-radius-pill);\n}\n";

// src/components/button/button.ts
var WaButton = class extends WebAwesomeFormAssociatedElement {
  constructor() {
    super(...arguments);
    this.assumeInteractionOn = ["click"];
    this.hasSlotController = new HasSlotController(this, "[default]", "start", "end");
    this.localize = new LocalizeController(this);
    this.invalid = false;
    this.isIconButton = false;
    this.title = "";
    this.variant = "neutral";
    this.appearance = "accent";
    this.size = "medium";
    this.withCaret = false;
    this.disabled = false;
    this.loading = false;
    this.pill = false;
    this.type = "button";
    this.form = null;
  }
  static get validators() {
    return [...super.validators, MirrorValidator()];
  }
  constructLightDOMButton() {
    const button = document.createElement("button");
    button.type = this.type;
    button.style.position = "absolute";
    button.style.width = "0";
    button.style.height = "0";
    button.style.clipPath = "inset(50%)";
    button.style.overflow = "hidden";
    button.style.whiteSpace = "nowrap";
    if (this.name) {
      button.name = this.name;
    }
    button.value = this.value || "";
    ["form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((attr) => {
      if (this.hasAttribute(attr)) {
        button.setAttribute(attr, this.getAttribute(attr));
      }
    });
    return button;
  }
  handleClick() {
    const form = this.getForm();
    if (!form) return;
    const lightDOMButton = this.constructLightDOMButton();
    this.parentElement?.append(lightDOMButton);
    lightDOMButton.click();
    lightDOMButton.remove();
  }
  handleInvalid() {
    this.dispatchEvent(new WaInvalidEvent());
  }
  handleLabelSlotChange() {
    const nodes = this.labelSlot.assignedNodes({ flatten: true });
    let hasIconLabel = false;
    let hasIcon = false;
    let hasText = false;
    let hasOtherElements = false;
    [...nodes].forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node;
        if (element.localName === "wa-icon") {
          hasIcon = true;
          if (!hasIconLabel) hasIconLabel = element.label !== void 0;
        } else {
          hasOtherElements = true;
        }
      } else if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent?.trim() || "";
        if (text.length > 0) {
          hasText = true;
        }
      }
    });
    this.isIconButton = hasIcon && !hasText && !hasOtherElements;
    if (this.isIconButton && !hasIconLabel) {
      console.warn(
        'Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',
        this
      );
    }
  }
  isButton() {
    return this.href ? false : true;
  }
  isLink() {
    return this.href ? true : false;
  }
  handleDisabledChange() {
    this.updateValidity();
  }
  // eslint-disable-next-line
  setValue(..._args) {
  }
  /** Simulates a click on the button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the button. */
  focus(options) {
    this.button.focus(options);
  }
  /** Removes focus from the button. */
  blur() {
    this.button.blur();
  }
  render() {
    const isLink = this.isLink();
    const tag = isLink ? i`a` : i`button`;
    return u$1`
      <${tag}
        part="base"
        class=${e$2({
      button: true,
      caret: this.withCaret,
      disabled: this.disabled,
      loading: this.loading,
      rtl: this.localize.dir() === "rtl",
      "has-label": this.hasSlotController.test("[default]"),
      "has-start": this.hasSlotController.test("start"),
      "has-end": this.hasSlotController.test("end"),
      "is-icon-button": this.isIconButton
    })}
        ?disabled=${o$2(isLink ? void 0 : this.disabled)}
        type=${o$2(isLink ? void 0 : this.type)}
        title=${this.title}
        name=${o$2(isLink ? void 0 : this.name)}
        value=${o$2(isLink ? void 0 : this.value)}
        href=${o$2(isLink ? this.href : void 0)}
        target=${o$2(isLink ? this.target : void 0)}
        download=${o$2(isLink ? this.download : void 0)}
        rel=${o$2(isLink && this.rel ? this.rel : void 0)}
        role=${o$2(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret ? u$1`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              ` : ""}
        ${this.loading ? u$1`<wa-spinner part="spinner"></wa-spinner>` : ""}
      </${tag}>
    `;
  }
};
WaButton.shadowRootOptions = { ...WebAwesomeFormAssociatedElement.shadowRootOptions, delegatesFocus: true };
WaButton.css = [button_default, variants_default, size_default];
__decorateClass([
  e$4(".button")
], WaButton.prototype, "button", 2);
__decorateClass([
  e$4("slot:not([name])")
], WaButton.prototype, "labelSlot", 2);
__decorateClass([
  r$1()
], WaButton.prototype, "invalid", 2);
__decorateClass([
  r$1()
], WaButton.prototype, "isIconButton", 2);
__decorateClass([
  n$2()
], WaButton.prototype, "title", 2);
__decorateClass([
  n$2({ reflect: true })
], WaButton.prototype, "variant", 2);
__decorateClass([
  n$2({ reflect: true })
], WaButton.prototype, "appearance", 2);
__decorateClass([
  n$2({ reflect: true })
], WaButton.prototype, "size", 2);
__decorateClass([
  n$2({ attribute: "with-caret", type: Boolean, reflect: true })
], WaButton.prototype, "withCaret", 2);
__decorateClass([
  n$2({ type: Boolean })
], WaButton.prototype, "disabled", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaButton.prototype, "loading", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaButton.prototype, "pill", 2);
__decorateClass([
  n$2()
], WaButton.prototype, "type", 2);
__decorateClass([
  n$2({ reflect: true })
], WaButton.prototype, "name", 2);
__decorateClass([
  n$2({ reflect: true })
], WaButton.prototype, "value", 2);
__decorateClass([
  n$2({ reflect: true })
], WaButton.prototype, "href", 2);
__decorateClass([
  n$2()
], WaButton.prototype, "target", 2);
__decorateClass([
  n$2()
], WaButton.prototype, "rel", 2);
__decorateClass([
  n$2()
], WaButton.prototype, "download", 2);
__decorateClass([
  n$2({ reflect: true })
], WaButton.prototype, "form", 2);
__decorateClass([
  n$2({ attribute: "formaction" })
], WaButton.prototype, "formAction", 2);
__decorateClass([
  n$2({ attribute: "formenctype" })
], WaButton.prototype, "formEnctype", 2);
__decorateClass([
  n$2({ attribute: "formmethod" })
], WaButton.prototype, "formMethod", 2);
__decorateClass([
  n$2({ attribute: "formnovalidate", type: Boolean })
], WaButton.prototype, "formNoValidate", 2);
__decorateClass([
  n$2({ attribute: "formtarget" })
], WaButton.prototype, "formTarget", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], WaButton.prototype, "handleDisabledChange", 1);
WaButton = __decorateClass([
  t$1("wa-button")
], WaButton);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/spinner/spinner.css
var spinner_default = ":host {\n  --track-width: 2px;\n  --track-color: var(--wa-color-neutral-fill-normal);\n  --indicator-color: var(--wa-color-brand-fill-loud);\n  --speed: 2s;\n\n  /* Resizing a spinner element using anything but font-size will break the animation because the animation uses em units.\n   Therefore, if a spinner is used in a flex container without `flex: none` applied, the spinner can grow/shrink and\n   break the animation. The use of `flex: none` on the host element prevents this by always having the spinner sized\n   according to its actual dimensions.\n  */\n  flex: none;\n  display: inline-flex;\n  width: 1em;\n  height: 1em;\n}\n\nsvg {\n  width: 100%;\n  height: 100%;\n  aspect-ratio: 1;\n  animation: spin var(--speed) linear infinite;\n}\n\n.track {\n  stroke: var(--track-color);\n}\n\n.indicator {\n  stroke: var(--indicator-color);\n  stroke-dasharray: 75, 100;\n  stroke-dashoffset: -5;\n  animation: dash 1.5s ease-in-out infinite;\n  stroke-linecap: round;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n";

// src/components/spinner/spinner.ts
var WaSpinner = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
  }
  render() {
    return x`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
        <circle class="indicator" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
      </svg>
    `;
  }
};
WaSpinner.css = spinner_default;
WaSpinner = __decorateClass([
  t$1("wa-spinner")
], WaSpinner);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/events/load.ts
var WaLoadEvent = class extends Event {
  constructor() {
    super("wa-load", { bubbles: true, cancelable: false, composed: true });
  }
};

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var kitCode = "";
function setKitCode(code) {
  kitCode = code;
}
function getKitCode() {
  if (!kitCode) {
    const el = document.querySelector("[data-fa-kit-code]");
    if (el) {
      setKitCode(el.getAttribute("data-fa-kit-code") || "");
    }
  }
  return kitCode;
}

// src/components/icon/library.default.ts
var FA_VERSION = "7.0.1";
function getIconUrl(name, family, variant) {
  const kitCode2 = getKitCode();
  const isPro = kitCode2.length > 0;
  let folder = "solid";
  if (family === "notdog") {
    if (variant === "solid") folder = "solid";
    if (variant === "duo-solid") folder = "duo-solid";
    return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/notdog-${folder}/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
  }
  if (family === "chisel") {
    return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/chisel-regular/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
  }
  if (family === "etch") {
    return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/etch-solid/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
  }
  if (family === "jelly") {
    if (variant === "regular") folder = "regular";
    if (variant === "duo-regular") folder = "duo-regular";
    if (variant === "fill-regular") folder = "fill-regular";
    return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/jelly-${folder}/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
  }
  if (family === "slab") {
    if (variant === "solid" || variant === "regular") folder = "regular";
    if (variant === "press-regular") folder = "press-regular";
    return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/slab-${folder}/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
  }
  if (family === "thumbprint") {
    return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/thumbprint-light/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
  }
  if (family === "whiteboard") {
    return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/whiteboard-semibold/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
  }
  if (family === "classic") {
    if (variant === "thin") folder = "thin";
    if (variant === "light") folder = "light";
    if (variant === "regular") folder = "regular";
    if (variant === "solid") folder = "solid";
  }
  if (family === "sharp") {
    if (variant === "thin") folder = "sharp-thin";
    if (variant === "light") folder = "sharp-light";
    if (variant === "regular") folder = "sharp-regular";
    if (variant === "solid") folder = "sharp-solid";
  }
  if (family === "duotone") {
    if (variant === "thin") folder = "duotone-thin";
    if (variant === "light") folder = "duotone-light";
    if (variant === "regular") folder = "duotone-regular";
    if (variant === "solid") folder = "duotone";
  }
  if (family === "sharp-duotone") {
    if (variant === "thin") folder = "sharp-duotone-thin";
    if (variant === "light") folder = "sharp-duotone-light";
    if (variant === "regular") folder = "sharp-duotone-regular";
    if (variant === "solid") folder = "sharp-duotone-solid";
  }
  if (family === "brands") {
    folder = "brands";
  }
  return isPro ? `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/${folder}/${name}.svg?token=${encodeURIComponent(kitCode2)}` : `https://ka-f.fontawesome.com/releases/v${FA_VERSION}/svgs/${folder}/${name}.svg`;
}
var library = {
  name: "default",
  resolver: (name, family = "classic", variant = "solid") => {
    return getIconUrl(name, family, variant);
  },
  mutator: (svg, hostEl) => {
    if (hostEl?.family && !svg.hasAttribute("data-duotone-initialized")) {
      const { family, variant } = hostEl;
      if (
        // Duotone
        family === "duotone" || // Sharp duotone
        family === "sharp-duotone" || // Notdog duo-solid
        family === "notdog" && variant === "duo-solid" || // Jelly duo-regular
        family === "jelly" && variant === "duo-regular" || // Thumbprint
        family === "thumbprint"
      ) {
        const paths = [...svg.querySelectorAll("path")];
        const primaryPath = paths.find((p) => !p.hasAttribute("opacity"));
        const secondaryPath = paths.find((p) => p.hasAttribute("opacity"));
        if (!primaryPath || !secondaryPath) return;
        primaryPath.setAttribute("data-duotone-primary", "");
        secondaryPath.setAttribute("data-duotone-secondary", "");
        if (hostEl.swapOpacity && primaryPath && secondaryPath) {
          const originalOpacity = secondaryPath.getAttribute("opacity") || "0.4";
          primaryPath.style.setProperty("--path-opacity", originalOpacity);
          secondaryPath.style.setProperty("--path-opacity", "1");
        }
        svg.setAttribute("data-duotone-initialized", "");
      }
    }
  }
};
var library_default_default = library;

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/icon/library.system.ts
function dataUri(svg) {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
var icons = {
  //
  // Solid variant
  //
  solid: {
    check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,
    "chevron-down": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,
    "chevron-left": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,
    "chevron-right": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,
    circle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,
    eyedropper: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,
    "grip-vertical": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,
    indeterminate: `<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,
    minus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,
    pause: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,
    play: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,
    star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,
    user: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,
    xmark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`
  },
  //
  // Regular variant
  //
  regular: {
    "circle-question": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,
    "circle-xmark": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,
    copy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,
    eye: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,
    "eye-slash": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,
    star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`
  }
};
var systemLibrary = {
  name: "system",
  resolver: (name, _family = "classic", variant = "solid") => {
    let collection = icons[variant];
    let svg = collection[name] ?? icons.regular[name] ?? icons.regular["circle-question"];
    if (svg) {
      return dataUri(svg);
    }
    return "";
  }
};
var library_system_default = systemLibrary;

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/icon/library.ts
var defaultIconFamily = "classic";
var registry = [library_default_default, library_system_default];
var watchedIcons = [];
function watchIcon(icon) {
  watchedIcons.push(icon);
}
function unwatchIcon(icon) {
  watchedIcons = watchedIcons.filter((el) => el !== icon);
}
function getIconLibrary(name) {
  return registry.find((lib) => lib.name === name);
}
function getDefaultIconFamily() {
  return defaultIconFamily;
}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$1=(o,t)=>void 0===t?void 0!==o?._$litType$:o?._$litType$===t,f=o=>void 0===o.strings,u={},m=(o,t=u)=>o._$AH=t;

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/events/error.ts
var WaErrorEvent = class extends Event {
  constructor() {
    super("wa-error", { bubbles: true, cancelable: false, composed: true });
  }
};

// src/components/icon/icon.css
var icon_default = ":host {\n  --primary-color: currentColor;\n  --primary-opacity: 1;\n  --secondary-color: currentColor;\n  --secondary-opacity: 0.4;\n\n  box-sizing: content-box;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: -0.125em;\n}\n\n/* Standard */\n:host(:not([auto-width])) {\n  width: 1.25em;\n  height: 1em;\n}\n\n/* Auto-width */\n:host([auto-width]) {\n  width: auto;\n  height: 1em;\n}\n\nsvg {\n  height: 1em;\n  fill: currentColor;\n  overflow: visible;\n\n  /* Duotone colors with path-specific opacity fallback */\n  path[data-duotone-primary] {\n    color: var(--primary-color);\n    opacity: var(--path-opacity, var(--primary-opacity));\n  }\n\n  path[data-duotone-secondary] {\n    color: var(--secondary-color);\n    opacity: var(--path-opacity, var(--secondary-opacity));\n  }\n}\n";

// src/components/icon/icon.ts
var CACHEABLE_ERROR = Symbol();
var RETRYABLE_ERROR = Symbol();
var parser;
var iconCache = /* @__PURE__ */ new Map();
var WaIcon = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.svg = null;
    this.autoWidth = false;
    this.swapOpacity = false;
    this.label = "";
    this.library = "default";
    /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
    this.resolveIcon = async (url, library) => {
      let fileData;
      if (library?.spriteSheet) {
        if (!this.hasUpdated) {
          await this.updateComplete;
        }
        this.svg = x`<svg part="svg">
        <use part="use" href="${url}"></use>
      </svg>`;
        await this.updateComplete;
        const svg = this.shadowRoot.querySelector("[part='svg']");
        if (typeof library.mutator === "function") {
          library.mutator(svg, this);
        }
        return this.svg;
      }
      try {
        fileData = await fetch(url, { mode: "cors" });
        if (!fileData.ok) return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
      } catch {
        return RETRYABLE_ERROR;
      }
      try {
        const div = document.createElement("div");
        div.innerHTML = await fileData.text();
        const svg = div.firstElementChild;
        if (svg?.tagName?.toLowerCase() !== "svg") return CACHEABLE_ERROR;
        if (!parser) parser = new DOMParser();
        const doc = parser.parseFromString(svg.outerHTML, "text/html");
        const svgEl = doc.body.querySelector("svg");
        if (!svgEl) return CACHEABLE_ERROR;
        svgEl.part.add("svg");
        return document.adoptNode(svgEl);
      } catch {
        return CACHEABLE_ERROR;
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    watchIcon(this);
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchIcon(this);
  }
  getIconSource() {
    const library = getIconLibrary(this.library);
    const family = this.family || getDefaultIconFamily();
    if (this.name && library) {
      return {
        url: library.resolver(this.name, family, this.variant, this.autoWidth),
        fromLibrary: true
      };
    }
    return {
      url: this.src,
      fromLibrary: false
    };
  }
  handleLabelChange() {
    const hasLabel = typeof this.label === "string" && this.label.length > 0;
    if (hasLabel) {
      this.setAttribute("role", "img");
      this.setAttribute("aria-label", this.label);
      this.removeAttribute("aria-hidden");
    } else {
      this.removeAttribute("role");
      this.removeAttribute("aria-label");
      this.setAttribute("aria-hidden", "true");
    }
  }
  async setIcon() {
    const { url, fromLibrary } = this.getIconSource();
    const library = fromLibrary ? getIconLibrary(this.library) : void 0;
    if (!url) {
      this.svg = null;
      return;
    }
    let iconResolver = iconCache.get(url);
    if (!iconResolver) {
      iconResolver = this.resolveIcon(url, library);
      iconCache.set(url, iconResolver);
    }
    const svg = await iconResolver;
    if (svg === RETRYABLE_ERROR) {
      iconCache.delete(url);
    }
    if (url !== this.getIconSource().url) {
      return;
    }
    if (e$1(svg)) {
      this.svg = svg;
      return;
    }
    switch (svg) {
      case RETRYABLE_ERROR:
      case CACHEABLE_ERROR:
        this.svg = null;
        this.dispatchEvent(new WaErrorEvent());
        break;
      default:
        this.svg = svg.cloneNode(true);
        library?.mutator?.(this.svg, this);
        this.dispatchEvent(new WaLoadEvent());
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    const library = getIconLibrary(this.library);
    const svg = this.shadowRoot?.querySelector("svg");
    if (svg) {
      library?.mutator?.(svg, this);
    }
  }
  render() {
    if (this.hasUpdated) {
      return this.svg;
    }
    return x`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`;
  }
};
WaIcon.css = icon_default;
__decorateClass([
  r$1()
], WaIcon.prototype, "svg", 2);
__decorateClass([
  n$2({ reflect: true })
], WaIcon.prototype, "name", 2);
__decorateClass([
  n$2({ reflect: true })
], WaIcon.prototype, "family", 2);
__decorateClass([
  n$2({ reflect: true })
], WaIcon.prototype, "variant", 2);
__decorateClass([
  n$2({ attribute: "auto-width", type: Boolean, reflect: true })
], WaIcon.prototype, "autoWidth", 2);
__decorateClass([
  n$2({ attribute: "swap-opacity", type: Boolean, reflect: true })
], WaIcon.prototype, "swapOpacity", 2);
__decorateClass([
  n$2()
], WaIcon.prototype, "src", 2);
__decorateClass([
  n$2()
], WaIcon.prototype, "label", 2);
__decorateClass([
  n$2({ reflect: true })
], WaIcon.prototype, "library", 2);
__decorateClass([
  watch("label")
], WaIcon.prototype, "handleLabelChange", 1);
__decorateClass([
  watch(["family", "name", "library", "variant", "src", "autoWidth", "swapOpacity"])
], WaIcon.prototype, "setIcon", 1);
WaIcon = __decorateClass([
  t$1("wa-icon")
], WaIcon);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/internal/offset.ts
function getOffset(element, parent) {
  return {
    top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
    left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left)
  };
}

// src/internal/scroll.ts
var locks = /* @__PURE__ */ new Set();
function getScrollbarWidth() {
  const documentWidth = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}
function getExistingBodyPadding() {
  const padding = Number(getComputedStyle(document.body).paddingRight.replace(/px/, ""));
  if (isNaN(padding) || !padding) {
    return 0;
  }
  return padding;
}
function lockBodyScrolling(lockingEl) {
  locks.add(lockingEl);
  if (!document.documentElement.classList.contains("wa-scroll-lock")) {
    const scrollbarWidth = getScrollbarWidth() + getExistingBodyPadding();
    let scrollbarGutterProperty = getComputedStyle(document.documentElement).scrollbarGutter;
    if (!scrollbarGutterProperty || scrollbarGutterProperty === "auto") {
      scrollbarGutterProperty = "stable";
    }
    if (scrollbarWidth < 2) {
      scrollbarGutterProperty = "";
    }
    document.documentElement.style.setProperty("--wa-scroll-lock-gutter", scrollbarGutterProperty);
    document.documentElement.classList.add("wa-scroll-lock");
    document.documentElement.style.setProperty("--wa-scroll-lock-size", `${scrollbarWidth}px`);
  }
}
function unlockBodyScrolling(lockingEl) {
  locks.delete(lockingEl);
  if (locks.size === 0) {
    document.documentElement.classList.remove("wa-scroll-lock");
    document.documentElement.style.removeProperty("--wa-scroll-lock-size");
  }
}
function scrollIntoView(element, container, direction = "vertical", behavior = "smooth") {
  const offset = getOffset(element, container);
  const offsetTop = offset.top + container.scrollTop;
  const offsetLeft = offset.left + container.scrollLeft;
  const minX = container.scrollLeft;
  const maxX = container.scrollLeft + container.offsetWidth;
  const minY = container.scrollTop;
  const maxY = container.scrollTop + container.offsetHeight;
  if (direction === "horizontal" || direction === "both") {
    if (offsetLeft < minX) {
      container.scrollTo({ left: offsetLeft, behavior });
    } else if (offsetLeft + element.clientWidth > maxX) {
      container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior });
    }
  }
  if (direction === "vertical" || direction === "both") {
    if (offsetTop < minY) {
      container.scrollTo({ top: offsetTop, behavior });
    } else if (offsetTop + element.clientHeight > maxY) {
      container.scrollTo({ top: offsetTop - container.offsetHeight + element.clientHeight, behavior });
    }
  }
}

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/events/tab-hide.ts
var WaTabHideEvent = class extends Event {
  constructor(detail) {
    super("wa-tab-hide", { bubbles: true, cancelable: false, composed: true });
    this.detail = detail;
  }
};

// src/events/tab-show.ts
var WaTabShowEvent = class extends Event {
  constructor(detail) {
    super("wa-tab-show", { bubbles: true, cancelable: false, composed: true });
    this.detail = detail;
  }
};

// src/components/tab-group/tab-group.css
var tab_group_default = ":host {\n  --indicator-color: var(--wa-color-brand-fill-loud);\n  --track-color: var(--wa-color-neutral-fill-normal);\n  --track-width: 0.125rem;\n\n  display: block;\n}\n\n.tab-group {\n  display: flex;\n  border-radius: 0;\n}\n\n.tabs {\n  display: flex;\n  position: relative;\n}\n\n.indicator {\n  position: absolute;\n}\n\n.tab-group-has-scroll-controls .nav-container {\n  position: relative;\n  padding: 0 1.5em;\n}\n\n.body {\n  display: block;\n}\n\n.scroll-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 1.5em;\n}\n\n.scroll-button-start {\n  inset-inline-start: 0;\n}\n\n.scroll-button-end {\n  inset-inline-end: 0;\n}\n\n/*\n   * Top\n   */\n\n.tab-group-top {\n  flex-direction: column;\n}\n\n.tab-group-top .nav-container {\n  order: 1;\n}\n\n.tab-group-top .nav {\n  display: flex;\n  overflow-x: auto;\n\n  /* Hide scrollbar in Firefox */\n  scrollbar-width: none;\n}\n\n/* Hide scrollbar in Chrome/Safari */\n.tab-group-top .nav::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n.tab-group-top .tabs {\n  flex: 1 1 auto;\n  position: relative;\n  flex-direction: row;\n  border-bottom: solid var(--track-width) var(--track-color);\n}\n\n.tab-group-top .indicator {\n  bottom: calc(-1 * var(--track-width));\n  border-bottom: solid var(--track-width) var(--indicator-color);\n}\n\n.tab-group-top .body {\n  order: 2;\n}\n\n.tab-group-top ::slotted(wa-tab[active]) {\n  border-block-end: solid var(--track-width) var(--indicator-color);\n  margin-block-end: calc(-1 * var(--track-width));\n}\n\n.tab-group-top ::slotted(wa-tab-panel) {\n  --padding: var(--wa-space-xl) 0;\n}\n\n/*\n   * Bottom\n   */\n\n.tab-group-bottom {\n  flex-direction: column;\n}\n\n.tab-group-bottom .nav-container {\n  order: 2;\n}\n\n.tab-group-bottom .nav {\n  display: flex;\n  overflow-x: auto;\n\n  /* Hide scrollbar in Firefox */\n  scrollbar-width: none;\n}\n\n/* Hide scrollbar in Chrome/Safari */\n.tab-group-bottom .nav::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n.tab-group-bottom .tabs {\n  flex: 1 1 auto;\n  position: relative;\n  flex-direction: row;\n  border-top: solid var(--track-width) var(--track-color);\n}\n\n.tab-group-bottom .indicator {\n  top: calc(-1 * var(--track-width));\n  border-top: solid var(--track-width) var(--indicator-color);\n}\n\n.tab-group-bottom .body {\n  order: 1;\n}\n\n.tab-group-bottom ::slotted(wa-tab[active]) {\n  border-block-start: solid var(--track-width) var(--indicator-color);\n  margin-block-start: calc(-1 * var(--track-width));\n}\n\n.tab-group-bottom ::slotted(wa-tab-panel) {\n  --padding: var(--wa-space-xl) 0;\n}\n\n/*\n   * Start\n   */\n\n.tab-group-start {\n  flex-direction: row;\n}\n\n.tab-group-start .nav-container {\n  order: 1;\n}\n\n.tab-group-start .tabs {\n  flex: 0 0 auto;\n  flex-direction: column;\n  border-inline-end: solid var(--track-width) var(--track-color);\n}\n\n.tab-group-start .indicator {\n  inset-inline-end: calc(-1 * var(--track-width));\n  border-right: solid var(--track-width) var(--indicator-color);\n}\n\n.tab-group-start .body {\n  flex: 1 1 auto;\n  order: 2;\n}\n\n.tab-group-start ::slotted(wa-tab[active]) {\n  border-inline-end: solid var(--track-width) var(--indicator-color);\n  margin-inline-end: calc(-1 * var(--track-width));\n}\n\n.tab-group-start ::slotted(wa-tab-panel) {\n  --padding: 0 var(--wa-space-xl);\n}\n\n/*\n   * End\n   */\n\n.tab-group-end {\n  flex-direction: row;\n}\n\n.tab-group-end .nav-container {\n  order: 2;\n}\n\n.tab-group-end .tabs {\n  flex: 0 0 auto;\n  flex-direction: column;\n  border-left: solid var(--track-width) var(--track-color);\n}\n\n.tab-group-end .indicator {\n  inset-inline-start: calc(-1 * var(--track-width));\n  border-inline-start: solid var(--track-width) var(--indicator-color);\n}\n\n.tab-group-end .body {\n  flex: 1 1 auto;\n  order: 1;\n}\n\n.tab-group-end ::slotted(wa-tab[active]) {\n  border-inline-start: solid var(--track-width) var(--indicator-color);\n  margin-inline-start: calc(-1 * var(--track-width));\n}\n\n.tab-group-end ::slotted(wa-tab-panel) {\n  --padding: 0 var(--wa-space-xl);\n}\n";

// src/components/tab-group/tab-group.ts
var WaTabGroup = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.tabs = [];
    this.focusableTabs = [];
    this.panels = [];
    this.localize = new LocalizeController(this);
    this.hasScrollControls = false;
    this.active = "";
    this.placement = "top";
    this.activation = "auto";
    this.withoutScrollControls = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => {
      this.updateScrollControls();
    });
    this.mutationObserver = new MutationObserver((mutations) => {
      if (mutations.some((m) => !["aria-labelledby", "aria-controls"].includes(m.attributeName))) {
        setTimeout(() => this.setAriaLabels());
      }
      const relevantMutations = mutations.filter((m) => {
        const target = m.target;
        return target.closest("wa-tab-group") === this;
      });
      if (relevantMutations.some((m) => m.attributeName === "disabled")) {
        this.syncTabsAndPanels();
      } else if (relevantMutations.some((m) => m.attributeName === "active")) {
        const tabs = relevantMutations.filter((m) => m.attributeName === "active" && m.target.tagName.toLowerCase() === "wa-tab").map((m) => m.target);
        const newActiveTab = tabs.find((tab) => tab.active);
        if (newActiveTab && newActiveTab.closest("wa-tab-group") === this) {
          this.setActiveTab(newActiveTab);
        }
      }
    });
    this.updateComplete.then(() => {
      this.syncTabsAndPanels();
      this.mutationObserver.observe(this, { attributes: true, childList: true, subtree: true });
      this.resizeObserver.observe(this.nav);
      const intersectionObserver = new IntersectionObserver((entries, observer) => {
        if (entries[0].intersectionRatio > 0) {
          this.setAriaLabels();
          if (this.active) {
            const tab = this.tabs.find((t) => t.panel === this.active);
            if (tab) {
              this.setActiveTab(tab);
            }
          } else {
            this.setActiveTab(this.getActiveTab() ?? this.tabs[0], { emitEvents: false });
          }
          observer.unobserve(entries[0].target);
        }
      });
      intersectionObserver.observe(this.tabGroup);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.mutationObserver?.disconnect();
    if (this.nav) {
      this.resizeObserver?.unobserve(this.nav);
    }
  }
  getAllTabs() {
    const slot = this.shadowRoot.querySelector('slot[name="nav"]');
    return [...slot.assignedElements()].filter((el) => {
      return el.tagName.toLowerCase() === "wa-tab";
    });
  }
  getAllPanels() {
    return [...this.body.assignedElements()].filter((el) => el.tagName.toLowerCase() === "wa-tab-panel");
  }
  getActiveTab() {
    return this.tabs.find((el) => el.active);
  }
  handleClick(event) {
    const target = event.target;
    const tab = target.closest("wa-tab");
    const tabGroup = tab?.closest("wa-tab-group");
    if (tabGroup !== this) {
      return;
    }
    if (tab !== null) {
      this.setActiveTab(tab, { scrollBehavior: "smooth" });
    }
  }
  handleKeyDown(event) {
    const target = event.target;
    const tab = target.closest("wa-tab");
    const tabGroup = tab?.closest("wa-tab-group");
    if (tabGroup !== this) {
      return;
    }
    if (["Enter", " "].includes(event.key)) {
      if (tab !== null) {
        this.setActiveTab(tab, { scrollBehavior: "smooth" });
        event.preventDefault();
      }
      return;
    }
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      const activeEl = this.tabs.find((t) => t.matches(":focus"));
      const isRtl = this.localize.dir() === "rtl";
      let nextTab = null;
      if (activeEl?.tagName.toLowerCase() === "wa-tab") {
        if (event.key === "Home") {
          nextTab = this.focusableTabs[0];
        } else if (event.key === "End") {
          nextTab = this.focusableTabs[this.focusableTabs.length - 1];
        } else if (["top", "bottom"].includes(this.placement) && event.key === (isRtl ? "ArrowRight" : "ArrowLeft") || ["start", "end"].includes(this.placement) && event.key === "ArrowUp") {
          const currentIndex = this.tabs.findIndex((el) => el === activeEl);
          nextTab = this.findNextFocusableTab(currentIndex, "backward");
        } else if (["top", "bottom"].includes(this.placement) && event.key === (isRtl ? "ArrowLeft" : "ArrowRight") || ["start", "end"].includes(this.placement) && event.key === "ArrowDown") {
          const currentIndex = this.tabs.findIndex((el) => el === activeEl);
          nextTab = this.findNextFocusableTab(currentIndex, "forward");
        }
        if (!nextTab) {
          return;
        }
        nextTab.tabIndex = 0;
        nextTab.focus({ preventScroll: true });
        if (this.activation === "auto") {
          this.setActiveTab(nextTab, { scrollBehavior: "smooth" });
        } else {
          this.tabs.forEach((tabEl) => {
            tabEl.tabIndex = tabEl === nextTab ? 0 : -1;
          });
        }
        if (["top", "bottom"].includes(this.placement)) {
          scrollIntoView(nextTab, this.nav, "horizontal");
        }
        event.preventDefault();
      }
    }
  }
  findNextFocusableTab(currentIndex, direction) {
    let nextTab = null;
    const iterator = direction === "forward" ? 1 : -1;
    let nextIndex = currentIndex + iterator;
    while (currentIndex < this.tabs.length) {
      nextTab = this.tabs[nextIndex] || null;
      if (nextTab === null) {
        if (direction === "forward") {
          nextTab = this.focusableTabs[0];
        } else {
          nextTab = this.focusableTabs[this.focusableTabs.length - 1];
        }
        break;
      }
      if (!nextTab.disabled) {
        break;
      }
      nextIndex += iterator;
    }
    return nextTab;
  }
  handleScrollToStart() {
    this.nav.scroll({
      left: this.localize.dir() === "rtl" ? this.nav.scrollLeft + this.nav.clientWidth : this.nav.scrollLeft - this.nav.clientWidth,
      behavior: "smooth"
    });
  }
  handleScrollToEnd() {
    this.nav.scroll({
      left: this.localize.dir() === "rtl" ? this.nav.scrollLeft - this.nav.clientWidth : this.nav.scrollLeft + this.nav.clientWidth,
      behavior: "smooth"
    });
  }
  setActiveTab(tab, options) {
    options = {
      emitEvents: true,
      scrollBehavior: "auto",
      ...options
    };
    if (tab.closest("wa-tab-group") !== this) {
      return;
    }
    if (tab !== this.activeTab && !tab.disabled) {
      const previousTab = this.activeTab;
      this.active = tab.panel;
      this.activeTab = tab;
      this.tabs.forEach((el) => {
        el.active = el === this.activeTab;
        el.tabIndex = el === this.activeTab ? 0 : -1;
      });
      this.panels.forEach((el) => el.active = el.name === this.activeTab?.panel);
      if (["top", "bottom"].includes(this.placement)) {
        scrollIntoView(this.activeTab, this.nav, "horizontal", options.scrollBehavior);
      }
      if (options.emitEvents) {
        if (previousTab) {
          this.dispatchEvent(new WaTabHideEvent({ name: previousTab.panel }));
        }
        this.dispatchEvent(new WaTabShowEvent({ name: this.activeTab.panel }));
      }
    }
  }
  setAriaLabels() {
    this.tabs.forEach((tab) => {
      const panel = this.panels.find((el) => el.name === tab.panel);
      if (panel) {
        tab.setAttribute("aria-controls", panel.getAttribute("id"));
        panel.setAttribute("aria-labelledby", tab.getAttribute("id"));
      }
    });
  }
  // This stores tabs and panels so we can refer to a cache instead of calling querySelectorAll() multiple times.
  syncTabsAndPanels() {
    this.tabs = this.getAllTabs();
    this.focusableTabs = this.tabs.filter((el) => !el.disabled);
    this.panels = this.getAllPanels();
    this.updateComplete.then(() => this.updateScrollControls());
  }
  updateActiveTab() {
    const tab = this.tabs.find((el) => el.panel === this.active);
    if (tab) {
      this.setActiveTab(tab, { scrollBehavior: "smooth" });
    }
  }
  updateScrollControls() {
    if (this.withoutScrollControls) {
      this.hasScrollControls = false;
    } else {
      this.hasScrollControls = ["top", "bottom"].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth + 1;
    }
  }
  render() {
    const isRtl = this.hasUpdated ? this.localize.dir() === "rtl" : this.dir === "rtl";
    return x`
      <div
        part="base"
        class=${e$2({
      "tab-group": true,
      "tab-group-top": this.placement === "top",
      "tab-group-bottom": this.placement === "bottom",
      "tab-group-start": this.placement === "start",
      "tab-group-end": this.placement === "end",
      "tab-group-has-scroll-controls": this.hasScrollControls
    })}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="nav-container" part="nav">
          ${this.hasScrollControls ? x`
                <wa-button
                  part="scroll-button scroll-button-start"
                  exportparts="base:scroll-button__base"
                  class="scroll-button scroll-button-start"
                  appearance="plain"
                  @click=${this.handleScrollToStart}
                >
                  <wa-icon
                    name=${isRtl ? "chevron-right" : "chevron-left"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToStart")}
                  ></wa-icon>
                </wa-button>
              ` : ""}

          <!-- We have a focus listener because in Firefox (and soon to be Chrome) overflow containers are focusable. -->
          <div class="nav" @focus=${() => this.activeTab?.focus({ preventScroll: true })}>
            <div part="tabs" class="tabs" role="tablist">
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls ? x`
                <wa-button
                  part="scroll-button scroll-button-end"
                  class="scroll-button scroll-button-end"
                  exportparts="base:scroll-button__base"
                  appearance="plain"
                  @click=${this.handleScrollToEnd}
                >
                  <wa-icon
                    name=${isRtl ? "chevron-left" : "chevron-right"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToEnd")}
                  ></wa-icon>
                </wa-button>
              ` : ""}
        </div>

        <slot part="body" class="body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `;
  }
};
WaTabGroup.css = tab_group_default;
__decorateClass([
  e$4(".tab-group")
], WaTabGroup.prototype, "tabGroup", 2);
__decorateClass([
  e$4(".body")
], WaTabGroup.prototype, "body", 2);
__decorateClass([
  e$4(".nav")
], WaTabGroup.prototype, "nav", 2);
__decorateClass([
  r$1()
], WaTabGroup.prototype, "hasScrollControls", 2);
__decorateClass([
  n$2({ reflect: true })
], WaTabGroup.prototype, "active", 2);
__decorateClass([
  n$2()
], WaTabGroup.prototype, "placement", 2);
__decorateClass([
  n$2()
], WaTabGroup.prototype, "activation", 2);
__decorateClass([
  n$2({ attribute: "without-scroll-controls", type: Boolean })
], WaTabGroup.prototype, "withoutScrollControls", 2);
__decorateClass([
  watch("active")
], WaTabGroup.prototype, "updateActiveTab", 1);
__decorateClass([
  watch("withoutScrollControls", { waitUntilFirstUpdate: true })
], WaTabGroup.prototype, "updateScrollControls", 1);
WaTabGroup = __decorateClass([
  t$1("wa-tab-group")
], WaTabGroup);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/tab/tab.css
var tab_default = ":host {\n  display: inline-block;\n  color: var(--wa-color-neutral-on-quiet);\n  font-weight: var(--wa-font-weight-action);\n}\n\n.tab {\n  display: inline-flex;\n  align-items: center;\n  font: inherit;\n  padding: 1em 1.5em;\n  white-space: nowrap;\n  user-select: none;\n  -webkit-user-select: none;\n  cursor: pointer;\n  transition: color var(--wa-transition-fast) var(--wa-transition-easing);\n\n  ::slotted(wa-icon:first-child) {\n    margin-inline-end: 0.5em;\n  }\n\n  ::slotted(wa-icon:last-child) {\n    margin-inline-start: 0.5em;\n  }\n}\n\n@media (hover: hover) {\n  :host(:hover:not([disabled])) .tab {\n    color: currentColor;\n  }\n}\n\n:host(:focus) {\n  outline: transparent;\n}\n\n:host(:focus-visible) .tab {\n  outline: var(--wa-focus-ring);\n  outline-offset: calc(-1 * var(--wa-border-width-l) - var(--wa-focus-ring-offset));\n}\n\n:host([active]:not([disabled])) {\n  color: var(--wa-color-brand-on-quiet);\n}\n\n:host([disabled]) .tab {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n@media (forced-colors: active) {\n  :host([active]:not([disabled])) {\n    outline: solid 1px transparent;\n    outline-offset: -3px;\n  }\n}\n";

// src/components/tab/tab.ts
var id$1 = 0;
var WaTab = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.attrId = ++id$1;
    this.componentId = `wa-tab-${this.attrId}`;
    this.panel = "";
    this.active = false;
    this.disabled = false;
    this.tabIndex = 0;
  }
  connectedCallback() {
    this.slot || (this.slot = "nav");
    super.connectedCallback();
    this.setAttribute("role", "tab");
  }
  handleActiveChange() {
    this.setAttribute("aria-selected", this.active ? "true" : "false");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    if (this.disabled && !this.active) {
      this.tabIndex = -1;
    } else {
      this.tabIndex = 0;
    }
  }
  render() {
    this.id = this.id?.length > 0 ? this.id : this.componentId;
    return x`
      <div
        part="base"
        class=${e$2({
      tab: true,
      "tab-active": this.active
    })}
      >
        <slot></slot>
      </div>
    `;
  }
};
WaTab.css = tab_default;
__decorateClass([
  e$4(".tab")
], WaTab.prototype, "tab", 2);
__decorateClass([
  n$2({ reflect: true })
], WaTab.prototype, "panel", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaTab.prototype, "active", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaTab.prototype, "disabled", 2);
__decorateClass([
  n$2({ type: Number, reflect: true })
], WaTab.prototype, "tabIndex", 2);
__decorateClass([
  watch("active")
], WaTab.prototype, "handleActiveChange", 1);
__decorateClass([
  watch("disabled")
], WaTab.prototype, "handleDisabledChange", 1);
WaTab = __decorateClass([
  t$1("wa-tab")
], WaTab);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/tab-panel/tab-panel.css
var tab_panel_default = ":host {\n  --padding: 0;\n\n  display: none;\n}\n\n:host([active]) {\n  display: block;\n}\n\n.tab-panel {\n  display: block;\n  padding: var(--padding);\n}\n";

// src/components/tab-panel/tab-panel.ts
var id = 0;
var WaTabPanel = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.attrId = ++id;
    this.componentId = `wa-tab-panel-${this.attrId}`;
    this.name = "";
    this.active = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.id = this.id.length > 0 ? this.id : this.componentId;
    this.setAttribute("role", "tabpanel");
  }
  handleActiveChange() {
    this.setAttribute("aria-hidden", this.active ? "false" : "true");
  }
  render() {
    return x`
      <slot
        part="base"
        class=${e$2({
      "tab-panel": true,
      "tab-panel-active": this.active
    })}
      ></slot>
    `;
  }
};
WaTabPanel.css = tab_panel_default;
__decorateClass([
  n$2({ reflect: true })
], WaTabPanel.prototype, "name", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaTabPanel.prototype, "active", 2);
__decorateClass([
  watch("active")
], WaTabPanel.prototype, "handleActiveChange", 1);
WaTabPanel = __decorateClass([
  t$1("wa-tab-panel")
], WaTabPanel);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/events/after-hide.ts
var WaAfterHideEvent = class extends Event {
  constructor() {
    super("wa-after-hide", { bubbles: true, cancelable: false, composed: true });
  }
};

// src/events/after-show.ts
var WaAfterShowEvent = class extends Event {
  constructor() {
    super("wa-after-show", { bubbles: true, cancelable: false, composed: true });
  }
};

// src/events/hide.ts
var WaHideEvent = class extends Event {
  constructor(detail) {
    super("wa-hide", { bubbles: true, cancelable: true, composed: true });
    this.detail = detail;
  }
};

// src/events/show.ts
var WaShowEvent = class extends Event {
  constructor() {
    super("wa-show", { bubbles: true, cancelable: true, composed: true });
  }
};

const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';

/* @ts-self-types="./index.d.ts" */
let nanoid = (size = 21) => {
  let id = '';
  let bytes = crypto.getRandomValues(new Uint8Array((size |= 0)));
  while (size--) {
    id += urlAlphabet[bytes[size] & 63];
  }
  return id
};

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function clamp$1(value, min, max) {
  const noNegativeZero = (n) => Object.is(n, -0) ? 0 : n;
  if (value < min) {
    return noNegativeZero(min);
  }
  if (value > max) {
    return noNegativeZero(max);
  }
  return noNegativeZero(value);
}
function uniqueId(prefix = "") {
  return `${prefix}${nanoid()}`;
}

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/internal/animate.ts
async function animate(el, keyframes, options) {
  return el.animate(keyframes, options).finished.catch(() => {
  });
}
function animateWithClass(el, className) {
  return new Promise((resolve) => {
    const controller = new AbortController();
    const { signal } = controller;
    if (el.classList.contains(className)) {
      return;
    }
    el.classList.remove(className);
    el.classList.add(className);
    let onEnd = () => {
      el.classList.remove(className);
      resolve();
      controller.abort();
    };
    el.addEventListener("animationend", onEnd, { once: true, signal });
    el.addEventListener("animationcancel", onEnd, { once: true, signal });
  });
}
function parseDuration(duration) {
  duration = duration.toString().toLowerCase();
  if (duration.indexOf("ms") > -1) {
    return parseFloat(duration) || 0;
  }
  if (duration.indexOf("s") > -1) {
    return (parseFloat(duration) || 0) * 1e3;
  }
  return parseFloat(duration) || 0;
}

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const sides = ['top', 'right', 'bottom', 'left'];
const alignments = ['start', 'end'];
const placements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
const yAxisSides = /*#__PURE__*/new Set(['top', 'bottom']);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
const lrPlacement = ['left', 'right'];
const rlPlacement = ['right', 'left'];
const tbPlacement = ['top', 'bottom'];
const btPlacement = ['bottom', 'top'];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case 'left':
    case 'right':
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow$1 = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const placements$1 = alignment !== undefined || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

      // Make `computeCoords` start from the right place.
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];

      // There are more placements to check.
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment = getAlignment(d.placement);
        return [d.placement, alignment && crossAxis ?
        // Check along the mainAxis and main crossAxis side.
        d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
        // Check only the mainAxis.
        d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
      // Aligned placements should not check their opposite crossAxis
      // side.
      getAlignment(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$2 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow ||
          // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every(d => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$filter2;
                const placement = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis ||
                    // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === 'y';
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

function getBoundingRect(rects) {
  const minX = min(...rects.map(rect => rect.left));
  const minY = min(...rects.map(rect => rect.top));
  const maxX = max(...rects.map(rect => rect.right));
  const maxY = max(...rects.map(rect => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map(rect => rectToClientRect(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'inline',
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform,
        strategy
      } = state;
      // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
      // ClientRect's bounds, despite the event listener being triggered. A
      // padding of 2 seems to handle this issue.
      const {
        padding = 2,
        x,
        y
      } = evaluate(options, state);
      const nativeClientRects = Array.from((await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
      const paddingObject = getPaddingObject(padding);
      function getBoundingClientRect() {
        // There are two rects and they are disjoined.
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          // Find the first rect in which the point is fully inside.
          return clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }

        // There are 2 or more connected rects.
        if (clientRects.length >= 2) {
          if (getSideAxis(placement) === 'y') {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = getSide(placement) === 'top';
            const top = firstRect.top;
            const bottom = lastRect.bottom;
            const left = isTop ? firstRect.left : lastRect.left;
            const right = isTop ? firstRect.right : lastRect.right;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          const isLeftSide = getSide(placement) === 'left';
          const maxRight = max(...clientRects.map(rect => rect.right));
          const minLeft = min(...clientRects.map(rect => rect.left));
          const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform.getElementRects({
        reference: {
          getBoundingClientRect
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};

const originSides = /*#__PURE__*/new Set(['left', 'top']);

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === 'y';
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset$1 = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset, state);
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

function hasWindow() {
  return typeof window !== 'undefined';
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /*#__PURE__*/new Set(['inline', 'contents']);
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /*#__PURE__*/new Set(['table', 'td', 'th']);
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [':popover-open', ':modal'];
function isTopLayer(element) {
  return topLayerSelectors.some(selector => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
const transformProperties = ['transform', 'translate', 'scale', 'rotate', 'perspective'];
const willChangeValues = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'];
const containValues = ['paint', 'layout', 'strict', 'content'];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  // https://drafts.csswg.org/css-transforms-2/#individual-transforms
  return transformProperties.some(value => css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || willChangeValues.some(value => (css.willChange || '').includes(value)) || containValues.some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
const lastTraversableNodeNames = /*#__PURE__*/new Set(['html', 'body', '#document']);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}

function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Safety check: ensure the scrollbar space is reasonable in case this
// calculation is affected by unusual styles.
// Most scrollbars leave 15-18px of space.
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  // <html> `overflow: hidden` + `scrollbar-gutter: stable` reduces the
  // visual width of the <html> but this is not considered in the size
  // of `html.clientWidth`.
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === 'CSS1Compat' ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    // If the <body> scrollbar is on the left, the width needs to be extended
    // by the scrollbar amount so there isn't extra space on the right.
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x,
    y
  };
}

const absoluteOrFixed = /*#__PURE__*/new Set(['absolute', 'fixed']);
// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);

  // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
  // Firefox with layout.scrollbar.side = 3 in about:config to test this.
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;

  // Firefox returns the <html> element as the offsetParent if it's non-static,
  // while Chrome and Safari return the <body> element. The <body> element must
  // be used to perform the correct calculations even if the <html> element is
  // non-static.
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function isRTL(element) {
  return getComputedStyle$1(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};

function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          // If the reference is clipped, the ratio is 0. Throttle the refresh
          // to prevent an infinite loop of updates.
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        // It's possible that even though the ratio is reported as 1, the
        // element is not actually fully within the IntersectionObserver's root
        // area anymore. This can happen under performance constraints. This may
        // be a bug in the browser's IntersectionObserver implementation. To
        // work around this, we compare the element's bounding rect now with
        // what it was at the time we created the IntersectionObserver. If they
        // are not equal then the element moved, so we refresh.
        refresh();
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = offset$1;

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
autoPlacement;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = shift$1;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$1 = flip$2;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = size$1;

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
hide;

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = arrow$1;

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
inline;

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
limitShift;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/events/select.ts
var WaSelectEvent = class extends Event {
  constructor(detail) {
    super("wa-select", { bubbles: true, cancelable: true, composed: true });
    this.detail = detail;
  }
};

// src/internal/active-elements.ts
function* activeElements(activeElement = document.activeElement) {
  if (activeElement === null || activeElement === void 0) return;
  yield activeElement;
  if ("shadowRoot" in activeElement && activeElement.shadowRoot && activeElement.shadowRoot.mode !== "closed") {
    yield* activeElements(activeElement.shadowRoot.activeElement);
  }
}

// src/components/dropdown/dropdown.css
var dropdown_default = ":host {\n  --show-duration: 50ms;\n  --hide-duration: 50ms;\n  display: contents;\n}\n\n#menu {\n  display: flex;\n  flex-direction: column;\n  width: max-content;\n  margin: 0;\n  padding: 0.25em;\n  border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);\n  border-radius: var(--wa-border-radius-m);\n  background-color: var(--wa-color-surface-raised);\n  box-shadow: var(--wa-shadow-m);\n  color: var(--wa-color-text-normal);\n  text-align: start;\n  user-select: none;\n  overflow: auto;\n  max-width: var(--auto-size-available-width) !important;\n  max-height: var(--auto-size-available-height) !important;\n\n  &.show {\n    animation: show var(--show-duration) ease;\n  }\n\n  &.hide {\n    animation: show var(--hide-duration) ease reverse;\n  }\n\n  ::slotted(h1),\n  ::slotted(h2),\n  ::slotted(h3),\n  ::slotted(h4),\n  ::slotted(h5),\n  ::slotted(h6) {\n    display: block !important;\n    margin: 0.25em 0 !important;\n    padding: 0.25em 0.75em !important;\n    color: var(--wa-color-text-quiet) !important;\n    font-family: var(--wa-font-family-body) !important;\n    font-weight: var(--wa-font-weight-semibold) !important;\n    font-size: var(--wa-font-size-smaller) !important;\n  }\n\n  ::slotted(wa-divider) {\n    --spacing: 0.25em; /* Component-specific, left as-is */\n  }\n}\n\nwa-popup[data-current-placement^='top'] #menu {\n  transform-origin: bottom;\n}\n\nwa-popup[data-current-placement^='bottom'] #menu {\n  transform-origin: top;\n}\n\nwa-popup[data-current-placement^='left'] #menu {\n  transform-origin: right;\n}\n\nwa-popup[data-current-placement^='right'] #menu {\n  transform-origin: left;\n}\n\nwa-popup[data-current-placement='left-start'] #menu {\n  transform-origin: right top;\n}\n\nwa-popup[data-current-placement='left-end'] #menu {\n  transform-origin: right bottom;\n}\n\nwa-popup[data-current-placement='right-start'] #menu {\n  transform-origin: left top;\n}\n\nwa-popup[data-current-placement='right-end'] #menu {\n  transform-origin: left bottom;\n}\n\n@keyframes show {\n  from {\n    scale: 0.9;\n    opacity: 0;\n  }\n  to {\n    scale: 1;\n    opacity: 1;\n  }\n}\n";

// src/components/dropdown/dropdown.ts
var openDropdowns = /* @__PURE__ */ new Set();
var WaDropdown = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.submenuCleanups = /* @__PURE__ */ new Map();
    this.localize = new LocalizeController(this);
    this.userTypedQuery = "";
    this.openSubmenuStack = [];
    this.open = false;
    this.size = "medium";
    this.placement = "bottom-start";
    this.distance = 0;
    this.skidding = 0;
    /** Handles key down events when the menu is open */
    this.handleDocumentKeyDown = async (event) => {
      const isRtl = this.localize.dir() === "rtl";
      if (event.key === "Escape") {
        const trigger = this.getTrigger();
        event.preventDefault();
        event.stopPropagation();
        this.open = false;
        trigger?.focus();
        return;
      }
      const activeElement = [...activeElements()].find((el) => el.localName === "wa-dropdown-item");
      const isFocusedOnItem = activeElement?.localName === "wa-dropdown-item";
      const currentSubmenuItem = this.getCurrentSubmenuItem();
      const isInSubmenu = !!currentSubmenuItem;
      let items;
      let activeItem;
      let activeItemIndex;
      if (isInSubmenu) {
        items = this.getSubmenuItems(currentSubmenuItem);
        activeItem = items.find((item) => item.active || item === activeElement);
        activeItemIndex = activeItem ? items.indexOf(activeItem) : -1;
      } else {
        items = this.getItems();
        activeItem = items.find((item) => item.active || item === activeElement);
        activeItemIndex = activeItem ? items.indexOf(activeItem) : -1;
      }
      let itemToSelect;
      if (event.key === "ArrowUp") {
        event.preventDefault();
        event.stopPropagation();
        if (activeItemIndex > 0) {
          itemToSelect = items[activeItemIndex - 1];
        } else {
          itemToSelect = items[items.length - 1];
        }
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        event.stopPropagation();
        if (activeItemIndex !== -1 && activeItemIndex < items.length - 1) {
          itemToSelect = items[activeItemIndex + 1];
        } else {
          itemToSelect = items[0];
        }
      }
      if (event.key === (isRtl ? "ArrowLeft" : "ArrowRight") && isFocusedOnItem && activeItem) {
        if (activeItem.hasSubmenu) {
          event.preventDefault();
          event.stopPropagation();
          activeItem.submenuOpen = true;
          this.addToSubmenuStack(activeItem);
          setTimeout(() => {
            const submenuItems = this.getSubmenuItems(activeItem);
            if (submenuItems.length > 0) {
              submenuItems.forEach((item, index) => item.active = index === 0);
              submenuItems[0].focus();
            }
          }, 0);
          return;
        }
      }
      if (event.key === (isRtl ? "ArrowRight" : "ArrowLeft") && isInSubmenu) {
        event.preventDefault();
        event.stopPropagation();
        const removedItem = this.removeFromSubmenuStack();
        if (removedItem) {
          removedItem.submenuOpen = false;
          setTimeout(() => {
            removedItem.focus();
            removedItem.active = true;
            const parentItems = removedItem.slot === "submenu" ? this.getSubmenuItems(removedItem.parentElement) : this.getItems();
            parentItems.forEach((item) => {
              if (item !== removedItem) {
                item.active = false;
              }
            });
          }, 0);
        }
        return;
      }
      if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        event.stopPropagation();
        itemToSelect = event.key === "Home" ? items[0] : items[items.length - 1];
      }
      if (event.key === "Tab") {
        await this.hideMenu();
      }
      if (event.key.length === 1 && !(event.metaKey || event.ctrlKey || event.altKey) && !(event.key === " " && this.userTypedQuery === "")) {
        clearTimeout(this.userTypedTimeout);
        this.userTypedTimeout = setTimeout(() => {
          this.userTypedQuery = "";
        }, 1e3);
        this.userTypedQuery += event.key;
        items.some((item) => {
          const label = (item.textContent || "").trim().toLowerCase();
          const selectionQuery = this.userTypedQuery.trim().toLowerCase();
          if (label.startsWith(selectionQuery)) {
            itemToSelect = item;
            return true;
          }
          return false;
        });
      }
      if (itemToSelect) {
        event.preventDefault();
        event.stopPropagation();
        items.forEach((item) => item.active = item === itemToSelect);
        itemToSelect.focus();
        return;
      }
      if ((event.key === "Enter" || event.key === " " && this.userTypedQuery === "") && isFocusedOnItem && activeItem) {
        event.preventDefault();
        event.stopPropagation();
        if (activeItem.hasSubmenu) {
          activeItem.submenuOpen = true;
          this.addToSubmenuStack(activeItem);
          setTimeout(() => {
            const submenuItems = this.getSubmenuItems(activeItem);
            if (submenuItems.length > 0) {
              submenuItems.forEach((item, index) => item.active = index === 0);
              submenuItems[0].focus();
            }
          }, 0);
        } else {
          this.makeSelection(activeItem);
        }
      }
    };
    /** Handles pointer down events when the dropdown is open. */
    this.handleDocumentPointerDown = (event) => {
      const path = event.composedPath();
      const isInDropdownHierarchy = path.some((el) => {
        if (el instanceof HTMLElement) {
          return el === this || el.closest('wa-dropdown, [part="submenu"]');
        }
        return false;
      });
      if (!isInDropdownHierarchy) {
        this.open = false;
      }
    };
    /** Handle global mouse movement for safe triangle logic */
    this.handleGlobalMouseMove = (event) => {
      const currentSubmenuItem = this.getCurrentSubmenuItem();
      if (!currentSubmenuItem?.submenuOpen || !currentSubmenuItem.submenuElement) return;
      const submenuRect = currentSubmenuItem.submenuElement.getBoundingClientRect();
      const isRtl = this.localize.dir() === "rtl";
      const submenuEdgeX = isRtl ? submenuRect.right : submenuRect.left;
      const constrainedX = isRtl ? Math.max(event.clientX, submenuEdgeX) : Math.min(event.clientX, submenuEdgeX);
      const constrainedY = Math.max(submenuRect.top, Math.min(event.clientY, submenuRect.bottom));
      currentSubmenuItem.submenuElement.style.setProperty("--safe-triangle-cursor-x", `${constrainedX}px`);
      currentSubmenuItem.submenuElement.style.setProperty("--safe-triangle-cursor-y", `${constrainedY}px`);
      const isOverItem = currentSubmenuItem.matches(":hover");
      const isOverSubmenu = currentSubmenuItem.submenuElement?.matches(":hover") || !!event.composedPath().find((el) => el instanceof HTMLElement && el.closest('[part="submenu"]') === currentSubmenuItem.submenuElement);
      if (!isOverItem && !isOverSubmenu) {
        setTimeout(() => {
          if (!currentSubmenuItem.matches(":hover") && !currentSubmenuItem.submenuElement?.matches(":hover")) {
            currentSubmenuItem.submenuOpen = false;
          }
        }, 100);
      }
    };
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.userTypedTimeout);
    this.closeAllSubmenus();
    this.submenuCleanups.forEach((cleanup) => cleanup());
    this.submenuCleanups.clear();
    document.removeEventListener("mousemove", this.handleGlobalMouseMove);
  }
  firstUpdated() {
    this.syncAriaAttributes();
  }
  async updated(changedProperties) {
    if (changedProperties.has("open")) {
      this.customStates.set("open", this.open);
      if (this.open) {
        await this.showMenu();
      } else {
        this.closeAllSubmenus();
        await this.hideMenu();
      }
    }
    if (changedProperties.has("size")) {
      this.syncItemSizes();
    }
  }
  /** Gets all dropdown items slotted in the menu. */
  getItems(includeDisabled = false) {
    const items = this.defaultSlot.assignedElements({ flatten: true }).filter((el) => el.localName === "wa-dropdown-item");
    return includeDisabled ? items : items.filter((item) => !item.disabled);
  }
  /** Gets all dropdown items in a specific submenu. */
  getSubmenuItems(parentItem, includeDisabled = false) {
    const submenuSlot = parentItem.shadowRoot?.querySelector('slot[name="submenu"]') || parentItem.querySelector('slot[name="submenu"]');
    if (!submenuSlot) {
      return [];
    }
    const items = submenuSlot.assignedElements({ flatten: true }).filter((el) => el.localName === "wa-dropdown-item");
    return includeDisabled ? items : items.filter((item) => !item.disabled);
  }
  /** Syncs item sizes with the dropdown's size property. */
  syncItemSizes() {
    const items = this.defaultSlot.assignedElements({ flatten: true }).filter((el) => el.localName === "wa-dropdown-item");
    items.forEach((item) => item.size = this.size);
  }
  /** Handles the submenu navigation stack */
  addToSubmenuStack(item) {
    const index = this.openSubmenuStack.indexOf(item);
    if (index !== -1) {
      this.openSubmenuStack = this.openSubmenuStack.slice(0, index + 1);
    } else {
      this.openSubmenuStack.push(item);
    }
  }
  /** Removes the last item from the submenu stack */
  removeFromSubmenuStack() {
    return this.openSubmenuStack.pop();
  }
  /** Gets the current active submenu item */
  getCurrentSubmenuItem() {
    return this.openSubmenuStack.length > 0 ? this.openSubmenuStack[this.openSubmenuStack.length - 1] : void 0;
  }
  /** Closes all submenus in the dropdown. */
  closeAllSubmenus() {
    const items = this.getItems(true);
    items.forEach((item) => {
      item.submenuOpen = false;
    });
    this.openSubmenuStack = [];
  }
  /** Closes sibling submenus at the same level as the specified item. */
  closeSiblingSubmenus(item) {
    const parentDropdownItem = item.closest('wa-dropdown-item:not([slot="submenu"])');
    let siblingItems;
    if (parentDropdownItem) {
      siblingItems = this.getSubmenuItems(parentDropdownItem, true);
    } else {
      siblingItems = this.getItems(true);
    }
    siblingItems.forEach((siblingItem) => {
      if (siblingItem !== item && siblingItem.submenuOpen) {
        siblingItem.submenuOpen = false;
      }
    });
    if (!this.openSubmenuStack.includes(item)) {
      this.openSubmenuStack.push(item);
    }
  }
  /** Get the slotted trigger button, a <wa-button> or <button> element */
  getTrigger() {
    return this.querySelector('[slot="trigger"]');
  }
  /** Shows the dropdown menu. This should only be called from within updated(). */
  async showMenu() {
    const anchor = this.getTrigger();
    if (!anchor) return;
    const showEvent = new WaShowEvent();
    this.dispatchEvent(showEvent);
    if (showEvent.defaultPrevented) {
      this.open = false;
      return;
    }
    openDropdowns.forEach((dropdown) => dropdown.open = false);
    this.popup.active = true;
    this.open = true;
    openDropdowns.add(this);
    this.syncAriaAttributes();
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("pointerdown", this.handleDocumentPointerDown);
    document.addEventListener("mousemove", this.handleGlobalMouseMove);
    this.menu.classList.remove("hide");
    await animateWithClass(this.menu, "show");
    const items = this.getItems();
    if (items.length > 0) {
      items.forEach((item, index) => item.active = index === 0);
      items[0].focus();
    }
    this.dispatchEvent(new WaAfterShowEvent());
  }
  /** Hides the dropdown menu. This should only be called from within updated(). */
  async hideMenu() {
    const hideEvent = new WaHideEvent({ source: this });
    this.dispatchEvent(hideEvent);
    if (hideEvent.defaultPrevented) {
      this.open = true;
      return;
    }
    this.open = false;
    openDropdowns.delete(this);
    this.syncAriaAttributes();
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("pointerdown", this.handleDocumentPointerDown);
    document.removeEventListener("mousemove", this.handleGlobalMouseMove);
    this.menu.classList.remove("show");
    await animateWithClass(this.menu, "hide");
    this.popup.active = this.open;
    this.dispatchEvent(new WaAfterHideEvent());
  }
  /** Handles clicks on the menu. */
  handleMenuClick(event) {
    const item = event.target.closest("wa-dropdown-item");
    if (!item || item.disabled) return;
    if (item.hasSubmenu) {
      if (!item.submenuOpen) {
        this.closeSiblingSubmenus(item);
        this.addToSubmenuStack(item);
        item.submenuOpen = true;
      }
      event.stopPropagation();
      return;
    }
    this.makeSelection(item);
  }
  /** Prepares dropdown items when they get added or removed */
  async handleMenuSlotChange() {
    const items = this.getItems(true);
    await Promise.all(items.map((item) => item.updateComplete));
    this.syncItemSizes();
    const hasCheckbox = items.some((item) => item.type === "checkbox");
    const hasSubmenu = items.some((item) => item.hasSubmenu);
    items.forEach((item, index) => {
      item.active = index === 0;
      item.checkboxAdjacent = hasCheckbox;
      item.submenuAdjacent = hasSubmenu;
    });
  }
  /** Toggles the dropdown menu */
  handleTriggerClick() {
    this.open = !this.open;
  }
  /** Handles submenu opening events */
  handleSubmenuOpening(event) {
    const openingItem = event.detail.item;
    this.closeSiblingSubmenus(openingItem);
    this.addToSubmenuStack(openingItem);
    this.setupSubmenuPosition(openingItem);
    this.processSubmenuItems(openingItem);
  }
  /** Sets up submenu positioning with autoUpdate */
  setupSubmenuPosition(item) {
    if (!item.submenuElement) return;
    this.cleanupSubmenuPosition(item);
    const cleanup = autoUpdate(item, item.submenuElement, () => {
      this.positionSubmenu(item);
      this.updateSafeTriangleCoordinates(item);
    });
    this.submenuCleanups.set(item, cleanup);
    const submenuSlot = item.submenuElement.querySelector('slot[name="submenu"]');
    if (submenuSlot) {
      submenuSlot.removeEventListener("slotchange", WaDropdown.handleSubmenuSlotChange);
      submenuSlot.addEventListener("slotchange", WaDropdown.handleSubmenuSlotChange);
      WaDropdown.handleSubmenuSlotChange({ target: submenuSlot });
    }
  }
  static handleSubmenuSlotChange(event) {
    const slot = event.target;
    if (!slot) return;
    const items = slot.assignedElements().filter((el) => el.localName === "wa-dropdown-item");
    if (items.length === 0) return;
    const hasSubmenuItems = items.some((item) => item.hasSubmenu);
    const hasCheckboxItems = items.some((item) => item.type === "checkbox");
    items.forEach((item) => {
      item.submenuAdjacent = hasSubmenuItems;
      item.checkboxAdjacent = hasCheckboxItems;
    });
  }
  processSubmenuItems(item) {
    if (!item.submenuElement) return;
    const submenuItems = this.getSubmenuItems(item, true);
    const hasSubmenuItems = submenuItems.some((subItem) => subItem.hasSubmenu);
    submenuItems.forEach((subItem) => {
      subItem.submenuAdjacent = hasSubmenuItems;
    });
  }
  /** Cleans up submenu positioning */
  cleanupSubmenuPosition(item) {
    const cleanup = this.submenuCleanups.get(item);
    if (cleanup) {
      cleanup();
      this.submenuCleanups.delete(item);
    }
  }
  /** Positions a submenu relative to its parent item */
  positionSubmenu(item) {
    if (!item.submenuElement) return;
    const isRtl = this.localize.dir() === "rtl";
    const placement = isRtl ? "left-start" : "right-start";
    computePosition(item, item.submenuElement, {
      placement,
      middleware: [
        offset({
          mainAxis: 0,
          crossAxis: -5
        }),
        flip$1({
          fallbackStrategy: "bestFit"
        }),
        shift({
          padding: 8
        })
      ]
    }).then(({ x, y, placement: placement2 }) => {
      item.submenuElement.setAttribute("data-placement", placement2);
      Object.assign(item.submenuElement.style, {
        left: `${x}px`,
        top: `${y}px`
      });
    });
  }
  /** Updates the safe triangle coordinates for a submenu */
  updateSafeTriangleCoordinates(item) {
    if (!item.submenuElement || !item.submenuOpen) return;
    const isKeyboardNavigation = document.activeElement?.matches(":focus-visible");
    if (isKeyboardNavigation) {
      item.submenuElement.style.setProperty("--safe-triangle-visible", "none");
      return;
    }
    item.submenuElement.style.setProperty("--safe-triangle-visible", "block");
    const submenuRect = item.submenuElement.getBoundingClientRect();
    const isRtl = this.localize.dir() === "rtl";
    item.submenuElement.style.setProperty(
      "--safe-triangle-submenu-start-x",
      `${isRtl ? submenuRect.right : submenuRect.left}px`
    );
    item.submenuElement.style.setProperty("--safe-triangle-submenu-start-y", `${submenuRect.top}px`);
    item.submenuElement.style.setProperty(
      "--safe-triangle-submenu-end-x",
      `${isRtl ? submenuRect.right : submenuRect.left}px`
    );
    item.submenuElement.style.setProperty("--safe-triangle-submenu-end-y", `${submenuRect.bottom}px`);
  }
  /** Makes a selection, emits the wa-select event, and closes the dropdown. */
  makeSelection(item) {
    const trigger = this.getTrigger();
    if (item.disabled) {
      return;
    }
    if (item.type === "checkbox") {
      item.checked = !item.checked;
    }
    const selectEvent = new WaSelectEvent({ item });
    this.dispatchEvent(selectEvent);
    if (!selectEvent.defaultPrevented) {
      this.open = false;
      trigger?.focus();
    }
  }
  /** Syncs aria attributes on the slotted trigger element and the menu based on the dropdown's current state */
  async syncAriaAttributes() {
    const trigger = this.getTrigger();
    let nativeButton;
    if (!trigger) {
      return;
    }
    if (trigger.localName === "wa-button") {
      await customElements.whenDefined("wa-button");
      await trigger.updateComplete;
      nativeButton = trigger.shadowRoot.querySelector('[part="base"]');
    } else {
      nativeButton = trigger;
    }
    if (!nativeButton.hasAttribute("id")) {
      nativeButton.setAttribute("id", uniqueId("wa-dropdown-trigger-"));
    }
    nativeButton.setAttribute("aria-haspopup", "menu");
    nativeButton.setAttribute("aria-expanded", this.open ? "true" : "false");
    this.menu.setAttribute("aria-expanded", "false");
  }
  render() {
    let active = this.hasUpdated ? this.popup.active : this.open;
    return x`
      <wa-popup
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        ?active=${active}
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot
          name="trigger"
          slot="anchor"
          @click=${this.handleTriggerClick}
          @slotchange=${this.syncAriaAttributes}
        ></slot>
        <div
          id="menu"
          part="menu"
          role="menu"
          tabindex="-1"
          aria-orientation="vertical"
          @click=${this.handleMenuClick}
          @submenu-opening=${this.handleSubmenuOpening}
        >
          <slot @slotchange=${this.handleMenuSlotChange}></slot>
        </div>
      </wa-popup>
    `;
  }
};
WaDropdown.css = [size_default, dropdown_default];
__decorateClass([
  e$4("slot:not([name])")
], WaDropdown.prototype, "defaultSlot", 2);
__decorateClass([
  e$4("#menu")
], WaDropdown.prototype, "menu", 2);
__decorateClass([
  e$4("wa-popup")
], WaDropdown.prototype, "popup", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaDropdown.prototype, "open", 2);
__decorateClass([
  n$2({ reflect: true })
], WaDropdown.prototype, "size", 2);
__decorateClass([
  n$2({ reflect: true })
], WaDropdown.prototype, "placement", 2);
__decorateClass([
  n$2({ type: Number })
], WaDropdown.prototype, "distance", 2);
__decorateClass([
  n$2({ type: Number })
], WaDropdown.prototype, "skidding", 2);
WaDropdown = __decorateClass([
  t$1("wa-dropdown")
], WaDropdown);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/dropdown-item/dropdown-item.css
var dropdown_item_default = ":host {\n  display: flex;\n  position: relative;\n  align-items: center;\n  padding: 0.5em 1em;\n  border-radius: var(--wa-border-radius-s);\n  isolation: isolate;\n  color: var(--wa-color-text-normal);\n  line-height: var(--wa-line-height-condensed);\n  cursor: pointer;\n  transition:\n    100ms background-color ease,\n    100ms color ease;\n}\n\n@media (hover: hover) {\n  :host(:hover:not(:state(disabled))) {\n    background-color: var(--wa-color-neutral-fill-normal);\n  }\n}\n\n:host(:focus-visible) {\n  z-index: 1;\n  outline: var(--wa-focus-ring);\n  background-color: var(--wa-color-neutral-fill-normal);\n}\n\n:host(:state(disabled)) {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n/* Danger variant */\n:host([variant='danger']),\n:host([variant='danger']) #details {\n  color: var(--wa-color-danger-on-quiet);\n}\n\n@media (hover: hover) {\n  :host([variant='danger']:hover) {\n    background-color: var(--wa-color-danger-fill-normal);\n    color: var(--wa-color-danger-on-normal);\n  }\n}\n\n:host([variant='danger']:focus-visible) {\n  background-color: var(--wa-color-danger-fill-normal);\n  color: var(--wa-color-danger-on-normal);\n}\n\n:host([checkbox-adjacent]) {\n  padding-inline-start: 2em;\n}\n\n/* Only add padding when item actually has a submenu */\n:host([submenu-adjacent]:not(:state(has-submenu))) #details {\n  padding-inline-end: 0;\n}\n\n:host(:state(has-submenu)[submenu-adjacent]) #details {\n  padding-inline-end: 1.75em;\n}\n\n#check {\n  visibility: hidden;\n  margin-inline-start: -1.5em;\n  margin-inline-end: 0.5em;\n  font-size: var(--wa-font-size-smaller);\n}\n\n:host(:state(checked)) #check {\n  visibility: visible;\n}\n\n#icon ::slotted(*) {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  margin-inline-end: 0.75em !important;\n  font-size: var(--wa-font-size-smaller);\n}\n\n#label {\n  flex: 1 1 auto;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n#details {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  justify-content: end;\n  color: var(--wa-color-text-quiet);\n  font-size: var(--wa-font-size-smaller) !important;\n}\n\n#details ::slotted(*) {\n  margin-inline-start: 2em !important;\n}\n\n/* Submenu indicator icon */\n#submenu-indicator {\n  position: absolute;\n  inset-inline-end: 1em;\n  color: var(--wa-color-neutral-on-quiet);\n  font-size: var(--wa-font-size-smaller);\n}\n\n/* Flip chevron icon when RTL */\n:host(:dir(rtl)) #submenu-indicator {\n  transform: scaleX(-1);\n}\n\n/* Submenu styles */\n#submenu {\n  display: flex;\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  left: 0;\n  flex-direction: column;\n  width: max-content;\n  margin: 0;\n  padding: 0.25em;\n  border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);\n  border-radius: var(--wa-border-radius-m);\n  background-color: var(--wa-color-surface-raised);\n  box-shadow: var(--wa-shadow-m);\n  color: var(--wa-color-text-normal);\n  text-align: start;\n  user-select: none;\n\n  /* Override default popover styles */\n  &[popover] {\n    margin: 0;\n    inset: auto;\n    padding: 0.25em;\n    overflow: visible;\n    border-radius: var(--wa-border-radius-m);\n  }\n\n  &.show {\n    animation: submenu-show var(--show-duration, 50ms) ease;\n  }\n\n  &.hide {\n    animation: submenu-show var(--show-duration, 50ms) ease reverse;\n  }\n\n  /* Submenu placement transform origins */\n  &[data-placement^='top'] {\n    transform-origin: bottom;\n  }\n\n  &[data-placement^='bottom'] {\n    transform-origin: top;\n  }\n\n  &[data-placement^='left'] {\n    transform-origin: right;\n  }\n\n  &[data-placement^='right'] {\n    transform-origin: left;\n  }\n\n  &[data-placement='left-start'] {\n    transform-origin: right top;\n  }\n\n  &[data-placement='left-end'] {\n    transform-origin: right bottom;\n  }\n\n  &[data-placement='right-start'] {\n    transform-origin: left top;\n  }\n\n  &[data-placement='right-end'] {\n    transform-origin: left bottom;\n  }\n\n  /* Safe triangle styling */\n  &::before {\n    display: none;\n    z-index: 9;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: transparent;\n    content: '';\n    clip-path: polygon(\n      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),\n      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),\n      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)\n    );\n    pointer-events: auto; /* Enable mouse events on the triangle */\n  }\n\n  &[data-visible]::before {\n    display: block;\n  }\n}\n\n::slotted(wa-dropdown-item) {\n  font-size: inherit;\n}\n\n::slotted(wa-divider) {\n  --spacing: 0.25em;\n}\n\n@keyframes submenu-show {\n  from {\n    scale: 0.9;\n    opacity: 0;\n  }\n  to {\n    scale: 1;\n    opacity: 1;\n  }\n}\n";

// src/components/dropdown-item/dropdown-item.ts
var WaDropdownItem = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "[default]", "start", "end");
    this.active = false;
    this.variant = "default";
    this.size = "medium";
    this.checkboxAdjacent = false;
    this.submenuAdjacent = false;
    this.type = "normal";
    this.checked = false;
    this.disabled = false;
    this.submenuOpen = false;
    this.hasSubmenu = false;
    this.handleSlotChange = () => {
      this.hasSubmenu = this.hasSlotController.test("submenu");
      this.updateHasSubmenuState();
      if (this.hasSubmenu) {
        this.setAttribute("aria-haspopup", "menu");
        this.setAttribute("aria-expanded", this.submenuOpen ? "true" : "false");
      } else {
        this.removeAttribute("aria-haspopup");
        this.removeAttribute("aria-expanded");
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("mouseenter", this.handleMouseEnter.bind(this));
    this.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.closeSubmenu();
    this.removeEventListener("mouseenter", this.handleMouseEnter);
    this.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
  firstUpdated() {
    this.setAttribute("tabindex", "-1");
    this.hasSubmenu = this.hasSlotController.test("submenu");
    this.updateHasSubmenuState();
  }
  updated(changedProperties) {
    if (changedProperties.has("active")) {
      this.setAttribute("tabindex", this.active ? "0" : "-1");
      this.customStates.set("active", this.active);
    }
    if (changedProperties.has("checked")) {
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
      this.customStates.set("checked", this.checked);
    }
    if (changedProperties.has("disabled")) {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
      this.customStates.set("disabled", this.disabled);
    }
    if (changedProperties.has("type")) {
      if (this.type === "checkbox") {
        this.setAttribute("role", "menuitemcheckbox");
      } else {
        this.setAttribute("role", "menuitem");
      }
    }
    if (changedProperties.has("submenuOpen")) {
      this.customStates.set("submenu-open", this.submenuOpen);
      if (this.submenuOpen) {
        this.openSubmenu();
      } else {
        this.closeSubmenu();
      }
    }
  }
  /** Update the has-submenu custom state */
  updateHasSubmenuState() {
    this.customStates.set("has-submenu", this.hasSubmenu);
  }
  /** Opens the submenu. */
  async openSubmenu() {
    if (!this.hasSubmenu || !this.submenuElement) return;
    this.notifyParentOfOpening();
    this.submenuElement.showPopover();
    this.submenuElement.hidden = false;
    this.submenuElement.setAttribute("data-visible", "");
    this.submenuOpen = true;
    this.setAttribute("aria-expanded", "true");
    await animateWithClass(this.submenuElement, "show");
    setTimeout(() => {
      const items = this.getSubmenuItems();
      if (items.length > 0) {
        items.forEach((item, index) => item.active = index === 0);
        items[0].focus();
      }
    }, 0);
  }
  /** Notifies the parent dropdown that this item is opening its submenu */
  notifyParentOfOpening() {
    const event = new CustomEvent("submenu-opening", {
      bubbles: true,
      composed: true,
      detail: { item: this }
    });
    this.dispatchEvent(event);
    const parent = this.parentElement;
    if (parent) {
      const siblings = [...parent.children].filter(
        (el) => el !== this && el.localName === "wa-dropdown-item" && el.getAttribute("slot") === this.getAttribute("slot") && el.submenuOpen
      );
      siblings.forEach((sibling) => {
        sibling.submenuOpen = false;
      });
    }
  }
  /** Closes the submenu. */
  async closeSubmenu() {
    if (!this.hasSubmenu || !this.submenuElement) return;
    this.submenuOpen = false;
    this.setAttribute("aria-expanded", "false");
    if (!this.submenuElement.hidden) {
      await animateWithClass(this.submenuElement, "hide");
      this.submenuElement.hidden = true;
      this.submenuElement.removeAttribute("data-visible");
      this.submenuElement.hidePopover();
    }
  }
  /** Gets all dropdown items in the submenu. */
  getSubmenuItems() {
    return [...this.children].filter(
      (el) => el.localName === "wa-dropdown-item" && el.getAttribute("slot") === "submenu" && !el.hasAttribute("disabled")
    );
  }
  /** Handles mouse enter to open the submenu */
  handleMouseEnter() {
    if (this.hasSubmenu && !this.disabled) {
      this.notifyParentOfOpening();
      this.submenuOpen = true;
    }
  }
  render() {
    return x`
      ${this.type === "checkbox" ? x`
            <wa-icon
              id="check"
              part="checkmark"
              exportparts="svg:checkmark__svg"
              library="system"
              name="check"
            ></wa-icon>
          ` : ""}

      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>

      <span id="label" part="label">
        <slot></slot>
      </span>

      <span id="details" part="details">
        <slot name="details"></slot>
      </span>

      ${this.hasSubmenu ? x`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          ` : ""}
      ${this.hasSubmenu ? x`
            <div
              id="submenu"
              part="submenu"
              popover="manual"
              role="menu"
              tabindex="-1"
              aria-orientation="vertical"
              hidden
            >
              <slot name="submenu"></slot>
            </div>
          ` : ""}
    `;
  }
};
WaDropdownItem.css = dropdown_item_default;
__decorateClass([
  e$4("#submenu")
], WaDropdownItem.prototype, "submenuElement", 2);
__decorateClass([
  n$2({ type: Boolean })
], WaDropdownItem.prototype, "active", 2);
__decorateClass([
  n$2({ reflect: true })
], WaDropdownItem.prototype, "variant", 2);
__decorateClass([
  n$2({ reflect: true })
], WaDropdownItem.prototype, "size", 2);
__decorateClass([
  n$2({ attribute: "checkbox-adjacent", type: Boolean, reflect: true })
], WaDropdownItem.prototype, "checkboxAdjacent", 2);
__decorateClass([
  n$2({ attribute: "submenu-adjacent", type: Boolean, reflect: true })
], WaDropdownItem.prototype, "submenuAdjacent", 2);
__decorateClass([
  n$2()
], WaDropdownItem.prototype, "value", 2);
__decorateClass([
  n$2({ reflect: true })
], WaDropdownItem.prototype, "type", 2);
__decorateClass([
  n$2({ type: Boolean })
], WaDropdownItem.prototype, "checked", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaDropdownItem.prototype, "disabled", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaDropdownItem.prototype, "submenuOpen", 2);
__decorateClass([
  r$1()
], WaDropdownItem.prototype, "hasSubmenu", 2);
WaDropdownItem = __decorateClass([
  t$1("wa-dropdown-item")
], WaDropdownItem);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/events/reposition.ts
var WaRepositionEvent = class extends Event {
  constructor() {
    super("wa-reposition", { bubbles: true, cancelable: false, composed: true });
  }
};

function offsetParent(element) {
    return offsetParentPolyfill(element);
}
function flatTreeParent(element) {
    if (element.assignedSlot) {
        return element.assignedSlot;
    }
    if (element.parentNode instanceof ShadowRoot) {
        return element.parentNode.host;
    }
    return element.parentNode;
}
function offsetParentPolyfill(element) {
    // Do an initial walk to check for display:none ancestors.
    for (let ancestor = element; ancestor; ancestor = flatTreeParent(ancestor)) {
        if (!(ancestor instanceof Element)) {
            continue;
        }
        if (getComputedStyle(ancestor).display === 'none') {
            return null;
        }
    }
    for (let ancestor = flatTreeParent(element); ancestor; ancestor = flatTreeParent(ancestor)) {
        if (!(ancestor instanceof Element)) {
            continue;
        }
        const style = getComputedStyle(ancestor);
        // Display:contents nodes aren't in the layout tree, so they should be skipped.
        if (style.display === 'contents') {
            continue;
        }
        if (style.position !== 'static' || isContainingBlock(style)) {
            return ancestor;
        }
        if (ancestor.tagName === 'BODY') {
            return ancestor;
        }
    }
    return null;
}

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/popup/popup.css
var popup_default = ":host {\n  --arrow-color: black;\n  --arrow-size: var(--wa-tooltip-arrow-size);\n  --show-duration: 100ms;\n  --hide-duration: 100ms;\n\n  /*\n     * These properties are computed to account for the arrow's dimensions after being rotated 45\xBA. The constant\n     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.\n     */\n  --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);\n  --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));\n\n  display: contents;\n}\n\n.popup {\n  position: absolute;\n  isolation: isolate;\n  max-width: var(--auto-size-available-width, none);\n  max-height: var(--auto-size-available-height, none);\n\n  /* Clear UA styles for [popover] */\n  :where(&) {\n    inset: unset;\n    padding: unset;\n    margin: unset;\n    width: unset;\n    height: unset;\n    color: unset;\n    background: unset;\n    border: unset;\n    overflow: unset;\n  }\n}\n\n.popup-fixed {\n  position: fixed;\n}\n\n.popup:not(.popup-active) {\n  display: none;\n}\n\n.arrow {\n  position: absolute;\n  width: calc(var(--arrow-size-diagonal) * 2);\n  height: calc(var(--arrow-size-diagonal) * 2);\n  rotate: 45deg;\n  background: var(--arrow-color);\n  z-index: 3;\n}\n\n:host([data-current-placement~='left']) .arrow {\n  rotate: -45deg;\n}\n\n:host([data-current-placement~='right']) .arrow {\n  rotate: 135deg;\n}\n\n:host([data-current-placement~='bottom']) .arrow {\n  rotate: 225deg;\n}\n\n/* Hover bridge */\n.popup-hover-bridge:not(.popup-hover-bridge-visible) {\n  display: none;\n}\n\n.popup-hover-bridge {\n  position: fixed;\n  z-index: 899;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  clip-path: polygon(\n    var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),\n    var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),\n    var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),\n    var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)\n  );\n}\n\n/* Built-in animations */\n.show {\n  animation: show var(--show-duration) ease;\n}\n\n.hide {\n  animation: show var(--hide-duration) ease reverse;\n}\n\n@keyframes show {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.show-with-scale {\n  animation: show-with-scale var(--show-duration) ease;\n}\n\n.hide-with-scale {\n  animation: show-with-scale var(--hide-duration) ease reverse;\n}\n\n@keyframes show-with-scale {\n  from {\n    opacity: 0;\n    scale: 0.8;\n  }\n  to {\n    opacity: 1;\n    scale: 1;\n  }\n}\n";

// src/components/popup/popup.ts
function isVirtualElement(e) {
  return e !== null && typeof e === "object" && "getBoundingClientRect" in e && ("contextElement" in e ? e instanceof Element : true);
}
var SUPPORTS_POPOVER = globalThis?.HTMLElement?.prototype.hasOwnProperty("popover");
var WaPopup = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.active = false;
    this.placement = "top";
    this.boundary = "viewport";
    this.distance = 0;
    this.skidding = 0;
    this.arrow = false;
    this.arrowPlacement = "anchor";
    this.arrowPadding = 10;
    this.flip = false;
    this.flipFallbackPlacements = "";
    this.flipFallbackStrategy = "best-fit";
    this.flipPadding = 0;
    this.shift = false;
    this.shiftPadding = 0;
    this.autoSizePadding = 0;
    this.hoverBridge = false;
    this.updateHoverBridge = () => {
      if (this.hoverBridge && this.anchorEl) {
        const anchorRect = this.anchorEl.getBoundingClientRect();
        const popupRect = this.popup.getBoundingClientRect();
        const isVertical = this.placement.includes("top") || this.placement.includes("bottom");
        let topLeftX = 0;
        let topLeftY = 0;
        let topRightX = 0;
        let topRightY = 0;
        let bottomLeftX = 0;
        let bottomLeftY = 0;
        let bottomRightX = 0;
        let bottomRightY = 0;
        if (isVertical) {
          if (anchorRect.top < popupRect.top) {
            topLeftX = anchorRect.left;
            topLeftY = anchorRect.bottom;
            topRightX = anchorRect.right;
            topRightY = anchorRect.bottom;
            bottomLeftX = popupRect.left;
            bottomLeftY = popupRect.top;
            bottomRightX = popupRect.right;
            bottomRightY = popupRect.top;
          } else {
            topLeftX = popupRect.left;
            topLeftY = popupRect.bottom;
            topRightX = popupRect.right;
            topRightY = popupRect.bottom;
            bottomLeftX = anchorRect.left;
            bottomLeftY = anchorRect.top;
            bottomRightX = anchorRect.right;
            bottomRightY = anchorRect.top;
          }
        } else {
          if (anchorRect.left < popupRect.left) {
            topLeftX = anchorRect.right;
            topLeftY = anchorRect.top;
            topRightX = popupRect.left;
            topRightY = popupRect.top;
            bottomLeftX = anchorRect.right;
            bottomLeftY = anchorRect.bottom;
            bottomRightX = popupRect.left;
            bottomRightY = popupRect.bottom;
          } else {
            topLeftX = popupRect.right;
            topLeftY = popupRect.top;
            topRightX = anchorRect.left;
            topRightY = anchorRect.top;
            bottomLeftX = popupRect.right;
            bottomLeftY = popupRect.bottom;
            bottomRightX = anchorRect.left;
            bottomRightY = anchorRect.bottom;
          }
        }
        this.style.setProperty("--hover-bridge-top-left-x", `${topLeftX}px`);
        this.style.setProperty("--hover-bridge-top-left-y", `${topLeftY}px`);
        this.style.setProperty("--hover-bridge-top-right-x", `${topRightX}px`);
        this.style.setProperty("--hover-bridge-top-right-y", `${topRightY}px`);
        this.style.setProperty("--hover-bridge-bottom-left-x", `${bottomLeftX}px`);
        this.style.setProperty("--hover-bridge-bottom-left-y", `${bottomLeftY}px`);
        this.style.setProperty("--hover-bridge-bottom-right-x", `${bottomRightX}px`);
        this.style.setProperty("--hover-bridge-bottom-right-y", `${bottomRightY}px`);
      }
    };
  }
  async connectedCallback() {
    super.connectedCallback();
    await this.updateComplete;
    this.start();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stop();
  }
  async updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("active")) {
      if (this.active) {
        this.start();
      } else {
        this.stop();
      }
    }
    if (changedProperties.has("anchor")) {
      this.handleAnchorChange();
    }
    if (this.active) {
      await this.updateComplete;
      this.reposition();
    }
  }
  async handleAnchorChange() {
    await this.stop();
    if (this.anchor && typeof this.anchor === "string") {
      const root = this.getRootNode();
      this.anchorEl = root.getElementById(this.anchor);
    } else if (this.anchor instanceof Element || isVirtualElement(this.anchor)) {
      this.anchorEl = this.anchor;
    } else {
      this.anchorEl = this.querySelector('[slot="anchor"]');
    }
    if (this.anchorEl instanceof HTMLSlotElement) {
      this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0];
    }
    if (this.anchorEl) {
      this.start();
    }
  }
  start() {
    if (!this.anchorEl || !this.active) {
      return;
    }
    this.popup.showPopover?.();
    this.cleanup = autoUpdate(this.anchorEl, this.popup, () => {
      this.reposition();
    });
  }
  async stop() {
    return new Promise((resolve) => {
      this.popup.hidePopover?.();
      if (this.cleanup) {
        this.cleanup();
        this.cleanup = void 0;
        this.removeAttribute("data-current-placement");
        this.style.removeProperty("--auto-size-available-width");
        this.style.removeProperty("--auto-size-available-height");
        requestAnimationFrame(() => resolve());
      } else {
        resolve();
      }
    });
  }
  /** Forces the popup to recalculate and reposition itself. */
  reposition() {
    if (!this.active || !this.anchorEl) {
      return;
    }
    const middleware = [
      // The offset middleware goes first
      offset({ mainAxis: this.distance, crossAxis: this.skidding })
    ];
    if (this.sync) {
      middleware.push(
        size({
          apply: ({ rects }) => {
            const syncWidth = this.sync === "width" || this.sync === "both";
            const syncHeight = this.sync === "height" || this.sync === "both";
            this.popup.style.width = syncWidth ? `${rects.reference.width}px` : "";
            this.popup.style.height = syncHeight ? `${rects.reference.height}px` : "";
          }
        })
      );
    } else {
      this.popup.style.width = "";
      this.popup.style.height = "";
    }
    let defaultBoundary;
    if (SUPPORTS_POPOVER && !isVirtualElement(this.anchor) && this.boundary === "scroll") {
      defaultBoundary = getOverflowAncestors(this.anchorEl).filter((el) => el instanceof Element);
    }
    if (this.flip) {
      middleware.push(
        flip$1({
          boundary: this.flipBoundary || defaultBoundary,
          // @ts-expect-error - We're converting a string attribute to an array here
          fallbackPlacements: this.flipFallbackPlacements,
          fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
          padding: this.flipPadding
        })
      );
    }
    if (this.shift) {
      middleware.push(
        shift({
          boundary: this.shiftBoundary || defaultBoundary,
          padding: this.shiftPadding
        })
      );
    }
    if (this.autoSize) {
      middleware.push(
        size({
          boundary: this.autoSizeBoundary || defaultBoundary,
          padding: this.autoSizePadding,
          apply: ({ availableWidth, availableHeight }) => {
            if (this.autoSize === "vertical" || this.autoSize === "both") {
              this.style.setProperty("--auto-size-available-height", `${availableHeight}px`);
            } else {
              this.style.removeProperty("--auto-size-available-height");
            }
            if (this.autoSize === "horizontal" || this.autoSize === "both") {
              this.style.setProperty("--auto-size-available-width", `${availableWidth}px`);
            } else {
              this.style.removeProperty("--auto-size-available-width");
            }
          }
        })
      );
    } else {
      this.style.removeProperty("--auto-size-available-width");
      this.style.removeProperty("--auto-size-available-height");
    }
    if (this.arrow) {
      middleware.push(
        arrow({
          element: this.arrowEl,
          padding: this.arrowPadding
        })
      );
    }
    const getOffsetParent = SUPPORTS_POPOVER ? (element) => platform.getOffsetParent(element, offsetParent) : platform.getOffsetParent;
    computePosition(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware,
      strategy: SUPPORTS_POPOVER ? "absolute" : "fixed",
      platform: {
        ...platform,
        getOffsetParent
      }
    }).then(({ x, y, middlewareData, placement }) => {
      const isRtl = this.localize.dir() === "rtl";
      const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
      this.setAttribute("data-current-placement", placement);
      Object.assign(this.popup.style, {
        left: `${x}px`,
        top: `${y}px`
      });
      if (this.arrow) {
        const arrowX = middlewareData.arrow.x;
        const arrowY = middlewareData.arrow.y;
        let top = "";
        let right = "";
        let bottom = "";
        let left = "";
        if (this.arrowPlacement === "start") {
          const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          top = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          right = isRtl ? value : "";
          left = isRtl ? "" : value;
        } else if (this.arrowPlacement === "end") {
          const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          right = isRtl ? "" : value;
          left = isRtl ? value : "";
          bottom = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
        } else if (this.arrowPlacement === "center") {
          left = typeof arrowX === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
          top = typeof arrowY === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
        } else {
          left = typeof arrowX === "number" ? `${arrowX}px` : "";
          top = typeof arrowY === "number" ? `${arrowY}px` : "";
        }
        Object.assign(this.arrowEl.style, {
          top,
          right,
          bottom,
          left,
          [staticSide]: "calc(var(--arrow-size-diagonal) * -1)"
        });
      }
    });
    requestAnimationFrame(() => this.updateHoverBridge());
    this.dispatchEvent(new WaRepositionEvent());
  }
  render() {
    return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${e$2({
      "popup-hover-bridge": true,
      "popup-hover-bridge-visible": this.hoverBridge && this.active
    })}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${e$2({
      popup: true,
      "popup-active": this.active,
      "popup-fixed": !SUPPORTS_POPOVER,
      "popup-has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? x`<div part="arrow" class="arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
WaPopup.css = popup_default;
__decorateClass([
  e$4(".popup")
], WaPopup.prototype, "popup", 2);
__decorateClass([
  e$4(".arrow")
], WaPopup.prototype, "arrowEl", 2);
__decorateClass([
  n$2()
], WaPopup.prototype, "anchor", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaPopup.prototype, "active", 2);
__decorateClass([
  n$2({ reflect: true })
], WaPopup.prototype, "placement", 2);
__decorateClass([
  n$2()
], WaPopup.prototype, "boundary", 2);
__decorateClass([
  n$2({ type: Number })
], WaPopup.prototype, "distance", 2);
__decorateClass([
  n$2({ type: Number })
], WaPopup.prototype, "skidding", 2);
__decorateClass([
  n$2({ type: Boolean })
], WaPopup.prototype, "arrow", 2);
__decorateClass([
  n$2({ attribute: "arrow-placement" })
], WaPopup.prototype, "arrowPlacement", 2);
__decorateClass([
  n$2({ attribute: "arrow-padding", type: Number })
], WaPopup.prototype, "arrowPadding", 2);
__decorateClass([
  n$2({ type: Boolean })
], WaPopup.prototype, "flip", 2);
__decorateClass([
  n$2({
    attribute: "flip-fallback-placements",
    converter: {
      fromAttribute: (value) => {
        return value.split(" ").map((p) => p.trim()).filter((p) => p !== "");
      },
      toAttribute: (value) => {
        return value.join(" ");
      }
    }
  })
], WaPopup.prototype, "flipFallbackPlacements", 2);
__decorateClass([
  n$2({ attribute: "flip-fallback-strategy" })
], WaPopup.prototype, "flipFallbackStrategy", 2);
__decorateClass([
  n$2({ type: Object })
], WaPopup.prototype, "flipBoundary", 2);
__decorateClass([
  n$2({ attribute: "flip-padding", type: Number })
], WaPopup.prototype, "flipPadding", 2);
__decorateClass([
  n$2({ type: Boolean })
], WaPopup.prototype, "shift", 2);
__decorateClass([
  n$2({ type: Object })
], WaPopup.prototype, "shiftBoundary", 2);
__decorateClass([
  n$2({ attribute: "shift-padding", type: Number })
], WaPopup.prototype, "shiftPadding", 2);
__decorateClass([
  n$2({ attribute: "auto-size" })
], WaPopup.prototype, "autoSize", 2);
__decorateClass([
  n$2()
], WaPopup.prototype, "sync", 2);
__decorateClass([
  n$2({ type: Object })
], WaPopup.prototype, "autoSizeBoundary", 2);
__decorateClass([
  n$2({ attribute: "auto-size-padding", type: Number })
], WaPopup.prototype, "autoSizePadding", 2);
__decorateClass([
  n$2({ attribute: "hover-bridge", type: Boolean })
], WaPopup.prototype, "hoverBridge", 2);
WaPopup = __decorateClass([
  t$1("wa-popup")
], WaPopup);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/events/remove.ts
var WaRemoveEvent = class extends Event {
  constructor() {
    super("wa-remove", { bubbles: true, cancelable: false, composed: true });
  }
};

// src/components/tag/tag.css
var tag_default = "@layer wa-component {\n  :host {\n    display: inline-flex;\n    gap: 0.5em;\n    border-radius: var(--wa-border-radius-m);\n    align-items: center;\n    background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));\n    border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));\n    border-style: var(--wa-border-style);\n    border-width: var(--wa-border-width-s);\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    font-size: inherit;\n    line-height: 1;\n    white-space: nowrap;\n    user-select: none;\n    -webkit-user-select: none;\n    height: calc(var(--wa-form-control-height) * 0.8);\n    line-height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);\n    padding: 0 0.75em;\n  }\n\n  /* Appearance modifiers */\n  :host([appearance='outlined']) {\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    background-color: transparent;\n    border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));\n  }\n\n  :host([appearance='filled']) {\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));\n    border-color: transparent;\n  }\n\n  :host([appearance='filled-outlined']) {\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));\n    border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));\n  }\n\n  :host([appearance='accent']) {\n    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));\n    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));\n    border-color: transparent;\n  }\n}\n\n.content {\n  font-size: var(--wa-font-size-smaller);\n}\n\n[part='remove-button'] {\n  color: inherit;\n  line-height: 1;\n}\n\n[part='remove-button']::part(base) {\n  padding: 0;\n  height: 1em;\n  width: 1em;\n}\n\n@media (hover: hover) {\n  :host(:hover) > [part='remove-button']::part(base) {\n    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));\n  }\n}\n\n:host(:active) > [part='remove-button']::part(base) {\n  color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));\n}\n\n/*\n * Pill modifier\n */\n:host([pill]) {\n  border-radius: var(--wa-border-radius-pill);\n}\n";

// src/components/tag/tag.ts
var WaTag = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.variant = "neutral";
    this.appearance = "filled-outlined";
    this.size = "medium";
    this.pill = false;
    this.withRemove = false;
  }
  handleRemoveClick() {
    this.dispatchEvent(new WaRemoveEvent());
  }
  render() {
    return x`
      <slot part="content" class="content"></slot>

      ${this.withRemove ? x`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term("remove")}></wa-icon>
            </wa-button>
          ` : ""}
    `;
  }
};
WaTag.css = [tag_default, variants_default, size_default];
__decorateClass([
  n$2({ reflect: true })
], WaTag.prototype, "variant", 2);
__decorateClass([
  n$2({ reflect: true })
], WaTag.prototype, "appearance", 2);
__decorateClass([
  n$2({ reflect: true })
], WaTag.prototype, "size", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaTag.prototype, "pill", 2);
__decorateClass([
  n$2({ attribute: "with-remove", type: Boolean })
], WaTag.prototype, "withRemove", 2);
WaTag = __decorateClass([
  t$1("wa-tag")
], WaTag);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/events/clear.ts
var WaClearEvent = class extends Event {
  constructor() {
    super("wa-clear", { bubbles: true, cancelable: false, composed: true });
  }
};

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/internal/submit-on-enter.ts
function submitOnEnter(event, el) {
  const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
  if (event.key === "Enter" && !hasModifier) {
    setTimeout(() => {
      if (!event.defaultPrevented && !event.isComposing) {
        submitForm(el);
      }
    });
  }
}
function submitForm(el) {
  let form = null;
  if ("form" in el) {
    form = el.form;
  }
  if (!form && "getForm" in el) {
    form = el.getForm();
  }
  if (!form) {
    return;
  }
  const formElements = [...form.elements];
  if (formElements.length === 1) {
    form.requestSubmit(null);
    return;
  }
  const button = formElements.find((el2) => el2.type === "submit" && !el2.matches(":disabled"));
  if (!button) {
    return;
  }
  if (["input", "button"].includes(button.localName)) {
    form.requestSubmit(button);
  } else {
    button.click();
  }
}

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/styles/component/form-control.css
var form_control_default = ":host {\n  display: flex;\n  flex-direction: column;\n}\n\n/* Label */\n:is([part~='form-control-label'], [part~='label']):has(*:not(:empty)) {\n  display: inline-flex;\n  color: var(--wa-form-control-label-color);\n  font-weight: var(--wa-form-control-label-font-weight);\n  line-height: var(--wa-form-control-label-line-height);\n  margin-block-end: 0.5em;\n}\n\n:host([required]) :is([part~='form-control-label'], [part~='label'])::after {\n  content: var(--wa-form-control-required-content);\n  margin-inline-start: var(--wa-form-control-required-content-offset);\n  color: var(--wa-form-control-required-content-color);\n}\n\n/* Help text */\n[part~='hint'] {\n  display: block;\n  color: var(--wa-form-control-hint-color);\n  font-weight: var(--wa-form-control-hint-font-weight);\n  line-height: var(--wa-form-control-hint-line-height);\n  margin-block-start: 0.5em;\n  font-size: var(--wa-font-size-smaller);\n  line-height: var(--wa-form-control-label-line-height);\n\n  &:not(.has-slotted) {\n    display: none;\n  }\n}\n";

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=e$3(class extends i$1{constructor(r){if(super(r),r.type!==t.PROPERTY&&r.type!==t.ATTRIBUTE&&r.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!f(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t$1]){if(t$1===T||t$1===E)return t$1;const o=i.element,l=i.name;if(i.type===t.PROPERTY){if(t$1===o[l])return T}else if(i.type===t.BOOLEAN_ATTRIBUTE){if(!!t$1===o.hasAttribute(l))return T}else if(i.type===t.ATTRIBUTE&&o.getAttribute(l)===t$1+"")return T;return m(i),t$1}});

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/input/input.css
var input_default = ":host {\n  border-width: 0;\n}\n\n.text-field {\n  flex: auto;\n  display: flex;\n  align-items: stretch;\n  justify-content: start;\n  position: relative;\n  transition: inherit;\n  height: var(--wa-form-control-height);\n  border-color: var(--wa-form-control-border-color);\n  border-radius: var(--wa-form-control-border-radius);\n  border-style: var(--wa-form-control-border-style);\n  border-width: var(--wa-form-control-border-width);\n  cursor: text;\n  color: var(--wa-form-control-value-color);\n  font-size: var(--wa-form-control-value-font-size);\n  font-family: inherit;\n  font-weight: var(--wa-form-control-value-font-weight);\n  line-height: var(--wa-form-control-value-line-height);\n  vertical-align: middle;\n  width: 100%;\n  transition:\n    background-color var(--wa-transition-normal),\n    border var(--wa-transition-normal),\n    outline var(--wa-transition-fast);\n  transition-timing-function: var(--wa-transition-easing);\n  background-color: var(--wa-form-control-background-color);\n  box-shadow: var(--box-shadow);\n  padding: 0 var(--wa-form-control-padding-inline);\n\n  &:focus-within {\n    outline: var(--wa-focus-ring);\n    outline-offset: var(--wa-focus-ring-offset);\n  }\n\n  /* Style disabled inputs */\n  &:has(:disabled) {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n}\n\n/* Appearance modifiers */\n:host([appearance='outlined']) .text-field {\n  background-color: var(--wa-form-control-background-color);\n  border-color: var(--wa-form-control-border-color);\n}\n\n:host([appearance='filled']) .text-field {\n  background-color: var(--wa-color-neutral-fill-quiet);\n  border-color: var(--wa-color-neutral-fill-quiet);\n}\n\n:host([appearance='filled-outlined']) .text-field {\n  background-color: var(--wa-color-neutral-fill-quiet);\n  border-color: var(--wa-form-control-border-color);\n}\n\n:host([pill]) .text-field {\n  border-radius: var(--wa-border-radius-pill) !important;\n}\n\n.text-field {\n  /* Show autofill styles over the entire text field, not just the native <input> */\n  &:has(:autofill),\n  &:has(:-webkit-autofill) {\n    background-color: var(--wa-color-brand-fill-quiet) !important;\n  }\n\n  input,\n  textarea {\n    /*\n    Fixes an alignment issue with placeholders.\n    https://github.com/shoelace-style/webawesome/issues/342\n  */\n    height: 100%;\n\n    padding: 0;\n    border: none;\n    outline: none;\n    box-shadow: none;\n    margin: 0;\n    cursor: inherit;\n    -webkit-appearance: none;\n    font: inherit;\n\n    /* Turn off Safari's autofill styles */\n    &:-webkit-autofill,\n    &:-webkit-autofill:hover,\n    &:-webkit-autofill:focus,\n    &:-webkit-autofill:active {\n      -webkit-background-clip: text;\n      background-color: transparent;\n      -webkit-text-fill-color: inherit;\n    }\n  }\n}\n\ninput {\n  flex: 1 1 auto;\n  min-width: 0;\n  height: 100%;\n  transition: inherit;\n\n  /* prettier-ignore */\n  background-color: rgb(118 118 118 / 0); /* ensures proper placeholder styles in webkit's date input */\n  height: calc(var(--wa-form-control-height) - var(--border-width) * 2);\n  padding-block: 0;\n  color: inherit;\n\n  &:autofill {\n    &,\n    &:hover,\n    &:focus,\n    &:active {\n      box-shadow: none;\n      caret-color: var(--wa-form-control-value-color);\n    }\n  }\n\n  &::placeholder {\n    color: var(--wa-form-control-placeholder-color);\n    user-select: none;\n    -webkit-user-select: none;\n  }\n\n  &::-webkit-search-decoration,\n  &::-webkit-search-cancel-button,\n  &::-webkit-search-results-button,\n  &::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n  }\n\n  &:focus {\n    outline: none;\n  }\n}\n\ntextarea {\n  &:autofill {\n    &,\n    &:hover,\n    &:focus,\n    &:active {\n      box-shadow: none;\n      caret-color: var(--wa-form-control-value-color);\n    }\n  }\n\n  &::placeholder {\n    color: var(--wa-form-control-placeholder-color);\n    user-select: none;\n    -webkit-user-select: none;\n  }\n}\n\n.start,\n.end {\n  display: inline-flex;\n  flex: 0 0 auto;\n  align-items: center;\n  cursor: default;\n\n  &::slotted(wa-icon) {\n    color: var(--wa-color-neutral-on-quiet);\n  }\n}\n\n.start::slotted(*) {\n  margin-inline-end: var(--wa-form-control-padding-inline);\n}\n\n.end::slotted(*) {\n  margin-inline-start: var(--wa-form-control-padding-inline);\n}\n\n/*\n * Clearable + Password Toggle\n */\n\n.clear,\n.password-toggle {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: inherit;\n  color: var(--wa-color-neutral-on-quiet);\n  border: none;\n  background: none;\n  padding: 0;\n  transition: var(--wa-transition-normal) color;\n  cursor: pointer;\n  margin-inline-start: var(--wa-form-control-padding-inline);\n\n  @media (hover: hover) {\n    &:hover {\n      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));\n    }\n  }\n\n  &:active {\n    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));\n  }\n\n  &:focus {\n    outline: none;\n  }\n}\n\n/* Don't show the browser's password toggle in Edge */\n::-ms-reveal {\n  display: none;\n}\n\n/* Hide the built-in number spinner */\n:host([without-spin-buttons]) input[type='number'] {\n  -moz-appearance: textfield;\n\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    display: none;\n  }\n}\n";

// src/components/input/input.ts
var WaInput = class extends WebAwesomeFormAssociatedElement {
  constructor() {
    super(...arguments);
    this.assumeInteractionOn = ["blur", "input"];
    this.hasSlotController = new HasSlotController(this, "hint", "label");
    this.localize = new LocalizeController(this);
    this.title = "";
    this.type = "text";
    this._value = null;
    this.defaultValue = this.getAttribute("value") || null;
    this.size = "medium";
    this.appearance = "outlined";
    this.pill = false;
    this.label = "";
    this.hint = "";
    this.withClear = false;
    this.placeholder = "";
    this.readonly = false;
    this.passwordToggle = false;
    this.passwordVisible = false;
    this.withoutSpinButtons = false;
    this.form = null;
    this.required = false;
    this.spellcheck = true;
    this.withLabel = false;
    this.withHint = false;
  }
  static get validators() {
    return [...super.validators, MirrorValidator()];
  }
  /** The current value of the input, submitted as a name/value pair with form data. */
  get value() {
    if (this.valueHasChanged) {
      return this._value;
    }
    return this._value ?? this.defaultValue;
  }
  set value(val) {
    if (this._value === val) {
      return;
    }
    this.valueHasChanged = true;
    this._value = val;
  }
  handleChange(event) {
    this.value = this.input.value;
    this.relayNativeEvent(event, { bubbles: true, composed: true });
  }
  handleClearClick(event) {
    event.preventDefault();
    if (this.value !== "") {
      this.value = "";
      this.updateComplete.then(() => {
        this.dispatchEvent(new WaClearEvent());
        this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
        this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      });
    }
    this.input.focus();
  }
  handleInput() {
    this.value = this.input.value;
  }
  handleKeyDown(event) {
    submitOnEnter(event, this);
  }
  handlePasswordToggle() {
    this.passwordVisible = !this.passwordVisible;
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("value")) {
      this.customStates.set("blank", !this.value);
    }
  }
  handleStepChange() {
    this.input.step = String(this.step);
    this.updateValidity();
  }
  /** Sets focus on the input. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the input. */
  blur() {
    this.input.blur();
  }
  /** Selects all the text in the input. */
  select() {
    this.input.select();
  }
  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  /** Replaces a range of text with a new string. */
  setRangeText(replacement, start, end, selectMode = "preserve") {
    const selectionStart = start ?? this.input.selectionStart;
    const selectionEnd = end ?? this.input.selectionEnd;
    this.input.setRangeText(replacement, selectionStart, selectionEnd, selectMode);
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }
  /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
  showPicker() {
    if ("showPicker" in HTMLInputElement.prototype) {
      this.input.showPicker();
    }
  }
  /** Increments the value of a numeric input type by the value of the step attribute. */
  stepUp() {
    this.input.stepUp();
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }
  /** Decrements the value of a numeric input type by the value of the step attribute. */
  stepDown() {
    this.input.stepDown();
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }
  formResetCallback() {
    this.value = this.defaultValue;
    super.formResetCallback();
  }
  render() {
    const hasLabelSlot = this.hasUpdated ? this.hasSlotController.test("label") : this.withLabel;
    const hasHintSlot = this.hasUpdated ? this.hasSlotController.test("hint") : this.withHint;
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHint = this.hint ? true : !!hasHintSlot;
    const hasClearIcon = this.withClear && !this.disabled && !this.readonly;
    const isClearIconVisible = (
      // prevents hydration mismatch errors.
      (this.hasUpdated) && hasClearIcon && (typeof this.value === "number" || this.value && this.value.length > 0)
    );
    return x`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${hasLabel ? "false" : "true"}>
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${this.type === "password" && this.passwordVisible ? "text" : this.type}
          title=${this.title}
          name=${o$2(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${o$2(this.placeholder)}
          minlength=${o$2(this.minlength)}
          maxlength=${o$2(this.maxlength)}
          min=${o$2(this.min)}
          max=${o$2(this.max)}
          step=${o$2(this.step)}
          .value=${l(this.value ?? "")}
          autocapitalize=${o$2(this.autocapitalize)}
          autocomplete=${o$2(this.autocomplete)}
          autocorrect=${o$2(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${o$2(this.pattern)}
          enterkeyhint=${o$2(this.enterkeyhint)}
          inputmode=${o$2(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${isClearIconVisible ? x`
              <button
                part="clear-button"
                class="clear"
                type="button"
                aria-label=${this.localize.term("clearEntry")}
                @click=${this.handleClearClick}
                tabindex="-1"
              >
                <slot name="clear-icon">
                  <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                </slot>
              </button>
            ` : ""}
        ${this.passwordToggle && !this.disabled ? x`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible ? "hidePassword" : "showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${!this.passwordVisible ? x`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    ` : x`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `}
              </button>
            ` : ""}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${e$2({
      "has-slotted": hasHint
    })}
        aria-hidden=${hasHint ? "false" : "true"}
        >${this.hint}</slot
      >
    `;
  }
};
WaInput.css = [size_default, form_control_default, input_default];
WaInput.shadowRootOptions = { ...WebAwesomeFormAssociatedElement.shadowRootOptions, delegatesFocus: true };
__decorateClass([
  e$4("input")
], WaInput.prototype, "input", 2);
__decorateClass([
  n$2()
], WaInput.prototype, "title", 2);
__decorateClass([
  n$2({ reflect: true })
], WaInput.prototype, "type", 2);
__decorateClass([
  r$1()
], WaInput.prototype, "value", 1);
__decorateClass([
  n$2({ attribute: "value", reflect: true })
], WaInput.prototype, "defaultValue", 2);
__decorateClass([
  n$2({ reflect: true })
], WaInput.prototype, "size", 2);
__decorateClass([
  n$2({ reflect: true })
], WaInput.prototype, "appearance", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaInput.prototype, "pill", 2);
__decorateClass([
  n$2()
], WaInput.prototype, "label", 2);
__decorateClass([
  n$2({ attribute: "hint" })
], WaInput.prototype, "hint", 2);
__decorateClass([
  n$2({ attribute: "with-clear", type: Boolean })
], WaInput.prototype, "withClear", 2);
__decorateClass([
  n$2()
], WaInput.prototype, "placeholder", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaInput.prototype, "readonly", 2);
__decorateClass([
  n$2({ attribute: "password-toggle", type: Boolean })
], WaInput.prototype, "passwordToggle", 2);
__decorateClass([
  n$2({ attribute: "password-visible", type: Boolean })
], WaInput.prototype, "passwordVisible", 2);
__decorateClass([
  n$2({ attribute: "without-spin-buttons", type: Boolean })
], WaInput.prototype, "withoutSpinButtons", 2);
__decorateClass([
  n$2({ reflect: true })
], WaInput.prototype, "form", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaInput.prototype, "required", 2);
__decorateClass([
  n$2()
], WaInput.prototype, "pattern", 2);
__decorateClass([
  n$2({ type: Number })
], WaInput.prototype, "minlength", 2);
__decorateClass([
  n$2({ type: Number })
], WaInput.prototype, "maxlength", 2);
__decorateClass([
  n$2()
], WaInput.prototype, "min", 2);
__decorateClass([
  n$2()
], WaInput.prototype, "max", 2);
__decorateClass([
  n$2()
], WaInput.prototype, "step", 2);
__decorateClass([
  n$2()
], WaInput.prototype, "autocapitalize", 2);
__decorateClass([
  n$2()
], WaInput.prototype, "autocorrect", 2);
__decorateClass([
  n$2()
], WaInput.prototype, "autocomplete", 2);
__decorateClass([
  n$2({ type: Boolean })
], WaInput.prototype, "autofocus", 2);
__decorateClass([
  n$2()
], WaInput.prototype, "enterkeyhint", 2);
__decorateClass([
  n$2({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (value) => !value || value === "false" ? false : true,
      toAttribute: (value) => value ? "true" : "false"
    }
  })
], WaInput.prototype, "spellcheck", 2);
__decorateClass([
  n$2()
], WaInput.prototype, "inputmode", 2);
__decorateClass([
  n$2({ attribute: "with-label", type: Boolean })
], WaInput.prototype, "withLabel", 2);
__decorateClass([
  n$2({ attribute: "with-hint", type: Boolean })
], WaInput.prototype, "withHint", 2);
__decorateClass([
  watch("step", { waitUntilFirstUpdate: true })
], WaInput.prototype, "handleStepChange", 1);
WaInput = __decorateClass([
  t$1("wa-input")
], WaInput);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/card/card.css
var card_default = ":host {\n  --spacing: var(--wa-space-l);\n\n  /* Internal calculated properties */\n  --inner-border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));\n\n  display: flex;\n  flex-direction: column;\n  background-color: var(--wa-color-surface-default);\n  border-color: var(--wa-color-surface-border);\n  border-radius: var(--wa-panel-border-radius);\n  border-style: var(--wa-panel-border-style);\n  box-shadow: var(--wa-shadow-s);\n  border-width: var(--wa-panel-border-width);\n  color: var(--wa-color-text-normal);\n}\n\n/* Appearance modifiers */\n:host([appearance~='plain']) {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n:host([appearance~='outlined']) {\n  background-color: var(--wa-color-surface-default);\n  border-color: var(--wa-color-surface-border);\n}\n\n:host([appearance~='filled']) {\n  background-color: var(--wa-color-neutral-fill-quiet);\n  border-color: transparent;\n}\n\n:host([appearance~='filled'][appearance~='outlined']) {\n  border-color: var(--wa-color-neutral-border-quiet);\n}\n\n:host([appearance~='accent']) {\n  color: var(--wa-color-neutral-on-loud);\n  background-color: var(--wa-color-neutral-fill-loud);\n  border-color: transparent;\n}\n\n/* Take care of top and bottom radii */\n.media,\n:host(:not([with-media])) .header,\n:host(:not([with-media], [with-header])) .body {\n  border-start-start-radius: var(--inner-border-radius);\n  border-start-end-radius: var(--inner-border-radius);\n}\n\n:host(:not([with-footer])) .body,\n.footer {\n  border-end-start-radius: var(--inner-border-radius);\n  border-end-end-radius: var(--inner-border-radius);\n}\n\n.media {\n  display: flex;\n  overflow: hidden;\n\n  &::slotted(*) {\n    display: block;\n    width: 100%;\n    border-radius: 0 !important;\n  }\n}\n\n/* Round all corners for plain appearance */\n:host([appearance='plain']) .media {\n  border-radius: var(--inner-border-radius);\n\n  &::slotted(*) {\n    border-radius: inherit !important;\n  }\n}\n\n.header {\n  display: block;\n  border-block-end-style: inherit;\n  border-block-end-color: var(--wa-color-surface-border);\n  border-block-end-width: var(--wa-panel-border-width);\n  padding: calc(var(--spacing) / 2) var(--spacing);\n}\n\n.body {\n  display: block;\n  padding: var(--spacing);\n}\n\n.footer {\n  display: block;\n  border-block-start-style: inherit;\n  border-block-start-color: var(--wa-color-surface-border);\n  border-block-start-width: var(--wa-panel-border-width);\n  padding: var(--spacing);\n}\n\n/* Push slots to sides when the action slots renders */\n.has-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n:host(:not([with-header])) .header,\n:host(:not([with-footer])) .footer,\n:host(:not([with-media])) .media {\n  display: none;\n}\n\n/* Orientation Styles */\n:host([orientation='horizontal']) {\n  flex-direction: row;\n\n  .media {\n    border-start-start-radius: var(--inner-border-radius);\n    border-end-start-radius: var(--inner-border-radius);\n    border-start-end-radius: 0;\n\n    &::slotted(*) {\n      block-size: 100%;\n      inline-size: 100%;\n      object-fit: cover;\n    }\n  }\n}\n\n:host([orientation='horizontal']) ::slotted([slot='body']) {\n  display: block;\n  height: 100%;\n  margin: 0;\n}\n\n:host([orientation='horizontal']) ::slotted([slot='actions']) {\n  display: flex;\n  align-items: center;\n  padding: var(--spacing);\n}\n";

// src/components/card/card.ts
var WaCard = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "footer", "header", "media");
    this.appearance = "outlined";
    this.withHeader = false;
    this.withMedia = false;
    this.withFooter = false;
    this.orientation = "vertical";
  }
  updated() {
    if (!this.withHeader && this.hasSlotController.test("header")) this.withHeader = true;
    if (!this.withMedia && this.hasSlotController.test("media")) this.withMedia = true;
    if (!this.withFooter && this.hasSlotController.test("footer")) this.withFooter = true;
  }
  render() {
    if (this.orientation === "horizontal") {
      return x`
        <slot name="media" part="media" class="media"></slot>
        <slot part="body" class="body"></slot>
        <slot name="actions" part="actions" class="actions"></slot>
      `;
    }
    return x`
      <slot name="media" part="media" class="media"></slot>

      ${this.hasSlotController.test("header-actions") ? x` <header part="header" class="header has-actions">
            <slot name="header"></slot>
            <slot name="header-actions"></slot>
          </header>` : x` <header part="header" class="header">
            <slot name="header"></slot>
          </header>`}

      <slot part="body" class="body"></slot>
      ${this.hasSlotController.test("footer-actions") ? x` <footer part="footer" class="footer has-actions">
            <slot name="footer"></slot>
            <slot name="footer-actions"></slot>
          </footer>` : x` <footer part="footer" class="footer">
            <slot name="footer"></slot>
          </footer>`}
    `;
  }
};
WaCard.css = [size_default, card_default];
__decorateClass([
  n$2({ reflect: true })
], WaCard.prototype, "appearance", 2);
__decorateClass([
  n$2({ attribute: "with-header", type: Boolean, reflect: true })
], WaCard.prototype, "withHeader", 2);
__decorateClass([
  n$2({ attribute: "with-media", type: Boolean, reflect: true })
], WaCard.prototype, "withMedia", 2);
__decorateClass([
  n$2({ attribute: "with-footer", type: Boolean, reflect: true })
], WaCard.prototype, "withFooter", 2);
__decorateClass([
  n$2({ reflect: true })
], WaCard.prototype, "orientation", 2);
WaCard = __decorateClass([
  t$1("wa-card")
], WaCard);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/divider/divider.css
var divider_default = ":host {\n  --color: var(--wa-color-surface-border);\n  --width: var(--wa-border-width-s);\n  --spacing: var(--wa-space-m);\n}\n\n:host(:not([orientation='vertical'])) {\n  display: block;\n  border-top: solid var(--width) var(--color);\n  margin: var(--spacing) 0;\n}\n\n:host([orientation='vertical']) {\n  display: inline-block;\n  height: 100%;\n  border-inline-start: solid var(--width) var(--color);\n  margin: 0 var(--spacing);\n  min-block-size: 1lh;\n}\n";

// src/components/divider/divider.ts
var WaDivider = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.orientation = "horizontal";
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "separator");
  }
  handleVerticalChange() {
    this.setAttribute("aria-orientation", this.orientation);
  }
};
WaDivider.css = divider_default;
__decorateClass([
  n$2({ reflect: true })
], WaDivider.prototype, "orientation", 2);
__decorateClass([
  watch("orientation")
], WaDivider.prototype, "handleVerticalChange", 1);
WaDivider = __decorateClass([
  t$1("wa-divider")
], WaDivider);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/internal/validators/required-validator.ts
var RequiredValidator = (options = {}) => {
  let { validationElement, validationProperty } = options;
  if (!validationElement) {
    validationElement = Object.assign(document.createElement("input"), { required: true });
  }
  if (!validationProperty) {
    validationProperty = "value";
  }
  const obj = {
    observedAttributes: ["required"],
    message: validationElement.validationMessage,
    // @TODO: Add a translation.
    checkValidity(element) {
      const validity = {
        message: "",
        isValid: true,
        invalidKeys: []
      };
      const isRequired = element.required ?? element.hasAttribute("required");
      if (!isRequired) {
        return validity;
      }
      const value = element[validationProperty];
      const isEmpty = !value;
      if (isEmpty) {
        validity.message = typeof obj.message === "function" ? obj.message(element) : obj.message || "";
        validity.isValid = false;
        validity.invalidKeys.push("valueMissing");
      }
      return validity;
    }
  };
  return obj;
};

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/internal/event.ts
function waitForEvent(el, eventName) {
  return new Promise((resolve) => {
    function done(event) {
      if (event.target === el) {
        el.removeEventListener(eventName, done);
        resolve();
      }
    }
    el.addEventListener(eventName, done);
  });
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends i$1{constructor(i){if(super(i),this.it=E,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===E||null==r)return this._t=void 0,this.it=r;if(r===T)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$3(e);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/select/select.css
var select_default = ":host {\n  --tag-max-size: 10ch;\n  --show-duration: 100ms;\n  --hide-duration: 100ms;\n}\n\n/* Add ellipses to multi select options */\n:host wa-tag::part(content) {\n  display: initial;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: var(--tag-max-size);\n}\n\n:host .disabled [part~='combobox'] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  outline: none;\n}\n\n:host .enabled:is(.open, :focus-within) [part~='combobox'] {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n/** The popup */\n.select {\n  flex: 1 1 auto;\n  display: inline-flex;\n  width: 100%;\n  position: relative;\n  vertical-align: middle;\n\n  /* Pass through from select to the popup */\n  --show-duration: inherit;\n  --hide-duration: inherit;\n\n  &::part(popup) {\n    z-index: 900;\n  }\n\n  &[data-current-placement^='top']::part(popup) {\n    transform-origin: bottom;\n  }\n\n  &[data-current-placement^='bottom']::part(popup) {\n    transform-origin: top;\n  }\n}\n\n/* Combobox */\n.combobox {\n  flex: 1;\n  display: flex;\n  width: 100%;\n  min-width: 0;\n  align-items: center;\n  justify-content: start;\n\n  min-height: var(--wa-form-control-height);\n\n  background-color: var(--wa-form-control-background-color);\n  border-color: var(--wa-form-control-border-color);\n  border-radius: var(--wa-form-control-border-radius);\n  border-style: var(--wa-form-control-border-style);\n  border-width: var(--wa-form-control-border-width);\n  color: var(--wa-form-control-value-color);\n  cursor: pointer;\n  font-family: inherit;\n  font-weight: var(--wa-form-control-value-font-weight);\n  line-height: var(--wa-form-control-value-line-height);\n  overflow: hidden;\n  padding: 0 var(--wa-form-control-padding-inline);\n  position: relative;\n  vertical-align: middle;\n  width: 100%;\n  transition:\n    background-color var(--wa-transition-normal),\n    border var(--wa-transition-normal),\n    outline var(--wa-transition-fast);\n  transition-timing-function: var(--wa-transition-easing);\n\n  :host([multiple]) .select:not(.placeholder-visible) & {\n    padding-inline-start: 0;\n    padding-block: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));\n  }\n\n  /* Pills */\n  :host([pill]) & {\n    border-radius: var(--wa-border-radius-pill);\n  }\n}\n\n/* Appearance modifiers */\n:host([appearance='outlined']) .combobox {\n  background-color: var(--wa-form-control-background-color);\n  border-color: var(--wa-form-control-border-color);\n}\n\n:host([appearance='filled']) .combobox {\n  background-color: var(--wa-color-neutral-fill-quiet);\n  border-color: var(--wa-color-neutral-fill-quiet);\n}\n\n:host([appearance='filled-outlined']) .combobox {\n  background-color: var(--wa-color-neutral-fill-quiet);\n  border-color: var(--wa-form-control-border-color);\n}\n\n.display-input {\n  position: relative;\n  width: 100%;\n  font: inherit;\n  border: none;\n  background: none;\n  line-height: var(--wa-form-control-value-line-height);\n  color: var(--wa-form-control-value-color);\n  cursor: inherit;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  -webkit-appearance: none;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::placeholder {\n    color: var(--wa-form-control-placeholder-color);\n  }\n}\n\n/* Visually hide the display input when multiple is enabled */\n:host([multiple]) .select:not(.placeholder-visible) .display-input {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n\n.value-input {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  padding: 0;\n  margin: 0;\n}\n\n.tags {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-inline-start: 0.25em;\n  gap: 0.25em;\n\n  &::slotted(wa-tag) {\n    cursor: pointer !important;\n  }\n\n  .disabled &,\n  .disabled &::slotted(wa-tag) {\n    cursor: not-allowed !important;\n  }\n}\n\n/* Start and End */\n\n.start,\n.end {\n  flex: 0;\n  display: inline-flex;\n  align-items: center;\n  color: var(--wa-color-neutral-on-quiet);\n}\n\n.end::slotted(*) {\n  margin-inline-start: var(--wa-form-control-padding-inline);\n}\n\n.start::slotted(*) {\n  margin-inline-end: var(--wa-form-control-padding-inline);\n}\n\n:host([multiple]) .start::slotted(*) {\n  margin-inline: var(--wa-form-control-padding-inline);\n}\n\n/* Clear button */\n[part~='clear-button'] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: inherit;\n  color: var(--wa-color-neutral-on-quiet);\n  border: none;\n  background: none;\n  padding: 0;\n  transition: color var(--wa-transition-normal);\n  cursor: pointer;\n  margin-inline-start: var(--wa-form-control-padding-inline);\n\n  &:focus {\n    outline: none;\n  }\n\n  @media (hover: hover) {\n    &:hover {\n      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));\n    }\n  }\n\n  &:active {\n    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));\n  }\n}\n\n/* Expand icon */\n.expand-icon {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  color: var(--wa-color-neutral-on-quiet);\n  transition: rotate var(--wa-transition-slow) ease;\n  rotate: 0deg;\n  margin-inline-start: var(--wa-form-control-padding-inline);\n\n  .open & {\n    rotate: -180deg;\n  }\n}\n\n/* Listbox */\n.listbox {\n  display: block;\n  position: relative;\n  font: inherit;\n  box-shadow: var(--wa-shadow-m);\n  background: var(--wa-color-surface-raised);\n  border-color: var(--wa-color-surface-border);\n  border-radius: var(--wa-border-radius-m);\n  border-style: var(--wa-border-style);\n  border-width: var(--wa-border-width-s);\n  padding-block: 0.5em;\n  padding-inline: 0;\n  overflow: auto;\n  overscroll-behavior: none;\n\n  /* Make sure it adheres to the popup's auto size */\n  max-width: var(--auto-size-available-width);\n  max-height: var(--auto-size-available-height);\n\n  &::slotted(wa-divider) {\n    --spacing: 0.5em;\n  }\n}\n\nslot:not([name])::slotted(small) {\n  display: block;\n  font-size: var(--wa-font-size-smaller);\n  font-weight: var(--wa-font-weight-semibold);\n  color: var(--wa-color-text-quiet);\n  padding-block: 0.5em;\n  padding-inline: 2.25em;\n}\n";

// src/components/select/select.ts
var WaSelect = class extends WebAwesomeFormAssociatedElement {
  constructor() {
    super(...arguments);
    this.assumeInteractionOn = ["blur", "input"];
    this.hasSlotController = new HasSlotController(this, "hint", "label");
    this.localize = new LocalizeController(this);
    this.typeToSelectString = "";
    this.displayLabel = "";
    this.selectedOptions = [];
    this.name = "";
    this._defaultValue = null;
    this.size = "medium";
    this.placeholder = "";
    this.multiple = false;
    this.maxOptionsVisible = 3;
    this.disabled = false;
    this.withClear = false;
    this.open = false;
    this.appearance = "outlined";
    this.pill = false;
    this.label = "";
    this.placement = "bottom";
    this.hint = "";
    this.withLabel = false;
    this.withHint = false;
    this.form = null;
    this.required = false;
    this.getTag = (option) => {
      return x`
        <wa-tag
          part="tag"
          exportparts="
            base:tag__base,
            content:tag__content,
            remove-button:tag__remove-button,
            remove-button__base:tag__remove-button__base
          "
          ?pill=${this.pill}
          size=${this.size}
          with-remove
        >
          ${option.label}
        </wa-tag>
      `;
    };
    this.handleDocumentFocusIn = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      const target = event.target;
      const isClearButton = target.closest('[part~="clear-button"]') !== null;
      const isButton = target.closest("wa-button") !== null;
      if (isClearButton || isButton) {
        return;
      }
      if (event.key === "Escape" && this.open) {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
      if (event.key === "Enter" || event.key === " " && this.typeToSelectString === "") {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!this.open) {
          this.show();
          return;
        }
        if (this.currentOption && !this.currentOption.disabled) {
          this.valueHasChanged = true;
          this.hasInteracted = true;
          if (this.multiple) {
            this.toggleOptionSelection(this.currentOption);
          } else {
            this.setSelectedOptions(this.currentOption);
          }
          this.updateComplete.then(() => {
            this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
            this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
          });
          if (!this.multiple) {
            this.hide();
            this.displayInput.focus({ preventScroll: true });
          }
        }
        return;
      }
      if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
        const allOptions = this.getAllOptions();
        const currentIndex = allOptions.indexOf(this.currentOption);
        let newIndex = Math.max(0, currentIndex);
        event.preventDefault();
        if (!this.open) {
          this.show();
          if (this.currentOption) {
            return;
          }
        }
        if (event.key === "ArrowDown") {
          newIndex = currentIndex + 1;
          if (newIndex > allOptions.length - 1) newIndex = 0;
        } else if (event.key === "ArrowUp") {
          newIndex = currentIndex - 1;
          if (newIndex < 0) newIndex = allOptions.length - 1;
        } else if (event.key === "Home") {
          newIndex = 0;
        } else if (event.key === "End") {
          newIndex = allOptions.length - 1;
        }
        this.setCurrentOption(allOptions[newIndex]);
      }
      if (event.key?.length === 1 || event.key === "Backspace") {
        const allOptions = this.getAllOptions();
        if (event.metaKey || event.ctrlKey || event.altKey) {
          return;
        }
        if (!this.open) {
          if (event.key === "Backspace") {
            return;
          }
          this.show();
        }
        event.stopPropagation();
        event.preventDefault();
        clearTimeout(this.typeToSelectTimeout);
        this.typeToSelectTimeout = window.setTimeout(() => this.typeToSelectString = "", 1e3);
        if (event.key === "Backspace") {
          this.typeToSelectString = this.typeToSelectString.slice(0, -1);
        } else {
          this.typeToSelectString += event.key.toLowerCase();
        }
        for (const option of allOptions) {
          const label = option.label.toLowerCase();
          if (label.startsWith(this.typeToSelectString)) {
            this.setCurrentOption(option);
            break;
          }
        }
      }
    };
    this.handleDocumentMouseDown = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
  }
  static get validators() {
    const validators = [
      RequiredValidator({
        validationElement: Object.assign(document.createElement("select"), { required: true })
      })
    ];
    return [...super.validators, ...validators];
  }
  /** Where to anchor native constraint validation */
  get validationTarget() {
    return this.valueInput;
  }
  set defaultValue(val) {
    this._defaultValue = this.convertDefaultValue(val);
  }
  get defaultValue() {
    return this.convertDefaultValue(this._defaultValue);
  }
  /**
   * @private
   * A converter for defaultValue from array to string if its multiple. Also fixes some hydration issues.
   */
  convertDefaultValue(val) {
    const isMultiple = this.multiple || this.hasAttribute("multiple");
    if (!isMultiple && Array.isArray(val)) {
      val = val[0];
    }
    return val;
  }
  set value(val) {
    let oldValue = this.value;
    if (val instanceof FormData) {
      val = val.getAll(this.name);
    }
    if (val != null && !Array.isArray(val)) {
      val = [val];
    }
    this._value = val ?? null;
    let newValue = this.value;
    if (newValue !== oldValue) {
      this.valueHasChanged = true;
      this.requestUpdate("value", oldValue);
    }
  }
  get value() {
    let value = this._value ?? this.defaultValue ?? null;
    if (value != null) {
      value = Array.isArray(value) ? value : [value];
    }
    if (value == null) {
      this.optionValues = /* @__PURE__ */ new Set(null);
    } else {
      this.optionValues = new Set(
        this.getAllOptions().filter((option) => !option.disabled).map((option) => option.value)
      );
    }
    let ret = value;
    if (value != null) {
      ret = value.filter((v) => this.optionValues.has(v));
      ret = this.multiple ? ret : ret[0];
      ret = ret ?? null;
    }
    return ret;
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleDefaultSlotChange();
    this.open = false;
  }
  updateDefaultValue() {
    const allOptions = this.getAllOptions();
    const defaultSelectedOptions = allOptions.filter((el) => el.hasAttribute("selected") || el.defaultSelected);
    if (defaultSelectedOptions.length > 0) {
      const selectedValues = defaultSelectedOptions.map((el) => el.value);
      this._defaultValue = this.multiple ? selectedValues : selectedValues[0];
    }
    if (this.hasAttribute("value")) {
      this._defaultValue = this.getAttribute("value") || null;
    }
  }
  addOpenListeners() {
    document.addEventListener("focusin", this.handleDocumentFocusIn);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
    if (this.getRootNode() !== document) {
      this.getRootNode().addEventListener("focusin", this.handleDocumentFocusIn);
    }
  }
  removeOpenListeners() {
    document.removeEventListener("focusin", this.handleDocumentFocusIn);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    if (this.getRootNode() !== document) {
      this.getRootNode().removeEventListener("focusin", this.handleDocumentFocusIn);
    }
  }
  handleFocus() {
    this.displayInput.setSelectionRange(0, 0);
  }
  handleLabelClick() {
    this.displayInput.focus();
  }
  handleComboboxClick(event) {
    event.preventDefault();
  }
  handleComboboxMouseDown(event) {
    const path = event.composedPath();
    const isButton = path.some((el) => el instanceof Element && el.tagName.toLowerCase() === "wa-button");
    if (this.disabled || isButton) {
      return;
    }
    event.preventDefault();
    this.displayInput.focus({ preventScroll: true });
    this.open = !this.open;
  }
  handleComboboxKeyDown(event) {
    event.stopPropagation();
    this.handleDocumentKeyDown(event);
  }
  handleClearClick(event) {
    event.stopPropagation();
    if (this.value !== null) {
      this.setSelectedOptions([]);
      this.displayInput.focus({ preventScroll: true });
      this.updateComplete.then(() => {
        this.dispatchEvent(new WaClearEvent());
        this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
        this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      });
    }
  }
  handleClearMouseDown(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  handleOptionClick(event) {
    const target = event.target;
    const option = target.closest("wa-option");
    if (option && !option.disabled) {
      this.hasInteracted = true;
      this.valueHasChanged = true;
      if (this.multiple) {
        this.toggleOptionSelection(option);
      } else {
        this.setSelectedOptions(option);
      }
      this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));
      this.requestUpdate("value");
      this.updateComplete.then(() => {
        this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
        this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      });
      if (!this.multiple) {
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
    }
  }
  /* @internal - used by options to update labels */
  handleDefaultSlotChange() {
    if (!customElements.get("wa-option")) {
      customElements.whenDefined("wa-option").then(() => this.handleDefaultSlotChange());
    }
    const allOptions = this.getAllOptions();
    this.optionValues = void 0;
    this.updateDefaultValue();
    let value = this.value;
    if (value == null || !this.valueHasChanged && !this.hasInteracted) {
      this.selectionChanged();
      return;
    }
    if (!Array.isArray(value)) {
      value = [value];
    }
    const selectedOptions = allOptions.filter((el) => value.includes(el.value));
    this.setSelectedOptions(selectedOptions);
  }
  handleTagRemove(event, directOption) {
    event.stopPropagation();
    if (this.disabled) return;
    let option = directOption;
    if (!option) {
      const tagElement = event.target.closest("wa-tag[part~=tag]");
      if (tagElement) {
        const tagsContainer = this.shadowRoot?.querySelector('[part="tags"]');
        if (tagsContainer) {
          const allTags = Array.from(tagsContainer.children);
          const index = allTags.indexOf(tagElement);
          if (index >= 0 && index < this.selectedOptions.length) {
            option = this.selectedOptions[index];
          }
        }
      }
    }
    if (option) {
      this.toggleOptionSelection(option, false);
      this.updateComplete.then(() => {
        this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
        this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      });
    }
  }
  // Gets an array of all `<wa-option>` elements
  getAllOptions() {
    if (!this?.querySelectorAll) {
      return [];
    }
    return [...this.querySelectorAll("wa-option")];
  }
  // Gets the first `<wa-option>` element
  getFirstOption() {
    return this.querySelector("wa-option");
  }
  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  setCurrentOption(option) {
    const allOptions = this.getAllOptions();
    allOptions.forEach((el) => {
      el.current = false;
      el.tabIndex = -1;
    });
    if (option) {
      this.currentOption = option;
      option.current = true;
      option.tabIndex = 0;
      option.focus();
    }
  }
  // Sets the selected option(s)
  setSelectedOptions(option) {
    const allOptions = this.getAllOptions();
    const newSelectedOptions = Array.isArray(option) ? option : [option];
    allOptions.forEach((el) => {
      if (newSelectedOptions.includes(el)) {
        return;
      }
      el.selected = false;
    });
    if (newSelectedOptions.length) {
      newSelectedOptions.forEach((el) => el.selected = true);
    }
    this.selectionChanged();
  }
  // Toggles an option's selected state
  toggleOptionSelection(option, force) {
    if (force === true || force === false) {
      option.selected = force;
    } else {
      option.selected = !option.selected;
    }
    this.selectionChanged();
  }
  // @internal This method must be called whenever the selection changes. It will update the selected options cache, the
  // current value, and the display value. The option component uses it internally to update labels as they change.
  selectionChanged() {
    const options = this.getAllOptions();
    this.selectedOptions = options.filter((el) => {
      if (!this.hasInteracted && !this.valueHasChanged) {
        const defaultValue = this.defaultValue;
        const defaultValues = Array.isArray(defaultValue) ? defaultValue : [defaultValue];
        return el.hasAttribute("selected") || el.defaultSelected || el.selected || defaultValues?.includes(el.value);
      }
      return el.selected;
    });
    let selectedValues = new Set(this.selectedOptions.map((el) => el.value));
    if (selectedValues.size > 0 || this._value) {
      const oldValue = this._value;
      if (this._value == null) {
        let value = this.defaultValue ?? [];
        this._value = Array.isArray(value) ? value : [value];
      }
      this._value = this._value?.filter((value) => !this.optionValues?.has(value)) ?? null;
      this._value?.unshift(...selectedValues);
      this.requestUpdate("value", oldValue);
    }
    if (this.multiple) {
      if (this.placeholder && !this.value?.length) {
        this.displayLabel = "";
      } else {
        this.displayLabel = this.localize.term("numOptionsSelected", this.selectedOptions.length);
      }
    } else {
      const selectedOption = this.selectedOptions[0];
      this.displayLabel = selectedOption?.label ?? "";
    }
    this.updateComplete.then(() => {
      this.updateValidity();
    });
  }
  get tags() {
    return this.selectedOptions.map((option, index) => {
      if (index < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const tag = this.getTag(option, index);
        if (!tag) return null;
        return typeof tag === "string" ? o(tag) : tag;
      } else if (index === this.maxOptionsVisible) {
        return x`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            >+${this.selectedOptions.length - index}</wa-tag
          >
        `;
      }
      return null;
    });
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("value")) {
      this.customStates.set("blank", !this.value);
    }
  }
  handleDisabledChange() {
    if (this.disabled && this.open) {
      this.open = false;
    }
  }
  handleValueChange() {
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];
    const selectedOptions = allOptions.filter((el) => value.includes(el.value));
    this.setSelectedOptions(selectedOptions);
    this.updateValidity();
  }
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());
      const waShowEvent = new WaShowEvent();
      this.dispatchEvent(waShowEvent);
      if (waShowEvent.defaultPrevented) {
        this.open = false;
        return;
      }
      this.addOpenListeners();
      this.listbox.hidden = false;
      this.popup.active = true;
      requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });
      await animateWithClass(this.popup.popup, "show");
      if (this.currentOption) {
        scrollIntoView(this.currentOption, this.listbox, "vertical", "auto");
      }
      this.dispatchEvent(new WaAfterShowEvent());
    } else {
      const waHideEvent = new WaHideEvent();
      this.dispatchEvent(waHideEvent);
      if (waHideEvent.defaultPrevented) {
        this.open = false;
        return;
      }
      this.removeOpenListeners();
      await animateWithClass(this.popup.popup, "hide");
      this.listbox.hidden = true;
      this.popup.active = false;
      this.dispatchEvent(new WaAfterHideEvent());
    }
  }
  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled) {
      this.open = false;
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "wa-after-show");
  }
  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = false;
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "wa-after-hide");
  }
  /** Sets focus on the control. */
  focus(options) {
    this.displayInput.focus(options);
  }
  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }
  formResetCallback() {
    this.value = this.defaultValue;
    super.formResetCallback();
    this.handleValueChange();
    this.updateComplete.then(() => {
      this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
      this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
    });
  }
  render() {
    const hasLabelSlot = this.hasUpdated ? this.hasSlotController.test("label") : this.withLabel;
    const hasHintSlot = this.hasUpdated ? this.hasSlotController.test("hint") : this.withHint;
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHint = this.hint ? true : !!hasHintSlot;
    const hasClearIcon = (this.hasUpdated || o$4) && this.withClear && !this.disabled && this.value && this.value.length > 0;
    const isPlaceholderVisible = Boolean(this.placeholder && (!this.value || this.value.length === 0));
    return x`
      <div
        part="form-control"
        class=${e$2({
      "form-control": true,
      "form-control-has-label": hasLabel
    })}
      >
        <label
          id="label"
          part="form-control-label label"
          class="label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${e$2({
      select: true,
      open: this.open,
      disabled: this.disabled,
      enabled: !this.disabled,
      multiple: this.multiple,
      "placeholder-visible": isPlaceholderVisible
    })}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
              @click=${this.handleComboboxClick}
            >
              <slot part="start" name="start" class="start"></slot>

              <input
                part="display-input"
                class="display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                ?required=${this.required}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-invalid=${!this.validity.valid}
                aria-controls="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? "true" : "false"}
                aria-describedby="hint"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
              />

              <!-- Tags need to wait for first hydration before populating otherwise it will create a hydration mismatch. -->
              ${this.multiple && this.hasUpdated ? x`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>` : ""}

              <input
                class="value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
              />

              ${hasClearIcon ? x`
                    <button
                      part="clear-button"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                      </slot>
                    </button>
                  ` : ""}

              <slot name="end" part="end" class="end"></slot>

              <slot name="expand-icon" part="expand-icon" class="expand-icon">
                <wa-icon library="system" name="chevron-down" variant="solid"></wa-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              aria-multiselectable=${this.multiple ? "true" : "false"}
              aria-labelledby="label"
              part="listbox"
              class="listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
            >
              <slot @slotchange=${this.handleDefaultSlotChange}></slot>
            </div>
          </wa-popup>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${e$2({
      "has-slotted": hasHint
    })}
          aria-hidden=${hasHint ? "false" : "true"}
          >${this.hint}</slot
        >
      </div>
    `;
  }
};
WaSelect.css = [select_default, form_control_default, size_default];
__decorateClass([
  e$4(".select")
], WaSelect.prototype, "popup", 2);
__decorateClass([
  e$4(".combobox")
], WaSelect.prototype, "combobox", 2);
__decorateClass([
  e$4(".display-input")
], WaSelect.prototype, "displayInput", 2);
__decorateClass([
  e$4(".value-input")
], WaSelect.prototype, "valueInput", 2);
__decorateClass([
  e$4(".listbox")
], WaSelect.prototype, "listbox", 2);
__decorateClass([
  r$1()
], WaSelect.prototype, "displayLabel", 2);
__decorateClass([
  r$1()
], WaSelect.prototype, "currentOption", 2);
__decorateClass([
  r$1()
], WaSelect.prototype, "selectedOptions", 2);
__decorateClass([
  r$1()
], WaSelect.prototype, "optionValues", 2);
__decorateClass([
  n$2()
], WaSelect.prototype, "name", 2);
__decorateClass([
  n$2({
    attribute: false
  })
], WaSelect.prototype, "defaultValue", 1);
__decorateClass([
  n$2({ attribute: "value", reflect: false })
], WaSelect.prototype, "value", 1);
__decorateClass([
  n$2({ reflect: true })
], WaSelect.prototype, "size", 2);
__decorateClass([
  n$2()
], WaSelect.prototype, "placeholder", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaSelect.prototype, "multiple", 2);
__decorateClass([
  n$2({ attribute: "max-options-visible", type: Number })
], WaSelect.prototype, "maxOptionsVisible", 2);
__decorateClass([
  n$2({ type: Boolean })
], WaSelect.prototype, "disabled", 2);
__decorateClass([
  n$2({ attribute: "with-clear", type: Boolean })
], WaSelect.prototype, "withClear", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaSelect.prototype, "open", 2);
__decorateClass([
  n$2({ reflect: true })
], WaSelect.prototype, "appearance", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaSelect.prototype, "pill", 2);
__decorateClass([
  n$2()
], WaSelect.prototype, "label", 2);
__decorateClass([
  n$2({ reflect: true })
], WaSelect.prototype, "placement", 2);
__decorateClass([
  n$2({ attribute: "hint" })
], WaSelect.prototype, "hint", 2);
__decorateClass([
  n$2({ attribute: "with-label", type: Boolean })
], WaSelect.prototype, "withLabel", 2);
__decorateClass([
  n$2({ attribute: "with-hint", type: Boolean })
], WaSelect.prototype, "withHint", 2);
__decorateClass([
  n$2({ reflect: true })
], WaSelect.prototype, "form", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaSelect.prototype, "required", 2);
__decorateClass([
  n$2({ attribute: false })
], WaSelect.prototype, "getTag", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], WaSelect.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], WaSelect.prototype, "handleValueChange", 1);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], WaSelect.prototype, "handleOpenChange", 1);
WaSelect = __decorateClass([
  t$1("wa-select")
], WaSelect);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/internal/get-text.ts
function getText(root, depth = 0) {
  if (!root || !globalThis.Node) {
    return "";
  }
  if (typeof root[Symbol.iterator] === "function") {
    let nodes = Array.isArray(root) ? root : [...root];
    return nodes.map((node2) => getText(node2, --depth)).join("");
  }
  let node = root;
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent ?? "";
  }
  if (node.nodeType === Node.ELEMENT_NODE) {
    let element = node;
    if (element.hasAttribute("slot") || element.matches("style, script")) {
      return "";
    }
    if (element instanceof HTMLSlotElement) {
      let assignedNodes = element.assignedNodes({ flatten: true });
      if (assignedNodes.length > 0) {
        return getText(assignedNodes, --depth);
      }
    }
    return depth > -1 ? getText(element, --depth) : element.textContent ?? "";
  }
  return node.hasChildNodes() ? getText(node.childNodes, --depth) : "";
}

// src/components/option/option.css
var option_default = ":host {\n  display: block;\n  color: var(--wa-color-text-normal);\n  -webkit-user-select: none;\n  user-select: none;\n\n  position: relative;\n  display: flex;\n  align-items: center;\n  font: inherit;\n  padding: 0.5em 1em 0.5em 0.25em;\n  line-height: var(--wa-line-height-condensed);\n  transition: fill var(--wa-transition-normal) var(--wa-transition-easing);\n  cursor: pointer;\n}\n\n:host(:focus) {\n  outline: none;\n}\n\n@media (hover: hover) {\n  :host(:not([disabled], :state(current)):is(:state(hover), :hover)) {\n    background-color: var(--wa-color-neutral-fill-normal);\n    color: var(--wa-color-neutral-on-normal);\n  }\n}\n\n:host(:state(current)),\n:host([disabled]:state(current)) {\n  background-color: var(--wa-color-brand-fill-loud);\n  color: var(--wa-color-brand-on-loud);\n  opacity: 1;\n}\n\n:host([disabled]) {\n  outline: none;\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.label {\n  flex: 1 1 auto;\n  display: inline-block;\n}\n\n.check {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--wa-font-size-smaller);\n  visibility: hidden;\n  width: 2em;\n}\n\n:host(:state(selected)) .check {\n  visibility: visible;\n}\n\n.start,\n.end {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n}\n\n.start::slotted(*) {\n  margin-inline-end: 0.5em;\n}\n\n.end::slotted(*) {\n  margin-inline-start: 0.5em;\n}\n\n@media (forced-colors: active) {\n  :host(:hover:not([aria-disabled='true'])) {\n    outline: dashed 1px SelectedItem;\n    outline-offset: -1px;\n  }\n}\n";

// src/components/option/option.ts
var WaOption = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    // @ts-expect-error - Controller is currently unused
    this.localize = new LocalizeController(this);
    this.isInitialized = false;
    this.current = false;
    this.value = "";
    this.disabled = false;
    this.selected = false;
    this.defaultSelected = false;
    this._label = "";
    this.defaultLabel = "";
    this.handleHover = (event) => {
      if (event.type === "mouseenter") {
        this.customStates.set("hover", true);
      } else if (event.type === "mouseleave") {
        this.customStates.set("hover", false);
      }
    };
  }
  set label(value) {
    const oldValue = this._label;
    this._label = value || "";
    if (this._label !== oldValue) {
      this.requestUpdate("label", oldValue);
    }
  }
  get label() {
    if (this._label) {
      return this._label;
    }
    if (!this.defaultLabel) {
      this.updateDefaultLabel();
    }
    return this.defaultLabel;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "option");
    this.setAttribute("aria-selected", "false");
    this.addEventListener("mouseenter", this.handleHover);
    this.addEventListener("mouseleave", this.handleHover);
    this.updateDefaultLabel();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("mouseenter", this.handleHover);
    this.removeEventListener("mouseleave", this.handleHover);
  }
  handleDefaultSlotChange() {
    this.updateDefaultLabel();
    if (this.isInitialized) {
      customElements.whenDefined("wa-select").then(() => {
        const controller = this.closest("wa-select");
        if (controller) {
          controller.handleDefaultSlotChange();
          controller.selectionChanged?.();
        }
      });
    } else {
      this.isInitialized = true;
    }
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("defaultSelected")) {
      if (!this.closest("wa-select")?.hasInteracted) {
        const oldVal = this.selected;
        this.selected = this.defaultSelected;
        this.requestUpdate("selected", oldVal);
      }
    }
    super.willUpdate(changedProperties);
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("disabled")) {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    if (changedProperties.has("selected")) {
      this.setAttribute("aria-selected", this.selected ? "true" : "false");
      this.customStates.set("selected", this.selected);
      this.handleDefaultSlotChange();
    }
    if (changedProperties.has("value")) {
      if (typeof this.value !== "string") {
        this.value = String(this.value);
      }
      this.handleDefaultSlotChange();
    }
    if (changedProperties.has("current")) {
      this.customStates.set("current", this.current);
    }
  }
  updateDefaultLabel() {
    let oldValue = this.defaultLabel;
    this.defaultLabel = getText(this).trim();
    let changed = this.defaultLabel !== oldValue;
    if (!this._label && changed) {
      this.requestUpdate("label", oldValue);
    }
    return changed;
  }
  render() {
    return x`
      <wa-icon
        part="checked-icon"
        class="check"
        name="check"
        library="system"
        variant="solid"
        aria-hidden="true"
      ></wa-icon>
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `;
  }
};
WaOption.css = option_default;
__decorateClass([
  e$4(".label")
], WaOption.prototype, "defaultSlot", 2);
__decorateClass([
  r$1()
], WaOption.prototype, "current", 2);
__decorateClass([
  n$2({ reflect: true })
], WaOption.prototype, "value", 2);
__decorateClass([
  n$2({ type: Boolean })
], WaOption.prototype, "disabled", 2);
__decorateClass([
  n$2({ type: Boolean, attribute: false })
], WaOption.prototype, "selected", 2);
__decorateClass([
  n$2({ type: Boolean, attribute: "selected" })
], WaOption.prototype, "defaultSelected", 2);
__decorateClass([
  n$2()
], WaOption.prototype, "label", 1);
__decorateClass([
  r$1()
], WaOption.prototype, "defaultLabel", 2);
WaOption = __decorateClass([
  t$1("wa-option")
], WaOption);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/switch/switch.css
var switch_default = ":host {\n  --height: var(--wa-form-control-toggle-size);\n  --width: calc(var(--height) * 1.75);\n  --thumb-size: 0.75em;\n\n  display: inline-flex;\n  line-height: var(--wa-form-control-value-line-height);\n}\n\nlabel {\n  position: relative;\n  display: flex;\n  align-items: center;\n  font: inherit;\n  color: var(--wa-form-control-value-color);\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.switch {\n  flex: 0 0 auto;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--width);\n  height: var(--height);\n  background-color: var(--wa-form-control-background-color);\n  border-color: var(--wa-form-control-border-color);\n  border-radius: var(--height);\n  border-style: var(--wa-form-control-border-style);\n  border-width: var(--wa-form-control-border-width);\n  transition-property: translate, background, border-color, box-shadow;\n  transition-duration: var(--wa-transition-normal);\n  transition-timing-function: var(--wa-transition-easing);\n}\n\n.switch .thumb {\n  aspect-ratio: 1 / 1;\n  width: var(--thumb-size);\n  height: var(--thumb-size);\n  background-color: var(--wa-form-control-border-color);\n  border-radius: 50%;\n  translate: calc((var(--width) - var(--height)) / -2);\n  transition: inherit;\n}\n\n.input {\n  position: absolute;\n  opacity: 0;\n  padding: 0;\n  margin: 0;\n  pointer-events: none;\n}\n\n/* Focus */\nlabel:not(.disabled) .input:focus-visible ~ .switch .thumb {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n/* Checked */\n.checked .switch {\n  background-color: var(--wa-form-control-activated-color);\n  border-color: var(--wa-form-control-activated-color);\n}\n\n.checked .switch .thumb {\n  background-color: var(--wa-color-surface-default);\n  translate: calc((var(--width) - var(--height)) / 2);\n}\n\n/* Disabled */\nlabel:has(> :disabled) {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n[part~='label'] {\n  display: inline-block;\n  line-height: var(--height);\n  margin-inline-start: 0.5em;\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n:host([required]) [part~='label']::after {\n  content: var(--wa-form-control-required-content);\n  color: var(--wa-form-control-required-content-color);\n  margin-inline-start: var(--wa-form-control-required-content-offset);\n}\n\n@media (forced-colors: active) {\n  :checked:enabled + .switch:hover .thumb,\n  :checked + .switch .thumb {\n    background-color: ButtonText;\n  }\n}\n";

// src/components/switch/switch.ts
var WaSwitch = class extends WebAwesomeFormAssociatedElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "hint");
    this.title = "";
    this.name = null;
    this._value = this.getAttribute("value") ?? null;
    this.size = "medium";
    this.disabled = false;
    this.checked = this.hasAttribute("checked");
    this.defaultChecked = this.hasAttribute("checked");
    this.form = null;
    this.required = false;
    this.hint = "";
    this.withHint = false;
  }
  static get validators() {
    return [...super.validators, MirrorValidator()];
  }
  /** The value of the switch, submitted as a name/value pair with form data. */
  get value() {
    return this._value ?? "on";
  }
  set value(val) {
    this._value = val;
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.handleValueOrCheckedChange();
  }
  handleClick() {
    this.hasInteracted = true;
    this.checked = !this.checked;
    this.updateComplete.then(() => {
      this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
    });
  }
  handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.checked = false;
      this.updateComplete.then(() => {
        this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
        this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
      });
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.checked = true;
      this.updateComplete.then(() => {
        this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
        this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
      });
    }
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    if (changedProperties.has("defaultChecked")) {
      if (!this.hasInteracted) {
        this.checked = this.defaultChecked;
      }
    }
    if (changedProperties.has("value") || changedProperties.has("checked")) {
      this.handleValueOrCheckedChange();
    }
  }
  handleValueOrCheckedChange() {
    this.setValue(this.checked ? this.value : null, this._value);
    this.updateValidity();
  }
  handleDefaultCheckedChange() {
    if (!this.hasInteracted && this.checked !== this.defaultChecked) {
      this.checked = this.defaultChecked;
      this.handleValueOrCheckedChange();
    }
  }
  handleStateChange() {
    if (this.hasUpdated) {
      this.input.checked = this.checked;
    }
    this.customStates.set("checked", this.checked);
    this.updateValidity();
  }
  handleDisabledChange() {
    this.updateValidity();
  }
  /** Simulates a click on the switch. */
  click() {
    this.input.click();
  }
  /** Sets focus on the switch. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the switch. */
  blur() {
    this.input.blur();
  }
  setValue(value, stateValue) {
    if (!this.checked) {
      this.internals.setFormValue(null, null);
      return;
    }
    this.internals.setFormValue(value ?? "on", stateValue);
  }
  formResetCallback() {
    this.checked = this.defaultChecked;
    super.formResetCallback();
    this.handleValueOrCheckedChange();
  }
  render() {
    const hasHintSlot = this.hasUpdated ? this.hasSlotController.test("hint") : this.withHint;
    const hasHint = this.hint ? true : !!hasHintSlot;
    return x`
      <label
        part="base"
        class=${e$2({
      checked: this.checked,
      disabled: this.disabled
    })}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${o$2(this.value)}
          .checked=${l(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked ? "true" : "false"}
          aria-describedby="hint"
          @click=${this.handleClick}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch">
          <span part="thumb" class="thumb"></span>
        </span>

        <slot part="label" class="label"></slot>
      </label>

      <slot
        id="hint"
        name="hint"
        part="hint"
        class=${e$2({
      "has-slotted": hasHint
    })}
        aria-hidden=${hasHint ? "false" : "true"}
        >${this.hint}</slot
      >
    `;
  }
};
WaSwitch.shadowRootOptions = { ...WebAwesomeFormAssociatedElement.shadowRootOptions, delegatesFocus: true };
WaSwitch.css = [form_control_default, size_default, switch_default];
__decorateClass([
  e$4('input[type="checkbox"]')
], WaSwitch.prototype, "input", 2);
__decorateClass([
  n$2()
], WaSwitch.prototype, "title", 2);
__decorateClass([
  n$2({ reflect: true })
], WaSwitch.prototype, "name", 2);
__decorateClass([
  n$2({ reflect: true })
], WaSwitch.prototype, "value", 1);
__decorateClass([
  n$2({ reflect: true })
], WaSwitch.prototype, "size", 2);
__decorateClass([
  n$2({ type: Boolean })
], WaSwitch.prototype, "disabled", 2);
__decorateClass([
  n$2({ type: Boolean, attribute: false })
], WaSwitch.prototype, "checked", 2);
__decorateClass([
  n$2({ type: Boolean, attribute: "checked", reflect: true })
], WaSwitch.prototype, "defaultChecked", 2);
__decorateClass([
  n$2({ reflect: true })
], WaSwitch.prototype, "form", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaSwitch.prototype, "required", 2);
__decorateClass([
  n$2({ attribute: "hint" })
], WaSwitch.prototype, "hint", 2);
__decorateClass([
  n$2({ attribute: "with-hint", type: Boolean })
], WaSwitch.prototype, "withHint", 2);
__decorateClass([
  watch("defaultChecked")
], WaSwitch.prototype, "handleDefaultCheckedChange", 1);
__decorateClass([
  watch(["checked"])
], WaSwitch.prototype, "handleStateChange", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], WaSwitch.prototype, "handleDisabledChange", 1);
WaSwitch = __decorateClass([
  t$1("wa-switch")
], WaSwitch);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/details/details.css
var details_default = ":host {\n  --spacing: var(--wa-space-m);\n  --show-duration: 200ms;\n  --hide-duration: 200ms;\n\n  display: block;\n}\n\ndetails {\n  display: block;\n  overflow-anchor: none;\n  border: var(--wa-panel-border-width) var(--wa-color-surface-border) var(--wa-panel-border-style);\n  background-color: var(--wa-color-surface-default);\n  border-radius: var(--wa-panel-border-radius);\n  color: var(--wa-color-text-normal);\n\n  /* Print styles */\n  @media print {\n    background: none;\n    border: solid var(--wa-border-width-s) var(--wa-color-surface-border);\n\n    summary {\n      list-style: none;\n    }\n  }\n}\n\n/* Appearance modifiers */\n:host([appearance='plain']) details {\n  background-color: transparent;\n  border-color: transparent;\n  border-radius: 0;\n}\n\n:host([appearance='outlined']) details {\n  background-color: var(--wa-color-surface-default);\n  border-color: var(--wa-color-surface-border);\n}\n\n:host([appearance='filled']) details {\n  background-color: var(--wa-color-neutral-fill-quiet);\n  border-color: transparent;\n}\n\n:host([appearance='filled-outlined']) details {\n  background-color: var(--wa-color-neutral-fill-quiet);\n  border-color: var(--wa-color-neutral-border-quiet);\n}\n\n:host([disabled]) details {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\nsummary {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--spacing);\n  padding: var(--spacing); /* Add padding here */\n  border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));\n  user-select: none;\n  -webkit-user-select: none;\n  cursor: pointer;\n\n  &::marker,\n  &::-webkit-details-marker {\n    display: none;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus-visible {\n    outline: var(--wa-focus-ring);\n    outline-offset: calc(var(--wa-panel-border-width) + var(--wa-focus-ring-offset));\n  }\n}\n\n:host([open]) summary {\n  border-end-start-radius: 0;\n  border-end-end-radius: 0;\n}\n\n/* 'Start' icon placement */\n:host([icon-placement='start']) summary {\n  flex-direction: row-reverse;\n  justify-content: start;\n}\n\n[part~='icon'] {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  color: var(--wa-color-text-quiet);\n  transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);\n}\n\n:host([open]) [part~='icon'] {\n  rotate: 90deg;\n}\n\n:host([open]:dir(rtl)) [part~='icon'] {\n  rotate: -90deg;\n}\n\n:host([open]) slot[name='expand-icon'],\n:host(:not([open])) slot[name='collapse-icon'] {\n  display: none;\n}\n\n.body.animating {\n  overflow: hidden;\n}\n\n.content {\n  display: block;\n  padding-block-start: var(--spacing);\n  padding-inline: var(--spacing); /* Add horizontal padding */\n  padding-block-end: var(--spacing); /* Add bottom padding */\n}\n";

// src/components/details/details.ts
var WaDetails = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.isAnimating = false;
    this.open = false;
    this.disabled = false;
    this.appearance = "outlined";
    this.iconPlacement = "end";
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.detailsObserver?.disconnect();
  }
  firstUpdated() {
    this.body.style.height = this.open ? "auto" : "0";
    if (this.open) {
      this.details.open = true;
    }
    this.detailsObserver = new MutationObserver((changes) => {
      for (const change of changes) {
        if (change.type === "attributes" && change.attributeName === "open") {
          if (this.details.open) {
            this.show();
          } else {
            this.hide();
          }
        }
      }
    });
    this.detailsObserver.observe(this.details, { attributes: true });
  }
  updated(changedProperties) {
    if (changedProperties.has("isAnimating")) {
      this.customStates.set("animating", this.isAnimating);
    }
  }
  handleSummaryClick(event) {
    const eventPath = event.composedPath();
    const hasInteractiveElement = eventPath.some((element) => {
      if (!(element instanceof HTMLElement)) return false;
      const tagName = element.tagName?.toLowerCase();
      if (["a", "button", "input", "textarea", "select"].includes(tagName)) {
        return true;
      }
      if (element instanceof WebAwesomeFormAssociatedElement) {
        return !("disabled" in element) || !element.disabled;
      }
      return false;
    });
    if (hasInteractiveElement) {
      return;
    }
    event.preventDefault();
    if (!this.disabled) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
      this.header.focus();
    }
  }
  handleSummaryKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      this.hide();
    }
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      this.show();
    }
  }
  /** Closes other <wa-details> elements in the same document when they have the same name. */
  closeOthersWithSameName() {
    if (!this.name) return;
    const root = this.getRootNode();
    const otherDetails = root.querySelectorAll(`wa-details[name="${this.name}"]`);
    otherDetails.forEach((detail) => {
      if (detail !== this && detail.open) {
        detail.open = false;
      }
    });
  }
  async handleOpenChange() {
    if (this.open) {
      this.details.open = true;
      const waShow = new WaShowEvent();
      this.dispatchEvent(waShow);
      if (waShow.defaultPrevented) {
        this.open = false;
        this.details.open = false;
        return;
      }
      this.closeOthersWithSameName();
      this.isAnimating = true;
      const duration = parseDuration(getComputedStyle(this.body).getPropertyValue("--show-duration"));
      await animate(
        this.body,
        [
          { height: "0", opacity: "0" },
          { height: `${this.body.scrollHeight}px`, opacity: "1" }
        ],
        {
          duration,
          easing: "linear"
        }
      );
      this.body.style.height = "auto";
      this.isAnimating = false;
      this.dispatchEvent(new WaAfterShowEvent());
    } else {
      const waHide = new WaHideEvent();
      this.dispatchEvent(waHide);
      if (waHide.defaultPrevented) {
        this.details.open = true;
        this.open = true;
        return;
      }
      this.isAnimating = true;
      const duration = parseDuration(getComputedStyle(this.body).getPropertyValue("--hide-duration"));
      await animate(
        this.body,
        [
          { height: `${this.body.scrollHeight}px`, opacity: "1" },
          { height: "0", opacity: "0" }
        ],
        { duration, easing: "linear" }
      );
      this.body.style.height = "auto";
      this.isAnimating = false;
      this.details.open = false;
      this.dispatchEvent(new WaAfterHideEvent());
    }
  }
  /** Shows the details. */
  async show() {
    if (this.open || this.disabled) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "wa-after-show");
  }
  /** Hides the details */
  async hide() {
    if (!this.open || this.disabled) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "wa-after-hide");
  }
  render() {
    const isRtl = !this.hasUpdated ? this.dir === "rtl" : this.localize.dir() === "rtl";
    return x`
      <details part="base">
        <summary
          part="header"
          role="button"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls="content"
          aria-disabled=${this.disabled ? "true" : "false"}
          tabindex=${this.disabled ? "-1" : "0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary">${this.summary}</slot>

          <span part="icon">
            <slot name="expand-icon">
              <wa-icon library="system" variant="solid" name=${isRtl ? "chevron-left" : "chevron-right"}></wa-icon>
            </slot>
            <slot name="collapse-icon">
              <wa-icon library="system" variant="solid" name=${isRtl ? "chevron-left" : "chevron-right"}></wa-icon>
            </slot>
          </span>
        </summary>

        <div
          class=${e$2({
      body: true,
      animating: this.isAnimating
    })}
          role="region"
          aria-labelledby="header"
        >
          <slot part="content" id="content" class="content"></slot>
        </div>
      </details>
    `;
  }
};
WaDetails.css = details_default;
__decorateClass([
  e$4("details")
], WaDetails.prototype, "details", 2);
__decorateClass([
  e$4("summary")
], WaDetails.prototype, "header", 2);
__decorateClass([
  e$4(".body")
], WaDetails.prototype, "body", 2);
__decorateClass([
  e$4(".expand-icon-slot")
], WaDetails.prototype, "expandIconSlot", 2);
__decorateClass([
  r$1()
], WaDetails.prototype, "isAnimating", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaDetails.prototype, "open", 2);
__decorateClass([
  n$2()
], WaDetails.prototype, "summary", 2);
__decorateClass([
  n$2({ reflect: true })
], WaDetails.prototype, "name", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaDetails.prototype, "disabled", 2);
__decorateClass([
  n$2({ reflect: true })
], WaDetails.prototype, "appearance", 2);
__decorateClass([
  n$2({ attribute: "icon-placement", reflect: true })
], WaDetails.prototype, "iconPlacement", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], WaDetails.prototype, "handleOpenChange", 1);
WaDetails = __decorateClass([
  t$1("wa-details")
], WaDetails);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/tooltip/tooltip.css
var tooltip_default = ":host {\n  --max-width: 30ch;\n\n  /** These styles are added so we don't interfere in the DOM. */\n  display: inline-block;\n  position: absolute;\n\n  /** Defaults for inherited CSS properties */\n  color: var(--wa-tooltip-content-color);\n  font-size: var(--wa-tooltip-font-size);\n  line-height: var(--wa-tooltip-line-height);\n  text-align: start;\n  white-space: normal;\n}\n\n.tooltip {\n  --arrow-size: var(--wa-tooltip-arrow-size);\n  --arrow-color: var(--wa-tooltip-background-color);\n}\n\n.tooltip::part(popup) {\n  z-index: 1000;\n}\n\n.tooltip[placement^='top']::part(popup) {\n  transform-origin: bottom;\n}\n\n.tooltip[placement^='bottom']::part(popup) {\n  transform-origin: top;\n}\n\n.tooltip[placement^='left']::part(popup) {\n  transform-origin: right;\n}\n\n.tooltip[placement^='right']::part(popup) {\n  transform-origin: left;\n}\n\n.body {\n  display: block;\n  width: max-content;\n  max-width: var(--max-width);\n  border-radius: var(--wa-tooltip-border-radius);\n  background-color: var(--wa-tooltip-background-color);\n  border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);\n  padding: 0.25em 0.5em;\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n.tooltip::part(arrow) {\n  border-bottom: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);\n  border-right: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);\n}\n";

// src/components/tooltip/tooltip.ts
var WaTooltip = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.placement = "top";
    this.disabled = false;
    this.distance = 8;
    this.open = false;
    this.skidding = 0;
    this.showDelay = 150;
    this.hideDelay = 0;
    this.trigger = "hover focus";
    this.withoutArrow = false;
    this.for = null;
    this.anchor = null;
    this.eventController = new AbortController();
    this.handleBlur = () => {
      if (this.hasTrigger("focus")) {
        this.hide();
      }
    };
    this.handleClick = () => {
      if (this.hasTrigger("click")) {
        if (this.open) {
          this.hide();
        } else {
          this.show();
        }
      }
    };
    this.handleFocus = () => {
      if (this.hasTrigger("focus")) {
        this.show();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        this.hide();
      }
    };
    this.handleMouseOver = () => {
      if (this.hasTrigger("hover")) {
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = window.setTimeout(() => this.show(), this.showDelay);
      }
    };
    this.handleMouseOut = () => {
      if (this.hasTrigger("hover")) {
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = window.setTimeout(() => this.hide(), this.hideDelay);
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.eventController.signal.aborted) {
      this.eventController = new AbortController();
    }
    if (this.open) {
      this.open = false;
      this.updateComplete.then(() => {
        this.open = true;
      });
    }
    if (!this.id) {
      this.id = uniqueId("wa-tooltip-");
    }
    if (this.for && this.anchor) {
      this.anchor = null;
      this.handleForChange();
    } else if (this.for) {
      this.handleForChange();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    this.eventController.abort();
    if (this.anchor) {
      this.removeFromAriaLabelledBy(this.anchor, this.id);
    }
  }
  firstUpdated() {
    this.body.hidden = !this.open;
    if (this.open) {
      this.popup.active = true;
      this.popup.reposition();
    }
  }
  hasTrigger(triggerType) {
    const triggers = this.trigger.split(" ");
    return triggers.includes(triggerType);
  }
  /** Adds the tooltip ID to the aria-labelledby attribute */
  addToAriaLabelledBy(element, id) {
    const currentLabel = element.getAttribute("aria-labelledby") || "";
    const labels = currentLabel.split(/\s+/).filter(Boolean);
    if (!labels.includes(id)) {
      labels.push(id);
      element.setAttribute("aria-labelledby", labels.join(" "));
    }
  }
  /** Removes the tooltip ID from the aria-labelledby attribute */
  removeFromAriaLabelledBy(element, id) {
    const currentLabel = element.getAttribute("aria-labelledby") || "";
    const labels = currentLabel.split(/\s+/).filter(Boolean);
    const filteredLabels = labels.filter((label) => label !== id);
    if (filteredLabels.length > 0) {
      element.setAttribute("aria-labelledby", filteredLabels.join(" "));
    } else {
      element.removeAttribute("aria-labelledby");
    }
  }
  async handleOpenChange() {
    if (this.open) {
      if (this.disabled) {
        return;
      }
      const waShowEvent = new WaShowEvent();
      this.dispatchEvent(waShowEvent);
      if (waShowEvent.defaultPrevented) {
        this.open = false;
        return;
      }
      document.addEventListener("keydown", this.handleDocumentKeyDown, { signal: this.eventController.signal });
      this.body.hidden = false;
      this.popup.active = true;
      await animateWithClass(this.popup.popup, "show-with-scale");
      this.popup.reposition();
      this.dispatchEvent(new WaAfterShowEvent());
    } else {
      const waHideEvent = new WaHideEvent();
      this.dispatchEvent(waHideEvent);
      if (waHideEvent.defaultPrevented) {
        this.open = false;
        return;
      }
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      await animateWithClass(this.popup.popup, "hide-with-scale");
      this.popup.active = false;
      this.body.hidden = true;
      this.dispatchEvent(new WaAfterHideEvent());
    }
  }
  handleForChange() {
    const rootNode = this.getRootNode();
    if (!rootNode) {
      return;
    }
    const newAnchor = this.for ? rootNode.getElementById(this.for) : null;
    const oldAnchor = this.anchor;
    if (newAnchor === oldAnchor) {
      return;
    }
    const { signal } = this.eventController;
    if (newAnchor) {
      this.addToAriaLabelledBy(newAnchor, this.id);
      newAnchor.addEventListener("blur", this.handleBlur, { capture: true, signal });
      newAnchor.addEventListener("focus", this.handleFocus, { capture: true, signal });
      newAnchor.addEventListener("click", this.handleClick, { signal });
      newAnchor.addEventListener("mouseover", this.handleMouseOver, { signal });
      newAnchor.addEventListener("mouseout", this.handleMouseOut, { signal });
    }
    if (oldAnchor) {
      this.removeFromAriaLabelledBy(oldAnchor, this.id);
      oldAnchor.removeEventListener("blur", this.handleBlur, { capture: true });
      oldAnchor.removeEventListener("focus", this.handleFocus, { capture: true });
      oldAnchor.removeEventListener("click", this.handleClick);
      oldAnchor.removeEventListener("mouseover", this.handleMouseOver);
      oldAnchor.removeEventListener("mouseout", this.handleMouseOut);
    }
    this.anchor = newAnchor;
  }
  async handleOptionsChange() {
    if (this.hasUpdated) {
      await this.updateComplete;
      this.popup.reposition();
    }
  }
  handleDisabledChange() {
    if (this.disabled && this.open) {
      this.hide();
    }
  }
  /** Shows the tooltip. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "wa-after-show");
  }
  /** Hides the tooltip */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "wa-after-hide");
  }
  render() {
    return x`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${e$2({
      tooltip: true,
      "tooltip-open": this.open
    })}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `;
  }
};
WaTooltip.css = tooltip_default;
WaTooltip.dependencies = { "wa-popup": WaPopup };
__decorateClass([
  e$4("slot:not([name])")
], WaTooltip.prototype, "defaultSlot", 2);
__decorateClass([
  e$4(".body")
], WaTooltip.prototype, "body", 2);
__decorateClass([
  e$4("wa-popup")
], WaTooltip.prototype, "popup", 2);
__decorateClass([
  n$2()
], WaTooltip.prototype, "placement", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaTooltip.prototype, "disabled", 2);
__decorateClass([
  n$2({ type: Number })
], WaTooltip.prototype, "distance", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaTooltip.prototype, "open", 2);
__decorateClass([
  n$2({ type: Number })
], WaTooltip.prototype, "skidding", 2);
__decorateClass([
  n$2({ attribute: "show-delay", type: Number })
], WaTooltip.prototype, "showDelay", 2);
__decorateClass([
  n$2({ attribute: "hide-delay", type: Number })
], WaTooltip.prototype, "hideDelay", 2);
__decorateClass([
  n$2()
], WaTooltip.prototype, "trigger", 2);
__decorateClass([
  n$2({ attribute: "without-arrow", type: Boolean, reflect: true })
], WaTooltip.prototype, "withoutArrow", 2);
__decorateClass([
  n$2()
], WaTooltip.prototype, "for", 2);
__decorateClass([
  r$1()
], WaTooltip.prototype, "anchor", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], WaTooltip.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("for")
], WaTooltip.prototype, "handleForChange", 1);
__decorateClass([
  watch(["distance", "placement", "skidding"])
], WaTooltip.prototype, "handleOptionsChange", 1);
__decorateClass([
  watch("disabled")
], WaTooltip.prototype, "handleDisabledChange", 1);
WaTooltip = __decorateClass([
  t$1("wa-tooltip")
], WaTooltip);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/checkbox/checkbox.css
var checkbox_default = ":host {\n  --checked-icon-color: var(--wa-color-brand-on-loud);\n  --checked-icon-scale: 0.8;\n\n  display: inline-flex;\n  color: var(--wa-form-control-value-color);\n  font-family: inherit;\n  font-weight: var(--wa-form-control-value-font-weight);\n  line-height: var(--wa-form-control-value-line-height);\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n[part~='control'] {\n  display: inline-flex;\n  flex: 0 0 auto;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  width: var(--wa-form-control-toggle-size);\n  height: var(--wa-form-control-toggle-size);\n  border-color: var(--wa-form-control-border-color);\n  border-radius: min(\n    calc(var(--wa-form-control-toggle-size) * 0.375),\n    var(--wa-border-radius-s)\n  ); /* min prevents entirely circular checkbox */\n  border-style: var(--wa-border-style);\n  border-width: var(--wa-form-control-border-width);\n  background-color: var(--wa-form-control-background-color);\n  transition:\n    background var(--wa-transition-normal),\n    border-color var(--wa-transition-fast),\n    box-shadow var(--wa-transition-fast),\n    color var(--wa-transition-fast);\n  transition-timing-function: var(--wa-transition-easing);\n\n  margin-inline-end: 0.5em;\n}\n\n[part~='base'] {\n  display: flex;\n  align-items: flex-start;\n  position: relative;\n  color: currentColor;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n[part~='label'] {\n  display: inline;\n}\n\n/* Checked */\n[part~='control']:has(:checked, :indeterminate) {\n  color: var(--checked-icon-color);\n  border-color: var(--wa-form-control-activated-color);\n  background-color: var(--wa-form-control-activated-color);\n}\n\n/* Focus */\n[part~='control']:has(> input:focus-visible:not(:disabled)) {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n/* Disabled */\n:host [part~='base']:has(input:disabled) {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\ninput {\n  position: absolute;\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  pointer-events: none;\n}\n\n[part~='icon'] {\n  display: flex;\n  scale: var(--checked-icon-scale);\n\n  /* Without this, Safari renders the icon slightly to the left */\n  &::part(svg) {\n    translate: 0.0009765625em;\n  }\n\n  input:not(:checked, :indeterminate) + & {\n    visibility: hidden;\n  }\n}\n\n:host([required]) [part~='label']::after {\n  content: var(--wa-form-control-required-content);\n  color: var(--wa-form-control-required-content-color);\n  margin-inline-start: var(--wa-form-control-required-content-offset);\n}\n";

// src/components/checkbox/checkbox.ts
var WaCheckbox = class extends WebAwesomeFormAssociatedElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "hint");
    this.title = "";
    this.name = "";
    this._value = this.getAttribute("value") ?? null;
    this.size = "medium";
    this.disabled = false;
    this.indeterminate = false;
    this.checked = this.hasAttribute("checked");
    this.defaultChecked = this.hasAttribute("checked");
    this.form = null;
    this.required = false;
    this.hint = "";
  }
  static get validators() {
    const validators = [
      RequiredValidator({
        validationProperty: "checked",
        // Use a checkbox so we get "free" translation strings.
        validationElement: Object.assign(document.createElement("input"), {
          type: "checkbox",
          required: true
        })
      })
    ];
    return [...super.validators, ...validators];
  }
  /** The value of the checkbox, submitted as a name/value pair with form data. */
  get value() {
    const val = this._value || "on";
    return this.checked ? val : null;
  }
  set value(val) {
    this._value = val;
  }
  handleClick() {
    this.hasInteracted = true;
    this.checked = !this.checked;
    this.indeterminate = false;
    this.updateComplete.then(() => {
      this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
    });
  }
  handleDefaultCheckedChange() {
    if (!this.hasInteracted && this.checked !== this.defaultChecked) {
      this.checked = this.defaultChecked;
      this.handleValueOrCheckedChange();
    }
  }
  handleValueOrCheckedChange() {
    this.setValue(this.checked ? this.value : null, this._value);
    this.updateValidity();
  }
  handleStateChange() {
    if (this.hasUpdated) {
      this.input.checked = this.checked;
      this.input.indeterminate = this.indeterminate;
    }
    this.customStates.set("checked", this.checked);
    this.customStates.set("indeterminate", this.indeterminate);
    this.updateValidity();
  }
  handleDisabledChange() {
    this.customStates.set("disabled", this.disabled);
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    if (changedProperties.has("defaultChecked")) {
      if (!this.hasInteracted) {
        this.checked = this.defaultChecked;
      }
    }
    if (changedProperties.has("value") || changedProperties.has("checked")) {
      this.handleValueOrCheckedChange();
    }
  }
  formResetCallback() {
    this.checked = this.defaultChecked;
    super.formResetCallback();
    this.handleValueOrCheckedChange();
  }
  /** Simulates a click on the checkbox. */
  click() {
    this.input.click();
  }
  /** Sets focus on the checkbox. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the checkbox. */
  blur() {
    this.input.blur();
  }
  render() {
    const hasHintSlot = this.hasSlotController.test("hint");
    const hasHint = this.hint ? true : !!hasHintSlot;
    const isIndeterminate = !this.checked && this.indeterminate;
    const iconName = isIndeterminate ? "indeterminate" : "check";
    const iconState = isIndeterminate ? "indeterminate" : "check";
    return x`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${o$2(this._value)}
            .indeterminate=${l(this.indeterminate)}
            .checked=${l(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${iconState}-icon icon" library="system" name=${iconName}></wa-icon>
        </span>

        <slot part="label"></slot>
      </label>

      <slot
        id="hint"
        part="hint"
        name="hint"
        aria-hidden=${hasHint ? "false" : "true"}
        class="${e$2({ "has-slotted": hasHint })}"
      >
        ${this.hint}
      </slot>
    `;
  }
};
WaCheckbox.css = [form_control_default, size_default, checkbox_default];
WaCheckbox.shadowRootOptions = { ...WebAwesomeFormAssociatedElement.shadowRootOptions, delegatesFocus: true };
__decorateClass([
  e$4('input[type="checkbox"]')
], WaCheckbox.prototype, "input", 2);
__decorateClass([
  n$2()
], WaCheckbox.prototype, "title", 2);
__decorateClass([
  n$2({ reflect: true })
], WaCheckbox.prototype, "name", 2);
__decorateClass([
  n$2({ reflect: true })
], WaCheckbox.prototype, "value", 1);
__decorateClass([
  n$2({ reflect: true })
], WaCheckbox.prototype, "size", 2);
__decorateClass([
  n$2({ type: Boolean })
], WaCheckbox.prototype, "disabled", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaCheckbox.prototype, "indeterminate", 2);
__decorateClass([
  n$2({ type: Boolean, attribute: false })
], WaCheckbox.prototype, "checked", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true, attribute: "checked" })
], WaCheckbox.prototype, "defaultChecked", 2);
__decorateClass([
  n$2({ reflect: true })
], WaCheckbox.prototype, "form", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaCheckbox.prototype, "required", 2);
__decorateClass([
  n$2()
], WaCheckbox.prototype, "hint", 2);
__decorateClass([
  watch("defaultChecked")
], WaCheckbox.prototype, "handleDefaultCheckedChange", 1);
__decorateClass([
  watch(["checked", "indeterminate"])
], WaCheckbox.prototype, "handleStateChange", 1);
__decorateClass([
  watch("disabled")
], WaCheckbox.prototype, "handleDisabledChange", 1);
WaCheckbox = __decorateClass([
  t$1("wa-checkbox")
], WaCheckbox);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/internal/parse.ts
function parseSpaceDelimitedTokens(input) {
  return input.split(" ").map((token) => token.trim()).filter((token) => token !== "");
}

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/drawer/drawer.css
var drawer_default = ":host {\n  --size: 25rem;\n  --spacing: var(--wa-space-l);\n  --show-duration: 200ms;\n  --hide-duration: 200ms;\n\n  display: none;\n}\n\n:host([open]) {\n  display: block;\n}\n\n.drawer {\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  inset-inline-start: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  overflow: hidden;\n  background-color: var(--wa-color-surface-raised);\n  border: none;\n  box-shadow: var(--wa-shadow-l);\n  overflow: auto;\n  padding: 0;\n  margin: 0;\n  animation-duration: var(--show-duration);\n  animation-timing-function: ease;\n\n  &.show::backdrop {\n    animation: show-backdrop var(--show-duration, 200ms) ease;\n  }\n\n  &.hide::backdrop {\n    animation: show-backdrop var(--hide-duration, 200ms) ease reverse;\n  }\n\n  &.show.top {\n    animation: show-drawer-from-top var(--show-duration) ease;\n  }\n\n  &.hide.top {\n    animation: show-drawer-from-top var(--hide-duration) ease reverse;\n  }\n\n  &.show.end {\n    animation: show-drawer-from-end var(--show-duration) ease;\n\n    &:dir(rtl) {\n      animation-name: show-drawer-from-start;\n    }\n  }\n\n  &.hide.end {\n    animation: show-drawer-from-end var(--hide-duration) ease reverse;\n\n    &:dir(rtl) {\n      animation-name: show-drawer-from-start;\n    }\n  }\n\n  &.show.bottom {\n    animation: show-drawer-from-bottom var(--show-duration) ease;\n  }\n\n  &.hide.bottom {\n    animation: show-drawer-from-bottom var(--hide-duration) ease reverse;\n  }\n\n  &.show.start {\n    animation: show-drawer-from-start var(--show-duration) ease;\n\n    &:dir(rtl) {\n      animation-name: show-drawer-from-end;\n    }\n  }\n\n  &.hide.start {\n    animation: show-drawer-from-start var(--hide-duration) ease reverse;\n\n    &:dir(rtl) {\n      animation-name: show-drawer-from-end;\n    }\n  }\n\n  &.pulse {\n    animation: pulse 250ms ease;\n  }\n}\n\n.drawer:focus {\n  outline: none;\n}\n\n.top {\n  top: 0;\n  inset-inline-end: auto;\n  bottom: auto;\n  inset-inline-start: 0;\n  width: 100%;\n  height: var(--size);\n}\n\n.end {\n  top: 0;\n  inset-inline-end: 0;\n  bottom: auto;\n  inset-inline-start: auto;\n  width: var(--size);\n  height: 100%;\n}\n\n.bottom {\n  top: auto;\n  inset-inline-end: auto;\n  bottom: 0;\n  inset-inline-start: 0;\n  width: 100%;\n  height: var(--size);\n}\n\n.start {\n  top: 0;\n  inset-inline-end: auto;\n  bottom: auto;\n  inset-inline-start: 0;\n  width: var(--size);\n  height: 100%;\n}\n\n.header {\n  display: flex;\n  flex-wrap: nowrap;\n  padding-inline-start: var(--spacing);\n  padding-block-end: 0;\n\n  /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */\n  padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));\n  padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));\n}\n\n.title {\n  align-self: center;\n  flex: 1 1 auto;\n  font: inherit;\n  font-size: var(--wa-font-size-l);\n  font-weight: var(--wa-font-weight-heading);\n  line-height: var(--wa-line-height-condensed);\n  margin: 0;\n}\n\n.header-actions {\n  align-self: start;\n  display: flex;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  justify-content: end;\n  gap: var(--wa-space-2xs);\n  padding-inline-start: var(--spacing);\n}\n\n.header-actions wa-button,\n.header-actions ::slotted(wa-button) {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n}\n\n.body {\n  flex: 1 1 auto;\n  display: block;\n  padding: var(--spacing);\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus-visible {\n    outline: var(--wa-focus-ring);\n    outline-offset: var(--wa-focus-ring-offset);\n  }\n}\n\n.footer {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--wa-space-xs);\n  justify-content: end;\n  padding: var(--spacing);\n  padding-block-start: 0;\n}\n\n.footer ::slotted(wa-button:not(:last-of-type)) {\n  margin-inline-end: var(--wa-spacing-xs);\n}\n\n.drawer::backdrop {\n  /*\n      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can\n      remove the fallback values here.\n    */\n  background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));\n}\n\n@keyframes pulse {\n  0% {\n    scale: 1;\n  }\n  50% {\n    scale: 1.01;\n  }\n  100% {\n    scale: 1;\n  }\n}\n\n@keyframes show-drawer {\n  from {\n    opacity: 0;\n    scale: 0.8;\n  }\n  to {\n    opacity: 1;\n    scale: 1;\n  }\n}\n\n@keyframes show-drawer-from-top {\n  from {\n    opacity: 0;\n    translate: 0 -100%;\n  }\n  to {\n    opacity: 1;\n    translate: 0 0;\n  }\n}\n\n@keyframes show-drawer-from-end {\n  from {\n    opacity: 0;\n    translate: 100%;\n  }\n  to {\n    opacity: 1;\n    translate: 0 0;\n  }\n}\n\n@keyframes show-drawer-from-bottom {\n  from {\n    opacity: 0;\n    translate: 0 100%;\n  }\n  to {\n    opacity: 1;\n    translate: 0 0;\n  }\n}\n\n@keyframes show-drawer-from-start {\n  from {\n    opacity: 0;\n    translate: -100% 0;\n  }\n  to {\n    opacity: 1;\n    translate: 0 0;\n  }\n}\n\n@keyframes show-backdrop {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@media (forced-colors: active) {\n  .drawer {\n    border: solid 1px white;\n  }\n}\n";

// src/components/drawer/drawer.ts
var WaDrawer = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.hasSlotController = new HasSlotController(this, "footer", "header-actions", "label");
    this.open = false;
    this.label = "";
    this.placement = "end";
    this.withoutHeader = false;
    this.lightDismiss = true;
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape" && this.open) {
        event.preventDefault();
        event.stopPropagation();
        this.requestClose(this.drawer);
      }
    };
  }
  firstUpdated() {
    if (this.open) {
      this.addOpenListeners();
      this.drawer.showModal();
      lockBodyScrolling(this);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unlockBodyScrolling(this);
    this.removeOpenListeners();
  }
  async requestClose(source) {
    const waHideEvent = new WaHideEvent({ source });
    this.dispatchEvent(waHideEvent);
    if (waHideEvent.defaultPrevented) {
      this.open = true;
      animateWithClass(this.drawer, "pulse");
      return;
    }
    this.removeOpenListeners();
    await animateWithClass(this.drawer, "hide");
    this.open = false;
    this.drawer.close();
    unlockBodyScrolling(this);
    const trigger = this.originalTrigger;
    if (typeof trigger?.focus === "function") {
      setTimeout(() => trigger.focus());
    }
    this.dispatchEvent(new WaAfterHideEvent());
  }
  addOpenListeners() {
    document.addEventListener("keydown", this.handleDocumentKeyDown);
  }
  removeOpenListeners() {
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  handleDialogCancel(event) {
    event.preventDefault();
    if (!this.drawer.classList.contains("hide") && event.target === this.drawer) {
      this.requestClose(this.drawer);
    }
  }
  handleDialogClick(event) {
    const target = event.target;
    const button = target.closest('[data-drawer="close"]');
    if (button) {
      event.stopPropagation();
      this.requestClose(button);
    }
  }
  async handleDialogPointerDown(event) {
    if (event.target === this.drawer) {
      if (this.lightDismiss) {
        this.requestClose(this.drawer);
      } else {
        await animateWithClass(this.drawer, "pulse");
      }
    }
  }
  handleOpenChange() {
    if (this.open && !this.drawer.open) {
      this.show();
    } else if (this.drawer.open) {
      this.open = true;
      this.requestClose(this.drawer);
    }
  }
  /** Shows the drawer. */
  async show() {
    const waShowEvent = new WaShowEvent();
    this.dispatchEvent(waShowEvent);
    if (waShowEvent.defaultPrevented) {
      this.open = false;
      return;
    }
    this.addOpenListeners();
    this.originalTrigger = document.activeElement;
    this.open = true;
    this.drawer.showModal();
    lockBodyScrolling(this);
    requestAnimationFrame(() => {
      const elementToFocus = this.querySelector("[autofocus]");
      if (elementToFocus && typeof elementToFocus.focus === "function") {
        elementToFocus.focus();
      } else {
        this.drawer.focus();
      }
    });
    await animateWithClass(this.drawer, "show");
    this.dispatchEvent(new WaAfterShowEvent());
  }
  render() {
    const hasHeader = !this.withoutHeader;
    const hasFooter = this.hasSlotController.test("footer");
    return x`
      <dialog
        part="dialog"
        class=${e$2({
      drawer: true,
      open: this.open,
      top: this.placement === "top",
      end: this.placement === "end",
      bottom: this.placement === "bottom",
      start: this.placement === "start"
    })}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${hasHeader ? x`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(8203)} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${(event) => this.requestClose(event.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            ` : ""}

        <div part="body" class="body"><slot></slot></div>

        ${hasFooter ? x`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            ` : ""}
      </dialog>
    `;
  }
};
WaDrawer.css = drawer_default;
__decorateClass([
  e$4(".drawer")
], WaDrawer.prototype, "drawer", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaDrawer.prototype, "open", 2);
__decorateClass([
  n$2({ reflect: true })
], WaDrawer.prototype, "label", 2);
__decorateClass([
  n$2({ reflect: true })
], WaDrawer.prototype, "placement", 2);
__decorateClass([
  n$2({ attribute: "without-header", type: Boolean, reflect: true })
], WaDrawer.prototype, "withoutHeader", 2);
__decorateClass([
  n$2({ attribute: "light-dismiss", type: Boolean })
], WaDrawer.prototype, "lightDismiss", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], WaDrawer.prototype, "handleOpenChange", 1);
WaDrawer = __decorateClass([
  t$1("wa-drawer")
], WaDrawer);
document.addEventListener("click", (event) => {
  const drawerAttrEl = event.target.closest("[data-drawer]");
  if (drawerAttrEl instanceof Element) {
    const [command, id] = parseSpaceDelimitedTokens(drawerAttrEl.getAttribute("data-drawer") || "");
    if (command === "open" && id?.length) {
      const doc = drawerAttrEl.getRootNode();
      const drawer = doc.getElementById(id);
      if (drawer?.localName === "wa-drawer") {
        drawer.open = true;
      } else {
        console.warn(`A drawer with an ID of "${id}" could not be found in this document.`);
      }
    }
  }
});
{
  document.body.addEventListener("pointerdown", () => {
  });
}

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/avatar/avatar.css
var avatar_default = ":host {\n  --size: 3rem;\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n  color: var(--wa-color-neutral-on-normal);\n  font: inherit;\n  font-size: calc(var(--size) * 0.4);\n  vertical-align: middle;\n  background-color: var(--wa-color-neutral-fill-normal);\n  border-radius: var(--wa-border-radius-circle);\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n:host([shape='square']) {\n  border-radius: 0;\n}\n\n:host([shape='rounded']) {\n  border-radius: var(--wa-border-radius-m);\n}\n\n.icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.initials {\n  line-height: 1;\n  text-transform: uppercase;\n}\n\n.image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  overflow: hidden;\n  border-radius: inherit;\n}\n";

// src/components/avatar/avatar.ts
var WaAvatar = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.hasError = false;
    this.image = "";
    this.label = "";
    this.initials = "";
    this.loading = "eager";
    this.shape = "circle";
  }
  handleImageChange() {
    this.hasError = false;
  }
  handleImageLoadError() {
    this.hasError = true;
    this.dispatchEvent(new WaErrorEvent());
  }
  render() {
    const avatarWithImage = x`
      <img
        part="image"
        class="image"
        src="${this.image}"
        loading="${this.loading}"
        role="img"
        aria-label=${this.label}
        @error="${this.handleImageLoadError}"
      />
    `;
    let avatarWithoutImage = x``;
    if (this.initials) {
      avatarWithoutImage = x`<div part="initials" class="initials" role="img" aria-label=${this.label}>
        ${this.initials}
      </div>`;
    } else {
      avatarWithoutImage = x`
        <slot name="icon" part="icon" class="icon" role="img" aria-label=${this.label}>
          <wa-icon name="user" library="system" variant="solid"></wa-icon>
        </slot>
      `;
    }
    return x` ${this.image && !this.hasError ? avatarWithImage : avatarWithoutImage} `;
  }
};
WaAvatar.css = avatar_default;
__decorateClass([
  r$1()
], WaAvatar.prototype, "hasError", 2);
__decorateClass([
  n$2()
], WaAvatar.prototype, "image", 2);
__decorateClass([
  n$2()
], WaAvatar.prototype, "label", 2);
__decorateClass([
  n$2()
], WaAvatar.prototype, "initials", 2);
__decorateClass([
  n$2()
], WaAvatar.prototype, "loading", 2);
__decorateClass([
  n$2({ reflect: true })
], WaAvatar.prototype, "shape", 2);
__decorateClass([
  watch("image")
], WaAvatar.prototype, "handleImageChange", 1);
WaAvatar = __decorateClass([
  t$1("wa-avatar")
], WaAvatar);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/button-group/button-group.css
var button_group_default = ":host {\n  display: inline-flex;\n}\n\n.button-group {\n  display: flex;\n  position: relative;\n  isolation: isolate;\n  flex-wrap: wrap;\n  gap: 1px;\n\n  @media (hover: hover) {\n    > :hover,\n    &::slotted(:hover) {\n      z-index: 1;\n    }\n  }\n\n  /* Focus and checked are always on top */\n  > :focus,\n  &::slotted(:focus),\n  > [aria-checked='true'],\n  &::slotted([aria-checked='true']),\n  > [checked],\n  &::slotted([checked]) {\n    z-index: 2 !important;\n  }\n}\n:host([orientation='vertical']) .button-group {\n  flex-direction: column;\n}\n\n/* Button groups with at least one outlined button will not have a gap and instead have borders overlap */\n.button-group.has-outlined {\n  gap: 0;\n\n  &:not([aria-orientation='vertical']):not(.button-group-vertical)::slotted(:not(:first-child)) {\n    margin-inline-start: calc(-1 * var(--border-width));\n  }\n\n  &:is([aria-orientation='vertical'], .button-group-vertical)::slotted(:not(:first-child)) {\n    margin-block-start: calc(-1 * var(--border-width));\n  }\n}\n";

// src/components/button-group/button-group.ts
var WaButtonGroup = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.disableRole = false;
    this.hasOutlined = false;
    this.label = "";
    this.orientation = "horizontal";
    this.variant = "neutral";
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("orientation")) {
      this.setAttribute("aria-orientation", this.orientation);
      this.updateClassNames();
    }
  }
  handleFocus(event) {
    const button = findButton(event.target);
    button?.classList.add("button-focus");
  }
  handleBlur(event) {
    const button = findButton(event.target);
    button?.classList.remove("button-focus");
  }
  handleMouseOver(event) {
    const button = findButton(event.target);
    button?.classList.add("button-hover");
  }
  handleMouseOut(event) {
    const button = findButton(event.target);
    button?.classList.remove("button-hover");
  }
  handleSlotChange() {
    this.updateClassNames();
  }
  updateClassNames() {
    const slottedElements = [...this.defaultSlot.assignedElements({ flatten: true })];
    this.hasOutlined = false;
    slottedElements.forEach((el) => {
      const index = slottedElements.indexOf(el);
      const button = findButton(el);
      if (button) {
        if (button.appearance === "outlined") this.hasOutlined = true;
        button.classList.add("wa-button-group__button");
        button.classList.toggle("wa-button-group__horizontal", this.orientation === "horizontal");
        button.classList.toggle("wa-button-group__vertical", this.orientation === "vertical");
        button.classList.toggle("wa-button-group__button-first", index === 0);
        button.classList.toggle("wa-button-group__button-inner", index > 0 && index < slottedElements.length - 1);
        button.classList.toggle("wa-button-group__button-last", index === slottedElements.length - 1);
        button.classList.toggle("wa-button-group__button-radio", button.tagName.toLowerCase() === "wa-radio-button");
      }
    });
  }
  render() {
    return x`
      <slot
        part="base"
        class=${e$2({
      "button-group": true,
      "has-outlined": this.hasOutlined
    })}
        role="${this.disableRole ? "presentation" : "group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `;
  }
};
WaButtonGroup.css = [variants_default, button_group_default];
__decorateClass([
  e$4("slot")
], WaButtonGroup.prototype, "defaultSlot", 2);
__decorateClass([
  r$1()
], WaButtonGroup.prototype, "disableRole", 2);
__decorateClass([
  r$1()
], WaButtonGroup.prototype, "hasOutlined", 2);
__decorateClass([
  n$2()
], WaButtonGroup.prototype, "label", 2);
__decorateClass([
  n$2({ reflect: true })
], WaButtonGroup.prototype, "orientation", 2);
__decorateClass([
  n$2({ reflect: true })
], WaButtonGroup.prototype, "variant", 2);
WaButtonGroup = __decorateClass([
  t$1("wa-button-group")
], WaButtonGroup);
function findButton(el) {
  const selector = "wa-button, wa-radio-button";
  return el.closest(selector) ?? el.querySelector(selector);
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function n(n,r,t){return n?r(n):t?.(n)}

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/events/after-collapse.ts
var WaAfterCollapseEvent = class extends Event {
  constructor() {
    super("wa-after-collapse", { bubbles: true, cancelable: false, composed: true });
  }
};

// src/events/after-expand.ts
var WaAfterExpandEvent = class extends Event {
  constructor() {
    super("wa-after-expand", { bubbles: true, cancelable: false, composed: true });
  }
};

// src/events/collapse.ts
var WaCollapseEvent = class extends Event {
  constructor() {
    super("wa-collapse", { bubbles: true, cancelable: false, composed: true });
  }
};

// src/events/expand.ts
var WaExpandEvent = class extends Event {
  constructor() {
    super("wa-expand", { bubbles: true, cancelable: false, composed: true });
  }
};

// src/events/lazy-change.ts
var WaLazyChangeEvent = class extends Event {
  constructor() {
    super("wa-lazy-change", { bubbles: true, cancelable: false, composed: true });
  }
};

// src/events/lazy-load.ts
var WaLazyLoadEvent = class extends Event {
  constructor() {
    super("wa-lazy-load", { bubbles: true, cancelable: false, composed: true });
  }
};

// src/components/tree-item/tree-item.css
var tree_item_default = ":host {\n  --show-duration: 200ms;\n  --hide-duration: 200ms;\n\n  display: block;\n  color: var(--wa-color-text-normal);\n  outline: 0;\n  z-index: 0;\n}\n\n:host(:focus) {\n  outline: none;\n}\n\nslot:not([name])::slotted(wa-icon) {\n  margin-inline-end: var(--wa-space-xs);\n}\n\n.tree-item {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  cursor: default;\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n.checkbox {\n  line-height: var(--wa-form-control-value-line-height);\n  pointer-events: none;\n}\n\n.expand-button,\n.checkbox,\n.label {\n  font-family: inherit;\n  font-size: var(--wa-font-size-m);\n  font-weight: inherit;\n}\n\n.checkbox::part(base) {\n  display: flex;\n  align-items: center;\n}\n\n.indentation {\n  display: block;\n  width: 1em;\n  flex-shrink: 0;\n}\n\n.expand-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--wa-color-text-quiet);\n  width: 2em;\n  height: 2em;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n\n.expand-button {\n  transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);\n}\n\n.tree-item-expanded .expand-button {\n  rotate: 90deg;\n}\n\n.tree-item-expanded:dir(rtl) .expand-button {\n  rotate: -90deg;\n}\n\n.tree-item-expanded slot[name='expand-icon'],\n.tree-item:not(.tree-item-expanded) slot[name='collapse-icon'] {\n  display: none;\n}\n\n.tree-item:not(.tree-item-has-expand-button) .expand-icon-slot {\n  display: none;\n}\n\n.expand-button-visible {\n  cursor: pointer;\n}\n\n.item {\n  display: flex;\n  align-items: center;\n  border-inline-start: solid 3px transparent;\n}\n\n:host([disabled]) .item {\n  opacity: 0.5;\n  outline: none;\n  cursor: not-allowed;\n}\n\n:host(:focus-visible) .item {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n  z-index: 2;\n}\n\n:host(:not([aria-disabled='true'])) .tree-item-selected .item {\n  background-color: var(--wa-color-neutral-fill-quiet);\n  border-inline-start-color: var(--wa-color-brand-fill-loud);\n}\n\n:host(:not([aria-disabled='true'])) .expand-button {\n  color: var(--wa-color-text-quiet);\n}\n\n.label {\n  display: flex;\n  align-items: center;\n  transition: color var(--wa-transition-normal) var(--wa-transition-easing);\n}\n\n.children {\n  display: block;\n  font-size: calc(1em + var(--indent-size, var(--wa-space-m)));\n}\n\n/* Indentation lines */\n.children {\n  position: relative;\n}\n\n.children::before {\n  content: '';\n  position: absolute;\n  top: var(--indent-guide-offset);\n  bottom: var(--indent-guide-offset);\n  inset-inline-start: calc(1em - (var(--indent-guide-width) / 2) - 1px);\n  border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);\n  z-index: 1;\n}\n\n@media (forced-colors: active) {\n  :host(:not([aria-disabled='true'])) .tree-item-selected .item {\n    outline: dashed 1px SelectedItem;\n  }\n}\n";

// src/components/tree-item/tree-item.ts
var WaTreeItem = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.indeterminate = false;
    this.isLeaf = false;
    this.loading = false;
    this.selectable = false;
    this.expanded = false;
    this.selected = false;
    this.disabled = false;
    this.lazy = false;
  }
  static isTreeItem(node) {
    return node instanceof Element && node.getAttribute("role") === "treeitem";
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "treeitem");
    this.setAttribute("tabindex", "-1");
    if (this.isNestedItem()) {
      this.slot = "children";
    }
  }
  firstUpdated() {
    this.childrenContainer.hidden = !this.expanded;
    this.childrenContainer.style.height = this.expanded ? "auto" : "0";
    this.isLeaf = !this.lazy && this.getChildrenItems().length === 0;
    this.handleExpandedChange();
  }
  async animateCollapse() {
    this.dispatchEvent(new WaCollapseEvent());
    const duration = parseDuration(getComputedStyle(this.childrenContainer).getPropertyValue("--hide-duration"));
    await animate(
      this.childrenContainer,
      [
        // We can't animate from 'auto', so use the scroll height for now
        { height: `${this.childrenContainer.scrollHeight}px`, opacity: "1", overflow: "hidden" },
        { height: "0", opacity: "0", overflow: "hidden" }
      ],
      { duration, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" }
    );
    this.childrenContainer.hidden = true;
    this.dispatchEvent(new WaAfterCollapseEvent());
  }
  // Checks whether the item is nested into an item
  isNestedItem() {
    const parent = this.parentElement;
    return !!parent && WaTreeItem.isTreeItem(parent);
  }
  handleChildrenSlotChange() {
    this.loading = false;
    this.isLeaf = !this.lazy && this.getChildrenItems().length === 0;
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("selected") && !changedProperties.has("indeterminate")) {
      this.indeterminate = false;
    }
  }
  async animateExpand() {
    this.dispatchEvent(new WaExpandEvent());
    this.childrenContainer.hidden = false;
    const duration = parseDuration(getComputedStyle(this.childrenContainer).getPropertyValue("--show-duration"));
    await animate(
      this.childrenContainer,
      [
        { height: "0", opacity: "0", overflow: "hidden" },
        { height: `${this.childrenContainer.scrollHeight}px`, opacity: "1", overflow: "hidden" }
      ],
      {
        duration,
        easing: "cubic-bezier(0.4, 0.0, 0.2, 1)"
      }
    );
    this.childrenContainer.style.height = "auto";
    this.dispatchEvent(new WaAfterExpandEvent());
  }
  handleLoadingChange() {
    this.setAttribute("aria-busy", this.loading ? "true" : "false");
    if (!this.loading) {
      this.animateExpand();
    }
  }
  handleDisabledChange() {
    this.customStates.set("disabled", this.disabled);
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleExpandedState() {
    this.customStates.set("expanded", this.expanded);
  }
  handleIndeterminateStateChange() {
    this.customStates.set("indeterminate", this.indeterminate);
  }
  handleSelectedChange() {
    this.customStates.set("selected", this.selected);
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleExpandedChange() {
    if (!this.isLeaf) {
      this.setAttribute("aria-expanded", this.expanded ? "true" : "false");
    } else {
      this.removeAttribute("aria-expanded");
    }
  }
  handleExpandAnimation() {
    if (this.expanded) {
      if (this.lazy) {
        this.loading = true;
        this.dispatchEvent(new WaLazyLoadEvent());
      } else {
        this.animateExpand();
      }
    } else {
      this.animateCollapse();
    }
  }
  handleLazyChange() {
    this.dispatchEvent(new WaLazyChangeEvent());
  }
  /** Gets all the nested tree items in this node. */
  getChildrenItems({ includeDisabled = true } = {}) {
    return this.childrenSlot ? [...this.childrenSlot.assignedElements({ flatten: true })].filter(
      (item) => WaTreeItem.isTreeItem(item) && (includeDisabled || !item.disabled)
    ) : [];
  }
  render() {
    const isRtl = this.hasUpdated ? this.localize.dir() === "rtl" : this.dir === "rtl";
    const showExpandButton = !this.loading && (!this.isLeaf || this.lazy);
    return x`
      <div
        part="base"
        class="${e$2({
      "tree-item": true,
      "tree-item-expanded": this.expanded,
      "tree-item-selected": this.selected,
      "tree-item-leaf": this.isLeaf,
      "tree-item-has-expand-button": showExpandButton
    })}"
      >
        <div class="item" part="item">
          <div class="indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${e$2({
      "expand-button": true,
      "expand-button-visible": showExpandButton
    })}
            aria-hidden="true"
          >
            <slot class="expand-icon-slot" name="expand-icon">
              ${n(
      this.loading,
      () => x` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `
    )}
              <wa-icon name=${isRtl ? "chevron-left" : "chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${isRtl ? "chevron-left" : "chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${n(
      this.selectable,
      () => x`
              <wa-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="checkbox"
                ?disabled="${this.disabled}"
                ?checked="${l(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></wa-checkbox>
            `
    )}

          <slot class="label" part="label"></slot>
        </div>

        <div class="children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `;
  }
};
WaTreeItem.css = tree_item_default;
__decorateClass([
  r$1()
], WaTreeItem.prototype, "indeterminate", 2);
__decorateClass([
  r$1()
], WaTreeItem.prototype, "isLeaf", 2);
__decorateClass([
  r$1()
], WaTreeItem.prototype, "loading", 2);
__decorateClass([
  r$1()
], WaTreeItem.prototype, "selectable", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaTreeItem.prototype, "expanded", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaTreeItem.prototype, "selected", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaTreeItem.prototype, "disabled", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaTreeItem.prototype, "lazy", 2);
__decorateClass([
  e$4("slot:not([name])")
], WaTreeItem.prototype, "defaultSlot", 2);
__decorateClass([
  e$4("slot[name=children]")
], WaTreeItem.prototype, "childrenSlot", 2);
__decorateClass([
  e$4(".item")
], WaTreeItem.prototype, "itemElement", 2);
__decorateClass([
  e$4(".children")
], WaTreeItem.prototype, "childrenContainer", 2);
__decorateClass([
  e$4(".expand-button slot")
], WaTreeItem.prototype, "expandButtonSlot", 2);
__decorateClass([
  watch("loading", { waitUntilFirstUpdate: true })
], WaTreeItem.prototype, "handleLoadingChange", 1);
__decorateClass([
  watch("disabled")
], WaTreeItem.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("expanded")
], WaTreeItem.prototype, "handleExpandedState", 1);
__decorateClass([
  watch("indeterminate")
], WaTreeItem.prototype, "handleIndeterminateStateChange", 1);
__decorateClass([
  watch("selected")
], WaTreeItem.prototype, "handleSelectedChange", 1);
__decorateClass([
  watch("expanded", { waitUntilFirstUpdate: true })
], WaTreeItem.prototype, "handleExpandedChange", 1);
__decorateClass([
  watch("expanded", { waitUntilFirstUpdate: true })
], WaTreeItem.prototype, "handleExpandAnimation", 1);
__decorateClass([
  watch("lazy", { waitUntilFirstUpdate: true })
], WaTreeItem.prototype, "handleLazyChange", 1);
WaTreeItem = __decorateClass([
  t$1("wa-tree-item")
], WaTreeItem);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/events/selection-change.ts
var WaSelectionChangeEvent = class extends Event {
  constructor(detail) {
    super("wa-selection-change", { bubbles: true, cancelable: false, composed: true });
    this.detail = detail;
  }
};

// src/components/tree/tree.css
var tree_default = ':host {\n  /*\n     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items\n     * stay consistent.\n     */\n  --indent-guide-color: var(--wa-color-surface-border);\n  --indent-guide-offset: 0;\n  --indent-guide-style: solid;\n  --indent-guide-width: 0;\n  --indent-size: var(--wa-space-l);\n\n  display: block;\n\n  /*\n     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero\n     * here removes the indentation for all the nodes on the first level.\n     */\n  font-size: 0;\n}\n';

// src/components/tree/tree.ts
function syncCheckboxes(changedTreeItem, initialSync = false) {
  function syncParentItem(treeItem) {
    const children = treeItem.getChildrenItems({ includeDisabled: false });
    if (children.length) {
      const allChecked = children.every((item) => item.selected);
      const allUnchecked = children.every((item) => !item.selected && !item.indeterminate);
      treeItem.selected = allChecked;
      treeItem.indeterminate = !allChecked && !allUnchecked;
    }
  }
  function syncAncestors(treeItem) {
    const parentItem = treeItem.parentElement;
    if (WaTreeItem.isTreeItem(parentItem)) {
      syncParentItem(parentItem);
      syncAncestors(parentItem);
    }
  }
  function syncDescendants(treeItem) {
    for (const childItem of treeItem.getChildrenItems()) {
      childItem.selected = initialSync ? treeItem.selected || childItem.selected : !childItem.disabled && treeItem.selected;
      syncDescendants(childItem);
    }
    if (initialSync) {
      syncParentItem(treeItem);
    }
  }
  syncDescendants(changedTreeItem);
  syncAncestors(changedTreeItem);
}
var WaTree = class extends WebAwesomeElement {
  constructor() {
    super();
    this.selection = "single";
    this.clickTarget = null;
    this.localize = new LocalizeController(this);
    // Initializes new items by setting the `selectable` property and the expanded/collapsed icons if any
    this.initTreeItem = (item) => {
      item.updateComplete.then(() => {
        item.selectable = this.selection === "multiple";
        ["expand", "collapse"].filter((status) => !!this.querySelector(`[slot="${status}-icon"]`)).forEach((status) => {
          const existingIcon = item.querySelector(`[slot="${status}-icon"]`);
          const expandButtonIcon = this.getExpandButtonIcon(status);
          if (!expandButtonIcon) return;
          if (existingIcon === null) {
            item.append(expandButtonIcon);
          } else if (existingIcon.hasAttribute("data-default")) {
            existingIcon.replaceWith(expandButtonIcon);
          } else ;
        });
      });
    };
    this.handleTreeChanged = (mutations) => {
      for (const mutation of mutations) {
        const addedNodes = [...mutation.addedNodes].filter(WaTreeItem.isTreeItem);
        const removedNodes = [...mutation.removedNodes].filter(WaTreeItem.isTreeItem);
        addedNodes.forEach(this.initTreeItem);
        if (this.lastFocusedItem && removedNodes.includes(this.lastFocusedItem)) {
          this.lastFocusedItem = null;
        }
      }
    };
    this.handleFocusOut = (event) => {
      const relatedTarget = event.relatedTarget;
      if (!relatedTarget || !this.contains(relatedTarget)) {
        this.tabIndex = 0;
      }
    };
    this.handleFocusIn = (event) => {
      const target = event.target;
      if (event.target === this) {
        this.focusItem(this.lastFocusedItem || this.getAllTreeItems()[0]);
      }
      if (WaTreeItem.isTreeItem(target) && !target.disabled) {
        if (this.lastFocusedItem) {
          this.lastFocusedItem.tabIndex = -1;
        }
        this.lastFocusedItem = target;
        this.tabIndex = -1;
        target.tabIndex = 0;
      }
    };
    {
      this.addEventListener("focusin", this.handleFocusIn);
      this.addEventListener("focusout", this.handleFocusOut);
      this.addEventListener("wa-lazy-change", this.handleSlotChange);
    }
  }
  async connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "tree");
    this.setAttribute("tabindex", "0");
    await this.updateComplete;
    this.mutationObserver = new MutationObserver(this.handleTreeChanged);
    this.mutationObserver.observe(this, { childList: true, subtree: true });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.mutationObserver?.disconnect();
  }
  // Generates a clone of the expand icon element to use for each tree item
  getExpandButtonIcon(status) {
    const slot = status === "expand" ? this.expandedIconSlot : this.collapsedIconSlot;
    const icon = slot.assignedElements({ flatten: true })[0];
    if (icon) {
      const clone = icon.cloneNode(true);
      [clone, ...clone.querySelectorAll("[id]")].forEach((el) => el.removeAttribute("id"));
      clone.setAttribute("data-default", "");
      clone.slot = `${status}-icon`;
      return clone;
    }
    return null;
  }
  selectItem(selectedItem) {
    const previousSelection = [...this.selectedItems];
    if (this.selection === "multiple") {
      selectedItem.selected = !selectedItem.selected;
      if (selectedItem.lazy) {
        selectedItem.expanded = true;
      }
      syncCheckboxes(selectedItem);
    } else if (this.selection === "single" || selectedItem.isLeaf) {
      const items = this.getAllTreeItems();
      for (const item of items) {
        item.selected = item === selectedItem;
      }
    } else if (this.selection === "leaf") {
      selectedItem.expanded = !selectedItem.expanded;
    }
    const nextSelection = this.selectedItems;
    if (previousSelection.length !== nextSelection.length || nextSelection.some((item) => !previousSelection.includes(item))) {
      Promise.all(nextSelection.map((el) => el.updateComplete)).then(() => {
        this.dispatchEvent(new WaSelectionChangeEvent({ selection: nextSelection }));
      });
    }
  }
  getAllTreeItems() {
    return [...this.querySelectorAll("wa-tree-item")];
  }
  focusItem(item) {
    item?.focus();
  }
  handleKeyDown(event) {
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Home", "End", "Enter", " "].includes(event.key)) {
      return;
    }
    if (event.composedPath().some((el) => ["input", "textarea"].includes(el?.tagName?.toLowerCase()))) {
      return;
    }
    const items = this.getFocusableItems();
    const isLtr = this.matches(":dir(ltr)");
    const isRtl = this.localize.dir() === "rtl";
    if (items.length > 0) {
      event.preventDefault();
      const activeItemIndex = items.findIndex((item) => item.matches(":focus"));
      const activeItem = items[activeItemIndex];
      const focusItemAt = (index) => {
        const item = items[clamp$1(index, 0, items.length - 1)];
        this.focusItem(item);
      };
      const toggleExpand = (expanded) => {
        activeItem.expanded = expanded;
      };
      if (event.key === "ArrowDown") {
        focusItemAt(activeItemIndex + 1);
      } else if (event.key === "ArrowUp") {
        focusItemAt(activeItemIndex - 1);
      } else if (isLtr && event.key === "ArrowRight" || isRtl && event.key === "ArrowLeft") {
        if (!activeItem || activeItem.disabled || activeItem.expanded || activeItem.isLeaf && !activeItem.lazy) {
          focusItemAt(activeItemIndex + 1);
        } else {
          toggleExpand(true);
        }
      } else if (isLtr && event.key === "ArrowLeft" || isRtl && event.key === "ArrowRight") {
        if (!activeItem || activeItem.disabled || activeItem.isLeaf || !activeItem.expanded) {
          focusItemAt(activeItemIndex - 1);
        } else {
          toggleExpand(false);
        }
      } else if (event.key === "Home") {
        focusItemAt(0);
      } else if (event.key === "End") {
        focusItemAt(items.length - 1);
      } else if (event.key === "Enter" || event.key === " ") {
        if (!activeItem.disabled) {
          this.selectItem(activeItem);
        }
      }
    }
  }
  handleClick(event) {
    const target = event.target;
    const treeItem = target.closest("wa-tree-item");
    const isExpandButton = event.composedPath().some((el) => el?.classList?.contains("expand-button"));
    if (!treeItem || treeItem.disabled || target !== this.clickTarget) {
      return;
    }
    if (isExpandButton) {
      treeItem.expanded = !treeItem.expanded;
    } else {
      this.selectItem(treeItem);
    }
  }
  handleMouseDown(event) {
    this.clickTarget = event.target;
  }
  handleSlotChange() {
    const items = this.getAllTreeItems();
    items.forEach(this.initTreeItem);
  }
  async handleSelectionChange() {
    const isSelectionMultiple = this.selection === "multiple";
    const items = this.getAllTreeItems();
    this.setAttribute("aria-multiselectable", isSelectionMultiple ? "true" : "false");
    for (const item of items) {
      item.updateComplete.then(() => {
        item.selectable = isSelectionMultiple;
      });
    }
    if (isSelectionMultiple) {
      await this.updateComplete;
      [...this.querySelectorAll(":scope > wa-tree-item")].forEach((treeItem) => {
        treeItem.updateComplete.then(() => {
          syncCheckboxes(treeItem, true);
        });
      });
    }
  }
  /** @internal Returns the list of tree items that are selected in the tree. */
  get selectedItems() {
    const items = this.getAllTreeItems();
    const isSelected = (item) => item.selected;
    return items.filter(isSelected);
  }
  /** @internal Gets focusable tree items in the tree. */
  getFocusableItems() {
    const items = this.getAllTreeItems();
    const collapsedItems = /* @__PURE__ */ new Set();
    return items.filter((item) => {
      if (item.disabled) return false;
      const parent = item.parentElement?.closest("[role=treeitem]");
      if (parent && (!parent.expanded || parent.loading || collapsedItems.has(parent))) {
        collapsedItems.add(item);
      }
      return !collapsedItems.has(item);
    });
  }
  render() {
    return x`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `;
  }
};
WaTree.css = tree_default;
__decorateClass([
  e$4("slot:not([name])")
], WaTree.prototype, "defaultSlot", 2);
__decorateClass([
  e$4("slot[name=expand-icon]")
], WaTree.prototype, "expandedIconSlot", 2);
__decorateClass([
  e$4("slot[name=collapse-icon]")
], WaTree.prototype, "collapsedIconSlot", 2);
__decorateClass([
  n$2()
], WaTree.prototype, "selection", 2);
__decorateClass([
  watch("selection")
], WaTree.prototype, "handleSelectionChange", 1);
WaTree = __decorateClass([
  t$1("wa-tree")
], WaTree);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/badge/badge.css
var badge_default = ":host {\n  --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.375em 0.625em;\n  color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));\n  font-size: max(var(--wa-font-size-2xs), 0.75em);\n  font-weight: var(--wa-font-weight-semibold);\n  line-height: 1;\n  white-space: nowrap;\n  background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));\n  border-color: transparent;\n  border-radius: var(--wa-border-radius-s);\n  border-style: var(--wa-border-style);\n  border-width: var(--wa-border-width-s);\n  user-select: none;\n  -webkit-user-select: none;\n  cursor: inherit;\n}\n\n/* Appearance modifiers */\n:host([appearance='outlined']) {\n  --pulse-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));\n\n  color: var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));\n  background-color: transparent;\n  border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));\n}\n\n:host([appearance='filled']) {\n  --pulse-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));\n\n  color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));\n  background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));\n  border-color: transparent;\n}\n\n:host([appearance='filled-outlined']) {\n  --pulse-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));\n\n  color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));\n  background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));\n  border-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));\n}\n\n:host([appearance='accent']) {\n  --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));\n\n  color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));\n  background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));\n  border-color: transparent;\n}\n\n/* Pill modifier */\n:host([pill]) {\n  border-radius: var(--wa-border-radius-pill);\n}\n\n/* Pulse attention */\n:host([attention='pulse']) {\n  animation: pulse 1.5s infinite;\n}\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 var(--pulse-color);\n  }\n  70% {\n    box-shadow: 0 0 0 0.5rem transparent;\n  }\n  100% {\n    box-shadow: 0 0 0 0 transparent;\n  }\n}\n\n/* Bounce attention */\n:host([attention='bounce']) {\n  animation: bounce 1s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;\n}\n\n@keyframes bounce {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-5px);\n  }\n  60% {\n    transform: translateY(-2px);\n  }\n}\n\n::slotted(wa-icon) {\n  margin-inline-end: var(--wa-space-2xs, 0.25em);\n  opacity: 90%;\n  line-height: 1;\n  height: 0.85em;\n}\n";

// src/components/badge/badge.ts
var WaBadge = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.variant = "brand";
    this.appearance = "accent";
    this.pill = false;
    this.attention = "none";
  }
  render() {
    return x` <slot part="base" role="status"></slot>`;
  }
};
WaBadge.css = [variants_default, badge_default];
__decorateClass([
  n$2({ reflect: true })
], WaBadge.prototype, "variant", 2);
__decorateClass([
  n$2({ reflect: true })
], WaBadge.prototype, "appearance", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaBadge.prototype, "pill", 2);
__decorateClass([
  n$2({ reflect: true })
], WaBadge.prototype, "attention", 2);
WaBadge = __decorateClass([
  t$1("wa-badge")
], WaBadge);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/dialog/dialog.css
var dialog_default = ":host {\n  --width: 31rem;\n  --spacing: var(--wa-space-l);\n  --show-duration: 200ms;\n  --hide-duration: 200ms;\n\n  display: none;\n}\n\n:host([open]) {\n  display: block;\n}\n\n.dialog {\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: var(--width);\n  max-width: calc(100% - var(--wa-space-2xl));\n  max-height: calc(100% - var(--wa-space-2xl));\n  background-color: var(--wa-color-surface-raised);\n  border-radius: var(--wa-panel-border-radius);\n  border: none;\n  box-shadow: var(--wa-shadow-l);\n  padding: 0;\n  margin: auto;\n\n  &.show {\n    animation: show-dialog var(--show-duration) ease;\n\n    &::backdrop {\n      animation: show-backdrop var(--show-duration, 200ms) ease;\n    }\n  }\n\n  &.hide {\n    animation: show-dialog var(--hide-duration) ease reverse;\n\n    &::backdrop {\n      animation: show-backdrop var(--hide-duration, 200ms) ease reverse;\n    }\n  }\n\n  &.pulse {\n    animation: pulse 250ms ease;\n  }\n}\n\n.dialog:focus {\n  outline: none;\n}\n\n/* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */\n@media screen and (max-width: 420px) {\n  .dialog {\n    max-height: 80vh;\n  }\n}\n\n.open {\n  display: flex;\n  opacity: 1;\n}\n\n.header {\n  flex: 0 0 auto;\n  display: flex;\n  flex-wrap: nowrap;\n\n  padding-inline-start: var(--spacing);\n  padding-block-end: 0;\n\n  /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */\n  padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));\n  padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));\n}\n\n.title {\n  align-self: center;\n  flex: 1 1 auto;\n  font-family: inherit;\n  font-size: var(--wa-font-size-l);\n  font-weight: var(--wa-font-weight-heading);\n  line-height: var(--wa-line-height-condensed);\n  margin: 0;\n}\n\n.header-actions {\n  align-self: start;\n  display: flex;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  justify-content: end;\n  gap: var(--wa-space-2xs);\n  padding-inline-start: var(--spacing);\n}\n\n.header-actions wa-button,\n.header-actions ::slotted(wa-button) {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n}\n\n.body {\n  flex: 1 1 auto;\n  display: block;\n  padding: var(--spacing);\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus-visible {\n    outline: var(--wa-focus-ring);\n    outline-offset: var(--wa-focus-ring-offset);\n  }\n}\n\n.footer {\n  flex: 0 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--wa-space-xs);\n  justify-content: end;\n  padding: var(--spacing);\n  padding-block-start: 0;\n}\n\n.footer ::slotted(wa-button:not(:first-of-type)) {\n  margin-inline-start: var(--wa-spacing-xs);\n}\n\n.dialog::backdrop {\n  /*\n    NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can\n    remove the fallback values here.\n  */\n  background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));\n}\n\n@keyframes pulse {\n  0% {\n    scale: 1;\n  }\n  50% {\n    scale: 1.02;\n  }\n  100% {\n    scale: 1;\n  }\n}\n\n@keyframes show-dialog {\n  from {\n    opacity: 0;\n    scale: 0.8;\n  }\n  to {\n    opacity: 1;\n    scale: 1;\n  }\n}\n\n@keyframes show-backdrop {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@media (forced-colors: active) {\n  .dialog {\n    border: solid 1px white;\n  }\n}\n";

// src/components/dialog/dialog.ts
var WaDialog = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.hasSlotController = new HasSlotController(this, "footer", "header-actions", "label");
    this.open = false;
    this.label = "";
    this.withoutHeader = false;
    this.lightDismiss = false;
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape" && this.open) {
        event.preventDefault();
        event.stopPropagation();
        this.requestClose(this.dialog);
      }
    };
  }
  firstUpdated() {
    if (this.open) {
      this.addOpenListeners();
      this.dialog.showModal();
      lockBodyScrolling(this);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unlockBodyScrolling(this);
    this.removeOpenListeners();
  }
  async requestClose(source) {
    const waHideEvent = new WaHideEvent({ source });
    this.dispatchEvent(waHideEvent);
    if (waHideEvent.defaultPrevented) {
      this.open = true;
      animateWithClass(this.dialog, "pulse");
      return;
    }
    this.removeOpenListeners();
    await animateWithClass(this.dialog, "hide");
    this.open = false;
    this.dialog.close();
    unlockBodyScrolling(this);
    const trigger = this.originalTrigger;
    if (typeof trigger?.focus === "function") {
      setTimeout(() => trigger.focus());
    }
    this.dispatchEvent(new WaAfterHideEvent());
  }
  addOpenListeners() {
    document.addEventListener("keydown", this.handleDocumentKeyDown);
  }
  removeOpenListeners() {
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  handleDialogCancel(event) {
    event.preventDefault();
    if (!this.dialog.classList.contains("hide") && event.target === this.dialog) {
      this.requestClose(this.dialog);
    }
  }
  handleDialogClick(event) {
    const target = event.target;
    const button = target.closest('[data-dialog="close"]');
    if (button) {
      event.stopPropagation();
      this.requestClose(button);
    }
  }
  async handleDialogPointerDown(event) {
    if (event.target === this.dialog) {
      if (this.lightDismiss) {
        this.requestClose(this.dialog);
      } else {
        await animateWithClass(this.dialog, "pulse");
      }
    }
  }
  handleOpenChange() {
    if (this.open && !this.dialog.open) {
      this.show();
    } else if (!this.open && this.dialog.open) {
      this.open = true;
      this.requestClose(this.dialog);
    }
  }
  /** Shows the dialog. */
  async show() {
    const waShowEvent = new WaShowEvent();
    this.dispatchEvent(waShowEvent);
    if (waShowEvent.defaultPrevented) {
      this.open = false;
      return;
    }
    this.addOpenListeners();
    this.originalTrigger = document.activeElement;
    this.open = true;
    this.dialog.showModal();
    lockBodyScrolling(this);
    requestAnimationFrame(() => {
      const elementToFocus = this.querySelector("[autofocus]");
      if (elementToFocus && typeof elementToFocus.focus === "function") {
        elementToFocus.focus();
      } else {
        this.dialog.focus();
      }
    });
    await animateWithClass(this.dialog, "show");
    this.dispatchEvent(new WaAfterShowEvent());
  }
  render() {
    const hasHeader = !this.withoutHeader;
    const hasFooter = this.hasSlotController.test("footer");
    return x`
      <dialog
        part="dialog"
        class=${e$2({
      dialog: true,
      open: this.open
    })}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${hasHeader ? x`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(8203)} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${(event) => this.requestClose(event.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            ` : ""}

        <div part="body" class="body"><slot></slot></div>

        ${hasFooter ? x`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            ` : ""}
      </dialog>
    `;
  }
};
WaDialog.css = dialog_default;
__decorateClass([
  e$4(".dialog")
], WaDialog.prototype, "dialog", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaDialog.prototype, "open", 2);
__decorateClass([
  n$2({ reflect: true })
], WaDialog.prototype, "label", 2);
__decorateClass([
  n$2({ attribute: "without-header", type: Boolean, reflect: true })
], WaDialog.prototype, "withoutHeader", 2);
__decorateClass([
  n$2({ attribute: "light-dismiss", type: Boolean })
], WaDialog.prototype, "lightDismiss", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], WaDialog.prototype, "handleOpenChange", 1);
WaDialog = __decorateClass([
  t$1("wa-dialog")
], WaDialog);
document.addEventListener("click", (event) => {
  const dialogAttrEl = event.target.closest("[data-dialog]");
  if (dialogAttrEl instanceof Element) {
    const [command, id] = parseSpaceDelimitedTokens(dialogAttrEl.getAttribute("data-dialog") || "");
    if (command === "open" && id?.length) {
      const doc = dialogAttrEl.getRootNode();
      const dialog = doc.getElementById(id);
      if (dialog?.localName === "wa-dialog") {
        dialog.open = true;
      } else {
        console.warn(`A dialog with an ID of "${id}" could not be found in this document.`);
      }
    }
  }
});
{
  document.addEventListener("pointerdown", () => {
  });
}

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/popover/popover.css
var popover_default = ":host {\n  --arrow-size: 0.375rem;\n  --max-width: 25rem;\n  --show-duration: 100ms;\n  --hide-duration: 100ms;\n\n  /* Internal calculated properties */\n  --arrow-diagonal-size: calc((var(--arrow-size) * sin(45deg)));\n\n  display: contents;\n\n  /** Defaults for inherited CSS properties */\n  font-size: var(--wa-font-size-m);\n  line-height: var(--wa-line-height-normal);\n  text-align: start;\n  white-space: normal;\n}\n\n/* The native dialog element */\n.dialog {\n  display: none;\n  position: fixed;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: transparent;\n  overflow: visible;\n  pointer-events: none;\n\n  &:focus {\n    outline: none;\n  }\n\n  &[open] {\n    display: block;\n  }\n}\n\n/* The <wa-popup> element */\n.popover {\n  --arrow-size: inherit;\n  --show-duration: inherit;\n  --hide-duration: inherit;\n\n  pointer-events: auto;\n\n  &::part(arrow) {\n    background-color: var(--wa-color-surface-default);\n    border-top: none;\n    border-left: none;\n    border-bottom: solid var(--wa-panel-border-width) var(--wa-color-surface-border);\n    border-right: solid var(--wa-panel-border-width) var(--wa-color-surface-border);\n    box-shadow: none;\n  }\n}\n\n.popover[placement^='top']::part(popup) {\n  transform-origin: bottom;\n}\n\n.popover[placement^='bottom']::part(popup) {\n  transform-origin: top;\n}\n\n.popover[placement^='left']::part(popup) {\n  transform-origin: right;\n}\n\n.popover[placement^='right']::part(popup) {\n  transform-origin: left;\n}\n\n/* Body */\n.body {\n  display: flex;\n  flex-direction: column;\n  width: max-content;\n  max-width: var(--max-width);\n  padding: var(--wa-space-l);\n  background-color: var(--wa-color-surface-default);\n  border: var(--wa-panel-border-width) solid var(--wa-color-surface-border);\n  border-radius: var(--wa-panel-border-radius);\n  border-style: var(--wa-panel-border-style);\n  box-shadow: var(--wa-shadow-l);\n  color: var(--wa-color-text-normal);\n  user-select: none;\n  -webkit-user-select: none;\n}\n";

// src/components/popover/popover.ts
var openPopovers = /* @__PURE__ */ new Set();
var WaPopover = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.anchor = null;
    this.placement = "top";
    this.open = false;
    this.distance = 8;
    this.skidding = 0;
    this.for = null;
    this.withoutArrow = false;
    this.eventController = new AbortController();
    this.handleAnchorClick = () => {
      this.open = !this.open;
    };
    this.handleBodyClick = (event) => {
      const target = event.target;
      const button = target.closest('[data-popover="close"]');
      if (button) {
        event.stopPropagation();
        this.open = false;
      }
    };
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        this.open = false;
        if (this.anchor && typeof this.anchor.focus === "function") {
          this.anchor.focus();
        }
      }
    };
    this.handleDocumentClick = (event) => {
      const target = event.target;
      if (this.anchor && event.composedPath().includes(this.anchor)) {
        return;
      }
      if (target.closest("wa-popover") !== this) {
        this.open = false;
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.id) {
      this.id = uniqueId("wa-popover-");
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    this.eventController.abort();
  }
  firstUpdated() {
    if (this.open) {
      this.dialog.show();
      this.popup.active = true;
      this.popup.reposition();
    }
  }
  updated(changedProperties) {
    if (changedProperties.has("open")) {
      this.customStates.set("open", this.open);
    }
  }
  async handleOpenChange() {
    if (this.open) {
      const waShowEvent = new WaShowEvent();
      this.dispatchEvent(waShowEvent);
      if (waShowEvent.defaultPrevented) {
        this.open = false;
        return;
      }
      openPopovers.forEach((popover) => popover.open = false);
      document.addEventListener("keydown", this.handleDocumentKeyDown, { signal: this.eventController.signal });
      document.addEventListener("click", this.handleDocumentClick, { signal: this.eventController.signal });
      this.dialog.show();
      this.popup.active = true;
      openPopovers.add(this);
      requestAnimationFrame(() => {
        const elementToFocus = this.querySelector("[autofocus]");
        if (elementToFocus && typeof elementToFocus.focus === "function") {
          elementToFocus.focus();
        } else {
          this.dialog.focus();
        }
      });
      await animateWithClass(this.popup.popup, "show-with-scale");
      this.popup.reposition();
      this.dispatchEvent(new WaAfterShowEvent());
    } else {
      const waHideEvent = new WaHideEvent();
      this.dispatchEvent(waHideEvent);
      if (waHideEvent.defaultPrevented) {
        this.open = true;
        return;
      }
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      document.removeEventListener("click", this.handleDocumentClick);
      openPopovers.delete(this);
      await animateWithClass(this.popup.popup, "hide-with-scale");
      this.popup.active = false;
      this.dialog.close();
      this.dispatchEvent(new WaAfterHideEvent());
    }
  }
  handleForChange() {
    const rootNode = this.getRootNode();
    if (!rootNode) {
      return;
    }
    const newAnchor = this.for ? rootNode.getElementById(this.for) : null;
    const oldAnchor = this.anchor;
    if (newAnchor === oldAnchor) {
      return;
    }
    const { signal } = this.eventController;
    if (newAnchor) {
      newAnchor.addEventListener("click", this.handleAnchorClick, { signal });
    }
    if (oldAnchor) {
      oldAnchor.removeEventListener("click", this.handleAnchorClick);
    }
    this.anchor = newAnchor;
    if (this.for && !newAnchor) {
      console.warn(
        `A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,
        this
      );
    }
  }
  async handleOptionsChange() {
    if (this.hasUpdated) {
      await this.updateComplete;
      this.popup.reposition();
    }
  }
  /** Shows the popover. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "wa-after-show");
  }
  /** Hides the popover. */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "wa-after-hide");
  }
  render() {
    return x`
      <dialog part="dialog" class="dialog">
        <wa-popup
          part="popup"
          exportparts="
            popup:popup__popup,
            arrow:popup__arrow
          "
          class=${e$2({
      popover: true,
      "popover-open": this.open
    })}
          placement=${this.placement}
          distance=${this.distance}
          skidding=${this.skidding}
          flip
          shift
          ?arrow=${!this.withoutArrow}
          .anchor=${this.anchor}
        >
          <div part="body" class="body" @click=${this.handleBodyClick}>
            <slot></slot>
          </div>
        </wa-popup>
      </dialog>
    `;
  }
};
WaPopover.css = popover_default;
WaPopover.dependencies = { "wa-popup": WaPopup };
__decorateClass([
  e$4("dialog")
], WaPopover.prototype, "dialog", 2);
__decorateClass([
  e$4(".body")
], WaPopover.prototype, "body", 2);
__decorateClass([
  e$4("wa-popup")
], WaPopover.prototype, "popup", 2);
__decorateClass([
  r$1()
], WaPopover.prototype, "anchor", 2);
__decorateClass([
  n$2()
], WaPopover.prototype, "placement", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaPopover.prototype, "open", 2);
__decorateClass([
  n$2({ type: Number })
], WaPopover.prototype, "distance", 2);
__decorateClass([
  n$2({ type: Number })
], WaPopover.prototype, "skidding", 2);
__decorateClass([
  n$2()
], WaPopover.prototype, "for", 2);
__decorateClass([
  n$2({ attribute: "without-arrow", type: Boolean, reflect: true })
], WaPopover.prototype, "withoutArrow", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], WaPopover.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("for")
], WaPopover.prototype, "handleForChange", 1);
__decorateClass([
  watch(["distance", "placement", "skidding"])
], WaPopover.prototype, "handleOptionsChange", 1);
WaPopover = __decorateClass([
  t$1("wa-popover")
], WaPopover);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/textarea/textarea.css
var textarea_default = ":host {\n  border-width: 0;\n}\n\n.textarea {\n  display: grid;\n  align-items: center;\n  margin: 0;\n  border: none;\n  outline: none;\n  cursor: inherit;\n  font: inherit;\n  background-color: var(--wa-form-control-background-color);\n  border-color: var(--wa-form-control-border-color);\n  border-radius: var(--wa-form-control-border-radius);\n  border-style: var(--wa-form-control-border-style);\n  border-width: var(--wa-form-control-border-width);\n  -webkit-appearance: none;\n\n  &:focus-within {\n    outline: var(--wa-focus-ring);\n    outline-offset: var(--wa-focus-ring-offset);\n  }\n}\n\n/* Appearance modifiers */\n:host([appearance='outlined']) .textarea {\n  background-color: var(--wa-form-control-background-color);\n  border-color: var(--wa-form-control-border-color);\n}\n\n:host([appearance='filled']) .textarea {\n  background-color: var(--wa-color-neutral-fill-quiet);\n  border-color: var(--wa-color-neutral-fill-quiet);\n}\n\n:host([appearance='filled-outlined']) .textarea {\n  background-color: var(--wa-color-neutral-fill-quiet);\n  border-color: var(--wa-form-control-border-color);\n}\n\ntextarea {\n  display: block;\n  width: 100%;\n  border: none;\n  background: transparent;\n  font: inherit;\n  color: inherit;\n  padding: calc(var(--wa-form-control-padding-block) - ((1lh - 1em) / 2)) var(--wa-form-control-padding-inline); /* accounts for the larger line height of textarea content */\n  min-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);\n  box-shadow: none;\n  margin: 0;\n\n  &::placeholder {\n    color: var(--wa-form-control-placeholder-color);\n    user-select: none;\n    -webkit-user-select: none;\n  }\n\n  &:autofill {\n    &,\n    &:hover,\n    &:focus,\n    &:active {\n      box-shadow: none;\n      caret-color: var(--wa-form-control-value-color);\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n}\n\n/* Shared textarea and size-adjuster positioning */\n.control,\n.size-adjuster {\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n.size-adjuster {\n  visibility: hidden;\n  pointer-events: none;\n  opacity: 0;\n  padding: 0;\n}\n\ntextarea::-webkit-search-decoration,\ntextarea::-webkit-search-cancel-button,\ntextarea::-webkit-search-results-button,\ntextarea::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n * Resize types\n */\n\n:host([resize='none']) textarea {\n  resize: none;\n}\n\ntextarea,\n:host([resize='vertical']) textarea {\n  resize: vertical;\n}\n\n:host([resize='horizontal']) textarea {\n  resize: horizontal;\n}\n\n:host([resize='both']) textarea {\n  resize: both;\n}\n\n:host([resize='auto']) textarea {\n  height: auto;\n  resize: none;\n  overflow-y: hidden;\n}\n";

// src/components/textarea/textarea.ts
var WaTextarea = class extends WebAwesomeFormAssociatedElement {
  constructor() {
    super(...arguments);
    this.assumeInteractionOn = ["blur", "input"];
    this.hasSlotController = new HasSlotController(this, "hint", "label");
    this.title = "";
    this.name = null;
    this._value = null;
    this.defaultValue = this.getAttribute("value") ?? "";
    this.size = "medium";
    this.appearance = "outlined";
    this.label = "";
    this.hint = "";
    this.placeholder = "";
    this.rows = 4;
    this.resize = "vertical";
    this.disabled = false;
    this.readonly = false;
    this.form = null;
    this.required = false;
    this.spellcheck = true;
    this.withLabel = false;
    this.withHint = false;
  }
  static get validators() {
    return [...super.validators, MirrorValidator()];
  }
  /** The current value of the input, submitted as a name/value pair with form data. */
  get value() {
    if (this.valueHasChanged) {
      return this._value;
    }
    return this._value ?? this.defaultValue;
  }
  set value(val) {
    if (this._value === val) {
      return;
    }
    this.valueHasChanged = true;
    this._value = val;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => this.setTextareaDimensions());
    this.updateComplete.then(() => {
      this.setTextareaDimensions();
      this.resizeObserver.observe(this.input);
      if (this.didSSR && this.input && this.value !== this.input.value) {
        const value = this.input.value;
        this.value = value;
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.input) {
      this.resizeObserver?.unobserve(this.input);
    }
  }
  handleBlur() {
    this.checkValidity();
  }
  handleChange(event) {
    this.valueHasChanged = true;
    this.value = this.input.value;
    this.setTextareaDimensions();
    this.checkValidity();
    this.relayNativeEvent(event, { bubbles: true, composed: true });
  }
  handleInput(event) {
    this.valueHasChanged = true;
    this.value = this.input.value;
    this.relayNativeEvent(event, { bubbles: true, composed: true });
  }
  setTextareaDimensions() {
    if (this.resize === "none") {
      this.base.style.width = ``;
      this.base.style.height = ``;
      return;
    }
    if (this.resize === "auto") {
      this.sizeAdjuster.style.height = `${this.input.clientHeight}px`;
      this.input.style.height = "auto";
      this.input.style.height = `${this.input.scrollHeight}px`;
      this.base.style.width = ``;
      this.base.style.height = ``;
      return;
    }
    if (this.input.style.width) {
      const width = Number(this.input.style.width.split(/px/)[0]) + 2;
      this.base.style.width = `${width}px`;
    }
    if (this.input.style.height) {
      const height = Number(this.input.style.height.split(/px/)[0]) + 2;
      this.base.style.height = `${height}px`;
    }
  }
  handleRowsChange() {
    this.setTextareaDimensions();
  }
  async handleValueChange() {
    await this.updateComplete;
    this.checkValidity();
    this.setTextareaDimensions();
  }
  updated(changedProperties) {
    if (changedProperties.has("resize")) {
      this.setTextareaDimensions();
    }
    super.updated(changedProperties);
    if (changedProperties.has("value")) {
      this.customStates.set("blank", !this.value);
    }
  }
  /** Sets focus on the textarea. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the textarea. */
  blur() {
    this.input.blur();
  }
  /** Selects all the text in the textarea. */
  select() {
    this.input.select();
  }
  /** Gets or sets the textarea's scroll position. */
  scrollPosition(position) {
    if (position) {
      if (typeof position.top === "number") this.input.scrollTop = position.top;
      if (typeof position.left === "number") this.input.scrollLeft = position.left;
      return void 0;
    }
    return {
      top: this.input.scrollTop,
      left: this.input.scrollTop
    };
  }
  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  /** Replaces a range of text with a new string. */
  setRangeText(replacement, start, end, selectMode = "preserve") {
    const selectionStart = start ?? this.input.selectionStart;
    const selectionEnd = end ?? this.input.selectionEnd;
    this.input.setRangeText(replacement, selectionStart, selectionEnd, selectMode);
    if (this.value !== this.input.value) {
      this.value = this.input.value;
      this.setTextareaDimensions();
    }
  }
  formResetCallback() {
    this.value = this.defaultValue;
    super.formResetCallback();
  }
  render() {
    const hasLabelSlot = this.hasUpdated ? this.hasSlotController.test("label") : this.withLabel;
    const hasHintSlot = this.hasUpdated ? this.hasSlotController.test("hint") : this.withHint;
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHint = this.hint ? true : !!hasHintSlot;
    return x`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${hasLabel ? "false" : "true"}>
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="textarea">
        <textarea
          part="textarea"
          id="input"
          class="control"
          title=${this.title}
          name=${o$2(this.name)}
          .value=${l(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${o$2(this.placeholder)}
          rows=${o$2(this.rows)}
          minlength=${o$2(this.minlength)}
          maxlength=${o$2(this.maxlength)}
          autocapitalize=${o$2(this.autocapitalize)}
          autocorrect=${o$2(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${o$2(this.spellcheck)}
          enterkeyhint=${o$2(this.enterkeyhint)}
          inputmode=${o$2(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
        ></textarea>

        <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
        <div part="textarea-adjuster" class="size-adjuster" ?hidden=${this.resize !== "auto"}></div>
      </div>

      <slot
        id="hint"
        name="hint"
        part="hint"
        aria-hidden=${hasHint ? "false" : "true"}
        class=${e$2({
      "has-slotted": hasHint
    })}
        >${this.hint}</slot
      >
    `;
  }
};
WaTextarea.css = [textarea_default, form_control_default, size_default];
__decorateClass([
  e$4(".control")
], WaTextarea.prototype, "input", 2);
__decorateClass([
  e$4('[part~="base"]')
], WaTextarea.prototype, "base", 2);
__decorateClass([
  e$4(".size-adjuster")
], WaTextarea.prototype, "sizeAdjuster", 2);
__decorateClass([
  n$2()
], WaTextarea.prototype, "title", 2);
__decorateClass([
  n$2({ reflect: true })
], WaTextarea.prototype, "name", 2);
__decorateClass([
  r$1()
], WaTextarea.prototype, "value", 1);
__decorateClass([
  n$2({ attribute: "value", reflect: true })
], WaTextarea.prototype, "defaultValue", 2);
__decorateClass([
  n$2({ reflect: true })
], WaTextarea.prototype, "size", 2);
__decorateClass([
  n$2({ reflect: true })
], WaTextarea.prototype, "appearance", 2);
__decorateClass([
  n$2()
], WaTextarea.prototype, "label", 2);
__decorateClass([
  n$2({ attribute: "hint" })
], WaTextarea.prototype, "hint", 2);
__decorateClass([
  n$2()
], WaTextarea.prototype, "placeholder", 2);
__decorateClass([
  n$2({ type: Number })
], WaTextarea.prototype, "rows", 2);
__decorateClass([
  n$2({ reflect: true })
], WaTextarea.prototype, "resize", 2);
__decorateClass([
  n$2({ type: Boolean })
], WaTextarea.prototype, "disabled", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaTextarea.prototype, "readonly", 2);
__decorateClass([
  n$2({ reflect: true })
], WaTextarea.prototype, "form", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaTextarea.prototype, "required", 2);
__decorateClass([
  n$2({ type: Number })
], WaTextarea.prototype, "minlength", 2);
__decorateClass([
  n$2({ type: Number })
], WaTextarea.prototype, "maxlength", 2);
__decorateClass([
  n$2()
], WaTextarea.prototype, "autocapitalize", 2);
__decorateClass([
  n$2()
], WaTextarea.prototype, "autocorrect", 2);
__decorateClass([
  n$2()
], WaTextarea.prototype, "autocomplete", 2);
__decorateClass([
  n$2({ type: Boolean })
], WaTextarea.prototype, "autofocus", 2);
__decorateClass([
  n$2()
], WaTextarea.prototype, "enterkeyhint", 2);
__decorateClass([
  n$2({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (value) => !value || value === "false" ? false : true,
      toAttribute: (value) => value ? "true" : "false"
    }
  })
], WaTextarea.prototype, "spellcheck", 2);
__decorateClass([
  n$2()
], WaTextarea.prototype, "inputmode", 2);
__decorateClass([
  n$2({ attribute: "with-label", type: Boolean })
], WaTextarea.prototype, "withLabel", 2);
__decorateClass([
  n$2({ attribute: "with-hint", type: Boolean })
], WaTextarea.prototype, "withHint", 2);
__decorateClass([
  watch("rows", { waitUntilFirstUpdate: true })
], WaTextarea.prototype, "handleRowsChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], WaTextarea.prototype, "handleValueChange", 1);
WaTextarea = __decorateClass([
  t$1("wa-textarea")
], WaTextarea);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/radio-group/radio-group.css
var radio_group_default = ":host {\n  display: block;\n}\n\n.form-control {\n  position: relative;\n  border: none;\n  padding: 0;\n  margin: 0;\n}\n\n.label {\n  padding: 0;\n}\n\n.radio-group-required .label::after {\n  content: var(--wa-form-control-required-content);\n  margin-inline-start: var(--wa-form-control-required-content-offset);\n}\n\n[part~='form-control-input'] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 0; /* Radios handle their own spacing */\n}\n\n/* Horizontal */\n:host([orientation='horizontal']) [part~='form-control-input'] {\n  flex-direction: row;\n}\n\n/* Help text */\n[part~='hint'] {\n  margin-block-start: 0.5em;\n}\n";

// src/components/radio-group/radio-group.ts
var WaRadioGroup = class extends WebAwesomeFormAssociatedElement {
  constructor() {
    super();
    this.hasSlotController = new HasSlotController(this, "hint", "label");
    this.label = "";
    this.hint = "";
    this.name = null;
    this.disabled = false;
    this.orientation = "vertical";
    this._value = null;
    this.defaultValue = this.getAttribute("value") || null;
    this.size = "medium";
    this.required = false;
    this.withLabel = false;
    this.withHint = false;
    this.handleRadioClick = (e) => {
      const clickedRadio = e.target.closest("wa-radio");
      if (!clickedRadio || clickedRadio.disabled || clickedRadio.forceDisabled || this.disabled) {
        return;
      }
      const oldValue = this.value;
      this.value = clickedRadio.value;
      clickedRadio.checked = true;
      const radios = this.getAllRadios();
      for (const radio of radios) {
        if (clickedRadio === radio) {
          continue;
        }
        radio.checked = false;
        radio.setAttribute("tabindex", "-1");
      }
      if (this.value !== oldValue) {
        this.updateComplete.then(() => {
          this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
          this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
        });
      }
    };
    {
      this.addEventListener("keydown", this.handleKeyDown);
      this.addEventListener("click", this.handleRadioClick);
    }
  }
  static get validators() {
    const validators = [
      RequiredValidator({
        validationElement: Object.assign(document.createElement("input"), {
          required: true,
          type: "radio",
          // we need an id that's guaranteed to be unique; users will never see this
          name: uniqueId("__wa-radio")
        })
      })
    ];
    return [...super.validators, ...validators];
  }
  get value() {
    if (this.valueHasChanged) {
      return this._value;
    }
    return this._value ?? this.defaultValue;
  }
  set value(val) {
    if (typeof val === "number") val = String(val);
    this.valueHasChanged = true;
    this._value = val;
  }
  /**
   * We use the first available radio as the validationTarget similar to native HTML that shows the validation popup on
   * the first radio element.
   */
  get validationTarget() {
    const radio = this.querySelector(":is(wa-radio):not([disabled])");
    if (!radio) return void 0;
    return radio;
  }
  updated(changedProperties) {
    if (changedProperties.has("disabled") || changedProperties.has("value")) {
      this.syncRadioElements();
    }
  }
  formResetCallback(...args) {
    this.value = this.defaultValue;
    super.formResetCallback(...args);
    this.syncRadioElements();
  }
  getAllRadios() {
    return [...this.querySelectorAll("wa-radio")];
  }
  handleLabelClick() {
    this.focus();
  }
  async syncRadioElements() {
    const radios = this.getAllRadios();
    radios.forEach((radio, index) => {
      radio.setAttribute("size", this.size);
      radio.toggleAttribute("data-wa-radio-horizontal", this.orientation !== "vertical");
      radio.toggleAttribute("data-wa-radio-vertical", this.orientation === "vertical");
      radio.toggleAttribute("data-wa-radio-first", index === 0);
      radio.toggleAttribute("data-wa-radio-inner", index !== 0 && index !== radios.length - 1);
      radio.toggleAttribute("data-wa-radio-last", index === radios.length - 1);
      radio.forceDisabled = this.disabled;
    });
    await Promise.all(
      radios.map(async (radio) => {
        await radio.updateComplete;
        if (!radio.disabled && radio.value === this.value) {
          radio.checked = true;
        } else {
          radio.checked = false;
        }
      })
    );
    if (this.disabled) {
      radios.forEach((radio) => {
        radio.tabIndex = -1;
      });
    } else {
      const enabledRadios = radios.filter((radio) => !radio.disabled);
      const checkedRadio = enabledRadios.find((radio) => radio.checked);
      if (enabledRadios.length > 0) {
        if (checkedRadio) {
          enabledRadios.forEach((radio) => {
            radio.tabIndex = radio.checked ? 0 : -1;
          });
        } else {
          enabledRadios.forEach((radio, index) => {
            radio.tabIndex = index === 0 ? 0 : -1;
          });
        }
      }
      radios.filter((radio) => radio.disabled).forEach((radio) => {
        radio.tabIndex = -1;
      });
    }
  }
  handleKeyDown(event) {
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key) || this.disabled) {
      return;
    }
    const radios = this.getAllRadios().filter((radio) => !radio.disabled);
    if (radios.length <= 0) {
      return;
    }
    event.preventDefault();
    const oldValue = this.value;
    const checkedRadio = radios.find((radio) => radio.checked) ?? radios[0];
    const incr = event.key === " " ? 0 : ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
    let index = radios.indexOf(checkedRadio) + incr;
    if (!index) index = 0;
    if (index < 0) {
      index = radios.length - 1;
    }
    if (index > radios.length - 1) {
      index = 0;
    }
    const hasRadioButtons = radios.some((radio) => radio.tagName.toLowerCase() === "wa-radio-button");
    this.getAllRadios().forEach((radio) => {
      radio.checked = false;
      if (!hasRadioButtons) {
        radio.setAttribute("tabindex", "-1");
      }
    });
    this.value = radios[index].value;
    radios[index].checked = true;
    if (!hasRadioButtons) {
      radios[index].setAttribute("tabindex", "0");
      radios[index].focus();
    } else {
      radios[index].shadowRoot.querySelector("button").focus();
    }
    if (this.value !== oldValue) {
      this.updateComplete.then(() => {
        this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
        this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      });
    }
    event.preventDefault();
  }
  /** Sets focus on the radio group. */
  focus(options) {
    if (this.disabled) return;
    const radios = this.getAllRadios();
    const checked = radios.find((radio) => radio.checked);
    const firstEnabledRadio = radios.find((radio) => !radio.disabled);
    const radioToFocus = checked || firstEnabledRadio;
    if (radioToFocus) {
      radioToFocus.focus(options);
    }
  }
  render() {
    const hasLabelSlot = this.hasUpdated ? this.hasSlotController.test("label") : this.withLabel;
    const hasHintSlot = this.hasUpdated ? this.hasSlotController.test("hint") : this.withHint;
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHint = this.hint ? true : !!hasHintSlot;
    return x`
      <fieldset
        part="form-control"
        class=${e$2({
      "form-control": true,
      "form-control-radio-group": true,
      "form-control-has-label": hasLabel
    })}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}
      >
        <label
          part="form-control-label"
          id="label"
          class="label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${e$2({
      "has-slotted": hasHint
    })}
          aria-hidden=${hasHint ? "false" : "true"}
          >${this.hint}</slot
        >
      </fieldset>
    `;
  }
};
WaRadioGroup.css = [size_default, form_control_default, radio_group_default];
//
// We need this because if we don't have it, FormValidation yells at us that it's "not focusable".
//   If we use `this.tabIndex = -1` we can't focus the radio inside.
//
WaRadioGroup.shadowRootOptions = { ...WebAwesomeFormAssociatedElement.shadowRootOptions, delegatesFocus: true };
__decorateClass([
  e$4("slot:not([name])")
], WaRadioGroup.prototype, "defaultSlot", 2);
__decorateClass([
  n$2()
], WaRadioGroup.prototype, "label", 2);
__decorateClass([
  n$2({ attribute: "hint" })
], WaRadioGroup.prototype, "hint", 2);
__decorateClass([
  n$2({ reflect: true })
], WaRadioGroup.prototype, "name", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaRadioGroup.prototype, "disabled", 2);
__decorateClass([
  n$2({ reflect: true })
], WaRadioGroup.prototype, "orientation", 2);
__decorateClass([
  r$1()
], WaRadioGroup.prototype, "value", 1);
__decorateClass([
  n$2({ attribute: "value", reflect: true })
], WaRadioGroup.prototype, "defaultValue", 2);
__decorateClass([
  n$2({ reflect: true })
], WaRadioGroup.prototype, "size", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaRadioGroup.prototype, "required", 2);
__decorateClass([
  n$2({ type: Boolean, attribute: "with-label" })
], WaRadioGroup.prototype, "withLabel", 2);
__decorateClass([
  n$2({ type: Boolean, attribute: "with-hint" })
], WaRadioGroup.prototype, "withHint", 2);
WaRadioGroup = __decorateClass([
  t$1("wa-radio-group")
], WaRadioGroup);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/radio/radio.css
var radio_default = ":host {\n  --checked-icon-color: var(--wa-form-control-activated-color);\n  --checked-icon-scale: 0.7;\n\n  color: var(--wa-form-control-value-color);\n  display: inline-flex;\n  flex-direction: row;\n  align-items: top;\n  font-family: inherit;\n  font-weight: var(--wa-form-control-value-font-weight);\n  line-height: var(--wa-form-control-value-line-height);\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n:host(:focus) {\n  outline: none;\n}\n\n/* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */\n:host(:not(:state(checked))) svg circle {\n  opacity: 0;\n}\n\n[part~='label'] {\n  display: inline;\n}\n\n[part~='hint'] {\n  margin-block-start: 0.5em;\n}\n\n/* Default spacing for default appearance radios */\n:host([appearance='default']) {\n  margin-block: 0.375em; /* Half of the original 0.75em gap on each side */\n}\n\n:host([appearance='default'][data-wa-radio-horizontal]) {\n  margin-block: 0;\n  margin-inline: 0.5em; /* Half of the original 1em gap on each side */\n}\n\n/* Remove margin from first/last items to prevent extra space */\n:host([appearance='default'][data-wa-radio-first]) {\n  margin-block-start: 0;\n  margin-inline-start: 0;\n}\n\n:host([appearance='default'][data-wa-radio-last]) {\n  margin-block-end: 0;\n  margin-inline-end: 0;\n}\n\n/* Button appearance have no spacing, they get handled by the overlap margins below */\n:host([appearance='button']) {\n  margin: 0;\n  align-items: center;\n  min-height: var(--wa-form-control-height);\n  background-color: var(--wa-color-surface-default);\n  border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);\n  border-radius: var(--wa-border-radius-m);\n  padding: 0 var(--wa-form-control-padding-inline);\n  transition:\n    background-color var(--wa-transition-fast),\n    border-color var(--wa-transition-fast);\n}\n\n/* Default appearance */\n:host([appearance='default']) {\n  .control {\n    flex: 0 0 auto;\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--wa-form-control-toggle-size);\n    height: var(--wa-form-control-toggle-size);\n    border-color: var(--wa-form-control-border-color);\n    border-radius: 50%;\n    border-style: var(--wa-form-control-border-style);\n    border-width: var(--wa-form-control-border-width);\n    background-color: var(--wa-form-control-background-color);\n    color: transparent;\n    transition:\n      background var(--wa-transition-normal),\n      border-color var(--wa-transition-fast),\n      box-shadow var(--wa-transition-fast),\n      color var(--wa-transition-fast);\n    transition-timing-function: var(--wa-transition-easing);\n\n    margin-inline-end: 0.5em;\n  }\n\n  .checked-icon {\n    display: flex;\n    fill: currentColor;\n    width: var(--wa-form-control-toggle-size);\n    height: var(--wa-form-control-toggle-size);\n    scale: var(--checked-icon-scale);\n  }\n}\n\n/* Button appearance */\n:host([appearance='button']) {\n  .control {\n    display: none;\n  }\n}\n\n/* Checked */\n:host(:state(checked)) .control {\n  color: var(--checked-icon-color);\n  border-color: var(--wa-form-control-activated-color);\n  background-color: var(--wa-form-control-background-color);\n}\n\n/* Focus */\n:host(:focus-visible) .control {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n/* Disabled */\n:host(:state(disabled)) {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n/* Horizontal grouping - remove inner border radius */\n:host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-inner]) {\n  border-radius: 0;\n}\n\n:host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-first]) {\n  border-start-end-radius: 0;\n  border-end-end-radius: 0;\n}\n\n:host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-last]) {\n  border-start-start-radius: 0;\n  border-end-start-radius: 0;\n}\n\n/* Vertical grouping - remove inner border radius */\n:host([appearance='button'][data-wa-radio-vertical][data-wa-radio-inner]) {\n  border-radius: 0;\n}\n\n:host([appearance='button'][data-wa-radio-vertical][data-wa-radio-first]) {\n  border-end-start-radius: 0;\n  border-end-end-radius: 0;\n}\n\n:host([appearance='button'][data-wa-radio-vertical][data-wa-radio-last]) {\n  border-start-start-radius: 0;\n  border-start-end-radius: 0;\n}\n\n@media (hover: hover) {\n  :host([appearance='button']:hover:not(:state(disabled), :state(checked))) {\n    background-color: color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover));\n  }\n}\n\n:host([appearance='button']:focus-visible) {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n:host([appearance='button']:state(checked)) {\n  border-color: var(--wa-form-control-activated-color);\n  background-color: var(--wa-color-brand-fill-quiet);\n}\n\n:host([appearance='button']:state(checked):focus-visible) {\n  outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-brand-border-loud);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n/* Button overlap margins */\n:host([appearance='button'][data-wa-radio-horizontal]:not([data-wa-radio-first])) {\n  margin-inline-start: calc(-1 * var(--wa-form-control-border-width));\n}\n\n:host([appearance='button'][data-wa-radio-vertical]:not([data-wa-radio-first])) {\n  margin-block-start: calc(-1 * var(--wa-form-control-border-width));\n}\n\n/* Ensure interactive states are visible above adjacent buttons */\n:host([appearance='button']:hover),\n:host([appearance='button']:state(checked)) {\n  position: relative;\n  z-index: 1;\n}\n\n:host([appearance='button']:focus-visible) {\n  z-index: 2;\n}\n";

// src/components/radio/radio.ts
var WaRadio = class extends WebAwesomeFormAssociatedElement {
  constructor() {
    super();
    this.checked = false;
    this.forceDisabled = false;
    this.form = null;
    this.appearance = "default";
    this.size = "medium";
    this.disabled = false;
    this.handleClick = () => {
      if (!this.disabled && !this.forceDisabled) {
        this.checked = true;
      }
    };
    {
      this.addEventListener("click", this.handleClick);
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.setInitialAttributes();
  }
  setInitialAttributes() {
    this.setAttribute("role", "radio");
    this.tabIndex = 0;
    this.setAttribute("aria-disabled", this.disabled || this.forceDisabled ? "true" : "false");
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("checked")) {
      this.customStates.set("checked", this.checked);
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
      if (!this.disabled && !this.forceDisabled) {
        this.tabIndex = this.checked ? 0 : -1;
      }
    }
    if (changedProperties.has("disabled") || changedProperties.has("forceDisabled")) {
      const effectivelyDisabled = this.disabled || this.forceDisabled;
      this.customStates.set("disabled", effectivelyDisabled);
      this.setAttribute("aria-disabled", effectivelyDisabled ? "true" : "false");
      if (effectivelyDisabled) {
        this.tabIndex = -1;
      } else {
        this.tabIndex = this.checked ? 0 : -1;
      }
    }
  }
  /**
   * @override
   */
  setValue() {
  }
  render() {
    return x`
      <span part="control" class="control">
        ${this.checked ? x`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            ` : ""}
      </span>

      <slot part="label" class="label"></slot>
    `;
  }
};
WaRadio.css = [form_control_default, size_default, radio_default];
__decorateClass([
  r$1()
], WaRadio.prototype, "checked", 2);
__decorateClass([
  r$1()
], WaRadio.prototype, "forceDisabled", 2);
__decorateClass([
  n$2({ reflect: true })
], WaRadio.prototype, "form", 2);
__decorateClass([
  n$2({ reflect: true })
], WaRadio.prototype, "value", 2);
__decorateClass([
  n$2({ reflect: true })
], WaRadio.prototype, "appearance", 2);
__decorateClass([
  n$2({ reflect: true })
], WaRadio.prototype, "size", 2);
__decorateClass([
  n$2({ type: Boolean })
], WaRadio.prototype, "disabled", 2);
WaRadio = __decorateClass([
  t$1("wa-radio")
], WaRadio);

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/components/callout/callout.css
var callout_default = ":host {\n  display: flex;\n  position: relative;\n  align-items: stretch;\n  border-radius: var(--wa-panel-border-radius);\n  background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));\n  border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));\n  border-style: var(--wa-panel-border-style);\n  border-width: var(--wa-panel-border-width);\n  color: var(--wa-color-text-normal);\n  padding: 1em;\n}\n\n/* Appearance modifiers */\n:host([appearance~='plain']) {\n  background-color: transparent;\n  border-color: transparent;\n}\n\n:host([appearance~='outlined']) {\n  background-color: transparent;\n  border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));\n}\n\n:host([appearance~='filled']) {\n  background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));\n  border-color: transparent;\n}\n\n:host([appearance~='filled-outlined']) {\n  border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));\n}\n\n:host([appearance~='accent']) {\n  color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));\n  background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));\n  border-color: transparent;\n\n  [part~='icon'] {\n    color: currentColor;\n  }\n}\n\n[part~='icon'] {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  color: var(--wa-color-on-quiet);\n  font-size: 1.25em;\n}\n\n::slotted([slot='icon']) {\n  margin-inline-end: var(--wa-form-control-padding-inline);\n}\n\n[part~='message'] {\n  flex: 1 1 auto;\n  display: block;\n  overflow: hidden;\n}\n";

// src/components/callout/callout.ts
var WaCallout = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.variant = "brand";
    this.size = "medium";
  }
  render() {
    return x`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `;
  }
};
WaCallout.css = [callout_default, variants_default, size_default];
__decorateClass([
  n$2({ reflect: true })
], WaCallout.prototype, "variant", 2);
__decorateClass([
  n$2({ reflect: true })
], WaCallout.prototype, "appearance", 2);
__decorateClass([
  n$2({ reflect: true })
], WaCallout.prototype, "size", 2);
WaCallout = __decorateClass([
  t$1("wa-callout")
], WaCallout);

const bounce = [
  { offset: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 0, 0)' },
  { offset: 0.2, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 0, 0)' },
  { offset: 0.4, easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', transform: 'translate3d(0, -30px, 0) scaleY(1.1)' },
  { offset: 0.43, easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', transform: 'translate3d(0, -30px, 0) scaleY(1.1)' },
  { offset: 0.53, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 0, 0)' },
  { offset: 0.7, easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', transform: 'translate3d(0, -15px, 0) scaleY(1.05)' },
  {
    offset: 0.8,
    'transition-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    transform: 'translate3d(0, 0, 0) scaleY(0.95)'
  },
  { offset: 0.9, transform: 'translate3d(0, -4px, 0) scaleY(1.02)' },
  { offset: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 0, 0)' }
];

const flash = [
  { offset: 0, opacity: '1' },
  { offset: 0.25, opacity: '0' },
  { offset: 0.5, opacity: '1' },
  { offset: 0.75, opacity: '0' },
  { offset: 1, opacity: '1' }
];

const headShake = [
  { offset: 0, transform: 'translateX(0)' },
  { offset: 0.065, transform: 'translateX(-6px) rotateY(-9deg)' },
  { offset: 0.185, transform: 'translateX(5px) rotateY(7deg)' },
  { offset: 0.315, transform: 'translateX(-3px) rotateY(-5deg)' },
  { offset: 0.435, transform: 'translateX(2px) rotateY(3deg)' },
  { offset: 0.5, transform: 'translateX(0)' }
];

const heartBeat = [
  { offset: 0, transform: 'scale(1)' },
  { offset: 0.14, transform: 'scale(1.3)' },
  { offset: 0.28, transform: 'scale(1)' },
  { offset: 0.42, transform: 'scale(1.3)' },
  { offset: 0.7, transform: 'scale(1)' }
];

const jello = [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 0.111, transform: 'translate3d(0, 0, 0)' },
  { offset: 0.222, transform: 'skewX(-12.5deg) skewY(-12.5deg)' },
  { offset: 0.33299999999999996, transform: 'skewX(6.25deg) skewY(6.25deg)' },
  { offset: 0.444, transform: 'skewX(-3.125deg) skewY(-3.125deg)' },
  { offset: 0.555, transform: 'skewX(1.5625deg) skewY(1.5625deg)' },
  { offset: 0.6659999999999999, transform: 'skewX(-0.78125deg) skewY(-0.78125deg)' },
  { offset: 0.777, transform: 'skewX(0.390625deg) skewY(0.390625deg)' },
  { offset: 0.888, transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const pulse = [
  { offset: 0, transform: 'scale3d(1, 1, 1)' },
  { offset: 0.5, transform: 'scale3d(1.05, 1.05, 1.05)' },
  { offset: 1, transform: 'scale3d(1, 1, 1)' }
];

const rubberBand = [
  { offset: 0, transform: 'scale3d(1, 1, 1)' },
  { offset: 0.3, transform: 'scale3d(1.25, 0.75, 1)' },
  { offset: 0.4, transform: 'scale3d(0.75, 1.25, 1)' },
  { offset: 0.5, transform: 'scale3d(1.15, 0.85, 1)' },
  { offset: 0.65, transform: 'scale3d(0.95, 1.05, 1)' },
  { offset: 0.75, transform: 'scale3d(1.05, 0.95, 1)' },
  { offset: 1, transform: 'scale3d(1, 1, 1)' }
];

const shake = [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 0.1, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 0.2, transform: 'translate3d(10px, 0, 0)' },
  { offset: 0.3, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 0.4, transform: 'translate3d(10px, 0, 0)' },
  { offset: 0.5, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 0.6, transform: 'translate3d(10px, 0, 0)' },
  { offset: 0.7, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 0.8, transform: 'translate3d(10px, 0, 0)' },
  { offset: 0.9, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const shakeX = [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 0.1, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 0.2, transform: 'translate3d(10px, 0, 0)' },
  { offset: 0.3, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 0.4, transform: 'translate3d(10px, 0, 0)' },
  { offset: 0.5, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 0.6, transform: 'translate3d(10px, 0, 0)' },
  { offset: 0.7, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 0.8, transform: 'translate3d(10px, 0, 0)' },
  { offset: 0.9, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const shakeY = [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 0.1, transform: 'translate3d(0, -10px, 0)' },
  { offset: 0.2, transform: 'translate3d(0, 10px, 0)' },
  { offset: 0.3, transform: 'translate3d(0, -10px, 0)' },
  { offset: 0.4, transform: 'translate3d(0, 10px, 0)' },
  { offset: 0.5, transform: 'translate3d(0, -10px, 0)' },
  { offset: 0.6, transform: 'translate3d(0, 10px, 0)' },
  { offset: 0.7, transform: 'translate3d(0, -10px, 0)' },
  { offset: 0.8, transform: 'translate3d(0, 10px, 0)' },
  { offset: 0.9, transform: 'translate3d(0, -10px, 0)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const swing = [
  { offset: 0.2, transform: 'rotate3d(0, 0, 1, 15deg)' },
  { offset: 0.4, transform: 'rotate3d(0, 0, 1, -10deg)' },
  { offset: 0.6, transform: 'rotate3d(0, 0, 1, 5deg)' },
  { offset: 0.8, transform: 'rotate3d(0, 0, 1, -5deg)' },
  { offset: 1, transform: 'rotate3d(0, 0, 1, 0deg)' }
];

const tada = [
  { offset: 0, transform: 'scale3d(1, 1, 1)' },
  { offset: 0.1, transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)' },
  { offset: 0.2, transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)' },
  { offset: 0.3, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
  { offset: 0.4, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
  { offset: 0.5, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
  { offset: 0.6, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
  { offset: 0.7, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
  { offset: 0.8, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
  { offset: 0.9, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
  { offset: 1, transform: 'scale3d(1, 1, 1)' }
];

const wobble = [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 0.15, transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)' },
  { offset: 0.3, transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)' },
  { offset: 0.45, transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)' },
  { offset: 0.6, transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)' },
  { offset: 0.75, transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const backInDown = [
  { offset: 0, transform: 'translateY(-1200px) scale(0.7)', opacity: '0.7' },
  { offset: 0.8, transform: 'translateY(0px) scale(0.7)', opacity: '0.7' },
  { offset: 1, transform: 'scale(1)', opacity: '1' }
];

const backInLeft = [
  { offset: 0, transform: 'translateX(-2000px) scale(0.7)', opacity: '0.7' },
  { offset: 0.8, transform: 'translateX(0px) scale(0.7)', opacity: '0.7' },
  { offset: 1, transform: 'scale(1)', opacity: '1' }
];

const backInRight = [
  { offset: 0, transform: 'translateX(2000px) scale(0.7)', opacity: '0.7' },
  { offset: 0.8, transform: 'translateX(0px) scale(0.7)', opacity: '0.7' },
  { offset: 1, transform: 'scale(1)', opacity: '1' }
];

const backInUp = [
  { offset: 0, transform: 'translateY(1200px) scale(0.7)', opacity: '0.7' },
  { offset: 0.8, transform: 'translateY(0px) scale(0.7)', opacity: '0.7' },
  { offset: 1, transform: 'scale(1)', opacity: '1' }
];

const backOutDown = [
  { offset: 0, transform: 'scale(1)', opacity: '1' },
  { offset: 0.2, transform: 'translateY(0px) scale(0.7)', opacity: '0.7' },
  { offset: 1, transform: 'translateY(700px) scale(0.7)', opacity: '0.7' }
];

const backOutLeft = [
  { offset: 0, transform: 'scale(1)', opacity: '1' },
  { offset: 0.2, transform: 'translateX(0px) scale(0.7)', opacity: '0.7' },
  { offset: 1, transform: 'translateX(-2000px) scale(0.7)', opacity: '0.7' }
];

const backOutRight = [
  { offset: 0, transform: 'scale(1)', opacity: '1' },
  { offset: 0.2, transform: 'translateX(0px) scale(0.7)', opacity: '0.7' },
  { offset: 1, transform: 'translateX(2000px) scale(0.7)', opacity: '0.7' }
];

const backOutUp = [
  { offset: 0, transform: 'scale(1)', opacity: '1' },
  { offset: 0.2, transform: 'translateY(0px) scale(0.7)', opacity: '0.7' },
  { offset: 1, transform: 'translateY(-700px) scale(0.7)', opacity: '0.7' }
];

const bounceIn = [
  { offset: 0, opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
  { offset: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.2, transform: 'scale3d(1.1, 1.1, 1.1)' },
  { offset: 0.2, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.4, transform: 'scale3d(0.9, 0.9, 0.9)' },
  { offset: 0.4, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.6, opacity: '1', transform: 'scale3d(1.03, 1.03, 1.03)' },
  { offset: 0.6, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.8, transform: 'scale3d(0.97, 0.97, 0.97)' },
  { offset: 0.8, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 1, opacity: '1', transform: 'scale3d(1, 1, 1)' },
  { offset: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];

const bounceInDown = [
  { offset: 0, opacity: '0', transform: 'translate3d(0, -3000px, 0) scaleY(3)' },
  { offset: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.6, opacity: '1', transform: 'translate3d(0, 25px, 0) scaleY(0.9)' },
  { offset: 0.6, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.75, transform: 'translate3d(0, -10px, 0) scaleY(0.95)' },
  { offset: 0.75, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.9, transform: 'translate3d(0, 5px, 0) scaleY(0.985)' },
  { offset: 0.9, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];

const bounceInLeft = [
  { offset: 0, opacity: '0', transform: 'translate3d(-3000px, 0, 0) scaleX(3)' },
  { offset: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.6, opacity: '1', transform: 'translate3d(25px, 0, 0) scaleX(1)' },
  { offset: 0.6, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.75, transform: 'translate3d(-10px, 0, 0) scaleX(0.98)' },
  { offset: 0.75, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.9, transform: 'translate3d(5px, 0, 0) scaleX(0.995)' },
  { offset: 0.9, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];

const bounceInRight = [
  { offset: 0, opacity: '0', transform: 'translate3d(3000px, 0, 0) scaleX(3)' },
  { offset: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.6, opacity: '1', transform: 'translate3d(-25px, 0, 0) scaleX(1)' },
  { offset: 0.6, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.75, transform: 'translate3d(10px, 0, 0) scaleX(0.98)' },
  { offset: 0.75, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.9, transform: 'translate3d(-5px, 0, 0) scaleX(0.995)' },
  { offset: 0.9, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];

const bounceInUp = [
  { offset: 0, opacity: '0', transform: 'translate3d(0, 3000px, 0) scaleY(5)' },
  { offset: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.6, opacity: '1', transform: 'translate3d(0, -20px, 0) scaleY(0.9)' },
  { offset: 0.6, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.75, transform: 'translate3d(0, 10px, 0) scaleY(0.95)' },
  { offset: 0.75, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.9, transform: 'translate3d(0, -5px, 0) scaleY(0.985)' },
  { offset: 0.9, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];

const bounceOut = [
  { offset: 0.2, transform: 'scale3d(0.9, 0.9, 0.9)' },
  { offset: 0.5, opacity: '1', transform: 'scale3d(1.1, 1.1, 1.1)' },
  { offset: 0.55, opacity: '1', transform: 'scale3d(1.1, 1.1, 1.1)' },
  { offset: 1, opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' }
];

const bounceOutDown = [
  { offset: 0.2, transform: 'translate3d(0, 10px, 0) scaleY(0.985)' },
  { offset: 0.4, opacity: '1', transform: 'translate3d(0, -20px, 0) scaleY(0.9)' },
  { offset: 0.45, opacity: '1', transform: 'translate3d(0, -20px, 0) scaleY(0.9)' },
  { offset: 1, opacity: '0', transform: 'translate3d(0, 2000px, 0) scaleY(3)' }
];

const bounceOutLeft = [
  { offset: 0.2, opacity: '1', transform: 'translate3d(20px, 0, 0) scaleX(0.9)' },
  { offset: 1, opacity: '0', transform: 'translate3d(-2000px, 0, 0) scaleX(2)' }
];

const bounceOutRight = [
  { offset: 0.2, opacity: '1', transform: 'translate3d(-20px, 0, 0) scaleX(0.9)' },
  { offset: 1, opacity: '0', transform: 'translate3d(2000px, 0, 0) scaleX(2)' }
];

const bounceOutUp = [
  { offset: 0.2, transform: 'translate3d(0, -10px, 0) scaleY(0.985)' },
  { offset: 0.4, opacity: '1', transform: 'translate3d(0, 20px, 0) scaleY(0.9)' },
  { offset: 0.45, opacity: '1', transform: 'translate3d(0, 20px, 0) scaleY(0.9)' },
  { offset: 1, opacity: '0', transform: 'translate3d(0, -2000px, 0) scaleY(3)' }
];

const fadeIn = [
  { offset: 0, opacity: '0' },
  { offset: 1, opacity: '1' }
];

const fadeInBottomLeft = [
  { offset: 0, opacity: '0', transform: 'translate3d(-100%, 100%, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInBottomRight = [
  { offset: 0, opacity: '0', transform: 'translate3d(100%, 100%, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInDown = [
  { offset: 0, opacity: '0', transform: 'translate3d(0, -100%, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInDownBig = [
  { offset: 0, opacity: '0', transform: 'translate3d(0, -2000px, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInLeft = [
  { offset: 0, opacity: '0', transform: 'translate3d(-100%, 0, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInLeftBig = [
  { offset: 0, opacity: '0', transform: 'translate3d(-2000px, 0, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInRight = [
  { offset: 0, opacity: '0', transform: 'translate3d(100%, 0, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInRightBig = [
  { offset: 0, opacity: '0', transform: 'translate3d(2000px, 0, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInTopLeft = [
  { offset: 0, opacity: '0', transform: 'translate3d(-100%, -100%, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInTopRight = [
  { offset: 0, opacity: '0', transform: 'translate3d(100%, -100%, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInUp = [
  { offset: 0, opacity: '0', transform: 'translate3d(0, 100%, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInUpBig = [
  { offset: 0, opacity: '0', transform: 'translate3d(0, 2000px, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeOut = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0' }
];

const fadeOutBottomLeft = [
  { offset: 0, opacity: '1', transform: 'translate3d(0, 0, 0)' },
  { offset: 1, opacity: '0', transform: 'translate3d(-100%, 100%, 0)' }
];

const fadeOutBottomRight = [
  { offset: 0, opacity: '1', transform: 'translate3d(0, 0, 0)' },
  { offset: 1, opacity: '0', transform: 'translate3d(100%, 100%, 0)' }
];

const fadeOutDown = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(0, 100%, 0)' }
];

const fadeOutDownBig = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(0, 2000px, 0)' }
];

const fadeOutLeft = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(-100%, 0, 0)' }
];

const fadeOutLeftBig = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(-2000px, 0, 0)' }
];

const fadeOutRight = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(100%, 0, 0)' }
];

const fadeOutRightBig = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(2000px, 0, 0)' }
];

const fadeOutTopLeft = [
  { offset: 0, opacity: '1', transform: 'translate3d(0, 0, 0)' },
  { offset: 1, opacity: '0', transform: 'translate3d(-100%, -100%, 0)' }
];

const fadeOutTopRight = [
  { offset: 0, opacity: '1', transform: 'translate3d(0, 0, 0)' },
  { offset: 1, opacity: '0', transform: 'translate3d(100%, -100%, 0)' }
];

const fadeOutUp = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(0, -100%, 0)' }
];

const fadeOutUpBig = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(0, -2000px, 0)' }
];

const flip = [
  {
    offset: 0,
    transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
    easing: 'ease-out'
  },
  {
    offset: 0.4,
    transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg)',
    easing: 'ease-out'
  },
  {
    offset: 0.5,
    transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg)',
    easing: 'ease-in'
  },
  {
    offset: 0.8,
    transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg)',
    easing: 'ease-in'
  },
  {
    offset: 1,
    transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
    easing: 'ease-in'
  }
];

const flipInX = [
  { offset: 0, transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', easing: 'ease-in', opacity: '0' },
  { offset: 0.4, transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', easing: 'ease-in' },
  { offset: 0.6, transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: '1' },
  { offset: 0.8, transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)' },
  { offset: 1, transform: 'perspective(400px)' }
];

const flipInY = [
  { offset: 0, transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', easing: 'ease-in', opacity: '0' },
  { offset: 0.4, transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', easing: 'ease-in' },
  { offset: 0.6, transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '1' },
  { offset: 0.8, transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)' },
  { offset: 1, transform: 'perspective(400px)' }
];

const flipOutX = [
  { offset: 0, transform: 'perspective(400px)' },
  { offset: 0.3, transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: '1' },
  { offset: 1, transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0' }
];

const flipOutY = [
  { offset: 0, transform: 'perspective(400px)' },
  { offset: 0.3, transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: '1' },
  { offset: 1, transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0' }
];

const lightSpeedInLeft = [
  { offset: 0, transform: 'translate3d(-100%, 0, 0) skewX(30deg)', opacity: '0' },
  { offset: 0.6, transform: 'skewX(-20deg)', opacity: '1' },
  { offset: 0.8, transform: 'skewX(5deg)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const lightSpeedInRight = [
  { offset: 0, transform: 'translate3d(100%, 0, 0) skewX(-30deg)', opacity: '0' },
  { offset: 0.6, transform: 'skewX(20deg)', opacity: '1' },
  { offset: 0.8, transform: 'skewX(-5deg)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const lightSpeedOutLeft = [
  { offset: 0, opacity: '1' },
  { offset: 1, transform: 'translate3d(-100%, 0, 0) skewX(-30deg)', opacity: '0' }
];

const lightSpeedOutRight = [
  { offset: 0, opacity: '1' },
  { offset: 1, transform: 'translate3d(100%, 0, 0) skewX(30deg)', opacity: '0' }
];

const rotateIn = [
  { offset: 0, transform: 'rotate3d(0, 0, 1, -200deg)', opacity: '0' },
  { offset: 1, transform: 'translate3d(0, 0, 0)', opacity: '1' }
];

const rotateInDownLeft = [
  { offset: 0, transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0' },
  { offset: 1, transform: 'translate3d(0, 0, 0)', opacity: '1' }
];

const rotateInDownRight = [
  { offset: 0, transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0' },
  { offset: 1, transform: 'translate3d(0, 0, 0)', opacity: '1' }
];

const rotateInUpLeft = [
  { offset: 0, transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0' },
  { offset: 1, transform: 'translate3d(0, 0, 0)', opacity: '1' }
];

const rotateInUpRight = [
  { offset: 0, transform: 'rotate3d(0, 0, 1, -90deg)', opacity: '0' },
  { offset: 1, transform: 'translate3d(0, 0, 0)', opacity: '1' }
];

const rotateOut = [
  { offset: 0, opacity: '1' },
  { offset: 1, transform: 'rotate3d(0, 0, 1, 200deg)', opacity: '0' }
];

const rotateOutDownLeft = [
  { offset: 0, opacity: '1' },
  { offset: 1, transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0' }
];

const rotateOutDownRight = [
  { offset: 0, opacity: '1' },
  { offset: 1, transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0' }
];

const rotateOutUpLeft = [
  { offset: 0, opacity: '1' },
  { offset: 1, transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0' }
];

const rotateOutUpRight = [
  { offset: 0, opacity: '1' },
  { offset: 1, transform: 'rotate3d(0, 0, 1, 90deg)', opacity: '0' }
];

const slideInDown = [
  { offset: 0, transform: 'translate3d(0, -100%, 0)', visibility: 'visible' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const slideInLeft = [
  { offset: 0, transform: 'translate3d(-100%, 0, 0)', visibility: 'visible' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const slideInRight = [
  { offset: 0, transform: 'translate3d(100%, 0, 0)', visibility: 'visible' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const slideInUp = [
  { offset: 0, transform: 'translate3d(0, 100%, 0)', visibility: 'visible' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const slideOutDown = [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, visibility: 'hidden', transform: 'translate3d(0, 100%, 0)' }
];

const slideOutLeft = [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)' }
];

const slideOutRight = [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, visibility: 'hidden', transform: 'translate3d(100%, 0, 0)' }
];

const slideOutUp = [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, visibility: 'hidden', transform: 'translate3d(0, -100%, 0)' }
];

const hinge = [
  { offset: 0, easing: 'ease-in-out' },
  { offset: 0.2, transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out' },
  { offset: 0.4, transform: 'rotate3d(0, 0, 1, 60deg)', easing: 'ease-in-out', opacity: '1' },
  { offset: 0.6, transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out' },
  { offset: 0.8, transform: 'rotate3d(0, 0, 1, 60deg)', easing: 'ease-in-out', opacity: '1' },
  { offset: 1, transform: 'translate3d(0, 700px, 0)', opacity: '0' }
];

const jackInTheBox = [
  { offset: 0, opacity: '0', transform: 'scale(0.1) rotate(30deg)', 'transform-origin': 'center bottom' },
  { offset: 0.5, transform: 'rotate(-10deg)' },
  { offset: 0.7, transform: 'rotate(3deg)' },
  { offset: 1, opacity: '1', transform: 'scale(1)' }
];

const rollIn = [
  { offset: 0, opacity: '0', transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const rollOut = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)' }
];

const zoomIn = [
  { offset: 0, opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
  { offset: 0.5, opacity: '1' }
];

const zoomInDown = [
  {
    offset: 0,
    opacity: '0',
    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)',
    easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  {
    offset: 0.6,
    opacity: '1',
    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
  }
];

const zoomInLeft = [
  {
    offset: 0,
    opacity: '0',
    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)',
    easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  {
    offset: 0.6,
    opacity: '1',
    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
  }
];

const zoomInRight = [
  {
    offset: 0,
    opacity: '0',
    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)',
    easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  {
    offset: 0.6,
    opacity: '1',
    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)',
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
  }
];

const zoomInUp = [
  {
    offset: 0,
    opacity: '0',
    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)',
    easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  {
    offset: 0.6,
    opacity: '1',
    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
  }
];

const zoomOut = [
  { offset: 0, opacity: '1' },
  { offset: 0.5, opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
  { offset: 1, opacity: '0' }
];

const zoomOutDown = [
  {
    offset: 0.4,
    opacity: '1',
    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
    easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  {
    offset: 1,
    opacity: '0',
    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)',
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
  }
];

const zoomOutLeft = [
  { offset: 0.4, opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)' },
  { offset: 1, opacity: '0', transform: 'scale(0.1) translate3d(-2000px, 0, 0)' }
];

const zoomOutRight = [
  { offset: 0.4, opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)' },
  { offset: 1, opacity: '0', transform: 'scale(0.1) translate3d(2000px, 0, 0)' }
];

const zoomOutUp = [
  {
    offset: 0.4,
    opacity: '1',
    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
    easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  {
    offset: 1,
    opacity: '0',
    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
  }
];

const easings = {
  linear: 'linear',
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  easeInSine: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
  easeOutSine: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
  easeInOutSine: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
  easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  easeInQuart: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
  easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  easeInOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
  easeInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  easeOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',
  easeInExpo: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
  easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
  easeInOutExpo: 'cubic-bezier(1, 0, 0, 1)',
  easeInCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
  easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
  easeInOutCirc: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  easeInBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
  easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  easeInOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
};

const animations = /*#__PURE__*/Object.freeze({
  __proto__: null,
  easings: easings,
  bounce: bounce,
  flash: flash,
  headShake: headShake,
  heartBeat: heartBeat,
  jello: jello,
  pulse: pulse,
  rubberBand: rubberBand,
  shake: shake,
  shakeX: shakeX,
  shakeY: shakeY,
  swing: swing,
  tada: tada,
  wobble: wobble,
  backInDown: backInDown,
  backInLeft: backInLeft,
  backInRight: backInRight,
  backInUp: backInUp,
  backOutDown: backOutDown,
  backOutLeft: backOutLeft,
  backOutRight: backOutRight,
  backOutUp: backOutUp,
  bounceIn: bounceIn,
  bounceInDown: bounceInDown,
  bounceInLeft: bounceInLeft,
  bounceInRight: bounceInRight,
  bounceInUp: bounceInUp,
  bounceOut: bounceOut,
  bounceOutDown: bounceOutDown,
  bounceOutLeft: bounceOutLeft,
  bounceOutRight: bounceOutRight,
  bounceOutUp: bounceOutUp,
  fadeIn: fadeIn,
  fadeInBottomLeft: fadeInBottomLeft,
  fadeInBottomRight: fadeInBottomRight,
  fadeInDown: fadeInDown,
  fadeInDownBig: fadeInDownBig,
  fadeInLeft: fadeInLeft,
  fadeInLeftBig: fadeInLeftBig,
  fadeInRight: fadeInRight,
  fadeInRightBig: fadeInRightBig,
  fadeInTopLeft: fadeInTopLeft,
  fadeInTopRight: fadeInTopRight,
  fadeInUp: fadeInUp,
  fadeInUpBig: fadeInUpBig,
  fadeOut: fadeOut,
  fadeOutBottomLeft: fadeOutBottomLeft,
  fadeOutBottomRight: fadeOutBottomRight,
  fadeOutDown: fadeOutDown,
  fadeOutDownBig: fadeOutDownBig,
  fadeOutLeft: fadeOutLeft,
  fadeOutLeftBig: fadeOutLeftBig,
  fadeOutRight: fadeOutRight,
  fadeOutRightBig: fadeOutRightBig,
  fadeOutTopLeft: fadeOutTopLeft,
  fadeOutTopRight: fadeOutTopRight,
  fadeOutUp: fadeOutUp,
  fadeOutUpBig: fadeOutUpBig,
  flip: flip,
  flipInX: flipInX,
  flipInY: flipInY,
  flipOutX: flipOutX,
  flipOutY: flipOutY,
  lightSpeedInLeft: lightSpeedInLeft,
  lightSpeedInRight: lightSpeedInRight,
  lightSpeedOutLeft: lightSpeedOutLeft,
  lightSpeedOutRight: lightSpeedOutRight,
  rotateIn: rotateIn,
  rotateInDownLeft: rotateInDownLeft,
  rotateInDownRight: rotateInDownRight,
  rotateInUpLeft: rotateInUpLeft,
  rotateInUpRight: rotateInUpRight,
  rotateOut: rotateOut,
  rotateOutDownLeft: rotateOutDownLeft,
  rotateOutDownRight: rotateOutDownRight,
  rotateOutUpLeft: rotateOutUpLeft,
  rotateOutUpRight: rotateOutUpRight,
  slideInDown: slideInDown,
  slideInLeft: slideInLeft,
  slideInRight: slideInRight,
  slideInUp: slideInUp,
  slideOutDown: slideOutDown,
  slideOutLeft: slideOutLeft,
  slideOutRight: slideOutRight,
  slideOutUp: slideOutUp,
  hinge: hinge,
  jackInTheBox: jackInTheBox,
  rollIn: rollIn,
  rollOut: rollOut,
  zoomIn: zoomIn,
  zoomInDown: zoomInDown,
  zoomInLeft: zoomInLeft,
  zoomInRight: zoomInRight,
  zoomInUp: zoomInUp,
  zoomOut: zoomOut,
  zoomOutDown: zoomOutDown,
  zoomOutLeft: zoomOutLeft,
  zoomOutRight: zoomOutRight,
  zoomOutUp: zoomOutUp
});

/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */

// src/events/cancel.ts
var WaCancelEvent = class extends Event {
  constructor() {
    super("wa-cancel", { bubbles: true, cancelable: false, composed: true });
  }
};

// src/events/finish.ts
var WaFinishEvent = class extends Event {
  constructor() {
    super("wa-finish", { bubbles: true, cancelable: false, composed: true });
  }
};

// src/events/start.ts
var WaStartEvent = class extends Event {
  constructor() {
    super("wa-start", { bubbles: true, cancelable: false, composed: true });
  }
};

// src/components/animation/animation.css
var animation_default = ":host {\n  display: contents;\n}\n";

// src/components/animation/animation.ts
var WaAnimation = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.hasStarted = false;
    this.name = "none";
    this.play = false;
    this.delay = 0;
    this.direction = "normal";
    this.duration = 1e3;
    this.easing = "linear";
    this.endDelay = 0;
    this.fill = "auto";
    this.iterations = Infinity;
    this.iterationStart = 0;
    this.playbackRate = 1;
    this.handleAnimationFinish = () => {
      this.play = false;
      this.hasStarted = false;
      this.dispatchEvent(new WaFinishEvent());
    };
    this.handleAnimationCancel = () => {
      this.play = false;
      this.hasStarted = false;
      this.dispatchEvent(new WaCancelEvent());
    };
  }
  /** Gets and sets the current animation time. */
  get currentTime() {
    return this.animation?.currentTime ?? 0;
  }
  set currentTime(time) {
    if (this.animation) {
      this.animation.currentTime = time;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.createAnimation();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.destroyAnimation();
  }
  handleSlotChange() {
    this.destroyAnimation();
    this.createAnimation();
  }
  async createAnimation() {
    const easing = easings[this.easing] ?? this.easing;
    const keyframes = this.keyframes ?? animations[this.name];
    const slot = await this.defaultSlot;
    const element = slot.assignedElements()[0];
    if (!element || !keyframes) {
      return false;
    }
    this.destroyAnimation();
    this.animation = element.animate(keyframes, {
      delay: this.delay,
      direction: this.direction,
      duration: this.duration,
      easing,
      endDelay: this.endDelay,
      fill: this.fill,
      iterationStart: this.iterationStart,
      iterations: this.iterations
    });
    this.animation.playbackRate = this.playbackRate;
    this.animation.addEventListener("cancel", this.handleAnimationCancel);
    this.animation.addEventListener("finish", this.handleAnimationFinish);
    if (this.play) {
      this.hasStarted = true;
      this.dispatchEvent(new WaStartEvent());
    } else {
      this.animation.pause();
    }
    return true;
  }
  destroyAnimation() {
    if (this.animation) {
      this.animation.cancel();
      this.animation.removeEventListener("cancel", this.handleAnimationCancel);
      this.animation.removeEventListener("finish", this.handleAnimationFinish);
      this.hasStarted = false;
    }
  }
  handleAnimationChange() {
    if (!this.hasUpdated) {
      return;
    }
    this.createAnimation();
  }
  handlePlayChange() {
    if (this.animation) {
      if (this.play && !this.hasStarted) {
        this.hasStarted = true;
        this.dispatchEvent(new WaStartEvent());
      }
      if (this.play) {
        this.animation.play();
      } else {
        this.animation.pause();
      }
      return true;
    }
    return false;
  }
  handlePlaybackRateChange() {
    if (this.animation) {
      this.animation.playbackRate = this.playbackRate;
    }
  }
  /** Clears all keyframe effects caused by this animation and aborts its playback. */
  cancel() {
    this.animation?.cancel();
  }
  /** Sets the playback time to the end of the animation corresponding to the current playback direction. */
  finish() {
    this.animation?.finish();
  }
  render() {
    return x` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
};
WaAnimation.css = animation_default;
__decorateClass([
  r("slot")
], WaAnimation.prototype, "defaultSlot", 2);
__decorateClass([
  n$2()
], WaAnimation.prototype, "name", 2);
__decorateClass([
  n$2({ type: Boolean, reflect: true })
], WaAnimation.prototype, "play", 2);
__decorateClass([
  n$2({ type: Number })
], WaAnimation.prototype, "delay", 2);
__decorateClass([
  n$2()
], WaAnimation.prototype, "direction", 2);
__decorateClass([
  n$2({ type: Number })
], WaAnimation.prototype, "duration", 2);
__decorateClass([
  n$2()
], WaAnimation.prototype, "easing", 2);
__decorateClass([
  n$2({ attribute: "end-delay", type: Number })
], WaAnimation.prototype, "endDelay", 2);
__decorateClass([
  n$2()
], WaAnimation.prototype, "fill", 2);
__decorateClass([
  n$2({ type: Number })
], WaAnimation.prototype, "iterations", 2);
__decorateClass([
  n$2({ attribute: "iteration-start", type: Number })
], WaAnimation.prototype, "iterationStart", 2);
__decorateClass([
  n$2({ attribute: false })
], WaAnimation.prototype, "keyframes", 2);
__decorateClass([
  n$2({ attribute: "playback-rate", type: Number })
], WaAnimation.prototype, "playbackRate", 2);
__decorateClass([
  watch([
    "name",
    "delay",
    "direction",
    "duration",
    "easing",
    "endDelay",
    "fill",
    "iterations",
    "iterationsStart",
    "keyframes"
  ])
], WaAnimation.prototype, "handleAnimationChange", 1);
__decorateClass([
  watch("play")
], WaAnimation.prototype, "handlePlayChange", 1);
__decorateClass([
  watch("playbackRate")
], WaAnimation.prototype, "handlePlaybackRateChange", 1);
WaAnimation = __decorateClass([
  t$1("wa-animation")
], WaAnimation);

const appGlobalScript = () => {
    /* The side-effect imports above define the custom elements; nothing else to execute at runtime. */
};

const globalScripts = appGlobalScript;

exports.globalScripts = globalScripts;

//# sourceMappingURL=app-globals-91b4a4f8.js.map
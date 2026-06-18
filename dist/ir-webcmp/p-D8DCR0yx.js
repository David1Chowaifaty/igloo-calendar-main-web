/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var t=()=>({checkValidity(t){const e=t.input,o={message:"",isValid:!0,invalidKeys:[]};if(!e)return o;let a=!0;if("checkValidity"in e&&(a=e.checkValidity()),a)return o;if(o.isValid=!1,"validationMessage"in e&&(o.message=e.validationMessage),!("validity"in e))return o.invalidKeys.push("customError"),o;for(const t in e.validity)"valid"!==t&&e.validity[t]&&o.invalidKeys.push(t);return o}}),e=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}},o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,r=t=>{throw TypeError(t)},i=(t,e,r,i)=>{for(var n,s=i>1?void 0:i?a(e,r):e,l=t.length-1;l>=0;l--)(n=t[l])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&o(e,r,s),s},n=(t,e,o)=>e.has(t)||r("Cannot "+o);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s=globalThis,l=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c=Symbol(),h=new WeakMap;let d=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(l&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=h.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&h.set(e,t))}return t}toString(){return this.cssText}};const u=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,a)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[a+1]),t[0]);return new d(o,t,c)},w=l?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new d("string"==typeof t?t:t+"",void 0,c))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:f,defineProperty:p,getOwnPropertyDescriptor:m,getOwnPropertyNames:b,getOwnPropertySymbols:v,getPrototypeOf:g}=Object,y=globalThis,x=y.trustedTypes,k=x?x.emptyScript:"",C=y.reactiveElementPolyfillSupport,z={toAttribute(t,e){switch(e){case Boolean:t=t?k:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},$=(t,e)=>!f(t,e),L={attribute:!0,type:String,converter:z,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=L){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),a=this.getPropertyDescriptor(t,o,e);void 0!==a&&p(this.prototype,t,a)}}static getPropertyDescriptor(t,e,o){const{get:a,set:r}=m(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:a,set(e){const i=a?.call(this);r?.call(this,e),this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??L}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){const t=this.properties,e=[...b(t),...v(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(w(t))}else void 0!==t&&e.push(w(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(l)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const o of e){const e=document.createElement("style"),a=s.litNonce;void 0!==a&&e.setAttribute("nonce",a),e.textContent=o.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){const o=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,o);if(void 0!==a&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:z).toAttribute(e,o.type);this._$Em=t,null==r?this.removeAttribute(a):this.setAttribute(a,r),this._$Em=null}}_$AK(t,e){const o=this.constructor,a=o._$Eh.get(t);if(void 0!==a&&this._$Em!==a){const t=o.getPropertyOptions(a),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:z;this._$Em=a;const i=r.fromAttribute(e,t.type);this[a]=i??this._$Ej?.get(a)??i,this._$Em=null}}requestUpdate(t,e,o){if(void 0!==t){const a=this.constructor,r=this[t];if(o??=a.getPropertyOptions(t),!((o.hasChanged??$)(r,e)||o.useDefault&&o.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,o))))return;this.C(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:a,wrapped:r},i){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??e??this[t]),!0!==r||void 0!==i)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),!0===a&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t){const{wrapped:t}=o,a=this[e];!0!==t||this._$AL.has(e)||void 0===a||this.C(e,void 0,o,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S.elementProperties=new Map,S.finalized=new Map,C?.({ReactiveElement:S}),(y.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,F=A.trustedTypes,M=F?F.createPolicy("lit-html",{createHTML:t=>t}):void 0,B="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+E,I=`<${O}>`,q=document,_=()=>q.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,j="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,P=/>/g,N=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,H=/"/g,Y=/^(?:script|style|textarea|title)$/i,X=(t,...e)=>({_$litType$:1,strings:t,values:e}),W=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Q=new WeakMap,Z=q.createTreeWalker(q,129);function G(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(e):e}const J=(t,e)=>{const o=t.length-1,a=[];let r,i=2===e?"<svg>":3===e?"<math>":"",n=U;for(let e=0;e<o;e++){const o=t[e];let s,l,c=-1,h=0;for(;h<o.length&&(n.lastIndex=h,l=n.exec(o),null!==l);)h=n.lastIndex,n===U?"!--"===l[1]?n=R:void 0!==l[1]?n=P:void 0!==l[2]?(Y.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=N):void 0!==l[3]&&(n=N):n===N?">"===l[0]?(n=r??U,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,s=l[1],n=void 0===l[3]?N:'"'===l[3]?H:V):n===H||n===V?n=N:n===R||n===P?n=U:(n=N,r=void 0);const d=n===N&&t[e+1].startsWith("/>")?" ":"";i+=n===U?o+I:c>=0?(a.push(s),o.slice(0,c)+B+o.slice(c)+E+d):o+E+(-2===c?e:d)}return[G(t,i+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),a]};class tt{constructor({strings:t,_$litType$:e},o){let a;this.parts=[];let r=0,i=0;const n=t.length-1,s=this.parts,[l,c]=J(t,e);if(this.el=tt.createElement(l,o),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(a=Z.nextNode())&&s.length<n;){if(1===a.nodeType){if(a.hasAttributes())for(const t of a.getAttributeNames())if(t.endsWith(B)){const e=c[i++],o=a.getAttribute(t).split(E),n=/([.?@])?(.*)/.exec(e);s.push({type:1,index:r,name:n[2],strings:o,ctor:"."===n[1]?it:"?"===n[1]?nt:"@"===n[1]?st:rt}),a.removeAttribute(t)}else t.startsWith(E)&&(s.push({type:6,index:r}),a.removeAttribute(t));if(Y.test(a.tagName)){const t=a.textContent.split(E),e=t.length-1;if(e>0){a.textContent=F?F.emptyScript:"";for(let o=0;o<e;o++)a.append(t[o],_()),Z.nextNode(),s.push({type:2,index:++r});a.append(t[e],_())}}}else if(8===a.nodeType)if(a.data===O)s.push({type:2,index:r});else{let t=-1;for(;-1!==(t=a.data.indexOf(E,t+1));)s.push({type:7,index:r}),t+=E.length-1}r++}}static createElement(t,e){const o=q.createElement("template");return o.innerHTML=t,o}}function et(t,e,o=t,a){if(e===W)return e;let r=void 0!==a?o._$Co?.[a]:o._$Cl;const i=T(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),void 0===i?r=void 0:(r=new i(t),r._$AT(t,o,a)),void 0!==a?(o._$Co??=[])[a]=r:o._$Cl=r),void 0!==r&&(e=et(t,r._$AS(t,e.values),r,a)),e}class ot{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,a=(t?.creationScope??q).importNode(e,!0);Z.currentNode=a;let r=Z.nextNode(),i=0,n=0,s=o[0];for(;void 0!==s;){if(i===s.index){let e;2===s.type?e=new at(r,r.nextSibling,this,t):1===s.type?e=new s.ctor(r,s.name,s.strings,this,t):6===s.type&&(e=new lt(r,this,t)),this._$AV.push(e),s=o[++n]}i!==s?.index&&(r=Z.nextNode(),i++)}return Z.currentNode=q,a}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class at{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,a){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=et(this,t,e),T(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(q.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,a="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=tt.createElement(G(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===a)this._$AH.p(e);else{const t=new ot(a,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=Q.get(t.strings);return void 0===e&&Q.set(t.strings,e=new tt(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,a=0;for(const r of t)a===e.length?e.push(o=new at(this.O(_()),this.O(_()),this,this.options)):o=e[a],o._$AI(r),a++;a<e.length&&(this._$AR(o&&o._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class rt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,a,r){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=K}_$AI(t,e=this,o,a){const r=this.strings;let i=!1;if(void 0===r)t=et(this,t,e,0),i=!T(t)||t!==this._$AH&&t!==W,i&&(this._$AH=t);else{const a=t;let n,s;for(t=r[0],n=0;n<r.length-1;n++)s=et(this,a[o+n],e,n),s===W&&(s=this._$AH[n]),i||=!T(s)||s!==this._$AH[n],s===K?t=K:t!==K&&(t+=(s??"")+r[n+1]),this._$AH[n]=s}i&&!a&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class nt extends rt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class st extends rt{constructor(t,e,o,a,r){super(t,e,o,a,r),this.type=5}_$AI(t,e=this){if((t=et(this,t,e,0)??K)===W)return;const o=this._$AH,a=t===K&&o!==K||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==K&&(o===K||a);a&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class lt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const ct=A.litHtmlPolyfillSupport;ct?.(tt,at),(A.litHtmlVersions??=[]).push("3.3.1");const ht=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let dt=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const a=o?.renderBefore??e;let r=a._$litPart$;if(void 0===r){const t=o?.renderBefore??null;a._$litPart$=r=new at(e.insertBefore(_(),t),t,void 0,o??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};dt._$litElement$=!0,dt.finalized=!0,ht.litElementHydrateSupport?.({LitElement:dt});const ut=ht.litElementPolyfillSupport;ut?.({LitElement:dt}),(ht.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const wt=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ft={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:$},pt=(t=ft,e,o)=>{const{kind:a,metadata:r}=o;let i=globalThis.litPropertyMetadata.get(r);if(void 0===i&&globalThis.litPropertyMetadata.set(r,i=new Map),"setter"===a&&((t=Object.create(t)).wrapped=!0),i.set(o.name,t),"accessor"===a){const{name:a}=o;return{set(o){const r=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,r,t)},init(e){return void 0!==e&&this.C(a,void 0,t,e),e}}}if("setter"===a){const{name:a}=o;return function(o){const r=this[a];e.call(this,o),this.requestUpdate(a,r,t)}}throw Error("Unsupported decorator location: "+a)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mt(t){return(e,o)=>"object"==typeof o?pt(t,e,o):((t,e,o)=>{const a=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),a?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function bt(t){return mt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,o),o)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function gt(t){return(e,o)=>vt(e,o,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var yt,xt=u`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,kt=class extends dt{constructor(){super(),((t,e)=>{e.has(t)?r("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,!1)})(this,yt),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(t,e)=>{if(this.internals?.states)try{e?this.internals.states.add(t):this.internals.states.delete(t)}catch(t){if(!(t+"").includes("must start with '--'"))throw t;console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill")}},has:t=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(t)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let t=this.constructor;for(let[e,o]of t.elementProperties)"inherit"===o.default&&void 0!==o.initial&&"string"==typeof e&&this.customStates.set(`initial-${e}-${o.initial}`,!0)}static get styles(){return[xt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `)),this.didSSR&&this.updateComplete.then((()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `))}))}attributeChangedCallback(t,e,o){((t,e)=>(n(t,e,"read from private field"),e.get(t)))(this,yt)||(this.constructor.elementProperties.forEach(((t,e)=>{t.reflect&&null!=this[e]&&this.initialReflectedProperties.set(e,this[e])})),((t,e)=>{n(t,e,"write to private field"),e.set(t,!0)})(this,yt)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach(((e,o)=>{t.has(o)&&null==this[o]&&(this[o]=e)}))}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach((t=>{t.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}))}update(t){try{super.update(t)}catch(t){if(this.didSSR&&!this.hasUpdated){const e=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});e.error=t,this.dispatchEvent(e)}throw t}}setStyle(t,e){if(this.style)this.style[t]=e;else if(null!=e){let o=this.getAttribute("style")||"";o&&(o+=" "),this.setAttribute("style",`${o}${function(t){return t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()))}(t)}: ${e};`)}}setStyleProperty(t,e){if(this.style)this.style.setProperty(t,e);else if(null!=e){let o=this.getAttribute("style")||"";o&&(o+=" "),this.setAttribute("style",`${o}${t}: ${e};`)}}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...e}))}};yt=new WeakMap,i([mt()],kt.prototype,"dir",2),i([mt()],kt.prototype,"lang",2),i([mt({type:Boolean,reflect:!0,attribute:"did-ssr"})],kt.prototype,"didSSR",2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ct=class extends kt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new e))},this.handleInteraction=t=>{const e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},"addEventListener"in this&&this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[{observedAttributes:["custom-error"],checkValidity(t){const e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}}]}static get observedAttributes(){const t=new Set(super.observedAttributes||[]);for(const e of this.validators)if(e.observedAttributes)for(const o of e.observedAttributes)t.add(o);return[...t]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then((()=>{this.updateValidity()})):this.updateValidity(),this.assumeInteractionOn.forEach((t=>{this.addEventListener?.(t,this.handleInteraction)}))}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),(t.has("value")||t.has("disabled")||t.has("defaultValue"))&&this.updateFormValue(this.value),t.has("disabled")&&(this.customStates.set("disabled",this.disabled),!this.hasAttribute("disabled")&&this.matches(":disabled")||this.toggleAttribute("disabled",this.disabled)),super.willUpdate(t),this.didSSR&&!this.hasUpdated?this.updateComplete.then((()=>this.updateValidity())):this.updateValidity()}updateFormValue(t){if(Array.isArray(t)){if(this.name){const e=new FormData;for(const o of t)e.append(this.name,o);this.setValue(e,e)}}else this.setValue(t,t)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(t){t?this.setAttribute("form",t):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){let e=t[2];e||(e=this.validationTarget),this.internals.setValidity(t[0],t[1],e||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const t=!!this.required,e=this.internals.validity.valid,o=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&o),this.customStates.set("user-valid",e&&o)}setCustomValidity(t){if(!t)return this.customError=null,void this.setValidity({});this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.didSSR&&!this.hasUpdated?this.updateComplete.then((()=>{this.value=t,"restore"===e&&this.resetValidity(),this.updateValidity()})):(this.value=t,"restore"===e&&this.resetValidity(),this.updateValidity())}setValue(...t){const[e,o]=t;this.internals.setFormValue(e,o)}get allValidators(){return[...this.constructor.validators||[],...this.validators||[]]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate)return void this.resetValidity();const t=this.allValidators;if(!t?.length)return;const e={customError:!!this.customError},o=this.validationTarget||this.input||void 0;let a="";for(const o of t){const{isValid:t,message:r,invalidKeys:i}=o.checkValidity(this);t||(a||(a=r),i?.length>=0&&i.forEach((t=>e[t]=!0)))}a||(a=this.validationMessage),this.setValidity(e,a,o)}};Ct.formAssociated=!0,i([mt({reflect:!0})],Ct.prototype,"name",2),i([mt({type:Boolean})],Ct.prototype,"disabled",2),i([mt({state:!0,attribute:!1})],Ct.prototype,"valueHasChanged",2),i([mt({state:!0,attribute:!1})],Ct.prototype,"hasInteracted",2),i([mt({attribute:"custom-error",reflect:!0})],Ct.prototype,"customError",2),i([mt({attribute:!1,state:!0,type:Object})],Ct.prototype,"validity",1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var zt={small:"s",medium:"m",large:"l"},$t=new Set;function Lt(t,e){e in zt&&!$t.has(`${t}:${e}`)&&($t.add(`${t}:${e}`),console.warn(`[${t}] size="${e}" is deprecated. Use size="${zt[e]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var St=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return!!this.host.childNodes&&[...this.host.childNodes].some((t=>{if(t.nodeType===Node.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===Node.ELEMENT_NODE){const e=t;if("wa-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector?.(`:scope > [slot="${t}"]`)}test(t,e){return e&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[e]:"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){const t=this.host.shadowRoot;t&&"addEventListener"in t&&t.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){const t=this.host.shadowRoot;t&&"removeEventListener"in t&&t.removeEventListener("slotchange",this.handleSlotChange)}},At=u`
  :host([size='xs']) {
    font-size: var(--wa-font-size-xs);
  }

  :host([size='s']),
  :host([size='small']) {
    font-size: var(--wa-font-size-s);
  }

  :host([size='m']),
  :host([size='medium']) {
    font-size: var(--wa-font-size-m);
  }

  :host([size='l']),
  :host([size='large']) {
    font-size: var(--wa-font-size-l);
  }

  :host([size='xl']) {
    font-size: var(--wa-font-size-xl);
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Ft=u`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity, transform;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    transform-origin: center;
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));

    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-form-control-border-radius));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-form-control-border-radius));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-form-control-border-radius));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-form-control-border-radius));
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
  }

  /* Hover and active transforms */
  .button:not(.disabled):not(.loading) {
    @media (hover: hover) {
      &:hover {
        transform: var(--wa-button-transform-hover);
      }
    }
    &:active {
      transform: var(--wa-button-transform-active);
    }

    @media (prefers-reduced-motion: reduce) {
      &:hover,
      &:active {
        transform: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    /* When disabled, prevent mouse events from bubbling up from children */
    .button {
      pointer-events: none;
    }
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  /* Icon buttons with a caret need to grow to fit both the icon and the caret */
  .button.is-icon-button.caret {
    width: auto;
    aspect-ratio: auto;
    min-width: var(--wa-form-control-height);
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-border-radius-pill));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-border-radius-pill));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-border-radius-pill));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-border-radius-pill));
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      visibility: hidden;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Mt=u`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Bt(t,e){const o={waitUntilFirstUpdate:!1,...e};return(e,a)=>{const{update:r}=e,i=Array.isArray(t)?t:[t];e.update=function(t){i.forEach((e=>{const r=e;if(t.has(r)){const e=t.get(r),i=this[r];e!==i&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[a](e,i))}})),r.call(this,t)}}}const Et=new Set,Ot=new Map;let It,qt="ltr",_t="en";const Tt="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Tt){const t=new MutationObserver(jt);qt=document.documentElement.dir||"ltr",_t=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Dt(...t){t.map((t=>{const e=t.$code.toLowerCase();Ot.has(e)?Ot.set(e,Object.assign(Object.assign({},Ot.get(e)),t)):Ot.set(e,t),It||(It=t)})),jt()}function jt(){Tt&&(qt=document.documentElement.dir||"ltr",_t=document.documentElement.lang||navigator.language),[...Et.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}let Ut=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Et.add(this.host)}hostDisconnected(){Et.delete(this.host)}dir(){return(""+(this.host.dir||qt)).toLowerCase()}lang(){return(""+(this.host.lang||_t)).toLowerCase()}getTranslationData(t){var e,o;let a;try{a=new Intl.Locale(t.replace(/_/g,"-"))}catch(t){return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}const r=a.language.toLowerCase(),i=null!==(o=null===(e=a.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==o?o:"";return{locale:a,language:r,region:i,primary:Ot.get(`${r}-${i}`),secondary:Ot.get(r)}}exists(t,e){var o;const{primary:a,secondary:r}=this.getTranslationData(null!==(o=e.lang)&&void 0!==o?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(a&&a[t]||r&&r[t]||e.includeFallback&&It&&It[t])}term(t,...e){const{primary:o,secondary:a}=this.getTranslationData(this.lang());let r;if(o&&o[t])r=o[t];else if(a&&a[t])r=a[t];else{if(!It||!It[t])return console.error("No translation found for: "+t),t+"";r=It[t]}return"function"==typeof r?r(...e):r}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return isNaN(t=Number(t))?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Rt={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",captions:"Captions",chooseDate:"Choose date",chooseDecade:"Choose decade",chooseMonth:"Choose month",chooseYear:"Choose year",clearEntry:"Clear entry",close:"Close",closeCalendar:"Close calendar",createOption:t=>`Create "${t}"`,copied:"Copied",copy:"Copy",currentValue:"Current value",date:"Date",datePickerKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the calendar.",day:"Day",incompleteDate:"Enter a complete date.",dropFileHere:"Drop file here or click to browse",decrement:"Decrement",dropFilesHere:"Drop files here or click to browse",empty:"Empty",endDate:"End date",error:"Error",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",increment:"Increment",loading:"Loading",month:"Month",moreOptions:"More Options",mute:"Mute",nextDecade:"Next decade",nextMonth:"Next month",nextSlide:"Next slide",nextVideo:"Next Video",nextYear:"Next year",numCharacters:t=>1===t?"1 character":t+" characters",numCharactersRemaining:t=>1===t?"1 character remaining":t+" characters remaining",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":t+" options selected",pause:"Pause",pauseAnimation:"Pause animation",pictureInPicture:"Picture in picture",play:"Play",playbackSpeed:"Playback speed",playlist:"Playlist",playAnimation:"Play animation",previousDecade:"Previous decade",previousMonth:"Previous month",previousSlide:"Previous slide",previousVideo:"Previous video",previousYear:"Previous year",progress:"Progress",rangeTooLong:t=>1===t?"Select a range no longer than 1 day":`Select a range no longer than ${t} days`,rangeTooShort:t=>1===t?"Select a range at least 1 day long":`Select a range at least ${t} days long`,readonly:"Read-only",selected:"Selected",selectedDateLabel:t=>"Selected: "+t,selectedRangeLabel:t=>"Selected range: "+t,selectionCleared:"Selection cleared",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>"Slide "+t,startDate:"Start date",today:"Today",toggleColorFormat:"Toggle color format",seek:"Seek",seekProgress:(t,e)=>`${t} of ${e}`,currentlyPlaying:"currently playing",unmute:"Unmute",videoPlayer:"Video player",volume:"Volume",year:"Year",zoomIn:"Zoom in",zoomOut:"Zoom out",am:"AM",chooseTime:"Choose time",closeTimeInput:"Close time picker",dayPeriod:"AM/PM",hour:"Hour",minute:"Minute",now:"Now",pm:"PM",second:"Second",time:"Time",timeInputKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the time picker."};Dt(Rt);var Pt=Rt,Nt=class extends Ut{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||"en":super.lang()}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */Dt(Pt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Vt=t=>(...e)=>({_$litDirective$:t,values:e});let Ht=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=Vt(class extends Ht{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const o=t.element.classList;for(const t of this.st)t in e||(o.remove(t),this.st.delete(t));for(const t in e){const a=!!e[t];a===this.st.has(t)||this.nt?.has(t)||(a?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)))}return W}}),Xt=t=>t??K
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Wt=Symbol.for(""),Kt=t=>{if(t?.r===Wt)return t?._$litStatic$},Qt=(t,...e)=>({_$litStatic$:e.reduce(((e,o,a)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[a+1]),t[0]),r:Wt}),Zt=new Map,Gt=(t=>(e,...o)=>{const a=o.length;let r,i;const n=[],s=[];let l,c=0,h=!1;for(;c<a;){for(l=e[c];c<a&&void 0!==(i=o[c],r=Kt(i));)l+=r+e[++c],h=!0;c!==a&&s.push(i),n.push(l),c++}if(c===a&&n.push(e[a]),h){const t=n.join("$$lit$$");void 0===(e=Zt.get(t))&&(n.raw=n,Zt.set(t,e=n)),o=s}return t(e,...o)})(X);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Jt=class extends Ct{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new St(this,"[default]","start","end"),this.localize=new Nt(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="m",this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,t()]}handleSizeChange(){Lt(this.localName,this.size)}constructLightDOMButton(){const t=document.createElement("button");for(const e of this.attributes)"style"!==e.name&&t.setAttribute(e.name,e.value);return t.type=this.type,t.style.position="absolute !important",t.style.width="0 !important",t.style.height="0 !important",t.style.clipPath="inset(50%) !important",t.style.overflow="hidden !important",t.style.whiteSpace="nowrap !important",this.name&&(t.name=this.name),t.value=this.value||"",t}handleClick(t){if(this.disabled||this.loading)return t.preventDefault(),void t.stopImmediatePropagation();if("submit"!==this.type&&"reset"!==this.type)return;if(!this.getForm())return;const e=this.constructLightDOMButton();this.parentElement?.append(e),e.click(),e.remove()}handleInvalid(){this.dispatchEvent(new e)}handleLabelSlotChange(){const t=this.labelSlot.assignedNodes({flatten:!0});let e=!1,o=!1,a=!1,r=!1;[...t].forEach((t=>{t.nodeType===Node.ELEMENT_NODE?"wa-icon"===t.localName?(o=!0,e||(e=void 0!==t.label)):r=!0:t.nodeType===Node.TEXT_NODE&&(t.textContent?.trim()||"").length>0&&(a=!0)})),this.isIconButton=o&&!a&&!r,this.customStates.set("icon-button",this.isIconButton),this.isIconButton&&!e&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set("link",this.isLink())}handleLoadingChange(){this.customStates.set("loading",this.loading)}setValue(...t){}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=this.isLink(),e=t?Qt`a`:Qt`button`;return Gt`
      <${e}
        part="base"
        class=${Yt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:"rtl"===this.localize.dir(),"has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start","withStart"),"has-end":this.hasSlotController.test("end","withEnd"),"is-icon-button":this.isIconButton})}
        ?disabled=${Xt(t?void 0:this.disabled)}
        type=${Xt(t?void 0:this.type)}
        title=${this.title}
        name=${Xt(t?void 0:this.name)}
        value=${Xt(t?void 0:this.value)}
        href=${Xt(t?this.href:void 0)}
        target=${Xt(t?this.target:void 0)}
        download=${Xt(t?this.download:void 0)}
        rel=${Xt(t&&this.rel?this.rel:void 0)}
        role=${Xt(t?void 0:"button")}
        aria-disabled=${Xt(t&&this.disabled?"true":void 0)}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Gt`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?Gt`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${e}>
    `}};Jt.shadowRootOptions={...Ct.shadowRootOptions,delegatesFocus:!0},Jt.css=[Ft,Mt,At],i([gt(".button")],Jt.prototype,"button",2),i([gt("slot:not([name])")],Jt.prototype,"labelSlot",2),i([bt()],Jt.prototype,"invalid",2),i([bt()],Jt.prototype,"isIconButton",2),i([mt()],Jt.prototype,"title",2),i([mt({reflect:!0})],Jt.prototype,"variant",2),i([mt({reflect:!0})],Jt.prototype,"appearance",2),i([mt({reflect:!0})],Jt.prototype,"size",2),i([Bt("size")],Jt.prototype,"handleSizeChange",1),i([mt({attribute:"with-caret",type:Boolean,reflect:!0})],Jt.prototype,"withCaret",2),i([mt({attribute:"with-start",type:Boolean})],Jt.prototype,"withStart",2),i([mt({attribute:"with-end",type:Boolean})],Jt.prototype,"withEnd",2),i([mt({type:Boolean})],Jt.prototype,"disabled",2),i([mt({type:Boolean,reflect:!0})],Jt.prototype,"loading",2),i([mt({type:Boolean,reflect:!0})],Jt.prototype,"pill",2),i([mt()],Jt.prototype,"type",2),i([mt({reflect:!0})],Jt.prototype,"name",2),i([mt({reflect:!0})],Jt.prototype,"value",2),i([mt({reflect:!0})],Jt.prototype,"href",2),i([mt()],Jt.prototype,"target",2),i([mt()],Jt.prototype,"rel",2),i([mt()],Jt.prototype,"download",2),i([mt({attribute:"formaction"})],Jt.prototype,"formAction",2),i([mt({attribute:"formenctype"})],Jt.prototype,"formEnctype",2),i([mt({attribute:"formmethod"})],Jt.prototype,"formMethod",2),i([mt({attribute:"formnovalidate",type:Boolean})],Jt.prototype,"formNoValidate",2),i([mt({attribute:"formtarget"})],Jt.prototype,"formTarget",2),i([Bt("disabled",{waitUntilFirstUpdate:!0})],Jt.prototype,"handleDisabledChange",1),i([Bt("href")],Jt.prototype,"handleHrefChange",1),i([Bt("loading",{waitUntilFirstUpdate:!0})],Jt.prototype,"handleLoadingChange",1),Jt=i([wt("wa-button")],Jt),Jt.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var te=u`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;
    --size: 1em;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: var(--size);
    height: var(--size);
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - var(--track-width) / 2);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
    r: var(--radius);
    fill: none;
    stroke-width: var(--track-width);
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: calc(0.597 * var(--circumference)), calc(0.796 * var(--circumference));
    stroke-dashoffset: calc(-0.04 * var(--circumference));
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: calc(0.008 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.278 * var(--circumference));
    }
    100% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.987 * var(--circumference));
    }
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,ee=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this)}render(){return X`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" />
        <circle class="indicator" />
      </svg>
    `}};ee.css=te,ee=i([wt("wa-spinner")],ee);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var oe=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}},ae=u`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;
    --rotate-angle: 0deg;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* Standard */
  :host(:not([auto-width])) {
    width: 1.25em;
    height: 1em;
    min-width: 1.25em; /* <-- this is what Safari respects for intrinsic */
    min-height: 1em;
  }

  /* Auto-width */
  :host([auto-width]) {
    width: auto;
    height: 1em;
  }

  svg {
    fill: currentColor;
    height: 1em;
    overflow: visible;
    width: auto;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }

  /* Rotation */
  :host([rotate]) {
    transform: rotate(var(--rotate-angle, 0deg));
  }

  /* Flipping */
  :host([flip='x']) {
    transform: scaleX(-1);
  }
  :host([flip='y']) {
    transform: scaleY(-1);
  }
  :host([flip='both']) {
    transform: scale(-1, -1);
  }

  /* Rotation and Flipping combined */
  :host([rotate][flip='x']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleX(-1);
  }
  :host([rotate][flip='y']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleY(-1);
  }
  :host([rotate][flip='both']) {
    transform: rotate(var(--rotate-angle, 0deg)) scale(-1, -1);
  }

  /* Animations */
  :host([animation='beat']) {
    animation-name: beat;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='fade']) {
    animation-name: fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  :host([animation='beat-fade']) {
    animation-name: beat-fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  :host([animation='bounce']) {
    animation-name: bounce;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  :host([animation='flip']) {
    animation-name: flip;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='shake']) {
    animation-name: shake;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-pulse']) {
    animation-name: spin-pulse;
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, steps(8));
  }

  :host([animation='spin-reverse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, reverse);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  /* Keyframes */
  @media (prefers-reduced-motion: reduce) {
    :host([animation='beat']),
    :host([animation='bounce']),
    :host([animation='fade']),
    :host([animation='beat-fade']),
    :host([animation='flip']),
    :host([animation='shake']),
    :host([animation='spin']),
    :host([animation='spin-pulse']),
    :host([animation='spin-reverse']) {
      animation: none !important;
      transition: none !important;
    }
  }
  @keyframes beat {
    0%,
    90% {
      transform: scale(1);
    }
    45% {
      transform: scale(var(--beat-scale, 1.25));
    }
  }

  @keyframes fade {
    50% {
      opacity: var(--fade-opacity, 0.4);
    }
  }

  @keyframes beat-fade {
    0%,
    100% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(var(--beat-fade-scale, 1.125));
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(var(--bounce-start-scale-x, 1.1), var(--bounce-start-scale-y, 0.9)) translateY(0);
    }
    30% {
      transform: scale(var(--bounce-jump-scale-x, 0.9), var(--bounce-jump-scale-y, 1.1))
        translateY(var(--bounce-height, -0.5em));
    }
    50% {
      transform: scale(var(--bounce-land-scale-x, 1.05), var(--bounce-land-scale-y, 0.95)) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(var(--bounce-rebound, -0.125em));
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes flip {
    50% {
      transform: rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -180deg));
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(-15deg);
    }
    4% {
      transform: rotate(15deg);
    }
    8%,
    24% {
      transform: rotate(-18deg);
    }
    12%,
    28% {
      transform: rotate(18deg);
    }
    16% {
      transform: rotate(-22deg);
    }
    20% {
      transform: rotate(22deg);
    }
    32% {
      transform: rotate(-12deg);
    }
    36% {
      transform: rotate(12deg);
    }
    40%,
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-pulse {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,re=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}},ie="";
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function ne(){if(!ie){const t=document.querySelector("[data-fa-kit-code]");t&&function(t){ie=t}(t.getAttribute("data-fa-kit-code")||"")}return ie}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var se="7.2.0",le={name:"default",resolver:(t,e="classic",o="solid")=>function(t,e,o){const a=function(t,e,o){let a="solid";return"chisel"===e&&(a="chisel-regular"),"etch"===e&&(a="etch-solid"),"graphite"===e&&(a="graphite-thin"),"jelly"===e&&(a="jelly-regular","duo-regular"===o&&(a="jelly-duo-regular"),"fill-regular"===o&&(a="jelly-fill-regular")),"jelly-duo"===e&&(a="jelly-duo-regular"),"jelly-fill"===e&&(a="jelly-fill-regular"),"notdog"===e&&("solid"===o&&(a="notdog-solid"),"duo-solid"===o&&(a="notdog-duo-solid")),"notdog-duo"===e&&(a="notdog-duo-solid"),"slab"===e&&("solid"!==o&&"regular"!==o||(a="slab-regular"),"press-regular"===o&&(a="slab-press-regular")),"slab-press"===e&&(a="slab-press-regular"),"thumbprint"===e&&(a="thumbprint-light"),"utility"===e&&(a="utility-semibold"),"utility-duo"===e&&(a="utility-duo-semibold"),"utility-fill"===e&&(a="utility-fill-semibold"),"whiteboard"===e&&(a="whiteboard-semibold"),"classic"===e&&("thin"===o&&(a="thin"),"light"===o&&(a="light"),"regular"===o&&(a="regular"),"solid"===o&&(a="solid")),"duotone"===e&&("thin"===o&&(a="duotone-thin"),"light"===o&&(a="duotone-light"),"regular"===o&&(a="duotone-regular"),"solid"===o&&(a="duotone")),"sharp"===e&&("thin"===o&&(a="sharp-thin"),"light"===o&&(a="sharp-light"),"regular"===o&&(a="sharp-regular"),"solid"===o&&(a="sharp-solid")),"sharp-duotone"===e&&("thin"===o&&(a="sharp-duotone-thin"),"light"===o&&(a="sharp-duotone-light"),"regular"===o&&(a="sharp-duotone-regular"),"solid"===o&&(a="sharp-duotone-solid")),"brands"===e&&(a="brands"),a}(0,e,o),r="".replace(/\/$/,"");if(r)return`${r}/${a}/${t}.svg`;const i=ne();return i.length>0?`https://ka-p.fontawesome.com/releases/v${se}/svgs/${a}/${t}.svg?token=${encodeURIComponent(i)}`:`https://ka-f.fontawesome.com/releases/v${se}/svgs/${a}/${t}.svg`}(t,e,o),mutator:(t,e)=>{if(e?.family&&!t.hasAttribute("data-duotone-initialized")){const{family:o,variant:a}=e;if("duotone"===o||"sharp-duotone"===o||"notdog-duo"===o||"notdog"===o&&"duo-solid"===a||"jelly-duo"===o||"jelly"===o&&"duo-regular"===a||"utility-duo"===o||"thumbprint"===o){const o=[...t.querySelectorAll("path")],a=o.find((t=>!t.hasAttribute("opacity"))),r=o.find((t=>t.hasAttribute("opacity")));if(!a||!r)return;if(a.setAttribute("data-duotone-primary",""),r.setAttribute("data-duotone-secondary",""),e.swapOpacity&&a&&r){const t=r.getAttribute("opacity")||"0.4";a.style.setProperty("--path-opacity",t),r.style.setProperty("--path-opacity","1")}t.setAttribute("data-duotone-initialized","")}}}},ce={solid:{backward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>',"backward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',"closed-captioning":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>',"closed-captioning-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>',compress:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>',"ellipsis-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>',expand:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',forward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"forward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>',gauge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>',gear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',"picture-in-picture":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',"play-circle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',volume:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-low":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{calendar:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>',"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',clock:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},he=[le,{name:"system",resolver:(t,e="classic",o="solid")=>{let a=ce[o][t]??ce.regular[t]??ce.regular["circle-question"];return a?
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function(t){return"data:image/svg+xml,"+encodeURIComponent(t)}(a):""}}],de=new Set;function ue(t){return he.find((e=>e.name===t))}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const we={};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var fe,pe=Symbol(),me=Symbol(),be=new Map,ve=class extends kt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(t,e)=>{let o;if(e?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=X`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");return"function"==typeof e.mutator&&e.mutator(o,this),this.svg}try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return 410===o.status?pe:me}catch{return me}try{const t=document.createElement("div");t.innerHTML=await o.text();const e=t.firstElementChild;if("svg"!==e?.tagName?.toLowerCase())return pe;fe||(fe=new DOMParser);const a=fe.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):pe}catch{return pe}}}connectedCallback(){super.connectedCallback(),function(t){de.add(t)}(this)}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",this.rotate+"deg"),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),function(t){de.delete(t)}(this)}async getIconSource(){const t=ue(this.library),e=this.family||"classic";if(this.name&&t){let o;try{o=await t.resolver(this.name,e,this.variant,this.autoWidth)}catch{o=void 0}return{url:o,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:t,fromLibrary:e}=await this.getIconSource(),o=e?ue(this.library):void 0;if(!t)return void(this.svg=null);let a=be.get(t);a||(a=this.resolveIcon(t,o),be.set(t,a));const r=await a;if(r===me&&be.delete(t),t===(await this.getIconSource()).url)if((t=>void 0!==t?._$litType$)(r))this.svg=r;else switch(r){case me:case pe:this.svg=null,this.dispatchEvent(new oe);break;default:this.svg=r.cloneNode(!0),o?.mutator?.(this.svg,this),this.dispatchEvent(new re)}}willUpdate(t){return this.style||this.setStyleProperty("--rotate-angle",this.rotate+"deg"),super.willUpdate(t)}updated(t){super.updated(t);const e=ue(this.library);this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",this.rotate+"deg");const o=this.shadowRoot?.querySelector("svg");o&&e?.mutator?.(o,this)}render(){return this.hasUpdated?this.svg:X`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};ve.css=ae,i([bt()],ve.prototype,"svg",2),i([mt({reflect:!0})],ve.prototype,"name",2),i([mt({reflect:!0})],ve.prototype,"family",2),i([mt({reflect:!0})],ve.prototype,"variant",2),i([mt({attribute:"auto-width",type:Boolean,reflect:!0})],ve.prototype,"autoWidth",2),i([mt({attribute:"swap-opacity",type:Boolean,reflect:!0})],ve.prototype,"swapOpacity",2),i([mt()],ve.prototype,"src",2),i([mt()],ve.prototype,"label",2),i([mt({reflect:!0})],ve.prototype,"library",2),i([mt({type:Number,reflect:!0})],ve.prototype,"rotate",2),i([mt({type:String,reflect:!0})],ve.prototype,"flip",2),i([mt({type:String,reflect:!0})],ve.prototype,"animation",2),i([Bt("label")],ve.prototype,"handleLabelChange",1),i([Bt(["family","name","library","variant","src","autoWidth","swapOpacity"],{waitUntilFirstUpdate:!0})],ve.prototype,"setIcon",1),ve=i([wt("wa-icon")],ve);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ge=class extends Event{constructor(t){super("wa-tab-show",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},ye=class extends Event{constructor(t){super("wa-tab-hide",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},xe=u`
  :host {
    --indicator-color: var(--wa-color-brand-fill-loud);
    --track-color: var(--wa-color-neutral-fill-normal);
    --track-width: 0.125rem;

    /* Private */
    --safe-track-width: max(0.5px, round(var(--track-width), 0.5px));

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tabs {
    display: flex;
    position: relative;
  }

  .indicator {
    position: absolute;
  }

  .tab-group-has-scroll-controls .nav-container {
    position: relative;
    padding: 0 1.5em;
  }

  .body {
    display: block;
  }

  .scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1.5em;
  }

  .scroll-button-start {
    inset-inline-start: 0;
  }

  .scroll-button-end {
    inset-inline-end: 0;
  }

  /*
    * Top
    */

  .tab-group-top {
    flex-direction: column;
  }

  .tab-group-top .nav-container {
    order: 1;
  }

  .tab-group-top .nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group-top .nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group-top .tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-top .indicator {
    bottom: calc(-1 * var(--safe-track-width));
    border-bottom: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-top .body {
    order: 2;
  }

  .tab-group-top ::slotted(wa-tab[active]) {
    border-block-end: solid var(--safe-track-width) var(--indicator-color);
    margin-block-end: calc(-1 * var(--safe-track-width));
  }

  .tab-group-top .body slot::slotted(wa-tab-panel) {
    --padding: var(--wa-space-xl) 0;
  }

  /*
    * Bottom
    */

  .tab-group-bottom {
    flex-direction: column;
  }

  .tab-group-bottom .nav-container {
    order: 2;
  }

  .tab-group-bottom .nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group-bottom .nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group-bottom .tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-bottom .indicator {
    top: calc(-1 * var(--safe-track-width));
    border-top: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-bottom .body {
    order: 1;
  }

  .tab-group-bottom ::slotted(wa-tab[active]) {
    border-block-start: solid var(--safe-track-width) var(--indicator-color);
    margin-block-start: calc(-1 * var(--safe-track-width));
  }

  .tab-group-bottom .body slot::slotted(wa-tab-panel) {
    --padding: var(--wa-space-xl) 0;
  }

  /*
    * Start
    */

  .tab-group-start {
    flex-direction: row;
  }

  .tab-group-start .nav-container {
    order: 1;
  }

  .tab-group-start .tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-start .indicator {
    inset-inline-end: calc(-1 * var(--safe-track-width));
    border-right: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-start .body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group-start ::slotted(wa-tab[active]) {
    border-inline-end: solid var(--safe-track-width) var(--indicator-color);
    margin-inline-end: calc(-1 * var(--safe-track-width));
  }

  .tab-group-start .body slot::slotted(wa-tab-panel) {
    --padding: 0 var(--wa-space-xl);
  }

  /*
    * End
    */

  .tab-group-end {
    flex-direction: row;
  }

  .tab-group-end .nav-container {
    order: 2;
  }

  .tab-group-end .tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-end .indicator {
    inset-inline-start: calc(-1 * var(--safe-track-width));
    border-inline-start: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-end .body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group-end ::slotted(wa-tab[active]) {
    border-inline-start: solid var(--safe-track-width) var(--indicator-color);
    margin-inline-start: calc(-1 * var(--safe-track-width));
  }

  .tab-group-end .body slot::slotted(wa-tab-panel) {
    --padding: 0 var(--wa-space-xl);
  }
`,ke=new Set;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function Ce(t){if(ke.add(t),!document.documentElement.classList.contains("wa-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}()+function(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}();let e=getComputedStyle(document.documentElement).scrollbarGutter;e&&"auto"!==e||(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",e),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",t+"px")}}function ze(t){ke.delete(t),0===ke.size&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function $e(t,e,o="vertical",a="smooth"){const r=
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}(t,e),i=r.top+e.scrollTop,n=r.left+e.scrollLeft,s=e.scrollLeft+e.offsetWidth,l=e.scrollTop,c=e.scrollTop+e.offsetHeight;"horizontal"!==o&&"both"!==o||(n<e.scrollLeft?e.scrollTo({left:n,behavior:a}):n+t.clientWidth>s&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:a})),"vertical"!==o&&"both"!==o||(i<l?e.scrollTo({top:i,behavior:a}):i+t.clientHeight>c&&e.scrollTo({top:i-e.offsetHeight+t.clientHeight,behavior:a}))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Le=class extends kt{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Nt(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>{this.updateScrollControls()})),this.mutationObserver=new MutationObserver((t=>{t.some((t=>!["aria-labelledby","aria-controls"].includes(t.attributeName)))&&setTimeout((()=>this.setAriaLabels()));const e=t.filter((t=>t.target.closest("wa-tab-group")===this));if(e.some((t=>"disabled"===t.attributeName)))this.syncTabsAndPanels();else if(e.some((t=>"active"===t.attributeName))){const t=e.filter((t=>"active"===t.attributeName&&"wa-tab"===t.target.tagName.toLowerCase())).map((t=>t.target)).find((t=>t.active));t&&t.closest("wa-tab-group")===this&&this.setActiveTab(t)}})),this.updateComplete.then((()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav);new IntersectionObserver(((t,e)=>{if(t[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){const t=this.tabs.find((t=>t.panel===this.active));t&&this.setActiveTab(t)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});e.unobserve(t[0].target)}})).observe(this.tabGroup)}))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter((t=>"wa-tab"===t.tagName.toLowerCase()))}getAllPanels(){return[...this.defaultSlot.assignedElements()].filter((t=>"wa-tab-panel"===t.tagName.toLowerCase()))}getActiveTab(){return this.tabs.find((t=>t.active))}handleClick(t){const e=t.target.closest("wa-tab"),o=e?.closest("wa-tab-group");o===this&&null!==e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){const e=t.target.closest("wa-tab"),o=e?.closest("wa-tab-group");if(o===this)if(["Enter"," "].includes(t.key))null!==e&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault());else if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=this.tabs.find((t=>t.matches(":focus"))),o="rtl"===this.localize.dir();let a=null;if("wa-tab"===e?.tagName.toLowerCase()){if("Home"===t.key)a=this.focusableTabs[0];else if("End"===t.key)a=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&"ArrowUp"===t.key){const t=this.tabs.findIndex((t=>t===e));a=this.findNextFocusableTab(t,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&"ArrowDown"===t.key){const t=this.tabs.findIndex((t=>t===e));a=this.findNextFocusableTab(t,"forward")}if(!a)return;a.tabIndex=0,a.focus({preventScroll:!0}),"auto"===this.activation?this.setActiveTab(a,{scrollBehavior:"smooth"}):this.tabs.forEach((t=>{t.tabIndex=t===a?0:-1})),["top","bottom"].includes(this.placement)&&$e(a,this.nav,"horizontal"),t.preventDefault()}}}findNextFocusableTab(t,e){let o=null;const a="forward"===e?1:-1;let r=t+a;for(;t<this.tabs.length;){if(o=this.tabs[r]||null,null===o){o="forward"===e?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!o.disabled)break;r+=a}return o}handleScrollToStart(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e={emitEvents:!0,scrollBehavior:"auto",...e},t.closest("wa-tab-group")===this&&t!==this.activeTab&&!t.disabled){const o=this.activeTab;this.active=t.panel,this.activeTab=t,this.tabs.forEach((t=>{t.active=t===this.activeTab,t.tabIndex=t===this.activeTab?0:-1})),this.panels.forEach((t=>t.active=t.name===this.activeTab?.panel)),["top","bottom"].includes(this.placement)&&$e(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(o&&this.dispatchEvent(new ye({name:o.panel})),this.dispatchEvent(new ge({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach((t=>{const e=this.panels.find((e=>e.name===t.panel));e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))}))}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter((t=>!t.disabled)),this.panels=this.getAllPanels(),this.updateComplete.then((()=>this.updateScrollControls()))}updateActiveTab(){const t=this.tabs.find((t=>t.panel===this.active));t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}updateScrollControls(){this.hasScrollControls=!this.withoutScrollControls&&["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){const t=this.hasUpdated?"rtl"===this.localize.dir():"rtl"===this.dir;return X`
      <div
        part="base"
        class=${Yt({"tab-group":!0,"tab-group-top":"top"===this.placement,"tab-group-bottom":"bottom"===this.placement,"tab-group-start":"start"===this.placement,"tab-group-end":"end"===this.placement,"tab-group-has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="nav-container" part="nav">
          ${this.hasScrollControls?X`
                <wa-button
                  part="scroll-button scroll-button-start"
                  exportparts="base:scroll-button__base"
                  class="scroll-button scroll-button-start"
                  appearance="plain"
                  @click=${this.handleScrollToStart}
                >
                  <wa-icon
                    name=${t?"chevron-right":"chevron-left"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToStart")}
                  ></wa-icon>
                </wa-button>
              `:""}

          <!-- We have a focus listener because in Firefox (and soon to be Chrome) overflow containers are focusable. -->
          <div class="nav" @focus=${()=>this.activeTab?.focus({preventScroll:!0})}>
            <div part="tabs" class="tabs" role="tablist">
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?X`
                <wa-button
                  part="scroll-button scroll-button-end"
                  class="scroll-button scroll-button-end"
                  exportparts="base:scroll-button__base"
                  appearance="plain"
                  @click=${this.handleScrollToEnd}
                >
                  <wa-icon
                    name=${t?"chevron-left":"chevron-right"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToEnd")}
                  ></wa-icon>
                </wa-button>
              `:""}
        </div>

        <div part="body" class="body"><slot @slotchange=${this.syncTabsAndPanels}></slot></div>
      </div>
    `}};Le.css=xe,i([gt(".tab-group")],Le.prototype,"tabGroup",2),i([gt(".body slot")],Le.prototype,"defaultSlot",2),i([gt(".nav")],Le.prototype,"nav",2),i([bt()],Le.prototype,"hasScrollControls",2),i([mt({reflect:!0})],Le.prototype,"active",2),i([mt()],Le.prototype,"placement",2),i([mt()],Le.prototype,"activation",2),i([mt({attribute:"without-scroll-controls",type:Boolean})],Le.prototype,"withoutScrollControls",2),i([Bt("active")],Le.prototype,"updateActiveTab",1),i([Bt("withoutScrollControls",{waitUntilFirstUpdate:!0})],Le.prototype,"updateScrollControls",1),Le=i([wt("wa-tab-group")],Le);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Se=u`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Ae=0,Fe=class extends kt{constructor(){super(...arguments),this.attrId=++Ae,this.componentId="wa-tab-panel-"+this.attrId,this.name="",this.active=!1,this.role="tabpanel"}connectedCallback(){super.connectedCallback(),this.id=(this.id||"").length>0?this.id:this.componentId}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return X`
      <slot
        part="base"
        class=${Yt({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};Fe.css=Se,i([mt({reflect:!0})],Fe.prototype,"name",2),i([mt({type:Boolean,reflect:!0})],Fe.prototype,"active",2),i([mt({reflect:!0})],Fe.prototype,"role",2),i([Bt("active")],Fe.prototype,"handleActiveChange",1),Fe=i([wt("wa-tab-panel")],Fe);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Me=u`
  :host {
    display: inline-block;
    color: var(--wa-color-neutral-on-quiet);
    font-weight: var(--wa-font-weight-action);
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font: inherit;
    padding: 1em 1.5em;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition: color var(--wa-transition-fast) var(--wa-transition-easing);

    ::slotted(wa-icon:first-child) {
      margin-inline-end: 0.5em;
    }

    ::slotted(wa-icon:last-child) {
      margin-inline-start: 0.5em;
    }
  }

  @media (hover: hover) {
    :host(:hover:not([disabled])) .tab {
      color: currentColor;
    }
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) .tab {
    outline: var(--wa-focus-ring);
    outline-offset: calc(-1 * var(--wa-border-width-l) - var(--wa-focus-ring-offset));
  }

  :host([active]:not([disabled])) {
    color: var(--wa-color-brand-on-quiet);
  }

  :host([disabled]) .tab {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (forced-colors: active) {
    :host([active]:not([disabled])) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Be=0,Ee=class extends kt{constructor(){super(...arguments),this.attrId=++Be,this.componentId="wa-tab-"+this.attrId,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0,this.slot="nav",this.role="tab"}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.tabIndex=this.disabled&&!this.active?-1:0}render(){return this.id=this.id?.length>0?this.id:this.componentId,X`
      <div
        part="base"
        class=${Yt({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};Ee.css=Me,i([gt(".tab")],Ee.prototype,"tab",2),i([mt({reflect:!0})],Ee.prototype,"panel",2),i([mt({type:Boolean,reflect:!0})],Ee.prototype,"active",2),i([mt({type:Boolean,reflect:!0})],Ee.prototype,"disabled",2),i([mt({type:Number,reflect:!0})],Ee.prototype,"tabIndex",2),i([mt({reflect:!0})],Ee.prototype,"slot",2),i([mt({reflect:!0})],Ee.prototype,"role",2),i([Bt("active")],Ee.prototype,"handleActiveChange",1),i([Bt("disabled")],Ee.prototype,"handleDisabledChange",1),Ee=i([wt("wa-tab")],Ee);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Oe=class extends Event{constructor(t){super("wa-select",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function*Ie(t=document.activeElement){null!=t&&(yield t,"shadowRoot"in t&&t.shadowRoot&&"closed"!==t.shadowRoot.mode&&(yield*Ie(t.shadowRoot.activeElement)))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var qe=u`
  :host {
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);
    display: contents;
  }

  #menu {
    display: flex;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;
    overflow: auto;
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;

    &.show {
      animation: show var(--show-duration) ease;
    }

    &.hide {
      animation: show var(--hide-duration) ease reverse;
    }

    ::slotted(h1),
    ::slotted(h2),
    ::slotted(h3),
    ::slotted(h4),
    ::slotted(h5),
    ::slotted(h6) {
      display: block !important;
      margin: 0.25em 0 !important;
      padding: 0.25em 0.75em !important;
      color: var(--wa-color-text-quiet);
      font-family: var(--wa-font-family-body) !important;
      font-weight: var(--wa-font-weight-semibold) !important;
      font-size: var(--wa-font-size-smaller) !important;
    }

    ::slotted(wa-divider) {
      --spacing: 0.25em; /* Component-specific, left as-is */
    }
  }

  wa-popup[data-current-placement^='top'] #menu {
    transform-origin: bottom;
  }

  wa-popup[data-current-placement^='bottom'] #menu {
    transform-origin: top;
  }

  wa-popup[data-current-placement^='left'] #menu {
    transform-origin: right;
  }

  wa-popup[data-current-placement^='right'] #menu {
    transform-origin: left;
  }

  wa-popup[data-current-placement='left-start'] #menu {
    transform-origin: right top;
  }

  wa-popup[data-current-placement='left-end'] #menu {
    transform-origin: right bottom;
  }

  wa-popup[data-current-placement='right-start'] #menu {
    transform-origin: left top;
  }

  wa-popup[data-current-placement='right-end'] #menu {
    transform-origin: left bottom;
  }

  @keyframes show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`,_e=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}},Te=class extends Event{constructor(t){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}},De=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}},je=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}},Ue=[];
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function Re(t){Ue.push(t)}function Pe(t){for(let e=Ue.length-1;e>=0;e--)if(Ue[e]===t){Ue.splice(e,1);break}}function Ne(t){return Ue.length>0&&Ue[Ue.length-1]===t}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ve(t,e,o){return(t=>Object.is(t,-0)?0:t)(t<e?e:t>o?o:t)}function He(t=""){return`${t}${((t=21)=>{let e="",o=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&o[t]];return e})()}`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */async function Ye(t,e,o){return t.animate(e,o).finished.catch((()=>{}))}function Xe(t,e){return new Promise((o=>{const a=new AbortController,{signal:r}=a;if(t.classList.contains(e))return;t.classList.add(e);let i=!1,n=()=>{i||(i=!0,t.classList.remove(e),o(),a.abort())};t.addEventListener("animationend",n,{once:!0,signal:r}),t.addEventListener("animationcancel",n,{once:!0,signal:r}),requestAnimationFrame((()=>{i||0!==t.getAnimations().length||n()}))}))}function We(t){return(t=(""+t).toLowerCase()).indexOf("ms")>-1?parseFloat(t)||0:t.indexOf("s")>-1?1e3*(parseFloat(t)||0):parseFloat(t)||0}const Ke=Math.min,Qe=Math.max,Ze=Math.round,Ge=Math.floor,Je=t=>({x:t,y:t}),to={left:"right",right:"left",bottom:"top",top:"bottom"},eo={start:"end",end:"start"};function oo(t,e,o){return Qe(t,Ke(e,o))}function ao(t,e){return"function"==typeof t?t(e):t}function ro(t){return t.split("-")[0]}function io(t){return t.split("-")[1]}function no(t){return"x"===t?"y":"x"}function so(t){return"y"===t?"height":"width"}const lo=new Set(["top","bottom"]);function co(t){return lo.has(ro(t))?"y":"x"}function ho(t){return no(co(t))}function uo(t){return t.replace(/start|end/g,(t=>eo[t]))}const wo=["left","right"],fo=["right","left"],po=["top","bottom"],mo=["bottom","top"];function bo(t){return t.replace(/left|right|bottom|top/g,(t=>to[t]))}function vo(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function go(t){const{x:e,y:o,width:a,height:r}=t;return{width:a,height:r,top:o,left:e,right:e+a,bottom:o+r,x:e,y:o}}function yo(t,e,o){let{reference:a,floating:r}=t;const i=co(e),n=ho(e),s=so(n),l=ro(e),c="y"===i,h=a.x+a.width/2-r.width/2,d=a.y+a.height/2-r.height/2,u=a[s]/2-r[s]/2;let w;switch(l){case"top":w={x:h,y:a.y-r.height};break;case"bottom":w={x:h,y:a.y+a.height};break;case"right":w={x:a.x+a.width,y:d};break;case"left":w={x:a.x-r.width,y:d};break;default:w={x:a.x,y:a.y}}switch(io(e)){case"start":w[n]-=u*(o&&c?-1:1);break;case"end":w[n]+=u*(o&&c?-1:1)}return w}async function xo(t,e){var o;void 0===e&&(e={});const{x:a,y:r,platform:i,rects:n,elements:s,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:w=0}=ao(e,t),f=vo(w),p=s[u?"floating"===d?"reference":"floating":d],m=go(await i.getClippingRect({element:null==(o=await(null==i.isElement?void 0:i.isElement(p)))||o?p:p.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(s.floating)),boundary:c,rootBoundary:h,strategy:l})),b="floating"===d?{x:a,y:r,width:n.floating.width,height:n.floating.height}:n.reference,v=await(null==i.getOffsetParent?void 0:i.getOffsetParent(s.floating)),g=await(null==i.isElement?void 0:i.isElement(v))&&await(null==i.getScale?void 0:i.getScale(v))||{x:1,y:1},y=go(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:b,offsetParent:v,strategy:l}):b);return{top:(m.top-y.top+f.top)/g.y,bottom:(y.bottom-m.bottom+f.bottom)/g.y,left:(m.left-y.left+f.left)/g.x,right:(y.right-m.right+f.right)/g.x}}const ko=new Set(["left","top"]);function Co(){return"undefined"!=typeof window}function zo(t){return So(t)?(t.nodeName||"").toLowerCase():"#document"}function $o(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function Lo(t){var e;return null==(e=(So(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function So(t){return!!Co()&&(t instanceof Node||t instanceof $o(t).Node)}function Ao(t){return!!Co()&&(t instanceof Element||t instanceof $o(t).Element)}function Fo(t){return!!Co()&&(t instanceof HTMLElement||t instanceof $o(t).HTMLElement)}function Mo(t){return!(!Co()||"undefined"==typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof $o(t).ShadowRoot)}const Bo=new Set(["inline","contents"]);function Eo(t){const{overflow:e,overflowX:o,overflowY:a,display:r}=Vo(t);return/auto|scroll|overlay|hidden|clip/.test(e+a+o)&&!Bo.has(r)}const Oo=new Set(["table","td","th"]);function Io(t){return Oo.has(zo(t))}const qo=[":popover-open",":modal"];function _o(t){return qo.some((e=>{try{return t.matches(e)}catch(t){return!1}}))}const To=["transform","translate","scale","rotate","perspective"],Do=["transform","translate","scale","rotate","perspective","filter"],jo=["paint","layout","strict","content"];function Uo(t){const e=Ro(),o=Ao(t)?Vo(t):t;return To.some((t=>!!o[t]&&"none"!==o[t]))||!!o.containerType&&"normal"!==o.containerType||!e&&!!o.backdropFilter&&"none"!==o.backdropFilter||!e&&!!o.filter&&"none"!==o.filter||Do.some((t=>(o.willChange||"").includes(t)))||jo.some((t=>(o.contain||"").includes(t)))}function Ro(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}const Po=new Set(["html","body","#document"]);function No(t){return Po.has(zo(t))}function Vo(t){return $o(t).getComputedStyle(t)}function Ho(t){return Ao(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Yo(t){if("html"===zo(t))return t;const e=t.assignedSlot||t.parentNode||Mo(t)&&t.host||Lo(t);return Mo(e)?e.host:e}function Xo(t){const e=Yo(t);return No(e)?t.ownerDocument?t.ownerDocument.body:t.body:Fo(e)&&Eo(e)?e:Xo(e)}function Wo(t,e,o){var a;void 0===e&&(e=[]),void 0===o&&(o=!0);const r=Xo(t),i=r===(null==(a=t.ownerDocument)?void 0:a.body),n=$o(r);if(i){const t=Ko(n);return e.concat(n,n.visualViewport||[],Eo(r)?r:[],t&&o?Wo(t):[])}return e.concat(r,Wo(r,[],o))}function Ko(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Qo(t){const e=Vo(t);let o=parseFloat(e.width)||0,a=parseFloat(e.height)||0;const r=Fo(t),i=r?t.offsetWidth:o,n=r?t.offsetHeight:a,s=Ze(o)!==i||Ze(a)!==n;return s&&(o=i,a=n),{width:o,height:a,$:s}}function Zo(t){return Ao(t)?t:t.contextElement}function Go(t){const e=Zo(t);if(!Fo(e))return Je(1);const o=e.getBoundingClientRect(),{width:a,height:r,$:i}=Qo(e);let n=(i?Ze(o.width):o.width)/a,s=(i?Ze(o.height):o.height)/r;return n&&Number.isFinite(n)||(n=1),s&&Number.isFinite(s)||(s=1),{x:n,y:s}}const Jo=Je(0);function ta(t){const e=$o(t);return Ro()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Jo}function ea(t,e,o,a){void 0===e&&(e=!1),void 0===o&&(o=!1);const r=t.getBoundingClientRect(),i=Zo(t);let n=Je(1);e&&(a?Ao(a)&&(n=Go(a)):n=Go(t));const s=function(t,e,o){return void 0===e&&(e=!1),!(!o||e&&o!==$o(t))&&e}(i,o,a)?ta(i):Je(0);let l=(r.left+s.x)/n.x,c=(r.top+s.y)/n.y,h=r.width/n.x,d=r.height/n.y;if(i){const t=$o(i),e=a&&Ao(a)?$o(a):a;let o=t,r=Ko(o);for(;r&&a&&e!==o;){const t=Go(r),e=r.getBoundingClientRect(),a=Vo(r);l*=t.x,c*=t.y,h*=t.x,d*=t.y,l+=e.left+(r.clientLeft+parseFloat(a.paddingLeft))*t.x,c+=e.top+(r.clientTop+parseFloat(a.paddingTop))*t.y,o=$o(r),r=Ko(o)}}return go({width:h,height:d,x:l,y:c})}function oa(t,e){const o=Ho(t).scrollLeft;return e?e.left+o:ea(Lo(t)).left+o}function aa(t,e){const o=t.getBoundingClientRect();return{x:o.left+e.scrollLeft-oa(t,o),y:o.top+e.scrollTop}}const ra=new Set(["absolute","fixed"]);function ia(t,e,o){let a;if("viewport"===e)a=function(t,e){const o=$o(t),a=Lo(t),r=o.visualViewport;let i=a.clientWidth,n=a.clientHeight,s=0,l=0;if(r){i=r.width,n=r.height;const t=Ro();(!t||t&&"fixed"===e)&&(s=r.offsetLeft,l=r.offsetTop)}const c=oa(a);if(c<=0){const t=a.ownerDocument,e=t.body,o=getComputedStyle(e),r=Math.abs(a.clientWidth-e.clientWidth-("CSS1Compat"===t.compatMode&&parseFloat(o.marginLeft)+parseFloat(o.marginRight)||0));r<=25&&(i-=r)}else c<=25&&(i+=c);return{width:i,height:n,x:s,y:l}}(t,o);else if("document"===e)a=function(t){const e=Lo(t),o=Ho(t),a=t.ownerDocument.body,r=Qe(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),i=Qe(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight);let n=-o.scrollLeft+oa(t);const s=-o.scrollTop;return"rtl"===Vo(a).direction&&(n+=Qe(e.clientWidth,a.clientWidth)-r),{width:r,height:i,x:n,y:s}}(Lo(t));else if(Ao(e))a=function(t,e){const o=ea(t,!0,"fixed"===e),a=o.top+t.clientTop,r=o.left+t.clientLeft,i=Fo(t)?Go(t):Je(1);return{width:t.clientWidth*i.x,height:t.clientHeight*i.y,x:r*i.x,y:a*i.y}}(e,o);else{const o=ta(t);a={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return go(a)}function na(t,e){const o=Yo(t);return!(o===e||!Ao(o)||No(o))&&("fixed"===Vo(o).position||na(o,e))}function sa(t,e,o){const a=Fo(e),r=Lo(e),i="fixed"===o,n=ea(t,!0,i,e);let s={scrollLeft:0,scrollTop:0};const l=Je(0);function c(){l.x=oa(r)}if(a||!a&&!i)if(("body"!==zo(e)||Eo(r))&&(s=Ho(e)),a){const t=ea(e,!0,i,e);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else r&&c();i&&!a&&r&&c();const h=!r||a||i?Je(0):aa(r,s);return{x:n.left+s.scrollLeft-l.x-h.x,y:n.top+s.scrollTop-l.y-h.y,width:n.width,height:n.height}}function la(t){return"static"===Vo(t).position}function ca(t,e){if(!Fo(t)||"fixed"===Vo(t).position)return null;if(e)return e(t);let o=t.offsetParent;return Lo(t)===o&&(o=o.ownerDocument.body),o}function ha(t,e){const o=$o(t);if(_o(t))return o;if(!Fo(t)){let e=Yo(t);for(;e&&!No(e);){if(Ao(e)&&!la(e))return e;e=Yo(e)}return o}let a=ca(t,e);for(;a&&Io(a)&&la(a);)a=ca(a,e);return a&&No(a)&&la(a)&&!Uo(a)?o:a||function(t){let e=Yo(t);for(;Fo(e)&&!No(e);){if(Uo(e))return e;if(_o(e))return null;e=Yo(e)}return null}(t)||o}const da={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:o,offsetParent:a,strategy:r}=t;const i="fixed"===r,n=Lo(a),s=!!e&&_o(e.floating);if(a===n||s&&i)return o;let l={scrollLeft:0,scrollTop:0},c=Je(1);const h=Je(0),d=Fo(a);if((d||!d&&!i)&&(("body"!==zo(a)||Eo(n))&&(l=Ho(a)),Fo(a))){const t=ea(a);c=Go(a),h.x=t.x+a.clientLeft,h.y=t.y+a.clientTop}const u=!n||d||i?Je(0):aa(n,l);return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+h.x+u.x,y:o.y*c.y-l.scrollTop*c.y+h.y+u.y}},getDocumentElement:Lo,getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:a,strategy:r}=t;const i=[..."clippingAncestors"===o?_o(e)?[]:function(t,e){const o=e.get(t);if(o)return o;let a=Wo(t,[],!1).filter((t=>Ao(t)&&"body"!==zo(t))),r=null;const i="fixed"===Vo(t).position;let n=i?Yo(t):t;for(;Ao(n)&&!No(n);){const e=Vo(n),o=Uo(n);o||"fixed"!==e.position||(r=null),(i?!o&&!r:!o&&"static"===e.position&&r&&ra.has(r.position)||Eo(n)&&!o&&na(t,n))?a=a.filter((t=>t!==n)):r=e,n=Yo(n)}return e.set(t,a),a}(e,this._c):[].concat(o),a],n=i.reduce(((t,o)=>{const a=ia(e,o,r);return t.top=Qe(a.top,t.top),t.right=Ke(a.right,t.right),t.bottom=Ke(a.bottom,t.bottom),t.left=Qe(a.left,t.left),t}),ia(e,i[0],r));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},getOffsetParent:ha,getElementRects:async function(t){const e=this.getOffsetParent||ha,o=this.getDimensions,a=await o(t.floating);return{reference:sa(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:o}=Qo(t);return{width:e,height:o}},getScale:Go,isElement:Ao,isRTL:function(t){return"rtl"===Vo(t).direction}};function ua(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function wa(t,e,o,a){void 0===a&&(a={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:n="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:l=!1}=a,c=Zo(t),h=r||i?[...c?Wo(c):[],...Wo(e)]:[];h.forEach((t=>{r&&t.addEventListener("scroll",o,{passive:!0}),i&&t.addEventListener("resize",o)}));const d=c&&s?function(t,e){let o,a=null;const r=Lo(t);function i(){var t;clearTimeout(o),null==(t=a)||t.disconnect(),a=null}return function n(s,l){void 0===s&&(s=!1),void 0===l&&(l=1),i();const c=t.getBoundingClientRect(),{left:h,top:d,width:u,height:w}=c;if(s||e(),!u||!w)return;const f={rootMargin:-Ge(d)+"px "+-Ge(r.clientWidth-(h+u))+"px "+-Ge(r.clientHeight-(d+w))+"px "+-Ge(h)+"px",threshold:Qe(0,Ke(1,l))||1};let p=!0;function m(e){const a=e[0].intersectionRatio;if(a!==l){if(!p)return n();a?n(!1,a):o=setTimeout((()=>{n(!1,1e-7)}),1e3)}1!==a||ua(c,t.getBoundingClientRect())||n(),p=!1}try{a=new IntersectionObserver(m,{...f,root:r.ownerDocument})}catch(t){a=new IntersectionObserver(m,f)}a.observe(t)}(!0),i}(c,o):null;let u,w=-1,f=null;n&&(f=new ResizeObserver((t=>{let[a]=t;a&&a.target===c&&f&&(f.unobserve(e),cancelAnimationFrame(w),w=requestAnimationFrame((()=>{var t;null==(t=f)||t.observe(e)}))),o()})),c&&!l&&f.observe(c),f.observe(e));let p=l?ea(t):null;return l&&function e(){const a=ea(t);p&&!ua(p,a)&&o(),p=a,u=requestAnimationFrame(e)}(),o(),()=>{var t;h.forEach((t=>{r&&t.removeEventListener("scroll",o),i&&t.removeEventListener("resize",o)})),null==d||d(),null==(t=f)||t.disconnect(),f=null,l&&cancelAnimationFrame(u)}}const fa=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var o,a;const{x:r,y:i,placement:n,middlewareData:s}=e,l=await async function(t,e){const{placement:o,platform:a,elements:r}=t,i=await(null==a.isRTL?void 0:a.isRTL(r.floating)),n=ro(o),s=io(o),l="y"===co(o),c=ko.has(n)?-1:1,h=i&&l?-1:1,d=ao(e,t);let{mainAxis:u,crossAxis:w,alignmentAxis:f}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&"number"==typeof f&&(w="end"===s?-1*f:f),l?{x:w*h,y:u*c}:{x:u*c,y:w*h}}(e,t);return n===(null==(o=s.offset)?void 0:o.placement)&&null!=(a=s.arrow)&&a.alignmentOffset?{}:{x:r+l.x,y:i+l.y,data:{...l,placement:n}}}}},pa=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:a,placement:r}=e,{mainAxis:i=!0,crossAxis:n=!1,limiter:s={fn:t=>{let{x:e,y:o}=t;return{x:e,y:o}}},...l}=ao(t,e),c={x:o,y:a},h=await xo(e,l),d=co(ro(r)),u=no(d);let w=c[u],f=c[d];i&&(w=oo(w+h["y"===u?"top":"left"],w,w-h["y"===u?"bottom":"right"])),n&&(f=oo(f+h["y"===d?"top":"left"],f,f-h["y"===d?"bottom":"right"]));const p=s.fn({...e,[u]:w,[d]:f});return{...p,data:{x:p.x-o,y:p.y-a,enabled:{[u]:i,[d]:n}}}}}},ma=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var o,a;const{placement:r,middlewareData:i,rects:n,initialPlacement:s,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:p=!0,...m}=ao(t,e);if(null!=(o=i.arrow)&&o.alignmentOffset)return{};const b=ro(r),v=co(s),g=ro(s)===s,y=await(null==l.isRTL?void 0:l.isRTL(c.floating)),x=u||(g||!p?[bo(s)]:function(t){const e=bo(t);return[uo(t),e,uo(e)]}(s)),k="none"!==f;!u&&k&&x.push(...function(t,e,o,a){const r=io(t);let i=function(t,e,o){switch(t){case"top":case"bottom":return o?e?fo:wo:e?wo:fo;case"left":case"right":return e?po:mo;default:return[]}}(ro(t),"start"===o,a);return r&&(i=i.map((t=>t+"-"+r)),e&&(i=i.concat(i.map(uo)))),i}(s,p,f,y));const C=[s,...x],z=await xo(e,m),$=[];let L=(null==(a=i.flip)?void 0:a.overflows)||[];if(h&&$.push(z[b]),d){const t=function(t,e,o){void 0===o&&(o=!1);const a=io(t),r=ho(t),i=so(r);let n="x"===r?a===(o?"end":"start")?"right":"left":"start"===a?"bottom":"top";return e.reference[i]>e.floating[i]&&(n=bo(n)),[n,bo(n)]}(r,n,y);$.push(z[t[0]],z[t[1]])}if(L=[...L,{placement:r,overflows:$}],!$.every((t=>t<=0))){var S,A;const t=((null==(S=i.flip)?void 0:S.index)||0)+1,e=C[t];if(e&&("alignment"!==d||v===co(e)||L.every((t=>co(t.placement)!==v||t.overflows[0]>0))))return{data:{index:t,overflows:L},reset:{placement:e}};let o=null==(A=L.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:A.placement;if(!o)switch(w){case"bestFit":{var F;const t=null==(F=L.filter((t=>{if(k){const e=co(t.placement);return e===v||"y"===e}return!0})).map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:F[0];t&&(o=t);break}case"initialPlacement":o=s}if(r!==o)return{reset:{placement:o}}}return{}}}},ba=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var o,a;const{placement:r,rects:i,platform:n,elements:s}=e,{apply:l=()=>{},...c}=ao(t,e),h=await xo(e,c),d=ro(r),u=io(r),w="y"===co(r),{width:f,height:p}=i.floating;let m,b;"top"===d||"bottom"===d?(m=d,b=u===(await(null==n.isRTL?void 0:n.isRTL(s.floating))?"start":"end")?"left":"right"):(b=d,m="end"===u?"top":"bottom");const v=p-h.top-h.bottom,g=f-h.left-h.right;let y=Ke(p-h[m],v),x=Ke(f-h[b],g);if(null!=(o=e.middlewareData.shift)&&o.enabled.x&&(x=g),null!=(a=e.middlewareData.shift)&&a.enabled.y&&(y=v),!e.middlewareData.shift&&!u){const t=Qe(h.left,0),e=Qe(h.right,0),o=Qe(h.top,0),a=Qe(h.bottom,0);w?x=f-2*(0!==t||0!==e?t+e:Qe(h.left,h.right)):y=p-2*(0!==o||0!==a?o+a:Qe(h.top,h.bottom))}await l({...e,availableWidth:x,availableHeight:y});const k=await n.getDimensions(s.floating);return f!==k.width||p!==k.height?{reset:{rects:!0}}:{}}}},va=(t,e,o)=>{const a=new Map,r={platform:da,...o},i={...r.platform,_c:a};return(async(t,e,o)=>{const{placement:a="bottom",strategy:r="absolute",middleware:i=[],platform:n}=o,s=i.filter(Boolean),l=await(null==n.isRTL?void 0:n.isRTL(e));let c=await n.getElementRects({reference:t,floating:e,strategy:r}),{x:h,y:d}=yo(c,a,l),u=a,w={},f=0;for(let o=0;o<s.length;o++){const{name:i,fn:p}=s[o],{x:m,y:b,data:v,reset:g}=await p({x:h,y:d,initialPlacement:a,placement:u,strategy:r,middlewareData:w,rects:c,platform:n,elements:{reference:t,floating:e}});h=null!=m?m:h,d=null!=b?b:d,w={...w,[i]:{...w[i],...v}},g&&f<=50&&(f++,"object"==typeof g&&(g.placement&&(u=g.placement),g.rects&&(c=!0===g.rects?await n.getElementRects({reference:t,floating:e,strategy:r}):g.rects),({x:h,y:d}=yo(c,u,l))),o=-1)}return{x:h,y:d,placement:u,strategy:r,middlewareData:w}})(t,e,{...r,platform:i})};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ga=new Set,ya=class extends kt{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new Nt(this),this.userTypedQuery="",this.openSubmenuStack=[],this.open=!1,this.size="m",this.placement="bottom-start",this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async t=>{const e="rtl"===this.localize.dir();if("Escape"===t.key&&this.open&&Ne(this)){const e=this.getTrigger();return t.preventDefault(),t.stopPropagation(),this.open=!1,void e?.focus({preventScroll:!0})}const o=[...Ie()].find((t=>"wa-dropdown-item"===t.localName)),a="wa-dropdown-item"===o?.localName,r=this.getCurrentSubmenuItem(),i=!!r;let n,s,l,c;if(i?(n=this.getSubmenuItems(r),s=n.find((t=>t.active||t===o)),l=s?n.indexOf(s):-1):(n=this.getItems(),s=n.find((t=>t.active||t===o)),l=s?n.indexOf(s):-1),"ArrowUp"===t.key&&(t.preventDefault(),t.stopPropagation(),c=l>0?n[l-1]:n[n.length-1]),"ArrowDown"===t.key&&(t.preventDefault(),t.stopPropagation(),c=-1!==l&&l<n.length-1?n[l+1]:n[0]),t.key===(e?"ArrowLeft":"ArrowRight")&&a&&s&&s.hasSubmenu)return t.preventDefault(),t.stopPropagation(),s.submenuOpen=!0,this.addToSubmenuStack(s),void setTimeout((()=>{const t=this.getSubmenuItems(s);t.length>0&&(t.forEach(((t,e)=>t.active=0===e)),t[0].focus({preventScroll:!0}))}),0);if(t.key===(e?"ArrowRight":"ArrowLeft")&&i){t.preventDefault(),t.stopPropagation();const e=this.removeFromSubmenuStack();e&&(e.submenuOpen=!1,setTimeout((()=>{e.focus({preventScroll:!0}),e.active=!0,("submenu"===e.slot?this.getSubmenuItems(e.parentElement):this.getItems()).forEach((t=>{t!==e&&(t.active=!1)}))}),0))}else{if("Home"!==t.key&&"End"!==t.key||(t.preventDefault(),t.stopPropagation(),c="Home"===t.key?n[0]:n[n.length-1]),"Tab"===t.key&&await this.hideMenu(),1!==t.key.length||t.metaKey||t.ctrlKey||t.altKey||" "===t.key&&""===this.userTypedQuery||(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout((()=>{this.userTypedQuery=""}),1e3),this.userTypedQuery+=t.key,n.some((t=>{const e=(t.textContent||"").trim().toLowerCase(),o=this.userTypedQuery.trim().toLowerCase();return!!e.startsWith(o)&&(c=t,!0)}))),c)return t.preventDefault(),t.stopPropagation(),n.forEach((t=>t.active=t===c)),c.focus({preventScroll:!0}),void c.scrollIntoView({block:"nearest"});("Enter"===t.key||" "===t.key&&""===this.userTypedQuery)&&a&&s&&(t.preventDefault(),t.stopPropagation(),s.hasSubmenu?(s.submenuOpen=!0,this.addToSubmenuStack(s),setTimeout((()=>{const t=this.getSubmenuItems(s);t.length>0&&(t.forEach(((t,e)=>t.active=0===e)),t[0].focus({preventScroll:!0}))}),0)):this.makeSelection(s))}},this.handleDocumentPointerDown=t=>{t.composedPath().some((t=>t instanceof HTMLElement&&(t===this||t.closest('wa-dropdown, [part="submenu"]'))))||(this.open=!1)},this.handleGlobalMouseMove=t=>{const e=this.getCurrentSubmenuItem();if(!e?.submenuOpen||!e.submenuElement)return;const o=e.submenuElement.getBoundingClientRect(),a="rtl"===this.localize.dir(),r=a?o.right:o.left,i=a?Math.max(t.clientX,r):Math.min(t.clientX,r),n=Math.max(o.top,Math.min(t.clientY,o.bottom));e.submenuElement.style.setProperty("--safe-triangle-cursor-x",i+"px"),e.submenuElement.style.setProperty("--safe-triangle-cursor-y",n+"px");const s=t.composedPath(),l=e.matches(":hover"),c=!!e.submenuElement?.matches(":hover"),h=l||!!s.find((t=>t===e)),d=c||!!s.find((t=>t instanceof HTMLElement&&t.closest('[part="submenu"]')===e.submenuElement));h||d||setTimeout((()=>{l||c||(e.submenuOpen=!1)}),100)}}handleSizeChange(){Lt(this.localName,this.size)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach((t=>t())),this.submenuCleanups.clear(),document.removeEventListener("mousemove",this.handleGlobalMouseMove),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),Pe(this)}firstUpdated(){this.syncAriaAttributes()}async updated(t){if(t.has("open")){const e=t.get("open");if(e===this.open)return;if(void 0===e&&!1===this.open)return;this.customStates.set("open",this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())}t.has("size")&&this.syncItemSizes()}getItems(t=!1){const e=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter((t=>"wa-dropdown-item"===t.localName));return t?e:e.filter((t=>!t.disabled))}getSubmenuItems(t,e=!1){const o=t.shadowRoot?.querySelector('slot[name="submenu"]')||t.querySelector('slot[name="submenu"]');if(!o)return[];const a=o.assignedElements({flatten:!0}).filter((t=>"wa-dropdown-item"===t.localName));return e?a:a.filter((t=>!t.disabled))}syncItemSizes(){(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter((t=>"wa-dropdown-item"===t.localName)).forEach((t=>t.size=this.size))}addToSubmenuStack(t){const e=this.openSubmenuStack.indexOf(t);-1!==e?this.openSubmenuStack=this.openSubmenuStack.slice(0,e+1):this.openSubmenuStack.push(t)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach((t=>{t.submenuOpen=!1})),this.openSubmenuStack=[]}closeSiblingSubmenus(t){const e=t.closest('wa-dropdown-item:not([slot="submenu"])');let o;o=e?this.getSubmenuItems(e,!0):this.getItems(!0),o.forEach((e=>{e!==t&&e.submenuOpen&&(e.submenuOpen=!1)})),this.openSubmenuStack.includes(t)||this.openSubmenuStack.push(t)}getTrigger(){return this.querySelector('[slot="trigger"]')}async showMenu(){if(!this.getTrigger()||!this.popup||!this.menu)return;const t=new _e;if(this.dispatchEvent(t),t.defaultPrevented)return void(this.open=!1);if(this.popup.active)return;ga.forEach((t=>t.open=!1)),this.popup.active=!0,this.open=!0,ga.add(this),Re(this),this.syncAriaAttributes(),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("hide"),await Xe(this.menu,"show");const e=this.getItems();e.length>0&&(e.forEach(((t,e)=>t.active=0===e)),e[0].focus({preventScroll:!0})),this.dispatchEvent(new je)}async hideMenu(){if(!this.popup||!this.menu)return;const t=new Te({source:this});this.dispatchEvent(t),t.defaultPrevented?this.open=!0:(this.open=!1,ga.delete(this),Pe(this),this.syncAriaAttributes(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("show"),await Xe(this.menu,"hide"),this.popup.active=this.open,this.dispatchEvent(new De))}handleMenuClick(t){const e=t.target.closest("wa-dropdown-item");if(e&&!e.disabled)return e.hasSubmenu?(e.submenuOpen||(this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),e.submenuOpen=!0),void t.stopPropagation()):void this.makeSelection(e)}async handleMenuSlotChange(){const t=this.getItems(!0);await Promise.all(t.map((t=>t.updateComplete))),this.syncItemSizes();const e=t.some((t=>"checkbox"===t.type)),o=t.some((t=>t.hasSubmenu));t.forEach(((t,a)=>{t.active=0===a,t.checkboxAdjacent=e,t.submenuAdjacent=o}))}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(t){const e=t.detail.item;this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),this.setupSubmenuPosition(e),this.processSubmenuItems(e)}setupSubmenuPosition(t){if(!t.submenuElement)return;this.cleanupSubmenuPosition(t);const e=wa(t,t.submenuElement,(()=>{this.positionSubmenu(t),this.updateSafeTriangleCoordinates(t)}));this.submenuCleanups.set(t,e);const o=t.submenuElement.querySelector('slot[name="submenu"]');o&&(o.removeEventListener("slotchange",ya.handleSubmenuSlotChange),o.addEventListener("slotchange",ya.handleSubmenuSlotChange),ya.handleSubmenuSlotChange({target:o}))}static handleSubmenuSlotChange(t){const e=t.target;if(!e)return;const o=e.assignedElements().filter((t=>"wa-dropdown-item"===t.localName));if(0===o.length)return;const a=o.some((t=>t.hasSubmenu)),r=o.some((t=>"checkbox"===t.type));o.forEach((t=>{t.submenuAdjacent=a,t.checkboxAdjacent=r}))}processSubmenuItems(t){if(!t.submenuElement)return;const e=this.getSubmenuItems(t,!0),o=e.some((t=>t.hasSubmenu));e.forEach((t=>{t.submenuAdjacent=o}))}cleanupSubmenuPosition(t){const e=this.submenuCleanups.get(t);e&&(e(),this.submenuCleanups.delete(t))}positionSubmenu(t){if(!t.submenuElement)return;const e="rtl"===this.localize.dir();va(t,t.submenuElement,{placement:e?"left-start":"right-start",middleware:[fa({mainAxis:0,crossAxis:-5}),ma({fallbackStrategy:"bestFit"}),pa({padding:8})]}).then((({x:e,y:o,placement:a})=>{t.submenuElement.setAttribute("data-placement",a),Object.assign(t.submenuElement.style,{left:e+"px",top:o+"px"})}))}updateSafeTriangleCoordinates(t){if(!t.submenuElement||!t.submenuOpen)return;const e=document.activeElement?.matches(":focus-visible");if(e)return void t.submenuElement.style.setProperty("--safe-triangle-visible","none");t.submenuElement.style.setProperty("--safe-triangle-visible","block");const o=t.submenuElement.getBoundingClientRect(),a="rtl"===this.localize.dir();t.submenuElement.style.setProperty("--safe-triangle-submenu-start-x",(a?o.right:o.left)+"px"),t.submenuElement.style.setProperty("--safe-triangle-submenu-start-y",o.top+"px"),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-x",(a?o.right:o.left)+"px"),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-y",o.bottom+"px")}makeSelection(t){const e=this.getTrigger();if(t.disabled)return;"checkbox"===t.type&&(t.checked=!t.checked);const o=new Oe({item:t});this.dispatchEvent(o),o.defaultPrevented||(this.open=!1,e?.focus({preventScroll:!0}))}async syncAriaAttributes(){const t=this.getTrigger();let e;t&&("wa-button"===t.localName?(await customElements.whenDefined("wa-button"),await t.updateComplete,e=t.shadowRoot.querySelector('[part="base"]')):e=t,e.hasAttribute("id")||e.setAttribute("id",He("wa-dropdown-trigger-")),e.setAttribute("aria-haspopup","menu"),e.setAttribute("aria-expanded",this.open?"true":"false"),this.menu?.setAttribute("aria-expanded","false"))}render(){return X`
      <wa-popup
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        ?active=${this.didSSR&&!this.hasUpdated?this.open:this.popup?.active}
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
    `}};ya.css=[At,qe],i([gt("slot:not([name])")],ya.prototype,"defaultSlot",2),i([gt("#menu")],ya.prototype,"menu",2),i([gt("wa-popup")],ya.prototype,"popup",2),i([mt({type:Boolean,reflect:!0})],ya.prototype,"open",2),i([mt({reflect:!0})],ya.prototype,"size",2),i([Bt("size")],ya.prototype,"handleSizeChange",1),i([mt({reflect:!0})],ya.prototype,"placement",2),i([mt({type:Number})],ya.prototype,"distance",2),i([mt({type:Number})],ya.prototype,"skidding",2),ya=i([wt("wa-dropdown")],ya);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var xa=u`
  :host {
    display: flex;
    position: relative;
    align-items: center;
    padding: 0.5em 1em;
    border-radius: var(--wa-border-radius-s);
    isolation: isolate;
    color: var(--wa-color-text-normal);
    line-height: var(--wa-line-height-condensed);
    cursor: pointer;
    transition:
      var(--wa-transition-fast) background-color var(--wa-transition-easing),
      var(--wa-transition-fast) color var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host(:hover:not(:state(disabled))) {
      background-color: var(--wa-color-neutral-fill-normal);
    }
  }

  :host(:state(submenu-open)) {
    background-color: var(--wa-color-neutral-fill-normal);
  }

  :host(:focus-visible) {
    z-index: 1;
    outline: var(--wa-focus-ring);
    background-color: var(--wa-color-neutral-fill-normal);
  }

  :host(:state(disabled)),
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Danger variant */
  :host([variant='danger']),
  :host([variant='danger']) #details {
    color: var(--wa-color-danger-on-quiet);
  }

  @media (hover: hover) {
    :host([variant='danger']:hover) {
      background-color: var(--wa-color-danger-fill-normal);
      color: var(--wa-color-danger-on-normal);
    }
  }

  :host([variant='danger']:state(submenu-open)),
  :host([variant='danger']:focus-visible) {
    background-color: var(--wa-color-danger-fill-normal);
    color: var(--wa-color-danger-on-normal);
  }

  :host([checkbox-adjacent]) {
    padding-inline-start: 2em;
  }

  /* Only add padding when item actually has a submenu */
  :host([submenu-adjacent]:not(:state(has-submenu))) #details {
    padding-inline-end: 0;
  }

  :host(:state(has-submenu)[submenu-adjacent]) #details {
    padding-inline-end: 1.75em;
  }

  #check {
    visibility: hidden;
    margin-inline-start: -1.5em;
    margin-inline-end: 0.5em;
    font-size: var(--wa-font-size-smaller);
  }

  :host(:state(checked)) #check {
    visibility: visible;
  }

  #icon ::slotted(*) {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    margin-inline-end: 0.75em !important;
    font-size: var(--wa-font-size-smaller);
  }

  #label {
    flex: 1 1 auto;
    min-width: 0;
  }

  #details {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: end;
    color: var(--wa-color-text-quiet);
    font-size: var(--wa-font-size-smaller) !important;
  }

  #details ::slotted(*) {
    margin-inline-start: 2em !important;
  }

  /* Submenu indicator icon */
  #submenu-indicator {
    position: absolute;
    inset-inline-end: 1em;
    color: var(--wa-color-neutral-on-quiet);
    font-size: var(--wa-font-size-smaller);
  }

  /* Flip chevron icon when RTL */
  :host(:dir(rtl)) #submenu-indicator {
    transform: scaleX(-1);
  }

  /* Submenu styles */
  #submenu {
    display: flex;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;

    /* Override default popover styles */
    &[popover] {
      margin: 0;
      inset: auto;
      padding: 0.25em;
      overflow: visible;
      border-radius: var(--wa-border-radius-m);
    }

    &.show {
      animation: submenu-show var(--show-duration, var(--wa-transition-fast)) ease;
    }

    &.hide {
      animation: submenu-show var(--show-duration, var(--wa-transition-fast)) ease reverse;
    }

    /* Submenu placement transform origins */
    &[data-placement^='top'] {
      transform-origin: bottom;
    }

    &[data-placement^='bottom'] {
      transform-origin: top;
    }

    &[data-placement^='left'] {
      transform-origin: right;
    }

    &[data-placement^='right'] {
      transform-origin: left;
    }

    &[data-placement='left-start'] {
      transform-origin: right top;
    }

    &[data-placement='left-end'] {
      transform-origin: right bottom;
    }

    &[data-placement='right-start'] {
      transform-origin: left top;
    }

    &[data-placement='right-end'] {
      transform-origin: left bottom;
    }

    /* Safe triangle styling */
    &::before {
      display: none;
      z-index: 9;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: transparent;
      content: '';
      clip-path: polygon(
        var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
        var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
        var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
      );
      pointer-events: auto; /* Enable mouse events on the triangle */
    }

    &[data-visible]::before {
      display: block;
    }
  }

  ::slotted(wa-dropdown-item) {
    font-size: inherit;
  }

  ::slotted(wa-divider) {
    --spacing: 0.25em;
  }

  @keyframes submenu-show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,ka=class extends kt{constructor(){super(...arguments),this.hasSlotController=new St(this,"[default]","start","end"),this.active=!1,this.variant="default",this.size="m",this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type="normal",this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",this.submenuOpen?"true":"false")):(this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"))},this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}}handleSizeChange(){Lt(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.addEventListener?.("click",this.handleHostClick),this.addEventListener?.("mouseenter",this.handleMouseEnter.bind(this)),this.shadowRoot?.addEventListener?.("click",this.handleClick,{capture:!0}),this.shadowRoot?.addEventListener?.("slotchange",this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener?.("click",this.handleHostClick),this.removeEventListener?.("mouseenter",this.handleMouseEnter),this.shadowRoot?.removeEventListener?.("click",this.handleClick,{capture:!0}),this.shadowRoot?.removeEventListener?.("slotchange",this.handleSlotChange)}firstUpdated(){this.setAttribute("tabindex","-1"),this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState()}updated(t){t.has("active")&&(this.setAttribute("tabindex",this.active?"0":"-1"),this.customStates.set("active",this.active)),t.has("checked")&&("checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked"),this.customStates.set("checked",this.checked)),t.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),t.has("type")&&("checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))),t.has("submenuOpen")&&(this.customStates.set("submenu-open",this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set("has-submenu",this.hasSubmenu)}async openSubmenu(){const t=this.submenuElement;this.hasSubmenu&&t&&this.isConnected&&(this.notifyParentOfOpening(),t.showPopover?.(),t.hidden=!1,t.setAttribute("data-visible",""),this.submenuOpen=!0,this.setAttribute("aria-expanded","true"),await Xe(t,"show"),setTimeout((()=>{const t=this.getSubmenuItems();t.length>0&&(t.forEach(((t,e)=>t.active=0===e)),t[0].focus({preventScroll:!0}))}),0))}notifyParentOfOpening(){const t=new CustomEvent("submenu-opening",{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(t);const e=this.parentElement;e&&[...e.children].filter((t=>t!==this&&"wa-dropdown-item"===t.localName&&t.getAttribute("slot")===this.getAttribute("slot")&&t.submenuOpen)).forEach((t=>{t.submenuOpen=!1}))}async closeSubmenu(){const t=this.submenuElement;this.hasSubmenu&&t&&(this.submenuOpen=!1,this.setAttribute("aria-expanded","false"),t.hidden||(await Xe(t,"hide"),t?.isConnected&&(t.hidden=!0,t.removeAttribute("data-visible"),t.hidePopover?.())))}getSubmenuItems(){return[...this.children].filter((t=>"wa-dropdown-item"===t.localName&&"submenu"===t.getAttribute("slot")&&!t.hasAttribute("disabled")))}handleMouseEnter(){this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}render(){return X`
      ${"checkbox"===this.type?X`
            <wa-icon
              id="check"
              part="checkmark"
              exportparts="svg:checkmark__svg"
              library="system"
              name="check"
            ></wa-icon>
          `:""}

      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>

      <span id="label" part="label">
        <slot></slot>
      </span>

      <span id="details" part="details">
        <slot name="details"></slot>
      </span>

      ${this.hasSubmenu?X`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:""}
      ${this.hasSubmenu?X`
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
          `:""}
    `}};ka.css=xa,i([gt("#submenu")],ka.prototype,"submenuElement",2),i([mt({type:Boolean})],ka.prototype,"active",2),i([mt({reflect:!0})],ka.prototype,"variant",2),i([mt({reflect:!0})],ka.prototype,"size",2),i([Bt("size")],ka.prototype,"handleSizeChange",1),i([mt({attribute:"checkbox-adjacent",type:Boolean,reflect:!0})],ka.prototype,"checkboxAdjacent",2),i([mt({attribute:"submenu-adjacent",type:Boolean,reflect:!0})],ka.prototype,"submenuAdjacent",2),i([mt()],ka.prototype,"value",2),i([mt({reflect:!0})],ka.prototype,"type",2),i([mt({type:Boolean})],ka.prototype,"checked",2),i([mt({type:Boolean,reflect:!0})],ka.prototype,"disabled",2),i([mt({type:Boolean,reflect:!0})],ka.prototype,"submenuOpen",2),i([bt()],ka.prototype,"hasSubmenu",2),ka=i([wt("wa-dropdown-item")],ka);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ca=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}},za=u`
  :host {
    --arrow-color: black;
    --arrow-size: var(--wa-tooltip-arrow-size);
    --popup-border-width: 0px;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45) to calculate the length of the arrow after rotation.
     *
     * The diamond will be translated inward by --arrow-base-offset, the border thickness, to centralise it on
     * the inner edge of the popup border. This also means we need to increase the size of the arrow by the
     * same amount to compensate.
     *
     * A diamond shaped clipping mask is used to avoid overlap of popup content. This extends slightly inward so
     * the popup border is covered with no sub-pixel rounding artifacts. The diamond corners are mitred at 22.5º
     * to properly merge any arrow border with the popup border. The constant 1.4142 is derived from 1 + tan(22.5).
     *
     */
    --arrow-base-offset: var(--popup-border-width);
    --arrow-size-diagonal: calc((var(--arrow-size) + var(--arrow-base-offset)) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));
    --arrow-size-div: calc(var(--arrow-size-diagonal) * 2);
    --arrow-clipping-corner: calc(var(--arrow-base-offset) * 1.4142);

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);

    /* Clear UA styles for [popover] */
    :where(&) {
      inset: unset;
      padding: unset;
      margin: unset;
      width: unset;
      height: unset;
      color: unset;
      background: unset;
      border: unset;
      overflow: unset;
    }
  }

  .popup-fixed {
    position: fixed;
  }

  .popup:not(.popup-active) {
    display: none;
  }

  .arrow {
    position: absolute;
    width: var(--arrow-size-div);
    height: var(--arrow-size-div);
    background: var(--arrow-color);
    z-index: 3;
    clip-path: polygon(
      var(--arrow-clipping-corner) 100%,
      var(--arrow-base-offset) calc(100% - var(--arrow-base-offset)),
      calc(var(--arrow-base-offset) - 2px) calc(100% - var(--arrow-base-offset)),
      calc(100% - var(--arrow-base-offset)) calc(var(--arrow-base-offset) - 2px),
      calc(100% - var(--arrow-base-offset)) var(--arrow-base-offset),
      100% var(--arrow-clipping-corner),
      100% 100%
    );
    rotate: 45deg;
  }

  :host([data-current-placement|='left']) .arrow {
    rotate: -45deg;
  }

  :host([data-current-placement|='right']) .arrow {
    rotate: 135deg;
  }

  :host([data-current-placement|='bottom']) .arrow {
    rotate: 225deg;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge-visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: 899;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }

  /* Built-in animations */
  .show {
    animation: show var(--show-duration) ease;
  }

  .hide {
    animation: show var(--hide-duration) ease reverse;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show-with-scale {
    animation: show-with-scale var(--show-duration) ease;
  }

  .hide-with-scale {
    animation: show-with-scale var(--hide-duration) ease reverse;
  }

  @keyframes show-with-scale {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function $a(t){return function(t){for(let e=t;e;e=La(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=La(t);e;e=La(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||Uo(t))return e;if("BODY"===e.tagName)return e}}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */(t)}function La(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Sa(t){return null!==t&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t instanceof Element)}var Aa=!!globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),Fa=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect();let o=0,a=0,r=0,i=0,n=0,s=0,l=0,c=0;this.placement.includes("top")||this.placement.includes("bottom")?t.top<e.top?(o=t.left,a=t.bottom,r=t.right,i=t.bottom,n=e.left,s=e.top,l=e.right,c=e.top):(o=e.left,a=e.bottom,r=e.right,i=e.bottom,n=t.left,s=t.top,l=t.right,c=t.top):t.left<e.left?(o=t.right,a=t.top,r=e.left,i=e.top,n=t.right,s=t.bottom,l=e.left,c=e.bottom):(o=e.right,a=e.top,r=t.left,i=t.top,n=e.right,s=e.bottom,l=t.left,c=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",o+"px"),this.style.setProperty("--hover-bridge-top-left-y",a+"px"),this.style.setProperty("--hover-bridge-top-right-x",r+"px"),this.style.setProperty("--hover-bridge-top-right-y",i+"px"),this.style.setProperty("--hover-bridge-bottom-left-x",n+"px"),this.style.setProperty("--hover-bridge-bottom-left-y",s+"px"),this.style.setProperty("--hover-bridge-bottom-right-x",l+"px"),this.style.setProperty("--hover-bridge-bottom-right-y",c+"px")}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Aa,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchorEl=this.anchor instanceof Element||Sa(this.anchor)?this.anchor:this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&this.active&&this.isConnected&&(this.popup?.showPopover?.(),this.cleanup=wa(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((t=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>t()))):t()}))}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;const t=[fa({mainAxis:this.distance,crossAxis:this.skidding})];let e;this.sync?t.push(ba({apply:({rects:t})=>{const e="height"===this.sync||"both"===this.sync;this.popup.style.width="width"===this.sync||"both"===this.sync?t.reference.width+"px":"",this.popup.style.height=e?t.reference.height+"px":""}})):(this.popup.style.width="",this.popup.style.height=""),this.SUPPORTS_POPOVER&&!Sa(this.anchor)&&"scroll"===this.boundary&&(e=Wo(this.anchorEl).filter((t=>t instanceof Element))),this.flip&&t.push(ma({boundary:this.flipBoundary||e,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(pa({boundary:this.shiftBoundary||e,padding:this.shiftPadding})),this.autoSize?t.push(ba({boundary:this.autoSizeBoundary||e,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",e+"px"):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",t+"px"):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push((t=>({name:"arrow",options:t,async fn(e){const{x:o,y:a,placement:r,rects:i,platform:n,elements:s,middlewareData:l}=e,{element:c,padding:h=0}=ao(t,e)||{};if(null==c)return{};const d=vo(h),u={x:o,y:a},w=ho(r),f=so(w),p=await n.getDimensions(c),m="y"===w,b=m?"top":"left",v=m?"bottom":"right",g=m?"clientHeight":"clientWidth",y=i.reference[f]+i.reference[w]-u[w]-i.floating[f],x=u[w]-i.reference[w],k=await(null==n.getOffsetParent?void 0:n.getOffsetParent(c));let C=k?k[g]:0;C&&await(null==n.isElement?void 0:n.isElement(k))||(C=s.floating[g]||i.floating[f]);const z=y/2-x/2,$=C/2-p[f]/2-1,L=Ke(d[b],$),S=Ke(d[v],$),A=L,F=C-p[f]-S,M=C/2-p[f]/2+z,B=oo(A,M,F),E=!l.arrow&&null!=io(r)&&M!==B&&i.reference[f]/2-(M<A?L:S)-p[f]/2<0,O=E?M<A?M-A:M-F:0;return{[w]:u[w]+O,data:{[w]:B,centerOffset:M-B-O,...E&&{alignmentOffset:O}},reset:E}}}))({element:this.arrowEl,padding:this.arrowPadding}));const o=this.SUPPORTS_POPOVER?t=>da.getOffsetParent(t,$a):da.getOffsetParent;va(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.SUPPORTS_POPOVER?"absolute":"fixed",platform:{...da,getOffsetParent:o}}).then((({x:t,y:e,middlewareData:o,placement:a})=>{const r="rtl"===this.localize.dir(),i={top:"bottom",right:"left",bottom:"top",left:"right"}[a.split("-")[0]];if(this.setAttribute("data-current-placement",a),Object.assign(this.popup.style,{left:t+"px",top:e+"px"}),this.arrow){const t=o.arrow.x,e=o.arrow.y;let a="",n="",s="",l="";if("start"===this.arrowPlacement){const o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",n=r?o:"",l=r?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";n=r?"":o,l=r?o:"",s="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(l="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",a="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof t?t+"px":"",a="number"==typeof e?e+"px":"");Object.assign(this.arrowEl.style,{top:a,right:n,bottom:s,left:l,[i]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.dispatchEvent(new Ca)}render(){return X`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Yt({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${Yt({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?X`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};Fa.css=za,i([gt(".popup")],Fa.prototype,"popup",2),i([gt(".arrow")],Fa.prototype,"arrowEl",2),i([mt({attribute:!1,type:Boolean})],Fa.prototype,"SUPPORTS_POPOVER",2),i([mt()],Fa.prototype,"anchor",2),i([mt({type:Boolean,reflect:!0})],Fa.prototype,"active",2),i([mt({reflect:!0})],Fa.prototype,"placement",2),i([mt()],Fa.prototype,"boundary",2),i([mt({type:Number})],Fa.prototype,"distance",2),i([mt({type:Number})],Fa.prototype,"skidding",2),i([mt({type:Boolean})],Fa.prototype,"arrow",2),i([mt({attribute:"arrow-placement"})],Fa.prototype,"arrowPlacement",2),i([mt({attribute:"arrow-padding",type:Number})],Fa.prototype,"arrowPadding",2),i([mt({type:Boolean})],Fa.prototype,"flip",2),i([mt({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map((t=>t.trim())).filter((t=>""!==t)),toAttribute:t=>t.join(" ")}})],Fa.prototype,"flipFallbackPlacements",2),i([mt({attribute:"flip-fallback-strategy"})],Fa.prototype,"flipFallbackStrategy",2),i([mt({type:Object})],Fa.prototype,"flipBoundary",2),i([mt({attribute:"flip-padding",type:Number})],Fa.prototype,"flipPadding",2),i([mt({type:Boolean})],Fa.prototype,"shift",2),i([mt({type:Object})],Fa.prototype,"shiftBoundary",2),i([mt({attribute:"shift-padding",type:Number})],Fa.prototype,"shiftPadding",2),i([mt({attribute:"auto-size"})],Fa.prototype,"autoSize",2),i([mt()],Fa.prototype,"sync",2),i([mt({type:Object})],Fa.prototype,"autoSizeBoundary",2),i([mt({attribute:"auto-size-padding",type:Number})],Fa.prototype,"autoSizePadding",2),i([mt({attribute:"hover-bridge",type:Boolean})],Fa.prototype,"hoverBridge",2),Fa=i([wt("wa-popup")],Fa);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ma=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}},Ba=u`
  @layer wa-component {
    :host {
      display: inline-flex;
      gap: 0.5em;
      border-radius: var(--wa-border-radius-m);
      align-items: center;
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
      border-style: var(--wa-border-style);
      border-width: var(--wa-border-width-s);
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      font-size: inherit;
      line-height: 1;
      white-space: nowrap;
      user-select: none;
      -webkit-user-select: none;
      height: calc(var(--wa-form-control-height) * 0.8);
      line-height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);
      padding: 0 0.75em;
    }

    /* Appearance modifiers */
    :host([appearance='outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }

    :host([appearance='filled']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: transparent;
    }

    :host([appearance='filled-outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }

    :host([appearance='accent']) {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
  }

  .content {
    font-size: var(--wa-font-size-smaller);
  }

  [part='remove-button'] {
    line-height: 1;
  }

  [part='remove-button']::part(base) {
    padding: 0;
    height: 1em;
    width: 1em;
    color: currentColor;
  }

  @media (hover: hover) {
    :host(:hover) > [part='remove-button']::part(base) {
      background-color: transparent;
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:active) > [part='remove-button']::part(base) {
    background-color: transparent;
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  /*
   * Pill modifier
   */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Ea=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.variant="neutral",this.appearance="filled-outlined",this.size="m",this.pill=!1,this.withRemove=!1}handleSizeChange(){Lt(this.localName,this.size)}handleRemoveClick(){this.dispatchEvent(new Ma)}render(){return X`
      <slot part="content" class="content"></slot>

      ${this.withRemove?X`
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
          `:""}
    `}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */Ea.css=[Ba,Mt,At],i([mt({reflect:!0})],Ea.prototype,"variant",2),i([mt({reflect:!0})],Ea.prototype,"appearance",2),i([mt({reflect:!0})],Ea.prototype,"size",2),i([Bt("size")],Ea.prototype,"handleSizeChange",1),i([mt({type:Boolean,reflect:!0})],Ea.prototype,"pill",2),i([mt({attribute:"with-remove",type:Boolean})],Ea.prototype,"withRemove",2),Ea=i([wt("wa-tag")],Ea);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Oa=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function Ia(t,e){"Enter"!==t.key||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||setTimeout((()=>{t.defaultPrevented||t.isComposing||function(t){let e=null;if("form"in t&&(e=t.form),!e&&"getForm"in t&&(e=t.getForm()),!e)return;const o=[...e.elements];if(1===o.length)return void e.requestSubmit(null);const a=o.find((t=>"submit"===t.type&&!t.matches(":disabled")));a&&(["input","button"].includes(a.localName)?e.requestSubmit(a):a.click())}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */(e)}))}var qa=u`
  :host {
    border-width: 0;
  }

  :host(:focus) {
    outline: none;
  }

  .text-field {
    display: flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    transition: inherit;
    height: var(--wa-form-control-height);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    cursor: text;
    color: var(--wa-form-control-value-color);
    font-size: var(--wa-form-control-value-font-size);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    vertical-align: middle;
    width: 100%;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    background-color: var(--wa-form-control-background-color);
    box-shadow: var(--box-shadow);
    padding: 0 var(--wa-form-control-padding-inline);
    outline-offset: var(--wa-focus-ring-offset);

    &:focus-within {
      outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
      outline-color: var(--wa-color-focus);
    }

    /* Style disabled inputs */
    &:has(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .text-field {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  :host([pill]) .text-field {
    border-radius: var(--wa-border-radius-pill) !important;
  }

  .text-field {
    /* Show autofill styles over the entire text field, not just the native <input> */
    &:has(:autofill),
    &:has(:-webkit-autofill) {
      background-color: var(--wa-color-brand-fill-quiet) !important;
    }

    input,
    textarea {
      /*
      Fixes an alignment issue with placeholders.
      https://github.com/shoelace-style/webawesome/issues/342
    */
      height: 100%;

      padding: 0;
      border: none;
      outline: none;
      box-shadow: none;
      margin: 0;
      cursor: inherit;
      -webkit-appearance: none;
      font: inherit;

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }
    }
  }

  input {
    flex: 1 1 auto;
    min-width: 0;
    height: 100%;
    transition: inherit;

    /* prettier-ignore */
    background-color: rgb(118 118 118 / 0); /* ensures proper placeholder styles in webkit's date input */
    height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    padding-block: 0;
    color: inherit;

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    &:focus {
      outline: none;
    }
  }

  textarea {
    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }
  }

  .start,
  .end {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;

    &::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  /*
   * Clearable + Password Toggle
   */

  .clear,
  .password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: var(--wa-transition-normal) color;
    cursor: pointer;
    margin-inline-start: var(--wa-form-control-padding-inline);

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }

    &:focus {
      outline: none;
    }
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  :host([without-spin-buttons]) input[type='number'] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      display: none;
    }
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,_a=u`
  :host {
    display: flex;
    flex-direction: column;
  }

  /* Treat wrapped labels, inputs, and hints as direct children of the host element */
  [part~='form-control'] {
    display: contents;
  }

  /* Label */
  :is([part~='form-control-label'], [part~='label']):has(*:not(:empty)),
  :is([part~='form-control-label'], [part~='label']).has-label {
    display: inline-flex;
    color: var(--wa-form-control-label-color);
    font-weight: var(--wa-form-control-label-font-weight);
    line-height: var(--wa-form-control-label-line-height);
    margin-block-end: 0.5em;
  }

  :host([required]) :is([part~='form-control-label'], [part~='label'])::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
    color: var(--wa-form-control-required-content-color);
  }

  /* Help text */
  [part~='hint'] {
    display: block;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);

    &:not(.has-slotted, .has-hint) {
      display: none;
    }
  }
`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const Ta=Vt(class extends Ht{constructor(t){if(super(t),3!==t.type&&1!==t.type&&4!==t.type)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===W||e===K)return e;const o=t.element,a=t.name;if(3===t.type){if(e===o[a])return W}else if(4===t.type){if(!!e===o.hasAttribute(a))return W}else if(1===t.type&&o.getAttribute(a)===e+"")return W;return((t,e=we)=>{t._$AH=e})(t),e}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Da=class extends Ct{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new St(this,"hint","label"),this.localize=new Nt(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="m",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,t()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}updateFormValue(t){null!=t?super.updateFormValue(t):this.setValue("",null)}handleSizeChange(){Lt(this.localName,this.size)}handleChange(t){this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleClearClick(t){t.preventDefault(),""!==this.value&&(this.value="",this.updateComplete.then((()=>{this.dispatchEvent(new Oa),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(t){Ia(t,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(t){super.updated(t),(t.has("value")||t.has("defaultValue")||t.has("type"))&&(this.input&&["number","date","time","datetime-local"].includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set("blank",!this.value),this.updateValidity())}handleStepChange(){this.input.step=this.step+"",this.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,a="preserve"){this.input.setRangeText(t,e??this.input.selectionStart,o??this.input.selectionEnd,a),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){const t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),o=!!this.label||!!t,a=!!this.hint||!!e,r=(!this.didSSR||this.hasUpdated)&&this.withClear&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value&&this.value.length>0);return X`
      <label
        part="form-control-label label"
        class=${Yt({label:!0,"has-label":o})}
        for="input"
        aria-hidden=${o?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${"password"===this.type&&this.passwordVisible?"text":this.type}
          title=${this.title}
          name=${Xt(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${Xt(this.placeholder)}
          minlength=${Xt(this.minlength)}
          maxlength=${Xt(this.maxlength)}
          min=${Xt(this.min)}
          max=${Xt(this.max)}
          step=${Xt(this.step)}
          .value=${Ta(this.value??"")}
          autocapitalize=${Xt(this.autocapitalize)}
          autocomplete=${Xt(this.autocomplete)}
          autocorrect=${this.autocorrect?"on":"off"}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${Xt(this.pattern)}
          enterkeyhint=${Xt(this.enterkeyhint)}
          inputmode=${Xt(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${r?X`
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
            `:""}
        ${this.passwordToggle&&!this.disabled?X`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${this.passwordVisible?X`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:X`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    `}
              </button>
            `:""}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${Yt({"has-slotted":a})}
        aria-hidden=${a?"false":"true"}
        >${this.hint}</slot
      >
    `}};Da.css=[At,_a,qa],Da.shadowRootOptions={...Ct.shadowRootOptions,delegatesFocus:!0},i([gt("input")],Da.prototype,"input",2),i([mt()],Da.prototype,"title",2),i([mt({reflect:!0})],Da.prototype,"type",2),i([bt()],Da.prototype,"value",1),i([mt({attribute:"value",reflect:!0})],Da.prototype,"defaultValue",2),i([mt({reflect:!0})],Da.prototype,"size",2),i([Bt("size")],Da.prototype,"handleSizeChange",1),i([mt({reflect:!0})],Da.prototype,"appearance",2),i([mt({type:Boolean,reflect:!0})],Da.prototype,"pill",2),i([mt()],Da.prototype,"label",2),i([mt({attribute:"hint"})],Da.prototype,"hint",2),i([mt({attribute:"with-clear",type:Boolean})],Da.prototype,"withClear",2),i([mt()],Da.prototype,"placeholder",2),i([mt({type:Boolean,reflect:!0})],Da.prototype,"readonly",2),i([mt({attribute:"password-toggle",type:Boolean})],Da.prototype,"passwordToggle",2),i([mt({attribute:"password-visible",type:Boolean})],Da.prototype,"passwordVisible",2),i([mt({attribute:"without-spin-buttons",type:Boolean,reflect:!0})],Da.prototype,"withoutSpinButtons",2),i([mt({type:Boolean,reflect:!0})],Da.prototype,"required",2),i([mt()],Da.prototype,"pattern",2),i([mt({type:Number})],Da.prototype,"minlength",2),i([mt({type:Number})],Da.prototype,"maxlength",2),i([mt()],Da.prototype,"min",2),i([mt()],Da.prototype,"max",2),i([mt()],Da.prototype,"step",2),i([mt()],Da.prototype,"autocapitalize",2),i([mt({type:Boolean,converter:{fromAttribute:t=>!(!t||"off"===t),toAttribute:t=>t?"on":"off"}})],Da.prototype,"autocorrect",2),i([mt()],Da.prototype,"autocomplete",2),i([mt({type:Boolean})],Da.prototype,"autofocus",2),i([mt()],Da.prototype,"enterkeyhint",2),i([mt({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],Da.prototype,"spellcheck",2),i([mt()],Da.prototype,"inputmode",2),i([mt({attribute:"with-label",type:Boolean})],Da.prototype,"withLabel",2),i([mt({attribute:"with-hint",type:Boolean})],Da.prototype,"withHint",2),i([Bt("step",{waitUntilFirstUpdate:!0})],Da.prototype,"handleStepChange",1),Da=i([wt("wa-input")],Da),Da.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ja=u`
  :host {
    --spacing: var(--wa-space-l);

    /* Internal calculated properties */
    --inner-border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));

    display: flex;
    flex-direction: column;
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
    border-radius: var(--wa-panel-border-radius);
    border-style: var(--wa-panel-border-style);
    box-shadow: var(--wa-shadow-s);
    border-width: var(--wa-panel-border-width);
    color: var(--wa-color-text-normal);
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
  }

  :host([appearance='outlined']) {
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='filled']) {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='accent']) {
    color: var(--wa-color-neutral-on-loud);
    background-color: var(--wa-color-neutral-fill-loud);
    border-color: transparent;
  }

  /* Take care of top and bottom radii */
  .media,
  :host(:not([with-media])) .header,
  :host(:not([with-media], [with-header])) .body {
    border-start-start-radius: var(--inner-border-radius);
    border-start-end-radius: var(--inner-border-radius);
  }

  :host(:not([with-footer])) .body,
  .footer {
    border-end-start-radius: var(--inner-border-radius);
    border-end-end-radius: var(--inner-border-radius);
  }

  .media {
    display: flex;
    overflow: hidden;

    &::slotted(*) {
      display: block;
      width: 100%;
      border-radius: 0 !important;
    }
  }

  /* Round all corners for plain appearance */
  :host([appearance='plain']) .media {
    border-radius: var(--inner-border-radius);

    &::slotted(*) {
      border-radius: inherit !important;
    }
  }

  .header {
    display: block;
    border-block-end-style: inherit;
    border-block-end-color: var(--wa-color-surface-border);
    border-block-end-width: var(--wa-panel-border-width);
    padding: calc(var(--spacing) / 2) var(--spacing);
  }

  .body {
    display: block;
    padding: var(--spacing);
  }

  .footer {
    display: block;
    border-block-start-style: inherit;
    border-block-start-color: var(--wa-color-surface-border);
    border-block-start-width: var(--wa-panel-border-width);
    padding: var(--spacing);
  }

  /* Push slots to sides when the action slots renders */
  .has-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  :host(:not([with-header])) .header,
  :host(:not([with-footer])) .footer,
  :host(:not([with-media])) .media {
    display: none;
  }

  /* Orientation Styles */
  :host([orientation='horizontal']) {
    flex-direction: row;

    .media {
      border-start-start-radius: var(--inner-border-radius);
      border-end-start-radius: var(--inner-border-radius);
      border-start-end-radius: 0;

      &::slotted(*) {
        block-size: 100%;
        inline-size: 100%;
        object-fit: cover;
      }
    }
  }

  :host([orientation='horizontal']) .body slot::slotted(*) {
    display: block;
    height: 100%;
    margin: 0;
  }

  :host([orientation='horizontal']) slot[name='actions']::slotted(*) {
    display: flex;
    align-items: center;
    padding: var(--spacing);
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Ua=class extends kt{constructor(){super(...arguments),this.hasSlotController=new St(this,"footer","header","media","header-actions","footer-actions","actions"),this.appearance="outlined",this.withHeader=!1,this.withMedia=!1,this.withFooter=!1,this.withHeaderActions=!1,this.withFooterActions=!1,this.orientation="vertical"}willUpdate(t){this.withHeader=this.hasSlotController.test("header","withHeader"),this.withMedia=this.hasSlotController.test("media","withMedia"),this.withFooter=this.hasSlotController.test("footer","withFooter"),super.willUpdate(t)}render(){if("horizontal"===this.orientation)return X`
        <slot name="media" part="media" class="media"></slot>
        <div part="body" class="body"><slot></slot></div>
        <slot name="actions" part="actions" class="actions"></slot>
      `;const t=this.hasSlotController.test("header-actions","withHeaderActions"),e=this.hasSlotController.test("footer-actions","withFooterActions");return X`
      <slot name="media" part="media" class="media"></slot>

      <header
        part="header"
        class=${Yt({header:!0,"has-actions":t})}
      >
        <slot name="header"></slot>
        <slot name="header-actions"></slot>
      </header>

      <div part="body" class="body"><slot></slot></div>

      <footer
        part="footer"
        class=${Yt({footer:!0,"has-actions":e})}
      >
        <slot name="footer"></slot>
        <slot name="footer-actions"></slot>
      </footer>
    `}};Ua.css=[At,ja],i([mt({reflect:!0})],Ua.prototype,"appearance",2),i([mt({attribute:"with-header",type:Boolean,reflect:!0})],Ua.prototype,"withHeader",2),i([mt({attribute:"with-media",type:Boolean,reflect:!0})],Ua.prototype,"withMedia",2),i([mt({attribute:"with-footer",type:Boolean,reflect:!0})],Ua.prototype,"withFooter",2),i([mt({attribute:"with-header-actions",type:Boolean,reflect:!0})],Ua.prototype,"withHeaderActions",2),i([mt({attribute:"with-footer-actions",type:Boolean,reflect:!0})],Ua.prototype,"withFooterActions",2),i([mt({reflect:!0})],Ua.prototype,"orientation",2),Ua=i([wt("wa-card")],Ua),Ua.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ra=u`
  :host {
    --color: var(--wa-color-surface-border);
    --width: var(--wa-border-width-s);
    --spacing: var(--wa-space-m);
  }

  :host(:not([orientation='vertical'])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([orientation='vertical']) {
    display: inline-block;
    height: 100%;
    border-inline-start: solid var(--width) var(--color);
    margin: 0 var(--spacing);
    min-block-size: 1lh;
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Pa=class extends kt{constructor(){super(...arguments),this.orientation="horizontal"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.orientation)}};Pa.css=Ra,i([mt({reflect:!0})],Pa.prototype,"orientation",2),i([Bt("orientation")],Pa.prototype,"handleVerticalChange",1),Pa=i([wt("wa-divider")],Pa);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Na=u`
  :host {
    --tag-max-size: 10ch;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);
  }

  /* Add ellipses to multi select options */
  :host wa-tag::part(content) {
    display: initial;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: var(--tag-max-size);
  }

  :host .disabled [part~='combobox'] {
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  :host .enabled:is(.open, :focus-within) [part~='combobox'] {
    outline-color: var(--wa-color-focus);
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;

    /* Pass through from select to the popup */
    --show-duration: inherit;
    --hide-duration: inherit;

    &::part(popup) {
      z-index: 900;
    }

    &[data-current-placement^='top']::part(popup) {
      transform-origin: bottom;
    }

    &[data-current-placement^='bottom']::part(popup) {
      transform-origin: top;
    }
  }

  /* Combobox */
  .combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    align-items: center;
    justify-content: start;

    min-height: var(--wa-form-control-height);

    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    color: var(--wa-form-control-value-color);
    cursor: pointer;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    overflow: hidden;
    padding: 0 var(--wa-form-control-padding-inline);
    position: relative;
    vertical-align: middle;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    /* Pills */
    :host([pill]) & {
      border-radius: var(--wa-border-radius-pill);
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .combobox {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  .display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    line-height: var(--wa-form-control-value-line-height);
    color: var(--wa-form-control-value-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
    }
  }

  /* Manage spacing when tags are present */
  :host([multiple]) {
    --_padding-with-tags: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));

    & .combobox:has(.tags wa-tag) {
      padding-block: var(--_padding-with-tags);
      padding-inline-start: var(--_padding-with-tags);
    }
  }

  /* Visually hide the display input when multiple is enabled */
  :host([multiple]) .combobox:has(.tags wa-tag) .display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .value-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    padding: 0;
    margin: 0;
  }

  .tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25em;

    &::slotted(wa-tag) {
      cursor: pointer !important;
    }

    .disabled &,
    .disabled &::slotted(wa-tag) {
      cursor: not-allowed !important;
    }
  }

  /* Start and End */

  .start,
  .end {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  :host([multiple]) .combobox:has(.tags wa-tag) .start::slotted(*) {
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - var(--_padding-with-tags));
  }

  /* Clear button */
  [part~='clear-button'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: color var(--wa-transition-normal);
    cursor: pointer;
    margin-inline-start: var(--wa-form-control-padding-inline);

    &:focus {
      outline: none;
    }

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }
  }

  /* Expand icon */
  .expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
    transition: rotate var(--wa-transition-slow) var(--wa-transition-easing);
    rotate: 0deg;
    margin-inline-start: var(--wa-form-control-padding-inline);

    .open & {
      rotate: -180deg;
    }
  }

  /* Listbox */
  .listbox {
    display: block;
    position: relative;
    font: inherit;
    box-shadow: var(--wa-shadow-m);
    background: var(--wa-color-surface-raised);
    border-color: var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    padding-block: 0.5em;
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);

    &::slotted(wa-divider) {
      --spacing: 0.5em;
    }
  }

  slot:not([name])::slotted(small) {
    display: block;
    font-size: var(--wa-font-size-smaller);
    font-weight: var(--wa-font-weight-semibold);
    color: var(--wa-color-text-quiet);
    padding-block: 0.5em;
    padding-inline: 2.25em;
  }
`,Va=(t={})=>{let{validationElement:e,validationProperty:o}=t;e||"undefined"!=typeof document&&"createElement"in document&&(e=Object.assign(document.createElement("input"),{required:!0})),o||(o="value");const a={observedAttributes:["required"],message:e?.validationMessage,checkValidity(t){const e={message:"",isValid:!0,invalidKeys:[]};return t.required??t.hasAttribute("required")?(!t[o]&&(e.message="function"==typeof a.message?a.message(t):a.message||"",e.isValid=!1,e.invalidKeys.push("valueMissing")),e):e}};return a};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ha(t,e){return new Promise((o=>{t.addEventListener(e,(function a(r){r.target===t&&(t.removeEventListener(e,a),o())}))}))}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ya=class extends Ht{constructor(t){if(super(t),this.it=K,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===K||null==t)return this._t=void 0,this.it=t;if(t===W)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Ya.directiveName="unsafeHTML",Ya.resultType=1;const Xa=Vt(Ya);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Wa=class extends Ct{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.cachedOptions=null,this.hasSlotController=new St(this,"hint","label"),this.localize=new Nt(this),this.selectionOrder=new Map,this.typeToSelectString="",this.slotChangePending=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="m",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=t=>X`
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
          data-value=${t.value}
          @wa-remove=${e=>this.handleTagRemove(e,t)}
        >
          ${t.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,o=null!==e.closest('[part~="clear-button"]'),a=null!==e.closest("wa-button");if(!o&&!a){if("Escape"===t.key&&this.open&&Ne(this)&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===t.key||" "===t.key&&""===this.typeToSelectString)return t.preventDefault(),t.stopImmediatePropagation(),this.open?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then((()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=this.getAllOptions(),o=e.indexOf(this.currentOption);let a=Math.max(0,o);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===t.key?(a=o+1,a>e.length-1&&(a=0)):"ArrowUp"===t.key?(a=o-1,a<0&&(a=e.length-1)):"Home"===t.key?a=0:"End"===t.key&&(a=e.length-1),this.setCurrentOption(e[a])}if(1===t.key?.length||"Backspace"===t.key){const e=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if("Backspace"===t.key)return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout((()=>this.typeToSelectString=""),1e3),"Backspace"===t.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const t of e)if(t.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(t);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}static get validators(){const t=[Va({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...t]}get validationTarget(){return this.valueInput}set defaultValue(t){this._defaultValue=this.convertDefaultValue(t)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}rawValuesEqual(t,e){return null==t&&null==e||null!=t&&null!=e&&t.length===e.length&&t.every(((t,o)=>t===e[o]))}convertDefaultValue(t){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(t)&&(t=t[0]),t}set value(t){let e=this.value;t instanceof FormData&&(t=t.getAll(this.name)),null==t||Array.isArray(t)||(t=[t]);const o=this._value;this._value=t??null,this.rawValuesEqual(o,this._value)||(this.valueHasChanged=!0,this.requestUpdate("value",e))}get value(){let t=this._value??this.defaultValue??null;null!=t&&(t=Array.isArray(t)?t:[t]),this.optionValues=new Set(this.getAllOptions().filter((t=>!t.disabled)).map((t=>t.value)));let e=t;return null!=t&&(e=t.filter((t=>this.optionValues.has(t))),e=this.multiple?e:e[0],e=e??null),e}handleSizeChange(){Lt(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.processSlotChange(),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.cachedOptions=null}updateDefaultValue(){const t=this.getAllOptions().filter((t=>t.hasAttribute("selected")||t.defaultSelected));if(t.length>0){const e=t.map((t=>t.value));this._defaultValue=this.multiple?e:e[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),Re(this),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),Pe(this),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(t){t.preventDefault()}handleComboboxMouseDown(t){const e=t.composedPath().some((t=>t instanceof Element&&"wa-button"===t.tagName.toLowerCase()));this.disabled||e||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.hasInteracted=!0,this.valueHasChanged=!0,null!==this.value&&(this.displayLabel="",this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then((()=>{this.dispatchEvent(new Oa),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const e=t.target.closest("wa-option");e&&!e.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then((()=>this.displayInput.focus({preventScroll:!0}))),this.requestUpdate("value"),this.updateComplete.then((()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){this.slotChangePending||(this.slotChangePending=!0,queueMicrotask((()=>{this.slotChangePending=!1,this.processSlotChange()})))}processSlotChange(){if(customElements.get("wa-option")||customElements.whenDefined("wa-option").then((()=>this.handleDefaultSlotChange())),this.didSSR&&!this.hasUpdated)return void this.updateComplete.then((()=>{this.handleDefaultSlotChange()}));this.cachedOptions=null;const t=this.getAllOptions();this.updateDefaultValue();let e=this.value;if(null==e||!this.valueHasChanged&&!this.hasInteracted)return void this.selectionChanged();Array.isArray(e)||(e=[e]);const o=t.filter((t=>e.includes(t.value)));this.setSelectedOptions(o)}handleTagRemove(t,e){if(t.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let o=e;if(!o){const e=t.target.closest("wa-tag[data-value]");if(e){const t=e.dataset.value;o=this.selectedOptions.find((e=>e.value===t))}}o&&(this.toggleOptionSelection(o,!1),this.updateComplete.then((()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})))}getAllOptions(){return this.cachedOptions?this.cachedOptions:this?.querySelectorAll?(this.cachedOptions=[...this.querySelectorAll("wa-option")],this.cachedOptions):[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(t){this.getAllOptions().forEach((t=>{t.current=!1,t.tabIndex=-1})),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus({preventScroll:!0}))}setSelectedOptions(t){const e=this.getAllOptions(),o=Array.isArray(t)?t:[t];e.forEach((t=>{o.includes(t)||(t.selected=!1)})),o.length&&o.forEach((t=>t.selected=!0)),this.selectionChanged()}toggleOptionSelection(t,e){t.selected=!0===e||!1===e?e:!t.selected,this.selectionChanged()}selectionChanged(){const t=this.getAllOptions().filter((t=>{if(!this.hasInteracted&&!this.valueHasChanged){const e=this.defaultValue,o=Array.isArray(e)?e:[e];return t.hasAttribute("selected")||t.defaultSelected||t.selected||o?.includes(t.value)}return t.selected})),e=new Set(t.map((t=>t.value)));for(const t of this.selectionOrder.keys())e.has(t)||this.selectionOrder.delete(t);let o=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(const e of t)this.selectionOrder.has(e.value)||this.selectionOrder.set(e.value,o++);this.selectedOptions=t.sort(((t,e)=>(this.selectionOrder.get(t.value)??0)-(this.selectionOrder.get(e.value)??0)));let a=new Set(this.selectedOptions.map((t=>t.value)));if(a.size>0||this._value){const t=this._value;if(null==this._value){let t=this.defaultValue??[];this._value=Array.isArray(t)?t:[t]}this._value=this._value?.filter((t=>!this.optionValues?.has(t)))??null,this._value?.unshift(...a),this.requestUpdate("value",t)}if(this.multiple)this.displayLabel=this.placeholder&&!this.value?.length?"":this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const t=this.selectedOptions[0];this.displayLabel=t?.label??""}this.updateComplete.then((()=>{this.updateValidity()}))}get tags(){return this.selectedOptions.map(((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const o=this.getTag(t,e);return o?"string"==typeof o?Xa(o):o:null}return e===this.maxOptionsVisible?X`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            >+${this.selectedOptions.length-e}</wa-tag
          >
        `:null}))}updated(t){super.updated(t),(t.has("value")||t.has("displayLabel"))&&this.customStates.set("blank",!this.value&&!this.displayLabel)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],o=t.filter((t=>e.includes(t.value)));this.setSelectedOptions(o),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());const t=new _e;if(this.dispatchEvent(t),t.defaultPrevented)return void(this.open=!1);this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame((()=>{this.setCurrentOption(this.currentOption)})),await Xe(this.popup.popup,"show"),this.currentOption&&$e(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new je)}else{const t=new Te;if(this.dispatchEvent(t),t.defaultPrevented)return void(this.open=!1);this.removeOpenListeners(),await Xe(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new De)}}async show(){if(!this.open&&!this.disabled)return this.open=!0,Ha(this,"wa-after-show");this.open=!1}async hide(){if(this.open&&!this.disabled)return this.open=!1,Ha(this,"wa-after-hide");this.open=!1}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then((()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}render(){const t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),o=!!this.label||!!t,a=!!this.hint||!!e,r=!!this.hasUpdated&&this.withClear&&!this.disabled&&(this.displayLabel||this.value&&this.value.length>0);return X`
      <div
        part="form-control"
        class=${Yt({"form-control":!0,"form-control-has-label":o})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${Yt({label:!0,"has-label":o})}
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${Yt({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple})}
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
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="hint"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
              />

              <!-- Tags need to wait for first hydration before populating otherwise it will create a hydration mismatch. -->
              ${this.multiple&&this.hasUpdated?X`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:""}

              <input
                class="value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
              />

              ${r?X`
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
                  `:""}

              <slot name="end" part="end" class="end"></slot>

              <slot name="expand-icon" part="expand-icon" class="expand-icon">
                <wa-icon library="system" name="chevron-down" variant="solid"></wa-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
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
          class=${Yt({"has-slotted":a})}
          aria-hidden=${a?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};Wa.css=[Na,_a,At],i([gt(".select")],Wa.prototype,"popup",2),i([gt(".combobox")],Wa.prototype,"combobox",2),i([gt(".display-input")],Wa.prototype,"displayInput",2),i([gt(".value-input")],Wa.prototype,"valueInput",2),i([gt(".listbox")],Wa.prototype,"listbox",2),i([bt()],Wa.prototype,"displayLabel",2),i([bt()],Wa.prototype,"currentOption",2),i([bt()],Wa.prototype,"selectedOptions",2),i([mt({reflect:!0})],Wa.prototype,"name",2),i([mt({attribute:!1})],Wa.prototype,"defaultValue",1),i([mt({attribute:"value",reflect:!1})],Wa.prototype,"value",1),i([mt({reflect:!0})],Wa.prototype,"size",2),i([Bt("size")],Wa.prototype,"handleSizeChange",1),i([mt()],Wa.prototype,"placeholder",2),i([mt({type:Boolean,reflect:!0})],Wa.prototype,"multiple",2),i([mt({attribute:"max-options-visible",type:Number})],Wa.prototype,"maxOptionsVisible",2),i([mt({type:Boolean})],Wa.prototype,"disabled",2),i([mt({attribute:"with-clear",type:Boolean})],Wa.prototype,"withClear",2),i([mt({type:Boolean,reflect:!0})],Wa.prototype,"open",2),i([mt({reflect:!0})],Wa.prototype,"appearance",2),i([mt({type:Boolean,reflect:!0})],Wa.prototype,"pill",2),i([mt()],Wa.prototype,"label",2),i([mt({reflect:!0})],Wa.prototype,"placement",2),i([mt({attribute:"hint"})],Wa.prototype,"hint",2),i([mt({attribute:"with-label",type:Boolean})],Wa.prototype,"withLabel",2),i([mt({attribute:"with-hint",type:Boolean})],Wa.prototype,"withHint",2),i([mt({type:Boolean,reflect:!0})],Wa.prototype,"required",2),i([mt({attribute:!1})],Wa.prototype,"getTag",2),i([Bt("disabled",{waitUntilFirstUpdate:!0})],Wa.prototype,"handleDisabledChange",1),i([Bt("value",{waitUntilFirstUpdate:!0})],Wa.prototype,"handleValueChange",1),i([Bt("open",{waitUntilFirstUpdate:!0})],Wa.prototype,"handleOpenChange",1),Wa=i([wt("wa-select")],Wa),Wa.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ka=u`
  :host {
    display: block;
    color: var(--wa-color-text-normal);
    -webkit-user-select: none;
    user-select: none;

    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    padding: 0.5em 1em 0.5em 0.25em;
    line-height: var(--wa-line-height-condensed);
    transition: fill var(--wa-transition-normal) var(--wa-transition-easing);
    cursor: pointer;
  }

  :host(:focus) {
    outline: none;
  }

  @media (hover: hover) {
    :host(:not(:state(disabled), :state(current)):is(:state(hover), :hover)) {
      background-color: var(--wa-color-neutral-fill-normal);
      color: var(--wa-color-neutral-on-normal);
    }
  }

  :host(:state(current)),
  :host(:state(disabled):state(current)) {
    background-color: var(--wa-color-brand-fill-loud);
    color: var(--wa-color-brand-on-loud);
    opacity: 1;
  }

  :host(:state(disabled)) {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wa-font-size-smaller);
    visibility: hidden;
    width: 2em;
  }

  :host(:state(selected)) .check {
    visibility: visible;
  }

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .start::slotted(*) {
    margin-inline-end: 0.5em;
  }

  .end::slotted(*) {
    margin-inline-start: 0.5em;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function Qa(t,e=0){if(!t||!globalThis.Node)return"";if("function"==typeof t[Symbol.iterator])return(Array.isArray(t)?t:[...t]).map((t=>Qa(t,--e))).join("");let o=t;if(o.nodeType===Node.TEXT_NODE)return o.textContent??"";if(o.nodeType===Node.ELEMENT_NODE){let t=o;if(t.hasAttribute("slot")||t.matches("style, script"))return"";if(t instanceof HTMLSlotElement){let o=t.assignedNodes({flatten:!0});if(o.length>0)return Qa(o,--e)}return e>-1?Qa(t,--e):t.textContent??""}return o.hasChildNodes()?Qa(o.childNodes,--e):""}var Za=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.cachedDefaultLabel="",this.isInitialized=!1,this.isDefaultLabelDirty=!0,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.handleHover=t=>{"mouseenter"===t.type?this.customStates.set("hover",!0):"mouseleave"===t.type&&this.customStates.set("hover",!1)}}set label(t){const e=this._label;this._label=t||"",this._label!==e&&this.requestUpdate("label",e)}get label(){return this._label?this._label:this.defaultLabel}get defaultLabel(){return!this.isDefaultLabelDirty&&this.cachedDefaultLabel||this.updateDefaultLabel(),this.cachedDefaultLabel}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){this.isDefaultLabelDirty=!0,this.isInitialized?(customElements.whenDefined("wa-select").then((()=>{const t=this.closest("wa-select");t&&t.handleDefaultSlotChange()})),customElements.whenDefined("wa-combobox").then((()=>{const t=this.closest("wa-combobox");t&&t.handleDefaultSlotChange()}))):this.isInitialized=!0}willUpdate(t){t.has("defaultSelected")&&(this.didSSR&&this.hasUpdated||!this.didSSR)&&this.syncDefaultSelected(),super.willUpdate(t)}syncDefaultSelected(){if("closest"in this&&!this.closest("wa-combobox, wa-select")?.hasInteracted&&this.defaultSelected){const t=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",t)}}updated(t){t.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected)),t.has("value")&&("string"!=typeof this.value&&(this.value=this.value+""),this.handleDefaultSlotChange()),t.has("current")&&this.customStates.set("current",this.current),super.updated(t)}async firstUpdated(t){if(super.firstUpdated(t),this.didSSR&&!this.hasUpdated?(await this.updateComplete,this.syncDefaultSelected()):this.syncDefaultSelected(),this.selected&&!this.defaultSelected){const t=this.closest("wa-select, wa-combobox");t&&!t.hasInteracted&&(await customElements.whenDefined(t?.localName),await t.updateComplete,t.selectionChanged?.())}}updateDefaultLabel(){let t=this.cachedDefaultLabel;this.cachedDefaultLabel=Qa(this).trim(),this.isDefaultLabelDirty=!1;let e=this.cachedDefaultLabel!==t;return!this._label&&e&&this.requestUpdate("label",t),e}render(){let t=this.selected;return this.didSSR&&!this.hasUpdated?(this.updateComplete.then((()=>{this.requestUpdate()})),K):X`
      ${t?X`<wa-icon
            part="checked-icon"
            class="check"
            name="check"
            library="system"
            variant="solid"
            aria-hidden="true"
          ></wa-icon>`:X`<span part="checked-icon" class="check" aria-hidden="true"></span>`}
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};Za.css=Ka,i([gt(".label")],Za.prototype,"defaultSlot",2),i([bt()],Za.prototype,"current",2),i([mt({reflect:!0})],Za.prototype,"value",2),i([mt({type:Boolean})],Za.prototype,"disabled",2),i([mt({type:Boolean,attribute:!1})],Za.prototype,"selected",2),i([mt({type:Boolean,attribute:"selected"})],Za.prototype,"defaultSelected",2),i([mt()],Za.prototype,"label",1),Za=i([wt("wa-option")],Za);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ga=u`
  :host {
    --height: var(--wa-form-control-toggle-size);
    --width: calc(var(--height) * 1.75);
    --thumb-size: 0.75em;

    display: inline-flex;
    line-height: var(--wa-form-control-value-line-height);
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    color: var(--wa-form-control-value-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch {
    flex: 0 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--height);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    transition-property: translate, background, border-color, box-shadow;
    transition-duration: var(--wa-transition-normal);
    transition-timing-function: var(--wa-transition-easing);
  }

  :host([did-ssr]:not(:defined)) .switch {
    transition-property: unset;
    transition-duration: unset;
    transition-timing-function: unset;
  }

  .switch .thumb {
    aspect-ratio: 1 / 1;
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--wa-form-control-border-color);
    border-radius: 50%;
    translate: calc((var(--width) - var(--height)) / -2);
    transition: inherit;
  }
  .switch .thumb:dir(rtl) {
    translate: calc((var(--width) - var(--height)) / 2);
  }

  .input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Focus */
  label:not(.disabled) .input:focus-visible ~ .switch .thumb {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Checked */
  .checked .switch {
    background-color: var(--wa-form-control-activated-color);
    border-color: var(--wa-form-control-activated-color);
  }

  .checked .switch .thumb {
    background-color: var(--wa-color-surface-default);
    translate: calc((var(--width) - var(--height)) / 2);
  }
  .checked .switch .thumb:dir(rtl) {
    translate: calc((var(--width) - var(--height)) / -2);
  }

  /* Disabled */
  label:has(> :disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  [part~='label'] {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) [part~='label']::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  @media (forced-colors: active) {
    :checked:enabled + .switch:hover .thumb,
    :checked + .switch .thumb {
      background-color: ButtonText;
    }
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Ja=class extends Ct{constructor(){super(...arguments),this.hasSlotController=new St(this,"hint"),this.localize=new Nt(this),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="m",this.disabled=!1,this._checked=null,this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint="",this.withHint=!1}static get validators(){return[...super.validators,t()]}get value(){return this._value??"on"}set value(t){this._value=t}handleSizeChange(){Lt(this.localName,this.size)}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(t){this._checked=!!t,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then((()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleKeyDown(t){const e="rtl"===this.localize.dir();"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=e,this.updateComplete.then((()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!e,this.updateComplete.then((()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})))}willUpdate(t){super.willUpdate(t),(t.has("value")||t.has("checked")||t.has("defaultChecked"))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){!this.didSSR||this.hasUpdated?(this.setValue(this.checked?this.value:null,this._value),this.updateValidity()):this.updateComplete.then((()=>{this.handleValueOrCheckedChange()}))}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set("checked",this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}setValue(t,e){this.checked?this.internals.setFormValue(t??"on",e):this.internals.setFormValue(null,null)}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){const t=this.hasSlotController.test("hint","withHint"),e=!!this.hint||!!t;return X`
      <label
        part="base"
        class=${Yt({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${Xt(this.name)}
          value=${Xt(this.value)}
          .checked=${Ta(this.checked)}
          ?checked=${this.defaultChecked}
          ?disabled=${this.disabled}
          ?required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
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
        class=${Yt({"has-slotted":e})}
        aria-hidden=${e?"false":"true"}
        >${this.hint}</slot
      >
    `}};Ja.shadowRootOptions={...Ct.shadowRootOptions,delegatesFocus:!0},Ja.css=[_a,At,Ga],i([gt('input[type="checkbox"]')],Ja.prototype,"input",2),i([mt()],Ja.prototype,"title",2),i([mt({reflect:!0})],Ja.prototype,"name",2),i([mt({reflect:!0})],Ja.prototype,"value",1),i([mt({reflect:!0})],Ja.prototype,"size",2),i([Bt("size")],Ja.prototype,"handleSizeChange",1),i([mt({type:Boolean})],Ja.prototype,"disabled",2),i([mt({type:Boolean,attribute:!1})],Ja.prototype,"checked",1),i([mt({type:Boolean,attribute:"checked",reflect:!0})],Ja.prototype,"defaultChecked",2),i([mt({type:Boolean,reflect:!0})],Ja.prototype,"required",2),i([mt({attribute:"hint"})],Ja.prototype,"hint",2),i([mt({attribute:"with-hint",type:Boolean})],Ja.prototype,"withHint",2),i([Bt(["checked","defaultChecked"])],Ja.prototype,"handleStateChange",1),i([Bt("disabled",{waitUntilFirstUpdate:!0})],Ja.prototype,"handleDisabledChange",1),Ja=i([wt("wa-switch")],Ja),Ja.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var tr=u`
  :host {
    --spacing: var(--wa-space-m);
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: block;
  }

  details {
    display: block;
    overflow-anchor: none;
    border: var(--wa-panel-border-width) var(--wa-color-surface-border) var(--wa-panel-border-style);
    background-color: var(--wa-color-surface-default);
    border-radius: var(--wa-panel-border-radius);
    color: var(--wa-color-text-normal);

    /* Print styles */
    @media print {
      background: none;
      border: solid var(--wa-border-width-s) var(--wa-color-surface-border);

      summary {
        list-style: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) details {
    background-color: transparent;
    border-color: transparent;
    border-radius: 0;
  }

  :host([appearance='outlined']) details {
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='filled']) details {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) details {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-border-quiet);
  }

  :host([disabled]) details {
    opacity: 0.5;
    cursor: not-allowed;
  }

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing);
    padding: var(--spacing); /* Add padding here */
    border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: calc(var(--wa-panel-border-width) + var(--wa-focus-ring-offset));
    }
  }

  :host([open]) summary {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  /* 'Start' icon placement */
  :host([icon-placement='start']) summary {
    flex-direction: row-reverse;
    justify-content: start;
  }

  [part~='icon'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-text-quiet);
    transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);
  }

  :host([open]) [part~='icon'] {
    rotate: 90deg;
  }

  :host([open]:dir(rtl)) [part~='icon'] {
    rotate: -90deg;
  }

  :host([open]) slot[name='expand-icon'],
  :host(:not([open])) slot[name='collapse-icon'] {
    display: none;
  }

  .body.animating {
    overflow: hidden;
  }

  .content {
    display: block;
    box-sizing: border-box; /* Ensure contents don't overflow */
    padding-block-start: var(--spacing);
    padding-inline: var(--spacing); /* Add horizontal padding */
    padding-block-end: var(--spacing); /* Add bottom padding */
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,er=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.animationGeneration=0,this.isAnimating=!1,this.open=!1,this.disabled=!1,this.appearance="outlined",this.iconPlacement="end"}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver((t=>{for(const e of t)"attributes"===e.type&&"open"===e.attributeName&&(this.details.open?this.show():this.hide())})),this.detailsObserver.observe(this.details,{attributes:!0})}updated(t){t.has("isAnimating")&&this.customStates.set("animating",this.isAnimating)}handleSummaryClick(t){t.composedPath().some((t=>{if(!(t instanceof HTMLElement))return!1;const e=t.tagName?.toLowerCase();return!!["a","button","input","textarea","select"].includes(e)||t instanceof Ct&&(!("disabled"in t)||!t.disabled)}))||(t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus()))}handleSummaryKeyDown(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.open?this.hide():this.show()),"ArrowUp"!==t.key&&"ArrowLeft"!==t.key||(t.preventDefault(),this.hide()),"ArrowDown"!==t.key&&"ArrowRight"!==t.key||(t.preventDefault(),this.show())}closeOthersWithSameName(){this.name&&this.getRootNode().querySelectorAll(`wa-details[name="${this.name}"]`).forEach((t=>{t!==this&&t.open&&(t.open=!1)}))}async handleOpenChange(){this.animationGeneration++;const t=this.animationGeneration;if(this.open){this.details.open=!0;const e=new _e;if(this.dispatchEvent(e),e.defaultPrevented)return this.open=!1,void(this.details.open=!1);this.closeOthersWithSameName(),this.isAnimating=!0;const o=We(getComputedStyle(this.body).getPropertyValue("--show-duration"));if(await Ye(this.body,[{height:"0",opacity:"0"},{height:this.body.scrollHeight+"px",opacity:"1"}],{duration:o,easing:"linear"}),this.animationGeneration!==t)return;this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new je)}else{const e=new Te;if(this.dispatchEvent(e),e.defaultPrevented)return this.details.open=!0,void(this.open=!0);this.isAnimating=!0;const o=We(getComputedStyle(this.body).getPropertyValue("--hide-duration"));if(await Ye(this.body,[{height:this.body.scrollHeight+"px",opacity:"1"},{height:"0",opacity:"0"}],{duration:o,easing:"linear"}),this.animationGeneration!==t)return;this.body.style.height="0",this.isAnimating=!1,this.details.open=!1,this.dispatchEvent(new De)}}async show(){if(!this.open&&!this.disabled)return this.open=!0,Ha(this,"wa-after-show")}async hide(){if(this.open&&!this.disabled)return this.open=!1,Ha(this,"wa-after-hide")}render(){const t=this.hasUpdated?"rtl"===this.localize.dir():"rtl"===this.dir;return X`
      <details part="base">
        <summary
          part="header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary">${this.summary}</slot>

          <span part="icon">
            <slot name="expand-icon">
              <wa-icon library="system" variant="solid" name=${t?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
            <slot name="collapse-icon">
              <wa-icon library="system" variant="solid" name=${t?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
          </span>
        </summary>

        <div
          class=${Yt({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="header"
        >
          <slot part="content" id="content" class="content"></slot>
        </div>
      </details>
    `}};er.css=tr,i([gt("details")],er.prototype,"details",2),i([gt("summary")],er.prototype,"header",2),i([gt(".body")],er.prototype,"body",2),i([gt(".expand-icon-slot")],er.prototype,"expandIconSlot",2),i([bt()],er.prototype,"isAnimating",2),i([mt({type:Boolean,reflect:!0})],er.prototype,"open",2),i([mt()],er.prototype,"summary",2),i([mt({reflect:!0})],er.prototype,"name",2),i([mt({type:Boolean,reflect:!0})],er.prototype,"disabled",2),i([mt({reflect:!0})],er.prototype,"appearance",2),i([mt({attribute:"icon-placement",reflect:!0})],er.prototype,"iconPlacement",2),i([Bt("open",{waitUntilFirstUpdate:!0})],er.prototype,"handleOpenChange",1),er=i([wt("wa-details")],er);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var or=u`
  :host {
    --max-width: 30ch;

    /** These styles are added so we don't interfere in the DOM. */
    display: inline-block;
    position: absolute;

    /** Defaults for inherited CSS properties */
    color: var(--wa-tooltip-content-color);
    font-size: var(--wa-tooltip-font-size);
    line-height: var(--wa-tooltip-line-height);
    text-align: start;
    white-space: normal;
  }

  .tooltip {
    --arrow-size: var(--wa-tooltip-arrow-size);
    --arrow-color: var(--wa-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: 1000;
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--wa-tooltip-border-radius);
    background-color: var(--wa-tooltip-background-color);
    border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    padding: 0.25em 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  .tooltip {
    --popup-border-width: var(--wa-tooltip-border-width);

    &::part(arrow) {
      border-bottom: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
      border-right: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    }
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,ar=class extends kt{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.open&&Ne(this)&&(t.preventDefault(),t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),this.showDelay))},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=!!this.anchor?.matches(":hover"),e=this.matches(":hover");if(t||e)return;clearTimeout(this.hoverTimeout),t||e||(this.hoverTimeout=window.setTimeout((()=>{this.hide()}),this.hideDelay))}}}connectedCallback(){super.connectedCallback(),"undefined"!=typeof document&&(this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener("mouseout",this.handleMouseOut),this.open&&(this.open=!1,this.updateComplete.then((()=>{this.open=!0}))),this.id||(this.id=He("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),Pe(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}addToAriaLabelledBy(t,e){const o=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);o.includes(e)||(o.push(e),t.setAttribute("aria-labelledby",o.join(" ")))}removeFromAriaLabelledBy(t,e){const o=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter((t=>t!==e));o.length>0?t.setAttribute("aria-labelledby",o.join(" ")):t.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;const t=new _e;if(this.dispatchEvent(t),t.defaultPrevented)return void(this.open=!1);document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),Re(this),this.body.hidden=!1,this.popup.active=!0,await Xe(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new je)}else{const t=new Te;if(this.dispatchEvent(t),t.defaultPrevented)return void(this.open=!1);document.removeEventListener("keydown",this.handleDocumentKeyDown),Pe(this),await Xe(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new De)}}handleForChange(){const t=this.getRootNode?.();if(!t)return;const e=this.for?t.getElementById?.(this.for):null,o=this.anchor;if(e===o)return;const{signal:a}=this.eventController;e&&(this.addToAriaLabelledBy(e,this.id),e.addEventListener("blur",this.handleBlur,{capture:!0,signal:a}),e.addEventListener("focus",this.handleFocus,{capture:!0,signal:a}),e.addEventListener("click",this.handleClick,{signal:a}),e.addEventListener("mouseover",this.handleMouseOver,{signal:a}),e.addEventListener("mouseout",this.handleMouseOut,{signal:a})),o&&(this.removeFromAriaLabelledBy(o,this.id),o.removeEventListener("blur",this.handleBlur,{capture:!0}),o.removeEventListener("focus",this.handleFocus,{capture:!0}),o.removeEventListener("click",this.handleClick),o.removeEventListener("mouseover",this.handleMouseOver),o.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=e}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Ha(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Ha(this,"wa-after-hide")}render(){return X`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Yt({tooltip:!0,"tooltip-open":this.open})}
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
    `}};ar.css=or,ar.dependencies={"wa-popup":Fa},i([gt("slot:not([name])")],ar.prototype,"defaultSlot",2),i([gt(".body")],ar.prototype,"body",2),i([gt("wa-popup")],ar.prototype,"popup",2),i([mt()],ar.prototype,"placement",2),i([mt({type:Boolean,reflect:!0})],ar.prototype,"disabled",2),i([mt({type:Number})],ar.prototype,"distance",2),i([mt({type:Boolean,reflect:!0})],ar.prototype,"open",2),i([mt({type:Number})],ar.prototype,"skidding",2),i([mt({attribute:"show-delay",type:Number})],ar.prototype,"showDelay",2),i([mt({attribute:"hide-delay",type:Number})],ar.prototype,"hideDelay",2),i([mt()],ar.prototype,"trigger",2),i([mt({attribute:"without-arrow",type:Boolean,reflect:!0})],ar.prototype,"withoutArrow",2),i([mt()],ar.prototype,"for",2),i([bt()],ar.prototype,"anchor",2),i([Bt("open",{waitUntilFirstUpdate:!0})],ar.prototype,"handleOpenChange",1),i([Bt("for")],ar.prototype,"handleForChange",1),i([Bt(["distance","placement","skidding"])],ar.prototype,"handleOptionsChange",1),i([Bt("disabled")],ar.prototype,"handleDisabledChange",1),ar=i([wt("wa-tooltip")],ar);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var rr=u`
  :host {
    --checked-icon-color: var(--wa-color-brand-on-loud);
    --checked-icon-scale: 0.8;

    display: inline-flex;
    color: var(--wa-form-control-value-color);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    user-select: none;
    -webkit-user-select: none;
  }

  [part~='control'] {
    display: inline-flex;
    flex: 0 0 auto;
    position: relative;
    align-items: center;
    justify-content: center;
    width: var(--wa-form-control-toggle-size);
    height: var(--wa-form-control-toggle-size);
    border-color: var(--wa-form-control-border-color);
    border-radius: min(
      calc(var(--wa-form-control-toggle-size) * 0.375),
      var(--wa-border-radius-s)
    ); /* min prevents entirely circular checkbox */
    border-style: var(--wa-border-style);
    border-width: var(--wa-form-control-border-width);
    background-color: var(--wa-form-control-background-color);
    transition:
      background var(--wa-transition-normal),
      border-color var(--wa-transition-fast),
      box-shadow var(--wa-transition-fast),
      color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    margin-inline-end: 0.5em;
  }

  [part~='base'] {
    display: flex;
    align-items: flex-start;
    position: relative;
    color: currentColor;
    vertical-align: middle;
    cursor: pointer;
  }

  [part~='label'] {
    display: inline;
  }

  /* Checked */
  [part~='control']:has(:checked, :indeterminate) {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-activated-color);
  }

  /* Focus */
  [part~='control']:has(> input:focus-visible:not(:disabled)) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host [part~='base']:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  input {
    position: absolute;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    pointer-events: none;
  }

  [part~='icon'] {
    display: flex;
    scale: var(--checked-icon-scale);

    /* Without this, Safari renders the icon slightly to the left */
    &::part(svg) {
      translate: 0.0009765625em;
    }

    input:not(:checked, :indeterminate) + & {
      visibility: hidden;
    }
  }

  :host([required]) [part~='label']::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,ir=class extends Ct{constructor(){super(...arguments),this.hasSlotController=new St(this,"hint"),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="m",this.disabled=!1,this.indeterminate=!1,this._checked=null,this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint=""}static get validators(){const t=[Va({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...t]}get value(){return this._value??"on"}set value(t){this._value=t}handleSizeChange(){Lt(this.localName,this.size)}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(t){this._checked=!!t,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then((()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}connectedCallback(){super.connectedCallback(),!this.didSSR||this.hasUpdated?this.handleDefaultCheckedChange():this.updateComplete.then((()=>{this.handleDefaultCheckedChange()}))}handleDefaultCheckedChange(){this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){!this.didSSR||this.hasUpdated?(this.setValue(this.checked?this.value:null,this._value),this.updateValidity()):this.updateComplete.then((()=>{this.handleValueOrCheckedChange()}))}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(t){super.willUpdate(t),(t.has("value")||t.has("checked")||t.has("defaultChecked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){const t=this.hasSlotController.test("hint"),e=!!this.hint||!!t,o=!this.checked&&this.indeterminate,a=o?"indeterminate":"check",r=o?"indeterminate":"check";return X`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${Xt(this.name)}
            value=${Xt(this.value)}
            .indeterminate=${Ta(this.indeterminate)}
            ?checked=${this.defaultChecked}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-checked=${this.indeterminate?"mixed":this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${r}-icon icon" library="system" name=${a}></wa-icon>
        </span>

        <slot part="label"></slot>
      </label>

      <slot
        id="hint"
        part="hint"
        name="hint"
        aria-hidden=${e?"false":"true"}
        class="${Yt({"has-slotted":e})}"
      >
        ${this.hint}
      </slot>
    `}};ir.css=[_a,At,rr],ir.shadowRootOptions={...Ct.shadowRootOptions,delegatesFocus:!0},i([gt('input[type="checkbox"]')],ir.prototype,"input",2),i([mt()],ir.prototype,"title",2),i([mt({reflect:!0})],ir.prototype,"name",2),i([mt({reflect:!0})],ir.prototype,"value",1),i([mt({reflect:!0})],ir.prototype,"size",2),i([Bt("size")],ir.prototype,"handleSizeChange",1),i([mt({type:Boolean})],ir.prototype,"disabled",2),i([mt({type:Boolean,reflect:!0})],ir.prototype,"indeterminate",2),i([mt({type:Boolean,attribute:!1})],ir.prototype,"checked",1),i([mt({type:Boolean,reflect:!0,attribute:"checked"})],ir.prototype,"defaultChecked",2),i([mt({type:Boolean,reflect:!0})],ir.prototype,"required",2),i([mt()],ir.prototype,"hint",2),i([Bt(["checked","defaultChecked"])],ir.prototype,"handleDefaultCheckedChange",1),i([Bt(["checked","indeterminate"])],ir.prototype,"handleStateChange",1),i([Bt("disabled")],ir.prototype,"handleDisabledChange",1),ir=i([wt("wa-checkbox")],ir),ir.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var nr=u`
  :host {
    --size: 25rem;
    --spacing: var(--wa-space-l);
    --backdrop-filter: none;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .drawer {
    display: flex;
    flex-direction: column;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    color: inherit;
    background-color: var(--wa-color-surface-raised);
    border: none;
    box-shadow: var(--wa-shadow-l);
    overflow: auto;
    padding: 0;
    margin: 0;
    animation-duration: var(--show-duration);
    animation-timing-function: ease;

    &.show::backdrop {
      animation: show-backdrop var(--show-duration, 200ms) ease;
    }

    &.hide::backdrop {
      animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
    }

    &.show.top {
      animation: show-drawer-from-top var(--show-duration) ease;
    }

    &.hide.top {
      animation: show-drawer-from-top var(--hide-duration) ease reverse;
    }

    &.show.end {
      animation: show-drawer-from-end var(--show-duration) ease;

      &:dir(rtl) {
        animation-name: show-drawer-from-start;
      }
    }

    &.hide.end {
      animation: show-drawer-from-end var(--hide-duration) ease reverse;

      &:dir(rtl) {
        animation-name: show-drawer-from-start;
      }
    }

    &.show.bottom {
      animation: show-drawer-from-bottom var(--show-duration) ease;
    }

    &.hide.bottom {
      animation: show-drawer-from-bottom var(--hide-duration) ease reverse;
    }

    &.show.start {
      animation: show-drawer-from-start var(--show-duration) ease;

      &:dir(rtl) {
        animation-name: show-drawer-from-end;
      }
    }

    &.hide.start {
      animation: show-drawer-from-start var(--hide-duration) ease reverse;

      &:dir(rtl) {
        animation-name: show-drawer-from-end;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .drawer:focus {
    outline: none;
  }

  .top {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .end {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .bottom {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .start {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .header {
    display: flex;
    flex-wrap: nowrap;
    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:last-of-type)) {
    margin-inline-end: var(--wa-spacing-xs);
  }

  .drawer::backdrop {
    /*
        NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
        remove the fallback values here.
      */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
    backdrop-filter: var(--backdrop-filter);
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.01;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-drawer {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-drawer-from-top {
    from {
      opacity: 0;
      translate: 0 -100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-end {
    from {
      opacity: 0;
      translate: 100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-bottom {
    from {
      opacity: 0;
      translate: 0 100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-start {
    from {
      opacity: 0;
      translate: -100% 0;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .drawer {
      border: solid 1px white;
    }
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function sr(t){return t.split(" ").map((t=>t.trim())).filter((t=>""!==t))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var lr=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.hasSlotController=new St(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!1,this.withFooter=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.open&&Ne(this)&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.drawer.showModal(),Ce(this))}disconnectedCallback(){super.disconnectedCallback(),ze(this),this.removeOpenListeners()}async requestClose(t){const e=new Te({source:t});if(this.dispatchEvent(e),e.defaultPrevented)return this.open=!0,void Xe(this.drawer,"pulse");this.removeOpenListeners(),await Xe(this.drawer,"hide"),this.open=!1,this.drawer.close(),ze(this);const o=this.originalTrigger;"function"==typeof o?.focus&&setTimeout((()=>o.focus())),this.dispatchEvent(new De)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),Re(this)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),Pe(this)}handleDialogCancel(t){t.preventDefault(),!this.drawer.classList.contains("hide")&&t.target===this.drawer&&Ne(this)&&this.requestClose(this.drawer)}handleDialogClick(t){const e=t.target.closest('[data-drawer="close"]');e&&(t.stopPropagation(),this.requestClose(e))}async handleDialogPointerDown(t){t.target===this.drawer&&(this.lightDismiss?this.requestClose(this.drawer):await Xe(this.drawer,"pulse"))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open&&(this.open=!0,this.requestClose(this.drawer))}async show(){const t=new _e;this.dispatchEvent(t),t.defaultPrevented?this.open=!1:(this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),Ce(this),requestAnimationFrame((()=>{const t=this.querySelector("[autofocus]");t&&"function"==typeof t.focus?t.focus():this.drawer.focus()})),await Xe(this.drawer,"show"),this.dispatchEvent(new je))}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer","withFooter");return X`
      <dialog
        part="dialog"
        class=${Yt({drawer:!0,open:this.open,top:"top"===this.placement,end:"end"===this.placement,bottom:"bottom"===this.placement,start:"start"===this.placement})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${t?X`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"​"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${t=>this.requestClose(t.target)}"
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
            `:""}

        <div part="body" class="body"><slot></slot></div>

        <footer part="footer" class="footer" ?hidden=${!e}>
          <slot name="footer"></slot>
        </footer>
      </dialog>
    `}};lr.css=nr,i([gt(".drawer")],lr.prototype,"drawer",2),i([mt({type:Boolean,reflect:!0})],lr.prototype,"open",2),i([mt({reflect:!0})],lr.prototype,"label",2),i([mt({reflect:!0})],lr.prototype,"placement",2),i([mt({attribute:"without-header",type:Boolean,reflect:!0})],lr.prototype,"withoutHeader",2),i([mt({attribute:"light-dismiss",type:Boolean})],lr.prototype,"lightDismiss",2),i([mt({attribute:"with-footer",type:Boolean})],lr.prototype,"withFooter",2),i([Bt("open",{waitUntilFirstUpdate:!0})],lr.prototype,"handleOpenChange",1),lr=i([wt("wa-drawer")],lr),document.addEventListener("click",(t=>{const e=t.target.closest("[data-drawer]");if(e instanceof Element){const[t,o]=sr(e.getAttribute("data-drawer")||"");if("open"===t&&o?.length){const t=e.getRootNode().getElementById(o);"wa-drawer"===t?.localName?t.open=!0:console.warn(`A drawer with an ID of "${o}" could not be found in this document.`)}}})),document.addEventListener("pointerdown",(()=>{}));
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var cr=u`
  :host {
    --size: 3rem;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    color: var(--wa-color-neutral-on-normal);
    font: inherit;
    font-size: calc(var(--size) * 0.4);
    vertical-align: middle;
    background-color: var(--wa-color-neutral-fill-normal);
    border-radius: var(--wa-border-radius-circle);
    user-select: none;
    -webkit-user-select: none;
  }

  :host([shape='square']) {
    border-radius: 0;
  }

  :host([shape='rounded']) {
    border-radius: var(--wa-border-radius-m);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: inherit;
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,hr=class extends kt{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.dispatchEvent(new oe)}connectedCallback(){if(super.connectedCallback(),this.didSSR){const t=this.shadowRoot?.querySelector?.("img");t&&t.complete&&t.naturalWidth<=0&&this.updateComplete.then((()=>{this.handleImageLoadError()}))}}render(){const t=X`
      <img
        part="image"
        class="image"
        src="${this.image}"
        loading="${this.loading}"
        role="img"
        aria-label=${this.label}
        @error="${this.handleImageLoadError}"
      />
    `;let e=X``;return e=this.initials?X`<div part="initials" class="initials" role="img" aria-label=${this.label}>
        ${this.initials}
      </div>`:X`
        <slot name="icon" part="icon" class="icon" role="img" aria-label=${this.label}>
          <wa-icon name="user" library="system" variant="solid"></wa-icon>
        </slot>
      `,X` ${this.image&&!this.hasError?t:e} `}};hr.css=cr,i([bt()],hr.prototype,"hasError",2),i([mt()],hr.prototype,"image",2),i([mt()],hr.prototype,"label",2),i([mt()],hr.prototype,"initials",2),i([mt()],hr.prototype,"loading",2),i([mt({reflect:!0})],hr.prototype,"shape",2),i([Bt("image")],hr.prototype,"handleImageChange",1),hr=i([wt("wa-avatar")],hr);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var dr=u`
  :host {
    display: inline-flex;
  }

  .button-group {
    display: flex;
    position: relative;
    isolation: isolate;
    flex-wrap: wrap;

    @media (hover: hover) {
      > :hover,
      &::slotted(:hover) {
        z-index: 1;
      }
    }

    /* Focus and checked are always on top */
    > :focus,
    &::slotted(:focus),
    > [aria-checked='true'],
    &::slotted([aria-checked='true']),
    > [checked],
    &::slotted([checked]) {
      z-index: 2 !important;
    }

    :host([orientation='horizontal']) & {
      flex-direction: row;
    }

    :host([orientation='vertical']) & {
      flex-direction: column;
    }
  }

  /* Set custom properties to be inherited by slotted buttons */
  :host([orientation='horizontal']) {
    --_button-horizontal-indent: var(--wa-form-control-border-width);
    --_button-horizontal-indent-outlined: calc(var(--wa-form-control-border-width) * -1);
  }

  :host([orientation='vertical']) {
    --_button-vertical-indent: var(--wa-form-control-border-width);
    --_button-vertical-indent-outlined: calc(var(--wa-form-control-border-width) * -1);
  }

  /* All buttons that are not in front or at the end get their border radius removed */
  ::slotted(:not(:first-child):not(:last-child)) {
    --_button-start-start-radius: 0;
    --_button-start-end-radius: 0;
    --_button-end-start-radius: 0;
    --_button-end-end-radius: 0;
  }

  /* Remove leading and trailing buttons border radius individually */
  :host([orientation='horizontal']) {
    ::slotted(:first-child:not(:last-child)) {
      --_button-start-end-radius: 0;
      --_button-end-end-radius: 0;
    }

    ::slotted(:last-child:not(:first-child)) {
      --_button-start-start-radius: 0;
      --_button-end-start-radius: 0;
    }
  }

  :host([orientation='vertical']) {
    ::slotted(:first-child:not(:last-child)) {
      --_button-end-start-radius: 0;
      --_button-end-end-radius: 0;
    }

    ::slotted(:last-child:not(:first-child)) {
      --_button-start-start-radius: 0;
      --_button-start-end-radius: 0;
    }
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,ur=class extends kt{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal"}updated(t){super.updated(t),t.has("orientation")&&this.setAttribute("aria-orientation",this.orientation)}handleFocus(t){const e=wr(t.target);e?.classList.add("button-focus")}handleBlur(t){const e=wr(t.target);e?.classList.remove("button-focus")}handleMouseOver(t){const e=wr(t.target);e?.classList.add("button-hover")}handleMouseOut(t){const e=wr(t.target);e?.classList.remove("button-hover")}render(){return X`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      ></slot>
    `}};function wr(t){const e="wa-button, wa-radio-button";return t.closest(e)??t.querySelector(e)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */ur.css=[dr],i([gt("slot")],ur.prototype,"defaultSlot",2),i([bt()],ur.prototype,"disableRole",2),i([bt()],ur.prototype,"hasOutlined",2),i([mt()],ur.prototype,"label",2),i([mt({reflect:!0})],ur.prototype,"orientation",2),ur=i([wt("wa-button-group")],ur);var fr=class extends Event{constructor(t){super("wa-selection-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},pr=u`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--wa-color-surface-border);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: 2em;

    display: block;
  }
`,mr=class extends Event{constructor(){super("wa-lazy-change",{bubbles:!0,cancelable:!1,composed:!0})}},br=class extends Event{constructor(){super("wa-lazy-load",{bubbles:!0,cancelable:!1,composed:!0})}},vr=class extends Event{constructor(){super("wa-expand",{bubbles:!0,cancelable:!1,composed:!0})}},gr=class extends Event{constructor(){super("wa-after-collapse",{bubbles:!0,cancelable:!1,composed:!0})}},yr=class extends Event{constructor(){super("wa-after-expand",{bubbles:!0,cancelable:!1,composed:!0})}},xr=class extends Event{constructor(){super("wa-collapse",{bubbles:!0,cancelable:!1,composed:!0})}},kr=u`
  :host {
    /* Private - set by the component to control indentation depth */
    --indent: 0px;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: block;
    color: var(--wa-color-text-normal);
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(wa-icon) {
    margin-inline-end: 0.5em;
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    cursor: default;
    user-select: none;
    -webkit-user-select: none;
  }

  .checkbox {
    line-height: var(--wa-form-control-value-line-height);
    pointer-events: none;
  }

  .expand-button,
  .checkbox,
  .label {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  .checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .indentation {
    display: block;
    width: var(--indent);
    flex-shrink: 0;
  }

  .expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--wa-color-text-quiet);
    width: 2em;
    height: 2em;
    flex-shrink: 0;
    cursor: pointer;
  }

  .expand-button {
    transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .tree-item-expanded .expand-button {
    rotate: 90deg;
  }

  .tree-item-expanded:dir(rtl) .expand-button {
    rotate: -90deg;
  }

  .tree-item-expanded:not(.tree-item-loading) slot[name='expand-icon'],
  .tree-item:not(.tree-item-expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item-has-expand-button):not(.tree-item-loading) .expand-icon-slot {
    display: none;
  }

  .tree-item:not(.tree-item-has-expand-button):not(.tree-item-loading) .expand-button {
    cursor: default;
  }

  .tree-item-loading .expand-icon-slot wa-icon {
    display: none;
  }

  .expand-button-visible {
    cursor: pointer;
  }

  .item {
    display: flex;
    align-items: center;
    border-inline-start: solid 0.1875em transparent;
  }

  :host([disabled]) .item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .item {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item-selected .item {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-inline-start-color: var(--wa-color-brand-fill-loud);
  }

  :host(:not([aria-disabled='true'])) .expand-button {
    color: var(--wa-color-text-quiet);
  }

  .label {
    display: flex;
    align-items: center;
    transition: color var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .children {
    display: block;
  }

  /* Indentation lines */
  .children {
    position: relative;
  }

  .children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    inset-inline-start: calc(0.1875em + var(--indent) + 1em - (var(--indent-guide-width) / 2));
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item-selected .item {
      outline: dashed 1px SelectedItem;
    }
  }
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */let Cr=class extends Event{constructor(t,e,o,a){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e,this.callback=o,this.subscribe=a??!1}},zr=class{constructor(t,e,o,a){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=o,this.subscribe=a??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Cr(this.context,this.host,this.t,this.subscribe))}};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class $r{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const o=e||!Object.is(t,this.o);this.o=t,o&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,o){if(!o)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:a}=this.subscriptions.get(t);t(this.value,a)}clearCallbacks(){this.subscriptions.clear()}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Lr=class extends Event{constructor(t,e){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e}},Sr=class extends $r{constructor(t,e,o){super(void 0!==e.context?e.initialValue:o),this.onContextRequest=t=>{if(t.context!==this.context)return;const e=t.contextTarget??t.composedPath()[0];e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{if(t.context!==this.context)return;if((t.contextTarget??t.composedPath()[0])===this.host)return;const e=new Set;for(const[t,{consumerHost:o}]of this.subscriptions)e.has(t)||(e.add(t),o.dispatchEvent(new Cr(this.context,o,t,!0)));t.stopPropagation()},this.host=t,this.context=void 0!==e.context?e.context:e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Lr(this.context,this.host))}};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Ar(t,e,o){return t?e(t):o?.(t)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Fr="wa-tree-item",Mr=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1,this._treeItemContext={depth:0,expanded:this.expanded},this._parentTreeContext=null,this.animationGeneration=0,this.tabIndex=-1,this.role="treeitem"}static isTreeItem(t){const e=t;return e&&("treeitem"===e.role||"treeitem"===e.getAttribute?.("role"))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabIndex",""+this.tabIndex),this.isNestedItem()&&(this.setAttribute("slot","children"),this._parentTreeContext?.expanded||(this.expanded=!1)),this._parentTreeContext&&(this._treeItemContext={depth:this._parentTreeContext.depth+1,expanded:this.expanded}),this.updateIndentation()}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&0===this.getChildrenItems().length,this.handleExpandedChange()}async animateCollapse(t){this.dispatchEvent(new xr);const e=We(getComputedStyle(this.childrenContainer).getPropertyValue("--hide-duration"));await Ye(this.childrenContainer,[{height:this.childrenContainer.scrollHeight+"px",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],{duration:e,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.animationGeneration===t&&(this.childrenContainer.hidden=!0,this.dispatchEvent(new gr))}isNestedItem(){if(null!==this._parentTreeContext)return!0;const t=this.parentElement;return!!t&&Mr.isTreeItem(t)}updateIndentation(){const t=Math.max(this._treeItemContext?.depth||0,this.getDepth());this.setStyleProperty("--indent",`calc(${t} * var(--indent-size, 2em))`)}getDepth(){let t=0,e=this.parentElement;for(;e;)Mr.isTreeItem(e)&&t++,e=e.parentElement;return t}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&0===this.getChildrenItems().length}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1),super.willUpdate(t)}async animateExpand(t){this.dispatchEvent(new vr),this.childrenContainer.hidden=!1;const e=We(getComputedStyle(this.childrenContainer).getPropertyValue("--show-duration"));await Ye(this.childrenContainer,[{height:"0",opacity:"0",overflow:"hidden"},{height:this.childrenContainer.scrollHeight+"px",opacity:"1",overflow:"hidden"}],{duration:e,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.animationGeneration===t&&(this.childrenContainer.style.height="auto",this.dispatchEvent(new yr))}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand(this.animationGeneration)}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleExpandedState(){this.customStates.set("expanded",this.expanded)}handleIndeterminateStateChange(){this.customStates.set("indeterminate",this.indeterminate)}handleSelectedChange(){this.customStates.set("selected",this.selected),this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.animationGeneration++;const t=this.animationGeneration;this.expanded?this.lazy?(this.loading=!0,this.dispatchEvent(new br)):this.animateExpand(t):this.animateCollapse(t)}handleLazyChange(){this.dispatchEvent(new mr)}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter((e=>Mr.isTreeItem(e)&&(t||!e.disabled))):[]}render(){const t="rtl"===this.localize.dir(),e=!this.loading&&(!this.isLeaf||this.lazy);return X`
      <div
        part="base"
        class="${Yt({"tree-item":!0,"tree-item-expanded":this.expanded,"tree-item-selected":this.selected,"tree-item-leaf":this.isLeaf,"tree-item-loading":this.loading,"tree-item-has-expand-button":e})}"
      >
        <div class="item" part="item">
          <div class="indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${Yt({"expand-button":!0,"expand-button-visible":e})}
            aria-hidden="true"
          >
            <slot class="expand-icon-slot" name="expand-icon">
              ${Ar(this.loading,(()=>X` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `),(()=>X`
                  <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
                `))}
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${Ar(this.selectable,(()=>X`
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
                ?checked="${Ta(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></wa-checkbox>
            `))}

          <slot class="label" part="label"></slot>
        </div>

        <div class="children" part="children" role="group" ?hidden=${!this.expanded&&!this.isConnected}>
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Br(t,e=!1){function o(t){const e=t.getChildrenItems({includeDisabled:!1});if(e.length){const o=e.every((t=>t.selected)),a=e.every((t=>!t.selected&&!t.indeterminate));t.selected=o,t.indeterminate=!o&&!a}}!function t(a){for(const o of a.getChildrenItems())o.selected=e?a.selected||o.selected:!o.disabled&&a.selected,t(o);e&&o(a)}(t),function t(e){const a=e.parentElement;Mr.isTreeItem(a)&&(o(a),t(a))}(t)}Mr.css=kr,i([bt()],Mr.prototype,"indeterminate",2),i([bt()],Mr.prototype,"isLeaf",2),i([bt()],Mr.prototype,"loading",2),i([bt()],Mr.prototype,"selectable",2),i([mt({type:Boolean,reflect:!0})],Mr.prototype,"expanded",2),i([mt({type:Boolean,reflect:!0})],Mr.prototype,"selected",2),i([mt({type:Boolean,reflect:!0})],Mr.prototype,"disabled",2),i([mt({type:Boolean,reflect:!0})],Mr.prototype,"lazy",2),i([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function({context:t}){return(e,o)=>{const a=new WeakMap;if("object"==typeof o)return{get(){return e.get.call(this)},set(t){return a.get(this).setValue(t),e.set.call(this,t)},init(e){return a.set(this,new Sr(this,{context:t,initialValue:e})),e}};{e.constructor.addInitializer((e=>{a.set(e,new Sr(e,{context:t}))}));const r=Object.getOwnPropertyDescriptor(e,o);let i;if(void 0===r){const t=new WeakMap;i={get(){return t.get(this)},set(e){a.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{const t=r.set;i={...r,set(e){a.get(this).setValue(e),t?.call(this,e)}}}return void Object.defineProperty(e,o,i)}}}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */({context:Fr})],Mr.prototype,"_treeItemContext",2),i([function({context:t,subscribe:e}){return(o,a)=>{"object"==typeof a?a.addInitializer((function(){new zr(this,{context:t,callback:t=>{o.set.call(this,t)},subscribe:e})})):o.constructor.addInitializer((o=>{new zr(o,{context:t,callback:t=>{o[a]=t},subscribe:e})}))}}({context:Fr,subscribe:!1})],Mr.prototype,"_parentTreeContext",2),i([gt("slot:not([name])")],Mr.prototype,"defaultSlot",2),i([gt("slot[name=children]")],Mr.prototype,"childrenSlot",2),i([gt(".item")],Mr.prototype,"itemElement",2),i([gt(".children")],Mr.prototype,"childrenContainer",2),i([gt(".expand-button slot")],Mr.prototype,"expandButtonSlot",2),i([mt({reflect:!0,type:Number,attribute:"tabindex"})],Mr.prototype,"tabIndex",2),i([mt({reflect:!0})],Mr.prototype,"role",2),i([Bt("loading",{waitUntilFirstUpdate:!0})],Mr.prototype,"handleLoadingChange",1),i([Bt("disabled")],Mr.prototype,"handleDisabledChange",1),i([Bt("expanded")],Mr.prototype,"handleExpandedState",1),i([Bt("indeterminate")],Mr.prototype,"handleIndeterminateStateChange",1),i([Bt("selected")],Mr.prototype,"handleSelectedChange",1),i([Bt("expanded",{waitUntilFirstUpdate:!0})],Mr.prototype,"handleExpandedChange",1),i([Bt("expanded",{waitUntilFirstUpdate:!0})],Mr.prototype,"handleExpandAnimation",1),i([Bt("lazy",{waitUntilFirstUpdate:!0})],Mr.prototype,"handleLazyChange",1),Mr=i([wt("wa-tree-item")],Mr),Mr.disableWarning?.("change-in-update");var Er=class extends kt{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new Nt(this),this.tabIndex=0,this.role="tree",this.initTreeItem=t=>{t.updateComplete.then((()=>{t.selectable="multiple"===this.selection,["expand","collapse"].filter((t=>!!this.querySelector(`[slot="${t}-icon"]`))).forEach((e=>{const o=t.querySelector(`[slot="${e}-icon"]`),a=this.getExpandButtonIcon(e);a&&(null===o?t.append(a):o.hasAttribute("data-default")&&o.replaceWith(a))}))}))},this.handleTreeChanged=t=>{for(const e of t){const t=[...e.addedNodes].filter(Mr.isTreeItem),o=[...e.removedNodes].filter(Mr.isTreeItem);t.forEach(this.initTreeItem),this.lastFocusedItem&&o.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;e&&this.contains(e)||(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Mr.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},"addEventListener"in this&&(this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("wa-lazy-change",this.handleSlotChange))}async connectedCallback(){super.connectedCallback(),"undefined"!=typeof MutationObserver&&(await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})),this.setAttribute("tabindex","0"),this.setAttribute("role","tree")}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}getExpandButtonIcon(t){const e=("expand"===t?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(e){const o=e.cloneNode(!0);return[o,...o.querySelectorAll("[id]")].forEach((t=>t.removeAttribute("id"))),o.setAttribute("data-default",""),o.slot=t+"-icon",o}return null}selectItem(t){const e=[...this.selectedItems];if("multiple"===this.selection)t.selected=!t.selected,t.lazy&&(t.expanded=!0),Br(t);else if("single"===this.selection||t.isLeaf){const e=this.getAllTreeItems();for(const o of e)o.selected=o===t}else"leaf"===this.selection&&(t.expanded=!t.expanded);const o=this.selectedItems;(e.length!==o.length||o.some((t=>!e.includes(t))))&&Promise.all(o.map((t=>t.updateComplete))).then((()=>{this.dispatchEvent(new fr({selection:o}))}))}getAllTreeItems(){return[...this.querySelectorAll("wa-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key))return;if(t.composedPath().some((t=>["input","textarea"].includes(t?.tagName?.toLowerCase()))))return;const e=this.getFocusableItems(),o=this.matches(":dir(ltr)"),a="rtl"===this.localize.dir();if(e.length>0){t.preventDefault();const r=e.findIndex((t=>t.matches(":focus"))),i=e[r],n=t=>{const o=e[Ve(t,0,e.length-1)];this.focusItem(o)},s=t=>{i.expanded=t};"ArrowDown"===t.key?n(r+1):"ArrowUp"===t.key?n(r-1):o&&"ArrowRight"===t.key||a&&"ArrowLeft"===t.key?!i||i.disabled||i.expanded||i.isLeaf&&!i.lazy?n(r+1):s(!0):o&&"ArrowLeft"===t.key||a&&"ArrowRight"===t.key?!i||i.disabled||i.isLeaf||!i.expanded?n(r-1):s(!1):"Home"===t.key?n(0):"End"===t.key?n(e.length-1):"Enter"!==t.key&&" "!==t.key||i.disabled||this.selectItem(i)}}handleClick(t){const e=t.target,o=e.closest("wa-tree-item"),a=t.composedPath().some((t=>t?.classList?.contains("expand-button")));o&&!o.disabled&&e===this.clickTarget&&(a?o.expanded=!o.expanded:this.selectItem(o))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t="multiple"===this.selection,e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const o of e)o.updateComplete.then((()=>{o.selectable=t}));t&&(await this.updateComplete,[...this.querySelectorAll(":scope > wa-tree-item")].forEach((t=>{t.updateComplete.then((()=>{Br(t,!0)}))})))}get selectedItems(){return this.getAllTreeItems().filter((t=>t.selected))}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter((t=>{if(t.disabled)return!1;const o=t.parentElement?.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||e.has(o))&&e.add(t),!e.has(t)}))}render(){return X`
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
    `}};Er.css=pr,i([gt("slot:not([name])")],Er.prototype,"defaultSlot",2),i([gt("slot[name=expand-icon]")],Er.prototype,"expandedIconSlot",2),i([gt("slot[name=collapse-icon]")],Er.prototype,"collapsedIconSlot",2),i([mt()],Er.prototype,"selection",2),i([mt({attribute:"tabindex",reflect:!0,type:Number})],Er.prototype,"tabIndex",2),i([mt({reflect:!0})],Er.prototype,"role",2),i([Bt("selection")],Er.prototype,"handleSelectionChange",1),Er=i([wt("wa-tree")],Er);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Or=u`
  :host {
    --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.375em 0.625em;
    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    font-size: max(var(--wa-font-size-3xs), 0.75em);
    font-weight: var(--wa-font-weight-semibold);
    line-height: 1;
    vertical-align: middle;
    white-space: nowrap;
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;
    border-radius: var(--wa-border-radius-s);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;

    min-width: 1.25em; /* <-- this is what Safari respects for intrinsic */
    min-height: 1em;
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) {
    --pulse-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));

    color: var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
  }

  :host([appearance='filled']) {
    --pulse-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));

    color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) {
    --pulse-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));

    color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
    border-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));
  }

  :host([appearance='accent']) {
    --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;
  }

  /* Pill modifier */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }

  /* Pulse attention */
  :host([attention='pulse']) {
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  /* Bounce attention */
  :host([attention='bounce']) {
    animation: bounce 1s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-2px);
    }
  }

  /* Prevents vertical space when icons with vertical-align are slotted in - https://github.com/shoelace-style/webawesome/issues/2280 */
  [part='start'],
  [part='end'] {
    line-height: 0;
  }

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.375em;
  }

  slot[name='end']::slotted(*) {
    margin-inline-start: 0.375em;
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Ir=class extends kt{constructor(){super(...arguments),this.variant="brand",this.appearance="accent",this.pill=!1,this.attention="none"}render(){return X`
      <span part="start">
        <slot name="start"></slot>
      </span>

      <span part="base" role="status">
        <slot></slot>
      </span>

      <span part="end">
        <slot name="end"></slot>
      </span>
    `}};Ir.css=[Mt,Or],i([mt({reflect:!0})],Ir.prototype,"variant",2),i([mt({reflect:!0})],Ir.prototype,"appearance",2),i([mt({type:Boolean,reflect:!0})],Ir.prototype,"pill",2),i([mt({reflect:!0})],Ir.prototype,"attention",2),Ir=i([wt("wa-badge")],Ir);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var qr=u`
  :host {
    --width: 31rem;
    --spacing: var(--wa-space-l);
    --backdrop-filter: none;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .dialog {
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: var(--width);
    max-width: calc(100% - var(--wa-space-2xl));
    max-height: calc(100% - var(--wa-space-2xl));
    color: inherit;
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-panel-border-radius);
    border: none;
    box-shadow: var(--wa-shadow-l);
    padding: 0;
    margin: auto;

    &.show {
      animation: show-dialog var(--show-duration) ease;

      &::backdrop {
        animation: show-backdrop var(--show-duration, 200ms) ease;
      }
    }

    &.hide {
      animation: show-dialog var(--hide-duration) ease reverse;

      &::backdrop {
        animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .dialog:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog {
      max-height: 80vh;
    }
  }

  .open {
    display: flex;
    opacity: 1;
  }

  .header {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: nowrap;

    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font-family: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:first-of-type)) {
    margin-inline-start: var(--wa-spacing-xs);
  }

  .dialog::backdrop {
    /*
      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
      remove the fallback values here.
    */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
    backdrop-filter: var(--backdrop-filter);
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.02;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-dialog {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .dialog {
      border: solid 1px white;
    }
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,_r=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.hasSlotController=new St(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.withFooter=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.open&&Ne(this)&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),Ce(this))}disconnectedCallback(){super.disconnectedCallback(),ze(this),this.removeOpenListeners()}async requestClose(t){const e=new Te({source:t});if(this.dispatchEvent(e),e.defaultPrevented)return this.open=!0,void Xe(this.dialog,"pulse");this.removeOpenListeners(),await Xe(this.dialog,"hide"),this.open=!1,this.dialog.close(),ze(this);const o=this.originalTrigger;"function"==typeof o?.focus&&setTimeout((()=>o.focus())),this.dispatchEvent(new De)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),Re(this)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),Pe(this)}handleDialogCancel(t){t.preventDefault(),!this.dialog.classList.contains("hide")&&t.target===this.dialog&&Ne(this)&&this.requestClose(this.dialog)}handleDialogClick(t){const e=t.target.closest('[data-dialog="close"]');e&&(t.stopPropagation(),this.requestClose(e))}async handleDialogPointerDown(t){t.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await Xe(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){const t=new _e;this.dispatchEvent(t),t.defaultPrevented?this.open=!1:(this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),Ce(this),requestAnimationFrame((()=>{const t=this.querySelector("[autofocus]");t&&"function"==typeof t.focus?t.focus():this.dialog.focus()})),await Xe(this.dialog,"show"),this.dispatchEvent(new je))}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer","withFooter");return X`
      <dialog
        part="dialog"
        class=${Yt({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${t?X`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"​"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${t=>this.requestClose(t.target)}"
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
            `:""}

        <div part="body" class="body"><slot></slot></div>

        <!-- Use a hidden element so we still get "slotchange" events. -->
        <footer part="footer" class="footer" ?hidden=${!e}>
          <slot name="footer"></slot>
        </footer>
      </dialog>
    `}};_r.css=qr,i([gt(".dialog")],_r.prototype,"dialog",2),i([mt({type:Boolean,reflect:!0})],_r.prototype,"open",2),i([mt({reflect:!0})],_r.prototype,"label",2),i([mt({attribute:"without-header",type:Boolean,reflect:!0})],_r.prototype,"withoutHeader",2),i([mt({attribute:"light-dismiss",type:Boolean})],_r.prototype,"lightDismiss",2),i([mt({attribute:"with-footer",type:Boolean})],_r.prototype,"withFooter",2),i([Bt("open",{waitUntilFirstUpdate:!0})],_r.prototype,"handleOpenChange",1),_r=i([wt("wa-dialog")],_r),document.addEventListener("click",(t=>{const e=t.target.closest("[data-dialog]");if(e instanceof Element){const[t,o]=sr(e.getAttribute("data-dialog")||"");if("open"===t&&o?.length){const t=e.getRootNode().getElementById(o);"wa-dialog"===t?.localName?t.open=!0:console.warn(`A dialog with an ID of "${o}" could not be found in this document.`)}}})),document.addEventListener("pointerdown",(()=>{}));
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Tr=u`
  :host {
    --arrow-size: 0.375rem;
    --max-width: 25rem;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);

    display: contents;

    /** Defaults for inherited CSS properties */
    font-size: var(--wa-font-size-m);
    line-height: var(--wa-line-height-normal);
    text-align: start;
    white-space: normal;
  }

  /* The native dialog element */
  .dialog {
    display: none;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    overflow: visible;
    pointer-events: none;

    &:focus {
      outline: none;
    }

    &[open] {
      display: block;
    }
  }

  /* The <wa-popup> element */
  .popover {
    --arrow-size: inherit;
    --popup-border-width: var(--wa-panel-border-width);
    --show-duration: inherit;
    --hide-duration: inherit;

    pointer-events: auto;

    &::part(arrow) {
      background-color: var(--wa-color-surface-default);
      border-top: none;
      border-left: none;
      border-bottom: solid var(--wa-panel-border-width) var(--wa-color-surface-border);
      border-right: solid var(--wa-panel-border-width) var(--wa-color-surface-border);
      box-shadow: none;
    }
  }

  .popover[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .popover[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .popover[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .popover[placement^='right']::part(popup) {
    transform-origin: left;
  }

  /* Body */
  .body {
    display: flex;
    flex-direction: column;
    width: auto;
    max-width: min(var(--max-width), 100vw);
    padding: var(--wa-space-l);
    background-color: var(--wa-color-surface-default);
    border: var(--wa-panel-border-width) solid var(--wa-color-surface-border);
    border-radius: var(--wa-panel-border-radius);
    border-style: var(--wa-panel-border-style);
    box-shadow: var(--wa-shadow-l);
    color: var(--wa-color-text-normal);
    user-select: none;
    -webkit-user-select: none;
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Dr=new Set,jr=class extends kt{constructor(){super(...arguments),this.anchor=null,this.placement="top",this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=t=>{t.target.closest('[data-popover="close"]')&&(t.stopPropagation(),this.open=!1)},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.open&&Ne(this)&&(t.preventDefault(),t.stopPropagation(),this.open=!1,this.anchor&&"function"==typeof this.anchor.focus&&this.anchor.focus())},this.handleDocumentClick=t=>{this.anchor&&t.composedPath().includes(this.anchor)||t.composedPath().includes(this)||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.id||(this.id=He("wa-popover-")),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.for&&this.anchor&&(this.anchor=null,this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),Pe(this),this.eventController.abort()}firstUpdated(){this.open&&(this.dialog.show(),this.popup.active=!0,this.popup.reposition())}updated(t){t.has("open")&&this.customStates.set("open",this.open)}async handleOpenChange(){if(this.open){const t=new _e;if(this.dispatchEvent(t),t.defaultPrevented)return void(this.open=!1);Dr.forEach((t=>t.open=!1)),document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.show(),this.popup.active=!0,Dr.add(this),Re(this),requestAnimationFrame((()=>{const t=this.querySelector("[autofocus]");t&&"function"==typeof t.focus?t.focus():this.dialog.focus()})),await Xe(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new je)}else{const t=new Te;if(this.dispatchEvent(t),t.defaultPrevented)return void(this.open=!0);document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),Dr.delete(this),Pe(this),await Xe(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new De)}}handleForChange(){const t=this.getRootNode();if(!t)return;const e=this.for?t.getElementById(this.for):null,o=this.anchor;if(e===o)return;const{signal:a}=this.eventController;e&&e.addEventListener("click",this.handleAnchorClick,{signal:a}),o&&o.removeEventListener("click",this.handleAnchorClick),this.anchor=e,this.for&&!e&&console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,Ha(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Ha(this,"wa-after-hide")}render(){return X`
      <dialog part="dialog" class="dialog">
        <wa-popup
          part="popup"
          exportparts="
            popup:popup__popup,
            arrow:popup__arrow
          "
          class=${Yt({popover:!0,"popover-open":this.open})}
          placement=${this.placement}
          distance=${this.distance}
          skidding=${this.skidding}
          flip
          shift
          shift-padding="8"
          ?arrow=${!this.withoutArrow}
          .anchor=${this.anchor}
        >
          <div part="body" class="body" @click=${this.handleBodyClick}>
            <slot></slot>
          </div>
        </wa-popup>
      </dialog>
    `}};jr.css=Tr,jr.dependencies={"wa-popup":Fa},i([gt("dialog")],jr.prototype,"dialog",2),i([gt(".body")],jr.prototype,"body",2),i([gt("wa-popup")],jr.prototype,"popup",2),i([bt()],jr.prototype,"anchor",2),i([mt()],jr.prototype,"placement",2),i([mt({type:Boolean,reflect:!0})],jr.prototype,"open",2),i([mt({type:Number})],jr.prototype,"distance",2),i([mt({type:Number})],jr.prototype,"skidding",2),i([mt()],jr.prototype,"for",2),i([mt({attribute:"without-arrow",type:Boolean,reflect:!0})],jr.prototype,"withoutArrow",2),i([Bt("open",{waitUntilFirstUpdate:!0})],jr.prototype,"handleOpenChange",1),i([Bt("for")],jr.prototype,"handleForChange",1),i([Bt(["distance","placement","skidding"])],jr.prototype,"handleOptionsChange",1),jr=i([wt("wa-popover")],jr);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ur=u`
  :host {
    border-width: 0;
  }

  .textarea {
    display: grid;
    align-items: center;
    margin: 0;
    border: none;
    outline: none;
    cursor: inherit;
    font: inherit;
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    -webkit-appearance: none;
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    &:focus-within {
      outline-color: var(--wa-color-focus);
    }

    /* Style disabled textareas */
    &:has(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .textarea {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .textarea {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .textarea {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  textarea {
    display: block;
    width: 100%;
    border: none;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: inherit;
    scroll-padding-block: var(--wa-form-control-padding-block);
    padding: calc(var(--wa-form-control-padding-block) - ((1lh - 1em) / 2)) var(--wa-form-control-padding-inline); /* accounts for the larger line height of textarea content */
    min-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    box-shadow: none;
    margin: 0;

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &:focus {
      outline: none;
    }
  }

  /* Shared textarea and size-adjuster positioning */
  .control,
  .size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    padding: 0;
  }

  textarea::-webkit-search-decoration,
  textarea::-webkit-search-cancel-button,
  textarea::-webkit-search-results-button,
  textarea::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /*
   * Resize types
   */

  :host([resize='none']) textarea {
    resize: none;
  }

  textarea,
  :host([resize='vertical']) textarea {
    resize: vertical;
  }

  :host([resize='horizontal']) textarea {
    resize: horizontal;
  }

  :host([resize='both']) textarea {
    resize: both;
  }

  :host([resize='auto']) textarea {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }

  /*
   * Footer (hint + character count)
   */

  .footer {
    display: flex;
    align-items: baseline;
    gap: 1em;
  }

  .footer.has-count [part='hint'] {
    flex: 1 1 auto;
    min-width: 0;
  }

  .count {
    flex: 0 0 auto;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);
    margin-inline-start: auto;
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Rr=u`
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label),
  .wa-visually-hidden-label::part(form-control-label) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Pr=class extends Ct{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new St(this,"hint","label"),this.localize=new Nt(this),this.announcedCountText="",this.title="",this.name=null,this._value=null,this.defaultValue=this.getAttribute("value")??"",this.size="m",this.appearance="outlined",this.label="",this.hint="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1,this.withCount=!1,this.lastObservedWidth=0}static get validators(){return[...super.validators,t()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleSizeChange(){Lt(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this.setTextareaDimensions(),this.updateResizeObserver(),this.didSSR&&this.input&&this.value!==this.input.value&&(this.value=this.input.value)}))}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.countAnnounceTimeout),this.resizeObserver?.disconnect(),this.resizeObserver=void 0}updateFormValue(t){null!=t?super.updateFormValue(t):this.setValue("",null)}updateResizeObserver(){const t="none"!==this.resize;this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=void 0),t&&this.input&&("auto"===this.resize?(this.resizeObserver=new ResizeObserver((t=>{const e=t[0]?.contentRect.width??0;e!==this.lastObservedWidth&&(this.lastObservedWidth=e,requestAnimationFrame((()=>this.setTextareaDimensions())))})),this.resizeObserver.observe(this)):(this.resizeObserver=new ResizeObserver((()=>this.setTextareaDimensions())),this.resizeObserver.observe(this.input)))}handleBlur(){this.checkValidity()}handleChange(t){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleInput(t){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0}),this.scheduleCountAnnouncement()}scheduleCountAnnouncement(){clearTimeout(this.countAnnounceTimeout),this.countAnnounceTimeout=setTimeout((()=>{const t=(this.value??"").length;this.announcedCountText=null!=this.maxlength?this.localize.term("numCharactersRemaining",this.maxlength-t):this.localize.term("numCharacters",t)}),1e3)}setTextareaDimensions(){if("none"===this.resize)return this.base.style.width="",void(this.base.style.height="");if("auto"===this.resize){this.sizeAdjuster.style.height=this.input.clientHeight+"px",this.input.style.height="auto";const t=this.input.scrollHeight;return this.input.style.height=t+"px",this.sizeAdjuster.style.height=t+"px",this.base.style.width="",void(this.base.style.height="")}if(this.input.style.width){const t=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=t+"px"}if(this.input.style.height){const t=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=t+"px"}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(t){t.has("resize")&&(this.setTextareaDimensions(),this.updateResizeObserver()),super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){return t?("number"==typeof t.top&&(this.input.scrollTop=t.top),void("number"==typeof t.left&&(this.input.scrollLeft=t.left))):{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,a="preserve"){this.input.setRangeText(t,e??this.input.selectionStart,o??this.input.selectionEnd,a),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaDimensions())}formResetCallback(){this._value=null,this.input&&(this.input.value=this.value||""),super.formResetCallback()}render(){const t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),o=!!this.label||!!t,a=!!this.hint||!!e,r=(this.value??"").length,i=null!=this.maxlength?this.localize.term("numCharactersRemaining",this.maxlength-r):this.localize.term("numCharacters",r);return X`
      <label
        part="form-control-label label"
        class=${Yt({label:!0,"has-label":o})}
        for="input"
        aria-hidden=${o?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="textarea">
        <textarea
          part="textarea"
          id="input"
          class="control"
          title=${this.title}
          name=${Xt(this.name)}
          .value=${Ta(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${Xt(this.placeholder)}
          rows=${Xt(this.rows)}
          minlength=${Xt(this.minlength)}
          maxlength=${Xt(this.maxlength)}
          autocapitalize=${Xt(this.autocapitalize)}
          autocorrect=${Xt(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${Xt(this.spellcheck)}
          enterkeyhint=${Xt(this.enterkeyhint)}
          inputmode=${Xt(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
        ></textarea>

        <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
        <div part="textarea-adjuster" class="size-adjuster" ?hidden=${"auto"!==this.resize}></div>
      </div>

      <div
        class=${Yt({footer:!0,"has-count":this.withCount})}
      >
        <slot
          id="hint"
          name="hint"
          part="hint"
          aria-hidden=${a?"false":"true"}
          class=${Yt({"has-slotted":a})}
          >${this.hint}</slot
        >

        ${this.withCount?X`
              <div part="count" class="count" aria-hidden="true">${i}</div>
              <div class="wa-visually-hidden-force" aria-live="polite">${this.announcedCountText}</div>
            `:""}
      </div>
    `}};Pr.css=[Ur,_a,At,Rr],i([bt()],Pr.prototype,"announcedCountText",2),i([gt(".control")],Pr.prototype,"input",2),i([gt('[part~="base"]')],Pr.prototype,"base",2),i([gt(".size-adjuster")],Pr.prototype,"sizeAdjuster",2),i([mt()],Pr.prototype,"title",2),i([mt({reflect:!0})],Pr.prototype,"name",2),i([bt()],Pr.prototype,"value",1),i([mt({attribute:"value",reflect:!0})],Pr.prototype,"defaultValue",2),i([mt({reflect:!0})],Pr.prototype,"size",2),i([Bt("size")],Pr.prototype,"handleSizeChange",1),i([mt({reflect:!0})],Pr.prototype,"appearance",2),i([mt()],Pr.prototype,"label",2),i([mt({attribute:"hint"})],Pr.prototype,"hint",2),i([mt()],Pr.prototype,"placeholder",2),i([mt({type:Number})],Pr.prototype,"rows",2),i([mt({reflect:!0})],Pr.prototype,"resize",2),i([mt({type:Boolean})],Pr.prototype,"disabled",2),i([mt({type:Boolean,reflect:!0})],Pr.prototype,"readonly",2),i([mt({type:Boolean,reflect:!0})],Pr.prototype,"required",2),i([mt({type:Number})],Pr.prototype,"minlength",2),i([mt({type:Number})],Pr.prototype,"maxlength",2),i([mt()],Pr.prototype,"autocapitalize",2),i([mt({type:Boolean,converter:{fromAttribute:t=>!(!t||"off"===t),toAttribute:t=>t?"on":"off"}})],Pr.prototype,"autocorrect",2),i([mt()],Pr.prototype,"autocomplete",2),i([mt({type:Boolean})],Pr.prototype,"autofocus",2),i([mt()],Pr.prototype,"enterkeyhint",2),i([mt({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],Pr.prototype,"spellcheck",2),i([mt()],Pr.prototype,"inputmode",2),i([mt({attribute:"with-label",type:Boolean})],Pr.prototype,"withLabel",2),i([mt({attribute:"with-hint",type:Boolean})],Pr.prototype,"withHint",2),i([mt({attribute:"with-count",type:Boolean,reflect:!0})],Pr.prototype,"withCount",2),i([Bt("rows",{waitUntilFirstUpdate:!0})],Pr.prototype,"handleRowsChange",1),i([Bt("value",{waitUntilFirstUpdate:!0})],Pr.prototype,"handleValueChange",1),Pr=i([wt("wa-textarea")],Pr),Pr.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Nr=u`
  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .label {
    padding: 0;
  }

  .radio-group-required .label::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  [part~='form-control-input'] {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0; /* Radios handle their own spacing */
  }

  /* Horizontal */
  :host([orientation='horizontal']) [part~='form-control-input'] {
    flex-direction: row;
  }

  /* Help text */
  [part~='hint'] {
    margin-block-start: 0.5em;
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Vr=class extends Ct{constructor(){super(),this.hasSlotController=new St(this,"hint","label"),this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=t=>{const e=t.target.closest("wa-radio");if(!e||e.disabled||e.forceDisabled||this.disabled)return;const o=this.value;this.value=e.value,e.checked=!0;const a=this.getAllRadios();for(const t of a)e!==t&&(t.checked=!1,t.setAttribute("tabindex","-1"));this.value!==o&&this.updateComplete.then((()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static get validators(){const t=[Va({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:He("__wa-radio")})})];return[...super.validators,...t]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){"number"==typeof t&&(t+=""),this.valueHasChanged=!0,this._value=t}handleSizeChange(){Lt(this.localName,this.size)}get validationTarget(){const t=this.querySelector(":is(wa-radio):not([disabled])");if(t)return t}updated(t){(t.has("disabled")||t.has("size")||t.has("value")||t.has("defaultValue"))&&this.syncRadioElements()}formResetCallback(...t){this._value=null,super.formResetCallback(...t),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("wa-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const t=this.getAllRadios();if(t.forEach(((e,o)=>{this.size&&e.setAttribute("size",this.size),e.toggleAttribute("data-wa-radio-horizontal","vertical"!==this.orientation),e.toggleAttribute("data-wa-radio-vertical","vertical"===this.orientation),e.toggleAttribute("data-wa-radio-first",0===o),e.toggleAttribute("data-wa-radio-inner",0!==o&&o!==t.length-1),e.toggleAttribute("data-wa-radio-last",o===t.length-1),e.forceDisabled=this.disabled})),await Promise.all(t.map((async t=>{await t.updateComplete,t.checked=!t.disabled&&t.value===this.value}))),this.disabled)t.forEach((t=>{t.tabIndex=-1}));else{const e=t.filter((t=>!t.disabled)),o=e.find((t=>t.checked));e.length>0&&e.forEach(o?t=>{t.tabIndex=t.checked?0:-1}:(t,e)=>{t.tabIndex=0===e?0:-1}),t.filter((t=>t.disabled)).forEach((t=>{t.tabIndex=-1}))}}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)||this.disabled)return;const e=this.getAllRadios().filter((t=>!t.disabled));if(e.length<=0)return;t.preventDefault();const o=this.value,a=e.find((t=>t.checked))??e[0],r=" "===t.key?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1;let i=e.indexOf(a)+r;i||(i=0),i<0&&(i=e.length-1),i>e.length-1&&(i=0);const n=e.some((t=>"wa-radio-button"===t.tagName.toLowerCase()));this.getAllRadios().forEach((t=>{t.checked=!1,n||t.setAttribute("tabindex","-1")})),this.value=e[i].value,e[i].checked=!0,n?e[i].shadowRoot.querySelector("button").focus():(e[i].setAttribute("tabindex","0"),e[i].focus()),this.value!==o&&this.updateComplete.then((()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),t.preventDefault()}focus(t){if(this.disabled)return;const e=this.getAllRadios(),o=e.find((t=>t.checked)),a=e.find((t=>!t.disabled)),r=o||a;r&&r.focus(t)}render(){const t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),o=!!this.label||!!t,a=!!this.hint||!!e;return X`
      <fieldset
        part="form-control"
        class=${Yt({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":o})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}
      >
        <label
          part="form-control-label"
          id="label"
          class=${Yt({label:!0,"has-label":o})}
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${Yt({"has-slotted":a})}
          aria-hidden=${a?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}};Vr.css=[At,_a,Nr],Vr.shadowRootOptions={...Ct.shadowRootOptions,delegatesFocus:!0},i([gt("slot:not([name])")],Vr.prototype,"defaultSlot",2),i([mt()],Vr.prototype,"label",2),i([mt({attribute:"hint"})],Vr.prototype,"hint",2),i([mt({reflect:!0})],Vr.prototype,"name",2),i([mt({type:Boolean,reflect:!0})],Vr.prototype,"disabled",2),i([mt({reflect:!0})],Vr.prototype,"orientation",2),i([bt()],Vr.prototype,"value",1),i([mt({attribute:"value",reflect:!0})],Vr.prototype,"defaultValue",2),i([mt({reflect:!0})],Vr.prototype,"size",2),i([Bt("size")],Vr.prototype,"handleSizeChange",1),i([mt({type:Boolean,reflect:!0})],Vr.prototype,"required",2),i([mt({type:Boolean,attribute:"with-label"})],Vr.prototype,"withLabel",2),i([mt({type:Boolean,attribute:"with-hint"})],Vr.prototype,"withHint",2),Vr=i([wt("wa-radio-group")],Vr),Vr.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Hr=u`
  :host {
    --checked-icon-color: var(--wa-form-control-activated-color);
    --checked-icon-scale: 0.7;

    color: var(--wa-form-control-value-color);
    display: inline-flex;
    flex-direction: row;
    align-items: top;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  :host(:not(:state(checked))) svg circle {
    opacity: 0;
  }

  [part~='label'] {
    display: inline;
  }

  [part~='hint'] {
    margin-block-start: 0.5em;
  }

  /* Default spacing for default appearance radios */
  :host([appearance='default']) {
    margin-block: 0.375em; /* Half of the original 0.75em gap on each side */
  }

  :host([appearance='default'][data-wa-radio-horizontal]) {
    margin-block: 0;
    margin-inline: 0.5em; /* Half of the original 1em gap on each side */
  }

  /* Remove margin from first/last items to prevent extra space */
  :host([appearance='default'][data-wa-radio-first]) {
    margin-block-start: 0;
    margin-inline-start: 0;
  }

  :host([appearance='default'][data-wa-radio-last]) {
    margin-block-end: 0;
    margin-inline-end: 0;
  }

  /* Button appearance have no spacing, they get handled by the overlap margins below */
  :host([appearance='button']) {
    margin: 0;
    align-items: center;
    min-height: var(--wa-form-control-height);
    background-color: var(--wa-color-surface-default);
    border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);
    border-radius: var(--wa-border-radius-m);
    padding: 0 var(--wa-form-control-padding-inline);
    transition:
      background-color var(--wa-transition-fast),
      border-color var(--wa-transition-fast);
  }

  /* Default appearance */
  :host([appearance='default']) {
    .control {
      flex: 0 0 auto;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--wa-form-control-toggle-size);
      height: var(--wa-form-control-toggle-size);
      border-color: var(--wa-form-control-border-color);
      border-radius: 50%;
      border-style: var(--wa-form-control-border-style);
      border-width: var(--wa-form-control-border-width);
      background-color: var(--wa-form-control-background-color);
      color: transparent;
      transition:
        background var(--wa-transition-normal),
        border-color var(--wa-transition-fast),
        box-shadow var(--wa-transition-fast),
        color var(--wa-transition-fast);
      transition-timing-function: var(--wa-transition-easing);

      margin-inline-end: 0.5em;
    }

    .checked-icon {
      display: flex;
      fill: currentColor;
      width: var(--wa-form-control-toggle-size);
      height: var(--wa-form-control-toggle-size);
      scale: var(--checked-icon-scale);
    }
  }

  /* Button appearance */
  :host([appearance='button']) {
    .control {
      display: none;
    }
  }

  /* Checked */
  :host(:state(checked)) .control {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-background-color);
  }

  /* Focus */
  :host(:focus-visible) .control {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host(:state(disabled)) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Horizontal grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-first]) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* Vertical grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-first]) {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  }

  @media (hover: hover) {
    :host([appearance='button']:hover:not(:state(disabled), :state(checked))) {
      background-color: color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover));
    }
  }

  :host([appearance='button']:focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([appearance='button']:state(checked)) {
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-color-brand-fill-quiet);
  }

  :host([appearance='button']:state(checked):focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Button overlap margins */
  :host([appearance='button'][data-wa-radio-horizontal]:not([data-wa-radio-first])) {
    margin-inline-start: calc(-1 * var(--wa-form-control-border-width));
  }

  :host([appearance='button'][data-wa-radio-vertical]:not([data-wa-radio-first])) {
    margin-block-start: calc(-1 * var(--wa-form-control-border-width));
  }

  /* Ensure interactive states are visible above adjacent buttons */
  :host([appearance='button']:hover),
  :host([appearance='button']:state(checked)) {
    position: relative;
    z-index: 1;
  }

  :host([appearance='button']:focus-visible) {
    z-index: 2;
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Yr=class extends Ct{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.appearance="default",this.disabled=!1,this.handleClick=()=>{this.disabled||this.forceDisabled||(this.checked=!0)},this.addEventListener("click",this.handleClick)}handleSizeChange(){Lt(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(t){if(super.updated(t),t.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),this.disabled||this.forceDisabled||(this.tabIndex=this.checked?0:-1)),t.has("disabled")||t.has("forceDisabled")){const t=this.disabled||this.forceDisabled;this.customStates.set("disabled",t),this.setAttribute("aria-disabled",t?"true":"false"),this.tabIndex=t?-1:this.checked?0:-1}}setValue(){}render(){return X`
      <span part="control" class="control">
        ${this.checked?X`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:""}
      </span>

      <slot part="label" class="label"></slot>
    `}};Yr.css=[_a,At,Hr],i([bt()],Yr.prototype,"checked",2),i([bt()],Yr.prototype,"forceDisabled",2),i([mt({reflect:!0})],Yr.prototype,"value",2),i([mt({reflect:!0})],Yr.prototype,"appearance",2),i([mt({reflect:!0})],Yr.prototype,"size",2),i([Bt("size")],Yr.prototype,"handleSizeChange",1),i([mt({type:Boolean})],Yr.prototype,"disabled",2),Yr=i([wt("wa-radio")],Yr),Yr.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Xr=u`
  :host {
    display: flex;
    position: relative;
    align-items: stretch;
    border-radius: var(--wa-panel-border-radius);
    background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
    border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
    border-style: var(--wa-panel-border-style);
    border-width: var(--wa-panel-border-width);
    color: var(--wa-color-text-normal);
    padding: 1em;
  }

  /* Appearance modifiers */
  :host([appearance~='plain']) {
    background-color: transparent;
    border-color: transparent;
  }

  :host([appearance~='outlined']) {
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
  }

  :host([appearance~='filled']) {
    background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
    border-color: transparent;
  }

  :host([appearance~='filled-outlined']) {
    border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
  }

  :host([appearance~='accent']) {
    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;

    [part~='icon'] {
      color: currentColor;
    }
  }

  [part~='icon'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-on-quiet);
    font-size: 1.25em;
  }

  ::slotted([slot='icon']) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  [part~='message'] {
    flex: 1 1 auto;
    display: block;
    overflow: hidden;
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Wr=class extends kt{constructor(){super(...arguments),this.variant="brand",this.size="m"}handleSizeChange(){Lt(this.localName,this.size)}render(){return X`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `}};Wr.css=[Xr,Mt,At],i([mt({reflect:!0})],Wr.prototype,"variant",2),i([mt({reflect:!0})],Wr.prototype,"appearance",2),i([mt({reflect:!0})],Wr.prototype,"size",2),i([Bt("size")],Wr.prototype,"handleSizeChange",1),Wr=i([wt("wa-callout")],Wr);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Kr=class extends Event{constructor(){super("wa-start",{bubbles:!0,cancelable:!1,composed:!0})}},Qr=class extends Event{constructor(){super("wa-finish",{bubbles:!0,cancelable:!1,composed:!0})}},Zr=class extends Event{constructor(){super("wa-cancel",{bubbles:!0,cancelable:!1,composed:!0})}},Gr=u`
  :host {
    display: contents;
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */const Jr={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};var ti=Object.freeze({__proto__:null,backInDown:[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],backInLeft:[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],backInRight:[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],backInUp:[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],backOutDown:[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],backOutLeft:[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],backOutRight:[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],backOutUp:[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],bounce:[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],bounceIn:[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],bounceInDown:[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],bounceInLeft:[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],bounceInRight:[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],bounceInUp:[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],bounceOut:[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],bounceOutDown:[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],bounceOutLeft:[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],bounceOutRight:[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],bounceOutUp:[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],easings:Jr,fadeIn:[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],fadeInBottomLeft:[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInBottomRight:[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInDown:[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInDownBig:[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInLeft:[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInLeftBig:[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInRight:[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInRightBig:[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInTopLeft:[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInTopRight:[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInUp:[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInUpBig:[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeOut:[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],fadeOutBottomLeft:[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],fadeOutBottomRight:[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],fadeOutDown:[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],fadeOutDownBig:[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],fadeOutLeft:[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],fadeOutLeftBig:[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],fadeOutRight:[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],fadeOutRightBig:[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],fadeOutTopLeft:[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],fadeOutTopRight:[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],fadeOutUp:[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],fadeOutUpBig:[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],flash:[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],flip:[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg)",easing:"ease-out"},{offset:.5,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg)",easing:"ease-in"},{offset:.8,transform:"perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg)",easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],flipInX:[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],flipInY:[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],flipOutX:[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],flipOutY:[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],headShake:[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],heartBeat:[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],hinge:[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],jackInTheBox:[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],jello:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],lightSpeedInLeft:[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],lightSpeedInRight:[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],lightSpeedOutLeft:[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],lightSpeedOutRight:[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],pulse:[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],rollIn:[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],rollOut:[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],rotateIn:[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],rotateInDownLeft:[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],rotateInDownRight:[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],rotateInUpLeft:[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],rotateInUpRight:[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],rotateOut:[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],rotateOutDownLeft:[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],rotateOutDownRight:[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],rotateOutUpLeft:[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],rotateOutUpRight:[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],rubberBand:[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],shake:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],shakeX:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],shakeY:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],slideInDown:[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],slideInLeft:[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],slideInRight:[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],slideInUp:[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],slideOutDown:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],slideOutLeft:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],slideOutRight:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],slideOutUp:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],swing:[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],tada:[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],wobble:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],zoomIn:[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],zoomInDown:[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],zoomInLeft:[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],zoomInRight:[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],zoomInUp:[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],zoomOut:[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],zoomOutDown:[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],zoomOutLeft:[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],zoomOutRight:[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],zoomOutUp:[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}]}),ei=class extends kt{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new Qr)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new Zr)}}get currentTime(){return this.animation?.currentTime??0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),"animate"in this&&this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),"animate"in this&&this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){const t=Jr[this.easing]??this.easing,e=this.keyframes??ti[this.name],o=(await this.defaultSlot).assignedElements()[0];return!(!o||!e||(this.destroyAnimation(),this.animation=o.animate(e,{delay:this.delay,direction:this.direction,duration:this.duration,easing:t,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.dispatchEvent(new Kr)):this.animation.pause(),0))}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return!!this.animation&&(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.dispatchEvent(new Kr)),this.play?this.animation.play():this.animation.pause(),!0)}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){this.animation?.cancel()}finish(){this.animation?.finish()}render(){return X` <slot @slotchange=${this.handleSlotChange}></slot> `}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */ei.css=Gr,i([(t,e)=>vt(t,e,{async get(){return await this.updateComplete,this.renderRoot?.querySelector("slot")??null}})],ei.prototype,"defaultSlot",2),i([mt()],ei.prototype,"name",2),i([mt({type:Boolean,reflect:!0})],ei.prototype,"play",2),i([mt({type:Number})],ei.prototype,"delay",2),i([mt()],ei.prototype,"direction",2),i([mt({type:Number})],ei.prototype,"duration",2),i([mt()],ei.prototype,"easing",2),i([mt({attribute:"end-delay",type:Number})],ei.prototype,"endDelay",2),i([mt()],ei.prototype,"fill",2),i([mt({type:Number})],ei.prototype,"iterations",2),i([mt({attribute:"iteration-start",type:Number})],ei.prototype,"iterationStart",2),i([mt({attribute:!1})],ei.prototype,"keyframes",2),i([mt({attribute:"playback-rate",type:Number})],ei.prototype,"playbackRate",2),i([Bt(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],ei.prototype,"handleAnimationChange",1),i([Bt("play")],ei.prototype,"handlePlayChange",1),i([Bt("playbackRate")],ei.prototype,"handlePlaybackRateChange",1),ei=i([wt("wa-animation")],ei);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var oi=u`
  :host {
    --track-height: 1rem;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);

    display: flex;
  }

  .progress-bar {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    overflow: hidden;
    height: var(--track-height);
    border-radius: var(--wa-border-radius-pill);
    background-color: var(--track-color);
    color: var(--wa-color-brand-on-loud);
    font-size: var(--wa-font-size-s);
  }

  .indicator {
    width: var(--percentage);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--indicator-color);
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    line-height: 1;
    font-weight: var(--wa-font-weight-semibold);
    transition: all var(--wa-transition-slow, 200ms) var(--wa-transition-easing, ease);
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  :host([indeterminate]) .indicator {
    position: absolute;
    inset-block: 0;
    inline-size: 50%;
    animation: wa-progress-indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--wa-color-surface-default);
    }

    .indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes wa-progress-indeterminate {
    0% {
      inset-inline-start: -50%;
    }

    75%,
    100% {
      inset-inline-start: 100%;
    }
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,ai=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.value=0,this.indeterminate=!1,this.label=""}willUpdate(t){null==this.style&&this.setStyleProperty("--percentage",Ve(this.value,0,100)+"%"),super.willUpdate(t)}updated(t){t.has("value")&&requestAnimationFrame((()=>{this.style.setProperty("--percentage",Ve(this.value,0,100)+"%")})),super.updated(t)}render(){return X`
      <div
        part="base"
        class="progress-bar"
        role="progressbar"
        title=${Xt(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?"0":this.value}
      >
        <div part="indicator" class="indicator">
          ${this.indeterminate?"":X` <slot part="label" class="label"></slot> `}
        </div>
      </div>
    `}};ai.css=oi,i([mt({type:Number,reflect:!0})],ai.prototype,"value",2),i([mt({type:Boolean,reflect:!0})],ai.prototype,"indeterminate",2),i([mt()],ai.prototype,"label",2),ai=i([wt("wa-progress-bar")],ai);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ri=u`
  :host {
    --size: 8rem;
    --track-width: 0.25em; /* avoid using rems here */
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-width: var(--track-width);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const ii="important",ni=" !"+ii,si=Vt(class extends Ht{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,o)=>{const a=t[o];return null==a?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`}),"")}update(t,[e]){const{style:o}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?o.removeProperty(t):o[t]=null);for(const t in e){const a=e[t];if(null!=a){this.ft.add(t);const e="string"==typeof a&&a.endsWith(ni);t.includes("-")||e?o.setProperty(t,e?a.slice(0,-11):a,e?ii:""):o[t]=a}}return W}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var li=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),e=2*Math.PI*t;this.indicatorOffset=e-this.value/100*e+"px"}}render(){return X`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style=${si({"--percentage":this.value/100})}
      >
        <svg class="image">
          <circle part="track" class="track"></circle>
          <circle
            part="indicator"
            class="indicator"
            style=${si({"stroke-dashoffset":this.indicatorOffset})}
          ></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `}};li.css=ri,i([gt(".indicator")],li.prototype,"indicator",2),i([bt()],li.prototype,"indicatorOffset",2),i([mt({type:Number,reflect:!0})],li.prototype,"value",2),i([mt()],li.prototype,"label",2),li=i([wt("wa-progress-ring")],li),li.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ci=u`
  :host {
    --track-size: 0.5em;
    --thumb-width: 1.4em;
    --thumb-height: 1.4em;
    --marker-width: 0.1875em;
    --marker-height: 0.1875em;
  }

  :host([orientation='vertical']) {
    width: auto;
  }

  #label:has(~ .vertical) {
    display: block;
    order: 2;
    max-width: none;
    text-align: center;
  }

  #description:has(~ .vertical) {
    order: 3;
    text-align: center;
  }

  /* Add extra space between slider and label, when present */
  #label.has-label ~ #slider {
    &.horizontal {
      margin-block-start: 0.5em;
    }
    &.vertical {
      margin-block-end: 0.5em;
    }
  }

  #slider {
    touch-action: none;

    &:focus {
      outline: none;
    }

    &:focus-visible:not(.disabled) #thumb,
    &:focus-visible:not(.disabled) #thumb-min,
    &:focus-visible:not(.disabled) #thumb-max {
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  #track {
    position: relative;
    border-radius: 9999px;
    background: var(--wa-color-neutral-fill-normal);
    isolation: isolate;
  }

  /* Orientation */
  .horizontal #track {
    height: var(--track-size);
  }

  .vertical #track {
    order: 1;
    width: var(--track-size);
    height: 200px;
  }

  /* Disabled */
  .disabled #track {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Indicator */
  #indicator {
    position: absolute;
    border-radius: inherit;
    background-color: var(--wa-form-control-activated-color);

    &:dir(ltr) {
      right: calc(100% - max(var(--start), var(--end)));
      left: min(var(--start), var(--end));
    }

    &:dir(rtl) {
      right: min(var(--start), var(--end));
      left: calc(100% - max(var(--start), var(--end)));
    }
  }

  .horizontal #indicator {
    top: 0;
    height: 100%;
  }

  .vertical #indicator {
    top: calc(100% - var(--end));
    bottom: var(--start);
    left: 0;
    width: 100%;
  }

  /* Thumbs */
  #thumb,
  #thumb-min,
  #thumb-max {
    z-index: 3;
    position: absolute;
    width: var(--thumb-width);
    height: var(--thumb-height);
    border: solid 0.125em var(--wa-color-surface-default);
    border-radius: 50%;
    background-color: var(--wa-form-control-activated-color);
    cursor: pointer;
  }

  .disabled #thumb,
  .disabled #thumb-min,
  .disabled #thumb-max {
    cursor: inherit;
  }

  .horizontal #thumb,
  .horizontal #thumb-min,
  .horizontal #thumb-max {
    top: calc(50% - var(--thumb-height) / 2);

    &:dir(ltr) {
      right: auto;
      left: calc(var(--position) - var(--thumb-width) / 2);
    }

    &:dir(rtl) {
      right: calc(var(--position) - var(--thumb-width) / 2);
      left: auto;
    }
  }

  .vertical #thumb,
  .vertical #thumb-min,
  .vertical #thumb-max {
    bottom: calc(var(--position) - var(--thumb-height) / 2);
    left: calc(50% - var(--thumb-width) / 2);
  }

  /* Range-specific thumb styles */
  :host([range]) {
    #thumb-min:focus-visible,
    #thumb-max:focus-visible {
      z-index: 4; /* Ensure focused thumb appears on top */
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  /* Markers */
  #markers {
    pointer-events: none;
  }

  .marker {
    z-index: 2;
    position: absolute;
    width: var(--marker-width);
    height: var(--marker-height);
    border-radius: 50%;
    background-color: var(--wa-color-surface-default);
  }

  .marker:first-of-type,
  .marker:last-of-type {
    display: none;
  }

  .horizontal .marker {
    top: calc(50% - var(--marker-height) / 2);
    left: calc(var(--position) - var(--marker-width) / 2);
  }

  .vertical .marker {
    top: calc(var(--position) - var(--marker-height) / 2);
    left: calc(50% - var(--marker-width) / 2);
  }

  /* Marker labels */
  #references {
    position: relative;

    slot {
      display: flex;
      justify-content: space-between;
      height: 100%;
    }

    ::slotted(*) {
      color: var(--wa-color-text-quiet);
      font-size: 0.875em;
      line-height: 1;
    }
  }

  .horizontal {
    #references {
      margin-block-start: 0.5em;
    }
  }

  .vertical {
    display: flex;
    margin-inline: auto;

    #track {
      order: 1;
    }

    #references {
      order: 2;
      width: min-content;
      margin-inline-start: 0.75em;

      slot {
        flex-direction: column;
      }
    }
  }

  .vertical #references slot {
    flex-direction: column;
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,hi="undefined"!=typeof window&&"ontouchstart"in window,di=class{constructor(t,e){this.isActive=!1,this.isDragging=!1,this.handleDragStart=t=>{const e="touches"in t?t.touches[0].clientX:t.clientX,o="touches"in t?t.touches[0].clientY:t.clientY;this.isDragging||!hi&&t.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("pointercancel",this.handleDragStop),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),document.addEventListener("touchcancel",this.handleDragStop),this.options.start(e,o))},this.handleDragStop=t=>{const e="changedTouches"in t?t.changedTouches[0].clientX:t.clientX,o="changedTouches"in t?t.changedTouches[0].clientY:t.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.options.stop(e,o)},this.handleDragMove=t=>{const e="touches"in t?t.touches[0].clientX:t.clientX,o="touches"in t?t.touches[0].clientY:t.clientY;window.getSelection()?.removeAllRanges(),this.options.move(e,o)},this.element=t,this.options={start:()=>{},stop:()=>{},move:()=>{},...e},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),hi&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.element.removeEventListener("pointerdown",this.handleDragStart),hi&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(t){(void 0!==t?t:!this.isActive)?this.start():this.stop()}},ui=class extends Ct{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new St(this,"hint","label"),this.localize=new Nt(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=null==this.getAttribute("value")?this.minValue:Number(this.getAttribute("value")),this._value=null,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="m",this.min=0,this.max=100,this.step=1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,{observedAttributes:["min","max","step"],checkValidity(t){const e={message:"",isValid:!0,invalidKeys:[]},o=(t,e,o,a)=>{if("undefined"==typeof document)return"";const r=document.createElement("input");return r.type="range",r.min=e+"",r.max=o+"",r.step=a+"",r.value=t+"",r.checkValidity(),r.validationMessage};if(t.isRange){const a=t.minValue,r=t.maxValue;if(a<t.min)return e.isValid=!1,e.invalidKeys.push("rangeUnderflow"),e.message=o(a,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,e;if(r>t.max)return e.isValid=!1,e.invalidKeys.push("rangeOverflow"),e.message=o(r,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,e;if(t.step&&1!==t.step){const i=(a-t.min)%t.step!=0;if(i||(r-t.min)%t.step!=0)return e.isValid=!1,e.invalidKeys.push("stepMismatch"),e.message=o(i?a:r,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,e}}else{const a=t.value;if(a<t.min)return e.isValid=!1,e.invalidKeys.push("rangeUnderflow"),e.message=o(a,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,e;if(a>t.max)return e.isValid=!1,e.invalidKeys.push("rangeOverflow"),e.message=o(a,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,e;if(t.step&&1!==t.step&&(a-t.min)%t.step!=0)return e.isValid=!1,e.invalidKeys.push("stepMismatch"),e.message=o(a,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,e}return e}}]}get focusableAnchor(){return this.isRange&&this.thumbMin||this.slider}get validationTarget(){return this.focusableAnchor}get value(){return Ve(this.valueHasChanged?this._value??this.minValue??0:this._value??this.defaultValue,this.min,this.max)}set value(t){this._value!==(t=Number(t)??this.minValue)&&(this.valueHasChanged=!0,this._value=t)}get isRange(){return this.range}handleSizeChange(){Lt(this.localName,this.size)}firstUpdated(){this.isRange?(this.draggableThumbMin=new di(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then((()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new di(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then((()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new di(this.track,{start:(t,e)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted="min"===this.activeThumb?this.minValue:this.maxValue;else{const o=this.getValueFromCoordinates(t,e),a=Math.abs(o-this.minValue),r=Math.abs(o-this.maxValue);if(a===r)if(o>this.maxValue)this.activeThumb="max";else if(o<this.minValue)this.activeThumb="min";else{const o="rtl"===this.localize.dir(),a="vertical"===this.orientation,r=a?e:t,i=this.lastTrackPosition||r;this.lastTrackPosition=r,this.activeThumb=r>i!==o&&!a||r<i&&a?"max":"min"}else this.activeThumb=a<=r?"min":"max";this.valueWhenDraggingStarted="min"===this.activeThumb?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(t,e,this.activeThumb),this.showRangeTooltips()},move:(t,e)=>{this.activeThumb&&this.setThumbValueFromCoordinates(t,e,this.activeThumb)},stop:()=>{this.activeThumb&&("min"===this.activeThumb?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then((()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new di(this.slider,{start:(t,e)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(t,e),this.showTooltip()},move:(t,e)=>{this.setValueFromCoordinates(t,e)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then((()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}willUpdate(t){this.isRange&&(t.has("minValue")||t.has("maxValue")||t.has("min")||t.has("max"))&&(this.minValue=Ve(this.minValue,this.min,this.maxValue),this.maxValue=Ve(this.maxValue,this.minValue,this.max)),super.willUpdate(t)}updated(t){if(this.isRange&&(t.has("minValue")||t.has("maxValue"))&&this.updateFormValue(),t.has("disabled")||t.has("readonly")){const t=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(t),this.draggableThumbMax&&this.draggableThumbMax.toggle(t)),this.draggableTrack&&this.draggableTrack.toggle(t)}super.updated(t)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??this.min+""),this.maxValue=parseFloat(this.getAttribute("max-value")??this.max+"")):(this._value=null,this.defaultValue=this.defaultValue??parseFloat(this.getAttribute("value")??this.min+"")),this.valueHasChanged=!1,this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(t){const e=((this.step+"").split(".")[1]||"").replace(/0+$/g,"").length,o=Number(this.step),a=Number(this.min),r=Number(this.max);return t=Ve(t=Math.round(t/o)*o,a,r),parseFloat(t.toFixed(e))}getPercentageFromValue(t){return(t-this.min)/(this.max-this.min)*100}getValueFromCoordinates(t,e){const o="rtl"===this.localize.dir(),a="vertical"===this.orientation,{top:r,right:i,bottom:n,left:s,height:l,width:c}=this.trackBoundingClientRect,h=a?e:t,d=a?{start:r,end:n,size:l}:{start:s,end:i,size:c};return this.clampAndRoundToStep(this.min+(a||o?d.end-h:h-d.start)/d.size*(this.max-this.min))}handleBlur(){this.isRange?requestAnimationFrame((()=>{const t=this.shadowRoot?.activeElement;t===this.thumbMin||t===this.thumbMax||this.hideRangeTooltips()})):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(t){const e=t.target;this.isRange?(e===this.thumbMin?this.activeThumb="min":e===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(t){const e="rtl"===this.localize.dir(),o=t.target;if(this.disabled||this.readonly)return;if(this.isRange&&(o===this.thumbMin?this.activeThumb="min":o===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;const a=this.isRange?"min"===this.activeThumb?this.minValue:this.maxValue:this.value;let r=a;switch(t.key){case"ArrowUp":case e?"ArrowLeft":"ArrowRight":t.preventDefault(),r=this.clampAndRoundToStep(a+this.step);break;case"ArrowDown":case e?"ArrowRight":"ArrowLeft":t.preventDefault(),r=this.clampAndRoundToStep(a-this.step);break;case"Home":t.preventDefault(),r=this.isRange&&"min"===this.activeThumb?this.min:this.isRange?this.minValue:this.min;break;case"End":t.preventDefault(),r=this.isRange&&"max"===this.activeThumb?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":t.preventDefault(),r=this.clampAndRoundToStep(Math.max(a+(this.max-this.min)/10,a+this.step));break;case"PageDown":t.preventDefault(),r=this.clampAndRoundToStep(Math.min(a-(this.max-this.min)/10,a-this.step));break;case"Enter":return void Ia(t,this)}r!==a&&(this.isRange?("min"===this.activeThumb?r>this.maxValue?(this.maxValue=r,this.minValue=r):this.minValue=Math.max(this.min,r):r<this.minValue?(this.minValue=r,this.maxValue=r):this.maxValue=Math.min(this.max,r),this.updateFormValue()):this.value=Ve(r,this.min,this.max),this.updateComplete.then((()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.hasInteracted=!0)}handleLabelPointerDown(t){t.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(t,e){const o=this.value;this.value=this.getValueFromCoordinates(t,e),this.value!==o&&this.updateComplete.then((()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}setThumbValueFromCoordinates(t,e,o){const a=this.getValueFromCoordinates(t,e),r="min"===o?this.minValue:this.maxValue;"min"===o?a>this.maxValue?(this.maxValue=a,this.minValue=a):this.minValue=Math.max(this.min,a):a<this.minValue?(this.minValue=a,this.maxValue=a):this.maxValue=Math.min(this.max,a),r!==("min"===o?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then((()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");"min"===this.activeThumb?(t&&(t.open=!0),e&&(e.open=!1)):"max"===this.activeThumb&&(e&&(e.open=!0),t&&(t.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");t&&(t.open=!1),e&&(e.open=!1)}updateFormValue(t){if(this.isRange){const t=new FormData;return t.append(this.name||"",this.minValue+""),t.append(this.name||"",this.maxValue+""),void this.setValue(t,t)}super.updateFormValue(t)}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){if(this.isRange)for(const t of Ie()){if(t===this.thumbMin){this.thumbMin.blur();break}if(t===this.thumbMax){this.thumbMax.blur();break}}else this.slider.blur()}stepDown(){if(this.isRange){const t=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=Ve(t,this.min,this.maxValue),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value-this.step);this.value=t}}stepUp(){if(this.isRange){const t=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=Ve(t,this.minValue,this.max),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value+this.step);this.value=t}}render(){const t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),o=!!this.label||!!t,a=!!this.hint||!!e,r=this.hasSlotController.test("reference"),i=Yt({xs:"xs"===this.size,s:"s"===this.size||"small"===this.size,m:"m"===this.size||"medium"===this.size,l:"l"===this.size||"large"===this.size,xl:"xl"===this.size,small:"small"===this.size||"s"===this.size,medium:"medium"===this.size||"m"===this.size,large:"large"===this.size||"l"===this.size,horizontal:"horizontal"===this.orientation,vertical:"vertical"===this.orientation,disabled:this.disabled}),n=[];if(this.withMarkers)for(let t=this.min;t<=this.max;t+=this.step)n.push(this.getPercentageFromValue(t));const s=X`
      <label
        id="label"
        part="label"
        for=${this.isRange?"thumb-min":"text-box"}
        class=${Yt({vh:!o,"has-label":o})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,l=X`
      <div
        id="hint"
        part="hint"
        class=${Yt({"has-slotted":a})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,c=this.withMarkers?X`
          <div id="markers" part="markers">
            ${n.map((t=>X`<span part="marker" class="marker" style=${si({"--position":t+"%"})}></span>`))}
          </div>
        `:"",h=r?X`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:"",d=(t,e)=>this.withTooltip?X`
            <wa-tooltip
              id=${"tooltip"+("thumb"!==t?"-"+t:"")}
              part="tooltip"
              exportparts="
                base:tooltip__base,
                body:tooltip__body,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${t}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${"function"==typeof this.valueFormatter?this.valueFormatter(e):this.localize.number(e)}
              </span>
            </wa-tooltip>
          `:"";if(this.isRange){const t=Ve(this.getPercentageFromValue(this.minValue),0,100),e=Ve(this.getPercentageFromValue(this.maxValue),0,100);return X`
        ${s}

        <div id="slider" part="slider" class=${i}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${si({"--start":Math.min(t,e)+"%","--end":Math.max(t,e)+"%"})}
            ></div>

            ${c}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style=${si({"--position":t+"%"})}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.minValue}
              aria-valuetext=${"function"==typeof this.valueFormatter?this.valueFormatter(this.minValue):this.localize.number(this.minValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?this.label+" (minimum value)":"Minimum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>

            <span
              id="thumb-max"
              part="thumb thumb-max"
              style=${si({"--position":e+"%"})}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.maxValue}
              aria-valuetext=${"function"==typeof this.valueFormatter?this.valueFormatter(this.maxValue):this.localize.number(this.maxValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?this.label+" (maximum value)":"Maximum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>
          </div>

          ${h} ${l}
        </div>

        ${d("thumb-min",this.minValue)} ${d("thumb-max",this.maxValue)}
      `}{const t=Ve(this.getPercentageFromValue(this.value),0,100),e=Ve(this.getPercentageFromValue("number"==typeof this.indicatorOffset?this.indicatorOffset:this.min),0,100);return X`
        ${s}

        <div
          id="slider"
          part="slider"
          class=${i}
          role="slider"
          aria-disabled=${this.disabled?"true":"false"}
          aria-readonly=${this.disabled?"true":"false"}
          aria-orientation=${this.orientation}
          aria-valuemin=${this.min}
          aria-valuenow=${this.value}
          aria-valuetext=${"function"==typeof this.valueFormatter?this.valueFormatter(this.value):this.localize.number(this.value)}
          aria-valuemax=${this.max}
          aria-labelledby="label"
          aria-describedby="hint"
          tabindex=${this.disabled?-1:0}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        >
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${si({"--start":e+"%","--end":t+"%"})}
            ></div>

            ${c}
            <span id="thumb" part="thumb" style=${si({"--position":t+"%"})}></span>
          </div>

          ${h} ${l}
        </div>

        ${d("thumb",this.value)}
      `}}};ui.formAssociated=!0,ui.observeSlots=!0,ui.css=[At,_a,ci],i([gt("#slider")],ui.prototype,"slider",2),i([gt("#thumb")],ui.prototype,"thumb",2),i([gt("#thumb-min")],ui.prototype,"thumbMin",2),i([gt("#thumb-max")],ui.prototype,"thumbMax",2),i([gt("#track")],ui.prototype,"track",2),i([gt("#tooltip")],ui.prototype,"tooltip",2),i([mt()],ui.prototype,"label",2),i([mt({attribute:"hint"})],ui.prototype,"hint",2),i([mt({reflect:!0})],ui.prototype,"name",2),i([mt({type:Number,attribute:"min-value"})],ui.prototype,"minValue",2),i([mt({type:Number,attribute:"max-value"})],ui.prototype,"maxValue",2),i([mt({attribute:"value",reflect:!0,type:Number})],ui.prototype,"defaultValue",2),i([bt()],ui.prototype,"value",1),i([mt({type:Boolean,reflect:!0})],ui.prototype,"range",2),i([mt({type:Boolean})],ui.prototype,"disabled",2),i([mt({type:Boolean,reflect:!0})],ui.prototype,"readonly",2),i([mt({reflect:!0})],ui.prototype,"orientation",2),i([mt({reflect:!0})],ui.prototype,"size",2),i([Bt("size")],ui.prototype,"handleSizeChange",1),i([mt({attribute:"indicator-offset",type:Number})],ui.prototype,"indicatorOffset",2),i([mt({type:Number})],ui.prototype,"min",2),i([mt({type:Number})],ui.prototype,"max",2),i([mt({type:Number})],ui.prototype,"step",2),i([mt({type:Boolean})],ui.prototype,"autofocus",2),i([mt({attribute:"tooltip-distance",type:Number})],ui.prototype,"tooltipDistance",2),i([mt({attribute:"tooltip-placement",reflect:!0})],ui.prototype,"tooltipPlacement",2),i([mt({attribute:"with-markers",type:Boolean})],ui.prototype,"withMarkers",2),i([mt({attribute:"with-tooltip",type:Boolean})],ui.prototype,"withTooltip",2),i([mt({attribute:"with-label",type:Boolean})],ui.prototype,"withLabel",2),i([mt({attribute:"with-hint",type:Boolean})],ui.prototype,"withHint",2),i([mt({attribute:!1})],ui.prototype,"valueFormatter",2),ui=i([wt("wa-slider")],ui);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var wi=class extends Event{constructor(t){super("wa-copy",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},fi=u`
  :host {
    display: inline-block;
    color: var(--wa-color-neutral-on-quiet);
  }

  .copy-button__trigger {
    position: relative;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    border-radius: var(--wa-form-control-border-radius);
    color: inherit;
    font-size: inherit;
    height: calc(var(--wa-form-control-height) * 0.8);
    aspect-ratio: 1;
    cursor: pointer;
    transition-property: background-color, color;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
  }

  @media (hover: hover) {
    .button:hover:not([disabled]) {
      background-color: var(--wa-color-neutral-fill-quiet);
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  .button:focus-visible:not([disabled]) {
    background-color: var(--wa-color-neutral-fill-quiet);
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
  }

  .button:active:not([disabled]) {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }

  /* Icon swap animation */
  .show {
    animation: copy-button-icon-show var(--wa-transition-fast) var(--wa-transition-easing);
  }

  .hide {
    animation: copy-button-icon-show var(--wa-transition-fast) var(--wa-transition-easing) reverse;
  }

  @keyframes copy-button-icon-show {
    from {
      scale: 0.25;
      opacity: 0.25;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .show,
    .hide {
      animation-duration: 1ms;
    }
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,pi="wa-internal-tooltip",mi="__waCopyButtonAssignedId",bi=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.isCopying=!1,this.status="rest",this.hasCustomTrigger=!1,this.liveAnnouncement="",this.customTriggerEl=null,this.lightTooltip=null,this.feedbackTimeout=null,this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.tooltip="full",this.handleDefaultSlotChange=()=>{const t=(this.defaultSlot?.assignedElements({flatten:!0})??[]).find((t=>t instanceof HTMLElement))??null;t!==this.customTriggerEl&&(this.releaseAssignedId(this.customTriggerEl),this.customTriggerEl=t),this.hasCustomTrigger=null!==t,t&&"none"!==this.tooltip?(t.id||(t.id=He("wa-copy-button-trigger-"),t[mi]=!0),this.ensureLightTooltip()):this.removeLightTooltip()}}get activeTooltip(){return this.lightTooltip??this.shadowTooltip??null}get currentLabel(){return"success"===this.status?this.successLabel||this.localize.term("copied"):"error"===this.status?this.errorLabel||this.localize.term("error"):this.copyLabel||this.localize.term("copy")}firstUpdated(){this.didSSR?this.updateComplete.then((()=>{this.handleDefaultSlotChange()})):this.handleDefaultSlotChange()}disconnectedCallback(){super.disconnectedCallback(),this.removeLightTooltip()}handleStatusChange(){this.customStates.set("success","success"===this.status),this.customStates.set("error","error"===this.status),this.syncTooltipText(),this.liveAnnouncement="success"===this.status||"error"===this.status?this.currentLabel:""}handleLabelChange(){this.syncTooltipText()}handleTooltipOptionsChange(){this.lightTooltip&&(this.lightTooltip.placement=this.tooltipPlacement,this.lightTooltip.disabled=this.disabled)}handleTooltipModeChange(t){"none"===this.tooltip?this.removeLightTooltip():"none"===t?this.handleDefaultSlotChange():this.lightTooltip&&this.lightTooltip.setAttribute("trigger","copy"===this.tooltip?"manual":"hover focus")}releaseAssignedId(t){t&&t[mi]&&(t.removeAttribute("id"),delete t[mi])}ensureLightTooltip(){if(!this.customTriggerEl)return;const t="copy"===this.tooltip?"manual":"hover focus";if(this.lightTooltip)this.lightTooltip.setAttribute("for",this.customTriggerEl.id),this.lightTooltip.setAttribute("trigger",t),this.lightTooltip.placement=this.tooltipPlacement,this.lightTooltip.disabled=this.disabled,this.lightTooltip.textContent=this.currentLabel;else{const e=document.createElement("wa-tooltip");e.setAttribute("slot",pi),e.setAttribute("part","feedback"),e.setAttribute("trigger",t),e.dataset.copyButtonTooltip="",e.setAttribute("for",this.customTriggerEl.id),e.placement=this.tooltipPlacement,e.disabled=this.disabled,e.textContent=this.currentLabel,this.appendChild(e),this.lightTooltip=e}}removeLightTooltip(){this.lightTooltip&&(this.releaseAssignedId(this.customTriggerEl),this.lightTooltip.remove(),this.lightTooltip=null)}syncTooltipText(){this.lightTooltip&&(this.lightTooltip.textContent=this.currentLabel)}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),o=this.from.includes("."),a=this.from.includes("[")&&this.from.includes("]");let r=this.from,i="";o?[r,i]=this.from.trim().split("."):a&&([r,i]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in e?e.getElementById(r):null;n?t=a?n.getAttribute(i)||"":o?n[i]||"":n.textContent||"":(this.showStatus("error"),this.dispatchEvent(new oe))}if(t)try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.dispatchEvent(new wi({value:t}))}catch(t){this.showStatus("error"),this.dispatchEvent(new oe)}else this.showStatus("error"),this.dispatchEvent(new oe)}async showStatus(t){if(this.status=t,this.copyIcon){const e="success"===t?this.successIcon:this.errorIcon;await Xe(this.copyIcon,"hide"),this.copyIcon.hidden=!0,e.hidden=!1,await Xe(e,"show")}await this.updateComplete;const e="none"===this.tooltip?null:this.activeTooltip;let o=null;e&&(e.show(),o=new Promise((t=>{e.addEventListener("wa-after-hide",(()=>{null!==this.feedbackTimeout&&(clearTimeout(this.feedbackTimeout),this.feedbackTimeout=null),t()}),{once:!0})})),this.feedbackTimeout=window.setTimeout((async()=>{this.feedbackTimeout=null,await e.hide()}),this.feedbackDuration)),setTimeout((async()=>{if(o&&await o,this.copyIcon){const e="success"===t?this.successIcon:this.errorIcon;await Xe(e,"hide"),e.hidden=!0,this.copyIcon.hidden=!1,await Xe(this.copyIcon,"show")}this.status="rest",this.isCopying=!1}),this.feedbackDuration)}render(){let t=!this.hasCustomTrigger&&"none"!==this.tooltip;return this.didSSR&&!this.hasUpdated&&(t=!1),X`
      <div class="copy-button__trigger" @click=${this.handleCopy}>
        <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        <button
          class="button"
          part="button"
          type="button"
          id="copy-button"
          aria-label=${this.currentLabel}
          ?disabled=${this.disabled}
          ?hidden=${this.hasCustomTrigger}
        >
          <slot part="copy-icon" name="copy-icon">
            <wa-icon library="system" name="copy" variant="regular"></wa-icon>
          </slot>
          <slot part="success-icon" name="success-icon" variant="solid" hidden>
            <wa-icon library="system" name="check"></wa-icon>
          </slot>
          <slot part="error-icon" name="error-icon" variant="solid" hidden>
            <wa-icon library="system" name="xmark"></wa-icon>
          </slot>
        </button>

        ${t?X`
              <wa-tooltip
                part="feedback"
                for="copy-button"
                placement=${this.tooltipPlacement}
                trigger=${"copy"===this.tooltip?"manual":"hover focus"}
                class=${Yt({"copy-button-tooltip":!0,"copy-button-tooltip-success":"success"===this.status,"copy-button-tooltip-error":"error"===this.status})}
                ?disabled=${this.disabled}
                >${this.currentLabel}</wa-tooltip
              >
            `:""}
        <slot name="${pi}"></slot>
        <div class="wa-visually-hidden" role="status" aria-live="polite">${this.liveAnnouncement}</div>
      </div>
    `}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */bi.css=[xt,Rr,fi],i([gt('slot[name="copy-icon"]')],bi.prototype,"copyIcon",2),i([gt('slot[name="success-icon"]')],bi.prototype,"successIcon",2),i([gt('slot[name="error-icon"]')],bi.prototype,"errorIcon",2),i([gt("slot:not([name])")],bi.prototype,"defaultSlot",2),i([gt('wa-tooltip[part="feedback"]')],bi.prototype,"shadowTooltip",2),i([bt()],bi.prototype,"isCopying",2),i([bt()],bi.prototype,"status",2),i([bt()],bi.prototype,"hasCustomTrigger",2),i([bt()],bi.prototype,"liveAnnouncement",2),i([mt()],bi.prototype,"value",2),i([mt()],bi.prototype,"from",2),i([mt({type:Boolean,reflect:!0})],bi.prototype,"disabled",2),i([mt({attribute:"copy-label"})],bi.prototype,"copyLabel",2),i([mt({attribute:"success-label"})],bi.prototype,"successLabel",2),i([mt({attribute:"error-label"})],bi.prototype,"errorLabel",2),i([mt({attribute:"feedback-duration",type:Number})],bi.prototype,"feedbackDuration",2),i([mt({attribute:"tooltip-placement",reflect:!0})],bi.prototype,"tooltipPlacement",2),i([mt({reflect:!0})],bi.prototype,"tooltip",2),i([Bt("status")],bi.prototype,"handleStatusChange",1),i([Bt(["copyLabel","successLabel","errorLabel"])],bi.prototype,"handleLabelChange",1),i([Bt(["tooltipPlacement","disabled"],{waitUntilFirstUpdate:!0})],bi.prototype,"handleTooltipOptionsChange",1),i([Bt("tooltip",{waitUntilFirstUpdate:!0})],bi.prototype,"handleTooltipModeChange",1),bi=i([wt("wa-copy-button")],bi);const vi=(()=>{})||(()=>{}),gi="@layer wa-native,wa-base,wa-utilities,wa-color-palette,wa-color-variant,wa-theme,wa-theme-dimension,wa-theme-overrides; @layer wa-base{wa-page :is(*,*:after,*:before){scroll-margin-top:var(--scroll-margin-top)}wa-page[view='desktop'] [data-toggle-nav]{display:none}wa-page[view='mobile'] .wa-desktop-only,wa-page[view='desktop'] .wa-mobile-only{display:none !important}}@layer wa-native,wa-base,wa-utilities,wa-color-palette,wa-color-variant,wa-theme,wa-theme-dimension,wa-theme-overrides; @layer wa-base{wa-page :is(*,*:after,*:before){scroll-margin-top:var(--scroll-margin-top)}wa-page[view='desktop'] [data-toggle-nav]{display:none}wa-page[view='mobile'] .wa-desktop-only,wa-page[view='desktop'] .wa-mobile-only{display:none !important}}@layer wa-color-variant{:where(:root),.wa-brand-blue{--wa-color-brand-95:var(--wa-color-blue-95);--wa-color-brand-90:var(--wa-color-blue-90);--wa-color-brand-80:var(--wa-color-blue-80);--wa-color-brand-70:var(--wa-color-blue-70);--wa-color-brand-60:var(--wa-color-blue-60);--wa-color-brand-50:var(--wa-color-blue-50);--wa-color-brand-40:var(--wa-color-blue-40);--wa-color-brand-30:var(--wa-color-blue-30);--wa-color-brand-20:var(--wa-color-blue-20);--wa-color-brand-10:var(--wa-color-blue-10);--wa-color-brand-05:var(--wa-color-blue-05);--wa-color-brand:var(--wa-color-blue);--wa-color-brand-on:var(--wa-color-blue-on)}.wa-brand-red{--wa-color-brand-95:var(--wa-color-red-95);--wa-color-brand-90:var(--wa-color-red-90);--wa-color-brand-80:var(--wa-color-red-80);--wa-color-brand-70:var(--wa-color-red-70);--wa-color-brand-60:var(--wa-color-red-60);--wa-color-brand-50:var(--wa-color-red-50);--wa-color-brand-40:var(--wa-color-red-40);--wa-color-brand-30:var(--wa-color-red-30);--wa-color-brand-20:var(--wa-color-red-20);--wa-color-brand-10:var(--wa-color-red-10);--wa-color-brand-05:var(--wa-color-red-05);--wa-color-brand:var(--wa-color-red);--wa-color-brand-on:var(--wa-color-red-on)}.wa-brand-orange{--wa-color-brand-95:var(--wa-color-orange-95);--wa-color-brand-90:var(--wa-color-orange-90);--wa-color-brand-80:var(--wa-color-orange-80);--wa-color-brand-70:var(--wa-color-orange-70);--wa-color-brand-60:var(--wa-color-orange-60);--wa-color-brand-50:var(--wa-color-orange-50);--wa-color-brand-40:var(--wa-color-orange-40);--wa-color-brand-30:var(--wa-color-orange-30);--wa-color-brand-20:var(--wa-color-orange-20);--wa-color-brand-10:var(--wa-color-orange-10);--wa-color-brand-05:var(--wa-color-orange-05);--wa-color-brand:var(--wa-color-orange);--wa-color-brand-on:var(--wa-color-orange-on)}.wa-brand-yellow{--wa-color-brand-95:var(--wa-color-yellow-95);--wa-color-brand-90:var(--wa-color-yellow-90);--wa-color-brand-80:var(--wa-color-yellow-80);--wa-color-brand-70:var(--wa-color-yellow-70);--wa-color-brand-60:var(--wa-color-yellow-60);--wa-color-brand-50:var(--wa-color-yellow-50);--wa-color-brand-40:var(--wa-color-yellow-40);--wa-color-brand-30:var(--wa-color-yellow-30);--wa-color-brand-20:var(--wa-color-yellow-20);--wa-color-brand-10:var(--wa-color-yellow-10);--wa-color-brand-05:var(--wa-color-yellow-05);--wa-color-brand:var(--wa-color-yellow);--wa-color-brand-on:var(--wa-color-yellow-on)}.wa-brand-green{--wa-color-brand-95:var(--wa-color-green-95);--wa-color-brand-90:var(--wa-color-green-90);--wa-color-brand-80:var(--wa-color-green-80);--wa-color-brand-70:var(--wa-color-green-70);--wa-color-brand-60:var(--wa-color-green-60);--wa-color-brand-50:var(--wa-color-green-50);--wa-color-brand-40:var(--wa-color-green-40);--wa-color-brand-30:var(--wa-color-green-30);--wa-color-brand-20:var(--wa-color-green-20);--wa-color-brand-10:var(--wa-color-green-10);--wa-color-brand-05:var(--wa-color-green-05);--wa-color-brand:var(--wa-color-green);--wa-color-brand-on:var(--wa-color-green-on)}.wa-brand-cyan{--wa-color-brand-95:var(--wa-color-cyan-95);--wa-color-brand-90:var(--wa-color-cyan-90);--wa-color-brand-80:var(--wa-color-cyan-80);--wa-color-brand-70:var(--wa-color-cyan-70);--wa-color-brand-60:var(--wa-color-cyan-60);--wa-color-brand-50:var(--wa-color-cyan-50);--wa-color-brand-40:var(--wa-color-cyan-40);--wa-color-brand-30:var(--wa-color-cyan-30);--wa-color-brand-20:var(--wa-color-cyan-20);--wa-color-brand-10:var(--wa-color-cyan-10);--wa-color-brand-05:var(--wa-color-cyan-05);--wa-color-brand:var(--wa-color-cyan);--wa-color-brand-on:var(--wa-color-cyan-on)}.wa-brand-indigo{--wa-color-brand-95:var(--wa-color-indigo-95);--wa-color-brand-90:var(--wa-color-indigo-90);--wa-color-brand-80:var(--wa-color-indigo-80);--wa-color-brand-70:var(--wa-color-indigo-70);--wa-color-brand-60:var(--wa-color-indigo-60);--wa-color-brand-50:var(--wa-color-indigo-50);--wa-color-brand-40:var(--wa-color-indigo-40);--wa-color-brand-30:var(--wa-color-indigo-30);--wa-color-brand-20:var(--wa-color-indigo-20);--wa-color-brand-10:var(--wa-color-indigo-10);--wa-color-brand-05:var(--wa-color-indigo-05);--wa-color-brand:var(--wa-color-indigo);--wa-color-brand-on:var(--wa-color-indigo-on)}.wa-brand-purple{--wa-color-brand-95:var(--wa-color-purple-95);--wa-color-brand-90:var(--wa-color-purple-90);--wa-color-brand-80:var(--wa-color-purple-80);--wa-color-brand-70:var(--wa-color-purple-70);--wa-color-brand-60:var(--wa-color-purple-60);--wa-color-brand-50:var(--wa-color-purple-50);--wa-color-brand-40:var(--wa-color-purple-40);--wa-color-brand-30:var(--wa-color-purple-30);--wa-color-brand-20:var(--wa-color-purple-20);--wa-color-brand-10:var(--wa-color-purple-10);--wa-color-brand-05:var(--wa-color-purple-05);--wa-color-brand:var(--wa-color-purple);--wa-color-brand-on:var(--wa-color-purple-on)}.wa-brand-pink{--wa-color-brand-95:var(--wa-color-pink-95);--wa-color-brand-90:var(--wa-color-pink-90);--wa-color-brand-80:var(--wa-color-pink-80);--wa-color-brand-70:var(--wa-color-pink-70);--wa-color-brand-60:var(--wa-color-pink-60);--wa-color-brand-50:var(--wa-color-pink-50);--wa-color-brand-40:var(--wa-color-pink-40);--wa-color-brand-30:var(--wa-color-pink-30);--wa-color-brand-20:var(--wa-color-pink-20);--wa-color-brand-10:var(--wa-color-pink-10);--wa-color-brand-05:var(--wa-color-pink-05);--wa-color-brand:var(--wa-color-pink);--wa-color-brand-on:var(--wa-color-pink-on)}.wa-brand-gray{--wa-color-brand-95:var(--wa-color-gray-95);--wa-color-brand-90:var(--wa-color-gray-90);--wa-color-brand-80:var(--wa-color-gray-80);--wa-color-brand-70:var(--wa-color-gray-70);--wa-color-brand-60:var(--wa-color-gray-60);--wa-color-brand-50:var(--wa-color-gray-50);--wa-color-brand-40:var(--wa-color-gray-40);--wa-color-brand-30:var(--wa-color-gray-30);--wa-color-brand-20:var(--wa-color-gray-20);--wa-color-brand-10:var(--wa-color-gray-10);--wa-color-brand-05:var(--wa-color-gray-05);--wa-color-brand:var(--wa-color-gray);--wa-color-brand-on:var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-neutral-gray{--wa-color-neutral-95:var(--wa-color-gray-95);--wa-color-neutral-90:var(--wa-color-gray-90);--wa-color-neutral-80:var(--wa-color-gray-80);--wa-color-neutral-70:var(--wa-color-gray-70);--wa-color-neutral-60:var(--wa-color-gray-60);--wa-color-neutral-50:var(--wa-color-gray-50);--wa-color-neutral-40:var(--wa-color-gray-40);--wa-color-neutral-30:var(--wa-color-gray-30);--wa-color-neutral-20:var(--wa-color-gray-20);--wa-color-neutral-10:var(--wa-color-gray-10);--wa-color-neutral-05:var(--wa-color-gray-05);--wa-color-neutral:var(--wa-color-gray);--wa-color-neutral-on:var(--wa-color-gray-on)}.wa-neutral-red{--wa-color-neutral-95:var(--wa-color-red-95);--wa-color-neutral-90:var(--wa-color-red-90);--wa-color-neutral-80:var(--wa-color-red-80);--wa-color-neutral-70:var(--wa-color-red-70);--wa-color-neutral-60:var(--wa-color-red-60);--wa-color-neutral-50:var(--wa-color-red-50);--wa-color-neutral-40:var(--wa-color-red-40);--wa-color-neutral-30:var(--wa-color-red-30);--wa-color-neutral-20:var(--wa-color-red-20);--wa-color-neutral-10:var(--wa-color-red-10);--wa-color-neutral-05:var(--wa-color-red-05);--wa-color-neutral:var(--wa-color-red);--wa-color-neutral-on:var(--wa-color-red-on)}.wa-neutral-orange{--wa-color-neutral-95:var(--wa-color-orange-95);--wa-color-neutral-90:var(--wa-color-orange-90);--wa-color-neutral-80:var(--wa-color-orange-80);--wa-color-neutral-70:var(--wa-color-orange-70);--wa-color-neutral-60:var(--wa-color-orange-60);--wa-color-neutral-50:var(--wa-color-orange-50);--wa-color-neutral-40:var(--wa-color-orange-40);--wa-color-neutral-30:var(--wa-color-orange-30);--wa-color-neutral-20:var(--wa-color-orange-20);--wa-color-neutral-10:var(--wa-color-orange-10);--wa-color-neutral-05:var(--wa-color-orange-05);--wa-color-neutral:var(--wa-color-orange);--wa-color-neutral-on:var(--wa-color-orange-on)}.wa-neutral-yellow{--wa-color-neutral-95:var(--wa-color-yellow-95);--wa-color-neutral-90:var(--wa-color-yellow-90);--wa-color-neutral-80:var(--wa-color-yellow-80);--wa-color-neutral-70:var(--wa-color-yellow-70);--wa-color-neutral-60:var(--wa-color-yellow-60);--wa-color-neutral-50:var(--wa-color-yellow-50);--wa-color-neutral-40:var(--wa-color-yellow-40);--wa-color-neutral-30:var(--wa-color-yellow-30);--wa-color-neutral-20:var(--wa-color-yellow-20);--wa-color-neutral-10:var(--wa-color-yellow-10);--wa-color-neutral-05:var(--wa-color-yellow-05);--wa-color-neutral:var(--wa-color-yellow);--wa-color-neutral-on:var(--wa-color-yellow-on)}.wa-neutral-green{--wa-color-neutral-95:var(--wa-color-green-95);--wa-color-neutral-90:var(--wa-color-green-90);--wa-color-neutral-80:var(--wa-color-green-80);--wa-color-neutral-70:var(--wa-color-green-70);--wa-color-neutral-60:var(--wa-color-green-60);--wa-color-neutral-50:var(--wa-color-green-50);--wa-color-neutral-40:var(--wa-color-green-40);--wa-color-neutral-30:var(--wa-color-green-30);--wa-color-neutral-20:var(--wa-color-green-20);--wa-color-neutral-10:var(--wa-color-green-10);--wa-color-neutral-05:var(--wa-color-green-05);--wa-color-neutral:var(--wa-color-green);--wa-color-neutral-on:var(--wa-color-green-on)}.wa-neutral-cyan{--wa-color-neutral-95:var(--wa-color-cyan-95);--wa-color-neutral-90:var(--wa-color-cyan-90);--wa-color-neutral-80:var(--wa-color-cyan-80);--wa-color-neutral-70:var(--wa-color-cyan-70);--wa-color-neutral-60:var(--wa-color-cyan-60);--wa-color-neutral-50:var(--wa-color-cyan-50);--wa-color-neutral-40:var(--wa-color-cyan-40);--wa-color-neutral-30:var(--wa-color-cyan-30);--wa-color-neutral-20:var(--wa-color-cyan-20);--wa-color-neutral-10:var(--wa-color-cyan-10);--wa-color-neutral-05:var(--wa-color-cyan-05);--wa-color-neutral:var(--wa-color-cyan);--wa-color-neutral-on:var(--wa-color-cyan-on)}.wa-neutral-blue{--wa-color-neutral-95:var(--wa-color-blue-95);--wa-color-neutral-90:var(--wa-color-blue-90);--wa-color-neutral-80:var(--wa-color-blue-80);--wa-color-neutral-70:var(--wa-color-blue-70);--wa-color-neutral-60:var(--wa-color-blue-60);--wa-color-neutral-50:var(--wa-color-blue-50);--wa-color-neutral-40:var(--wa-color-blue-40);--wa-color-neutral-30:var(--wa-color-blue-30);--wa-color-neutral-20:var(--wa-color-blue-20);--wa-color-neutral-10:var(--wa-color-blue-10);--wa-color-neutral-05:var(--wa-color-blue-05);--wa-color-neutral:var(--wa-color-blue);--wa-color-neutral-on:var(--wa-color-blue-on)}.wa-neutral-indigo{--wa-color-neutral-95:var(--wa-color-indigo-95);--wa-color-neutral-90:var(--wa-color-indigo-90);--wa-color-neutral-80:var(--wa-color-indigo-80);--wa-color-neutral-70:var(--wa-color-indigo-70);--wa-color-neutral-60:var(--wa-color-indigo-60);--wa-color-neutral-50:var(--wa-color-indigo-50);--wa-color-neutral-40:var(--wa-color-indigo-40);--wa-color-neutral-30:var(--wa-color-indigo-30);--wa-color-neutral-20:var(--wa-color-indigo-20);--wa-color-neutral-10:var(--wa-color-indigo-10);--wa-color-neutral-05:var(--wa-color-indigo-05);--wa-color-neutral:var(--wa-color-indigo);--wa-color-neutral-on:var(--wa-color-indigo-on)}.wa-neutral-purple{--wa-color-neutral-95:var(--wa-color-purple-95);--wa-color-neutral-90:var(--wa-color-purple-90);--wa-color-neutral-80:var(--wa-color-purple-80);--wa-color-neutral-70:var(--wa-color-purple-70);--wa-color-neutral-60:var(--wa-color-purple-60);--wa-color-neutral-50:var(--wa-color-purple-50);--wa-color-neutral-40:var(--wa-color-purple-40);--wa-color-neutral-30:var(--wa-color-purple-30);--wa-color-neutral-20:var(--wa-color-purple-20);--wa-color-neutral-10:var(--wa-color-purple-10);--wa-color-neutral-05:var(--wa-color-purple-05);--wa-color-neutral:var(--wa-color-purple);--wa-color-neutral-on:var(--wa-color-purple-on)}.wa-neutral-pink{--wa-color-neutral-95:var(--wa-color-pink-95);--wa-color-neutral-90:var(--wa-color-pink-90);--wa-color-neutral-80:var(--wa-color-pink-80);--wa-color-neutral-70:var(--wa-color-pink-70);--wa-color-neutral-60:var(--wa-color-pink-60);--wa-color-neutral-50:var(--wa-color-pink-50);--wa-color-neutral-40:var(--wa-color-pink-40);--wa-color-neutral-30:var(--wa-color-pink-30);--wa-color-neutral-20:var(--wa-color-pink-20);--wa-color-neutral-10:var(--wa-color-pink-10);--wa-color-neutral-05:var(--wa-color-pink-05);--wa-color-neutral:var(--wa-color-pink);--wa-color-neutral-on:var(--wa-color-pink-on)}}@layer wa-color-variant{:where(:root),.wa-success-green{--wa-color-success-95:var(--wa-color-green-95);--wa-color-success-90:var(--wa-color-green-90);--wa-color-success-80:var(--wa-color-green-80);--wa-color-success-70:var(--wa-color-green-70);--wa-color-success-60:var(--wa-color-green-60);--wa-color-success-50:var(--wa-color-green-50);--wa-color-success-40:var(--wa-color-green-40);--wa-color-success-30:var(--wa-color-green-30);--wa-color-success-20:var(--wa-color-green-20);--wa-color-success-10:var(--wa-color-green-10);--wa-color-success-05:var(--wa-color-green-05);--wa-color-success:var(--wa-color-green);--wa-color-success-on:var(--wa-color-green-on)}.wa-success-red{--wa-color-success-95:var(--wa-color-red-95);--wa-color-success-90:var(--wa-color-red-90);--wa-color-success-80:var(--wa-color-red-80);--wa-color-success-70:var(--wa-color-red-70);--wa-color-success-60:var(--wa-color-red-60);--wa-color-success-50:var(--wa-color-red-50);--wa-color-success-40:var(--wa-color-red-40);--wa-color-success-30:var(--wa-color-red-30);--wa-color-success-20:var(--wa-color-red-20);--wa-color-success-10:var(--wa-color-red-10);--wa-color-success-05:var(--wa-color-red-05);--wa-color-success:var(--wa-color-red);--wa-color-success-on:var(--wa-color-red-on)}.wa-success-orange{--wa-color-success-95:var(--wa-color-orange-95);--wa-color-success-90:var(--wa-color-orange-90);--wa-color-success-80:var(--wa-color-orange-80);--wa-color-success-70:var(--wa-color-orange-70);--wa-color-success-60:var(--wa-color-orange-60);--wa-color-success-50:var(--wa-color-orange-50);--wa-color-success-40:var(--wa-color-orange-40);--wa-color-success-30:var(--wa-color-orange-30);--wa-color-success-20:var(--wa-color-orange-20);--wa-color-success-10:var(--wa-color-orange-10);--wa-color-success-05:var(--wa-color-orange-05);--wa-color-success:var(--wa-color-orange);--wa-color-success-on:var(--wa-color-orange-on)}.wa-success-yellow{--wa-color-success-95:var(--wa-color-yellow-95);--wa-color-success-90:var(--wa-color-yellow-90);--wa-color-success-80:var(--wa-color-yellow-80);--wa-color-success-70:var(--wa-color-yellow-70);--wa-color-success-60:var(--wa-color-yellow-60);--wa-color-success-50:var(--wa-color-yellow-50);--wa-color-success-40:var(--wa-color-yellow-40);--wa-color-success-30:var(--wa-color-yellow-30);--wa-color-success-20:var(--wa-color-yellow-20);--wa-color-success-10:var(--wa-color-yellow-10);--wa-color-success-05:var(--wa-color-yellow-05);--wa-color-success:var(--wa-color-yellow);--wa-color-success-on:var(--wa-color-yellow-on)}.wa-success-cyan{--wa-color-success-95:var(--wa-color-cyan-95);--wa-color-success-90:var(--wa-color-cyan-90);--wa-color-success-80:var(--wa-color-cyan-80);--wa-color-success-70:var(--wa-color-cyan-70);--wa-color-success-60:var(--wa-color-cyan-60);--wa-color-success-50:var(--wa-color-cyan-50);--wa-color-success-40:var(--wa-color-cyan-40);--wa-color-success-30:var(--wa-color-cyan-30);--wa-color-success-20:var(--wa-color-cyan-20);--wa-color-success-10:var(--wa-color-cyan-10);--wa-color-success-05:var(--wa-color-cyan-05);--wa-color-success:var(--wa-color-cyan);--wa-color-success-on:var(--wa-color-cyan-on)}.wa-success-blue{--wa-color-success-95:var(--wa-color-blue-95);--wa-color-success-90:var(--wa-color-blue-90);--wa-color-success-80:var(--wa-color-blue-80);--wa-color-success-70:var(--wa-color-blue-70);--wa-color-success-60:var(--wa-color-blue-60);--wa-color-success-50:var(--wa-color-blue-50);--wa-color-success-40:var(--wa-color-blue-40);--wa-color-success-30:var(--wa-color-blue-30);--wa-color-success-20:var(--wa-color-blue-20);--wa-color-success-10:var(--wa-color-blue-10);--wa-color-success-05:var(--wa-color-blue-05);--wa-color-success:var(--wa-color-blue);--wa-color-success-on:var(--wa-color-blue-on)}.wa-success-indigo{--wa-color-success-95:var(--wa-color-indigo-95);--wa-color-success-90:var(--wa-color-indigo-90);--wa-color-success-80:var(--wa-color-indigo-80);--wa-color-success-70:var(--wa-color-indigo-70);--wa-color-success-60:var(--wa-color-indigo-60);--wa-color-success-50:var(--wa-color-indigo-50);--wa-color-success-40:var(--wa-color-indigo-40);--wa-color-success-30:var(--wa-color-indigo-30);--wa-color-success-20:var(--wa-color-indigo-20);--wa-color-success-10:var(--wa-color-indigo-10);--wa-color-success-05:var(--wa-color-indigo-05);--wa-color-success:var(--wa-color-indigo);--wa-color-success-on:var(--wa-color-indigo-on)}.wa-success-purple{--wa-color-success-95:var(--wa-color-purple-95);--wa-color-success-90:var(--wa-color-purple-90);--wa-color-success-80:var(--wa-color-purple-80);--wa-color-success-70:var(--wa-color-purple-70);--wa-color-success-60:var(--wa-color-purple-60);--wa-color-success-50:var(--wa-color-purple-50);--wa-color-success-40:var(--wa-color-purple-40);--wa-color-success-30:var(--wa-color-purple-30);--wa-color-success-20:var(--wa-color-purple-20);--wa-color-success-10:var(--wa-color-purple-10);--wa-color-success-05:var(--wa-color-purple-05);--wa-color-success:var(--wa-color-purple);--wa-color-success-on:var(--wa-color-purple-on)}.wa-success-pink{--wa-color-success-95:var(--wa-color-pink-95);--wa-color-success-90:var(--wa-color-pink-90);--wa-color-success-80:var(--wa-color-pink-80);--wa-color-success-70:var(--wa-color-pink-70);--wa-color-success-60:var(--wa-color-pink-60);--wa-color-success-50:var(--wa-color-pink-50);--wa-color-success-40:var(--wa-color-pink-40);--wa-color-success-30:var(--wa-color-pink-30);--wa-color-success-20:var(--wa-color-pink-20);--wa-color-success-10:var(--wa-color-pink-10);--wa-color-success-05:var(--wa-color-pink-05);--wa-color-success:var(--wa-color-pink);--wa-color-success-on:var(--wa-color-pink-on)}.wa-success-gray{--wa-color-success-95:var(--wa-color-gray-95);--wa-color-success-90:var(--wa-color-gray-90);--wa-color-success-80:var(--wa-color-gray-80);--wa-color-success-70:var(--wa-color-gray-70);--wa-color-success-60:var(--wa-color-gray-60);--wa-color-success-50:var(--wa-color-gray-50);--wa-color-success-40:var(--wa-color-gray-40);--wa-color-success-30:var(--wa-color-gray-30);--wa-color-success-20:var(--wa-color-gray-20);--wa-color-success-10:var(--wa-color-gray-10);--wa-color-success-05:var(--wa-color-gray-05);--wa-color-success:var(--wa-color-gray);--wa-color-success-on:var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-warning-yellow{--wa-color-warning-95:var(--wa-color-yellow-95);--wa-color-warning-90:var(--wa-color-yellow-90);--wa-color-warning-80:var(--wa-color-yellow-80);--wa-color-warning-70:var(--wa-color-yellow-70);--wa-color-warning-60:var(--wa-color-yellow-60);--wa-color-warning-50:var(--wa-color-yellow-50);--wa-color-warning-40:var(--wa-color-yellow-40);--wa-color-warning-30:var(--wa-color-yellow-30);--wa-color-warning-20:var(--wa-color-yellow-20);--wa-color-warning-10:var(--wa-color-yellow-10);--wa-color-warning-05:var(--wa-color-yellow-05);--wa-color-warning:var(--wa-color-yellow);--wa-color-warning-on:var(--wa-color-yellow-on)}.wa-warning-red{--wa-color-warning-95:var(--wa-color-red-95);--wa-color-warning-90:var(--wa-color-red-90);--wa-color-warning-80:var(--wa-color-red-80);--wa-color-warning-70:var(--wa-color-red-70);--wa-color-warning-60:var(--wa-color-red-60);--wa-color-warning-50:var(--wa-color-red-50);--wa-color-warning-40:var(--wa-color-red-40);--wa-color-warning-30:var(--wa-color-red-30);--wa-color-warning-20:var(--wa-color-red-20);--wa-color-warning-10:var(--wa-color-red-10);--wa-color-warning-05:var(--wa-color-red-05);--wa-color-warning:var(--wa-color-red);--wa-color-warning-on:var(--wa-color-red-on)}.wa-warning-orange{--wa-color-warning-95:var(--wa-color-orange-95);--wa-color-warning-90:var(--wa-color-orange-90);--wa-color-warning-80:var(--wa-color-orange-80);--wa-color-warning-70:var(--wa-color-orange-70);--wa-color-warning-60:var(--wa-color-orange-60);--wa-color-warning-50:var(--wa-color-orange-50);--wa-color-warning-40:var(--wa-color-orange-40);--wa-color-warning-30:var(--wa-color-orange-30);--wa-color-warning-20:var(--wa-color-orange-20);--wa-color-warning-10:var(--wa-color-orange-10);--wa-color-warning-05:var(--wa-color-orange-05);--wa-color-warning:var(--wa-color-orange);--wa-color-warning-on:var(--wa-color-orange-on)}.wa-warning-green{--wa-color-warning-95:var(--wa-color-green-95);--wa-color-warning-90:var(--wa-color-green-90);--wa-color-warning-80:var(--wa-color-green-80);--wa-color-warning-70:var(--wa-color-green-70);--wa-color-warning-60:var(--wa-color-green-60);--wa-color-warning-50:var(--wa-color-green-50);--wa-color-warning-40:var(--wa-color-green-40);--wa-color-warning-30:var(--wa-color-green-30);--wa-color-warning-20:var(--wa-color-green-20);--wa-color-warning-10:var(--wa-color-green-10);--wa-color-warning-05:var(--wa-color-green-05);--wa-color-warning:var(--wa-color-green);--wa-color-warning-on:var(--wa-color-green-on)}.wa-warning-cyan{--wa-color-warning-95:var(--wa-color-cyan-95);--wa-color-warning-90:var(--wa-color-cyan-90);--wa-color-warning-80:var(--wa-color-cyan-80);--wa-color-warning-70:var(--wa-color-cyan-70);--wa-color-warning-60:var(--wa-color-cyan-60);--wa-color-warning-50:var(--wa-color-cyan-50);--wa-color-warning-40:var(--wa-color-cyan-40);--wa-color-warning-30:var(--wa-color-cyan-30);--wa-color-warning-20:var(--wa-color-cyan-20);--wa-color-warning-10:var(--wa-color-cyan-10);--wa-color-warning-05:var(--wa-color-cyan-05);--wa-color-warning:var(--wa-color-cyan);--wa-color-warning-on:var(--wa-color-cyan-on)}.wa-warning-blue{--wa-color-warning-95:var(--wa-color-blue-95);--wa-color-warning-90:var(--wa-color-blue-90);--wa-color-warning-80:var(--wa-color-blue-80);--wa-color-warning-70:var(--wa-color-blue-70);--wa-color-warning-60:var(--wa-color-blue-60);--wa-color-warning-50:var(--wa-color-blue-50);--wa-color-warning-40:var(--wa-color-blue-40);--wa-color-warning-30:var(--wa-color-blue-30);--wa-color-warning-20:var(--wa-color-blue-20);--wa-color-warning-10:var(--wa-color-blue-10);--wa-color-warning-05:var(--wa-color-blue-05);--wa-color-warning:var(--wa-color-blue);--wa-color-warning-on:var(--wa-color-blue-on)}.wa-warning-indigo{--wa-color-warning-95:var(--wa-color-indigo-95);--wa-color-warning-90:var(--wa-color-indigo-90);--wa-color-warning-80:var(--wa-color-indigo-80);--wa-color-warning-70:var(--wa-color-indigo-70);--wa-color-warning-60:var(--wa-color-indigo-60);--wa-color-warning-50:var(--wa-color-indigo-50);--wa-color-warning-40:var(--wa-color-indigo-40);--wa-color-warning-30:var(--wa-color-indigo-30);--wa-color-warning-20:var(--wa-color-indigo-20);--wa-color-warning-10:var(--wa-color-indigo-10);--wa-color-warning-05:var(--wa-color-indigo-05);--wa-color-warning:var(--wa-color-indigo);--wa-color-warning-on:var(--wa-color-indigo-on)}.wa-warning-purple{--wa-color-warning-95:var(--wa-color-purple-95);--wa-color-warning-90:var(--wa-color-purple-90);--wa-color-warning-80:var(--wa-color-purple-80);--wa-color-warning-70:var(--wa-color-purple-70);--wa-color-warning-60:var(--wa-color-purple-60);--wa-color-warning-50:var(--wa-color-purple-50);--wa-color-warning-40:var(--wa-color-purple-40);--wa-color-warning-30:var(--wa-color-purple-30);--wa-color-warning-20:var(--wa-color-purple-20);--wa-color-warning-10:var(--wa-color-purple-10);--wa-color-warning-05:var(--wa-color-purple-05);--wa-color-warning:var(--wa-color-purple);--wa-color-warning-on:var(--wa-color-purple-on)}.wa-warning-pink{--wa-color-warning-95:var(--wa-color-pink-95);--wa-color-warning-90:var(--wa-color-pink-90);--wa-color-warning-80:var(--wa-color-pink-80);--wa-color-warning-70:var(--wa-color-pink-70);--wa-color-warning-60:var(--wa-color-pink-60);--wa-color-warning-50:var(--wa-color-pink-50);--wa-color-warning-40:var(--wa-color-pink-40);--wa-color-warning-30:var(--wa-color-pink-30);--wa-color-warning-20:var(--wa-color-pink-20);--wa-color-warning-10:var(--wa-color-pink-10);--wa-color-warning-05:var(--wa-color-pink-05);--wa-color-warning:var(--wa-color-pink);--wa-color-warning-on:var(--wa-color-pink-on)}.wa-warning-gray{--wa-color-warning-95:var(--wa-color-gray-95);--wa-color-warning-90:var(--wa-color-gray-90);--wa-color-warning-80:var(--wa-color-gray-80);--wa-color-warning-70:var(--wa-color-gray-70);--wa-color-warning-60:var(--wa-color-gray-60);--wa-color-warning-50:var(--wa-color-gray-50);--wa-color-warning-40:var(--wa-color-gray-40);--wa-color-warning-30:var(--wa-color-gray-30);--wa-color-warning-20:var(--wa-color-gray-20);--wa-color-warning-10:var(--wa-color-gray-10);--wa-color-warning-05:var(--wa-color-gray-05);--wa-color-warning:var(--wa-color-gray);--wa-color-warning-on:var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-danger-red{--wa-color-danger-95:var(--wa-color-red-95);--wa-color-danger-90:var(--wa-color-red-90);--wa-color-danger-80:var(--wa-color-red-80);--wa-color-danger-70:var(--wa-color-red-70);--wa-color-danger-60:var(--wa-color-red-60);--wa-color-danger-50:var(--wa-color-red-50);--wa-color-danger-40:var(--wa-color-red-40);--wa-color-danger-30:var(--wa-color-red-30);--wa-color-danger-20:var(--wa-color-red-20);--wa-color-danger-10:var(--wa-color-red-10);--wa-color-danger-05:var(--wa-color-red-05);--wa-color-danger:var(--wa-color-red);--wa-color-danger-on:var(--wa-color-red-on)}.wa-danger-orange{--wa-color-danger-95:var(--wa-color-orange-95);--wa-color-danger-90:var(--wa-color-orange-90);--wa-color-danger-80:var(--wa-color-orange-80);--wa-color-danger-70:var(--wa-color-orange-70);--wa-color-danger-60:var(--wa-color-orange-60);--wa-color-danger-50:var(--wa-color-orange-50);--wa-color-danger-40:var(--wa-color-orange-40);--wa-color-danger-30:var(--wa-color-orange-30);--wa-color-danger-20:var(--wa-color-orange-20);--wa-color-danger-10:var(--wa-color-orange-10);--wa-color-danger-05:var(--wa-color-orange-05);--wa-color-danger:var(--wa-color-orange);--wa-color-danger-on:var(--wa-color-orange-on)}.wa-danger-yellow{--wa-color-danger-95:var(--wa-color-yellow-95);--wa-color-danger-90:var(--wa-color-yellow-90);--wa-color-danger-80:var(--wa-color-yellow-80);--wa-color-danger-70:var(--wa-color-yellow-70);--wa-color-danger-60:var(--wa-color-yellow-60);--wa-color-danger-50:var(--wa-color-yellow-50);--wa-color-danger-40:var(--wa-color-yellow-40);--wa-color-danger-30:var(--wa-color-yellow-30);--wa-color-danger-20:var(--wa-color-yellow-20);--wa-color-danger-10:var(--wa-color-yellow-10);--wa-color-danger-05:var(--wa-color-yellow-05);--wa-color-danger:var(--wa-color-yellow);--wa-color-danger-on:var(--wa-color-yellow-on)}.wa-danger-green{--wa-color-danger-95:var(--wa-color-green-95);--wa-color-danger-90:var(--wa-color-green-90);--wa-color-danger-80:var(--wa-color-green-80);--wa-color-danger-70:var(--wa-color-green-70);--wa-color-danger-60:var(--wa-color-green-60);--wa-color-danger-50:var(--wa-color-green-50);--wa-color-danger-40:var(--wa-color-green-40);--wa-color-danger-30:var(--wa-color-green-30);--wa-color-danger-20:var(--wa-color-green-20);--wa-color-danger-10:var(--wa-color-green-10);--wa-color-danger-05:var(--wa-color-green-05);--wa-color-danger:var(--wa-color-green);--wa-color-danger-on:var(--wa-color-green-on)}.wa-danger-cyan{--wa-color-danger-95:var(--wa-color-cyan-95);--wa-color-danger-90:var(--wa-color-cyan-90);--wa-color-danger-80:var(--wa-color-cyan-80);--wa-color-danger-70:var(--wa-color-cyan-70);--wa-color-danger-60:var(--wa-color-cyan-60);--wa-color-danger-50:var(--wa-color-cyan-50);--wa-color-danger-40:var(--wa-color-cyan-40);--wa-color-danger-30:var(--wa-color-cyan-30);--wa-color-danger-20:var(--wa-color-cyan-20);--wa-color-danger-10:var(--wa-color-cyan-10);--wa-color-danger-05:var(--wa-color-cyan-05);--wa-color-danger:var(--wa-color-cyan);--wa-color-danger-on:var(--wa-color-cyan-on)}.wa-danger-blue{--wa-color-danger-95:var(--wa-color-blue-95);--wa-color-danger-90:var(--wa-color-blue-90);--wa-color-danger-80:var(--wa-color-blue-80);--wa-color-danger-70:var(--wa-color-blue-70);--wa-color-danger-60:var(--wa-color-blue-60);--wa-color-danger-50:var(--wa-color-blue-50);--wa-color-danger-40:var(--wa-color-blue-40);--wa-color-danger-30:var(--wa-color-blue-30);--wa-color-danger-20:var(--wa-color-blue-20);--wa-color-danger-10:var(--wa-color-blue-10);--wa-color-danger-05:var(--wa-color-blue-05);--wa-color-danger:var(--wa-color-blue);--wa-color-danger-on:var(--wa-color-blue-on)}.wa-danger-indigo{--wa-color-danger-95:var(--wa-color-indigo-95);--wa-color-danger-90:var(--wa-color-indigo-90);--wa-color-danger-80:var(--wa-color-indigo-80);--wa-color-danger-70:var(--wa-color-indigo-70);--wa-color-danger-60:var(--wa-color-indigo-60);--wa-color-danger-50:var(--wa-color-indigo-50);--wa-color-danger-40:var(--wa-color-indigo-40);--wa-color-danger-30:var(--wa-color-indigo-30);--wa-color-danger-20:var(--wa-color-indigo-20);--wa-color-danger-10:var(--wa-color-indigo-10);--wa-color-danger-05:var(--wa-color-indigo-05);--wa-color-danger:var(--wa-color-indigo);--wa-color-danger-on:var(--wa-color-indigo-on)}.wa-danger-purple{--wa-color-danger-95:var(--wa-color-purple-95);--wa-color-danger-90:var(--wa-color-purple-90);--wa-color-danger-80:var(--wa-color-purple-80);--wa-color-danger-70:var(--wa-color-purple-70);--wa-color-danger-60:var(--wa-color-purple-60);--wa-color-danger-50:var(--wa-color-purple-50);--wa-color-danger-40:var(--wa-color-purple-40);--wa-color-danger-30:var(--wa-color-purple-30);--wa-color-danger-20:var(--wa-color-purple-20);--wa-color-danger-10:var(--wa-color-purple-10);--wa-color-danger-05:var(--wa-color-purple-05);--wa-color-danger:var(--wa-color-purple);--wa-color-danger-on:var(--wa-color-purple-on)}.wa-danger-pink{--wa-color-danger-95:var(--wa-color-pink-95);--wa-color-danger-90:var(--wa-color-pink-90);--wa-color-danger-80:var(--wa-color-pink-80);--wa-color-danger-70:var(--wa-color-pink-70);--wa-color-danger-60:var(--wa-color-pink-60);--wa-color-danger-50:var(--wa-color-pink-50);--wa-color-danger-40:var(--wa-color-pink-40);--wa-color-danger-30:var(--wa-color-pink-30);--wa-color-danger-20:var(--wa-color-pink-20);--wa-color-danger-10:var(--wa-color-pink-10);--wa-color-danger-05:var(--wa-color-pink-05);--wa-color-danger:var(--wa-color-pink);--wa-color-danger-on:var(--wa-color-pink-on)}.wa-danger-gray{--wa-color-danger-95:var(--wa-color-gray-95);--wa-color-danger-90:var(--wa-color-gray-90);--wa-color-danger-80:var(--wa-color-gray-80);--wa-color-danger-70:var(--wa-color-gray-70);--wa-color-danger-60:var(--wa-color-gray-60);--wa-color-danger-50:var(--wa-color-gray-50);--wa-color-danger-40:var(--wa-color-gray-40);--wa-color-danger-30:var(--wa-color-gray-30);--wa-color-danger-20:var(--wa-color-gray-20);--wa-color-danger-10:var(--wa-color-gray-10);--wa-color-danger-05:var(--wa-color-gray-05);--wa-color-danger:var(--wa-color-gray);--wa-color-danger-on:var(--wa-color-gray-on)}}:where(:root),:host{--wa-color-red-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-red-key), 1) * 100%));--wa-color-orange-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-orange-key), 1) * 100%));--wa-color-yellow-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-yellow-key), 1) * 100%));--wa-color-green-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-green-key), 1) * 100%));--wa-color-cyan-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-cyan-key), 1) * 100%));--wa-color-blue-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-blue-key), 1) * 100%));--wa-color-indigo-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-indigo-key), 1) * 100%));--wa-color-purple-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-purple-key), 1) * 100%));--wa-color-pink-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-pink-key), 1) * 100%));--wa-color-gray-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-gray-key), 1) * 100%));--wa-color-red-on:color-mix(in oklab, var(--wa-color-red-10) var(--wa-color-red-gte-60), white);--wa-color-orange-on:color-mix(in oklab, var(--wa-color-orange-10) var(--wa-color-orange-gte-60), white);--wa-color-yellow-on:color-mix(in oklab, var(--wa-color-yellow-10) var(--wa-color-yellow-gte-60), white);--wa-color-green-on:color-mix(in oklab, var(--wa-color-green-10) var(--wa-color-green-gte-60), white);--wa-color-cyan-on:color-mix(in oklab, var(--wa-color-cyan-10) var(--wa-color-cyan-gte-60), white);--wa-color-blue-on:color-mix(in oklab, var(--wa-color-blue-10) var(--wa-color-blue-gte-60), white);--wa-color-indigo-on:color-mix(in oklab, var(--wa-color-indigo-10) var(--wa-color-indigo-gte-60), white);--wa-color-purple-on:color-mix(in oklab, var(--wa-color-purple-10) var(--wa-color-purple-gte-60), white);--wa-color-pink-on:color-mix(in oklab, var(--wa-color-pink-10) var(--wa-color-pink-gte-60), white);--wa-color-gray-on:color-mix(in oklab, var(--wa-color-gray-10) var(--wa-color-gray-gte-60), white)}@layer wa-color-palette{:where(:root),.wa-palette-default{--wa-color-red-95:#fff0ef ;--wa-color-red-90:#ffdedc ;--wa-color-red-80:#ffb8b6 ;--wa-color-red-70:#fd8f90 ;--wa-color-red-60:#f3676c ;--wa-color-red-50:#dc3146 ;--wa-color-red-40:#b30532 ;--wa-color-red-30:#8a132c ;--wa-color-red-20:#631323 ;--wa-color-red-10:#3e0913 ;--wa-color-red-05:#2a040b ;--wa-color-red:var(--wa-color-red-50);--wa-color-red-key:50;--wa-color-orange-95:#fff0e6 ;--wa-color-orange-90:#ffdfca ;--wa-color-orange-80:#ffbb94 ;--wa-color-orange-70:#ff9266 ;--wa-color-orange-60:#f46a45 ;--wa-color-orange-50:#cd491c ;--wa-color-orange-40:#9f3501 ;--wa-color-orange-30:#802700 ;--wa-color-orange-20:#601b00 ;--wa-color-orange-10:#3c0d00 ;--wa-color-orange-05:#280600 ;--wa-color-orange:var(--wa-color-orange-60);--wa-color-orange-key:60;--wa-color-yellow-95:#fef3cd ;--wa-color-yellow-90:#ffe495 ;--wa-color-yellow-80:#fac22b ;--wa-color-yellow-70:#ef9d00 ;--wa-color-yellow-60:#da7e00 ;--wa-color-yellow-50:#b45f04 ;--wa-color-yellow-40:#8c4602 ;--wa-color-yellow-30:#6f3601 ;--wa-color-yellow-20:#532600 ;--wa-color-yellow-10:#331600 ;--wa-color-yellow-05:#220c00 ;--wa-color-yellow:var(--wa-color-yellow-80);--wa-color-yellow-key:80;--wa-color-green-95:#e3f9e3 ;--wa-color-green-90:#c2f2c1 ;--wa-color-green-80:#93da98 ;--wa-color-green-70:#5dc36f ;--wa-color-green-60:#00ac49 ;--wa-color-green-50:#00883c ;--wa-color-green-40:#036730 ;--wa-color-green-30:#0a5027 ;--wa-color-green-20:#0a3a1d ;--wa-color-green-10:#052310 ;--wa-color-green-05:#031608 ;--wa-color-green:var(--wa-color-green-60);--wa-color-green-key:60;--wa-color-cyan-95:#e3f6fb ;--wa-color-cyan-90:#c5ecf7 ;--wa-color-cyan-80:#7fd6ec ;--wa-color-cyan-70:#2fbedc ;--wa-color-cyan-60:#00a3c0 ;--wa-color-cyan-50:#078098 ;--wa-color-cyan-40:#026274 ;--wa-color-cyan-30:#014c5b ;--wa-color-cyan-20:#003844 ;--wa-color-cyan-10:#002129 ;--wa-color-cyan-05:#00151b ;--wa-color-cyan:var(--wa-color-cyan-70);--wa-color-cyan-key:70;--wa-color-blue-95:#e8f3ff ;--wa-color-blue-90:#d1e8ff ;--wa-color-blue-80:#9fceff ;--wa-color-blue-70:#6eb3ff ;--wa-color-blue-60:#3e96ff ;--wa-color-blue-50:#0071ec ;--wa-color-blue-40:#0053c0 ;--wa-color-blue-30:#003f9c ;--wa-color-blue-20:#002d77 ;--wa-color-blue-10:#001a4e ;--wa-color-blue-05:#000f35 ;--wa-color-blue:var(--wa-color-blue-50);--wa-color-blue-key:50;--wa-color-indigo-95:#f0f2ff ;--wa-color-indigo-90:#dfe5ff ;--wa-color-indigo-80:#bcc7ff ;--wa-color-indigo-70:#9da9ff ;--wa-color-indigo-60:#808aff ;--wa-color-indigo-50:#6163f2 ;--wa-color-indigo-40:#4945cb ;--wa-color-indigo-30:#3933a7 ;--wa-color-indigo-20:#292381 ;--wa-color-indigo-10:#181255 ;--wa-color-indigo-05:#0d0a3a ;--wa-color-indigo:var(--wa-color-indigo-50);--wa-color-indigo-key:50;--wa-color-purple-95:#f7f0ff ;--wa-color-purple-90:#eedfff ;--wa-color-purple-80:#ddbdff ;--wa-color-purple-70:#ca99ff ;--wa-color-purple-60:#b678f5 ;--wa-color-purple-50:#9951db ;--wa-color-purple-40:#7936b3 ;--wa-color-purple-30:#612692 ;--wa-color-purple-20:#491870 ;--wa-color-purple-10:#2d0b48 ;--wa-color-purple-05:#1e0532 ;--wa-color-purple:var(--wa-color-purple-50);--wa-color-purple-key:50;--wa-color-pink-95:#feeff9 ;--wa-color-pink-90:#feddf0 ;--wa-color-pink-80:#fcb5d8 ;--wa-color-pink-70:#f78dbf ;--wa-color-pink-60:#e66ba3 ;--wa-color-pink-50:#c84382 ;--wa-color-pink-40:#9e2a6c ;--wa-color-pink-30:#7d1e58 ;--wa-color-pink-20:#5e1342 ;--wa-color-pink-10:#3c0828 ;--wa-color-pink-05:#28041a ;--wa-color-pink:var(--wa-color-pink-50);--wa-color-pink-key:50;--wa-color-gray-95:#f1f2f3 ;--wa-color-gray-90:#e4e5e9 ;--wa-color-gray-80:#c7c9d0 ;--wa-color-gray-70:#abaeb9 ;--wa-color-gray-60:#9194a2 ;--wa-color-gray-50:#717584 ;--wa-color-gray-40:#545868 ;--wa-color-gray-30:#424554 ;--wa-color-gray-20:#2f323f ;--wa-color-gray-10:#1b1d26 ;--wa-color-gray-05:#101219 ;--wa-color-gray:var(--wa-color-gray-40);--wa-color-gray-key:40}}@layer wa-theme{:where(:root),.wa-theme-default,.wa-light,.wa-dark .wa-invert,.wa-light .wa-theme-default,.wa-dark .wa-theme-default.wa-invert,.wa-dark .wa-theme-default .wa-invert{color-scheme:light;color:var(--wa-color-text-normal);--wa-color-surface-raised:white;--wa-color-surface-default:white;--wa-color-surface-lowered:var(--wa-color-neutral-95);--wa-color-surface-border:var(--wa-color-neutral-90);--wa-color-text-normal:var(--wa-color-neutral-10);--wa-color-text-quiet:var(--wa-color-neutral-40);--wa-color-text-link:var(--wa-color-brand-40);--wa-color-overlay-modal:color-mix(in oklab, var(--wa-color-neutral-05) 50%, transparent);--wa-color-overlay-inline:color-mix(in oklab, var(--wa-color-neutral-80) 25%, transparent);--wa-color-shadow:color-mix(\n      in oklab,\n      var(--wa-color-neutral-05) calc(var(--wa-shadow-blur-scale) * 4% + 8%),\n      transparent\n    );--wa-color-focus:var(--wa-color-brand-60);--wa-color-mix-hover:oklch(from currentColor calc(1 - l) c h) 10%;--wa-color-mix-active:var(--wa-color-surface-default) 10%;--wa-color-brand-fill-quiet:var(--wa-color-brand-95);--wa-color-brand-fill-normal:var(--wa-color-brand-90);--wa-color-brand-fill-loud:var(--wa-color-brand-50);--wa-color-brand-border-quiet:var(--wa-color-brand-90);--wa-color-brand-border-normal:var(--wa-color-brand-80);--wa-color-brand-border-loud:var(--wa-color-brand-60);--wa-color-brand-on-quiet:var(--wa-color-brand-40);--wa-color-brand-on-normal:var(--wa-color-brand-30);--wa-color-brand-on-loud:white;--wa-color-success-fill-quiet:var(--wa-color-success-95);--wa-color-success-fill-normal:var(--wa-color-success-90);--wa-color-success-fill-loud:var(--wa-color-success-50);--wa-color-success-border-quiet:var(--wa-color-success-90);--wa-color-success-border-normal:var(--wa-color-success-80);--wa-color-success-border-loud:var(--wa-color-success-60);--wa-color-success-on-quiet:var(--wa-color-success-40);--wa-color-success-on-normal:var(--wa-color-success-30);--wa-color-success-on-loud:white;--wa-color-warning-fill-quiet:var(--wa-color-warning-95);--wa-color-warning-fill-normal:var(--wa-color-warning-90);--wa-color-warning-fill-loud:var(--wa-color-warning-50);--wa-color-warning-border-quiet:var(--wa-color-warning-90);--wa-color-warning-border-normal:var(--wa-color-warning-80);--wa-color-warning-border-loud:var(--wa-color-warning-60);--wa-color-warning-on-quiet:var(--wa-color-warning-40);--wa-color-warning-on-normal:var(--wa-color-warning-30);--wa-color-warning-on-loud:white;--wa-color-danger-fill-quiet:var(--wa-color-danger-95);--wa-color-danger-fill-normal:var(--wa-color-danger-90);--wa-color-danger-fill-loud:var(--wa-color-danger-50);--wa-color-danger-border-quiet:var(--wa-color-danger-90);--wa-color-danger-border-normal:var(--wa-color-danger-80);--wa-color-danger-border-loud:var(--wa-color-danger-60);--wa-color-danger-on-quiet:var(--wa-color-danger-40);--wa-color-danger-on-normal:var(--wa-color-danger-30);--wa-color-danger-on-loud:white;--wa-color-neutral-fill-quiet:var(--wa-color-neutral-95);--wa-color-neutral-fill-normal:var(--wa-color-neutral-90);--wa-color-neutral-fill-loud:var(--wa-color-neutral-20);--wa-color-neutral-border-quiet:var(--wa-color-neutral-90);--wa-color-neutral-border-normal:var(--wa-color-neutral-80);--wa-color-neutral-border-loud:var(--wa-color-neutral-60);--wa-color-neutral-on-quiet:var(--wa-color-neutral-40);--wa-color-neutral-on-normal:var(--wa-color-neutral-30);--wa-color-neutral-on-loud:white;}.wa-dark,.wa-invert,.wa-dark .wa-theme-default,.wa-light .wa-theme-default.wa-invert,.wa-light .wa-theme-default .wa-invert{color-scheme:dark;color:var(--wa-color-text-normal);--wa-color-surface-raised:var(--wa-color-neutral-10);--wa-color-surface-default:var(--wa-color-neutral-05);--wa-color-surface-lowered:color-mix(in oklab, var(--wa-color-surface-default), black 20%);--wa-color-surface-border:var(--wa-color-neutral-20);--wa-color-text-normal:var(--wa-color-neutral-95);--wa-color-text-quiet:var(--wa-color-neutral-60);--wa-color-text-link:var(--wa-color-brand-70);--wa-color-overlay-modal:color-mix(in oklab, black 60%, transparent);--wa-color-overlay-inline:color-mix(in oklab, var(--wa-color-neutral-50) 10%, transparent);--wa-color-shadow:color-mix(\n      in oklab,\n      var(--wa-color-surface-lowered) calc(var(--wa-shadow-blur-scale) * 32% + 40%),\n      transparent\n    );--wa-color-focus:var(--wa-color-brand-60);--wa-color-mix-hover:oklch(from currentColor calc(1 - l) c h) 20%;--wa-color-mix-active:var(--wa-color-surface-default) 20%;--wa-color-brand-fill-quiet:var(--wa-color-brand-10);--wa-color-brand-fill-normal:var(--wa-color-brand-20);--wa-color-brand-fill-loud:var(--wa-color-brand-50);--wa-color-brand-border-quiet:var(--wa-color-brand-20);--wa-color-brand-border-normal:var(--wa-color-brand-30);--wa-color-brand-border-loud:var(--wa-color-brand-40);--wa-color-brand-on-quiet:var(--wa-color-brand-60);--wa-color-brand-on-normal:var(--wa-color-brand-70);--wa-color-brand-on-loud:white;--wa-color-success-fill-quiet:var(--wa-color-success-10);--wa-color-success-fill-normal:var(--wa-color-success-20);--wa-color-success-fill-loud:var(--wa-color-success-50);--wa-color-success-border-quiet:var(--wa-color-success-20);--wa-color-success-border-normal:var(--wa-color-success-30);--wa-color-success-border-loud:var(--wa-color-success-40);--wa-color-success-on-quiet:var(--wa-color-success-60);--wa-color-success-on-normal:var(--wa-color-success-70);--wa-color-success-on-loud:white;--wa-color-warning-fill-quiet:var(--wa-color-warning-10);--wa-color-warning-fill-normal:var(--wa-color-warning-20);--wa-color-warning-fill-loud:var(--wa-color-warning-50);--wa-color-warning-border-quiet:var(--wa-color-warning-20);--wa-color-warning-border-normal:var(--wa-color-warning-30);--wa-color-warning-border-loud:var(--wa-color-warning-40);--wa-color-warning-on-quiet:var(--wa-color-warning-60);--wa-color-warning-on-normal:var(--wa-color-warning-70);--wa-color-warning-on-loud:white;--wa-color-danger-fill-quiet:var(--wa-color-danger-10);--wa-color-danger-fill-normal:var(--wa-color-danger-20);--wa-color-danger-fill-loud:var(--wa-color-danger-50);--wa-color-danger-border-quiet:var(--wa-color-danger-20);--wa-color-danger-border-normal:var(--wa-color-danger-30);--wa-color-danger-border-loud:var(--wa-color-danger-40);--wa-color-danger-on-quiet:var(--wa-color-danger-60);--wa-color-danger-on-normal:var(--wa-color-danger-70);--wa-color-danger-on-loud:white;--wa-color-neutral-fill-quiet:var(--wa-color-neutral-10);--wa-color-neutral-fill-normal:var(--wa-color-neutral-20);--wa-color-neutral-fill-loud:var(--wa-color-neutral-90);--wa-color-neutral-border-quiet:var(--wa-color-neutral-20);--wa-color-neutral-border-normal:var(--wa-color-neutral-30);--wa-color-neutral-border-loud:var(--wa-color-neutral-40);--wa-color-neutral-on-quiet:var(--wa-color-neutral-60);--wa-color-neutral-on-normal:var(--wa-color-neutral-70);--wa-color-neutral-on-loud:var(--wa-color-neutral-05);}:where(:root),.wa-theme-default,.wa-light,.wa-dark,.wa-invert{font-family:var(--wa-font-family-body);--wa-font-family-body:ui-sans-serif, system-ui, sans-serif;--wa-font-family-heading:var(--wa-font-family-body);--wa-font-family-code:ui-monospace, monospace;--wa-font-family-longform:ui-serif, serif;--wa-font-size-scale:1;--wa-font-size-3xs:round(calc(var(--wa-font-size-2xs) / 1.125), 1px);--wa-font-size-2xs:round(calc(var(--wa-font-size-xs) / 1.125), 1px);--wa-font-size-xs:round(calc(var(--wa-font-size-s) / 1.125), 1px);--wa-font-size-s:round(calc(var(--wa-font-size-m) / 1.125), 1px);--wa-font-size-m:calc(1rem * var(--wa-font-size-scale));--wa-font-size-l:round(calc(var(--wa-font-size-m) * 1.125 * 1.125), 1px);--wa-font-size-xl:round(calc(var(--wa-font-size-l) * 1.125 * 1.125), 1px);--wa-font-size-2xl:round(calc(var(--wa-font-size-xl) * 1.125 * 1.125), 1px);--wa-font-size-3xl:round(calc(var(--wa-font-size-2xl) * 1.125 * 1.125), 1px);--wa-font-size-4xl:round(calc(var(--wa-font-size-3xl) * 1.125 * 1.125), 1px);--wa-font-size-5xl:round(calc(var(--wa-font-size-4xl) * 1.125 * 1.125), 1px);--wa-font-size-smaller:round(calc(1em / 1.125), 1px);--wa-font-size-larger:round(calc(1em * 1.125 * 1.125), 1px);--wa-font-weight-light:300;--wa-font-weight-normal:400;--wa-font-weight-semibold:500;--wa-font-weight-bold:600;--wa-font-weight-body:var(--wa-font-weight-normal);--wa-font-weight-heading:var(--wa-font-weight-bold);--wa-font-weight-code:var(--wa-font-weight-normal);--wa-font-weight-longform:var(--wa-font-weight-normal);--wa-font-weight-action:var(--wa-font-weight-semibold);--wa-line-height-condensed:1.2;--wa-line-height-normal:1.6;--wa-line-height-expanded:2;--wa-link-decoration-default:underline color-mix(in oklab, currentColor 70%, transparent) dotted;--wa-link-decoration-hover:underline;--wa-space-scale:1;--wa-space-3xs:calc(var(--wa-space-scale) * 0.125rem);--wa-space-2xs:calc(var(--wa-space-scale) * 0.25rem);--wa-space-xs:calc(var(--wa-space-scale) * 0.5rem);--wa-space-s:calc(var(--wa-space-scale) * 0.75rem);--wa-space-m:calc(var(--wa-space-scale) * 1rem);--wa-space-l:calc(var(--wa-space-scale) * 1.5rem);--wa-space-xl:calc(var(--wa-space-scale) * 2rem);--wa-space-2xl:calc(var(--wa-space-scale) * 2.5rem);--wa-space-3xl:calc(var(--wa-space-scale) * 3rem);--wa-space-4xl:calc(var(--wa-space-scale) * 4rem);--wa-space-5xl:calc(var(--wa-space-scale) * 5rem);--wa-content-spacing:var(--wa-space-l);--wa-border-style:solid;--wa-border-width-scale:1;--wa-border-width-s:calc(var(--wa-border-width-scale) * 0.0625rem);--wa-border-width-m:calc(var(--wa-border-width-scale) * 0.125rem);--wa-border-width-l:calc(var(--wa-border-width-scale) * 0.1875rem);--wa-border-radius-scale:1;--wa-border-radius-s:calc(var(--wa-border-radius-scale) * 0.1875rem);--wa-border-radius-m:calc(var(--wa-border-radius-scale) * 0.375rem);--wa-border-radius-l:calc(var(--wa-border-radius-scale) * 0.75rem);--wa-border-radius-pill:9999px;--wa-border-radius-circle:50%;--wa-border-radius-square:0px;--wa-focus-ring-style:solid;--wa-focus-ring-width:0.1875rem;--wa-focus-ring:var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus);--wa-focus-ring-offset:0.0625rem;--wa-shadow-offset-x-scale:0;--wa-shadow-offset-x-s:calc(var(--wa-shadow-offset-x-scale) * 0.125rem);--wa-shadow-offset-x-m:calc(var(--wa-shadow-offset-x-scale) * 0.25rem);--wa-shadow-offset-x-l:calc(var(--wa-shadow-offset-x-scale) * 0.5rem);--wa-shadow-offset-y-scale:1;--wa-shadow-offset-y-s:calc(var(--wa-shadow-offset-y-scale) * 0.125rem);--wa-shadow-offset-y-m:calc(var(--wa-shadow-offset-y-scale) * 0.25rem);--wa-shadow-offset-y-l:calc(var(--wa-shadow-offset-y-scale) * 0.5rem);--wa-shadow-blur-scale:1;--wa-shadow-blur-s:calc(var(--wa-shadow-blur-scale) * 0.125rem);--wa-shadow-blur-m:calc(var(--wa-shadow-blur-scale) * 0.25rem);--wa-shadow-blur-l:calc(var(--wa-shadow-blur-scale) * 0.5rem);--wa-shadow-spread-scale:-0.5;--wa-shadow-spread-s:calc(var(--wa-shadow-spread-scale) * 0.125rem);--wa-shadow-spread-m:calc(var(--wa-shadow-spread-scale) * 0.25rem);--wa-shadow-spread-l:calc(var(--wa-shadow-spread-scale) * 0.5rem);--wa-shadow-s:var(--wa-shadow-offset-x-s) var(--wa-shadow-offset-y-s) var(--wa-shadow-blur-s)\n      var(--wa-shadow-spread-s) var(--wa-color-shadow);--wa-shadow-m:var(--wa-shadow-offset-x-m) var(--wa-shadow-offset-y-m) var(--wa-shadow-blur-m)\n      var(--wa-shadow-spread-m) var(--wa-color-shadow);--wa-shadow-l:var(--wa-shadow-offset-x-l) var(--wa-shadow-offset-y-l) var(--wa-shadow-blur-l)\n      var(--wa-shadow-spread-l) var(--wa-color-shadow);--wa-transition-easing:ease;--wa-transition-slow:300ms;--wa-transition-normal:150ms;--wa-transition-fast:75ms;--wa-form-control-background-color:var(--wa-color-surface-default);--wa-form-control-border-color:var(--wa-color-neutral-border-loud);--wa-form-control-border-style:var(--wa-border-style);--wa-form-control-border-width:var(--wa-border-width-s);--wa-form-control-border-radius:var(--wa-border-radius-m);--wa-form-control-activated-color:var(--wa-color-brand-fill-loud);--wa-form-control-label-color:var(--wa-color-text-normal);--wa-form-control-label-font-weight:var(--wa-font-weight-semibold);--wa-form-control-label-line-height:var(--wa-line-height-condensed);--wa-form-control-value-color:var(--wa-color-text-normal);--wa-form-control-value-font-weight:var(--wa-font-weight-body);--wa-form-control-value-line-height:var(--wa-line-height-condensed);--wa-form-control-hint-color:var(--wa-color-text-quiet);--wa-form-control-hint-font-weight:var(--wa-font-weight-body);--wa-form-control-hint-line-height:var(--wa-line-height-normal);--wa-form-control-placeholder-color:var(--wa-color-gray-50);--wa-form-control-required-content:'*';--wa-form-control-required-content-color:inherit;--wa-form-control-required-content-offset:0.1em;--wa-form-control-padding-block:0.75em;--wa-form-control-padding-inline:1em;--wa-form-control-height:round(\n      calc(2 * var(--wa-form-control-padding-block) + 1em * var(--wa-form-control-value-line-height)),\n      1px\n    );--wa-form-control-toggle-size:round(1.25em, 1px);--wa-button-transform-hover:none;--wa-button-transform-active:scale(0.9875);--wa-panel-border-style:var(--wa-border-style);--wa-panel-border-width:var(--wa-border-width-s);--wa-panel-border-radius:var(--wa-border-radius-l);--wa-tooltip-arrow-size:0.375rem;--wa-tooltip-background-color:var(--wa-color-text-normal);--wa-tooltip-border-color:var(--wa-tooltip-background-color);--wa-tooltip-border-style:var(--wa-border-style);--wa-tooltip-border-width:var(--wa-border-width-s);--wa-tooltip-border-radius:var(--wa-border-radius-s);--wa-tooltip-content-color:var(--wa-color-surface-default);--wa-tooltip-font-size:var(--wa-font-size-s);--wa-tooltip-line-height:var(--wa-line-height-normal);}:is(html,body):has(wa-page){min-height:100%;padding:0;margin:0}}wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-left-width:var(--error-border-width) !important;border-right-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}.ir-dialog__footer{display:flex;align-items:center;gap:1rem;justify-content:flex-end;width:100%}.dialog__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px;min-width:31rem}#dialog-overview::part(title){color:var(--wa-color-text-normal)}.ir__drawer{text-align:left !important}.ir__drawer::part(header){border-bottom:1px solid var(--wa-color-surface-border);padding-bottom:calc(var(--spacing) / 2);color:var(--wa-color-text-normal);background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.ir__drawer::part(body){background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default));padding:0;padding-left:var(--ir-drawer-padding-left, var(--spacing));padding-right:var(--ir-drawer-padding-right, var(--spacing));padding-top:var(--ir-drawer-padding-top, var(--spacing));padding-bottom:var(--ir-drawer-padding-bottom, var(--spacing))}.ir__drawer::part(footer){background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default));padding-top:calc(var(--spacing) / 2);border-top:1px solid var(--wa-color-surface-border)}.ir__drawer-footer{display:flex;align-items:center;gap:1rem;width:100%}.ir__drawer-footer>*{flex:1 1 0%}.drawer__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%}.my-custom-style{background:#000;color:white}:root{--ir-color-muted-background:#f2f3f8;--ir-color-loader:rgba(255, 255, 255, 0.2);--error-border-width:2px;--ir-color-border-error:var(--wa-color-danger-border-loud)}.wa-dark{--ir-color-loader:rgba(0, 0, 0, 0.2);--ir-color-muted-background:#12141a}body{background-color:var(--ir-color-muted-background) !important;color:var(--wa-color-text-normal)}h1,h2,h3,h4,h5,h6{color:var(--wa-color-text-normal) !important}html{font-size:14px !important}.truncate{overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative}.ir-price{font-family:inherit;font-size:1rem;font-weight:800;text-align:right;white-space:nowrap;color:var(--wa-color-text-normal);margin:0;padding:0}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl);margin:0;padding:0}:root{--wa-form-control-required-content-color:var(--wa-color-danger-border-loud, #f3676c)}.label-on-left{display:grid;gap:var(--wa-space-m)}wa-card::part(base){box-sizing:border-box}@media (min-width: 768px){.label-on-left{align-items:center;grid-template-columns:auto 1fr}.label-on-left wa-switch::part(base),.label-on-left wa-select::part(form-control),.label-on-left wa-select,.label-on-left wa-switch,.label-on-left wa-input,.label-on-left wa-textarea{grid-column:1 / -1;grid-row-end:span 2;display:grid;grid-template-columns:subgrid;gap:0 var(--wa-space-l);align-items:center}.label-on-left wa-switch::part(base){direction:rtl}.label-on-left wa-switch::part(base)>*{justify-self:flex-start;justify-content:flex-start;direction:ltr;}.label-on-left ::part(label){justify-content:flex-end}.label-on-left ::part(hint){grid-column:2}}.ir-preview-print-container{position:fixed;inset:0;opacity:0;pointer-events:none;z-index:-1}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border-width:0}@media print{body.ir-preview-dialog-print-mode{background:#fff !important}body.ir-preview-dialog-print-mode>*:not(.ir-preview-print-container){display:none !important}body.ir-preview-dialog-print-mode .ir-preview-print-container{opacity:1;pointer-events:auto;position:static;z-index:auto;width:100%;min-height:auto;margin:0 auto;padding:1.5rem;box-sizing:border-box}}@page {margin:0.5in}";function yi(t,e,o){const a="undefined"!=typeof HTMLElement?HTMLElement.prototype:null;for(;t&&t!==a;){const a=Object.getOwnPropertyDescriptor(t,e);if(a&&(!o||a.get))return a;t=Object.getPrototypeOf(t)}}var xi,ki=(t,e)=>{var o;Object.entries(null!=(o=e.v.i)?o:{}).map((([o,[a]])=>{if(31&a||32&a){const a=t[o],r=yi(Object.getPrototypeOf(t),o,!0)||Object.getOwnPropertyDescriptor(t,o);r&&Object.defineProperty(t,o,{get(){return r.get.call(this)},set(t){r.set.call(this,t)},configurable:!0,enumerable:!0}),e.L.has(o)?t[o]=e.L.get(o):void 0!==a&&(t[o]=a)}}))},Ci=t=>{if(t.__stencil__getHostRef)return t.__stencil__getHostRef()},zi=(t,e)=>{e&&(t.__stencil__getHostRef=()=>e,e.S=t,512&e.v.A&&ki(t,e))},$i=(t,e)=>e in t,Li=(t,e)=>(0,console.error)(t,e),Si=new Map,Ai=new Map,Fi="slot-fb{display:contents}slot-fb[hidden]{display:none}",Mi="http://www.w3.org/1999/xlink",Bi=["formAssociatedCallback","formResetCallback","formDisabledCallback","formStateRestoreCallback"],Ei="undefined"!=typeof window?window:{},Oi={A:0,F:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,o,a)=>t.addEventListener(e,o,a),rel:(t,e,o,a)=>t.removeEventListener(e,o,a),ce:(t,e)=>new CustomEvent(t,e)},Ii=t=>Promise.resolve(t),qi=(()=>{try{return!!Ei.document.adoptedStyleSheets&&(new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync)}catch(t){}return!1})(),_i=!!qi&&(()=>!!Ei.document&&Object.getOwnPropertyDescriptor(Ei.document.adoptedStyleSheets,"length").writable)(),Ti=!1,Di=[],ji=[],Ui=(t,e)=>o=>{t.push(o),Ti||(Ti=!0,e&&4&Oi.A?Ni(Pi):Oi.raf(Pi))},Ri=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){Li(t)}t.length=0},Pi=()=>{Ri(Di),Ri(ji),(Ti=Di.length>0)&&Oi.raf(Pi)},Ni=t=>Ii().then(t),Vi=Ui(ji,!0),Hi=t=>{const e=new URL(t,Oi.F);return e.origin!==Ei.location.origin?e.href:e.pathname};function Yi(){var t;const e=this.attachShadow({mode:"open"});if(void 0===xi&&(xi=null!=(t=function(t){if(!qi)return;const e=new CSSStyleSheet;return e.replaceSync(t),e}(gi))?t:null),xi)_i?e.adoptedStyleSheets.push(xi):e.adoptedStyleSheets=[...e.adoptedStyleSheets,xi];else if(!qi){const t=document.createElement("style");t.innerHTML=gi,e.prepend(t)}}var Xi=t=>{const e=Gi(t,"childNodes");t.tagName&&t.tagName.includes("-")&&t["s-cr"]&&"SLOT-FB"!==t.tagName&&Wi(e,t.tagName).forEach((t=>{1===t.nodeType&&"SLOT-FB"===t.tagName&&(t.hidden=!!Ki(t,Zi(t),!1).length)}));let o=0;for(o=0;o<e.length;o++){const t=e[o];1===t.nodeType&&Gi(t,"childNodes").length&&Xi(t)}};function Wi(t,e,o){let a,r=0,i=[];for(;r<t.length;r++){if(a=t[r],a["s-sr"]&&(!e||a["s-hn"]===e)&&(void 0===o||Zi(a)===o)&&(i.push(a),void 0!==o))return i;i=[...i,...Wi(a.childNodes,e,o)]}return i}var Ki=(t,e,o=!0)=>{const a=[];(o&&t["s-sr"]||!t["s-sr"])&&a.push(t);let r=t;for(;r=r.nextSibling;)Zi(r)!==e||!o&&r["s-sr"]||a.push(r);return a},Qi=(t,e)=>1===t.nodeType?null===t.getAttribute("slot")&&""===e||t.getAttribute("slot")===e:t["s-sn"]===e||""===e,Zi=t=>"string"==typeof t["s-sn"]?t["s-sn"]:1===t.nodeType&&t.getAttribute("slot")||void 0;function Gi(t,e){if("__"+e in t){const o=t["__"+e];return"function"!=typeof o?o:o.bind(t)}return"function"!=typeof t[e]?t[e]:t[e].bind(t)}function Ji(t){var e,o,a;return null!=(a=null==(o=null==(e=t.head)?void 0:e.querySelector('meta[name="csp-nonce"]'))?void 0:o.getAttribute("content"))?a:void 0}var tn,en,on,an=new WeakMap,rn=t=>"sc-"+t.M,nn=t=>"object"==(t=typeof t)||"function"===t,sn=(t,e,...o)=>{let a=null,r=null,i=null,n=!1,s=!1;const l=[],c=e=>{for(let o=0;o<e.length;o++)a=e[o],Array.isArray(a)?c(a):null!=a&&"boolean"!=typeof a&&((n="function"!=typeof t&&!nn(a))&&(a+=""),n&&s?l[l.length-1].B+=a:l.push(n?ln(null,a):a),s=n)};if(c(o),e){e.key&&(r=e.key),e.name&&(i=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter((e=>t[e])).join(" "))}}if("function"==typeof t)return t(null===e?{}:e,l,hn);const h=ln(t,null);return h.I=e,l.length>0&&(h.q=l),h.D=r,h.U=i,h},ln=(t,e)=>({A:0,R:t,B:null!=e?e:null,P:null,q:null,I:null,D:null,U:null}),cn={},hn={forEach:(t,e)=>t.map(dn).forEach(e),map:(t,e)=>t.map(dn).map(e).map(un)},dn=t=>({vattrs:t.I,vchildren:t.q,vkey:t.D,vname:t.U,vtag:t.R,vtext:t.B}),un=t=>{if("function"==typeof t.vtag){const e={...t.vattrs};return t.vkey&&(e.key=t.vkey),t.vname&&(e.name=t.vname),sn(t.vtag,e,...t.vchildren||[])}const e=ln(t.vtag,t.vtext);return e.I=t.vattrs,e.q=t.vchildren,e.D=t.vkey,e.U=t.vname,e},wn=t=>{if(!t)return;const e=Object.keys(t);if(0===e.length)return;let o=!1;for(const a of e){if(o)break;for(const e of t[a])if("string"==typeof e){o=!0;break}}if(!o)return t;const a={};for(const o of e)a[o]=t[o].map((t=>"string"==typeof t?{[t]:0}:t));return a},fn=(t,e,o)=>null==t||nn(t)?t:4&e?(o&&"string"==typeof t||"false"!==t)&&(""===t||!!t):2&e?"string"==typeof t?parseFloat(t):"number"==typeof t?t:NaN:1&e?t+"":t,pn=t=>{var e;return null==(e=Ci(t))?void 0:e.$hostElement$},mn=(t,e)=>{const o=pn(t);return{emit:t=>bn(o,e,{bubbles:!0,composed:!0,cancelable:!0,detail:t})}},bn=(t,e,o)=>{const a=Oi.ce(e,o);return t.dispatchEvent(a),a},vn=(t,e,o,a,r,i)=>{if(o===a)return;let n=$i(t,e),s=e.toLowerCase();if("class"===e){const e=t.classList,r=yn(o);let i=yn(a);e.remove(...r.filter((t=>t&&!i.includes(t)))),e.add(...i.filter((t=>t&&!r.includes(t))))}else if("style"===e){for(const e in o)a&&null!=a[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in a)o&&a[e]===o[e]||(e.includes("-")?t.style.setProperty(e,a[e]):t.style[e]=a[e])}else if("key"===e);else if("ref"===e)a&&Pn(a,t);else if(n||"o"!==e[0]||"n"!==e[1]){if("a"===e[0]&&e.startsWith("attr:")){const o=e.slice(5);let r;{const e=Ci(t);if(e&&e.v&&e.v.i){const t=e.v.i[o];t&&t[1]&&(r=t[1])}}return r||(r=o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),void(null==a||!1===a?!1===a&&""!==t.getAttribute(r)||t.removeAttribute(r):t.setAttribute(r,!0===a?"":a))}if("p"===e[0]&&e.startsWith("prop:")){const o=e.slice(5);try{t[o]=a}catch(t){}return}{const l=nn(a);if((n||l&&null!==a)&&!r)try{if(t.tagName.includes("-"))t[e]!==a&&(t[e]=a);else{const r=null==a?"":a;"list"===e?n=!1:null!=o&&t[e]===r||("function"==typeof t.__lookupSetter__(e)?t[e]=r:t.setAttribute(e,r))}}catch(t){}let c=!1;s!==(s=s.replace(/^xlink\:?/,""))&&(e=s,c=!0),null==a||!1===a?!1===a&&""!==t.getAttribute(e)||(c?t.removeAttributeNS(Mi,e):t.removeAttribute(e)):(!n||4&i||r)&&!l&&1===t.nodeType&&(a=!0===a?"":a,c?t.setAttributeNS(Mi,e,a):t.setAttribute(e,a))}}else if(e="-"===e[2]?e.slice(3):$i(Ei,s)?s.slice(2):s[2]+e.slice(3),o||a){const r=e.endsWith(xn);e=e.replace(kn,""),o&&Oi.rel(t,e,o,r),a&&Oi.ael(t,e,a,r)}},gn=/\s/,yn=t=>("object"==typeof t&&t&&"baseVal"in t&&(t=t.baseVal),t&&"string"==typeof t?t.split(gn):[]),xn="Capture",kn=RegExp(xn+"$"),Cn=(t,e,o)=>{const a=11===e.P.nodeType&&e.P.host?e.P.host:e.P,r=t&&t.I||{},i=e.I||{};for(const t of zn(Object.keys(r)))t in i||vn(a,t,r[t],void 0,o,e.A);for(const t of zn(Object.keys(i)))vn(a,t,r[t],i[t],o,e.A)};function zn(t){return t.includes("ref")?[...t.filter((t=>"ref"!==t)),"ref"]:t}var $n=!1,Ln=!1,Sn=!1,An=!1,Fn=[],Mn=[],Bn=(t,e,o)=>{var a;const r=e.q[o];let i,n,s,l=0;if($n||(Sn=!0,"slot"===r.R&&(r.A|=r.q?2:1)),null!=r.B)i=r.P=Ei.document.createTextNode(r.B);else if(1&r.A)i=r.P=Ei.document.createTextNode(""),Cn(null,r,An);else{if(An||(An="svg"===r.R),!Ei.document)throw Error("You are trying to render a Stencil component in an environment that doesn't support the DOM.");if(i=r.P=Ei.document.createElementNS(An?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",!$n&&2&r.A?"slot-fb":r.R),An&&"foreignObject"===r.R&&(An=!1),Cn(null,r,An),null!=tn&&void 0!==tn&&i["s-si"]!==tn&&i.classList.add(i["s-si"]=tn),r.q){const e="template"===r.R?i.content:i;for(l=0;l<r.q.length;++l)n=Bn(t,r,l),n&&e.appendChild(n)}"svg"===r.R?An=!1:"foreignObject"===i.tagName&&(An=!0)}return i["s-hn"]=on,3&r.A&&(i["s-sr"]=!0,i["s-cr"]=en,i["s-sn"]=r.U||"",i["s-rf"]=null==(a=r.I)?void 0:a.ref,function(t){if(t.assignedElements||t.assignedNodes||!t["s-sr"])return;const e=e=>function(t){const o=[],a=this["s-sn"];(null==t?void 0:t.flatten)&&console.error("\n          Flattening is not supported for Stencil non-shadow slots.\n          You can use `.childNodes` to nested slot fallback content.\n          If you have a particular use case, please open an issue on the Stencil repo.\n        ");const r=this["s-cr"].parentElement;return(r.__childNodes?r.childNodes:(t=>{const e=[];for(let o=0;o<t.length;o++){const a=t[o]["s-nr"]||void 0;a&&a.isConnected&&e.push(a)}return e})(r.childNodes)).forEach((t=>{a===Zi(t)&&o.push(t)})),e?o.filter((t=>1===t.nodeType)):o}.bind(t);t.assignedElements=e(!0),t.assignedNodes=e(!1)}(i),s=t&&t.q&&t.q[o],s&&s.R===r.R&&t.P&&En(t.P),Vn(en,i,e.P,null==t?void 0:t.P)),i},En=t=>{Oi.A|=1;const e=t.closest(on.toLowerCase());if(null!=e){const o=Array.from(e.__childNodes||e.childNodes).find((t=>t["s-cr"])),a=Array.from(t.__childNodes||t.childNodes);for(const t of o?a.reverse():a)null!=t["s-sh"]&&(Nn(e,t,null!=o?o:null),t["s-sh"]=void 0,Sn=!0)}Oi.A&=-2},On=(t,e)=>{Oi.A|=1;const o=Array.from(t.__childNodes||t.childNodes);if(t["s-sr"]){let e=t;for(;e=e.nextSibling;)e&&e["s-sn"]===t["s-sn"]&&e["s-sh"]===on&&o.push(e)}for(let t=o.length-1;t>=0;t--){const a=o[t];a["s-hn"]!==on&&a["s-ol"]&&(Nn(Tn(a).parentNode,a,Tn(a)),a["s-ol"].remove(),a["s-ol"]=void 0,a["s-sh"]=void 0,Sn=!0),e&&On(a,e)}Oi.A&=-2},In=(t,e,o,a,r,i)=>{let n,s=t["s-cr"]&&t["s-cr"].parentNode||t;for(s.shadowRoot&&s.tagName===on&&(s=s.shadowRoot),"template"===o.R&&(s=s.content);r<=i;++r)a[r]&&(n=Bn(null,o,r),n&&(a[r].P=n,Nn(s,n,Tn(e))))},qn=(t,e,o)=>{for(let a=e;a<=o;++a){const e=t[a];if(e){const t=e.P;Rn(e),t&&(Ln=!0,t["s-ol"]?t["s-ol"].remove():On(t,!0),t.remove())}}},_n=(t,e,o=!1)=>t.R===e.R&&("slot"===t.R?t.U===e.U:o?(o&&!t.D&&e.D&&(t.D=e.D),!0):t.D===e.D),Tn=t=>t&&t["s-ol"]||t,Dn=(t,e,o=!1)=>{const a=e.P=t.P,r=t.q,i=e.q,n=e.R,s=e.B;let l;null==s?(An="svg"===n||"foreignObject"!==n&&An,"slot"!==n||$n||t.U!==e.U&&(e.P["s-sn"]=e.U||"",En(e.P.parentElement)),Cn(t,e,An),null!==r&&null!==i?((t,e,o,a,r=!1)=>{let i,n,s=0,l=0,c=0,h=0,d=e.length-1,u=e[0],w=e[d],f=a.length-1,p=a[0],m=a[f];const b="template"===o.R?t.content:t;for(;s<=d&&l<=f;)if(null==u)u=e[++s];else if(null==w)w=e[--d];else if(null==p)p=a[++l];else if(null==m)m=a[--f];else if(_n(u,p,r))Dn(u,p,r),u=e[++s],p=a[++l];else if(_n(w,m,r))Dn(w,m,r),w=e[--d],m=a[--f];else if(_n(u,m,r))"slot"!==u.R&&"slot"!==m.R||On(u.P.parentNode,!1),Dn(u,m,r),Nn(b,u.P,w.P.nextSibling),u=e[++s],m=a[--f];else if(_n(w,p,r))"slot"!==u.R&&"slot"!==m.R||On(w.P.parentNode,!1),Dn(w,p,r),Nn(b,w.P,u.P),w=e[--d],p=a[++l];else{for(c=-1,h=s;h<=d;++h)if(e[h]&&null!==e[h].D&&e[h].D===p.D){c=h;break}c>=0?(n=e[c],n.R!==p.R?i=Bn(e&&e[l],o,c):(Dn(n,p,r),e[c]=void 0,i=n.P),p=a[++l]):(i=Bn(e&&e[l],o,l),p=a[++l]),i&&Nn(Tn(u.P).parentNode,i,Tn(u.P))}s>d?In(t,null==a[f+1]?null:a[f+1].P,o,a,l,f):l>f&&qn(e,s,d)})(a,r,e,i,o):null!==i?(null!==t.B&&(a.textContent=""),In(a,null,e,i,0,i.length-1)):!o&&null!==r&&qn(r,0,r.length-1),An&&"svg"===n&&(An=!1)):(l=a["s-cr"])?l.parentNode.textContent=s:t.B!==s&&(a.data=s)},jn=[],Un=t=>{let e,o,a;const r=t.__childNodes||t.childNodes;for(const t of r){if(t["s-sr"]&&(e=t["s-cr"])&&e.parentNode){o=e.parentNode.__childNodes||e.parentNode.childNodes;const r=t["s-sn"];for(a=o.length-1;a>=0;a--)if(e=o[a],!(e["s-cn"]||e["s-nr"]||e["s-hn"]===t["s-hn"]||e["s-sh"]&&e["s-sh"]===t["s-hn"]))if(Qi(e,r)){let o=jn.find((t=>t.N===e));Ln=!0,e["s-sn"]=e["s-sn"]||r,o?(o.N["s-sh"]=t["s-hn"],o.V=t):(e["s-sh"]=t["s-hn"],jn.push({V:t,N:e})),e["s-sr"]&&jn.map((t=>{Qi(t.N,e["s-sn"])&&(o=jn.find((t=>t.N===e)),o&&!t.V&&(t.V=o.V))}))}else jn.some((t=>t.N===e))||jn.push({N:e})}1===t.nodeType&&Un(t)}},Rn=t=>{t.I&&t.I.ref&&Fn.push((()=>t.I.ref(null))),t.q&&t.q.map(Rn)},Pn=(t,e)=>{Mn.push((()=>t(e)))},Nn=(t,e,o,a)=>{if("string"==typeof e["s-sn"]&&e["s-sr"]&&e["s-cr"])Vn(e["s-cr"],e,t,e.parentElement);else if("string"==typeof e["s-sn"]){t.insertBefore(e,o);const{slotNode:r}=function(t,e){var o;if(!(e=e||(null==(o=t["s-ol"])?void 0:o.parentElement)))return{slotNode:null,slotName:""};const a=t["s-sn"]=Zi(t)||"";return{slotNode:Wi(Gi(e,"childNodes"),e.tagName,a)[0],slotName:a}}(e);return r&&!a&&function(t){t.dispatchEvent(new CustomEvent("slotchange",{bubbles:!1,cancelable:!1,composed:!1}))}(r),e}return t.__insertBefore?t.__insertBefore(e,o):null==t?void 0:t.insertBefore(e,o)};function Vn(t,e,o,a){var r,i;let n;if(t&&"string"==typeof e["s-sn"]&&e["s-sr"]&&t.parentNode&&t.parentNode["s-sc"]&&(n=e["s-si"]||t.parentNode["s-sc"])){const t=e["s-sn"],s=e["s-hn"];if(null==(r=o.classList)||r.add(n+"-s"),a&&(null==(i=a.classList)?void 0:i.contains(n+"-s"))){let e=(a.__childNodes||a.childNodes)[0],o=!1;for(;e;){if(e["s-sn"]!==t&&e["s-hn"]===s&&e["s-sr"]){o=!0;break}e=e.nextSibling}o||a.classList.remove(n+"-s")}}}var Hn=(t,e)=>{if(e&&!t.H&&e["s-p"]){const o=e["s-p"].push(new Promise((a=>t.H=()=>{e["s-p"].splice(o-1,1),a()})))}},Yn=(t,e)=>{if(t.A|=16,4&t.A)return void(t.A|=512);Hn(t,t.Y);const o=()=>Xn(t,e);if(!e)return Vi(o);queueMicrotask((()=>{o()}))},Xn=(t,e)=>{const o=t.$hostElement$,a=t.S;if(!a)throw Error(`Can't render component <${o.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);let r;return e?(t.X&&(t.X=!1,as(a,"connectedCallback",void 0,o)),t.A|=256,t.W&&(t.W.map((([t,e])=>as(a,t,e,o))),t.W=void 0),t.K.length&&t.K.forEach((t=>t(o))),r=as(a,"componentWillLoad",void 0,o)):r=as(a,"componentWillUpdate",void 0,o),r=Wn(r,(()=>as(a,"componentWillRender",void 0,o))),Wn(r,(()=>Qn(t,a,e)))},Wn=(t,e)=>Kn(t)?t.then(e).catch((t=>{console.error(t),e()})):e(),Kn=t=>t instanceof Promise||t&&t.then&&"function"==typeof t.then,Qn=async(t,e,o)=>{var a;const r=t.$hostElement$,i=r["s-rc"];o&&(t=>{const e=t.v,o=t.$hostElement$,a=e.A,r=((t,e)=>{var o,a,r;const i=rn(e),n=Ai.get(i);if(!Ei.document)return i;if(t=11===t.nodeType?t:Ei.document,n)if("string"==typeof n){let r,s=an.get(t=t.head||t);if(s||an.set(t,s=new Set),!s.has(i)){r=Ei.document.createElement("style"),r.textContent=n;const l=null!=(o=Oi.Z)?o:Ji(Ei.document);if(null!=l&&r.setAttribute("nonce",l),!(1&e.A))if("HEAD"===t.nodeName){const e=t.querySelectorAll("link[rel=preconnect]"),o=e.length>0?e[e.length-1].nextSibling:t.querySelector("style");t.insertBefore(r,(null==o?void 0:o.parentNode)===t?o:null)}else if("host"in t)if(qi){const e=new(null!=(a=t.defaultView)?a:t.ownerDocument.defaultView).CSSStyleSheet;e.replaceSync(n),_i?t.adoptedStyleSheets.unshift(e):t.adoptedStyleSheets=[e,...t.adoptedStyleSheets]}else{const e=t.querySelector("style");e?e.textContent=n+e.textContent:t.prepend(r)}else t.append(r);1&e.A&&t.insertBefore(r,null),4&e.A&&(r.textContent+=Fi),s&&s.add(i)}}else{let e=an.get(t);if(e||an.set(t,e=new Set),!e.has(i)){const o=null!=(r=t.defaultView)?r:t.ownerDocument.defaultView;let a;if(n.constructor===o.CSSStyleSheet)a=n;else{a=new o.CSSStyleSheet;for(let t=0;t<n.cssRules.length;t++)a.insertRule(n.cssRules[t].cssText,t)}_i?t.adoptedStyleSheets.push(a):t.adoptedStyleSheets=[...t.adoptedStyleSheets,a],e.add(i)}}return i})(o.shadowRoot?o.shadowRoot:o.getRootNode(),e);10&a&&(o["s-sc"]=r,o.classList.add(r+"-h"))})(t);Gn(t,e,r,o),i&&(i.map((t=>t())),r["s-rc"]=void 0);{const e=null!=(a=r["s-p"])?a:[],o=()=>ts(t);0===e.length?o():(Promise.all(e).then(o).catch(o),t.A|=4,e.length=0)}},Zn=null,Gn=(t,e,o,a)=>{try{Zn=e,e=e.render(),t.A&=-17,t.A|=2,((t,e,o=!1)=>{var a,r,i,n,s;const l=t.$hostElement$,c=t.v,h=t.G||ln(null,null),d=(t=>t&&t.R===cn)(e)?e:sn(null,null,e);if(on=l.tagName,c.J&&(d.I=d.I||{},c.J.forEach((([t,e])=>{d.I[e]=l[t]}))),o&&d.I)for(const t of Object.keys(d.I))l.hasAttribute(t)&&!["key","ref","style","class"].includes(t)&&(d.I[t]=l[t]);if(d.R=null,d.A|=4,t.G=d,d.P=h.P=l.shadowRoot||l,tn=l["s-sc"],$n=!(!(1&c.A)||128&c.A),en=l["s-cr"],Ln=!1,Dn(h,d,o),Oi.A|=1,Sn){Un(d.P);for(const t of jn){const e=t.N;if(!e["s-ol"]&&Ei.document){const t=Ei.document.createTextNode("");t["s-nr"]=e,Nn(e.parentNode,e["s-ol"]=t,e,o)}}for(const t of jn){const e=t.N,s=t.V;if(1===e.nodeType&&o&&(e["s-ih"]=null!=(a=e.hidden)&&a),s){const t=s.parentNode;let a=s.nextSibling;if(a&&1===a.nodeType){let o=null==(r=e["s-ol"])?void 0:r.previousSibling;for(;o;){let r=null!=(i=o["s-nr"])?i:null;if(r&&r["s-sn"]===e["s-sn"]&&t===(r.__parentNode||r.parentNode)){for(r=r.nextSibling;r===e||(null==r?void 0:r["s-sr"]);)r=null==r?void 0:r.nextSibling;if(!r||!r["s-nr"]){a=r;break}}o=o.previousSibling}}if((!a&&t!==(e.__parentNode||e.parentNode)||(e.__nextSibling||e.nextSibling)!==a)&&e!==a){if(Nn(t,e,a,o),8===e.nodeType&&e.nodeValue.startsWith("s-nt-")){const t=Ei.document.createTextNode(e.nodeValue.replace(/^s-nt-/,""));t["s-hn"]=e["s-hn"],t["s-sn"]=e["s-sn"],t["s-sh"]=e["s-sh"],t["s-sr"]=e["s-sr"],t["s-ol"]=e["s-ol"],t["s-ol"]["s-nr"]=t,Nn(e.parentNode,t,e,o),e.parentNode.removeChild(e)}1===e.nodeType&&"SLOT-FB"!==e.tagName&&(e.hidden=null!=(n=e["s-ih"])&&n)}e&&"function"==typeof s["s-rf"]&&s["s-rf"](s)}else 1===e.nodeType&&(e.hidden=!0)}}if(Ln&&Xi(d.P),Oi.A&=-2,jn.length=0,!$n&&!(1&c.A)&&l["s-cr"]){const t=d.P.__childNodes||d.P.childNodes;for(const e of t)if(e["s-hn"]!==on&&!e["s-sh"])if(o&&null==e["s-ih"]&&(e["s-ih"]=null!=(s=e.hidden)&&s),1===e.nodeType)e.hidden=!0;else if(3===e.nodeType&&e.nodeValue.trim()){const t=Ei.document.createComment("s-nt-"+e.nodeValue);t["s-sn"]=e["s-sn"],Nn(e.parentNode,t,e,o),e.parentNode.removeChild(e)}}en=void 0,Fn.forEach((t=>t())),Fn.length=0,Mn.forEach((t=>t())),Mn.length=0})(t,e,a)}catch(e){Li(e,t.$hostElement$)}return Zn=null,null},Jn=()=>Zn,ts=t=>{const e=t.$hostElement$,o=t.S,a=t.Y;as(o,"componentDidRender",void 0,e),64&t.A?as(o,"componentDidUpdate",void 0,e):(t.A|=64,rs(e),as(o,"componentDidLoad",void 0,e),t.tt(e),a||os()),t.et(e),t.H&&(t.H(),t.H=void 0),512&t.A&&Ni((()=>Yn(t,!1))),t.A&=-517},es=t=>{var e;{const o=Ci(t),a=null==(e=null==o?void 0:o.$hostElement$)?void 0:e.isConnected;return a&&2==(18&o.A)&&Yn(o,!1),a}},os=()=>{Ni((()=>bn(Ei,"appload",{detail:{namespace:"ir-webcmp"}})))},as=(t,e,o,a)=>{if(t&&t[e])try{return t[e](o)}catch(t){Li(t,a)}},rs=t=>t.classList.add("hydrated"),is=(t,e,o,a)=>{const r=Ci(t);if(!r)return;if(!r)throw Error(`Couldn't find host element for "${a.M}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`);const i=r.$hostElement$,n=r.L.get(e),s=r.A,l=r.S;if(o=fn(o,a.i[e][0],!!(64&a.A)),!(8&s&&void 0!==n||o===n||Number.isNaN(n)&&Number.isNaN(o))){if(r.L.set(e,o),a.ot){const t=a.ot[e];t&&t.map((t=>{try{const[[a,i]]=Object.entries(t);(128&s||1&i)&&(l?l[a](o,n,e):r.K.push((()=>{r.S[a](o,n,e)})))}catch(t){Li(t,i)}}))}if(2&s){if(l.componentShouldUpdate&&!1===l.componentShouldUpdate(o,n,e)&&!(16&s))return;16&s||Yn(r,!1)}}},ns=(t,e,o)=>{var a,r;const i=t.prototype;64&e.A&&1&o&&Bi.forEach((t=>{Object.defineProperty(i,t,{value(...e){var o;const a=Ci(this),r=null==a?void 0:a.S;if(r){const o=r[t];"function"==typeof o&&o.call(r,...e)}else null==(o=null==a?void 0:a.rt)||o.then((o=>{const a=o[t];"function"==typeof a&&a.call(o,...e)}))}})}));{t.watchers&&!e.ot&&(e.ot=wn(t.watchers)),t.deserializers&&!e.lt&&(e.lt=t.deserializers),t.serializers&&!e.ct&&(e.ct=t.serializers);const n=Object.entries(null!=(a=e.i)?a:{});if(n.map((([t,[a]])=>{if(31&a||2&o&&32&a){const{get:r,set:n}=yi(i,t)||{};r&&(e.i[t][0]|=2048),n&&(e.i[t][0]|=4096),(1&o||!r)&&Object.defineProperty(i,t,{get(){{if(!(2048&e.i[t][0]))return((t,e)=>Ci(this).L.get(e))(0,t);const o=Ci(this),a=o?o.S:i;if(!a)return;return a[t]}},configurable:!0,enumerable:!0}),Object.defineProperty(i,t,{set(r){const i=Ci(this);if(i){if(n)return void 0===(32&a?this[t]:i.$hostElement$[t])&&i.L.get(t)&&(r=i.L.get(t)),n.call(this,fn(r,a,!!(64&e.A))),void is(this,t,r=32&a?this[t]:i.$hostElement$[t],e);{if(!(1&o&&4096&e.i[t][0]))return is(this,t,r,e),void(1&o&&!i.S&&i.K.push((()=>{4096&e.i[t][0]&&i.S[t]!==i.L.get(t)&&(i.S[t]=r)})));const n=()=>{const o=i.S[t];!i.L.get(t)&&o&&i.L.set(t,o),i.S[t]=fn(r,a,!!(64&e.A)),is(this,t,i.S[t],e)};i.S?n():i.K.push((()=>{n()}))}}}})}else 1&o&&64&a&&Object.defineProperty(i,t,{value(...e){var o;const a=Ci(this);return null==(o=null==a?void 0:a.ht)?void 0:o.then((()=>{var o;return null==(o=a.S)?void 0:o[t](...e)}))}})})),1&o){const o=new Map;i.attributeChangedCallback=function(t,a,r){Oi.jmp((()=>{var s;const l=o.get(t),c=Ci(this);if(this.hasOwnProperty(l)&&(r=this[l],delete this[l]),i.hasOwnProperty(l)&&"number"==typeof this[l]&&this[l]==r)return;if(null==l){const o=null==c?void 0:c.A;if(c&&o&&!(8&o)&&r!==a){const i=c.S,n=null==(s=e.ot)?void 0:s[t];null==n||n.forEach((e=>{const[[n,s]]=Object.entries(e);null!=i[n]&&(128&o||1&s)&&i[n].call(i,r,a,t)}))}return}const h=n.find((([t])=>t===l)),d=h&&4&h[1][0],u=d&&null===r&&void 0===this[l];d&&(r=null!==r&&"false"!==r);const w=Object.getOwnPropertyDescriptor(i,l);u||r==this[l]||w.get&&!w.set||(this[l]=r)}))},t.observedAttributes=Array.from(new Set([...Object.keys(null!=(r=e.ot)?r:{}),...n.filter((([t,e])=>31&e[0])).map((([t,a])=>{var r;const i=a[1]||t;return o.set(i,t),512&a[0]&&(null==(r=e.J)||r.push([t,i])),i}))]))}}return t},ss=(t,e)=>{as(t,"connectedCallback",void 0,e)},ls=(t,e)=>{as(t,"disconnectedCallback",void 0,e||t)},cs=(t,e={})=>{var o;if(!Ei.document)return void console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");const a=[],r=e.exclude||[],i=Ei.customElements,n=Ei.document.head,s=n.querySelector("meta[charset]"),l=Ei.document.createElement("style"),c=[];let h,d=!0;Object.assign(Oi,e),Oi.F=new URL(e.resourcesUrl||"./",Ei.document.baseURI).href;let u=!1;if(t.map((t=>{t[1].map((e=>{var o,n;const s={A:e[0],M:e[1],i:e[2],dt:e[3]};4&s.A&&(u=!0),s.i=e[2],s.dt=e[3],s.J=[],s.ot=wn(e[4]),s.ct=null!=(o=e[5])?o:{},s.lt=null!=(n=e[6])?n:{};const l=s.M,w=class extends HTMLElement{"s-p";"s-rc";hasRegisteredEventListeners=!1;constructor(t){if(super(t),((t,e)=>{const o={A:0,$hostElement$:t,v:e,L:new Map,ut:new Map};o.ht=new Promise((t=>o.et=t)),o.rt=new Promise((t=>o.tt=t)),t["s-p"]=[],t["s-rc"]=[],o.K=[];const a=o;t.__stencil__getHostRef=()=>a})(t=this,s),1&s.A)if(t.shadowRoot){if("open"!==t.shadowRoot.mode)throw Error(`Unable to re-use existing shadow root for ${s.M}! Mode is set to ${t.shadowRoot.mode} but Stencil only supports open shadow roots.`)}else Yi.call(t,s)}connectedCallback(){const t=Ci(this);t&&(this.hasRegisteredEventListeners||(this.hasRegisteredEventListeners=!0,ds(this,t,s.dt)),h&&(clearTimeout(h),h=null),d?c.push(this):Oi.jmp((()=>(t=>{if(!(1&Oi.A)){const e=Ci(t);if(!e)return;const o=e.v,a=()=>{};if(1&e.A)ds(t,e,o.dt),(null==e?void 0:e.S)?ss(e.S,t):(null==e?void 0:e.rt)&&e.rt.then((()=>ss(e.S,t)));else{e.A|=1,12&o.A&&(t=>{if(!Ei.document)return;const e=t["s-cr"]=Ei.document.createComment("");e["s-cn"]=!0,Nn(t,e,t.firstChild)})(t);{let o=t;for(;o=o.parentNode||o.host;)if(o["s-p"]){Hn(e,e.Y=o);break}}o.i&&Object.entries(o.i).map((([e,[o]])=>{if(31&o&&Object.prototype.hasOwnProperty.call(t,e)){const o=t[e];delete t[e],t[e]=o}})),(async(t,e,o)=>{let a;try{if(!(32&e.A)){if(e.A|=32,o.wt){const r=((t,e)=>{const o=t.M.replace(/-/g,"_"),a=t.wt;if(!a)return;const r=Si.get(a);return r?r[o]:import(`./${a}.entry.js`).then((t=>(Si.set(a,t),t[o])),(t=>{Li(t,e.$hostElement$)}))
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/})(o,e);if(r&&"then"in r){const t=()=>{};a=await r,t()}else a=r;if(!a)throw Error(`Constructor for "${o.M}#${e.bt}" was not found`);a.isProxied||(o.ot=wn(a.watchers),o.ct=a.serializers,o.lt=a.deserializers,ns(a,o,2),a.isProxied=!0);const i=()=>{};e.A|=8;try{new a(e)}catch(e){Li(e,t)}e.A&=-9,e.A|=128,i(),4&o.A?e.X=!0:ss(e.S,t)}else a=t.constructor,customElements.whenDefined(t.localName).then((()=>e.A|=128));if(a&&a.style){let t;"string"==typeof a.style&&(t=a.style);const e=rn(o);if(!Ai.has(e)){const a=()=>{};((t,e,o)=>{let a=Ai.get(t);qi&&o?(a=a||new CSSStyleSheet,"string"==typeof a?a=e:a.replaceSync(e)):a=e,Ai.set(t,a)})(e,t,!!(1&o.A)),a()}}}const r=e.Y,i=()=>Yn(e,!0);r&&r["s-rc"]?r["s-rc"].push(i):i()}catch(o){Li(o,t),e.H&&(e.H(),e.H=void 0),e.tt&&e.tt(t)}})(t,e,o)}a()}})(this))))}disconnectedCallback(){Oi.jmp((()=>(async t=>{if(!(1&Oi.A)){const e=Ci(t);(null==e?void 0:e.vt)&&(e.vt.map((t=>t())),e.vt=void 0),(null==e?void 0:e.S)?ls(e.S,t):(null==e?void 0:e.rt)&&e.rt.then((()=>ls(e.S,t)))}an.has(t)&&an.delete(t),t.shadowRoot&&an.has(t.shadowRoot)&&an.delete(t.shadowRoot)})(this))),Oi.raf((()=>{var t;const e=Ci(this);if(!e)return;const o=c.findIndex((t=>t===this));o>-1&&c.splice(o,1),(null==(t=null==e?void 0:e.G)?void 0:t.P)instanceof Node&&!e.G.P.isConnected&&delete e.G.P}))}componentOnReady(){var t;return null==(t=Ci(this))?void 0:t.rt}};64&s.A&&(w.formAssociated=!0),s.wt=t[0],r.includes(l)||i.get(l)||(a.push(l),i.define(l,ns(w,s,1)))}))})),a.length>0&&(u&&(l.textContent+=Fi),l.textContent+=a.sort()+"{visibility:hidden}.hydrated{visibility:inherit}",l.innerHTML.length)){l.setAttribute("data-styles","");const t=null!=(o=Oi.Z)?o:Ji(Ei.document);null!=t&&l.setAttribute("nonce",t),n.insertBefore(l,s?s.nextSibling:n.firstChild)}d=!1,c.length?c.map((t=>t.connectedCallback())):Oi.jmp((()=>h=setTimeout(os,30)))},hs=(t,e)=>e,ds=(t,e,o)=>{o&&Ei.document&&o.map((([o,a,r])=>{const i=ws(Ei.document,t,o),n=us(e,r),s=fs(o);Oi.ael(i,a,n,s),(e.vt=e.vt||[]).push((()=>Oi.rel(i,a,n,s)))}))},us=(t,e)=>o=>{var a;try{256&t.A?null==(a=t.S)||a[e](o):(t.W=t.W||[]).push([e,o])}catch(e){Li(e,t.$hostElement$)}},ws=(t,e,o)=>4&o?t:8&o?Ei:16&o?t.body:e,fs=t=>({passive:!!(1&t),capture:!!(2&t)}),ps=t=>Oi.Z=t;export{hs as F,cn as H,Jn as a,cs as b,mn as c,pn as d,Hi as e,es as f,vi as g,sn as h,Ii as p,zi as r,ps as s}
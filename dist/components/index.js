export{getAssetPath,render,setAssetPath,setNonce,setPlatformOptions}from"@stencil/core/internal/client";
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var t=()=>({checkValidity(t){const e=t.input,i={message:"",isValid:!0,invalidKeys:[]};if(!e)return i;let o=!0;if("checkValidity"in e&&(o=e.checkValidity()),o)return i;if(i.isValid=!1,"validationMessage"in e&&(i.message=e.validationMessage),!("validity"in e))return i.invalidKeys.push("customError"),i;for(const t in e.validity)"valid"!==t&&e.validity[t]&&i.invalidKeys.push(t);return i}}),e=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}},i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=t=>{throw TypeError(t)},s=(t,e,a,s)=>{for(var r,n=s>1?void 0:s?o(e,a):e,l=t.length-1;l>=0;l--)(r=t[l])&&(n=(s?r(e,a,n):r(n))||n);return s&&n&&i(e,a,n),n},r=(t,e,i)=>e.has(t)||a("Cannot "+i);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n=globalThis,l=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c=Symbol(),h=new WeakMap;let d=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(l&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=h.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&h.set(e,t))}return t}toString(){return this.cssText}};const u=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new d(i,t,c)},f=l?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new d("string"==typeof t?t:t+"",void 0,c))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:p,defineProperty:m,getOwnPropertyDescriptor:b,getOwnPropertyNames:w,getOwnPropertySymbols:v,getPrototypeOf:g}=Object,y=globalThis,x=y.trustedTypes,k=x?x.emptyScript:"",C=y.reactiveElementPolyfillSupport,z={toAttribute(t,e){switch(e){case Boolean:t=t?k:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},L=(t,e)=>!p(t,e),$={attribute:!0,type:String,converter:z,reflect:!1,useDefault:!1,hasChanged:L};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&m(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:a}=b(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const s=o?.call(this);a?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){const t=this.properties,e=[...w(t),...v(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(f(t))}else void 0!==t&&e.push(f(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(l)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),o=n.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:z).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:z;this._$Em=o;const s=a.fromAttribute(e,t.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const o=this.constructor,a=this[t];if(i??=o.getPropertyOptions(t),!((i.hasChanged??L)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:a},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==a||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S.elementProperties=new Map,S.finalized=new Map,C?.({ReactiveElement:S}),(y.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,F=A.trustedTypes,M=F?F.createPolicy("lit-html",{createHTML:t=>t}):void 0,B="$lit$",I=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+I,O=`<${E}>`,q=document,T=()=>q.createComment(""),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,U="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,j=/>/g,N=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,H=/"/g,Y=/^(?:script|style|textarea|title)$/i,X=(t,...e)=>({_$litType$:1,strings:t,values:e}),W=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Q=new WeakMap,Z=q.createTreeWalker(q,129);function G(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,o=[];let a,s=2===e?"<svg>":3===e?"<math>":"",r=R;for(let e=0;e<i;e++){const i=t[e];let n,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===R?"!--"===l[1]?r=P:void 0!==l[1]?r=j:void 0!==l[2]?(Y.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=N):void 0!==l[3]&&(r=N):r===N?">"===l[0]?(r=a??R,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,n=l[1],r=void 0===l[3]?N:'"'===l[3]?H:V):r===H||r===V?r=N:r===P||r===j?r=R:(r=N,a=void 0);const d=r===N&&t[e+1].startsWith("/>")?" ":"";s+=r===R?i+O:c>=0?(o.push(n),i.slice(0,c)+B+i.slice(c)+I+d):i+I+(-2===c?e:d)}return[G(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class tt{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let a=0,s=0;const r=t.length-1,n=this.parts,[l,c]=J(t,e);if(this.el=tt.createElement(l,i),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=Z.nextNode())&&n.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(B)){const e=c[s++],i=o.getAttribute(t).split(I),r=/([.?@])?(.*)/.exec(e);n.push({type:1,index:a,name:r[2],strings:i,ctor:"."===r[1]?st:"?"===r[1]?rt:"@"===r[1]?nt:at}),o.removeAttribute(t)}else t.startsWith(I)&&(n.push({type:6,index:a}),o.removeAttribute(t));if(Y.test(o.tagName)){const t=o.textContent.split(I),e=t.length-1;if(e>0){o.textContent=F?F.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],T()),Z.nextNode(),n.push({type:2,index:++a});o.append(t[e],T())}}}else if(8===o.nodeType)if(o.data===E)n.push({type:2,index:a});else{let t=-1;for(;-1!==(t=o.data.indexOf(I,t+1));)n.push({type:7,index:a}),t+=I.length-1}a++}}static createElement(t,e){const i=q.createElement("template");return i.innerHTML=t,i}}function et(t,e,i=t,o){if(e===W)return e;let a=void 0!==o?i._$Co?.[o]:i._$Cl;const s=_(e)?void 0:e._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),void 0===s?a=void 0:(a=new s(t),a._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=a:i._$Cl=a),void 0!==a&&(e=et(t,a._$AS(t,e.values),a,o)),e}class it{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??q).importNode(e,!0);Z.currentNode=o;let a=Z.nextNode(),s=0,r=0,n=i[0];for(;void 0!==n;){if(s===n.index){let e;2===n.type?e=new ot(a,a.nextSibling,this,t):1===n.type?e=new n.ctor(a,n.name,n.strings,this,t):6===n.type&&(e=new lt(a,this,t)),this._$AV.push(e),n=i[++r]}s!==n?.index&&(a=Z.nextNode(),s++)}return Z.currentNode=q,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=et(this,t,e),_(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&_(this._$AH)?this._$AA.nextSibling.data=t:this.T(q.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=tt.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new it(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Q.get(t.strings);return void 0===e&&Q.set(t.strings,e=new tt(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const a of t)o===e.length?e.push(i=new ot(this.O(T()),this.O(T()),this,this.options)):i=e[o],i._$AI(a),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class at{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,a){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(t,e=this,i,o){const a=this.strings;let s=!1;if(void 0===a)t=et(this,t,e,0),s=!_(t)||t!==this._$AH&&t!==W,s&&(this._$AH=t);else{const o=t;let r,n;for(t=a[0],r=0;r<a.length-1;r++)n=et(this,o[i+r],e,r),n===W&&(n=this._$AH[r]),s||=!_(n)||n!==this._$AH[r],n===K?t=K:t!==K&&(t+=(n??"")+a[r+1]),this._$AH[r]=n}s&&!o&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends at{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class rt extends at{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class nt extends at{constructor(t,e,i,o,a){super(t,e,i,o,a),this.type=5}_$AI(t,e=this){if((t=et(this,t,e,0)??K)===W)return;const i=this._$AH,o=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==K&&(i===K||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class lt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const ct=A.litHtmlPolyfillSupport;ct?.(tt,ot),(A.litHtmlVersions??=[]).push("3.3.1");const ht=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let dt=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let a=o._$litPart$;if(void 0===a){const t=i?.renderBefore??null;o._$litPart$=a=new ot(e.insertBefore(T(),t),t,void 0,i??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};dt._$litElement$=!0,dt.finalized=!0,ht.litElementHydrateSupport?.({LitElement:dt});const ut=ht.litElementPolyfillSupport;ut?.({LitElement:dt}),(ht.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ft=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,pt={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:L},mt=(t=pt,e,i)=>{const{kind:o,metadata:a}=i;let s=globalThis.litPropertyMetadata.get(a);if(void 0===s&&globalThis.litPropertyMetadata.set(a,s=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const a=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,a,t)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const a=this[o];e.call(this,i),this.requestUpdate(o,a,t)}}throw Error("Unsupported decorator location: "+o)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt(t){return(e,i)=>"object"==typeof i?mt(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function wt(t){return bt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function gt(t){return(e,i)=>vt(e,i,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}
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
`,kt=class extends dt{constructor(){super(),((t,e)=>{e.has(t)?a("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,!1)})(this,yt),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(t,e)=>{if(this.internals?.states)try{e?this.internals.states.add(t):this.internals.states.delete(t)}catch(t){if(!(t+"").includes("must start with '--'"))throw t;console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill")}},has:t=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(t)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let t=this.constructor;for(let[e,i]of t.elementProperties)"inherit"===i.default&&void 0!==i.initial&&"string"==typeof e&&this.customStates.set(`initial-${e}-${i.initial}`,!0)}static get styles(){return[xt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `)),this.didSSR&&this.updateComplete.then((()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `))}))}attributeChangedCallback(t,e,i){((t,e)=>(r(t,e,"read from private field"),e.get(t)))(this,yt)||(this.constructor.elementProperties.forEach(((t,e)=>{t.reflect&&null!=this[e]&&this.initialReflectedProperties.set(e,this[e])})),((t,e)=>{r(t,e,"write to private field"),e.set(t,!0)})(this,yt)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach(((e,i)=>{t.has(i)&&null==this[i]&&(this[i]=e)}))}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach((t=>{t.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}))}update(t){try{super.update(t)}catch(t){if(this.didSSR&&!this.hasUpdated){const e=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});e.error=t,this.dispatchEvent(e)}throw t}}setStyle(t,e){if(this.style)this.style[t]=e;else if(null!=e){let i=this.getAttribute("style")||"";i&&(i+=" "),this.setAttribute("style",`${i}${function(t){return t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()))}(t)}: ${e};`)}}setStyleProperty(t,e){if(this.style)this.style.setProperty(t,e);else if(null!=e){let i=this.getAttribute("style")||"";i&&(i+=" "),this.setAttribute("style",`${i}${t}: ${e};`)}}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...e}))}};yt=new WeakMap,s([bt()],kt.prototype,"dir",2),s([bt()],kt.prototype,"lang",2),s([bt({type:Boolean,reflect:!0,attribute:"did-ssr"})],kt.prototype,"didSSR",2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ct=class extends kt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new e))},this.handleInteraction=t=>{const e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},"addEventListener"in this&&this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[{observedAttributes:["custom-error"],checkValidity(t){const e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}}]}static get observedAttributes(){const t=new Set(super.observedAttributes||[]);for(const e of this.validators)if(e.observedAttributes)for(const i of e.observedAttributes)t.add(i);return[...t]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then((()=>{this.updateValidity()})):this.updateValidity(),this.assumeInteractionOn.forEach((t=>{this.addEventListener?.(t,this.handleInteraction)}))}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),(t.has("value")||t.has("disabled")||t.has("defaultValue"))&&this.updateFormValue(this.value),t.has("disabled")&&(this.customStates.set("disabled",this.disabled),!this.hasAttribute("disabled")&&this.matches(":disabled")||this.toggleAttribute("disabled",this.disabled)),super.willUpdate(t),this.didSSR&&!this.hasUpdated?this.updateComplete.then((()=>this.updateValidity())):this.updateValidity()}updateFormValue(t){if(Array.isArray(t)){if(this.name){const e=new FormData;for(const i of t)e.append(this.name,i);this.setValue(e,e)}}else this.setValue(t,t)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(t){t?this.setAttribute("form",t):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){let e=t[2];e||(e=this.validationTarget),this.internals.setValidity(t[0],t[1],e||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const t=!!this.required,e=this.internals.validity.valid,i=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&i),this.customStates.set("user-valid",e&&i)}setCustomValidity(t){if(!t)return this.customError=null,void this.setValidity({});this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.didSSR&&!this.hasUpdated?this.updateComplete.then((()=>{this.value=t,"restore"===e&&this.resetValidity(),this.updateValidity()})):(this.value=t,"restore"===e&&this.resetValidity(),this.updateValidity())}setValue(...t){const[e,i]=t;this.internals.setFormValue(e,i)}get allValidators(){return[...this.constructor.validators||[],...this.validators||[]]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate)return void this.resetValidity();const t=this.allValidators;if(!t?.length)return;const e={customError:!!this.customError},i=this.validationTarget||this.input||void 0;let o="";for(const i of t){const{isValid:t,message:a,invalidKeys:s}=i.checkValidity(this);t||(o||(o=a),s?.length>=0&&s.forEach((t=>e[t]=!0)))}o||(o=this.validationMessage),this.setValidity(e,o,i)}};Ct.formAssociated=!0,s([bt({reflect:!0})],Ct.prototype,"name",2),s([bt({type:Boolean})],Ct.prototype,"disabled",2),s([bt({state:!0,attribute:!1})],Ct.prototype,"valueHasChanged",2),s([bt({state:!0,attribute:!1})],Ct.prototype,"hasInteracted",2),s([bt({attribute:"custom-error",reflect:!0})],Ct.prototype,"customError",2),s([bt({attribute:!1,state:!0,type:Object})],Ct.prototype,"validity",1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var zt={small:"s",medium:"m",large:"l"},Lt=new Set;function $t(t,e){e in zt&&!Lt.has(`${t}:${e}`)&&(Lt.add(`${t}:${e}`),console.warn(`[${t}] size="${e}" is deprecated. Use size="${zt[e]}" instead. The long-form value will be removed in the next major version.`))}
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
function Bt(t,e){const i={waitUntilFirstUpdate:!1,...e};return(e,o)=>{const{update:a}=e,s=Array.isArray(t)?t:[t];e.update=function(t){s.forEach((e=>{const a=e;if(t.has(a)){const e=t.get(a),s=this[a];e!==s&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[o](e,s))}})),a.call(this,t)}}}const It=new Set,Et=new Map;let Ot,qt="ltr",Tt="en";const _t="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(_t){const t=new MutationObserver(Ut);qt=document.documentElement.dir||"ltr",Tt=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Dt(...t){t.map((t=>{const e=t.$code.toLowerCase();Et.has(e)?Et.set(e,Object.assign(Object.assign({},Et.get(e)),t)):Et.set(e,t),Ot||(Ot=t)})),Ut()}function Ut(){_t&&(qt=document.documentElement.dir||"ltr",Tt=document.documentElement.lang||navigator.language),[...It.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}let Rt=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){It.add(this.host)}hostDisconnected(){It.delete(this.host)}dir(){return(""+(this.host.dir||qt)).toLowerCase()}lang(){return(""+(this.host.lang||Tt)).toLowerCase()}getTranslationData(t){var e,i;let o;try{o=new Intl.Locale(t.replace(/_/g,"-"))}catch(t){return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}const a=o.language.toLowerCase(),s=null!==(i=null===(e=o.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==i?i:"";return{locale:o,language:a,region:s,primary:Et.get(`${a}-${s}`),secondary:Et.get(a)}}exists(t,e){var i;const{primary:o,secondary:a}=this.getTranslationData(null!==(i=e.lang)&&void 0!==i?i:this.lang());return e=Object.assign({includeFallback:!1},e),!!(o&&o[t]||a&&a[t]||e.includeFallback&&Ot&&Ot[t])}term(t,...e){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let a;if(i&&i[t])a=i[t];else if(o&&o[t])a=o[t];else{if(!Ot||!Ot[t])return console.error("No translation found for: "+t),t+"";a=Ot[t]}return"function"==typeof a?a(...e):a}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return isNaN(t=Number(t))?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Pt={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",captions:"Captions",chooseDate:"Choose date",chooseDecade:"Choose decade",chooseMonth:"Choose month",chooseYear:"Choose year",clearEntry:"Clear entry",close:"Close",closeCalendar:"Close calendar",createOption:t=>`Create "${t}"`,copied:"Copied",copy:"Copy",currentValue:"Current value",date:"Date",datePickerKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the calendar.",day:"Day",incompleteDate:"Enter a complete date.",dropFileHere:"Drop file here or click to browse",decrement:"Decrement",dropFilesHere:"Drop files here or click to browse",empty:"Empty",endDate:"End date",error:"Error",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",increment:"Increment",loading:"Loading",month:"Month",moreOptions:"More Options",mute:"Mute",nextDecade:"Next decade",nextMonth:"Next month",nextSlide:"Next slide",nextVideo:"Next Video",nextYear:"Next year",numCharacters:t=>1===t?"1 character":t+" characters",numCharactersRemaining:t=>1===t?"1 character remaining":t+" characters remaining",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":t+" options selected",pause:"Pause",pauseAnimation:"Pause animation",pictureInPicture:"Picture in picture",play:"Play",playbackSpeed:"Playback speed",playlist:"Playlist",playAnimation:"Play animation",previousDecade:"Previous decade",previousMonth:"Previous month",previousSlide:"Previous slide",previousVideo:"Previous video",previousYear:"Previous year",progress:"Progress",rangeTooLong:t=>1===t?"Select a range no longer than 1 day":`Select a range no longer than ${t} days`,rangeTooShort:t=>1===t?"Select a range at least 1 day long":`Select a range at least ${t} days long`,readonly:"Read-only",selected:"Selected",selectedDateLabel:t=>"Selected: "+t,selectedRangeLabel:t=>"Selected range: "+t,selectionCleared:"Selection cleared",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>"Slide "+t,startDate:"Start date",today:"Today",toggleColorFormat:"Toggle color format",seek:"Seek",seekProgress:(t,e)=>`${t} of ${e}`,currentlyPlaying:"currently playing",unmute:"Unmute",videoPlayer:"Video player",volume:"Volume",year:"Year",zoomIn:"Zoom in",zoomOut:"Zoom out",am:"AM",chooseTime:"Choose time",closeTimeInput:"Close time picker",dayPeriod:"AM/PM",hour:"Hour",minute:"Minute",now:"Now",pm:"PM",second:"Second",time:"Time",timeInputKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the time picker."};Dt(Pt);var jt=Pt,Nt=class extends Rt{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||"en":super.lang()}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */Dt(jt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Vt=t=>(...e)=>({_$litDirective$:t,values:e});let Ht=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=Vt(class extends Ht{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const o=!!e[t];o===this.st.has(t)||this.nt?.has(t)||(o?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return W}}),Xt=t=>t??K
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Wt=Symbol.for(""),Kt=t=>{if(t?.r===Wt)return t?._$litStatic$},Qt=(t,...e)=>({_$litStatic$:e.reduce(((e,i,o)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[o+1]),t[0]),r:Wt}),Zt=new Map,Gt=(t=>(e,...i)=>{const o=i.length;let a,s;const r=[],n=[];let l,c=0,h=!1;for(;c<o;){for(l=e[c];c<o&&void 0!==(s=i[c],a=Kt(s));)l+=a+e[++c],h=!0;c!==o&&n.push(s),r.push(l),c++}if(c===o&&r.push(e[o]),h){const t=r.join("$$lit$$");void 0===(e=Zt.get(t))&&(r.raw=r,Zt.set(t,e=r)),i=n}return t(e,...i)})(X);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Jt=class extends Ct{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new St(this,"[default]","start","end"),this.localize=new Nt(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="m",this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,t()]}handleSizeChange(){$t(this.localName,this.size)}constructLightDOMButton(){const t=document.createElement("button");for(const e of this.attributes)"style"!==e.name&&t.setAttribute(e.name,e.value);return t.type=this.type,t.style.position="absolute !important",t.style.width="0 !important",t.style.height="0 !important",t.style.clipPath="inset(50%) !important",t.style.overflow="hidden !important",t.style.whiteSpace="nowrap !important",this.name&&(t.name=this.name),t.value=this.value||"",t}handleClick(t){if(this.disabled||this.loading)return t.preventDefault(),void t.stopImmediatePropagation();if("submit"!==this.type&&"reset"!==this.type)return;if(!this.getForm())return;const e=this.constructLightDOMButton();this.parentElement?.append(e),e.click(),e.remove()}handleInvalid(){this.dispatchEvent(new e)}handleLabelSlotChange(){const t=this.labelSlot.assignedNodes({flatten:!0});let e=!1,i=!1,o=!1,a=!1;[...t].forEach((t=>{t.nodeType===Node.ELEMENT_NODE?"wa-icon"===t.localName?(i=!0,e||(e=void 0!==t.label)):a=!0:t.nodeType===Node.TEXT_NODE&&(t.textContent?.trim()||"").length>0&&(o=!0)})),this.isIconButton=i&&!o&&!a,this.customStates.set("icon-button",this.isIconButton),this.isIconButton&&!e&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set("link",this.isLink())}handleLoadingChange(){this.customStates.set("loading",this.loading)}setValue(...t){}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=this.isLink(),e=t?Qt`a`:Qt`button`;return Gt`
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
    `}};Jt.shadowRootOptions={...Ct.shadowRootOptions,delegatesFocus:!0},Jt.css=[Ft,Mt,At],s([gt(".button")],Jt.prototype,"button",2),s([gt("slot:not([name])")],Jt.prototype,"labelSlot",2),s([wt()],Jt.prototype,"invalid",2),s([wt()],Jt.prototype,"isIconButton",2),s([bt()],Jt.prototype,"title",2),s([bt({reflect:!0})],Jt.prototype,"variant",2),s([bt({reflect:!0})],Jt.prototype,"appearance",2),s([bt({reflect:!0})],Jt.prototype,"size",2),s([Bt("size")],Jt.prototype,"handleSizeChange",1),s([bt({attribute:"with-caret",type:Boolean,reflect:!0})],Jt.prototype,"withCaret",2),s([bt({attribute:"with-start",type:Boolean})],Jt.prototype,"withStart",2),s([bt({attribute:"with-end",type:Boolean})],Jt.prototype,"withEnd",2),s([bt({type:Boolean})],Jt.prototype,"disabled",2),s([bt({type:Boolean,reflect:!0})],Jt.prototype,"loading",2),s([bt({type:Boolean,reflect:!0})],Jt.prototype,"pill",2),s([bt()],Jt.prototype,"type",2),s([bt({reflect:!0})],Jt.prototype,"name",2),s([bt({reflect:!0})],Jt.prototype,"value",2),s([bt({reflect:!0})],Jt.prototype,"href",2),s([bt()],Jt.prototype,"target",2),s([bt()],Jt.prototype,"rel",2),s([bt()],Jt.prototype,"download",2),s([bt({attribute:"formaction"})],Jt.prototype,"formAction",2),s([bt({attribute:"formenctype"})],Jt.prototype,"formEnctype",2),s([bt({attribute:"formmethod"})],Jt.prototype,"formMethod",2),s([bt({attribute:"formnovalidate",type:Boolean})],Jt.prototype,"formNoValidate",2),s([bt({attribute:"formtarget"})],Jt.prototype,"formTarget",2),s([Bt("disabled",{waitUntilFirstUpdate:!0})],Jt.prototype,"handleDisabledChange",1),s([Bt("href")],Jt.prototype,"handleHrefChange",1),s([Bt("loading",{waitUntilFirstUpdate:!0})],Jt.prototype,"handleLoadingChange",1),Jt=s([ft("wa-button")],Jt),Jt.disableWarning?.("change-in-update");
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
    `}};ee.css=te,ee=s([ft("wa-spinner")],ee);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ie=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}},oe=u`
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
`,ae=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}},se="";
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function re(){if(!se){const t=document.querySelector("[data-fa-kit-code]");t&&function(t){se=t}(t.getAttribute("data-fa-kit-code")||"")}return se}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ne="7.2.0",le={name:"default",resolver:(t,e="classic",i="solid")=>function(t,e,i){const o=function(t,e,i){let o="solid";return"chisel"===e&&(o="chisel-regular"),"etch"===e&&(o="etch-solid"),"graphite"===e&&(o="graphite-thin"),"jelly"===e&&(o="jelly-regular","duo-regular"===i&&(o="jelly-duo-regular"),"fill-regular"===i&&(o="jelly-fill-regular")),"jelly-duo"===e&&(o="jelly-duo-regular"),"jelly-fill"===e&&(o="jelly-fill-regular"),"notdog"===e&&("solid"===i&&(o="notdog-solid"),"duo-solid"===i&&(o="notdog-duo-solid")),"notdog-duo"===e&&(o="notdog-duo-solid"),"slab"===e&&("solid"!==i&&"regular"!==i||(o="slab-regular"),"press-regular"===i&&(o="slab-press-regular")),"slab-press"===e&&(o="slab-press-regular"),"thumbprint"===e&&(o="thumbprint-light"),"utility"===e&&(o="utility-semibold"),"utility-duo"===e&&(o="utility-duo-semibold"),"utility-fill"===e&&(o="utility-fill-semibold"),"whiteboard"===e&&(o="whiteboard-semibold"),"classic"===e&&("thin"===i&&(o="thin"),"light"===i&&(o="light"),"regular"===i&&(o="regular"),"solid"===i&&(o="solid")),"duotone"===e&&("thin"===i&&(o="duotone-thin"),"light"===i&&(o="duotone-light"),"regular"===i&&(o="duotone-regular"),"solid"===i&&(o="duotone")),"sharp"===e&&("thin"===i&&(o="sharp-thin"),"light"===i&&(o="sharp-light"),"regular"===i&&(o="sharp-regular"),"solid"===i&&(o="sharp-solid")),"sharp-duotone"===e&&("thin"===i&&(o="sharp-duotone-thin"),"light"===i&&(o="sharp-duotone-light"),"regular"===i&&(o="sharp-duotone-regular"),"solid"===i&&(o="sharp-duotone-solid")),"brands"===e&&(o="brands"),o}(0,e,i),a="".replace(/\/$/,"");if(a)return`${a}/${o}/${t}.svg`;const s=re();return s.length>0?`https://ka-p.fontawesome.com/releases/v${ne}/svgs/${o}/${t}.svg?token=${encodeURIComponent(s)}`:`https://ka-f.fontawesome.com/releases/v${ne}/svgs/${o}/${t}.svg`}(t,e,i),mutator:(t,e)=>{if(e?.family&&!t.hasAttribute("data-duotone-initialized")){const{family:i,variant:o}=e;if("duotone"===i||"sharp-duotone"===i||"notdog-duo"===i||"notdog"===i&&"duo-solid"===o||"jelly-duo"===i||"jelly"===i&&"duo-regular"===o||"utility-duo"===i||"thumbprint"===i){const i=[...t.querySelectorAll("path")],o=i.find((t=>!t.hasAttribute("opacity"))),a=i.find((t=>t.hasAttribute("opacity")));if(!o||!a)return;if(o.setAttribute("data-duotone-primary",""),a.setAttribute("data-duotone-secondary",""),e.swapOpacity&&o&&a){const t=a.getAttribute("opacity")||"0.4";o.style.setProperty("--path-opacity",t),a.style.setProperty("--path-opacity","1")}t.setAttribute("data-duotone-initialized","")}}}},ce={solid:{backward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>',"backward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',"closed-captioning":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>',"closed-captioning-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>',compress:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>',"ellipsis-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>',expand:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',forward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"forward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>',gauge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>',gear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',"picture-in-picture":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',"play-circle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',volume:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-low":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{calendar:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>',"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',clock:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},he=[le,{name:"system",resolver:(t,e="classic",i="solid")=>{let o=ce[i][t]??ce.regular[t]??ce.regular["circle-question"];return o?
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function(t){return"data:image/svg+xml,"+encodeURIComponent(t)}(o):""}}],de=new Set;function ue(t){return he.find((e=>e.name===t))}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fe={};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var pe,me=Symbol(),be=Symbol(),we=new Map,ve=class extends kt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(t,e)=>{let i;if(e?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=X`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;const i=this.shadowRoot.querySelector("[part='svg']");return"function"==typeof e.mutator&&e.mutator(i,this),this.svg}try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return 410===i.status?me:be}catch{return be}try{const t=document.createElement("div");t.innerHTML=await i.text();const e=t.firstElementChild;if("svg"!==e?.tagName?.toLowerCase())return me;pe||(pe=new DOMParser);const o=pe.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return o?(o.part.add("svg"),document.adoptNode(o)):me}catch{return me}}}connectedCallback(){super.connectedCallback(),function(t){de.add(t)}(this)}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",this.rotate+"deg"),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),function(t){de.delete(t)}(this)}async getIconSource(){const t=ue(this.library),e=this.family||"classic";if(this.name&&t){let i;try{i=await t.resolver(this.name,e,this.variant,this.autoWidth)}catch{i=void 0}return{url:i,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:t,fromLibrary:e}=await this.getIconSource(),i=e?ue(this.library):void 0;if(!t)return void(this.svg=null);let o=we.get(t);o||(o=this.resolveIcon(t,i),we.set(t,o));const a=await o;if(a===be&&we.delete(t),t===(await this.getIconSource()).url)if((t=>void 0!==t?._$litType$)(a))this.svg=a;else switch(a){case be:case me:this.svg=null,this.dispatchEvent(new ie);break;default:this.svg=a.cloneNode(!0),i?.mutator?.(this.svg,this),this.dispatchEvent(new ae)}}willUpdate(t){return this.style||this.setStyleProperty("--rotate-angle",this.rotate+"deg"),super.willUpdate(t)}updated(t){super.updated(t);const e=ue(this.library);this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",this.rotate+"deg");const i=this.shadowRoot?.querySelector("svg");i&&e?.mutator?.(i,this)}render(){return this.hasUpdated?this.svg:X`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};ve.css=oe,s([wt()],ve.prototype,"svg",2),s([bt({reflect:!0})],ve.prototype,"name",2),s([bt({reflect:!0})],ve.prototype,"family",2),s([bt({reflect:!0})],ve.prototype,"variant",2),s([bt({attribute:"auto-width",type:Boolean,reflect:!0})],ve.prototype,"autoWidth",2),s([bt({attribute:"swap-opacity",type:Boolean,reflect:!0})],ve.prototype,"swapOpacity",2),s([bt()],ve.prototype,"src",2),s([bt()],ve.prototype,"label",2),s([bt({reflect:!0})],ve.prototype,"library",2),s([bt({type:Number,reflect:!0})],ve.prototype,"rotate",2),s([bt({type:String,reflect:!0})],ve.prototype,"flip",2),s([bt({type:String,reflect:!0})],ve.prototype,"animation",2),s([Bt("label")],ve.prototype,"handleLabelChange",1),s([Bt(["family","name","library","variant","src","autoWidth","swapOpacity"],{waitUntilFirstUpdate:!0})],ve.prototype,"setIcon",1),ve=s([ft("wa-icon")],ve);
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function Ce(t){if(ke.add(t),!document.documentElement.classList.contains("wa-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}()+function(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}();let e=getComputedStyle(document.documentElement).scrollbarGutter;e&&"auto"!==e||(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",e),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",t+"px")}}function ze(t){ke.delete(t),0===ke.size&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function Le(t,e,i="vertical",o="smooth"){const a=
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}(t,e),s=a.top+e.scrollTop,r=a.left+e.scrollLeft,n=e.scrollLeft+e.offsetWidth,l=e.scrollTop,c=e.scrollTop+e.offsetHeight;"horizontal"!==i&&"both"!==i||(r<e.scrollLeft?e.scrollTo({left:r,behavior:o}):r+t.clientWidth>n&&e.scrollTo({left:r-e.offsetWidth+t.clientWidth,behavior:o})),"vertical"!==i&&"both"!==i||(s<l?e.scrollTo({top:s,behavior:o}):s+t.clientHeight>c&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:o}))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var $e=class extends kt{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Nt(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>{this.updateScrollControls()})),this.mutationObserver=new MutationObserver((t=>{t.some((t=>!["aria-labelledby","aria-controls"].includes(t.attributeName)))&&setTimeout((()=>this.setAriaLabels()));const e=t.filter((t=>t.target.closest("wa-tab-group")===this));if(e.some((t=>"disabled"===t.attributeName)))this.syncTabsAndPanels();else if(e.some((t=>"active"===t.attributeName))){const t=e.filter((t=>"active"===t.attributeName&&"wa-tab"===t.target.tagName.toLowerCase())).map((t=>t.target)).find((t=>t.active));t&&t.closest("wa-tab-group")===this&&this.setActiveTab(t)}})),this.updateComplete.then((()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav);new IntersectionObserver(((t,e)=>{if(t[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){const t=this.tabs.find((t=>t.panel===this.active));t&&this.setActiveTab(t)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});e.unobserve(t[0].target)}})).observe(this.tabGroup)}))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter((t=>"wa-tab"===t.tagName.toLowerCase()))}getAllPanels(){return[...this.defaultSlot.assignedElements()].filter((t=>"wa-tab-panel"===t.tagName.toLowerCase()))}getActiveTab(){return this.tabs.find((t=>t.active))}handleClick(t){const e=t.target.closest("wa-tab"),i=e?.closest("wa-tab-group");i===this&&null!==e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){const e=t.target.closest("wa-tab"),i=e?.closest("wa-tab-group");if(i===this)if(["Enter"," "].includes(t.key))null!==e&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault());else if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=this.tabs.find((t=>t.matches(":focus"))),i="rtl"===this.localize.dir();let o=null;if("wa-tab"===e?.tagName.toLowerCase()){if("Home"===t.key)o=this.focusableTabs[0];else if("End"===t.key)o=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(i?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&"ArrowUp"===t.key){const t=this.tabs.findIndex((t=>t===e));o=this.findNextFocusableTab(t,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(i?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&"ArrowDown"===t.key){const t=this.tabs.findIndex((t=>t===e));o=this.findNextFocusableTab(t,"forward")}if(!o)return;o.tabIndex=0,o.focus({preventScroll:!0}),"auto"===this.activation?this.setActiveTab(o,{scrollBehavior:"smooth"}):this.tabs.forEach((t=>{t.tabIndex=t===o?0:-1})),["top","bottom"].includes(this.placement)&&Le(o,this.nav,"horizontal"),t.preventDefault()}}}findNextFocusableTab(t,e){let i=null;const o="forward"===e?1:-1;let a=t+o;for(;t<this.tabs.length;){if(i=this.tabs[a]||null,null===i){i="forward"===e?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;a+=o}return i}handleScrollToStart(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e={emitEvents:!0,scrollBehavior:"auto",...e},t.closest("wa-tab-group")===this&&t!==this.activeTab&&!t.disabled){const i=this.activeTab;this.active=t.panel,this.activeTab=t,this.tabs.forEach((t=>{t.active=t===this.activeTab,t.tabIndex=t===this.activeTab?0:-1})),this.panels.forEach((t=>t.active=t.name===this.activeTab?.panel)),["top","bottom"].includes(this.placement)&&Le(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(i&&this.dispatchEvent(new ye({name:i.panel})),this.dispatchEvent(new ge({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach((t=>{const e=this.panels.find((e=>e.name===t.panel));e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))}))}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter((t=>!t.disabled)),this.panels=this.getAllPanels(),this.updateComplete.then((()=>this.updateScrollControls()))}updateActiveTab(){const t=this.tabs.find((t=>t.panel===this.active));t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}updateScrollControls(){this.hasScrollControls=!this.withoutScrollControls&&["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){const t=this.hasUpdated?"rtl"===this.localize.dir():"rtl"===this.dir;return X`
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
    `}};$e.css=xe,s([gt(".tab-group")],$e.prototype,"tabGroup",2),s([gt(".body slot")],$e.prototype,"defaultSlot",2),s([gt(".nav")],$e.prototype,"nav",2),s([wt()],$e.prototype,"hasScrollControls",2),s([bt({reflect:!0})],$e.prototype,"active",2),s([bt()],$e.prototype,"placement",2),s([bt()],$e.prototype,"activation",2),s([bt({attribute:"without-scroll-controls",type:Boolean})],$e.prototype,"withoutScrollControls",2),s([Bt("active")],$e.prototype,"updateActiveTab",1),s([Bt("withoutScrollControls",{waitUntilFirstUpdate:!0})],$e.prototype,"updateScrollControls",1),$e=s([ft("wa-tab-group")],$e);
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
    `}};Fe.css=Se,s([bt({reflect:!0})],Fe.prototype,"name",2),s([bt({type:Boolean,reflect:!0})],Fe.prototype,"active",2),s([bt({reflect:!0})],Fe.prototype,"role",2),s([Bt("active")],Fe.prototype,"handleActiveChange",1),Fe=s([ft("wa-tab-panel")],Fe);
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Be=0,Ie=class extends kt{constructor(){super(...arguments),this.attrId=++Be,this.componentId="wa-tab-"+this.attrId,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0,this.slot="nav",this.role="tab"}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.tabIndex=this.disabled&&!this.active?-1:0}render(){return this.id=this.id?.length>0?this.id:this.componentId,X`
      <div
        part="base"
        class=${Yt({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};Ie.css=Me,s([gt(".tab")],Ie.prototype,"tab",2),s([bt({reflect:!0})],Ie.prototype,"panel",2),s([bt({type:Boolean,reflect:!0})],Ie.prototype,"active",2),s([bt({type:Boolean,reflect:!0})],Ie.prototype,"disabled",2),s([bt({type:Number,reflect:!0})],Ie.prototype,"tabIndex",2),s([bt({reflect:!0})],Ie.prototype,"slot",2),s([bt({reflect:!0})],Ie.prototype,"role",2),s([Bt("active")],Ie.prototype,"handleActiveChange",1),s([Bt("disabled")],Ie.prototype,"handleDisabledChange",1),Ie=s([ft("wa-tab")],Ie);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ee=class extends Event{constructor(t){super("wa-select",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function*Oe(t=document.activeElement){null!=t&&(yield t,"shadowRoot"in t&&t.shadowRoot&&"closed"!==t.shadowRoot.mode&&(yield*Oe(t.shadowRoot.activeElement)))}
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
`,Te=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}},_e=class extends Event{constructor(t){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}},De=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}},Ue=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}},Re=[];
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function Pe(t){Re.push(t)}function je(t){for(let e=Re.length-1;e>=0;e--)if(Re[e]===t){Re.splice(e,1);break}}function Ne(t){return Re.length>0&&Re[Re.length-1]===t}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ve(t,e,i){return(t=>Object.is(t,-0)?0:t)(t<e?e:t>i?i:t)}function He(t=""){return`${t}${((t=21)=>{let e="",i=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&i[t]];return e})()}`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */async function Ye(t,e,i){return t.animate(e,i).finished.catch((()=>{}))}function Xe(t,e){return new Promise((i=>{const o=new AbortController,{signal:a}=o;if(t.classList.contains(e))return;t.classList.add(e);let s=!1,r=()=>{s||(s=!0,t.classList.remove(e),i(),o.abort())};t.addEventListener("animationend",r,{once:!0,signal:a}),t.addEventListener("animationcancel",r,{once:!0,signal:a}),requestAnimationFrame((()=>{s||0!==t.getAnimations().length||r()}))}))}function We(t){return(t=(""+t).toLowerCase()).indexOf("ms")>-1?parseFloat(t)||0:t.indexOf("s")>-1?1e3*(parseFloat(t)||0):parseFloat(t)||0}const Ke=Math.min,Qe=Math.max,Ze=Math.round,Ge=Math.floor,Je=t=>({x:t,y:t}),ti={left:"right",right:"left",bottom:"top",top:"bottom"},ei={start:"end",end:"start"};function ii(t,e,i){return Qe(t,Ke(e,i))}function oi(t,e){return"function"==typeof t?t(e):t}function ai(t){return t.split("-")[0]}function si(t){return t.split("-")[1]}function ri(t){return"x"===t?"y":"x"}function ni(t){return"y"===t?"height":"width"}const li=new Set(["top","bottom"]);function ci(t){return li.has(ai(t))?"y":"x"}function hi(t){return ri(ci(t))}function di(t){return t.replace(/start|end/g,(t=>ei[t]))}const ui=["left","right"],fi=["right","left"],pi=["top","bottom"],mi=["bottom","top"];function bi(t){return t.replace(/left|right|bottom|top/g,(t=>ti[t]))}function wi(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function vi(t){const{x:e,y:i,width:o,height:a}=t;return{width:o,height:a,top:i,left:e,right:e+o,bottom:i+a,x:e,y:i}}function gi(t,e,i){let{reference:o,floating:a}=t;const s=ci(e),r=hi(e),n=ni(r),l=ai(e),c="y"===s,h=o.x+o.width/2-a.width/2,d=o.y+o.height/2-a.height/2,u=o[n]/2-a[n]/2;let f;switch(l){case"top":f={x:h,y:o.y-a.height};break;case"bottom":f={x:h,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:d};break;case"left":f={x:o.x-a.width,y:d};break;default:f={x:o.x,y:o.y}}switch(si(e)){case"start":f[r]-=u*(i&&c?-1:1);break;case"end":f[r]+=u*(i&&c?-1:1)}return f}async function yi(t,e){var i;void 0===e&&(e={});const{x:o,y:a,platform:s,rects:r,elements:n,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:f=0}=oi(e,t),p=wi(f),m=n[u?"floating"===d?"reference":"floating":d],b=vi(await s.getClippingRect({element:null==(i=await(null==s.isElement?void 0:s.isElement(m)))||i?m:m.contextElement||await(null==s.getDocumentElement?void 0:s.getDocumentElement(n.floating)),boundary:c,rootBoundary:h,strategy:l})),w="floating"===d?{x:o,y:a,width:r.floating.width,height:r.floating.height}:r.reference,v=await(null==s.getOffsetParent?void 0:s.getOffsetParent(n.floating)),g=await(null==s.isElement?void 0:s.isElement(v))&&await(null==s.getScale?void 0:s.getScale(v))||{x:1,y:1},y=vi(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:n,rect:w,offsetParent:v,strategy:l}):w);return{top:(b.top-y.top+p.top)/g.y,bottom:(y.bottom-b.bottom+p.bottom)/g.y,left:(b.left-y.left+p.left)/g.x,right:(y.right-b.right+p.right)/g.x}}const xi=new Set(["left","top"]);function ki(){return"undefined"!=typeof window}function Ci(t){return $i(t)?(t.nodeName||"").toLowerCase():"#document"}function zi(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function Li(t){var e;return null==(e=($i(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function $i(t){return!!ki()&&(t instanceof Node||t instanceof zi(t).Node)}function Si(t){return!!ki()&&(t instanceof Element||t instanceof zi(t).Element)}function Ai(t){return!!ki()&&(t instanceof HTMLElement||t instanceof zi(t).HTMLElement)}function Fi(t){return!(!ki()||"undefined"==typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof zi(t).ShadowRoot)}const Mi=new Set(["inline","contents"]);function Bi(t){const{overflow:e,overflowX:i,overflowY:o,display:a}=Ni(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!Mi.has(a)}const Ii=new Set(["table","td","th"]);function Ei(t){return Ii.has(Ci(t))}const Oi=[":popover-open",":modal"];function qi(t){return Oi.some((e=>{try{return t.matches(e)}catch(t){return!1}}))}const Ti=["transform","translate","scale","rotate","perspective"],_i=["transform","translate","scale","rotate","perspective","filter"],Di=["paint","layout","strict","content"];function Ui(t){const e=Ri(),i=Si(t)?Ni(t):t;return Ti.some((t=>!!i[t]&&"none"!==i[t]))||!!i.containerType&&"normal"!==i.containerType||!e&&!!i.backdropFilter&&"none"!==i.backdropFilter||!e&&!!i.filter&&"none"!==i.filter||_i.some((t=>(i.willChange||"").includes(t)))||Di.some((t=>(i.contain||"").includes(t)))}function Ri(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}const Pi=new Set(["html","body","#document"]);function ji(t){return Pi.has(Ci(t))}function Ni(t){return zi(t).getComputedStyle(t)}function Vi(t){return Si(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Hi(t){if("html"===Ci(t))return t;const e=t.assignedSlot||t.parentNode||Fi(t)&&t.host||Li(t);return Fi(e)?e.host:e}function Yi(t){const e=Hi(t);return ji(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ai(e)&&Bi(e)?e:Yi(e)}function Xi(t,e,i){var o;void 0===e&&(e=[]),void 0===i&&(i=!0);const a=Yi(t),s=a===(null==(o=t.ownerDocument)?void 0:o.body),r=zi(a);if(s){const t=Wi(r);return e.concat(r,r.visualViewport||[],Bi(a)?a:[],t&&i?Xi(t):[])}return e.concat(a,Xi(a,[],i))}function Wi(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ki(t){const e=Ni(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const a=Ai(t),s=a?t.offsetWidth:i,r=a?t.offsetHeight:o,n=Ze(i)!==s||Ze(o)!==r;return n&&(i=s,o=r),{width:i,height:o,$:n}}function Qi(t){return Si(t)?t:t.contextElement}function Zi(t){const e=Qi(t);if(!Ai(e))return Je(1);const i=e.getBoundingClientRect(),{width:o,height:a,$:s}=Ki(e);let r=(s?Ze(i.width):i.width)/o,n=(s?Ze(i.height):i.height)/a;return r&&Number.isFinite(r)||(r=1),n&&Number.isFinite(n)||(n=1),{x:r,y:n}}const Gi=Je(0);function Ji(t){const e=zi(t);return Ri()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Gi}function to(t,e,i,o){void 0===e&&(e=!1),void 0===i&&(i=!1);const a=t.getBoundingClientRect(),s=Qi(t);let r=Je(1);e&&(o?Si(o)&&(r=Zi(o)):r=Zi(t));const n=function(t,e,i){return void 0===e&&(e=!1),!(!i||e&&i!==zi(t))&&e}(s,i,o)?Ji(s):Je(0);let l=(a.left+n.x)/r.x,c=(a.top+n.y)/r.y,h=a.width/r.x,d=a.height/r.y;if(s){const t=zi(s),e=o&&Si(o)?zi(o):o;let i=t,a=Wi(i);for(;a&&o&&e!==i;){const t=Zi(a),e=a.getBoundingClientRect(),o=Ni(a);l*=t.x,c*=t.y,h*=t.x,d*=t.y,l+=e.left+(a.clientLeft+parseFloat(o.paddingLeft))*t.x,c+=e.top+(a.clientTop+parseFloat(o.paddingTop))*t.y,i=zi(a),a=Wi(i)}}return vi({width:h,height:d,x:l,y:c})}function eo(t,e){const i=Vi(t).scrollLeft;return e?e.left+i:to(Li(t)).left+i}function io(t,e){const i=t.getBoundingClientRect();return{x:i.left+e.scrollLeft-eo(t,i),y:i.top+e.scrollTop}}const oo=new Set(["absolute","fixed"]);function ao(t,e,i){let o;if("viewport"===e)o=function(t,e){const i=zi(t),o=Li(t),a=i.visualViewport;let s=o.clientWidth,r=o.clientHeight,n=0,l=0;if(a){s=a.width,r=a.height;const t=Ri();(!t||t&&"fixed"===e)&&(n=a.offsetLeft,l=a.offsetTop)}const c=eo(o);if(c<=0){const t=o.ownerDocument,e=t.body,i=getComputedStyle(e),a=Math.abs(o.clientWidth-e.clientWidth-("CSS1Compat"===t.compatMode&&parseFloat(i.marginLeft)+parseFloat(i.marginRight)||0));a<=25&&(s-=a)}else c<=25&&(s+=c);return{width:s,height:r,x:n,y:l}}(t,i);else if("document"===e)o=function(t){const e=Li(t),i=Vi(t),o=t.ownerDocument.body,a=Qe(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=Qe(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-i.scrollLeft+eo(t);const n=-i.scrollTop;return"rtl"===Ni(o).direction&&(r+=Qe(e.clientWidth,o.clientWidth)-a),{width:a,height:s,x:r,y:n}}(Li(t));else if(Si(e))o=function(t,e){const i=to(t,!0,"fixed"===e),o=i.top+t.clientTop,a=i.left+t.clientLeft,s=Ai(t)?Zi(t):Je(1);return{width:t.clientWidth*s.x,height:t.clientHeight*s.y,x:a*s.x,y:o*s.y}}(e,i);else{const i=Ji(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return vi(o)}function so(t,e){const i=Hi(t);return!(i===e||!Si(i)||ji(i))&&("fixed"===Ni(i).position||so(i,e))}function ro(t,e,i){const o=Ai(e),a=Li(e),s="fixed"===i,r=to(t,!0,s,e);let n={scrollLeft:0,scrollTop:0};const l=Je(0);function c(){l.x=eo(a)}if(o||!o&&!s)if(("body"!==Ci(e)||Bi(a))&&(n=Vi(e)),o){const t=to(e,!0,s,e);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else a&&c();s&&!o&&a&&c();const h=!a||o||s?Je(0):io(a,n);return{x:r.left+n.scrollLeft-l.x-h.x,y:r.top+n.scrollTop-l.y-h.y,width:r.width,height:r.height}}function no(t){return"static"===Ni(t).position}function lo(t,e){if(!Ai(t)||"fixed"===Ni(t).position)return null;if(e)return e(t);let i=t.offsetParent;return Li(t)===i&&(i=i.ownerDocument.body),i}function co(t,e){const i=zi(t);if(qi(t))return i;if(!Ai(t)){let e=Hi(t);for(;e&&!ji(e);){if(Si(e)&&!no(e))return e;e=Hi(e)}return i}let o=lo(t,e);for(;o&&Ei(o)&&no(o);)o=lo(o,e);return o&&ji(o)&&no(o)&&!Ui(o)?i:o||function(t){let e=Hi(t);for(;Ai(e)&&!ji(e);){if(Ui(e))return e;if(qi(e))return null;e=Hi(e)}return null}(t)||i}const ho={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:i,offsetParent:o,strategy:a}=t;const s="fixed"===a,r=Li(o),n=!!e&&qi(e.floating);if(o===r||n&&s)return i;let l={scrollLeft:0,scrollTop:0},c=Je(1);const h=Je(0),d=Ai(o);if((d||!d&&!s)&&(("body"!==Ci(o)||Bi(r))&&(l=Vi(o)),Ai(o))){const t=to(o);c=Zi(o),h.x=t.x+o.clientLeft,h.y=t.y+o.clientTop}const u=!r||d||s?Je(0):io(r,l);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+h.x+u.x,y:i.y*c.y-l.scrollTop*c.y+h.y+u.y}},getDocumentElement:Li,getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:o,strategy:a}=t;const s=[..."clippingAncestors"===i?qi(e)?[]:function(t,e){const i=e.get(t);if(i)return i;let o=Xi(t,[],!1).filter((t=>Si(t)&&"body"!==Ci(t))),a=null;const s="fixed"===Ni(t).position;let r=s?Hi(t):t;for(;Si(r)&&!ji(r);){const e=Ni(r),i=Ui(r);i||"fixed"!==e.position||(a=null),(s?!i&&!a:!i&&"static"===e.position&&a&&oo.has(a.position)||Bi(r)&&!i&&so(t,r))?o=o.filter((t=>t!==r)):a=e,r=Hi(r)}return e.set(t,o),o}(e,this._c):[].concat(i),o],r=s.reduce(((t,i)=>{const o=ao(e,i,a);return t.top=Qe(o.top,t.top),t.right=Ke(o.right,t.right),t.bottom=Ke(o.bottom,t.bottom),t.left=Qe(o.left,t.left),t}),ao(e,s[0],a));return{width:r.right-r.left,height:r.bottom-r.top,x:r.left,y:r.top}},getOffsetParent:co,getElementRects:async function(t){const e=this.getOffsetParent||co,i=this.getDimensions,o=await i(t.floating);return{reference:ro(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:i}=Ki(t);return{width:e,height:i}},getScale:Zi,isElement:Si,isRTL:function(t){return"rtl"===Ni(t).direction}};function uo(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function fo(t,e,i,o){void 0===o&&(o={});const{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:r="function"==typeof ResizeObserver,layoutShift:n="function"==typeof IntersectionObserver,animationFrame:l=!1}=o,c=Qi(t),h=a||s?[...c?Xi(c):[],...Xi(e)]:[];h.forEach((t=>{a&&t.addEventListener("scroll",i,{passive:!0}),s&&t.addEventListener("resize",i)}));const d=c&&n?function(t,e){let i,o=null;const a=Li(t);function s(){var t;clearTimeout(i),null==(t=o)||t.disconnect(),o=null}return function r(n,l){void 0===n&&(n=!1),void 0===l&&(l=1),s();const c=t.getBoundingClientRect(),{left:h,top:d,width:u,height:f}=c;if(n||e(),!u||!f)return;const p={rootMargin:-Ge(d)+"px "+-Ge(a.clientWidth-(h+u))+"px "+-Ge(a.clientHeight-(d+f))+"px "+-Ge(h)+"px",threshold:Qe(0,Ke(1,l))||1};let m=!0;function b(e){const o=e[0].intersectionRatio;if(o!==l){if(!m)return r();o?r(!1,o):i=setTimeout((()=>{r(!1,1e-7)}),1e3)}1!==o||uo(c,t.getBoundingClientRect())||r(),m=!1}try{o=new IntersectionObserver(b,{...p,root:a.ownerDocument})}catch(t){o=new IntersectionObserver(b,p)}o.observe(t)}(!0),s}(c,i):null;let u,f=-1,p=null;r&&(p=new ResizeObserver((t=>{let[o]=t;o&&o.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame((()=>{var t;null==(t=p)||t.observe(e)}))),i()})),c&&!l&&p.observe(c),p.observe(e));let m=l?to(t):null;return l&&function e(){const o=to(t);m&&!uo(m,o)&&i(),m=o,u=requestAnimationFrame(e)}(),i(),()=>{var t;h.forEach((t=>{a&&t.removeEventListener("scroll",i),s&&t.removeEventListener("resize",i)})),null==d||d(),null==(t=p)||t.disconnect(),p=null,l&&cancelAnimationFrame(u)}}const po=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var i,o;const{x:a,y:s,placement:r,middlewareData:n}=e,l=await async function(t,e){const{placement:i,platform:o,elements:a}=t,s=await(null==o.isRTL?void 0:o.isRTL(a.floating)),r=ai(i),n=si(i),l="y"===ci(i),c=xi.has(r)?-1:1,h=s&&l?-1:1,d=oi(e,t);let{mainAxis:u,crossAxis:f,alignmentAxis:p}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return n&&"number"==typeof p&&(f="end"===n?-1*p:p),l?{x:f*h,y:u*c}:{x:u*c,y:f*h}}(e,t);return r===(null==(i=n.offset)?void 0:i.placement)&&null!=(o=n.arrow)&&o.alignmentOffset?{}:{x:a+l.x,y:s+l.y,data:{...l,placement:r}}}}},mo=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:a}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:n={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}},...l}=oi(t,e),c={x:i,y:o},h=await yi(e,l),d=ci(ai(a)),u=ri(d);let f=c[u],p=c[d];s&&(f=ii(f+h["y"===u?"top":"left"],f,f-h["y"===u?"bottom":"right"])),r&&(p=ii(p+h["y"===d?"top":"left"],p,p-h["y"===d?"bottom":"right"]));const m=n.fn({...e,[u]:f,[d]:p});return{...m,data:{x:m.x-i,y:m.y-o,enabled:{[u]:s,[d]:r}}}}}},bo=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var i,o;const{placement:a,middlewareData:s,rects:r,initialPlacement:n,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0,...b}=oi(t,e);if(null!=(i=s.arrow)&&i.alignmentOffset)return{};const w=ai(a),v=ci(n),g=ai(n)===n,y=await(null==l.isRTL?void 0:l.isRTL(c.floating)),x=u||(g||!m?[bi(n)]:function(t){const e=bi(t);return[di(t),e,di(e)]}(n)),k="none"!==p;!u&&k&&x.push(...function(t,e,i,o){const a=si(t);let s=function(t,e,i){switch(t){case"top":case"bottom":return i?e?fi:ui:e?ui:fi;case"left":case"right":return e?pi:mi;default:return[]}}(ai(t),"start"===i,o);return a&&(s=s.map((t=>t+"-"+a)),e&&(s=s.concat(s.map(di)))),s}(n,m,p,y));const C=[n,...x],z=await yi(e,b),L=[];let $=(null==(o=s.flip)?void 0:o.overflows)||[];if(h&&L.push(z[w]),d){const t=function(t,e,i){void 0===i&&(i=!1);const o=si(t),a=hi(t),s=ni(a);let r="x"===a?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=bi(r)),[r,bi(r)]}(a,r,y);L.push(z[t[0]],z[t[1]])}if($=[...$,{placement:a,overflows:L}],!L.every((t=>t<=0))){var S,A;const t=((null==(S=s.flip)?void 0:S.index)||0)+1,e=C[t];if(e&&("alignment"!==d||v===ci(e)||$.every((t=>ci(t.placement)!==v||t.overflows[0]>0))))return{data:{index:t,overflows:$},reset:{placement:e}};let i=null==(A=$.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:A.placement;if(!i)switch(f){case"bestFit":{var F;const t=null==(F=$.filter((t=>{if(k){const e=ci(t.placement);return e===v||"y"===e}return!0})).map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:F[0];t&&(i=t);break}case"initialPlacement":i=n}if(a!==i)return{reset:{placement:i}}}return{}}}},wo=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var i,o;const{placement:a,rects:s,platform:r,elements:n}=e,{apply:l=()=>{},...c}=oi(t,e),h=await yi(e,c),d=ai(a),u=si(a),f="y"===ci(a),{width:p,height:m}=s.floating;let b,w;"top"===d||"bottom"===d?(b=d,w=u===(await(null==r.isRTL?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(w=d,b="end"===u?"top":"bottom");const v=m-h.top-h.bottom,g=p-h.left-h.right;let y=Ke(m-h[b],v),x=Ke(p-h[w],g);if(null!=(i=e.middlewareData.shift)&&i.enabled.x&&(x=g),null!=(o=e.middlewareData.shift)&&o.enabled.y&&(y=v),!e.middlewareData.shift&&!u){const t=Qe(h.left,0),e=Qe(h.right,0),i=Qe(h.top,0),o=Qe(h.bottom,0);f?x=p-2*(0!==t||0!==e?t+e:Qe(h.left,h.right)):y=m-2*(0!==i||0!==o?i+o:Qe(h.top,h.bottom))}await l({...e,availableWidth:x,availableHeight:y});const k=await r.getDimensions(n.floating);return p!==k.width||m!==k.height?{reset:{rects:!0}}:{}}}},vo=(t,e,i)=>{const o=new Map,a={platform:ho,...i},s={...a.platform,_c:o};return(async(t,e,i)=>{const{placement:o="bottom",strategy:a="absolute",middleware:s=[],platform:r}=i,n=s.filter(Boolean),l=await(null==r.isRTL?void 0:r.isRTL(e));let c=await r.getElementRects({reference:t,floating:e,strategy:a}),{x:h,y:d}=gi(c,o,l),u=o,f={},p=0;for(let i=0;i<n.length;i++){const{name:s,fn:m}=n[i],{x:b,y:w,data:v,reset:g}=await m({x:h,y:d,initialPlacement:o,placement:u,strategy:a,middlewareData:f,rects:c,platform:r,elements:{reference:t,floating:e}});h=null!=b?b:h,d=null!=w?w:d,f={...f,[s]:{...f[s],...v}},g&&p<=50&&(p++,"object"==typeof g&&(g.placement&&(u=g.placement),g.rects&&(c=!0===g.rects?await r.getElementRects({reference:t,floating:e,strategy:a}):g.rects),({x:h,y:d}=gi(c,u,l))),i=-1)}return{x:h,y:d,placement:u,strategy:a,middlewareData:f}})(t,e,{...a,platform:s})};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var go=new Set,yo=class extends kt{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new Nt(this),this.userTypedQuery="",this.openSubmenuStack=[],this.open=!1,this.size="m",this.placement="bottom-start",this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async t=>{const e="rtl"===this.localize.dir();if("Escape"===t.key&&this.open&&Ne(this)){const e=this.getTrigger();return t.preventDefault(),t.stopPropagation(),this.open=!1,void e?.focus({preventScroll:!0})}const i=[...Oe()].find((t=>"wa-dropdown-item"===t.localName)),o="wa-dropdown-item"===i?.localName,a=this.getCurrentSubmenuItem(),s=!!a;let r,n,l,c;if(s?(r=this.getSubmenuItems(a),n=r.find((t=>t.active||t===i)),l=n?r.indexOf(n):-1):(r=this.getItems(),n=r.find((t=>t.active||t===i)),l=n?r.indexOf(n):-1),"ArrowUp"===t.key&&(t.preventDefault(),t.stopPropagation(),c=l>0?r[l-1]:r[r.length-1]),"ArrowDown"===t.key&&(t.preventDefault(),t.stopPropagation(),c=-1!==l&&l<r.length-1?r[l+1]:r[0]),t.key===(e?"ArrowLeft":"ArrowRight")&&o&&n&&n.hasSubmenu)return t.preventDefault(),t.stopPropagation(),n.submenuOpen=!0,this.addToSubmenuStack(n),void setTimeout((()=>{const t=this.getSubmenuItems(n);t.length>0&&(t.forEach(((t,e)=>t.active=0===e)),t[0].focus({preventScroll:!0}))}),0);if(t.key===(e?"ArrowRight":"ArrowLeft")&&s){t.preventDefault(),t.stopPropagation();const e=this.removeFromSubmenuStack();e&&(e.submenuOpen=!1,setTimeout((()=>{e.focus({preventScroll:!0}),e.active=!0,("submenu"===e.slot?this.getSubmenuItems(e.parentElement):this.getItems()).forEach((t=>{t!==e&&(t.active=!1)}))}),0))}else{if("Home"!==t.key&&"End"!==t.key||(t.preventDefault(),t.stopPropagation(),c="Home"===t.key?r[0]:r[r.length-1]),"Tab"===t.key&&await this.hideMenu(),1!==t.key.length||t.metaKey||t.ctrlKey||t.altKey||" "===t.key&&""===this.userTypedQuery||(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout((()=>{this.userTypedQuery=""}),1e3),this.userTypedQuery+=t.key,r.some((t=>{const e=(t.textContent||"").trim().toLowerCase(),i=this.userTypedQuery.trim().toLowerCase();return!!e.startsWith(i)&&(c=t,!0)}))),c)return t.preventDefault(),t.stopPropagation(),r.forEach((t=>t.active=t===c)),c.focus({preventScroll:!0}),void c.scrollIntoView({block:"nearest"});("Enter"===t.key||" "===t.key&&""===this.userTypedQuery)&&o&&n&&(t.preventDefault(),t.stopPropagation(),n.hasSubmenu?(n.submenuOpen=!0,this.addToSubmenuStack(n),setTimeout((()=>{const t=this.getSubmenuItems(n);t.length>0&&(t.forEach(((t,e)=>t.active=0===e)),t[0].focus({preventScroll:!0}))}),0)):this.makeSelection(n))}},this.handleDocumentPointerDown=t=>{t.composedPath().some((t=>t instanceof HTMLElement&&(t===this||t.closest('wa-dropdown, [part="submenu"]'))))||(this.open=!1)},this.handleGlobalMouseMove=t=>{const e=this.getCurrentSubmenuItem();if(!e?.submenuOpen||!e.submenuElement)return;const i=e.submenuElement.getBoundingClientRect(),o="rtl"===this.localize.dir(),a=o?i.right:i.left,s=o?Math.max(t.clientX,a):Math.min(t.clientX,a),r=Math.max(i.top,Math.min(t.clientY,i.bottom));e.submenuElement.style.setProperty("--safe-triangle-cursor-x",s+"px"),e.submenuElement.style.setProperty("--safe-triangle-cursor-y",r+"px");const n=t.composedPath(),l=e.matches(":hover"),c=!!e.submenuElement?.matches(":hover"),h=l||!!n.find((t=>t===e)),d=c||!!n.find((t=>t instanceof HTMLElement&&t.closest('[part="submenu"]')===e.submenuElement));h||d||setTimeout((()=>{l||c||(e.submenuOpen=!1)}),100)}}handleSizeChange(){$t(this.localName,this.size)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach((t=>t())),this.submenuCleanups.clear(),document.removeEventListener("mousemove",this.handleGlobalMouseMove),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),je(this)}firstUpdated(){this.syncAriaAttributes()}async updated(t){if(t.has("open")){const e=t.get("open");if(e===this.open)return;if(void 0===e&&!1===this.open)return;this.customStates.set("open",this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())}t.has("size")&&this.syncItemSizes()}getItems(t=!1){const e=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter((t=>"wa-dropdown-item"===t.localName));return t?e:e.filter((t=>!t.disabled))}getSubmenuItems(t,e=!1){const i=t.shadowRoot?.querySelector('slot[name="submenu"]')||t.querySelector('slot[name="submenu"]');if(!i)return[];const o=i.assignedElements({flatten:!0}).filter((t=>"wa-dropdown-item"===t.localName));return e?o:o.filter((t=>!t.disabled))}syncItemSizes(){(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter((t=>"wa-dropdown-item"===t.localName)).forEach((t=>t.size=this.size))}addToSubmenuStack(t){const e=this.openSubmenuStack.indexOf(t);-1!==e?this.openSubmenuStack=this.openSubmenuStack.slice(0,e+1):this.openSubmenuStack.push(t)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach((t=>{t.submenuOpen=!1})),this.openSubmenuStack=[]}closeSiblingSubmenus(t){const e=t.closest('wa-dropdown-item:not([slot="submenu"])');let i;i=e?this.getSubmenuItems(e,!0):this.getItems(!0),i.forEach((e=>{e!==t&&e.submenuOpen&&(e.submenuOpen=!1)})),this.openSubmenuStack.includes(t)||this.openSubmenuStack.push(t)}getTrigger(){return this.querySelector('[slot="trigger"]')}async showMenu(){if(!this.getTrigger()||!this.popup||!this.menu)return;const t=new Te;if(this.dispatchEvent(t),t.defaultPrevented)return void(this.open=!1);if(this.popup.active)return;go.forEach((t=>t.open=!1)),this.popup.active=!0,this.open=!0,go.add(this),Pe(this),this.syncAriaAttributes(),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("hide"),await Xe(this.menu,"show");const e=this.getItems();e.length>0&&(e.forEach(((t,e)=>t.active=0===e)),e[0].focus({preventScroll:!0})),this.dispatchEvent(new Ue)}async hideMenu(){if(!this.popup||!this.menu)return;const t=new _e({source:this});this.dispatchEvent(t),t.defaultPrevented?this.open=!0:(this.open=!1,go.delete(this),je(this),this.syncAriaAttributes(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("show"),await Xe(this.menu,"hide"),this.popup.active=this.open,this.dispatchEvent(new De))}handleMenuClick(t){const e=t.target.closest("wa-dropdown-item");if(e&&!e.disabled)return e.hasSubmenu?(e.submenuOpen||(this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),e.submenuOpen=!0),void t.stopPropagation()):void this.makeSelection(e)}async handleMenuSlotChange(){const t=this.getItems(!0);await Promise.all(t.map((t=>t.updateComplete))),this.syncItemSizes();const e=t.some((t=>"checkbox"===t.type)),i=t.some((t=>t.hasSubmenu));t.forEach(((t,o)=>{t.active=0===o,t.checkboxAdjacent=e,t.submenuAdjacent=i}))}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(t){const e=t.detail.item;this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),this.setupSubmenuPosition(e),this.processSubmenuItems(e)}setupSubmenuPosition(t){if(!t.submenuElement)return;this.cleanupSubmenuPosition(t);const e=fo(t,t.submenuElement,(()=>{this.positionSubmenu(t),this.updateSafeTriangleCoordinates(t)}));this.submenuCleanups.set(t,e);const i=t.submenuElement.querySelector('slot[name="submenu"]');i&&(i.removeEventListener("slotchange",yo.handleSubmenuSlotChange),i.addEventListener("slotchange",yo.handleSubmenuSlotChange),yo.handleSubmenuSlotChange({target:i}))}static handleSubmenuSlotChange(t){const e=t.target;if(!e)return;const i=e.assignedElements().filter((t=>"wa-dropdown-item"===t.localName));if(0===i.length)return;const o=i.some((t=>t.hasSubmenu)),a=i.some((t=>"checkbox"===t.type));i.forEach((t=>{t.submenuAdjacent=o,t.checkboxAdjacent=a}))}processSubmenuItems(t){if(!t.submenuElement)return;const e=this.getSubmenuItems(t,!0),i=e.some((t=>t.hasSubmenu));e.forEach((t=>{t.submenuAdjacent=i}))}cleanupSubmenuPosition(t){const e=this.submenuCleanups.get(t);e&&(e(),this.submenuCleanups.delete(t))}positionSubmenu(t){if(!t.submenuElement)return;const e="rtl"===this.localize.dir();vo(t,t.submenuElement,{placement:e?"left-start":"right-start",middleware:[po({mainAxis:0,crossAxis:-5}),bo({fallbackStrategy:"bestFit"}),mo({padding:8})]}).then((({x:e,y:i,placement:o})=>{t.submenuElement.setAttribute("data-placement",o),Object.assign(t.submenuElement.style,{left:e+"px",top:i+"px"})}))}updateSafeTriangleCoordinates(t){if(!t.submenuElement||!t.submenuOpen)return;const e=document.activeElement?.matches(":focus-visible");if(e)return void t.submenuElement.style.setProperty("--safe-triangle-visible","none");t.submenuElement.style.setProperty("--safe-triangle-visible","block");const i=t.submenuElement.getBoundingClientRect(),o="rtl"===this.localize.dir();t.submenuElement.style.setProperty("--safe-triangle-submenu-start-x",(o?i.right:i.left)+"px"),t.submenuElement.style.setProperty("--safe-triangle-submenu-start-y",i.top+"px"),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-x",(o?i.right:i.left)+"px"),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-y",i.bottom+"px")}makeSelection(t){const e=this.getTrigger();if(t.disabled)return;"checkbox"===t.type&&(t.checked=!t.checked);const i=new Ee({item:t});this.dispatchEvent(i),i.defaultPrevented||(this.open=!1,e?.focus({preventScroll:!0}))}async syncAriaAttributes(){const t=this.getTrigger();let e;t&&("wa-button"===t.localName?(await customElements.whenDefined("wa-button"),await t.updateComplete,e=t.shadowRoot.querySelector('[part="base"]')):e=t,e.hasAttribute("id")||e.setAttribute("id",He("wa-dropdown-trigger-")),e.setAttribute("aria-haspopup","menu"),e.setAttribute("aria-expanded",this.open?"true":"false"),this.menu?.setAttribute("aria-expanded","false"))}render(){return X`
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
    `}};yo.css=[At,qe],s([gt("slot:not([name])")],yo.prototype,"defaultSlot",2),s([gt("#menu")],yo.prototype,"menu",2),s([gt("wa-popup")],yo.prototype,"popup",2),s([bt({type:Boolean,reflect:!0})],yo.prototype,"open",2),s([bt({reflect:!0})],yo.prototype,"size",2),s([Bt("size")],yo.prototype,"handleSizeChange",1),s([bt({reflect:!0})],yo.prototype,"placement",2),s([bt({type:Number})],yo.prototype,"distance",2),s([bt({type:Number})],yo.prototype,"skidding",2),yo=s([ft("wa-dropdown")],yo);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var xo=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,ko=class extends kt{constructor(){super(...arguments),this.hasSlotController=new St(this,"[default]","start","end"),this.active=!1,this.variant="default",this.size="m",this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type="normal",this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",this.submenuOpen?"true":"false")):(this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"))},this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}}handleSizeChange(){$t(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.addEventListener?.("click",this.handleHostClick),this.addEventListener?.("mouseenter",this.handleMouseEnter.bind(this)),this.shadowRoot?.addEventListener?.("click",this.handleClick,{capture:!0}),this.shadowRoot?.addEventListener?.("slotchange",this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener?.("click",this.handleHostClick),this.removeEventListener?.("mouseenter",this.handleMouseEnter),this.shadowRoot?.removeEventListener?.("click",this.handleClick,{capture:!0}),this.shadowRoot?.removeEventListener?.("slotchange",this.handleSlotChange)}firstUpdated(){this.setAttribute("tabindex","-1"),this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState()}updated(t){t.has("active")&&(this.setAttribute("tabindex",this.active?"0":"-1"),this.customStates.set("active",this.active)),t.has("checked")&&("checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked"),this.customStates.set("checked",this.checked)),t.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),t.has("type")&&("checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))),t.has("submenuOpen")&&(this.customStates.set("submenu-open",this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set("has-submenu",this.hasSubmenu)}async openSubmenu(){const t=this.submenuElement;this.hasSubmenu&&t&&this.isConnected&&(this.notifyParentOfOpening(),t.showPopover?.(),t.hidden=!1,t.setAttribute("data-visible",""),this.submenuOpen=!0,this.setAttribute("aria-expanded","true"),await Xe(t,"show"),setTimeout((()=>{const t=this.getSubmenuItems();t.length>0&&(t.forEach(((t,e)=>t.active=0===e)),t[0].focus({preventScroll:!0}))}),0))}notifyParentOfOpening(){const t=new CustomEvent("submenu-opening",{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(t);const e=this.parentElement;e&&[...e.children].filter((t=>t!==this&&"wa-dropdown-item"===t.localName&&t.getAttribute("slot")===this.getAttribute("slot")&&t.submenuOpen)).forEach((t=>{t.submenuOpen=!1}))}async closeSubmenu(){const t=this.submenuElement;this.hasSubmenu&&t&&(this.submenuOpen=!1,this.setAttribute("aria-expanded","false"),t.hidden||(await Xe(t,"hide"),t?.isConnected&&(t.hidden=!0,t.removeAttribute("data-visible"),t.hidePopover?.())))}getSubmenuItems(){return[...this.children].filter((t=>"wa-dropdown-item"===t.localName&&"submenu"===t.getAttribute("slot")&&!t.hasAttribute("disabled")))}handleMouseEnter(){this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}render(){return X`
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
    `}};ko.css=xo,s([gt("#submenu")],ko.prototype,"submenuElement",2),s([bt({type:Boolean})],ko.prototype,"active",2),s([bt({reflect:!0})],ko.prototype,"variant",2),s([bt({reflect:!0})],ko.prototype,"size",2),s([Bt("size")],ko.prototype,"handleSizeChange",1),s([bt({attribute:"checkbox-adjacent",type:Boolean,reflect:!0})],ko.prototype,"checkboxAdjacent",2),s([bt({attribute:"submenu-adjacent",type:Boolean,reflect:!0})],ko.prototype,"submenuAdjacent",2),s([bt()],ko.prototype,"value",2),s([bt({reflect:!0})],ko.prototype,"type",2),s([bt({type:Boolean})],ko.prototype,"checked",2),s([bt({type:Boolean,reflect:!0})],ko.prototype,"disabled",2),s([bt({type:Boolean,reflect:!0})],ko.prototype,"submenuOpen",2),s([wt()],ko.prototype,"hasSubmenu",2),ko=s([ft("wa-dropdown-item")],ko);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Co=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}},zo=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function Lo(t){return function(t){for(let e=t;e;e=$o(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=$o(t);e;e=$o(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||Ui(t))return e;if("BODY"===e.tagName)return e}}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */(t)}function $o(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function So(t){return null!==t&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t instanceof Element)}var Ao=!!globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),Fo=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect();let i=0,o=0,a=0,s=0,r=0,n=0,l=0,c=0;this.placement.includes("top")||this.placement.includes("bottom")?t.top<e.top?(i=t.left,o=t.bottom,a=t.right,s=t.bottom,r=e.left,n=e.top,l=e.right,c=e.top):(i=e.left,o=e.bottom,a=e.right,s=e.bottom,r=t.left,n=t.top,l=t.right,c=t.top):t.left<e.left?(i=t.right,o=t.top,a=e.left,s=e.top,r=t.right,n=t.bottom,l=e.left,c=e.bottom):(i=e.right,o=e.top,a=t.left,s=t.top,r=e.right,n=e.bottom,l=t.left,c=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",i+"px"),this.style.setProperty("--hover-bridge-top-left-y",o+"px"),this.style.setProperty("--hover-bridge-top-right-x",a+"px"),this.style.setProperty("--hover-bridge-top-right-y",s+"px"),this.style.setProperty("--hover-bridge-bottom-left-x",r+"px"),this.style.setProperty("--hover-bridge-bottom-left-y",n+"px"),this.style.setProperty("--hover-bridge-bottom-right-x",l+"px"),this.style.setProperty("--hover-bridge-bottom-right-y",c+"px")}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Ao,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchorEl=this.anchor instanceof Element||So(this.anchor)?this.anchor:this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&this.active&&this.isConnected&&(this.popup?.showPopover?.(),this.cleanup=fo(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((t=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>t()))):t()}))}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;const t=[po({mainAxis:this.distance,crossAxis:this.skidding})];let e;this.sync?t.push(wo({apply:({rects:t})=>{const e="height"===this.sync||"both"===this.sync;this.popup.style.width="width"===this.sync||"both"===this.sync?t.reference.width+"px":"",this.popup.style.height=e?t.reference.height+"px":""}})):(this.popup.style.width="",this.popup.style.height=""),this.SUPPORTS_POPOVER&&!So(this.anchor)&&"scroll"===this.boundary&&(e=Xi(this.anchorEl).filter((t=>t instanceof Element))),this.flip&&t.push(bo({boundary:this.flipBoundary||e,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(mo({boundary:this.shiftBoundary||e,padding:this.shiftPadding})),this.autoSize?t.push(wo({boundary:this.autoSizeBoundary||e,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",e+"px"):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",t+"px"):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push((t=>({name:"arrow",options:t,async fn(e){const{x:i,y:o,placement:a,rects:s,platform:r,elements:n,middlewareData:l}=e,{element:c,padding:h=0}=oi(t,e)||{};if(null==c)return{};const d=wi(h),u={x:i,y:o},f=hi(a),p=ni(f),m=await r.getDimensions(c),b="y"===f,w=b?"top":"left",v=b?"bottom":"right",g=b?"clientHeight":"clientWidth",y=s.reference[p]+s.reference[f]-u[f]-s.floating[p],x=u[f]-s.reference[f],k=await(null==r.getOffsetParent?void 0:r.getOffsetParent(c));let C=k?k[g]:0;C&&await(null==r.isElement?void 0:r.isElement(k))||(C=n.floating[g]||s.floating[p]);const z=y/2-x/2,L=C/2-m[p]/2-1,$=Ke(d[w],L),S=Ke(d[v],L),A=$,F=C-m[p]-S,M=C/2-m[p]/2+z,B=ii(A,M,F),I=!l.arrow&&null!=si(a)&&M!==B&&s.reference[p]/2-(M<A?$:S)-m[p]/2<0,E=I?M<A?M-A:M-F:0;return{[f]:u[f]+E,data:{[f]:B,centerOffset:M-B-E,...I&&{alignmentOffset:E}},reset:I}}}))({element:this.arrowEl,padding:this.arrowPadding}));const i=this.SUPPORTS_POPOVER?t=>ho.getOffsetParent(t,Lo):ho.getOffsetParent;vo(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.SUPPORTS_POPOVER?"absolute":"fixed",platform:{...ho,getOffsetParent:i}}).then((({x:t,y:e,middlewareData:i,placement:o})=>{const a="rtl"===this.localize.dir(),s={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:t+"px",top:e+"px"}),this.arrow){const t=i.arrow.x,e=i.arrow.y;let o="",r="",n="",l="";if("start"===this.arrowPlacement){const i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",r=a?i:"",l=a?"":i}else if("end"===this.arrowPlacement){const i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";r=a?"":i,l=a?i:"",n="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(l="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof t?t+"px":"",o="number"==typeof e?e+"px":"");Object.assign(this.arrowEl.style,{top:o,right:r,bottom:n,left:l,[s]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.dispatchEvent(new Co)}render(){return X`
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
    `}};Fo.css=zo,s([gt(".popup")],Fo.prototype,"popup",2),s([gt(".arrow")],Fo.prototype,"arrowEl",2),s([bt({attribute:!1,type:Boolean})],Fo.prototype,"SUPPORTS_POPOVER",2),s([bt()],Fo.prototype,"anchor",2),s([bt({type:Boolean,reflect:!0})],Fo.prototype,"active",2),s([bt({reflect:!0})],Fo.prototype,"placement",2),s([bt()],Fo.prototype,"boundary",2),s([bt({type:Number})],Fo.prototype,"distance",2),s([bt({type:Number})],Fo.prototype,"skidding",2),s([bt({type:Boolean})],Fo.prototype,"arrow",2),s([bt({attribute:"arrow-placement"})],Fo.prototype,"arrowPlacement",2),s([bt({attribute:"arrow-padding",type:Number})],Fo.prototype,"arrowPadding",2),s([bt({type:Boolean})],Fo.prototype,"flip",2),s([bt({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map((t=>t.trim())).filter((t=>""!==t)),toAttribute:t=>t.join(" ")}})],Fo.prototype,"flipFallbackPlacements",2),s([bt({attribute:"flip-fallback-strategy"})],Fo.prototype,"flipFallbackStrategy",2),s([bt({type:Object})],Fo.prototype,"flipBoundary",2),s([bt({attribute:"flip-padding",type:Number})],Fo.prototype,"flipPadding",2),s([bt({type:Boolean})],Fo.prototype,"shift",2),s([bt({type:Object})],Fo.prototype,"shiftBoundary",2),s([bt({attribute:"shift-padding",type:Number})],Fo.prototype,"shiftPadding",2),s([bt({attribute:"auto-size"})],Fo.prototype,"autoSize",2),s([bt()],Fo.prototype,"sync",2),s([bt({type:Object})],Fo.prototype,"autoSizeBoundary",2),s([bt({attribute:"auto-size-padding",type:Number})],Fo.prototype,"autoSizePadding",2),s([bt({attribute:"hover-bridge",type:Boolean})],Fo.prototype,"hoverBridge",2),Fo=s([ft("wa-popup")],Fo);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Mo=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}},Bo=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Io=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.variant="neutral",this.appearance="filled-outlined",this.size="m",this.pill=!1,this.withRemove=!1}handleSizeChange(){$t(this.localName,this.size)}handleRemoveClick(){this.dispatchEvent(new Mo)}render(){return X`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */Io.css=[Bo,Mt,At],s([bt({reflect:!0})],Io.prototype,"variant",2),s([bt({reflect:!0})],Io.prototype,"appearance",2),s([bt({reflect:!0})],Io.prototype,"size",2),s([Bt("size")],Io.prototype,"handleSizeChange",1),s([bt({type:Boolean,reflect:!0})],Io.prototype,"pill",2),s([bt({attribute:"with-remove",type:Boolean})],Io.prototype,"withRemove",2),Io=s([ft("wa-tag")],Io);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Eo=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function Oo(t,e){"Enter"!==t.key||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||setTimeout((()=>{t.defaultPrevented||t.isComposing||function(t){let e=null;if("form"in t&&(e=t.form),!e&&"getForm"in t&&(e=t.getForm()),!e)return;const i=[...e.elements];if(1===i.length)return void e.requestSubmit(null);const o=i.find((t=>"submit"===t.type&&!t.matches(":disabled")));o&&(["input","button"].includes(o.localName)?e.requestSubmit(o):o.click())}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */(e)}))}var qo=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,To=u`
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
 */;const _o=Vt(class extends Ht{constructor(t){if(super(t),3!==t.type&&1!==t.type&&4!==t.type)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===W||e===K)return e;const i=t.element,o=t.name;if(3===t.type){if(e===i[o])return W}else if(4===t.type){if(!!e===i.hasAttribute(o))return W}else if(1===t.type&&i.getAttribute(o)===e+"")return W;return((t,e=fe)=>{t._$AH=e})(t),e}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Do=class extends Ct{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new St(this,"hint","label"),this.localize=new Nt(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="m",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,t()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}updateFormValue(t){null!=t?super.updateFormValue(t):this.setValue("",null)}handleSizeChange(){$t(this.localName,this.size)}handleChange(t){this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleClearClick(t){t.preventDefault(),""!==this.value&&(this.value="",this.updateComplete.then((()=>{this.dispatchEvent(new Eo),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(t){Oo(t,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(t){super.updated(t),(t.has("value")||t.has("defaultValue")||t.has("type"))&&(this.input&&["number","date","time","datetime-local"].includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set("blank",!this.value),this.updateValidity())}handleStepChange(){this.input.step=this.step+"",this.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o="preserve"){this.input.setRangeText(t,e??this.input.selectionStart,i??this.input.selectionEnd,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){const t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),i=!!this.label||!!t,o=!!this.hint||!!e,a=(!this.didSSR||this.hasUpdated)&&this.withClear&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value&&this.value.length>0);return X`
      <label
        part="form-control-label label"
        class=${Yt({label:!0,"has-label":i})}
        for="input"
        aria-hidden=${i?"false":"true"}
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
          .value=${_o(this.value??"")}
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

        ${a?X`
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
        class=${Yt({"has-slotted":o})}
        aria-hidden=${o?"false":"true"}
        >${this.hint}</slot
      >
    `}};Do.css=[At,To,qo],Do.shadowRootOptions={...Ct.shadowRootOptions,delegatesFocus:!0},s([gt("input")],Do.prototype,"input",2),s([bt()],Do.prototype,"title",2),s([bt({reflect:!0})],Do.prototype,"type",2),s([wt()],Do.prototype,"value",1),s([bt({attribute:"value",reflect:!0})],Do.prototype,"defaultValue",2),s([bt({reflect:!0})],Do.prototype,"size",2),s([Bt("size")],Do.prototype,"handleSizeChange",1),s([bt({reflect:!0})],Do.prototype,"appearance",2),s([bt({type:Boolean,reflect:!0})],Do.prototype,"pill",2),s([bt()],Do.prototype,"label",2),s([bt({attribute:"hint"})],Do.prototype,"hint",2),s([bt({attribute:"with-clear",type:Boolean})],Do.prototype,"withClear",2),s([bt()],Do.prototype,"placeholder",2),s([bt({type:Boolean,reflect:!0})],Do.prototype,"readonly",2),s([bt({attribute:"password-toggle",type:Boolean})],Do.prototype,"passwordToggle",2),s([bt({attribute:"password-visible",type:Boolean})],Do.prototype,"passwordVisible",2),s([bt({attribute:"without-spin-buttons",type:Boolean,reflect:!0})],Do.prototype,"withoutSpinButtons",2),s([bt({type:Boolean,reflect:!0})],Do.prototype,"required",2),s([bt()],Do.prototype,"pattern",2),s([bt({type:Number})],Do.prototype,"minlength",2),s([bt({type:Number})],Do.prototype,"maxlength",2),s([bt()],Do.prototype,"min",2),s([bt()],Do.prototype,"max",2),s([bt()],Do.prototype,"step",2),s([bt()],Do.prototype,"autocapitalize",2),s([bt({type:Boolean,converter:{fromAttribute:t=>!(!t||"off"===t),toAttribute:t=>t?"on":"off"}})],Do.prototype,"autocorrect",2),s([bt()],Do.prototype,"autocomplete",2),s([bt({type:Boolean})],Do.prototype,"autofocus",2),s([bt()],Do.prototype,"enterkeyhint",2),s([bt({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],Do.prototype,"spellcheck",2),s([bt()],Do.prototype,"inputmode",2),s([bt({attribute:"with-label",type:Boolean})],Do.prototype,"withLabel",2),s([bt({attribute:"with-hint",type:Boolean})],Do.prototype,"withHint",2),s([Bt("step",{waitUntilFirstUpdate:!0})],Do.prototype,"handleStepChange",1),Do=s([ft("wa-input")],Do),Do.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Uo=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Ro=class extends kt{constructor(){super(...arguments),this.hasSlotController=new St(this,"footer","header","media","header-actions","footer-actions","actions"),this.appearance="outlined",this.withHeader=!1,this.withMedia=!1,this.withFooter=!1,this.withHeaderActions=!1,this.withFooterActions=!1,this.orientation="vertical"}willUpdate(t){this.withHeader=this.hasSlotController.test("header","withHeader"),this.withMedia=this.hasSlotController.test("media","withMedia"),this.withFooter=this.hasSlotController.test("footer","withFooter"),super.willUpdate(t)}render(){if("horizontal"===this.orientation)return X`
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
    `}};Ro.css=[At,Uo],s([bt({reflect:!0})],Ro.prototype,"appearance",2),s([bt({attribute:"with-header",type:Boolean,reflect:!0})],Ro.prototype,"withHeader",2),s([bt({attribute:"with-media",type:Boolean,reflect:!0})],Ro.prototype,"withMedia",2),s([bt({attribute:"with-footer",type:Boolean,reflect:!0})],Ro.prototype,"withFooter",2),s([bt({attribute:"with-header-actions",type:Boolean,reflect:!0})],Ro.prototype,"withHeaderActions",2),s([bt({attribute:"with-footer-actions",type:Boolean,reflect:!0})],Ro.prototype,"withFooterActions",2),s([bt({reflect:!0})],Ro.prototype,"orientation",2),Ro=s([ft("wa-card")],Ro),Ro.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Po=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,jo=class extends kt{constructor(){super(...arguments),this.orientation="horizontal"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.orientation)}};jo.css=Po,s([bt({reflect:!0})],jo.prototype,"orientation",2),s([Bt("orientation")],jo.prototype,"handleVerticalChange",1),jo=s([ft("wa-divider")],jo);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var No=u`
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
`,Vo=(t={})=>{let{validationElement:e,validationProperty:i}=t;e||"undefined"!=typeof document&&"createElement"in document&&(e=Object.assign(document.createElement("input"),{required:!0})),i||(i="value");const o={observedAttributes:["required"],message:e?.validationMessage,checkValidity(t){const e={message:"",isValid:!0,invalidKeys:[]};return t.required??t.hasAttribute("required")?(!t[i]&&(e.message="function"==typeof o.message?o.message(t):o.message||"",e.isValid=!1,e.invalidKeys.push("valueMissing")),e):e}};return o};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ho(t,e){return new Promise((i=>{t.addEventListener(e,(function o(a){a.target===t&&(t.removeEventListener(e,o),i())}))}))}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Yo=class extends Ht{constructor(t){if(super(t),this.it=K,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===K||null==t)return this._t=void 0,this.it=t;if(t===W)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Yo.directiveName="unsafeHTML",Yo.resultType=1;const Xo=Vt(Yo);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Wo=class extends Ct{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.cachedOptions=null,this.hasSlotController=new St(this,"hint","label"),this.localize=new Nt(this),this.selectionOrder=new Map,this.typeToSelectString="",this.slotChangePending=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="m",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=t=>X`
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
      `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,i=null!==e.closest('[part~="clear-button"]'),o=null!==e.closest("wa-button");if(!i&&!o){if("Escape"===t.key&&this.open&&Ne(this)&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===t.key||" "===t.key&&""===this.typeToSelectString)return t.preventDefault(),t.stopImmediatePropagation(),this.open?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then((()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=this.getAllOptions(),i=e.indexOf(this.currentOption);let o=Math.max(0,i);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===t.key?(o=i+1,o>e.length-1&&(o=0)):"ArrowUp"===t.key?(o=i-1,o<0&&(o=e.length-1)):"Home"===t.key?o=0:"End"===t.key&&(o=e.length-1),this.setCurrentOption(e[o])}if(1===t.key?.length||"Backspace"===t.key){const e=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if("Backspace"===t.key)return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout((()=>this.typeToSelectString=""),1e3),"Backspace"===t.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const t of e)if(t.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(t);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}static get validators(){const t=[Vo({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...t]}get validationTarget(){return this.valueInput}set defaultValue(t){this._defaultValue=this.convertDefaultValue(t)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}rawValuesEqual(t,e){return null==t&&null==e||null!=t&&null!=e&&t.length===e.length&&t.every(((t,i)=>t===e[i]))}convertDefaultValue(t){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(t)&&(t=t[0]),t}set value(t){let e=this.value;t instanceof FormData&&(t=t.getAll(this.name)),null==t||Array.isArray(t)||(t=[t]);const i=this._value;this._value=t??null,this.rawValuesEqual(i,this._value)||(this.valueHasChanged=!0,this.requestUpdate("value",e))}get value(){let t=this._value??this.defaultValue??null;null!=t&&(t=Array.isArray(t)?t:[t]),this.optionValues=new Set(this.getAllOptions().filter((t=>!t.disabled)).map((t=>t.value)));let e=t;return null!=t&&(e=t.filter((t=>this.optionValues.has(t))),e=this.multiple?e:e[0],e=e??null),e}handleSizeChange(){$t(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.processSlotChange(),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.cachedOptions=null}updateDefaultValue(){const t=this.getAllOptions().filter((t=>t.hasAttribute("selected")||t.defaultSelected));if(t.length>0){const e=t.map((t=>t.value));this._defaultValue=this.multiple?e:e[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),Pe(this),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),je(this),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(t){t.preventDefault()}handleComboboxMouseDown(t){const e=t.composedPath().some((t=>t instanceof Element&&"wa-button"===t.tagName.toLowerCase()));this.disabled||e||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.hasInteracted=!0,this.valueHasChanged=!0,null!==this.value&&(this.displayLabel="",this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then((()=>{this.dispatchEvent(new Eo),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const e=t.target.closest("wa-option");e&&!e.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then((()=>this.displayInput.focus({preventScroll:!0}))),this.requestUpdate("value"),this.updateComplete.then((()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){this.slotChangePending||(this.slotChangePending=!0,queueMicrotask((()=>{this.slotChangePending=!1,this.processSlotChange()})))}processSlotChange(){if(customElements.get("wa-option")||customElements.whenDefined("wa-option").then((()=>this.handleDefaultSlotChange())),this.didSSR&&!this.hasUpdated)return void this.updateComplete.then((()=>{this.handleDefaultSlotChange()}));this.cachedOptions=null;const t=this.getAllOptions();this.updateDefaultValue();let e=this.value;if(null==e||!this.valueHasChanged&&!this.hasInteracted)return void this.selectionChanged();Array.isArray(e)||(e=[e]);const i=t.filter((t=>e.includes(t.value)));this.setSelectedOptions(i)}handleTagRemove(t,e){if(t.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let i=e;if(!i){const e=t.target.closest("wa-tag[data-value]");if(e){const t=e.dataset.value;i=this.selectedOptions.find((e=>e.value===t))}}i&&(this.toggleOptionSelection(i,!1),this.updateComplete.then((()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})))}getAllOptions(){return this.cachedOptions?this.cachedOptions:this?.querySelectorAll?(this.cachedOptions=[...this.querySelectorAll("wa-option")],this.cachedOptions):[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(t){this.getAllOptions().forEach((t=>{t.current=!1,t.tabIndex=-1})),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus({preventScroll:!0}))}setSelectedOptions(t){const e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach((t=>{i.includes(t)||(t.selected=!1)})),i.length&&i.forEach((t=>t.selected=!0)),this.selectionChanged()}toggleOptionSelection(t,e){t.selected=!0===e||!1===e?e:!t.selected,this.selectionChanged()}selectionChanged(){const t=this.getAllOptions().filter((t=>{if(!this.hasInteracted&&!this.valueHasChanged){const e=this.defaultValue,i=Array.isArray(e)?e:[e];return t.hasAttribute("selected")||t.defaultSelected||t.selected||i?.includes(t.value)}return t.selected})),e=new Set(t.map((t=>t.value)));for(const t of this.selectionOrder.keys())e.has(t)||this.selectionOrder.delete(t);let i=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(const e of t)this.selectionOrder.has(e.value)||this.selectionOrder.set(e.value,i++);this.selectedOptions=t.sort(((t,e)=>(this.selectionOrder.get(t.value)??0)-(this.selectionOrder.get(e.value)??0)));let o=new Set(this.selectedOptions.map((t=>t.value)));if(o.size>0||this._value){const t=this._value;if(null==this._value){let t=this.defaultValue??[];this._value=Array.isArray(t)?t:[t]}this._value=this._value?.filter((t=>!this.optionValues?.has(t)))??null,this._value?.unshift(...o),this.requestUpdate("value",t)}if(this.multiple)this.displayLabel=this.placeholder&&!this.value?.length?"":this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const t=this.selectedOptions[0];this.displayLabel=t?.label??""}this.updateComplete.then((()=>{this.updateValidity()}))}get tags(){return this.selectedOptions.map(((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,e);return i?"string"==typeof i?Xo(i):i:null}return e===this.maxOptionsVisible?X`
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
        `:null}))}updated(t){super.updated(t),(t.has("value")||t.has("displayLabel"))&&this.customStates.set("blank",!this.value&&!this.displayLabel)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],i=t.filter((t=>e.includes(t.value)));this.setSelectedOptions(i),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());const t=new Te;if(this.dispatchEvent(t),t.defaultPrevented)return void(this.open=!1);this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame((()=>{this.setCurrentOption(this.currentOption)})),await Xe(this.popup.popup,"show"),this.currentOption&&Le(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new Ue)}else{const t=new _e;if(this.dispatchEvent(t),t.defaultPrevented)return void(this.open=!1);this.removeOpenListeners(),await Xe(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new De)}}async show(){if(!this.open&&!this.disabled)return this.open=!0,Ho(this,"wa-after-show");this.open=!1}async hide(){if(this.open&&!this.disabled)return this.open=!1,Ho(this,"wa-after-hide");this.open=!1}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then((()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}render(){const t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),i=!!this.label||!!t,o=!!this.hint||!!e,a=!!this.hasUpdated&&this.withClear&&!this.disabled&&(this.displayLabel||this.value&&this.value.length>0);return X`
      <div
        part="form-control"
        class=${Yt({"form-control":!0,"form-control-has-label":i})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${Yt({label:!0,"has-label":i})}
          aria-hidden=${i?"false":"true"}
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

              ${a?X`
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
          class=${Yt({"has-slotted":o})}
          aria-hidden=${o?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};Wo.css=[No,To,At],s([gt(".select")],Wo.prototype,"popup",2),s([gt(".combobox")],Wo.prototype,"combobox",2),s([gt(".display-input")],Wo.prototype,"displayInput",2),s([gt(".value-input")],Wo.prototype,"valueInput",2),s([gt(".listbox")],Wo.prototype,"listbox",2),s([wt()],Wo.prototype,"displayLabel",2),s([wt()],Wo.prototype,"currentOption",2),s([wt()],Wo.prototype,"selectedOptions",2),s([bt({reflect:!0})],Wo.prototype,"name",2),s([bt({attribute:!1})],Wo.prototype,"defaultValue",1),s([bt({attribute:"value",reflect:!1})],Wo.prototype,"value",1),s([bt({reflect:!0})],Wo.prototype,"size",2),s([Bt("size")],Wo.prototype,"handleSizeChange",1),s([bt()],Wo.prototype,"placeholder",2),s([bt({type:Boolean,reflect:!0})],Wo.prototype,"multiple",2),s([bt({attribute:"max-options-visible",type:Number})],Wo.prototype,"maxOptionsVisible",2),s([bt({type:Boolean})],Wo.prototype,"disabled",2),s([bt({attribute:"with-clear",type:Boolean})],Wo.prototype,"withClear",2),s([bt({type:Boolean,reflect:!0})],Wo.prototype,"open",2),s([bt({reflect:!0})],Wo.prototype,"appearance",2),s([bt({type:Boolean,reflect:!0})],Wo.prototype,"pill",2),s([bt()],Wo.prototype,"label",2),s([bt({reflect:!0})],Wo.prototype,"placement",2),s([bt({attribute:"hint"})],Wo.prototype,"hint",2),s([bt({attribute:"with-label",type:Boolean})],Wo.prototype,"withLabel",2),s([bt({attribute:"with-hint",type:Boolean})],Wo.prototype,"withHint",2),s([bt({type:Boolean,reflect:!0})],Wo.prototype,"required",2),s([bt({attribute:!1})],Wo.prototype,"getTag",2),s([Bt("disabled",{waitUntilFirstUpdate:!0})],Wo.prototype,"handleDisabledChange",1),s([Bt("value",{waitUntilFirstUpdate:!0})],Wo.prototype,"handleValueChange",1),s([Bt("open",{waitUntilFirstUpdate:!0})],Wo.prototype,"handleOpenChange",1),Wo=s([ft("wa-select")],Wo),Wo.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ko=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function Qo(t,e=0){if(!t||!globalThis.Node)return"";if("function"==typeof t[Symbol.iterator])return(Array.isArray(t)?t:[...t]).map((t=>Qo(t,--e))).join("");let i=t;if(i.nodeType===Node.TEXT_NODE)return i.textContent??"";if(i.nodeType===Node.ELEMENT_NODE){let t=i;if(t.hasAttribute("slot")||t.matches("style, script"))return"";if(t instanceof HTMLSlotElement){let i=t.assignedNodes({flatten:!0});if(i.length>0)return Qo(i,--e)}return e>-1?Qo(t,--e):t.textContent??""}return i.hasChildNodes()?Qo(i.childNodes,--e):""}var Zo=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.cachedDefaultLabel="",this.isInitialized=!1,this.isDefaultLabelDirty=!0,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.handleHover=t=>{"mouseenter"===t.type?this.customStates.set("hover",!0):"mouseleave"===t.type&&this.customStates.set("hover",!1)}}set label(t){const e=this._label;this._label=t||"",this._label!==e&&this.requestUpdate("label",e)}get label(){return this._label?this._label:this.defaultLabel}get defaultLabel(){return!this.isDefaultLabelDirty&&this.cachedDefaultLabel||this.updateDefaultLabel(),this.cachedDefaultLabel}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){this.isDefaultLabelDirty=!0,this.isInitialized?(customElements.whenDefined("wa-select").then((()=>{const t=this.closest("wa-select");t&&t.handleDefaultSlotChange()})),customElements.whenDefined("wa-combobox").then((()=>{const t=this.closest("wa-combobox");t&&t.handleDefaultSlotChange()}))):this.isInitialized=!0}willUpdate(t){t.has("defaultSelected")&&(this.didSSR&&this.hasUpdated||!this.didSSR)&&this.syncDefaultSelected(),super.willUpdate(t)}syncDefaultSelected(){if("closest"in this&&!this.closest("wa-combobox, wa-select")?.hasInteracted&&this.defaultSelected){const t=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",t)}}updated(t){t.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected)),t.has("value")&&("string"!=typeof this.value&&(this.value=this.value+""),this.handleDefaultSlotChange()),t.has("current")&&this.customStates.set("current",this.current),super.updated(t)}async firstUpdated(t){if(super.firstUpdated(t),this.didSSR&&!this.hasUpdated?(await this.updateComplete,this.syncDefaultSelected()):this.syncDefaultSelected(),this.selected&&!this.defaultSelected){const t=this.closest("wa-select, wa-combobox");t&&!t.hasInteracted&&(await customElements.whenDefined(t?.localName),await t.updateComplete,t.selectionChanged?.())}}updateDefaultLabel(){let t=this.cachedDefaultLabel;this.cachedDefaultLabel=Qo(this).trim(),this.isDefaultLabelDirty=!1;let e=this.cachedDefaultLabel!==t;return!this._label&&e&&this.requestUpdate("label",t),e}render(){let t=this.selected;return this.didSSR&&!this.hasUpdated?(this.updateComplete.then((()=>{this.requestUpdate()})),K):X`
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
    `}};Zo.css=Ko,s([gt(".label")],Zo.prototype,"defaultSlot",2),s([wt()],Zo.prototype,"current",2),s([bt({reflect:!0})],Zo.prototype,"value",2),s([bt({type:Boolean})],Zo.prototype,"disabled",2),s([bt({type:Boolean,attribute:!1})],Zo.prototype,"selected",2),s([bt({type:Boolean,attribute:"selected"})],Zo.prototype,"defaultSelected",2),s([bt()],Zo.prototype,"label",1),Zo=s([ft("wa-option")],Zo);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Go=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Jo=class extends Ct{constructor(){super(...arguments),this.hasSlotController=new St(this,"hint"),this.localize=new Nt(this),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="m",this.disabled=!1,this._checked=null,this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint="",this.withHint=!1}static get validators(){return[...super.validators,t()]}get value(){return this._value??"on"}set value(t){this._value=t}handleSizeChange(){$t(this.localName,this.size)}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(t){this._checked=!!t,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then((()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleKeyDown(t){const e="rtl"===this.localize.dir();"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=e,this.updateComplete.then((()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!e,this.updateComplete.then((()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})))}willUpdate(t){super.willUpdate(t),(t.has("value")||t.has("checked")||t.has("defaultChecked"))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){!this.didSSR||this.hasUpdated?(this.setValue(this.checked?this.value:null,this._value),this.updateValidity()):this.updateComplete.then((()=>{this.handleValueOrCheckedChange()}))}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set("checked",this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}setValue(t,e){this.checked?this.internals.setFormValue(t??"on",e):this.internals.setFormValue(null,null)}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){const t=this.hasSlotController.test("hint","withHint"),e=!!this.hint||!!t;return X`
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
          .checked=${_o(this.checked)}
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
    `}};Jo.shadowRootOptions={...Ct.shadowRootOptions,delegatesFocus:!0},Jo.css=[To,At,Go],s([gt('input[type="checkbox"]')],Jo.prototype,"input",2),s([bt()],Jo.prototype,"title",2),s([bt({reflect:!0})],Jo.prototype,"name",2),s([bt({reflect:!0})],Jo.prototype,"value",1),s([bt({reflect:!0})],Jo.prototype,"size",2),s([Bt("size")],Jo.prototype,"handleSizeChange",1),s([bt({type:Boolean})],Jo.prototype,"disabled",2),s([bt({type:Boolean,attribute:!1})],Jo.prototype,"checked",1),s([bt({type:Boolean,attribute:"checked",reflect:!0})],Jo.prototype,"defaultChecked",2),s([bt({type:Boolean,reflect:!0})],Jo.prototype,"required",2),s([bt({attribute:"hint"})],Jo.prototype,"hint",2),s([bt({attribute:"with-hint",type:Boolean})],Jo.prototype,"withHint",2),s([Bt(["checked","defaultChecked"])],Jo.prototype,"handleStateChange",1),s([Bt("disabled",{waitUntilFirstUpdate:!0})],Jo.prototype,"handleDisabledChange",1),Jo=s([ft("wa-switch")],Jo),Jo.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ta=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,ea=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.animationGeneration=0,this.isAnimating=!1,this.open=!1,this.disabled=!1,this.appearance="outlined",this.iconPlacement="end"}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver((t=>{for(const e of t)"attributes"===e.type&&"open"===e.attributeName&&(this.details.open?this.show():this.hide())})),this.detailsObserver.observe(this.details,{attributes:!0})}updated(t){t.has("isAnimating")&&this.customStates.set("animating",this.isAnimating)}handleSummaryClick(t){t.composedPath().some((t=>{if(!(t instanceof HTMLElement))return!1;const e=t.tagName?.toLowerCase();return!!["a","button","input","textarea","select"].includes(e)||t instanceof Ct&&(!("disabled"in t)||!t.disabled)}))||(t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus()))}handleSummaryKeyDown(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.open?this.hide():this.show()),"ArrowUp"!==t.key&&"ArrowLeft"!==t.key||(t.preventDefault(),this.hide()),"ArrowDown"!==t.key&&"ArrowRight"!==t.key||(t.preventDefault(),this.show())}closeOthersWithSameName(){this.name&&this.getRootNode().querySelectorAll(`wa-details[name="${this.name}"]`).forEach((t=>{t!==this&&t.open&&(t.open=!1)}))}async handleOpenChange(){this.animationGeneration++;const t=this.animationGeneration;if(this.open){this.details.open=!0;const e=new Te;if(this.dispatchEvent(e),e.defaultPrevented)return this.open=!1,void(this.details.open=!1);this.closeOthersWithSameName(),this.isAnimating=!0;const i=We(getComputedStyle(this.body).getPropertyValue("--show-duration"));if(await Ye(this.body,[{height:"0",opacity:"0"},{height:this.body.scrollHeight+"px",opacity:"1"}],{duration:i,easing:"linear"}),this.animationGeneration!==t)return;this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new Ue)}else{const e=new _e;if(this.dispatchEvent(e),e.defaultPrevented)return this.details.open=!0,void(this.open=!0);this.isAnimating=!0;const i=We(getComputedStyle(this.body).getPropertyValue("--hide-duration"));if(await Ye(this.body,[{height:this.body.scrollHeight+"px",opacity:"1"},{height:"0",opacity:"0"}],{duration:i,easing:"linear"}),this.animationGeneration!==t)return;this.body.style.height="0",this.isAnimating=!1,this.details.open=!1,this.dispatchEvent(new De)}}async show(){if(!this.open&&!this.disabled)return this.open=!0,Ho(this,"wa-after-show")}async hide(){if(this.open&&!this.disabled)return this.open=!1,Ho(this,"wa-after-hide")}render(){const t=this.hasUpdated?"rtl"===this.localize.dir():"rtl"===this.dir;return X`
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
    `}};ea.css=ta,s([gt("details")],ea.prototype,"details",2),s([gt("summary")],ea.prototype,"header",2),s([gt(".body")],ea.prototype,"body",2),s([gt(".expand-icon-slot")],ea.prototype,"expandIconSlot",2),s([wt()],ea.prototype,"isAnimating",2),s([bt({type:Boolean,reflect:!0})],ea.prototype,"open",2),s([bt()],ea.prototype,"summary",2),s([bt({reflect:!0})],ea.prototype,"name",2),s([bt({type:Boolean,reflect:!0})],ea.prototype,"disabled",2),s([bt({reflect:!0})],ea.prototype,"appearance",2),s([bt({attribute:"icon-placement",reflect:!0})],ea.prototype,"iconPlacement",2),s([Bt("open",{waitUntilFirstUpdate:!0})],ea.prototype,"handleOpenChange",1),ea=s([ft("wa-details")],ea);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ia=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,oa=class extends kt{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.open&&Ne(this)&&(t.preventDefault(),t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),this.showDelay))},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=!!this.anchor?.matches(":hover"),e=this.matches(":hover");if(t||e)return;clearTimeout(this.hoverTimeout),t||e||(this.hoverTimeout=window.setTimeout((()=>{this.hide()}),this.hideDelay))}}}connectedCallback(){super.connectedCallback(),"undefined"!=typeof document&&(this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener("mouseout",this.handleMouseOut),this.open&&(this.open=!1,this.updateComplete.then((()=>{this.open=!0}))),this.id||(this.id=He("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),je(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}addToAriaLabelledBy(t,e){const i=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);i.includes(e)||(i.push(e),t.setAttribute("aria-labelledby",i.join(" ")))}removeFromAriaLabelledBy(t,e){const i=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter((t=>t!==e));i.length>0?t.setAttribute("aria-labelledby",i.join(" ")):t.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;const t=new Te;if(this.dispatchEvent(t),t.defaultPrevented)return void(this.open=!1);document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),Pe(this),this.body.hidden=!1,this.popup.active=!0,await Xe(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new Ue)}else{const t=new _e;if(this.dispatchEvent(t),t.defaultPrevented)return void(this.open=!1);document.removeEventListener("keydown",this.handleDocumentKeyDown),je(this),await Xe(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new De)}}handleForChange(){const t=this.getRootNode?.();if(!t)return;const e=this.for?t.getElementById?.(this.for):null,i=this.anchor;if(e===i)return;const{signal:o}=this.eventController;e&&(this.addToAriaLabelledBy(e,this.id),e.addEventListener("blur",this.handleBlur,{capture:!0,signal:o}),e.addEventListener("focus",this.handleFocus,{capture:!0,signal:o}),e.addEventListener("click",this.handleClick,{signal:o}),e.addEventListener("mouseover",this.handleMouseOver,{signal:o}),e.addEventListener("mouseout",this.handleMouseOut,{signal:o})),i&&(this.removeFromAriaLabelledBy(i,this.id),i.removeEventListener("blur",this.handleBlur,{capture:!0}),i.removeEventListener("focus",this.handleFocus,{capture:!0}),i.removeEventListener("click",this.handleClick),i.removeEventListener("mouseover",this.handleMouseOver),i.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=e}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Ho(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Ho(this,"wa-after-hide")}render(){return X`
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
    `}};oa.css=ia,oa.dependencies={"wa-popup":Fo},s([gt("slot:not([name])")],oa.prototype,"defaultSlot",2),s([gt(".body")],oa.prototype,"body",2),s([gt("wa-popup")],oa.prototype,"popup",2),s([bt()],oa.prototype,"placement",2),s([bt({type:Boolean,reflect:!0})],oa.prototype,"disabled",2),s([bt({type:Number})],oa.prototype,"distance",2),s([bt({type:Boolean,reflect:!0})],oa.prototype,"open",2),s([bt({type:Number})],oa.prototype,"skidding",2),s([bt({attribute:"show-delay",type:Number})],oa.prototype,"showDelay",2),s([bt({attribute:"hide-delay",type:Number})],oa.prototype,"hideDelay",2),s([bt()],oa.prototype,"trigger",2),s([bt({attribute:"without-arrow",type:Boolean,reflect:!0})],oa.prototype,"withoutArrow",2),s([bt()],oa.prototype,"for",2),s([wt()],oa.prototype,"anchor",2),s([Bt("open",{waitUntilFirstUpdate:!0})],oa.prototype,"handleOpenChange",1),s([Bt("for")],oa.prototype,"handleForChange",1),s([Bt(["distance","placement","skidding"])],oa.prototype,"handleOptionsChange",1),s([Bt("disabled")],oa.prototype,"handleDisabledChange",1),oa=s([ft("wa-tooltip")],oa);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var aa=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,sa=class extends Ct{constructor(){super(...arguments),this.hasSlotController=new St(this,"hint"),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="m",this.disabled=!1,this.indeterminate=!1,this._checked=null,this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint=""}static get validators(){const t=[Vo({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...t]}get value(){return this._value??"on"}set value(t){this._value=t}handleSizeChange(){$t(this.localName,this.size)}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(t){this._checked=!!t,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then((()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}connectedCallback(){super.connectedCallback(),!this.didSSR||this.hasUpdated?this.handleDefaultCheckedChange():this.updateComplete.then((()=>{this.handleDefaultCheckedChange()}))}handleDefaultCheckedChange(){this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){!this.didSSR||this.hasUpdated?(this.setValue(this.checked?this.value:null,this._value),this.updateValidity()):this.updateComplete.then((()=>{this.handleValueOrCheckedChange()}))}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(t){super.willUpdate(t),(t.has("value")||t.has("checked")||t.has("defaultChecked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){const t=this.hasSlotController.test("hint"),e=!!this.hint||!!t,i=!this.checked&&this.indeterminate,o=i?"indeterminate":"check",a=i?"indeterminate":"check";return X`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${Xt(this.name)}
            value=${Xt(this.value)}
            .indeterminate=${_o(this.indeterminate)}
            ?checked=${this.defaultChecked}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-checked=${this.indeterminate?"mixed":this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${a}-icon icon" library="system" name=${o}></wa-icon>
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
    `}};sa.css=[To,At,aa],sa.shadowRootOptions={...Ct.shadowRootOptions,delegatesFocus:!0},s([gt('input[type="checkbox"]')],sa.prototype,"input",2),s([bt()],sa.prototype,"title",2),s([bt({reflect:!0})],sa.prototype,"name",2),s([bt({reflect:!0})],sa.prototype,"value",1),s([bt({reflect:!0})],sa.prototype,"size",2),s([Bt("size")],sa.prototype,"handleSizeChange",1),s([bt({type:Boolean})],sa.prototype,"disabled",2),s([bt({type:Boolean,reflect:!0})],sa.prototype,"indeterminate",2),s([bt({type:Boolean,attribute:!1})],sa.prototype,"checked",1),s([bt({type:Boolean,reflect:!0,attribute:"checked"})],sa.prototype,"defaultChecked",2),s([bt({type:Boolean,reflect:!0})],sa.prototype,"required",2),s([bt()],sa.prototype,"hint",2),s([Bt(["checked","defaultChecked"])],sa.prototype,"handleDefaultCheckedChange",1),s([Bt(["checked","indeterminate"])],sa.prototype,"handleStateChange",1),s([Bt("disabled")],sa.prototype,"handleDisabledChange",1),sa=s([ft("wa-checkbox")],sa),sa.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ra=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function na(t){return t.split(" ").map((t=>t.trim())).filter((t=>""!==t))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var la=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.hasSlotController=new St(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!1,this.withFooter=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.open&&Ne(this)&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.drawer.showModal(),Ce(this))}disconnectedCallback(){super.disconnectedCallback(),ze(this),this.removeOpenListeners()}async requestClose(t){const e=new _e({source:t});if(this.dispatchEvent(e),e.defaultPrevented)return this.open=!0,void Xe(this.drawer,"pulse");this.removeOpenListeners(),await Xe(this.drawer,"hide"),this.open=!1,this.drawer.close(),ze(this);const i=this.originalTrigger;"function"==typeof i?.focus&&setTimeout((()=>i.focus())),this.dispatchEvent(new De)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),Pe(this)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),je(this)}handleDialogCancel(t){t.preventDefault(),!this.drawer.classList.contains("hide")&&t.target===this.drawer&&Ne(this)&&this.requestClose(this.drawer)}handleDialogClick(t){const e=t.target.closest('[data-drawer="close"]');e&&(t.stopPropagation(),this.requestClose(e))}async handleDialogPointerDown(t){t.target===this.drawer&&(this.lightDismiss?this.requestClose(this.drawer):await Xe(this.drawer,"pulse"))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open&&(this.open=!0,this.requestClose(this.drawer))}async show(){const t=new Te;this.dispatchEvent(t),t.defaultPrevented?this.open=!1:(this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),Ce(this),requestAnimationFrame((()=>{const t=this.querySelector("[autofocus]");t&&"function"==typeof t.focus?t.focus():this.drawer.focus()})),await Xe(this.drawer,"show"),this.dispatchEvent(new Ue))}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer","withFooter");return X`
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
    `}};la.css=ra,s([gt(".drawer")],la.prototype,"drawer",2),s([bt({type:Boolean,reflect:!0})],la.prototype,"open",2),s([bt({reflect:!0})],la.prototype,"label",2),s([bt({reflect:!0})],la.prototype,"placement",2),s([bt({attribute:"without-header",type:Boolean,reflect:!0})],la.prototype,"withoutHeader",2),s([bt({attribute:"light-dismiss",type:Boolean})],la.prototype,"lightDismiss",2),s([bt({attribute:"with-footer",type:Boolean})],la.prototype,"withFooter",2),s([Bt("open",{waitUntilFirstUpdate:!0})],la.prototype,"handleOpenChange",1),la=s([ft("wa-drawer")],la),document.addEventListener("click",(t=>{const e=t.target.closest("[data-drawer]");if(e instanceof Element){const[t,i]=na(e.getAttribute("data-drawer")||"");if("open"===t&&i?.length){const t=e.getRootNode().getElementById(i);"wa-drawer"===t?.localName?t.open=!0:console.warn(`A drawer with an ID of "${i}" could not be found in this document.`)}}})),document.addEventListener("pointerdown",(()=>{}));
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ca=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,ha=class extends kt{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.dispatchEvent(new ie)}connectedCallback(){if(super.connectedCallback(),this.didSSR){const t=this.shadowRoot?.querySelector?.("img");t&&t.complete&&t.naturalWidth<=0&&this.updateComplete.then((()=>{this.handleImageLoadError()}))}}render(){const t=X`
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
      `,X` ${this.image&&!this.hasError?t:e} `}};ha.css=ca,s([wt()],ha.prototype,"hasError",2),s([bt()],ha.prototype,"image",2),s([bt()],ha.prototype,"label",2),s([bt()],ha.prototype,"initials",2),s([bt()],ha.prototype,"loading",2),s([bt({reflect:!0})],ha.prototype,"shape",2),s([Bt("image")],ha.prototype,"handleImageChange",1),ha=s([ft("wa-avatar")],ha);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var da=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,ua=class extends kt{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal"}updated(t){super.updated(t),t.has("orientation")&&this.setAttribute("aria-orientation",this.orientation)}handleFocus(t){const e=fa(t.target);e?.classList.add("button-focus")}handleBlur(t){const e=fa(t.target);e?.classList.remove("button-focus")}handleMouseOver(t){const e=fa(t.target);e?.classList.add("button-hover")}handleMouseOut(t){const e=fa(t.target);e?.classList.remove("button-hover")}render(){return X`
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
    `}};function fa(t){const e="wa-button, wa-radio-button";return t.closest(e)??t.querySelector(e)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */ua.css=[da],s([gt("slot")],ua.prototype,"defaultSlot",2),s([wt()],ua.prototype,"disableRole",2),s([wt()],ua.prototype,"hasOutlined",2),s([bt()],ua.prototype,"label",2),s([bt({reflect:!0})],ua.prototype,"orientation",2),ua=s([ft("wa-button-group")],ua);var pa=class extends Event{constructor(t){super("wa-selection-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},ma=u`
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
`,ba=class extends Event{constructor(){super("wa-lazy-change",{bubbles:!0,cancelable:!1,composed:!0})}},wa=class extends Event{constructor(){super("wa-lazy-load",{bubbles:!0,cancelable:!1,composed:!0})}},va=class extends Event{constructor(){super("wa-expand",{bubbles:!0,cancelable:!1,composed:!0})}},ga=class extends Event{constructor(){super("wa-after-collapse",{bubbles:!0,cancelable:!1,composed:!0})}},ya=class extends Event{constructor(){super("wa-after-expand",{bubbles:!0,cancelable:!1,composed:!0})}},xa=class extends Event{constructor(){super("wa-collapse",{bubbles:!0,cancelable:!1,composed:!0})}},ka=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */let Ca=class extends Event{constructor(t,e,i,o){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e,this.callback=i,this.subscribe=o??!1}},za=class{constructor(t,e,i,o){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=i,this.subscribe=o??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ca(this.context,this.host,this.t,this.subscribe))}};
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
class La{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const i=e||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:o}=this.subscriptions.get(t);t(this.value,o)}clearCallbacks(){this.subscriptions.clear()}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $a=class extends Event{constructor(t,e){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e}},Sa=class extends La{constructor(t,e,i){super(void 0!==e.context?e.initialValue:i),this.onContextRequest=t=>{if(t.context!==this.context)return;const e=t.contextTarget??t.composedPath()[0];e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{if(t.context!==this.context)return;if((t.contextTarget??t.composedPath()[0])===this.host)return;const e=new Set;for(const[t,{consumerHost:i}]of this.subscriptions)e.has(t)||(e.add(t),i.dispatchEvent(new Ca(this.context,i,t,!0)));t.stopPropagation()},this.host=t,this.context=void 0!==e.context?e.context:e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new $a(this.context,this.host))}};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Aa(t,e,i){return t?e(t):i?.(t)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Fa="wa-tree-item",Ma=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1,this._treeItemContext={depth:0,expanded:this.expanded},this._parentTreeContext=null,this.animationGeneration=0,this.tabIndex=-1,this.role="treeitem"}static isTreeItem(t){const e=t;return e&&("treeitem"===e.role||"treeitem"===e.getAttribute?.("role"))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabIndex",""+this.tabIndex),this.isNestedItem()&&(this.setAttribute("slot","children"),this._parentTreeContext?.expanded||(this.expanded=!1)),this._parentTreeContext&&(this._treeItemContext={depth:this._parentTreeContext.depth+1,expanded:this.expanded}),this.updateIndentation()}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&0===this.getChildrenItems().length,this.handleExpandedChange()}async animateCollapse(t){this.dispatchEvent(new xa);const e=We(getComputedStyle(this.childrenContainer).getPropertyValue("--hide-duration"));await Ye(this.childrenContainer,[{height:this.childrenContainer.scrollHeight+"px",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],{duration:e,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.animationGeneration===t&&(this.childrenContainer.hidden=!0,this.dispatchEvent(new ga))}isNestedItem(){if(null!==this._parentTreeContext)return!0;const t=this.parentElement;return!!t&&Ma.isTreeItem(t)}updateIndentation(){const t=Math.max(this._treeItemContext?.depth||0,this.getDepth());this.setStyleProperty("--indent",`calc(${t} * var(--indent-size, 2em))`)}getDepth(){let t=0,e=this.parentElement;for(;e;)Ma.isTreeItem(e)&&t++,e=e.parentElement;return t}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&0===this.getChildrenItems().length}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1),super.willUpdate(t)}async animateExpand(t){this.dispatchEvent(new va),this.childrenContainer.hidden=!1;const e=We(getComputedStyle(this.childrenContainer).getPropertyValue("--show-duration"));await Ye(this.childrenContainer,[{height:"0",opacity:"0",overflow:"hidden"},{height:this.childrenContainer.scrollHeight+"px",opacity:"1",overflow:"hidden"}],{duration:e,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.animationGeneration===t&&(this.childrenContainer.style.height="auto",this.dispatchEvent(new ya))}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand(this.animationGeneration)}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleExpandedState(){this.customStates.set("expanded",this.expanded)}handleIndeterminateStateChange(){this.customStates.set("indeterminate",this.indeterminate)}handleSelectedChange(){this.customStates.set("selected",this.selected),this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.animationGeneration++;const t=this.animationGeneration;this.expanded?this.lazy?(this.loading=!0,this.dispatchEvent(new wa)):this.animateExpand(t):this.animateCollapse(t)}handleLazyChange(){this.dispatchEvent(new ba)}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter((e=>Ma.isTreeItem(e)&&(t||!e.disabled))):[]}render(){const t="rtl"===this.localize.dir(),e=!this.loading&&(!this.isLeaf||this.lazy);return X`
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
              ${Aa(this.loading,(()=>X` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `),(()=>X`
                  <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
                `))}
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${Aa(this.selectable,(()=>X`
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
                ?checked="${_o(this.selected)}"
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
function Ba(t,e=!1){function i(t){const e=t.getChildrenItems({includeDisabled:!1});if(e.length){const i=e.every((t=>t.selected)),o=e.every((t=>!t.selected&&!t.indeterminate));t.selected=i,t.indeterminate=!i&&!o}}!function t(o){for(const i of o.getChildrenItems())i.selected=e?o.selected||i.selected:!i.disabled&&o.selected,t(i);e&&i(o)}(t),function t(e){const o=e.parentElement;Ma.isTreeItem(o)&&(i(o),t(o))}(t)}Ma.css=ka,s([wt()],Ma.prototype,"indeterminate",2),s([wt()],Ma.prototype,"isLeaf",2),s([wt()],Ma.prototype,"loading",2),s([wt()],Ma.prototype,"selectable",2),s([bt({type:Boolean,reflect:!0})],Ma.prototype,"expanded",2),s([bt({type:Boolean,reflect:!0})],Ma.prototype,"selected",2),s([bt({type:Boolean,reflect:!0})],Ma.prototype,"disabled",2),s([bt({type:Boolean,reflect:!0})],Ma.prototype,"lazy",2),s([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function({context:t}){return(e,i)=>{const o=new WeakMap;if("object"==typeof i)return{get(){return e.get.call(this)},set(t){return o.get(this).setValue(t),e.set.call(this,t)},init(e){return o.set(this,new Sa(this,{context:t,initialValue:e})),e}};{e.constructor.addInitializer((e=>{o.set(e,new Sa(e,{context:t}))}));const a=Object.getOwnPropertyDescriptor(e,i);let s;if(void 0===a){const t=new WeakMap;s={get(){return t.get(this)},set(e){o.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{const t=a.set;s={...a,set(e){o.get(this).setValue(e),t?.call(this,e)}}}return void Object.defineProperty(e,i,s)}}}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */({context:Fa})],Ma.prototype,"_treeItemContext",2),s([function({context:t,subscribe:e}){return(i,o)=>{"object"==typeof o?o.addInitializer((function(){new za(this,{context:t,callback:t=>{i.set.call(this,t)},subscribe:e})})):i.constructor.addInitializer((i=>{new za(i,{context:t,callback:t=>{i[o]=t},subscribe:e})}))}}({context:Fa,subscribe:!1})],Ma.prototype,"_parentTreeContext",2),s([gt("slot:not([name])")],Ma.prototype,"defaultSlot",2),s([gt("slot[name=children]")],Ma.prototype,"childrenSlot",2),s([gt(".item")],Ma.prototype,"itemElement",2),s([gt(".children")],Ma.prototype,"childrenContainer",2),s([gt(".expand-button slot")],Ma.prototype,"expandButtonSlot",2),s([bt({reflect:!0,type:Number,attribute:"tabindex"})],Ma.prototype,"tabIndex",2),s([bt({reflect:!0})],Ma.prototype,"role",2),s([Bt("loading",{waitUntilFirstUpdate:!0})],Ma.prototype,"handleLoadingChange",1),s([Bt("disabled")],Ma.prototype,"handleDisabledChange",1),s([Bt("expanded")],Ma.prototype,"handleExpandedState",1),s([Bt("indeterminate")],Ma.prototype,"handleIndeterminateStateChange",1),s([Bt("selected")],Ma.prototype,"handleSelectedChange",1),s([Bt("expanded",{waitUntilFirstUpdate:!0})],Ma.prototype,"handleExpandedChange",1),s([Bt("expanded",{waitUntilFirstUpdate:!0})],Ma.prototype,"handleExpandAnimation",1),s([Bt("lazy",{waitUntilFirstUpdate:!0})],Ma.prototype,"handleLazyChange",1),Ma=s([ft("wa-tree-item")],Ma),Ma.disableWarning?.("change-in-update");var Ia=class extends kt{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new Nt(this),this.tabIndex=0,this.role="tree",this.initTreeItem=t=>{t.updateComplete.then((()=>{t.selectable="multiple"===this.selection,["expand","collapse"].filter((t=>!!this.querySelector(`[slot="${t}-icon"]`))).forEach((e=>{const i=t.querySelector(`[slot="${e}-icon"]`),o=this.getExpandButtonIcon(e);o&&(null===i?t.append(o):i.hasAttribute("data-default")&&i.replaceWith(o))}))}))},this.handleTreeChanged=t=>{for(const e of t){const t=[...e.addedNodes].filter(Ma.isTreeItem),i=[...e.removedNodes].filter(Ma.isTreeItem);t.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;e&&this.contains(e)||(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Ma.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},"addEventListener"in this&&(this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("wa-lazy-change",this.handleSlotChange))}async connectedCallback(){super.connectedCallback(),"undefined"!=typeof MutationObserver&&(await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})),this.setAttribute("tabindex","0"),this.setAttribute("role","tree")}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}getExpandButtonIcon(t){const e=("expand"===t?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(e){const i=e.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach((t=>t.removeAttribute("id"))),i.setAttribute("data-default",""),i.slot=t+"-icon",i}return null}selectItem(t){const e=[...this.selectedItems];if("multiple"===this.selection)t.selected=!t.selected,t.lazy&&(t.expanded=!0),Ba(t);else if("single"===this.selection||t.isLeaf){const e=this.getAllTreeItems();for(const i of e)i.selected=i===t}else"leaf"===this.selection&&(t.expanded=!t.expanded);const i=this.selectedItems;(e.length!==i.length||i.some((t=>!e.includes(t))))&&Promise.all(i.map((t=>t.updateComplete))).then((()=>{this.dispatchEvent(new pa({selection:i}))}))}getAllTreeItems(){return[...this.querySelectorAll("wa-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key))return;if(t.composedPath().some((t=>["input","textarea"].includes(t?.tagName?.toLowerCase()))))return;const e=this.getFocusableItems(),i=this.matches(":dir(ltr)"),o="rtl"===this.localize.dir();if(e.length>0){t.preventDefault();const a=e.findIndex((t=>t.matches(":focus"))),s=e[a],r=t=>{const i=e[Ve(t,0,e.length-1)];this.focusItem(i)},n=t=>{s.expanded=t};"ArrowDown"===t.key?r(a+1):"ArrowUp"===t.key?r(a-1):i&&"ArrowRight"===t.key||o&&"ArrowLeft"===t.key?!s||s.disabled||s.expanded||s.isLeaf&&!s.lazy?r(a+1):n(!0):i&&"ArrowLeft"===t.key||o&&"ArrowRight"===t.key?!s||s.disabled||s.isLeaf||!s.expanded?r(a-1):n(!1):"Home"===t.key?r(0):"End"===t.key?r(e.length-1):"Enter"!==t.key&&" "!==t.key||s.disabled||this.selectItem(s)}}handleClick(t){const e=t.target,i=e.closest("wa-tree-item"),o=t.composedPath().some((t=>t?.classList?.contains("expand-button")));i&&!i.disabled&&e===this.clickTarget&&(o?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t="multiple"===this.selection,e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const i of e)i.updateComplete.then((()=>{i.selectable=t}));t&&(await this.updateComplete,[...this.querySelectorAll(":scope > wa-tree-item")].forEach((t=>{t.updateComplete.then((()=>{Ba(t,!0)}))})))}get selectedItems(){return this.getAllTreeItems().filter((t=>t.selected))}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter((t=>{if(t.disabled)return!1;const i=t.parentElement?.closest("[role=treeitem]");return i&&(!i.expanded||i.loading||e.has(i))&&e.add(t),!e.has(t)}))}render(){return X`
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
    `}};Ia.css=ma,s([gt("slot:not([name])")],Ia.prototype,"defaultSlot",2),s([gt("slot[name=expand-icon]")],Ia.prototype,"expandedIconSlot",2),s([gt("slot[name=collapse-icon]")],Ia.prototype,"collapsedIconSlot",2),s([bt()],Ia.prototype,"selection",2),s([bt({attribute:"tabindex",reflect:!0,type:Number})],Ia.prototype,"tabIndex",2),s([bt({reflect:!0})],Ia.prototype,"role",2),s([Bt("selection")],Ia.prototype,"handleSelectionChange",1),Ia=s([ft("wa-tree")],Ia);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ea=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Oa=class extends kt{constructor(){super(...arguments),this.variant="brand",this.appearance="accent",this.pill=!1,this.attention="none"}render(){return X`
      <span part="start">
        <slot name="start"></slot>
      </span>

      <span part="base" role="status">
        <slot></slot>
      </span>

      <span part="end">
        <slot name="end"></slot>
      </span>
    `}};Oa.css=[Mt,Ea],s([bt({reflect:!0})],Oa.prototype,"variant",2),s([bt({reflect:!0})],Oa.prototype,"appearance",2),s([bt({type:Boolean,reflect:!0})],Oa.prototype,"pill",2),s([bt({reflect:!0})],Oa.prototype,"attention",2),Oa=s([ft("wa-badge")],Oa);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var qa=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Ta=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.hasSlotController=new St(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.withFooter=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.open&&Ne(this)&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),Ce(this))}disconnectedCallback(){super.disconnectedCallback(),ze(this),this.removeOpenListeners()}async requestClose(t){const e=new _e({source:t});if(this.dispatchEvent(e),e.defaultPrevented)return this.open=!0,void Xe(this.dialog,"pulse");this.removeOpenListeners(),await Xe(this.dialog,"hide"),this.open=!1,this.dialog.close(),ze(this);const i=this.originalTrigger;"function"==typeof i?.focus&&setTimeout((()=>i.focus())),this.dispatchEvent(new De)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),Pe(this)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),je(this)}handleDialogCancel(t){t.preventDefault(),!this.dialog.classList.contains("hide")&&t.target===this.dialog&&Ne(this)&&this.requestClose(this.dialog)}handleDialogClick(t){const e=t.target.closest('[data-dialog="close"]');e&&(t.stopPropagation(),this.requestClose(e))}async handleDialogPointerDown(t){t.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await Xe(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){const t=new Te;this.dispatchEvent(t),t.defaultPrevented?this.open=!1:(this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),Ce(this),requestAnimationFrame((()=>{const t=this.querySelector("[autofocus]");t&&"function"==typeof t.focus?t.focus():this.dialog.focus()})),await Xe(this.dialog,"show"),this.dispatchEvent(new Ue))}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer","withFooter");return X`
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
    `}};Ta.css=qa,s([gt(".dialog")],Ta.prototype,"dialog",2),s([bt({type:Boolean,reflect:!0})],Ta.prototype,"open",2),s([bt({reflect:!0})],Ta.prototype,"label",2),s([bt({attribute:"without-header",type:Boolean,reflect:!0})],Ta.prototype,"withoutHeader",2),s([bt({attribute:"light-dismiss",type:Boolean})],Ta.prototype,"lightDismiss",2),s([bt({attribute:"with-footer",type:Boolean})],Ta.prototype,"withFooter",2),s([Bt("open",{waitUntilFirstUpdate:!0})],Ta.prototype,"handleOpenChange",1),Ta=s([ft("wa-dialog")],Ta),document.addEventListener("click",(t=>{const e=t.target.closest("[data-dialog]");if(e instanceof Element){const[t,i]=na(e.getAttribute("data-dialog")||"");if("open"===t&&i?.length){const t=e.getRootNode().getElementById(i);"wa-dialog"===t?.localName?t.open=!0:console.warn(`A dialog with an ID of "${i}" could not be found in this document.`)}}})),document.addEventListener("pointerdown",(()=>{}));
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var _a=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Da=new Set,Ua=class extends kt{constructor(){super(...arguments),this.anchor=null,this.placement="top",this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=t=>{t.target.closest('[data-popover="close"]')&&(t.stopPropagation(),this.open=!1)},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.open&&Ne(this)&&(t.preventDefault(),t.stopPropagation(),this.open=!1,this.anchor&&"function"==typeof this.anchor.focus&&this.anchor.focus())},this.handleDocumentClick=t=>{this.anchor&&t.composedPath().includes(this.anchor)||t.composedPath().includes(this)||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.id||(this.id=He("wa-popover-")),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.for&&this.anchor&&(this.anchor=null,this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),je(this),this.eventController.abort()}firstUpdated(){this.open&&(this.dialog.show(),this.popup.active=!0,this.popup.reposition())}updated(t){t.has("open")&&this.customStates.set("open",this.open)}async handleOpenChange(){if(this.open){const t=new Te;if(this.dispatchEvent(t),t.defaultPrevented)return void(this.open=!1);Da.forEach((t=>t.open=!1)),document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.show(),this.popup.active=!0,Da.add(this),Pe(this),requestAnimationFrame((()=>{const t=this.querySelector("[autofocus]");t&&"function"==typeof t.focus?t.focus():this.dialog.focus()})),await Xe(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new Ue)}else{const t=new _e;if(this.dispatchEvent(t),t.defaultPrevented)return void(this.open=!0);document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),Da.delete(this),je(this),await Xe(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new De)}}handleForChange(){const t=this.getRootNode();if(!t)return;const e=this.for?t.getElementById(this.for):null,i=this.anchor;if(e===i)return;const{signal:o}=this.eventController;e&&e.addEventListener("click",this.handleAnchorClick,{signal:o}),i&&i.removeEventListener("click",this.handleAnchorClick),this.anchor=e,this.for&&!e&&console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,Ho(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Ho(this,"wa-after-hide")}render(){return X`
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
    `}};Ua.css=_a,Ua.dependencies={"wa-popup":Fo},s([gt("dialog")],Ua.prototype,"dialog",2),s([gt(".body")],Ua.prototype,"body",2),s([gt("wa-popup")],Ua.prototype,"popup",2),s([wt()],Ua.prototype,"anchor",2),s([bt()],Ua.prototype,"placement",2),s([bt({type:Boolean,reflect:!0})],Ua.prototype,"open",2),s([bt({type:Number})],Ua.prototype,"distance",2),s([bt({type:Number})],Ua.prototype,"skidding",2),s([bt()],Ua.prototype,"for",2),s([bt({attribute:"without-arrow",type:Boolean,reflect:!0})],Ua.prototype,"withoutArrow",2),s([Bt("open",{waitUntilFirstUpdate:!0})],Ua.prototype,"handleOpenChange",1),s([Bt("for")],Ua.prototype,"handleForChange",1),s([Bt(["distance","placement","skidding"])],Ua.prototype,"handleOptionsChange",1),Ua=s([ft("wa-popover")],Ua);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ra=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Pa=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,ja=class extends Ct{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new St(this,"hint","label"),this.localize=new Nt(this),this.announcedCountText="",this.title="",this.name=null,this._value=null,this.defaultValue=this.getAttribute("value")??"",this.size="m",this.appearance="outlined",this.label="",this.hint="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1,this.withCount=!1,this.lastObservedWidth=0}static get validators(){return[...super.validators,t()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleSizeChange(){$t(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this.setTextareaDimensions(),this.updateResizeObserver(),this.didSSR&&this.input&&this.value!==this.input.value&&(this.value=this.input.value)}))}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.countAnnounceTimeout),this.resizeObserver?.disconnect(),this.resizeObserver=void 0}updateFormValue(t){null!=t?super.updateFormValue(t):this.setValue("",null)}updateResizeObserver(){const t="none"!==this.resize;this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=void 0),t&&this.input&&("auto"===this.resize?(this.resizeObserver=new ResizeObserver((t=>{const e=t[0]?.contentRect.width??0;e!==this.lastObservedWidth&&(this.lastObservedWidth=e,requestAnimationFrame((()=>this.setTextareaDimensions())))})),this.resizeObserver.observe(this)):(this.resizeObserver=new ResizeObserver((()=>this.setTextareaDimensions())),this.resizeObserver.observe(this.input)))}handleBlur(){this.checkValidity()}handleChange(t){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleInput(t){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0}),this.scheduleCountAnnouncement()}scheduleCountAnnouncement(){clearTimeout(this.countAnnounceTimeout),this.countAnnounceTimeout=setTimeout((()=>{const t=(this.value??"").length;this.announcedCountText=null!=this.maxlength?this.localize.term("numCharactersRemaining",this.maxlength-t):this.localize.term("numCharacters",t)}),1e3)}setTextareaDimensions(){if("none"===this.resize)return this.base.style.width="",void(this.base.style.height="");if("auto"===this.resize){this.sizeAdjuster.style.height=this.input.clientHeight+"px",this.input.style.height="auto";const t=this.input.scrollHeight;return this.input.style.height=t+"px",this.sizeAdjuster.style.height=t+"px",this.base.style.width="",void(this.base.style.height="")}if(this.input.style.width){const t=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=t+"px"}if(this.input.style.height){const t=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=t+"px"}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(t){t.has("resize")&&(this.setTextareaDimensions(),this.updateResizeObserver()),super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){return t?("number"==typeof t.top&&(this.input.scrollTop=t.top),void("number"==typeof t.left&&(this.input.scrollLeft=t.left))):{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o="preserve"){this.input.setRangeText(t,e??this.input.selectionStart,i??this.input.selectionEnd,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaDimensions())}formResetCallback(){this._value=null,this.input&&(this.input.value=this.value||""),super.formResetCallback()}render(){const t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),i=!!this.label||!!t,o=!!this.hint||!!e,a=(this.value??"").length,s=null!=this.maxlength?this.localize.term("numCharactersRemaining",this.maxlength-a):this.localize.term("numCharacters",a);return X`
      <label
        part="form-control-label label"
        class=${Yt({label:!0,"has-label":i})}
        for="input"
        aria-hidden=${i?"false":"true"}
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
          .value=${_o(this.value)}
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
          aria-hidden=${o?"false":"true"}
          class=${Yt({"has-slotted":o})}
          >${this.hint}</slot
        >

        ${this.withCount?X`
              <div part="count" class="count" aria-hidden="true">${s}</div>
              <div class="wa-visually-hidden-force" aria-live="polite">${this.announcedCountText}</div>
            `:""}
      </div>
    `}};ja.css=[Ra,To,At,Pa],s([wt()],ja.prototype,"announcedCountText",2),s([gt(".control")],ja.prototype,"input",2),s([gt('[part~="base"]')],ja.prototype,"base",2),s([gt(".size-adjuster")],ja.prototype,"sizeAdjuster",2),s([bt()],ja.prototype,"title",2),s([bt({reflect:!0})],ja.prototype,"name",2),s([wt()],ja.prototype,"value",1),s([bt({attribute:"value",reflect:!0})],ja.prototype,"defaultValue",2),s([bt({reflect:!0})],ja.prototype,"size",2),s([Bt("size")],ja.prototype,"handleSizeChange",1),s([bt({reflect:!0})],ja.prototype,"appearance",2),s([bt()],ja.prototype,"label",2),s([bt({attribute:"hint"})],ja.prototype,"hint",2),s([bt()],ja.prototype,"placeholder",2),s([bt({type:Number})],ja.prototype,"rows",2),s([bt({reflect:!0})],ja.prototype,"resize",2),s([bt({type:Boolean})],ja.prototype,"disabled",2),s([bt({type:Boolean,reflect:!0})],ja.prototype,"readonly",2),s([bt({type:Boolean,reflect:!0})],ja.prototype,"required",2),s([bt({type:Number})],ja.prototype,"minlength",2),s([bt({type:Number})],ja.prototype,"maxlength",2),s([bt()],ja.prototype,"autocapitalize",2),s([bt({type:Boolean,converter:{fromAttribute:t=>!(!t||"off"===t),toAttribute:t=>t?"on":"off"}})],ja.prototype,"autocorrect",2),s([bt()],ja.prototype,"autocomplete",2),s([bt({type:Boolean})],ja.prototype,"autofocus",2),s([bt()],ja.prototype,"enterkeyhint",2),s([bt({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],ja.prototype,"spellcheck",2),s([bt()],ja.prototype,"inputmode",2),s([bt({attribute:"with-label",type:Boolean})],ja.prototype,"withLabel",2),s([bt({attribute:"with-hint",type:Boolean})],ja.prototype,"withHint",2),s([bt({attribute:"with-count",type:Boolean,reflect:!0})],ja.prototype,"withCount",2),s([Bt("rows",{waitUntilFirstUpdate:!0})],ja.prototype,"handleRowsChange",1),s([Bt("value",{waitUntilFirstUpdate:!0})],ja.prototype,"handleValueChange",1),ja=s([ft("wa-textarea")],ja),ja.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Na=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Va=class extends Ct{constructor(){super(),this.hasSlotController=new St(this,"hint","label"),this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=t=>{const e=t.target.closest("wa-radio");if(!e||e.disabled||e.forceDisabled||this.disabled)return;const i=this.value;this.value=e.value,e.checked=!0;const o=this.getAllRadios();for(const t of o)e!==t&&(t.checked=!1,t.setAttribute("tabindex","-1"));this.value!==i&&this.updateComplete.then((()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static get validators(){const t=[Vo({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:He("__wa-radio")})})];return[...super.validators,...t]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){"number"==typeof t&&(t+=""),this.valueHasChanged=!0,this._value=t}handleSizeChange(){$t(this.localName,this.size)}get validationTarget(){const t=this.querySelector(":is(wa-radio):not([disabled])");if(t)return t}updated(t){(t.has("disabled")||t.has("size")||t.has("value")||t.has("defaultValue"))&&this.syncRadioElements()}formResetCallback(...t){this._value=null,super.formResetCallback(...t),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("wa-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const t=this.getAllRadios();if(t.forEach(((e,i)=>{this.size&&e.setAttribute("size",this.size),e.toggleAttribute("data-wa-radio-horizontal","vertical"!==this.orientation),e.toggleAttribute("data-wa-radio-vertical","vertical"===this.orientation),e.toggleAttribute("data-wa-radio-first",0===i),e.toggleAttribute("data-wa-radio-inner",0!==i&&i!==t.length-1),e.toggleAttribute("data-wa-radio-last",i===t.length-1),e.forceDisabled=this.disabled})),await Promise.all(t.map((async t=>{await t.updateComplete,t.checked=!t.disabled&&t.value===this.value}))),this.disabled)t.forEach((t=>{t.tabIndex=-1}));else{const e=t.filter((t=>!t.disabled)),i=e.find((t=>t.checked));e.length>0&&e.forEach(i?t=>{t.tabIndex=t.checked?0:-1}:(t,e)=>{t.tabIndex=0===e?0:-1}),t.filter((t=>t.disabled)).forEach((t=>{t.tabIndex=-1}))}}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)||this.disabled)return;const e=this.getAllRadios().filter((t=>!t.disabled));if(e.length<=0)return;t.preventDefault();const i=this.value,o=e.find((t=>t.checked))??e[0],a=" "===t.key?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1;let s=e.indexOf(o)+a;s||(s=0),s<0&&(s=e.length-1),s>e.length-1&&(s=0);const r=e.some((t=>"wa-radio-button"===t.tagName.toLowerCase()));this.getAllRadios().forEach((t=>{t.checked=!1,r||t.setAttribute("tabindex","-1")})),this.value=e[s].value,e[s].checked=!0,r?e[s].shadowRoot.querySelector("button").focus():(e[s].setAttribute("tabindex","0"),e[s].focus()),this.value!==i&&this.updateComplete.then((()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),t.preventDefault()}focus(t){if(this.disabled)return;const e=this.getAllRadios(),i=e.find((t=>t.checked)),o=e.find((t=>!t.disabled)),a=i||o;a&&a.focus(t)}render(){const t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),i=!!this.label||!!t,o=!!this.hint||!!e;return X`
      <fieldset
        part="form-control"
        class=${Yt({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}
      >
        <label
          part="form-control-label"
          id="label"
          class=${Yt({label:!0,"has-label":i})}
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${Yt({"has-slotted":o})}
          aria-hidden=${o?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}};Va.css=[At,To,Na],Va.shadowRootOptions={...Ct.shadowRootOptions,delegatesFocus:!0},s([gt("slot:not([name])")],Va.prototype,"defaultSlot",2),s([bt()],Va.prototype,"label",2),s([bt({attribute:"hint"})],Va.prototype,"hint",2),s([bt({reflect:!0})],Va.prototype,"name",2),s([bt({type:Boolean,reflect:!0})],Va.prototype,"disabled",2),s([bt({reflect:!0})],Va.prototype,"orientation",2),s([wt()],Va.prototype,"value",1),s([bt({attribute:"value",reflect:!0})],Va.prototype,"defaultValue",2),s([bt({reflect:!0})],Va.prototype,"size",2),s([Bt("size")],Va.prototype,"handleSizeChange",1),s([bt({type:Boolean,reflect:!0})],Va.prototype,"required",2),s([bt({type:Boolean,attribute:"with-label"})],Va.prototype,"withLabel",2),s([bt({type:Boolean,attribute:"with-hint"})],Va.prototype,"withHint",2),Va=s([ft("wa-radio-group")],Va),Va.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ha=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Ya=class extends Ct{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.appearance="default",this.disabled=!1,this.handleClick=()=>{this.disabled||this.forceDisabled||(this.checked=!0)},this.addEventListener("click",this.handleClick)}handleSizeChange(){$t(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(t){if(super.updated(t),t.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),this.disabled||this.forceDisabled||(this.tabIndex=this.checked?0:-1)),t.has("disabled")||t.has("forceDisabled")){const t=this.disabled||this.forceDisabled;this.customStates.set("disabled",t),this.setAttribute("aria-disabled",t?"true":"false"),this.tabIndex=t?-1:this.checked?0:-1}}setValue(){}render(){return X`
      <span part="control" class="control">
        ${this.checked?X`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:""}
      </span>

      <slot part="label" class="label"></slot>
    `}};Ya.css=[To,At,Ha],s([wt()],Ya.prototype,"checked",2),s([wt()],Ya.prototype,"forceDisabled",2),s([bt({reflect:!0})],Ya.prototype,"value",2),s([bt({reflect:!0})],Ya.prototype,"appearance",2),s([bt({reflect:!0})],Ya.prototype,"size",2),s([Bt("size")],Ya.prototype,"handleSizeChange",1),s([bt({type:Boolean})],Ya.prototype,"disabled",2),Ya=s([ft("wa-radio")],Ya),Ya.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Xa=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,Wa=class extends kt{constructor(){super(...arguments),this.variant="brand",this.size="m"}handleSizeChange(){$t(this.localName,this.size)}render(){return X`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `}};Wa.css=[Xa,Mt,At],s([bt({reflect:!0})],Wa.prototype,"variant",2),s([bt({reflect:!0})],Wa.prototype,"appearance",2),s([bt({reflect:!0})],Wa.prototype,"size",2),s([Bt("size")],Wa.prototype,"handleSizeChange",1),Wa=s([ft("wa-callout")],Wa);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ka=class extends Event{constructor(){super("wa-start",{bubbles:!0,cancelable:!1,composed:!0})}},Qa=class extends Event{constructor(){super("wa-finish",{bubbles:!0,cancelable:!1,composed:!0})}},Za=class extends Event{constructor(){super("wa-cancel",{bubbles:!0,cancelable:!1,composed:!0})}},Ga=u`
  :host {
    display: contents;
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */const Ja={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};var ts=Object.freeze({__proto__:null,backInDown:[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],backInLeft:[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],backInRight:[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],backInUp:[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],backOutDown:[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],backOutLeft:[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],backOutRight:[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],backOutUp:[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],bounce:[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],bounceIn:[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],bounceInDown:[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],bounceInLeft:[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],bounceInRight:[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],bounceInUp:[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],bounceOut:[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],bounceOutDown:[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],bounceOutLeft:[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],bounceOutRight:[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],bounceOutUp:[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],easings:Ja,fadeIn:[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],fadeInBottomLeft:[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInBottomRight:[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInDown:[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInDownBig:[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInLeft:[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInLeftBig:[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInRight:[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInRightBig:[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInTopLeft:[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInTopRight:[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInUp:[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeInUpBig:[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fadeOut:[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],fadeOutBottomLeft:[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],fadeOutBottomRight:[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],fadeOutDown:[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],fadeOutDownBig:[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],fadeOutLeft:[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],fadeOutLeftBig:[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],fadeOutRight:[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],fadeOutRightBig:[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],fadeOutTopLeft:[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],fadeOutTopRight:[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],fadeOutUp:[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],fadeOutUpBig:[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],flash:[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],flip:[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg)",easing:"ease-out"},{offset:.5,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg)",easing:"ease-in"},{offset:.8,transform:"perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg)",easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],flipInX:[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],flipInY:[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],flipOutX:[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],flipOutY:[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],headShake:[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],heartBeat:[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],hinge:[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],jackInTheBox:[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],jello:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],lightSpeedInLeft:[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],lightSpeedInRight:[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],lightSpeedOutLeft:[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],lightSpeedOutRight:[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],pulse:[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],rollIn:[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],rollOut:[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],rotateIn:[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],rotateInDownLeft:[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],rotateInDownRight:[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],rotateInUpLeft:[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],rotateInUpRight:[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],rotateOut:[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],rotateOutDownLeft:[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],rotateOutDownRight:[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],rotateOutUpLeft:[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],rotateOutUpRight:[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],rubberBand:[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],shake:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],shakeX:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],shakeY:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],slideInDown:[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],slideInLeft:[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],slideInRight:[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],slideInUp:[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],slideOutDown:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],slideOutLeft:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],slideOutRight:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],slideOutUp:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],swing:[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],tada:[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],wobble:[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],zoomIn:[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],zoomInDown:[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],zoomInLeft:[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],zoomInRight:[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],zoomInUp:[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],zoomOut:[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],zoomOutDown:[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],zoomOutLeft:[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],zoomOutRight:[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],zoomOutUp:[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}]}),es=class extends kt{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new Qa)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new Za)}}get currentTime(){return this.animation?.currentTime??0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),"animate"in this&&this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),"animate"in this&&this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){const t=Ja[this.easing]??this.easing,e=this.keyframes??ts[this.name],i=(await this.defaultSlot).assignedElements()[0];return!(!i||!e||(this.destroyAnimation(),this.animation=i.animate(e,{delay:this.delay,direction:this.direction,duration:this.duration,easing:t,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.dispatchEvent(new Ka)):this.animation.pause(),0))}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return!!this.animation&&(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.dispatchEvent(new Ka)),this.play?this.animation.play():this.animation.pause(),!0)}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){this.animation?.cancel()}finish(){this.animation?.finish()}render(){return X` <slot @slotchange=${this.handleSlotChange}></slot> `}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */es.css=Ga,s([(t,e)=>vt(t,e,{async get(){return await this.updateComplete,this.renderRoot?.querySelector("slot")??null}})],es.prototype,"defaultSlot",2),s([bt()],es.prototype,"name",2),s([bt({type:Boolean,reflect:!0})],es.prototype,"play",2),s([bt({type:Number})],es.prototype,"delay",2),s([bt()],es.prototype,"direction",2),s([bt({type:Number})],es.prototype,"duration",2),s([bt()],es.prototype,"easing",2),s([bt({attribute:"end-delay",type:Number})],es.prototype,"endDelay",2),s([bt()],es.prototype,"fill",2),s([bt({type:Number})],es.prototype,"iterations",2),s([bt({attribute:"iteration-start",type:Number})],es.prototype,"iterationStart",2),s([bt({attribute:!1})],es.prototype,"keyframes",2),s([bt({attribute:"playback-rate",type:Number})],es.prototype,"playbackRate",2),s([Bt(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],es.prototype,"handleAnimationChange",1),s([Bt("play")],es.prototype,"handlePlayChange",1),s([Bt("playbackRate")],es.prototype,"handlePlaybackRateChange",1),es=s([ft("wa-animation")],es);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var is=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,os=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.value=0,this.indeterminate=!1,this.label=""}willUpdate(t){null==this.style&&this.setStyleProperty("--percentage",Ve(this.value,0,100)+"%"),super.willUpdate(t)}updated(t){t.has("value")&&requestAnimationFrame((()=>{this.style.setProperty("--percentage",Ve(this.value,0,100)+"%")})),super.updated(t)}render(){return X`
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
    `}};os.css=is,s([bt({type:Number,reflect:!0})],os.prototype,"value",2),s([bt({type:Boolean,reflect:!0})],os.prototype,"indeterminate",2),s([bt()],os.prototype,"label",2),os=s([ft("wa-progress-bar")],os);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var as=u`
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
 */;const ss="important",rs=" !"+ss,ns=Vt(class extends Ht{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const o=t[i];return null==o?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const o=e[t];if(null!=o){this.ft.add(t);const e="string"==typeof o&&o.endsWith(rs);t.includes("-")||e?i.setProperty(t,e?o.slice(0,-11):o,e?ss:""):i[t]=o}}return W}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ls=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),e=2*Math.PI*t;this.indicatorOffset=e-this.value/100*e+"px"}}render(){return X`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style=${ns({"--percentage":this.value/100})}
      >
        <svg class="image">
          <circle part="track" class="track"></circle>
          <circle
            part="indicator"
            class="indicator"
            style=${ns({"stroke-dashoffset":this.indicatorOffset})}
          ></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `}};ls.css=as,s([gt(".indicator")],ls.prototype,"indicator",2),s([wt()],ls.prototype,"indicatorOffset",2),s([bt({type:Number,reflect:!0})],ls.prototype,"value",2),s([bt()],ls.prototype,"label",2),ls=s([ft("wa-progress-ring")],ls),ls.disableWarning?.("change-in-update");
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var cs=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,hs="undefined"!=typeof window&&"ontouchstart"in window,ds=class{constructor(t,e){this.isActive=!1,this.isDragging=!1,this.handleDragStart=t=>{const e="touches"in t?t.touches[0].clientX:t.clientX,i="touches"in t?t.touches[0].clientY:t.clientY;this.isDragging||!hs&&t.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("pointercancel",this.handleDragStop),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),document.addEventListener("touchcancel",this.handleDragStop),this.options.start(e,i))},this.handleDragStop=t=>{const e="changedTouches"in t?t.changedTouches[0].clientX:t.clientX,i="changedTouches"in t?t.changedTouches[0].clientY:t.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.options.stop(e,i)},this.handleDragMove=t=>{const e="touches"in t?t.touches[0].clientX:t.clientX,i="touches"in t?t.touches[0].clientY:t.clientY;window.getSelection()?.removeAllRanges(),this.options.move(e,i)},this.element=t,this.options={start:()=>{},stop:()=>{},move:()=>{},...e},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),hs&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.element.removeEventListener("pointerdown",this.handleDragStart),hs&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(t){(void 0!==t?t:!this.isActive)?this.start():this.stop()}},us=class extends Ct{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new St(this,"hint","label"),this.localize=new Nt(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=null==this.getAttribute("value")?this.minValue:Number(this.getAttribute("value")),this._value=null,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="m",this.min=0,this.max=100,this.step=1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,{observedAttributes:["min","max","step"],checkValidity(t){const e={message:"",isValid:!0,invalidKeys:[]},i=(t,e,i,o)=>{if("undefined"==typeof document)return"";const a=document.createElement("input");return a.type="range",a.min=e+"",a.max=i+"",a.step=o+"",a.value=t+"",a.checkValidity(),a.validationMessage};if(t.isRange){const o=t.minValue,a=t.maxValue;if(o<t.min)return e.isValid=!1,e.invalidKeys.push("rangeUnderflow"),e.message=i(o,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,e;if(a>t.max)return e.isValid=!1,e.invalidKeys.push("rangeOverflow"),e.message=i(a,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,e;if(t.step&&1!==t.step){const s=(o-t.min)%t.step!=0;if(s||(a-t.min)%t.step!=0)return e.isValid=!1,e.invalidKeys.push("stepMismatch"),e.message=i(s?o:a,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,e}}else{const o=t.value;if(o<t.min)return e.isValid=!1,e.invalidKeys.push("rangeUnderflow"),e.message=i(o,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,e;if(o>t.max)return e.isValid=!1,e.invalidKeys.push("rangeOverflow"),e.message=i(o,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,e;if(t.step&&1!==t.step&&(o-t.min)%t.step!=0)return e.isValid=!1,e.invalidKeys.push("stepMismatch"),e.message=i(o,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,e}return e}}]}get focusableAnchor(){return this.isRange&&this.thumbMin||this.slider}get validationTarget(){return this.focusableAnchor}get value(){return Ve(this.valueHasChanged?this._value??this.minValue??0:this._value??this.defaultValue,this.min,this.max)}set value(t){this._value!==(t=Number(t)??this.minValue)&&(this.valueHasChanged=!0,this._value=t)}get isRange(){return this.range}handleSizeChange(){$t(this.localName,this.size)}firstUpdated(){this.isRange?(this.draggableThumbMin=new ds(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then((()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new ds(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then((()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new ds(this.track,{start:(t,e)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted="min"===this.activeThumb?this.minValue:this.maxValue;else{const i=this.getValueFromCoordinates(t,e),o=Math.abs(i-this.minValue),a=Math.abs(i-this.maxValue);if(o===a)if(i>this.maxValue)this.activeThumb="max";else if(i<this.minValue)this.activeThumb="min";else{const i="rtl"===this.localize.dir(),o="vertical"===this.orientation,a=o?e:t,s=this.lastTrackPosition||a;this.lastTrackPosition=a,this.activeThumb=a>s!==i&&!o||a<s&&o?"max":"min"}else this.activeThumb=o<=a?"min":"max";this.valueWhenDraggingStarted="min"===this.activeThumb?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(t,e,this.activeThumb),this.showRangeTooltips()},move:(t,e)=>{this.activeThumb&&this.setThumbValueFromCoordinates(t,e,this.activeThumb)},stop:()=>{this.activeThumb&&("min"===this.activeThumb?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then((()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new ds(this.slider,{start:(t,e)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(t,e),this.showTooltip()},move:(t,e)=>{this.setValueFromCoordinates(t,e)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then((()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}willUpdate(t){this.isRange&&(t.has("minValue")||t.has("maxValue")||t.has("min")||t.has("max"))&&(this.minValue=Ve(this.minValue,this.min,this.maxValue),this.maxValue=Ve(this.maxValue,this.minValue,this.max)),super.willUpdate(t)}updated(t){if(this.isRange&&(t.has("minValue")||t.has("maxValue"))&&this.updateFormValue(),t.has("disabled")||t.has("readonly")){const t=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(t),this.draggableThumbMax&&this.draggableThumbMax.toggle(t)),this.draggableTrack&&this.draggableTrack.toggle(t)}super.updated(t)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??this.min+""),this.maxValue=parseFloat(this.getAttribute("max-value")??this.max+"")):(this._value=null,this.defaultValue=this.defaultValue??parseFloat(this.getAttribute("value")??this.min+"")),this.valueHasChanged=!1,this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(t){const e=((this.step+"").split(".")[1]||"").replace(/0+$/g,"").length,i=Number(this.step),o=Number(this.min),a=Number(this.max);return t=Ve(t=Math.round(t/i)*i,o,a),parseFloat(t.toFixed(e))}getPercentageFromValue(t){return(t-this.min)/(this.max-this.min)*100}getValueFromCoordinates(t,e){const i="rtl"===this.localize.dir(),o="vertical"===this.orientation,{top:a,right:s,bottom:r,left:n,height:l,width:c}=this.trackBoundingClientRect,h=o?e:t,d=o?{start:a,end:r,size:l}:{start:n,end:s,size:c};return this.clampAndRoundToStep(this.min+(o||i?d.end-h:h-d.start)/d.size*(this.max-this.min))}handleBlur(){this.isRange?requestAnimationFrame((()=>{const t=this.shadowRoot?.activeElement;t===this.thumbMin||t===this.thumbMax||this.hideRangeTooltips()})):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(t){const e=t.target;this.isRange?(e===this.thumbMin?this.activeThumb="min":e===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(t){const e="rtl"===this.localize.dir(),i=t.target;if(this.disabled||this.readonly)return;if(this.isRange&&(i===this.thumbMin?this.activeThumb="min":i===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;const o=this.isRange?"min"===this.activeThumb?this.minValue:this.maxValue:this.value;let a=o;switch(t.key){case"ArrowUp":case e?"ArrowLeft":"ArrowRight":t.preventDefault(),a=this.clampAndRoundToStep(o+this.step);break;case"ArrowDown":case e?"ArrowRight":"ArrowLeft":t.preventDefault(),a=this.clampAndRoundToStep(o-this.step);break;case"Home":t.preventDefault(),a=this.isRange&&"min"===this.activeThumb?this.min:this.isRange?this.minValue:this.min;break;case"End":t.preventDefault(),a=this.isRange&&"max"===this.activeThumb?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":t.preventDefault(),a=this.clampAndRoundToStep(Math.max(o+(this.max-this.min)/10,o+this.step));break;case"PageDown":t.preventDefault(),a=this.clampAndRoundToStep(Math.min(o-(this.max-this.min)/10,o-this.step));break;case"Enter":return void Oo(t,this)}a!==o&&(this.isRange?("min"===this.activeThumb?a>this.maxValue?(this.maxValue=a,this.minValue=a):this.minValue=Math.max(this.min,a):a<this.minValue?(this.minValue=a,this.maxValue=a):this.maxValue=Math.min(this.max,a),this.updateFormValue()):this.value=Ve(a,this.min,this.max),this.updateComplete.then((()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.hasInteracted=!0)}handleLabelPointerDown(t){t.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(t,e){const i=this.value;this.value=this.getValueFromCoordinates(t,e),this.value!==i&&this.updateComplete.then((()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}setThumbValueFromCoordinates(t,e,i){const o=this.getValueFromCoordinates(t,e),a="min"===i?this.minValue:this.maxValue;"min"===i?o>this.maxValue?(this.maxValue=o,this.minValue=o):this.minValue=Math.max(this.min,o):o<this.minValue?(this.minValue=o,this.maxValue=o):this.maxValue=Math.min(this.max,o),a!==("min"===i?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then((()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");"min"===this.activeThumb?(t&&(t.open=!0),e&&(e.open=!1)):"max"===this.activeThumb&&(e&&(e.open=!0),t&&(t.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");t&&(t.open=!1),e&&(e.open=!1)}updateFormValue(t){if(this.isRange){const t=new FormData;return t.append(this.name||"",this.minValue+""),t.append(this.name||"",this.maxValue+""),void this.setValue(t,t)}super.updateFormValue(t)}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){if(this.isRange)for(const t of Oe()){if(t===this.thumbMin){this.thumbMin.blur();break}if(t===this.thumbMax){this.thumbMax.blur();break}}else this.slider.blur()}stepDown(){if(this.isRange){const t=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=Ve(t,this.min,this.maxValue),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value-this.step);this.value=t}}stepUp(){if(this.isRange){const t=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=Ve(t,this.minValue,this.max),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value+this.step);this.value=t}}render(){const t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),i=!!this.label||!!t,o=!!this.hint||!!e,a=this.hasSlotController.test("reference"),s=Yt({xs:"xs"===this.size,s:"s"===this.size||"small"===this.size,m:"m"===this.size||"medium"===this.size,l:"l"===this.size||"large"===this.size,xl:"xl"===this.size,small:"small"===this.size||"s"===this.size,medium:"medium"===this.size||"m"===this.size,large:"large"===this.size||"l"===this.size,horizontal:"horizontal"===this.orientation,vertical:"vertical"===this.orientation,disabled:this.disabled}),r=[];if(this.withMarkers)for(let t=this.min;t<=this.max;t+=this.step)r.push(this.getPercentageFromValue(t));const n=X`
      <label
        id="label"
        part="label"
        for=${this.isRange?"thumb-min":"text-box"}
        class=${Yt({vh:!i,"has-label":i})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,l=X`
      <div
        id="hint"
        part="hint"
        class=${Yt({"has-slotted":o})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,c=this.withMarkers?X`
          <div id="markers" part="markers">
            ${r.map((t=>X`<span part="marker" class="marker" style=${ns({"--position":t+"%"})}></span>`))}
          </div>
        `:"",h=a?X`
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
        ${n}

        <div id="slider" part="slider" class=${s}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${ns({"--start":Math.min(t,e)+"%","--end":Math.max(t,e)+"%"})}
            ></div>

            ${c}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style=${ns({"--position":t+"%"})}
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
              style=${ns({"--position":e+"%"})}
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
        ${n}

        <div
          id="slider"
          part="slider"
          class=${s}
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
              style=${ns({"--start":e+"%","--end":t+"%"})}
            ></div>

            ${c}
            <span id="thumb" part="thumb" style=${ns({"--position":t+"%"})}></span>
          </div>

          ${h} ${l}
        </div>

        ${d("thumb",this.value)}
      `}}};us.formAssociated=!0,us.observeSlots=!0,us.css=[At,To,cs],s([gt("#slider")],us.prototype,"slider",2),s([gt("#thumb")],us.prototype,"thumb",2),s([gt("#thumb-min")],us.prototype,"thumbMin",2),s([gt("#thumb-max")],us.prototype,"thumbMax",2),s([gt("#track")],us.prototype,"track",2),s([gt("#tooltip")],us.prototype,"tooltip",2),s([bt()],us.prototype,"label",2),s([bt({attribute:"hint"})],us.prototype,"hint",2),s([bt({reflect:!0})],us.prototype,"name",2),s([bt({type:Number,attribute:"min-value"})],us.prototype,"minValue",2),s([bt({type:Number,attribute:"max-value"})],us.prototype,"maxValue",2),s([bt({attribute:"value",reflect:!0,type:Number})],us.prototype,"defaultValue",2),s([wt()],us.prototype,"value",1),s([bt({type:Boolean,reflect:!0})],us.prototype,"range",2),s([bt({type:Boolean})],us.prototype,"disabled",2),s([bt({type:Boolean,reflect:!0})],us.prototype,"readonly",2),s([bt({reflect:!0})],us.prototype,"orientation",2),s([bt({reflect:!0})],us.prototype,"size",2),s([Bt("size")],us.prototype,"handleSizeChange",1),s([bt({attribute:"indicator-offset",type:Number})],us.prototype,"indicatorOffset",2),s([bt({type:Number})],us.prototype,"min",2),s([bt({type:Number})],us.prototype,"max",2),s([bt({type:Number})],us.prototype,"step",2),s([bt({type:Boolean})],us.prototype,"autofocus",2),s([bt({attribute:"tooltip-distance",type:Number})],us.prototype,"tooltipDistance",2),s([bt({attribute:"tooltip-placement",reflect:!0})],us.prototype,"tooltipPlacement",2),s([bt({attribute:"with-markers",type:Boolean})],us.prototype,"withMarkers",2),s([bt({attribute:"with-tooltip",type:Boolean})],us.prototype,"withTooltip",2),s([bt({attribute:"with-label",type:Boolean})],us.prototype,"withLabel",2),s([bt({attribute:"with-hint",type:Boolean})],us.prototype,"withHint",2),s([bt({attribute:!1})],us.prototype,"valueFormatter",2),us=s([ft("wa-slider")],us);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var fs=class extends Event{constructor(t){super("wa-copy",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},ps=u`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */,ms="wa-internal-tooltip",bs="__waCopyButtonAssignedId",ws=class extends kt{constructor(){super(...arguments),this.localize=new Nt(this),this.isCopying=!1,this.status="rest",this.hasCustomTrigger=!1,this.liveAnnouncement="",this.customTriggerEl=null,this.lightTooltip=null,this.feedbackTimeout=null,this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.tooltip="full",this.handleDefaultSlotChange=()=>{const t=(this.defaultSlot?.assignedElements({flatten:!0})??[]).find((t=>t instanceof HTMLElement))??null;t!==this.customTriggerEl&&(this.releaseAssignedId(this.customTriggerEl),this.customTriggerEl=t),this.hasCustomTrigger=null!==t,t&&"none"!==this.tooltip?(t.id||(t.id=He("wa-copy-button-trigger-"),t[bs]=!0),this.ensureLightTooltip()):this.removeLightTooltip()}}get activeTooltip(){return this.lightTooltip??this.shadowTooltip??null}get currentLabel(){return"success"===this.status?this.successLabel||this.localize.term("copied"):"error"===this.status?this.errorLabel||this.localize.term("error"):this.copyLabel||this.localize.term("copy")}firstUpdated(){this.didSSR?this.updateComplete.then((()=>{this.handleDefaultSlotChange()})):this.handleDefaultSlotChange()}disconnectedCallback(){super.disconnectedCallback(),this.removeLightTooltip()}handleStatusChange(){this.customStates.set("success","success"===this.status),this.customStates.set("error","error"===this.status),this.syncTooltipText(),this.liveAnnouncement="success"===this.status||"error"===this.status?this.currentLabel:""}handleLabelChange(){this.syncTooltipText()}handleTooltipOptionsChange(){this.lightTooltip&&(this.lightTooltip.placement=this.tooltipPlacement,this.lightTooltip.disabled=this.disabled)}handleTooltipModeChange(t){"none"===this.tooltip?this.removeLightTooltip():"none"===t?this.handleDefaultSlotChange():this.lightTooltip&&this.lightTooltip.setAttribute("trigger","copy"===this.tooltip?"manual":"hover focus")}releaseAssignedId(t){t&&t[bs]&&(t.removeAttribute("id"),delete t[bs])}ensureLightTooltip(){if(!this.customTriggerEl)return;const t="copy"===this.tooltip?"manual":"hover focus";if(this.lightTooltip)this.lightTooltip.setAttribute("for",this.customTriggerEl.id),this.lightTooltip.setAttribute("trigger",t),this.lightTooltip.placement=this.tooltipPlacement,this.lightTooltip.disabled=this.disabled,this.lightTooltip.textContent=this.currentLabel;else{const e=document.createElement("wa-tooltip");e.setAttribute("slot",ms),e.setAttribute("part","feedback"),e.setAttribute("trigger",t),e.dataset.copyButtonTooltip="",e.setAttribute("for",this.customTriggerEl.id),e.placement=this.tooltipPlacement,e.disabled=this.disabled,e.textContent=this.currentLabel,this.appendChild(e),this.lightTooltip=e}}removeLightTooltip(){this.lightTooltip&&(this.releaseAssignedId(this.customTriggerEl),this.lightTooltip.remove(),this.lightTooltip=null)}syncTooltipText(){this.lightTooltip&&(this.lightTooltip.textContent=this.currentLabel)}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),i=this.from.includes("."),o=this.from.includes("[")&&this.from.includes("]");let a=this.from,s="";i?[a,s]=this.from.trim().split("."):o&&([a,s]=this.from.trim().replace(/\]$/,"").split("["));const r="getElementById"in e?e.getElementById(a):null;r?t=o?r.getAttribute(s)||"":i?r[s]||"":r.textContent||"":(this.showStatus("error"),this.dispatchEvent(new ie))}if(t)try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.dispatchEvent(new fs({value:t}))}catch(t){this.showStatus("error"),this.dispatchEvent(new ie)}else this.showStatus("error"),this.dispatchEvent(new ie)}async showStatus(t){if(this.status=t,this.copyIcon){const e="success"===t?this.successIcon:this.errorIcon;await Xe(this.copyIcon,"hide"),this.copyIcon.hidden=!0,e.hidden=!1,await Xe(e,"show")}await this.updateComplete;const e="none"===this.tooltip?null:this.activeTooltip;let i=null;e&&(e.show(),i=new Promise((t=>{e.addEventListener("wa-after-hide",(()=>{null!==this.feedbackTimeout&&(clearTimeout(this.feedbackTimeout),this.feedbackTimeout=null),t()}),{once:!0})})),this.feedbackTimeout=window.setTimeout((async()=>{this.feedbackTimeout=null,await e.hide()}),this.feedbackDuration)),setTimeout((async()=>{if(i&&await i,this.copyIcon){const e="success"===t?this.successIcon:this.errorIcon;await Xe(e,"hide"),e.hidden=!0,this.copyIcon.hidden=!1,await Xe(this.copyIcon,"show")}this.status="rest",this.isCopying=!1}),this.feedbackDuration)}render(){let t=!this.hasCustomTrigger&&"none"!==this.tooltip;return this.didSSR&&!this.hasUpdated&&(t=!1),X`
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
        <slot name="${ms}"></slot>
        <div class="wa-visually-hidden" role="status" aria-live="polite">${this.liveAnnouncement}</div>
      </div>
    `}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */ws.css=[xt,Pa,ps],s([gt('slot[name="copy-icon"]')],ws.prototype,"copyIcon",2),s([gt('slot[name="success-icon"]')],ws.prototype,"successIcon",2),s([gt('slot[name="error-icon"]')],ws.prototype,"errorIcon",2),s([gt("slot:not([name])")],ws.prototype,"defaultSlot",2),s([gt('wa-tooltip[part="feedback"]')],ws.prototype,"shadowTooltip",2),s([wt()],ws.prototype,"isCopying",2),s([wt()],ws.prototype,"status",2),s([wt()],ws.prototype,"hasCustomTrigger",2),s([wt()],ws.prototype,"liveAnnouncement",2),s([bt()],ws.prototype,"value",2),s([bt()],ws.prototype,"from",2),s([bt({type:Boolean,reflect:!0})],ws.prototype,"disabled",2),s([bt({attribute:"copy-label"})],ws.prototype,"copyLabel",2),s([bt({attribute:"success-label"})],ws.prototype,"successLabel",2),s([bt({attribute:"error-label"})],ws.prototype,"errorLabel",2),s([bt({attribute:"feedback-duration",type:Number})],ws.prototype,"feedbackDuration",2),s([bt({attribute:"tooltip-placement",reflect:!0})],ws.prototype,"tooltipPlacement",2),s([bt({reflect:!0})],ws.prototype,"tooltip",2),s([Bt("status")],ws.prototype,"handleStatusChange",1),s([Bt(["copyLabel","successLabel","errorLabel"])],ws.prototype,"handleLabelChange",1),s([Bt(["tooltipPlacement","disabled"],{waitUntilFirstUpdate:!0})],ws.prototype,"handleTooltipOptionsChange",1),s([Bt("tooltip",{waitUntilFirstUpdate:!0})],ws.prototype,"handleTooltipModeChange",1),ws=s([ft("wa-copy-button")],ws);
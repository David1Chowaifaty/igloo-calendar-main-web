import{r as t,c as e,h as i,g as r}from"./p-5fe15625.js";import{v as o}from"./p-4ed69de7.js";let a=[];class s{constructor(t,e){this.element=t;this.options=e;this.handleFocusIn=this.handleFocusIn.bind(this)}activate(){a.push(this.element);document.addEventListener("focusin",this.handleFocusIn)}deactivate(){a=a.filter((t=>t!==this.element));document.removeEventListener("focusin",this.handleFocusIn)}isActive(){return a[a.length-1]===this.element}handleFocusIn(t){var e,i;const r=t.target;const o=this.element.tagName.toLowerCase();if(this.isActive()&&r.closest(o)!==this.element&&typeof((e=this.options)===null||e===void 0?void 0:e.onFocusOut)==="function"){(i=this.options)===null||i===void 0?void 0:i.onFocusOut(t)}}}const n=new Set;function l(t){n.add(t);document.body.classList.add("six-scroll-lock")}function d(t){n.delete(t);if(n.size===0){document.body.classList.remove("six-scroll-lock")}}function h(t,e){if(e!=null&&e!==""){return t.querySelector(`[slot="${e}"]`)!==null}return Array.from(t.childNodes).some((t=>{var e;if(t.nodeType===t.TEXT_NODE&&((e=t.textContent)===null||e===void 0?void 0:e.trim())!==""){return true}if(t.nodeType===t.ELEMENT_NODE){const e=t;if(!e.hasAttribute("slot")){return true}}return false}))}const c='/*! tailwindcss v3.4.9 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.fixed{position:fixed}.absolute{position:absolute}.block{display:block}.flex{display:flex}.hidden{display:none}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.outline{outline-style:solid}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}:host{--size:25rem;display:block}.drawer{height:100%;left:0;top:0;width:100%}.drawer,.drawer--visible{overflow:hidden;pointer-events:none}.drawer--visible{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;position:absolute;visibility:hidden;width:1px}.drawer--contained{position:absolute;z-index:auto}.drawer--fixed{position:fixed;z-index:999999}.drawer__panel{background-color:var(--background,#fff);box-shadow:1px 0 9px 4px rgba(0,0,0,.1);color:var(--gray-800);display:flex;flex-direction:column;max-height:100%;max-width:100%;overflow:auto;pointer-events:all;position:absolute;transition:transform .3s;z-index:2}.drawer__panel:focus{outline:none}.drawer--top .drawer__panel{bottom:auto;height:var(--size);left:0;right:auto;top:0;transform:translateY(-100%);width:100%}.drawer--right .drawer__panel{bottom:auto;height:100%;left:auto;right:0;top:0;transform:translate(100%);width:var(--size)}.drawer--open .drawer__panel{transform:none}.drawer__header{display:flex}.drawer__title{flex:1 1 auto;font-size:18;line-height:0;padding:10px}.drawer__close{align-items:center;display:flex;flex:0 0 auto;font-size:14px;padding:0 10px}.drawer__body{-webkit-overflow-scrolling:touch;flex:1 1 auto;overflow:auto;padding:10px}.drawer__footer{padding:10px;text-align:right}.drawer__footer ::slotted(six-button:not(:last-of-type)){margin-right:5px}.drawer:not(.drawer--has-footer) .drawer__footer{display:none}.drawer__overlay{background-color:rgba(0,0,0,.8);bottom:0;display:block;left:0;opacity:0;pointer-events:none;position:fixed;right:0;top:0;transition:opacity .3s}.drawer--contained .drawer__overlay{position:absolute}.drawer--open .drawer__overlay{opacity:.4}.visible{visibility:visible}.static{position:static}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}';const f=c;const w=class{constructor(i){t(this,i);this.sixShow=e(this,"six-drawer-show",7);this.sixAfterShow=e(this,"six-drawer-after-show",7);this.sixHide=e(this,"six-drawer-hide",7);this.sixAfterHide=e(this,"six-drawer-after-hide",7);this.sixInitialFocus=e(this,"six-drawer-initial-focus",7);this.sixOverlayDismiss=e(this,"six-drawer-overlay-dismiss",7);this.componentId=`drawer-${o()}`;this.willShow=false;this.willHide=false;this.handleCloseClick=()=>{this.hide()};this.handleKeyDown=t=>{if(t.key==="Escape"){this.hide()}};this.handleOverlayClick=()=>{const t=this.sixOverlayDismiss.emit();if(!t.defaultPrevented){this.hide()}};this.handleSlotChange=()=>{this.hasFooter=h(this.host,"footer")};this.handleTransitionEnd=t=>{const e=t.target;if(t.propertyName==="transform"&&e.classList.contains("drawer__panel")){this.resetTransitionVariables()}};this.hasFooter=false;this.isVisible=false;this.open=false;this.label="";this.placement="right";this.contained=false;this.noHeader=false}handleOpenChange(){this.open?this.show():this.hide()}connectedCallback(){this.modal=new s(this.host,{onFocusOut:()=>{var t;return this.contained?null:(t=this.panel)===null||t===void 0?void 0:t.focus()}})}componentWillLoad(){this.handleSlotChange();if(this.open){this.show();this.resetTransitionVariables()}}disconnectedCallback(){d(this.host)}async show(){if(this.willShow||this.modal==null||this.panel==null||this.drawer==null){return}const t=this.panel;const e=this.sixShow.emit();if(e.defaultPrevented){this.open=false;return}this.willShow=true;this.isVisible=true;this.open=true;if(!this.contained){this.modal.activate();l(this.host)}if(this.open){requestAnimationFrame((()=>{const e=this.sixInitialFocus.emit();if(!e.defaultPrevented){t.focus({preventScroll:true})}}))}}async hide(){if(this.willHide||this.modal==null){return}const t=this.sixHide.emit();if(t.defaultPrevented){this.open=true;return}this.willHide=true;this.open=false;this.modal.deactivate();d(this.host)}resetTransitionVariables(){this.isVisible=this.open;this.willShow=false;this.willHide=false;this.open?this.sixAfterShow.emit():this.sixAfterHide.emit()}render(){return i("div",{key:"3b374386373d3a0c8ab54c65006d456eca1c7a05",ref:t=>this.drawer=t,part:"base",class:{drawer:true,"drawer--open":this.open,"drawer--visible":this.isVisible,"drawer--top":this.placement==="top","drawer--right":this.placement==="right","drawer--bottom":this.placement==="bottom","drawer--left":this.placement==="left","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--has-footer":this.hasFooter},onKeyDown:this.handleKeyDown,onTransitionEnd:this.handleTransitionEnd},i("div",{key:"9e4a6ab308d9c246629711358d127d206325e4a5",part:"overlay",class:"drawer__overlay",onClick:this.handleOverlayClick,tabIndex:-1}),i("div",{key:"4c6e3b2f22daf7e14ed0405fa7d5a7d15f367176",ref:t=>this.panel=t,part:"panel",class:"drawer__panel",role:"dialog","aria-modal":"true","aria-hidden":this.open?"false":"true","aria-label":this.noHeader?this.label:null,"aria-labelledby":!this.noHeader?`${this.componentId}-title`:null,tabIndex:0},!this.noHeader&&i("header",{key:"c800f91a6526fb37ce6db343710f461d8d767189",part:"header",class:"drawer__header"},i("span",{key:"37c9e4de3128b903af53085b640bc0c6fce939a6",part:"title",class:"drawer__title",id:`${this.componentId}-title`},i("slot",{key:"08d5a2230ba50c3299af113a4263ab20966ab368",name:"label"},this.label||String.fromCharCode(65279))),i("six-icon-button",{key:"dd9c7dd9428f46a337905b1497c8f187c5fc697a",exportparts:"base:close-button",class:"drawer__close",name:"close",onClick:this.handleCloseClick})),i("div",{key:"98e6ed638df2983fe553da1362fb2f5596446162",part:"body",class:"drawer__body"},i("slot",{key:"51ca3629571630c98238ec39b422d0074ae6331a"})),i("footer",{key:"2e99bf6f31714d5cc18a33f347d789161dfb369a",part:"footer",class:"drawer__footer"},i("slot",{key:"d13c5a8eed8394c9a48e9fd42f28a714454caf00",name:"footer",onSlotchange:this.handleSlotChange}))))}get host(){return r(this)}static get watchers(){return{open:["handleOpenChange"]}}};w.style=f;export{w as ir_drawer};
//# sourceMappingURL=p-a747dc4a.entry.js.map
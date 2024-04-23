'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-64143048.js');
const v4 = require('./v4-9b297151.js');

const irTextareaCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{border:0;border-radius:8px;border-radius:var(--radius,8px);font-size:16px;margin:0;padding:10px 14px;resize:vertical;transition:all .3s ease-in-out;width:100%}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.border{border-width:1px}.outline{outline-style:solid}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}textarea:focus{border-color:var(--brand-300,#84caff);box-shadow:0 1px 2px 0 rgba(0,0,0,.1),0 0 0 4px var(--brand-100,#d1e9ff);outline:none}.error{border-color:var(--error-300,#fda29b)}textarea:disabled{background:var(--gray-50,#f9fafb);color:var(--gray-300,#d0d5dd);pointer-events:none}.static{position:static}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}";
const IrTextareaStyle0 = irTextareaCss;

const IrTextarea = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChanged = index.createEvent(this, "textChanged", 7);
        this.inputFocus = index.createEvent(this, "inputFocus", 7);
        this.inputBlur = index.createEvent(this, "inputBlur", 7);
        this.inputId = v4.v4();
        this.leftIcon = false;
        this.value = undefined;
        this.name = undefined;
        this.placeholder = undefined;
        this.inputid = undefined;
        this.class = undefined;
        this.required = undefined;
        this.disabled = undefined;
        this.readonly = undefined;
        this.maxlength = undefined;
        this.min = undefined;
        this.max = undefined;
        this.step = undefined;
        this.pattern = undefined;
        this.autocomplete = undefined;
        this.autofocus = undefined;
        this.size = undefined;
        this.multiple = undefined;
        this.error = false;
    }
    render() {
        return (index.h("textarea", { key: '3a48fa9b5243758ffa3793811658e6db1f8a8b51', name: this.name, autoFocus: this.autofocus, disabled: this.disabled, value: this.value, class: this.error ? 'error' : '', id: this.inputId, onFocus: e => this.inputFocus.emit(e), onBlur: e => this.inputBlur.emit(e), onInput: e => this.textChanged.emit(e.target.value) }));
    }
};
IrTextarea.style = IrTextareaStyle0;

exports.ir_textarea = IrTextarea;

//# sourceMappingURL=ir-textarea.cjs.entry.js.map
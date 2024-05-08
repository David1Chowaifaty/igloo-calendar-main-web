import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const irBadgeCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}:host{display:block}.badge{border-radius:calc(var(--radius, 16px)*2);width:-moz-fit-content;width:fit-content}.badge.default{background:hsla(var(--brand-100),1);color:hsl(var(--brand-700));font-size:.875rem}.badge.error{background:#fef2f1;color:#b42318}.badge.pending{background:#fffaeb;color:#b54708}.badge.success{background:#edfdf3;color:#027947}.size-sm{padding:.125rem .5rem}.size-md{padding:.125rem .625rem}.size-lg{padding:.125rem .75rem}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.static{position:static}.mx-auto{margin-left:auto;margin-right:auto}.flex{display:flex}.table{display:table}.table-cell{display:table-cell}.table-row{display:table-row}.size-3{height:.75rem;width:.75rem}.h-screen{height:100vh}.w-full{width:100%}.max-w-full{max-width:100%}.max-w-md{max-width:28rem}.max-w-sm{max-width:24rem}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.rounded-md{border-radius:.375rem}.border{border-width:1px}.border-solid{border-style:solid}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.p-4{padding:1rem}.px-4{padding-left:1rem;padding-right:1rem}.px-\\[20px\\]{padding-left:20px;padding-right:20px}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-1\\.5{padding-bottom:.375rem;padding-top:.375rem}.py-\\[16px\\]{padding-bottom:16px;padding-top:16px}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.outline{outline-style:solid}@media (min-width:768px){.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:justify-between{justify-content:space-between}}.h-5{height:1.25rem}.w-5{width:1.25rem}.hidden{display:none}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}.my-6{margin-bottom:1.5rem;margin-top:1.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-8{margin-bottom:2rem}.h-\\[1px\\]{height:1px}.w-\\[45\\%\\]{width:45%}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.justify-end{justify-content:flex-end}.gap-4{gap:1rem}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}.mb-2{margin-bottom:.5rem}.mb-2\\.5{margin-bottom:.625rem}.mb-6{margin-bottom:1.5rem}.mt-4{margin-top:1rem}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}";
const IrBadgeStyle0 = irBadgeCss;

const IrBadge = /*@__PURE__*/ proxyCustomElement(class IrBadge extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.label = undefined;
        this.variant = 'default';
        this.size = 'sm';
        this.withDot = undefined;
    }
    render() {
        return h("p", { key: '2a14513a27f78d8c07d785b79e6bd8b60b5aae9f', class: `size-${this.size} badge ${this.variant}` }, this.label);
    }
    static get style() { return IrBadgeStyle0; }
}, [1, "ir-badge", {
        "label": [1],
        "variant": [1],
        "size": [1],
        "withDot": [1, "with-dot"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-badge"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-badge":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBadge);
            }
            break;
    } });
}

export { IrBadge as I, defineCustomElement as d };

//# sourceMappingURL=ir-badge2.js.map
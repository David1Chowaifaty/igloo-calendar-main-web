import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const irSocialButtonCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.absolute{position:absolute}.relative{position:relative}.block{display:block}.flex{display:flex}.border{border-width:1px}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}:host{display:block}.social-button{align-items:center;background:#fff;border:1px solid var(--gray-300,#d0d5dd);border-radius:var(--radius,8px);color:var(--gray-700,#344054);display:flex;font-size:16px;justify-content:center;line-height:24px;padding:8px 16px;position:relative;transition:all .3s ease-in-out;width:100%}.social-button:hover{background:var(--gray-50,#f9fafb);color:var(--gray-800,#1d2939)}.icon{left:6rem;position:absolute}.static{position:static}";
const IrSocialButtonStyle0 = irSocialButtonCss;

const IrSocialButton$1 = /*@__PURE__*/ proxyCustomElement(class IrSocialButton extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.socialButtonClick = createEvent(this, "socialButtonClick", 7);
        this.label = undefined;
    }
    render() {
        return (h("button", { key: '80e3fbbfb4f1c4acb3c6d43b5837e3af23caa6f6', class: "social-button", type: "button", onClick: e => this.socialButtonClick.emit(e) }, h("div", { key: 'bcaefa1478e339ce444b28674a2e0db4d86d35ff', class: "icon" }, h("slot", { key: '357bf30a9b0506bf6437372510660d245c1497f6', name: "icon" })), h("span", { key: '5a787bf0c00657c40a05dc2cfe46d377eb14b49e' }, this.label)));
    }
    static get style() { return IrSocialButtonStyle0; }
}, [4, "ir-social-button", {
        "label": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-social-button"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-social-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSocialButton$1);
            }
            break;
    } });
}

const IrSocialButton = IrSocialButton$1;
const defineCustomElement = defineCustomElement$1;

export { IrSocialButton, defineCustomElement };

//# sourceMappingURL=ir-social-button.js.map
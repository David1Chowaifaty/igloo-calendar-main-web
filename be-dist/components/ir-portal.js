import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createPopper } from './popper.js';

const irPortalCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}:host{display:block}.static{position:static}.fixed{position:fixed}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}";
const IrPortalStyle0 = irPortalCss;

const DEFAULT_OFFSET = 20;
const Z_INDEX = '9005';
const ID_PORTAL = 'ir-portal';
const IrPortal$1 = /*@__PURE__*/ proxyCustomElement(class IrPortal extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.reference = undefined;
        this.offset = DEFAULT_OFFSET;
    }
    componentDidLoad() {
        this.createPortal();
        this.moveElementToPortal();
        this.initializePopper();
    }
    disconnectedCallback() {
        if (this.popperInstance) {
            this.popperInstance.destroy();
        }
        if (this.portal) {
            this.portal.remove();
        }
    }
    createPortal() {
        this.portal = document.createElement('div');
        this.portal.setAttribute('id', ID_PORTAL);
        this.portal.style.zIndex = Z_INDEX;
        this.portal.style.position = 'fixed';
        document.body.append(this.portal);
    }
    moveElementToPortal() {
        while (this.hostElement.childNodes.length > 0) {
            this.portal.appendChild(this.hostElement.firstChild);
        }
    }
    async updatePosition() {
        if (this.popperInstance) {
            this.popperInstance.update();
        }
    }
    initializePopper() {
        this.popperInstance = createPopper(this.reference, this.portal, {
            placement: 'auto-start',
            strategy: 'fixed',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, this.offset],
                    },
                },
                {
                    name: 'preventOverflow',
                    options: {
                        boundary: 'viewport',
                    },
                },
            ],
        });
    }
    render() {
        return (h(Host, { key: '20cd63ec7414b8b5263354f77530bef35e8fffe7' }, h("slot", { key: 'bc910a46071063b67149da99d13c78262abe0808', name: "portal-body" })));
    }
    get hostElement() { return this; }
    static get style() { return IrPortalStyle0; }
}, [1, "ir-portal", {
        "reference": [16],
        "offset": [2],
        "updatePosition": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-portal"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-portal":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPortal$1);
            }
            break;
    } });
}

const IrPortal = IrPortal$1;
const defineCustomElement = defineCustomElement$1;

export { IrPortal, defineCustomElement };

//# sourceMappingURL=ir-portal.js.map
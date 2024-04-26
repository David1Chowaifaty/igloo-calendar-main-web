import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';

const irBookingListingCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}.table{caption-side:bottom;color:var(--gray-900);display:table;font-size:.875rem;line-height:1.25rem;width:100%}.table-cell{display:table-cell}.table-row{border-bottom-width:1px;border-color:var(--gray-200);display:table-row;transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.border{border-width:1px}.app_container{border-radius:min(var(--radius,8px),8px)!important}.trigger-container{min-block-size:3rem}.table-header{background:var(--gray-50);border-bottom:1px solid var(--gray-200);color:var(--gray-600);font-size:12px}.table-header th:first-child{border-top-left-radius:var(--radius)}.table-header th:last-child{border-top-right-radius:var(--radius)}.table-header:hover,.table-row:hover{background:var(--gray-100)}.table-header tr{border-bottom:1px solid var(--gray-200)}.table-footer{border-top:1px solid var(--gray-200);font-weight:500}.table-footer tr:last-child{border-bottom-width:0}.table-head{font-weight:500;height:2.5rem;text-align:left}.table-cell,.table-head{padding:.75rem 1.5rem;vertical-align:middle}.table-container{background:#fff;border:1px solid var(--gray-200);border-radius:var(--radius)}:host{display:block}.static{position:static}.flex{display:flex}.size-3{height:.75rem;width:.75rem}.items-center{align-items:center}.justify-between{justify-content:space-between}.p-4{padding:1rem}.px-\\[20px\\]{padding-left:20px;padding-right:20px}.py-\\[16px\\]{padding-bottom:16px;padding-top:16px}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.outline{outline-style:solid}.justify-center{justify-content:center}.h-5{height:1.25rem}.w-5{width:1.25rem}";
const IrBookingListingStyle0 = irBookingListingCss;

const IrBookingListing$1 = /*@__PURE__*/ proxyCustomElement(class IrBookingListing extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'aa631c4c5bbb66a01ff3a92603fb92d9c8067e08' }, h("div", { key: '3e069075b2c1650e9472c39e74898f36ef91b009', class: 'p-4' }, h("div", { key: 'f26ea66b437ae958d68d0c963448e93fe8790346', class: "table-container shadow-md" }, h("table", { key: '4c1748458287f12b7d3a7eabf264d3219585bef4', class: "table" }, h("thead", { key: 'f3273ae112d09221d52cdf9ef815a70785c3a885' }, h("tr", { key: 'c53131730ec82d132d8463f2687b7e443cd3f219', class: "table-header" }, h("th", { key: 'adf41951fc3dd2eff009b572a0f48ae477bbc8ad', class: "table-head" }, "ID"), h("th", { key: '143be7e90da790875c429d98a13a83cf0bfeffa9', class: "table-head" }, "Name"), h("th", { key: 'f039d4daae673f2cdab451848f24be780441e499', class: "table-head" }, "Email"), h("th", { key: '0715da436a310bc43de9f19cbd4fca80b3b380b1', class: "table-head" }, "City"), h("th", { key: '270d0bcca07bbbce776b80ca528821d7db42b098', class: "table-head" }, "Country"), h("th", { key: '5efd8b0e3f229dd66fdcde777618675f05a27c77', class: "table-head" }, "Zip Code"))), h("tbody", { key: 'a13c853ae017b53db7f8311f8bf32f2205cf3d19', class: 'table-body' }, [...new Array(10)].map((_, i) => (h("tr", { class: "table-row" }, h("td", { class: "table-cell" }, i), h("td", { class: "table-cell" }, "Name ", i), h("td", { class: "table-cell" }, "email", i, "@example.com"), h("td", { class: "table-cell" }, "City ", i), h("td", { class: "table-cell" }, "Country ", i), h("td", { class: "table-cell" }, "Zip", i)))))), h("div", { key: 'ac961c00e233ec8d753ded4d4ac402ceb0d75a95', class: "flex items-center justify-between px-[20px] py-[16px] " }, h("ir-button", { key: '7d90c98005d8e0c0c45eab06faab5089b29f3594', variants: "outline", label: "Previous", haveLeftIcon: true }, h("ir-icons", { key: '745ff6addbde19814439e3425c87cdf501e43f47', name: "arrow_left", slot: "left-icon", svgClassName: "size-3" })), h("ir-button", { key: 'add17c54802cf8ae38c8fef3304b8d64a49a05b0', variants: "outline", label: "Next", haveRightIcon: true }, h("ir-icons", { key: 'd812d3ab1ec639c5296a2b7f38f73ac133f931b0', name: "arrow_right", slot: "right-icon", svgClassName: "size-3" })))))));
    }
    static get style() { return IrBookingListingStyle0; }
}, [1, "ir-booking-listing"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-listing", "ir-button", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-listing":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingListing$1);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrBookingListing = IrBookingListing$1;
const defineCustomElement = defineCustomElement$1;

export { IrBookingListing, defineCustomElement };

//# sourceMappingURL=ir-booking-listing.js.map
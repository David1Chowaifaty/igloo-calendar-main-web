import { proxyCustomElement, HTMLElement, h, Fragment } from '@stencil/core/internal/client';
import { d as defineCustomElement$6 } from './ir-button2.js';
import { d as defineCustomElement$5 } from './ir-carousel2.js';
import { d as defineCustomElement$4 } from './ir-dialog2.js';
import { d as defineCustomElement$3 } from './ir-facilities2.js';
import { d as defineCustomElement$2 } from './ir-gallery2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';
import { v as v4 } from './v4.js';

const irPropertyGalleryCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}:host{--ir-dialog-max-width:50rem}.modal-container{background:#fff}.carousel-container{aspect-ratio:4/3}.static{position:static}.relative{position:relative}.z-50{z-index:50}.mb-1{margin-bottom:.25rem}.mb-5{margin-bottom:1.25rem}.mt-4{margin-top:1rem}.block{display:block}.flex{display:flex}.hidden{display:none}.size-4{height:1rem;width:1rem}.h-14{height:3.5rem}.h-48{height:12rem}.max-h-\\[70\\%\\]{max-height:70%}.max-h-\\[80vh\\]{max-height:80vh}.w-full{width:100%}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.rounded-md{border-radius:.375rem}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-4{padding-bottom:1rem;padding-top:1rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:768px){.md\\:block{display:block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:max-h-\\[150px\\]{max-height:150px}.md\\:w-auto{width:auto}.md\\:flex-wrap{flex-wrap:wrap}.md\\:px-4{padding-left:1rem;padding-right:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:max-h-\\[250px\\]{max-height:250px}.lg\\:size-7{height:1.75rem;width:1.75rem}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;white-space:nowrap;width:1px}.absolute,.sr-only{position:absolute}.h-5{height:1.25rem}.w-5{width:1.25rem}.sticky{position:sticky}.bottom-0{bottom:0}.top-0{top:0}.z-40{z-index:40}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.w-40{width:10rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.gap-1{gap:.25rem}.gap-10{gap:2.5rem}.gap-4{gap:1rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.overflow-hidden{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.rounded-b-none{border-bottom-left-radius:0;border-bottom-right-radius:0}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.p-2{padding:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.text-slate-700{--tw-text-opacity:1;color:rgb(51 65 85/var(--tw-text-opacity))}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.line-through{text-decoration-line:line-through}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:justify-start{justify-content:flex-start}.md\\:space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.md\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}}@media (min-width:1024px){.lg\\:max-w-md{max-width:28rem}.lg\\:flex-row{flex-direction:row}.lg\\:justify-end{justify-content:flex-end}}.fixed{position:fixed}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.h-6{height:1.5rem}.h-screen{height:100vh}.w-6{width:1.5rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}";
const IrPropertyGalleryStyle0 = irPropertyGalleryCss;

const IrPropertyGallery = /*@__PURE__*/ proxyCustomElement(class IrPropertyGallery extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.exposed_property = undefined;
        this.property_state = 'gallery';
        this.roomType = undefined;
    }
    handleOpenGallery() {
        this.irDialog.openModal();
    }
    handleOpenCarouselGallery() {
        this.irDialog.openModal();
    }
    renderAmeneties() {
        const checkAmenity = (code) => {
            var _a;
            return (_a = this.exposed_property) === null || _a === void 0 ? void 0 : _a.amenities.find(a => a.code === code);
        };
        const wifi = checkAmenity('freewifi');
        const climatecontrol = checkAmenity('climatecontrol');
        const balcony = checkAmenity('balcony');
        return (h("ul", { class: "flex items-center text-xs text-green-500 gap-2 flex-wrap" }, wifi && (h("li", { class: "flex items-center gap-2" }, h("ir-icons", { name: "wifi", svgClassName: "size-4" }), " ", h("span", null, wifi.description))), climatecontrol && (h("li", { class: "flex items-center gap-2" }, h("ir-icons", { name: "snowflake", svgClassName: "size-4" }), " ", h("span", null, climatecontrol.description))), balcony && (h("li", { class: "flex items-center gap-2" }, h("ir-icons", { name: "sun", svgClassName: "size-4" }), " ", h("span", null, balcony.description)))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (!this.exposed_property) {
            return null;
        }
        return (h("div", null, this.property_state === 'gallery' ? (h("ir-gallery", { totalImages: this.exposed_property.images.length, images: (_a = this.exposed_property.images) === null || _a === void 0 ? void 0 : _a.map(i => i.url).slice(0, 5) })) : (h(Fragment, null, h("div", { class: "flex text-gray-700 flex-wrap items-center gap-2 font-normal md:hidden text-sm py-2" }, ((_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup.length) > 0 && (h(Fragment, null, h("ir-icons", { name: "bed" }), ' ', (_d = (_c = this.roomType) === null || _c === void 0 ? void 0 : _c.bedding_setup) === null || _d === void 0 ? void 0 :
            _d.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - ")))))), this.renderAmeneties()), h("div", { class: "relative md:hidden block w-full h-48 carousel-container   rounded-md" }, h("ir-carousel", { slides: (_f = (_e = this.roomType) === null || _e === void 0 ? void 0 : _e.images) === null || _f === void 0 ? void 0 : _f.map(img => ({
                alt: img.tooltip,
                id: v4(),
                image_uri: img.url,
            })) })), h("div", { class: "relative hidden md:block py-2" }, h("div", { class: "w-full md:w-auto md:max-h-[150px] mb-1 lg:max-h-[250px]  carousel-container   rounded-md" }, h("ir-carousel", { slides: (_g = this.roomType.images) === null || _g === void 0 ? void 0 : _g.map(img => ({
                alt: img.tooltip,
                id: v4(),
                image_uri: img.url,
            })) })), ((_j = (_h = this.roomType) === null || _h === void 0 ? void 0 : _h.bedding_setup) === null || _j === void 0 ? void 0 : _j.length) > 0 && (h("div", { class: " text-gray-700 items-center gap-2 font-normal hidden md:flex md:flex-wrap text-sm py-2" }, h("ir-icons", { name: "bed" }), ' ', (_l = (_k = this.roomType) === null || _k === void 0 ? void 0 : _k.bedding_setup) === null || _l === void 0 ? void 0 :
            _l.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - ")))))), this.renderAmeneties(), h("ir-button", { onButtonClick: () => this.irDialog.openModal(), variants: "ghost", label: "More details" })))), h("ir-dialog", { ref: el => (this.irDialog = el) }, h("div", { slot: "modal-body", class: "modal-container px-2 md:px-4 b-4 max-h-[80vh]" }, h("div", { class: " bg-white z-50 h-14 flex justify-between items-center w-full" }, h("h2", { class: "font-semibold text-lg md:text-xl" }, this.property_state === 'carousel' ? this.roomType.name : this.exposed_property.name), h("ir-button", { variants: "icon", onButtonClick: () => this.irDialog.closeModal() }, h("div", { slot: "btn-icon" }, h("ir-icons", { name: "xmark" })))), h("div", { class: "max-h-[70%] py-4" }, h("ir-carousel", { slides: this.exposed_property.images.map(img => ({
                alt: img.tooltip,
                id: v4(),
                image_uri: img.url,
            })) })), this.property_state === 'carousel' && (h("section", { class: 'text-sm mt-4' }, h("h2", { class: "text-lg font-medium mb-5" }, "Facilities and services"), h("ir-facilities", { properties: this.exposed_property }), h("p", { innerHTML: (_m = this.exposed_property) === null || _m === void 0 ? void 0 : _m.description.location_and_intro, class: "py-2" })))))));
    }
    static get style() { return IrPropertyGalleryStyle0; }
}, [1, "ir-property-gallery", {
        "exposed_property": [16],
        "property_state": [1],
        "roomType": [16]
    }, [[0, "openGallery", "handleOpenGallery"], [0, "carouselImageClicked", "handleOpenCarouselGallery"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-property-gallery", "ir-button", "ir-carousel", "ir-dialog", "ir-facilities", "ir-gallery", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-property-gallery":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPropertyGallery);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-carousel":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-facilities":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-gallery":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPropertyGallery as I, defineCustomElement as d };

//# sourceMappingURL=ir-property-gallery2.js.map
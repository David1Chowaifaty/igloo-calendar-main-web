import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as colorVariants, d as defineCustomElement$1 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-button2.js';

const irLabelCss = ".logo.sc-ir-label{height:1.5rem;width:1.5rem}.sc-ir-label-h{display:flex;margin-bottom:5px;gap:5px}.icon.sc-ir-label{margin-left:3px;padding:0;margin-top:0;display:flex;align-items:center}.label_message.sc-ir-label{margin:0 3px;padding:0}.label_title.sc-ir-label{min-width:max-content}.icon-container.sc-ir-label{margin:0;padding:0}.country.sc-ir-label{height:16px;width:23px;border-radius:3px}svg.sc-ir-label{margin:0;padding:0}";
const IrLabelStyle0 = irLabelCss;

const IrLabel = /*@__PURE__*/ proxyCustomElement(class IrLabel extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.editSidebar = createEvent(this, "editSidebar", 7);
        this.label = undefined;
        this.value = undefined;
        this.iconShown = false;
        this.image = undefined;
        this.country = false;
        this.imageStyle = '';
        this.icon_name = 'edit';
        this.icon_style = undefined;
        this.ignore_value = false;
    }
    openEditSidebar() {
        this.editSidebar.emit();
    }
    render() {
        if (!this.value && !this.ignore_value) {
            return null;
        }
        return (h(Host, { class: this.image ? 'align-items-center' : '' }, h("strong", { class: "label_title" }, this.label), this.image && h("img", { src: this.image.src, class: `p-0 m-0 ${this.country ? 'country' : 'logo'} ${this.image.style}`, alt: this.image.src }), h("p", { class: 'label_message' }, this.value), this.iconShown && (h("div", { class: "icon-container" }, h("ir-button", { variant: "icon", icon_name: this.icon_name, style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.1rem' }), onClickHanlder: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openEditSidebar();
            } })))));
    }
    static get style() { return IrLabelStyle0; }
}, [2, "ir-label", {
        "label": [1],
        "value": [1],
        "iconShown": [4, "icon-shown"],
        "image": [16],
        "country": [4],
        "imageStyle": [1, "image-style"],
        "icon_name": [1],
        "icon_style": [1],
        "ignore_value": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-label", "ir-button", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-label":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrLabel);
            }
            break;
        case "ir-button":
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

export { IrLabel as I, defineCustomElement as d };

//# sourceMappingURL=ir-label2.js.map
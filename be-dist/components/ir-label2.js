import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irLabelCss = ".logo.sc-ir-label{height:1.5rem;width:1.5rem}.sc-ir-label-h{display:flex;gap:5px;align-items:center}.icon.sc-ir-label{margin-left:3px;padding:0;margin-top:0;display:flex;align-items:center}.label_message.sc-ir-label{margin:0 3px;padding:0}.label_title.sc-ir-label{min-width:max-content;padding:0;margin:0;font-weight:600}.label_placeholder.sc-ir-label{color:#cacfe7;padding:0 !important;margin:0 !important}.icon-container.sc-ir-label{margin:0;padding:0}.country.sc-ir-label{height:16px;width:23px;border-radius:3px}svg.sc-ir-label{margin:0;padding:0}.label_wrapper_inline.sc-ir-label{display:inline;max-width:100%;gap:5px;margin-bottom:5px}.label_wrapper_flex.sc-ir-label{display:flex;align-items:center;gap:5px;max-width:100%;margin-bottom:5px}.label_title.sc-ir-label{font-weight:600;white-space:nowrap;display:inline}.label_message.sc-ir-label{display:inline;white-space:normal;word-break:break-word}";
const IrLabelStyle0 = irLabelCss;

const IrLabel = /*@__PURE__*/ proxyCustomElement(class IrLabel extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.labelText = undefined;
        this.content = undefined;
        this.display = 'flex';
        this.renderContentAsHtml = false;
        this.image = null;
        this.isCountryImage = false;
        this.imageStyle = '';
        this.ignoreEmptyContent = false;
        this.placeholder = undefined;
    }
    render() {
        var _a, _b, _c;
        // If we have no content and no placeholder, and we are NOT ignoring the empty content, return null.
        if (!this.placeholder && !this.content && !this.ignoreEmptyContent) {
            return null;
        }
        return (h(Host, { class: this.image ? 'align-items-center' : '' }, h("div", { class: `${this.display === 'inline' ? 'label_wrapper_inline' : 'label_wrapper_flex'}` }, this.labelText && h("p", { class: "label_title" }, this.labelText), h("slot", { name: "prefix" }), this.image && (h("img", { src: this.image.src, alt: (_a = this.image.alt) !== null && _a !== void 0 ? _a : this.image.src, class: `p-0 m-0 ${this.isCountryImage ? 'country' : 'logo'} ${(_b = this.image.style) !== null && _b !== void 0 ? _b : ''} ${(_c = this.imageStyle) !== null && _c !== void 0 ? _c : ''}` })), this.content ? (this.renderContentAsHtml ? (h("p", { class: "label_message", innerHTML: this.content })) : (h("p", { class: "label_message" }, this.content))) : (h("p", { class: "label_placeholder" }, this.placeholder)), h("slot", null), h("slot", { name: "suffix" }))));
    }
    static get style() { return IrLabelStyle0; }
}, [6, "ir-label", {
        "labelText": [1, "label-text"],
        "content": [1],
        "display": [1],
        "renderContentAsHtml": [4, "render-content-as-html"],
        "image": [16],
        "isCountryImage": [4, "is-country-image"],
        "imageStyle": [1, "image-style"],
        "ignoreEmptyContent": [4, "ignore-empty-content"],
        "placeholder": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-label":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrLabel);
            }
            break;
    } });
}

export { IrLabel as I, defineCustomElement as d };

//# sourceMappingURL=ir-label2.js.map
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irLabelCss = ".logo.sc-ir-label{height:1.5rem;width:1.5rem}.sc-ir-label-h{display:flex;gap:5px;align-items:center}[data-empty].sc-ir-label-h{display:none !important}.icon.sc-ir-label{margin-left:3px;padding:0;margin-top:0;display:flex;align-items:center}.label_message.sc-ir-label{margin:0 3px;padding:0}.label_title.sc-ir-label{min-width:max-content;padding:0;margin:0;font-weight:600}.label_placeholder.sc-ir-label{color:#cacfe7;padding:0 !important;margin:0 !important}.icon-container.sc-ir-label{margin:0;padding:0}.country.sc-ir-label{height:16px;width:23px;border-radius:3px}svg.sc-ir-label{margin:0;padding:0}.label_wrapper_inline.sc-ir-label{display:inline;max-width:100%;gap:5px}.label_wrapper_flex.sc-ir-label{display:flex;align-items:center;gap:5px;max-width:100%}.label_title.sc-ir-label{font-weight:600;white-space:nowrap;display:inline}.label_message.sc-ir-label{display:inline;white-space:normal;word-break:break-word}";
const IrLabelStyle0 = irLabelCss;

const IrLabel = /*@__PURE__*/ proxyCustomElement(class IrLabel extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    // -- Props --
    /** The text to display as the label's title */
    labelText;
    /** The main text or HTML content to display */
    content;
    display = 'flex';
    /** If true, will render `content` as HTML */
    renderContentAsHtml = false;
    /** Object representing the image used within the label */
    image = null;
    /** Renders a country-type image style (vs. a 'logo') */
    isCountryImage = false;
    /** Additional CSS classes or style for the image */
    imageStyle = '';
    /** If true, label will ignore checking for an empty content */
    ignoreEmptyContent = false;
    /** Placeholder text to display if content is empty */
    placeholder;
    /** inline styles for the component container */
    containerStyle;
    render() {
        // If we have no content and no placeholder, and we are NOT ignoring the empty content, return null.
        if (!this.placeholder && !this.content && !this.ignoreEmptyContent) {
            return h(Host, { "data-empty": true });
        }
        return (h(Host, { class: this.image ? 'align-items-center' : '' }, h("div", { class: `${this.display === 'inline' ? 'label_wrapper_inline' : 'label_wrapper_flex'} `, style: this.containerStyle }, this.labelText && h("p", { class: "label_title" }, this.labelText), h("slot", { name: "prefix" }), this.image && (h("img", { src: this.image.src, alt: this.image.alt ?? this.image.src, class: `p-0 m-0 ${this.isCountryImage ? 'country' : 'logo'} ${this.image.style ?? ''} ${this.imageStyle ?? ''}` })), this.content ? (this.renderContentAsHtml ? (h("p", { class: "label_message", innerHTML: this.content })) : (h("p", { class: "label_message" }, this.content))) : (h("p", { class: "label_placeholder" }, this.placeholder)), h("slot", null), h("slot", { name: "suffix" }))));
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
        "placeholder": [1],
        "containerStyle": [16]
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
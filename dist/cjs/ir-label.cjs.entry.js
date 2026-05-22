'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irLabelCss = ".logo.sc-ir-label{height:1.5rem;width:1.5rem}.sc-ir-label-h{display:flex;gap:5px;align-items:center}[data-empty].sc-ir-label-h{display:none !important}.icon.sc-ir-label{margin-left:3px;padding:0;margin-top:0;display:flex;align-items:center}.label_message.sc-ir-label{margin:0 3px;padding:0}.label_title.sc-ir-label{min-width:max-content;padding:0;margin:0;font-weight:600}.label_placeholder.sc-ir-label{color:#cacfe7;color:var(--wa-color-neutral-70);padding:0 !important;margin:0 !important}.icon-container.sc-ir-label{margin:0;padding:0}.country.sc-ir-label{height:16px;width:23px;border-radius:3px}svg.sc-ir-label{margin:0;padding:0}.label_wrapper_inline.sc-ir-label{display:inline;max-width:100%;gap:5px}.label_wrapper_flex.sc-ir-label{display:flex;align-items:center;gap:5px;max-width:100%}.label_title.sc-ir-label{font-weight:600;white-space:nowrap;display:inline}.label_message.sc-ir-label{display:inline;white-space:normal;word-break:break-word}";
const IrLabelStyle0 = irLabelCss;

const IrLabel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
            return index.h(index.Host, { "data-empty": true });
        }
        return (index.h(index.Host, { class: this.image ? 'align-items-center' : '' }, index.h("div", { class: `${this.display === 'inline' ? 'label_wrapper_inline' : 'label_wrapper_flex'} `, style: this.containerStyle }, this.labelText && index.h("p", { class: "label_title" }, this.labelText), index.h("slot", { name: "prefix" }), this.image && (index.h("img", { src: this.image.src, alt: this.image.alt ?? this.image.src, class: `p-0 m-0 ${this.isCountryImage ? 'country' : 'logo'} ${this.image.style ?? ''} ${this.imageStyle ?? ''}` })), this.content ? (this.renderContentAsHtml ? (index.h("p", { class: "label_message", innerHTML: this.content })) : (index.h("p", { class: "label_message" }, this.content))) : (index.h("p", { class: "label_placeholder" }, this.placeholder)), index.h("slot", null), index.h("slot", { name: "suffix" }))));
    }
};
IrLabel.style = IrLabelStyle0;

exports.ir_label = IrLabel;

//# sourceMappingURL=ir-label.cjs.entry.js.map
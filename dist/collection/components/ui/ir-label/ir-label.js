import { h, Host } from "@stencil/core";
export class IrLabel {
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
    static get is() { return "ir-label"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-label.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-label.css"]
        };
    }
    static get properties() {
        return {
            "labelText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The text to display as the label's title"
                },
                "getter": false,
                "setter": false,
                "attribute": "label-text",
                "reflect": false
            },
            "content": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The main text or HTML content to display"
                },
                "getter": false,
                "setter": false,
                "attribute": "content",
                "reflect": false
            },
            "display": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'inline' | 'flex'",
                    "resolved": "\"flex\" | \"inline\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "display",
                "reflect": false,
                "defaultValue": "'flex'"
            },
            "renderContentAsHtml": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, will render `content` as HTML"
                },
                "getter": false,
                "setter": false,
                "attribute": "render-content-as-html",
                "reflect": false,
                "defaultValue": "false"
            },
            "image": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ src: string; alt: string; style?: string } | null",
                    "resolved": "{ src: string; alt: string; style?: string; }",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Object representing the image used within the label"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
            },
            "isCountryImage": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Renders a country-type image style (vs. a 'logo')"
                },
                "getter": false,
                "setter": false,
                "attribute": "is-country-image",
                "reflect": false,
                "defaultValue": "false"
            },
            "imageStyle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Additional CSS classes or style for the image"
                },
                "getter": false,
                "setter": false,
                "attribute": "image-style",
                "reflect": false,
                "defaultValue": "''"
            },
            "ignoreEmptyContent": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, label will ignore checking for an empty content"
                },
                "getter": false,
                "setter": false,
                "attribute": "ignore-empty-content",
                "reflect": false,
                "defaultValue": "false"
            },
            "placeholder": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Placeholder text to display if content is empty"
                },
                "getter": false,
                "setter": false,
                "attribute": "placeholder",
                "reflect": false
            },
            "containerStyle": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{\n    [key: string]: string;\n  }",
                    "resolved": "{ [key: string]: string; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "inline styles for the component container"
                },
                "getter": false,
                "setter": false
            }
        };
    }
}
//# sourceMappingURL=ir-label.js.map

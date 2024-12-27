import { h, Host } from "@stencil/core";
export class IrLabel {
    constructor() {
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
                "attribute": "placeholder",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-label.js.map

import { h } from "@stencil/core";
export class IrLoginAsideImage {
    /** Image URL rendered as the aside background. */
    imageSrc;
    /** Alternative text. Leave empty when the image is purely decorative. */
    imageAlt = '';
    render() {
        return (h("aside", { key: '23397856bd40ee27042c04cb833b3059a5e0d8aa', class: "login-aside-image" }, this.imageSrc && h("img", { key: '8503c2f34c5305191e311dcf304c99b31b857eb0', class: "login-aside-image__img", src: this.imageSrc, alt: this.imageAlt, "aria-hidden": this.imageAlt ? undefined : 'true', decoding: "async" })));
    }
    static get is() { return "ir-login-aside-image"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-login-aside-image.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-login-aside-image.css"]
        };
    }
    static get properties() {
        return {
            "imageSrc": {
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
                    "text": "Image URL rendered as the aside background."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "image-src"
            },
            "imageAlt": {
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
                    "text": "Alternative text. Leave empty when the image is purely decorative."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "image-alt",
                "defaultValue": "''"
            }
        };
    }
}

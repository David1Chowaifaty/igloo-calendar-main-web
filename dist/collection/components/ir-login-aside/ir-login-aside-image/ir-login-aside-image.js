import { h } from "@stencil/core";
export class IrLoginAsideImage {
    /** Image URL rendered as the aside background. */
    imageSrc;
    /** Alternative text. Leave empty when the image is purely decorative. */
    imageAlt = '';
    render() {
        return (h("aside", { key: '796a2589f4f0b6d404945e253d69d2a7777fc49e', class: "login-aside-image" }, this.imageSrc && h("img", { key: 'e61d8d279abf9c2dad4747dec81df76430c19d82', class: "login-aside-image__img", src: this.imageSrc, alt: this.imageAlt, "aria-hidden": this.imageAlt ? undefined : 'true', decoding: "async" })));
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

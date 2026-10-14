import { h } from "@stencil/core";
export class IrLoginAsideImage {
    /** Image URL rendered as the aside background. */
    imageSrc;
    /** Alternative text. Leave empty when the image is purely decorative. */
    imageAlt = '';
    render() {
        return (h("aside", { key: 'b1d45dd2867e9702c5120a83960db75b10d321f3', class: "login-aside-image" }, this.imageSrc && h("img", { key: '0fd07e686861593c628e455fb8ebcf372237ba1d', class: "login-aside-image__img", src: this.imageSrc, alt: this.imageAlt, "aria-hidden": this.imageAlt ? undefined : 'true', decoding: "async" })));
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

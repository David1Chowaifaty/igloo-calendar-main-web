import { h } from "@stencil/core";
import { decode } from "blurhash";
export class IrImage {
    constructor() {
        this.src = undefined;
        this.thumbnail = undefined;
        this.blurhash = undefined;
        this.width = 32;
        this.height = 32;
        this.alt = undefined;
        this.blurDataUrl = undefined;
        this.loaded = false;
    }
    componentWillLoad() {
        this.decodeBlurHash();
    }
    decodeBlurHash() {
        if (this.blurhash) {
            const pixels = decode(this.blurhash, this.width, this.height);
            const canvas = document.createElement('canvas');
            canvas.width = this.width;
            canvas.height = this.height;
            const ctx = canvas.getContext('2d');
            const imageData = new ImageData(new Uint8ClampedArray(pixels), this.width, this.height);
            ctx.putImageData(imageData, 0, 0);
            this.blurDataUrl = canvas.toDataURL();
        }
    }
    handleImageLoad() {
        this.loaded = true;
    }
    checkImageCached() {
        if (this.imageRef && this.imageRef.complete && this.imageRef.naturalHeight !== 0) {
            this.loaded = true;
        }
    }
    render() {
        return (h("div", { key: '30a6550356c10661320844072edde77fae4aab41', class: "image-container" }, this.blurDataUrl && !this.thumbnail && h("img", { key: '84c875a19e7a4e19719f8843f226b27694fdf1fb', src: this.blurDataUrl, class: `placeholder ${this.loaded ? 'hidden' : ''}`, alt: "placeholder" }), this.thumbnail !== undefined && h("img", { key: 'a00957f6e8727f759d521bc4a7721f722b24047f', src: `data:image/png;base64,${this.thumbnail}`, class: `placeholder ${this.loaded ? 'hidden' : ''}`, alt: "placeholder" }), h("img", { key: 'bc4627e696be7e8e15207c6b82f3b5f395053670', ref: el => {
                this.imageRef = el;
                this.checkImageCached(); // Check if the image is already cached
            }, src: this.src, class: `original ${this.loaded ? 'visible' : ''}`, alt: this.alt, loading: "lazy", onLoad: () => this.handleImageLoad() })));
    }
    static get is() { return "ir-image"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-image.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-image.css"]
        };
    }
    static get properties() {
        return {
            "src": {
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
                    "text": ""
                },
                "attribute": "src",
                "reflect": false
            },
            "thumbnail": {
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
                    "text": ""
                },
                "attribute": "thumbnail",
                "reflect": false
            },
            "blurhash": {
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
                    "text": ""
                },
                "attribute": "blurhash",
                "reflect": false
            },
            "width": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "width",
                "reflect": false,
                "defaultValue": "32"
            },
            "height": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "height",
                "reflect": false,
                "defaultValue": "32"
            },
            "alt": {
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
                    "text": ""
                },
                "attribute": "alt",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "blurDataUrl": {},
            "loaded": {}
        };
    }
}
//# sourceMappingURL=ir-image.js.map

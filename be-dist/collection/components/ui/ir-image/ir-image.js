import { h } from "@stencil/core";
export class IrImage {
    constructor() {
        this.width = 32;
        this.height = 32;
        this.loaded = false;
    }
    async componentWillLoad() {
        this.decodeBlurHash();
        // Pre-check if the image is cached before the initial render:
        if (this.src) {
            const img = new Image();
            img.src = this.src;
            if (img.complete && img.naturalWidth !== 0) {
                // If the image is cached, set loaded = true before first render
                this.loaded = true;
            }
        }
    }
    decodeBlurHash() {
        // ... same as before ...
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
        return (h("div", { key: 'ef93247a670109b0b3d96a160377b3bcfe955073', class: "image-container" }, this.blurDataUrl && !this.thumbnail && h("img", { key: 'f354ba7d185b1b812f47aeb65aa451758d192e82', src: this.blurDataUrl, class: `placeholder ${this.loaded ? 'hidden' : ''}`, alt: "placeholder" }), this.thumbnail !== undefined && h("img", { key: '06d424bf01ea06b032648ef1497da3a3c7daea20', src: `data:image/png;base64,${this.thumbnail}`, class: `placeholder ${this.loaded ? 'hidden' : ''}`, alt: "placeholder" }), h("img", { key: '52fc482cf25256665a0ef529749a3f40954ffbdc', ref: el => {
                this.imageRef = el;
                // Removed checkImageCached() from here
            }, src: this.src, class: `original  visible`,
            // class={`original ${this.loaded ? 'visible' : ''}`}
            alt: this.alt,
            // loading="lazy"
            onLoad: () => this.handleImageLoad() })));
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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

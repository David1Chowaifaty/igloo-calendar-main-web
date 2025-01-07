import { h } from "@stencil/core";
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
        return (h("div", { key: 'b1c56eb42015b3a5f32715868a294209efe5cb38', class: "image-container" }, this.blurDataUrl && !this.thumbnail && h("img", { key: '7479e68b92021799336254cf4a39292a4eafeb68', src: this.blurDataUrl, class: `placeholder ${this.loaded ? 'hidden' : ''}`, alt: "placeholder" }), this.thumbnail !== undefined && h("img", { key: '236a241170b2695c249ec377d69ea95e84b0ec77', src: `data:image/png;base64,${this.thumbnail}`, class: `placeholder ${this.loaded ? 'hidden' : ''}`, alt: "placeholder" }), h("img", { key: '28118a5347364bb43e387674055e69ef5332fadf', ref: el => {
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

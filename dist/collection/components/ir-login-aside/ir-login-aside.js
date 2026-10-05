import { h } from "@stencil/core";
export class IrLoginAside {
    /** Which aside content to render. */
    view = 'calendar';
    /** Image URL, used when `view` is `image`. */
    imageSrc;
    /** Alternative text for the image. Empty means decorative. */
    imageAlt = '';
    /** Server-provided `Lcz_*` translations, passed through to the calendar view. */
    localeEntries = null;
    render() {
        if (this.view === 'calendar') {
            return h("ir-login-aside-calendar", { localeEntries: this.localeEntries });
        }
        return h("ir-login-aside-image", { imageSrc: this.imageSrc, imageAlt: this.imageAlt });
    }
    static get is() { return "ir-login-aside"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-login-aside.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-login-aside.css"]
        };
    }
    static get properties() {
        return {
            "view": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "LoginAsideView",
                    "resolved": "\"calendar\" | \"image\"",
                    "references": {
                        "LoginAsideView": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-login-aside/ir-login-aside.tsx",
                            "id": "src/components/ir-login-aside/ir-login-aside.tsx::LoginAsideView"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Which aside content to render."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "view",
                "defaultValue": "'calendar'"
            },
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
                    "text": "Image URL, used when `view` is `image`."
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
                    "text": "Alternative text for the image. Empty means decorative."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "image-alt",
                "defaultValue": "''"
            },
            "localeEntries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TLocaleEntries | null",
                    "resolved": "{ [x: string]: string; }",
                    "references": {
                        "TLocaleEntries": {
                            "location": "import",
                            "path": "@/stores/locales.store",
                            "id": "src/stores/locales.store.ts::TLocaleEntries",
                            "referenceLocation": "TLocaleEntries"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Server-provided `Lcz_*` translations, passed through to the calendar view."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
            }
        };
    }
}

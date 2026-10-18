import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    /** Endpoints that show the embedded interceptor's full-page loader. Omit to keep the interceptor's default list. */
    handledEndpoints;
    render() {
        return (h(Host, { key: 'c761828e5ab54eb9fe6115090b622d95a8df5174' }, h("ir-interceptor", { key: '4888ed673f279b5a4e1c118c60a8d96bbc22c9fd', ...(this.handledEndpoints ? { handledEndpoints: this.handledEndpoints } : {}) }), h("ir-toast", { key: 'da447d9ea4b77c882f451cd0a9a47eb9f2a3ac0f' }), h("main", { key: '7a8c18dd583ea13a02d4e3800bf5d52aa92008cf', part: "main", class: "ir-page__container" }, h("header", { key: 'e9f0f1eba3a0e8d10b8e692ba9e6223f8c5bb659', part: "header", class: "tax-page__header" }, h("slot", { key: 'edcc3fc83e80342cd80d25802bf7cf5da909d5d7', name: "heading" }, h("div", { key: '52cf41d7502675b1be94063a722e4501bbc64399', class: "tax-page__heading" }, h("h3", { key: '861fb771e0cf600dd248ac1cef70598f442ad10e', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '506317a9b8053af8b346dbd51d5c3ce11808a2c0', part: "description", class: "page__description" }, this.description, h("slot", { key: '70569237cbedf844114ec22df220bc9f85a5959e', name: "page-description" }))))), h("slot", { key: '16c50a4fba18800990d48fd5f59ff76b28efac4a', name: "page-header" })), h("div", { key: '1e07a74636b669dcd60354d836b483850496513f', part: "body", class: 'page-body' }, h("slot", { key: '03bccd35b0610241dfdf7567404d193716f9a183' })))));
    }
    static get is() { return "ir-page"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-page.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-page.css"]
        };
    }
    static get properties() {
        return {
            "label": {
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
                "reflect": false,
                "attribute": "label"
            },
            "description": {
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
                "reflect": false,
                "attribute": "description"
            },
            "handledEndpoints": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Endpoints that show the embedded interceptor's full-page loader. Omit to keep the interceptor's default list."
                },
                "getter": false,
                "setter": false
            }
        };
    }
}

import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    /** Endpoints that show the embedded interceptor's full-page loader. Omit to keep the interceptor's default list. */
    handledEndpoints;
    render() {
        return (h(Host, { key: 'b9bd63ed6a9e01d019a6bf588260c0499664bec0' }, h("ir-interceptor", { key: 'fb3cab5844fd6735462eb137eedefaa06d42ca8a', ...(this.handledEndpoints ? { handledEndpoints: this.handledEndpoints } : {}) }), h("ir-toast", { key: '1c421b2c79492f94a9c7ee9c83a1c319ba27dd06' }), h("main", { key: 'fed93b2e403fcf33860711554889436cffc42407', part: "main", class: "ir-page__container" }, h("header", { key: '168c5b3e32f52874097ac731944f0b622f168493', part: "header", class: "tax-page__header" }, h("slot", { key: '4f7b7797bd4700427a92500561eea8f139b27374', name: "heading" }, h("div", { key: '57ed39dbe421461a851e27a30bb8a29e30a6fa36', class: "tax-page__heading" }, h("h3", { key: 'bb99897f1cf9fcb0ddec6058adee92731202442f', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '43628b5c77f1f48e740e7a4edd84c6d059b55e1f', part: "description", class: "page__description" }, this.description, h("slot", { key: 'f77c884e1bb1dd38af43864acf6c68e224f18231', name: "page-description" }))))), h("slot", { key: 'd289512f3253e5c9fe77eea02b1e0259b3be37e3', name: "page-header" })), h("div", { key: '49a55115e895b21dcf9cf2f9b0eb6b047e2792d9', part: "body", class: 'page-body' }, h("slot", { key: 'f5160a89d637a4f5bec7d2fc99ea879aefd25bb3' })))));
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

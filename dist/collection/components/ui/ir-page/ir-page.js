import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    /** Endpoints that show the embedded interceptor's full-page loader. Omit to keep the interceptor's default list. */
    handledEndpoints;
    render() {
        return (h(Host, { key: '8d7dd4a6b5eb9bb8b839f723fefb15790127cc65' }, h("ir-interceptor", { key: '123943f168145aab2df929c6e5ff0703a8303944', ...(this.handledEndpoints ? { handledEndpoints: this.handledEndpoints } : {}) }), h("ir-toast", { key: '583e95b3ecb23f3783d03b190d7ef87611a2f2f4' }), h("main", { key: '0e98e99664ffc9b181d84088278873e671c453fa', part: "main", class: "ir-page__container" }, h("header", { key: '6404adbeba31ee6086e566e7f08d588a0df05668', part: "header", class: "tax-page__header" }, h("slot", { key: 'b58e2a6b54443432d56f8647c67f24987986faea', name: "heading" }, h("div", { key: '03f8c4d0e7d83f9d8ab3c6febfcb59ee00bdef22', class: "tax-page__heading" }, h("h3", { key: 'bd10f34f851dc7dd53c917520461dc44ec98595f', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '03f5e32740aa0e03c83d1f48dbbd348d66a2ce0a', part: "description", class: "page__description" }, this.description, h("slot", { key: '91933d2fe8e9405979c5293e5631910ae868f049', name: "page-description" }))))), h("slot", { key: 'eb9138cf667fcc7712dfa8cd71db6fbb41349ffb', name: "page-header" })), h("div", { key: 'fcdffa3608eab5b85153a620cdac3f9c79c1c085', part: "body", class: 'page-body' }, h("slot", { key: '56050889ab3c4bef6a5c96bf2ad0c7db6aa38dfc' })))));
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

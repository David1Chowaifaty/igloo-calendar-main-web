import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    /** Endpoints that show the embedded interceptor's full-page loader. Omit to keep the interceptor's default list. */
    handledEndpoints;
    render() {
        return (h(Host, { key: 'dac18d8c8fcaf41d83798a1bb18435b631255e8b' }, h("ir-interceptor", { key: 'd715c661ced592c1cbe5c717c81ffd690746c5e0', ...(this.handledEndpoints ? { handledEndpoints: this.handledEndpoints } : {}) }), h("ir-toast", { key: '72c5e85ced42bba1a3f6a597e174b1dcd65d5e8d' }), h("main", { key: '1b06be3358082ae2f1ac2e9ecf687c577071c6f3', part: "main", class: "ir-page__container" }, h("header", { key: '5668741cf076a3ad0e55c5acca16590425ebea73', part: "header", class: "tax-page__header" }, h("slot", { key: 'c32bd9591d4c001a8401d616094d8d9334b403a5', name: "heading" }, h("div", { key: 'daef91d6393f8c0096c676904c890ebb981b9e69', class: "tax-page__heading" }, h("h3", { key: '40e384d55e5f1bb5acd779f93bc55e1585de2609', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '27c9a8dd5fb4f53b31e01e6fbe32c674e5f828e0', part: "description", class: "page__description" }, this.description, h("slot", { key: '36dbd7b2c90a177669195c2129bd2b598419bde9', name: "page-description" }))))), h("slot", { key: '90faaa7c0976b9554447d67dddd252cca640ca81', name: "page-header" })), h("div", { key: '80d05ab644f9464d140df06ef0cbb2f44bf4d237', part: "body", class: 'page-body' }, h("slot", { key: '71c03543ea1c4630f72fdbd8a1f046bd17c14bcd' })))));
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

import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    /** Endpoints that show the embedded interceptor's full-page loader. Omit to keep the interceptor's default list. */
    handledEndpoints;
    render() {
        return (h(Host, { key: '1b62940ce84523b7f304238b00aeb9b23b5ce7ae' }, h("ir-interceptor", { key: 'b593f36fa2e0e5efdc4145a0b4f73814ed412b02', ...(this.handledEndpoints ? { handledEndpoints: this.handledEndpoints } : {}) }), h("ir-toast", { key: '1054ef8228866af6e9f47567bc50fea22580ae50' }), h("main", { key: 'd2dcb65a7cbe75fdce37600bc7175e12c7c026e8', part: "main", class: "ir-page__container" }, h("header", { key: '37ed93b6afe4d638d6e465004acf8685c19104b2', part: "header", class: "tax-page__header" }, h("slot", { key: 'e7e60e290898ca35eda3fbf34d1730ee6f9686b5', name: "heading" }, h("div", { key: 'a6b7072c32bd8e4f91244e51ada447260d07178a', class: "tax-page__heading" }, h("h3", { key: 'f74842eefd017503dc13bf0fb0ba7f61ce29f78b', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '35b121cd3095bb7ba365fba1c3aa33f3d6f0641c', part: "description", class: "page__description" }, this.description, h("slot", { key: '52957d805215e0225288cd4e042fea89fe2c8b96', name: "page-description" }))))), h("slot", { key: 'b17930acd9fe4231119712e328f47f3e757e4bdc', name: "page-header" })), h("div", { key: '7600a794b03b68d6da9a65becbe77c522f423324', part: "body", class: 'page-body' }, h("slot", { key: 'b5d908dbe35b5147931dbd026b3c33c022a1866c' })))));
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

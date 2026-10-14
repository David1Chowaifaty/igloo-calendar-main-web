import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    /** Endpoints that show the embedded interceptor's full-page loader. Omit to keep the interceptor's default list. */
    handledEndpoints;
    render() {
        return (h(Host, { key: '54ae133f7dbe2909c3375a684ae5bfac62b3228c' }, h("ir-interceptor", { key: 'c8e0b88aa3d2a01c5b774501b50b8468b25e2cf6', ...(this.handledEndpoints ? { handledEndpoints: this.handledEndpoints } : {}) }), h("ir-toast", { key: '290c23eaec1d9557b9128874ef9004b85bc4dcef' }), h("main", { key: '8cc106a8b14855befd16a7e7a687153c898bca46', part: "main", class: "ir-page__container" }, h("header", { key: 'fd18df44bc979520527c9c6edc61e48c6777626e', part: "header", class: "tax-page__header" }, h("slot", { key: '459c6c23415a571825ade8bd2b1f56bec8a01782', name: "heading" }, h("div", { key: '537fcf748a91f056cece9e9a2767271fe9255095', class: "tax-page__heading" }, h("h3", { key: 'dbdf852bfb48f15029943771f4595256bc267e42', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '22feb41aa67a9e67e2b9be73e146786c82a03e8d', part: "description", class: "page__description" }, this.description, h("slot", { key: '7aa2076515f1cd48f5890de68b9fe4bf3f27d318', name: "page-description" }))))), h("slot", { key: '6f556781460fec505d2823f69be2fbe736f2aba9', name: "page-header" })), h("div", { key: '17828e8a20d79b1b95d7dcdeae489ccfc080b8ac', part: "body", class: 'page-body' }, h("slot", { key: '60741aa2cac8ce382e57e0138df9c3f5d5ed9c1c' })))));
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

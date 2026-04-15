import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'ba0945fdf03eadb2e6f84e9399f2c0708c62a3d2' }, h("ir-interceptor", { key: '18892e41437360535d7d9d6e1e5ee8d6f212cc8e' }), h("ir-toast", { key: '12590ea4907be56a43e02518259860ab1ed55660' }), h("main", { key: 'dd46b5cff5ca791350d0c291c1c44dd6228064f1', class: "ir-page__container" }, h("header", { key: '567a74318f7e4a1823ddec1d12f84f35e7d58eac', class: "tax-page__header" }, h("slot", { key: 'dadf4fbbc4b63560b5d37737b5f2cd50b7f90032', name: "heading" }, h("div", { key: 'a1225ffde8f453926a8a3a469f665687e70661f2', class: "tax-page__heading" }, h("h3", { key: '035ea172551a1366ec4c72e7d7d7f0869b2fba88', class: "page-title" }, this.label), this.description && h("p", { key: '56a11d093e6eab887941b25223303ef6b0849a51', class: "tax-page__subtitle" }, this.description))), h("slot", { key: '86605719086bfcfa2476a1305f4e3a6f0a4c8526', name: "page-header" })), h("slot", { key: '054e4e4bf87c5aa86a1a753756be18c0a846983d' }))));
    }
    static get is() { return "ir-page"; }
    static get encapsulation() { return "scoped"; }
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
                "attribute": "label",
                "reflect": false
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
                "attribute": "description",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-page.js.map

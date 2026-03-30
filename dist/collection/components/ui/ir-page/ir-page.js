import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'e9b2a5b511265d866b02b938e50bd66d59c00dca' }, h("ir-interceptor", { key: '21873629b743b15411c3d977f8c268e973038501' }), h("ir-toast", { key: 'c93108912cf1fecbd6b75aa08de07af49b726842' }), h("main", { key: '0b17f0793133301cd6c2bb4b80c13796f9c159b1', class: "ir-page__container" }, h("header", { key: '47ea1b62266582b1b143ab78d36e57439654a693', class: "tax-page__header" }, h("slot", { key: '09eb3d770e1c0cdc70d156a53c14210935fc1842', name: "heading" }, h("div", { key: '73478b575ac791c89d283d8afac2ca3f8ad5b33c', class: "tax-page__heading" }, h("h3", { key: '5eb0cbf484af74536af16f2d5c6833d5dad5d29a', class: "page-title" }, this.label), this.description && h("p", { key: '0d77bb9a5a7b719809b519a9c01831759386791e', class: "tax-page__subtitle" }, this.description))), h("slot", { key: '6670ed568b8b23ca2a6e8f0b90732dc865811da6', name: "page-header" })), h("slot", { key: 'a2dd68182bd7a60bdd12454464a472f4a3fc5119' }))));
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

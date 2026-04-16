import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '998c8b68b456c3b06fb957fe69c869e293d45346' }, h("ir-interceptor", { key: 'e02b3598af566e383a3efcb39e222efdfceefe96' }), h("ir-toast", { key: '810014aee806ac94096c54e14e8c0476b5f23fb4' }), h("main", { key: '77c11aee24754227a521593de3699e83ff880444', class: "ir-page__container" }, h("header", { key: 'd51605a9d32b0b890e8b0ed057f735389fa8db67', class: "tax-page__header" }, h("slot", { key: '6bd1036f7fda85351a3978a892cd2c868aeef230', name: "heading" }, h("div", { key: '5af03903d766bd3200c55b25861a026ba9c19907', class: "tax-page__heading" }, h("h3", { key: '11f46c609b637d45a1339252d8e572780f240cb0', class: "page-title" }, this.label), this.description && h("p", { key: 'dfced4abc0b6fecbf16f154d7716be6cd4e56dff', class: "tax-page__subtitle" }, this.description))), h("slot", { key: '650afe7f260a80a2f9089fa91f579cc0a6c136f9', name: "page-header" })), h("slot", { key: '897594c15717c5245ccc4bd21b7a3a6b996f3979' }))));
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

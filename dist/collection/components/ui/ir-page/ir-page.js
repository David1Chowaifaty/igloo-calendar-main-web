import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'a9429ee9af452afb875be6d2486d7843c9140f0e' }, h("ir-interceptor", { key: '409b5cc8b9634ba57e94f4dc62bcfcd3e298a489' }), h("ir-toast", { key: 'cb04518ef9d9373a3a7075a215d55c2396e00e7c' }), h("main", { key: '04a403f715e000b09d339c0ab8777d1b56a8438a', class: "ir-page__container" }, h("header", { key: '2fcc46ecf1d84db1f28d8972cb948a42bcf0194f', class: "tax-page__header" }, h("slot", { key: '9402a8dfb49129b1c37979be4803ede5e85d58d7', name: "heading" }, h("div", { key: 'f8cfb8c1576e96a1beb10e537395af772d40cf72', class: "tax-page__heading" }, h("h3", { key: '1e9fab7c6829b6e93ec8e19201b46edf46affd02', class: "page-title" }, this.label), this.description && h("p", { key: '844830211d47740a6a6b64acbabb54f9eda42851', class: "tax-page__subtitle" }, this.description))), h("slot", { key: '315fbbf8c8ad8b96afd8a105165c16e4f2602552', name: "page-header" })), h("slot", { key: '59b76c28af971d7756ef8113aab0c150a683f7ba' }))));
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

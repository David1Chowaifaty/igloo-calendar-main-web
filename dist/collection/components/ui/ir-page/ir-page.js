import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'e3d3e4843f1ffcf36caca24fbf8546386fe2beb5' }, h("ir-interceptor", { key: '5ff7ad3e14a0ccd28bce289661d8f884b71eabfa' }), h("ir-toast", { key: '8edca9faf84af5aba39a5f1e51237585a4fa2ff5' }), h("main", { key: 'fb8a99fc84405a1f80614c16ed3a3837159b9ee1', class: "ir-page__container" }, h("header", { key: 'baa9cb82729566c3c7053ba7ac2c667c797abfcb', class: "tax-page__header" }, h("slot", { key: '006959ba0e50bb6bd932f04bbbab6fa2446835f2', name: "heading" }, h("div", { key: '400f222cf9e3d2bbd39facf28143476275a2bd58', class: "tax-page__heading" }, h("h3", { key: 'fe55a8f18b1d2e2d98f3c5bdb0e8cc8473a9c4f9', class: "page-title" }, this.label), this.description && h("p", { key: 'e571d569aafb469db72d984789908f512feb2a99', class: "tax-page__subtitle" }, this.description))), h("slot", { key: '51a6c8d7aec97699064158da5d8e55f105788a7b', name: "page-header" })), h("slot", { key: 'cffcb18686c7f2e90da362c4aff8c53c53a8d00d' }))));
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

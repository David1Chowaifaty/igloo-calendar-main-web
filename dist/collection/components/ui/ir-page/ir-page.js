import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '6457ddc7ce35a47984b70a4d01b1705730801a48' }, h("ir-interceptor", { key: 'b9c90e0c43ed890724c89dcd3e59da610115e57d' }), h("ir-toast", { key: '3593bdc1717e5ec15172fffd59ba5d13d151873a' }), h("main", { key: '7e790a31918b70ffd03717c88a2b2e51440f6670', class: "ir-page__container" }, h("header", { key: 'c6cf265af4d335e2152adea8c4472e0b90f4bb9c', class: "tax-page__header" }, h("slot", { key: 'f9ec4d7bf8388976195ceb29e48566c7d826f0ec', name: "heading" }, h("div", { key: '7619b868fbef6048fdead1a74eac080927051818', class: "tax-page__heading" }, h("h3", { key: 'b2570e6b1de5467fe7018a919d14d01a1a88e926', class: "page-title" }, this.label), this.description && h("p", { key: 'c9ea0c618d3981e1f4ad8d17debe753f213d9d5d', class: "tax-page__subtitle" }, this.description))), h("slot", { key: '066a86ded0d7abb52868796c6097c7878cb13ca3', name: "page-header" })), h("slot", { key: '47ba436943071f13159a5129ded89431219e1a66' }))));
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

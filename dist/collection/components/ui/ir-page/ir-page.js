import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '5442de32c4538dd0f58145d898773099af3c6d6c' }, h("ir-interceptor", { key: '86ec7134e784c4aaed6ec192287fb654f32a63f5' }), h("ir-toast", { key: '5ecc5a2170678b06a77c7ceb2dd477fc3a39dc52' }), h("main", { key: '79ba6d48604a81ee3ca3fc07c5f3801081e2e63c', class: "ir-page__container" }, h("header", { key: '296d13b30e397281490e348fe4dfaa5ee67adfa2', class: "tax-page__header" }, h("slot", { key: 'c916a8a8ed0c08d1bef315196f5396f097de8dec', name: "heading" }, h("div", { key: 'bfe4a87b6b358f1348d9b271d10bfdee94f21281', class: "tax-page__heading" }, h("h3", { key: 'a7d890a0e52c6b6bb9d41dceefb16fc647162d26', class: "page-title" }, this.label), this.description && h("p", { key: 'd7d54c0bd1677a9d5467bcf24b909b262c7f6f74', class: "tax-page__subtitle" }, this.description))), h("slot", { key: 'f3059ed49886628a0c079e81fd9c9a2c3836f2b2', name: "page-header" })), h("slot", { key: 'af9852d8b062b2b535bd3798261d74851e62697f' }))));
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

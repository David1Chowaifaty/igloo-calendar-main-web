import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '8da053ca2d8a7751cea603e0adc9f990c8a22e66' }, h("ir-interceptor", { key: 'ff595c5a9a30088fd943c39c4a261ebef7b9a721' }), h("ir-toast", { key: '8b51d19af294f62b0971ebeef3e535c12da4927f' }), h("main", { key: 'ae67af83d0626f14aeff435aedf259b6dd87f6d1', class: "ir-page__container" }, h("header", { key: '25379a244da4226f2d3f7cff54ae3ba7d8b8d76d', class: "tax-page__header" }, h("slot", { key: 'f7fca4fcc26b39857b59abd462b4f76bf0c39eb7', name: "heading" }, h("div", { key: '9850f964d0210ee5983be86101d8cec277253c08', class: "tax-page__heading" }, h("h3", { key: '1c107baeaac11a4aa26937be30e5417480f7fdc2', class: "page-title" }, this.label), this.description && h("p", { key: 'd950d69a2552ed9e50401e09697dd042b1064152', class: "tax-page__subtitle" }, this.description))), h("slot", { key: 'e36f352bfa8ed7aae14ba14e8c2e769d794261bb', name: "page-header" })), h("slot", { key: '72a315a6cd9c7053338c6a6915b762d019370ca6' }))));
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

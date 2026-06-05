import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '325b430b340741e39e88c603d890e572551e4358' }, h("ir-interceptor", { key: '9ae35a910887f0483df7089887474b77dc5f17d9' }), h("ir-toast", { key: '9d90e86e1abf23f1f0e24cba5c1290c07f7cd90c' }), h("main", { key: '0f189486d538d39c9dca9773cb96341ee247c161', class: "ir-page__container" }, h("header", { key: '459684519afcd79f0d654154692bd47831b19d26', class: "tax-page__header" }, h("slot", { key: '5d6438fcc63ef95b5e692599dd39b6a5fc8afbd2', name: "heading" }, h("div", { key: '67d6102b672de1729104cafe813d4e3c1163fa01', class: "tax-page__heading" }, h("h3", { key: '0eb60c4248d3c63021ec2e2ecc0e7e59bf032f40', class: "page-title" }, this.label), this.description && (h("p", { key: '0740e943c232c1417f049606b476a88c21686c6c', class: "page__description" }, this.description, h("slot", { key: '4765a495f13171360d64ad84dba6656f0a6eb456', name: "page-description" }))))), h("slot", { key: 'abd7fe2952b66aa97ffc232e2fc2756394330077', name: "page-header" })), h("slot", { key: 'c25a06a624745bbed6d2cee6d79b8825f85c599a' }))));
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

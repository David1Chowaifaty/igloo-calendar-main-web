import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'f50eed7e70995882199baa84fad66252c1a8ee4a' }, h("ir-interceptor", { key: '511c63ec5eac23244fbd5cf893fca34181fc68e3' }), h("ir-toast", { key: 'f3737ab81b66e4f75356d6a4088c077af0fab241' }), h("main", { key: '3ed46dccd6f72d6bda3aa338e1601fa5db0cbad5', part: "main", class: "ir-page__container" }, h("header", { key: 'dd3af3a77bf4db5ad79b1904962e62852b83d0f5', part: "header", class: "tax-page__header" }, h("slot", { key: 'd82b97da5098370ff3a941baa75bd85c330ef624', name: "heading" }, h("div", { key: '9d6d5c43a4107fde98a4c16387fda40e379b9197', class: "tax-page__heading" }, h("h3", { key: 'eca32a2ef3f0f9f1c25a1b80bad3f7df476e4e75', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '5ffcda55e0599bd7e3efbda82a16b2d488fd05a4', part: "description", class: "page__description" }, this.description, h("slot", { key: '17d04b1984c6a0b8783496533f6bbc2d42ff942c', name: "page-description" }))))), h("slot", { key: '8e56f40e57d2162901d1e0cd5ae9ddd4dfcd0f1b', name: "page-header" })), h("div", { key: 'dceb4c9dd32b36704c005d14f35eaefda8360c36', part: "body", class: 'page-body' }, h("slot", { key: '24a85c3dbbbd903c8102c6367c6c54ba80b087c5' })))));
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
            }
        };
    }
}

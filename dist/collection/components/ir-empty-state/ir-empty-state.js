import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: '7779d183ee28825428afc250d69fe230cab65cd6' }, h("slot", { key: '0e0af03f17406a42e39bece870e48c39250d4d9e', name: "icon" }, h("wa-icon", { key: '7a69ac21238aa84430d13b49e601dd53bddd32a4', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: '6403da5910f8139d9f8081ef74b062e508526a08', part: "message", class: "message" }, "No records found"), h("slot", { key: '376dcaf5b3292e1b41e5c1c70829746194c2cdb6' })));
    }
    static get is() { return "ir-empty-state"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-empty-state.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-empty-state.css"]
        };
    }
    static get properties() {
        return {
            "message": {
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
                "attribute": "message",
                "reflect": false,
                "defaultValue": "'No records found'"
            }
        };
    }
}
//# sourceMappingURL=ir-empty-state.js.map

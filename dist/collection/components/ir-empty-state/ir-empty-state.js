import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: '08991885d5735949c57451379890074b99987e28' }, h("slot", { key: '6f147d8c258bfcd76317a8fa4c127332a8811fee', name: "icon" }, h("wa-icon", { key: '35588a7e17c7fc836a19c335df16b03c727a369c', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: '7b2d0868ad52df3569a3225e86f16f8c6ba2126a', part: "message", class: "message" }, "No records found"), h("slot", { key: '5b07dd2e2e9acdb99bd5a3ffbd06c55cf13b6fe6' })));
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

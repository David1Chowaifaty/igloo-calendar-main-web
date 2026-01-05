import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: '0b799e70f5bdd6afc97e34e5d34922838d3f8be6' }, h("slot", { key: '328223d6192c4d322138fcdafd7fbb79d04e27ef', name: "icon" }, h("wa-icon", { key: '4b9e1f523c353d0adc15950b6fc4198d54fa8ff1', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: 'e793cad17151fcc76321772ef4c05dfc2eceba79', part: "message", class: "message" }, this.message), h("slot", { key: 'fd9bb2f91bca9a72f98d76684fb85741593762e3' })));
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

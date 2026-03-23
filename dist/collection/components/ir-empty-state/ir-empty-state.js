import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: '47239cdc2f6cd04902e452f5113bf01103c504fb' }, h("slot", { key: '979d2a11e4d16b1d83438efe2b16c64b4695016a', name: "icon" }, h("wa-icon", { key: '633821e7561220d5d0a9d1ee339dad85ba6b4a1a', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: 'ab425d15c54462a7b56e753995cb9ceb301627f3', part: "message", class: "message" }, this.message), h("slot", { key: '7e1055c3bc01b598adc5982f357241e8106e48ad' })));
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

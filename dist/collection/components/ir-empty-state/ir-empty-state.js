import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: 'fd3d0737a8decb02f8f6f159258b6de1298263a2' }, h("slot", { key: '1601439685a6ec0b7262787326e7412e2cb40ba9', name: "icon" }, h("wa-icon", { key: '6bd1ce03c7b846e466cef4cd9008a4ea59b3f806', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: '5590e99544ef249dc145a5736eda6b6e96e01fdd', part: "message", class: "message" }, "No records found"), h("slot", { key: 'd0f174934ff8950fa66be92d80649591c99eb797' })));
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

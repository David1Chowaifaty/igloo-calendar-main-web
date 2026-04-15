import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: 'df9c8cc484b5632adc5450b2f7e2365143126c63' }, h("slot", { key: 'fcbe68aadeffc2ed0e105f0fdd0393365a8163d5', name: "icon" }, h("div", { key: '64c8641c9646986b900830ba026165e41e155434', class: 'icon_container' }, h("wa-icon", { key: '676ed28d472b715eeb57378d0938798815cf6fc3', name: "ban", style: { transform: 'rotate(90deg)' } }))), h("p", { key: '5701bb1a81ae5f38b9279ab9a646c5ff75cb03c3', part: "message", class: "message" }, this.message), h("slot", { key: 'ac392ae1e535ffc1d8a213394a461cba058c5dc9' })));
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

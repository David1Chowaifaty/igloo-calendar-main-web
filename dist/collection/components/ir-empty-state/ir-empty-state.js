import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: '592c946c4249b0889dc39e9ace28220363d00b19' }, h("slot", { key: '27075de9caa0d93f35c07fe50aed21a35447681f', name: "icon" }, h("div", { key: 'bd9cef93bf7895adcce6fb97b7fdf2433959120c', class: 'icon_container' }, h("wa-icon", { key: 'b4916bb1e52cc8fe44947256216e1bccc9d5fee5', name: "ban", style: { transform: 'rotate(90deg)' } }))), h("p", { key: '29025c370eba2c4540ea8a1e244d1685f242f032', part: "message", class: "message" }, this.message), h("slot", { key: '28452baba1834a678b949c4288a72fc84ab3dcaa' })));
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

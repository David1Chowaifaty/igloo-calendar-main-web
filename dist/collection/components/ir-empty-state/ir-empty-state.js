import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: 'a3a95ed740d9224d70a647a7838dd7b994a03566' }, h("slot", { key: '58633451dc1dcf3849ea2fa4a7a6f634603ff3f3', name: "icon" }, h("div", { key: 'aaeabca114c880f88bfe1734abfeaea2f5c3a797', class: 'icon_container' }, h("wa-icon", { key: 'd8635ea48d00c19d3d10850f115818f61057cb9b', name: "ban", style: { transform: 'rotate(90deg)' } }))), h("p", { key: '194570936b4c764697ba33766154b6304a21b73c', part: "message", class: "message" }, this.message), h("slot", { key: 'e0b3b9bcd141ac546d6f4c5848150b3e357e8b84' })));
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

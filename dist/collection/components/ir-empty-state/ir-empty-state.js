import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: 'aba4974f164116b2035be2b62a0c462711bcb87c' }, h("slot", { key: 'fd70e6be91934f0543fa98885ab88758d0bb7e42', name: "icon" }, h("div", { key: 'd55fdf2c178fb83a1ed8037641d4b6304f799ecb', class: 'icon_container' }, h("wa-icon", { key: 'cef7c9acb083d76760e0a613c268b30b08163705', name: "ban", style: { transform: 'rotate(90deg)' } }))), h("p", { key: 'b338df854bf06b9d3acf12da91b6b05186141e8d', part: "message", class: "message" }, this.message), h("slot", { key: '8c0ebc06f275af3896cf67050d76fee438cae9ef' })));
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

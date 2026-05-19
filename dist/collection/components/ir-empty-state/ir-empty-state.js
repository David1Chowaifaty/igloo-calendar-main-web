import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: '02da8f55b515a65fa4a6a89bd03f935b04c8c41d' }, h("slot", { key: '01a4ccd89c4966135e12c67530c7fb19a248d7ec', name: "icon" }, h("div", { key: 'ff5de863dfa97dab969f49c937504596046929af', class: 'icon_container' }, h("wa-icon", { key: '32b82250bd8386733df1e27696e116d30f468511', name: "ban", style: { transform: 'rotate(90deg)' } }))), h("p", { key: '2f32af1a97a52f3d6b9e603095a1345348b09d4b', part: "message", class: "message" }, this.message), h("slot", { key: '1ef341bac5362304e66e942f0911ff43661ce55d' })));
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

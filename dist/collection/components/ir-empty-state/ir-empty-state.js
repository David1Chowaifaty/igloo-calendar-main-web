import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: '6c773c84c7422b7e8f45c42621dca4cb96db809a' }, h("slot", { key: '2efbb6c9e1eec1e2a85f5b8d6b9cac8d515283b9', name: "icon" }, h("div", { key: 'ae076f937f44089513c4318e663a3733c02f5cea', class: 'icon_container' }, h("wa-icon", { key: 'fc3b72cbe9761daa0c7d1319aa903545df0d54ef', name: "ban", style: { transform: 'rotate(90deg)' } }))), h("p", { key: '0c1b8cd4ff9d354be18f6c091aa2409cee637568', part: "message", class: "message" }, this.message), h("slot", { key: '2e1ad91effd249a37d31ea99b5cfc33ef249e872' })));
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

import { h } from "@stencil/core";
export class IrTasksHeader {
    constructor() {
        this.isCleanedEnabled = false;
    }
    handleCleanedButtonAnimation(e) {
        console.log('here');
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.btnRef.bounce();
    }
    render() {
        return (h("div", { key: '2ea47cc6e9f77f77fb1654bd80d173176c7d4597', class: "d-flex align-items-center justify-content-between" }, h("h4", { key: 'f168f401957a6382fc46c02dcb8090dbb0795f22' }, "Housekeeping Tasks"), h("div", { key: 'f57216b570fec18f5c92ebb1ed1fdb4c27e47c64', class: "d-flex align-items-center", style: { gap: '1rem' } }, h("ir-button", { key: 'a9f96c39cb1cb8daa540075029494471b3702415', size: "sm", btn_color: "outline", text: "Export" }), h("ir-button", { key: 'd5562b5fae720a1d5136a835a65ec200ee14246d', size: "sm", btn_disabled: !this.isCleanedEnabled, text: "Cleaned", ref: el => (this.btnRef = el) }))));
    }
    static get is() { return "ir-tasks-header"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-tasks-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-tasks-header.css"]
        };
    }
    static get properties() {
        return {
            "isCleanedEnabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is-cleaned-enabled",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get listeners() {
        return [{
                "name": "animateCleanedButton",
                "method": "handleCleanedButtonAnimation",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-tasks-header.js.map

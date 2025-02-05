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
        return (h("div", { key: '669f31d694a11893484edc4ead47828809ac7893', class: "d-flex align-items-center justify-content-between" }, h("h4", { key: '3f8dfbb460ba7d59b0d4f8badec36465418e9d56' }, "Housekeeping Tasks"), h("div", { key: 'c12d4882bcc3e7ef44e19b717a157f293d3b50e4', class: "d-flex align-items-center", style: { gap: '1rem' } }, h("ir-button", { key: '47e9c4e91f5754346a901dfec8b5892ce3b1b81a', size: "sm", btn_color: "outline", text: "Export" }), h("ir-button", { key: '25c43df1b09b0d96b5fc3ccc5dab1e0b33ac8b39', size: "sm", btn_disabled: !this.isCleanedEnabled, text: "Cleaned", ref: el => (this.btnRef = el) }))));
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

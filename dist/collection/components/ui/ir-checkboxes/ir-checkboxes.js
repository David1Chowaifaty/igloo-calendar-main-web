import { h } from "@stencil/core";
export class IrCheckBoxes {
    constructor() {
        this.checkboxes = [];
        this.checkedCheckboxes = [];
    }
    handleCheckboxChange(event) {
        if (event.detail.checked) {
            this.checkedCheckboxes.push(this.checkboxes[parseInt(event.detail.name)]);
        }
        else {
            this.checkedCheckboxes.splice(this.checkedCheckboxes.indexOf(this.checkboxes[parseInt(event.detail.name)]), 1);
        }
        this.checkboxesChange.emit(this.checkedCheckboxes);
    }
    componentWillLoad() {
        this.checkedCheckboxes = this.checkboxes.filter(checkbox => checkbox.checked);
        if (this.checkedCheckboxes.length > 0) {
            this.checkboxesChange.emit(this.checkedCheckboxes);
        }
    }
    render() {
        return (h("div", { key: '33bf046179875a96dc188604c886d2045db5e91c' }, this.checkboxes.map((checkbox, index) => (h("ir-checkbox", { name: index.toString(), label: checkbox.text, checked: checkbox.checked || false })))));
    }
    static get is() { return "ir-checkboxes"; }
    static get properties() {
        return {
            "checkboxes": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "checkboxes[]",
                    "resolved": "checkboxes[]",
                    "references": {
                        "checkboxes": {
                            "location": "import",
                            "path": "@/common/models",
                            "id": "src/common/models.ts::checkboxes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get events() {
        return [{
                "method": "checkboxesChange",
                "name": "checkboxesChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "checkboxes[]",
                    "resolved": "checkboxes[]",
                    "references": {
                        "checkboxes": {
                            "location": "import",
                            "path": "@/common/models",
                            "id": "src/common/models.ts::checkboxes"
                        }
                    }
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "checkboxChange",
                "method": "handleCheckboxChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-checkboxes.js.map

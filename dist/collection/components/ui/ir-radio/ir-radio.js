import { h } from "@stencil/core";
import { v4 } from "uuid";
export class IrRadio {
    constructor() {
        /**
         * Whether the checkbox is checked.
         */
        this.checked = false;
        /**
         * The unique ID of the checkbox element.
         */
        this.radioBoxId = v4();
        /**
         * Internal state tracking whether the checkbox is currently checked.
         */
        this.currentChecked = false;
    }
    componentWillLoad() {
        this.currentChecked = this.checked;
    }
    componentDidLoad() {
        if (this.radioRef) {
            this.radioRef.setAttribute('aria-checked', JSON.stringify(this.checked));
        }
    }
    /**
     * Watcher for the `checked` property. Syncs internal state with external prop changes.
     */
    handleCheckedChange(newValue) {
        if (newValue === this.currentChecked) {
            return;
        }
        this.currentChecked = this.checked;
    }
    /**
     * Handles user interaction with the checkbox and updates its state.
     */
    handleCheckChange() {
        this.currentChecked = !this.currentChecked;
        if (this.radioRef) {
            this.radioRef.setAttribute('aria-checked', JSON.stringify(this.currentChecked));
        }
        this.checkChange.emit(this.currentChecked);
    }
    render() {
        return (h("div", { key: 'b72b3ecf1a41f8d8d94d3f4befbe9f588e308dc2', class: "input-group" }, h("label", { key: 'd930760c0ec72f128852506e5088bb1a0fbe3b6e', class: "check-container radio-container" }, h("span", { key: 'd36c5401ba42bfd41238deca0d42733fe3f87ed4' }, this.label), h("input", { key: '5ed1d60db10ecc48bf40e44c56cf61c0d346e45e', type: "radio", value: "000", title: "", onChange: () => {
                this.handleCheckChange();
            }, checked: this.currentChecked, ref: el => (this.radioRef = el) }), h("span", { key: '644168dd29f9db085d63ed5a24f052a66e31bda2', class: "checkmark" }))));
    }
    static get is() { return "ir-radio"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-radio.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-radio.css"]
        };
    }
    static get properties() {
        return {
            "checked": {
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
                    "text": "Whether the checkbox is checked."
                },
                "getter": false,
                "setter": false,
                "attribute": "checked",
                "reflect": false,
                "defaultValue": "false"
            },
            "label": {
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
                    "text": "The label text associated with the checkbox."
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false
            },
            "radioBoxId": {
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
                    "text": "The unique ID of the checkbox element."
                },
                "getter": false,
                "setter": false,
                "attribute": "radio-box-id",
                "reflect": false,
                "defaultValue": "v4()"
            },
            "name": {
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
                    "text": "The name attribute of the checkbox, used for form submission."
                },
                "getter": false,
                "setter": false,
                "attribute": "name",
                "reflect": false
            },
            "indeterminate": {
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
                    "text": "Whether the checkbox is in an indeterminate state."
                },
                "getter": false,
                "setter": false,
                "attribute": "indeterminate",
                "reflect": false
            },
            "disabled": {
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
                    "text": "Disables the checkbox when true."
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false
            },
            "labelClass": {
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
                    "text": "CSS class applied to the label element."
                },
                "getter": false,
                "setter": false,
                "attribute": "label-class",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "currentChecked": {}
        };
    }
    static get events() {
        return [{
                "method": "checkChange",
                "name": "checkChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the checkbox's checked state changes."
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "checked",
                "methodName": "handleCheckedChange"
            }];
    }
}
//# sourceMappingURL=ir-radio.js.map

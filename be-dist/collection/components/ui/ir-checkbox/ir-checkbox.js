import { Host, h } from "@stencil/core";
import { v4 } from "uuid";
export class IrCheckbox {
    constructor() {
        this.checked = false;
        this.label = undefined;
        this.checkboxId = v4();
        this.name = undefined;
        this.disabled = undefined;
        this.currentChecked = false;
    }
    handleCheckedChange(newValue) {
        if (newValue === this.currentChecked) {
            return;
        }
        this.currentChecked = this.checked;
    }
    componentWillLoad() {
        this.currentChecked = this.checked;
    }
    componentDidLoad() {
        if (this.checkboxRef) {
            this.checkboxRef.setAttribute('aria-checked', JSON.stringify(this.checked));
        }
    }
    handleCheckChange() {
        this.currentChecked = !this.currentChecked;
        if (this.checkboxRef) {
            this.checkboxRef.setAttribute('aria-checked', JSON.stringify(this.currentChecked));
        }
        this.checkChange.emit(this.currentChecked);
    }
    render() {
        return (h(Host, { key: 'd77dc983128ab0bd6fc836692aeb948d0f311be9' }, h("button", { key: '2fa8611f2a181075f52a03cdb79b49a8b5c68c35', disabled: this.disabled, name: this.name, onClick: this.handleCheckChange.bind(this), id: this.checkboxId, "data-state": this.currentChecked ? 'checked' : 'unchecked', value: 'on', ref: ref => (this.checkboxRef = ref), type: "button", role: "checkbox", class: "CheckboxRoot" }, this.currentChecked && (h("svg", { key: '31ea093727a012d6e3514a66d9be5ef978da8496', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: 'c88c9149c090bcbb0d2a1669b5e9a04e7fbb8a01', fill: "currentColor", d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" })))), h("input", { key: '879da205525bca47a79bb81a3d960b905387a651', type: "checkbox", "aria-hidden": "true", tabindex: "-1", value: "on", checked: this.currentChecked, class: "checkbox" }), this.label && (h("label", { key: 'c462747fb565e1bbe87f2791edd45d9b11bcf03f', htmlFor: this.checkboxId, class: "checkbox-label" }, this.label))));
    }
    static get is() { return "ir-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-checkbox.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-checkbox.css"]
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
                    "text": ""
                },
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
                    "text": ""
                },
                "attribute": "label",
                "reflect": false
            },
            "checkboxId": {
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
                "attribute": "checkbox-id",
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
                    "text": ""
                },
                "attribute": "name",
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
                    "text": ""
                },
                "attribute": "disabled",
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
                    "text": ""
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
//# sourceMappingURL=ir-checkbox.js.map

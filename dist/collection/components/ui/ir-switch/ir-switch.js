import { Host, h } from "@stencil/core";
export class IrSwitch {
    constructor() {
        this.checked = false;
        this.disabled = false;
        this._id = '';
    }
    componentWillLoad() {
        this._id = this.generateRandomId(10);
    }
    componentDidLoad() {
        if (!this.switchRoot) {
            return;
        }
        this.switchRoot.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    }
    generateRandomId(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    handleCheckChange() {
        this.checked = !this.checked;
        this.switchRoot.setAttribute('aria-checked', this.checked ? 'true' : 'false');
        this.checkChange.emit(this.checked);
    }
    render() {
        return (h(Host, { key: '609836ffaaf8892a62adcd5a1c6863aa58ecd499' }, h("button", { key: '691dcf962d4cd8ce72adf37b5cae6b5f7cab4f3d', disabled: this.disabled, ref: el => (this.switchRoot = el), type: "button", id: this.switchId || this._id, onClick: this.handleCheckChange.bind(this), role: "switch", "data-state": this.checked ? 'checked' : 'unchecked', value: 'on', class: "SwitchRoot" }, h("span", { key: '5eb27fb1a518148e3e78e632d19989733d766dd2', class: "SwitchThumb", "data-state": this.checked ? 'checked' : 'unchecked' })), h("input", { key: 'fe94d7001853bf4b6508288c43ad2e16da0a473d', type: "checkbox", checked: this.checked, "aria-hidden": "true", tabIndex: -1, value: 'on', class: "hidden-input" })));
    }
    static get is() { return "ir-switch"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-switch.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-switch.css"]
        };
    }
    static get properties() {
        return {
            "checked": {
                "type": "boolean",
                "mutable": true,
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
                "getter": false,
                "setter": false,
                "attribute": "checked",
                "reflect": false,
                "defaultValue": "false"
            },
            "switchId": {
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
                "attribute": "switch-id",
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
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            }
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
}
//# sourceMappingURL=ir-switch.js.map

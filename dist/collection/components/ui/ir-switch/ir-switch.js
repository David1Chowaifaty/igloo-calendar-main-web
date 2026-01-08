import { Host, h } from "@stencil/core";
export class IrSwitch {
    /**
     * Whether the switch is currently checked (on).
     * This is mutable and can be toggled internally.
     */
    checked = false;
    /**
     * Optional ID for the switch.
     * If not provided, a random ID will be generated.
     */
    switchId;
    /**
     * Disables the switch if true.
     */
    disabled = false;
    /**
     * Emitted when the checked state changes.
     * Emits `true` when turned on, `false` when turned off.
     *
     * Example:
     * ```tsx
     * <ir-switch onCheckChange={(e) => console.log(e.detail)} />
     * ```
     */
    checkChange;
    switchRoot;
    _id = '';
    componentWillLoad() {
        this._id = this.generateRandomId(10);
    }
    componentDidLoad() {
        if (!this.switchRoot) {
            return;
        }
        this.switchRoot.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    }
    /**
     * Generates a random alphanumeric ID of specified length.
     *
     * @param length Number of characters in the ID.
     * @returns A string with the generated ID.
     */
    generateRandomId(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    /**
     * Toggles the `checked` state of the switch and updates accessibility attributes.
     * Also emits the `checkChange` event with the new state.
     *
     * Example:
     * ```ts
     * const el = document.querySelector('ir-switch');
     * el.handleCheckChange(); // toggles on/off
     * ```
     */
    handleCheckChange() {
        this.checked = !this.checked;
        this.switchRoot.setAttribute('aria-checked', this.checked ? 'true' : 'false');
        this.checkChange.emit(this.checked);
    }
    render() {
        return (h(Host, { key: 'e02f821edb2e4484257f6227c4b701906f38af2e' }, h("button", { key: 'f5a117e9ca5a2159a9264edbd0515f23371ad10a', disabled: this.disabled, ref: el => (this.switchRoot = el), type: "button", id: this.switchId || this._id, onClick: this.handleCheckChange.bind(this), role: "switch", "data-state": this.checked ? 'checked' : 'unchecked', value: 'on', class: "SwitchRoot" }, h("span", { key: '542757165dd46d7d4809c61fb603f6c1d79fc187', class: "SwitchThumb", "data-state": this.checked ? 'checked' : 'unchecked' })), h("input", { key: 'ee59b1deae0fee706487852b108199db75e97bb5', type: "checkbox", checked: this.checked, "aria-hidden": "true", tabIndex: -1, value: 'on', class: "hidden-input" })));
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
                    "text": "Whether the switch is currently checked (on).\nThis is mutable and can be toggled internally."
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
                    "text": "Optional ID for the switch.\nIf not provided, a random ID will be generated."
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
                    "text": "Disables the switch if true."
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
                    "text": "Emitted when the checked state changes.\nEmits `true` when turned on, `false` when turned off.\n\nExample:\n```tsx\n<ir-switch onCheckChange={(e) => console.log(e.detail)} />\n```"
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

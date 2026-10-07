import { Host, h } from "@stencil/core";
export class IrPickerItem {
    value;
    label;
    disabled = false;
    active = false;
    selected = false;
    render() {
        return (h(Host, { key: '50f194fe67a7c0604ba15233df2ce8349ea70530', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, h("button", { key: 'efb26691c7f438a95a85529d7f15b574816bcdf3', class: `picker-item__container`, type: "button", tabindex: "-1", disabled: this.disabled, part: "base" }, h("wa-icon", { key: '21d7f3b79a3411236e8db48f2c9088200d15dec1', class: "picker-item__check", name: "check" }), h("div", { key: '34a8291634cd2bf93f21ce6b2e058b666ace7b9c', class: "picker-item__content", part: "content" }, h("slot", { key: 'a24f96ab01e764d0d49e0fa388a6d27cb7493b55' })))));
    }
    static get is() { return "ir-picker-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-picker-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-picker-item.css"]
        };
    }
    static get properties() {
        return {
            "value": {
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
                "reflect": true,
                "attribute": "value"
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "label"
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
                "reflect": true,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "active": {
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
                "reflect": true,
                "attribute": "active",
                "defaultValue": "false"
            },
            "selected": {
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
                "reflect": true,
                "attribute": "selected",
                "defaultValue": "false"
            }
        };
    }
}

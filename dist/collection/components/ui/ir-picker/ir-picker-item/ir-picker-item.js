import { Host, h } from "@stencil/core";
export class IrPickerItem {
    value;
    label;
    disabled = false;
    active = false;
    selected = false;
    render() {
        return (h(Host, { key: '54e0dd711aee3ac78e7bd640a530b052074b1d89', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, h("button", { key: 'fa3c2bcff37f21f5dd66171c044f57972732b96c', class: `picker-item__container`, type: "button", tabindex: "-1", disabled: this.disabled, part: "base" }, h("wa-icon", { key: '4ed6450cb8b93ad250a2021aa399dbb9cf3d92f1', class: "picker-item__check", name: "check" }), h("div", { key: 'c54031ecbcd811500a91ab915162f8b1d12f17fb', class: "picker-item__content", part: "content" }, h("slot", { key: '96f6ee268382133dfda9192b7054e05f0c7cb6ef' })))));
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
                "attribute": "value",
                "reflect": true
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
                "attribute": "label",
                "reflect": true
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
                "reflect": true,
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
                "attribute": "active",
                "reflect": true,
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
                "attribute": "selected",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=ir-picker-item.js.map

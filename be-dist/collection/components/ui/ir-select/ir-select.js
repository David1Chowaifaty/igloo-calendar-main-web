import { cn } from "../../../utils/utils";
import { h } from "@stencil/core";
import { v4 } from "uuid";
export class IrSelect {
    constructor() {
        this.label = undefined;
        this.icon = undefined;
        this.addDummyOption = false;
        this.value = undefined;
        this.data = undefined;
        this.select_id = v4();
        this.variant = 'default';
        this.customStyles = '';
        this.containerStyle = '';
    }
    render() {
        var _a;
        return (h("div", { key: '9e346bb365bad89819da3faa0bcabb3ebb327117', class: `selected-trigger ${this.containerStyle}` }, this.variant === 'double-line' && (h("label", { key: 'aa870a0a9203d83c6a68b6a2d41af049d91ef926', htmlFor: this.select_id, class: cn('select-label pointer-events-none absolute  px-[0.3rem] pt-1 text-xs text-[#667085]', {
                'ps-9': this.icon,
            }) }, this.label)), this.icon && (h("div", { key: '3732ba255697fce28dad10c62da273969b7424fc', class: "pointer-events-none absolute inset-y-0 start-2 flex  items-center" }, h("slot", { key: 'da9bdbd2110b794509b977925b2bbda99dd8467a', name: "icon" }))), h("select", { key: 'bf586795a3a1ca26f23951c041c14efb1670a060', onInput: e => this.valueChange.emit(e.target.value), id: this.select_id, "data-stid": this.select_id, class: `select-el ${this.variant} ${this.customStyles} ${this.icon ? 'icon' : ''}` }, this.addDummyOption && h("option", { key: '2f6a6bf628f57afc090e7a4f3cb11a9f6ebeb8e6', value: "", class: 'hidden', "aria-selected": "false" }), (_a = this.data) === null || _a === void 0 ? void 0 :
            _a.map(d => {
                if (d.html) {
                    return h("option", { innerHTML: d.value, value: d.id, disabled: d.disabled, selected: d.id === this.value });
                }
                return (h("option", { value: d.id, disabled: d.disabled, selected: d.id === this.value }, d.value));
            })), h("span", { key: '5b79ba74b757ef4dda794f963c94804030dae661', "data-variant": this.variant, class: "pointer-events-none absolute inset-y-0 end-1 flex  items-center" }, h("svg", { key: '10c6f146e908ca855b49d8609f277fa2c6922ca1', width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: '11930cf4e3acd7f4fc38e3fa94b1fc6bd8b0278a', d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))), h("div", { key: 'c40d460a042dcbaa629377a94c521be12abcff7b', class: "sr-only", "aria-hidden": "true" }, this.label)));
    }
    static get is() { return "ir-select"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-select.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-select.css"]
        };
    }
    static get properties() {
        return {
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
            "icon": {
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
                "attribute": "icon",
                "reflect": false
            },
            "addDummyOption": {
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
                "attribute": "add-dummy-option",
                "reflect": false,
                "defaultValue": "false"
            },
            "value": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "value",
                "reflect": false
            },
            "data": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ id: string | number; value: string; disabled?: boolean; html?: boolean }[]",
                    "resolved": "{ id: string | number; value: string; disabled?: boolean; html?: boolean; }[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "select_id": {
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
                "attribute": "select_id",
                "reflect": false,
                "defaultValue": "v4()"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'double-line' | 'default'",
                    "resolved": "\"default\" | \"double-line\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'default'"
            },
            "customStyles": {
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
                "attribute": "custom-styles",
                "reflect": false,
                "defaultValue": "''"
            },
            "containerStyle": {
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
                "attribute": "container-style",
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
    static get events() {
        return [{
                "method": "valueChange",
                "name": "valueChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-select.js.map

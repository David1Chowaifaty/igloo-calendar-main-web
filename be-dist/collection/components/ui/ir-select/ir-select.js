import { cn } from "../../../utils/utils";
import { h } from "@stencil/core";
import { v4 } from "uuid";
export class IrSelect {
    constructor() {
        this.label = undefined;
        this.value = undefined;
        this.data = undefined;
        this.select_id = v4();
        this.variant = 'default';
        this.icon = undefined;
    }
    render() {
        var _a;
        return (h("div", { key: '4e719ab8e3544669dcd1e106104d583a96805583', class: 'selected-trigger' }, this.variant === 'double-line' && (h("label", { key: 'd71da58d56b058fda25d56b5e80349129502aef7', htmlFor: this.select_id, class: cn('select-label pointer-events-none absolute  px-[0.3rem] pt-1 text-xs text-[#667085]', {
                'ps-9': this.icon,
            }) }, this.label)), this.icon && (h("div", { key: '875a40102cffb4671d25b72cad56c574f3cb3a02', class: "pointer-events-none absolute inset-y-0 start-2 flex  items-center" }, h("slot", { key: '9e0a48d6f3e5bb7826bf432abe33a61d021cb443', name: "icon" }))), h("select", { key: '84fd2a0801da791b1402c62b76f7ffc3815d74bc', innerHTML: "<span>u</span>", onInput: e => this.valueChange.emit(e.target.value), id: this.select_id, "data-stid": this.select_id, class: cn(`h-full w-full rounded-md bg-white pe-7  text-gray-900`, this.variant, {
                'ps-9': this.icon,
                'px-[0.875rem] py-1 text-sm': this.variant === 'default',
                'px-[0.875rem] py-[0.625rem] text-[1rem]': this.variant === 'double-line',
            }) }, (_a = this.data) === null || _a === void 0 ? void 0 : _a.map(d => {
            if (d.html) {
                return h("option", { innerHTML: d.value, value: d.id, disabled: d.disabled, selected: d.id === this.value });
            }
            return (h("option", { value: d.id, disabled: d.disabled, selected: d.id === this.value }, h("span", null, d.value)));
        })), h("span", { key: '1acc6d3b21cc5c3a78ab5c05bd9da36f0683b3a4', "data-variant": this.variant, class: "pointer-events-none absolute inset-y-0 end-1 flex  items-center" }, h("svg", { key: '37411aefcdb93424c4e778807d513be99d935634', width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: '26506093d393c1132afaee1a78280ac3c86c3a91', d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))), h("div", { key: '179ee211ce5a444e12ecb80817578acffa5e124c', class: "sr-only", "aria-hidden": "true" }, this.label)));
    }
    static get is() { return "ir-select"; }
    static get encapsulation() { return "shadow"; }
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

import { Host, h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrEmptyState {
    message;
    showIcon = true;
    render() {
        return (h(Host, { key: '6bfc75c065f2bb99f779d7ef7d112a695f128693' }, h("slot", { key: '3a1376f74b40daa8704ba0d329779821e3aa164a', name: "icon" }, this.showIcon && (h("div", { key: '6a39cf1af023b137afc6db2dcd462621ec9af38a', class: 'icon_container' }, h("wa-icon", { key: 'ed58d21dfc5d4e33219c0f22c14ce9118117eba6', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '5455dad6b4b6470f1e83efb6d77cb5de984198bf', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message || t('Lcz_NoRecordsFound', { fallback: 'No records found' })), h("slot", { key: 'bda1fa13b2d1881257b5693959970474c7871da1' })));
    }
    static get is() { return "ir-empty-state"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-empty-state.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-empty-state.css"]
        };
    }
    static get properties() {
        return {
            "message": {
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
                "reflect": false,
                "attribute": "message"
            },
            "showIcon": {
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
                "reflect": false,
                "attribute": "show-icon",
                "defaultValue": "true"
            }
        };
    }
}

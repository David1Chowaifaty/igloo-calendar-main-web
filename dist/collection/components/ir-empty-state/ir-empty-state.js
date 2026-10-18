import { Host, h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrEmptyState {
    message;
    showIcon = true;
    render() {
        return (h(Host, { key: '90e77ff4c4edf6fbeb418732896c1459e6958f46' }, h("slot", { key: '613f5107eb75a6b645160e937dc8d1c84b47af22', name: "icon" }, this.showIcon && (h("div", { key: 'a0721b96c2672e8e435653cee23c9ad1e452b734', class: 'icon_container' }, h("wa-icon", { key: '19577b864d334f4ee0d4dcd63c9afc1ec876a1b8', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '82b174effaa0f13c3b8b55f575469dd4e98ad6f0', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message || t('Lcz_NoRecordsFound', { fallback: 'No records found' })), h("slot", { key: '5f9d50439a0bd539b27a60803a427b87e2b7d402' })));
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

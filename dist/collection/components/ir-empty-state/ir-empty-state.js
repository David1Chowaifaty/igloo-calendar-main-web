import { Host, h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrEmptyState {
    message;
    showIcon = true;
    render() {
        return (h(Host, { key: 'a4be0096468acfde8817310011ec5f55a4dd4e2b' }, h("slot", { key: 'd1fd011c3fd09c0bf48da7fe6db4cde3361c8a22', name: "icon" }, this.showIcon && (h("div", { key: '9ae2c1eab718dd3a7aea44fe37ecb0d4d5c2e795', class: 'icon_container' }, h("wa-icon", { key: '8aa01b009d433ed6ff8a29f6dd66d38dcd1917d8', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '88f18294ed3d0973152eb5bfcb95e71d4868996c', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message || t('Lcz_NoRecordsFound', { fallback: 'No records found' })), h("slot", { key: '622bff18729fe78ff1a5addf2c8b8f26af781afc' })));
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

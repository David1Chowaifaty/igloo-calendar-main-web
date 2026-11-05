import { Host, h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrEmptyState {
    message;
    showIcon = true;
    render() {
        return (h(Host, { key: 'c4461a16a90b1b30bf5134fb6f506c860b7ef4df' }, h("slot", { key: 'f5ce6559149031218a5569d69b280597a60ed378', name: "icon" }, this.showIcon && (h("div", { key: '335ae192fb8f5f2ed5bb56c24875936a30721e65', class: 'icon_container' }, h("wa-icon", { key: '0e3d58599021e4cc9a56cd498dd89bbd6151bf79', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '1e9bcf2ebae1d162745fe1bc8536b26c9181ff09', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message || t('Lcz_NoRecordsFound', { fallback: 'No records found' })), h("slot", { key: 'c43be25952c1e3b22bde29765495ab8fc4c5e4d9' })));
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

import { Host, h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrEmptyState {
    message;
    showIcon = true;
    render() {
        return (h(Host, { key: 'eebac1aeb7ae1960e8db1ec1fc30a829d62a644d' }, h("slot", { key: 'd2066de0da278e896d59f83319d987dc28ecf9c6', name: "icon" }, this.showIcon && (h("div", { key: '43e104bec98a6c1ba07224ab528313f2bff26b93', class: 'icon_container' }, h("wa-icon", { key: 'f23cb48b1e93b3149105c830ed22ecf551d66669', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '4520099c66a1db8a31ba810375d49736ff8099ab', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message || t('Lcz_NoRecordsFound', { fallback: 'No records found' })), h("slot", { key: 'e5eb614d7c188c9c9eae425250ee82d43abb0aba' })));
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

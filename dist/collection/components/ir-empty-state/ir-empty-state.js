import { Host, h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrEmptyState {
    message;
    showIcon = true;
    render() {
        return (h(Host, { key: '09a66053bafce392d2414b1f090547a9c788537c' }, h("slot", { key: 'c4de0f4cbc2c70dd6197abf9fc106a618f9462af', name: "icon" }, this.showIcon && (h("div", { key: '1c79a01378d1989de21f032835d74c82c0439cb3', class: 'icon_container' }, h("wa-icon", { key: 'e3b7e1b334a39cb31d2dfafdd06ee6df8ebf84be', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '538c9a39e0e77b776396a385ab6fed7d3487b6b0', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message || t('Lcz_NoRecordsFound', { fallback: 'No records found' })), h("slot", { key: '2d3258025f395ec07ec51a38fe2e1a4aba7a5f22' })));
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

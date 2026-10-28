import { Host, h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrEmptyState {
    message;
    showIcon = true;
    render() {
        return (h(Host, { key: 'd2552df2220d421b0c116ff831eda4b8bb267175' }, h("slot", { key: 'd2dea489844d5c8b8215152a694a5b718ddd5122', name: "icon" }, this.showIcon && (h("div", { key: '5362abedb22da296120de13949f62d1a1853725f', class: 'icon_container' }, h("wa-icon", { key: '8cd39443f337ac115f8809dde249c2955d7e6682', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '4b79a3cb09782c23aa7b31e332752486d37d3fbf', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message || t('Lcz_NoRecordsFound', { fallback: 'No records found' })), h("slot", { key: 'e196f67376169c4a5e12497b1df5536a1a40a4ef' })));
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

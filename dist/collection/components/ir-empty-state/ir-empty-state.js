import { Host, h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrEmptyState {
    message;
    showIcon = true;
    render() {
        return (h(Host, { key: '2f08116f15b9f659c8cc4c1b11e22a66204da939' }, h("slot", { key: 'dc80de77b5c2f5aaaffc0b7df6ce962c0c2ab2b8', name: "icon" }, this.showIcon && (h("div", { key: 'a2d605c3ab87038b2de43b2c301490d0f29f07ef', class: 'icon_container' }, h("wa-icon", { key: 'd794b0af8029a1c8f5ad2cd01102b4579b0f5088', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '6e16cb2ba8766a703dda9fc02777bbaad07a4974', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message || t('Lcz_NoRecordsFound', { fallback: 'No records found' })), h("slot", { key: '993e961edb461308538bb94db6db42af3d582ed0' })));
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

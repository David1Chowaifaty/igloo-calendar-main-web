import { Host, h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrEmptyState {
    message;
    showIcon = true;
    render() {
        return (h(Host, { key: '4c39c375a2cd015ec708824393ae501864ec42e6' }, h("slot", { key: '99aa8d5fd1eca3be9d774a61d29e0baa0ef6f5bd', name: "icon" }, this.showIcon && (h("div", { key: '55a6c6ebfde197db007bba640090315c3a8dc76c', class: 'icon_container' }, h("wa-icon", { key: '1c34fa9fdaed218aff7ebcfd65c0072fe7f4efdd', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: 'b6c23ee3e482da36f15097deef4912b8705d9f38', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message || t('Lcz_NoRecordsFound', { fallback: 'No records found' })), h("slot", { key: '051e5ae775d783a39cb61c5f61e9e9f865c10944' })));
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

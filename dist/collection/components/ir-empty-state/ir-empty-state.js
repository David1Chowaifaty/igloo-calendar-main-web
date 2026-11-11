import { Host, h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrEmptyState {
    message;
    showIcon = true;
    render() {
        return (h(Host, { key: '9cd5cb4550c70e2d6e6daff75b56f42f5cbbd2a8' }, h("slot", { key: 'a684707f34bd735ded9b276b1bf7716749d1b63c', name: "icon" }, this.showIcon && (h("div", { key: '51aa05619546eb04b5bc67e8e6ad4d79af7cab23', class: 'icon_container' }, h("wa-icon", { key: '151f9b4717cbba043dc8d0ef9dfb24446787fadb', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '88dfdf17209cafe044b3217d88b3a83974dfa3eb', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message || t('Lcz_NoRecordsFound', { fallback: 'No records found' })), h("slot", { key: '0a25e20a92f20ff850da19337664b874a959beb6' })));
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

import { Host, h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrEmptyState {
    message;
    showIcon = true;
    render() {
        return (h(Host, { key: 'ec030a55e33076e437efff9d1b4208cff94049d6' }, h("slot", { key: '089540e4a0c6d948e1b0caa6d130efd448b3b9d8', name: "icon" }, this.showIcon && (h("div", { key: '03a615b13b068dbd9b9552514796d46eb79bc286', class: 'icon_container' }, h("wa-icon", { key: 'eea2d517f1992553da6d439c90a03c356dd3b2d5', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: 'a001974ab86beb6a784a4c4ac4cdf182f06cce78', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message || t('Lcz_NoRecordsFound', { fallback: 'No records found' })), h("slot", { key: '8941dd12a26edc8cd5e4f5c51395641748853daa' })));
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

import { Host, h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrEmptyState {
    message;
    showIcon = true;
    render() {
        return (h(Host, { key: 'cc6299fa981085cb24adbadad931d5ebe767e803' }, h("slot", { key: '4cd4d569744b13aede6f42000f840ac6d0c6ffc0', name: "icon" }, this.showIcon && (h("div", { key: '02dfffacfdb91f3ce81377895a9a1272f5ef82e2', class: 'icon_container' }, h("wa-icon", { key: 'd4fb0163b97f0cdb48c9756acdf6274e2fada6d5', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: 'c6a9ce2abdbb4c34551f751c06cc27fa0449b0ed', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message || t('Lcz_NoRecordsFound', { fallback: 'No records found' })), h("slot", { key: '72cdd44f89116b6dd420d2ecffdc80c6c7309999' })));
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

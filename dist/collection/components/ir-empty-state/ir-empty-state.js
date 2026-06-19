import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: '97882c2eef4ad530435f86aecb5a11adfde5d43b' }, h("slot", { key: '7b9cb327db882231a99db89ca94cdff130f6d5f7', name: "icon" }, this.showIcon && (h("div", { key: 'a41adef97f3ac225a62a8e2eaa9eb3b6dadff2b9', class: 'icon_container' }, h("wa-icon", { key: '1f22ad96495998aab89ce15b1938fd3c9a00e1de', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '113879bd3220a447fb4e3b450121ebeea6ba4c55', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '48fb0bc9010857474861079d7d7f5ac79cf46df2' })));
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
                "attribute": "message",
                "defaultValue": "'No records found'"
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

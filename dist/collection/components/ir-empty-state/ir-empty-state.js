import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: 'd7496cf026160bbc0289e38c7d550f9d693f2fb6' }, h("slot", { key: '9fc124ae00146f997a297c579983d9f4f074e7ec', name: "icon" }, this.showIcon && (h("div", { key: 'e1127e9eca2e162d33389558733ebaec67dcb619', class: 'icon_container' }, h("wa-icon", { key: '49fe44f221f5281f176cf5c4e6f63e4fe1c5da34', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '83a06e103752872990f958c61542424e4d68945e', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: 'ea9afcb9b88a1c1f19a8b7462980189b7e39645b' })));
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

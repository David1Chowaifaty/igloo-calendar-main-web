import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: '28a2a0ecd7afcfa6ba5da37d61aa023b22749dbe' }, h("slot", { key: '65f4f8ab92a345b816317aa9bdccee6634e2a5b9', name: "icon" }, this.showIcon && (h("div", { key: 'fbcbad4f46ff1495cab8c30fc16d6ea365a9c16d', class: 'icon_container' }, h("wa-icon", { key: 'acf93d1055765127c1b17116e7fcd411b349208a', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: 'f8cafb103b65d7bc18f1a81760f3694f3bef4ba9', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: 'cbe30c76424621952c9da1708da6ecc816643b44' })));
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

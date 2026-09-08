import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: '2d23c43724be07e2d451ebe1fb8d5fc3f8654716' }, h("slot", { key: '4b8366d3db168983feac114d34e21087365ad663', name: "icon" }, this.showIcon && (h("div", { key: '748cdc57cd25368dd7e171ad9e3bef6bf6f1c20c', class: 'icon_container' }, h("wa-icon", { key: 'de1afcef2288f34ae79a71994c19917ca4d9b082', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '7000bcaf839bffa3bd425d8dc09e4fccd6794cf3', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '52e55ad19c8c0a8f0c97954340e18de04a19aa73' })));
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

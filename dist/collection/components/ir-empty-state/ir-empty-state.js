import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: '894020fc794304a576eede3f7e7890af19e3fa5b' }, h("slot", { key: '2df91c8445acf19d8ea504caaa5346a2521d61cf', name: "icon" }, this.showIcon && (h("div", { key: 'd2ff7899e220def27e03e7e0ff84a4541c7ee65d', class: 'icon_container' }, h("wa-icon", { key: 'd3519738f3c44d25e0d537d56be17fe044b8b26e', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: 'd3a10cad16d28f422d0c4a6fbf01de4916f62455', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '7d643c73bba0c9d5ff84fbf3ee6aac3403015f45' })));
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
                "attribute": "message",
                "reflect": false,
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
                "attribute": "show-icon",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
}
//# sourceMappingURL=ir-empty-state.js.map

import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: 'b5753e105527e3d20462cf75f9a48cda1e106d09' }, h("slot", { key: '88548feade4b3408b4bc5445763606e419f29bfe', name: "icon" }, this.showIcon && (h("div", { key: '0dd059772b8beeb94543ee2d21396410bcd048b2', class: 'icon_container' }, h("wa-icon", { key: '7e7dd450a9344c4d4e99a4902e35b18085d0330e', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '3e842912e9ee48d29a3d915b617c9227b9700544', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '823c976ac3abc1cd610e299690ec9a99d4eecf06' })));
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

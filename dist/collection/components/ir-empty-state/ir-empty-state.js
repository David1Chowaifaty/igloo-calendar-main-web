import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: '4bf635cf1faf0f7771ee3878e5e903977835a2e2' }, h("slot", { key: 'be770582063920dcc5022ea77fb64cde2bfdb09f', name: "icon" }, this.showIcon && (h("div", { key: 'eedb19436d43ceb62edbe62d259de46767d157a5', class: 'icon_container' }, h("wa-icon", { key: 'e863be42ed60840c831eb361c407674365c6f496', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: 'a93aabc8782a298d07d49a7e7ee2a8b3cdf3fbdf', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '5eb8a65bc79ddc66857395e15ceb9bf2407dd697' })));
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

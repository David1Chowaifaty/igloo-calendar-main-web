import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: 'f6ee55032fb2470485c7abef5f4cbc38299ff9a7' }, h("slot", { key: 'c37ce81344075e8c3c8a99118a15fdcb262bb231', name: "icon" }, this.showIcon && (h("div", { key: '27c7fffbef0e743c578d87f7505b631921218031', class: 'icon_container' }, h("wa-icon", { key: '7b7e447ffac9e675f9fde10527fe6671854c76ab', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '3405a38b1ae171252827242038f1a70f38c83b19', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '7863d73a4574adb2dabc0cfba0491626ed34a4b8' })));
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

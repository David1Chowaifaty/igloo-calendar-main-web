import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: '54f4ba58bec90bb5e844d760eae59639447293d5' }, h("slot", { key: '5b25eb13fe9128bc61ec4703c64e168a1f38816e', name: "icon" }, this.showIcon && (h("div", { key: '44a7a6ac6bcdf90e8586dfa3ad741833fc6d3c27', class: 'icon_container' }, h("wa-icon", { key: 'ba396b6a7b157513fe81f4c9de8c1fbf02d7ad9d', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '9f035bcea810a302294f831ae47748ff25d7756a', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '2bd483f0a9d4570387da9d99b55c4d548f75f025' })));
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

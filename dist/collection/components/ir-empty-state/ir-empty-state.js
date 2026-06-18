import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: '08c8e0734b6346375ff8d8cd122abbfdca48f7ef' }, h("slot", { key: 'b2670e966a084490a2c225bd1493ad3e7154a4bc', name: "icon" }, this.showIcon && (h("div", { key: '0d4ccf4cb5927e9a53841137ead26b26bfa0eb3c', class: 'icon_container' }, h("wa-icon", { key: '6c9093acfacc91ac808197bc3d0612908d514420', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '8a546282aee6e4d274d1913e66b462d6c0edbf47', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '038b424fa8e10faf730a6c187467b808982ae155' })));
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

import { h } from "@stencil/core";
export class IrMenuGroup {
    el;
    open;
    groupName;
    openChanged;
    // componentWillLoad() {
    //   this.el.addEventListener('mouseenter', this.handleShow);
    // }
    // disconnectedCallback() {
    //   this.el.removeEventListener('mouseenter', this.handleShow);
    // }
    handleHide = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.open = false;
        this.openChanged.emit(false);
    };
    handleShow = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.open = true;
        this.openChanged.emit(true);
    };
    render() {
        return (h("wa-details", { key: '06246f1c5fdc54fd93e4a16da084d2ed0a2c07a7', class: "menu-group__details", open: this.open, appearance: "plain", name: this.groupName, "onwa-hide": this.handleHide, "onwa-show": this.handleShow }, h("slot", { key: '70880ac9f4c2c7a5db08d41be8b75bd44eaa3138', slot: "summary", name: "summary" }), h("slot", { key: '2295a73571baa83d1c495fa2c2ce626f1158d441' })));
    }
    static get is() { return "ir-menu-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-menu-group.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-menu-group.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "mutable": true,
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
                "attribute": "open",
                "reflect": true
            },
            "groupName": {
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
                "attribute": "group-name",
                "reflect": true
            }
        };
    }
    static get events() {
        return [{
                "method": "openChanged",
                "name": "openChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-menu-group.js.map

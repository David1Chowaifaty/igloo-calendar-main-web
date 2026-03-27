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
        return (h("wa-details", { key: '9dde6a28348e6673784d73e4e8c2b550c74eb2f8', class: "menu-group__details", open: this.open, appearance: "plain", name: this.groupName, "onwa-hide": this.handleHide, "onwa-show": this.handleShow }, h("slot", { key: '86a44c4a1f26b41cab3a197cf745c1808fb902fb', slot: "summary", name: "summary" }), h("slot", { key: 'ee016f35f4241ad88078e38c41b833f3ffe2e8d7' })));
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

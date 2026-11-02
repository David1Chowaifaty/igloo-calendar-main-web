import { h } from "@stencil/core";
import { getLocalDirection } from "../../../utils/direction";
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
        return (h("wa-details", { key: 'ba16fc2dfa0a591ef9ade574990b67239a97bd1c', dir: getLocalDirection(this.el), class: "menu-group__details", open: this.open, appearance: "plain", name: this.groupName, "onwa-hide": this.handleHide, "onwa-show": this.handleShow }, h("slot", { key: 'f708d0107616417d044c6732f35bd621a88fdd65', slot: "summary", name: "summary" }), h("slot", { key: 'f3a4b41840127c2744948b64823d9a5b10d58423' })));
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
                "reflect": true,
                "attribute": "open"
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
                "reflect": true,
                "attribute": "group-name"
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

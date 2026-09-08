import { Host, h } from "@stencil/core";
import { v4 } from "uuid";
export class IrRectifierDrawer {
    open;
    closeDrawer;
    isLoading;
    formId = `rectifier-form__id-${v4()}`;
    handleDrawerClose(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.closeDrawer.emit();
    }
    handleLoadingChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.isLoading = e.detail;
    }
    render() {
        return (h(Host, { key: '2f2b63917d7af235891e23772dcb31927b6434c3' }, h("ir-drawer", { key: '8403a8c406583847a0fe3fc94bd01647d6fbaf5f', onDrawerHide: this.handleDrawerClose.bind(this), label: "Rectify/Extend Availability", open: this.open, class: "rectifier__drawer" }, this.open && h("ir-rectifier", { key: '3e54dee31d0f5cf67223b7e153b886c4fdc9a07c', formId: this.formId, onCloseDrawer: this.handleDrawerClose.bind(this), onLoadingChanged: this.handleLoadingChange.bind(this) }), h("div", { key: 'fc5570bb88bc44c6ba5572e049a2add9966ddcca', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'a8fc4f817e70209ae18c459a39d24e544fd8d6cc', size: "m", variant: "neutral", appearance: "filled", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: '02f82e6fcf32df58f52439fbc56cb2ddf07daa35', loading: this.isLoading, type: "submit", form: this.formId, size: "m", variant: "brand" }, "Confirm")))));
    }
    static get is() { return "ir-rectifier-drawer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-rectifier-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-rectifier-drawer.css"]
        };
    }
    static get properties() {
        return {
            "open": {
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
                "reflect": true,
                "attribute": "open"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {}
        };
    }
    static get events() {
        return [{
                "method": "closeDrawer",
                "name": "closeDrawer",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}

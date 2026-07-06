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
        return (h(Host, { key: '7e3ae8f5316f080314d4423cfcb2663bebdd1de5' }, h("ir-drawer", { key: '14646b2dd1576de22fd60269599a601f8c9c531d', onDrawerHide: this.handleDrawerClose.bind(this), label: "Rectify Availability", open: this.open, class: "rectifier__drawer" }, this.open && h("ir-rectifier", { key: '2540097484d5465dd312d1cc718456294b7ecb82', formId: this.formId, onCloseDrawer: this.handleDrawerClose.bind(this), onLoadingChanged: this.handleLoadingChange.bind(this) }), h("div", { key: '5848217f63d5ec60e384e7385292e5fdf6a59f84', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '2c590901b1b41df8787719c5b02f8dfcb11570a8', size: "m", variant: "neutral", appearance: "filled", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: 'd8ab504131c6a4c708b1acea5193bca9cb47bcbd', loading: this.isLoading, type: "submit", form: this.formId, size: "m", variant: "brand" }, "Confirm")))));
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

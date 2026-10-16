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
        return (h(Host, { key: 'bffc87726770bd93aa9057be2eb637eac86cf994' }, h("ir-drawer", { key: '35257fa2619481b0414348cfa13dd71a282e6c30', onDrawerHide: this.handleDrawerClose.bind(this), label: "Rectify/Extend Availability", open: this.open, class: "rectifier__drawer" }, this.open && h("ir-rectifier", { key: '73b4c4112bfb071134d097855c96f402c050131e', formId: this.formId, onCloseDrawer: this.handleDrawerClose.bind(this), onLoadingChanged: this.handleLoadingChange.bind(this) }), h("div", { key: '1e2e9f43d70343cf46de5fda9a6c2f1af6d3c30d', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'dd4910aa8076ae486a57b57528d7045453e28eb4', size: "m", variant: "neutral", appearance: "filled", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: 'e443d19cd840e5c8e6d838e94bd2ade328af392f', loading: this.isLoading, type: "submit", form: this.formId, size: "m", variant: "brand" }, "Confirm")))));
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

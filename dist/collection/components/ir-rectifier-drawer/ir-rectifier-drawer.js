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
        return (h(Host, { key: '7e682b5934238b96b8f715a8d51d004ac1d8e3f3' }, h("ir-drawer", { key: '7e72c2602dd0827edd7f5c1d4a4edfdde4e3f1ec', onDrawerHide: this.handleDrawerClose.bind(this), label: "Rectify/Extend Availability", open: this.open, class: "rectifier__drawer" }, this.open && h("ir-rectifier", { key: 'f4df920ddfe39f7d600e3d710a3cd32de2025743', formId: this.formId, onCloseDrawer: this.handleDrawerClose.bind(this), onLoadingChanged: this.handleLoadingChange.bind(this) }), h("div", { key: '89c8189982f984e3b7586cc8b9baf8d6788e4679', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'cea0f4eb72f0aa36a57921a044999f67191cf50a', size: "m", variant: "neutral", appearance: "filled", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: '5bfa4804fdeb9550e94ec4dde892f311cf57c354', loading: this.isLoading, type: "submit", form: this.formId, size: "m", variant: "brand" }, "Confirm")))));
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

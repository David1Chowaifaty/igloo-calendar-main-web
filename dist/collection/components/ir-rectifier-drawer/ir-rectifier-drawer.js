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
        return (h(Host, { key: 'f8b93e5f9d53c3d397e801a786dc501aa97ee938' }, h("ir-drawer", { key: '26d01152c3ea1b2df6cf02116bacbe248f3b453b', onDrawerHide: this.handleDrawerClose.bind(this), label: "Rectify/Extend Availability", open: this.open, class: "rectifier__drawer" }, this.open && h("ir-rectifier", { key: 'b9dba7c091d35b2db4bc5d17a4aeb6d2d9a637ef', formId: this.formId, onCloseDrawer: this.handleDrawerClose.bind(this), onLoadingChanged: this.handleLoadingChange.bind(this) }), h("div", { key: '8a5800dadc1724f0ceba2d1fa8b8818877456d45', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '61d586dce576f732027e1377c54df4d11b4af53d', size: "m", variant: "neutral", appearance: "filled", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: 'd39068353e2cc0f1981aa07450716686df1857ed', loading: this.isLoading, type: "submit", form: this.formId, size: "m", variant: "brand" }, "Confirm")))));
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

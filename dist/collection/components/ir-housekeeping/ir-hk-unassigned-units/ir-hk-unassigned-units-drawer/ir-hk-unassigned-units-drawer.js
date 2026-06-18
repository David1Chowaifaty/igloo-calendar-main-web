import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { h } from "@stencil/core";
export class IrHkUnassignedUnitsDrawer {
    open = false;
    user = null;
    closeSideBar;
    formId = 'hk-unassigned-units-drawer-form';
    render() {
        return (h("ir-drawer", { key: '1f415344f8c24e6ff46aa06b006f20e10c7a2e20', label: !this.user ? 'Assingn Units' : `Assignment for ${this.user.name}`, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeSideBar.emit(null);
            }, style: { '--ir-drawer-width': 'max-content' }, open: this.open }, this.open && h("ir-hk-unassigned-units-drawer-form", { key: '78da0472139fedaec007613b50a9c71325f5e9c0', formId: this.formId, user: this.user }), h("div", { key: 'ddad0095c62470e0a11034e7d611f6e987a6c437', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '18b0cb7a89852edb91e24c6f3fd0e40b2450b824', "data-drawer": "close", variant: "neutral", size: "m", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: 'cc2a54d1cf962a5c255a05d0a57b3f6903d6694c', loading: isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), variant: "brand", type: "submit", form: this.formId, appearance: "accent", size: "m" }, "Save"))));
    }
    static get is() { return "ir-hk-unassigned-units-drawer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-unassigned-units-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-unassigned-units-drawer.css"]
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
                "reflect": false,
                "attribute": "open",
                "defaultValue": "false"
            },
            "user": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IHouseKeepers | null",
                    "resolved": "IHouseKeepers",
                    "references": {
                        "IHouseKeepers": {
                            "location": "import",
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::IHouseKeepers",
                            "referenceLocation": "IHouseKeepers"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
            }
        };
    }
    static get events() {
        return [{
                "method": "closeSideBar",
                "name": "closeSideBar",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
}

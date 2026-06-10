import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { h } from "@stencil/core";
export class IrHkUnassignedUnitsDrawer {
    open = false;
    user = null;
    closeSideBar;
    formId = 'hk-unassigned-units-drawer-form';
    render() {
        return (h("ir-drawer", { key: '60a708d7848f6cf94d09e7aaf9b8d94bb554ed44', label: !this.user ? 'Assingn Units' : `Assignment for ${this.user.name}`, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeSideBar.emit(null);
            }, style: { '--ir-drawer-width': 'max-content' }, open: this.open }, this.open && h("ir-hk-unassigned-units-drawer-form", { key: '0ba8a7dcadd188b1fdb8fae86b4ba58b5e001ecf', formId: this.formId, user: this.user }), h("div", { key: '993a7ce3dbf349869d17d2eadd92542bce7e16dd', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'f2d8bea38cf6a9a20fafdcd90071abc12836b077', "data-drawer": "close", variant: "neutral", size: "medium", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '72fe5720baf3b0ac78d40dc7bb39790ac0e89a00', loading: isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), variant: "brand", type: "submit", form: this.formId, appearance: "accent", size: "medium" }, "Save"))));
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
                "attribute": "open",
                "reflect": false,
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
                            "id": "src/models/housekeeping.ts::IHouseKeepers"
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
//# sourceMappingURL=ir-hk-unassigned-units-drawer.js.map

import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { h } from "@stencil/core";
import { t } from "../../../../services/locale/t";
export class IrHkUnassignedUnitsDrawer {
    open = false;
    user = null;
    closeSideBar;
    formId = 'hk-unassigned-units-drawer-form';
    render() {
        return (h("ir-drawer", { key: '43c739358d4d29e08a2d3b97091d02fd55c7295f', label: !this.user
                ? t('Lcz_AssingnUnitsTypo', { fallback: 'Assingn Units' })
                : `${t('Lcz_AssignmentForUser', { fallback: 'Assignment for' })} ${this.user.name}`, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeSideBar.emit(null);
            }, style: { '--ir-drawer-width': 'max-content' }, open: this.open }, this.open && h("ir-hk-unassigned-units-drawer-form", { key: '1ed20cad64bdb528ffff477ea4355a0cd9e358d7', formId: this.formId, user: this.user }), h("div", { key: '26978dfbb37dec8ac990336fd5fd9cdd55f55bf6', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '7a461ba39a0722aead7fb2a1bcfee2ff073c8b21', "data-drawer": "close", variant: "neutral", size: "m", appearance: "filled" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '15f971976a13b3b606d9aa660f01ab54fa172be5', loading: isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), variant: "brand", type: "submit", form: this.formId, appearance: "accent", size: "m" }, t('Lcz_Save', { fallback: 'Save' })))));
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

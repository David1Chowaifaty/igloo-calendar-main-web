import locales from "../../../../stores/locales.store";
import { h } from "@stencil/core";
export class IrHkUserDrawer {
    isLoading = false;
    open = false;
    isEdit = false;
    user = null;
    closeSideBar;
    formId = 'hk-user-drawer-form';
    render() {
        return (h("ir-drawer", { key: '1ae2feea6197e3c1a0565d4f63bfbe585898a8b0', open: this.open, onDrawerHide: () => {
                this.closeSideBar.emit(null);
            }, label: this.isEdit ? locales.entries.Lcz_EditHousekeeperProfile : locales.entries.Lcz_CreateHousekeeperProfile }, this.open && (h("ir-hk-user-drawer-form", { key: '9b8cba3b2734a80864a578d16e9c4c4784a23473', onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail;
            }, isEdit: this.isEdit, user: this.user, formId: this.formId })), h("div", { key: '64a8ac4bd227203d3b8be0ba9af1d4f3924c3da7', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '5e7871e4e677cb94a7e2ac4fcfcc0da3d4d35b48', "data-drawer": "close", variant: "neutral", size: "medium", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '0bf428b5a7f4b1718bfdc2b54223639c43a867f8', loading: this.isLoading, variant: "brand", type: "submit", form: this.formId, appearance: "accent", size: "medium" }, "Save"))));
    }
    static get is() { return "ir-hk-user-drawer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-user-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-user-drawer.css"]
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
            "isEdit": {
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
                "attribute": "is-edit",
                "reflect": false,
                "defaultValue": "false"
            },
            "user": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "THKUser | null",
                    "resolved": "{ name: string; note: string; property_id: number; id: number; mobile: string; password: string; phone_prefix: string; username: string; }",
                    "references": {
                        "THKUser": {
                            "location": "import",
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::THKUser"
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
    static get states() {
        return {
            "isLoading": {}
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
//# sourceMappingURL=ir-hk-user-drawer.js.map

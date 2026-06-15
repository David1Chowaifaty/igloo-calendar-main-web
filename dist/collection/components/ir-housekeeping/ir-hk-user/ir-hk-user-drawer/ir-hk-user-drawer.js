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
        return (h("ir-drawer", { key: 'a783243689f71d546304541c47f61b56da98cd70', open: this.open, onDrawerHide: () => {
                this.closeSideBar.emit(null);
            }, label: this.isEdit ? locales.entries.Lcz_EditHousekeeperProfile : locales.entries.Lcz_CreateHousekeeperProfile }, this.open && (h("ir-hk-user-drawer-form", { key: '1136507f87c86537ff9ed642bf9990397f39f824', onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail;
            }, isEdit: this.isEdit, user: this.user, formId: this.formId })), h("div", { key: 'f3df9de07eb8af10631f4106eca8a743a6e495e0', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'f0f46f31fdee0c44deeb79252deaca9e3a6c2566', "data-drawer": "close", variant: "neutral", size: "medium", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '7f360e74b6dc9df3698db5e9d1a74cf8e693b356', loading: this.isLoading, variant: "brand", type: "submit", form: this.formId, appearance: "accent", size: "medium" }, "Save"))));
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

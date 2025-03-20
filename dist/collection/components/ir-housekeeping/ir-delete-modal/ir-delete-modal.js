var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { h } from "@stencil/core";
import housekeeping_store from "../../../stores/housekeeping.store";
import { HouseKeepingService } from "../../../services/housekeeping.service";
import locales from "../../../stores/locales.store";
export class IrDeleteModal {
    constructor() {
        this.isOpen = false;
        this.selectedId = '';
        this.loadingBtn = null;
        this.housekeepingService = new HouseKeepingService();
    }
    async closeModal() {
        if (this.modalEl) {
            $(this.modalEl).modal('hide');
            this.isOpen = false;
            this.modalClosed.emit(null);
        }
    }
    async openModal() {
        if (this.modalEl) {
            $(this.modalEl).modal({
                focus: true,
                backdrop: true,
                keyboard: true,
            });
            $(this.modalEl).modal('show');
            this.isOpen = true;
        }
    }
    async btnClickHandler(event) {
        let target = event.target;
        let name = target.name;
        try {
            if (name === 'confirm') {
                this.loadingBtn = 'confirm';
                if (this.selectedId === '') {
                    await this.housekeepingService.editExposedHKM(this.user, true);
                }
                else {
                    const newAssignedUnits = this.user.assigned_units.map(u => ({ hkm_id: +this.selectedId, is_to_assign: true, unit_id: u.id }));
                    await this.housekeepingService.manageExposedAssignedUnitToHKM(housekeeping_store.default_properties.property_id, newAssignedUnits);
                    const _a = this.user, { assigned_units, is_soft_deleted, is_active } = _a, user = __rest(_a, ["assigned_units", "is_soft_deleted", "is_active"]);
                    await this.housekeepingService.editExposedHKM(user, true);
                }
                this.resetData.emit(null);
            }
            if (name === 'cancel') {
                this.closeModal();
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            if (this.loadingBtn) {
                this.loadingBtn = null;
                this.closeModal();
            }
        }
    }
    render() {
        if (!this.user) {
            return;
        }
        return (h("div", { "aria-modal": this.isOpen ? 'true' : 'false', class: "modal fade", ref: el => (this.modalEl = el), tabindex: "-1" }, h("div", { class: "modal-dialog modal-dialog-centered" }, h("div", { class: "modal-content" }, h("div", { class: "modal-body" }, h("div", { class: `ir-alert-header mb-1 d-flex align-items-center justify-content-between border-0 py-0 m-0 ` }, h("p", { class: "p-0 my-0 modal-title" }, this.user.assigned_units.length > 0 ? locales.entries.Lcz_AssignUnitsTo : locales.entries.Lcz_ConfirmDeletion), h("ir-button", { class: "exit-icon", variant: "icon", icon_name: "xmark", onClickHandler: () => this.closeModal() })), this.user.assigned_units.length > 0 && (h("div", { class: "modal-body text-left p-0 mb-2" }, h("ir-select", { firstOption: locales.entries.Lcz_nobody, selectedValue: this.selectedId, onSelectChange: e => (this.selectedId = e.detail), LabelAvailable: false, data: housekeeping_store.hk_criteria.housekeepers
                .filter(hk => hk.id !== this.user.id)
                .map(m => ({
                value: m.id.toString(),
                text: m.name,
            }))
                .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())) }))), h("div", { class: `ir-alert-footer border-0 d-flex justify-content-end` }, h("ir-button", { icon: '', btn_color: 'secondary', btn_block: true, text: locales.entries.Lcz_Cancel, name: 'cancel' }), h("ir-button", { isLoading: this.loadingBtn === 'confirm', icon: '', btn_color: 'primary', btn_block: true, text: locales.entries.Lcz_Confirm, name: 'confirm' })))))));
    }
    static get is() { return "ir-delete-modal"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-delete-modal.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-delete-modal.css"]
        };
    }
    static get properties() {
        return {
            "user": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IHouseKeepers",
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
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "selectedId": {},
            "loadingBtn": {}
        };
    }
    static get events() {
        return [{
                "method": "modalClosed",
                "name": "modalClosed",
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
            }, {
                "method": "resetData",
                "name": "resetData",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "closeModal": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "openModal": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get listeners() {
        return [{
                "name": "clickHandler",
                "method": "btnClickHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-delete-modal.js.map

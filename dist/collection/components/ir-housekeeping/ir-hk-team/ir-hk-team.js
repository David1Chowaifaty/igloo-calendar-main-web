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
import housekeeping_store from "../../../stores/housekeeping.store";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IrHkTeam {
    constructor() {
        this.currentTrigger = null;
    }
    renderAssignedUnits(hk) {
        if (hk.assigned_units.length === 0) {
            return (h("span", null, "0 -", ' ', h("button", { class: "outline-btn", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }) }, locales.entries.Lcz_Assign)));
        }
        return (h("span", null, hk.assigned_units.length, " -", ' ', h("button", { onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }), class: "outline-btn" }, locales.entries.Lcz_Edit)));
    }
    renderCurrentTrigger() {
        var _a;
        switch ((_a = this.currentTrigger) === null || _a === void 0 ? void 0 : _a.type) {
            case 'unassigned_units':
                return h("ir-hk-unassigned-units", { slot: "sidebar-body", user: this.currentTrigger.user });
            case 'user':
                return h("ir-hk-user", { slot: "sidebar-body", user: this.currentTrigger.user, isEdit: this.currentTrigger.isEdit });
            default:
                return null;
        }
    }
    handleCloseSideBar(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.currentTrigger = null;
    }
    handleDeletion(user) {
        this.currentTrigger = { type: 'delete', user };
        this.deletionTimout = setTimeout(() => {
            const modal = this.el.querySelector('ir-delete-modal');
            if (!modal)
                return;
            modal.openModal();
        }, 100);
    }
    disconnectedCallback() {
        clearTimeout(this.deletionTimout);
    }
    render() {
        var _a;
        const { assigned, total, un_assigned } = housekeeping_store.hk_criteria.units_assignments;
        return (h(Host, { key: '20f238995ef76cf927bdca06656e62e9a5ca4f52', class: "card p-1" }, h("section", { key: 'b30b2d7fe28a3d3e267feee67d8d1481edf77401' }, h("ir-title", { key: '2a1cc9d14da9c38a0c22505f7cd7659cab5afdef', label: locales.entries.Lcz_HousekeepingTeam, justifyContent: "space-between" }, h("div", { key: '167384b49e691cbccb2f4cefe21d9cf6680eeef3', slot: "title-body", class: "assignments-container gap-16 m-0" }, h("p", { key: '78cb14667d8ae3c6ff30723ce6597d42567d0856', class: "font-weight-bold m-0 p-0" }, total, " ", locales.entries.Lcz_TotalUnits), h("p", { key: '2e775ab0ee40b297d1cb1890ab272eb89dffcabd', class: 'm-0 p-0' }, assigned, " ", h("span", { key: 'a100e860b523040a36f659c89571f9cfac9d67e0' }, locales.entries.Lcz_Assigned)), un_assigned > 0 && (h("button", { key: '837d20d5979095c7497e2e7afc72bf4b7851e18e', class: "outline-btn", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: null }) }, un_assigned, " ", locales.entries.Lcz_Unassigned)))), h("p", { key: 'cf94f97ddeb570aecf7401544afdccd6e7183975', class: 'm-0 p-0' }, locales.entries.Lcz_AsAnOption)), h("section", { key: '9a433768c7310593ad5cb2e44db0fee3ad36a271', class: "table-container" }, h("table", { key: '02082449259cc8daf913a4e0b92082562b116057', class: "table" }, h("thead", { key: '946449b3d869657baedb864f7f3d06df3726b837' }, h("tr", { key: 'e6f5e8c9ecd2904105cd50f8f5c5e8e5ad255ed8' }, h("th", { key: '40ecb53ccd9eda4933714eba24c3c97e6c761425', class: "text-left" }, locales.entries.Lcz_Name), h("th", { key: '1381014c53b3287898d28bd5aa4bf944e7cb2d90' }, locales.entries.Lcz_Mobile), h("th", { key: '2f26fb4a68deac434b7d34f2d5aa3761d1e6d4dc' }, locales.entries.Lcz_Username), h("th", { key: 'a952aff69d455f6abad78fe6a2e62586fedf66a6' }, locales.entries.Lcz_Note), h("th", { key: 'be3e157af164343162d6c68e2d0c3cacc61b4333' }, locales.entries.Lcz_UnitsAssigned), h("th", { key: '402f6e812102082635ed29278541cab35d435393', class: "text-center" }, h("ir-icon", { key: 'dfc5cb2e82d97e51d019ae9e12948ece48b8af37', title: locales.entries.Lcz_CreateHousekeeper, onIconClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: false,
                    user: null,
                };
            } }, h("svg", { key: 'a9f458abc47e22fa45674d6a21cdf96dcbcd44df', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: 'd24db53e75a82f0ee46dd4d98399b2cf7ef3abe0', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), h("tbody", { key: 'd5f0d603c9359836761eb8b53efed8d031053bb7' }, housekeeping_store.hk_criteria.housekeepers.map(hk => (h("tr", { key: hk.id }, h("td", { class: "text-left" }, hk.name), h("td", null, hk.phone_prefix, " ", hk.mobile), h("td", null, hk.username), h("td", null, hk.note), h("td", null, this.renderAssignedUnits(hk)), h("td", { class: "text-center" }, h("div", { class: "icons-container" }, h("ir-icon", { title: locales.entries.Lcz_EditHousekeeper, onIconClickHandler: () => {
                const { assigned_units, is_soft_deleted, is_active } = hk, user = __rest(hk, ["assigned_units", "is_soft_deleted", "is_active"]);
                this.currentTrigger = {
                    type: 'user',
                    isEdit: true,
                    user,
                };
            }, icon: "ft-save color-ir-light-blue-hover h5 pointer sm-margin-right" }, h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { fill: "#6b6f82", d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }))), h("span", null, " \u00A0"), h("ir-icon", { title: locales.entries.Lcz_DeleteHousekeeper, icon: "ft-trash-2 danger h5 pointer", onIconClickHandler: () => this.handleDeletion(hk) }, h("svg", { slot: "icon", fill: "#ff2441", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "14.25", viewBox: "0 0 448 512" }, h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" }))))))))))), h("ir-sidebar", { key: '3dd71a65f574a5ea0b24a8c8d5c40ef8a5488a6f', showCloseButton: false, open: this.currentTrigger !== null && this.currentTrigger.type !== 'delete', onIrSidebarToggle: () => (this.currentTrigger = null), style: {
                '--sidebar-width': this.currentTrigger ? (this.currentTrigger.type === 'unassigned_units' ? 'max-content' : '40rem') : 'max-content',
            } }, this.renderCurrentTrigger()), ((_a = this.currentTrigger) === null || _a === void 0 ? void 0 : _a.type) === 'delete' && h("ir-delete-modal", { key: '6acf04a7fd03be601772c9298aa332ab55c5a2cf', user: this.currentTrigger.user })));
    }
    static get is() { return "ir-hk-team"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-team.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-team.css"]
        };
    }
    static get states() {
        return {
            "currentTrigger": {}
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "closeSideBar",
                "method": "handleCloseSideBar",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-hk-team.js.map

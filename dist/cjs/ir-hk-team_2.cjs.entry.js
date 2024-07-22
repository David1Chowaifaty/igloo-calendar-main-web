'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const housekeeping_service = require('./housekeeping.service-21a78f2f.js');
const locales_store = require('./locales.store-4301bbe8.js');
require('./Token-fac1282b.js');
require('./index-5e99a1fe.js');

const irHkTeamCss = ".sc-ir-hk-team-h{display:block}th.sc-ir-hk-team,td.sc-ir-hk-team{text-align:left !important;width:fit-content !important}input.sc-ir-hk-team{border:none;margin:0;width:120px}input.sc-ir-hk-team:focus{outline:none}.table-container.sc-ir-hk-team{padding:10px 0;overflow-x:auto;max-width:100%;width:max-content}.table.sc-ir-hk-team,th.sc-ir-hk-team,td.sc-ir-hk-team{border-color:white !important}thead.sc-ir-hk-team{border:0 !important}table.sc-ir-hk-team{border:0 !important}.icons-container.sc-ir-hk-team{display:flex;align-items:center;justify-content:center;gap:4px}.text-center.sc-ir-hk-team{text-align:center !important}.assignments-container.sc-ir-hk-team,.unassigned-container.sc-ir-hk-team{display:flex;align-items:center}.gap-16.sc-ir-hk-team{gap:16px}.unassigned-container.sc-ir-hk-team{gap:4px}.justify-between.sc-ir-hk-team{justify-content:space-between;margin-bottom:10px}.assignments-container.sc-ir-hk-team p.sc-ir-hk-team,h4.sc-ir-hk-team{margin:0}.outline-btn.sc-ir-hk-team{background:white;border:1px solid var(--blue);color:var(--blue);border-radius:5px;font-size:12px;padding:1px 0.25rem !important;margin:0}.outline-btn.sc-ir-hk-team:hover{color:white;background:var(--blue)}@media only screen and (min-width: 900px){td.sc-ir-hk-team{min-width:140px !important;width:max-content !important}}@media only screen and (max-width: 900px){.table-container.sc-ir-hk-team{width:max-content !important}}";
const IrHkTeamStyle0 = irHkTeamCss;

var __rest = (undefined && undefined.__rest) || function (s, e) {
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
const IrHkTeam = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.currentTrigger = null;
    }
    renderAssignedUnits(hk) {
        if (hk.assigned_units.length === 0) {
            return (index.h("span", null, "0 -", ' ', index.h("button", { class: "outline-btn", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }) }, locales_store.locales.entries.Lcz_Assign)));
        }
        return (index.h("span", null, hk.assigned_units.length, " -", ' ', index.h("button", { onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }), class: "outline-btn" }, locales_store.locales.entries.Lcz_Edit)));
    }
    renderCurrentTrigger() {
        var _a;
        switch ((_a = this.currentTrigger) === null || _a === void 0 ? void 0 : _a.type) {
            case 'unassigned_units':
                return index.h("ir-hk-unassigned-units", { slot: "sidebar-body", user: this.currentTrigger.user });
            case 'user':
                return index.h("ir-hk-user", { slot: "sidebar-body", user: this.currentTrigger.user, isEdit: this.currentTrigger.isEdit });
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
        const { assigned, total, un_assigned } = housekeeping_service.housekeeping_store.hk_criteria.units_assignments;
        return (index.h(index.Host, { key: '51c6dac37a73c133f81014d19377eab2d9e4f2c6', class: "card p-1" }, index.h("section", { key: 'bd941f1ef4473aca86bac8c5e6c4bf830710cc4a' }, index.h("ir-title", { key: '4e43ecaf8bf65c34b672f6bb730e784263388f80', label: locales_store.locales.entries.Lcz_HousekeepingTeam, justifyContent: "space-between" }, index.h("div", { key: '9f555d9087bd1a49cb07964b04039e79a7caa991', slot: "title-body", class: "assignments-container gap-16 m-0" }, index.h("p", { key: 'ce808b6c822a2eedcafb231816d173213a6cddcc', class: "font-weight-bold m-0 p-0" }, total, " ", locales_store.locales.entries.Lcz_TotalUnits), index.h("p", { key: '2e2a05336ed1583c27c20e7c829337a651c9ff6b', class: 'm-0 p-0' }, assigned, " ", index.h("span", { key: 'd9b2030d2be82932fd1260e0b03f6bb69a05eae3' }, locales_store.locales.entries.Lcz_Assigned)), un_assigned > 0 && (index.h("button", { key: 'c643115b949db2118ac18637e464e9501ae1a5ee', class: "outline-btn", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: null }) }, un_assigned, " ", locales_store.locales.entries.Lcz_Unassigned)))), index.h("p", { key: 'd925977678a960e9f6b655f64011dc11fb592cbe', class: 'm-0 p-0' }, locales_store.locales.entries.Lcz_AsAnOption)), index.h("section", { key: 'f5680731ca5d82b4453ded937aa58e8c34f692b7', class: "table-container" }, index.h("table", { key: '5cbfabe347a151715de130d0ace03c5751176138', class: "table" }, index.h("thead", { key: 'aee87ca53fcfbda355d045eff15e403106eec688' }, index.h("tr", { key: '45ab665439c43f5dab0a91783e23d1df655d6382' }, index.h("th", { key: 'a1344b2e87d8970f7ef11bf318d935e00108d433', class: "text-left" }, locales_store.locales.entries.Lcz_Name), index.h("th", { key: 'edfd6a8babeac7dbc6bc85899c269fa5f82609e8' }, locales_store.locales.entries.Lcz_Mobile), index.h("th", { key: '03f51e27ae6eca9636fb0531ebbe7adfb89f2529' }, locales_store.locales.entries.Lcz_Username), index.h("th", { key: '9ea6b81cd181bbf6e57e93c28c6dace0bd480da7' }, locales_store.locales.entries.Lcz_Note), index.h("th", { key: '247221bff2d09daddcba06c4507e2439c531bc67' }, locales_store.locales.entries.Lcz_UnitsAssigned), index.h("th", { key: 'a1c5d0bcaac342021f0fa4cb391bbfc9bd94566d', class: "text-center" }, index.h("ir-icon", { key: '55a1b0f7d861481d20e314f0eaaae167c9ebe321', title: locales_store.locales.entries.Lcz_CreateHousekeeper, onIconClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: false,
                    user: null,
                };
            } }, index.h("svg", { key: 'ebac9ec4915e3a9119cdaa75dd88d66e30ef0ae5', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, index.h("path", { key: 'c845adb596a7425085348023118d7ebbebe8326e', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), index.h("tbody", { key: 'e4093027fdd8a6d0e502a161ff84b7d11ae4cba2' }, housekeeping_service.housekeeping_store.hk_criteria.housekeepers.map(hk => (index.h("tr", { key: hk.id }, index.h("td", { class: "text-left" }, hk.name), index.h("td", null, hk.phone_prefix, " ", hk.mobile), index.h("td", null, hk.username), index.h("td", null, hk.note), index.h("td", null, this.renderAssignedUnits(hk)), index.h("td", { class: "text-center" }, index.h("div", { class: "icons-container" }, index.h("ir-icon", { title: locales_store.locales.entries.Lcz_EditHousekeeper, onIconClickHandler: () => {
                const user = __rest(hk, ["assigned_units", "is_soft_deleted", "is_active"]);
                this.currentTrigger = {
                    type: 'user',
                    isEdit: true,
                    user,
                };
            }, icon: "ft-save color-ir-light-blue-hover h5 pointer sm-margin-right" }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, index.h("path", { fill: "#6b6f82", d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }))), index.h("span", null, " \u00A0"), index.h("ir-icon", { title: locales_store.locales.entries.Lcz_DeleteHousekeeper, icon: "ft-trash-2 danger h5 pointer", onIconClickHandler: () => this.handleDeletion(hk) }, index.h("svg", { slot: "icon", fill: "#ff2441", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "14.25", viewBox: "0 0 448 512" }, index.h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" }))))))))))), index.h("ir-sidebar", { key: '9ba35ddf72badaa2b4017e42e419d1cb289f4a93', showCloseButton: false, open: this.currentTrigger !== null && this.currentTrigger.type !== 'delete', onIrSidebarToggle: () => (this.currentTrigger = null), style: {
                '--sidebar-width': this.currentTrigger ? (this.currentTrigger.type === 'unassigned_units' ? 'max-content' : '40rem') : 'max-content',
            } }, this.renderCurrentTrigger()), ((_a = this.currentTrigger) === null || _a === void 0 ? void 0 : _a.type) === 'delete' && index.h("ir-delete-modal", { key: '1f8b643fb869e83db95112ec730335c52bb80d64', user: this.currentTrigger.user })));
    }
    get el() { return index.getElement(this); }
};
IrHkTeam.style = IrHkTeamStyle0;

const irUnitStatusCss = ".sc-ir-unit-status-h{display:block}.circle.sc-ir-unit-status{display:inline-flex;border-radius:50%}.green.sc-ir-unit-status{background:#57f707}.red.sc-ir-unit-status{background:rgb(199, 139, 36)}.orange.sc-ir-unit-status{background:#ff9149}.table-container.sc-ir-unit-status{width:100%;overflow-x:auto}.black.sc-ir-unit-status{background:#ff4961}table.sc-ir-unit-status{width:max-content}td.sc-ir-unit-status{min-width:140px;text-align:center;height:2rem}.smallcircle.sc-ir-unit-status{height:7px;width:7px}.bigcircle.sc-ir-unit-status{height:7px;width:7px}.status-container.sc-ir-unit-status,.action-container.sc-ir-unit-status{display:flex;align-items:center;gap:8px}.status-container.sc-ir-unit-status p.sc-ir-unit-status{margin:0}";
const IrUnitStatusStyle0 = irUnitStatusCss;

const IrUnitStatus = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData", 7);
        this.housekeepingService = new housekeeping_service.HouseKeepingService();
    }
    componentWillLoad() {
        this.housekeepingService.setToken(housekeeping_service.housekeeping_store.default_properties.token);
    }
    async handleSelectChange(e) {
        try {
            e.stopPropagation();
            e.stopImmediatePropagation();
            const window = e.detail;
            let mode;
            if (window === '') {
                mode = {
                    is_active: false,
                    window: -1,
                };
            }
            else {
                mode = {
                    is_active: true,
                    window: +window,
                };
            }
            await this.housekeepingService.setExposedInspectionMode(housekeeping_service.housekeeping_store.default_properties.property_id, mode);
            this.resetData.emit(null);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        var _a;
        return (index.h(index.Host, { key: '91fc5e05b83b6c481c0ffc8f86c6b4c9fdb7ce36', class: "card p-1" }, index.h("ir-title", { key: '3845a4ed3ad9116665fd589e54e3ecfe0b633e28', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: '34123c9a0da70d335f8289fe61d89a07a1a438c3', class: "table-container" }, index.h("table", { key: '2228e426befd7321e58970e427c8992b2fa33c0d' }, index.h("thead", { key: 'ffd34fdeb4c772e6d1c81bec7e12f4baa901447a' }, index.h("tr", { key: '9007ed3b5f2128d08a924127e9729bc18a03e696' }, index.h("th", { key: '580abccf6585356b4142cc7070895e2ade3ef23a' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: '728ce5cc95230ac04e4359ce395a29d541f8edaa', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: '1b37bb22fba850721fbfc6a5df4897176bde3d9b' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: '76e089e13da388990ff0826bfa2fdcc0c798a144' }, (_a = housekeeping_service.housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
            var _a;
            return (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? (_a = status.inspection_mode) === null || _a === void 0 ? void 0 : _a.window.toString() : '', LabelAvailable: false, firstOption: locales_store.locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
                    const text = i === 0
                        ? locales_store.locales.entries.Lcz_YesOnTheSameDay
                        : i === 1
                            ? locales_store.locales.entries.Lcz_DayPrior.replace('%1', i.toString())
                            : locales_store.locales.entries.Lcz_DaysPrior.replace('%1', i.toString());
                    return {
                        text,
                        value: i.toString(),
                    };
                }) })))))));
        }))))));
    }
};
IrUnitStatus.style = IrUnitStatusStyle0;

exports.ir_hk_team = IrHkTeam;
exports.ir_unit_status = IrUnitStatus;

//# sourceMappingURL=ir-hk-team_2.cjs.entry.js.map
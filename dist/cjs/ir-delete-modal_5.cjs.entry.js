'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const housekeeping_service = require('./housekeeping.service-c883b967.js');
const locales_store = require('./locales.store-0cac7e5d.js');
const calendarData = require('./calendar-data-004d3283.js');
const irInterceptor_store = require('./ir-interceptor.store-77ca6836.js');
const user_service = require('./user.service-42df7a05.js');
const utils = require('./utils-e03e37bd.js');
require('./index-467172e1.js');
require('./axios-6e678d52.js');
require('./moment-1780b03a.js');

const irDeleteModalCss = ":host{font-size:1rem;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif}.modal-backdrop{background-color:rgba(0, 0, 0, 0.5) !important}.ir-alert-footer{gap:10px}.exit-icon{position:absolute;right:10px;top:5px;margin:0}";
const IrDeleteModalStyle0 = irDeleteModalCss;

var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
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
const IrDeleteModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.modalClosed = index.createEvent(this, "modalClosed", 7);
        this.resetData = index.createEvent(this, "resetData", 7);
        this.isOpen = false;
        this.selectedId = '';
        this.loadingBtn = null;
        this.housekeepingService = new housekeeping_service.HouseKeepingService();
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
                    await this.housekeepingService.manageExposedAssignedUnitToHKM(housekeeping_service.housekeeping_store.default_properties.property_id, newAssignedUnits);
                    const _a = this.user, user = __rest$1(_a, ["assigned_units", "is_soft_deleted", "is_active"]);
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
        return (index.h("div", { "aria-modal": this.isOpen ? 'true' : 'false', class: "modal fade", ref: el => (this.modalEl = el), tabindex: "-1" }, index.h("div", { class: "modal-dialog modal-dialog-centered" }, index.h("div", { class: "modal-content" }, index.h("div", { class: "modal-body" }, index.h("div", { class: `ir-alert-header mb-1 d-flex align-items-center justify-content-between border-0 py-0 m-0 ` }, index.h("p", { class: "p-0 my-0 modal-title" }, this.user.assigned_units.length > 0 ? locales_store.locales.entries.Lcz_AssignUnitsTo : locales_store.locales.entries.Lcz_ConfirmDeletion), index.h("ir-button", { class: "exit-icon", variant: "icon", icon_name: "xmark", onClickHandler: () => this.closeModal() })), this.user.assigned_units.length > 0 && (index.h("div", { class: "modal-body text-left p-0 mb-2" }, index.h("ir-select", { firstOption: locales_store.locales.entries.Lcz_nobody, selectedValue: this.selectedId, onSelectChange: e => (this.selectedId = e.detail), LabelAvailable: false, data: housekeeping_service.housekeeping_store.hk_criteria.housekeepers
                .filter(hk => hk.id !== this.user.id)
                .map(m => ({
                value: m.id.toString(),
                text: m.name,
            }))
                .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())) }))), index.h("div", { class: `ir-alert-footer border-0 d-flex justify-content-end` }, index.h("ir-button", { icon: '', btn_color: 'secondary', btn_block: true, text: locales_store.locales.entries.Lcz_Cancel, name: 'cancel' }), index.h("ir-button", { isLoading: this.loadingBtn === 'confirm', icon: '', btn_color: 'primary', btn_block: true, text: locales_store.locales.entries.Lcz_Confirm, name: 'confirm' })))))));
    }
};
IrDeleteModal.style = IrDeleteModalStyle0;

const irHkTeamCss = ".icons-container.sc-ir-hk-team{display:flex;align-items:center;gap:4px}.text-center.sc-ir-hk-team{text-align:center !important}.assignments-container.sc-ir-hk-team,.unassigned-container.sc-ir-hk-team{display:flex;align-items:center}.gap-16.sc-ir-hk-team{gap:16px}.unassigned-container.sc-ir-hk-team{gap:4px}.justify-between.sc-ir-hk-team{justify-content:space-between;margin-bottom:10px}.assignments-container.sc-ir-hk-team p.sc-ir-hk-team,h4.sc-ir-hk-team{margin:0}.outline-btn.sc-ir-hk-team{background:white;border:1px solid var(--blue);color:var(--blue);border-radius:5px;font-size:12px;padding:1px 0.25rem !important;margin:0}.outline-btn.sc-ir-hk-team:hover{color:white;background:var(--blue)}";
const IrHkTeamStyle0 = irHkTeamCss;

const tableCss = ".ir-table-row.sc-ir-hk-team td.sc-ir-hk-team{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap;width:max-content;max-width:max-content}.ir-table-row.sc-ir-hk-team td.sc-ir-hk-team:last-child{width:100%}.table.sc-ir-hk-team td.sc-ir-hk-team{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sc-ir-hk-team{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-hk-team td.sc-ir-hk-team{background:#e3f3fa !important}.selected.sc-ir-hk-team td.sc-ir-hk-team{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-hk-team{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-hk-team:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.sortable.sc-ir-hk-team:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-hk-team svg.sc-ir-hk-team{color:var(--blue)}";
const IrHkTeamStyle1 = tableCss;

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
        return (index.h("span", null, hk.assigned_units.length, " -", ' ', index.h("button", { onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }), class: "outline-btn" }, 'Edit')));
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
        if (!housekeeping_service.housekeeping_store.hk_criteria) {
            return null;
        }
        const { assigned, total, un_assigned } = housekeeping_service.housekeeping_store.hk_criteria.units_assignments;
        return (index.h(index.Host, { class: "card p-1" }, index.h("section", null, index.h("ir-title", { label: locales_store.locales.entries.Lcz_HousekeepingTeam, justifyContent: "space-between" }, index.h("div", { slot: "title-body", class: "assignments-container gap-16 m-0" }, index.h("p", { class: "font-weight-bold m-0 p-0" }, total, " ", locales_store.locales.entries.Lcz_TotalUnits), index.h("p", { class: 'm-0 p-0' }, assigned, " ", index.h("span", null, locales_store.locales.entries.Lcz_Assigned)), un_assigned > 0 && (index.h("button", { class: "outline-btn", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: null }) }, un_assigned, " ", locales_store.locales.entries.Lcz_Unassigned)))), index.h("p", { class: 'm-0 p-0' }, locales_store.locales.entries.Lcz_AsAnOption)), index.h("section", { class: "mt-1 table-responsive" }, index.h("table", { class: "table" }, index.h("thead", null, index.h("tr", null, index.h("th", { class: "text-left" }, locales_store.locales.entries.Lcz_Name), index.h("th", null, locales_store.locales.entries.Lcz_Mobile), index.h("th", null, locales_store.locales.entries.Lcz_Username), index.h("th", null, locales_store.locales.entries.Lcz_UnitsAssigned), index.h("th", null, index.h("ir-icon", { class: "pl-1", "data-testid": "new_user", title: locales_store.locales.entries.Lcz_CreateHousekeeper, onIconClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: false,
                    user: null,
                };
            } }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, index.h("path", { fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), index.h("tbody", null, housekeeping_service.housekeeping_store.hk_criteria.housekeepers.map(hk => {
            var _a;
            return (index.h("tr", { key: hk.id, class: "ir-table-row" }, index.h("td", { class: "text-left" }, index.h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, ((_a = hk.name) === null || _a === void 0 ? void 0 : _a.length) > 25 ? (index.h("ir-popover", { trigger: "hover", content: hk.name }, index.h("span", null, hk.name.slice(0, 25), "..."))) : (hk.name), hk.note && (index.h("ir-popover", { content: hk.note }, index.h("ir-button", { variant: "icon", icon_name: "note", "data-toggle": "tooltip", "data-placement": "bottom", title: "Click to view note" }))))), index.h("td", { class: "" }, hk.phone_prefix, " ", hk.mobile), index.h("td", null, hk.username), index.h("td", null, this.renderAssignedUnits(hk)), index.h("td", { class: "" }, index.h("div", { class: "icons-container" }, index.h("ir-icon", { "data-testid": "edit", title: locales_store.locales.entries.Lcz_EditHousekeeper, onIconClickHandler: () => {
                    const user = __rest(hk, ["assigned_units", "is_soft_deleted", "is_active"]);
                    this.currentTrigger = {
                        type: 'user',
                        isEdit: true,
                        user,
                    };
                }, icon: "ft-save color-ir-light-blue-hover h5 pointer sm-margin-right" }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, index.h("path", { fill: "#6b6f82", d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }))), index.h("span", null, " \u00A0"), index.h("ir-icon", { "data-testid": "delete", title: locales_store.locales.entries.Lcz_DeleteHousekeeper, icon: "ft-trash-2 danger h5 pointer", onIconClickHandler: () => this.handleDeletion(hk) }, index.h("svg", { slot: "icon", fill: "#ff2441", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "14.25", viewBox: "0 0 448 512" }, index.h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" })))))));
        })))), index.h("ir-sidebar", { showCloseButton: false, open: this.currentTrigger !== null && this.currentTrigger.type !== 'delete', onIrSidebarToggle: () => (this.currentTrigger = null), style: {
                '--sidebar-width': this.currentTrigger ? (this.currentTrigger.type === 'unassigned_units' ? 'max-content' : '40rem') : 'max-content',
            } }, this.renderCurrentTrigger()), ((_a = this.currentTrigger) === null || _a === void 0 ? void 0 : _a.type) === 'delete' && index.h("ir-delete-modal", { user: this.currentTrigger.user })));
    }
    get el() { return index.getElement(this); }
};
IrHkTeam.style = IrHkTeamStyle0 + IrHkTeamStyle1;

const irHkUnassignedUnitsCss = ".sc-ir-hk-unassigned-units-h{display:block;--ir-root-active-color:#1e9ff2;--ir-root-inactive-color:#d2d2d2}table.sc-ir-hk-unassigned-units{width:100%}td.sc-ir-hk-unassigned-units{padding-top:3px;padding-bottom:3px}td.sc-ir-hk-unassigned-units:last-child{text-align:end}.title.sc-ir-hk-unassigned-units{min-width:230px !important}";
const IrHkUnassignedUnitsStyle0 = irHkUnassignedUnitsCss;

const sheetCss$1 = ".sc-ir-hk-unassigned-units-h{height:100%}.sheet-container.sc-ir-hk-unassigned-units{display:flex !important;flex-direction:column !important;background:white;height:100% !important;gap:1rem}.sheet-footer.sc-ir-hk-unassigned-units{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-hk-unassigned-units{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-hk-unassigned-units{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-hk-unassigned-units{flex-direction:row;align-items:center}}";
const IrHkUnassignedUnitsStyle1 = sheetCss$1;

const IrHkUnassignedUnits = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.resetData = index.createEvent(this, "resetData", 7);
        this.user = null;
        this.renderAgain = false;
        this.assignedUnits = new Map();
        this.housekeepingService = new housekeeping_service.HouseKeepingService();
    }
    assignUnit(unit_id, hk_id, checked) {
        if (this.user) {
            const userUnit = this.user.assigned_units.find(unit => unit.id === unit_id);
            if ((checked && userUnit) || (!checked && !userUnit)) {
                this.assignedUnits.delete(unit_id);
            }
            else if (!checked && userUnit) {
                this.assignedUnits.set(unit_id, { hkm_id: hk_id, is_to_assign: false, unit_id });
            }
            else if (checked) {
                const assignment = {
                    hkm_id: hk_id,
                    is_to_assign: true,
                    unit_id,
                };
                this.assignedUnits.set(unit_id, assignment);
            }
        }
        else {
            if (this.assignedUnits.has(unit_id) && !hk_id) {
                this.assignedUnits.delete(unit_id);
                return;
            }
            else {
                this.assignedUnits.set(unit_id, {
                    hkm_id: hk_id,
                    is_to_assign: true,
                    unit_id,
                });
            }
        }
        this.renderAgain = !this.renderAgain;
    }
    async assignUnits() {
        try {
            await this.housekeepingService.manageExposedAssignedUnitToHKM(housekeeping_service.housekeeping_store.default_properties.property_id, [...this.assignedUnits.values()]);
            this.resetData.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.closeSideBar.emit(null);
        }
    }
    renderRooms() {
        var _a;
        if (!this.user) {
            return (_a = housekeeping_service.housekeeping_store.hk_criteria.units_assignments.unassigned_units) === null || _a === void 0 ? void 0 : _a.map(unit => (index.h("tr", { key: unit.id }, index.h("td", { class: "" }, unit.name), index.h("td", { class: "sr-only" }), index.h("td", { class: "pl-1" }, index.h("ir-select", { onSelectChange: e => {
                    let hk_id = e.detail;
                    if (hk_id === '') {
                        hk_id = null;
                    }
                    else {
                        hk_id = +hk_id;
                    }
                    this.assignUnit(unit.id, hk_id, false);
                }, LabelAvailable: false, data: housekeeping_service.housekeeping_store.hk_criteria.housekeepers.map(hk => ({ text: hk.name, value: hk.id.toString() })) })))));
        }
        return calendarData.calendar_data.roomsInfo.map(roomType => {
            var _a;
            console.log(roomType);
            if (!roomType.is_active) {
                return null;
            }
            return (_a = roomType.physicalrooms) === null || _a === void 0 ? void 0 : _a.map(physical_room => {
                var _a, _b, _c;
                if (!physical_room['is_active']) {
                    return null;
                }
                let taken = !((_a = housekeeping_service.housekeeping_store.hk_criteria.units_assignments.unassigned_units) === null || _a === void 0 ? void 0 : _a.find(unit => unit.id.toString() === physical_room.id.toString()));
                let housekeeper = [];
                const assignedRoom = this.assignedUnits.get(physical_room.id);
                if (assignedRoom && assignedRoom.is_to_assign) {
                    housekeeper = [this.user];
                    taken = true;
                }
                else {
                    if (taken) {
                        housekeeper = housekeeping_service.housekeeping_store.hk_criteria.housekeepers.filter(hk => hk.assigned_units.find(unit => unit.id === physical_room.id));
                    }
                }
                return (index.h("tr", { key: physical_room.id }, index.h("td", null, physical_room.name), index.h("td", null, taken ? (_b = housekeeper[0]) === null || _b === void 0 ? void 0 : _b.name : ''), index.h("td", null, index.h("ir-switch", { onCheckChange: e => {
                        const checked = e.detail;
                        this.assignUnit(physical_room.id, this.user.id, checked);
                    }, checked: taken && ((_c = housekeeper[0]) === null || _c === void 0 ? void 0 : _c.id) === this.user.id }))));
            });
        });
    }
    render() {
        return (index.h("div", { key: 'e5ed90ba60355988de32e13495d5f35b0ea0c61d', class: "sheet-container" }, index.h("ir-title", { key: 'c699351d4ac6ae11df7cd1a2da2b7252c74515c1', class: "title sheet-header px-1", displayContext: "sidebar", label: !this.user ? 'Assingn Units' : `Assignment for ${this.user.name}` }), index.h("section", { key: 'e493b69413ea3319c0d43832cb42b8988d1ce676', class: "px-1 sheet-body" }, index.h("table", { key: '2481e2165575dc127eeb8275a2307f01c9839414' }, index.h("thead", { key: '3fa8d0cd7d889466775e8b0f49cb60b6f31cdd20' }, index.h("th", { key: 'ae49c12cea561408a5c6ad85be6f40681b3a70d6', class: "sr-only" }, locales_store.locales.entries.Lcz_RoomName), index.h("th", { key: '4d0012d9745562f477adf01956e709d2add429ff', class: "sr-only" }, locales_store.locales.entries.Lcz_HousekeeperName), index.h("th", { key: '4e025fcbc36f3e2d777a4d78827b6a36619bb3bf', class: "sr-only" }, locales_store.locales.entries.Lcz_Actions)), index.h("tbody", { key: 'f9155708790075d3db7453add74866051c83dc3c' }, this.renderRooms()))), index.h("div", { key: '9bac8af9816c3d2a6a3063342418f2a758d7e177', class: "sheet-footer" }, index.h("ir-button", { key: 'e93af6fafcb3760479f9b3e04b3388f9a9020bb8', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", btn_color: "secondary", text: locales_store.locales.entries.Lcz_Cancel }), index.h("ir-button", { key: '34eb5d01deca9d133e638f1893f77f26d28baaab', isLoading: irInterceptor_store.isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), onClickHandler: this.assignUnits.bind(this), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", text: locales_store.locales.entries.Lcz_Confirm }))));
    }
};
IrHkUnassignedUnits.style = IrHkUnassignedUnitsStyle0 + IrHkUnassignedUnitsStyle1;

const irHkUserCss = ".sc-ir-hk-user-h{display:block}";
const IrHkUserStyle0 = irHkUserCss;

const sheetCss = ".sc-ir-hk-user-h{height:100%}.sheet-container.sc-ir-hk-user{display:flex !important;flex-direction:column !important;background:white;height:100% !important;gap:1rem}.sheet-footer.sc-ir-hk-user{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-hk-user{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-hk-user{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-hk-user{flex-direction:row;align-items:center}}";
const IrHkUserStyle1 = sheetCss;

const IrHkUser = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData", 7);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.user = null;
        this.isEdit = false;
        this.isLoading = false;
        this.autoValidate = false;
        this.userInfo = {
            id: -1,
            mobile: '',
            name: '',
            note: '',
            password: '',
            property_id: null,
            username: null,
            phone_prefix: null,
        };
        this.errors = null;
        this.showPasswordValidation = false;
        this.housekeepingService = new housekeeping_service.HouseKeepingService();
        this.default_properties = {
            token: '',
            language: '',
        };
        this.housekeeperSchema = utils.z.object({
            name: utils.z.string().min(2),
            mobile: utils.z.string().min(1).max(14),
            password: utils.z
                .string()
                .nullable()
                // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/)
                .refine(password => {
                var _a;
                if (this.user && !((_a = this.userInfo) === null || _a === void 0 ? void 0 : _a.password)) {
                    return true;
                }
                return user_service.CONSTANTS.PASSWORD.test(password);
            }, { message: 'Password must be at least 8 characters long.' }),
            username: utils.z
                .string()
                .min(3)
                .refine(async (name) => {
                if (this.user && this.user.username === name) {
                    return true;
                }
                if (name.length >= 3) {
                    return !(await new user_service.UserService().checkUserExistence({ UserName: name }));
                }
                return true;
            }, { message: 'Username already exists.' }),
        });
    }
    async componentWillLoad() {
        const { token, language, property_id } = housekeeping_service.getDefaultProperties();
        this.default_properties = { token, language };
        if (!this.user) {
            this.userInfo['property_id'] = property_id;
            // this.showPasswordValidation = true;
        }
        if (this.user) {
            this.autoValidate = true;
            this.userInfo = Object.assign(Object.assign({}, this.user), { password: '' });
        }
    }
    updateUserField(key, value) {
        this.userInfo = Object.assign(Object.assign({}, this.userInfo), { [key]: value });
    }
    async addUser() {
        try {
            this.isLoading = true;
            if (!this.autoValidate) {
                this.autoValidate = true;
            }
            const toValidateUserInfo = Object.assign(Object.assign({}, this.userInfo), { password: this.user && this.userInfo.password === '' ? this.user.password : this.userInfo.password });
            console.log('toValidateUserInfo', toValidateUserInfo);
            await this.housekeeperSchema.parseAsync(toValidateUserInfo);
            if (this.errors) {
                this.errors = null;
            }
            await this.housekeepingService.editExposedHKM(toValidateUserInfo);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
            const e = {};
            if (error instanceof utils.ZodError) {
                error.issues.map(err => {
                    e[err.path[0]] = true;
                });
                this.errors = e;
            }
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleBlur(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.user || !this.userInfo.name) {
            return;
        }
        const usermame = await this.housekeepingService.generateUserName(this.userInfo.name);
        this.updateUserField('username', usermame);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        return (index.h("div", { key: '5c7282d93c3e1ab8efa135bdf034c3aa7f38d26e', class: "sheet-container" }, index.h("ir-title", { key: '1e9475bd029d4048f52f759e7d16e19283695017', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? locales_store.locales.entries.Lcz_EditHousekeeperProfile : locales_store.locales.entries.Lcz_CreateHousekeeperProfile }), index.h("section", { key: '3dfa97c827d56ca85d63118a0e8edde8ea27862c', class: "px-1 sheet-body" }, index.h("ir-input-text", { key: '2116530bc58f23ffbccf6b1eb641b6360381ef1c', testId: "name", zod: this.housekeeperSchema.pick({ name: true }), wrapKey: "name", autoValidate: this.autoValidate, error: (_a = this.errors) === null || _a === void 0 ? void 0 : _a.name, label: locales_store.locales.entries.Lcz_Name, placeholder: locales_store.locales.entries.Lcz_Name, onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), index.h("ir-phone-input", { key: 'fbffa8d67a2331e6fbe686c80fc97c75dd5238f8', testId: "phone", placeholder: locales_store.locales.entries.Lcz_Mobile, error: ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.mobile) && !((_c = this.userInfo) === null || _c === void 0 ? void 0 : _c.mobile), language: this.default_properties.language, token: this.default_properties.token, default_country: calendarData.calendar_data.country.id, phone_prefix: (_d = this.user) === null || _d === void 0 ? void 0 : _d.phone_prefix, label: locales_store.locales.entries.Lcz_Mobile, value: this.userInfo.mobile, onTextChange: e => {
                this.updateUserField('phone_prefix', e.detail.phone_prefix);
                this.updateUserField('mobile', e.detail.mobile);
            } }), index.h("div", { key: '2b5de2f09dfa179c92aae4bce3e04462113f5845', class: "mb-1" }, index.h("ir-textarea", { key: 'c5e27452920df44ce7a2c064b17fa1c7f442f3d1', testId: "note", variant: "prepend", maxLength: 250, label: locales_store.locales.entries.Lcz_Note, placeholder: locales_store.locales.entries.Lcz_Note, value: this.userInfo.note, onTextChange: e => this.updateUserField('note', e.detail) })), index.h("ir-input-text", { key: '2ee3e8c2e51fe661b5b7bfc121bc2ad77cbc35b9', testId: "username", zod: this.housekeeperSchema.pick({ username: true }), wrapKey: "username", error: (_e = this.errors) === null || _e === void 0 ? void 0 : _e.username, asyncParse: true, autoValidate: this.user ? (((_f = this.userInfo) === null || _f === void 0 ? void 0 : _f.username) !== this.user.username ? true : false) : this.autoValidate, errorMessage: ((_g = this.errors) === null || _g === void 0 ? void 0 : _g.username) && ((_j = (_h = this.userInfo) === null || _h === void 0 ? void 0 : _h.username) === null || _j === void 0 ? void 0 : _j.length) >= 3 ? locales_store.locales.entries.Lcz_UsernameAlreadyExists : undefined, label: locales_store.locales.entries.Lcz_Username, placeholder: locales_store.locales.entries.Lcz_Username, value: this.userInfo.username, onTextChange: e => this.updateUserField('username', e.detail) }), index.h("ir-input-text", { key: 'd02bd9f9eeac2d7b412d2c76e7193916c47411d6', testId: "password", autoValidate: this.user ? (!((_k = this.userInfo) === null || _k === void 0 ? void 0 : _k.password) ? false : true) : this.autoValidate, label: locales_store.locales.entries.Lcz_Password, value: this.userInfo.password, type: "password", maxLength: 16, zod: this.housekeeperSchema.pick({ password: true }), wrapKey: "password", error: (_l = this.errors) === null || _l === void 0 ? void 0 : _l.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && index.h("ir-password-validator", { key: '5f5bec5a0794aabcd16e4a95d491c21d3442a40b', password: this.userInfo.password })), index.h("div", { key: 'b5b2172c6c97b0127f1b164a198658bce34aaa7f', class: "sheet-footer" }, index.h("ir-button", { key: 'def35652970d7a0acea633e571ae414853e1ee38', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: locales_store.locales.entries.Lcz_Cancel }), index.h("ir-button", { key: '9c97a1eb751a225a9dc013e8cae1b2d2988738f2', "data-testid": "save", isLoading: this.isLoading, onClickHandler: this.addUser.bind(this), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", text: locales_store.locales.entries.Lcz_Save }))));
    }
};
IrHkUser.style = IrHkUserStyle0 + IrHkUserStyle1;

const irPopoverCss = ":host{display:block;width:100%}*{box-sizing:border-box}.popover-trigger{all:unset;cursor:pointer}.popover-trigger:hover,.popover-trigger:focus{color:#000}";
const IrPopoverStyle0 = irPopoverCss;

const IrPopover = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irPopoverLeft = '10px';
        this.placement = 'auto';
        this.trigger = 'focus';
        this.renderContentAsHtml = false;
        this.initialized = false;
    }
    componentDidLoad() {
        if (this.initialized) {
            return;
        }
        this.initializePopover();
    }
    initializePopover() {
        $(this.popoverTrigger).popover({
            trigger: this.trigger,
            content: this.content,
            placement: this.placement,
            html: this.renderContentAsHtml,
        });
        this.initialized = true;
    }
    disconnectedCallback() {
        $(this.popoverTrigger).popover('dispose');
    }
    render() {
        return (index.h(index.Host, { key: '7aead9481f8eee2deca5fa0a207af40e93e38cfa', style: { '--ir-popover-left': this.irPopoverLeft } }, this.trigger !== 'focus' ? (index.h("p", { ref: el => (this.popoverTrigger = el), class: "popover-title m-0 p-0", style: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                cursor: 'pointer',
            } }, index.h("slot", null))) : (index.h("button", { tabindex: "0", class: "popover-trigger", ref: el => (this.popoverTrigger = el) }, index.h("slot", null)))));
    }
    get el() { return index.getElement(this); }
};
IrPopover.style = IrPopoverStyle0;

exports.ir_delete_modal = IrDeleteModal;
exports.ir_hk_team = IrHkTeam;
exports.ir_hk_unassigned_units = IrHkUnassignedUnits;
exports.ir_hk_user = IrHkUser;
exports.ir_popover = IrPopover;

//# sourceMappingURL=ir-delete-modal_5.cjs.entry.js.map
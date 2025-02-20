'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aeea0adf.js');
const Token = require('./Token-049041c2.js');
const housekeeping_service = require('./housekeeping.service-579a1b92.js');
const room_service = require('./room.service-a8c2c6cd.js');
const housekeeping_store = require('./housekeeping.store-d0cb71d9.js');
const irInterceptor_store = require('./ir-interceptor.store-a052c48d.js');
const locales_store = require('./locales.store-7abd65bc.js');
const moment = require('./moment-1780b03a.js');
const v4 = require('./v4-9b297151.js');
const calendarData = require('./calendar-data-cd8e8374.js');
require('./axios-6e678d52.js');
require('./index-3cfd4bf8.js');

const irHkTasksCss = ".sc-ir-hk-tasks-h{display:block}@media only screen and (max-width: 900px){.table-container.sc-ir-hk-tasks{width:max-content !important}}";
const IrHkTasksStyle0 = irHkTasksCss;

const IrHkTasks = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clearSelectedHkTasks = index.createEvent(this, "clearSelectedHkTasks", 7);
        this.language = '';
        this.ticket = '';
        this.isLoading = false;
        this.selectedDuration = '';
        this.selectedHouseKeeper = '0';
        this.selectedRoom = null;
        this.archiveOpened = false;
        this.tasks = [];
        this.selectedTasks = [];
        this.hkNameCache = {};
        this.roomService = new room_service.RoomService();
        this.houseKeepingService = new housekeeping_service.HouseKeepingService();
        this.token = new Token.Token();
    }
    componentWillLoad() {
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.init();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.init();
    }
    handleCloseSidebar(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.isSidebarOpen = false;
    }
    async init() {
        try {
            this.isLoading = true;
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [
                this.houseKeepingService.getHkTasks({ property_id: this.property_id, from_date: moment.hooks().format('YYYY-MM-DD'), to_date: moment.hooks().format('YYYY-MM-DD') }),
                this.houseKeepingService.getExposedHKSetup(this.property_id),
                this.roomService.fetchLanguage(this.language),
            ];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            const results = await Promise.all(requests);
            const tasks = results[0];
            if (tasks) {
                this.updateTasks(tasks);
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    buildHousekeeperNameCache() {
        var _a, _b;
        this.hkNameCache = {};
        (_b = (_a = housekeeping_store.housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.forEach(hk => {
            if (hk.id != null && hk.name != null) {
                this.hkNameCache[hk.id] = hk.name;
            }
        });
    }
    updateTasks(tasks) {
        this.buildHousekeeperNameCache();
        this.tasks = tasks.map(t => (Object.assign(Object.assign({}, t), { id: v4.v4(), housekeeper: (() => {
                var _a, _b, _c;
                const name = this.hkNameCache[t.hkm_id];
                if (name) {
                    return name;
                }
                const hkName = (_c = (_b = (_a = housekeeping_store.housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.find(hk => hk.id === t.hkm_id)) === null || _c === void 0 ? void 0 : _c.name;
                this.hkNameCache[t.hkm_id] = hkName;
                return hkName;
            })() })));
    }
    handleHeaderButtonPress(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { name } = e.detail;
        switch (name) {
            case 'cleaned':
                (_a = this.modal) === null || _a === void 0 ? void 0 : _a.openModal();
                break;
            case 'export':
                break;
            case 'archive':
                this.isSidebarOpen = true;
                break;
        }
    }
    async handleModalConfirmation(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            if (this.selectedTasks.length === 0) {
                return;
            }
            await this.houseKeepingService.executeHKAction({
                actions: this.selectedTasks.map(t => ({ description: 'Cleaned', hkm_id: t.hkm_id === 0 ? null : t.hkm_id, unit_id: t.unit.id })),
            });
            await this.fetchTasksWithFilters();
        }
        finally {
            this.selectedTasks = [];
            this.clearSelectedHkTasks.emit();
            this.modal.closeModal();
        }
    }
    async applyFilters(e) {
        try {
            this.isApplyFiltersLoading = true;
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.filters = Object.assign({}, e.detail);
            await this.fetchTasksWithFilters();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isApplyFiltersLoading = false;
        }
    }
    async fetchTasksWithFilters() {
        console.log(this.filters);
        const { cleaning_periods, housekeepers, cleaning_frequencies, dusty_units, highlight_check_ins } = this.filters;
        const tasks = await this.houseKeepingService.getHkTasks({
            housekeepers,
            cleaning_frequencies: cleaning_frequencies.code,
            dusty_units: dusty_units.code,
            highlight_window: highlight_check_ins.code,
            property_id: this.property_id,
            from_date: moment.hooks().format('YYYY-MM-DD'),
            to_date: cleaning_periods.code,
        });
        if (tasks) {
            this.updateTasks(tasks);
        }
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("ir-tasks-header", { onHeaderButtonPress: this.handleHeaderButtonPress.bind(this), isCleanedEnabled: this.selectedTasks.length > 0 }), index.h("div", { class: "d-flex flex-column flex-md-row mt-1 ", style: { gap: '1rem' } }, index.h("ir-tasks-filters", { isLoading: this.isApplyFiltersLoading, onApplyFilters: e => {
                this.applyFilters(e);
            } }), index.h("ir-tasks-table", { onRowSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedTasks = e.detail;
            }, class: "flex-grow-1 w-100", tasks: this.tasks }))), index.h("ir-modal", { autoClose: false, ref: el => (this.modal = el), isLoading: irInterceptor_store.isRequestPending('/Execute_HK_Action'), onConfirmModal: this.handleModalConfirmation.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales_store.locales.entries.Lcz_NO, rightBtnText: locales_store.locales.entries.Lcz_Yes, leftBtnColor: "secondary", rightBtnColor: 'primary', modalTitle: locales_store.locales.entries.Lcz_Confirmation, modalBody: 'Update selected unit(s) to Clean' }), index.h("ir-sidebar", { open: this.isSidebarOpen, side: 'right', id: "editGuestInfo", onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isSidebarOpen = false;
            }, showCloseButton: false }, index.h("ir-hk-archive", { slot: "sidebar-body" }))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrHkTasks.style = IrHkTasksStyle0;

const irHousekeepingCss = ".sc-ir-housekeeping-h{display:block}";
const IrHousekeepingStyle0 = irHousekeepingCss;

const IrHousekeeping = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.language = '';
        this.ticket = '';
        this.isLoading = false;
        this.roomService = new room_service.RoomService();
        this.houseKeepingService = new housekeeping_service.HouseKeepingService();
        this.token = new Token.Token();
    }
    componentWillLoad() {
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.houseKeepingService.getExposedHKSetup(this.propertyid);
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            let propertyId = this.propertyid;
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            housekeeping_store.updateHKStore('default_properties', { token: this.ticket, property_id: propertyId, language: this.language });
            const requests = [this.houseKeepingService.getExposedHKSetup(propertyId), this.roomService.fetchLanguage(this.language, ['_HK_FRONT'])];
            if (this.propertyid) {
                requests.unshift(this.roomService.getExposedProperty({
                    id: propertyId,
                    language: this.language,
                    is_backend: true,
                }));
            }
            await Promise.all(requests);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-interceptor", null), index.h("ir-toast", null), index.h("section", { class: "p-1" }, index.h("h4", { class: "mb-2" }, "Housekeeping & Check-In Setup"), index.h("div", { class: "card p-1" }, index.h("ir-title", { borderShown: true, label: "Check-In Mode" }), index.h("div", { class: 'd-flex align-items-center' }, index.h("p", { class: "my-0 py-0 mr-1  " }, "Check in & Check out guests automatically:"), index.h("ir-select", { LabelAvailable: false, showFirstOption: false, selectedValue: calendarData.calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.roomService.SetAutomaticCheckInOut({
                    property_id: this.propertyid,
                    flag: e.detail === 'auto',
                });
            }, data: [
                { text: `Yes, as per the property's policy.`, value: 'auto' },
                { text: 'No, I will do it manually. ', value: 'manual' },
            ] }))), index.h("ir-hk-team", { class: "mb-1" }))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrHousekeeping.style = IrHousekeepingStyle0;

exports.ir_hk_tasks = IrHkTasks;
exports.ir_housekeeping = IrHousekeeping;

//# sourceMappingURL=ir-hk-tasks_2.cjs.entry.js.map
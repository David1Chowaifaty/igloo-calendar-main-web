'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const Token = require('./Token-3d0cc874.js');
const housekeeping_service = require('./housekeeping.service-c883b967.js');
const room_service = require('./room.service-5878ce13.js');
const irInterceptor_store = require('./ir-interceptor.store-77ca6836.js');
const locales_store = require('./locales.store-0cac7e5d.js');
const moment = require('./moment-1780b03a.js');
const utils = require('./utils-21d8790c.js');
const v4 = require('./v4-9b297151.js');
const calendarData = require('./calendar-data-99f4dccd.js');
const booking_service = require('./booking.service-252110f5.js');
const user_service = require('./user.service-3f512f5e.js');
const index$1 = require('./index-84e84862.js');
require('./axios-6e678d52.js');
require('./index-467172e1.js');
require('./index-db8b30d9.js');

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
        this.table_sorting = new Map();
    }
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
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
    handleSortingChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { field, direction } = e.detail;
        console.log(e.detail);
        if (field === 'date') {
            return;
        }
        this.table_sorting.set(field, direction);
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
            const tasksResult = results[0];
            if (tasksResult === null || tasksResult === void 0 ? void 0 : tasksResult.tasks) {
                this.updateTasks(tasksResult.tasks);
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
        (_b = (_a = housekeeping_service.housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.forEach(hk => {
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
                const hkName = (_c = (_b = (_a = housekeeping_service.housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.find(hk => hk.id === t.hkm_id)) === null || _c === void 0 ? void 0 : _c.name;
                this.hkNameCache[t.hkm_id] = hkName;
                return hkName;
            })() })));
    }
    async handleHeaderButtonPress(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { name } = e.detail;
        switch (name) {
            case 'cleaned':
                (_a = this.modal) === null || _a === void 0 ? void 0 : _a.openModal();
                break;
            case 'export':
                const sortingArray = Array.from(this.table_sorting.entries()).map(([key, value]) => ({
                    key,
                    value,
                }));
                console.log(sortingArray);
                const { url } = await this.fetchTasksWithFilters(true);
                utils.downloadFile(url);
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
                actions: this.selectedTasks.map(t => ({ description: 'Cleaned', hkm_id: t.hkm_id === 0 ? null : t.hkm_id, unit_id: t.unit.id, booking_nbr: t.booking_nbr })),
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
    async fetchTasksWithFilters(export_to_excel = false) {
        var _a;
        const { cleaning_periods, housekeepers, cleaning_frequencies, dusty_units, highlight_check_ins } = (_a = this.filters) !== null && _a !== void 0 ? _a : {};
        const { tasks, url } = await this.houseKeepingService.getHkTasks({
            housekeepers,
            cleaning_frequency: cleaning_frequencies === null || cleaning_frequencies === void 0 ? void 0 : cleaning_frequencies.code,
            dusty_window: dusty_units === null || dusty_units === void 0 ? void 0 : dusty_units.code,
            highlight_window: highlight_check_ins === null || highlight_check_ins === void 0 ? void 0 : highlight_check_ins.code,
            property_id: this.property_id,
            from_date: moment.hooks().format('YYYY-MM-DD'),
            to_date: (cleaning_periods === null || cleaning_periods === void 0 ? void 0 : cleaning_periods.code) || moment.hooks().format('YYYY-MM-DD'),
            is_export_to_excel: export_to_excel,
        });
        console.log(tasks);
        if (tasks) {
            this.updateTasks(tasks);
        }
        return { tasks, url };
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, { "data-testid": "hk_tasks_base" }, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("ir-tasks-header", { onHeaderButtonPress: this.handleHeaderButtonPress.bind(this), isCleanedEnabled: this.selectedTasks.length > 0 }), index.h("div", { class: "d-flex flex-column flex-md-row mt-1 ", style: { gap: '1rem' } }, index.h("ir-tasks-filters", { isLoading: this.isApplyFiltersLoading, onApplyFilters: e => {
                this.applyFilters(e);
            } }), index.h("ir-tasks-table", { onRowSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedTasks = e.detail;
            }, class: "flex-grow-1 w-100", tasks: this.tasks }))), index.h("ir-modal", { autoClose: false, ref: el => (this.modal = el), isLoading: irInterceptor_store.isRequestPending('/Execute_HK_Action'), onConfirmModal: this.handleModalConfirmation.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales_store.locales.entries.Lcz_NO, rightBtnText: locales_store.locales.entries.Lcz_Yes, leftBtnColor: "secondary", rightBtnColor: 'primary', modalTitle: locales_store.locales.entries.Lcz_Confirmation, modalBody: 'Update selected unit(s) to Clean' }), index.h("ir-sidebar", { open: this.isSidebarOpen, id: "editGuestInfo", onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isSidebarOpen = false;
            },
            // sidebarStyles={{
            //   width: '80vw',
            // }}
            showCloseButton: false }, this.isSidebarOpen && index.h("ir-hk-archive", { ticket: this.token.getToken(), propertyId: this.property_id, slot: "sidebar-body" }))));
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
        this.toast = index.createEvent(this, "toast", 7);
        this.language = '';
        this.ticket = '';
        this.isLoading = false;
        this.roomService = new room_service.RoomService();
        this.houseKeepingService = new housekeeping_service.HouseKeepingService();
        this.token = new Token.Token();
    }
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
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
                    include_sales_rate_plans: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            housekeeping_service.updateHKStore('default_properties', { token: this.ticket, property_id: propertyId, language: this.language });
            const requests = [];
            if (calendarData.calendar_data.housekeeping_enabled) {
                requests.push(this.houseKeepingService.getExposedHKSetup(propertyId));
            }
            requests.push(this.roomService.fetchLanguage(this.language, ['_HK_FRONT', '_PMS_FRONT']));
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: propertyId,
                    language: this.language,
                    is_backend: true,
                    include_sales_rate_plans: true,
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
    saveAutomaticCheckInCheckout(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        try {
            this.roomService.SetAutomaticCheckInOut({
                property_id: this.propertyid,
                flag: e.detail === 'auto',
            });
            this.toast.emit({
                position: 'top-right',
                title: 'Saved Successfully',
                description: '',
                type: 'success',
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-interceptor", null), index.h("ir-toast", null), index.h("section", { class: "p-1" }, index.h("h3", { class: "mb-2" }, locales_store.locales.entries.Lcz_HouseKeepingAndCheckInSetup), index.h("div", { class: "card p-1" }, index.h("ir-title", { borderShown: true, label: "Check-In Mode" }), index.h("div", { class: 'd-flex align-items-center' }, index.h("p", { class: "my-0 py-0 mr-1  " }, locales_store.locales.entries.Lcz_CheckInOutGuestsAutomatically), index.h("ir-select", { LabelAvailable: false, showFirstOption: false, selectedValue: calendarData.calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onSelectChange: e => this.saveAutomaticCheckInCheckout(e), data: [
                { text: locales_store.locales.entries.Lcz_YesAsPerPropertyPolicy, value: 'auto' },
                { text: locales_store.locales.entries.Lcz_NoIWillDoItManually, value: 'manual' },
            ] }))), calendarData.calendar_data.housekeeping_enabled && index.h("ir-hk-team", { class: "mb-1" }))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrHousekeeping.style = IrHousekeepingStyle0;

const irUserManagementCss = ".sc-ir-user-management-h{display:block;height:100%}";
const IrUserManagementStyle0 = irUserManagementCss;

const IrUserManagement = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.language = '';
        this.isSuperAdmin = true;
        this.isLoading = true;
        this.users = [];
        this.allowedUsersTypes = [];
        this.token = new Token.Token();
        this.roomService = new room_service.RoomService();
        this.userService = new user_service.UserService();
        this.bookingService = new booking_service.BookingService();
        this.userTypes = new Map();
        this.superAdminId = '5';
    }
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        if (this.ticket) {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.fetchUsers();
    }
    async initializeApp() {
        try {
            if (this.baseUrl) {
                this.token.setBaseUrl(this.baseUrl);
            }
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
            const requests = [this.fetchUserTypes(), this.fetchUsers(), this.roomService.fetchLanguage(this.language, ['_USER_MGT'])];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
            this.socket = index$1.lookup('https://realtime.igloorooms.com/');
            this.socket.on('MSG', async (msg) => {
                await this.handleSocketMessage(msg);
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleSocketMessage(msg) {
        const msgAsObject = JSON.parse(msg);
        if (!msgAsObject) {
            return;
        }
        const { REASON, KEY, PAYLOAD } = msgAsObject;
        if (KEY.toString() !== this.property_id.toString()) {
            return;
        }
        let result = JSON.parse(PAYLOAD);
        console.log(KEY, result);
        // const reasonHandlers: Partial<Record<bookingReasons, Function>> = {
        //   DORESERVATION: this.updateUserVerificationStatus,
        // };
        const reasonHandlers = {
            EMAIL_VERIFIED: this.updateUserVerificationStatus,
        };
        const handler = reasonHandlers[REASON];
        if (handler) {
            await handler.call(this, result);
        }
        else {
            console.warn(`Unhandled REASON: ${REASON}`);
        }
    }
    updateUserVerificationStatus(result) {
        const users = [...this.users];
        const idx = users.findIndex(u => u.id === result.id);
        if (idx === -1) {
            console.warn(`User ${result.id} not found`);
            return;
        }
        users[idx] = Object.assign(Object.assign({}, users[idx]), { is_email_verified: true });
        this.users = users;
    }
    async fetchUsers() {
        const users = await this.userService.getExposedPropertyUsers({ property_id: this.propertyid });
        this.users = [...users].sort((u1, u2) => {
            const priority = (u) => {
                const t = u.type.toString();
                if (t === this.superAdminId)
                    return 0;
                if (t === '17')
                    return 1;
                return 2;
            };
            //sort by priority
            const p1 = priority(u1), p2 = priority(u2);
            if (p1 !== p2) {
                return p1 - p2;
            }
            // //sort by user id
            // if (p1 === 1) {
            //   const id1 = u1.id.toString(),
            //     id2 = u2.id.toString(),
            //     me = this.userId.toString();
            //   if (id1 === me) return -1; // u1 is me → goes before u2
            //   if (id2 === me) return 1; // u2 is me → u1 goes after
            // }
            // 3) sort by username
            return u1.username.localeCompare(u2.username);
        });
    }
    async fetchUserTypes() {
        var _a, _b, _c, _d;
        const res = await Promise.all([this.bookingService.getSetupEntriesByTableName('_USER_TYPE'), this.bookingService.getLov()]);
        const allowedUsers = (_b = (_a = res[1]) === null || _a === void 0 ? void 0 : _a.My_Result) === null || _b === void 0 ? void 0 : _b.allowed_user_types;
        for (const e of res[0]) {
            const value = e[`CODE_VALUE_${(_d = (_c = this.language) === null || _c === void 0 ? void 0 : _c.toUpperCase()) !== null && _d !== void 0 ? _d : 'EN'}`];
            if (allowedUsers.find(f => f.code === e.CODE_NAME)) {
                this.allowedUsersTypes.push({ code: e.CODE_NAME, value });
            }
            this.userTypes.set(e.CODE_NAME.toString(), value);
        }
    }
    disconnectedCallback() {
        this.socket.disconnect();
    }
    render() {
        var _a, _b;
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("ir-loading-screen", null)));
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", { suppressToastEndpoints: ['/Change_User_Pwd', '/Handle_Exposed_User'] }), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("div", { class: "d-flex  pb-2 align-items-center justify-content-between" }, index.h("h3", { class: "mb-1 mb-md-0" }, locales_store.locales.entries.Lcz_ExtranetUsers)), index.h("div", { class: "", style: { gap: '1rem' } }, index.h("ir-user-management-table", { property_id: this.property_id, baseUserTypeCode: this.baseUserTypeCode, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: [this.superAdminId, '17'].includes((_a = this.userTypeCode) === null || _a === void 0 ? void 0 : _a.toString()), userTypes: this.userTypes, class: "card", isSuperAdmin: ((_b = this.userTypeCode) === null || _b === void 0 ? void 0 : _b.toString()) === this.superAdminId, users: this.users })))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrUserManagement.style = IrUserManagementStyle0;

exports.ir_hk_tasks = IrHkTasks;
exports.ir_housekeeping = IrHousekeeping;
exports.ir_user_management = IrUserManagement;

//# sourceMappingURL=ir-hk-tasks_3.cjs.entry.js.map
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { H as HouseKeepingService } from './housekeeping.service.js';
import { R as RoomService } from './room.service.js';
import { h as housekeeping_store } from './housekeeping.store.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { J as downloadFile } from './utils.js';
import { s as setLoading, u as updateTaskList, a as updateTasks, h as hkTasksStore, c as clearSelectedTasks, b as updateSelectedTasks } from './hk-tasks.store.js';
import { d as defineCustomElement$$ } from './igl-application-info2.js';
import { d as defineCustomElement$_ } from './igl-block-dates-view2.js';
import { d as defineCustomElement$Z } from './igl-book-property2.js';
import { d as defineCustomElement$Y } from './igl-book-property-footer2.js';
import { d as defineCustomElement$X } from './igl-book-property-header2.js';
import { d as defineCustomElement$W } from './igl-booking-form2.js';
import { d as defineCustomElement$V } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$U } from './igl-date-range2.js';
import { d as defineCustomElement$T } from './igl-property-booked-by2.js';
import { d as defineCustomElement$S } from './igl-rate-plan2.js';
import { d as defineCustomElement$R } from './igl-room-type2.js';
import { d as defineCustomElement$Q } from './ir-autocomplete2.js';
import { d as defineCustomElement$P } from './ir-booking-details2.js';
import { d as defineCustomElement$O } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$N } from './ir-booking-header2.js';
import { d as defineCustomElement$M } from './ir-button2.js';
import { d as defineCustomElement$L } from './ir-checkbox2.js';
import { d as defineCustomElement$K } from './ir-combobox2.js';
import { d as defineCustomElement$J } from './ir-country-picker2.js';
import { d as defineCustomElement$I } from './ir-date-picker2.js';
import { d as defineCustomElement$H } from './ir-date-range2.js';
import { d as defineCustomElement$G } from './ir-date-view2.js';
import { d as defineCustomElement$F } from './ir-dialog2.js';
import { d as defineCustomElement$E } from './ir-events-log2.js';
import { d as defineCustomElement$D } from './ir-extra-service2.js';
import { d as defineCustomElement$C } from './ir-extra-service-config2.js';
import { d as defineCustomElement$B } from './ir-extra-services2.js';
import { d as defineCustomElement$A } from './ir-guest-info2.js';
import { d as defineCustomElement$z } from './ir-hk-archive2.js';
import { d as defineCustomElement$y } from './ir-icon2.js';
import { d as defineCustomElement$x } from './ir-icons2.js';
import { d as defineCustomElement$w } from './ir-input-text2.js';
import { d as defineCustomElement$v } from './ir-interceptor2.js';
import { d as defineCustomElement$u } from './ir-label2.js';
import { d as defineCustomElement$t } from './ir-loading-screen2.js';
import { d as defineCustomElement$s } from './ir-modal2.js';
import { d as defineCustomElement$r } from './ir-otp2.js';
import { d as defineCustomElement$q } from './ir-otp-modal2.js';
import { d as defineCustomElement$p } from './ir-pagination2.js';
import { d as defineCustomElement$o } from './ir-payment-actions2.js';
import { d as defineCustomElement$n } from './ir-payment-details2.js';
import { d as defineCustomElement$m } from './ir-phone-input2.js';
import { d as defineCustomElement$l } from './ir-pickup2.js';
import { d as defineCustomElement$k } from './ir-pickup-view2.js';
import { d as defineCustomElement$j } from './ir-pms-logs2.js';
import { d as defineCustomElement$i } from './ir-price-input2.js';
import { d as defineCustomElement$h } from './ir-range-picker2.js';
import { d as defineCustomElement$g } from './ir-reservation-information2.js';
import { d as defineCustomElement$f } from './ir-room2.js';
import { d as defineCustomElement$e } from './ir-room-guests2.js';
import { d as defineCustomElement$d } from './ir-select2.js';
import { d as defineCustomElement$c } from './ir-sidebar2.js';
import { d as defineCustomElement$b } from './ir-spinner2.js';
import { d as defineCustomElement$a } from './ir-tasks-card2.js';
import { d as defineCustomElement$9 } from './ir-tasks-filters2.js';
import { d as defineCustomElement$8 } from './ir-tasks-header2.js';
import { d as defineCustomElement$7 } from './ir-tasks-table2.js';
import { d as defineCustomElement$6 } from './ir-tasks-table-pagination2.js';
import { d as defineCustomElement$5 } from './ir-textarea2.js';
import { d as defineCustomElement$4 } from './ir-title2.js';
import { d as defineCustomElement$3 } from './ir-toast2.js';
import { d as defineCustomElement$2 } from './ir-tooltip2.js';
import { d as defineCustomElement$1 } from './ota-label2.js';
import { v as v4 } from './v4.js';

const irHkTasksCss = ".sc-ir-hk-tasks-h{display:block;box-sizing:border-box}.sc-ir-hk-tasks-h *.sc-ir-hk-tasks{box-sizing:border-box}.tasks-view.sc-ir-hk-tasks{display:flex;flex-direction:column}@media (min-width: 1024px){.tasks-view.sc-ir-hk-tasks{flex-direction:row}}";
const IrHkTasksStyle0 = irHkTasksCss;

const IrHkTasks = /*@__PURE__*/ proxyCustomElement(class IrHkTasks extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.clearSelectedHkTasks = createEvent(this, "clearSelectedHkTasks", 7);
        this.language = '';
        this.ticket = '';
        this.isLoading = false;
        this.selectedDuration = '';
        this.selectedHouseKeeper = '0';
        this.selectedRoom = null;
        this.archiveOpened = false;
        this.hkNameCache = {};
        this.roomService = new RoomService();
        this.houseKeepingService = new HouseKeepingService();
        this.token = new Token();
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
            setLoading(true);
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
                this.houseKeepingService.getHkTasks({ property_id: this.property_id, from_date: hooks().format('YYYY-MM-DD'), to_date: hooks().format('YYYY-MM-DD') }),
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
            updateTaskList();
            if (tasksResult === null || tasksResult === void 0 ? void 0 : tasksResult.tasks) {
                this.updateTasks(tasksResult.tasks);
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
            setLoading(false);
        }
    }
    buildHousekeeperNameCache() {
        var _a, _b;
        this.hkNameCache = {};
        (_b = (_a = housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.forEach(hk => {
            if (hk.id != null && hk.name != null) {
                this.hkNameCache[hk.id] = hk.name;
            }
        });
    }
    updateTasks(tasks) {
        this.buildHousekeeperNameCache();
        updateTasks(tasks.map(t => (Object.assign(Object.assign({}, t), { id: v4(), housekeeper: (() => {
                var _a, _b, _c;
                const name = this.hkNameCache[t.hkm_id];
                if (name) {
                    return name;
                }
                const hkName = (_c = (_b = (_a = housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.find(hk => hk.id === t.hkm_id)) === null || _c === void 0 ? void 0 : _c.name;
                this.hkNameCache[t.hkm_id] = hkName;
                return hkName;
            })() }))));
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
                downloadFile(url);
                break;
            case 'archive':
                this.isSidebarOpen = true;
                break;
        }
    }
    handleSelectedTaskCleaningEvent(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectedTask = e.detail;
        (_a = this.modal) === null || _a === void 0 ? void 0 : _a.openModal();
    }
    async handleModalConfirmation(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            if (hkTasksStore.selectedTasks.length === 0) {
                return;
            }
            await this.houseKeepingService.executeHKAction({
                actions: hkTasksStore.selectedTasks.map(t => ({ description: 'Cleaned', hkm_id: t.hkm_id === 0 ? null : t.hkm_id, unit_id: t.unit.id, booking_nbr: t.booking_nbr })),
            });
            await this.fetchTasksWithFilters();
        }
        finally {
            clearSelectedTasks();
            if (this.selectedTask) {
                this.selectedTask = null;
            }
            // this.clearSelectedTasks.emit();
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
            from_date: hooks().format('YYYY-MM-DD'),
            to_date: (cleaning_periods === null || cleaning_periods === void 0 ? void 0 : cleaning_periods.code) || hooks().format('YYYY-MM-DD'),
            is_export_to_excel: export_to_excel,
        });
        console.log(tasks);
        if (tasks) {
            this.updateTasks(tasks);
        }
        return { tasks, url };
    }
    render() {
        var _a, _b;
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, { "data-testid": "hk_tasks_base" }, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-1 d-flex flex-column", style: { gap: '1rem' } }, h("h3", null, "Housekeeping Tasks"), h("div", { class: "tasks-view ", style: { gap: '1rem' } }, h("ir-tasks-filters", { isLoading: this.isApplyFiltersLoading, onApplyFilters: e => {
                this.applyFilters(e);
            } }), h("div", { class: "d-flex w-100 flex-column", style: { gap: '1rem' } }, h("ir-tasks-table", { onRowSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                updateSelectedTasks(e.detail);
            }, class: "flex-grow-1 w-100" })))), h("ir-modal", { autoClose: false, ref: el => (this.modal = el), isLoading: isRequestPending('/Execute_HK_Action'), onConfirmModal: this.handleModalConfirmation.bind(this), onCancelModal: () => {
                if (this.selectedTask) {
                    clearSelectedTasks();
                    this.selectedTask = null;
                }
            }, iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales.entries.Lcz_Cancel, rightBtnText: locales.entries.Lcz_Confirm, leftBtnColor: "secondary", rightBtnColor: 'primary', modalTitle: locales.entries.Lcz_Confirmation, modalBody: this.selectedTask ? `Update ${(_b = (_a = this.selectedTask) === null || _a === void 0 ? void 0 : _a.unit) === null || _b === void 0 ? void 0 : _b.name} to Clean` : 'Update selected unit(s) to Clean' }), h("ir-sidebar", { open: this.isSidebarOpen, id: "editGuestInfo", onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isSidebarOpen = false;
            },
            // sidebarStyles={{
            //   width: '80vw',
            // }}
            showCloseButton: false }, this.isSidebarOpen && h("ir-hk-archive", { ticket: this.token.getToken(), propertyId: this.property_id, slot: "sidebar-body" }))));
    }
    get el() { return this; }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
    static get style() { return IrHkTasksStyle0; }
}, [2, "ir-hk-tasks", {
        "language": [1],
        "ticket": [1],
        "propertyid": [2],
        "p": [1],
        "baseUrl": [1, "base-url"],
        "isLoading": [32],
        "selectedDuration": [32],
        "selectedHouseKeeper": [32],
        "selectedRoom": [32],
        "archiveOpened": [32],
        "property_id": [32],
        "isSidebarOpen": [32],
        "isApplyFiltersLoading": [32],
        "filters": [32],
        "selectedTask": [32]
    }, [[0, "closeSideBar", "handleCloseSidebar"], [0, "sortingChanged", "handleSortingChanged"], [0, "headerButtonPress", "handleHeaderButtonPress"], [0, "cleanSelectedTask", "handleSelectedTaskCleaningEvent"]], {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hk-tasks", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-footer", "igl-book-property-header", "igl-booking-form", "igl-booking-overview-page", "igl-date-range", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "ir-autocomplete", "ir-booking-details", "ir-booking-extra-note", "ir-booking-header", "ir-button", "ir-checkbox", "ir-combobox", "ir-country-picker", "ir-date-picker", "ir-date-range", "ir-date-view", "ir-dialog", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-services", "ir-guest-info", "ir-hk-archive", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-label", "ir-loading-screen", "ir-modal", "ir-otp", "ir-otp-modal", "ir-pagination", "ir-payment-actions", "ir-payment-details", "ir-phone-input", "ir-pickup", "ir-pickup-view", "ir-pms-logs", "ir-price-input", "ir-range-picker", "ir-reservation-information", "ir-room", "ir-room-guests", "ir-select", "ir-sidebar", "ir-spinner", "ir-tasks-card", "ir-tasks-filters", "ir-tasks-header", "ir-tasks-table", "ir-tasks-table-pagination", "ir-textarea", "ir-title", "ir-toast", "ir-tooltip", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hk-tasks":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHkTasks);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-guest-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-hk-archive":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-payment-actions":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-tasks-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-tasks-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-tasks-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-tasks-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-tasks-table-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-textarea":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ota-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrHkTasks as I, defineCustomElement as d };

//# sourceMappingURL=ir-hk-tasks2.js.map
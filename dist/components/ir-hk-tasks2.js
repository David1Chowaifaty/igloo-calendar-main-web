import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { H as HouseKeepingService } from './housekeeping.service.js';
import { R as RoomService } from './room.service.js';
import { h as housekeeping_store } from './housekeeping.store.js';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { s as downloadFile } from './utils.js';
import { s as setLoading, u as updateTasks, h as hkTasksStore, c as clearSelectedTasks, a as updateSelectedTasks } from './hk-tasks.store.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$1u } from './igl-application-info2.js';
import { d as defineCustomElement$1t } from './igl-block-dates-view2.js';
import { d as defineCustomElement$1s } from './igl-book-property2.js';
import { d as defineCustomElement$1r } from './igl-book-property-footer2.js';
import { d as defineCustomElement$1q } from './igl-book-property-header2.js';
import { d as defineCustomElement$1p } from './igl-booking-form2.js';
import { d as defineCustomElement$1o } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$1n } from './igl-date-range2.js';
import { d as defineCustomElement$1m } from './igl-property-booked-by2.js';
import { d as defineCustomElement$1l } from './igl-rate-plan2.js';
import { d as defineCustomElement$1k } from './igl-room-type2.js';
import { d as defineCustomElement$1j } from './ir-applicable-policies2.js';
import { d as defineCustomElement$1i } from './ir-billing2.js';
import { d as defineCustomElement$1h } from './ir-billing-drawer2.js';
import { d as defineCustomElement$1g } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$1f } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$1e } from './ir-booking-company-form2.js';
import { d as defineCustomElement$1d } from './ir-booking-details2.js';
import { d as defineCustomElement$1c } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$1b } from './ir-booking-guarantee2.js';
import { d as defineCustomElement$1a } from './ir-booking-header2.js';
import { d as defineCustomElement$19 } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$18 } from './ir-button2.js';
import { d as defineCustomElement$17 } from './ir-checkbox2.js';
import { d as defineCustomElement$16 } from './ir-checkout-dialog2.js';
import { d as defineCustomElement$15 } from './ir-country-picker2.js';
import { d as defineCustomElement$14 } from './ir-custom-button2.js';
import { d as defineCustomElement$13 } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$12 } from './ir-date-picker2.js';
import { d as defineCustomElement$11 } from './ir-date-range2.js';
import { d as defineCustomElement$10 } from './ir-date-view2.js';
import { d as defineCustomElement$$ } from './ir-dialog2.js';
import { d as defineCustomElement$_ } from './ir-drawer2.js';
import { d as defineCustomElement$Z } from './ir-empty-state2.js';
import { d as defineCustomElement$Y } from './ir-events-log2.js';
import { d as defineCustomElement$X } from './ir-extra-service2.js';
import { d as defineCustomElement$W } from './ir-extra-service-config2.js';
import { d as defineCustomElement$V } from './ir-extra-service-config-form2.js';
import { d as defineCustomElement$U } from './ir-extra-services2.js';
import { d as defineCustomElement$T } from './ir-guest-info-drawer2.js';
import { d as defineCustomElement$S } from './ir-guest-info-form2.js';
import { d as defineCustomElement$R } from './ir-hk-archive2.js';
import { d as defineCustomElement$Q } from './ir-icon2.js';
import { d as defineCustomElement$P } from './ir-icons2.js';
import { d as defineCustomElement$O } from './ir-input2.js';
import { d as defineCustomElement$N } from './ir-input-text2.js';
import { d as defineCustomElement$M } from './ir-interceptor2.js';
import { d as defineCustomElement$L } from './ir-invoice2.js';
import { d as defineCustomElement$K } from './ir-invoice-form2.js';
import { d as defineCustomElement$J } from './ir-label2.js';
import { d as defineCustomElement$I } from './ir-loading-screen2.js';
import { d as defineCustomElement$H } from './ir-mobile-input2.js';
import { d as defineCustomElement$G } from './ir-modal2.js';
import { d as defineCustomElement$F } from './ir-otp2.js';
import { d as defineCustomElement$E } from './ir-otp-modal2.js';
import { d as defineCustomElement$D } from './ir-pagination2.js';
import { d as defineCustomElement$C } from './ir-payment-details2.js';
import { d as defineCustomElement$B } from './ir-payment-folio2.js';
import { d as defineCustomElement$A } from './ir-payment-folio-form2.js';
import { d as defineCustomElement$z } from './ir-payment-item2.js';
import { d as defineCustomElement$y } from './ir-payment-summary2.js';
import { d as defineCustomElement$x } from './ir-payments-folio2.js';
import { d as defineCustomElement$w } from './ir-picker2.js';
import { d as defineCustomElement$v } from './ir-picker-item2.js';
import { d as defineCustomElement$u } from './ir-pickup2.js';
import { d as defineCustomElement$t } from './ir-pickup-form2.js';
import { d as defineCustomElement$s } from './ir-pickup-view2.js';
import { d as defineCustomElement$r } from './ir-pms-logs2.js';
import { d as defineCustomElement$q } from './ir-popover2.js';
import { d as defineCustomElement$p } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$o } from './ir-print-room2.js';
import { d as defineCustomElement$n } from './ir-printing-extra-service2.js';
import { d as defineCustomElement$m } from './ir-printing-label2.js';
import { d as defineCustomElement$l } from './ir-printing-pickup2.js';
import { d as defineCustomElement$k } from './ir-proforma-invoice-preview2.js';
import { d as defineCustomElement$j } from './ir-range-picker2.js';
import { d as defineCustomElement$i } from './ir-reservation-information2.js';
import { d as defineCustomElement$h } from './ir-room2.js';
import { d as defineCustomElement$g } from './ir-room-guests2.js';
import { d as defineCustomElement$f } from './ir-room-guests-form2.js';
import { d as defineCustomElement$e } from './ir-select2.js';
import { d as defineCustomElement$d } from './ir-sidebar2.js';
import { d as defineCustomElement$c } from './ir-spinner2.js';
import { d as defineCustomElement$b } from './ir-tasks-card2.js';
import { d as defineCustomElement$a } from './ir-tasks-filters2.js';
import { d as defineCustomElement$9 } from './ir-tasks-header2.js';
import { d as defineCustomElement$8 } from './ir-tasks-table2.js';
import { d as defineCustomElement$7 } from './ir-tasks-table-pagination2.js';
import { d as defineCustomElement$6 } from './ir-title2.js';
import { d as defineCustomElement$5 } from './ir-toast2.js';
import { d as defineCustomElement$4 } from './ir-tooltip2.js';
import { d as defineCustomElement$3 } from './ir-unit-tag2.js';
import { d as defineCustomElement$2 } from './ir-validator2.js';
import { d as defineCustomElement$1 } from './ota-label2.js';
import { v as v4 } from './v4.js';

const irHkTasksCss = ".sc-ir-hk-tasks-h{display:block;box-sizing:border-box}.sc-ir-hk-tasks-h *.sc-ir-hk-tasks{box-sizing:border-box}.tasks-view.sc-ir-hk-tasks{display:flex;flex-direction:column}@media (min-width: 1024px){.tasks-view.sc-ir-hk-tasks{flex-direction:row}}";
const IrHkTasksStyle0 = irHkTasksCss;

const IrHkTasks = /*@__PURE__*/ proxyCustomElement(class IrHkTasks extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.clearSelectedHkTasks = createEvent(this, "clearSelectedHkTasks", 7);
    }
    get el() { return this; }
    language = '';
    ticket = '';
    propertyid;
    p;
    baseUrl;
    isLoading = false;
    isCleaningLoading = false;
    selectedDuration = '';
    selectedHouseKeeper = '0';
    selectedRoom = null;
    archiveOpened = false;
    property_id;
    isSidebarOpen;
    isApplyFiltersLoading;
    filters;
    modalCauses;
    clearSelectedHkTasks;
    hkNameCache = {};
    roomService = new RoomService();
    houseKeepingService = new HouseKeepingService();
    token = new Token();
    table_sorting = new Map();
    modal;
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
    handleSkipSelectedTask(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modalCauses = { task: e.detail, cause: 'skip' };
        this.modal?.openModal();
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
            const requests = [this.houseKeepingService.getExposedHKSetup(this.property_id), this.roomService.fetchLanguage(this.language)];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
            const tasksResult = await this.houseKeepingService.getHkTasks({
                property_id: this.property_id,
                from_date: hooks().format('YYYY-MM-DD'),
                to_date: hooks().format('YYYY-MM-DD'),
                housekeepers: [],
                cleaning_frequency: (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies[0])?.code,
                dusty_window: housekeeping_store?.hk_criteria?.dusty_periods[0]?.code,
                highlight_window: housekeeping_store?.hk_criteria?.highlight_checkin_options[0]?.code,
            });
            // updateTaskList();
            if (tasksResult?.tasks) {
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
        this.hkNameCache = {};
        housekeeping_store.hk_criteria?.housekeepers?.forEach(hk => {
            if (hk.id != null && hk.name != null) {
                this.hkNameCache[hk.id] = hk.name;
            }
        });
    }
    updateTasks(tasks) {
        this.buildHousekeeperNameCache();
        updateTasks(tasks.map(t => ({
            ...t,
            id: v4(),
            housekeeper: (() => {
                const name = this.hkNameCache[t.hkm_id];
                if (name) {
                    return name;
                }
                const hkName = housekeeping_store.hk_criteria?.housekeepers?.find(hk => hk.id === t.hkm_id)?.name;
                this.hkNameCache[t.hkm_id] = hkName;
                return hkName;
            })(),
        })));
    }
    async handleHeaderButtonPress(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { name } = e.detail;
        switch (name) {
            case 'cleaned':
            case 'clean-inspect':
                this.modal?.openModal();
                this.modalCauses = {
                    task: null,
                    cause: 'clean',
                    status: name === 'clean-inspect' ? '004' : '001',
                };
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
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modalCauses = { ...e.detail, cause: 'clean' };
        this.modal?.openModal();
    }
    async handleModalConfirmation(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            if (hkTasksStore.selectedTasks.length === 0) {
                return;
            }
            this.isCleaningLoading = true;
            if (this.modalCauses?.cause === 'skip') {
                const { booking_nbr, date, unit } = this.modalCauses.task;
                await this.houseKeepingService.editHkSkip({
                    BOOK_NBR: booking_nbr,
                    DATE: date,
                    COMMENT: '',
                    HK_SKIP_ID: -1,
                    HK_SKIP_REASON_CODE: '001',
                    PR_ID: unit.id,
                });
            }
            else {
                await this.houseKeepingService.executeHKAction({
                    actions: hkTasksStore.selectedTasks.map(t => ({
                        description: 'Cleaned',
                        hkm_id: t.hkm_id === 0 ? null : t.hkm_id,
                        unit_id: t.unit.id,
                        booking_nbr: t.booking_nbr,
                        status: this.modalCauses?.status ?? '001',
                    })),
                });
            }
            await this.fetchTasksWithFilters();
        }
        finally {
            clearSelectedTasks();
            if (this.modalCauses) {
                this.modalCauses = null;
            }
            this.isCleaningLoading = false;
            // this.clearSelectedTasks.emit();
            this.modal.closeModal();
        }
    }
    async applyFilters(e) {
        try {
            this.isApplyFiltersLoading = true;
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.filters = { ...e.detail };
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
        const { cleaning_periods, housekeepers, cleaning_frequencies, dusty_units, highlight_check_ins } = this.filters ?? {};
        const { tasks, url } = await this.houseKeepingService.getHkTasks({
            housekeepers,
            cleaning_frequency: cleaning_frequencies?.code,
            dusty_window: dusty_units?.code,
            highlight_window: highlight_check_ins?.code,
            property_id: this.property_id,
            from_date: hooks().format('YYYY-MM-DD'),
            to_date: cleaning_periods?.code || hooks().format('YYYY-MM-DD'),
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
            return h("ir-loading-screen", null);
        }
        return (h(Host, { "data-testid": "hk_tasks_base" }, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-1 d-flex flex-column", style: { gap: '1rem' } }, h("h3", null, "Housekeeping Tasks"), h("div", { class: "tasks-view ", style: { gap: '1rem' } }, h("ir-tasks-filters", { isLoading: this.isApplyFiltersLoading, onApplyFilters: e => {
                this.applyFilters(e);
            } }), h("div", { class: "d-flex w-100 flex-column", style: { gap: '1rem' } }, h("ir-tasks-table", { onRowSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                updateSelectedTasks(e.detail);
            }, class: "flex-grow-1 w-100" })))), h("ir-modal", { autoClose: false, ref: el => (this.modal = el), isLoading: this.isCleaningLoading, onConfirmModal: this.handleModalConfirmation.bind(this), onCancelModal: () => {
                if (this.modalCauses) {
                    clearSelectedTasks();
                    this.modalCauses = null;
                }
            }, iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales.entries.Lcz_Cancel, rightBtnText: locales.entries.Lcz_Confirm, leftBtnColor: "secondary", rightBtnColor: 'primary', modalTitle: locales.entries.Lcz_Confirmation, modalBody: this.modalCauses
                ? this.modalCauses?.cause === 'clean'
                    ? this.modalCauses.task
                        ? `Update ${this.modalCauses?.task?.unit?.name} to Clean`
                        : 'Update selected unit(s) to Clean'
                    : 'Skip cleaning and reschedule for tomorrow.'
                : 'Update selected unit(s) to Clean' }), h("ir-sidebar", { open: this.isSidebarOpen, id: "editGuestInfo", onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isSidebarOpen = false;
            },
            // sidebarStyles={{
            //   width: '80vw',
            // }}
            showCloseButton: false }, this.isSidebarOpen && h("ir-hk-archive", { ticket: this.token.getToken(), propertyId: this.property_id, slot: "sidebar-body" }))));
    }
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
        "isCleaningLoading": [32],
        "selectedDuration": [32],
        "selectedHouseKeeper": [32],
        "selectedRoom": [32],
        "archiveOpened": [32],
        "property_id": [32],
        "isSidebarOpen": [32],
        "isApplyFiltersLoading": [32],
        "filters": [32],
        "modalCauses": [32]
    }, [[0, "closeSideBar", "handleCloseSidebar"], [0, "sortingChanged", "handleSortingChanged"], [0, "skipSelectedTask", "handleSkipSelectedTask"], [0, "headerButtonPress", "handleHeaderButtonPress"], [0, "cleanSelectedTask", "handleSelectedTaskCleaningEvent"]], {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hk-tasks", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-footer", "igl-book-property-header", "igl-booking-form", "igl-booking-overview-page", "igl-date-range", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "ir-applicable-policies", "ir-billing", "ir-billing-drawer", "ir-booking-billing-recipient", "ir-booking-company-dialog", "ir-booking-company-form", "ir-booking-details", "ir-booking-extra-note", "ir-booking-guarantee", "ir-booking-header", "ir-booking-status-tag", "ir-button", "ir-checkbox", "ir-checkout-dialog", "ir-country-picker", "ir-custom-button", "ir-custom-date-picker", "ir-date-picker", "ir-date-range", "ir-date-view", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-service-config-form", "ir-extra-services", "ir-guest-info-drawer", "ir-guest-info-form", "ir-hk-archive", "ir-icon", "ir-icons", "ir-input", "ir-input-text", "ir-interceptor", "ir-invoice", "ir-invoice-form", "ir-label", "ir-loading-screen", "ir-mobile-input", "ir-modal", "ir-otp", "ir-otp-modal", "ir-pagination", "ir-payment-details", "ir-payment-folio", "ir-payment-folio-form", "ir-payment-item", "ir-payment-summary", "ir-payments-folio", "ir-picker", "ir-picker-item", "ir-pickup", "ir-pickup-form", "ir-pickup-view", "ir-pms-logs", "ir-popover", "ir-preview-screen-dialog", "ir-print-room", "ir-printing-extra-service", "ir-printing-label", "ir-printing-pickup", "ir-proforma-invoice-preview", "ir-range-picker", "ir-reservation-information", "ir-room", "ir-room-guests", "ir-room-guests-form", "ir-select", "ir-sidebar", "ir-spinner", "ir-tasks-card", "ir-tasks-filters", "ir-tasks-header", "ir-tasks-table", "ir-tasks-table-pagination", "ir-title", "ir-toast", "ir-tooltip", "ir-unit-tag", "ir-validator", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hk-tasks":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHkTasks);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$1u();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$1t();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$1s();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1r();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1q();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1p();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$1o();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$1n();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$1m();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$1l();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$1k();
            }
            break;
        case "ir-applicable-policies":
            if (!customElements.get(tagName)) {
                defineCustomElement$1j();
            }
            break;
        case "ir-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$1i();
            }
            break;
        case "ir-billing-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1h();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$1g();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1f();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1e();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$1d();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$1c();
            }
            break;
        case "ir-booking-guarantee":
            if (!customElements.get(tagName)) {
                defineCustomElement$1b();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1a();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$19();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$18();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$17();
            }
            break;
        case "ir-checkout-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$16();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$15();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$14();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$13();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$12();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$11();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "ir-extra-service-config-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "ir-guest-info-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "ir-guest-info-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "ir-hk-archive":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-payment-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-payment-folio-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-payment-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-pickup-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-print-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-printing-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-printing-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-printing-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-proforma-invoice-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-room-guests-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-tasks-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-tasks-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-tasks-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-tasks-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-tasks-table-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-unit-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-validator":
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
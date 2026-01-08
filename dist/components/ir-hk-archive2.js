import { proxyCustomElement, HTMLElement, h, Host, Fragment } from '@stencil/core/internal/client';
import { H as HouseKeepingService } from './housekeeping.service.js';
import { c as calendar_data } from './calendar-data.js';
import { h as housekeeping_store } from './housekeeping.store.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { m as downloadFile } from './utils.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$1l } from './igl-application-info2.js';
import { d as defineCustomElement$1k } from './igl-date-range2.js';
import { d as defineCustomElement$1j } from './igl-rate-plan2.js';
import { d as defineCustomElement$1i } from './igl-room-type2.js';
import { d as defineCustomElement$1h } from './ir-air-date-picker2.js';
import { d as defineCustomElement$1g } from './ir-applicable-policies2.js';
import { d as defineCustomElement$1f } from './ir-billing2.js';
import { d as defineCustomElement$1e } from './ir-billing-drawer2.js';
import { d as defineCustomElement$1d } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$1c } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$1b } from './ir-booking-company-form2.js';
import { d as defineCustomElement$1a } from './ir-booking-details2.js';
import { d as defineCustomElement$19 } from './ir-booking-editor2.js';
import { d as defineCustomElement$18 } from './ir-booking-editor-drawer2.js';
import { d as defineCustomElement$17 } from './ir-booking-editor-form2.js';
import { d as defineCustomElement$16 } from './ir-booking-editor-guest-form2.js';
import { d as defineCustomElement$15 } from './ir-booking-editor-header2.js';
import { d as defineCustomElement$14 } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$13 } from './ir-booking-guarantee2.js';
import { d as defineCustomElement$12 } from './ir-booking-header2.js';
import { d as defineCustomElement$11 } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$10 } from './ir-button2.js';
import { d as defineCustomElement$$ } from './ir-checkout-dialog2.js';
import { d as defineCustomElement$_ } from './ir-country-picker2.js';
import { d as defineCustomElement$Z } from './ir-custom-button2.js';
import { d as defineCustomElement$Y } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$X } from './ir-date-picker2.js';
import { d as defineCustomElement$W } from './ir-date-select2.js';
import { d as defineCustomElement$V } from './ir-date-view2.js';
import { d as defineCustomElement$U } from './ir-dialog2.js';
import { d as defineCustomElement$T } from './ir-drawer2.js';
import { d as defineCustomElement$S } from './ir-empty-state2.js';
import { d as defineCustomElement$R } from './ir-events-log2.js';
import { d as defineCustomElement$Q } from './ir-extra-service2.js';
import { d as defineCustomElement$P } from './ir-extra-service-config2.js';
import { d as defineCustomElement$O } from './ir-extra-service-config-form2.js';
import { d as defineCustomElement$N } from './ir-extra-services2.js';
import { d as defineCustomElement$M } from './ir-guest-info-drawer2.js';
import { d as defineCustomElement$L } from './ir-guest-info-form2.js';
import { d as defineCustomElement$K } from './ir-icon2.js';
import { d as defineCustomElement$J } from './ir-icons2.js';
import { d as defineCustomElement$I } from './ir-input2.js';
import { d as defineCustomElement$H } from './ir-input-text2.js';
import { d as defineCustomElement$G } from './ir-interceptor2.js';
import { d as defineCustomElement$F } from './ir-invoice2.js';
import { d as defineCustomElement$E } from './ir-invoice-form2.js';
import { d as defineCustomElement$D } from './ir-label2.js';
import { d as defineCustomElement$C } from './ir-mobile-input2.js';
import { d as defineCustomElement$B } from './ir-otp2.js';
import { d as defineCustomElement$A } from './ir-otp-modal2.js';
import { d as defineCustomElement$z } from './ir-payment-details2.js';
import { d as defineCustomElement$y } from './ir-payment-folio2.js';
import { d as defineCustomElement$x } from './ir-payment-folio-form2.js';
import { d as defineCustomElement$w } from './ir-payment-item2.js';
import { d as defineCustomElement$v } from './ir-payment-summary2.js';
import { d as defineCustomElement$u } from './ir-payments-folio2.js';
import { d as defineCustomElement$t } from './ir-picker2.js';
import { d as defineCustomElement$s } from './ir-picker-item2.js';
import { d as defineCustomElement$r } from './ir-pickup2.js';
import { d as defineCustomElement$q } from './ir-pickup-form2.js';
import { d as defineCustomElement$p } from './ir-pickup-view2.js';
import { d as defineCustomElement$o } from './ir-pms-logs2.js';
import { d as defineCustomElement$n } from './ir-popover2.js';
import { d as defineCustomElement$m } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$l } from './ir-print-room2.js';
import { d as defineCustomElement$k } from './ir-printing-extra-service2.js';
import { d as defineCustomElement$j } from './ir-printing-label2.js';
import { d as defineCustomElement$i } from './ir-printing-pickup2.js';
import { d as defineCustomElement$h } from './ir-proforma-invoice-preview2.js';
import { d as defineCustomElement$g } from './ir-range-picker2.js';
import { d as defineCustomElement$f } from './ir-reservation-information2.js';
import { d as defineCustomElement$e } from './ir-room2.js';
import { d as defineCustomElement$d } from './ir-room-guests2.js';
import { d as defineCustomElement$c } from './ir-room-guests-form2.js';
import { d as defineCustomElement$b } from './ir-select2.js';
import { d as defineCustomElement$a } from './ir-sidebar2.js';
import { d as defineCustomElement$9 } from './ir-spinner2.js';
import { d as defineCustomElement$8 } from './ir-title2.js';
import { d as defineCustomElement$7 } from './ir-toast2.js';
import { d as defineCustomElement$6 } from './ir-toast-alert2.js';
import { d as defineCustomElement$5 } from './ir-toast-provider2.js';
import { d as defineCustomElement$4 } from './ir-tooltip2.js';
import { d as defineCustomElement$3 } from './ir-unit-tag2.js';
import { d as defineCustomElement$2 } from './ir-validator2.js';
import { d as defineCustomElement$1 } from './ota-label2.js';
import { v as v4 } from './v4.js';

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}.unit-name.sc-ir-hk-archive{max-width:100px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 !important;margin:0 !important;text-align:start}.table.sc-ir-hk-archive th.sc-ir-hk-archive,.table.sc-ir-hk-archive td.sc-ir-hk-archive{white-space:nowrap;width:fit-content;max-width:max-content !important;border:0;text-align:start;background-color:white;padding:0.25rem !important}.table.sc-ir-hk-archive th.sc-ir-hk-archive:first-child,.table.sc-ir-hk-archive td.sc-ir-hk-archive:first-child{padding-left:0 !important}";
const IrHkArchiveStyle0 = irHkArchiveCss;

const IrHkArchive = /*@__PURE__*/ proxyCustomElement(class IrHkArchive extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    propertyId;
    language = 'en';
    ticket;
    filters = {
        from_date: null,
        to_date: null,
        filtered_by_hkm: [],
        filtered_by_unit: [],
    };
    data = [];
    isLoading = null;
    fetchedData = false;
    selectedBooking;
    minSelectableDate = hooks().subtract(90, 'days').toDate();
    houseKeepingService = new HouseKeepingService();
    units = [];
    handleSideBarToggle(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectedBooking = null;
    }
    componentWillLoad() {
        this.setUpUnits();
    }
    setUpUnits() {
        const units = [];
        calendar_data.roomsInfo.forEach(r => {
            r.physicalrooms.forEach(room => {
                units.push({ id: room.id, name: room.name });
            });
        });
        this.units = units;
    }
    async getArchivedTasks(export_to_excel = false) {
        const res = await this.houseKeepingService.getArchivedHKTasks({ property_id: Number(this.propertyId), ...this.filters, is_export_to_excel: export_to_excel });
        this.data = [...(res?.tasks || [])]?.map(t => ({ ...t, id: v4() }));
        this.fetchedData = true;
        return { tasks: res?.tasks, url: res?.url };
    }
    handleDateRangeChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { fromDate, toDate } = e.detail;
        this.updateFilters({
            from_date: fromDate ? fromDate.format('YYYY-MM-DD') : null,
            to_date: toDate ? toDate.format('YYYY-MM-DD') : null,
        });
    }
    updateFilters(props) {
        this.filters = { ...this.filters, ...props };
    }
    async searchArchive(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.isLoading = 'search';
            await this.getArchivedTasks();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    async exportArchive(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.isLoading = 'excel';
            const { url } = await this.getArchivedTasks(true);
            downloadFile(url);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        return (h(Host, { key: '0f2b4e23bb11926ccdc4d59dd6872ddd8a7b2fc4' }, h("ir-title", { key: '80619da24c9497bff5a01a07f6ab23215a0b78aa', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '1c1f803e71ff65ba4d9f95d430fb012df4424396', class: "px-1" }, h("div", { key: 'c81953b82669f20a4e2e1d40b8b78441dafd8557', class: "d-flex" }, h("ir-select", { key: '23eb21bec1280a503e2dd352a3a2b09257099ea6', class: "w-100", showFirstOption: false, data: [
                { text: 'All units', value: '000' },
                ,
                ...this.units
                    ?.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                }))
                    .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())),
            ], onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail === '000') {
                    this.updateFilters({ filtered_by_unit: [] });
                }
                else {
                    this.updateFilters({ filtered_by_unit: [e.detail] });
                }
            } }), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("ir-select", { key: '91858803106c61396698743aa4a2a7faf5beeb40', class: "ml-1 w-100", selectedValue: this.filters?.filtered_by_hkm?.length === housekeeping_store.hk_criteria.housekeepers.length ? '000' : this.filters?.filtered_by_hkm[0]?.toString(), showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...housekeeping_store?.hk_criteria?.housekeepers
                    .map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                }))
                    .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())),
            ], onSelectChange: e => {
                if (e.detail === '000') {
                    this.updateFilters({ filtered_by_hkm: [] });
                }
                else {
                    this.updateFilters({ filtered_by_hkm: [e.detail] });
                }
            } }))), h("div", { key: 'b7763346818c4a10f87cd7152c56efbc68a40e51', class: "d-flex mt-1 align-items-center" }, h("ir-range-picker", { key: '2c75c23eeadce397ea7100502a6f94f251274849', maxDate: hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), h("ir-button", { key: 'f51669d310cab29641b0ecfa03bc542d9b0d0099', title: locales.entries?.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), h("ir-button", { key: '01f2ed55edea2cda68d223d567b4902b5323f2df', title: locales.entries?.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (h(Fragment, { key: '90a46ee4d0501393e0b1cf9edb6418318e0a5036' }, this.data?.length === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("p", { class: 'text-center mt-2' }, locales.entries.Lcz_NoResultsFound)) : (h("table", { class: "mt-2 table" }, h("thead", null, h("th", { class: "pl-0" }, locales.entries.Lcz_Period), h("th", null, locales.entries.Lcz_Housekeeper), h("th", null, locales.entries.Lcz_Unit), h("th", null, locales.entries.Lcz_BookingNumber)), h("tbody", null, this.data?.map(d => (h("tr", { key: d.id }, h("td", { class: "pl-0" }, d.date), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales.entries.Lcz_WasVacant))))))))))), h("ir-sidebar", { key: 'ab5a19d1820f1d3c37d2871352e5b7aca1d9d210', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (h("ir-booking-details", { key: 'bac048cea620a5e3543ea2083f9c32367e1bad83', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.selectedBooking?.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
    }
    static get style() { return IrHkArchiveStyle0; }
}, [2, "ir-hk-archive", {
        "propertyId": [8, "property-id"],
        "language": [1],
        "ticket": [1],
        "filters": [32],
        "data": [32],
        "isLoading": [32],
        "fetchedData": [32],
        "selectedBooking": [32]
    }, [[0, "dateRangeChanged", "handleDateRangeChange"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hk-archive", "igl-application-info", "igl-date-range", "igl-rate-plan", "igl-room-type", "ir-air-date-picker", "ir-applicable-policies", "ir-billing", "ir-billing-drawer", "ir-booking-billing-recipient", "ir-booking-company-dialog", "ir-booking-company-form", "ir-booking-details", "ir-booking-editor", "ir-booking-editor-drawer", "ir-booking-editor-form", "ir-booking-editor-guest-form", "ir-booking-editor-header", "ir-booking-extra-note", "ir-booking-guarantee", "ir-booking-header", "ir-booking-status-tag", "ir-button", "ir-checkout-dialog", "ir-country-picker", "ir-custom-button", "ir-custom-date-picker", "ir-date-picker", "ir-date-select", "ir-date-view", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-service-config-form", "ir-extra-services", "ir-guest-info-drawer", "ir-guest-info-form", "ir-icon", "ir-icons", "ir-input", "ir-input-text", "ir-interceptor", "ir-invoice", "ir-invoice-form", "ir-label", "ir-mobile-input", "ir-otp", "ir-otp-modal", "ir-payment-details", "ir-payment-folio", "ir-payment-folio-form", "ir-payment-item", "ir-payment-summary", "ir-payments-folio", "ir-picker", "ir-picker-item", "ir-pickup", "ir-pickup-form", "ir-pickup-view", "ir-pms-logs", "ir-popover", "ir-preview-screen-dialog", "ir-print-room", "ir-printing-extra-service", "ir-printing-label", "ir-printing-pickup", "ir-proforma-invoice-preview", "ir-range-picker", "ir-reservation-information", "ir-room", "ir-room-guests", "ir-room-guests-form", "ir-select", "ir-sidebar", "ir-spinner", "ir-title", "ir-toast", "ir-toast-alert", "ir-toast-provider", "ir-tooltip", "ir-unit-tag", "ir-validator", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hk-archive":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHkArchive);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$1l();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$1k();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$1j();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$1i();
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$1h();
            }
            break;
        case "ir-applicable-policies":
            if (!customElements.get(tagName)) {
                defineCustomElement$1g();
            }
            break;
        case "ir-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$1f();
            }
            break;
        case "ir-billing-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1e();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$1d();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1c();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1b();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$1a();
            }
            break;
        case "ir-booking-editor":
            if (!customElements.get(tagName)) {
                defineCustomElement$19();
            }
            break;
        case "ir-booking-editor-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$18();
            }
            break;
        case "ir-booking-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$17();
            }
            break;
        case "ir-booking-editor-guest-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$16();
            }
            break;
        case "ir-booking-editor-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$15();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$14();
            }
            break;
        case "ir-booking-guarantee":
            if (!customElements.get(tagName)) {
                defineCustomElement$13();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$12();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$11();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "ir-checkout-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-extra-service-config-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-guest-info-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-guest-info-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-payment-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-payment-folio-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-payment-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-pickup-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-print-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-printing-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-printing-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-printing-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-proforma-invoice-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-room-guests-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-toast-provider":
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

export { IrHkArchive as I, defineCustomElement as d };

//# sourceMappingURL=ir-hk-archive2.js.map
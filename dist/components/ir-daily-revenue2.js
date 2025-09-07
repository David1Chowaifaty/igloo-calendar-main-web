import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { B as BookingService, b as buildPaymentTypes } from './booking.service.js';
import { P as PropertyService } from './property.service.js';
import { R as RoomService } from './room.service.js';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$16 } from './igl-application-info2.js';
import { d as defineCustomElement$15 } from './igl-block-dates-view2.js';
import { d as defineCustomElement$14 } from './igl-book-property2.js';
import { d as defineCustomElement$13 } from './igl-book-property-footer2.js';
import { d as defineCustomElement$12 } from './igl-book-property-header2.js';
import { d as defineCustomElement$11 } from './igl-booking-form2.js';
import { d as defineCustomElement$10 } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$$ } from './igl-date-range2.js';
import { d as defineCustomElement$_ } from './igl-property-booked-by2.js';
import { d as defineCustomElement$Z } from './igl-rate-plan2.js';
import { d as defineCustomElement$Y } from './igl-room-type2.js';
import { d as defineCustomElement$X } from './ir-accordion2.js';
import { d as defineCustomElement$W } from './ir-autocomplete2.js';
import { d as defineCustomElement$V } from './ir-booking-details2.js';
import { d as defineCustomElement$U } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$T } from './ir-booking-guarantee2.js';
import { d as defineCustomElement$S } from './ir-booking-header2.js';
import { d as defineCustomElement$R } from './ir-button2.js';
import { d as defineCustomElement$Q } from './ir-combobox2.js';
import { d as defineCustomElement$P } from './ir-country-picker2.js';
import { d as defineCustomElement$O } from './ir-daily-revenue-filters2.js';
import { d as defineCustomElement$N } from './ir-date-picker2.js';
import { d as defineCustomElement$M } from './ir-date-range2.js';
import { d as defineCustomElement$L } from './ir-date-view2.js';
import { d as defineCustomElement$K } from './ir-dialog2.js';
import { d as defineCustomElement$J } from './ir-dropdown2.js';
import { d as defineCustomElement$I } from './ir-dropdown-item2.js';
import { d as defineCustomElement$H } from './ir-events-log2.js';
import { d as defineCustomElement$G } from './ir-extra-service2.js';
import { d as defineCustomElement$F } from './ir-extra-service-config2.js';
import { d as defineCustomElement$E } from './ir-extra-services2.js';
import { d as defineCustomElement$D } from './ir-guest-info2.js';
import { d as defineCustomElement$C } from './ir-icon2.js';
import { d as defineCustomElement$B } from './ir-icons2.js';
import { d as defineCustomElement$A } from './ir-input-text2.js';
import { d as defineCustomElement$z } from './ir-interceptor2.js';
import { d as defineCustomElement$y } from './ir-label2.js';
import { d as defineCustomElement$x } from './ir-loading-screen2.js';
import { d as defineCustomElement$w } from './ir-modal2.js';
import { d as defineCustomElement$v } from './ir-otp2.js';
import { d as defineCustomElement$u } from './ir-otp-modal2.js';
import { d as defineCustomElement$t } from './ir-payment-action2.js';
import { d as defineCustomElement$s } from './ir-payment-actions2.js';
import { d as defineCustomElement$r } from './ir-payment-details2.js';
import { d as defineCustomElement$q } from './ir-payment-folio2.js';
import { d as defineCustomElement$p } from './ir-payment-item2.js';
import { d as defineCustomElement$o } from './ir-payment-summary2.js';
import { d as defineCustomElement$n } from './ir-payments-folio2.js';
import { d as defineCustomElement$m } from './ir-phone-input2.js';
import { d as defineCustomElement$l } from './ir-pickup2.js';
import { d as defineCustomElement$k } from './ir-pickup-view2.js';
import { d as defineCustomElement$j } from './ir-pms-logs2.js';
import { d as defineCustomElement$i } from './ir-popover2.js';
import { d as defineCustomElement$h } from './ir-price-input2.js';
import { d as defineCustomElement$g } from './ir-reservation-information2.js';
import { d as defineCustomElement$f } from './ir-revenue-row2.js';
import { d as defineCustomElement$e } from './ir-revenue-row-details2.js';
import { d as defineCustomElement$d } from './ir-revenue-summary2.js';
import { d as defineCustomElement$c } from './ir-revenue-table2.js';
import { d as defineCustomElement$b } from './ir-room2.js';
import { d as defineCustomElement$a } from './ir-room-guests2.js';
import { d as defineCustomElement$9 } from './ir-select2.js';
import { d as defineCustomElement$8 } from './ir-sidebar2.js';
import { d as defineCustomElement$7 } from './ir-spinner2.js';
import { d as defineCustomElement$6 } from './ir-stats-card2.js';
import { d as defineCustomElement$5 } from './ir-textarea2.js';
import { d as defineCustomElement$4 } from './ir-title2.js';
import { d as defineCustomElement$3 } from './ir-toast2.js';
import { d as defineCustomElement$2 } from './ir-tooltip2.js';
import { d as defineCustomElement$1 } from './ota-label2.js';
import { v as v4 } from './v4.js';

const irDailyRevenueCss = ".sc-ir-daily-revenue-h{display:block}.daily-revenue__meta.sc-ir-daily-revenue{display:flex;flex-direction:column;gap:1rem}.daily-revenue__table.sc-ir-daily-revenue{flex:1 1 0%}@media (min-width: 768px){.daily-revenue__meta.sc-ir-daily-revenue{flex-direction:row}}";
const IrDailyRevenueStyle0 = irDailyRevenueCss;

const IrDailyRevenue = /*@__PURE__*/ proxyCustomElement(class IrDailyRevenue extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.preventPageLoad = createEvent(this, "preventPageLoad", 7);
        this.language = '';
        this.ticket = '';
        this.filters = { date: hooks().format('YYYY-MM-DD'), users: null };
        this.tokenService = new Token();
        this.roomService = new RoomService();
        this.propertyService = new PropertyService();
        this.bookingService = new BookingService();
        this.handleSidebarClose = (e) => {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.sideBarEvent = null;
        };
    }
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.tokenService.setToken(this.ticket);
        this.initializeApp();
    }
    handleOpenSidebar(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.sideBarEvent = e.detail;
    }
    handleFetchNewReports(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = Object.assign({}, e.detail);
        this.getPaymentReports();
    }
    renderSidebarBody() {
        if (!this.sideBarEvent) {
            return;
        }
        switch (this.sideBarEvent.type) {
            case 'booking':
                return (h("ir-booking-details", { slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: this.handleSidebarClose, is_from_front_desk: true, propertyid: this.property_id, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.sideBarEvent.payload.bookingNumber.toString(), ticket: this.ticket, language: this.language, hasRoomAdd: true }));
            default:
                return null;
        }
    }
    async initializeApp() {
        this.isPageLoading = true;
        try {
            let propertyId = this.propertyid;
            if (!propertyId && !this.p) {
                throw new Error('Property ID or username is required');
            }
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [
                this.bookingService.getSetupEntriesByTableNameMulti(['_PAY_TYPE', '_PAY_TYPE_GROUP']),
                this.getPaymentReports(),
                this.roomService.fetchLanguage(this.language),
            ];
            if (propertyId) {
                requests.push(this.roomService.getExposedProperty({
                    id: propertyId,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            const [setupEntries] = await Promise.all(requests);
            const { pay_type, pay_type_group } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.payTypes = pay_type;
            this.payTypeGroup = buildPaymentTypes(pay_type, pay_type_group)['PAYMENTS'];
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    groupPaymentsByName(payments) {
        var _a;
        const groupedPayment = new Map();
        for (const payment of payments) {
            const p = (_a = groupedPayment.get(payment.payTypeCode)) !== null && _a !== void 0 ? _a : [];
            groupedPayment.set(payment.payTypeCode, [...p, payment]);
        }
        return new Map([...groupedPayment.entries()].sort(([a], [b]) => {
            const aNum = Number(a);
            const bNum = Number(b);
            if (!isNaN(aNum) && !isNaN(bNum)) {
                return aNum - bNum;
            }
            return a.localeCompare(b);
        }));
    }
    async getPaymentReports(isExportToExcel = false) {
        var _a, _b, _c, _d;
        try {
            const getReportObj = (report) => {
                return {
                    method: report.METHOD,
                    payTypeCode: report.PAY_TYPE_CODE,
                    amount: report.AMOUNT,
                    date: report.DATE,
                    hour: report.HOUR,
                    minute: report.MINUTE,
                    user: report.USER,
                    currency: report.CURRENCY,
                    bookingNbr: report.BOOKING_NBR,
                    id: v4(),
                };
            };
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const requests = [
                this.propertyService.getDailyRevenueReport({
                    date: this.filters.date,
                    property_id: (_a = this.property_id) === null || _a === void 0 ? void 0 : _a.toString(),
                    is_export_to_excel: isExportToExcel,
                }),
            ];
            if (!isExportToExcel) {
                requests.push(this.propertyService.getDailyRevenueReport({
                    date: hooks(this.filters.date, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD'),
                    property_id: (_b = this.property_id) === null || _b === void 0 ? void 0 : _b.toString(),
                    is_export_to_excel: isExportToExcel,
                }));
            }
            const results = await Promise.all(requests);
            if (!isExportToExcel) {
                if (results[0]) {
                    this.groupedPayment = this.groupPaymentsByName((_c = results[0]) === null || _c === void 0 ? void 0 : _c.map(getReportObj));
                }
                else {
                    this.groupedPayment = new Map();
                }
                if (results[1])
                    this.previousDateGroupedPayments = this.groupPaymentsByName((_d = results[1]) === null || _d === void 0 ? void 0 : _d.map(getReportObj));
            }
        }
        catch (e) {
            console.log(e);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        var _a, _b, _c;
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, "Daily Revenue"), h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getPaymentReports(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), h("ir-revenue-summary", { previousDateGroupedPayments: this.previousDateGroupedPayments, groupedPayments: this.groupedPayment, payTypesGroup: this.payTypeGroup }), h("div", { class: "daily-revenue__meta" }, h("ir-daily-revenue-filters", { isLoading: this.isLoading === 'filter', payments: this.groupedPayment }), h("ir-revenue-table", { filters: this.filters, class: 'daily-revenue__table', payTypes: this.payTypes, payments: this.groupedPayment }))), h("ir-sidebar", { sidebarStyles: {
                width: ((_b = this.sideBarEvent) === null || _b === void 0 ? void 0 : _b.type) === 'booking' ? '80rem' : 'var(--sidebar-width,40rem)',
                background: ((_c = this.sideBarEvent) === null || _c === void 0 ? void 0 : _c.type) === 'booking' ? '#F2F3F8' : 'white',
            }, open: Boolean(this.sideBarEvent), showCloseButton: false, onIrSidebarToggle: this.handleSidebarClose }, this.renderSidebarBody())));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
    static get style() { return IrDailyRevenueStyle0; }
}, [2, "ir-daily-revenue", {
        "language": [1],
        "ticket": [1],
        "propertyid": [2],
        "p": [1],
        "isPageLoading": [32],
        "property_id": [32],
        "groupedPayment": [32],
        "previousDateGroupedPayments": [32],
        "isLoading": [32],
        "filters": [32],
        "sideBarEvent": [32]
    }, [[0, "revenueOpenSidebar", "handleOpenSidebar"], [0, "fetchNewReports", "handleFetchNewReports"]], {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-daily-revenue", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-footer", "igl-book-property-header", "igl-booking-form", "igl-booking-overview-page", "igl-date-range", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "ir-accordion", "ir-autocomplete", "ir-booking-details", "ir-booking-extra-note", "ir-booking-guarantee", "ir-booking-header", "ir-button", "ir-combobox", "ir-country-picker", "ir-daily-revenue-filters", "ir-date-picker", "ir-date-range", "ir-date-view", "ir-dialog", "ir-dropdown", "ir-dropdown-item", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-services", "ir-guest-info", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-label", "ir-loading-screen", "ir-modal", "ir-otp", "ir-otp-modal", "ir-payment-action", "ir-payment-actions", "ir-payment-details", "ir-payment-folio", "ir-payment-item", "ir-payment-summary", "ir-payments-folio", "ir-phone-input", "ir-pickup", "ir-pickup-view", "ir-pms-logs", "ir-popover", "ir-price-input", "ir-reservation-information", "ir-revenue-row", "ir-revenue-row-details", "ir-revenue-summary", "ir-revenue-table", "ir-room", "ir-room-guests", "ir-select", "ir-sidebar", "ir-spinner", "ir-stats-card", "ir-textarea", "ir-title", "ir-toast", "ir-tooltip", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-daily-revenue":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDailyRevenue);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$16();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$15();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$14();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$13();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$12();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$11();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "ir-accordion":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "ir-booking-guarantee":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-daily-revenue-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-guest-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-payment-action":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-payment-actions":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-payment-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-payment-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-payments-folio":
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
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-revenue-row":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-revenue-row-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-revenue-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-revenue-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-stats-card":
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

export { IrDailyRevenue as I, defineCustomElement as d };

//# sourceMappingURL=ir-daily-revenue2.js.map
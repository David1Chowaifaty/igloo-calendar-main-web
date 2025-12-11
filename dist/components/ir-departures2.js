import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { o as onDeparturesStoreChange, d as departuresStore, s as setDepartureTotal, i as initializeDeparturesStore, a as setDeparturesPage, b as setDeparturesPageSize } from './departures.store.js';
import { R as RoomService } from './room.service.js';
import { B as BookingService } from './booking.service.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$1n } from './igl-application-info2.js';
import { d as defineCustomElement$1m } from './igl-block-dates-view2.js';
import { d as defineCustomElement$1l } from './igl-book-property2.js';
import { d as defineCustomElement$1k } from './igl-book-property-footer2.js';
import { d as defineCustomElement$1j } from './igl-book-property-header2.js';
import { d as defineCustomElement$1i } from './igl-booking-form2.js';
import { d as defineCustomElement$1h } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$1g } from './igl-date-range2.js';
import { d as defineCustomElement$1f } from './igl-property-booked-by2.js';
import { d as defineCustomElement$1e } from './igl-rate-plan2.js';
import { d as defineCustomElement$1d } from './igl-room-type2.js';
import { d as defineCustomElement$1c } from './ir-actions-cell2.js';
import { d as defineCustomElement$1b } from './ir-applicable-policies2.js';
import { d as defineCustomElement$1a } from './ir-autocomplete2.js';
import { d as defineCustomElement$19 } from './ir-balance-cell2.js';
import { d as defineCustomElement$18 } from './ir-billing2.js';
import { d as defineCustomElement$17 } from './ir-billing-drawer2.js';
import { d as defineCustomElement$16 } from './ir-booked-by-cell2.js';
import { d as defineCustomElement$15 } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$14 } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$13 } from './ir-booking-company-form2.js';
import { d as defineCustomElement$12 } from './ir-booking-details2.js';
import { d as defineCustomElement$11 } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$10 } from './ir-booking-guarantee2.js';
import { d as defineCustomElement$$ } from './ir-booking-header2.js';
import { d as defineCustomElement$_ } from './ir-booking-number-cell2.js';
import { d as defineCustomElement$Z } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$Y } from './ir-button2.js';
import { d as defineCustomElement$X } from './ir-checkout-dialog2.js';
import { d as defineCustomElement$W } from './ir-combobox2.js';
import { d as defineCustomElement$V } from './ir-country-picker2.js';
import { d as defineCustomElement$U } from './ir-custom-button2.js';
import { d as defineCustomElement$T } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$S } from './ir-date-range2.js';
import { d as defineCustomElement$R } from './ir-date-view2.js';
import { d as defineCustomElement$Q } from './ir-dates-cell2.js';
import { d as defineCustomElement$P } from './ir-departures-table2.js';
import { d as defineCustomElement$O } from './ir-dialog2.js';
import { d as defineCustomElement$N } from './ir-drawer2.js';
import { d as defineCustomElement$M } from './ir-empty-state2.js';
import { d as defineCustomElement$L } from './ir-events-log2.js';
import { d as defineCustomElement$K } from './ir-extra-service2.js';
import { d as defineCustomElement$J } from './ir-extra-service-config2.js';
import { d as defineCustomElement$I } from './ir-extra-service-config-form2.js';
import { d as defineCustomElement$H } from './ir-extra-services2.js';
import { d as defineCustomElement$G } from './ir-guest-info-drawer2.js';
import { d as defineCustomElement$F } from './ir-guest-info-form2.js';
import { d as defineCustomElement$E } from './ir-guest-name-cell2.js';
import { d as defineCustomElement$D } from './ir-icon2.js';
import { d as defineCustomElement$C } from './ir-icons2.js';
import { d as defineCustomElement$B } from './ir-input2.js';
import { d as defineCustomElement$A } from './ir-input-text2.js';
import { d as defineCustomElement$z } from './ir-interceptor2.js';
import { d as defineCustomElement$y } from './ir-invoice2.js';
import { d as defineCustomElement$x } from './ir-invoice-form2.js';
import { d as defineCustomElement$w } from './ir-label2.js';
import { d as defineCustomElement$v } from './ir-loading-screen2.js';
import { d as defineCustomElement$u } from './ir-mobile-input2.js';
import { d as defineCustomElement$t } from './ir-otp2.js';
import { d as defineCustomElement$s } from './ir-otp-modal2.js';
import { d as defineCustomElement$r } from './ir-pagination2.js';
import { d as defineCustomElement$q } from './ir-payment-details2.js';
import { d as defineCustomElement$p } from './ir-payment-folio2.js';
import { d as defineCustomElement$o } from './ir-payment-folio-form2.js';
import { d as defineCustomElement$n } from './ir-payment-item2.js';
import { d as defineCustomElement$m } from './ir-payment-summary2.js';
import { d as defineCustomElement$l } from './ir-payments-folio2.js';
import { d as defineCustomElement$k } from './ir-phone-input2.js';
import { d as defineCustomElement$j } from './ir-picker2.js';
import { d as defineCustomElement$i } from './ir-picker-item2.js';
import { d as defineCustomElement$h } from './ir-pickup2.js';
import { d as defineCustomElement$g } from './ir-pickup-form2.js';
import { d as defineCustomElement$f } from './ir-pickup-view2.js';
import { d as defineCustomElement$e } from './ir-pms-logs2.js';
import { d as defineCustomElement$d } from './ir-popover2.js';
import { d as defineCustomElement$c } from './ir-reservation-information2.js';
import { d as defineCustomElement$b } from './ir-room2.js';
import { d as defineCustomElement$a } from './ir-room-guests2.js';
import { d as defineCustomElement$9 } from './ir-room-guests-form2.js';
import { d as defineCustomElement$8 } from './ir-select2.js';
import { d as defineCustomElement$7 } from './ir-spinner2.js';
import { d as defineCustomElement$6 } from './ir-toast2.js';
import { d as defineCustomElement$5 } from './ir-tooltip2.js';
import { d as defineCustomElement$4 } from './ir-unit-cell2.js';
import { d as defineCustomElement$3 } from './ir-unit-tag2.js';
import { d as defineCustomElement$2 } from './ir-validator2.js';
import { d as defineCustomElement$1 } from './ota-label2.js';

const irDeparturesCss = ".page-title.sc-ir-departures{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}";
const IrDeparturesStyle0 = irDeparturesCss;

const IrDepartures = /*@__PURE__*/ proxyCustomElement(class IrDepartures extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    ticket;
    propertyid;
    language = 'en';
    p;
    bookingNumber;
    booking;
    paymentEntries;
    isPageLoading;
    payment;
    checkoutState = null;
    invoiceState = null;
    tokenService = new Token();
    roomService = new RoomService();
    bookingService = new BookingService();
    paymentFolioRef;
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
        onDeparturesStoreChange('today', _ => {
            this.getBookings();
        });
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleOpen(e) {
        this.bookingNumber = e.detail;
    }
    handleBookingPayment(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { booking_nbr, payment } = e.detail;
        this.booking = departuresStore.bookings.find(b => b.booking_nbr === booking_nbr);
        const paymentType = this.paymentEntries.types.find(p => p.CODE_NAME === payment.payment_type.code);
        this.payment = {
            ...payment,
            payment_type: {
                code: paymentType.CODE_NAME,
                description: paymentType.CODE_VALUE_EN,
                operation: paymentType.NOTES,
            },
        };
        this.paymentFolioRef.openFolio();
    }
    async init() {
        try {
            this.isPageLoading = true;
            if (!this.propertyid && !this.p) {
                throw new Error('Missing credentials');
            }
            let propertyId = this.propertyid;
            if (!propertyId) {
                await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
            }
            const [_, __, setupEntries] = await Promise.all([
                calendar_data?.property ? Promise.resolve(null) : this.roomService.getExposedProperty({ id: this.propertyid || 0, language: this.language, aname: this.p }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getSetupEntriesByTableNameMulti(['_BED_PREFERENCE_TYPE', '_DEPARTURE_TIME', '_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']),
                this.getBookings(),
            ]);
            const { pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.paymentEntries = { types: pay_type, groups: pay_type_group, methods: pay_method };
        }
        catch (error) {
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getBookings() {
        const { bookings, total_count } = await this.bookingService.getRoomsToCheckout({
            property_id: calendar_data.property.id?.toString() ?? this.propertyid?.toString(),
            check_out_date: departuresStore.today,
            page_index: departuresStore.pagination.currentPage,
            page_size: departuresStore.pagination.pageSize,
        });
        setDepartureTotal(total_count ?? 0);
        initializeDeparturesStore(bookings);
    }
    handleCheckoutRoom(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.checkoutState = event.detail;
    }
    async handlePaginationChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const nextPage = event.detail?.currentPage ?? 1;
        if (nextPage === departuresStore.pagination.currentPage) {
            return;
        }
        setDeparturesPage(nextPage);
        await this.getBookings();
    }
    async handleCheckoutDialogClosed(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const state = { ...this.checkoutState };
        this.checkoutState = null;
        switch (event.detail.reason) {
            case 'checkout':
                await this.getBookings();
                break;
            case 'openInvoice':
                this.invoiceState = { ...state };
                await this.getBookings();
                break;
        }
    }
    async handlePaginationPageSizeChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const nextPageSize = event.detail?.pageSize;
        if (!Number.isFinite(nextPageSize)) {
            return;
        }
        const normalizedPageSize = Math.floor(Number(nextPageSize));
        if (normalizedPageSize === departuresStore.pagination.pageSize) {
            return;
        }
        setDeparturesPageSize(normalizedPageSize);
        await this.getBookings();
    }
    handleInvoiceClose(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.invoiceState = null;
    }
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", { handledEndpoints: ['/Get_Rooms_To_Check_Out'] }), h("div", { class: 'ir-page__container' }, h("h3", { class: "page-title" }, "Departures"), h("ir-departures-table", { onCheckoutRoom: event => this.handleCheckoutRoom(event), onRequestPageChange: event => this.handlePaginationChange(event), onRequestPageSizeChange: event => this.handlePaginationPageSizeChange(event) })), h("ir-drawer", { onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingNumber = null;
            }, withoutHeader: true, open: !!this.bookingNumber, style: {
                '--ir-drawer-width': '80rem',
                '--ir-drawer-background-color': '#F2F3F8',
                '--ir-drawer-padding-left': '0',
                '--ir-drawer-padding-right': '0',
                '--ir-drawer-padding-top': '0',
                '--ir-drawer-padding-bottom': '0',
            } }, this.bookingNumber && (h("ir-booking-details", { hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.bookingNumber = null), is_from_front_desk: true, propertyid: this.propertyid, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.bookingNumber.toString(), ticket: this.ticket, language: this.language, hasRoomAdd: true }))), h("ir-payment-folio", { style: { height: 'auto' }, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
                this.booking = null;
                this.payment = null;
            } }), h("ir-checkout-dialog", { booking: this.checkoutState?.booking, identifier: this.checkoutState?.identifier, open: this.checkoutState !== null, onCheckoutDialogClosed: event => this.handleCheckoutDialogClosed(event) }), h("ir-invoice", { onInvoiceClose: event => this.handleInvoiceClose(event), booking: this.invoiceState?.booking, roomIdentifier: this.invoiceState?.identifier, open: this.invoiceState !== null })));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
    static get style() { return IrDeparturesStyle0; }
}, [2, "ir-departures", {
        "ticket": [1],
        "propertyid": [2],
        "language": [1],
        "p": [1],
        "bookingNumber": [32],
        "booking": [32],
        "paymentEntries": [32],
        "isPageLoading": [32],
        "payment": [32],
        "checkoutState": [32],
        "invoiceState": [32]
    }, [[0, "openBookingDetails", "handleOpen"], [0, "payBookingBalance", "handleBookingPayment"]], {
        "ticket": ["handleTicketChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-departures", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-footer", "igl-book-property-header", "igl-booking-form", "igl-booking-overview-page", "igl-date-range", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "ir-actions-cell", "ir-applicable-policies", "ir-autocomplete", "ir-balance-cell", "ir-billing", "ir-billing-drawer", "ir-booked-by-cell", "ir-booking-billing-recipient", "ir-booking-company-dialog", "ir-booking-company-form", "ir-booking-details", "ir-booking-extra-note", "ir-booking-guarantee", "ir-booking-header", "ir-booking-number-cell", "ir-booking-status-tag", "ir-button", "ir-checkout-dialog", "ir-combobox", "ir-country-picker", "ir-custom-button", "ir-custom-date-picker", "ir-date-range", "ir-date-view", "ir-dates-cell", "ir-departures-table", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-service-config-form", "ir-extra-services", "ir-guest-info-drawer", "ir-guest-info-form", "ir-guest-name-cell", "ir-icon", "ir-icons", "ir-input", "ir-input-text", "ir-interceptor", "ir-invoice", "ir-invoice-form", "ir-label", "ir-loading-screen", "ir-mobile-input", "ir-otp", "ir-otp-modal", "ir-pagination", "ir-payment-details", "ir-payment-folio", "ir-payment-folio-form", "ir-payment-item", "ir-payment-summary", "ir-payments-folio", "ir-phone-input", "ir-picker", "ir-picker-item", "ir-pickup", "ir-pickup-form", "ir-pickup-view", "ir-pms-logs", "ir-popover", "ir-reservation-information", "ir-room", "ir-room-guests", "ir-room-guests-form", "ir-select", "ir-spinner", "ir-toast", "ir-tooltip", "ir-unit-cell", "ir-unit-tag", "ir-validator", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-departures":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDepartures);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$1n();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$1m();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$1l();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1k();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1j();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1i();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$1h();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$1g();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$1f();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$1e();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$1d();
            }
            break;
        case "ir-actions-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$1c();
            }
            break;
        case "ir-applicable-policies":
            if (!customElements.get(tagName)) {
                defineCustomElement$1b();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$1a();
            }
            break;
        case "ir-balance-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$19();
            }
            break;
        case "ir-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$18();
            }
            break;
        case "ir-billing-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$17();
            }
            break;
        case "ir-booked-by-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$16();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$15();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$14();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$13();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$12();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$11();
            }
            break;
        case "ir-booking-guarantee":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "ir-booking-number-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "ir-checkout-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-dates-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-departures-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-extra-service-config-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-guest-info-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-guest-info-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-guest-name-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-input":
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
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-payment-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-payment-folio-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-payment-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-pickup-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-reservation-information":
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
        case "ir-room-guests-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-unit-cell":
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

export { IrDepartures as I, defineCustomElement as d };

//# sourceMappingURL=ir-departures2.js.map
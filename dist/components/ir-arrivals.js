import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { B as BookingService } from './booking.service.js';
import { R as RoomService } from './room.service.js';
import { a as arrivalsStore } from './arrivals.store.js';
import { d as defineCustomElement$1h } from './igl-application-info2.js';
import { d as defineCustomElement$1g } from './igl-block-dates-view2.js';
import { d as defineCustomElement$1f } from './igl-book-property2.js';
import { d as defineCustomElement$1e } from './igl-book-property-footer2.js';
import { d as defineCustomElement$1d } from './igl-book-property-header2.js';
import { d as defineCustomElement$1c } from './igl-booking-form2.js';
import { d as defineCustomElement$1b } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$1a } from './igl-date-range2.js';
import { d as defineCustomElement$19 } from './igl-property-booked-by2.js';
import { d as defineCustomElement$18 } from './igl-rate-plan2.js';
import { d as defineCustomElement$17 } from './igl-room-type2.js';
import { d as defineCustomElement$16 } from './ir-actions-cell2.js';
import { d as defineCustomElement$15 } from './ir-applicable-policies2.js';
import { d as defineCustomElement$14 } from './ir-arrivals-filters2.js';
import { d as defineCustomElement$13 } from './ir-arrivals-table2.js';
import { d as defineCustomElement$12 } from './ir-autocomplete2.js';
import { d as defineCustomElement$11 } from './ir-balance-cell2.js';
import { d as defineCustomElement$10 } from './ir-booked-by-cell2.js';
import { d as defineCustomElement$$ } from './ir-booking-company-form2.js';
import { d as defineCustomElement$_ } from './ir-booking-details2.js';
import { d as defineCustomElement$Z } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$Y } from './ir-booking-guarantee2.js';
import { d as defineCustomElement$X } from './ir-booking-header2.js';
import { d as defineCustomElement$W } from './ir-booking-number-cell2.js';
import { d as defineCustomElement$V } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$U } from './ir-button2.js';
import { d as defineCustomElement$T } from './ir-combobox2.js';
import { d as defineCustomElement$S } from './ir-country-picker2.js';
import { d as defineCustomElement$R } from './ir-custom-button2.js';
import { d as defineCustomElement$Q } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$P } from './ir-custom-input2.js';
import { d as defineCustomElement$O } from './ir-date-picker2.js';
import { d as defineCustomElement$N } from './ir-date-range2.js';
import { d as defineCustomElement$M } from './ir-date-view2.js';
import { d as defineCustomElement$L } from './ir-dates-cell2.js';
import { d as defineCustomElement$K } from './ir-dialog2.js';
import { d as defineCustomElement$J } from './ir-drawer2.js';
import { d as defineCustomElement$I } from './ir-events-log2.js';
import { d as defineCustomElement$H } from './ir-extra-service2.js';
import { d as defineCustomElement$G } from './ir-extra-service-config2.js';
import { d as defineCustomElement$F } from './ir-extra-services2.js';
import { d as defineCustomElement$E } from './ir-guest-info-drawer2.js';
import { d as defineCustomElement$D } from './ir-guest-info-form2.js';
import { d as defineCustomElement$C } from './ir-guest-name-cell2.js';
import { d as defineCustomElement$B } from './ir-icon2.js';
import { d as defineCustomElement$A } from './ir-icons2.js';
import { d as defineCustomElement$z } from './ir-input-text2.js';
import { d as defineCustomElement$y } from './ir-interceptor2.js';
import { d as defineCustomElement$x } from './ir-label2.js';
import { d as defineCustomElement$w } from './ir-loading-screen2.js';
import { d as defineCustomElement$v } from './ir-mobile-input2.js';
import { d as defineCustomElement$u } from './ir-modal2.js';
import { d as defineCustomElement$t } from './ir-otp2.js';
import { d as defineCustomElement$s } from './ir-otp-modal2.js';
import { d as defineCustomElement$r } from './ir-payment-details2.js';
import { d as defineCustomElement$q } from './ir-payment-folio2.js';
import { d as defineCustomElement$p } from './ir-payment-item2.js';
import { d as defineCustomElement$o } from './ir-payment-summary2.js';
import { d as defineCustomElement$n } from './ir-payments-folio2.js';
import { d as defineCustomElement$m } from './ir-phone-input2.js';
import { d as defineCustomElement$l } from './ir-picker2.js';
import { d as defineCustomElement$k } from './ir-picker-item2.js';
import { d as defineCustomElement$j } from './ir-pickup2.js';
import { d as defineCustomElement$i } from './ir-pickup-view2.js';
import { d as defineCustomElement$h } from './ir-pms-logs2.js';
import { d as defineCustomElement$g } from './ir-popover2.js';
import { d as defineCustomElement$f } from './ir-price-input2.js';
import { d as defineCustomElement$e } from './ir-reservation-information2.js';
import { d as defineCustomElement$d } from './ir-room2.js';
import { d as defineCustomElement$c } from './ir-room-guests2.js';
import { d as defineCustomElement$b } from './ir-select2.js';
import { d as defineCustomElement$a } from './ir-sidebar2.js';
import { d as defineCustomElement$9 } from './ir-spinner2.js';
import { d as defineCustomElement$8 } from './ir-title2.js';
import { d as defineCustomElement$7 } from './ir-toast2.js';
import { d as defineCustomElement$6 } from './ir-tooltip2.js';
import { d as defineCustomElement$5 } from './ir-unit-cell2.js';
import { d as defineCustomElement$4 } from './ir-unit-tag2.js';
import { d as defineCustomElement$3 } from './ir-validator2.js';
import { d as defineCustomElement$2 } from './ota-label2.js';

const hostCss = ".sc-ir-arrivals-h{box-sizing:border-box !important}.sc-ir-arrivals-h *.sc-ir-arrivals,.sc-ir-arrivals-h *.sc-ir-arrivals::before,.sc-ir-arrivals-h *.sc-ir-arrivals::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-arrivals{display:none !important}";
const IrArrivalsStyle0 = hostCss;

const irArrivalsCss = ".sc-ir-arrivals-h{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);min-height:100vh}.page-title.sc-ir-arrivals{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}";
const IrArrivalsStyle1 = irArrivalsCss;

const IrArrivals$1 = /*@__PURE__*/ proxyCustomElement(class IrArrivals extends HTMLElement {
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
    tokenService = new Token();
    roomService = new RoomService();
    bookingService = new BookingService();
    paymentFolioRef;
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleBookingPayment(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { booking_nbr, payment } = e.detail;
        this.booking = arrivalsStore.bookings.find(b => b.booking_nbr === booking_nbr);
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
    handleOpen(e) {
        this.bookingNumber = e.detail;
    }
    async init() {
        try {
            this.isPageLoading = true;
            const [_, __, setupEntries] = await Promise.all([
                this.roomService.getExposedProperty({ id: this.propertyid || 0, language: this.language, aname: this.p }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getSetupEntriesByTableNameMulti(['_BED_PREFERENCE_TYPE', '_DEPARTURE_TIME', '_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']),
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
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", { style: { display: 'none' } }), h("ir-interceptor", { style: { display: 'none' } }), h("h3", { class: "page-title" }, "Arrivals"), h("ir-arrivals-filters", null), h("ir-arrivals-table", null), h("ir-drawer", { onDrawerHide: e => {
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
            } })));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
    static get style() { return IrArrivalsStyle0 + IrArrivalsStyle1; }
}, [2, "ir-arrivals", {
        "ticket": [1],
        "propertyid": [2],
        "language": [1],
        "p": [1],
        "bookingNumber": [32],
        "booking": [32],
        "paymentEntries": [32],
        "isPageLoading": [32],
        "payment": [32]
    }, [[0, "payBookingBalance", "handleBookingPayment"], [0, "openBookingDetails", "handleOpen"]], {
        "ticket": ["handleTicketChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-arrivals", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-footer", "igl-book-property-header", "igl-booking-form", "igl-booking-overview-page", "igl-date-range", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "ir-actions-cell", "ir-applicable-policies", "ir-arrivals-filters", "ir-arrivals-table", "ir-autocomplete", "ir-balance-cell", "ir-booked-by-cell", "ir-booking-company-form", "ir-booking-details", "ir-booking-extra-note", "ir-booking-guarantee", "ir-booking-header", "ir-booking-number-cell", "ir-booking-status-tag", "ir-button", "ir-combobox", "ir-country-picker", "ir-custom-button", "ir-custom-date-picker", "ir-custom-input", "ir-date-picker", "ir-date-range", "ir-date-view", "ir-dates-cell", "ir-dialog", "ir-drawer", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-services", "ir-guest-info-drawer", "ir-guest-info-form", "ir-guest-name-cell", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-label", "ir-loading-screen", "ir-mobile-input", "ir-modal", "ir-otp", "ir-otp-modal", "ir-payment-details", "ir-payment-folio", "ir-payment-item", "ir-payment-summary", "ir-payments-folio", "ir-phone-input", "ir-picker", "ir-picker-item", "ir-pickup", "ir-pickup-view", "ir-pms-logs", "ir-popover", "ir-price-input", "ir-reservation-information", "ir-room", "ir-room-guests", "ir-select", "ir-sidebar", "ir-spinner", "ir-title", "ir-toast", "ir-tooltip", "ir-unit-cell", "ir-unit-tag", "ir-validator", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-arrivals":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrArrivals$1);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$1h();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$1g();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$1f();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1e();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1d();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1c();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$1b();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$1a();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$19();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$18();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$17();
            }
            break;
        case "ir-actions-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$16();
            }
            break;
        case "ir-applicable-policies":
            if (!customElements.get(tagName)) {
                defineCustomElement$15();
            }
            break;
        case "ir-arrivals-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$14();
            }
            break;
        case "ir-arrivals-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$13();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$12();
            }
            break;
        case "ir-balance-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$11();
            }
            break;
        case "ir-booked-by-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "ir-booking-guarantee":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "ir-booking-number-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-custom-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-dates-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-guest-info-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-guest-info-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-guest-name-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-modal":
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
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-room-guests":
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
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-unit-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-unit-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ota-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrArrivals = IrArrivals$1;
const defineCustomElement = defineCustomElement$1;

export { IrArrivals, defineCustomElement };

//# sourceMappingURL=ir-arrivals.js.map
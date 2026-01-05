import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1e } from './igl-application-info2.js';
import { d as defineCustomElement$1d } from './igl-date-range2.js';
import { d as defineCustomElement$1c } from './igl-rate-plan2.js';
import { d as defineCustomElement$1b } from './igl-room-type2.js';
import { d as defineCustomElement$1a } from './ir-air-date-picker2.js';
import { d as defineCustomElement$19 } from './ir-applicable-policies2.js';
import { d as defineCustomElement$18 } from './ir-billing2.js';
import { d as defineCustomElement$17 } from './ir-billing-drawer2.js';
import { d as defineCustomElement$16 } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$15 } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$14 } from './ir-booking-company-form2.js';
import { d as defineCustomElement$13 } from './ir-booking-details2.js';
import { d as defineCustomElement$12 } from './ir-booking-editor2.js';
import { d as defineCustomElement$11 } from './ir-booking-editor-drawer2.js';
import { d as defineCustomElement$10 } from './ir-booking-editor-form2.js';
import { d as defineCustomElement$$ } from './ir-booking-editor-guest-form2.js';
import { d as defineCustomElement$_ } from './ir-booking-editor-header2.js';
import { d as defineCustomElement$Z } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$Y } from './ir-booking-guarantee2.js';
import { d as defineCustomElement$X } from './ir-booking-header2.js';
import { d as defineCustomElement$W } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$V } from './ir-button2.js';
import { d as defineCustomElement$U } from './ir-checkout-dialog2.js';
import { d as defineCustomElement$T } from './ir-country-picker2.js';
import { d as defineCustomElement$S } from './ir-custom-button2.js';
import { d as defineCustomElement$R } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$Q } from './ir-date-select2.js';
import { d as defineCustomElement$P } from './ir-date-view2.js';
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
import { d as defineCustomElement$E } from './ir-icons2.js';
import { d as defineCustomElement$D } from './ir-input2.js';
import { d as defineCustomElement$C } from './ir-input-text2.js';
import { d as defineCustomElement$B } from './ir-interceptor2.js';
import { d as defineCustomElement$A } from './ir-invoice2.js';
import { d as defineCustomElement$z } from './ir-invoice-form2.js';
import { d as defineCustomElement$y } from './ir-label2.js';
import { d as defineCustomElement$x } from './ir-mobile-input2.js';
import { d as defineCustomElement$w } from './ir-otp2.js';
import { d as defineCustomElement$v } from './ir-otp-modal2.js';
import { d as defineCustomElement$u } from './ir-payment-details2.js';
import { d as defineCustomElement$t } from './ir-payment-folio2.js';
import { d as defineCustomElement$s } from './ir-payment-folio-form2.js';
import { d as defineCustomElement$r } from './ir-payment-item2.js';
import { d as defineCustomElement$q } from './ir-payment-summary2.js';
import { d as defineCustomElement$p } from './ir-payments-folio2.js';
import { d as defineCustomElement$o } from './ir-picker2.js';
import { d as defineCustomElement$n } from './ir-picker-item2.js';
import { d as defineCustomElement$m } from './ir-pickup2.js';
import { d as defineCustomElement$l } from './ir-pickup-form2.js';
import { d as defineCustomElement$k } from './ir-pickup-view2.js';
import { d as defineCustomElement$j } from './ir-pms-logs2.js';
import { d as defineCustomElement$i } from './ir-popover2.js';
import { d as defineCustomElement$h } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$g } from './ir-print-room2.js';
import { d as defineCustomElement$f } from './ir-printing-extra-service2.js';
import { d as defineCustomElement$e } from './ir-printing-label2.js';
import { d as defineCustomElement$d } from './ir-printing-pickup2.js';
import { d as defineCustomElement$c } from './ir-proforma-invoice-preview2.js';
import { d as defineCustomElement$b } from './ir-reservation-information2.js';
import { d as defineCustomElement$a } from './ir-room2.js';
import { d as defineCustomElement$9 } from './ir-room-guests2.js';
import { d as defineCustomElement$8 } from './ir-room-guests-form2.js';
import { d as defineCustomElement$7 } from './ir-spinner2.js';
import { d as defineCustomElement$6 } from './ir-toast2.js';
import { d as defineCustomElement$5 } from './ir-toast-alert2.js';
import { d as defineCustomElement$4 } from './ir-toast-provider2.js';
import { d as defineCustomElement$3 } from './ir-unit-tag2.js';
import { d as defineCustomElement$2 } from './ir-validator2.js';
import { d as defineCustomElement$1 } from './ota-label2.js';

const irBookingDetailsDrawerCss = ".sc-ir-booking-details-drawer-h{display:block}";
const IrBookingDetailsDrawerStyle0 = irBookingDetailsDrawerCss;

const IrBookingDetailsDrawer = /*@__PURE__*/ proxyCustomElement(class IrBookingDetailsDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.bookingDetailsDrawerClosed = createEvent(this, "bookingDetailsDrawerClosed", 7);
    }
    /**
     * Controls whether the drawer is open.
     */
    open;
    /**
     * Property ID associated with the booking.
     */
    propertyId;
    /**
     * Authentication or session ticket.
     */
    ticket;
    /**
     * Language code used for localization.
     * Defaults to English (`en`).
     */
    language = 'en';
    /**
     * Booking reference number.
     */
    bookingNumber;
    /**
     * Emitted when the booking details drawer is closed.
     */
    bookingDetailsDrawerClosed;
    /**
     * Handles closing the drawer.
     *
     * This method is used for all close interactions (drawer hide,
     * close button, or programmatic close) to ensure a single source
     * of truth for the close behavior.
     */
    handleClose = (e) => {
        if (e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
        }
        this.bookingDetailsDrawerClosed.emit();
    };
    render() {
        return (h("ir-drawer", { key: 'aea0e5902d660023344b08323ff1b44d7e49f3b9', onDrawerHide: this.handleClose, withoutHeader: true, open: this.open, style: {
                '--ir-drawer-width': '80rem',
                '--ir-drawer-background-color': '#F2F3F8',
                '--ir-drawer-padding-left': '0',
                '--ir-drawer-padding-right': '0',
                '--ir-drawer-padding-top': '0',
                '--ir-drawer-padding-bottom': '0',
            } }, this.open && (h("ir-booking-details", { key: 'b0c9893ea931e8cd52ac01fefada56bc514c07d5', hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: this.handleClose, is_from_front_desk: true, propertyid: this.propertyId, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.bookingNumber.toString(), ticket: this.ticket, language: this.language, hasRoomAdd: true }))));
    }
    static get style() { return IrBookingDetailsDrawerStyle0; }
}, [2, "ir-booking-details-drawer", {
        "open": [516],
        "propertyId": [2, "property-id"],
        "ticket": [1],
        "language": [1],
        "bookingNumber": [1, "booking-number"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-details-drawer", "igl-application-info", "igl-date-range", "igl-rate-plan", "igl-room-type", "ir-air-date-picker", "ir-applicable-policies", "ir-billing", "ir-billing-drawer", "ir-booking-billing-recipient", "ir-booking-company-dialog", "ir-booking-company-form", "ir-booking-details", "ir-booking-editor", "ir-booking-editor-drawer", "ir-booking-editor-form", "ir-booking-editor-guest-form", "ir-booking-editor-header", "ir-booking-extra-note", "ir-booking-guarantee", "ir-booking-header", "ir-booking-status-tag", "ir-button", "ir-checkout-dialog", "ir-country-picker", "ir-custom-button", "ir-custom-date-picker", "ir-date-select", "ir-date-view", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-service-config-form", "ir-extra-services", "ir-guest-info-drawer", "ir-guest-info-form", "ir-icons", "ir-input", "ir-input-text", "ir-interceptor", "ir-invoice", "ir-invoice-form", "ir-label", "ir-mobile-input", "ir-otp", "ir-otp-modal", "ir-payment-details", "ir-payment-folio", "ir-payment-folio-form", "ir-payment-item", "ir-payment-summary", "ir-payments-folio", "ir-picker", "ir-picker-item", "ir-pickup", "ir-pickup-form", "ir-pickup-view", "ir-pms-logs", "ir-popover", "ir-preview-screen-dialog", "ir-print-room", "ir-printing-extra-service", "ir-printing-label", "ir-printing-pickup", "ir-proforma-invoice-preview", "ir-reservation-information", "ir-room", "ir-room-guests", "ir-room-guests-form", "ir-spinner", "ir-toast", "ir-toast-alert", "ir-toast-provider", "ir-unit-tag", "ir-validator", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-details-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingDetailsDrawer);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$1e();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$1d();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$1c();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$1b();
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$1a();
            }
            break;
        case "ir-applicable-policies":
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
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$16();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$15();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$14();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$13();
            }
            break;
        case "ir-booking-editor":
            if (!customElements.get(tagName)) {
                defineCustomElement$12();
            }
            break;
        case "ir-booking-editor-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$11();
            }
            break;
        case "ir-booking-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "ir-booking-editor-guest-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "ir-booking-editor-header":
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
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "ir-checkout-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-date-view":
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
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-payment-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-payment-folio-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-payment-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-pickup-form":
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
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-print-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-printing-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-printing-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-printing-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-proforma-invoice-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-room-guests-form":
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
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-toast-provider":
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

export { IrBookingDetailsDrawer as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-details-drawer2.js.map
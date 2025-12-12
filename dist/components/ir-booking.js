import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { P as checkUserAuthState, Q as manageAnchorSession } from './utils.js';
import { d as defineCustomElement$1a } from './igl-application-info2.js';
import { d as defineCustomElement$19 } from './igl-block-dates-view2.js';
import { d as defineCustomElement$18 } from './igl-book-property2.js';
import { d as defineCustomElement$17 } from './igl-book-property-footer2.js';
import { d as defineCustomElement$16 } from './igl-book-property-header2.js';
import { d as defineCustomElement$15 } from './igl-booking-form2.js';
import { d as defineCustomElement$14 } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$13 } from './igl-date-range2.js';
import { d as defineCustomElement$12 } from './igl-property-booked-by2.js';
import { d as defineCustomElement$11 } from './igl-rate-plan2.js';
import { d as defineCustomElement$10 } from './igl-room-type2.js';
import { d as defineCustomElement$$ } from './ir-applicable-policies2.js';
import { d as defineCustomElement$_ } from './ir-billing2.js';
import { d as defineCustomElement$Z } from './ir-billing-drawer2.js';
import { d as defineCustomElement$Y } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$X } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$W } from './ir-booking-company-form2.js';
import { d as defineCustomElement$V } from './ir-booking-details2.js';
import { d as defineCustomElement$U } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$T } from './ir-booking-guarantee2.js';
import { d as defineCustomElement$S } from './ir-booking-header2.js';
import { d as defineCustomElement$R } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$Q } from './ir-button2.js';
import { d as defineCustomElement$P } from './ir-checkout-dialog2.js';
import { d as defineCustomElement$O } from './ir-country-picker2.js';
import { d as defineCustomElement$N } from './ir-custom-button2.js';
import { d as defineCustomElement$M } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$L } from './ir-date-range2.js';
import { d as defineCustomElement$K } from './ir-date-view2.js';
import { d as defineCustomElement$J } from './ir-dialog2.js';
import { d as defineCustomElement$I } from './ir-drawer2.js';
import { d as defineCustomElement$H } from './ir-empty-state2.js';
import { d as defineCustomElement$G } from './ir-events-log2.js';
import { d as defineCustomElement$F } from './ir-extra-service2.js';
import { d as defineCustomElement$E } from './ir-extra-service-config2.js';
import { d as defineCustomElement$D } from './ir-extra-service-config-form2.js';
import { d as defineCustomElement$C } from './ir-extra-services2.js';
import { d as defineCustomElement$B } from './ir-guest-info-drawer2.js';
import { d as defineCustomElement$A } from './ir-guest-info-form2.js';
import { d as defineCustomElement$z } from './ir-icon2.js';
import { d as defineCustomElement$y } from './ir-icons2.js';
import { d as defineCustomElement$x } from './ir-input2.js';
import { d as defineCustomElement$w } from './ir-input-text2.js';
import { d as defineCustomElement$v } from './ir-interceptor2.js';
import { d as defineCustomElement$u } from './ir-invoice2.js';
import { d as defineCustomElement$t } from './ir-invoice-form2.js';
import { d as defineCustomElement$s } from './ir-label2.js';
import { d as defineCustomElement$r } from './ir-login2.js';
import { d as defineCustomElement$q } from './ir-mobile-input2.js';
import { d as defineCustomElement$p } from './ir-otp2.js';
import { d as defineCustomElement$o } from './ir-otp-modal2.js';
import { d as defineCustomElement$n } from './ir-payment-details2.js';
import { d as defineCustomElement$m } from './ir-payment-folio2.js';
import { d as defineCustomElement$l } from './ir-payment-folio-form2.js';
import { d as defineCustomElement$k } from './ir-payment-item2.js';
import { d as defineCustomElement$j } from './ir-payment-summary2.js';
import { d as defineCustomElement$i } from './ir-payments-folio2.js';
import { d as defineCustomElement$h } from './ir-picker2.js';
import { d as defineCustomElement$g } from './ir-picker-item2.js';
import { d as defineCustomElement$f } from './ir-pickup2.js';
import { d as defineCustomElement$e } from './ir-pickup-form2.js';
import { d as defineCustomElement$d } from './ir-pickup-view2.js';
import { d as defineCustomElement$c } from './ir-pms-logs2.js';
import { d as defineCustomElement$b } from './ir-popover2.js';
import { d as defineCustomElement$a } from './ir-reservation-information2.js';
import { d as defineCustomElement$9 } from './ir-room2.js';
import { d as defineCustomElement$8 } from './ir-room-guests2.js';
import { d as defineCustomElement$7 } from './ir-room-guests-form2.js';
import { d as defineCustomElement$6 } from './ir-spinner2.js';
import { d as defineCustomElement$5 } from './ir-toast2.js';
import { d as defineCustomElement$4 } from './ir-unit-tag2.js';
import { d as defineCustomElement$3 } from './ir-validator2.js';
import { d as defineCustomElement$2 } from './ota-label2.js';

const irBookingCss = ".sc-ir-booking-h{display:block}";
const IrBookingStyle0 = irBookingCss;

const IrBooking$1 = /*@__PURE__*/ proxyCustomElement(class IrBooking extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    propertyid;
    p;
    bookingNumber;
    isAuthenticated = false;
    token = new Token();
    componentWillLoad() {
        const isAuthenticated = checkUserAuthState();
        if (isAuthenticated) {
            this.isAuthenticated = true;
            this.token.setToken(isAuthenticated.token);
        }
    }
    handleAuthFinish(e) {
        const token = e.detail.token;
        this.token.setToken(token);
        this.isAuthenticated = true;
        manageAnchorSession({ login: { method: 'direct', isLoggedIn: true, token } });
    }
    render() {
        if (!this.isAuthenticated)
            return (h(Host, null, h("ir-login", { onAuthFinish: this.handleAuthFinish.bind(this) })));
        return (h(Host, null, h("ir-booking-details", { p: this.p, hasPrint: true, hasReceipt: true, propertyid: this.propertyid, hasRoomEdit: true, hasRoomDelete: true, language: "en", ticket: this.token.getToken(), bookingNumber: this.bookingNumber })));
    }
    static get style() { return IrBookingStyle0; }
}, [2, "ir-booking", {
        "propertyid": [2],
        "p": [1],
        "bookingNumber": [1, "booking-number"],
        "isAuthenticated": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-footer", "igl-book-property-header", "igl-booking-form", "igl-booking-overview-page", "igl-date-range", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "ir-applicable-policies", "ir-billing", "ir-billing-drawer", "ir-booking-billing-recipient", "ir-booking-company-dialog", "ir-booking-company-form", "ir-booking-details", "ir-booking-extra-note", "ir-booking-guarantee", "ir-booking-header", "ir-booking-status-tag", "ir-button", "ir-checkout-dialog", "ir-country-picker", "ir-custom-button", "ir-custom-date-picker", "ir-date-range", "ir-date-view", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-service-config-form", "ir-extra-services", "ir-guest-info-drawer", "ir-guest-info-form", "ir-icon", "ir-icons", "ir-input", "ir-input-text", "ir-interceptor", "ir-invoice", "ir-invoice-form", "ir-label", "ir-login", "ir-mobile-input", "ir-otp", "ir-otp-modal", "ir-payment-details", "ir-payment-folio", "ir-payment-folio-form", "ir-payment-item", "ir-payment-summary", "ir-payments-folio", "ir-picker", "ir-picker-item", "ir-pickup", "ir-pickup-form", "ir-pickup-view", "ir-pms-logs", "ir-popover", "ir-reservation-information", "ir-room", "ir-room-guests", "ir-room-guests-form", "ir-spinner", "ir-toast", "ir-unit-tag", "ir-validator", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBooking$1);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$1a();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$19();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$18();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$17();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$16();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$15();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$14();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$13();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$12();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$11();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "ir-applicable-policies":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "ir-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "ir-billing-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "ir-booking-company-form":
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
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-checkout-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-extra-service-config-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-guest-info-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-guest-info-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-input":
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
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-login":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-payment-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-payment-folio-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-payment-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-pickup-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-room-guests-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-toast":
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

const IrBooking = IrBooking$1;
const defineCustomElement = defineCustomElement$1;

export { IrBooking, defineCustomElement };

//# sourceMappingURL=ir-booking.js.map
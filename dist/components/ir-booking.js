import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { s as checkUserAuthState, t as manageAnchorSession } from './utils.js';
import { a as axios } from './axios.js';
import { d as defineCustomElement$B } from './igl-application-info2.js';
import { d as defineCustomElement$A } from './igl-block-dates-view2.js';
import { d as defineCustomElement$z } from './igl-book-property2.js';
import { d as defineCustomElement$y } from './igl-book-property-footer2.js';
import { d as defineCustomElement$x } from './igl-book-property-header2.js';
import { d as defineCustomElement$w } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$v } from './igl-booking-room-rate-plan2.js';
import { d as defineCustomElement$u } from './igl-booking-rooms2.js';
import { d as defineCustomElement$t } from './igl-date-range2.js';
import { d as defineCustomElement$s } from './igl-pagetwo2.js';
import { d as defineCustomElement$r } from './igl-property-booked-by2.js';
import { d as defineCustomElement$q } from './ir-autocomplete2.js';
import { d as defineCustomElement$p } from './ir-booking-details2.js';
import { d as defineCustomElement$o } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$n } from './ir-button2.js';
import { d as defineCustomElement$m } from './ir-date-picker2.js';
import { d as defineCustomElement$l } from './ir-date-view2.js';
import { d as defineCustomElement$k } from './ir-dialog2.js';
import { d as defineCustomElement$j } from './ir-guest-info2.js';
import { d as defineCustomElement$i } from './ir-icon2.js';
import { d as defineCustomElement$h } from './ir-icons2.js';
import { d as defineCustomElement$g } from './ir-input-text2.js';
import { d as defineCustomElement$f } from './ir-interceptor2.js';
import { d as defineCustomElement$e } from './ir-label2.js';
import { d as defineCustomElement$d } from './ir-login2.js';
import { d as defineCustomElement$c } from './ir-modal2.js';
import { d as defineCustomElement$b } from './ir-payment-details2.js';
import { d as defineCustomElement$a } from './ir-pickup2.js';
import { d as defineCustomElement$9 } from './ir-room2.js';
import { d as defineCustomElement$8 } from './ir-select2.js';
import { d as defineCustomElement$7 } from './ir-sidebar2.js';
import { d as defineCustomElement$6 } from './ir-textarea2.js';
import { d as defineCustomElement$5 } from './ir-title2.js';
import { d as defineCustomElement$4 } from './ir-toast2.js';
import { d as defineCustomElement$3 } from './ir-tooltip2.js';
import { d as defineCustomElement$2 } from './ota-label2.js';

const irBookingCss = ".sc-ir-booking-h{display:block}";
const IrBookingStyle0 = irBookingCss;

const IrBooking$1 = /*@__PURE__*/ proxyCustomElement(class IrBooking extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.baseurl = '';
        this.propertyid = undefined;
        this.bookingNumber = undefined;
        this.token = undefined;
    }
    componentWillLoad() {
        axios.defaults.baseURL = this.baseurl;
        const isAuthenticated = checkUserAuthState();
        if (isAuthenticated) {
            this.token = isAuthenticated.token;
        }
    }
    handleAuthFinish(e) {
        this.token = e.detail.token;
        manageAnchorSession({ login: { method: 'direct', isLoggedIn: true, token: this.token } });
    }
    render() {
        if (!this.token)
            return (h(Host, null, h("ir-login", { baseurl: this.baseurl, onAuthFinish: this.handleAuthFinish.bind(this) })));
        return (h(Host, null, h("ir-booking-details", { hasPrint: true, hasReceipt: true, propertyid: this.propertyid, hasRoomEdit: true, hasRoomDelete: true, language: "en", bookingNumber: this.bookingNumber, baseurl: this.baseurl, ticket: this.token })));
    }
    static get style() { return IrBookingStyle0; }
}, [2, "ir-booking", {
        "baseurl": [1],
        "propertyid": [2],
        "bookingNumber": [1, "booking-number"],
        "token": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-footer", "igl-book-property-header", "igl-booking-overview-page", "igl-booking-room-rate-plan", "igl-booking-rooms", "igl-date-range", "igl-pagetwo", "igl-property-booked-by", "ir-autocomplete", "ir-booking-details", "ir-booking-extra-note", "ir-button", "ir-date-picker", "ir-date-view", "ir-dialog", "ir-guest-info", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-label", "ir-login", "ir-modal", "ir-payment-details", "ir-pickup", "ir-room", "ir-select", "ir-sidebar", "ir-textarea", "ir-title", "ir-toast", "ir-tooltip", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBooking$1);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "igl-booking-room-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "igl-booking-rooms":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "igl-pagetwo":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-guest-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-login":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-textarea":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-tooltip":
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
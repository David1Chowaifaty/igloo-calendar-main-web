import { r as registerInstance, h, H as Host } from './index-jhiFt_tX.js';
import { T as Token } from './Token-BTEbRZ0j.js';
import { c as checkUserAuthState, m as manageAnchorSession } from './utils-Dq_i8FCX.js';
import './axios-8ipPhlJK.js';
import './_commonjsHelpers-E-ZsRS8r.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-D2MMPhx6.js';
import './index-C7eXIDl2.js';
import './locales.store-BsXBgatZ.js';

const irBookingCss = ".sc-ir-booking-h{display:block}";

const IrBooking = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isAuthenticated = false;
        this.token = new Token();
    }
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
};
IrBooking.style = irBookingCss;

export { IrBooking as ir_booking };
//# sourceMappingURL=ir-booking.entry.js.map

//# sourceMappingURL=ir-booking.entry.js.map
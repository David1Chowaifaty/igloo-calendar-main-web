import { r as registerInstance, h, H as Host } from './index-60982d00.js';
import { T as Token } from './Token-6c389e24.js';
import { H as checkUserAuthState, I as manageAnchorSession } from './utils-f19b6761.js';
import './axios-aa1335b8.js';
import './moment-ab846cee.js';
import './index-6ecc32cd.js';
import './calendar-data-f4e207f9.js';
import './index-c4cf83be.js';
import './locales.store-629477c2.js';

const irBookingCss = ".sc-ir-booking-h{display:block}";
const IrBookingStyle0 = irBookingCss;

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
IrBooking.style = IrBookingStyle0;

export { IrBooking as ir_booking };

//# sourceMappingURL=ir-booking.entry.js.map
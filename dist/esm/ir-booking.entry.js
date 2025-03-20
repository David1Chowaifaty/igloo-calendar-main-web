import { r as registerInstance, h, H as Host } from './index-2ef79026.js';
import { T as Token } from './Token-1cce2f6d.js';
import { F as checkUserAuthState, G as manageAnchorSession } from './utils-41400f8e.js';
import './axios-2aba0cfc.js';
import './moment-ab846cee.js';
import './index-b6ec889a.js';
import './calendar-data-707a10db.js';
import './index-5395b195.js';
import './locales.store-b3d58c68.js';

const irBookingCss = ".sc-ir-booking-h{display:block}";
const IrBookingStyle0 = irBookingCss;

const IrBooking = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.token = new Token();
        this.propertyid = undefined;
        this.p = undefined;
        this.bookingNumber = undefined;
        this.isAuthenticated = false;
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
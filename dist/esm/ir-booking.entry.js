import { r as registerInstance, h, H as Host } from './index-ChgcZQN7.js';
import { T as Token } from './Token-AKvCJV-d.js';
import { c as checkUserAuthState, m as manageAnchorSession } from './utils-DNDFM4z7.js';
import './axios-Bpmk_xoW.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-iTCxBVE4.js';
import './index-CnjbwCqY.js';
import './locales.store-km9kP7G7.js';

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
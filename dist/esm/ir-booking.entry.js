import { r as registerInstance, h, H as Host } from './index-DF2__fQU.js';
import { T as Token } from './Token-DEDKqWud.js';
import { d as checkUserAuthState, m as manageAnchorSession } from './utils-Wjp6LFRm.js';
import './axios-CleaxLzD.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-I5D6ZJ1U.js';
import './index-C6os-U8X.js';
import './locales.store-BOppy8do.js';
import './type-D7rOPtKA.js';

const irBookingCss = () => `.sc-ir-booking-h{display:block}`;

const IrBooking = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
IrBooking.style = irBookingCss();

export { IrBooking as ir_booking };

import { r as registerInstance, h, H as Host } from './index-0Di74WDd.js';
import { T as Token } from './Token-D8j5OUbG.js';
import { d as checkUserAuthState, m as manageAnchorSession } from './utils-BeklM4gy.js';
import './axios-CleaxLzD.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-wrvThdm8.js';
import './index-D9zfa7Bx.js';
import './locales.store-CPGnSUGJ.js';
import './booking.dto-DWti87Wx.js';
import './type-CBqEYOkK.js';

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

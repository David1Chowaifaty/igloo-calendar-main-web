'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const Token = require('./Token-049041c2.js');
const utils = require('./utils-9553ae1d.js');
require('./axios-6e678d52.js');
require('./index-db8b30d9.js');
require('./calendar-data-719ef4f7.js');
require('./index-467172e1.js');
require('./locales.store-0cac7e5d.js');

const irBookingCss = ".sc-ir-booking-h{display:block}";
const IrBookingStyle0 = irBookingCss;

const IrBooking = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isAuthenticated = false;
        this.token = new Token.Token();
    }
    componentWillLoad() {
        const isAuthenticated = utils.checkUserAuthState();
        if (isAuthenticated) {
            this.isAuthenticated = true;
            this.token.setToken(isAuthenticated.token);
        }
    }
    handleAuthFinish(e) {
        const token = e.detail.token;
        this.token.setToken(token);
        this.isAuthenticated = true;
        utils.manageAnchorSession({ login: { method: 'direct', isLoggedIn: true, token } });
    }
    render() {
        if (!this.isAuthenticated)
            return (index.h(index.Host, null, index.h("ir-login", { onAuthFinish: this.handleAuthFinish.bind(this) })));
        return (index.h(index.Host, null, index.h("ir-booking-details", { p: this.p, hasPrint: true, hasReceipt: true, propertyid: this.propertyid, hasRoomEdit: true, hasRoomDelete: true, language: "en", ticket: this.token.getToken(), bookingNumber: this.bookingNumber })));
    }
};
IrBooking.style = IrBookingStyle0;

exports.ir_booking = IrBooking;

//# sourceMappingURL=ir-booking.cjs.entry.js.map
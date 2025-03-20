'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e13bd197.js');
const Token = require('./Token-b49ba031.js');
const utils = require('./utils-dc371512.js');
require('./axios-bc0bd15c.js');
require('./moment-1780b03a.js');
require('./index-a8af909e.js');
require('./calendar-data-2c2bb35f.js');
require('./index-4337b3d3.js');
require('./locales.store-6a07d85d.js');

const irBookingCss = ".sc-ir-booking-h{display:block}";
const IrBookingStyle0 = irBookingCss;

const IrBooking = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.token = new Token.Token();
        this.propertyid = undefined;
        this.p = undefined;
        this.bookingNumber = undefined;
        this.isAuthenticated = false;
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
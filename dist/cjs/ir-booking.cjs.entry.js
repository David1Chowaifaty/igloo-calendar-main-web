'use strict';

var index = require('./index-Dt9a74kn.js');
var Token = require('./Token-d-M1RUIy.js');
var booking = require('./booking-Co20zX8p.js');
require('./axios-dx93wJEX.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./locales.store-CJveOVzn.js');
require('./index-PIkoJJtF.js');
require('./calendar-data-CC4kt7DA.js');

const irBookingCss = ".sc-ir-booking-h{display:block}";

const IrBooking = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isAuthenticated = false;
        this.token = new Token.Token();
    }
    componentWillLoad() {
        const isAuthenticated = booking.checkUserAuthState();
        if (isAuthenticated) {
            this.isAuthenticated = true;
            this.token.setToken(isAuthenticated.token);
        }
    }
    handleAuthFinish(e) {
        const token = e.detail.token;
        this.token.setToken(token);
        this.isAuthenticated = true;
        booking.manageAnchorSession({ login: { method: 'direct', isLoggedIn: true, token } });
    }
    render() {
        if (!this.isAuthenticated)
            return (index.h(index.Host, null, index.h("ir-login", { onAuthFinish: this.handleAuthFinish.bind(this) })));
        return (index.h(index.Host, null, index.h("ir-booking-details", { p: this.p, hasPrint: true, hasReceipt: true, propertyid: this.propertyid, hasRoomEdit: true, hasRoomDelete: true, language: "en", ticket: this.token.getToken(), bookingNumber: this.bookingNumber })));
    }
};
IrBooking.style = irBookingCss;

exports.ir_booking = IrBooking;
//# sourceMappingURL=ir-booking.entry.cjs.js.map

//# sourceMappingURL=ir-booking.cjs.entry.js.map
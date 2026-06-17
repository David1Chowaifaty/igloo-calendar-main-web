'use strict';

var index = require('./index-DtXemfU-.js');
var Token = require('./Token-BVmOLolB.js');
var utils = require('./utils-CsChIHgF.js');
require('./axios-C-Phc0sj.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./calendar-data--UuFzfsJ.js');
require('./index-koQJ3Kgt.js');
require('./locales.store-CtV5-KJh.js');
require('./type-Dy9pVS4V.js');

const irBookingCss = () => `.sc-ir-booking-h{display:block}`;

const IrBooking = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    propertyid;
    p;
    bookingNumber;
    isAuthenticated = false;
    token = new Token.Token();
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
IrBooking.style = irBookingCss();

exports.ir_booking = IrBooking;

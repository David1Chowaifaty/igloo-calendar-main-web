'use strict';

var index = require('./index-CQkpA5n3.js');
var ApiClient = require('./ApiClient-u7fuhiXA.js');
var utils = require('./utils-Du7akmn_.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-HgC39-BR.js');
require('./locales.store-BMTss6fG.js');
require('./booking.dto-DxxzsxJC.js');
require('./type-BRhg-bzd.js');
require('./types-BlCoz3jZ.js');
require('./ir-date-BLb2Vxrk.js');
require('./language-observer-DKp37LIu.js');
require('./t-C54QV4_c.js');

const irBookingCss = () => `.sc-ir-booking-h{display:block}`;

const IrBooking = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    propertyid;
    p;
    bookingNumber;
    isAuthenticated = false;
    ApiClient = new ApiClient.ApiClient();
    componentWillLoad() {
        const isAuthenticated = utils.checkUserAuthState();
        if (isAuthenticated) {
            this.isAuthenticated = true;
            this.ApiClient.setApiClient(isAuthenticated.ApiClient);
        }
    }
    handleAuthFinish(e) {
        const ApiClient = e.detail.ApiClient;
        this.ApiClient.setApiClient(ApiClient);
        this.isAuthenticated = true;
        utils.manageAnchorSession({ login: { method: 'direct', isLoggedIn: true, ApiClient } });
    }
    render() {
        if (!this.isAuthenticated)
            return (index.h(index.Host, null, index.h("ir-login", { onAuthFinish: this.handleAuthFinish.bind(this) })));
        return (index.h(index.Host, null, index.h("ir-booking-details", { p: this.p, hasPrint: true, hasReceipt: true, propertyid: this.propertyid, hasRoomEdit: true, hasRoomDelete: true, language: "en", ticket: this.ApiClient.getToken(), bookingNumber: this.bookingNumber })));
    }
};
IrBooking.style = irBookingCss();

exports.ir_booking = IrBooking;

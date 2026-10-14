'use strict';

var index = require('./index-IDeZZwEK.js');
var ApiClient = require('./ApiClient-u7fuhiXA.js');
var utils = require('./utils-CpEd8z_J.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-DZk0v7WL.js');
require('./locales.store-D6DJIhoZ.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./types-BVJQZ50e.js');
require('./ir-date-Bjy8vNGm.js');
require('./language-observer-DKp37LIu.js');
require('./calendar-dates-BxDGM1ix.js');
require('./t-sd8HJHNy.js');

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

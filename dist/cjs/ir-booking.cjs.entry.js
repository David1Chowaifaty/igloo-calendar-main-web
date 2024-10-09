'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const utils = require('./utils-7ae9e098.js');
const axios = require('./axios-b86c5465.js');
require('./moment-1780b03a.js');

const irBookingCss = ".sc-ir-booking-h{display:block}";
const IrBookingStyle0 = irBookingCss;

const IrBooking = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.baseurl = '';
        this.propertyid = undefined;
        this.bookingNumber = undefined;
        this.token = undefined;
    }
    componentWillLoad() {
        axios.axios.defaults.baseURL = this.baseurl;
        const isAuthenticated = utils.checkUserAuthState();
        if (isAuthenticated) {
            this.token = isAuthenticated.token;
        }
    }
    handleAuthFinish(e) {
        this.token = e.detail.token;
        utils.manageAnchorSession({ login: { method: 'direct', isLoggedIn: true, token: this.token } });
    }
    render() {
        if (!this.token)
            return (index.h(index.Host, null, index.h("ir-login", { baseurl: this.baseurl, onAuthFinish: this.handleAuthFinish.bind(this) })));
        return (index.h(index.Host, null, index.h("ir-booking-details", { hasPrint: true, hasReceipt: true, propertyid: this.propertyid, hasRoomEdit: true, hasRoomDelete: true, language: "en", bookingNumber: this.bookingNumber, baseurl: this.baseurl, ticket: this.token })));
    }
};
IrBooking.style = IrBookingStyle0;

exports.ir_booking = IrBooking;

//# sourceMappingURL=ir-booking.cjs.entry.js.map
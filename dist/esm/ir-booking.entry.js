import { r as registerInstance, h, H as Host } from './index-d2ec0a5d.js';
import { c as checkUserAuthState, m as manageAnchorSession } from './utils-ff429cce.js';
import { a as axios } from './axios-ab377903.js';
import './moment-ab846cee.js';

const irBookingCss = ".sc-ir-booking-h{display:block}";
const IrBookingStyle0 = irBookingCss;

const IrBooking = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.baseurl = '';
        this.propertyid = undefined;
        this.bookingNumber = undefined;
        this.token = undefined;
    }
    componentWillLoad() {
        axios.defaults.baseURL = this.baseurl;
        const isAuthenticated = checkUserAuthState();
        if (isAuthenticated) {
            this.token = isAuthenticated.token;
        }
    }
    handleAuthFinish(e) {
        this.token = e.detail.token;
        manageAnchorSession({ login: { method: 'direct', isLoggedIn: true, token: this.token } });
    }
    render() {
        if (!this.token)
            return (h(Host, null, h("ir-login", { baseurl: this.baseurl, onAuthFinish: this.handleAuthFinish.bind(this) })));
        return (h(Host, null, h("ir-booking-details", { hasPrint: true, hasReceipt: true, propertyid: this.propertyid, hasRoomEdit: true, hasRoomDelete: true, language: "en", bookingNumber: this.bookingNumber, baseurl: this.baseurl, ticket: this.token })));
    }
};
IrBooking.style = IrBookingStyle0;

export { IrBooking as ir_booking };

//# sourceMappingURL=ir-booking.entry.js.map
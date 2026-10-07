import { r as registerInstance, h, H as Host } from './index-CeHdrJeH.js';
import { A as ApiClient } from './ApiClient-4jHvz1N4.js';
import { b as checkUserAuthState, m as manageAnchorSession } from './utils-VLa8HWRW.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './moment-Mki5YqAR.js';
import './calendar-data-Cdv5kmxH.js';
import './locale-scope-CapRuPkM.js';
import './booking.dto-D-ACWjZx.js';
import './type-o1ai24d7.js';
import './types-Clk7NCXk.js';
import './ir-date-NNCOayR_.js';
import './language-observer-CHgzsZkY.js';
import './calendar-dates-D3hVfsrC.js';
import './t-BVYK64UG.js';

const irBookingCss = () => `.sc-ir-booking-h{display:block}`;

const IrBooking = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    propertyid;
    p;
    bookingNumber;
    isAuthenticated = false;
    ApiClient = new ApiClient();
    componentWillLoad() {
        const isAuthenticated = checkUserAuthState();
        if (isAuthenticated) {
            this.isAuthenticated = true;
            this.ApiClient.setApiClient(isAuthenticated.ApiClient);
        }
    }
    handleAuthFinish(e) {
        const ApiClient = e.detail.ApiClient;
        this.ApiClient.setApiClient(ApiClient);
        this.isAuthenticated = true;
        manageAnchorSession({ login: { method: 'direct', isLoggedIn: true, ApiClient } });
    }
    render() {
        if (!this.isAuthenticated)
            return (h(Host, null, h("ir-login", { onAuthFinish: this.handleAuthFinish.bind(this) })));
        return (h(Host, null, h("ir-booking-details", { p: this.p, hasPrint: true, hasReceipt: true, propertyid: this.propertyid, hasRoomEdit: true, hasRoomDelete: true, language: "en", ticket: this.ApiClient.getToken(), bookingNumber: this.bookingNumber })));
    }
};
IrBooking.style = irBookingCss();

export { IrBooking as ir_booking };

import { r as registerInstance, h, H as Host } from './index-CeHdrJeH.js';
import { A as ApiClient } from './ApiClient-4jHvz1N4.js';
import { b as checkUserAuthState, m as manageAnchorSession } from './utils-Buh7m2Xs.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './moment-Mki5YqAR.js';
import './calendar-data-vejfJjJ2.js';
import './locales.store-CXJn6ls-.js';
import './booking.dto-FOZcMojD.js';
import './type-DUaIPoJQ.js';
import './types-BG9uwIsj.js';
import './ir-date-2sKX7m-4.js';
import './language-observer-CHgzsZkY.js';
import './calendar-dates-D3hVfsrC.js';
import './t-CHjay2ar.js';

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

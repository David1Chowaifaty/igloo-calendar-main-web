import { r as registerInstance, h, H as Host } from './index-DKZeCK8T.js';
import { A as ApiClient } from './ApiClient-DdQhte67.js';
import { b as checkUserAuthState, m as manageAnchorSession } from './utils-BaDgLaiu.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './moment-Mki5YqAR.js';
import './calendar-data-DWzivSW-.js';
import './locale-scope-Jre4lb6k.js';
import './booking.dto-B554ToUQ.js';
import './type-DjfVZqvs.js';
import './types-CB66a07H.js';
import './ir-date-XXNYhmSL.js';
import './language-observer-CHgzsZkY.js';
import './calendar-dates-D3hVfsrC.js';
import './t-Bvz1wS_D.js';

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

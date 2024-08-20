import { checkUserAuthState, manageAnchorSession } from "../../utils/utils";
import { Host, h } from "@stencil/core";
import axios from "axios";
export class IrBooking {
    constructor() {
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
    static get is() { return "ir-booking"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking.css"]
        };
    }
    static get properties() {
        return {
            "baseurl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "baseurl",
                "reflect": false,
                "defaultValue": "''"
            },
            "propertyid": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "propertyid",
                "reflect": false
            },
            "bookingNumber": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "booking-number",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "token": {}
        };
    }
}
//# sourceMappingURL=ir-booking.js.map

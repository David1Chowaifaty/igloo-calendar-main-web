import ApiClient from "../../models/ApiClient";
import { Host, h } from "@stencil/core";
import axios from "axios";
import { t } from "../../services/locale/t";
export class IrBookingEmailLogs {
    ticket;
    data;
    bookingNumber;
    ApiClient = new ApiClient();
    componentWillLoad() {
        if (this.ticket) {
            this.ApiClient.setApiClient(this.ticket);
        }
    }
    handleTicketChange() {
        if (this.ticket) {
            this.ApiClient.setApiClient(this.ticket);
        }
    }
    render() {
        return (h(Host, { key: 'dbe82aeeb7bf2fe1c07906d302175cf8ed398a6b', class: "p-1" }, h("ir-interceptor", { key: '94890240888349c81bcd9bbe2ab81b1b887744bd', handledEndpoints: ['/Get_Email_log_By_BOOK_NBR'] }), h("ir-toast", { key: '6385bd0cb20390b3db82354f4916dd8eea55ae44' }), h("div", { key: 'f5664482b8859d55f9520aa24ac5b6eab73999c3', class: "d-flex align-items-center mb-1", style: { gap: '0.5rem' } }, h("ir-input-text", { key: 'decc073f6d6307db42988f51f85a09e7ff451fd7', class: "m-0", inputContainerStyle: { margin: '0' }, value: this.bookingNumber, onTextChange: e => (this.bookingNumber = e.detail), placeholder: t('Lcz_BookingNumber', { fallback: 'Booking number' }) }), h("ir-button", { key: '9917f3b88378194215316af4c04fa0bfe621ae7a', size: "sm", text: t('Lcz_Search', { fallback: 'Search' }), onClickHandler: async () => {
                const { data } = await axios.post('/Get_Email_log_By_BOOK_NBR', {
                    BOOK_NBR: this.bookingNumber,
                });
                if (data.ExceptionMsg) {
                    return;
                }
                this.data = data.My_Result;
            } })), h("p", { key: 'a58ffd94b12a569bf682b754b540f903ee1bbe43' }, JSON.stringify(this.data, null, 2))));
    }
    static get is() { return "ir-booking-email-logs"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-email-logs.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-email-logs.css"]
        };
    }
    static get properties() {
        return {
            "ticket": {
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "ticket"
            }
        };
    }
    static get states() {
        return {
            "data": {},
            "bookingNumber": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
}

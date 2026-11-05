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
        return (h(Host, { key: 'e5093fe5931643d55ea56faee3219ec7d736071a', class: "p-1" }, h("ir-interceptor", { key: '0cd99c35c7bea555cfaf810a145a59f7e6dda43c', handledEndpoints: ['/Get_Email_log_By_BOOK_NBR'] }), h("ir-toast", { key: 'd9d983933b75ee81834a4b12570f65afc7713999' }), h("div", { key: 'f4a056a2558f8c72b03ca364bca5f4bd0386d3fb', class: "d-flex align-items-center mb-1", style: { gap: '0.5rem' } }, h("ir-input-text", { key: 'd3506623828039ecb8d4ed471c2aa1b0435bc8af', class: "m-0", inputContainerStyle: { margin: '0' }, value: this.bookingNumber, onTextChange: e => (this.bookingNumber = e.detail), placeholder: t('Lcz_BookingNumber', { fallback: 'Booking number' }) }), h("ir-button", { key: '401bf56f1e8e5a066cbbadfea8c3bc5cda8565e4', size: "sm", text: t('Lcz_Search', { fallback: 'Search' }), onClickHandler: async () => {
                const { data } = await axios.post('/Get_Email_log_By_BOOK_NBR', {
                    BOOK_NBR: this.bookingNumber,
                });
                if (data.ExceptionMsg) {
                    return;
                }
                this.data = data.My_Result;
            } })), h("p", { key: 'f337360c49b9abb384a3b4cd2b0884970b86752e' }, JSON.stringify(this.data, null, 2))));
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

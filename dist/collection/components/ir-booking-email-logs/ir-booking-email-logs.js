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
        return (h(Host, { key: '495515f6dd2c5d98ea01091bf892ea5cbd9e5e1e', class: "p-1" }, h("ir-interceptor", { key: '03ce0e7f402cb8eee138b6c9c991f122860822a4', handledEndpoints: ['/Get_Email_log_By_BOOK_NBR'] }), h("ir-toast", { key: '2366a4555a1df0510fdea46f04c7d3f40133bd74' }), h("div", { key: 'a58aaa805f7f5f6bc72018ea1db8c1852df7d12e', class: "d-flex align-items-center mb-1", style: { gap: '0.5rem' } }, h("ir-input-text", { key: '066eb7ce248557036a96fddadd965490a66206b6', class: "m-0", inputContainerStyle: { margin: '0' }, value: this.bookingNumber, onTextChange: e => (this.bookingNumber = e.detail), placeholder: t('Lcz_BookingNumber', { fallback: 'Booking number' }) }), h("ir-button", { key: '579e26a86da627a4b44fc07d475b4f15f3ef3626', size: "sm", text: t('Lcz_Search', { fallback: 'Search' }), onClickHandler: async () => {
                const { data } = await axios.post('/Get_Email_log_By_BOOK_NBR', {
                    BOOK_NBR: this.bookingNumber,
                });
                if (data.ExceptionMsg) {
                    return;
                }
                this.data = data.My_Result;
            } })), h("p", { key: '3c1ec0a290b5cb4e5b99d0d44ed7d2389d0c2077' }, JSON.stringify(this.data, null, 2))));
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

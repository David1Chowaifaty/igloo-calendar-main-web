import ApiClient from "../../models/ApiClient";
import { Host, h } from "@stencil/core";
import axios from "axios";
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
        return (h(Host, { key: '5fe5e6a83bff88e8b5c4eadc15c2e698b1b3c0d4', class: "p-1" }, h("ir-interceptor", { key: '72915883cd9361d235a0f14df616b64b95033401', handledEndpoints: ['/Get_Email_log_By_BOOK_NBR'] }), h("ir-toast", { key: 'c6d5d0064a00e6c55364f89bc53980325b3c8083' }), h("div", { key: '413e32b6213f315cdaad99b371f4ea3e66a41f4a', class: "d-flex align-items-center mb-1", style: { gap: '0.5rem' } }, h("ir-input-text", { key: 'b00dae139e862f50a6467af51e1e34fbd20d2532', class: "m-0", inputContainerStyle: { margin: '0' }, value: this.bookingNumber, onTextChange: e => (this.bookingNumber = e.detail), placeholder: "booking number" }), h("ir-button", { key: '76e3879baf1d6e1b401e98dbdb0e4a218a45a4a4', size: "sm", text: "search", onClickHandler: async () => {
                const { data } = await axios.post('/Get_Email_log_By_BOOK_NBR', {
                    BOOK_NBR: this.bookingNumber,
                });
                if (data.ExceptionMsg) {
                    return;
                }
                this.data = data.My_Result;
            } })), h("p", { key: '78554e04e6a120e5efb39f15f360c61c62580ba5' }, JSON.stringify(this.data, null, 2))));
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

import Token from "../../models/Token";
import { Host, h } from "@stencil/core";
import axios from "axios";
export class IrBookingEmailLogs {
    ticket;
    data;
    bookingNumber;
    token = new Token();
    componentWillLoad() {
        if (this.ticket) {
            this.token.setToken(this.ticket);
        }
    }
    handleTicketChange() {
        if (this.ticket) {
            this.token.setToken(this.ticket);
        }
    }
    render() {
        return (h(Host, { key: '3950bbc3aa82f26a98da21518316a61bb2221c99', class: "p-1" }, h("ir-interceptor", { key: '276247d04a2c578e297efd658e3f20c423f336f5', handledEndpoints: ['/Get_Email_log_By_BOOK_NBR'] }), h("ir-toast", { key: 'e0754da6b92622f6dde89460186f16571f0fb477' }), h("div", { key: '55f062194567844e142058d88b013baebd694f1b', class: "d-flex align-items-center mb-1", style: { gap: '0.5rem' } }, h("ir-input-text", { key: '5c7fbcb9d048355f813e2cfc7f20f5900e02397a', class: "m-0", inputContainerStyle: { margin: '0' }, value: this.bookingNumber, onTextChange: e => (this.bookingNumber = e.detail), placeholder: "booking number" }), h("ir-button", { key: '5f5a94665b321f8880b6d6bba02d11a89ac7acc4', size: "sm", text: "search", onClickHandler: async () => {
                const { data } = await axios.post('/Get_Email_log_By_BOOK_NBR', {
                    BOOK_NBR: this.bookingNumber,
                });
                if (data.ExceptionMsg) {
                    return;
                }
                this.data = data.My_Result;
            } })), h("p", { key: '9ab4cfe8d68dc924dd1fa9dbf34ea4fcc6c673e4' }, JSON.stringify(this.data, null, 2))));
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

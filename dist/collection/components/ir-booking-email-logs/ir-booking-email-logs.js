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
        return (h(Host, { key: 'fe8a068209da0560aa754b8d6a5f7c5273a0bfd3', class: "p-1" }, h("ir-interceptor", { key: 'f36b15ea328e406f4c55599f0ef574fe95b3841d', handledEndpoints: ['/Get_Email_log_By_BOOK_NBR'] }), h("ir-toast", { key: '396036984b73ec7f094c55897a1a1fc2ff0695a1' }), h("div", { key: '8990415e7c498c09454daa8e9a529912e59622a0', class: "d-flex align-items-center mb-1", style: { gap: '0.5rem' } }, h("ir-input-text", { key: '8896581f52c64435e7700f59eee38e22ee5649ef', class: "m-0", inputContainerStyle: { margin: '0' }, value: this.bookingNumber, onTextChange: e => (this.bookingNumber = e.detail), placeholder: "booking number" }), h("ir-button", { key: 'f79b993cfb87d3a9c6f8f13d11b4552202cb27b9', size: "sm", text: "search", onClickHandler: async () => {
                const { data } = await axios.post('/Get_Email_log_By_BOOK_NBR', {
                    BOOK_NBR: this.bookingNumber,
                });
                if (data.ExceptionMsg) {
                    return;
                }
                this.data = data.My_Result;
            } })), h("p", { key: '111747189c4a371b47ffbe66e6a4882369f30d0d' }, JSON.stringify(this.data, null, 2))));
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

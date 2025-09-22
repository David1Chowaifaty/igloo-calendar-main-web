import Token from "../../models/Token";
import { Host, h } from "@stencil/core";
import axios from "axios";
export class IrBookingEmailLogs {
    constructor() {
        this.token = new Token();
    }
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
        return (h(Host, { key: '4698b1cdf59870071d560bdc6d6717863ab0fcd5', class: "p-1" }, h("ir-interceptor", { key: 'fd8435727c46d174023d4c612f0b5b73b473ca27', handledEndpoints: ['/Get_Email_log_By_BOOK_NBR'] }), h("ir-toast", { key: '9b07f0cc8888477f34c97ff7b6bafc5257aa7462' }), h("div", { key: '86bd292ed205f9bad0cf0554194ae90b990c12d2', class: "d-flex align-items-center mb-1", style: { gap: '0.5rem' } }, h("ir-input-text", { key: 'e80d28192f47a202db694f4f559cf65052b5de8c', class: "m-0", inputContainerStyle: { margin: '0' }, value: this.bookingNumber, onTextChange: e => (this.bookingNumber = e.detail), placeholder: "booking number" }), h("ir-button", { key: '24a40cbf5e6d695cbd37362dc23db879f08b0802', size: "sm", text: "search", onClickHandler: async () => {
                const { data } = await axios.post('/Get_Email_log_By_BOOK_NBR', {
                    BOOK_NBR: this.bookingNumber,
                });
                if (data.ExceptionMsg) {
                    return;
                }
                this.data = data.My_Result;
            } })), h("p", { key: '0127d323e113cd6b615fe9f2b6ae9fc900112a8c' }, JSON.stringify(this.data, null, 2))));
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
                "attribute": "ticket",
                "reflect": false
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
//# sourceMappingURL=ir-booking-email-logs.js.map

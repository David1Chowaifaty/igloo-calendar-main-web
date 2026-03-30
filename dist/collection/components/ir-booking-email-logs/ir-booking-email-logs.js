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
        return (h(Host, { key: '23b41ba252c7ccffcdca2b4c8879de7d4f0c4d1d', class: "p-1" }, h("ir-interceptor", { key: 'a89d10f1b7512098de21a5e3880b64f2516f87f1', handledEndpoints: ['/Get_Email_log_By_BOOK_NBR'] }), h("ir-toast", { key: 'd55ef6384b8f81ca1470e5b61c45dcff134b0168' }), h("div", { key: '9f3be0a4fd04382a8b0ba41947abbbd53b3604a1', class: "d-flex align-items-center mb-1", style: { gap: '0.5rem' } }, h("ir-input-text", { key: '48705b161b78302ec739ce7127315f1315e24b11', class: "m-0", inputContainerStyle: { margin: '0' }, value: this.bookingNumber, onTextChange: e => (this.bookingNumber = e.detail), placeholder: "booking number" }), h("ir-button", { key: '3e6bbdba16ac8f664781418d3d295d3c4f17a643', size: "sm", text: "search", onClickHandler: async () => {
                const { data } = await axios.post('/Get_Email_log_By_BOOK_NBR', {
                    BOOK_NBR: this.bookingNumber,
                });
                if (data.ExceptionMsg) {
                    return;
                }
                this.data = data.My_Result;
            } })), h("p", { key: '4bbebece501d61ae3ae189b23940f2f5df90a91e' }, JSON.stringify(this.data, null, 2))));
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

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
        return (h(Host, { key: 'a8b77d267e20c201b1022dd20c5d88f415115703', class: "p-1" }, h("ir-interceptor", { key: '29970dd645b32c054f85642b4663df410f6f7d8c', handledEndpoints: ['/Get_Email_log_By_BOOK_NBR'] }), h("ir-toast", { key: 'b428a3d2a39d0ff1c64fe7bba9c4350676b629e7' }), h("div", { key: '5d951f2eab575875589bc2cec9ce6d9babb4e4e8', class: "d-flex align-items-center mb-1", style: { gap: '0.5rem' } }, h("ir-input-text", { key: 'a4b3e6c6b7e8df3055152b07a96ec6bc2b9d9477', class: "m-0", inputContainerStyle: { margin: '0' }, value: this.bookingNumber, onTextChange: e => (this.bookingNumber = e.detail), placeholder: t('Lcz_BookingNumber', { fallback: 'Booking number' }) }), h("ir-button", { key: 'df657f717e272bb139ce6fc8f2d3fd56ca641d74', size: "sm", text: t('Lcz_Search', { fallback: 'Search' }), onClickHandler: async () => {
                const { data } = await axios.post('/Get_Email_log_By_BOOK_NBR', {
                    BOOK_NBR: this.bookingNumber,
                });
                if (data.ExceptionMsg) {
                    return;
                }
                this.data = data.My_Result;
            } })), h("p", { key: 'f7168e1dc83df496d80fd7829a6c37e09f22236a' }, JSON.stringify(this.data, null, 2))));
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

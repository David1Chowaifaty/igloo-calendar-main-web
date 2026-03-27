import { r as registerInstance, h, e as Host } from './index-7b3961ed.js';
import { T as Token } from './Token-add81d36.js';
import { a as axios } from './index-5ba472df.js';

const irBookingEmailLogsCss = ".sc-ir-booking-email-logs-h{display:block}";

const IrBookingEmailLogs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
        return (h(Host, { key: '020c3cc5b9b370cecf7ee60501d405f44c176dd5', class: "p-1" }, h("ir-interceptor", { key: 'f872971440979ea5eb2c9d13457e0a20194ead5e', handledEndpoints: ['/Get_Email_log_By_BOOK_NBR'] }), h("ir-toast", { key: '70e5222b33d48320702a07964bbfc962bd61bd18' }), h("div", { key: '731c1b5c7f5b73e702f5595511af5ca0ab87eef8', class: "d-flex align-items-center mb-1", style: { gap: '0.5rem' } }, h("ir-input-text", { key: 'f492e478704911a80b116ca22bcf7c4b38147844', class: "m-0", inputContainerStyle: { margin: '0' }, value: this.bookingNumber, onTextChange: e => (this.bookingNumber = e.detail), placeholder: "booking number" }), h("ir-button", { key: '76735cdb7a992071684fe7d2c4f77cbdc643eb77', size: "sm", text: "search", onClickHandler: async () => {
                const { data } = await axios.post('/Get_Email_log_By_BOOK_NBR', {
                    BOOK_NBR: this.bookingNumber,
                });
                if (data.ExceptionMsg) {
                    return;
                }
                this.data = data.My_Result;
            } })), h("p", { key: '03dcfde7249e17987cb1181acedc2404a472835c' }, JSON.stringify(this.data, null, 2))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrBookingEmailLogs.style = irBookingEmailLogsCss;

export { IrBookingEmailLogs as ir_booking_email_logs };

//# sourceMappingURL=ir-booking-email-logs.entry.js.map
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { a as axios } from './axios.js';
import { d as defineCustomElement$a } from './ir-button2.js';
import { d as defineCustomElement$9 } from './ir-icons2.js';
import { d as defineCustomElement$8 } from './ir-input-text2.js';
import { d as defineCustomElement$7 } from './ir-interceptor2.js';
import { d as defineCustomElement$6 } from './ir-otp2.js';
import { d as defineCustomElement$5 } from './ir-otp-modal2.js';
import { d as defineCustomElement$4 } from './ir-spinner2.js';
import { d as defineCustomElement$3 } from './ir-toast2.js';
import { d as defineCustomElement$2 } from './ir-toast-alert2.js';
import { d as defineCustomElement$1 } from './ir-toast-provider2.js';

const irBookingEmailLogsCss = ".sc-ir-booking-email-logs-h{display:block}";
const IrBookingEmailLogsStyle0 = irBookingEmailLogsCss;

const IrBookingEmailLogs = /*@__PURE__*/ proxyCustomElement(class IrBookingEmailLogs extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: '46e7f3a5cf4d30456ddd9117d92544ea188ae7a1', class: "p-1" }, h("ir-interceptor", { key: '3d274de25c63cd9f0ae88be0c21f0ffa0ac7f847', handledEndpoints: ['/Get_Email_log_By_BOOK_NBR'] }), h("ir-toast", { key: '98b628e54c834de1a54833034c0171eb677a2854' }), h("div", { key: 'bece77d06f563458b82d62856a1cd6fca48f54b9', class: "d-flex align-items-center mb-1", style: { gap: '0.5rem' } }, h("ir-input-text", { key: 'db3f5ae1306928fa6860499591e4cf58b31a291c', class: "m-0", inputContainerStyle: { margin: '0' }, value: this.bookingNumber, onTextChange: e => (this.bookingNumber = e.detail), placeholder: "booking number" }), h("ir-button", { key: '3a69026d4dc8779f9f66f2669461b1358571fec8', size: "sm", text: "search", onClickHandler: async () => {
                const { data } = await axios.post('/Get_Email_log_By_BOOK_NBR', {
                    BOOK_NBR: this.bookingNumber,
                });
                if (data.ExceptionMsg) {
                    return;
                }
                this.data = data.My_Result;
            } })), h("p", { key: 'bfc83e597dc874a025a32c4fdc544619f4de5668' }, JSON.stringify(this.data, null, 2))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
    static get style() { return IrBookingEmailLogsStyle0; }
}, [2, "ir-booking-email-logs", {
        "ticket": [1],
        "data": [32],
        "bookingNumber": [32]
    }, undefined, {
        "ticket": ["handleTicketChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-email-logs", "ir-button", "ir-icons", "ir-input-text", "ir-interceptor", "ir-otp", "ir-otp-modal", "ir-spinner", "ir-toast", "ir-toast-alert", "ir-toast-provider"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-email-logs":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingEmailLogs);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookingEmailLogs as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-email-logs2.js.map
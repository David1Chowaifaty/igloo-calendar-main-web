import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-custom-button2.js';

const irBookingNumberCellCss = ".sc-ir-booking-number-cell-h{box-sizing:border-box !important}.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell,.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell::before,.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booking-number-cell{display:none !important}.sc-ir-booking-number-cell-h{display:flex;gap:1rem;align-items:center}.booking-nbr-cell__channel_nbr.sc-ir-booking-number-cell{padding-inline:var(--wa-form-control-padding-inline, 1rem)}.booking-nbr-cell__container.sc-ir-booking-number-cell{display:flex;flex-direction:column;align-self:flex-start}";
const IrBookingNumberCellStyle0 = irBookingNumberCellCss;

const IrBookingNumberCell = /*@__PURE__*/ proxyCustomElement(class IrBookingNumberCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.openBookingDetails = createEvent(this, "openBookingDetails", 7);
    }
    bookingNumber;
    channelBookingNumber;
    openBookingDetails;
    render() {
        return (h(Host, { key: '975f4dc6581b1f28f00e494bc0824936570ccd76' }, h("slot", { key: '30c4fac59069a7c5cf67605a86856dc060129db5', name: "start" }), h("div", { key: '73f1a6bd7f8aeab8baef3c3f1e56642e6328f861', class: "booking-nbr-cell__container" }, h("div", { key: 'a2ed1d2b5542740eeee0fc7f1bbffa8fd63c4906', style: { width: 'fit-content' } }, h("ir-custom-button", { key: '173c9892122b370caf3f324308b26f9d13756da7', size: "medium", onClickHandler: () => this.openBookingDetails.emit(this.bookingNumber), link: true, variant: "brand", appearance: "plain" }, this.bookingNumber)), this.channelBookingNumber && h("p", { key: '34d8dcd2ceeee748551f57f8e2a97d9de25e3c26', class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber)), h("slot", { key: '40024aa7895b739d7391529c847bd6c93b027643', name: "end" })));
    }
    static get style() { return IrBookingNumberCellStyle0; }
}, [6, "ir-booking-number-cell", {
        "bookingNumber": [1, "booking-number"],
        "channelBookingNumber": [1, "channel-booking-number"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-number-cell", "ir-custom-button"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-number-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingNumberCell);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookingNumberCell as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-number-cell2.js.map
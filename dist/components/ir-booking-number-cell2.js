import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-custom-button2.js';

const irBookingNumberCellCss = ".sc-ir-booking-number-cell-h{box-sizing:border-box !important}.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell,.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell::before,.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booking-number-cell{display:none !important}.sc-ir-booking-number-cell-h{display:flex;gap:1rem;align-items:center;font-size:0.93rem}.booking-nbr-cell__channel_nbr.sc-ir-booking-number-cell{font-size:0.75rem;padding:0;margin:0}.booking-nbr-cell__container.sc-ir-booking-number-cell{display:flex;flex-direction:column;align-self:flex-start}.booked-by-source__logo.sc-ir-booking-number-cell{width:1.5625rem;background-color:white}";
const IrBookingNumberCellStyle0 = irBookingNumberCellCss;

const IrBookingNumberCell = /*@__PURE__*/ proxyCustomElement(class IrBookingNumberCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.openBookingDetails = createEvent(this, "openBookingDetails", 7);
    }
    bookingNumber;
    /**
     * Source of the booking (e.g. website, channel).
     */
    source;
    /**
     * Origin metadata containing label + icon used as logo.
     */
    origin;
    channelBookingNumber;
    openBookingDetails;
    render() {
        return (h(Host, { key: '9714affe56bd1122abb59314110ca21410b6b894' }, this.channelBookingNumber && h("wa-tooltip", { key: '04e180b2872b4a836c7edc4a713d65078e4a0697', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), h("img", { key: '574f210ee2eb9f684e21ffbb89c4c3c9d64bbd52', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), h("div", { key: 'a93f83af2bad529a82540683f4e6feece343634a', class: "booking-nbr-cell__container" }, h("div", { key: 'ca5e7252d00a1294be3c31ce6b13492a07e396d1', style: { width: 'fit-content' } }, h("ir-custom-button", { key: 'ca2b9b2085cbc27565e8576599ca5b1dd006203b', size: "medium", onClickHandler: () => this.openBookingDetails.emit(this.bookingNumber), link: true, variant: "brand", appearance: "plain" }, this.bookingNumber)), h("p", { key: '4b6232f8aea0c055e5fcdca879aeafbda53ffd50', class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? this.channelBookingNumber : this.origin.Label))));
    }
    static get style() { return IrBookingNumberCellStyle0; }
}, [2, "ir-booking-number-cell", {
        "bookingNumber": [1, "booking-number"],
        "source": [16],
        "origin": [16],
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
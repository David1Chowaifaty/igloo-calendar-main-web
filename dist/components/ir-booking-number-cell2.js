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
        return (h(Host, { key: '5025c04127574630ff0420383ff2a9a6b73bb113' }, this.channelBookingNumber && h("wa-tooltip", { key: '6e4241280b2a338d7ab3d6b0984d51fa276b8bc0', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), h("img", { key: '11aa36055382975b6aa951b9baf839dbe8ffe764', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), h("div", { key: 'f1a3f3f7d9707b461378ccb50e69b9fa3dc25964', class: "booking-nbr-cell__container" }, h("div", { key: '36606b49654ab08a1a677e37205c9a1ae4d7521d', style: { width: 'fit-content' } }, h("ir-custom-button", { key: 'f81385bc583960d456792c44cb5b9d621b21f8c8', size: "medium", onClickHandler: () => this.openBookingDetails.emit(this.bookingNumber), link: true, variant: "brand", appearance: "plain" }, this.bookingNumber)), h("p", { key: '0b24497383fc0a88a9fa7011d39fb816bde7c2c9', class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? this.channelBookingNumber : this.origin.Label))));
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
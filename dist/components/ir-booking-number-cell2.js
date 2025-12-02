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
        return (h(Host, { key: 'afa3add68bdf0135c37138cf92aa3bdcfb38e016' }, h("slot", { key: '8c99f0b1629c0ddef1cd136901a9f0aa557b7420', name: "start" }), h("div", { key: '5c860f6c3de3c4a06be90379ef15fc75ded551ea', class: "booking-nbr-cell__container" }, h("div", { key: '90505eaf20617d05b933e7e87a0e49683cd09cd4', style: { width: 'fit-content' } }, h("ir-custom-button", { key: '06b2c234e40cdea96fecb8f67f8350513b6bcf1e', size: "medium", onClickHandler: () => this.openBookingDetails.emit(this.bookingNumber), link: true, variant: "brand", appearance: "plain" }, this.bookingNumber)), this.channelBookingNumber && h("p", { key: '7f0fd2f10c040030517d0a820d5c5a0d36c4c340', class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber)), h("slot", { key: 'a52d43576e17de4a366f677f00490c6a5ec52219', name: "end" })));
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
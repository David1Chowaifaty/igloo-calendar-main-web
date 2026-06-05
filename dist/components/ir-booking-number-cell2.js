import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irBookingNumberCellCss = ".sc-ir-booking-number-cell-h{box-sizing:border-box !important}.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell,.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell::before,.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booking-number-cell{display:none !important}.sc-ir-booking-number-cell-h{display:flex;gap:1rem;align-items:center;font-size:0.93rem}.booking-nbr-cell__channel_nbr.sc-ir-booking-number-cell{font-size:0.75rem;padding:0;margin:0}.booking-nbr-cell__container.sc-ir-booking-number-cell{display:flex;flex-direction:column;align-self:flex-start}.booked-by-source__logo.sc-ir-booking-number-cell{width:1.5625rem;background-color:white}.booking-nbr-cell__button.sc-ir-booking-number-cell:focus{outline:none}.booking-nbr-cell__button.sc-ir-booking-number-cell:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.booking-nbr-cell__button.sc-ir-booking-number-cell{display:inline-flex;align-items:center;justify-content:center;height:fit-content;padding:0;font-family:inherit;font-size:var(--wa-form-control-value-font-size);font-weight:var(--wa-font-weight-action);line-height:calc(var(--wa-form-control-height) - var(--border-width) * 2);text-decoration:none;vertical-align:middle;white-space:nowrap;border-style:var(--wa-border-style);border-width:max(1px, var(--wa-form-control-border-width));border-radius:var(--wa-form-control-border-radius);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);cursor:pointer;user-select:none;-webkit-user-select:none;color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:transparent;border-color:transparent}.booking-nbr-cell__button.sc-ir-booking-number-cell:hover{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet))}.booking-nbr-cell__button.sc-ir-booking-number-cell:active{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet)), var(--wa-color-mix-active))}";
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
        return (h(Host, { key: 'b0fd2dba9357776303d7f3517e4fc28e2ffb6fc0' }, this.channelBookingNumber && h("wa-tooltip", { key: '676beee2592c0ae9f7435535fbb52f5cce023c34', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), h("img", { key: '8be81b0ab42fa36ff03816f1ba932ed8676588fd', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), h("div", { key: '87891031e1149ea3cd827cd946cf643c4c55a19e', class: "booking-nbr-cell__container" }, h("div", { key: 'f659ca848d749d5680aca3d6750440e07322590f', style: { width: 'fit-content' } }, h("button", { key: 'c3f9efea3061d2a28b2a440e97b6fb392e38c2d3', class: "booking-nbr-cell__button", onClick: () => this.openBookingDetails.emit(this.bookingNumber) }, this.bookingNumber)), h("p", { key: '29b604efe5645936fc191c6945f8539ebad871e7', class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? this.channelBookingNumber : this.origin.Label))));
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
    const components = ["ir-booking-number-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-number-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingNumberCell);
            }
            break;
    } });
}

export { IrBookingNumberCell as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-number-cell2.js.map
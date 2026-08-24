import { r as registerInstance, c as createEvent, h } from './index-Kqbk9HdW.js';

const iglSplitBookingDrawerCss = () => `.sc-igl-split-booking-drawer-h{display:block}`;

const IglSplitBookingDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal");
    }
    booking;
    identifier;
    open;
    closeModal;
    get room() {
        return this.booking?.rooms?.find(r => r.identifier === this.identifier);
    }
    render() {
        return (h("ir-drawer", { key: '109848bfeb5909a8aa6529da0ba84bfb0f4ed3a4', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && h("igl-split-booking-form", { key: '28533d4c3fca98d4fb0dd4dc39ab31aff75f1c5e', booking: this.booking, identifier: this.identifier }), h("div", { key: '32c9a9d933e27c695537dd23f4c9ac509ccd1775', slot: "footer" }, h("ir-custom-button", { key: '14e2a5ace8e6aa5df8cf09cb724a64052c5fa6ef', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: '728e488bcaefc4f92707a3a0647847c2748ce107', form: "split-booking-form", type: "submit", size: "m", appearance: "accent", variant: "brand" }, "Confirm"))));
    }
};
IglSplitBookingDrawer.style = iglSplitBookingDrawerCss();

export { IglSplitBookingDrawer as igl_split_booking_drawer };

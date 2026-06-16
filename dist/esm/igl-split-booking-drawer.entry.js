import { r as registerInstance, c as createEvent, h } from './index-7e96440e.js';

const iglSplitBookingDrawerCss = ".sc-igl-split-booking-drawer-h{display:block}";
const IglSplitBookingDrawerStyle0 = iglSplitBookingDrawerCss;

const IglSplitBookingDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal", 7);
    }
    booking;
    identifier;
    open;
    closeModal;
    get room() {
        return this.booking?.rooms?.find(r => r.identifier === this.identifier);
    }
    render() {
        return (h("ir-drawer", { key: 'ed474b287b2bef8a8d40e86a5bfe72a9cd607e93', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && h("igl-split-booking-form", { key: '72020a0badd3f985f4cd42343358db6c3235076d', booking: this.booking, identifier: this.identifier }), h("div", { key: 'b92af29bc6a1665064268b07d99bdaaa1ad986c3', slot: "footer" }, h("ir-custom-button", { key: 'f36dcabe8a5d58cbb01dae97b7feed8a8932d88f', size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: '7c17fbf4b23adf9219537e70561a20e271837387', form: "split-booking-form", type: "submit", size: "medium", appearance: "accent", variant: "brand" }, "Confirm"))));
    }
};
IglSplitBookingDrawer.style = IglSplitBookingDrawerStyle0;

export { IglSplitBookingDrawer as igl_split_booking_drawer };

//# sourceMappingURL=igl-split-booking-drawer.entry.js.map
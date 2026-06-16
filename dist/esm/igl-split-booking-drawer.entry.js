import { r as registerInstance, c as createEvent, h } from './index-DrVkW3Kc.js';

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
        return (h("ir-drawer", { key: 'f7ded771ebb624ea10034e5d229e635fc7f55b91', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && h("igl-split-booking-form", { key: '3f3d05a64c5b31ddc4a201114c2f50c20d186ba7', booking: this.booking, identifier: this.identifier }), h("div", { key: '807b1792434d02a8434aa16150e8c9b6f39f71d9', slot: "footer" }, h("ir-custom-button", { key: '2634772623d2acb88c2f884133436feb71f74401', size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: 'adba0dce6784e1a42bb00c2c8335101057f90285', form: "split-booking-form", type: "submit", size: "medium", appearance: "accent", variant: "brand" }, "Confirm"))));
    }
};
IglSplitBookingDrawer.style = iglSplitBookingDrawerCss();

export { IglSplitBookingDrawer as igl_split_booking_drawer };

import { r as registerInstance, c as createEvent, h } from './index-D7D7fhZS.js';

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
        return (h("ir-drawer", { key: '1f2948ca0a796f80bf5cf54c7b811598fefd1b41', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && h("igl-split-booking-form", { key: '97d3ead0f83819ffe684f5d4eb49cb8a1521e121', booking: this.booking, identifier: this.identifier }), h("div", { key: '048236a4983c9ee3203130ed75c73b749ae1db61', slot: "footer" }, h("ir-custom-button", { key: '15e87bfb0fded843f32cc0eab6ef7a4b72dd4b34', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: 'd10409aa05d661b5354a0b86fc3e5a136ba7ad54', form: "split-booking-form", type: "submit", size: "m", appearance: "accent", variant: "brand" }, "Confirm"))));
    }
};
IglSplitBookingDrawer.style = iglSplitBookingDrawerCss();

export { IglSplitBookingDrawer as igl_split_booking_drawer };

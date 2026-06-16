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
        return (h("ir-drawer", { key: '2de5d60839339946c97975e6f695aea9555f1f0b', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && h("igl-split-booking-form", { key: '4e931860f377898f96893aa4116c9f8596344aae', booking: this.booking, identifier: this.identifier }), h("div", { key: '5202446cf168f73ca594083c5881b6b952b09df0', slot: "footer" }, h("ir-custom-button", { key: '77c09a10e55c5c727cbf8de98a544d50541d92ff', size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: 'a83dcf69613a0b63ffd1c39d4a0d35e3cfbcc635', form: "split-booking-form", type: "submit", size: "medium", appearance: "accent", variant: "brand" }, "Confirm"))));
    }
};
IglSplitBookingDrawer.style = IglSplitBookingDrawerStyle0;

export { IglSplitBookingDrawer as igl_split_booking_drawer };

//# sourceMappingURL=igl-split-booking-drawer.entry.js.map
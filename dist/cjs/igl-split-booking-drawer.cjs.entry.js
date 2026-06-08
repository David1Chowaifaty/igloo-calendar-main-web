'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const iglSplitBookingDrawerCss = ".sc-igl-split-booking-drawer-h{display:block}";
const IglSplitBookingDrawerStyle0 = iglSplitBookingDrawerCss;

const IglSplitBookingDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
    }
    booking;
    identifier;
    open;
    closeModal;
    get room() {
        return this.booking?.rooms?.find(r => r.identifier === this.identifier);
    }
    render() {
        return (index.h("ir-drawer", { key: 'b21cb4b432914bf9bf2c9ff6199975649b532090', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && index.h("igl-split-booking-form", { key: 'e8401913029c98985364d9e7bf2ee11d14e0716e', booking: this.booking, identifier: this.identifier }), index.h("div", { key: '750a087c181bcdf34e520a4ecc365a94a541917c', slot: "footer" }, index.h("ir-custom-button", { key: '96ebc285b47da82520d2c488bcce0fea90e0a963', size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), index.h("ir-custom-button", { key: '93ca74e0eac1f6f3a002a36cee80cf1c594d81f6', form: "split-booking-form", type: "submit", size: "medium", appearance: "accent", variant: "brand" }, "Confirm"))));
    }
};
IglSplitBookingDrawer.style = IglSplitBookingDrawerStyle0;

exports.igl_split_booking_drawer = IglSplitBookingDrawer;

//# sourceMappingURL=igl-split-booking-drawer.cjs.entry.js.map
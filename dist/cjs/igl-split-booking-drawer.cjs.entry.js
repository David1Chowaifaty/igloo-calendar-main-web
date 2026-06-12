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
        return (index.h("ir-drawer", { key: 'fd07719b34b62486c668aa336bf3b9fa9dcce512', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && index.h("igl-split-booking-form", { key: 'f2e0bde924b3a7efb33fe6dedf676d6fb8ccac52', booking: this.booking, identifier: this.identifier }), index.h("div", { key: '62192fd6f6f7b9573509aebff78fd7afb8d83ead', slot: "footer" }, index.h("ir-custom-button", { key: '838d82a819c7c0461b21446c40de740b83f4fcba', size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), index.h("ir-custom-button", { key: '91ad413dcaab157e835337060c57f0eefff2a6c4', form: "split-booking-form", type: "submit", size: "medium", appearance: "accent", variant: "brand" }, "Confirm"))));
    }
};
IglSplitBookingDrawer.style = IglSplitBookingDrawerStyle0;

exports.igl_split_booking_drawer = IglSplitBookingDrawer;

//# sourceMappingURL=igl-split-booking-drawer.cjs.entry.js.map
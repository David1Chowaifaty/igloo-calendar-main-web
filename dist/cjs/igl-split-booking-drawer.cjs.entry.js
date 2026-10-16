'use strict';

var index = require('./index-Bp205iz4.js');

const iglSplitBookingDrawerCss = () => `.sc-igl-split-booking-drawer-h{display:block}`;

const IglSplitBookingDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal");
    }
    booking;
    identifier;
    open;
    closeModal;
    get room() {
        return this.booking?.rooms?.find(r => r.identifier === this.identifier);
    }
    render() {
        return (index.h("ir-drawer", { key: '3bcad0f81c36a523383afb93b4d4eaba0a77e0d0', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && index.h("igl-split-booking-form", { key: '5d99dffa979bfa781c591e529aba3c29d647920f', booking: this.booking, identifier: this.identifier }), index.h("div", { key: '6389155caf1bf9f999c5b391edf68bb31410a2f1', slot: "footer" }, index.h("ir-custom-button", { key: '06e5e49098c9d3d6e1b6552f263a6e65b6c716a1', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), index.h("ir-custom-button", { key: '23d8bc4fccce65ac886512b918c6a9e813503375', form: "split-booking-form", type: "submit", size: "m", appearance: "accent", variant: "brand" }, "Confirm"))));
    }
};
IglSplitBookingDrawer.style = iglSplitBookingDrawerCss();

exports.igl_split_booking_drawer = IglSplitBookingDrawer;

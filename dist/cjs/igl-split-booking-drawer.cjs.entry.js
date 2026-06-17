'use strict';

var index = require('./index-OzksjAXP.js');

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
        return (index.h("ir-drawer", { key: 'b9ef116210b0571376b90d4e989e604948af79b9', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && index.h("igl-split-booking-form", { key: '99c90ea8780315b1d2d358bd45f686c6bbbab548', booking: this.booking, identifier: this.identifier }), index.h("div", { key: '42a6f8451c4c07957a6287cbf61e7d1bb03e771a', slot: "footer" }, index.h("ir-custom-button", { key: 'e613c475f34b3985c6863f33d27aff529a9b68e0', size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), index.h("ir-custom-button", { key: '036e681191fc67b6b2e6e4fbd0ea605d37bf9f6f', form: "split-booking-form", type: "submit", size: "medium", appearance: "accent", variant: "brand" }, "Confirm"))));
    }
};
IglSplitBookingDrawer.style = iglSplitBookingDrawerCss();

exports.igl_split_booking_drawer = IglSplitBookingDrawer;

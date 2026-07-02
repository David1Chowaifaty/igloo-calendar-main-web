'use strict';

var index = require('./index-DYQrLNin.js');

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
        return (index.h("ir-drawer", { key: 'd71e27018592322f5831438b68777865e40d5ba0', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && index.h("igl-split-booking-form", { key: '22b6a6b11e0524692f81402b58e7720cd8082585', booking: this.booking, identifier: this.identifier }), index.h("div", { key: '6571ea32ea884a8dc5a55bdbba879b0e4562294b', slot: "footer" }, index.h("ir-custom-button", { key: '6a4bf02d71d363bd118f89bd77505fb604084d99', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), index.h("ir-custom-button", { key: '7198eaea38690c0ea22efae02533a27de66ac223', form: "split-booking-form", type: "submit", size: "m", appearance: "accent", variant: "brand" }, "Confirm"))));
    }
};
IglSplitBookingDrawer.style = iglSplitBookingDrawerCss();

exports.igl_split_booking_drawer = IglSplitBookingDrawer;

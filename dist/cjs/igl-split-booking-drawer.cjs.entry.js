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
        return (index.h("ir-drawer", { key: '13b952e3d65bad1f549997319e5ad84100326831', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && index.h("igl-split-booking-form", { key: 'e1f388ef53785509641d7d67c44292655a15921a', booking: this.booking, identifier: this.identifier }), index.h("div", { key: '45469f1ceb0da2472f070c664851b31061d96cd8', slot: "footer" }, index.h("ir-custom-button", { key: '180919707f1933512b2f8d80c75b00c2af0f6131', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), index.h("ir-custom-button", { key: '69353cc38c5724f303ff21476bc12a3ba155bdd5', form: "split-booking-form", type: "submit", size: "m", appearance: "accent", variant: "brand" }, "Confirm"))));
    }
};
IglSplitBookingDrawer.style = iglSplitBookingDrawerCss();

exports.igl_split_booking_drawer = IglSplitBookingDrawer;

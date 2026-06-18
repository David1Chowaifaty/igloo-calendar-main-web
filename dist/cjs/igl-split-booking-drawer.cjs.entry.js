'use strict';

var index = require('./index-CJ0kc5p1.js');

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
        return (index.h("ir-drawer", { key: 'f7ded771ebb624ea10034e5d229e635fc7f55b91', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && index.h("igl-split-booking-form", { key: '3f3d05a64c5b31ddc4a201114c2f50c20d186ba7', booking: this.booking, identifier: this.identifier }), index.h("div", { key: '807b1792434d02a8434aa16150e8c9b6f39f71d9', slot: "footer" }, index.h("ir-custom-button", { key: 'da68ca27076cfc1f6f9f5471df0995275fa30791', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), index.h("ir-custom-button", { key: 'd9c1042cc13369eca8a5c2aabfc02b2ffb48fe47', form: "split-booking-form", type: "submit", size: "m", appearance: "accent", variant: "brand" }, "Confirm"))));
    }
};
IglSplitBookingDrawer.style = iglSplitBookingDrawerCss();

exports.igl_split_booking_drawer = IglSplitBookingDrawer;

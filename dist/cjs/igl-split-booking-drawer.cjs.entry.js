'use strict';

var index = require('./index-DgHWBwDV.js');

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
        return (index.h("ir-drawer", { key: '79aec6da0c375560899aaa8b2425b5ab1355d3af', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && index.h("igl-split-booking-form", { key: '851348a81020cd064b37690475bf9a7cab2d0420', booking: this.booking, identifier: this.identifier }), index.h("div", { key: '209786ef1e8992e1b12dd35a65a4ffe954fb0546', slot: "footer" }, index.h("ir-custom-button", { key: 'a388d7e3865d3015b1b013e330edff7a0568768b', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), index.h("ir-custom-button", { key: '0ab7cd7754ed7a6ca303a9e037df20f92946ce63', form: "split-booking-form", type: "submit", size: "m", appearance: "accent", variant: "brand" }, "Confirm"))));
    }
};
IglSplitBookingDrawer.style = iglSplitBookingDrawerCss();

exports.igl_split_booking_drawer = IglSplitBookingDrawer;

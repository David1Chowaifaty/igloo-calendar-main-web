'use strict';

var index = require('./index-D8WscJxs.js');

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
        return (index.h("ir-drawer", { key: '2de5d60839339946c97975e6f695aea9555f1f0b', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && index.h("igl-split-booking-form", { key: '4e931860f377898f96893aa4116c9f8596344aae', booking: this.booking, identifier: this.identifier }), index.h("div", { key: '5202446cf168f73ca594083c5881b6b952b09df0', slot: "footer" }, index.h("ir-custom-button", { key: '77c09a10e55c5c727cbf8de98a544d50541d92ff', size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), index.h("ir-custom-button", { key: 'a83dcf69613a0b63ffd1c39d4a0d35e3cfbcc635', form: "split-booking-form", type: "submit", size: "medium", appearance: "accent", variant: "brand" }, "Confirm"))));
    }
};
IglSplitBookingDrawer.style = iglSplitBookingDrawerCss();

exports.igl_split_booking_drawer = IglSplitBookingDrawer;

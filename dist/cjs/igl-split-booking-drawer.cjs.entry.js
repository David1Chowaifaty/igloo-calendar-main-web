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
        return (index.h("ir-drawer", { key: 'bbf09ff611f2c850178d07482ccfc60afac12b6a', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && index.h("igl-split-booking-form", { key: '0c6c7f5ee8c0233c0f7c76285a7eea863440d9ab', booking: this.booking, identifier: this.identifier }), index.h("div", { key: 'd4d334555c2c6305dc076a7a13a2baaa29105ecf', slot: "footer" }, index.h("ir-custom-button", { key: '4388334ea991cb7f397871302df3d09ddf1411c5', size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), index.h("ir-custom-button", { key: '993e7760fe3803f104aab86d985507ab040ad937', form: "split-booking-form", type: "submit", size: "medium", appearance: "accent", variant: "brand" }, "Confirm"))));
    }
};
IglSplitBookingDrawer.style = IglSplitBookingDrawerStyle0;

exports.igl_split_booking_drawer = IglSplitBookingDrawer;

//# sourceMappingURL=igl-split-booking-drawer.cjs.entry.js.map
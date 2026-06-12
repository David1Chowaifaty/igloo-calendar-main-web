'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irBookingDetailsDrawerCss = ".sc-ir-booking-details-drawer-h{display:block}";
const IrBookingDetailsDrawerStyle0 = irBookingDetailsDrawerCss;

const IrBookingDetailsDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bookingDetailsDrawerClosed = index.createEvent(this, "bookingDetailsDrawerClosed", 7);
    }
    /**
     * Controls whether the drawer is open.
     */
    open;
    /**
     * Property ID associated with the booking.
     */
    propertyId;
    /**
     * Authentication or session ticket.
     */
    ticket;
    /**
     * Language code used for localization.
     * Defaults to English (`en`).
     */
    language = 'en';
    /**
     * Booking reference number.
     */
    bookingNumber;
    /**
     * Emitted when the booking details drawer is closed.
     */
    bookingDetailsDrawerClosed;
    /**
     * Handles closing the drawer.
     *
     * This method is used for all close interactions (drawer hide,
     * close button, or programmatic close) to ensure a single source
     * of truth for the close behavior.
     */
    handleClose = (e) => {
        if (e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
        }
        this.bookingDetailsDrawerClosed.emit();
    };
    render() {
        return (index.h("ir-drawer", { key: 'bf1658f17ba7126294d3fcc0fd6c1c046089c1c8', onDrawerHide: this.handleClose, withoutHeader: true, open: this.open, style: {
                '--ir-drawer-width': '100rem',
                '--ir-drawer-background-color': 'var(--ir-color-muted-background,#f2f3f8)',
                '--ir-drawer-padding-left': '0',
                '--ir-drawer-padding-right': '0',
                '--ir-drawer-padding-top': '0',
                '--ir-drawer-padding-bottom': '0',
            } }, this.open && (index.h("ir-booking-details", { key: 'c9ab989b4b335a5d9f77cb79a0834a0e1391f78e', hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: this.handleClose, is_from_front_desk: true, propertyid: this.propertyId, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.bookingNumber.toString(), ticket: this.ticket, language: this.language, hasRoomAdd: true }))));
    }
};
IrBookingDetailsDrawer.style = IrBookingDetailsDrawerStyle0;

exports.ir_booking_details_drawer = IrBookingDetailsDrawer;

//# sourceMappingURL=ir-booking-details-drawer.cjs.entry.js.map
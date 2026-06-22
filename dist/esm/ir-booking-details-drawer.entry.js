import { r as registerInstance, c as createEvent, h } from './index-D7D7fhZS.js';

const irBookingDetailsDrawerCss = () => `.sc-ir-booking-details-drawer-h{display:block}`;

const IrBookingDetailsDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bookingDetailsDrawerClosed = createEvent(this, "bookingDetailsDrawerClosed");
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
        return (h("ir-drawer", { key: 'd1c88ebc9ce010e99e9e063fd709801ffdbb2402', onDrawerHide: this.handleClose, withoutHeader: true, open: this.open, style: {
                '--ir-drawer-width': '100rem',
                '--ir-drawer-background-color': 'var(--ir-color-muted-background,#f2f3f8)',
                '--ir-drawer-padding-left': '0',
                '--ir-drawer-padding-right': '0',
                '--ir-drawer-padding-top': '0',
                '--ir-drawer-padding-bottom': '0',
            } }, this.open && (h("ir-booking-details", { key: '1900637341724d497443ca46d66d1233fd3ea07a', hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: this.handleClose, is_from_front_desk: true, propertyid: this.propertyId, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.bookingNumber.toString(), ticket: this.ticket, language: this.language, hasRoomAdd: true }))));
    }
};
IrBookingDetailsDrawer.style = irBookingDetailsDrawerCss();

export { IrBookingDetailsDrawer as ir_booking_details_drawer };

import { r as registerInstance, c as createEvent, h } from './index-7e96440e.js';

const irBookingDetailsDrawerCss = ".sc-ir-booking-details-drawer-h{display:block}";
const IrBookingDetailsDrawerStyle0 = irBookingDetailsDrawerCss;

const IrBookingDetailsDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bookingDetailsDrawerClosed = createEvent(this, "bookingDetailsDrawerClosed", 7);
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
        return (h("ir-drawer", { key: '78cf38ce0993f63d84173ef6e08a1c36f4cba253', onDrawerHide: this.handleClose, withoutHeader: true, open: this.open, style: {
                '--ir-drawer-width': '80rem',
                '--ir-drawer-background-color': '#F2F3F8',
                '--ir-drawer-padding-left': '0',
                '--ir-drawer-padding-right': '0',
                '--ir-drawer-padding-top': '0',
                '--ir-drawer-padding-bottom': '0',
            } }, this.open && (h("ir-booking-details", { key: '05f297ce11c221a432dbc9e513ce3204600a64e4', hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: this.handleClose, is_from_front_desk: true, propertyid: this.propertyId, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.bookingNumber.toString(), ticket: this.ticket, language: this.language, hasRoomAdd: true }))));
    }
};
IrBookingDetailsDrawer.style = IrBookingDetailsDrawerStyle0;

export { IrBookingDetailsDrawer as ir_booking_details_drawer };

//# sourceMappingURL=ir-booking-details-drawer.entry.js.map
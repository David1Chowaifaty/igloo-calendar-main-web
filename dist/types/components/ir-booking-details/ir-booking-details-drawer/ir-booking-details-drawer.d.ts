import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * Booking Details Drawer
 *
 * This component wraps the `ir-booking-details` component inside an `ir-drawer`.
 * It is responsible for handling drawer visibility and emitting a single
 * close event when the drawer is dismissed from any source.
 */
export declare class IrBookingDetailsDrawer {
    /**
     * Controls whether the drawer is open.
     */
    open: boolean;
    /**
     * Property ID associated with the booking.
     */
    propertyId: number;
    /**
     * Authentication or session ticket.
     */
    ticket: string;
    /**
     * Language code used for localization.
     * Defaults to English (`en`).
     */
    language: string;
    /**
     * Booking reference number.
     */
    bookingNumber: string;
    /**
     * Emitted when the booking details drawer is closed.
     */
    bookingDetailsDrawerClosed: EventEmitter<void>;
    /**
     * Handles closing the drawer.
     *
     * This method is used for all close interactions (drawer hide,
     * close button, or programmatic close) to ensure a single source
     * of truth for the close behavior.
     */
    private handleClose;
    render(): any;
}

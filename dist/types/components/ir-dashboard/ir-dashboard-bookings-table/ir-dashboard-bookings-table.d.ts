import type { Booking } from "../../../models/booking.dto";
export type DashboardBookingsTableVariant = 'inHouse' | 'newBookings' | 'cancellations';
/**
 * Read-only booking list used by the dashboard's In-house, Bookings and Cancellations panels, built from the shared
 * booking table cells. In-house lists one row per occupied room; Bookings and Cancellations list one row per booking,
 * with its rooms' units stacked in the Unit cell.
 */
export declare class IrDashboardBookingsTable {
    bookings: Booking[];
    /** Adds the variant-specific column: booked-on date for new bookings, status for cancellations. */
    variant: DashboardBookingsTableVariant;
    emptyMessage: string;
    private isSameGuest;
    private renderExtraHeader;
    private renderExtraCell;
    /** The booking's stay, or the span of its rooms' stays when the booking omits it. */
    private stayOf;
    private renderBookingRow;
    private renderBalance;
    private renderRoomRow;
    render(): any;
}

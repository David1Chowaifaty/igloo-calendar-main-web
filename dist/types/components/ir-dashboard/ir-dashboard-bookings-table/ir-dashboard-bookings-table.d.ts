import type { Booking } from "../../../models/booking.dto";
export type DashboardBookingsTableVariant = 'inHouse' | 'newBookings' | 'cancellations';
/**
 * Read-only booking list used by the dashboard's In-house, Bookings and Cancellations panels.
 * One row per room, built from the shared booking table cells.
 */
export declare class IrDashboardBookingsTable {
    bookings: Booking[];
    /** Adds the variant-specific column: booked-on date for new bookings, status for cancellations. */
    variant: DashboardBookingsTableVariant;
    emptyMessage: string;
    private isSameGuest;
    private renderExtraHeader;
    private renderExtraCell;
    private renderRow;
    render(): any;
}

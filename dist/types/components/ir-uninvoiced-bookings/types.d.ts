import { ExposedBookingByInvoicedStatus } from "../../services/property/types";
export interface UninvoicedBookingRow {
    booking_nbr: string;
    bookedAt: number;
    currencySymbol: string;
    totalGuestAmount: number;
    uninvoicedGuestAmount: number;
    totalGuests: number;
    raw: ExposedBookingByInvoicedStatus;
}
export declare function mapBookingToUninvoicedRow(booking: ExposedBookingByInvoicedStatus): UninvoicedBookingRow;

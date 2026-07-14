import { DpReportBooking } from "../../services/dp-report/types";
export interface DpReportRow {
    booking_nbr: string;
    date: string;
    currencySymbol: string;
    /** DP_INITIAL_ACCOMODATION_GROSS — the actual gross accommodation amount charged (dynamic price). */
    accommodationGross: number;
    /** DP_OPTIM_BASE_GROSS — what the accommodation would have grossed at the optimal base rate. */
    optimBaseGross: number;
    /** DP_INVENTORY_BASE_GROSS — the inventory (direct booking) base gross reference. */
    inventoryBaseGross: number;
    /** Server-computed profit (see BOOKING_PROPERTIES.md for the formula). */
    profit: number;
    raw: DpReportBooking;
}
export declare function mapBookingToDpRow(booking: DpReportBooking): DpReportRow;

import type { RoomGuestsPayload } from "../../ir-booking-details/types";
import type { ICountry } from "../../../models/IBooking";
/**
 * Arrivals panel of the dashboard: the existing arrivals table plus its check-in dialog.
 * Data lives in the arrivals store, loaded by the dashboard root as a single page, so there's no pagination.
 */
export declare class IrDashboardArrivals {
    language: string;
    countries: ICountry[];
    roomGuestState: RoomGuestsPayload;
    private handleCheckInRoom;
    render(): any;
}

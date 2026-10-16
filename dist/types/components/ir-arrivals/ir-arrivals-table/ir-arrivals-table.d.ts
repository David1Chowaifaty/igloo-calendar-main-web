import type { PaginationChangeEvent } from "../../ir-pagination/ir-pagination";
import { Booking } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
import { RoomGuestsPayload } from "../../ir-booking-details/types";
export declare class IrArrivalsTable {
    selectedBooking: Booking;
    requestPageChange: EventEmitter<PaginationChangeEvent>;
    requestPageSizeChange: EventEmitter<PaginationChangeEvent>;
    checkInRoom: EventEmitter<RoomGuestsPayload>;
    private renderSection;
    private renderBookingRows;
    private compareGuests;
    private handleActionsClicked;
    private renderRow;
    private handlePageChange;
    private handlePageSizeChange;
    render(): any;
}

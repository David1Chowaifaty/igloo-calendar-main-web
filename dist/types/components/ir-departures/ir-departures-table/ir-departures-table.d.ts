import type { PaginationChangeEvent } from "../../ir-pagination/ir-pagination";
import { Booking } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
export type CheckoutRoomEvent = {
    booking: Booking;
    identifier: string;
};
export declare class IrDeparturesTable {
    /** Hides the pagination footer, for hosts that load the whole day in one page (the dashboard). */
    hidePagination: boolean;
    checkoutRoom: EventEmitter<CheckoutRoomEvent>;
    requestPageChange: EventEmitter<PaginationChangeEvent>;
    requestPageSizeChange: EventEmitter<PaginationChangeEvent>;
    private renderSection;
    private renderBookingRows;
    private compareGuests;
    private renderRow;
    private handlePageChange;
    private handlePageSizeChange;
    render(): any;
}

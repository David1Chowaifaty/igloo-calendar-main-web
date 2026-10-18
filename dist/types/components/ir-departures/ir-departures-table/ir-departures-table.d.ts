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
    /**
     * For properties without front desk (PMS): check-out status isn't tracked, so every room departing on the store's day is
     * listed in one list, without overdue marks or the actions column.
     */
    pmsDisabled: boolean;
    checkoutRoom: EventEmitter<CheckoutRoomEvent>;
    requestPageChange: EventEmitter<PaginationChangeEvent>;
    requestPageSizeChange: EventEmitter<PaginationChangeEvent>;
    private renderSection;
    private renderBookingRows;
    private compareGuests;
    private renderRow;
    /** Non-PMS rows: every room departing on the store's day, in the store's order. */
    private renderDepartingRooms;
    private renderBody;
    private handlePageChange;
    private handlePageSizeChange;
    render(): any;
}

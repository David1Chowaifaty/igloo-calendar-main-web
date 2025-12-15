import type { PaginationChangeEvent } from "../../ir-pagination/ir-pagination";
import { Booking } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
export type CheckoutRoomEvent = {
    booking: Booking;
    identifier: string;
};
export declare class IrDeparturesTable {
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

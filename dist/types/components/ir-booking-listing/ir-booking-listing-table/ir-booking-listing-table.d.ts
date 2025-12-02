import type { PaginationChangeEvent } from "../../ir-pagination/ir-pagination";
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrBookingListingTable {
    booking_nbr: string;
    isLoading: boolean;
    openBookingDetails: EventEmitter<string>;
    requestPageChange: EventEmitter<PaginationChangeEvent>;
    requestPageSizeChange: EventEmitter<PaginationChangeEvent>;
    private bookingListingsService;
    private deleteBooking;
    private calculateTotalPersons;
    private handleIrActions;
    private handlePageChange;
    private handlePageSizeChange;
    private renderRow;
    render(): any;
}

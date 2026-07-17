import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrUnvoicedBookingsTable {
    uninvoicedBookingsPageChange: EventEmitter<void>;
    private pageSizes;
    private columnHelper;
    private columns;
    private handlePageChange;
    private handlePageSizeChange;
    render(): any;
}

import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrUnvoicedBookingsFilters {
    uninvoicedBookingsFiltersChange: EventEmitter<{
        from: string;
        to: string;
        source: string;
    }>;
    private get quickDates();
    private handleDatesChanged;
    private handleSourceChanged;
    private handleSearch;
    render(): any;
}

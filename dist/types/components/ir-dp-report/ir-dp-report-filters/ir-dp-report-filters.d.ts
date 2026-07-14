import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrDpReportFilters {
    /**
     * Emitted only when the user clicks Search. The shared store (updated as soon as the
     * dates change) keeps every filter instance (chart tab + table tab) visually in sync
     * regardless of whether a search has been triggered yet.
     */
    dpFiltersChange: EventEmitter<{
        from: string;
        to: string;
    }>;
    /**
     * `getDate` is the "N ago" anchor. Picked from the from-side it sets only the from-date
     * (see `quickDatesMode="range"` on ir-date-range-filter); picked from the to-side it sets
     * from-date to this anchor *and* to-date to today, producing a complete last-N-days range.
     */
    private quickDates;
    private handleDatesChanged;
    private handleSearch;
    render(): any;
}

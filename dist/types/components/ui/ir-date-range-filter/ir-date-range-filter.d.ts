import { EventEmitter } from '../../../stencil-public-runtime';
import { Moment } from 'moment';
export interface DateRange {
    from: Moment | null;
    to: Moment | null;
}
export interface QuickDatePreset {
    label: string;
    getDate: () => Moment;
}
export declare class IrDateRangeFilter {
    /** Configurable quick-date preset buttons shown alongside each calendar. */
    quickDates: QuickDatePreset[];
    /** Controlled start date in YYYY-MM-DD format. */
    fromDate?: string;
    /** Controlled end date in YYYY-MM-DD format. */
    toDate?: string;
    /** Size variant passed through to inner form controls. */
    size: string;
    /** Whether to show the quick-action preset buttons in each calendar popup. */
    showQuickActions: boolean;
    /** Earliest selectable date in YYYY-MM-DD format. */
    minDate?: string;
    /** Latest selectable date in YYYY-MM-DD format. */
    maxDate?: string;
    dates: DateRange;
    liveMessage: string;
    /** Fired whenever either date changes. Payload contains ISO date strings or null. */
    datesChanged: EventEmitter<{
        from: string | null;
        to: string | null;
    }>;
    /** Fired when the user explicitly clears a date field. */
    dateCleared: EventEmitter<{
        field: 'from' | 'to';
    }>;
    /** Inner parts of ir-date-select that are re-exported by this component. */
    private static readonly dateSelectParts;
    /** Builds an `exportparts` string that re-exposes ir-date-select parts under a from-/to- prefix. */
    private exportPartsFor;
    private groupId;
    private toDateSelectRef;
    private fromDateSelectRef;
    private hasControlledFromDate;
    private hasControlledToDate;
    componentWillLoad(): void;
    onFromDateChange(newValue?: string | null): void;
    onToDateChange(newValue?: string | null): void;
    /** Updates one side of the date range and emits the change. */
    private selectDate;
    /** Clears one side of the date range. */
    private clearDate;
    private syncInitialDates;
    private syncControlledDates;
    private parseDate;
    private emitChange;
    /**
     * Caps the from-picker's max date at the to-date (or the global maxDate),
     * whichever is earlier.
     */
    private getFromMaxDate;
    /**
     * Floors the to-picker's min date at the from-date (or the global minDate),
     * whichever is later.
     */
    private getToMinDate;
    render(): any;
}

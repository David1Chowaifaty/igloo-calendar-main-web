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
    /** Quick date preset buttons */
    quickDates: QuickDatePreset[];
    /** Controlled start date (YYYY-MM-DD) */
    fromDate?: string;
    /** Controlled end date (YYYY-MM-DD) */
    toDate?: string;
    size: string;
    /** Show quick action buttons */
    showQuickActions: boolean;
    dates: DateRange;
    liveMessage: string;
    datesChanged: EventEmitter<{
        from: string | null;
        to: string | null;
    }>;
    private groupId;
    toDateSelectRef: HTMLIrDateSelectElement;
    fromDateSelectRef: HTMLIrDateSelectElement;
    componentWillLoad(): void;
    onFromDateChange(newValue: string): void;
    onToDateChange(newValue: string): void;
    private selectDate;
    private emitChange;
    render(): any;
}

import { EventEmitter } from '../../../../../stencil-public-runtime';
import { Moment } from 'moment';
export declare class IrRangePicker {
    fromDate: Moment;
    toDate: Moment;
    dateRangeChanged: EventEmitter<{
        fromDate: Moment;
        toDate: Moment;
    }>;
    private minSelectableDate;
    private maxSelectableDate;
    private fromDatePicker;
    private toDatePicker;
    handleDateChanged(e: CustomEvent): Promise<void>;
    private renderDatePicker;
    render(): any;
}

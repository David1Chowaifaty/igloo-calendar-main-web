import { EventEmitter } from '../../../stencil-public-runtime';
import { IToast } from '../../ir-toast/toast';
export declare class IglDateRange {
    defaultData: {
        [key: string]: any;
    };
    disabled: boolean;
    minDate: string;
    dateLabel: string;
    maxDate: string;
    withDateDifference: boolean;
    variant: 'booking' | 'default';
    renderAgain: boolean;
    dateSelectEvent: EventEmitter<{
        [key: string]: any;
    }>;
    toast: EventEmitter<IToast>;
    private totalNights;
    private fromDate;
    private toDate;
    private fromDateStr;
    private toDateStr;
    componentWillLoad(): void;
    handleDataChange(newValue: any, oldValue: any): void;
    private initializeDates;
    private calculateTotalNights;
    private getFormattedDateString;
    private handleDateSelectEvent;
    private handleDateChange;
    render(): any;
}

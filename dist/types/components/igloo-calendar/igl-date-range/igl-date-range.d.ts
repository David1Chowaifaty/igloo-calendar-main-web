import { EventEmitter } from '../../../stencil-public-runtime';
import { IToast } from "../../ui/ir-toast/toast";
import { Moment } from 'moment';
export type DateRangeChangeEvent = {
    checkIn: Moment;
    checkOut: Moment;
};
export declare class IglDateRange {
    el: HTMLIglDateRangeElement;
    size: 'small' | 'medium' | 'large';
    defaultData: {
        [key: string]: any;
    };
    disabled: boolean;
    minDate: string;
    dateLabel: string;
    maxDate: string;
    withDateDifference: boolean;
    variant: 'booking' | 'default';
    hint: string;
    renderAgain: boolean;
    isActive: boolean;
    dateSelectEvent: EventEmitter<{
        [key: string]: any;
    }>;
    dateRangeChange: EventEmitter<DateRangeChangeEvent>;
    toast: EventEmitter<IToast>;
    private totalNights;
    private static instanceCounter;
    private popupId;
    fromDate: Date;
    toDate: Date;
    isInvalid: string;
    componentWillLoad(): void;
    handleDataChange(newValue: any, oldValue: any): void;
    private initializeDates;
    private calculateTotalNights;
    private handleDateSelectEvent;
    private handleCustomDateChange;
    openDatePicker(): Promise<void>;
    closeDatePicker(): Promise<void>;
    private togglePicker;
    private handleKeyDown;
    handleAriaInvalidChange(newValue: any): void;
    private get label();
    render(): any;
}

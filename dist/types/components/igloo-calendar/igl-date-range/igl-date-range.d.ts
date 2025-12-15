import { EventEmitter } from '../../../stencil-public-runtime';
import { IToast } from "../../ui/ir-toast/toast";
export declare class IglDateRange {
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
    renderAgain: boolean;
    dateSelectEvent: EventEmitter<{
        [key: string]: any;
    }>;
    toast: EventEmitter<IToast>;
    private totalNights;
    fromDate: Date;
    toDate: Date;
    componentWillLoad(): void;
    handleDataChange(newValue: any, oldValue: any): void;
    private initializeDates;
    private calculateTotalNights;
    private handleDateSelectEvent;
    private handleDateChange;
    private get dates();
    render(): any;
}

import { EventEmitter } from '../../../../stencil-public-runtime';
import { Moment } from 'moment';
import { IToast } from "../../../ui/ir-toast/toast";
export type SelectedRooms = {
    id: string | number;
    result: 'open' | 'closed';
};
export declare class IglBulkStopSale {
    maxDatesLength: number;
    property_id: number;
    selectedRoomTypes: SelectedRooms[];
    errors: 'dates' | 'rooms' | 'weekdays';
    isLoading: boolean;
    dates: {
        from: Moment | null;
        to: Moment | null;
    }[];
    selectedWeekdays: Set<number>;
    closeModal: EventEmitter<null>;
    toast: EventEmitter<IToast>;
    private sidebar;
    private dateRefs;
    private reloadInterceptor;
    private minDate;
    private bookingService;
    private getDayIndex;
    private datesSchema;
    private unitSections;
    private weekdaysSections;
    private datesSections;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private addBlockDates;
    private activate;
    private deactivate;
    private handleDateChange;
    private addDateRow;
    render(): any;
}

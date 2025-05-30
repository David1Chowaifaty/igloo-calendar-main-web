import { EventEmitter } from '../../../stencil-public-runtime';
import { Moment } from 'moment';
export type SelectedRooms = {
    id: string | number;
    result: 'open' | 'closed';
};
export interface Weekday {
    value: number;
    label: string;
}
export declare class IglBulkStopSale {
    maxDatesLength: number;
    selectedRoomTypes: SelectedRooms[];
    errors: 'dates' | 'rooms' | 'weekdays';
    isLoading: boolean;
    dates: {
        from: Moment | null;
        to: Moment | null;
    }[];
    private weekdays;
    selectedWeekdays: Set<number>;
    closeModal: EventEmitter<null>;
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
    handleBeforeSidebarClose(e: CustomEvent): void;
    private addBlockDates;
    private activate;
    private deactivate;
    private toggleWeekDays;
    private handleDateChange;
    private addDateRow;
    render(): any;
}

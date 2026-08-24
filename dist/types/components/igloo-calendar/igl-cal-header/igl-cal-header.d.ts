import { EventEmitter } from '../../../stencil-public-runtime';
import { DayUseBookings } from "../../../components";
export declare class IglCalHeader {
    optionEvent: EventEmitter<{
        [key: string]: any;
    }>;
    gotoRoomEvent: EventEmitter<{
        [key: string]: any;
    }>;
    gotoToBeAssignedDate: EventEmitter<{
        [key: string]: any;
    }>;
    calendarData: {
        [key: string]: any;
    };
    today: String;
    propertyid: number;
    unassignedDates: any;
    to_date: string;
    highlightedDate: string;
    dayUseBookings: DayUseBookings[];
    renderAgain: boolean;
    unassignedRoomsNumber: any;
    private roomsList;
    private toBeAssignedService;
    componentWillLoad(): void;
    handleCalendarDataChanged(): void;
    private initializeRoomsList;
    private fetchAndAssignUnassignedRooms;
    private assignRoomsToDate;
    handleReduceAvailableUnitEvent(event: CustomEvent<{
        fromDate: string;
        toDate: string;
    }>): void;
    handleOptionEvent(key: any, data?: any): void;
    getStringDateFormat(dt: any): string;
    getNewBookingModel(): {
        ID: string;
        NAME: string;
        EMAIL: string;
        PHONE: string;
        REFERENCE_TYPE: string;
        FROM_DATE: string;
        TO_DATE: string;
        roomsInfo: any;
        TITLE: string;
        event_type: string;
        legendData: any;
        defaultDateRange: {
            fromDate: Date;
            fromDateStr: string;
            toDate: Date;
            toDateStr: string;
            dateDifference: number;
            editabled: boolean;
            message: string;
        };
    };
    renderView(): void;
    private handleToolbarAction;
    private handleRoomSelected;
    private handleDayBadgeClicked;
    render(): any;
}

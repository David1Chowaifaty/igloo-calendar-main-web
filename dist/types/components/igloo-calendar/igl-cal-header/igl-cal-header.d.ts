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
    to_date: string;
    highlightedDate: string;
    dayUseBookings: DayUseBookings[];
    renderAgain: boolean;
    private roomsList;
    componentWillLoad(): void;
    private initializeRoomsList;
    /** Reads the unassigned-units store live (auto-subscribes on render), keyed by `dayInfo.day` (D_M_YYYY) after conversion to ISO. */
    private getUnassignedRoomsNumberMap;
    /** Days (D_M_YYYY) whose unassigned-units fetch is still in flight — same store subscription as the count map. */
    private getUnassignedLoadingDaysMap;
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

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
    /** `YYYY-MM-DD` */
    today: string;
    propertyid: number;
    to_date: string;
    highlightedDate: string;
    dayUseBookings: DayUseBookings[];
    renderAgain: boolean;
    private roomsList;
    componentWillLoad(): void;
    private initializeRoomsList;
    /** Reads the unassigned-units store live (auto-subscribes on render), keyed by `dayInfo.value` (`YYYY-MM-DD`). */
    private getUnassignedRoomsNumberMap;
    /** Days (`YYYY-MM-DD`) whose unassigned-units fetch is still in flight — same store subscription as the count map. */
    private getUnassignedLoadingDaysMap;
    handleOptionEvent(key: any, data?: any): void;
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
            fromDate: string;
            toDate: string;
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

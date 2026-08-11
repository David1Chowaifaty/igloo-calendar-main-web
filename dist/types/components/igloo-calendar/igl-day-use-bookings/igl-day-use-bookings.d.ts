import { EventEmitter } from '../../../stencil-public-runtime';
import { DayUseBookings } from "../../../services/property/types";
export declare class IglDayUseBookings {
    /** Day-use bookings for whatever calendar window has been loaded (from `getDayUseBookingsForCalendar`) — same source `igl-cal-body` uses for its cell markers. */
    dayUseBookings: DayUseBookings[];
    calendarData: {
        [key: string]: any;
    };
    selectedDate: string;
    optionEvent: EventEmitter<{
        [key: string]: any;
    }>;
    showBookingPopup: EventEmitter<{
        [key: string]: any;
    }>;
    componentWillLoad(): void;
    handleDayUseBookingsChange(): void;
    private selectDefaultDate;
    private get orderedDates();
    private get bookingsForSelectedDate();
    private getUnitName;
    private getRoomTypeName;
    private getGuestName;
    private getPrice;
    private getStatus;
    private formatTime;
    private groupByRoomType;
    private openBookingDetails;
    private handleOptionEvent;
    private renderBooking;
    private renderCategory;
    render(): any;
}

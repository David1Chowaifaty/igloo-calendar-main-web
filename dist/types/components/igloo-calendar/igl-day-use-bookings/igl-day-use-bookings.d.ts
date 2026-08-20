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
    /**
     * Stays sitting on the same unit — day-use rows are extra services and never appear in `bookingEvents`,
     * and blocks are filtered out since they carry no booking number.
     */
    private getStayEvents;
    /** `FROM_DATE`/`TO_DATE` are clamped to the loaded window, so the untouched `defaultDates` win when present. */
    private getStayDates;
    private getStayRoom;
    /** Accepts both `HH:mm` values (formatted to `hh:mm A`) and plain setup labels such as "Not sure yet". */
    private formatClockTime;
    private getDepartureTime;
    private getArrivalTime;
    private toStayMovement;
    /**
     * The same-day movements the day use has to fit around: the stay leaving that morning, the stay
     * arriving that evening, or — when both exist — the turnover between the two.
     */
    private getStayMovements;
    /** Movement chips plus the tooltip spelling out the stay(s) behind them — both bookings when it's a turnover. */
    private renderStayMovements;
    private renderBooking;
    private renderCategory;
    render(): any;
}

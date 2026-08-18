import { EventEmitter } from '../../../stencil-public-runtime';
import { PhysicalRoom, RoomType } from "../../../models/booking.dto";
import { ICountry } from "../../../models/IBooking";
import { HKIssue } from "../../../models/housekeeping";
import { DayUseBookings } from "../../../services/property/types";
export type RoomCategory = RoomType & {
    expanded: boolean;
};
export declare class IglCalBody {
    isScrollViewDragging: boolean;
    propertyId: number;
    calendarData: {
        [key: string]: any;
    };
    today: String;
    currency: any;
    language: string;
    countries: ICountry[];
    highlightedDate: string;
    /** Day-use bookings for the currently loaded date window (from `getDayUseBookingsForCalendar`) — booked units get a red 2px cell border. */
    dayUseBookings: DayUseBookings[];
    dragOverElement: string;
    renderAgain: boolean;
    selectedRoom: PhysicalRoom;
    selectedRooms: {
        [key: string]: any;
    };
    issues: HKIssue[] | null;
    addBookingDatasEvent: EventEmitter<any[]>;
    showBookingPopup: EventEmitter;
    scrollPageToRoom: EventEmitter;
    private fromRoomId;
    private newEvent;
    private currentDate;
    private bookingMap;
    private interactiveTitle;
    private dayRateMap;
    private roomsWithTodayCheckinStatus;
    private categoriesWithTodayCheckinStatus;
    private roomTitleClickTimer;
    private dayUseBookingsByKey;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    handleCalendarDataChange(): void;
    handleTodayChange(): void;
    handleDayUseBookingsChange(): void;
    dragOverHighlightElementHandler(event: CustomEvent): void;
    gotoRoom(event: CustomEvent): void;
    addToBeAssignedEvents(event: CustomEvent): void;
    closeWindow(): void;
    private scrollToRoom;
    private getRoomCategoryByRoomId;
    private getCategoryName;
    private getCategoryId;
    private getTotalPhysicalRooms;
    private getRoomtypeUnits;
    private getRoomName;
    private getRoomId;
    private getRoomById;
    private getBookingData;
    private addBookingDatas;
    private getSelectedCellRefName;
    private getSplitBookingEvents;
    private addNewEvent;
    private getTwoDigitNumStr;
    private getDateStr;
    private removeNewEvent;
    private clickCell;
    private showNewBookingPopup;
    private renderElement;
    private getBookingMap;
    private getRoomtypeDayInventoryCells;
    private getGeneralUnitsDayCells;
    /**
     * Opens the existing day-use reservation's details drawer — same `showBookingPopup`/`EDIT_BOOKING`
     * path `igl-booking-event-hover`'s "Edit booking" action uses, so `igloo-calendar.tsx`'s existing
     * `editBookingItem` wiring picks it up without any new plumbing.
     */
    private formatDayUseTime;
    private getDayUseGuestName;
    private getDayUsePrice;
    private getDayUseStatus;
    private openDayUseBookingDetails;
    /**
     * Opens the booking editor drawer in day-use mode with the double-clicked unit preselected
     * (room type scoped via `roomsInfo`, today as the default day-use date).
     */
    private openDayUseBooking;
    /**
     * Disambiguates a single click (toggle housekeeping) from a double click (open day-use booking)
     * on the room name cell. A native `dblclick` listener doesn't work here: the single-click handler
     * opens a modal housekeeping dialog, which captures the second click before the browser can pair
     * it with the first to synthesize `dblclick`. Instead we delay the single-click action briefly so a
     * fast second click can cancel it and fire the double-click action instead.
     */
    private handleRoomTitleClick;
    private toggleCategory;
    private getRoomtypeRow;
    /**
     * Renders a list of active rooms for an expanded room category. Returns an array of JSX elements, including headers and day columns, or an empty array if the category is collapsed or contains no active rooms.
     *
     * @param {RoomCategory} roomType - The category containing room details.
     */
    private getUnitsByRoomtype;
    private getRoomRows;
    private getTodayCheckinRoomsAndCategories;
    private updateTodayCheckinStatus;
    private roomHasTodayCheckin;
    private categoryHasRoomWithTodayCheckin;
    private updateDisabledCellsCache;
    private getCellKey;
    private isCellDisabled;
    private updateDayUseBookingKeys;
    private getDayUseBooking;
    private hasDayUseBookingBetween;
    render(): any;
}

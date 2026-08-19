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
    private roomEventsIndex;
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
    /** Cancels the in-progress range selection and surfaces why, shared by every conflict check in `clickCell`. */
    private cancelSelectionWithConflictToast;
    private clickCell;
    private showNewBookingPopup;
    private renderElement;
    private getBookingMap;
    /**
     * Indexes every booking/block event in `calendarData.bookingEvents` by physical room id, with
     * FROM_DATE/TO_DATE pre-parsed to day-level timestamps and block-vs-booking pre-classified via
     * `isBlockUnit`. Rebuilt whenever `calendarData` changes so the range-conflict checks used during
     * cell selection (`hasBookingConflictBetween`/`hasBlockedConflictBetween`) are O(events-in-that-room)
     * numeric comparisons instead of scanning/parsing the full bookings array on every click.
     */
    private updateRoomEventsIndex;
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
    /**
     * True if a day-use booking for `roomId` falls strictly between `startValue` and `endValue`
     * (both `'YYYY-MM-DD'`, either order). Endpoint-exclusive — a day-use booking on either clicked
     * date itself doesn't block the selection.
     */
    private hasDayUseBookingBetween;
    /**
     * Shared O(events-in-room) endpoint-exclusive range-overlap test behind `hasBookingConflictBetween`
     * and `hasBlockedConflictBetween`. Two ranges overlap (endpoints excluded) when
     * `eventStart < rangeEnd && eventEnd > rangeStart` — a single numeric comparison per event, no
     * per-day iteration, using the pre-parsed timestamps cached in `roomEventsIndex`.
     */
    private hasRoomEventConflictBetween;
    /**
     * True if an existing (non-block) booking for `roomId` overlaps the open interval between
     * `startValue` and `endValue` — i.e. a real booking's stay exists strictly between the two
     * clicked dates. Endpoint-exclusive: a booking checking out or in exactly on a clicked date
     * does not count (standard checkout-day/checkin-day overlap semantics).
     */
    private hasBookingConflictBetween;
    /**
     * True if a blocked-dates entry for `roomId` overlaps the open interval between `startValue`
     * and `endValue`. Same endpoint-exclusive semantics and cached-index lookup as
     * `hasBookingConflictBetween`, filtered to block entries instead of real bookings.
     */
    private hasBlockedConflictBetween;
    /**
     * True if any date strictly between `startValue` and `endValue` is disabled for `roomId` in
     * `calendar_dates.disabled_cells` (stop-sale / zero availability). Endpoint-exclusive, same loop
     * shape as `hasDayUseBookingBetween`; reuses the existing `isCellDisabled` cache so no new
     * per-day data structure is needed.
     */
    private hasUnavailableCellBetween;
    render(): any;
}

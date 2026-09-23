import { EventEmitter } from '../../stencil-public-runtime';
import { Moment } from 'moment';
import { IRoomNightsData, CalendarModalEvent } from "../../models/property-types";
import { TIglBookPropertyPayload } from "../../models/igl-book-property";
import type { DayUseBookings } from "../../services/property/types";
import { CheckoutRoomEvent } from '../ir-departures/ir-departures-table/ir-departures-table';
export type CalendarSidebarState = {
    type: 'room-guests' | 'booking-details' | 'add-days' | 'bulk-blocks' | 'split' | 'reallocate-drawer' | 'rectifier';
    payload: any;
};
export declare class IglooCalendar {
    propertyid: number;
    from_date: string;
    to_date: string;
    language: string;
    loadingMessage: string;
    currencyName: string;
    ticket: string;
    p: string;
    baseUrl: string;
    private element;
    calendarData: {
        [key: string]: any;
    };
    property_id: number;
    days: {
        [key: string]: any;
    }[];
    scrollViewDragging: boolean;
    dialogData: CalendarModalEvent | null;
    bookingItem: TIglBookPropertyPayload | null;
    editBookingItem: TIglBookPropertyPayload | null;
    showLegend: boolean;
    showPaymentDetails: boolean;
    showToBeAssigned: boolean;
    showDayUseBookings: boolean;
    roomNightsData: IRoomNightsData | null;
    renderAgain: boolean;
    showBookProperty: boolean;
    highlightedDate: string;
    calDates: {
        from: string;
        to: string;
    };
    isAuthenticated: boolean;
    calendarSidebarState: CalendarSidebarState;
    invoiceState: CheckoutRoomEvent;
    /** Early check-out redirected from a calendar event popover into the full booking-details drawer. */
    checkoutRedirect: {
        bookingNumber: string;
        identifier: string;
    } | null;
    dayUseBookings: DayUseBookings[];
    dragOverHighlightElement: EventEmitter;
    moveBookingTo: EventEmitter;
    calculateUnassignedDates: EventEmitter;
    revertBooking: EventEmitter;
    openCalendarSidebar: EventEmitter<CalendarSidebarState>;
    showRoomNightsDialog: EventEmitter<IRoomNightsData>;
    private bookingService;
    private setupService;
    private roomService;
    private propertyService;
    private eventsService;
    private unassignedUnitsService;
    private housekeepingService;
    private countries;
    private visibleCalendarCells;
    /**
     * Set whenever `addDatesToCalendar()` appends day cells, so an in-flight drag knows its cached
     * drop-target bounds are short a few days and re-measures on the next `DRAG_OVER`.
     */
    private dragOverBoundsStale;
    private scrollContainer;
    private today;
    private reachedEndOfCalendar;
    private unsubscribeRealtime;
    private ApiClient;
    private calendarModalEl;
    private salesQueue;
    private availabilityQueue;
    /** Periods from `GET_UNASSIGNED_DATES` notifications waiting to be fetched as one batch. */
    private pendingUnassignedRanges;
    private unassignedDatesQuietTimer;
    private unassignedDatesMaxWaitTimer;
    private isFlushingUnassignedDates;
    private roomTypeIdsCache;
    private tasksEndDate;
    dialogEl: HTMLIrDialogElement;
    private departureTimes;
    /** Re-runs init when the language changes so server-localized data follows. */
    private languageSync;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
    handleDeleteEvent(ev: CustomEvent): Promise<void>;
    handleCalendarSidebarEvents(ev: CustomEvent): Promise<void>;
    scrollPageToRoom(event: CustomEvent): void;
    handleShowDialog(event: CustomEvent): void;
    handleShowRoomNightsDialog(event: CustomEvent<IRoomNightsData>): void;
    handleBookingDatasChange(event: CustomEvent): void;
    handleUpdateBookingEvent(e: CustomEvent): void;
    showBookingPopupEventDataHandler(event: CustomEvent): void;
    updateEventDataHandler(event: CustomEvent): void;
    dragOverEventDataHandler(event: CustomEvent): void;
    /**
     * Caches every day column's and room row's extent, in `.bodyContainer` grid space - the same
     * space `igl-booking-event` writes its `style.top`/`style.left` in, so a dragged bar's position
     * can be hit-tested against it directly. Measured once per drag; the values are scroll-invariant
     * (the day header is sticky vertically only, `offsetTop` ignores `scrollTop`), so only a change
     * to the set of rendered cells invalidates them.
     */
    private measureDragOverBounds;
    ticketChanged(newValue: string, oldValue: string): void;
    private init;
    private renderModalBody;
    private setUpCalendarData;
    private initializeApp;
    /**
     * Fetches day-use bookings for the given window and merges them into `dayUseBookings`
     * (passed down to `<igl-cal-body>` to mark booked units with a red 2px cell border).
     */
    private fetchDayUseBookings;
    /**
     * Broadcast after a `Do_Day_Use` call succeeds elsewhere (e.g. another agent/tab).
     * The socket payload doesn't carry `unit_id`/`bh_id`, so we can't build a
     * `DayUseBookings` entry from it directly — refetch the affected window instead.
     */
    private handleDayUseCreated;
    /**
     * Broadcast when a day-use extra service is added, edited, or removed (e.g. from
     * another agent/tab). Unlike `DAY_USE_CREATED`, this refetches the target date and
     * *replaces* whatever we currently hold for it, so removed/edited bookings correctly
     * disappear from units that no longer have one instead of leaving a stale entry behind.
     */
    private handleDayUseModified;
    /**
     * Broadcast when a day-use extra service is removed. Unlike `DAY_USE_MODIFIED`, the payload
     * carries enough to identify the exact entry (unit + date), so it's dropped locally without a refetch.
     */
    private handleDayUseRemoved;
    private getHkIssues;
    private fetchSetupEntries;
    private getHousekeepingTasks;
    private handleSocketMessage;
    private handleUpdateCalendarRate;
    private handleHKIssueFound;
    private handleHKIssueFixed;
    private handleSetDepartureTime;
    private handleRoomCalendarExtra;
    private handleSharingPersonsUpdated;
    private handleRoomStatusChanged;
    private handleHkSkip;
    private handleUnitHKStatusChanged;
    private handleDoReservation;
    private handleBlockExposedUnit;
    private handleAssignExposedRoom;
    private handleReallocateExposedRoomBlock;
    private handleDeleteCalendarPool;
    /**
     * Assigning a multi-room booking fires one `GET_UNASSIGNED_DATES` per unit, all within a second or
     * two and all for overlapping periods. Answering each one with its own request is what made these
     * bursts expensive, so notifications are collected rather than followed:
     *
     * - the quiet timer restarts on every notification, so a burst is fetched once it settles;
     * - the max-wait timer does not restart, so a sustained stream still flushes on a fixed cadence
     *   instead of being starved by the quiet timer;
     * - {@link isFlushingUnassignedDates} keeps exactly one request in flight; notifications arriving
     *   meanwhile stay in `pendingUnassignedRanges` and are picked up by the trailing run, so a busy
     *   period adds items to the next batch rather than adding requests.
     */
    private scheduleUnassignedDatesFlush;
    private runUnassignedDatesFlush;
    private clearUnassignedDatesTimers;
    private handleGetUnassignedDates;
    /** Every unassigned-units read goes through here so the header can show the range as in flight. */
    private fetchUnassignedUnitsRange;
    private flushUnassignedDates;
    private parseDateRange;
    private handleChangeInDueAmount;
    private handleChangeInBookStatus;
    private handleNonTechnicalChangeInBooking;
    private updateBookingEventsDateRange;
    /**
     *
     *private updateBookingEventsDateRange(eventData) {
      const now = moment();
      eventData.forEach(bookingEvent => {
        bookingEvent.legendData = this.calendarData.formattedLegendData;
        bookingEvent.defaultDateRange = {};
        bookingEvent.defaultDateRange.fromDate = new Date(bookingEvent.FROM_DATE + 'T00:00:00');
        bookingEvent.defaultDateRange.fromDateStr = this.getDateStr(bookingEvent.defaultDateRange.fromDate);
        bookingEvent.defaultDateRange.fromDateTimeStamp = bookingEvent.defaultDateRange.fromDate.getTime();
  
        bookingEvent.defaultDateRange.toDate = new Date(bookingEvent.TO_DATE + 'T00:00:00');
        bookingEvent.defaultDateRange.toDateStr = this.getDateStr(bookingEvent.defaultDateRange.toDate);
        bookingEvent.defaultDateRange.toDateTimeStamp = bookingEvent.defaultDateRange.toDate.getTime();
  
        bookingEvent.defaultDateRange.dateDifference = bookingEvent.NO_OF_DAYS;
        bookingEvent.roomsInfo = [...this.calendarData.roomsInfo];
        if (!isBlockUnit(bookingEvent.STATUS_CODE)) {
          const toDate = moment(bookingEvent.TO_DATE, 'YYYY-MM-DD');
          const fromDate = moment(bookingEvent.FROM_DATE, 'YYYY-MM-DD');
          if (bookingEvent.STATUS !== 'PENDING') {
            if (fromDate.isSame(now, 'day') && now.hour() >= 12) {
              bookingEvent.STATUS = bookingStatus['000'];
            } else if (now.isAfter(fromDate, 'day') && now.isBefore(toDate, 'day')) {
              bookingEvent.STATUS = bookingStatus['000'];
            } else if (toDate.isSame(now, 'day') && now.hour() < 12) {
              bookingEvent.STATUS = bookingStatus['000'];
            } else if ((toDate.isSame(now, 'day') && now.hour() >= 12) || toDate.isBefore(now, 'day')) {
              bookingEvent.STATUS = bookingStatus['003'];
            }
          }
        }
      });
    }
     */
    private processSalesBatch;
    private processAvailabilityBatch;
    private setRoomsData;
    private getLegendData;
    private getDateStr;
    private scrollToElement;
    private AddOrUpdateRoomBookings;
    private transformDateForScroll;
    shouldRenderCalendarView(): any;
    onOptionSelect(event: CustomEvent<{
        [key: string]: any;
    }>): void;
    private addDatesToCalendar;
    handleDateSearch(dates: {
        start: Moment;
        end: Moment;
    }): Promise<void>;
    private closeSideMenu;
    private scrollViewDragPos;
    private dragScrollContent;
    private onScrollContentMoveHandler;
    private onScrollContentMoveEndHandler;
    private calendarScrolling;
    private hasAncestorWithClass;
    private highlightDragOver;
    private handleModalConfirm;
    private handleModalCancel;
    private handleRoomNightsDialogClose;
    private handleCloseBookingWindow;
    private handleInvoiceClose;
    private handleCheckoutDialogClosed;
    render(): any;
}

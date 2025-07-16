import { EventEmitter } from '../../stencil-public-runtime';
import { Moment } from 'moment';
import { IRoomNightsData, CalendarModalEvent } from "../../models/property-types";
import { TIglBookPropertyPayload } from "../../models/igl-book-property";
import { RoomHkStatus } from "../../models/booking.dto";
export interface UnitHkStatusChangePayload {
    PR_ID: number;
    ROOM_CATEGORY_ID: number;
    NAME: string;
    DESCRIPTION: string;
    ENTRY_USER_ID: number;
    ENTRY_DATE: string;
    OWNER_ID: number;
    IS_ACTIVE: boolean;
    HKS_CODE: RoomHkStatus;
    HKM_ID: number;
    CHECKLIST: null;
    My_Room_category: null;
    My_Hkm: null;
}
export type SalesBatchPayload = {
    rate_plan_id: number;
    night: string;
    is_available_to_book: boolean;
};
export type AvailabilityBatchPayload = {
    room_type_id: number;
    date: string;
    availability: number;
};
export type CalendarSidebarState = {
    type: 'room-guests' | 'booking-details' | 'add-days' | 'bulk-blocks';
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
    unassignedDates: {};
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
    dragOverHighlightElement: EventEmitter;
    moveBookingTo: EventEmitter;
    calculateUnassignedDates: EventEmitter;
    reduceAvailableUnitEvent: EventEmitter<{
        fromDate: string;
        toDate: string;
    }>;
    revertBooking: EventEmitter;
    openCalendarSidebar: EventEmitter<CalendarSidebarState>;
    showRoomNightsDialog: EventEmitter<IRoomNightsData>;
    private bookingService;
    private roomService;
    private eventsService;
    private toBeAssignedService;
    private countries;
    private visibleCalendarCells;
    private scrollContainer;
    private today;
    private reachedEndOfCalendar;
    private socket;
    private token;
    private calendarModalEl;
    private salesQueue;
    private availabilityQueue;
    private roomTypeIdsCache;
    componentWillLoad(): void;
    componentDidLoad(): void;
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
    ticketChanged(newValue: string, oldValue: string): void;
    private init;
    private renderModalBody;
    private setUpCalendarData;
    initializeApp(): Promise<void>;
    private handleSocketMessage;
    private handleSharingPersonsUpdated;
    private handleRoomStatusChanged;
    private handleUnitHKStatusChanged;
    private handleDoReservation;
    private handleBlockExposedUnit;
    private handleAssignExposedRoom;
    private handleReallocateExposedRoomBlock;
    private handleDeleteCalendarPool;
    private handleGetUnassignedDates;
    private parseDateRange;
    private handleChangeInDueAmount;
    private handleChangeInBookStatus;
    private handleNonTechnicalChangeInBooking;
    private checkBookingAvailability;
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
    private handleSideBarToggle;
    private handleCloseBookingWindow;
    render(): any;
}

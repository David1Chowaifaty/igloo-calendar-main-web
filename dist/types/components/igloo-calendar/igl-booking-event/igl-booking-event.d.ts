import { EventEmitter } from '../../../stencil-public-runtime';
import { IRoomNightsData, CalendarModalEvent } from "../../../models/property-types";
import { ICountry } from "../../../models/IBooking";
export declare class IglBookingEvent {
    private element;
    currency: any;
    is_vacation_rental: boolean;
    language: string;
    bookingEvent: {
        [key: string]: any;
    };
    allBookingEvents: {
        [key: string]: any;
    };
    countries: ICountry[];
    roomTop: number;
    hideBubbleInfo: EventEmitter;
    updateEventData: EventEmitter;
    dragOverEventData: EventEmitter;
    showRoomNightsDialog: EventEmitter<IRoomNightsData>;
    showDialog: EventEmitter<CalendarModalEvent>;
    resetStretchedBooking: EventEmitter<string>;
    updateBookingEvent: EventEmitter<{
        [key: string]: any;
    }>;
    renderElement: boolean;
    position: {
        [key: string]: any;
    };
    isShrinking: boolean | null;
    private dayWidth;
    private eventSpace;
    private showInfoPopup;
    private bubbleInfoTopSide;
    private isStretch;
    private eventsService;
    private bookingService;
    private resizeSide;
    private isDragging;
    private initialX;
    private initialY;
    private currentX;
    private currentY;
    private initialWidth;
    private initialLeft;
    private finalWidth;
    private dragInitPos;
    private dragEndPos;
    elementRect: {
        [key: string]: any;
    };
    private isTouchStart;
    private moveDifferenceX;
    private moveDifferenceY;
    private animationFrameId;
    private minResizeDays;
    private autoScroller;
    private scrollHost;
    /** Last drag offsets written to the DOM, so a repeated apply for the same state is skipped. */
    private appliedDistance;
    /**
     * Room row extents captured when a move drag starts, in the same `.bodyContainer` grid space the
     * bar positions itself in, and used to settle it on release. Captured up front rather than read
     * at drop time so the measurement can't be disturbed by the drag itself, and because the same
     * pass is what excludes category headers (taller than a room row, and not droppable).
     */
    private dragRowBands;
    private handleMouseMoveBind;
    private handleMouseUpBind;
    private handleClickOutsideBind;
    private handleHostScrollBind;
    private role;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleClickOutside(event: Event): void;
    hideBubbleInfoPopup(event: CustomEvent): void;
    moveBookingToHandler(event: CustomEvent): Promise<void>;
    private buildBarIds;
    private fetchAndAssignBookingData;
    private reset;
    private findRoomType;
    private getModalDescription;
    private resetBookingToInitialPosition;
    handleRevertBooking(event: CustomEvent<string>): void;
    checkIfSlotOccupied(toRoomId: any, from_date: any, to_date: any): any;
    renderAgain(): void;
    getUniqueId(): number;
    isSplitBooking(): boolean;
    isNewEvent(): boolean;
    isHighlightEventType(): boolean;
    getBookingId(): any;
    getBookingStatus(): any;
    getBookedBy(): any;
    getBookedRoomId(): any;
    getEventType(): any;
    getEventLegend(): any;
    getLegendOfStatus(aStatusId: any): any;
    getNoteNode(): any;
    getBalanceNode(): any;
    setStayDays(aStayDays: number): void;
    getStayDays(): any;
    /**
     * True once the booking's actual FROM_DATE lands after the loaded calendar window's nominal
     * start date - i.e. this is a "normal" booking, not one that continues in from before the
     * visible range. Drives both the skewed/continuation visual (render()) and the half-cell
     * position adjustment (getPosition()), computed once so both stay in sync.
     */
    private startsAfterWindowOpen;
    getPosition(): {
        top: string;
        left: string;
        width: string;
        height: string;
    };
    getNumber(aData: any): number;
    /**
     * Pointer coordinates for a mouse, pointer or touch event, in viewport space.
     * Touch events carry no `clientX`/`clientY` of their own - they live on the first touch point.
     */
    private getPointerPosition;
    startDragging(event: any, side: string): any;
    /**
     * Arms edge auto-scrolling for the drag that just started.
     *
     * A `move` drag can travel on both axes, so it scrolls on both. A stretch only ever changes the
     * bar's width, so vertical scrolling there would move the grid for no reason - horizontal only.
     *
     * The `scroll` listener covers scrolling this component didn't cause (a mouse wheel, a trackpad
     * swipe): the bar's position is derived from viewport-space pointer deltas, so it has to be
     * re-applied whenever the content underneath it moves, not only when the pointer moves.
     */
    private beginAutoScroll;
    /**
     * How far auto-scroll may travel, in the scroll container's own coordinates.
     *
     * Deliberately *not* the container's own `scrollHeight`/`scrollWidth`: this bar is an absolutely
     * positioned descendant of that container, so following the pointer past the last room row
     * extends the container's scrollable overflow by exactly as much as it just scrolled, and the
     * drag would chase its own tail off the end of the grid. The room rows are the real limit - they
     * are also the only thing a booking can be dropped on - and they don't move mid-drag.
     *
     * Positions are expressed as `elementEdge - containerEdge + scrollPosition`, which is invariant
     * under scrolling and therefore direction-agnostic: it yields the usual `0 .. max` range in LTR
     * and the mirrored `-max .. 0` range RTL containers report.
     */
    private getGridScrollBounds;
    /**
     * Records where every room row starts and ends, so a move drag can snap onto one.
     *
     * Same selector and same coordinate space as the drop-target bounds `igloo-calendar` measures
     * (`offsetTop` inside `.bodyContainer`), so the row the bar snaps to is by construction the row
     * the drop resolves to - the bar can never come to rest looking like it is over one row while
     * releasing into another.
     */
    private captureRowBands;
    /**
     * Snaps a dropped bar's top onto the centre of the room row it came to rest over.
     *
     * The bar's own middle picks the row, so it belongs to whichever row it is more than half way
     * into - and the nearest row wins outright when that middle is over a category header or past
     * the end of the list, which keeps the bar on a droppable row instead of between two.
     */
    private snapTopToRow;
    /**
     * Settles a just-dropped bar onto the grid: centred in the room row it was released over, and
     * half a day cell in from that day's column edge, which is where a booking starting there rests.
     *
     * The settled position is written back to `dragEndPos` as well as to the element, so the drop
     * resolves to the cell the bar visibly landed on rather than to the raw pointer position - the
     * two disagree within a few pixels either side of a day boundary.
     */
    private settleToGrid;
    /** Snaps a dropped bar's physical left onto the day a booking released there would start on. */
    private snapLeftToDay;
    /** Disarms auto-scrolling. Safe to call when no drag is in progress. */
    private endAutoScroll;
    private handleHostScroll;
    handleMouseMove(event: any): void;
    /**
     * Positions the bar (and, for a move, reports the drop target) from the last known pointer
     * position. Called both on pointer movement and on every frame the calendar auto-scrolls, since
     * a pointer parked in the edge hot zone keeps the grid moving without firing another `mousemove`.
     */
    private applyDragPosition;
    handleMouseUp(): void;
    updateData(data: any): void;
    private calculateHoverPosition;
    renderEventBookingNumber(): string;
    showEventInfo(showInfo: any): any;
    private isDepartureAfterHotelCheckout;
    private computeSplitRole;
    render(): any;
}

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
    /**
     * Every booking on the calendar, read only when a drop has to be checked for overlaps.
     * A getter rather than the array itself, so that updating one booking does not hand every bar a
     * new prop value and re-render them all.
     */
    getAllBookingEvents: () => {
        [key: string]: any;
    }[];
    countries: ICountry[];
    roomTop: number;
    dragOverEventData: EventEmitter;
    showRoomNightsDialog: EventEmitter<IRoomNightsData>;
    showDialog: EventEmitter<CalendarModalEvent>;
    updateBookingEvent: EventEmitter<{
        [key: string]: any;
    }>;
    showInfoPopup: boolean;
    /**
     * The bubble is shown in a dialog, not a popup. Chosen as it opens, so turning the phone doesn't
     * swap the panel out from under the user, and kept until the dialog has finished animating closed.
     */
    infoInDialog: boolean;
    private eventSpace;
    private eventsService;
    private bookingService;
    private gesture;
    /** Taps and Enter/Space presses asking to toggle the info bubble; see `connectedCallback`. */
    private tapToggles$;
    private keyToggles$;
    private toggleSubscription;
    /** The drag that produced the drop the calendar is about to answer with `moveBookingTo`. */
    private lastGesture;
    private autoOpenTimer;
    private autoScroller;
    private scrollHost;
    /**
     * Room row extents captured when a move drag starts, in the same `.bodyContainer` grid space the
     * bar positions itself in, and used to settle it on release.
     */
    private dragRowBands;
    /** When the stay itself changes, put the bar where the new data says it belongs. */
    handleBookingEventChange(newValue: {
        [key: string]: any;
    }, oldValue: {
        [key: string]: any;
    }): void;
    /** How the shared registry reaches this bar; see bar-registry.ts. */
    private registration;
    /** How the label tracker reads where this bar is drawn; see bar-label.ts. */
    private titleElement;
    /**
     * Where the bar is currently drawn, cached so the label tracker can read 1,000 bars per scroll
     * frame without touching the DOM. Refreshed whenever the bar's position is written.
     */
    private displayed;
    private syncDisplayed;
    private label;
    /**
     * The info popup's anchor: this bar, measured as its visible part (see bar-popup.ts). Created
     * once, so the popup never re-anchors on a re-render.
     */
    private popupAnchor;
    private getScroller;
    private popupElement;
    /** The scroll container the open popup is following; see `BarAnchor` for why the bar does this. */
    private followedScroller;
    private repositionPopup;
    /**
     * How far the popup must keep from each edge of the scroll container: the sticky header, footer and
     * room-name column, so it stays over the visible grid. Measured when it opens (they don't move).
     */
    private popupPadding;
    private measureGridView;
    private followScroll;
    /** The popup moved (the calendar scrolled or resized): once its bar is entirely out of view, close it. */
    private handlePopupReposition;
    connectedCallback(): void;
    componentDidRender(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    /** The bubble inside this bar asked to be closed (it bubbles up from igl-booking-event-hover). */
    handleHideBubbleInfo(event: CustomEvent): void;
    /** The calendar has resolved where this bar's drop landed; confirm it, or put the bar back. */
    private handleMoveBookingTo;
    /** Dialog fields for a move, or a shrink, that the user has to confirm. */
    private getReallocationDialog;
    private fetchAndAssignBookingData;
    private findRoomType;
    private getModalDescription;
    /** Puts the bar back exactly where its booking data says it belongs. */
    private resetToDataPosition;
    private checkIfSlotOccupied;
    private isNewEvent;
    private isHighlightEventType;
    private getBookingId;
    private getBookedRoomId;
    /**
     * The bar continues in from before the loaded window: its stay began before FROM_DATE (clamped to the window).
     * Drives both the skewed/continuation visual and the half-cell position adjustment.
     * Dates are `YYYY-MM-DD`, so string order is date order.
     */
    private isSkewedStart;
    /** The bar continues past the loaded window: its stay ends after TO_DATE (clamped to the window). */
    private isSkewedEnd;
    private getLegendOfStatus;
    private getEventLegend;
    private getPosition;
    /** Physical geometry the booking's data puts the bar at, in `.bodyContainer` grid pixels. */
    private getGeometry;
    /**
     * Pointer travel, in px, before a press becomes a drag. Below it the press is a tap - which also
     * absorbs the few pixels a finger or a trackpad click wobbles by.
     */
    private static readonly DRAG_THRESHOLD;
    private onPointerDown;
    /** Escape abandons a drag wherever focus happens to be. */
    private onGestureKeyDown;
    /** The browser took the pointer away (a system gesture, the window losing focus): undo, don't drop. */
    private onPointerCancel;
    /** Abandons the current gesture: the bar goes back to where its data puts it and nothing is dropped. */
    private cancelGesture;
    private onPointerMove;
    private onPointerUp;
    /**
     * Closes the bubble if it is open - no request - otherwise opens it. Returns what is still pending,
     * which is what `exhaustMap` waits on before it lets another toggle through.
     */
    private toggleInfo;
    /** Enter/Space opens the bubble, the way a tap does; Escape closes it from anywhere inside the bar. */
    private onKeyDown;
    /** Opens the info bubble, fetching the full booking first when its status needs it. Settles once open (or failed). */
    private openInfo;
    /** The press has travelled far enough to be a drag: lift the bar and tell the calendar. */
    private beginDrag;
    /** Releases everything a gesture holds. Safe to call when no gesture is active. */
    private endGesture;
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
     * the drop resolves to.
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
    /** Snaps a dropped bar's physical left onto the day a booking released there would start on. */
    private snapLeftToDay;
    /** Disarms auto-scrolling. Safe to call when no drag is in progress. */
    private endAutoScroll;
    private handleHostScroll;
    /**
     * Positions the bar (and, for a move, reports the drop target) from the last known pointer
     * position. Called both on pointer movement and on every frame the calendar auto-scrolls, since
     * a pointer parked in the edge hot zone keeps the grid moving without firing another move event.
     *
     * A move rides on `transform` so following the pointer never triggers layout; only the drop
     * commits a real `top`/`left`.
     */
    private applyDragPosition;
    /** Settles a stretched bar on whole nights and reports the new length, or springs it back if unchanged. */
    private dropStretch;
    /** Settles a moved bar onto the grid cell it was released over and reports the drop. */
    private dropMove;
    private renderEventBookingNumber;
    /** What a screen reader announces for the bar: who, which booking, and the stay. */
    private getAccessibleName;
    private showEventInfo;
    private getInfoDialogLabel;
    private handleInfoDialogClosed;
    /** True when the guest leaves later than the property's configured check-out time. */
    private isDepartureAfterHotelCheckout;
    /** An OTA reservation's dates belong to the channel: it can be shortened here, never lengthened. */
    private canGrow;
    private computeSplitRole;
    render(): any;
}

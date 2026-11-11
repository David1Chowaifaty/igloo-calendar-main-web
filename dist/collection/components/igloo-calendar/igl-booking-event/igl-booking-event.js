import { Host, h } from "@stencil/core";
import { BookingService } from "../../../services/booking-service/booking.service";
import { buildSplitIndex, calculateDaysBetweenDates, getSplitRole, transformNewBooking } from "../../../utils/booking";
import { checkMealPlan, formatAmount, isBlockUnit, showToast } from "../../../utils/utils";
import moment from "moment";
import { EMPTY, exhaustMap, from, merge, Subject, throttleTime } from "rxjs";
import { addDaysISO } from "../../../utils/calendar-dates";
import { EventsService } from "../../../services/events.service";
import locales from "../../../stores/locales.store";
import calendar_dates from "../../../stores/calendar-dates.store";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
import { CELL_WIDTH, computeEventHorizontalGeometry, EVENT_HEIGHT, EVENT_SPACE, getEventTopWithinRow, getTotalGridWidth, isRtlDirection, ROOM_HEADER_WIDTH, snapEventLeft, toPhysicalLeft, } from "../../../utils/calendar-grid";
import { DragAutoScroller } from "../../../utils/drag-autoscroll";
import { formatBookingNumber } from "../../../utils/number";
import { LocaleController } from "../../../services/locale/locale.controller";
import { getHandleReach, nightsFromWidth, resolveResize } from "./booking-drag";
import { refreshLabel, trackLabel, untrackLabel } from "./bar-label";
import { clientBox, createBarAnchor, insetsWithin, isCompactViewport, measureGridView } from "./bar-popup";
import { claimInfoBubble, closeOpenInfoBubble, registerBar, releaseInfoBubble, unregisterBar } from "./bar-registry";
/**
 * Taps on the bar closer together than this count once: a double-click, or an impatient re-click,
 * must not toggle the bubble twice.
 */
const TAP_BURST_MS = 300;
/** Statuses whose info bubble needs the full booking fetched before it can open. */
const FETCHED_STATUSES = ['IN-HOUSE', 'CONFIRMED', 'PENDING-CONFIRMATION', 'CHECKED-OUT'];
export class IglBookingEvent {
    element;
    currency;
    is_vacation_rental = false;
    language;
    bookingEvent;
    /**
     * Every booking on the calendar, read only when a drop has to be checked for overlaps.
     * A getter rather than the array itself, so that updating one booking does not hand every bar a
     * new prop value and re-render them all.
     */
    getAllBookingEvents;
    countries;
    roomTop;
    dragOverEventData;
    showRoomNightsDialog;
    showDialog;
    updateBookingEvent;
    showInfoPopup = false;
    /**
     * The bubble is shown in a dialog, not a popup. Chosen as it opens, so turning the phone doesn't
     * swap the panel out from under the user, and kept until the dialog has finished animating closed.
     */
    infoInDialog = false;
    eventSpace = EVENT_SPACE;
    eventsService = new EventsService();
    bookingService = new BookingService();
    gesture = null;
    /** Taps and Enter/Space presses asking to toggle the info bubble; see `connectedCallback`. */
    tapToggles$ = new Subject();
    keyToggles$ = new Subject();
    toggleSubscription = null;
    /** The drag that produced the drop the calendar is about to answer with `moveBookingTo`. */
    lastGesture = null;
    autoOpenTimer = null;
    /* Auto-scroll: keeps the calendar moving while a drag or stretch is held near its edge. */
    autoScroller = null;
    scrollHost = null;
    /**
     * Room row extents captured when a move drag starts, in the same `.bodyContainer` grid space the
     * bar positions itself in, and used to settle it on release.
     */
    dragRowBands = [];
    /** When the stay itself changes, put the bar where the new data says it belongs. */
    handleBookingEventChange(newValue, oldValue) {
        if (!oldValue || this.isNewEvent() || this.gesture) {
            return;
        }
        const geometryChanged = ['FROM_DATE', 'TO_DATE', 'NO_OF_DAYS', 'PR_ID'].some(key => newValue[key] !== oldValue[key]);
        if (geometryChanged) {
            this.lastGesture = null;
            this.resetToDataPosition();
        }
    }
    /** How the shared registry reaches this bar; see bar-registry.ts. */
    registration = {
        element: null,
        bookingId: () => this.getBookingId(),
        pool: () => this.bookingEvent?.POOL,
        closeInfo: () => this.showEventInfo(false),
        onMoveBookingTo: event => this.handleMoveBookingTo(event),
        onRevertBooking: () => {
            this.lastGesture = null;
            this.resetToDataPosition();
        },
    };
    /** How the label tracker reads where this bar is drawn; see bar-label.ts. */
    titleElement = null;
    /**
     * Where the bar is currently drawn, cached so the label tracker can read 1,000 bars per scroll
     * frame without touching the DOM. Refreshed whenever the bar's position is written.
     */
    displayed = { top: 0, left: 0, width: 0 };
    syncDisplayed() {
        const style = this.element.style;
        this.displayed = { top: parseFloat(style.top) || 0, left: parseFloat(style.left) || 0, width: parseFloat(style.width) || 0 };
        refreshLabel(this.label);
    }
    label = {
        element: null,
        labelElement: () => this.titleElement,
        displayedGeometry: () => (this.gesture ? null : this.displayed),
    };
    /**
     * The info popup's anchor: this bar, measured as its visible part (see bar-popup.ts). Created
     * once, so the popup never re-anchors on a re-render.
     */
    popupAnchor = null;
    getScroller() {
        return this.element.closest('.calendarScrollContainer');
    }
    popupElement = null;
    /** The scroll container the open popup is following; see `BarAnchor` for why the bar does this. */
    followedScroller = null;
    repositionPopup = () => this.popupElement?.reposition?.();
    /**
     * How far the popup must keep from each edge of the scroll container: the sticky header, footer and
     * room-name column, so it stays over the visible grid. Measured when it opens (they don't move).
     */
    popupPadding = 8;
    measureGridView(scroller) {
        return measureGridView(scroller, ROOM_HEADER_WIDTH, isRtlDirection(locales.direction));
    }
    followScroll(follow) {
        this.followedScroller?.removeEventListener('scroll', this.repositionPopup);
        this.followedScroller = follow ? this.getScroller() : null;
        this.followedScroller?.addEventListener('scroll', this.repositionPopup, { passive: true });
    }
    /** The popup moved (the calendar scrolled or resized): once its bar is entirely out of view, close it. */
    handlePopupReposition = (event) => {
        // wa-reposition bubbles and is composed, so the selects, dropdowns and tooltips inside the bubble
        // (each built on its own wa-popup) report here too. Only this popup's own moves count.
        if (event.target !== event.currentTarget) {
            return;
        }
        if (this.showInfoPopup && this.popupAnchor && !this.popupAnchor.isVisible()) {
            this.showEventInfo(false);
        }
    };
    connectedCallback() {
        // One pipeline for every request to toggle the bubble:
        //  - throttleTime: the first tap of a burst acts at once; the rest of the burst is ignored.
        //    (Keys skip it - their auto-repeat is filtered at the source.)
        //  - exhaustMap: while a toggle is still opening (fetching the booking), further toggles are
        //    dropped, so a bar never has more than one getExposedBooking request in flight.
        this.toggleSubscription?.unsubscribe();
        this.toggleSubscription = merge(this.tapToggles$.pipe(throttleTime(TAP_BURST_MS)), this.keyToggles$)
            .pipe(exhaustMap(() => this.toggleInfo()))
            .subscribe();
        this.registration.element = this.element;
        this.label.element = this.element;
        this.popupAnchor ??= createBarAnchor(this.element, () => {
            const scroller = this.getScroller();
            return scroller ? this.measureGridView(scroller) : null;
        });
        registerBar(this.registration);
        trackLabel(this.label, ROOM_HEADER_WIDTH, () => isRtlDirection(locales.direction));
    }
    componentDidRender() {
        this.syncDisplayed();
    }
    componentDidLoad() {
        if (this.isNewEvent() && !this.bookingEvent.hideBubble) {
            // Opened on the next task, so the click that created the bar has finished propagating first.
            this.autoOpenTimer = setTimeout(() => {
                this.autoOpenTimer = null;
                this.openInfo();
            }, 1);
        }
    }
    disconnectedCallback() {
        if (this.autoOpenTimer) {
            clearTimeout(this.autoOpenTimer);
            this.autoOpenTimer = null;
        }
        this.endGesture();
        this.toggleSubscription?.unsubscribe();
        this.toggleSubscription = null;
        this.followScroll(false);
        unregisterBar(this.registration);
        untrackLabel(this.label);
    }
    /** The bubble inside this bar asked to be closed (it bubbles up from igl-booking-event-hover). */
    handleHideBubbleInfo(event) {
        if (event.detail?.key === 'hidebubble') {
            this.showEventInfo(false);
        }
    }
    /** The calendar has resolved where this bar's drop landed; confirm it, or put the bar back. */
    async handleMoveBookingTo(event) {
        const detail = event.detail;
        const gesture = this.lastGesture;
        this.lastGesture = null;
        try {
            if (!gesture || detail.moveToDay === 'revert' || detail.toRoomId === 'revert') {
                this.resetToDataPosition();
                return;
            }
            const { pool, to_date, from_date, toRoomId } = detail;
            if (gesture.kind === 'move' && String(toRoomId) === String(this.bookingEvent.PR_ID) && from_date === this.bookingEvent.FROM_DATE) {
                // Released back on its own cell: nothing changed, so there is nothing to confirm.
                this.resetToDataPosition();
                return;
            }
            if (this.checkIfSlotOccupied(toRoomId, from_date, to_date)) {
                this.resetToDataPosition();
                throw new Error(t('Lcz_OverlappingDates', { fallback: 'Overlapping Dates' }));
            }
            if (!pool) {
                return;
            }
            if (isBlockUnit(this.bookingEvent.STATUS_CODE)) {
                await this.eventsService.reallocateEvent(pool, toRoomId, from_date, to_date).catch(() => this.resetToDataPosition());
                return;
            }
            if (gesture.kind === 'move' || gesture.shrinking) {
                this.showDialog.emit({ reason: 'reallocate', ...detail, ...this.getReallocationDialog(toRoomId, from_date, to_date, gesture.shrinking) });
                return;
            }
            const payload = {
                booking: this.bookingEvent,
                bookingNumber: this.bookingEvent.BOOKING_NUMBER,
                identifier: this.bookingEvent.IDENTIFIER,
                to_date,
                pool,
                from_date,
                defaultDates: this.bookingEvent.defaultDates,
            };
            if (!this.bookingEvent.is_direct) {
                this.showDialog.emit({ reason: 'stretch', ...payload });
            }
            else {
                this.showRoomNightsDialog.emit(payload);
            }
        }
        catch (error) {
            showToast({ title: error.message, description: '', type: 'error' });
        }
    }
    /** Dialog fields for a move, or a shrink, that the user has to confirm. */
    getReallocationDialog(toRoomId, from_date, to_date, shrinking) {
        const { description, status, newRatePlans, matchedRatePlan } = this.getModalDescription(toRoomId, from_date, to_date, shrinking);
        const oldFromDate = this.bookingEvent.defaultDates.from_date;
        const oldToDate = this.bookingEvent.defaultDates.to_date;
        const diffDays = calculateDaysBetweenDates(oldFromDate, oldToDate);
        let fromDate = oldFromDate;
        let toDate = oldToDate;
        if (shrinking) {
            if (from_date > oldFromDate && to_date < oldToDate) {
                toDate = to_date;
            }
            else if (from_date > oldFromDate) {
                fromDate = from_date;
            }
            else if (to_date < oldToDate) {
                toDate = to_date;
            }
        }
        else if (from_date < oldFromDate) {
            fromDate = from_date;
            const newToDate = addDaysISO(from_date, diffDays);
            toDate = newToDate < to_date ? to_date : newToDate;
        }
        else if (to_date > oldToDate) {
            toDate = to_date;
            fromDate = addDaysISO(to_date, -diffDays);
        }
        return {
            description,
            title: '',
            rateplans: newRatePlans,
            matchedRatePlan,
            hideConfirmButton: status === '400',
            from_date: fromDate,
            to_date: toDate,
        };
    }
    async fetchAndAssignBookingData() {
        try {
            if (!FETCHED_STATUSES.includes(this.bookingEvent.STATUS)) {
                return;
            }
            const data = await this.bookingService.getExposedBooking({ booking_nbr: this.bookingEvent.BOOKING_NUMBER, language: LocaleController.language });
            const base_booking = { ...data };
            const filteredRooms = data.rooms.filter(room => room['assigned_units_pool'] === this.bookingEvent.ID);
            if (filteredRooms.length === 0) {
                throw new Error(`booking#${this.bookingEvent.BOOKING_NUMBER} has an empty array`);
            }
            if (filteredRooms.some(room => room['assigned_units_pool'] === null)) {
                throw new Error(`booking#${this.bookingEvent.BOOKING_NUMBER} has an empty pool`);
            }
            data.rooms = filteredRooms;
            const transformedBooking = transformNewBooking(data)[0];
            const { ID, TO_DATE, FROM_DATE, NO_OF_DAYS, STATUS, NAME, IDENTIFIER, origin, TOTAL_PRICE, PR_ID, POOL, BOOKING_NUMBER, NOTES, is_direct, BALANCE, channel_booking_nbr, ...otherBookingData } = transformedBooking;
            this.bookingEvent = {
                ...otherBookingData,
                ...this.bookingEvent,
                channel_booking_nbr,
                booking: data,
                base_booking,
                DEPARTURE_TIME: otherBookingData.DEPARTURE_TIME,
                PHONE: otherBookingData.PHONE,
                PHONE_PREFIX: otherBookingData.PHONE_PREFIX,
                PRIVATE_NOTE: otherBookingData.PRIVATE_NOTE,
                origin,
                BALANCE,
                TOTAL_PRICE,
                ROOM_INFO: { ...this.bookingEvent.ROOM_INFO, sharing_persons: otherBookingData.ROOM_INFO.sharing_persons },
            };
            this.updateBookingEvent.emit(this.bookingEvent);
            this.showEventInfo(true);
        }
        catch (error) {
            console.error(error.message);
        }
    }
    findRoomType(roomId) {
        return this.bookingEvent.roomsInfo?.find(room => room.physicalrooms.some(r => r.id === +roomId))?.id ?? null;
    }
    getModalDescription(toRoomId, from_date, to_date, shrinking) {
        const ratePlansFor = (targetRT) => {
            const mealPlans = checkMealPlan({
                rateplan_id: this.bookingEvent.RATE_PLAN_ID,
                roomTypeId: targetRT,
                roomTypes: calendar_data?.property?.roomtypes,
            });
            return { newRatePlans: Array.isArray(mealPlans) ? mealPlans : undefined, matchedRatePlan: Array.isArray(mealPlans) ? null : mealPlans };
        };
        if (!this.bookingEvent.is_direct) {
            if (shrinking) {
                return { description: t('Lcz_OTA_Modification_Alter'), status: '200' };
            }
            if (from_date === this.bookingEvent.FROM_DATE && to_date === this.bookingEvent.TO_DATE) {
                const targetRT = this.findRoomType(toRoomId);
                if (this.findRoomType(this.bookingEvent.PR_ID) === targetRT) {
                    return { description: `${t('Lcz_AreYouSureWantToMoveAnotherUnit')}?`, status: '200' };
                }
                return { description: t('Lcz_OTA_Modification_Alter'), status: '200', ...ratePlansFor(targetRT) };
            }
            return { description: t('Lcz_CannotChangeCHBookings') + '.', status: '400' };
        }
        if (shrinking) {
            return { description: t('Lcz_ConfrmModiication') + '.', status: '200' };
        }
        const targetRT = this.findRoomType(Number(toRoomId));
        if (this.findRoomType(Number(this.bookingEvent.PR_ID)) !== targetRT) {
            return { description: t('Lcz_SameRatesWillBeKept'), status: '200', ...ratePlansFor(targetRT) };
        }
        if (this.bookingEvent.PR_ID.toString() === toRoomId.toString()) {
            return { description: t('Lcz_ConfrmModiication') + '.', status: '200' };
        }
        return { description: `${t('Lcz_AreYouSureWantToMoveAnotherUnit')}?`, status: '200' };
    }
    /** Puts the bar back exactly where its booking data says it belongs. */
    resetToDataPosition() {
        const { top, left, width } = this.getPosition();
        const style = this.element.style;
        style.transform = '';
        style.top = top;
        style.left = left;
        style.width = width;
        this.syncDisplayed();
    }
    checkIfSlotOccupied(toRoomId, from_date, to_date) {
        const all = this.getAllBookingEvents?.() ?? [];
        return all.some(event => event.ID !== 'NEW_TEMP_EVENT' &&
            event.POOL !== this.bookingEvent.POOL &&
            event.PR_ID === +toRoomId &&
            to_date >= addDaysISO(event.FROM_DATE, 1) &&
            from_date < event.TO_DATE);
    }
    isNewEvent() {
        return this.getBookingId() === 'NEW_TEMP_EVENT';
    }
    isHighlightEventType() {
        return this.bookingEvent.event_type === 'HIGH_LIGHT';
    }
    getBookingId() {
        return this.bookingEvent.ID;
    }
    getBookedRoomId() {
        return this.bookingEvent.PR_ID;
    }
    /**
     * The bar continues in from before the loaded window: its stay began before FROM_DATE (clamped to the window).
     * Drives both the skewed/continuation visual and the half-cell position adjustment.
     * Dates are `YYYY-MM-DD`, so string order is date order.
     */
    isSkewedStart() {
        return !this.isNewEvent() && !!this.bookingEvent.defaultDates && this.bookingEvent.defaultDates.from_date < this.bookingEvent.FROM_DATE;
    }
    /** The bar continues past the loaded window: its stay ends after TO_DATE (clamped to the window). */
    isSkewedEnd() {
        return !this.isNewEvent() && !!this.bookingEvent.defaultDates && this.bookingEvent.defaultDates.to_date > this.bookingEvent.TO_DATE;
    }
    getLegendOfStatus(statusKey) {
        const legendData = this.bookingEvent?.legendData;
        const status = legendData?.statusId?.[statusKey];
        if (!status) {
            return { color: undefined, clsName: '' };
        }
        return { ...legendData[status.id], ...status };
    }
    getEventLegend() {
        const legend = this.getLegendOfStatus(this.bookingEvent.STATUS);
        return this.isNewEvent() ? { ...legend, color: '#f9f9c9' } : legend;
    }
    getPosition() {
        const pos = { top: '0px', left: '0px', width: '0px', height: `${EVENT_HEIGHT}px` };
        if (typeof this.roomTop !== 'number') {
            return pos;
        }
        pos.top = `${this.roomTop + getEventTopWithinRow()}px`;
        const days = calendar_dates.days;
        const { left: logicalLeft, width } = computeEventHorizontalGeometry({
            days,
            fromDate: this.bookingEvent.FROM_DATE,
            stayDays: this.bookingEvent.NO_OF_DAYS,
            startsAfterWindowOpen: this.isSkewedStart(),
            eventSpace: this.eventSpace,
        });
        const totalGridWidth = getTotalGridWidth(days.length);
        pos.left = `${toPhysicalLeft(logicalLeft, width, isRtlDirection(locales.direction), totalGridWidth)}px`;
        pos.width = `${width}px`;
        return pos;
    }
    /** Physical geometry the booking's data puts the bar at, in `.bodyContainer` grid pixels. */
    getGeometry() {
        const pos = this.getPosition();
        return { top: parseFloat(pos.top), left: parseFloat(pos.left), width: parseFloat(pos.width) };
    }
    /**
     * Pointer travel, in px, before a press becomes a drag. Below it the press is a tap - which also
     * absorbs the few pixels a finger or a trackpad click wobbles by.
     */
    static DRAG_THRESHOLD = 5;
    onPointerDown = (event) => {
        if (this.gesture || this.isNewEvent() || this.isHighlightEventType()) {
            return;
        }
        // Only the primary button drags. Ctrl+click is the macOS secondary click, so it opens a context menu too.
        if (event.button !== 0 || (event.pointerType === 'mouse' && event.ctrlKey)) {
            return;
        }
        // The info bubble renders inside the bar; presses in it belong to its own inputs and buttons, and
        // a press on the dialog's backdrop or close button reaches the bar retargeted to ir-dialog.
        if (event.target?.closest?.('igl-booking-event-hover, ir-dialog')) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        const handle = event.target?.closest?.('[data-handle]');
        const side = handle?.getAttribute('data-handle');
        this.gesture = {
            kind: side ? 'stretch' : 'move',
            side,
            pointerId: event.pointerId,
            startX: event.clientX,
            startY: event.clientY,
            lastX: event.clientX,
            lastY: event.clientY,
            started: false,
            origin: this.getGeometry(),
            current: this.getGeometry(),
            shrinking: false,
            applied: null,
        };
        window.addEventListener('pointermove', this.onPointerMove);
        window.addEventListener('pointerup', this.onPointerUp);
        window.addEventListener('pointercancel', this.onPointerCancel);
        window.addEventListener('keydown', this.onGestureKeyDown, true);
    };
    /** Escape abandons a drag wherever focus happens to be. */
    onGestureKeyDown = (event) => {
        if (event.key === 'Escape' && this.gesture) {
            event.preventDefault();
            event.stopPropagation();
            this.cancelGesture();
        }
    };
    /** The browser took the pointer away (a system gesture, the window losing focus): undo, don't drop. */
    onPointerCancel = (event) => {
        if (this.gesture && event.pointerId === this.gesture.pointerId) {
            this.cancelGesture();
        }
    };
    /** Abandons the current gesture: the bar goes back to where its data puts it and nothing is dropped. */
    cancelGesture() {
        const wasDragging = this.gesture?.started;
        this.endGesture();
        if (wasDragging) {
            this.resetToDataPosition();
            this.dragOverEventData.emit({ id: 'DRAG_CANCEL', data: null });
        }
    }
    onPointerMove = (event) => {
        const g = this.gesture;
        if (!g || event.pointerId !== g.pointerId) {
            return;
        }
        g.lastX = event.clientX;
        g.lastY = event.clientY;
        if (!g.started) {
            if (Math.abs(g.lastX - g.startX) <= IglBookingEvent.DRAG_THRESHOLD && Math.abs(g.lastY - g.startY) <= IglBookingEvent.DRAG_THRESHOLD) {
                return;
            }
            this.beginDrag();
        }
        this.autoScroller?.update(g.lastX, g.lastY);
        this.applyDragPosition();
    };
    onPointerUp = (event) => {
        const g = this.gesture;
        if (!g || event.pointerId !== g.pointerId) {
            return;
        }
        const isTap = !g.started;
        if (g.started) {
            g.kind === 'move' ? this.dropMove() : this.dropStretch();
        }
        this.endGesture();
        if (isTap) {
            this.tapToggles$.next();
        }
    };
    /**
     * Closes the bubble if it is open - no request - otherwise opens it. Returns what is still pending,
     * which is what `exhaustMap` waits on before it lets another toggle through.
     */
    toggleInfo() {
        if (this.showInfoPopup) {
            this.showEventInfo(false);
            return EMPTY;
        }
        return from(this.openInfo());
    }
    /** Enter/Space opens the bubble, the way a tap does; Escape closes it from anywhere inside the bar. */
    onKeyDown = (event) => {
        if (event.key === 'Escape') {
            if (this.showInfoPopup) {
                event.stopPropagation();
                this.showEventInfo(false);
                this.element.focus?.();
            }
            return;
        }
        // Only the bar itself: Enter on a button inside the open bubble belongs to that button.
        if ((event.key === 'Enter' || event.key === ' ') && event.target === this.element && !this.isHighlightEventType()) {
            event.preventDefault();
            if (!event.repeat) {
                this.keyToggles$.next();
            }
        }
    };
    /** Opens the info bubble, fetching the full booking first when its status needs it. Settles once open (or failed). */
    async openInfo() {
        if (!isBlockUnit(this.bookingEvent.STATUS_CODE) && FETCHED_STATUSES.includes(this.bookingEvent.STATUS)) {
            await this.fetchAndAssignBookingData();
        }
        else {
            this.showEventInfo(true);
        }
    }
    /** The press has travelled far enough to be a drag: lift the bar and tell the calendar. */
    beginDrag() {
        const g = this.gesture;
        g.started = true;
        // Keeps the pointer's events coming to this bar even over an iframe or outside the window, so the
        // release is never lost. Taken only once dragging, so a tap's click still lands where it was aimed.
        try {
            this.element.setPointerCapture?.(g.pointerId);
        }
        catch {
            // The pointer is already gone; pointercancel/pointerup will end the gesture.
        }
        closeOpenInfoBubble(this.registration);
        this.element.classList.add('is-dragging');
        if (g.kind === 'move') {
            this.captureRowBands();
        }
        const { top, left, width } = g.origin;
        this.dragOverEventData.emit({
            id: 'CALCULATE_DRAG_OVER_BOUNDS',
            data: { id: this.getBookingId(), fromRoomId: this.getBookedRoomId(), top, left, x: left, y: top, width },
        });
        this.beginAutoScroll(g.kind, g.startX, g.startY);
    }
    /** Releases everything a gesture holds. Safe to call when no gesture is active. */
    endGesture() {
        if (this.gesture && this.element.hasPointerCapture?.(this.gesture.pointerId)) {
            this.element.releasePointerCapture(this.gesture.pointerId);
        }
        window.removeEventListener('pointermove', this.onPointerMove);
        window.removeEventListener('pointerup', this.onPointerUp);
        window.removeEventListener('pointercancel', this.onPointerCancel);
        window.removeEventListener('keydown', this.onGestureKeyDown, true);
        this.endAutoScroll();
        this.element.classList.remove('is-dragging');
        this.gesture = null;
        this.syncDisplayed();
    }
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
    beginAutoScroll(kind, clientX, clientY) {
        this.scrollHost = this.element.closest('.calendarScrollContainer');
        if (!this.scrollHost) {
            return;
        }
        this.autoScroller = new DragAutoScroller({
            container: this.scrollHost,
            axes: { x: true, y: kind === 'move' },
            // The room-name column is sticky against the inline start edge, which bidi-mirrors to the
            // physical right in RTL. Skip it, so the hot zone starts at the edge of the scrollable grid
            // rather than underneath a column that never moves.
            inlineStartInset: ROOM_HEADER_WIDTH,
            inlineStartEdge: isRtlDirection(locales.direction) ? 'right' : 'left',
            getBounds: () => this.getGridScrollBounds(),
            onScroll: () => this.applyDragPosition(),
        });
        this.autoScroller.start();
        this.autoScroller.update(clientX, clientY);
        this.scrollHost.addEventListener('scroll', this.handleHostScroll, { passive: true });
    }
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
    getGridScrollBounds() {
        const rows = this.scrollHost?.querySelectorAll('.bodyContainer .roomRow');
        if (!rows?.length) {
            return {};
        }
        const containerRect = this.scrollHost.getBoundingClientRect();
        const { scrollLeft, scrollTop, clientWidth, clientHeight } = this.scrollHost;
        // Every row spans the full grid width (`.roomRow { width: max-content }`), so the first one
        // gives the horizontal extent; the last one gives the vertical extent.
        const firstRow = rows[0].getBoundingClientRect();
        const lastRow = rows[rows.length - 1].getBoundingClientRect();
        return {
            x: [firstRow.left - containerRect.left + scrollLeft, firstRow.right - containerRect.left + scrollLeft - clientWidth],
            y: [0, lastRow.bottom - containerRect.top + scrollTop - clientHeight],
        };
    }
    /**
     * Records where every room row starts and ends, so a move drag can snap onto one.
     *
     * Same selector and same coordinate space as the drop-target bounds `igloo-calendar` measures
     * (`offsetTop` inside `.bodyContainer`), so the row the bar snaps to is by construction the row
     * the drop resolves to.
     */
    captureRowBands() {
        const rows = document.querySelectorAll('.bodyContainer .roomRow .roomTitle[data-room]');
        this.dragRowBands = Array.from(rows).map(row => ({ top: row.offsetTop, height: row.offsetHeight }));
    }
    /**
     * Snaps a dropped bar's top onto the centre of the room row it came to rest over.
     *
     * The bar's own middle picks the row, so it belongs to whichever row it is more than half way
     * into - and the nearest row wins outright when that middle is over a category header or past
     * the end of the list, which keeps the bar on a droppable row instead of between two.
     */
    snapTopToRow(rawTop) {
        if (!this.dragRowBands.length) {
            return rawTop;
        }
        const barMiddle = rawTop + EVENT_HEIGHT / 2;
        let closest = this.dragRowBands[0];
        let closestDistance = Infinity;
        for (const band of this.dragRowBands) {
            const distance = Math.max(band.top - barMiddle, barMiddle - (band.top + band.height), 0);
            if (distance < closestDistance) {
                closestDistance = distance;
                closest = band;
            }
            if (distance === 0) {
                break;
            }
        }
        return closest.top + getEventTopWithinRow(closest.height);
    }
    /** Snaps a dropped bar's physical left onto the day a booking released there would start on. */
    snapLeftToDay(rawLeft, width) {
        return snapEventLeft({
            physicalLeft: rawLeft,
            width,
            isRtl: isRtlDirection(locales.direction),
            totalGridWidth: getTotalGridWidth(calendar_dates.days.length),
            startsAfterWindowOpen: this.isSkewedStart(),
            eventSpace: this.eventSpace,
        });
    }
    /** Disarms auto-scrolling. Safe to call when no drag is in progress. */
    endAutoScroll() {
        this.autoScroller?.stop();
        this.autoScroller = null;
        this.scrollHost?.removeEventListener('scroll', this.handleHostScroll);
        this.scrollHost = null;
    }
    handleHostScroll = () => {
        if (this.gesture?.started) {
            this.applyDragPosition();
        }
    };
    /**
     * Positions the bar (and, for a move, reports the drop target) from the last known pointer
     * position. Called both on pointer movement and on every frame the calendar auto-scrolls, since
     * a pointer parked in the edge hot zone keeps the grid moving without firing another move event.
     *
     * A move rides on `transform` so following the pointer never triggers layout; only the drop
     * commits a real `top`/`left`.
     */
    applyDragPosition() {
        const g = this.gesture;
        if (!g?.started) {
            return;
        }
        // `top`/`left` are grid-space (relative to `.bodyContainer`) while pointer deltas are
        // viewport-space; folding the container's scroll travel back in keeps the two in step.
        const scrollOffset = this.autoScroller?.offset ?? { x: 0, y: 0 };
        const dx = g.lastX - g.startX + scrollOffset.x;
        const dy = g.lastY - g.startY + scrollOffset.y;
        // An auto-scrolled frame arrives twice - from the scroller and from the container's `scroll`.
        if (g.applied?.x === dx && g.applied?.y === dy) {
            return;
        }
        g.applied = { x: dx, y: dy };
        if (g.kind === 'move') {
            g.current = { ...g.origin, top: g.origin.top + dy, left: g.origin.left + dx };
            this.element.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
            const { top, left, width } = g.current;
            this.dragOverEventData.emit({ id: 'DRAG_OVER', data: { id: this.getBookingId(), fromRoomId: this.getBookedRoomId(), top, left, x: left, y: top, width } });
            return;
        }
        const resized = resolveResize({
            side: g.side,
            initialLeft: g.origin.left,
            initialWidth: g.origin.width,
            deltaX: dx,
            isRtl: isRtlDirection(locales.direction),
            canGrow: this.canGrow(),
            splitRole: this.computeSplitRole(),
        });
        if (!resized) {
            return;
        }
        g.current = { ...g.origin, left: resized.left, width: resized.width };
        g.shrinking = resized.shrinking;
        this.element.style.left = `${resized.left}px`;
        this.element.style.width = `${resized.width}px`;
    }
    /** Settles a stretched bar on whole nights and reports the new length, or springs it back if unchanged. */
    dropStretch() {
        const g = this.gesture;
        const startsAfterWindowOpen = this.isSkewedStart();
        const nights = nightsFromWidth(g.current.width, startsAfterWindowOpen);
        if (nights === this.bookingEvent.NO_OF_DAYS) {
            this.resetToDataPosition();
            return;
        }
        const width = nights * CELL_WIDTH - this.eventSpace + (startsAfterWindowOpen ? CELL_WIDTH / 2 : 0);
        // The handle that was not pulled stays put.
        const left = g.side === 'leftSide' ? g.origin.left + g.origin.width - width : g.origin.left;
        this.element.style.left = `${left}px`;
        this.element.style.width = `${width}px`;
        // Recorded before the emit: igloo-calendar answers with `moveBookingTo` inside this same call.
        this.lastGesture = { kind: 'stretch', shrinking: nights < this.bookingEvent.NO_OF_DAYS };
        this.dragOverEventData.emit({
            id: 'STRETCH_OVER_END',
            data: { id: this.getBookingId(), fromRoomId: +this.getBookedRoomId(), x: left, y: g.origin.top, width, pool: this.bookingEvent.POOL, nbOfDays: nights },
        });
    }
    /** Settles a moved bar onto the grid cell it was released over and reports the drop. */
    dropMove() {
        const g = this.gesture;
        const top = this.snapTopToRow(g.current.top);
        const left = this.snapLeftToDay(g.current.left, g.origin.width);
        this.element.style.transform = '';
        this.element.style.top = `${top}px`;
        this.element.style.left = `${left}px`;
        // Recorded before the emit: igloo-calendar answers with `moveBookingTo` inside this same call.
        this.lastGesture = { kind: 'move', shrinking: false };
        this.dragOverEventData.emit({
            id: 'DRAG_OVER_END',
            data: {
                id: this.getBookingId(),
                fromRoomId: this.getBookedRoomId(),
                top,
                left,
                x: left,
                y: top,
                width: g.origin.width,
                pool: this.bookingEvent.POOL,
                nbOfDays: this.bookingEvent.NO_OF_DAYS,
            },
        });
    }
    renderEventBookingNumber() {
        if (this.bookingEvent.STATUS === 'TEMP-EVENT' || this.isNewEvent() || isBlockUnit(this.bookingEvent.STATUS_CODE)) {
            return '';
        }
        return ` - ${formatBookingNumber(this.bookingEvent.is_direct ? this.bookingEvent.BOOKING_NUMBER : this.bookingEvent.channel_booking_nbr)}`;
    }
    /** What a screen reader announces for the bar: who, which booking, and the stay. */
    getAccessibleName() {
        const { NAME, defaultDates, FROM_DATE, TO_DATE } = this.bookingEvent;
        return `${NAME ?? ''}${this.renderEventBookingNumber()}, ${defaultDates?.from_date ?? FROM_DATE} – ${defaultDates?.to_date ?? TO_DATE}`;
    }
    showEventInfo(showInfo) {
        if (this.isHighlightEventType() || this.bookingEvent.hideBubble) {
            return;
        }
        if (showInfo) {
            this.infoInDialog = !this.isNewEvent() && isCompactViewport();
            const scroller = this.getScroller();
            this.popupPadding = scroller ? insetsWithin(clientBox(scroller), this.measureGridView(scroller), 8) : 8;
            claimInfoBubble(this.registration);
        }
        else {
            releaseInfoBubble(this.registration);
        }
        this.followScroll(showInfo && !this.infoInDialog);
        this.showInfoPopup = showInfo;
    }
    getInfoDialogLabel() {
        return isBlockUnit(this.bookingEvent.STATUS_CODE) ? t('Lcz_Blockdates', { fallback: 'Block dates' }) : this.bookingEvent.NAME;
    }
    handleInfoDialogClosed = () => {
        // A bar reopened during the closing animation is still using the dialog.
        if (!this.showInfoPopup) {
            this.infoInDialog = false;
        }
    };
    /** True when the guest leaves later than the property's configured check-out time. */
    isDepartureAfterHotelCheckout() {
        if (calendar_data.property?.is_automatic_check_in_out) {
            return false;
        }
        const departureTime = this.bookingEvent.DEPARTURE_TIME;
        if (!departureTime?.code) {
            return false;
        }
        const t1 = moment(calendar_data.property.time_constraints.check_out_till, 'HH:mm');
        const t2 = moment(departureTime.description, 'HH:mm');
        return t1.isBefore(t2);
    }
    /** An OTA reservation's dates belong to the channel: it can be shortened here, never lengthened. */
    canGrow() {
        return this.bookingEvent.is_direct || isBlockUnit(this.bookingEvent.STATUS_CODE);
    }
    computeSplitRole() {
        const splitIndex = buildSplitIndex(this.bookingEvent.ROOMS);
        return splitIndex ? (getSplitRole(splitIndex, this.bookingEvent.IDENTIFIER) ?? '') : '';
    }
    render() {
        const legend = this.getEventLegend();
        const noteNode = this.bookingEvent.NOTES || this.bookingEvent.INTERNAL_NOTE || this.bookingEvent.PRIVATE_NOTE ? this.getLegendOfStatus('NOTES') : null;
        const hasBalance = this.bookingEvent.BALANCE !== null && this.bookingEvent.BALANCE >= 1;
        const bookingId = this.getBookingId();
        const barId = `event_${bookingId}`;
        const lateCheckoutId = `event_late_checkout_${bookingId}`;
        const balanceId = `event_balance_${bookingId}`;
        let backgroundColor = this.bookingEvent.ROOM_INFO?.calendar_extra?.booking_color?.color ?? legend.color;
        const { foreground, stripe } = calendar_data.colorsForegrounds?.[backgroundColor] ?? { foreground: '', stripe: '' };
        if (this.bookingEvent.STATUS === 'CHECKED-OUT') {
            backgroundColor = legend.color;
        }
        const isDepartureAfterHotelCheckout = this.isDepartureAfterHotelCheckout();
        const splitRole = this.computeSplitRole();
        const pending = this.bookingEvent.STATUS === 'PENDING-CONFIRMATION' && !this.isNewEvent();
        const startsAfterWindowOpen = this.isSkewedStart();
        const endsBeforeWindowClose = this.isSkewedEnd();
        const isBlock = isBlockUnit(this.bookingEvent.STATUS_CODE);
        const skewClasses = { skewedLeft: startsAfterWindowOpen, skewedRight: endsBeforeWindowClose };
        const reachInput = { isRtl: isRtlDirection(locales.direction), canGrow: this.canGrow(), splitRole };
        const infoPanel = (h("igl-booking-event-hover", { key: '265f622a4b464756d29b27b0daa6b6b8e6d0b3ef', inDialog: this.infoInDialog, is_vacation_rental: this.is_vacation_rental, countries: this.countries, bookingEvent: this.bookingEvent }));
        return (h(Host, { key: '5363e4474e51c1fe8f631277e9f9dff8441d93f5', class: { bookingEvent: true, newEvent: this.isNewEvent() || this.isHighlightEventType(), [legend.clsName]: !!legend.clsName }, style: this.getPosition(), id: barId, dir: isRtlDirection(locales.direction) ? 'rtl' : 'ltr', tabindex: this.isHighlightEventType() ? undefined : '0', role: "button", "aria-label": this.getAccessibleName(), "aria-haspopup": "dialog", "aria-expanded": this.showInfoPopup ? 'true' : 'false', onPointerDown: this.onPointerDown, onKeyDown: this.onKeyDown }, h("div", { key: '8c68d8e94111dd3b31667cf233c1df5c306d6b59', "data-identifier": this.bookingEvent.IDENTIFIER, "data-status": this.bookingEvent.STATUS, class: {
                'bookingEventBase': true,
                pending,
                ...skewClasses,
                'striped-bar animated': isBlock && this.bookingEvent.STATUS_CODE === '003',
                'ota-booking-event': !this.bookingEvent.is_direct && !isBlock && this.bookingEvent.STATUS !== 'TEMP-EVENT' && !this.isNewEvent(),
                [splitRole]: !!splitRole,
            }, style: { 'backgroundColor': backgroundColor, '--ir-event-bg': backgroundColor, '--ir-event-bg-stripe-color': stripe } }), isDepartureAfterHotelCheckout && (h("wa-tooltip", { key: 'f1690c7a2a8208d054eccda9cdf6655df64cbb33', for: lateCheckoutId }, t('Lcz_DepartureTime', { fallback: 'Departure time:' }), " ", this.bookingEvent.DEPARTURE_TIME?.description)), hasBalance && (h("wa-tooltip", { key: '36db7e5d5992e6b1e7f880273e51fbd096efcf10', for: balanceId }, t('Lcz_Balance', { fallback: 'Balance' }) + ':', " ", formatAmount(calendar_data.property.currency.symbol, this.bookingEvent.BALANCE))), noteNode && h("div", { key: '3239447a702135d027f2ad31c0c2655b861d5bfd', class: "legend_circle noteIcon", style: { backgroundColor: noteNode.color } }), (hasBalance || isDepartureAfterHotelCheckout) && (h("div", { key: 'b060c4c26ac48164f787640e70ee51b475264628', class: "balanceIcon" }, isDepartureAfterHotelCheckout && h("div", { key: 'a1d25c0cc3096ff19e4d69790d6746b9628c186a', id: lateCheckoutId, class: "legend_circle lateCheckoutDot" }), hasBalance && h("div", { key: 'b63892d359f27b226c6f6be9628f6274bcae1bb9', id: balanceId, class: "legend_circle balanceDot" }))), h("div", { key: 'f9be69b873f95bedf47b04768abda2b2ea8f1482', class: { bookingEventTitle: true, pending }, style: pending ? undefined : { color: foreground }, ref: el => (this.titleElement = el) }, this.bookingEvent.NAME, this.renderEventBookingNumber()), h("div", { key: '8de4a8f9fd1bee1825fe091f71b35d81f8cb10f3', "data-handle": "leftSide", "data-reach": getHandleReach({ side: 'leftSide', ...reachInput }), class: { bookingEventDragHandle: true, leftSide: true, ...skewClasses } }), h("div", { key: '33324da7ff5e8a5a4cee61e1fc5427fa7f92ddd4', "data-handle": "rightSide", "data-reach": getHandleReach({ side: 'rightSide', ...reachInput }), class: { bookingEventDragHandle: true, rightSide: true, ...skewClasses } }), this.infoInDialog && (h("ir-dialog", { key: '00bcd68234a662f37599def047732288a07256cb', class: "bookingEventDialog", label: this.getInfoDialogLabel(), open: this.showInfoPopup, onIrDialogHide: () => this.showEventInfo(false), onIrDialogAfterHide: this.handleInfoDialogClosed }, infoPanel)), this.showInfoPopup && !this.infoInDialog && (
        // Rendered in the top layer by wa-popup, but still a DOM child of the bar: outside-click
        // detection and the "presses in the bubble are not drags" guard keep working as before.
        h("wa-popup", { key: 'f5e80c39a5bafad318e1c36de90d311b4492a00c', class: "bookingEventPopup", active: true, anchor: this.popupAnchor?.anchor, placement: "bottom", distance: 10, flip: true,
            // wa-popup types these as numbers, but hands them to Floating UI, which takes per-side padding.
            flipPadding: this.popupPadding, flipBoundary: this.getScroller() ?? undefined, shift: true, shiftPadding: this.popupPadding, shiftBoundary: this.getScroller() ?? undefined, arrow: true, arrowPadding: 14, "onwa-reposition": this.handlePopupReposition, ref: el => (this.popupElement = el) }, infoPanel))));
    }
    static get is() { return "igl-booking-event"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-booking-event.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-booking-event.css"]
        };
    }
    static get properties() {
        return {
            "currency": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "currency"
            },
            "is_vacation_rental": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is_vacation_rental",
                "defaultValue": "false"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language"
            },
            "bookingEvent": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "getAllBookingEvents": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "() => { [key: string]: any }[]",
                    "resolved": "() => { [key: string]: any; }[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Every booking on the calendar, read only when a drop has to be checked for overlaps.\nA getter rather than the array itself, so that updating one booking does not hand every bar a\nnew prop value and re-render them all."
                },
                "getter": false,
                "setter": false
            },
            "countries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICountry[]",
                    "resolved": "ICountry[]",
                    "references": {
                        "ICountry": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::ICountry",
                            "referenceLocation": "ICountry"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "roomTop": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "room-top"
            }
        };
    }
    static get states() {
        return {
            "showInfoPopup": {},
            "infoInDialog": {}
        };
    }
    static get events() {
        return [{
                "method": "dragOverEventData",
                "name": "dragOverEventData",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "showRoomNightsDialog",
                "name": "showRoomNightsDialog",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IRoomNightsData",
                    "resolved": "IRoomNightsData",
                    "references": {
                        "IRoomNightsData": {
                            "location": "import",
                            "path": "@/models/property-types",
                            "id": "src/models/property-types.ts::IRoomNightsData",
                            "referenceLocation": "IRoomNightsData"
                        }
                    }
                }
            }, {
                "method": "showDialog",
                "name": "showDialog",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "CalendarModalEvent",
                    "resolved": "{ reason: \"checkin\"; bookingNumber: string; roomIdentifier: string; roomUnit: string; roomName: string; sidebarPayload: RoomGuestsPayload & { bookingNumber: string; }; } | { reason: \"checkout\"; bookingNumber: string; roomIdentifier: string; roomUnit: string; roomName: string; booking: Booking; } | { reason: \"reallocate\"; } & IReallocationPayload | { reason: \"stretch\"; } & IRoomNightsData",
                    "references": {
                        "CalendarModalEvent": {
                            "location": "import",
                            "path": "@/models/property-types",
                            "id": "src/models/property-types.ts::CalendarModalEvent",
                            "referenceLocation": "CalendarModalEvent"
                        }
                    }
                }
            }, {
                "method": "updateBookingEvent",
                "name": "updateBookingEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "element"; }
    static get watchers() {
        return [{
                "propName": "bookingEvent",
                "methodName": "handleBookingEventChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "hideBubbleInfo",
                "method": "handleHideBubbleInfo",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}

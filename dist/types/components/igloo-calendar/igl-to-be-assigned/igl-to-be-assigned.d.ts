import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IglToBeAssigned {
    propertyid: number;
    calendarData: {
        [key: string]: any;
    };
    selectedDate: string | null;
    isLoading: boolean;
    optionEvent: EventEmitter<{
        key: string;
        data?: unknown;
    }>;
    showBookingPopup: EventEmitter<{
        key: 'calendar';
        data: number;
        noScroll: boolean;
    }>;
    addToBeAssignedEvent: EventEmitter<{
        key: 'tobeAssignedEvents';
        data: [];
    }>;
    highlightToBeAssignedBookingEvent: EventEmitter<{
        key: 'highlightBookingId';
        data: {
            bookingId: string;
        };
    }>;
    private readonly unassignedUnitsService;
    private categoriesCache;
    private refreshToken;
    componentWillLoad(): void;
    handleGotoDate(event: CustomEvent<{
        data: number;
    }>): void;
    /** A card was highlighted: scroll the calendar to that booking's first night. */
    handleBookingHighlight(event: CustomEvent<{
        data?: {
            fromDate?: string;
        };
    }>): void;
    /** Re-reads one date from the API and makes the store match it, in case a realtime update was missed. Owns the panel's loader, so every caller shows one. */
    private refreshDate;
    /** One single-day refresh on open; every later date switch reads the store only. */
    private verifySelectedDate;
    private selectDate;
    /** Memoized on the store entry's identity (and the property's, since names come from it): unrelated re-renders skip the grouping. */
    private categoriesFor;
    private handleDateChange;
    /**
     * Fired by `igl-tba-category-view` only after `assignUnit` succeeded. The room is dropped right away so the
     * card disappears without waiting, then the day is re-read — behind the panel's loader — so the panel matches
     * the server even if the realtime update for this assignment never arrives.
     */
    private handleAssignUnit;
    private handleClose;
    private renderEmptyState;
    private renderBody;
    render(): any;
}

import type { Payment, PaymentEntries } from "../ir-booking-details/types";
import type { Booking } from "../../models/booking.dto";
import type { ICountry } from "../../models/IBooking";
import { type DashboardPerformance, type DashboardUnits } from "../../services/dashboard/index";
import { type ISODate } from "../../utils/calendar-dates";
import type { DashboardTab, RailDensity } from './types';
/**
 * PMS landing dashboard: a day picker in the page header (two days either side of today), the day's stats in the
 * left rail, and a wa-tab-group, styled as summary cards, that switches between arrivals, departures, in-house,
 * new bookings and cancellations. Properties without front desk (`is_frontdesk_enabled` false) get no in-house tab,
 * arrivals / departures without check-in / check-out, and a reduced stats rail.
 *
 * Loads in order of importance, each part showing a skeleton until its data lands:
 * 1. property, locale tables, bookings criteria, countries / payment entries and arrivals;
 * 2. the visible tab plus the day's stats (Get_Monthly_Stats, Get_Exposed_Calendar, and pending bookings
 *    when the property's criteria list the pending status);
 * 3. every remaining tab, in the background, so each card's count fills in.
 *
 * Realtime notifications are batched every 3s: UPDATE_CALENDAR_AVAILABILITY reloads the whole day, ROOM_STATUS_CHANGED
 * reloads the stats plus the affected arrivals / departures tab and in-house, and CHANGE_IN_BOOK_STATUS cancelling (003) a
 * booking whose stay covers the selected day reloads the stats plus cancellations.
 */
export declare class IrDashboard {
    el: HTMLElement;
    /** Authentication token issued by the PMS backend. */
    ticket: string;
    /** ID of the property (hotel). */
    propertyid: number;
    /** Two-letter language code used for translations and API locale. */
    language: string;
    /** Property alias (aname), used when `propertyid` is missing. */
    p: string;
    /** API base URL override. */
    baseurl: string;
    isPageLoading: boolean;
    isPerformanceLoading: boolean;
    isUnitsLoading: boolean;
    isPendingLoading: boolean;
    selectedDate: ISODate;
    activeTab: DashboardTab;
    /** How tightly the rail's cards are drawn, so they fit the height the host page leaves on desktop. */
    railDensity: RailDensity;
    asOf: string;
    performance: DashboardPerformance;
    units: DashboardUnits;
    pendingUnits: number;
    /** Whether the property's booking criteria include the pending status (001); without it there's nothing to fetch and Pending shows 0. */
    hasPendingStatus: boolean;
    inHouse: Booking[];
    newBookings: Booking[];
    cancellations: Booking[];
    /** Day each tab's data was loaded for. A tab whose entry isn't `selectedDate` shows a spinner instead of its panel and count. */
    tabDates: Partial<Record<DashboardTab, ISODate>>;
    /** Tabs with a fetch in flight for the current `loadSeq`. A tab still loading its day's data is disabled. */
    loadingTabs: Partial<Record<DashboardTab, boolean>>;
    countries: ICountry[];
    paymentEntries: PaymentEntries;
    bookingNumber: number;
    checkoutRoomIdentifier: string;
    booking: Booking;
    payment: Payment;
    private apiClientService;
    private roomService;
    private bookingService;
    private bookingListingService;
    private setupService;
    private dashboardService;
    private paymentFolioRef;
    /** Guards against out-of-order responses when the day changes quickly. */
    private loadSeq;
    /** `loadSeq` each tab was last fetched under, so a tab is fetched at most once per load (background prefetch or show). */
    private tabSeqs;
    /** Settles once `calendar_data.property` is loaded; the arrivals / departures stores wait on it. */
    private propertyReady;
    private tabGroupRef;
    /** Set when a new day's arrivals land; the next render selects the arrivals tab in the tab group. */
    private selectArrivalsAfterRender;
    private unsubscribeRealtime;
    /** Day changes, debounced into a single day load. */
    private dayChange$;
    private dayChangeSubscription;
    /** Set while a day change's debounced load is waiting; clearing it drops that load. */
    private isDayLoadPending;
    /** Collects realtime notifications so a burst triggers one refresh, at most every 3s. */
    /** Re-runs init when the language changes so server-localized data follows. */
    private languageSync;
    private realtimeQueue;
    /** Watches the host page so a header or footer that resizes or mounts late re-fits the dashboard. */
    private pageResizeObserver;
    private fitFrame;
    /** Last height (px) the host page renders above and below the dashboard. */
    private reservedBlockSize;
    private asideRef;
    componentDidRender(): Promise<void>;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    languageChanged(next: string, previous: string): void;
    handleOpenBookingDetails(e: CustomEvent): void;
    handlePayBookingBalance(e: CustomEvent): void;
    handleResetCancellationDueAmount(e: CustomEvent): void;
    handleUpdateRoomGuests(e: CustomEvent): void;
    private reloadAfterChange;
    private scheduleFitToPage;
    private fitToPage;
    /**
     * Height of what the page renders under the dashboard: every in-flow element after it (or after one of its ancestors)
     * that sits below it, plus the ancestors' bottom padding and borders and the body's bottom margin. Summing those
     * rather than reading the document's height keeps the dashboard's own overflow (a short screen under the tables'
     * height floor) from counting as footer and shrinking the dashboard further.
     */
    private measureBelow;
    /**
     * Picks the rail density from the rail's height, which the layout sets (not its content), so a density change never
     * re-triggers itself. Below the desktop breakpoint the rail is content-sized and stays regular.
     */
    private updateRailDensity;
    /**
     * Measures what the host page renders above (header, body padding) and below (footer) the dashboard, so the desktop
     * layout's height is the viewport minus that and the page never scrolls. Writing only on change keeps the body
     * observer from looping: our own resize re-measures to the same value.
     */
    private measureReserved;
    private get propertyId();
    /** Whether the property uses the front desk (check-in / check-out). Until the property loads, assume it does. */
    private get isPms();
    /** Tabs the property gets: no in-house without the front desk, since nobody is checked in. */
    private get tabs();
    private init;
    private subscribeRealtime;
    /** Runs one refresh for every notification queued in the last 3s. */
    private processRealtimeBatch;
    /** The tab a room's status change belongs to: the one already listing the room, else the one its new status points to. */
    private tabForRoomStatus;
    /** Re-fetches one tab for the current day without marking the other tabs stale. */
    private reloadTab;
    /**
     * (Re)loads the selected day. Bumping `loadSeq` drops in-flight responses for the previous day
     * and marks every tab stale.
     */
    private loadDay;
    /** Phases 2 and 3: the visible tab and the stats first, then the other tabs in the background. */
    private loadRest;
    private loadStats;
    /** Fetches one stats source for the current day, dropping the result if a newer day was requested meanwhile. */
    private loadStat;
    /** Fetches a tab's data unless it was already fetched (or is in flight) for the current `loadSeq`. */
    private loadTab;
    private fetchTab;
    private isTabLoaded;
    private findBooking;
    private handleDateChange;
    private handleTabShow;
    private handleCheckoutRedirect;
    private get counts();
    private renderTab;
    /** In-house guests as three chips (adults, children, infants), each with its own icon and value. */
    private renderGuests;
    private renderPanel;
    render(): any;
}

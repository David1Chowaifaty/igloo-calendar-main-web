import type { TLocaleEntries } from "../../../stores/locales.store";
export declare class IrLoginAsideCalendar {
    /**
     * Translated labels from the server, keyed by `Lcz_*`. Any key that's missing (or the whole
     * object, until it arrives) falls back to the built-in English text.
     */
    localeEntries: TLocaleEntries | null;
    private toast?;
    private toastIcon?;
    private toastTitle?;
    private toastSub?;
    private calBody?;
    private statCount?;
    private statDelta?;
    private cycleTimeout?;
    private cycleInterval?;
    private landTimeout?;
    private reduceMotion;
    /** Local midnight of the current day; drives the month band, the week row and the highlighted column. */
    today: Date;
    private index;
    private bookingCount;
    /** Incoming bookings: always in the future (never collide with past stays) and almost all confirmed. */
    private readonly bookings;
    private tr;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    /** The current week, Sunday-first. */
    private get week();
    /** Month band segments over the week: two when the week straddles a month boundary. */
    private get monthSegments();
    /** Keeps the header honest if the page stays open past midnight. */
    private syncToday;
    private cycle;
    private landBooking;
    /** The seven day cells behind a row; today's carries the `.currentDay` tint. */
    private renderCells;
    /** Same anatomy as igl-booking-event: a skewed colored base with an unskewed title over it. */
    private renderBar;
    render(): any;
}

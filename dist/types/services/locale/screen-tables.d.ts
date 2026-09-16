/**
 * Merged into every request. `_PMS_FRONT` is the backend's shared vocabulary and
 * `_COMMON` is the hardcoded-label migration catalog's shared module — the words
 * every screen renders — so no entry below has to list either.
 *
 * Nothing else belongs here. `_USER_MGT` looks like a candidate because
 * `ir-interceptor` can raise the OTP dialog over any page, but that dialog mounts
 * lazily and loads the table itself, so putting it in the base set would charge
 * every screen 47 keys it usually never shows.
 */
export declare const BASE_TABLES: readonly ["_COMMON"];
/**
 * The setup tables each screen needs, on top of {@link LocaleController.BASE_TABLES}.
 *
 * A screen is any component that loads its own strings — a page root, but also a
 * lazily-mounted leaf like `ir-otp-modal` that appears over any page. Whoever calls
 * `LocaleController.load` declares an entry here and passes it; nothing else picks
 * tables.
 *
 * ## Why a registry rather than a literal at each call site
 *
 * A root cannot read its own table set off its own file — the strings live in the
 * leaves it renders. `ir-arrivals` has one `Lcz_*` key of its own but reaches
 * `ir-booked-by-cell`, whose `Lcz_P` lives in `_BOOKING_LIST_FRONT`. Inline literals
 * hide that and rot silently: five roots were already under-requesting before this
 * registry existed, rendering raw `Lcz_*` keys unless another screen happened to load
 * the table first.
 *
 * So the lists are *derived*, not guessed, and `screen-tables.spec.ts` re-derives them
 * on every run: it walks each screen's component tree, maps every `Lcz_*` key back to
 * the table that declares it in `src/stores/locales.store.ts`, and fails if a key needs
 * a table the entry omits. Adding a string from a new table breaks the build here
 * instead of at runtime.
 *
 * ## Boundaries
 *
 * The walk stops at any component that loads its own tables. `ir-otp-modal` mounts only
 * when `ir-interceptor` raises it and fetches `_USER_MGT` itself at that point, so the
 * ~20 screens that can raise it do not carry its 47 keys. Keep it that way: a new
 * self-loading component needs an entry here, not an addition to its hosts.
 *
 * `_PMS_FRONT` never appears below — it is a base table, merged into every request.
 */
export declare const SCREEN_TABLES: {
    readonly agents: readonly ["_AGENTS"];
    readonly arrivals: readonly ["_BOOKING_LIST_FRONT", "_FRONTDESK", "_BOOKING"];
    readonly bookingDetails: readonly ["_PMS_FRONT", "_FINANCIALS", "_BOOKING", "_CALENDAR"];
    readonly bookingEditor: readonly ["_CALENDAR"];
    readonly bookingListing: readonly ["_BOOKING_LIST_FRONT", "_BOOKING"];
    readonly bookingPrinting: readonly ["_BOOKING"];
    readonly bookProperty: readonly ["_CALENDAR"];
    readonly calendar: readonly ["_USER_MGT", "_CALENDAR", "_HOUSEKEEPING", "_PMS_FRONT", "_BOOKING"];
    readonly channel: readonly ["_CHANNEL_FRONT", "_SETTINGS"];
    readonly cityLedger: readonly ["_FINANCIALS"];
    readonly dailyRevenue: readonly ["_REPORTS"];
    readonly departures: readonly ["_BOOKING_LIST_FRONT", "_BOOKING"];
    readonly dpReport: readonly ["_BOOKING_LIST_FRONT", "_REPORTS"];
    readonly extraServicesSettings: readonly ["_SETTINGS"];
    readonly financialActions: readonly ["_FINANCIALS", "_BOOKING"];
    readonly fiscalDocuments: readonly ["_FINANCIALS"];
    readonly gapNights: readonly ["_CALENDAR"];
    readonly ghsOnboarding: readonly ["_GUESTS"];
    readonly guestInfo: readonly [];
    readonly housekeeping: readonly ["_HK_FRONT", "_HOUSEKEEPING"];
    readonly invoice: readonly ["_FINANCIALS", "_BOOKING"];
    readonly hkStaffTasks: readonly ["_HOUSEKEEPING"];
    readonly hkTasks: readonly ["_HOUSEKEEPING"];
    readonly login: readonly ["_AUTH"];
    readonly mealReport: readonly ["_REPORTS"];
    readonly monthlyBookingsReport: readonly ["_REPORTS"];
    readonly otpModal: readonly ["_USER_MGT"];
    readonly paymentOption: readonly ["_PAYMENT_BACK"];
    readonly pmsPage: readonly ["_PMS", "_CALENDAR"];
    readonly queueManager: readonly ["_FRONTDESK"];
    readonly resetPassword: readonly ["_USER_MGT", "_AUTH"];
    readonly salesByChannel: readonly ["_REPORTS"];
    readonly salesByCountry: readonly ["_REPORTS"];
    readonly uninvoicedBookings: readonly ["_BOOKING_LIST_FRONT", "_BOOKING"];
    readonly userManagement: readonly ["_USER_MGT", "_AUTH"];
};
export type ScreenName = keyof typeof SCREEN_TABLES;

/**
 * Merged into every request. `_PMS_FRONT` is the shared vocabulary — the words
 * every screen renders — so no entry below has to list it.
 *
 * Nothing else belongs here. `_USER_MGT` looks like a candidate because
 * `ir-interceptor` can raise the OTP dialog over any page, but that dialog mounts
 * lazily and loads the table itself, so putting it in the base set would charge
 * every screen 47 keys it usually never shows.
 */
export const BASE_TABLES = ['_PMS_FRONT'];
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
export const SCREEN_TABLES = {
    arrivals: ['_BOOKING_LIST_FRONT'],
    bookingDetails: [],
    bookingEditor: [],
    bookingListing: ['_BOOKING_LIST_FRONT'],
    bookingPrinting: [],
    bookProperty: [],
    calendar: ['_USER_MGT'],
    channel: ['_CHANNEL_FRONT'],
    cityLedger: [],
    dailyRevenue: [],
    departures: ['_BOOKING_LIST_FRONT'],
    dpReport: ['_BOOKING_LIST_FRONT'],
    financialActions: [],
    fiscalDocuments: [],
    gapNights: [],
    guestInfo: [],
    housekeeping: ['_CHANNEL_FRONT', '_HK_FRONT'],
    hkTasks: ['_BOOKING_LIST_FRONT'],
    monthlyBookingsReport: [],
    otpModal: ['_USER_MGT'],
    paymentOption: ['_PAYMENT_BACK'],
    resetPassword: ['_USER_MGT'],
    salesByChannel: [],
    salesByCountry: [],
    uninvoicedBookings: ['_BOOKING_LIST_FRONT'],
    userManagement: ['_USER_MGT'],
};

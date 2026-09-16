'use strict';

var index = require('./index-CQkpA5n3.js');
var calendarData = require('./calendar-data-UPPAEVR_.js');
var booking_service = require('./booking.service-Bv48F_fn.js');
var booking = require('./booking-BRIBt8TB.js');
var enums = require('./enums-BSCnMYlE.js');
var t = require('./t-CyRK1btk.js');
var index$1 = require('./index-COQ6L7wn.js');
var ApiClient = require('./ApiClient-u7fuhiXA.js');
var moment = require('./moment-CdViwxPQ.js');
var booking_dto = require('./booking.dto-CUSvGTvD.js');
var irDate = require('./ir-date-BZLsqCOc.js');
var number = require('./number-D7i5wAQq.js');
var locale_controller = require('./locale.controller-C5iGrwyB.js');
var functions = require('./functions-CsGCS8vQ.js');
require('./locales.store-BMTss6fG.js');
var cityLedger_service = require('./city-ledger.service-DSWpEtoX.js');
var axios = require('./axios-EresIryl.js');
var index$2 = require('./index-Jy9KaFJU.js');
var room_service = require('./room.service-XTpTtw8N.js');
var payment_service = require('./payment.service-CGBWAElK.js');
var irInterceptor_store = require('./ir-interceptor.store-moMB-JCs.js');
var agents_service = require('./agents.service-C9idZypK.js');
var realtime_service = require('./realtime.service-BMgF8Zdb.js');
var utils = require('./utils-oNe0zJBw.js');
var languageSync = require('./language-sync-BHspIYHF.js');
var utils$1 = require('./utils-DfkM3gGN.js');
var irCityLedgerTransactionForm_schema = require('./ir-city-ledger-transaction-form.schema-BrTR9MNN.js');
var index$3 = require('./index-CGEg1Fow.js');
var types = require('./types-BVJQZ50e.js');
var useTable = require('./useTable-BN32DOaV.js');
var IBooking = require('./IBooking-hDE_y33g.js');
var svcCategory_utils = require('./svc-category.utils-CzOWVjOF.js');
var v4 = require('./v4-_2BfiRUa.js');
var global_variables = require('./global.variables-BldIv7Je.js');
var index$4 = require('./index-BquCITYD.js');
require('./commonSchemas-rhaJ5cvr.js');
require('./type-Bj2x9EWc.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const iglDayUseUnitListCss = () => `.sc-igl-day-use-unit-list-h{display:block;height:100%}.day-use-unit-list__grid.sc-igl-day-use-unit-list{display:grid;grid-template-columns:minmax(50px, max-content) 200px 1fr;column-gap:1rem;row-gap:0.25rem;width:100%;animation:day-use-unit-list-in var(--wa-transition-normal, 180ms) ease-out both}.day-use-unit-list__infos.sc-igl-day-use-unit-list{display:flex;flex-direction:column;gap:1.5rem;margin-bottom:1rem}.day-use-unit-list__empty-container.sc-igl-day-use-unit-list{min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center;animation:day-use-unit-list-in var(--wa-transition-normal, 180ms) ease-out both}@keyframes day-use-unit-list-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}@media (prefers-reduced-motion: reduce){.day-use-unit-list__grid.sc-igl-day-use-unit-list,.day-use-unit-list__empty-container.sc-igl-day-use-unit-list{animation:none}}.day-use-unit-list__roomtype-name.sc-igl-day-use-unit-list{grid-column:1 / -1;margin:1rem 0 0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m);margin-bottom:0.5rem}.day-use-unit-list__roomtype-name.sc-igl-day-use-unit-list:first-child{margin-top:0}.day-use-unit-list__row.sc-igl-day-use-unit-list{display:grid;grid-template-columns:subgrid;grid-column:1 / -1;align-items:center;min-height:var(--wa-form-control-height, 2.25rem);border-radius:var(--wa-border-radius-m);transition:background-color var(--wa-transition-fast, 120ms) ease}.day-use-unit-list__row--current.sc-igl-day-use-unit-list{background-color:var(--wa-color-brand-fill-quiet)}.day-use-unit-list__unit-name.sc-igl-day-use-unit-list{display:flex;align-items:center;gap:0.25rem;white-space:nowrap;color:var(--wa-color-text-normal);margin-inline-start:1rem}.day-use-unit-list__day-status-icon.sc-igl-day-use-unit-list{margin-inline-start:0.25rem;vertical-align:middle;color:var(--wa-color-warning-fill-loud)}.day-use-unit-list__day-status-text.sc-igl-day-use-unit-list{font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-warning-fill-loud);white-space:nowrap}.day-use-unit-list__price-input.sc-igl-day-use-unit-list{width:100%}.day-use-unit-list__book-cell.sc-igl-day-use-unit-list{display:flex;align-items:center;gap:0.5rem;justify-self:start}.day-use-unit-list__current-tag.sc-igl-day-use-unit-list{flex-shrink:0}`;

const IglDayUseUnitList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.unitSelected = index.createEvent(this, "unitSelected");
    }
    mode;
    /** Room types returned by the day-use availability check. */
    roomTypes = [];
    /** Fallback day-use price used only if the property has no `SVC_DEFAULT_PRICE_DUZ` configured, editable per unit. */
    price;
    /** Net (tax-exclusive) version of the resolved gross default price, pre-computed by the parent (`calculateNetAmount`) — shown as the input's default value so an untouched default reads the same way a typed custom (net) amount does. */
    netPrice = null;
    currency;
    /** Unit ids already booked for day use on the target date (from `getDayUseBookingsForCalendar`) — excluded from the list. */
    bookedUnitIds = new Set();
    /** When a specific unit was preselected (e.g. double-click on a room title in the calendar), only that unit is shown. */
    unitId;
    /** Unit id currently being resolved (gross-price lookup) after "Book" was clicked — disables the other buttons. */
    resolvingUnitId = null;
    /** Whether an availability check has completed at least once — distinguishes "no search yet" (render nothing) from "searched, zero units" (show empty state). */
    hasSearched = false;
    /**
     * The day-use extra service currently being edited (`ir-booking-editor` `mode="EDIT_DAY_USE"`).
     * Its unit is exempt from `bookedUnitIds` (it's its own existing booking, not a conflict), never
     * shows the upcoming-check-in warning (same reason), gets its price prefilled, and is highlighted.
     */
    currentExtraService;
    priceOverrides = {};
    unitSelected;
    componentWillLoad() {
        const { dayUseSelection } = booking_service.booking_store;
        if (dayUseSelection && dayUseSelection.isCustomPrice) {
            this.priceOverrides = { ...this.priceOverrides, [dayUseSelection.unit.id]: dayUseSelection.netAmount };
        }
        else if (this.currentExtraService?.pr_id != null && this.currentExtraService.charges?.net_amount != null) {
            this.priceOverrides = { ...this.priceOverrides, [this.currentExtraService.pr_id]: this.currentExtraService.charges.net_amount };
        }
    }
    isCurrentUnit(unitId) {
        return this.currentExtraService?.pr_id === unitId;
    }
    getAvailableUnits(roomType) {
        const evaluated = (roomType.physicalrooms ?? []).map(unit => {
            const { available, dayStatus, checkoutTime, checkinTime } = booking.getDayUseUnitAvailability(unit.calendar_cell);
            const isCurrent = this.isCurrentUnit(unit.id);
            return { unit, available, dayStatus: isCurrent ? null : dayStatus, checkoutTime: isCurrent ? null : checkoutTime, checkinTime: isCurrent ? null : checkinTime };
        });
        const bookable = evaluated.filter(({ unit, available }) => available && (this.isCurrentUnit(unit.id) || !this.bookedUnitIds?.has(unit.id)));
        if (this.unitId === undefined || this.unitId === null || this.unitId === '') {
            return bookable;
        }
        return bookable.filter(({ unit }) => unit.id.toString() === this.unitId.toString());
    }
    get defaultPrice() {
        const svcDefaultPrice = calendarData.getExtraServiceDefaultPrice(enums.SvcCategory.DayUse);
        return svcDefaultPrice !== undefined ? Number(svcDefaultPrice) : (this.price ?? 0);
    }
    /** What's actually shown as the default input value — the net-converted price when it's ready, otherwise the gross default as a fallback while it resolves. */
    get displayDefaultPrice() {
        return this.netPrice ?? this.defaultPrice;
    }
    getPrice(unitId) {
        return this.priceOverrides[unitId] ?? this.displayDefaultPrice;
    }
    isCustomPrice(unitId) {
        return this.priceOverrides[unitId] !== undefined;
    }
    render() {
        const availableRoomTypes = (this.roomTypes ?? []).filter(roomType => {
            if (roomType.is_active) {
                return true;
            }
            if (roomType.physicalrooms.some(p => p.id === this.currentExtraService?.pr_id)) {
                return true;
            }
            return false;
        });
        const hasBookableUnit = availableRoomTypes.some(roomType => this.getAvailableUnits(roomType).length > 0);
        if (this.hasSearched && !hasBookableUnit) {
            return (index.h("div", { class: "day-use-unit-list__empty-container" }, index.h("ir-empty-state", { message: t.t('Lcz_NoUnitsAvailableForSelectedDate', { fallback: 'No units available for the selected date.' }) })));
        }
        return (index.h(index.Host, null, availableRoomTypes.length > 0 && (index.h("div", { class: "day-use-unit-list__infos" }, this.mode !== 'BAR_BOOKING' && (index.h("p", { class: 'm-0 p-0' }, this.currentExtraService
            ? t.t('Lcz_EditExistingUnitOrSwitchBooking', { fallback: 'Edit the existing unit or switch the booking to another one.' })
            : t.t('Lcz_PickUnitForDayUse', { fallback: 'Pick a unit for day-use.' }))), calendarData.calendar_data.property.tax_statement && (index.h("wa-callout", { size: "s", variant: "neutral", appearance: "filled", class: "booking-editor-header__tax_statement" }, calendarData.calendar_data.property.tax_statement)))), index.h("div", { class: "day-use-unit-list__grid" }, availableRoomTypes.map(roomType => {
            const units = this.getAvailableUnits(roomType);
            if (units.length === 0) {
                return null;
            }
            return (index.h(index.Fragment, null, index.h("h5", { class: "day-use-unit-list__roomtype-name" }, roomType.name), units.map(({ unit, dayStatus, checkoutTime, checkinTime }) => {
                const isCurrent = this.isCurrentUnit(unit.id);
                const dayStatusIcon = dayStatus ? booking.DAY_USE_STATUS_ICON[dayStatus] : null;
                return (index.h("div", { class: `day-use-unit-list__row${isCurrent ? ' day-use-unit-list__row--current' : ''}`, key: `day-use-unit-row-${unit.id}` }, index.h("span", { class: "day-use-unit-list__unit-name" }, unit.name, dayStatus && dayStatusIcon && (index.h(index.Fragment, null, index.h("wa-tooltip", { for: `day-use-day-status-${unit.id}` }, booking.formatDayUseStatusText(dayStatus, checkoutTime, checkinTime)), index.h("wa-icon", { name: dayStatusIcon, id: `day-use-day-status-${unit.id}`, class: `day-use-unit-list__day-status-icon day-use-unit-list__day-status-icon--${dayStatus}` })))), index.h("ir-input", { class: "day-use-unit-list__price-input", size: "s", mask: "price", value: this.getPrice(unit.id).toString(), "onText-change": e => (this.priceOverrides = { ...this.priceOverrides, [unit.id]: Number(e.detail) }) }, index.h("span", { slot: "start" }, this.currency?.symbol)), index.h("div", { class: "day-use-unit-list__book-cell" }, index.h("ir-custom-button", { "data-testid": "book", type: "button", size: "s", variant: "brand", appearance: this.currentExtraService && !isCurrent ? 'outlined' : 'accent', class: "day-use-unit-list__book-button", loading: this.resolvingUnitId === unit.id, disabled: this.resolvingUnitId !== null && this.resolvingUnitId !== unit.id, onClickHandler: () => this.unitSelected.emit({ unit, roomType, price: this.getPrice(unit.id), isCustomPrice: this.isCustomPrice(unit.id) }) }, "Book"), dayStatus && index.h("span", { class: "day-use-unit-list__day-status-text" }, booking.formatDayUseStatusText(dayStatus, checkoutTime, checkinTime)))));
            })));
        }))));
    }
};
IglDayUseUnitList.style = iglDayUseUnitListCss();

const irAgentBillingCss = () => `.sc-ir-agent-billing-h{display:flex;flex-direction:column;height:100%}.billing__container.sc-ir-agent-billing{display:flex;flex-direction:column;height:100%;gap:var(--wa-space-l);padding:0 var(--wa-space-l)}.agent-billing__table.sc-ir-agent-billing{border:0;border-radius:0}.agent-bill__loader-container.sc-ir-agent-billing{display:flex;align-items:center;justify-content:center;height:100%;width:100%;min-height:70vh}.billing__section-title-row.sc-ir-agent-billing{display:flex;align-items:center;justify-content:space-between}.billing__section-title.sc-ir-agent-billing{margin:0;padding:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m)}.billing__actions-row.sc-ir-agent-billing{display:flex;align-items:center;justify-content:flex-end;gap:0.5rem}.billing__invoice-nbr.sc-ir-agent-billing{margin:0;padding:0}.billing__invoice-nbr.--secondary.sc-ir-agent-billing{font-size:0.75rem}.billing__price-col.sc-ir-agent-billing{text-align:end !important}.billing__cards.sc-ir-agent-billing{display:flex;flex-direction:column;gap:var(--wa-space-m);padding-bottom:var(--wa-space-l) !important}.billing__card.sc-ir-agent-billing{display:block}.billing__card-header.sc-ir-agent-billing{display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem}.billing__card-header-info.sc-ir-agent-billing{display:flex;flex-direction:column}.billing__card-number.sc-ir-agent-billing{margin:0;font-weight:var(--wa-font-weight-heading);font-family:var(--wa-font-family-heading)}.billing__card-type.sc-ir-agent-billing{margin:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-secondary)}.billing__card-download-btn.sc-ir-agent-billing{display:flex;align-items:center}.billing__card-details.sc-ir-agent-billing{display:flex;gap:var(--wa-space-xs);justify-content:space-between}.billing__card-detail.sc-ir-agent-billing{display:flex;flex-direction:column}.billing__card-detail-label.sc-ir-agent-billing{margin:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.billing__card-detail-label.--amount.sc-ir-agent-billing{text-align:end !important}.billing__card-detail-value.sc-ir-agent-billing{margin:0;font-weight:var(--wa-font-weight-regular);font-size:var(--wa-font-size-s)}.billing__card-void-btn.sc-ir-agent-billing{flex:1 1 0%}.billing__card-footer.sc-ir-agent-billing{display:flex}.table-container.sc-ir-agent-billing{display:none}.billing__card.sc-ir-agent-billing::part(footer),.billing__card.sc-ir-agent-billing [part~="footer"]{padding-top:1rem;padding-bottom:1rem}@media (min-width: 768px){.billing__cards.sc-ir-agent-billing{display:none}.table-container.sc-ir-agent-billing{display:block}}`;

const IrAgentBilling = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    fiscalDocuments = [];
    isLoading = false;
    hasFetched = false;
    invoiceDialogRef;
    cityLedgerService = new index$1.CityLedgerService();
    apiClientService = new ApiClient.ApiClient();
    async componentWillLoad() {
        await this.fetchFiscalDocuments();
    }
    async handleBookingChange(newVal, oldVal) {
        if (newVal?.booking_nbr !== oldVal?.booking_nbr || newVal?.agent?.id !== oldVal?.agent?.id) {
            this.fiscalDocuments = [];
            this.hasFetched = false;
            await this.fetchFiscalDocuments();
        }
    }
    async fetchFiscalDocuments() {
        if (!this.booking?.agent?.id || !this.booking?.booking_nbr)
            return;
        this.isLoading = true;
        try {
            const result = await this.cityLedgerService.getFiscalDocuments({
                AGENCY_ID: this.booking.agent.id,
                START_DATE: this.booking.from_date,
                END_DATE: this.booking.to_date,
                BOOK_NBR: this.booking.booking_nbr,
            });
            this.fiscalDocuments = result ?? [];
        }
        catch (err) {
            console.error('[ir-agent-billing] getFiscalDocuments failed:', err);
            this.fiscalDocuments = [];
        }
        finally {
            this.isLoading = false;
            this.hasFetched = true;
        }
    }
    handleFiscalDocumentIssued(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.fetchFiscalDocuments();
    }
    handleDocumentConverted(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.fetchFiscalDocuments();
    }
    render() {
        if (this.isLoading) {
            return (index.h("div", { class: 'agent-bill__loader-container' }, index.h("ir-spinner", null)));
        }
        return (index.h(index.Host, null, index.h("div", { class: "billing__container" }, index.h("div", { class: "billing__section-title-row" }, index.h("h4", { class: "billing__section-title" }, t.t('Lcz_IssuedDocuments', { fallback: 'Issued documents' })), index.h("ir-custom-button", { onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.invoiceDialogRef.openModal();
            }, appearance: 'accent', class: "booking-header__stretched-btn", size: "s", variant: "brand" }, t.t('Lcz_IssueInvoice', { fallback: 'Issue Invoice' }))), index.h("ir-city-ledger-fiscal-documents-table", { class: 'agent-billing__table', rows: this.fiscalDocuments, booking: this.booking, isLoading: this.isLoading, hasFetched: this.hasFetched, agentId: this.booking?.agent?.id ?? null, currencySymbol: calendarData.calendar_data.property?.currency?.symbol ?? '$', fromDate: this.booking?.from_date ?? null, toDate: this.booking?.to_date ?? null, hasDates: true, ticket: this.apiClientService.getToken(), propertyId: calendarData.calendar_data.property?.id, onFetchRequested: () => this.fetchFiscalDocuments() })), index.h("ir-cl-invoice-dialog", { mode: "booking", agentId: this.booking.agent?.id, booking: this.booking, startDate: this.booking.from_date, endDate: this.booking.to_date, currencyId: calendarData.calendar_data.property.currency.id, ref: el => (this.invoiceDialogRef = el) })));
    }
    static get watchers() { return {
        "booking": [{
                "handleBookingChange": 0
            }]
    }; }
};
IrAgentBilling.style = irAgentBillingCss();

// HelpDocButton.tsx
const HelpDocButton = ({ message, href, class: wrapperClass }) => (index.h("div", { class: wrapperClass }, index.h("wa-tooltip", { for: "help-button" }, message), index.h("wa-button", { id: "help-button", href: href, size: "s", target: "_blank", "aria-label": message, appearance: "plain", variant: "neutral" }, index.h("wa-icon", { name: "circle-info", style: { fontSize: '1rem' } }))));

/**
 * Coordinates retrieval of applicable policies for a booking by delegating to
 * {@link BookingService} while providing light data preparation utilities.
 */
class ApplicablePoliciesService {
    bookingService;
    _booking = null;
    constructor(bookingService) {
        this.bookingService = bookingService;
    }
    /**
     * Returns the booking reference used to scope applicable policy requests.
     */
    get booking() {
        return this._booking;
    }
    /**
     * Assigns the booking reference that downstream requests rely on.
     */
    set booking(value) {
        this._booking = value;
    }
    /**
     * Fetches the exposed applicable policies for the active booking and groups
     * them by policy type to simplify consumption within UI layers. Requests for
     * each unique room grouping are executed in parallel. The response includes
     * the grouped policies alongside prebuilt cancellation statements and the
     * aggregate guarantee amount.
     *
     * @throws If a booking is not configured prior to invocation.
     */
    async fetchGroupedApplicablePolicies(params) {
        if (!this._booking) {
            throw new Error('Booking must be defined before fetching applicable policies.');
        }
        if (['003', '004'].includes(this._booking.status.code) || !this._booking.is_direct) {
            return;
        }
        const { rooms, booking_nbr, currency, property } = this._booking;
        const groupedRooms = this.groupRoomsForRequest(rooms ?? []);
        try {
            const requests = [];
            groupedRooms?.forEach(grouping => {
                const basePayload = {
                    booking_nbr,
                    currency_id: currency.id,
                    language: params.language,
                    property_id: property.id,
                    rate_plan_id: grouping.ratePlanId,
                    room_type_id: grouping.roomTypeId,
                    is_preserve_history: true,
                };
                if (grouping.identifiers.length > 1) {
                    grouping.identifiers.forEach(roomIdentifier => {
                        requests.push(this.bookingService
                            .getExposedApplicablePolicies({ ...basePayload, room_identifier: roomIdentifier })
                            .then(policies => ({ grouping: { ...grouping, rooms: rooms.filter(r => r.identifier === roomIdentifier) }, policies })));
                    });
                }
                else {
                    requests.push(this.bookingService.getExposedApplicablePolicies(basePayload).then(policies => ({ grouping, policies })));
                }
            });
            const groupedPolicies = await Promise.all(requests);
            const policiesByType = this.buildPoliciesByType(groupedPolicies);
            const cancellationStatements = this.buildCancellationStatements(groupedPolicies);
            const guaranteeAmount = this.calculateGuaranteeAmount(groupedPolicies);
            return { policiesByType, cancellationStatements, guaranteeAmount };
        }
        catch (error) {
            const detail = error instanceof Error ? error.message : String(error);
            throw new Error(`Failed to fetch applicable policies: ${detail}`);
        }
    }
    /**
     * Creates a list of unique room groupings keyed by rate plan and room type.
     * Each grouping tracks the identifiers of the rooms it represents.
     *
     * @param rooms - The rooms attached to the active booking.
     */
    groupRoomsForRequest(rooms) {
        // if (!rooms.length) {
        //   throw new Error('Cannot request applicable policies without booking rooms.');
        // }
        const groupMap = new Map();
        rooms?.forEach(room => {
            if (!room.rateplan?.id || !room.roomtype?.id) {
                throw new Error('Room is missing rate plan or room type information.');
            }
            const key = `${room.roomtype.id}-${room.rateplan.id}`;
            const identifier = typeof room.identifier === 'string' ? room.identifier : null;
            if (!groupMap.has(key)) {
                groupMap.set(key, {
                    ratePlanId: room.rateplan.id,
                    roomTypeId: room.roomtype.id,
                    identifiers: identifier ? [identifier] : [],
                    rooms: [room],
                });
                return;
            }
            const group = groupMap.get(key);
            group.rooms.push(room);
            if (identifier && !group.identifiers.includes(identifier)) {
                group.identifiers.push(identifier);
            }
        });
        return [...groupMap.values()];
    }
    buildPoliciesByType(groupedPolicies) {
        const flattened = groupedPolicies.flatMap(group => group.policies ?? []);
        return this.groupPoliciesByType(flattened);
    }
    /**
     * Organizes the raw policies returned from the API by their logical type so
     * consumers can access grouped guarantees or cancellations effortlessly.
     */
    groupPoliciesByType(policies) {
        return policies.reduce((acc, policy) => {
            acc[policy.type] = acc[policy.type] ? [...acc[policy.type], policy] : [policy];
            return acc;
        }, {});
    }
    /**
     * Builds the cancellation statements derived from the fetched policies and
     * booking rooms.
     */
    buildCancellationStatements(groupedPolicies) {
        if (!this._booking) {
            return [];
        }
        const statements = [];
        groupedPolicies.forEach(({ grouping, policies }) => {
            if (!policies?.length) {
                return;
            }
            const cancellationPolicy = policies.find(policy => policy.type === 'cancelation');
            if (!cancellationPolicy) {
                return;
            }
            grouping.rooms.forEach(room => {
                const checkInDate = moment.hooks(room.from_date, 'YYYY-MM-DD', true);
                if (!checkInDate.isValid()) {
                    return;
                }
                // const checkInDateStr = checkInDate.format('YYYY-MM-DD');
                //Remove check-in dates and above from brackets
                const oldBrackets = cancellationPolicy.brackets.filter(bracket => {
                    const bracketDate = moment.hooks(bracket.due_on, 'YYYY-MM-DD', true);
                    return bracketDate.isValid() && bracketDate.isBefore(checkInDate, 'day');
                });
                // if (!oldBrackets.length) {
                //   return;
                // }
                //check if at least one bracket have a amount > 0
                const hasPositiveBracket = oldBrackets.some(bracket => bracket.amount > 0);
                let filteredBrackets;
                if (hasPositiveBracket) {
                    filteredBrackets = oldBrackets
                        .map((bracket, index) => {
                        if (bracket.amount > 0) {
                            return bracket;
                        }
                        const nextBracket = oldBrackets[index + 1];
                        if (nextBracket?.amount && nextBracket.amount > 0) {
                            return bracket;
                        }
                        return undefined;
                    })
                        .filter((bracket) => Boolean(bracket));
                }
                else {
                    filteredBrackets = [...oldBrackets];
                }
                filteredBrackets = [...this.mergeBracketsByAmount(filteredBrackets)];
                if (!room.rateplan.is_non_refundable) {
                    const inDate = moment.hooks(room.from_date, 'YYYY-MM-DD', true);
                    const outDate = moment.hooks(room.to_date, 'YYYY-MM-DD', true);
                    const stayNights = outDate.isValid() && inDate.isValid() ? outDate.diff(inDate, 'days') : 0;
                    const fullChargeDate = stayNights > 1 ? inDate.clone().add(1, 'day').format('YYYY-MM-DD') : inDate.format('YYYY-MM-DD');
                    filteredBrackets.push({
                        amount: room.total,
                        amount_formatted: '',
                        code: '',
                        currency_id: this._booking.currency.id,
                        due_on: fullChargeDate,
                        due_on_formatted: '',
                        gross_amount: room.gross_total,
                        gross_amount_formatted: '',
                        statement: '100% of total price',
                    });
                    filteredBrackets.sort((a, b) => {
                        const aDate = moment.hooks(a.due_on, 'YYYY-MM-DD', true);
                        const bDate = moment.hooks(b.due_on, 'YYYY-MM-DD', true);
                        return aDate.valueOf() - bDate.valueOf();
                    });
                }
                statements.push({
                    ...cancellationPolicy,
                    brackets: filteredBrackets,
                    roomType: room.roomtype,
                    ratePlan: room.rateplan,
                    checkInDate: room.from_date,
                    grossTotal: room.gross_total,
                });
            });
        });
        return statements;
    }
    /**
     * Aggregates the guarantee commitments across the booking rooms using the
     * freshly retrieved policy data.
     */
    calculateGuaranteeAmount(groupedPolicies) {
        return groupedPolicies.reduce((total, { grouping, policies }) => {
            if (!policies?.length) {
                return total;
            }
            const guaranteePolicy = policies.find(policy => policy.type === 'guarantee');
            if (!guaranteePolicy) {
                return total;
            }
            const currentBracket = this.selectCurrentBracket(guaranteePolicy.brackets);
            if (!currentBracket) {
                return total;
            }
            const roomsTotal = grouping.rooms.length * (currentBracket.gross_amount ?? 0);
            return total + roomsTotal;
        }, 0);
    }
    selectCurrentBracket(brackets) {
        const today = moment.hooks().startOf('day');
        for (const bracket of brackets) {
            const dueDate = moment.hooks(bracket.due_on, 'YYYY-MM-DD', true);
            if (!dueDate.isValid()) {
                continue;
            }
            if (today.isSameOrAfter(dueDate, 'day')) {
                return bracket;
            }
        }
        return null;
    }
    /**
     * Collapses consecutive brackets that share the same gross amount so only
     * price changes are surfaced.
     */
    mergeBracketsByAmount(brackets) {
        if (brackets.length <= 1) {
            return [...brackets];
        }
        return brackets.reduce((acc, bracket) => {
            const last = acc[acc.length - 1];
            if (!last || last.gross_amount !== bracket.gross_amount) {
                acc.push(bracket);
            }
            return acc;
        }, []);
    }
}

const irApplicablePoliciesCss = () => `.sc-ir-applicable-policies-h{display:flex;flex-direction:column;gap:1rem}.applicable-policies__container.sc-ir-applicable-policies{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:1rem}.applicable-policies__title.sc-ir-applicable-policies{font-size:1rem;font-weight:700;padding:0;margin:0}.applicable-policies__no-penalty.sc-ir-applicable-policies{padding:0;margin:0;font-size:0.875rem}.applicable-policies__statements.sc-ir-applicable-policies{box-sizing:border-box;padding:0}.applicable-policies__statements.sc-ir-applicable-policies::part(message),.applicable-policies__statements.sc-ir-applicable-policies [part~="message"]{max-height:245px;overflow-y:auto;display:flex;flex-direction:column;padding:1em;gap:0.5rem}.applicable-policies__highlighted-bracket.sc-ir-applicable-policies{color:var(--wa-color-brand-50)}.applicable-policies__statement.sc-ir-applicable-policies{display:flex;flex-direction:column;border-bottom:1px solid var(--wa-color-neutral-70);padding-bottom:0.5rem}.applicable-policies__statement.sc-ir-applicable-policies:last-child{border-bottom:0;padding-bottom:0}.applicable-policies__room.sc-ir-applicable-policies{padding:0;margin:0;padding-bottom:0.5rem}.applicable-policies__bracket.sc-ir-applicable-policies{display:grid;grid-template-columns:repeat(2, 1fr);gap:0.25rem;font-size:0.875rem;padding-bottom:0.5rem}.applicable-policies__bracket-dates.sc-ir-applicable-policies{display:flex;align-items:center;gap:0.5rem;padding:0;margin:0}.applicable-policies__amount.sc-ir-applicable-policies{text-align:end;padding:0;margin:0;font-weight:600}.applicable-policies__statement-text.sc-ir-applicable-policies{padding:0;margin:0}.applicable-policies__brackets-table.sc-ir-applicable-policies{display:none}.applicable-policies__guarantee.sc-ir-applicable-policies{box-sizing:border-box;padding:0.5rem 1rem;margin-bottom:0.5rem;font-size:0.875rem}.applicable-policies__guarantee.sc-ir-applicable-policies::part(message),.applicable-policies__guarantee.sc-ir-applicable-policies [part~="message"]{display:flex;align-items:center;justify-content:space-between}.applicable-policies__guarantee-info.sc-ir-applicable-policies{display:flex;align-items:center;gap:0.5rem}.applicable-policies__guarantee-date.sc-ir-applicable-policies{color:var(--wa-color-text-quiet, #666);padding:0;margin:0}.applicable-policies__guarantee-amount.sc-ir-applicable-policies{font-weight:600;color:var(--wa-color-text-normal, #222);padding:0;margin:0}.applicable-policies__guarantee-label.sc-ir-applicable-policies{color:var(--wa-color-danger-50);font-weight:700;padding:0;margin:0}.applicable-policies__guarantee-action.sc-ir-applicable-policies{width:fit-content}@media (min-width: 768px){.applicable-policies__brackets.sc-ir-applicable-policies{display:none}.applicable-policies__brackets-table.sc-ir-applicable-policies{display:block;width:100%;font-size:0.875rem}.applicable-policies__brackets-table.sc-ir-applicable-policies table.sc-ir-applicable-policies{width:100%}.applicable-policies__amount.sc-ir-applicable-policies,.applicable-policies__bracket-dates.sc-ir-applicable-policies{white-space:nowrap}.applicable-policies__statement-text.sc-ir-applicable-policies{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}}.ir-flip-rtl.sc-ir-applicable-policies:dir(rtl){scale:-1 1}`;

const IrApplicablePolicies = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.generatePayment = index.createEvent(this, "generatePayment");
    }
    booking;
    propertyId;
    language = 'en';
    cancellationStatements = [];
    isLoading = false;
    guaranteeAmount;
    generatePayment;
    shouldShowCancellationBrackets = true;
    applicablePoliciesService = new ApplicablePoliciesService(new booking_service.BookingService());
    componentWillLoad() {
        this.loadApplicablePolicies();
    }
    handleBookingChange() {
        this.loadApplicablePolicies();
    }
    async loadApplicablePolicies() {
        this.isLoading = true;
        try {
            this.applicablePoliciesService.booking = this.booking;
            const { cancellationStatements, guaranteeAmount } = await this.applicablePoliciesService.fetchGroupedApplicablePolicies({
                language: locale_controller.LocaleController.language,
            });
            this.guaranteeAmount = guaranteeAmount;
            this.cancellationStatements = [...cancellationStatements];
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    formatPreviousBracketDueOn(d1, d2) {
        if (d1.isSame(d2, 'year')) {
            return irDate.formatDate(d1, 'MMM DD');
        }
        return irDate.formatDate(d1, 'MMM DD, YYYY');
    }
    getBracketLabelsAndArrowState({ bracket, index, brackets, checkInDate }) {
        // Validate inputs
        if (!bracket || !brackets || index < 0 || index >= brackets.length) {
            return { leftLabel: null, rightLabel: null, showArrow: false };
        }
        // Parse dates with validation
        const bookedOnDate = moment.hooks(this.booking.booked_on.date, 'YYYY-MM-DD');
        const bracketDueDate = moment.hooks(bracket.due_on, 'YYYY-MM-DD');
        if (!bookedOnDate.isValid() || !bracketDueDate.isValid()) {
            console.warn('Invalid date encountered in getBracketLabelsAndArrowState');
            return { leftLabel: null, rightLabel: null, showArrow: false };
        }
        // Single bracket case
        if (brackets.length === 1) {
            return this.handleSingleBracket(bracketDueDate, checkInDate);
        }
        // Multiple brackets case
        const _brackets = this.handleMultipleBrackets(bracket, index, brackets, checkInDate);
        return _brackets;
    }
    handleSingleBracket(bracketDueDate, checkInDate) {
        const momentCheckInDate = moment.hooks(checkInDate, 'YYYY-MM-DD');
        if (bracketDueDate.isSame(momentCheckInDate, 'days')) {
            return {
                leftLabel: `${irDate.formatDate(momentCheckInDate, 'MMM DD')} onwards`,
                showArrow: false,
                rightLabel: '',
            };
        }
        return {
            leftLabel: irDate.formatDate(bracketDueDate, 'MMM DD'),
            showArrow: true,
            rightLabel: irDate.formatDate(checkInDate, 'MMM DD, YYYY'),
        };
    }
    handleMultipleBrackets(bracket, index, brackets, checkInDate) {
        const bracketDueDate = moment.hooks(bracket.due_on, 'YYYY-MM-DD');
        const momentCheckInDate = moment.hooks(checkInDate, 'YYYY-MM-DD');
        // First bracket
        if (index === 0) {
            const nextBracket = brackets[index + 1];
            if (!nextBracket) {
                return { leftLabel: null, rightLabel: null, showArrow: false };
            }
            let nextBracketDueDate = moment.hooks(nextBracket.due_on, 'YYYY-MM-DD');
            if (!nextBracketDueDate.isValid()) {
                return { leftLabel: null, rightLabel: null, showArrow: false };
            }
            if (bracket.amount === 0) {
                nextBracketDueDate = nextBracketDueDate.clone().add(-1, 'days');
            }
            return {
                leftLabel: t.t('Lcz_UntilLabel', { fallback: 'Until' }),
                showArrow: false,
                rightLabel: nextBracketDueDate.isSame(momentCheckInDate, 'dates')
                    ? irDate.formatDate(nextBracketDueDate.clone().add(-1, 'days'), 'MMM DD, YYYY')
                    : irDate.formatDate(nextBracketDueDate, 'MMM DD, YYYY'),
            };
        }
        if (moment.hooks(bracket.due_on, 'YYYY-MM-DD').isSameOrAfter(momentCheckInDate, 'days')) {
            return {
                leftLabel: `${irDate.formatDate(momentCheckInDate, 'MMM DD')} onwards`,
                showArrow: false,
                rightLabel: '',
            };
        }
        // Last bracket
        if (index === brackets.length - 1) {
            return {
                leftLabel: irDate.formatDate(bracketDueDate.clone(), 'MMM DD'),
                showArrow: true,
                rightLabel: irDate.formatDate(checkInDate, 'MMM DD, YYYY'),
            };
        }
        // Middle brackets
        const nextBracket = brackets[index + 1];
        if (!nextBracket) {
            return { leftLabel: null, rightLabel: null, showArrow: false };
        }
        const nextBracketDueDate = moment.hooks(nextBracket.due_on, 'YYYY-MM-DD');
        if (!nextBracketDueDate.isValid()) {
            return { leftLabel: null, rightLabel: null, showArrow: false };
        }
        // Calculate the end of current bracket period (day before next bracket starts)
        const periodEndDate = nextBracketDueDate.isAfter(momentCheckInDate, 'days') ? momentCheckInDate : nextBracketDueDate.clone();
        const haveSameDays = bracketDueDate.isSame(periodEndDate.clone().add(-1, 'days'), 'days');
        return {
            leftLabel: this.formatPreviousBracketDueOn(bracketDueDate, periodEndDate),
            showArrow: !haveSameDays,
            rightLabel: haveSameDays ? '' : irDate.formatDate(periodEndDate.add(-1, 'days'), 'MMM DD, YYYY'),
        };
    }
    generateCancellationStatement() {
        const label = t.t('Lcz_IfCancelledToday', { fallback: 'if cancelled today' });
        const { cancelation_penality_as_if_today } = this.booking.financial;
        if (cancelation_penality_as_if_today === 0) {
            if (this.booking.financial.collected > 0) {
                return t.t('Lcz_NoRefund', { fallback: 'No refund %1', params: [label] });
            }
            return t.t('Lcz_NoPaymentRequired', { fallback: 'No payment required %1', params: [label] });
        }
        return `${cancelation_penality_as_if_today < 0 ? t.t('Lcz_Refund', { fallback: 'Refund' }) : t.t('Lcz_Charge', { fallback: 'Charge' })} ${number.formatAmount(calendarData.calendar_data.currency.symbol, Math.abs(cancelation_penality_as_if_today))} ${label}`;
    }
    _getCurrentBracket(brackets) {
        if (!Array.isArray(brackets) || brackets.length === 0)
            return null;
        const today = moment.hooks().startOf('day');
        // Parse + validate + sort ascending by due_on
        const parsed = brackets
            .map(b => ({ b, date: moment.hooks(b.due_on, 'YYYY-MM-DD', true).startOf('day') }))
            .filter(x => x.date.isValid())
            .sort((a, b) => a.date.valueOf() - b.date.valueOf());
        if (parsed.length === 0)
            return null;
        // If today is before the first due date → return first bracket (closest upcoming)
        if (today.isBefore(parsed[0].date, 'day')) {
            return parsed[0].date;
        }
        // Find i such that date[i] <= today < date[i+1] → return date[i]
        for (let i = 0; i < parsed.length - 1; i++) {
            const cur = parsed[i].date;
            const next = parsed[i + 1].date;
            if (today.isSameOrAfter(cur, 'day') && today.isBefore(next, 'day')) {
                return cur;
            }
        }
        // If today is on/after the last due date → return last bracket
        return parsed[parsed.length - 1].date;
    }
    render() {
        if (this.isLoading) {
            return null;
        }
        const remainingGuaranteeAmount = this.booking.financial.collected - this.guaranteeAmount;
        return (index.h(index.Host, null, this.guaranteeAmount !== 0 && (index.h("section", null, index.h("wa-callout", { variant: "danger", class: "applicable-policies__guarantee" }, index.h("div", { class: "applicable-policies__guarantee-info" }, index.h("p", { class: "applicable-policies__guarantee-date" }, irDate.formatDate(this.booking.booked_on.date, 'MMM DD, YYYY')), index.h("p", { class: "applicable-policies__guarantee-amount" }, index.h("span", { class: "px-1" }, number.formatAmount(calendarData.calendar_data.currency.symbol, remainingGuaranteeAmount < 0 ? Math.abs(remainingGuaranteeAmount) : this.guaranteeAmount))), index.h("p", { class: "applicable-policies__guarantee-label" }, "Guarantee ", remainingGuaranteeAmount < 0 ? 'balance' : '')), remainingGuaranteeAmount < 0 && (index.h("div", { class: "applicable-policies__guarantee-action" }, index.h("ir-custom-button", { onClickHandler: () => {
                this.generatePayment.emit({
                    amount: Math.abs(remainingGuaranteeAmount),
                    currency: calendarData.calendar_data.currency,
                    due_on: moment.hooks().format('YYYY-MM-DD'),
                    pay_type_code: null,
                    reason: '',
                    type: 'OVERDUE',
                });
            }, size: "s" }, t.t('Lcz_Pay', { fallback: 'Pay' }))))))), index.h("section", null, index.h("div", { class: "applicable-policies__container" }, index.h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("p", { class: "applicable-policies__title font-size-large p-0 m-0" }, t.t('Lcz_CancellationSchedule', { fallback: 'Cancellation Schedule' })), index.h(HelpDocButton, { message: t.t('Lcz_HelpTooltip', { fallback: 'Help' }), href: "https://help.igloorooms.com/extranet/booking-details/guarantee-and-cancellation" })), index.h("p", { class: "applicable-policies__no-penalty" }, this.generateCancellationStatement())), this.cancellationStatements?.length > 0 && this.cancellationStatements.every(e => e.brackets.length > 0) && this.shouldShowCancellationBrackets && (index.h("wa-callout", { variant: "brand", class: "applicable-policies__statements" }, this.cancellationStatements?.map(statement => {
            const currentBracket = this._getCurrentBracket(statement.brackets);
            // const isTodaySameOrAfterCheckInDate = moment().isSameOrAfter(moment(statement.checkInDate, 'YYYY-MM-DD').add(1, 'days'));
            return (index.h("div", { class: "applicable-policies__statement" }, this.cancellationStatements.length > 1 && (index.h("p", { class: "applicable-policies__room" }, index.h("b", null, statement.roomType.name), " ", statement.ratePlan['short_name'], ' ', statement.ratePlan.is_non_refundable ? ` - ${t.t('Lcz_NonRefundable', { fallback: 'Non-refundable' })}` : '')), index.h("div", { class: "applicable-policies__brackets" }, statement.brackets.map((bracket, idx) => {
                const { leftLabel, rightLabel, showArrow } = this.getBracketLabelsAndArrowState({
                    index: idx,
                    bracket,
                    brackets: statement.brackets,
                    checkInDate: statement.checkInDate,
                });
                const isInCurrentBracket = moment.hooks(bracket.due_on, 'YYYY-MM-DD').isSame(currentBracket, 'date');
                return (index.h("div", { class: { 'applicable-policies__bracket': true, 'applicable-policies__highlighted-bracket': isInCurrentBracket } }, index.h("p", { class: "applicable-policies__bracket-dates" }, leftLabel, ' ', showArrow && index.h("ir-icons", { name: "arrow_right", class: "applicable-policies__icon ir-flip-rtl", style: { '--icon-size': '0.875rem' } }), ' ', rightLabel), index.h("p", { class: "applicable-policies__amount" }, number.formatAmount(calendarData.calendar_data.currency.symbol, bracket.gross_amount)), index.h("p", { class: "applicable-policies__statement-text" }, bracket.amount === 0 ? t.t('Lcz_NoPenalty', { fallback: 'No penalty' }) : bracket.statement)));
            })), index.h("div", { class: "applicable-policies__brackets-table" }, index.h("table", null, index.h("tbody", null, statement.brackets.map((bracket, idx) => {
                const { leftLabel, rightLabel, showArrow } = this.getBracketLabelsAndArrowState({
                    index: idx,
                    bracket,
                    brackets: statement.brackets,
                    checkInDate: statement.checkInDate,
                });
                const isInCurrentBracket = moment.hooks(bracket.due_on, 'YYYY-MM-DD').isSame(currentBracket, 'date');
                return (index.h("tr", { class: { 'applicable-policies__highlighted-bracket': isInCurrentBracket } }, index.h("td", { class: "applicable-policies__bracket-dates" }, leftLabel, ' ', showArrow && index.h("ir-icons", { name: "arrow_right", class: "applicable-policies__icon ir-flip-rtl", style: { '--icon-size': '0.875rem' } }), ' ', rightLabel), index.h("td", { class: "applicable-policies__amount px-1" }, number.formatAmount(calendarData.calendar_data.currency.symbol, bracket.gross_amount)), index.h("td", { class: "applicable-policies__statement-text" }, bracket.amount === 0 ? t.t('Lcz_NoPenalty', { fallback: 'No penalty' }) : bracket.statement)));
            }))))));
        }))))));
    }
    static get watchers() { return {
        "booking": [{
                "handleBookingChange": 0
            }]
    }; }
};
IrApplicablePolicies.style = irApplicablePoliciesCss();

const irArrivalTimeDialogCss = () => `.sc-ir-arrival-time-dialog-h{display:block}.ir-time-dialog__insight.sc-ir-arrival-time-dialog{padding:0.75rem 0.875rem;border-radius:0.75rem;background:var(--wa-color-brand-fill-quiet);border:1px solid var(--wa-color-brand-border-quiet);display:flex;flex-direction:column;gap:0.75rem}.ir-time-dialog__current-unit.sc-ir-arrival-time-dialog{display:flex;align-items:center;gap:var(--wa-space-xs)}.ir-time-dialog__body.sc-ir-arrival-time-dialog{display:flex;flex-direction:column;gap:var(--wa-space-m)}.ir-time-dialog__insight-row.sc-ir-arrival-time-dialog{display:flex;align-items:flex-start;gap:0.625rem}.ir-time-dialog__insight-icon.sc-ir-arrival-time-dialog{flex:0 0 auto;margin-top:0.15rem;font-size:0.9rem;color:var(--wa-color-brand-on-quiet)}.ir-time-dialog__insight-copy.sc-ir-arrival-time-dialog{flex:1 1 auto;min-width:0}.ir-time-dialog__insight-title.sc-ir-arrival-time-dialog{margin:0;font-size:0.8125rem;font-weight:600;letter-spacing:-0.01em;color:var(--wa-color-text-normal)}.ir-time-dialog__insight-subtitle.sc-ir-arrival-time-dialog{margin:0.125rem 0 0;font-size:0.75rem;line-height:1.4;color:var(--wa-color-text-quiet)}.ir-time-dialog__insight-row.sc-ir-arrival-time-dialog wa-switch.sc-ir-arrival-time-dialog{flex:0 0 auto;margin-top:0.1rem}`;

/** Service category code for an early-check-in extra service charge. */
const EARLY_CHECK_IN_CATEGORY_CODE = 'ECI';
/**
 * Hour-of-day (24h, hotel-local) each `_ARRIVAL_TIME` setup code represents.
 * These codes are fixed setup-table entries (not derivable from their label text alone,
 * e.g. "Noon"/"Midnight"), so the mapping is hardcoded here. '001' ("Not sure yet") has
 * no time of day and is intentionally omitted.
 */
const ARRIVAL_TIME_HOURS = {
    '002': 10, // 10 AM
    '003': 12, // Noon
    '004': 14, // 2 PM
    '005': 16, // 4 PM
    '006': 18, // 6 PM
    '007': 20, // 8 PM
    '008': 22, // 10 PM
    '009': 0, // Midnight
    '010': 2, // 2 AM
    '011': 4, // 4 AM
    '012': 6, // 6 AM
    '013': 8, // 8 AM
};
/**
 * Midnight/2 AM/4 AM ('009'-'011') fall on the calendar day *after* the arrival day — they're
 * late-night arrivals, not early-morning ones, so they can never count as an early check-in
 * even though their raw hour (0, 2, 4) is numerically less than the check-in start hour.
 */
const NEVER_EARLY_CHECK_IN_CODES = new Set(['009', '010', '011']);
const IrArrivalTimeDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.arrivalTimeClose = index.createEvent(this, "arrivalTimeClose");
    }
    /** Room whose expected arrival time is being changed. */
    room;
    /** Needed to look up whether this room already has an early-check-in extra service charge. */
    booking;
    /** Controls dialog visibility. */
    open;
    property_id;
    arrivalTime = [];
    language = 'en';
    /** Needed to create an early-check-in extra service charge alongside the arrival time. */
    booking_nbr;
    currency_id;
    currencySymbol;
    selectedValue = null;
    isLoading = false;
    createExtraService = true;
    extraServicePrice = null;
    /**
     * Fired when the dialog closes.
     * `saved: true` → arrival time was persisted; `saved: false` → user cancelled.
     */
    arrivalTimeClose;
    bookingService = new booking_service.BookingService();
    dialogRef;
    closedBySave = false;
    handleOpenChange(next) {
        if (next) {
            this.selectedValue = this.room?.arrival_time?.code ?? null;
            const existing = this.existingEarlyCheckInService;
            this.extraServicePrice = existing ? existing.price : Number(calendarData.getExtraServiceDefaultPrice('ECI'));
        }
    }
    /** The room's already-persisted early-check-in extra service charge, if any — its price becomes the field's default instead of the property's generic default. */
    get existingEarlyCheckInService() {
        return (this.booking?.extra_services ?? []).find(service => service.room_identifier === this.room?.identifier && service.category?.code === EARLY_CHECK_IN_CATEGORY_CODE);
    }
    /** Whether an arrival-time option (e.g. "10 AM") falls before the property's standard check-in start time, in hotel-local time. */
    isEarlyCheckIn(entry) {
        if (NEVER_EARLY_CHECK_IN_CODES.has(entry.CODE_NAME))
            return false;
        const hour = ARRIVAL_TIME_HOURS[entry.CODE_NAME];
        const checkInFrom = calendarData.calendar_data.property?.time_constraints?.check_in_from;
        const offset = calendarData.calendar_data.property?.city?.gmt_offset;
        const match = checkInFrom?.match(/^(\d{1,2}):(\d{2})$/);
        if (hour === undefined || !match || offset === undefined)
            return false;
        const [, checkInHour, checkInMinute] = match;
        const optionTime = booking.createDateWithOffsetAndHour(offset, hour, 0);
        const checkInTime = booking.createDateWithOffsetAndHour(offset, Number(checkInHour), Number(checkInMinute));
        return optionTime.getTime() < checkInTime.getTime();
    }
    /** Whether the currently selected arrival time is an early check-in. */
    get selectedIsEarlyCheckIn() {
        const entry = this.arrivalTime?.find(time => time.CODE_NAME === this.selectedValue);
        return entry ? this.isEarlyCheckIn(entry) : false;
    }
    async handleConfirm(e) {
        e.stopImmediatePropagation();
        if (!this.selectedValue)
            return;
        try {
            this.isLoading = true;
            await this.bookingService.setArrivalTime({
                property_id: this.property_id,
                code: this.selectedValue,
                room_identifier: this.room.identifier,
            });
            const existing = this.existingEarlyCheckInService;
            if (this.selectedIsEarlyCheckIn && this.createExtraService) {
                if (this.extraServicePrice) {
                    await this.bookingService.doBookingExtraService({
                        booking_nbr: this.booking_nbr,
                        is_remove: false,
                        service: {
                            ...existing,
                            category: { code: EARLY_CHECK_IN_CATEGORY_CODE },
                            price: this.extraServicePrice,
                            cost: null,
                            currency_id: this.currency_id,
                            room_identifier: this.room.identifier,
                            start_date: this.room.from_date,
                            end_date: null,
                            description: null,
                            agent: existing?.agent ?? null,
                        },
                    });
                }
                else if (existing) {
                    // Price cleared/zeroed on an existing charge — treat as removing the early-check-in extra service.
                    await this.bookingService.doBookingExtraService({
                        booking_nbr: this.booking_nbr,
                        is_remove: true,
                        service: existing,
                    });
                }
            }
            this.closedBySave = true;
            this.dialogRef?.closeModal();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (index.h("ir-dialog", { key: '9298d0696770463c3933fb611ffaa0dfa40a801e', open: this.open, label: t.t('Lcz_ExpectedArrivalTime', { fallback: 'Expected Arrival Time' }), ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.preventDefault();
                const saved = this.closedBySave;
                this.arrivalTimeClose.emit({ saved });
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closedBySave = false;
                this.selectedValue = null;
                this.createExtraService = true;
                this.extraServicePrice = null;
            } }, index.h("div", { key: 'a9a42877e7cef9e7078c1ccc71bf487757f9275b', class: 'ir-time-dialog__body' }, index.h("div", { key: 'c39f7ca262afc44ed8ff8a0853666273b7328527', class: 'ir-time-dialog__current-unit' }, index.h("span", { key: 'f3152bc70f00e63039273291affc6a0939187cd1' }, this.room?.roomtype?.name), " ", index.h("span", { key: '32d201269aa33818a21136540fbb6001345c8c8e' }, this.room?.rateplan?.short_name), " ", index.h("ir-unit-tag", { key: '46117a686cfe5e09239084a64e242ba02d86c352', unit: this.room?.unit?.name })), index.h("wa-select", { key: 'bcf7a5198f942fa60a82dfe9b0cc9aa9ea90900b', size: "s", placeholder: t.t('Lcz_NotProvided', { fallback: 'Not provided' }), value: this.selectedValue ?? '', "onwa-after-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, defaultValue: this.selectedValue ?? '', onchange: e => (this.selectedValue = e.target.value) }, this.arrivalTime?.map(time => (index.h("wa-option", { key: time.CODE_NAME, value: time.CODE_NAME }, time[`CODE_VALUE_${this.language?.toUpperCase()}`] ?? time[`CODE_VALUE_EN`], this.isEarlyCheckIn(time) ? t.t('Lcz_EarlyCheckInSuffix', { fallback: ' (Early check-in)' }) : '')))), this.selectedIsEarlyCheckIn && (index.h("div", { key: '25a3e709928c2602c41d93ee82b9681d129eb636', class: "ir-time-dialog__insight" }, index.h("div", { key: 'b49134f2cbf22cbf6b958762deeada0b95d1f773', class: "ir-time-dialog__insight-row" }, index.h("wa-icon", { key: '1acbd5e10a546d9795051d1a62a669fa7eca0f0c', class: "ir-time-dialog__insight-icon", name: "clock" }), index.h("div", { key: '1e6416562e78c46d25276fa0168d7cac07e95d7d', class: "ir-time-dialog__insight-copy" }, index.h("p", { key: '628a7e71d25be3a2f78009dce68d87d2bc3a748b', class: "ir-time-dialog__insight-title" }, t.t('Lcz_ChargeAsEarlyCheckInQuestion', { fallback: 'Would you like to charge it as an Early Check-in?' })), index.h("p", { key: 'c5838df56bed5431b8d7c0950105ba37048dbf6e', class: "ir-time-dialog__insight-subtitle" }, t.t('Lcz_AddedAsAccommodationExtraServiceHint', { fallback: 'This will be added as an accommodation extra service' })))), this.createExtraService && (index.h("div", { key: '15390964ce9de630dd6d016eb0b78b4af33915b5', class: "ir-time-dialog__insight-price" }, index.h("ir-validator", { key: '95814a768a6b5ff683f25d022e9dfc7defa8bbb6', value: this.extraServicePrice, schema: booking_dto.ExtraServiceSchema.shape.price }, index.h("ir-input", { key: '5b4e93d587bb56c72450487ea6fa3291d8896cbb', "onText-change": e => (this.extraServicePrice = Number(e.detail)), defaultValue: this.extraServicePrice?.toString(), value: this.extraServicePrice?.toString(), mask: 'price', withClear: true, type: "text" }, index.h("span", { key: '47dc05371178058702ea49c9d7dd9c686ec4fea1', slot: "start" }, this.currencySymbol)))))))), index.h("div", { key: '5f9c0c953bdda56bd94250841239b8b9f8c8d045', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '65aece8dc6fc03e7eed5fad40aa59637b4f677d3', size: "m", variant: "neutral", appearance: "filled", "data-dialog": "close" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '488c3f52af7a4bd4a0f1546a1b2077da056c8eec', size: "m", variant: "brand", loading: this.isLoading, disabled: !this.selectedValue, onClickHandler: e => this.handleConfirm(e), appearance: "accent" }, t.t('Lcz_Save', { fallback: 'Save' })))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrArrivalTimeDialog.style = irArrivalTimeDialogCss();

const irBillingCss = () => `.sc-ir-billing-h{display:flex;flex-direction:column;height:100%}`;

const IrBilling = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.billingClose = index.createEvent(this, "billingClose");
    }
    get el() { return index.getElement(this); }
    booking;
    isAllServicesAgentOwned;
    agent;
    async handleBookingChange() {
        this.isAgentMode = functions.isAgentMode(this.agent);
        this.setTabGroupActive();
    }
    isAgentMode = false;
    currentTab;
    billingClose;
    componentWillLoad() {
        this.isAgentMode = functions.isAgentMode(this.agent);
    }
    componentDidLoad() {
        this.setTabGroupActive();
    }
    setTabGroupActive() {
        requestAnimationFrame(() => {
            if (this.isAgentMode) {
                this.currentTab = 'agent';
            }
        });
    }
    render() {
        if (this.isAgentMode) {
            return (index.h("wa-tab-group", { activation: "manual", "onwa-tab-show": e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.currentTab = e.detail.name.toString();
                }, active: this.currentTab }, index.h("wa-tab", { panel: "guest", disabled: this.isAllServicesAgentOwned }, t.t('Lcz_Guest', { fallback: 'Guest' })), index.h("wa-tab", { panel: "agent" }, t.t('Lcz_Agent', { fallback: 'Agent' })), index.h("wa-tab-panel", { name: "guest" }, this.currentTab === 'guest' && index.h("ir-guest-billing", { booking: this.booking })), index.h("wa-tab-panel", { name: "agent" }, this.currentTab === 'agent' && index.h("ir-agent-billing", { booking: this.booking }))));
        }
        return index.h("ir-guest-billing", { booking: this.booking });
    }
    static get watchers() { return {
        "agent": [{
                "handleBookingChange": 0
            }]
    }; }
};
IrBilling.style = irBillingCss();

const irBillingDrawerCss = () => `.sc-ir-billing-drawer-h{display:block}.billing__drawer.sc-ir-billing-drawer::part(footer),.billing__drawer.sc-ir-billing-drawer [part~="footer"]{display:none}`;

const IrBillingDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.billingClose = index.createEvent(this, "billingClose");
    }
    /**
     * Controls whether the billing drawer is open or closed.
     *
     * When `true`, the drawer becomes visible.
     * When `false`, it is hidden.
     *
     * This prop is reflected to the host element.
     *
     * @type {boolean}
     */
    open;
    /**
     * The booking object containing reservation and guest details
     * that will be used to populate the billing view.
     *
     * @type {Booking}
     */
    booking;
    agent;
    isAllServicesAgentOwned;
    /**
     * Emitted when the billing drawer has been closed.
     *
     * Listen to this event to respond to drawer close actions.
     *
     * @event billingClose
     */
    billingClose;
    render() {
        return (index.h("ir-drawer", { key: '1fd565f4b4b92922c7208ed3a0ccba210c6ae5f0', style: {
                '--ir-drawer-width': '70rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': '0',
                '--ir-drawer-padding-right': '0',
                '--ir-drawer-padding-top': this.agent ? '0' : 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, class: "billing__drawer", onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.billingClose.emit();
            }, open: this.open, label: t.t('Lcz_Billing', { fallback: 'Billing' }) }, this.open && index.h("ir-billing", { key: '21a6a4a7e35696c14e2833611411bfa4bbe57720', isAllServicesAgentOwned: this.isAllServicesAgentOwned, booking: this.booking, agent: this.agent })));
    }
};
IrBillingDrawer.style = irBillingDrawerCss();

const irBookingAssignItemsCss = () => `@layer wa-utilities{.sc-ir-booking-assign-items-h[size='xs'],.wa-size-xs{font-size:var(--wa-font-size-xs)}.sc-ir-booking-assign-items-h[size='s'],.wa-size-s{font-size:var(--wa-font-size-s)}.sc-ir-booking-assign-items-h[size='m'],.wa-size-m{font-size:var(--wa-font-size-m)}.sc-ir-booking-assign-items-h[size='l'],.wa-size-l{font-size:var(--wa-font-size-l)}.sc-ir-booking-assign-items-h[size='xl'],.wa-size-xl{font-size:var(--wa-font-size-xl)}}.sc-ir-booking-assign-items-h{display:block}.assign-container.sc-ir-booking-assign-items{display:flex;flex-direction:column;gap:1.25rem;margin-top:1rem}.assign-intro.sc-ir-booking-assign-items{font-size:0.875rem;color:var(--wa-color-neutral-600, #6b7280);margin:0;line-height:1.5}.assign-intro.sc-ir-booking-assign-items strong.sc-ir-booking-assign-items{color:var(--wa-color-neutral-900, #111827);font-weight:600}.assign-section.sc-ir-booking-assign-items{display:flex;flex-direction:column;gap:0.5rem}.assign-section__label.sc-ir-booking-assign-items{display:inline-block;position:relative;margin:0;padding:0;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height);margin-block-start:0.5em}.assign-item.sc-ir-booking-assign-items{display:flex;align-items:center;gap:0.75rem;padding:0.625rem 0.875rem;border-radius:var(--wa-border-radius-m);border:var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);cursor:pointer;user-select:none;transition:background-color 0.12s ease,     border-color 0.12s ease,     box-shadow 0.12s ease;background-color:var(--wa-color-surface-default)}.assign-item.sc-ir-booking-assign-items:hover{background-color:color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover))}.assign-item.sc-ir-booking-assign-items:focus-visible{outline:2px solid var(--wa-color-brand-border-loud, #60a5fa);outline-offset:1px}.assign-item--checked.sc-ir-booking-assign-items{border-color:var(--wa-color-brand-border-loud, #60a5fa);background-color:var(--wa-color-brand-fill-quiet, #eff6ff)}.assign-item--checked.sc-ir-booking-assign-items:hover{background-color:var(--wa-color-brand-fill-quiet, #eff6ff)}.assign-item__text.sc-ir-booking-assign-items{display:flex;flex-direction:column;gap:0.125rem;min-width:0}.assign-item__label.sc-ir-booking-assign-items{font-size:0.875rem;font-weight:500;color:var(--wa-color-neutral-900, #111827);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.assign-item__sublabel.sc-ir-booking-assign-items{font-size:0.75rem;color:var(--wa-color-neutral-500, #6b7280)}.assign-item__room-header.sc-ir-booking-assign-items{display:flex;align-items:center;flex-wrap:wrap;gap:0.375rem}.assign-item__rateplan.sc-ir-booking-assign-items{font-size:0.8125rem;color:var(--wa-color-neutral-600, #6b7280)}.assign-item__badge.sc-ir-booking-assign-items{display:inline-flex;align-items:center;font-size:0.6875rem;font-weight:600;padding:0.125rem 0.4375rem;border-radius:var(--wa-border-radius-pill, 9999px)}.assign-item__badge--nr.sc-ir-booking-assign-items{background-color:var(--wa-color-danger-fill-quiet, #fef2f2);color:var(--wa-color-danger-on-quiet, #b91c1c);border:1px solid var(--wa-color-danger-border-quiet, #fecaca)}.assign-item__date.sc-ir-booking-assign-items{font-size:0.75rem;color:var(--wa-color-neutral-500, #6b7280);margin-top:0.125rem}`;

const IrBookingAssignItems = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bookingSelectionChange = index.createEvent(this, "bookingSelectionChange");
    }
    items = [];
    checkedItems = new Set();
    bookingSelectionChange;
    toggleItem(key) {
        const updated = new Set(this.checkedItems);
        if (updated.has(key)) {
            updated.delete(key);
        }
        else {
            updated.add(key);
        }
        this.checkedItems = updated;
        this.bookingSelectionChange.emit(this.checkedItems);
    }
    renderRoomItem(item) {
        const checked = this.checkedItems.has(item.key);
        return (index.h("div", { key: item.key, class: { 'assign-item': true, 'assign-item--checked': checked }, onClick: e => {
                if (!e.target.closest('wa-checkbox')) {
                    this.toggleItem(item.key);
                }
            } }, index.h("wa-checkbox", { checked: checked, onchange: () => this.toggleItem(item.key) }), index.h("div", { class: "assign-item__text" }, index.h("div", { class: "assign-item__room-header" }, index.h("span", { class: "assign-item__label" }, item.label), item.ratePlanShortName && index.h("span", { class: "assign-item__rateplan" }, item.ratePlanShortName), item.unitName && index.h("ir-unit-tag", { unit: item.unitName }), item.isNonRefundable && index.h("span", { class: "assign-item__badge assign-item__badge--nr" }, t.t('Lcz_NonRefundable', { fallback: 'Non-refundable' }))), item.fromDate && item.toDate && (index.h("ir-date-view", { class: "assign-item__date", format: "weekday-medium", from_date: item.fromDate, to_date: item.toDate, showDateDifference: false })))));
    }
    renderCheckItem(item) {
        const checked = this.checkedItems.has(item.key);
        return (index.h("div", { key: item.key, class: { 'assign-item': true, 'assign-item--checked': checked }, onClick: e => {
                if (!e.target.closest('wa-checkbox')) {
                    this.toggleItem(item.key);
                }
            } }, index.h("wa-checkbox", { defaultChecked: checked, checked: checked, onchange: () => this.toggleItem(item.key) }), index.h("div", { class: "assign-item__text" }, index.h("span", { class: "assign-item__label" }, item.label))));
    }
    renderExtraItem(item) {
        const checked = this.checkedItems.has(item.key);
        return (index.h("div", { key: item.key, class: { 'assign-item': true, 'assign-item--checked': checked }, onClick: e => {
                if (!e.target.closest('wa-checkbox')) {
                    this.toggleItem(item.key);
                }
            } }, index.h("wa-checkbox", { defaultChecked: checked, checked: checked, onchange: () => {
                this.toggleItem(item.key);
            } }), index.h("div", { class: "assign-item__text" }, index.h("div", { class: "assign-item__room-header" }, index.h("span", { class: "assign-item__label" }, item.label), item.price != null && item.price > 0 && index.h("span", { class: "assign-item__rateplan" }, number.formatAmount(item.currencySymbol, item.price))), item.fromDate && (index.h("ir-date-view", { class: "assign-item__date", format: "weekday-medium", from_date: item.fromDate, to_date: item.toDate, showDateDifference: false })))));
    }
    render() {
        const rooms = this.items.filter(i => i.type === 'room');
        const pickups = this.items.filter(i => i.type === 'pickup');
        const extras = this.items.filter(i => i.type === 'extra');
        return (index.h(index.Host, { key: '9e0ae1c253d110efa2410fa70aeccd6a74fbe6c7', size: "s" }, index.h("div", { key: '01e5150863121f78de52eead70e8ca9ea7705a34', class: "assign-container" }, index.h("p", { key: 'fe7d230c28c6d29621475f529aca71921779f4a2', class: "assign-intro" }, t.t('Lcz_AssignItemsIntro', { fallback: 'Select services for the Agent folio; others remain on the Guest folio.' })), rooms.length > 0 && (index.h("div", { key: '02c526b2f112a0f82ad20cc5200617e821b625c4', class: "assign-section" }, index.h("p", { key: 'a209fd3e7e0dbb06bc2bf679f381ef9400afec1c', class: "assign-section__label" }, t.t('Lcz_Accommodation', { fallback: 'Accommodation' })), rooms.map(item => this.renderRoomItem(item)))), pickups.length > 0 && (index.h("div", { key: '5054e2fb6e50048fdbdeb0fec1fbe84b011012fd', class: "assign-section" }, index.h("p", { key: '09cfd61ccd85dd13951fa191fa1ab57de803ddc6', class: "assign-section__label" }, t.t('Lcz_Pickup', { fallback: 'Pickup' })), pickups.map(item => this.renderCheckItem(item)))), extras.length > 0 && (index.h("div", { key: '1e7ff463c22ec64211c190f02d49d7768b9d0edc', class: "assign-section" }, index.h("p", { key: 'a13ec98eac10e797273f608a2053a038f3c8a4c3', class: "assign-section__label" }, t.t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' })), extras.map(item => this.renderExtraItem(item)))))));
    }
};
IrBookingAssignItems.style = irBookingAssignItemsCss();

const irBookingCityLedgerCss = () => `.sc-ir-booking-city-ledger-h{display:block;width:100%;min-width:0;--item-vertical-padding:var(--wa-space-xs, 0.5rem);--item-inline-padding:var(--wa-space-l, 1.5rem);--folio-row-city-tax-gap:var(--wa-space-2xs, 0.25rem)}.booking-city-ledger__card.sc-ir-booking-city-ledger{width:100%;background-color:var(--wa-color-surface-default)}.booking-city-ledger__card.sc-ir-booking-city-ledger::part(body),.booking-city-ledger__card.sc-ir-booking-city-ledger [part~="body"]{padding:0;padding-bottom:calc(1.5rem - var(--item-vertical-padding));padding-top:0}.booking-city-ledger__header-title.sc-ir-booking-city-ledger{display:flex;align-items:center;gap:var(--wa-space-xs)}.booking-city-ledger__agent-name.sc-ir-booking-city-ledger{font-weight:400;color:var(--wa-color-neutral-600, #6b7280);font-size:var(--wa-font-size-s, 0.8125rem)}.booking-city-ledger__spinner-wrap.sc-ir-booking-city-ledger{display:flex;justify-content:center;align-items:center;padding:2rem 1rem}.booking-city-ledger__empty-state.sc-ir-booking-city-ledger{padding:1.5rem}.booking-city-ledger__error.sc-ir-booking-city-ledger{margin:0;padding:1rem;text-align:center;font-size:0.875rem;color:var(--wa-color-danger-600, #dc2626)}.folio-list.sc-ir-booking-city-ledger{display:flex;flex-direction:column}.folio-row.sc-ir-booking-city-ledger{padding:var(--item-vertical-padding) var(--item-inline-padding);border-bottom:1px solid var(--wa-color-surface-border, #f4f4f5)}.folio-row.sc-ir-booking-city-ledger:last-child{border-bottom:none}.folio-row__header.sc-ir-booking-city-ledger{display:flex;justify-content:space-between;align-items:center;gap:var(--wa-space-xs)}.folio-row__meta.sc-ir-booking-city-ledger,.folio-row-desc_row.sc-ir-booking-city-ledger{display:flex;align-items:center;gap:var(--wa-space-xs);flex-wrap:wrap;min-width:0}.folio-row-desc_row.sc-ir-booking-city-ledger{justify-content:space-between}.folio-row__date.sc-ir-booking-city-ledger{font-size:0.857rem;white-space:nowrap;font-variant-numeric:tabular-nums}.folio-row__right.sc-ir-booking-city-ledger{display:flex;align-items:center;gap:var(--folio-row-city-tax-gap);flex-shrink:0}.folio-row__amount.sc-ir-booking-city-ledger{font-size:1rem;font-weight:600;white-space:nowrap}.folio-row__desc.sc-ir-booking-city-ledger{margin:0.3rem 0 0;font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet, #27272a);line-height:1.4;word-break:break-word}.folio-row__action-trigger-icon.sc-ir-booking-city-ledger{font-size:1rem}.folio-row__action-trigger.sc-ir-booking-city-ledger::part(base),.folio-row__action-trigger.sc-ir-booking-city-ledger [part~="base"]{height:auto;width:var(--wa-space-xs)}.folio-row__city-tax.sc-ir-booking-city-ledger{display:flex;align-items:center;gap:var(--folio-row-city-tax-gap);margin-top:0.25rem;font-size:0.857rem;color:var(--wa-color-neutral-500, #71717a)}.is-debit.sc-ir-booking-city-ledger{color:var(--wa-color-danger-fill-loud);font-weight:700}.is-credit.sc-ir-booking-city-ledger{color:var(--wa-color-success-fill-loud);font-weight:700}.folio-row.--without-dropdown.sc-ir-booking-city-ledger{padding-inline-end:calc(var(--folio-row-city-tax-gap) + var(--wa-space-xs) + var(--wa-form-control-padding-inline) + var(--item-inline-padding))}`;

const IrBookingCityLedger = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    cityLedgerService = new index$1.CityLedgerService();
    /** Booking object; component is hidden when booking.agent is null. */
    booking;
    /** Active language code. */
    language = 'en';
    /** Service-category entries used to populate the transaction form. */
    svcCategories = [];
    /** Folio rows fetched by the parent. */
    folioRows = [];
    /** Loading state driven by the parent fetch. */
    isLoading = false;
    /** Error message driven by the parent fetch. */
    error = null;
    /** Emitted when a mutation (delete / save) completes so the parent can re-fetch. */
    // @Event({ bubbles: true }) clRefreshNeeded: EventEmitter<void>;
    drawerOpen = false;
    deleteTarget = null;
    isDeleting = false;
    editingRow = null;
    async handleDelete() {
        const row = this.deleteTarget;
        if (!row)
            return;
        this.isDeleting = true;
        try {
            await this.cityLedgerService.issueManualCLTx({
                CL_TX_ID: row._raw.CL_TX_ID,
                AGENCY_ID: this.booking.agent.id,
                SERVICE_DATE: row._raw.SERVICE_DATE,
                CL_TX_TYPE_CODE: row._raw.CL_TX_TYPE_CODE ?? '',
                DESCRIPTION: row._raw.DESCRIPTION,
                DEBIT: row._raw.DEBIT,
                CREDIT: row._raw.CREDIT,
                CURRENCY_ID: row._raw.CURRENCY_ID,
                PAY_METHOD_CODE: row._raw.PAY_METHOD_CODE ?? '',
                EXTERNAL_REF: row._raw.EXTERNAL_REF ?? '',
                IS_DELETE: true,
            });
            this.deleteTarget = null;
            // this.clRefreshNeeded.emit();
        }
        catch (err) {
            console.error('[ir-booking-city-ledger] delete failed:', err);
        }
        finally {
            this.isDeleting = false;
        }
    }
    get serviceCategoryOptions() {
        return this.svcCategories.map(s => ({ id: s.CODE_NAME, label: s.CODE_VALUE_EN }));
    }
    get bookingOptions() {
        // `id` stays the raw booking number — it is the option's identity; only `label` is displayed.
        return this.booking?.booking_nbr ? [{ id: this.booking.booking_nbr, label: `#${number.formatBookingNumber(this.booking.booking_nbr)}` }] : [];
    }
    formatAmount(value) {
        if (!value)
            return '—';
        return number.formatAmount(calendarData.calendar_data.property?.currency?.symbol, value);
    }
    rowHiddenCategories = new Set(['TBL_BSAD', 'TBL_BSP', 'TBL_BSE']);
    get rows() {
        return this.folioRows?.filter(r => !this.rowHiddenCategories.has(r._raw.REL_ENTITY)) ?? [];
    }
    renderRows() {
        if (this.rows.length === 0) {
            return (index.h("div", { class: "booking-city-ledger__empty-state" }, index.h("ir-empty-state", { showIcon: false })));
        }
        return (index.h("div", { class: "folio-list" }, this.rows.map(row => {
            const showDropdown = row.status.id !== 'billed' && row._raw.CATEGORY === null && cityLedger_service.actionableClTypes.has(row._raw.CL_TX_TYPE_CODE);
            return (index.h("div", { key: row._rowId, class: { 'folio-row': true, '--without-dropdown': !showDropdown } }, index.h("div", { class: "folio-row__header" }, index.h("div", { class: "folio-row__meta" }, index.h("span", { class: "folio-row__date" }, irDate.formatDate(row.serviceDate, 'MMM DD, YYYY'))), index.h("div", { class: "folio-row__right" }, index.h("span", { class: "folio-row__amount" }, row.debit !== null && index.h("span", { class: "is-debit" }, row.debit ? this.formatAmount(row.debit) : ''), row.credit !== null && index.h("span", { class: "is-credit" }, row.credit ? this.formatAmount(row.credit) : '')), showDropdown && (index.h("wa-dropdown", { "onwa-hide": e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                }, "onwa-select": e => {
                    switch (e.detail.item.value) {
                        case 'edit':
                            this.editingRow = row;
                            this.drawerOpen = true;
                            break;
                        case 'delete':
                            this.deleteTarget = row;
                            break;
                    }
                } }, index.h("wa-button", { size: "s", class: "folio-row__action-trigger", appearance: "plain", slot: "trigger" }, index.h("wa-icon", { name: "ellipsis-vertical", class: "folio-row__action-trigger-icon" })), index.h("wa-dropdown-item", { value: "edit" }, index.h("wa-icon", { slot: "icon", name: "edit" }), t.t('Lcz_Edit', { fallback: 'Edit' })), index.h("wa-dropdown-item", { value: "delete", variant: "danger" }, index.h("wa-icon", { slot: "icon", name: "trash" }), t.t('Lcz_Delete', { fallback: 'Delete' })))))), index.h("div", { class: 'folio-row-desc_row' }, row.description && index.h("p", { class: "folio-row__desc" }, row.description), index.h("ir-cl-status-tag", { style: { marginInlineEnd: showDropdown ? '1.9rem' : '0' }, transaction: { _rowId: '', ...cityLedger_service.mapClTxToFolioRow(row._raw), balance: 0 } }))));
        })));
    }
    render() {
        if (!this.booking?.agent) {
            return index.h(index.Host, null);
        }
        return (index.h(index.Host, null, index.h("wa-card", { appearance: "plain", class: "booking-city-ledger__card" }, index.h("div", { slot: "header", class: "booking-city-ledger__header-title" }, index.h("p", { class: "font-size-large p-0 m-0" }, t.t('Lcz_AgentFolio', { fallback: 'Agent Folio' }))), index.h("wa-tooltip", { for: "booking-city-ledger-add-btn" }, t.t('Lcz_AddFolioEntry', { fallback: 'Add folio entry' })), index.h("ir-custom-button", { slot: "header-actions", id: "booking-city-ledger-add-btn", size: "s", variant: "neutral", appearance: "plain", onClickHandler: () => {
                this.editingRow = null;
                this.drawerOpen = true;
            } }, index.h("wa-icon", { name: "plus", style: { fontSize: '1rem' } })), this.isLoading ? (index.h("div", { class: "booking-city-ledger__spinner-wrap" }, index.h("ir-spinner", null))) : this.error ? (index.h("p", { class: "booking-city-ledger__error" }, this.error)) : (this.renderRows())), index.h("ir-city-ledger-transaction-drawer", { open: this.drawerOpen, drawerLabel: this.editingRow ? t.t('Lcz_EditFolioEntry', { fallback: 'Edit Folio Entry' }) : t.t('Lcz_NewFolioEntry', { fallback: 'New Folio Entry' }), agent: this.booking.agent, booking: this.booking, transaction: this.editingRow?._raw ?? null, serviceCategoryOptions: this.serviceCategoryOptions, bookingOptions: this.bookingOptions, onCloseDrawer: () => {
                this.drawerOpen = false;
                this.editingRow = null;
            }, onTransactionSaved: () => {
                this.drawerOpen = false;
                this.editingRow = null;
                // this.clRefreshNeeded.emit();
            } }), index.h("ir-dialog", { label: t.t('Lcz_DeleteEntry', { fallback: 'Delete Entry' }), open: !!this.deleteTarget, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!this.isDeleting)
                    this.deleteTarget = null;
            } }, index.h("p", null, t.t('Lcz_ConfirmDeleteFolioEntry', { fallback: 'Are you sure you want to delete this entry? This action cannot be undone.' })), index.h("div", { slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => (this.deleteTarget = null) }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { size: "m", variant: "danger", loading: this.isDeleting, onClickHandler: () => this.handleDelete() }, t.t('Lcz_Delete', { fallback: 'Delete' }))))));
    }
};
IrBookingCityLedger.style = irBookingCityLedgerCss();

const irBookingDetailsCss = () => `.sc-ir-booking-details-h{overflow-x:hidden;--ir-dialog-max-width:20rem;text-align:start;padding:var(--wa-space-l);position:relative;height:100%}.sc-ir-booking-details-h *.sc-ir-booking-details{box-sizing:border-box}.font-medium.sc-ir-booking-details{font-weight:600}.sc-ir-booking-details-h th.sc-ir-booking-details{font-weight:600}.booking-details__booking-info.sc-ir-booking-details{display:grid;padding:var(--wa-space-m);gap:var(--wa-space-l)}.booking-details__info-column.sc-ir-booking-details{display:flex;flex-direction:column;gap:var(--wa-space-l);min-width:0}@media (min-width: 890px){.booking-details__booking-info.sc-ir-booking-details{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 1024px){.booking-details__booking-info.sc-ir-booking-details{gap:var(--wa-space-xl)}}.h-28.sc-ir-booking-details{height:2rem}.mx-01.sc-ir-booking-details{--m:5px;margin-inline-end:var(--m) !important;margin-inline-start:var(--m) !important}.date-margin.sc-ir-booking-details{margin-inline-end:5px}.pickup-margin.sc-ir-booking-details{margin-bottom:7px !important}.header-date.sc-ir-booking-details{padding-inline-start:5px !important}.pointer.sc-ir-booking-details{cursor:pointer}.sc-ir-booking-details:root{--sidebar-width:50rem}.loading-container.sc-ir-booking-details{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.sm-padding-right.sc-ir-booking-details{padding-inline-end:0.2rem}.sm-padding-left.sc-ir-booking-details{padding-inline-start:0.2rem}.sm-padding-top.sc-ir-booking-details{padding-top:0.2rem}.sm-padding-bottom.sc-ir-booking-details{padding-bottom:0.2rem}.info-notes.sc-ir-booking-details{list-style:none;padding-inline-start:0}.light-blue-bg.sc-ir-booking-details{background-color:#acecff;padding:0.2rem 0.3rem}.iframeHeight.sc-ir-booking-details{height:17.5rem}.dialog-title.sc-ir-booking-details{width:fit-content}`;

const IrBookingDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bookingChanged = index.createEvent(this, "bookingChanged");
        this.closeSidebar = index.createEvent(this, "closeSidebar");
    }
    bookingService = new booking_service.BookingService();
    setupService = new index$2.SetupService();
    roomService = new room_service.RoomService();
    paymentService = new payment_service.PaymentService();
    agentService = new agents_service.AgentsService();
    cityLedgerService = new index$1.CityLedgerService();
    unsubscribeRealtime = null;
    clLockingPending = new Map();
    clLockingTimer = null;
    ApiClient = new ApiClient.ApiClient();
    arrivalTime;
    svcCategories;
    printingBaseUrl = 'https://gateway.igloorooms.com/PrintBooking/%1/printing/fd?id=%2';
    // private printingBaseUrl = 'http://localhost:5863/%1/printing?id=%2';
    modalRef;
    paymentFolioRef;
    get element() { return index.getElement(this); }
    bedPreference;
    booking;
    bookingItem = null;
    calendarData = {};
    countries;
    departureTime;
    guestData = null;
    isPMSLogLoading = false;
    isUpdateClicked = false;
    modalState = null;
    paymentActions;
    paymentEntries;
    pms_status;
    property_id;
    rerenderFlag = false;
    roomGuest;
    selectedService;
    extraServiceDefaultPrId = null;
    showPaymentDetails;
    sidebarPayload;
    sidebarState = null;
    splitIndex;
    statusData = [];
    agent;
    isLoading = true;
    folioRows = [];
    rawTransactions = [];
    clLoading = false;
    clError = null;
    agents = [];
    /**
     * Booking number used to fetch booking details.
     */
    bookingNumber = '';
    /**
     * Enables the check-in action in room components.
     */
    hasCheckIn = false;
    /**
     * Enables the check-out action in room components.
     */
    hasCheckOut = false;
    /**
     * When set, the room matching this identifier auto-opens its check-out dialog once the
     * booking has loaded. Used to route early check-outs triggered from other screens
     * (departures list, calendar) through the full booking details.
     */
    checkoutRoomIdentifier;
    /**
     * Displays the close button in the booking header.
     */
    hasCloseButton = false;
    /**
     * Enables the delete booking action.
     */
    hasDelete = false;
    /**
     * Displays the navigation menu button.
     */
    hasMenu = false;
    /**
     * Enables the print booking option.
     */
    hasPrint = false;
    /**
     * Enables the receipt action in the booking header.
     */
    hasReceipt = false;
    /**
     * Allows adding new rooms to the booking.
     */
    hasRoomAdd = false;
    /**
     * Allows deleting rooms from the booking.
     */
    hasRoomDelete = false;
    /**
     * Allows editing existing rooms in the booking.
     */
    hasRoomEdit = false;
    /**
     * Indicates whether the component is rendered from the front desk context.
     * Disables interceptor and toast rendering when true.
     */
    is_from_front_desk = false;
    /**
     * Active language code used for translations and API requests.
     * Defaults to 'en'.
     */
    language = 'en';
    /**
     * Property alias or account name used when fetching exposed property data.
     */
    p;
    /**
     * Property ID used to retrieve property-specific configuration.
     */
    propertyid;
    /**
     * Authentication ApiClient used to initialize the component.
     * Triggers re-initialization when changed.
     */
    ticket = '';
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.ApiClient.setApiClient(this.ticket);
        this.initializeApp();
    }
    /**
     * Emitted whenever the booking object is updated.
     * Used to notify parent components about booking state changes.
     */
    bookingChanged;
    /**
     * Emitted when the sidebar should be closed.
     * Typically triggered by header actions (e.g., close button).
     */
    closeSidebar;
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.bookingDetails, () => this.initializeApp());
    componentWillLoad() {
        if (this.ticket !== '') {
            this.ApiClient.setApiClient(this.ticket);
            this.initializeApp();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.unsubscribeRealtime?.();
        this.unsubscribeRealtime = null;
        if (this.clLockingTimer !== null) {
            clearTimeout(this.clLockingTimer);
            this.clLockingTimer = null;
        }
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    handleSideBarEvents(e) {
        this.sidebarState = e.detail.type;
        this.sidebarPayload = e.detail.payload;
        if (this.sidebarState === 'payment-folio') {
            this.paymentFolioRef.openFolio();
        }
    }
    handleIconClick(e) {
        const target = e.target;
        switch (target.id) {
            case 'pickup':
                this.sidebarState = 'pickup';
                return;
            case 'close':
                this.closeSidebar.emit(null);
                return;
            case 'email':
                this.modalState = {
                    type: 'email',
                    message: t.t('Lcz_EmailBookingto', { params: [this.booking.guest.email] }),
                    loading: irInterceptor_store.isRequestPending('/Send_Booking_Confirmation_Email'),
                };
                this.modalRef.openModal();
                return;
            case 'print':
                this.openPrintingScreen({ mode: 'printing' });
                return;
            case 'invoice':
                // this.openPrintingScreen({ mode: 'invoice' });
                this.sidebarState = 'invoice';
                return;
            case 'book-delete':
                return;
            case 'menu':
                window.history.back();
                // window.location.href = 'https://x.igloorooms.com/manage/acbookinglist.aspx';
                return;
            case 'room-add':
                this.bookingItem = {
                    ID: '',
                    NAME: this.booking.guest.last_name,
                    EMAIL: this.booking.guest.email,
                    PHONE: this.booking.guest.mobile,
                    REFERENCE_TYPE: '',
                    FROM_DATE: this.booking.from_date,
                    ARRIVAL: this.booking.arrival,
                    TO_DATE: this.booking.is_room_less ? moment.hooks(this.booking.to_date, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD') : this.booking.to_date,
                    TITLE: `${t.t('Lcz_AddingUnitToBooking')}# ${number.formatBookingNumber(this.booking.booking_nbr)}`,
                    defaultDateRange: {
                        fromDate: new Date(this.booking.from_date),
                        fromDateStr: '',
                        toDate: new Date(this.booking.to_date),
                        toDateStr: '',
                        dateDifference: 0,
                        message: '',
                    },
                    event_type: 'ADD_ROOM',
                    booking: this.booking,
                    BOOKING_NUMBER: this.booking.booking_nbr,
                    ADD_ROOM_TO_BOOKING: this.booking.booking_nbr,
                    GUEST: this.booking.guest,
                    message: this.booking.remark,
                    SOURCE: this.booking.source,
                    ROOMS: this.booking.rooms,
                };
                return;
            case 'extra_service_btn':
                this.extraServiceDefaultPrId = null;
                this.sidebarState = 'extra_service';
                return;
            case 'add-payment':
                return;
        }
    }
    async handleResetExposedCancellationDueAmount(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        //TODO: Payment action
        const paymentActions = await this.paymentService.GetExposedCancellationDueAmount({ booking_nbr: this.booking.booking_nbr, currency_id: this.booking.currency.id });
        this.paymentActions = [...paymentActions];
    }
    handleEditInitiated(e) {
        this.bookingItem = e.detail;
    }
    handleRoomGuestsUpdate(e) {
        const { identifier, guests } = e.detail;
        const rooms = [...this.booking.rooms];
        let currentRoomIndex = rooms.findIndex(r => r.identifier === identifier);
        if (currentRoomIndex === -1) {
            return;
        }
        const currentRoom = rooms[currentRoomIndex];
        const updatedRoom = { ...currentRoom, sharing_persons: guests };
        rooms[currentRoomIndex] = updatedRoom;
        this.booking = { ...this.booking, rooms: [...rooms] };
        this.splitIndex = booking.buildSplitIndex(this.booking.rooms);
    }
    async handleResetBooking(e) {
        if (e.detail) {
            this.booking = e.detail;
            this.splitIndex = booking.buildSplitIndex(this.booking.rooms);
            await this.loadAgentAndFolio(e.detail);
            return;
        }
        await this.resetBooking();
    }
    /**
     * Day-use extra services aren't editable through the generic extra-service form (no rate plan,
     * unit/date/price/hours instead) — intercept and reopen the booking editor drawer in
     * `EDIT_DAY_USE` mode instead, prefilled from this service and the booking. Same interception
     * pattern as `ir-room.tsx`'s ECI/LCO handling, just one level up since day-use services aren't
     * necessarily rendered inside a room block.
     */
    handleEditExtraService(e) {
        const service = e.detail;
        if (service?.category?.code === enums.SvcCategory.DayUse) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.bookingItem = {
                event_type: 'EDIT_DAY_USE',
                TITLE: t.t('Lcz_EditDayUse', { fallback: 'Edit Day-Use' }).trim(),
                FROM_DATE: service.start_date,
                TO_DATE: service.start_date,
                dayUse: true,
                extraService: service,
            };
            return;
        }
        this.selectedService = service;
        this.extraServiceDefaultPrId = null;
        this.sidebarState = 'extra_service';
    }
    handleAddExtraServiceToUnit(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectedService = null;
        this.extraServiceDefaultPrId = e.detail.pr_id;
        this.sidebarState = 'extra_service';
    }
    handleOpenPrintScreen(e) {
        this.openPrintingScreen(e.detail);
    }
    async fetchCityLedger(booking = this.booking) {
        if (!booking?.agent)
            return;
        this.clLoading = true;
        this.clError = null;
        try {
            const result = await this.cityLedgerService.fetchCL({
                AGENCY_ID: booking.agent.id,
                START_DATE: booking.from_date,
                END_DATE: booking.to_date,
                START_ROW: 0,
                END_ROW: 200,
                SEARCH_QUERY: booking.booking_nbr,
            });
            let runningBalance = 0;
            this.folioRows = result.My_Cl_tx.map((tx, i) => {
                runningBalance = runningBalance + tx.DEBIT - tx.CREDIT;
                return { _rowId: String(i), ...cityLedger_service.mapClTxToFolioRow(tx), balance: runningBalance };
            });
            this.rawTransactions = result.My_Cl_tx;
        }
        catch (err) {
            console.error('[ir-booking-details] fetchCL failed:', err);
            this.clError = t.t('Lcz_FailedToLoadCityLedger', { fallback: 'Failed to load city ledger.' });
        }
        finally {
            this.clLoading = false;
        }
    }
    async loadAgentAndFolio(booking, propertyId) {
        this.unsubscribeRealtime?.();
        this.unsubscribeRealtime = null;
        const pid = propertyId ?? this.property_id;
        this.agent = this.agents?.find(a => a.id === booking?.agent?.id) ?? null;
        if (!this.agent) {
            this.folioRows = [];
            this.rawTransactions = [];
            return;
        }
        if (functions.isAgentMode(this.agent)) {
            await this.fetchCityLedger(booking);
            if (pid) {
                this.unsubscribeRealtime = realtime_service.realtimeService.subscribe(pid, msg => {
                    this.handleClSocketMessage(msg);
                });
            }
        }
    }
    handleClSocketMessage(msg) {
        if (msg.reason === 'CL_TX_LOCKING') {
            const tx = msg.payload;
            if (tx.TRAVEL_AGENCY_ID !== this.agent?.id)
                return;
            // Accumulate — later arrivals for the same ID overwrite earlier ones
            this.clLockingPending.set(tx.CL_TX_ID, tx.IS_LOCKED);
            if (this.clLockingTimer !== null)
                clearTimeout(this.clLockingTimer);
            this.clLockingTimer = setTimeout(() => {
                this.clLockingTimer = null;
                this.applyClLockingUpdates();
            }, 150);
        }
        else if (msg.reason === 'CL_TX_HOLD_TOGGLED') {
            const { cl_tx_id, agency_id, is_hold } = msg.payload;
            if (agency_id !== this.agent?.id)
                return;
            this.rawTransactions = this.rawTransactions.map(tx => (tx.CL_TX_ID === cl_tx_id ? { ...tx, IS_HOLD: is_hold } : tx));
            this.folioRows = this.folioRows.map(r => r._raw.CL_TX_ID === cl_tx_id ? { ...cityLedger_service.mapClTxToFolioRow({ ...r._raw, IS_HOLD: is_hold }), _rowId: r._rowId, balance: r.balance } : r);
        }
        else if (msg.reason === 'CL_TX_CREATED') {
            this.fetchCityLedger();
        }
    }
    applyClLockingUpdates() {
        const pending = this.clLockingPending;
        this.clLockingPending = new Map();
        this.rawTransactions = this.rawTransactions.map(tx => {
            const isLocked = pending.get(tx.CL_TX_ID);
            return isLocked !== undefined ? { ...tx, IS_LOCKED: isLocked } : tx;
        });
        this.folioRows = this.folioRows.map(r => {
            const isLocked = pending.get(r._raw.CL_TX_ID);
            if (isLocked === undefined)
                return r;
            return { ...cityLedger_service.mapClTxToFolioRow({ ...r._raw, IS_LOCKED: isLocked }), _rowId: r._rowId, balance: r.balance };
        });
    }
    async handleClRefresh() {
        await this.fetchCityLedger();
    }
    setRoomsData(roomServiceResp) {
        let roomsData = new Array();
        if (roomServiceResp.My_Result?.roomtypes?.length) {
            roomsData = roomServiceResp.My_Result.roomtypes;
            roomServiceResp.My_Result.roomtypes.forEach(roomCategory => {
                roomCategory.expanded = true;
            });
        }
        this.calendarData.roomsInfo = roomsData;
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.bookingDetails });
            const [roomResponse, , countriesList, bookingDetails, setupEntries, agents] = await Promise.all([
                this.roomService.getExposedProperty({ id: this.propertyid || 0, language: locale_controller.LocaleController.language, aname: this.p }),
                localeReady,
                this.bookingService.getCountries(locale_controller.LocaleController.language),
                this.bookingService.getExposedBooking({
                    booking_nbr: this.bookingNumber,
                    language: locale_controller.LocaleController.language,
                    include_dp_pricing: true,
                    withExtras: true,
                    extras: [
                        ...utils.extras,
                        {
                            key: 'DP_OPTIM_BASE_GROSS',
                            value: '',
                        },
                    ],
                }),
                this.setupService.getSetupEntriesByTableNameMulti([
                    '_BED_PREFERENCE_TYPE',
                    '_DEPARTURE_TIME',
                    '_PAY_TYPE',
                    '_PAY_TYPE_GROUP',
                    '_PAY_METHOD',
                    '_ARRIVAL_TIME',
                    '_SVC_CATEGORY',
                ]),
                this.agentService.getExposedAgents({ property_id: this.propertyid || 0 }),
            ]);
            this.agents = agents;
            const resolvedPropertyId = roomResponse?.My_Result?.id;
            await this.loadAgentAndFolio(bookingDetails, resolvedPropertyId);
            this.property_id = resolvedPropertyId;
            const { bed_preference_type, svc_category, departure_time, pay_type, pay_type_group, pay_method, arrival_time } = utils$1.groupEntryTablesResult(setupEntries);
            this.bedPreference = bed_preference_type;
            this.svcCategories = svc_category;
            this.departureTime = departure_time;
            this.paymentEntries = { types: pay_type, groups: pay_type_group, methods: pay_method };
            this.arrivalTime = arrival_time;
            this.countries = countriesList;
            const myResult = roomResponse?.My_Result;
            if (myResult) {
                const { allowed_payment_methods: paymentMethods, currency, allowed_booking_sources, adult_child_constraints, calendar_legends, aname } = myResult;
                this.printingBaseUrl = this.printingBaseUrl.replace('%1', aname).replace('%2', this.bookingNumber);
                this.calendarData = {
                    currency,
                    allowed_booking_sources,
                    adult_child_constraints,
                    legendData: calendar_legends,
                };
                this.setRoomsData(roomResponse);
                const paymentCodesToShow = ['001', '004'];
                this.showPaymentDetails = paymentMethods?.some(method => paymentCodesToShow.includes(method.code));
            }
            else {
                console.warn("Room response is missing 'My_Result'.");
            }
            // Set guest and booking data
            this.guestData = bookingDetails.guest;
            this.booking = bookingDetails;
            this.splitIndex = booking.buildSplitIndex(this.booking.rooms);
        }
        catch (error) {
            console.error('Error initializing app:', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async openPrintingScreen(options, version = 'new') {
        const { mode } = options;
        if (version === 'old') {
            if (mode === 'invoice') {
                return window.open(`https://x.igloorooms.com/manage/AcBookingEdit.aspx?IRID=${encodeURIComponent(this.booking.system_id)}&&PM=I&TK=${encodeURIComponent(this.ticket)}`);
            }
            return window.open(`https://x.igloorooms.com/manage/AcBookingEdit.aspx?IRID=${encodeURIComponent(this.booking.system_id)}&&PM=B&TK=${encodeURIComponent(this.ticket)}`);
        }
        // Start with base URL
        let url = this.printingBaseUrl;
        // Add mode safely
        url += `&mode=${encodeURIComponent(mode)}`;
        // Add ANY payload safely
        if ('payload' in options && options.payload) {
            const payload = options.payload;
            const safeParams = Object.entries(payload)
                .map(([key, value]) => {
                const safeKey = encodeURIComponent(key);
                const safeValue = encodeURIComponent(String(value));
                return `${safeKey}=${safeValue}`;
            })
                .join('&');
            url += `&${safeParams}`;
        }
        // Add ApiClient safely
        const { data } = await axios.axios.post(`Get_ShortLiving_ApiClient`);
        if (!data.ExceptionMsg) {
            url += `&ApiClient=${encodeURIComponent(data.My_Result)}`;
        }
        // Final: fully safe URL
        window.open(url);
    }
    handleCloseBookingWindow() {
        this.bookingItem = null;
    }
    handleDeleteFinish = (e) => {
        this.booking = { ...this.booking, rooms: this.booking.rooms.filter(room => room.identifier !== e.detail) };
        this.splitIndex = booking.buildSplitIndex(this.booking.rooms);
    };
    async resetBooking() {
        try {
            this.isLoading = true;
            const booking$1 = await this.bookingService.getExposedBooking({ booking_nbr: this.bookingNumber, language: locale_controller.LocaleController.language, include_dp_pricing: true });
            this.splitIndex = booking.buildSplitIndex(booking$1.rooms);
            await this.loadAgentAndFolio(booking$1);
            this.booking = { ...booking$1 };
            this.bookingChanged.emit(this.booking);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleModalConfirm() {
        switch (this.modalState.type) {
            case 'email':
                await this.bookingService.sendBookingConfirmationEmail(this.booking.booking_nbr, this.language);
                break;
        }
        this.modalState = null;
        this.modalRef.closeModal();
    }
    isAllServicesAgentOwned() {
        const allRoomsHaveAgent = this.booking.rooms.every(r => r.agent !== null);
        const pickupHasAgent = !this.booking.pickup_info || this.booking.pickup_info.agent !== null;
        const allExtrasHaveAgent = (this.booking.extra_services ?? []).every(s => s.agent !== null);
        return allRoomsHaveAgent && pickupHasAgent && allExtrasHaveAgent;
    }
    render() {
        if (this.isLoading) {
            return (index.h("div", { class: 'loading-container' }, index.h("ir-spinner", null)));
        }
        const isAllServicesAgentOwned = this.isAllServicesAgentOwned();
        return (index.h(index.Host, null, !this.is_from_front_desk && (index.h(index.Fragment, null, index.h("ir-toast", { style: { height: '0' } }), index.h("ir-interceptor", { style: { height: '0' } }))), index.h("ir-booking-header", { agents: this.agents, booking: this.booking, hasCloseButton: this.hasCloseButton, hasDelete: this.hasDelete, hasMenu: this.hasMenu, hasPrint: this.hasPrint, agent: this.agent, folioRows: this.folioRows, hasReceipt: calendarData.calendar_data.property.is_frontdesk_enabled, hasEmail: ['001', '002'].includes(this.booking?.status?.code) }), index.h("div", { class: "booking-details__booking-info" }, index.h("div", { class: "booking-details__info-column" }, index.h("ir-reservation-information", { countries: this.countries, booking: this.booking }), !this.booking.is_room_less && (index.h("ir-booking-rooms", { booking: this.booking, agent: this.agent, propertyId: this.property_id, language: this.language, departureTime: this.departureTime, arrivalTime: this.arrivalTime, bedPreference: this.bedPreference, legendData: this.calendarData.legendData, roomsInfo: this.calendarData.roomsInfo, hasRoomAdd: this.hasRoomAdd, hasRoomEdit: this.hasRoomEdit, hasRoomDelete: this.hasRoomDelete, splitIndex: this.splitIndex, clTransactions: this.rawTransactions, svcCategories: this.svcCategories, checkoutRoomIdentifier: this.checkoutRoomIdentifier, onRoomDeleteFinished: this.handleDeleteFinish })), (this.booking?.rooms?.length > 1 || this.booking.rooms.length === 0) && (index.h("section", null, index.h("ir-extra-services", { language: this.language, svcCategories: this.svcCategories, booking: this.booking, agent: this.agent, clTransactions: this.rawTransactions }))), index.h("ir-pickup-view", { booking: this.booking, agent: this.agent, clTransactions: this.rawTransactions })), index.h("ir-payment-details", { clTransactions: this.rawTransactions, class: "booking-details__info-column", propertyId: this.property_id, paymentEntries: this.paymentEntries, paymentActions: this.paymentActions, booking: this.booking, agent: this.agent, svcCategories: this.svcCategories, isAllServicesAgentOwned: isAllServicesAgentOwned, folioRows: this.folioRows, clLoading: this.clLoading, clError: this.clError })), index.h("ir-dialog", { label: t.t('Lcz_SendEmail', { fallback: 'Send Email' }), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalRef.closeModal();
                this.modalState = null;
            }, ref: el => (this.modalRef = el) }, index.h("p", null, this.modalState?.message), index.h("div", { slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { loading: irInterceptor_store.isRequestPending('/Send_Booking_Confirmation_Email'), onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleModalConfirm();
            }, size: "m", variant: "brand" }, t.t('Lcz_Confirm', { fallback: 'Confirm' })))), index.h("ir-room-guests", { open: this.sidebarState === 'room-guest', countries: this.countries, language: this.language, identifier: this.sidebarPayload?.identifier, bookingNumber: this.booking.booking_nbr, roomName: this.sidebarPayload?.roomName, roomType: this.sidebarPayload?.roomType, totalGuests: this.sidebarPayload?.totalGuests, sharedPersons: this.sidebarPayload?.sharing_persons, slot: "sidebar-body", checkIn: this.sidebarPayload?.checkin, onCloseModal: () => (this.sidebarState = null) }), index.h("ir-extra-service-config", { open: this.sidebarState === 'extra_service', service: this.selectedService, defaultPrId: this.extraServiceDefaultPrId, svcCategories: this.svcCategories, language: this.language, booking: this.booking, agent: this.agent, slot: "sidebar-body", onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.sidebarState = null;
                if (this.selectedService) {
                    this.selectedService = null;
                }
                this.extraServiceDefaultPrId = null;
            } }), index.h("ir-pickup", { booking: this.booking, agent: this.agent, open: this.sidebarState === 'pickup', bookingDates: { from: this.booking.from_date, to: this.booking.to_date }, defaultPickupData: this.booking.pickup_info, bookingNumber: this.booking.booking_nbr, numberOfPersons: this.booking.occupancy.adult_nbr + this.booking.occupancy.children_nbr, onCloseModal: () => {
                this.sidebarState = null;
            } }), index.h("ir-billing-drawer", { open: this.sidebarState === 'invoice', onBillingClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.sidebarState = null;
            }, isAllServicesAgentOwned: isAllServicesAgentOwned, booking: this.booking, agent: this.agent }), index.h("ir-guest-info-drawer", { onGuestInfoDrawerClosed: () => {
                this.sidebarState = null;
            }, booking_nbr: this.bookingNumber, email: this.booking?.guest.email, language: this.language, open: this.sidebarState === 'guest' }), index.h("ir-payment-folio", { booking: this.booking, style: { height: 'auto' }, bookingNumber: this.booking.booking_nbr, paymentEntries: this.paymentEntries, payment: this.sidebarPayload?.payment, mode: this.sidebarPayload?.mode, ref: el => (this.paymentFolioRef = el), onCloseModal: () => (this.sidebarState = null) }), index.h("ir-booking-editor-drawer", { roomTypeIds: this.bookingItem?.roomsInfo?.map(r => r.id), onBookingEditorClosed: this.handleCloseBookingWindow.bind(this), unitId: this.bookingItem?.PR_ID, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, booking: this.booking, ticket: this.ticket, open: this.bookingItem !== null, roomIdentifier: this.bookingItem?.IDENTIFIER, language: this.language, propertyid: this.propertyid, checkIn: this.bookingItem?.FROM_DATE, checkOut: this.bookingItem?.TO_DATE, dayUse: this.bookingItem?.dayUse === true, extraService: this.bookingItem?.extraService }), index.h("ir-fiscal-document-preview", { mode: "all", ticket: this.ticket, propertyId: calendarData.calendar_data?.property.id, onDocumentConverted: () => this.fetchCityLedger() })));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }],
        "language": [{
                "languageChanged": 0
            }]
    }; }
};
IrBookingDetails.style = irBookingDetailsCss();

const irBookingDetailsDrawerCss = () => `.sc-ir-booking-details-drawer-h{display:block}`;

const IrBookingDetailsDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bookingDetailsDrawerClosed = index.createEvent(this, "bookingDetailsDrawerClosed");
    }
    /**
     * Controls whether the drawer is open.
     */
    open;
    /**
     * Property ID associated with the booking.
     */
    propertyId;
    /**
     * Authentication or session ticket.
     */
    ticket;
    /**
     * Language code used for localization.
     * Defaults to English (`en`).
     */
    language = 'en';
    /**
     * Booking reference number.
     */
    bookingNumber;
    /**
     * When set, the booking-details view auto-opens the check-out dialog for the room with
     * this identifier once the booking loads. Used to route early check-outs triggered from
     * other screens (departures list, calendar) through the full booking details.
     */
    checkoutRoomIdentifier;
    /**
     * Emitted when the booking details drawer is closed.
     */
    bookingDetailsDrawerClosed;
    /**
     * Handles closing the drawer.
     *
     * This method is used for all close interactions (drawer hide,
     * close button, or programmatic close) to ensure a single source
     * of truth for the close behavior.
     */
    handleClose = (e) => {
        if (e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
        }
        this.bookingDetailsDrawerClosed.emit();
    };
    render() {
        return (index.h("ir-drawer", { key: 'ff4044ec08dd9bb170d61f79d12745612fef79d9', onDrawerHide: this.handleClose, withoutHeader: true, open: this.open, style: {
                '--ir-drawer-width': '100rem',
                '--ir-drawer-background-color': 'var(--ir-color-muted-background,#f2f3f8)',
                '--ir-drawer-padding-left': '0',
                '--ir-drawer-padding-right': '0',
                '--ir-drawer-padding-top': '0',
                '--ir-drawer-padding-bottom': '0',
            } }, this.open && (index.h("ir-booking-details", { key: '525ab5ad4d3e97e3f6a4a052deabc69e15029963', hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: this.handleClose, is_from_front_desk: true, propertyid: this.propertyId, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.bookingNumber.toString(), ticket: this.ticket, language: this.language, checkoutRoomIdentifier: this.checkoutRoomIdentifier, hasRoomAdd: true }))));
    }
};
IrBookingDetailsDrawer.style = irBookingDetailsDrawerCss();

// import { BookingService } from '@/services/booking-service/booking.service';
class IRBookingEditorService {
    /** Current booking editor mode */
    mode;
    /** Lazy-initialized variation service */
    variationService;
    // private bookingService = new BookingService();
    constructor(mode) {
        this.mode = mode;
    }
    setMode(mode) {
        this.mode = mode;
    }
    /**
     * Syncs room data with the booking store and reserves a room.
     * Aborts if required room data is missing.
     */
    updateBooking(room) {
        if (!room)
            return;
        try {
            const roomtypeId = room.roomtype?.id;
            const rateplanId = room.rateplan?.id;
            const guestData = room.guest;
            const occupancy = room.occupancy;
            if (!roomtypeId || !rateplanId || !guestData || !occupancy) {
                console.warn('[updateBooking] Missing required room data', room);
                return;
            }
            const mainGuest = room.sharing_persons.find(g => g.is_main);
            const guest = {
                bed_preference: room.bed_preference?.toString() ?? null,
                infant_nbr: occupancy.infant_nbr ?? 0,
                last_name: mainGuest?.last_name ?? room.guest.last_name ?? '',
                first_name: mainGuest?.first_name ?? room.guest.first_name ?? '',
                unit: room.unit?.id?.toString() ?? null,
                roomtype_id: roomtypeId,
            };
            booking_service.modifyBookingStore('guest', guest);
            booking_service.reserveRooms({
                roomTypeId: roomtypeId,
                ratePlanId: rateplanId,
                rooms: 1,
                guest: [guest],
            });
        }
        catch (error) {
            console.error('[updateBooking] Failed', error);
        }
    }
    /**
     * Finds a room by identifier and syncs its guest data to the store.
     */
    getRoom(booking, identifier) {
        if (!booking || !identifier)
            return;
        const room = booking.rooms?.find(r => r.identifier === identifier);
        if (!room)
            return;
        booking_service.modifyBookingStore('guest', {
            bed_preference: room.bed_preference?.toString() ?? null,
            infant_nbr: room.occupancy?.infant_nbr ?? 0,
            first_name: room.guest?.first_name ?? '',
            last_name: room.guest?.last_name ?? '',
            unit: room.unit?.id?.toString() ?? null,
        });
        return room;
    }
    // ─────────────────────────────────────────────
    // Utility helpers
    // ─────────────────────────────────────────────
    /**
     * Checks whether a string contains underscores.
     * Used to validate phone numbers.
     */
    hasUnderscore(str) {
        return /_+/.test(str);
    }
    /**
     * Generates daily rate entries for a reserved room.
     */
    async calculateAmount({ is_amount_modified, selected_variation, view_mode, rp_amount }) {
        if (!is_amount_modified)
            return null;
        const total_days = selected_variation?.nights?.length;
        if (!total_days)
            return null;
        // Gross amount (tax included)
        const gross = view_mode === '002' ? rp_amount : rp_amount / total_days;
        return gross;
        // const tax = await this.bookingService.calculateExclusiveTax({
        //   property_id: calendar_data.property.id,
        //   amount: gross,
        // });
        // if (!tax || tax <= 0) {
        //   return gross;
        // }
        // const net = gross / (1 + tax / gross);
        // return Number(net.toFixed(2));
    }
    /**
     * Builds room payloads based on selected rate plans
     * and booking draft context.
     */
    async generateDailyRates(rate_plan, i) {
        let variation = rate_plan.selected_variation;
        const amount = rate_plan.is_amount_modified ? await this.calculateAmount(rate_plan) : null;
        const infantNbr = rate_plan.guest?.[i]?.infant_nbr ?? 0;
        if (infantNbr > 0 && !rate_plan.is_amount_modified) {
            if (!this.variationService) {
                this.variationService = new booking_service.VariationService();
            }
            variation = this.variationService.getVariationBasedOnInfants({
                variations: rate_plan.ratePlan.variations,
                baseVariation: rate_plan.selected_variation,
                infants: infantNbr,
            });
        }
        return (variation?.nights?.map(n => ({
            date: n.night,
            amount: amount ?? n.discounted_amount,
            cost: null,
        })) ?? []);
    }
    async getBookedRooms({ check_in, check_out, notes, identifier, override_unit, unit, auto_check_in, room, }) {
        const rooms = [];
        const toUnitId = (value) => {
            if (value === null || value === undefined || value === '') {
                return null;
            }
            const parsed = Number(value);
            return Number.isFinite(parsed) ? parsed : null;
        };
        for (const roomTypeId in booking_service.booking_store.ratePlanSelections) {
            const roomtype = booking_service.booking_store.ratePlanSelections[roomTypeId];
            for (const rateplanId in roomtype) {
                const rateplan = roomtype[rateplanId];
                if (rateplan.reserved > 0) {
                    for (let i = 0; i < rateplan.reserved; i++) {
                        const guest = rateplan.guest?.[i];
                        const first_name = guest?.first_name ?? '';
                        const last_name = guest?.last_name ?? '';
                        const days = await this.generateDailyRates(rateplan, i);
                        let newRoom = {
                            ...(room ?? {}),
                            identifier,
                            roomtype: rateplan.roomtype,
                            rateplan: rateplan.ratePlan,
                            prepayment_amount_gross: 0,
                            unit: override_unit ? (toUnitId(unit) !== null ? { id: toUnitId(unit) } : null) : guest?.unit ? { id: toUnitId(guest.unit) } : null,
                            occupancy: {
                                adult_nbr: rateplan.selected_variation?.adult_nbr ?? 0,
                                children_nbr: Number(rateplan.selected_variation?.child_nbr ?? 0) - Math.max(Number(guest?.infant_nbr ?? 0), 0),
                                infant_nbr: guest?.infant_nbr ?? null,
                            },
                            bed_preference: guest?.bed_preference ?? null,
                            from_date: moment.hooks(check_in).format('YYYY-MM-DD'),
                            to_date: moment.hooks(check_out).format('YYYY-MM-DD'),
                            notes,
                            check_in: auto_check_in,
                            days,
                            guest: {
                                email: null,
                                first_name,
                                last_name,
                                country_id: null,
                                city: null,
                                mobile: null,
                                address: null,
                                dob: null,
                                subscribe_to_news_letter: null,
                                cci: null,
                            },
                        };
                        if (room) {
                            const newSharingPersons = Array.isArray(newRoom.sharing_persons) ? [...newRoom.sharing_persons] : [];
                            const mainGuestIndex = newSharingPersons.findIndex(r => r.is_main);
                            let mainGuest = newSharingPersons[mainGuestIndex];
                            if (mainGuest) {
                                mainGuest = { ...mainGuest, first_name, last_name };
                                newSharingPersons[mainGuestIndex] = { ...mainGuest };
                                newRoom = { ...newRoom, sharing_persons: newSharingPersons };
                            }
                        }
                        rooms.push(newRoom);
                    }
                }
            }
        }
        return rooms;
    }
    isEventType(mode) {
        if (Array.isArray(mode)) {
            return mode.includes(this.mode);
        }
        return this.mode === mode;
    }
    /**
     * Prepares payload parameters for the booking user service
     * based on the current editor mode.
     */
    async prepareBookUserServiceParams({ check_in, booking, room, unitId }) {
        try {
            // Validate context structure
            const { dates } = booking_service.booking_store.bookingDraft;
            const fromDate = dates.checkIn;
            const toDate = dates.checkOut;
            const generateNewRooms = async (identifier = null, check_in = false, room = null) => {
                return await this.getBookedRooms({
                    check_in: fromDate,
                    check_out: toDate,
                    identifier,
                    notes: '',
                    override_unit: this.isEventType(['BAR_BOOKING', 'SPLIT_BOOKING']) ? true : false,
                    unit: this.isEventType(['BAR_BOOKING', 'SPLIT_BOOKING']) ? (unitId?.toString() ?? null) : null,
                    auto_check_in: check_in,
                    room: identifier ? room : null,
                });
            };
            const modifyBookingDetails = ({ pickup_info, extra_services, is_direct, is_in_loyalty_mode, promo_key, extras, ...rest }, rooms) => {
                return {
                    assign_units: true,
                    is_pms: true,
                    is_direct,
                    is_backend: true,
                    is_in_loyalty_mode,
                    promo_key,
                    extras,
                    agent: booking.agent,
                    booking: {
                        ...rest,
                        rooms,
                    },
                    extra_services,
                    pickup_info,
                };
            };
            let newBooking = null;
            const sourceOption = booking_service.booking_store.bookingDraft.source;
            switch (this.mode) {
                case 'EDIT_BOOKING': {
                    const rooms = [...booking.rooms];
                    const toBeEditedRoomIndex = rooms.findIndex(r => r.identifier === room.identifier);
                    if (toBeEditedRoomIndex === -1) {
                        console.warn('Missing room', room.identifier);
                        return;
                    }
                    const newRooms = await generateNewRooms(room.identifier, room.in_out?.code === '001', room);
                    rooms[toBeEditedRoomIndex] = { ...newRooms[0] };
                    newBooking = modifyBookingDetails(booking, rooms);
                    break;
                }
                case 'ADD_ROOM':
                case 'SPLIT_BOOKING': {
                    const agent = booking_service.booking_store.bookingDraft.roomAssignee === 'agent' ? booking.agent : null;
                    const newRooms = (await generateNewRooms()).map(r => ({ ...r, agent }));
                    const previousRooms = booking.rooms;
                    newBooking = modifyBookingDetails(booking, [...previousRooms, ...newRooms]);
                    break;
                }
                default: {
                    const isAgent = sourceOption.type === 'TRAVEL_AGENCY';
                    const newRooms = (await generateNewRooms(null, check_in)).map(r => ({ ...r, agent: isAgent ? { id: sourceOption.tag } : null }));
                    const { bookedByGuest } = booking_service.booking_store;
                    newBooking = {
                        assign_units: true,
                        is_pms: true,
                        is_direct: true,
                        is_backend: true,
                        is_in_loyalty_mode: false,
                        promo_key: null,
                        extras: [...utils.extras.filter(e => e.key !== 'payment_code'), { key: 'payment_code', value: booking_service.booking_store.selectedPaymentMethod?.code }],
                        agent: isAgent ? { id: sourceOption.tag } : null,
                        is_email_client: bookedByGuest.emailGuest,
                        booking: {
                            agent_booking_nbr: bookedByGuest.agent_booking_nbr,
                            company_name: bookedByGuest.company ?? null,
                            from_date: moment.hooks(fromDate).format('YYYY-MM-DD'),
                            to_date: moment.hooks(toDate).format('YYYY-MM-DD'),
                            remark: bookedByGuest.note || null,
                            booking_nbr: '',
                            property: {
                                id: calendarData.calendar_data.property.id,
                            },
                            booked_on: {
                                date: moment.hooks().format('YYYY-MM-DD'),
                                hour: new Date().getHours(),
                                minute: new Date().getMinutes(),
                            },
                            source: isAgent ? '' : sourceOption,
                            rooms: newRooms,
                            currency: calendarData.calendar_data.property.currency,
                            arrival: { code: bookedByGuest.selectedArrivalTime },
                            guest: {
                                email: bookedByGuest.email === '' ? null : bookedByGuest.email || null,
                                first_name: bookedByGuest.firstName,
                                last_name: bookedByGuest.lastName,
                                country_id: bookedByGuest.countryId === '' ? null : bookedByGuest.countryId,
                                city: null,
                                mobile: bookedByGuest.mobile === null ? '' : this.hasUnderscore(bookedByGuest.mobile) ? '' : bookedByGuest.mobile,
                                country_phone_prefix: bookedByGuest?.phone_prefix ?? null,
                                address: '',
                                dob: null,
                                // subscribe_to_news_letter: bookedByGuest.emailGuest || false,
                                cci: bookedByGuest.cardNumber
                                    ? {
                                        nbr: bookedByGuest.cardNumber,
                                        holder_name: bookedByGuest.cardHolderName,
                                        expiry_month: bookedByGuest.expiryMonth,
                                        expiry_year: bookedByGuest.expiryYear,
                                    }
                                    : null,
                            },
                        },
                        pickup_info: null,
                    };
                    break;
                }
            }
            return newBooking;
        }
        catch (error) {
            console.error(error);
        }
    }
}

const irBookingEditorCss = () => `.sc-ir-booking-editor-h{display:block;height:100%;text-align:start}.booking-editor__roomtype-container.sc-ir-booking-editor{display:flex;flex-direction:column;gap:1rem;margin-top:1.5rem;padding-bottom:3rem}.booking-editor__step.sc-ir-booking-editor{display:block;animation:booking-editor-step-in var(--wa-transition-normal, 200ms) cubic-bezier(0.23, 1, 0.32, 1) both}@keyframes booking-editor-step-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}@media (prefers-reduced-motion: reduce){.booking-editor__step.sc-ir-booking-editor{animation:none}}`;

/** bookingStatus['002'] in @/utils/booking — CONFIRMED. */
const CONFIRMED_STATUS_CODE = '002';
const IrBookingEditor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt");
        this.loadingChanged = index.createEvent(this, "loadingChanged");
        this.adjustBlockedUnit = index.createEvent(this, "adjustBlockedUnit");
        this.bookingStepChange = index.createEvent(this, "bookingStepChange");
        this.preventPageLoad = index.createEvent(this, "preventPageLoad");
    }
    propertyId;
    language = 'en';
    roomTypeIds = [];
    identifier;
    booking;
    mode = 'PLUS_BOOKING';
    checkIn;
    checkOut;
    step;
    blockedUnit;
    unitId;
    /** The day-use extra service being edited (`mode="EDIT_DAY_USE"`) — its unit is excluded from the "already booked" filter, highlighted in the unit list, and updated in place via `doBookingExtraService` on submission. */
    extraService;
    isLoading = true;
    isFetchingAvailability = false;
    hasCheckedAvailability = false;
    unavailableRatePlanIds = new Set();
    dayUseBookedUnitIds = new Set();
    dayUseRoomTypes = [];
    resolvingDayUseUnitId = null;
    /** Net (tax-exclusive) version of `dayUsePrice`, resolved once via `calculateNetAmount` — shown as the default value in the price input so an untouched default reads the same way a typed custom (net) amount does. */
    dayUseNetPrice = null;
    resetBookingEvt;
    loadingChanged;
    adjustBlockedUnit;
    bookingStepChange;
    preventPageLoad;
    roomService = new room_service.RoomService();
    bookingService = new booking_service.BookingService();
    setupService = new index$2.SetupService();
    propertyService = new index$3.PropertyService();
    bookingEditorService = new IRBookingEditorService(this.mode);
    room;
    get dayUsePrice() {
        return Number(calendarData.getExtraServiceDefaultPrice(enums.SvcCategory.DayUse));
    }
    /**
     * Resolves the gross day-use price for the selected unit and advances to step 2.
     *
     * - Hotel default price (untouched): the input shows the default price converted to its **net**
     *   value (`dayUseNetPrice`, resolved once by `resolveDayUseNetPrice`) so an untouched default
     *   reads the same way a typed custom amount does. Since it wasn't actually customized, we discard
     *   that net display value here and show/save the original **gross** default instead.
     * - Custom price (front-desk typed a value): that value is the **net** amount, mirroring how a
     *   manually-modified rate-plan rate is treated (`getRatePlanDisplayAmount` in booking.store.ts) —
     *   `calculateExclusiveTax` derives the tax off the net amount and gross = net + tax.
     *
     * Resolved once here so step 2's summary and the final `doDayUse` submission always agree.
     */
    async handleDayUseUnitSelected(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { unit, roomType, price, isCustomPrice } = e.detail;
        this.resolvingDayUseUnitId = unit.id;
        try {
            let netAmount;
            let taxAmount;
            let grossAmount;
            if (isCustomPrice) {
                netAmount = price;
                taxAmount = this.isAccommodationVatExclusive()
                    ? await this.bookingService.calculateExclusiveTax({ property_id: Number(this.propertyId), amount: netAmount, taxes_to_include: ['VAT'] })
                    : 0;
                grossAmount = netAmount + taxAmount;
            }
            else {
                grossAmount = this.dayUsePrice;
                netAmount = this.dayUseNetPrice ?? grossAmount;
                taxAmount = grossAmount - netAmount;
            }
            booking_service.setDayUseSelection({ unit, roomType, price: grossAmount, netAmount, taxAmount, isCustomPrice });
            this.bookingStepChange.emit({ direction: 'next' });
        }
        finally {
            this.resolvingDayUseUnitId = null;
        }
    }
    /** Resolves taxation policy on accommodation level. */
    isAccommodationVatExclusive = () => {
        const accTax = calendarData.calendar_data.property.taxes?.find(t => t.name === 'V.A.T');
        return accTax?.is_exlusive;
    };
    /** Resolves `dayUsePrice` (gross) to its net equivalent once, up front, so it's ready before the day-use unit list renders. */
    async resolveDayUseNetPrice() {
        const grossAmount = this.dayUsePrice;
        if (!grossAmount) {
            this.dayUseNetPrice = 0;
            return;
        }
        try {
            this.dayUseNetPrice = this.isAccommodationVatExclusive()
                ? await this.propertyService.calculateNetAmount({ property_id: Number(this.propertyId), amount: grossAmount, taxes_to_include: ['VAT'] })
                : this.dayUsePrice;
        }
        catch (error) {
            console.error('Error resolving day-use net price:', error);
        }
    }
    get adjustedCheckout() {
        if (this.bookingEditorService.isEventType('PLUS_BOOKING') && !this.blockedUnit) {
            return undefined;
        }
        return this.checkOut;
    }
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.bookingEditor, () => this.initializeApp());
    componentWillLoad() {
        this.initializeApp();
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    handleModeChange(newMode, oldMode) {
        if (newMode !== oldMode) {
            this.bookingEditorService.setMode(newMode);
        }
    }
    handleGuestSelected(e) {
        this.booking = { ...e.detail };
        booking_service.updateBookedByGuest({
            firstName: this.booking.guest.first_name,
            lastName: this.booking.guest.last_name,
        });
        const source = booking_service.booking_store.selects.sources.find(s => s.code === this.booking.source.code);
        booking_service.setBookingDraft({
            source,
        });
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            this.bookingEditorService.setMode(this.mode);
            const [, countriesList] = await Promise.all([
                locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.bookingEditor }),
                this.bookingService.getCountries(locale_controller.LocaleController.language),
                this.roomService.getExposedProperty({
                    id: Number(this.propertyId),
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                    include_units_hk_status: true,
                    include_sales_rate_plans: true,
                }),
            ]);
            await Promise.all([this.fetchSetupEntriesAndInitialize(), this.resolveDayUseNetPrice()]);
            booking_service.setBookingSelectOptions({
                countries: countriesList,
            });
            this.initializeDraftFromBooking();
            if (this.bookingEditorService.isEventType(['EDIT_BOOKING', 'EDIT_DAY_USE'])) {
                await this.checkBookingAvailability();
            }
        }
        catch (error) {
            console.error('Error initializing app:', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    disconnectedCallback() {
        booking_service.resetBookingStore(true);
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    handleCheckAvailability(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.checkBookingAvailability(true);
    }
    /**
     * Initializes booking draft and guest data
     * based on the current editor mode.
     *
     * Throws if required booking data is missing.
     */
    initializeDraftFromBooking() {
        const isEdit = this.bookingEditorService.isEventType('EDIT_BOOKING');
        const isEditOrAdd = this.bookingEditorService.isEventType(['EDIT_BOOKING', 'ADD_ROOM', 'EDIT_DAY_USE']);
        if (isEditOrAdd && (!this.booking || (!this.identifier && isEdit))) {
            throw new Error('Missing booking or identifier');
        }
        if (isEdit) {
            this.room = this.bookingEditorService.getRoom(this.booking, this.identifier);
        }
        const dates = isEdit
            ? {
                checkIn: moment.hooks(this.room.from_date, 'YYYY-MM-DD'),
                checkOut: moment.hooks(this.room.to_date, 'YYYY-MM-DD'),
            }
            : {
                checkIn: this.checkIn ? moment.hooks(this.checkIn, 'YYYY-MM-DD') : moment.hooks(),
                checkOut: this.checkOut ? moment.hooks(this.checkOut, 'YYYY-MM-DD') : moment.hooks().add(1, 'day'),
            };
        const draft = {
            dates,
            ...(isEditOrAdd && { source: this.resolveSourceOption(booking_service.booking_store.selects.sources, booking_service.booking_store.selects.sources) }),
            ...(isEdit && {
                occupancy: {
                    adults: calendarData.calendar_data.property.adult_child_constraints.adult_max_nbr,
                    children: calendarData.calendar_data.property.adult_child_constraints.child_max_nbr,
                },
                defaultOccupancy: {
                    adults: this.room.occupancy.adult_nbr,
                    children: this.room.occupancy.children_nbr + this.room.occupancy.infant_nbr,
                },
            }),
        };
        if (isEditOrAdd) {
            booking_service.updateBookedByGuest({
                firstName: this.booking.guest.first_name,
                lastName: this.booking.guest.last_name,
                ...(this.bookingEditorService.isEventType('EDIT_DAY_USE') && {
                    email: this.booking.guest.email ?? '',
                    mobile: this.booking.guest.mobile_without_prefix ?? this.booking.guest.mobile ?? '',
                }),
            });
        }
        booking_service.setBookingDraft(draft);
    }
    async checkBookingAvailability(checkBe = false) {
        this.isFetchingAvailability = true;
        // resetBookingStore(false);
        const { source, occupancy, dates, dayUse } = booking_service.booking_store.bookingDraft;
        const from_date = dates.checkIn.format('YYYY-MM-DD');
        const to_date = dates.checkOut.format('YYYY-MM-DD');
        const is_in_agent_mode = source?.type === 'TRAVEL_AGENCY';
        try {
            this.dayUseRoomTypes = [];
            if (dayUse) {
                await Promise.all([this.checkDayUseAvailability(from_date), this.fetchDayUseBookedUnits(dayUse, from_date)]);
            }
            else {
                const room_type_ids_to_update = this.bookingEditorService.isEventType('EDIT_BOOKING') ? [this.room.roomtype?.id] : [];
                const room_type_ids = this.bookingEditorService.isEventType(['BAR_BOOKING', 'SPLIT_BOOKING']) ? this.roomTypeIds.map(r => Number(r)) : [];
                const params = {
                    from_date,
                    to_date,
                    propertyid: calendarData.calendar_data.property.id,
                    adultChildCount: {
                        adult: occupancy.adults,
                        child: occupancy.children,
                    },
                    language: locale_controller.LocaleController.language,
                    room_type_ids,
                    currency: calendarData.calendar_data.property.currency,
                    agent_id: is_in_agent_mode ? source?.tag : null,
                    is_in_agent_mode,
                    room_type_ids_to_update,
                };
                await Promise.all([this.bookingService.getBookingAvailability(params), this.fetchDayUseBookedUnits(dayUse, from_date)]);
                if (checkBe) {
                    const beResults = await this.bookingService.getBookingAvailability({ ...params, is_backend: false, skip_store: true });
                    this.compareResults(beResults);
                }
            }
            if (this.mode !== 'EDIT_BOOKING') {
                await this.assignCountryCode();
            }
            if (this.bookingEditorService.isEventType('EDIT_BOOKING')) {
                this.bookingEditorService.updateBooking(this.room);
            }
            this.isFetchingAvailability = false;
            this.hasCheckedAvailability = true;
        }
        catch (error) {
            console.error('Error initializing booking availability:', error);
        }
    }
    /**
     * Day-use branch of availability checking: skips `Check_Availability` entirely and derives
     * per-unit availability from `Get_Exposed_Calendar` (`getCalendarData`) for the single target date.
     */
    async checkDayUseAvailability(date) {
        this.preventPageLoad.emit('/Get_Exposed_Calendar');
        const results = await this.bookingService.getCalendarData(Number(calendarData.calendar_data.property.id), date, date);
        const day = results?.days?.[0];
        this.dayUseRoomTypes = day?.rate ?? [];
    }
    /**
     * Units already booked for day use on the target date don't reduce a room type's normal
     * `inventory`/availability, so they must be filtered out separately from the units list.
     *
     * When editing an existing day-use extra service (`EDIT_DAY_USE`), its own unit is excluded from
     * this "already booked" set — it's the booking being edited, not a conflict — and its hours seed
     * `dayUseHours` so step 2 shows the time window that's actually in effect.
     */
    async fetchDayUseBookedUnits(dayUse, date) {
        if (!dayUse) {
            this.dayUseBookedUnitIds = new Set();
            return;
        }
        const bookings = await this.propertyService.getDayUseBookingsForCalendar({
            property_id: Number(calendarData.calendar_data.property.id),
            from_date: date,
            to_date: date,
        });
        const editingUnitId = this.bookingEditorService.isEventType('EDIT_DAY_USE') ? this.extraService?.pr_id : undefined;
        this.dayUseBookedUnitIds = new Set(bookings.filter(b => b.unit_id !== editingUnitId).map(b => b.unit_id));
        if (editingUnitId != null && !booking_service.booking_store.bookingDraft.dayUseHours?.from) {
            const current = bookings.find(b => b.unit_id === editingUnitId);
            if (current) {
                booking_service.setBookingDraft({ dayUseHours: { from: current.from_time, to: current.to_time } });
            }
        }
    }
    compareResults(beResults) {
        const beRoomTypes = Array.isArray(beResults) ? beResults : (beResults?.roomtypes ?? []);
        const unavailableRatePlanIds = new Set();
        const beRoomTypeMap = new Map(beRoomTypes.map(roomType => [roomType.id, roomType]));
        for (const roomType of booking_service.booking_store.roomTypes ?? []) {
            const beRoomType = beRoomTypeMap.get(roomType.id);
            const beRatePlanMap = new Map(beRoomType?.rateplans?.map(ratePlan => [ratePlan.id, ratePlan]) ?? []);
            for (const ratePlan of roomType.rateplans ?? []) {
                if (!ratePlan?.is_available_to_book)
                    continue;
                const beRatePlan = beRatePlanMap.get(ratePlan.id);
                if (!beRatePlan || !beRatePlan.is_available_to_book) {
                    unavailableRatePlanIds.add(ratePlan.id);
                }
            }
        }
        this.unavailableRatePlanIds = unavailableRatePlanIds;
    }
    async doReservation(source) {
        try {
            this.loadingChanged.emit({ cause: source });
            if (booking_service.booking_store.bookingDraft.dayUse) {
                await this.doDayUseReservation(source === 'book&block');
                return;
            }
            booking_service.fillMissingReservedGuestNames();
            const reservedRooms = booking_service.getReservedRooms();
            irCityLedgerTransactionForm_schema.RoomsGuestsSchema.parse(reservedRooms.map(r => ({ ...r.guest, requires_bed_preference: r.ratePlanSelection.roomtype.is_bed_configuration_enabled })));
            irCityLedgerTransactionForm_schema.BookedByGuestSchema.parse(booking_service.booking_store.bookedByGuest);
            const body = await this.bookingEditorService.prepareBookUserServiceParams({
                check_in: source === 'book-checkin',
                booking: this.booking,
                room: this.room,
                unitId: this.unitId?.toString(),
            });
            console.log({ DoReservationPayload: body });
            await this.bookingService.doReservation(body);
            this.adjustBlockedUnit.emit(body);
            this.resetBookingEvt.emit(null);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.loadingChanged.emit({ cause: null });
        }
        // alert('do reservation');
    }
    async doDayUseReservation(block) {
        const { dayUseSelection } = booking_service.booking_store;
        if (!dayUseSelection) {
            console.warn('[doDayUseReservation] No unit selected');
            return;
        }
        const { dates, dayUseHours, source, defaultOccupancy } = booking_service.booking_store.bookingDraft;
        const { bookedByGuest } = booking_service.booking_store;
        irCityLedgerTransactionForm_schema.BookedByGuestSchema.parse(bookedByGuest);
        irCityLedgerTransactionForm_schema.DayUseHoursSchema.parse(dayUseHours);
        // Gross/net/tax were already resolved when the unit was selected (handleDayUseUnitSelected) —
        // reused as-is so the amount shown on step 2 matches exactly what gets saved.
        const { price: grossAmount, netAmount, taxAmount } = dayUseSelection;
        const date = dates.checkIn.format('YYYY-MM-DD');
        const isEditing = this.bookingEditorService.isEventType('EDIT_DAY_USE') && this.extraService;
        if (isEditing) {
            // Do_Booking_Extra_Service now updates the existing Day use extra service in place (keyed off its
            // `system_id`) — unit/price/hours change, but the booking it belongs to doesn't, so no more
            // delete-then-recreate-as-a-new-booking round trip.
            const service = {
                ...this.extraService,
                pr_id: dayUseSelection.unit.id,
                category: { code: enums.SvcCategory.DayUse },
                start_date: date,
                end_date: date,
                from_time: dayUseHours.from,
                to_time: dayUseHours.to,
                net_amount: netAmount,
                tax_amount: taxAmount,
                gross_amount: grossAmount,
                price: grossAmount,
                currency_id: calendarData.calendar_data.property.currency.id,
            };
            await this.bookingService.doBookingExtraService({
                service,
                is_remove: false,
                booking_nbr: this.booking?.booking_nbr,
            });
            utils.showToast({ title: t.t('Lcz_DayUseBookingUpdated', { fallback: 'Day Use Booking Updated' }), type: 'success' });
            this.resetBookingEvt.emit(null);
            return;
        }
        const payload = {
            language: locale_controller.LocaleController.language,
            is_to_block: block,
            booking: {
                property: { id: Number(this.propertyId) },
                currency: { id: calendarData.calendar_data.property.currency.id },
                source,
                guest: {
                    first_name: bookedByGuest.firstName,
                    last_name: bookedByGuest.lastName,
                    email: bookedByGuest.email ?? '',
                    mobile: bookedByGuest.mobile ?? '',
                },
                occupancy: {
                    adult_nbr: defaultOccupancy?.adults ?? 0,
                    children_nbr: defaultOccupancy?.children ?? 0,
                    infant_nbr: null,
                },
                from_date: date,
                to_date: date,
                status: { code: CONFIRMED_STATUS_CODE },
                remark: bookedByGuest.note,
            },
            extra_service: {
                pr_id: dayUseSelection.unit.id,
                category: { code: enums.SvcCategory.DayUse },
                description: '',
                start_date: date,
                end_date: date,
                from_time: dayUseHours.from,
                to_time: dayUseHours.to,
                net_amount: netAmount,
                tax_amount: taxAmount,
                gross_amount: grossAmount,
                price: grossAmount,
                currency_id: calendarData.calendar_data.property.currency.id,
            },
        };
        await this.bookingService.doDayUse(payload);
        utils.showToast({ title: t.t('Lcz_DayUseBookingCreated', { fallback: 'Day Use Booking Created' }), type: 'success' });
        this.resetBookingEvt.emit(null);
    }
    async assignCountryCode() {
        const country = await this.bookingService.getUserDefaultCountry();
        const countryId = country['COUNTRY_ID'];
        const _c = booking_service.booking_store.selects.countries.find(c => c.id?.toString() === countryId?.toString());
        booking_service.updateBookedByGuest({
            countryId: countryId,
            phone_prefix: _c?.phone_prefix,
        });
    }
    async fetchSetupEntriesAndInitialize() {
        try {
            const setupEntries = await this.fetchSetupEntries();
            this.setSourceOptions(calendarData.calendar_data.property.allowed_booking_sources);
            this.setOtherProperties(setupEntries);
        }
        catch (error) {
            console.error('Error fetching setup entries:', error);
        }
    }
    setOtherProperties(setupEntries) {
        booking_service.setBookingSelectOptions({
            arrivalTime: setupEntries.arrivalTime,
            bedPreferences: setupEntries.bedPreferenceType,
            ratePricingMode: setupEntries.ratePricingMode,
        });
    }
    resolveSourceOption(bookingSource, filteredSourceOptions) {
        if (this.bookingEditorService.isEventType(['EDIT_BOOKING', 'EDIT_DAY_USE']) && this.booking) {
            if (this.booking.agent) {
                return bookingSource.find(option => this.booking.agent?.id?.toString() === option.tag?.toString());
            }
            else {
                return bookingSource.find(option => this.booking.source?.code === option.code);
            }
        }
        return filteredSourceOptions.find(o => o.type !== 'LABEL');
    }
    setSourceOptions(bookingSource) {
        const _sourceOptions = this.bookingEditorService.isEventType('BAR_BOOKING') ? this.getFilteredSourceOptions(bookingSource) : bookingSource;
        booking_service.setBookingSelectOptions({
            sources: _sourceOptions,
        });
        booking_service.setBookingDraft({
            source: this.resolveSourceOption(bookingSource, _sourceOptions),
        });
    }
    getFilteredSourceOptions(sourceOptions) {
        const agentIds = new Set();
        if (!Boolean(this.unitId)) {
            return sourceOptions;
        }
        const room = calendarData.calendar_data.roomsInfo.find(room => room.physicalrooms.find(r => r.id.toString() === this.unitId?.toString()));
        const hasAgentOnlyRoomType = (() => {
            const rps = room?.rateplans ?? [];
            if (rps.length === 0)
                return false;
            const isForAgentOnly = rps.every((rp) => (rp?.agents?.length ?? 0) > 0);
            if (isForAgentOnly) {
                rps.forEach((rp) => {
                    (rp?.agents ?? []).forEach((ag) => agentIds.add(ag?.id?.toString()));
                });
            }
            return isForAgentOnly;
        })() ?? false;
        if (!hasAgentOnlyRoomType) {
            return sourceOptions;
        }
        return sourceOptions.filter((opt) => {
            if (opt?.type === 'LABEL')
                return true;
            const candidate = opt?.tag;
            const matchesId = candidate != null && agentIds.has(candidate);
            return matchesId;
        });
    }
    async fetchSetupEntries() {
        return await this.setupService.fetchSetupEntries();
    }
    render() {
        if (this.isLoading) {
            return (index.h("div", { class: 'drawer__loader-container' }, index.h("ir-spinner", null)));
        }
        return (index.h(index.Host, null, index.h("div", null, index.h("ir-interceptor", null), this.step === 'details' && (index.h("div", { class: "booking-editor__step", key: "step-details" }, index.h("ir-booking-editor-header", { isLoading: this.isFetchingAvailability, isBlockConversion: !!this.blockedUnit?.STATUS_CODE, booking: this.booking, checkIn: this.checkIn, checkOut: this.adjustedCheckout, mode: this.mode }), index.h("div", { class: 'booking-editor__roomtype-container' }, !this.isFetchingAvailability && booking_service.booking_store.bookingDraft.dayUse ? (index.h("igl-day-use-unit-list", { mode: this.mode, roomTypes: this.dayUseRoomTypes, price: this.dayUsePrice, netPrice: this.dayUseNetPrice, currency: calendarData.calendar_data.property.currency, bookedUnitIds: this.dayUseBookedUnitIds, unitId: this.unitId, currentExtraService: this.extraService, resolvingUnitId: this.resolvingDayUseUnitId, hasSearched: this.hasCheckedAvailability, onUnitSelected: e => this.handleDayUseUnitSelected(e) })) : (!this.isFetchingAvailability &&
            booking_service.booking_store.roomTypes?.map(roomType => (index.h("igl-room-type", { unavailableRatePlanIds: this.unavailableRatePlanIds, key: `room-type-${roomType.id}`, id: roomType.id.toString(), roomType: roomType, bookingType: this.mode, ratePricingMode: booking_service.booking_store.selects?.ratePricingMode, roomTypeId: this.room?.roomtype?.id, currency: calendarData.calendar_data.property.currency }))))))), this.step === 'confirm' && (index.h("ir-booking-editor-form", { class: "booking-editor__step", key: "step-confirm", booking: this.booking, onDoReservation: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.doReservation(e.detail);
            }, room: this.room, mode: this.mode })))));
    }
    static get watchers() { return {
        "mode": [{
                "handleModeChange": 0
            }],
        "language": [{
                "languageChanged": 0
            }]
    }; }
};
IrBookingEditor.style = irBookingEditorCss();

const irBookingEditorDrawerCss = () => `.sc-ir-booking-editor-drawer-h{display:block}.booking-editor__drawer.sc-ir-booking-editor-drawer::part(dialog),.booking-editor__drawer.sc-ir-booking-editor-drawer [part~="dialog"]{overflow:hidden}.booking-editor__mode-toggle.sc-ir-booking-editor-drawer{display:flex;align-items:center;gap:0.5em;padding-inline-end:1rem}`;

const IrBookingEditorDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bookingEditorClosed = index.createEvent(this, "bookingEditorClosed");
    }
    /** Controls drawer visibility (reflected to DOM). */
    open;
    /** Auth ApiClient used for API requests. */
    ticket;
    /** Property identifier. */
    propertyid;
    /** UI language code (default: `en`). */
    language = 'en';
    /** Booking being created or edited. */
    booking;
    /** Current booking editor mode. */
    mode = 'PLUS_BOOKING';
    /** Optional drawer title override. */
    label;
    /** Check-in date (ISO string). */
    checkIn;
    /** Check-out date (ISO string). */
    checkOut;
    /** Selected unit identifier. */
    unitId;
    /** Payload for blocked unit dates. */
    blockedUnit;
    /** Allowed room type identifiers. */
    roomTypeIds = [];
    /** Room identifier used by the editor. */
    roomIdentifier;
    /** Pre-enables the day-use toggle (e.g. double-click-on-room-title entry point). */
    dayUse = false;
    /** The day-use extra service being edited (`mode="EDIT_DAY_USE"`) — carries its current unit/price for prefill and is updated in place via `doBookingExtraService` on submission. */
    extraService;
    step = 'details';
    isLoading;
    /** Emitted when the booking editor drawer is closed. */
    bookingEditorClosed;
    ApiClient = new ApiClient.ApiClient();
    bookingService = new booking_service.BookingService();
    bookingEditorService = new IRBookingEditorService();
    wasBlockedUnit = false;
    didAdjustBlockedUnit = false;
    originalBlockPayload;
    componentWillLoad() {
        if (this.ApiClient) {
            this.ApiClient.setApiClient(this.ticket);
        }
        this.initializeBlockedUnitState(this.blockedUnit);
        if (this.mode) {
            booking_service.booking_store.event_type = { type: this.mode };
        }
        if (this.dayUse) {
            booking_service.setBookingDraft({ dayUse: true });
            this.seedBarBookingDayUseFromHour();
        }
    }
    /**
     * BAR_BOOKING day-use bookings start "now" — seed the day-use arrival hour to one hour
     * from the current time so the front-desk agent isn't picking it from scratch. Only fills
     * an empty value, so it never clobbers a manual edit or an existing booking's hours.
     */
    seedBarBookingDayUseFromHour() {
        if (this.mode !== 'BAR_BOOKING' || !booking_service.booking_store.bookingDraft.dayUse) {
            return;
        }
        if (booking_service.booking_store.bookingDraft.dayUseHours?.from) {
            return;
        }
        booking_service.setBookingDraft({ dayUseHours: { ...booking_service.booking_store.bookingDraft.dayUseHours, from: moment.hooks().add(1, 'hour').format('HH:mm') } });
    }
    handleTicketChange() {
        if (this.ApiClient) {
            this.ApiClient.setApiClient(this.ticket);
        }
    }
    handleBlockedUnitChange(newValue) {
        this.initializeBlockedUnitState(newValue);
    }
    handleCheckInChange() {
        this.initializeBlockedUnitState(this.blockedUnit);
    }
    handleCheckOutChange() {
        this.initializeBlockedUnitState(this.blockedUnit);
    }
    handleUnitChange() {
        this.initializeBlockedUnitState(this.blockedUnit);
    }
    handleModeChange() {
        if (this.mode) {
            booking_service.booking_store.event_type = { type: this.mode };
        }
    }
    handleDayUseChange() {
        if (this.dayUse) {
            booking_service.setBookingDraft({ dayUse: true });
            this.seedBarBookingDayUseFromHour();
        }
    }
    initializeBlockedUnitState(blockedUnit) {
        const allowedStatusCodes = ['002', '003', '004'];
        if (!blockedUnit) {
            this.wasBlockedUnit = false;
            this.originalBlockPayload = undefined;
            return;
        }
        const hasBlockMetadata = Boolean(blockedUnit && allowedStatusCodes.includes(blockedUnit.STATUS_CODE));
        if (!hasBlockMetadata || !this.checkIn || !this.checkOut || !this.unitId) {
            this.wasBlockedUnit = false;
            this.originalBlockPayload = undefined;
            this.didAdjustBlockedUnit = false;
            return;
        }
        this.originalBlockPayload = {
            from_date: this.checkIn,
            to_date: this.checkOut,
            NOTES: blockedUnit.OPTIONAL_REASON || '',
            pr_id: this.unitId.toString(),
            STAY_STATUS_CODE: (blockedUnit.STATUS_CODE || (blockedUnit.OUT_OF_SERVICE ? '004' : Number(blockedUnit.RELEASE_AFTER_HOURS) === 0 ? '002' : '003')),
            DESCRIPTION: blockedUnit.RELEASE_AFTER_HOURS || '',
            BLOCKED_TILL_DATE: blockedUnit.ENTRY_DATE || undefined,
            BLOCKED_TILL_HOUR: blockedUnit.ENTRY_HOUR !== undefined && blockedUnit.ENTRY_HOUR !== null ? blockedUnit.ENTRY_HOUR.toString() : undefined,
            BLOCKED_TILL_MINUTE: blockedUnit.ENTRY_MINUTE !== undefined && blockedUnit.ENTRY_MINUTE !== null ? blockedUnit.ENTRY_MINUTE.toString() : undefined,
        };
        this.wasBlockedUnit = true;
        this.didAdjustBlockedUnit = false;
    }
    handleBookingStepChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { direction } = e.detail;
        switch (direction) {
            case 'next':
                this.step = 'confirm';
                break;
            case 'prev':
                this.step = 'details';
                break;
            default:
                console.warn('Direction not supported');
        }
    }
    get drawerLabel() {
        if (booking_service.booking_store.bookingDraft.dayUse && ['PLUS_BOOKING'].includes(this.mode)) {
            return t.t('Lcz_DayUseBookingTitle', { fallback: 'Day-Use Booking' });
        }
        if (this.label) {
            return this.label;
        }
        switch (this.mode) {
            case 'EDIT_DAY_USE':
                return t.t('Lcz_EditDayUseBookingTitle', { fallback: 'Edit Day Use Booking' });
            case 'SPLIT_BOOKING':
            case 'BAR_BOOKING':
            case 'ADD_ROOM':
            case 'EDIT_BOOKING':
            case 'PLUS_BOOKING':
                return t.t('Lcz_NewBooking', { fallback: 'New Booking' });
        }
    }
    handleDayUseToggle(value) {
        const checked = value === 'day-use';
        booking_service.resetAvailability();
        booking_service.setBookingDraft({
            dayUse: checked,
            source: checked ? booking_service.booking_store.selects.sources.find(s => s.type !== 'LABEL') : booking_service.booking_store.bookingDraft.source,
        });
        if (checked) {
            this.seedBarBookingDayUseFromHour();
        }
        booking_service.setDayUseSelection(null);
    }
    goToConfirm = (e) => {
        e?.stopPropagation();
        this.step = 'confirm';
    };
    goToDetails = () => {
        if (this.mode === 'BAR_BOOKING') {
            booking_service.resetReserved();
        }
        if (this.mode === 'EDIT_BOOKING') {
            booking_service.resetReserved();
            this.bookingEditorService.updateBooking(this.bookingEditorService.getRoom(this.booking, this.roomIdentifier));
        }
        this.step = 'details';
    };
    renderFooter() {
        switch (this.step) {
            case 'details':
                return this.renderDetailsActions();
            case 'confirm':
                return this.renderConfirmActions();
            default:
                return null;
        }
    }
    renderConfirmActions() {
        const { checkIn, checkOut } = booking_service.booking_store?.bookingDraft?.dates;
        const now = moment.hooks();
        const hasCheckIn = !!calendarData.calendar_data?.property.is_frontdesk_enabled && !!checkIn && (checkIn.isSame(now, 'date') || now.isBetween(checkIn, checkOut, 'date'));
        const isNewDayUseBooking = this.mode === 'PLUS_BOOKING' && booking_service.booking_store.bookingDraft.dayUse;
        const dayUseUnitHasUpcomingCheckIn = isNewDayUseBooking && booking.getDayUseUnitAvailability(booking_service.booking_store.dayUseSelection?.unit?.calendar_cell).hasUpcomingCheckIn;
        const showBookAndBlockTheNight = booking_service.booking_store.bookingDraft.dayUse && ['BAR_BOOKING', 'PLUS_BOOKING'].includes(this.mode) && !dayUseUnitHasUpcomingCheckIn;
        return (index.h(index.Fragment, null, index.h("ir-custom-button", { onClickHandler: this.goToDetails, size: "m", appearance: "filled", variant: "neutral" }, "Back"), showBookAndBlockTheNight && (index.h("ir-custom-button", { disabled: false, form: "new_booking_form", loading: this.isLoading === 'book&block', value: "book&block", type: "submit", size: "m", appearance: 'outlined', variant: "brand" }, t.t('Lcz_BookAndBlockTheNight', { fallback: 'Book and block the night' }))), index.h("ir-custom-button", { loading: this.isLoading === 'book', value: "book", form: "new_booking_form", disabled: false, type: "submit", size: "m", appearance: showBookAndBlockTheNight ? 'accent' : hasCheckIn ? 'outlined' : 'accent', variant: "brand" }, "Book"), hasCheckIn && !booking_service.booking_store.bookingDraft.dayUse && (index.h("ir-custom-button", { loading: this.isLoading === 'book-checkin', value: "book-checkin", form: "new_booking_form", type: "submit", size: "m", appearance: "accent", variant: "brand" }, "Book and check-in"))));
    }
    renderDetailsActions() {
        const haveRoomSelected = booking_service.hasAtLeastOneRoomSelected();
        return (index.h(index.Fragment, null, index.h("ir-custom-button", { "data-drawer": "close", size: "m", appearance: "filled", variant: "neutral" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), !booking_service.booking_store.bookingDraft.dayUse && ['PLUS_BOOKING', 'ADD_ROOM'].includes(this.mode) && (index.h(index.Fragment, null, !haveRoomSelected && index.h("wa-tooltip", { for: "booking_editor__next-button" }, t.t('Lcz_PleaseSelectAtLeastOneUnitToContinue', { fallback: 'Please select at least one unit to continue.' })), index.h("ir-custom-button", { id: "booking_editor__next-button", disabled: !haveRoomSelected, onClickHandler: this.goToConfirm, size: "m", appearance: "accent", variant: "brand" }, "Next")))));
    }
    async closeDrawer() {
        if (this.wasBlockedUnit && !this.didAdjustBlockedUnit) {
            await this.checkAndBlockDate();
        }
        else if (this.blockedUnit && this.blockedUnit.STATUS_CODE) {
            await this.handleBlockDate();
        }
        this.bookingEditorClosed.emit();
        this.step = 'details';
    }
    getBlockUnitPayload() {
        if (this.wasBlockedUnit && this.originalBlockPayload) {
            return this.originalBlockPayload;
        }
        if (!this.blockedUnit || !this.checkIn || !this.checkOut || !this.unitId) {
            return undefined;
        }
        const releaseData = utils.getReleaseHoursString(this.blockedUnit.RELEASE_AFTER_HOURS !== null ? Number(this.blockedUnit.RELEASE_AFTER_HOURS) : null);
        return {
            from_date: this.checkIn,
            to_date: this.checkOut,
            NOTES: this.blockedUnit.OPTIONAL_REASON || '',
            pr_id: this.unitId.toString(),
            STAY_STATUS_CODE: this.blockedUnit.OUT_OF_SERVICE ? '004' : Number(this.blockedUnit.RELEASE_AFTER_HOURS) === 0 ? '002' : '003',
            DESCRIPTION: this.blockedUnit.RELEASE_AFTER_HOURS || '',
            ...releaseData,
        };
    }
    async handleBlockDate(autoReset = true, overridePayload) {
        try {
            const payload = overridePayload ?? this.getBlockUnitPayload();
            if (!payload) {
                return;
            }
            await this.bookingService.blockUnit(payload);
            if (autoReset) {
                this.blockedUnit = undefined;
                this.initializeBlockedUnitState(undefined);
            }
        }
        catch (error) { }
    }
    async handleAdjustBlockedUnitEvent(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        try {
            await this.adjustBlockedDatesAfterReservation(event.detail);
            this.didAdjustBlockedUnit = true;
        }
        catch (error) {
            console.error('Error adjusting blocked unit:', error);
        }
    }
    async adjustBlockedDatesAfterReservation(serviceParams) {
        if (!this.wasBlockedUnit || !this.originalBlockPayload) {
            return;
        }
        const originalPayload = { ...this.originalBlockPayload };
        const originalFromDate = moment.hooks(this.originalBlockPayload.from_date, 'YYYY-MM-DD');
        const currentFromDate = moment.hooks(serviceParams.booking.from_date, 'YYYY-MM-DD');
        const originalToDate = moment.hooks(this.originalBlockPayload.to_date, 'YYYY-MM-DD');
        const currentToDate = moment.hooks(serviceParams.booking.to_date, 'YYYY-MM-DD');
        if (currentToDate.isBefore(originalToDate, 'days')) {
            const trailingBlockPayload = {
                ...originalPayload,
                from_date: currentToDate.format('YYYY-MM-DD'),
            };
            await this.bookingService.blockUnit(trailingBlockPayload);
        }
        if (currentFromDate.isAfter(originalFromDate, 'days')) {
            const leadingBlockPayload = {
                ...originalPayload,
                to_date: currentFromDate.format('YYYY-MM-DD'),
            };
            await this.bookingService.blockUnit(leadingBlockPayload);
        }
        return;
    }
    async checkAndBlockDate() {
        try {
            if (!this.originalBlockPayload || !this.roomTypeIds || this.roomTypeIds.length === 0) {
                return;
            }
            const roomTypeIds = this.roomTypeIds.map(id => Number(id)).filter(id => !Number.isNaN(id));
            if (roomTypeIds.length === 0) {
                return;
            }
            await this.bookingService.getBookingAvailability({
                from_date: this.originalBlockPayload.from_date,
                to_date: this.originalBlockPayload.to_date,
                propertyid: calendarData.calendar_data.property.id,
                adultChildCount: {
                    adult: 2,
                    child: 0,
                },
                language: locale_controller.LocaleController.language,
                room_type_ids: roomTypeIds,
                currency: calendarData.calendar_data.property?.currency,
            });
            const isAvailable = booking_service.booking_store.roomTypes.every(rt => {
                if (rt.is_available_to_book) {
                    return true;
                }
                return rt.inventory > 0 && rt['not_available_reason'] === 'ALL-RATES-PLAN-NOT-BOOKABLE';
            });
            if (isAvailable) {
                await this.handleBlockDate();
            }
            else {
                console.warn('Blocked date is unavailable. Continuing...');
            }
        }
        catch (error) {
            console.error('Error checking and blocking date:', error);
        }
    }
    render() {
        return (index.h("ir-drawer", { key: 'fc62592aa80115da89a219dfe297298ab1e04fc6', onDrawerHide: async (event) => {
                event.stopImmediatePropagation();
                event.stopPropagation();
                await this.closeDrawer();
            }, style: {
                '--ir-drawer-width': '70rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, class: "booking-editor__drawer", label: this.drawerLabel, open: this.open }, this.step === 'details' && !this.unitId && ['PLUS_BOOKING', 'BAR_BOOKING'].includes(this.mode) && calendarData.calendar_data?.property?.is_frontdesk_enabled && (index.h("div", { key: 'baa4ee0e2dfdd81292576d9be3f44cc595b832d0', slot: "header-actions", style: { alignSelf: 'center' } }, index.h("wa-radio-group", { key: 'b6b3eae256f05b3634135cad99dd92b81ec04fea', size: "s", value: booking_service.booking_store.bookingDraft.dayUse ? 'day-use' : 'manual', orientation: "horizontal", onchange: e => this.handleDayUseToggle(e.target.value) }, index.h("wa-radio", { key: 'ae137b1f7f2f315228c9fd3e6c4a017838cb4e3b', appearance: "button", value: "manual" }, t.t('Lcz_Stay', { fallback: 'Stay' })), index.h("wa-radio", { key: '196ab0d962ea19541a6ae144d0b9e34508cf7ec5', appearance: "button", value: "day-use" }, t.t('Lcz_DayUseHyphen', { fallback: 'Day-use' }))))), this.open && this.ticket && (index.h("ir-booking-editor", { key: '115bb9f371c6f6dbd231b9501eed8b715ea53a76', onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail.cause;
            }, onAdjustBlockedUnit: event => this.handleAdjustBlockedUnitEvent(event), unitId: this.unitId, propertyId: this.propertyid, roomTypeIds: this.roomTypeIds, onResetBookingEvt: async () => {
                this.blockedUnit = undefined;
                this.initializeBlockedUnitState(undefined);
                await this.closeDrawer();
            }, step: this.step, blockedUnit: this.blockedUnit, language: this.language, booking: this.booking, mode: this.mode, checkIn: this.checkIn, checkOut: this.checkOut, identifier: this.roomIdentifier, extraService: this.extraService })), index.h("div", { key: '4bd7dd979475c7b9ef9f47aa57859114796e2c73', slot: "footer", class: "ir__drawer-footer" }, this.renderFooter())));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }],
        "blockedUnit": [{
                "handleBlockedUnitChange": 0
            }],
        "checkIn": [{
                "handleCheckInChange": 0
            }],
        "checkOut": [{
                "handleCheckOutChange": 0
            }],
        "unitId": [{
                "handleUnitChange": 0
            }],
        "mode": [{
                "handleModeChange": 0
            }],
        "dayUse": [{
                "handleDayUseChange": 0
            }]
    }; }
};
IrBookingEditorDrawer.style = irBookingEditorDrawerCss();

const irBookingEditorFormCss = () => `.sc-ir-booking-editor-form-h{display:flex;flex-direction:column;height:100%;color:var(--wa-color-text-normal)}.booking-editor__guest-form.sc-ir-booking-editor-form{display:flex;flex-direction:column;gap:1rem;height:100%}.booking-editor__header.sc-ir-booking-editor-form{width:100%;display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap;gap:1rem}.booking-editor__dates.sc-ir-booking-editor-form{line-height:1.2;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m)}.booking-editor__total.sc-ir-booking-editor-form{display:flex;align-items:center;justify-content:flex-end;white-space:nowrap;margin-top:0.25rem;text-align:end}.booking-editor__total-label.sc-ir-booking-editor-form{margin-inline-end:4px}.booking-editor__total-amount.sc-ir-booking-editor-form{white-space:nowrap;font-weight:700;font-size:var(--wa-font-size-m);margin-inline-start:2rem}.booking-editor__booked-by.sc-ir-booking-editor-form{display:flex;flex-direction:column;gap:1rem;margin-bottom:1.5rem}.booking-editor__booked-by-section.sc-ir-booking-editor-form{margin-top:0.5rem}.booking-editor__heading.sc-ir-booking-editor-form{margin:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l)}@media (min-width: 768px){.booking-editor__total.sc-ir-booking-editor-form{margin-top:0}.booking-editor__booked-by.sc-ir-booking-editor-form{flex-direction:row;align-items:center}.booking-editor__booked-by-picker.sc-ir-booking-editor-form{max-width:40rem}}`;

const IrBookingEditorForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.doReservation = index.createEvent(this, "doReservation");
    }
    mode = 'PLUS_BOOKING';
    room;
    booking;
    agent;
    guests;
    totalCost = 0;
    assignee = 'guest';
    resolvedAgent;
    doReservation;
    bookingService = new booking_service.BookingService();
    agentsService = new agents_service.AgentsService();
    bookingEditorService;
    totalRooms = 0;
    pickerEl;
    async componentWillLoad() {
        this.totalRooms = booking_service.calculateTotalRooms();
        this.totalCost = this.totalRooms > 1 ? await booking_service.getBookingTotalPrice() : 0;
        this.bookingEditorService = new IRBookingEditorService(this.mode);
        if (this.agent) {
            this.resolvedAgent = this.agent;
        }
        else if (this.booking?.agent) {
            this.resolvedAgent = await this.agentsService.getExposedAgent({ id: this.booking.agent.id });
        }
        if (this.bookingEditorService.isEventType(['ADD_ROOM', 'SPLIT_BOOKING']) && functions.isAgentMode(this.resolvedAgent)) {
            this.assignee = 'agent';
            booking_service.setBookingDraft({ roomAssignee: 'agent' });
        }
    }
    async handleRecalculation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.totalCost = this.totalRooms > 1 ? await booking_service.getBookingTotalPrice() : 0;
    }
    async fetchGuests(email) {
        try {
            if (!email) {
                return;
            }
            this.guests = await this.bookingService.fetchExposedGuest(email, calendarData.calendar_data.property.id);
        }
        catch (error) {
            console.log(error);
        }
    }
    handleComboboxSelect(e) {
        const guest = this.guests?.find(guest => guest.id?.toString() === e.detail.item.value);
        if (!guest) {
            console.warn(`guest not found with id ${e.detail.item.value}`);
            return;
        }
        booking_service.updateBookedByGuest({
            id: guest.id,
            email: guest.email,
            firstName: guest.first_name,
            lastName: guest.last_name,
            mobile: guest.mobile_without_prefix,
            countryId: guest.country_id?.toString(),
            phone_prefix: guest['country_phone_prefix'],
        });
        booking_service.syncFirstRoomGuestName('first_name', guest.first_name);
        booking_service.syncFirstRoomGuestName('last_name', guest.last_name);
    }
    render() {
        const { dates, dayUse } = booking_service.booking_store.bookingDraft;
        let hasBookedByGuestController = false;
        return (index.h("form", { key: '7b711ba258a11c2f9850207a5dc42495726421c7', class: "booking-editor__guest-form", id: "new_booking_form", autoComplete: "off", onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                this.doReservation.emit(submitter?.value);
            } }, !dayUse && (index.h("div", { key: '9c2cabcd8f5f69f4e392ed61d7583854975e2d62', class: "booking-editor__header" }, index.h("ir-date-view", { key: 'cd7f08151c1d6be7cdbd3c71ad665d44a87e3523', class: "booking-editor__dates", from_date: dates.checkIn, to_date: dates.checkOut }), this.totalRooms > 1 && (index.h("div", { key: '121e48fb43db715d875e4a26eaa298adf19467ca', class: "booking-editor__total" }, index.h("span", { key: '354f70347e9c7d7c17d13daa5d06cc58e2e9fd73', class: "booking-editor__total-label" }, t.t('Lcz_TotalPrice', { fallback: 'Total price' })), ' ', index.h("span", { key: '08242b904e18e29e11966e0c952fa4a3682da664', class: "booking-editor__total-amount" }, number.formatAmount(calendarData.calendar_data.property.currency.symbol, this.totalCost)))))), dayUse && index.h("ir-booking-editor-day-use", { key: 'ffdeca8dddd3f8546c1387bbd0922d27c7385af4' }), !dayUse &&
            Object.values(booking_service.booking_store.ratePlanSelections).map(val => Object.values(val).map(ratePlan => {
                const rp = ratePlan;
                if (rp.reserved === 0) {
                    return null;
                }
                return [...new Array(rp.reserved)].map((_, i) => {
                    const shouldAutoFillGuest = ['BAR_BOOKING', 'PLUS_BOOKING'].includes(this.mode) &&
                        booking_service.booking_store.bookedByGuest.id === -1 &&
                        !hasBookedByGuestController &&
                        !booking_service.booking_store.bookedByGuestManuallyEdited;
                    if (shouldAutoFillGuest) {
                        hasBookedByGuestController = true;
                    }
                    return (index.h("igl-application-info", { autoFillGuest: shouldAutoFillGuest, totalNights: booking.calculateDaysBetweenDates(dates.checkIn.format('YYYY-MM-DD'), dates.checkOut.format('YYYY-MM-DD')), bedPreferenceType: booking_service.booking_store.selects.bedPreferences, currency: calendarData.calendar_data.property.currency, guestInfo: rp.guest ? rp.guest[i] : null, bookingType: this.mode, rateplanSelection: rp, key: `${rp.ratePlan.id}_${i}`, roomIndex: i, baseData: this.mode === 'EDIT_BOOKING'
                            ? {
                                roomtypeId: this.room.roomtype.id,
                                unit: this.room.unit,
                            }
                            : undefined }));
                });
            })), this.bookingEditorService.isEventType(['BAR_BOOKING', 'PLUS_BOOKING']) && (index.h("section", { key: 'd63573f21924b10a96f374c2d7207cdce653c7e6', class: "booking-editor__booked-by-section" }, index.h("div", { key: 'cafc0e010083a3dedf812f62f3ae2074b3c59e0e', class: "booking-editor__booked-by booking-editor__booked-by-header" }, index.h("h4", { key: '6d6374d67872c9aa0967cf5df86e28993f58e4dd', class: "booking-editor__heading booking-editor__booked-by-title" }, t.t('Lcz_BookedBy', { fallback: 'Booked by' })), booking_service.booking_store.bookingDraft?.agent ? (index.h("span", null, booking_service.booking_store.bookingDraft?.agent.name)) : (index.h(index.Fragment, null, index.h("ir-picker", { class: "booking-editor__booked-by-picker", appearance: "filled",
            // placeholder={t('Lcz_SearchCustomerPlaceholder', { fallback: 'Search customer by email, name or company name' })}
            placeholder: t.t('Lcz_SearchCustomerByEmailOrName', { fallback: 'Search customer by email or name' }), withClear: true, "onText-change": event => this.fetchGuests(event.detail), debounce: 500, loading: irInterceptor_store.isRequestPending('/Fetch_Exposed_Guests'), mode: "select-async", ref: el => (this.pickerEl = el), "onCombobox-select": this.handleComboboxSelect.bind(this) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (index.h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        })), booking_service.booking_store.bookedByGuest.id !== -1 && (index.h("ir-custom-button", { onClickHandler: () => {
                booking_service.updateBookedByGuest(booking_service.bookedByGuestBaseData);
                this.pickerEl.clearInput();
            }, variant: "brand" }, t.t('Lcz_ClearUser', { fallback: 'Clear user' })))))), index.h("ir-booking-editor-guest-form", { key: 'f7f8bed22f2c34242ec2db9c987cea6c9783cbce' }))), this.bookingEditorService.isEventType(['SPLIT_BOOKING', 'ADD_ROOM']) && functions.isAgentMode(this.resolvedAgent) && (index.h("ir-service-assignee-select", { key: '5496d48414bf9cac02bd3bad8d16873ff850fc3b', style: { maxWidth: '500px' }, agent: this.booking.agent, assigneeType: this.assignee, onAssignmentChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.assignee = e.detail;
                booking_service.setBookingDraft({ roomAssignee: e.detail });
            } }))));
    }
};
IrBookingEditorForm.style = irBookingEditorFormCss();

const irBookingEditorHeaderCss = () => `.sc-ir-booking-editor-header-h{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}.booking-editor-header__container.sc-ir-booking-editor-header{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}.booking-editor-header__adults-select.sc-ir-booking-editor-header::part(display-input),.booking-editor-header__adults-select.sc-ir-booking-editor-header [part~="display-input"]{text-transform:capitalize}.booking-editor-header__booking-picker.sc-ir-booking-editor-header{max-width:350px}.booking-editor-header__booking-picker-validator.sc-ir-booking-editor-header{margin-bottom:1rem}.booking-editor-header__tax_statement.sc-ir-booking-editor-header{margin-top:1.5rem}@media (min-width: 768px){.booking-editor__date-range.sc-ir-booking-editor-header::part(input-end){margin:0}.booking-editor-header__container.sc-ir-booking-editor-header{flex-direction:row;align-items:flex-start;flex-wrap:wrap}.booking-editor-header__adults-select.sc-ir-booking-editor-header{width:100px}.booking-editor-header__children-select.sc-ir-booking-editor-header{width:170px}}@media (min-width: 1024px){.booking-editor__date-validator.sc-ir-booking-editor-header::part(error-message){position:absolute}}`;

const IrBookingEditorHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guestSelected = index.createEvent(this, "guestSelected");
        this.checkAvailability = index.createEvent(this, "checkAvailability");
    }
    /** Booking context used for edit, add-room, and split flows */
    booking;
    isLoading;
    isBlockConversion;
    /** Controls header behavior and date constraints */
    mode = 'PLUS_BOOKING';
    /** Fixed check-in date (YYYY-MM-DD), if applicable */
    checkIn;
    /** Fixed check-out date (YYYY-MM-DD), if applicable */
    checkOut;
    _isLoading;
    bookings = [];
    datesSchema;
    guestSelected;
    checkAvailability;
    bookingService = new booking_service.BookingService();
    adultsSchema = types.coerce.number().min(1);
    bookingEditorService = new IRBookingEditorService();
    BookedByGuestPickerSchema = types.objectType({
        firstName: types.stringType(),
        // lastName: z.string(),
    })
        .superRefine((data, ctx) => {
        if (!data.firstName) {
            ctx.addIssue({
                path: ['firstName'],
                code: types.ZodIssueCode.custom,
                message: t.t('Lcz_ChooseBookingNumber', { fallback: 'Choose a booking number' }),
            });
        }
        // if (!data.lastName) {
        //   ctx.addIssue({
        //     path: ['lastName'],
        //     code: z.ZodIssueCode.custom,
        //     message: t('Lcz_ChooseBookingNumber', { fallback: 'Choose a booking number' }),
        //   });
        // }
    });
    pickerRef;
    // =====================
    // Handlers
    // =====================
    componentWillLoad() {
        this.createDatesSchema();
        this.bookingEditorService.setMode(this.mode);
    }
    handleBookingChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.createDatesSchema();
        }
    }
    handleModeChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.createDatesSchema();
            this.bookingEditorService.setMode(this.mode);
        }
    }
    // private createDatesSchema() {
    //   this.datesSchema = z.object({
    //     checkIn: z.custom(date => {
    //       if (!moment.isMoment(date)) {
    //         return false;
    //       }
    //       if (['SPLIT_BOOKING', 'ADD_ROOM'].includes(this.mode) && !date.isSameOrBefore(this.booking.to_date)) {
    //         return false;
    //       }
    //       return true;
    //     }),
    //     checkOut: z.custom(data => moment.isMoment(data)),
    //   });
    // }
    createDatesSchema() {
        this.datesSchema = types.objectType({
            checkIn: types.anyType(),
            checkOut: types.anyType(),
        })
            .superRefine((data, ctx) => {
            // ─────────────────────────────
            // checkIn validations
            // ─────────────────────────────
            if (!moment.hooks.isMoment(data.checkIn)) {
                ctx.addIssue({
                    path: ['checkIn'],
                    code: types.ZodIssueCode.custom,
                    message: t.t('Lcz_CheckInDateRequired', { fallback: 'Check-in date is required' }),
                });
            }
            if (moment.hooks.isMoment(data.checkIn) && this.bookingEditorService.isEventType(['SPLIT_BOOKING', 'ADD_ROOM']) && !data.checkIn.isSameOrBefore(this.booking.to_date, 'date')) {
                ctx.addIssue({
                    path: ['checkIn'],
                    code: types.ZodIssueCode.custom,
                    message: `${t.t('Lcz_CheckInDateShouldBeMAx', { fallback: 'The check-in or check-out must fall within %1 and %2.', params: [irDate.formatDate(this.booking.from_date, 'ddd, DD MMM YYYY'), irDate.formatDate(this.booking.to_date, 'ddd, DD MMM YYYY')] })}  `,
                });
            }
            // ─────────────────────────────
            // checkOut validations
            // ─────────────────────────────
            if (!moment.hooks.isMoment(data.checkOut)) {
                ctx.addIssue({
                    path: ['checkOut'],
                    code: types.ZodIssueCode.custom,
                    message: t.t('Lcz_CheckOutDateRequired', { fallback: 'Check-out date is required' }),
                });
            }
        });
    }
    async handleBookingSearch(value) {
        try {
            this._isLoading = true;
            if (!value) {
                this.pickerRef.clearInput();
                return;
            }
            this.bookings = await this.bookingService.fetchExposedBookings(value, calendarData.calendar_data.property.id, this.checkIn, this.checkOut);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this._isLoading = false;
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        this.stopEvent(event);
        try {
            if (this.mode === 'SPLIT_BOOKING' && !booking_service.booking_store.bookedByGuest.firstName) {
                irCityLedgerTransactionForm_schema.BookedByGuestSchema.parse(booking_service.booking_store.bookedByGuest);
            }
            this.datesSchema.parse(booking_service.booking_store.bookingDraft.dates);
            this.adultsSchema.parse(booking_service.booking_store.bookingDraft?.occupancy?.adults);
            this.checkAvailability.emit();
        }
        catch (error) {
            console.error(error);
        }
    }
    handleDateRangeChange(event) {
        this.stopEvent(event);
        booking_service.resetAvailability();
        booking_service.setBookingDraft({ dates: event.detail });
    }
    handleDayUseDateChange(date) {
        if (!date) {
            return;
        }
        booking_service.resetAvailability();
        booking_service.setBookingDraft({
            dates: {
                checkIn: moment.hooks(date),
                checkOut: moment.hooks(date).add(1, 'day'),
            },
        });
    }
    handleSourceChange(event) {
        this.stopEvent(event);
        booking_service.resetAvailability();
        const value = event.target.value;
        const source = booking_service.booking_store.selects.sources.find(s => s.id === value);
        booking_service.setBookingDraft({ source });
    }
    handleAdultsChange(event) {
        this.stopEvent(event);
        booking_service.resetAvailability();
        const adults = Number(event.target.value);
        const { children } = booking_service.booking_store.bookingDraft.occupancy;
        booking_service.setBookingDraft({
            occupancy: { adults, children },
        });
    }
    handleChildrenChange(event) {
        this.stopEvent(event);
        booking_service.resetAvailability();
        const children = Number(event.target.value);
        const { adults } = booking_service.booking_store.bookingDraft.occupancy;
        booking_service.setBookingDraft({
            occupancy: { adults, children },
        });
    }
    stopEvent(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
    }
    // =====================
    // Computed values
    // =====================
    get minDate() {
        const today = moment.hooks();
        switch (this.mode) {
            case 'EDIT_BOOKING':
                return moment.hooks(this.booking.from_date, 'YYYY-MM-DD').add(-2, 'weeks').format('YYYY-MM-DD');
            case 'ADD_ROOM':
                return this.booking?.from_date;
            case 'SPLIT_BOOKING':
            default:
                if (this.checkIn && this.isBlockConversion)
                    return this.checkIn;
                return today.add(-1, 'days').format('YYYY-MM-DD');
        }
    }
    get maxDate() {
        // const today = moment();
        // const next60Days = today.add(60, 'days').format('YYYY-MM-DD');
        switch (this.mode) {
            case 'PLUS_BOOKING':
                if (this.checkOut && this.isBlockConversion)
                    return this.checkOut;
                return undefined;
            case 'ADD_ROOM':
            // return this.booking.to_date;
            case 'SPLIT_BOOKING':
            default:
                return undefined;
        }
    }
    get childrenSelectPlaceholder() {
        const { child_max_age } = calendarData.calendar_data.property.adult_child_constraints;
        const years = child_max_age === 1 ? t.t('Lcz_Year', { fallback: 'year' }) : t.t('Lcz_Years', { fallback: 'years' });
        return `${t.t('Lcz_ChildCaption', { fallback: 'Child.' })} ${number.formatCount(0)} - ${number.formatCount(child_max_age)} ${years}`;
    }
    async selectGuest(e) {
        this.stopEvent(e);
        const booking_nbr = e.detail?.item?.value;
        const booking = await this.bookingService.getExposedBooking({ booking_nbr, language: locale_controller.LocaleController.language, withExtras: true });
        this.guestSelected.emit(booking);
    }
    render() {
        const { sources } = booking_service.booking_store.selects;
        const { adults, children } = booking_service.booking_store.bookingDraft.occupancy;
        const { checkIn, checkOut } = booking_service.booking_store.bookingDraft.dates;
        const { dayUse } = booking_service.booking_store.bookingDraft;
        return (index.h(index.Host, { key: '2f9b01cc0fc4d34c58e5d51f749310ccb046eeec' }, index.h("form", { key: 'a8de82b8dfd433a22616bf308e6e7487905b2b89', onSubmit: this.handleSubmit.bind(this) }, this.bookingEditorService.isEventType('SPLIT_BOOKING') && (index.h("ir-validator", { key: 'f21e1d07aa933609b98e4f2dbf7203629fb8a976', value: booking_service.booking_store.bookedByGuest, class: "booking-editor-header__booking-picker-validator", showErrorMessage: true, schema: this.BookedByGuestPickerSchema }, index.h("ir-picker", { key: '61bb06ef171d02b42a95f211aa2777749a61cf72', withClear: true, mode: "select-async", class: "booking-editor-header__booking-picker", debounce: 300, ref: el => (this.pickerRef = el), label: `${t.t('Lcz_Tobooking', { fallback: 'To booking' })}#`,
            // defaultValue={Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : ''}
            // value={Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : ''}
            placeholder: t.t('Lcz_BookingNumber', { fallback: 'Booking number' }), loading: this._isLoading, "onText-change": e => this.handleBookingSearch(e.detail), "onCombobox-select": this.selectGuest.bind(this) }, this.bookings.map(b => {
            const label = `${b.booking_nbr} ${b.guest.first_name} ${b.guest.last_name}`;
            return (index.h("ir-picker-item", { value: b.booking_nbr?.toString(), label: label }, `${number.formatBookingNumber(b.booking_nbr)} ${b.guest.first_name} ${b.guest.last_name}`));
        })))), index.h("div", { key: '059c58ba6e3919761ec1b08356af9f6f037cf4be', class: "booking-editor-header__container" }, !this.bookingEditorService.isEventType(['EDIT_BOOKING', 'ADD_ROOM', 'SPLIT_BOOKING']) && !dayUse && (index.h("wa-select", { key: '5121a06e2506c599d1eae5f9fca8a1faa17028df', size: "s", placeholder: t.t('Lcz_Source', { fallback: 'Source' }), value: booking_service.booking_store.bookingDraft.source?.id?.toString(), defaultValue: booking_service.booking_store.bookingDraft.source?.id, "onwa-hide": this.stopEvent.bind(this), onchange: this.handleSourceChange.bind(this) }, sources.map(option => (option.type === 'LABEL' ? index.h("small", null, option.description) : index.h("wa-option", { value: option.id?.toString() }, option.description))))), dayUse ? (index.h("ir-validator", { class: "booking-editor__date-validator", showErrorMessage: true, value: checkIn?.format('YYYY-MM-DD'), schema: types.stringType().min(1, t.t('Lcz_DateIsRequired', { fallback: 'Date is required' })) }, index.h("ir-date-select", { date: checkIn?.format('YYYY-MM-DD'), minDate: moment.hooks().format('YYYY-MM-DD'), emitEmptyDate: true, onDateChanged: e => this.handleDayUseDateChange(e.detail.start) }, index.h("wa-icon", { part: "calendar-icon", slot: "start", variant: "regular", name: "calendar" })))) : (index.h("ir-validator", { class: "booking-editor__date-validator", showErrorMessage: true, value: booking_service.booking_store.bookingDraft.dates, schema: this.datesSchema, style: { position: 'relative' } }, index.h("ir-date-range", { class: "booking-editor__date-range", defaultData: {
                fromDate: checkIn?.format('YYYY-MM-DD') ?? '',
                toDate: checkOut?.format('YYYY-MM-DD') ?? '',
            }, variant: "booking", withDateDifference: true, minDate: this.minDate, maxDate: this.maxDate, onDateRangeChange: this.handleDateRangeChange.bind(this) }))), !this.bookingEditorService.isEventType(['EDIT_BOOKING', 'EDIT_DAY_USE']) && (index.h(index.Fragment, { key: '45b0eb9a6f7d5609a522c52758ec053837fae54a' }, index.h("ir-validator", { key: '46f9eb61360e6c161f0c970296dfb9eb64e2011d', value: adults, schema: this.adultsSchema }, index.h("wa-select", { key: '0f6eb38003b5b892330ff8506930c7d4d6d08633', class: "booking-editor-header__adults-select", size: "s", placeholder: t.t('Lcz_Adults', { fallback: 'adults' }), value: adults?.toString(), defaultValue: adults?.toString(),
            // onwa-hide={this.stopEvent.bind(this)}
            onchange: this.handleAdultsChange.bind(this) }, Array.from({ length: calendarData.calendar_data.property.adult_child_constraints.adult_max_nbr }, (_, i) => i + 1).map(option => (index.h("wa-option", { value: option.toString() }, number.formatCount(option)))))), calendarData.calendar_data.property.adult_child_constraints.child_max_nbr > 0 && (index.h("wa-select", { key: '2b6d784a1722daf5bb4e683d880bfa574435eb48', class: "booking-editor-header__children-select", size: "s", placeholder: this.childrenSelectPlaceholder, value: children?.toString(), defaultValue: children?.toString(),
            // onwa-hide={this.stopEvent.bind(this)}
            onchange: this.handleChildrenChange.bind(this) }, Array.from({ length: calendarData.calendar_data.property.adult_child_constraints.child_max_nbr }, (_, i) => i + 1).map(option => (index.h("wa-option", { value: option.toString() }, number.formatCount(option)))))))), index.h("ir-custom-button", { key: '629cf6dfd4e7020311ea17e12067b603d0a818a7', loading: this.isLoading, type: "submit", variant: "brand" }, t.t('Lcz_Check', { fallback: 'Check' }))), booking_service.booking_store.roomTypes?.length > 0 && !this.isLoading && calendarData.calendar_data.tax_statement && (index.h("wa-callout", { key: '660d41e5458fd405c52388deef7f5eb45e66e831', size: "s", variant: "neutral", appearance: "filled", class: "booking-editor-header__tax_statement" }, calendarData.calendar_data.tax_statement)))));
    }
    static get watchers() { return {
        "booking": [{
                "handleBookingChange": 0
            }],
        "mode": [{
                "handleModeChange": 0
            }]
    }; }
};
IrBookingEditorHeader.style = irBookingEditorHeaderCss();

const irBookingExtraNoteCss = () => `.sc-ir-booking-extra-note-h{display:block}`;

const IrBookingExtraNote = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal");
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt");
    }
    open;
    booking;
    isLoading = false;
    note = '';
    closeModal;
    resetBookingEvt;
    bookingService = new booking_service.BookingService();
    componentWillLoad() {
        if (this.booking.extras) {
            this.setNote(booking.getPrivateNote(this.booking.extras));
        }
    }
    setNote(value) {
        this.note = value;
    }
    async savePrivateNote() {
        try {
            this.isLoading = true;
            let prevExtras = this.booking.extras || [];
            const newExtraObj = { key: 'private_note', value: this.note };
            if (prevExtras.length === 0) {
                prevExtras.push(newExtraObj);
            }
            else {
                const oldPrivateNoteIndex = prevExtras.findIndex(e => e.key === 'private_note');
                if (oldPrivateNoteIndex === -1) {
                    prevExtras.push(newExtraObj);
                }
                else {
                    prevExtras[oldPrivateNoteIndex] = newExtraObj;
                }
            }
            const res = await this.bookingService.doReservation({
                assign_units: true,
                is_pms: true,
                agent: this.booking.agent,
                is_direct: true,
                is_in_loyalty_mode: false,
                promo_key: null,
                booking: this.booking,
                Is_Non_Technical_Change: true,
                extras: prevExtras,
            });
            this.resetBookingEvt.emit(res);
            this.closeDialog();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async openDialog() {
        this.open = true;
    }
    async closeDialog() {
        this.open = false;
    }
    render() {
        return (index.h("ir-dialog", { key: '4054aaee352e95e20b76fc2f971af0ba1d6d7491', label: t.t('Lcz_PrivateNote', { fallback: 'Private Note' }), open: this.open, onIrDialogHide: () => {
                this.open = false;
            } }, index.h("wa-textarea", { key: 'c4bbb7adce29135693dbd55d8a1c996d3e904432', size: "s", placeholder: t.t('Lcz_PrivateNote_MaxChar'), defaultValue: this.note, onchange: e => this.setNote(e.target.value), value: this.note }), index.h("div", { key: '43c2e856841963d8b6f2e26fc22d81784c91c16e', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '8061b7d77edcbdb2247711d30b1cf5e4cbd1cc03', "data-dialog": "close", size: "m", variant: "neutral", appearance: "filled", onClickHandler: () => this.closeModal.emit(null), class: `flex-fill'}` }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '7943c47dfae69fa5fb29d0c5e74e6411e092c95d', size: "m", onClickHandler: () => this.savePrivateNote(), variant: "brand", loading: this.isLoading }, t.t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrBookingExtraNote.style = irBookingExtraNoteCss();

const irBookingGuaranteeCss = () => `.sc-ir-booking-guarantee-h{display:block}.sc-ir-booking-guarantee-h{font-family:'Open Sans',     -apple-system,     BlinkMacSystemFont,     'Segoe UI',     Roboto,     'Helvetica Neue',     Arial,     sans-serif !important}.sc-ir-booking-guarantee-h *.sc-ir-booking-guarantee{font-family:'Open Sans',     -apple-system,     BlinkMacSystemFont,     'Segoe UI',     Roboto,     'Helvetica Neue',     Arial,     sans-serif !important}.iframeHeight.sc-ir-booking-guarantee{height:max-content;height:22.5rem}.ir-me-1.sc-ir-booking-guarantee{margin-inline-end:0.25rem}`;

const IrBookingGuarantee = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    bookingService;
    collapsed = false;
    paymentDetailsUrl = '';
    paymentExceptionMessage = '';
    async componentWillLoad() {
    }
    formatCurrency(amount, currency, locale = 'en-US') {
        if (!currency || amount < 0) {
            return '';
        }
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);
    }
    checkPaymentCode(value) {
        return calendarData.calendar_data.allowed_payment_methods?.find(pm => pm.code === value)?.description ?? null;
    }
    getPaymentMethod() {
        let paymentMethod = null;
        const payment_code = this.booking?.extras?.find(e => e.key === 'payment_code');
        if (this.booking.agent) {
            const code = this.booking?.extras?.find(e => e.key === 'agent_payment_mode');
            if (code) {
                paymentMethod = code.value === '001' ? t.t('Lcz_OnCredit') : payment_code ? this.checkPaymentCode(payment_code.value) : null;
            }
        }
        else if (payment_code) {
            paymentMethod = payment_code.value === '000' ? t.t('Lcz_NoCardInfoRequired', { fallback: 'No card info required upon booking' }) : this.checkPaymentCode(payment_code.value);
        }
        return paymentMethod;
    }
    async handleToggleCollapse() {
        if (!this.booking.is_direct && this.booking.channel_booking_nbr && !this.booking.guest.cci && !this.collapsed) {
            this.paymentDetailsUrl = await this.bookingService.getPCICardInfoURL(this.booking.booking_nbr);
        }
        this.collapsed = !this.collapsed;
    }
    shouldShowGuarantee() {
        const paymentMethod = this.booking.is_direct ? this.getPaymentMethod() : null;
        return this.booking.is_direct ? Boolean(paymentMethod || this.booking.guest.cci) : true;
    }
    shouldShowToggleButton() {
        return (!this.booking.is_direct && this.booking.ota_guarante) || (this.booking.is_direct && this.booking.guest.cci);
    }
    renderCreditCardInfo() {
        const { cci } = this.booking.guest;
        if (!cci)
            return null;
        return [
            index.h("div", null, cci && t.t('Lcz_CardLabel', { fallback: 'Card:' }), " ", index.h("span", null, cci.nbr || ''), cci.expiry_month && t.t('Lcz_ExpiryLabel', { fallback: ' Expiry: ' }), index.h("span", null, cci.expiry_month || '', cci.expiry_year && '/' + cci.expiry_year)),
            index.h("div", null, cci.holder_name && `${t.t('Lcz_Name', { fallback: 'Name' })}:`, " ", index.h("span", null, cci.holder_name || ''), cci.cvc && t.t('Lcz_CvcLabel', { fallback: ' - CVC:' }), " ", index.h("span", null, cci.cvc || '')),
        ];
    }
    renderCollapsedContent() {
        if (this.booking.guest.cci) {
            return this.renderCreditCardInfo();
        }
        if (this.paymentDetailsUrl) {
            return index.h("iframe", { src: this.paymentDetailsUrl, width: "100%", class: "iframeHeight", frameborder: "0", name: "payment" });
        }
        return index.h("div", { class: "text-center" }, this.paymentExceptionMessage);
    }
    renderOtaGuarantee() {
        const { ota_guarante } = this.booking;
        if (!ota_guarante || this.booking.is_direct)
            return null;
        return (index.h("div", null, index.h("ir-label", { content: ota_guarante.card_type + `${ota_guarante.is_virtual ? t.t('Lcz_VirtualCardSuffix', { fallback: ' (virtual)' }) : ''}`, labelText: `${t.t('Lcz_CardType')}:` }), index.h("ir-label", { content: ota_guarante.cardholder_name, labelText: `${t.t('Lcz_CardHolderName', { fallback: 'Card holder name' })}:` }), index.h("ir-label", { content: ota_guarante.card_number, labelText: `${t.t('Lcz_CardNumber', { fallback: 'Card number' })}:` }), index.h("ir-label", { content: this.formatCurrency(utils.toFloat(Number(ota_guarante.meta?.virtual_card_current_balance), Number(ota_guarante.meta?.virtual_card_decimal_places)), ota_guarante.meta?.virtual_card_currency_code), labelText: `${t.t('Lcz_CardBalance')}:` })));
    }
    render() {
        if (!this.shouldShowGuarantee()) {
            return null;
        }
        const paymentMethod = this.booking.is_direct ? this.getPaymentMethod() : null;
        return (index.h("div", { class: "mb-1" }, index.h("div", { class: "d-flex align-items-center" }, index.h("span", { class: "ir-me-1 font-medium" }, t.t('Lcz_BookingGuarantee'), paymentMethod && index.h("span", null, ": ", paymentMethod)), this.shouldShowToggleButton() && (index.h("ir-button", { id: "drawer-icon", "data-toggle": "collapse", "data-target": ".guarrantee", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse", class: "sm-padding-right pointer", variant: "icon", icon_name: "credit_card", onClickHandler: this.handleToggleCollapse.bind(this) }))), index.h("div", { class: "collapse guarrantee" }, this.renderCollapsedContent()), this.renderOtaGuarantee()));
    }
};
IrBookingGuarantee.style = irBookingGuaranteeCss();

const irBookingHeaderCss = () => `.sc-ir-booking-header-h{display:block}.booking-header__row.sc-ir-booking-header{display:flex;flex-direction:column;gap:1rem;padding:0 var(--wa-space-m);flex-wrap:wrap}.booking-header__actions.sc-ir-booking-header{display:flex;align-items:center;flex-wrap:wrap;justify-content:flex-end;gap:0.5rem}.booking-header__channel-number.--primary.sc-ir-booking-header{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;color:var(--wa-color-text-quiet)}.booking-header__label-container.sc-ir-booking-header{display:flex;align-items:center}.booking-header__status-trigger.sc-ir-booking-header{width:100%}.booking-header__status-trigger.sc-ir-booking-header::part(base),.booking-header__status-trigger.sc-ir-booking-header [part~="base"]{justify-content:flex-start}.booking-header__status-trigger.sc-ir-booking-header::part(label),.booking-header__status-trigger.sc-ir-booking-header [part~="label"]{flex:1 1 0%;text-align:start}.booking-header__stretched-btn.sc-ir-booking-header{flex:1 1 0%}.booking-header__label.sc-ir-booking-header{padding:0;margin:0}.booking-header__label-container.sc-ir-booking-header{gap:1rem}.booking-header__info.sc-ir-booking-header,.booking-header__title.sc-ir-booking-header{display:flex;flex-direction:column;gap:1rem}.booking-header__avatar.sc-ir-booking-header{background-color:white}.booking-header__avatar.sc-ir-booking-header::part(image),.booking-header__avatar.sc-ir-booking-header [part~="image"]{all:unset;object-fit:cover;height:28px;width:28px}.booking-header__label-number.sc-ir-booking-header{margin:0;padding:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l)}.booking-header__modified.sc-ir-booking-header{padding:0;margin:0;color:var(--wa-color-danger-fill-loud);width:fit-content}.booking-header__channel-number.sc-ir-booking-header{padding:0;margin:0}.booking-header__meta.sc-ir-booking-header{display:flex;align-items:center;gap:1rem;font-size:0.875rem}.booking-header__booking-copy-btn.sc-ir-booking-header{visibility:hidden}@media (min-width: 640px){.booking-header__title.sc-ir-booking-header{flex-direction:row;align-items:center}}@media (min-width: 768px){.booking-header__label.sc-ir-booking-header{display:flex;align-items:center;gap:0.5rem}.booking-header__row.sc-ir-booking-header,.booking-header__info.sc-ir-booking-header{flex-direction:row;align-items:center}.booking-header__row.sc-ir-booking-header{justify-content:space-between}.booking-header__label.sc-ir-booking-header:hover .booking-header__booking-copy-btn.sc-ir-booking-header{visibility:visible}}.ir-flip-rtl.sc-ir-booking-header:dir(rtl){scale:-1 1}`;

const IrBookingHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSidebar = index.createEvent(this, "closeSidebar");
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt");
        this.openSidebar = index.createEvent(this, "openSidebar");
    }
    dialogRef;
    bookingService = new booking_service.BookingService();
    alertMessage = t.t('Lcz_OtaModificationAlert', {
        fallback: 'ALERT! Modifying an OTA booking will create a discrepancy between igloorooms and the source. Future guest modifications on the OTA may require manual adjustments of the booking.',
    });
    modalEl;
    bookingSourceEditor;
    bookingStatus = null;
    currentDialogStatus;
    booking;
    hasReceipt;
    agent;
    hasPrint;
    hasDelete;
    hasMenu;
    hasCloseButton;
    hasEmail = true;
    folioRows = [];
    agents = [];
    closeSidebar;
    resetBookingEvt;
    openSidebar;
    // private confirmationBG = {
    //   '001': 'bg-ir-orange',
    //   '002': 'bg-ir-green',
    //   '003': 'bg-ir-red',
    //   '004': 'bg-ir-red',
    // };
    handleSelectChange(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const target = e.target;
        this.bookingStatus = target.selectedValue;
    }
    async updateStatus() {
        if (!this.bookingStatus || this.bookingStatus === '-1') {
            utils.showToast({
                type: 'error',
                description: '',
                title: t.t('Lcz_SelectStatus'),
            });
            return;
        }
        try {
            await this.bookingService.changeExposedBookingStatus({
                book_nbr: this.booking.booking_nbr,
                status: this.bookingStatus,
            });
            utils.showToast({
                type: 'success',
                description: '',
                title: t.t('Lcz_StatusUpdatedSuccessfully'),
            });
            this.bookingStatus = null;
            this.modalEl.closeModal();
            this.resetBookingEvt.emit(null);
        }
        catch (error) {
            console.log(error);
        }
    }
    openDialog(e) {
        const { type } = e;
        this.currentDialogStatus = type;
        this.dialogRef.openModal();
    }
    renderDialogBody() {
        switch (this.currentDialogStatus) {
            case 'pms':
                return index.h("ir-pms-logs", { bookingNumber: this.booking.booking_nbr });
            case 'events-log':
                return index.h("ir-events-log", { booking: this.booking, bookingNumber: this.booking.booking_nbr });
        }
    }
    get initials() {
        const { agent } = this.booking;
        if (agent) {
            let c = agent.name.split(' ');
            if (c.length > 1) {
                return c[0][0] + c[1][0];
            }
            return c[0][0] + c[0][1];
        }
        return null;
    }
    get avatarImage() {
        if (this.booking?.agent) {
            return null;
        }
        return this.booking.origin.Icon;
    }
    get canChangeSource() {
        return this.booking?.is_source_editable;
        // if (!this.booking.is_direct || this.booking.source?.code?.toLowerCase() === 'ghs' || !this.booking.is_editable) {
        //   return false;
        // }
        // if (this.agents.length === 0) {
        //   return false;
        // }
        // const folioRows = this.folioRows ?? [];
        // if (folioRows?.length > 0) {
        //   return folioRows.every(f => f._raw.IS_LOCKED === false);
        // }
        // return true;
    }
    render() {
        const lastManipulation = this.booking.ota_manipulations ? this.booking.ota_manipulations[this.booking.ota_manipulations.length - 1] : null;
        const showPms = (calendarData.calendar_data.property?.linked_pms || [])?.findIndex(lp => lp?.is_active && lp?.bookings_integration_mode?.code === '001') !== -1;
        return (index.h("div", { key: 'ba4aba2104905f417313d005144978c61f773d8e', class: "booking-header" }, index.h("div", { key: '8dd03ce160421b92b73a26a5623c5f9758ac94ae', class: "booking-header__row" }, index.h("div", { key: '7512c434dcc7f07a4a1fff7300f476bd6d8d0fdb', class: "booking-header__info" }, index.h("div", { key: 'e968313ce1789dfb45300b21932a3f00b37c0cde', class: "booking-header__title" }, index.h("div", { key: 'f5aba32fe8fe5fee0c7176ef739505955ed48c87', class: "booking-header__label-container" }, this.hasMenu && (index.h(index.Fragment, { key: '8a0470a80a44b0b1433121d5249216ceeacb9193' }, index.h("wa-tooltip", { key: '68732a4d86a6fe56a11146fa36b061daaac1b6ee', for: "menu" }, t.t('Lcz_GoBack', { fallback: 'Go back' })), index.h("ir-custom-button", { key: '7703044c5caf792cd7dab71533c3d8d11fb796c2', id: "menu", variant: "neutral", size: "s", appearance: "plain" }, index.h("wa-icon", { key: '63e35ef2ac5921c89a5e2b5c239f04416266f82a', class: "ir-flip-rtl", name: "arrow-left", style: { fontSize: '1.2rem' }, label: t.t('Lcz_GoBack', { fallback: 'Go back' }) })))), index.h("wa-avatar", { key: 'f985248987caf96edb96e82f01d597b03bab86f6', shape: "circle", class: "booking-header__avatar", initials: this.initials, image: this.avatarImage, loading: "lazy" }), index.h("div", { key: 'c2295b021b3ade4a6b45dc94d603c882946ceb92', class: "booking-header__identity" }, index.h("div", { key: '8a1281089a19bdf4a033ea43c022083b423e3245', class: 'booking-header__label' }, index.h("h4", { key: '6cf7e4caa448e354106b16ac5371d1277b2ded52', class: "booking-header__label-number" }, `${t.t('Lcz_Booking', { fallback: 'Booking' })}#${number.formatBookingNumber(this.booking.booking_nbr)}`)), index.h("div", { key: '762abfe82b2f80c22ab35f58ddbfaad5ea147745', class: "booking-header__meta" }, !this.booking.is_direct && index.h("p", { key: '2f77780630e24e1fa5007aed01d2cff7124cee9f', class: "booking-header__channel-number --primary" }, number.formatBookingNumber(this.booking.channel_booking_nbr)), this.booking.agent_booking_nbr && index.h("p", { key: '3730021ca2a5fee0809065d9e48a332c1dbc0d8d', class: "booking-header__channel-number --primary" }, number.formatBookingNumber(this.booking.agent_booking_nbr)), index.h("p", { key: '280e9415361e182574f0045a63d70ee5b6b58d5f', class: "booking-header__channel-number" }, this.booking?.agent ? (index.h("span", null, t.t('Lcz_Agent', { fallback: 'Agent' }), ': ', index.h("p", { class: 'truncate p-0 m-0', style: { maxWidth: '150px', display: 'inline-flex' } }, this.agent.name, ' ', index.h("i", { style: { paddingInlineStart: '0.5rem' }, class: 'truncate' }, this.agent.reference)))) : (this.booking.origin.Label)), this.canChangeSource && (index.h("ir-custom-button", { key: '001f3500063457634c7509ec39cba559dcb7fa98', link: true, onClickHandler: () => this.bookingSourceEditor.openDialog() }, t.t('Lcz_ChangeSource', { fallback: 'Change source' }))), lastManipulation && (index.h(index.Fragment, { key: 'd9c38dfaf193c805afbf1908054db550dcfe05d2' }, index.h("p", { key: '42a529672479d8de1335469a6df34272ff331897', id: `booking-${this.booking.booking_nbr}-modified`, class: "booking-header__modified" }, t.t('Lcz_Modified', { fallback: 'Modified' })), index.h("wa-tooltip", { key: '559990f5fbff0379af791ae96656599d7ba8b188', for: `booking-${this.booking.booking_nbr}-modified` }, index.h("div", { key: '4a3867e43acfaea0ebe4c869a74f29fa5775bdde' }, index.h("p", { key: '5f28b3a519a4b96ff8cd95e98a9018e7ce4a5250', class: "m-0" }, t.t('Lcz_ModifiedByAt', {
            fallback: 'Modified by %1 at %2 %3:%4.',
            params: [
                lastManipulation?.user,
                irDate.formatDate(lastManipulation?.date, 'MMM DD, YYYY'),
                number.formatNumber(Number(lastManipulation?.hour), { minimumIntegerDigits: 2, useGrouping: false }),
                number.formatNumber(Number(lastManipulation?.minute), { minimumIntegerDigits: 2, useGrouping: false }),
            ],
        })), index.h("p", { key: '7b4273e2f990a951ccc81b96257dd2ccee2681f5', class: "m-0" }, this.alertMessage)))))))))), index.h("div", { key: '10b56b5fecd33f6482dc701308216f1f76a697ea', class: "booking-header__actions" }, index.h("div", { key: '6d127e4436b3b95a70433edee6677646e2fd59ea' }, this.booking.allowed_actions.length > 0 && this.booking.is_editable ? (index.h("wa-dropdown", { "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                this.bookingStatus = e.detail.item.value;
                this.modalEl.openModal();
            } }, index.h("wa-button", { slot: "trigger",
            // onClickHandler={() => {
            //   if (!this.booking.is_direct) {
            //     this.modalEl.openModal();
            //     return;
            //   }
            //   this.updateStatus();
            // }}
            withCaret: true,
            // loading={isRequestPending('/Change_Exposed_Booking_Status')}
            appearance: 'outlined', size: "s", variant: "brand", class: "booking-header__status-trigger" }, index.h("ir-booking-status-tag", { slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), index.h("span", null, t.t('Lcz_UpdateStatus', { fallback: 'Update status' }))), this.booking.allowed_actions.map(option => (index.h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))) : (index.h("ir-booking-status-tag", { status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }))), functions.isAgentMode(this.agent) && (index.h(index.Fragment, { key: '37aec9042c905ed18f9caa109b181ef3c61dde1f' })), index.h("ir-custom-button", { key: 'a473d00ad79763dce21bad4cf37d3d64666ffbee', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "s", variant: "brand" }, t.t('Lcz_Logs', { fallback: 'Logs' })), showPms && (index.h("ir-custom-button", { key: '14a3440f5daeb2d4ecd4022499448ba8447e7492', class: "booking-header__stretched-btn", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "s", variant: "brand" }, t.t('Lcz_PMS', { fallback: 'PMS' }))), this.hasReceipt && (index.h(index.Fragment, { key: 'dae754624bf4540fe73ce1ef322d3be3c37fbcf5' }, index.h("ir-custom-button", { key: 'b14ade875cb0b2b06f8780804139e43d48e81904', class: "booking-header__stretched-btn", id: "invoice", variant: "brand", size: "s", appearance: "outlined" }, t.t('Lcz_Billing', { fallback: 'Billing' })))), this.hasPrint && (index.h(index.Fragment, { key: '6682eb2975b6f7f1580b91abb9aa79ffcecc4d21' }, index.h("wa-tooltip", { key: '7b1f37f14de20caf2ea329360ff509681a078b9a', for: "print" }, t.t('Lcz_PrintBookingTooltip', { fallback: 'Print booking' })), index.h("ir-custom-button", { key: 'bbc9897e9a97aec990e7c35e4cfa124b465bb9a3', id: "print", variant: "brand", size: "s", appearance: "outlined" }, index.h("wa-icon", { key: '06772517e85d4238ff5c193f3fb4e4404de7f0f0', label: t.t('Lcz_Print', { fallback: 'Print' }), name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (index.h(index.Fragment, { key: 'ca463d186e468206f6a2490033e408c1a1b21d62' }, index.h("wa-tooltip", { key: '58766de7387744ab1e8dafd0effceec8e73c76ac', for: "email" }, t.t('Lcz_EmailBookingToGuestTooltip', { fallback: 'Email this booking to guest' })), index.h("ir-custom-button", { key: '9e026063e21787843bced9fd17b5bf48d5dce274', id: "email", variant: "brand", size: "s", appearance: "outlined" }, index.h("wa-icon", { key: '4cf481e959cd0eeba294e4dfd08baf965891ed3a', name: "envelope", style: { fontSize: '1.2rem' }, label: t.t('Lcz_EmailThisBooking', { fallback: 'Email this booking' }) })))), this.hasDelete && (index.h(index.Fragment, { key: '9c6493362c4eb98b82b8a193389e46a84b441354' }, index.h("wa-tooltip", { key: '51a060c2287efc729b19c1fdf577fa1bcbc202a5', for: "book-delete" }, t.t('Lcz_DeleteThisBooking', { fallback: 'Delete this booking' })), index.h("ir-custom-button", { key: 'f278615090ee014c18a4a118b297b862b9d0ecb4', id: "book-delete", variant: "danger", size: "s", appearance: "plain" }, index.h("wa-icon", { key: 'f536f3b66e763235e1f03d157ee3fead4be192cf', name: "envelope", style: { fontSize: '1.2rem' }, label: t.t('Lcz_DeleteThisBooking', { fallback: 'Delete this booking' }) })))), this.hasCloseButton && (index.h("ir-custom-button", { key: '9ed5744a26d744a0a843c8014b7d33134b404fc1', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "s", appearance: "plain" }, index.h("wa-icon", { key: '1473cdf3de4642be0e7cec91a05629fe08da5d05', name: "xmark", style: { fontSize: '1.2rem' }, label: t.t('Lcz_GoBack', { fallback: 'Go back' }) }))))), index.h("ir-dialog", { key: '691c5ead25e432f5e0c63880287010ff12b9bd9f', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? t.t('Lcz_PMS_Logs') : t.t('Lcz_EventsLog'), style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), index.h("ir-dialog", { key: 'c3bd57a60de9add9d0b30878a7ad2376f5a634dd', ref: el => (this.modalEl = el), label: t.t('Lcz_Alert', { fallback: 'Alert' }), lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, index.h("p", { key: '888ed172adfbeb9b9ac0070a7881807f5b64cff0' }, this.booking.is_direct ? t.t('Lcz_ConfirmUpdateBookingStatus', { fallback: 'Are you sure you want to update this booking status?' }) : t.t('Lcz_OTA_Modification_Alter')), index.h("div", { key: 'dcc48599bbb21a55a3329f01d27aaa6f160616da', class: "ir-dialog__footer", slot: "footer" }, index.h("ir-custom-button", { key: 'df90b5e92a2dd6fc5cf78686d9271ddfa5aa3b30', "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '81b6e53be46fc65b876374c28a40b6e593c7dbdd', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "m", variant: "brand", loading: irInterceptor_store.isRequestPending('/Change_Exposed_Booking_Status') }, t.t('Lcz_Confirm', { fallback: 'Confirm' })))), index.h("ir-booking-source-editor-dialog", { key: 'e4f373459d46edf3c8b6c35db5ce44ea97d6d7b3', booking: this.booking, ref: el => (this.bookingSourceEditor = el) })));
    }
};
IrBookingHeader.style = irBookingHeaderCss();

const irBookingPricingDrawerCss = () => `.sc-ir-booking-pricing-drawer-h{display:block}.pricing-drawer__footer.sc-ir-booking-pricing-drawer{display:flex;gap:0.75rem}.pricing-drawer__btn.sc-ir-booking-pricing-drawer{flex:1 1 0}`;

const IrBookingPricingDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeDrawer = index.createEvent(this, "closeDrawer");
        this.pricingSaved = index.createEvent(this, "pricingSaved");
    }
    open = false;
    formId = 'booking-pricing-form';
    booking;
    room;
    agent = null;
    folioEntries = [];
    currencySymbol = '';
    saveDisabled = false;
    allItemsDisabled = false;
    closeDrawer;
    pricingSaved;
    get drawerLabel() {
        if (!this.room)
            return t.t('Lcz_EditNightlyRates', { fallback: 'Edit Nightly Rates' });
        const parts = [this.room.roomtype?.name, this.room.rateplan?.short_name].filter(Boolean);
        const unitName = this.room.unit?.name;
        if (unitName)
            parts.push(unitName);
        return parts.join(' ');
    }
    stopEventPropagation(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
    }
    render() {
        return (index.h("ir-drawer", { key: '72a6279c5ce93b93e833bb2156728fc15ce389d1', open: this.open, label: this.drawerLabel, style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, onDrawerHide: event => {
                this.stopEventPropagation(event);
                if (event.detail) {
                    this.allItemsDisabled = false;
                    this.closeDrawer.emit();
                }
            } }, this.open && (index.h("ir-booking-pricing-form", { key: '07b90e97e443c307309b518eb6a8f4b958bf84cb', formId: this.formId, booking: this.booking, room: this.room, agent: this.agent, folioEntries: this.folioEntries, currencySymbol: this.currencySymbol, onPricingSaved: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.pricingSaved.emit();
                this.closeDrawer.emit();
            }, onSubmitDisabledChange: (e) => {
                this.saveDisabled = e.detail;
            }, onAllDisabled: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.allItemsDisabled = e.detail;
            } })), index.h("div", { key: '350ed2e51a64c84f6e558baa711b15f4389a0459', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '46128be9f2e74521ec42af217182bf29edc5125a', appearance: "filled", size: "m", variant: "neutral", onClickHandler: () => this.closeDrawer.emit() }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: 'fcbe77cf49b6bfba65edb94aeddccff30c265a1f', form: this.formId, size: "m", type: "submit", variant: "brand", loading: this.saveDisabled, disabled: this.allItemsDisabled }, t.t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
};
IrBookingPricingDrawer.style = irBookingPricingDrawerCss();

const irBookingPricingFormCss = () => `.sc-ir-booking-pricing-form-h{display:block;height:100%}.pricing-form.sc-ir-booking-pricing-form{display:flex;flex-direction:column;gap:1rem;padding-bottom:1rem}.pricing-form__input.sc-ir-booking-pricing-form{display:grid;grid-template-columns:auto 1fr;gap:var(--wa-space-l);align-items:center}.pricing-form__input.sc-ir-booking-pricing-form::part(label),.pricing-form__input.sc-ir-booking-pricing-form [part~="label"]{width:80px;margin:0}.pricing-form__input.sc-ir-booking-pricing-form:disabled::part(label),.pricing-form__input.sc-ir-booking-pricing-form:disabled [part~="label"]{opacity:0.5}.pricing-form__input.sc-ir-booking-pricing-form::part(wa-input),.pricing-form__input.sc-ir-booking-pricing-form [part~="wa-input"]{grid-column:1 / -1;grid-row-end:span 2;display:grid;grid-template-columns:subgrid;gap:0 var(--wa-space-s);align-items:center}.pricing-form__row.sc-ir-booking-pricing-form{display:flex;align-items:center;gap:0.75rem}.pricing-form__row--locked.sc-ir-booking-pricing-form{opacity:0.55}.pricing-form__date.sc-ir-booking-pricing-form{font-size:0.875rem;flex:0 0 6rem;color:var(--wa-color-text-quiet);white-space:nowrap}.pricing-form__row.sc-ir-booking-pricing-form ir-validator.sc-ir-booking-pricing-form{flex:1;min-width:0}@media (min-width: 768px){.pricing-form__input.sc-ir-booking-pricing-form::part(base){max-width:180px}}`;

// Built per call: zod fixes messages at construction, and the locale is not loaded when this module is.
const nightAmountSchema = () => types.coerce.number({ invalid_type_error: t.t('Lcz_Required', { fallback: 'Required' }) }).min(0, t.t('Lcz_MinimumIsZero', { fallback: 'Minimum is 0' }));
const IrBookingPricingForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.pricingSaved = index.createEvent(this, "pricingSaved");
        this.submitDisabledChange = index.createEvent(this, "submitDisabledChange");
        this.allDisabled = index.createEvent(this, "allDisabled");
    }
    formId = 'booking-pricing-form';
    booking;
    room;
    agent = null;
    folioEntries = [];
    currencySymbol = '';
    nights = [];
    isSubmitting = false;
    invoiceLocked = false;
    isCheckingInvoice = false;
    pricingSaved;
    submitDisabledChange;
    allDisabled;
    bookingService = new booking_service.BookingService();
    isAgent;
    componentWillLoad() {
        this.isAgent = this.room.agent && functions.isAgentMode(this.agent);
        this.initNights();
        if (!this.isAgent) {
            this.checkInvoiceStatus();
        }
    }
    componentDidLoad() {
        this.emitAllDisabled();
    }
    handleRoomChange() {
        this.initNights();
        this.emitAllDisabled();
    }
    /** True when nothing in the form is editable (invoice-locked, or every night is locked). */
    get areAllItemsDisabled() {
        if (this.invoiceLocked)
            return true;
        return this.nights.length > 0 && this.nights.every(night => night.isLocked);
    }
    emitAllDisabled() {
        this.allDisabled.emit(this.areAllItemsDisabled);
    }
    initNights() {
        const acmTxByDate = this.acmTxByDate;
        this.nights = this.room.days.map(day => ({
            date: day.date,
            amount: day.amount.toString(),
            cost: day.cost,
            isLocked: this.isAgent ? acmTxByDate.get(day.date)?.IS_LOCKED : false,
        }));
    }
    async checkInvoiceStatus() {
        this.isCheckingInvoice = true;
        try {
            const info = await this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr });
            const accommodationItem = (info.invoiceable_items ?? []).find(item => item.key === this.room.system_id);
            this.invoiceLocked = accommodationItem.reason.code === enums.InvoiceableItemReason.AlreadyInvoiced;
        }
        catch {
            // non-fatal — fall through with invoiceLocked = false
        }
        finally {
            this.isCheckingInvoice = false;
            this.emitAllDisabled();
        }
    }
    isValid() {
        if (this.invoiceLocked)
            return false;
        return this.nights.every(n => {
            if (n.isLocked)
                return true;
            return nightAmountSchema().safeParse(n.amount).success;
        });
    }
    get acmTxByDate() {
        return new Map(this.folioEntries.filter(tx => tx.CATEGORY === enums.SvcCategory.Accommodation && tx.BSA_REF === this.room.identifier).map(tx => [tx.SERVICE_DATE, tx]));
    }
    updateNight(date, value) {
        this.nights = this.nights.map(n => (n.date === date ? { ...n, amount: value } : n));
    }
    async handleSubmit(e) {
        e.preventDefault();
        if (!this.isValid())
            return;
        this.isSubmitting = true;
        this.submitDisabledChange.emit(true);
        try {
            const updatedRoom = {
                ...this.room,
                days: this.nights.map(n => ({ date: n.date, amount: parseFloat(n.amount), cost: n.cost })),
            };
            const updatedRooms = this.booking.rooms.map(r => (r.identifier === this.room.identifier ? updatedRoom : r));
            const { pickup_info, extra_services, is_direct, is_in_loyalty_mode, promo_key, extras, ...rest } = this.booking;
            const payload = {
                assign_units: true,
                is_pms: true,
                is_direct,
                is_backend: true,
                is_in_loyalty_mode,
                promo_key,
                extras: extras ?? [],
                agent: this.booking.agent,
                booking: { ...rest, rooms: updatedRooms, agent: this.booking.agent },
                extra_services,
                pickup_info,
            };
            await this.bookingService.doReservation(payload);
            this.pricingSaved.emit();
        }
        catch (err) {
            console.error(err);
        }
        finally {
            this.isSubmitting = false;
            this.submitDisabledChange.emit(false);
        }
    }
    render() {
        if (this.isCheckingInvoice) {
            return (index.h("div", { class: 'drawer__loader-container' }, index.h("ir-spinner", null)));
        }
        const allDisabled = this.invoiceLocked;
        const hasDisabledInput = this.nights.some(night => night.isLocked || allDisabled);
        return (index.h("form", { id: this.formId, class: "pricing-form", onSubmit: this.handleSubmit.bind(this), novalidate: true }, hasDisabledInput && (index.h("wa-callout", { variant: "warning", size: "s" }, index.h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), t.t('Lcz_LockedNightlyRatesWarning', {
            fallback: 'Locked nightly rates cannot be edited in case they have been invoiced. You can void the invoice with a credit note to update the rates and recreate a new one',
        }))), calendarData.calendar_data.property.tax_statement && (index.h("wa-callout", { size: "s", variant: "neutral" }, calendarData.calendar_data.property.tax_statement)), index.h("div", { style: { marginBottom: '0.5rem' } }), this.nights.map(night => (index.h("ir-validator", { key: night.date, class: "pricing-form__input-validator", schema: nightAmountSchema(), value: night.amount }, index.h("ir-input", { class: "pricing-form__input", label: irDate.formatDate(night.date, 'ddd, MMM D'), value: night.amount, mask: "price", disabled: night.isLocked || allDisabled || this.isSubmitting, "onText-change": (e) => this.updateNight(night.date, e.detail) }, index.h("span", { slot: "start" }, calendarData.calendar_data.property.currency.symbol), (night.isLocked || this.invoiceLocked) && index.h("wa-icon", { slot: "end", name: "lock", style: { fontSize: '0.875rem' } })))))));
    }
    static get watchers() { return {
        "room": [{
                "handleRoomChange": 0
            }]
    }; }
};
IrBookingPricingForm.style = irBookingPricingFormCss();

const irBookingRoomsCss = () => `.sc-ir-booking-rooms-h{display:block}.booking-rooms__card.sc-ir-booking-rooms{background-color:var(--wa-color-surface-default)}.booking-details__date-view-header.sc-ir-booking-rooms{font-size:1.1rem !important}.room-group.sc-ir-booking-rooms{margin-bottom:1rem !important}.room-group.sc-ir-booking-rooms:last-child{margin-bottom:1.81rem !important}.service-group.sc-ir-booking-rooms{padding:0.125rem 0 0.25rem;border-inline-start:3px solid transparent;padding-inline-start:0.625rem}.service-group--guest.sc-ir-booking-rooms{border-inline-start-color:var(--wa-color-neutral-300, #d4d4d8)}.service-group--agent.sc-ir-booking-rooms{border-inline-start-color:var(--wa-color-primary-500, #3b82f6)}.service-group__label.sc-ir-booking-rooms{display:flex;align-items:center;gap:0.4rem;margin:0 0 0.75rem;font-size:0.75rem;font-weight:700;letter-spacing:0.06em;color:var(--wa-color-neutral-500, #71717a)}.service-group__label.--agent.sc-ir-booking-rooms{color:var(--wa-color-primary-600, #2563eb)}.service-group__dot.sc-ir-booking-rooms{display:inline-block;width:6px;height:6px;border-radius:50%;background-color:var(--wa-color-neutral-400, #a1a1aa);flex-shrink:0}.service-group--agent.sc-ir-booking-rooms .service-group__dot.sc-ir-booking-rooms{background-color:var(--wa-color-primary-500, #3b82f6)}.service-group__empty.sc-ir-booking-rooms{margin:0;padding:0.375rem 0;font-size:0.85rem;color:var(--wa-color-neutral-400, #a1a1aa);font-style:italic}`;

const IrBookingRooms = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.roomDeleteFinished = index.createEvent(this, "roomDeleteFinished");
    }
    /**
     * The booking object containing reservation details,
     * including rooms, status, currency, and edit permissions.
     */
    booking;
    agent;
    /**
     * Available bed preference options for the booking rooms.
     * Used to populate bed selection inside each room component.
     */
    bedPreference = [];
    /**
     * Available departure time options for the booking.
     * Passed down to each room when applicable.
     */
    departureTime = [];
    /**
     * Available arrival time options for the booking.
     * Passed down to each room when applicable.
     */
    arrivalTime = [];
    /**
     * Enables the ability to add a new room/unit to the booking.
     */
    hasRoomAdd = false;
    /**
     * Enables deleting a room from the booking.
     */
    hasRoomDelete = false;
    /**
     * Enables editing room details within the booking.
     */
    hasRoomEdit = false;
    /**
     * Active language code used for translations and formatting.
     */
    language;
    /**
     * Legend metadata used for displaying room status indicators.
     */
    legendData;
    /**
     * The property identifier associated with the booking.
     * Used when interacting with room-level operations.
     */
    propertyId;
    /**
     * Additional room metadata and configuration details.
     */
    roomsInfo;
    /**
     * Precomputed split index used to group split rooms together.
     * If not provided, it will be generated internally.
     */
    splitIndex;
    clTransactions = [];
    /** `_SVC_CATEGORY` setup entries, threaded down to each room's extra-services section for category labels. */
    svcCategories = [];
    /**
     * When set, the room whose identifier matches auto-opens its check-out dialog. Used to
     * route early check-outs triggered from other screens through the full booking details.
     */
    checkoutRoomIdentifier;
    roomDeleteFinished;
    computeRoomGroups(rooms) {
        const indexById = new Map();
        rooms.forEach((room, idx) => indexById.set(room.identifier, idx));
        if (!rooms.length) {
            return { groups: [], indexById, hasSplitGroups: false };
        }
        const groupSortKey = (groupRooms) => {
            let min = Number.MAX_SAFE_INTEGER;
            for (const r of groupRooms) {
                const ts = Date.parse(r?.from_date ?? '');
                if (!Number.isNaN(ts)) {
                    min = Math.min(min, ts);
                }
            }
            return min;
        };
        const splitIndex = this.splitIndex ?? booking.buildSplitIndex(rooms);
        if (!splitIndex) {
            const sortedRooms = [...rooms].sort((a, b) => {
                const diff = Date.parse(a?.from_date ?? '') - Date.parse(b?.from_date ?? '');
                if (!Number.isNaN(diff) && diff !== 0) {
                    return diff;
                }
                return (indexById.get(a.identifier) ?? 0) - (indexById.get(b.identifier) ?? 0);
            });
            return { groups: [{ rooms: sortedRooms, order: 0, isSplit: false, sortKey: groupSortKey(sortedRooms) }], indexById, hasSplitGroups: false };
        }
        const roomsById = new Map(rooms.map(room => [room.identifier, room]));
        const grouped = [];
        const visited = new Set();
        for (const head of splitIndex.heads) {
            const chain = splitIndex.chainOf.get(head) ?? [head];
            const chainRooms = chain.map(id => roomsById.get(id)).filter((room) => Boolean(room));
            if (!chainRooms.length)
                continue;
            const chainHasSplitLink = chain.some(id => {
                const parent = splitIndex.parentOf.get(id);
                const children = splitIndex.childrenOf.get(id) ?? [];
                return Boolean(parent) || children.length > 0;
            }) || chainRooms.some(room => Boolean(room?.is_split));
            if (chainHasSplitLink) {
                chainRooms.forEach(room => visited.add(room.identifier));
                const order = Math.min(...chainRooms.map(room => indexById.get(room.identifier) ?? Number.MAX_SAFE_INTEGER));
                grouped.push({ rooms: chainRooms, order, sortKey: groupSortKey(chainRooms), isSplit: true });
            }
        }
        for (const room of rooms) {
            if (!visited.has(room.identifier)) {
                const order = indexById.get(room.identifier) ?? Number.MAX_SAFE_INTEGER;
                const singleGroup = [room];
                grouped.push({ rooms: singleGroup, order, sortKey: groupSortKey(singleGroup), isSplit: false });
            }
        }
        grouped.sort((a, b) => {
            if (a.sortKey !== b.sortKey) {
                return a.sortKey - b.sortKey;
            }
            return a.order - b.order;
        });
        const hasSplitGroups = grouped.some(group => group.isSplit);
        if (!hasSplitGroups) {
            const merged = grouped
                .map(group => group.rooms)
                .reduce((acc, curr) => acc.concat(curr), [])
                .sort((a, b) => {
                const diff = Date.parse(a?.from_date ?? '') - Date.parse(b?.from_date ?? '');
                if (!Number.isNaN(diff) && diff !== 0) {
                    return diff;
                }
                return (indexById.get(a.identifier) ?? 0) - (indexById.get(b.identifier) ?? 0);
            });
            return { groups: [{ rooms: merged, order: 0, sortKey: groupSortKey(merged), isSplit: false }], indexById, hasSplitGroups: false };
        }
        return { groups: grouped, indexById, hasSplitGroups: true };
    }
    handleRoomCheckout(room) {
        return utils.canCheckout({ inOutCode: room.in_out?.code, to_date: room.to_date });
        // if (!calendar_data.checkin_enabled || calendar_data.is_automatic_check_in_out) {
        //   return false;
        // }
        // return room.in_out.code === '001';
    }
    handleRoomCheckin(room) {
        return utils.canCheckIn({ from_date: room.from_date, to_date: room.to_date, isCheckedIn: room.in_out?.code === booking_dto.ROOM_IN_OUT.CHECKIN });
        // if (!calendar_data.checkin_enabled || calendar_data.is_automatic_check_in_out) {
        //   return false;
        // }
        // if (!room.unit) {
        //   return false;
        // }
        // if (room.in_out && room.in_out.code !== '000') {
        //   return false;
        // }
        // return moment().isSameOrAfter(moment(room.from_date, 'YYYY-MM-DD'), 'days') && moment().isBefore(moment(room.to_date, 'YYYY-MM-DD'), 'days');
    }
    renderRoomItem(room, bookingIndex, includeDepartureTime = true) {
        const showCheckin = this.handleRoomCheckin(room);
        const showCheckout = this.handleRoomCheckout(room);
        return (index.h("ir-room", { key: room.identifier, room: room, property_id: this.propertyId, language: this.language, departureTime: this.departureTime, arrivalTime: this.arrivalTime, bedPreferences: this.bedPreference, isEditable: this.booking.is_editable, legendData: this.legendData, roomsInfo: this.roomsInfo, myRoomTypeFoodCat: room.roomtype.name, mealCodeName: room.rateplan.short_name, includeDepartureTime: includeDepartureTime, currency: this.booking.currency.symbol, hasRoomEdit: this.hasRoomEdit && this.booking.status.code !== '003' && this.booking.is_direct, hasRoomDelete: this.hasRoomDelete && this.booking.status.code !== '003' && this.booking.is_direct, hasCheckIn: showCheckin, hasCheckOut: showCheckout, autoOpenCheckout: !!this.checkoutRoomIdentifier && this.checkoutRoomIdentifier === room.identifier, booking: this.booking, agent: this.agent, clTransactions: this.clTransactions, svcCategories: this.svcCategories, bookingIndex: bookingIndex, onDeleteFinished: (e) => this.roomDeleteFinished.emit(e.detail) }));
    }
    renderRoomPool(rooms) {
        if (!rooms.length) {
            return index.h("p", { class: "room-group__empty" }, t.t('Lcz_NoRoomsInGroup', { fallback: 'No rooms in this group' }));
        }
        const { groups, indexById, hasSplitGroups } = this.computeRoomGroups(rooms);
        if (!hasSplitGroups) {
            const groupRooms = groups[0].rooms;
            return groupRooms.map((room, idx) => (index.h(index.Fragment, null, this.renderRoomItem(room, indexById.get(room.identifier) ?? idx), idx < groupRooms.length - 1 ? index.h("wa-divider", null) : null)));
        }
        return (index.h("div", { class: "d-flex flex-column", style: { gap: '1rem' } }, groups.map((group, groupIdx) => {
            const isLastGroup = groupIdx === groups.length - 1;
            return (index.h("div", { class: `${isLastGroup ? '' : 'room-group'}`, key: `room-group-${group.order}-${groupIdx}` }, group.rooms.map((room, roomIdx) => (index.h(index.Fragment, null, this.renderRoomItem(room, indexById.get(room.identifier) ?? roomIdx, roomIdx === group.rooms.length - 1), roomIdx < group.rooms.length - 1 ? index.h("wa-divider", null) : null))), !isLastGroup && index.h("wa-divider", { style: { '--width': '3px' } })));
        })));
    }
    renderRooms() {
        const rooms = this.booking?.rooms ?? [];
        if (!rooms.length) {
            return null;
        }
        if (!functions.isAgentMode(this.agent)) {
            return this.renderRoomPool(rooms);
        }
        const guestRooms = rooms.filter(r => r.agent === null || r.agent === undefined);
        const agentRooms = rooms.filter(r => r.agent !== null && r.agent !== undefined);
        const agentName = this.booking.agent?.name ?? t.t('Lcz_Agent', { fallback: 'Agent' });
        return (index.h(index.Fragment, null, index.h("p", { class: "service-group__label --agent" }, agentName, index.h("span", null, t.t('Lcz_Folio', { fallback: 'Folio' }))), index.h("div", { class: "service-group service-group--agent" }, index.h("div", { class: "service-group__body" }, agentRooms.length === 0 ? index.h("p", { class: "service-group__empty" }, t.t('Lcz_NoAgentRooms', { fallback: 'No agent rooms' })) : this.renderRoomPool(agentRooms))), index.h("wa-divider", null), index.h("p", { class: "service-group__label" }, t.t('Lcz_Guest', { fallback: 'Guest' }), index.h("span", null, t.t('Lcz_Folio', { fallback: 'Folio' }))), index.h("div", { class: "service-group service-group--guest" }, index.h("div", { class: "service-group__body" }, guestRooms.length === 0 ? index.h("p", { class: "service-group__empty" }, t.t('Lcz_NoGuestRooms', { fallback: 'No guest rooms' })) : this.renderRoomPool(guestRooms)))));
    }
    render() {
        if (!this.booking) {
            return null;
        }
        return (index.h("wa-card", { appearance: "plain", class: "booking-rooms__card" }, index.h("ir-date-view", { class: "booking-details__date-view-header", slot: "header", from_date: this.booking.from_date, to_date: this.booking.to_date }), this.hasRoomAdd && this.booking.is_editable && (index.h(index.Fragment, null, index.h("wa-tooltip", { for: "room-add" }, t.t('Lcz_AddUnit', { fallback: 'Add unit' })), index.h("ir-custom-button", { slot: "header-actions", id: "room-add", appearance: 'plain', size: 's', variant: 'neutral' }, index.h("wa-icon", { name: "plus", style: { fontSize: '1rem' }, label: t.t('Lcz_AddUnit', { fallback: 'Add unit' }) })))), this.renderRooms()));
    }
};
IrBookingRooms.style = irBookingRoomsCss();

const irBookingSourceEditorDialogCss = () => `.sc-ir-booking-source-editor-dialog-h{display:block}`;

const IrBookingSourceEditorDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt");
    }
    booking;
    resetBookingEvt;
    open = false;
    isLoading = false;
    async openDialog() {
        this.open = true;
    }
    async closeDialog() {
        this.open = false;
    }
    render() {
        return (index.h("ir-dialog", { key: 'd2b3b8aef966e0e36308cc9549c02cc8af3726fc', label: t.t('Lcz_ChangeBookingSource', { fallback: 'Change Booking Source' }), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, open: this.open }, this.open && (index.h("ir-booking-source-editor-form", { key: 'eeb494f1ee85e79908148a9c29f3a1bfa1d75f6b', booking: this.booking, onBookingSourceSaved: () => {
                this.closeDialog();
                setTimeout(() => this.resetBookingEvt.emit(null), 100);
            }, onLoadingChange: e => (this.isLoading = e.detail) })), index.h("div", { key: '28b76bc926845d7c491ae793f475adf9818ebc9c', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '1bb6ddcd34ea49e2a8af7a9cf6dbdfc7ca50c4da', size: "m", "data-dialog": "close", appearance: "filled", variant: "neutral" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: 'fcd4722249dcca64b56a5b821f576eaa46e51541', type: "submit", form: `change-source-form-${this.booking?.booking_nbr}`, size: "m", appearance: "accent", variant: "brand", loading: this.isLoading }, t.t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrBookingSourceEditorDialog.style = irBookingSourceEditorDialogCss();

const irBookingSourceEditorFormCss = () => `.sc-ir-booking-source-editor-form-h{display:block}`;

const IrBookingSourceEditorForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bookingSourceSaved = index.createEvent(this, "bookingSourceSaved");
        this.loadingChange = index.createEvent(this, "loadingChange");
    }
    booking;
    selectedSource;
    step = 'source';
    checkedItems = new Set();
    isLoading = false;
    bookingSourceSaved;
    loadingChange;
    bookingService = new booking_service.BookingService();
    componentWillLoad() {
        this.selectedSource = this.getSource(this.booking);
    }
    handleLoadingChange(newVal) {
        this.loadingChange.emit(newVal);
    }
    getSource(booking) {
        if (booking.agent) {
            return this.getSourceByKey('tag', booking.agent.id);
        }
        return this.getSourceByKey('code', booking.source?.code);
    }
    getSourceByKey(key, value) {
        return calendarData.calendar_data?.property?.allowed_booking_sources?.find(s => s[key]?.toString() === value?.toString());
    }
    getAgentRef() {
        return calendarData.calendar_data.property.agents.find(a => a.id === Number(this.selectedSource.tag)) ?? null;
    }
    buildAssignableItems() {
        const items = [];
        this.booking.rooms?.forEach(room => {
            items.push({
                key: `room-${room.identifier}`,
                label: room.roomtype?.name ?? t.t('Lcz_RoomFallback', { fallback: 'Room' }),
                type: 'room',
                ratePlanShortName: room.rateplan?.short_name,
                isNonRefundable: room.rateplan?.is_non_refundable,
                unitName: room.unit?.name,
                fromDate: room.from_date,
                toDate: room.to_date,
            });
        });
        if (this.booking.pickup_info) {
            const pickup = this.booking.pickup_info;
            items.push({
                key: 'pickup',
                label: pickup.selected_option?.vehicle?.description ?? t.t('Lcz_AirportPickupFallback', { fallback: 'Airport Pickup' }),
                type: 'pickup',
            });
        }
        this.booking.extra_services?.forEach((svc, i) => {
            items.push({
                key: `extra-${svc.system_id ?? svc.booking_system_id ?? i}`,
                label: svc.description,
                type: 'extra',
                fromDate: svc.start_date,
                toDate: svc.end_date ?? undefined,
                price: svc.price,
                currencySymbol: this.booking.currency?.symbol,
            });
        });
        return items;
    }
    async performSave(selections) {
        this.isLoading = true;
        const agent = this.getAgentRef();
        const getItemAgent = (key) => {
            if (!agent)
                return null;
            if (selections)
                return selections.has(key) ? this.getAgentRef() : null;
            return this.getAgentRef();
        };
        try {
            const { agent: _, extra_services, ...rest } = this.booking;
            const updatedBooking = {
                ...rest,
                source: this.selectedSource,
                rooms: this.booking.rooms.map(room => ({
                    ...room,
                    agent: getItemAgent(`room-${room.identifier}`),
                })),
            };
            await this.bookingService.doReservation({
                extra_services: extra_services?.map((svc, i) => ({
                    ...svc,
                    agent: getItemAgent(`extra-${svc.system_id ?? svc.booking_system_id ?? i}`),
                })) ?? null,
                agent,
                assign_units: true,
                is_pms: true,
                is_direct: true,
                is_backend: true,
                is_in_loyalty_mode: false,
                promo_key: null,
                extras: [...(this.booking.extras ?? [])],
                booking: updatedBooking,
                pickup_info: this.booking.pickup_info ? { ...this.booking.pickup_info, agent: getItemAgent('pickup') } : null,
            });
            this.bookingSourceSaved.emit(null);
        }
        catch (e) {
            console.error(e);
        }
        finally {
            this.isLoading = false;
        }
    }
    buildExistingAgentSelections() {
        const keys = new Set();
        this.booking.rooms?.forEach(room => {
            if (room.agent)
                keys.add(`room-${room.identifier}`);
        });
        if (this.booking.pickup_info?.agent)
            keys.add('pickup');
        this.booking.extra_services?.forEach((svc, i) => {
            if (svc.agent)
                keys.add(`extra-${svc.system_id ?? svc.booking_system_id ?? i}`);
        });
        return keys;
    }
    handleSubmit(event) {
        event.preventDefault();
        this.performSave(this.checkedItems);
    }
    handleSelectChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.selectedSource = this.getSourceByKey('id', event.target.value?.toString());
        const wasAgent = !!this.booking.agent;
        const isAgent = !!this.getAgentRef();
        if (!wasAgent && isAgent) {
            // Guest → agent: show assign dialog, start with nothing checked
            this.step = 'assign';
            this.checkedItems = new Set();
        }
        else if (wasAgent && isAgent) {
            // Agent → agent: preserve existing per-item assignments
            this.step = 'source';
            this.checkedItems = this.buildExistingAgentSelections();
        }
        else {
            this.step = 'source';
            this.checkedItems = new Set();
        }
    }
    render() {
        const isAssign = this.step === 'assign';
        return (index.h("form", { key: '1e9cf88f7d3b296e7529aca25079888ceae89b4a', id: `change-source-form-${this.booking?.booking_nbr}`, onSubmit: this.handleSubmit.bind(this) }, this.booking.agent === null && this.booking?.financial?.payments?.filter(p => !p.is_city_ledger)?.length > 0 && (index.h("wa-callout", { key: 'b62f250807578eed26aae146b0dd2b51335a3a2e', size: "s", variant: "warning", style: { marginBottom: '1rem' } }, index.h("wa-icon", { key: '6886f132ea871f95378670fdb2eb355c9ee27440', slot: "icon", name: "triangle-exclamation" }), t.t('Lcz_GuestFolioEntriesWarning', { fallback: 'You have guest folio entries that may need to be removed and recreated in the agent folio.' }))), index.h("wa-select", { key: '3067c39cb589a7535b5e2ddd8cbbdfce59730c8c', label: t.t('Lcz_NewSource', { fallback: 'New source' }), onchange: this.handleSelectChange.bind(this), size: "s", value: this.selectedSource?.id, defaultValue: this.selectedSource?.id }, calendarData.calendar_data?.property?.allowed_booking_sources?.map(option => option.type === 'LABEL' ? (index.h("small", { key: option.id }, option.description)) : (index.h("wa-option", { key: option.id, value: option.id?.toString() }, option.description)))), isAssign && index.h("ir-booking-assign-items", { key: 'a1fdef595552af2bd7e280b28622c0debb541f87', items: this.buildAssignableItems(), onBookingSelectionChange: e => (this.checkedItems = e.detail) })));
    }
    static get watchers() { return {
        "isLoading": [{
                "handleLoadingChange": 0
            }]
    }; }
};
IrBookingSourceEditorForm.style = irBookingSourceEditorFormCss();

const irCheckoutDialogCss = () => `.ir-dialog__footer.sc-ir-checkout-dialog{display:flex;align-items:center;gap:1rem;justify-content:flex-end;width:100%}.dialog__loader-container.sc-ir-checkout-dialog{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px;min-width:31rem}#dialog-overview.sc-ir-checkout-dialog::part(title),#dialog-overview.sc-ir-checkout-dialog [part~="title"]{color:var(--wa-color-text-normal);text-align:start}.sc-ir-checkout-dialog-h{display:block}.dialog__loader-container.sc-ir-checkout-dialog{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px}.checkout-dialog__callouts.sc-ir-checkout-dialog{display:flex;flex-direction:column;gap:1rem;margin-bottom:var(--wa-space-xl, 2rem)}.checkout-dialog__callouts.sc-ir-checkout-dialog:empty{display:none}.early-checkout.sc-ir-checkout-dialog{display:grid;gap:1rem;width:100%;min-width:0;overflow-x:clip}.early-checkout.sc-ir-checkout-dialog ir-input.sc-ir-checkout-dialog,.early-checkout.sc-ir-checkout-dialog wa-callout.sc-ir-checkout-dialog,.early-checkout.sc-ir-checkout-dialog wa-card.sc-ir-checkout-dialog{min-width:0;max-width:100%}.ec-summary.sc-ir-checkout-dialog::part(message),.ec-summary.sc-ir-checkout-dialog [part~="message"]{display:flex;flex-direction:column;gap:0.5rem}.ec-summary__row.sc-ir-checkout-dialog{display:flex;justify-content:space-between;align-items:center;font-weight:700}.ec-summary__label.sc-ir-checkout-dialog{font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280)}.ec-summary__value.sc-ir-checkout-dialog{font-size:0.8125rem;font-weight:500;color:var(--wa-color-text-normal, #111827)}.ec-summary__value--accent.sc-ir-checkout-dialog{color:var(--wa-color-brand-fill-loud, #2563eb);font-weight:600}.ec-section.sc-ir-checkout-dialog{display:grid;gap:0.35rem}.ec-section__title.sc-ir-checkout-dialog{margin:0;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--wa-color-text-quiet, #6b7280)}.ec-nights.sc-ir-checkout-dialog{border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.5rem;overflow:hidden}.ec-nights__row.sc-ir-checkout-dialog{display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0.875rem;font-size:0.8125rem;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.ec-nights__date.sc-ir-checkout-dialog{color:var(--wa-color-text-quiet, #6b7280)}.ec-nights__amount.sc-ir-checkout-dialog{font-weight:500;font-variant-numeric:tabular-nums;color:var(--wa-color-text-normal, #111827)}.ec-nights__subtotal.sc-ir-checkout-dialog{display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0.875rem;font-size:0.8125rem;font-weight:600;color:var(--wa-color-text-normal, #111827);background:var(--wa-color-neutral-fill-quiet, #f9fafb);border-top:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.ec-penalty__badge.sc-ir-checkout-dialog{margin:0;font-size:0.75rem;font-weight:500;color:var(--wa-color-warning-on-quiet, #92400e)}.ec-penalty__badge--waived.sc-ir-checkout-dialog{color:var(--wa-color-success-on-quiet, #065f46)}.ec-penalty__hint.sc-ir-checkout-dialog{margin:0;font-size:0.75rem;color:var(--wa-color-text-quiet, #6b7280)}.due-amount-btn.sc-ir-checkout-dialog{all:unset;display:block;width:100%}.ir-dialog__footer.sc-ir-checkout-dialog{display:flex;flex-wrap:wrap;gap:0.5rem;width:100%}.ir-dialog__footer.sc-ir-checkout-dialog>*.sc-ir-checkout-dialog{flex:1}@media (min-width: 640px){.ir-dialog__footer.sc-ir-checkout-dialog{flex-wrap:nowrap;justify-content:flex-end}.ir-dialog__footer.sc-ir-checkout-dialog>*.sc-ir-checkout-dialog{flex:0 0 auto}}.ir-flip-rtl.sc-ir-checkout-dialog:dir(rtl){scale:-1 1}`;

const IrCheckoutDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.checkoutDialogClosed = index.createEvent(this, "checkoutDialogClosed");
    }
    open;
    booking;
    identifier;
    isLoading = 'page';
    buttons = new Set();
    invoiceInfo;
    room;
    isEarlyCheckout = false;
    remainingDays = [];
    penaltyAmount = 0;
    /** Upper bound + pre-fill for the cancellation penalty. Kept in sync with `detectEarlyCheckout` so the masked input isn't clamped below its own pre-filled value. */
    penaltyMax = 0;
    agent;
    paymentEntries;
    includeInvoice = false;
    checkoutDialogClosed;
    bookingService = new booking_service.BookingService();
    setupService = new index$2.SetupService();
    agentService = new agents_service.AgentsService();
    cityLedgerService = new index$1.CityLedgerService();
    initialPenaltyStr = '0.00';
    transactions = [];
    paymentFolioRef;
    get remainingTotal() {
        return this.remainingDays.reduce((sum, d) => sum + d.charges.total_amount, 0);
    }
    get currencySymbol() {
        return this.booking?.currency?.symbol ?? '$';
    }
    formatAmount(amount) {
        return number.formatAmount(this.currencySymbol, amount);
    }
    async checkoutRoom({ e, source }) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.isLoading = source;
            // await this.bookingService.handleExposedRoomInOut({
            //   booking_nbr: this.booking.booking_nbr,
            //   room_identifier: this.identifier,
            //   status: '002',
            // });
            await this.bookingService.handleRoomCheckout({
                booking_nbr: this.booking.booking_nbr,
                room_identifier: this.identifier,
                penalty_amount: this.penaltyAmount >= 0 ? this.penaltyAmount : null,
            });
            this.isLoading = null;
            // this.checkoutDialogClosed.emit({ reason: source === 'checkout&invoice' ? 'openInvoice' : 'checkout' });
            this.checkoutDialogClosed.emit({ reason: this.includeInvoice ? 'openInvoice' : 'checkout', isEarlyCheckout: this.isEarlyCheckout });
        }
        catch (error) {
            console.error(error);
        }
    }
    handleOpenChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.init();
        }
    }
    componentDidLoad() {
        // `@Watch('open')` only fires on a change — if the dialog is mounted already open
        // (e.g. auto-opened right after render), run the initial load here.
        if (this.open) {
            this.init();
        }
    }
    get missingClSummary() {
        if (!this.agent || !functions.isAgentMode(this.agent) || !this.room || !this.booking)
            return null;
        const today = moment.hooks().format('YYYY-MM-DD');
        const agentId = this.agent.id;
        const agentRooms = this.booking.rooms.filter(r => r.agent !== null && r.agent.id === agentId);
        const agentExtraServices = (this.booking.extra_services ?? []).filter(e => e.agent !== null && e.agent.id === agentId);
        const room = agentRooms.reduce((total, r) => {
            //TODO check for accomodation REL_ENTITY
            const postedDates = new Set(this.transactions.filter(tx => tx.REL_ENTITY === 'TBL_BSAD' && tx.BSA_REF === r.identifier).map(tx => tx.SERVICE_DATE));
            const unposted = (r.days ?? []).filter(d => d.date < today && !postedDates.has(d.date));
            return total + unposted.length;
        }, 0);
        const postedExtraKeys = new Set(this.transactions.filter(tx => tx.REL_ENTITY === 'TBL_BSE').map(tx => tx.REL_ENTITY_KEY));
        const extras = agentExtraServices.filter(es => es.system_id != null && es.start_date <= today && !postedExtraKeys.has(es.system_id)).length;
        return { room, extras, total: room + extras };
    }
    async init() {
        if (!this.open) {
            return;
        }
        try {
            this.isLoading = 'page';
            this.room = this.booking.rooms.find(r => r.identifier === this.identifier);
            this.detectEarlyCheckout();
            const hasAgent = !!this.room?.agent;
            const hasDueAmount = (this.booking?.financial?.due_amount ?? 0) > 0;
            const [invoiceInfo, agent, paymentEntries] = await Promise.all([
                this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr }),
                hasAgent ? this.agentService.getExposedAgent({ id: this.booking.agent.id }) : Promise.resolve(null),
                hasDueAmount ? this.setupService.getPaymentEntries() : Promise.resolve(null),
            ]);
            this.invoiceInfo = invoiceInfo;
            this.setupButtons();
            if (paymentEntries) {
                this.paymentEntries = paymentEntries;
            }
            if (agent && functions.isAgentMode(agent)) {
                this.agent = agent;
                const res = await this.cityLedgerService.fetchCL({
                    AGENCY_ID: this.booking.agent.id,
                    SEARCH_QUERY: this.booking.booking_nbr,
                });
                this.transactions = res.My_Cl_tx;
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    detectEarlyCheckout() {
        const today = moment.hooks().startOf('day');
        this.isEarlyCheckout = booking.isEarlyCheckout(this.room);
        if (this.isEarlyCheckout) {
            const todayStr = today.format('YYYY-MM-DD');
            this.remainingDays = (this.room.days ?? []).filter(d => d.date >= todayStr);
            const dueAmount = this.booking?.guest_financial?.due_amount ?? 0;
            const rawTotal = this.booking.rooms.length === 1 ? (dueAmount >= 0 ? dueAmount : this.remainingTotal) : Math.min(this.remainingTotal, dueAmount);
            const total = Math.max(0, rawTotal);
            this.penaltyAmount = total;
            this.penaltyMax = total;
            this.initialPenaltyStr = total.toFixed(2);
        }
    }
    /**
     * Determines which checkout action buttons to surface.
     *
     * Decision rules (evaluated after `invoiceInfo` is loaded):
     *
     * 1. Filter `invoiceable_items` to items that still need invoicing — exclude
     *    `AlreadyInvoiced` and `PickupCancellationPolicy` reasons.
     * 2. From those, isolate room/accommodation items (`type === 'BSA'`).
     * 3. Button set:
     *    - Nothing outstanding           → `checkout` only
     *    - Any outstanding items         → `invoice_checkout` (check out + invoice guest)
     *    - 2+ outstanding room items     → also add `checkout_without_invoice` (skip invoicing)
     *
     * `checkout_without_invoice` is withheld when only one room is un-invoiced because
     * the "check out & invoice" path already covers that case cleanly.
     */
    setupButtons() {
        const toBeInvoiced = this.invoiceInfo.invoiceable_items.filter(item => ![enums.InvoiceableItemReason.AlreadyInvoiced, enums.InvoiceableItemReason.PickupCancellationPolicy].includes(item?.reason?.code));
        const toBeInvoicedRooms = toBeInvoiced.filter(item => item.type === 'BSA');
        if (toBeInvoiced.length === 0) {
            this.buttons.add('checkout');
            return;
        }
        const allRoomInvoiced = toBeInvoicedRooms.length === 0;
        let includeInvoice = true;
        this.buttons.add('invoice_checkout');
        if (!allRoomInvoiced && toBeInvoicedRooms.length > 1) {
            includeInvoice = false;
            this.buttons.add('checkout_without_invoice');
        }
        this.includeInvoice = includeInvoice;
    }
    renderEarlyCheckoutContent() {
        const unitName = this.room?.unit?.name ?? this.room?.identifier;
        const remainingCount = this.remainingDays.length;
        const total = this.remainingTotal;
        return (index.h("div", { class: "early-checkout" }, index.h("wa-callout", { class: "ec-summary", size: "s", appearance: "filled", variant: "neutral" }, index.h("div", { class: "ec-summary__row" }, index.h("span", { class: "ec-summary__label" }, t.t('Lcz_Unit', { fallback: 'Unit' })), index.h("span", { class: "ec-summary__value" }, unitName)), index.h("div", { class: "ec-summary__row" }, index.h("span", { class: "ec-summary__label" }, t.t('Lcz_OriginalCheckOut', { fallback: 'Original check-out' })), index.h("span", { class: "ec-summary__value" }, irDate.formatDate(this.room.to_date, 'ddd, MMM D, YYYY'))), index.h("div", { class: "ec-summary__row" }, index.h("span", { class: "ec-summary__label" }, t.t('Lcz_ActualCheckOut', { fallback: 'Actual check-out' })), index.h("span", { class: "ec-summary__value" }, irDate.formatDate(moment.hooks(), 'ddd, MMM D, YYYY')))), index.h("div", { class: "ec-section" }, index.h("p", { class: "ec-section__title" }, t.t('Lcz_ReclaimedNights', { fallback: 'Reclaimed Nights' }), " ", index.h("wa-badge", { pill: true }, number.formatCount(remainingCount))), index.h("div", { class: "ec-nights" }, this.remainingDays.map(day => (index.h("div", { key: day.date, class: "ec-nights__row" }, index.h("span", { class: "ec-nights__date" }, irDate.formatDate(day.date, 'ddd, MMM D')), index.h("span", { class: "ec-nights__amount" }, this.formatAmount(day.charges.total_amount))))), index.h("div", { class: "ec-nights__subtotal" }, index.h("span", null, t.t('Lcz_SubtotalIncludingTaxesAndFees', { fallback: 'Subtotal (Including taxes and fees)' })), index.h("span", null, this.formatAmount(total))))), index.h("div", { class: "ec-section" }, this.penaltyMax > 0 ? (index.h("ir-input", { label: t.t('Lcz_ApplyFullCancellationPenalty', { fallback: 'Apply the full cancellation penalty?' }), mask: "price", value: this.initialPenaltyStr, defaultValue: this.initialPenaltyStr, min: 0, max: this.penaltyMax, hint: t.t('Lcz_PrefilledFromReclaimedNightsOrDueAmountHint', { fallback: 'Pre-filled from reclaimed nights or due amount. Modify or waive entirely.' }), "onText-change": (e) => {
                const val = parseFloat(e.detail);
                this.penaltyAmount = isNaN(val) ? 0 : val;
            } }, index.h("span", { slot: "start" }, this.currencySymbol))) : (index.h("wa-callout", { size: "s", variant: "success" }, index.h("wa-icon", { slot: "icon", name: "circle-check" }), t.t('Lcz_BookingFullyPaidNoPenaltyDue', { fallback: 'This booking is fully paid — no cancellation penalty or outstanding balance is due.' }))))));
    }
    get duePayment() {
        const p = this.paymentEntries.types.find(t => t.CODE_NAME === '001');
        return {
            amount: Math.abs(this.booking?.guest_financial?.due_amount),
            currency: calendarData.calendar_data.property.currency,
            date: moment.hooks().format('YYYY-MM-DD'),
            designation: null,
            payment_method: null,
            payment_type: { code: p.CODE_NAME, description: p.CODE_VALUE_EN, operation: p.NOTES },
            id: -1,
            reference: '',
        };
    }
    renderDueAmountWarning({ canCollect = true }) {
        const balance = this.booking?.guest_financial?.due_amount ?? 0;
        if (!balance || balance <= 0)
            return null;
        const amount = this.formatAmount(balance);
        return (index.h("div", { class: "due-amount-btn" }, index.h("wa-callout", { size: "s", variant: "danger" }, index.h("wa-icon", { slot: "icon", name: "money-bill-wave" }), index.h("div", { class: 'd-flex align-items-center justify-content-between' }, index.h("span", null, t.t('Lcz_OutstandingGuestBalance', { fallback: 'Outstanding guest balance:' }), " ", amount), canCollect && (index.h("ir-custom-button", { variant: "danger", appearance: "outlined", size: "xs", style: { marginLeft: 'auto' }, onClick: () => this.paymentFolioRef?.openFolio() }, t.t('Lcz_Collect', { fallback: 'Collect' })))))));
    }
    renderSameDayWarning() {
        if (moment.hooks().isSame(moment.hooks(this.room?.from_date, 'YYYY-MM-DD'), 'date')) {
            const isSingleRoom = this.booking.rooms.length === 1;
            return (index.h("wa-callout", { size: "s", variant: "danger" }, index.h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), isSingleRoom ? t.t('Lcz_BookingWillBeCancelled', { fallback: 'This booking will be cancelled' }) : t.t('Lcz_RoomWillBeRemoved', { fallback: 'This room will be removed' })));
        }
        return null;
    }
    renderMissingClWarning() {
        const summary = this.missingClSummary;
        if (!summary)
            return null;
        if (summary.total === 0) {
            return (index.h("wa-callout", { size: "s", variant: "success" }, index.h("wa-icon", { slot: "icon", name: "circle-check" }), t.t('Lcz_AllChargesPostedToCityLedger', { fallback: 'All charges posted to %1 City Ledger', params: [this.agent.name] })));
        }
        return (index.h("wa-callout", { size: "s", variant: "warning" }, index.h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), t.t('Lcz_ItemsNotPostedToCityLedger', { fallback: '%1 item(s) not posted to city ledger', params: [number.formatCount(summary.total)] })));
    }
    render() {
        const isEarly = this.isEarlyCheckout && this.isLoading !== 'page';
        const hasDue = (this.booking?.guest_financial?.due_amount ?? 0) > 0;
        return (index.h(index.Fragment, { key: 'ba1da3581dfa49ef6373a566ce01b4986ea56e6b' }, index.h("ir-dialog", { key: 'eb031ec9d2774c127bac85e57dc765b8baf11d79', open: this.open, label: isEarly ? t.t('Lcz_EarlyCheckOut', { fallback: 'Early Check-Out' }) : t.t('Lcz_CheckOutLabel', { fallback: 'Check-out' }), style: { '--ir-dialog-width': isEarly ? 'min(36rem, calc(100vw - 2rem))' : 'fit-content' }, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.buttons.clear();
                this.checkoutDialogClosed.emit({ reason: 'cancel' });
            } }, this.open && (index.h(index.Fragment, { key: 'f6dfd8f860344ee67e039bfa568935238eeef2a7' }, this.isLoading === 'page' ? (index.h("div", { class: "dialog__loader-container" }, index.h("ir-spinner", null))) : (index.h(index.Fragment, null, index.h("div", { class: "checkout-dialog__callouts" }, this.renderDueAmountWarning({ canCollect: !isEarly }), this.renderMissingClWarning(), this.renderSameDayWarning()), this.isEarlyCheckout ? (this.renderEarlyCheckoutContent()) : (index.h("p", { style: { width: 'calc(31rem - var(--spacing))' } }, t.t('Lcz_AreYouSureCheckOutUnit', { fallback: 'Are you sure you want to check out unit %1?', params: [this.room?.unit?.name ?? ''] }))), this.buttons.has('invoice_checkout') && (index.h("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } }, index.h("wa-checkbox", { style: { marginTop: '1rem', color: 'var(--wa-color-text-quiet)', marginInlineStart: 'auto' }, value: String(this.includeInvoice), defaultChecked: this.includeInvoice, onchange: () => {
                this.includeInvoice = !this.includeInvoice;
            } }, t.t('Lcz_PrepareGuestInvoiceAfterCheckout', { fallback: 'Prepare guest invoice after checkout' })))))))), index.h("div", { key: 'f05dc476fa5334f6694eadf3349b278dda99652d', slot: "footer", class: "ir-dialog__footer" }, index.h(index.Fragment, { key: '1e1615b63671a4cd37958461af2d97734e478fb0' }, index.h("ir-custom-button", { key: '765949ea1f8ae1b33064a3d1e6501659267c8952', size: "m", "data-dialog": "close", appearance: "filled", variant: "neutral" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: 'c15542437336aa1597cc45c80e457258c35cfcc9', size: "m", onClickHandler: e => this.checkoutRoom({ e, source: 'checkout' }), variant: 'brand', loading: this.isLoading === 'checkout' }, isEarly ? t.t('Lcz_ConfirmEarlyCheckOut', { fallback: 'Confirm early check-out' }) : t.t('Lcz_CheckOut', { fallback: 'Check out' }))))), hasDue && this.paymentEntries && (index.h("ir-payment-folio", { key: '66a4597a4f3f94a1370527a51a942eb56e7d120b', ref: el => (this.paymentFolioRef = el), booking: this.booking, bookingNumber: this.booking.booking_nbr, paymentEntries: this.paymentEntries, mode: 'payment-action', payment: this.duePayment }))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrCheckoutDialog.style = irCheckoutDialogCss();

const irCityLedgerFiscalDocumentsTableCss = () => `.sc-ir-city-ledger-fiscal-documents-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-city-ledger-fiscal-documents-table{overflow-x:auto}.table--container.sc-ir-city-ledger-fiscal-documents-table,.data-table.sc-ir-city-ledger-fiscal-documents-table{height:100%}.ir-table-row.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-city-ledger-fiscal-documents-table tbody.sc-ir-city-ledger-fiscal-documents-table tr.sc-ir-city-ledger-fiscal-documents-table:last-child>td.sc-ir-city-ledger-fiscal-documents-table{border-bottom:0 !important}.cell--align-start.sc-ir-city-ledger-fiscal-documents-table{text-align:start !important}.cell--align-center.sc-ir-city-ledger-fiscal-documents-table{text-align:center !important}.cell--align-end.sc-ir-city-ledger-fiscal-documents-table{text-align:end !important}.table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sc-ir-city-ledger-fiscal-documents-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sc-ir-city-ledger-fiscal-documents-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-city-ledger-fiscal-documents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-city-ledger-fiscal-documents-table,.ir-table-row.sc-ir-city-ledger-fiscal-documents-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-fiscal-documents-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sortable.sc-ir-city-ledger-fiscal-documents-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sortable.sc-ir-city-ledger-fiscal-documents-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sortable.sc-ir-city-ledger-fiscal-documents-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-city-ledger-fiscal-documents-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-city-ledger-fiscal-documents-table svg.sc-ir-city-ledger-fiscal-documents-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:hover td.sc-ir-city-ledger-fiscal-documents-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:hover td.sc-ir-city-ledger-fiscal-documents-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:active td.sc-ir-city-ledger-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:hover td.sc-ir-city-ledger-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:active td.sc-ir-city-ledger-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-city-ledger-fiscal-documents-table .empty-row.sc-ir-city-ledger-fiscal-documents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-city-ledger-fiscal-documents-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-city-ledger-fiscal-documents-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}.sc-ir-city-ledger-fiscal-documents-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60dvh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:var(--wa-color-surface-default)}.fiscal-table__heading.sc-ir-city-ledger-fiscal-documents-table:last-child{border-inline-end:0}.fiscal-table__heading--numeric.sc-ir-city-ledger-fiscal-documents-table,.fiscal-table__cell--numeric.sc-ir-city-ledger-fiscal-documents-table{text-align:end !important}.ir-table-row.--is-draft.sc-ir-city-ledger-fiscal-documents-table>td.sc-ir-city-ledger-fiscal-documents-table{background-color:var(--wa-color-warning-fill-quiet) !important}.fd_ss.sc-ir-city-ledger-fiscal-documents-table{color:var(--wa-color-text-quiet);margin:0;padding:0;font-size:var(--wa-font-size-s)}.fd_ss__connector.sc-ir-city-ledger-fiscal-documents-table{text-transform:lowercase}.fiscal-table__date-cell.sc-ir-city-ledger-fiscal-documents-table{display:flex;align-items:baseline;gap:0.5rem}.fiscal-table__status-tag.sc-ir-city-ledger-fiscal-documents-table{text-transform:capitalize}.fiscal-table__doc-number.sc-ir-city-ledger-fiscal-documents-table::part(base),.fiscal-table__doc-number.sc-ir-city-ledger-fiscal-documents-table [part~="base"]{padding:0.05rem 0.5rem;height:auto}.fiscal-table__cell--doc-number.sc-ir-city-ledger-fiscal-documents-table{--ir-cell-padding:0.5rem}.fiscal-table__heading--actions.sc-ir-city-ledger-fiscal-documents-table,.fiscal-table__cell--actions.sc-ir-city-ledger-fiscal-documents-table{text-align:center !important}.fiscal-table__action-trigger.sc-ir-city-ledger-fiscal-documents-table::part(base),.fiscal-table__action-trigger.sc-ir-city-ledger-fiscal-documents-table [part~="base"]{width:24px;height:24px}.fiscal-table__action-danger.sc-ir-city-ledger-fiscal-documents-table{color:var(--wa-color-danger-fill-loud, #dc2626)}.fiscal-table__cell--zero.sc-ir-city-ledger-fiscal-documents-table{color:var(--wa-color-text-quiet, #9ca3af)}.fiscal-table__totals.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{background:var(--wa-color-neutral-fill-quiet, #f9fafb) !important;border-top:2px solid var(--wa-color-neutral-border-quiet, #e5e7eb) !important;font-weight:600;font-size:0.875rem;padding:0.75rem 1rem !important}.fiscal-table__totals-label.sc-ir-city-ledger-fiscal-documents-table{display:flex;align-items:center;color:var(--wa-color-text-quiet, #6b7280)}.fiscal-table__totals-value.sc-ir-city-ledger-fiscal-documents-table{font-variant-numeric:tabular-nums}.fiscal-table__totals-debit.sc-ir-city-ledger-fiscal-documents-table{color:#dc2626}.fiscal-table__totals-credit.sc-ir-city-ledger-fiscal-documents-table{color:#16a34a}.fiscal-table__empty.sc-ir-city-ledger-fiscal-documents-table{text-align:center;color:var(--wa-color-text-quiet);font-size:0.875rem;padding:1.25rem}.fiscal-table__date-prompt.sc-ir-city-ledger-fiscal-documents-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;flex:1;padding:3rem 2rem;text-align:center}.fiscal-table__date-prompt-icon.sc-ir-city-ledger-fiscal-documents-table{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.fiscal-table__date-prompt-title.sc-ir-city-ledger-fiscal-documents-table{margin:0;font-size:0.9375rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}`;

const IrCityLedgerFiscalDocumentsTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clFiscalDocumentPreview = index.createEvent(this, "clFiscalDocumentPreview");
        this.fetchRequested = index.createEvent(this, "fetchRequested");
    }
    rows = [];
    booking;
    currencySymbol = '$';
    currencies = [];
    taxableOnly = false;
    isLoading = false;
    hasDates = false;
    ticket;
    propertyId;
    agentId = null;
    fromDate = null;
    toDate = null;
    hasFetched = false;
    clFiscalDocumentPreview;
    fetchRequested;
    pendingAction = null;
    isConfirming = false;
    columnHelper = useTable.createColumnHelper();
    cityLedgerService = new index$1.CityLedgerService();
    handleAction(action, row) {
        switch (action) {
            case 'view':
            case 'preview':
                this.clFiscalDocumentPreview.emit({
                    fdTypeCode: row.FD_TYPE_CODE,
                    documentNumber: row.DOC_NUMBER,
                    agentId: this.agentId,
                    agentName: row.AGENCY_NAME,
                    fdId: row.FD_ID,
                    externalRef: row.EXTERNAL_REF,
                    fromDate: row.FD_TYPE_CODE === enums.FdTypes.Proforma ? row.FROM_DATE : this.fromDate,
                    toDate: row.FD_TYPE_CODE === enums.FdTypes.Proforma ? row.TO_DATE : this.toDate,
                    bookingNbr: row.FD_TYPE_CODE === enums.FdTypes.Proforma ? row.BOOK_NBR : null,
                });
                break;
            case 'print':
                this.clFiscalDocumentPreview.emit({
                    fdTypeCode: row.FD_TYPE_CODE,
                    documentNumber: row.DOC_NUMBER,
                    agentId: this.agentId,
                    agentName: row.AGENCY_NAME,
                    fdId: row.FD_ID,
                    autoPrint: true,
                    externalRef: row.EXTERNAL_REF,
                    fromDate: row.FD_TYPE_CODE === enums.FdTypes.Proforma ? row.FROM_DATE : this.fromDate,
                    toDate: row.FD_TYPE_CODE === enums.FdTypes.Proforma ? row.TO_DATE : this.toDate,
                    bookingNbr: row.FD_TYPE_CODE === enums.FdTypes.Proforma ? row.BOOK_NBR : null,
                });
                break;
            case 'download':
                console.log('download', row);
                break;
            case 'send-reminder':
                console.log('send-reminder', row);
                break;
            case 'apply-payment':
                console.log('apply-payment', row);
                break;
            case 'mark-paid':
                console.log('mark-paid', row);
                break;
            case 'void':
            case 'delete-draft':
            case 'convert-to-invoice':
                this.pendingAction = { action: action, row };
                break;
        }
    }
    async confirmPendingAction(e) {
        if (!this.pendingAction)
            return;
        const { action, row } = this.pendingAction;
        this.isConfirming = true;
        try {
            if (action === 'void') {
                switch (row.FD_TYPE_CODE) {
                    case enums.FdTypes.Invoice:
                        const { amount, voidType } = e.detail;
                        if (voidType === enums.FdTypes.CreditNote) {
                            await this.cityLedgerService.voidInvoiceByCreditNote({ FD_ID: row.FD_ID });
                        }
                        else {
                            const result = await this.cityLedgerService.issueManualCLTx({
                                CL_TX_ID: -1,
                                AGENCY_ID: this.agentId,
                                SERVICE_DATE: moment.hooks().format('YYYY-MM-DD'),
                                CL_TX_TYPE_CODE: enums.FdTypes.AdjustmentCredit,
                                DESCRIPTION: 'Adjustment Credit',
                                DEBIT: 0,
                                BH_ID: this.booking?.system_id || null,
                                CREDIT: amount,
                                CURRENCY_ID: calendarData.calendar_data?.property?.currency?.id,
                                PAY_METHOD_CODE: '',
                                EXTERNAL_REF: row.FD_ID.toString(),
                                VAT_INCLUDED_CODE: '',
                                VAT_PCT: null,
                            });
                            if (result?.My_Fd?.FD_TYPE_CODE && result.My_Fd.DOC_NUMBER) {
                                this.clFiscalDocumentPreview.emit({
                                    fdTypeCode: result.My_Fd.FD_TYPE_CODE,
                                    documentNumber: result.My_Fd.DOC_NUMBER,
                                    agentId: this.agentId,
                                    agentName: result.My_Fd.AGENCY_NAME ?? '',
                                    externalRef: result.My_Fd.EXTERNAL_REF,
                                });
                            }
                        }
                        break;
                    case enums.FdTypes.Receipt:
                        await this.cityLedgerService.voidReceiptByCreditReceipt({ FD_ID: row.FD_ID });
                        break;
                    default:
                        console.warn(row.FD_TYPE_CODE + ' not implemented');
                        break;
                }
            }
            else if (action === 'delete-draft') {
                await this.cityLedgerService.deleteDraftFiscalDocument({ FD_ID: row.FD_ID });
            }
            else if (action === 'convert-to-invoice') {
                await this.cityLedgerService.issueInvoiceFromDraft({ FD_ID: row.FD_ID });
            }
            this.fetchRequested.emit();
        }
        finally {
            this.isConfirming = false;
            this.pendingAction = null;
        }
    }
    getCredit(info) {
        const { FD_TYPE_CODE, DEBIT } = info.row.original;
        const value = info.getValue();
        switch (FD_TYPE_CODE) {
            case enums.FdTypes.CreditReceipt:
                return -DEBIT;
            case enums.FdTypes.Receipt:
                return Math.abs(value);
            default:
                return value;
        }
    }
    get columns() {
        const base = [
            this.columnHelper.accessor('FD_STATUS_CODE', {
                header: t.t('Lcz_Status', { fallback: 'Status' }),
                cell: info => index.h("ir-cl-status-tag", { transaction: info.row.original }),
            }),
            this.columnHelper.accessor('ISSUE_DATE_DISPLAY', {
                header: t.t('Lcz_DateLabel', { fallback: 'Date' }),
                cell: info => {
                    const row = info.row.original;
                    return (index.h("div", { class: "fiscal-table__date-cell" }, index.h("p", { class: "m-0 p-0" }, irDate.formatDate(info.getValue())), row.ISSUE_HOUR != null && row.ISSUE_MINUTE != null && index.h("p", { class: "fd_ss" }, functions._formatTime(String(row.ISSUE_HOUR), String(row.ISSUE_MINUTE)))));
                },
            }),
            this.columnHelper.accessor('DOC_NUMBER', {
                header: t.t('Lcz_DocNumber', { fallback: 'Doc Number' }),
                cell: info => (index.h("wa-button", { onClick: () => {
                        const row = info.row.original;
                        this.clFiscalDocumentPreview.emit({
                            fdTypeCode: row.FD_TYPE_CODE,
                            documentNumber: row.DOC_NUMBER,
                            agentId: this.agentId,
                            agentName: row.AGENCY_NAME,
                            fdId: row.FD_ID,
                            externalRef: row.EXTERNAL_REF,
                            fromDate: row.FD_TYPE_CODE === enums.FdTypes.Proforma ? row.FROM_DATE : this.fromDate,
                            toDate: row.FD_TYPE_CODE === enums.FdTypes.Proforma ? row.TO_DATE : this.toDate,
                            bookingNbr: row.FD_TYPE_CODE === enums.FdTypes.Proforma ? row.BOOK_NBR : null,
                        });
                    }, variant: "brand", appearance: "plain", class: "fiscal-table__doc-number" }, number.formatBookingNumber(info.getValue()))),
            }),
            this.columnHelper.accessor('FD_TYPE_NAME', {
                id: 'type',
                header: t.t('Lcz_Type', { fallback: 'Type' }),
                cell: info => (index.h("div", null, index.h("p", { class: "m-0 p-0" }, info.getValue()), info.row.original.EXTERNAL_REF && (index.h("p", { class: "fd_ss" }, [enums.FdTypes.CreditNote, enums.FdTypes.CreditReceipt].includes(info.row.original.FD_TYPE_CODE)
                    ? index.h("span", { class: "fd_ss__connector" }, t.t('Lcz_For', { fallback: 'For' }))
                    : t.t('Lcz_VoidedByReference', { fallback: 'voided by' }), ' ', info.row.original.EXTERNAL_REF)))),
            }),
        ];
        const amountCols = this.taxableOnly
            ? [
                this.columnHelper.accessor('NET_AMOUNT', {
                    header: t.t('Lcz_NetAmount', { fallback: 'Net Amount' }),
                    cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
                }),
                this.columnHelper.accessor('TAX_AMOUNT', {
                    header: t.t('Lcz_Taxes', { fallback: 'Taxes' }),
                    cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
                }),
            ]
            : [];
        // : [
        //     this.columnHelper.accessor('TOTAL_AMOUNT', {
        //       id: 'amount',
        //       header: 'Amount (incl. taxes)',
        //       cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
        //     }),
        //   ];
        return [
            ...base,
            ...amountCols,
            this.columnHelper.accessor('DEBIT', {
                header: t.t('Lcz_DebitColumn', { fallback: 'Debit' }),
                cell: info => (info.row.original.FD_TYPE_CODE === enums.FdTypes.CreditReceipt ? '' : this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID)),
            }),
            this.columnHelper.accessor('CREDIT', {
                header: t.t('Lcz_CreditColumn', { fallback: 'Credit' }),
                cell: info => this.renderMoney(this.getCredit(info), info.row.original.CURRENCY_ID),
            }),
            this.columnHelper.display({
                id: 'actions',
                header: t.t('Lcz_Actions', { fallback: 'Actions' }),
                cell: info => {
                    const row = info.row.original;
                    const isDraft = row.FD_TYPE_CODE === enums.FdTypes.Draft;
                    // const isPaid = row.FD_STATUS_CODE === 'INV';
                    const isInvoice = row.FD_TYPE_CODE === enums.FdTypes.Invoice;
                    const isReceipt = row.FD_TYPE_CODE === enums.FdTypes.Receipt;
                    return (index.h("wa-dropdown", { "onwa-hide": e => {
                            e.stopImmediatePropagation();
                            e.stopPropagation();
                        }, "onwa-select": (e) => {
                            this.handleAction(e.detail.item.value, row);
                        } }, index.h("wa-button", { slot: "trigger", size: "s", variant: "neutral", appearance: "plain", class: "fiscal-table__action-trigger" }, index.h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1.2rem' } })), isDraft
                        ? [
                            index.h("wa-dropdown-item", { value: "preview" }, t.t('Lcz_Preview', { fallback: 'Preview' })),
                            index.h("wa-dropdown-item", { value: "convert-to-invoice" }, t.t('Lcz_ConvertToInvoice', { fallback: 'Convert to Invoice' })),
                            index.h("wa-dropdown-item", { value: "delete-draft", variant: "danger" }, t.t('Lcz_Delete', { fallback: 'Delete' })),
                        ]
                        : [
                            index.h("wa-dropdown-item", { value: "view" }, t.t('Lcz_ViewDocument', { fallback: 'View document' })),
                            index.h("wa-dropdown-item", { value: "print" }, t.t('Lcz_Print', { fallback: 'Print' })),
                            // <wa-dropdown-item value="download">Download PDF</wa-dropdown-item>,
                            // (!isPaid || !isInvoice) && <wa-divider></wa-divider>,
                            // !isPaid && <wa-dropdown-item value="send-reminder">Send Reminder</wa-dropdown-item>,
                            // !isPaid && isInvoice && <wa-dropdown-item value="apply-payment">Apply Payment</wa-dropdown-item>,
                            // !isPaid && <wa-dropdown-item value="mark-paid">Mark as Paid</wa-dropdown-item>,
                            // <wa-divider></wa-divider>,
                            isInvoice && info.row.original.FD_STATUS_CODE !== enums.FdStatus.Voided && (index.h("wa-dropdown-item", { value: "void" }, index.h("span", { class: "fiscal-table__action-danger" }, t.t('Lcz_IssueCreditNote', { fallback: 'Issue credit note' })))),
                            isReceipt && info.row.original.FD_STATUS_CODE !== enums.FdStatus.Voided && (index.h("wa-dropdown-item", { value: "void" }, index.h("span", { class: "fiscal-table__action-danger" }, t.t('Lcz_VoidWithCreditReceipt', { fallback: 'Void with credit receipt' })))),
                        ]));
                },
                enableSorting: false,
            }),
        ];
    }
    getSymbol(currencyId) {
        const match = this.currencies.find(c => c.id === currencyId);
        return match?.symbol ?? this.currencySymbol;
    }
    renderMoney(value, currencyId) {
        if (!value)
            return index.h("span", { class: "fiscal-table__cell--zero" });
        return index.h("span", null, number.formatAmount(this.getSymbol(currencyId), value));
    }
    render() {
        if (!this.hasFetched) {
            const hasDate = !!(this.fromDate || this.toDate);
            return (index.h(index.Host, null, index.h("div", { class: "fiscal-table__date-prompt" }, index.h("div", { class: "fiscal-table__date-prompt-icon" }, index.h("wa-icon", { name: "calendar-days" })), index.h("p", { class: "fiscal-table__date-prompt-title" }, t.t('Lcz_SelectDateRangeToGetStarted', { fallback: 'Select a date range to get started' })), hasDate && (index.h("wa-animation", { iterations: 1, play: true, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, index.h("ir-custom-button", { size: "s", variant: "brand", onClickHandler: () => this.fetchRequested.emit() }, index.h("wa-icon", { slot: "start", name: "magnifying-glass" }), t.t('Lcz_LoadDocuments', { fallback: 'Load Documents' })))))));
        }
        const table = useTable.useTable({
            data: this.rows,
            columns: this.columns,
            getCoreRowModel: useTable.getCoreRowModel(),
            getSortedRowModel: useTable.getSortedRowModel(),
        });
        return (index.h(index.Host, null, index.h("div", { class: "table--container" }, index.h("table", { class: "table data-table" }, index.h("thead", null, table.getHeaderGroups().map(headerGroup => (index.h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (index.h("th", { key: header.id, class: {
                'fiscal-table__heading--numeric': ['NET_AMOUNT', 'TAX_AMOUNT', 'amount', 'DEBIT', 'CREDIT'].includes(header.column.id),
                'fiscal-table__heading--actions': header.column.id === 'actions',
            } }, useTable.flexRender(header.column.columnDef.header, header.getContext())))))))), index.h("tbody", null, table.getRowModel().rows.map(row => (index.h("tr", { key: row.id, class: { 'ir-table-row': true, '--is-draft': row.original.FD_TYPE_CODE === enums.FdTypes.Draft } }, row.getVisibleCells().map(cell => (index.h("td", { key: cell.id, class: {
                'fiscal-table__cell': true,
                'fiscal-table__cell--numeric': ['NET_AMOUNT', 'TAX_AMOUNT', 'amount', 'DEBIT', 'CREDIT'].includes(cell.column.id),
                'fiscal-table__cell--actions': cell.column.id === 'actions',
                'fiscal-table__cell--doc-number': cell.column.id === 'DOC_NUMBER',
            } }, useTable.flexRender(cell.column.columnDef.cell, cell.getContext()))))))), table.getRowModel().rows.length === 0 && (index.h("tr", null, index.h("td", { class: "empty-row", colSpan: this.columns.length }, this.isLoading ? index.h("ir-spinner", null) : t.t('Lcz_NoFiscalDocumentsMatchFilters', { fallback: 'No fiscal documents match the current filters.' }))))))), index.h("ir-fd-confirm-dialog", { amount: this.pendingAction?.row?.TOTAL_AMOUNT, fdType: this.pendingAction?.row?.FD_TYPE_CODE, open: this.pendingAction !== null, action: this.pendingAction?.action ?? null, docNumber: this.pendingAction?.row.DOC_NUMBER ?? t.t('Lcz_ThisDocumentFallback', { fallback: 'this document' }), isConfirming: this.isConfirming, onConfirmed: e => this.confirmPendingAction(e), onCancelled: () => (this.pendingAction = null) })));
    }
};
IrCityLedgerFiscalDocumentsTable.style = irCityLedgerFiscalDocumentsTableCss();

const irCityLedgerTransactionDrawerCss = () => `.sc-ir-city-ledger-transaction-drawer-h{display:block}.city-ledger-transaction-drawer__footer.sc-ir-city-ledger-transaction-drawer{display:flex;gap:0.75rem}.city-ledger-transaction-drawer__btn.sc-ir-city-ledger-transaction-drawer{flex:1 1 0}`;

const IrCityLedgerTransactionDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeDrawer = index.createEvent(this, "closeDrawer");
        this.transactionSaved = index.createEvent(this, "transactionSaved");
    }
    open = false;
    formId = 'city-ledger-transaction-form';
    drawerLabel = t.t('Lcz_NewEntryTitle', { fallback: 'New Entry' });
    agent = null;
    booking = null;
    initialTransactionType = 'OB';
    unpaidInvoiceOptions = [];
    bookingOptions = [];
    serviceCategoryOptions = [];
    transaction = null;
    saveDisabled = false;
    closeDrawer;
    transactionSaved;
    stopEventPropagation(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
    }
    render() {
        return (index.h("ir-drawer", { key: 'c8a46cac33ef7e96eac435b7e442d0536c799ade', open: this.open, style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: this.drawerLabel, onDrawerHide: event => {
                this.stopEventPropagation(event);
                if (event.detail) {
                    this.closeDrawer.emit();
                }
            } }, this.open && (index.h("ir-city-ledger-transaction-form", { key: '8f72959a2ceaf2d102c1e8be0cff6a2fcf112b44', booking: this.booking, formId: this.formId, agent: this.agent, initialTransactionType: this.initialTransactionType, unpaidInvoiceOptions: this.unpaidInvoiceOptions, bookingOptions: this.bookingOptions, serviceCategoryOptions: this.serviceCategoryOptions, transaction: this.transaction, onTransactionSaved: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.transactionSaved.emit();
                this.closeDrawer.emit();
            }, onSubmitDisabledChange: (e) => {
                this.saveDisabled = e.detail;
            } })), index.h("div", { key: 'f742c4c2b1ac3383cd7b8fe91cdf76c5144c12ab', slot: "footer", class: 'ir__drawer-footer' }, index.h("ir-custom-button", { key: 'b97eacf0c22377d963e01f48da1a84d8e64882f5', appearance: "filled", size: "m", variant: "neutral", class: "city-ledger-transaction-drawer__btn", onClickHandler: () => this.closeDrawer.emit() }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '2ed5b734bc416b704c195b4eb1a07ec41978ca35', form: this.formId, size: "m", type: "submit", variant: "brand", class: "city-ledger-transaction-drawer__btn", disabled: this.saveDisabled }, t.t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrCityLedgerTransactionDrawer.style = irCityLedgerTransactionDrawerCss();

/**
 * Builds a grouped payment types record from raw entries and groups.
 *
 * @param paymentEntries - The flat list of all available payment  entries.
 * @returns A record where each key is a group CODE_NAME and the value is the
 *          ordered array of payment type entries belonging to that group.
 *
 * @example
 * const result = buildPaymentTypes(paymentEntries);
 * // {
 * //   PAYMENTS: [ { CODE_NAME: "001", CODE_VALUE_EN: "Cash", ... }, ... ],
 * //   ADJUSTMENTS: [ ... ],
 * //   ...
 * // }
 */
function buildPaymentTypes(paymentEntries) {
    try {
        const { groups, types: types$1 } = types.objectType({
            types: IBooking.SetupEntrySchema.array().min(1),
            groups: IBooking.SetupEntrySchema.array().min(1),
            methods: IBooking.SetupEntrySchema.array().min(1),
        })
            .parse(paymentEntries);
        const items = [...types$1];
        const byCodes = (codes) => codes.map(code => items.find(i => i.CODE_NAME === code)).filter((x) => Boolean(x));
        const extractGroupCodes = (code) => {
            const paymentGroup = groups.find(pt => pt.CODE_NAME === code);
            return paymentGroup ? paymentGroup.CODE_VALUE_EN.split(',') : [];
        };
        let rec = {};
        groups.forEach(group => {
            // if (group.CODE_NAME === 'PAYMENTS') {
            //   rec[group.CODE_NAME] = methods.map(entry => ({
            //     ...entry,
            //     CODE_VALUE_EN: `Payment: ${entry.CODE_VALUE_EN}`,
            //   })) as SetupEntries[];
            // } else if (group.CODE_NAME === 'REFUND') {
            //   rec[group.CODE_NAME] = methods.map(entry => ({
            //     ...entry,
            //     CODE_VALUE_EN: `Refund: ${entry.CODE_VALUE_EN}`,
            //   })) as SetupEntries[];
            rec[group.CODE_NAME] = byCodes(extractGroupCodes(group.CODE_NAME));
        });
        return rec;
    }
    catch (error) {
        console.log(error);
        return {};
    }
}

const irCityLedgerTransactionFormCss = () => `.sc-ir-city-ledger-transaction-form-h{display:block;height:100%}.transaction-form.sc-ir-city-ledger-transaction-form{display:grid;gap:0.9rem}.transaction-form__field.sc-ir-city-ledger-transaction-form{display:grid;gap:0.35rem}.transaction-form__field--full-width.sc-ir-city-ledger-transaction-form,.transaction-form__field--full-width.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form{width:100%}.transaction-form__field--full-width.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form wa-radio.sc-ir-city-ledger-transaction-form{flex:1}.transaction-form__field__entry-type.--credit.sc-ir-city-ledger-transaction-form:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.transaction-form__field__entry-type.--debit.sc-ir-city-ledger-transaction-form:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}.amount-tax-group.sc-ir-city-ledger-transaction-form{display:flex;flex-direction:column;gap:0.35rem}.amount-tax-group__label.sc-ir-city-ledger-transaction-form{font-size:var(--wa-input-label-font-size-small, 0.875rem);font-weight:var(--wa-font-weight-semibold, 500);color:var(--wa-color-text-normal)}.amount-tax-group__required.sc-ir-city-ledger-transaction-form{color:var(--wa-color-danger-fill-loud)}.amount-tax-group__row.sc-ir-city-ledger-transaction-form{display:flex;align-items:stretch}.amount-tax-group__amount.sc-ir-city-ledger-transaction-form{flex:1;min-width:0}.amount-tax-group.sc-ir-city-ledger-transaction-form ir-input.sc-ir-city-ledger-transaction-form::part(label),.amount-tax-group.sc-ir-city-ledger-transaction-form ir-input.sc-ir-city-ledger-transaction-form [part~="label"]{display:none}.amount-tax-group.sc-ir-city-ledger-transaction-form ir-input.sc-ir-city-ledger-transaction-form::part(base),.amount-tax-group.sc-ir-city-ledger-transaction-form ir-input.sc-ir-city-ledger-transaction-form [part~="base"]{border-start-end-radius:0;border-end-end-radius:0;border-inline-end:none}.amount-tax-group.sc-ir-city-ledger-transaction-form wa-select.sc-ir-city-ledger-transaction-form{flex-shrink:0;min-width:8.5rem}.amount-tax-group.sc-ir-city-ledger-transaction-form wa-select.sc-ir-city-ledger-transaction-form::part(combobox),.amount-tax-group.sc-ir-city-ledger-transaction-form wa-select.sc-ir-city-ledger-transaction-form [part~="combobox"]{border-start-start-radius:0;border-end-start-radius:0}.tx-option.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;width:100%}.tx-option__badges.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;gap:0.25rem}.transaction-form__switch.sc-ir-city-ledger-transaction-form{padding:0.15rem 0}.transaction-form__error.sc-ir-city-ledger-transaction-form{margin:0;font-size:0.75rem;color:var(--wa-color-danger-fill-loud)}.transaction-form__fiscal-note.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;gap:0.45rem;font-size:0.875rem;color:var(--wa-color-neutral-fill-loud)}.transaction-form__payment-type-option.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.payment-section.sc-ir-city-ledger-transaction-form{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.payment-section__title.sc-ir-city-ledger-transaction-form{margin:0;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--wa-color-text-quiet, #6b7280)}.payment-type-pill.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;background:var(--wa-color-success-fill-quiet, #f0fdf4);border:1px solid var(--wa-color-success-border-quiet, #bbf7d0);border-radius:0.5rem;font-size:0.8125rem}.payment-type-pill__name.sc-ir-city-ledger-transaction-form{font-weight:500;color:var(--wa-color-text-normal, #111827);flex:1}.payment-section.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form{width:100%}.payment-section.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form wa-radio.sc-ir-city-ledger-transaction-form{flex:1}.payment-invoice-select.sc-ir-city-ledger-transaction-form{animation:slide-in 0.18s ease}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.transaction-form__hint.sc-ir-city-ledger-transaction-form{margin:0;font-size:0.75rem;color:var(--wa-color-text-quiet, #6b7280)}.transaction-form__textarea-label.sc-ir-city-ledger-transaction-form{font-size:0.875rem;font-weight:500;color:var(--wa-color-text-normal, #111827)}.transaction-form__notes.sc-ir-city-ledger-transaction-form{width:100%;box-sizing:border-box;padding:0.5rem 0.75rem;border:1px solid var(--wa-color-neutral-border-quiet, #d1d5db);border-radius:0.375rem;font-size:0.875rem;font-family:inherit;color:var(--wa-color-text-normal, #111827);background:var(--wa-color-surface-default, #fff);resize:vertical;min-height:4.5rem;outline:none;transition:border-color 0.15s ease,     box-shadow 0.15s ease}.transaction-form__notes.sc-ir-city-ledger-transaction-form:focus{border-color:var(--wa-color-brand-border-loud, #2563eb);box-shadow:0 0 0 2px var(--wa-color-brand-fill-quiet, #eff6ff)}.transaction-form__notes.sc-ir-city-ledger-transaction-form::placeholder{color:var(--wa-color-text-quiet, #9ca3af)}`;

const IrCityLedgerTransactionForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.transactionSaved = index.createEvent(this, "transactionSaved");
        this.transactionValidationFailed = index.createEvent(this, "transactionValidationFailed");
        this.submitDisabledChange = index.createEvent(this, "submitDisabledChange");
        this.clFiscalDocumentPreview = index.createEvent(this, "clFiscalDocumentPreview");
    }
    formId = 'city-ledger-transaction-form';
    agent = null;
    initialTransactionType = enums.ClTxTypeCode.Payment;
    unpaidInvoiceOptions = [];
    bookingOptions = [];
    serviceCategoryOptions = [];
    language = 'en';
    booking = null;
    transaction = null;
    formData = irCityLedgerTransactionForm_schema.createInitialTransactionFormDraft();
    paymentEntries = {
        types: [],
        groups: [],
        methods: [],
    };
    paymentTypeGroups = {};
    isLoading = true;
    isSubmitting = false;
    fiscalDocuments = [];
    transactionSaved;
    transactionValidationFailed;
    submitDisabledChange;
    clFiscalDocumentPreview;
    taxOptions = [];
    setupService = new index$2.SetupService();
    cityLedgerService = new index$1.CityLedgerService();
    clTxTypes;
    get resolvedInitialType() {
        return enums.ClTxTypeCode.Payment;
    }
    getUniqueTaxValues() {
        let taxes = new Set();
        calendarData.calendar_data?.property.tax_categories?.forEach(t => {
            if (t.taxation_mode.code === enums.VatIncludedCodes.Inclusive)
                taxes.add(t.pct);
        });
        this.taxOptions = Array.from(taxes).map(t => ({ id: t.toString(), label: `${t}%` }));
    }
    componentWillLoad() {
        this.formData = this.transaction ? irCityLedgerTransactionForm_schema.hydrateFormDraftFromTx(this.transaction) : irCityLedgerTransactionForm_schema.createInitialTransactionFormDraft(this.resolvedInitialType);
        this.fetchPaymentEntries();
        this.getUniqueTaxValues();
    }
    handleTransactionChange(newTx) {
        this.formData = newTx ? irCityLedgerTransactionForm_schema.hydrateFormDraftFromTx(newTx) : irCityLedgerTransactionForm_schema.createInitialTransactionFormDraft(this.resolvedInitialType);
    }
    handleInitialTransactionTypeChange(_newType) {
        if (!this.transaction) {
            this.formData = irCityLedgerTransactionForm_schema.resetDraftForTransactionType(this.resolvedInitialType, this.formData);
        }
    }
    updateFormData(patch) {
        this.formData = { ...this.formData, ...patch };
    }
    get isSubmitDisabled() {
        return this.formData.transactionType === enums.ClTxTypeCode.DebitNote && !this.isLoading && this.fiscalDocuments.length === 0;
    }
    handleTransactionTypeChange(nextType) {
        this.formData = irCityLedgerTransactionForm_schema.resetDraftForTransactionType(nextType, this.formData);
        if (nextType === enums.ClTxTypeCode.Payment || nextType === enums.ClTxTypeCode.CreditNote || nextType === enums.ClTxTypeCode.DebitNote) {
            this.fetchFiscalDocumentsForType(nextType);
        }
        else {
            this.submitDisabledChange.emit(false);
        }
    }
    async fetchFiscalDocumentsForType(type) {
        try {
            this.isLoading = true;
            const LIST_FD_TYPE_CODE = [enums.FdTypes.Invoice];
            if (type === enums.ClTxTypeCode.Payment) {
                LIST_FD_TYPE_CODE.push(enums.FdTypes.DebitNote);
            }
            this.fiscalDocuments = await this.cityLedgerService.getFiscalDocuments({
                AGENCY_ID: this.agent?.id,
                START_DATE: null,
                END_DATE: null,
                LIST_FD_TYPE_CODE,
                BOOK_NBR: this.booking?.booking_nbr,
                LIST_FD_STATUS_CODE: type === enums.ClTxTypeCode.Payment ? [enums.FdStatus.Sent, enums.FdStatus.Issued] : [enums.FdStatus.Paid, enums.FdStatus.Issued],
            });
            if (type === enums.ClTxTypeCode.CreditNote && this.fiscalDocuments.length === 0 && this.formData.creditNoteMode === 'cancel-invoice') {
                this.updateFormData({ creditNoteMode: 'goodwill', invoiceId: undefined });
            }
            if (type === enums.ClTxTypeCode.Payment && this.fiscalDocuments.length === 0) {
                this.updateFormData({ onAccount: true, invoiceId: undefined });
            }
        }
        catch (error) {
            console.error('Failed to fetch fiscal documents', error);
            this.fiscalDocuments = [];
        }
        finally {
            this.isLoading = false;
            this.submitDisabledChange.emit(this.isSubmitDisabled);
        }
    }
    async fetchPaymentEntries() {
        try {
            this.isLoading = true;
            const setupEntries = await this.setupService.getSetupEntriesByTableNameMulti(['_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD', '_CL_TX_TYPE']);
            const { pay_type, pay_type_group, pay_method, cl_tx_type } = utils$1.groupEntryTablesResult(setupEntries);
            this.paymentEntries = {
                types: pay_type ?? [],
                groups: pay_type_group ?? [],
                methods: pay_method ?? [],
            };
            this.clTxTypes = cl_tx_type;
            this.paymentTypeGroups = buildPaymentTypes(this.paymentEntries);
        }
        catch (error) {
            console.error('Failed to load payment setup entries', error);
            this.paymentEntries = { types: [], groups: [], methods: [] };
            this.paymentTypeGroups = {};
        }
        finally {
            this.isLoading = false;
        }
    }
    buildParams(payload) {
        const amount = payload.amount ?? 0;
        let credit = 0;
        let debit = 0;
        let payMethodCode = '';
        switch (payload.transactionType) {
            case enums.ClTxTypeCode.OpeningBalance:
            case enums.ClTxTypeCode.Adjustment:
                if (payload.entryType === 'CR')
                    credit = amount;
                else
                    debit = amount;
                break;
            case enums.ClTxTypeCode.Payment:
            case enums.ClTxTypeCode.CreditNote:
            case enums.ClTxTypeCode.Discount:
                credit = amount;
                break;
            case enums.ClTxTypeCode.StandardChargeDebit:
            case enums.ClTxTypeCode.DebitNote:
            case enums.ClTxTypeCode.CancellationPenalty:
                debit = amount;
                break;
        }
        if (payload.transactionType === enums.ClTxTypeCode.Payment) {
            payMethodCode = payload.payment_method?.code ?? '';
        }
        const noTaxTransaction = payload.transactionType === enums.ClTxTypeCode.OpeningBalance || payload.transactionType === enums.ClTxTypeCode.Payment;
        const hasVat = !noTaxTransaction && payload.taxId !== 'N/A';
        const typeLabel = this.clTxTypes.find(c => c.CODE_NAME === payload.transactionType)?.CODE_VALUE_EN ?? payload.transactionType;
        return {
            CL_TX_ID: this.transaction?.CL_TX_ID ?? -1,
            AGENCY_ID: this.agent.id,
            SERVICE_DATE: payload.date,
            CL_TX_TYPE_CODE: payload.transactionType,
            DESCRIPTION: payload.reference ? `${typeLabel}: ${payload.reference}` : typeLabel,
            DEBIT: debit,
            CREDIT: credit,
            CURRENCY_ID: calendarData.calendar_data?.property?.currency?.id,
            PAY_METHOD_CODE: payMethodCode,
            EXTERNAL_REF: payload.reference ?? '',
            BH_ID: this.booking?.system_id ?? null,
            VAT_INCLUDED_CODE: (noTaxTransaction ? '' : hasVat ? '001' : '002'),
            VAT_PCT: noTaxTransaction ? null : hasVat ? Number(payload.taxId) : 0,
        };
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const validation = irCityLedgerTransactionForm_schema.validateCityLedgerTransaction(this.formData);
        if (!validation.success) {
            this.transactionValidationFailed.emit(validation.error.issues);
            return;
        }
        try {
            this.isSubmitting = true;
            if (validation.data.transactionType === enums.ClTxTypeCode.CreditNote) {
                await this.cityLedgerService.voidInvoiceByCreditNote({
                    FD_ID: Number(validation.data.invoiceId),
                    VOID_DATE: validation.data.date,
                    REASON: validation.data.reference,
                });
            }
            else {
                const result = await this.cityLedgerService.issueManualCLTx(this.buildParams(validation.data));
                if (result?.My_Fd?.FD_TYPE_CODE && result.My_Fd.DOC_NUMBER) {
                    this.clFiscalDocumentPreview.emit({
                        fdTypeCode: result.My_Fd.FD_TYPE_CODE,
                        documentNumber: result.My_Fd.DOC_NUMBER,
                        agentId: this.agent.id,
                        agentName: result.My_Fd.AGENCY_NAME ?? '',
                        externalRef: result.My_Fd.EXTERNAL_REF,
                    });
                }
            }
            this.transactionSaved.emit();
        }
        catch (error) {
            console.error('Failed to save transaction', error);
        }
        finally {
            this.isSubmitting = false;
        }
    };
    renderTransactionTypeField() {
        return (index.h("div", { class: "transaction-form__field" }, index.h("ir-validator", { schema: irCityLedgerTransactionForm_schema.transactionTypeFieldSchema, value: this.formData.transactionType, valueEvent: "change" }, index.h("wa-select", { label: t.t('Lcz_TransactionType', { fallback: 'Transaction Type' }), size: "s", defaultValue: this.formData.transactionType, value: this.formData.transactionType, required: true, disabled: this.transaction !== null, onchange: event => {
                const value = event.target.value;
                this.handleTransactionTypeChange(value);
            } }, this.clTxTypes.map(type => {
            const rate = irCityLedgerTransactionForm_schema.TRANSACTION_TYPE_RATES[type.CODE_NAME];
            const label = type.CODE_VALUE_EN;
            if (enums.ClTxTypeCode.DebitNote === type.CODE_NAME ||
                enums.ClTxTypeCode.AdjustmentCredit === type.CODE_NAME ||
                (type.CODE_NAME === enums.ClTxTypeCode.OpeningBalance && (this.agent.has_opening_balance || this.booking !== null))) {
                return null;
            }
            if ([enums.ClTxTypeCode.Discount, enums.ClTxTypeCode.CancellationPenalty].includes(type.CODE_NAME) &&
                !this.booking &&
                this.transaction?.CL_TX_TYPE_CODE !== type.CODE_NAME) {
                return null;
            }
            return (index.h("wa-option", { key: type.CODE_NAME, value: type.CODE_NAME, label: label }, index.h("div", { class: "tx-option" }, index.h("span", { class: "tx-option__label" }, label), index.h("span", { class: "tx-option__badges" }, (rate === 'CR' || rate === 'CR|DB') && index.h("wa-badge", { variant: "success" }, t.t('Lcz_CreditColumn', { fallback: 'Credit' })), (rate === 'DB' || rate === 'CR|DB') && index.h("wa-badge", { variant: "danger" }, t.t('Lcz_DebitColumn', { fallback: 'Debit' }))))));
        })))));
    }
    renderCommonFields(withTaxes = true) {
        const minAllowedDate = moment.hooks().subtract(12, 'months').format(irCityLedgerTransactionForm_schema.DATE_INPUT_FORMAT);
        return (index.h(index.Fragment, null, this.renderTransactionTypeField(), index.h("div", { class: "transaction-form__field" }, index.h("ir-validator", { schema: irCityLedgerTransactionForm_schema.dateFieldSchema, value: this.formData.date, valueEvent: "DateChanged" }, index.h("ir-date-select", { label: t.t('Lcz_DateLabel', { fallback: 'Date' }), date: this.formData.date, minDate: minAllowedDate, maxDate: moment.hooks().format('YYYY-MM-DD'), emitEmptyDate: true, onDateChanged: event => {
                this.updateFormData({
                    date: event.detail.start ? event.detail.start.format(irCityLedgerTransactionForm_schema.DATE_INPUT_FORMAT) : '',
                });
            } }))), this.formData.transactionType !== enums.ClTxTypeCode.CreditNote && (index.h(index.Fragment, null, withTaxes ? (index.h("div", { class: "amount-tax-group" }, index.h("span", { class: "amount-tax-group__label" }, t.t('Lcz_AmountIncludingTaxes', { fallback: 'Amount (including taxes)' })), index.h("div", { class: "amount-tax-group__row" }, index.h("ir-validator", { class: "amount-tax-group__amount", schema: irCityLedgerTransactionForm_schema.amountFieldSchema, value: this.formData.amount, valueEvent: "text-change input-change" }, index.h("ir-input", { label: t.t('Lcz_AmountIncludingTaxes', { fallback: 'Amount (including taxes)' }), mask: "price", value: this.formData.amount, "onText-change": (event) => {
                this.updateFormData({ amount: event.detail ?? '' });
            } }, index.h("span", { slot: "start" }, calendarData.calendar_data.property?.currency?.symbol))), index.h("ir-validator", { schema: irCityLedgerTransactionForm_schema.taxIdFieldSchema, value: this.formData.taxId, valueEvent: "change" }, index.h("wa-select", { size: "s", placeholder: t.t('Lcz_TaxPlaceholder', { fallback: 'Tax' }), value: this.formData.taxId, defaultValue: this.formData.taxId, onchange: event => {
                this.updateFormData({ taxId: event.target.value });
            } }, this.taxOptions
            .filter(tx => tx.id !== enums.ClTxTypeCode.DebitNote)
            .map(tax => (index.h("wa-option", { key: tax.id, label: tax.label, value: tax.id }, tax.label))), index.h("wa-option", { value: "N/A", label: t.t('Lcz_NotApplicable', { fallback: 'Not Applicable' }) }, "Not Applicable")))))) : (index.h("div", { class: "transaction-form__field" }, index.h("ir-validator", { schema: irCityLedgerTransactionForm_schema.amountFieldSchema, value: this.formData.amount, valueEvent: "text-change input-change" }, index.h("ir-input", { label: t.t('Lcz_Amount', { fallback: 'Amount' }), mask: "price", value: this.formData.amount, required: true, "onText-change": (event) => {
                this.updateFormData({ amount: event.detail ?? '' });
            } }, index.h("span", { slot: "start" }, calendarData.calendar_data.property?.currency?.symbol)))))))));
    }
    renderTypeFields() {
        const onFieldChange = (e) => this.updateFormData(e.detail);
        switch (this.formData.transactionType) {
            case enums.ClTxTypeCode.OpeningBalance:
                return index.h("ir-cl-opening-balance-fields", { entryType: this.formData.entryType, onFieldChange: onFieldChange });
            case enums.ClTxTypeCode.Payment:
                return (index.h("ir-cl-payment-fields", { paymentMethodCode: this.formData.payment_method?.code ?? '', isOnAccount: this.formData.onAccount, invoiceId: this.formData.invoiceId, paymentMethods: this.paymentEntries?.methods ?? [], unpaidInvoiceOptions: this.unpaidInvoiceOptions, noInvoices: this.fiscalDocuments.length === 0, language: this.language, onFieldChange: onFieldChange }));
            case enums.ClTxTypeCode.Adjustment:
                return (index.h("ir-cl-adjustment-fields", { entryType: this.formData.entryType, linkType: this.formData.linkType, linkedId: this.formData.linkedId, bookingOptions: this.bookingOptions, unpaidInvoiceOptions: this.unpaidInvoiceOptions, onFieldChange: onFieldChange }));
            case enums.ClTxTypeCode.CreditNote:
                return (index.h("ir-cl-credit-note-fields", { creditNoteMode: this.formData.creditNoteMode, invoiceId: this.formData.invoiceId, fiscalDocuments: this.fiscalDocuments, isFetchingFiscalDocs: this.isLoading, onFieldChange: onFieldChange }));
            case enums.ClTxTypeCode.DebitNote:
                return index.h("ir-cl-debit-note-fields", { invoiceId: this.formData.invoiceId, fiscalDocuments: this.fiscalDocuments, onFieldChange: onFieldChange });
            default:
                return null;
        }
    }
    render() {
        if (this.isLoading) {
            return (index.h("div", { class: "dialog__loader-container" }, index.h("ir-spinner", null)));
        }
        if (this.isSubmitDisabled) {
            return (index.h("form", { id: this.formId, class: "transaction-form", onSubmit: this.handleSubmit, novalidate: true }, this.renderTransactionTypeField(), this.renderTypeFields()));
        }
        return (index.h("form", { id: this.formId, class: "transaction-form", onSubmit: this.handleSubmit, novalidate: true }, this.renderCommonFields(this.formData.transactionType !== enums.ClTxTypeCode.OpeningBalance &&
            ![enums.ClTxTypeCode.Payment, enums.ClTxTypeCode.Discount, enums.ClTxTypeCode.CancellationPenalty].includes(this.formData.transactionType)), this.renderTypeFields(), this.formData.transactionType !== enums.ClTxTypeCode.CreditNote && (index.h("ir-input", { label: t.t('Lcz_Reference', { fallback: 'Reference' }), value: this.formData.reference, defaultValue: this.formData.reference, "onText-change": (event) => {
                this.updateFormData({ reference: event.detail ?? '' });
            } }))));
    }
    static get watchers() { return {
        "transaction": [{
                "handleTransactionChange": 0
            }],
        "initialTransactionType": [{
                "handleInitialTransactionTypeChange": 0
            }]
    }; }
};
IrCityLedgerTransactionForm.style = irCityLedgerTransactionFormCss();

const irClAdjustmentFieldsCss = () => `.sc-ir-cl-adjustment-fields-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-adjustment-fields{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-adjustment-fields,.field--full-width.sc-ir-cl-adjustment-fields wa-radio-group.sc-ir-cl-adjustment-fields{width:100%}.field--full-width.sc-ir-cl-adjustment-fields wa-radio-group.sc-ir-cl-adjustment-fields wa-radio.sc-ir-cl-adjustment-fields{flex:1}.entry-type.--credit.sc-ir-cl-adjustment-fields:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-adjustment-fields:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}`;

const IrClAdjustmentFields = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fieldChange = index.createEvent(this, "fieldChange");
    }
    entryType = '';
    linkType = 'NONE';
    linkedId;
    bookingOptions = [];
    unpaidInvoiceOptions = [];
    fieldChange;
    // private get linkedIdOptions(): LinkedOption[] {
    //   if (this.linkType === 'BOOKING') return this.bookingOptions;
    //   if (this.linkType === 'INVOICE') return this.unpaidInvoiceOptions;
    //   return [];
    // }
    render() {
        return (index.h(index.Fragment, { key: '4887ac36383561c964723b5291076eca171d18d3' }, index.h("div", { key: '5e03a04b9aa78c60f9bb06df6761bc1b9047f827', class: "field field--full-width" }, index.h("ir-validator", { key: '2cc288da09000e0e30810f33d24f6d9bbbad1dfe', schema: irCityLedgerTransactionForm_schema.entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, index.h("wa-radio-group", { key: '6028c8a58b3e0a95b7fdd4499ab64aac3ca8cf7f', label: t.t('Lcz_EntryType', { fallback: 'Entry Type' }), orientation: "horizontal", size: "s", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, index.h("wa-radio", { key: 'cc73e61bcc8c094489ceeb14353a064aa362ede7', value: "CR", appearance: "button", class: "entry-type --credit" }, t.t('Lcz_CreditColumn', { fallback: 'Credit' })), index.h("wa-radio", { key: '1c5b7503b8f9c1bc317b74d199475e196c08fa2b', value: "DB", appearance: "button", class: "entry-type --debit" }, t.t('Lcz_DebitColumn', { fallback: 'Debit' })))))));
    }
};
IrClAdjustmentFields.style = irClAdjustmentFieldsCss();

const irClCreditNoteFieldsCss = () => `.sc-ir-cl-credit-note-fields-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-credit-note-fields{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-credit-note-fields,.field--full-width.sc-ir-cl-credit-note-fields wa-radio-group.sc-ir-cl-credit-note-fields{width:100%}.field--full-width.sc-ir-cl-credit-note-fields wa-radio-group.sc-ir-cl-credit-note-fields wa-radio.sc-ir-cl-credit-note-fields{flex:1}.entry-type.--credit.sc-ir-cl-credit-note-fields:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-credit-note-fields:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}`;

const IrClCreditNoteFields = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fieldChange = index.createEvent(this, "fieldChange");
    }
    creditNoteMode = 'cancel-invoice';
    invoiceId;
    fiscalDocuments = [];
    isFetchingFiscalDocs = false;
    fieldChange;
    render() {
        // const noInvoices = this.fiscalDocuments.length === 0;
        return (index.h(index.Fragment, { key: 'e07db62007adb3fd4339f200c660d750f69a2aec' }, this.creditNoteMode === 'cancel-invoice' && (index.h("div", { key: '2ae353445e00e93741e4426ecd125f5e09a7a572', class: "field" }, index.h("ir-cl-invoice-select", { key: '1e57fa27db9f43265401239471c7d3dd34d75b11', value: this.invoiceId ?? '', fiscalDocuments: this.fiscalDocuments, label: t.t('Lcz_DocumentTypeInvoice', { fallback: 'Invoice' }), onInvoiceChange: event => {
                this.fieldChange.emit({ invoiceId: event.detail || undefined });
            }, hint: t.t('Lcz_IssueCreditNoteVoidHint', { fallback: 'Issuing this credit note will void the selected invoice and unlock all associated line items.' }) })))));
    }
};
IrClCreditNoteFields.style = irClCreditNoteFieldsCss();

const irClDebitNoteFieldsCss = () => `.sc-ir-cl-debit-note-fields-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-debit-note-fields{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-debit-note-fields,.field--full-width.sc-ir-cl-debit-note-fields wa-radio-group.sc-ir-cl-debit-note-fields{width:100%}.field--full-width.sc-ir-cl-debit-note-fields wa-radio-group.sc-ir-cl-debit-note-fields wa-radio.sc-ir-cl-debit-note-fields{flex:1}.entry-type.--credit.sc-ir-cl-debit-note-fields:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-debit-note-fields:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}`;

const IrClDebitNoteFields = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fieldChange = index.createEvent(this, "fieldChange");
    }
    invoiceId;
    fiscalDocuments = [];
    fieldChange;
    render() {
        if (this.fiscalDocuments.length === 0) {
            return (index.h("wa-callout", { size: "s", variant: "warning" }, index.h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), t.t('Lcz_NoPaidInvoicesWarning', {
                fallback: 'No paid invoices are available. A debit note requires at least one paid invoice to reference. Please issue an invoice first, then return to create the debit note.',
            })));
        }
        return (index.h("div", { class: "field" }, index.h("ir-cl-invoice-select", { value: this.invoiceId ?? '', fiscalDocuments: this.fiscalDocuments, label: t.t('Lcz_DocumentTypeInvoice', { fallback: 'Invoice' }), onInvoiceChange: event => {
                this.fieldChange.emit({ invoiceId: event.detail || undefined });
            } })));
    }
};
IrClDebitNoteFields.style = irClDebitNoteFieldsCss();

const irClInvoiceDialogCss = () => `.sc-ir-cl-invoice-dialog-h{display:contents}.create-invoice-dialog__body.sc-ir-cl-invoice-dialog{display:flex;flex-direction:column;gap:0.75rem}.cl-invoice-dialog__header-actions.sc-ir-cl-invoice-dialog{display:flex;align-items:center}.create-invoice-dialog__no-results.sc-ir-cl-invoice-dialog{margin:0}.create-invoice-dialog__error.sc-ir-cl-invoice-dialog{margin:0;font-size:0.8125rem;color:var(--wa-color-danger-500, #ef4444)}.create-invoice-dialog__footer.sc-ir-cl-invoice-dialog{display:flex;justify-content:flex-end;gap:0.5rem}`;

const IrClInvoiceDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.invoiceIssued = index.createEvent(this, "invoiceIssued");
        this.fiscalDocumentIssued = index.createEvent(this, "fiscalDocumentIssued");
        this.clFiscalDocumentPreview = index.createEvent(this, "clFiscalDocumentPreview");
    }
    agentId = null;
    mode = 'default';
    booking;
    startDate = null;
    endDate = null;
    currencyId = null;
    isLoading = false;
    error = null;
    noResults = false;
    isProforma = false;
    /**
     * Determines whether a final (non-proforma) invoice can be issued, based on
     * whether every room in the booking has effectively been checked out.
     *
     * Resolution order:
     * 1. When not in `booking` mode, or the booking has no rooms, there is nothing
     *    blocking a final invoice — returns `true`.
     * 2. When today is on or before the booking's to-date and at least one room is
     *    still checked in, the stay is ongoing — returns `false`.
     * 3. When today is exactly the booking's to-date and no room has been set
     *    (all rooms are `NotSet`), the invoice is allowed — returns `true`.
     * 4. Otherwise falls back to the default rule: `true` once today is past the
     *    booking's to-date, else `true` only when every room is checked out.
     *
     * @returns `true` when all rooms are considered checked out and a final invoice may be issued.
     */
    get allRoomsCheckedOut() {
        if (this.mode !== 'booking' || !this.booking.rooms.length)
            return true;
        const today = moment.hooks();
        const bookingToDate = moment.hooks(this.booking.to_date, 'YYYY-MM-DD');
        if (today.isSameOrBefore(bookingToDate, 'date') && this.booking.rooms.some(r => r.in_out?.code === enums.InOut.CheckedIn))
            return false;
        if (today.isSame(bookingToDate, 'date') && this.booking.rooms.every(r => r.in_out?.code === enums.InOut.NotSet))
            return true;
        if (today.isAfter(bookingToDate, 'date'))
            return true;
        return this.booking.rooms.every(r => r.in_out?.code === enums.InOut.CheckedOut);
    }
    invoiceIssued;
    fiscalDocumentIssued;
    clFiscalDocumentPreview;
    dialogRef;
    formRef;
    invoicedClTxTypeCode = new Set([enums.ClTxTypeCode.Adjustment, enums.ClTxTypeCode.CancellationPenalty, enums.ClTxTypeCode.Discount, enums.ClTxTypeCode.StandardChargeDebit]);
    cityLedgerService = new index$1.CityLedgerService();
    async openModal() {
        this.error = null;
        this.noResults = false;
        this.isProforma = !this.allRoomsCheckedOut;
        this.dialogRef.openModal();
    }
    async closeModal() {
        this.dialogRef.closeModal();
    }
    async handleSubmit() {
        this.isLoading = true;
        this.error = null;
        this.noResults = false;
        try {
            if (this.isProforma) {
                await this.handleProforma();
                return;
            }
            if (this.mode === 'booking') {
                const result = await this.cityLedgerService.issueFiscalDocument({
                    AGENCY_ID: this.agentId,
                    CURRENCY_ID: this.currencyId,
                    START_DATE: this.startDate,
                    END_DATE: this.endDate,
                    BOOKING_NBR: this.booking?.booking_nbr,
                    FD_TYPE_CODE: enums.FdTypes.Draft,
                });
                const doc = result;
                this.clFiscalDocumentPreview.emit({
                    fdTypeCode: doc.FD_TYPE_CODE,
                    documentNumber: doc.DOC_NUMBER,
                    agentId: doc.AGENCY_ID ?? this.agentId,
                    agentName: doc.AGENCY_NAME,
                    fdId: doc.FD_ID,
                    externalRef: doc.EXTERNAL_REF,
                });
                this.invoiceIssued.emit(result);
                this.fiscalDocumentIssued.emit();
                this.dialogRef.closeModal();
            }
            else {
                const isValid = await this.formRef.validate();
                if (!isValid) {
                    this.isLoading = false;
                    return;
                }
                const { fromDate, toDate, is_checked_out_only } = await this.formRef.getValues();
                const clResult = await this.cityLedgerService.fetchCL({
                    AGENCY_ID: this.agentId,
                    START_DATE: fromDate,
                    END_DATE: toDate,
                    START_ROW: 1,
                    END_ROW: 999999,
                    IS_CHECKED_OUT_ONLY: is_checked_out_only,
                    IS_HOLD: false,
                    IS_LOCKED: false,
                });
                // const targetCategories = [SvcCategory.Accommodation, 'TRF', 'GEN'];
                // const listClTxIds = [...new Set(clResult.My_Cl_tx.filter(tx => targetCategories.includes(tx.CATEGORY) && !tx.DOC_NUMBER).map(tx => tx.CL_TX_ID))];
                if (!clResult.My_Cl_tx?.length) {
                    this.noResults = true;
                    return;
                }
                const listClTxIds = [
                    ...new Set(clResult.My_Cl_tx.map(tx => {
                        if (this.invoicedClTxTypeCode.has(tx.CL_TX_TYPE_CODE)) {
                            return tx.CL_TX_ID;
                        }
                        return null;
                    }).filter(Boolean)),
                ];
                const result = await this.cityLedgerService.issueFiscalDocument({
                    AGENCY_ID: this.agentId,
                    CURRENCY_ID: calendarData.calendar_data?.property?.currency?.id,
                    START_DATE: fromDate,
                    END_DATE: toDate,
                    LIST_CL_TX_ID: listClTxIds,
                    FD_TYPE_CODE: enums.FdTypes.Draft,
                });
                const doc = result;
                this.clFiscalDocumentPreview.emit({
                    fdTypeCode: doc.FD_TYPE_CODE,
                    documentNumber: doc.DOC_NUMBER,
                    agentId: doc.AGENCY_ID ?? this.agentId,
                    agentName: doc.AGENCY_NAME,
                    fdId: doc.FD_ID,
                    externalRef: doc.EXTERNAL_REF,
                });
                this.invoiceIssued.emit(doc);
                this.fiscalDocumentIssued.emit();
                this.dialogRef.closeModal();
            }
        }
        catch (err) {
            this.error = err instanceof Error ? err.message : t.t('Lcz_FailedToIssueInvoice', { fallback: 'Failed to issue invoice.' });
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleProforma() {
        try {
            let fromDate;
            let toDate;
            let bookingNbr = null;
            if (this.mode === 'booking') {
                fromDate = this.startDate;
                toDate = this.endDate;
                bookingNbr = this.booking != null ? String(this.booking.booking_nbr) : null;
            }
            else {
                const isValid = await this.formRef.validate();
                if (!isValid) {
                    this.isLoading = false;
                    return;
                }
                const values = await this.formRef.getValues();
                fromDate = values.fromDate;
                toDate = values.toDate;
            }
            const url = await this.cityLedgerService.printClProforma({
                agency_id: String(this.agentId),
                from_date: fromDate,
                to_date: toDate,
                booking_nbr: bookingNbr,
            });
            this.fiscalDocumentIssued.emit();
            if (url) {
                this.clFiscalDocumentPreview.emit({
                    fdTypeCode: enums.FdTypes.Proforma,
                    documentNumber: '',
                    agentId: this.agentId,
                    agentName: '',
                    externalRef: '',
                    url,
                });
            }
            this.dialogRef.closeModal();
        }
        catch (err) {
            this.error = err instanceof Error ? err.message : t.t('Lcz_FailedToGenerateProforma', { fallback: 'Failed to generate proforma.' });
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        const units = this.booking ? this.booking?.rooms.filter(r => r.agent && r.in_out?.code !== enums.InOut.CheckedOut).map(r => r.unit.name) : null;
        return (index.h(index.Host, { key: 'ee1003110448e3525743997a6988582c0230c9b5' }, index.h("ir-dialog", { key: '4820d108cd3be4455b2c37a221462a5054369e7f', label: t.t('Lcz_CreateInvoice', { fallback: 'Create Invoice' }), ref: el => (this.dialogRef = el) }, this.booking && (index.h("div", { key: '2f170ce72d8e4fb3ab19a8648199f3d1dc6e3965', slot: "header-actions", class: 'cl-invoice-dialog__header-actions' }, index.h("wa-switch", { key: '71cc2a640474b3284d2d1595c42f628e702f7ea0', checked: this.isProforma, disabled: this.mode === 'booking' && !this.allRoomsCheckedOut, onchange: e => (this.isProforma = e.target.checked) }, t.t('Lcz_Proforma', { fallback: 'Proforma' })))), index.h("div", { key: 'f51a3f0d6a799aaf2390fe0dba34bdf466073461', class: "create-invoice-dialog__body" }, this.mode === 'booking' ? (!this.allRoomsCheckedOut ? (index.h("wa-callout", { size: "s", variant: "warning" }, index.h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), t.t('Lcz_ProformaOnlyInHouseWarning', {
            fallback: 'Only a proforma invoice can be generated at this time because %1 is/are still in-house.',
            params: [`${units?.length > 1 ? 'units' : 'unit'} ${units?.join(', ')}`],
        }))) : (index.h("p", { class: "create-invoice-dialog__message" }, this.isProforma
            ? t.t('Lcz_GenerateProformaConfirm', { fallback: 'Generate a proforma for Booking #%1?', params: [number.formatBookingNumber(this.booking?.booking_nbr)] })
            : t.t('Lcz_IssueDraftInvoiceConfirm', {
                fallback: 'Issue a draft invoice for Booking #%1 to the agent?',
                params: [number.formatBookingNumber(this.booking?.booking_nbr)],
            })))) : (index.h("ir-cl-invoice-form", { ref: el => (this.formRef = el) })), this.noResults && (index.h("wa-callout", { key: 'f37402f446c75ef6acc6aa5653bdd1b20a32cd75', variant: "warning", class: "create-invoice-dialog__no-results" }, index.h("wa-icon", { key: '8df2ac647f6050aeb64cd559f5e59aea7b816fd5', slot: "icon", name: "triangle-exclamation" }), t.t('Lcz_NoTransactionsFoundForPeriod', { fallback: 'No transactions found for the selected period and filters.' }))), this.error && index.h("p", { key: 'b2ff9c205d948bdf0a0dc924b5c9474a0cdc3bef', class: "create-invoice-dialog__error" }, this.error)), index.h("div", { key: 'd62cff1f4e7e7a324a151d4c4544cd3e86b15089', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: 'ecd9ff14e05d6b3a40e1aa40b0a3b4db0cbc81a6', size: "m", appearance: "filled", variant: "neutral", "data-dialog": "close", disabled: this.isLoading }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '62d23802dfaf03e878c48c2f92c2beef578dde45', size: "m", appearance: "accent", variant: "brand", loading: this.isLoading, onClickHandler: () => this.handleSubmit() }, this.isProforma ? t.t('Lcz_Confirm', { fallback: 'Confirm' }) : t.t('Lcz_ShowDraft', { fallback: 'Show draft' }))))));
    }
};
IrClInvoiceDialog.style = irClInvoiceDialogCss();

const irClInvoiceFormCss = () => `.sc-ir-cl-invoice-form-h{display:flex;flex-direction:column;gap:1.25rem}.invoice-form__scope-banner.sc-ir-cl-invoice-form{display:flex;align-items:flex-start;gap:0.625rem;padding:0.75rem 1rem;background:var(--wa-color-primary-50, #eff6ff);border:1px solid var(--wa-color-primary-200, #bfdbfe);border-inline-start:3px solid var(--wa-color-primary-500, #3b82f6);border-radius:0.375rem}.invoice-form__scope-icon.sc-ir-cl-invoice-form{flex-shrink:0;margin-top:1px;color:var(--wa-color-primary-500, #3b82f6)}.invoice-form__scope-text.sc-ir-cl-invoice-form{display:flex;flex-direction:column;gap:0.125rem}.invoice-form__scope-label.sc-ir-cl-invoice-form{font-size:0.8125rem;font-weight:600;color:var(--wa-color-primary-700, #1d4ed8);letter-spacing:0.01em}.invoice-form__scope-desc.sc-ir-cl-invoice-form{font-size:0.75rem;color:var(--wa-color-primary-600, #2563eb);line-height:1.4}.invoice-form__date-error.sc-ir-cl-invoice-form ir-date-range-filter.sc-ir-cl-invoice-form{border:1px solid var(--wa-color-danger-500, #ef4444);border-radius:0.375rem}.invoice-form__date-error-msg.sc-ir-cl-invoice-form{margin:0;font-size:0.75rem;color:var(--wa-color-danger-600, #dc2626)}.invoice-form__field.sc-ir-cl-invoice-form{display:flex;flex-direction:column;gap:0.375rem}.invoice-form__label.sc-ir-cl-invoice-form{margin:0;font-size:0.8125rem;font-weight:500;color:var(--wa-color-text-normal, #374151)}.invoice-form__label-optional.sc-ir-cl-invoice-form{font-weight:400;color:var(--wa-color-text-quiet, #9ca3af)}.invoice-form__hint.sc-ir-cl-invoice-form{margin:0;font-size:0.75rem;color:var(--wa-color-text-quiet, #9ca3af);line-height:1.4}`;

const IrClInvoiceForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    fromDate = '';
    toDate = '';
    scope = 'UNBILLED_CHECKED_OUT';
    dateError = false;
    onDateChange() {
        if (this.fromDate && this.toDate) {
            this.dateError = false;
        }
    }
    async validate() {
        if (!this.fromDate || !this.toDate) {
            this.dateError = true;
            return false;
        }
        this.dateError = false;
        return true;
    }
    async getValues() {
        return { fromDate: this.fromDate, toDate: this.toDate, scope: this.scope, is_checked_out_only: this.scope === 'UNBILLED_CHECKED_OUT' };
    }
    render() {
        return (index.h(index.Host, { key: 'a3087ebc279ae4a9e8fa6ddabd61fae28e75f420' }, index.h("wa-callout", { key: '9a2caef888efcbe5b9b45008ed89a3028878c0fa' }, index.h("wa-icon", { key: '9be605df408b47908c8eaafac0428e3730167cd4', slot: "icon", name: "circle-info" }), index.h("div", { key: 'f250ade46bf8d86dac721f03925324d9dd9cdb08', class: "invoice-form__scope-text" }, index.h("span", { key: '9b9cd6827045fd3be198e5af865a32044e3cddd3', class: "invoice-form__scope-label" }, t.t('Lcz_UnbilledFolioEntries', { fallback: 'Unbilled Folio Entries' })), index.h("span", { key: '028c62fd0f1f2b79de557ab15866bb90843bca6c', class: "invoice-form__scope-desc" }, t.t('Lcz_UnbilledFolioEntriesDesc', { fallback: 'Including all services from bookings, manual charges, adjustments and discounts.' })))), index.h("div", { key: 'd43ac30bac3bad7159eb2f80b3b74d2f72b846c1', class: `invoice-form__field${this.dateError ? ' invoice-form__date-error' : ''}` }, index.h("ir-date-range-filter", { key: '97ec1721500b9889cdcab74cd5b61c944f95413f', selectionMode: "auto", showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate, toDate: this.toDate, maxDate: moment.hooks().format('YYYY-MM-DD'), onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), index.h("div", { key: 'fc749c414ce1dafdf6a6eea470bb7f8458100f04', class: "invoice-form__field" }, index.h("wa-checkbox", { key: 'f811857aa6e6e566fb241f52b71a80129dffeaee', checked: this.scope === 'UNBILLED_CHECKED_OUT', defaultChecked: this.scope === 'UNBILLED_CHECKED_OUT', onchange: e => {
                this.scope = e.target.checked ? 'UNBILLED_CHECKED_OUT' : 'UNBILLED';
            } }, t.t('Lcz_IncludeCheckedOutOnly', { fallback: 'Include checked-out bookings only' })))));
    }
    static get watchers() { return {
        "fromDate": [{
                "onDateChange": 0
            }],
        "toDate": [{
                "onDateChange": 0
            }]
    }; }
};
IrClInvoiceForm.style = irClInvoiceFormCss();

const irClOpeningBalanceFieldsCss = () => `.sc-ir-cl-opening-balance-fields-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-opening-balance-fields{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-opening-balance-fields,.field--full-width.sc-ir-cl-opening-balance-fields wa-radio-group.sc-ir-cl-opening-balance-fields{width:100%}.field--full-width.sc-ir-cl-opening-balance-fields wa-radio-group.sc-ir-cl-opening-balance-fields wa-radio.sc-ir-cl-opening-balance-fields{flex:1}.entry-type.--credit.sc-ir-cl-opening-balance-fields:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-opening-balance-fields:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}`;

const IrClOpeningBalanceFields = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fieldChange = index.createEvent(this, "fieldChange");
    }
    entryType = '';
    fieldChange;
    render() {
        return (index.h("div", { key: '57de05025b71b24b5d0a62d6bb46f9bd154d7ddc', class: "field field--full-width" }, index.h("ir-validator", { key: '3f0d65dedfdfb6551e7c8ab8e7be04f3ef56b949', schema: irCityLedgerTransactionForm_schema.entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, index.h("wa-radio-group", { key: 'c7f6ba79519ca8c53fbaee346690e2326c501645', label: t.t('Lcz_EntryType', { fallback: 'Entry Type' }), orientation: "horizontal", size: "s", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, index.h("wa-radio", { key: 'ffe90cbd2a05f0d7fff6908b615cf5cbf2469ac3', value: "CR", appearance: "button", class: "entry-type --credit" }, t.t('Lcz_CreditColumn', { fallback: 'Credit' })), index.h("wa-radio", { key: '4f726937b15ec0f0734d14fc1b9d870fb1a82539', value: "DB", appearance: "button", class: "entry-type --debit" }, t.t('Lcz_DebitColumn', { fallback: 'Debit' }))))));
    }
};
IrClOpeningBalanceFields.style = irClOpeningBalanceFieldsCss();

const irClPaymentFieldsCss = () => `.sc-ir-cl-payment-fields-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-payment-fields{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-payment-fields,.field--full-width.sc-ir-cl-payment-fields wa-radio-group.sc-ir-cl-payment-fields{width:100%}.field--full-width.sc-ir-cl-payment-fields wa-radio-group.sc-ir-cl-payment-fields wa-radio.sc-ir-cl-payment-fields{flex:1}.entry-type.--credit.sc-ir-cl-payment-fields:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-payment-fields:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.payment-section.sc-ir-cl-payment-fields{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.payment-section.sc-ir-cl-payment-fields wa-radio-group.sc-ir-cl-payment-fields{width:100%}.payment-section.sc-ir-cl-payment-fields wa-radio-group.sc-ir-cl-payment-fields wa-radio.sc-ir-cl-payment-fields{flex:1}.invoice-select.sc-ir-cl-payment-fields{animation:slide-in 0.18s ease}`;

const IrClPaymentFields = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fieldChange = index.createEvent(this, "fieldChange");
    }
    paymentMethodCode = '';
    isOnAccount = false;
    invoiceId;
    paymentMethods = [];
    unpaidInvoiceOptions = [];
    noInvoices = false;
    language = 'en';
    fieldChange;
    stopPropagation(event) {
        event.stopImmediatePropagation();
    }
    handlePaymentMethodChange(value) {
        const method = this.paymentMethods?.find(pm => pm.CODE_NAME === value);
        if (!method) {
            this.fieldChange.emit({ payment_method: null });
            return;
        }
        const payment_method = {
            code: method.CODE_NAME,
            description: method.CODE_VALUE_EN,
            operation: method.NOTES,
        };
        this.fieldChange.emit({ payment_method });
    }
    render() {
        return (index.h(index.Fragment, { key: 'f6b4a63e1c7b2d603bd391b1148837c7886e6e77' }, index.h("div", { key: 'ae37ce1dd8c8199881cf8a5ba347025c3f83f918', class: "payment-section" }, index.h("div", { key: 'cad115f92d3ba03136f0969f4b295a4eb2b845cd', class: "field" }, index.h("ir-validator", { key: 'b5cd8f044102ee4a7a8d74e43d37a482bba245a9', schema: irCityLedgerTransactionForm_schema.paymentMethodCodeFieldSchema, value: this.paymentMethodCode, valueEvent: "change" }, index.h("wa-select", { key: '2231c8a6520d6fa8633abde8b64b17307490045d', size: "s", label: t.t('Lcz_PaymentMethod', { fallback: 'Payment Method' }), placeholder: t.t('Lcz_SelectMethodPlaceholder', { fallback: 'Select method…' }), value: this.paymentMethodCode, "onwa-show": e => this.stopPropagation(e), "onwa-hide": e => this.stopPropagation(e), onchange: e => {
                this.stopPropagation(e);
                this.handlePaymentMethodChange(e.target.value);
            } }, index.h("wa-option", { key: '1af90a4cf6dc48f9669cf875b04f1b9a6edcabb5', value: "" }, t.t('Lcz_SelectMethodPlaceholder', { fallback: 'Select method…' })), this.paymentMethods.map(method => (index.h("wa-option", { key: method.CODE_NAME, label: method.CODE_VALUE_EN, value: method.CODE_NAME }, utils$1.getEntryValue({ entry: method, language: locale_controller.LocaleController.language }))))))))));
    }
};
IrClPaymentFields.style = irClPaymentFieldsCss();

const irDepartureTimeDialogCss = () => `.sc-ir-departure-time-dialog-h{display:block}.ir-time-dialog__current-unit.sc-ir-departure-time-dialog{display:flex;align-items:center;gap:var(--wa-space-xs)}.ir-time-dialog__insight.sc-ir-departure-time-dialog{padding:0.75rem 0.875rem;border-radius:0.75rem;background:var(--wa-color-brand-fill-quiet);border:1px solid var(--wa-color-brand-border-quiet);display:flex;flex-direction:column;gap:0.75rem}.ir-time-dialog__body.sc-ir-departure-time-dialog{display:flex;flex-direction:column;gap:var(--wa-space-m)}.ir-time-dialog__insight-row.sc-ir-departure-time-dialog{display:flex;align-items:flex-start;gap:0.625rem}.ir-time-dialog__insight-icon.sc-ir-departure-time-dialog{flex:0 0 auto;margin-top:0.15rem;font-size:0.9rem;color:var(--wa-color-brand-on-quiet)}.ir-time-dialog__insight-copy.sc-ir-departure-time-dialog{flex:1 1 auto;min-width:0}.ir-time-dialog__insight-title.sc-ir-departure-time-dialog{margin:0;font-size:0.8125rem;font-weight:600;letter-spacing:-0.01em;color:var(--wa-color-text-normal)}.ir-time-dialog__insight-subtitle.sc-ir-departure-time-dialog{margin:0.125rem 0 0;font-size:0.75rem;line-height:1.4;color:var(--wa-color-text-quiet)}.ir-time-dialog__insight-row.sc-ir-departure-time-dialog wa-switch.sc-ir-departure-time-dialog{flex:0 0 auto;margin-top:0.1rem}`;

/** Service category code for a late-checkout extra service charge. */
const LATE_CHECKOUT_CATEGORY_CODE = 'LCO';
const IrDepartureTimeDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.departureTimeClose = index.createEvent(this, "departureTimeClose");
    }
    /** Room whose expected departure time is being changed. */
    room;
    /** Needed to look up whether this room already has a late-checkout extra service charge. */
    booking;
    /** Controls dialog visibility. */
    open;
    property_id;
    departureTime = [];
    language = 'en';
    /** Needed to create a late-checkout extra service charge alongside the departure time. */
    booking_nbr;
    currency_id;
    currencySymbol;
    selectedValue = null;
    isLoading = false;
    createExtraService = true;
    extraServicePrice = null;
    /**
     * Fired when the dialog closes.
     * `saved: true` → departure time was persisted; `saved: false` → user cancelled.
     */
    departureTimeClose;
    bookingService = new booking_service.BookingService();
    dialogRef;
    closedBySave = false;
    handleOpenChange(next) {
        if (next) {
            this.selectedValue = this.room?.departure_time?.code ?? null;
            const existing = this.existingLateCheckoutService;
            this.extraServicePrice = existing ? existing.price : Number(calendarData.getExtraServiceDefaultPrice('LCO'));
        }
    }
    /** The room's already-persisted late-checkout extra service charge, if any — its price becomes the field's default instead of the property's generic default. */
    get existingLateCheckoutService() {
        return (this.booking?.extra_services ?? []).find(service => service.room_identifier === this.room?.identifier && service.category?.code === LATE_CHECKOUT_CATEGORY_CODE);
    }
    /** Whether a departure-time option (e.g. "14:00") falls after the property's standard checkout time, in hotel-local time. */
    isLateCheckout(entry) {
        const match = entry.CODE_VALUE_EN?.match(/^(\d{1,2}):(\d{2})$/);
        const checkoutHours = calendarData.calendar_data.checkin_checkout_hours;
        if (!match || !checkoutHours)
            return false;
        const [, hour, minute] = match;
        const optionTime = booking.createDateWithOffsetAndHour(checkoutHours.offset, Number(hour), Number(minute));
        const checkoutTime = booking.createDateWithOffsetAndHour(checkoutHours.offset, checkoutHours.hour, checkoutHours.minute);
        return optionTime.getTime() > checkoutTime.getTime();
    }
    /** Whether the currently selected departure time is a late checkout. */
    get selectedIsLateCheckout() {
        const entry = this.departureTime?.find(dt => dt.CODE_NAME === this.selectedValue);
        return entry ? this.isLateCheckout(entry) : false;
    }
    async handleConfirm(e) {
        e.stopImmediatePropagation();
        if (!this.selectedValue)
            return;
        try {
            this.isLoading = true;
            await this.bookingService.setDepartureTime({
                property_id: this.property_id,
                code: this.selectedValue,
                room_identifier: this.room.identifier,
            });
            const existing = this.existingLateCheckoutService;
            if (this.selectedIsLateCheckout && this.createExtraService) {
                if (this.extraServicePrice) {
                    await this.bookingService.doBookingExtraService({
                        booking_nbr: this.booking_nbr,
                        is_remove: false,
                        service: {
                            ...existing,
                            category: { code: LATE_CHECKOUT_CATEGORY_CODE },
                            price: this.extraServicePrice,
                            cost: null,
                            currency_id: this.currency_id,
                            room_identifier: this.room.identifier,
                            start_date: this.room.to_date,
                            end_date: null,
                            description: null,
                            agent: existing?.agent ?? null,
                        },
                    });
                }
                else if (existing) {
                    // Price cleared/zeroed on an existing charge — treat as removing the late-checkout extra service.
                    await this.bookingService.doBookingExtraService({
                        booking_nbr: this.booking_nbr,
                        is_remove: true,
                        service: existing,
                    });
                }
            }
            this.closedBySave = true;
            this.dialogRef?.closeModal();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (index.h("ir-dialog", { key: '133b84b24011f341da3c99cba029fbd32e370bf9', open: this.open, label: t.t('Lcz_ExpectedDepartureTimeDialogTitle', { fallback: 'Expected Departure Time' }), ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.preventDefault();
                const saved = this.closedBySave;
                this.departureTimeClose.emit({ saved });
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closedBySave = false;
                this.selectedValue = null;
                this.createExtraService = true;
                this.extraServicePrice = null;
            } }, index.h("div", { key: '4abfb811826eb538293c48b4fe5e6c3313b20377', class: "ir-time-dialog__body" }, index.h("div", { key: '0cc5663d58bb67268fbf603d87a4e8785e05e77f', class: 'ir-time-dialog__current-unit' }, index.h("span", { key: '74d80d3cc189ea6e19227c5b9aecdcb3b6b90c45' }, this.room?.roomtype?.name), " ", index.h("span", { key: '86e6ab597c426b5f4cff852a5c08f160f3402d46' }, this.room?.rateplan?.short_name), " ", index.h("ir-unit-tag", { key: 'f435ef50eef3c5fa9c7254a1e36e5d2ebbb7cd98', unit: this.room?.unit?.name })), index.h("wa-select", { key: 'f88b227485a3eaa2a9ee55549c7633cafe6496dc', size: "s", placeholder: t.t('Lcz_NotProvided', { fallback: 'Not provided' }), "onwa-after-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, value: this.selectedValue ?? '', defaultValue: this.selectedValue ?? '', onchange: e => (this.selectedValue = e.target.value) }, this.departureTime?.map(dt => (index.h("wa-option", { key: dt.CODE_NAME, value: dt.CODE_NAME }, dt[`CODE_VALUE_${this.language?.toUpperCase()}`] ?? dt[`CODE_VALUE_EN`], this.isLateCheckout(dt) ? t.t('Lcz_LateCheckoutSuffix', { fallback: ' (Late check-out)' }) : '')))), this.selectedIsLateCheckout && (index.h("div", { key: '680a87b0752d765dd7af2bc42a50aedc463860bc', class: "ir-time-dialog__insight" }, index.h("div", { key: 'ef63aaec0e049893d4c5ccc7ae02542ca6e93ee9', class: "ir-time-dialog__insight-row" }, index.h("wa-icon", { key: '65e7b1d46f22eab668a36f5a96c94926df20038f', class: "ir-time-dialog__insight-icon", name: "clock" }), index.h("div", { key: 'ca303b9ce5271467fec79f7f5f15af03d300d922', class: "ir-time-dialog__insight-copy" }, index.h("p", { key: '5348dd70e1f673677ae0a4c57d43c8b3b2b49456', class: "ir-time-dialog__insight-title" }, t.t('Lcz_ChargeAsLateCheckoutQuestion', { fallback: 'Would you like to charge it as an Late Check-out?' })), index.h("p", { key: '78c07397d43c7de6988b93fa726966d0a985cd8e', class: "ir-time-dialog__insight-subtitle" }, t.t('Lcz_AddedAsAccommodationExtraServiceHint', { fallback: 'This will be added as an accommodation extra service' })))), this.createExtraService && (index.h("div", { key: '338b5bcc2fa9877192f3daa8b0405e055f42c10e', class: "ir-time-dialog__insight-price" }, index.h("ir-validator", { key: 'f38d67dcafd9b6808ddbf0267dfc05f1e04f2a7d', value: this.extraServicePrice, schema: booking_dto.ExtraServiceSchema.shape.price }, index.h("ir-input", { key: 'c58246efd3085b92b26fe2f99711af6679dee016', "onText-change": e => (this.extraServicePrice = Number(e.detail)), defaultValue: this.extraServicePrice?.toString(), value: this.extraServicePrice?.toString(), mask: 'price', type: "text", withClear: true }, index.h("span", { key: 'e1b71852004619597631121525ef19fcc55729a4', slot: "start" }, this.currencySymbol)))))))), index.h("div", { key: 'bbe75da961193e77c5e29788c6b6f3fe26f89461', slot: "footer", class: 'ir-dialog__footer' }, index.h("ir-custom-button", { key: 'e73fb407b08ea901297459cc320cf1c0081fbbca', size: "m", variant: "neutral", appearance: "filled", "data-dialog": "close" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '1e433046dfec40c30855a01000be7e2e3cbdc424', size: "m", variant: "brand", loading: this.isLoading, disabled: !this.selectedValue, onClickHandler: e => this.handleConfirm(e), appearance: "accent" }, t.t('Lcz_Save', { fallback: 'Save' })))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrDepartureTimeDialog.style = irDepartureTimeDialogCss();

const irEventsLogCss = () => `.sc-ir-events-log-h{display:block}.beta.sc-ir-events-log{background:var(--red);color:white;padding:0.2rem 0.3rem;font-size:12px;border-radius:4px;margin:0}.event-row.sc-ir-events-log{padding-bottom:0.5rem}.list-title.sc-ir-events-log{margin:0;padding:0;font-size:14px;font-weight:bold;width:fit-content}.list-item.sc-ir-events-log{margin:0;padding:0;font-size:14px;margin-inline-start:5px;width:fit-content}.list-item.green.sc-ir-events-log{color:#629a4c;font-weight:600}.list-item.red.sc-ir-events-log{color:#ff4961;font-weight:600}.dates-row.sc-ir-events-log{display:flex;align-items:center;gap:0.875rem}.ir-ps-1.sc-ir-events-log{padding-inline-start:0.25rem}.ir-ps-3.sc-ir-events-log{padding-inline-start:1rem}`;

const IrEventsLog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    bookingNumber;
    booking;
    bookingEvents;
    componentWillLoad() {
        this.init();
    }
    async init() {
        try {
            this.bookingEvents = this.booking.events;
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (index.h("div", { key: 'd64215538700384d44f5fc070d74e872aa1e7100', class: "" }, irInterceptor_store.isRequestPending('/Get_Exposed_Booking_Events') ? (index.h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, index.h("ir-spinner", null))) : (index.h(index.Fragment, null, index.h("table", { class: " dialog-container-height" }, index.h("thead", { class: "sr-only" }, index.h("tr", null, index.h("th", null, "date"), index.h("th", null, t.t('Lcz_User', { fallback: 'user' })), index.h("th", null, "status"))), index.h("tbody", null, this.bookingEvents?.map(e => (index.h("tr", { key: e.id, class: "pb-1" }, index.h("td", { class: "event-row dates-row" }, index.h("span", null, irDate.formatDate(e.date, 'MMM DD, YYYY')), index.h("span", null, number.formatNumber(e.hour, { minimumIntegerDigits: 2, useGrouping: false }), ":", number.formatNumber(e.minute, { minimumIntegerDigits: 2, useGrouping: false }), ":", number.formatNumber(e.second, { minimumIntegerDigits: 2, useGrouping: false }))), index.h("td", { class: "ir-ps-3 event-row " }, e.type), index.h("td", { class: "ir-ps-1 event-row " }, e.user))))))))));
    }
};
IrEventsLog.style = irEventsLogCss();

const irExtraServiceCss = () => `.sc-ir-extra-service-h{display:block}.es-row.sc-ir-extra-service{display:flex;align-items:flex-start;gap:0.75rem}.es-content.sc-ir-extra-service{flex:1;min-width:0}.es-description.sc-ir-extra-service{margin:0;font-size:var(--wa-font-size-m);line-height:1.5;color:var(--wa-color-text-quiet, #27272a);word-break:break-word;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.es-meta.sc-ir-extra-service{display:flex;flex-wrap:wrap;align-items:center;gap:var(--wa-space-2xs, 4px);margin-top:5px;font-size:var(--wa-font-size-s)}.es-meta-date.sc-ir-extra-service,.es-meta-date.sc-ir-extra-service::part(base),.es-meta-date.sc-ir-extra-service [part~="base"],.es-meta-date.sc-ir-extra-service::part(from-date),.es-meta-date.sc-ir-extra-service [part~="from-date"],.es-meta-date.sc-ir-extra-service::part(to-date),.es-meta-date.sc-ir-extra-service [part~="to-date"]{font-weight:700;white-space:nowrap}.es-aside.sc-ir-extra-service{display:flex;align-items:flex-start;gap:0.25rem;flex-shrink:0}.es-pricing.sc-ir-extra-service{text-align:end}.es-price.sc-ir-extra-service{margin:0;font-weight:700;white-space:nowrap;line-height:1.4;color:var(--wa-color-text-quiet, #18181b)}.es-vat.sc-ir-extra-service{margin:2px 0 0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet, #71717a);white-space:nowrap}.es-action-trigger.sc-ir-extra-service::part(base),.es-action-trigger.sc-ir-extra-service [part~="base"]{height:auto;width:var(--wa-space-s)}.es-action-trigger-icon.sc-ir-extra-service{font-size:1rem}`;

const IrExtraService = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.editExtraService = index.createEvent(this, "editExtraService");
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt");
    }
    service;
    booking;
    agent;
    bookingNumber;
    currencySymbol;
    language = 'en';
    svcCategories;
    clTransactions = [];
    editExtraService;
    resetBookingEvt;
    isToggling = false;
    irModalRef;
    toggleDialogRef;
    bookingService = new booking_service.BookingService();
    async deleteService() {
        try {
            await this.bookingService.doBookingExtraService({
                service: this.service,
                is_remove: true,
                booking_nbr: this.bookingNumber,
            });
            this.irModalRef.closeModal();
            this.resetBookingEvt.emit(null);
        }
        catch (error) {
            console.log(error);
        }
    }
    async toggleServiceAgent() {
        try {
            this.isToggling = true;
            await this.bookingService.doBookingExtraService({
                service: { ...this.service, agent: this.service.agent ? null : this.booking?.agent },
                is_remove: false,
                booking_nbr: this.bookingNumber,
            });
            this.toggleDialogRef.closeModal();
            this.resetBookingEvt.emit(null);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isToggling = false;
        }
    }
    get category() {
        return this.svcCategories?.find(c => c.CODE_NAME === this.service?.category?.code);
    }
    get categoryLabel() {
        const category = this.category;
        return category ? utils$1.getEntryValue({ entry: category, language: locale_controller.LocaleController.language }) : null;
    }
    get description() {
        const categoryLabel = this.categoryLabel;
        if (categoryLabel) {
            return (index.h("span", null, index.h("span", null, categoryLabel, this.service.description ? ':' : '', ' '), this.service.description));
        }
        return this.service.description;
    }
    get matchedTx() {
        return this.clTransactions.find(tx => tx.REL_ENTITY_KEY === this.service.system_id) ?? null;
    }
    get linkedUnitName() {
        if (this.service?.pr_id == null) {
            return null;
        }
        for (const roomtype of calendarData.calendar_data.property?.roomtypes ?? []) {
            const physicalRoom = (roomtype.physicalrooms ?? []).find((pr) => pr.id === this.service.pr_id);
            if (physicalRoom) {
                return physicalRoom.name;
            }
        }
        return null;
    }
    /**
     * Opens the existing day-use reservation's details drawer — same `showBookingPopup`/`EDIT_BOOKING`
     * path `igl-booking-event-hover`'s "Edit booking" action uses, so `igloo-calendar.tsx`'s existing
     * `editBookingItem` wiring picks it up without any new plumbing.
     */
    formatDayUseTime(time) {
        const [hour, minute] = time.split(':');
        return functions._formatTime(hour, minute);
    }
    render() {
        const agentMode = functions.isAgentMode(this.agent);
        const tx = this.matchedTx;
        const statusTag = tx ? index.h("ir-cl-status-tag", { transaction: { _rowId: '', ...cityLedger_service.mapClTxToFolioRow(tx), balance: 0 }, size: "extra-small" }) : null;
        const unitName = this.linkedUnitName;
        const hasMeta = !!(this.service.start_date || unitName || statusTag);
        return (index.h(index.Host, { key: '98afb02a46dcd26c4247ff8eef3d6821e7c93e3b' }, index.h("div", { key: '05a4e8d1c06ffceaa9f058689acef0afd829aa9c', class: "es-row" }, index.h("div", { key: '40b5ea23d0f56141b6e7a04ca50556e2ab3497e6', class: "es-content" }, index.h("p", { key: 'eb1cb5feeca83ad6adc58c09ba26ec9fe1342aa4', class: "es-description" }, this.description, this.service.category.code === enums.SvcCategory.DayUse && (index.h("span", { key: '9c4687ae0934fc2934d9cbaa6575bb5e061ed612' }, ": ", this.formatDayUseTime(this.service.from_time), " \u2013 ", this.formatDayUseTime(this.service.to_time)))), hasMeta && (index.h("div", { key: '13d93a013033027ac1f4d40743b3223576d3cf00', class: "es-meta" }, this.service.start_date &&
            (this.service.end_date && this.service?.category?.code !== enums.SvcCategory.DayUse ? (index.h("ir-date-view", { class: "es-meta-date", from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (index.h("span", { class: "es-meta-date" }, irDate.formatDate(new Date(this.service.start_date), 'MMM DD, YYYY'), " "))), unitName && index.h("ir-unit-tag", { key: '586122695a53eb9b6968f08ba6212274594e2104', unit: unitName }), statusTag))), index.h("div", { key: 'f23f2365352cca55b2bece6e3c11f5853e2c0585', class: "es-aside" }, !!this.service.price && this.service.price > 0 && (index.h("div", { key: '6eeeeb860a0f3cbe76aa4d96905b32dac27763bd', class: "es-pricing" }, index.h("p", { key: '00e85e1c88aca3bcb2a4cfacf079d7413f34be59', class: "es-price" }, number.formatAmount(this.currencySymbol, this.service.price)), !!this.service.charges?.vat_percent && index.h("p", { key: 'aaa21ec4711f7201885e2447433ea73a3feac871', class: "es-vat" }, t.t('Lcz_InclVat', { fallback: 'incl. %1% VAT', params: [this.service.charges.vat_percent] })))), index.h("wa-dropdown", { key: 'a0b04265429bb88f95c010af6c4e59e3b5e5933e', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                switch (e.detail.item.value) {
                    case 'edit':
                        this.editExtraService.emit(this.service);
                        break;
                    case 'delete':
                        this.irModalRef.openModal();
                        break;
                    case 'toggle':
                        this.toggleDialogRef.openModal();
                        break;
                }
            } }, index.h("wa-button", { key: 'c944a1b790dc1a250224508cdf22144d06042397', class: "es-action-trigger", slot: "trigger", size: "s", appearance: "plain", id: `extra-service-actions-${this.service.system_id}`, variant: "neutral", "aria-label": t.t('Lcz_ServiceActions', { fallback: 'Service actions' }) }, index.h("wa-icon", { key: '9d03830a1599ca0e12feb83718e5287ec33262d8', class: "es-action-trigger-icon", name: "ellipsis-vertical" })), index.h("wa-dropdown-item", { key: '2443baa0207bd7201423dd6af86a7d35a0add396', value: "edit" }, t.t('Lcz_Edit', { fallback: 'Edit' })), agentMode && (index.h("wa-dropdown-item", { key: '05279db5bf6daa68e56acc1ab5a4a8d5689fec80', value: "toggle" }, t.t('Lcz_ReassignFolioDropdown', { fallback: 'Re-assign %1 folio', params: [this.service.agent ? 'guest' : 'agent'] }))), index.h("wa-dropdown-item", { key: 'e6ed02ed3f255a5f05087392d9b8e34f20554fb8', value: "delete", variant: "danger" }, t.t('Lcz_Delete', { fallback: 'Delete' }))))), index.h("ir-assignment-toggle-dialog", { key: '1c4ebd2f800ad8cf5c43ce1b7ed71821722c6eaf', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, message: t.t('Lcz_SwitchFolioConfirm', {
                fallback: 'Switch "%1" to %2?',
                params: [this.service.description, this.service.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent')],
            }), onConfirmToggle: () => this.toggleServiceAgent() }, index.h("span", { key: '7b9834bb2705f05615bc483381b8f0986e6cd25e', slot: "message" }, t.t('Lcz_ReassignFolioMessage', {
            fallback: 'Re-assign %1 from %2 folio to %3 folio.',
            params: [
                this.service.description ?? '',
                this.service.agent ? t.t('Lcz_Agent', { fallback: 'Agent' }) : t.t('Lcz_Guest', { fallback: 'Guest' }),
                this.service.agent ? t.t('Lcz_Guest', { fallback: 'Guest' }) : t.t('Lcz_Agent', { fallback: 'Agent' }),
            ],
        }))), index.h("ir-dialog", { key: 'f09a0bd59e664ded377fbd5954e1972b3940e23f', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: t.t('Lcz_Alert', { fallback: 'Alert' }), ref: el => (this.irModalRef = el), lightDismiss: false }, `${t.t('Lcz_AreYouSureDoYouWantToRemove ')} ${t.t('Lcz_ThisService')} ${t.t('Lcz_FromThisBooking')}`, index.h("div", { key: '79fc1cd61401505d051f7caf83b462a97496d4f9', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: 'daad64428d1600f7ee79c14c5f91fb0a9a30f281', appearance: "filled", variant: "neutral", size: "m", "data-dialog": "close" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: 'ab365c966ea7ebe2558acb9bd35895008ae2ebb0', onClickHandler: () => this.deleteService(), loading: irInterceptor_store.isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "m" }, t.t('Lcz_Delete', { fallback: 'Delete' }))))));
    }
};
IrExtraService.style = irExtraServiceCss();

const irExtraServiceConfigCss = () => `.sc-ir-extra-service-config-h{display:block;--ir-input-border-color:#cacfe7}.sc-ir-extra-service-config-h .input-group-text.sc-ir-extra-service-config{border-color:var(--ir-input-border-color)}.currency-ph.sc-ir-extra-service-config{padding:0;margin:0;color:#3b4781;display:flex;align-items:center;justify-content:center;padding:0 0 0 0.25rem;border-top:1px solid var(--ir-input-border-color);border-bottom:1px solid var(--ir-input-border-color);border-inline-start:1px solid transparent;transition:border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out,     -webkit-box-shadow 0.15s ease-in-out}.service-description-input.sc-ir-extra-service-config{height:70px !important}.service-description.sc-ir-extra-service-config .input-group-prepend.sc-ir-extra-service-config{background-color:#f4f5fa;border:1px solid var(--ir-input-border-color);border-start-start-radius:0.25rem;border-end-start-radius:0.25rem}.service-date-container.sc-ir-extra-service-config{padding:0;margin:0;display:flex;align-items:center;position:relative;width:100%;justify-content:center}.service-date-container.sc-ir-extra-service-config .btn-container.sc-ir-extra-service-config{position:absolute;inset-inline-end:5px;margin:0;display:flex;align-items:center;justify-content:center;padding:0}.service-description.sc-ir-extra-service-config .input-group-text.sc-ir-extra-service-config{height:fit-content;border:0;padding-top:0.75rem !important}.price-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config,.cost-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-inline-start:1px solid #1e9ff2}.currency-ph[data-state='error'].sc-ir-extra-service-config{border-color:var(--red, #ff4961)}.price-input.sc-ir-extra-service-config:focus{border-inline-end-width:1px !important}.is-invalid.sc-ir-extra-service-config{background-image:none !important}.price-input.sc-ir-extra-service-config,.cost-input.sc-ir-extra-service-config{border-inline-start:0}.row-group.sc-ir-extra-service-config{display:flex;flex-direction:column;gap:0.5rem}.extra-service-config__container.sc-ir-extra-service-config{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.row-group.sc-ir-extra-service-config{flex-direction:row;align-items:center;gap:0}.cost-label.sc-ir-extra-service-config{border-start-start-radius:0;border-end-start-radius:0;border-inline-start:0}.until-prepend.sc-ir-extra-service-config,.cost-input-placeholder.sc-ir-extra-service-config{border-start-start-radius:0 !important;border-end-start-radius:0 !important}.date-from.sc-ir-extra-service-config,.price-input.sc-ir-extra-service-config{border-inline-end-width:0 !important;border-start-end-radius:0 !important;border-end-end-radius:0 !important}}.date-focused.sc-ir-extra-service-config{border-color:#1e9ff2}`;

const IrExtraServiceConfig = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal");
    }
    booking;
    agent;
    svcCategories = [];
    service;
    language;
    open;
    defaultPrId = null;
    closeModal;
    closeDialog() {
        this.closeModal.emit();
    }
    render() {
        return (index.h("ir-drawer", { key: 'c473750442786056fafdadb7de2a5519597c349b', style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDialog();
            }, label: t.t('Lcz_ExtraServices') }, this.open && (index.h("ir-extra-service-config-form", { key: '5014743e65262d4105ad8674a2eb4c5fac50e9a6', language: this.language ?? 'en', svcCategories: this.svcCategories, onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDialog();
            }, booking: this.booking, agent: this.agent, service: this.service, defaultPrId: this.defaultPrId })), index.h("div", { key: 'c323ca3a945d145039ecca9448da718b52846038', slot: "footer", class: 'ir__drawer-footer' }, index.h("ir-custom-button", { key: '0cb379ae8a1d681a2e9f3ba665702ab4caaadd3a', class: `flex-fill`, size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '424e649b9ef7ad964a887ffb686f70e211fbfff5', type: "submit", loading: irInterceptor_store.isRequestPending('/Do_Booking_Extra_Service'), form: "extra-service-config-form", size: "m", class: `flex-fill`, variant: "brand" }, t.t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrExtraServiceConfig.style = irExtraServiceConfigCss();

const irExtraServiceConfigFormCss = () => `.sc-ir-extra-service-config-form-h{display:block;--ir-input-border-color:#cacfe7}.sc-ir-extra-service-config-form-h .input-group-text.sc-ir-extra-service-config-form{border-color:var(--ir-input-border-color)}.currency-ph.sc-ir-extra-service-config-form{padding:0;margin:0;color:#3b4781;display:flex;align-items:center;justify-content:center;padding:0 0 0 0.25rem;border-top:1px solid var(--ir-input-border-color);border-bottom:1px solid var(--ir-input-border-color);border-inline-start:1px solid transparent;transition:border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out,     -webkit-box-shadow 0.15s ease-in-out}.service-description-input.sc-ir-extra-service-config-form{height:70px !important}.service-description.sc-ir-extra-service-config-form .input-group-prepend.sc-ir-extra-service-config-form{background-color:#f4f5fa;border:1px solid var(--ir-input-border-color);border-start-start-radius:0.25rem;border-end-start-radius:0.25rem}.service-date-container.sc-ir-extra-service-config-form{padding:0;margin:0;display:flex;align-items:center;position:relative;width:100%;justify-content:center}.service-date-container.sc-ir-extra-service-config-form .btn-container.sc-ir-extra-service-config-form{position:absolute;inset-inline-end:5px;margin:0;display:flex;align-items:center;justify-content:center;padding:0}.service-description.sc-ir-extra-service-config-form .input-group-text.sc-ir-extra-service-config-form{height:fit-content;border:0;padding-top:0.75rem !important}.price-input-group.sc-ir-extra-service-config-form:focus-within .currency-ph.sc-ir-extra-service-config-form,.cost-input-group.sc-ir-extra-service-config-form:focus-within .currency-ph.sc-ir-extra-service-config-form{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-inline-start:1px solid #1e9ff2}.currency-ph[data-state='error'].sc-ir-extra-service-config-form{border-color:var(--red, #ff4961)}.price-input.sc-ir-extra-service-config-form:focus{border-inline-end-width:1px !important}.is-invalid.sc-ir-extra-service-config-form{background-image:none !important}.price-input.sc-ir-extra-service-config-form,.cost-input.sc-ir-extra-service-config-form{border-inline-start:0}.row-group.sc-ir-extra-service-config-form{display:flex;flex-direction:column;gap:0.5rem}.extra-service-config__container.sc-ir-extra-service-config-form{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.row-group.sc-ir-extra-service-config-form{flex-direction:row;align-items:center;gap:0}.cost-label.sc-ir-extra-service-config-form{border-start-start-radius:0;border-end-start-radius:0;border-inline-start:0}.until-prepend.sc-ir-extra-service-config-form,.cost-input-placeholder.sc-ir-extra-service-config-form{border-start-start-radius:0 !important;border-end-start-radius:0 !important}.date-from.sc-ir-extra-service-config-form,.price-input.sc-ir-extra-service-config-form{border-inline-end-width:0 !important;border-start-end-radius:0 !important;border-end-end-radius:0 !important}}.date-focused.sc-ir-extra-service-config-form{border-color:#1e9ff2}`;

/** Group code for accommodation-linked extra services (Breakfast, Minibar, ...) — see `KNOWN_GROUP_LABELS` in svc-category.utils. */
const ACCOMMODATION_GROUP_CODE = enums.SvcCategory.Accommodation;
/** Early Check-In / Late Check-Out aren't selectable as an accommodation sub-category here — they're handled elsewhere in the booking flow. */
const ACCOMMODATION_EXCLUDED_CODES = new Set(['ECI', 'LCO']);
/** `_SVC_CATEGORY` short code for Baby Cot — its default price is per-stay or per-night depending on BABY_COT_PRICING_MODEL. */
const BABY_COT_CATEGORY_CODE = 'BCT';
const IrExtraServiceConfigForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal");
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt");
    }
    booking;
    agent;
    service;
    svcCategories = [];
    language;
    /** Pre-selected unit (physical room) id to link a new service to, e.g. when added from ir-room's quick-add action. */
    defaultPrId = null;
    s_service;
    error;
    fromDateClicked;
    toDateClicked;
    autoValidate;
    assignee = 'guest';
    /** Group (e.g. Accommodation) the currently selected top-level category belongs to, when it has sub-categories to pick from. */
    selectedGroupCode = null;
    /** True once the price field has been set by user input (typed, or loaded from an existing saved service) — freezes it against further auto-recalculation. */
    priceManuallyEdited = false;
    closeModal;
    resetBookingEvt;
    bookingService = new booking_service.BookingService();
    componentWillLoad() {
        if (functions.isAgentMode(this.agent)) {
            this.assignee = 'agent';
        }
        this.assignService();
    }
    handleServiceChange() {
        this.assignService();
    }
    assignService() {
        if (this.service) {
            this.s_service = { ...this.service };
            this.selectedGroupCode = this.groupCodeForCategoryCode(this.service.category?.code);
            // An existing service already carries its saved price — don't let a subsequent date-range edit silently recompute it.
            this.priceManuallyEdited = true;
            if (!this.service.agent) {
                this.assignee = 'guest';
            }
        }
        else {
            this.selectedGroupCode = null;
            this.priceManuallyEdited = false;
            if (this.effectiveRoomIdentifier != null) {
                this.s_service = {
                    cost: null,
                    description: null,
                    end_date: null,
                    start_date: null,
                    price: null,
                    currency_id: this.booking.currency.id,
                    room_identifier: this.effectiveRoomIdentifier,
                };
            }
        }
    }
    /** Which group (e.g. `Accommodation`) a leaf category code belongs to, if any — used to re-derive the group selection when editing an existing service. */
    groupCodeForCategoryCode(code) {
        if (!code)
            return null;
        for (const group of this.svcGroups.values()) {
            if (group.categories.some(c => c.CODE_NAME === code)) {
                return group.code;
            }
        }
        return null;
    }
    get taxCategoryLookup() {
        const notApplicableCodes = new Set(calendarData.calendar_data.property.tax_categories.filter(c => c.taxation_mode?.code === index$3.taxationModes.NOT_APPLICABLE).map(c => c.category.code));
        const taxPctByCode = Object.fromEntries(calendarData.calendar_data.property.tax_categories.map(c => [c.category.code, c.pct || 0]));
        const realCodes = new Set(this.svcCategories.map(c => c.CODE_NAME));
        const accVat = svcCategory_utils.toAccChargeRule(svcCategory_utils.findAccTax('vat'));
        return { notApplicableCodes, taxPctByCode, realCodes, accVat };
    }
    toCategoryOption(cat) {
        const { notApplicableCodes, taxPctByCode, realCodes, accVat } = this.taxCategoryLookup;
        // Synthesized parent-group placeholders (e.g. Accommodation) have no `tax_categories` row of their
        // own — their rate mirrors the property's accommodation VAT, same as it does on the Extra Services page.
        if (!realCodes.has(cat.CODE_NAME)) {
            return { ...cat, pct: accVat.mode === index$3.taxationModes.NOT_APPLICABLE ? 0 : (accVat.value ?? 0), isNotApplicable: accVat.mode === index$3.taxationModes.NOT_APPLICABLE };
        }
        return { ...cat, pct: taxPctByCode[cat.CODE_NAME] ?? 0, isNotApplicable: notApplicableCodes.has(cat.CODE_NAME) };
    }
    sortByLabel(entries) {
        const langKey = `CODE_VALUE_${(this.language ?? 'en').toUpperCase()}`;
        return entries.sort((a, b) => (a[langKey] ?? a.CODE_VALUE_EN ?? '').localeCompare(b[langKey] ?? b.CODE_VALUE_EN ?? ''));
    }
    get categories() {
        return this.sortByLabel(svcCategory_utils.getTopLevelSvcCategories(this.svcCategories).map(cat => this.toCategoryOption(cat)));
    }
    get svcGroups() {
        return svcCategory_utils.groupSvcCategoriesByParent(this.svcCategories, this.language ?? 'en');
    }
    /** Sub-categories of the currently selected top-level group (e.g. Breakfast/Minibar under Accommodation), when there are any. */
    get subCategories() {
        if (!this.selectedGroupCode)
            return [];
        const group = this.svcGroups.get(this.selectedGroupCode);
        if (!group)
            return [];
        const categories = this.selectedGroupCode === ACCOMMODATION_GROUP_CODE ? group.categories.filter(cat => !ACCOMMODATION_EXCLUDED_CODES.has(cat.CODE_NAME)) : group.categories;
        return categories.filter(cat => cat.CODE_NAME !== enums.SvcCategory.DayUse).map(cat => this.toCategoryOption(cat));
    }
    /** The unit-link select becomes mandatory once the chosen extra service is an accommodation sub-category (Breakfast, Minibar, ...). */
    get isUnitRequired() {
        return this.selectedGroupCode === ACCOMMODATION_GROUP_CODE;
    }
    get unitOptions() {
        return (this.booking?.rooms ?? [])
            .filter(room => room.unit && typeof room.unit === 'object')
            .map(room => ({ id: room.unit.id, identifier: room.identifier, label: `${room.roomtype?.name ?? ''} ${room.unit.name}`.trim() }));
    }
    get showUnitLink() {
        return (this.booking?.rooms?.length ?? 0) > 1 && this.unitOptions.length > 0;
    }
    /** The room identifier to link a new service to: an explicit default (e.g. from ir-room's quick-add, given as a unit id), or the booking's single unit when there's no choice to make. */
    get effectiveRoomIdentifier() {
        if (this.defaultPrId != null) {
            return this.unitOptions.find(option => option.id === this.defaultPrId)?.identifier ?? null;
        }
        return this.unitOptions.length === 1 ? this.unitOptions[0].identifier : null;
    }
    async saveAmenity() {
        try {
            this.autoValidate = true;
            const service = { ...(this.s_service ?? {}), agent: this.assignee === 'agent' ? this.booking.agent : null };
            if (this.selectedGroupCode && !service.category?.code) {
                // A group (e.g. Accommodation) was picked but its sub-category select hasn't been resolved yet.
                this.error = true;
                return;
            }
            const schema = this.isUnitRequired
                ? booking_dto.ExtraServiceSchema.extend({
                    room_identifier: types.stringType({ required_error: t.t('Lcz_UnitIsRequired', { fallback: 'Unit is required' }) })
                        .nonempty(t.t('Lcz_UnitIsRequired', { fallback: 'Unit is required' })),
                })
                : booking_dto.ExtraServiceSchema;
            schema.parse(service);
            await this.bookingService.doBookingExtraService({
                service,
                booking_nbr: this.booking.booking_nbr,
                is_remove: false,
            });
            this.resetBookingEvt.emit(null);
            this.closeDialog();
        }
        catch (error) {
            if (error instanceof types.ZodError) {
                this.error = true;
            }
            console.error(error);
        }
    }
    closeDialog() {
        this.closeModal.emit();
    }
    /**
     * Sets the chosen leaf category and, when the property has a configured default price for it,
     * overwrites the price field to match. Re-arms auto-recalculation (see `priceManuallyEdited`) —
     * a fresh category selection always gets its default, even over a previously typed price.
     */
    selectCategory(code) {
        this.priceManuallyEdited = false;
        const defaultPrice = this.resolveDefaultPrice(code);
        this.updateService({ category: { code }, price: defaultPrice !== null ? defaultPrice : (this.s_service?.price ?? null) });
    }
    /**
     * Resolves the property's configured default price for `code`. For every category except Baby
     * Cot this is just the flat `SVC_DEFAULT_PRICE_<code>` rate. Baby Cot's rate is charged once per
     * stay or once per night depending on `BABY_COT_PRICING_MODEL` (set on the Extra Services
     * settings page) — when it's per night, the rate is multiplied by the number of nights in the
     * currently selected date range (falling back to the full booking stay when no range is picked
     * yet), so the field always reflects "rate × nights" until the user overrides it by typing.
     */
    resolveDefaultPrice(code) {
        const rate = calendarData.getExtraServiceDefaultPrice(code);
        if (rate === undefined) {
            return null;
        }
        const rateNum = Number(rate);
        if (code !== BABY_COT_CATEGORY_CODE || calendarData.getBabyCotPricingModel() !== 'Night') {
            return rateNum;
        }
        const start = this.s_service?.start_date ?? this.booking.from_date;
        const end = this.s_service?.end_date ?? this.booking.to_date;
        return rateNum * booking.calculateDaysBetweenDates(start, end);
    }
    /** Keeps Baby Cot's per-night price in sync with the selected date range, unless the user has already typed a price of their own. */
    syncBabyCotPriceWithDateRange() {
        if (this.priceManuallyEdited || this.s_service?.category?.code !== BABY_COT_CATEGORY_CODE || calendarData.getBabyCotPricingModel() !== 'Night') {
            return;
        }
        const price = this.resolveDefaultPrice(BABY_COT_CATEGORY_CODE);
        if (price !== null) {
            this.updateService({ price });
        }
    }
    updateService(params) {
        let prevService = this.s_service;
        if (!prevService) {
            prevService = {
                cost: null,
                description: null,
                end_date: null,
                start_date: null,
                price: null,
                currency_id: this.booking.currency.id,
                room_identifier: this.effectiveRoomIdentifier,
            };
        }
        this.s_service = { ...prevService, ...params };
    }
    assignmentChanged(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.assignee = event.detail;
    }
    render() {
        return (index.h("form", { key: '8ca6a9591208f9dd25d98297d4e9059465b5e922', id: "extra-service-config-form", onSubmit: async (e) => {
                e.preventDefault();
                this.saveAmenity();
            }, class: 'extra-service-config__container' }, this.categories.length > 0 && (index.h("ir-validator", { key: '7ae73401bfadfcec41221ea3ee3fdade5ddb687e', value: this.s_service?.category, schema: booking_dto.ExtraServiceSchema.shape.category }, index.h("wa-select", { key: '6865c0eb8dc280f474592101d0c6c50619230c0b', size: "s", label: t.t('Lcz_ServiceCategory', { fallback: 'Service category' }), value: this.selectedGroupCode ?? this.s_service?.category?.code ?? '', defaultValue: this.selectedGroupCode ?? this.s_service?.category?.code ?? '', onchange: (e) => {
                const code = e.target.value;
                const group = this.svcGroups.get(code);
                if (group && group.categories.length > 0) {
                    this.selectedGroupCode = code;
                    this.updateService({ category: null });
                }
                else {
                    this.selectedGroupCode = null;
                    this.selectCategory(code);
                }
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, this.categories?.map(category => {
            const langKey = `CODE_VALUE_${(this.language ?? 'en').toUpperCase()}`;
            const vatSuffix = category.isNotApplicable
                ? t.t('Lcz_VatNotApplicable', { fallback: 'VAT - Not applicable' })
                : t.t('Lcz_VatPercent', { fallback: 'VAT %1%', params: [category.pct] });
            const label = (category[langKey] ?? category.CODE_VALUE_EN ?? '') + ` (${vatSuffix})`;
            if (this.booking.is_room_less && category.CODE_NAME === enums.SvcCategory.Accommodation) {
                return null;
            }
            return (index.h("wa-option", { value: category.CODE_NAME, label: label }, label));
        })))), this.selectedGroupCode && this.subCategories.length > 0 && (index.h("ir-validator", { key: '58e53ec7ed52b5ad3e4f9ab4716e39479c224c5b', value: this.s_service?.category?.code ?? null, schema: types.stringType({ required_error: t.t('Lcz_SubcategoryIsRequired', { fallback: 'Subcategory is required' }) })
                .nonempty(t.t('Lcz_SubcategoryIsRequired', { fallback: 'Subcategory is required' })) }, index.h("wa-select", { key: '313bc5ea11465320adaac4bc5e02e856fa4ea8ed', size: "s", label: t.t('Lcz_Subcategory', { fallback: 'Subcategory' }), required: true, value: this.s_service?.category?.code ?? '', defaultValue: this.s_service?.category?.code ?? '', onchange: (e) => {
                this.selectCategory(e.target.value);
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, this.subCategories.map(category => {
            const langKey = `CODE_VALUE_${(this.language ?? 'en').toUpperCase()}`;
            const label = category[langKey] ?? category.CODE_VALUE_EN ?? '';
            return (index.h("wa-option", { value: category.CODE_NAME, label: label }, label, category.CODE_NAME === BABY_COT_CATEGORY_CODE && calendarData.getBabyCotPricingModel() && index.h("span", null, " (/", calendarData.getBabyCotPricingModel().toLowerCase(), ")"), category.CODE_NAME === 'EXB' && index.h("span", null, t.t('Lcz_ExtraBedPerNightSuffix', { fallback: ' (/night)' }))));
        })))), index.h("ir-validator", { key: '0151996dc14a280db74dd873292d3281af6e6545', id: "amenity description-validator", schema: booking_dto.ExtraServiceSchema.shape.description }, index.h("wa-textarea", { key: '8718d5448479748c17ad90bdf3b0a7dc4e5bfc52', size: "s", defaultValue: this.s_service?.description, value: this.s_service?.description, onchange: e => this.updateService({ description: e.target.value }), id: "amenity-description", "aria-label": t.t('Lcz_AmenityDescriptionAriaLabel', { fallback: 'Amenity description' }), maxlength: 250, label: t.t('Lcz_Description', { fallback: 'Description' }) })), this.showUnitLink && (index.h("ir-validator", { key: '0c21b8bdc04cf973a79a20f2169333b163f01970', value: this.s_service?.room_identifier ?? null, schema: this.isUnitRequired
                ? types.stringType({ required_error: t.t('Lcz_UnitIsRequired', { fallback: 'Unit is required' }) }).nonempty(t.t('Lcz_UnitIsRequired', { fallback: 'Unit is required' }))
                : booking_dto.ExtraServiceSchema.shape.room_identifier }, index.h("wa-select", { key: 'b07ff3e9bbe6fea3cf2685aad7b1bd24795118c3', size: "s", label: this.isUnitRequired ? t.t('Lcz_LinkToUnit', { fallback: 'Link to unit' }) : t.t('Lcz_LinkToUnitOptional', { fallback: 'Link to unit (optional)' }), required: this.isUnitRequired, value: this.s_service?.room_identifier ?? '', defaultValue: this.s_service?.room_identifier ?? '', onchange: (e) => {
                const value = e.target.value;
                this.updateService({ room_identifier: value || null });
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, !this.isUnitRequired && index.h("wa-option", { key: '81c0c8ebd4a741a34c28c25e8856acc280aa317d', value: "" }, t.t('Lcz_NotLinkedToSpecificUnit', { fallback: 'Not linked to a specific unit' })), this.unitOptions.map(option => (index.h("wa-option", { value: option.identifier, label: option.label }, option.label)))))), index.h("ir-validator", { key: '6dc81c8971bd3ef09fc99e87aaa7698ed2a06985', value: this.s_service?.start_date ?? null, schema: booking_dto.ExtraServiceSchema.shape.start_date }, index.h("ir-date-select", { key: 'bb565174676c720e6ed65f235d7a7f4033325373', placeholder: t.t('Lcz_SelectDate', { fallback: 'Select date' }), withClear: true, label: t.t('Lcz_DatesOn', { fallback: 'Dates on' }), emitEmptyDate: true, date: this.s_service?.start_date, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                this.updateService({ start_date: e.detail.start?.format('YYYY-MM-DD') });
                this.syncBabyCotPriceWithDateRange();
            } })), index.h("ir-date-select", { key: '0758ce69ce3891b80883d59503d20c8626ceaf17', withClear: true, emitEmptyDate: true, placeholder: t.t('Lcz_SelectDate', { fallback: 'Select date' }), date: this.s_service?.end_date, minDate: this.s_service?.start_date ?? this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: e.detail.start?.format('YYYY-MM-DD') });
                this.syncBabyCotPriceWithDateRange();
            }, label: t.t('Lcz_TillAndIncluding', { fallback: 'Till and including' }) }), index.h("ir-validator", { key: 'a75db8679f2a29d7974652f722068e6ec679a802', value: this.s_service?.price ?? null, schema: booking_dto.ExtraServiceSchema.shape.price }, index.h("ir-input", { key: 'ab32d97b91b6ec1c7e18cf6788cb369e4b8172c1', "onText-change": e => {
                this.updateService({ price: Number(e.detail) });
            }, defaultValue: this.s_service?.price?.toString(), value: this.s_service?.price?.toString(), mask: 'price', type: "text", onChange: () => {
                this.priceManuallyEdited = true;
            }, label: `${t.t('Lcz_Price')} ${t.t('Lcz_IncludingTaxSuffix', { fallback: '(including tax)' })}` }, index.h("span", { key: '4e060eb44a86b4b01df77e6235fdab7cac078d21', slot: "start" }, this.booking.currency.symbol))), functions.isAgentMode(this.agent) && (index.h("ir-service-assignee-select", { key: '872ef6504f6fe1a53ec74a943718b40975a28757', assigneeType: this.assignee, onAssignmentChange: e => this.assignmentChanged(e), agent: this.booking.agent }))));
    }
    static get watchers() { return {
        "service": [{
                "handleServiceChange": 0
            }]
    }; }
};
IrExtraServiceConfigForm.style = irExtraServiceConfigFormCss();

const irExtraServicesCss = () => `.sc-ir-extra-services-h{display:block}.extra-service__card.sc-ir-extra-services{background-color:var(--wa-color-surface-default)}.service-group.sc-ir-extra-services{padding:0.125rem 0 0.25rem;border-inline-start:3px solid transparent;padding-inline-start:0.625rem}.extra-services__header-actions.sc-ir-extra-services{display:flex;align-items:center;gap:0.5rem}.service-group--guest.sc-ir-extra-services{border-inline-start-color:var(--wa-color-neutral-300, #d4d4d8)}.service-group--agent.sc-ir-extra-services{border-inline-start-color:var(--wa-color-brand-fill-loud, #3b82f6)}.service-group__label.sc-ir-extra-services{display:flex;align-items:center;gap:0.4rem;margin:0 0 0.75rem;font-size:0.75rem;font-weight:700;letter-spacing:0.06em;color:var(--wa-color-neutral-500, #71717a)}.service-group__label.--agent.sc-ir-extra-services{color:var(--wa-color-primary-600, #2563eb)}.service-group__dot.sc-ir-extra-services{display:inline-block;width:6px;height:6px;border-radius:50%;background-color:var(--wa-color-neutral-400, #a1a1aa);flex-shrink:0}.service-group--agent.sc-ir-extra-services .service-group__dot.sc-ir-extra-services{background-color:var(--wa-color-primary-500, #3b82f6)}.service-group__empty.sc-ir-extra-services{margin:0;padding:0.375rem 0;font-size:0.85rem;color:var(--wa-color-neutral-400, #a1a1aa);font-style:italic}`;

const IrExtraServices = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    agent;
    language;
    svcCategories;
    clTransactions = [];
    renderServiceList(services) {
        return services.map((service, index$1) => {
            if (service.room_identifier) {
                return null;
            }
            return (index.h(index.Fragment, null, index.h("ir-extra-service", { language: this.language, svcCategories: this.svcCategories, booking: this.booking, bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service, agent: this.agent, clTransactions: this.clTransactions }), index$1 !== services.length - 1 && index.h("wa-divider", null)));
        });
    }
    extraServicesHeaderActions() {
        return this.booking.is_room_less ? (index.h("div", { slot: "header-actions", class: 'extra-services__header-actions' }, index.h("ir-custom-button", { id: "room-add", size: "s", appearance: "outlined", variant: "neutral" }, index.h("wa-icon", { name: "plus", slot: "start" }), t.t('Lcz_AddStay', { fallback: 'Add stay' })), index.h("ir-custom-button", { id: "extra_service_btn", size: "s", appearance: "outlined", variant: "neutral" }, index.h("wa-icon", { name: "plus", slot: "start" }), t.t('Lcz_AddService', { fallback: 'Add service' })))) : (index.h(index.Fragment, null, index.h("wa-tooltip", { for: "extra_service_btn" }, t.t('Lcz_AddExtraService', { fallback: 'Add extra service' })), index.h("ir-custom-button", { slot: "header-actions", id: "extra_service_btn", size: "s", appearance: "plain", variant: "neutral" }, index.h("wa-icon", { name: "plus", style: { fontSize: '1rem' } }))));
    }
    render() {
        const services = this.booking.extra_services ?? [];
        if (functions.isAgentMode(this.agent)) {
            const guestServices = services.filter(s => s.agent === null || s.agent === undefined);
            const agentServices = services.filter(s => s.agent !== null && s.agent !== undefined);
            const agentName = this.booking.agent?.name ?? t.t('Lcz_Agent', { fallback: 'Agent' });
            return (index.h(index.Host, null, index.h("wa-card", { appearance: "plain", class: "extra-service__card" }, index.h("p", { slot: "header", class: 'font-size-large p-0 m-0' }, t.t('Lcz_ExtraServices')), this.extraServicesHeaderActions(), services.length === 0 ? (index.h("ir-empty-state", { showIcon: false })) : (index.h(index.Fragment, null, index.h("p", { class: "service-group__label --agent" }, agentName, index.h("span", null, t.t('Lcz_Folio', { fallback: 'Folio' }))), index.h("div", { class: "service-group service-group--agent" }, index.h("div", { class: "service-group__body" }, agentServices.length === 0 ? (index.h("p", { class: "service-group__empty" }, t.t('Lcz_NoAgentServicesAdded', { fallback: 'No agent services added' }))) : (this.renderServiceList(agentServices)))), index.h("wa-divider", null), index.h("p", { class: "service-group__label" }, t.t('Lcz_Guest', { fallback: 'Guest' }), index.h("span", null, t.t('Lcz_Folio', { fallback: 'Folio' }))), index.h("div", { class: "service-group service-group--guest" }, index.h("div", { class: "service-group__body" }, guestServices.length === 0 ? (index.h("p", { class: "service-group__empty" }, t.t('Lcz_NoGuestServicesAdded', { fallback: 'No guest services added' }))) : (this.renderServiceList(guestServices)))))))));
        }
        return (index.h(index.Host, null, index.h("wa-card", { appearance: "plain", class: "extra-service__card" }, index.h("p", { slot: "header", class: 'font-size-large p-0 m-0 ' }, t.t('Lcz_ExtraServices')), this.extraServicesHeaderActions(), services.length === 0 && index.h("ir-empty-state", { showIcon: false }), this.renderServiceList(services))));
    }
};
IrExtraServices.style = irExtraServicesCss();

const irGuestBillingCss = () => `.sc-ir-guest-billing-h {   --ir-cell-padding: 0.5rem 1rem; }      .table--container.sc-ir-guest-billing {   overflow-x: auto; }  .table--container.sc-ir-guest-billing, .data-table.sc-ir-guest-billing {   height: 100%; }      .ir-table-row.sc-ir-guest-billing td.sc-ir-guest-billing {   padding: var(--ir-cell-padding) !important;   text-align: start;   z-index: 2;   background-color: var(--wa-color-surface-default);   white-space: nowrap;   color: var(--wa-color-text-normal);   box-sizing: border-box;    transition-duration: var(--wa-transition-fast); }  .table.sc-ir-guest-billing td.sc-ir-guest-billing {   border-top: 0;   border-bottom: 1px solid var(--wa-color-neutral-border-quiet, #abaeb9);    transition:     color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out; }  .table.sc-ir-guest-billing tbody.sc-ir-guest-billing tr.sc-ir-guest-billing:last-child > td.sc-ir-guest-billing {   border-bottom: 0 !important; }  .cell--align-start.sc-ir-guest-billing {   text-align: start !important; }  .cell--align-center.sc-ir-guest-billing {   text-align: center !important; }  .cell--align-end.sc-ir-guest-billing {   text-align: end !important; }      .table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sc-ir-guest-billing {   border: none !important;   background: color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);   color: var(--wa-color-neutral-on-quiet);   padding: 0.5rem 1rem !important;   text-align: start; }  .data-table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sc-ir-guest-billing {   box-sizing: border-box;   background: var(--wa-color-surface-default) !important;   padding-top: 0.5rem !important;   padding-bottom: 0.5rem !important;    border-bottom: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;    color: var(--wa-color-text-normal); }   .empty-row.sc-ir-guest-billing {   height: 50vh !important;   text-align: center;   color: var(--wa-color-gray-60); }    .sortable.sc-ir-guest-billing, .ir-table-row.sc-ir-guest-billing {   transition:     color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out; }  .sortable.sc-ir-guest-billing {   text-transform: capitalize;   cursor: pointer; }  .table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sortable.sc-ir-guest-billing {   transition-property: background, border, box-shadow, color;    transition-duration: var(--wa-transition-fast);   transition-timing-function: var(--wa-transition-easing); }  .table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sortable.sc-ir-guest-billing:hover {   color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));    background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important; }  .table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sortable.sc-ir-guest-billing:active {   color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));    background-color: color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important; }  .sortable.sc-ir-guest-billing:active {   color: #212529;   background-color: #e2e8f0;   border-color: #d3d9df; }  .sortable.sc-ir-guest-billing svg.sc-ir-guest-billing {   color: var(--wa-color-brand-fill-loud); }      .ir-table-row.sc-ir-guest-billing:hover td.sc-ir-guest-billing {   background: var(--wa-color-neutral-fill-quiet, #f1f2f3) !important; }  .--clickable.ir-table-row.sc-ir-guest-billing:hover td.sc-ir-guest-billing {   background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important; }  .--clickable.ir-table-row.sc-ir-guest-billing:active td.sc-ir-guest-billing {   background-color: color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important; }      .selected.sc-ir-guest-billing td.sc-ir-guest-billing {   background: var(--wa-color-brand-fill-quiet) !important;   border-color: var(--wa-color-neutral-border-quiet) !important;   color: var(--gray-dark) !important;    transition:     color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out; }  .selected.ir-table-row.sc-ir-guest-billing:hover td.sc-ir-guest-billing {   background-color: color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important; }  .selected.ir-table-row.sc-ir-guest-billing:active td.sc-ir-guest-billing {   background-color: color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important; }      .data-table.sc-ir-guest-billing .empty-row.sc-ir-guest-billing {   height: 50vh !important;   text-align: center;   color: var(--wa-color-gray-60); }      .data-table--pagination.sc-ir-guest-billing {   padding: 0.5rem 1rem;   background: var(--wa-color-surface-default);   border-top: 1px solid var(--wa-color-neutral-90); }      .sticky-column.sc-ir-guest-billing {   position: sticky !important;   inset-inline-end: 0;   background-color: var(--wa-color-surface-default, white); }    .sc-ir-guest-billing-h {   display: flex;   flex-direction: column;   height: 100%; } .billing__container.sc-ir-guest-billing {   display: flex;   flex-direction: column;   height: 100%;   gap: var(--wa-space-l);   padding: 0 var(--wa-space-l); } .billing__date-cell.sc-ir-guest-billing {   display: flex;   align-items: baseline;   gap: 0.5rem; } .billing__date-time.sc-ir-guest-billing {   color: var(--wa-color-text-quiet);   margin: 0;   padding: 0;   font-size: var(--wa-font-size-s); } .billing__section-title-row.sc-ir-guest-billing {   display: flex;   align-items: center;   justify-content: space-between;   margin-bottom: 1rem; } .billing__section-title.sc-ir-guest-billing {   margin: 0;   padding: 0;   font-family: var(--wa-font-family-heading);   font-weight: var(--wa-font-weight-heading);   line-height: var(--wa-line-height-condensed);   text-wrap: balance;   font-size: var(--wa-font-size-m); } .billing__actions-row.sc-ir-guest-billing {   display: flex;   align-items: center;   justify-content: center;         gap: 0.5rem; } .billing__invoice-nbr.sc-ir-guest-billing::part(base), .billing__invoice-nbr.sc-ir-guest-billing [part~="base"] {   padding: 0.05rem 0.5rem;   height: auto; }  .billing__doc-number-col.sc-ir-guest-billing {   --ir-cell-padding: 0.5rem; }  th.billing__doc-number-col.sc-ir-guest-billing {   padding: 0.5rem !important; } .billing__price-col.sc-ir-guest-billing {   text-align: end !important; }   .billing__cards.sc-ir-guest-billing {   display: flex;   flex-direction: column;   gap: var(--wa-space-m);   padding-bottom: var(--wa-space-l) !important; }   .billing__card.sc-ir-guest-billing {   display: block; }   .billing__card-header.sc-ir-guest-billing {   display: flex;   justify-content: space-between;   align-items: center;   margin-bottom: 0.5rem; }  .billing__card-header-info.sc-ir-guest-billing {   display: flex;   flex-direction: column; }  .billing__card-number.sc-ir-guest-billing {   margin: 0;   font-weight: var(--wa-font-weight-heading);   font-family: var(--wa-font-family-heading); }  .billing__card-type.sc-ir-guest-billing {   margin: 0;   font-size: var(--wa-font-size-xs);   color: var(--wa-color-text-secondary); }   .billing__card-download-btn.sc-ir-guest-billing {   display: flex;   align-items: center; }   .billing__card-details.sc-ir-guest-billing {   display: flex;      gap: var(--wa-space-xs);   justify-content: space-between; }  .billing__card-detail.sc-ir-guest-billing {   display: flex;   flex-direction: column; }  .billing__card-detail-label.sc-ir-guest-billing {   margin: 0;   font-size: var(--wa-font-size-xs);   color: var(--wa-color-text-quiet); } .billing__card-detail-label.--amount.sc-ir-guest-billing {   text-align: end !important; } .billing__card-detail-value.sc-ir-guest-billing {   margin: 0;   font-weight: var(--wa-font-weight-regular);   font-size: var(--wa-font-size-s); } .billing__card-void-btn.sc-ir-guest-billing {   flex: 1 1 0%; }   .billing__card-footer.sc-ir-guest-billing {   display: flex; } .table-container.sc-ir-guest-billing {   display: none; } .billing__empty-state.sc-ir-guest-billing {   display: flex;   align-items: center;   justify-content: center;   width: 100%;   height: 30vh; } .billing__card.sc-ir-guest-billing::part(footer), .billing__card.sc-ir-guest-billing [part~="footer"] {   padding-top: 1rem;   padding-bottom: 1rem; } .guest-billing__pdf-viewer.sc-ir-guest-billing {   margin-inline-start: auto;   margin-inline-end: auto; }  @media (min-width: 768px) {   .billing__cards.sc-ir-guest-billing {     display: none;   }   .table-container.sc-ir-guest-billing {     display: block;   } } @media print {   .guest-billing__pdf-viewer.sc-ir-guest-billing {     margin: 0;   }   @page {     margin.sc-ir-guest-billing: 0.sc-ir-guest-billing;   }    body.sc-ir-guest-billing {     margin: 0;   } }`;

const IrGuestBilling = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.billingClose = index.createEvent(this, "billingClose");
        this.guestDocumentPreview = index.createEvent(this, "guestDocumentPreview");
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt");
    }
    booking;
    isOpen = null;
    isLoading = 'page';
    invoiceInfo;
    rows = [];
    fdTypes = [];
    voidedInvoices = new Set();
    voidedReceipts = new Set();
    billingClose;
    guestDocumentPreview;
    /** Refreshes the wider booking-details tree. Emit with a Booking payload to skip ir-booking-details' full-page loading spinner. */
    resetBookingEvt;
    bookingService = new booking_service.BookingService();
    setupService = new index$2.SetupService();
    propertyService = new index$3.PropertyService();
    _id = `issue_invoice__btn_${v4.v4()}`;
    voidDialogRef;
    componentWillLoad() {
        this.init();
    }
    async handleInvoiceCreation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.invoiceInfo = { ...e.detail };
        const { rows } = await this.propertyService.getUnifiedFolio(this.buildFolioParams());
        this.rows = rows;
    }
    buildFolioParams() {
        return {
            property_id: calendarData.calendar_data.property.id,
            from_date: null,
            to_date: null,
            target_type: 'GUEST',
            doc_type: null,
            fd_type_code: null,
            doc_number: null,
            agent_id: null,
            guest_id: null,
            booking_number: this.booking.booking_nbr,
            page_index: 0,
            page_size: 500,
            o_Total_Rows: null,
            is_export_to_excel: false,
            Link_excel: '',
        };
    }
    async init() {
        try {
            this.isLoading = 'page';
            const [, fdTypes] = await Promise.all([this.refreshInvoiceAndFolio(), this.setupService.getSetupEntriesByTableName('_FD_TYPE')]);
            this.fdTypes = fdTypes ?? [];
            let voidedReceipts = new Set();
            this.booking.financial.payments?.forEach(payment => {
                if (payment.payment_type?.code === enums.PayTypes.Payment && !payment.is_city_ledger && payment.payment_status?.code === enums.PayStatus.Void) {
                    voidedReceipts.add(payment.receipt_nbr);
                }
            });
            this.voidedReceipts = voidedReceipts;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    async refreshInvoiceAndFolio() {
        const [invoiceInfo, { rows }] = await Promise.all([
            this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr }),
            this.propertyService.getUnifiedFolio(this.buildFolioParams()),
        ]);
        this.invoiceInfo = invoiceInfo;
        let voidedInvoices = new Set();
        this.invoiceInfo.invoices?.forEach(invoice => {
            if (invoice.credit_note) {
                voidedInvoices.add(invoice.nbr);
            }
        });
        this.voidedInvoices = voidedInvoices;
        this.rows = rows;
    }
    async handleDocumentVoided(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.refreshInvoiceAndFolio();
        if (e.detail.documentType === enums.FdTypes.Receipt) {
            const voidedReceipts = new Set(this.voidedReceipts);
            voidedReceipts.add(e.detail.documentNumber);
            this.voidedReceipts = new Set(voidedReceipts);
            // Voiding a receipt changes booking.financial.payments, which this component doesn't own.
            // Pass the freshly fetched booking so ir-booking-details updates in place instead of
            // taking the resetBookingEvt(null) branch, which shows its full-page loading spinner.
            const freshBooking = await this.bookingService.getExposedBooking({ booking_nbr: this.booking.booking_nbr, language: locale_controller.LocaleController.language });
            this.resetBookingEvt.emit(freshBooking);
        }
    }
    get fdTypeLabels() {
        const map = {};
        for (const entry of this.fdTypes) {
            map[entry.CODE_NAME] = utils$1.getEntryValue({ entry, language: locale_controller.LocaleController.language });
        }
        return map;
    }
    get sortedRows() {
        return [...this.rows].sort((a, b) => {
            const aDate = moment.hooks(a.DOC_DATE, 'YYYY-MM-DD');
            const bDate = moment.hooks(b.DOC_DATE, 'YYYY-MM-DD');
            return aDate.diff(bDate);
        });
    }
    printInvoice({ row, autoDownload }) {
        this.guestDocumentPreview.emit({
            documentNumber: row.DOC_NUMBER,
            fdTypeCode: row.FD_TYPE_CODE,
            bookingNumber: this.booking.booking_nbr,
            autoDownload,
        });
    }
    renderMoney(amount) {
        if (!amount) {
            return null;
        }
        return number.formatAmount(calendarData.calendar_data?.property?.currency?.symbol, amount);
    }
    render() {
        if (this.isLoading === 'page') {
            return (index.h("div", { class: "drawer__loader-container" }, index.h("ir-spinner", null)));
        }
        const currencySymbol = this.booking.currency?.symbol ?? '';
        return (index.h(index.Fragment, null, index.h("div", { class: "billing__container" }, index.h("section", null, index.h("div", { class: "billing__section-title-row" }, index.h("h4", { class: "billing__section-title" }, t.t('Lcz_IssuedDocuments', { fallback: 'Issued documents' })), index.h("ir-custom-button", { variant: "brand", id: this._id, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = 'invoice';
            } }, "Issue invoice")), index.h("div", { class: "table-container" }, index.h("table", { class: "table data-table" }, index.h("thead", null, index.h("tr", null, index.h("th", null, t.t('Lcz_DateLabel', { fallback: 'Date' })), index.h("th", { class: "billing__doc-number-col" }, "Doc number"), index.h("th", null, t.t('Lcz_Type', { fallback: 'Type' })), index.h("th", { class: "billing__price-col" }, t.t('Lcz_DebitColumn', { fallback: 'Debit' })), index.h("th", { class: "billing__price-col" }, t.t('Lcz_CreditColumn', { fallback: 'Credit' })), index.h("th", { class: 'text-center' }, t.t('Lcz_Actions', { fallback: 'Actions' })))), index.h("tbody", null, this.sortedRows.length === 0 && (index.h("tr", null, index.h("td", { colSpan: 6, class: "empty-row" }, index.h("ir-empty-state", null)))), this.sortedRows.map(row => {
            const isInvoice = row.FD_TYPE_CODE === enums.FdTypes.Invoice;
            const isReceipt = row.FD_TYPE_CODE === enums.FdTypes.Receipt;
            return (index.h("tr", { class: "ir-table-row", key: row.DOC_NUMBER }, index.h("td", null, row.DOC_DATE ? (index.h("div", { class: "billing__date-cell" }, index.h("p", { class: "m-0 p-0" }, irDate.formatDate(row.DOC_DATE, 'MMM DD, YYYY')), row.DOC_HOUR != null && row.DOC_MINUTE != null && index.h("p", { class: "billing__date-time" }, functions._formatTime(String(row.DOC_HOUR), String(row.DOC_MINUTE))))) : ('—')), index.h("td", { class: "billing__doc-number-col" }, index.h("wa-button", { onClick: () => this.printInvoice({ row }), variant: "brand", appearance: "plain", class: "billing__invoice-nbr" }, number.formatBookingNumber(row.DOC_NUMBER))), index.h("td", null, (row.FD_TYPE_CODE && this.fdTypeLabels[row.FD_TYPE_CODE === 'RFND' ? enums.FdTypes.CreditReceipt : row.FD_TYPE_CODE]) || row.FD_TYPE_CODE || '—'), index.h("td", { class: "billing__price-col" }, index.h("span", { class: "ir-price", style: { fontWeight: '400' } }, this.renderMoney(row.DEBIT))), index.h("td", { class: "billing__price-col" }, index.h("span", { class: "ir-price", style: { fontWeight: '400' } }, this.renderMoney(row.CREDIT))), index.h("td", null, index.h("div", { class: "billing__actions-row" }, index.h("wa-dropdown", { "onwa-hide": e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                }, "onwa-select": async (e) => {
                    switch (e.detail.item.value) {
                        case 'print':
                            this.printInvoice({ row, autoDownload: true });
                            break;
                        case 'view-print':
                            this.printInvoice({ row });
                            break;
                        case 'void':
                            this.voidDialogRef?.open({
                                documentType: isInvoice ? enums.FdTypes.Invoice : enums.FdTypes.Receipt,
                                documentNumber: row.DOC_NUMBER,
                                bookingNumber: this.booking.booking_nbr,
                            });
                            break;
                    }
                } }, index.h("wa-dropdown-item", { value: "view-print" }, t.t('Lcz_OpenPdf', { fallback: 'Open PDF' }), irInterceptor_store.isRequestPending('/Print_Invoice') && index.h("wa-spinner", { slot: "details" })), isInvoice && !this.voidedInvoices.has(row.DOC_NUMBER) && (index.h("wa-dropdown-item", { variant: "danger", value: "void" }, t.t('Lcz_VoidWithCreditNote', { fallback: 'Void with credit note' }))), isReceipt && !this.voidedReceipts.has(row.DOC_NUMBER) && (index.h("wa-dropdown-item", { variant: "danger", value: "void" }, t.t('Lcz_VoidWithCreditReceipt', { fallback: 'Void with credit receipt' }))), index.h("ir-custom-button", { slot: "trigger", id: `pdf-${row.DOC_ID ?? row.DOC_NUMBER}`, variant: "neutral", appearance: "plain" }, index.h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1rem' } })))))));
        })))), index.h("div", { class: "billing__cards" }, this.sortedRows.length === 0 && (index.h("div", { class: "billing__empty-state" }, index.h("ir-empty-state", null))), this.sortedRows.map(row => {
            const isInvoice = row.FD_TYPE_CODE === enums.FdTypes.Invoice;
            return (index.h("wa-card", { key: row.DOC_NUMBER, class: "billing__card" }, index.h("div", { class: "billing__card-header" }, index.h("div", { class: "billing__card-header-info" }, index.h("p", { class: "billing__card-number" }, (row.FD_TYPE_CODE && this.fdTypeLabels[row.FD_TYPE_CODE]) || row.FD_TYPE_CODE || '—', ":", number.formatBookingNumber(row.DOC_NUMBER))), index.h("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } }, index.h("wa-tooltip", { for: `mobile-download-pdf-${row.DOC_ID ?? row.DOC_NUMBER}` }, t.t('Lcz_OpenPdf', { fallback: 'Open PDF' })), index.h("ir-custom-button", { onClickHandler: () => this.printInvoice({ row }), loading: irInterceptor_store.isRequestPending('/Print_Invoice'), id: `mobile-download-pdf-${row.DOC_ID ?? row.DOC_NUMBER}`, variant: "neutral", appearance: "plain", class: "billing__card-download-btn" }, index.h("wa-icon", { name: "file-pdf", style: { fontSize: '1rem' } })))), index.h("div", { class: "billing__card-details" }, index.h("div", { class: "billing__card-detail" }, index.h("p", { class: "billing__card-detail-label" }, t.t('Lcz_DateLabel', { fallback: 'Date' })), index.h("div", { class: "billing__date-cell" }, index.h("p", { class: "billing__card-detail-value" }, row.DOC_DATE ? irDate.formatDate(row.DOC_DATE, 'MMM DD, YYYY') : '—'), row.DOC_HOUR != null && row.DOC_MINUTE != null && index.h("p", { class: "billing__date-time" }, functions._formatTime(String(row.DOC_HOUR), String(row.DOC_MINUTE))))), index.h("div", { class: "billing__card-detail" }, index.h("p", { class: "billing__card-detail-label --amount" }, t.t('Lcz_Amount', { fallback: 'Amount' })), index.h("p", { class: "billing__card-detail-value" }, number.formatAmount(currencySymbol, row.TOTAL_AMOUNT ?? 0)))), isInvoice && !this.voidedInvoices.has(row.DOC_NUMBER) && (index.h("div", { slot: "footer", class: "billing__card-footer" }, index.h("ir-custom-button", { onClickHandler: () => {
                    this.voidDialogRef?.open({ documentType: enums.FdTypes.Invoice, documentNumber: row.DOC_NUMBER });
                }, variant: "danger", appearance: "outlined", class: "billing__card-void-btn" }, t.t('Lcz_VoidWithCreditNote', { fallback: 'Void with credit note' }))))));
        })))), index.h("ir-invoice", { invoiceInfo: this.invoiceInfo, onInvoiceClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = null;
            }, open: this.isOpen === 'invoice', booking: this.booking }), index.h("ir-void-document-dialog", { ref: el => (this.voidDialogRef = el), onDocumentVoided: e => this.handleDocumentVoided(e) })));
    }
};
IrGuestBilling.style = irGuestBillingCss();

const irGuestInfoDrawerCss = () => `.sc-ir-guest-info-drawer-h{display:block}`;

const IrGuestInfoDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guestInfoDrawerClosed = index.createEvent(this, "guestInfoDrawerClosed");
        this.guestChanged = index.createEvent(this, "guestChanged");
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt");
    }
    open;
    language = 'en';
    email;
    booking_nbr;
    ticket;
    guestInfoDrawerClosed;
    guestChanged;
    resetBookingEvt;
    get hostElement() { return index.getElement(this); }
    handleDrawerHide = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.guestInfoDrawerClosed.emit({ source: event.detail?.source ?? this.hostElement });
    };
    handleCancel = () => {
        this.guestInfoDrawerClosed.emit({ source: this.hostElement });
    };
    _formId = `guest-details-form_${v4.v4()}`;
    render() {
        const drawerLabel = t.t('Lcz_GuestDetails', { fallback: 'Guest info' });
        return (index.h("ir-drawer", { key: '17d89a9d64b26043083d779626aa37a472fbd1c0', open: this.open, label: drawerLabel, onDrawerHide: this.handleDrawerHide, style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            } }, this.open && (index.h("ir-guest-info-form", { key: '87f1c1bd8875b3373d6b2607d11afb8de574e647', ticket: this.ticket, language: this.language, email: this.email, booking_nbr: this.booking_nbr, fromId: this._formId })), index.h("div", { key: '0f95acf3f0efbeb04c4609f24da7fffc88d601f0', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: 'c7de8ba51c3b162c9d8cbb2e92e80ab23fa92d4a', size: "m", appearance: "filled", variant: "neutral", type: "button", onClickHandler: this.handleCancel }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '25b16a6851d5f79cd17913179750344dfedeca5c', type: "submit", form: this._formId, size: "m", variant: "brand", loading: irInterceptor_store.isRequestPending('/Edit_Exposed_Guest') }, t.t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrGuestInfoDrawer.style = irGuestInfoDrawerCss();

const nonEmptyString = (message) => types.stringType().trim().min(1, message);
const optionalEmailSchema = types.stringType().trim().email('Enter a valid email address').or(types.literalType('')).optional().nullable();
const guestInfoFormSchema = types.objectType({
    first_name: nonEmptyString('First name is required'),
    last_name: nonEmptyString('Last name is required'),
    email: nonEmptyString('Email is required').email('Enter a valid email address'),
    alternative_email: optionalEmailSchema,
    country_id: types.numberType({ required_error: 'Country is required' }).int('Country is required').positive('Country is required'),
    mobile: nonEmptyString('Mobile number is required').min(5, 'Mobile number is too short'),
    country_phone_prefix: nonEmptyString('Country code is required'),
    notes: types.stringType().max(2000, 'Private note cannot exceed 2000 characters').optional(),
});

const irGuestInfoFormCss = () => `.sc-ir-guest-info-form-h{height:100%;display:flex;flex-direction:column}.guest-form__container.sc-ir-guest-info-form{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}`;

const IrGuestInfoForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guestInfoDrawerClosed = index.createEvent(this, "guestInfoDrawerClosed");
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt");
        this.toast = index.createEvent(this, "toast");
        this.guestChanged = index.createEvent(this, "guestChanged");
    }
    fromId;
    language;
    email;
    booking_nbr;
    ticket;
    guest = null;
    countries = [];
    isLoading = true;
    autoValidate = false;
    guestInfoDrawerClosed;
    resetBookingEvt;
    toast;
    guestChanged;
    bookingService = new booking_service.BookingService();
    ApiClient = new ApiClient.ApiClient();
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.guestInfo, () => this.init());
    componentWillLoad() {
        if (this.ticket) {
            this.ApiClient.setApiClient(this.ticket);
        }
        if (!!this.ApiClient.getToken()) {
            this.init();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.ApiClient.setApiClient(this.ticket);
    }
    handleInputChange(params) {
        this.guest = { ...this.guest, ...params };
    }
    async init() {
        try {
            this.isLoading = true;
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.guestInfo });
            const [guest, countries] = await Promise.all([this.bookingService.fetchGuest(this.email), this.bookingService.getCountries(locale_controller.LocaleController.language), localeReady]);
            this.countries = countries;
            let _g = {
                ...guest,
                email: guest.email
                    .toLowerCase()
                    .replace(/\s+/g, '') // remove all whitespace
                    .replace(/[^a-z0-9@._'+\-]/g, '') // remove chars not allowed by EMAIL_REGEX
                    .replace(/\.{2,}/g, '.') // collapse multiple dots
                    .replace(/@\./, '@') // remove dot right after @
                    .trim(),
            };
            if (_g && !_g.country_phone_prefix) {
                const country = this.countries.find(c => c.id === _g.country_id);
                console.log({ country });
                if (country) {
                    _g = { ..._g, country_phone_prefix: country?.phone_prefix };
                }
            }
            this.guest = guest ? { ..._g, mobile: guest.mobile_without_prefix } : null;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async editGuest() {
        try {
            this.autoValidate = true;
            guestInfoFormSchema.parse(this.guest);
            await this.bookingService.editExposedGuest(this.guest, this.booking_nbr ?? null);
            this.toast.emit({
                type: 'success',
                description: '',
                title: t.t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }),
                position: 'top-right',
            });
            this.resetBookingEvt.emit(null);
            this.guestChanged.emit(this.guest);
            this.guestInfoDrawerClosed.emit({ source: null });
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        if (this.isLoading) {
            return (index.h("div", { class: 'drawer__loader-container' }, index.h("ir-spinner", null)));
        }
        return (index.h("form", { id: this.fromId, onSubmit: e => {
                e.preventDefault();
                this.editGuest();
            }, class: "guest-form__container" }, index.h("ir-validator", { schema: guestInfoFormSchema.shape.first_name, value: this.guest?.first_name ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, index.h("ir-input", { id: 'firstName', value: this.guest?.first_name, defaultValue: this.guest?.first_name, required: true, "onText-change": e => this.handleInputChange({ first_name: e.detail.trim() }), label: t.t('Lcz_FirstName', { fallback: 'First name' }) })), index.h("ir-validator", { schema: guestInfoFormSchema.shape.last_name, value: this.guest?.last_name ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, index.h("ir-input", { value: this.guest?.last_name, required: true, defaultValue: this.guest?.last_name, id: "lastName", "onText-change": e => this.handleInputChange({ last_name: e.detail.trim() }), label: t.t('Lcz_LastName', { fallback: 'Last name' }) })), index.h("ir-validator", { schema: guestInfoFormSchema.shape.email, value: this.guest?.email ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, index.h("ir-input", { label: t.t('Lcz_Email', { fallback: 'Email' }), id: "email", defaultValue: this.guest?.email, value: this.guest?.email, required: true, mask: "email", "onText-change": e => {
                this.handleInputChange({ email: e.detail });
            } })), index.h("ir-validator", { schema: guestInfoFormSchema.shape.alternative_email, value: this.guest?.alternative_email ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, index.h("ir-input", { label: t.t('Lcz_AlternativeEmail', { fallback: 'Alternative email' }), id: "altEmail", value: this.guest?.alternative_email, mask: "email", "onText-change": e => {
                this.handleInputChange({ alternative_email: e.detail });
            } })), index.h("ir-validator", { schema: guestInfoFormSchema.shape.country_id, value: this.guest?.country_id ?? undefined, autovalidate: this.autoValidate, valueEvent: "countryChange" }, index.h("ir-country-picker", { size: "s", variant: "modern", country: this.countries.find(c => c.id === this.guest?.country_id), label: t.t('Lcz_Country', { fallback: 'Country' }), onCountryChange: e => {
                const country = e.detail;
                let params = { country_id: country.id };
                if (!this.guest?.mobile) {
                    params = { ...params, country_phone_prefix: country.phone_prefix };
                }
                this.handleInputChange(params);
            }, countries: this.countries })), index.h("ir-validator", { schema: types.objectType({ mobile: guestInfoFormSchema.shape.mobile, phone_prefix: guestInfoFormSchema.shape.country_phone_prefix }), value: { mobile: this.guest?.mobile ?? '', phone_prefix: this.guest?.country_phone_prefix }, autovalidate: this.autoValidate, valueEvent: "mobile-input-change" }, index.h("ir-mobile-input", { size: "s", "onMobile-input-change": e => {
                this.handleInputChange({ mobile: e.detail.formattedValue.trim() });
            }, "aria-invalid": 'true', "onMobile-input-country-change": e => this.handleInputChange({ country_phone_prefix: e.detail.phone_prefix }), value: this.guest?.mobile ?? '', required: true, countryCode: this.countries.find(c => c.phone_prefix?.toString() === this.guest?.country_phone_prefix?.toString())?.code, countries: this.countries })), index.h("ir-validator", { schema: guestInfoFormSchema.shape.notes, value: this.guest?.notes ?? '', autovalidate: this.autoValidate, valueEvent: "wa-change change input", blurEvent: "wa-blur blur" }, index.h("wa-textarea", { size: "s", onchange: e => this.handleInputChange({ notes: e.target.value }), value: this.guest?.notes ?? '', label: t.t('Lcz_PrivateNote', { fallback: 'Private note' }) }))));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrGuestInfoForm.style = irGuestInfoFormCss();

const irHbPreferenceDialogCss = () => `.sc-ir-hb-preference-dialog-h{display:block}`;

const IrHbPreferenceDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.hbPreferenceClose = index.createEvent(this, "hbPreferenceClose");
    }
    /** Room whose half-board preference is being changed. */
    room;
    /** Controls dialog visibility. */
    open;
    selectedValue = null;
    isLoading = false;
    /**
     * Fired when the dialog closes.
     * `saved: true` → preference was persisted; `saved: false` → user cancelled.
     */
    hbPreferenceClose;
    bookingService = new booking_service.BookingService();
    dialogRef;
    closedBySave = false;
    async handleConfirm(e) {
        e.stopImmediatePropagation();
        if (!this.selectedValue)
            return;
        try {
            this.isLoading = true;
            await this.bookingService.setHbPreference({
                property_id: calendarData.calendar_data.property.id,
                room_identifier: this.room.identifier,
                code: this.selectedValue,
            });
            this.closedBySave = true;
            this.dialogRef?.closeModal();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (index.h("ir-dialog", { key: 'c229aa0ab62d82cd9832a8b24ff58309d0c18d94', open: this.open, label: t.t('Lcz_HalfBoard2ndMealPreference', { fallback: 'Half-board 2nd Meal Preference' }), ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.preventDefault();
                const saved = this.closedBySave;
                this.hbPreferenceClose.emit({ saved });
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closedBySave = false;
                this.selectedValue = null;
            } }, index.h("wa-radio-group", { key: '74938637e5ac59c51ce802c6869703e908d130e2', value: this.selectedValue ?? '', onchange: e => (this.selectedValue = e.target.value) }, index.h("wa-radio", { key: 'd65b66aee3f584206b321ef79333f5657b2bb858', value: enums.HbPreference.Lunch }, t.t('Lcz_Lunch', { fallback: 'Lunch' })), index.h("wa-radio", { key: 'c3fca9682f6991ce5d4652a28a4d7b59954f68d4', value: enums.HbPreference.Dinner }, t.t('Lcz_Dinner', { fallback: 'Dinner' }))), index.h("div", { key: '27524b5c40aee801ec243cd5a43c841b2aa9c903', slot: "footer", class: 'ir-dialog__footer' }, index.h("ir-custom-button", { key: 'def94123686c340f160c5fa9f35fbe6bc655e3d3', size: "m", variant: "neutral", appearance: "filled", "data-dialog": "close" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: 'fee3c44885156d734fd166f0316bad3edd0022a8', size: "m", variant: "brand", loading: this.isLoading, disabled: !this.selectedValue, onClickHandler: e => this.handleConfirm(e), appearance: "accent" }, t.t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
};
IrHbPreferenceDialog.style = irHbPreferenceDialogCss();

const irPaymentAnalyticsCss = () => `.sc-ir-payment-analytics-h{display:block}.dp-effect-callout.sc-ir-payment-analytics{width:fit-content;max-width:100%;padding:0.4em 0.65em !important}.dp-effect-callout.sc-ir-payment-analytics::part(icon),.dp-effect-callout.sc-ir-payment-analytics [part~="icon"]{font-size:1em}.dp-effect-icon.sc-ir-payment-analytics{margin-inline-end:0.4em !important}.booking-dp-effect.sc-ir-payment-analytics{display:flex;flex-direction:row;gap:1rem;align-items:center;padding:0}.booking-dp-effect__label.sc-ir-payment-analytics{margin:0;color:var(--color-text-secondary);font-size:0.6875rem}.booking-dp-effect__value.sc-ir-payment-analytics{display:inline-flex;align-items:center;gap:0.3rem;margin:0;font-size:0.9375rem;font-weight:700;font-variant-numeric:tabular-nums;color:var(--color-text-primary);white-space:nowrap}.booking-dp-effect__value.--loss.sc-ir-payment-analytics{color:var(--wa-color-danger-fill-loud)}.booking-dp-effect__value.--gain.sc-ir-payment-analytics{color:var(--wa-color-success-fill-loud)}.booking-dp-effect__trend-icon.sc-ir-payment-analytics{font-size:0.9em}.dp-effect-icon.sc-ir-payment-analytics{transform-origin:center;animation:dp-effect-icon-sparkle 2.4s ease-in-out infinite}@keyframes dp-effect-icon-sparkle{0%,100%{transform:scale(1) rotate(0deg)}50%{transform:scale(1.18) rotate(-10deg)}}.dp-effect-callout.--gain.sc-ir-payment-analytics{animation:dp-effect-glow 1.4s ease-out;border-radius:var(--wa-border-radius-m, 0.5rem)}@keyframes dp-effect-glow{0%{box-shadow:0 0 0 0 color-mix(in oklab, var(--wa-color-success-fill-loud) 45%, transparent)}70%{box-shadow:0 0 0 0.75rem color-mix(in oklab, var(--wa-color-success-fill-loud) 0%, transparent)}100%{box-shadow:0 0 0 0 transparent}}@media (prefers-reduced-motion: reduce){.dp-effect-icon.sc-ir-payment-analytics,.dp-effect-callout.--gain.sc-ir-payment-analytics{animation:none}}`;

const COUNT_UP_DURATION_MS = 700;
/** Cubic ease-out — starts fast, settles gently instead of stopping abruptly. */
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const IrPaymentAnalytics = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    displayedValue = 0;
    animationFrameId;
    componentWillLoad() {
        this.runCountUp();
    }
    onBookingChange() {
        this.runCountUp();
    }
    disconnectedCallback() {
        if (this.animationFrameId !== undefined) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }
    runCountUp() {
        if (this.animationFrameId !== undefined) {
            cancelAnimationFrame(this.animationFrameId);
        }
        const target = this.booking.dp_effect;
        const start = performance.now();
        const step = (now) => {
            const progress = Math.min((now - start) / COUNT_UP_DURATION_MS, 1);
            this.displayedValue = target * easeOutCubic(progress);
            if (progress < 1) {
                this.animationFrameId = requestAnimationFrame(step);
            }
            else {
                this.displayedValue = target;
                this.animationFrameId = undefined;
            }
        };
        this.animationFrameId = requestAnimationFrame(step);
    }
    getTone() {
        const { dp_effect } = this.booking;
        if (dp_effect === 0) {
            return 'neutral';
        }
        return dp_effect < 0 ? 'loss' : 'gain';
    }
    render() {
        const tone = this.getTone();
        const calloutVariant = tone === 'gain' ? 'success' : tone === 'loss' ? 'danger' : 'neutral';
        const trendIcon = tone === 'gain' ? 'arrow-trend-up' : tone === 'loss' ? 'arrow-trend-down' : 'minus';
        return (index.h(index.Host, { key: '307808fcac3fa462ec6437e3e41fb7425e19e7ee' }, index.h("wa-tooltip", { key: '104b2600f00b85982a622b4157d5e64ba8934cbe', for: `dp-effect-callout-${this.booking?.booking_nbr}` }, t.t('Lcz_DynamicPricingEffectTooltip', {
            fallback: 'The dynamic pricing effect is calculated at the time the booking is created and remains fixed thereafter, serving as an indicator of the additional profit generated or of the incentive price reduction.',
        })), index.h("wa-callout", { key: 'a21f3cf610550f31c60c92e6afba61b0cf428297', id: `dp-effect-callout-${this.booking?.booking_nbr}`, class: `dp-effect-callout --${tone}`, variant: calloutVariant, size: "small" }, index.h("wa-icon", { key: '82817bf9e998493a98f8ec09428fd6ce9c3dd041', class: "dp-effect-icon", slot: "icon", name: "wand-magic-sparkles" }), index.h("div", { key: '231862f5ea2ca0ec35f4139e9f5ef0fdfd502bd2', class: "booking-dp-effect" }, index.h("p", { key: '03ae468cf0642132259fa91bd3b93084a50f4070', class: "booking-dp-effect__label" }, calendarData.isOptimReadOnly()
            ? t.t('Lcz_DynamicPricingLostProfit', { fallback: 'Dynamic pricing lost profit' })
            : t.t('Lcz_DynamicPricingEffect', { fallback: 'Dynamic pricing effect' })), index.h("p", { key: 'bb9620f3b1553d33075d2509fa3cf5ac4f687bb6', class: `booking-dp-effect__value --${tone}` }, index.h("span", { key: 'fe48ffb0f25f437adcfcc066f0b492144112b260' }, number.formatAmount(calendarData.calendar_data.property.currency.symbol, this.displayedValue)), index.h("wa-icon", { key: 'f16b9ed00e7a61d9b59934a28ea05a7840c19f18', class: "booking-dp-effect__trend-icon", name: trendIcon }))))));
    }
    static get watchers() { return {
        "booking": [{
                "onBookingChange": 0
            }]
    }; }
};
IrPaymentAnalytics.style = irPaymentAnalyticsCss();

const irPaymentDetailsCss = () => `.sc-ir-payment-details-h{font-family:'Open Sans',     -apple-system,     BlinkMacSystemFont,     'Segoe UI',     Roboto,     'Helvetica Neue',     Arial,     sans-serif !important}.sc-ir-payment-details-h *.sc-ir-payment-details{font-family:'Open Sans',     -apple-system,     BlinkMacSystemFont,     'Segoe UI',     Roboto,     'Helvetica Neue',     Arial,     sans-serif !important}.payment-details__card.sc-ir-payment-details{background-color:var(--wa-color-surface-default)}.sm-margin-right.sc-ir-payment-details{margin-inline-end:5px !important;background:#000}.action_icons.sc-ir-payment-details{width:60px}.w-60.sc-ir-payment-details{width:100px;padding:0 5px}.payments-height.sc-ir-payment-details{height:30px}.payment_date.sc-ir-payment-details{width:100px}.iframeHeight.sc-ir-payment-details{height:max-content;height:22.5rem}.designation.sc-ir-payment-details{width:120px}.total-cost-container.sc-ir-payment-details{background:#7cbebe;color:white;padding:0.5rem;border-radius:5px}`;

const IrPaymentDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt");
        this.resetExposedCancellationDueAmount = index.createEvent(this, "resetExposedCancellationDueAmount");
        this.toast = index.createEvent(this, "toast");
        this.openSidebar = index.createEvent(this, "openSidebar");
        this.openPrintScreen = index.createEvent(this, "openPrintScreen");
        this.guestDocumentPreview = index.createEvent(this, "guestDocumentPreview");
    }
    booking;
    paymentActions;
    propertyId;
    paymentEntries;
    language = 'en';
    svcCategories;
    isAllServicesAgentOwned = false;
    agent;
    folioRows = [];
    clLoading = false;
    clError = null;
    clTransactions = [];
    confirmModal = false;
    toBeDeletedItem = null;
    modalMode = null;
    isLoading = false;
    resetBookingEvt;
    resetExposedCancellationDueAmount;
    toast;
    openSidebar;
    openPrintScreen;
    /** Opens an existing guest document (e.g. receipt) in the shared in-app preview. */
    guestDocumentPreview;
    paymentService = new payment_service.PaymentService();
    bookingService = new booking_service.BookingService();
    dialogRef;
    voidDialogRef;
    handlePaymentGeneration(e) {
        const value = e.detail;
        const paymentType = this.paymentEntries?.types?.find(p => p.CODE_NAME === (this.booking.status.code === '003' ? value.pay_type_code : '001'));
        this.openSidebar.emit({
            type: 'payment-folio',
            payload: {
                payment: {
                    ...value,
                    date: moment.hooks().format('YYYY-MM-DD'),
                    id: -1,
                    amount: value.amount,
                    payment_type: paymentType
                        ? {
                            code: paymentType.CODE_NAME,
                            description: paymentType.CODE_VALUE_EN,
                            operation: paymentType.NOTES,
                        }
                        : null,
                    designation: paymentType?.CODE_VALUE_EN ?? null,
                },
                mode: 'payment-action',
            },
        });
    }
    handleAddPayment = (props) => {
        let payment = {
            id: -1,
            date: moment.hooks().format('YYYY-MM-DD'),
            amount: null,
            currency: calendarData.calendar_data.currency,
            designation: null,
            reference: null,
        };
        if (props) {
            const { amount, type } = props;
            const cashMethod = this.paymentEntries.methods.find(pt => pt.CODE_NAME === '001');
            const payment_method = {
                code: cashMethod.CODE_NAME,
                description: cashMethod.CODE_VALUE_EN,
                operation: cashMethod.NOTES,
            };
            const paymentType = this.paymentEntries.types.find(pt => pt.CODE_NAME === (type === 'cancellation-penalty' ? '001' : '010'));
            payment = {
                ...payment,
                amount: amount,
                designation: paymentType.CODE_VALUE_EN,
                payment_type: {
                    code: paymentType.CODE_NAME,
                    description: paymentType.CODE_VALUE_EN,
                    operation: paymentType.NOTES,
                },
                payment_method: type === 'refund' ? undefined : payment_method,
            };
            this.openSidebar.emit({
                type: 'payment-folio',
                payload: {
                    payment,
                    mode: 'payment-action',
                },
            });
            return;
        }
        this.openSidebar.emit({
            type: 'payment-folio',
            payload: {
                payment,
                mode: 'new',
            },
        });
    };
    handleEditPayment(payment) {
        this.openSidebar.emit({
            type: 'payment-folio',
            payload: { payment, mode: 'edit' },
        });
    }
    handleDeletePayment(payment) {
        this.modalMode = 'delete';
        this.toBeDeletedItem = payment;
        this.dialogRef.openModal();
    }
    async handleIssueReceipt(detail) {
        const { receipt_nbr, credit_receipt_nbr, payment_type } = detail;
        if (receipt_nbr || credit_receipt_nbr) {
            this.guestDocumentPreview.emit({
                documentNumber: payment_type?.code === enums.PayTypes.Payment ? receipt_nbr : [enums.PayTypes.CreditReceipt, enums.PayTypes.Refund].includes(payment_type?.code) ? credit_receipt_nbr : null,
                fdTypeCode: payment_type?.code === enums.PayTypes.Payment ? enums.FdTypes.Receipt : payment_type?.code === enums.PayTypes.Refund ? enums.FdTypes.Refund : enums.FdTypes.CreditReceipt,
                bookingNumber: this.booking.booking_nbr,
            });
            return;
        }
        // Issuing a brand-new receipt still uses the legacy print flow, which both
        // creates and renders the receipt.
        const starter = calendarData.calendar_data.property.company?.receipt_prefix ? calendarData.calendar_data.property.company?.receipt_prefix + '-' : '';
        const _number = await this.bookingService.getNextValue({ starter: `${starter}${calendarData.calendar_data.property.aname}` });
        this.openPrintScreen.emit({
            mode: 'receipt',
            payload: {
                pid: detail.system_id?.toString(),
                rnb: `${starter}${_number.My_Result}`,
            },
        });
    }
    handleVoidReceipt(payment) {
        if (!payment.receipt_nbr) {
            return;
        }
        this.voidDialogRef?.open({ documentType: enums.FdTypes.Receipt, documentNumber: payment.receipt_nbr, bookingNumber: this.booking.booking_nbr });
    }
    async handleDocumentVoided(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.resetBookingEvt.emit(null);
    }
    async cancelPayment() {
        try {
            this.isLoading = true;
            await this.paymentService.CancelPayment(this.toBeDeletedItem.system_id);
            const newPaymentArray = this.booking.financial.payments.filter((item) => item.id !== this.toBeDeletedItem.id);
            this.booking = {
                ...this.booking,
                financial: { ...this.booking.financial, payments: newPaymentArray },
            };
            this.dialogRef.closeModal();
            this.confirmModal = false;
            this.resetBookingEvt.emit(null);
            this.resetExposedCancellationDueAmount.emit(null);
            this.toBeDeletedItem = null;
        }
        catch (error) {
            console.error('Error canceling payment:', error);
            this.toast.emit({
                type: 'error',
                title: t.t('Lcz_Error', { fallback: 'Error' }),
                description: t.t('Lcz_FailedToCancelPayment', { fallback: 'Failed to cancel payment. Please try again.' }),
                position: 'top-right',
            });
        }
        finally {
            this.isLoading = false;
        }
    }
    handleConfirmModal = async (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.modalMode === 'delete') {
            await this.cancelPayment();
        }
    };
    handleCancelModal = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modalMode = null;
        this.toBeDeletedItem = null;
    };
    hasValidFinancialData() {
        return Boolean(this.booking?.financial);
    }
    // private shouldShowPaymentActions(): boolean {
    //   return Boolean(this.paymentActions?.filter(pa => pa.amount !== 0).length > 0 && this.booking.is_direct);
    // }
    shouldShowRefundButton() {
        if (!this.booking.is_direct) {
            return false;
        }
        if (this.booking.financial.due_amount === 0) {
            return false;
        }
        if (this.booking.financial.cancelation_penality_as_if_today === 0) {
            return false;
        }
        if (this.booking.is_requested_to_cancel || ['003', '004'].includes(this.booking.status.code)) {
            return this.booking.financial.cancelation_penality_as_if_today < 0;
        }
        return false;
    }
    shouldCancellationButton() {
        if (!this.booking.is_direct) {
            return false;
        }
        if (this.booking.guest_financial.due_amount === 0) {
            return false;
        }
        if (this.booking.financial.cancelation_penality_as_if_today === 0) {
            return false;
        }
        if (['003', '004'].includes(this.booking.status.code) && this.booking.financial.cancelation_penality_as_if_today > 0) {
            return true;
        }
        return false;
    }
    render() {
        if (!this.hasValidFinancialData()) {
            return null;
        }
        const { financial, currency } = this.booking;
        return [
            index.h("wa-card", { appearance: "plain", class: "payment-details__card" }, index.h("ir-payment-summary", { clTransactions: this.clTransactions, isAllServicesAgentOwned: this.isAllServicesAgentOwned, booking: this.booking, agent: this.agent, isBookingCancelled: ['003', '004'].includes(this.booking.status.code), totalCost: financial.gross_cost, balance: financial.due_amount, collected: financial.collected + financial.refunds, currency: currency }), index.h("ir-booking-guarantee", { booking: this.booking, bookingService: this.bookingService }), !['003', '004'].includes(this.booking.status.code) && this.booking.is_direct && (index.h("ir-applicable-policies", { propertyId: this.propertyId, booking: this.booking })), this.shouldShowRefundButton() && (index.h("div", { class: "d-flex mt-1" }, index.h("ir-custom-button", { variant: "brand", appearance: "outlined", onClickHandler: () => {
                    this.handleAddPayment({ type: 'refund', amount: Math.abs(this.booking.financial.cancelation_penality_as_if_today) });
                } }, t.t('Lcz_RefundAmount', { fallback: 'Refund %1', params: [number.formatAmount(currency.symbol, Math.abs(this.booking.financial.cancelation_penality_as_if_today))] })))), this.shouldCancellationButton() && (index.h("div", { class: "d-flex mt-1" }, index.h("ir-custom-button", { variant: "brand", appearance: "outlined", onClickHandler: () => {
                    this.handleAddPayment({ type: 'cancellation-penalty', amount: Math.abs(this.booking.financial.cancelation_penality_as_if_today) });
                } }, t.t('Lcz_ChargeCancellationPenalty', {
                fallback: 'Charge cancellation penalty %1',
                params: [number.formatAmount(currency.symbol, this.booking.financial.cancelation_penality_as_if_today)],
            }))))),
            functions.isAgentMode(this.agent) && (index.h("ir-booking-city-ledger", { booking: this.booking, language: this.language, svcCategories: this.svcCategories, folioRows: this.folioRows, isLoading: this.clLoading, error: this.clError })),
            index.h("ir-payments-folio", { booking: this.booking, payments: (financial.payments || []).filter(p => !p.is_city_ledger), isAddPaymentDisabled: this.isAllServicesAgentOwned, onAddPayment: () => this.handleAddPayment(), onEditPayment: e => this.handleEditPayment(e.detail), onDeletePayment: e => this.handleDeletePayment(e.detail), onIssueReceipt: e => this.handleIssueReceipt(e.detail), onVoidReceipt: e => this.handleVoidReceipt(e.detail) }),
            index.h("ir-void-document-dialog", { ref: el => (this.voidDialogRef = el), onDocumentVoided: e => this.handleDocumentVoided(e) }),
            index.h("ir-dialog", { onIrDialogHide: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                }, onIrDialogAfterHide: e => {
                    this.handleCancelModal(e);
                }, ref: el => (this.dialogRef = el), label: t.t('Lcz_Alert', { fallback: 'Alert' }), lightDismiss: this.modalMode !== 'delete' }, index.h("p", null, this.modalMode === 'delete' ? t.t('Lcz_IfDeletedPermantlyLost') : t.t('Lcz_EnteringAmountGreaterThanDue')), index.h("div", { slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { size: "m", "data-dialog": "close", variant: "neutral", appearance: "filled" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { loading: this.isLoading, size: "m", onClickHandler: e => this.handleConfirmModal(e), variant: this.modalMode === 'delete' ? 'danger' : 'brand' }, this.modalMode === 'delete' ? t.t('Lcz_Delete', { fallback: 'Delete' }) : t.t('Lcz_Confirm', { fallback: 'Confirm' })))),
        ];
    }
};
IrPaymentDetails.style = irPaymentDetailsCss();

const irPaymentFolioCss = () => `.sc-ir-payment-folio-h{display:block;--payment-type-badge-bg:#ff4961;text-align:start}.payment-type-badge.sc-ir-payment-folio{background:var(--payment-type-badge-bg);color:white;padding:0.2rem 0.3rem !important;font-size:12px;border-radius:4px;margin:0;text-transform:capitalize}.credit-badge.sc-ir-payment-folio{--payment-type-badge-bg:#629a4c}.debit-badge.sc-ir-payment-folio{--payment-type-badge-bg:#ff4961}.dropdown-item-payment.sc-ir-payment-folio{display:flex;align-items:center;gap:1rem;box-sizing:border-box;justify-content:space-between}.input-group-text.sc-ir-payment-folio{border-color:#cacfe7 !important}.payment-folio__payment-type-option.sc-ir-payment-folio{display:flex;align-items:center;justify-content:space-between}.payment-folio__form.sc-ir-payment-folio{display:grid;gap:var(--wa-space-m, 1rem)}`;

const DATE_FORMAT$1 = 'YYYY-MM-DD';
const IrPaymentFolio = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal");
    }
    /**
     * The list of existing payment or folio entries associated with the booking.
     * Used by the folio form to determine validation rules, available actions,
     * and how the new or edited entry should be inserted or updated.
     */
    paymentEntries;
    /**
     * The booking reference number associated with this folio operation.
     * Passed down to the folio form so the payment entry is linked to the
     * correct reservation when saving.
     */
    bookingNumber;
    /**
     * The full booking object associated with this folio.
     * Provides contextual reservation data required by the folio form.
     */
    booking;
    /**
     * The payment or folio entry being created or edited.
     * Defaults to a new empty payment object when the component
     * is used for creating a new entry.
     */
    payment = {
        date: moment.hooks().format(DATE_FORMAT$1),
        amount: 0,
        designation: undefined,
        currency: null,
        reference: null,
        id: -1,
    };
    /**
     * Determines how the folio entry should behave or be displayed.
     * Typical modes include creating a new entry, editing an existing one,
     * or other folio-specific workflows.
     */
    mode;
    isLoading = null;
    isOpen;
    /**
     * Emitted when the folio drawer should be closed.
     * Fired whenever the user cancels, the form requests closing,
     * or the drawer itself is hidden. Consumers listen for this event
     * to know when the folio UI has been dismissed.
     */
    closeModal;
    /**
     * Opens the folio drawer.
     * This method can be called externally on the component instance
     * to programmatically display the folio form.
     */
    async openFolio() {
        this.isOpen = true;
    }
    /**
     * Closes the folio drawer and emits the `closeModal` event.
     * Used internally when the user cancels or the form indicates
     * that it has completed its action.
     */
    async closeFolio() {
        this.isOpen = false;
        this.closeModal.emit(null);
    }
    _id = `ir__folio-form-${v4.v4()}`;
    render() {
        // const isNewPayment = this.folioData?.payment_type?.code === '001' && this.folioData.id === -1;
        return (index.h("ir-drawer", { key: 'df1dfda6d49d801a82b21b0536fead8853de5e83', placement: "start", style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: this.payment?.id !== -1 ? t.t('Lcz_EditFolioEntry', { fallback: 'Edit Folio Entry' }) : t.t('Lcz_NewFolioEntry', { fallback: 'New Folio Entry' }), open: this.isOpen, onDrawerHide: event => {
                event.stopImmediatePropagation();
                event.stopPropagation();
                this.closeFolio();
            } }, this.isOpen && (index.h("ir-payment-folio-form", { key: 'b59a1977b89c98fefde0d6e574314012fc0b2fe0', booking: this.booking, formId: this._id, onLoadingChanged: e => (this.isLoading = e.detail), onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeFolio();
            }, paymentEntries: this.paymentEntries, bookingNumber: this.bookingNumber, payment: this.payment, mode: this.mode })), index.h("div", { key: '46fe785a45c41a0f3796a59e8f66288c5733716a', slot: "footer", class: "w-100 d-flex align-items-center", style: { gap: 'var(--wa-space-xs)' } }, index.h("ir-custom-button", { key: '6cee97f9ec3b7101033010932d6487f0266ac210', class: "flex-fill", size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral", onClickHandler: () => this.closeFolio() }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '56271e6c17edc8e83a034df1b7529affcccd4195', form: this._id, loading: this.isLoading === 'save', class: "flex-fill", size: "m", type: "submit", value: "save",
            // appearance={isNewPayment ? 'outlined' : 'accent'}
            appearance: 'accent', variant: "brand" }, t.t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrPaymentFolio.style = irPaymentFolioCss();

const irPaymentFolioFormCss = () => `.sc-ir-payment-folio-form-h{display:block;--payment-type-badge-bg:#ff4961;text-align:start}.payment-type-badge.sc-ir-payment-folio-form{background:var(--payment-type-badge-bg);color:white;padding:0.2rem 0.3rem !important;font-size:12px;border-radius:4px;margin:0;text-transform:capitalize}.credit-badge.sc-ir-payment-folio-form{--payment-type-badge-bg:#629a4c}.debit-badge.sc-ir-payment-folio-form{--payment-type-badge-bg:#ff4961}.dropdown-item-payment.sc-ir-payment-folio-form{display:flex;align-items:center;gap:1rem;box-sizing:border-box;justify-content:space-between}.input-group-text.sc-ir-payment-folio-form{border-color:#cacfe7 !important}.payment-folio__payment-type-option.sc-ir-payment-folio-form{display:flex;align-items:center;justify-content:space-between}.payment-folio__form.sc-ir-payment-folio-form{display:grid;gap:var(--wa-space-m, 1rem)}`;

const DATE_FORMAT = 'YYYY-MM-DD';
const requiresPaymentMethodCode = (code) => {
    if (!code) {
        return false;
    }
    return global_variables.PAYMENT_TYPES_WITH_METHOD.includes(code);
};
const paymentTypeSchema = types.objectType({
    code: types.stringType().min(3).max(4),
    description: types.stringType(),
    operation: types.unionType([types.literalType('CR'), types.literalType('DB')]),
});
const paymentMethodSchema = types.objectType({
    code: types.stringType().min(3).max(4),
    description: types.stringType(),
    operation: types.stringType().optional().nullable(),
});
const folioBaseSchema = types.objectType({
    id: types.numberType().nullable().optional(),
    system_id: types.numberType().nullable().optional(),
    date: types.stringType()
        .regex(/^\d{4}-\d{2}-\d{2}$/)
        .refine(dateStr => {
        const date = moment.hooks(dateStr, DATE_FORMAT, true);
        return date.isValid();
    }, 
    // Lazy: this schema is built at module load, before any locale is fetched.
    () => ({ message: t.t('Lcz_InvalidDate', { fallback: 'Invalid date' }) })),
    amount: types.coerce.number().min(0),
    reference: types.stringType().optional().nullable(),
    payment_type: paymentTypeSchema,
    payment_method: paymentMethodSchema.nullable().optional(),
});
const folioValidationSchema = folioBaseSchema.superRefine((data, ctx) => {
    if (requiresPaymentMethodCode(data.payment_type?.code) && !data.payment_method?.code) {
        ctx.addIssue({
            code: types.ZodIssueCode.custom,
            path: ['payment_method'],
            message: t.t('Lcz_PaymentMethodRequired', { fallback: 'Payment method is required for this transaction type.' }),
        });
    }
});
let folioFormInstanceCounter = 0;
const IrPaymentFolioForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal");
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt");
        this.resetExposedCancellationDueAmount = index.createEvent(this, "resetExposedCancellationDueAmount");
        this.loadingChanged = index.createEvent(this, "loadingChanged");
    }
    booking;
    paymentEntries;
    bookingNumber;
    formId;
    payment = {
        date: moment.hooks().format(DATE_FORMAT),
        amount: 0,
        designation: undefined,
        currency: null,
        reference: null,
        id: -1,
    };
    mode;
    isLoading = null;
    errors = {};
    autoValidate = false;
    folioData;
    _paymentTypes = {};
    closeModal;
    resetBookingEvt;
    resetExposedCancellationDueAmount;
    loadingChanged;
    today = moment.hooks().format(DATE_FORMAT);
    paymentService = new payment_service.PaymentService();
    componentId = `ir-payment-folio-form-${++folioFormInstanceCounter}`;
    controlIds = {
        date: `${this.componentId}-date`,
        transactionType: `${this.componentId}-transaction-type`,
        paymentMethod: `${this.componentId}-payment-method`,
        amount: `${this.componentId}-amount`,
        reference: `${this.componentId}-reference`,
    };
    componentWillLoad() {
        if (this.payment) {
            this.folioData = { ...this.payment };
        }
        this.syncPaymentTypes();
    }
    handlePaymentChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue) {
            this.folioData = { ...newValue };
            this.syncPaymentTypes();
        }
    }
    handlePaymentEntriesChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.syncPaymentTypes();
        }
    }
    updateFolioData(params) {
        this.folioData = { ...(this.folioData ?? {}), ...params };
    }
    requiresPaymentMethod(code) {
        return requiresPaymentMethodCode(code);
    }
    getDefaultPaymentMethod() {
        const method = this.paymentEntries?.methods?.[0];
        if (!method) {
            return null;
        }
        return {
            code: method.CODE_NAME,
            description: method.CODE_VALUE_EN,
            operation: method.NOTES,
        };
    }
    stopEventPropagation(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
    }
    syncPaymentTypes() {
        if (!this.paymentEntries) {
            this._paymentTypes = {};
            return;
        }
        const mappedTypes = buildPaymentTypes(this.paymentEntries);
        if (this.mode === 'payment-action' && this.payment?.payment_type?.code === '001') {
            const { PAYMENTS, CANCELLATION } = mappedTypes;
            this._paymentTypes = { PAYMENTS, CANCELLATION };
            return;
        }
        this._paymentTypes = mappedTypes;
    }
    async savePayment(print = false) {
        try {
            this.isLoading = print ? 'save-print' : 'save';
            this.loadingChanged.emit(this.isLoading);
            this.autoValidate = true;
            this.errors = {};
            console.log({ ...(this.folioData ?? {}), amount: this.folioData?.amount ?? undefined });
            const parsedData = folioValidationSchema.parse({ ...(this.folioData ?? {}), amount: this.folioData?.amount ?? undefined });
            const { payment_type, payment_method, ...rest } = parsedData;
            const payload = {
                ...rest,
                payment_type: payment_type,
                payment_method: payment_method ? payment_method : undefined,
                id: rest.id ?? this.payment?.id ?? -1,
                date: rest.date ?? this.payment?.date ?? this.today,
                system_id: rest.system_id ?? this.payment?.system_id ?? undefined,
                amount: rest.amount ?? 0,
                currency: calendarData.calendar_data.currency,
                reference: rest.reference ?? '',
                designation: payment_type?.description || '',
            };
            await this.paymentService.AddPayment(payload, this.bookingNumber);
            this.resetBookingEvt.emit(null);
            this.resetExposedCancellationDueAmount.emit({ booking_nbr: this.bookingNumber });
            this.closeModal.emit();
        }
        catch (error) {
            const err = {};
            if (error instanceof types.ZodError) {
                error.issues.forEach(e => {
                    const field = e.path[0]?.toString();
                    if (field) {
                        err[field] = true;
                    }
                });
            }
            console.error('Failed to save payment folio entry', error);
            this.errors = err;
        }
        finally {
            this.isLoading = null;
            this.loadingChanged.emit(null);
        }
    }
    handleDropdownChange(value) {
        this.updateFolioData({ designation: value });
        if (!value) {
            this.updateFolioData({
                payment_type: null,
                payment_method: null,
            });
            return;
        }
        const selectedType = this.paymentEntries?.types?.find(pt => pt.CODE_NAME === value);
        if (!selectedType) {
            console.warn(`Invalid payment type ${value}`);
            this.updateFolioData({
                payment_type: null,
                payment_method: null,
            });
            return;
        }
        this.updateFolioData({
            payment_type: {
                code: selectedType.CODE_NAME,
                description: selectedType.CODE_VALUE_EN,
                operation: selectedType.NOTES,
            },
            payment_method: this.requiresPaymentMethod(selectedType.CODE_NAME) ? null : this.getDefaultPaymentMethod(),
        });
    }
    handlePaymentMethodDropdownChange(value) {
        const payment_method = this.paymentEntries?.methods?.find(pt => pt.CODE_NAME === value);
        if (!payment_method) {
            console.warn(`Invalid payment method ${value}`);
            this.updateFolioData({ payment_method: null });
            return;
        }
        this.updateFolioData({
            payment_method: {
                code: payment_method.CODE_NAME,
                description: payment_method.CODE_VALUE_EN,
                operation: payment_method.NOTES,
            },
        });
    }
    renderDropdownItems() {
        const groups = Object.values(this._paymentTypes ?? {});
        if (!groups.length) {
            return null;
        }
        return groups.map((p, idx) => (index.h(index.Fragment, null, p.map(pt => (index.h("wa-option", { key: pt.CODE_NAME, value: pt.CODE_NAME, label: pt.CODE_VALUE_EN }, index.h("div", { class: 'payment-folio__payment-type-option' }, index.h("span", null, pt.CODE_VALUE_EN), index.h("wa-badge", { variant: pt.NOTES === 'CR' ? 'success' : 'danger', style: { fontSize: 'var(--wa-font-size-s)' } }, pt.NOTES === 'CR' ? 'credit' : 'debit'))))), idx !== Object.values(this._paymentTypes).length - 1 && index.h("wa-divider", null))));
    }
    render() {
        // const isNewPayment = this.folioData?.payment_type?.code === '001' && this.folioData.id === -1;
        return (index.h("form", { key: '310a40613f135ced19c84f15b09c964d5c1bfd69', onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                if (submitter?.value === 'save') {
                    this.savePayment();
                }
            }, class: "payment-folio__form", id: this.formId }, index.h("ir-date-select", { key: 'bac6312df186c1851989fc2a267f15a3ba18120c', id: this.controlIds.date, label: t.t('Lcz_DateLabel', { fallback: 'Date' }), "aria-invalid": this.errors?.date && !this.folioData?.date ? 'true' : 'false', "data-testid": "pickup_date", onDateChanged: evt => {
                this.updateFolioData({ date: evt.detail.start?.format(DATE_FORMAT) });
            }, minDate: moment.hooks().add(-2, 'months').format('YYYY-MM-DD'), emitEmptyDate: true, maxDate: this.today, date: this.folioData?.date }), index.h("ir-validator", { key: 'd92187d846a7f2d5c9c730357fca5b884bdad626', value: this.folioData?.payment_type?.code, autovalidate: this.autoValidate, schema: paymentTypeSchema.shape.code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide" }, index.h("wa-select", { key: 'ad1c8216c2a3e5843466e44cee751bcb475efc8d', id: this.controlIds.transactionType, size: "s", "onwa-hide": event => this.stopEventPropagation(event), "onwa-show": event => this.stopEventPropagation(event), placeholder: t.t('Lcz_SelectPlaceholder', { fallback: 'Select...' }), label: t.t('Lcz_TransactionType', { fallback: 'Transaction Type' }), defaultValue: this.folioData?.payment_type?.code, value: this.folioData?.payment_type?.code, disabled: this.mode === 'payment-action', onchange: event => {
                this.stopEventPropagation(event);
                this.handleDropdownChange(event.target.value);
            } }, index.h("wa-option", { key: 'f22cd821e05eaaf5a6885a3094cabdb5d41c38a8', value: "" }, t.t('Lcz_SelectPlaceholder', { fallback: 'Select...' })), this.renderDropdownItems())), this.requiresPaymentMethod(this.folioData?.payment_type?.code) && (index.h("ir-validator", { key: 'cde6de07625fb8304632b43cd029741061ba0b24', value: this.folioData?.payment_method?.code ?? '', autovalidate: this.autoValidate, schema: paymentMethodSchema.shape.code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide" }, index.h("wa-select", { key: 'c6a5ad2c35e15d92ba06c53f0010217130ff97fb', id: this.controlIds.paymentMethod, size: "s", label: this.folioData.payment_type?.code === '001' ? t.t('Lcz_PaymentMethod', { fallback: 'Payment Method' }) : t.t('Lcz_RefundMethodLabel', { fallback: 'Refund method' }), "onwa-show": event => this.stopEventPropagation(event), "onwa-hide": event => this.stopEventPropagation(event), defaultValue: this.folioData?.payment_method?.code, value: this.folioData?.payment_method?.code ?? '', onchange: event => {
                this.stopEventPropagation(event);
                this.handlePaymentMethodDropdownChange(event.target.value);
            } }, index.h("wa-option", { key: '43997fccd12da11aacc47cb616fcdc8e9c41e89c', value: "" }, t.t('Lcz_SelectPlaceholder', { fallback: 'Select...' })), this.paymentEntries?.methods?.map(pt => {
            return (index.h("wa-option", { key: pt.CODE_NAME, label: pt.CODE_VALUE_EN, value: pt.CODE_NAME }, pt.CODE_VALUE_EN));
        })))), index.h("ir-validator", { key: '796c64b659d777c7bc2dce828f5ce9d71c5adb2f', value: this.folioData?.amount?.toString() ?? undefined, autovalidate: this.autoValidate, schema: folioBaseSchema.shape.amount, valueEvent: "text-change input input-change", blurEvent: "input-blur" }, index.h("ir-input", { key: 'f11f85fc961e09157dd5fd663cf7e34fa1f98420', id: this.controlIds.amount, "aria-invalid": String(!!this.errors?.amount), value: this.folioData?.amount?.toString() ?? '', label: t.t('Lcz_Amount', { fallback: 'Amount' }), mask: "price", min: 0, "onText-change": e => this.updateFolioData({ amount: !e.detail ? undefined : Number(e.detail) }) }, index.h("span", { key: 'be825d7ff9022bb97c6410a02b5e98bc1a7d4a67', slot: "start" }, calendarData.calendar_data.currency.symbol))), index.h("ir-validator", { key: 'a33cf89474007c3ac392805883cbc4c0b601c100', value: this.folioData?.reference ?? '', autovalidate: this.autoValidate, schema: folioBaseSchema.shape.reference, valueEvent: "text-change input input-change", blurEvent: "input-blur" }, index.h("ir-input", { key: '18512996bbc483dccfdd0363c92df417eb367611', id: this.controlIds.reference, value: this.folioData?.reference ?? '', label: t.t('Lcz_Reference', { fallback: 'Reference' }), maxlength: 50, "onText-change": e => this.updateFolioData({ reference: e.detail ?? '' }) }))));
    }
    static get watchers() { return {
        "payment": [{
                "handlePaymentChange": 0
            }],
        "paymentEntries": [{
                "handlePaymentEntriesChange": 0
            }]
    }; }
};
IrPaymentFolioForm.style = irPaymentFolioFormCss();

const irPaymentItemCss = () => `.payment-item__payment-item.sc-ir-payment-item{display:flex;flex-direction:column;padding:var(--wa-space-s) var(--wa-space-l);border-bottom:1px solid var(--wa-color-neutral-100, #f4f4f5)}.payment-item__payment-item.sc-ir-payment-item:last-of-type{border-bottom:0}.payment-item__payment-item.sc-ir-payment-item p.sc-ir-payment-item{padding:0;margin:0;box-sizing:border-box}.payment-item__payment-body.sc-ir-payment-item{display:flex;flex-direction:column}.payment-item__payment-fields.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item{display:none}.payment-item__payment-toolbar.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:none}.payment-item__action-button.sc-ir-payment-item{cursor:pointer}.payment-item__payment-amount.sc-ir-payment-item{font-weight:700;white-space:nowrap}.payment-item__payment-amount.is-credit.sc-ir-payment-item{color:var(--wa-color-success-50)}.payment-item__payment-amount.is-debit.sc-ir-payment-item{color:var(--wa-color-danger-50)}.payment-item__payment-reference.sc-ir-payment-item{font-size:12px}.payment-item__action-trigger.sc-ir-payment-item::part(base),.payment-item__action-trigger.sc-ir-payment-item [part~="base"]{height:auto;width:var(--wa-space-s)}.payment-item__action-trigger-icon.sc-ir-payment-item{font-size:1rem}@media (min-width: 640px){.payment-item__payment-item.sc-ir-payment-item{flex-direction:row;align-items:center;gap:1rem}.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-actions.sc-ir-payment-item{display:inline-flex}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:inline-flex}.payment-item__payment-fields.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item,.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-actions.sc-ir-payment-item{display:none}.payment-item__payment-description.sc-ir-payment-item{padding:0 0.5rem !important}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item{display:inline-flex;align-items:center}.payment-item__payment-body.sc-ir-payment-item{flex:1 1 0%;justify-content:flex-start}.payment-item__payment-fields.sc-ir-payment-item{justify-content:flex-start;gap:0.5rem}.payment-item__payment-toolbar.sc-ir-payment-item{gap:0.5rem;align-items:center}}.payment-item__tooltip-label.sc-ir-payment-item{text-transform:capitalize}`;

const IrPaymentItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.editPayment = index.createEvent(this, "editPayment");
        this.deletePayment = index.createEvent(this, "deletePayment");
        this.issueReceipt = index.createEvent(this, "issueReceipt");
        this.voidReceipt = index.createEvent(this, "voidReceipt");
    }
    payment;
    editPayment;
    deletePayment;
    issueReceipt;
    voidReceipt;
    _id = v4.v4();
    render() {
        const isCredit = this.payment.payment_type.operation === 'CR';
        const paymentDescription = (global_variables.PAYMENT_TYPES_WITH_METHOD.includes(this.payment.payment_type?.code)
            ? `${this.payment.payment_type?.description}: ${this.payment.payment_method.description}`
            : this.payment.payment_type.description) ?? this.payment.designation;
        const canEditOrDelete = ![enums.PayTypes.Payment, enums.PayTypes.CreditReceipt, enums.PayTypes.Refund].includes(this.payment.payment_type?.code);
        const canPrint = [enums.PayTypes.Payment, enums.PayTypes.CreditReceipt, enums.PayTypes.Refund].includes(this.payment.payment_type.code);
        return (index.h("div", { key: '4396d44958fee25e0fdfa258421db0394cf83dc0', class: "payment-item__payment-item" }, index.h("div", { key: '9779b0d0faa3a7e70f6d6f0a7b0ea6e19f22846d', class: "payment-item__payment-body", part: "payment-body" }, index.h("div", { key: 'be503b81fd6b79a8be0dd1c756b913658dc8d097', class: "payment-item__payment-fields", part: "payment-fields" }, index.h("p", { key: '6bbb65b88fc9ed0a304fd54882a09bdcb94690af', class: "payment-item__payment-date" }, irDate.formatDate(this.payment.date, 'MMM DD, YYYY')), index.h("p", { key: '754c09e1ccfeefc43715863ea9e70c94e37d021d', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, number.formatAmount(this.payment.currency.symbol, this.payment.amount)), index.h("p", { key: 'c07e256548887ba569d5f0400fbfe6c955084b90', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && index.h("p", { key: '084d32f295816a13ddc3f72e969c390ef0347733', class: "payment-item__payment-reference" }, this.payment?.reference)), index.h("div", { key: 'fc11a872dc03200cdce38fc66e8e49c3251ba8e1', class: "payment-item__payment-toolbar" }, index.h("p", { key: '881ed7c5954de64462090571b4704707d411bfc7', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, number.formatAmount(this.payment.currency.symbol, this.payment.amount)), index.h("p", { key: '30f801f3f4c21fbb43878a4540c5af9946fbbace', class: "payment-item__payment-description" }, paymentDescription), index.h("div", { key: 'b86587ba66663048b054c71014a4f9aa1423ace2', class: "payment-item__payment-actions" }, index.h("div", { key: '64a46989c6552eb1ba6b3d6197062fc59a919de4', class: "d-flex align-items-center" }, index.h("wa-tooltip", { key: 'adcbef3d712db89a67994a387d2a5ab9d6b0fe44', for: this._id }, index.h("span", { key: '68074ac0bc260ea5a1b387eb48d7b880d27a92dd', class: "payment-item__tooltip-label" }, t.t('Lcz_User', { fallback: 'user' })), ': ', this.payment.time_stamp.user), index.h("wa-icon", { key: 'bbdc223b87d19194d8874878121c9857c192d847', name: "user", id: this._id }), index.h("wa-dropdown", { key: '7f675cbf0ff3e55fb6e2c78c4ce46aded520708e', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                switch (e.detail.item.value) {
                    case 'edit':
                        this.editPayment.emit(this.payment);
                        break;
                    case 'delete':
                        this.deletePayment.emit(this.payment);
                        break;
                    case 'receipt':
                        this.issueReceipt.emit(this.payment);
                        break;
                    case 'void-receipt':
                        this.voidReceipt.emit(this.payment);
                        break;
                }
            } }, index.h("wa-button", { key: 'af2890e01fd0f470b804e87f0d7ed979ff15bb96', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, index.h("wa-icon", { key: 'de5893a6b85bd08912582a5ecec7419edad161bc', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (index.h("wa-dropdown-item", { key: '9080d4e5eade3d67a1fd3fad8c70a13c28f8ae22', value: "edit" }, t.t('Lcz_Edit', { fallback: 'Edit' }))), canPrint && (index.h("wa-dropdown-item", { key: '9fa45852d1b785415bb42443ffa60e86de610542', value: "receipt" }, t.t('Lcz_Print', { fallback: 'Print' }))), canEditOrDelete && index.h("wa-divider", { key: 'b356bf7c417b40f8d09c959b22151db4d589b4e9' }), this.payment?.payment_type?.code === enums.PayTypes.Payment && this.payment.payment_status?.code === enums.PayStatus.Normal && (index.h("wa-dropdown-item", { key: 'df9aa109ed446fd13413a1e397f9bc32dcc8a7e4', variant: "danger", value: "void-receipt" }, t.t('Lcz_VoidWithCreditReceipt', { fallback: 'Void with credit receipt' }))), canEditOrDelete && (index.h("wa-dropdown-item", { key: '9972ce974f73c9c6346b4fcd64e234c85f7a4e7d', value: "delete", variant: "danger" }, t.t('Lcz_Delete', { fallback: 'Delete' }))))))), this.payment.reference && index.h("p", { key: '30d61afbbd2e81faea78786879c92922175d376f', class: "payment-item__payment-reference" }, this.payment?.reference)));
    }
};
IrPaymentItem.style = irPaymentItemCss();

const irPaymentSummaryCss = () => `.sc-ir-payment-summary-h{display:block;font-family:var(--wa-font-family-body);border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);padding-bottom:var(--wa-space-l);margin-bottom:var(--wa-space-l)}.ps-host--analytics.sc-ir-payment-summary-h{border-bottom:none;margin-bottom:0}.ps-layout.sc-ir-payment-summary{display:flex;flex-direction:column;gap:0.357rem}.ps-analytics.sc-ir-payment-summary{position:relative;margin-top:var(--wa-space-m);display:flex;align-items:center;justify-content:center}.ps-analytics.sc-ir-payment-summary::before{content:'';position:absolute;top:50%;inset-inline-start:0;inset-inline-end:0;border-top:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.ps-analytics.sc-ir-payment-summary ir-payment-analytics.sc-ir-payment-summary{position:relative;z-index:1}.ps-cols.sc-ir-payment-summary{display:flex;align-items:flex-start;gap:0}.ps-col.sc-ir-payment-summary{flex:1;min-width:0;display:flex;flex-direction:column;gap:0.357rem}.ps-col--bordered.sc-ir-payment-summary{padding-inline-start:0.857rem;margin-inline-start:0.857rem;border-inline-start:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.ps-section-title.sc-ir-payment-summary{font-weight:600;color:var(--wa-color-text-quiet, #9ca3af);white-space:nowrap}.ps-stacked.sc-ir-payment-summary{display:flex;flex-direction:column;gap:0.071rem;min-width:0}.ps-stacked__label.sc-ir-payment-summary{color:var(--wa-color-text-quiet, #9ca3af)}.ps-stacked__value.sc-ir-payment-summary{font-weight:700;color:var(--wa-color-text-normal, #111827);min-width:0;overflow-wrap:break-word}.ps-stacked__value--danger.sc-ir-payment-summary{color:var(--wa-color-danger-text-loud, #dc2626)}.ps-row.sc-ir-payment-summary{display:flex;align-items:baseline;justify-content:space-between;gap:0.571rem;min-width:0}.ps-row__label.sc-ir-payment-summary{color:var(--wa-color-text-quiet, #6b7280);white-space:nowrap;flex-shrink:0}.ps-row__value.sc-ir-payment-summary{font-weight:700;color:var(--wa-color-text-normal, #111827);text-align:end;min-width:0;overflow-wrap:break-word}.ps-row__value--danger.sc-ir-payment-summary{color:var(--wa-color-danger-text-loud, #dc2626)}.ps-grand-total.sc-ir-payment-summary{display:flex;align-items:baseline;justify-content:space-between;gap:0.571rem;padding-top:0.429rem;margin-top:0.143rem;border-top:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);min-width:0}.ps-grand-total__label.sc-ir-payment-summary{font-weight:700;color:var(--wa-color-text-normal, #111827);white-space:nowrap;flex-shrink:0}.ps-grand-total__value.sc-ir-payment-summary{font-weight:700;color:var(--wa-color-text-normal, #111827);text-align:end;min-width:0;overflow-wrap:break-word}@media (min-width: 1280px){.ps-stacked.sc-ir-payment-summary{display:flex;flex-direction:row;gap:0.5rem;align-items:center}.ps-stacked.--stacked-right.sc-ir-payment-summary{justify-content:flex-end}}`;

const IrPaymentSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    totalCost;
    balance;
    collected;
    currency;
    isBookingCancelled;
    isAllServicesAgentOwned;
    booking;
    agent;
    clTransactions = [];
    // private allowedClOps = new Set([ClTxTypeCode.Adjustment, ClTxTypeCode.StandardChargeDebit, ClTxTypeCode.CancellationPenalty, ClTxTypeCode.Discount]);
    shouldShowTotalCost() {
        return this.totalCost > 0 && this.totalCost !== null;
    }
    get agentTotal() {
        // return (
        //   (this.booking.agent_financial.gross_total ?? 0) +
        //   this.clTransactions.reduce((prev, curr) => {
        //     if (this.allowedClOps.has(curr.CL_TX_TYPE_CODE as any) && curr.CATEGORY === null) {
        //       return prev + curr.DEBIT - curr.CREDIT;
        //     }
        //     return prev;
        //   }, 0)
        // );
        return this.booking?.financial?.agent_total ?? 0;
    }
    // private get guestTotal() {
    //   return (
    //     (this.booking.guest_financial.gross_total ?? 0) +
    //     this.booking.financial.payments.reduce((prev, curr) => {
    //       if (curr.is_city_ledger) {
    //         return prev;
    //       }
    //       return prev + (curr.payment_type.operation === 'CR' ? (curr.payment_type.code === '009' ? curr.amount * -1 : 0) : curr.amount);
    //     }, 0)
    //   );
    // }
    get bookingTotal() {
        return this.booking.financial.booking_total;
        // return this.agentTotal + this.guestTotal;
    }
    render() {
        if (functions.isAgentMode(this.agent)) {
            return (index.h("div", { class: "ps-layout" }, index.h("div", { class: "ps-cols" }, !this.isAllServicesAgentOwned && (index.h("div", { class: "ps-col " }, index.h("div", { class: "ps-stacked" }, index.h("span", { class: "ps-stacked__label" }, t.t('Lcz_GuestBalance', { fallback: 'Guest Balance' }), ":"), index.h("span", { class: "ps-stacked__value ps-stacked__value--danger" }, number.formatAmount(this.currency.symbol, this.booking?.guest_financial?.due_amount))), index.h("div", { class: "ps-stacked " }, index.h("span", { class: "ps-stacked__label" }, t.t('Lcz_GuestCollected', { fallback: 'Guest Collected:' })), index.h("span", { class: "ps-stacked__value" }, number.formatAmount(this.currency.symbol, this.booking.guest_financial?.collected))))), index.h("div", { class: "ps-col" }, index.h("div", { class: "ps-stacked --stacked-right" }, index.h("span", { class: "ps-stacked__label ps-stacked__value" }, t.t('Lcz_BookingTotal', { fallback: 'Booking Total:' })), index.h("span", { class: "ps-stacked__value" }, number.formatAmount(this.currency.symbol, this.bookingTotal ?? 0))), index.h("div", { class: "ps-stacked --stacked-right" }, index.h("span", { class: "ps-stacked__label" }, t.t('Lcz_AgentTotal', { fallback: 'Agent Total:' })), index.h("span", { class: "ps-stacked__value" }, number.formatAmount(this.currency.symbol, this.agentTotal)))))));
        }
        const showAnalytics = !!this.booking?.extras?.find(e => e?.key === 'DP_OPTIM_BASE_GROSS')?.value;
        return (index.h(index.Host, { class: { 'ps-host--analytics': showAnalytics } }, index.h("div", { class: "ps-layout" }, index.h("div", { class: "ps-cols" }, index.h("div", { class: "ps-col " }, index.h("div", { class: "ps-stacked " }, index.h("span", { class: "ps-stacked__label" }, t.t('Lcz_Balance'), ":"), index.h("span", { class: "ps-stacked__value ps-stacked__value--danger" }, number.formatAmount(this.currency.symbol, this.balance))), index.h("div", { class: "ps-stacked" }, index.h("span", { class: "ps-stacked__label" }, t.t('Lcz_Collected'), ":"), index.h("span", { class: "ps-stacked__value" }, number.formatAmount(this.currency.symbol, this.collected)))), index.h("div", { class: "ps-col" }, this.shouldShowTotalCost() && (index.h("div", { class: "ps-stacked --stacked-right" }, index.h("span", { class: "ps-stacked__label ps-stacked__value" }, t.t('Lcz_TotalCost')), index.h("span", { class: "ps-stacked__value" }, number.formatAmount(this.currency.symbol, this.totalCost)))), index.h("div", { class: "ps-stacked --stacked-right" }, index.h("span", { class: "ps-stacked__label ps-stacked__value" }, t.t('Lcz_GrandTotalLabel', { fallback: 'Grand Total:' })), index.h("span", { class: "ps-stacked__value" }, number.formatAmount(this.currency.symbol, this.bookingTotal))), index.h("div", { class: "ps-stacked --stacked-right" }))), showAnalytics && (index.h("div", { class: "ps-analytics" }, index.h("ir-payment-analytics", { booking: this.booking }))))));
    }
};
IrPaymentSummary.style = irPaymentSummaryCss();

const irPaymentsFolioCss = () => `.sc-ir-payments-folio-h{display:block}.payment-divider.sc-ir-payments-folio{margin:0;padding:0}.payments-container.sc-ir-payments-folio{background-color:var(--wa-color-surface-default)}.payments-container.sc-ir-payments-folio::part(body),.payments-container.sc-ir-payments-folio [part~="body"]{padding:0;padding-bottom:calc(1.5rem - var(--wa-space-s));padding-top:calc(1.5rem - var(--wa-space-s))}`;

const IrPaymentsFolio = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.addPayment = index.createEvent(this, "addPayment");
        this.editPayment = index.createEvent(this, "editPayment");
        this.deletePayment = index.createEvent(this, "deletePayment");
        this.issueReceipt = index.createEvent(this, "issueReceipt");
        this.voidReceipt = index.createEvent(this, "voidReceipt");
    }
    payments = [];
    booking;
    isAddPaymentDisabled = false;
    addPayment;
    editPayment;
    deletePayment;
    issueReceipt;
    voidReceipt;
    handleAddPayment = () => {
        this.addPayment.emit();
    };
    handleEditPayment = (payment) => {
        this.editPayment.emit(payment);
    };
    handleDeletePayment = (payment) => {
        this.deletePayment.emit(payment);
    };
    handleIssueReceipt(payment) {
        this.issueReceipt.emit(payment);
    }
    handleVoidReceipt(payment) {
        this.voidReceipt.emit(payment);
    }
    hasPayments() {
        return this.payments && this.payments.length > 0;
    }
    renderPaymentItem(payment, index$1) {
        if (payment.is_city_ledger) {
            return null;
        }
        return [
            index.h("ir-payment-item", { key: payment.id, payment: payment, onDeletePayment: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleDeletePayment(e.detail);
                }, onEditPayment: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleEditPayment(e.detail);
                }, onIssueReceipt: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleIssueReceipt(e.detail);
                }, onVoidReceipt: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleVoidReceipt(e.detail);
                } }),
            index$1 < this.payments.length - 1 && index.h("wa-divider", { class: "payment-divider" }),
        ];
    }
    renderEmptyState() {
        return index.h("ir-empty-state", { showIcon: false });
    }
    render() {
        return (index.h("wa-card", { key: 'cdea12889e36664add9731cafc51dc3702864549', appearance: "plain", class: " payments-container" }, index.h("div", { key: '54c360de2450e1fd8027b2c2754beb08a67f2aaf', slot: "header", class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("p", { key: 'a57ffada1aeba6faba2471f32abe0ee55dc607bf', class: "font-size-large p-0 m-0" }, t.t('Lcz_GuestFolio', { fallback: 'Guest Folio' })), index.h(HelpDocButton, { key: '85260b0b7f22ee1338c34fc812c55e7dfbf2f369', message: t.t('Lcz_HelpTooltip', { fallback: 'Help' }), href: "https://help.igloorooms.com/extranet/booking-details/guest-folio" })), !this.isAddPaymentDisabled && index.h("wa-tooltip", { key: 'dbc04e4b5e0ab31cea28e5b361e5af6131c0215d', for: "create-payment" }, t.t('Lcz_AddFolioEntry', { fallback: 'Add folio entry' })), index.h("ir-custom-button", { key: 'bb1e85bdb9aea8b5057f3f10ec3a6184a428b532', disabled: this.isAddPaymentDisabled, slot: "header-actions", id: "create-payment", size: "s", variant: "neutral", appearance: "plain", onClickHandler: this.handleAddPayment }, index.h("wa-icon", { key: 'e176639addaa29f38cdeb4c0e0f08629a0e1da6c', name: "plus", style: { fontSize: '1rem' } })), this.hasPayments() ? this.payments.map((payment, index) => this.renderPaymentItem(payment, index)) : this.renderEmptyState()));
    }
};
IrPaymentsFolio.style = irPaymentsFolioCss();

const irPickupCss = () => ``;

const IrPickup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal");
    }
    booking;
    /**
     * Pre-filled pickup information coming from the booking.
     * When provided, the pickup form initializes with this data and
     * the user may update or remove it.
     */
    defaultPickupData;
    /**
     * Total number of persons included in the booking.
     * Used to compute vehicle capacity and validate pickup options.
     */
    numberOfPersons = 0;
    /**
     * Unique booking reference number used to associate pickup updates
     * with a specific reservation.
     */
    bookingNumber;
    /**
     * The date range of the booking (check-in and check-out).
     * Determines allowed pickup dates and validation rules.
     */
    bookingDates;
    agent;
    /**
     * Controls whether the pickup drawer/modal is open.
     * When true, the drawer becomes visible and initializes the form.
     */
    open;
    isLoading = false;
    canSubmitPickup = false;
    /**
     * Emitted when the pickup drawer should be closed.
     * Triggered when the user dismisses the drawer or when the
     * inner pickup form requests the modal to close.
     */
    closeModal;
    _id = `pickup-form-${v4.v4()}`;
    render() {
        return (index.h("ir-drawer", { key: '7e789fb9d79af14162fa95e275911161d8e7dc28', style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: t.t('Lcz_Pickup', { fallback: 'Pickup' }), open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && (index.h("ir-pickup-form", { key: '9d61029f4764534ca236be27eb83ea7a1e655a2c', booking: this.booking, agent: this.agent, onCanSubmitPickupChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.canSubmitPickup = e.detail;
            }, defaultPickupData: this.defaultPickupData, numberOfPersons: this.numberOfPersons, bookingNumber: this.bookingNumber, bookingDates: this.bookingDates, onLoadingChange: e => (this.isLoading = e.detail), onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            }, formId: this._id })), index.h("div", { key: 'f39c24dfea2157930c14ef83e9af1dc11c14410c', slot: "footer", class: 'ir__drawer-footer' }, index.h("ir-custom-button", { key: '0ae6dc9af89bdcce08668a2382d18320b12c58cb', class: `flex-fill`, size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), this.canSubmitPickup && (index.h("ir-custom-button", { key: '8a400b75b5708f13a582c04c1531c0500393d763', type: "submit", loading: this.isLoading, form: this._id, size: "m", class: `flex-fill`, variant: "brand" }, t.t('Lcz_Save', { fallback: 'Save' }))))));
    }
};
IrPickup.style = irPickupCss();

class PickupService {
    async savePickup(params, booking_nbr, is_remove) {
        try {
            if (!params.currency || !params.selected_option) {
                throw new Error('Cannot save pickup without a selected option and currency.');
            }
            const splitTime = params.arrival_time.split(':');
            await axios.axios.post(`/Do_Pickup`, {
                booking_nbr,
                is_remove,
                agent: params.agent,
                currency: params.currency,
                date: params.arrival_date,
                details: params.flight_details,
                hour: splitTime[0],
                minute: splitTime[1],
                nbr_of_units: params.number_of_vehicles,
                selected_option: params.selected_option,
                total: +params.due_upon_booking,
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    transformDefaultPickupData(data) {
        const arrival_time = data.hour && data.minute ? utils.renderTime(data.hour) + ':' + utils.renderTime(data.minute) : '';
        return {
            agent: data.agent,
            arrival_date: data.date,
            arrival_time,
            currency: data.currency,
            due_upon_booking: data.total.toFixed(2),
            flight_details: data.details,
            location: data.selected_option.location.id,
            number_of_vehicles: data.nbr_of_units,
            selected_option: data.selected_option,
            vehicle_type_code: data.selected_option.vehicle.code,
        };
    }
    getAvailableLocations(message) {
        let locations = [];
        calendarData.calendar_data.pickup_service.allowed_options.forEach(option => {
            if (locations.filter(location => location.value === option.location.id).length === 0) {
                locations.push({
                    text: message + ' ' + option.location.description,
                    value: option.location.id,
                });
            }
        });
        return locations;
    }
    createPickupSchema(minDate, maxDate, options) {
        const allowRemoval = Boolean(options?.allowRemoval);
        const asNumber = (value) => {
            if (typeof value === 'number') {
                return value;
            }
            if (typeof value === 'string' && value.trim() !== '') {
                const parsed = Number(value);
                return Number.isNaN(parsed) ? value : parsed;
            }
            return value;
        };
        const arrivalDateSchema = types.stringType()
            .min(1, { message: t.t('Lcz_ArrivalDateRequired', { fallback: 'Arrival date is required.' }) })
            .regex(/^\d{4}-\d{2}-\d{2}$/, { message: t.t('Lcz_InvalidDateFormatYmd', { fallback: 'Invalid date format, expected YYYY-MM-DD.' }) });
        return types.objectType({
            location: types.preprocessType(asNumber, types.numberType().int()).refine(value => (allowRemoval ? value === -1 || value > 0 : value > 0), {
                message: t.t('Lcz_PleaseSelectPickupOption', { fallback: 'Please select a pickup option.' }),
            }),
            arrival_date: types.preprocessType(value => (typeof value === 'string' ? value : (value ?? '')), arrivalDateSchema)
                .refine(dateStr => {
                const date = moment.hooks(dateStr, 'YYYY-MM-DD', true);
                const min = moment.hooks(minDate, 'YYYY-MM-DD', true);
                const max = moment.hooks(maxDate, 'YYYY-MM-DD', true);
                return date.isValid() && min.isValid() && max.isValid() && date.isBetween(min, max, undefined, '[]');
            }, {
                message: t.t('Lcz_ArrivalDateMustBeBetween', {
                    fallback: 'Arrival date must be between %1 and %2.',
                    params: [irDate.formatDate(minDate, 'MMM DD, YYYY'), irDate.formatDate(maxDate, 'MMM DD, YYYY')],
                }),
            }),
            arrival_time: types.stringType()
                .regex(/^\d{2}:\d{2}$/, { message: t.t('Lcz_InvalidTimeFormatHhMm', { fallback: 'Invalid time format. Expected HH:MM' }) })
                .refine(time => {
                const [hours, minutes] = time.split(':').map(Number);
                return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
            }, { message: t.t('Lcz_TimeValuesOutOfRange', { fallback: 'Time values are out of range' }) }),
            // arrival_time: z
            //   .preprocess(value => (typeof value === 'string' ? value : value ?? ''), z.string().regex(/^\d{2}\d{2}$/, { message: 'Invalid time format. Expected HH:MM.' }))
            //   .refine(
            //     time => {
            //       const strTime = time.toString();
            //       if (strTime.length < 4) {
            //         return false;
            //       }
            //       const [_, hours, minutes] = strTime.match(/(\d{2})(\d{2})/)!.map(Number);
            //       // const [hours, minutes] = time.split(':').map(Number);
            //       return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
            //     },
            //     { message: 'Time values are out of range.' },
            //   ),
            flight_details: types.preprocessType(value => (typeof value === 'string' ? value : ''), types.stringType().nonempty({ message: t.t('Lcz_FlightDetailsRequired', { fallback: 'Flight details cannot be empty.' }) })),
            vehicle_type_code: types.preprocessType(value => (typeof value === 'string' ? value : ''), types.stringType().nonempty({ message: t.t('Lcz_VehicleTypeRequired', { fallback: 'Vehicle type code cannot be empty.' }) })),
            number_of_vehicles: types.preprocessType(asNumber, types.numberType()
                .int()
                .min(1, { message: t.t('Lcz_AtLeastOneVehicleRequired', { fallback: 'At least one vehicle is required.' }) })),
        });
    }
    validateForm(params, schema) {
        return schema.safeParse(params);
    }
    getNumberOfVehicles(capacity, numberOfPersons) {
        let total_number_of_vehicles = Math.ceil(numberOfPersons / capacity);
        let startNumber = total_number_of_vehicles > 1 ? total_number_of_vehicles : 1;
        let bonus_number = total_number_of_vehicles > 1 ? 2 : 3;
        return Array.from({ length: total_number_of_vehicles + bonus_number }, (_, i) => startNumber + i);
    }
    getPickUpPersonStatus(code) {
        const getCodeDescription = calendarData.calendar_data.pickup_service.allowed_pricing_models.find(model => model.code === code);
        if (!getCodeDescription) {
            return null;
        }
        return getCodeDescription.description;
    }
    updateDue(params) {
        const getCodeDescription = this.getPickUpPersonStatus(params.code);
        if (!getCodeDescription) {
            return;
        }
        if (getCodeDescription === 'Person') {
            return params.amount * params.numberOfPersons;
        }
        else {
            return params.amount * params.number_of_vehicles;
        }
    }
}

const irPickupFormCss = () => `.sc-ir-pickup-form-h{display:block}.custom-card-container.sc-ir-pickup-form{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #e4e5ec}.card-title.sc-ir-pickup-form{flex:1}.border-theme.sc-ir-pickup-form{border:1px solid #cacfe7}.pickup__container.sc-ir-pickup-form{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.price-input-container.sc-ir-pickup-form{max-width:290px}}`;

const IrPickupForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal");
        this.canSubmitPickupChange = index.createEvent(this, "canSubmitPickupChange");
        this.loadingChange = index.createEvent(this, "loadingChange");
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt");
    }
    get el() { return index.getElement(this); }
    formId;
    booking;
    agent;
    defaultPickupData;
    numberOfPersons = 0;
    bookingNumber;
    bookingDates;
    isLoading = false;
    allowedOptionsByLocation = [];
    assignee = 'guest';
    pickupData = {
        location: -1,
        flight_details: '',
        due_upon_booking: '',
        number_of_vehicles: 1,
        vehicle_type_code: '',
        currency: undefined,
        arrival_time: '',
        arrival_date: null,
        selected_option: undefined,
        agent: null,
    };
    vehicleCapacity = [];
    autoValidate = false;
    closeModal;
    canSubmitPickupChange;
    loadingChange;
    resetBookingEvt;
    pickupService = new PickupService();
    pickupSchema;
    get shouldRenderDetails() {
        return this.pickupData.location > 0;
    }
    get isRemovalRequest() {
        return Boolean(this.defaultPickupData && this.pickupData.location === -1);
    }
    get canSubmitPickup() {
        return this.defaultPickupData !== null || this.shouldRenderDetails;
    }
    // componentWillLoad() {
    //   if (this.defaultPickupData) {
    //     const transformedData = this.pickupService.transformDefaultPickupData(this.defaultPickupData);
    //     this.vehicleCapacity = this.pickupService.getNumberOfVehicles(transformedData.selected_option.vehicle.capacity, this.numberOfPersons);
    //     this.allowedOptionsByLocation = calendar_data.pickup_service.allowed_options.filter(option => option.location.id === transformedData.location);
    //     this.pickupData = { ...transformedData };
    //   }
    //   this.pickupSchema = this.pickupService.createPickupSchema(this.bookingDates.from, this.bookingDates.to, {
    //     allowRemoval: this.defaultPickupData !== null,
    //   });
    // }
    // Add this private field
    lastCanSubmit = false;
    handleSubmitPickupChange() {
        const next = this.canSubmitPickup;
        if (next !== this.lastCanSubmit) {
            this.lastCanSubmit = next;
            this.canSubmitPickupChange.emit(next);
        }
    }
    componentWillLoad() {
        if (this.defaultPickupData) {
            const transformedData = this.pickupService.transformDefaultPickupData(this.defaultPickupData);
            this.vehicleCapacity = this.pickupService.getNumberOfVehicles(transformedData.selected_option.vehicle.capacity, this.numberOfPersons);
            this.allowedOptionsByLocation = calendarData.calendar_data.pickup_service.allowed_options.filter(option => option.location.id === transformedData.location);
            this.pickupData = { ...transformedData };
            this.assignee = transformedData.agent ? 'agent' : 'guest';
        }
        else if (functions.isAgentMode(this.agent)) {
            this.assignee = 'agent';
        }
        this.pickupSchema = this.pickupService.createPickupSchema(this.bookingDates.from, this.bookingDates.to, { allowRemoval: this.defaultPickupData !== null });
        // initialize canSubmit state for listeners
        this.lastCanSubmit = this.canSubmitPickup;
        this.canSubmitPickupChange.emit(this.lastCanSubmit);
    }
    handleLocationChange(value) {
        if (value === '') {
            this.allowedOptionsByLocation = [];
            this.vehicleCapacity = [];
            this.updatePickupData('location', -1);
            return;
        }
        const numericValue = Number(value);
        this.allowedOptionsByLocation = calendarData.calendar_data.pickup_service.allowed_options.filter(option => option.location.id === numericValue);
        const locationChoice = this.allowedOptionsByLocation[0];
        if (!locationChoice) {
            this.vehicleCapacity = [];
            this.pickupData = {
                ...this.pickupData,
                location: numericValue,
                selected_option: undefined,
                vehicle_type_code: '',
                number_of_vehicles: 1,
                due_upon_booking: '',
                currency: undefined,
            };
            return;
        }
        this.vehicleCapacity = this.pickupService.getNumberOfVehicles(locationChoice.vehicle.capacity, this.numberOfPersons);
        const due = this.computeDueAmount(locationChoice, this.vehicleCapacity[0]);
        this.pickupData = {
            ...this.pickupData,
            location: numericValue,
            selected_option: locationChoice,
            number_of_vehicles: this.vehicleCapacity[0],
            due_upon_booking: due,
            vehicle_type_code: locationChoice.vehicle.code,
            currency: locationChoice.currency,
        };
    }
    handleVehicleQuantityChange(value) {
        if (!value || Number.isNaN(value) || !this.pickupData.selected_option) {
            return;
        }
        const due = this.computeDueAmount(this.pickupData.selected_option, value);
        this.pickupData = {
            ...this.pickupData,
            number_of_vehicles: value,
            due_upon_booking: due,
        };
    }
    handleVehicleTypeChange(value) {
        if (!value || this.pickupData.location <= 0) {
            return;
        }
        const locationChoice = calendarData.calendar_data.pickup_service.allowed_options.find(option => option.location.id === this.pickupData.location && option.vehicle.code === value);
        if (!locationChoice) {
            return;
        }
        this.vehicleCapacity = this.pickupService.getNumberOfVehicles(locationChoice.vehicle.capacity, this.numberOfPersons);
        const due = this.computeDueAmount(locationChoice, this.vehicleCapacity[0]);
        this.pickupData = {
            ...this.pickupData,
            selected_option: locationChoice,
            number_of_vehicles: this.vehicleCapacity[0],
            due_upon_booking: due,
            vehicle_type_code: locationChoice.vehicle.code,
            currency: locationChoice.currency,
        };
    }
    computeDueAmount(option, vehicleCount) {
        const due = this.pickupService.updateDue({
            amount: option.amount,
            code: option.pricing_model.code,
            numberOfPersons: this.numberOfPersons,
            number_of_vehicles: vehicleCount,
        });
        return (due ?? 0).toFixed(2);
    }
    updatePickupData(key, value) {
        this.pickupData = { ...this.pickupData, [key]: value };
    }
    async savePickup() {
        if (!this.canSubmitPickup) {
            return;
        }
        try {
            this.isLoading = true;
            this.loadingChange.emit(this.isLoading);
            const isRemoval = this.isRemovalRequest;
            if (!isRemoval) {
                this.autoValidate = true;
                const validationResult = this.pickupService.validateForm(this.pickupData, this.pickupSchema);
                if (!validationResult.success) {
                    return;
                }
            }
            const agent = this.assignee === 'agent' ? this.booking.agent : null;
            await this.pickupService.savePickup({ ...this.pickupData, agent }, this.bookingNumber, isRemoval);
            this.resetBookingEvt.emit(null);
            this.closeModal.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
            this.loadingChange.emit(this.isLoading);
        }
    }
    render() {
        return (index.h("form", { key: '6c0dcf206e0b71077ce4d4d6569409ecb37a285f', id: this.formId, class: "pickup__container", onSubmit: async (e) => {
                e.preventDefault();
                await this.savePickup();
            } }, index.h("ir-validator", { key: '522dfd47c9ca2a976336798080bef2d7f44c8dca', schema: this.pickupSchema.shape.location, autovalidate: this.autoValidate, value: this.pickupData.location, valueEvent: "change wa-change select-change", blurEvent: "wa-hide blur" }, index.h("wa-select", { key: '98ff61850fc68b315747ca52dfe13676fae3ff6b', size: "s", onchange: e => this.handleLocationChange(e.target.value), defaultValue: this.pickupData.location === -1 ? '' : this.pickupData.location?.toString(), value: this.pickupData.location === -1 ? '' : this.pickupData.location?.toString() }, index.h("wa-option", { key: '02aa57a216fc2b0a21a7e43b74e950d51af39189', value: "" }, t.t('Lcz_Pickup_NoThankYou')), this.pickupService.getAvailableLocations(t.t('Lcz_Pickup_YesFrom')).map(option => (index.h("wa-option", { key: `pickup-location-${option.value}`, value: option.value?.toString() }, option.text))))), this.shouldRenderDetails && (index.h("div", { key: '109bcdefec2a92fd053c9776fe6ea66371f6a89a', class: "pickup__container", "data-testid": "pickup_body" }, index.h("ir-validator", { key: 'a051347df40835eb49ea866345ccec8ba48b37e4', schema: this.pickupSchema.shape.arrival_date, autovalidate: this.autoValidate, value: this.pickupData.arrival_date ?? '', valueEvent: "dateChanged", blurEvent: "datePickerBlur blur" }, index.h("ir-date-select", { key: '910627a9b06c73b9422419883bd48bfc67f93640', date: this.pickupData.arrival_date, minDate: this.bookingDates.from, maxDate: this.bookingDates?.to, emitEmptyDate: true, onDateChanged: evt => {
                this.updatePickupData('arrival_date', evt.detail.start?.format('YYYY-MM-DD') ?? null);
            }, label: t.t('Lcz_ArrivalDate') })), index.h("ir-validator", { key: '949109a3c00dcf922fcb56f44bd9111a5e30a90e', schema: this.pickupSchema.shape.arrival_time, autovalidate: this.autoValidate, value: this.pickupData.arrival_time, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, index.h("ir-input", { key: '90b9bc8c9873455a4eb0aaea13ae1019d55bd390', value: this.pickupData.arrival_time, "onText-change": e => {
                this.updatePickupData('arrival_time', e.detail);
            }, mask: 'time', label: t.t('Lcz_Time') })), index.h("ir-validator", { key: 'c5822c6ba6b6d6738e2630ac6badcc4ccc63cda9', schema: this.pickupSchema.shape.flight_details, autovalidate: this.autoValidate, value: this.pickupData.flight_details, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, index.h("ir-input", { key: 'eeb98a1893b2eb20ce307f2dea508d7653fb85b0', "onText-change": e => this.updatePickupData('flight_details', e.detail), value: this.pickupData.flight_details, label: t.t('Lcz_FlightDetails') })), index.h("ir-validator", { key: '32d4e99e7c2fc2acc6397f660358f1a5fce8bb9d', schema: this.pickupSchema.shape.vehicle_type_code, autovalidate: this.autoValidate, value: this.pickupData.vehicle_type_code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide blur" }, index.h("wa-select", { key: '807bbc63fa27fda0e2bb87f9f0b2ce5e55591583', size: "s", onchange: e => this.handleVehicleTypeChange(e.target.value), value: this.pickupData.vehicle_type_code, defaultValue: this.pickupData.vehicle_type_code }, this.allowedOptionsByLocation.map(option => (index.h("wa-option", { value: option.vehicle.code, key: option.vehicle.code }, option.vehicle.description))))), index.h("ir-validator", { key: '9ca1d5abf177e8e97410c3735bb884494c8381e7', schema: this.pickupSchema.shape.number_of_vehicles, autovalidate: this.autoValidate, value: this.pickupData.number_of_vehicles, valueEvent: "change wa-change select-change", blurEvent: "wa-hide blur" }, index.h("wa-select", { key: 'b2b3cc33b99869e81f36ec454c385a5059d6b006', size: "s", defaultValue: this.pickupData.number_of_vehicles?.toString(), value: this.pickupData.number_of_vehicles?.toString(), label: t.t('Lcz_NbrOfVehicles'), onchange: e => {
                this.handleVehicleQuantityChange(Number(e.target.value));
            } }, this.vehicleCapacity.map(i => (index.h("wa-option", { key: `capacity_${i}`, value: i.toString() }, i))))), index.h("ir-input", { key: '0bdfa90236b89f407be706fe751673c07d8f502d', mask: 'price', label: `${t.t('Lcz_DueUponBooking')}`, "onText-change": e => {
                this.pickupData = {
                    ...this.pickupData,
                    due_upon_booking: e.detail,
                };
            }, value: this.pickupData.due_upon_booking }, index.h("span", { key: '84bf25a6c62e97366740ef08ee42fd29cd9321fd', slot: "start" }, this.pickupData.currency?.symbol)), functions.isAgentMode(this.agent) && (index.h("ir-service-assignee-select", { key: 'c52bf586ca687f5aa76685b41cb87cadb2772f03', agent: this.booking.agent, assigneeType: this.assignee, onAssignmentChange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.assignee = e.detail;
            } }))))));
    }
    static get watchers() { return {
        "defaultPickupData": [{
                "handleSubmitPickupChange": 0
            }],
        "pickupData": [{
                "handleSubmitPickupChange": 0
            }]
    }; }
};
IrPickupForm.style = irPickupFormCss();

const irPickupViewCss = () => `.sc-ir-pickup-view-h{display:block}.pickup-view__card.sc-ir-pickup-view{background-color:var(--wa-color-surface-default)}.pickup-body.sc-ir-pickup-view{display:flex;flex-direction:column;gap:0.5rem}.pickup-body--guest.sc-ir-pickup-view{border-inline-start:3px solid var(--wa-color-neutral-300, #d4d4d8);padding-inline-start:0.625rem}.pickup-body--agent.sc-ir-pickup-view{border-inline-start:3px solid var(--wa-color-brand-fill-loud, #60a5fa);padding-inline-start:0.625rem}.service-group__label.sc-ir-pickup-view{display:flex;align-items:center;gap:0.4rem;margin:0 0 0.5rem;font-size:0.75rem;font-weight:700;letter-spacing:0.06em;color:var(--wa-color-neutral-500, #71717a)}.service-group__label.--agent.sc-ir-pickup-view{color:var(--wa-color-primary-600, #2563eb)}.pickup-row--header.sc-ir-pickup-view{display:flex;justify-content:space-between;align-items:baseline;gap:0.5rem}.pickup-datetime.sc-ir-pickup-view{font-size:0.925rem;font-weight:600;color:var(--wa-color-neutral-900, #18181b)}.pickup-time.sc-ir-pickup-view{font-weight:400;color:var(--wa-color-neutral-600, #52525b)}.pickup-price.sc-ir-pickup-view{color:var(--wa-color-neutral-900, #18181b);white-space:nowrap}.pickup-dl.sc-ir-pickup-view{margin:0;display:flex;flex-direction:column;gap:0.2rem}.pickup-dl__row.sc-ir-pickup-view{display:flex;gap:0.35rem;font-size:0.875rem;flex-wrap:wrap}.pickup-dl__row.sc-ir-pickup-view dt.sc-ir-pickup-view{font-weight:600;color:var(--wa-color-neutral-600, #52525b);white-space:nowrap}.pickup-dl__row.sc-ir-pickup-view dt.sc-ir-pickup-view::after{content:':'}.pickup-dl__row.sc-ir-pickup-view dd.sc-ir-pickup-view{margin:0;color:var(--wa-color-neutral-800, #27272a)}.pickup-note.sc-ir-pickup-view{margin:0;font-size:0.825rem;color:var(--wa-color-neutral-500, #71717a);line-height:1.4;border-top:1px solid var(--wa-color-neutral-100, #f4f4f5);padding-top:0.4rem}`;

const IrPickupView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    agent;
    clTransactions = [];
    get matchedTx() {
        const sysId = this.booking.pickup_info?.system_id;
        if (sysId == null)
            return null;
        return this.clTransactions.find(tx => tx.REL_ENTITY_KEY === sysId) ?? null;
    }
    render() {
        if (!calendarData.calendar_data.pickup_service.is_enabled || !this.booking.is_editable) {
            return null;
        }
        const { pickup_info } = this.booking;
        const isAgent = functions.isAgentMode(this.agent);
        const tx = this.matchedTx;
        const statusTag = tx ? (index.h("ir-cl-status-tag", { style: { marginInlineStart: '0.5rem' }, transaction: { _rowId: '', ...cityLedger_service.mapClTxToFolioRow(tx), balance: 0 }, size: "extra-small" })) : null;
        return (index.h(index.Host, null, index.h("wa-card", { appearance: "plain", class: "pickup-view__card" }, index.h("p", { slot: "header", class: 'font-size-large p-0 m-0' }, t.t('Lcz_Pickup', { fallback: 'Pickup' })), index.h("wa-tooltip", { for: "pickup" }, t.t('Lcz_EditAddPickupTooltip', { fallback: '%1 pickup', params: [pickup_info ? t.t('Lcz_Edit', { fallback: 'Edit' }) : t.t('Lcz_Add', { fallback: 'Add' })] })), index.h("ir-custom-button", { slot: "header-actions", id: "pickup", size: "s", appearance: "plain", variant: "neutral" }, index.h("wa-icon", { name: "edit", style: { fontSize: '1rem' } })), pickup_info ? (index.h(index.Fragment, null, isAgent && (index.h("p", { class: `service-group__label${pickup_info.agent ? ' --agent' : ''}` }, pickup_info.agent ? pickup_info.agent.name : t.t('Lcz_Guest', { fallback: 'Guest' }), index.h("span", null, t.t('Lcz_Folio', { fallback: 'Folio' })))), index.h("div", { class: `pickup-body${isAgent ? (pickup_info.agent ? ' pickup-body--agent' : ' pickup-body--guest') : ''}` }, index.h("div", { class: "pickup-row pickup-row--header" }, index.h("span", { class: "pickup-datetime" }, irDate.formatDate(pickup_info.date, 'MMM DD, YYYY'), pickup_info.hour && pickup_info.minute && index.h("span", { class: "pickup-time" }, " \u00B7 ", functions._formatTime(pickup_info.hour.toString(), pickup_info.minute.toString())), statusTag), index.h("strong", { class: "pickup-price" }, number.formatAmount(pickup_info.currency.symbol, pickup_info.total))), index.h("dl", { class: "pickup-dl" }, index.h("div", { class: "pickup-dl__row" }, index.h("dt", null, t.t('Lcz_FlightDetails')), index.h("dd", null, pickup_info.details)), index.h("div", { class: "pickup-dl__row" }, index.h("dt", null, t.t('Lcz_Vehicle', { fallback: 'Vehicle' })), index.h("dd", null, pickup_info.selected_option.vehicle.description)), index.h("div", { class: "pickup-dl__row" }, index.h("dt", null, t.t('Lcz_NbrOfVehicles')), index.h("dd", null, pickup_info.nbr_of_units))), (calendarData.calendar_data.pickup_service.pickup_instruction?.description || calendarData.calendar_data.pickup_service.pickup_cancelation_prepayment?.description) && (index.h("p", { class: "pickup-note" }, calendarData.calendar_data.pickup_service.pickup_instruction?.description, calendarData.calendar_data.pickup_service.pickup_cancelation_prepayment?.description))))) : (index.h("ir-empty-state", { showIcon: false })))));
    }
};
IrPickupView.style = irPickupViewCss();

const irPmsLogsCss = () => `.sc-ir-pms-logs-h{display:block;font-family:var(--wa-font-family-body);font-weight:var(--wa-font-weight-normal)}.dialog-container-height.sc-ir-pms-logs{height:4rem}.list-title.sc-ir-pms-logs{margin:0;padding:0;font-weight:600;white-space:nowrap;display:inline}.list-item.sc-ir-pms-logs{margin:0;padding:0;font-size:14px;margin-inline-start:5px;width:fit-content}.list-item.green.sc-ir-pms-logs{color:var(--wa-color-success-fill-loud);font-weight:600}.list-item.red.sc-ir-pms-logs{color:var(--wa-color-danger-fill-loud);font-weight:600}`;

const IrPmsLogs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    bookingNumber;
    pmsLogs;
    error;
    bookingService = new booking_service.BookingService();
    userTypeCode;
    componentWillLoad() {
        this.init();
        const UserInfo_b = JSON.parse(localStorage.getItem('UserInfo_b'));
        if (UserInfo_b) {
            this.userTypeCode = UserInfo_b.USER_TYPE_CODE;
        }
    }
    async init() {
        try {
            this.pmsLogs = await this.bookingService.fetchPMSLogs(this.bookingNumber);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (index.h("div", { key: 'e2be9c0123c4e7f78717257b7c393ffe8fed98ef', class: "" }, irInterceptor_store.isRequestPending('/Get_Exposed_PMS_Logs') ? (index.h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, index.h("ir-spinner", null))) : (index.h("div", { class: 'dialog-container-height' }, index.h("div", { class: "d-flex align-items-center ", style: { paddingBottom: '0.5rem' } }, index.h("p", { class: "list-title p-0 m-0" }, t.t('Lcz_SentAt'), ":"), this.pmsLogs?.sent_date ? (index.h("p", { class: "list-item" }, this.pmsLogs?.sent_date, " ", functions._formatTime(this.pmsLogs?.sent_hour.toString(), this.pmsLogs?.sent_minute.toString()))) : (index.h("p", { class: `list-item ${this.pmsLogs?.sent_date ? 'green' : 'red'}` }, this.pmsLogs?.is_acknowledged ? t.t('Lcz_YES') : t.t('Lcz_NO', { fallback: 'NO' })))), index.h("div", { class: "d-flex align-items-center p-0 m-0" }, index.h("p", { class: "list-title p-0 m-0" }, t.t('Lcz_Acknowledged')), index.h("div", { class: "d-flex align-items-center", style: { gap: '1rem' } }, index.h("p", { class: `list-item  ${this.pmsLogs?.is_acknowledged ? 'green' : 'red'}` }, this.pmsLogs?.is_acknowledged ? t.t('Lcz_YES') : t.t('Lcz_NO', { fallback: 'NO' })), !this.pmsLogs?.is_acknowledged && this.pmsLogs?.revision_id && this.userTypeCode === '1' && (index.h("ir-custom-button", { variant: "brand", loading: irInterceptor_store.isRequestPending('/Ack_Exposed_Revision'), onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const data = await this.bookingService.ackExposedRevision({
                    revision_id: this.pmsLogs?.revision_id,
                });
                this.error = data.ExceptionMsg;
            } }, t.t('Lcz_Acknowledge', { fallback: 'Acknowledge' }))))), this.error && (index.h("wa-callout", { size: "s", appearance: "filled-outlined", variant: "danger" }, this.error))))));
    }
};
IrPmsLogs.style = irPmsLogsCss();

const irReservationInformationCss = () => `.sc-ir-reservation-information-h{display:block}.reservation-information__card.sc-ir-reservation-information{background-color:var(--wa-color-surface-default)}.reservation-information.sc-ir-reservation-information{display:flex;flex-direction:column;gap:0.5rem !important}.reservation__info-guest-origins.sc-ir-reservation-information{display:flex;align-items:center;gap:1.5rem}.reservation-information__property-name.sc-ir-reservation-information{margin:0;font-weight:600;margin-bottom:1rem}.reservation-information__row.sc-ir-reservation-information{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.reservation-information.sc-ir-reservation-information>ir-label.sc-ir-reservation-information,.reservation-information.sc-ir-reservation-information>ota-label.sc-ir-reservation-information,.reservation-information__row.sc-ir-reservation-information ir-label.sc-ir-reservation-information{display:flex;align-items:center}.reservation-information__channel-notes.sc-ir-reservation-information{flex-direction:column;align-items:flex-start !important}.ir-ms-1.sc-ir-reservation-information{margin-inline-start:0.25rem}`;

const IrReservationInformation = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.openSidebar = index.createEvent(this, "openSidebar");
    }
    booking;
    countries;
    userCountry = null;
    isOpen;
    openSidebar;
    reservationInformationEl;
    irBookingCompanyFormRef;
    irBookingExtraNoteRef;
    componentWillLoad() {
        const guestCountryId = this.booking?.guest?.country_id;
        this.userCountry = guestCountryId ? this.countries?.find(country => country.id === guestCountryId) || null : null;
    }
    componentDidLoad() {
        this.setDynamicLabelHeight();
    }
    componentDidUpdate() {
        this.setDynamicLabelHeight();
    }
    handleEditClick(e, type) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.openSidebar.emit({ type });
    }
    renderPhoneNumber() {
        const { mobile_without_prefix, country_phone_prefix, country_id } = this.booking.guest;
        if (!mobile_without_prefix) {
            return null;
        }
        if (country_phone_prefix) {
            return country_phone_prefix + ' ' + mobile_without_prefix;
        }
        if (country_id) {
            const selectedCountry = this.countries.find(c => c.id === country_id);
            if (!selectedCountry) {
                throw new Error('Invalid country id');
            }
            return selectedCountry.phone_prefix + ' ' + mobile_without_prefix;
        }
        return mobile_without_prefix;
        // const { mobile, country_phone_prefix, country_id } = this.booking.guest;
        // if (!mobile) {
        //   return null;
        // }
        // if (this.booking.is_direct) {
        //   if (country_phone_prefix) {
        //     return country_phone_prefix + ' ' + mobile;
        //   }
        //   if (country_id) {
        //     const selectedCountry = this.countries.find(c => c.id === country_id);
        //     if (!selectedCountry) {
        //       throw new Error('Invalid country id');
        //     }
        //     return selectedCountry.phone_prefix + ' ' + mobile;
        //   }
        // }
        // return mobile;
    }
    setDynamicLabelHeight() {
        if (!this.reservationInformationEl) {
            return;
        }
        requestAnimationFrame(() => {
            const labelElements = this.reservationInformationEl?.querySelectorAll('ir-label, ota-label, .reservation-information__row');
            if (!labelElements || labelElements.length === 0) {
                return;
            }
            const measured = Array.from(labelElements)
                .map(el => el.getBoundingClientRect().height)
                .filter(height => height > 0);
            if (!measured.length) {
                return;
            }
            const maxHeight = Math.max(...measured, 32);
            this.reservationInformationEl.style.setProperty('--ir-reservation-label-height', `${maxHeight}px`);
        });
    }
    render() {
        const privateNote = booking.getPrivateNote(this.booking.extras);
        return (index.h("wa-card", { key: '03d77db2e4f6377db1be4b42cadec13750b08cda', appearance: "plain", class: "reservation-information__card" }, index.h("div", { key: '6715c69ca6547b2050e251c8c0992861f576fd39', class: "reservation-information", ref: el => (this.reservationInformationEl = el) }, index.h("p", { key: 'e75c7f81bc9f3846694016066da7365a5ea1f5c0', class: "reservation-information__property-name" }, this.booking.property.name || ''), index.h("ir-label", { key: 'ce2c30be0ba1cb2d968a31a03bb27a890f9eb543', renderContentAsHtml: true, labelText: `${t.t('Lcz_BookedOn', { fallback: 'Booked on' })}:`, content: `${functions._formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${functions._formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), index.h("div", { key: '7b43855d27f7b02548c3c04b4478674368305937', class: "reservation-information__row" }, index.h("ir-label", { key: '1223cec777d5e76ac2c178a87b0ef7987c95fd93', labelText: `${t.t('Lcz_BookedBy', { fallback: 'Booked by' })}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, this.booking.guest?.nbr_confirmed_bookings > 1 && !this.booking.agent && (index.h("div", { key: 'ff7814ebccc18b9ce375cea41fef8a9325ff04af', class: 'm-0 p-0 ', slot: "prefix" }, index.h("wa-tooltip", { key: '6ed3f7db1e4e267807f0b4f9b9e67298ae07bcf5', for: "guests_nbr_confirmed_bookings" }, `${t.t('Lcz_BookingsNbr', { fallback: '%1 bookings' })}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString())), index.h("div", { key: '483f868d94ab210eeec6a33ce9c8dd60e07a7ed8', style: { color: '#FB0AAD' }, id: "guests_nbr_confirmed_bookings" }, index.h("span", { key: 'ed2897b6affe0a53db08396ef7525ebc94634810' }, " ", this.booking.guest.nbr_confirmed_bookings), index.h("wa-icon", { key: '693390f1fd06b4806519728d5a09d01e104dfee1', name: "heart", style: { color: '#FB0AAD' } }))))), index.h("wa-tooltip", { key: '49e0fd749a934cbb352e94fdc4d81edf69a9cb9c', for: `edit_guest-details` }, t.t('Lcz_EditGuestDetails', { fallback: 'Edit guest details' })), index.h("ir-custom-button", { key: '7610f0924a75d24234085249e707dca750167068', iconBtn: true, id: `edit_guest-details`, onClickHandler: e => this.handleEditClick(e, 'guest'), appearance: 'plain', variant: 'neutral' }, index.h("wa-icon", { key: 'f02c23cdd277e452c3f8acb12c7738da5a283946', name: "edit", label: t.t('Lcz_EditGuestDetails', { fallback: 'Edit guest details' }), style: { fontSize: '1rem' } }))), !this.booking.agent && (index.h("div", { key: '811811b2a1cdc29e62badecbf0139db5853d7551', class: "reservation-information__row" }, index.h("ir-label", { key: '32db491bdcd5a31fba15973a18d67a8861506f14', labelText: `${t.t('Lcz_Company', { fallback: 'Company' })}:`, placeholder: t.t('Lcz_NoCompanyNameProvided', { fallback: 'No company name provided' }), content: `${this.booking.company_name ?? ''}${this.booking.company_tax_nbr ? ` - ${this.booking.company_tax_nbr}` : ''}`, display: 'flex' }), index.h("wa-tooltip", { key: '1822fa5fea152c8722065cb7637dbcd181935da5', for: `edit_create-company-info` }, t.t('Lcz_AddCompanyInfo', { fallback: 'Add company info' })), index.h("ir-custom-button", { key: '41ac2af0f722e203a8f2d5506577abd85ba19b1f', iconBtn: true, id: `edit_create-company-info`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irBookingCompanyFormRef.openCompanyForm();
            }, appearance: 'plain', variant: 'neutral' }, index.h("wa-icon", { key: 'a0f72634b2fa35a57d8c902e20e43a43c2786474', name: "edit", label: t.t('Lcz_AddOrModifyCompanyInfo', { fallback: 'Add or modify company info' }), style: { fontSize: '1rem' } })))), index.h("div", { key: '31a5a60904e643e2383af5714032502644d0f026', class: 'reservation__info-guest-origins' }, this.userCountry && (index.h("ir-label", { key: '129c3e4e898387b73b897d0f2d8f457879aa9c6b', labelText: `${t.t('Lcz_Country', { fallback: 'Country' })}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.booking.guest.mobile && index.h("ir-label", { key: '7a030fa27b290539b186f520777561dfb15919fa', labelText: `${t.t('Lcz_Phone', { fallback: 'Phone' })}:`, content: this.renderPhoneNumber() })), !this.booking.agent && index.h("ir-label", { key: 'eaf31588b9e47f13104f5281eaf80c6d21bdfc8e', labelText: `${t.t('Lcz_Email', { fallback: 'Email' })}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && (index.h("ir-label", { key: '8c7f22fe50c201824062e1e2d4f7f91cf4d55c88', labelText: `${t.t('Lcz_AlternativeEmail', { fallback: 'Alternative email' })}:`, content: this.booking.guest.alternative_email })), this.booking?.guest?.address && index.h("ir-label", { key: '5c21f44702b38efb59368ee9ee84cc7597c0d2fb', labelText: `${t.t('Lcz_Address')}:`, content: this.booking.guest.address }), this.booking.guest?.notes && index.h("ir-label", { key: '982cb4773e6981ccfdbe121c27106ebff25de875', display: "inline", labelText: `${t.t('Lcz_GuestPrivateNote')}:`, content: this.booking.guest?.notes }), this.booking.promo_key && index.h("ir-label", { key: '541d939a4c9727a620902a92e4a81f3a0e639e9c', labelText: `${t.t('Lcz_Coupon', { fallback: 'Coupon' })}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (index.h("div", { key: '988884053fa24f6d4ac8295caabe6d4fe3b8752b', class: "d-flex align-items-center" }, index.h("svg", { key: '7f6db7dd9aef513e124f3b34ee859c606bbe6a91', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'ab327f6aef6f7e8caecbfd0189fd9620ea60bde7', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), index.h("p", { key: 'a94c3f9e8dce5d970b27b668ad629e4f017aaaa7', class: "m-0 p-0 ir-ms-1" }, t.t('Lcz_LoyaltyDiscountApplied', { fallback: 'Coupon: %1' })))), this.booking.is_direct ? (index.h("ir-label", { labelText: `${t.t('Lcz_GuestRemark')}:`, display: "inline", content: this.booking.remark })) : (index.h("ota-label", { class: 'm-0 p-0 reservation-information__channel-notes', label: `${t.t('Lcz_ChannelNotes', { fallback: 'Channel notes' })}:`, remarks: this.booking.ota_notes, maxVisibleItems: this.booking.ota_notes?.length })), index.h("div", { key: '33d8c9e66f5d959f4b9106b54c6d890be7636647', class: "reservation-information__row" }, index.h("ir-label", { key: 'c30b90e402819a4b35034e3821b0ddde01ea85ff', labelText: `${t.t('Lcz_BookingPrivateNote')}:`, placeholder: t.t('Lcz_VisibleToHotelOnly'), content: privateNote, display: privateNote ? 'inline' : 'flex' }), index.h("wa-tooltip", { key: 'bb641f303c084cb0dfe6ae052dc33b3d79583561', for: `edit_create-extra-note` }, t.t('Lcz_EditCreatePrivateNoteTooltip', {
            fallback: '%1 private note',
            params: [privateNote ? t.t('Lcz_Edit', { fallback: 'Edit' }) : t.t('Lcz_Create', { fallback: 'Create' })],
        })), index.h("ir-custom-button", { key: '19f9da5b3a7ca4d7e193a156f287254f582ae268', iconBtn: true, id: `edit_create-extra-note`, onClickHandler: () => {
                this.irBookingExtraNoteRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, index.h("wa-icon", { key: 'f1135e4c556ab2f1e3dcd1242e25675581a9fe04', style: { fontSize: '1rem' }, name: "edit", label: t.t('Lcz_EditOrCreatePrivateNote', { fallback: 'Edit or create private note' }) })))), index.h("ir-booking-extra-note", { key: '183de9da14ab11caf0c74b1a34f6963cf5790821', booking: this.booking, ref: el => (this.irBookingExtraNoteRef = el) }), index.h("ir-booking-company-dialog", { key: 'be0b628b82d2b648a157ca56ef914bda40daeee6', booking: this.booking, ref: el => (this.irBookingCompanyFormRef = el) })));
    }
};
IrReservationInformation.style = irReservationInformationCss();

const irRoomCss = () => `.light-blue-bg.sc-ir-room{background:#acecff;padding:0.1rem 0.3rem;border-radius:5px;display:block;max-width:100px;box-sizing:border-box;display:inline-block;overflow:hidden;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:default}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room span.sc-ir-room{display:inline;white-space:normal;line-height:1.5;word-break:break-word}.room_statements.sc-ir-room b.sc-ir-room{display:inline;margin-inline-end:5px}.payment-container.sc-ir-room{position:absolute;inset-inline-end:1rem;height:fit-content}.sc-ir-room-h{position:relative}.room_actions_btns.sc-ir-room{gap:0.5rem}.room_actions_btns.sc-ir-room{white-space:nowrap;width:max-content}.room_actions_btns.sc-ir-room{flex:1 1 0%;display:flex;justify-content:flex-end}.mx-0-5.sc-ir-room{margin-inline-start:2px !important;margin-inline-end:2px !important}.tax-width.sc-ir-room{font-size:10px}.mx-01.sc-ir-room{--m:5px;margin-inline-end:var(--m) !important;margin-inline-start:var(--m) !important}*.sc-ir-room-h{box-sizing:border-box}.booking-room__collapse-btn.sc-ir-room{all:unset;display:inline-flex;align-items:center;align-self:flex-start;height:fit-content;border-radius:calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));aspect-ratio:1;cursor:pointer;transition:rotate var(--wa-transition-normal) var(--wa-transition-easing)}.booking-room__collapse-btn[data-state='opened'].sc-ir-room{rotate:90deg}.booking-room__collapse-btn[data-state='opened'].sc-ir-room:dir(rtl){rotate:-90deg}.booking-room__collapse-btn.sc-ir-room:focus-visible{outline:var(--wa-focus-ring);outline-offset:calc(var(--wa-panel-border-width) + var(--wa-focus-ring-offset))}.booking-room__header-row.sc-ir-room{display:flex;gap:var(--wa-space-sm, 0.5rem);margin:0}.booking-room_summary.sc-ir-room{display:grid;gap:0.5rem}.booking-room__breakdown-label-wrapper.sc-ir-room{flex:0 0 auto;padding-top:0.25rem}.booking-room__breakdown-label.sc-ir-room{margin:0;padding-inline-end:0.5rem;font-weight:600;white-space:nowrap}.booking-room__details.sc-ir-room,.booking-room__details.sc-ir-room::part(base),.booking-room__details.sc-ir-room [part~="base"],.booking-room__details.sc-ir-room::part(header),.booking-room__details.sc-ir-room [part~="header"],.booking-room__details.sc-ir-room::part(content),.booking-room__details.sc-ir-room [part~="content"]{width:100%;box-sizing:border-box;padding:0}.booking-room__details.sc-ir-room::part(header),.booking-room__details.sc-ir-room [part~="header"]{align-items:flex-start}.ir-flip-rtl.sc-ir-room:dir(rtl){scale:-1 1}`;

const IrRoom = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.deleteFinished = index.createEvent(this, "deleteFinished");
        this.toast = index.createEvent(this, "toast");
        this.pressCheckIn = index.createEvent(this, "pressCheckIn");
        this.pressCheckOut = index.createEvent(this, "pressCheckOut");
        this.editInitiated = index.createEvent(this, "editInitiated");
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt");
        this.openSidebar = index.createEvent(this, "openSidebar");
        this.addExtraServiceToUnit = index.createEvent(this, "addExtraServiceToUnit");
    }
    get element() { return index.getElement(this); }
    // Room Data
    booking;
    bookingIndex;
    isEditable;
    room;
    property_id;
    includeDepartureTime;
    // Meal Code names
    mealCodeName;
    myRoomTypeFoodCat;
    // Currency
    currency = 'USD';
    language = 'en';
    legendData;
    roomsInfo;
    bedPreferences;
    departureTime;
    arrivalTime;
    // Booleans Conditions
    hasRoomEdit = false;
    hasRoomDelete = false;
    hasRoomAdd = false;
    hasCheckIn = false;
    hasCheckOut = false;
    /**
     * When true, this room opens its check-out dialog automatically once mounted. Set by the
     * booking-details screen when an early check-out was initiated from another screen
     * (departures list, calendar) and redirected here.
     */
    autoOpenCheckout = false;
    agent;
    clTransactions = [];
    /** `_SVC_CATEGORY` setup entries, used to label extra services in the room's extra-services section. */
    svcCategories = [];
    collapsed = true;
    isLoading = false;
    isToggling = false;
    modalReason = null;
    mainGuest;
    isModelOpen = false;
    isOpen = false;
    isPricingDrawerOpen = false;
    isHbDialogOpen = false;
    isDepartureDialogOpen = false;
    isArrivalDialogOpen = false;
    // Event Emitters
    deleteFinished;
    toast;
    pressCheckIn;
    pressCheckOut;
    editInitiated;
    resetBookingEvt;
    openSidebar;
    addExtraServiceToUnit;
    modal;
    toggleDialogRef;
    bookingService = new booking_service.BookingService();
    dialogRef;
    componentWillLoad() {
        this.mainGuest = this.getMainGuest();
    }
    componentDidLoad() {
        if (this.autoOpenCheckout) {
            this.scheduleAutoCheckout();
        }
    }
    handleAutoOpenCheckoutChange(newValue) {
        if (newValue) {
            this.scheduleAutoCheckout();
        }
    }
    /**
     * Open the check-out dialog for an early check-out redirected here from another screen.
     * Deferred to the next frame on purpose: the dialog must first render with `open=false`
     * so `ir-checkout-dialog`'s `@Watch('open')` (which runs its data `init()`) fires on the
     * false → true change, and it also lets the booking-details drawer finish opening first.
     */
    scheduleAutoCheckout() {
        requestAnimationFrame(() => {
            if (this.autoOpenCheckout && this.modalReason !== 'checkout') {
                this.modalReason = 'checkout';
            }
        });
    }
    /**
     * Refresh the booking after an early check-out without letting the booking-details screen drop
     * into its full-page loading state. `resetBookingEvt.emit()` (no detail) takes the `resetBooking()`
     * path which toggles `isLoading` and unmounts the room list — that would tear down the invoice
     * drawer we just opened. Emitting the freshly fetched booking as the event detail takes the
     * no-spinner branch of `handleResetBooking`, so the screen updates and the invoice stays open.
     */
    async refreshBookingSilently() {
        try {
            const booking = await this.bookingService.getExposedBooking({
                booking_nbr: this.booking.booking_nbr,
                language: this.language,
                is_calculate_totals: true,
                include_dp_pricing: true,
            });
            if (booking) {
                this.resetBookingEvt.emit(booking);
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    // In your class
    handleClick(e) {
        let target = e.target;
        if (target.id == 'checkin') {
            this.pressCheckIn.emit(this.room);
        }
        else if (target.id == 'checkout') {
            this.pressCheckOut.emit(this.room);
        }
    }
    /**
     * Early-check-in / late-checkout are managed exclusively through the arrival/departure time
     * dialogs (price + time are set together there) — intercept edits on those categories and open
     * the matching dialog instead of letting the generic extra-service edit panel handle them.
     */
    handleEditExtraService(e) {
        const code = e.detail?.category?.code;
        if (code === 'ECI') {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.isArrivalDialogOpen = true;
        }
        else if (code === 'LCO') {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.isDepartureDialogOpen = true;
        }
    }
    handleRoomDataChange() {
        this.mainGuest = this.getMainGuest();
    }
    getDateStr(date) {
        return irDate.formatDate(date, 'DD MMM YYYY');
    }
    handleEditClick() {
        this.editInitiated.emit({
            event_type: 'EDIT_BOOKING',
            ID: this.room['assigned_units_pool'],
            NAME: booking.formatName(this.mainGuest?.first_name, this.mainGuest?.last_name),
            EMAIL: this.booking.guest.email,
            PHONE: this.booking.guest.mobile,
            REFERENCE_TYPE: '',
            FROM_DATE: this.booking.from_date,
            TO_DATE: this.booking.to_date,
            TITLE: `${t.t('Lcz_EditBookingFor')} ${this.room?.roomtype?.name} ${this.room?.unit?.name || ''}`,
            defaultDateRange: {
                dateDifference: this.room.days.length,
                fromDate: new Date(this.room.from_date + 'T00:00:00'),
                fromDateStr: this.getDateStr(new Date(this.room.from_date + 'T00:00:00')),
                toDate: new Date(this.room.to_date + 'T00:00:00'),
                toDateStr: this.getDateStr(new Date(this.room.to_date + 'T00:00:00')),
                message: '',
            },
            bed_preference: this.room.bed_preference,
            adult_child_offering: this.room.rateplan.selected_variation.adult_child_offering,
            ADULTS_COUNT: this.room.rateplan.selected_variation.adult_nbr,
            ARRIVAL: this.booking.arrival,
            ARRIVAL_TIME: this.booking.arrival.description,
            BOOKING_NUMBER: this.booking.booking_nbr,
            cancelation: this.room.rateplan.cancelation,
            channel_booking_nbr: this.booking.channel_booking_nbr,
            CHILDREN_COUNT: this.room.rateplan.selected_variation.child_nbr,
            COUNTRY: this.booking.guest.country_id,
            ENTRY_DATE: this.booking.from_date,
            FROM_DATE_STR: this.booking.format.from_date,
            guarantee: this.room.rateplan.guarantee,
            GUEST: this.mainGuest,
            IDENTIFIER: this.room.identifier,
            is_direct: this.booking.is_direct,
            IS_EDITABLE: this.booking.is_editable,
            NO_OF_DAYS: this.room.days.length,
            NOTES: this.booking.remark,
            origin: this.booking.origin,
            POOL: this.room['assigned_units_pool'],
            PR_ID: this.room.unit?.id,
            RATE: this.room.total,
            RATE_PLAN: this.room.rateplan.name,
            RATE_PLAN_ID: this.room.rateplan.id,
            RATE_TYPE: this.room.roomtype.id,
            ROOMS: this.booking.rooms,
            SOURCE: this.booking.source,
            SPLIT_BOOKING: false,
            STATUS: 'IN-HOUSE',
            TO_DATE_STR: this.booking.format.to_date,
            TOTAL_PRICE: this.booking.total,
            legendData: this.legendData,
            roomsInfo: this.roomsInfo,
            roomName: this.room.unit?.name || '',
            PICKUP_INFO: this.booking.pickup_info,
            booking: this.booking,
            currentRoomType: this.room,
        });
    }
    openModal(reason) {
        if (!reason) {
            return;
        }
        this.modalReason = reason;
        this.modal.openModal();
    }
    async handleModalConfirmation(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            if (!this.modalReason) {
                return;
            }
            this.isLoading = true;
            switch (this.modalReason) {
                case 'delete':
                    await this.deleteRoom();
                    break;
                case 'checkin':
                case 'checkout':
                    await this.bookingService.handleExposedRoomInOut({
                        booking_nbr: this.booking.booking_nbr,
                        room_identifier: this.room.identifier,
                        status: this.modalReason === 'checkin' ? '001' : '002',
                    });
                    this.resetBookingEvt.emit();
                    break;
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
            this.modalReason = null;
            this.modal.closeModal();
        }
    }
    async deleteRoom() {
        let oldRooms = [...this.booking.rooms];
        oldRooms = oldRooms.filter(room => room.identifier !== this.room.identifier);
        const body = {
            assign_units: true,
            check_in: true,
            is_pms: true,
            is_direct: true,
            agent: this.booking.agent,
            booking: {
                booking_nbr: this.booking.booking_nbr,
                from_date: this.booking.from_date,
                to_date: this.booking.to_date,
                remark: this.booking.remark,
                property: this.booking.property,
                source: this.booking.source,
                currency: this.booking.currency,
                arrival: this.booking.arrival,
                guest: this.booking.guest,
                rooms: oldRooms,
            },
            extras: this.booking.extras,
            pickup_info: this.booking.pickup_info,
        };
        await this.bookingService.doReservation(body);
        this.deleteFinished.emit(this.room.identifier);
    }
    async toggleRoomAgent() {
        try {
            this.isToggling = true;
            const updatedRooms = this.booking.rooms.map(r => (r.identifier === this.room.identifier ? { ...r, agent: r.agent ? null : this.booking.agent } : r));
            const body = {
                assign_units: true,
                check_in: true,
                is_pms: true,
                is_direct: true,
                agent: this.booking.agent,
                booking: {
                    booking_nbr: this.booking.booking_nbr,
                    from_date: this.booking.from_date,
                    to_date: this.booking.to_date,
                    remark: this.booking.remark,
                    property: this.booking.property,
                    source: this.booking.source,
                    currency: this.booking.currency,
                    arrival: this.booking.arrival,
                    guest: this.booking.guest,
                    rooms: updatedRooms,
                },
                extras: this.booking.extras,
                pickup_info: this.booking.pickup_info,
            };
            await this.bookingService.doReservation(body);
            this.resetBookingEvt.emit(null);
            this.toggleDialogRef.closeModal();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isToggling = false;
        }
    }
    renderModalMessage() {
        switch (this.modalReason) {
            case 'delete':
                return `${t.t('Lcz_AreYouSureDoYouWantToRemove ')} ${this.room.roomtype.name} ${this.room.unit ? this.room.unit.name : ''} ${t.t('Lcz_FromThisBooking')}`;
            case 'checkin':
                return t.t('Lcz_ConfirmCheckIn', { fallback: 'Are you sure you want to Check In this unit?' });
            case 'checkout':
                return t.t('Lcz_ConfirmCheckOut', { fallback: 'Are you sure you want to Check Out this unit?' });
            default:
                return '';
        }
    }
    handleCheckIn() {
        const { adult_nbr, children_nbr, infant_nbr } = this.room.occupancy;
        if (this.room.sharing_persons.length < adult_nbr + children_nbr + infant_nbr) {
            return this.showGuestModal();
        }
        return this.renderModalMessage();
    }
    getMainGuest() {
        return this.room.sharing_persons?.find(p => p.is_main);
    }
    showGuestModal() {
        const { adult_nbr, children_nbr, infant_nbr } = this.room.occupancy;
        const hasUnit = !!this.room.unit;
        this.openSidebar.emit({
            type: 'room-guest',
            payload: {
                roomName: this.room.unit?.name,
                roomType: this.room.roomtype?.name,
                sharing_persons: this.room.sharing_persons,
                totalGuests: adult_nbr + children_nbr + infant_nbr,
                // Check-in requires an assigned unit.
                checkin: this.hasCheckIn && hasUnit,
                identifier: this.room.identifier,
            },
        });
    }
    get unitId() {
        return this.room.unit?.id ?? null;
    }
    handleAddExtraServiceToUnit() {
        const pr_id = this.unitId;
        if (!pr_id) {
            return;
        }
        this.addExtraServiceToUnit.emit({ pr_id });
    }
    handleHeaderAction(action) {
        switch (action) {
            case 'edit':
                this.handleEditClick();
                break;
            case 'edit-rates':
                this.isPricingDrawerOpen = true;
                break;
            case 'delete':
                this.openModal('delete');
                break;
            case 'toggle':
                this.toggleDialogRef.openModal();
                break;
            case 'add-extra-service':
                this.handleAddExtraServiceToUnit();
                break;
        }
    }
    render() {
        return (index.h(index.Host, { key: '6638f635dc3dc2d18c6cd5dba3983e91ddc67c1c' }, index.h("div", { key: '7ef0789ac1f472468d7614a40b30628eee0c067e', class: "booking-room__header-row" }, index.h("button", { key: 'fd73e6b9a5eb89e1a0e4f311c357f1788547b13f', "data-state": this.collapsed ? 'closed' : 'opened', class: "booking-room__collapse-btn", onClick: () => (this.collapsed = !this.collapsed) }, index.h("wa-icon", { key: '687f56ea7ba82f30d7f6c4145ad0f16af4c41d36', class: "ir-flip-rtl", name: "chevron-right" })), index.h("div", { key: 'f24f91867114293029aff92d3dc95607478dc981', style: { width: '100%', cursor: 'default' } }, index.h("div", { key: 'cc28d24f4a426d153f6a209047c7c7a795ae932d',
            // slot="summary"
            class: "booking-room_summary", style: { width: '100%', cursor: 'default' } }, index.h("ir-room-header", { key: '92a628d52404b65e6571d9107037b0c182585baf', room: this.room, myRoomTypeFoodCat: this.myRoomTypeFoodCat, mealCodeName: this.mealCodeName, currency: this.currency, isEditable: this.isEditable, hasRoomEdit: this.hasRoomEdit, hasRoomDelete: this.hasRoomDelete, agent: this.agent, onAction: e => this.handleHeaderAction(e.detail), onOpenHbDialog: () => (this.isHbDialogOpen = true) }), index.h("ir-room-details", { key: 'e71ccfcae070e3f125549e1fb19b9896b4e54456', room: this.room, booking: this.booking, mainGuest: this.mainGuest, bedPreferences: this.bedPreferences, language: this.language, includeDepartureTime: this.includeDepartureTime, hasCheckIn: this.hasCheckIn, hasCheckOut: this.hasCheckOut, onCheckIn: () => this.handleCheckIn(), onCheckOut: () => (this.modalReason = 'checkout'), onViewGuests: () => this.showGuestModal(), onOpenArrivalDialog: () => (this.isArrivalDialogOpen = true), onOpenDepartureDialog: () => (this.isDepartureDialogOpen = true) })), !this.collapsed && index.h("ir-room-breakdown", { key: '96c6372f12eb88048fb657f1c92bd1de387fed75', room: this.room, booking: this.booking, currency: this.currency, clTransactions: this.clTransactions }))), index.h("ir-room-extra-services", { key: '41f18b2f8c5d493b8b1d4abf91ceb70f877da207', room: this.room, booking: this.booking, isEditable: this.isEditable, agent: this.agent, currency: this.currency, language: this.language, svcCategories: this.svcCategories, clTransactions: this.clTransactions, onRequestAddExtraService: () => this.handleAddExtraServiceToUnit() }), index.h("ir-assignment-toggle-dialog", { key: 'bf1135ca91db89741932024fb716378e593f7e08', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, onConfirmToggle: () => this.toggleRoomAgent() }, index.h("span", { key: 'cf6c5dc346746e6d9b0d14e100ec0d41558f9137', slot: "message" }, t.t('Lcz_MoveToFolio', {
            fallback: 'Move %1 %2 %3 to %4 folio.',
            params: [
                this.room.roomtype.name,
                this.room.rateplan.short_name,
                this.room.unit?.name ?? '',
                this.room.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent'),
            ],
        }))), index.h("ir-dialog", { key: 'c716cd2f9a9739b5494f424f9a3b558bc64d546d', label: this.modalReason === 'delete' ? t.t('Lcz_Alert', { fallback: 'Alert' }) : t.t('Lcz_Confirmation', { fallback: 'Confirmation' }), ref: el => (this.modal = el), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalReason = null;
            }, lightDismiss: this.modalReason === 'checkin' }, index.h("p", { key: '1ad3a8879356bcd2e2637da14d29947d7ca434fb' }, this.renderModalMessage()), index.h("div", { key: '82680b906602c7beda31959599a18aeada62ecfc', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '4c49175715f58c8a5a4727fb2deb5c6996fd09a1', size: "m", "data-dialog": "close", appearance: "filled", variant: "neutral" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '2268286f79323aaee8487e0cea2e3479d177fc08', size: "m", loading: this.isLoading, onClickHandler: e => this.handleModalConfirmation(e), variant: this.modalReason === 'delete' ? 'danger' : 'brand' }, this.modalReason === 'delete' ? t.t('Lcz_Delete', { fallback: 'Delete' }) : t.t('Lcz_Confirm', { fallback: 'Confirm' })))), index.h("ir-checkout-dialog", { key: 'e3cef9584dadd667c596abc6f7974a3a35c15db7', onCheckoutDialogClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalReason = null;
                if (e.detail.reason === 'openInvoice') {
                    this.isOpen = true;
                    // An early check-out mutates the booking (penalty, truncated nights) — refresh the
                    // screen, but silently so the invoice drawer we just opened isn't torn down.
                    if (e.detail.isEarlyCheckout) {
                        this.refreshBookingSilently();
                    }
                }
                else if (e.detail.reason === 'checkout') {
                    this.resetBookingEvt.emit();
                }
            }, identifier: this.room.identifier, open: this.modalReason === 'checkout', booking: this.booking }), index.h("ir-invoice", { key: '8e4554ab9096e6c6dc5e296a19f8822e458cec23', onInvoiceClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            }, open: this.isOpen, booking: this.booking, roomIdentifier: this.room.identifier }), index.h("ir-booking-pricing-drawer", { key: '3d5e17277526e4e5e3f65395f95def92a50192ea', open: this.isPricingDrawerOpen, booking: this.booking, room: this.room, agent: this.agent, folioEntries: this.clTransactions, currencySymbol: this.booking?.currency?.symbol ?? '', onCloseDrawer: () => (this.isPricingDrawerOpen = false), onPricingSaved: () => {
                this.isPricingDrawerOpen = false;
                this.resetBookingEvt.emit(null);
            } }), index.h("ir-hb-preference-dialog", { key: '82207a4beed283fdbab6ca2cf5ff1729ba05c8dd', room: this.room, open: this.isHbDialogOpen, onHbPreferenceClose: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isHbDialogOpen = false;
                if (e.detail.saved) {
                    this.resetBookingEvt.emit(null);
                }
            } }), index.h("ir-departure-time-dialog", { key: '139f7a092456cba3c07546fa422fabf0c2697608', room: this.room, booking: this.booking, open: this.isDepartureDialogOpen, property_id: this.property_id, departureTime: this.departureTime, language: this.language, booking_nbr: this.booking.booking_nbr, currency_id: this.booking.currency.id, currencySymbol: this.currency, onDepartureTimeClose: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isDepartureDialogOpen = false;
                if (e.detail.saved) {
                    this.resetBookingEvt.emit(null);
                }
            } }), index.h("ir-arrival-time-dialog", { key: '6c7c43289e8ea60b6b83d3c1086949e0e1b473ac', room: this.room, booking: this.booking, open: this.isArrivalDialogOpen, property_id: this.property_id, arrivalTime: this.arrivalTime, language: this.language, booking_nbr: this.booking.booking_nbr, currency_id: this.booking.currency.id, currencySymbol: this.currency, onArrivalTimeClose: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isArrivalDialogOpen = false;
                if (e.detail.saved) {
                    this.resetBookingEvt.emit(null);
                }
            } })));
    }
    static get watchers() { return {
        "autoOpenCheckout": [{
                "handleAutoOpenCheckoutChange": 0
            }],
        "room": [{
                "handleRoomDataChange": 0
            }]
    }; }
};
IrRoom.style = irRoomCss();

const irRoomBreakdownCss = () => `.subtotal_row.sc-ir-room-breakdown{padding-top:8px;font-weight:600}.night-cost.sc-ir-room-breakdown{color:#7cbebe}.booking-room__cell-tax-name.sc-ir-room-breakdown{display:block;white-space:wrap !important}.booking-room__breakdown-row.sc-ir-room-breakdown{display:flex;flex-direction:column;gap:0.5rem;margin:0.5rem 0}@media (min-width: 640px){.booking-room__breakdown-row.sc-ir-room-breakdown{flex-direction:row;align-items:flex-start}}.booking-room__breakdown-table.sc-ir-room-breakdown{flex:1 1 auto;overflow-x:auto}.booking-room__cell.sc-ir-room-breakdown{font-size:var(--wa-font-size-sm);padding:0.125rem 0;line-height:1.3;white-space:nowrap}.booking-room__cell--right.sc-ir-room-breakdown{text-align:end}.booking-room__cell--left.sc-ir-room-breakdown{text-align:start}.booking-room__cell--pad-right.sc-ir-room-breakdown{padding-inline-end:0.5rem}.booking-room__cell--pad-left.sc-ir-room-breakdown{padding-inline-start:0.5rem}`;

const IrRoomBreakdown = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    room;
    booking;
    currency = 'USD';
    clTransactions = [];
    get acmTxByDate() {
        return new Map(this.clTransactions.filter(tx => tx.CATEGORY === enums.SvcCategory.Accommodation && tx.BSA_REF === this.room.identifier).map(tx => [tx.SERVICE_DATE, tx]));
    }
    getSmokingLabel() {
        if (this.booking.is_direct) {
            if (!this.room.smoking_option) {
                return null;
            }
            const currRT = calendarData.calendar_data.roomsInfo.find(rt => rt.id === this.room.roomtype.id);
            if (currRT) {
                const smoking_option = currRT['smoking_option']?.allowed_smoking_options;
                if (smoking_option) {
                    return smoking_option.find(s => s.code === this.room.smoking_option)?.description;
                }
                return null;
            }
            return null;
        }
        return this.room.ota_meta?.smoking_preferences;
    }
    render() {
        return (index.h("div", { key: '9cf11c032767d6c76d98c0c35427cb6918ca3bb9', class: "booking-room__details-container" }, index.h("div", { key: '3d94d9947616943ebafbcbcade35f6d924803ab0', class: "booking-room__breakdown-row" }, index.h("div", { key: '10490fd758c66c23af612fcff7c873fbb307f6c9', class: "booking-room__breakdown-table" }, index.h("table", { key: '241c514f910bf22c681323c4d97154b2fb340d5c' }, this.room.days.length > 0 &&
            (() => {
                const acmTxByDate = this.acmTxByDate;
                return this.room.days.map(room => {
                    const tx = acmTxByDate.get(room.date);
                    return (index.h("tr", null, index.h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, functions._getDay(room.date)), index.h("td", { class: "booking-room__cell booking-room__cell--right" }, number.formatAmount(this.currency, room.amount)), room.cost > 0 && room.cost !== null && (index.h("td", { class: "booking-room__cell booking-room__cell--left booking-room__cell--pad-left night-cost" }, number.formatAmount(this.currency, room.cost))), index.h("td", { class: "booking-room__cell booking-room__cell--pad-left" }, tx && index.h("ir-cl-status-tag", { transaction: { _rowId: '', ...cityLedger_service.mapClTxToFolioRow(tx), balance: 0 }, size: "extra-small" }))));
                });
            })(), index.h("tr", { key: '4ded0a992023b96761a851f8659727be019876f6', class: '' }, index.h("th", { key: '055c685084ff3168ec883925f434c22237804130', class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right subtotal_row" }, t.t('Lcz_SubTotal')), index.h("th", { key: 'c9763bfbb48b1e0d151ad603ba7d1b15b69a9020', class: "booking-room__cell booking-room__cell--right subtotal_row" }, number.formatAmount(this.currency, this.room.total)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (index.h("th", { key: 'ad4233bbd0d9425be61cc1183d122da038a65f4f', class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-left night-cost" }, number.formatAmount(this.currency, this.room.cost)))), this.booking.is_direct ? (index.h(index.Fragment, null, (() => {
            const filtered_data = calendarData.calendar_data.taxes.filter(tx => tx.pct > 0 && tx.is_exlusive);
            return filtered_data.map(d => {
                const amount = d.is_exlusive
                    ? // Tax is added on top
                        this.room.total * d.pct
                    : // Tax is included in total → extract it
                        this.room.total - this.room.total / (1 + d.pct);
                return (index.h("tr", null, index.h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, index.h("span", { class: 'booking-room__cell-tax-name' }, d.is_exlusive ? t.t('Lcz_Excluding', { fallback: 'Excluding' }) : t.t('Lcz_Including', { fallback: 'Including' }), " ", d.name, " (", d.pct, "%)")), index.h("td", { class: "booking-room__cell booking-room__cell--right" }, number.formatAmount(this.currency, amount / 100)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (index.h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-left night-cost" }, number.formatAmount(this.currency, (this.room.cost * d.pct) / 100)))));
            });
        })(), this.room.inclusive_taxes?.CALCULATED_INCLUSIVE_TAXES?.map(d => (index.h("tr", null, index.h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, index.h("span", { class: 'booking-room__cell-tax-name' }, t.t('Lcz_Including', { fallback: 'Including' }), " ", d.TAX_NAME, " (", d.TAX_PCT * 100, "%)")), index.h("td", { class: "booking-room__cell booking-room__cell--right" }, number.formatAmount(this.currency, d.CALCULATED_VALUE))))))) : (index.h(index.Fragment, null, (() => {
            const filtered_data = this.room.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (index.h("tr", null, index.h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, index.h("span", { class: 'booking-room__cell-tax-name' }, d.is_exlusive ? t.t('Lcz_Excluding', { fallback: 'Excluding' }) : t.t('Lcz_Including', { fallback: 'Including' }), " ", d.name)), index.h("td", { class: "booking-room__cell booking-room__cell--right" }, number.formatAmount(d.currency.symbol, d.amount))));
            });
        })()))))), index.h("ir-label", { key: '36fa132125bbbbdb4eff01b1451c440a571d7b1b', labelText: `${t.t('Lcz_SmokingOptions')}:`, display: "inline", content: this.getSmokingLabel() }), this.booking.is_direct && (index.h(index.Fragment, { key: '7bdcdfb0bc91f8887a6b29e3dadf1b66d6502462' }, this.room.rateplan.cancelation && (index.h("ir-label", { key: '54405f1379424d362a8e4291c3a555a427333b81', labelText: `${t.t('Lcz_Cancellation')}:`, display: "inline", content: this.room.rateplan.cancelation || '', renderContentAsHtml: true })), this.room.rateplan.guarantee && (index.h("ir-label", { key: '53f1cb9c7570bdc967681423257e05aafc58e996', labelText: `${t.t('Lcz_Guarantee')}:`, display: "inline", content: this.room.rateplan.guarantee || '', renderContentAsHtml: true })))), this.room.ota_meta && (index.h("div", { key: '5fbc997a01603a70145c3b1f972f25d95aa324f3' }, index.h("ir-label", { key: 'f44c18178083cc29ace00e041e485bc324c66f32', labelText: `${t.t('Lcz_MealPlan')}:`, display: "inline", content: this.room.ota_meta.meal_plan }), index.h("ir-label", { key: '02ca5db3d87ae79f0f8da8210307c2b98e7670f5', labelText: `${t.t('Lcz_Policies', { fallback: 'Policies' })}:`, display: "inline", content: this.room.ota_meta.policies })))));
    }
};
IrRoomBreakdown.style = irRoomBreakdownCss();

const irRoomDetailsCss = () => `.sc-ir-room-details-h{display:contents}.booking-room__dates-row.sc-ir-room-details{display:flex;flex-wrap:wrap;gap:var(--wa-space-xs, 0.25rem);align-items:center}.booking-room__date-view.sc-ir-room-details{flex:1 1 150px;min-width:140px;font-size:var(--wa-font-size-s);width:fit-content}.booking-room__guest-row.sc-ir-room-details{display:flex;flex-wrap:wrap;align-items:center;gap:0.5rem}.booking-room__text-reset.sc-ir-room-details{margin:0;padding:0}.booking-room__guest-name.sc-ir-room-details{font-weight:600}.booking-room__bed-info.sc-ir-room-details{color:var(--wa-color-neutral-700)}.booking-room__departure-row.sc-ir-room-details{display:flex;flex-wrap:wrap;align-items:center;gap:var(--wa-space-xs, 0.25rem)}.booking-room__departure-label.sc-ir-room-details{font-weight:500}.booking-room__time-item.sc-ir-room-details{display:flex;align-items:center;gap:0.25rem}@media (min-width: 1280px){.booking-room__departure-row.sc-ir-room-details{gap:var(--wa-space-l, 1.5rem)}}`;

const IrRoomDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.checkIn = index.createEvent(this, "checkIn");
        this.checkOut = index.createEvent(this, "checkOut");
        this.viewGuests = index.createEvent(this, "viewGuests");
        this.openArrivalDialog = index.createEvent(this, "openArrivalDialog");
        this.openDepartureDialog = index.createEvent(this, "openDepartureDialog");
    }
    room;
    booking;
    mainGuest;
    bedPreferences;
    language = 'en';
    includeDepartureTime;
    hasCheckIn = false;
    hasCheckOut = false;
    checkIn;
    checkOut;
    viewGuests;
    openArrivalDialog;
    openDepartureDialog;
    formatVariation({ infant_nbr, adult_nbr, children_nbr }) {
        const adultCount = adult_nbr > 0 ? adult_nbr : 0;
        const childCount = children_nbr > 0 ? children_nbr : 0;
        const infantCount = infant_nbr > 0 ? infant_nbr : 0;
        const adultLabel = adultCount > 1 ? t.t('Lcz_Adults', { fallback: 'adults' }).toLowerCase() : t.t('Lcz_Adult', { fallback: 'adult' }).toLowerCase();
        const childLabel = childCount > 1 ? t.t('Lcz_Children', { fallback: 'Children' }).toLowerCase() : t.t('Lcz_Child', { fallback: 'Child' }).toLowerCase();
        const infantLabel = infantCount > 1 ? t.t('Lcz_Infants').toLowerCase() : t.t('Lcz_Infant').toLowerCase();
        const parts = [];
        if (adultCount > 0) {
            parts.push(`${adultCount} ${adultLabel}`);
        }
        if (childCount > 0) {
            parts.push(`${childCount} ${childLabel}`);
        }
        if (infantCount > 0) {
            parts.push(`${infantCount} ${infantLabel}`);
        }
        return parts.join('&nbsp&nbsp&nbsp&nbsp');
    }
    getBedName() {
        if (this.booking.is_direct) {
            const bed = this.bedPreferences.find(p => p.CODE_NAME === this.room?.bed_preference?.toString());
            if (!bed) {
                return;
            }
            return bed[`CODE_VALUE_${this.language}`] ?? bed.CODE_VALUE_EN;
        }
        return this.room.ota_meta?.bed_preferences;
    }
    render() {
        const bed = this.getBedName();
        return (index.h(index.Fragment, { key: '87cfc967f4d6fb212e7acda08fa5a3b3617b96a9' }, index.h("div", { key: '91af9bf2c23ec0fb1d2bdb615b345f6e0571546f', class: "booking-room__dates-row" }, index.h("ir-date-view", { key: '4f5f2e9008e845e890b0cbb849bab0341ad29c71', format: 'weekday-medium', class: "booking-room__date-view", from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), !calendarData.isSingleUnit(this.room.roomtype.id) && calendarData.calendar_data.is_frontdesk_enabled && this.room.unit && index.h("ir-unit-tag", { key: 'dcf19a9565e44c39e24fbb82fcb342215c596eef', unit: this.room.unit.name }), this.hasCheckIn && (index.h("ir-custom-button", { key: '69df441307b87e97cb800366f7906960d9ab4624', onClickHandler: () => this.checkIn.emit(), id: "checkin", appearance: "outlined", variant: "brand" }, t.t('Lcz_CheckIn', { fallback: 'Check in' }))), this.hasCheckOut && (index.h("ir-custom-button", { key: '3a67baa270fb9faae3bd8130ce1741723352237a', appearance: "outlined", variant: "brand", onClickHandler: () => this.checkOut.emit(), id: "checkout" }, t.t('Lcz_CheckOut', { fallback: 'Check out' })))), index.h("div", { key: '049e2149bd9baf513cbd4491e8d81f48939915fd', class: "booking-room__guest-row" }, index.h("p", { key: '4dfc64b7f2f193dffb6193e521112bb68455c6b6', class: "booking-room__text-reset booking-room__guest-name" }, `${this.mainGuest.first_name || ''} ${this.mainGuest.last_name || ''}`), this.room.rateplan.selected_variation.adult_nbr > 0 && (index.h(index.Fragment, { key: '9139d7026a4b510681fa7d9061f297a4460ac978' }, index.h("wa-tooltip", { key: '74a983bf7f4412341b5d9a9e18539940a8ce8068', for: `view-guest-btn-${this.room.identifier}` }, t.t('Lcz_ViewGuests', { fallback: 'View guests' })), index.h("ir-custom-button", { key: '45e1350407db812f82175207d9632a6d62a8b79b', link: true, onClickHandler: () => this.viewGuests.emit(), id: `view-guest-btn-${this.room.identifier}`, variant: "brand", appearance: "plain" }, index.h("span", { key: 'c05ce866c24a3d75b91b16abf99c244ff6957b9a', innerHTML: this.formatVariation(this.room.occupancy) })))), bed && index.h("p", { key: '6f2ebd907654653db37014c858cc9d06b8be3a1c', class: "booking-room__text-reset booking-room__bed-info" }, "(", bed, ")")), (this.includeDepartureTime || this.booking.is_direct) && (index.h("div", { key: '4ef4f5373cc5d943294d9b4b175d0ad2d3a33360', class: "booking-room__departure-row" }, index.h("div", { key: '820f15d0ce6851f71914423255cfefde1f0b9441', class: "booking-room__time-item" }, index.h("span", { key: '4370c2ed9f1f6098e4a4457c66ca360026db43af', class: "booking-room__departure-label" }, t.t('Lcz_ExpectedArrivalTime', { fallback: 'Expected Arrival Time' }), ":"), index.h("ir-custom-button", { key: 'd953d34aff5d6c2933b45bccd2ca4eca24c012f7', link: true, appearance: "plain", variant: "brand", onClickHandler: () => this.openArrivalDialog.emit() }, this.room.arrival_time?.description || t.t('Lcz_NotProvided', { fallback: 'Not provided' }))), this.includeDepartureTime && (index.h("div", { key: 'e5e9420873a0952ab6273cf3bfde1527445e0155', class: "booking-room__time-item" }, index.h("span", { key: '875ee31332719f76d01a924431562d49bd5fd416', class: "booking-room__departure-label" }, t.t('Lcz_DepartureTime', { fallback: 'Departure time:' })), index.h("ir-custom-button", { key: '319b4750f436423219090e7e9556ef1e7bf15047', link: true, appearance: "plain", variant: "brand", onClickHandler: () => this.openDepartureDialog.emit() }, this.room.departure_time?.description || t.t('Lcz_NotProvided', { fallback: 'Not provided' }))))))));
    }
};
IrRoomDetails.style = irRoomDetailsCss();

const irRoomExtraServicesCss = () => `.booking-room__extra-services.sc-ir-room-extra-services{margin-top:0.5rem}.booking-room__extra-services.sc-ir-room-extra-services{margin-inline-start:calc(1.25rem + var(--wa-space-sm, 0.5rem))}.booking-room__extra-services.sc-ir-room-extra-services wa-divider.sc-ir-room-extra-services{border-color:var(--wa-color-neutral-fill-loud);margin-block:0.35rem}.booking-room__extra-services.sc-ir-room-extra-services::part(body),.booking-room__extra-services.sc-ir-room-extra-services [part~="body"]{display:flex;flex-direction:column;gap:0.625rem;padding:1em}.booking-room__extra-services.sc-ir-room-extra-services::part(header),.booking-room__extra-services.sc-ir-room-extra-services [part~="header"]{padding-inline:1em;border-width:0;padding-bottom:0}.booking-room__extra-services-header.sc-ir-room-extra-services{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-xs, 0.25rem)}.booking-room__extra-services-label.sc-ir-room-extra-services{display:inline-flex;align-items:center;gap:0.5rem;min-width:0}.booking-room__extra-services-icon.sc-ir-room-extra-services{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:1.625rem;height:1.625rem;border-radius:50%;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, var(--wa-color-brand-600))}.booking-room__extra-services-icon.sc-ir-room-extra-services wa-icon.sc-ir-room-extra-services{font-size:0.8rem}.booking-room__extra-services-title.sc-ir-room-extra-services{font-size:var(--wa-font-size-m, 1rem);font-weight:700;line-height:1.2;letter-spacing:-0.01em;color:var(--wa-color-neutral-900, #18181b);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.booking-room__extra-services-count.sc-ir-room-extra-services{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;min-width:1.25rem;height:1.25rem;padding:0 0.375rem;border-radius:999px;font-size:var(--wa-font-size-2xs, 0.7rem);font-weight:700;line-height:1;color:var(--wa-color-brand-on-loud, #fff);background:var(--wa-color-brand-fill-loud, var(--wa-color-brand-600))}.booking-room__extra-services-add.sc-ir-room-extra-services::part(base),.booking-room__extra-services-add.sc-ir-room-extra-services [part~="base"]{transition:background-color var(--wa-transition-fast, 100ms) var(--wa-transition-easing)}.booking-room__extra-services-pinned.sc-ir-room-extra-services,.booking-room__extra-services-list.sc-ir-room-extra-services{display:flex;flex-direction:column;gap:0.625rem}.booking-room__extra-services-details.sc-ir-room-extra-services,.booking-room__extra-services-details.sc-ir-room-extra-services::part(base),.booking-room__extra-services-details.sc-ir-room-extra-services [part~="base"]{background:transparent;border:none}.booking-room__extra-services-details.sc-ir-room-extra-services::part(header),.booking-room__extra-services-details.sc-ir-room-extra-services [part~="header"]{min-height:auto;padding:0.125rem 0;border-radius:0}.booking-room__extra-services-details.sc-ir-room-extra-services::part(content),.booking-room__extra-services-details.sc-ir-room-extra-services [part~="content"]{padding:0.5rem 0 0}.booking-room__extra-services-details.sc-ir-room-extra-services::part(base),.booking-room__extra-services-details.sc-ir-room-extra-services [part~="base"]{--wa-transition-duration:var(--wa-transition-normal, 200ms)}.booking-room__extra-services-toggle-label.sc-ir-room-extra-services{font-size:var(--wa-font-size-xs, 0.75rem);font-weight:600;color:var(--wa-color-brand-fill-loud, var(--wa-color-brand-600))}.booking-room__extra-services-group.sc-ir-room-extra-services{padding-inline-start:0.625rem;border-inline-start:3px solid transparent}.booking-room__extra-services-group--guest.sc-ir-room-extra-services{border-inline-start-color:var(--wa-color-neutral-300, #d4d4d8)}.booking-room__extra-services-group--agent.sc-ir-room-extra-services{border-inline-start-color:var(--wa-color-brand-fill-loud, #3b82f6)}.booking-room__extra-services-group-label.sc-ir-room-extra-services{display:flex;align-items:center;gap:0.4rem;margin:0 0 0.5rem;font-size:var(--wa-font-size-2xs, 0.7rem);font-weight:700;letter-spacing:0.06em;color:var(--wa-color-neutral-500, #71717a)}.booking-room__extra-services-group-label--agent.sc-ir-room-extra-services{color:var(--wa-color-primary-600, #2563eb)}.booking-room__extra-services-empty.sc-ir-room-extra-services{margin:0;padding:0.375rem 0;font-size:var(--wa-font-size-xs, 0.85rem);color:var(--wa-color-neutral-400, #a1a1aa);font-style:italic}`;

/** Extra-service category codes that are never tucked inside the collapsible list — always shown for the room, e.g. Early Check-In / Late Check-Out fees. */
const ALWAYS_VISIBLE_EXTRA_SERVICE_CODES = new Set(['ECI', 'LCO', 'BCT', 'EXB', 'HMP', 'ANP']);
const IrRoomExtraServices = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.requestAddExtraService = index.createEvent(this, "requestAddExtraService");
    }
    room;
    booking;
    isEditable;
    agent;
    currency = 'USD';
    language = 'en';
    svcCategories = [];
    clTransactions = [];
    /** Which collapsible groups ('all' | 'agent' | 'guest') are expanded — keyed so agent/guest folios can be toggled independently. */
    expandedGroups = new Set();
    requestAddExtraService;
    get unitId() {
        return this.room.unit?.id ?? null;
    }
    /** Extra services linked to this unit via `room_identifier`. */
    get roomExtraServices() {
        return (this.booking.extra_services ?? []).filter(service => service.room_identifier === this.room.identifier);
    }
    /** Services whose category is always surfaced (e.g. Early Check-In / Late Check-Out) — never tucked behind the collapse. */
    pinnedOf(services) {
        return services.filter(service => service.category?.code && ALWAYS_VISIBLE_EXTRA_SERVICE_CODES.has(service.category.code));
    }
    /** Everything else — hidden behind the "N more services" disclosure. */
    collapsibleOf(services) {
        return services.filter(service => !service.category?.code || !ALWAYS_VISIBLE_EXTRA_SERVICE_CODES.has(service.category.code));
    }
    setGroupExpanded(groupKey, expanded) {
        const next = new Set(this.expandedGroups);
        if (expanded) {
            next.add(groupKey);
        }
        else {
            next.delete(groupKey);
        }
        this.expandedGroups = next;
    }
    renderExtraServiceItem(service) {
        return (index.h("ir-extra-service", { key: service.booking_system_id ?? service.system_id ?? `${service.category?.code ?? 'service'}-${service.start_date}`, service: service, booking: this.booking, agent: this.agent, bookingNumber: this.booking.booking_nbr, currencySymbol: this.currency, language: this.language, svcCategories: this.svcCategories, clTransactions: this.clTransactions }));
    }
    /** Renders the pinned + collapsible services for one folio group (or the whole list when not in agent mode). */
    renderServiceGroup(groupKey, services) {
        const pinned = this.pinnedOf(services);
        const collapsible = this.collapsibleOf(services);
        return (index.h(index.Fragment, null, pinned.length > 0 && (index.h("div", { class: "booking-room__extra-services-pinned" }, pinned.map((service, idx) => (index.h(index.Fragment, null, this.renderExtraServiceItem(service), idx < pinned.length - 1 && index.h("wa-divider", null)))))), collapsible.length > 0 && (index.h("wa-details", { "icon-placement": "start", class: "booking-room__extra-services-details", appearance: "plain", open: this.expandedGroups.has(groupKey), "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.setGroupExpanded(groupKey, true);
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.setGroupExpanded(groupKey, false);
            } }, index.h("span", { slot: "summary", class: "booking-room__extra-services-toggle-label" }, t.t('Lcz_MoreServicesCount', { fallback: '%1 more service(s)', params: [number.formatCount(collapsible.length)] })), index.h("div", { class: "booking-room__extra-services-list" }, collapsible.map((service, idx) => (index.h(index.Fragment, null, this.renderExtraServiceItem(service), idx < collapsible.length - 1 && index.h("wa-divider", null)))))))));
    }
    render() {
        const services = this.roomExtraServices;
        const canAdd = this.isEditable && !!this.unitId;
        if (!canAdd && services.length === 0) {
            return null;
        }
        const total = services.length;
        const inAgentMode = functions.isAgentMode(this.agent);
        const guestServices = inAgentMode ? services.filter(s => s.agent === null || s.agent === undefined) : [];
        const agentServices = inAgentMode ? services.filter(s => s.agent !== null && s.agent !== undefined) : [];
        const agentName = this.booking.agent?.name ?? t.t('Lcz_Agent', { fallback: 'Agent' });
        return (index.h("wa-card", { appearance: "filled", class: "booking-room__extra-services" }, index.h("div", { slot: "header", class: "booking-room__extra-services-header" }, index.h("span", { class: "booking-room__extra-services-label" }, index.h("span", { class: "booking-room__extra-services-title" }, total > 0 ? t.t('Lcz_Extras', { fallback: 'Extras' }) : t.t('Lcz_AddExtras', { fallback: 'Add Extras' })), total > 0 && index.h("span", { class: "booking-room__extra-services-count" }, number.formatNumber(total))), canAdd && (index.h(index.Fragment, null, index.h("wa-tooltip", { for: `add-extra-service-${this.room.identifier}` }, t.t('Lcz_AddExtraService', { fallback: 'Add extra service' })), index.h("ir-custom-button", { id: `add-extra-service-${this.room.identifier}`, class: "booking-room__extra-services-add", iconBtn: true, size: "s", appearance: "plain", variant: "brand", onClickHandler: () => this.requestAddExtraService.emit() }, index.h("wa-icon", { style: { fontSize: '0.9rem' }, label: t.t('Lcz_AddExtraService', { fallback: 'Add extra service' }), name: "plus" }))))), inAgentMode ? (index.h(index.Fragment, null, index.h("div", { class: "booking-room__extra-services-group booking-room__extra-services-group--agent" }, index.h("p", { class: "booking-room__extra-services-group-label booking-room__extra-services-group-label--agent" }, agentName, index.h("span", null, t.t('Lcz_Folio', { fallback: 'Folio' }))), agentServices.length === 0 ? (index.h("p", { class: "booking-room__extra-services-empty" }, t.t('Lcz_NoAgentServicesAdded', { fallback: 'No agent services added' }))) : (this.renderServiceGroup('agent', agentServices))), index.h("wa-divider", null), index.h("div", { class: "booking-room__extra-services-group booking-room__extra-services-group--guest" }, index.h("p", { class: "booking-room__extra-services-group-label" }, t.t('Lcz_Guest', { fallback: 'Guest' }), index.h("span", null, t.t('Lcz_Folio', { fallback: 'Folio' }))), guestServices.length === 0 ? (index.h("p", { class: "booking-room__extra-services-empty" }, t.t('Lcz_NoGuestServicesAdded', { fallback: 'No guest services added' }))) : (this.renderServiceGroup('guest', guestServices))))) : (this.renderServiceGroup('all', services))));
    }
};
IrRoomExtraServices.style = irRoomExtraServicesCss();

const irRoomGuestsCss = () => ``;

const IrRoomGuests = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal");
    }
    open;
    /**
     * The name of the unit (physical room) currently assigned.
     * Used to label the room in the user interface for clarity. When empty, the room has no
     * assigned unit and {@link roomType} is displayed instead.
     */
    roomName;
    /**
     * The room type name.
     * Displayed as a fallback label when the room has no assigned unit ({@link roomName} is empty).
     */
    roomType;
    /**
     * A unique identifier for the room.
     * This is used to distinguish between rooms, especially when performing operations like saving or checking in guests.
     */
    identifier;
    /**
     * An array of people sharing the room.
     * Contains information about the {t('Lcz_MainGuest', { fallback: 'Main guest' })} and additional guests, such as their name, date of birth, {t('Lcz_Nationality', { fallback: 'Nationality' })}, and ID details.
     */
    sharedPersons = [];
    /**
     * The total number of guests for the room.
     * Determines how many guest input forms to display in the UI.
     */
    totalGuests = 0;
    /**
     * A list of available countries.
     * Used to populate dropdowns for selecting the {t('Lcz_Nationality', { fallback: 'Nationality' })} of guests.
     */
    countries;
    /**
     * A boolean indicating whether the room is in the process of being checked in.
     * If true, additional actions like saving the room state as "checked in" are performed.
     */
    checkIn;
    /**
     * The language used for displaying text content in the component.
     * Defaults to English ('en'), but can be set to other supported languages.
     */
    language = 'en';
    /**
     * A unique booking number associated with the room.
     * This is used for backend operations like saving guest information or checking in the room.
     */
    bookingNumber;
    closeModal;
    isLoading;
    render() {
        return (index.h("ir-drawer", { key: '4b7a5e4c68eb69e760a785372bde67b8d9f39fe4', style: {
                '--ir-drawer-width': '60rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: this.roomName ? t.t('Lcz_RoomDrawerLabel', { fallback: 'Room %1', params: [this.roomName] }) : this.roomType || t.t('Lcz_GuestDetails', { fallback: 'Guest Details' }), open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && (index.h("ir-room-guests-form", { key: 'b249a7e38a3a06b3a50cc61d8846a5f2f5378d47', sharedPersons: this.sharedPersons, roomName: this.roomName, countries: this.countries, totalGuests: this.totalGuests, identifier: this.identifier, bookingNumber: this.bookingNumber, checkIn: this.checkIn, language: this.language, onLoadingChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail;
            } })), index.h("div", { key: '51793be789a5adad2a57f768fe9e133d13f9b708', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: 'c90994dc3e231f725c9482a635e136f797dac1d8', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral" }, t.t('Lcz_Cancel', { fallback: 'Save' })), index.h("ir-custom-button", { key: 'bcec3e0e21f159cffde3424c81d874dbf19cc660', value: "save", loading: this.isLoading === 'save', size: "m", form: `room-guests__${this.identifier}`, type: "submit", variant: "brand" }, t.t('Lcz_Save', { fallback: 'Save' })), this.checkIn && this.roomName && (index.h("ir-custom-button", { key: 'd3cca4d0cdd3a24e1acda231c3c184c04eaf1b09', value: "save_checkin", loading: this.isLoading === 'save_checkin', size: "m", form: `room-guests__${this.identifier}`, type: "submit", variant: "brand" }, t.t('Lcz_CheckIn', { fallback: 'Check in' }))))));
    }
};
IrRoomGuests.style = irRoomGuestsCss();

const defaultGuest = {
    id: -1,
    full_name: '',
    country_id: null,
    dob: '',
    id_info: {
        type: {
            code: null,
            description: null,
        },
        number: '',
    },
    address: null,
    alternative_email: null,
    cci: null,
    city: null,
    country: undefined,
    country_phone_prefix: null,
    email: null,
    first_name: '',
    last_name: '',
    mobile: null,
    nbr_confirmed_bookings: 0,
    notes: null,
    password: null,
    subscribe_to_news_letter: null,
};
/**Date of birth mask for room guests  with min */
const dateMask = {
    mask: Date,
    pattern: 'DD/MM/YYYY',
    lazy: false,
    min: moment.hooks('1900-01-01', 'YYYY-MM-DD').toDate(),
    max: new Date(),
    format: date => moment.hooks(date).format('DD/MM/YYYY'),
    parse: str => moment.hooks(str, 'DD/MM/YYYY').toDate(),
    autofix: true,
    placeholderChar: '_',
    blocks: {
        YYYY: {
            mask: index$4.MaskedRange,
            from: 1900,
            to: new Date().getFullYear(),
            placeholderChar: 'Y',
        },
        MM: {
            mask: index$4.MaskedRange,
            from: 1,
            to: 12,
            placeholderChar: 'M',
        },
        DD: {
            mask: index$4.MaskedRange,
            from: 1,
            to: 31,
            placeholderChar: 'D',
        },
    },
};

const irRoomGuestsFormCss = () => `.sc-ir-room-guests-form-h{display:block;height:100%;position:relative;text-align:start !important;padding-bottom:1rem !important}.id-select.sc-ir-room-guests-form{border-start-end-radius:0;border-end-end-radius:0;border-inline-end-width:0}.sc-ir-room-guests-form-h{display:block;width:100%}.guests-labels.sc-ir-room-guests-form{display:none}.sharing_persons_label.sc-ir-room-guests-form{display:none}.loading-container.sc-ir-room-guests-form{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.guest_document.sc-ir-room-guests-form input.sc-ir-room-guests-form{border-start-start-radius:0;border-end-start-radius:0}.guests-labels.sc-ir-room-guests-form *.sc-ir-room-guests-form,.sharing_persons_label.sc-ir-room-guests-form{margin-bottom:0.5rem;padding-bottom:0}.room-guest__info-container.sc-ir-room-guests-form{display:flex;flex:1 1 0%;align-items:center}.room-guest__document.sc-ir-room-guests-form::part(base),.room-guest__document.sc-ir-room-guests-form [part~="base"]{border-start-start-radius:0;border-end-start-radius:0}.room-guest__document.sc-ir-room-guests-form{flex:1 1 0%}.room-guest__id-info.sc-ir-room-guests-form::part(combobox),.room-guest__id-info.sc-ir-room-guests-form [part~="combobox"]{border-start-end-radius:0;border-end-end-radius:0;border-inline-end-width:0}.room-guest__id-info[open].sc-ir-room-guests-form,.room-guest__id-info.sc-ir-room-guests-form:focus-visible,.room-guest__id-info.sc-ir-room-guests-form:focus-within{z-index:2}.room-guest__section.sc-ir-room-guests-form{display:flex;flex-direction:column;margin-bottom:1rem}.room-guest__section.sc-ir-room-guests-form p.sc-ir-room-guests-form{margin:0;padding:0}.guest_label.sc-ir-room-guests-form{width:100px;display:inline-block;position:relative;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height);margin-bottom:0.5em !important}@media (min-width: 768px){.sharing_persons_label.sc-ir-room-guests-form{display:block}.guest_country_picker.sc-ir-room-guests-form{margin-bottom:3px}.room-guest__section.sc-ir-room-guests-form{display:block}.guest-grid.sc-ir-room-guests-form{display:grid;grid-template-columns:minmax(0, 120px)        minmax(0, 120px)        minmax(0, 120px)        minmax(0, 120px)        minmax(0, 1fr);gap:0.5rem;align-items:flex-start}.guest_label.sc-ir-room-guests-form,.sharing_persons_heading.sc-ir-room-guests-form,.main_guest_heading.sc-ir-room-guests-form{display:none}}`;

const IrRoomGuestsForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal");
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt");
        this.updateRoomGuests = index.createEvent(this, "updateRoomGuests");
        this.loadingChange = index.createEvent(this, "loadingChange");
    }
    /**
     * The name of the room currently being displayed.
     * Used to label the room in the user interface for clarity.
     */
    roomName;
    /**
     * A unique identifier for the room.
     * This is used to distinguish between rooms, especially when performing operations like saving or checking in guests.
     */
    identifier;
    /**
     * An array of people sharing the room.
     * Contains information about the {t('Lcz_MainGuest', { fallback: 'Main guest' })} and additional guests, such as their name, date of birth, {t('Lcz_Nationality', { fallback: 'Nationality' })}, and ID details.
     */
    sharedPersons = [];
    /**
     * The total number of guests for the room.
     * Determines how many guest input forms to display in the UI.
     */
    totalGuests = 0;
    /**
     * A list of available countries.
     * Used to populate dropdowns for selecting the {t('Lcz_Nationality', { fallback: 'Nationality' })} of guests.
     */
    countries;
    /**
     * A boolean indicating whether the room is in the process of being checked in.
     * If true, additional actions like saving the room state as "checked in" are performed.
     */
    checkIn;
    /**
     * The language used for displaying text content in the component.
     * Defaults to English ('en'), but can be set to other supported languages.
     */
    language = 'en';
    /**
     * A unique booking number associated with the room.
     * This is used for backend operations like saving guest information or checking in the room.
     */
    bookingNumber;
    guests = [];
    idTypes = [];
    error = {};
    isLoading;
    propertyCountry;
    autoValidate = false;
    closeModal;
    resetBookingEvt;
    updateRoomGuests;
    loadingChange;
    bookingService = new booking_service.BookingService();
    setupService = new index$2.SetupService();
    componentWillLoad() {
        this.init();
        this.initializeGuests();
    }
    async init() {
        try {
            this.isLoading = true;
            const [country, idTypes] = await Promise.all([this.bookingService.getUserDefaultCountry(), this.setupService.getSetupEntriesByTableName('_ID_TYPE')]);
            this.idTypes = idTypes;
            if (country) {
                this.propertyCountry = this.countries.find(c => c.id === country.COUNTRY_ID);
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    initializeGuests() {
        let guests = [];
        if (this.totalGuests > this.sharedPersons.length) {
            const defaultGuestsCount = this.totalGuests - this.sharedPersons.length;
            guests = [
                ...this.sharedPersons,
                ...Array(defaultGuestsCount).fill({
                    ...defaultGuest,
                    id_info: {
                        ...defaultGuest.id_info,
                        type: {
                            code: this.idTypes[0]?.CODE_NAME || '001',
                            description: this.idTypes[0]?.CODE_VALUE_EN || '',
                        },
                        number: '',
                    },
                }),
            ];
        }
        else {
            guests = [...this.sharedPersons];
        }
        guests = guests.map(g => ({ ...g, dob: new Date(g.dob).getFullYear() === 1900 ? null : g.dob }));
        this.guests = guests.map(g => ({ ...g, dob: g.dob ? moment.hooks(new Date(g.dob)).format('DD/MM/YYYY') : '', country_id: g.country ? g.country.id : null }));
    }
    updateGuestInfo(index, params) {
        const tempGuests = [...this.guests];
        let tempGuest = tempGuests[index];
        tempGuest = { ...tempGuest, ...params };
        tempGuests[index] = tempGuest;
        this.guests = [...tempGuests];
    }
    async saveGuests(submitter) {
        try {
            this.error = {};
            this.loadingChange.emit(submitter);
            this.autoValidate = true;
            console.log({
                sharedPersons: this.sharedPersons,
                guests: this.guests,
            });
            // ZSharedPersons.parse(this.guests);
            for (const guest of this.guests) {
                booking_dto.validateSharedPerson(guest);
            }
            await this.bookingService.handleExposedRoomGuests({
                booking_nbr: this.bookingNumber,
                identifier: this.identifier,
                guests: this.guests
                    .map(g => {
                    if (!g.first_name && g.id === -1) {
                        return null;
                    }
                    return { ...g, dob: g.dob ? moment.hooks(g.dob, 'DD/MM/YYYY').format('YYYY-MM-DD') : null };
                })
                    .filter(Boolean),
            });
            if (submitter === 'save_checkin') {
                await this.bookingService.handleExposedRoomInOut({
                    booking_nbr: this.bookingNumber,
                    room_identifier: this.identifier,
                    status: '001',
                });
            }
            this.closeModal.emit(null);
            this.updateRoomGuests.emit({ identifier: this.identifier, guests: this.guests });
            this.resetBookingEvt.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof types.ZodError) {
                let errors = {};
                error.issues.forEach(e => {
                    errors[e.path[e.path.length - 1]] = true;
                });
                this.error = { ...errors };
            }
        }
        finally {
            this.loadingChange.emit(null);
        }
    }
    render() {
        if (this.isLoading) {
            return (index.h("div", { class: 'loading-container' }, index.h("ir-spinner", null)));
        }
        return (index.h("form", { id: `room-guests__${this.identifier}`, class: "sheet-container", style: { minWidth: '300px' }, onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                this.saveGuests(submitter.value);
            } }, index.h("section", { class: 'sheet-body' }, index.h("div", { class: "" }, index.h("div", { class: "guest-grid guests-labels" }, index.h("p", { class: "" }, t.t('Lcz_MainGuest', { fallback: 'Main guest' })), index.h("p", { class: "" }), index.h("p", { class: " " }, t.t('Lcz_DOB', { fallback: 'D.O.B.' })), index.h("p", { class: "" }, t.t('Lcz_Nationality', { fallback: 'Nationality' })), index.h("p", { class: " " }, t.t('Lcz_Documents', { fallback: 'documents' }))), index.h("h5", { class: "main_guest_heading" }, t.t('Lcz_MainGuest', { fallback: 'Main guest' })), this.guests.map((guest, idx) => {
            let isRowValid = true;
            try {
                booking_dto.validateSharedPerson(guest);
            }
            catch (error) {
                isRowValid = false;
            }
            // console.log(`row ${idx}=>${isRowValid}`);
            return (index.h(index.Fragment, null, idx === 1 && (index.h("div", { class: "d-flex mx-0 px-0" }, index.h("h5", { class: "mx-0 px-0 sharing_persons_heading" }, t.t('Lcz_PersonsSharingRoom', { fallback: 'Persons sharing room' })), index.h("p", { class: "mx-0 px-0 sharing_persons_label" }, t.t('Lcz_PersonsSharingRoom', { fallback: 'Persons sharing room' })))), index.h("div", { key: idx, class: "guest-grid" }, index.h("div", { class: "room-guest__section" }, index.h("label", { htmlFor: `first_name_${idx}`, class: "guest_label" }, t.t('Lcz_FirstName', { fallback: 'First name' })), index.h("ir-validator", { class: "flex-grow-1", schema: booking_dto.ZSharedPerson.shape.first_name }, index.h("ir-input", { "aria-invalid": String(!!this.error['first_name'] && !isRowValid), size: "s", id: `first_name_${idx}`, placeholder: t.t('Lcz_FirstName', { fallback: 'First name' }), "onText-change": e => this.updateGuestInfo(idx, { first_name: e.detail }), value: guest.first_name, maxlength: 40 }))), index.h("div", { class: "room-guest__section" }, index.h("label", { class: "guest_label" }, t.t('Lcz_LastName', { fallback: 'Last name' })), index.h("ir-input", { "aria-invalid": String(!!this.error['last_name'] && !isRowValid), size: "s", id: `last_name_${idx}`, placeholder: t.t('Lcz_LastName', { fallback: 'Last name' }), "onText-change": e => this.updateGuestInfo(idx, { last_name: e.detail }), value: guest.last_name, maxlength: 40 })), index.h("div", { class: "room-guest__section" }, index.h("p", { class: "guest_label" }, t.t('Lcz_DOB', { fallback: 'D.O.B.' })), index.h("ir-validator", { class: "flex-grow-1", schema: booking_dto.ZSharedPerson.shape.dob }, index.h("ir-input", { "aria-invalid": String(!!this.error['dob'] && !isRowValid), id: `dob_${idx}`, mask: dateMask, size: "s", placeholder: "", "onText-change": e => {
                    this.updateGuestInfo(idx, { dob: e.detail });
                }, value: guest.dob }))), index.h("div", { class: "room-guest__section" }, index.h("p", { class: "guest_label" }, t.t('Lcz_Nationality', { fallback: 'Nationality' })), index.h("div", { class: "flex-grow-1" }, index.h("ir-country-picker", { size: "s", variant: "modern", "aria-invalid": String(!!this.error['country_id'] && !guest.country_id), propertyCountry: this.propertyCountry, id: `{t('Lcz_Nationality', { fallback: 'Nationality' })}_${idx}`, error: !!this.error['country_id'] && !guest.country_id, country: this.countries?.find(c => c.id?.toString() === guest.country?.id?.toString()), onCountryChange: e => this.updateGuestInfo(idx, { country_id: e.detail?.id?.toString() ?? null, country: e.detail }), countries: this.countries }))), index.h("div", { class: "room-guest__section" }, index.h("p", { class: "guest_label" }, t.t('Lcz_Documents', { fallback: 'documents' })), index.h("div", { class: 'room-guest__info-container flex-grow-1' }, index.h("wa-select", { class: "room-guest__id-info", defaultValue: guest.id_info?.type?.code ?? this.idTypes[0]?.CODE_NAME, value: guest.id_info?.type?.code, onchange: e => {
                    this.updateGuestInfo(idx, {
                        id_info: {
                            ...this.guests[idx].id_info,
                            type: {
                                code: e.target.value,
                                description: '',
                            },
                        },
                    });
                }, size: "s" }, this.idTypes?.map(t => {
                const label = t[`CODE_VALUE_${this.language.toUpperCase()}`] ?? t[`CODE_VALUE_EN`];
                return (index.h("wa-option", { value: t['CODE_NAME'], label: label }, label));
            })), index.h("wa-input", { size: "s", "aria-invalid": String(!!this.error['number'] && !isRowValid), class: "room-guest__document", defaultValue: guest?.id_info?.number, value: guest?.id_info?.number, maxlength: 18, placeholder: t.t('Lcz_IdNumberPlaceholder', { fallback: '12345' }), onchange: e => this.updateGuestInfo(idx, {
                    id_info: {
                        ...this.guests[idx].id_info,
                        number: e.target.value,
                    },
                }) }))))));
        })))));
    }
};
IrRoomGuestsForm.style = irRoomGuestsFormCss();

const irRoomHeaderCss = () => `.booking-room__meal-report-button.sc-ir-room-header::part(base),.booking-room__meal-report-button.sc-ir-room-header [part~="base"]{height:auto;padding:0.375em 0.625em;font-size:var(--wa-font-size-2xs)}.booking-room__summary-row.sc-ir-room-header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--wa-space-xs, 0.25rem)}.booking-room__summary-text.sc-ir-room-header{margin:0;padding:0}.booking-room__summary-highlight.sc-ir-room-header{font-weight:600}.booking-room__price-row.sc-ir-room-header{display:flex;align-items:center;gap:var(--wa-space-xs)}.booking-room__price.sc-ir-room-header{font-weight:700;color:var(--wa-color-neutral-900);white-space:nowrap;text-align:end}.booking-room__actions.sc-ir-room-header{display:flex;align-items:center}`;

const IrRoomHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.action = index.createEvent(this, "action");
        this.openHbDialog = index.createEvent(this, "openHbDialog");
    }
    room;
    myRoomTypeFoodCat;
    mealCodeName;
    currency = 'USD';
    isEditable;
    hasRoomEdit = false;
    hasRoomDelete = false;
    agent;
    action;
    openHbDialog;
    get isHalfBoard() {
        return this.room?.rateplan?.meal_plan?.code === '003' && calendarData.calendar_data.property.is_frontdesk_enabled;
    }
    get unitId() {
        return this.room.unit?.id ?? null;
    }
    render() {
        return (index.h("div", { key: 'f560bb15dd4ea44a17d52b2887c2adcf318c961a', class: "booking-room__summary-row" }, index.h("p", { key: '412bc42de331a286383f8f28cb3f6f435dedf1a3', class: "booking-room__summary-text" }, index.h("span", { key: 'c7a9e1b634a977312d018c5d077132165e0e1567', class: "booking-room__summary-highlight" }, this.myRoomTypeFoodCat || '', " "), " ", this.mealCodeName, ' ', this.room.rateplan.is_non_refundable && ` - ${t.t('Lcz_NonRefundable', { fallback: 'Non-refundable' })}`, ' ', this.isHalfBoard && (index.h("wa-button", { key: 'fb34f7c84c7515ba2f73ddb359375ace07917985', size: "xs", class: "booking-room__meal-report-button", appearance: "filled", variant: this.room?.hb_preference ? 'brand' : 'warning', onClick: () => this.openHbDialog.emit() }, this.room?.hb_preference === enums.HbPreference.Lunch
            ? t.t('Lcz_WithLunch', { fallback: 'With lunch' })
            : this.room?.hb_preference === enums.HbPreference.Dinner
                ? t.t('Lcz_WithDinner', { fallback: 'With dinner' })
                : t.t('Lcz_ChooseLunchOrDinner', { fallback: 'Choose lunch or dinner' })))), index.h("div", { key: '99b56f59c219d23ed5aef8433918f6735cdfc6ac', class: "booking-room__price-row" }, index.h("span", { key: '888e85a73769f6e13f9320b26b431cf79cfdf549', class: "booking-room__price" }, number.formatAmount(this.currency, this.room['gross_total'])), this.isEditable && (this.hasRoomEdit || this.hasRoomDelete || !!this.unitId) && (index.h("div", { key: '781e09d441fbdb4833bc77a47349436d42ebd02f', class: "booking-room__actions" }, index.h("wa-dropdown", { key: 'acdd0ec30dfa986758e1eb3902193dabd3a5ddaf', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": async (e) => {
                this.action.emit(e.detail.item.value);
            } }, index.h("ir-custom-button", { key: 'c26ff971672e096f750d8df285f62781cf44831a', slot: "trigger", size: "s", class: "booking-room__edit-button", appearance: "plain", id: `actions-room-${this.room.identifier}`, iconBtn: true, variant: "neutral", style: { marginBottom: '4px' } }, index.h("wa-icon", { key: '930f33f48cad803dceddbf41875cef544bea4bf1', style: { fontSize: '1rem' }, label: t.t('Lcz_Actions', { fallback: 'Actions' }), name: "ellipsis-vertical" })), this.hasRoomEdit && index.h("wa-dropdown-item", { key: '406f72463b298c4199640658326533a2144866c4', value: "edit" }, t.t('Lcz_EditUnit', { fallback: 'Edit unit' })), this.hasRoomEdit && index.h("wa-dropdown-item", { key: '0e57ae63304d7320d5f2a7c22c7a0c30f693a584', value: "edit-rates" }, t.t('Lcz_EditNightlyRates', { fallback: 'Edit Nightly Rates' })), functions.isAgentMode(this.agent) && this.hasRoomEdit && (index.h("wa-dropdown-item", { key: 'a856c82fe5fb3b51d89d1a5291a1d9a5dfa6a0d8', value: "toggle" }, t.t('Lcz_ReassignFolioDropdown', {
            params: [this.room.agent ? 'guest' : 'agent'],
        }))), !!this.unitId && index.h("wa-dropdown-item", { key: '0c2a4d0acef52e35ef05c4607a867d1819007cc1', value: "add-extra-service" }, t.t('Lcz_AddExtraServiceToUnit', { fallback: 'Add extra service to this unit' })), this.hasRoomDelete && (index.h("wa-dropdown-item", { key: '284ac969217fdd4d28c3fe5c2afaed3701876e2d', value: "delete", variant: "danger" }, t.t('Lcz_Delete', { fallback: 'Delete' })))))))));
    }
};
IrRoomHeader.style = irRoomHeaderCss();

const irVoidDocumentDialogCss = () => `.sc-ir-void-document-dialog-h{display:contents}.void-document-dialog__message.sc-ir-void-document-dialog{margin:0;font-size:0.9375rem;line-height:1.5;color:var(--wa-color-neutral-700, #3f3f46)}.void-document-dialog__footer.sc-ir-void-document-dialog{display:flex;justify-content:flex-end;gap:0.5rem}`;

const IrVoidDocumentDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.documentVoided = index.createEvent(this, "documentVoided");
        this.toast = index.createEvent(this, "toast");
    }
    isOpen = false;
    isLoading = false;
    request = null;
    /**
     * Emitted once a document has actually been voided server-side.
     * Consumers listen for this to refresh whatever data they own — e.g. ir-guest-billing
     * refetches its own rows, ir-payment-details forwards it into resetBookingEvt.
     */
    documentVoided;
    toast;
    bookingService = new booking_service.BookingService();
    async open(request) {
        this.request = request;
        this.isOpen = true;
    }
    async close() {
        this.isOpen = false;
    }
    get isInvoice() {
        return this.request?.documentType === enums.FdTypes.Invoice;
    }
    async voidInvoice(documentNumber) {
        await this.bookingService.voidInvoice({
            invoice_nbr: documentNumber,
            property_id: calendarData.calendar_data.property.id,
            reason: '',
        });
    }
    async voidReceipt(_documentNumber) {
        await this.bookingService.voidPayment({
            receipt_nbr: _documentNumber,
            booking_nbr: this.request?.bookingNumber,
        });
    }
    async handleConfirm() {
        if (!this.request) {
            return;
        }
        this.isLoading = true;
        try {
            if (this.isInvoice) {
                await this.voidInvoice(this.request.documentNumber);
            }
            else {
                await this.voidReceipt(this.request.documentNumber);
            }
            this.documentVoided.emit(this.request);
            this.isOpen = false;
        }
        catch (error) {
            console.error(error);
            this.toast.emit({
                type: 'error',
                title: t.t('Lcz_Error', { fallback: 'Error' }),
                description: t.t('Lcz_FailedToVoidDocument', { fallback: 'Failed to void document. Please try again.' }),
                position: 'top-right',
            });
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        const documentLabel = this.isInvoice ? t.t('Lcz_DocumentTypeInvoice', { fallback: 'Invoice' }) : t.t('Lcz_DocumentTypeReceipt', { fallback: 'Receipt' });
        const creditDocumentLabel = this.isInvoice ? t.t('Lcz_DocumentTypeCreditNote', { fallback: 'Credit Note' }) : t.t('Lcz_CreditReceipt', { fallback: 'Credit Receipt' });
        return (index.h(index.Host, { key: '63bab095dca402196e24e590044341b255055139' }, index.h("ir-dialog", { key: '540fbb8919f7d1de1503b5725ffb4b4f9f6ef8d0', label: t.t('Lcz_Alert', { fallback: 'Alert' }), open: this.isOpen, lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
                this.request = null;
            } }, index.h("p", { key: '3bcc60d461b1e603a8ba6e4180181044d8f25524', class: "void-document-dialog__message" }, t.t('Lcz_VoidDocumentConfirm', { fallback: 'Void %1 %2 by generating a %3?', params: [documentLabel, this.request?.documentNumber ?? '', creditDocumentLabel] })), index.h("div", { key: '1d7827a73ec989c99b1400088a333c3518fc7f19', slot: "footer", class: "void-document-dialog__footer" }, index.h("ir-custom-button", { key: '0a7a32d49f5ea0d69f4c47faa777170e7b02de09', "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral", disabled: this.isLoading }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '081b4de971453b4bfa154e03bf706a252d39394e', loading: this.isLoading, onClickHandler: () => this.handleConfirm(), size: "m", variant: "danger" }, t.t('Lcz_Confirm', { fallback: 'Confirm' }))))));
    }
};
IrVoidDocumentDialog.style = irVoidDocumentDialogCss();

const otaLabelCss = () => `*.sc-ota-label{margin:0;padding:0}.sc-ota-label-h{display:flex;margin-bottom:5px;gap:5px}.label_title.sc-ota-label{min-width:max-content;padding:0;margin:0;font-weight:600}.ota-message-list.sc-ota-label{margin:0 3px;padding:0;overflow:hidden;width:100%;word-wrap:break-word !important;overflow-wrap:break-word !important}.ota-message-item.sc-ota-label{width:100%;line-height:1.5;margin:0;padding:0;word-wrap:break-word !important;overflow-wrap:break-word !important}.ota-message-item.sc-ota-label::before{content:'- ';margin-inline-end:0.25rem}.ota-visibility-toggle.sc-ota-label{background:white;color:var(--blue);padding:0;margin:0;margin-inline-start:3px;font-size:12px;border:0}.ota-visibility-toggle.sc-ota-label:hover{color:#355270}.ota-message-list.sc-ota-label{margin:0 3px;padding:0;overflow:hidden;width:100%;word-wrap:break-word !important;overflow-wrap:break-word !important;white-space:normal;list-style:none}.ota-message-item.sc-ota-label{width:100%;line-height:1.5;margin:0 0 0 1.2em;padding:0;word-wrap:break-word !important;overflow-wrap:break-word !important;white-space:normal;position:relative}`;

const OtaLabel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Label displayed as the section title.
     */
    label;
    /**
     * Array of OTA notes to display in the list.
     */
    remarks;
    /**
     * Maximum number of remarks to display before showing the "Show More" button.
     */
    maxVisibleItems = 3;
    /**
     * Internal state that determines whether all remarks are shown or only the limited number.
     */
    showAll = false;
    /**
     * Toggles between showing all remarks or only a limited number.
     *
     * Example:
     * ```ts
     * this.toggleShowAll(); // flips showAll state
     * ```
     */
    toggleShowAll = () => {
        this.showAll = !this.showAll;
    };
    render() {
        if (!this.remarks) {
            return null;
        }
        const displayedRemarks = this.showAll ? this.remarks : this.remarks.slice(0, this.maxVisibleItems);
        return (index.h(index.Host, null, index.h("p", { class: 'label_title' }, this.label), index.h("ul", { class: "ota-message-list" }, displayedRemarks.map((remark, index$1) => (index.h("li", { key: v4.v4(), class: "ota-message-item" }, remark.statement, ' ', this.remarks.length > this.maxVisibleItems && index$1 === displayedRemarks.length - 1 && (index.h("button", { class: "ota-visibility-toggle", onClick: this.toggleShowAll }, this.showAll ? t.t('Lcz_ShowLess') : t.t('Lcz_ShowMore')))))))));
    }
};
OtaLabel.style = otaLabelCss();

exports.igl_day_use_unit_list = IglDayUseUnitList;
exports.ir_agent_billing = IrAgentBilling;
exports.ir_applicable_policies = IrApplicablePolicies;
exports.ir_arrival_time_dialog = IrArrivalTimeDialog;
exports.ir_billing = IrBilling;
exports.ir_billing_drawer = IrBillingDrawer;
exports.ir_booking_assign_items = IrBookingAssignItems;
exports.ir_booking_city_ledger = IrBookingCityLedger;
exports.ir_booking_details = IrBookingDetails;
exports.ir_booking_details_drawer = IrBookingDetailsDrawer;
exports.ir_booking_editor = IrBookingEditor;
exports.ir_booking_editor_drawer = IrBookingEditorDrawer;
exports.ir_booking_editor_form = IrBookingEditorForm;
exports.ir_booking_editor_header = IrBookingEditorHeader;
exports.ir_booking_extra_note = IrBookingExtraNote;
exports.ir_booking_guarantee = IrBookingGuarantee;
exports.ir_booking_header = IrBookingHeader;
exports.ir_booking_pricing_drawer = IrBookingPricingDrawer;
exports.ir_booking_pricing_form = IrBookingPricingForm;
exports.ir_booking_rooms = IrBookingRooms;
exports.ir_booking_source_editor_dialog = IrBookingSourceEditorDialog;
exports.ir_booking_source_editor_form = IrBookingSourceEditorForm;
exports.ir_checkout_dialog = IrCheckoutDialog;
exports.ir_city_ledger_fiscal_documents_table = IrCityLedgerFiscalDocumentsTable;
exports.ir_city_ledger_transaction_drawer = IrCityLedgerTransactionDrawer;
exports.ir_city_ledger_transaction_form = IrCityLedgerTransactionForm;
exports.ir_cl_adjustment_fields = IrClAdjustmentFields;
exports.ir_cl_credit_note_fields = IrClCreditNoteFields;
exports.ir_cl_debit_note_fields = IrClDebitNoteFields;
exports.ir_cl_invoice_dialog = IrClInvoiceDialog;
exports.ir_cl_invoice_form = IrClInvoiceForm;
exports.ir_cl_opening_balance_fields = IrClOpeningBalanceFields;
exports.ir_cl_payment_fields = IrClPaymentFields;
exports.ir_departure_time_dialog = IrDepartureTimeDialog;
exports.ir_events_log = IrEventsLog;
exports.ir_extra_service = IrExtraService;
exports.ir_extra_service_config = IrExtraServiceConfig;
exports.ir_extra_service_config_form = IrExtraServiceConfigForm;
exports.ir_extra_services = IrExtraServices;
exports.ir_guest_billing = IrGuestBilling;
exports.ir_guest_info_drawer = IrGuestInfoDrawer;
exports.ir_guest_info_form = IrGuestInfoForm;
exports.ir_hb_preference_dialog = IrHbPreferenceDialog;
exports.ir_payment_analytics = IrPaymentAnalytics;
exports.ir_payment_details = IrPaymentDetails;
exports.ir_payment_folio = IrPaymentFolio;
exports.ir_payment_folio_form = IrPaymentFolioForm;
exports.ir_payment_item = IrPaymentItem;
exports.ir_payment_summary = IrPaymentSummary;
exports.ir_payments_folio = IrPaymentsFolio;
exports.ir_pickup = IrPickup;
exports.ir_pickup_form = IrPickupForm;
exports.ir_pickup_view = IrPickupView;
exports.ir_pms_logs = IrPmsLogs;
exports.ir_reservation_information = IrReservationInformation;
exports.ir_room = IrRoom;
exports.ir_room_breakdown = IrRoomBreakdown;
exports.ir_room_details = IrRoomDetails;
exports.ir_room_extra_services = IrRoomExtraServices;
exports.ir_room_guests = IrRoomGuests;
exports.ir_room_guests_form = IrRoomGuestsForm;
exports.ir_room_header = IrRoomHeader;
exports.ir_void_document_dialog = IrVoidDocumentDialog;
exports.ota_label = OtaLabel;

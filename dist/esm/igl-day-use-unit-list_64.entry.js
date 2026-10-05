import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, a as getElement } from './index-CeHdrJeH.js';
import { e as getExtraServiceDefaultPrice, c as calendar_data, d as getBabyCotPricingModel, i as isOptimReadOnly, a as isSingleUnit } from './calendar-data-vejfJjJ2.js';
import { b as booking_store, B as BookingService, m as modifyBookingStore, e as reserveRooms, V as VariationService, k as setDayUseSelection, g as updateBookedByGuest, s as setBookingDraft, d as setBookingSelectOptions, r as resetBookingStore, l as fillMissingReservedGuestNames, n as getReservedRooms, o as resetAvailability, a as resetReserved, p as hasAtLeastOneRoomSelected, c as calculateTotalRooms, q as getBookingTotalPrice, j as syncFirstRoomGuestName, t as bookedByGuestBaseData } from './booking.service-FGNFrgs8.js';
import { h as getDayUseUnitAvailability, D as DAY_USE_STATUS_ICON, i as formatDayUseStatusText, d as createDateWithOffsetAndHour, j as buildSplitIndex, a as calculateDaysBetweenDates, e as getPrivateNote, l as isEarlyCheckout, f as formatName } from './booking-Bd5Q5qHX.js';
import { S as SvcCategory, b as InvoiceableItemReason, F as FdTypes, a as FdStatus, C as ClTxTypeCode, V as VatIncludedCodes, I as InOut, P as PayTypes, c as PayStatus, H as HbPreference } from './enums-CcLtXwvz.js';
import { t } from './t-BG8YaZr6.js';
import { C as CityLedgerService } from './index-C-cIi7ex.js';
import { A as ApiClient } from './ApiClient-4jHvz1N4.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { E as ExtraServiceSchema, R as ROOM_IN_OUT, v as validateSharedPerson, Z as ZSharedPerson } from './booking.dto-D-ACWjZx.js';
import { f as formatDate } from './ir-date-2sKX7m-4.js';
import { b as formatCount, f as formatAmount, a as formatBookingNumber, c as formatNumber } from './number-2X31jLIQ.js';
import { L as LocaleController, S as SCREEN_TABLES } from './locale.controller-DUn6fc8y.js';
import { d as getSetupEntryLabel, g as groupEntryTablesResult, e as getEntryValue } from './utils-C3byOTBu.js';
import { i as isAgentMode, _ as _formatTime, a as _formatDate, b as _getDay } from './functions-DuaivJG8.js';
import './locales.store-CXJn6ls-.js';
import { a as actionableClTypes, m as mapClTxToFolioRow } from './city-ledger.service-CJ42iPmp.js';
import { a as axios } from './axios-B50ozOIF.js';
import { S as SetupService } from './index-BUvEYPMi.js';
import { R as RoomService } from './room.service-CrlY6wi8.js';
import { P as PaymentService } from './payment.service-D2gbn5FN.js';
import { i as isRequestPending } from './ir-interceptor.store-302gZvQv.js';
import { A as AgentsService } from './agents.service-APCzneIF.js';
import { r as realtimeService } from './realtime.service-CGYmIxkT.js';
import { e as extras, d as showToast, g as getReleaseHoursString, w as toFloat, a as canCheckout, c as canCheckIn, x as renderTime } from './utils-D1YLn2lG.js';
import { L as LanguageSync } from './language-sync-CWmBY0H8.js';
import { R as RoomsGuestsSchema, B as BookedByGuestSchema, D as DayUseHoursSchema, c as createInitialTransactionFormDraft, h as hydrateFormDraftFromTx, r as resetDraftForTransactionType, v as validateCityLedgerTransaction, t as transactionTypeFieldSchema, T as TRANSACTION_TYPE_RATES, a as DATE_INPUT_FORMAT, b as amountFieldSchema, d as taxIdFieldSchema, e as dateFieldSchema, f as entryTypeFieldSchema, p as paymentMethodCodeFieldSchema } from './ir-city-ledger-transaction-form.schema-CtIZkjaI.js';
import { P as PropertyService, t as taxationModes } from './index-CUiibZA_.js';
import { c as coerce, o as objectType, s as stringType, a as ZodIssueCode, f as anyType, Z as ZodError, l as literalType, n as numberType, u as unionType, p as preprocessType } from './types-Clk7NCXk.js';
import { c as createColumnHelper, u as useTable, f as flexRender, a as getSortedRowModel, g as getCoreRowModel } from './useTable-CXkYMQoa.js';
import { S as SetupEntrySchema } from './IBooking-C6czW-Mz.js';
import { t as toAccChargeRule, f as findAccTax, b as getTopLevelSvcCategories, g as groupSvcCategoriesByParent } from './svc-category.utils-BUC2JQ57.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import { P as PAYMENT_TYPES_WITH_METHOD } from './global.variables-34GsmACS.js';
import { M as MaskedRange } from './index-BQB1ooJC.js';
import './calendar-dates-D3hVfsrC.js';
import './commonSchemas-BxK90Oim.js';
import './type-o1ai24d7.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './types-C7G2emJd.js';

const iglDayUseUnitListCss = () => `.sc-igl-day-use-unit-list-h{display:block;height:100%}.day-use-unit-list__grid.sc-igl-day-use-unit-list{display:grid;grid-template-columns:minmax(50px, max-content) 200px 1fr;column-gap:1rem;row-gap:0.25rem;width:100%;animation:day-use-unit-list-in var(--wa-transition-normal, 180ms) ease-out both}.day-use-unit-list__infos.sc-igl-day-use-unit-list{display:flex;flex-direction:column;gap:1.5rem;margin-bottom:1rem}.day-use-unit-list__empty-container.sc-igl-day-use-unit-list{min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center;animation:day-use-unit-list-in var(--wa-transition-normal, 180ms) ease-out both}@keyframes day-use-unit-list-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}@media (prefers-reduced-motion: reduce){.day-use-unit-list__grid.sc-igl-day-use-unit-list,.day-use-unit-list__empty-container.sc-igl-day-use-unit-list{animation:none}}.day-use-unit-list__roomtype-name.sc-igl-day-use-unit-list{grid-column:1 / -1;margin:1rem 0 0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m);margin-bottom:0.5rem}.day-use-unit-list__roomtype-name.sc-igl-day-use-unit-list:first-child{margin-top:0}.day-use-unit-list__row.sc-igl-day-use-unit-list{display:grid;grid-template-columns:subgrid;grid-column:1 / -1;align-items:center;min-height:var(--wa-form-control-height, 2.25rem);border-radius:var(--wa-border-radius-m);transition:background-color var(--wa-transition-fast, 120ms) ease}.day-use-unit-list__row--current.sc-igl-day-use-unit-list{background-color:var(--wa-color-brand-fill-quiet)}.day-use-unit-list__unit-name.sc-igl-day-use-unit-list{display:flex;align-items:center;gap:0.25rem;white-space:nowrap;color:var(--wa-color-text-normal);margin-inline-start:1rem}.day-use-unit-list__day-status-icon.sc-igl-day-use-unit-list{margin-inline-start:0.25rem;vertical-align:middle;color:var(--wa-color-warning-fill-loud)}.day-use-unit-list__day-status-text.sc-igl-day-use-unit-list{font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-warning-fill-loud);white-space:nowrap}.day-use-unit-list__price-input.sc-igl-day-use-unit-list{width:100%}.day-use-unit-list__book-cell.sc-igl-day-use-unit-list{display:flex;align-items:center;gap:0.5rem;justify-self:start}.day-use-unit-list__current-tag.sc-igl-day-use-unit-list{flex-shrink:0}`;

const IglDayUseUnitList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.unitSelected = createEvent(this, "unitSelected");
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
        const { dayUseSelection } = booking_store;
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
            const { available, dayStatus, checkoutTime, checkinTime } = getDayUseUnitAvailability(unit.calendar_cell);
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
        const svcDefaultPrice = getExtraServiceDefaultPrice(SvcCategory.DayUse);
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
            return (h("div", { class: "day-use-unit-list__empty-container" }, h("ir-empty-state", { message: t('Lcz_NoUnitsAvailableForSelectedDate', { fallback: 'No units available for the selected date.' }) })));
        }
        return (h(Host, null, availableRoomTypes.length > 0 && (h("div", { class: "day-use-unit-list__infos" }, this.mode !== 'BAR_BOOKING' && (h("p", { class: 'm-0 p-0' }, this.currentExtraService
            ? t('Lcz_EditExistingUnitOrSwitchBooking', { fallback: 'Edit the existing unit or switch the booking to another one.' })
            : t('Lcz_PickUnitForDayUse', { fallback: 'Pick a unit for day-use.' }))), calendar_data.property.tax_statement && (h("wa-callout", { size: "s", variant: "neutral", appearance: "filled", class: "booking-editor-header__tax_statement" }, calendar_data.property.tax_statement)))), h("div", { class: "day-use-unit-list__grid" }, availableRoomTypes.map(roomType => {
            const units = this.getAvailableUnits(roomType);
            if (units.length === 0) {
                return null;
            }
            return (h(Fragment, null, h("h5", { class: "day-use-unit-list__roomtype-name" }, roomType.name), units.map(({ unit, dayStatus, checkoutTime, checkinTime }) => {
                const isCurrent = this.isCurrentUnit(unit.id);
                const dayStatusIcon = dayStatus ? DAY_USE_STATUS_ICON[dayStatus] : null;
                return (h("div", { class: `day-use-unit-list__row${isCurrent ? ' day-use-unit-list__row--current' : ''}`, key: `day-use-unit-row-${unit.id}` }, h("span", { class: "day-use-unit-list__unit-name" }, unit.name, dayStatus && dayStatusIcon && (h(Fragment, null, h("wa-tooltip", { for: `day-use-day-status-${unit.id}` }, formatDayUseStatusText(dayStatus, checkoutTime, checkinTime)), h("wa-icon", { name: dayStatusIcon, id: `day-use-day-status-${unit.id}`, class: `day-use-unit-list__day-status-icon day-use-unit-list__day-status-icon--${dayStatus}` })))), h("ir-input", { class: "day-use-unit-list__price-input", size: "s", mask: "price", value: this.getPrice(unit.id).toString(), "onText-change": e => (this.priceOverrides = { ...this.priceOverrides, [unit.id]: Number(e.detail) }) }, h("span", { slot: "start" }, this.currency?.symbol)), h("div", { class: "day-use-unit-list__book-cell" }, h("ir-custom-button", { "data-testid": "book", type: "button", size: "s", variant: "brand", appearance: this.currentExtraService && !isCurrent ? 'outlined' : 'accent', class: "day-use-unit-list__book-button", loading: this.resolvingUnitId === unit.id, disabled: this.resolvingUnitId !== null && this.resolvingUnitId !== unit.id, onClickHandler: () => this.unitSelected.emit({ unit, roomType, price: this.getPrice(unit.id), isCustomPrice: this.isCustomPrice(unit.id) }) }, t('Lcz_Book', { fallback: 'Book' })), dayStatus && h("span", { class: "day-use-unit-list__day-status-text" }, formatDayUseStatusText(dayStatus, checkoutTime, checkinTime)))));
            })));
        }))));
    }
};
IglDayUseUnitList.style = iglDayUseUnitListCss();

const irAgentBillingCss = () => `.sc-ir-agent-billing-h{display:flex;flex-direction:column;height:100%}.billing__container.sc-ir-agent-billing{display:flex;flex-direction:column;height:100%;gap:var(--wa-space-l);padding:0 var(--wa-space-l)}.agent-billing__table.sc-ir-agent-billing{border:0;border-radius:0}.agent-bill__loader-container.sc-ir-agent-billing{display:flex;align-items:center;justify-content:center;height:100%;width:100%;min-height:70vh}.billing__section-title-row.sc-ir-agent-billing{display:flex;align-items:center;justify-content:space-between}.billing__section-title.sc-ir-agent-billing{margin:0;padding:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m)}.billing__actions-row.sc-ir-agent-billing{display:flex;align-items:center;justify-content:flex-end;gap:0.5rem}.billing__invoice-nbr.sc-ir-agent-billing{margin:0;padding:0}.billing__invoice-nbr.--secondary.sc-ir-agent-billing{font-size:0.75rem}.billing__price-col.sc-ir-agent-billing{text-align:end !important}.billing__cards.sc-ir-agent-billing{display:flex;flex-direction:column;gap:var(--wa-space-m);padding-bottom:var(--wa-space-l) !important}.billing__card.sc-ir-agent-billing{display:block}.billing__card-header.sc-ir-agent-billing{display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem}.billing__card-header-info.sc-ir-agent-billing{display:flex;flex-direction:column}.billing__card-number.sc-ir-agent-billing{margin:0;font-weight:var(--wa-font-weight-heading);font-family:var(--wa-font-family-heading)}.billing__card-type.sc-ir-agent-billing{margin:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-secondary)}.billing__card-download-btn.sc-ir-agent-billing{display:flex;align-items:center}.billing__card-details.sc-ir-agent-billing{display:flex;gap:var(--wa-space-xs);justify-content:space-between}.billing__card-detail.sc-ir-agent-billing{display:flex;flex-direction:column}.billing__card-detail-label.sc-ir-agent-billing{margin:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.billing__card-detail-label.--amount.sc-ir-agent-billing{text-align:end !important}.billing__card-detail-value.sc-ir-agent-billing{margin:0;font-weight:var(--wa-font-weight-regular);font-size:var(--wa-font-size-s)}.billing__card-void-btn.sc-ir-agent-billing{flex:1 1 0%}.billing__card-footer.sc-ir-agent-billing{display:flex}.table-container.sc-ir-agent-billing{display:none}.billing__card.sc-ir-agent-billing::part(footer),.billing__card.sc-ir-agent-billing [part~="footer"]{padding-top:1rem;padding-bottom:1rem}@media (min-width: 768px){.billing__cards.sc-ir-agent-billing{display:none}.table-container.sc-ir-agent-billing{display:block}}`;

const IrAgentBilling = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    fiscalDocuments = [];
    isLoading = false;
    hasFetched = false;
    invoiceDialogRef;
    cityLedgerService = new CityLedgerService();
    apiClientService = new ApiClient();
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
            return (h("div", { class: 'agent-bill__loader-container' }, h("ir-spinner", null)));
        }
        return (h(Host, null, h("div", { class: "billing__container" }, h("div", { class: "billing__section-title-row" }, h("h4", { class: "billing__section-title" }, t('Lcz_IssuedDocuments', { fallback: 'Issued documents' })), h("ir-custom-button", { onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.invoiceDialogRef.openModal();
            }, appearance: 'accent', class: "booking-header__stretched-btn", size: "s", variant: "brand" }, t('Lcz_IssueInvoice', { fallback: 'Issue Invoice' }))), h("ir-city-ledger-fiscal-documents-table", { class: 'agent-billing__table', rows: this.fiscalDocuments, booking: this.booking, isLoading: this.isLoading, hasFetched: this.hasFetched, agentId: this.booking?.agent?.id ?? null, currencySymbol: calendar_data.property?.currency?.symbol ?? '$', fromDate: this.booking?.from_date ?? null, toDate: this.booking?.to_date ?? null, hasDates: true, ticket: this.apiClientService.getToken(), propertyId: calendar_data.property?.id, onFetchRequested: () => this.fetchFiscalDocuments() })), h("ir-cl-invoice-dialog", { mode: "booking", agentId: this.booking.agent?.id, booking: this.booking, startDate: this.booking.from_date, endDate: this.booking.to_date, currencyId: calendar_data.property.currency.id, ref: el => (this.invoiceDialogRef = el) })));
    }
    static get watchers() { return {
        "booking": [{
                "handleBookingChange": 0
            }]
    }; }
};
IrAgentBilling.style = irAgentBillingCss();

// HelpDocButton.tsx
const HelpDocButton = ({ message, href, class: wrapperClass }) => (h("div", { class: wrapperClass }, h("wa-tooltip", { for: "help-button" }, message), h("wa-button", { id: "help-button", href: href, size: "s", target: "_blank", "aria-label": message, appearance: "plain", variant: "neutral" }, h("wa-icon", { name: "circle-info", style: { fontSize: '1rem' } }))));

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
                const checkInDate = hooks(room.from_date, 'YYYY-MM-DD', true);
                if (!checkInDate.isValid()) {
                    return;
                }
                // const checkInDateStr = checkInDate.format('YYYY-MM-DD');
                //Remove check-in dates and above from brackets
                const oldBrackets = cancellationPolicy.brackets.filter(bracket => {
                    const bracketDate = hooks(bracket.due_on, 'YYYY-MM-DD', true);
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
                if (room.rateplan.is_non_refundable) {
                    // Non-refundable rooms are always 100% of the total price from the day the booking was made
                    filteredBrackets = [this.buildFullChargeBracket(room, this._booking.booked_on.date)];
                }
                else {
                    const inDate = hooks(room.from_date, 'YYYY-MM-DD', true);
                    const outDate = hooks(room.to_date, 'YYYY-MM-DD', true);
                    const stayNights = outDate.isValid() && inDate.isValid() ? outDate.diff(inDate, 'days') : 0;
                    const fullChargeDate = stayNights > 1 ? inDate.clone().add(1, 'day').format('YYYY-MM-DD') : inDate.format('YYYY-MM-DD');
                    filteredBrackets.push(this.buildFullChargeBracket(room, fullChargeDate));
                    filteredBrackets.sort((a, b) => {
                        const aDate = hooks(a.due_on, 'YYYY-MM-DD', true);
                        const bDate = hooks(b.due_on, 'YYYY-MM-DD', true);
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
     * Builds a synthetic bracket charging 100% of the room's total price from the given date.
     */
    buildFullChargeBracket(room, dueOn) {
        return {
            amount: room.total,
            amount_formatted: '',
            code: '',
            currency_id: this._booking.currency.id,
            due_on: dueOn,
            due_on_formatted: '',
            gross_amount: room.gross_total,
            gross_amount_formatted: '',
            statement: t('Lcz_PercentOfTotalPrice', { fallback: '%1% of total price', params: [formatCount(100)] }),
        };
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
        const today = hooks().startOf('day');
        for (const bracket of brackets) {
            const dueDate = hooks(bracket.due_on, 'YYYY-MM-DD', true);
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
        registerInstance(this, hostRef);
        this.generatePayment = createEvent(this, "generatePayment");
    }
    booking;
    propertyId;
    language = 'en';
    cancellationStatements = [];
    isLoading = false;
    guaranteeAmount;
    generatePayment;
    shouldShowCancellationBrackets = true;
    applicablePoliciesService = new ApplicablePoliciesService(new BookingService());
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
                language: LocaleController.language,
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
            return formatDate(d1, 'MMM DD');
        }
        return formatDate(d1, 'MMM DD, YYYY');
    }
    getBracketLabelsAndArrowState({ bracket, index, brackets, checkInDate }) {
        // Validate inputs
        if (!bracket || !brackets || index < 0 || index >= brackets.length) {
            return { leftLabel: null, rightLabel: null, showArrow: false };
        }
        // Parse dates with validation
        const bookedOnDate = hooks(this.booking.booked_on.date, 'YYYY-MM-DD');
        const bracketDueDate = hooks(bracket.due_on, 'YYYY-MM-DD');
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
        const momentCheckInDate = hooks(checkInDate, 'YYYY-MM-DD');
        if (bracketDueDate.isSame(momentCheckInDate, 'days')) {
            return {
                leftLabel: `${formatDate(momentCheckInDate, 'MMM DD')} ${t('Lcz_Onwards', { fallback: 'onwards' })}`,
                showArrow: false,
                rightLabel: '',
            };
        }
        return {
            leftLabel: formatDate(bracketDueDate, 'MMM DD'),
            showArrow: true,
            rightLabel: formatDate(checkInDate, 'MMM DD, YYYY'),
        };
    }
    handleMultipleBrackets(bracket, index, brackets, checkInDate) {
        const bracketDueDate = hooks(bracket.due_on, 'YYYY-MM-DD');
        const momentCheckInDate = hooks(checkInDate, 'YYYY-MM-DD');
        // First bracket
        if (index === 0) {
            const nextBracket = brackets[index + 1];
            if (!nextBracket) {
                return { leftLabel: null, rightLabel: null, showArrow: false };
            }
            let nextBracketDueDate = hooks(nextBracket.due_on, 'YYYY-MM-DD');
            if (!nextBracketDueDate.isValid()) {
                return { leftLabel: null, rightLabel: null, showArrow: false };
            }
            if (bracket.amount === 0) {
                nextBracketDueDate = nextBracketDueDate.clone().add(-1, 'days');
            }
            return {
                leftLabel: t('Lcz_UntilLabel', { fallback: 'Until' }),
                showArrow: false,
                rightLabel: nextBracketDueDate.isSame(momentCheckInDate, 'dates')
                    ? formatDate(nextBracketDueDate.clone().add(-1, 'days'), 'MMM DD, YYYY')
                    : formatDate(nextBracketDueDate, 'MMM DD, YYYY'),
            };
        }
        if (hooks(bracket.due_on, 'YYYY-MM-DD').isSameOrAfter(momentCheckInDate, 'days')) {
            return {
                leftLabel: `${formatDate(momentCheckInDate, 'MMM DD')} ${t('Lcz_Onwards', { fallback: 'onwards' })}`,
                showArrow: false,
                rightLabel: '',
            };
        }
        // Last bracket
        if (index === brackets.length - 1) {
            return {
                leftLabel: formatDate(bracketDueDate.clone(), 'MMM DD'),
                showArrow: true,
                rightLabel: formatDate(checkInDate, 'MMM DD, YYYY'),
            };
        }
        // Middle brackets
        const nextBracket = brackets[index + 1];
        if (!nextBracket) {
            return { leftLabel: null, rightLabel: null, showArrow: false };
        }
        const nextBracketDueDate = hooks(nextBracket.due_on, 'YYYY-MM-DD');
        if (!nextBracketDueDate.isValid()) {
            return { leftLabel: null, rightLabel: null, showArrow: false };
        }
        // Calculate the end of current bracket period (day before next bracket starts)
        const periodEndDate = nextBracketDueDate.isAfter(momentCheckInDate, 'days') ? momentCheckInDate : nextBracketDueDate.clone();
        const haveSameDays = bracketDueDate.isSame(periodEndDate.clone().add(-1, 'days'), 'days');
        return {
            leftLabel: this.formatPreviousBracketDueOn(bracketDueDate, periodEndDate),
            showArrow: !haveSameDays,
            rightLabel: haveSameDays ? '' : formatDate(periodEndDate.add(-1, 'days'), 'MMM DD, YYYY'),
        };
    }
    generateCancellationStatement() {
        const label = t('Lcz_IfCancelledToday', { fallback: 'if cancelled today' });
        const { cancelation_penality_as_if_today } = this.booking.financial;
        if (cancelation_penality_as_if_today === 0) {
            if (this.booking.financial.collected > 0) {
                return t('Lcz_NoRefund', { fallback: 'No refund %1', params: [label] });
            }
            return t('Lcz_NoPaymentRequired', { fallback: 'No payment required %1', params: [label] });
        }
        return `${cancelation_penality_as_if_today < 0 ? t('Lcz_Refund', { fallback: 'Refund' }) : t('Lcz_Charge', { fallback: 'Charge' })} ${formatAmount(calendar_data.currency.symbol, Math.abs(cancelation_penality_as_if_today))} ${label}`;
    }
    _getCurrentBracket(brackets) {
        if (!Array.isArray(brackets) || brackets.length === 0)
            return null;
        const today = hooks().startOf('day');
        // Parse + validate + sort ascending by due_on
        const parsed = brackets
            .map(b => ({ b, date: hooks(b.due_on, 'YYYY-MM-DD', true).startOf('day') }))
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
        return (h(Host, null, this.guaranteeAmount !== 0 && (h("section", null, h("wa-callout", { variant: "danger", class: "applicable-policies__guarantee" }, h("div", { class: "applicable-policies__guarantee-info" }, h("p", { class: "applicable-policies__guarantee-date" }, formatDate(this.booking.booked_on.date, 'MMM DD, YYYY')), h("p", { class: "applicable-policies__guarantee-amount" }, h("span", { class: "px-1" }, formatAmount(calendar_data.currency.symbol, remainingGuaranteeAmount < 0 ? Math.abs(remainingGuaranteeAmount) : this.guaranteeAmount))), h("p", { class: "applicable-policies__guarantee-label" }, remainingGuaranteeAmount < 0 ? t('Lcz_GuaranteeBalance', { fallback: 'Guarantee balance' }) : t('Lcz_Guarantee', { fallback: 'Guarantee' }))), remainingGuaranteeAmount < 0 && (h("div", { class: "applicable-policies__guarantee-action" }, h("ir-custom-button", { onClickHandler: () => {
                this.generatePayment.emit({
                    amount: Math.abs(remainingGuaranteeAmount),
                    currency: calendar_data.currency,
                    due_on: hooks().format('YYYY-MM-DD'),
                    pay_type_code: null,
                    reason: '',
                    type: 'OVERDUE',
                });
            }, size: "s" }, t('Lcz_Pay', { fallback: 'Pay' }))))))), h("section", null, h("div", { class: "applicable-policies__container" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("p", { class: "applicable-policies__title font-size-large p-0 m-0" }, t('Lcz_CancellationSchedule', { fallback: 'Cancellation Schedule' })), h(HelpDocButton, { message: t('Lcz_HelpTooltip', { fallback: 'Help' }), href: "https://help.igloorooms.com/extranet/booking-details/guarantee-and-cancellation" })), h("p", { class: "applicable-policies__no-penalty" }, this.generateCancellationStatement())), this.cancellationStatements?.length > 0 && this.cancellationStatements.every(e => e.brackets.length > 0) && this.shouldShowCancellationBrackets && (h("wa-callout", { variant: "brand", class: "applicable-policies__statements" }, this.cancellationStatements?.map(statement => {
            const currentBracket = this._getCurrentBracket(statement.brackets);
            // const isTodaySameOrAfterCheckInDate = moment().isSameOrAfter(moment(statement.checkInDate, 'YYYY-MM-DD').add(1, 'days'));
            return (h("div", { class: "applicable-policies__statement" }, this.cancellationStatements.length > 1 && (h("p", { class: "applicable-policies__room" }, h("b", null, statement.roomType.name), " ", statement.ratePlan['short_name'], ' ', statement.ratePlan.is_non_refundable ? ` - ${t('Lcz_NonRefundable', { fallback: 'Non-refundable' })}` : '')), h("div", { class: "applicable-policies__brackets" }, statement.brackets.map((bracket, idx) => {
                const { leftLabel, rightLabel, showArrow } = this.getBracketLabelsAndArrowState({
                    index: idx,
                    bracket,
                    brackets: statement.brackets,
                    checkInDate: statement.checkInDate,
                });
                const isInCurrentBracket = hooks(bracket.due_on, 'YYYY-MM-DD').isSame(currentBracket, 'date');
                return (h("div", { class: { 'applicable-policies__bracket': true, 'applicable-policies__highlighted-bracket': isInCurrentBracket } }, h("p", { class: "applicable-policies__bracket-dates" }, leftLabel, ' ', showArrow && h("ir-icons", { name: "arrow_right", class: "applicable-policies__icon ir-flip-rtl", style: { '--icon-size': '0.875rem' } }), ' ', rightLabel), h("p", { class: "applicable-policies__amount" }, formatAmount(calendar_data.currency.symbol, bracket.gross_amount)), h("p", { class: "applicable-policies__statement-text" }, bracket.amount === 0 ? t('Lcz_NoPenalty', { fallback: 'No penalty' }) : bracket.statement)));
            })), h("div", { class: "applicable-policies__brackets-table" }, h("table", null, h("tbody", null, statement.brackets.map((bracket, idx) => {
                const { leftLabel, rightLabel, showArrow } = this.getBracketLabelsAndArrowState({
                    index: idx,
                    bracket,
                    brackets: statement.brackets,
                    checkInDate: statement.checkInDate,
                });
                const isInCurrentBracket = hooks(bracket.due_on, 'YYYY-MM-DD').isSame(currentBracket, 'date');
                return (h("tr", { class: { 'applicable-policies__highlighted-bracket': isInCurrentBracket } }, h("td", { class: "applicable-policies__bracket-dates" }, leftLabel, ' ', showArrow && h("ir-icons", { name: "arrow_right", class: "applicable-policies__icon ir-flip-rtl", style: { '--icon-size': '0.875rem' } }), ' ', rightLabel), h("td", { class: "applicable-policies__amount px-1" }, formatAmount(calendar_data.currency.symbol, bracket.gross_amount)), h("td", { class: "applicable-policies__statement-text" }, bracket.amount === 0 ? t('Lcz_NoPenalty', { fallback: 'No penalty' }) : bracket.statement)));
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
        registerInstance(this, hostRef);
        this.arrivalTimeClose = createEvent(this, "arrivalTimeClose");
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
    bookingService = new BookingService();
    dialogRef;
    closedBySave = false;
    handleOpenChange(next) {
        if (next) {
            this.selectedValue = this.room?.arrival_time?.code ?? null;
            const existing = this.existingEarlyCheckInService;
            this.extraServicePrice = existing ? existing.price : Number(getExtraServiceDefaultPrice('ECI'));
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
        const checkInFrom = calendar_data.property?.time_constraints?.check_in_from;
        const offset = calendar_data.property?.city?.gmt_offset;
        const match = checkInFrom?.match(/^(\d{1,2}):(\d{2})$/);
        if (hour === undefined || !match || offset === undefined)
            return false;
        const [, checkInHour, checkInMinute] = match;
        const optionTime = createDateWithOffsetAndHour(offset, hour, 0);
        const checkInTime = createDateWithOffsetAndHour(offset, Number(checkInHour), Number(checkInMinute));
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
        return (h("ir-dialog", { key: '684940d52aac5cb5ad9fc605299edc6b1cdde528', open: this.open, label: t('Lcz_ExpectedArrivalTime', { fallback: 'Expected Arrival Time' }), ref: el => (this.dialogRef = el), onIrDialogHide: e => {
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
            } }, h("div", { key: 'f6685badc7b44568a307afecd4714120f4192f30', class: 'ir-time-dialog__body' }, h("div", { key: 'a8e47f44d7e21737bde69b2fb26ee89696a5699f', class: 'ir-time-dialog__current-unit' }, h("span", { key: '61a73751d9ee0e2de67a3d3308e70ea343a9cb7c' }, this.room?.roomtype?.name), " ", h("span", { key: '778ee8290dc6e9873521eb70f5bb22d9a6d6d311' }, this.room?.rateplan?.short_name), " ", h("ir-unit-tag", { key: '9bafb16cc9e5a68fbf927d3f53646f115a55a7c3', unit: this.room?.unit?.name })), h("wa-select", { key: '9cfc2e16ad7528a1c3b4ec55d518529e0144c5c6', size: "s", placeholder: t('Lcz_NotProvided', { fallback: 'Not provided' }), value: this.selectedValue ?? '', "onwa-after-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, defaultValue: this.selectedValue ?? '', onchange: e => (this.selectedValue = e.target.value) }, this.arrivalTime?.map(time => (h("wa-option", { key: time.CODE_NAME, value: time.CODE_NAME }, getSetupEntryLabel(time, this.language), this.isEarlyCheckIn(time) ? t('Lcz_EarlyCheckInSuffix', { fallback: ' (Early check-in)' }) : '')))), this.selectedIsEarlyCheckIn && (h("div", { key: 'dd6202a74a087c3984816d85aadb22203d8e4775', class: "ir-time-dialog__insight" }, h("div", { key: '8d4d5ef049fa6fa7706f38a78424433be072ef98', class: "ir-time-dialog__insight-row" }, h("wa-icon", { key: '3b7aaf5a69ccb76e625389f23e81a72df9b150c3', class: "ir-time-dialog__insight-icon", name: "clock" }), h("div", { key: 'b2a42855a45881fb4abfdf8cf10159aac7b14e4a', class: "ir-time-dialog__insight-copy" }, h("p", { key: 'ed6d576d97a3c65eb0d9f3e1315617ebb4d5eb10', class: "ir-time-dialog__insight-title" }, t('Lcz_ChargeAsEarlyCheckInQuestion', { fallback: 'Would you like to charge it as an Early Check-in?' })), h("p", { key: 'b34555cbf608b98a59c99b6488d32fc9a0471d22', class: "ir-time-dialog__insight-subtitle" }, t('Lcz_AddedAsAccommodationExtraServiceHint', { fallback: 'This will be added as an accommodation extra service' })))), this.createExtraService && (h("div", { key: '0275b6cd7625bbb10494945f250d4c76634112e1', class: "ir-time-dialog__insight-price" }, h("ir-validator", { key: '004dfc3185f84a0620c30bae45456e1b15237ff7', value: this.extraServicePrice, schema: ExtraServiceSchema.shape.price }, h("ir-input", { key: '8078863fac559e16ac576b1a5170afc0bc1d1140', "onText-change": e => (this.extraServicePrice = Number(e.detail)), defaultValue: this.extraServicePrice?.toString(), value: this.extraServicePrice?.toString(), mask: 'price', withClear: true, type: "text" }, h("span", { key: '0303318c4758aba9d089819b19cf35e8b66d148b', slot: "start" }, this.currencySymbol)))))))), h("div", { key: 'bbf0493e66910c749015716da654d3c69605b9df', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'cc6ce4c47c802bb2d40b667bfc719286af5a23a7', size: "m", variant: "neutral", appearance: "filled", "data-dialog": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'ccd00b57723fbe483e5383e7dd27576b47e104bb', size: "m", variant: "brand", loading: this.isLoading, disabled: !this.selectedValue, onClickHandler: e => this.handleConfirm(e), appearance: "accent" }, t('Lcz_Save', { fallback: 'Save' })))));
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
        registerInstance(this, hostRef);
        this.billingClose = createEvent(this, "billingClose");
    }
    get el() { return getElement(this); }
    booking;
    isAllServicesAgentOwned;
    agent;
    async handleBookingChange() {
        this.isAgentMode = isAgentMode(this.agent);
        this.setTabGroupActive();
    }
    isAgentMode = false;
    currentTab;
    billingClose;
    componentWillLoad() {
        this.isAgentMode = isAgentMode(this.agent);
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
            return (h("wa-tab-group", { activation: "manual", "onwa-tab-show": e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.currentTab = e.detail.name.toString();
                }, active: this.currentTab }, h("wa-tab", { panel: "guest", disabled: this.isAllServicesAgentOwned }, t('Lcz_Guest', { fallback: 'Guest' })), h("wa-tab", { panel: "agent" }, t('Lcz_Agent', { fallback: 'Agent' })), h("wa-tab-panel", { name: "guest" }, this.currentTab === 'guest' && h("ir-guest-billing", { booking: this.booking })), h("wa-tab-panel", { name: "agent" }, this.currentTab === 'agent' && h("ir-agent-billing", { booking: this.booking }))));
        }
        return h("ir-guest-billing", { booking: this.booking });
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
        registerInstance(this, hostRef);
        this.billingClose = createEvent(this, "billingClose");
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
        return (h("ir-drawer", { key: 'f6a74445272b7280db7f17be26bf577424de0a9c', style: {
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
            }, open: this.open, label: t('Lcz_Billing', { fallback: 'Billing' }) }, this.open && h("ir-billing", { key: '32334285e91c412ad0949dbcd7fcf42167a31510', isAllServicesAgentOwned: this.isAllServicesAgentOwned, booking: this.booking, agent: this.agent })));
    }
};
IrBillingDrawer.style = irBillingDrawerCss();

const irBookingAssignItemsCss = () => `@layer wa-utilities{.sc-ir-booking-assign-items-h[size='xs'],.wa-size-xs{font-size:var(--wa-font-size-xs)}.sc-ir-booking-assign-items-h[size='s'],.wa-size-s{font-size:var(--wa-font-size-s)}.sc-ir-booking-assign-items-h[size='m'],.wa-size-m{font-size:var(--wa-font-size-m)}.sc-ir-booking-assign-items-h[size='l'],.wa-size-l{font-size:var(--wa-font-size-l)}.sc-ir-booking-assign-items-h[size='xl'],.wa-size-xl{font-size:var(--wa-font-size-xl)}}.sc-ir-booking-assign-items-h{display:block}.assign-container.sc-ir-booking-assign-items{display:flex;flex-direction:column;gap:1.25rem;margin-top:1rem}.assign-intro.sc-ir-booking-assign-items{font-size:0.875rem;color:var(--wa-color-neutral-600, #6b7280);margin:0;line-height:1.5}.assign-intro.sc-ir-booking-assign-items strong.sc-ir-booking-assign-items{color:var(--wa-color-neutral-900, #111827);font-weight:600}.assign-section.sc-ir-booking-assign-items{display:flex;flex-direction:column;gap:0.5rem}.assign-section__label.sc-ir-booking-assign-items{display:inline-block;position:relative;margin:0;padding:0;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height);margin-block-start:0.5em}.assign-item.sc-ir-booking-assign-items{display:flex;align-items:center;gap:0.75rem;padding:0.625rem 0.875rem;border-radius:var(--wa-border-radius-m);border:var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);cursor:pointer;user-select:none;transition:background-color 0.12s ease,     border-color 0.12s ease,     box-shadow 0.12s ease;background-color:var(--wa-color-surface-default)}.assign-item.sc-ir-booking-assign-items:hover{background-color:color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover))}.assign-item.sc-ir-booking-assign-items:focus-visible{outline:2px solid var(--wa-color-brand-border-loud, #60a5fa);outline-offset:1px}.assign-item--checked.sc-ir-booking-assign-items{border-color:var(--wa-color-brand-border-loud, #60a5fa);background-color:var(--wa-color-brand-fill-quiet, #eff6ff)}.assign-item--checked.sc-ir-booking-assign-items:hover{background-color:var(--wa-color-brand-fill-quiet, #eff6ff)}.assign-item__text.sc-ir-booking-assign-items{display:flex;flex-direction:column;gap:0.125rem;min-width:0}.assign-item__label.sc-ir-booking-assign-items{font-size:0.875rem;font-weight:500;color:var(--wa-color-neutral-900, #111827);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.assign-item__sublabel.sc-ir-booking-assign-items{font-size:0.75rem;color:var(--wa-color-neutral-500, #6b7280)}.assign-item__room-header.sc-ir-booking-assign-items{display:flex;align-items:center;flex-wrap:wrap;gap:0.375rem}.assign-item__rateplan.sc-ir-booking-assign-items{font-size:0.8125rem;color:var(--wa-color-neutral-600, #6b7280)}.assign-item__badge.sc-ir-booking-assign-items{display:inline-flex;align-items:center;font-size:0.6875rem;font-weight:600;padding:0.125rem 0.4375rem;border-radius:var(--wa-border-radius-pill, 9999px)}.assign-item__badge--nr.sc-ir-booking-assign-items{background-color:var(--wa-color-danger-fill-quiet, #fef2f2);color:var(--wa-color-danger-on-quiet, #b91c1c);border:1px solid var(--wa-color-danger-border-quiet, #fecaca)}.assign-item__date.sc-ir-booking-assign-items{font-size:0.75rem;color:var(--wa-color-neutral-500, #6b7280);margin-top:0.125rem}`;

const IrBookingAssignItems = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bookingSelectionChange = createEvent(this, "bookingSelectionChange");
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
        return (h("div", { key: item.key, class: { 'assign-item': true, 'assign-item--checked': checked }, onClick: e => {
                if (!e.target.closest('wa-checkbox')) {
                    this.toggleItem(item.key);
                }
            } }, h("wa-checkbox", { checked: checked, onchange: () => this.toggleItem(item.key) }), h("div", { class: "assign-item__text" }, h("div", { class: "assign-item__room-header" }, h("span", { class: "assign-item__label" }, item.label), item.ratePlanShortName && h("span", { class: "assign-item__rateplan" }, item.ratePlanShortName), item.unitName && h("ir-unit-tag", { unit: item.unitName }), item.isNonRefundable && h("span", { class: "assign-item__badge assign-item__badge--nr" }, t('Lcz_NonRefundable', { fallback: 'Non-refundable' }))), item.fromDate && item.toDate && (h("ir-date-view", { class: "assign-item__date", format: "weekday-medium", from_date: item.fromDate, to_date: item.toDate, showDateDifference: false })))));
    }
    renderCheckItem(item) {
        const checked = this.checkedItems.has(item.key);
        return (h("div", { key: item.key, class: { 'assign-item': true, 'assign-item--checked': checked }, onClick: e => {
                if (!e.target.closest('wa-checkbox')) {
                    this.toggleItem(item.key);
                }
            } }, h("wa-checkbox", { defaultChecked: checked, checked: checked, onchange: () => this.toggleItem(item.key) }), h("div", { class: "assign-item__text" }, h("span", { class: "assign-item__label" }, item.label))));
    }
    renderExtraItem(item) {
        const checked = this.checkedItems.has(item.key);
        return (h("div", { key: item.key, class: { 'assign-item': true, 'assign-item--checked': checked }, onClick: e => {
                if (!e.target.closest('wa-checkbox')) {
                    this.toggleItem(item.key);
                }
            } }, h("wa-checkbox", { defaultChecked: checked, checked: checked, onchange: () => {
                this.toggleItem(item.key);
            } }), h("div", { class: "assign-item__text" }, h("div", { class: "assign-item__room-header" }, h("span", { class: "assign-item__label" }, item.label), item.price != null && item.price > 0 && h("span", { class: "assign-item__rateplan" }, formatAmount(item.currencySymbol, item.price))), item.fromDate && (h("ir-date-view", { class: "assign-item__date", format: "weekday-medium", from_date: item.fromDate, to_date: item.toDate, showDateDifference: false })))));
    }
    render() {
        const rooms = this.items.filter(i => i.type === 'room');
        const pickups = this.items.filter(i => i.type === 'pickup');
        const extras = this.items.filter(i => i.type === 'extra');
        return (h(Host, { key: '77ed6a40cfbb8a649c292d1da9ac1858daeb831c', size: "s" }, h("div", { key: 'd39dfbf3076fba3dbd70fd5097897642384241c6', class: "assign-container" }, h("p", { key: '756408072dc6b84c05a15a32f46e1ed1a8c58a01', class: "assign-intro" }, t('Lcz_AssignItemsIntro', { fallback: 'Select services for the Agent folio; others remain on the Guest folio.' })), rooms.length > 0 && (h("div", { key: '5be4dbb62bd4d9e4be573cca5dc627eae0daf476', class: "assign-section" }, h("p", { key: '11b086e7215bfa134b4ea24c63f3ed26d3f04924', class: "assign-section__label" }, t('Lcz_Accommodation', { fallback: 'Accommodation' })), rooms.map(item => this.renderRoomItem(item)))), pickups.length > 0 && (h("div", { key: '7e4dbf71a27cf1412308e2d580d1c075d457af53', class: "assign-section" }, h("p", { key: '32ff2102f65036df0b7a75ae4b9c6188cd8d15dd', class: "assign-section__label" }, t('Lcz_Pickup', { fallback: 'Pickup' })), pickups.map(item => this.renderCheckItem(item)))), extras.length > 0 && (h("div", { key: 'd819f7f4c6c90aacfd9387d2fc8763c3a1302954', class: "assign-section" }, h("p", { key: '188c4edc49ff515e7c03caef25abbcc56197c70e', class: "assign-section__label" }, t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' })), extras.map(item => this.renderExtraItem(item)))))));
    }
};
IrBookingAssignItems.style = irBookingAssignItemsCss();

const irBookingCityLedgerCss = () => `.sc-ir-booking-city-ledger-h{display:block;width:100%;min-width:0;--item-vertical-padding:var(--wa-space-xs, 0.5rem);--item-inline-padding:var(--wa-space-l, 1.5rem);--folio-row-city-tax-gap:var(--wa-space-2xs, 0.25rem)}.booking-city-ledger__card.sc-ir-booking-city-ledger{width:100%;background-color:var(--wa-color-surface-default)}.booking-city-ledger__card.sc-ir-booking-city-ledger::part(body),.booking-city-ledger__card.sc-ir-booking-city-ledger [part~="body"]{padding:0;padding-bottom:calc(1.5rem - var(--item-vertical-padding));padding-top:0}.booking-city-ledger__header-title.sc-ir-booking-city-ledger{display:flex;align-items:center;gap:var(--wa-space-xs)}.booking-city-ledger__agent-name.sc-ir-booking-city-ledger{font-weight:400;color:var(--wa-color-neutral-600, #6b7280);font-size:var(--wa-font-size-s, 0.8125rem)}.booking-city-ledger__spinner-wrap.sc-ir-booking-city-ledger{display:flex;justify-content:center;align-items:center;padding:2rem 1rem}.booking-city-ledger__empty-state.sc-ir-booking-city-ledger{padding:1.5rem}.booking-city-ledger__error.sc-ir-booking-city-ledger{margin:0;padding:1rem;text-align:center;font-size:0.875rem;color:var(--wa-color-danger-600, #dc2626)}.folio-list.sc-ir-booking-city-ledger{display:flex;flex-direction:column}.folio-row.sc-ir-booking-city-ledger{padding:var(--item-vertical-padding) var(--item-inline-padding);border-bottom:1px solid var(--wa-color-surface-border, #f4f4f5)}.folio-row.sc-ir-booking-city-ledger:last-child{border-bottom:none}.folio-row__header.sc-ir-booking-city-ledger{display:flex;justify-content:space-between;align-items:center;gap:var(--wa-space-xs)}.folio-row__meta.sc-ir-booking-city-ledger,.folio-row-desc_row.sc-ir-booking-city-ledger{display:flex;align-items:center;gap:var(--wa-space-xs);flex-wrap:wrap;min-width:0}.folio-row-desc_row.sc-ir-booking-city-ledger{justify-content:space-between}.folio-row__date.sc-ir-booking-city-ledger{font-size:0.857rem;white-space:nowrap;font-variant-numeric:tabular-nums}.folio-row__right.sc-ir-booking-city-ledger{display:flex;align-items:center;gap:var(--folio-row-city-tax-gap);flex-shrink:0}.folio-row__amount.sc-ir-booking-city-ledger{font-size:1rem;font-weight:600;white-space:nowrap}.folio-row__desc.sc-ir-booking-city-ledger{margin:0.3rem 0 0;font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet, #27272a);line-height:1.4;word-break:break-word}.folio-row__action-trigger-icon.sc-ir-booking-city-ledger{font-size:1rem}.folio-row__action-trigger.sc-ir-booking-city-ledger::part(base),.folio-row__action-trigger.sc-ir-booking-city-ledger [part~="base"]{height:auto;width:var(--wa-space-xs)}.folio-row__city-tax.sc-ir-booking-city-ledger{display:flex;align-items:center;gap:var(--folio-row-city-tax-gap);margin-top:0.25rem;font-size:0.857rem;color:var(--wa-color-neutral-500, #71717a)}.is-debit.sc-ir-booking-city-ledger{color:var(--wa-color-danger-fill-loud);font-weight:700}.is-credit.sc-ir-booking-city-ledger{color:var(--wa-color-success-fill-loud);font-weight:700}.folio-row.--without-dropdown.sc-ir-booking-city-ledger{padding-inline-end:calc(var(--folio-row-city-tax-gap) + var(--wa-space-xs) + var(--wa-form-control-padding-inline) + var(--item-inline-padding))}`;

const IrBookingCityLedger = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    cityLedgerService = new CityLedgerService();
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
        return this.svcCategories.map(s => ({ id: s.CODE_NAME, label: getSetupEntryLabel(s) }));
    }
    get bookingOptions() {
        // `id` stays the raw booking number — it is the option's identity; only `label` is displayed.
        return this.booking?.booking_nbr ? [{ id: this.booking.booking_nbr, label: `#${formatBookingNumber(this.booking.booking_nbr)}` }] : [];
    }
    formatAmount(value) {
        if (!value)
            return '—';
        return formatAmount(calendar_data.property?.currency?.symbol, value);
    }
    rowHiddenCategories = new Set(['TBL_BSAD', 'TBL_BSP', 'TBL_BSE']);
    get rows() {
        return this.folioRows?.filter(r => !this.rowHiddenCategories.has(r._raw.REL_ENTITY)) ?? [];
    }
    renderRows() {
        if (this.rows.length === 0) {
            return (h("div", { class: "booking-city-ledger__empty-state" }, h("ir-empty-state", { showIcon: false })));
        }
        return (h("div", { class: "folio-list" }, this.rows.map(row => {
            const showDropdown = row.status.id !== 'billed' && row._raw.CATEGORY === null && actionableClTypes.has(row._raw.CL_TX_TYPE_CODE);
            return (h("div", { key: row._rowId, class: { 'folio-row': true, '--without-dropdown': !showDropdown } }, h("div", { class: "folio-row__header" }, h("div", { class: "folio-row__meta" }, h("span", { class: "folio-row__date" }, formatDate(row.serviceDate, 'MMM DD, YYYY'))), h("div", { class: "folio-row__right" }, h("span", { class: "folio-row__amount" }, row.debit !== null && h("span", { class: "is-debit" }, row.debit ? this.formatAmount(row.debit) : ''), row.credit !== null && h("span", { class: "is-credit" }, row.credit ? this.formatAmount(row.credit) : '')), showDropdown && (h("wa-dropdown", { "onwa-hide": e => {
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
                } }, h("wa-button", { size: "s", class: "folio-row__action-trigger", appearance: "plain", slot: "trigger" }, h("wa-icon", { name: "ellipsis-vertical", class: "folio-row__action-trigger-icon" })), h("wa-dropdown-item", { value: "edit" }, h("wa-icon", { slot: "icon", name: "edit" }), t('Lcz_Edit', { fallback: 'Edit' })), h("wa-dropdown-item", { value: "delete", variant: "danger" }, h("wa-icon", { slot: "icon", name: "trash" }), t('Lcz_Delete', { fallback: 'Delete' })))))), h("div", { class: 'folio-row-desc_row' }, row.description && h("p", { class: "folio-row__desc" }, row.description), h("ir-cl-status-tag", { style: { marginInlineEnd: showDropdown ? '1.9rem' : '0' }, transaction: { _rowId: '', ...mapClTxToFolioRow(row._raw), balance: 0 } }))));
        })));
    }
    render() {
        if (!this.booking?.agent) {
            return h(Host, null);
        }
        return (h(Host, null, h("wa-card", { appearance: "plain", class: "booking-city-ledger__card" }, h("div", { slot: "header", class: "booking-city-ledger__header-title" }, h("p", { class: "font-size-large p-0 m-0" }, t('Lcz_AgentFolio', { fallback: 'Agent Folio' }))), h("wa-tooltip", { for: "booking-city-ledger-add-btn" }, t('Lcz_AddFolioEntry', { fallback: 'Add folio entry' })), h("ir-custom-button", { slot: "header-actions", id: "booking-city-ledger-add-btn", size: "s", variant: "neutral", appearance: "plain", onClickHandler: () => {
                this.editingRow = null;
                this.drawerOpen = true;
            } }, h("wa-icon", { name: "plus", style: { fontSize: '1rem' } })), this.isLoading ? (h("div", { class: "booking-city-ledger__spinner-wrap" }, h("ir-spinner", null))) : this.error ? (h("p", { class: "booking-city-ledger__error" }, this.error)) : (this.renderRows())), h("ir-city-ledger-transaction-drawer", { open: this.drawerOpen, drawerLabel: this.editingRow ? t('Lcz_EditFolioEntry', { fallback: 'Edit Folio Entry' }) : t('Lcz_NewFolioEntry', { fallback: 'New Folio Entry' }), agent: this.booking.agent, booking: this.booking, transaction: this.editingRow?._raw ?? null, serviceCategoryOptions: this.serviceCategoryOptions, bookingOptions: this.bookingOptions, onCloseDrawer: () => {
                this.drawerOpen = false;
                this.editingRow = null;
            }, onTransactionSaved: () => {
                this.drawerOpen = false;
                this.editingRow = null;
                // this.clRefreshNeeded.emit();
            } }), h("ir-dialog", { label: t('Lcz_DeleteEntry', { fallback: 'Delete Entry' }), open: !!this.deleteTarget, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!this.isDeleting)
                    this.deleteTarget = null;
            } }, h("p", null, t('Lcz_ConfirmDeleteFolioEntry', { fallback: 'Are you sure you want to delete this entry? This action cannot be undone.' })), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => (this.deleteTarget = null) }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { size: "m", variant: "danger", loading: this.isDeleting, onClickHandler: () => this.handleDelete() }, t('Lcz_Delete', { fallback: 'Delete' }))))));
    }
};
IrBookingCityLedger.style = irBookingCityLedgerCss();

const irBookingDetailsCss = () => `.sc-ir-booking-details-h{overflow-x:hidden;--ir-dialog-max-width:20rem;text-align:start;padding:var(--wa-space-l);position:relative;height:100%}.sc-ir-booking-details-h *.sc-ir-booking-details{box-sizing:border-box}.font-medium.sc-ir-booking-details{font-weight:600}.sc-ir-booking-details-h th.sc-ir-booking-details{font-weight:600}.booking-details__booking-info.sc-ir-booking-details{display:grid;padding:var(--wa-space-m);gap:var(--wa-space-l)}.booking-details__info-column.sc-ir-booking-details{display:flex;flex-direction:column;gap:var(--wa-space-l);min-width:0}@media (min-width: 890px){.booking-details__booking-info.sc-ir-booking-details{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 1024px){.booking-details__booking-info.sc-ir-booking-details{gap:var(--wa-space-xl)}}.h-28.sc-ir-booking-details{height:2rem}.mx-01.sc-ir-booking-details{--m:5px;margin-inline-end:var(--m) !important;margin-inline-start:var(--m) !important}.date-margin.sc-ir-booking-details{margin-inline-end:5px}.pickup-margin.sc-ir-booking-details{margin-bottom:7px !important}.header-date.sc-ir-booking-details{padding-inline-start:5px !important}.pointer.sc-ir-booking-details{cursor:pointer}.sc-ir-booking-details:root{--sidebar-width:50rem}.loading-container.sc-ir-booking-details{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.sm-padding-right.sc-ir-booking-details{padding-inline-end:0.2rem}.sm-padding-left.sc-ir-booking-details{padding-inline-start:0.2rem}.sm-padding-top.sc-ir-booking-details{padding-top:0.2rem}.sm-padding-bottom.sc-ir-booking-details{padding-bottom:0.2rem}.info-notes.sc-ir-booking-details{list-style:none;padding-inline-start:0}.light-blue-bg.sc-ir-booking-details{background-color:#acecff;padding:0.2rem 0.3rem}.iframeHeight.sc-ir-booking-details{height:17.5rem}.dialog-title.sc-ir-booking-details{width:fit-content}`;

const IrBookingDetails = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bookingChanged = createEvent(this, "bookingChanged");
        this.closeSidebar = createEvent(this, "closeSidebar");
    }
    bookingService = new BookingService();
    setupService = new SetupService();
    roomService = new RoomService();
    paymentService = new PaymentService();
    agentService = new AgentsService();
    cityLedgerService = new CityLedgerService();
    unsubscribeRealtime = null;
    clLockingPending = new Map();
    clLockingTimer = null;
    ApiClient = new ApiClient();
    arrivalTime;
    svcCategories;
    printingBaseUrl = 'https://gateway.igloorooms.com/PrintBooking/%1/printing/fd?id=%2';
    // private printingBaseUrl = 'http://localhost:5863/%1/printing?id=%2';
    modalRef;
    paymentFolioRef;
    get element() { return getElement(this); }
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
    extraServiceDefaultIdentifier = null;
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
    languageSync = new LanguageSync(SCREEN_TABLES.bookingDetails, () => this.initializeApp());
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
                    message: t('Lcz_EmailBookingto', { params: [this.booking.guest.email] }),
                    loading: isRequestPending('/Send_Booking_Confirmation_Email'),
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
                    TO_DATE: this.booking.is_room_less ? hooks(this.booking.to_date, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD') : this.booking.to_date,
                    TITLE: `${t('Lcz_AddingUnitToBooking')}# ${formatBookingNumber(this.booking.booking_nbr)}`,
                    defaultDateRange: {
                        fromDate: this.booking.from_date,
                        toDate: this.booking.to_date,
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
                this.extraServiceDefaultIdentifier = null;
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
        this.splitIndex = buildSplitIndex(this.booking.rooms);
    }
    async handleResetBooking(e) {
        if (e.detail) {
            this.booking = e.detail;
            this.splitIndex = buildSplitIndex(this.booking.rooms);
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
        if (service?.category?.code === SvcCategory.DayUse) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.bookingItem = {
                event_type: 'EDIT_DAY_USE',
                TITLE: t('Lcz_EditDayUse', { fallback: 'Edit Day-Use' }).trim(),
                FROM_DATE: service.start_date,
                TO_DATE: service.start_date,
                dayUse: true,
                extraService: service,
            };
            return;
        }
        this.selectedService = service;
        this.extraServiceDefaultIdentifier = null;
        this.sidebarState = 'extra_service';
    }
    handleAddExtraServiceToUnit(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectedService = null;
        this.extraServiceDefaultIdentifier = e.detail.identifier;
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
                return { _rowId: String(i), ...mapClTxToFolioRow(tx), balance: runningBalance };
            });
            this.rawTransactions = result.My_Cl_tx;
        }
        catch (err) {
            console.error('[ir-booking-details] fetchCL failed:', err);
            this.clError = t('Lcz_FailedToLoadCityLedger', { fallback: 'Failed to load city ledger.' });
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
        if (isAgentMode(this.agent)) {
            await this.fetchCityLedger(booking);
            if (pid) {
                this.unsubscribeRealtime = realtimeService.subscribe(pid, msg => {
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
            this.folioRows = this.folioRows.map(r => r._raw.CL_TX_ID === cl_tx_id ? { ...mapClTxToFolioRow({ ...r._raw, IS_HOLD: is_hold }), _rowId: r._rowId, balance: r.balance } : r);
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
            return { ...mapClTxToFolioRow({ ...r._raw, IS_LOCKED: isLocked }), _rowId: r._rowId, balance: r.balance };
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
            const localeReady = LocaleController.load({ language: this.language, tables: SCREEN_TABLES.bookingDetails });
            const [roomResponse, , countriesList, bookingDetails, setupEntries, agents] = await Promise.all([
                this.roomService.getExposedProperty({ id: this.propertyid || 0, language: LocaleController.language, aname: this.p }),
                localeReady,
                this.bookingService.getCountries(LocaleController.language),
                this.bookingService.getExposedBooking({
                    booking_nbr: this.bookingNumber,
                    language: LocaleController.language,
                    include_dp_pricing: true,
                    withExtras: true,
                    extras: [
                        ...extras,
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
            const { bed_preference_type, svc_category, departure_time, pay_type, pay_type_group, pay_method, arrival_time } = groupEntryTablesResult(setupEntries);
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
            this.splitIndex = buildSplitIndex(this.booking.rooms);
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
        const { data } = await axios.post(`Get_ShortLiving_ApiClient`);
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
        this.splitIndex = buildSplitIndex(this.booking.rooms);
    };
    async resetBooking() {
        try {
            this.isLoading = true;
            const booking = await this.bookingService.getExposedBooking({ booking_nbr: this.bookingNumber, language: LocaleController.language, include_dp_pricing: true });
            this.splitIndex = buildSplitIndex(booking.rooms);
            await this.loadAgentAndFolio(booking);
            this.booking = { ...booking };
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
            return (h("div", { class: 'loading-container' }, h("ir-spinner", null)));
        }
        const isAllServicesAgentOwned = this.isAllServicesAgentOwned();
        return (h(Host, null, !this.is_from_front_desk && (h(Fragment, null, h("ir-toast", { style: { height: '0' } }), h("ir-interceptor", { style: { height: '0' } }))), h("ir-booking-header", { agents: this.agents, booking: this.booking, hasCloseButton: this.hasCloseButton, hasDelete: this.hasDelete, hasMenu: this.hasMenu, hasPrint: this.hasPrint, agent: this.agent, folioRows: this.folioRows, hasReceipt: calendar_data.property.is_frontdesk_enabled, hasEmail: ['001', '002'].includes(this.booking?.status?.code) }), h("div", { class: "booking-details__booking-info" }, h("div", { class: "booking-details__info-column" }, h("ir-reservation-information", { countries: this.countries, booking: this.booking }), !this.booking.is_room_less && (h("ir-booking-rooms", { booking: this.booking, agent: this.agent, propertyId: this.property_id, language: this.language, departureTime: this.departureTime, arrivalTime: this.arrivalTime, bedPreference: this.bedPreference, legendData: this.calendarData.legendData, roomsInfo: this.calendarData.roomsInfo, hasRoomAdd: this.hasRoomAdd, hasRoomEdit: this.hasRoomEdit, hasRoomDelete: this.hasRoomDelete, splitIndex: this.splitIndex, clTransactions: this.rawTransactions, svcCategories: this.svcCategories, checkoutRoomIdentifier: this.checkoutRoomIdentifier, onRoomDeleteFinished: this.handleDeleteFinish })), (this.booking?.rooms?.length > 1 || this.booking.rooms.length === 0) && (h("section", null, h("ir-extra-services", { language: this.language, svcCategories: this.svcCategories, booking: this.booking, agent: this.agent, clTransactions: this.rawTransactions }))), h("ir-pickup-view", { booking: this.booking, agent: this.agent, clTransactions: this.rawTransactions })), h("ir-payment-details", { clTransactions: this.rawTransactions, class: "booking-details__info-column", propertyId: this.property_id, paymentEntries: this.paymentEntries, paymentActions: this.paymentActions, booking: this.booking, agent: this.agent, svcCategories: this.svcCategories, isAllServicesAgentOwned: isAllServicesAgentOwned, folioRows: this.folioRows, clLoading: this.clLoading, clError: this.clError })), h("ir-dialog", { label: t('Lcz_SendEmail', { fallback: 'Send Email' }), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalRef.closeModal();
                this.modalState = null;
            }, ref: el => (this.modalRef = el) }, h("p", null, this.modalState?.message), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { loading: isRequestPending('/Send_Booking_Confirmation_Email'), onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleModalConfirm();
            }, size: "m", variant: "brand" }, t('Lcz_Confirm', { fallback: 'Confirm' })))), h("ir-room-guests", { open: this.sidebarState === 'room-guest', countries: this.countries, language: this.language, identifier: this.sidebarPayload?.identifier, bookingNumber: this.booking.booking_nbr, roomName: this.sidebarPayload?.roomName, roomType: this.sidebarPayload?.roomType, totalGuests: this.sidebarPayload?.totalGuests, sharedPersons: this.sidebarPayload?.sharing_persons, slot: "sidebar-body", checkIn: this.sidebarPayload?.checkin, onCloseModal: () => (this.sidebarState = null) }), h("ir-extra-service-config", { open: this.sidebarState === 'extra_service', service: this.selectedService, defaultIdentifier: this.extraServiceDefaultIdentifier, svcCategories: this.svcCategories, language: this.language, booking: this.booking, agent: this.agent, slot: "sidebar-body", onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.sidebarState = null;
                if (this.selectedService) {
                    this.selectedService = null;
                }
                this.extraServiceDefaultIdentifier = null;
            } }), h("ir-pickup", { booking: this.booking, agent: this.agent, open: this.sidebarState === 'pickup', bookingDates: { from: this.booking.from_date, to: this.booking.to_date }, defaultPickupData: this.booking.pickup_info, bookingNumber: this.booking.booking_nbr, numberOfPersons: this.booking.occupancy.adult_nbr + this.booking.occupancy.children_nbr, onCloseModal: () => {
                this.sidebarState = null;
            } }), h("ir-billing-drawer", { open: this.sidebarState === 'invoice', onBillingClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.sidebarState = null;
            }, isAllServicesAgentOwned: isAllServicesAgentOwned, booking: this.booking, agent: this.agent }), h("ir-guest-info-drawer", { onGuestInfoDrawerClosed: () => {
                this.sidebarState = null;
            }, booking_nbr: this.bookingNumber, email: this.booking?.guest.email, language: this.language, open: this.sidebarState === 'guest' }), h("ir-payment-folio", { booking: this.booking, style: { height: 'auto' }, bookingNumber: this.booking.booking_nbr, paymentEntries: this.paymentEntries, payment: this.sidebarPayload?.payment, mode: this.sidebarPayload?.mode, ref: el => (this.paymentFolioRef = el), onCloseModal: () => (this.sidebarState = null) }), h("ir-booking-editor-drawer", { roomTypeIds: this.bookingItem?.roomsInfo?.map(r => r.id), onBookingEditorClosed: this.handleCloseBookingWindow.bind(this), unitId: this.bookingItem?.PR_ID, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, booking: this.booking, ticket: this.ticket, open: this.bookingItem !== null, roomIdentifier: this.bookingItem?.IDENTIFIER, language: this.language, propertyid: this.propertyid, checkIn: this.bookingItem?.FROM_DATE, checkOut: this.bookingItem?.TO_DATE, dayUse: this.bookingItem?.dayUse === true, extraService: this.bookingItem?.extraService }), h("ir-fiscal-document-preview", { mode: "all", ticket: this.ticket, propertyId: calendar_data?.property.id, onDocumentConverted: () => this.fetchCityLedger() })));
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
        registerInstance(this, hostRef);
        this.bookingDetailsDrawerClosed = createEvent(this, "bookingDetailsDrawerClosed");
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
        return (h("ir-drawer", { key: '898dddbe3204bb7261afd6ef4165d56ea773fdfd', onDrawerHide: this.handleClose, withoutHeader: true, open: this.open, style: {
                '--ir-drawer-width': '100rem',
                '--ir-drawer-background-color': 'var(--ir-color-muted-background,#f2f3f8)',
                '--ir-drawer-padding-left': '0',
                '--ir-drawer-padding-right': '0',
                '--ir-drawer-padding-top': '0',
                '--ir-drawer-padding-bottom': '0',
            } }, this.open && (h("ir-booking-details", { key: 'cc6182f99c6cc2e9bdddba73e4e8431877eb22fa', hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: this.handleClose, is_from_front_desk: true, propertyid: this.propertyId, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.bookingNumber.toString(), ticket: this.ticket, language: this.language, checkoutRoomIdentifier: this.checkoutRoomIdentifier, hasRoomAdd: true }))));
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
            modifyBookingStore('guest', guest);
            reserveRooms({
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
        modifyBookingStore('guest', {
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
                this.variationService = new VariationService();
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
        for (const roomTypeId in booking_store.ratePlanSelections) {
            const roomtype = booking_store.ratePlanSelections[roomTypeId];
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
                            from_date: hooks(check_in).format('YYYY-MM-DD'),
                            to_date: hooks(check_out).format('YYYY-MM-DD'),
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
            const { dates } = booking_store.bookingDraft;
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
            const sourceOption = booking_store.bookingDraft.source;
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
                    const agent = booking_store.bookingDraft.roomAssignee === 'agent' ? booking.agent : null;
                    const newRooms = (await generateNewRooms()).map(r => ({ ...r, agent }));
                    const previousRooms = booking.rooms;
                    newBooking = modifyBookingDetails(booking, [...previousRooms, ...newRooms]);
                    break;
                }
                default: {
                    const isAgent = sourceOption.type === 'TRAVEL_AGENCY';
                    const newRooms = (await generateNewRooms(null, check_in)).map(r => ({ ...r, agent: isAgent ? { id: sourceOption.tag } : null }));
                    const { bookedByGuest } = booking_store;
                    newBooking = {
                        assign_units: true,
                        is_pms: true,
                        is_direct: true,
                        is_backend: true,
                        is_in_loyalty_mode: false,
                        promo_key: null,
                        extras: [...extras.filter(e => e.key !== 'payment_code'), { key: 'payment_code', value: booking_store.selectedPaymentMethod?.code }],
                        agent: isAgent ? { id: sourceOption.tag } : null,
                        is_email_client: bookedByGuest.emailGuest,
                        booking: {
                            agent_booking_nbr: bookedByGuest.agent_booking_nbr,
                            company_name: bookedByGuest.company ?? null,
                            from_date: hooks(fromDate).format('YYYY-MM-DD'),
                            to_date: hooks(toDate).format('YYYY-MM-DD'),
                            remark: bookedByGuest.note || null,
                            booking_nbr: '',
                            property: {
                                id: calendar_data.property.id,
                            },
                            booked_on: {
                                date: hooks().format('YYYY-MM-DD'),
                                hour: new Date().getHours(),
                                minute: new Date().getMinutes(),
                            },
                            source: isAgent ? '' : sourceOption,
                            rooms: newRooms,
                            currency: calendar_data.property.currency,
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
        registerInstance(this, hostRef);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt");
        this.loadingChanged = createEvent(this, "loadingChanged");
        this.adjustBlockedUnit = createEvent(this, "adjustBlockedUnit");
        this.bookingStepChange = createEvent(this, "bookingStepChange");
        this.preventPageLoad = createEvent(this, "preventPageLoad");
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
    roomService = new RoomService();
    bookingService = new BookingService();
    setupService = new SetupService();
    propertyService = new PropertyService();
    bookingEditorService = new IRBookingEditorService(this.mode);
    room;
    get dayUsePrice() {
        return Number(getExtraServiceDefaultPrice(SvcCategory.DayUse));
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
            setDayUseSelection({ unit, roomType, price: grossAmount, netAmount, taxAmount, isCustomPrice });
            this.bookingStepChange.emit({ direction: 'next' });
        }
        finally {
            this.resolvingDayUseUnitId = null;
        }
    }
    /** Resolves taxation policy on accommodation level. */
    isAccommodationVatExclusive = () => {
        const accTax = calendar_data.property.taxes?.find(t => t.name === 'V.A.T');
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
    languageSync = new LanguageSync(SCREEN_TABLES.bookingEditor, () => this.initializeApp());
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
        updateBookedByGuest({
            firstName: this.booking.guest.first_name,
            lastName: this.booking.guest.last_name,
        });
        const source = booking_store.selects.sources.find(s => s.code === this.booking.source.code);
        setBookingDraft({
            source,
        });
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            this.bookingEditorService.setMode(this.mode);
            const [, countriesList] = await Promise.all([
                LocaleController.load({ language: this.language, tables: SCREEN_TABLES.bookingEditor }),
                this.bookingService.getCountries(LocaleController.language),
                this.roomService.getExposedProperty({
                    id: Number(this.propertyId),
                    language: LocaleController.language,
                    is_backend: true,
                    include_units_hk_status: true,
                    include_sales_rate_plans: true,
                }),
            ]);
            await Promise.all([this.fetchSetupEntriesAndInitialize(), this.resolveDayUseNetPrice()]);
            setBookingSelectOptions({
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
        resetBookingStore(true);
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
                checkIn: hooks(this.room.from_date, 'YYYY-MM-DD'),
                checkOut: hooks(this.room.to_date, 'YYYY-MM-DD'),
            }
            : {
                checkIn: this.checkIn ? hooks(this.checkIn, 'YYYY-MM-DD') : hooks(),
                checkOut: this.checkOut ? hooks(this.checkOut, 'YYYY-MM-DD') : hooks().add(1, 'day'),
            };
        const draft = {
            dates,
            ...(isEditOrAdd && { source: this.resolveSourceOption(booking_store.selects.sources, booking_store.selects.sources) }),
            ...(isEdit && {
                occupancy: {
                    adults: calendar_data.property.adult_child_constraints.adult_max_nbr,
                    children: calendar_data.property.adult_child_constraints.child_max_nbr,
                },
                defaultOccupancy: {
                    adults: this.room.occupancy.adult_nbr,
                    children: this.room.occupancy.children_nbr + this.room.occupancy.infant_nbr,
                },
            }),
        };
        if (isEditOrAdd) {
            updateBookedByGuest({
                firstName: this.booking.guest.first_name,
                lastName: this.booking.guest.last_name,
                ...(this.bookingEditorService.isEventType('EDIT_DAY_USE') && {
                    email: this.booking.guest.email ?? '',
                    mobile: this.booking.guest.mobile_without_prefix ?? this.booking.guest.mobile ?? '',
                }),
            });
        }
        setBookingDraft(draft);
    }
    async checkBookingAvailability(checkBe = false) {
        this.isFetchingAvailability = true;
        // resetBookingStore(false);
        const { source, occupancy, dates, dayUse } = booking_store.bookingDraft;
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
                    propertyid: calendar_data.property.id,
                    adultChildCount: {
                        adult: occupancy.adults,
                        child: occupancy.children,
                    },
                    language: LocaleController.language,
                    room_type_ids,
                    currency: calendar_data.property.currency,
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
        const results = await this.bookingService.getCalendarData({
            propertyid: Number(calendar_data.property.id),
            from_date: date,
            to_date: date,
            language: LocaleController.language,
        });
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
            property_id: Number(calendar_data.property.id),
            from_date: date,
            to_date: date,
        });
        const editingUnitId = this.bookingEditorService.isEventType('EDIT_DAY_USE') ? this.extraService?.pr_id : undefined;
        this.dayUseBookedUnitIds = new Set(bookings.filter(b => b.unit_id !== editingUnitId).map(b => b.unit_id));
        if (editingUnitId != null && !booking_store.bookingDraft.dayUseHours?.from) {
            const current = bookings.find(b => b.unit_id === editingUnitId);
            if (current) {
                setBookingDraft({ dayUseHours: { from: current.from_time, to: current.to_time } });
            }
        }
    }
    compareResults(beResults) {
        const beRoomTypes = Array.isArray(beResults) ? beResults : (beResults?.roomtypes ?? []);
        const unavailableRatePlanIds = new Set();
        const beRoomTypeMap = new Map(beRoomTypes.map(roomType => [roomType.id, roomType]));
        for (const roomType of booking_store.roomTypes ?? []) {
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
            if (booking_store.bookingDraft.dayUse) {
                await this.doDayUseReservation(source === 'book&block');
                return;
            }
            fillMissingReservedGuestNames();
            const reservedRooms = getReservedRooms();
            RoomsGuestsSchema.parse(reservedRooms.map(r => ({ ...r.guest, requires_bed_preference: r.ratePlanSelection.roomtype.is_bed_configuration_enabled })));
            BookedByGuestSchema.parse(booking_store.bookedByGuest);
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
        const { dayUseSelection } = booking_store;
        if (!dayUseSelection) {
            console.warn('[doDayUseReservation] No unit selected');
            return;
        }
        const { dates, dayUseHours, source, defaultOccupancy } = booking_store.bookingDraft;
        const { bookedByGuest } = booking_store;
        BookedByGuestSchema.parse(bookedByGuest);
        DayUseHoursSchema.parse(dayUseHours);
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
                category: { code: SvcCategory.DayUse },
                start_date: date,
                end_date: date,
                from_time: dayUseHours.from,
                to_time: dayUseHours.to,
                net_amount: netAmount,
                tax_amount: taxAmount,
                gross_amount: grossAmount,
                price: grossAmount,
                currency_id: calendar_data.property.currency.id,
            };
            await this.bookingService.doBookingExtraService({
                service,
                is_remove: false,
                booking_nbr: this.booking?.booking_nbr,
            });
            showToast({ title: t('Lcz_DayUseBookingUpdated', { fallback: 'Day Use Booking Updated' }), type: 'success' });
            this.resetBookingEvt.emit(null);
            return;
        }
        const payload = {
            language: LocaleController.language,
            is_to_block: block,
            booking: {
                property: { id: Number(this.propertyId) },
                currency: { id: calendar_data.property.currency.id },
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
                category: { code: SvcCategory.DayUse },
                description: '',
                start_date: date,
                end_date: date,
                from_time: dayUseHours.from,
                to_time: dayUseHours.to,
                net_amount: netAmount,
                tax_amount: taxAmount,
                gross_amount: grossAmount,
                price: grossAmount,
                currency_id: calendar_data.property.currency.id,
            },
        };
        await this.bookingService.doDayUse(payload);
        showToast({ title: t('Lcz_DayUseBookingCreated', { fallback: 'Day Use Booking Created' }), type: 'success' });
        this.resetBookingEvt.emit(null);
    }
    async assignCountryCode() {
        const country = await this.bookingService.getUserDefaultCountry();
        const countryId = country['COUNTRY_ID'];
        const _c = booking_store.selects.countries.find(c => c.id?.toString() === countryId?.toString());
        updateBookedByGuest({
            countryId: countryId,
            phone_prefix: _c?.phone_prefix,
        });
    }
    async fetchSetupEntriesAndInitialize() {
        try {
            const setupEntries = await this.fetchSetupEntries();
            this.setSourceOptions(calendar_data.property.allowed_booking_sources);
            this.setOtherProperties(setupEntries);
        }
        catch (error) {
            console.error('Error fetching setup entries:', error);
        }
    }
    setOtherProperties(setupEntries) {
        setBookingSelectOptions({
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
        setBookingSelectOptions({
            sources: _sourceOptions,
        });
        setBookingDraft({
            source: this.resolveSourceOption(bookingSource, _sourceOptions),
        });
    }
    getFilteredSourceOptions(sourceOptions) {
        const agentIds = new Set();
        if (!Boolean(this.unitId)) {
            return sourceOptions;
        }
        const room = calendar_data.roomsInfo.find(room => room.physicalrooms.find(r => r.id.toString() === this.unitId?.toString()));
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
            return (h("div", { class: 'drawer__loader-container' }, h("ir-spinner", null)));
        }
        return (h(Host, null, h("div", null, h("ir-interceptor", null), this.step === 'details' && (h("div", { class: "booking-editor__step", key: "step-details" }, h("ir-booking-editor-header", { isLoading: this.isFetchingAvailability, isBlockConversion: !!this.blockedUnit?.STATUS_CODE, booking: this.booking, checkIn: this.checkIn, checkOut: this.adjustedCheckout, mode: this.mode }), h("div", { class: 'booking-editor__roomtype-container' }, !this.isFetchingAvailability && booking_store.bookingDraft.dayUse ? (h("igl-day-use-unit-list", { mode: this.mode, roomTypes: this.dayUseRoomTypes, price: this.dayUsePrice, netPrice: this.dayUseNetPrice, currency: calendar_data.property.currency, bookedUnitIds: this.dayUseBookedUnitIds, unitId: this.unitId, currentExtraService: this.extraService, resolvingUnitId: this.resolvingDayUseUnitId, hasSearched: this.hasCheckedAvailability, onUnitSelected: e => this.handleDayUseUnitSelected(e) })) : (!this.isFetchingAvailability &&
            booking_store.roomTypes?.map(roomType => (h("igl-room-type", { unavailableRatePlanIds: this.unavailableRatePlanIds, key: `room-type-${roomType.id}`, id: roomType.id.toString(), roomType: roomType, bookingType: this.mode, ratePricingMode: booking_store.selects?.ratePricingMode, roomTypeId: this.room?.roomtype?.id, currency: calendar_data.property.currency }))))))), this.step === 'confirm' && (h("ir-booking-editor-form", { class: "booking-editor__step", key: "step-confirm", booking: this.booking, onDoReservation: e => {
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
        registerInstance(this, hostRef);
        this.bookingEditorClosed = createEvent(this, "bookingEditorClosed");
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
    ApiClient = new ApiClient();
    bookingService = new BookingService();
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
            booking_store.event_type = { type: this.mode };
        }
        if (this.dayUse) {
            setBookingDraft({ dayUse: true });
            this.seedBarBookingDayUseFromHour();
        }
    }
    /**
     * BAR_BOOKING day-use bookings start "now" — seed the day-use arrival hour to one hour
     * from the current time so the front-desk agent isn't picking it from scratch. Only fills
     * an empty value, so it never clobbers a manual edit or an existing booking's hours.
     */
    seedBarBookingDayUseFromHour() {
        if (this.mode !== 'BAR_BOOKING' || !booking_store.bookingDraft.dayUse) {
            return;
        }
        if (booking_store.bookingDraft.dayUseHours?.from) {
            return;
        }
        setBookingDraft({ dayUseHours: { ...booking_store.bookingDraft.dayUseHours, from: hooks().add(1, 'hour').format('HH:mm') } });
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
            booking_store.event_type = { type: this.mode };
        }
    }
    handleDayUseChange() {
        if (this.dayUse) {
            setBookingDraft({ dayUse: true });
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
        if (booking_store.bookingDraft.dayUse && ['PLUS_BOOKING'].includes(this.mode)) {
            return t('Lcz_DayUseBookingTitle', { fallback: 'Day-Use Booking' });
        }
        if (this.label) {
            return this.label;
        }
        switch (this.mode) {
            case 'EDIT_DAY_USE':
                return t('Lcz_EditDayUseBookingTitle', { fallback: 'Edit Day Use Booking' });
            case 'SPLIT_BOOKING':
            case 'BAR_BOOKING':
            case 'ADD_ROOM':
            case 'EDIT_BOOKING':
            case 'PLUS_BOOKING':
                return t('Lcz_NewBooking', { fallback: 'New Booking' });
        }
    }
    handleDayUseToggle(value) {
        const checked = value === 'day-use';
        resetAvailability();
        setBookingDraft({
            dayUse: checked,
            source: checked ? booking_store.selects.sources.find(s => s.type !== 'LABEL') : booking_store.bookingDraft.source,
        });
        if (checked) {
            this.seedBarBookingDayUseFromHour();
        }
        setDayUseSelection(null);
    }
    goToConfirm = (e) => {
        e?.stopPropagation();
        this.step = 'confirm';
    };
    goToDetails = () => {
        if (this.mode === 'BAR_BOOKING') {
            resetReserved();
        }
        if (this.mode === 'EDIT_BOOKING') {
            resetReserved();
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
        const { checkIn, checkOut } = booking_store?.bookingDraft?.dates;
        const now = hooks();
        const hasCheckIn = !!calendar_data?.property.is_frontdesk_enabled && !!checkIn && (checkIn.isSame(now, 'date') || now.isBetween(checkIn, checkOut, 'date'));
        const isNewDayUseBooking = this.mode === 'PLUS_BOOKING' && booking_store.bookingDraft.dayUse;
        const dayUseUnitHasUpcomingCheckIn = isNewDayUseBooking && getDayUseUnitAvailability(booking_store.dayUseSelection?.unit?.calendar_cell).hasUpcomingCheckIn;
        const showBookAndBlockTheNight = booking_store.bookingDraft.dayUse && ['BAR_BOOKING', 'PLUS_BOOKING'].includes(this.mode) && !dayUseUnitHasUpcomingCheckIn;
        return (h(Fragment, null, h("ir-custom-button", { onClickHandler: this.goToDetails, size: "m", appearance: "filled", variant: "neutral" }, t('Lcz_Back', { fallback: 'Back' })), showBookAndBlockTheNight && (h("ir-custom-button", { disabled: false, form: "new_booking_form", loading: this.isLoading === 'book&block', value: "book&block", type: "submit", size: "m", appearance: 'outlined', variant: "brand" }, t('Lcz_BookAndBlockTheNight', { fallback: 'Book and block the night' }))), h("ir-custom-button", { loading: this.isLoading === 'book', value: "book", form: "new_booking_form", disabled: false, type: "submit", size: "m", appearance: showBookAndBlockTheNight ? 'accent' : hasCheckIn ? 'outlined' : 'accent', variant: "brand" }, t('Lcz_Book', { fallback: 'Book' })), hasCheckIn && !booking_store.bookingDraft.dayUse && (h("ir-custom-button", { loading: this.isLoading === 'book-checkin', value: "book-checkin", form: "new_booking_form", type: "submit", size: "m", appearance: "accent", variant: "brand" }, t('Lcz_BookAndChekcIn', { fallback: 'Book & check In' })))));
    }
    renderDetailsActions() {
        const haveRoomSelected = hasAtLeastOneRoomSelected();
        return (h(Fragment, null, h("ir-custom-button", { "data-drawer": "close", size: "m", appearance: "filled", variant: "neutral" }, t('Lcz_Cancel', { fallback: 'Cancel' })), !booking_store.bookingDraft.dayUse && ['PLUS_BOOKING', 'ADD_ROOM'].includes(this.mode) && (h(Fragment, null, !haveRoomSelected && (h("wa-tooltip", { for: "booking_editor__next-button" }, t('Lcz_PleaseSelectAtLeastOneUnitToContinue', { fallback: 'Please select at least one unit to continue.' }))), h("ir-custom-button", { id: "booking_editor__next-button", disabled: !haveRoomSelected, onClickHandler: this.goToConfirm, size: "m", appearance: "accent", variant: "brand" }, t('Lcz_Next', { fallback: 'Next' }))))));
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
        const releaseData = getReleaseHoursString(this.blockedUnit.RELEASE_AFTER_HOURS !== null ? Number(this.blockedUnit.RELEASE_AFTER_HOURS) : null);
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
        const originalFromDate = hooks(this.originalBlockPayload.from_date, 'YYYY-MM-DD');
        const currentFromDate = hooks(serviceParams.booking.from_date, 'YYYY-MM-DD');
        const originalToDate = hooks(this.originalBlockPayload.to_date, 'YYYY-MM-DD');
        const currentToDate = hooks(serviceParams.booking.to_date, 'YYYY-MM-DD');
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
                propertyid: calendar_data.property.id,
                adultChildCount: {
                    adult: 2,
                    child: 0,
                },
                language: LocaleController.language,
                room_type_ids: roomTypeIds,
                currency: calendar_data.property?.currency,
            });
            const isAvailable = booking_store.roomTypes.every(rt => {
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
        return (h("ir-drawer", { key: '794830066ebdf94b7e5a57a75d75e5e159f04066', onDrawerHide: async (event) => {
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
            }, class: "booking-editor__drawer", label: this.drawerLabel, open: this.open }, this.step === 'details' && !this.unitId && ['PLUS_BOOKING', 'BAR_BOOKING'].includes(this.mode) && calendar_data?.property?.is_frontdesk_enabled && (h("div", { key: '415a12cc1f1e10f71d1c82e2220e3e09b5af4317', slot: "header-actions", style: { alignSelf: 'center' } }, h("wa-radio-group", { key: 'abac44723c7974113aea2791a75f15f2c8661d87', size: "s", value: booking_store.bookingDraft.dayUse ? 'day-use' : 'manual', orientation: "horizontal", onchange: e => this.handleDayUseToggle(e.target.value) }, h("wa-radio", { key: '176ce476cd34309f0cfc43ac94c475f1bb971aa2', appearance: "button", value: "manual" }, t('Lcz_Stay', { fallback: 'Stay' })), h("wa-radio", { key: 'aac36d92ecddff61c217b3c6fd0a65c23c6e2ac8', appearance: "button", value: "day-use" }, t('Lcz_DayUseHyphen', { fallback: 'Day-use' }))))), this.open && this.ticket && (h("ir-booking-editor", { key: 'f653f501ddb6a4d40d990b3e12266a9c969d0613', onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail.cause;
            }, onAdjustBlockedUnit: event => this.handleAdjustBlockedUnitEvent(event), unitId: this.unitId, propertyId: this.propertyid, roomTypeIds: this.roomTypeIds, onResetBookingEvt: async () => {
                this.blockedUnit = undefined;
                this.initializeBlockedUnitState(undefined);
                await this.closeDrawer();
            }, step: this.step, blockedUnit: this.blockedUnit, language: this.language, booking: this.booking, mode: this.mode, checkIn: this.checkIn, checkOut: this.checkOut, identifier: this.roomIdentifier, extraService: this.extraService })), h("div", { key: '9e789487150a7894d5b930476581b01934e80ad5', slot: "footer", class: "ir__drawer-footer" }, this.renderFooter())));
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
        registerInstance(this, hostRef);
        this.doReservation = createEvent(this, "doReservation");
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
    bookingService = new BookingService();
    agentsService = new AgentsService();
    bookingEditorService;
    totalRooms = 0;
    pickerEl;
    async componentWillLoad() {
        this.totalRooms = calculateTotalRooms();
        this.totalCost = this.totalRooms > 1 ? await getBookingTotalPrice() : 0;
        this.bookingEditorService = new IRBookingEditorService(this.mode);
        if (this.agent) {
            this.resolvedAgent = this.agent;
        }
        else if (this.booking?.agent) {
            this.resolvedAgent = await this.agentsService.getExposedAgent({ id: this.booking.agent.id });
        }
        if (this.bookingEditorService.isEventType(['ADD_ROOM', 'SPLIT_BOOKING']) && isAgentMode(this.resolvedAgent)) {
            this.assignee = 'agent';
            setBookingDraft({ roomAssignee: 'agent' });
        }
    }
    async handleRecalculation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.totalCost = this.totalRooms > 1 ? await getBookingTotalPrice() : 0;
    }
    async fetchGuests(email) {
        try {
            if (!email) {
                return;
            }
            this.guests = await this.bookingService.fetchExposedGuest(email, calendar_data.property.id);
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
        updateBookedByGuest({
            id: guest.id,
            email: guest.email,
            firstName: guest.first_name,
            lastName: guest.last_name,
            mobile: guest.mobile_without_prefix,
            countryId: guest.country_id?.toString(),
            phone_prefix: guest['country_phone_prefix'],
        });
        syncFirstRoomGuestName('first_name', guest.first_name);
        syncFirstRoomGuestName('last_name', guest.last_name);
    }
    render() {
        const { dates, dayUse } = booking_store.bookingDraft;
        let hasBookedByGuestController = false;
        return (h("form", { key: 'b0677085375270b61a664aeeac3e2e7d1f04ecfd', class: "booking-editor__guest-form", id: "new_booking_form", autoComplete: "off", onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                this.doReservation.emit(submitter?.value);
            } }, !dayUse && (h("div", { key: 'f364995aa15646a965bb9b82ac39e97ceaa36b4a', class: "booking-editor__header" }, h("ir-date-view", { key: '7a3c84342c3e6c6f8f39fb770bdd487f860cc963', class: "booking-editor__dates", from_date: dates.checkIn, to_date: dates.checkOut }), this.totalRooms > 1 && (h("div", { key: 'c2b0aaca7020c518f822d51f48b0fb2f06edff21', class: "booking-editor__total" }, h("span", { key: '1ea7520bfbca907e6f5931a40b16c4a83ab6c90d', class: "booking-editor__total-label" }, t('Lcz_TotalPrice', { fallback: 'Total price' })), ' ', h("span", { key: '3cc76f85ce73b26ef66eb85cb44f2be870fa42fc', class: "booking-editor__total-amount" }, formatAmount(calendar_data.property.currency.symbol, this.totalCost)))))), dayUse && h("ir-booking-editor-day-use", { key: '98736fbb33c0e46acbc60fb617c36e97ed21675b' }), !dayUse &&
            Object.values(booking_store.ratePlanSelections).map(val => Object.values(val).map(ratePlan => {
                const rp = ratePlan;
                if (rp.reserved === 0) {
                    return null;
                }
                return [...new Array(rp.reserved)].map((_, i) => {
                    const shouldAutoFillGuest = ['BAR_BOOKING', 'PLUS_BOOKING'].includes(this.mode) &&
                        booking_store.bookedByGuest.id === -1 &&
                        !hasBookedByGuestController &&
                        !booking_store.bookedByGuestManuallyEdited;
                    if (shouldAutoFillGuest) {
                        hasBookedByGuestController = true;
                    }
                    return (h("igl-application-info", { autoFillGuest: shouldAutoFillGuest, totalNights: calculateDaysBetweenDates(dates.checkIn.format('YYYY-MM-DD'), dates.checkOut.format('YYYY-MM-DD')), bedPreferenceType: booking_store.selects.bedPreferences, currency: calendar_data.property.currency, guestInfo: rp.guest ? rp.guest[i] : null, bookingType: this.mode, rateplanSelection: rp, key: `${rp.ratePlan.id}_${i}`, roomIndex: i, baseData: this.mode === 'EDIT_BOOKING'
                            ? {
                                roomtypeId: this.room.roomtype.id,
                                unit: this.room.unit,
                            }
                            : undefined }));
                });
            })), this.bookingEditorService.isEventType(['BAR_BOOKING', 'PLUS_BOOKING']) && (h("section", { key: '6a1d1f5ccf14c4d76ed57e18e9dea222c7f47cbf', class: "booking-editor__booked-by-section" }, h("div", { key: '85e9eed447c323ab9c24d666d81d7932a11d375c', class: "booking-editor__booked-by booking-editor__booked-by-header" }, h("h4", { key: '4ab38c4203e2cca9f844d6b92bc204c5f7cff290', class: "booking-editor__heading booking-editor__booked-by-title" }, t('Lcz_BookedBy', { fallback: 'Booked by' })), booking_store.bookingDraft?.agent ? (h("span", null, booking_store.bookingDraft?.agent.name)) : (h(Fragment, null, h("ir-picker", { class: "booking-editor__booked-by-picker", appearance: "filled",
            // placeholder={t('Lcz_SearchCustomerPlaceholder', { fallback: 'Search customer by email, name or company name' })}
            placeholder: t('Lcz_SearchCustomerByEmailOrName', { fallback: 'Search customer by email or name' }), withClear: true, "onText-change": event => this.fetchGuests(event.detail), debounce: 500, loading: isRequestPending('/Fetch_Exposed_Guests'), mode: "select-async", ref: el => (this.pickerEl = el), "onCombobox-select": this.handleComboboxSelect.bind(this) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        })), booking_store.bookedByGuest.id !== -1 && (h("ir-custom-button", { onClickHandler: () => {
                updateBookedByGuest(bookedByGuestBaseData);
                this.pickerEl.clearInput();
            }, variant: "brand" }, t('Lcz_ClearUser', { fallback: 'Clear user' })))))), h("ir-booking-editor-guest-form", { key: 'e21ca10b7c55c689c7700e83f4744521de42235f' }))), this.bookingEditorService.isEventType(['SPLIT_BOOKING', 'ADD_ROOM']) && isAgentMode(this.resolvedAgent) && (h("ir-service-assignee-select", { key: '4729f75fb19ccef78aa415173fde06c75c48cac7', style: { maxWidth: '500px' }, agent: this.booking.agent, assigneeType: this.assignee, onAssignmentChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.assignee = e.detail;
                setBookingDraft({ roomAssignee: e.detail });
            } }))));
    }
};
IrBookingEditorForm.style = irBookingEditorFormCss();

const irBookingEditorHeaderCss = () => `.sc-ir-booking-editor-header-h{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}.booking-editor-header__container.sc-ir-booking-editor-header{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}.booking-editor-header__adults-select.sc-ir-booking-editor-header::part(display-input),.booking-editor-header__adults-select.sc-ir-booking-editor-header [part~="display-input"]{text-transform:capitalize}.booking-editor-header__booking-picker.sc-ir-booking-editor-header{max-width:350px}.booking-editor-header__booking-picker-validator.sc-ir-booking-editor-header{margin-bottom:1rem}.booking-editor-header__tax_statement.sc-ir-booking-editor-header{margin-top:1.5rem}@media (min-width: 768px){.booking-editor__date-range.sc-ir-booking-editor-header::part(input-end){margin:0}.booking-editor-header__container.sc-ir-booking-editor-header{flex-direction:row;align-items:flex-start;flex-wrap:wrap}.booking-editor-header__adults-select.sc-ir-booking-editor-header{width:100px}.booking-editor-header__children-select.sc-ir-booking-editor-header{width:170px}}@media (min-width: 1024px){.booking-editor__date-validator.sc-ir-booking-editor-header::part(error-message){position:absolute}}`;

const IrBookingEditorHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.guestSelected = createEvent(this, "guestSelected");
        this.checkAvailability = createEvent(this, "checkAvailability");
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
    bookingService = new BookingService();
    adultsSchema = coerce.number().min(1);
    bookingEditorService = new IRBookingEditorService();
    BookedByGuestPickerSchema = objectType({
        firstName: stringType(),
        // lastName: z.string(),
    })
        .superRefine((data, ctx) => {
        if (!data.firstName) {
            ctx.addIssue({
                path: ['firstName'],
                code: ZodIssueCode.custom,
                message: t('Lcz_ChooseBookingNumber', { fallback: 'Choose a booking number' }),
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
        this.datesSchema = objectType({
            checkIn: anyType(),
            checkOut: anyType(),
        })
            .superRefine((data, ctx) => {
            // ─────────────────────────────
            // checkIn validations
            // ─────────────────────────────
            if (!hooks.isMoment(data.checkIn)) {
                ctx.addIssue({
                    path: ['checkIn'],
                    code: ZodIssueCode.custom,
                    message: t('Lcz_CheckInDateRequired', { fallback: 'Check-in date is required' }),
                });
            }
            if (hooks.isMoment(data.checkIn) && this.bookingEditorService.isEventType(['SPLIT_BOOKING', 'ADD_ROOM']) && !data.checkIn.isSameOrBefore(this.booking.to_date, 'date')) {
                ctx.addIssue({
                    path: ['checkIn'],
                    code: ZodIssueCode.custom,
                    message: `${t('Lcz_CheckInDateShouldBeMAx', { fallback: 'The check-in or check-out must fall within %1 and %2.', params: [formatDate(this.booking.from_date, 'ddd, DD MMM YYYY'), formatDate(this.booking.to_date, 'ddd, DD MMM YYYY')] })}  `,
                });
            }
            // ─────────────────────────────
            // checkOut validations
            // ─────────────────────────────
            if (!hooks.isMoment(data.checkOut)) {
                ctx.addIssue({
                    path: ['checkOut'],
                    code: ZodIssueCode.custom,
                    message: t('Lcz_CheckOutDateRequired', { fallback: 'Check-out date is required' }),
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
            this.bookings = await this.bookingService.fetchExposedBookings(value, calendar_data.property.id, this.checkIn, this.checkOut);
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
            if (this.mode === 'SPLIT_BOOKING' && !booking_store.bookedByGuest.firstName) {
                BookedByGuestSchema.parse(booking_store.bookedByGuest);
            }
            this.datesSchema.parse(booking_store.bookingDraft.dates);
            this.adultsSchema.parse(booking_store.bookingDraft?.occupancy?.adults);
            this.checkAvailability.emit();
        }
        catch (error) {
            console.error(error);
        }
    }
    handleDateRangeChange(event) {
        this.stopEvent(event);
        resetAvailability();
        setBookingDraft({ dates: event.detail });
    }
    handleDayUseDateChange(date) {
        if (!date) {
            return;
        }
        resetAvailability();
        setBookingDraft({
            dates: {
                checkIn: hooks(date),
                checkOut: hooks(date).add(1, 'day'),
            },
        });
    }
    handleSourceChange(event) {
        this.stopEvent(event);
        resetAvailability();
        const value = event.target.value;
        const source = booking_store.selects.sources.find(s => s.id === value);
        setBookingDraft({ source });
    }
    handleAdultsChange(event) {
        this.stopEvent(event);
        resetAvailability();
        const adults = Number(event.target.value);
        const { children } = booking_store.bookingDraft.occupancy;
        setBookingDraft({
            occupancy: { adults, children },
        });
    }
    handleChildrenChange(event) {
        this.stopEvent(event);
        resetAvailability();
        const children = Number(event.target.value);
        const { adults } = booking_store.bookingDraft.occupancy;
        setBookingDraft({
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
        const today = hooks();
        switch (this.mode) {
            case 'EDIT_BOOKING':
                return hooks(this.booking.from_date, 'YYYY-MM-DD').add(-2, 'weeks').format('YYYY-MM-DD');
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
        const { child_max_age } = calendar_data.property.adult_child_constraints;
        const years = child_max_age === 1 ? t('Lcz_Year', { fallback: 'year' }) : t('Lcz_Years', { fallback: 'years' });
        return `${t('Lcz_ChildCaption', { fallback: 'Child.' })} ${formatCount(0)} - ${formatCount(child_max_age)} ${years}`;
    }
    async selectGuest(e) {
        this.stopEvent(e);
        const booking_nbr = e.detail?.item?.value;
        const booking = await this.bookingService.getExposedBooking({ booking_nbr, language: LocaleController.language, withExtras: true });
        this.guestSelected.emit(booking);
    }
    render() {
        const { sources } = booking_store.selects;
        const { adults, children } = booking_store.bookingDraft.occupancy;
        const { checkIn, checkOut } = booking_store.bookingDraft.dates;
        const { dayUse } = booking_store.bookingDraft;
        return (h(Host, { key: 'ae56cdccf244c928f778cf3edb469dabf28a36fe' }, h("form", { key: '9720639d21e446aaf2a20c3c56579acae7d7b8a8', onSubmit: this.handleSubmit.bind(this) }, this.bookingEditorService.isEventType('SPLIT_BOOKING') && (h("ir-validator", { key: '07d2408df0fd961b20f9fe0de8917ce8b478b547', value: booking_store.bookedByGuest, class: "booking-editor-header__booking-picker-validator", showErrorMessage: true, schema: this.BookedByGuestPickerSchema }, h("ir-picker", { key: '6cf0aa6b7346f92eb852eda10cab529c7f01aadc', withClear: true, mode: "select-async", class: "booking-editor-header__booking-picker", debounce: 300, ref: el => (this.pickerRef = el), label: `${t('Lcz_Tobooking', { fallback: 'To booking' })}#`,
            // defaultValue={Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : ''}
            // value={Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : ''}
            placeholder: t('Lcz_BookingNumber', { fallback: 'Booking number' }), loading: this._isLoading, "onText-change": e => this.handleBookingSearch(e.detail), "onCombobox-select": this.selectGuest.bind(this) }, this.bookings.map(b => {
            const label = `${b.booking_nbr} ${b.guest.first_name} ${b.guest.last_name}`;
            return (h("ir-picker-item", { value: b.booking_nbr?.toString(), label: label }, `${formatBookingNumber(b.booking_nbr)} ${b.guest.first_name} ${b.guest.last_name}`));
        })))), h("div", { key: 'f3a6777637fc3fd96e1b4918b88babf91dd52392', class: "booking-editor-header__container" }, !this.bookingEditorService.isEventType(['EDIT_BOOKING', 'ADD_ROOM', 'SPLIT_BOOKING']) && !dayUse && (h("wa-select", { key: '900e3e5962ef7f872e3a7236c0b80f4f025277d0', size: "s", placeholder: t('Lcz_Source', { fallback: 'Source' }), value: booking_store.bookingDraft.source?.id?.toString(), defaultValue: booking_store.bookingDraft.source?.id, "onwa-hide": this.stopEvent.bind(this), onchange: this.handleSourceChange.bind(this) }, sources.map(option => (option.type === 'LABEL' ? h("small", null, option.description) : h("wa-option", { value: option.id?.toString() }, option.description))))), dayUse ? (h("ir-validator", { class: "booking-editor__date-validator", showErrorMessage: true, value: checkIn?.format('YYYY-MM-DD'), schema: stringType().min(1, t('Lcz_DateIsRequired', { fallback: 'Date is required' })) }, h("ir-date-select", { date: checkIn?.format('YYYY-MM-DD'), minDate: hooks().format('YYYY-MM-DD'), emitEmptyDate: true, onDateChanged: e => this.handleDayUseDateChange(e.detail.start) }, h("wa-icon", { part: "calendar-icon", slot: "start", variant: "regular", name: "calendar" })))) : (h("ir-validator", { class: "booking-editor__date-validator", showErrorMessage: true, value: booking_store.bookingDraft.dates, schema: this.datesSchema, style: { position: 'relative' } }, h("ir-date-range", { class: "booking-editor__date-range", defaultData: {
                fromDate: checkIn?.format('YYYY-MM-DD') ?? '',
                toDate: checkOut?.format('YYYY-MM-DD') ?? '',
            }, variant: "booking", withDateDifference: true, minDate: this.minDate, maxDate: this.maxDate, onDateRangeChange: this.handleDateRangeChange.bind(this) }))), !this.bookingEditorService.isEventType(['EDIT_BOOKING', 'EDIT_DAY_USE']) && (h(Fragment, { key: '4bfdb2377bd150aac5220ef6bc256192624f7b5e' }, h("ir-validator", { key: 'ecaa332eb23376ebeff11f55ce4b098f6016bad3', value: adults, schema: this.adultsSchema }, h("wa-select", { key: '8a1baed7a7aab21cc1ec1726365d9191dcb932f7', class: "booking-editor-header__adults-select", size: "s", placeholder: t('Lcz_Adults', { fallback: 'adults' }), value: adults?.toString(), defaultValue: adults?.toString(),
            // onwa-hide={this.stopEvent.bind(this)}
            onchange: this.handleAdultsChange.bind(this) }, Array.from({ length: calendar_data.property.adult_child_constraints.adult_max_nbr }, (_, i) => i + 1).map(option => (h("wa-option", { value: option.toString() }, formatCount(option)))))), calendar_data.property.adult_child_constraints.child_max_nbr > 0 && (h("wa-select", { key: 'b290084b2a42f47967dfdf14bfbccde53f89fd38', class: "booking-editor-header__children-select", size: "s", placeholder: this.childrenSelectPlaceholder, value: children?.toString(), defaultValue: children?.toString(),
            // onwa-hide={this.stopEvent.bind(this)}
            onchange: this.handleChildrenChange.bind(this) }, Array.from({ length: calendar_data.property.adult_child_constraints.child_max_nbr }, (_, i) => i + 1).map(option => (h("wa-option", { value: option.toString() }, formatCount(option)))))))), h("ir-custom-button", { key: 'dd3f83bd2f9b14ffc74f2874df0a6a1bfe051197', loading: this.isLoading, type: "submit", variant: "brand" }, t('Lcz_Check', { fallback: 'Check' }))), booking_store.roomTypes?.length > 0 && !this.isLoading && calendar_data.tax_statement && (h("wa-callout", { key: 'fe0d0d3f342cf6af2a8b3d645ad4f13621b4f14e', size: "s", variant: "neutral", appearance: "filled", class: "booking-editor-header__tax_statement" }, calendar_data.tax_statement)))));
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
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal");
        this.resetBookingEvt = createEvent(this, "resetBookingEvt");
    }
    open;
    booking;
    isLoading = false;
    note = '';
    closeModal;
    resetBookingEvt;
    bookingService = new BookingService();
    componentWillLoad() {
        if (this.booking.extras) {
            this.setNote(getPrivateNote(this.booking.extras));
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
        return (h("ir-dialog", { key: 'f3790d2f0a8f3f0dc39f43faa8d23cff6395840a', label: t('Lcz_PrivateNote', { fallback: 'Private Note' }), open: this.open, onIrDialogHide: () => {
                this.open = false;
            } }, h("wa-textarea", { key: '780b792ec09e7c908ab07186bd111e61ad6c8c60', size: "s", placeholder: t('Lcz_PrivateNote_MaxChar'), defaultValue: this.note, onchange: e => this.setNote(e.target.value), value: this.note }), h("div", { key: 'f35e8459307fdbffaa69b6608e82c07166221440', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '088d774219de42431958132e207b31416b005e7a', "data-dialog": "close", size: "m", variant: "neutral", appearance: "filled", onClickHandler: () => this.closeModal.emit(null), class: `flex-fill'}` }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '72c98199985899d2d3cebfe864d5f292bae994fc', size: "m", onClickHandler: () => this.savePrivateNote(), variant: "brand", loading: this.isLoading }, t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrBookingExtraNote.style = irBookingExtraNoteCss();

const irBookingGuaranteeCss = () => `.sc-ir-booking-guarantee-h{display:block}.sc-ir-booking-guarantee-h{font-family:'Open Sans',     -apple-system,     BlinkMacSystemFont,     'Segoe UI',     Roboto,     'Helvetica Neue',     Arial,     sans-serif !important}.sc-ir-booking-guarantee-h *.sc-ir-booking-guarantee{font-family:'Open Sans',     -apple-system,     BlinkMacSystemFont,     'Segoe UI',     Roboto,     'Helvetica Neue',     Arial,     sans-serif !important}.iframeHeight.sc-ir-booking-guarantee{height:max-content;height:22.5rem}.ir-me-1.sc-ir-booking-guarantee{margin-inline-end:0.25rem}`;

const IrBookingGuarantee = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return calendar_data.allowed_payment_methods?.find(pm => pm.code === value)?.description ?? null;
    }
    getPaymentMethod() {
        let paymentMethod = null;
        const payment_code = this.booking?.extras?.find(e => e.key === 'payment_code');
        if (this.booking.agent) {
            const code = this.booking?.extras?.find(e => e.key === 'agent_payment_mode');
            if (code) {
                paymentMethod = code.value === '001' ? t('Lcz_OnCredit') : payment_code ? this.checkPaymentCode(payment_code.value) : null;
            }
        }
        else if (payment_code) {
            paymentMethod = payment_code.value === '000' ? t('Lcz_NoCardInfoRequired', { fallback: 'No card info required upon booking' }) : this.checkPaymentCode(payment_code.value);
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
            h("div", null, cci && t('Lcz_CardLabel', { fallback: 'Card:' }), " ", h("span", null, cci.nbr || ''), cci.expiry_month && t('Lcz_ExpiryLabel', { fallback: ' Expiry: ' }), h("span", null, cci.expiry_month || '', cci.expiry_year && '/' + cci.expiry_year)),
            h("div", null, cci.holder_name && `${t('Lcz_Name', { fallback: 'Name' })}:`, " ", h("span", null, cci.holder_name || ''), cci.cvc && t('Lcz_CvcLabel', { fallback: ' - CVC:' }), " ", h("span", null, cci.cvc || '')),
        ];
    }
    renderCollapsedContent() {
        if (this.booking.guest.cci) {
            return this.renderCreditCardInfo();
        }
        if (this.paymentDetailsUrl) {
            return h("iframe", { src: this.paymentDetailsUrl, width: "100%", class: "iframeHeight", frameborder: "0", name: "payment" });
        }
        return h("div", { class: "text-center" }, this.paymentExceptionMessage);
    }
    renderOtaGuarantee() {
        const { ota_guarante } = this.booking;
        if (!ota_guarante || this.booking.is_direct)
            return null;
        return (h("div", null, h("ir-label", { content: ota_guarante.card_type + `${ota_guarante.is_virtual ? t('Lcz_VirtualCardSuffix', { fallback: ' (virtual)' }) : ''}`, labelText: `${t('Lcz_CardType')}:` }), h("ir-label", { content: ota_guarante.cardholder_name, labelText: `${t('Lcz_CardHolderName', { fallback: 'Card holder name' })}:` }), h("ir-label", { content: ota_guarante.card_number, labelText: `${t('Lcz_CardNumber', { fallback: 'Card number' })}:` }), h("ir-label", { content: this.formatCurrency(toFloat(Number(ota_guarante.meta?.virtual_card_current_balance), Number(ota_guarante.meta?.virtual_card_decimal_places)), ota_guarante.meta?.virtual_card_currency_code), labelText: `${t('Lcz_CardBalance')}:` })));
    }
    render() {
        if (!this.shouldShowGuarantee()) {
            return null;
        }
        const paymentMethod = this.booking.is_direct ? this.getPaymentMethod() : null;
        return (h("div", { class: "mb-1" }, h("div", { class: "d-flex align-items-center" }, h("span", { class: "ir-me-1 font-medium" }, t('Lcz_BookingGuarantee'), paymentMethod && h("span", null, ": ", paymentMethod)), this.shouldShowToggleButton() && (h("ir-button", { id: "drawer-icon", "data-toggle": "collapse", "data-target": ".guarrantee", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse", class: "sm-padding-right pointer", variant: "icon", icon_name: "credit_card", onClickHandler: this.handleToggleCollapse.bind(this) }))), h("div", { class: "collapse guarrantee" }, this.renderCollapsedContent()), this.renderOtaGuarantee()));
    }
};
IrBookingGuarantee.style = irBookingGuaranteeCss();

const irBookingHeaderCss = () => `.sc-ir-booking-header-h{display:block}.booking-header__row.sc-ir-booking-header{display:flex;flex-direction:column;gap:1rem;padding:0 var(--wa-space-m);flex-wrap:wrap}.booking-header__actions.sc-ir-booking-header{display:flex;align-items:center;flex-wrap:wrap;justify-content:flex-end;gap:0.5rem}.booking-header__channel-number.--primary.sc-ir-booking-header{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;color:var(--wa-color-text-quiet)}.booking-header__label-container.sc-ir-booking-header{display:flex;align-items:center}.booking-header__status-trigger.sc-ir-booking-header{width:100%}.booking-header__status-trigger.sc-ir-booking-header::part(base),.booking-header__status-trigger.sc-ir-booking-header [part~="base"]{justify-content:flex-start}.booking-header__status-trigger.sc-ir-booking-header::part(label),.booking-header__status-trigger.sc-ir-booking-header [part~="label"]{flex:1 1 0%;text-align:start}.booking-header__stretched-btn.sc-ir-booking-header{flex:1 1 0%}.booking-header__label.sc-ir-booking-header{padding:0;margin:0}.booking-header__label-container.sc-ir-booking-header{gap:1rem}.booking-header__info.sc-ir-booking-header,.booking-header__title.sc-ir-booking-header{display:flex;flex-direction:column;gap:1rem}.booking-header__avatar.sc-ir-booking-header{background-color:white}.booking-header__avatar.sc-ir-booking-header::part(image),.booking-header__avatar.sc-ir-booking-header [part~="image"]{all:unset;object-fit:cover;height:28px;width:28px}.booking-header__label-number.sc-ir-booking-header{margin:0;padding:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l)}.booking-header__modified.sc-ir-booking-header{padding:0;margin:0;color:var(--wa-color-danger-fill-loud);width:fit-content}.booking-header__channel-number.sc-ir-booking-header{padding:0;margin:0}.booking-header__meta.sc-ir-booking-header{display:flex;align-items:center;gap:1rem;font-size:0.875rem}.booking-header__booking-copy-btn.sc-ir-booking-header{visibility:hidden}@media (min-width: 640px){.booking-header__title.sc-ir-booking-header{flex-direction:row;align-items:center}}@media (min-width: 768px){.booking-header__label.sc-ir-booking-header{display:flex;align-items:center;gap:0.5rem}.booking-header__row.sc-ir-booking-header,.booking-header__info.sc-ir-booking-header{flex-direction:row;align-items:center}.booking-header__row.sc-ir-booking-header{justify-content:space-between}.booking-header__label.sc-ir-booking-header:hover .booking-header__booking-copy-btn.sc-ir-booking-header{visibility:visible}}.ir-flip-rtl.sc-ir-booking-header:dir(rtl){scale:-1 1}`;

const IrBookingHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSidebar = createEvent(this, "closeSidebar");
        this.resetBookingEvt = createEvent(this, "resetBookingEvt");
        this.openSidebar = createEvent(this, "openSidebar");
    }
    dialogRef;
    bookingService = new BookingService();
    alertMessage = t('Lcz_OtaModificationAlert', {
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
            showToast({
                type: 'error',
                description: '',
                title: t('Lcz_SelectStatus'),
            });
            return;
        }
        try {
            await this.bookingService.changeExposedBookingStatus({
                book_nbr: this.booking.booking_nbr,
                status: this.bookingStatus,
            });
            showToast({
                type: 'success',
                description: '',
                title: t('Lcz_StatusUpdatedSuccessfully'),
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
                return h("ir-pms-logs", { bookingNumber: this.booking.booking_nbr });
            case 'events-log':
                return h("ir-events-log", { booking: this.booking, bookingNumber: this.booking.booking_nbr });
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
        const showPms = (calendar_data.property?.linked_pms || [])?.findIndex(lp => lp?.is_active && lp?.bookings_integration_mode?.code === '001') !== -1;
        return (h("div", { key: '6b987fb172ed4d756c2d4d42f1329b187126fc53', class: "booking-header" }, h("div", { key: '52f573823e9ab521ef4e567dd014e42dbd629e47', class: "booking-header__row" }, h("div", { key: '500238d21e276756efced009ddf07f56e9e6faaa', class: "booking-header__info" }, h("div", { key: '48de0ff2e69967cbafb3d1be59a7a9b619eff78a', class: "booking-header__title" }, h("div", { key: 'e13c93f042d9dc79a5e907f624cbfab5b505a293', class: "booking-header__label-container" }, this.hasMenu && (h(Fragment, { key: 'f22c11bbfbdbc0b91097ddaaea8df9042e5b5d66' }, h("wa-tooltip", { key: '858234e81afb585667581ebfea86adda295726d5', for: "menu" }, t('Lcz_GoBack', { fallback: 'Go back' })), h("ir-custom-button", { key: 'ae64f7746b95e93597b0358dcd180a77b4311caa', id: "menu", variant: "neutral", size: "s", appearance: "plain" }, h("wa-icon", { key: '0234d3d7d862b664a34ed66cb00de69c2f070bff', class: "ir-flip-rtl", name: "arrow-left", style: { fontSize: '1.2rem' }, label: t('Lcz_GoBack', { fallback: 'Go back' }) })))), h("wa-avatar", { key: '1e1becb57cc3b9cb109f07f7bd8004e9f0dcf83f', shape: "circle", class: "booking-header__avatar", initials: this.initials, image: this.avatarImage, loading: "lazy" }), h("div", { key: 'ec20429f4dc065df5bf0fd59c339c2a378b0860b', class: "booking-header__identity" }, h("div", { key: 'c9fee40e9958acc6d1636ce1ac3cce406b339892', class: 'booking-header__label' }, h("h4", { key: '9ba1277ff1c94e2c5b5d8a9f10c82d82c793e38e', class: "booking-header__label-number" }, `${t('Lcz_Booking', { fallback: 'Booking' })}#${formatBookingNumber(this.booking.booking_nbr)}`)), h("div", { key: 'cbc0b85987768a9383b387e5358435058d569fdf', class: "booking-header__meta" }, !this.booking.is_direct && h("p", { key: '48a51f9b9b8fe7fbec4cd6b61a16e73f6c873a61', class: "booking-header__channel-number --primary" }, formatBookingNumber(this.booking.channel_booking_nbr)), this.booking.agent_booking_nbr && h("p", { key: '82ea08315ec79ea6b18f874fd2eb53335d00eb5d', class: "booking-header__channel-number --primary" }, formatBookingNumber(this.booking.agent_booking_nbr)), h("p", { key: 'ef58d8f0bb5f42e6a6100618e58080638046e633', class: "booking-header__channel-number" }, this.booking?.agent ? (h("span", null, t('Lcz_Agent', { fallback: 'Agent' }), ': ', h("p", { class: 'truncate p-0 m-0', style: { maxWidth: '150px', display: 'inline-flex' } }, this.agent.name, ' ', h("i", { style: { paddingInlineStart: '0.5rem' }, class: 'truncate' }, this.agent.reference)))) : (this.booking.origin.Label)), this.canChangeSource && (h("ir-custom-button", { key: 'd9023e731f2ec3c416ab9aa2d3404674362c7406', link: true, onClickHandler: () => this.bookingSourceEditor.openDialog() }, t('Lcz_ChangeSource', { fallback: 'Change source' }))), lastManipulation && (h(Fragment, { key: 'fe568d2c44e2fe34866175d4d988fd9c351fdbf1' }, h("p", { key: '141aac230860e605d7b1c771fe0237884971e694', id: `booking-${this.booking.booking_nbr}-modified`, class: "booking-header__modified" }, t('Lcz_Modified', { fallback: 'Modified' })), h("wa-tooltip", { key: '5078c97dc0f2b871963b4118e1dde0ef12eb3932', for: `booking-${this.booking.booking_nbr}-modified` }, h("div", { key: '59f7145ca1481471c4ec9bef34ec7debc0a67e92' }, h("p", { key: '642d0fc25690419b7da4d79905f6455fdff0173b', class: "m-0" }, t('Lcz_ModifiedByAt', {
            fallback: 'Modified by %1 at %2 %3:%4.',
            params: [
                lastManipulation?.user,
                formatDate(lastManipulation?.date, 'MMM DD, YYYY'),
                formatNumber(Number(lastManipulation?.hour), { minimumIntegerDigits: 2, useGrouping: false }),
                formatNumber(Number(lastManipulation?.minute), { minimumIntegerDigits: 2, useGrouping: false }),
            ],
        })), h("p", { key: 'c0988bcbb6b2e4ae312059dd6f0ebe48a92694f2', class: "m-0" }, this.alertMessage)))))))))), h("div", { key: 'c8c9bf8b04686504aa7dd3850a9dd0476f751112', class: "booking-header__actions" }, h("div", { key: '365b6e4c0dc6be44e7d73b41c38548cba547a31a' }, this.booking.allowed_actions.length > 0 && this.booking.is_editable ? (h("wa-dropdown", { "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                this.bookingStatus = e.detail.item.value;
                this.modalEl.openModal();
            } }, h("wa-button", { slot: "trigger",
            // onClickHandler={() => {
            //   if (!this.booking.is_direct) {
            //     this.modalEl.openModal();
            //     return;
            //   }
            //   this.updateStatus();
            // }}
            withCaret: true,
            // loading={isRequestPending('/Change_Exposed_Booking_Status')}
            appearance: 'outlined', size: "s", variant: "brand", class: "booking-header__status-trigger" }, h("ir-booking-status-tag", { slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", null, t('Lcz_UpdateStatus', { fallback: 'Update status' }))), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))) : (h("ir-booking-status-tag", { status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }))), isAgentMode(this.agent) && (h(Fragment, { key: 'e41a1a5b8e04456f2114d8a137d7012693d22cf8' })), h("ir-custom-button", { key: '9f7a5587cae3ccaa272c61119803a19622f93e48', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "s", variant: "brand" }, t('Lcz_Logs', { fallback: 'Logs' })), showPms && (h("ir-custom-button", { key: '6acfdc6db86e1047cff1f4c700cb1a0bd2810433', class: "booking-header__stretched-btn", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "s", variant: "brand" }, t('Lcz_PMS', { fallback: 'PMS' }))), this.hasReceipt && (h(Fragment, { key: '359984b4aa5d740204755b14a0c52b7fc414d0e5' }, h("ir-custom-button", { key: 'a2ab43747bf8d6f9066cd814d3295e554cbf1808', class: "booking-header__stretched-btn", id: "invoice", variant: "brand", size: "s", appearance: "outlined" }, t('Lcz_Billing', { fallback: 'Billing' })))), this.hasPrint && (h(Fragment, { key: '1c6ce4e9f076e509bc725d978494065144e24640' }, h("wa-tooltip", { key: '8ab22c96aa083b08b960c4eebcc9d992c514eb4a', for: "print" }, t('Lcz_PrintBookingTooltip', { fallback: 'Print booking' })), h("ir-custom-button", { key: '7c80824aeb3638de90d4a5fcc24789371c5edcaf', id: "print", variant: "brand", size: "s", appearance: "outlined" }, h("wa-icon", { key: '4e2c1cebcf7523b82cf7b3c90b4e7a9522e21ebc', label: t('Lcz_Print', { fallback: 'Print' }), name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: '5a97583a0f357c5e1b7a06e33d7f0f7ff9a0a8e2' }, h("wa-tooltip", { key: '46fa2463cb19877ed3e17ff6f4c7e7e31267f686', for: "email" }, t('Lcz_EmailBookingToGuestTooltip', { fallback: 'Email this booking to guest' })), h("ir-custom-button", { key: 'f3ab2432fd8adb6d45d3f6b97b1e3a30f73b5be9', id: "email", variant: "brand", size: "s", appearance: "outlined" }, h("wa-icon", { key: 'f6b24b7e01def1500c111d9067e8033e8f6888aa', name: "envelope", style: { fontSize: '1.2rem' }, label: t('Lcz_EmailThisBooking', { fallback: 'Email this booking' }) })))), this.hasDelete && (h(Fragment, { key: '9664fd4040d5633a5d739bf489583a8feb6c8391' }, h("wa-tooltip", { key: 'f7f28a4b69a42c7e48d34120c2c5812d1a61667d', for: "book-delete" }, t('Lcz_DeleteThisBooking', { fallback: 'Delete this booking' })), h("ir-custom-button", { key: '0fd0573de10594ceeeb01fd3ea2b80e212b8a083', id: "book-delete", variant: "danger", size: "s", appearance: "plain" }, h("wa-icon", { key: '39c31a165ae02f5db230a6970e8ef8d8c5b70f13', name: "envelope", style: { fontSize: '1.2rem' }, label: t('Lcz_DeleteThisBooking', { fallback: 'Delete this booking' }) })))), this.hasCloseButton && (h("ir-custom-button", { key: '1754da1d2552a20568cbb38441a9af7631d926e0', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "s", appearance: "plain" }, h("wa-icon", { key: '98011b40ce893a9a46bc0bfc547f266e4f492fce', name: "xmark", style: { fontSize: '1.2rem' }, label: t('Lcz_GoBack', { fallback: 'Go back' }) }))))), h("ir-dialog", { key: '01ff1251247121a6ee99c1829ecff2f194cca204', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? t('Lcz_PMS_Logs') : t('Lcz_EventsLog'), style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: '46f8d7370567f37969eca3c38bc7b4a5c20ba1c7', ref: el => (this.modalEl = el), label: t('Lcz_Alert', { fallback: 'Alert' }), lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: 'f7aedd79faf85e35080dfd5064921b73c0a8a1af' }, this.booking.is_direct ? t('Lcz_ConfirmUpdateBookingStatus', { fallback: 'Are you sure you want to update this booking status?' }) : t('Lcz_OTA_Modification_Alter')), h("div", { key: '7b4b570a1d73001454bb81bb73cb6f674bb778c4', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: '4900c53daaae1d56d67367b480e12869234ffab2', "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '142ab2fd1d2b91c583bde26aa7ae7e6cfb0fe054', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "m", variant: "brand", loading: isRequestPending('/Change_Exposed_Booking_Status') }, t('Lcz_Confirm', { fallback: 'Confirm' })))), h("ir-booking-source-editor-dialog", { key: '93c00d6cfe761fc4527bad9ab31214777ba1a379', booking: this.booking, ref: el => (this.bookingSourceEditor = el) })));
    }
};
IrBookingHeader.style = irBookingHeaderCss();

const irBookingPricingDrawerCss = () => `.sc-ir-booking-pricing-drawer-h{display:block}.pricing-drawer__footer.sc-ir-booking-pricing-drawer{display:flex;gap:0.75rem}.pricing-drawer__btn.sc-ir-booking-pricing-drawer{flex:1 1 0}`;

const IrBookingPricingDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeDrawer = createEvent(this, "closeDrawer");
        this.pricingSaved = createEvent(this, "pricingSaved");
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
            return t('Lcz_EditNightlyRates', { fallback: 'Edit Nightly Rates' });
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
        return (h("ir-drawer", { key: '43e95399eb9735494d1aefd21556649bccebe43b', open: this.open, label: this.drawerLabel, style: {
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
            } }, this.open && (h("ir-booking-pricing-form", { key: '4ea27419c6f42baee1888aea925771365478f430', formId: this.formId, booking: this.booking, room: this.room, agent: this.agent, folioEntries: this.folioEntries, currencySymbol: this.currencySymbol, onPricingSaved: e => {
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
            } })), h("div", { key: '66c058c1369987d570b0da99eddec542c96d990c', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '90bd0ac473af47ddc7abf9852b237af1756da783', appearance: "filled", size: "m", variant: "neutral", onClickHandler: () => this.closeDrawer.emit() }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '1f007f8c3b3362e8e9dea083c118620bf7c2c417', form: this.formId, size: "m", type: "submit", variant: "brand", loading: this.saveDisabled, disabled: this.allItemsDisabled }, t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
};
IrBookingPricingDrawer.style = irBookingPricingDrawerCss();

const irBookingPricingFormCss = () => `.sc-ir-booking-pricing-form-h{display:block;height:100%}.pricing-form.sc-ir-booking-pricing-form{display:flex;flex-direction:column;gap:1rem;padding-bottom:1rem}.pricing-form__input.sc-ir-booking-pricing-form{display:grid;grid-template-columns:auto 1fr;gap:var(--wa-space-l);align-items:center}.pricing-form__input.sc-ir-booking-pricing-form::part(label),.pricing-form__input.sc-ir-booking-pricing-form [part~="label"]{width:80px;margin:0}.pricing-form__input.sc-ir-booking-pricing-form:disabled::part(label),.pricing-form__input.sc-ir-booking-pricing-form:disabled [part~="label"]{opacity:0.5}.pricing-form__input.sc-ir-booking-pricing-form::part(wa-input),.pricing-form__input.sc-ir-booking-pricing-form [part~="wa-input"]{grid-column:1 / -1;grid-row-end:span 2;display:grid;grid-template-columns:subgrid;gap:0 var(--wa-space-s);align-items:center}.pricing-form__row.sc-ir-booking-pricing-form{display:flex;align-items:center;gap:0.75rem}.pricing-form__row--locked.sc-ir-booking-pricing-form{opacity:0.55}.pricing-form__date.sc-ir-booking-pricing-form{font-size:0.875rem;flex:0 0 6rem;color:var(--wa-color-text-quiet);white-space:nowrap}.pricing-form__row.sc-ir-booking-pricing-form ir-validator.sc-ir-booking-pricing-form{flex:1;min-width:0}@media (min-width: 768px){.pricing-form__input.sc-ir-booking-pricing-form::part(base){max-width:180px}}`;

// Built per call: zod fixes messages at construction, and the locale is not loaded when this module is.
const nightAmountSchema = () => coerce.number({ invalid_type_error: t('Lcz_Required', { fallback: 'Required' }) }).min(0, t('Lcz_MinimumIsZero', { fallback: 'Minimum is 0' }));
const IrBookingPricingForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.pricingSaved = createEvent(this, "pricingSaved");
        this.submitDisabledChange = createEvent(this, "submitDisabledChange");
        this.allDisabled = createEvent(this, "allDisabled");
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
    bookingService = new BookingService();
    isAgent;
    componentWillLoad() {
        this.isAgent = this.room.agent && isAgentMode(this.agent);
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
            const info = await this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr, language: LocaleController.language });
            const accommodationItem = (info.invoiceable_items ?? []).find(item => item.key === this.room.system_id);
            this.invoiceLocked = accommodationItem.reason.code === InvoiceableItemReason.AlreadyInvoiced;
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
        return new Map(this.folioEntries.filter(tx => tx.CATEGORY === SvcCategory.Accommodation && tx.BSA_REF === this.room.identifier).map(tx => [tx.SERVICE_DATE, tx]));
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
            return (h("div", { class: 'drawer__loader-container' }, h("ir-spinner", null)));
        }
        const allDisabled = this.invoiceLocked;
        const hasDisabledInput = this.nights.some(night => night.isLocked || allDisabled);
        return (h("form", { id: this.formId, class: "pricing-form", onSubmit: this.handleSubmit.bind(this), novalidate: true }, hasDisabledInput && (h("wa-callout", { variant: "warning", size: "s" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), t('Lcz_LockedNightlyRatesWarning', {
            fallback: 'Locked nightly rates cannot be edited in case they have been invoiced. You can void the invoice with a credit note to update the rates and recreate a new one',
        }))), calendar_data.property.tax_statement && (h("wa-callout", { size: "s", variant: "neutral" }, calendar_data.property.tax_statement)), h("div", { style: { marginBottom: '0.5rem' } }), this.nights.map(night => (h("ir-validator", { key: night.date, class: "pricing-form__input-validator", schema: nightAmountSchema(), value: night.amount }, h("ir-input", { class: "pricing-form__input", label: formatDate(night.date, 'ddd, MMM D'), value: night.amount, mask: "price", disabled: night.isLocked || allDisabled || this.isSubmitting, "onText-change": (e) => this.updateNight(night.date, e.detail) }, h("span", { slot: "start" }, calendar_data.property.currency.symbol), (night.isLocked || this.invoiceLocked) && h("wa-icon", { slot: "end", name: "lock", style: { fontSize: '0.875rem' } })))))));
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
        registerInstance(this, hostRef);
        this.roomDeleteFinished = createEvent(this, "roomDeleteFinished");
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
        const splitIndex = this.splitIndex ?? buildSplitIndex(rooms);
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
        return canCheckout({ inOutCode: room.in_out?.code, to_date: room.to_date });
        // if (!calendar_data.checkin_enabled || calendar_data.is_automatic_check_in_out) {
        //   return false;
        // }
        // return room.in_out.code === '001';
    }
    handleRoomCheckin(room) {
        if (!room.unit) {
            return false;
        }
        return canCheckIn({ from_date: room.from_date, to_date: room.to_date, isCheckedIn: room.in_out?.code === ROOM_IN_OUT.CHECKIN });
        // if (!calendar_data.checkin_enabled || calendar_data.is_automatic_check_in_out) {
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
        return (h("ir-room", { key: room.identifier, room: room, property_id: this.propertyId, language: this.language, departureTime: this.departureTime, arrivalTime: this.arrivalTime, bedPreferences: this.bedPreference, isEditable: this.booking.is_editable, legendData: this.legendData, roomsInfo: this.roomsInfo, myRoomTypeFoodCat: room.roomtype.name, mealCodeName: room.rateplan.short_name, includeDepartureTime: includeDepartureTime, currency: this.booking.currency.symbol, hasRoomEdit: this.hasRoomEdit && this.booking.status.code !== '003' && this.booking.is_direct, hasRoomDelete: this.hasRoomDelete && this.booking.status.code !== '003' && this.booking.is_direct, hasCheckIn: showCheckin, hasCheckOut: showCheckout, autoOpenCheckout: !!this.checkoutRoomIdentifier && this.checkoutRoomIdentifier === room.identifier, booking: this.booking, agent: this.agent, clTransactions: this.clTransactions, svcCategories: this.svcCategories, bookingIndex: bookingIndex, onDeleteFinished: (e) => this.roomDeleteFinished.emit(e.detail) }));
    }
    renderRoomPool(rooms) {
        if (!rooms.length) {
            return h("p", { class: "room-group__empty" }, t('Lcz_NoRoomsInGroup', { fallback: 'No rooms in this group' }));
        }
        const { groups, indexById, hasSplitGroups } = this.computeRoomGroups(rooms);
        if (!hasSplitGroups) {
            const groupRooms = groups[0].rooms;
            return groupRooms.map((room, idx) => (h(Fragment, null, this.renderRoomItem(room, indexById.get(room.identifier) ?? idx), idx < groupRooms.length - 1 ? h("wa-divider", null) : null)));
        }
        return (h("div", { class: "d-flex flex-column", style: { gap: '1rem' } }, groups.map((group, groupIdx) => {
            const isLastGroup = groupIdx === groups.length - 1;
            return (h("div", { class: `${isLastGroup ? '' : 'room-group'}`, key: `room-group-${group.order}-${groupIdx}` }, group.rooms.map((room, roomIdx) => (h(Fragment, null, this.renderRoomItem(room, indexById.get(room.identifier) ?? roomIdx, roomIdx === group.rooms.length - 1), roomIdx < group.rooms.length - 1 ? h("wa-divider", null) : null))), !isLastGroup && h("wa-divider", { style: { '--width': '3px' } })));
        })));
    }
    renderRooms() {
        const rooms = this.booking?.rooms ?? [];
        if (!rooms.length) {
            return null;
        }
        if (!isAgentMode(this.agent)) {
            return this.renderRoomPool(rooms);
        }
        const guestRooms = rooms.filter(r => r.agent === null || r.agent === undefined);
        const agentRooms = rooms.filter(r => r.agent !== null && r.agent !== undefined);
        const agentName = this.booking.agent?.name ?? t('Lcz_Agent', { fallback: 'Agent' });
        return (h(Fragment, null, h("p", { class: "service-group__label --agent" }, agentName, h("span", null, t('Lcz_Folio', { fallback: 'Folio' }))), h("div", { class: "service-group service-group--agent" }, h("div", { class: "service-group__body" }, agentRooms.length === 0 ? h("p", { class: "service-group__empty" }, t('Lcz_NoAgentRooms', { fallback: 'No agent rooms' })) : this.renderRoomPool(agentRooms))), h("wa-divider", null), h("p", { class: "service-group__label" }, t('Lcz_Guest', { fallback: 'Guest' }), h("span", null, t('Lcz_Folio', { fallback: 'Folio' }))), h("div", { class: "service-group service-group--guest" }, h("div", { class: "service-group__body" }, guestRooms.length === 0 ? h("p", { class: "service-group__empty" }, t('Lcz_NoGuestRooms', { fallback: 'No guest rooms' })) : this.renderRoomPool(guestRooms)))));
    }
    render() {
        if (!this.booking) {
            return null;
        }
        return (h("wa-card", { appearance: "plain", class: "booking-rooms__card" }, h("ir-date-view", { class: "booking-details__date-view-header", slot: "header", from_date: this.booking.from_date, to_date: this.booking.to_date }), this.hasRoomAdd && this.booking.is_editable && (h(Fragment, null, h("wa-tooltip", { for: "room-add" }, t('Lcz_AddUnit', { fallback: 'Add unit' })), h("ir-custom-button", { slot: "header-actions", id: "room-add", appearance: 'plain', size: 's', variant: 'neutral' }, h("wa-icon", { name: "plus", style: { fontSize: '1rem' }, label: t('Lcz_AddUnit', { fallback: 'Add unit' }) })))), this.renderRooms()));
    }
};
IrBookingRooms.style = irBookingRoomsCss();

const irBookingSourceEditorDialogCss = () => `.sc-ir-booking-source-editor-dialog-h{display:block}`;

const IrBookingSourceEditorDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt");
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
        return (h("ir-dialog", { key: '729a04f42e537e8e2f0533edff1bdff689e5b8f7', label: t('Lcz_ChangeBookingSource', { fallback: 'Change Booking Source' }), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, open: this.open }, this.open && (h("ir-booking-source-editor-form", { key: '01b1915e74ce6495f19aba5c428bbdf5858be055', booking: this.booking, onBookingSourceSaved: () => {
                this.closeDialog();
                setTimeout(() => this.resetBookingEvt.emit(null), 100);
            }, onLoadingChange: e => (this.isLoading = e.detail) })), h("div", { key: '1eb1f57ae2dc8fefdea6d1712f91b0f992ea9361', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '91d7c633b51e93c91331b1b175e30c55620c085e', size: "m", "data-dialog": "close", appearance: "filled", variant: "neutral" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'c011beb4d096678249ee45faa2a0923f46ce58d7', type: "submit", form: `change-source-form-${this.booking?.booking_nbr}`, size: "m", appearance: "accent", variant: "brand", loading: this.isLoading }, t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrBookingSourceEditorDialog.style = irBookingSourceEditorDialogCss();

const irBookingSourceEditorFormCss = () => `.sc-ir-booking-source-editor-form-h{display:block}`;

const IrBookingSourceEditorForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bookingSourceSaved = createEvent(this, "bookingSourceSaved");
        this.loadingChange = createEvent(this, "loadingChange");
    }
    booking;
    selectedSource;
    step = 'source';
    checkedItems = new Set();
    isLoading = false;
    bookingSourceSaved;
    loadingChange;
    bookingService = new BookingService();
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
        return calendar_data?.property?.allowed_booking_sources?.find(s => s[key]?.toString() === value?.toString());
    }
    getAgentRef() {
        return calendar_data.property.agents.find(a => a.id === Number(this.selectedSource.tag)) ?? null;
    }
    buildAssignableItems() {
        const items = [];
        this.booking.rooms?.forEach(room => {
            items.push({
                key: `room-${room.identifier}`,
                label: room.roomtype?.name ?? t('Lcz_RoomFallback', { fallback: 'Room' }),
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
                label: pickup.selected_option?.vehicle?.description ?? t('Lcz_AirportPickupFallback', { fallback: 'Airport Pickup' }),
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
        return (h("form", { key: '0e9dbe29e760dcbeac2be4722cc54dfb9b00f917', id: `change-source-form-${this.booking?.booking_nbr}`, onSubmit: this.handleSubmit.bind(this) }, this.booking.agent === null && this.booking?.financial?.payments?.filter(p => !p.is_city_ledger)?.length > 0 && (h("wa-callout", { key: 'f558a71040f6dddacbaf9c98d91f728412a4ee24', size: "s", variant: "warning", style: { marginBottom: '1rem' } }, h("wa-icon", { key: '187df0bf54b34fdcbc99aa6d90621f8aec56c249', slot: "icon", name: "triangle-exclamation" }), t('Lcz_GuestFolioEntriesWarning', { fallback: 'You have guest folio entries that may need to be removed and recreated in the agent folio.' }))), h("wa-select", { key: 'fa6d35089c6ac7e634eb968a624718bf15ea6f74', label: t('Lcz_NewSource', { fallback: 'New source' }), onchange: this.handleSelectChange.bind(this), size: "s", value: this.selectedSource?.id, defaultValue: this.selectedSource?.id }, calendar_data?.property?.allowed_booking_sources?.map(option => option.type === 'LABEL' ? (h("small", { key: option.id }, option.description)) : (h("wa-option", { key: option.id, value: option.id?.toString() }, option.description)))), isAssign && h("ir-booking-assign-items", { key: '203b4b3cdaedf495c2fa7b15404487d1c7b02963', items: this.buildAssignableItems(), onBookingSelectionChange: e => (this.checkedItems = e.detail) })));
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
        registerInstance(this, hostRef);
        this.checkoutDialogClosed = createEvent(this, "checkoutDialogClosed");
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
    bookingService = new BookingService();
    setupService = new SetupService();
    agentService = new AgentsService();
    cityLedgerService = new CityLedgerService();
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
        return formatAmount(this.currencySymbol, amount);
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
        if (!this.agent || !isAgentMode(this.agent) || !this.room || !this.booking)
            return null;
        const today = hooks().format('YYYY-MM-DD');
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
                this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr, language: LocaleController.language }),
                hasAgent ? this.agentService.getExposedAgent({ id: this.booking.agent.id }) : Promise.resolve(null),
                hasDueAmount ? this.setupService.getPaymentEntries() : Promise.resolve(null),
            ]);
            this.invoiceInfo = invoiceInfo;
            this.setupButtons();
            if (paymentEntries) {
                this.paymentEntries = paymentEntries;
            }
            if (agent && isAgentMode(agent)) {
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
        const today = hooks().startOf('day');
        this.isEarlyCheckout = isEarlyCheckout(this.room);
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
        const toBeInvoiced = this.invoiceInfo.invoiceable_items.filter(item => ![InvoiceableItemReason.AlreadyInvoiced, InvoiceableItemReason.PickupCancellationPolicy].includes(item?.reason?.code));
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
        return (h("div", { class: "early-checkout" }, h("wa-callout", { class: "ec-summary", size: "s", appearance: "filled", variant: "neutral" }, h("div", { class: "ec-summary__row" }, h("span", { class: "ec-summary__label" }, t('Lcz_Unit', { fallback: 'Unit' })), h("span", { class: "ec-summary__value" }, unitName)), h("div", { class: "ec-summary__row" }, h("span", { class: "ec-summary__label" }, t('Lcz_OriginalCheckOut', { fallback: 'Original check-out' })), h("span", { class: "ec-summary__value" }, formatDate(this.room.to_date, 'ddd, MMM D, YYYY'))), h("div", { class: "ec-summary__row" }, h("span", { class: "ec-summary__label" }, t('Lcz_ActualCheckOut', { fallback: 'Actual check-out' })), h("span", { class: "ec-summary__value" }, formatDate(hooks(), 'ddd, MMM D, YYYY')))), h("div", { class: "ec-section" }, h("p", { class: "ec-section__title" }, t('Lcz_ReclaimedNights', { fallback: 'Reclaimed Nights' }), " ", h("wa-badge", { pill: true }, formatCount(remainingCount))), h("div", { class: "ec-nights" }, this.remainingDays.map(day => (h("div", { key: day.date, class: "ec-nights__row" }, h("span", { class: "ec-nights__date" }, formatDate(day.date, 'ddd, MMM D')), h("span", { class: "ec-nights__amount" }, this.formatAmount(day.charges.total_amount))))), h("div", { class: "ec-nights__subtotal" }, h("span", null, t('Lcz_SubtotalIncludingTaxesAndFees', { fallback: 'Subtotal (Including taxes and fees)' })), h("span", null, this.formatAmount(total))))), h("div", { class: "ec-section" }, this.penaltyMax > 0 ? (h("ir-input", { label: t('Lcz_ApplyFullCancellationPenalty', { fallback: 'Apply the full cancellation penalty?' }), mask: "price", value: this.initialPenaltyStr, defaultValue: this.initialPenaltyStr, min: 0, max: this.penaltyMax, hint: t('Lcz_PrefilledFromReclaimedNightsOrDueAmountHint', { fallback: 'Pre-filled from reclaimed nights or due amount. Modify or waive entirely.' }), "onText-change": (e) => {
                const val = parseFloat(e.detail);
                this.penaltyAmount = isNaN(val) ? 0 : val;
            } }, h("span", { slot: "start" }, this.currencySymbol))) : (h("wa-callout", { size: "s", variant: "success" }, h("wa-icon", { slot: "icon", name: "circle-check" }), t('Lcz_BookingFullyPaidNoPenaltyDue', { fallback: 'This booking is fully paid — no cancellation penalty or outstanding balance is due.' }))))));
    }
    get duePayment() {
        const p = this.paymentEntries.types.find(t => t.CODE_NAME === '001');
        return {
            amount: Math.abs(this.booking?.guest_financial?.due_amount),
            currency: calendar_data.property.currency,
            date: hooks().format('YYYY-MM-DD'),
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
        return (h("div", { class: "due-amount-btn" }, h("wa-callout", { size: "s", variant: "danger" }, h("wa-icon", { slot: "icon", name: "money-bill-wave" }), h("div", { class: 'd-flex align-items-center justify-content-between' }, h("span", null, t('Lcz_OutstandingGuestBalance', { fallback: 'Outstanding guest balance:' }), " ", amount), canCollect && (h("ir-custom-button", { variant: "danger", appearance: "outlined", size: "xs", style: { marginLeft: 'auto' }, onClick: () => this.paymentFolioRef?.openFolio() }, t('Lcz_Collect', { fallback: 'Collect' })))))));
    }
    renderSameDayWarning() {
        if (hooks().isSame(hooks(this.room?.from_date, 'YYYY-MM-DD'), 'date')) {
            const isSingleRoom = this.booking.rooms.length === 1;
            return (h("wa-callout", { size: "s", variant: "danger" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), isSingleRoom ? t('Lcz_BookingWillBeCancelled', { fallback: 'This booking will be cancelled' }) : t('Lcz_RoomWillBeRemoved', { fallback: 'This room will be removed' })));
        }
        return null;
    }
    renderMissingClWarning() {
        const summary = this.missingClSummary;
        if (!summary)
            return null;
        if (summary.total === 0) {
            return (h("wa-callout", { size: "s", variant: "success" }, h("wa-icon", { slot: "icon", name: "circle-check" }), t('Lcz_AllChargesPostedToCityLedger', { fallback: 'All charges posted to %1 City Ledger', params: [this.agent.name] })));
        }
        return (h("wa-callout", { size: "s", variant: "warning" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), t('Lcz_ItemsNotPostedToCityLedger', { fallback: '%1 item(s) not posted to city ledger', params: [formatCount(summary.total)] })));
    }
    render() {
        const isEarly = this.isEarlyCheckout && this.isLoading !== 'page';
        const hasDue = (this.booking?.guest_financial?.due_amount ?? 0) > 0;
        return (h(Fragment, { key: 'ffdb7ac66107eee7cdf6d1468ff781619932373d' }, h("ir-dialog", { key: '2a4c08c21b61ace9af39b8d28eb1c9c1114e0ffc', open: this.open, label: isEarly ? t('Lcz_EarlyCheckOut', { fallback: 'Early Check-Out' }) : t('Lcz_CheckOutLabel', { fallback: 'Check-out' }), style: { '--ir-dialog-width': isEarly ? 'min(36rem, calc(100vw - 2rem))' : 'fit-content' }, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.buttons.clear();
                this.checkoutDialogClosed.emit({ reason: 'cancel' });
            } }, this.open && (h(Fragment, { key: 'e2b78eb1d1c00cad21a07dc9d1ebb75bdeece103' }, this.isLoading === 'page' ? (h("div", { class: "dialog__loader-container" }, h("ir-spinner", null))) : (h(Fragment, null, h("div", { class: "checkout-dialog__callouts" }, this.renderDueAmountWarning({ canCollect: !isEarly }), this.renderMissingClWarning(), this.renderSameDayWarning()), this.isEarlyCheckout ? (this.renderEarlyCheckoutContent()) : (h("p", { style: { width: 'calc(31rem - var(--spacing))' } }, t('Lcz_AreYouSureCheckOutUnit', { fallback: 'Are you sure you want to check out unit %1?', params: [this.room?.unit?.name ?? ''] }))), this.buttons.has('invoice_checkout') && (h("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } }, h("wa-checkbox", { style: { marginTop: '1rem', color: 'var(--wa-color-text-quiet)', marginInlineStart: 'auto' }, value: String(this.includeInvoice), defaultChecked: this.includeInvoice, onchange: () => {
                this.includeInvoice = !this.includeInvoice;
            } }, t('Lcz_PrepareGuestInvoiceAfterCheckout', { fallback: 'Prepare guest invoice after checkout' })))))))), h("div", { key: '9d305ede1e04cddae3213c7289fde9cbab550a30', slot: "footer", class: "ir-dialog__footer" }, h(Fragment, { key: 'b3bb117d738357fe549e12934a9962052dee5b54' }, h("ir-custom-button", { key: '46944c0e2ed02117794371ffb534e3e595ccf877', size: "m", "data-dialog": "close", appearance: "filled", variant: "neutral" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '7ea23a1854ad37b3149b39dcc10147fd0e7c9875', size: "m", onClickHandler: e => this.checkoutRoom({ e, source: 'checkout' }), variant: 'brand', loading: this.isLoading === 'checkout' }, isEarly ? t('Lcz_ConfirmEarlyCheckOut', { fallback: 'Confirm early check-out' }) : t('Lcz_CheckOut', { fallback: 'Check out' }))))), hasDue && this.paymentEntries && (h("ir-payment-folio", { key: 'da7d4f44fa530d508f8a4909669b1a7e1742cf23', ref: el => (this.paymentFolioRef = el), booking: this.booking, bookingNumber: this.booking.booking_nbr, paymentEntries: this.paymentEntries, mode: 'payment-action', payment: this.duePayment }))));
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
        registerInstance(this, hostRef);
        this.clFiscalDocumentPreview = createEvent(this, "clFiscalDocumentPreview");
        this.fetchRequested = createEvent(this, "fetchRequested");
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
    columnHelper = createColumnHelper();
    cityLedgerService = new CityLedgerService();
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
                    fromDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.FROM_DATE : this.fromDate,
                    toDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.TO_DATE : this.toDate,
                    bookingNbr: row.FD_TYPE_CODE === FdTypes.Proforma ? row.BOOK_NBR : null,
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
                    fromDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.FROM_DATE : this.fromDate,
                    toDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.TO_DATE : this.toDate,
                    bookingNbr: row.FD_TYPE_CODE === FdTypes.Proforma ? row.BOOK_NBR : null,
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
                    case FdTypes.Invoice:
                        const { amount, voidType } = e.detail;
                        if (voidType === FdTypes.CreditNote) {
                            await this.cityLedgerService.voidInvoiceByCreditNote({ FD_ID: row.FD_ID });
                        }
                        else {
                            const result = await this.cityLedgerService.issueManualCLTx({
                                CL_TX_ID: -1,
                                AGENCY_ID: this.agentId,
                                SERVICE_DATE: hooks().format('YYYY-MM-DD'),
                                CL_TX_TYPE_CODE: FdTypes.AdjustmentCredit,
                                DESCRIPTION: 'Adjustment Credit',
                                DEBIT: 0,
                                BH_ID: this.booking?.system_id || null,
                                CREDIT: amount,
                                CURRENCY_ID: calendar_data?.property?.currency?.id,
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
                    case FdTypes.Receipt:
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
            case FdTypes.CreditReceipt:
                return -DEBIT;
            case FdTypes.Receipt:
                return Math.abs(value);
            default:
                return value;
        }
    }
    get columns() {
        const base = [
            this.columnHelper.accessor('FD_STATUS_CODE', {
                header: t('Lcz_Status', { fallback: 'Status' }),
                cell: info => h("ir-cl-status-tag", { transaction: info.row.original }),
            }),
            this.columnHelper.accessor('ISSUE_DATE_DISPLAY', {
                header: t('Lcz_DateLabel', { fallback: 'Date' }),
                cell: info => {
                    const row = info.row.original;
                    return (h("div", { class: "fiscal-table__date-cell" }, h("p", { class: "m-0 p-0" }, formatDate(info.getValue())), row.ISSUE_HOUR != null && row.ISSUE_MINUTE != null && h("p", { class: "fd_ss" }, _formatTime(String(row.ISSUE_HOUR), String(row.ISSUE_MINUTE)))));
                },
            }),
            this.columnHelper.accessor('DOC_NUMBER', {
                header: t('Lcz_DocNumber', { fallback: 'Doc Number' }),
                cell: info => (h("wa-button", { onClick: () => {
                        const row = info.row.original;
                        this.clFiscalDocumentPreview.emit({
                            fdTypeCode: row.FD_TYPE_CODE,
                            documentNumber: row.DOC_NUMBER,
                            agentId: this.agentId,
                            agentName: row.AGENCY_NAME,
                            fdId: row.FD_ID,
                            externalRef: row.EXTERNAL_REF,
                            fromDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.FROM_DATE : this.fromDate,
                            toDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.TO_DATE : this.toDate,
                            bookingNbr: row.FD_TYPE_CODE === FdTypes.Proforma ? row.BOOK_NBR : null,
                        });
                    }, variant: "brand", appearance: "plain", class: "fiscal-table__doc-number" }, formatBookingNumber(info.getValue()))),
            }),
            this.columnHelper.accessor('FD_TYPE_NAME', {
                id: 'type',
                header: t('Lcz_Type', { fallback: 'Type' }),
                cell: info => (h("div", null, h("p", { class: "m-0 p-0" }, info.getValue()), info.row.original.EXTERNAL_REF && (h("p", { class: "fd_ss" }, [FdTypes.CreditNote, FdTypes.CreditReceipt].includes(info.row.original.FD_TYPE_CODE)
                    ? h("span", { class: "fd_ss__connector" }, t('Lcz_For', { fallback: 'For' }))
                    : t('Lcz_VoidedByReference', { fallback: 'voided by' }), ' ', info.row.original.EXTERNAL_REF)))),
            }),
        ];
        const amountCols = this.taxableOnly
            ? [
                this.columnHelper.accessor('NET_AMOUNT', {
                    header: t('Lcz_NetAmount', { fallback: 'Net Amount' }),
                    cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
                }),
                this.columnHelper.accessor('TAX_AMOUNT', {
                    header: t('Lcz_Taxes', { fallback: 'Taxes' }),
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
                header: t('Lcz_Debit', { fallback: 'Debit' }),
                cell: info => (info.row.original.FD_TYPE_CODE === FdTypes.CreditReceipt ? '' : this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID)),
            }),
            this.columnHelper.accessor('CREDIT', {
                header: t('Lcz_Credit', { fallback: 'Credit' }),
                cell: info => this.renderMoney(this.getCredit(info), info.row.original.CURRENCY_ID),
            }),
            this.columnHelper.display({
                id: 'actions',
                header: t('Lcz_Actions', { fallback: 'Actions' }),
                cell: info => {
                    const row = info.row.original;
                    const isDraft = row.FD_TYPE_CODE === FdTypes.Draft;
                    // const isPaid = row.FD_STATUS_CODE === 'INV';
                    const isInvoice = row.FD_TYPE_CODE === FdTypes.Invoice;
                    const isReceipt = row.FD_TYPE_CODE === FdTypes.Receipt;
                    return (h("wa-dropdown", { "onwa-hide": e => {
                            e.stopImmediatePropagation();
                            e.stopPropagation();
                        }, "onwa-select": (e) => {
                            this.handleAction(e.detail.item.value, row);
                        } }, h("wa-button", { slot: "trigger", size: "s", variant: "neutral", appearance: "plain", class: "fiscal-table__action-trigger" }, h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1.2rem' } })), isDraft
                        ? [
                            h("wa-dropdown-item", { value: "preview" }, t('Lcz_Preview', { fallback: 'Preview' })),
                            h("wa-dropdown-item", { value: "convert-to-invoice" }, t('Lcz_ConvertToInvoice', { fallback: 'Convert to Invoice' })),
                            h("wa-dropdown-item", { value: "delete-draft", variant: "danger" }, t('Lcz_Delete', { fallback: 'Delete' })),
                        ]
                        : [
                            h("wa-dropdown-item", { value: "view" }, t('Lcz_ViewDocument', { fallback: 'View document' })),
                            h("wa-dropdown-item", { value: "print" }, t('Lcz_Print', { fallback: 'Print' })),
                            // <wa-dropdown-item value="download">Download PDF</wa-dropdown-item>,
                            // (!isPaid || !isInvoice) && <wa-divider></wa-divider>,
                            // !isPaid && <wa-dropdown-item value="send-reminder">Send Reminder</wa-dropdown-item>,
                            // !isPaid && isInvoice && <wa-dropdown-item value="apply-payment">Apply Payment</wa-dropdown-item>,
                            // !isPaid && <wa-dropdown-item value="mark-paid">Mark as Paid</wa-dropdown-item>,
                            // <wa-divider></wa-divider>,
                            isInvoice && info.row.original.FD_STATUS_CODE !== FdStatus.Voided && (h("wa-dropdown-item", { value: "void" }, h("span", { class: "fiscal-table__action-danger" }, t('Lcz_IssueCreditNote', { fallback: 'Issue credit note' })))),
                            isReceipt && info.row.original.FD_STATUS_CODE !== FdStatus.Voided && (h("wa-dropdown-item", { value: "void" }, h("span", { class: "fiscal-table__action-danger" }, t('Lcz_VoidWithCreditReceipt', { fallback: 'Void with credit receipt' })))),
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
            return h("span", { class: "fiscal-table__cell--zero" });
        return h("span", null, formatAmount(this.getSymbol(currencyId), value));
    }
    render() {
        if (!this.hasFetched) {
            const hasDate = !!(this.fromDate || this.toDate);
            return (h(Host, null, h("div", { class: "fiscal-table__date-prompt" }, h("div", { class: "fiscal-table__date-prompt-icon" }, h("wa-icon", { name: "calendar-days" })), h("p", { class: "fiscal-table__date-prompt-title" }, t('Lcz_SelectDateRangeToGetStarted', { fallback: 'Select a date range to get started' })), hasDate && (h("wa-animation", { iterations: 1, play: true, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { size: "s", variant: "brand", onClickHandler: () => this.fetchRequested.emit() }, h("wa-icon", { slot: "start", name: "magnifying-glass" }), t('Lcz_LoadDocuments', { fallback: 'Load Documents' })))))));
        }
        const table = useTable({
            data: this.rows,
            columns: this.columns,
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: getSortedRowModel(),
        });
        return (h(Host, null, h("div", { class: "table--container" }, h("table", { class: "table data-table" }, h("thead", null, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (h("th", { key: header.id, class: {
                'fiscal-table__heading--numeric': ['NET_AMOUNT', 'TAX_AMOUNT', 'amount', 'DEBIT', 'CREDIT'].includes(header.column.id),
                'fiscal-table__heading--actions': header.column.id === 'actions',
            } }, flexRender(header.column.columnDef.header, header.getContext())))))))), h("tbody", null, table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: { 'ir-table-row': true, '--is-draft': row.original.FD_TYPE_CODE === FdTypes.Draft } }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: {
                'fiscal-table__cell': true,
                'fiscal-table__cell--numeric': ['NET_AMOUNT', 'TAX_AMOUNT', 'amount', 'DEBIT', 'CREDIT'].includes(cell.column.id),
                'fiscal-table__cell--actions': cell.column.id === 'actions',
                'fiscal-table__cell--doc-number': cell.column.id === 'DOC_NUMBER',
            } }, flexRender(cell.column.columnDef.cell, cell.getContext()))))))), table.getRowModel().rows.length === 0 && (h("tr", null, h("td", { class: "empty-row", colSpan: this.columns.length }, this.isLoading ? h("ir-spinner", null) : t('Lcz_NoFiscalDocumentsMatchFilters', { fallback: 'No fiscal documents match the current filters.' }))))))), h("ir-fd-confirm-dialog", { amount: this.pendingAction?.row?.TOTAL_AMOUNT, fdType: this.pendingAction?.row?.FD_TYPE_CODE, open: this.pendingAction !== null, action: this.pendingAction?.action ?? null, docNumber: this.pendingAction?.row.DOC_NUMBER ?? t('Lcz_ThisDocumentFallback', { fallback: 'this document' }), isConfirming: this.isConfirming, onConfirmed: e => this.confirmPendingAction(e), onCancelled: () => (this.pendingAction = null) })));
    }
};
IrCityLedgerFiscalDocumentsTable.style = irCityLedgerFiscalDocumentsTableCss();

const irCityLedgerTransactionDrawerCss = () => `.sc-ir-city-ledger-transaction-drawer-h{display:block}.city-ledger-transaction-drawer__footer.sc-ir-city-ledger-transaction-drawer{display:flex;gap:0.75rem}.city-ledger-transaction-drawer__btn.sc-ir-city-ledger-transaction-drawer{flex:1 1 0}`;

const IrCityLedgerTransactionDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeDrawer = createEvent(this, "closeDrawer");
        this.transactionSaved = createEvent(this, "transactionSaved");
    }
    open = false;
    formId = 'city-ledger-transaction-form';
    drawerLabel = t('Lcz_NewEntryTitle', { fallback: 'New Entry' });
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
        return (h("ir-drawer", { key: '74c69c5559665ba5c6b44dccfae0b0bbcf893b12', open: this.open, style: {
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
            } }, this.open && (h("ir-city-ledger-transaction-form", { key: 'f5e28d1acc8a6f8110c3e51f1bdb12adca034837', booking: this.booking, formId: this.formId, agent: this.agent, initialTransactionType: this.initialTransactionType, unpaidInvoiceOptions: this.unpaidInvoiceOptions, bookingOptions: this.bookingOptions, serviceCategoryOptions: this.serviceCategoryOptions, transaction: this.transaction, onTransactionSaved: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.transactionSaved.emit();
                this.closeDrawer.emit();
            }, onSubmitDisabledChange: (e) => {
                this.saveDisabled = e.detail;
            } })), h("div", { key: 'c1d822fea25234c405a7bf87e3daacb1b6cacd43', slot: "footer", class: 'ir__drawer-footer' }, h("ir-custom-button", { key: 'c84c54af08312e4cf0ab5b872a2dc1db1ebeac77', appearance: "filled", size: "m", variant: "neutral", class: "city-ledger-transaction-drawer__btn", onClickHandler: () => this.closeDrawer.emit() }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '4bb22d79f527ff65f8453d4ef214bd9e6ef47096', form: this.formId, size: "m", type: "submit", variant: "brand", class: "city-ledger-transaction-drawer__btn", disabled: this.saveDisabled }, t('Lcz_Save', { fallback: 'Save' })))));
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
        const { groups, types } = objectType({
            types: SetupEntrySchema.array().min(1),
            groups: SetupEntrySchema.array().min(1),
            methods: SetupEntrySchema.array().min(1),
        })
            .parse(paymentEntries);
        const items = [...types];
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
        registerInstance(this, hostRef);
        this.transactionSaved = createEvent(this, "transactionSaved");
        this.transactionValidationFailed = createEvent(this, "transactionValidationFailed");
        this.submitDisabledChange = createEvent(this, "submitDisabledChange");
        this.clFiscalDocumentPreview = createEvent(this, "clFiscalDocumentPreview");
    }
    formId = 'city-ledger-transaction-form';
    agent = null;
    initialTransactionType = ClTxTypeCode.Payment;
    unpaidInvoiceOptions = [];
    bookingOptions = [];
    serviceCategoryOptions = [];
    language = 'en';
    booking = null;
    transaction = null;
    formData = createInitialTransactionFormDraft();
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
    setupService = new SetupService();
    cityLedgerService = new CityLedgerService();
    clTxTypes;
    get resolvedInitialType() {
        return ClTxTypeCode.Payment;
    }
    getUniqueTaxValues() {
        let taxes = new Set();
        calendar_data?.property.tax_categories?.forEach(t => {
            if (t.taxation_mode.code === VatIncludedCodes.Inclusive)
                taxes.add(t.pct);
        });
        this.taxOptions = Array.from(taxes).map(t => ({ id: t.toString(), label: `${t}%` }));
    }
    componentWillLoad() {
        this.formData = this.transaction ? hydrateFormDraftFromTx(this.transaction) : createInitialTransactionFormDraft(this.resolvedInitialType);
        this.fetchPaymentEntries();
        this.getUniqueTaxValues();
    }
    handleTransactionChange(newTx) {
        this.formData = newTx ? hydrateFormDraftFromTx(newTx) : createInitialTransactionFormDraft(this.resolvedInitialType);
    }
    handleInitialTransactionTypeChange(_newType) {
        if (!this.transaction) {
            this.formData = resetDraftForTransactionType(this.resolvedInitialType, this.formData);
        }
    }
    updateFormData(patch) {
        this.formData = { ...this.formData, ...patch };
    }
    get isSubmitDisabled() {
        return this.formData.transactionType === ClTxTypeCode.DebitNote && !this.isLoading && this.fiscalDocuments.length === 0;
    }
    handleTransactionTypeChange(nextType) {
        this.formData = resetDraftForTransactionType(nextType, this.formData);
        if (nextType === ClTxTypeCode.Payment || nextType === ClTxTypeCode.CreditNote || nextType === ClTxTypeCode.DebitNote) {
            this.fetchFiscalDocumentsForType(nextType);
        }
        else {
            this.submitDisabledChange.emit(false);
        }
    }
    async fetchFiscalDocumentsForType(type) {
        try {
            this.isLoading = true;
            const LIST_FD_TYPE_CODE = [FdTypes.Invoice];
            if (type === ClTxTypeCode.Payment) {
                LIST_FD_TYPE_CODE.push(FdTypes.DebitNote);
            }
            this.fiscalDocuments = await this.cityLedgerService.getFiscalDocuments({
                AGENCY_ID: this.agent?.id,
                START_DATE: null,
                END_DATE: null,
                LIST_FD_TYPE_CODE,
                BOOK_NBR: this.booking?.booking_nbr,
                LIST_FD_STATUS_CODE: type === ClTxTypeCode.Payment ? [FdStatus.Sent, FdStatus.Issued] : [FdStatus.Paid, FdStatus.Issued],
            });
            if (type === ClTxTypeCode.CreditNote && this.fiscalDocuments.length === 0 && this.formData.creditNoteMode === 'cancel-invoice') {
                this.updateFormData({ creditNoteMode: 'goodwill', invoiceId: undefined });
            }
            if (type === ClTxTypeCode.Payment && this.fiscalDocuments.length === 0) {
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
            const { pay_type, pay_type_group, pay_method, cl_tx_type } = groupEntryTablesResult(setupEntries);
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
            case ClTxTypeCode.OpeningBalance:
            case ClTxTypeCode.Adjustment:
                if (payload.entryType === 'CR')
                    credit = amount;
                else
                    debit = amount;
                break;
            case ClTxTypeCode.Payment:
            case ClTxTypeCode.CreditNote:
            case ClTxTypeCode.Discount:
                credit = amount;
                break;
            case ClTxTypeCode.StandardChargeDebit:
            case ClTxTypeCode.DebitNote:
            case ClTxTypeCode.CancellationPenalty:
                debit = amount;
                break;
        }
        if (payload.transactionType === ClTxTypeCode.Payment) {
            payMethodCode = payload.payment_method?.code ?? '';
        }
        const noTaxTransaction = payload.transactionType === ClTxTypeCode.OpeningBalance || payload.transactionType === ClTxTypeCode.Payment;
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
            CURRENCY_ID: calendar_data?.property?.currency?.id,
            PAY_METHOD_CODE: payMethodCode,
            EXTERNAL_REF: payload.reference ?? '',
            BH_ID: this.booking?.system_id ?? null,
            VAT_INCLUDED_CODE: (noTaxTransaction ? '' : hasVat ? '001' : '002'),
            VAT_PCT: noTaxTransaction ? null : hasVat ? Number(payload.taxId) : 0,
        };
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const validation = validateCityLedgerTransaction(this.formData);
        if (!validation.success) {
            this.transactionValidationFailed.emit(validation.error.issues);
            return;
        }
        try {
            this.isSubmitting = true;
            if (validation.data.transactionType === ClTxTypeCode.CreditNote) {
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
        return (h("div", { class: "transaction-form__field" }, h("ir-validator", { schema: transactionTypeFieldSchema, value: this.formData.transactionType, valueEvent: "change" }, h("wa-select", { label: t('Lcz_TransactionType', { fallback: 'Transaction Type' }), size: "s", defaultValue: this.formData.transactionType, value: this.formData.transactionType, required: true, disabled: this.transaction !== null, onchange: event => {
                const value = event.target.value;
                this.handleTransactionTypeChange(value);
            } }, this.clTxTypes.map(type => {
            const rate = TRANSACTION_TYPE_RATES[type.CODE_NAME];
            const label = getSetupEntryLabel(type);
            if (ClTxTypeCode.DebitNote === type.CODE_NAME ||
                ClTxTypeCode.AdjustmentCredit === type.CODE_NAME ||
                (type.CODE_NAME === ClTxTypeCode.OpeningBalance && (this.agent.has_opening_balance || this.booking !== null))) {
                return null;
            }
            if ([ClTxTypeCode.Discount, ClTxTypeCode.CancellationPenalty].includes(type.CODE_NAME) &&
                !this.booking &&
                this.transaction?.CL_TX_TYPE_CODE !== type.CODE_NAME) {
                return null;
            }
            return (h("wa-option", { key: type.CODE_NAME, value: type.CODE_NAME, label: label }, h("div", { class: "tx-option" }, h("span", { class: "tx-option__label" }, label), h("span", { class: "tx-option__badges" }, (rate === 'CR' || rate === 'CR|DB') && h("wa-badge", { variant: "success" }, t('Lcz_Credit', { fallback: 'Credit' })), (rate === 'DB' || rate === 'CR|DB') && h("wa-badge", { variant: "danger" }, t('Lcz_Debit', { fallback: 'Debit' }))))));
        })))));
    }
    renderCommonFields(withTaxes = true) {
        const minAllowedDate = hooks().subtract(12, 'months').format(DATE_INPUT_FORMAT);
        return (h(Fragment, null, this.renderTransactionTypeField(), h("div", { class: "transaction-form__field" }, h("ir-validator", { schema: dateFieldSchema, value: this.formData.date, valueEvent: "DateChanged" }, h("ir-date-select", { label: t('Lcz_DateLabel', { fallback: 'Date' }), date: this.formData.date, minDate: minAllowedDate, maxDate: hooks().format('YYYY-MM-DD'), emitEmptyDate: true, onDateChanged: event => {
                this.updateFormData({
                    date: event.detail.start ? event.detail.start.format(DATE_INPUT_FORMAT) : '',
                });
            } }))), this.formData.transactionType !== ClTxTypeCode.CreditNote && (h(Fragment, null, withTaxes ? (h("div", { class: "amount-tax-group" }, h("span", { class: "amount-tax-group__label" }, t('Lcz_AmountIncludingTaxes', { fallback: 'Amount (including taxes)' })), h("div", { class: "amount-tax-group__row" }, h("ir-validator", { class: "amount-tax-group__amount", schema: amountFieldSchema, value: this.formData.amount, valueEvent: "text-change input-change" }, h("ir-input", { label: t('Lcz_AmountIncludingTaxes', { fallback: 'Amount (including taxes)' }), mask: "price", value: this.formData.amount, "onText-change": (event) => {
                this.updateFormData({ amount: event.detail ?? '' });
            } }, h("span", { slot: "start" }, calendar_data.property?.currency?.symbol))), h("ir-validator", { schema: taxIdFieldSchema, value: this.formData.taxId, valueEvent: "change" }, h("wa-select", { size: "s", placeholder: t('Lcz_TaxPlaceholder', { fallback: 'Tax' }), value: this.formData.taxId, defaultValue: this.formData.taxId, onchange: event => {
                this.updateFormData({ taxId: event.target.value });
            } }, this.taxOptions
            .filter(tx => tx.id !== ClTxTypeCode.DebitNote)
            .map(tax => (h("wa-option", { key: tax.id, label: tax.label, value: tax.id }, tax.label))), h("wa-option", { value: "N/A", label: t('Lcz_NotApplicable', { fallback: 'Not Applicable' }) }, t('Lcz_NotApplicable', { fallback: 'Not Applicable' }))))))) : (h("div", { class: "transaction-form__field" }, h("ir-validator", { schema: amountFieldSchema, value: this.formData.amount, valueEvent: "text-change input-change" }, h("ir-input", { label: t('Lcz_Amount', { fallback: 'Amount' }), mask: "price", value: this.formData.amount, required: true, "onText-change": (event) => {
                this.updateFormData({ amount: event.detail ?? '' });
            } }, h("span", { slot: "start" }, calendar_data.property?.currency?.symbol)))))))));
    }
    renderTypeFields() {
        const onFieldChange = (e) => this.updateFormData(e.detail);
        switch (this.formData.transactionType) {
            case ClTxTypeCode.OpeningBalance:
                return h("ir-cl-opening-balance-fields", { entryType: this.formData.entryType, onFieldChange: onFieldChange });
            case ClTxTypeCode.Payment:
                return (h("ir-cl-payment-fields", { paymentMethodCode: this.formData.payment_method?.code ?? '', isOnAccount: this.formData.onAccount, invoiceId: this.formData.invoiceId, paymentMethods: this.paymentEntries?.methods ?? [], unpaidInvoiceOptions: this.unpaidInvoiceOptions, noInvoices: this.fiscalDocuments.length === 0, language: this.language, onFieldChange: onFieldChange }));
            case ClTxTypeCode.Adjustment:
                return (h("ir-cl-adjustment-fields", { entryType: this.formData.entryType, linkType: this.formData.linkType, linkedId: this.formData.linkedId, bookingOptions: this.bookingOptions, unpaidInvoiceOptions: this.unpaidInvoiceOptions, onFieldChange: onFieldChange }));
            case ClTxTypeCode.CreditNote:
                return (h("ir-cl-credit-note-fields", { creditNoteMode: this.formData.creditNoteMode, invoiceId: this.formData.invoiceId, fiscalDocuments: this.fiscalDocuments, isFetchingFiscalDocs: this.isLoading, onFieldChange: onFieldChange }));
            case ClTxTypeCode.DebitNote:
                return h("ir-cl-debit-note-fields", { invoiceId: this.formData.invoiceId, fiscalDocuments: this.fiscalDocuments, onFieldChange: onFieldChange });
            default:
                return null;
        }
    }
    render() {
        if (this.isLoading) {
            return (h("div", { class: "dialog__loader-container" }, h("ir-spinner", null)));
        }
        if (this.isSubmitDisabled) {
            return (h("form", { id: this.formId, class: "transaction-form", onSubmit: this.handleSubmit, novalidate: true }, this.renderTransactionTypeField(), this.renderTypeFields()));
        }
        return (h("form", { id: this.formId, class: "transaction-form", onSubmit: this.handleSubmit, novalidate: true }, this.renderCommonFields(this.formData.transactionType !== ClTxTypeCode.OpeningBalance &&
            ![ClTxTypeCode.Payment, ClTxTypeCode.Discount, ClTxTypeCode.CancellationPenalty].includes(this.formData.transactionType)), this.renderTypeFields(), this.formData.transactionType !== ClTxTypeCode.CreditNote && (h("ir-input", { label: t('Lcz_Reference', { fallback: 'Reference' }), value: this.formData.reference, defaultValue: this.formData.reference, "onText-change": (event) => {
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
        registerInstance(this, hostRef);
        this.fieldChange = createEvent(this, "fieldChange");
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
        return (h(Fragment, { key: 'cee9ba57f11a9ff20439d42b438feca8d7207df4' }, h("div", { key: '4949b0ee450fedec8f399676ad001dba1ba8806f', class: "field field--full-width" }, h("ir-validator", { key: 'a0317bd732bc185ff98e80f0f9e60aae1331b03d', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, h("wa-radio-group", { key: 'd5ea61783f22b228fea08fed75c7a1516def743f', label: t('Lcz_EntryType', { fallback: 'Entry Type' }), orientation: "horizontal", size: "s", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, h("wa-radio", { key: '6258fcd547b3c87ed9ab6e2187abfedf6b1f329e', value: "CR", appearance: "button", class: "entry-type --credit" }, t('Lcz_Credit', { fallback: 'Credit' })), h("wa-radio", { key: '5726b676bccc41c602ccf9d81577614e8031db6b', value: "DB", appearance: "button", class: "entry-type --debit" }, t('Lcz_Debit', { fallback: 'Debit' })))))));
    }
};
IrClAdjustmentFields.style = irClAdjustmentFieldsCss();

const irClCreditNoteFieldsCss = () => `.sc-ir-cl-credit-note-fields-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-credit-note-fields{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-credit-note-fields,.field--full-width.sc-ir-cl-credit-note-fields wa-radio-group.sc-ir-cl-credit-note-fields{width:100%}.field--full-width.sc-ir-cl-credit-note-fields wa-radio-group.sc-ir-cl-credit-note-fields wa-radio.sc-ir-cl-credit-note-fields{flex:1}.entry-type.--credit.sc-ir-cl-credit-note-fields:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-credit-note-fields:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}`;

const IrClCreditNoteFields = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fieldChange = createEvent(this, "fieldChange");
    }
    creditNoteMode = 'cancel-invoice';
    invoiceId;
    fiscalDocuments = [];
    isFetchingFiscalDocs = false;
    fieldChange;
    render() {
        // const noInvoices = this.fiscalDocuments.length === 0;
        return (h(Fragment, { key: '06eb7fc12631f655eb442b70de16803f197dec98' }, this.creditNoteMode === 'cancel-invoice' && (h("div", { key: '437345b92d2cb0b231b4bc1e457310ddbd9784d7', class: "field" }, h("ir-cl-invoice-select", { key: 'd3adee547ef2ce02878790d2a873f10b7a25a9ab', value: this.invoiceId ?? '', fiscalDocuments: this.fiscalDocuments, label: t('Lcz_DocumentTypeInvoice', { fallback: 'Invoice' }), onInvoiceChange: event => {
                this.fieldChange.emit({ invoiceId: event.detail || undefined });
            }, hint: t('Lcz_IssueCreditNoteVoidHint', { fallback: 'Issuing this credit note will void the selected invoice and unlock all associated line items.' }) })))));
    }
};
IrClCreditNoteFields.style = irClCreditNoteFieldsCss();

const irClDebitNoteFieldsCss = () => `.sc-ir-cl-debit-note-fields-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-debit-note-fields{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-debit-note-fields,.field--full-width.sc-ir-cl-debit-note-fields wa-radio-group.sc-ir-cl-debit-note-fields{width:100%}.field--full-width.sc-ir-cl-debit-note-fields wa-radio-group.sc-ir-cl-debit-note-fields wa-radio.sc-ir-cl-debit-note-fields{flex:1}.entry-type.--credit.sc-ir-cl-debit-note-fields:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-debit-note-fields:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}`;

const IrClDebitNoteFields = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fieldChange = createEvent(this, "fieldChange");
    }
    invoiceId;
    fiscalDocuments = [];
    fieldChange;
    render() {
        if (this.fiscalDocuments.length === 0) {
            return (h("wa-callout", { size: "s", variant: "warning" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), t('Lcz_NoPaidInvoicesWarning', {
                fallback: 'No paid invoices are available. A debit note requires at least one paid invoice to reference. Please issue an invoice first, then return to create the debit note.',
            })));
        }
        return (h("div", { class: "field" }, h("ir-cl-invoice-select", { value: this.invoiceId ?? '', fiscalDocuments: this.fiscalDocuments, label: t('Lcz_DocumentTypeInvoice', { fallback: 'Invoice' }), onInvoiceChange: event => {
                this.fieldChange.emit({ invoiceId: event.detail || undefined });
            } })));
    }
};
IrClDebitNoteFields.style = irClDebitNoteFieldsCss();

const irClInvoiceDialogCss = () => `.sc-ir-cl-invoice-dialog-h{display:contents}.create-invoice-dialog__body.sc-ir-cl-invoice-dialog{display:flex;flex-direction:column;gap:0.75rem}.cl-invoice-dialog__header-actions.sc-ir-cl-invoice-dialog{display:flex;align-items:center}.create-invoice-dialog__no-results.sc-ir-cl-invoice-dialog{margin:0}.create-invoice-dialog__error.sc-ir-cl-invoice-dialog{margin:0;font-size:0.8125rem;color:var(--wa-color-danger-500, #ef4444)}.create-invoice-dialog__footer.sc-ir-cl-invoice-dialog{display:flex;justify-content:flex-end;gap:0.5rem}`;

const IrClInvoiceDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.invoiceIssued = createEvent(this, "invoiceIssued");
        this.fiscalDocumentIssued = createEvent(this, "fiscalDocumentIssued");
        this.clFiscalDocumentPreview = createEvent(this, "clFiscalDocumentPreview");
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
        const today = hooks();
        const bookingToDate = hooks(this.booking.to_date, 'YYYY-MM-DD');
        if (today.isSameOrBefore(bookingToDate, 'date') && this.booking.rooms.some(r => r.in_out?.code === InOut.CheckedIn))
            return false;
        if (today.isSame(bookingToDate, 'date') && this.booking.rooms.every(r => r.in_out?.code === InOut.NotSet))
            return true;
        if (today.isAfter(bookingToDate, 'date'))
            return true;
        return this.booking.rooms.every(r => r.in_out?.code === InOut.CheckedOut);
    }
    invoiceIssued;
    fiscalDocumentIssued;
    clFiscalDocumentPreview;
    dialogRef;
    formRef;
    invoicedClTxTypeCode = new Set([ClTxTypeCode.Adjustment, ClTxTypeCode.CancellationPenalty, ClTxTypeCode.Discount, ClTxTypeCode.StandardChargeDebit]);
    cityLedgerService = new CityLedgerService();
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
                    FD_TYPE_CODE: FdTypes.Draft,
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
                    CURRENCY_ID: calendar_data?.property?.currency?.id,
                    START_DATE: fromDate,
                    END_DATE: toDate,
                    LIST_CL_TX_ID: listClTxIds,
                    FD_TYPE_CODE: FdTypes.Draft,
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
            this.error = err instanceof Error ? err.message : t('Lcz_FailedToIssueInvoice', { fallback: 'Failed to issue invoice.' });
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
                    fdTypeCode: FdTypes.Proforma,
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
            this.error = err instanceof Error ? err.message : t('Lcz_FailedToGenerateProforma', { fallback: 'Failed to generate proforma.' });
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        const units = this.booking ? this.booking?.rooms.filter(r => r.agent && r.in_out?.code !== InOut.CheckedOut).map(r => r.unit.name) : null;
        return (h(Host, { key: '57b400fbacc85df45a6940fd238ddf3d3b7f2ac4' }, h("ir-dialog", { key: 'f1a7db4f549f73109e9a80457084491671aed50d', label: t('Lcz_CreateInvoice', { fallback: 'Create Invoice' }), ref: el => (this.dialogRef = el) }, this.booking && (h("div", { key: '3f03e69563d05b8525fb072c11374af0116e9bd4', slot: "header-actions", class: 'cl-invoice-dialog__header-actions' }, h("wa-switch", { key: 'a224eef7193826af60adc5ff38f3bdb674656498', checked: this.isProforma, disabled: this.mode === 'booking' && !this.allRoomsCheckedOut, onchange: e => (this.isProforma = e.target.checked) }, t('Lcz_Proforma', { fallback: 'Proforma' })))), h("div", { key: '09b88dc121e3ec5c74c23311bf76e79fddd34fb3', class: "create-invoice-dialog__body" }, this.mode === 'booking' ? (!this.allRoomsCheckedOut ? (h("wa-callout", { size: "s", variant: "warning" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), t('Lcz_ProformaOnlyInHouseWarning', {
            fallback: 'Only a proforma invoice can be generated at this time because %1 is/are still in-house.',
            params: [`${units?.length > 1 ? t('Lcz_UnitsLowercase', { fallback: 'units' }) : t('Lcz_UnitLowercase', { fallback: 'unit' })} ${units?.join(', ')}`],
        }))) : (h("p", { class: "create-invoice-dialog__message" }, this.isProforma
            ? t('Lcz_GenerateProformaConfirm', { fallback: 'Generate a proforma for Booking #%1?', params: [formatBookingNumber(this.booking?.booking_nbr)] })
            : t('Lcz_IssueDraftInvoiceConfirm', {
                fallback: 'Issue a draft invoice for Booking #%1 to the agent?',
                params: [formatBookingNumber(this.booking?.booking_nbr)],
            })))) : (h("ir-cl-invoice-form", { ref: el => (this.formRef = el) })), this.noResults && (h("wa-callout", { key: 'a9e397866acbe43ade8d0d8eb5cae4754d46e3b8', variant: "warning", class: "create-invoice-dialog__no-results" }, h("wa-icon", { key: 'b75d3f955c4d3baca3c0cf269348a129e4883b48', slot: "icon", name: "triangle-exclamation" }), t('Lcz_NoTransactionsFoundForPeriod', { fallback: 'No transactions found for the selected period and filters.' }))), this.error && h("p", { key: 'b756aaa5ce61648caac3f87392518fc01f346558', class: "create-invoice-dialog__error" }, this.error)), h("div", { key: '27359dffe8e0283082987bc22afe16b916a3e462', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'eb3e1b4d7f3638ec9a2d93f7406cf9e404db7779', size: "m", appearance: "filled", variant: "neutral", "data-dialog": "close", disabled: this.isLoading }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '49003fa2eeeb333714a284d0f7300d8ac70e2481', size: "m", appearance: "accent", variant: "brand", loading: this.isLoading, onClickHandler: () => this.handleSubmit() }, this.isProforma ? t('Lcz_Confirm', { fallback: 'Confirm' }) : t('Lcz_ShowDraft', { fallback: 'Show draft' }))))));
    }
};
IrClInvoiceDialog.style = irClInvoiceDialogCss();

const irClInvoiceFormCss = () => `.sc-ir-cl-invoice-form-h{display:flex;flex-direction:column;gap:1.25rem}.invoice-form__scope-banner.sc-ir-cl-invoice-form{display:flex;align-items:flex-start;gap:0.625rem;padding:0.75rem 1rem;background:var(--wa-color-primary-50, #eff6ff);border:1px solid var(--wa-color-primary-200, #bfdbfe);border-inline-start:3px solid var(--wa-color-primary-500, #3b82f6);border-radius:0.375rem}.invoice-form__scope-icon.sc-ir-cl-invoice-form{flex-shrink:0;margin-top:1px;color:var(--wa-color-primary-500, #3b82f6)}.invoice-form__scope-text.sc-ir-cl-invoice-form{display:flex;flex-direction:column;gap:0.125rem}.invoice-form__scope-label.sc-ir-cl-invoice-form{font-size:0.8125rem;font-weight:600;color:var(--wa-color-primary-700, #1d4ed8);letter-spacing:0.01em}.invoice-form__scope-desc.sc-ir-cl-invoice-form{font-size:0.75rem;color:var(--wa-color-primary-600, #2563eb);line-height:1.4}.invoice-form__date-error.sc-ir-cl-invoice-form ir-date-range-filter.sc-ir-cl-invoice-form{border:1px solid var(--wa-color-danger-500, #ef4444);border-radius:0.375rem}.invoice-form__date-error-msg.sc-ir-cl-invoice-form{margin:0;font-size:0.75rem;color:var(--wa-color-danger-600, #dc2626)}.invoice-form__field.sc-ir-cl-invoice-form{display:flex;flex-direction:column;gap:0.375rem}.invoice-form__label.sc-ir-cl-invoice-form{margin:0;font-size:0.8125rem;font-weight:500;color:var(--wa-color-text-normal, #374151)}.invoice-form__label-optional.sc-ir-cl-invoice-form{font-weight:400;color:var(--wa-color-text-quiet, #9ca3af)}.invoice-form__hint.sc-ir-cl-invoice-form{margin:0;font-size:0.75rem;color:var(--wa-color-text-quiet, #9ca3af);line-height:1.4}`;

const IrClInvoiceForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'a3087ebc279ae4a9e8fa6ddabd61fae28e75f420' }, h("wa-callout", { key: '9a2caef888efcbe5b9b45008ed89a3028878c0fa' }, h("wa-icon", { key: '9be605df408b47908c8eaafac0428e3730167cd4', slot: "icon", name: "circle-info" }), h("div", { key: 'f250ade46bf8d86dac721f03925324d9dd9cdb08', class: "invoice-form__scope-text" }, h("span", { key: '9b9cd6827045fd3be198e5af865a32044e3cddd3', class: "invoice-form__scope-label" }, t('Lcz_UnbilledFolioEntries', { fallback: 'Unbilled Folio Entries' })), h("span", { key: '028c62fd0f1f2b79de557ab15866bb90843bca6c', class: "invoice-form__scope-desc" }, t('Lcz_UnbilledFolioEntriesDesc', { fallback: 'Including all services from bookings, manual charges, adjustments and discounts.' })))), h("div", { key: 'd43ac30bac3bad7159eb2f80b3b74d2f72b846c1', class: `invoice-form__field${this.dateError ? ' invoice-form__date-error' : ''}` }, h("ir-date-range-filter", { key: '97ec1721500b9889cdcab74cd5b61c944f95413f', selectionMode: "auto", showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate, toDate: this.toDate, maxDate: hooks().format('YYYY-MM-DD'), onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: 'fc749c414ce1dafdf6a6eea470bb7f8458100f04', class: "invoice-form__field" }, h("wa-checkbox", { key: 'f811857aa6e6e566fb241f52b71a80129dffeaee', checked: this.scope === 'UNBILLED_CHECKED_OUT', defaultChecked: this.scope === 'UNBILLED_CHECKED_OUT', onchange: e => {
                this.scope = e.target.checked ? 'UNBILLED_CHECKED_OUT' : 'UNBILLED';
            } }, t('Lcz_IncludeCheckedOutOnly', { fallback: 'Include checked-out bookings only' })))));
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
        registerInstance(this, hostRef);
        this.fieldChange = createEvent(this, "fieldChange");
    }
    entryType = '';
    fieldChange;
    render() {
        return (h("div", { key: '65807a338c2bc6819bab4809444843df013b8d63', class: "field field--full-width" }, h("ir-validator", { key: '66ad426d759ef728706741684c651ce810a413fb', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, h("wa-radio-group", { key: 'd5ab2e87986c15d26a58117225ef3988e11d88a8', label: t('Lcz_EntryType', { fallback: 'Entry Type' }), orientation: "horizontal", size: "s", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, h("wa-radio", { key: '09e3763136453d2bc53f5f107b9565d6786d74b7', value: "CR", appearance: "button", class: "entry-type --credit" }, t('Lcz_Credit', { fallback: 'Credit' })), h("wa-radio", { key: 'fc35a4404bbdf770633885beea54439a83d24d8a', value: "DB", appearance: "button", class: "entry-type --debit" }, t('Lcz_Debit', { fallback: 'Debit' }))))));
    }
};
IrClOpeningBalanceFields.style = irClOpeningBalanceFieldsCss();

const irClPaymentFieldsCss = () => `.sc-ir-cl-payment-fields-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-payment-fields{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-payment-fields,.field--full-width.sc-ir-cl-payment-fields wa-radio-group.sc-ir-cl-payment-fields{width:100%}.field--full-width.sc-ir-cl-payment-fields wa-radio-group.sc-ir-cl-payment-fields wa-radio.sc-ir-cl-payment-fields{flex:1}.entry-type.--credit.sc-ir-cl-payment-fields:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-payment-fields:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.payment-section.sc-ir-cl-payment-fields{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.payment-section.sc-ir-cl-payment-fields wa-radio-group.sc-ir-cl-payment-fields{width:100%}.payment-section.sc-ir-cl-payment-fields wa-radio-group.sc-ir-cl-payment-fields wa-radio.sc-ir-cl-payment-fields{flex:1}.invoice-select.sc-ir-cl-payment-fields{animation:slide-in 0.18s ease}`;

const IrClPaymentFields = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fieldChange = createEvent(this, "fieldChange");
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
        return (h(Fragment, { key: 'cadbe3ca6086be31bb5a898e71885f4db8c7920e' }, h("div", { key: '2e85d8d457005088d012800cf00fa8214adef27e', class: "payment-section" }, h("div", { key: 'dc7c6094d5af7ff394e1d717c94e29ee12115a0d', class: "field" }, h("ir-validator", { key: '87e86a1600a3062d27108a2f5adb3f088ec73007', schema: paymentMethodCodeFieldSchema, value: this.paymentMethodCode, valueEvent: "change" }, h("wa-select", { key: '4f4ea9f38567868c364d14e1e5b86ccdb1e4e81d', size: "s", label: t('Lcz_PaymentMethod', { fallback: 'Payment Method' }), placeholder: t('Lcz_SelectMethodPlaceholder', { fallback: 'Select method…' }), value: this.paymentMethodCode, "onwa-show": e => this.stopPropagation(e), "onwa-hide": e => this.stopPropagation(e), onchange: e => {
                this.stopPropagation(e);
                this.handlePaymentMethodChange(e.target.value);
            } }, h("wa-option", { key: '558168720d71efa4841f6ac05ea9e9b156867e1c', value: "" }, t('Lcz_SelectMethodPlaceholder', { fallback: 'Select method…' })), this.paymentMethods.map(method => (h("wa-option", { key: method.CODE_NAME, label: getSetupEntryLabel(method), value: method.CODE_NAME }, getSetupEntryLabel(method))))))))));
    }
};
IrClPaymentFields.style = irClPaymentFieldsCss();

const irDepartureTimeDialogCss = () => `.sc-ir-departure-time-dialog-h{display:block}.ir-time-dialog__current-unit.sc-ir-departure-time-dialog{display:flex;align-items:center;gap:var(--wa-space-xs)}.ir-time-dialog__insight.sc-ir-departure-time-dialog{padding:0.75rem 0.875rem;border-radius:0.75rem;background:var(--wa-color-brand-fill-quiet);border:1px solid var(--wa-color-brand-border-quiet);display:flex;flex-direction:column;gap:0.75rem}.ir-time-dialog__body.sc-ir-departure-time-dialog{display:flex;flex-direction:column;gap:var(--wa-space-m)}.ir-time-dialog__insight-row.sc-ir-departure-time-dialog{display:flex;align-items:flex-start;gap:0.625rem}.ir-time-dialog__insight-icon.sc-ir-departure-time-dialog{flex:0 0 auto;margin-top:0.15rem;font-size:0.9rem;color:var(--wa-color-brand-on-quiet)}.ir-time-dialog__insight-copy.sc-ir-departure-time-dialog{flex:1 1 auto;min-width:0}.ir-time-dialog__insight-title.sc-ir-departure-time-dialog{margin:0;font-size:0.8125rem;font-weight:600;letter-spacing:-0.01em;color:var(--wa-color-text-normal)}.ir-time-dialog__insight-subtitle.sc-ir-departure-time-dialog{margin:0.125rem 0 0;font-size:0.75rem;line-height:1.4;color:var(--wa-color-text-quiet)}.ir-time-dialog__insight-row.sc-ir-departure-time-dialog wa-switch.sc-ir-departure-time-dialog{flex:0 0 auto;margin-top:0.1rem}`;

/** Service category code for a late-checkout extra service charge. */
const LATE_CHECKOUT_CATEGORY_CODE = 'LCO';
const IrDepartureTimeDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.departureTimeClose = createEvent(this, "departureTimeClose");
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
    bookingService = new BookingService();
    dialogRef;
    closedBySave = false;
    handleOpenChange(next) {
        if (next) {
            this.selectedValue = this.room?.departure_time?.code ?? null;
            const existing = this.existingLateCheckoutService;
            this.extraServicePrice = existing ? existing.price : Number(getExtraServiceDefaultPrice('LCO'));
        }
    }
    /** The room's already-persisted late-checkout extra service charge, if any — its price becomes the field's default instead of the property's generic default. */
    get existingLateCheckoutService() {
        return (this.booking?.extra_services ?? []).find(service => service.room_identifier === this.room?.identifier && service.category?.code === LATE_CHECKOUT_CATEGORY_CODE);
    }
    /** Whether a departure-time option (e.g. "14:00") falls after the property's standard checkout time, in hotel-local time. */
    isLateCheckout(entry) {
        const match = entry.CODE_VALUE_EN?.match(/^(\d{1,2}):(\d{2})$/);
        const checkoutHours = calendar_data.checkin_checkout_hours;
        if (!match || !checkoutHours)
            return false;
        const [, hour, minute] = match;
        const optionTime = createDateWithOffsetAndHour(checkoutHours.offset, Number(hour), Number(minute));
        const checkoutTime = createDateWithOffsetAndHour(checkoutHours.offset, checkoutHours.hour, checkoutHours.minute);
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
        return (h("ir-dialog", { key: '8f2adca278e25147e62be74cde376bb575ab1265', open: this.open, label: t('Lcz_ExpectedDepartureTimeDialogTitle', { fallback: 'Expected Departure Time' }), ref: el => (this.dialogRef = el), onIrDialogHide: e => {
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
            } }, h("div", { key: '2468fce1db20b348209a58218237188ba1d91076', class: "ir-time-dialog__body" }, h("div", { key: '0712056e4318bb4fb322cb7ae602cdf9be50a085', class: 'ir-time-dialog__current-unit' }, h("span", { key: '2edc2a8acc35f645058d219a6546998e8340472a' }, this.room?.roomtype?.name), " ", h("span", { key: '301a4a2d5cd085b57bc4375d43f5e4c987741d5b' }, this.room?.rateplan?.short_name), " ", h("ir-unit-tag", { key: '73ef3e28d9518acad12c31cd4eafc333c87e4b29', unit: this.room?.unit?.name })), h("wa-select", { key: '6c72a549d02c73c8ffd77813088a1a6829974d37', size: "s", placeholder: t('Lcz_NotProvided', { fallback: 'Not provided' }), "onwa-after-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, value: this.selectedValue ?? '', defaultValue: this.selectedValue ?? '', onchange: e => (this.selectedValue = e.target.value) }, this.departureTime?.map(dt => (h("wa-option", { key: dt.CODE_NAME, value: dt.CODE_NAME }, formatBookingNumber(getSetupEntryLabel(dt, this.language)), this.isLateCheckout(dt) ? t('Lcz_LateCheckoutSuffix', { fallback: ' (Late check-out)' }) : '')))), this.selectedIsLateCheckout && (h("div", { key: '7c27972c3d881711c5ae7734dbc93bce86ac9f2c', class: "ir-time-dialog__insight" }, h("div", { key: '66903387bd30010a17ff845551b4fdef0808db33', class: "ir-time-dialog__insight-row" }, h("wa-icon", { key: 'bc85858fd833d38fa5d6a9f687d11210695ed40c', class: "ir-time-dialog__insight-icon", name: "clock" }), h("div", { key: '0a810619c0b892847ffcd7b07d50c7c5196048e8', class: "ir-time-dialog__insight-copy" }, h("p", { key: '729bb25645b679c6f5637235d84a534a0470552a', class: "ir-time-dialog__insight-title" }, t('Lcz_ChargeAsLateCheckoutQuestion', { fallback: 'Would you like to charge it as an Late Check-out?' })), h("p", { key: '1b3197b814a351e0a638edd9b41c7d2bfff656e9', class: "ir-time-dialog__insight-subtitle" }, t('Lcz_AddedAsAccommodationExtraServiceHint', { fallback: 'This will be added as an accommodation extra service' })))), this.createExtraService && (h("div", { key: '0925653510a4b3f91f8a8569c7c62eea6ee6a8b1', class: "ir-time-dialog__insight-price" }, h("ir-validator", { key: 'd6d16586a838d4e1f88fa0508b6ed5a47dc694e7', value: this.extraServicePrice, schema: ExtraServiceSchema.shape.price }, h("ir-input", { key: 'f56843faa42e8a9c0d6ae3df46da10ced8750438', "onText-change": e => (this.extraServicePrice = Number(e.detail)), defaultValue: this.extraServicePrice?.toString(), value: this.extraServicePrice?.toString(), mask: 'price', type: "text", withClear: true }, h("span", { key: '906ba9dfcc96e63102eb600a84f55b0d12823a7b', slot: "start" }, this.currencySymbol)))))))), h("div", { key: 'c0fd259d4cf904b1e5adb3b561687060f10a8363', slot: "footer", class: 'ir-dialog__footer' }, h("ir-custom-button", { key: 'c6da7d920ee5246cbc2f5d2ad147f9e367c2d8b4', size: "m", variant: "neutral", appearance: "filled", "data-dialog": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '0149427d78ad2a50413fcaa266fdb8972bea6f94', size: "m", variant: "brand", loading: this.isLoading, disabled: !this.selectedValue, onClickHandler: e => this.handleConfirm(e), appearance: "accent" }, t('Lcz_Save', { fallback: 'Save' })))));
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
        registerInstance(this, hostRef);
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
        return (h("div", { key: 'a2a0b4669e77d987c8bbe437bec658d98462cae2', class: "" }, isRequestPending('/Get_Exposed_Booking_Events') ? (h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, h("ir-spinner", null))) : (h(Fragment, null, h("table", { class: " dialog-container-height" }, h("thead", { class: "sr-only" }, h("tr", null, h("th", null, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", null, t('Lcz_User', { fallback: 'user' })), h("th", null, t('Lcz_Status', { fallback: 'Status' })))), h("tbody", null, this.bookingEvents?.map(e => (h("tr", { key: e.id, class: "pb-1" }, h("td", { class: "event-row dates-row" }, h("span", null, formatDate(e.date, 'MMM DD, YYYY')), h("span", null, formatNumber(e.hour, { minimumIntegerDigits: 2, useGrouping: false }), ":", formatNumber(e.minute, { minimumIntegerDigits: 2, useGrouping: false }), ":", formatNumber(e.second, { minimumIntegerDigits: 2, useGrouping: false }))), h("td", { class: "ir-ps-3 event-row " }, e.type), h("td", { class: "ir-ps-1 event-row " }, e.user))))))))));
    }
};
IrEventsLog.style = irEventsLogCss();

const irExtraServiceCss = () => `.sc-ir-extra-service-h{display:block}.es-row.sc-ir-extra-service{display:flex;align-items:flex-start;gap:0.75rem}.es-content.sc-ir-extra-service{flex:1;min-width:0}.es-description.sc-ir-extra-service{margin:0;font-size:var(--wa-font-size-m);line-height:1.5;color:var(--wa-color-text-quiet, #27272a);word-break:break-word;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.es-meta.sc-ir-extra-service{display:flex;flex-wrap:wrap;align-items:center;gap:var(--wa-space-2xs, 4px);margin-top:5px;font-size:var(--wa-font-size-s)}.es-meta-date.sc-ir-extra-service,.es-meta-date.sc-ir-extra-service::part(base),.es-meta-date.sc-ir-extra-service [part~="base"],.es-meta-date.sc-ir-extra-service::part(from-date),.es-meta-date.sc-ir-extra-service [part~="from-date"],.es-meta-date.sc-ir-extra-service::part(to-date),.es-meta-date.sc-ir-extra-service [part~="to-date"]{font-weight:700;white-space:nowrap}.es-aside.sc-ir-extra-service{display:flex;align-items:flex-start;gap:0.25rem;flex-shrink:0}.es-pricing.sc-ir-extra-service{text-align:end}.es-price.sc-ir-extra-service{margin:0;font-weight:700;white-space:nowrap;line-height:1.4;color:var(--wa-color-text-quiet, #18181b)}.es-vat.sc-ir-extra-service{margin:2px 0 0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet, #71717a);white-space:nowrap}.es-action-trigger.sc-ir-extra-service::part(base),.es-action-trigger.sc-ir-extra-service [part~="base"]{height:auto;width:var(--wa-space-s)}.es-action-trigger-icon.sc-ir-extra-service{font-size:1rem}`;

const IrExtraService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.editExtraService = createEvent(this, "editExtraService");
        this.resetBookingEvt = createEvent(this, "resetBookingEvt");
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
    bookingService = new BookingService();
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
        return category ? getEntryValue({ entry: category, language: LocaleController.language }) : null;
    }
    get description() {
        const categoryLabel = this.categoryLabel;
        if (categoryLabel) {
            return (h("span", null, h("span", null, categoryLabel, this.service.description ? ':' : '', ' '), this.service.description));
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
        for (const roomtype of calendar_data.property?.roomtypes ?? []) {
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
        return _formatTime(hour, minute);
    }
    render() {
        const agentMode = isAgentMode(this.agent);
        const tx = this.matchedTx;
        const statusTag = tx ? h("ir-cl-status-tag", { transaction: { _rowId: '', ...mapClTxToFolioRow(tx), balance: 0 }, size: "extra-small" }) : null;
        const unitName = this.linkedUnitName;
        const hasMeta = !!(this.service.start_date || unitName || statusTag);
        return (h(Host, { key: '26ae542e9141bf7171a69328531abc8e1cb73cc3' }, h("div", { key: '865bd00702c674060443049f0533d25be0037fe5', class: "es-row" }, h("div", { key: 'aa3825ccb854d186eb464196a9aa88cff79886ad', class: "es-content" }, h("p", { key: '79433c939482f61af5e98402f69731af81ca54bc', class: "es-description" }, this.description, this.service.category.code === SvcCategory.DayUse && (h("span", { key: 'f998729de673b90c0b8c98b9f3a1ed78fe6f30da' }, ": ", this.formatDayUseTime(this.service.from_time), " \u2013 ", this.formatDayUseTime(this.service.to_time)))), hasMeta && (h("div", { key: '5e7722021368f2955a965c5007ffb806830b7551', class: "es-meta" }, this.service.start_date &&
            (this.service.end_date && this.service?.category?.code !== SvcCategory.DayUse ? (h("ir-date-view", { class: "es-meta-date", from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (h("span", { class: "es-meta-date" }, formatDate(new Date(this.service.start_date), 'MMM DD, YYYY'), " "))), unitName && h("ir-unit-tag", { key: 'a4f056c02d4ee0a7543452206bd3ff8d8eec36c0', unit: unitName }), statusTag))), h("div", { key: 'bc39b4e7bd14896835837910b4e560589aa8b897', class: "es-aside" }, !!this.service.price && this.service.price > 0 && (h("div", { key: '19bef67855b5442b2fb1dc65f9bbf879511f5aab', class: "es-pricing" }, h("p", { key: 'd8333dc93ea34cc7094a47d5df6e2b2a8bae4644', class: "es-price" }, formatAmount(this.currencySymbol, this.service.price)), !!this.service.charges?.vat_percent && (h("p", { key: 'f29dd47a980c04b5ed0584b3a50e96fe8c60c3ae', class: "es-vat" }, t('Lcz_InclVat', { fallback: 'incl. %1% VAT', params: [formatCount(this.service.charges.vat_percent)] }))))), h("wa-dropdown", { key: 'bd824c7812e82c073b5166b1033b47957f5c1cfc', "onwa-show": e => {
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
            } }, h("wa-button", { key: '9e00450822e7d217eee6905113a116d980896af6', class: "es-action-trigger", slot: "trigger", size: "s", appearance: "plain", id: `extra-service-actions-${this.service.system_id}`, variant: "neutral", "aria-label": t('Lcz_ServiceActions', { fallback: 'Service actions' }) }, h("wa-icon", { key: '473756d08506c75921a38915cf4deed86e62861b', class: "es-action-trigger-icon", name: "ellipsis-vertical" })), h("wa-dropdown-item", { key: 'b0365adc655df86c53f3880a957fb32a304ba223', value: "edit" }, t('Lcz_Edit', { fallback: 'Edit' })), agentMode && (h("wa-dropdown-item", { key: 'b531c2e50840d4e0552bcdbac72491f2b547428c', value: "toggle" }, t('Lcz_ReassignFolioDropdown', {
            fallback: 'Re-assign %1 folio',
            params: [this.service.agent ? t('Lcz_GuestLowercase', { fallback: 'guest' }) : t('Lcz_AgentLowercase', { fallback: 'agent' })],
        }))), h("wa-dropdown-item", { key: '36319b385cf95ae66ee76bdd7ec1ec44b9324f9c', value: "delete", variant: "danger" }, t('Lcz_Delete', { fallback: 'Delete' }))))), h("ir-assignment-toggle-dialog", { key: 'ad14efb4854f701be36f929a78ff60d447030a12', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, message: t('Lcz_SwitchFolioConfirm', {
                fallback: 'Switch "%1" to %2?',
                params: [
                    this.service.description,
                    this.service.agent ? t('Lcz_GuestLowercase', { fallback: 'guest' }) : (this.booking?.agent?.name ?? t('Lcz_AgentLowercase', { fallback: 'agent' })),
                ],
            }), onConfirmToggle: () => this.toggleServiceAgent() }, h("span", { key: '1f57c13a699bda66f17790a9c2eefbc622977286', slot: "message" }, t('Lcz_ReassignFolioMessage', {
            fallback: 'Re-assign %1 from %2 folio to %3 folio.',
            params: [
                this.service.description ?? '',
                this.service.agent ? t('Lcz_Agent', { fallback: 'Agent' }) : t('Lcz_Guest', { fallback: 'Guest' }),
                this.service.agent ? t('Lcz_Guest', { fallback: 'Guest' }) : t('Lcz_Agent', { fallback: 'Agent' }),
            ],
        }))), h("ir-dialog", { key: '13d93befdb7241d27b62357fe3718689ff006d35', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: t('Lcz_Alert', { fallback: 'Alert' }), ref: el => (this.irModalRef = el), lightDismiss: false }, `${t('Lcz_AreYouSureDoYouWantToRemove ')} ${t('Lcz_ThisService')} ${t('Lcz_FromThisBooking')}`, h("div", { key: 'dc578599189ef944f34803068039c0a9644b6b44', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '6b55da5884bd1bba039cc27db9d8ec47e883d311', appearance: "filled", variant: "neutral", size: "m", "data-dialog": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'a44e51990fbdc499687bb88227188900b35b6106', onClickHandler: () => this.deleteService(), loading: isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "m" }, t('Lcz_Delete', { fallback: 'Delete' }))))));
    }
};
IrExtraService.style = irExtraServiceCss();

const irExtraServiceConfigCss = () => `.sc-ir-extra-service-config-h{display:block;--ir-input-border-color:#cacfe7}.sc-ir-extra-service-config-h .input-group-text.sc-ir-extra-service-config{border-color:var(--ir-input-border-color)}.currency-ph.sc-ir-extra-service-config{padding:0;margin:0;color:#3b4781;display:flex;align-items:center;justify-content:center;padding:0 0 0 0.25rem;border-top:1px solid var(--ir-input-border-color);border-bottom:1px solid var(--ir-input-border-color);border-inline-start:1px solid transparent;transition:border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out,     -webkit-box-shadow 0.15s ease-in-out}.service-description-input.sc-ir-extra-service-config{height:70px !important}.service-description.sc-ir-extra-service-config .input-group-prepend.sc-ir-extra-service-config{background-color:#f4f5fa;border:1px solid var(--ir-input-border-color);border-start-start-radius:0.25rem;border-end-start-radius:0.25rem}.service-date-container.sc-ir-extra-service-config{padding:0;margin:0;display:flex;align-items:center;position:relative;width:100%;justify-content:center}.service-date-container.sc-ir-extra-service-config .btn-container.sc-ir-extra-service-config{position:absolute;inset-inline-end:5px;margin:0;display:flex;align-items:center;justify-content:center;padding:0}.service-description.sc-ir-extra-service-config .input-group-text.sc-ir-extra-service-config{height:fit-content;border:0;padding-top:0.75rem !important}.price-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config,.cost-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-inline-start:1px solid #1e9ff2}.currency-ph[data-state='error'].sc-ir-extra-service-config{border-color:var(--red, #ff4961)}.price-input.sc-ir-extra-service-config:focus{border-inline-end-width:1px !important}.is-invalid.sc-ir-extra-service-config{background-image:none !important}.price-input.sc-ir-extra-service-config,.cost-input.sc-ir-extra-service-config{border-inline-start:0}.row-group.sc-ir-extra-service-config{display:flex;flex-direction:column;gap:0.5rem}.extra-service-config__container.sc-ir-extra-service-config{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.row-group.sc-ir-extra-service-config{flex-direction:row;align-items:center;gap:0}.cost-label.sc-ir-extra-service-config{border-start-start-radius:0;border-end-start-radius:0;border-inline-start:0}.until-prepend.sc-ir-extra-service-config,.cost-input-placeholder.sc-ir-extra-service-config{border-start-start-radius:0 !important;border-end-start-radius:0 !important}.date-from.sc-ir-extra-service-config,.price-input.sc-ir-extra-service-config{border-inline-end-width:0 !important;border-start-end-radius:0 !important;border-end-end-radius:0 !important}}.date-focused.sc-ir-extra-service-config{border-color:#1e9ff2}`;

const IrExtraServiceConfig = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal");
    }
    booking;
    agent;
    svcCategories = [];
    service;
    language;
    open;
    defaultIdentifier = null;
    closeModal;
    closeDialog() {
        this.closeModal.emit();
    }
    render() {
        return (h("ir-drawer", { key: '20467343a88d1c259ff06087d00aa0f435a94573', style: {
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
            }, label: t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' }) }, this.open && (h("ir-extra-service-config-form", { key: '15f410caa9dd6b2573abb005eb4bdaae290055fa', language: this.language ?? 'en', svcCategories: this.svcCategories, onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDialog();
            }, booking: this.booking, agent: this.agent, service: this.service, defaultIdentifier: this.defaultIdentifier })), h("div", { key: 'c1f3b50a3bbd40511169dd8c67b65fcfac20853a', slot: "footer", class: 'ir__drawer-footer' }, h("ir-custom-button", { key: '69ce0919ea8f4197f556cbd810e9d520e67adc50', class: `flex-fill`, size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'c5cc144f5c6d70cabf3b2d783b9c2f18fb5ebd26', type: "submit", loading: isRequestPending('/Do_Booking_Extra_Service'), form: "extra-service-config-form", size: "m", class: `flex-fill`, variant: "brand" }, t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrExtraServiceConfig.style = irExtraServiceConfigCss();

const irExtraServiceConfigFormCss = () => `.sc-ir-extra-service-config-form-h{display:block;--ir-input-border-color:#cacfe7}.sc-ir-extra-service-config-form-h .input-group-text.sc-ir-extra-service-config-form{border-color:var(--ir-input-border-color)}.currency-ph.sc-ir-extra-service-config-form{padding:0;margin:0;color:#3b4781;display:flex;align-items:center;justify-content:center;padding:0 0 0 0.25rem;border-top:1px solid var(--ir-input-border-color);border-bottom:1px solid var(--ir-input-border-color);border-inline-start:1px solid transparent;transition:border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out,     -webkit-box-shadow 0.15s ease-in-out}.service-description-input.sc-ir-extra-service-config-form{height:70px !important}.service-description.sc-ir-extra-service-config-form .input-group-prepend.sc-ir-extra-service-config-form{background-color:#f4f5fa;border:1px solid var(--ir-input-border-color);border-start-start-radius:0.25rem;border-end-start-radius:0.25rem}.service-date-container.sc-ir-extra-service-config-form{padding:0;margin:0;display:flex;align-items:center;position:relative;width:100%;justify-content:center}.service-date-container.sc-ir-extra-service-config-form .btn-container.sc-ir-extra-service-config-form{position:absolute;inset-inline-end:5px;margin:0;display:flex;align-items:center;justify-content:center;padding:0}.service-description.sc-ir-extra-service-config-form .input-group-text.sc-ir-extra-service-config-form{height:fit-content;border:0;padding-top:0.75rem !important}.price-input-group.sc-ir-extra-service-config-form:focus-within .currency-ph.sc-ir-extra-service-config-form,.cost-input-group.sc-ir-extra-service-config-form:focus-within .currency-ph.sc-ir-extra-service-config-form{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-inline-start:1px solid #1e9ff2}.currency-ph[data-state='error'].sc-ir-extra-service-config-form{border-color:var(--red, #ff4961)}.price-input.sc-ir-extra-service-config-form:focus{border-inline-end-width:1px !important}.is-invalid.sc-ir-extra-service-config-form{background-image:none !important}.price-input.sc-ir-extra-service-config-form,.cost-input.sc-ir-extra-service-config-form{border-inline-start:0}.row-group.sc-ir-extra-service-config-form{display:flex;flex-direction:column;gap:0.5rem}.extra-service-config__container.sc-ir-extra-service-config-form{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.row-group.sc-ir-extra-service-config-form{flex-direction:row;align-items:center;gap:0}.cost-label.sc-ir-extra-service-config-form{border-start-start-radius:0;border-end-start-radius:0;border-inline-start:0}.until-prepend.sc-ir-extra-service-config-form,.cost-input-placeholder.sc-ir-extra-service-config-form{border-start-start-radius:0 !important;border-end-start-radius:0 !important}.date-from.sc-ir-extra-service-config-form,.price-input.sc-ir-extra-service-config-form{border-inline-end-width:0 !important;border-start-end-radius:0 !important;border-end-end-radius:0 !important}}.date-focused.sc-ir-extra-service-config-form{border-color:#1e9ff2}`;

/** Group code for accommodation-linked extra services (Breakfast, Minibar, ...) — see `KNOWN_GROUP_LABELS` in svc-category.utils. */
const ACCOMMODATION_GROUP_CODE = SvcCategory.Accommodation;
/** Early Check-In / Late Check-Out aren't selectable as an accommodation sub-category here — they're handled elsewhere in the booking flow. */
const ACCOMMODATION_EXCLUDED_CODES = new Set(['ECI', 'LCO']);
/** `_SVC_CATEGORY` short code for Baby Cot — its default price is per-stay or per-night depending on BABY_COT_PRICING_MODEL. */
const BABY_COT_CATEGORY_CODE = 'BCT';
const IrExtraServiceConfigForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal");
        this.resetBookingEvt = createEvent(this, "resetBookingEvt");
    }
    booking;
    agent;
    service;
    svcCategories = [];
    language;
    /** Pre-selected room identifier to link a new service to, e.g. when added from ir-room's quick-add action. */
    defaultIdentifier = null;
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
    bookingService = new BookingService();
    componentWillLoad() {
        if (isAgentMode(this.agent)) {
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
        const notApplicableCodes = new Set(calendar_data.property.tax_categories.filter(c => c.taxation_mode?.code === taxationModes.NOT_APPLICABLE).map(c => c.category.code));
        const taxPctByCode = Object.fromEntries(calendar_data.property.tax_categories.map(c => [c.category.code, c.pct || 0]));
        const realCodes = new Set(this.svcCategories.map(c => c.CODE_NAME));
        const accVat = toAccChargeRule(findAccTax('vat'));
        return { notApplicableCodes, taxPctByCode, realCodes, accVat };
    }
    toCategoryOption(cat) {
        const { notApplicableCodes, taxPctByCode, realCodes, accVat } = this.taxCategoryLookup;
        // Synthesized parent-group placeholders (e.g. Accommodation) have no `tax_categories` row of their
        // own — their rate mirrors the property's accommodation VAT, same as it does on the Extra Services page.
        if (!realCodes.has(cat.CODE_NAME)) {
            return { ...cat, pct: accVat.mode === taxationModes.NOT_APPLICABLE ? 0 : (accVat.value ?? 0), isNotApplicable: accVat.mode === taxationModes.NOT_APPLICABLE };
        }
        return { ...cat, pct: taxPctByCode[cat.CODE_NAME] ?? 0, isNotApplicable: notApplicableCodes.has(cat.CODE_NAME) };
    }
    sortByLabel(entries) {
        return entries.sort((a, b) => getSetupEntryLabel(a, this.language).localeCompare(getSetupEntryLabel(b, this.language)));
    }
    get categories() {
        return this.sortByLabel(getTopLevelSvcCategories(this.svcCategories).map(cat => this.toCategoryOption(cat)));
    }
    get svcGroups() {
        return groupSvcCategoriesByParent(this.svcCategories, this.language ?? 'en');
    }
    /** Sub-categories of the currently selected top-level group (e.g. Breakfast/Minibar under Accommodation), when there are any. */
    get subCategories() {
        if (!this.selectedGroupCode)
            return [];
        const group = this.svcGroups.get(this.selectedGroupCode);
        if (!group)
            return [];
        const categories = this.selectedGroupCode === ACCOMMODATION_GROUP_CODE ? group.categories.filter(cat => !ACCOMMODATION_EXCLUDED_CODES.has(cat.CODE_NAME)) : group.categories;
        return categories.filter(cat => cat.CODE_NAME !== SvcCategory.DayUse).map(cat => this.toCategoryOption(cat));
    }
    /** The unit-link select becomes mandatory once the chosen extra service is an accommodation sub-category (Breakfast, Minibar, ...). */
    get isUnitRequired() {
        return this.selectedGroupCode === ACCOMMODATION_GROUP_CODE;
    }
    /** One option per booked room, keyed by `room.identifier`. Assigned rooms show their unit name; unassigned ones show the room guest's name instead so they can still be told apart. */
    get unitOptions() {
        return (this.booking?.rooms ?? []).map(room => {
            const isAssigned = !!room.unit && typeof room.unit === 'object';
            const suffix = isAssigned ? room.unit.name : formatName(room.guest?.first_name ?? null, room.guest?.last_name ?? null);
            return { identifier: room.identifier, label: `${room.roomtype?.name ?? ''} ${suffix ?? ''}`.trim() };
        });
    }
    get showUnitLink() {
        return (this.booking?.rooms?.length ?? 0) > 1;
    }
    /** The room identifier to link a new service to: an explicit default (e.g. from ir-room's quick-add, given as a room identifier), or the booking's single room when there's no choice to make. */
    get effectiveRoomIdentifier() {
        if (this.defaultIdentifier != null) {
            return this.unitOptions.find(option => option.identifier === this.defaultIdentifier)?.identifier ?? null;
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
                ? ExtraServiceSchema.extend({
                    room_identifier: stringType({ required_error: t('Lcz_UnitIsRequired', { fallback: 'Unit is required' }) })
                        .nonempty(t('Lcz_UnitIsRequired', { fallback: 'Unit is required' })),
                })
                : ExtraServiceSchema;
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
            if (error instanceof ZodError) {
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
        const rate = getExtraServiceDefaultPrice(code);
        if (rate === undefined) {
            return null;
        }
        const rateNum = Number(rate);
        if (code !== BABY_COT_CATEGORY_CODE || getBabyCotPricingModel() !== 'Night') {
            return rateNum;
        }
        const start = this.s_service?.start_date ?? this.booking.from_date;
        const end = this.s_service?.end_date ?? this.booking.to_date;
        return rateNum * calculateDaysBetweenDates(start, end);
    }
    /** Keeps Baby Cot's per-night price in sync with the selected date range, unless the user has already typed a price of their own. */
    syncBabyCotPriceWithDateRange() {
        if (this.priceManuallyEdited || this.s_service?.category?.code !== BABY_COT_CATEGORY_CODE || getBabyCotPricingModel() !== 'Night') {
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
        return (h("form", { key: '008e125b7b8bdc9b3fc1ad85600c9294f393254d', id: "extra-service-config-form", onSubmit: async (e) => {
                e.preventDefault();
                this.saveAmenity();
            }, class: 'extra-service-config__container' }, this.categories.length > 0 && (h("ir-validator", { key: '6ef8d9f441353cf2825595aee55c46d0e8b42251', value: this.s_service?.category, schema: ExtraServiceSchema.shape.category }, h("wa-select", { key: '316e5a38466b3f0773d8476399e9a00c6a9a031c', size: "s", label: t('Lcz_ServiceCategory', { fallback: 'Service category' }), value: this.selectedGroupCode ?? this.s_service?.category?.code ?? '', defaultValue: this.selectedGroupCode ?? this.s_service?.category?.code ?? '', onchange: (e) => {
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
            const vatSuffix = category.isNotApplicable
                ? t('Lcz_VatNotApplicable', { fallback: 'VAT - Not applicable' })
                : t('Lcz_VatPercent', { fallback: 'VAT %1%', params: [formatCount(category.pct)] });
            const label = getSetupEntryLabel(category, this.language) + ` (${vatSuffix})`;
            if (this.booking.is_room_less && category.CODE_NAME === SvcCategory.Accommodation) {
                return null;
            }
            return (h("wa-option", { value: category.CODE_NAME, label: label }, label));
        })))), this.selectedGroupCode && this.subCategories.length > 0 && (h("ir-validator", { key: 'aa54cbf1bea8da5d6f5b7e25fc483250012024f4', value: this.s_service?.category?.code ?? null, schema: stringType({ required_error: t('Lcz_SubcategoryIsRequired', { fallback: 'Subcategory is required' }) })
                .nonempty(t('Lcz_SubcategoryIsRequired', { fallback: 'Subcategory is required' })) }, h("wa-select", { key: 'bdfff15bd5115786965a7216bc5958a5c44c1209', size: "s", label: t('Lcz_Subcategory', { fallback: 'Subcategory' }), required: true, value: this.s_service?.category?.code ?? '', defaultValue: this.s_service?.category?.code ?? '', onchange: (e) => {
                this.selectCategory(e.target.value);
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, this.subCategories.map(category => {
            const label = getSetupEntryLabel(category, this.language);
            return (h("wa-option", { value: category.CODE_NAME, label: label }, label, category.CODE_NAME === BABY_COT_CATEGORY_CODE && getBabyCotPricingModel() && h("span", null, " (/", getBabyCotPricingModel().toLowerCase(), ")"), category.CODE_NAME === 'EXB' && h("span", null, t('Lcz_ExtraBedPerNightSuffix', { fallback: ' (/night)' }))));
        })))), h("ir-validator", { key: '2239d823a624a7b4615071dcbe1e12d68cf554fa', id: "amenity description-validator", schema: ExtraServiceSchema.shape.description }, h("wa-textarea", { key: '4e3e404f3e4b4ce30b96c86e1b65463ab21f3988', size: "s", defaultValue: this.s_service?.description, value: this.s_service?.description, onchange: e => this.updateService({ description: e.target.value }), id: "amenity-description", "aria-label": t('Lcz_AmenityDescriptionAriaLabel', { fallback: 'Amenity description' }), maxlength: 250, label: t('Lcz_Description', { fallback: 'Description' }) })), this.showUnitLink && (h("ir-validator", { key: 'deb180ef1f9c432171287a2f654bc1e3415afedf', value: this.s_service?.room_identifier ?? null, schema: this.isUnitRequired
                ? stringType({ required_error: t('Lcz_UnitIsRequired', { fallback: 'Unit is required' }) }).nonempty(t('Lcz_UnitIsRequired', { fallback: 'Unit is required' }))
                : ExtraServiceSchema.shape.room_identifier }, h("wa-select", { key: 'b2b0a9d2d34646e6ac32594944d1140f6857052d', size: "s", label: this.isUnitRequired ? t('Lcz_LinkToUnit', { fallback: 'Link to unit' }) : t('Lcz_LinkToUnitOptional', { fallback: 'Link to unit (optional)' }), required: this.isUnitRequired, value: this.s_service?.room_identifier ?? '', defaultValue: this.s_service?.room_identifier ?? '', onchange: (e) => {
                const value = e.target.value;
                this.updateService({ room_identifier: value || null });
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, !this.isUnitRequired && h("wa-option", { key: '41dbe08c3c2b136c4cbbca7bb98bdfd8a9153049', value: "" }, t('Lcz_NotLinkedToSpecificUnit', { fallback: 'Not linked to a specific unit' })), this.unitOptions.map(option => (h("wa-option", { value: option.identifier, label: option.label }, option.label)))))), h("ir-validator", { key: 'e8ee8705cb4b03c406b25ebf2f9907119d7677fd', value: this.s_service?.start_date ?? null, schema: ExtraServiceSchema.shape.start_date }, h("ir-date-select", { key: '1f1065351319fe1d635c470d6733b0acdc28996b', placeholder: t('Lcz_SelectDate', { fallback: 'Select date' }), withClear: true, label: t('Lcz_DatesOn', { fallback: 'Dates on' }), emitEmptyDate: true, date: this.s_service?.start_date, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                this.updateService({ start_date: e.detail.start?.format('YYYY-MM-DD') });
                this.syncBabyCotPriceWithDateRange();
            } })), h("ir-date-select", { key: 'd910c3293045a83ad96b585ab5dba48ad01135d4', withClear: true, emitEmptyDate: true, placeholder: t('Lcz_SelectDate', { fallback: 'Select date' }), date: this.s_service?.end_date, minDate: this.s_service?.start_date ?? this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: e.detail.start?.format('YYYY-MM-DD') });
                this.syncBabyCotPriceWithDateRange();
            }, label: t('Lcz_TillAndIncluding', { fallback: 'Till and including' }) }), h("ir-validator", { key: '9771f248a341d0a2e2b2136eba3172116c7b165e', value: this.s_service?.price ?? null, schema: ExtraServiceSchema.shape.price }, h("ir-input", { key: '40742178b7c38abdd2640c2f9626ed5b6b90c33b', "onText-change": e => {
                this.updateService({ price: Number(e.detail) });
            }, defaultValue: this.s_service?.price?.toString(), value: this.s_service?.price?.toString(), mask: 'price', type: "text", onChange: () => {
                this.priceManuallyEdited = true;
            }, label: `${t('Lcz_Price')} ${t('Lcz_IncludingTaxSuffix', { fallback: '(including tax)' })}` }, h("span", { key: '9173dd4a4de0b3be85bc9a8e496bd65643e5150b', slot: "start" }, this.booking.currency.symbol))), isAgentMode(this.agent) && (h("ir-service-assignee-select", { key: 'b95e518043a478b104b792aff3c7dc1fc980c331', assigneeType: this.assignee, onAssignmentChange: e => this.assignmentChanged(e), agent: this.booking.agent }))));
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
        registerInstance(this, hostRef);
    }
    booking;
    agent;
    language;
    svcCategories;
    clTransactions = [];
    renderServiceList(services) {
        return services.map((service, index) => {
            if (service.room_identifier) {
                return null;
            }
            return (h(Fragment, null, h("ir-extra-service", { language: this.language, svcCategories: this.svcCategories, booking: this.booking, bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service, agent: this.agent, clTransactions: this.clTransactions }), index !== services.length - 1 && h("wa-divider", null)));
        });
    }
    extraServicesHeaderActions() {
        return this.booking.is_room_less ? (h("div", { slot: "header-actions", class: 'extra-services__header-actions' }, h("ir-custom-button", { id: "room-add", size: "s", appearance: "outlined", variant: "neutral" }, h("wa-icon", { name: "plus", slot: "start" }), t('Lcz_AddStay', { fallback: 'Add stay' })), h("ir-custom-button", { id: "extra_service_btn", size: "s", appearance: "outlined", variant: "neutral" }, h("wa-icon", { name: "plus", slot: "start" }), t('Lcz_AddService', { fallback: 'Add service' })))) : (h(Fragment, null, h("wa-tooltip", { for: "extra_service_btn" }, t('Lcz_AddExtraService', { fallback: 'Add extra service' })), h("ir-custom-button", { slot: "header-actions", id: "extra_service_btn", size: "s", appearance: "plain", variant: "neutral" }, h("wa-icon", { name: "plus", style: { fontSize: '1rem' } }))));
    }
    render() {
        const services = this.booking.extra_services ?? [];
        if (isAgentMode(this.agent)) {
            const guestServices = services.filter(s => s.agent === null || s.agent === undefined);
            const agentServices = services.filter(s => s.agent !== null && s.agent !== undefined);
            const agentName = this.booking.agent?.name ?? t('Lcz_Agent', { fallback: 'Agent' });
            return (h(Host, null, h("wa-card", { appearance: "plain", class: "extra-service__card" }, h("p", { slot: "header", class: 'font-size-large p-0 m-0' }, t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' })), this.extraServicesHeaderActions(), services.length === 0 ? (h("ir-empty-state", { showIcon: false })) : (h(Fragment, null, h("p", { class: "service-group__label --agent" }, agentName, h("span", null, t('Lcz_Folio', { fallback: 'Folio' }))), h("div", { class: "service-group service-group--agent" }, h("div", { class: "service-group__body" }, agentServices.length === 0 ? (h("p", { class: "service-group__empty" }, t('Lcz_NoAgentServicesAdded', { fallback: 'No agent services added' }))) : (this.renderServiceList(agentServices)))), h("wa-divider", null), h("p", { class: "service-group__label" }, t('Lcz_Guest', { fallback: 'Guest' }), h("span", null, t('Lcz_Folio', { fallback: 'Folio' }))), h("div", { class: "service-group service-group--guest" }, h("div", { class: "service-group__body" }, guestServices.length === 0 ? (h("p", { class: "service-group__empty" }, t('Lcz_NoGuestServicesAdded', { fallback: 'No guest services added' }))) : (this.renderServiceList(guestServices)))))))));
        }
        return (h(Host, null, h("wa-card", { appearance: "plain", class: "extra-service__card" }, h("p", { slot: "header", class: 'font-size-large p-0 m-0 ' }, t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' })), this.extraServicesHeaderActions(), services.length === 0 && h("ir-empty-state", { showIcon: false }), this.renderServiceList(services))));
    }
};
IrExtraServices.style = irExtraServicesCss();

const irGuestBillingCss = () => `.sc-ir-guest-billing-h {   --ir-cell-padding: 0.5rem 1rem; }      .table--container.sc-ir-guest-billing {   overflow-x: auto; }  .table--container.sc-ir-guest-billing, .data-table.sc-ir-guest-billing {   height: 100%; }      .ir-table-row.sc-ir-guest-billing td.sc-ir-guest-billing {   padding: var(--ir-cell-padding) !important;   text-align: start;   z-index: 2;   background-color: var(--wa-color-surface-default);   white-space: nowrap;   color: var(--wa-color-text-normal);   box-sizing: border-box;    transition-duration: var(--wa-transition-fast); }  .table.sc-ir-guest-billing td.sc-ir-guest-billing {   border-top: 0;   border-bottom: 1px solid var(--wa-color-neutral-border-quiet, #abaeb9);    transition:     color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out; }  .table.sc-ir-guest-billing tbody.sc-ir-guest-billing tr.sc-ir-guest-billing:last-child > td.sc-ir-guest-billing {   border-bottom: 0 !important; }  .cell--align-start.sc-ir-guest-billing {   text-align: start !important; }  .cell--align-center.sc-ir-guest-billing {   text-align: center !important; }  .cell--align-end.sc-ir-guest-billing {   text-align: end !important; }      .table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sc-ir-guest-billing {   border: none !important;   background: color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);   color: var(--wa-color-neutral-on-quiet);   padding: 0.5rem 1rem !important;   text-align: start; }  .data-table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sc-ir-guest-billing {   box-sizing: border-box;   background: var(--wa-color-surface-default) !important;   padding-top: 0.5rem !important;   padding-bottom: 0.5rem !important;    border-bottom: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;    color: var(--wa-color-text-normal); }   .empty-row.sc-ir-guest-billing {   height: 50vh !important;   text-align: center;   color: var(--wa-color-gray-60); }    .sortable.sc-ir-guest-billing, .ir-table-row.sc-ir-guest-billing {   transition:     color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out; }  .sortable.sc-ir-guest-billing {   text-transform: capitalize;   cursor: pointer; }  .table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sortable.sc-ir-guest-billing {   transition-property: background, border, box-shadow, color;    transition-duration: var(--wa-transition-fast);   transition-timing-function: var(--wa-transition-easing); }  .table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sortable.sc-ir-guest-billing:hover {   color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));    background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important; }  .table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sortable.sc-ir-guest-billing:active {   color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));    background-color: color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important; }  .sortable.sc-ir-guest-billing:active {   color: #212529;   background-color: #e2e8f0;   border-color: #d3d9df; }  .sortable.sc-ir-guest-billing svg.sc-ir-guest-billing {   color: var(--wa-color-brand-fill-loud); }      .ir-table-row.sc-ir-guest-billing:hover td.sc-ir-guest-billing {   background: var(--wa-color-neutral-fill-quiet, #f1f2f3) !important; }  .--clickable.ir-table-row.sc-ir-guest-billing:hover td.sc-ir-guest-billing {   background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important; }  .--clickable.ir-table-row.sc-ir-guest-billing:active td.sc-ir-guest-billing {   background-color: color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important; }      .selected.sc-ir-guest-billing td.sc-ir-guest-billing {   background: var(--wa-color-brand-fill-quiet) !important;   border-color: var(--wa-color-neutral-border-quiet) !important;   color: var(--gray-dark) !important;    transition:     color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out; }  .selected.ir-table-row.sc-ir-guest-billing:hover td.sc-ir-guest-billing {   background-color: color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important; }  .selected.ir-table-row.sc-ir-guest-billing:active td.sc-ir-guest-billing {   background-color: color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important; }      .data-table.sc-ir-guest-billing .empty-row.sc-ir-guest-billing {   height: 50vh !important;   text-align: center;   color: var(--wa-color-gray-60); }      .data-table--pagination.sc-ir-guest-billing {   padding: 0.5rem 1rem;   background: var(--wa-color-surface-default);   border-top: 1px solid var(--wa-color-neutral-90); }      .sticky-column.sc-ir-guest-billing {   position: sticky !important;   inset-inline-end: 0;   background-color: var(--wa-color-surface-default, white); }    .sc-ir-guest-billing-h {   display: flex;   flex-direction: column;   height: 100%; } .billing__container.sc-ir-guest-billing {   display: flex;   flex-direction: column;   height: 100%;   gap: var(--wa-space-l);   padding: 0 var(--wa-space-l); } .billing__date-cell.sc-ir-guest-billing {   display: flex;   align-items: baseline;   gap: 0.5rem; } .billing__date-time.sc-ir-guest-billing {   color: var(--wa-color-text-quiet);   margin: 0;   padding: 0;   font-size: var(--wa-font-size-s); } .billing__section-title-row.sc-ir-guest-billing {   display: flex;   align-items: center;   justify-content: space-between;   margin-bottom: 1rem; } .billing__section-title.sc-ir-guest-billing {   margin: 0;   padding: 0;   font-family: var(--wa-font-family-heading);   font-weight: var(--wa-font-weight-heading);   line-height: var(--wa-line-height-condensed);   text-wrap: balance;   font-size: var(--wa-font-size-m); } .billing__actions-row.sc-ir-guest-billing {   display: flex;   align-items: center;   justify-content: center;         gap: 0.5rem; } .billing__invoice-nbr.sc-ir-guest-billing::part(base), .billing__invoice-nbr.sc-ir-guest-billing [part~="base"] {   padding: 0.05rem 0.5rem;   height: auto; }  .billing__doc-number-col.sc-ir-guest-billing {   --ir-cell-padding: 0.5rem; }  th.billing__doc-number-col.sc-ir-guest-billing {   padding: 0.5rem !important; } .billing__price-col.sc-ir-guest-billing {   text-align: end !important; }   .billing__cards.sc-ir-guest-billing {   display: flex;   flex-direction: column;   gap: var(--wa-space-m);   padding-bottom: var(--wa-space-l) !important; }   .billing__card.sc-ir-guest-billing {   display: block; }   .billing__card-header.sc-ir-guest-billing {   display: flex;   justify-content: space-between;   align-items: center;   margin-bottom: 0.5rem; }  .billing__card-header-info.sc-ir-guest-billing {   display: flex;   flex-direction: column; }  .billing__card-number.sc-ir-guest-billing {   margin: 0;   font-weight: var(--wa-font-weight-heading);   font-family: var(--wa-font-family-heading); }  .billing__card-type.sc-ir-guest-billing {   margin: 0;   font-size: var(--wa-font-size-xs);   color: var(--wa-color-text-secondary); }   .billing__card-download-btn.sc-ir-guest-billing {   display: flex;   align-items: center; }   .billing__card-details.sc-ir-guest-billing {   display: flex;      gap: var(--wa-space-xs);   justify-content: space-between; }  .billing__card-detail.sc-ir-guest-billing {   display: flex;   flex-direction: column; }  .billing__card-detail-label.sc-ir-guest-billing {   margin: 0;   font-size: var(--wa-font-size-xs);   color: var(--wa-color-text-quiet); } .billing__card-detail-label.--amount.sc-ir-guest-billing {   text-align: end !important; } .billing__card-detail-value.sc-ir-guest-billing {   margin: 0;   font-weight: var(--wa-font-weight-regular);   font-size: var(--wa-font-size-s); } .billing__card-void-btn.sc-ir-guest-billing {   flex: 1 1 0%; }   .billing__card-footer.sc-ir-guest-billing {   display: flex; } .table-container.sc-ir-guest-billing {   display: none; } .billing__empty-state.sc-ir-guest-billing {   display: flex;   align-items: center;   justify-content: center;   width: 100%;   height: 30vh; } .billing__card.sc-ir-guest-billing::part(footer), .billing__card.sc-ir-guest-billing [part~="footer"] {   padding-top: 1rem;   padding-bottom: 1rem; } .guest-billing__pdf-viewer.sc-ir-guest-billing {   margin-inline-start: auto;   margin-inline-end: auto; }  @media (min-width: 768px) {   .billing__cards.sc-ir-guest-billing {     display: none;   }   .table-container.sc-ir-guest-billing {     display: block;   } } @media print {   .guest-billing__pdf-viewer.sc-ir-guest-billing {     margin: 0;   }   @page {     margin.sc-ir-guest-billing: 0.sc-ir-guest-billing;   }    body.sc-ir-guest-billing {     margin: 0;   } }`;

const IrGuestBilling = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.billingClose = createEvent(this, "billingClose");
        this.guestDocumentPreview = createEvent(this, "guestDocumentPreview");
        this.resetBookingEvt = createEvent(this, "resetBookingEvt");
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
    bookingService = new BookingService();
    setupService = new SetupService();
    propertyService = new PropertyService();
    _id = `issue_invoice__btn_${v4()}`;
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
            property_id: calendar_data.property.id,
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
                if (payment.payment_type?.code === PayTypes.Payment && !payment.is_city_ledger && payment.payment_status?.code === PayStatus.Void) {
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
            this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr, language: LocaleController.language }),
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
        if (e.detail.documentType === FdTypes.Receipt) {
            const voidedReceipts = new Set(this.voidedReceipts);
            voidedReceipts.add(e.detail.documentNumber);
            this.voidedReceipts = new Set(voidedReceipts);
            // Voiding a receipt changes booking.financial.payments, which this component doesn't own.
            // Pass the freshly fetched booking so ir-booking-details updates in place instead of
            // taking the resetBookingEvt(null) branch, which shows its full-page loading spinner.
            const freshBooking = await this.bookingService.getExposedBooking({ booking_nbr: this.booking.booking_nbr, language: LocaleController.language });
            this.resetBookingEvt.emit(freshBooking);
        }
    }
    get fdTypeLabels() {
        const map = {};
        for (const entry of this.fdTypes) {
            map[entry.CODE_NAME] = getEntryValue({ entry, language: LocaleController.language });
        }
        return map;
    }
    get sortedRows() {
        return [...this.rows].sort((a, b) => {
            const aDate = hooks(a.DOC_DATE, 'YYYY-MM-DD');
            const bDate = hooks(b.DOC_DATE, 'YYYY-MM-DD');
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
        return formatAmount(calendar_data?.property?.currency?.symbol, amount);
    }
    render() {
        if (this.isLoading === 'page') {
            return (h("div", { class: "drawer__loader-container" }, h("ir-spinner", null)));
        }
        const currencySymbol = this.booking.currency?.symbol ?? '';
        return (h(Fragment, null, h("div", { class: "billing__container" }, h("section", null, h("div", { class: "billing__section-title-row" }, h("h4", { class: "billing__section-title" }, t('Lcz_IssuedDocuments', { fallback: 'Issued documents' })), h("ir-custom-button", { variant: "brand", id: this._id, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = 'invoice';
            } }, t('Lcz_IssueInvoice'))), h("div", { class: "table-container" }, h("table", { class: "table data-table" }, h("thead", null, h("tr", null, h("th", null, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { class: "billing__doc-number-col" }, t('Lcz_DocNumber')), h("th", null, t('Lcz_Type', { fallback: 'Type' })), h("th", { class: "billing__price-col" }, t('Lcz_Debit', { fallback: 'Debit' })), h("th", { class: "billing__price-col" }, t('Lcz_Credit', { fallback: 'Credit' })), h("th", { class: 'text-center' }, t('Lcz_Actions', { fallback: 'Actions' })))), h("tbody", null, this.sortedRows.length === 0 && (h("tr", null, h("td", { colSpan: 6, class: "empty-row" }, h("ir-empty-state", null)))), this.sortedRows.map(row => {
            const isInvoice = row.FD_TYPE_CODE === FdTypes.Invoice;
            const isReceipt = row.FD_TYPE_CODE === FdTypes.Receipt;
            return (h("tr", { class: "ir-table-row", key: row.DOC_NUMBER }, h("td", null, row.DOC_DATE ? (h("div", { class: "billing__date-cell" }, h("p", { class: "m-0 p-0" }, formatDate(row.DOC_DATE, 'MMM DD, YYYY')), row.DOC_HOUR != null && row.DOC_MINUTE != null && h("p", { class: "billing__date-time" }, _formatTime(String(row.DOC_HOUR), String(row.DOC_MINUTE))))) : ('—')), h("td", { class: "billing__doc-number-col" }, h("wa-button", { onClick: () => this.printInvoice({ row }), variant: "brand", appearance: "plain", class: "billing__invoice-nbr" }, formatBookingNumber(row.DOC_NUMBER))), h("td", null, (row.FD_TYPE_CODE && this.fdTypeLabels[row.FD_TYPE_CODE === 'RFND' ? FdTypes.CreditReceipt : row.FD_TYPE_CODE]) || row.FD_TYPE_CODE || '—'), h("td", { class: "billing__price-col" }, h("span", { class: "ir-price", style: { fontWeight: '400' } }, this.renderMoney(row.DEBIT))), h("td", { class: "billing__price-col" }, h("span", { class: "ir-price", style: { fontWeight: '400' } }, this.renderMoney(row.CREDIT))), h("td", null, h("div", { class: "billing__actions-row" }, h("wa-dropdown", { "onwa-hide": e => {
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
                                documentType: isInvoice ? FdTypes.Invoice : FdTypes.Receipt,
                                documentNumber: row.DOC_NUMBER,
                                bookingNumber: this.booking.booking_nbr,
                            });
                            break;
                    }
                } }, h("wa-dropdown-item", { value: "view-print" }, t('Lcz_OpenPdf', { fallback: 'Open PDF' }), isRequestPending('/Print_Invoice') && h("wa-spinner", { slot: "details" })), isInvoice && !this.voidedInvoices.has(row.DOC_NUMBER) && (h("wa-dropdown-item", { variant: "danger", value: "void" }, t('Lcz_VoidWithCreditNote', { fallback: 'Void with credit note' }))), isReceipt && !this.voidedReceipts.has(row.DOC_NUMBER) && (h("wa-dropdown-item", { variant: "danger", value: "void" }, t('Lcz_VoidWithCreditReceipt', { fallback: 'Void with credit receipt' }))), h("ir-custom-button", { slot: "trigger", id: `pdf-${row.DOC_ID ?? row.DOC_NUMBER}`, variant: "neutral", appearance: "plain" }, h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1rem' } })))))));
        })))), h("div", { class: "billing__cards" }, this.sortedRows.length === 0 && (h("div", { class: "billing__empty-state" }, h("ir-empty-state", null))), this.sortedRows.map(row => {
            const isInvoice = row.FD_TYPE_CODE === FdTypes.Invoice;
            return (h("wa-card", { key: row.DOC_NUMBER, class: "billing__card" }, h("div", { class: "billing__card-header" }, h("div", { class: "billing__card-header-info" }, h("p", { class: "billing__card-number" }, (row.FD_TYPE_CODE && this.fdTypeLabels[row.FD_TYPE_CODE]) || row.FD_TYPE_CODE || '—', ":", formatBookingNumber(row.DOC_NUMBER))), h("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } }, h("wa-tooltip", { for: `mobile-download-pdf-${row.DOC_ID ?? row.DOC_NUMBER}` }, t('Lcz_OpenPdf', { fallback: 'Open PDF' })), h("ir-custom-button", { onClickHandler: () => this.printInvoice({ row }), loading: isRequestPending('/Print_Invoice'), id: `mobile-download-pdf-${row.DOC_ID ?? row.DOC_NUMBER}`, variant: "neutral", appearance: "plain", class: "billing__card-download-btn" }, h("wa-icon", { name: "file-pdf", style: { fontSize: '1rem' } })))), h("div", { class: "billing__card-details" }, h("div", { class: "billing__card-detail" }, h("p", { class: "billing__card-detail-label" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("div", { class: "billing__date-cell" }, h("p", { class: "billing__card-detail-value" }, row.DOC_DATE ? formatDate(row.DOC_DATE, 'MMM DD, YYYY') : '—'), row.DOC_HOUR != null && row.DOC_MINUTE != null && h("p", { class: "billing__date-time" }, _formatTime(String(row.DOC_HOUR), String(row.DOC_MINUTE))))), h("div", { class: "billing__card-detail" }, h("p", { class: "billing__card-detail-label --amount" }, t('Lcz_Amount', { fallback: 'Amount' })), h("p", { class: "billing__card-detail-value" }, formatAmount(currencySymbol, row.TOTAL_AMOUNT ?? 0)))), isInvoice && !this.voidedInvoices.has(row.DOC_NUMBER) && (h("div", { slot: "footer", class: "billing__card-footer" }, h("ir-custom-button", { onClickHandler: () => {
                    this.voidDialogRef?.open({ documentType: FdTypes.Invoice, documentNumber: row.DOC_NUMBER });
                }, variant: "danger", appearance: "outlined", class: "billing__card-void-btn" }, t('Lcz_VoidWithCreditNote', { fallback: 'Void with credit note' }))))));
        })))), h("ir-invoice", { invoiceInfo: this.invoiceInfo, onInvoiceClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = null;
            }, open: this.isOpen === 'invoice', booking: this.booking }), h("ir-void-document-dialog", { ref: el => (this.voidDialogRef = el), onDocumentVoided: e => this.handleDocumentVoided(e) })));
    }
};
IrGuestBilling.style = irGuestBillingCss();

const irGuestInfoDrawerCss = () => `.sc-ir-guest-info-drawer-h{display:block}`;

const IrGuestInfoDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.guestInfoDrawerClosed = createEvent(this, "guestInfoDrawerClosed");
        this.guestChanged = createEvent(this, "guestChanged");
        this.resetBookingEvt = createEvent(this, "resetBookingEvt");
    }
    open;
    language = 'en';
    email;
    booking_nbr;
    ticket;
    guestInfoDrawerClosed;
    guestChanged;
    resetBookingEvt;
    get hostElement() { return getElement(this); }
    handleDrawerHide = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.guestInfoDrawerClosed.emit({ source: event.detail?.source ?? this.hostElement });
    };
    handleCancel = () => {
        this.guestInfoDrawerClosed.emit({ source: this.hostElement });
    };
    _formId = `guest-details-form_${v4()}`;
    render() {
        const drawerLabel = t('Lcz_GuestDetails', { fallback: 'Guest info' });
        return (h("ir-drawer", { key: 'ac604791017fd2b616d619701742f5d1ab9c2431', open: this.open, label: drawerLabel, onDrawerHide: this.handleDrawerHide, style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            } }, this.open && (h("ir-guest-info-form", { key: '2ade459bde1a8a818f792d7f1a73ae204af835d0', ticket: this.ticket, language: this.language, email: this.email, booking_nbr: this.booking_nbr, fromId: this._formId })), h("div", { key: '10396c261a8b2760b3dc84c64d2ab32cfec16b38', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'b5fa06ba0dcc5728bf8d9254367f07465aa2b005', size: "m", appearance: "filled", variant: "neutral", type: "button", onClickHandler: this.handleCancel }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '63e98a2a3904e9df16d8026203f8bc8008310f88', type: "submit", form: this._formId, size: "m", variant: "brand", loading: isRequestPending('/Edit_Exposed_Guest') }, t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrGuestInfoDrawer.style = irGuestInfoDrawerCss();

const nonEmptyString = (message) => stringType().trim().min(1, message);
const optionalEmailSchema = stringType().trim().email('Enter a valid email address').or(literalType('')).optional().nullable();
const guestInfoFormSchema = objectType({
    first_name: nonEmptyString('First name is required'),
    last_name: nonEmptyString('Last name is required'),
    email: nonEmptyString('Email is required').email('Enter a valid email address'),
    alternative_email: optionalEmailSchema,
    country_id: numberType({ required_error: 'Country is required' }).int('Country is required').positive('Country is required'),
    mobile: nonEmptyString('Mobile number is required').min(5, 'Mobile number is too short'),
    country_phone_prefix: nonEmptyString('Country code is required'),
    notes: stringType().max(2000, 'Private note cannot exceed 2000 characters').optional(),
});

const irGuestInfoFormCss = () => `.sc-ir-guest-info-form-h{height:100%;display:flex;flex-direction:column}.guest-form__container.sc-ir-guest-info-form{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}`;

const IrGuestInfoForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.guestInfoDrawerClosed = createEvent(this, "guestInfoDrawerClosed");
        this.resetBookingEvt = createEvent(this, "resetBookingEvt");
        this.toast = createEvent(this, "toast");
        this.guestChanged = createEvent(this, "guestChanged");
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
    bookingService = new BookingService();
    ApiClient = new ApiClient();
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new LanguageSync(SCREEN_TABLES.guestInfo, () => this.init());
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
            const localeReady = LocaleController.load({ language: this.language, tables: SCREEN_TABLES.guestInfo });
            const [guest, countries] = await Promise.all([this.bookingService.fetchGuest(this.email), this.bookingService.getCountries(LocaleController.language), localeReady]);
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
                title: t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }),
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
            return (h("div", { class: 'drawer__loader-container' }, h("ir-spinner", null)));
        }
        return (h("form", { id: this.fromId, onSubmit: e => {
                e.preventDefault();
                this.editGuest();
            }, class: "guest-form__container" }, h("ir-validator", { schema: guestInfoFormSchema.shape.first_name, value: this.guest?.first_name ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { id: 'firstName', value: this.guest?.first_name, defaultValue: this.guest?.first_name, required: true, "onText-change": e => this.handleInputChange({ first_name: e.detail.trim() }), label: t('Lcz_FirstName', { fallback: 'First name' }) })), h("ir-validator", { schema: guestInfoFormSchema.shape.last_name, value: this.guest?.last_name ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { value: this.guest?.last_name, required: true, defaultValue: this.guest?.last_name, id: "lastName", "onText-change": e => this.handleInputChange({ last_name: e.detail.trim() }), label: t('Lcz_LastName', { fallback: 'Last name' }) })), h("ir-validator", { schema: guestInfoFormSchema.shape.email, value: this.guest?.email ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { label: t('Lcz_Email', { fallback: 'Email' }), id: "email", defaultValue: this.guest?.email, value: this.guest?.email, required: true, mask: "email", "onText-change": e => {
                this.handleInputChange({ email: e.detail });
            } })), h("ir-validator", { schema: guestInfoFormSchema.shape.alternative_email, value: this.guest?.alternative_email ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { label: t('Lcz_AlternativeEmail', { fallback: 'Alternative email' }), id: "altEmail", value: this.guest?.alternative_email, mask: "email", "onText-change": e => {
                this.handleInputChange({ alternative_email: e.detail });
            } })), h("ir-validator", { schema: guestInfoFormSchema.shape.country_id, value: this.guest?.country_id ?? undefined, autovalidate: this.autoValidate, valueEvent: "countryChange" }, h("ir-country-picker", { size: "s", variant: "modern", country: this.countries.find(c => c.id === this.guest?.country_id), label: t('Lcz_Country', { fallback: 'Country' }), onCountryChange: e => {
                const country = e.detail;
                let params = { country_id: country.id };
                if (!this.guest?.mobile) {
                    params = { ...params, country_phone_prefix: country.phone_prefix };
                }
                this.handleInputChange(params);
            }, countries: this.countries })), h("ir-validator", { schema: objectType({ mobile: guestInfoFormSchema.shape.mobile, phone_prefix: guestInfoFormSchema.shape.country_phone_prefix }), value: { mobile: this.guest?.mobile ?? '', phone_prefix: this.guest?.country_phone_prefix }, autovalidate: this.autoValidate, valueEvent: "mobile-input-change" }, h("ir-mobile-input", { size: "s", "onMobile-input-change": e => {
                this.handleInputChange({ mobile: e.detail.formattedValue.trim() });
            }, "aria-invalid": 'true', "onMobile-input-country-change": e => this.handleInputChange({ country_phone_prefix: e.detail.phone_prefix }), value: this.guest?.mobile ?? '', required: true, countryCode: this.countries.find(c => c.phone_prefix?.toString() === this.guest?.country_phone_prefix?.toString())?.code, countries: this.countries })), h("ir-validator", { schema: guestInfoFormSchema.shape.notes, value: this.guest?.notes ?? '', autovalidate: this.autoValidate, valueEvent: "wa-change change input", blurEvent: "wa-blur blur" }, h("wa-textarea", { size: "s", onchange: e => this.handleInputChange({ notes: e.target.value }), value: this.guest?.notes ?? '', label: t('Lcz_PrivateNote', { fallback: 'Private note' }) }))));
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
        registerInstance(this, hostRef);
        this.hbPreferenceClose = createEvent(this, "hbPreferenceClose");
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
    bookingService = new BookingService();
    dialogRef;
    closedBySave = false;
    async handleConfirm(e) {
        e.stopImmediatePropagation();
        if (!this.selectedValue)
            return;
        try {
            this.isLoading = true;
            await this.bookingService.setHbPreference({
                property_id: calendar_data.property.id,
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
        return (h("ir-dialog", { key: '6493cb2dfa4a83d55c13262a0ff3534a272a27d7', open: this.open, label: t('Lcz_HalfBoard2ndMealPreference', { fallback: 'Half-board 2nd Meal Preference' }), ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.preventDefault();
                const saved = this.closedBySave;
                this.hbPreferenceClose.emit({ saved });
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closedBySave = false;
                this.selectedValue = null;
            } }, h("wa-radio-group", { key: '8f979569468206de997e37fe4f1dd6a6138ad37f', value: this.selectedValue ?? '', onchange: e => (this.selectedValue = e.target.value) }, h("wa-radio", { key: 'ef3e3599b41a2a974c8db6aac05f1a76df906044', value: HbPreference.Lunch }, t('Lcz_Lunch', { fallback: 'Lunch' })), h("wa-radio", { key: 'e3d307ad9c426a5cd1e60255f28aafc396a89fea', value: HbPreference.Dinner }, t('Lcz_Dinner', { fallback: 'Dinner' }))), h("div", { key: 'ff4c0f5244ae8030606520c2a96b9ca7085db9b5', slot: "footer", class: 'ir-dialog__footer' }, h("ir-custom-button", { key: '920217cc2c23dc50f03e0c4f5c49c284530fcb3a', size: "m", variant: "neutral", appearance: "filled", "data-dialog": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'ecaa8896f692f8eb2f30f8e73bc8cfb9d14f1756', size: "m", variant: "brand", loading: this.isLoading, disabled: !this.selectedValue, onClickHandler: e => this.handleConfirm(e), appearance: "accent" }, t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
};
IrHbPreferenceDialog.style = irHbPreferenceDialogCss();

const irPaymentAnalyticsCss = () => `.sc-ir-payment-analytics-h{display:block}.dp-effect-callout.sc-ir-payment-analytics{width:fit-content;max-width:100%;padding:0.4em 0.65em !important}.dp-effect-callout.sc-ir-payment-analytics::part(icon),.dp-effect-callout.sc-ir-payment-analytics [part~="icon"]{font-size:1em}.dp-effect-icon.sc-ir-payment-analytics{margin-inline-end:0.4em !important}.booking-dp-effect.sc-ir-payment-analytics{display:flex;flex-direction:row;gap:1rem;align-items:center;padding:0}.booking-dp-effect__label.sc-ir-payment-analytics{margin:0;color:var(--color-text-secondary);font-size:0.6875rem}.booking-dp-effect__value.sc-ir-payment-analytics{display:inline-flex;align-items:center;gap:0.3rem;margin:0;font-size:0.9375rem;font-weight:700;font-variant-numeric:tabular-nums;color:var(--color-text-primary);white-space:nowrap}.booking-dp-effect__value.--loss.sc-ir-payment-analytics{color:var(--wa-color-danger-fill-loud)}.booking-dp-effect__value.--gain.sc-ir-payment-analytics{color:var(--wa-color-success-fill-loud)}.booking-dp-effect__trend-icon.sc-ir-payment-analytics{font-size:0.9em}.dp-effect-icon.sc-ir-payment-analytics{transform-origin:center;animation:dp-effect-icon-sparkle 2.4s ease-in-out infinite}@keyframes dp-effect-icon-sparkle{0%,100%{transform:scale(1) rotate(0deg)}50%{transform:scale(1.18) rotate(-10deg)}}.dp-effect-callout.--gain.sc-ir-payment-analytics{animation:dp-effect-glow 1.4s ease-out;border-radius:var(--wa-border-radius-m, 0.5rem)}@keyframes dp-effect-glow{0%{box-shadow:0 0 0 0 color-mix(in oklab, var(--wa-color-success-fill-loud) 45%, transparent)}70%{box-shadow:0 0 0 0.75rem color-mix(in oklab, var(--wa-color-success-fill-loud) 0%, transparent)}100%{box-shadow:0 0 0 0 transparent}}@media (prefers-reduced-motion: reduce){.dp-effect-icon.sc-ir-payment-analytics,.dp-effect-callout.--gain.sc-ir-payment-analytics{animation:none}}`;

const COUNT_UP_DURATION_MS = 700;
/** Cubic ease-out — starts fast, settles gently instead of stopping abruptly. */
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const IrPaymentAnalytics = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'f138e057b3d7b260a83c73710557b6cc2b1e2ba1' }, h("wa-tooltip", { key: '5f5a24dcce007ceb482aaaf153d9575d90a02867', for: `dp-effect-callout-${this.booking?.booking_nbr}` }, t('Lcz_DynamicPricingEffectTooltip', {
            fallback: 'The dynamic pricing effect is calculated at the time the booking is created and remains fixed thereafter, serving as an indicator of the additional profit generated or of the incentive price reduction.',
        })), h("wa-callout", { key: '8c2b1d4491814876a6672cc28b083a63fac3548a', id: `dp-effect-callout-${this.booking?.booking_nbr}`, class: `dp-effect-callout --${tone}`, variant: calloutVariant, size: "s" }, h("wa-icon", { key: '63de8d73ca7d4649c0805033201a4a01add9e164', class: "dp-effect-icon", slot: "icon", name: "wand-magic-sparkles" }), h("div", { key: 'e53ecdeecbf3ed63319117370a832ab50b08b2da', class: "booking-dp-effect" }, h("p", { key: '93a16e4fcc79a6b2e4d960fc25dec1f441355dae', class: "booking-dp-effect__label" }, isOptimReadOnly()
            ? t('Lcz_DynamicPricingLostProfit', { fallback: 'Dynamic pricing lost profit' })
            : t('Lcz_DynamicPricingEffect', { fallback: 'Dynamic pricing effect' })), h("p", { key: '4ef5ed294ddf4bf09454e8711597294915ed66ca', class: `booking-dp-effect__value --${tone}` }, h("span", { key: 'e05c7d1c13bc4ae186d93d3bc20bc9c872e25878' }, formatAmount(calendar_data.property.currency.symbol, this.displayedValue)), h("wa-icon", { key: '4079e628cb7b8756be92051101cf6d99306e1aad', class: "booking-dp-effect__trend-icon", name: trendIcon }))))));
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
        registerInstance(this, hostRef);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt");
        this.resetExposedCancellationDueAmount = createEvent(this, "resetExposedCancellationDueAmount");
        this.toast = createEvent(this, "toast");
        this.openSidebar = createEvent(this, "openSidebar");
        this.openPrintScreen = createEvent(this, "openPrintScreen");
        this.guestDocumentPreview = createEvent(this, "guestDocumentPreview");
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
    paymentService = new PaymentService();
    bookingService = new BookingService();
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
                    date: hooks().format('YYYY-MM-DD'),
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
            date: hooks().format('YYYY-MM-DD'),
            amount: null,
            currency: calendar_data.currency,
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
                documentNumber: payment_type?.code === PayTypes.Payment ? receipt_nbr : [PayTypes.CreditReceipt, PayTypes.Refund].includes(payment_type?.code) ? credit_receipt_nbr : null,
                fdTypeCode: payment_type?.code === PayTypes.Payment ? FdTypes.Receipt : payment_type?.code === PayTypes.Refund ? FdTypes.Refund : FdTypes.CreditReceipt,
                bookingNumber: this.booking.booking_nbr,
            });
            return;
        }
        // Issuing a brand-new receipt still uses the legacy print flow, which both
        // creates and renders the receipt.
        const starter = calendar_data.property.company?.receipt_prefix ? calendar_data.property.company?.receipt_prefix + '-' : '';
        const _number = await this.bookingService.getNextValue({ starter: `${starter}${calendar_data.property.aname}` });
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
        this.voidDialogRef?.open({ documentType: FdTypes.Receipt, documentNumber: payment.receipt_nbr, bookingNumber: this.booking.booking_nbr });
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
                title: t('Lcz_Error', { fallback: 'Error' }),
                description: t('Lcz_FailedToCancelPayment', { fallback: 'Failed to cancel payment. Please try again.' }),
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
            h("wa-card", { appearance: "plain", class: "payment-details__card" }, h("ir-payment-summary", { clTransactions: this.clTransactions, isAllServicesAgentOwned: this.isAllServicesAgentOwned, booking: this.booking, agent: this.agent, isBookingCancelled: ['003', '004'].includes(this.booking.status.code), totalCost: financial.gross_cost, balance: financial.due_amount, collected: financial.collected + financial.refunds, currency: currency }), h("ir-booking-guarantee", { booking: this.booking, bookingService: this.bookingService }), !['003', '004'].includes(this.booking.status.code) && this.booking.is_direct && (h("ir-applicable-policies", { propertyId: this.propertyId, booking: this.booking })), this.shouldShowRefundButton() && (h("div", { class: "d-flex mt-1" }, h("ir-custom-button", { variant: "brand", appearance: "outlined", onClickHandler: () => {
                    this.handleAddPayment({ type: 'refund', amount: Math.abs(this.booking.financial.cancelation_penality_as_if_today) });
                } }, t('Lcz_RefundAmount', { fallback: 'Refund %1', params: [formatAmount(currency.symbol, Math.abs(this.booking.financial.cancelation_penality_as_if_today))] })))), this.shouldCancellationButton() && (h("div", { class: "d-flex mt-1" }, h("ir-custom-button", { variant: "brand", appearance: "outlined", onClickHandler: () => {
                    this.handleAddPayment({ type: 'cancellation-penalty', amount: Math.abs(this.booking.financial.cancelation_penality_as_if_today) });
                } }, t('Lcz_ChargeCancellationPenalty', {
                fallback: 'Charge cancellation penalty %1',
                params: [formatAmount(currency.symbol, this.booking.financial.cancelation_penality_as_if_today)],
            }))))),
            isAgentMode(this.agent) && (h("ir-booking-city-ledger", { booking: this.booking, language: this.language, svcCategories: this.svcCategories, folioRows: this.folioRows, isLoading: this.clLoading, error: this.clError })),
            h("ir-payments-folio", { booking: this.booking, payments: (financial.payments || []).filter(p => !p.is_city_ledger), isAddPaymentDisabled: this.isAllServicesAgentOwned, onAddPayment: () => this.handleAddPayment(), onEditPayment: e => this.handleEditPayment(e.detail), onDeletePayment: e => this.handleDeletePayment(e.detail), onIssueReceipt: e => this.handleIssueReceipt(e.detail), onVoidReceipt: e => this.handleVoidReceipt(e.detail) }),
            h("ir-void-document-dialog", { ref: el => (this.voidDialogRef = el), onDocumentVoided: e => this.handleDocumentVoided(e) }),
            h("ir-dialog", { onIrDialogHide: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                }, onIrDialogAfterHide: e => {
                    this.handleCancelModal(e);
                }, ref: el => (this.dialogRef = el), label: t('Lcz_Alert', { fallback: 'Alert' }), lightDismiss: this.modalMode !== 'delete' }, h("p", null, this.modalMode === 'delete' ? t('Lcz_IfDeletedPermantlyLost') : t('Lcz_EnteringAmountGreaterThanDue')), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { size: "m", "data-dialog": "close", variant: "neutral", appearance: "filled" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { loading: this.isLoading, size: "m", onClickHandler: e => this.handleConfirmModal(e), variant: this.modalMode === 'delete' ? 'danger' : 'brand' }, this.modalMode === 'delete' ? t('Lcz_Delete', { fallback: 'Delete' }) : t('Lcz_Confirm', { fallback: 'Confirm' })))),
        ];
    }
};
IrPaymentDetails.style = irPaymentDetailsCss();

const irPaymentFolioCss = () => `.sc-ir-payment-folio-h{display:block;--payment-type-badge-bg:#ff4961;text-align:start}.payment-type-badge.sc-ir-payment-folio{background:var(--payment-type-badge-bg);color:white;padding:0.2rem 0.3rem !important;font-size:12px;border-radius:4px;margin:0;text-transform:capitalize}.credit-badge.sc-ir-payment-folio{--payment-type-badge-bg:#629a4c}.debit-badge.sc-ir-payment-folio{--payment-type-badge-bg:#ff4961}.dropdown-item-payment.sc-ir-payment-folio{display:flex;align-items:center;gap:1rem;box-sizing:border-box;justify-content:space-between}.input-group-text.sc-ir-payment-folio{border-color:#cacfe7 !important}.payment-folio__payment-type-option.sc-ir-payment-folio{display:flex;align-items:center;justify-content:space-between}.payment-folio__form.sc-ir-payment-folio{display:grid;gap:var(--wa-space-m, 1rem)}`;

const DATE_FORMAT$1 = 'YYYY-MM-DD';
const IrPaymentFolio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal");
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
        date: hooks().format(DATE_FORMAT$1),
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
    _id = `ir__folio-form-${v4()}`;
    render() {
        // const isNewPayment = this.folioData?.payment_type?.code === '001' && this.folioData.id === -1;
        return (h("ir-drawer", { key: '46d048d3163289ce6cc46cbc5a1da38182fd51bb', placement: "start", style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: this.payment?.id !== -1 ? t('Lcz_EditFolioEntry', { fallback: 'Edit Folio Entry' }) : t('Lcz_NewFolioEntry', { fallback: 'New Folio Entry' }), open: this.isOpen, onDrawerHide: event => {
                event.stopImmediatePropagation();
                event.stopPropagation();
                this.closeFolio();
            } }, this.isOpen && (h("ir-payment-folio-form", { key: '6037e438f30fe15b21aae9136dd193302076e5da', booking: this.booking, formId: this._id, onLoadingChanged: e => (this.isLoading = e.detail), onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeFolio();
            }, paymentEntries: this.paymentEntries, bookingNumber: this.bookingNumber, payment: this.payment, mode: this.mode })), h("div", { key: 'ba7c0f3f34f71d5ee78314a826dd75749b48c56a', slot: "footer", class: "w-100 d-flex align-items-center", style: { gap: 'var(--wa-space-xs)' } }, h("ir-custom-button", { key: '54869a8ca8aa996274a7b0368ca43408788d33fb', class: "flex-fill", size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral", onClickHandler: () => this.closeFolio() }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'ba6ed592b7132d9b0b0c1c7be0bbea3bc6e65eab', form: this._id, loading: this.isLoading === 'save', class: "flex-fill", size: "m", type: "submit", value: "save",
            // appearance={isNewPayment ? 'outlined' : 'accent'}
            appearance: 'accent', variant: "brand" }, t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrPaymentFolio.style = irPaymentFolioCss();

const irPaymentFolioFormCss = () => `.sc-ir-payment-folio-form-h{display:block;--payment-type-badge-bg:#ff4961;text-align:start}.payment-type-badge.sc-ir-payment-folio-form{background:var(--payment-type-badge-bg);color:white;padding:0.2rem 0.3rem !important;font-size:12px;border-radius:4px;margin:0;text-transform:capitalize}.credit-badge.sc-ir-payment-folio-form{--payment-type-badge-bg:#629a4c}.debit-badge.sc-ir-payment-folio-form{--payment-type-badge-bg:#ff4961}.dropdown-item-payment.sc-ir-payment-folio-form{display:flex;align-items:center;gap:1rem;box-sizing:border-box;justify-content:space-between}.input-group-text.sc-ir-payment-folio-form{border-color:#cacfe7 !important}.payment-folio__payment-type-option.sc-ir-payment-folio-form{display:flex;align-items:center;justify-content:space-between}.payment-folio__form.sc-ir-payment-folio-form{display:grid;gap:var(--wa-space-m, 1rem)}`;

const DATE_FORMAT = 'YYYY-MM-DD';
const requiresPaymentMethodCode = (code) => {
    if (!code) {
        return false;
    }
    return PAYMENT_TYPES_WITH_METHOD.includes(code);
};
const paymentTypeSchema = objectType({
    code: stringType().min(3).max(4),
    description: stringType(),
    operation: unionType([literalType('CR'), literalType('DB')]),
});
const paymentMethodSchema = objectType({
    code: stringType().min(3).max(4),
    description: stringType(),
    operation: stringType().optional().nullable(),
});
const folioBaseSchema = objectType({
    id: numberType().nullable().optional(),
    system_id: numberType().nullable().optional(),
    date: stringType()
        .regex(/^\d{4}-\d{2}-\d{2}$/)
        .refine(dateStr => {
        const date = hooks(dateStr, DATE_FORMAT, true);
        return date.isValid();
    }, 
    // Lazy: this schema is built at module load, before any locale is fetched.
    () => ({ message: t('Lcz_InvalidDate', { fallback: 'Invalid date' }) })),
    amount: coerce.number().min(0),
    reference: stringType().optional().nullable(),
    payment_type: paymentTypeSchema,
    payment_method: paymentMethodSchema.nullable().optional(),
});
const folioValidationSchema = folioBaseSchema.superRefine((data, ctx) => {
    if (requiresPaymentMethodCode(data.payment_type?.code) && !data.payment_method?.code) {
        ctx.addIssue({
            code: ZodIssueCode.custom,
            path: ['payment_method'],
            message: t('Lcz_PaymentMethodRequired', { fallback: 'Payment method is required for this transaction type.' }),
        });
    }
});
let folioFormInstanceCounter = 0;
const IrPaymentFolioForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal");
        this.resetBookingEvt = createEvent(this, "resetBookingEvt");
        this.resetExposedCancellationDueAmount = createEvent(this, "resetExposedCancellationDueAmount");
        this.loadingChanged = createEvent(this, "loadingChanged");
    }
    booking;
    paymentEntries;
    bookingNumber;
    formId;
    payment = {
        date: hooks().format(DATE_FORMAT),
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
    today = hooks().format(DATE_FORMAT);
    paymentService = new PaymentService();
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
                currency: calendar_data.currency,
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
            if (error instanceof ZodError) {
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
        return groups.map((p, idx) => (h(Fragment, null, p.map(pt => (h("wa-option", { key: pt.CODE_NAME, value: pt.CODE_NAME, label: getSetupEntryLabel(pt) }, h("div", { class: 'payment-folio__payment-type-option' }, h("span", null, getSetupEntryLabel(pt)), h("wa-badge", { variant: pt.NOTES === 'CR' ? 'success' : 'danger', style: { fontSize: 'var(--wa-font-size-s)' } }, pt.NOTES === 'CR' ? t('Lcz_Credit') : t('Lcz_Debit')))))), idx !== Object.values(this._paymentTypes).length - 1 && h("wa-divider", null))));
    }
    render() {
        // const isNewPayment = this.folioData?.payment_type?.code === '001' && this.folioData.id === -1;
        return (h("form", { key: '2449ac1e71ccb0f2886a761c8dea8c40a12add19', onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                if (submitter?.value === 'save') {
                    this.savePayment();
                }
            }, class: "payment-folio__form", id: this.formId }, h("ir-date-select", { key: '76519be9224b161e8c4d4c23a0548b7c907b1e75', id: this.controlIds.date, label: t('Lcz_DateLabel', { fallback: 'Date' }), "aria-invalid": this.errors?.date && !this.folioData?.date ? 'true' : 'false', "data-testid": "pickup_date", onDateChanged: evt => {
                this.updateFolioData({ date: evt.detail.start?.format(DATE_FORMAT) });
            }, minDate: hooks().add(-2, 'months').format('YYYY-MM-DD'), emitEmptyDate: true, maxDate: this.today, date: this.folioData?.date }), h("ir-validator", { key: '3c3a1fdfab3f8b6daf4906186485286d7f1e98a0', value: this.folioData?.payment_type?.code, autovalidate: this.autoValidate, schema: paymentTypeSchema.shape.code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide" }, h("wa-select", { key: '31dac88cf243b6fba8b2996a3ae77e3dc5b19ea5', id: this.controlIds.transactionType, size: "s", "onwa-hide": event => this.stopEventPropagation(event), "onwa-show": event => this.stopEventPropagation(event), placeholder: t('Lcz_SelectPlaceholder', { fallback: 'Select...' }), label: t('Lcz_TransactionType', { fallback: 'Transaction Type' }), defaultValue: this.folioData?.payment_type?.code, value: this.folioData?.payment_type?.code, disabled: this.mode === 'payment-action', onchange: event => {
                this.stopEventPropagation(event);
                this.handleDropdownChange(event.target.value);
            } }, h("wa-option", { key: '4985dac51008bbff360ca127eba8dea9d82e14b7', value: "" }, t('Lcz_SelectPlaceholder', { fallback: 'Select...' })), this.renderDropdownItems())), this.requiresPaymentMethod(this.folioData?.payment_type?.code) && (h("ir-validator", { key: '7a7a40fa24f06c52291f2b66f5edfb2a2150d053', value: this.folioData?.payment_method?.code ?? '', autovalidate: this.autoValidate, schema: paymentMethodSchema.shape.code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide" }, h("wa-select", { key: '1e24682d11be4771aced31678ebc1ccaa88a387d', id: this.controlIds.paymentMethod, size: "s", label: this.folioData.payment_type?.code === '001' ? t('Lcz_PaymentMethod', { fallback: 'Payment Method' }) : t('Lcz_RefundMethodLabel', { fallback: 'Refund method' }), "onwa-show": event => this.stopEventPropagation(event), "onwa-hide": event => this.stopEventPropagation(event), defaultValue: this.folioData?.payment_method?.code, value: this.folioData?.payment_method?.code ?? '', onchange: event => {
                this.stopEventPropagation(event);
                this.handlePaymentMethodDropdownChange(event.target.value);
            } }, h("wa-option", { key: '35cde3dd9a0bc11468f10a01be31c910aa6bba35', value: "" }, t('Lcz_SelectPlaceholder', { fallback: 'Select...' })), this.paymentEntries?.methods?.map(pt => {
            return (h("wa-option", { key: pt.CODE_NAME, label: getSetupEntryLabel(pt), value: pt.CODE_NAME }, getSetupEntryLabel(pt)));
        })))), h("ir-validator", { key: '9bb088bbcd4584b072894c83093bebfb1e91e159', value: this.folioData?.amount?.toString() ?? undefined, autovalidate: this.autoValidate, schema: folioBaseSchema.shape.amount, valueEvent: "text-change input input-change", blurEvent: "input-blur" }, h("ir-input", { key: 'bfc18734a920a85dd8ffda851b69480d8e18a45d', id: this.controlIds.amount, "aria-invalid": String(!!this.errors?.amount), value: this.folioData?.amount?.toString() ?? '', label: t('Lcz_Amount', { fallback: 'Amount' }), mask: "price", min: 0, "onText-change": e => this.updateFolioData({ amount: !e.detail ? undefined : Number(e.detail) }) }, h("span", { key: '4c2d6fbb97811f5c35753b87801a8432f5defd32', slot: "start" }, calendar_data.currency.symbol))), h("ir-validator", { key: '8d7ab31111b29bfede1d3d0eed9fdfb735db7140', value: this.folioData?.reference ?? '', autovalidate: this.autoValidate, schema: folioBaseSchema.shape.reference, valueEvent: "text-change input input-change", blurEvent: "input-blur" }, h("ir-input", { key: '0681cd7cbbfbb347bb7abab975ec6582221d9998', id: this.controlIds.reference, value: this.folioData?.reference ?? '', label: t('Lcz_Reference', { fallback: 'Reference' }), maxlength: 50, "onText-change": e => this.updateFolioData({ reference: e.detail ?? '' }) }))));
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
        registerInstance(this, hostRef);
        this.editPayment = createEvent(this, "editPayment");
        this.deletePayment = createEvent(this, "deletePayment");
        this.issueReceipt = createEvent(this, "issueReceipt");
        this.voidReceipt = createEvent(this, "voidReceipt");
    }
    payment;
    editPayment;
    deletePayment;
    issueReceipt;
    voidReceipt;
    _id = v4();
    render() {
        const isCredit = this.payment.payment_type.operation === 'CR';
        const paymentDescription = (PAYMENT_TYPES_WITH_METHOD.includes(this.payment.payment_type?.code)
            ? `${this.payment.payment_type?.description}: ${this.payment.payment_method.description}`
            : this.payment.payment_type.description) ?? this.payment.designation;
        const canEditOrDelete = ![PayTypes.Payment, PayTypes.CreditReceipt, PayTypes.Refund].includes(this.payment.payment_type?.code);
        const canPrint = [PayTypes.Payment, PayTypes.CreditReceipt, PayTypes.Refund].includes(this.payment.payment_type.code);
        return (h("div", { key: '10444e791bd236943a64a50c70aed0ff84472a93', class: "payment-item__payment-item" }, h("div", { key: 'a2a8b6716cc73354a92183ac8bc3225020f0f142', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'c585faaaf9cfae59964f090241b491a5d15c78a6', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '2035ae6b7655aa7415417d8e12877b2f8d1c3296', class: "payment-item__payment-date" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("p", { key: 'f22fbfbc7aa2355035010113945ad65226261871', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'fdd22ceaa6dc976b45ec1c3dd9fd296125a3cee0', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '9190e66e9ab0a39fc684afdb3a43d1f8271b299f', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'fa238954c5595ae0df49e30ee4c7656a39257d86', class: "payment-item__payment-toolbar" }, h("p", { key: '3c29f94e44d04cc0eb8b6bfca26233048d2d3e33', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '4a81123ccc640553f31e23c00b16430c067c8486', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'd02490937c17aaae9dbcb8d3a2bc538f7b8d72b8', class: "payment-item__payment-actions" }, h("div", { key: '63da96dc896bf426848b7b90c270e980ac14bf30', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '391efbcdd9c1e40c12a68375724125fe7ba236d3', for: this._id }, h("span", { key: '744ffdf8f9d0a4f9d4b4b201d2e1c00d542ba9a1', class: "payment-item__tooltip-label" }, t('Lcz_User', { fallback: 'user' })), ': ', this.payment.time_stamp.user), h("wa-icon", { key: 'cb401c74603cc46753a7bad9108734f10ed49550', name: "user", id: this._id }), h("wa-dropdown", { key: '1d3c11b29d696e15f4a8b41ec69d2d1e5525b677', "onwa-hide": e => {
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
            } }, h("wa-button", { key: '3768e5f73e0c65d5cc6058dbb35b4e867312aaff', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '82633b4efa5f987f3bf82e83b35b89603f211965', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (h("wa-dropdown-item", { key: 'd21a13cb099c528cee51ce84391d20eaf00581f2', value: "edit" }, t('Lcz_Edit', { fallback: 'Edit' }))), canPrint && (h("wa-dropdown-item", { key: '85d3bacc634383d320147b514d3ff0cd9c60738c', value: "receipt" }, t('Lcz_Print', { fallback: 'Print' }))), canEditOrDelete && h("wa-divider", { key: '7a291d0082882474cf5c1d4126b51a3b6301e2f1' }), this.payment?.payment_type?.code === PayTypes.Payment && this.payment.payment_status?.code === PayStatus.Normal && (h("wa-dropdown-item", { key: '9fbd600a061030a999ee52d00270da7773924101', variant: "danger", value: "void-receipt" }, t('Lcz_VoidWithCreditReceipt', { fallback: 'Void with credit receipt' }))), canEditOrDelete && (h("wa-dropdown-item", { key: '58d8267eb59d9339517683d61a77abf3ade8f2fa', value: "delete", variant: "danger" }, t('Lcz_Delete', { fallback: 'Delete' }))))))), this.payment.reference && h("p", { key: 'd721d1e76e0c8279cde195a6634a36cf3f958f40', class: "payment-item__payment-reference" }, this.payment?.reference)));
    }
};
IrPaymentItem.style = irPaymentItemCss();

const irPaymentSummaryCss = () => `.sc-ir-payment-summary-h{display:block;font-family:var(--wa-font-family-body);border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);padding-bottom:var(--wa-space-l);margin-bottom:var(--wa-space-l)}.ps-host--analytics.sc-ir-payment-summary-h{border-bottom:none;margin-bottom:0}.ps-layout.sc-ir-payment-summary{display:flex;flex-direction:column;gap:0.357rem}.ps-analytics.sc-ir-payment-summary{position:relative;margin-top:var(--wa-space-m);display:flex;align-items:center;justify-content:center}.ps-analytics.sc-ir-payment-summary::before{content:'';position:absolute;top:50%;inset-inline-start:0;inset-inline-end:0;border-top:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.ps-analytics.sc-ir-payment-summary ir-payment-analytics.sc-ir-payment-summary{position:relative;z-index:1}.ps-cols.sc-ir-payment-summary{display:flex;align-items:flex-start;gap:0}.ps-col.sc-ir-payment-summary{flex:1;min-width:0;display:flex;flex-direction:column;gap:0.357rem}.ps-col--bordered.sc-ir-payment-summary{padding-inline-start:0.857rem;margin-inline-start:0.857rem;border-inline-start:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.ps-section-title.sc-ir-payment-summary{font-weight:600;color:var(--wa-color-text-quiet, #9ca3af);white-space:nowrap}.ps-stacked.sc-ir-payment-summary{display:flex;flex-direction:column;gap:0.071rem;min-width:0}.ps-stacked__label.sc-ir-payment-summary{color:var(--wa-color-text-quiet, #9ca3af)}.ps-stacked__value.sc-ir-payment-summary{font-weight:700;color:var(--wa-color-text-normal, #111827);min-width:0;overflow-wrap:break-word}.ps-stacked__value--danger.sc-ir-payment-summary{color:var(--wa-color-danger-text-loud, #dc2626)}.ps-row.sc-ir-payment-summary{display:flex;align-items:baseline;justify-content:space-between;gap:0.571rem;min-width:0}.ps-row__label.sc-ir-payment-summary{color:var(--wa-color-text-quiet, #6b7280);white-space:nowrap;flex-shrink:0}.ps-row__value.sc-ir-payment-summary{font-weight:700;color:var(--wa-color-text-normal, #111827);text-align:end;min-width:0;overflow-wrap:break-word}.ps-row__value--danger.sc-ir-payment-summary{color:var(--wa-color-danger-text-loud, #dc2626)}.ps-grand-total.sc-ir-payment-summary{display:flex;align-items:baseline;justify-content:space-between;gap:0.571rem;padding-top:0.429rem;margin-top:0.143rem;border-top:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);min-width:0}.ps-grand-total__label.sc-ir-payment-summary{font-weight:700;color:var(--wa-color-text-normal, #111827);white-space:nowrap;flex-shrink:0}.ps-grand-total__value.sc-ir-payment-summary{font-weight:700;color:var(--wa-color-text-normal, #111827);text-align:end;min-width:0;overflow-wrap:break-word}@media (min-width: 1280px){.ps-stacked.sc-ir-payment-summary{display:flex;flex-direction:row;gap:0.5rem;align-items:center}.ps-stacked.--stacked-right.sc-ir-payment-summary{justify-content:flex-end}}`;

const IrPaymentSummary = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        if (isAgentMode(this.agent)) {
            return (h("div", { class: "ps-layout" }, h("div", { class: "ps-cols" }, !this.isAllServicesAgentOwned && (h("div", { class: "ps-col " }, h("div", { class: "ps-stacked" }, h("span", { class: "ps-stacked__label" }, t('Lcz_GuestBalance', { fallback: 'Guest Balance' }), ":"), h("span", { class: "ps-stacked__value ps-stacked__value--danger" }, formatAmount(this.currency.symbol, this.booking?.guest_financial?.due_amount))), h("div", { class: "ps-stacked " }, h("span", { class: "ps-stacked__label" }, t('Lcz_GuestCollected', { fallback: 'Guest Collected:' })), h("span", { class: "ps-stacked__value" }, formatAmount(this.currency.symbol, this.booking.guest_financial?.collected))))), h("div", { class: "ps-col" }, h("div", { class: "ps-stacked --stacked-right" }, h("span", { class: "ps-stacked__label ps-stacked__value" }, t('Lcz_BookingTotal', { fallback: 'Booking Total:' })), h("span", { class: "ps-stacked__value" }, formatAmount(this.currency.symbol, this.bookingTotal ?? 0))), h("div", { class: "ps-stacked --stacked-right" }, h("span", { class: "ps-stacked__label" }, t('Lcz_AgentTotal', { fallback: 'Agent Total:' })), h("span", { class: "ps-stacked__value" }, formatAmount(this.currency.symbol, this.agentTotal)))))));
        }
        const showAnalytics = !!this.booking?.extras?.find(e => e?.key === 'DP_OPTIM_BASE_GROSS')?.value;
        return (h(Host, { class: { 'ps-host--analytics': showAnalytics } }, h("div", { class: "ps-layout" }, h("div", { class: "ps-cols" }, h("div", { class: "ps-col " }, h("div", { class: "ps-stacked " }, h("span", { class: "ps-stacked__label" }, t('Lcz_Balance'), ":"), h("span", { class: "ps-stacked__value ps-stacked__value--danger" }, formatAmount(this.currency.symbol, this.balance))), h("div", { class: "ps-stacked" }, h("span", { class: "ps-stacked__label" }, t('Lcz_Collected'), ":"), h("span", { class: "ps-stacked__value" }, formatAmount(this.currency.symbol, this.collected)))), h("div", { class: "ps-col" }, this.shouldShowTotalCost() && (h("div", { class: "ps-stacked --stacked-right" }, h("span", { class: "ps-stacked__label ps-stacked__value" }, t('Lcz_TotalCost')), h("span", { class: "ps-stacked__value" }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { class: "ps-stacked --stacked-right" }, h("span", { class: "ps-stacked__label ps-stacked__value" }, t('Lcz_GrandTotalLabel', { fallback: 'Grand Total:' })), h("span", { class: "ps-stacked__value" }, formatAmount(this.currency.symbol, this.bookingTotal))), h("div", { class: "ps-stacked --stacked-right" }))), showAnalytics && (h("div", { class: "ps-analytics" }, h("ir-payment-analytics", { booking: this.booking }))))));
    }
};
IrPaymentSummary.style = irPaymentSummaryCss();

const irPaymentsFolioCss = () => `.sc-ir-payments-folio-h{display:block}.payment-divider.sc-ir-payments-folio{margin:0;padding:0}.payments-container.sc-ir-payments-folio{background-color:var(--wa-color-surface-default)}.payments-container.sc-ir-payments-folio::part(body),.payments-container.sc-ir-payments-folio [part~="body"]{padding:0;padding-bottom:calc(1.5rem - var(--wa-space-s));padding-top:calc(1.5rem - var(--wa-space-s))}`;

const IrPaymentsFolio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.addPayment = createEvent(this, "addPayment");
        this.editPayment = createEvent(this, "editPayment");
        this.deletePayment = createEvent(this, "deletePayment");
        this.issueReceipt = createEvent(this, "issueReceipt");
        this.voidReceipt = createEvent(this, "voidReceipt");
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
    renderPaymentItem(payment, index) {
        if (payment.is_city_ledger) {
            return null;
        }
        return [
            h("ir-payment-item", { key: payment.id, payment: payment, onDeletePayment: e => {
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
            index < this.payments.length - 1 && h("wa-divider", { class: "payment-divider" }),
        ];
    }
    renderEmptyState() {
        return h("ir-empty-state", { showIcon: false });
    }
    render() {
        return (h("wa-card", { key: '3416cb7f328f7753c22e8febdbde138e790f41d1', appearance: "plain", class: " payments-container" }, h("div", { key: '3e88505042f8041bd2675721ac7e57cdc7f09f1a', slot: "header", class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("p", { key: '2346dbe9fcac51d34c9666d372871d60eca0191c', class: "font-size-large p-0 m-0" }, t('Lcz_GuestFolio', { fallback: 'Guest Folio' })), h(HelpDocButton, { key: 'f99e9203d0f0e10734d1e8137c82e19734eebfa6', message: t('Lcz_HelpTooltip', { fallback: 'Help' }), href: "https://help.igloorooms.com/extranet/booking-details/guest-folio" })), !this.isAddPaymentDisabled && h("wa-tooltip", { key: '921e225a55b41fb47bbd6ec75f986ed3ef8f82dc', for: "create-payment" }, t('Lcz_AddFolioEntry', { fallback: 'Add folio entry' })), h("ir-custom-button", { key: 'c5019e9cbaefab68247e9631cdfb2c796c5e135c', disabled: this.isAddPaymentDisabled, slot: "header-actions", id: "create-payment", size: "s", variant: "neutral", appearance: "plain", onClickHandler: this.handleAddPayment }, h("wa-icon", { key: 'f9a656ac8bbec9b7ee0301fc5026cef92636e796', name: "plus", style: { fontSize: '1rem' } })), this.hasPayments() ? this.payments.map((payment, index) => this.renderPaymentItem(payment, index)) : this.renderEmptyState()));
    }
};
IrPaymentsFolio.style = irPaymentsFolioCss();

const irPickupCss = () => ``;

const IrPickup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal");
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
    _id = `pickup-form-${v4()}`;
    render() {
        return (h("ir-drawer", { key: '24bf12ead671fb426d384d927674f86e1233cb08', style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: t('Lcz_Pickup', { fallback: 'Pickup' }), open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && (h("ir-pickup-form", { key: 'f3789de2babcf34267266e6160f9bbc4592aa89f', booking: this.booking, agent: this.agent, onCanSubmitPickupChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.canSubmitPickup = e.detail;
            }, defaultPickupData: this.defaultPickupData, numberOfPersons: this.numberOfPersons, bookingNumber: this.bookingNumber, bookingDates: this.bookingDates, onLoadingChange: e => (this.isLoading = e.detail), onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            }, formId: this._id })), h("div", { key: 'ac9df341ea3b08145fbcb11d97d6e21d9b01275f', slot: "footer", class: 'ir__drawer-footer' }, h("ir-custom-button", { key: 'e04803af5412debe65a325482201b68fb5d604dc', class: `flex-fill`, size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), this.canSubmitPickup && (h("ir-custom-button", { key: '6b904b0b82689a338b6eb3d5980ea9e56140cd51', type: "submit", loading: this.isLoading, form: this._id, size: "m", class: `flex-fill`, variant: "brand" }, t('Lcz_Save', { fallback: 'Save' }))))));
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
            await axios.post(`/Do_Pickup`, {
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
        const arrival_time = data.hour && data.minute ? renderTime(data.hour) + ':' + renderTime(data.minute) : '';
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
        calendar_data.pickup_service.allowed_options.forEach(option => {
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
        const arrivalDateSchema = stringType()
            .min(1, { message: t('Lcz_ArrivalDateRequired', { fallback: 'Arrival date is required.' }) })
            .regex(/^\d{4}-\d{2}-\d{2}$/, { message: t('Lcz_InvalidDateFormatYmd', { fallback: 'Invalid date format, expected YYYY-MM-DD.' }) });
        return objectType({
            location: preprocessType(asNumber, numberType().int()).refine(value => (allowRemoval ? value === -1 || value > 0 : value > 0), {
                message: t('Lcz_PleaseSelectPickupOption', { fallback: 'Please select a pickup option.' }),
            }),
            arrival_date: preprocessType(value => (typeof value === 'string' ? value : (value ?? '')), arrivalDateSchema)
                .refine(dateStr => {
                const date = hooks(dateStr, 'YYYY-MM-DD', true);
                const min = hooks(minDate, 'YYYY-MM-DD', true);
                const max = hooks(maxDate, 'YYYY-MM-DD', true);
                return date.isValid() && min.isValid() && max.isValid() && date.isBetween(min, max, undefined, '[]');
            }, {
                message: t('Lcz_ArrivalDateMustBeBetween', {
                    fallback: 'Arrival date must be between %1 and %2.',
                    params: [formatDate(minDate, 'MMM DD, YYYY'), formatDate(maxDate, 'MMM DD, YYYY')],
                }),
            }),
            arrival_time: stringType()
                .regex(/^\d{2}:\d{2}$/, { message: t('Lcz_InvalidTimeFormatHhMm', { fallback: 'Invalid time format. Expected HH:MM' }) })
                .refine(time => {
                const [hours, minutes] = time.split(':').map(Number);
                return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
            }, { message: t('Lcz_TimeValuesOutOfRange', { fallback: 'Time values are out of range' }) }),
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
            flight_details: preprocessType(value => (typeof value === 'string' ? value : ''), stringType().nonempty({ message: t('Lcz_FlightDetailsRequired', { fallback: 'Flight details cannot be empty.' }) })),
            vehicle_type_code: preprocessType(value => (typeof value === 'string' ? value : ''), stringType().nonempty({ message: t('Lcz_VehicleTypeRequired', { fallback: 'Vehicle type code cannot be empty.' }) })),
            number_of_vehicles: preprocessType(asNumber, numberType()
                .int()
                .min(1, { message: t('Lcz_AtLeastOneVehicleRequired', { fallback: 'At least one vehicle is required.' }) })),
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
        const getCodeDescription = calendar_data.pickup_service.allowed_pricing_models.find(model => model.code === code);
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
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal");
        this.canSubmitPickupChange = createEvent(this, "canSubmitPickupChange");
        this.loadingChange = createEvent(this, "loadingChange");
        this.resetBookingEvt = createEvent(this, "resetBookingEvt");
    }
    get el() { return getElement(this); }
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
            this.allowedOptionsByLocation = calendar_data.pickup_service.allowed_options.filter(option => option.location.id === transformedData.location);
            this.pickupData = { ...transformedData };
            this.assignee = transformedData.agent ? 'agent' : 'guest';
        }
        else if (isAgentMode(this.agent)) {
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
        this.allowedOptionsByLocation = calendar_data.pickup_service.allowed_options.filter(option => option.location.id === numericValue);
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
        const locationChoice = calendar_data.pickup_service.allowed_options.find(option => option.location.id === this.pickupData.location && option.vehicle.code === value);
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
        return (h("form", { key: '486cf1a745af7d3cdf3c8e4952fd6fdf119adb15', id: this.formId, class: "pickup__container", onSubmit: async (e) => {
                e.preventDefault();
                await this.savePickup();
            } }, h("ir-validator", { key: 'f98828ab28d2a085bba63b4fcd91e23c8e817df8', schema: this.pickupSchema.shape.location, autovalidate: this.autoValidate, value: this.pickupData.location, valueEvent: "change wa-change select-change", blurEvent: "wa-hide blur" }, h("wa-select", { key: '76ed4e4883a21ba6f5158b70a7b87ba23dd2b155', size: "s", onchange: e => this.handleLocationChange(e.target.value), defaultValue: this.pickupData.location === -1 ? '' : this.pickupData.location?.toString(), value: this.pickupData.location === -1 ? '' : this.pickupData.location?.toString() }, h("wa-option", { key: 'aee57c7ad64b933c256b3ac41fd112c161718966', value: "" }, t('Lcz_Pickup_NoThankYou')), this.pickupService.getAvailableLocations(t('Lcz_Pickup_YesFrom')).map(option => (h("wa-option", { key: `pickup-location-${option.value}`, value: option.value?.toString() }, option.text))))), this.shouldRenderDetails && (h("div", { key: 'da38bbfb4eaa7e63858ad43da5fb16693851da47', class: "pickup__container", "data-testid": "pickup_body" }, h("ir-validator", { key: '7e3af2cff48a98c7df17f7f5c22274baa1106a6f', schema: this.pickupSchema.shape.arrival_date, autovalidate: this.autoValidate, value: this.pickupData.arrival_date ?? '', valueEvent: "dateChanged", blurEvent: "datePickerBlur blur" }, h("ir-date-select", { key: '414c9e0b67c7972e47c799a128c9d8b49d534e36', date: this.pickupData.arrival_date, minDate: this.bookingDates.from, maxDate: this.bookingDates?.to, emitEmptyDate: true, onDateChanged: evt => {
                this.updatePickupData('arrival_date', evt.detail.start?.format('YYYY-MM-DD') ?? null);
            }, label: t('Lcz_ArrivalDate') })), h("ir-validator", { key: '520fbecafd31e085d2d03e4fb83f022203898f10', schema: this.pickupSchema.shape.arrival_time, autovalidate: this.autoValidate, value: this.pickupData.arrival_time, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { key: 'c240ae816853f0c8b11b8e7095eb6e944793bff7', value: this.pickupData.arrival_time, "onText-change": e => {
                this.updatePickupData('arrival_time', e.detail);
            }, mask: 'time', label: t('Lcz_Time') })), h("ir-validator", { key: 'f7b0ceae46551c7f4841b66e590744bea4a05947', schema: this.pickupSchema.shape.flight_details, autovalidate: this.autoValidate, value: this.pickupData.flight_details, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { key: 'ac7f7b279d2c3f7e76679a8247ba93068269c08a', "onText-change": e => this.updatePickupData('flight_details', e.detail), value: this.pickupData.flight_details, label: t('Lcz_FlightDetails') })), h("ir-validator", { key: 'f2fcb40e2f151d4580bbf51161b971977ca10b4d', schema: this.pickupSchema.shape.vehicle_type_code, autovalidate: this.autoValidate, value: this.pickupData.vehicle_type_code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide blur" }, h("wa-select", { key: '525c4f0f039ecb8e996312ad430c72446675f314', size: "s", onchange: e => this.handleVehicleTypeChange(e.target.value), value: this.pickupData.vehicle_type_code, defaultValue: this.pickupData.vehicle_type_code }, this.allowedOptionsByLocation.map(option => (h("wa-option", { value: option.vehicle.code, key: option.vehicle.code }, option.vehicle.description))))), h("ir-validator", { key: 'f7f9ed729cb83f3b90c1be6f1f4175fd3e85bdf5', schema: this.pickupSchema.shape.number_of_vehicles, autovalidate: this.autoValidate, value: this.pickupData.number_of_vehicles, valueEvent: "change wa-change select-change", blurEvent: "wa-hide blur" }, h("wa-select", { key: '0598d625e44c7cf813d3c23d76741da80b8b9307', size: "s", defaultValue: this.pickupData.number_of_vehicles?.toString(), value: this.pickupData.number_of_vehicles?.toString(), label: t('Lcz_NbrOfVehicles'), onchange: e => {
                this.handleVehicleQuantityChange(Number(e.target.value));
            } }, this.vehicleCapacity.map(i => (h("wa-option", { key: `capacity_${i}`, value: i.toString() }, i))))), h("ir-input", { key: '458fcef9a7628235abb2492cf8424e024723179f', mask: 'price', label: `${t('Lcz_DueUponBooking')}`, "onText-change": e => {
                this.pickupData = {
                    ...this.pickupData,
                    due_upon_booking: e.detail,
                };
            }, value: this.pickupData.due_upon_booking }, h("span", { key: '9c4df03be94c19d0fe25db69f31f24b95a5b13a5', slot: "start" }, this.pickupData.currency?.symbol)), isAgentMode(this.agent) && (h("ir-service-assignee-select", { key: '19a7fa7cfc2d74f569e0385c06715546241ede26', agent: this.booking.agent, assigneeType: this.assignee, onAssignmentChange: (e) => {
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
        registerInstance(this, hostRef);
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
        if (!calendar_data.pickup_service.is_enabled || !this.booking.is_editable) {
            return null;
        }
        const { pickup_info } = this.booking;
        const isAgent = isAgentMode(this.agent);
        const tx = this.matchedTx;
        const statusTag = tx ? (h("ir-cl-status-tag", { style: { marginInlineStart: '0.5rem' }, transaction: { _rowId: '', ...mapClTxToFolioRow(tx), balance: 0 }, size: "extra-small" })) : null;
        return (h(Host, null, h("wa-card", { appearance: "plain", class: "pickup-view__card" }, h("p", { slot: "header", class: 'font-size-large p-0 m-0' }, t('Lcz_Pickup', { fallback: 'Pickup' })), h("wa-tooltip", { for: "pickup" }, t('Lcz_EditAddPickupTooltip', { fallback: '%1 pickup', params: [pickup_info ? t('Lcz_Edit', { fallback: 'Edit' }) : t('Lcz_Add', { fallback: 'Add' })] })), h("ir-custom-button", { slot: "header-actions", id: "pickup", size: "s", appearance: "plain", variant: "neutral" }, h("wa-icon", { name: "edit", style: { fontSize: '1rem' } })), pickup_info ? (h(Fragment, null, isAgent && (h("p", { class: `service-group__label${pickup_info.agent ? ' --agent' : ''}` }, pickup_info.agent ? pickup_info.agent.name : t('Lcz_Guest', { fallback: 'Guest' }), h("span", null, t('Lcz_Folio', { fallback: 'Folio' })))), h("div", { class: `pickup-body${isAgent ? (pickup_info.agent ? ' pickup-body--agent' : ' pickup-body--guest') : ''}` }, h("div", { class: "pickup-row pickup-row--header" }, h("span", { class: "pickup-datetime" }, formatDate(pickup_info.date, 'MMM DD, YYYY'), pickup_info.hour && pickup_info.minute && h("span", { class: "pickup-time" }, " \u00B7 ", _formatTime(pickup_info.hour.toString(), pickup_info.minute.toString())), statusTag), h("strong", { class: "pickup-price" }, formatAmount(pickup_info.currency.symbol, pickup_info.total))), h("dl", { class: "pickup-dl" }, h("div", { class: "pickup-dl__row" }, h("dt", null, t('Lcz_FlightDetails')), h("dd", null, pickup_info.details)), h("div", { class: "pickup-dl__row" }, h("dt", null, t('Lcz_Vehicle', { fallback: 'Vehicle' })), h("dd", null, pickup_info.selected_option.vehicle.description)), h("div", { class: "pickup-dl__row" }, h("dt", null, t('Lcz_NbrOfVehicles')), h("dd", null, pickup_info.nbr_of_units))), (calendar_data.pickup_service.pickup_instruction?.description || calendar_data.pickup_service.pickup_cancelation_prepayment?.description) && (h("p", { class: "pickup-note" }, calendar_data.pickup_service.pickup_instruction?.description, calendar_data.pickup_service.pickup_cancelation_prepayment?.description))))) : (h("ir-empty-state", { showIcon: false })))));
    }
};
IrPickupView.style = irPickupViewCss();

const irPmsLogsCss = () => `.sc-ir-pms-logs-h{display:block;font-family:var(--wa-font-family-body);font-weight:var(--wa-font-weight-normal)}.dialog-container-height.sc-ir-pms-logs{height:4rem}.list-title.sc-ir-pms-logs{margin:0;padding:0;font-weight:600;white-space:nowrap;display:inline}.list-item.sc-ir-pms-logs{margin:0;padding:0;font-size:14px;margin-inline-start:5px;width:fit-content}.list-item.green.sc-ir-pms-logs{color:var(--wa-color-success-fill-loud);font-weight:600}.list-item.red.sc-ir-pms-logs{color:var(--wa-color-danger-fill-loud);font-weight:600}`;

const IrPmsLogs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    bookingNumber;
    pmsLogs;
    error;
    bookingService = new BookingService();
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
        return (h("div", { key: 'cc88e640731372331786baa58f1926173e4996d2', class: "" }, isRequestPending('/Get_Exposed_PMS_Logs') ? (h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, h("ir-spinner", null))) : (h("div", { class: 'dialog-container-height' }, h("div", { class: "d-flex align-items-center ", style: { paddingBottom: '0.5rem' } }, h("p", { class: "list-title p-0 m-0" }, t('Lcz_SentAt'), ":"), this.pmsLogs?.sent_date ? (h("p", { class: "list-item" }, this.pmsLogs?.sent_date, " ", _formatTime(this.pmsLogs?.sent_hour.toString(), this.pmsLogs?.sent_minute.toString()))) : (h("p", { class: `list-item ${this.pmsLogs?.sent_date ? 'green' : 'red'}` }, this.pmsLogs?.is_acknowledged ? t('Lcz_YES') : t('Lcz_NO', { fallback: 'NO' })))), h("div", { class: "d-flex align-items-center p-0 m-0" }, h("p", { class: "list-title p-0 m-0" }, t('Lcz_Acknowledged')), h("div", { class: "d-flex align-items-center", style: { gap: '1rem' } }, h("p", { class: `list-item  ${this.pmsLogs?.is_acknowledged ? 'green' : 'red'}` }, this.pmsLogs?.is_acknowledged ? t('Lcz_YES') : t('Lcz_NO', { fallback: 'NO' })), !this.pmsLogs?.is_acknowledged && this.pmsLogs?.revision_id && this.userTypeCode === '1' && (h("ir-custom-button", { variant: "brand", loading: isRequestPending('/Ack_Exposed_Revision'), onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const data = await this.bookingService.ackExposedRevision({
                    revision_id: this.pmsLogs?.revision_id,
                });
                this.error = data.ExceptionMsg;
            } }, t('Lcz_Acknowledge', { fallback: 'Acknowledge' }))))), this.error && (h("wa-callout", { size: "s", appearance: "filled-outlined", variant: "danger" }, this.error))))));
    }
};
IrPmsLogs.style = irPmsLogsCss();

const irReservationInformationCss = () => `.sc-ir-reservation-information-h{display:block}.reservation-information__card.sc-ir-reservation-information{background-color:var(--wa-color-surface-default)}.reservation-information.sc-ir-reservation-information{display:flex;flex-direction:column;gap:0.5rem !important}.reservation__info-guest-origins.sc-ir-reservation-information{display:flex;align-items:center;gap:1.5rem}.reservation-information__property-name.sc-ir-reservation-information{margin:0;font-weight:600;margin-bottom:1rem}.reservation-information__row.sc-ir-reservation-information{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.reservation-information.sc-ir-reservation-information>ir-label.sc-ir-reservation-information,.reservation-information.sc-ir-reservation-information>ota-label.sc-ir-reservation-information,.reservation-information__row.sc-ir-reservation-information ir-label.sc-ir-reservation-information{display:flex;align-items:center}.reservation-information__channel-notes.sc-ir-reservation-information{flex-direction:column;align-items:flex-start !important}.ir-ms-1.sc-ir-reservation-information{margin-inline-start:0.25rem}`;

const IrReservationInformation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.openSidebar = createEvent(this, "openSidebar");
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
        const privateNote = getPrivateNote(this.booking.extras);
        return (h("wa-card", { key: 'd5b328d3ca1124cb851d20ae57721fcae0499f17', appearance: "plain", class: "reservation-information__card" }, h("div", { key: '3627296aafe60b81bdd8fc97b58ea6b81c64656b', class: "reservation-information", ref: el => (this.reservationInformationEl = el) }, h("p", { key: '86baa9c90989bb5e1983e97e44b354818ee516aa', class: "reservation-information__property-name" }, this.booking.property.name || ''), h("ir-label", { key: 'f2e03d4fa6be3b10d95d2c1a36a37d7ac5e4478a', renderContentAsHtml: true, labelText: `${t('Lcz_BookedOn', { fallback: 'Booked on' })}:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("div", { key: 'ce5fa5713a7becf79e141eac756a7f4115c63f42', class: "reservation-information__row" }, h("ir-label", { key: '673f30a245c05bb6d201c820821131bf2624bbe6', labelText: `${t('Lcz_BookedBy', { fallback: 'Booked by' })}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, this.booking.guest?.nbr_confirmed_bookings > 1 && !this.booking.agent && (h("div", { key: 'cb359d0c69de8095a92778109673fe57aac4bd0a', class: 'm-0 p-0 ', slot: "prefix" }, h("wa-tooltip", { key: 'f413f0b71e3cea11c7310106b3c4a85588ef025b', for: "guests_nbr_confirmed_bookings" }, `${t('Lcz_BookingsNbr', { fallback: '%1 bookings' })}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString())), h("div", { key: 'ddbd84e744ad163034d6f54ef218dca3a44ea0a3', style: { color: '#FB0AAD' }, id: "guests_nbr_confirmed_bookings" }, h("span", { key: 'cdba77067675019ecb34c884ec71ba5ee476fc68' }, " ", this.booking.guest.nbr_confirmed_bookings), h("wa-icon", { key: '76b61ef61880d8eb8de20a18c09560edee8a3ced', name: "heart", style: { color: '#FB0AAD' } }))))), h("wa-tooltip", { key: '32d7dd04d7c2aad832b3a18c640bcb72b3275c0b', for: `edit_guest-details` }, t('Lcz_EditGuestDetails', { fallback: 'Edit guest details' })), h("ir-custom-button", { key: '83df4e23964ec3e77d0c4d05e8b2c4a35fdab3c1', iconBtn: true, id: `edit_guest-details`, onClickHandler: e => this.handleEditClick(e, 'guest'), appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '06f4df7bcc4788f333fc7a42ffad4f990381cef4', name: "edit", label: t('Lcz_EditGuestDetails', { fallback: 'Edit guest details' }), style: { fontSize: '1rem' } }))), !this.booking.agent && (h("div", { key: '3db3ed4a52974c143a9898fb05c355bbd321f946', class: "reservation-information__row" }, h("ir-label", { key: '32cc142a360d5c763df166e92264e0cf537cd2df', labelText: `${t('Lcz_Company', { fallback: 'Company' })}:`, placeholder: t('Lcz_NoCompanyNameProvided', { fallback: 'No company name provided' }), content: `${this.booking.company_name ?? ''}${this.booking.company_tax_nbr ? ` - ${this.booking.company_tax_nbr}` : ''}`, display: 'flex' }), h("wa-tooltip", { key: '617a8a31b081224baad39088453cdd157143f5d3', for: `edit_create-company-info` }, t('Lcz_AddCompanyInfo', { fallback: 'Add company info' })), h("ir-custom-button", { key: 'ce92be8fb12562dc82de97949e14e7039c14145a', iconBtn: true, id: `edit_create-company-info`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irBookingCompanyFormRef.openCompanyForm();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: 'e1f9f68a2e698184cac48e4a1cd144db3ef15c82', name: "edit", label: t('Lcz_AddOrModifyCompanyInfo', { fallback: 'Add or modify company info' }), style: { fontSize: '1rem' } })))), h("div", { key: '7d84076df0bab246baf0adde8021d033f3b891d7', class: 'reservation__info-guest-origins' }, this.userCountry && (h("ir-label", { key: '648a8b6f851ba6f90316f462bcbef21dd7225008', labelText: `${t('Lcz_Country', { fallback: 'Country' })}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.booking.guest.mobile && h("ir-label", { key: 'f8c4ba402d7484e0495d00ed83d5425d175ffb22', labelText: `${t('Lcz_Phone', { fallback: 'Phone' })}:`, content: this.renderPhoneNumber() })), !this.booking.agent && h("ir-label", { key: '6434b57e48161699a5fb8b6fcdedf2d48d633fdc', labelText: `${t('Lcz_Email', { fallback: 'Email' })}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && (h("ir-label", { key: 'ce938bdb3a79b00917c80b480043b04011842a49', labelText: `${t('Lcz_AlternativeEmail', { fallback: 'Alternative email' })}:`, content: this.booking.guest.alternative_email })), this.booking?.guest?.address && h("ir-label", { key: 'b478e4e428d6819fe29464b0463758bb720b8433', labelText: `${t('Lcz_Address')}:`, content: this.booking.guest.address }), this.booking.guest?.notes && h("ir-label", { key: '2242d843377f6b59c73b1d2958af25a29de20afb', display: "inline", labelText: `${t('Lcz_GuestPrivateNote')}:`, content: this.booking.guest?.notes }), this.booking.promo_key && h("ir-label", { key: '4da0dfa062a66918023ee69788548fa564b72550', labelText: `${t('Lcz_Coupon', { fallback: 'Coupon' })}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: 'b4161c98d70f40aca724c684ae4c71f31a06987b', class: "d-flex align-items-center" }, h("svg", { key: 'e2c4db999006a5d005c17cee97c2269ec4e18e8c', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'd9c8b4c3920cec17afa82957ae0ae710edec43e5', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: 'b9bcdcd1cb37abd143b718db029c722793217b56', class: "m-0 p-0 ir-ms-1" }, t('Lcz_LoyaltyDiscountApplied', { fallback: 'Coupon: %1' })))), this.booking.is_direct ? (h("ir-label", { labelText: `${t('Lcz_GuestRemark')}:`, display: "inline", content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0 reservation-information__channel-notes', label: `${t('Lcz_ChannelNotes', { fallback: 'Channel notes' })}:`, remarks: this.booking.ota_notes, maxVisibleItems: this.booking.ota_notes?.length })), h("div", { key: '61973d636b2edb6a863ad80f094b01b0797e3d7e', class: "reservation-information__row" }, h("ir-label", { key: '8ec74e78174273f9ae8eb827fd14371a8c14f093', labelText: `${t('Lcz_BookingPrivateNote')}:`, placeholder: t('Lcz_VisibleToHotelOnly'), content: privateNote, display: privateNote ? 'inline' : 'flex' }), h("wa-tooltip", { key: '106e7a177833cd7b37b3a340f86fb8dfb9c56d98', for: `edit_create-extra-note` }, t('Lcz_EditCreatePrivateNoteTooltip', {
            fallback: '%1 private note',
            params: [privateNote ? t('Lcz_Edit', { fallback: 'Edit' }) : t('Lcz_Create', { fallback: 'Create' })],
        })), h("ir-custom-button", { key: '0da4af03b97a92110ccd07224798877fa185c4e8', iconBtn: true, id: `edit_create-extra-note`, onClickHandler: () => {
                this.irBookingExtraNoteRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '75c9c85b7e52e41f169acd4449ca9786166c6ccd', style: { fontSize: '1rem' }, name: "edit", label: t('Lcz_EditOrCreatePrivateNote', { fallback: 'Edit or create private note' }) })))), h("ir-booking-extra-note", { key: '1a7fe048c448d92d8b30d110f1dfef4c4d88c94d', booking: this.booking, ref: el => (this.irBookingExtraNoteRef = el) }), h("ir-booking-company-dialog", { key: '638e1e9fa273d9d0ff6c93f9cb4f79c42a7a345b', booking: this.booking, ref: el => (this.irBookingCompanyFormRef = el) })));
    }
};
IrReservationInformation.style = irReservationInformationCss();

const irRoomCss = () => `.light-blue-bg.sc-ir-room{background:#acecff;padding:0.1rem 0.3rem;border-radius:5px;display:block;max-width:100px;box-sizing:border-box;display:inline-block;overflow:hidden;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:default}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room span.sc-ir-room{display:inline;white-space:normal;line-height:1.5;word-break:break-word}.room_statements.sc-ir-room b.sc-ir-room{display:inline;margin-inline-end:5px}.payment-container.sc-ir-room{position:absolute;inset-inline-end:1rem;height:fit-content}.sc-ir-room-h{position:relative}.room_actions_btns.sc-ir-room{gap:0.5rem}.room_actions_btns.sc-ir-room{white-space:nowrap;width:max-content}.room_actions_btns.sc-ir-room{flex:1 1 0%;display:flex;justify-content:flex-end}.mx-0-5.sc-ir-room{margin-inline-start:2px !important;margin-inline-end:2px !important}.tax-width.sc-ir-room{font-size:10px}.mx-01.sc-ir-room{--m:5px;margin-inline-end:var(--m) !important;margin-inline-start:var(--m) !important}*.sc-ir-room-h{box-sizing:border-box}.booking-room__collapse-btn.sc-ir-room{all:unset;display:inline-flex;align-items:center;align-self:flex-start;height:fit-content;border-radius:calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));aspect-ratio:1;cursor:pointer;transition:rotate var(--wa-transition-normal) var(--wa-transition-easing)}.booking-room__collapse-btn[data-state='opened'].sc-ir-room{rotate:90deg}.booking-room__collapse-btn[data-state='opened'].sc-ir-room:dir(rtl){rotate:-90deg}.booking-room__collapse-btn.sc-ir-room:focus-visible{outline:var(--wa-focus-ring);outline-offset:calc(var(--wa-panel-border-width) + var(--wa-focus-ring-offset))}.booking-room__header-row.sc-ir-room{display:flex;gap:var(--wa-space-sm, 0.5rem);margin:0}.booking-room_summary.sc-ir-room{display:grid;gap:0.5rem}.booking-room__breakdown-label-wrapper.sc-ir-room{flex:0 0 auto;padding-top:0.25rem}.booking-room__breakdown-label.sc-ir-room{margin:0;padding-inline-end:0.5rem;font-weight:600;white-space:nowrap}.booking-room__details.sc-ir-room,.booking-room__details.sc-ir-room::part(base),.booking-room__details.sc-ir-room [part~="base"],.booking-room__details.sc-ir-room::part(header),.booking-room__details.sc-ir-room [part~="header"],.booking-room__details.sc-ir-room::part(content),.booking-room__details.sc-ir-room [part~="content"]{width:100%;box-sizing:border-box;padding:0}.booking-room__details.sc-ir-room::part(header),.booking-room__details.sc-ir-room [part~="header"]{align-items:flex-start}.ir-flip-rtl.sc-ir-room:dir(rtl){scale:-1 1}`;

const IrRoom = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.deleteFinished = createEvent(this, "deleteFinished");
        this.toast = createEvent(this, "toast");
        this.pressCheckIn = createEvent(this, "pressCheckIn");
        this.pressCheckOut = createEvent(this, "pressCheckOut");
        this.editInitiated = createEvent(this, "editInitiated");
        this.resetBookingEvt = createEvent(this, "resetBookingEvt");
        this.openSidebar = createEvent(this, "openSidebar");
        this.addExtraServiceToUnit = createEvent(this, "addExtraServiceToUnit");
    }
    get element() { return getElement(this); }
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
    bookingService = new BookingService();
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
    handleEditClick() {
        this.editInitiated.emit({
            event_type: 'EDIT_BOOKING',
            ID: this.room['assigned_units_pool'],
            NAME: formatName(this.mainGuest?.first_name, this.mainGuest?.last_name),
            EMAIL: this.booking.guest.email,
            PHONE: this.booking.guest.mobile,
            REFERENCE_TYPE: '',
            FROM_DATE: this.booking.from_date,
            TO_DATE: this.booking.to_date,
            TITLE: `${t('Lcz_EditBookingFor')} ${this.room?.roomtype?.name} ${this.room?.unit?.name || ''}`,
            defaultDateRange: {
                dateDifference: this.room.days.length,
                fromDate: this.room.from_date,
                toDate: this.room.to_date,
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
                return `${t('Lcz_AreYouSureDoYouWantToRemove')} ${this.room.roomtype.name} ${this.room.unit ? this.room.unit.name : ''} ${t('Lcz_FromThisBooking')}`;
            case 'checkin':
                return t('Lcz_ConfirmCheckIn', { fallback: 'Are you sure you want to Check In this unit?' });
            case 'checkout':
                return t('Lcz_ConfirmCheckOut', { fallback: 'Are you sure you want to Check Out this unit?' });
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
    handleAddExtraServiceToUnit() {
        this.addExtraServiceToUnit.emit({ identifier: this.room.identifier });
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
        return (h(Host, { key: '7c541e78941fd595ba34fea459770e5811421a15' }, h("div", { key: '31160e61f7016c98762a747d82621892cf1a2508', class: "booking-room__header-row" }, h("button", { key: 'b05989dfbf74e21e0644ed1398ac437cc4e7db56', "data-state": this.collapsed ? 'closed' : 'opened', class: "booking-room__collapse-btn", onClick: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '867ca300f9b6f65d8a02d0e1cebe3567fe0c0538', class: "ir-flip-rtl", name: "chevron-right" })), h("div", { key: '34d50a8a5f300c3a0c1890a67b40c0c3726331b7', style: { width: '100%', cursor: 'default' } }, h("div", { key: '4b33b391fb46ef9d5423fc92e19e0ac4be630d99',
            // slot="summary"
            class: "booking-room_summary", style: { width: '100%', cursor: 'default' } }, h("ir-room-header", { key: '76be0ee35ea8f9ccf1fbe72f679ca1b43b3b0b2c', room: this.room, myRoomTypeFoodCat: this.myRoomTypeFoodCat, mealCodeName: this.mealCodeName, currency: this.currency, isEditable: this.isEditable, hasRoomEdit: this.hasRoomEdit, hasRoomDelete: this.hasRoomDelete, agent: this.agent, onAction: e => this.handleHeaderAction(e.detail), onOpenHbDialog: () => (this.isHbDialogOpen = true) }), h("ir-room-details", { key: '6849a59eb7ce11808346e31595d1405501705096', room: this.room, booking: this.booking, mainGuest: this.mainGuest, bedPreferences: this.bedPreferences, language: this.language, includeDepartureTime: this.includeDepartureTime, hasCheckIn: this.hasCheckIn, hasCheckOut: this.hasCheckOut, onCheckIn: () => this.handleCheckIn(), onCheckOut: () => (this.modalReason = 'checkout'), onViewGuests: () => this.showGuestModal(), onOpenArrivalDialog: () => (this.isArrivalDialogOpen = true), onOpenDepartureDialog: () => (this.isDepartureDialogOpen = true) })), !this.collapsed && h("ir-room-breakdown", { key: 'ec33c5cfc02c1c2e4acee62cab2c60e41245457b', room: this.room, booking: this.booking, currency: this.currency, clTransactions: this.clTransactions }))), h("ir-room-extra-services", { key: 'a5dc00a76a79bf9f6e7a06432f916e41ceb36343', room: this.room, booking: this.booking, isEditable: this.isEditable, agent: this.agent, currency: this.currency, language: this.language, svcCategories: this.svcCategories, clTransactions: this.clTransactions, onRequestAddExtraService: () => this.handleAddExtraServiceToUnit() }), h("ir-assignment-toggle-dialog", { key: '99b793729a98a9eeb40a05850bc5d3b387c5856d', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, onConfirmToggle: () => this.toggleRoomAgent() }, h("span", { key: 'ad28ef18f72a8d121ee2b56cab50e3d354745d6f', slot: "message" }, t('Lcz_MoveToFolio', {
            fallback: 'Move %1 %2 %3 to %4 folio.',
            params: [
                this.room.roomtype.name,
                this.room.rateplan.short_name,
                this.room.unit?.name ?? '',
                this.room.agent ? t('Lcz_GuestLowercase', { fallback: 'guest' }) : (this.booking?.agent?.name ?? t('Lcz_AgentLowercase', { fallback: 'agent' })),
            ],
        }))), h("ir-dialog", { key: 'a185e04c25cc32b819806ea7a28fb7b2050257cc', label: this.modalReason === 'delete' ? t('Lcz_Alert', { fallback: 'Alert' }) : t('Lcz_Confirmation', { fallback: 'Confirmation' }), ref: el => (this.modal = el), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalReason = null;
            }, lightDismiss: this.modalReason === 'checkin' }, h("p", { key: '671535778350cd86a57601059798de98cdfd2240' }, this.renderModalMessage()), h("div", { key: '8262d749f0d529c24751c1d68aa184ca9d2e0331', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '7ddeb3e7a0b9e067ceaae072d38d3b34ab81b6cf', size: "m", "data-dialog": "close", appearance: "filled", variant: "neutral" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '74a4334590da12d159e4d33774770f0147300ca4', size: "m", loading: this.isLoading, onClickHandler: e => this.handleModalConfirmation(e), variant: this.modalReason === 'delete' ? 'danger' : 'brand' }, this.modalReason === 'delete' ? t('Lcz_Delete', { fallback: 'Delete' }) : t('Lcz_Confirm', { fallback: 'Confirm' })))), h("ir-checkout-dialog", { key: '910ddc971a019952aa49bf2c82426ccbd1b4cae6', onCheckoutDialogClosed: e => {
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
            }, identifier: this.room.identifier, open: this.modalReason === 'checkout', booking: this.booking }), h("ir-invoice", { key: 'a6a8bdbda9c576f80231ac57a5eabdc36259bb96', onInvoiceClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            }, open: this.isOpen, booking: this.booking, roomIdentifier: this.room.identifier }), h("ir-booking-pricing-drawer", { key: '404539fb36ab3dbe5304ba954b684922949cea82', open: this.isPricingDrawerOpen, booking: this.booking, room: this.room, agent: this.agent, folioEntries: this.clTransactions, currencySymbol: this.booking?.currency?.symbol ?? '', onCloseDrawer: () => (this.isPricingDrawerOpen = false), onPricingSaved: () => {
                this.isPricingDrawerOpen = false;
                this.resetBookingEvt.emit(null);
            } }), h("ir-hb-preference-dialog", { key: '72fd2f643ca1918016503d1cd4e5cf42b3a37d32', room: this.room, open: this.isHbDialogOpen, onHbPreferenceClose: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isHbDialogOpen = false;
                if (e.detail.saved) {
                    this.resetBookingEvt.emit(null);
                }
            } }), h("ir-departure-time-dialog", { key: 'b42c1d7b4bdfb634efb653b1db3b7dfc3a43b770', room: this.room, booking: this.booking, open: this.isDepartureDialogOpen, property_id: this.property_id, departureTime: this.departureTime, language: this.language, booking_nbr: this.booking.booking_nbr, currency_id: this.booking.currency.id, currencySymbol: this.currency, onDepartureTimeClose: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isDepartureDialogOpen = false;
                if (e.detail.saved) {
                    this.resetBookingEvt.emit(null);
                }
            } }), h("ir-arrival-time-dialog", { key: 'd41d12442bf9f2edf3ea7b13f8f7217c5937b878', room: this.room, booking: this.booking, open: this.isArrivalDialogOpen, property_id: this.property_id, arrivalTime: this.arrivalTime, language: this.language, booking_nbr: this.booking.booking_nbr, currency_id: this.booking.currency.id, currencySymbol: this.currency, onArrivalTimeClose: (e) => {
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
        registerInstance(this, hostRef);
    }
    room;
    booking;
    currency = 'USD';
    clTransactions = [];
    get acmTxByDate() {
        return new Map(this.clTransactions.filter(tx => tx.CATEGORY === SvcCategory.Accommodation && tx.BSA_REF === this.room.identifier).map(tx => [tx.SERVICE_DATE, tx]));
    }
    getSmokingLabel() {
        if (this.booking.is_direct) {
            if (!this.room.smoking_option) {
                return null;
            }
            const currRT = calendar_data.roomsInfo.find(rt => rt.id === this.room.roomtype.id);
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
        return (h("div", { key: '526942de0bae2551124108344be6c8365053b746', class: "booking-room__details-container" }, h("div", { key: 'c1b42c0ba62196aaeafeea81fb15249598613dda', class: "booking-room__breakdown-row" }, h("div", { key: 'acb705f9fc7f2487844520fc9d67a3d7a198d645', class: "booking-room__breakdown-table" }, h("table", { key: 'e70624e32170c5eef6a9ae3db109fdac993aaa5e' }, this.room.days.length > 0 &&
            (() => {
                const acmTxByDate = this.acmTxByDate;
                return this.room.days.map(room => {
                    const tx = acmTxByDate.get(room.date);
                    return (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, _getDay(room.date)), h("td", { class: "booking-room__cell booking-room__cell--right" }, formatAmount(this.currency, room.amount)), room.cost > 0 && room.cost !== null && (h("td", { class: "booking-room__cell booking-room__cell--left booking-room__cell--pad-left night-cost" }, formatAmount(this.currency, room.cost))), h("td", { class: "booking-room__cell booking-room__cell--pad-left" }, tx && h("ir-cl-status-tag", { transaction: { _rowId: '', ...mapClTxToFolioRow(tx), balance: 0 }, size: "extra-small" }))));
                });
            })(), h("tr", { key: '62c855811fa1a098f551780414223b3a9168f133', class: '' }, h("th", { key: '9c33e7f4c570c16433153d8ef7e5d016a695efb1', class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right subtotal_row" }, t('Lcz_SubTotal')), h("th", { key: 'ccbad3140025755513fd8a4b3fef3142d294414f', class: "booking-room__cell booking-room__cell--right subtotal_row" }, formatAmount(this.currency, this.room.total)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (h("th", { key: 'c764d99fda181f2917b541e1730f4e9c7eb7fa20', class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-left night-cost" }, formatAmount(this.currency, this.room.cost)))), this.booking.is_direct ? (h(Fragment, null, (() => {
            const filtered_data = calendar_data.taxes.filter(tx => tx.pct > 0 && tx.is_exlusive);
            return filtered_data.map(d => {
                const amount = d.is_exlusive
                    ? // Tax is added on top
                        this.room.total * d.pct
                    : // Tax is included in total → extract it
                        this.room.total - this.room.total / (1 + d.pct);
                return (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, h("span", { class: 'booking-room__cell-tax-name' }, d.is_exlusive ? t('Lcz_Excluding', { fallback: 'Excluding' }) : t('Lcz_Including', { fallback: 'Including' }), " ", d.name, " (", d.pct, "%)")), h("td", { class: "booking-room__cell booking-room__cell--right" }, formatAmount(this.currency, amount / 100)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-left night-cost" }, formatAmount(this.currency, (this.room.cost * d.pct) / 100)))));
            });
        })(), this.room.inclusive_taxes?.CALCULATED_INCLUSIVE_TAXES?.map(d => (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, h("span", { class: 'booking-room__cell-tax-name' }, t('Lcz_Including', { fallback: 'Including' }), " ", d.TAX_NAME, " (", d.TAX_PCT * 100, "%)")), h("td", { class: "booking-room__cell booking-room__cell--right" }, formatAmount(this.currency, d.CALCULATED_VALUE))))))) : (h(Fragment, null, (() => {
            const filtered_data = this.room.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, h("span", { class: 'booking-room__cell-tax-name' }, d.is_exlusive ? t('Lcz_Excluding', { fallback: 'Excluding' }) : t('Lcz_Including', { fallback: 'Including' }), " ", d.name)), h("td", { class: "booking-room__cell booking-room__cell--right" }, formatAmount(d.currency.symbol, d.amount))));
            });
        })()))))), h("ir-label", { key: '0793d464680506d020d1179e4c0befabcc43cd8d', labelText: `${t('Lcz_SmokingOptions')}:`, display: "inline", content: this.getSmokingLabel() }), this.booking.is_direct && (h(Fragment, { key: 'a28b6cd5c456b920b8f897f7f9f64504875ce4a3' }, this.room.rateplan.cancelation && (h("ir-label", { key: '15460115b46a146f7d4c241d0b79fc7c389c33b7', labelText: `${t('Lcz_Cancellation')}:`, display: "inline", content: this.room.rateplan.cancelation || '', renderContentAsHtml: true })), this.room.rateplan.guarantee && (h("ir-label", { key: 'a9e435a09154c61c97a4c031632b2d1a0c67d264', labelText: `${t('Lcz_Guarantee')}:`, display: "inline", content: this.room.rateplan.guarantee || '', renderContentAsHtml: true })))), this.room.ota_meta && (h("div", { key: 'b33e2aa6cf75174f8ec78aeb040721b5449c5002' }, h("ir-label", { key: '123ec9d5ce81f41044e970c77a61b92edfa32f93', labelText: `${t('Lcz_MealPlan')}:`, display: "inline", content: this.room.ota_meta.meal_plan }), h("ir-label", { key: '1f9ba41af7281c0d714a770e21cf99519827647e', labelText: `${t('Lcz_Policies', { fallback: 'Policies' })}:`, display: "inline", content: this.room.ota_meta.policies })))));
    }
};
IrRoomBreakdown.style = irRoomBreakdownCss();

const irRoomDetailsCss = () => `.sc-ir-room-details-h{display:contents}.booking-room__dates-row.sc-ir-room-details{display:flex;flex-wrap:wrap;gap:var(--wa-space-xs, 0.25rem);align-items:center}.booking-room__date-view.sc-ir-room-details{flex:1 1 150px;min-width:140px;font-size:var(--wa-font-size-s);width:fit-content}.booking-room__guest-row.sc-ir-room-details{display:flex;flex-wrap:wrap;align-items:center;gap:0.5rem}.booking-room__text-reset.sc-ir-room-details{margin:0;padding:0}.booking-room__guest-name.sc-ir-room-details{font-weight:600}.booking-room__bed-info.sc-ir-room-details{color:var(--wa-color-neutral-700)}.booking-room__departure-row.sc-ir-room-details{display:flex;flex-wrap:wrap;align-items:center;gap:var(--wa-space-xs, 0.25rem)}.booking-room__departure-label.sc-ir-room-details{font-weight:500}.booking-room__time-item.sc-ir-room-details{display:flex;align-items:center;gap:0.25rem}@media (min-width: 1280px){.booking-room__departure-row.sc-ir-room-details{gap:var(--wa-space-l, 1.5rem)}}`;

const IrRoomDetails = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checkIn = createEvent(this, "checkIn");
        this.checkOut = createEvent(this, "checkOut");
        this.viewGuests = createEvent(this, "viewGuests");
        this.openArrivalDialog = createEvent(this, "openArrivalDialog");
        this.openDepartureDialog = createEvent(this, "openDepartureDialog");
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
        const adultLabel = adultCount > 1 ? t('Lcz_Adults', { fallback: 'adults' }).toLowerCase() : t('Lcz_Adult', { fallback: 'adult' }).toLowerCase();
        const childLabel = childCount > 1 ? t('Lcz_Children', { fallback: 'Children' }).toLowerCase() : t('Lcz_Child', { fallback: 'Child' }).toLowerCase();
        const infantLabel = infantCount > 1 ? t('Lcz_Infants').toLowerCase() : t('Lcz_Infant').toLowerCase();
        const parts = [];
        if (adultCount > 0) {
            parts.push(`${formatCount(adultCount)} ${adultLabel}`);
        }
        if (childCount > 0) {
            parts.push(`${formatCount(childCount)} ${childLabel}`);
        }
        if (infantCount > 0) {
            parts.push(`${formatCount(infantCount)} ${infantLabel}`);
        }
        return parts.join('&nbsp&nbsp&nbsp&nbsp');
    }
    getBedName() {
        if (this.booking.is_direct) {
            const bed = this.bedPreferences.find(p => p.CODE_NAME === this.room?.bed_preference?.toString());
            if (!bed) {
                return;
            }
            return getSetupEntryLabel(bed, this.language);
        }
        return this.room.ota_meta?.bed_preferences;
    }
    render() {
        const bed = this.getBedName();
        return (h(Fragment, { key: 'a0439afe2fdb0aeccff8c2c2d255562385b38438' }, h("div", { key: '8b5259ca980adc5e754275835dd75d3d66d5c39c', class: "booking-room__dates-row" }, h("ir-date-view", { key: '51fad00a39687714fa3aa142f11160e8225fdcef', format: 'weekday-medium', class: "booking-room__date-view", from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), !isSingleUnit(this.room.roomtype.id) && calendar_data.is_frontdesk_enabled && this.room.unit && h("ir-unit-tag", { key: 'bc0149d2e63aec9761898aab14d3fb974c2f3f52', unit: this.room.unit.name }), this.hasCheckIn && (h("ir-custom-button", { key: '6220f1552c0725387ca2ee4cf4f5608c5ad01871', onClickHandler: () => this.checkIn.emit(), id: "checkin", appearance: "outlined", variant: "brand" }, t('Lcz_CheckIn', { fallback: 'Check in' }))), this.hasCheckOut && (h("ir-custom-button", { key: 'a4df03050414e7e69bd977f7557a4427db5e4446', appearance: "outlined", variant: "brand", onClickHandler: () => this.checkOut.emit(), id: "checkout" }, t('Lcz_CheckOut', { fallback: 'Check out' })))), h("div", { key: '9a74fdb41939db7d8e90e4444c20eb38269af82a', class: "booking-room__guest-row" }, h("p", { key: '09e680b64ce75bc5af2333c151af84ba9964be84', class: "booking-room__text-reset booking-room__guest-name" }, `${this.mainGuest.first_name || ''} ${this.mainGuest.last_name || ''}`), this.room.rateplan.selected_variation.adult_nbr > 0 && (h(Fragment, { key: '06ecb4fe5ce89b5c579b166d14e7f069a9f33442' }, h("wa-tooltip", { key: '564281e9a88f33d2b2005434a48b997b008cb448', for: `view-guest-btn-${this.room.identifier}` }, t('Lcz_ViewGuests', { fallback: 'View guests' })), h("ir-custom-button", { key: '4240fa7f4a23c3d6e9bef287560d60d5796741ad', link: true, onClickHandler: () => this.viewGuests.emit(), id: `view-guest-btn-${this.room.identifier}`, variant: "brand", appearance: "plain" }, h("span", { key: '1d5fa28a7ec21db73ba9fee3199d08d0844aa8b2', innerHTML: this.formatVariation(this.room.occupancy) })))), bed && h("p", { key: 'cfecb7cc4c3de5305bea097ab28c2c2b5a311ce5', class: "booking-room__text-reset booking-room__bed-info" }, "(", bed, ")")), (this.includeDepartureTime || this.booking.is_direct) && (h("div", { key: '5cbe344a7dd1f728911729d2853b077c4122695d', class: "booking-room__departure-row" }, h("div", { key: 'abf00becebb9b0de3159a33737386b7f905b8999', class: "booking-room__time-item" }, h("span", { key: 'b601fdf29a0ff0de963a3c0dd6cbd0dcef19ea8b', class: "booking-room__departure-label" }, t('Lcz_ExpectedArrivalTime', { fallback: 'Expected Arrival Time' }), ":"), h("ir-custom-button", { key: 'ca7fb0a63aa10652d6097b6be2b0310ba8955e2f', link: true, appearance: "plain", variant: "brand", onClickHandler: () => this.openArrivalDialog.emit() }, this.room.arrival_time?.description || t('Lcz_NotProvided', { fallback: 'Not provided' }))), this.includeDepartureTime && (h("div", { key: '3c8ea033760ffc24e47e14c7650e4e438da969db', class: "booking-room__time-item" }, h("span", { key: 'cc4a1547dd4f3f061a075a105ed37c75252897d4', class: "booking-room__departure-label" }, t('Lcz_DepartureTime', { fallback: 'Departure time:' })), h("ir-custom-button", { key: 'e4ba4158adc68e6a4b33b5e98a0f2cb45c83b4c2', link: true, appearance: "plain", variant: "brand", onClickHandler: () => this.openDepartureDialog.emit() }, this.room.departure_time?.description || t('Lcz_NotProvided', { fallback: 'Not provided' }))))))));
    }
};
IrRoomDetails.style = irRoomDetailsCss();

const irRoomExtraServicesCss = () => `.booking-room__extra-services.sc-ir-room-extra-services{margin-top:0.5rem}.booking-room__extra-services.sc-ir-room-extra-services{margin-inline-start:calc(1.25rem + var(--wa-space-sm, 0.5rem))}.booking-room__extra-services.sc-ir-room-extra-services wa-divider.sc-ir-room-extra-services{border-color:var(--wa-color-neutral-fill-loud);margin-block:0.35rem}.booking-room__extra-services.sc-ir-room-extra-services::part(body),.booking-room__extra-services.sc-ir-room-extra-services [part~="body"]{display:flex;flex-direction:column;gap:0.625rem;padding:1em}.booking-room__extra-services.sc-ir-room-extra-services::part(header),.booking-room__extra-services.sc-ir-room-extra-services [part~="header"]{padding-inline:1em;border-width:0;padding-bottom:0}.booking-room__extra-services-header.sc-ir-room-extra-services{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-xs, 0.25rem)}.booking-room__extra-services-label.sc-ir-room-extra-services{display:inline-flex;align-items:center;gap:0.5rem;min-width:0}.booking-room__extra-services-icon.sc-ir-room-extra-services{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:1.625rem;height:1.625rem;border-radius:50%;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, var(--wa-color-brand-600))}.booking-room__extra-services-icon.sc-ir-room-extra-services wa-icon.sc-ir-room-extra-services{font-size:0.8rem}.booking-room__extra-services-title.sc-ir-room-extra-services{font-size:var(--wa-font-size-m, 1rem);font-weight:700;line-height:1.2;letter-spacing:-0.01em;color:var(--wa-color-neutral-900, #18181b);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.booking-room__extra-services-count.sc-ir-room-extra-services{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;min-width:1.25rem;height:1.25rem;padding:0 0.375rem;border-radius:999px;font-size:var(--wa-font-size-2xs, 0.7rem);font-weight:700;line-height:1;color:var(--wa-color-brand-on-loud, #fff);background:var(--wa-color-brand-fill-loud, var(--wa-color-brand-600))}.booking-room__extra-services-add.sc-ir-room-extra-services::part(base),.booking-room__extra-services-add.sc-ir-room-extra-services [part~="base"]{transition:background-color var(--wa-transition-fast, 100ms) var(--wa-transition-easing)}.booking-room__extra-services-pinned.sc-ir-room-extra-services,.booking-room__extra-services-list.sc-ir-room-extra-services{display:flex;flex-direction:column;gap:0.625rem}.booking-room__extra-services-details.sc-ir-room-extra-services,.booking-room__extra-services-details.sc-ir-room-extra-services::part(base),.booking-room__extra-services-details.sc-ir-room-extra-services [part~="base"]{background:transparent;border:none}.booking-room__extra-services-details.sc-ir-room-extra-services::part(header),.booking-room__extra-services-details.sc-ir-room-extra-services [part~="header"]{min-height:auto;padding:0.125rem 0;border-radius:0}.booking-room__extra-services-details.sc-ir-room-extra-services::part(content),.booking-room__extra-services-details.sc-ir-room-extra-services [part~="content"]{padding:0.5rem 0 0}.booking-room__extra-services-details.sc-ir-room-extra-services::part(base),.booking-room__extra-services-details.sc-ir-room-extra-services [part~="base"]{--wa-transition-duration:var(--wa-transition-normal, 200ms)}.booking-room__extra-services-toggle-label.sc-ir-room-extra-services{font-size:var(--wa-font-size-xs, 0.75rem);font-weight:600;color:var(--wa-color-brand-fill-loud, var(--wa-color-brand-600))}.booking-room__extra-services-group.sc-ir-room-extra-services{padding-inline-start:0.625rem;border-inline-start:3px solid transparent}.booking-room__extra-services-group--guest.sc-ir-room-extra-services{border-inline-start-color:var(--wa-color-neutral-300, #d4d4d8)}.booking-room__extra-services-group--agent.sc-ir-room-extra-services{border-inline-start-color:var(--wa-color-brand-fill-loud, #3b82f6)}.booking-room__extra-services-group-label.sc-ir-room-extra-services{display:flex;align-items:center;gap:0.4rem;margin:0 0 0.5rem;font-size:var(--wa-font-size-2xs, 0.7rem);font-weight:700;letter-spacing:0.06em;color:var(--wa-color-neutral-500, #71717a)}.booking-room__extra-services-group-label--agent.sc-ir-room-extra-services{color:var(--wa-color-primary-600, #2563eb)}.booking-room__extra-services-empty.sc-ir-room-extra-services{margin:0;padding:0.375rem 0;font-size:var(--wa-font-size-xs, 0.85rem);color:var(--wa-color-neutral-400, #a1a1aa);font-style:italic}`;

/** Extra-service category codes that are never tucked inside the collapsible list — always shown for the room, e.g. Early Check-In / Late Check-Out fees. */
const ALWAYS_VISIBLE_EXTRA_SERVICE_CODES = new Set(['ECI', 'LCO', 'BCT', 'EXB', 'HMP', 'ANP']);
const IrRoomExtraServices = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.requestAddExtraService = createEvent(this, "requestAddExtraService");
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
        return (h("ir-extra-service", { key: service.booking_system_id ?? service.system_id ?? `${service.category?.code ?? 'service'}-${service.start_date}`, service: service, booking: this.booking, agent: this.agent, bookingNumber: this.booking.booking_nbr, currencySymbol: this.currency, language: this.language, svcCategories: this.svcCategories, clTransactions: this.clTransactions }));
    }
    /** Renders the pinned + collapsible services for one folio group (or the whole list when not in agent mode). */
    renderServiceGroup(groupKey, services) {
        const pinned = this.pinnedOf(services);
        const collapsible = this.collapsibleOf(services);
        return (h(Fragment, null, pinned.length > 0 && (h("div", { class: "booking-room__extra-services-pinned" }, pinned.map((service, idx) => (h(Fragment, null, this.renderExtraServiceItem(service), idx < pinned.length - 1 && h("wa-divider", null)))))), collapsible.length > 0 && (h("wa-details", { "icon-placement": "start", class: "booking-room__extra-services-details", appearance: "plain", open: this.expandedGroups.has(groupKey), "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.setGroupExpanded(groupKey, true);
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.setGroupExpanded(groupKey, false);
            } }, h("span", { slot: "summary", class: "booking-room__extra-services-toggle-label" }, t('Lcz_MoreServicesCount', { fallback: '%1 more service(s)', params: [formatCount(collapsible.length)] })), h("div", { class: "booking-room__extra-services-list" }, collapsible.map((service, idx) => (h(Fragment, null, this.renderExtraServiceItem(service), idx < collapsible.length - 1 && h("wa-divider", null)))))))));
    }
    render() {
        const services = this.roomExtraServices;
        const total = services.length;
        const inAgentMode = isAgentMode(this.agent);
        const guestServices = inAgentMode ? services.filter(s => s.agent === null || s.agent === undefined) : [];
        const agentServices = inAgentMode ? services.filter(s => s.agent !== null && s.agent !== undefined) : [];
        const agentName = this.booking.agent?.name ?? t('Lcz_Agent', { fallback: 'Agent' });
        return (h("wa-card", { key: '861e055f9aca77384b350d70daa455051720367b', appearance: "filled", class: "booking-room__extra-services" }, h("div", { key: '508e841623d652422df93244e8449584b7b855b6', slot: "header", class: "booking-room__extra-services-header" }, h("span", { key: 'e6102f6c87df03df4e8acbb60241c555fc53f83a', class: "booking-room__extra-services-label" }, h("span", { key: '641aae7dc3c968b64b63579dd124ef0c14f69ab7', class: "booking-room__extra-services-title" }, total > 0 ? t('Lcz_Extras', { fallback: 'Extras' }) : t('Lcz_AddExtras', { fallback: 'Add Extras' })), total > 0 && h("span", { key: '35039fdb5b3e224c3118ab0b4cbd164298725bab', class: "booking-room__extra-services-count" }, formatNumber(total))), h(Fragment, { key: 'a815e86ae6defa6d573eb0f1b4124b22ab627a75' }, h("wa-tooltip", { key: '8593c3c7fe1ee37042e98f3a0c764c3033e006f3', for: `add-extra-service-${this.room.identifier}` }, t('Lcz_AddExtraService', { fallback: 'Add extra service' })), h("ir-custom-button", { key: '9255c87f31d9cb7e805d7b3f465322f4ee98414a', id: `add-extra-service-${this.room.identifier}`, class: "booking-room__extra-services-add", iconBtn: true, size: "s", appearance: "plain", variant: "brand", onClickHandler: () => this.requestAddExtraService.emit() }, h("wa-icon", { key: 'e958928fc9c6b52bdf20fefff1bf952ea8dbfdfd', style: { fontSize: '0.9rem' }, label: t('Lcz_AddExtraService', { fallback: 'Add extra service' }), name: "plus" })))), inAgentMode ? (h(Fragment, null, h("div", { class: "booking-room__extra-services-group booking-room__extra-services-group--agent" }, h("p", { class: "booking-room__extra-services-group-label booking-room__extra-services-group-label--agent" }, agentName, h("span", null, t('Lcz_Folio', { fallback: 'Folio' }))), agentServices.length === 0 ? (h("p", { class: "booking-room__extra-services-empty" }, t('Lcz_NoAgentServicesAdded', { fallback: 'No agent services added' }))) : (this.renderServiceGroup('agent', agentServices))), h("wa-divider", null), h("div", { class: "booking-room__extra-services-group booking-room__extra-services-group--guest" }, h("p", { class: "booking-room__extra-services-group-label" }, t('Lcz_Guest', { fallback: 'Guest' }), h("span", null, t('Lcz_Folio', { fallback: 'Folio' }))), guestServices.length === 0 ? (h("p", { class: "booking-room__extra-services-empty" }, t('Lcz_NoGuestServicesAdded', { fallback: 'No guest services added' }))) : (this.renderServiceGroup('guest', guestServices))))) : (this.renderServiceGroup('all', services))));
    }
};
IrRoomExtraServices.style = irRoomExtraServicesCss();

const irRoomGuestsCss = () => ``;

const IrRoomGuests = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal");
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
        return (h("ir-drawer", { key: '6dcab0712a1d5ef52adeb307bd680d8abd9abbbf', style: {
                '--ir-drawer-width': '60rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: this.roomName ? t('Lcz_RoomDrawerLabel', { fallback: 'Room %1', params: [this.roomName] }) : this.roomType || t('Lcz_GuestDetails', { fallback: 'Guest Details' }), open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && (h("ir-room-guests-form", { key: 'c138bfd46856a75edba3af26cd42a6d1a5335fec', sharedPersons: this.sharedPersons, roomName: this.roomName, countries: this.countries, totalGuests: this.totalGuests, identifier: this.identifier, bookingNumber: this.bookingNumber, checkIn: this.checkIn, language: this.language, onLoadingChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail;
            } })), h("div", { key: '4b18c34d36907689c4db0e5e88c02f7442582bb1', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'e225aee6cc031259bf92558719f4b0cddea25fb9', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral" }, t('Lcz_Cancel', { fallback: 'Save' })), h("ir-custom-button", { key: '2ca7279b28fe50735313c5db632b3c0687150e60', value: "save", loading: this.isLoading === 'save', size: "m", form: `room-guests__${this.identifier}`, type: "submit", variant: "brand" }, t('Lcz_Save', { fallback: 'Save' })), this.checkIn && this.roomName && (h("ir-custom-button", { key: 'e89cee1ec50102985138add57adab4c2a7e836b8', value: "save_checkin", loading: this.isLoading === 'save_checkin', size: "m", form: `room-guests__${this.identifier}`, type: "submit", variant: "brand" }, t('Lcz_CheckIn', { fallback: 'Check in' }))))));
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
    min: hooks('1900-01-01', 'YYYY-MM-DD').toDate(),
    max: new Date(),
    format: date => hooks(date).format('DD/MM/YYYY'),
    parse: str => hooks(str, 'DD/MM/YYYY').toDate(),
    autofix: true,
    placeholderChar: '_',
    blocks: {
        YYYY: {
            mask: MaskedRange,
            from: 1900,
            to: new Date().getFullYear(),
            placeholderChar: 'Y',
        },
        MM: {
            mask: MaskedRange,
            from: 1,
            to: 12,
            placeholderChar: 'M',
        },
        DD: {
            mask: MaskedRange,
            from: 1,
            to: 31,
            placeholderChar: 'D',
        },
    },
};

const irRoomGuestsFormCss = () => `.sc-ir-room-guests-form-h{display:block;height:100%;position:relative;text-align:start !important;padding-bottom:1rem !important}.id-select.sc-ir-room-guests-form{border-start-end-radius:0;border-end-end-radius:0;border-inline-end-width:0}.sc-ir-room-guests-form-h{display:block;width:100%}.guests-labels.sc-ir-room-guests-form{display:none}.sharing_persons_label.sc-ir-room-guests-form{display:none}.loading-container.sc-ir-room-guests-form{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.guest_document.sc-ir-room-guests-form input.sc-ir-room-guests-form{border-start-start-radius:0;border-end-start-radius:0}.guests-labels.sc-ir-room-guests-form *.sc-ir-room-guests-form,.sharing_persons_label.sc-ir-room-guests-form{margin-bottom:0.5rem;padding-bottom:0}.room-guest__info-container.sc-ir-room-guests-form{display:flex;flex:1 1 0%;align-items:center}.room-guest__document.sc-ir-room-guests-form::part(base),.room-guest__document.sc-ir-room-guests-form [part~="base"]{border-start-start-radius:0;border-end-start-radius:0}.room-guest__document.sc-ir-room-guests-form{flex:1 1 0%}.room-guest__id-info.sc-ir-room-guests-form::part(combobox),.room-guest__id-info.sc-ir-room-guests-form [part~="combobox"]{border-start-end-radius:0;border-end-end-radius:0;border-inline-end-width:0}.room-guest__id-info[open].sc-ir-room-guests-form,.room-guest__id-info.sc-ir-room-guests-form:focus-visible,.room-guest__id-info.sc-ir-room-guests-form:focus-within{z-index:2}.room-guest__section.sc-ir-room-guests-form{display:flex;flex-direction:column;margin-bottom:1rem}.room-guest__section.sc-ir-room-guests-form p.sc-ir-room-guests-form{margin:0;padding:0}.guest_label.sc-ir-room-guests-form{width:100px;display:inline-block;position:relative;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height);margin-bottom:0.5em !important}@media (min-width: 768px){.sharing_persons_label.sc-ir-room-guests-form{display:block}.guest_country_picker.sc-ir-room-guests-form{margin-bottom:3px}.room-guest__section.sc-ir-room-guests-form{display:block}.guest-grid.sc-ir-room-guests-form{display:grid;grid-template-columns:minmax(0, 120px)        minmax(0, 120px)        minmax(0, 120px)        minmax(0, 120px)        minmax(0, 1fr);gap:0.5rem;align-items:flex-start}.guest_label.sc-ir-room-guests-form,.sharing_persons_heading.sc-ir-room-guests-form,.main_guest_heading.sc-ir-room-guests-form{display:none}}`;

const IrRoomGuestsForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal");
        this.resetBookingEvt = createEvent(this, "resetBookingEvt");
        this.updateRoomGuests = createEvent(this, "updateRoomGuests");
        this.loadingChange = createEvent(this, "loadingChange");
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
    bookingService = new BookingService();
    setupService = new SetupService();
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
        this.guests = guests.map(g => ({ ...g, dob: g.dob ? hooks(new Date(g.dob)).format('DD/MM/YYYY') : '', country_id: g.country ? g.country.id : null }));
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
                validateSharedPerson(guest);
            }
            await this.bookingService.handleExposedRoomGuests({
                booking_nbr: this.bookingNumber,
                identifier: this.identifier,
                guests: this.guests
                    .map(g => {
                    if (!g.first_name && g.id === -1) {
                        return null;
                    }
                    return { ...g, dob: g.dob ? hooks(g.dob, 'DD/MM/YYYY').format('YYYY-MM-DD') : null };
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
            if (error instanceof ZodError) {
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
            return (h("div", { class: 'loading-container' }, h("ir-spinner", null)));
        }
        return (h("form", { id: `room-guests__${this.identifier}`, class: "sheet-container", style: { minWidth: '300px' }, onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                this.saveGuests(submitter.value);
            } }, h("section", { class: 'sheet-body' }, h("div", { class: "" }, h("div", { class: "guest-grid guests-labels" }, h("p", { class: "" }, t('Lcz_MainGuest', { fallback: 'Main guest' })), h("p", { class: "" }), h("p", { class: " " }, t('Lcz_DOB', { fallback: 'D.O.B.' })), h("p", { class: "" }, t('Lcz_Nationality', { fallback: 'Nationality' })), h("p", { class: " " }, t('Lcz_Documents', { fallback: 'documents' }))), h("h5", { class: "main_guest_heading" }, t('Lcz_MainGuest', { fallback: 'Main guest' })), this.guests.map((guest, idx) => {
            let isRowValid = true;
            try {
                validateSharedPerson(guest);
            }
            catch (error) {
                isRowValid = false;
            }
            // console.log(`row ${idx}=>${isRowValid}`);
            return (h(Fragment, null, idx === 1 && (h("div", { class: "d-flex mx-0 px-0" }, h("h5", { class: "mx-0 px-0 sharing_persons_heading" }, t('Lcz_PersonsSharingRoom', { fallback: 'Persons sharing room' })), h("p", { class: "mx-0 px-0 sharing_persons_label" }, t('Lcz_PersonsSharingRoom', { fallback: 'Persons sharing room' })))), h("div", { key: idx, class: "guest-grid" }, h("div", { class: "room-guest__section" }, h("label", { htmlFor: `first_name_${idx}`, class: "guest_label" }, t('Lcz_FirstName', { fallback: 'First name' })), h("ir-validator", { class: "flex-grow-1", schema: ZSharedPerson.shape.first_name }, h("ir-input", { "aria-invalid": String(!!this.error['first_name'] && !isRowValid), size: "s", id: `first_name_${idx}`, placeholder: t('Lcz_FirstName', { fallback: 'First name' }), "onText-change": e => this.updateGuestInfo(idx, { first_name: e.detail }), value: guest.first_name, maxlength: 40 }))), h("div", { class: "room-guest__section" }, h("label", { class: "guest_label" }, t('Lcz_LastName', { fallback: 'Last name' })), h("ir-input", { "aria-invalid": String(!!this.error['last_name'] && !isRowValid), size: "s", id: `last_name_${idx}`, placeholder: t('Lcz_LastName', { fallback: 'Last name' }), "onText-change": e => this.updateGuestInfo(idx, { last_name: e.detail }), value: guest.last_name, maxlength: 40 })), h("div", { class: "room-guest__section" }, h("p", { class: "guest_label" }, t('Lcz_DOB', { fallback: 'D.O.B.' })), h("ir-validator", { class: "flex-grow-1", schema: ZSharedPerson.shape.dob }, h("ir-input", { "aria-invalid": String(!!this.error['dob'] && !isRowValid), id: `dob_${idx}`, mask: dateMask, size: "s", placeholder: "", "onText-change": e => {
                    this.updateGuestInfo(idx, { dob: e.detail });
                }, value: guest.dob }))), h("div", { class: "room-guest__section" }, h("p", { class: "guest_label" }, t('Lcz_Nationality', { fallback: 'Nationality' })), h("div", { class: "flex-grow-1" }, h("ir-country-picker", { size: "s", variant: "modern", "aria-invalid": String(!!this.error['country_id'] && !guest.country_id), propertyCountry: this.propertyCountry, id: `{t('Lcz_Nationality', { fallback: 'Nationality' })}_${idx}`, error: !!this.error['country_id'] && !guest.country_id, country: this.countries?.find(c => c.id?.toString() === guest.country?.id?.toString()), onCountryChange: e => this.updateGuestInfo(idx, { country_id: e.detail?.id?.toString() ?? null, country: e.detail }), countries: this.countries }))), h("div", { class: "room-guest__section" }, h("p", { class: "guest_label" }, t('Lcz_Documents', { fallback: 'documents' })), h("div", { class: 'room-guest__info-container flex-grow-1' }, h("wa-select", { class: "room-guest__id-info", defaultValue: guest.id_info?.type?.code ?? this.idTypes[0]?.CODE_NAME, value: guest.id_info?.type?.code, onchange: e => {
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
                const label = getSetupEntryLabel(t, this.language);
                return (h("wa-option", { value: t['CODE_NAME'], label: label }, label));
            })), h("wa-input", { size: "s", "aria-invalid": String(!!this.error['number'] && !isRowValid), class: "room-guest__document", defaultValue: guest?.id_info?.number, value: guest?.id_info?.number, maxlength: 18, placeholder: t('Lcz_IdNumberPlaceholder', { fallback: '12345' }), onchange: e => this.updateGuestInfo(idx, {
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
        registerInstance(this, hostRef);
        this.action = createEvent(this, "action");
        this.openHbDialog = createEvent(this, "openHbDialog");
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
        return this.room?.rateplan?.meal_plan?.code === '003' && calendar_data.property.is_frontdesk_enabled;
    }
    get unitId() {
        return this.room.unit?.id ?? null;
    }
    render() {
        return (h("div", { key: 'f560bb15dd4ea44a17d52b2887c2adcf318c961a', class: "booking-room__summary-row" }, h("p", { key: '412bc42de331a286383f8f28cb3f6f435dedf1a3', class: "booking-room__summary-text" }, h("span", { key: 'c7a9e1b634a977312d018c5d077132165e0e1567', class: "booking-room__summary-highlight" }, this.myRoomTypeFoodCat || '', " "), " ", this.mealCodeName, ' ', this.room.rateplan.is_non_refundable && ` - ${t('Lcz_NonRefundable', { fallback: 'Non-refundable' })}`, ' ', this.isHalfBoard && (h("wa-button", { key: 'fb34f7c84c7515ba2f73ddb359375ace07917985', size: "xs", class: "booking-room__meal-report-button", appearance: "filled", variant: this.room?.hb_preference ? 'brand' : 'warning', onClick: () => this.openHbDialog.emit() }, this.room?.hb_preference === HbPreference.Lunch
            ? t('Lcz_WithLunch', { fallback: 'With lunch' })
            : this.room?.hb_preference === HbPreference.Dinner
                ? t('Lcz_WithDinner', { fallback: 'With dinner' })
                : t('Lcz_ChooseLunchOrDinner', { fallback: 'Choose lunch or dinner' })))), h("div", { key: '99b56f59c219d23ed5aef8433918f6735cdfc6ac', class: "booking-room__price-row" }, h("span", { key: '888e85a73769f6e13f9320b26b431cf79cfdf549', class: "booking-room__price" }, formatAmount(this.currency, this.room['gross_total'])), this.isEditable && (this.hasRoomEdit || this.hasRoomDelete || !!this.unitId) && (h("div", { key: '781e09d441fbdb4833bc77a47349436d42ebd02f', class: "booking-room__actions" }, h("wa-dropdown", { key: 'acdd0ec30dfa986758e1eb3902193dabd3a5ddaf', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": async (e) => {
                this.action.emit(e.detail.item.value);
            } }, h("ir-custom-button", { key: 'c26ff971672e096f750d8df285f62781cf44831a', slot: "trigger", size: "s", class: "booking-room__edit-button", appearance: "plain", id: `actions-room-${this.room.identifier}`, iconBtn: true, variant: "neutral", style: { marginBottom: '4px' } }, h("wa-icon", { key: '930f33f48cad803dceddbf41875cef544bea4bf1', style: { fontSize: '1rem' }, label: t('Lcz_Actions', { fallback: 'Actions' }), name: "ellipsis-vertical" })), this.hasRoomEdit && h("wa-dropdown-item", { key: '406f72463b298c4199640658326533a2144866c4', value: "edit" }, t('Lcz_EditUnit', { fallback: 'Edit unit' })), this.hasRoomEdit && h("wa-dropdown-item", { key: '0e57ae63304d7320d5f2a7c22c7a0c30f693a584', value: "edit-rates" }, t('Lcz_EditNightlyRates', { fallback: 'Edit Nightly Rates' })), isAgentMode(this.agent) && this.hasRoomEdit && (h("wa-dropdown-item", { key: 'a856c82fe5fb3b51d89d1a5291a1d9a5dfa6a0d8', value: "toggle" }, t('Lcz_ReassignFolioDropdown', {
            fallback: 'Re-assign %1 folio',
            params: [this.room.agent ? t('Lcz_GuestLowercase', { fallback: 'guest' }) : t('Lcz_AgentLowercase', { fallback: 'agent' })],
        }))), !!this.unitId && h("wa-dropdown-item", { key: '616dcf67655301774008a347af174c692eaf3a00', value: "add-extra-service" }, t('Lcz_AddExtraServiceToUnit', { fallback: 'Add extra service to this unit' })), this.hasRoomDelete && (h("wa-dropdown-item", { key: '229bd799e092384d89952983bb118f14578890bc', value: "delete", variant: "danger" }, t('Lcz_Delete', { fallback: 'Delete' })))))))));
    }
};
IrRoomHeader.style = irRoomHeaderCss();

const irVoidDocumentDialogCss = () => `.sc-ir-void-document-dialog-h{display:contents}.void-document-dialog__message.sc-ir-void-document-dialog{margin:0;font-size:0.9375rem;line-height:1.5;color:var(--wa-color-neutral-700, #3f3f46)}.void-document-dialog__footer.sc-ir-void-document-dialog{display:flex;justify-content:flex-end;gap:0.5rem}`;

const IrVoidDocumentDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.documentVoided = createEvent(this, "documentVoided");
        this.toast = createEvent(this, "toast");
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
    bookingService = new BookingService();
    async open(request) {
        this.request = request;
        this.isOpen = true;
    }
    async close() {
        this.isOpen = false;
    }
    get isInvoice() {
        return this.request?.documentType === FdTypes.Invoice;
    }
    async voidInvoice(documentNumber) {
        await this.bookingService.voidInvoice({
            invoice_nbr: documentNumber,
            property_id: calendar_data.property.id,
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
                title: t('Lcz_Error', { fallback: 'Error' }),
                description: t('Lcz_FailedToVoidDocument', { fallback: 'Failed to void document. Please try again.' }),
                position: 'top-right',
            });
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        const documentLabel = this.isInvoice ? t('Lcz_DocumentTypeInvoice', { fallback: 'Invoice' }) : t('Lcz_DocumentTypeReceipt', { fallback: 'Receipt' });
        const creditDocumentLabel = this.isInvoice ? t('Lcz_DocumentTypeCreditNote', { fallback: 'Credit Note' }) : t('Lcz_CreditReceipt', { fallback: 'Credit Receipt' });
        return (h(Host, { key: '63bab095dca402196e24e590044341b255055139' }, h("ir-dialog", { key: '540fbb8919f7d1de1503b5725ffb4b4f9f6ef8d0', label: t('Lcz_Alert', { fallback: 'Alert' }), open: this.isOpen, lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
                this.request = null;
            } }, h("p", { key: '3bcc60d461b1e603a8ba6e4180181044d8f25524', class: "void-document-dialog__message" }, t('Lcz_VoidDocumentConfirm', { fallback: 'Void %1 %2 by generating a %3?', params: [documentLabel, this.request?.documentNumber ?? '', creditDocumentLabel] })), h("div", { key: '1d7827a73ec989c99b1400088a333c3518fc7f19', slot: "footer", class: "void-document-dialog__footer" }, h("ir-custom-button", { key: '0a7a32d49f5ea0d69f4c47faa777170e7b02de09', "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral", disabled: this.isLoading }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '081b4de971453b4bfa154e03bf706a252d39394e', loading: this.isLoading, onClickHandler: () => this.handleConfirm(), size: "m", variant: "danger" }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
    }
};
IrVoidDocumentDialog.style = irVoidDocumentDialogCss();

const otaLabelCss = () => `*.sc-ota-label{margin:0;padding:0}.sc-ota-label-h{display:flex;margin-bottom:5px;gap:5px}.label_title.sc-ota-label{min-width:max-content;padding:0;margin:0;font-weight:600}.ota-message-list.sc-ota-label{margin:0 3px;padding:0;overflow:hidden;width:100%;word-wrap:break-word !important;overflow-wrap:break-word !important}.ota-message-item.sc-ota-label{width:100%;line-height:1.5;margin:0;padding:0;word-wrap:break-word !important;overflow-wrap:break-word !important}.ota-message-item.sc-ota-label::before{content:'- ';margin-inline-end:0.25rem}.ota-visibility-toggle.sc-ota-label{background:white;color:var(--blue);padding:0;margin:0;margin-inline-start:3px;font-size:12px;border:0}.ota-visibility-toggle.sc-ota-label:hover{color:#355270}.ota-message-list.sc-ota-label{margin:0 3px;padding:0;overflow:hidden;width:100%;word-wrap:break-word !important;overflow-wrap:break-word !important;white-space:normal;list-style:none}.ota-message-item.sc-ota-label{width:100%;line-height:1.5;margin:0 0 0 1.2em;padding:0;word-wrap:break-word !important;overflow-wrap:break-word !important;white-space:normal;position:relative}`;

const OtaLabel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, null, h("p", { class: 'label_title' }, this.label), h("ul", { class: "ota-message-list" }, displayedRemarks.map((remark, index) => (h("li", { key: v4(), class: "ota-message-item" }, remark.statement, ' ', this.remarks.length > this.maxVisibleItems && index === displayedRemarks.length - 1 && (h("button", { class: "ota-visibility-toggle", onClick: this.toggleShowAll }, this.showAll ? t('Lcz_ShowLess') : t('Lcz_ShowMore')))))))));
    }
};
OtaLabel.style = otaLabelCss();

export { IglDayUseUnitList as igl_day_use_unit_list, IrAgentBilling as ir_agent_billing, IrApplicablePolicies as ir_applicable_policies, IrArrivalTimeDialog as ir_arrival_time_dialog, IrBilling as ir_billing, IrBillingDrawer as ir_billing_drawer, IrBookingAssignItems as ir_booking_assign_items, IrBookingCityLedger as ir_booking_city_ledger, IrBookingDetails as ir_booking_details, IrBookingDetailsDrawer as ir_booking_details_drawer, IrBookingEditor as ir_booking_editor, IrBookingEditorDrawer as ir_booking_editor_drawer, IrBookingEditorForm as ir_booking_editor_form, IrBookingEditorHeader as ir_booking_editor_header, IrBookingExtraNote as ir_booking_extra_note, IrBookingGuarantee as ir_booking_guarantee, IrBookingHeader as ir_booking_header, IrBookingPricingDrawer as ir_booking_pricing_drawer, IrBookingPricingForm as ir_booking_pricing_form, IrBookingRooms as ir_booking_rooms, IrBookingSourceEditorDialog as ir_booking_source_editor_dialog, IrBookingSourceEditorForm as ir_booking_source_editor_form, IrCheckoutDialog as ir_checkout_dialog, IrCityLedgerFiscalDocumentsTable as ir_city_ledger_fiscal_documents_table, IrCityLedgerTransactionDrawer as ir_city_ledger_transaction_drawer, IrCityLedgerTransactionForm as ir_city_ledger_transaction_form, IrClAdjustmentFields as ir_cl_adjustment_fields, IrClCreditNoteFields as ir_cl_credit_note_fields, IrClDebitNoteFields as ir_cl_debit_note_fields, IrClInvoiceDialog as ir_cl_invoice_dialog, IrClInvoiceForm as ir_cl_invoice_form, IrClOpeningBalanceFields as ir_cl_opening_balance_fields, IrClPaymentFields as ir_cl_payment_fields, IrDepartureTimeDialog as ir_departure_time_dialog, IrEventsLog as ir_events_log, IrExtraService as ir_extra_service, IrExtraServiceConfig as ir_extra_service_config, IrExtraServiceConfigForm as ir_extra_service_config_form, IrExtraServices as ir_extra_services, IrGuestBilling as ir_guest_billing, IrGuestInfoDrawer as ir_guest_info_drawer, IrGuestInfoForm as ir_guest_info_form, IrHbPreferenceDialog as ir_hb_preference_dialog, IrPaymentAnalytics as ir_payment_analytics, IrPaymentDetails as ir_payment_details, IrPaymentFolio as ir_payment_folio, IrPaymentFolioForm as ir_payment_folio_form, IrPaymentItem as ir_payment_item, IrPaymentSummary as ir_payment_summary, IrPaymentsFolio as ir_payments_folio, IrPickup as ir_pickup, IrPickupForm as ir_pickup_form, IrPickupView as ir_pickup_view, IrPmsLogs as ir_pms_logs, IrReservationInformation as ir_reservation_information, IrRoom as ir_room, IrRoomBreakdown as ir_room_breakdown, IrRoomDetails as ir_room_details, IrRoomExtraServices as ir_room_extra_services, IrRoomGuests as ir_room_guests, IrRoomGuestsForm as ir_room_guests_form, IrRoomHeader as ir_room_header, IrVoidDocumentDialog as ir_void_document_dialog, OtaLabel as ota_label };

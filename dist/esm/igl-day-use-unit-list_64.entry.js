import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, d as getElement } from './index-Kqbk9HdW.js';
import { b as getExtraServiceDefaultPrice, c as calendar_data, a as getBabyCotPricingModel, i as isOptimReadOnly, d as isSingleUnit } from './calendar-data-MrKyEgFn.js';
import { b as booking_store, B as BookingService, m as modifyBookingStore, e as reserveRooms, V as VariationService, k as setDayUseSelection, u as updateBookedByGuest, s as setBookingDraft, d as setBookingSelectOptions, r as resetBookingStore, l as fillMissingReservedGuestNames, n as getReservedRooms, o as resetAvailability, a as resetReserved, p as hasAtLeastOneRoomSelected, c as calculateTotalRooms, q as getBookingTotalPrice, h as syncFirstRoomGuestName, t as bookedByGuestBaseData, Z as ZIEntrySchema } from './booking.service-CGh5oFNL.js';
import { p as getDayUseUnitAvailability, D as DAY_USE_CATEGORY_CODE, b as createDateWithOffsetAndHour, f as buildSplitIndex, c as calculateDaysBetweenDates, d as getPrivateNote, j as formatName } from './booking-CGjPrFOk.js';
import { C as CityLedgerService } from './index-ZBFlYBwr.js';
import { T as Token } from './Token-CkxFIO_J.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { i as formatAmount, H as ExtraServiceSchema, e as extras, k as showToast, g as getReleaseHoursString, I as toFloat, a as canCheckout, c as canCheckIn, R as ROOM_IN_OUT, l as getEntryValue, J as renderTime, K as validateSharedPerson, Z as ZSharedPerson } from './utils-aikO_b6Z.js';
import { l as locales } from './locales.store-C-PbJt6i.js';
import { i as isAgentMode, _ as _formatTime, a as _formatDate, b as _getDay } from './functions-81yL-Vms.js';
import { a as actionableClTypes, m as mapClTxToFolioRow } from './city-ledger.service-K1jpksja.js';
import { a as axios } from './axios-B50ozOIF.js';
import { R as RoomService } from './room.service-DpkAyTYs.js';
import { P as PaymentService } from './payment.service-D2gbn5FN.js';
import { i as isRequestPending } from './ir-interceptor.store-P7NCUZUW.js';
import { A as AgentsService } from './agents.service-CfKXQqnt.js';
import { r as realtimeService } from './realtime.service-BLk631kq.js';
import { R as RoomsGuestsSchema, B as BookedByGuestSchema, D as DayUseHoursSchema, c as createInitialTransactionFormDraft, h as hydrateFormDraftFromTx, r as resetDraftForTransactionType, v as validateCityLedgerTransaction, t as transactionTypeFieldSchema, T as TRANSACTION_TYPE_RATES, a as DATE_INPUT_FORMAT, b as amountFieldSchema, d as taxIdFieldSchema, e as dateFieldSchema, f as entryTypeFieldSchema, p as paymentMethodCodeFieldSchema } from './ir-city-ledger-transaction-form.schema-OlNFvCXV.js';
import { P as PropertyService, t as taxationModes } from './index-BAOyChVe.js';
import { c as createTimeToMask } from './masks-BtrHTRt_.js';
import { l as libExports } from './index-DeW5X45W.js';
import { b as InvoiceableItemReason, F as FdTypes, a as FdStatus, C as ClTxTypeCode, V as VatIncludedCodes, I as InOut, P as PayTypes, c as PayStatus, H as HbPreference } from './enums--hu2_M6P.js';
import { c as createColumnHelper, u as useTable, f as flexRender, g as getSortedRowModel, a as getCoreRowModel } from './useTable-D3LS_BXH.js';
import { t as toAccChargeRule, f as findAccTax, b as getTopLevelSvcCategories, g as groupSvcCategoriesByParent } from './svc-category.utils-BUHTr2yK.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import { P as PAYMENT_TYPES_WITH_METHOD } from './global.variables-34GsmACS.js';
import { M as MaskedRange } from './index-BQB1ooJC.js';
import './index-BJS0kaeV.js';
import './commonSchemas-ByEkDTMV.js';
import './type-D7rOPtKA.js';
import './_commonjsHelpers-BFTU3MAI.js';

const iglDayUseUnitListCss = () => `.sc-igl-day-use-unit-list-h{display:block;height:100%}.day-use-unit-list__grid.sc-igl-day-use-unit-list{display:grid;grid-template-columns:minmax(50px, max-content) 200px 1fr;column-gap:1rem;row-gap:0.25rem;width:100%;animation:day-use-unit-list-in var(--wa-transition-normal, 180ms) ease-out both}.day-use-unit-list__infos.sc-igl-day-use-unit-list{display:flex;flex-direction:column;gap:0.5rem;margin-bottom:1rem}.day-use-unit-list__empty-container.sc-igl-day-use-unit-list{min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center;animation:day-use-unit-list-in var(--wa-transition-normal, 180ms) ease-out both}@keyframes day-use-unit-list-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}@media (prefers-reduced-motion: reduce){.day-use-unit-list__grid.sc-igl-day-use-unit-list,.day-use-unit-list__empty-container.sc-igl-day-use-unit-list{animation:none}}.day-use-unit-list__roomtype-name.sc-igl-day-use-unit-list{grid-column:1 / -1;margin:1rem 0 0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m);margin-bottom:0.5rem}.day-use-unit-list__roomtype-name.sc-igl-day-use-unit-list:first-child{margin-top:0}.day-use-unit-list__row.sc-igl-day-use-unit-list{display:grid;grid-template-columns:subgrid;grid-column:1 / -1;align-items:center;min-height:var(--wa-form-control-height, 2.25rem);border-radius:var(--wa-border-radius-m);transition:background-color var(--wa-transition-fast, 120ms) ease}.day-use-unit-list__row--current.sc-igl-day-use-unit-list{background-color:var(--wa-color-brand-fill-quiet)}.day-use-unit-list__unit-name.sc-igl-day-use-unit-list{display:flex;align-items:center;gap:0.25rem;white-space:nowrap;color:var(--wa-color-text-normal);margin-inline-start:1rem}.day-use-unit-list__day-status-icon.sc-igl-day-use-unit-list{margin-inline-start:0.25rem;vertical-align:middle}.day-use-unit-list__price-input.sc-igl-day-use-unit-list{width:100%}.day-use-unit-list__book-button.sc-igl-day-use-unit-list{justify-self:start}.day-use-unit-list__current-tag.sc-igl-day-use-unit-list{flex-shrink:0}`;

const IglDayUseUnitList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.unitSelected = createEvent(this, "unitSelected");
    }
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
    /** Icon + tooltip shown next to a unit's name for each same-day movement (`getDayUseUnitDayStatus`). */
    static DAY_STATUS_DISPLAY = {
        checkin: { icon: 'plane-arrival', tooltip: 'Check-in happening today' },
        checkout: { icon: 'plane-departure', tooltip: 'Check-out happening today' },
        turnover: { icon: 'rotate', tooltip: 'Turnover happening today' },
    };
    getAvailableUnits(roomType) {
        const evaluated = (roomType.physicalrooms ?? []).map(unit => {
            const { available, dayStatus } = getDayUseUnitAvailability(unit.calendar_cell);
            return { unit, available, dayStatus: this.isCurrentUnit(unit.id) ? null : dayStatus };
        });
        const bookable = evaluated.filter(({ unit, available }) => available && (this.isCurrentUnit(unit.id) || !this.bookedUnitIds?.has(unit.id)));
        if (this.unitId === undefined || this.unitId === null || this.unitId === '') {
            return bookable;
        }
        return bookable.filter(({ unit }) => unit.id.toString() === this.unitId.toString());
    }
    get defaultPrice() {
        const svcDefaultPrice = getExtraServiceDefaultPrice(DAY_USE_CATEGORY_CODE);
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
        const availableRoomTypes = (this.roomTypes ?? []).filter(roomType => roomType.is_available_to_book);
        const hasBookableUnit = availableRoomTypes.some(roomType => this.getAvailableUnits(roomType).length > 0);
        if (this.hasSearched && !hasBookableUnit) {
            return (h("div", { class: "day-use-unit-list__empty-container" }, h("ir-empty-state", { message: "No units available for the selected date." })));
        }
        return (h(Host, null, availableRoomTypes.length > 0 && (h("div", { class: "day-use-unit-list__infos" }, h("p", { class: 'm-0 p-0' }, this.currentExtraService ? 'Edit the existing unit or switch the booking to another one.' : 'Pick a unit for day-use.'), h("wa-callout", { size: "s", variant: "neutral", appearance: "filled", class: "booking-editor-header__tax_statement" }, calendar_data.tax_statement))), h("div", { class: "day-use-unit-list__grid" }, availableRoomTypes.map(roomType => {
            const units = this.getAvailableUnits(roomType);
            if (units.length === 0) {
                return null;
            }
            return (h(Fragment, null, h("h5", { class: "day-use-unit-list__roomtype-name" }, roomType.name), units.map(({ unit, dayStatus }) => {
                const isCurrent = this.isCurrentUnit(unit.id);
                const dayStatusDisplay = dayStatus ? IglDayUseUnitList.DAY_STATUS_DISPLAY[dayStatus] : null;
                return (h("div", { class: `day-use-unit-list__row${isCurrent ? ' day-use-unit-list__row--current' : ''}`, key: `day-use-unit-row-${unit.id}` }, h("span", { class: "day-use-unit-list__unit-name" }, unit.name, dayStatusDisplay && (h(Fragment, null, h("wa-tooltip", { for: `day-use-day-status-${unit.id}` }, dayStatusDisplay.tooltip), h("wa-icon", { name: dayStatusDisplay.icon, id: `day-use-day-status-${unit.id}`, class: `day-use-unit-list__day-status-icon day-use-unit-list__day-status-icon--${dayStatus}` })))), h("ir-input", { class: "day-use-unit-list__price-input", size: "s", mask: "price", value: this.getPrice(unit.id).toString(), "onText-change": e => (this.priceOverrides = { ...this.priceOverrides, [unit.id]: Number(e.detail) }) }, h("span", { slot: "start" }, this.currency?.symbol)), h("ir-custom-button", { "data-testid": "book", type: "button", size: "s", variant: "brand", appearance: this.currentExtraService && !isCurrent ? 'outlined' : undefined, class: "day-use-unit-list__book-button", loading: this.resolvingUnitId === unit.id, disabled: this.resolvingUnitId !== null && this.resolvingUnitId !== unit.id, onClickHandler: () => this.unitSelected.emit({ unit, roomType, price: this.getPrice(unit.id), isCustomPrice: this.isCustomPrice(unit.id) }) }, "Book")));
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
    tokenService = new Token();
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
        return (h(Host, null, h("div", { class: "billing__container" }, h("div", { class: "billing__section-title-row" }, h("h4", { class: "billing__section-title" }, "Issued documents"), h("ir-custom-button", { onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.invoiceDialogRef.openModal();
            }, appearance: 'accent', class: "booking-header__stretched-btn", size: "s", variant: "brand" }, "Issue Invoice")), h("ir-city-ledger-fiscal-documents-table", { class: 'agent-billing__table', rows: this.fiscalDocuments, booking: this.booking, isLoading: this.isLoading, hasFetched: this.hasFetched, agentId: this.booking?.agent?.id ?? null, currencySymbol: calendar_data.property?.currency?.symbol ?? '$', fromDate: this.booking?.from_date ?? null, toDate: this.booking?.to_date ?? null, hasDates: true, ticket: this.tokenService.getToken(), propertyId: calendar_data.property?.id, onFetchRequested: () => this.fetchFiscalDocuments() })), h("ir-cl-invoice-dialog", { mode: "booking", agentId: this.booking.agent?.id, booking: this.booking, startDate: this.booking.from_date, endDate: this.booking.to_date, currencyId: calendar_data.property.currency.id, ref: el => (this.invoiceDialogRef = el) })));
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
                if (!room.rateplan.is_non_refundable) {
                    const inDate = hooks(room.from_date, 'YYYY-MM-DD', true);
                    const outDate = hooks(room.to_date, 'YYYY-MM-DD', true);
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

const irApplicablePoliciesCss = () => `.sc-ir-applicable-policies-h{display:flex;flex-direction:column;gap:1rem}.applicable-policies__container.sc-ir-applicable-policies{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:1rem}.applicable-policies__title.sc-ir-applicable-policies{font-size:1rem;font-weight:700;padding:0;margin:0}.applicable-policies__no-penalty.sc-ir-applicable-policies{padding:0;margin:0;font-size:0.875rem}.applicable-policies__statements.sc-ir-applicable-policies{box-sizing:border-box;padding:0}.applicable-policies__statements.sc-ir-applicable-policies::part(message),.applicable-policies__statements.sc-ir-applicable-policies [part~="message"]{max-height:245px;overflow-y:auto;display:flex;flex-direction:column;padding:1em;gap:0.5rem}.applicable-policies__highlighted-bracket.sc-ir-applicable-policies{color:var(--wa-color-brand-50)}.applicable-policies__statement.sc-ir-applicable-policies{display:flex;flex-direction:column;border-bottom:1px solid var(--wa-color-neutral-70);padding-bottom:0.5rem}.applicable-policies__statement.sc-ir-applicable-policies:last-child{border-bottom:0;padding-bottom:0}.applicable-policies__room.sc-ir-applicable-policies{padding:0;margin:0;padding-bottom:0.5rem}.applicable-policies__bracket.sc-ir-applicable-policies{display:grid;grid-template-columns:repeat(2, 1fr);gap:0.25rem;font-size:0.875rem;padding-bottom:0.5rem}.applicable-policies__bracket-dates.sc-ir-applicable-policies{display:flex;align-items:center;gap:0.5rem;padding:0;margin:0}.applicable-policies__amount.sc-ir-applicable-policies{text-align:right;padding:0;margin:0;font-weight:600}.applicable-policies__statement-text.sc-ir-applicable-policies{padding:0;margin:0}.applicable-policies__brackets-table.sc-ir-applicable-policies{display:none}.applicable-policies__guarantee.sc-ir-applicable-policies{box-sizing:border-box;padding:0.5rem 1rem;margin-bottom:0.5rem;font-size:0.875rem}.applicable-policies__guarantee.sc-ir-applicable-policies::part(message),.applicable-policies__guarantee.sc-ir-applicable-policies [part~="message"]{display:flex;align-items:center;justify-content:space-between}.applicable-policies__guarantee-info.sc-ir-applicable-policies{display:flex;align-items:center;gap:0.5rem}.applicable-policies__guarantee-date.sc-ir-applicable-policies{color:var(--wa-color-text-quiet, #666);padding:0;margin:0}.applicable-policies__guarantee-amount.sc-ir-applicable-policies{font-weight:600;color:var(--wa-color-text-normal, #222);padding:0;margin:0}.applicable-policies__guarantee-label.sc-ir-applicable-policies{color:var(--wa-color-danger-50);font-weight:700;padding:0;margin:0}.applicable-policies__guarantee-action.sc-ir-applicable-policies{width:fit-content}@media (min-width: 768px){.applicable-policies__brackets.sc-ir-applicable-policies{display:none}.applicable-policies__brackets-table.sc-ir-applicable-policies{display:block;width:100%;font-size:0.875rem}.applicable-policies__brackets-table.sc-ir-applicable-policies table.sc-ir-applicable-policies{width:100%}.applicable-policies__amount.sc-ir-applicable-policies,.applicable-policies__bracket-dates.sc-ir-applicable-policies{white-space:nowrap}.applicable-policies__statement-text.sc-ir-applicable-policies{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}}`;

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
                language: this.language,
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
            return d1.format('MMM DD');
        }
        return d1.format('MMM DD, YYYY');
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
                leftLabel: `${momentCheckInDate.format('MMM DD')} onwards`,
                showArrow: false,
                rightLabel: '',
            };
        }
        return {
            leftLabel: bracketDueDate.format('MMM DD'),
            showArrow: true,
            rightLabel: hooks(checkInDate, 'YYYY-MM-DD').format('MMM DD, YYYY'),
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
                leftLabel: 'Until',
                showArrow: false,
                rightLabel: nextBracketDueDate.isSame(momentCheckInDate, 'dates')
                    ? nextBracketDueDate.clone().add(-1, 'days').format('MMM DD, YYYY')
                    : nextBracketDueDate.format('MMM DD, YYYY'),
            };
        }
        if (hooks(bracket.due_on, 'YYYY-MM-DD').isSameOrAfter(momentCheckInDate, 'days')) {
            return {
                leftLabel: `${momentCheckInDate.format('MMM DD')} onwards`,
                showArrow: false,
                rightLabel: '',
            };
        }
        // Last bracket
        if (index === brackets.length - 1) {
            return {
                leftLabel: bracketDueDate.clone().format('MMM DD'),
                showArrow: true,
                rightLabel: hooks(checkInDate).format('MMM DD, YYYY'),
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
            rightLabel: haveSameDays ? '' : periodEndDate.add(-1, 'days').format('MMM DD, YYYY'),
        };
    }
    generateCancellationStatement() {
        const label = 'if cancelled today';
        const { cancelation_penality_as_if_today } = this.booking.financial;
        if (cancelation_penality_as_if_today === 0) {
            if (this.booking.financial.collected > 0) {
                return `No refund ${label}`;
            }
            return `No payment required ${label}`;
        }
        return `${cancelation_penality_as_if_today < 0 ? 'Refund' : 'Charge'} ${formatAmount(calendar_data.currency.symbol, Math.abs(cancelation_penality_as_if_today))} ${label}`;
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
        return (h(Host, null, this.guaranteeAmount !== 0 && (h("section", null, h("wa-callout", { variant: "danger", class: "applicable-policies__guarantee" }, h("div", { class: "applicable-policies__guarantee-info" }, h("p", { class: "applicable-policies__guarantee-date" }, hooks(this.booking.booked_on.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { class: "applicable-policies__guarantee-amount" }, h("span", { class: "px-1" }, formatAmount(calendar_data.currency.symbol, remainingGuaranteeAmount < 0 ? Math.abs(remainingGuaranteeAmount) : this.guaranteeAmount))), h("p", { class: "applicable-policies__guarantee-label" }, "Guarantee ", remainingGuaranteeAmount < 0 ? 'balance' : '')), remainingGuaranteeAmount < 0 && (h("div", { class: "applicable-policies__guarantee-action" }, h("ir-custom-button", { onClickHandler: () => {
                this.generatePayment.emit({
                    amount: Math.abs(remainingGuaranteeAmount),
                    currency: calendar_data.currency,
                    due_on: hooks().format('YYYY-MM-DD'),
                    pay_type_code: null,
                    reason: '',
                    type: 'OVERDUE',
                });
            }, size: "s" }, "Pay")))))), h("section", null, h("div", { class: "applicable-policies__container" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("p", { class: "applicable-policies__title font-size-large p-0 m-0" }, "Cancellation Schedule"), h(HelpDocButton, { message: "Help", href: "https://help.igloorooms.com/extranet/booking-details/guarantee-and-cancellation" })), h("p", { class: "applicable-policies__no-penalty" }, this.generateCancellationStatement())), this.cancellationStatements?.length > 0 && this.cancellationStatements.every(e => e.brackets.length > 0) && this.shouldShowCancellationBrackets && (h("wa-callout", { variant: "brand", class: "applicable-policies__statements" }, this.cancellationStatements?.map(statement => {
            const currentBracket = this._getCurrentBracket(statement.brackets);
            // const isTodaySameOrAfterCheckInDate = moment().isSameOrAfter(moment(statement.checkInDate, 'YYYY-MM-DD').add(1, 'days'));
            return (h("div", { class: "applicable-policies__statement" }, this.cancellationStatements.length > 1 && (h("p", { class: "applicable-policies__room" }, h("b", null, statement.roomType.name), " ", statement.ratePlan['short_name'], " ", statement.ratePlan.is_non_refundable ? ` - ${locales.entries.Lcz_NonRefundable}` : '')), h("div", { class: "applicable-policies__brackets" }, statement.brackets.map((bracket, idx) => {
                const { leftLabel, rightLabel, showArrow } = this.getBracketLabelsAndArrowState({
                    index: idx,
                    bracket,
                    brackets: statement.brackets,
                    checkInDate: statement.checkInDate,
                });
                const isInCurrentBracket = hooks(bracket.due_on, 'YYYY-MM-DD').isSame(currentBracket, 'date');
                return (h("div", { class: { 'applicable-policies__bracket': true, 'applicable-policies__highlighted-bracket': isInCurrentBracket } }, h("p", { class: "applicable-policies__bracket-dates" }, leftLabel, " ", showArrow && h("ir-icons", { name: "arrow_right", class: "applicable-policies__icon", style: { '--icon-size': '0.875rem' } }), ' ', rightLabel), h("p", { class: "applicable-policies__amount" }, formatAmount(calendar_data.currency.symbol, bracket.gross_amount)), h("p", { class: "applicable-policies__statement-text" }, bracket.amount === 0 ? 'No penalty' : bracket.statement)));
            })), h("div", { class: "applicable-policies__brackets-table" }, h("table", null, h("tbody", null, statement.brackets.map((bracket, idx) => {
                const { leftLabel, rightLabel, showArrow } = this.getBracketLabelsAndArrowState({
                    index: idx,
                    bracket,
                    brackets: statement.brackets,
                    checkInDate: statement.checkInDate,
                });
                const isInCurrentBracket = hooks(bracket.due_on, 'YYYY-MM-DD').isSame(currentBracket, 'date');
                return (h("tr", { class: { 'applicable-policies__highlighted-bracket': isInCurrentBracket } }, h("td", { class: "applicable-policies__bracket-dates" }, leftLabel, " ", showArrow && h("ir-icons", { name: "arrow_right", class: "applicable-policies__icon", style: { '--icon-size': '0.875rem' } }), ' ', rightLabel), h("td", { class: "applicable-policies__amount px-1" }, formatAmount(calendar_data.currency.symbol, bracket.gross_amount)), h("td", { class: "applicable-policies__statement-text" }, bracket.amount === 0 ? 'No penalty' : bracket.statement)));
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
        return (h("ir-dialog", { key: '9288642eb938202902c921cc05d1f3bd78ccdbe8', open: this.open, label: "Expected Arrival Time", ref: el => (this.dialogRef = el), onIrDialogHide: e => {
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
            } }, h("div", { key: 'e95628451f611958302b398cb888d508ad49022f', class: 'ir-time-dialog__body' }, h("div", { key: 'ce6866c23965f179ba5640cc0b5d959fba11e494', class: 'ir-time-dialog__current-unit' }, h("span", { key: '4adb44b54c290af24cfaa219e1592b8e128d08e9' }, this.room?.roomtype?.name), " ", h("span", { key: '172f2441ba0d28761ca247b8ef43d2ca6ded46df' }, this.room?.rateplan?.short_name), " ", h("ir-unit-tag", { key: '2cc6a8ca3cd5c0fdb1b7eb81865ccc83fd0dba00', unit: this.room?.unit?.name })), h("wa-select", { key: '51500dd0aec9c1774d52c7d8fca0c84902020117', size: "s", placeholder: "Not provided", value: this.selectedValue ?? '', "onwa-after-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, defaultValue: this.selectedValue ?? '', onchange: e => (this.selectedValue = e.target.value) }, this.arrivalTime?.map(time => (h("wa-option", { key: time.CODE_NAME, value: time.CODE_NAME }, time[`CODE_VALUE_${this.language?.toUpperCase()}`] ?? time[`CODE_VALUE_EN`], this.isEarlyCheckIn(time) ? ' (Early check-in)' : '')))), this.selectedIsEarlyCheckIn && (h("div", { key: '4b95db9c6eeb2986af2a0c94639b255d64a1b540', class: "ir-time-dialog__insight" }, h("div", { key: '7a1182e5511f893f7ccc88332ed129b829e79836', class: "ir-time-dialog__insight-row" }, h("wa-icon", { key: '09a8c01980f05cebd2b10dec3102a8693188e5d8', class: "ir-time-dialog__insight-icon", name: "clock" }), h("div", { key: '471858bd0ed849b1520bbab1f3a1b4675523e9de', class: "ir-time-dialog__insight-copy" }, h("p", { key: 'b591a8ed8ac7c395fecdd8af28a5b1da4ba931ea', class: "ir-time-dialog__insight-title" }, "Would you like to charge it as an ", h("b", { key: '3a44a68bfcfd68d5c6554be293b53f93c955258a' }, "Early Check-in"), "?"), h("p", { key: 'b918383e871c31419de9218531a6c783f97bbc1f', class: "ir-time-dialog__insight-subtitle" }, "This will be added as an accommodation extra service"))), this.createExtraService && (h("div", { key: '403f460cb20c8c051467c9b04014772367a160a0', class: "ir-time-dialog__insight-price" }, h("ir-validator", { key: 'e270dba9d302f69840a6f7e4aba65ac9aa3818d0', value: this.extraServicePrice, schema: ExtraServiceSchema.shape.price }, h("ir-input", { key: '4d7537a5f0891c6c5eea91603da048cbfd829604', "onText-change": e => (this.extraServicePrice = Number(e.detail)), defaultValue: this.extraServicePrice?.toString(), value: this.extraServicePrice?.toString(), mask: 'price', withClear: true, type: "text" }, h("span", { key: '97daa7aed3a0196df11eeb3ba8ea6c876645a2c9', slot: "start" }, this.currencySymbol)))))))), h("div", { key: '491462ee1e739b73488eecb3c6edce6eee2d058e', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'a3f8fb192d290ec29f3601fa1125aaa540277d6d', size: "m", variant: "neutral", appearance: "filled", "data-dialog": "close" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'd93fa889a9fbb657269a57f8901aab9c586edc73', size: "m", variant: "brand", loading: this.isLoading, disabled: !this.selectedValue, onClickHandler: e => this.handleConfirm(e), appearance: "accent" }, locales.entries.Lcz_Save))));
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
                }, active: this.currentTab }, h("wa-tab", { panel: "guest", disabled: this.isAllServicesAgentOwned }, "Guest"), h("wa-tab", { panel: "agent" }, "Agent"), h("wa-tab-panel", { name: "guest" }, this.currentTab === 'guest' && h("ir-guest-billing", { booking: this.booking })), h("wa-tab-panel", { name: "agent" }, this.currentTab === 'agent' && h("ir-agent-billing", { booking: this.booking }))));
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
        return (h("ir-drawer", { key: 'a2b5632ac767d8f544a1abd0ee0a77bb2b137624', style: {
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
            }, open: this.open, label: "Billing" }, this.open && h("ir-billing", { key: 'cf3d45552c0601132c6198d77bba476b0f8d31b5', isAllServicesAgentOwned: this.isAllServicesAgentOwned, booking: this.booking, agent: this.agent })));
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
            } }, h("wa-checkbox", { checked: checked, onchange: () => this.toggleItem(item.key) }), h("div", { class: "assign-item__text" }, h("div", { class: "assign-item__room-header" }, h("span", { class: "assign-item__label" }, item.label), item.ratePlanShortName && h("span", { class: "assign-item__rateplan" }, item.ratePlanShortName), item.unitName && h("ir-unit-tag", { unit: item.unitName }), item.isNonRefundable && h("span", { class: "assign-item__badge assign-item__badge--nr" }, "Non-refundable")), item.fromDate && item.toDate && (h("ir-date-view", { class: "assign-item__date", format: "ddd, MMM DD, YYYY", from_date: item.fromDate, to_date: item.toDate, showDateDifference: false })))));
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
            } }), h("div", { class: "assign-item__text" }, h("div", { class: "assign-item__room-header" }, h("span", { class: "assign-item__label" }, item.label), item.price != null && item.price > 0 && h("span", { class: "assign-item__rateplan" }, formatAmount(item.currencySymbol, item.price))), item.fromDate && (h("ir-date-view", { class: "assign-item__date", format: "ddd, MMM DD, YYYY", from_date: item.fromDate, to_date: item.toDate, showDateDifference: false })))));
    }
    render() {
        const rooms = this.items.filter(i => i.type === 'room');
        const pickups = this.items.filter(i => i.type === 'pickup');
        const extras = this.items.filter(i => i.type === 'extra');
        return (h(Host, { key: '1855f53b1753821b825a282a354c48be508844d0', size: "s" }, h("div", { key: '6e68e061bd76c2ffcef852aabf071feee3eecfd3', class: "assign-container" }, h("p", { key: '5024d8eb04725379520f97998d054bfa49a05867', class: "assign-intro" }, "Select services for the Agent folio; others remain on the Guest folio."), rooms.length > 0 && (h("div", { key: '3dda880279317c2a7aeb2d3bce3b3716372d4a5c', class: "assign-section" }, h("p", { key: 'c4373fc01ddca0e410624e036145a4601b8690ac', class: "assign-section__label" }, "Accommodation"), rooms.map(item => this.renderRoomItem(item)))), pickups.length > 0 && (h("div", { key: 'f70bb150e9e612da30e8d39a1e527718df961593', class: "assign-section" }, h("p", { key: '1e531f5e98d130993220d1b52947b3c196eb633b', class: "assign-section__label" }, "Pickup"), pickups.map(item => this.renderCheckItem(item)))), extras.length > 0 && (h("div", { key: '451e6cf74476204315b83a296994d0166a8f7bcb', class: "assign-section" }, h("p", { key: '275b4fe16f8fe6396fda04c611791960dbdfe3ea', class: "assign-section__label" }, "Extra Services"), extras.map(item => this.renderExtraItem(item)))))));
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
        return this.svcCategories.map(s => ({ id: s.CODE_NAME, label: s.CODE_VALUE_EN }));
    }
    get bookingOptions() {
        return this.booking?.booking_nbr ? [{ id: this.booking.booking_nbr, label: `#${this.booking.booking_nbr}` }] : [];
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
            return (h("div", { key: row._rowId, class: { 'folio-row': true, '--without-dropdown': !showDropdown } }, h("div", { class: "folio-row__header" }, h("div", { class: "folio-row__meta" }, h("span", { class: "folio-row__date" }, hooks(row.serviceDate).format('MMM DD, YYYY'))), h("div", { class: "folio-row__right" }, h("span", { class: "folio-row__amount" }, row.debit !== null && h("span", { class: "is-debit" }, row.debit ? this.formatAmount(row.debit) : ''), row.credit !== null && h("span", { class: "is-credit" }, row.credit ? this.formatAmount(row.credit) : '')), showDropdown && (h("wa-dropdown", { "onwa-hide": e => {
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
                } }, h("wa-button", { size: "s", class: "folio-row__action-trigger", appearance: "plain", slot: "trigger" }, h("wa-icon", { name: "ellipsis-vertical", class: "folio-row__action-trigger-icon" })), h("wa-dropdown-item", { value: "edit" }, h("wa-icon", { slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { value: "delete", variant: "danger" }, h("wa-icon", { slot: "icon", name: "trash" }), "Delete"))))), h("div", { class: 'folio-row-desc_row' }, row.description && h("p", { class: "folio-row__desc" }, row.description), h("ir-cl-status-tag", { style: { marginRight: showDropdown ? '1.9rem' : '0' }, transaction: { _rowId: '', ...mapClTxToFolioRow(row._raw), balance: 0 } }))));
        })));
    }
    render() {
        if (!this.booking?.agent) {
            return h(Host, null);
        }
        return (h(Host, null, h("wa-card", { appearance: "plain", class: "booking-city-ledger__card" }, h("div", { slot: "header", class: "booking-city-ledger__header-title" }, h("p", { class: "font-size-large p-0 m-0" }, " Agent Folio")), h("wa-tooltip", { for: "booking-city-ledger-add-btn" }, "Add folio entry"), h("ir-custom-button", { slot: "header-actions", id: "booking-city-ledger-add-btn", size: "s", variant: "neutral", appearance: "plain", onClickHandler: () => {
                this.editingRow = null;
                this.drawerOpen = true;
            } }, h("wa-icon", { name: "plus", style: { fontSize: '1rem' } })), this.isLoading ? (h("div", { class: "booking-city-ledger__spinner-wrap" }, h("ir-spinner", null))) : this.error ? (h("p", { class: "booking-city-ledger__error" }, this.error)) : (this.renderRows())), h("ir-city-ledger-transaction-drawer", { open: this.drawerOpen, drawerLabel: this.editingRow ? 'Edit Folio Entry' : 'New Folio Entry', agent: this.booking.agent, booking: this.booking, transaction: this.editingRow?._raw ?? null, serviceCategoryOptions: this.serviceCategoryOptions, bookingOptions: this.bookingOptions, onCloseDrawer: () => {
                this.drawerOpen = false;
                this.editingRow = null;
            }, onTransactionSaved: () => {
                this.drawerOpen = false;
                this.editingRow = null;
                // this.clRefreshNeeded.emit();
            } }), h("ir-dialog", { label: "Delete Entry", open: !!this.deleteTarget, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!this.isDeleting)
                    this.deleteTarget = null;
            } }, h("p", null, "Are you sure you want to delete this entry? This action cannot be undone."), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => (this.deleteTarget = null) }, "Cancel"), h("ir-custom-button", { size: "m", variant: "danger", loading: this.isDeleting, onClickHandler: () => this.handleDelete() }, "Delete")))));
    }
};
IrBookingCityLedger.style = irBookingCityLedgerCss();

const irBookingDetailsCss = () => `.sc-ir-booking-details-h{overflow-x:hidden;--ir-dialog-max-width:20rem;text-align:start;padding:var(--wa-space-l);position:relative;height:100%}.sc-ir-booking-details-h *.sc-ir-booking-details{box-sizing:border-box}.font-medium.sc-ir-booking-details{font-weight:600}.sc-ir-booking-details-h th.sc-ir-booking-details{font-weight:600}.booking-details__booking-info.sc-ir-booking-details{display:grid;padding:var(--wa-space-m);gap:var(--wa-space-l)}.booking-details__info-column.sc-ir-booking-details{display:flex;flex-direction:column;gap:var(--wa-space-l);min-width:0}@media (min-width: 890px){.booking-details__booking-info.sc-ir-booking-details{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 1024px){.booking-details__booking-info.sc-ir-booking-details{gap:var(--wa-space-xl)}}.h-28.sc-ir-booking-details{height:2rem}.mx-01.sc-ir-booking-details{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}.date-margin.sc-ir-booking-details{margin-right:5px}.pickup-margin.sc-ir-booking-details{margin-bottom:7px !important}.header-date.sc-ir-booking-details{padding-left:5px !important}.pointer.sc-ir-booking-details{cursor:pointer}.sc-ir-booking-details:root{--sidebar-width:50rem}.loading-container.sc-ir-booking-details{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.sm-padding-right.sc-ir-booking-details{padding-right:0.2rem}.sm-padding-left.sc-ir-booking-details{padding-left:0.2rem}.sm-padding-top.sc-ir-booking-details{padding-top:0.2rem}.sm-padding-bottom.sc-ir-booking-details{padding-bottom:0.2rem}.info-notes.sc-ir-booking-details{list-style:none;padding-left:0}.light-blue-bg.sc-ir-booking-details{background-color:#acecff;padding:0.2rem 0.3rem}.iframeHeight.sc-ir-booking-details{height:17.5rem}.dialog-title.sc-ir-booking-details{width:fit-content}`;

const IrBookingDetails = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bookingChanged = createEvent(this, "bookingChanged");
        this.closeSidebar = createEvent(this, "closeSidebar");
    }
    bookingService = new BookingService();
    roomService = new RoomService();
    paymentService = new PaymentService();
    agentService = new AgentsService();
    cityLedgerService = new CityLedgerService();
    unsubscribeRealtime = null;
    clLockingPending = new Map();
    clLockingTimer = null;
    token = new Token();
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
     * Authentication token used to initialize the component.
     * Triggers re-initialization when changed.
     */
    ticket = '';
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
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
    componentWillLoad() {
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    disconnectedCallback() {
        this.unsubscribeRealtime?.();
        this.unsubscribeRealtime = null;
        if (this.clLockingTimer !== null) {
            clearTimeout(this.clLockingTimer);
            this.clLockingTimer = null;
        }
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
                    message: locales.entries.Lcz_EmailBookingto.replace('%1', this.booking.guest.email),
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
                    TITLE: `${locales.entries.Lcz_AddingUnitToBooking}# ${this.booking.booking_nbr}`,
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
        if (service?.category?.code === DAY_USE_CATEGORY_CODE) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.bookingItem = {
                event_type: 'EDIT_DAY_USE',
                TITLE: `Edit Day-Use`.trim(),
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
                return { _rowId: String(i), ...mapClTxToFolioRow(tx), balance: runningBalance };
            });
            this.rawTransactions = result.My_Cl_tx;
        }
        catch (err) {
            console.error('[ir-booking-details] fetchCL failed:', err);
            this.clError = 'Failed to load city ledger.';
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
            const [roomResponse, languageTexts, countriesList, bookingDetails, setupEntries, agents] = await Promise.all([
                this.roomService.getExposedProperty({ id: this.propertyid || 0, language: this.language, aname: this.p }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getCountries(this.language),
                this.bookingService.getExposedBooking({
                    booking_nbr: this.bookingNumber,
                    language: this.language,
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
                this.bookingService.getSetupEntriesByTableNameMulti([
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
            const { bed_preference_type, svc_category, departure_time, pay_type, pay_type_group, pay_method, arrival_time } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.bedPreference = bed_preference_type;
            this.svcCategories = svc_category;
            this.departureTime = departure_time;
            this.paymentEntries = { types: pay_type, groups: pay_type_group, methods: pay_method };
            this.arrivalTime = arrival_time;
            if (!locales?.entries) {
                locales.entries = languageTexts.entries;
                locales.direction = languageTexts.direction;
            }
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
        // Add token safely
        const { data } = await axios.post(`Get_ShortLiving_Token`);
        if (!data.ExceptionMsg) {
            url += `&token=${encodeURIComponent(data.My_Result)}`;
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
            const booking = await this.bookingService.getExposedBooking({ booking_nbr: this.bookingNumber, language: this.language, include_dp_pricing: true });
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
        return (h(Host, null, !this.is_from_front_desk && (h(Fragment, null, h("ir-toast", { style: { height: '0' } }), h("ir-interceptor", { style: { height: '0' } }))), h("ir-booking-header", { agents: this.agents, booking: this.booking, hasCloseButton: this.hasCloseButton, hasDelete: this.hasDelete, hasMenu: this.hasMenu, hasPrint: this.hasPrint, agent: this.agent, folioRows: this.folioRows, hasReceipt: calendar_data.property.is_frontdesk_enabled, hasEmail: ['001', '002'].includes(this.booking?.status?.code) }), h("div", { class: "booking-details__booking-info" }, h("div", { class: "booking-details__info-column" }, h("ir-reservation-information", { countries: this.countries, booking: this.booking }), !this.booking.is_room_less && (h("ir-booking-rooms", { booking: this.booking, agent: this.agent, propertyId: this.property_id, language: this.language, departureTime: this.departureTime, arrivalTime: this.arrivalTime, bedPreference: this.bedPreference, legendData: this.calendarData.legendData, roomsInfo: this.calendarData.roomsInfo, hasRoomAdd: this.hasRoomAdd, hasRoomEdit: this.hasRoomEdit, hasRoomDelete: this.hasRoomDelete, splitIndex: this.splitIndex, clTransactions: this.rawTransactions, svcCategories: this.svcCategories, onRoomDeleteFinished: this.handleDeleteFinish })), (this.booking?.rooms?.length > 1 || this.booking.rooms.length === 0) && (h("section", null, h("ir-extra-services", { language: this.language, svcCategories: this.svcCategories, booking: this.booking, agent: this.agent, clTransactions: this.rawTransactions }))), h("ir-pickup-view", { booking: this.booking, agent: this.agent, clTransactions: this.rawTransactions })), h("ir-payment-details", { clTransactions: this.rawTransactions, class: "booking-details__info-column", propertyId: this.property_id, paymentEntries: this.paymentEntries, paymentActions: this.paymentActions, booking: this.booking, agent: this.agent, svcCategories: this.svcCategories, isAllServicesAgentOwned: isAllServicesAgentOwned, folioRows: this.folioRows, clLoading: this.clLoading, clError: this.clError })), h("ir-dialog", { label: "Send Email", onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalRef.closeModal();
                this.modalState = null;
            }, ref: el => (this.modalRef = el) }, h("p", null, this.modalState?.message), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { loading: isRequestPending('/Send_Booking_Confirmation_Email'), onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleModalConfirm();
            }, size: "m", variant: "brand" }, locales.entries.Lcz_Confirm))), h("ir-room-guests", { open: this.sidebarState === 'room-guest', countries: this.countries, language: this.language, identifier: this.sidebarPayload?.identifier, bookingNumber: this.booking.booking_nbr, roomName: this.sidebarPayload?.roomName, totalGuests: this.sidebarPayload?.totalGuests, sharedPersons: this.sidebarPayload?.sharing_persons, slot: "sidebar-body", checkIn: this.sidebarPayload?.checkin, onCloseModal: () => (this.sidebarState = null) }), h("ir-extra-service-config", { open: this.sidebarState === 'extra_service', service: this.selectedService, defaultPrId: this.extraServiceDefaultPrId, svcCategories: this.svcCategories, language: this.language, booking: this.booking, agent: this.agent, slot: "sidebar-body", onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.sidebarState = null;
                if (this.selectedService) {
                    this.selectedService = null;
                }
                this.extraServiceDefaultPrId = null;
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
        return (h("ir-drawer", { key: '501200a7e274c5f8079b6a872207c9b471dd5f13', onDrawerHide: this.handleClose, withoutHeader: true, open: this.open, style: {
                '--ir-drawer-width': '100rem',
                '--ir-drawer-background-color': 'var(--ir-color-muted-background,#f2f3f8)',
                '--ir-drawer-padding-left': '0',
                '--ir-drawer-padding-right': '0',
                '--ir-drawer-padding-top': '0',
                '--ir-drawer-padding-bottom': '0',
            } }, this.open && (h("ir-booking-details", { key: '2fc95393db4754fab180a80cc81f096fc23a2943', hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: this.handleClose, is_from_front_desk: true, propertyid: this.propertyId, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.bookingNumber.toString(), ticket: this.ticket, language: this.language, hasRoomAdd: true }))));
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

const irBookingEditorCss = () => `.sc-ir-booking-editor-h{display:block;height:100%}.booking-editor__roomtype-container.sc-ir-booking-editor{display:flex;flex-direction:column;gap:1rem;margin-top:1.5rem;padding-bottom:3rem}.booking-editor__step.sc-ir-booking-editor{display:block;animation:booking-editor-step-in var(--wa-transition-normal, 200ms) cubic-bezier(0.23, 1, 0.32, 1) both}@keyframes booking-editor-step-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}@media (prefers-reduced-motion: reduce){.booking-editor__step.sc-ir-booking-editor{animation:none}}`;

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
    propertyService = new PropertyService();
    bookingEditorService = new IRBookingEditorService(this.mode);
    room;
    get dayUsePrice() {
        return Number(getExtraServiceDefaultPrice(DAY_USE_CATEGORY_CODE));
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
                taxAmount = await this.bookingService.calculateExclusiveTax({ property_id: Number(this.propertyId), amount: netAmount, taxes_to_include: ['VAT'] });
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
    /** Resolves `dayUsePrice` (gross) to its net equivalent once, up front, so it's ready before the day-use unit list renders. */
    async resolveDayUseNetPrice() {
        const grossAmount = this.dayUsePrice;
        if (!grossAmount) {
            this.dayUseNetPrice = 0;
            return;
        }
        try {
            this.dayUseNetPrice = await this.propertyService.calculateNetAmount({ property_id: Number(this.propertyId), amount: grossAmount, taxes_to_include: ['VAT'] });
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
    componentWillLoad() {
        this.initializeApp();
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
            const [languageTexts, countriesList] = await Promise.all([
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getCountries(this.language),
                this.roomService.getExposedProperty({
                    id: Number(this.propertyId),
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                    include_sales_rate_plans: true,
                }),
            ]);
            if (!locales.entries) {
                locales.entries = languageTexts.entries;
                locales.direction = languageTexts.direction;
            }
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
                    language: this.language,
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
        const results = await this.bookingService.getCalendarData(Number(calendar_data.property.id), date, date);
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
            // Do_Booking_Extra_Service now updates the existing DUZ extra service in place (keyed off its
            // `system_id`) — unit/price/hours change, but the booking it belongs to doesn't, so no more
            // delete-then-recreate-as-a-new-booking round trip.
            const service = {
                ...this.extraService,
                pr_id: dayUseSelection.unit.id,
                category: { code: DAY_USE_CATEGORY_CODE },
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
            showToast({ title: 'Day Use Booking Updated', type: 'success' });
            this.resetBookingEvt.emit(null);
            return;
        }
        const payload = {
            language: this.language,
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
                category: { code: DAY_USE_CATEGORY_CODE },
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
        showToast({ title: 'Day Use Booking Created', type: 'success' });
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
        return await this.bookingService.fetchSetupEntries();
    }
    render() {
        if (this.isLoading) {
            return (h("div", { class: 'drawer__loader-container' }, h("ir-spinner", null)));
        }
        return (h(Host, null, h("div", null, h("ir-interceptor", null), this.step === 'details' && (h("div", { class: "booking-editor__step", key: "step-details" }, h("ir-booking-editor-header", { isLoading: this.isFetchingAvailability, isBlockConversion: !!this.blockedUnit?.STATUS_CODE, booking: this.booking, checkIn: this.checkIn, checkOut: this.adjustedCheckout, mode: this.mode }), h("div", { class: 'booking-editor__roomtype-container' }, !this.isFetchingAvailability && booking_store.bookingDraft.dayUse ? (h("igl-day-use-unit-list", { roomTypes: this.dayUseRoomTypes, price: this.dayUsePrice, netPrice: this.dayUseNetPrice, currency: calendar_data.property.currency, bookedUnitIds: this.dayUseBookedUnitIds, unitId: this.unitId, currentExtraService: this.extraService, resolvingUnitId: this.resolvingDayUseUnitId, hasSearched: this.hasCheckedAvailability, onUnitSelected: e => this.handleDayUseUnitSelected(e) })) : (!this.isFetchingAvailability &&
            booking_store.roomTypes?.map(roomType => (h("igl-room-type", { unavailableRatePlanIds: this.unavailableRatePlanIds, key: `room-type-${roomType.id}`, id: roomType.id.toString(), roomType: roomType, bookingType: this.mode, ratePricingMode: booking_store.selects?.ratePricingMode, roomTypeId: this.room?.roomtype?.id, currency: calendar_data.property.currency }))))))), this.step === 'confirm' && (h("ir-booking-editor-form", { class: "booking-editor__step", key: "step-confirm", booking: this.booking, onDoReservation: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.doReservation(e.detail);
            }, room: this.room, mode: this.mode })))));
    }
    static get watchers() { return {
        "mode": [{
                "handleModeChange": 0
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
    /** Auth token used for API requests. */
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
    token = new Token();
    bookingService = new BookingService();
    bookingEditorService = new IRBookingEditorService();
    wasBlockedUnit = false;
    didAdjustBlockedUnit = false;
    originalBlockPayload;
    componentWillLoad() {
        if (this.token) {
            this.token.setToken(this.ticket);
        }
        this.initializeBlockedUnitState(this.blockedUnit);
        if (this.mode) {
            booking_store.event_type = { type: this.mode };
        }
        if (this.dayUse) {
            setBookingDraft({ dayUse: true });
        }
    }
    handleTicketChange() {
        if (this.token) {
            this.token.setToken(this.ticket);
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
        if (booking_store.bookingDraft.dayUse && ['PLUS_BOOKING', 'BAR_BOOKING'].includes(this.mode)) {
            return 'Day-Use Booking';
        }
        if (this.label) {
            return this.label;
        }
        switch (this.mode) {
            case 'EDIT_DAY_USE':
                return 'Edit Day Use Booking';
            case 'SPLIT_BOOKING':
            case 'BAR_BOOKING':
            case 'ADD_ROOM':
            case 'EDIT_BOOKING':
            case 'PLUS_BOOKING':
                return 'New Booking';
        }
    }
    handleDayUseToggle(value) {
        const checked = value === 'day-use';
        resetAvailability();
        setBookingDraft({
            dayUse: checked,
            source: checked ? booking_store.selects.sources.find(s => s.type !== 'LABEL') : booking_store.bookingDraft.source,
        });
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
        const showBookAndBlockTheNight = isNewDayUseBooking && !dayUseUnitHasUpcomingCheckIn;
        return (h(Fragment, null, h("ir-custom-button", { onClickHandler: this.goToDetails, size: "m", appearance: "filled", variant: "neutral" }, "Back"), showBookAndBlockTheNight && (h("ir-custom-button", { disabled: false, form: "new_booking_form", loading: this.isLoading === 'book&block', value: "book&block", type: "submit", size: "m", appearance: 'outlined', variant: "brand" }, "Book and block the night")), h("ir-custom-button", { loading: this.isLoading === 'book', value: "book", form: "new_booking_form", disabled: false, type: "submit", size: "m", appearance: showBookAndBlockTheNight ? 'accent' : hasCheckIn ? 'outlined' : 'accent', variant: "brand" }, "Book"), hasCheckIn && !booking_store.bookingDraft.dayUse && (h("ir-custom-button", { loading: this.isLoading === 'book-checkin', value: "book-checkin", form: "new_booking_form", type: "submit", size: "m", appearance: "accent", variant: "brand" }, "Book and check-in"))));
    }
    renderDetailsActions() {
        const haveRoomSelected = hasAtLeastOneRoomSelected();
        return (h(Fragment, null, h("ir-custom-button", { "data-drawer": "close", size: "m", appearance: "filled", variant: "neutral" }, "Cancel"), !booking_store.bookingDraft.dayUse && ['PLUS_BOOKING', 'ADD_ROOM'].includes(this.mode) && (h(Fragment, null, !haveRoomSelected && h("wa-tooltip", { for: "booking_editor__next-button" }, "Please select at least one unit to continue."), h("ir-custom-button", { id: "booking_editor__next-button", disabled: !haveRoomSelected, onClickHandler: this.goToConfirm, size: "m", appearance: "accent", variant: "brand" }, "Next")))));
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
                language: this.language,
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
        return (h("ir-drawer", { key: 'a80c571412de48cde3f761445e4b0e929d719f01', onDrawerHide: async (event) => {
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
            }, class: "booking-editor__drawer", label: this.drawerLabel, open: this.open }, this.step === 'details' && !this.unitId && ['PLUS_BOOKING', 'BAR_BOOKING'].includes(this.mode) && calendar_data?.property?.is_frontdesk_enabled && (h("div", { key: '7288f2d9ae4e30b74e160e85a63d684867ab1a02', slot: "header-actions", style: { alignSelf: 'center' } }, h("wa-radio-group", { key: '79a77f3be99497734648551e580d9f8c9b9c88dc', size: "s", value: booking_store.bookingDraft.dayUse ? 'day-use' : 'manual', orientation: "horizontal", onchange: e => this.handleDayUseToggle(e.target.value) }, h("wa-radio", { key: 'cd86ca3d6c2d0d680545445f2b88167eb9c3ad05', appearance: "button", value: "manual" }, "Manual Booking"), h("wa-radio", { key: '92001371d160cf60d4ee0a7dfd9be0e04ad63742', appearance: "button", value: "day-use" }, "Day Use")))), this.open && this.ticket && (h("ir-booking-editor", { key: '0bbc623113970d9bfbc381406889249d8b466c64', onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail.cause;
            }, onAdjustBlockedUnit: event => this.handleAdjustBlockedUnitEvent(event), unitId: this.unitId, propertyId: this.propertyid, roomTypeIds: this.roomTypeIds, onResetBookingEvt: async () => {
                this.blockedUnit = undefined;
                this.initializeBlockedUnitState(undefined);
                await this.closeDrawer();
            }, step: this.step, blockedUnit: this.blockedUnit, language: this.language, booking: this.booking, mode: this.mode, checkIn: this.checkIn, checkOut: this.checkOut, identifier: this.roomIdentifier, extraService: this.extraService })), h("div", { key: '52d6f0b32a5b83a175b7a9a4deb8431ea6836e59', slot: "footer", class: "ir__drawer-footer" }, this.renderFooter())));
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

const irBookingEditorFormCss = () => `.sc-ir-booking-editor-form-h{display:flex;flex-direction:column;height:100%;color:var(--wa-color-text-normal)}.booking-editor__guest-form.sc-ir-booking-editor-form{display:flex;flex-direction:column;gap:1rem;height:100%}.booking-editor__header.sc-ir-booking-editor-form{width:100%;display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap;gap:1rem}.booking-editor__dates.sc-ir-booking-editor-form{line-height:1.2;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m)}.booking-editor__total.sc-ir-booking-editor-form{display:flex;align-items:center;justify-content:flex-end;white-space:nowrap;margin-top:0.25rem;text-align:right}.booking-editor__total-label.sc-ir-booking-editor-form{margin-right:4px}.booking-editor__total-amount.sc-ir-booking-editor-form{white-space:nowrap;font-weight:700;font-size:var(--wa-font-size-m);margin-inline-start:2rem}.booking-editor__booked-by.sc-ir-booking-editor-form{display:flex;flex-direction:column;gap:1rem;margin-bottom:1.5rem}.booking-editor__booked-by-section.sc-ir-booking-editor-form{margin-top:0.5rem}.booking-editor__heading.sc-ir-booking-editor-form{margin:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l)}.booking-editor__day-use-hours.sc-ir-booking-editor-form{display:flex;flex-direction:column;gap:0.5rem;margin-top:1rem}.booking-editor__day-use-hours-row.sc-ir-booking-editor-form{display:flex;gap:1rem;flex-wrap:wrap;align-items:end}.booking-editor__day-use-duration.sc-ir-booking-editor-form{color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s);white-space:nowrap}.booking-editor__day-use-hours-connector.sc-ir-booking-editor-form{align-self:center;padding-top:1.5rem}.booking-editor__day-use-hours-row.sc-ir-booking-editor-form ir-input.sc-ir-booking-editor-form{width:70px}@media (min-width: 768px){.booking-editor__total.sc-ir-booking-editor-form{margin-top:0}.booking-editor__booked-by.sc-ir-booking-editor-form{flex-direction:row;align-items:center}.booking-editor__booked-by-picker.sc-ir-booking-editor-form{max-width:40rem}}`;

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
    isValidDayUseTime(value) {
        return DayUseHoursSchema.shape.from.safeParse(value).success;
    }
    getDayUseHour(value) {
        return this.isValidDayUseTime(value) ? Number(value.slice(0, 2)) : 0;
    }
    handleDayUseFromChange(from, dayUseHours) {
        const fromIsBeforeTo = this.isValidDayUseTime(from) && this.isValidDayUseTime(dayUseHours.to) && this.getDayUseHour(dayUseHours.to) < this.getDayUseHour(from);
        setBookingDraft({ dayUseHours: { from, to: fromIsBeforeTo ? '' : dayUseHours.to } });
    }
    getDayUseDuration(dayUseHours) {
        if (!this.isValidDayUseTime(dayUseHours.from) || !this.isValidDayUseTime(dayUseHours.to)) {
            return '';
        }
        const minutes = hooks(dayUseHours.to, 'HH:mm').diff(hooks(dayUseHours.from, 'HH:mm'), 'minutes');
        if (minutes <= 0) {
            return '';
        }
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return [hours && `${hours}h`, remainingMinutes && `${remainingMinutes}m`].filter(Boolean).join(' ');
    }
    render() {
        const { dates, dayUse, dayUseHours } = booking_store.bookingDraft;
        const { dayUseSelection } = booking_store;
        let hasBookedByGuestController = false;
        return (h("form", { key: '8208d796fb29df3c79c45b2fd3d4c0b44efc07d2', class: "booking-editor__guest-form", id: "new_booking_form", autoComplete: "off", onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                this.doReservation.emit(submitter?.value);
            } }, h("div", { key: '41d965ce056dc631e899c9009d834378ea46854f', class: "booking-editor__header" }, dayUse ? (h("span", { class: "booking-editor__dates" }, dates.checkIn.format('DD MMM YYYY'))) : (h("ir-date-view", { class: "booking-editor__dates", from_date: dates.checkIn, to_date: dayUse ? dates.checkIn : dates.checkOut, dateOption: "DD MMM YYYY" })), dayUse ? (h("div", { class: "booking-editor__total" }, h("span", { class: "booking-editor__total-label" }, dayUseSelection?.roomType?.name, " ", h("ir-unit-tag", { unit: dayUseSelection?.unit?.name })), ' ', h("span", { class: "booking-editor__total-amount" }, formatAmount(calendar_data.property.currency.symbol, dayUseSelection?.price ?? 0)), h("span", { style: { marginInlineStart: '0.5rem', padding: '0', fontSize: '0.75rem' } }, "Including taxes and fees"))) : (this.totalRooms > 1 && (h("div", { class: "booking-editor__total" }, h("span", { class: "booking-editor__total-label" }, locales.entries.Lcz_TotalPrice), ' ', h("span", { class: "booking-editor__total-amount" }, formatAmount(calendar_data.property.currency.symbol, this.totalCost)))))), !dayUse &&
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
            })), dayUse && (h("section", { key: 'a4f4fcdb29aa40e3764c247b2d5e54a700528c88', class: "booking-editor__day-use-hours" }, h("div", { key: 'fd3fbf29fe83dd07d25582d8a417b07c99086a1f', class: "booking-editor__day-use-hours-row" }, h("ir-validator", { key: '719d459629bc12ad87988361a8fa61c60aaacbbf', value: dayUseHours.from, schema: DayUseHoursSchema.shape.from }, h("ir-input", { key: '3fa5f1b8ea94d0d20bfb287c65ed1356c50592e5', label: "Time period", mask: "time", placeholder: "11:30", value: dayUseHours.from, "onText-change": e => this.handleDayUseFromChange(e.detail, dayUseHours) })), h("wa-icon", { key: 'b6f4e9af91ebc4445ef5ffedd4e990bb1615cb40', class: "booking-editor__day-use-hours-connector", name: "arrow-right" }), h("ir-validator", { key: 'fe6560ec0341835751718bd061a8e84242900c96', value: dayUseHours.to, schema: DayUseHoursSchema.shape.to }, h("ir-input", { key: '56e05e2772e8319d5b0f9e9517c669e907ef359a', disabled: !this.isValidDayUseTime(dayUseHours.from), mask: createTimeToMask(this.getDayUseHour(dayUseHours.from)), placeholder: "16:00", value: dayUseHours.to, "onText-change": e => setBookingDraft({ dayUseHours: { ...dayUseHours, to: e.detail } }) })), this.getDayUseDuration(dayUseHours) && (h("span", { key: 'd18fbdf34e94bf74f26afeb754c8342d10f4219f', class: "booking-editor__day-use-duration booking-editor__day-use-hours-connector" }, "Duration: ", this.getDayUseDuration(dayUseHours)))))), this.bookingEditorService.isEventType(['BAR_BOOKING', 'PLUS_BOOKING']) && (h("section", { key: '08eedc66e9ce7a57171cdf60e75ae4b994fd54b0', class: "booking-editor__booked-by-section" }, h("div", { key: 'de61f8918eb6ffc1d709c618ded378bafa0f5cfe', class: "booking-editor__booked-by booking-editor__booked-by-header" }, h("h4", { key: 'bacd1e5af082da367e015bcc4f831956d6def47b', class: "booking-editor__heading booking-editor__booked-by-title" }, "Booked by"), booking_store.bookingDraft?.agent ? (h("span", null, booking_store.bookingDraft?.agent.name)) : (h(Fragment, null, h("ir-picker", { class: "booking-editor__booked-by-picker", appearance: "filled",
            // placeholder="Search customer by email, name or company name"
            placeholder: "Search customer by email or name", withClear: true, "onText-change": event => this.fetchGuests(event.detail), debounce: 500, loading: isRequestPending('/Fetch_Exposed_Guests'), mode: "select-async", ref: el => (this.pickerEl = el), "onCombobox-select": this.handleComboboxSelect.bind(this) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        })), booking_store.bookedByGuest.id !== -1 && (h("ir-custom-button", { onClickHandler: () => {
                updateBookedByGuest(bookedByGuestBaseData);
                this.pickerEl.clearInput();
            }, variant: "brand" }, "Clear user"))))), h("ir-booking-editor-guest-form", { key: 'cd0d5d852915498594672e78afc808137b43ba1f' }))), this.bookingEditorService.isEventType(['SPLIT_BOOKING', 'ADD_ROOM']) && isAgentMode(this.resolvedAgent) && (h("ir-service-assignee-select", { key: '7a6fd2e674ec3fe471cf3c4b2b986ee86f47f5b1', style: { maxWidth: '500px' }, agent: this.booking.agent, assigneeType: this.assignee, onAssignmentChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.assignee = e.detail;
                setBookingDraft({ roomAssignee: e.detail });
            } }))));
    }
};
IrBookingEditorForm.style = irBookingEditorFormCss();

const irBookingEditorHeaderCss = () => `.sc-ir-booking-editor-header-h{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}.booking-editor-header__container.sc-ir-booking-editor-header{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}.booking-editor-header__booking-picker.sc-ir-booking-editor-header{max-width:350px}.booking-editor-header__booking-picker-validator.sc-ir-booking-editor-header{margin-bottom:1rem}.booking-editor-header__tax_statement.sc-ir-booking-editor-header{margin-top:1.5rem}@media (min-width: 768px){.booking-editor__date-range.sc-ir-booking-editor-header::part(input-end){margin:0}.booking-editor-header__container.sc-ir-booking-editor-header{flex-direction:row;align-items:flex-start;flex-wrap:wrap}.booking-editor-header__adults-select.sc-ir-booking-editor-header{width:100px}.booking-editor-header__children-select.sc-ir-booking-editor-header{width:170px}}@media (min-width: 1024px){.booking-editor__date-validator.sc-ir-booking-editor-header::part(error-message){position:absolute}}`;

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
    adultsSchema = libExports.z.coerce.number().min(1);
    bookingEditorService = new IRBookingEditorService();
    BookedByGuestPickerSchema = libExports.z
        .object({
        firstName: libExports.z.string(),
        // lastName: z.string(),
    })
        .superRefine((data, ctx) => {
        if (!data.firstName) {
            ctx.addIssue({
                path: ['firstName'],
                code: libExports.z.ZodIssueCode.custom,
                message: locales.entries.Lcz_ChooseBookingNumber,
            });
        }
        // if (!data.lastName) {
        //   ctx.addIssue({
        //     path: ['lastName'],
        //     code: z.ZodIssueCode.custom,
        //     message: locales.entries.Lcz_ChooseBookingNumber,
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
        this.datesSchema = libExports.z
            .object({
            checkIn: libExports.z.any(),
            checkOut: libExports.z.any(),
        })
            .superRefine((data, ctx) => {
            // ─────────────────────────────
            // checkIn validations
            // ─────────────────────────────
            if (!hooks.isMoment(data.checkIn)) {
                ctx.addIssue({
                    path: ['checkIn'],
                    code: libExports.z.ZodIssueCode.custom,
                    message: 'Check-in date is required',
                });
            }
            if (hooks.isMoment(data.checkIn) && this.bookingEditorService.isEventType(['SPLIT_BOOKING', 'ADD_ROOM']) && !data.checkIn.isSameOrBefore(this.booking.to_date, 'date')) {
                ctx.addIssue({
                    path: ['checkIn'],
                    code: libExports.z.ZodIssueCode.custom,
                    message: `${locales.entries.Lcz_CheckInDateShouldBeMAx.replace('%1', hooks(this.booking.from_date, 'YYYY-MM-DD').format('ddd, DD MMM YYYY')).replace('%2', hooks(this.booking.to_date, 'YYYY-MM-DD').format('ddd, DD MMM YYYY'))}  `,
                });
            }
            // ─────────────────────────────
            // checkOut validations
            // ─────────────────────────────
            if (!hooks.isMoment(data.checkOut)) {
                ctx.addIssue({
                    path: ['checkOut'],
                    code: libExports.z.ZodIssueCode.custom,
                    message: 'Check-out date is required',
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
                return today.format('YYYY-MM-DD');
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
        const years = child_max_age === 1 ? locales.entries.Lcz_Year : locales.entries.Lcz_Years;
        return `${locales.entries.Lcz_ChildCaption} 0 - ${child_max_age} ${years}`;
    }
    async selectGuest(e) {
        this.stopEvent(e);
        const booking_nbr = e.detail?.item?.value;
        const booking = await this.bookingService.getExposedBooking({ booking_nbr, language: 'en', withExtras: true });
        this.guestSelected.emit(booking);
    }
    render() {
        const { sources } = booking_store.selects;
        const { adults, children } = booking_store.bookingDraft.occupancy;
        const { checkIn, checkOut } = booking_store.bookingDraft.dates;
        const { dayUse } = booking_store.bookingDraft;
        return (h(Host, { key: '405ccb3c0239da1bb64a0af1d8faeaa0a5137a1c' }, h("form", { key: 'd03b049b6eae3e0431f49c3113116113df4d12be', onSubmit: this.handleSubmit.bind(this) }, this.bookingEditorService.isEventType('SPLIT_BOOKING') && (h("ir-validator", { key: 'ae04f515179fe3edbe187cd4ba0f22021220d625', value: booking_store.bookedByGuest, class: "booking-editor-header__booking-picker-validator", showErrorMessage: true, schema: this.BookedByGuestPickerSchema }, h("ir-picker", { key: '64896da44128a0bc07e0d01a530c1825d00ff8ba', withClear: true, mode: "select-async", class: "booking-editor-header__booking-picker", debounce: 300, ref: el => (this.pickerRef = el), label: `${locales.entries.Lcz_Tobooking}#`,
            // defaultValue={Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : ''}
            // value={Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : ''}
            placeholder: locales.entries.Lcz_BookingNumber, loading: this._isLoading, "onText-change": e => this.handleBookingSearch(e.detail), "onCombobox-select": this.selectGuest.bind(this) }, this.bookings.map(b => {
            const label = `${b.booking_nbr} ${b.guest.first_name} ${b.guest.last_name}`;
            return (h("ir-picker-item", { value: b.booking_nbr?.toString(), label: label }, label));
        })))), h("div", { key: 'a1c7f01c53f33e1db8ede2b7f773c3b6196fdf0c', class: "booking-editor-header__container" }, !this.bookingEditorService.isEventType(['EDIT_BOOKING', 'ADD_ROOM', 'SPLIT_BOOKING']) && !dayUse && (h("wa-select", { key: '612fea4e7e0d083908f63f9c46d1e6bd10965373', size: "s", placeholder: locales.entries.Lcz_Source, value: booking_store.bookingDraft.source?.id?.toString(), defaultValue: booking_store.bookingDraft.source?.id, "onwa-hide": this.stopEvent.bind(this), onchange: this.handleSourceChange.bind(this) }, sources.map(option => (option.type === 'LABEL' ? h("small", null, option.description) : h("wa-option", { value: option.id?.toString() }, option.description))))), dayUse ? (h("ir-validator", { class: "booking-editor__date-validator", showErrorMessage: true, value: checkIn?.format('YYYY-MM-DD'), schema: libExports.z.string().min(1, 'Date is required') }, h("ir-date-select", { date: checkIn?.format('YYYY-MM-DD'), minDate: hooks().format('YYYY-MM-DD'), emitEmptyDate: true, onDateChanged: e => this.handleDayUseDateChange(e.detail.start) }, h("wa-icon", { part: "calendar-icon", slot: "start", variant: "regular", name: "calendar" })))) : (h("ir-validator", { class: "booking-editor__date-validator", showErrorMessage: true, value: booking_store.bookingDraft.dates, schema: this.datesSchema, style: { position: 'relative' } }, h("ir-date-range", { class: "booking-editor__date-range", defaultData: {
                fromDate: checkIn?.format('YYYY-MM-DD') ?? '',
                toDate: checkOut?.format('YYYY-MM-DD') ?? '',
            }, variant: "booking", withDateDifference: true, minDate: this.minDate, maxDate: this.maxDate, onDateRangeChange: this.handleDateRangeChange.bind(this) }))), !this.bookingEditorService.isEventType('EDIT_BOOKING') && (h(Fragment, { key: '14fccb443a922a3b378a81f5867c5ebe53dc1e57' }, h("ir-validator", { key: '7e52e37b1fc112c2ba58fc10646fdc57e2b5eae8', value: adults, schema: this.adultsSchema }, h("wa-select", { key: '5b965a990dfd267cb98adbfa32fd617a355b5053', class: "booking-editor-header__adults-select", size: "s", placeholder: locales.entries.Lcz_AdultsCaption, value: adults?.toString(), defaultValue: adults?.toString(),
            // onwa-hide={this.stopEvent.bind(this)}
            onchange: this.handleAdultsChange.bind(this) }, Array.from({ length: calendar_data.property.adult_child_constraints.adult_max_nbr }, (_, i) => i + 1).map(option => (h("wa-option", { value: option.toString() }, option))))), calendar_data.property.adult_child_constraints.child_max_nbr > 0 && (h("wa-select", { key: '08b172073c1e9c49093717d1c823c77e16a6a07d', class: "booking-editor-header__children-select", size: "s", placeholder: this.childrenSelectPlaceholder, value: children?.toString(), defaultValue: children?.toString(),
            // onwa-hide={this.stopEvent.bind(this)}
            onchange: this.handleChildrenChange.bind(this) }, Array.from({ length: calendar_data.property.adult_child_constraints.child_max_nbr }, (_, i) => i + 1).map(option => (h("wa-option", { value: option.toString() }, option))))))), h("ir-custom-button", { key: '3c708070cd8f7d28889a8190629f823bea61b2b7', loading: this.isLoading, type: "submit", variant: "brand" }, "Check")), booking_store.roomTypes?.length > 0 && !this.isLoading && calendar_data.tax_statement && (h("wa-callout", { key: '7eaf9f20de23252fbeeeeb16a0ed306de440370c', size: "s", variant: "neutral", appearance: "filled", class: "booking-editor-header__tax_statement" }, calendar_data.tax_statement)))));
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
        return (h("ir-dialog", { key: 'ffaaf5bf011fdc9743e7aeeba47884d70f6d1a87', label: "Private Note", open: this.open, onIrDialogHide: () => {
                this.open = false;
            } }, h("wa-textarea", { key: '0b0d2e74c799c00f1eca50f6538962d3169719c2', size: "s", placeholder: locales.entries.Lcz_PrivateNote_MaxChar, defaultValue: this.note, onchange: e => this.setNote(e.target.value), value: this.note }), h("div", { key: 'b44c9ea1bc119e183897b741220a29b4e6732d10', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '9d177887ef8549527e77427a5f3b3f42004e648c', "data-dialog": "close", size: "m", variant: "neutral", appearance: "filled", onClickHandler: () => this.closeModal.emit(null), class: `flex-fill'}` }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '3ce31b3e1112863b803981e43d994f56f041e4d8', size: "m", onClickHandler: () => this.savePrivateNote(), variant: "brand", loading: this.isLoading }, locales.entries.Lcz_Save))));
    }
};
IrBookingExtraNote.style = irBookingExtraNoteCss();

const irBookingGuaranteeCss = () => `.sc-ir-booking-guarantee-h{display:block}.sc-ir-booking-guarantee-h{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-booking-guarantee-h *.sc-ir-booking-guarantee{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.iframeHeight.sc-ir-booking-guarantee{height:max-content;height:22.5rem}`;

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
                paymentMethod = code.value === '001' ? locales.entries.Lcz_OnCredit : payment_code ? this.checkPaymentCode(payment_code.value) : null;
            }
        }
        else if (payment_code) {
            paymentMethod = payment_code.value === '000' ? 'No card info required upon booking' : this.checkPaymentCode(payment_code.value);
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
            h("div", null, cci && 'Card:', " ", h("span", null, cci.nbr || ''), cci.expiry_month && ' Expiry: ', h("span", null, cci.expiry_month || '', cci.expiry_year && '/' + cci.expiry_year)),
            h("div", null, cci.holder_name && 'Name:', " ", h("span", null, cci.holder_name || ''), cci.cvc && ' - CVC:', " ", h("span", null, cci.cvc || '')),
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
        return (h("div", null, h("ir-label", { content: ota_guarante.card_type + `${ota_guarante.is_virtual ? ' (virtual)' : ''}`, labelText: `${locales.entries.Lcz_CardType}:` }), h("ir-label", { content: ota_guarante.cardholder_name, labelText: `${locales.entries.Lcz_CardHolderName}:` }), h("ir-label", { content: ota_guarante.card_number, labelText: `${locales.entries.Lcz_CardNumber}:` }), h("ir-label", { content: this.formatCurrency(toFloat(Number(ota_guarante.meta?.virtual_card_current_balance), Number(ota_guarante.meta?.virtual_card_decimal_places)), ota_guarante.meta?.virtual_card_currency_code), labelText: `${locales.entries.Lcz_CardBalance}:` })));
    }
    render() {
        if (!this.shouldShowGuarantee()) {
            return null;
        }
        const paymentMethod = this.booking.is_direct ? this.getPaymentMethod() : null;
        return (h("div", { class: "mb-1" }, h("div", { class: "d-flex align-items-center" }, h("span", { class: "mr-1 font-medium" }, locales.entries.Lcz_BookingGuarantee, paymentMethod && h("span", null, ": ", paymentMethod)), this.shouldShowToggleButton() && (h("ir-button", { id: "drawer-icon", "data-toggle": "collapse", "data-target": ".guarrantee", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse", class: "sm-padding-right pointer", variant: "icon", icon_name: "credit_card", onClickHandler: this.handleToggleCollapse.bind(this) }))), h("div", { class: "collapse guarrantee" }, this.renderCollapsedContent()), this.renderOtaGuarantee()));
    }
};
IrBookingGuarantee.style = irBookingGuaranteeCss();

const irBookingHeaderCss = () => `.sc-ir-booking-header-h{display:block}.booking-header__row.sc-ir-booking-header{display:flex;flex-direction:column;gap:1rem;padding:0 var(--wa-space-m);flex-wrap:wrap}.booking-header__actions.sc-ir-booking-header{display:flex;align-items:center;flex-wrap:wrap;justify-content:flex-end;gap:0.5rem}.booking-header__channel-number.--primary.sc-ir-booking-header{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;color:var(--wa-color-text-quiet)}.booking-header__label-container.sc-ir-booking-header{display:flex;align-items:center}.booking-header__status-trigger.sc-ir-booking-header{width:100%}.booking-header__status-trigger.sc-ir-booking-header::part(base),.booking-header__status-trigger.sc-ir-booking-header [part~="base"]{justify-content:flex-start}.booking-header__status-trigger.sc-ir-booking-header::part(label),.booking-header__status-trigger.sc-ir-booking-header [part~="label"]{flex:1 1 0%;text-align:start}.booking-header__stretched-btn.sc-ir-booking-header{flex:1 1 0%}.booking-header__label.sc-ir-booking-header{padding:0;margin:0}.booking-header__label-container.sc-ir-booking-header{gap:1rem}.booking-header__info.sc-ir-booking-header,.booking-header__title.sc-ir-booking-header{display:flex;flex-direction:column;gap:1rem}.booking-header__avatar.sc-ir-booking-header{background-color:white}.booking-header__avatar.sc-ir-booking-header::part(image),.booking-header__avatar.sc-ir-booking-header [part~="image"]{all:unset;object-fit:cover;height:28px;width:28px}.booking-header__label-number.sc-ir-booking-header{margin:0;padding:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l)}.booking-header__modified.sc-ir-booking-header{padding:0;margin:0;color:var(--wa-color-danger-fill-loud);width:fit-content}.booking-header__channel-number.sc-ir-booking-header{padding:0;margin:0}.booking-header__meta.sc-ir-booking-header{display:flex;align-items:center;gap:1rem;font-size:0.875rem}.booking-header__booking-copy-btn.sc-ir-booking-header{visibility:hidden}@media (min-width: 640px){.booking-header__title.sc-ir-booking-header{flex-direction:row;align-items:center}}@media (min-width: 768px){.booking-header__label.sc-ir-booking-header{display:flex;align-items:center;gap:0.5rem}.booking-header__row.sc-ir-booking-header,.booking-header__info.sc-ir-booking-header{flex-direction:row;align-items:center}.booking-header__row.sc-ir-booking-header{justify-content:space-between}.booking-header__label.sc-ir-booking-header:hover .booking-header__booking-copy-btn.sc-ir-booking-header{visibility:visible}}`;

const IrBookingHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSidebar = createEvent(this, "closeSidebar");
        this.resetBookingEvt = createEvent(this, "resetBookingEvt");
        this.openSidebar = createEvent(this, "openSidebar");
    }
    dialogRef;
    bookingService = new BookingService();
    alertMessage = `ALERT! Modifying an OTA booking will create a discrepancy between igloorooms and the source. Future guest modifications on the OTA may require manual adjustments of the booking.`;
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
                title: locales.entries.Lcz_SelectStatus,
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
                title: locales.entries.Lcz_StatusUpdatedSuccessfully,
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
        return (h("div", { key: 'c34245c8326a9d524dc836fea74d338365559568', class: "booking-header" }, h("div", { key: '75d031b96a4c1dbcfea825a0a4f4739f5dc7c82e', class: "booking-header__row" }, h("div", { key: '3567c8bb5f837768c2eb85cf8ab78c3c3f75bf7f', class: "booking-header__info" }, h("div", { key: 'cee860ab0ba5414ee467576cb8701724122907df', class: "booking-header__title" }, h("div", { key: '46b52936aa011e72e12bef6592e2cf82e6dc05ae', class: "booking-header__label-container" }, this.hasMenu && (h(Fragment, { key: '69ec3b8fdec5f18aac2e5e6c7c7b7f091c7f3668' }, h("wa-tooltip", { key: 'd94b79edbece555852848cf3173919974faba592', for: "menu" }, "Go back"), h("ir-custom-button", { key: '4851bdad9993f1e436f439ab4f9ccd82e8ba372c', id: "menu", variant: "neutral", size: "s", appearance: "plain" }, h("wa-icon", { key: 'fbd96df8254e16cc892732f436f26df3e8afd125', name: "arrow-left", style: { fontSize: '1.2rem' }, label: "Go back" })))), h("wa-avatar", { key: 'd48ab1f39040a4d972d5dc37325cc972dfb3959d', shape: "circle", class: "booking-header__avatar", initials: this.initials, image: this.avatarImage, loading: "lazy" }), h("div", { key: '07eb708afee1bddbc03804a3dac228962a3b88e5', class: "booking-header__identity" }, h("div", { key: 'fbcbdbae1e90458779d635fef8e6e595e4cdc896', class: 'booking-header__label' }, h("h4", { key: 'b7af71d6ac921f0041461ca6b7606e53b29d618c', class: "booking-header__label-number" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`)), h("div", { key: '1f8a004bad4e8bd55266fd9462b9a086137fb12b', class: "booking-header__meta" }, !this.booking.is_direct && h("p", { key: '161aebea670ab9aefc83594d38b75a6935c803c0', class: "booking-header__channel-number --primary" }, this.booking.channel_booking_nbr), this.booking.agent_booking_nbr && h("p", { key: '2583c0a4498e162a80c12fe4412bf1e25d2f7b73', class: "booking-header__channel-number --primary" }, this.booking.agent_booking_nbr), h("p", { key: '61e42cb4070aafdb390caee46f0e8dab1074f6b9', class: "booking-header__channel-number" }, this.booking?.agent ? (h("span", null, "Agent:", ' ', h("p", { class: 'truncate p-0 m-0', style: { maxWidth: '150px', display: 'inline-flex' } }, this.agent.name, ' ', h("i", { style: { paddingLeft: '0.5rem' }, class: 'truncate' }, this.agent.reference)))) : (this.booking.origin.Label)), this.canChangeSource && (h("ir-custom-button", { key: '700526deb421b79c5fc69033140c26b0c159fa66', link: true, onClickHandler: () => this.bookingSourceEditor.openDialog() }, "Change source")), lastManipulation && (h(Fragment, { key: 'e031feba4084df1c337c9520cdb442849df17af7' }, h("p", { key: '26546725130f2106dfeaf10edaaaf876a9698962', id: `booking-${this.booking.booking_nbr}-modified`, class: "booking-header__modified" }, "Modified"), h("wa-tooltip", { key: 'f82e054137cd88d2adc98cbf89437d869f74981b', for: `booking-${this.booking.booking_nbr}-modified` }, h("div", { key: 'ba263d7a5f152752274d5442b5f58e805d0aa5e2' }, h("p", { key: '77c7f081ca9d999c81832d429ec4ea34bde29dde', class: "m-0" }, "Modified by ", lastManipulation?.user, " at ", lastManipulation?.date, " ", lastManipulation?.hour, ":", lastManipulation?.minute, "."), h("p", { key: '3e26dd4d2ab08be93a32525878fd57a56c33c1e5', class: "m-0" }, this.alertMessage)))))))))), h("div", { key: '2815c9fe9499b446beb102d709aad2647292dc8b', class: "booking-header__actions" }, h("div", { key: 'e701f441ac6608a689431ca860536c674af12e8c' }, this.booking.allowed_actions.length > 0 && this.booking.is_editable ? (h("wa-dropdown", { "onwa-hide": e => {
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
            appearance: 'outlined', size: "s", variant: "brand", class: "booking-header__status-trigger" }, h("ir-booking-status-tag", { slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", null, "Update status")), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))) : (h("ir-booking-status-tag", { status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }))), isAgentMode(this.agent) && (h(Fragment, { key: '2fe60cf3b47149e6a57248a7c257c815126d7d68' })), h("ir-custom-button", { key: 'a96d0c13129d15e036364535a617cda910811ef1', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "s", variant: "brand" }, "Logs"), showPms && (h("ir-custom-button", { key: '7e6ea0c76720973c652f85f80352816a5e8e7a55', class: "booking-header__stretched-btn", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "s", variant: "brand" }, "PMS")), this.hasReceipt && (h(Fragment, { key: 'ef3d8e7dc21ef16d9f0a9ff7ddee2577bae92138' }, h("ir-custom-button", { key: 'a754cb5d1ed921865725a19921cbef21a5f5cdde', class: "booking-header__stretched-btn", id: "invoice", variant: "brand", size: "s", appearance: "outlined" }, "Billing"))), this.hasPrint && (h(Fragment, { key: 'd001630e58e596dc2c6f234e3f2be6967d8b0f20' }, h("wa-tooltip", { key: '9898c46e03b96ab48ad42743accdd59d7350357c', for: "print" }, "Print booking"), h("ir-custom-button", { key: '6a589f25c24c0d15af7416c7627ab1f5406bbe66', id: "print", variant: "brand", size: "s", appearance: "outlined" }, h("wa-icon", { key: '485509a62140a13ff8c287e0bfbd5163fe7511bf', label: "Print", name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: 'd0d22c6236995728640eca2acba71efedc1431cf' }, h("wa-tooltip", { key: 'f43c7dbcd313bcd253c12aaf2945a2308f6b3ab9', for: "email" }, "Email this booking to guest"), h("ir-custom-button", { key: '182da14bbd77fd278d0434a6e86485f2571921f9', id: "email", variant: "brand", size: "s", appearance: "outlined" }, h("wa-icon", { key: '2cee7da0aef4420c3ebd29f64e837ad4915f5b58', name: "envelope", style: { fontSize: '1.2rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: 'c21fa78aa6535784625714ce9754018c0b3ba256' }, h("wa-tooltip", { key: 'd714f0ee3e2cb295c8daa361643b51ca94adc7cc', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: 'd181a8fba68015a6fcaa843deabc8a792fcdf45e', id: "book-delete", variant: "danger", size: "s", appearance: "plain" }, h("wa-icon", { key: '10e6683b0ee82b6acbaafafbc6a3e6afcd709d25', name: "envelope", style: { fontSize: '1.2rem' }, label: "Delete this booking" })))), this.hasCloseButton && (h("ir-custom-button", { key: 'eaae02258c4565491ed2cecda93490181360956a', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "s", appearance: "plain" }, h("wa-icon", { key: '177cc9d6f37ff40417055e808f704702e352c0e4', name: "xmark", style: { fontSize: '1.2rem' }, label: "Go back" }))))), h("ir-dialog", { key: '96a5d55d908b956229b58ee9fbcaf8c1143c4495', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: '2c31ffe117175ec9189b2bcf53df850957d1c3ed', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: '68d1a63ba0901d1e0f4e70d45c115cc1a9880d58' }, this.booking.is_direct ? 'Are you sure you want to update this booking status?' : locales.entries.Lcz_OTA_Modification_Alter), h("div", { key: 'f47d5544a4ad0cd6f4d3ae6e37e844d5155c50aa', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: '3b3a413bbc199a051a027ccf73a0d2ce7a89e266', "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: 'f76c3ee1da55a27e9cd121132880b37d1e0b5aa8', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "m", variant: "brand", loading: isRequestPending('/Change_Exposed_Booking_Status') }, locales?.entries?.Lcz_Confirm))), h("ir-booking-source-editor-dialog", { key: 'f6bae26e3d707c79e5bd912d82857ffb2d8798b9', booking: this.booking, ref: el => (this.bookingSourceEditor = el) })));
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
            return 'Edit Nightly Rates';
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
        return (h("ir-drawer", { key: '7d970fbd31e7b32e95247003a9dc56c06d65321b', open: this.open, label: this.drawerLabel, style: {
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
            } }, this.open && (h("ir-booking-pricing-form", { key: '6ff2b4f719a496ebe8de47d7ac33e6278b562335', formId: this.formId, booking: this.booking, room: this.room, agent: this.agent, folioEntries: this.folioEntries, currencySymbol: this.currencySymbol, onPricingSaved: e => {
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
            } })), h("div", { key: 'aea416b54ca8ad8eedafc978b201e1a04d8952d0', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '837ae3de07cc00e1029fa84f3cea128b691f5bb3', appearance: "filled", size: "m", variant: "neutral", onClickHandler: () => this.closeDrawer.emit() }, "Cancel"), h("ir-custom-button", { key: 'e778b5173e9e5d435b26111e2cb7b13d92395867', form: this.formId, size: "m", type: "submit", variant: "brand", loading: this.saveDisabled, disabled: this.allItemsDisabled }, "Confirm"))));
    }
};
IrBookingPricingDrawer.style = irBookingPricingDrawerCss();

const irBookingPricingFormCss = () => `.sc-ir-booking-pricing-form-h{display:block;height:100%}.pricing-form.sc-ir-booking-pricing-form{display:flex;flex-direction:column;gap:1rem;padding-bottom:1rem}.pricing-form__input.sc-ir-booking-pricing-form{display:grid;grid-template-columns:auto 1fr;gap:var(--wa-space-l);align-items:center}.pricing-form__input.sc-ir-booking-pricing-form::part(label),.pricing-form__input.sc-ir-booking-pricing-form [part~="label"]{width:80px;margin:0}.pricing-form__input.sc-ir-booking-pricing-form:disabled::part(label),.pricing-form__input.sc-ir-booking-pricing-form:disabled [part~="label"]{opacity:0.5}.pricing-form__input.sc-ir-booking-pricing-form::part(wa-input),.pricing-form__input.sc-ir-booking-pricing-form [part~="wa-input"]{grid-column:1 / -1;grid-row-end:span 2;display:grid;grid-template-columns:subgrid;gap:0 var(--wa-space-s);align-items:center}.pricing-form__row.sc-ir-booking-pricing-form{display:flex;align-items:center;gap:0.75rem}.pricing-form__row--locked.sc-ir-booking-pricing-form{opacity:0.55}.pricing-form__date.sc-ir-booking-pricing-form{font-size:0.875rem;flex:0 0 6rem;color:var(--wa-color-text-quiet);white-space:nowrap}.pricing-form__row.sc-ir-booking-pricing-form ir-validator.sc-ir-booking-pricing-form{flex:1;min-width:0}@media (min-width: 768px){.pricing-form__input.sc-ir-booking-pricing-form::part(base){max-width:180px}}`;

const nightAmountSchema = libExports.z.coerce.number({ invalid_type_error: 'Required' }).min(0, 'Minimum is 0');
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
            const info = await this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr });
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
            return nightAmountSchema.safeParse(n.amount).success;
        });
    }
    get acmTxByDate() {
        return new Map(this.folioEntries.filter(tx => tx.CATEGORY === 'ACM' && tx.BSA_REF === this.room.identifier).map(tx => [tx.SERVICE_DATE, tx]));
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
        return (h("form", { id: this.formId, class: "pricing-form", onSubmit: this.handleSubmit.bind(this), novalidate: true }, hasDisabledInput && (h("wa-callout", { variant: "warning", size: "s" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), "Locked nightly rates cannot be edited in case they have been invoiced. You can void the invoice with a credit note to update the rates and recreate a new one")), calendar_data.property.tax_statement && (h("wa-callout", { size: "s", variant: "neutral" }, calendar_data.property.tax_statement)), h("div", { style: { marginBottom: '0.5rem' } }), this.nights.map(night => (h("ir-validator", { key: night.date, class: "pricing-form__input-validator", schema: nightAmountSchema, value: night.amount }, h("ir-input", { class: "pricing-form__input", label: hooks(night.date).format('ddd, MMM D'), value: night.amount, mask: "price", disabled: night.isLocked || allDisabled || this.isSubmitting, "onText-change": (e) => this.updateNight(night.date, e.detail) }, h("span", { slot: "start" }, calendar_data.property.currency.symbol), (night.isLocked || this.invoiceLocked) && h("wa-icon", { slot: "end", name: "lock", style: { fontSize: '0.875rem' } })))))));
    }
    static get watchers() { return {
        "room": [{
                "handleRoomChange": 0
            }]
    }; }
};
IrBookingPricingForm.style = irBookingPricingFormCss();

const irBookingRoomsCss = () => `.sc-ir-booking-rooms-h{display:block}.booking-rooms__card.sc-ir-booking-rooms{background-color:var(--wa-color-surface-default)}.booking-details__date-view-header.sc-ir-booking-rooms{font-size:1.1rem !important}.room-group.sc-ir-booking-rooms{margin-bottom:1rem !important}.room-group.sc-ir-booking-rooms:last-child{margin-bottom:1.81rem !important}.service-group.sc-ir-booking-rooms{padding:0.125rem 0 0.25rem;border-left:3px solid transparent;padding-left:0.625rem}.service-group--guest.sc-ir-booking-rooms{border-left-color:var(--wa-color-neutral-300, #d4d4d8)}.service-group--agent.sc-ir-booking-rooms{border-left-color:var(--wa-color-primary-500, #3b82f6)}.service-group__label.sc-ir-booking-rooms{display:flex;align-items:center;gap:0.4rem;margin:0 0 0.75rem;font-size:0.75rem;font-weight:700;letter-spacing:0.06em;color:var(--wa-color-neutral-500, #71717a)}.service-group__label.--agent.sc-ir-booking-rooms{color:var(--wa-color-primary-600, #2563eb)}.service-group__dot.sc-ir-booking-rooms{display:inline-block;width:6px;height:6px;border-radius:50%;background-color:var(--wa-color-neutral-400, #a1a1aa);flex-shrink:0}.service-group--agent.sc-ir-booking-rooms .service-group__dot.sc-ir-booking-rooms{background-color:var(--wa-color-primary-500, #3b82f6)}.service-group__empty.sc-ir-booking-rooms{margin:0;padding:0.375rem 0;font-size:0.85rem;color:var(--wa-color-neutral-400, #a1a1aa);font-style:italic}`;

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
        return canCheckIn({ from_date: room.from_date, to_date: room.to_date, isCheckedIn: room.in_out?.code === ROOM_IN_OUT.CHECKIN });
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
        return (h("ir-room", { key: room.identifier, room: room, property_id: this.propertyId, language: this.language, departureTime: this.departureTime, arrivalTime: this.arrivalTime, bedPreferences: this.bedPreference, isEditable: this.booking.is_editable, legendData: this.legendData, roomsInfo: this.roomsInfo, myRoomTypeFoodCat: room.roomtype.name, mealCodeName: room.rateplan.short_name, includeDepartureTime: includeDepartureTime, currency: this.booking.currency.symbol, hasRoomEdit: this.hasRoomEdit && this.booking.status.code !== '003' && this.booking.is_direct, hasRoomDelete: this.hasRoomDelete && this.booking.status.code !== '003' && this.booking.is_direct, hasCheckIn: showCheckin, hasCheckOut: showCheckout, booking: this.booking, agent: this.agent, clTransactions: this.clTransactions, svcCategories: this.svcCategories, bookingIndex: bookingIndex, onDeleteFinished: (e) => this.roomDeleteFinished.emit(e.detail) }));
    }
    renderRoomPool(rooms) {
        if (!rooms.length) {
            return h("p", { class: "room-group__empty" }, "No rooms in this group");
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
        const agentName = this.booking.agent?.name ?? 'Agent';
        return (h(Fragment, null, h("p", { class: "service-group__label --agent" }, agentName, h("span", null, "Folio")), h("div", { class: "service-group service-group--agent" }, h("div", { class: "service-group__body" }, agentRooms.length === 0 ? h("p", { class: "service-group__empty" }, "No agent rooms") : this.renderRoomPool(agentRooms))), h("wa-divider", null), h("p", { class: "service-group__label" }, "Guest", h("span", null, "Folio")), h("div", { class: "service-group service-group--guest" }, h("div", { class: "service-group__body" }, guestRooms.length === 0 ? h("p", { class: "service-group__empty" }, "No guest rooms") : this.renderRoomPool(guestRooms)))));
    }
    render() {
        if (!this.booking) {
            return null;
        }
        return (h("wa-card", { appearance: "plain", class: "booking-rooms__card" }, h("ir-date-view", { class: "booking-details__date-view-header", slot: "header", from_date: this.booking.from_date, to_date: this.booking.to_date }), this.hasRoomAdd && this.booking.is_editable && (h(Fragment, null, h("wa-tooltip", { for: "room-add" }, "Add unit"), h("ir-custom-button", { slot: "header-actions", id: "room-add", appearance: 'plain', size: 's', variant: 'neutral' }, h("wa-icon", { name: "plus", style: { fontSize: '1rem' }, label: "Add unit" })))), this.renderRooms()));
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
        return (h("ir-dialog", { key: 'b39f1f309c4599a677166ee388c645d5766767aa', label: "Change Booking Source", onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, open: this.open }, this.open && (h("ir-booking-source-editor-form", { key: 'e2bc0ae0c3113fb1cb93a3a151e55b5978cab44f', booking: this.booking, onBookingSourceSaved: () => {
                this.closeDialog();
                setTimeout(() => this.resetBookingEvt.emit(null), 100);
            }, onLoadingChange: e => (this.isLoading = e.detail) })), h("div", { key: '7e8c71444eff133ccb2b949835182a1c79d9d7e6', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '55663b2888522962184aaedf59c3fa22eca8981a', size: "m", "data-dialog": "close", appearance: "filled", variant: "neutral" }, "Cancel"), h("ir-custom-button", { key: '5d88d7f001fc50fe5e9d50c95b3d2f5e4f364a65', type: "submit", form: `change-source-form-${this.booking?.booking_nbr}`, size: "m", appearance: "accent", variant: "brand", loading: this.isLoading }, "Save"))));
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
                label: room.roomtype?.name ?? 'Room',
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
                label: pickup.selected_option?.vehicle?.description ?? 'Airport Pickup',
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
        return (h("form", { key: '9cd9c81af3e0a8886631bab4c565be0c02775563', id: `change-source-form-${this.booking?.booking_nbr}`, onSubmit: this.handleSubmit.bind(this) }, this.booking.agent === null && this.booking?.financial?.payments?.filter(p => !p.is_city_ledger)?.length > 0 && (h("wa-callout", { key: 'daeddb3e7f708e3392e60c8215cdd560ad97928d', size: "s", variant: "warning", style: { marginBottom: '1rem' } }, h("wa-icon", { key: '71b0665cf5ea8d98c40c94018ee2cafa87225e3f', slot: "icon", name: "triangle-exclamation" }), "You have guest folio entries that may need to be removed and recreated in the agent folio.")), h("wa-select", { key: 'f88261199e647588d029c7854bff8262b100db64', label: "New source", onchange: this.handleSelectChange.bind(this), size: "s", value: this.selectedSource?.id, defaultValue: this.selectedSource?.id }, calendar_data?.property?.allowed_booking_sources?.map(option => option.type === 'LABEL' ? (h("small", { key: option.id }, option.description)) : (h("wa-option", { key: option.id, value: option.id?.toString() }, option.description)))), isAssign && h("ir-booking-assign-items", { key: 'c73e269416663c2d695670bf85c80a67c1be5bab', items: this.buildAssignableItems(), onBookingSelectionChange: e => (this.checkedItems = e.detail) })));
    }
    static get watchers() { return {
        "isLoading": [{
                "handleLoadingChange": 0
            }]
    }; }
};
IrBookingSourceEditorForm.style = irBookingSourceEditorFormCss();

const irCheckoutDialogCss = () => `.ir-dialog__footer.sc-ir-checkout-dialog{display:flex;align-items:center;gap:1rem;justify-content:flex-end;width:100%}.dialog__loader-container.sc-ir-checkout-dialog{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px;min-width:31rem}#dialog-overview.sc-ir-checkout-dialog::part(title),#dialog-overview.sc-ir-checkout-dialog [part~="title"]{color:var(--wa-color-text-normal);text-align:start}.sc-ir-checkout-dialog-h{display:block}.dialog__loader-container.sc-ir-checkout-dialog{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px}.checkout-dialog__callouts.sc-ir-checkout-dialog{display:flex;flex-direction:column;gap:1rem;margin-bottom:var(--wa-space-xl, 2rem)}.checkout-dialog__callouts.sc-ir-checkout-dialog:empty{display:none}.early-checkout.sc-ir-checkout-dialog{display:grid;gap:1rem;width:100%;min-width:0;overflow-x:clip}.early-checkout.sc-ir-checkout-dialog ir-input.sc-ir-checkout-dialog,.early-checkout.sc-ir-checkout-dialog wa-callout.sc-ir-checkout-dialog,.early-checkout.sc-ir-checkout-dialog wa-card.sc-ir-checkout-dialog{min-width:0;max-width:100%}.ec-summary.sc-ir-checkout-dialog::part(message),.ec-summary.sc-ir-checkout-dialog [part~="message"]{display:flex;flex-direction:column;gap:0.5rem}.ec-summary__row.sc-ir-checkout-dialog{display:flex;justify-content:space-between;align-items:center}.ec-summary__label.sc-ir-checkout-dialog{font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280)}.ec-summary__value.sc-ir-checkout-dialog{font-size:0.8125rem;font-weight:500;color:var(--wa-color-text-normal, #111827)}.ec-summary__value--accent.sc-ir-checkout-dialog{color:var(--wa-color-brand-fill-loud, #2563eb);font-weight:600}.ec-section.sc-ir-checkout-dialog{display:grid;gap:0.35rem}.ec-section__title.sc-ir-checkout-dialog{margin:0;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--wa-color-text-quiet, #6b7280)}.ec-nights.sc-ir-checkout-dialog{border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.5rem;overflow:hidden}.ec-nights__row.sc-ir-checkout-dialog{display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0.875rem;font-size:0.8125rem;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.ec-nights__date.sc-ir-checkout-dialog{color:var(--wa-color-text-quiet, #6b7280)}.ec-nights__amount.sc-ir-checkout-dialog{font-weight:500;font-variant-numeric:tabular-nums;color:var(--wa-color-text-normal, #111827)}.ec-nights__subtotal.sc-ir-checkout-dialog{display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0.875rem;font-size:0.8125rem;font-weight:600;color:var(--wa-color-text-normal, #111827);background:var(--wa-color-neutral-fill-quiet, #f9fafb);border-top:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.ec-penalty__badge.sc-ir-checkout-dialog{margin:0;font-size:0.75rem;font-weight:500;color:var(--wa-color-warning-on-quiet, #92400e)}.ec-penalty__badge--waived.sc-ir-checkout-dialog{color:var(--wa-color-success-on-quiet, #065f46)}.ec-penalty__hint.sc-ir-checkout-dialog{margin:0;font-size:0.75rem;color:var(--wa-color-text-quiet, #6b7280)}.due-amount-btn.sc-ir-checkout-dialog{all:unset;display:block;width:100%;cursor:pointer}.due-amount-btn.sc-ir-checkout-dialog:focus-visible{outline:2px solid var(--wa-color-brand-fill-loud);outline-offset:2px;border-radius:0.375rem}.ir-dialog__footer.sc-ir-checkout-dialog{display:flex;flex-wrap:wrap;gap:0.5rem;width:100%}.ir-dialog__footer.sc-ir-checkout-dialog>*.sc-ir-checkout-dialog{flex:1}@media (min-width: 640px){.ir-dialog__footer.sc-ir-checkout-dialog{flex-wrap:nowrap;justify-content:flex-end}.ir-dialog__footer.sc-ir-checkout-dialog>*.sc-ir-checkout-dialog{flex:0 0 auto}}`;

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
    agent;
    paymentEntries;
    includeInvoice = false;
    checkoutDialogClosed;
    bookingService = new BookingService();
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
        return `${this.currencySymbol}${amount.toFixed(2)}`;
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
            this.checkoutDialogClosed.emit({ reason: this.includeInvoice ? 'openInvoice' : 'checkout' });
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
            const [invoiceInfo, agent, setupEntries] = await Promise.all([
                this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr }),
                hasAgent ? this.agentService.getExposedAgent({ id: this.booking.agent.id }) : Promise.resolve(null),
                hasDueAmount ? this.bookingService.getSetupEntriesByTableNameMulti(['_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']) : Promise.resolve(null),
            ]);
            this.invoiceInfo = invoiceInfo;
            this.setupButtons();
            if (setupEntries) {
                const { pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
                this.paymentEntries = { types: pay_type, groups: pay_type_group, methods: pay_method };
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
        const toDate = hooks(this.room.to_date, 'YYYY-MM-DD');
        this.isEarlyCheckout = today.isBefore(toDate, 'date');
        if (this.isEarlyCheckout) {
            const todayStr = today.format('YYYY-MM-DD');
            this.remainingDays = (this.room.days ?? []).filter(d => d.date >= todayStr);
            const total = this.remainingTotal;
            this.penaltyAmount = total;
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
        return (h("div", { class: "early-checkout" }, h("wa-callout", { class: "ec-summary", size: "s", appearance: "filled", variant: "neutral" }, h("div", { class: "ec-summary__row" }, h("span", { class: "ec-summary__label" }, "Unit"), h("span", { class: "ec-summary__value" }, unitName)), h("div", { class: "ec-summary__row" }, h("span", { class: "ec-summary__label" }, "Original check-out"), h("span", { class: "ec-summary__value" }, hooks(this.room.to_date, 'YYYY-MM-DD').format('ddd, MMM D, YYYY'))), h("div", { class: "ec-summary__row" }, h("span", { class: "ec-summary__label" }, "Actual check-out"), h("span", { class: "ec-summary__value" }, hooks().format('ddd, MMM D, YYYY')))), h("div", { class: "ec-section" }, h("p", { class: "ec-section__title" }, "Reclaimed Nights ", h("wa-badge", { pill: true }, remainingCount)), h("div", { class: "ec-nights" }, this.remainingDays.map(day => (h("div", { key: day.date, class: "ec-nights__row" }, h("span", { class: "ec-nights__date" }, hooks(day.date, 'YYYY-MM-DD').format('ddd, MMM D')), h("span", { class: "ec-nights__amount" }, this.formatAmount(day.charges.total_amount))))), h("div", { class: "ec-nights__subtotal" }, h("span", null, "Subtotal (Including taxes and fees)"), h("span", null, this.formatAmount(total))))), h("div", { class: "ec-section" }, h("ir-input", { label: "Apply cancellation penalty?", mask: "price", value: this.initialPenaltyStr, defaultValue: this.initialPenaltyStr, min: 0, max: total, hint: "Pre-filled from reclaimed nights. Modify or waive entirely.", "onText-change": (e) => {
                const val = parseFloat(e.detail);
                this.penaltyAmount = isNaN(val) ? 0 : val;
            } }, h("span", { slot: "start" }, this.currencySymbol)))));
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
    renderDueAmountWarning() {
        const balance = this.booking?.guest_financial?.due_amount ?? 0;
        if (!balance || balance <= 0)
            return null;
        const amount = this.formatAmount(balance);
        return (h("button", { type: "button", class: "due-amount-btn", onClick: () => this.paymentFolioRef?.openFolio() }, h("wa-callout", { size: "s", variant: "danger" }, h("wa-icon", { slot: "icon", name: "money-bill-wave" }), h("div", { class: 'd-flex align-items-center justify-content-between' }, h("span", null, "Outstanding guest balance: ", amount), h("wa-icon", { name: "chevron-right", style: { marginLeft: 'auto' } })))));
    }
    renderSameDayWarning() {
        if (hooks().isSame(hooks(this.room?.from_date, 'YYYY-MM-DD'), 'date')) {
            const isSingleRoom = this.booking.rooms.length === 1;
            return (h("wa-callout", { size: "s", variant: "danger" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), "This ", isSingleRoom ? 'booking' : 'room', " will be ", isSingleRoom ? 'cancelled' : 'removed'));
        }
        return null;
    }
    renderMissingClWarning() {
        const summary = this.missingClSummary;
        if (!summary)
            return null;
        if (summary.total === 0) {
            return (h("wa-callout", { size: "s", variant: "success" }, h("wa-icon", { slot: "icon", name: "circle-check" }), "All charges posted to ", h("b", null, this.agent.name), " City Ledger"));
        }
        return (h("wa-callout", { size: "s", variant: "warning" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), summary.total, " item", summary.total !== 1 ? 's' : '', " not posted to city ledger"));
    }
    render() {
        const isEarly = this.isEarlyCheckout && this.isLoading !== 'page';
        const hasDue = (this.booking?.guest_financial?.due_amount ?? 0) > 0;
        return (h(Fragment, { key: '3819ca8d274d2cf12143aecaa43e3abeff72dd6f' }, h("ir-dialog", { key: '50d741747238f4317546a51e72bec994748f8808', open: this.open, label: isEarly ? 'Early Check-Out' : 'Check-Out', style: { '--ir-dialog-width': isEarly ? 'min(36rem, calc(100vw - 2rem))' : 'fit-content' }, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.buttons.clear();
                this.checkoutDialogClosed.emit({ reason: 'cancel' });
            } }, this.open && (h(Fragment, { key: '910473d190c0ef1ac33fbc2ce44645e4a94368fb' }, this.isLoading === 'page' ? (h("div", { class: "dialog__loader-container" }, h("ir-spinner", null))) : (h(Fragment, null, h("div", { class: "checkout-dialog__callouts" }, this.renderDueAmountWarning(), this.renderMissingClWarning(), this.renderSameDayWarning()), this.isEarlyCheckout ? (this.renderEarlyCheckoutContent()) : (h("p", { style: { width: 'calc(31rem - var(--spacing))' } }, "Are you sure you want to check out unit ", this.room?.unit?.name, "?")), this.buttons.has('invoice_checkout') && (h("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } }, h("wa-checkbox", { style: { marginTop: '1rem', color: 'var(--wa-color-text-quiet)', marginLeft: 'auto' }, value: String(this.includeInvoice), defaultChecked: this.includeInvoice, onchange: () => {
                this.includeInvoice = !this.includeInvoice;
            } }, "Prepare guest invoice after checkout"))))))), h("div", { key: '9a91641a5f2492449eedcfa6be89aace32237580', slot: "footer", class: "ir-dialog__footer" }, h(Fragment, { key: '21dd2c8166ed96090f0a7ff6dfcfd3ec1018e0c4' }, h("ir-custom-button", { key: '9ae206fae95057c142b1ce7d0ccfe67e52e0cfe2', size: "m", "data-dialog": "close", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel ?? 'Cancel'), h("ir-custom-button", { key: 'd068c078cbbe4d635e57d3987251b0944ca93156', size: "m", onClickHandler: e => this.checkoutRoom({ e, source: 'checkout' }), variant: 'brand', loading: this.isLoading === 'checkout' }, isEarly ? 'Confirm early check-out' : 'Check out')))), hasDue && this.paymentEntries && (h("ir-payment-folio", { key: 'ed46c5a71c0077c6c1afde48d3fd1a325a6f9267', ref: el => (this.paymentFolioRef = el), booking: this.booking, bookingNumber: this.booking.booking_nbr, paymentEntries: this.paymentEntries, mode: 'payment-action', payment: this.duePayment }))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrCheckoutDialog.style = irCheckoutDialogCss();

const irCityLedgerFiscalDocumentsTableCss = () => `.sc-ir-city-ledger-fiscal-documents-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-city-ledger-fiscal-documents-table{overflow-x:auto}.table--container.sc-ir-city-ledger-fiscal-documents-table,.data-table.sc-ir-city-ledger-fiscal-documents-table{height:100%}.ir-table-row.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-city-ledger-fiscal-documents-table tbody.sc-ir-city-ledger-fiscal-documents-table tr.sc-ir-city-ledger-fiscal-documents-table:last-child>td.sc-ir-city-ledger-fiscal-documents-table{border-bottom:0 !important}.cell--align-start.sc-ir-city-ledger-fiscal-documents-table{text-align:start !important}.cell--align-center.sc-ir-city-ledger-fiscal-documents-table{text-align:center !important}.cell--align-end.sc-ir-city-ledger-fiscal-documents-table{text-align:end !important}.table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sc-ir-city-ledger-fiscal-documents-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sc-ir-city-ledger-fiscal-documents-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-city-ledger-fiscal-documents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-city-ledger-fiscal-documents-table,.ir-table-row.sc-ir-city-ledger-fiscal-documents-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-fiscal-documents-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sortable.sc-ir-city-ledger-fiscal-documents-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sortable.sc-ir-city-ledger-fiscal-documents-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sortable.sc-ir-city-ledger-fiscal-documents-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-city-ledger-fiscal-documents-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-city-ledger-fiscal-documents-table svg.sc-ir-city-ledger-fiscal-documents-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:hover td.sc-ir-city-ledger-fiscal-documents-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:hover td.sc-ir-city-ledger-fiscal-documents-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:active td.sc-ir-city-ledger-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:hover td.sc-ir-city-ledger-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:active td.sc-ir-city-ledger-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-city-ledger-fiscal-documents-table .empty-row.sc-ir-city-ledger-fiscal-documents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-city-ledger-fiscal-documents-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-city-ledger-fiscal-documents-table{position:sticky !important;right:0;background-color:white}.sc-ir-city-ledger-fiscal-documents-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60dvh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:var(--wa-color-surface-default)}.fiscal-table__heading.sc-ir-city-ledger-fiscal-documents-table:last-child{border-right:0}.fiscal-table__heading--numeric.sc-ir-city-ledger-fiscal-documents-table,.fiscal-table__cell--numeric.sc-ir-city-ledger-fiscal-documents-table{text-align:right !important}.ir-table-row.--is-draft.sc-ir-city-ledger-fiscal-documents-table>td.sc-ir-city-ledger-fiscal-documents-table{background-color:var(--wa-color-warning-fill-quiet) !important}.fd_ss.sc-ir-city-ledger-fiscal-documents-table{color:var(--wa-color-text-quiet);margin:0;padding:0;font-size:var(--wa-font-size-s)}.fiscal-table__date-cell.sc-ir-city-ledger-fiscal-documents-table{display:flex;align-items:baseline;gap:0.5rem}.fiscal-table__status-tag.sc-ir-city-ledger-fiscal-documents-table{text-transform:capitalize}.fiscal-table__doc-number.sc-ir-city-ledger-fiscal-documents-table::part(base),.fiscal-table__doc-number.sc-ir-city-ledger-fiscal-documents-table [part~="base"]{padding:0.05rem 0.5rem;height:auto}.fiscal-table__cell--doc-number.sc-ir-city-ledger-fiscal-documents-table{--ir-cell-padding:0.5rem}.fiscal-table__heading--actions.sc-ir-city-ledger-fiscal-documents-table,.fiscal-table__cell--actions.sc-ir-city-ledger-fiscal-documents-table{text-align:center !important}.fiscal-table__action-trigger.sc-ir-city-ledger-fiscal-documents-table::part(base),.fiscal-table__action-trigger.sc-ir-city-ledger-fiscal-documents-table [part~="base"]{width:24px;height:24px}.fiscal-table__action-danger.sc-ir-city-ledger-fiscal-documents-table{color:var(--wa-color-danger-fill-loud, #dc2626)}.fiscal-table__cell--zero.sc-ir-city-ledger-fiscal-documents-table{color:var(--wa-color-text-quiet, #9ca3af)}.fiscal-table__totals.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{background:var(--wa-color-neutral-fill-quiet, #f9fafb) !important;border-top:2px solid var(--wa-color-neutral-border-quiet, #e5e7eb) !important;font-weight:600;font-size:0.875rem;padding:0.75rem 1rem !important}.fiscal-table__totals-label.sc-ir-city-ledger-fiscal-documents-table{display:flex;align-items:center;color:var(--wa-color-text-quiet, #6b7280)}.fiscal-table__totals-value.sc-ir-city-ledger-fiscal-documents-table{font-variant-numeric:tabular-nums}.fiscal-table__totals-debit.sc-ir-city-ledger-fiscal-documents-table{color:#dc2626}.fiscal-table__totals-credit.sc-ir-city-ledger-fiscal-documents-table{color:#16a34a}.fiscal-table__empty.sc-ir-city-ledger-fiscal-documents-table{text-align:center;color:var(--wa-color-text-quiet);font-size:0.875rem;padding:1.25rem}.fiscal-table__date-prompt.sc-ir-city-ledger-fiscal-documents-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;flex:1;padding:3rem 2rem;text-align:center}.fiscal-table__date-prompt-icon.sc-ir-city-ledger-fiscal-documents-table{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.fiscal-table__date-prompt-title.sc-ir-city-ledger-fiscal-documents-table{margin:0;font-size:0.9375rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}`;

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
                header: 'Status',
                cell: info => h("ir-cl-status-tag", { transaction: info.row.original }),
            }),
            this.columnHelper.accessor('ISSUE_DATE_DISPLAY', {
                header: 'Date',
                cell: info => {
                    const row = info.row.original;
                    return (h("div", { class: "fiscal-table__date-cell" }, h("p", { class: "m-0 p-0" }, info.getValue()), row.ISSUE_HOUR != null && row.ISSUE_MINUTE != null && h("p", { class: "fd_ss" }, _formatTime(String(row.ISSUE_HOUR), String(row.ISSUE_MINUTE)))));
                },
            }),
            this.columnHelper.accessor('DOC_NUMBER', {
                header: 'Doc Number',
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
                    }, variant: "brand", appearance: "plain", class: "fiscal-table__doc-number" }, info.getValue() ?? '')),
            }),
            this.columnHelper.accessor('FD_TYPE_NAME', {
                id: 'type',
                header: 'Type',
                cell: info => (h("div", null, h("p", { class: "m-0 p-0" }, info.getValue()), info.row.original.EXTERNAL_REF && (h("p", { class: "fd_ss" }, [FdTypes.CreditNote, FdTypes.CreditReceipt].includes(info.row.original.FD_TYPE_CODE) ? 'for' : 'voided by', " ", info.row.original.EXTERNAL_REF)))),
            }),
        ];
        const amountCols = this.taxableOnly
            ? [
                this.columnHelper.accessor('NET_AMOUNT', {
                    header: 'Net Amount',
                    cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
                }),
                this.columnHelper.accessor('TAX_AMOUNT', {
                    header: 'Taxes',
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
                header: 'Debit',
                cell: info => (info.row.original.FD_TYPE_CODE === FdTypes.CreditReceipt ? '' : this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID)),
            }),
            this.columnHelper.accessor('CREDIT', {
                header: 'Credit',
                cell: info => this.renderMoney(this.getCredit(info), info.row.original.CURRENCY_ID),
            }),
            this.columnHelper.display({
                id: 'actions',
                header: 'Actions',
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
                            h("wa-dropdown-item", { value: "preview" }, "Preview"),
                            h("wa-dropdown-item", { value: "convert-to-invoice" }, "Convert to invoice"),
                            h("wa-dropdown-item", { value: "delete-draft", variant: "danger" }, "Delete"),
                        ]
                        : [
                            h("wa-dropdown-item", { value: "view" }, "View document"),
                            h("wa-dropdown-item", { value: "print" }, "Print"),
                            // <wa-dropdown-item value="download">Download PDF</wa-dropdown-item>,
                            // (!isPaid || !isInvoice) && <wa-divider></wa-divider>,
                            // !isPaid && <wa-dropdown-item value="send-reminder">Send Reminder</wa-dropdown-item>,
                            // !isPaid && isInvoice && <wa-dropdown-item value="apply-payment">Apply Payment</wa-dropdown-item>,
                            // !isPaid && <wa-dropdown-item value="mark-paid">Mark as Paid</wa-dropdown-item>,
                            // <wa-divider></wa-divider>,
                            isInvoice && info.row.original.FD_STATUS_CODE !== FdStatus.Voided && (h("wa-dropdown-item", { value: "void" }, h("span", { class: "fiscal-table__action-danger" }, "Issue credit note"))),
                            isReceipt && info.row.original.FD_STATUS_CODE !== FdStatus.Voided && (h("wa-dropdown-item", { value: "void" }, h("span", { class: "fiscal-table__action-danger" }, "Void with credit receipt"))),
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
            return (h(Host, null, h("div", { class: "fiscal-table__date-prompt" }, h("div", { class: "fiscal-table__date-prompt-icon" }, h("wa-icon", { name: "calendar-days" })), h("p", { class: "fiscal-table__date-prompt-title" }, "Select a date range to get started"), hasDate && (h("wa-animation", { iterations: 1, play: true, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { size: "s", variant: "brand", onClickHandler: () => this.fetchRequested.emit() }, h("wa-icon", { slot: "start", name: "magnifying-glass" }), "Load Documents"))))));
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
            } }, flexRender(cell.column.columnDef.cell, cell.getContext()))))))), table.getRowModel().rows.length === 0 && (h("tr", null, h("td", { class: "empty-row", colSpan: this.columns.length }, this.isLoading ? h("ir-spinner", null) : 'No fiscal documents match the current filters.')))))), h("ir-fd-confirm-dialog", { amount: this.pendingAction?.row?.TOTAL_AMOUNT, fdType: this.pendingAction?.row?.FD_TYPE_CODE, open: this.pendingAction !== null, action: this.pendingAction?.action ?? null, docNumber: this.pendingAction?.row.DOC_NUMBER ?? 'this document', isConfirming: this.isConfirming, onConfirmed: e => this.confirmPendingAction(e), onCancelled: () => (this.pendingAction = null) })));
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
    drawerLabel = 'New Entry';
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
        return (h("ir-drawer", { key: '02b32199297de0e879939c9ff2a638567be493e9', open: this.open, style: {
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
            } }, this.open && (h("ir-city-ledger-transaction-form", { key: 'f361312ce96f448fa37e901d98c255d45c9356fd', booking: this.booking, formId: this.formId, agent: this.agent, initialTransactionType: this.initialTransactionType, unpaidInvoiceOptions: this.unpaidInvoiceOptions, bookingOptions: this.bookingOptions, serviceCategoryOptions: this.serviceCategoryOptions, transaction: this.transaction, onTransactionSaved: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.transactionSaved.emit();
                this.closeDrawer.emit();
            }, onSubmitDisabledChange: (e) => {
                this.saveDisabled = e.detail;
            } })), h("div", { key: '80cc3912c7b4b5f518c7fb7a4a02579722ee0b77', slot: "footer", class: 'ir__drawer-footer' }, h("ir-custom-button", { key: '03aa71b0668f8e77d9a724c4821f1ee616215277', appearance: "filled", size: "m", variant: "neutral", class: "city-ledger-transaction-drawer__btn", onClickHandler: () => this.closeDrawer.emit() }, "Cancel"), h("ir-custom-button", { key: '840a51ebe7fd9c2ef9db926e46240cca7c4fa861', form: this.formId, size: "m", type: "submit", variant: "brand", class: "city-ledger-transaction-drawer__btn", disabled: this.saveDisabled }, "Save"))));
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
        const { groups, types } = libExports.z
            .object({
            types: ZIEntrySchema.array().min(1),
            groups: ZIEntrySchema.array().min(1),
            methods: ZIEntrySchema.array().min(1),
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
            //   })) as IEntries[];
            // } else if (group.CODE_NAME === 'REFUND') {
            //   rec[group.CODE_NAME] = methods.map(entry => ({
            //     ...entry,
            //     CODE_VALUE_EN: `Refund: ${entry.CODE_VALUE_EN}`,
            //   })) as IEntries[];
            rec[group.CODE_NAME] = byCodes(extractGroupCodes(group.CODE_NAME));
        });
        return rec;
    }
    catch (error) {
        console.log(error);
        return {};
    }
}

const irCityLedgerTransactionFormCss = () => `.sc-ir-city-ledger-transaction-form-h{display:block;height:100%}.transaction-form.sc-ir-city-ledger-transaction-form{display:grid;gap:0.9rem}.transaction-form__field.sc-ir-city-ledger-transaction-form{display:grid;gap:0.35rem}.transaction-form__field--full-width.sc-ir-city-ledger-transaction-form,.transaction-form__field--full-width.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form{width:100%}.transaction-form__field--full-width.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form wa-radio.sc-ir-city-ledger-transaction-form{flex:1}.transaction-form__field__entry-type.--credit.sc-ir-city-ledger-transaction-form:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.transaction-form__field__entry-type.--debit.sc-ir-city-ledger-transaction-form:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}.amount-tax-group.sc-ir-city-ledger-transaction-form{display:flex;flex-direction:column;gap:0.35rem}.amount-tax-group__label.sc-ir-city-ledger-transaction-form{font-size:var(--wa-input-label-font-size-small, 0.875rem);font-weight:var(--wa-font-weight-semibold, 500);color:var(--wa-color-text-normal)}.amount-tax-group__required.sc-ir-city-ledger-transaction-form{color:var(--wa-color-danger-fill-loud)}.amount-tax-group__row.sc-ir-city-ledger-transaction-form{display:flex;align-items:stretch}.amount-tax-group__amount.sc-ir-city-ledger-transaction-form{flex:1;min-width:0}.amount-tax-group.sc-ir-city-ledger-transaction-form ir-input.sc-ir-city-ledger-transaction-form::part(label),.amount-tax-group.sc-ir-city-ledger-transaction-form ir-input.sc-ir-city-ledger-transaction-form [part~="label"]{display:none}.amount-tax-group.sc-ir-city-ledger-transaction-form ir-input.sc-ir-city-ledger-transaction-form:dir(rtl)::part(base),.amount-tax-group.sc-ir-city-ledger-transaction-form ir-input.sc-ir-city-ledger-transaction-form:dir(rtl) [part~="base"]{border-top-left-radius:0;border-bottom-left-radius:0;border-left:none}.amount-tax-group.sc-ir-city-ledger-transaction-form ir-input.sc-ir-city-ledger-transaction-form:dir(ltr)::part(base),.amount-tax-group.sc-ir-city-ledger-transaction-form ir-input.sc-ir-city-ledger-transaction-form:dir(ltr) [part~="base"]{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.amount-tax-group.sc-ir-city-ledger-transaction-form wa-select.sc-ir-city-ledger-transaction-form{flex-shrink:0;min-width:8.5rem}.amount-tax-group.sc-ir-city-ledger-transaction-form wa-select.sc-ir-city-ledger-transaction-form:dir(ltr)::part(combobox),.amount-tax-group.sc-ir-city-ledger-transaction-form wa-select.sc-ir-city-ledger-transaction-form:dir(ltr) [part~="combobox"]{border-top-left-radius:0;border-bottom-left-radius:0}.amount-tax-group.sc-ir-city-ledger-transaction-form wa-select.sc-ir-city-ledger-transaction-form:dir(rtl)::part(combobox),.amount-tax-group.sc-ir-city-ledger-transaction-form wa-select.sc-ir-city-ledger-transaction-form:dir(rtl) [part~="combobox"]{border-top-right-radius:0;border-bottom-right-radius:0}.tx-option.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;width:100%}.tx-option__badges.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;gap:0.25rem}.transaction-form__switch.sc-ir-city-ledger-transaction-form{padding:0.15rem 0}.transaction-form__error.sc-ir-city-ledger-transaction-form{margin:0;font-size:0.75rem;color:var(--wa-color-danger-fill-loud)}.transaction-form__fiscal-note.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;gap:0.45rem;font-size:0.875rem;color:var(--wa-color-neutral-fill-loud)}.transaction-form__payment-type-option.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.payment-section.sc-ir-city-ledger-transaction-form{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.payment-section__title.sc-ir-city-ledger-transaction-form{margin:0;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--wa-color-text-quiet, #6b7280)}.payment-type-pill.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;background:var(--wa-color-success-fill-quiet, #f0fdf4);border:1px solid var(--wa-color-success-border-quiet, #bbf7d0);border-radius:0.5rem;font-size:0.8125rem}.payment-type-pill__name.sc-ir-city-ledger-transaction-form{font-weight:500;color:var(--wa-color-text-normal, #111827);flex:1}.payment-section.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form{width:100%}.payment-section.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form wa-radio.sc-ir-city-ledger-transaction-form{flex:1}.payment-invoice-select.sc-ir-city-ledger-transaction-form{animation:slide-in 0.18s ease}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.transaction-form__hint.sc-ir-city-ledger-transaction-form{margin:0;font-size:0.75rem;color:var(--wa-color-text-quiet, #6b7280)}.transaction-form__textarea-label.sc-ir-city-ledger-transaction-form{font-size:0.875rem;font-weight:500;color:var(--wa-color-text-normal, #111827)}.transaction-form__notes.sc-ir-city-ledger-transaction-form{width:100%;box-sizing:border-box;padding:0.5rem 0.75rem;border:1px solid var(--wa-color-neutral-border-quiet, #d1d5db);border-radius:0.375rem;font-size:0.875rem;font-family:inherit;color:var(--wa-color-text-normal, #111827);background:var(--wa-color-surface-default, #fff);resize:vertical;min-height:4.5rem;outline:none;transition:border-color 0.15s ease,     box-shadow 0.15s ease}.transaction-form__notes.sc-ir-city-ledger-transaction-form:focus{border-color:var(--wa-color-brand-border-loud, #2563eb);box-shadow:0 0 0 2px var(--wa-color-brand-fill-quiet, #eff6ff)}.transaction-form__notes.sc-ir-city-ledger-transaction-form::placeholder{color:var(--wa-color-text-quiet, #9ca3af)}`;

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
    bookingService = new BookingService();
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
            const setupEntries = await this.bookingService.getSetupEntriesByTableNameMulti(['_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD', '_CL_TX_TYPE']);
            const { pay_type, pay_type_group, pay_method, cl_tx_type } = this.bookingService.groupEntryTablesResult(setupEntries);
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
        return (h("div", { class: "transaction-form__field" }, h("ir-validator", { schema: transactionTypeFieldSchema, value: this.formData.transactionType, valueEvent: "change" }, h("wa-select", { label: "Transaction Type", size: "s", defaultValue: this.formData.transactionType, value: this.formData.transactionType, required: true, disabled: this.transaction !== null, onchange: event => {
                const value = event.target.value;
                this.handleTransactionTypeChange(value);
            } }, this.clTxTypes.map(type => {
            const rate = TRANSACTION_TYPE_RATES[type.CODE_NAME];
            const label = type.CODE_VALUE_EN;
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
            return (h("wa-option", { key: type.CODE_NAME, value: type.CODE_NAME, label: label }, h("div", { class: "tx-option" }, h("span", { class: "tx-option__label" }, label), h("span", { class: "tx-option__badges" }, (rate === 'CR' || rate === 'CR|DB') && h("wa-badge", { variant: "success" }, "Credit"), (rate === 'DB' || rate === 'CR|DB') && h("wa-badge", { variant: "danger" }, "Debit")))));
        })))));
    }
    renderCommonFields(withTaxes = true) {
        const minAllowedDate = hooks().subtract(12, 'months').format(DATE_INPUT_FORMAT);
        return (h(Fragment, null, this.renderTransactionTypeField(), h("div", { class: "transaction-form__field" }, h("ir-validator", { schema: dateFieldSchema, value: this.formData.date, valueEvent: "DateChanged" }, h("ir-date-select", { label: "Date", date: this.formData.date, minDate: minAllowedDate, maxDate: hooks().format('YYYY-MM-DD'), emitEmptyDate: true, onDateChanged: event => {
                this.updateFormData({
                    date: event.detail.start ? event.detail.start.format(DATE_INPUT_FORMAT) : '',
                });
            } }))), this.formData.transactionType !== ClTxTypeCode.CreditNote && (h(Fragment, null, withTaxes ? (h("div", { class: "amount-tax-group" }, h("span", { class: "amount-tax-group__label" }, "Amount (including taxes)"), h("div", { class: "amount-tax-group__row" }, h("ir-validator", { class: "amount-tax-group__amount", schema: amountFieldSchema, value: this.formData.amount, valueEvent: "text-change input-change" }, h("ir-input", { label: "Amount (including taxes)", mask: "price", value: this.formData.amount, "onText-change": (event) => {
                this.updateFormData({ amount: event.detail ?? '' });
            } }, h("span", { slot: "start" }, calendar_data.property?.currency?.symbol))), h("ir-validator", { schema: taxIdFieldSchema, value: this.formData.taxId, valueEvent: "change" }, h("wa-select", { size: "s", placeholder: "Tax", value: this.formData.taxId, defaultValue: this.formData.taxId, onchange: event => {
                this.updateFormData({ taxId: event.target.value });
            } }, this.taxOptions
            .filter(tx => tx.id !== ClTxTypeCode.DebitNote)
            .map(tax => (h("wa-option", { key: tax.id, label: tax.label, value: tax.id }, tax.label))), h("wa-option", { value: "N/A", label: "Not Applicable" }, "Not Applicable")))))) : (h("div", { class: "transaction-form__field" }, h("ir-validator", { schema: amountFieldSchema, value: this.formData.amount, valueEvent: "text-change input-change" }, h("ir-input", { label: "Amount", mask: "price", value: this.formData.amount, required: true, "onText-change": (event) => {
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
            ![ClTxTypeCode.Payment, ClTxTypeCode.Discount, ClTxTypeCode.CancellationPenalty].includes(this.formData.transactionType)), this.renderTypeFields(), this.formData.transactionType !== ClTxTypeCode.CreditNote && (h("ir-input", { label: "Reference", value: this.formData.reference, defaultValue: this.formData.reference, "onText-change": (event) => {
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
        return (h(Fragment, { key: '0410f7b0d6265a8e770095ff8cf4382bd0a65b2d' }, h("div", { key: '50e473f241407aa3bbe9391fc9c7c971b0b6ab53', class: "field field--full-width" }, h("ir-validator", { key: '450d30b0fc72154c6dad1b1fc8d979e8985e548b', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, h("wa-radio-group", { key: '0ea7f9c4b2937d7fe18c4712530aaf96b45baea5', label: "Entry Type", orientation: "horizontal", size: "s", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, h("wa-radio", { key: 'c4ea69b0ddaab1b0d9cd8e461217a7b6b1afeb9b', value: "CR", appearance: "button", class: "entry-type --credit" }, "Credit"), h("wa-radio", { key: '44067f39465ead061acee23c41f7701d11cf5d72', value: "DB", appearance: "button", class: "entry-type --debit" }, "Debit"))))));
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
        return (h(Fragment, { key: 'b4f5c16fec581c774bdca400280b6632359efdb9' }, this.creditNoteMode === 'cancel-invoice' && (h("div", { key: '308a1cce2a976553cd676e20aca4f6db434d1e2f', class: "field" }, h("ir-cl-invoice-select", { key: 'a8fdf7305114dc69858581e6168c151678ab057c', value: this.invoiceId ?? '', fiscalDocuments: this.fiscalDocuments, label: "Invoice", onInvoiceChange: event => {
                this.fieldChange.emit({ invoiceId: event.detail || undefined });
            }, hint: "Issuing this credit note will void the selected invoice and unlock all associated line items." })))));
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
            return (h("wa-callout", { size: "s", variant: "warning" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), "No paid invoices are available. A debit note requires at least one paid invoice to reference. Please issue an invoice first, then return to create the debit note."));
        }
        return (h("div", { class: "field" }, h("ir-cl-invoice-select", { value: this.invoiceId ?? '', fiscalDocuments: this.fiscalDocuments, label: "Invoice", onInvoiceChange: event => {
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
                // const targetCategories = ['ACM', 'TRF', 'GEN'];
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
            this.error = err instanceof Error ? err.message : 'Failed to issue invoice.';
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
            this.error = err instanceof Error ? err.message : 'Failed to generate proforma.';
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        const units = this.booking ? this.booking?.rooms.filter(r => r.agent && r.in_out?.code !== InOut.CheckedOut).map(r => r.unit.name) : null;
        return (h(Host, { key: '1a3f379d570df922c8f528d0ada8193af502d994' }, h("ir-dialog", { key: '721f4a522bb9eb1bb81ff32489ea15bfb104b6dc', label: "Create Invoice", ref: el => (this.dialogRef = el) }, this.booking && (h("div", { key: '73ae661b70890a22a2bdfb89fc3263c2804434d3', slot: "header-actions", class: 'cl-invoice-dialog__header-actions' }, h("wa-switch", { key: 'a22141b563ebc1ea05e424c4c100e10c5d450a84', checked: this.isProforma, disabled: this.mode === 'booking' && !this.allRoomsCheckedOut, onchange: e => (this.isProforma = e.target.checked) }, "Proforma"))), h("div", { key: 'e71137630f700969e874d0489b95f281221041b1', class: "create-invoice-dialog__body" }, this.mode === 'booking' ? (!this.allRoomsCheckedOut ? (h("wa-callout", { size: "s", variant: "warning" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), "Only a proforma invoice can be generated at this time because ", units?.length > 1 ? 'units' : 'unit', " ", h("b", null, units?.join(', ')), ".", ' ', units?.length > 1 ? 'are' : 'is', " still in-house.")) : (h("p", { class: "create-invoice-dialog__message" }, this.isProforma
            ? `Generate a proforma for Booking #${this.booking?.booking_nbr}?`
            : `Issue a draft invoice for Booking #${this.booking?.booking_nbr} to the agent?`))) : (h("ir-cl-invoice-form", { ref: el => (this.formRef = el) })), this.noResults && (h("wa-callout", { key: '6550e15eb1fc23c330b9f08672fb8c457b98b850', variant: "warning", class: "create-invoice-dialog__no-results" }, h("wa-icon", { key: '178ffbafbb08201238e8afc67d5c017a6f45f7e0', slot: "icon", name: "triangle-exclamation" }), "No transactions found for the selected period and filters.")), this.error && h("p", { key: 'fd903f96abe0cabb3f22a88a0c51558a0f209068', class: "create-invoice-dialog__error" }, this.error)), h("div", { key: 'b8a79a96bc646d4672f286ffd8d17f43e2e5d85e', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '41b8c0876bc73870494f2ddcda185c134405f3e7', size: "m", appearance: "filled", variant: "neutral", "data-dialog": "close", disabled: this.isLoading }, "Cancel"), h("ir-custom-button", { key: '2ec2495cc8c162f5559cb5181c3276a63f0eb5b9', size: "m", appearance: "accent", variant: "brand", loading: this.isLoading, onClickHandler: () => this.handleSubmit() }, this.isProforma ? 'Confirm' : 'Show draft')))));
    }
};
IrClInvoiceDialog.style = irClInvoiceDialogCss();

const irClInvoiceFormCss = () => `.sc-ir-cl-invoice-form-h{display:flex;flex-direction:column;gap:1.25rem}.invoice-form__scope-banner.sc-ir-cl-invoice-form{display:flex;align-items:flex-start;gap:0.625rem;padding:0.75rem 1rem;background:var(--wa-color-primary-50, #eff6ff);border:1px solid var(--wa-color-primary-200, #bfdbfe);border-left:3px solid var(--wa-color-primary-500, #3b82f6);border-radius:0.375rem}.invoice-form__scope-icon.sc-ir-cl-invoice-form{flex-shrink:0;margin-top:1px;color:var(--wa-color-primary-500, #3b82f6)}.invoice-form__scope-text.sc-ir-cl-invoice-form{display:flex;flex-direction:column;gap:0.125rem}.invoice-form__scope-label.sc-ir-cl-invoice-form{font-size:0.8125rem;font-weight:600;color:var(--wa-color-primary-700, #1d4ed8);letter-spacing:0.01em}.invoice-form__scope-desc.sc-ir-cl-invoice-form{font-size:0.75rem;color:var(--wa-color-primary-600, #2563eb);line-height:1.4}.invoice-form__date-error.sc-ir-cl-invoice-form ir-date-range-filter.sc-ir-cl-invoice-form{border:1px solid var(--wa-color-danger-500, #ef4444);border-radius:0.375rem}.invoice-form__date-error-msg.sc-ir-cl-invoice-form{margin:0;font-size:0.75rem;color:var(--wa-color-danger-600, #dc2626)}.invoice-form__field.sc-ir-cl-invoice-form{display:flex;flex-direction:column;gap:0.375rem}.invoice-form__label.sc-ir-cl-invoice-form{margin:0;font-size:0.8125rem;font-weight:500;color:var(--wa-color-text-normal, #374151)}.invoice-form__label-optional.sc-ir-cl-invoice-form{font-weight:400;color:var(--wa-color-text-quiet, #9ca3af)}.invoice-form__hint.sc-ir-cl-invoice-form{margin:0;font-size:0.75rem;color:var(--wa-color-text-quiet, #9ca3af);line-height:1.4}`;

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
        return (h(Host, { key: 'ef7865add8d9e9bd098bac7eb8e296436d01c164' }, h("wa-callout", { key: 'bbd7f31cf20695b600f5e168ba9ceed3b88a5788' }, h("wa-icon", { key: '988e625a56e23a78f4984dfe50f1346d7bad76be', slot: "icon", name: "circle-info" }), h("div", { key: '55683f3e363405150b5e80b8d1a8049fdd5f9a5c', class: "invoice-form__scope-text" }, h("span", { key: '82d86a2aab20a4854e1984c4f3bb7919221f8fd5', class: "invoice-form__scope-label" }, "Unbilled Folio Entries"), h("span", { key: '9fa86c0a5532f0f321e559f4636c14de0b9af206', class: "invoice-form__scope-desc" }, "Including all services from bookings, manual charges, adjustments and discounts."))), h("div", { key: '42da78708a153b1e9581686a60cb52befe576042', class: `invoice-form__field${this.dateError ? ' invoice-form__date-error' : ''}` }, h("ir-date-range-filter", { key: '2fadc90c3219135ff043b990248516ed7191b462', selectionMode: "auto", showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate, toDate: this.toDate, maxDate: hooks().format('YYYY-MM-DD'), onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: 'da8a8e21f8c373568b3f9fe9a24c088900034384', class: "invoice-form__field" }, h("wa-checkbox", { key: '3042861e1cc18a8c6589b5955c4af68900e393a7', checked: this.scope === 'UNBILLED_CHECKED_OUT', defaultChecked: this.scope === 'UNBILLED_CHECKED_OUT', onchange: e => {
                this.scope = e.target.checked ? 'UNBILLED_CHECKED_OUT' : 'UNBILLED';
            } }, "Include checked-out bookings only"))));
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
        return (h("div", { key: '3a0d550f3558cb5a0c0bd3d8041b40615fc21f8e', class: "field field--full-width" }, h("ir-validator", { key: '0e6cf4d43e592d4cbf6a6b4f5579d2f4cf76392b', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, h("wa-radio-group", { key: '6c3acdcf3f46f83ff7f23f0e00ad7e49e75af015', label: "Entry Type", orientation: "horizontal", size: "s", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, h("wa-radio", { key: '532f0e5a833df25e8b77d4f7429db8db0d305b94', value: "CR", appearance: "button", class: "entry-type --credit" }, "Credit"), h("wa-radio", { key: 'c69beb30df324de1d848d7de0540fb515128ea10', value: "DB", appearance: "button", class: "entry-type --debit" }, "Debit")))));
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
        return (h(Fragment, { key: 'ea0661cda9507eac6a0e47e889983cd5312a0b1b' }, h("div", { key: '27e97f717d79614acbbe6fd0f9d81cd51939c3ae', class: "payment-section" }, h("div", { key: '71a9d907418ec968569cc7eb0eb7e217f72b0b6d', class: "field" }, h("ir-validator", { key: '31ec8eab58264627bf450b655c90596e3677af8c', schema: paymentMethodCodeFieldSchema, value: this.paymentMethodCode, valueEvent: "change" }, h("wa-select", { key: '046c653931edab813158d517cfa327afe2b1bbb4', size: "s", label: "Payment method", placeholder: "Select method\u2026", value: this.paymentMethodCode, "onwa-show": e => this.stopPropagation(e), "onwa-hide": e => this.stopPropagation(e), onchange: e => {
                this.stopPropagation(e);
                this.handlePaymentMethodChange(e.target.value);
            } }, h("wa-option", { key: '4e6c31d3dde781d0db53f35a06d0c45f6957e370', value: "" }, "Select method\u2026"), this.paymentMethods.map(method => (h("wa-option", { key: method.CODE_NAME, label: method.CODE_VALUE_EN, value: method.CODE_NAME }, getEntryValue({ entry: method, language: this.language }))))))))));
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
        return (h("ir-dialog", { key: 'b39901e2eb31dd87b005a5090533477b5937ea57', open: this.open, label: "Expected Departure Time", ref: el => (this.dialogRef = el), onIrDialogHide: e => {
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
            } }, h("div", { key: '9a927357a6cad5e0d86b1dce22daa48ee601f70a', class: "ir-time-dialog__body" }, h("div", { key: '9c3f2fc8c48f1a001da6c36045eb3e6daf9bafb9', class: 'ir-time-dialog__current-unit' }, h("span", { key: '2db976d191aeb145082ab18f4103336df9e9f4f0' }, this.room?.roomtype?.name), " ", h("span", { key: '69a1c8fe51e90fa62a4d5527dfcfc7f69b2f64b5' }, this.room?.rateplan?.short_name), " ", h("ir-unit-tag", { key: '3a5553c4eee9858cfc118408de693128de17cc1e', unit: this.room?.unit?.name })), h("wa-select", { key: '5feae05c0939ae6b9a1d4a5b09e46f2eb4c4d581', size: "s", placeholder: "Not provided", "onwa-after-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, value: this.selectedValue ?? '', defaultValue: this.selectedValue ?? '', onchange: e => (this.selectedValue = e.target.value) }, this.departureTime?.map(dt => (h("wa-option", { key: dt.CODE_NAME, value: dt.CODE_NAME }, dt[`CODE_VALUE_${this.language?.toUpperCase()}`] ?? dt[`CODE_VALUE_EN`], this.isLateCheckout(dt) ? ' (Late check-out)' : '')))), this.selectedIsLateCheckout && (h("div", { key: '6b7f9c48ab24f9f9ca312264bbef27f8ca6e0cb2', class: "ir-time-dialog__insight" }, h("div", { key: '1ce1b6cc6420a7a3df3c3149f9466e9262016667', class: "ir-time-dialog__insight-row" }, h("wa-icon", { key: '4375a50c24649c8b657cbefe24697ff61c55cf53', class: "ir-time-dialog__insight-icon", name: "clock" }), h("div", { key: '85405d86e506dbf166d87d1762a7fb8e4112d488', class: "ir-time-dialog__insight-copy" }, h("p", { key: '26020e8969016153c4df95e65195a23fb2484b1d', class: "ir-time-dialog__insight-title" }, "Would you like to charge it as an ", h("b", { key: 'ed9a719f61a293f49cc45049855a2262aea6fcb5' }, "Late Check-out"), "?"), h("p", { key: '845bf5ef131331b83a7dabf2d56038ffd283b152', class: "ir-time-dialog__insight-subtitle" }, "This will be added as an accommodation extra service"))), this.createExtraService && (h("div", { key: '552b9ea799d80770d2d7b028d3e2263d97e9388c', class: "ir-time-dialog__insight-price" }, h("ir-validator", { key: 'd1902aca22cb1b30701986e200b407077c66ff2a', value: this.extraServicePrice, schema: ExtraServiceSchema.shape.price }, h("ir-input", { key: '259e8d4f3f0e5492e9c1986b24dc8ea9d840da18', "onText-change": e => (this.extraServicePrice = Number(e.detail)), defaultValue: this.extraServicePrice?.toString(), value: this.extraServicePrice?.toString(), mask: 'price', type: "text", withClear: true }, h("span", { key: '51330e1e315d6759164da9e9fae6905180109d5a', slot: "start" }, this.currencySymbol)))))))), h("div", { key: '9475a76d2bfb609732aa87964f3acc81b2c4c68f', slot: "footer", class: 'ir-dialog__footer' }, h("ir-custom-button", { key: '91c03c7bcae78b544bdff6ed62874a519b904296', size: "m", variant: "neutral", appearance: "filled", "data-dialog": "close" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '1ab6e2de5898d40abe913358faddbd138bfbaf37', size: "m", variant: "brand", loading: this.isLoading, disabled: !this.selectedValue, onClickHandler: e => this.handleConfirm(e), appearance: "accent" }, locales.entries.Lcz_Save))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrDepartureTimeDialog.style = irDepartureTimeDialogCss();

const irEventsLogCss = () => `.sc-ir-events-log-h{display:block}.beta.sc-ir-events-log{background:var(--red);color:white;padding:0.2rem 0.3rem;font-size:12px;border-radius:4px;margin:0}.event-row.sc-ir-events-log{padding-bottom:0.5rem}.list-title.sc-ir-events-log{margin:0;padding:0;font-size:14px;font-weight:bold;width:fit-content}.list-item.sc-ir-events-log{margin:0;padding:0;font-size:14px;margin-left:5px;width:fit-content}.list-item.green.sc-ir-events-log{color:#629a4c;font-weight:600}.list-item.red.sc-ir-events-log{color:#ff4961;font-weight:600}.dates-row.sc-ir-events-log{display:flex;align-items:center;gap:0.875rem}`;

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
        return (h("div", { key: 'b5f9ea17f6bbe243c2227123cb45a7c944f265d1', class: "" }, isRequestPending('/Get_Exposed_Booking_Events') ? (h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, h("ir-spinner", null))) : (h(Fragment, null, h("table", { class: " dialog-container-height" }, h("thead", { class: "sr-only" }, h("tr", null, h("th", null, "date"), h("th", null, "user"), h("th", null, "status"))), h("tbody", null, this.bookingEvents?.map(e => (h("tr", { key: e.id, class: "pb-1" }, h("td", { class: "event-row dates-row" }, h("span", null, e.date), h("span", null, String(e.hour).padStart(2, '0'), ":", String(e.minute).padStart(2, '0'), ":", String(e.second).padStart(2, '0'))), h("td", { class: "pl-3 event-row " }, e.type), h("td", { class: "pl-1 event-row " }, e.user))))))))));
    }
};
IrEventsLog.style = irEventsLogCss();

const irExtraServiceCss = () => `.sc-ir-extra-service-h{display:block}.es-row.sc-ir-extra-service{display:flex;align-items:flex-start;gap:0.75rem}.es-content.sc-ir-extra-service{flex:1;min-width:0}.es-description.sc-ir-extra-service{margin:0;font-size:var(--wa-font-size-m);line-height:1.5;color:var(--wa-color-text-quiet, #27272a);word-break:break-word;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.es-meta.sc-ir-extra-service{display:flex;flex-wrap:wrap;align-items:center;gap:var(--wa-space-2xs, 4px);margin-top:5px;font-size:var(--wa-font-size-s)}.es-meta-date.sc-ir-extra-service{font-weight:700;white-space:nowrap}.es-aside.sc-ir-extra-service{display:flex;align-items:flex-start;gap:0.25rem;flex-shrink:0}.es-pricing.sc-ir-extra-service{text-align:right}.es-price.sc-ir-extra-service{margin:0;font-weight:700;white-space:nowrap;line-height:1.4;color:var(--wa-color-text-quiet, #18181b)}.es-vat.sc-ir-extra-service{margin:2px 0 0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet, #71717a);white-space:nowrap}.es-action-trigger.sc-ir-extra-service::part(base),.es-action-trigger.sc-ir-extra-service [part~="base"]{height:auto;width:var(--wa-space-s)}.es-action-trigger-icon.sc-ir-extra-service{font-size:1rem}`;

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
        return category ? getEntryValue({ entry: category, language: this.language }) : null;
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
        return (h(Host, { key: '474eba84158fb0c7703ecf44df81048ffcec418a' }, h("div", { key: '5a18400e031a597ab65bf4053b5c74a9c1f9e9a2', class: "es-row" }, h("div", { key: '36e15d15b545a111a5e89b325be849ee1216e0d6', class: "es-content" }, h("p", { key: '7ae5627caa2e9a915c26118e6f2529f28ff6a0f9', class: "es-description" }, this.description, this.service.category.code === 'DUZ' && (h("span", { key: 'ca1df21a76bac5cd62e3b63e17cdf462f4b31b63' }, ": ", this.formatDayUseTime(this.service.from_time), " \u2013 ", this.formatDayUseTime(this.service.to_time)))), hasMeta && (h("div", { key: 'e78f5d02763e89ee274a93ce2751cfce05beca0b', class: "es-meta" }, this.service.start_date &&
            (this.service.end_date && this.service?.category?.code !== 'DUZ' ? (h("ir-date-view", { from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (h("span", { class: "es-meta-date" }, hooks(new Date(this.service.start_date)).format('MMM DD, YYYY'), " "))), unitName && h("ir-unit-tag", { key: '1ce7249a298dabfb425b750225058aa59f7646ce', unit: unitName }), statusTag))), h("div", { key: '65087a1f7943a2c95a6f980bfabb7c98bb7ff895', class: "es-aside" }, !!this.service.price && this.service.price > 0 && (h("div", { key: '0e7b4f97d69888e460d82fab7f4e8e9ed59af3f6', class: "es-pricing" }, h("p", { key: '688d2475345cad2e6587354076d55953cb2fef2f', class: "es-price" }, formatAmount(this.currencySymbol, this.service.price)), !!this.service.charges?.vat_percent && h("p", { key: '187c84935ec5d2df6e37d1d8bc5d15851d4af09d', class: "es-vat" }, "incl. ", this.service.charges.vat_percent, "% VAT"))), h("wa-dropdown", { key: '6d5e648007ea46e437268f3cfdb8bcd355ac99dd', "onwa-show": e => {
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
            } }, h("wa-button", { key: 'cf8993fa40f80fe7635c21193f87840a48922fd5', class: "es-action-trigger", slot: "trigger", size: "s", appearance: "plain", id: `extra-service-actions-${this.service.system_id}`, variant: "neutral", "aria-label": "Service actions" }, h("wa-icon", { key: 'b7a8fbcd036dffef6d6b49f59b97806a5f20bb0c', class: "es-action-trigger-icon", name: "ellipsis-vertical" })), h("wa-dropdown-item", { key: '0925f18913256d90079cee53af9b77cf46277741', value: "edit" }, "Edit"), agentMode && h("wa-dropdown-item", { key: '60ca114a8c5c350bcec8313c6a1998e1e891e2d4', value: "toggle" }, "Re-assign to ", this.service.agent ? 'guest' : 'agent', " folio"), h("wa-dropdown-item", { key: '4d8828a2e122a0a3531d7843a89f7b2d5b1ce0c9', value: "delete", variant: "danger" }, "Delete")))), h("ir-assignment-toggle-dialog", { key: 'a3ad77bf1d92334216a67a6d73cd17d0e0b90f7d', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, message: `Switch "${this.service.description}" to ${this.service.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent')}?`, onConfirmToggle: () => this.toggleServiceAgent() }, h("span", { key: '8d8a7f97e0150b06faa5bd010e472fb0649214fc', slot: "message" }, "Re-assign ", this.description, " ", h("br", { key: '1e54f247843e6f008672bd942920eee75371cf4a' }), " from ", this.service.agent ? 'Agent' : 'Guest', " folio to ", h("b", { key: '5790d8c2484663f52c5c04308f080c06c343869a' }, this.service.agent ? 'Guest' : 'Agent', " folio"), ".")), h("ir-dialog", { key: '2104e0bcf9f634ef341c8b72d3576898ce92d581', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: "Alert", ref: el => (this.irModalRef = el), lightDismiss: false }, `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales.entries.Lcz_ThisService} ${locales.entries.Lcz_FromThisBooking}`, h("div", { key: '2de8fec35ea28c268ddffeed33ee8ffcef6d6d29', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '974b40740196cfa31e577b4ce3c7ab5756361f21', appearance: "filled", variant: "neutral", size: "m", "data-dialog": "close" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '12a098026b51bab0127d929c5bcea622b8a1a05f', onClickHandler: () => this.deleteService(), loading: isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "m" }, locales.entries.Lcz_Delete)))));
    }
};
IrExtraService.style = irExtraServiceCss();

const irExtraServiceConfigCss = () => `.sc-ir-extra-service-config-h{display:block;--ir-input-border-color:#cacfe7}.sc-ir-extra-service-config-h .input-group-text.sc-ir-extra-service-config{border-color:var(--ir-input-border-color)}.currency-ph.sc-ir-extra-service-config{padding:0;margin:0;color:#3b4781;display:flex;align-items:center;justify-content:center;padding:0 0 0 0.25rem;border-top:1px solid var(--ir-input-border-color);border-bottom:1px solid var(--ir-input-border-color);border-left:1px solid transparent;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.service-description-input.sc-ir-extra-service-config{height:70px !important}.service-description.sc-ir-extra-service-config .input-group-prepend.sc-ir-extra-service-config{background-color:#f4f5fa;border:1px solid var(--ir-input-border-color);border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem}.service-date-container.sc-ir-extra-service-config{padding:0;margin:0;display:flex;align-items:center;position:relative;width:100%;justify-content:center}.service-date-container.sc-ir-extra-service-config .btn-container.sc-ir-extra-service-config{position:absolute;right:5px;margin:0;display:flex;align-items:center;justify-content:center;padding:0}.service-description.sc-ir-extra-service-config .input-group-text.sc-ir-extra-service-config{height:fit-content;border:0;padding-top:0.75rem !important}.price-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config,.cost-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-left:1px solid #1e9ff2}.currency-ph[data-state='error'].sc-ir-extra-service-config{border-color:var(--red, #ff4961)}.price-input.sc-ir-extra-service-config:focus{border-right-width:1px !important}.is-invalid.sc-ir-extra-service-config{background-image:none !important}.price-input.sc-ir-extra-service-config,.cost-input.sc-ir-extra-service-config{border-left:0}.row-group.sc-ir-extra-service-config{display:flex;flex-direction:column;gap:0.5rem}.extra-service-config__container.sc-ir-extra-service-config{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.row-group.sc-ir-extra-service-config{flex-direction:row;align-items:center;gap:0}.cost-label.sc-ir-extra-service-config{border-top-left-radius:0;border-bottom-left-radius:0;border-left:0}.until-prepend.sc-ir-extra-service-config,.cost-input-placeholder.sc-ir-extra-service-config{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.date-from.sc-ir-extra-service-config,.price-input.sc-ir-extra-service-config{border-right-width:0 !important;border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}}.date-focused.sc-ir-extra-service-config{border-color:#1e9ff2}`;

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
    defaultPrId = null;
    closeModal;
    closeDialog() {
        this.closeModal.emit();
    }
    render() {
        return (h("ir-drawer", { key: '0dc938bf3c43d3b5f43e75cc8bf646c4e2e86398', style: {
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
            }, label: locales.entries.Lcz_ExtraServices }, this.open && (h("ir-extra-service-config-form", { key: 'b557f3526e235c42c28735721f836bbbacdddef8', language: this.language ?? 'en', svcCategories: this.svcCategories, onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDialog();
            }, booking: this.booking, agent: this.agent, service: this.service, defaultPrId: this.defaultPrId })), h("div", { key: 'd692adf0ccc5636025daf21a206de8d518309d82', slot: "footer", class: 'ir__drawer-footer' }, h("ir-custom-button", { key: '509a4cfe1ea8042ad6c8b3ed1f865db8b0ce79da', class: `flex-fill`, size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'b4ab2ababf25b3a7c7423c7a4182c7b4e0f5b2a6', type: "submit", loading: isRequestPending('/Do_Booking_Extra_Service'), form: "extra-service-config-form", size: "m", class: `flex-fill`, variant: "brand" }, locales.entries.Lcz_Save))));
    }
};
IrExtraServiceConfig.style = irExtraServiceConfigCss();

const irExtraServiceConfigFormCss = () => `.sc-ir-extra-service-config-form-h{display:block;--ir-input-border-color:#cacfe7}.sc-ir-extra-service-config-form-h .input-group-text.sc-ir-extra-service-config-form{border-color:var(--ir-input-border-color)}.currency-ph.sc-ir-extra-service-config-form{padding:0;margin:0;color:#3b4781;display:flex;align-items:center;justify-content:center;padding:0 0 0 0.25rem;border-top:1px solid var(--ir-input-border-color);border-bottom:1px solid var(--ir-input-border-color);border-left:1px solid transparent;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.service-description-input.sc-ir-extra-service-config-form{height:70px !important}.service-description.sc-ir-extra-service-config-form .input-group-prepend.sc-ir-extra-service-config-form{background-color:#f4f5fa;border:1px solid var(--ir-input-border-color);border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem}.service-date-container.sc-ir-extra-service-config-form{padding:0;margin:0;display:flex;align-items:center;position:relative;width:100%;justify-content:center}.service-date-container.sc-ir-extra-service-config-form .btn-container.sc-ir-extra-service-config-form{position:absolute;right:5px;margin:0;display:flex;align-items:center;justify-content:center;padding:0}.service-description.sc-ir-extra-service-config-form .input-group-text.sc-ir-extra-service-config-form{height:fit-content;border:0;padding-top:0.75rem !important}.price-input-group.sc-ir-extra-service-config-form:focus-within .currency-ph.sc-ir-extra-service-config-form,.cost-input-group.sc-ir-extra-service-config-form:focus-within .currency-ph.sc-ir-extra-service-config-form{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-left:1px solid #1e9ff2}.currency-ph[data-state='error'].sc-ir-extra-service-config-form{border-color:var(--red, #ff4961)}.price-input.sc-ir-extra-service-config-form:focus{border-right-width:1px !important}.is-invalid.sc-ir-extra-service-config-form{background-image:none !important}.price-input.sc-ir-extra-service-config-form,.cost-input.sc-ir-extra-service-config-form{border-left:0}.row-group.sc-ir-extra-service-config-form{display:flex;flex-direction:column;gap:0.5rem}.extra-service-config__container.sc-ir-extra-service-config-form{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.row-group.sc-ir-extra-service-config-form{flex-direction:row;align-items:center;gap:0}.cost-label.sc-ir-extra-service-config-form{border-top-left-radius:0;border-bottom-left-radius:0;border-left:0}.until-prepend.sc-ir-extra-service-config-form,.cost-input-placeholder.sc-ir-extra-service-config-form{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.date-from.sc-ir-extra-service-config-form,.price-input.sc-ir-extra-service-config-form{border-right-width:0 !important;border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}}.date-focused.sc-ir-extra-service-config-form{border-color:#1e9ff2}`;

/** Group code for accommodation-linked extra services (Breakfast, Minibar, ...) — see `KNOWN_GROUP_LABELS` in svc-category.utils. */
const ACCOMMODATION_GROUP_CODE = 'ACM';
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
    /** Pre-selected unit (physical room) id to link a new service to, e.g. when added from ir-room's quick-add action. */
    defaultPrId = null;
    s_service;
    error;
    fromDateClicked;
    toDateClicked;
    autoValidate;
    assignee = 'guest';
    /** Group (e.g. Accommodation/ACM) the currently selected top-level category belongs to, when it has sub-categories to pick from. */
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
    /** Which group (e.g. `ACM`) a leaf category code belongs to, if any — used to re-derive the group selection when editing an existing service. */
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
        // Synthesized parent-group placeholders (e.g. Accommodation/ACM) have no `tax_categories` row of their
        // own — their rate mirrors the property's accommodation VAT, same as it does on the Extra Services page.
        if (!realCodes.has(cat.CODE_NAME)) {
            return { ...cat, pct: accVat.mode === taxationModes.NOT_APPLICABLE ? 0 : (accVat.value ?? 0), isNotApplicable: accVat.mode === taxationModes.NOT_APPLICABLE };
        }
        return { ...cat, pct: taxPctByCode[cat.CODE_NAME] ?? 0, isNotApplicable: notApplicableCodes.has(cat.CODE_NAME) };
    }
    sortByLabel(entries) {
        const langKey = `CODE_VALUE_${(this.language ?? 'en').toUpperCase()}`;
        return entries.sort((a, b) => (a[langKey] ?? a.CODE_VALUE_EN ?? '').localeCompare(b[langKey] ?? b.CODE_VALUE_EN ?? ''));
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
        return categories.filter(cat => cat.CODE_NAME !== 'DUZ').map(cat => this.toCategoryOption(cat));
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
                ? ExtraServiceSchema.extend({ room_identifier: libExports.z.string({ required_error: 'Unit is required' }).nonempty('Unit is required') })
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
            if (error instanceof libExports.ZodError) {
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
        return (h("form", { key: '0a87dc49cb38fe34520f23fafc71041880b0bc8d', id: "extra-service-config-form", onSubmit: async (e) => {
                e.preventDefault();
                this.saveAmenity();
            }, class: 'extra-service-config__container' }, this.categories.length > 0 && (h("ir-validator", { key: '6e98324884ee7d12ab3d7384c06392235fc44927', value: this.s_service?.category, schema: ExtraServiceSchema.shape.category }, h("wa-select", { key: 'f5e888ef78a924e6a78cccca378f2960016dd699', size: "s", label: "Service category", value: this.selectedGroupCode ?? this.s_service?.category?.code ?? '', defaultValue: this.selectedGroupCode ?? this.s_service?.category?.code ?? '', onchange: (e) => {
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
            const vatSuffix = category.isNotApplicable ? 'VAT - Not applicable' : `VAT ${category.pct}%`;
            const label = (category[langKey] ?? category.CODE_VALUE_EN ?? '') + ` (${vatSuffix})`;
            if (this.booking.is_room_less && category.CODE_NAME === 'ACM') {
                return null;
            }
            return (h("wa-option", { value: category.CODE_NAME, label: label }, label));
        })))), this.selectedGroupCode && this.subCategories.length > 0 && (h("ir-validator", { key: '870c952c63aa94bd89712929721d54fe15cf38c6', value: this.s_service?.category?.code ?? null, schema: libExports.z.string({ required_error: 'Subcategory is required' }).nonempty('Subcategory is required') }, h("wa-select", { key: '57d44f427a9374dbe0d6e15e6a9654e3fcad1f5e', size: "s", label: "Subcategory", required: true, value: this.s_service?.category?.code ?? '', defaultValue: this.s_service?.category?.code ?? '', onchange: (e) => {
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
            return (h("wa-option", { value: category.CODE_NAME, label: label }, label));
        })))), h("ir-validator", { key: '1ef0b3ebda04e8660616332ec37cbc85317be03c', id: "amenity description-validator", schema: ExtraServiceSchema.shape.description }, h("wa-textarea", { key: '17fd974d447440ce84ff9ee80b2dcbef6660e8ba', size: "s", defaultValue: this.s_service?.description, value: this.s_service?.description, onchange: e => this.updateService({ description: e.target.value }), id: "amenity-description", "aria-label": "Amenity description", maxlength: 250, label: locales.entries.Lcz_Description })), this.showUnitLink && (h("ir-validator", { key: '409f8651082d57ac97e9ed83fea0ab5da105dfa3', value: this.s_service?.room_identifier ?? null, schema: this.isUnitRequired ? libExports.z.string({ required_error: 'Unit is required' }).nonempty('Unit is required') : ExtraServiceSchema.shape.room_identifier }, h("wa-select", { key: '4826be14ce09119cf9cc3ee061758c7c50344fd2', size: "s", label: this.isUnitRequired ? 'Link to unit' : 'Link to unit (optional)', required: this.isUnitRequired, value: this.s_service?.room_identifier ?? '', defaultValue: this.s_service?.room_identifier ?? '', onchange: (e) => {
                const value = e.target.value;
                this.updateService({ room_identifier: value || null });
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, !this.isUnitRequired && h("wa-option", { key: 'cfcabe90df943db0fec40b86d1174c024165546b', value: "" }, "Not linked to a specific unit"), this.unitOptions.map(option => (h("wa-option", { value: option.identifier, label: option.label }, option.label)))))), h("ir-validator", { key: '312846e7e55e0eaef1f9d4fc6a6a758459c274d7', value: this.s_service?.start_date ?? null, schema: ExtraServiceSchema.shape.start_date }, h("ir-date-select", { key: 'f2256fa514b80add35df7caebe06ef7eb2a0bb9b', placeholder: "Select date", withClear: true, label: "Dates on", emitEmptyDate: true, date: this.s_service?.start_date, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                this.updateService({ start_date: e.detail.start?.format('YYYY-MM-DD') });
                this.syncBabyCotPriceWithDateRange();
            } })), h("ir-date-select", { key: '6760592bf9d367746ea7f2f0e716e00f74dd84d1', withClear: true, emitEmptyDate: true, placeholder: "Select date", date: this.s_service?.end_date, minDate: this.s_service?.start_date ?? this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: e.detail.start?.format('YYYY-MM-DD') });
                this.syncBabyCotPriceWithDateRange();
            }, label: "Till and including" }), h("ir-validator", { key: '98b2c0f9434c171c33898450685d9c22a1ec5e71', value: this.s_service?.price ?? null, schema: ExtraServiceSchema.shape.price }, h("ir-input", { key: '5600dfe4d6c1d1668634afcc81a7b9c5e38e86fd', "onText-change": e => {
                this.priceManuallyEdited = true;
                this.updateService({ price: Number(e.detail) });
            }, defaultValue: this.s_service?.price?.toString(), value: this.s_service?.price?.toString(), mask: 'price', type: "text", label: `${locales.entries.Lcz_Price} (including tax)` }, h("span", { key: 'be17bfb37c7a0399613d56072c6433217861efaa', slot: "start" }, this.booking.currency.symbol))), isAgentMode(this.agent) && (h("ir-service-assignee-select", { key: '44d83fbc7ddccc56f9828b7523d9372878f5b7e3', assigneeType: this.assignee, onAssignmentChange: e => this.assignmentChanged(e), agent: this.booking.agent }))));
    }
    static get watchers() { return {
        "service": [{
                "handleServiceChange": 0
            }]
    }; }
};
IrExtraServiceConfigForm.style = irExtraServiceConfigFormCss();

const irExtraServicesCss = () => `.sc-ir-extra-services-h{display:block}.extra-service__card.sc-ir-extra-services{background-color:var(--wa-color-surface-default)}.service-group.sc-ir-extra-services{padding:0.125rem 0 0.25rem;border-left:3px solid transparent;padding-left:0.625rem}.extra-services__header-actions.sc-ir-extra-services{display:flex;align-items:center;gap:0.5rem}.service-group--guest.sc-ir-extra-services{border-left-color:var(--wa-color-neutral-300, #d4d4d8)}.service-group--agent.sc-ir-extra-services{border-left-color:var(--wa-color-brand-fill-loud, #3b82f6)}.service-group__label.sc-ir-extra-services{display:flex;align-items:center;gap:0.4rem;margin:0 0 0.75rem;font-size:0.75rem;font-weight:700;letter-spacing:0.06em;color:var(--wa-color-neutral-500, #71717a)}.service-group__label.--agent.sc-ir-extra-services{color:var(--wa-color-primary-600, #2563eb)}.service-group__dot.sc-ir-extra-services{display:inline-block;width:6px;height:6px;border-radius:50%;background-color:var(--wa-color-neutral-400, #a1a1aa);flex-shrink:0}.service-group--agent.sc-ir-extra-services .service-group__dot.sc-ir-extra-services{background-color:var(--wa-color-primary-500, #3b82f6)}.service-group__empty.sc-ir-extra-services{margin:0;padding:0.375rem 0;font-size:0.85rem;color:var(--wa-color-neutral-400, #a1a1aa);font-style:italic}`;

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
        return this.booking.is_room_less ? (h("div", { slot: "header-actions", class: 'extra-services__header-actions' }, h("ir-custom-button", { id: "room-add", size: "s", appearance: "outlined", variant: "neutral" }, h("wa-icon", { name: "plus", slot: "start" }), "Add stay"), h("ir-custom-button", { id: "extra_service_btn", size: "s", appearance: "outlined", variant: "neutral" }, h("wa-icon", { name: "plus", slot: "start" }), "Add service"))) : (h(Fragment, null, h("wa-tooltip", { for: "extra_service_btn" }, "Add extra service"), h("ir-custom-button", { slot: "header-actions", id: "extra_service_btn", size: "s", appearance: "plain", variant: "neutral" }, h("wa-icon", { name: "plus", style: { fontSize: '1rem' } }))));
    }
    render() {
        const services = this.booking.extra_services ?? [];
        if (isAgentMode(this.agent)) {
            const guestServices = services.filter(s => s.agent === null || s.agent === undefined);
            const agentServices = services.filter(s => s.agent !== null && s.agent !== undefined);
            const agentName = this.booking.agent?.name ?? 'Agent';
            return (h(Host, null, h("wa-card", { appearance: "plain", class: "extra-service__card" }, h("p", { slot: "header", class: 'font-size-large p-0 m-0' }, locales.entries.Lcz_ExtraServices), this.extraServicesHeaderActions(), services.length === 0 ? (h("ir-empty-state", { showIcon: false })) : (h(Fragment, null, h("p", { class: "service-group__label --agent" }, agentName, h("span", null, "Folio")), h("div", { class: "service-group service-group--agent" }, h("div", { class: "service-group__body" }, agentServices.length === 0 ? h("p", { class: "service-group__empty" }, "No agent services added") : this.renderServiceList(agentServices))), h("wa-divider", null), h("p", { class: "service-group__label" }, "Guest", h("span", null, "Folio")), h("div", { class: "service-group service-group--guest" }, h("div", { class: "service-group__body" }, guestServices.length === 0 ? h("p", { class: "service-group__empty" }, "No guest services added") : this.renderServiceList(guestServices))))))));
        }
        return (h(Host, null, h("wa-card", { appearance: "plain", class: "extra-service__card" }, h("p", { slot: "header", class: 'font-size-large p-0 m-0 ' }, locales.entries.Lcz_ExtraServices), this.extraServicesHeaderActions(), services.length === 0 && h("ir-empty-state", { showIcon: false }), this.renderServiceList(services))));
    }
};
IrExtraServices.style = irExtraServicesCss();

const irGuestBillingCss = () => `.sc-ir-guest-billing-h {   --ir-cell-padding: 0.5rem 1rem; }      .table--container.sc-ir-guest-billing {   overflow-x: auto; }  .table--container.sc-ir-guest-billing, .data-table.sc-ir-guest-billing {   height: 100%; }      .ir-table-row.sc-ir-guest-billing td.sc-ir-guest-billing {   padding: var(--ir-cell-padding) !important;   text-align: start;   z-index: 2;   background-color: var(--wa-color-surface-default);   white-space: nowrap;   color: var(--wa-color-text-normal);   box-sizing: border-box;    transition-duration: var(--wa-transition-fast); }  .table.sc-ir-guest-billing td.sc-ir-guest-billing {   border-top: 0;   border-bottom: 1px solid var(--wa-color-neutral-border-quiet, #abaeb9);    transition:     color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out; }  .table.sc-ir-guest-billing tbody.sc-ir-guest-billing tr.sc-ir-guest-billing:last-child > td.sc-ir-guest-billing {   border-bottom: 0 !important; }  .cell--align-start.sc-ir-guest-billing {   text-align: start !important; }  .cell--align-center.sc-ir-guest-billing {   text-align: center !important; }  .cell--align-end.sc-ir-guest-billing {   text-align: end !important; }      .table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sc-ir-guest-billing {   border: none !important;   background: color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);   color: var(--wa-color-neutral-on-quiet);   padding: 0.5rem 1rem !important;   text-align: start; }  .data-table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sc-ir-guest-billing {   box-sizing: border-box;   background: var(--wa-color-surface-default) !important;   padding-top: 0.5rem !important;   padding-bottom: 0.5rem !important;    border-bottom: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;    color: var(--wa-color-text-normal); }   .empty-row.sc-ir-guest-billing {   height: 50vh !important;   text-align: center;   color: var(--wa-color-gray-60); }    .sortable.sc-ir-guest-billing, .ir-table-row.sc-ir-guest-billing {   transition:     color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out; }  .sortable.sc-ir-guest-billing {   text-transform: capitalize;   cursor: pointer; }  .table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sortable.sc-ir-guest-billing {   transition-property: background, border, box-shadow, color;    transition-duration: var(--wa-transition-fast);   transition-timing-function: var(--wa-transition-easing); }  .table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sortable.sc-ir-guest-billing:hover {   color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));    background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important; }  .table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sortable.sc-ir-guest-billing:active {   color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));    background-color: color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important; }  .sortable.sc-ir-guest-billing:active {   color: #212529;   background-color: #e2e8f0;   border-color: #d3d9df; }  .sortable.sc-ir-guest-billing svg.sc-ir-guest-billing {   color: var(--wa-color-brand-fill-loud); }      .ir-table-row.sc-ir-guest-billing:hover td.sc-ir-guest-billing {   background: var(--wa-color-neutral-fill-quiet, #f1f2f3) !important; }  .--clickable.ir-table-row.sc-ir-guest-billing:hover td.sc-ir-guest-billing {   background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important; }  .--clickable.ir-table-row.sc-ir-guest-billing:active td.sc-ir-guest-billing {   background-color: color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important; }      .selected.sc-ir-guest-billing td.sc-ir-guest-billing {   background: var(--wa-color-brand-fill-quiet) !important;   border-color: var(--wa-color-neutral-border-quiet) !important;   color: var(--gray-dark) !important;    transition:     color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out; }  .selected.ir-table-row.sc-ir-guest-billing:hover td.sc-ir-guest-billing {   background-color: color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important; }  .selected.ir-table-row.sc-ir-guest-billing:active td.sc-ir-guest-billing {   background-color: color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important; }      .data-table.sc-ir-guest-billing .empty-row.sc-ir-guest-billing {   height: 50vh !important;   text-align: center;   color: var(--wa-color-gray-60); }      .data-table--pagination.sc-ir-guest-billing {   padding: 0.5rem 1rem;   background: var(--wa-color-surface-default);   border-top: 1px solid var(--wa-color-neutral-90); }      .sticky-column.sc-ir-guest-billing {   position: sticky !important;   right: 0;   background-color: white; }    .sc-ir-guest-billing-h {   display: flex;   flex-direction: column;   height: 100%; } .billing__container.sc-ir-guest-billing {   display: flex;   flex-direction: column;   height: 100%;   gap: var(--wa-space-l);   padding: 0 var(--wa-space-l); } .billing__date-cell.sc-ir-guest-billing {   display: flex;   align-items: baseline;   gap: 0.5rem; } .billing__date-time.sc-ir-guest-billing {   color: var(--wa-color-text-quiet);   margin: 0;   padding: 0;   font-size: var(--wa-font-size-s); } .billing__section-title-row.sc-ir-guest-billing {   display: flex;   align-items: center;   justify-content: space-between;   margin-bottom: 1rem; } .billing__section-title.sc-ir-guest-billing {   margin: 0;   padding: 0;   font-family: var(--wa-font-family-heading);   font-weight: var(--wa-font-weight-heading);   line-height: var(--wa-line-height-condensed);   text-wrap: balance;   font-size: var(--wa-font-size-m); } .billing__actions-row.sc-ir-guest-billing {   display: flex;   align-items: center;   justify-content: center;         gap: 0.5rem; } .billing__invoice-nbr.sc-ir-guest-billing::part(base), .billing__invoice-nbr.sc-ir-guest-billing [part~="base"] {   padding: 0.05rem 0.5rem;   height: auto; }  .billing__doc-number-col.sc-ir-guest-billing {   --ir-cell-padding: 0.5rem; }  th.billing__doc-number-col.sc-ir-guest-billing {   padding: 0.5rem !important; } .billing__price-col.sc-ir-guest-billing {   text-align: end !important; }   .billing__cards.sc-ir-guest-billing {   display: flex;   flex-direction: column;   gap: var(--wa-space-m);   padding-bottom: var(--wa-space-l) !important; }   .billing__card.sc-ir-guest-billing {   display: block; }   .billing__card-header.sc-ir-guest-billing {   display: flex;   justify-content: space-between;   align-items: center;   margin-bottom: 0.5rem; }  .billing__card-header-info.sc-ir-guest-billing {   display: flex;   flex-direction: column; }  .billing__card-number.sc-ir-guest-billing {   margin: 0;   font-weight: var(--wa-font-weight-heading);   font-family: var(--wa-font-family-heading); }  .billing__card-type.sc-ir-guest-billing {   margin: 0;   font-size: var(--wa-font-size-xs);   color: var(--wa-color-text-secondary); }   .billing__card-download-btn.sc-ir-guest-billing {   display: flex;   align-items: center; }   .billing__card-details.sc-ir-guest-billing {   display: flex;      gap: var(--wa-space-xs);   justify-content: space-between; }  .billing__card-detail.sc-ir-guest-billing {   display: flex;   flex-direction: column; }  .billing__card-detail-label.sc-ir-guest-billing {   margin: 0;   font-size: var(--wa-font-size-xs);   color: var(--wa-color-text-quiet); } .billing__card-detail-label.--amount.sc-ir-guest-billing {   text-align: end !important; } .billing__card-detail-value.sc-ir-guest-billing {   margin: 0;   font-weight: var(--wa-font-weight-regular);   font-size: var(--wa-font-size-s); } .billing__card-void-btn.sc-ir-guest-billing {   flex: 1 1 0%; }   .billing__card-footer.sc-ir-guest-billing {   display: flex; } .table-container.sc-ir-guest-billing {   display: none; } .billing__empty-state.sc-ir-guest-billing {   display: flex;   align-items: center;   justify-content: center;   width: 100%;   height: 30vh; } .billing__card.sc-ir-guest-billing::part(footer), .billing__card.sc-ir-guest-billing [part~="footer"] {   padding-top: 1rem;   padding-bottom: 1rem; } .guest-billing__pdf-viewer.sc-ir-guest-billing {   margin-left: auto;   margin-right: auto; }  @media (min-width: 768px) {   .billing__cards.sc-ir-guest-billing {     display: none;   }   .table-container.sc-ir-guest-billing {     display: block;   } } @media print {   .guest-billing__pdf-viewer.sc-ir-guest-billing {     margin: 0;   }   @page {     margin.sc-ir-guest-billing: 0.sc-ir-guest-billing;   }    body.sc-ir-guest-billing {     margin: 0;   } }`;

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
            const [, fdTypes] = await Promise.all([this.refreshInvoiceAndFolio(), this.bookingService.getSetupEntriesByTableName('_FD_TYPE')]);
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
        if (e.detail.documentType === FdTypes.Receipt) {
            const voidedReceipts = new Set(this.voidedReceipts);
            voidedReceipts.add(e.detail.documentNumber);
            this.voidedReceipts = new Set(voidedReceipts);
            // Voiding a receipt changes booking.financial.payments, which this component doesn't own.
            // Pass the freshly fetched booking so ir-booking-details updates in place instead of
            // taking the resetBookingEvt(null) branch, which shows its full-page loading spinner.
            const freshBooking = await this.bookingService.getExposedBooking({ booking_nbr: this.booking.booking_nbr, language: 'en' });
            this.resetBookingEvt.emit(freshBooking);
        }
    }
    get fdTypeLabels() {
        const map = {};
        for (const entry of this.fdTypes) {
            map[entry.CODE_NAME] = getEntryValue({ entry, language: 'en' });
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
        return (h(Fragment, null, h("div", { class: "billing__container" }, h("section", null, h("div", { class: "billing__section-title-row" }, h("h4", { class: "billing__section-title" }, "Issued documents"), h("ir-custom-button", { variant: "brand", id: this._id, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = 'invoice';
            } }, "Issue invoice")), h("div", { class: "table-container" }, h("table", { class: "table data-table" }, h("thead", null, h("tr", null, h("th", null, "Date"), h("th", { class: "billing__doc-number-col" }, "Doc number"), h("th", null, "Type"), h("th", { class: "billing__price-col" }, "Debit"), h("th", { class: "billing__price-col" }, "Credit"), h("th", { class: 'text-center' }, "Actions"))), h("tbody", null, this.sortedRows.length === 0 && (h("tr", null, h("td", { colSpan: 6, class: "empty-row" }, h("ir-empty-state", null)))), this.sortedRows.map(row => {
            const isInvoice = row.FD_TYPE_CODE === FdTypes.Invoice;
            const isReceipt = row.FD_TYPE_CODE === FdTypes.Receipt;
            return (h("tr", { class: "ir-table-row", key: row.DOC_NUMBER }, h("td", null, row.DOC_DATE ? (h("div", { class: "billing__date-cell" }, h("p", { class: "m-0 p-0" }, hooks(row.DOC_DATE, 'YYYY-MM-DD').format('MMM DD, YYYY')), row.DOC_HOUR != null && row.DOC_MINUTE != null && h("p", { class: "billing__date-time" }, _formatTime(String(row.DOC_HOUR), String(row.DOC_MINUTE))))) : ('—')), h("td", { class: "billing__doc-number-col" }, h("wa-button", { onClick: () => this.printInvoice({ row }), variant: "brand", appearance: "plain", class: "billing__invoice-nbr" }, row.DOC_NUMBER)), h("td", null, (row.FD_TYPE_CODE && this.fdTypeLabels[row.FD_TYPE_CODE === 'RFND' ? FdTypes.CreditReceipt : row.FD_TYPE_CODE]) || row.FD_TYPE_CODE || '—'), h("td", { class: "billing__price-col" }, h("span", { class: "ir-price", style: { fontWeight: '400' } }, this.renderMoney(row.DEBIT))), h("td", { class: "billing__price-col" }, h("span", { class: "ir-price", style: { fontWeight: '400' } }, this.renderMoney(row.CREDIT))), h("td", null, h("div", { class: "billing__actions-row" }, h("wa-dropdown", { "onwa-hide": e => {
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
                } }, h("wa-dropdown-item", { value: "view-print" }, "Open PDF", isRequestPending('/Print_Invoice') && h("wa-spinner", { slot: "details" })), isInvoice && !this.voidedInvoices.has(row.DOC_NUMBER) && (h("wa-dropdown-item", { variant: "danger", value: "void" }, "Void with credit note")), isReceipt && !this.voidedReceipts.has(row.DOC_NUMBER) && (h("wa-dropdown-item", { variant: "danger", value: "void" }, "Void with credit receipt")), h("ir-custom-button", { slot: "trigger", id: `pdf-${row.DOC_ID ?? row.DOC_NUMBER}`, variant: "neutral", appearance: "plain" }, h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1rem' } })))))));
        })))), h("div", { class: "billing__cards" }, this.sortedRows.length === 0 && (h("div", { class: "billing__empty-state" }, h("ir-empty-state", null))), this.sortedRows.map(row => {
            const isInvoice = row.FD_TYPE_CODE === FdTypes.Invoice;
            return (h("wa-card", { key: row.DOC_NUMBER, class: "billing__card" }, h("div", { class: "billing__card-header" }, h("div", { class: "billing__card-header-info" }, h("p", { class: "billing__card-number" }, (row.FD_TYPE_CODE && this.fdTypeLabels[row.FD_TYPE_CODE]) || row.FD_TYPE_CODE || '—', ":", row.DOC_NUMBER)), h("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } }, h("wa-tooltip", { for: `mobile-download-pdf-${row.DOC_ID ?? row.DOC_NUMBER}` }, "Open PDF"), h("ir-custom-button", { onClickHandler: () => this.printInvoice({ row }), loading: isRequestPending('/Print_Invoice'), id: `mobile-download-pdf-${row.DOC_ID ?? row.DOC_NUMBER}`, variant: "neutral", appearance: "plain", class: "billing__card-download-btn" }, h("wa-icon", { name: "file-pdf", style: { fontSize: '1rem' } })))), h("div", { class: "billing__card-details" }, h("div", { class: "billing__card-detail" }, h("p", { class: "billing__card-detail-label" }, "Date"), h("div", { class: "billing__date-cell" }, h("p", { class: "billing__card-detail-value" }, row.DOC_DATE ? hooks(row.DOC_DATE, 'YYYY-MM-DD').format('MMM DD, YYYY') : '—'), row.DOC_HOUR != null && row.DOC_MINUTE != null && h("p", { class: "billing__date-time" }, _formatTime(String(row.DOC_HOUR), String(row.DOC_MINUTE))))), h("div", { class: "billing__card-detail" }, h("p", { class: "billing__card-detail-label --amount" }, "Amount"), h("p", { class: "billing__card-detail-value" }, formatAmount(currencySymbol, row.TOTAL_AMOUNT ?? 0)))), isInvoice && !this.voidedInvoices.has(row.DOC_NUMBER) && (h("div", { slot: "footer", class: "billing__card-footer" }, h("ir-custom-button", { onClickHandler: () => {
                    this.voidDialogRef?.open({ documentType: FdTypes.Invoice, documentNumber: row.DOC_NUMBER });
                }, variant: "danger", appearance: "outlined", class: "billing__card-void-btn" }, "Void with credit note")))));
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
        const drawerLabel = locales?.entries?.Lcz_GuestDetails || 'Guest info';
        return (h("ir-drawer", { key: '9ba1c4291a10b7044f353e9ab87af67100a225de', open: this.open, label: drawerLabel, onDrawerHide: this.handleDrawerHide, style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            } }, this.open && (h("ir-guest-info-form", { key: '19351fa9d96e4fee543d3f65886979d9a00f9886', ticket: this.ticket, language: this.language, email: this.email, booking_nbr: this.booking_nbr, fromId: this._formId })), h("div", { key: '2fc9aac1b4b61e16cba09be09bb68afea8bbac32', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'aa6e3f001ec3296d477e1525dcdb2815e0695462', size: "m", appearance: "filled", variant: "neutral", type: "button", onClickHandler: this.handleCancel }, locales.entries?.Lcz_Cancel || 'Cancel'), h("ir-custom-button", { key: 'a5a3d9d7ca2bd78ce7c8a2b2b098d7b81c49682f', type: "submit", form: this._formId, size: "m", variant: "brand", loading: isRequestPending('/Edit_Exposed_Guest') }, locales.entries?.Lcz_Save || 'Save'))));
    }
};
IrGuestInfoDrawer.style = irGuestInfoDrawerCss();

const nonEmptyString = (message) => libExports.z.string().trim().min(1, message);
const optionalEmailSchema = libExports.z.string().trim().email('Enter a valid email address').or(libExports.z.literal('')).optional().nullable();
const guestInfoFormSchema = libExports.z.object({
    first_name: nonEmptyString('First name is required'),
    last_name: nonEmptyString('Last name is required'),
    email: nonEmptyString('Email is required').email('Enter a valid email address'),
    alternative_email: optionalEmailSchema,
    country_id: libExports.z.number({ required_error: 'Country is required' }).int('Country is required').positive('Country is required'),
    mobile: nonEmptyString('Mobile number is required').min(5, 'Mobile number is too short'),
    country_phone_prefix: nonEmptyString('Country code is required'),
    notes: libExports.z.string().max(2000, 'Private note cannot exceed 2000 characters').optional(),
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
    roomService = new RoomService();
    token = new Token();
    componentWillLoad() {
        if (this.ticket) {
            this.token.setToken(this.ticket);
        }
        if (!!this.token.getToken()) {
            this.init();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
    }
    handleInputChange(params) {
        this.guest = { ...this.guest, ...params };
    }
    async init() {
        try {
            this.isLoading = true;
            const [guest, countries, fetchedLocales] = await Promise.all([
                this.bookingService.fetchGuest(this.email),
                this.bookingService.getCountries(this.language),
                !locales || !locales.entries || Object.keys(locales.entries).length === 0 ? this.roomService.fetchLanguage(this.language) : Promise.resolve(null),
            ]);
            if (fetchedLocales) {
                locales.entries = fetchedLocales.entries;
                locales.direction = fetchedLocales.direction;
            }
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
                title: 'Saved Successfully',
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
            }, class: "guest-form__container" }, h("ir-validator", { schema: guestInfoFormSchema.shape.first_name, value: this.guest?.first_name ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { id: 'firstName', value: this.guest?.first_name, defaultValue: this.guest?.first_name, required: true, "onText-change": e => this.handleInputChange({ first_name: e.detail.trim() }), label: locales.entries?.Lcz_FirstName })), h("ir-validator", { schema: guestInfoFormSchema.shape.last_name, value: this.guest?.last_name ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { value: this.guest?.last_name, required: true, defaultValue: this.guest?.last_name, id: "lastName", "onText-change": e => this.handleInputChange({ last_name: e.detail.trim() }), label: locales.entries?.Lcz_LastName })), h("ir-validator", { schema: guestInfoFormSchema.shape.email, value: this.guest?.email ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { label: locales.entries?.Lcz_Email, id: "email", defaultValue: this.guest?.email, value: this.guest?.email, required: true, mask: "email", "onText-change": e => {
                this.handleInputChange({ email: e.detail });
            } })), h("ir-validator", { schema: guestInfoFormSchema.shape.alternative_email, value: this.guest?.alternative_email ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { label: locales.entries?.Lcz_AlternativeEmail, id: "altEmail", value: this.guest?.alternative_email, mask: "email", "onText-change": e => {
                this.handleInputChange({ alternative_email: e.detail });
            } })), h("ir-validator", { schema: guestInfoFormSchema.shape.country_id, value: this.guest?.country_id ?? undefined, autovalidate: this.autoValidate, valueEvent: "countryChange" }, h("ir-country-picker", { size: "s", variant: "modern", country: this.countries.find(c => c.id === this.guest?.country_id), label: locales.entries?.Lcz_Country, onCountryChange: e => {
                const country = e.detail;
                let params = { country_id: country.id };
                if (!this.guest?.mobile) {
                    params = { ...params, country_phone_prefix: country.phone_prefix };
                }
                this.handleInputChange(params);
            }, countries: this.countries })), h("ir-validator", { schema: libExports.z.object({ mobile: guestInfoFormSchema.shape.mobile, phone_prefix: guestInfoFormSchema.shape.country_phone_prefix }), value: { mobile: this.guest?.mobile ?? '', phone_prefix: this.guest?.country_phone_prefix }, autovalidate: this.autoValidate, valueEvent: "mobile-input-change" }, h("ir-mobile-input", { size: "s", "onMobile-input-change": e => {
                this.handleInputChange({ mobile: e.detail.formattedValue.trim() });
            }, "aria-invalid": 'true', "onMobile-input-country-change": e => this.handleInputChange({ country_phone_prefix: e.detail.phone_prefix }), value: this.guest?.mobile ?? '', required: true, countryCode: this.countries.find(c => c.phone_prefix?.toString() === this.guest?.country_phone_prefix?.toString())?.code, countries: this.countries })), h("ir-validator", { schema: guestInfoFormSchema.shape.notes, value: this.guest?.notes ?? '', autovalidate: this.autoValidate, valueEvent: "wa-change change input", blurEvent: "wa-blur blur" }, h("wa-textarea", { size: "s", onchange: e => this.handleInputChange({ notes: e.target.value }), value: this.guest?.notes ?? '', label: locales.entries?.Lcz_PrivateNote }))));
    }
    static get watchers() { return {
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
        return (h("ir-dialog", { key: '625d83294dece002c5af1bb5b51a5c12774657bb', open: this.open, label: "Half Board 2nd Meal Preference", ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.preventDefault();
                const saved = this.closedBySave;
                this.hbPreferenceClose.emit({ saved });
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closedBySave = false;
                this.selectedValue = null;
            } }, h("wa-radio-group", { key: '2a00343402d457c75490cc4cb92cc0b1a36cfaf6', value: this.selectedValue ?? '', onchange: e => (this.selectedValue = e.target.value) }, h("wa-radio", { key: 'b9e96a73985bf0d055d096462b97436856bba60d', value: HbPreference.Lunch }, "Lunch"), h("wa-radio", { key: '5e7107367e49d832090bbeb3a2ac083763a0ecaa', value: HbPreference.Dinner }, "Dinner")), h("div", { key: '0d01fda51be74949d3258f4d956f1071dcda101a', slot: "footer", class: 'ir-dialog__footer' }, h("ir-custom-button", { key: 'f955b0f559d9de586b5e3dd67b044424dae8dfc1', size: "m", variant: "neutral", appearance: "filled", "data-dialog": "close" }, "Cancel"), h("ir-custom-button", { key: '4ed0aeca2789c069a2ff9756318b3dcad392c6d2', size: "m", variant: "brand", loading: this.isLoading, disabled: !this.selectedValue, onClickHandler: e => this.handleConfirm(e), appearance: "accent" }, "Confirm"))));
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
        return (h(Host, { key: '5f2fd438a0f89cdaffa90eaf887c0c1d0b187b47' }, h("wa-tooltip", { key: 'e3e462c20c8423eb479a6aee42facd617a5f05de', for: `dp-effect-callout-${this.booking?.booking_nbr}` }, "The dynamic pricing effect is calculated at the time the booking is created and remains fixed thereafter, serving as an indicator of the additional profit generated or of the incentive price reduction."), h("wa-callout", { key: '04a2dd56250aec1c9951aea4c6bb88b711fb2c60', id: `dp-effect-callout-${this.booking?.booking_nbr}`, class: `dp-effect-callout --${tone}`, variant: calloutVariant, size: "small" }, h("wa-icon", { key: '22f47d37afb9c8c7f0a8744ed4fe229c68daacfe', class: "dp-effect-icon", slot: "icon", name: "wand-magic-sparkles" }), h("div", { key: 'aab6c1245c89cf2910518ea012650e08bd786a17', class: "booking-dp-effect" }, h("p", { key: '28dba144590a315db6fe062ba7612dcf57ebcc40', class: "booking-dp-effect__label" }, "Dynamic pricing ", isOptimReadOnly() ? 'lost profit' : 'effect'), h("p", { key: 'ab49f43aa0d6f2113f6030eb8194af303ad9c3b2', class: `booking-dp-effect__value --${tone}` }, h("span", { key: '772d8cd44c6aae186c36aa3493f0f5e6ed60f0cd' }, formatAmount(calendar_data.property.currency.symbol, this.displayedValue)), h("wa-icon", { key: '9db6872faaeacb1a1711180cad985d181bcc6655', class: "booking-dp-effect__trend-icon", name: trendIcon }))))));
    }
    static get watchers() { return {
        "booking": [{
                "onBookingChange": 0
            }]
    }; }
};
IrPaymentAnalytics.style = irPaymentAnalyticsCss();

const irPaymentDetailsCss = () => `.sc-ir-payment-details-h{font-family:'Open Sans',     -apple-system,     BlinkMacSystemFont,     'Segoe UI',     Roboto,     'Helvetica Neue',     Arial,     sans-serif !important}.sc-ir-payment-details-h *.sc-ir-payment-details{font-family:'Open Sans',     -apple-system,     BlinkMacSystemFont,     'Segoe UI',     Roboto,     'Helvetica Neue',     Arial,     sans-serif !important}.payment-details__card.sc-ir-payment-details{background-color:var(--wa-color-surface-default)}.sm-margin-right.sc-ir-payment-details{margin-right:5px !important;background:#000}.action_icons.sc-ir-payment-details{width:60px}.w-60.sc-ir-payment-details{width:100px;padding:0 5px}.payments-height.sc-ir-payment-details{height:30px}.payment_date.sc-ir-payment-details{width:100px}.iframeHeight.sc-ir-payment-details{height:max-content;height:22.5rem}.designation.sc-ir-payment-details{width:120px}.total-cost-container.sc-ir-payment-details{background:#7cbebe;color:white;padding:0.5rem;border-radius:5px}`;

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
                title: 'Error',
                description: 'Failed to cancel payment. Please try again.',
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
                } }, `Refund ${formatAmount(currency.symbol, Math.abs(this.booking.financial.cancelation_penality_as_if_today))}`))), this.shouldCancellationButton() && (h("div", { class: "d-flex mt-1" }, h("ir-custom-button", { variant: "brand", appearance: "outlined", onClickHandler: () => {
                    this.handleAddPayment({ type: 'cancellation-penalty', amount: Math.abs(this.booking.financial.cancelation_penality_as_if_today) });
                } }, `Charge cancellation penalty ${formatAmount(currency.symbol, this.booking.financial.cancelation_penality_as_if_today)}`)))),
            isAgentMode(this.agent) && (h("ir-booking-city-ledger", { booking: this.booking, language: this.language, svcCategories: this.svcCategories, folioRows: this.folioRows, isLoading: this.clLoading, error: this.clError })),
            h("ir-payments-folio", { booking: this.booking, payments: (financial.payments || []).filter(p => !p.is_city_ledger), isAddPaymentDisabled: this.isAllServicesAgentOwned, onAddPayment: () => this.handleAddPayment(), onEditPayment: e => this.handleEditPayment(e.detail), onDeletePayment: e => this.handleDeletePayment(e.detail), onIssueReceipt: e => this.handleIssueReceipt(e.detail), onVoidReceipt: e => this.handleVoidReceipt(e.detail) }),
            h("ir-void-document-dialog", { ref: el => (this.voidDialogRef = el), onDocumentVoided: e => this.handleDocumentVoided(e) }),
            h("ir-dialog", { onIrDialogHide: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                }, onIrDialogAfterHide: e => {
                    this.handleCancelModal(e);
                }, ref: el => (this.dialogRef = el), label: "Alert", lightDismiss: this.modalMode !== 'delete' }, h("p", null, this.modalMode === 'delete' ? locales.entries.Lcz_IfDeletedPermantlyLost : locales.entries.Lcz_EnteringAmountGreaterThanDue), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { size: "m", "data-dialog": "close", variant: "neutral", appearance: "filled" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { loading: this.isLoading, size: "m", onClickHandler: e => this.handleConfirmModal(e), variant: this.modalMode === 'delete' ? 'danger' : 'brand' }, this.modalMode === 'delete' ? locales.entries.Lcz_Delete : locales.entries.Lcz_Confirm))),
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
        return (h("ir-drawer", { key: '73e7b98e3b0d3c2d3d2f13829b5ed6a531348698', placement: "start", style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: this.payment?.id !== -1 ? 'Edit Folio Entry' : 'New Folio Entry', open: this.isOpen, onDrawerHide: event => {
                event.stopImmediatePropagation();
                event.stopPropagation();
                this.closeFolio();
            } }, this.isOpen && (h("ir-payment-folio-form", { key: 'be7c92866a6e1fe715cd01ed032863fd4dbf3a3f', booking: this.booking, formId: this._id, onLoadingChanged: e => (this.isLoading = e.detail), onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeFolio();
            }, paymentEntries: this.paymentEntries, bookingNumber: this.bookingNumber, payment: this.payment, mode: this.mode })), h("div", { key: '00c3017e1326f1a18c9d1e291554afd691c1c28f', slot: "footer", class: "w-100 d-flex align-items-center", style: { gap: 'var(--wa-space-xs)' } }, h("ir-custom-button", { key: '856811c709e7421936a5fd7f3fd67fec290264cf', class: "flex-fill", size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral", onClickHandler: () => this.closeFolio() }, "Cancel"), h("ir-custom-button", { key: '65fdef90886aed45cf936b3a89d9d605c2496f1a', form: this._id, loading: this.isLoading === 'save', class: "flex-fill", size: "m", type: "submit", value: "save",
            // appearance={isNewPayment ? 'outlined' : 'accent'}
            appearance: 'accent', variant: "brand" }, "Save"))));
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
const paymentTypeSchema = libExports.z.object({
    code: libExports.z.string().min(3).max(4),
    description: libExports.z.string(),
    operation: libExports.z.union([libExports.z.literal('CR'), libExports.z.literal('DB')]),
});
const paymentMethodSchema = libExports.z.object({
    code: libExports.z.string().min(3).max(4),
    description: libExports.z.string(),
    operation: libExports.z.string().optional().nullable(),
});
const folioBaseSchema = libExports.z.object({
    id: libExports.z.number().nullable().optional(),
    system_id: libExports.z.number().nullable().optional(),
    date: libExports.z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/)
        .refine(dateStr => {
        const date = hooks(dateStr, DATE_FORMAT, true);
        return date.isValid();
    }, { message: `Invalid date` }),
    amount: libExports.z.coerce.number().min(0),
    reference: libExports.z.string().optional().nullable(),
    payment_type: paymentTypeSchema,
    payment_method: paymentMethodSchema.nullable().optional(),
});
const folioValidationSchema = folioBaseSchema.superRefine((data, ctx) => {
    if (requiresPaymentMethodCode(data.payment_type?.code) && !data.payment_method?.code) {
        ctx.addIssue({
            code: libExports.z.ZodIssueCode.custom,
            path: ['payment_method'],
            message: 'Payment method is required for this transaction type.',
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
            if (error instanceof libExports.ZodError) {
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
        return groups.map((p, idx) => (h(Fragment, null, p.map(pt => (h("wa-option", { key: pt.CODE_NAME, value: pt.CODE_NAME, label: pt.CODE_VALUE_EN }, h("div", { class: 'payment-folio__payment-type-option' }, h("span", null, pt.CODE_VALUE_EN), h("wa-badge", { variant: pt.NOTES === 'CR' ? 'success' : 'danger', style: { fontSize: 'var(--wa-font-size-s)' } }, pt.NOTES === 'CR' ? 'credit' : 'debit'))))), idx !== Object.values(this._paymentTypes).length - 1 && h("wa-divider", null))));
    }
    render() {
        // const isNewPayment = this.folioData?.payment_type?.code === '001' && this.folioData.id === -1;
        return (h("form", { key: '9fc7d086322f91fdb7ddc70c3d2ea96088c20eb2', onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                if (submitter?.value === 'save') {
                    this.savePayment();
                }
            }, class: "payment-folio__form", id: this.formId }, h("ir-date-select", { key: '756520375321670bac1b0c394b8ace3e89497782', id: this.controlIds.date, label: "Date", "aria-invalid": this.errors?.date && !this.folioData?.date ? 'true' : 'false', "data-testid": "pickup_date", onDateChanged: evt => {
                this.updateFolioData({ date: evt.detail.start?.format(DATE_FORMAT) });
            }, minDate: hooks().add(-2, 'months').format('YYYY-MM-DD'), emitEmptyDate: true, maxDate: this.today, date: this.folioData?.date }), h("ir-validator", { key: '5d67386752e70790cc4f24e83b9d7625ca6e702f', value: this.folioData?.payment_type?.code, autovalidate: this.autoValidate, schema: paymentTypeSchema.shape.code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide" }, h("wa-select", { key: '624805aa3978f71a4575b1dddeff95f001acf92d', id: this.controlIds.transactionType, size: "s", "onwa-hide": event => this.stopEventPropagation(event), "onwa-show": event => this.stopEventPropagation(event), placeholder: "Select...", label: "Transaction type", defaultValue: this.folioData?.payment_type?.code, value: this.folioData?.payment_type?.code, disabled: this.mode === 'payment-action', onchange: event => {
                this.stopEventPropagation(event);
                this.handleDropdownChange(event.target.value);
            } }, h("wa-option", { key: 'f92b5d19a94e1af141590d5d4a6be648c0fcd6c1', value: "" }, "Select..."), this.renderDropdownItems())), this.requiresPaymentMethod(this.folioData?.payment_type?.code) && (h("ir-validator", { key: 'dfaefa1994c0c8f536597210ef62c692ad3b4822', value: this.folioData?.payment_method?.code ?? '', autovalidate: this.autoValidate, schema: paymentMethodSchema.shape.code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide" }, h("wa-select", { key: '6110e83a629751803270ee2979bb40e31516e29c', id: this.controlIds.paymentMethod, size: "s", label: `${this.folioData.payment_type?.code === '001' ? 'Payment' : 'Refund'} method`, "onwa-show": event => this.stopEventPropagation(event), "onwa-hide": event => this.stopEventPropagation(event), defaultValue: this.folioData?.payment_method?.code, value: this.folioData?.payment_method?.code ?? '', onchange: event => {
                this.stopEventPropagation(event);
                this.handlePaymentMethodDropdownChange(event.target.value);
            } }, h("wa-option", { key: 'aaaae80748ff5a379253a5b968c85b0c82cf9506', value: "" }, "Select..."), this.paymentEntries?.methods?.map(pt => {
            return (h("wa-option", { key: pt.CODE_NAME, label: pt.CODE_VALUE_EN, value: pt.CODE_NAME }, pt.CODE_VALUE_EN));
        })))), h("ir-validator", { key: '1c6ff9c84242b82511b91fb5a1e4390671e8a0b3', value: this.folioData?.amount?.toString() ?? undefined, autovalidate: this.autoValidate, schema: folioBaseSchema.shape.amount, valueEvent: "text-change input input-change", blurEvent: "input-blur" }, h("ir-input", { key: '7c9c0e06a2277143e8bcb7fed30f18c252376247', id: this.controlIds.amount, "aria-invalid": String(!!this.errors?.amount), value: this.folioData?.amount?.toString() ?? '', label: "Amount", mask: "price", min: 0, "onText-change": e => this.updateFolioData({ amount: !e.detail ? undefined : Number(e.detail) }) }, h("span", { key: '01166736d394c4ccc9f95bd1cd79af80bd4a99ec', slot: "start" }, calendar_data.currency.symbol))), h("ir-validator", { key: '9956dea5370eb223a92b1fbd01ff0edcbd65589a', value: this.folioData?.reference ?? '', autovalidate: this.autoValidate, schema: folioBaseSchema.shape.reference, valueEvent: "text-change input input-change", blurEvent: "input-blur" }, h("ir-input", { key: 'f2a9be3bddfae7a8ea1c5a9eff472b3703fa1bb2', id: this.controlIds.reference, value: this.folioData?.reference ?? '', label: "Reference", maxlength: 50, "onText-change": e => this.updateFolioData({ reference: e.detail ?? '' }) }))));
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

const irPaymentItemCss = () => `.payment-item__payment-item.sc-ir-payment-item{display:flex;flex-direction:column;padding:var(--wa-space-s) var(--wa-space-l);border-bottom:1px solid var(--wa-color-neutral-100, #f4f4f5)}.payment-item__payment-item.sc-ir-payment-item:last-of-type{border-bottom:0}.payment-item__payment-item.sc-ir-payment-item p.sc-ir-payment-item{padding:0;margin:0;box-sizing:border-box}.payment-item__payment-body.sc-ir-payment-item{display:flex;flex-direction:column}.payment-item__payment-fields.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item{display:none}.payment-item__payment-toolbar.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:none}.payment-item__action-button.sc-ir-payment-item{cursor:pointer}.payment-item__payment-amount.sc-ir-payment-item{font-weight:700;white-space:nowrap}.payment-item__payment-amount.is-credit.sc-ir-payment-item{color:var(--wa-color-success-50)}.payment-item__payment-amount.is-debit.sc-ir-payment-item{color:var(--wa-color-danger-50)}.payment-item__payment-reference.sc-ir-payment-item{font-size:12px}.payment-item__action-trigger.sc-ir-payment-item::part(base),.payment-item__action-trigger.sc-ir-payment-item [part~="base"]{height:auto;width:var(--wa-space-s)}.payment-item__action-trigger-icon.sc-ir-payment-item{font-size:1rem}@media (min-width: 640px){.payment-item__payment-item.sc-ir-payment-item{flex-direction:row;align-items:center;gap:1rem}.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-actions.sc-ir-payment-item{display:inline-flex}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:inline-flex}.payment-item__payment-fields.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item,.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-actions.sc-ir-payment-item{display:none}.payment-item__payment-description.sc-ir-payment-item{padding:0 0.5rem !important}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item{display:inline-flex;align-items:center}.payment-item__payment-body.sc-ir-payment-item{flex:1 1 0%;justify-content:flex-start}.payment-item__payment-fields.sc-ir-payment-item{justify-content:flex-start;gap:0.5rem}.payment-item__payment-toolbar.sc-ir-payment-item{gap:0.5rem;align-items:center}}`;

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
        return (h("div", { key: '22fa84e49b8336d1129b0429096896ac6da13dc3', class: "payment-item__payment-item" }, h("div", { key: 'c1ce77ed676658e0e70428c386871b622b8d8c26', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '8d36f76616df6db179b5de9ac53683cd9266bc15', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'b8edda2ce97434be98b412e93775a1da3a0366dd', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'd27c9ab2cdfb5674f4f5c8cf5e0fe05c380daa76', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'bcb66d66e1cf6a4303be881435c73a4a0da1ae69', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'c4f8b2f29028ac6c9638efa72bd96996f842cefd', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '57533d960d98197398f19b2b39c492b7a88e5670', class: "payment-item__payment-toolbar" }, h("p", { key: 'fb77c2844b95c9fd511c99bc3749fd116faeb079', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '78a7f1ce5a8302416e318776d78e599f4c34dd6f', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '9caf810be9543de6e9d7210a98dbf9f371bcba5b', class: "payment-item__payment-actions" }, h("div", { key: 'e390bc423b9af1a3f31e2ca48b3e675eab0b1221', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'e6659a55b9db7fe0147b1490f3bd7352295efe2f', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '6505c90777d57e16234c461a4e1b52799a6a528f', name: "user", id: this._id }), h("wa-dropdown", { key: 'a0f4bc80be18240fb365c26f8cc734c98f82b35e', "onwa-hide": e => {
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
            } }, h("wa-button", { key: '6339befc2e89d37c5290036dcc33a7c79013a794', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '637b0d88c14ad39aac99048df224d8a842779524', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (h("wa-dropdown-item", { key: 'fb737af1625bbef17692a8cdaa16a26454b5797e', value: "edit" }, "Edit")), canPrint && (h("wa-dropdown-item", { key: 'd43e7ad60f7326597b0d9843b85e669551e49e77', value: "receipt" }, "Print")), canEditOrDelete && h("wa-divider", { key: '706ae166a7f6fd80c82d033c41837629ed41407a' }), this.payment?.payment_type?.code === PayTypes.Payment && this.payment.payment_status?.code === PayStatus.Normal && (h("wa-dropdown-item", { key: 'afbc7b43b64695210e8e573d86a58858b1d15704', variant: "danger", value: "void-receipt" }, "Void with credit receipt")), canEditOrDelete && (h("wa-dropdown-item", { key: 'bf202b631bdbdae75ad98b7a40f5c5106251c48f', value: "delete", variant: "danger" }, "Delete")))))), this.payment.reference && h("p", { key: 'f7fa3bf7442f9cfc635b1f4a4a7b5f121020f9de', class: "payment-item__payment-reference" }, this.payment?.reference)));
    }
};
IrPaymentItem.style = irPaymentItemCss();

const irPaymentSummaryCss = () => `.sc-ir-payment-summary-h{display:block;font-family:var(--wa-font-family-body);border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);padding-bottom:var(--wa-space-l);margin-bottom:var(--wa-space-l)}.ps-host--analytics.sc-ir-payment-summary-h{border-bottom:none;margin-bottom:0}.ps-layout.sc-ir-payment-summary{display:flex;flex-direction:column;gap:0.357rem}.ps-analytics.sc-ir-payment-summary{position:relative;margin-top:var(--wa-space-m);display:flex;align-items:center;justify-content:center}.ps-analytics.sc-ir-payment-summary::before{content:'';position:absolute;top:50%;left:0;right:0;border-top:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.ps-analytics.sc-ir-payment-summary ir-payment-analytics.sc-ir-payment-summary{position:relative;z-index:1}.ps-cols.sc-ir-payment-summary{display:flex;align-items:flex-start;gap:0}.ps-col.sc-ir-payment-summary{flex:1;min-width:0;display:flex;flex-direction:column;gap:0.357rem}.ps-col--bordered.sc-ir-payment-summary{padding-left:0.857rem;margin-left:0.857rem;border-left:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.ps-section-title.sc-ir-payment-summary{font-weight:600;color:var(--wa-color-text-quiet, #9ca3af);white-space:nowrap}.ps-stacked.sc-ir-payment-summary{display:flex;flex-direction:column;gap:0.071rem;min-width:0}.ps-stacked__label.sc-ir-payment-summary{color:var(--wa-color-text-quiet, #9ca3af)}.ps-stacked__value.sc-ir-payment-summary{font-weight:700;color:var(--wa-color-text-normal, #111827);min-width:0;overflow-wrap:break-word}.ps-stacked__value--danger.sc-ir-payment-summary{color:var(--wa-color-danger-text-loud, #dc2626)}.ps-row.sc-ir-payment-summary{display:flex;align-items:baseline;justify-content:space-between;gap:0.571rem;min-width:0}.ps-row__label.sc-ir-payment-summary{color:var(--wa-color-text-quiet, #6b7280);white-space:nowrap;flex-shrink:0}.ps-row__value.sc-ir-payment-summary{font-weight:700;color:var(--wa-color-text-normal, #111827);text-align:right;min-width:0;overflow-wrap:break-word}.ps-row__value--danger.sc-ir-payment-summary{color:var(--wa-color-danger-text-loud, #dc2626)}.ps-grand-total.sc-ir-payment-summary{display:flex;align-items:baseline;justify-content:space-between;gap:0.571rem;padding-top:0.429rem;margin-top:0.143rem;border-top:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);min-width:0}.ps-grand-total__label.sc-ir-payment-summary{font-weight:700;color:var(--wa-color-text-normal, #111827);white-space:nowrap;flex-shrink:0}.ps-grand-total__value.sc-ir-payment-summary{font-weight:700;color:var(--wa-color-text-normal, #111827);text-align:right;min-width:0;overflow-wrap:break-word}@media (min-width: 1280px){.ps-stacked.sc-ir-payment-summary{display:flex;flex-direction:row;gap:0.5rem;align-items:center}.ps-stacked.--stacked-right.sc-ir-payment-summary{justify-content:flex-end}}`;

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
    allowedClOps = new Set([ClTxTypeCode.Adjustment, ClTxTypeCode.StandardChargeDebit, ClTxTypeCode.CancellationPenalty, ClTxTypeCode.Discount]);
    shouldShowTotalCost() {
        return this.totalCost > 0 && this.totalCost !== null;
    }
    get agentTotal() {
        return ((this.booking.agent_financial.gross_total ?? 0) +
            this.clTransactions.reduce((prev, curr) => {
                if (this.allowedClOps.has(curr.CL_TX_TYPE_CODE) && curr.CATEGORY === null) {
                    return prev + curr.DEBIT - curr.CREDIT;
                }
                return prev;
            }, 0));
    }
    get guestTotal() {
        return ((this.booking.guest_financial.gross_total ?? 0) +
            this.booking.financial.payments.reduce((prev, curr) => {
                if (curr.is_city_ledger) {
                    return prev;
                }
                return prev + (curr.payment_type.operation === 'CR' ? (curr.payment_type.code === '009' ? curr.amount * -1 : 0) : curr.amount);
            }, 0));
    }
    get bookingTotal() {
        return this.agentTotal + this.guestTotal;
    }
    render() {
        if (isAgentMode(this.agent)) {
            return (h("div", { class: "ps-layout" }, h("div", { class: "ps-cols" }, !this.isAllServicesAgentOwned && (h("div", { class: "ps-col " }, h("div", { class: "ps-stacked" }, h("span", { class: "ps-stacked__label" }, "Guest Balance:"), h("span", { class: "ps-stacked__value ps-stacked__value--danger" }, formatAmount(this.currency.symbol, this.booking?.guest_financial?.due_amount))), h("div", { class: "ps-stacked " }, h("span", { class: "ps-stacked__label" }, "Guest Collected:"), h("span", { class: "ps-stacked__value" }, formatAmount(this.currency.symbol, this.booking.guest_financial?.collected))))), h("div", { class: "ps-col" }, h("div", { class: "ps-stacked --stacked-right" }, h("span", { class: "ps-stacked__label ps-stacked__value" }, "Booking Total:"), h("span", { class: "ps-stacked__value" }, formatAmount(this.currency.symbol, this.bookingTotal ?? 0))), h("div", { class: "ps-stacked --stacked-right" }, h("span", { class: "ps-stacked__label" }, "Agent Total:"), h("span", { class: "ps-stacked__value" }, formatAmount(this.currency.symbol, this.agentTotal)))))));
        }
        const showAnalytics = !!this.booking?.extras?.find(e => e?.key === 'DP_OPTIM_BASE_GROSS')?.value;
        return (h(Host, { class: { 'ps-host--analytics': showAnalytics } }, h("div", { class: "ps-layout" }, h("div", { class: "ps-cols" }, h("div", { class: "ps-col " }, h("div", { class: "ps-stacked " }, h("span", { class: "ps-stacked__label" }, locales.entries.Lcz_Balance, ":"), h("span", { class: "ps-stacked__value ps-stacked__value--danger" }, formatAmount(this.currency.symbol, this.balance))), h("div", { class: "ps-stacked" }, h("span", { class: "ps-stacked__label" }, locales.entries.Lcz_Collected, ":"), h("span", { class: "ps-stacked__value" }, formatAmount(this.currency.symbol, this.collected)))), h("div", { class: "ps-col" }, this.shouldShowTotalCost() && (h("div", { class: "ps-stacked --stacked-right" }, h("span", { class: "ps-stacked__label ps-stacked__value" }, locales.entries.Lcz_TotalCost), h("span", { class: "ps-stacked__value" }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { class: "ps-stacked --stacked-right" }, h("span", { class: "ps-stacked__label ps-stacked__value" }, "Grand Total:"), h("span", { class: "ps-stacked__value" }, formatAmount(this.currency.symbol, this.booking.financial?.gross_total ?? 0))), h("div", { class: "ps-stacked --stacked-right" }))), showAnalytics && (h("div", { class: "ps-analytics" }, h("ir-payment-analytics", { booking: this.booking }))))));
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
        return (h("wa-card", { key: 'b3efeddeecdedd8b7bbbc6f1058e5269b1c32853', appearance: "plain", class: " payments-container" }, h("div", { key: '5539a94def6dd538431472ffc53a2e11790c3cee', slot: "header", class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("p", { key: '9ad6a60361a3d71c69614784a3f22c51ce4fd730', class: "font-size-large p-0 m-0" }, "Guest Folio"), h(HelpDocButton, { key: '56421cd7c73d28e12e35036a5953a35fc5eeaafc', message: "Help", href: "https://help.igloorooms.com/extranet/booking-details/guest-folio" })), !this.isAddPaymentDisabled && h("wa-tooltip", { key: 'f68f20104945994404f58a193d13321095019332', for: "create-payment" }, "Add folio entry"), h("ir-custom-button", { key: '98e012219e0259256d02bde0954c427f77cefedb', disabled: this.isAddPaymentDisabled, slot: "header-actions", id: "create-payment", size: "s", variant: "neutral", appearance: "plain", onClickHandler: this.handleAddPayment }, h("wa-icon", { key: 'a80f73bfade82e92cc9f7abe7857ac40e22a8472', name: "plus", style: { fontSize: '1rem' } })), this.hasPayments() ? this.payments.map((payment, index) => this.renderPaymentItem(payment, index)) : this.renderEmptyState()));
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
        return (h("ir-drawer", { key: '157fb79a8d36f3866236a66fa00b7693c3152b58', style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: locales.entries.Lcz_Pickup, open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && (h("ir-pickup-form", { key: 'bdcf8eed1a1514fbab15c7fb980ce3ad69df4bf7', booking: this.booking, agent: this.agent, onCanSubmitPickupChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.canSubmitPickup = e.detail;
            }, defaultPickupData: this.defaultPickupData, numberOfPersons: this.numberOfPersons, bookingNumber: this.bookingNumber, bookingDates: this.bookingDates, onLoadingChange: e => (this.isLoading = e.detail), onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            }, formId: this._id })), h("div", { key: '0340510406c49441dff3e31bda351cc49b62f0d9', slot: "footer", class: 'ir__drawer-footer' }, h("ir-custom-button", { key: 'e3d83b992bef7814de8d9eccebe2fb422934c039', class: `flex-fill`, size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, locales.entries.Lcz_Cancel), this.canSubmitPickup && (h("ir-custom-button", { key: 'd36c2ba8d2404bf9b031d1bf2baf309ba54efd2d', type: "submit", loading: this.isLoading, form: this._id, size: "m", class: `flex-fill`, variant: "brand" }, locales.entries.Lcz_Save)))));
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
        const arrivalDateSchema = libExports.z
            .string()
            .min(1, { message: 'Arrival date is required.' })
            .regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid date format, expected YYYY-MM-DD.' });
        return libExports.z.object({
            location: libExports.z.preprocess(asNumber, libExports.z.number().int()).refine(value => (allowRemoval ? value === -1 || value > 0 : value > 0), {
                message: 'Please select a pickup option.',
            }),
            arrival_date: libExports.z
                .preprocess(value => (typeof value === 'string' ? value : value ?? ''), arrivalDateSchema)
                .refine(dateStr => {
                const date = hooks(dateStr, 'YYYY-MM-DD', true);
                const min = hooks(minDate, 'YYYY-MM-DD', true);
                const max = hooks(maxDate, 'YYYY-MM-DD', true);
                return date.isValid() && min.isValid() && max.isValid() && date.isBetween(min, max, undefined, '[]');
            }, { message: `Arrival date must be between ${minDate} and ${maxDate}.` }),
            arrival_time: libExports.z
                .string()
                .regex(/^\d{2}:\d{2}$/, { message: 'Invalid time format. Expected HH:MM' })
                .refine(time => {
                const [hours, minutes] = time.split(':').map(Number);
                return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
            }, { message: 'Time values are out of range' }),
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
            flight_details: libExports.z.preprocess(value => (typeof value === 'string' ? value : ''), libExports.z.string().nonempty({ message: 'Flight details cannot be empty.' })),
            vehicle_type_code: libExports.z.preprocess(value => (typeof value === 'string' ? value : ''), libExports.z.string().nonempty({ message: 'Vehicle type code cannot be empty.' })),
            number_of_vehicles: libExports.z.preprocess(asNumber, libExports.z.number().int().min(1, { message: 'At least one vehicle is required.' })),
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
        return (h("form", { key: '9ad83c77eb7b44f7a810ec95469446eaac220522', id: this.formId, class: "pickup__container", onSubmit: async (e) => {
                e.preventDefault();
                await this.savePickup();
            } }, h("ir-validator", { key: '69a25d23b0eb214c83a666f7fde412d436643e8a', schema: this.pickupSchema.shape.location, autovalidate: this.autoValidate, value: this.pickupData.location, valueEvent: "change wa-change select-change", blurEvent: "wa-hide blur" }, h("wa-select", { key: 'e771ef8961cda78370a1b94256b6a04eb96d3c51', size: "s", onchange: e => this.handleLocationChange(e.target.value), defaultValue: this.pickupData.location === -1 ? '' : this.pickupData.location?.toString(), value: this.pickupData.location === -1 ? '' : this.pickupData.location?.toString() }, h("wa-option", { key: 'e53c6d4148efd5bf4205075302f0d312c4dbdcbd', value: "" }, locales.entries.Lcz_Pickup_NoThankYou), this.pickupService.getAvailableLocations(locales.entries.Lcz_Pickup_YesFrom).map(option => (h("wa-option", { key: `pickup-location-${option.value}`, value: option.value?.toString() }, option.text))))), this.shouldRenderDetails && (h("div", { key: 'db78390f03bfbc1e39339af8b19ba03d44ea72b5', class: "pickup__container", "data-testid": "pickup_body" }, h("ir-validator", { key: 'd6955b84c212b1d6c4b8ff76921c9862c90837f5', schema: this.pickupSchema.shape.arrival_date, autovalidate: this.autoValidate, value: this.pickupData.arrival_date ?? '', valueEvent: "dateChanged", blurEvent: "datePickerBlur blur" }, h("ir-date-select", { key: '7d876f04c0b4c1fa2913ca5befd2feef86ab0e7d', date: this.pickupData.arrival_date, minDate: this.bookingDates.from, maxDate: this.bookingDates?.to, emitEmptyDate: true, onDateChanged: evt => {
                this.updatePickupData('arrival_date', evt.detail.start?.format('YYYY-MM-DD') ?? null);
            }, label: locales.entries.Lcz_ArrivalDate })), h("ir-validator", { key: '10f5460e9d92ad69a26f1f7bebcea384e5f0242a', schema: this.pickupSchema.shape.arrival_time, autovalidate: this.autoValidate, value: this.pickupData.arrival_time, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { key: 'f2d7e95253644c11e1d7474ef34d255888993064', value: this.pickupData.arrival_time, "onText-change": e => {
                this.updatePickupData('arrival_time', e.detail);
            }, mask: 'time', label: locales.entries.Lcz_Time })), h("ir-validator", { key: '224b670452598711befc17646fdcdaf50f842dea', schema: this.pickupSchema.shape.flight_details, autovalidate: this.autoValidate, value: this.pickupData.flight_details, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { key: 'c1958454ee643bd2ddd90a2fbb503f34b4ea7026', "onText-change": e => this.updatePickupData('flight_details', e.detail), value: this.pickupData.flight_details, label: locales.entries.Lcz_FlightDetails })), h("ir-validator", { key: '4ca52c412afd069d90f4db9b590febf93f6f9820', schema: this.pickupSchema.shape.vehicle_type_code, autovalidate: this.autoValidate, value: this.pickupData.vehicle_type_code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide blur" }, h("wa-select", { key: 'ce517924c5f9e7bb2186ac95567265da8642f396', size: "s", onchange: e => this.handleVehicleTypeChange(e.target.value), value: this.pickupData.vehicle_type_code, defaultValue: this.pickupData.vehicle_type_code }, this.allowedOptionsByLocation.map(option => (h("wa-option", { value: option.vehicle.code, key: option.vehicle.code }, option.vehicle.description))))), h("ir-validator", { key: 'f0a0015308192c85a54e122303b2e9bfe73c2dac', schema: this.pickupSchema.shape.number_of_vehicles, autovalidate: this.autoValidate, value: this.pickupData.number_of_vehicles, valueEvent: "change wa-change select-change", blurEvent: "wa-hide blur" }, h("wa-select", { key: '0c64051934011371d8a8587f90d6b0f9614a9080', size: "s", defaultValue: this.pickupData.number_of_vehicles?.toString(), value: this.pickupData.number_of_vehicles?.toString(), label: locales.entries.Lcz_NbrOfVehicles, onchange: e => {
                this.handleVehicleQuantityChange(Number(e.target.value));
            } }, this.vehicleCapacity.map(i => (h("wa-option", { key: `capacity_${i}`, value: i.toString() }, i))))), h("ir-input", { key: 'b7c47128fac8f7b75f1ac0bf507d6acb2575c52e', mask: 'price', label: `${locales.entries.Lcz_DueUponBooking}`, "onText-change": e => {
                this.pickupData = {
                    ...this.pickupData,
                    due_upon_booking: e.detail,
                };
            }, value: this.pickupData.due_upon_booking }, h("span", { key: '85065b7137e9ed23be9d5031b6c247a5984f4e10', slot: "start" }, this.pickupData.currency?.symbol)), isAgentMode(this.agent) && (h("ir-service-assignee-select", { key: '9726ace4eaf20ce68932769d7f63ea45f40327d0', agent: this.booking.agent, assigneeType: this.assignee, onAssignmentChange: (e) => {
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

const irPickupViewCss = () => `.sc-ir-pickup-view-h{display:block}.pickup-view__card.sc-ir-pickup-view{background-color:var(--wa-color-surface-default)}.pickup-body.sc-ir-pickup-view{display:flex;flex-direction:column;gap:0.5rem}.pickup-body--guest.sc-ir-pickup-view{border-left:3px solid var(--wa-color-neutral-300, #d4d4d8);padding-left:0.625rem}.pickup-body--agent.sc-ir-pickup-view{border-left:3px solid var(--wa-color-brand-fill-loud, #60a5fa);padding-left:0.625rem}.service-group__label.sc-ir-pickup-view{display:flex;align-items:center;gap:0.4rem;margin:0 0 0.5rem;font-size:0.75rem;font-weight:700;letter-spacing:0.06em;color:var(--wa-color-neutral-500, #71717a)}.service-group__label.--agent.sc-ir-pickup-view{color:var(--wa-color-primary-600, #2563eb)}.pickup-row--header.sc-ir-pickup-view{display:flex;justify-content:space-between;align-items:baseline;gap:0.5rem}.pickup-datetime.sc-ir-pickup-view{font-size:0.925rem;font-weight:600;color:var(--wa-color-neutral-900, #18181b)}.pickup-time.sc-ir-pickup-view{font-weight:400;color:var(--wa-color-neutral-600, #52525b)}.pickup-price.sc-ir-pickup-view{color:var(--wa-color-neutral-900, #18181b);white-space:nowrap}.pickup-dl.sc-ir-pickup-view{margin:0;display:flex;flex-direction:column;gap:0.2rem}.pickup-dl__row.sc-ir-pickup-view{display:flex;gap:0.35rem;font-size:0.875rem;flex-wrap:wrap}.pickup-dl__row.sc-ir-pickup-view dt.sc-ir-pickup-view{font-weight:600;color:var(--wa-color-neutral-600, #52525b);white-space:nowrap}.pickup-dl__row.sc-ir-pickup-view dt.sc-ir-pickup-view::after{content:':'}.pickup-dl__row.sc-ir-pickup-view dd.sc-ir-pickup-view{margin:0;color:var(--wa-color-neutral-800, #27272a)}.pickup-note.sc-ir-pickup-view{margin:0;font-size:0.825rem;color:var(--wa-color-neutral-500, #71717a);line-height:1.4;border-top:1px solid var(--wa-color-neutral-100, #f4f4f5);padding-top:0.4rem}`;

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
        return (h(Host, null, h("wa-card", { appearance: "plain", class: "pickup-view__card" }, h("p", { slot: "header", class: 'font-size-large p-0 m-0' }, locales.entries.Lcz_Pickup), h("wa-tooltip", { for: "pickup" }, pickup_info ? 'Edit' : 'Add', " pickup"), h("ir-custom-button", { slot: "header-actions", id: "pickup", size: "s", appearance: "plain", variant: "neutral" }, h("wa-icon", { name: "edit", style: { fontSize: '1rem' } })), pickup_info ? (h(Fragment, null, isAgent && (h("p", { class: `service-group__label${pickup_info.agent ? ' --agent' : ''}` }, pickup_info.agent ? pickup_info.agent.name : 'Guest', h("span", null, "Folio"))), h("div", { class: `pickup-body${isAgent ? (pickup_info.agent ? ' pickup-body--agent' : ' pickup-body--guest') : ''}` }, h("div", { class: "pickup-row pickup-row--header" }, h("span", { class: "pickup-datetime" }, hooks(pickup_info.date, 'YYYY-MM-DD').format('MMM DD, YYYY'), pickup_info.hour && pickup_info.minute && h("span", { class: "pickup-time" }, " \u00B7 ", _formatTime(pickup_info.hour.toString(), pickup_info.minute.toString())), statusTag), h("strong", { class: "pickup-price" }, pickup_info.currency.symbol, pickup_info.total)), h("dl", { class: "pickup-dl" }, h("div", { class: "pickup-dl__row" }, h("dt", null, locales.entries.Lcz_FlightDetails), h("dd", null, pickup_info.details)), h("div", { class: "pickup-dl__row" }, h("dt", null, "Vehicle"), h("dd", null, pickup_info.selected_option.vehicle.description)), h("div", { class: "pickup-dl__row" }, h("dt", null, locales.entries.Lcz_NbrOfVehicles), h("dd", null, pickup_info.nbr_of_units))), (calendar_data.pickup_service.pickup_instruction?.description || calendar_data.pickup_service.pickup_cancelation_prepayment?.description) && (h("p", { class: "pickup-note" }, calendar_data.pickup_service.pickup_instruction?.description, calendar_data.pickup_service.pickup_cancelation_prepayment?.description))))) : (h("ir-empty-state", { showIcon: false })))));
    }
};
IrPickupView.style = irPickupViewCss();

const irPmsLogsCss = () => `.sc-ir-pms-logs-h{display:block;font-family:var(--wa-font-family-body);font-weight:var(--wa-font-weight-normal)}.dialog-container-height.sc-ir-pms-logs{height:4rem}.list-title.sc-ir-pms-logs{margin:0;padding:0;font-weight:600;white-space:nowrap;display:inline}.list-item.sc-ir-pms-logs{margin:0;padding:0;font-size:14px;margin-left:5px;width:fit-content}.list-item.green.sc-ir-pms-logs{color:var(--wa-color-success-fill-loud);font-weight:600}.list-item.red.sc-ir-pms-logs{color:var(--wa-color-danger-fill-loud);font-weight:600}`;

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
        return (h("div", { key: 'f9e42bda24a9897cab76b84cb30ff41bcd7d42f1', class: "" }, isRequestPending('/Get_Exposed_PMS_Logs') ? (h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, h("ir-spinner", null))) : (h("div", { class: 'dialog-container-height' }, h("div", { class: "d-flex align-items-center ", style: { paddingBottom: '0.5rem' } }, h("p", { class: "list-title p-0 m-0" }, locales.entries.Lcz_SentAt, ":"), this.pmsLogs?.sent_date ? (h("p", { class: "list-item" }, this.pmsLogs?.sent_date, " ", _formatTime(this.pmsLogs?.sent_hour.toString(), this.pmsLogs?.sent_minute.toString()))) : (h("p", { class: `list-item ${this.pmsLogs?.sent_date ? 'green' : 'red'}` }, this.pmsLogs?.is_acknowledged ? locales.entries.Lcz_YES : locales.entries.Lcz_NO))), h("div", { class: "d-flex align-items-center p-0 m-0" }, h("p", { class: "list-title p-0 m-0" }, locales.entries.Lcz_Acknowledged), h("div", { class: "d-flex align-items-center", style: { gap: '1rem' } }, h("p", { class: `list-item  ${this.pmsLogs?.is_acknowledged ? 'green' : 'red'}` }, this.pmsLogs?.is_acknowledged ? locales.entries.Lcz_YES : locales.entries.Lcz_NO), !this.pmsLogs?.is_acknowledged && this.pmsLogs?.revision_id && this.userTypeCode === '1' && (h("ir-custom-button", { variant: "brand", loading: isRequestPending('/Ack_Exposed_Revision'), onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const data = await this.bookingService.ackExposedRevision({
                    revision_id: this.pmsLogs?.revision_id,
                });
                this.error = data.ExceptionMsg;
            } }, "Acknowledge")))), this.error && (h("wa-callout", { size: "s", appearance: "filled-outlined", variant: "danger" }, this.error))))));
    }
};
IrPmsLogs.style = irPmsLogsCss();

const irReservationInformationCss = () => `.sc-ir-reservation-information-h{display:block}.reservation-information__card.sc-ir-reservation-information{background-color:var(--wa-color-surface-default)}.reservation-information.sc-ir-reservation-information{display:flex;flex-direction:column;gap:0.5rem !important}.reservation__info-guest-origins.sc-ir-reservation-information{display:flex;align-items:center;gap:1.5rem}.reservation-information__property-name.sc-ir-reservation-information{margin:0;font-weight:600;margin-bottom:1rem}.reservation-information__row.sc-ir-reservation-information{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.reservation-information.sc-ir-reservation-information>ir-label.sc-ir-reservation-information,.reservation-information.sc-ir-reservation-information>ota-label.sc-ir-reservation-information,.reservation-information__row.sc-ir-reservation-information ir-label.sc-ir-reservation-information{display:flex;align-items:center}.reservation-information__channel-notes.sc-ir-reservation-information{flex-direction:column;align-items:flex-start !important}`;

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
        return (h("wa-card", { key: '0bd856d240552de924869121a28a10aeaf6ca471', appearance: "plain", class: "reservation-information__card" }, h("div", { key: '2dbd3bdefc056420c2ecb55e62634a9aef040610', class: "reservation-information", ref: el => (this.reservationInformationEl = el) }, h("p", { key: 'ee8fc6b2d6c022f512cc0453372b0047e82a7916', class: "reservation-information__property-name" }, this.booking.property.name || ''), h("ir-label", { key: '91644649d319a71f4c13f56cea177c466d9561a4', renderContentAsHtml: true, labelText: `${locales.entries.Lcz_BookedOn}:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("div", { key: '8d5189a42445abf60b9f6bcbc4bbf4a3c759f086', class: "reservation-information__row" }, h("ir-label", { key: '5235bcacf5e83c59fa658f083863bcb741ef6045', labelText: `${locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, this.booking.guest?.nbr_confirmed_bookings > 1 && !this.booking.agent && (h("div", { key: '6fd1ff9567b3b3f1771ab8bac71aca8010aaf4b1', class: 'm-0 p-0 ', slot: "prefix" }, h("wa-tooltip", { key: '40ad5e187624471f689bf3cab3d17bad84e2fb5b', for: "guests_nbr_confirmed_bookings" }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString())), h("div", { key: '6f057a850de555baf1b461b405735245a169d884', style: { color: '#FB0AAD' }, id: "guests_nbr_confirmed_bookings" }, h("span", { key: '724c166b804c140bb13e33c675a413605b266bf6' }, " ", this.booking.guest.nbr_confirmed_bookings), h("wa-icon", { key: 'c05f8d326a387036bf6fed408c88df02eb0566ff', name: "heart", style: { color: '#FB0AAD' } }))))), h("wa-tooltip", { key: '27768ae399e63ace2aa254e54fc2748640af4035', for: `edit_guest-details` }, "Edit guest details"), h("ir-custom-button", { key: '4adad6800f0aa30a7eeff46258e0c9294ebd8b04', iconBtn: true, id: `edit_guest-details`, onClickHandler: e => this.handleEditClick(e, 'guest'), appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: 'da1e0fc6d0141784d86e353c8032a51aacbd5ede', name: "edit", label: "Edit guest details", style: { fontSize: '1rem' } }))), !this.booking.agent && (h("div", { key: 'bfef39abbb389126fc052c3e04726155f9a761c4', class: "reservation-information__row" }, h("ir-label", { key: 'dd32a9383fffcb7f9053dd6448c36bff54def15e', labelText: `Company:`, placeholder: 'No company name provided', content: `${this.booking.company_name ?? ''}${this.booking.company_tax_nbr ? ` - ${this.booking.company_tax_nbr}` : ''}`, display: 'flex' }), h("wa-tooltip", { key: 'a3d6fa7ff8cac42ddc2269c7526d262bcbd8dc65', for: `edit_create-company-info` }, "Add company info"), h("ir-custom-button", { key: '2f363c20f136824adc0daf68b4ff76b973c7c1ca', iconBtn: true, id: `edit_create-company-info`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irBookingCompanyFormRef.openCompanyForm();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '03de5be3fad8c0441faafa674f4d6c217144e05f', name: "edit", label: "Add or modify company info", style: { fontSize: '1rem' } })))), h("div", { key: '0d63b6a7fdd2ea3e32d48dc1832aa6c9fa83e1be', class: 'reservation__info-guest-origins' }, this.userCountry && (h("ir-label", { key: 'bd5f194d7a7c581da673ff28e50977d62352695a', labelText: `${locales.entries.Lcz_Country}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.booking.guest.mobile && h("ir-label", { key: '9f6c4bdca9ebedb6435452f3909c49df2f051dfb', labelText: `${locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() })), !this.booking.agent && h("ir-label", { key: '1839047682a16debca46658ca5ad58543b96f999', labelText: `${locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && h("ir-label", { key: '0cd590869c548feb109e17bc0d88a3ddcab84775', labelText: `${locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), this.booking?.guest?.address && h("ir-label", { key: '6147ff802f1970701091d97506d8373e88dada5a', labelText: `${locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.booking.guest?.notes && h("ir-label", { key: 'f9a2b78206be6d0e6e7914689ed8984e14b4d323', display: "inline", labelText: `${locales.entries.Lcz_GuestPrivateNote}:`, content: this.booking.guest?.notes }), this.booking.promo_key && h("ir-label", { key: '6a0734b699438fb3a3f274052865f8f56834eb70', labelText: `${locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: '7dfe98034fc554c3623f144a4f9b330fcef1a3c0', class: "d-flex align-items-center" }, h("svg", { key: '9cdd3c9db50609ad9c19eaf2290358b83bf66e53', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'a1f9c5ff827a8d1e712bd472703c80d142cff286', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: 'cf7ac41c52ebe4be7a1d667ae02179814b0bfa1b', class: "m-0 p-0 ml-1" }, locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (h("ir-label", { labelText: `${locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0 reservation-information__channel-notes', label: `${locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.booking.ota_notes, maxVisibleItems: this.booking.ota_notes?.length })), h("div", { key: 'ba39000b4e0390af2adfcdc838268376eeeeb71f', class: "reservation-information__row" }, h("ir-label", { key: 'c783eb45314b8bc41f4495b26afa78e3e44a1455', labelText: `${locales.entries.Lcz_BookingPrivateNote}:`, placeholder: locales.entries.Lcz_VisibleToHotelOnly, content: privateNote, display: privateNote ? 'inline' : 'flex' }), h("wa-tooltip", { key: '50ebf059bedfc0f9038051243ff55848e76693e1', for: `edit_create-extra-note` }, privateNote ? 'Edit' : 'Create', " private note"), h("ir-custom-button", { key: '414c2064f6781fb0ca9b580d3e497f60ed6c6acd', iconBtn: true, id: `edit_create-extra-note`, onClickHandler: () => {
                this.irBookingExtraNoteRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '3a64ecf33e2271f054dfff0a28586019756d42b1', style: { fontSize: '1rem' }, name: "edit", label: "Edit or create private note" })))), h("ir-booking-extra-note", { key: '4c124078ac0a6c4050b64c646129de5feb8e4aa8', booking: this.booking, ref: el => (this.irBookingExtraNoteRef = el) }), h("ir-booking-company-dialog", { key: '37017afec9c048c49445c77670bcf6897f647af6', booking: this.booking, ref: el => (this.irBookingCompanyFormRef = el) })));
    }
};
IrReservationInformation.style = irReservationInformationCss();

const irRoomCss = () => `.light-blue-bg.sc-ir-room{background:#acecff;padding:0.1rem 0.3rem;border-radius:5px;display:block;max-width:100px;box-sizing:border-box;display:inline-block;overflow:hidden;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:default}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room span.sc-ir-room{display:inline;white-space:normal;line-height:1.5;word-break:break-word}.room_statements.sc-ir-room b.sc-ir-room{display:inline;margin-right:5px}.payment-container.sc-ir-room{position:absolute;right:1rem;height:fit-content}.sc-ir-room-h{position:relative}.room_actions_btns.sc-ir-room{gap:0.5rem}.room_actions_btns.sc-ir-room{white-space:nowrap;width:max-content}.room_actions_btns.sc-ir-room{flex:1 1 0%;display:flex;justify-content:flex-end}.mx-0-5.sc-ir-room{margin-left:2px !important;margin-right:2px !important}.tax-width.sc-ir-room{font-size:10px}.mx-01.sc-ir-room{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}*.sc-ir-room-h{box-sizing:border-box}.booking-room__collapse-btn.sc-ir-room{all:unset;display:inline-flex;align-items:center;align-self:flex-start;height:fit-content;border-radius:calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));aspect-ratio:1;cursor:pointer;transition:rotate var(--wa-transition-normal) var(--wa-transition-easing)}.booking-room__collapse-btn[data-state='opened'].sc-ir-room{rotate:90deg}.booking-room__collapse-btn[data-state='opened'].sc-ir-room:dir(rtl){rotate:-90deg}.booking-room__collapse-btn.sc-ir-room:focus-visible{outline:var(--wa-focus-ring);outline-offset:calc(var(--wa-panel-border-width) + var(--wa-focus-ring-offset))}.booking-room__header-row.sc-ir-room{display:flex;gap:var(--wa-space-sm, 0.5rem);margin:0}.booking-room_summary.sc-ir-room{display:grid;gap:0.5rem}.booking-room__breakdown-label-wrapper.sc-ir-room{flex:0 0 auto;padding-top:0.25rem}.booking-room__breakdown-label.sc-ir-room{margin:0;padding-right:0.5rem;font-weight:600;white-space:nowrap}.booking-room__details.sc-ir-room,.booking-room__details.sc-ir-room::part(base),.booking-room__details.sc-ir-room [part~="base"],.booking-room__details.sc-ir-room::part(header),.booking-room__details.sc-ir-room [part~="header"],.booking-room__details.sc-ir-room::part(content),.booking-room__details.sc-ir-room [part~="content"]{width:100%;box-sizing:border-box;padding:0}.booking-room__details.sc-ir-room::part(header),.booking-room__details.sc-ir-room [part~="header"]{align-items:flex-start}`;

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
    getDateStr(date, locale = 'default') {
        return date.getDate() + ' ' + date.toLocaleString(locale, { month: 'short' }) + ' ' + date.getFullYear();
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
            TITLE: `${locales.entries.Lcz_EditBookingFor} ${this.room?.roomtype?.name} ${this.room?.unit?.name || ''}`,
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
                return `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${this.room.roomtype.name} ${this.room.unit ? this.room.unit.name : ''} ${locales.entries.Lcz_FromThisBooking}`;
            case 'checkin':
                return `Are you sure you want to Check In this unit?
`;
            case 'checkout':
                return `Are you sure you want to Check Out this unit?`;
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
        this.openSidebar.emit({
            type: 'room-guest',
            payload: {
                roomName: this.room.unit?.name,
                sharing_persons: this.room.sharing_persons,
                totalGuests: adult_nbr + children_nbr + infant_nbr,
                checkin: this.hasCheckIn,
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
        return (h(Host, { key: '95b27e2fb517921a3f7f50777f3c88423af7bdfb' }, h("div", { key: '0c50ec7c472ade502836ff73c8bab2866c0596d3', class: "booking-room__header-row" }, h("button", { key: '053626a74bde69900399db6383b9e15e91338dbd', "data-state": this.collapsed ? 'closed' : 'opened', class: "booking-room__collapse-btn", onClick: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '320fa6270d834769c06f09946e9ef9bae45bd824', name: "chevron-right" })), h("div", { key: 'cd97630f7babbf3c4ecf3d5b42cf09019dc24e51', style: { width: '100%', cursor: 'default' } }, h("div", { key: '6e04fab496b4b4113a882a5421caa05b0fd04e0c',
            // slot="summary"
            class: "booking-room_summary", style: { width: '100%', cursor: 'default' } }, h("ir-room-header", { key: 'ed6d5a28f33e9eabcfc979d10b666fe548cb69b8', room: this.room, myRoomTypeFoodCat: this.myRoomTypeFoodCat, mealCodeName: this.mealCodeName, currency: this.currency, isEditable: this.isEditable, hasRoomEdit: this.hasRoomEdit, hasRoomDelete: this.hasRoomDelete, agent: this.agent, onAction: e => this.handleHeaderAction(e.detail), onOpenHbDialog: () => (this.isHbDialogOpen = true) }), h("ir-room-details", { key: 'de25f36016725050f76a60c41dd7fee71de93f65', room: this.room, booking: this.booking, mainGuest: this.mainGuest, bedPreferences: this.bedPreferences, language: this.language, includeDepartureTime: this.includeDepartureTime, hasCheckIn: this.hasCheckIn, hasCheckOut: this.hasCheckOut, onCheckIn: () => this.handleCheckIn(), onCheckOut: () => (this.modalReason = 'checkout'), onViewGuests: () => this.showGuestModal(), onOpenArrivalDialog: () => (this.isArrivalDialogOpen = true), onOpenDepartureDialog: () => (this.isDepartureDialogOpen = true) })), !this.collapsed && h("ir-room-breakdown", { key: '3b06c0b4a1c34929cc34c745eae03faaa6b5a5eb', room: this.room, booking: this.booking, currency: this.currency, clTransactions: this.clTransactions }))), h("ir-room-extra-services", { key: '441c7f1cf45f2d55e990323d723ec3fe8f01dc0a', room: this.room, booking: this.booking, isEditable: this.isEditable, agent: this.agent, currency: this.currency, language: this.language, svcCategories: this.svcCategories, clTransactions: this.clTransactions, onRequestAddExtraService: () => this.handleAddExtraServiceToUnit() }), h("ir-assignment-toggle-dialog", { key: '8aab443c6666c23c4f4cbe22b06ad08b09de347d', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, onConfirmToggle: () => this.toggleRoomAgent() }, h("span", { key: 'ba0e0063027de9893798d129decf36803feaff8f', slot: "message" }, "Move ", this.room.roomtype.name, " ", this.room.rateplan.short_name, " ", this.room.unit?.name, " to", ' ', h("b", { key: 'e48e9bda89341d3b21f3131a4fd36b07fe490f11' }, this.room.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent'), " folio"), ".")), h("ir-dialog", { key: '9bc8e03cc4bcab0dc19b35f5e4657745140de48e', label: this.modalReason === 'delete' ? 'Alert' : locales.entries.Lcz_Confirmation, ref: el => (this.modal = el), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalReason = null;
            }, lightDismiss: this.modalReason === 'checkin' }, h("p", { key: '52032fa5ef256566bcb34b08e288315251fae693' }, this.renderModalMessage()), h("div", { key: '582b5bcf575049047a2e7da3adeb141639929689', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '0915ccb4a3dc21f85973907b2c6fcd165ba5bded', size: "m", "data-dialog": "close", appearance: "filled", variant: "neutral" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '91976e6d48033180cfb6dddb93229ece04d2ebfa', size: "m", loading: this.isLoading, onClickHandler: e => this.handleModalConfirmation(e), variant: this.modalReason === 'delete' ? 'danger' : 'brand' }, this.modalReason === 'delete' ? locales.entries.Lcz_Delete : locales.entries.Lcz_Confirm))), h("ir-checkout-dialog", { key: '46103a6756863557f49b77b12cd6df526aa1a12c', onCheckoutDialogClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalReason = null;
                if (e.detail.reason === 'openInvoice') {
                    this.isOpen = true;
                }
                else if (e.detail.reason === 'checkout') {
                    this.resetBookingEvt.emit();
                }
            }, identifier: this.room.identifier, open: this.modalReason === 'checkout', booking: this.booking }), h("ir-invoice", { key: 'f07280824d9c307826a47aa0508d412b5387f9dc', onInvoiceClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            }, open: this.isOpen, booking: this.booking, roomIdentifier: this.room.identifier }), h("ir-booking-pricing-drawer", { key: 'e4f8bec5524d422063c1a218b3a1d2fc9000edca', open: this.isPricingDrawerOpen, booking: this.booking, room: this.room, agent: this.agent, folioEntries: this.clTransactions, currencySymbol: this.booking?.currency?.symbol ?? '', onCloseDrawer: () => (this.isPricingDrawerOpen = false), onPricingSaved: () => {
                this.isPricingDrawerOpen = false;
                this.resetBookingEvt.emit(null);
            } }), h("ir-hb-preference-dialog", { key: 'fb57ac68ed766e6b4d36ee5074f59c5cc8c7ceb8', room: this.room, open: this.isHbDialogOpen, onHbPreferenceClose: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isHbDialogOpen = false;
                if (e.detail.saved) {
                    this.resetBookingEvt.emit(null);
                }
            } }), h("ir-departure-time-dialog", { key: 'a1fa3758fd573615b37060b4c0d4abfa69c2c147', room: this.room, booking: this.booking, open: this.isDepartureDialogOpen, property_id: this.property_id, departureTime: this.departureTime, language: this.language, booking_nbr: this.booking.booking_nbr, currency_id: this.booking.currency.id, currencySymbol: this.currency, onDepartureTimeClose: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isDepartureDialogOpen = false;
                if (e.detail.saved) {
                    this.resetBookingEvt.emit(null);
                }
            } }), h("ir-arrival-time-dialog", { key: 'acb52ecb02be6dd9c57f24e10d70b1023faed5e0', room: this.room, booking: this.booking, open: this.isArrivalDialogOpen, property_id: this.property_id, arrivalTime: this.arrivalTime, language: this.language, booking_nbr: this.booking.booking_nbr, currency_id: this.booking.currency.id, currencySymbol: this.currency, onArrivalTimeClose: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isArrivalDialogOpen = false;
                if (e.detail.saved) {
                    this.resetBookingEvt.emit(null);
                }
            } })));
    }
    static get watchers() { return {
        "room": [{
                "handleRoomDataChange": 0
            }]
    }; }
};
IrRoom.style = irRoomCss();

const irRoomBreakdownCss = () => `.subtotal_row.sc-ir-room-breakdown{padding-top:8px;font-weight:600}.night-cost.sc-ir-room-breakdown{color:#7cbebe}.booking-room__cell-tax-name.sc-ir-room-breakdown{display:block;white-space:wrap !important}.booking-room__breakdown-row.sc-ir-room-breakdown{display:flex;flex-direction:column;gap:0.5rem;margin:0.5rem 0}@media (min-width: 640px){.booking-room__breakdown-row.sc-ir-room-breakdown{flex-direction:row;align-items:flex-start}}.booking-room__breakdown-table.sc-ir-room-breakdown{flex:1 1 auto;overflow-x:auto}.booking-room__cell.sc-ir-room-breakdown{font-size:var(--wa-font-size-sm);padding:0.125rem 0;line-height:1.3;white-space:nowrap}.booking-room__cell--right.sc-ir-room-breakdown{text-align:right}.booking-room__cell--left.sc-ir-room-breakdown{text-align:left}.booking-room__cell--pad-right.sc-ir-room-breakdown{padding-right:0.5rem}.booking-room__cell--pad-left.sc-ir-room-breakdown{padding-left:0.5rem}`;

const IrRoomBreakdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    room;
    booking;
    currency = 'USD';
    clTransactions = [];
    get acmTxByDate() {
        return new Map(this.clTransactions.filter(tx => tx.CATEGORY === 'ACM' && tx.BSA_REF === this.room.identifier).map(tx => [tx.SERVICE_DATE, tx]));
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
        return (h("div", { key: 'c112258994573f71d1323b3114142883ffb1da1e', class: "booking-room__details-container" }, h("div", { key: '6db71f55e6db3f2201ae38893cc2a4152296d83e', class: "booking-room__breakdown-row" }, h("div", { key: '41f9408bf973ec1159cfa77a5abef9ceffd115e9', class: "booking-room__breakdown-table" }, h("table", { key: '492eac23d235e5d4ee899a4a8662d6a041f5e642' }, this.room.days.length > 0 &&
            (() => {
                const acmTxByDate = this.acmTxByDate;
                return this.room.days.map(room => {
                    const tx = acmTxByDate.get(room.date);
                    return (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, _getDay(room.date)), h("td", { class: "booking-room__cell booking-room__cell--right" }, formatAmount(this.currency, room.amount)), room.cost > 0 && room.cost !== null && (h("td", { class: "booking-room__cell booking-room__cell--left booking-room__cell--pad-left night-cost" }, formatAmount(this.currency, room.cost))), h("td", { class: "booking-room__cell booking-room__cell--pad-left" }, tx && h("ir-cl-status-tag", { transaction: { _rowId: '', ...mapClTxToFolioRow(tx), balance: 0 }, size: "extra-small" }))));
                });
            })(), h("tr", { key: 'eb1406e25c8b31b8e20008880bb38f6222f42e44', class: '' }, h("th", { key: 'd571a2efb6a3cc4b926a614c326afd5b6e0f74e5', class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right subtotal_row" }, locales.entries.Lcz_SubTotal), h("th", { key: '4b388bcaa8f9833c0f32fca8fa4fa02ea7040160', class: "booking-room__cell booking-room__cell--right subtotal_row" }, formatAmount(this.currency, this.room.total)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (h("th", { key: '235ae5fdff684fa7224531d3736cc1e04e0a63bb', class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-left night-cost" }, formatAmount(this.currency, this.room.cost)))), this.booking.is_direct ? (h(Fragment, null, (() => {
            const filtered_data = calendar_data.taxes.filter(tx => tx.pct > 0 && tx.is_exlusive);
            return filtered_data.map(d => {
                const amount = d.is_exlusive
                    ? // Tax is added on top
                        this.room.total * d.pct
                    : // Tax is included in total → extract it
                        this.room.total - this.room.total / (1 + d.pct);
                return (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, h("span", { class: 'booking-room__cell-tax-name' }, d.is_exlusive ? locales.entries.Lcz_Excluding : locales.entries.Lcz_Including, " ", d.name, " (", d.pct, "%)")), h("td", { class: "booking-room__cell booking-room__cell--right" }, formatAmount(this.currency, amount / 100)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-left night-cost" }, formatAmount(this.currency, (this.room.cost * d.pct) / 100)))));
            });
        })(), this.room.inclusive_taxes?.CALCULATED_INCLUSIVE_TAXES?.map(d => (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, h("span", { class: 'booking-room__cell-tax-name' }, locales.entries.Lcz_Including, " ", d.TAX_NAME, " (", d.TAX_PCT * 100, "%)")), h("td", { class: "booking-room__cell booking-room__cell--right" }, formatAmount(this.currency, d.CALCULATED_VALUE))))))) : (h(Fragment, null, (() => {
            const filtered_data = this.room.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, h("span", { class: 'booking-room__cell-tax-name' }, d.is_exlusive ? locales.entries.Lcz_Excluding : locales.entries.Lcz_Including, " ", d.name)), h("td", { class: "booking-room__cell booking-room__cell--right" }, d.currency.symbol, d.amount)));
            });
        })()))))), h("ir-label", { key: '116f859076cd0efb8fcc56da2563397366f25492', labelText: `${locales.entries.Lcz_SmokingOptions}:`, display: "inline", content: this.getSmokingLabel() }), this.booking.is_direct && (h(Fragment, { key: '1cb1b68f054d73892d214e876822a3e5f79093b8' }, this.room.rateplan.cancelation && (h("ir-label", { key: '60efd61d5bfd2c6e85bbd487b5a91cff2ad04ed0', labelText: `${locales.entries.Lcz_Cancellation}:`, display: "inline", content: this.room.rateplan.cancelation || '', renderContentAsHtml: true })), this.room.rateplan.guarantee && (h("ir-label", { key: '1945ef8152764877550ab7cf64221903bcd23460', labelText: `${locales.entries.Lcz_Guarantee}:`, display: "inline", content: this.room.rateplan.guarantee || '', renderContentAsHtml: true })))), this.room.ota_meta && (h("div", { key: 'd65dcf04f8d0480ca9c04954ee89635d210e26b6' }, h("ir-label", { key: '6d30c47f7320f8c3f4cf84d55edfac37d642af87', labelText: `${locales.entries.Lcz_MealPlan}:`, display: "inline", content: this.room.ota_meta.meal_plan }), h("ir-label", { key: '0d03778d9abffb149d6169cda95ccbbc3fd85772', labelText: `${locales.entries.Lcz_Policies}:`, display: "inline", content: this.room.ota_meta.policies })))));
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
        const adultLabel = adultCount > 1 ? locales.entries.Lcz_Adults.toLowerCase() : locales.entries.Lcz_Adult.toLowerCase();
        const childLabel = childCount > 1 ? locales.entries.Lcz_Children.toLowerCase() : locales.entries.Lcz_Child.toLowerCase();
        const infantLabel = infantCount > 1 ? locales.entries.Lcz_Infants.toLowerCase() : locales.entries.Lcz_Infant.toLowerCase();
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
        return (h(Fragment, { key: '256ce97c3d8e328feac2ef59ce15b23f7239a4ac' }, h("div", { key: '93661275df3736e99329b46cfa81cec6652fa86b', class: "booking-room__dates-row" }, h("ir-date-view", { key: '660af3974e4378ee43d17bc6f206136c5c8d531d', format: 'ddd, MMM DD, YYYY', class: "booking-room__date-view", from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), !isSingleUnit(this.room.roomtype.id) && calendar_data.is_frontdesk_enabled && this.room.unit && h("ir-unit-tag", { key: 'cb36acba55cd3b06a23ee5c803d9f9d8827a4221', unit: this.room.unit.name }), this.hasCheckIn && (h("ir-custom-button", { key: 'a64ca9ce43984e6043a9ea64210547f09fab259c', onClickHandler: () => this.checkIn.emit(), id: "checkin", appearance: "outlined", variant: "brand" }, locales.entries.Lcz_CheckIn)), this.hasCheckOut && (h("ir-custom-button", { key: '1d158915f2647069baa739b7cee676679e1d83b8', appearance: "outlined", variant: "brand", onClickHandler: () => this.checkOut.emit(), id: "checkout" }, locales.entries.Lcz_CheckOut))), h("div", { key: '1148b88a7d8f23cc27afa1f074c82be9af6dd33e', class: "booking-room__guest-row" }, h("p", { key: '3d0a689a5d3fba4793f79fcb4450f30d8f04d890', class: "booking-room__text-reset booking-room__guest-name" }, `${this.mainGuest.first_name || ''} ${this.mainGuest.last_name || ''}`), this.room.rateplan.selected_variation.adult_nbr > 0 &&
            (this.room.unit ? (h(Fragment, null, h("wa-tooltip", { for: `view-guest-btn-${this.room.identifier}` }, "View guests"), h("ir-custom-button", { link: true, onClickHandler: () => this.viewGuests.emit(), id: `view-guest-btn-${this.room.identifier}`, variant: "brand", appearance: "plain" }, h("span", { innerHTML: this.formatVariation(this.room.occupancy) })))) : (h("span", { innerHTML: this.formatVariation(this.room.occupancy) }))), bed && h("p", { key: '3de30e7f8285fb70ee6d950dc1331ea5bd673de5', class: "booking-room__text-reset booking-room__bed-info" }, "(", bed, ")")), (this.includeDepartureTime || this.booking.is_direct) && (h("div", { key: '6998cc2937e6a325074bbd113b5e97fa5c8ce098', class: "booking-room__departure-row" }, this.booking.is_direct && (h("div", { key: 'd961f96cf1e55fee5c54b28223a97c34d4d3fae9', class: "booking-room__time-item" }, h("span", { key: 'cc2004502e9e9bb4371a32ec1010b25d3a045475', class: "booking-room__departure-label" }, "Expected arrival time:"), h("ir-custom-button", { key: '04672bae0c62bef11842029dde812e70703a57fb', link: true, appearance: "plain", variant: "brand", onClickHandler: () => this.openArrivalDialog.emit() }, this.room.arrival_time?.description || 'Not provided'))), this.includeDepartureTime && (h("div", { key: '7099136aebecbc9a1754d91b50297a810e25527f', class: "booking-room__time-item" }, h("span", { key: '3caa46147b7626706ebbffbaa37c3e887da674de', class: "booking-room__departure-label" }, "Departure time:"), h("ir-custom-button", { key: '8dc5e6021ebdbe7efcadc4a1eb67349180ecff59', link: true, appearance: "plain", variant: "brand", onClickHandler: () => this.openDepartureDialog.emit() }, this.room.departure_time?.description || 'Not provided')))))));
    }
};
IrRoomDetails.style = irRoomDetailsCss();

const irRoomExtraServicesCss = () => `.booking-room__extra-services.sc-ir-room-extra-services{margin-top:0.5rem}.booking-room__extra-services.sc-ir-room-extra-services{margin-inline-start:calc(1.25rem + var(--wa-space-sm, 0.5rem))}.booking-room__extra-services.sc-ir-room-extra-services wa-divider.sc-ir-room-extra-services{border-color:var(--wa-color-neutral-fill-loud);margin-block:0.35rem}.booking-room__extra-services.sc-ir-room-extra-services::part(body),.booking-room__extra-services.sc-ir-room-extra-services [part~="body"]{display:flex;flex-direction:column;gap:0.625rem;padding:1em}.booking-room__extra-services.sc-ir-room-extra-services::part(header),.booking-room__extra-services.sc-ir-room-extra-services [part~="header"]{padding-inline:1em;border-width:0;padding-bottom:0}.booking-room__extra-services-header.sc-ir-room-extra-services{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-xs, 0.25rem)}.booking-room__extra-services-label.sc-ir-room-extra-services{display:inline-flex;align-items:center;gap:0.5rem;min-width:0}.booking-room__extra-services-icon.sc-ir-room-extra-services{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:1.625rem;height:1.625rem;border-radius:50%;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, var(--wa-color-brand-600))}.booking-room__extra-services-icon.sc-ir-room-extra-services wa-icon.sc-ir-room-extra-services{font-size:0.8rem}.booking-room__extra-services-title.sc-ir-room-extra-services{font-size:var(--wa-font-size-m, 1rem);font-weight:700;line-height:1.2;letter-spacing:-0.01em;color:var(--wa-color-neutral-900, #18181b);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.booking-room__extra-services-count.sc-ir-room-extra-services{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;min-width:1.25rem;height:1.25rem;padding:0 0.375rem;border-radius:999px;font-size:var(--wa-font-size-2xs, 0.7rem);font-weight:700;line-height:1;color:var(--wa-color-brand-on-loud, #fff);background:var(--wa-color-brand-fill-loud, var(--wa-color-brand-600))}.booking-room__extra-services-add.sc-ir-room-extra-services::part(base),.booking-room__extra-services-add.sc-ir-room-extra-services [part~="base"]{transition:background-color var(--wa-transition-fast, 100ms) var(--wa-transition-easing)}.booking-room__extra-services-pinned.sc-ir-room-extra-services,.booking-room__extra-services-list.sc-ir-room-extra-services{display:flex;flex-direction:column;gap:0.625rem}.booking-room__extra-services-details.sc-ir-room-extra-services,.booking-room__extra-services-details.sc-ir-room-extra-services::part(base),.booking-room__extra-services-details.sc-ir-room-extra-services [part~="base"]{background:transparent;border:none}.booking-room__extra-services-details.sc-ir-room-extra-services::part(header),.booking-room__extra-services-details.sc-ir-room-extra-services [part~="header"]{min-height:auto;padding:0.125rem 0;border-radius:0}.booking-room__extra-services-details.sc-ir-room-extra-services::part(content),.booking-room__extra-services-details.sc-ir-room-extra-services [part~="content"]{padding:0.5rem 0 0}.booking-room__extra-services-details.sc-ir-room-extra-services::part(base),.booking-room__extra-services-details.sc-ir-room-extra-services [part~="base"]{--wa-transition-duration:var(--wa-transition-normal, 200ms)}.booking-room__extra-services-toggle-label.sc-ir-room-extra-services{font-size:var(--wa-font-size-xs, 0.75rem);font-weight:600;color:var(--wa-color-brand-fill-loud, var(--wa-color-brand-600))}.booking-room__extra-services-group.sc-ir-room-extra-services{padding-left:0.625rem;border-left:3px solid transparent}.booking-room__extra-services-group--guest.sc-ir-room-extra-services{border-left-color:var(--wa-color-neutral-300, #d4d4d8)}.booking-room__extra-services-group--agent.sc-ir-room-extra-services{border-left-color:var(--wa-color-brand-fill-loud, #3b82f6)}.booking-room__extra-services-group-label.sc-ir-room-extra-services{display:flex;align-items:center;gap:0.4rem;margin:0 0 0.5rem;font-size:var(--wa-font-size-2xs, 0.7rem);font-weight:700;letter-spacing:0.06em;color:var(--wa-color-neutral-500, #71717a)}.booking-room__extra-services-group-label--agent.sc-ir-room-extra-services{color:var(--wa-color-primary-600, #2563eb)}.booking-room__extra-services-empty.sc-ir-room-extra-services{margin:0;padding:0.375rem 0;font-size:var(--wa-font-size-xs, 0.85rem);color:var(--wa-color-neutral-400, #a1a1aa);font-style:italic}`;

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
            } }, h("span", { slot: "summary", class: "booking-room__extra-services-toggle-label" }, collapsible.length, " more service", collapsible.length > 1 ? 's' : ''), h("div", { class: "booking-room__extra-services-list" }, collapsible.map((service, idx) => (h(Fragment, null, this.renderExtraServiceItem(service), idx < collapsible.length - 1 && h("wa-divider", null)))))))));
    }
    render() {
        const services = this.roomExtraServices;
        const canAdd = this.isEditable && !!this.unitId;
        if (!canAdd && services.length === 0) {
            return null;
        }
        const total = services.length;
        const inAgentMode = isAgentMode(this.agent);
        const guestServices = inAgentMode ? services.filter(s => s.agent === null || s.agent === undefined) : [];
        const agentServices = inAgentMode ? services.filter(s => s.agent !== null && s.agent !== undefined) : [];
        const agentName = this.booking.agent?.name ?? 'Agent';
        return (h("wa-card", { appearance: "filled", class: "booking-room__extra-services" }, h("div", { slot: "header", class: "booking-room__extra-services-header" }, h("span", { class: "booking-room__extra-services-label" }, h("span", { class: "booking-room__extra-services-title" }, "Extras"), total > 0 && h("span", { class: "booking-room__extra-services-count" }, total)), canAdd && (h(Fragment, null, h("wa-tooltip", { for: `add-extra-service-${this.room.identifier}` }, "Add extra service"), h("ir-custom-button", { id: `add-extra-service-${this.room.identifier}`, class: "booking-room__extra-services-add", iconBtn: true, size: "s", appearance: "plain", variant: "brand", onClickHandler: () => this.requestAddExtraService.emit() }, h("wa-icon", { style: { fontSize: '0.9rem' }, label: "Add extra service", name: "plus" }))))), inAgentMode ? (h(Fragment, null, h("div", { class: "booking-room__extra-services-group booking-room__extra-services-group--agent" }, h("p", { class: "booking-room__extra-services-group-label booking-room__extra-services-group-label--agent" }, agentName, h("span", null, "Folio")), agentServices.length === 0 ? h("p", { class: "booking-room__extra-services-empty" }, "No agent services added") : this.renderServiceGroup('agent', agentServices)), h("wa-divider", null), h("div", { class: "booking-room__extra-services-group booking-room__extra-services-group--guest" }, h("p", { class: "booking-room__extra-services-group-label" }, "Guest", h("span", null, "Folio")), guestServices.length === 0 ? h("p", { class: "booking-room__extra-services-empty" }, "No guest services added") : this.renderServiceGroup('guest', guestServices)))) : (this.renderServiceGroup('all', services))));
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
     * Contains information about the {locales.entries.Lcz_MainGuest} and additional guests, such as their name, date of birth, {locales.entries.Lcz_Nationality}, and ID details.
     */
    sharedPersons = [];
    /**
     * The total number of guests for the room.
     * Determines how many guest input forms to display in the UI.
     */
    totalGuests = 0;
    /**
     * A list of available countries.
     * Used to populate dropdowns for selecting the {locales.entries.Lcz_Nationality} of guests.
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
        return (h("ir-drawer", { key: '7ea2f676e32bf0705df6b5492deb666d3305738d', style: {
                '--ir-drawer-width': '60rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: this.roomName ? `Room ${this.roomName}` : 'Guest Details', open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && (h("ir-room-guests-form", { key: 'e1af0a5424f1bdab1d86cfcecb33027623a35bbc', sharedPersons: this.sharedPersons, roomName: this.roomName, countries: this.countries, totalGuests: this.totalGuests, identifier: this.identifier, bookingNumber: this.bookingNumber, checkIn: this.checkIn, language: this.language, onLoadingChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail;
            } })), h("div", { key: '99bf1d380ece49b37ca817869a84c975bcd0e174', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '351a68b068b4f2b8f84abc8b8de2c69a1608b0ec', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel ?? 'Save'), h("ir-custom-button", { key: 'eba9b88a9d7cc2861925c8992fcbb7cb78af030a', value: "save", loading: this.isLoading === 'save', size: "m", form: `room-guests__${this.identifier}`, type: "submit", variant: "brand" }, locales?.entries?.Lcz_Save ?? 'Save'), this.checkIn && (h("ir-custom-button", { key: '8b9e1e8749e42461f030f9971ef13d38bc2cc321', value: "save_checkin", loading: this.isLoading === 'save_checkin', size: "m", form: `room-guests__${this.identifier}`, type: "submit", variant: "brand" }, locales.entries?.Lcz_CheckIn ?? 'Check in')))));
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

const irRoomGuestsFormCss = () => `.sc-ir-room-guests-form-h{display:block;height:100%;position:relative;text-align:start !important;padding-bottom:1rem !important}.id-select.sc-ir-room-guests-form{border-top-right-radius:0;border-bottom-right-radius:0;border-right-width:0}.sc-ir-room-guests-form-h{display:block;width:100%}.guests-labels.sc-ir-room-guests-form{display:none}.sharing_persons_label.sc-ir-room-guests-form{display:none}.loading-container.sc-ir-room-guests-form{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.guest_document.sc-ir-room-guests-form input.sc-ir-room-guests-form{border-top-left-radius:0;border-bottom-left-radius:0}.guests-labels.sc-ir-room-guests-form *.sc-ir-room-guests-form,.sharing_persons_label.sc-ir-room-guests-form{margin-bottom:0.5rem;padding-bottom:0}.room-guest__info-container.sc-ir-room-guests-form{display:flex;flex:1 1 0%;align-items:center}.room-guest__document.sc-ir-room-guests-form::part(base):dir(ltr),.room-guest__document.sc-ir-room-guests-form [part~="base"]:dir(ltr),.room-guest__id-info.sc-ir-room-guests-form::part(combobox):dir(rtl),.room-guest__id-info.sc-ir-room-guests-form [part~="combobox"]:dir(rtl){border-top-left-radius:0;border-bottom-left-radius:0}.room-guest__document.sc-ir-room-guests-form{flex:1 1 0%}.room-guest__id-info.sc-ir-room-guests-form::part(combobox):dir(ltr),.room-guest__id-info.sc-ir-room-guests-form [part~="combobox"]:dir(ltr),.room-guest__document.sc-ir-room-guests-form::part(base):dir(rtl),.room-guest__document.sc-ir-room-guests-form [part~="base"]:dir(rtl){border-top-right-radius:0;border-bottom-right-radius:0}.room-guest__id-info.sc-ir-room-guests-form::part(combobox):dir(ltr),.room-guest__id-info.sc-ir-room-guests-form [part~="combobox"]:dir(ltr){border-right-width:0}.room-guest__id-info.sc-ir-room-guests-form::part(combobox):dir(rtl),.room-guest__id-info.sc-ir-room-guests-form [part~="combobox"]:dir(rtl){border-left-width:0}.room-guest__id-info[open].sc-ir-room-guests-form,.room-guest__id-info.sc-ir-room-guests-form:focus-visible,.room-guest__id-info.sc-ir-room-guests-form:focus-within{z-index:2}.room-guest__section.sc-ir-room-guests-form{display:flex;flex-direction:column;margin-bottom:1rem}.room-guest__section.sc-ir-room-guests-form p.sc-ir-room-guests-form{margin:0;padding:0}.guest_label.sc-ir-room-guests-form{width:100px;display:inline-block;position:relative;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height);margin-bottom:0.5em !important}@media (min-width: 768px){.sharing_persons_label.sc-ir-room-guests-form{display:block}.guest_country_picker.sc-ir-room-guests-form{margin-bottom:3px}.room-guest__section.sc-ir-room-guests-form{display:block}.guest-grid.sc-ir-room-guests-form{display:grid;grid-template-columns:minmax(0, 120px)        minmax(0, 120px)        minmax(0, 120px)        minmax(0, 120px)        minmax(0, 1fr);gap:0.5rem;align-items:flex-start}.guest_label.sc-ir-room-guests-form,.sharing_persons_heading.sc-ir-room-guests-form,.main_guest_heading.sc-ir-room-guests-form{display:none}}`;

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
     * Contains information about the {locales.entries.Lcz_MainGuest} and additional guests, such as their name, date of birth, {locales.entries.Lcz_Nationality}, and ID details.
     */
    sharedPersons = [];
    /**
     * The total number of guests for the room.
     * Determines how many guest input forms to display in the UI.
     */
    totalGuests = 0;
    /**
     * A list of available countries.
     * Used to populate dropdowns for selecting the {locales.entries.Lcz_Nationality} of guests.
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
    componentWillLoad() {
        this.init();
        this.initializeGuests();
    }
    async init() {
        try {
            this.isLoading = true;
            const [country, idTypes] = await Promise.all([this.bookingService.getUserDefaultCountry(), this.bookingService.getSetupEntriesByTableName('_ID_TYPE')]);
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
            if (error instanceof libExports.ZodError) {
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
            } }, h("section", { class: 'sheet-body' }, h("div", { class: "" }, h("div", { class: "guest-grid guests-labels" }, h("p", { class: "" }, locales.entries.Lcz_MainGuest), h("p", { class: "" }), h("p", { class: " " }, locales.entries.Lcz_DOB), h("p", { class: "" }, locales.entries.Lcz_Nationality), h("p", { class: " " }, locales.entries.Lcz_Documents)), h("h5", { class: "main_guest_heading" }, locales.entries.Lcz_MainGuest), this.guests.map((guest, idx) => {
            let isRowValid = true;
            try {
                validateSharedPerson(guest);
            }
            catch (error) {
                isRowValid = false;
            }
            // console.log(`row ${idx}=>${isRowValid}`);
            return (h(Fragment, null, idx === 1 && (h("div", { class: "d-flex mx-0 px-0" }, h("h5", { class: "mx-0 px-0 sharing_persons_heading" }, locales.entries.Lcz_PersonsSharingRoom), h("p", { class: "mx-0 px-0 sharing_persons_label" }, locales.entries.Lcz_PersonsSharingRoom))), h("div", { key: idx, class: "guest-grid" }, h("div", { class: "room-guest__section" }, h("label", { htmlFor: `first_name_${idx}`, class: "guest_label" }, "First name"), h("ir-validator", { class: "flex-grow-1", schema: ZSharedPerson.shape.first_name }, h("ir-input", { "aria-invalid": String(!!this.error['first_name'] && !isRowValid), size: "s", id: `first_name_${idx}`, placeholder: "First name", "onText-change": e => this.updateGuestInfo(idx, { first_name: e.detail }), value: guest.first_name, maxlength: 40 }))), h("div", { class: "room-guest__section" }, h("label", { class: "guest_label" }, "Last name"), h("ir-input", { "aria-invalid": String(!!this.error['last_name'] && !isRowValid), size: "s", id: `last_name_${idx}`, placeholder: "Last name", "onText-change": e => this.updateGuestInfo(idx, { last_name: e.detail }), value: guest.last_name, maxlength: 40 })), h("div", { class: "room-guest__section" }, h("p", { class: "guest_label" }, locales.entries.Lcz_DOB), h("ir-validator", { class: "flex-grow-1", schema: ZSharedPerson.shape.dob }, h("ir-input", { "aria-invalid": String(!!this.error['dob'] && !isRowValid), id: `dob_${idx}`, mask: dateMask, size: "s", placeholder: "", "onText-change": e => {
                    this.updateGuestInfo(idx, { dob: e.detail });
                }, value: guest.dob }))), h("div", { class: "room-guest__section" }, h("p", { class: "guest_label" }, locales.entries.Lcz_Nationality), h("div", { class: "flex-grow-1" }, h("ir-country-picker", { size: "s", variant: "modern", "aria-invalid": String(!!this.error['country_id'] && !guest.country_id), propertyCountry: this.propertyCountry, id: `{locales.entries.Lcz_Nationality}_${idx}`, error: !!this.error['country_id'] && !guest.country_id, country: this.countries?.find(c => c.id?.toString() === guest.country?.id?.toString()), onCountryChange: e => this.updateGuestInfo(idx, { country_id: e.detail?.id?.toString() ?? null, country: e.detail }), countries: this.countries }))), h("div", { class: "room-guest__section" }, h("p", { class: "guest_label" }, locales.entries.Lcz_Documents), h("div", { class: 'room-guest__info-container flex-grow-1' }, h("wa-select", { class: "room-guest__id-info", defaultValue: guest.id_info?.type?.code ?? this.idTypes[0]?.CODE_NAME, value: guest.id_info?.type?.code, onchange: e => {
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
                return (h("wa-option", { value: t['CODE_NAME'], label: label }, label));
            })), h("wa-input", { size: "s", "aria-invalid": String(!!this.error['number'] && !isRowValid), class: "room-guest__document", defaultValue: guest?.id_info?.number, value: guest?.id_info?.number, maxlength: 18, placeholder: "12345", onchange: e => this.updateGuestInfo(idx, {
                    id_info: {
                        ...this.guests[idx].id_info,
                        number: e.target.value,
                    },
                }) }))))));
        })))));
    }
};
IrRoomGuestsForm.style = irRoomGuestsFormCss();

const irRoomHeaderCss = () => `.booking-room__meal-report-button.sc-ir-room-header::part(base),.booking-room__meal-report-button.sc-ir-room-header [part~="base"]{height:auto;padding:0.375em 0.625em;font-size:var(--wa-font-size-2xs)}.booking-room__summary-row.sc-ir-room-header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--wa-space-xs, 0.25rem)}.booking-room__summary-text.sc-ir-room-header{margin:0;padding:0}.booking-room__summary-highlight.sc-ir-room-header{font-weight:600}.booking-room__price-row.sc-ir-room-header{display:flex;align-items:center;gap:var(--wa-space-xs)}.booking-room__price.sc-ir-room-header{font-weight:700;color:var(--wa-color-neutral-900);white-space:nowrap;text-align:right}.booking-room__actions.sc-ir-room-header{display:flex;align-items:center}`;

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
        return (h("div", { key: '1bb5af0796c89e443ea1f19982d352796215c4fc', class: "booking-room__summary-row" }, h("p", { key: '05fd9b70d7ed8f5584645bd41871206b540371b4', class: "booking-room__summary-text" }, h("span", { key: '116356796d7c951508b5f793dc5b1983fe66ab80', class: "booking-room__summary-highlight" }, this.myRoomTypeFoodCat || '', " "), " ", this.mealCodeName, ' ', this.room.rateplan.is_non_refundable && ` - ${locales.entries.Lcz_NonRefundable}`, ' ', this.isHalfBoard && (h("wa-button", { key: '3818dee1be87ba860a03c1096b9c842960e27cda', size: "xs", class: "booking-room__meal-report-button", appearance: "filled", variant: this.room?.hb_preference ? 'brand' : 'warning', onClick: () => this.openHbDialog.emit() }, this.room?.hb_preference === HbPreference.Lunch ? 'With lunch' : this.room?.hb_preference === HbPreference.Dinner ? 'With dinner' : 'Choose lunch or dinner'))), h("div", { key: '81c5dc3952d8c599b58278a3783c3bbc87adf1f8', class: "booking-room__price-row" }, h("span", { key: 'c013b3a3ae61ad63efc183e898457dc4f8aa633c', class: "booking-room__price" }, formatAmount(this.currency, this.room['gross_total'])), this.isEditable && (this.hasRoomEdit || this.hasRoomDelete || !!this.unitId) && (h("div", { key: 'd4a12cabff105fbcd4c0c5c6c886721415482de6', class: "booking-room__actions" }, h("wa-dropdown", { key: '402bf2f40522cbff842d17141435e4c3249f36f3', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": async (e) => {
                this.action.emit(e.detail.item.value);
            } }, h("ir-custom-button", { key: '8edfcd1e90dbb70b5c219765cee4f2d9e1bbe1e5', slot: "trigger", size: "s", class: "booking-room__edit-button", appearance: "plain", id: `actions-room-${this.room.identifier}`, iconBtn: true, variant: "neutral", style: { marginBottom: '4px' } }, h("wa-icon", { key: 'b4aeb6b049a0755cd265759eb501fad2064a3e9d', style: { fontSize: '1rem' }, label: "Actions", name: "ellipsis-vertical" })), this.hasRoomEdit && h("wa-dropdown-item", { key: '712b1489cefa43d8a1e3e4d26a61fb5bb20fce86', value: "edit" }, "Edit unit"), this.hasRoomEdit && h("wa-dropdown-item", { key: 'a89c588f64d3f7a13bdd8edfcc449d5b154abc39', value: "edit-rates" }, "Edit nightly rates"), isAgentMode(this.agent) && this.hasRoomEdit && h("wa-dropdown-item", { key: '36fbb693053fbc69cb447c461ea6e9fe9da096e9', value: "toggle" }, "Re-assign ", this.room.agent ? 'guest' : 'agent', " folio"), !!this.unitId && h("wa-dropdown-item", { key: '2b944f2cf3410a7e385fd3fd5760e308cd1a2e04', value: "add-extra-service" }, "Add extra service to this unit"), this.hasRoomDelete && (h("wa-dropdown-item", { key: '61c668e9832c81f148df6fb414ec08002259019b', value: "delete", variant: "danger" }, "Delete"))))))));
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
                title: 'Error',
                description: 'Failed to void document. Please try again.',
                position: 'top-right',
            });
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        const documentLabel = this.isInvoice ? 'invoice' : 'receipt';
        const creditDocumentLabel = this.isInvoice ? 'credit note' : 'credit receipt';
        return (h(Host, { key: '004595498b14ac38153da6cc4340457b64915d82' }, h("ir-dialog", { key: '05b8a74832926091bff0d14353e3f018b8c60c3f', label: "Alert", open: this.isOpen, lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
                this.request = null;
            } }, h("p", { key: '7666ffaf03281d1acd1cfb2d15c5a245ea11be91', class: "void-document-dialog__message" }, "Void ", documentLabel, " ", this.request?.documentNumber, " by generating a ", creditDocumentLabel, "?"), h("div", { key: '802eb1ad4184c2b2028cfae0893de919de3bda50', slot: "footer", class: "void-document-dialog__footer" }, h("ir-custom-button", { key: '85efd18a8ccf7437c4ba94c848a7896c4233c447', "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral", disabled: this.isLoading }, "Cancel"), h("ir-custom-button", { key: '1f727d72e14aeced9d33a4641bcf30f0f57d408b', loading: this.isLoading, onClickHandler: () => this.handleConfirm(), size: "m", variant: "danger" }, "Confirm")))));
    }
};
IrVoidDocumentDialog.style = irVoidDocumentDialogCss();

const otaLabelCss = () => `*.sc-ota-label{margin:0;padding:0}.sc-ota-label-h{display:flex;margin-bottom:5px;gap:5px}.label_title.sc-ota-label{min-width:max-content;padding:0;margin:0;font-weight:600}.ota-message-list.sc-ota-label{margin:0 3px;padding:0;overflow:hidden;width:100%;word-wrap:break-word !important;overflow-wrap:break-word !important}.ota-message-item.sc-ota-label{width:100%;line-height:1.5;margin:0;padding:0;word-wrap:break-word !important;overflow-wrap:break-word !important}.ota-message-item.sc-ota-label::before{content:'- ';margin-right:0.25rem}.ota-visibility-toggle.sc-ota-label{background:white;color:var(--blue);padding:0;margin:0;margin-left:3px;font-size:12px;border:0}.ota-visibility-toggle.sc-ota-label:hover{color:#355270}.ota-message-list.sc-ota-label{margin:0 3px;padding:0;overflow:hidden;width:100%;word-wrap:break-word !important;overflow-wrap:break-word !important;white-space:normal;list-style:none}.ota-message-item.sc-ota-label{width:100%;line-height:1.5;margin:0 0 0 1.2em;padding:0;word-wrap:break-word !important;overflow-wrap:break-word !important;white-space:normal;position:relative}`;

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
        return (h(Host, null, h("p", { class: 'label_title' }, this.label), h("ul", { class: "ota-message-list" }, displayedRemarks.map((remark, index) => (h("li", { key: v4(), class: "ota-message-item" }, remark.statement, ' ', this.remarks.length > this.maxVisibleItems && index === displayedRemarks.length - 1 && (h("button", { class: "ota-visibility-toggle", onClick: this.toggleShowAll }, this.showAll ? locales.entries.Lcz_ShowLess : locales.entries.Lcz_ShowMore))))))));
    }
};
OtaLabel.style = otaLabelCss();

export { IglDayUseUnitList as igl_day_use_unit_list, IrAgentBilling as ir_agent_billing, IrApplicablePolicies as ir_applicable_policies, IrArrivalTimeDialog as ir_arrival_time_dialog, IrBilling as ir_billing, IrBillingDrawer as ir_billing_drawer, IrBookingAssignItems as ir_booking_assign_items, IrBookingCityLedger as ir_booking_city_ledger, IrBookingDetails as ir_booking_details, IrBookingDetailsDrawer as ir_booking_details_drawer, IrBookingEditor as ir_booking_editor, IrBookingEditorDrawer as ir_booking_editor_drawer, IrBookingEditorForm as ir_booking_editor_form, IrBookingEditorHeader as ir_booking_editor_header, IrBookingExtraNote as ir_booking_extra_note, IrBookingGuarantee as ir_booking_guarantee, IrBookingHeader as ir_booking_header, IrBookingPricingDrawer as ir_booking_pricing_drawer, IrBookingPricingForm as ir_booking_pricing_form, IrBookingRooms as ir_booking_rooms, IrBookingSourceEditorDialog as ir_booking_source_editor_dialog, IrBookingSourceEditorForm as ir_booking_source_editor_form, IrCheckoutDialog as ir_checkout_dialog, IrCityLedgerFiscalDocumentsTable as ir_city_ledger_fiscal_documents_table, IrCityLedgerTransactionDrawer as ir_city_ledger_transaction_drawer, IrCityLedgerTransactionForm as ir_city_ledger_transaction_form, IrClAdjustmentFields as ir_cl_adjustment_fields, IrClCreditNoteFields as ir_cl_credit_note_fields, IrClDebitNoteFields as ir_cl_debit_note_fields, IrClInvoiceDialog as ir_cl_invoice_dialog, IrClInvoiceForm as ir_cl_invoice_form, IrClOpeningBalanceFields as ir_cl_opening_balance_fields, IrClPaymentFields as ir_cl_payment_fields, IrDepartureTimeDialog as ir_departure_time_dialog, IrEventsLog as ir_events_log, IrExtraService as ir_extra_service, IrExtraServiceConfig as ir_extra_service_config, IrExtraServiceConfigForm as ir_extra_service_config_form, IrExtraServices as ir_extra_services, IrGuestBilling as ir_guest_billing, IrGuestInfoDrawer as ir_guest_info_drawer, IrGuestInfoForm as ir_guest_info_form, IrHbPreferenceDialog as ir_hb_preference_dialog, IrPaymentAnalytics as ir_payment_analytics, IrPaymentDetails as ir_payment_details, IrPaymentFolio as ir_payment_folio, IrPaymentFolioForm as ir_payment_folio_form, IrPaymentItem as ir_payment_item, IrPaymentSummary as ir_payment_summary, IrPaymentsFolio as ir_payments_folio, IrPickup as ir_pickup, IrPickupForm as ir_pickup_form, IrPickupView as ir_pickup_view, IrPmsLogs as ir_pms_logs, IrReservationInformation as ir_reservation_information, IrRoom as ir_room, IrRoomBreakdown as ir_room_breakdown, IrRoomDetails as ir_room_details, IrRoomExtraServices as ir_room_extra_services, IrRoomGuests as ir_room_guests, IrRoomGuestsForm as ir_room_guests_form, IrRoomHeader as ir_room_header, IrVoidDocumentDialog as ir_void_document_dialog, OtaLabel as ota_label };

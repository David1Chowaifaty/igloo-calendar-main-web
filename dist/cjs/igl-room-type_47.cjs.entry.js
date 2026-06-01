'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const booking_service = require('./booking.service-88876e31.js');
const index$1 = require('./index-e559fde8.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
const Token = require('./Token-8fd11984.js');
const moment = require('./moment-1780b03a.js');
const utils = require('./utils-df5f5064.js');
const locales_store = require('./locales.store-32782582.js');
const functions = require('./functions-9552a026.js');
const utils$1 = require('./utils-e7c68dba.js');
const axios = require('./axios-6e678d52.js');
const room_service = require('./room.service-f9117e70.js');
const payment_service = require('./payment.service-87fff556.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
const booking = require('./booking-9355b810.js');
const agents_service = require('./agents.service-dcea1c92.js');
const index$2 = require('./index-8bb117a0.js');
const index$3 = require('./index-e9a28e3e.js');
const v4 = require('./v4-9b297151.js');
const enums = require('./enums-e1d0fe3c.js');
const property_service = require('./property.service-d142a359.js');
const global_variables = require('./global.variables-108c9c1e.js');
require('./index-fbf1fe1d.js');
require('./type-53035218.js');

const iglRoomTypeCss = ".sc-igl-room-type-h{display:block}.margin-bottom-8.sc-igl-room-type{margin-bottom:8px !important}.roomtype__name.sc-igl-room-type{margin:0;padding:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;margin-bottom:0.5rem;color:var(--wa-color-text-normal)}";
const IglRoomTypeStyle0 = iglRoomTypeCss;

const IglRoomType = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    roomType;
    bookingType = 'PLUS_BOOKING';
    ratePricingMode = [];
    roomTypeId = null;
    currency;
    isBookDisabled;
    unavailableRatePlanIds = new Set();
    validBookingTypes = ['PLUS_BOOKING', 'ADD_ROOM', 'EDIT_BOOKING', 'SPLIT_BOOKING'];
    render() {
        const isValidBookingType = this.validBookingTypes.includes(this.bookingType);
        return (index.h(index.Host, { key: '8e6f5cc9b310d3d4316c18e21e987d3692336b81' }, isValidBookingType && this.roomType.rateplans?.length > 0 && index.h("h5", { key: '3da016cd19cdc5cef2bd5b57dca7a7055b19d807', class: "roomtype__name" }, this.roomType.name), this.roomType.rateplans?.map(ratePlan => {
            if (!!ratePlan.variations) {
                let shouldBeDisabled = this.roomTypeId === this.roomType.id;
                const visibleInventory = booking_service.getVisibleInventory(this.roomType.id, ratePlan.id);
                return (index.h("igl-rate-plan", { unavailableRatePlanIds: this.unavailableRatePlanIds, isBookDisabled: this.isBookDisabled, visibleInventory: visibleInventory, key: `rate-plan-${ratePlan.id}`, ratePricingMode: this.ratePricingMode, class: isValidBookingType ? '' : '', currency: this.currency, ratePlan: ratePlan, roomTypeId: this.roomType.id, bookingType: this.bookingType, shouldBeDisabled: shouldBeDisabled }));
            }
            return null;
        })));
    }
};
IglRoomType.style = IglRoomTypeStyle0;

const irAgentBillingCss = ".sc-ir-agent-billing-h{display:flex;flex-direction:column;height:100%}.billing__container.sc-ir-agent-billing{display:flex;flex-direction:column;height:100%;gap:var(--wa-space-l);padding:0 var(--wa-space-l)}.agent-billing__table.sc-ir-agent-billing{border:0;border-radius:0}.billing__section-title-row.sc-ir-agent-billing{display:flex;align-items:center;justify-content:space-between}.billing__section-title.sc-ir-agent-billing{margin:0;padding:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m)}.billing__actions-row.sc-ir-agent-billing{display:flex;align-items:center;justify-content:flex-end;gap:0.5rem}.billing__invoice-nbr.sc-ir-agent-billing{margin:0;padding:0}.billing__invoice-nbr.--secondary.sc-ir-agent-billing{font-size:0.75rem}.billing__price-col.sc-ir-agent-billing{text-align:end !important}.billing__cards.sc-ir-agent-billing{display:flex;flex-direction:column;gap:var(--wa-space-m);padding-bottom:var(--wa-space-l) !important}.billing__card.sc-ir-agent-billing{display:block}.billing__card-header.sc-ir-agent-billing{display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem}.billing__card-header-info.sc-ir-agent-billing{display:flex;flex-direction:column}.billing__card-number.sc-ir-agent-billing{margin:0;font-weight:var(--wa-font-weight-heading);font-family:var(--wa-font-family-heading)}.billing__card-type.sc-ir-agent-billing{margin:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-secondary)}.billing__card-download-btn.sc-ir-agent-billing{display:flex;align-items:center}.billing__card-details.sc-ir-agent-billing{display:flex;gap:var(--wa-space-xs);justify-content:space-between}.billing__card-detail.sc-ir-agent-billing{display:flex;flex-direction:column}.billing__card-detail-label.sc-ir-agent-billing{margin:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.billing__card-detail-label.--amount.sc-ir-agent-billing{text-align:end !important}.billing__card-detail-value.sc-ir-agent-billing{margin:0;font-weight:var(--wa-font-weight-regular);font-size:var(--wa-font-size-s)}.billing__card-void-btn.sc-ir-agent-billing{flex:1 1 0%}.billing__card-footer.sc-ir-agent-billing{display:flex}.table-container.sc-ir-agent-billing{display:none}.billing__card.sc-ir-agent-billing::part(footer){padding-top:1rem;padding-bottom:1rem}@media (min-width: 768px){.billing__cards.sc-ir-agent-billing{display:none}.table-container.sc-ir-agent-billing{display:block}}";
const IrAgentBillingStyle0 = irAgentBillingCss;

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
    tokenService = new Token.Token();
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
    render() {
        return (index.h(index.Host, { key: 'fdf2ef086626a4e481e197509c6e96579596a1c9' }, index.h("div", { key: '3120cbef8fcf721b2cbc91016a096242fa61fbd1', class: "billing__container" }, index.h("div", { key: '8879e8dafddd99b8ea65366135c0d48c1da38719', class: "billing__section-title-row" }, index.h("h4", { key: 'd301981ec2837b82067e03197c59a830cbeb77d9', class: "billing__section-title" }, "Issued documents"), index.h("ir-custom-button", { key: 'ac243077a8b047d82110235fc6a2eedd776b6f8d', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.invoiceDialogRef.openModal();
            }, appearance: 'accent', class: "booking-header__stretched-btn", size: "small", variant: "brand" }, "Issue Invoice")), index.h("ir-city-ledger-fiscal-documents-table", { key: '61ee00f6fc6d9a7cab299a334b39870c542b7d5b', class: 'agent-billing__table', rows: this.fiscalDocuments, isLoading: this.isLoading, hasFetched: this.hasFetched, agentId: this.booking?.agent?.id ?? null, currencySymbol: calendarData.calendar_data.property?.currency?.symbol ?? '$', fromDate: this.booking?.from_date ?? null, toDate: this.booking?.to_date ?? null, hasDates: true, ticket: this.tokenService.getToken(), propertyId: calendarData.calendar_data.property?.id, onFetchRequested: () => this.fetchFiscalDocuments() })), index.h("ir-cl-invoice-dialog", { key: '8da2aa8b28bae011b92b64c7a527bb5d037cdef6', mode: "booking", agentId: this.booking.agent?.id, bookingNbr: this.booking.booking_nbr, startDate: this.booking.from_date, endDate: this.booking.to_date, currencyId: calendarData.calendar_data.property.currency.id, rooms: this.booking.rooms ?? [], ref: el => (this.invoiceDialogRef = el), onInvoiceIssued: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.fetchFiscalDocuments();
            } })));
    }
    static get watchers() { return {
        "booking": ["handleBookingChange"]
    }; }
};
IrAgentBilling.style = IrAgentBillingStyle0;

// HelpDocButton.tsx
const HelpDocButton = ({ message, href, class: wrapperClass }) => (index.h("div", { class: wrapperClass },
    index.h("wa-tooltip", { for: "help-button" }, message),
    index.h("wa-button", { id: "help-button", href: href, size: "small", target: "_blank", "aria-label": message, appearance: "plain", variant: "neutral" },
        index.h("wa-icon", { name: "circle-info", style: { fontSize: '1rem' } }))));

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
            groupedRooms.forEach(grouping => {
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
        if (!rooms.length) {
            throw new Error('Cannot request applicable policies without booking rooms.');
        }
        const groupMap = new Map();
        rooms.forEach(room => {
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

const irApplicablePoliciesCss = ".sc-ir-applicable-policies-h{display:flex;flex-direction:column;gap:1rem}.applicable-policies__container.sc-ir-applicable-policies{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:1rem}.applicable-policies__title.sc-ir-applicable-policies{font-size:1rem;font-weight:700;padding:0;margin:0}.applicable-policies__no-penalty.sc-ir-applicable-policies{padding:0;margin:0;font-size:0.875rem}.applicable-policies__statements.sc-ir-applicable-policies{box-sizing:border-box;padding:0}.applicable-policies__statements.sc-ir-applicable-policies::part(message){max-height:245px;overflow-y:auto;display:flex;flex-direction:column;padding:1em;gap:0.5rem}.applicable-policies__highlighted-bracket.sc-ir-applicable-policies{color:var(--wa-color-brand-50)}.applicable-policies__statement.sc-ir-applicable-policies{display:flex;flex-direction:column;border-bottom:1px solid var(--wa-color-neutral-70);padding-bottom:0.5rem}.applicable-policies__statement.sc-ir-applicable-policies:last-child{border-bottom:0;padding-bottom:0}.applicable-policies__room.sc-ir-applicable-policies{padding:0;margin:0;padding-bottom:0.5rem}.applicable-policies__bracket.sc-ir-applicable-policies{display:grid;grid-template-columns:repeat(2, 1fr);gap:0.25rem;font-size:0.875rem;padding-bottom:0.5rem}.applicable-policies__bracket-dates.sc-ir-applicable-policies{display:flex;align-items:center;gap:0.5rem;padding:0;margin:0}.applicable-policies__amount.sc-ir-applicable-policies{text-align:right;padding:0;margin:0;font-weight:600}.applicable-policies__statement-text.sc-ir-applicable-policies{padding:0;margin:0}.applicable-policies__brackets-table.sc-ir-applicable-policies{display:none}.applicable-policies__guarantee.sc-ir-applicable-policies{box-sizing:border-box;padding:0.5rem 1rem;margin-bottom:0.5rem;font-size:0.875rem}.applicable-policies__guarantee.sc-ir-applicable-policies::part(message){display:flex;align-items:center;justify-content:space-between}.applicable-policies__guarantee-info.sc-ir-applicable-policies{display:flex;align-items:center;gap:0.5rem}.applicable-policies__guarantee-date.sc-ir-applicable-policies{color:var(--text-muted, #666);padding:0;margin:0}.applicable-policies__guarantee-amount.sc-ir-applicable-policies{font-weight:600;color:var(--text-strong, #222);padding:0;margin:0}.applicable-policies__guarantee-label.sc-ir-applicable-policies{color:var(--wa-color-danger-50);font-weight:700;padding:0;margin:0}.applicable-policies__guarantee-action.sc-ir-applicable-policies{width:fit-content}@media (min-width: 768px){.applicable-policies__brackets.sc-ir-applicable-policies{display:none}.applicable-policies__brackets-table.sc-ir-applicable-policies{display:block;width:100%;font-size:0.875rem}.applicable-policies__brackets-table.sc-ir-applicable-policies table.sc-ir-applicable-policies{width:100%}.applicable-policies__amount.sc-ir-applicable-policies,.applicable-policies__bracket-dates.sc-ir-applicable-policies{white-space:nowrap}.applicable-policies__statement-text.sc-ir-applicable-policies{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}}";
const IrApplicablePoliciesStyle0 = irApplicablePoliciesCss;

const IrApplicablePolicies = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.generatePayment = index.createEvent(this, "generatePayment", 7);
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
                leftLabel: `${momentCheckInDate.format('MMM DD')} onwards`,
                showArrow: false,
                rightLabel: '',
            };
        }
        return {
            leftLabel: bracketDueDate.format('MMM DD'),
            showArrow: true,
            rightLabel: moment.hooks(checkInDate, 'YYYY-MM-DD').format('MMM DD, YYYY'),
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
                leftLabel: 'Until',
                showArrow: false,
                rightLabel: nextBracketDueDate.isSame(momentCheckInDate, 'dates')
                    ? nextBracketDueDate.clone().add(-1, 'days').format('MMM DD, YYYY')
                    : nextBracketDueDate.format('MMM DD, YYYY'),
            };
        }
        if (moment.hooks(bracket.due_on, 'YYYY-MM-DD').isSameOrAfter(momentCheckInDate, 'days')) {
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
                rightLabel: moment.hooks(checkInDate).format('MMM DD, YYYY'),
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
        return `${cancelation_penality_as_if_today < 0 ? 'Refund' : 'Charge'} ${utils.formatAmount(calendarData.calendar_data.currency.symbol, Math.abs(cancelation_penality_as_if_today))} ${label}`;
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
        return (index.h(index.Host, null, this.guaranteeAmount !== 0 && (index.h("section", null, index.h("wa-callout", { variant: "danger", class: "applicable-policies__guarantee" }, index.h("div", { class: "applicable-policies__guarantee-info" }, index.h("p", { class: "applicable-policies__guarantee-date" }, moment.hooks(this.booking.booked_on.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), index.h("p", { class: "applicable-policies__guarantee-amount" }, index.h("span", { class: "px-1" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, remainingGuaranteeAmount < 0 ? Math.abs(remainingGuaranteeAmount) : this.guaranteeAmount))), index.h("p", { class: "applicable-policies__guarantee-label" }, "Guarantee ", remainingGuaranteeAmount < 0 ? 'balance' : '')), remainingGuaranteeAmount < 0 && (index.h("div", { class: "applicable-policies__guarantee-action" }, index.h("ir-custom-button", { onClickHandler: () => {
                this.generatePayment.emit({
                    amount: Math.abs(remainingGuaranteeAmount),
                    currency: calendarData.calendar_data.currency,
                    due_on: moment.hooks().format('YYYY-MM-DD'),
                    pay_type_code: null,
                    reason: '',
                    type: 'OVERDUE',
                });
            }, size: "small" }, "Pay")))))), index.h("section", null, index.h("div", { class: "applicable-policies__container" }, index.h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("p", { class: "applicable-policies__title font-size-large p-0 m-0" }, "Cancellation Schedule"), index.h(HelpDocButton, { message: "Help", href: "https://help.igloorooms.com/extranet/booking-details/guarantee-and-cancellation" })), index.h("p", { class: "applicable-policies__no-penalty" }, this.generateCancellationStatement())), this.cancellationStatements?.length > 0 && this.cancellationStatements.every(e => e.brackets.length > 0) && this.shouldShowCancellationBrackets && (index.h("wa-callout", { variant: "brand", class: "applicable-policies__statements" }, this.cancellationStatements?.map(statement => {
            const currentBracket = this._getCurrentBracket(statement.brackets);
            // const isTodaySameOrAfterCheckInDate = moment().isSameOrAfter(moment(statement.checkInDate, 'YYYY-MM-DD').add(1, 'days'));
            return (index.h("div", { class: "applicable-policies__statement" }, this.cancellationStatements.length > 1 && (index.h("p", { class: "applicable-policies__room" }, index.h("b", null, statement.roomType.name), " ", statement.ratePlan['short_name'], " ", statement.ratePlan.is_non_refundable ? ` - ${locales_store.locales.entries.Lcz_NonRefundable}` : '')), index.h("div", { class: "applicable-policies__brackets" }, statement.brackets.map((bracket, idx) => {
                const { leftLabel, rightLabel, showArrow } = this.getBracketLabelsAndArrowState({
                    index: idx,
                    bracket,
                    brackets: statement.brackets,
                    checkInDate: statement.checkInDate,
                });
                const isInCurrentBracket = moment.hooks(bracket.due_on, 'YYYY-MM-DD').isSame(currentBracket, 'date');
                return (index.h("div", { class: { 'applicable-policies__bracket': true, 'applicable-policies__highlighted-bracket': isInCurrentBracket } }, index.h("p", { class: "applicable-policies__bracket-dates" }, leftLabel, " ", showArrow && index.h("ir-icons", { name: "arrow_right", class: "applicable-policies__icon", style: { '--icon-size': '0.875rem' } }), ' ', rightLabel), index.h("p", { class: "applicable-policies__amount" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, bracket.gross_amount)), index.h("p", { class: "applicable-policies__statement-text" }, bracket.amount === 0 ? 'No penalty' : bracket.statement)));
            })), index.h("div", { class: "applicable-policies__brackets-table" }, index.h("table", null, index.h("tbody", null, statement.brackets.map((bracket, idx) => {
                const { leftLabel, rightLabel, showArrow } = this.getBracketLabelsAndArrowState({
                    index: idx,
                    bracket,
                    brackets: statement.brackets,
                    checkInDate: statement.checkInDate,
                });
                const isInCurrentBracket = moment.hooks(bracket.due_on, 'YYYY-MM-DD').isSame(currentBracket, 'date');
                return (index.h("tr", { class: { 'applicable-policies__highlighted-bracket': isInCurrentBracket } }, index.h("td", { class: "applicable-policies__bracket-dates" }, leftLabel, " ", showArrow && index.h("ir-icons", { name: "arrow_right", class: "applicable-policies__icon", style: { '--icon-size': '0.875rem' } }), ' ', rightLabel), index.h("td", { class: "applicable-policies__amount px-1" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, bracket.gross_amount)), index.h("td", { class: "applicable-policies__statement-text" }, bracket.amount === 0 ? 'No penalty' : bracket.statement)));
            }))))));
        }))))));
    }
    static get watchers() { return {
        "booking": ["handleBookingChange"]
    }; }
};
IrApplicablePolicies.style = IrApplicablePoliciesStyle0;

const irArrivalTimeDialogCss = ".sc-ir-arrival-time-dialog-h{display:block}";
const IrArrivalTimeDialogStyle0 = irArrivalTimeDialogCss;

const IrArrivalTimeDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
    }
    booking;
    arrivalTime = [];
    isLoading = false;
    open = false;
    selectedArrivalTime = '';
    resetBookingEvt;
    bookingService = new booking_service.BookingService();
    async openDialog() {
        this.selectedArrivalTime = this.booking?.arrival?.code || '';
        this.open = true;
    }
    async closeDialog() {
        this.open = false;
    }
    updateArrivalTime(value) {
        this.selectedArrivalTime = value;
    }
    getArrivalDescription(code) {
        const entry = this.arrivalTime.find(time => time.CODE_NAME === code);
        return entry?.CODE_VALUE_EN || this.booking?.arrival?.description || '';
    }
    async saveArrivalTime() {
        if (!this.selectedArrivalTime || this.selectedArrivalTime === this.booking?.arrival?.code) {
            this.closeDialog();
            return;
        }
        try {
            this.isLoading = true;
            const booking = {
                assign_units: true,
                is_pms: true,
                is_direct: this.booking.is_direct,
                is_backend: true,
                is_in_loyalty_mode: this.booking.is_in_loyalty_mode,
                promo_key: this.booking.promo_key,
                extras: this.booking.extras,
                agent: this.booking.agent,
                booking: {
                    ...this.booking,
                    arrival: {
                        code: this.selectedArrivalTime,
                        description: this.getArrivalDescription(this.selectedArrivalTime),
                    },
                    from_date: this.booking.from_date,
                    to_date: this.booking.to_date,
                    remark: this.booking.remark,
                    booking_nbr: this.booking.booking_nbr,
                    property: this.booking.property,
                    booked_on: this.booking.booked_on,
                    source: this.booking.source,
                    rooms: this.booking.rooms,
                    currency: this.booking.currency,
                    guest: this.booking.guest,
                },
                pickup_info: this.booking.pickup_info,
            };
            const res = await this.bookingService.doReservation(booking);
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
    render() {
        return (index.h("ir-dialog", { key: 'e7641fc491023f70a2cfbec4a95361131ab0d7d2', label: "Edit Arrival Time", open: this.open, onIrDialogHide: () => {
                this.open = false;
            } }, index.h("wa-select", { key: '41ed1fb29390d57b8efea46870f1d369f241cdcc', size: "small", value: this.selectedArrivalTime, defaultValue: this.selectedArrivalTime, onchange: e => this.updateArrivalTime(e.target.value) }, this.arrivalTime.map(time => (index.h("wa-option", { value: time.CODE_NAME, selected: time.CODE_NAME === this.selectedArrivalTime }, time.CODE_VALUE_EN)))), index.h("div", { key: '145aa32b62d144ae64d876ff886a92322e0a492f', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '1a1a109d225a8fe467ab40c0c338e44eeab33a40', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => this.closeDialog() }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { key: 'c8fea34512818c0371006cb9b80e04df0c5d2ddb', size: "medium", variant: "brand", onClickHandler: () => this.saveArrivalTime(), loading: this.isLoading }, locales_store.locales.entries.Lcz_Save))));
    }
};
IrArrivalTimeDialog.style = IrArrivalTimeDialogStyle0;

const irAssignmentToggleDialogCss = ".sc-ir-assignment-toggle-dialog-h{display:contents}.assignment-toggle-dialog__message.sc-ir-assignment-toggle-dialog{margin:0;font-size:0.9375rem;line-height:1.5;color:var(--wa-color-neutral-700, #3f3f46)}.assignment-toggle-dialog__footer.sc-ir-assignment-toggle-dialog{display:flex;justify-content:flex-end;gap:0.5rem}";
const IrAssignmentToggleDialogStyle0 = irAssignmentToggleDialogCss;

const IrAssignmentToggleDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.confirmToggle = index.createEvent(this, "confirmToggle", 7);
    }
    /** Dialog header title */
    label = 'Are you sure?';
    /** Message shown inside the dialog */
    message;
    /** Confirm button label */
    confirmLabel = 'Confirm';
    /** Cancel button label */
    cancelLabel = 'Cancel';
    /** Controls the loading spinner on the confirm button — set by the parent while the async operation runs */
    loading = false;
    /** Emitted when the user clicks confirm */
    confirmToggle;
    dialogRef;
    async openModal() {
        this.dialogRef?.openModal();
    }
    async closeModal() {
        this.dialogRef?.closeModal();
    }
    render() {
        return (index.h(index.Host, { key: '840ea3ca7668d985dc6942340d6a8d2cd372b60a' }, index.h("ir-dialog", { key: 'd7be420a7f5d7515347cc8eac8af65dd5b82889e', label: this.label, lightDismiss: false, ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, index.h("p", { key: 'b67871216ccf0e73c50d03ac8933a768693ffcfb', class: "assignment-toggle-dialog__message" }, index.h("slot", { key: '5a20b8edb83dbdb3fcf26bb66502aa8b8a23521c', name: "message" }, this.message)), index.h("div", { key: 'fc3bce8a6bf3338dbd822f154da85354930dabf7', slot: "footer", class: "assignment-toggle-dialog__footer" }, index.h("ir-custom-button", { key: '66273467d63b7e57e480ecccbf7b9318abdb94ff', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close", disabled: this.loading }, this.cancelLabel), index.h("ir-custom-button", { key: 'e0b198f9ca890507bc51c66195af7a2d6bca268b', variant: "brand", size: "medium", loading: this.loading, onClickHandler: () => this.confirmToggle.emit() }, this.confirmLabel)))));
    }
};
IrAssignmentToggleDialog.style = IrAssignmentToggleDialogStyle0;

const irBillingCss = ".sc-ir-billing-h{display:flex;flex-direction:column;height:100%}";
const IrBillingStyle0 = irBillingCss;

const IrBilling = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.billingClose = index.createEvent(this, "billingClose", 7);
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
                }, active: this.currentTab }, index.h("wa-tab", { panel: "guest", disabled: this.isAllServicesAgentOwned }, "Guest"), index.h("wa-tab", { panel: "agent" }, "Agent"), index.h("wa-tab-panel", { name: "guest" }, this.currentTab === 'guest' && index.h("ir-guest-billing", { booking: this.booking })), index.h("wa-tab-panel", { name: "agent" }, this.currentTab === 'agent' && index.h("ir-agent-billing", { booking: this.booking }))));
        }
        return index.h("ir-guest-billing", { style: { paddingTop: '1.5rem' }, booking: this.booking });
    }
    static get watchers() { return {
        "agent": ["handleBookingChange"]
    }; }
};
IrBilling.style = IrBillingStyle0;

const irBillingDrawerCss = ".sc-ir-billing-drawer-h{display:block}.billing__drawer.sc-ir-billing-drawer::part(footer){display:none}";
const IrBillingDrawerStyle0 = irBillingDrawerCss;

const IrBillingDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.billingClose = index.createEvent(this, "billingClose", 7);
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
        return (index.h("ir-drawer", { key: 'd587e8c598fafbf729a570d0ef9bc4191cb9d381', style: {
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
            }, open: this.open, label: "Billing" }, this.open && index.h("ir-billing", { key: '605196ac8c45251e247a1ea050870c557894ce14', isAllServicesAgentOwned: this.isAllServicesAgentOwned, booking: this.booking, agent: this.agent })));
    }
};
IrBillingDrawer.style = IrBillingDrawerStyle0;

const irBookingAssignItemsCss = "@layer wa-utilities {\n  .sc-ir-booking-assign-items-h[size='small'],\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  .sc-ir-booking-assign-items-h[size='medium'],\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  .sc-ir-booking-assign-items-h[size='large'],\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n\n.sc-ir-booking-assign-items-h {\n  display: block;\n}\n\n.assign-container.sc-ir-booking-assign-items {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  margin-top: 1rem;\n}\n\n.assign-intro.sc-ir-booking-assign-items {\n  font-size: 0.875rem;\n  color: var(--wa-color-neutral-600, #6b7280);\n  margin: 0;\n  line-height: 1.5;\n}\n\n.assign-intro.sc-ir-booking-assign-items strong.sc-ir-booking-assign-items {\n  color: var(--wa-color-neutral-900, #111827);\n  font-weight: 600;\n}\n\n.assign-section.sc-ir-booking-assign-items {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.assign-section__label.sc-ir-booking-assign-items {\n  display: inline-block;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  color: var(--wa-form-control-label-color);\n  font-weight: var(--wa-form-control-label-font-weight);\n  line-height: var(--wa-form-control-label-line-height);\n  margin-block-start: 0.5em;\n}\n\n.assign-item.sc-ir-booking-assign-items {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.625rem 0.875rem;\n  border-radius: var(--wa-border-radius-m);\n  border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);\n  cursor: pointer;\n  user-select: none;\n  transition:\n    background-color 0.12s ease,\n    border-color 0.12s ease,\n    box-shadow 0.12s ease;\n  background-color: var(--wa-color-surface-default);\n}\n\n.assign-item.sc-ir-booking-assign-items:hover {\n  background-color: color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover));\n}\n\n.assign-item.sc-ir-booking-assign-items:focus-visible {\n  outline: 2px solid var(--wa-color-brand-border-loud, #60a5fa);\n  outline-offset: 1px;\n}\n\n.assign-item--checked.sc-ir-booking-assign-items {\n  border-color: var(--wa-color-brand-border-loud, #60a5fa);\n  background-color: var(--wa-color-brand-fill-quiet, #eff6ff);\n}\n\n.assign-item--checked.sc-ir-booking-assign-items:hover {\n  background-color: var(--wa-color-brand-fill-quiet, #eff6ff);\n}\n\n.assign-item__text.sc-ir-booking-assign-items {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n  min-width: 0;\n}\n\n.assign-item__label.sc-ir-booking-assign-items {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--wa-color-neutral-900, #111827);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.assign-item__sublabel.sc-ir-booking-assign-items {\n  font-size: 0.75rem;\n  color: var(--wa-color-neutral-500, #6b7280);\n}\n\n\n.assign-item__room-header.sc-ir-booking-assign-items {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.375rem;\n}\n\n.assign-item__rateplan.sc-ir-booking-assign-items {\n  font-size: 0.8125rem;\n  color: var(--wa-color-neutral-600, #6b7280);\n}\n\n.assign-item__badge.sc-ir-booking-assign-items {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  padding: 0.125rem 0.4375rem;\n  border-radius: var(--wa-border-radius-pill, 9999px);\n}\n\n.assign-item__badge--nr.sc-ir-booking-assign-items {\n  background-color: var(--wa-color-danger-fill-quiet, #fef2f2);\n  color: var(--wa-color-danger-on-quiet, #b91c1c);\n  border: 1px solid var(--wa-color-danger-border-quiet, #fecaca);\n}\n\n.assign-item__date.sc-ir-booking-assign-items {\n  font-size: 0.75rem;\n  color: var(--wa-color-neutral-500, #6b7280);\n  margin-top: 0.125rem;\n}";
const IrBookingAssignItemsStyle0 = irBookingAssignItemsCss;

const IrBookingAssignItems = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bookingSelectionChange = index.createEvent(this, "bookingSelectionChange", 7);
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
            } }, index.h("wa-checkbox", { checked: checked, onchange: () => this.toggleItem(item.key) }), index.h("div", { class: "assign-item__text" }, index.h("div", { class: "assign-item__room-header" }, index.h("span", { class: "assign-item__label" }, item.label), item.ratePlanShortName && index.h("span", { class: "assign-item__rateplan" }, item.ratePlanShortName), item.unitName && index.h("ir-unit-tag", { unit: item.unitName }), item.isNonRefundable && index.h("span", { class: "assign-item__badge assign-item__badge--nr" }, "Non-refundable")), item.fromDate && item.toDate && (index.h("ir-date-view", { class: "assign-item__date", format: "ddd, MMM DD, YYYY", from_date: item.fromDate, to_date: item.toDate, showDateDifference: false })))));
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
            } }), index.h("div", { class: "assign-item__text" }, index.h("div", { class: "assign-item__room-header" }, index.h("span", { class: "assign-item__label" }, item.label), item.price != null && item.price > 0 && index.h("span", { class: "assign-item__rateplan" }, utils.formatAmount(item.currencySymbol, item.price))), item.fromDate && (index.h("ir-date-view", { class: "assign-item__date", format: "ddd, MMM DD, YYYY", from_date: item.fromDate, to_date: item.toDate, showDateDifference: false })))));
    }
    render() {
        const rooms = this.items.filter(i => i.type === 'room');
        const pickups = this.items.filter(i => i.type === 'pickup');
        const extras = this.items.filter(i => i.type === 'extra');
        return (index.h(index.Host, { key: '0247e05ec655e1175ca99cdf9192e0f870a3c7c5', size: "small" }, index.h("div", { key: 'd0c9ec2c3ac48383eaabbdaf3fbee34d86af7d7f', class: "assign-container" }, index.h("p", { key: '4a2284b661a1c957abe2ee3337988ca1e9f5f15c', class: "assign-intro" }, "Select services for the Agent folio; others remain on the Guest folio."), rooms.length > 0 && (index.h("div", { key: 'd384c632723d406b012c4da9f468e5e18836a059', class: "assign-section" }, index.h("p", { key: 'de57960e0eafb85d6256101983e11fe0a7351be6', class: "assign-section__label" }, "Accommodation"), rooms.map(item => this.renderRoomItem(item)))), pickups.length > 0 && (index.h("div", { key: '8a97fe75aaf46caf3936cf862a4748dd007340ca', class: "assign-section" }, index.h("p", { key: '10af659c0537dbf29c9c85de639d42a56ebf8784', class: "assign-section__label" }, "Pickup"), pickups.map(item => this.renderCheckItem(item)))), extras.length > 0 && (index.h("div", { key: '20691b6d8ebd8af40002b026850174d366a9edcf', class: "assign-section" }, index.h("p", { key: 'a8a1fb83849dfd6aa0006e41e4108378daafcace', class: "assign-section__label" }, "Extra Services"), extras.map(item => this.renderExtraItem(item)))))));
    }
};
IrBookingAssignItems.style = IrBookingAssignItemsStyle0;

const irBookingCityLedgerCss = ".sc-ir-booking-city-ledger-h{display:block;width:100%;min-width:0}.booking-city-ledger__card.sc-ir-booking-city-ledger{width:100%}.booking-city-ledger__card.sc-ir-booking-city-ledger::part(body){padding:0}.booking-city-ledger__header-title.sc-ir-booking-city-ledger{display:flex;align-items:center;gap:0.5rem}.booking-city-ledger__agent-name.sc-ir-booking-city-ledger{font-weight:400;color:var(--wa-color-neutral-600, #6b7280);font-size:var(--wa-font-size-s, 0.8125rem)}.booking-city-ledger__spinner-wrap.sc-ir-booking-city-ledger{display:flex;justify-content:center;align-items:center;padding:2rem 1rem}.booking-city-ledger__empty-state.sc-ir-booking-city-ledger{padding:1.5rem}.booking-city-ledger__error.sc-ir-booking-city-ledger{margin:0;padding:1rem;text-align:center;font-size:0.875rem;color:var(--wa-color-danger-600, #dc2626)}.folio-list.sc-ir-booking-city-ledger{display:flex;flex-direction:column}.folio-row.sc-ir-booking-city-ledger{padding:0.75rem 1rem;border-bottom:1px solid var(--wa-color-neutral-100, #f4f4f5)}.folio-row.sc-ir-booking-city-ledger:last-child{border-bottom:none}.folio-row__header.sc-ir-booking-city-ledger{display:flex;justify-content:space-between;align-items:center;gap:0.5rem}.folio-row__meta.sc-ir-booking-city-ledger{display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;min-width:0}.folio-row__date.sc-ir-booking-city-ledger{font-size:0.857rem;color:var(--wa-color-neutral-500, #71717a);white-space:nowrap;font-variant-numeric:tabular-nums}.folio-row__right.sc-ir-booking-city-ledger{display:flex;align-items:center;gap:0.375rem;flex-shrink:0}.folio-row__amount.sc-ir-booking-city-ledger{font-size:1rem;font-weight:600;white-space:nowrap}.folio-row__desc.sc-ir-booking-city-ledger{margin:0.3rem 0 0;font-size:var(--wa-font-size-s);color:var(--wa-color-neutral-800, #27272a);line-height:1.4;word-break:break-word}.folio-row__city-tax.sc-ir-booking-city-ledger{display:flex;align-items:center;gap:0.375rem;margin-top:0.25rem;font-size:0.857rem;color:var(--wa-color-neutral-500, #71717a)}.is-debit.sc-ir-booking-city-ledger{color:var(--wa-color-danger-fill-loud);font-weight:700}.is-credit.sc-ir-booking-city-ledger{color:var(--wa-color-success-fill-loud);font-weight:700}";
const IrBookingCityLedgerStyle0 = irBookingCityLedgerCss;

const IrBookingCityLedger = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clRefreshNeeded = index.createEvent(this, "clRefreshNeeded", 7);
    }
    cityLedgerService = new index$1.CityLedgerService();
    tokenService = new Token.Token();
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
    clRefreshNeeded;
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
            this.clRefreshNeeded.emit();
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
        return utils.formatAmount(calendarData.calendar_data.property?.currency?.symbol, value);
    }
    rowHiddenCategories = new Set(['TBL_BSAD', 'TBL_BSP', 'TBL_BSE']);
    get rows() {
        return this.folioRows?.filter(r => !this.rowHiddenCategories.has(r._raw.REL_ENTITY)) ?? [];
    }
    renderRows() {
        if (this.rows.length === 0) {
            return (index.h("div", { class: "booking-city-ledger__empty-state" }, index.h("ir-empty-state", { showIcon: false })));
        }
        return (index.h("div", { class: "folio-list" }, this.rows.map(row => (index.h("div", { key: row._rowId, class: "folio-row" }, index.h("div", { class: "folio-row__header" }, index.h("div", { class: "folio-row__meta" }, index.h("ir-cl-status-tag", { transaction: { _rowId: '', ...utils$1.mapClTxToFolioRow(row._raw), balance: 0 } }), index.h("span", { class: "folio-row__date" }, moment.hooks(row.serviceDate).format('MMM DD, YYYY'))), index.h("div", { class: "folio-row__right" }, index.h("span", { class: "folio-row__amount" }, row.debit !== null && index.h("span", { class: "is-debit" }, row.debit ? this.formatAmount(row.debit) : ''), row.credit !== null && index.h("span", { class: "is-credit" }, row.credit ? this.formatAmount(row.credit) : '')), row.status.id !== 'billed' && row._raw.CATEGORY === null && utils$1.actionableClTypes.has(row._raw.CL_TX_TYPE_CODE) && (index.h("wa-dropdown", { "onwa-hide": e => {
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
            } }, index.h("div", { slot: "trigger" }, index.h("ir-custom-button", { appearance: "plain" }, index.h("wa-icon", { name: "ellipsis-vertical" }))), index.h("wa-dropdown-item", { value: "edit" }, index.h("wa-icon", { slot: "icon", name: "edit" }), "Edit"), index.h("wa-dropdown-item", { value: "delete", variant: "danger" }, index.h("wa-icon", { slot: "icon", name: "trash" }), "Delete"))))), row.description && index.h("p", { class: "folio-row__desc" }, row.description), (row._raw.CITY_TAX_AMOUNT ?? 0) > 0 && (index.h("div", { class: "folio-row__city-tax" }, index.h("wa-icon", { name: "building" }), index.h("span", null, "City Tax: ", this.formatAmount(row._raw.CITY_TAX_AMOUNT)))))))));
    }
    render() {
        if (!this.booking?.agent) {
            return index.h(index.Host, null);
        }
        return (index.h(index.Host, null, index.h("wa-card", { class: "booking-city-ledger__card" }, index.h("div", { slot: "header", class: "booking-city-ledger__header-title" }, index.h("p", { class: "font-size-large p-0 m-0" }, " Agent Folio")), index.h("wa-tooltip", { for: "booking-city-ledger-add-btn" }, "Add folio entry"), index.h("ir-custom-button", { slot: "header-actions", id: "booking-city-ledger-add-btn", size: "small", variant: "neutral", appearance: "plain", onClickHandler: () => {
                this.editingRow = null;
                this.drawerOpen = true;
            } }, index.h("wa-icon", { name: "plus", style: { fontSize: '1rem' } })), this.isLoading ? (index.h("div", { class: "booking-city-ledger__spinner-wrap" }, index.h("ir-spinner", null))) : this.error ? (index.h("p", { class: "booking-city-ledger__error" }, this.error)) : (this.renderRows())), index.h("ir-city-ledger-transaction-drawer", { open: this.drawerOpen, drawerLabel: this.editingRow ? 'Edit Folio Entry' : 'New Folio Entry', agent: this.booking.agent, booking: this.booking, transaction: this.editingRow?._raw ?? null, serviceCategoryOptions: this.serviceCategoryOptions, bookingOptions: this.bookingOptions, onCloseDrawer: () => {
                this.drawerOpen = false;
                this.editingRow = null;
            }, onTransactionSaved: () => {
                this.drawerOpen = false;
                this.editingRow = null;
                this.clRefreshNeeded.emit();
            } }), index.h("ir-cl-fiscal-document-preview", { ticket: this.tokenService.getToken(), propertyId: calendarData.calendar_data?.property?.id }), index.h("ir-dialog", { label: "Delete Entry", open: !!this.deleteTarget, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!this.isDeleting)
                    this.deleteTarget = null;
            } }, index.h("p", null, "Are you sure you want to delete this entry? This action cannot be undone."), index.h("div", { slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => (this.deleteTarget = null) }, "Cancel"), index.h("ir-custom-button", { size: "medium", variant: "danger", loading: this.isDeleting, onClickHandler: () => this.handleDelete() }, "Delete")))));
    }
};
IrBookingCityLedger.style = IrBookingCityLedgerStyle0;

const irBookingDetailsCss = ".sc-ir-booking-details-h{overflow-x:hidden;--ir-dialog-max-width:20rem;text-align:start;padding:var(--wa-space-l);position:relative;height:100%}.sc-ir-booking-details-h *.sc-ir-booking-details{box-sizing:border-box}.font-medium.sc-ir-booking-details{font-weight:600}.sc-ir-booking-details-h th.sc-ir-booking-details{font-weight:600}.booking-details__booking-info.sc-ir-booking-details{display:grid;padding:var(--wa-space-m);gap:var(--wa-space-l)}.booking-details__info-column.sc-ir-booking-details{display:flex;flex-direction:column;gap:var(--wa-space-l);min-width:0}@media (min-width: 890px){.booking-details__booking-info.sc-ir-booking-details{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 1024px){.booking-details__booking-info.sc-ir-booking-details{gap:var(--wa-space-xl)}}.h-28.sc-ir-booking-details{height:2rem}.mx-01.sc-ir-booking-details{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}.date-margin.sc-ir-booking-details{margin-right:5px}.pickup-margin.sc-ir-booking-details{margin-bottom:7px !important}.header-date.sc-ir-booking-details{padding-left:5px !important}.pointer.sc-ir-booking-details{cursor:pointer}.sc-ir-booking-details:root{--sidebar-width:50rem}.loading-container.sc-ir-booking-details{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.sm-padding-right.sc-ir-booking-details{padding-right:0.2rem}.sm-padding-left.sc-ir-booking-details{padding-left:0.2rem}.sm-padding-top.sc-ir-booking-details{padding-top:0.2rem}.sm-padding-bottom.sc-ir-booking-details{padding-bottom:0.2rem}.info-notes.sc-ir-booking-details{list-style:none;padding-left:0}.light-blue-bg.sc-ir-booking-details{background-color:#acecff;padding:0.2rem 0.3rem}.iframeHeight.sc-ir-booking-details{height:17.5rem}.dialog-title.sc-ir-booking-details{width:fit-content}";
const IrBookingDetailsStyle0 = irBookingDetailsCss;

const IrBookingDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bookingChanged = index.createEvent(this, "bookingChanged", 7);
        this.closeSidebar = index.createEvent(this, "closeSidebar", 7);
        this.toast = index.createEvent(this, "toast", 7);
    }
    bookingService = new booking_service.BookingService();
    roomService = new room_service.RoomService();
    paymentService = new payment_service.PaymentService();
    agentService = new agents_service.AgentsService();
    cityLedgerService = new index$1.CityLedgerService();
    token = new Token.Token();
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
    /**
     * Emits toast notifications to the parent context.
     * Carries toast configuration such as message, type, and duration.
     */
    toast;
    componentWillLoad() {
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
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
                    message: locales_store.locales.entries.Lcz_EmailBookingto.replace('%1', this.booking.guest.email),
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
                window.location.href = 'https://x.igloorooms.com/manage/acbookinglist.aspx';
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
                    TO_DATE: this.booking.to_date,
                    TITLE: `${locales_store.locales.entries.Lcz_AddingUnitToBooking}# ${this.booking.booking_nbr}`,
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
    handleEditExtraService(e) {
        this.selectedService = e.detail;
        console.log(this.selectedService);
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
                return { _rowId: String(i), ...utils$1.mapClTxToFolioRow(tx), balance: runningBalance };
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
    async loadAgentAndFolio(booking) {
        if (!booking?.agent) {
            this.agent = null;
            this.folioRows = [];
            this.rawTransactions = [];
            return;
        }
        this.agent = await this.agentService.getExposedAgent({ id: booking.agent.id });
        if (functions.isAgentMode(this.agent)) {
            await this.fetchCityLedger(booking);
        }
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
            const [roomResponse, languageTexts, countriesList, bookingDetails, setupEntries] = await Promise.all([
                this.roomService.getExposedProperty({ id: this.propertyid || 0, language: this.language, aname: this.p }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getCountries(this.language),
                this.bookingService.getExposedBooking(this.bookingNumber, this.language),
                this.bookingService.getSetupEntriesByTableNameMulti([
                    '_BED_PREFERENCE_TYPE',
                    '_DEPARTURE_TIME',
                    '_PAY_TYPE',
                    '_PAY_TYPE_GROUP',
                    '_PAY_METHOD',
                    '_ARRIVAL_TIME',
                    '_SVC_CATEGORY',
                ]),
            ]);
            await this.loadAgentAndFolio(bookingDetails);
            this.property_id = roomResponse?.My_Result?.id;
            const { bed_preference_type, svc_category, departure_time, pay_type, pay_type_group, pay_method, arrival_time } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.bedPreference = bed_preference_type;
            this.svcCategories = svc_category;
            this.departureTime = departure_time;
            this.paymentEntries = { types: pay_type, groups: pay_type_group, methods: pay_method };
            this.arrivalTime = arrival_time;
            if (!locales_store.locales?.entries) {
                locales_store.locales.entries = languageTexts.entries;
                locales_store.locales.direction = languageTexts.direction;
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
        // Add token safely
        const { data } = await axios.axios.post(`Get_ShortLiving_Token`);
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
        this.splitIndex = booking.buildSplitIndex(this.booking.rooms);
    };
    async resetBooking() {
        try {
            this.isLoading = true;
            const booking$1 = await this.bookingService.getExposedBooking(this.bookingNumber, this.language);
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
        return (index.h(index.Host, null, !this.is_from_front_desk && (index.h(index.Fragment, null, index.h("ir-toast", { style: { height: '0' } }), index.h("ir-interceptor", { style: { height: '0' } }))), index.h("ir-booking-header", { booking: this.booking, hasCloseButton: this.hasCloseButton, hasDelete: this.hasDelete, hasMenu: this.hasMenu, hasPrint: this.hasPrint, agent: this.agent, folioRows: this.folioRows, hasReceipt: calendarData.calendar_data.property.is_frontdesk_enabled, hasEmail: ['001', '002'].includes(this.booking?.status?.code) }), index.h("div", { class: "booking-details__booking-info" }, index.h("div", { class: "booking-details__info-column" }, index.h("ir-reservation-information", { arrivalTime: this.arrivalTime, countries: this.countries, booking: this.booking }), index.h("ir-booking-rooms", { booking: this.booking, agent: this.agent, propertyId: this.property_id, language: this.language, departureTime: this.departureTime, bedPreference: this.bedPreference, legendData: this.calendarData.legendData, roomsInfo: this.calendarData.roomsInfo, hasRoomAdd: this.hasRoomAdd, hasRoomEdit: this.hasRoomEdit, hasRoomDelete: this.hasRoomDelete, splitIndex: this.splitIndex, clTransactions: this.rawTransactions, onRoomDeleteFinished: this.handleDeleteFinish }), index.h("section", null, index.h("ir-extra-services", { language: this.language, svcCategories: this.svcCategories, booking: this.booking, agent: this.agent, clTransactions: this.rawTransactions })), index.h("ir-pickup-view", { booking: this.booking, agent: this.agent, clTransactions: this.rawTransactions })), index.h("ir-payment-details", { class: "booking-details__info-column", propertyId: this.property_id, paymentEntries: this.paymentEntries, paymentActions: this.paymentActions, booking: this.booking, agent: this.agent, svcCategories: this.svcCategories, isAllServicesAgentOwned: isAllServicesAgentOwned, folioRows: this.folioRows, clLoading: this.clLoading, clError: this.clError })), index.h("ir-dialog", { label: "Send Email", onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalRef.closeModal();
                this.modalState = null;
            }, ref: el => (this.modalRef = el) }, index.h("p", null, this.modalState?.message), index.h("div", { slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { loading: irInterceptor_store.isRequestPending('/Send_Booking_Confirmation_Email'), onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleModalConfirm();
            }, size: "medium", variant: "brand" }, locales_store.locales.entries.Lcz_Confirm))), index.h("ir-room-guests", { open: this.sidebarState === 'room-guest', countries: this.countries, language: this.language, identifier: this.sidebarPayload?.identifier, bookingNumber: this.booking.booking_nbr, roomName: this.sidebarPayload?.roomName, totalGuests: this.sidebarPayload?.totalGuests, sharedPersons: this.sidebarPayload?.sharing_persons, slot: "sidebar-body", checkIn: this.sidebarPayload?.checkin, onCloseModal: () => (this.sidebarState = null) }), index.h("ir-extra-service-config", { open: this.sidebarState === 'extra_service', service: this.selectedService, svcCategories: this.svcCategories, language: this.language, booking: this.booking, agent: this.agent, slot: "sidebar-body", onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.sidebarState = null;
                if (this.selectedService) {
                    this.selectedService = null;
                }
            } }), index.h("ir-pickup", { booking: this.booking, agent: this.agent, open: this.sidebarState === 'pickup', bookingDates: { from: this.booking.from_date, to: this.booking.to_date }, defaultPickupData: this.booking.pickup_info, bookingNumber: this.booking.booking_nbr, numberOfPersons: this.booking.occupancy.adult_nbr + this.booking.occupancy.children_nbr, onCloseModal: () => {
                this.sidebarState = null;
            } }), index.h("ir-billing-drawer", { open: this.sidebarState === 'invoice', onBillingClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.sidebarState = null;
            }, isAllServicesAgentOwned: isAllServicesAgentOwned, booking: this.booking, agent: this.agent }), index.h("ir-guest-info-drawer", { onGuestInfoDrawerClosed: () => {
                this.sidebarState = null;
            }, booking_nbr: this.bookingNumber, email: this.booking?.guest.email, language: this.language, open: this.sidebarState === 'guest' }), index.h("ir-payment-folio", { booking: this.booking, style: { height: 'auto' }, bookingNumber: this.booking.booking_nbr, paymentEntries: this.paymentEntries, payment: this.sidebarPayload?.payment, mode: this.sidebarPayload?.mode, ref: el => (this.paymentFolioRef = el), onCloseModal: () => (this.sidebarState = null) }), index.h("ir-booking-editor-drawer", { roomTypeIds: this.bookingItem?.roomsInfo?.map(r => r.id), onBookingEditorClosed: this.handleCloseBookingWindow.bind(this), unitId: this.bookingItem?.PR_ID, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, booking: this.booking, ticket: this.ticket, open: this.bookingItem !== null, roomIdentifier: this.bookingItem?.IDENTIFIER, language: this.language, propertyid: this.propertyid, checkIn: this.bookingItem?.FROM_DATE, checkOut: this.bookingItem?.TO_DATE })));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrBookingDetails.style = IrBookingDetailsStyle0;

const RoomsGuestsSchema = index$2.z.array(index$2.z
    .object({
    first_name: index$2.z.string().nonempty(),
    last_name: index$2.z.string().nonempty(),
    bed_preference: index$2.z.string().optional().nullable(),
    requires_bed_preference: index$2.z.boolean().nullable(),
})
    .superRefine((data, ctx) => {
    if (data.requires_bed_preference && !data.bed_preference) {
        ctx.addIssue({
            path: ['bed_preference'],
            message: 'Bed preference is required',
            code: index$2.z.ZodIssueCode.custom,
        });
    }
}));
const BookedByGuestSchema = index$2.z.object({
    firstName: index$2.z.string().nonempty(),
    lastName: index$2.z.string().nonempty(),
});

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
        const total_days = selected_variation.nights.length;
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
        if (rate_plan.guest[i].infant_nbr > 0 && !rate_plan.is_amount_modified) {
            if (!this.variationService) {
                this.variationService = new booking_service.VariationService();
            }
            variation = this.variationService.getVariationBasedOnInfants({
                variations: rate_plan.ratePlan.variations,
                baseVariation: rate_plan.selected_variation,
                infants: rate_plan.guest[i].infant_nbr,
            });
        }
        return variation.nights.map(n => ({
            date: n.night,
            amount: amount ?? n.discounted_amount,
            cost: null,
        }));
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
                        const { first_name, last_name } = rateplan.guest[i];
                        const days = await this.generateDailyRates(rateplan, i);
                        let newRoom = {
                            ...(room ?? {}),
                            identifier,
                            roomtype: rateplan.roomtype,
                            rateplan: rateplan.ratePlan,
                            prepayment_amount_gross: 0,
                            unit: override_unit ? (toUnitId(unit) !== null ? { id: toUnitId(unit) } : null) : rateplan.guest[i].unit ? { id: toUnitId(rateplan.guest[i].unit) } : null,
                            occupancy: {
                                adult_nbr: rateplan.selected_variation.adult_nbr,
                                children_nbr: Number(rateplan.selected_variation.child_nbr ?? 0) - Math.max(Number(rateplan.guest[i].infant_nbr ?? 0), 0),
                                infant_nbr: rateplan.guest[i].infant_nbr,
                            },
                            bed_preference: rateplan.guest[i].bed_preference,
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

const irBookingEditorCss = ".sc-ir-booking-editor-h{display:block;height:100%}.booking-editor__roomtype-container.sc-ir-booking-editor{display:flex;flex-direction:column;gap:1rem;margin-top:1.5rem;padding-bottom:3rem}";
const IrBookingEditorStyle0 = irBookingEditorCss;

const IrBookingEditor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.loadingChanged = index.createEvent(this, "loadingChanged", 7);
        this.adjustBlockedUnit = index.createEvent(this, "adjustBlockedUnit", 7);
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
    isLoading = true;
    isFetchingAvailability = false;
    unavailableRatePlanIds = new Set();
    resetBookingEvt;
    loadingChanged;
    adjustBlockedUnit;
    roomService = new room_service.RoomService();
    bookingService = new booking_service.BookingService();
    bookingEditorService = new IRBookingEditorService(this.mode);
    room;
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
            if (!locales_store.locales.entries) {
                locales_store.locales.entries = languageTexts.entries;
                locales_store.locales.direction = languageTexts.direction;
            }
            await this.fetchSetupEntriesAndInitialize();
            booking_service.setBookingSelectOptions({
                countries: countriesList,
            });
            this.initializeDraftFromBooking();
            if (this.bookingEditorService.isEventType('EDIT_BOOKING')) {
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
        const isEditOrAdd = this.bookingEditorService.isEventType(['EDIT_BOOKING', 'ADD_ROOM']);
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
            });
        }
        booking_service.setBookingDraft(draft);
    }
    async checkBookingAvailability(checkBe = false) {
        this.isFetchingAvailability = true;
        // resetBookingStore(false);
        const { source, occupancy, dates } = booking_service.booking_store.bookingDraft;
        const from_date = dates.checkIn.format('YYYY-MM-DD');
        const to_date = dates.checkOut.format('YYYY-MM-DD');
        const is_in_agent_mode = source?.type === 'TRAVEL_AGENCY';
        try {
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
                language: this.language,
                room_type_ids,
                currency: calendarData.calendar_data.property.currency,
                agent_id: is_in_agent_mode ? source?.tag : null,
                is_in_agent_mode,
                room_type_ids_to_update,
            };
            await this.bookingService.getBookingAvailability(params);
            if (this.mode !== 'EDIT_BOOKING') {
                await this.assignCountryCode();
            }
            if (this.bookingEditorService.isEventType('EDIT_BOOKING')) {
                this.bookingEditorService.updateBooking(this.room);
            }
            if (checkBe) {
                const beResults = await this.bookingService.getBookingAvailability({ ...params, is_backend: false, skip_store: true });
                this.compareResults(beResults);
            }
            this.isFetchingAvailability = false;
        }
        catch (error) {
            console.error('Error initializing booking availability:', error);
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
            const reservedRooms = booking_service.getReservedRooms();
            RoomsGuestsSchema.parse(reservedRooms.map(r => ({ ...r.guest, requires_bed_preference: r.ratePlanSelection.roomtype.is_bed_configuration_enabled })));
            BookedByGuestSchema.parse(booking_service.booking_store.bookedByGuest);
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
        if (this.bookingEditorService.isEventType('EDIT_BOOKING') && this.booking) {
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
        return await this.bookingService.fetchSetupEntries();
    }
    render() {
        if (this.isLoading) {
            return (index.h("div", { class: 'drawer__loader-container' }, index.h("ir-spinner", null)));
        }
        return (index.h(index.Host, null, index.h("div", null, index.h("ir-interceptor", null), this.step === 'details' && (index.h(index.Fragment, null, index.h("ir-booking-editor-header", { isLoading: this.isFetchingAvailability, isBlockConversion: !!this.blockedUnit?.STATUS_CODE, booking: this.booking, checkIn: this.checkIn, checkOut: this.adjustedCheckout, mode: this.mode }), index.h("div", { class: 'booking-editor__roomtype-container' }, !this.isFetchingAvailability &&
            booking_service.booking_store.roomTypes?.map(roomType => (index.h("igl-room-type", { unavailableRatePlanIds: this.unavailableRatePlanIds, key: `room-type-${roomType.id}`, id: roomType.id.toString(), roomType: roomType, bookingType: this.mode, ratePricingMode: booking_service.booking_store.selects?.ratePricingMode, roomTypeId: this.room?.roomtype?.id, currency: calendarData.calendar_data.property.currency })))))), this.step === 'confirm' && (index.h("ir-booking-editor-form", { booking: this.booking, onDoReservation: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.doReservation(e.detail);
            }, room: this.room, mode: this.mode })))));
    }
    static get watchers() { return {
        "mode": ["handleModeChange"]
    }; }
};
IrBookingEditor.style = IrBookingEditorStyle0;

const irBookingEditorDrawerCss = ".sc-ir-booking-editor-drawer-h{display:block}.booking-editor__drawer.sc-ir-booking-editor-drawer::part(dialog){overflow:hidden}";
const IrBookingEditorDrawerStyle0 = irBookingEditorDrawerCss;

const IrBookingEditorDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bookingEditorClosed = index.createEvent(this, "bookingEditorClosed", 7);
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
    step = 'details';
    isLoading;
    /** Emitted when the booking editor drawer is closed. */
    bookingEditorClosed;
    token = new Token.Token();
    bookingService = new booking_service.BookingService();
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
            booking_service.booking_store.event_type = { type: this.mode };
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
            booking_service.booking_store.event_type = { type: this.mode };
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
        if (this.label) {
            return this.label;
        }
        switch (this.mode) {
            case 'SPLIT_BOOKING':
            case 'BAR_BOOKING':
            case 'ADD_ROOM':
            case 'EDIT_BOOKING':
            case 'PLUS_BOOKING':
                return 'New Booking';
        }
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
        const { checkIn } = booking_service.booking_store?.bookingDraft?.dates;
        const hasCheckIn = checkIn ? checkIn?.isSame(moment.hooks(), 'date') : false;
        return (index.h(index.Fragment, null, index.h("ir-custom-button", { onClickHandler: this.goToDetails, size: "medium", appearance: "filled", variant: "neutral" }, "Back"), index.h("ir-custom-button", { loading: this.isLoading === 'book', value: "book", form: "new_booking_form", disabled: false, type: "submit", size: "medium", appearance: hasCheckIn ? 'outlined' : 'accent', variant: "brand" }, "Book"), hasCheckIn && (index.h("ir-custom-button", { loading: this.isLoading === 'book-checkin', value: "book-checkin", form: "new_booking_form", type: "submit", size: "medium", appearance: "accent", variant: "brand" }, "Book and check-in"))));
    }
    renderDetailsActions() {
        const haveRoomSelected = booking_service.hasAtLeastOneRoomSelected();
        return (index.h(index.Fragment, null, index.h("ir-custom-button", { "data-drawer": "close", size: "medium", appearance: "filled", variant: "neutral" }, "Cancel"), ['PLUS_BOOKING', 'ADD_ROOM'].includes(this.mode) && (index.h(index.Fragment, null, !haveRoomSelected && index.h("wa-tooltip", { for: "booking_editor__next-button" }, "Please select at least one unit to continue."), index.h("ir-custom-button", { id: "booking_editor__next-button", disabled: !haveRoomSelected, onClickHandler: this.goToConfirm, size: "medium", appearance: "accent", variant: "brand" }, "Next")))));
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
                language: this.language,
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
        return (index.h("ir-drawer", { key: '37327c06f576a256a364631e08738cce1d24634e', onDrawerHide: async (event) => {
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
            }, class: "booking-editor__drawer", label: this.drawerLabel, open: this.open }, this.open && this.ticket && (index.h("ir-booking-editor", { key: '7f6da81a0fe1956a29249be32aa9a816ed316e01', onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail.cause;
            }, onAdjustBlockedUnit: event => this.handleAdjustBlockedUnitEvent(event), unitId: this.unitId, propertyId: this.propertyid, roomTypeIds: this.roomTypeIds, onResetBookingEvt: async () => {
                this.blockedUnit = undefined;
                this.initializeBlockedUnitState(undefined);
                await this.closeDrawer();
            }, step: this.step, blockedUnit: this.blockedUnit, language: this.language, booking: this.booking, mode: this.mode, checkIn: this.checkIn, checkOut: this.checkOut, identifier: this.roomIdentifier })), index.h("div", { key: 'b332051fb7fa1523190ffeac025e418d61fb592e', slot: "footer", class: "ir__drawer-footer" }, this.renderFooter())));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"],
        "blockedUnit": ["handleBlockedUnitChange"],
        "checkIn": ["handleCheckInChange"],
        "checkOut": ["handleCheckOutChange"],
        "unitId": ["handleUnitChange"],
        "mode": ["handleModeChange"]
    }; }
};
IrBookingEditorDrawer.style = IrBookingEditorDrawerStyle0;

const irBookingEditorFormCss = ".sc-ir-booking-editor-form-h{display:flex;flex-direction:column;height:100%}.booking-editor__guest-form.sc-ir-booking-editor-form{display:flex;flex-direction:column;gap:1rem;height:100%}.booking-editor__header.sc-ir-booking-editor-form{width:100%;align-items:flex-center;display:flex}.booking-editor__dates.sc-ir-booking-editor-form{line-height:1.2}.booking-editor__total.sc-ir-booking-editor-form{display:flex;align-items:center;white-space:nowrap}.booking-editor__total-label.sc-ir-booking-editor-form{margin-right:4px}.booking-editor__total-amount.sc-ir-booking-editor-form{white-space:nowrap}.booking-editor__booked-by.sc-ir-booking-editor-form{display:flex;flex-direction:column;gap:1rem;margin-bottom:1.5rem}.booking-editor__heading.sc-ir-booking-editor-form{margin:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l)}@media (min-width: 768px){.booking-editor__booked-by.sc-ir-booking-editor-form{flex-direction:row;align-items:center}.booking-editor__booked-by-picker.sc-ir-booking-editor-form{max-width:40rem}}";
const IrBookingEditorFormStyle0 = irBookingEditorFormCss;

const IrBookingEditorForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.doReservation = index.createEvent(this, "doReservation", 7);
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
    }
    render() {
        const { dates } = booking_service.booking_store.bookingDraft;
        let hasBookedByGuestController = false;
        return (index.h("form", { key: '60f983ad7014cfa28d2030bddc6737f486e7d500', class: "booking-editor__guest-form", id: "new_booking_form", autoComplete: "off", onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                this.doReservation.emit(submitter?.value);
            } }, index.h("div", { key: '716d6701bb32b5068a89a641de351407a00dab35', class: "booking-editor__header" }, index.h("ir-date-view", { key: '9fe3253c627885a93ae728e555ed9f2b82fe332f', class: "booking-editor__dates mr-1 flex-fill font-weight-bold font-medium-1", from_date: dates.checkIn, to_date: dates.checkOut, dateOption: "DD MMM YYYY" }), this.totalRooms > 1 && (index.h("div", { key: '9183a2aeadf4eb153169b16f3853373087e76c21', class: "booking-editor__total mt-1 mt-md-0 text-right" }, index.h("span", { key: 'd32b3c06c1fd7fe57d13021c85b140058b9d30d8', class: "booking-editor__total-label" }, locales_store.locales.entries.Lcz_TotalPrice), ' ', index.h("span", { key: '4bb200c37dd4b821506de3f253b56c0a936b0421', class: "booking-editor__total-amount font-weight-bold font-medium-1" }, utils.formatAmount(calendarData.calendar_data.property.currency.symbol, this.totalCost))))), Object.values(booking_service.booking_store.ratePlanSelections).map(val => Object.values(val).map(ratePlan => {
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
        })), this.bookingEditorService.isEventType(['BAR_BOOKING', 'PLUS_BOOKING']) && (index.h("section", { key: '793cd8bae1a4a6265772a0e0a0e5a01f04bda62c', class: 'mt-2' }, index.h("div", { key: '8cbcbcfb7ac55534474a7888463fea4c24a24642', class: "booking-editor__booked-by booking-editor__booked-by-header" }, index.h("h4", { key: '9e24a538130d3304433ffdadd61da68cb37cde5c', class: "booking-editor__heading booking-editor__booked-by-title" }, "Booked by"), booking_service.booking_store.bookingDraft?.agent ? (index.h("span", null, booking_service.booking_store.bookingDraft?.agent.name)) : (index.h(index.Fragment, null, index.h("ir-picker", { class: "booking-editor__booked-by-picker", appearance: "filled",
            // placeholder="Search customer by email, name or company name"
            placeholder: "Search customer by email or name", withClear: true, "onText-change": event => this.fetchGuests(event.detail), debounce: 500, loading: irInterceptor_store.isRequestPending('/Fetch_Exposed_Guests'), mode: "select-async", ref: el => (this.pickerEl = el), "onCombobox-select": this.handleComboboxSelect.bind(this) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (index.h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        })), booking_service.booking_store.bookedByGuest.id !== -1 && (index.h("ir-custom-button", { onClickHandler: () => {
                booking_service.updateBookedByGuest(booking_service.bookedByGuestBaseData);
                this.pickerEl.clearInput();
            }, variant: "brand" }, "Clear user"))))), index.h("ir-booking-editor-guest-form", { key: '01c003033ec7ded07707907983ae1968bba40f58' }))), this.bookingEditorService.isEventType(['SPLIT_BOOKING', 'ADD_ROOM']) && functions.isAgentMode(this.resolvedAgent) && (index.h("ir-service-assignee-select", { key: 'c639b8bb8d58c0bfed1c84b4504640a2e4bf23b5', style: { maxWidth: '500px' }, agent: this.booking.agent, assigneeType: this.assignee, onAssignmentChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.assignee = e.detail;
                booking_service.setBookingDraft({ roomAssignee: e.detail });
            } }))));
    }
};
IrBookingEditorForm.style = IrBookingEditorFormStyle0;

const irBookingEditorGuestFormCss = ".sc-ir-booking-editor-guest-form-h{padding-bottom:3rem}.sc-ir-booking-editor-guest-form-h{display:flex;flex-direction:column;gap:1rem}.booking-editor__guest-name-group.sc-ir-booking-editor-guest-form,.booking-editor__form-control.sc-ir-booking-editor-guest-form{display:flex;flex-direction:column;gap:1rem}.booking-editor__guest-input.sc-ir-booking-editor-guest-form,.booking-editor__guest-input-validator.sc-ir-booking-editor-guest-form{width:100%}.booking-editor__form-control.sc-ir-booking-editor-guest-form{width:100%;flex-grow:0;height:fit-content}.booking-editor__payment-info-description.sc-ir-booking-editor-guest-form{display:flex;height:fit-content;flex-direction:column}.booking-editor__guest-input-label.--first-name-pc-label.sc-ir-booking-editor-guest-form{display:none}@media (min-width: 768px){.booking-editor__guest-input-label.--first-name-pc-label.sc-ir-booking-editor-guest-form{display:block}.booking-editor__guest-name-group.sc-ir-booking-editor-guest-form{display:flex;flex-direction:row;align-items:flex-end}.booking-editor__guest-input-label.--first-name-mobile-label.sc-ir-booking-editor-guest-form,.booking-editor__guest-input.--last-name.sc-ir-booking-editor-guest-form::part(label){display:none}.sc-ir-booking-editor-guest-form-h{flex-direction:row;gap:4rem}}";
const IrBookingEditorGuestFormStyle0 = irBookingEditorGuestFormCss;

const IrBookingEditorGuestForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    paymentMethods = [];
    expiryDateMask = {
        mask: 'MM/YY',
        placeholderChar: '_',
        blocks: {
            MM: {
                mask: index$3.IMask.MaskedRange,
                from: 1,
                to: 12,
                maxLength: 2,
            },
            YY: {
                mask: index$3.IMask.MaskedRange,
                from: new Date().getFullYear() % 100,
                to: (new Date().getFullYear() % 100) + 20,
                maxLength: 2,
            },
        },
    };
    componentWillLoad() {
        this.paymentMethods = calendarData.calendar_data.property.allowed_payment_methods.filter(p => p.is_active && !p.is_payment_gateway);
        if (this.paymentMethods.length > 0) {
            booking_service.modifyBookingStore('selectedPaymentMethod', { code: this.paymentMethods[0].code });
        }
    }
    updateCountry(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const country = event.detail;
        let payload = { countryId: country.id.toString() };
        if (!booking_service.booking_store.bookedByGuest.mobile) {
            payload = { ...payload, phone_prefix: country.phone_prefix };
        }
        booking_service.updateBookedByGuest(payload);
    }
    get expiryDate() {
        const { expiryMonth, expiryYear } = booking_service.booking_store.bookedByGuest;
        if (!expiryMonth || !expiryYear) {
            return '';
        }
        // Normalize year to YY
        const year = expiryYear.toString().length === 4 ? expiryYear.toString().slice(-2) : expiryYear.toString();
        return `${expiryMonth}/${year}`;
    }
    render() {
        const { bookedByGuest, selects, bookingDraft } = booking_service.booking_store;
        const { agent } = bookingDraft;
        return (index.h(index.Host, { key: 'a0d9c737b2f0301208ae1f756bab7cfbafa7c7ab' }, index.h("section", { key: '4f3445ce51e8e92eefa9bc7f05c5069515c17018', class: "booking-editor__form-control" }, index.h("ir-input", { key: '5e556d2ccad8d28ae2532dcdb954f97de1e9c4c3', label: "Email address", "onText-change": e => booking_service.updateBookedByGuest({ email: e.detail }), mask: 'email', value: bookedByGuest.email, defaultValue: bookedByGuest.email, placeholder: "Email (leave empty if not available)" }), index.h("div", { key: '35afb62431212e0821b633705c3ee2e6e9ef46d6', class: "booking-editor__guest-name-group", id: "booking-editor-guest-name-group" }, index.h("ir-validator", { key: 'b0819139b9c1375a951b5dcd40acbe72652cd854', class: "booking-editor__guest-input-validator", value: bookedByGuest.firstName, schema: BookedByGuestSchema.shape.firstName }, index.h("ir-input", { key: '32e9269290cb76f6e032f6b09bbaa505fe69d92f', id: "booking-editor-guest-first-name", class: "booking-editor__guest-input --first-name",
            // label="Name"
            value: bookedByGuest.firstName, defaultValue: bookedByGuest.firstName, placeholder: "First name", autocomplete: "off", "onText-change": e => booking_service.updateBookedByGuest({ firstName: e.detail }) }, index.h("p", { key: 'a312772ca8da026f35dd2fcdead5c14ee7bcf619', style: { margin: '0', marginBottom: '0.5rem' }, slot: "label" }, index.h("span", { key: '2f1babdf7825018c71c19eed238fb4863527950d', class: "booking-editor__guest-input-label --first-name-pc-label" }, "Name"), index.h("span", { key: '55c25f59ff67d6bac18695aa454fd21b36370ef9', class: "booking-editor__guest-input-label --first-name-mobile-label" }, "First name")))), index.h("ir-validator", { key: '1574355681a19ad3415cce09e62d58a65faae122', class: "booking-editor__guest-input-validator", value: bookedByGuest.lastName, schema: BookedByGuestSchema.shape.lastName }, index.h("ir-input", { key: 'b50eef92cd416607ed37a4be4ac18925b9bc8783', id: "booking-editor-guest-last-name", class: "booking-editor__guest-input --last-name", label: "Last name", "onText-change": e => booking_service.updateBookedByGuest({ lastName: e.detail }), value: bookedByGuest.lastName, defaultValue: bookedByGuest.lastName, placeholder: "Last name", autocomplete: "off" }))), booking_service.booking_store.bookingDraft.agent ? (index.h("ir-input", { label: "Booking code", placeholder: "", value: bookedByGuest.agent_booking_nbr, defaultValue: bookedByGuest.agent_booking_nbr, "onText-change": e => booking_service.updateBookedByGuest({ agent_booking_nbr: e.detail }) })) : (index.h("ir-input", { label: "Company name", placeholder: "Company name", value: bookedByGuest.company, defaultValue: bookedByGuest.company, "onText-change": e => booking_service.updateBookedByGuest({ company: e.detail }) })), index.h("ir-country-picker", { key: '658c36797e50c13146935d76179a48f1e3868912', label: locales_store.locales.entries.Lcz_Country, variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.updateCountry(e), countries: selects.countries, country: selects.countries.find(c => c.id.toString() === bookedByGuest.countryId?.toString()) }), index.h("ir-mobile-input", { key: 'c44704ef21799e5f998738d41b3b5d360d87f9fc', size: "small", "onMobile-input-change": e => {
                booking_service.updateBookedByGuest({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => booking_service.updateBookedByGuest({ phone_prefix: e.detail.phone_prefix }), value: bookedByGuest.mobile, countryCode: selects.countries.find(c => c.phone_prefix === bookedByGuest.phone_prefix)?.code, countries: selects.countries })), index.h("section", { key: '2f453a628a46e5901067a4b068b846e6cfe09a91', class: 'booking-editor__form-control' }, index.h("wa-select", { key: '014c3973a4f789438953ef5cf4a6498f96cdbd09', size: "small", label: locales_store.locales.entries.Lcz_YourArrivalTime, "data-testid": "arrival_time", id: v4.v4(), defaultValue: selects.arrivalTime[0].CODE_NAME, value: bookedByGuest.selectedArrivalTime, onchange: event => booking_service.updateBookedByGuest({ selectedArrivalTime: event.target.value }) }, selects.arrivalTime.map(time => (index.h("wa-option", { value: time.CODE_NAME, selected: bookedByGuest.selectedArrivalTime === time.CODE_NAME }, time.CODE_VALUE_EN)))), index.h("wa-textarea", { key: 'a5e12d8278b95321d5a40b27a2dd182c65867772', onchange: event => booking_service.updateBookedByGuest({ note: event.target.value }), size: "small", value: bookedByGuest.note, defaultValue: bookedByGuest.note, label: locales_store.locales.entries.Lcz_AnyMessageForUs, rows: 3 }), (!agent || agent?.payment_mode?.code === '002') && (index.h(index.Fragment, { key: '2739dc3281a2f99e05144b107b098f630bda047a' }, this.paymentMethods.length > 1 && (index.h("wa-select", { key: '4ea4f86d37100fe1e7f9fca284b8cff8245417e6', label: 'Payment Method', size: "small", defaultValue: booking_service.booking_store?.selectedPaymentMethod?.code ?? this.paymentMethods[0].code, value: booking_service.booking_store?.selectedPaymentMethod?.code, onchange: e => booking_service.modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (index.h("wa-option", { value: p.code }, p.description))))), booking_service.booking_store.selectedPaymentMethod?.code === '001' && (index.h(index.Fragment, { key: 'e8a821bb574874c55f5c4ad978f5fe9fcddea14c' }, index.h("ir-input", { key: 'd389b4ca66084a77f3ef1037f7a83b26951ea199', value: bookedByGuest.cardNumber, defaultValue: bookedByGuest.cardNumber, "onText-change": e => booking_service.updateBookedByGuest({ cardNumber: e.detail.trim() }), label: locales_store.locales.entries.Lcz_CardNumber }), index.h("ir-input", { key: '7eda9ba0ab3d9fed387f1d60f8fab30ad8960c22', value: bookedByGuest.cardHolderName, defaultValue: bookedByGuest.cardHolderName, "onText-change": e => booking_service.updateBookedByGuest({ cardHolderName: e.detail.trim() }), label: locales_store.locales.entries.Lcz_CardHolderName }), index.h("ir-input", { key: 'b3ebefef751dbfd946bd0c731138d4a6167f0ae1', "onText-change": e => {
                const [month, year] = e.detail.split('/');
                booking_service.updateBookedByGuest({
                    expiryMonth: month,
                    expiryYear: year,
                });
            }, value: this.expiryDate, mask: this.expiryDateMask, label: locales_store.locales.entries.Lcz_ExpiryDate }))), booking_service.booking_store.selectedPaymentMethod?.code === '005' && (index.h(index.Fragment, { key: 'be3c46f7f37b31018350e5daa00bd989f5ed3b79' }, index.h("style", { key: '7dcd20fa73df8af51ff9b14b5ec761bd79c2860c' }, `p{
              margin:0;
              padding:0}`), index.h("div", { key: 'b3d219b3be78a727f098aca4440e685b649b3d7e', class: "booking-editor__payment-info-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description }))), index.h("wa-checkbox", { key: '8d7c26d9ec063db87e289cd1b1c932afc776c464', defaultChecked: bookedByGuest.emailGuest, checked: bookedByGuest.emailGuest, onchange: event => booking_service.updateBookedByGuest({ emailGuest: event.target.checked }) }, locales_store.locales.entries.Lcz_EmailTheGuest))))));
    }
};
IrBookingEditorGuestForm.style = IrBookingEditorGuestFormStyle0;

const irBookingEditorHeaderCss = ".sc-ir-booking-editor-header-h{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}.booking-editor-header__container.sc-ir-booking-editor-header{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}.booking-editor-header__booking-picker.sc-ir-booking-editor-header{max-width:350px}.booking-editor-header__booking-picker-validator.sc-ir-booking-editor-header{margin-bottom:1rem}.booking-editor-header__tax_statement.sc-ir-booking-editor-header{margin-top:1.5rem}@media (min-width: 768px){.booking-editor__date-range.sc-ir-booking-editor-header::part(input-end){margin:0}.booking-editor-header__container.sc-ir-booking-editor-header{flex-direction:row;align-items:flex-start;flex-wrap:wrap}.booking-editor-header__adults-select.sc-ir-booking-editor-header{width:100px}.booking-editor-header__children-select.sc-ir-booking-editor-header{width:170px}}@media (min-width: 1024px){.booking-editor__date-validator.sc-ir-booking-editor-header::part(error-message){position:absolute}}";
const IrBookingEditorHeaderStyle0 = irBookingEditorHeaderCss;

const IrBookingEditorHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guestSelected = index.createEvent(this, "guestSelected", 7);
        this.checkAvailability = index.createEvent(this, "checkAvailability", 7);
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
    adultsSchema = index$2.z.coerce.number().min(1);
    bookingEditorService = new IRBookingEditorService();
    BookedByGuestPickerSchema = index$2.z
        .object({
        firstName: index$2.z.string(),
        // lastName: z.string(),
    })
        .superRefine((data, ctx) => {
        if (!data.firstName) {
            ctx.addIssue({
                path: ['firstName'],
                code: index$2.z.ZodIssueCode.custom,
                message: locales_store.locales.entries.Lcz_ChooseBookingNumber,
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
        this.datesSchema = index$2.z
            .object({
            checkIn: index$2.z.any(),
            checkOut: index$2.z.any(),
        })
            .superRefine((data, ctx) => {
            // ─────────────────────────────
            // checkIn validations
            // ─────────────────────────────
            if (!moment.hooks.isMoment(data.checkIn)) {
                ctx.addIssue({
                    path: ['checkIn'],
                    code: index$2.z.ZodIssueCode.custom,
                    message: 'Check-in date is required',
                });
            }
            if (moment.hooks.isMoment(data.checkIn) && this.bookingEditorService.isEventType(['SPLIT_BOOKING', 'ADD_ROOM']) && !data.checkIn.isSameOrBefore(this.booking.to_date, 'date')) {
                ctx.addIssue({
                    path: ['checkIn'],
                    code: index$2.z.ZodIssueCode.custom,
                    message: `${locales_store.locales.entries.Lcz_CheckInDateShouldBeMAx.replace('%1', moment.hooks(this.booking.from_date, 'YYYY-MM-DD').format('ddd, DD MMM YYYY')).replace('%2', moment.hooks(this.booking.to_date, 'YYYY-MM-DD').format('ddd, DD MMM YYYY'))}  `,
                });
            }
            // ─────────────────────────────
            // checkOut validations
            // ─────────────────────────────
            if (!moment.hooks.isMoment(data.checkOut)) {
                ctx.addIssue({
                    path: ['checkOut'],
                    code: index$2.z.ZodIssueCode.custom,
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
                BookedByGuestSchema.parse(booking_service.booking_store.bookedByGuest);
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
        const { child_max_age } = calendarData.calendar_data.property.adult_child_constraints;
        const years = child_max_age === 1 ? locales_store.locales.entries.Lcz_Year : locales_store.locales.entries.Lcz_Years;
        return `${locales_store.locales.entries.Lcz_ChildCaption} 0 - ${child_max_age} ${years}`;
    }
    async selectGuest(e) {
        this.stopEvent(e);
        const booking_nbr = e.detail?.item?.value;
        const booking = await this.bookingService.getExposedBooking(booking_nbr, 'en', true);
        this.guestSelected.emit(booking);
    }
    render() {
        const { sources } = booking_service.booking_store.selects;
        const { adults, children } = booking_service.booking_store.bookingDraft.occupancy;
        const { checkIn, checkOut } = booking_service.booking_store.bookingDraft.dates;
        return (index.h(index.Host, { key: 'b08b200e66f89a33d6b480870cc8aeab48d3fd6e' }, index.h("form", { key: 'f20f09f634b5745995daf45b43b8c5305a425645', onSubmit: this.handleSubmit.bind(this) }, this.bookingEditorService.isEventType('SPLIT_BOOKING') && (index.h("ir-validator", { key: 'bd451d8bfecf6c9745ba8cab65618a3ec905faa6', value: booking_service.booking_store.bookedByGuest, class: "booking-editor-header__booking-picker-validator", showErrorMessage: true, schema: this.BookedByGuestPickerSchema }, index.h("ir-picker", { key: '9a00fd25bd4dac49e9e7c1a8eab54e763842421a', withClear: true, mode: "select-async", class: "booking-editor-header__booking-picker", debounce: 300, ref: el => (this.pickerRef = el), label: `${locales_store.locales.entries.Lcz_Tobooking}#`,
            // defaultValue={Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : ''}
            // value={Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : ''}
            placeholder: locales_store.locales.entries.Lcz_BookingNumber, loading: this._isLoading, "onText-change": e => this.handleBookingSearch(e.detail), "onCombobox-select": this.selectGuest.bind(this) }, this.bookings.map(b => {
            const label = `${b.booking_nbr} ${b.guest.first_name} ${b.guest.last_name}`;
            return (index.h("ir-picker-item", { value: b.booking_nbr?.toString(), label: label }, label));
        })))), index.h("div", { key: '30d5564fdebb04cbbda58a331f7e0f134cbee16c', class: "booking-editor-header__container" }, !this.bookingEditorService.isEventType(['EDIT_BOOKING', 'ADD_ROOM', 'SPLIT_BOOKING']) && (index.h("wa-select", { key: '109451604832b7e1767e318dc90ac5ab59cbe071', size: "small", placeholder: locales_store.locales.entries.Lcz_Source, value: booking_service.booking_store.bookingDraft.source?.id?.toString(), defaultValue: booking_service.booking_store.bookingDraft.source?.id, "onwa-hide": this.stopEvent.bind(this), onchange: this.handleSourceChange.bind(this) }, sources.map(option => (option.type === 'LABEL' ? index.h("small", null, option.description) : index.h("wa-option", { value: option.id?.toString() }, option.description))))), index.h("ir-validator", { key: '9b03e0f4a0791242bdf2d1c7db298a9d0cf31456', class: "booking-editor__date-validator", showErrorMessage: true, value: booking_service.booking_store.bookingDraft.dates, schema: this.datesSchema, style: { position: 'relative' } }, index.h("ir-date-range", { key: '70e8ff6dabd761c17c3fd3e117ab9ccabe555eeb', class: "booking-editor__date-range", defaultData: {
                fromDate: checkIn?.format('YYYY-MM-DD') ?? '',
                toDate: checkOut?.format('YYYY-MM-DD') ?? '',
            }, variant: "booking", withDateDifference: true, minDate: this.minDate, maxDate: this.maxDate, onDateRangeChange: this.handleDateRangeChange.bind(this) })), !this.bookingEditorService.isEventType('EDIT_BOOKING') && (index.h(index.Fragment, { key: 'd11220f4d4ad5a8b87521a6d2f51b36d01b6055d' }, index.h("ir-validator", { key: '22cf666eba0391ebe5ebe036c1190710eb2561b3', value: adults, schema: this.adultsSchema }, index.h("wa-select", { key: 'aa5a5ca0db9b3355b9a17342f0d800c94f948a20', class: "booking-editor-header__adults-select", size: "small", placeholder: locales_store.locales.entries.Lcz_AdultsCaption, value: adults?.toString(), defaultValue: adults?.toString(),
            // onwa-hide={this.stopEvent.bind(this)}
            onchange: this.handleAdultsChange.bind(this) }, Array.from({ length: calendarData.calendar_data.property.adult_child_constraints.adult_max_nbr }, (_, i) => i + 1).map(option => (index.h("wa-option", { value: option.toString() }, option))))), calendarData.calendar_data.property.adult_child_constraints.child_max_nbr > 0 && (index.h("wa-select", { key: '95bf1cd630d105e9ee45e6a3f17cb837d52570ee', class: "booking-editor-header__children-select", size: "small", placeholder: this.childrenSelectPlaceholder, value: children?.toString(), defaultValue: children?.toString(),
            // onwa-hide={this.stopEvent.bind(this)}
            onchange: this.handleChildrenChange.bind(this) }, Array.from({ length: calendarData.calendar_data.property.adult_child_constraints.child_max_nbr }, (_, i) => i + 1).map(option => (index.h("wa-option", { value: option.toString() }, option))))))), index.h("ir-custom-button", { key: 'fb13f4dbc11f58ea30b81a1d64061fe32cd4d686', loading: this.isLoading, type: "submit", variant: "brand" }, "Check")), booking_service.booking_store.roomTypes?.length > 0 && !this.isLoading && (index.h("wa-callout", { key: '3c6fe82cec578c367db0ea93c7c1979841e1c06f', size: "small", variant: "neutral", appearance: "filled", class: "booking-editor-header__tax_statement" }, calendarData.calendar_data.tax_statement)))));
    }
    static get watchers() { return {
        "booking": ["handleBookingChange"],
        "mode": ["handleModeChange"]
    }; }
};
IrBookingEditorHeader.style = IrBookingEditorHeaderStyle0;

const irBookingExtraNoteCss = ".sc-ir-booking-extra-note-h{display:block}";
const IrBookingExtraNoteStyle0 = irBookingExtraNoteCss;

const IrBookingExtraNote = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
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
        return (index.h("ir-dialog", { key: '3029428cceec67f4b8cf36157e66d464a1f16502', label: "Private Note", open: this.open, onIrDialogHide: () => {
                this.open = false;
            } }, index.h("wa-textarea", { key: 'b805080992a26e50ff45e83ddf4afe59b7c4c07e', size: "small", placeholder: locales_store.locales.entries.Lcz_PrivateNote_MaxChar, defaultValue: this.note, onchange: e => this.setNote(e.target.value), value: this.note }), index.h("div", { key: 'd6b46c468911369e7bb6d63774776dcb9f8223e7', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '3d3e2d4ef267105a198d49930d3fb83e4f6ddf69', "data-dialog": "close", size: "medium", variant: "neutral", appearance: "filled", onClickHandler: () => this.closeModal.emit(null), class: `flex-fill'}` }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { key: '6e43fe8e20828f0e6ef9a6b3526284ea28817e49', size: "medium", onClickHandler: () => this.savePrivateNote(), variant: "brand", loading: this.isLoading }, locales_store.locales.entries.Lcz_Save))));
    }
};
IrBookingExtraNote.style = IrBookingExtraNoteStyle0;

const irBookingGuaranteeCss = ".sc-ir-booking-guarantee-h{display:block}.sc-ir-booking-guarantee-h{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-booking-guarantee-h *.sc-ir-booking-guarantee{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.iframeHeight.sc-ir-booking-guarantee{height:max-content;height:22.5rem}";
const IrBookingGuaranteeStyle0 = irBookingGuaranteeCss;

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
                paymentMethod = code.value === '001' ? locales_store.locales.entries.Lcz_OnCredit : payment_code ? this.checkPaymentCode(payment_code.value) : null;
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
            index.h("div", null, cci && 'Card:', " ", index.h("span", null, cci.nbr || ''), cci.expiry_month && ' Expiry: ', index.h("span", null, cci.expiry_month || '', cci.expiry_year && '/' + cci.expiry_year)),
            index.h("div", null, cci.holder_name && 'Name:', " ", index.h("span", null, cci.holder_name || ''), cci.cvc && ' - CVC:', " ", index.h("span", null, cci.cvc || '')),
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
        return (index.h("div", null, index.h("ir-label", { content: ota_guarante.card_type + `${ota_guarante.is_virtual ? ' (virtual)' : ''}`, labelText: `${locales_store.locales.entries.Lcz_CardType}:` }), index.h("ir-label", { content: ota_guarante.cardholder_name, labelText: `${locales_store.locales.entries.Lcz_CardHolderName}:` }), index.h("ir-label", { content: ota_guarante.card_number, labelText: `${locales_store.locales.entries.Lcz_CardNumber}:` }), index.h("ir-label", { content: this.formatCurrency(utils.toFloat(Number(ota_guarante.meta?.virtual_card_current_balance), Number(ota_guarante.meta?.virtual_card_decimal_places)), ota_guarante.meta?.virtual_card_currency_code), labelText: `${locales_store.locales.entries.Lcz_CardBalance}:` })));
    }
    render() {
        if (!this.shouldShowGuarantee()) {
            return null;
        }
        const paymentMethod = this.booking.is_direct ? this.getPaymentMethod() : null;
        return (index.h("div", { class: "mb-1" }, index.h("div", { class: "d-flex align-items-center" }, index.h("span", { class: "mr-1 font-medium" }, locales_store.locales.entries.Lcz_BookingGuarantee, paymentMethod && index.h("span", null, ": ", paymentMethod)), this.shouldShowToggleButton() && (index.h("ir-button", { id: "drawer-icon", "data-toggle": "collapse", "data-target": ".guarrantee", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse", class: "sm-padding-right pointer", variant: "icon", icon_name: "credit_card", onClickHandler: this.handleToggleCollapse.bind(this) }))), index.h("div", { class: "collapse guarrantee" }, this.renderCollapsedContent()), this.renderOtaGuarantee()));
    }
};
IrBookingGuarantee.style = IrBookingGuaranteeStyle0;

const irBookingHeaderCss = ".sc-ir-booking-header-h{display:block}.booking-header__row.sc-ir-booking-header{display:flex;flex-direction:column;gap:1rem;padding:0 var(--wa-space-m);flex-wrap:wrap}.booking-header__actions.sc-ir-booking-header{display:flex;align-items:center;flex-wrap:wrap;justify-content:flex-end;gap:0.5rem}.booking-header__channel-number.--primary.sc-ir-booking-header{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;color:#464855}.booking-header__label-container.sc-ir-booking-header{display:flex;align-items:center}.booking-header__status-trigger.sc-ir-booking-header{width:100%}.booking-header__status-trigger.sc-ir-booking-header::part(base){justify-content:flex-start}.booking-header__status-trigger.sc-ir-booking-header::part(label){flex:1 1 0%;text-align:start}.booking-header__stretched-btn.sc-ir-booking-header{flex:1 1 0%}.booking-header__label.sc-ir-booking-header{padding:0;margin:0}.booking-header__label-container.sc-ir-booking-header{gap:1rem}.booking-header__info.sc-ir-booking-header,.booking-header__title.sc-ir-booking-header{display:flex;flex-direction:column;gap:1rem}.booking-header__label-number.sc-ir-booking-header{margin:0;padding:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l)}.booking-header__modified.sc-ir-booking-header{padding:0;margin:0;color:var(--wa-color-danger-fill-loud);width:fit-content}.booking-header__channel-number.sc-ir-booking-header{padding:0;margin:0}.booking-header__meta.sc-ir-booking-header{display:flex;align-items:center;gap:1rem;font-size:0.875rem}@media (min-width: 640px){.booking-header__title.sc-ir-booking-header{flex-direction:row;align-items:center}}@media (min-width: 768px){.booking-header__label.sc-ir-booking-header{display:flex;align-items:center;gap:0.5rem}.booking-header__row.sc-ir-booking-header,.booking-header__info.sc-ir-booking-header{flex-direction:row;align-items:center}.booking-header__row.sc-ir-booking-header{justify-content:space-between}}";
const IrBookingHeaderStyle0 = irBookingHeaderCss;

const IrBookingHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast", 7);
        this.closeSidebar = index.createEvent(this, "closeSidebar", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.openSidebar = index.createEvent(this, "openSidebar", 7);
    }
    dialogRef;
    bookingService = new booking_service.BookingService();
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
    toast;
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
            this.toast.emit({
                type: 'error',
                description: '',
                title: locales_store.locales.entries.Lcz_SelectStatus,
                position: 'top-right',
            });
            return;
        }
        try {
            await this.bookingService.changeExposedBookingStatus({
                book_nbr: this.booking.booking_nbr,
                status: this.bookingStatus,
            });
            this.toast.emit({
                type: 'success',
                description: '',
                title: locales_store.locales.entries.Lcz_StatusUpdatedSuccessfully,
                position: 'top-right',
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
        const folioRows = this.folioRows ?? [];
        if (folioRows?.length > 0) {
            return folioRows.every(f => f._raw.IS_LOCKED === false);
        }
        return true;
    }
    render() {
        const lastManipulation = this.booking.ota_manipulations ? this.booking.ota_manipulations[this.booking.ota_manipulations.length - 1] : null;
        const showPms = (calendarData.calendar_data.property?.linked_pms || [])?.findIndex(lp => lp?.is_active && lp?.bookings_integration_mode?.code === '001') !== -1;
        return (index.h("div", { key: '076b248d4d98698ca96b452171545fc59f92a4d4', class: "booking-header" }, index.h("div", { key: '273249fb0423755ddd2b9debf0db14ea643e87be', class: "booking-header__row" }, index.h("div", { key: '165d5f15eaaef523a4f2b27b3ba12c34677e0c0e', class: "booking-header__info" }, index.h("div", { key: 'cb097d36e88ba0fefcd18def9db2c33116a30152', class: "booking-header__title" }, index.h("div", { key: 'a979f02f4e0fc0c302a5fe7ce32e74c5f5224dfa', class: "booking-header__label-container" }, this.hasMenu && (index.h(index.Fragment, { key: '90c0f35b70115d0341bb0225b54fd86d517cc073' }, index.h("wa-tooltip", { key: '540be65f7eb40865cd2298bdc3c8f5e1c8f3fea1', for: "menu" }, "Go back"), index.h("ir-custom-button", { key: 'c21b7d53ce257f801e5efd61064274b64bebf575', id: "menu", variant: "neutral", size: "small", appearance: "plain" }, index.h("wa-icon", { key: '71347865b7397d5309305cac4641e5aa3b6b2f47', name: "arrow-left", style: { fontSize: '1.2rem' }, label: "Go back" })))), index.h("wa-avatar", { key: '1a8f6e712bb2ddfafcc66a86492db8107d824954', shape: "circle", initials: this.initials, image: this.avatarImage, loading: "lazy" }), index.h("div", { key: 'e43eb627977f63d7d5726ac02cd81b19f67cb5d9', class: "booking-header__identity" }, index.h("div", { key: '8c93dbd43c4509101b39604fd8b9206749ee9d6a', class: 'booking-header__label' }, index.h("h4", { key: 'e31484a9427bdf9b91287272e3756fefcb680e21', class: "booking-header__label-number" }, `${locales_store.locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`)), index.h("div", { key: 'f2569d6bb6807bfe23fa944eeb7ece7176db477b', class: "booking-header__meta" }, !this.booking.is_direct && index.h("p", { key: '585d71fda5d8030403759b9febea89c3bb47ce1e', class: "booking-header__channel-number --primary" }, this.booking.channel_booking_nbr), this.booking.agent_booking_nbr && index.h("p", { key: 'ed6b9b91d23de1de293f14427d024845a8d42561', class: "booking-header__channel-number --primary" }, this.booking.agent_booking_nbr), index.h("p", { key: '61ce0e9f99e24e416448b95f0e1fe7984a0c6939', class: "booking-header__channel-number" }, this.booking?.agent ? (index.h("span", null, "Agent:", ' ', index.h("p", { class: 'truncate p-0 m-0', style: { maxWidth: '150px', display: 'inline-flex' } }, this.agent.name, ' ', index.h("i", { style: { paddingLeft: '0.5rem' }, class: 'truncate' }, this.agent.reference)))) : (this.booking.origin.Label)), this.canChangeSource && (index.h("ir-custom-button", { key: '6fa9381c764c4f192f13605c420bc36bf0847d02', link: true, onClickHandler: () => this.bookingSourceEditor.openDialog() }, "Change source")), lastManipulation && (index.h(index.Fragment, { key: '64a4d819ebf6fa260687d8092c834605b22faaa7' }, index.h("p", { key: 'ee53c3767d8c0561368c57e41c7075f11868c218', id: `booking-${this.booking.booking_nbr}-modified`, class: "booking-header__modified" }, "Modified"), index.h("wa-tooltip", { key: 'c370fcab29c20e6b2639f6b4ec46affe6b3c5355', for: `booking-${this.booking.booking_nbr}-modified` }, index.h("div", { key: 'b7f523fe89704c6911e4f522762330730ba95d04' }, index.h("p", { key: '3c2a0745d0f619dd138416ef7481137ff71de5d0', class: "m-0" }, "Modified by ", lastManipulation?.user, " at ", lastManipulation?.date, " ", lastManipulation?.hour, ":", lastManipulation?.minute, "."), index.h("p", { key: 'd44a6cdc5a6feebcd288d80296c393f744dc7402', class: "m-0" }, this.alertMessage)))))))))), index.h("div", { key: '59c5645c5e2d44cd91380bde85124e44143814cf', class: "booking-header__actions" }, index.h("div", { key: '833012db8c8e4359744f848e3443b65afe59a4b8' }, this.booking.allowed_actions.length > 0 && this.booking.is_editable ? (index.h("wa-dropdown", { "onwa-hide": e => {
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
            appearance: 'outlined', size: "small", variant: "brand", class: "booking-header__status-trigger" }, index.h("ir-booking-status-tag", { slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), index.h("span", null, "Update status")), this.booking.allowed_actions.map(option => (index.h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))) : (index.h("ir-booking-status-tag", { status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }))), functions.isAgentMode(this.agent) && (index.h(index.Fragment, { key: '0cadac1fa0ac9529766b727b59189fa7a9ec12ba' })), index.h("ir-custom-button", { key: '74ed511271f167b6ef386623f5429c549c4c0a06', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "brand" }, "Logs"), showPms && (index.h("ir-custom-button", { key: 'e15ad764a10cb930ef7fc9cbc98ea6feb270ba4c', class: "booking-header__stretched-btn", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "PMS")), this.hasReceipt && (index.h(index.Fragment, { key: '90eeb1a30bb3f079081ea850298960e2043fe2fd' }, index.h("ir-custom-button", { key: 'dc190bbc53b0d499412b4310a2730559a396e5a2', class: "booking-header__stretched-btn", id: "invoice", variant: "brand", size: "small", appearance: "outlined" }, "Billing"))), this.hasPrint && (index.h(index.Fragment, { key: '958b9384583043a42684c4239fe3f29b8d324455' }, index.h("wa-tooltip", { key: 'e30f9cb789218a3467573a976788cf60a3ef56a7', for: "print" }, "Print booking"), index.h("ir-custom-button", { key: 'f6f2d9cf546c331efb6d3953ed1e0c7341f5a61f', id: "print", variant: "brand", size: "small", appearance: "outlined" }, index.h("wa-icon", { key: '8d20fc062b0f80846ca596ce7f14c81e247f2c5b', label: "Print", name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (index.h(index.Fragment, { key: '8b3cfaeaea93f4cccfa8a307631aae11e56494ce' }, index.h("wa-tooltip", { key: 'b0aaaf560b45b534cd7e58f73767b8d8c5b8004f', for: "email" }, "Email this booking to guest"), index.h("ir-custom-button", { key: 'e44584939c22553236309495a8c3b93d465b2d20', id: "email", variant: "brand", size: "small", appearance: "outlined" }, index.h("wa-icon", { key: 'd2efe21cbbb8cdd406c13206bedfc1a301a9a3fa', name: "envelope", style: { fontSize: '1.2rem' }, label: "Email this booking" })))), this.hasDelete && (index.h(index.Fragment, { key: '958ad387a87c4286ec6473ca2f1f73635a9e99d9' }, index.h("wa-tooltip", { key: '0905d9ec0fd4be4f698138de32be5eff31b6b3ba', for: "book-delete" }, "Delete this booking"), index.h("ir-custom-button", { key: '9a944f2a01d49995e0d3c52f756e3e4ebdee1c18', id: "book-delete", variant: "danger", size: "small", appearance: "plain" }, index.h("wa-icon", { key: '4ef172d5c24b24b737ad0acb4feaabb701af7223', name: "envelope", style: { fontSize: '1.2rem' }, label: "Delete this booking" })))), this.hasCloseButton && (index.h("ir-custom-button", { key: 'd119081a1e8a7f1d2b007a3f157401f46a14f7ca', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "small", appearance: "plain" }, index.h("wa-icon", { key: 'c5c2775ced7f2ee475b129fd34d193c65798be81', name: "xmark", style: { fontSize: '1.2rem' }, label: "Go back" }))))), index.h("ir-dialog", { key: '5fc525bac0e9f71682cd022a29764c4f341d44c6', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales_store.locales.entries.Lcz_PMS_Logs : locales_store.locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), index.h("ir-dialog", { key: '63456f9097379da05c2266f3238f39ab773c277d', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, index.h("p", { key: '4d3179e8034be10d5e9f7c76173baf4b723ca11e' }, this.booking.is_direct ? 'Are you sure you want to update this booking status?' : locales_store.locales.entries.Lcz_OTA_Modification_Alter), index.h("div", { key: '42e586d075644bd67676cb88e074a82fc786ee4e', class: "ir-dialog__footer", slot: "footer" }, index.h("ir-custom-button", { key: '9111de2900c4805a2b2eda551e57579216c8bd59', "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales_store.locales?.entries?.Lcz_Cancel), index.h("ir-custom-button", { key: '0d0ff309cea03ca0b9082591c90a6d103a4b0691', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "medium", variant: "brand", loading: irInterceptor_store.isRequestPending('/Change_Exposed_Booking_Status') }, locales_store.locales?.entries?.Lcz_Confirm))), index.h("ir-booking-source-editor-dialog", { key: 'b3556fbf76b507b83d6acbbbcc2e08665faaa86d', booking: this.booking, ref: el => (this.bookingSourceEditor = el) })));
    }
};
IrBookingHeader.style = IrBookingHeaderStyle0;

const irBookingRoomsCss = ".sc-ir-booking-rooms-h{display:block}.booking-details__date-view-header.sc-ir-booking-rooms{font-size:1.1rem !important}.room-group.sc-ir-booking-rooms{margin-bottom:1rem !important}.room-group.sc-ir-booking-rooms:last-child{margin-bottom:1.81rem !important}.service-group.sc-ir-booking-rooms{padding:0.125rem 0 0.25rem;border-left:3px solid transparent;padding-left:0.625rem}.service-group--guest.sc-ir-booking-rooms{border-left-color:var(--wa-color-neutral-300, #d4d4d8)}.service-group--agent.sc-ir-booking-rooms{border-left-color:var(--wa-color-primary-500, #3b82f6)}.service-group__label.sc-ir-booking-rooms{display:flex;align-items:center;gap:0.4rem;margin:0 0 0.75rem;font-size:0.75rem;font-weight:700;letter-spacing:0.06em;color:var(--wa-color-neutral-500, #71717a)}.service-group__label.--agent.sc-ir-booking-rooms{color:var(--wa-color-primary-600, #2563eb)}.service-group__dot.sc-ir-booking-rooms{display:inline-block;width:6px;height:6px;border-radius:50%;background-color:var(--wa-color-neutral-400, #a1a1aa);flex-shrink:0}.service-group--agent.sc-ir-booking-rooms .service-group__dot.sc-ir-booking-rooms{background-color:var(--wa-color-primary-500, #3b82f6)}.service-group__empty.sc-ir-booking-rooms{margin:0;padding:0.375rem 0;font-size:0.85rem;color:var(--wa-color-neutral-400, #a1a1aa);font-style:italic}";
const IrBookingRoomsStyle0 = irBookingRoomsCss;

const IrBookingRooms = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.roomDeleteFinished = index.createEvent(this, "roomDeleteFinished", 7);
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
        return utils.canCheckIn({ from_date: room.from_date, to_date: room.to_date, isCheckedIn: room.in_out?.code === utils.ROOM_IN_OUT.CHECKIN });
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
        return (index.h("ir-room", { key: room.identifier, room: room, property_id: this.propertyId, language: this.language, departureTime: this.departureTime, bedPreferences: this.bedPreference, isEditable: this.booking.is_editable, legendData: this.legendData, roomsInfo: this.roomsInfo, myRoomTypeFoodCat: room.roomtype.name, mealCodeName: room.rateplan.short_name, includeDepartureTime: includeDepartureTime, currency: this.booking.currency.symbol, hasRoomEdit: this.hasRoomEdit && this.booking.status.code !== '003' && this.booking.is_direct, hasRoomDelete: this.hasRoomDelete && this.booking.status.code !== '003' && this.booking.is_direct, hasCheckIn: showCheckin, hasCheckOut: showCheckout, booking: this.booking, agent: this.agent, clTransactions: this.clTransactions, bookingIndex: bookingIndex, onDeleteFinished: (e) => this.roomDeleteFinished.emit(e.detail) }));
    }
    renderRoomPool(rooms) {
        if (!rooms.length) {
            return index.h("p", { class: "room-group__empty" }, "No rooms in this group");
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
        const agentName = this.booking.agent?.name ?? 'Agent';
        return (index.h(index.Fragment, null, index.h("p", { class: "service-group__label --agent" }, agentName, index.h("span", null, "Folio")), index.h("div", { class: "service-group service-group--agent" }, index.h("div", { class: "service-group__body" }, agentRooms.length === 0 ? index.h("p", { class: "service-group__empty" }, "No agent rooms") : this.renderRoomPool(agentRooms))), index.h("wa-divider", null), index.h("p", { class: "service-group__label" }, "Guest", index.h("span", null, "Folio")), index.h("div", { class: "service-group service-group--guest" }, index.h("div", { class: "service-group__body" }, guestRooms.length === 0 ? index.h("p", { class: "service-group__empty" }, "No guest rooms") : this.renderRoomPool(guestRooms)))));
    }
    render() {
        if (!this.booking) {
            return null;
        }
        return (index.h("wa-card", null, index.h("ir-date-view", { class: "booking-details__date-view-header", slot: "header", from_date: this.booking.from_date, to_date: this.booking.to_date }), this.hasRoomAdd && this.booking.is_editable && (index.h(index.Fragment, null, index.h("wa-tooltip", { for: "room-add" }, "Add unit"), index.h("ir-custom-button", { slot: "header-actions", id: "room-add", appearance: 'plain', size: 'small', variant: 'neutral' }, index.h("wa-icon", { name: "plus", style: { fontSize: '1rem' }, label: "Add unit" })))), this.renderRooms()));
    }
};
IrBookingRooms.style = IrBookingRoomsStyle0;

const irBookingSourceEditorDialogCss = ".sc-ir-booking-source-editor-dialog-h{display:block}";
const IrBookingSourceEditorDialogStyle0 = irBookingSourceEditorDialogCss;

const IrBookingSourceEditorDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
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
        return (index.h("ir-dialog", { key: '262d742b53298ccd51ee25cefed71921d2f33988', label: "Change Booking Source", onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, open: this.open }, this.open && (index.h("ir-booking-source-editor-form", { key: '9de73b80c7954a557f2750ff6539fb2a42f15122', booking: this.booking, onBookingSourceSaved: () => {
                this.closeDialog();
                setTimeout(() => this.resetBookingEvt.emit(null), 100);
            }, onLoadingChange: e => (this.isLoading = e.detail) })), index.h("div", { key: 'f7ae470c264a1fc4cab0b5ac0f4eb042d3722b29', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: 'c590ee9177e506a577569ce24cd408cf164a3fac', size: "medium", "data-dialog": "close", appearance: "filled", variant: "neutral" }, "Cancel"), index.h("ir-custom-button", { key: '208e64badbccdc4286da894ebd5d637a376083eb', type: "submit", form: `change-source-form-${this.booking?.booking_nbr}`, size: "medium", appearance: "accent", variant: "brand", loading: this.isLoading }, "Save"))));
    }
};
IrBookingSourceEditorDialog.style = IrBookingSourceEditorDialogStyle0;

const irBookingSourceEditorFormCss = ".sc-ir-booking-source-editor-form-h{display:block}";
const IrBookingSourceEditorFormStyle0 = irBookingSourceEditorFormCss;

const IrBookingSourceEditorForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bookingSourceSaved = index.createEvent(this, "bookingSourceSaved", 7);
        this.loadingChange = index.createEvent(this, "loadingChange", 7);
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
        return (index.h("form", { key: 'b702113fbbc5c247b3904f9be7b329b7e91e9d11', id: `change-source-form-${this.booking?.booking_nbr}`, onSubmit: this.handleSubmit.bind(this) }, this.booking.agent === null && this.booking?.financial?.payments?.filter(p => !p.is_city_ledger)?.length > 0 && (index.h("wa-callout", { key: '493e480068e78efc63b9d549269543f3a6611246', size: "small", variant: "warning", style: { marginBottom: '1rem' } }, index.h("wa-icon", { key: '754cc08beaa869cd3e8c12d4b16c3e44d55f7dee', slot: "icon", name: "triangle-exclamation" }), "You have guest folio entries that may need to be removed and recreated in the agent folio.")), index.h("wa-select", { key: '52aa5ad9d67084838ecbe727f962512502ae99d7', label: "New source", onchange: this.handleSelectChange.bind(this), size: "small", value: this.selectedSource?.id, defaultValue: this.selectedSource?.id }, calendarData.calendar_data?.property?.allowed_booking_sources?.map(option => option.type === 'LABEL' ? (index.h("small", { key: option.id }, option.description)) : (index.h("wa-option", { key: option.id, value: option.id?.toString() }, option.description)))), isAssign && index.h("ir-booking-assign-items", { key: '5325a3f2bcdb757f0046124c462d937202101292', items: this.buildAssignableItems(), onBookingSelectionChange: e => (this.checkedItems = e.detail) })));
    }
    static get watchers() { return {
        "isLoading": ["handleLoadingChange"]
    }; }
};
IrBookingSourceEditorForm.style = IrBookingSourceEditorFormStyle0;

const irBookingStatusTagCss = ".sc-ir-booking-status-tag-h{display:block}";
const IrBookingStatusTagStyle0 = irBookingStatusTagCss;

const IrBookingStatusTag = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    status;
    isRequestToCancel;
    badgeVariant = {
        '001': 'warning',
        '002': 'success',
        '003': 'danger',
        '004': 'danger',
    };
    render() {
        return (index.h("wa-badge", { key: 'faf3734909d0b4acb4768844e4592a453d29c15c', style: { padding: '0.375em 0.625em', letterSpacing: '0.03rem' }, variant: this.badgeVariant[this.isRequestToCancel ? '003' : this.status.code] }, this.status.description.toUpperCase()));
    }
};
IrBookingStatusTag.style = IrBookingStatusTagStyle0;

const irCheckoutDialogCss = ".ir-dialog__footer{display:flex;align-items:center;gap:0.5rem;justify-content:flex-end;width:100%}.dialog__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px;min-width:31rem}:host{display:block}.dialog__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px}.early-checkout{display:grid;gap:1rem;width:100%;min-width:0;overflow-x:clip}.early-checkout ir-input,.early-checkout wa-callout,.early-checkout wa-card{min-width:0;max-width:100%}.ec-summary::part(message){display:flex;flex-direction:column;gap:0.5rem}.ec-summary__row{display:flex;justify-content:space-between;align-items:center}.ec-summary__label{font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280)}.ec-summary__value{font-size:0.8125rem;font-weight:500;color:var(--wa-color-text-normal, #111827)}.ec-summary__value--accent{color:var(--wa-color-brand-fill-loud, #2563eb);font-weight:600}.ec-section{display:grid;gap:0.35rem}.ec-section__title{margin:0;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--wa-color-text-quiet, #6b7280)}.ec-nights{border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.5rem;overflow:hidden}.ec-nights__row{display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0.875rem;font-size:0.8125rem;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.ec-nights__date{color:var(--wa-color-text-quiet, #6b7280)}.ec-nights__amount{font-weight:500;font-variant-numeric:tabular-nums;color:var(--wa-color-text-normal, #111827)}.ec-nights__subtotal{display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0.875rem;font-size:0.8125rem;font-weight:600;color:var(--wa-color-text-normal, #111827);background:var(--wa-color-neutral-fill-quiet, #f9fafb);border-top:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.ec-penalty__badge{margin:0;font-size:0.75rem;font-weight:500;color:var(--wa-color-warning-on-quiet, #92400e)}.ec-penalty__badge--waived{color:var(--wa-color-success-on-quiet, #065f46)}.ec-penalty__hint{margin:0;font-size:0.75rem;color:var(--wa-color-text-quiet, #6b7280)}.due-amount-btn{all:unset;display:block;width:100%;cursor:pointer;margin-bottom:var(--spacing)}.due-amount-btn:focus-visible{outline:2px solid var(--wa-color-brand-fill-loud);outline-offset:2px;border-radius:0.375rem}.ir-dialog__footer{display:flex;flex-wrap:wrap;gap:0.5rem;width:100%}.ir-dialog__footer>*{flex:1}@media (min-width: 640px){.ir-dialog__footer{flex-wrap:nowrap;justify-content:flex-end}.ir-dialog__footer>*{flex:0 0 auto}}";
const IrCheckoutDialogStyle0 = irCheckoutDialogCss;

const IrCheckoutDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.checkoutDialogClosed = index.createEvent(this, "checkoutDialogClosed", 7);
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
    checkoutDialogClosed;
    bookingService = new booking_service.BookingService();
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
            this.checkoutDialogClosed.emit({ reason: source === 'checkout&invoice' ? 'openInvoice' : 'checkout' });
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
        const toDate = moment.hooks(this.room.to_date, 'YYYY-MM-DD');
        this.isEarlyCheckout = today.isBefore(toDate, 'date');
        if (this.isEarlyCheckout) {
            if (this.room.agent === null) {
                this.isEarlyCheckout = false;
                return;
            }
            const todayStr = today.format('YYYY-MM-DD');
            this.remainingDays = (this.room.days ?? []).filter(d => d.date >= todayStr);
            const total = this.remainingTotal;
            this.penaltyAmount = total;
            this.initialPenaltyStr = total.toFixed(2);
        }
    }
    setupButtons() {
        const toBeInvoiced = this.invoiceInfo.invoiceable_items.filter(item => ![enums.InvoiceableItemReason.AlreadyInvoiced, enums.InvoiceableItemReason.PickupCancellationPolicy, enums.InvoiceableItemReason.NotCheckedOutYet].includes(item?.reason?.code));
        const toBeInvoicedRooms = toBeInvoiced.filter(item => item.type === 'BSA');
        if (toBeInvoiced.length === 0) {
            this.buttons.add('checkout');
            return;
        }
        const allRoomInvoiced = toBeInvoicedRooms.length === 0;
        this.buttons.add('invoice_checkout');
        if (!allRoomInvoiced && toBeInvoicedRooms.length > 1) {
            this.buttons.add('checkout_without_invoice');
        }
    }
    renderEarlyCheckoutContent() {
        const unitName = this.room?.unit?.name ?? this.room?.identifier;
        const remainingCount = this.remainingDays.length;
        const total = this.remainingTotal;
        return (index.h("div", { class: "early-checkout" }, index.h("wa-callout", { class: "ec-summary", size: "small", appearance: "filled", variant: "neutral" }, index.h("div", { class: "ec-summary__row" }, index.h("span", { class: "ec-summary__label" }, "Unit"), index.h("span", { class: "ec-summary__value" }, unitName)), index.h("div", { class: "ec-summary__row" }, index.h("span", { class: "ec-summary__label" }, "Original departure"), index.h("span", { class: "ec-summary__value" }, moment.hooks(this.room.to_date, 'YYYY-MM-DD').format('ddd, MMM D, YYYY'))), index.h("div", { class: "ec-summary__row" }, index.h("span", { class: "ec-summary__label" }, "Checking out"), index.h("span", { class: "ec-summary__value" }, moment.hooks().format('ddd, MMM D, YYYY')))), index.h("div", { class: "ec-section" }, index.h("p", { class: "ec-section__title" }, "Reclaimed Nights ", index.h("wa-badge", { pill: true }, remainingCount)), index.h("div", { class: "ec-nights" }, this.remainingDays.map(day => (index.h("div", { key: day.date, class: "ec-nights__row" }, index.h("span", { class: "ec-nights__date" }, moment.hooks(day.date, 'YYYY-MM-DD').format('ddd, MMM D')), index.h("span", { class: "ec-nights__amount" }, this.formatAmount(day.charges.total_amount))))), index.h("div", { class: "ec-nights__subtotal" }, index.h("span", null, "Subtotal (Including taxes and fees)"), index.h("span", null, this.formatAmount(total))))), index.h("div", { class: "ec-section" }, index.h("ir-input", { label: "Cancellation Penalty", mask: "price", value: this.initialPenaltyStr, defaultValue: this.initialPenaltyStr, min: 0, max: total, hint: "Pre-filled from reclaimed nights. Modify or waive entirely.", "onText-change": (e) => {
                const val = parseFloat(e.detail);
                this.penaltyAmount = isNaN(val) ? 0 : val;
            } }, index.h("span", { slot: "start" }, this.currencySymbol)))));
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
    renderDueAmountWarning() {
        const balance = this.booking?.guest_financial?.due_amount ?? 0;
        if (!balance || balance <= 0)
            return null;
        const amount = this.formatAmount(balance);
        return (index.h("button", { type: "button", class: "due-amount-btn", onClick: () => this.paymentFolioRef?.openFolio() }, index.h("wa-callout", { size: "small", variant: "danger" }, index.h("wa-icon", { slot: "icon", name: "money-bill-wave" }), "Outstanding guest balance: ", amount)));
    }
    renderSameDayWarning() {
        if (moment.hooks().isSame(moment.hooks(this.room.from_date, 'YYYY-MM-DD'), 'date')) {
            const isSingleRoom = this.booking.rooms.length === 1;
            return (index.h("wa-callout", { size: "small", variant: "danger", style: { marginBottom: 'var(--spacing)' } }, index.h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), "This ", isSingleRoom ? 'booking' : 'room', " will be ", isSingleRoom ? 'cancelled' : 'removed'));
        }
        return null;
    }
    renderMissingClWarning() {
        const summary = this.missingClSummary;
        if (!summary)
            return null;
        if (summary.total === 0) {
            return (index.h("wa-callout", { size: "small", variant: "success", style: { marginBottom: 'var(--spacing)' } }, index.h("wa-icon", { slot: "icon", name: "circle-check" }), "All charges posted to ", index.h("b", null, this.agent.name), " City Ledger"));
        }
        return (index.h("wa-callout", { size: "small", variant: "warning", style: { marginBottom: 'var(--spacing)' } }, index.h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), summary.total, " item", summary.total !== 1 ? 's' : '', " not posted to city ledger"));
    }
    render() {
        const isEarly = this.isEarlyCheckout && this.isLoading !== 'page';
        const hasDue = (this.booking?.financial?.due_amount ?? 0) > 0;
        return (index.h(index.Fragment, { key: '8fdb112dd297fa8ac76a62d7a4f7bc417606bc94' }, index.h("ir-dialog", { key: '328a6ed490fb0fa881fc96ef05b13470dec1a309', open: this.open, label: isEarly ? 'Early Check-Out' : 'Check-Out', style: { '--ir-dialog-width': isEarly ? 'min(36rem, calc(100vw - 2rem))' : 'fit-content' }, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.buttons.clear();
                this.checkoutDialogClosed.emit({ reason: 'cancel' });
            } }, this.isLoading === 'page' ? (index.h("div", { class: "dialog__loader-container" }, index.h("ir-spinner", null))) : (index.h(index.Fragment, null, this.renderDueAmountWarning(), this.renderMissingClWarning(), this.renderSameDayWarning(), this.isEarlyCheckout ? (this.renderEarlyCheckoutContent()) : (index.h("p", { style: { width: 'calc(31rem - var(--spacing))' } }, "Are you sure you want to check out unit ", this.room?.unit?.name, "?")))), index.h("div", { key: '2aade6c3beed365fc24296724a6da4bc60398b4d', slot: "footer", class: "ir-dialog__footer" }, index.h(index.Fragment, { key: '6f745297c49eabcbe9c9e8e2eba803f049391c8e' }, index.h("ir-custom-button", { key: 'cce684fe0a5a2398310e06fae8736e6355ee8cbb', size: "medium", "data-dialog": "close", appearance: "filled", variant: "neutral" }, locales_store.locales?.entries?.Lcz_Cancel ?? 'Cancel'), this.buttons.has('checkout') && (index.h("ir-custom-button", { key: '052d51e6af9f7d5f0984af6b1e3d4839378ef0bf', size: "medium", onClickHandler: e => this.checkoutRoom({ e, source: 'checkout' }), variant: 'brand', loading: this.isLoading === 'checkout' }, isEarly ? 'Confirm Early Check-Out' : 'Checkout')), this.buttons.has('checkout_without_invoice') && (index.h("ir-custom-button", { key: '82ec220051fa3614c1f01a014f4fd9ba0b0219b0', loading: this.isLoading === 'skipCheckout', size: "medium", onClickHandler: e => this.checkoutRoom({ e, source: 'skipCheckout' }), variant: 'brand', appearance: this.buttons.has('invoice_checkout') ? 'outlined' : 'accent' }, "Checkout without invoice")), this.buttons.has('invoice_checkout') && (index.h("ir-custom-button", { key: '0f672fcb4f36b86dbafcc9b1dae39c2869c27e39', size: "medium", loading: this.isLoading === 'checkout&invoice', onClickHandler: e => {
                this.checkoutRoom({ e, source: 'checkout&invoice' });
            }, variant: 'brand', appearance: 'accent' }, "Check out & invoice guest"))))), hasDue && this.paymentEntries && (index.h("ir-payment-folio", { key: '2158b753aa7c83ea1f47cade266164f3e9523dba', ref: el => (this.paymentFolioRef = el), booking: this.booking, bookingNumber: this.booking.booking_nbr, paymentEntries: this.paymentEntries, mode: 'payment-action', payment: this.duePayment }))));
    }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
};
IrCheckoutDialog.style = IrCheckoutDialogStyle0;

const irEventsLogCss = ".sc-ir-events-log-h{display:block}.beta.sc-ir-events-log{background:var(--red);color:white;padding:0.2rem 0.3rem;font-size:12px;border-radius:4px;margin:0}.event-row.sc-ir-events-log{padding-bottom:0.5rem}.list-title.sc-ir-events-log{margin:0;padding:0;font-size:14px;font-weight:bold;width:fit-content}.list-item.sc-ir-events-log{margin:0;padding:0;font-size:14px;margin-left:5px;width:fit-content}.list-item.green.sc-ir-events-log{color:#629a4c;font-weight:600}.list-item.red.sc-ir-events-log{color:#ff4961;font-weight:600}.dates-row.sc-ir-events-log{display:flex;align-items:center;gap:0.875rem}";
const IrEventsLogStyle0 = irEventsLogCss;

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
        return (index.h("div", { key: '1bb402539cf870e6c71bc8992eb22f742ae7a425', class: "" }, irInterceptor_store.isRequestPending('/Get_Exposed_Booking_Events') ? (index.h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, index.h("ir-spinner", null))) : (index.h(index.Fragment, null, index.h("table", { class: " dialog-container-height" }, index.h("thead", { class: "sr-only" }, index.h("tr", null, index.h("th", null, "date"), index.h("th", null, "user"), index.h("th", null, "status"))), index.h("tbody", null, this.bookingEvents?.map(e => (index.h("tr", { key: e.id, class: "pb-1" }, index.h("td", { class: "event-row dates-row" }, index.h("span", null, e.date), index.h("span", null, String(e.hour).padStart(2, '0'), ":", String(e.minute).padStart(2, '0'), ":", String(e.second).padStart(2, '0'))), index.h("td", { class: "pl-3 event-row " }, e.type), index.h("td", { class: "pl-1 event-row " }, e.user))))))))));
    }
};
IrEventsLog.style = IrEventsLogStyle0;

const irExtraServiceCss = ".sc-ir-extra-service-h{display:block}.es-row.sc-ir-extra-service{display:flex;align-items:flex-start;gap:0.75rem}.es-content.sc-ir-extra-service{flex:1;min-width:0}.es-description.sc-ir-extra-service{margin:0;font-size:var(--wa-font-size-m);line-height:1.5;color:var(--wa-color-neutral-800, #27272a);word-break:break-word}.es-category-badge.sc-ir-extra-service{display:inline-block;font-size:0.6875rem;font-weight:600;color:var(--wa-color-primary-700, #1d4ed8);background:var(--wa-color-primary-50, #eff6ff);border-radius:4px;padding:1px 6px;margin-right:6px;vertical-align:middle;white-space:nowrap}.es-date.sc-ir-extra-service{display:flex;align-items:center;gap:4px;margin-top:5px;font-size:var(--wa-font-size-s)}.es-aside.sc-ir-extra-service{display:flex;align-items:flex-start;gap:0.25rem;flex-shrink:0}.es-pricing.sc-ir-extra-service{text-align:right}.es-price.sc-ir-extra-service{margin:0;font-weight:700;white-space:nowrap;line-height:1.4;color:var(--wa-color-neutral-900, #18181b)}.es-vat.sc-ir-extra-service{margin:2px 0 0;font-size:var(--wa-font-size-xs);color:var(--wa-color-neutral-500, #71717a);white-space:nowrap}";
const IrExtraServiceStyle0 = irExtraServiceCss;

const IrExtraService = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.editExtraService = index.createEvent(this, "editExtraService", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
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
    get description() {
        const category = this.svcCategories?.find(c => c.CODE_NAME === this.service?.category?.code);
        if (category) {
            return (index.h("span", null, index.h("span", null, utils.getEntryValue({ entry: category, language: this.language }), ": "), this.service.description));
        }
        return this.service.description;
    }
    get matchedTx() {
        return this.clTransactions.find(tx => tx.REL_ENTITY_KEY === this.service.system_id) ?? null;
    }
    render() {
        const agentMode = functions.isAgentMode(this.agent);
        const tx = this.matchedTx;
        const statusTag = tx ? index.h("ir-cl-status-tag", { transaction: { _rowId: '', ...utils$1.mapClTxToFolioRow(tx), balance: 0 }, size: "extra-small" }) : null;
        return (index.h(index.Host, { key: '6c177d738b2b81de1e007c094ece89352bd50145' }, index.h("div", { key: '5928b5d6640476919c7cb5cdebc57c6d33e227da', class: "es-row" }, index.h("div", { key: 'bc6f8e5c2a5321dcfa5592e52eadc506386ccdc4', class: "es-content" }, index.h("p", { key: '694449ef3028ca9b70cecd78b9a61bf028ad2018', class: "es-description" }, this.description), this.service.start_date ? (index.h("div", { class: "es-date" }, this.service.end_date ? (index.h("ir-date-view", { from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (index.h("span", null, moment.hooks(new Date(this.service.start_date)).format('MMM DD, YYYY'))), statusTag)) : (statusTag)), index.h("div", { key: '697b1b72f6c334e23972556a548f403d0da4798b', class: "es-aside" }, !!this.service.price && this.service.price > 0 && (index.h("div", { key: '32cade8a8d938836847c6f1dc6d2976b51444d57', class: "es-pricing" }, index.h("p", { key: '64f2bdb26653ec51e909f03d32d7b013888f6359', class: "es-price" }, utils.formatAmount(this.currencySymbol, this.service.price)), !!this.service.charges?.vat_percent && index.h("p", { key: '309c4064f9f8932b31d6ab5adb90af3895cab048', class: "es-vat" }, "incl. ", this.service.charges.vat_percent, "% VAT"))), index.h("wa-dropdown", { key: 'd867271d5b9b74a5525e7762cf184094317f0f96', "onwa-show": e => {
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
            } }, index.h("ir-custom-button", { key: '36caad02f398398750aacfc31cbe0ef6c06d741f', slot: "trigger", size: "small", appearance: "plain", id: `actions-room-${this.service.system_id}`, iconBtn: true, variant: "neutral" }, index.h("wa-icon", { key: 'd3cf7818bbd2ed96881b3a1d412a5c5dae19237b', style: { fontSize: '1rem' }, label: "Actions", name: "ellipsis-vertical" })), index.h("wa-dropdown-item", { key: '2d1244c11c2fa4de99b1edf849b55b96a91813e2', value: "edit" }, "Edit"), agentMode && index.h("wa-dropdown-item", { key: 'a82c8724c8ae583897edf7ceb36b81f808cd4811', value: "toggle" }, "Re-assign to ", this.service.agent ? 'guest' : 'agent', " folio"), index.h("wa-dropdown-item", { key: '0f3f01ab662b403e8ce1d2e2a0d5865ac4237fba', value: "delete", variant: "danger" }, "Delete")))), index.h("ir-assignment-toggle-dialog", { key: 'e8990eacc60a7da156abce7e29fef1ad75f60327', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, message: `Switch "${this.service.description}" to ${this.service.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent')}?`, onConfirmToggle: () => this.toggleServiceAgent() }, index.h("span", { key: '59b38a67036a7f13875eed9f920848cea2b73a1d', slot: "message" }, "Re-assign ", this.description, " ", index.h("br", { key: '2362311a96f9885460968ce296157e11f95a7403' }), " from ", this.service.agent ? 'Agent' : 'Guest', " folio to ", index.h("b", { key: '6f598c8a7443b1c5db45b5d993ece85d970f65fe' }, this.service.agent ? 'Guest' : 'Agent', " folio"), ".")), index.h("ir-dialog", { key: '9d67010b63ecee73df6ff78de2c8978331021fef', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: "Alert", ref: el => (this.irModalRef = el), lightDismiss: false }, `${locales_store.locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales_store.locales.entries.Lcz_ThisService} ${locales_store.locales.entries.Lcz_FromThisBooking}`, index.h("div", { key: '45d6f37a9ba0f105c9965e1f49d13b9ee4218003', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: 'c29947d967f6c56291f02ba6f120f108e41012d5', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close" }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { key: 'b7828fdca778c18ac3650fa5fdcea4c5fa7a6255', onClickHandler: () => this.deleteService(), loading: irInterceptor_store.isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "medium" }, locales_store.locales.entries.Lcz_Delete)))));
    }
};
IrExtraService.style = IrExtraServiceStyle0;

const irExtraServiceConfigCss = ".sc-ir-extra-service-config-h{display:block;--ir-input-border-color:#cacfe7}.sc-ir-extra-service-config-h .input-group-text.sc-ir-extra-service-config{border-color:var(--ir-input-border-color)}.currency-ph.sc-ir-extra-service-config{padding:0;margin:0;color:#3b4781;display:flex;align-items:center;justify-content:center;padding:0 0 0 0.25rem;border-top:1px solid var(--ir-input-border-color);border-bottom:1px solid var(--ir-input-border-color);border-left:1px solid transparent;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.service-description-input.sc-ir-extra-service-config{height:70px !important}.service-description.sc-ir-extra-service-config .input-group-prepend.sc-ir-extra-service-config{background-color:#f4f5fa;border:1px solid var(--ir-input-border-color);border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem}.service-date-container.sc-ir-extra-service-config{padding:0;margin:0;display:flex;align-items:center;position:relative;width:100%;justify-content:center}.service-date-container.sc-ir-extra-service-config .btn-container.sc-ir-extra-service-config{position:absolute;right:5px;margin:0;display:flex;align-items:center;justify-content:center;padding:0}.service-description.sc-ir-extra-service-config .input-group-text.sc-ir-extra-service-config{height:fit-content;border:0;padding-top:0.75rem !important}.price-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config,.cost-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-left:1px solid #1e9ff2}.currency-ph[data-state='error'].sc-ir-extra-service-config{border-color:var(--red, #ff4961)}.price-input.sc-ir-extra-service-config:focus{border-right-width:1px !important}.is-invalid.sc-ir-extra-service-config{background-image:none !important}.price-input.sc-ir-extra-service-config,.cost-input.sc-ir-extra-service-config{border-left:0}.row-group.sc-ir-extra-service-config{display:flex;flex-direction:column;gap:0.5rem}.extra-service-config__container.sc-ir-extra-service-config{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.row-group.sc-ir-extra-service-config{flex-direction:row;align-items:center;gap:0}.cost-label.sc-ir-extra-service-config{border-top-left-radius:0;border-bottom-left-radius:0;border-left:0}.until-prepend.sc-ir-extra-service-config,.cost-input-placeholder.sc-ir-extra-service-config{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.date-from.sc-ir-extra-service-config,.price-input.sc-ir-extra-service-config{border-right-width:0 !important;border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}}.date-focused.sc-ir-extra-service-config{border-color:#1e9ff2}";
const IrExtraServiceConfigStyle0 = irExtraServiceConfigCss;

const IrExtraServiceConfig = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
    }
    booking;
    agent;
    svcCategories = [];
    service;
    language;
    open;
    closeModal;
    closeDialog() {
        this.closeModal.emit();
    }
    render() {
        return (index.h("ir-drawer", { key: '61aec2039f051adcebe0e0af8969fa3485a34af8', style: {
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
            }, label: locales_store.locales.entries.Lcz_ExtraServices }, this.open && (index.h("ir-extra-service-config-form", { key: 'f6fa8c408bfd0ca5c3d9dd2bff72d773da7c0e3e', language: this.language ?? 'en', svcCategories: this.svcCategories, onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDialog();
            }, booking: this.booking, agent: this.agent, service: this.service })), index.h("div", { key: '698cb62e5f150986f00026709d1b78cfd8f1e052', slot: "footer", class: 'ir__drawer-footer' }, index.h("ir-custom-button", { key: '58df85cebabdddce154875832eec4327b06622ef', class: `flex-fill`, size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { key: 'bb659da2fc814a1ee75b27a39772c1f34d3bc583', type: "submit", loading: irInterceptor_store.isRequestPending('/Do_Booking_Extra_Service'), form: "extra-service-config-form", size: "medium", class: `flex-fill`, variant: "brand" }, locales_store.locales.entries.Lcz_Save))));
    }
};
IrExtraServiceConfig.style = IrExtraServiceConfigStyle0;

const irExtraServiceConfigFormCss = ".sc-ir-extra-service-config-form-h{display:block;--ir-input-border-color:#cacfe7}.sc-ir-extra-service-config-form-h .input-group-text.sc-ir-extra-service-config-form{border-color:var(--ir-input-border-color)}.currency-ph.sc-ir-extra-service-config-form{padding:0;margin:0;color:#3b4781;display:flex;align-items:center;justify-content:center;padding:0 0 0 0.25rem;border-top:1px solid var(--ir-input-border-color);border-bottom:1px solid var(--ir-input-border-color);border-left:1px solid transparent;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.service-description-input.sc-ir-extra-service-config-form{height:70px !important}.service-description.sc-ir-extra-service-config-form .input-group-prepend.sc-ir-extra-service-config-form{background-color:#f4f5fa;border:1px solid var(--ir-input-border-color);border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem}.service-date-container.sc-ir-extra-service-config-form{padding:0;margin:0;display:flex;align-items:center;position:relative;width:100%;justify-content:center}.service-date-container.sc-ir-extra-service-config-form .btn-container.sc-ir-extra-service-config-form{position:absolute;right:5px;margin:0;display:flex;align-items:center;justify-content:center;padding:0}.service-description.sc-ir-extra-service-config-form .input-group-text.sc-ir-extra-service-config-form{height:fit-content;border:0;padding-top:0.75rem !important}.price-input-group.sc-ir-extra-service-config-form:focus-within .currency-ph.sc-ir-extra-service-config-form,.cost-input-group.sc-ir-extra-service-config-form:focus-within .currency-ph.sc-ir-extra-service-config-form{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-left:1px solid #1e9ff2}.currency-ph[data-state='error'].sc-ir-extra-service-config-form{border-color:var(--red, #ff4961)}.price-input.sc-ir-extra-service-config-form:focus{border-right-width:1px !important}.is-invalid.sc-ir-extra-service-config-form{background-image:none !important}.price-input.sc-ir-extra-service-config-form,.cost-input.sc-ir-extra-service-config-form{border-left:0}.row-group.sc-ir-extra-service-config-form{display:flex;flex-direction:column;gap:0.5rem}.extra-service-config__container.sc-ir-extra-service-config-form{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.row-group.sc-ir-extra-service-config-form{flex-direction:row;align-items:center;gap:0}.cost-label.sc-ir-extra-service-config-form{border-top-left-radius:0;border-bottom-left-radius:0;border-left:0}.until-prepend.sc-ir-extra-service-config-form,.cost-input-placeholder.sc-ir-extra-service-config-form{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.date-from.sc-ir-extra-service-config-form,.price-input.sc-ir-extra-service-config-form{border-right-width:0 !important;border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}}.date-focused.sc-ir-extra-service-config-form{border-color:#1e9ff2}";
const IrExtraServiceConfigFormStyle0 = irExtraServiceConfigFormCss;

const IrExtraServiceConfigForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
    }
    booking;
    agent;
    service;
    svcCategories = [];
    language;
    s_service;
    error;
    fromDateClicked;
    toDateClicked;
    autoValidate;
    assignee = 'guest';
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
            if (!this.service.agent) {
                this.assignee = 'guest';
            }
        }
    }
    get categories() {
        const taxPctByCode = Object.fromEntries(calendarData.calendar_data.property.tax_categories.filter(c => c.taxation_mode?.code !== property_service.taxationModes.NOT_APPLICABLE).map(c => [c.category.code, c.pct]));
        return this.svcCategories.filter(cat => taxPctByCode[cat.CODE_NAME]).map(cat => ({ ...cat, pct: taxPctByCode[cat.CODE_NAME] }));
    }
    async saveAmenity() {
        try {
            this.autoValidate = true;
            const service = { ...(this.s_service ?? {}), agent: this.assignee === 'agent' ? this.booking.agent : null };
            utils.ExtraServiceSchema.parse(service);
            await this.bookingService.doBookingExtraService({
                service,
                booking_nbr: this.booking.booking_nbr,
                is_remove: false,
            });
            this.resetBookingEvt.emit(null);
            this.closeDialog();
        }
        catch (error) {
            if (error instanceof index$2.ZodError) {
                this.error = true;
            }
            console.error(error);
        }
    }
    closeDialog() {
        this.closeModal.emit();
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
        return (index.h("form", { key: '115684af130104f8090d6718a4cb2e4eb2e5b13a', id: "extra-service-config-form", onSubmit: async (e) => {
                e.preventDefault();
                this.saveAmenity();
            }, class: 'extra-service-config__container' }, this.categories.length > 0 && (index.h("ir-validator", { key: '8cde66a2ae88277fc9492c44f08738088166924c', value: this.s_service?.category, schema: utils.ExtraServiceSchema.shape.category }, index.h("wa-select", { key: 'af04ac175b81962b0de78784f6cdd119034db832', size: "small", label: "Service category", value: this.s_service?.category?.code ?? '', defaultValue: this.s_service?.category?.code ?? '', onchange: (e) => {
                this.updateService({ category: { code: e.target.value } });
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, this.categories?.map(category => {
            const langKey = `CODE_VALUE_${(this.language ?? 'en').toUpperCase()}`;
            const label = (category[langKey] ?? category.CODE_VALUE_EN ?? '') + ` (VAT ${category.pct}%)`;
            return (index.h("wa-option", { value: category.CODE_NAME, label: label }, label));
        })))), index.h("ir-validator", { key: '060cc33605304f46b2c84c3f3d56c434e64aa2f6', id: "amenity description-validator", schema: utils.ExtraServiceSchema.shape.description }, index.h("wa-textarea", { key: '568196bca11e7eae2c65e4ebe0a50eef3c6cf20a', size: "small", defaultValue: this.s_service?.description, value: this.s_service?.description, onchange: e => this.updateService({ description: e.target.value }), id: "amenity-description", "aria-label": "Amenity description", maxlength: 250, label: locales_store.locales.entries.Lcz_Description })), index.h("ir-validator", { key: '888d73ca11719f62d7c9ab6b6f3a6fa01df8ebc5', value: this.s_service?.start_date ?? null, schema: utils.ExtraServiceSchema.shape.start_date }, index.h("ir-custom-date-picker", { key: '27a606c6582d2d9a0120c469b539d91d69644034', placeholder: "Select date", withClear: true, label: "Dates on", emitEmptyDate: true, date: this.s_service?.start_date, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => this.updateService({ start_date: e.detail.start?.format('YYYY-MM-DD') }) })), index.h("ir-custom-date-picker", { key: 'a362ab9a816def2f9f104ca88973dd7c7645dac1', withClear: true, emitEmptyDate: true, placeholder: "Select date", date: this.s_service?.end_date, minDate: this.s_service?.start_date ?? this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: e.detail.start?.format('YYYY-MM-DD') });
            }, label: "Till and including" }), index.h("ir-validator", { key: '22d7d8279a6ca5b0b681ccd6bfc9a6d85f8a45ce', value: this.s_service?.price ?? null, schema: utils.ExtraServiceSchema.shape.price }, index.h("ir-input", { key: '9a508c0a9dee7797de9da50649bfdcf74635f8cc', "onText-change": e => {
                this.updateService({ price: Number(e.detail) });
            }, defaultValue: this.s_service?.price?.toString(), value: this.s_service?.price?.toString(), mask: 'price', type: "text", label: `${locales_store.locales.entries.Lcz_Price} (including tax)` }, index.h("span", { key: '025822ae21ff7c4d832e35709d687ca9de97970b', slot: "start" }, this.booking.currency.symbol))), index.h("ir-validator", { key: '98e0f1a68b4131ed0ee541d5387ac187b2f8ed85', value: this.s_service?.cost ?? null, schema: utils.ExtraServiceSchema.shape.cost }, index.h("ir-input", { key: 'd4fd3421a6d93d3df065a7d4f71a15b12b6184ca', defaultValue: this.s_service?.cost?.toString(), "onText-change": e => this.updateService({ cost: Number(e.detail) }), value: this.s_service?.cost?.toString(), mask: 'price', label: `${locales_store.locales.entries.Lcz_Cost} (optional)` }, index.h("span", { key: 'da87d950896ebdceaf18af8f4ed5e4a238428f85', slot: "start" }, this.booking.currency.symbol))), functions.isAgentMode(this.agent) && (index.h("ir-service-assignee-select", { key: '660ab5fb7dfe871ba1b0aa03da07e67b0f1510d6', assigneeType: this.assignee, onAssignmentChange: e => this.assignmentChanged(e), agent: this.booking.agent }))));
    }
    static get watchers() { return {
        "service": ["handleServiceChange"]
    }; }
};
IrExtraServiceConfigForm.style = IrExtraServiceConfigFormStyle0;

const irExtraServicesCss = ".sc-ir-extra-services-h{display:block}.service-group.sc-ir-extra-services{padding:0.125rem 0 0.25rem;border-left:3px solid transparent;padding-left:0.625rem}.service-group--guest.sc-ir-extra-services{border-left-color:var(--wa-color-neutral-300, #d4d4d8)}.service-group--agent.sc-ir-extra-services{border-left-color:var(--wa-color-brand-fill-loud, #3b82f6)}.service-group__label.sc-ir-extra-services{display:flex;align-items:center;gap:0.4rem;margin:0 0 0.75rem;font-size:0.75rem;font-weight:700;letter-spacing:0.06em;color:var(--wa-color-neutral-500, #71717a)}.service-group__label.--agent.sc-ir-extra-services{color:var(--wa-color-primary-600, #2563eb)}.service-group__dot.sc-ir-extra-services{display:inline-block;width:6px;height:6px;border-radius:50%;background-color:var(--wa-color-neutral-400, #a1a1aa);flex-shrink:0}.service-group--agent.sc-ir-extra-services .service-group__dot.sc-ir-extra-services{background-color:var(--wa-color-primary-500, #3b82f6)}.service-group__empty.sc-ir-extra-services{margin:0;padding:0.375rem 0;font-size:0.85rem;color:var(--wa-color-neutral-400, #a1a1aa);font-style:italic}";
const IrExtraServicesStyle0 = irExtraServicesCss;

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
        return services.map((service, index$1) => (index.h(index.Fragment, null, index.h("ir-extra-service", { language: this.language, svcCategories: this.svcCategories, booking: this.booking, bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service, agent: this.agent, clTransactions: this.clTransactions }), index$1 !== services.length - 1 && index.h("wa-divider", null))));
    }
    render() {
        const services = this.booking.extra_services ?? [];
        if (functions.isAgentMode(this.agent)) {
            const guestServices = services.filter(s => s.agent === null || s.agent === undefined);
            const agentServices = services.filter(s => s.agent !== null && s.agent !== undefined);
            const agentName = this.booking.agent?.name ?? 'Agent';
            return (index.h(index.Host, null, index.h("wa-card", null, index.h("p", { slot: "header", class: 'font-size-large p-0 m-0' }, locales_store.locales.entries.Lcz_ExtraServices), index.h("wa-tooltip", { for: "extra_service_btn" }, "Add extra service"), index.h("ir-custom-button", { slot: "header-actions", id: "extra_service_btn", size: "small", appearance: "plain", variant: "neutral" }, index.h("wa-icon", { name: "plus", style: { fontSize: '1rem' } })), services.length === 0 ? (index.h("ir-empty-state", { showIcon: false })) : (index.h(index.Fragment, null, index.h("p", { class: "service-group__label --agent" }, agentName, index.h("span", null, "Folio")), index.h("div", { class: "service-group service-group--agent" }, index.h("div", { class: "service-group__body" }, agentServices.length === 0 ? index.h("p", { class: "service-group__empty" }, "No agent services added") : this.renderServiceList(agentServices))), index.h("wa-divider", null), index.h("p", { class: "service-group__label" }, "Guest", index.h("span", null, "Folio")), index.h("div", { class: "service-group service-group--guest" }, index.h("div", { class: "service-group__body" }, guestServices.length === 0 ? index.h("p", { class: "service-group__empty" }, "No guest services added") : this.renderServiceList(guestServices))))))));
        }
        return (index.h(index.Host, null, index.h("wa-card", null, index.h("p", { slot: "header", class: 'font-size-large p-0 m-0 ' }, locales_store.locales.entries.Lcz_ExtraServices), index.h("wa-tooltip", { for: "extra_service_btn" }, "Add extra service"), index.h("ir-custom-button", { slot: "header-actions", id: "extra_service_btn", size: "small", appearance: "plain", variant: "neutral" }, index.h("wa-icon", { name: "plus", style: { fontSize: '1rem' } })), services.length === 0 && index.h("ir-empty-state", { showIcon: false }), this.renderServiceList(services))));
    }
};
IrExtraServices.style = IrExtraServicesStyle0;

const irGuestBillingCss = ".sc-ir-guest-billing-h {\n  \n  --ir-cell-padding: 0.5rem 1rem;\n}\n.ir-table-row.sc-ir-guest-billing td.sc-ir-guest-billing {\n  padding: var(--ir-cell-padding) !important;\n  text-align: left;\n  z-index: 2;\n  background-color: var(--wa-color-surface-default);\n  white-space: nowrap;\n  color: var(--wa-color-text-normal);\n  box-sizing: border-box;\n  \n}\n\n\n\n.table--container.sc-ir-guest-billing {\n  overflow-x: auto;\n}\n.table.sc-ir-guest-billing td.sc-ir-guest-billing {\n  border-top: 0;\n  border-bottom: 1px solid var(--wa-color-neutral-border-quiet, #abaeb9);\n  \n  transition:\n    color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out;\n}\n.table.sc-ir-guest-billing tbody.sc-ir-guest-billing tr.sc-ir-guest-billing:last-child > td.sc-ir-guest-billing {\n  border-bottom: 0 !important;\n}\n.table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sc-ir-guest-billing {\n  border: none !important;\n  background: #ececec;\n  background: color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);\n  color: #374151;\n  padding: 0.5rem 1rem !important;\n  text-align: left;\n}\n.data-table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sc-ir-guest-billing {\n  box-sizing: border-box;\n  background: var(--wa-color-surface-default) !important;\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n  border-bottom: 1px solid var(--wa-color-neutral-90) !important;\n  color: var(--wa-color-text-normal);\n  \n}\n\n.data-table.sc-ir-guest-billing .empty-row.sc-ir-guest-billing {\n  height: 50vh !important;\n  text-align: center;\n  color: var(--wa-color-gray-60);\n}\n\n.data-table--pagination.sc-ir-guest-billing {\n  padding: 0.5rem 1rem;\n  \n  background: var(--wa-color-surface-default);\n  border-top: 1px solid var(--wa-color-neutral-90);\n}\n\n\n\n.selected.sc-ir-guest-billing td.sc-ir-guest-billing {\n  background: var(--wa-color-brand-fill-quiet) !important;\n  border-color: var(--wa-color-brand-fill-normal) !important;\n}\n.selected.sc-ir-guest-billing td.sc-ir-guest-billing {\n  color: var(--gray-dark) !important;\n  transition:\n    color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out;\n}\n\n\n.sortable.sc-ir-guest-billing, .ir-table-row.sc-ir-guest-billing {\n  transition:\n    color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out;\n}\n.sortable.sc-ir-guest-billing {\n  text-transform: capitalize;\n  cursor: pointer;\n}\n.ir-table-row.sc-ir-guest-billing td.sc-ir-guest-billing {\n  transition-duration: var(--wa-transition-fast);\n}\n.table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sortable.sc-ir-guest-billing {\n  transition-property: background, border, box-shadow, color;\n  transition-duration: var(--wa-transition-fast);\n  transition-timing-function: var(--wa-transition-easing);\n}\n\n.table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sortable.sc-ir-guest-billing:hover {\n  color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n  background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important;\n}\n.table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sortable.sc-ir-guest-billing:active {\n  color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n  background-color: color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important;\n}\n\n.ir-table-row.sc-ir-guest-billing:hover td.sc-ir-guest-billing {\n  background: #e2e6ea3f !important;\n  background: var(--wa-color-neutral-fill-quiet, #f1f2f3) !important;\n}\n.--clickable.ir-table-row.sc-ir-guest-billing:hover td.sc-ir-guest-billing {\n  background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important;\n}\n.--clickable.ir-table-row.sc-ir-guest-billing:active td.sc-ir-guest-billing {\n  background-color: color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important;\n}\n.selected.ir-table-row.sc-ir-guest-billing:hover td.sc-ir-guest-billing {\n  background-color: color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important;\n}\n.selected.ir-table-row.sc-ir-guest-billing:active td.sc-ir-guest-billing {\n  background-color: color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important;\n}\n.sortable.sc-ir-guest-billing:active {\n  color: #212529;\n  background-color: #e2e8f0;\n  border-color: #d3d9df;\n}\n.sortable.sc-ir-guest-billing svg.sc-ir-guest-billing {\n  color: var(--wa-color-brand-fill-loud);\n}\n\n.sticky-column.sc-ir-guest-billing {\n  position: sticky !important;\n  right: 0;\n  background-color: white;\n}\n.table--container.sc-ir-guest-billing, .data-table.sc-ir-guest-billing {\n  height: 100%;\n}\n\n.sc-ir-guest-billing-h {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.billing__container.sc-ir-guest-billing {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  gap: var(--wa-space-l);\n  padding: 0 var(--wa-space-l);\n}\n.billing__section-title-row.sc-ir-guest-billing {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.billing__section-title.sc-ir-guest-billing {\n  margin: 0;\n  padding: 0;\n  font-family: var(--wa-font-family-heading);\n  font-weight: var(--wa-font-weight-heading);\n  line-height: var(--wa-line-height-condensed);\n  text-wrap: balance;\n  font-size: var(--wa-font-size-m);\n}\n.billing__actions-row.sc-ir-guest-billing {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n  \n  gap: 0.5rem;\n}\n.billing__invoice-nbr.sc-ir-guest-billing {\n  margin: 0;\n  padding: 0;\n}\n.billing__invoice-nbr.--secondary.sc-ir-guest-billing {\n  font-size: 0.75rem;\n}\n.billing__price-col.sc-ir-guest-billing {\n  text-align: end !important;\n}\n\n\n.billing__cards.sc-ir-guest-billing {\n  display: flex;\n  flex-direction: column;\n  gap: var(--wa-space-m);\n  padding-bottom: var(--wa-space-l) !important;\n}\n\n\n.billing__card.sc-ir-guest-billing {\n  display: block;\n}\n\n\n.billing__card-header.sc-ir-guest-billing {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.billing__card-header-info.sc-ir-guest-billing {\n  display: flex;\n  flex-direction: column;\n}\n\n.billing__card-number.sc-ir-guest-billing {\n  margin: 0;\n  font-weight: var(--wa-font-weight-heading);\n  font-family: var(--wa-font-family-heading);\n}\n\n.billing__card-type.sc-ir-guest-billing {\n  margin: 0;\n  font-size: var(--wa-font-size-xs);\n  color: var(--wa-color-text-secondary);\n}\n\n\n.billing__card-download-btn.sc-ir-guest-billing {\n  display: flex;\n  align-items: center;\n}\n\n\n.billing__card-details.sc-ir-guest-billing {\n  display: flex;\n  \n  gap: var(--wa-space-xs);\n  justify-content: space-between;\n}\n\n.billing__card-detail.sc-ir-guest-billing {\n  display: flex;\n  flex-direction: column;\n}\n\n.billing__card-detail-label.sc-ir-guest-billing {\n  margin: 0;\n  font-size: var(--wa-font-size-xs);\n  color: var(--wa-color-text-quiet);\n}\n.billing__card-detail-label.--amount.sc-ir-guest-billing {\n  text-align: end !important;\n}\n.billing__card-detail-value.sc-ir-guest-billing {\n  margin: 0;\n  font-weight: var(--wa-font-weight-regular);\n  font-size: var(--wa-font-size-s);\n}\n.billing__card-void-btn.sc-ir-guest-billing {\n  flex: 1 1 0%;\n}\n\n\n.billing__card-footer.sc-ir-guest-billing {\n  display: flex;\n}\n.table-container.sc-ir-guest-billing {\n  display: none;\n}\n.billing__empty-state.sc-ir-guest-billing {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 30vh;\n}\n.billing__card.sc-ir-guest-billing::part(footer) {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.guest-billing__pdf-viewer.sc-ir-guest-billing {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media (min-width: 768px) {\n  .billing__cards.sc-ir-guest-billing {\n    display: none;\n  }\n  .table-container.sc-ir-guest-billing {\n    display: block;\n  }\n}\n@media print {\n  .guest-billing__pdf-viewer.sc-ir-guest-billing {\n    margin: 0;\n  }\n  @page {\n    margin.sc-ir-guest-billing: 0.sc-ir-guest-billing;\n  }\n\n  body.sc-ir-guest-billing {\n    margin: 0;\n  }\n}";
const IrGuestBillingStyle0 = irGuestBillingCss;

const IrGuestBilling = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.billingClose = index.createEvent(this, "billingClose", 7);
    }
    booking;
    isOpen = null;
    isLoading = 'page';
    invoiceInfo;
    selectedInvoice = null;
    pdfUrl = null;
    billingClose;
    bookingService = new booking_service.BookingService();
    _id = `issue_invoice__btn_${v4.v4()}`;
    componentWillLoad() {
        this.init();
    }
    async handleInvoiceCreation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.invoiceInfo = { ...e.detail };
    }
    async init() {
        try {
            this.isLoading = 'page';
            this.invoiceInfo = await this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    async voidInvoice(e) {
        this.isLoading = 'void';
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.bookingService.voidInvoice({
            invoice_nbr: this.selectedInvoice,
            property_id: calendarData.calendar_data.property.id,
            reason: '',
        });
        this.invoiceInfo = await this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr });
        this.isLoading = null;
        this.selectedInvoice = null;
    }
    get invoices() {
        const _invoices = [];
        for (const invoice of this.invoiceInfo.invoices) {
            if (invoice.status.code === 'VALID') {
                _invoices.push(invoice);
            }
            else {
                _invoices.push({ ...invoice, status: { code: 'VALID', description: '' } });
                _invoices.push({ ...invoice, date: invoice.credit_note.date });
            }
        }
        return _invoices.sort((a, b) => {
            const aDate = moment.hooks(a.date ?? a.credit_note?.date, 'YYYY-MM-DD');
            const bDate = moment.hooks(b.date ?? b.credit_note?.date, 'YYYY-MM-DD');
            return aDate.diff(bDate); // ASC order
        });
    }
    async printInvoice({ invoice, autoDownload, mode = 'invoice' }) {
        try {
            const { My_Result } = await this.bookingService.printInvoice({
                property_id: calendarData.calendar_data.property.id,
                invoice_nbr: invoice.nbr,
                mode,
            });
            if (!My_Result) {
                return;
            }
            if (autoDownload) {
                utils.downloadFile(My_Result);
                return;
            }
            this.pdfUrl = My_Result;
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        if (this.isLoading === 'page') {
            return (index.h("div", { class: "drawer__loader-container" }, index.h("ir-spinner", null)));
        }
        // const canIssueInvoice = !moment().isBefore(moment(this.booking.from_date, 'YYYY-MM-DD'), 'dates');
        return (index.h(index.Fragment, null, index.h("div", { class: "billing__container" }, index.h("section", null, index.h("div", { class: "billing__section-title-row" }, index.h("h4", { class: "billing__section-title" }, "Issued documents"), index.h("ir-custom-button", { variant: "brand", id: this._id, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = 'invoice';
            } }, "Issue invoice")), index.h("div", { class: "table-container" }, index.h("table", { class: "table data-table" }, index.h("thead", null, index.h("tr", null, index.h("th", null, "Date"), index.h("th", null, "Number"), index.h("th", { class: "billing__price-col" }, "Amount"), index.h("th", null, "Actions"))), index.h("tbody", null, this.invoices?.length === 0 && (index.h("tr", null, index.h("td", { colSpan: 4, class: "empty-row" }, index.h("ir-empty-state", null)))), this.invoices?.map(invoice => {
            const isValid = invoice.status.code === 'VALID';
            return (index.h("tr", { class: "ir-table-row" }, index.h("td", null, invoice.status.code === 'VALID'
                ? moment.hooks(invoice.date, 'YYYY-MM-DD').format('MMM DD, YYYY')
                : moment.hooks(invoice.credit_note.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), index.h("td", null, index.h("p", { class: "billing__invoice-nbr" }, index.h("b", null, isValid ? 'Invoice' : 'Credit note', ":"), " ", isValid ? invoice.nbr : invoice.credit_note.nbr), !isValid && index.h("p", { class: "billing__invoice-nbr --secondary" }, invoice.nbr)), index.h("td", { class: "billing__price-col" }, index.h("span", { class: "ir-price", style: { fontWeight: '400' } }, utils.formatAmount(invoice.currency.symbol, invoice.total_amount))), index.h("td", null, index.h("div", { class: "billing__actions-row" }, index.h("wa-dropdown", { "onwa-hide": e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                }, "onwa-select": async (e) => {
                    switch (e.detail.item.value) {
                        case 'print':
                            this.printInvoice({ invoice, autoDownload: true, mode: isValid ? 'invoice' : 'creditnote' });
                            break;
                        case 'view-print':
                            this.printInvoice({ invoice, mode: isValid ? 'invoice' : 'creditnote' });
                            break;
                        case 'void':
                            this.selectedInvoice = invoice.nbr;
                            break;
                    }
                } }, index.h("h3", null, "Issued by: ", invoice.credit_note ? invoice.credit_note.user : invoice.user), index.h("wa-divider", null), index.h("wa-dropdown-item", { value: "view-print" }, "Open PDF", irInterceptor_store.isRequestPending('/Print_Invoice') && index.h("wa-spinner", { slot: "details" })), isValid && !invoice.credit_note && (index.h("wa-dropdown-item", { variant: "danger", value: "void" }, "Void with credit note")), index.h("ir-custom-button", { slot: "trigger", id: `pdf-${invoice.system_id}`, variant: "neutral", appearance: "plain" }, index.h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1rem' } })))))));
        })))), index.h("div", { class: "billing__cards" }, this.invoices?.length === 0 && (index.h("div", { class: "billing__empty-state" }, index.h("ir-empty-state", null))), this.invoices?.map(invoice => {
            const isValid = invoice.status.code === 'VALID';
            return (index.h("wa-card", { key: invoice.nbr, class: "billing__card" }, index.h("div", { class: "billing__card-header" }, index.h("div", { class: "billing__card-header-info" }, index.h("p", { class: "billing__card-number" }, isValid ? 'Invoice' : 'Credit note', ":", isValid ? invoice.nbr : invoice.credit_note.nbr), index.h("p", { class: "billing__card-type" }, isValid ? '' : invoice.nbr)), index.h("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } }, index.h("wa-tooltip", { for: `mobile-download-pdf-${invoice.system_id}` }, "Open PDF"), index.h("ir-custom-button", { onClickHandler: () => this.printInvoice({ invoice, mode: isValid ? 'invoice' : 'creditnote' }), loading: irInterceptor_store.isRequestPending('/Print_Invoice'), id: `mobile-download-pdf-${invoice.system_id}`, variant: "neutral", appearance: "plain", class: "billing__card-download-btn" }, index.h("wa-icon", { name: "file-pdf", style: { fontSize: '1rem' } })))), index.h("div", { class: "billing__card-details" }, index.h("div", { class: "billing__card-detail" }, index.h("p", { class: "billing__card-detail-label" }, "Date"), index.h("p", { class: "billing__card-detail-value" }, ' ', isValid ? moment.hooks(invoice.date, 'YYYY-MM-DD').format('MMM DD, YYYY') : moment.hooks(invoice.credit_note.date, 'YYYY-MM-DD').format('MMM DD, YYYY'))), index.h("div", { class: "billing__card-detail" }, index.h("p", { class: "billing__card-detail-label --amount" }, "Amount"), index.h("p", { class: "billing__card-detail-value" }, utils.formatAmount(invoice.currency.symbol, invoice.total_amount ?? 0)))), isValid && !invoice.credit_note && (index.h("div", { slot: "footer", class: "billing__card-footer" }, index.h("ir-custom-button", { onClickHandler: () => {
                    this.selectedInvoice = invoice.nbr;
                }, variant: "danger", appearance: "outlined", class: "billing__card-void-btn" }, "Void with credit note")))));
        })))), index.h("ir-invoice", { invoiceInfo: this.invoiceInfo, onInvoiceClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = null;
            }, open: this.isOpen === 'invoice', booking: this.booking }), index.h("ir-preview-screen-dialog", {
            // hideDefaultAction
            open: this.pdfUrl !== null, label: "Invoice", action: "print", onOpenChanged: e => {
                if (!e.detail) {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.pdfUrl = null;
                }
            }
        }, this.pdfUrl && index.h("ir-pdf-viewer", { class: "guest-billing__pdf-viewer", src: this.pdfUrl })), index.h("ir-dialog", { label: "Alert", open: this.selectedInvoice !== null, lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedInvoice = null;
            } }, index.h("p", null, "Void invoice ", this.selectedInvoice, " by generating a credit note?"), index.h("div", { slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, "Cancel"), index.h("ir-custom-button", { loading: this.isLoading === 'void', onClickHandler: this.voidInvoice.bind(this), size: "medium", variant: "danger" }, "Confirm")))));
    }
};
IrGuestBilling.style = IrGuestBillingStyle0;

const irGuestInfoDrawerCss = ".sc-ir-guest-info-drawer-h{display:block}";
const IrGuestInfoDrawerStyle0 = irGuestInfoDrawerCss;

const IrGuestInfoDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guestInfoDrawerClosed = index.createEvent(this, "guestInfoDrawerClosed", 7);
        this.guestChanged = index.createEvent(this, "guestChanged", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.toast = index.createEvent(this, "toast", 7);
    }
    open;
    language = 'en';
    email;
    booking_nbr;
    ticket;
    guestInfoDrawerClosed;
    guestChanged;
    resetBookingEvt;
    toast;
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
        const drawerLabel = locales_store.locales?.entries?.Lcz_GuestDetails || 'Guest info';
        return (index.h("ir-drawer", { key: '064e2ba096a5356be798d8be449dcf7f4446af89', open: this.open, label: drawerLabel, onDrawerHide: this.handleDrawerHide, style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            } }, this.open && (index.h("ir-guest-info-form", { key: '0658724b35caaa3b3e787541f13e6d5e33b2770c', ticket: this.ticket, language: this.language, email: this.email, booking_nbr: this.booking_nbr, fromId: this._formId })), index.h("div", { key: 'c59d9398a45d406d5a90d62ed26d15487a5d5498', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '260e1271351eb221ad100620edeb13639aa03b63', size: "medium", appearance: "filled", variant: "neutral", type: "button", onClickHandler: this.handleCancel }, locales_store.locales.entries?.Lcz_Cancel || 'Cancel'), index.h("ir-custom-button", { key: 'aa307b280293dbfcb539735f7d9f4ce8b29ed95c', type: "submit", form: this._formId, size: "medium", variant: "brand", loading: irInterceptor_store.isRequestPending('/Edit_Exposed_Guest') }, locales_store.locales.entries?.Lcz_Save || 'Save'))));
    }
};
IrGuestInfoDrawer.style = IrGuestInfoDrawerStyle0;

const nonEmptyString = (message) => index$2.z.string().trim().min(1, message);
const optionalEmailSchema = index$2.z.string().trim().email('Enter a valid email address').or(index$2.z.literal('')).optional().nullable();
const guestInfoFormSchema = index$2.z.object({
    first_name: nonEmptyString('First name is required'),
    last_name: nonEmptyString('Last name is required'),
    email: nonEmptyString('Email is required').email('Enter a valid email address'),
    alternative_email: optionalEmailSchema,
    country_id: index$2.z.number({ required_error: 'Country is required' }).int('Country is required').positive('Country is required'),
    mobile: nonEmptyString('Mobile number is required').min(5, 'Mobile number is too short'),
    country_phone_prefix: nonEmptyString('Country code is required'),
    notes: index$2.z.string().max(2000, 'Private note cannot exceed 2000 characters').optional(),
});

const irGuestInfoFormCss = ".sc-ir-guest-info-form-h{height:100%;display:flex;flex-direction:column}.guest-form__container.sc-ir-guest-info-form{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}";
const IrGuestInfoFormStyle0 = irGuestInfoFormCss;

const IrGuestInfoForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guestInfoDrawerClosed = index.createEvent(this, "guestInfoDrawerClosed", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.guestChanged = index.createEvent(this, "guestChanged", 7);
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
    roomService = new room_service.RoomService();
    token = new Token.Token();
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
                !locales_store.locales || !locales_store.locales.entries || Object.keys(locales_store.locales.entries).length === 0 ? this.roomService.fetchLanguage(this.language) : Promise.resolve(null),
            ]);
            if (fetchedLocales) {
                locales_store.locales.entries = fetchedLocales.entries;
                locales_store.locales.direction = fetchedLocales.direction;
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
            return (index.h("div", { class: 'drawer__loader-container' }, index.h("ir-spinner", null)));
        }
        return (index.h("form", { id: this.fromId, onSubmit: e => {
                e.preventDefault();
                this.editGuest();
            }, class: "guest-form__container" }, index.h("ir-validator", { schema: guestInfoFormSchema.shape.first_name, value: this.guest?.first_name ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, index.h("ir-input", { id: 'firstName', value: this.guest?.first_name, defaultValue: this.guest?.first_name, required: true, "onText-change": e => this.handleInputChange({ first_name: e.detail.trim() }), label: locales_store.locales.entries?.Lcz_FirstName })), index.h("ir-validator", { schema: guestInfoFormSchema.shape.last_name, value: this.guest?.last_name ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, index.h("ir-input", { value: this.guest?.last_name, required: true, defaultValue: this.guest?.last_name, id: "lastName", "onText-change": e => this.handleInputChange({ last_name: e.detail.trim() }), label: locales_store.locales.entries?.Lcz_LastName })), index.h("ir-validator", { schema: guestInfoFormSchema.shape.email, value: this.guest?.email ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, index.h("ir-input", { label: locales_store.locales.entries?.Lcz_Email, id: "email", defaultValue: this.guest?.email, value: this.guest?.email, required: true, mask: "email", "onText-change": e => {
                this.handleInputChange({ email: e.detail });
            } })), index.h("ir-validator", { schema: guestInfoFormSchema.shape.alternative_email, value: this.guest?.alternative_email ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, index.h("ir-input", { label: locales_store.locales.entries?.Lcz_AlternativeEmail, id: "altEmail", value: this.guest?.alternative_email, mask: "email", "onText-change": e => {
                this.handleInputChange({ alternative_email: e.detail });
            } })), index.h("ir-validator", { schema: guestInfoFormSchema.shape.country_id, value: this.guest?.country_id ?? undefined, autovalidate: this.autoValidate, valueEvent: "countryChange" }, index.h("ir-country-picker", { size: "small", variant: "modern", country: this.countries.find(c => c.id === this.guest?.country_id), label: locales_store.locales.entries?.Lcz_Country, onCountryChange: e => {
                const country = e.detail;
                let params = { country_id: country.id };
                if (!this.guest?.mobile) {
                    params = { ...params, country_phone_prefix: country.phone_prefix };
                }
                this.handleInputChange(params);
            }, countries: this.countries })), index.h("ir-validator", { schema: index$2.z.object({ mobile: guestInfoFormSchema.shape.mobile, phone_prefix: guestInfoFormSchema.shape.country_phone_prefix }), value: { mobile: this.guest?.mobile ?? '', phone_prefix: this.guest?.country_phone_prefix }, autovalidate: this.autoValidate, valueEvent: "mobile-input-change" }, index.h("ir-mobile-input", { size: "small", "onMobile-input-change": e => {
                this.handleInputChange({ mobile: e.detail.formattedValue.trim() });
            }, "aria-invalid": 'true', "onMobile-input-country-change": e => this.handleInputChange({ country_phone_prefix: e.detail.phone_prefix }), value: this.guest?.mobile ?? '', required: true, countryCode: this.countries.find(c => c.phone_prefix?.toString() === this.guest?.country_phone_prefix?.toString())?.code, countries: this.countries })), index.h("ir-validator", { schema: guestInfoFormSchema.shape.notes, value: this.guest?.notes ?? '', autovalidate: this.autoValidate, valueEvent: "wa-change change input", blurEvent: "wa-blur blur" }, index.h("wa-textarea", { size: "small", onchange: e => this.handleInputChange({ notes: e.target.value }), value: this.guest?.notes ?? '', label: locales_store.locales.entries?.Lcz_PrivateNote }))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrGuestInfoForm.style = IrGuestInfoFormStyle0;

const irInvoiceCss = "";
const IrInvoiceStyle0 = irInvoiceCss;

const IrInvoice = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.invoiceOpen = index.createEvent(this, "invoiceOpen", 7);
        this.invoiceClose = index.createEvent(this, "invoiceClose", 7);
    }
    /**
     * Whether the invoice drawer is open.
     *
     * This prop is mutable and reflected to the host element,
     * allowing parent components to control visibility via markup
     * or via the public `openDrawer()` / `closeDrawer()` methods.
     */
    open;
    /**
     * The booking object for which the invoice is being generated.
     * Should contain room, guest, and pricing information.
     */
    booking;
    /**
     * Specifies what the invoice is for.
     * - `"room"`: invoice for a specific room
     * - `"booking"`: invoice for the entire booking
     */
    for = 'booking';
    /**
     * The identifier of the room for which the invoice is being generated.
     * Used when invoicing at room level instead of booking level.
     */
    roomIdentifier;
    /**
     * When `true`, automatically triggers `window.print()` after an invoice is created.
     * Useful for setups where the invoice should immediately be sent to a printer.
     */
    autoPrint = false;
    /**
     * Additional invoice-related metadata used when creating
     * or rendering the invoice.
     *
     * This object can include payment details, discounts,
     * tax information, or any context needed by the invoice form.
     *
     * @type {BookingInvoiceInfo}
     */
    invoiceInfo;
    /**
     * Emitted when the invoice drawer is opened.
     *
     * Fired when `openDrawer()` is called and the component
     * transitions into the open state.
     */
    invoiceOpen;
    /**
     * Emitted when the invoice drawer is closed.
     *
     * Fired when `closeDrawer()` is called, including when the
     * underlying drawer emits `onDrawerHide`.
     */
    invoiceClose;
    invoice = null;
    /**
     * Opens the invoice drawer.
     *
     * This method sets the `open` property to `true`, making the drawer visible.
     * It can be called programmatically by parent components.
     *
     * Also emits the `invoiceOpen` event.
     *
     * @returns {Promise<void>} Resolves once the drawer state is updated.
     */
    async openDrawer() {
        this.open = true;
        this.invoiceOpen.emit();
    }
    /**
     * Closes the invoice drawer.
     *
     * This method sets the `open` property to `false`, hiding the drawer.
     * Parent components can call this to close the drawer programmatically,
     * and it is also used internally when the drawer emits `onDrawerHide`.
     *
     * Also emits the `invoiceClose` event.
     *
     * @returns {Promise<void>} Resolves once the drawer state is updated.
     */
    async closeDrawer() {
        this.open = false;
        this.invoiceClose.emit();
    }
    viewMode = 'invoice';
    isLoading;
    _id = `invoice-form__${v4.v4()}`;
    componentWillLoad() {
        if (this.booking) {
            if (moment.hooks().isBefore(moment.hooks(this.booking.from_date, 'YYYY-MM-DD'), 'dates') && this.viewMode === 'invoice') {
                this.viewMode = 'proforma';
            }
        }
    }
    handleBookingChange() {
        if (!this.booking) {
            return;
        }
        if (moment.hooks().isBefore(moment.hooks(this.booking.from_date, 'YYYY-MM-DD'), 'dates') && this.viewMode === 'invoice') {
            this.viewMode = 'proforma';
        }
    }
    render() {
        return (index.h(index.Host, { key: '94d0fc5a61b8f4c96997f45ed24db62dcff2bf49' }, index.h("ir-drawer", { key: 'e627814157821e856ef14c9dd4bb1ccda9aef757', style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: "Issue Invoice", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDrawer();
            } }, index.h("div", { key: 'b3ec9e86d8f93fb36e6c9f5d850974915acc029e', class: "d-flex align-items-center", slot: "header-actions" }, index.h("wa-switch", { key: 'fe99a42024f6f81c2cc605761d6b15743574fbe5', defaultChecked: this.viewMode === 'proforma', checked: this.viewMode === 'proforma', onchange: e => {
                if (e.target.checked) {
                    this.viewMode = 'proforma';
                }
                else {
                    this.viewMode = 'invoice';
                }
            } }, "Pro forma")), this.open && (index.h("ir-invoice-form", { key: '969a897595dfc9a6b500e65df74c0b8259822014', viewMode: this.viewMode, for: this.for, roomIdentifier: this.roomIdentifier, booking: this.booking, autoPrint: this.autoPrint, formId: this._id, onPreviewProformaInvoice: e => (this.invoice = e.detail.invoice), invoiceInfo: this.invoiceInfo, onLoadingChange: e => (this.isLoading = e.detail) })), index.h("div", { key: '4322b0e543b739dde89cbaf6b5382e95556fd719', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '9afe3275d60147564c38a3f795cf2feee51cce77', size: "medium", appearance: "filled", class: "w-100 flex-fill", variant: "neutral", onClickHandler: () => {
                this.closeDrawer();
            } }, "Cancel"), index.h("ir-custom-button", { key: 'ed72e01c3316eefaff36ee3ed8da86aa7c92d8fe', disabled: this.invoiceInfo?.invoiceable_items?.filter(i => i.is_invoiceable)?.length === 0, loading: this.isLoading, value: "invoice", type: "submit", form: this._id, class: "w-100 flex-fill", size: "medium", variant: "brand", id: `confirm-btn_${this._id}` }, "Confirm")), index.h("ir-preview-screen-dialog", { key: '1563bd7dfe9debc71a62700775d68fe3be120065', onOpenChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!e.detail) {
                    this.invoice = null;
                }
            }, open: this.invoice !== null }, index.h("ir-proforma-invoice-preview", { key: '4929d1e49508f4673f2aac2004a902fccca8ab54', invoice: this.invoice, property: calendarData.calendar_data.property, booking: this.booking })))));
    }
    static get watchers() { return {
        "booking": ["handleBookingChange"]
    }; }
};
IrInvoice.style = IrInvoiceStyle0;

const irPaymentDetailsCss = ".sc-ir-payment-details-h{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-payment-details-h *.sc-ir-payment-details{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sm-margin-right.sc-ir-payment-details{margin-right:5px !important;background:#000}.action_icons.sc-ir-payment-details{width:60px}.w-60.sc-ir-payment-details{width:100px;padding:0 5px}.payments-height.sc-ir-payment-details{height:30px}.payment_date.sc-ir-payment-details{width:100px}.iframeHeight.sc-ir-payment-details{height:max-content;height:22.5rem}.designation.sc-ir-payment-details{width:120px}.total-cost-container.sc-ir-payment-details{background:#7cbebe;color:white;padding:0.5rem;border-radius:5px}";
const IrPaymentDetailsStyle0 = irPaymentDetailsCss;

const IrPaymentDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.resetExposedCancellationDueAmount = index.createEvent(this, "resetExposedCancellationDueAmount", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.openSidebar = index.createEvent(this, "openSidebar", 7);
        this.openPrintScreen = index.createEvent(this, "openPrintScreen", 7);
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
    confirmModal = false;
    toBeDeletedItem = null;
    modalMode = null;
    isLoading = false;
    resetBookingEvt;
    resetExposedCancellationDueAmount;
    toast;
    openSidebar;
    openPrintScreen;
    paymentService = new payment_service.PaymentService();
    bookingService = new booking_service.BookingService();
    dialogRef;
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
        if (detail.receipt_nbr) {
            this.openPrintScreen.emit({
                mode: 'receipt',
                payload: {
                    pid: detail.system_id?.toString(),
                    rnb: detail.receipt_nbr,
                },
            });
            return;
        }
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
            index.h("wa-card", null, index.h("ir-payment-summary", { isAllServicesAgentOwned: this.isAllServicesAgentOwned, booking: this.booking, agent: this.agent, isBookingCancelled: ['003', '004'].includes(this.booking.status.code), totalCost: financial.gross_cost, balance: financial.due_amount, collected: financial.collected + financial.refunds, currency: currency }), index.h("ir-booking-guarantee", { booking: this.booking, bookingService: this.bookingService }), !['003', '004'].includes(this.booking.status.code) && this.booking.is_direct && (index.h("ir-applicable-policies", { propertyId: this.propertyId, booking: this.booking })), this.shouldShowRefundButton() && (index.h("div", { class: "d-flex mt-1" }, index.h("ir-custom-button", { variant: "brand", appearance: "outlined", onClickHandler: () => {
                    this.handleAddPayment({ type: 'refund', amount: Math.abs(this.booking.financial.cancelation_penality_as_if_today) });
                } }, `Refund ${utils.formatAmount(currency.symbol, Math.abs(this.booking.financial.cancelation_penality_as_if_today))}`))), this.shouldCancellationButton() && (index.h("div", { class: "d-flex mt-1" }, index.h("ir-custom-button", { variant: "brand", appearance: "outlined", onClickHandler: () => {
                    this.handleAddPayment({ type: 'cancellation-penalty', amount: Math.abs(this.booking.financial.cancelation_penality_as_if_today) });
                } }, `Charge cancellation penalty ${utils.formatAmount(currency.symbol, this.booking.financial.cancelation_penality_as_if_today)}`)))),
            functions.isAgentMode(this.agent) && (index.h("ir-booking-city-ledger", { booking: this.booking, language: this.language, svcCategories: this.svcCategories, folioRows: this.folioRows, isLoading: this.clLoading, error: this.clError })),
            index.h("ir-payments-folio", { booking: this.booking, payments: (financial.payments || []).filter(p => !p.is_city_ledger), isAddPaymentDisabled: this.isAllServicesAgentOwned, onAddPayment: () => this.handleAddPayment(), onEditPayment: e => this.handleEditPayment(e.detail), onDeletePayment: e => this.handleDeletePayment(e.detail), onIssueReceipt: e => this.handleIssueReceipt(e.detail) }),
            index.h("ir-dialog", { onIrDialogHide: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                }, onIrDialogAfterHide: e => {
                    this.handleCancelModal(e);
                }, ref: el => (this.dialogRef = el), label: "Alert", lightDismiss: this.modalMode !== 'delete' }, index.h("p", null, this.modalMode === 'delete' ? locales_store.locales.entries.Lcz_IfDeletedPermantlyLost : locales_store.locales.entries.Lcz_EnteringAmountGreaterThanDue), index.h("div", { slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { size: "medium", "data-dialog": "close", variant: "neutral", appearance: "filled" }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { loading: this.isLoading, size: "medium", onClickHandler: e => this.handleConfirmModal(e), variant: this.modalMode === 'delete' ? 'danger' : 'brand' }, this.modalMode === 'delete' ? locales_store.locales.entries.Lcz_Delete : locales_store.locales.entries.Lcz_Confirm))),
        ];
    }
};
IrPaymentDetails.style = IrPaymentDetailsStyle0;

const irPaymentFolioCss = ".sc-ir-payment-folio-h{display:block;--payment-type-badge-bg:#ff4961;text-align:start}.payment-type-badge.sc-ir-payment-folio{background:var(--payment-type-badge-bg);color:white;padding:0.2rem 0.3rem !important;font-size:12px;border-radius:4px;margin:0;text-transform:capitalize}.credit-badge.sc-ir-payment-folio{--payment-type-badge-bg:#629a4c}.debit-badge.sc-ir-payment-folio{--payment-type-badge-bg:#ff4961}.dropdown-item-payment.sc-ir-payment-folio{display:flex;align-items:center;gap:1rem;box-sizing:border-box;justify-content:space-between}.input-group-text.sc-ir-payment-folio{border-color:#cacfe7 !important}.payment-folio__payment-type-option.sc-ir-payment-folio{display:flex;align-items:center;justify-content:space-between}.payment-folio__form.sc-ir-payment-folio{display:grid;gap:var(--wa-space-m, 1rem)}";
const IrPaymentFolioStyle0 = irPaymentFolioCss;

const DATE_FORMAT$1 = 'YYYY-MM-DD';
const IrPaymentFolio = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
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
        return (index.h("ir-drawer", { key: '0872928c9b7682416f99cddb5310626dd808f68c', placement: "start", style: {
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
            } }, this.isOpen && (index.h("ir-payment-folio-form", { key: '5431475a50a02b712f3172e8409cb2071c741ed0', booking: this.booking, formId: this._id, onLoadingChanged: e => (this.isLoading = e.detail), onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeFolio();
            }, paymentEntries: this.paymentEntries, bookingNumber: this.bookingNumber, payment: this.payment, mode: this.mode })), index.h("div", { key: 'd13a273c1c56382948708daab45837d3e6c5107d', slot: "footer", class: "w-100 d-flex align-items-center", style: { gap: 'var(--wa-space-xs)' } }, index.h("ir-custom-button", { key: 'cb732158c65ecfc1ddda2e0cca6d17a4bbdb5272', class: "flex-fill", size: "medium", "data-drawer": "close", appearance: "filled", variant: "neutral", onClickHandler: () => this.closeFolio() }, "Cancel"), index.h("ir-custom-button", { key: '782b8814efc322d28d5f58a0b04680f17a0444c1', form: this._id, loading: this.isLoading === 'save', class: "flex-fill", size: "medium", type: "submit", value: "save",
            // appearance={isNewPayment ? 'outlined' : 'accent'}
            appearance: 'accent', variant: "brand" }, "Save"))));
    }
};
IrPaymentFolio.style = IrPaymentFolioStyle0;

const irPaymentFolioFormCss = ".sc-ir-payment-folio-form-h{display:block;--payment-type-badge-bg:#ff4961;text-align:start}.payment-type-badge.sc-ir-payment-folio-form{background:var(--payment-type-badge-bg);color:white;padding:0.2rem 0.3rem !important;font-size:12px;border-radius:4px;margin:0;text-transform:capitalize}.credit-badge.sc-ir-payment-folio-form{--payment-type-badge-bg:#629a4c}.debit-badge.sc-ir-payment-folio-form{--payment-type-badge-bg:#ff4961}.dropdown-item-payment.sc-ir-payment-folio-form{display:flex;align-items:center;gap:1rem;box-sizing:border-box;justify-content:space-between}.input-group-text.sc-ir-payment-folio-form{border-color:#cacfe7 !important}.payment-folio__payment-type-option.sc-ir-payment-folio-form{display:flex;align-items:center;justify-content:space-between}.payment-folio__form.sc-ir-payment-folio-form{display:grid;gap:var(--wa-space-m, 1rem)}";
const IrPaymentFolioFormStyle0 = irPaymentFolioFormCss;

const DATE_FORMAT = 'YYYY-MM-DD';
const requiresPaymentMethodCode = (code) => {
    if (!code) {
        return false;
    }
    return global_variables.PAYMENT_TYPES_WITH_METHOD.includes(code);
};
const paymentTypeSchema = index$2.z.object({
    code: index$2.z.string().min(3).max(4),
    description: index$2.z.string(),
    operation: index$2.z.union([index$2.z.literal('CR'), index$2.z.literal('DB')]),
});
const paymentMethodSchema = index$2.z.object({
    code: index$2.z.string().min(3).max(4),
    description: index$2.z.string(),
    operation: index$2.z.string().optional().nullable(),
});
const folioBaseSchema = index$2.z.object({
    id: index$2.z.number().nullable().optional(),
    system_id: index$2.z.number().nullable().optional(),
    date: index$2.z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/)
        .refine(dateStr => {
        const date = moment.hooks(dateStr, DATE_FORMAT, true);
        return date.isValid();
    }, { message: `Invalid date` }),
    amount: index$2.z.coerce.number().min(0),
    reference: index$2.z.string().optional().nullable(),
    payment_type: paymentTypeSchema,
    payment_method: paymentMethodSchema.nullable().optional(),
});
const folioValidationSchema = folioBaseSchema.superRefine((data, ctx) => {
    if (requiresPaymentMethodCode(data.payment_type?.code) && !data.payment_method?.code) {
        ctx.addIssue({
            code: index$2.z.ZodIssueCode.custom,
            path: ['payment_method'],
            message: 'Payment method is required for this transaction type.',
        });
    }
});
let folioFormInstanceCounter = 0;
const IrPaymentFolioForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.resetExposedCancellationDueAmount = index.createEvent(this, "resetExposedCancellationDueAmount", 7);
        this.loadingChanged = index.createEvent(this, "loadingChanged", 7);
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
        const mappedTypes = utils$1.buildPaymentTypes(this.paymentEntries);
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
            if (error instanceof index$2.ZodError) {
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
        return (index.h("form", { key: 'a07646b4bb011c17256a296d4cea915fb3e315b2', onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                if (submitter?.value === 'save') {
                    this.savePayment();
                }
            }, class: "payment-folio__form", id: this.formId }, index.h("ir-custom-date-picker", { key: 'd1addb910993336250c359da6c9977a24819bc8f', id: this.controlIds.date, label: "Date", "aria-invalid": this.errors?.date && !this.folioData?.date ? 'true' : 'false', "data-testid": "pickup_date", onDateChanged: evt => {
                this.updateFolioData({ date: evt.detail.start?.format(DATE_FORMAT) });
            }, minDate: moment.hooks().add(-2, 'months').format('YYYY-MM-DD'), emitEmptyDate: true, maxDate: this.today, date: this.folioData?.date }), index.h("ir-validator", { key: 'b08bf6f07b68aa87176e75d2db526ac3595e52f5', value: this.folioData?.payment_type?.code, autovalidate: this.autoValidate, schema: paymentTypeSchema.shape.code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide" }, index.h("wa-select", { key: '868fd2c0848d6c825937504a2e91ce2a3bacda12', id: this.controlIds.transactionType, size: "small", "onwa-hide": event => this.stopEventPropagation(event), "onwa-show": event => this.stopEventPropagation(event), placeholder: "Select...", label: "Transaction type", defaultValue: this.folioData?.payment_type?.code, value: this.folioData?.payment_type?.code, disabled: this.mode === 'payment-action', onchange: event => {
                this.stopEventPropagation(event);
                this.handleDropdownChange(event.target.value);
            } }, index.h("wa-option", { key: '5c7cd849febc9bc8075edff0321b1be97ef0de49', value: "" }, "Select..."), this.renderDropdownItems())), this.requiresPaymentMethod(this.folioData?.payment_type?.code) && (index.h("ir-validator", { key: 'ae830303af4df4e2b8e961ddbd9406af93c0fb36', value: this.folioData?.payment_method?.code ?? '', autovalidate: this.autoValidate, schema: paymentMethodSchema.shape.code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide" }, index.h("wa-select", { key: 'aada0e0a7095e92f87b47b89864792d53d39eb05', id: this.controlIds.paymentMethod, size: "small", label: `${this.folioData.payment_type?.code === '001' ? 'Payment' : 'Refund'} method`, "onwa-show": event => this.stopEventPropagation(event), "onwa-hide": event => this.stopEventPropagation(event), defaultValue: this.folioData?.payment_method?.code, value: this.folioData?.payment_method?.code ?? '', onchange: event => {
                this.stopEventPropagation(event);
                this.handlePaymentMethodDropdownChange(event.target.value);
            } }, index.h("wa-option", { key: '9b802773085cef63daf81ae90976737a551efdba', value: "" }, "Select..."), this.paymentEntries?.methods?.map(pt => {
            return (index.h("wa-option", { key: pt.CODE_NAME, label: pt.CODE_VALUE_EN, value: pt.CODE_NAME }, pt.CODE_VALUE_EN));
        })))), index.h("ir-validator", { key: '5edc47b16d3e261de7edf25bff19c15d8cb6a050', value: this.folioData?.amount?.toString() ?? undefined, autovalidate: this.autoValidate, schema: folioBaseSchema.shape.amount, valueEvent: "text-change input input-change", blurEvent: "input-blur" }, index.h("ir-input", { key: '42de7bf0ba57c283dc16c0570deb823e4f653bf2', id: this.controlIds.amount, "aria-invalid": String(!!this.errors?.amount), value: this.folioData?.amount?.toString() ?? '', label: "Amount", mask: "price", min: 0, "onText-change": e => this.updateFolioData({ amount: !e.detail ? undefined : Number(e.detail) }) }, index.h("span", { key: '3b91061d71b24524503e67baa3f0f59c5c3fbef2', slot: "start" }, calendarData.calendar_data.currency.symbol))), index.h("ir-validator", { key: '9359ecfe89f7545540d696878bae9fc9ca3fe1ce', value: this.folioData?.reference ?? '', autovalidate: this.autoValidate, schema: folioBaseSchema.shape.reference, valueEvent: "text-change input input-change", blurEvent: "input-blur" }, index.h("ir-input", { key: '1b2319f53f3d69c591a0cc43aba7fefc857a714e', id: this.controlIds.reference, value: this.folioData?.reference ?? '', label: "Reference", maxlength: 50, "onText-change": e => this.updateFolioData({ reference: e.detail ?? '' }) }))));
    }
    static get watchers() { return {
        "payment": ["handlePaymentChange"],
        "paymentEntries": ["handlePaymentEntriesChange"]
    }; }
};
IrPaymentFolioForm.style = IrPaymentFolioFormStyle0;

const irPaymentItemCss = ".payment-item__payment-item.sc-ir-payment-item{display:flex;flex-direction:column;padding:0.25rem 0rem;min-height:2.5rem}.payment-item__payment-item.sc-ir-payment-item p.sc-ir-payment-item{padding:0;margin:0;box-sizing:border-box}.payment-item__payment-body.sc-ir-payment-item{display:flex;flex-direction:column}.payment-item__payment-fields.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item{display:none}.payment-item__payment-toolbar.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:none}.payment-item__action-button.sc-ir-payment-item{cursor:pointer}.payment-item__payment-amount.sc-ir-payment-item{font-weight:700;white-space:nowrap}.payment-item__payment-amount.is-credit.sc-ir-payment-item{color:var(--wa-color-success-50)}.payment-item__payment-amount.is-debit.sc-ir-payment-item{color:var(--wa-color-danger-50)}.payment-item__payment-reference.sc-ir-payment-item{font-size:12px}@media (min-width: 640px){.payment-item__payment-item.sc-ir-payment-item{flex-direction:row;align-items:center;gap:1rem}.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-actions.sc-ir-payment-item{display:inline-flex}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:inline-flex}.payment-item__payment-fields.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item,.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-actions.sc-ir-payment-item{display:none}.payment-item__payment-description.sc-ir-payment-item{padding:0 0.5rem !important}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item{display:inline-flex;align-items:center}.payment-item__payment-body.sc-ir-payment-item{flex:1 1 0%;justify-content:flex-start}.payment-item__payment-fields.sc-ir-payment-item{justify-content:flex-start;gap:0.5rem}.payment-item__payment-toolbar.sc-ir-payment-item{gap:0.5rem;align-items:center}}";
const IrPaymentItemStyle0 = irPaymentItemCss;

const IrPaymentItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.editPayment = index.createEvent(this, "editPayment", 7);
        this.deletePayment = index.createEvent(this, "deletePayment", 7);
        this.issueReceipt = index.createEvent(this, "issueReceipt", 7);
    }
    payment;
    editPayment;
    deletePayment;
    issueReceipt;
    _id = v4.v4();
    render() {
        const isCredit = this.payment.payment_type.operation === 'CR';
        const paymentDescription = (global_variables.PAYMENT_TYPES_WITH_METHOD.includes(this.payment.payment_type?.code)
            ? `${this.payment.payment_type?.description}: ${this.payment.payment_method.description}`
            : this.payment.payment_type.description) ?? this.payment.designation;
        return (index.h("div", { key: 'c58647937b3bbbc460149afec73ef5d8e786f3e4', class: "payment-item__payment-item" }, index.h("div", { key: '3f023f63728654a98fd808c902efcdaa542f957b', class: "payment-item__payment-body", part: "payment-body" }, index.h("div", { key: '3832ad1b5d1c7ba5907a5142fa2db2a82b232c3f', class: "payment-item__payment-fields", part: "payment-fields" }, index.h("p", { key: '5a05494abd955f4959099b0df43a135bedab2920', class: "payment-item__payment-date" }, moment.hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), index.h("p", { key: '27770a1ec32241171f5a90fb16c335e087bb418d', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, utils.formatAmount(this.payment.currency.symbol, this.payment.amount)), index.h("p", { key: 'e9ca44b5c43f7c3549ee30ef90bb386353e41a11', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && index.h("p", { key: '5967b0aa00f9e46374bb5e845d842318663660ec', class: "payment-item__payment-reference" }, this.payment?.reference)), index.h("div", { key: 'ddf70da7774c092b5aff660a8a0dddff130b1d17', class: "payment-item__payment-toolbar" }, index.h("p", { key: 'f328c9c9a3b44d2c0d58d260cbd21951dd126406', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, utils.formatAmount(this.payment.currency.symbol, this.payment.amount)), index.h("p", { key: 'c7b12ee342e63ef191493291451d8b800859cb18', class: "payment-item__payment-description" }, paymentDescription), index.h("div", { key: '5775997c1deb947d2c39b543c408804aad70fdb8', class: "payment-item__payment-actions" }, index.h("div", { key: '9ef279bb905ec1262f8fadf61674ca620880ef42', class: "d-flex align-items-center" }, index.h("wa-tooltip", { key: '527951fb979ff7416cafd78e89e4a23b16c404f8', for: this._id }, "User: ", this.payment.time_stamp.user), index.h("wa-icon", { key: 'e6d630a817333274e0f34ec591fcf5695d866522', name: "user", id: this._id }), index.h("wa-dropdown", { key: 'e3bd83e89e9c5165b264a7bda7f50faf963ae919', "onwa-hide": e => {
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
                }
            } }, index.h("ir-custom-button", { key: 'f52ef710737081076b94bc9c4eba4cf422bd8b2d', slot: "trigger", appearance: "plain" }, index.h("wa-icon", { key: 'de047ae001c2dec87c77e4205dff51a28012e10d', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (index.h("wa-dropdown-item", { key: 'c950c062fd85dcae046f5638755599f856e689e9', value: "receipt" }, "Print Receipt")), index.h("wa-dropdown-item", { key: '4193c50b3356db3250b0b17388928dc55a7e062e', value: "edit" }, "Edit"), index.h("wa-dropdown-item", { key: 'afd6d16f43edc345b288326cbd04d1e48e984fb6', value: "delete", variant: "danger" }, "Delete"))))), this.payment.reference && index.h("p", { key: '5c463c5b8d82f6f5208be3c8051492574077513c', class: "payment-item__payment-reference" }, this.payment?.reference)));
    }
};
IrPaymentItem.style = IrPaymentItemStyle0;

const irPaymentSummaryCss = ".sc-ir-payment-summary-h{display:block;font-family:var(--wa-font-family-body);border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);padding-bottom:var(--wa-space-l);margin-bottom:var(--wa-space-l)}.ps-layout.sc-ir-payment-summary{display:flex;flex-direction:column;gap:0.357rem}.ps-cols.sc-ir-payment-summary{display:flex;align-items:flex-start;gap:0}.ps-col.sc-ir-payment-summary{flex:1;min-width:0;display:flex;flex-direction:column;gap:0.357rem}.ps-col--bordered.sc-ir-payment-summary{padding-left:0.857rem;margin-left:0.857rem;border-left:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.ps-section-title.sc-ir-payment-summary{font-weight:600;color:var(--wa-color-text-quiet, #9ca3af);white-space:nowrap}.ps-stacked.sc-ir-payment-summary{display:flex;flex-direction:column;gap:0.071rem;min-width:0}.ps-stacked__label.sc-ir-payment-summary{color:var(--wa-color-text-quiet, #9ca3af)}.ps-stacked__value.sc-ir-payment-summary{font-weight:700;color:var(--wa-color-text-normal, #111827);min-width:0;overflow-wrap:break-word}.ps-stacked__value--danger.sc-ir-payment-summary{color:var(--wa-color-danger-text-loud, #dc2626)}.ps-row.sc-ir-payment-summary{display:flex;align-items:baseline;justify-content:space-between;gap:0.571rem;min-width:0}.ps-row__label.sc-ir-payment-summary{color:var(--wa-color-text-quiet, #6b7280);white-space:nowrap;flex-shrink:0}.ps-row__value.sc-ir-payment-summary{font-weight:700;color:var(--wa-color-text-normal, #111827);text-align:right;min-width:0;overflow-wrap:break-word}.ps-row__value--danger.sc-ir-payment-summary{color:var(--wa-color-danger-text-loud, #dc2626)}.ps-grand-total.sc-ir-payment-summary{display:flex;align-items:baseline;justify-content:space-between;gap:0.571rem;padding-top:0.429rem;margin-top:0.143rem;border-top:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);min-width:0}.ps-grand-total__label.sc-ir-payment-summary{font-weight:700;color:var(--wa-color-text-normal, #111827);white-space:nowrap;flex-shrink:0}.ps-grand-total__value.sc-ir-payment-summary{font-weight:700;color:var(--wa-color-text-normal, #111827);text-align:right;min-width:0;overflow-wrap:break-word}@media (min-width: 1280px){.ps-stacked.sc-ir-payment-summary{display:flex;flex-direction:row;gap:0.5rem;align-items:center}.ps-stacked.--stacked-right.sc-ir-payment-summary{justify-content:flex-end}}";
const IrPaymentSummaryStyle0 = irPaymentSummaryCss;

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
    shouldShowTotalCost() {
        return this.totalCost > 0 && this.totalCost !== null;
    }
    render() {
        if (functions.isAgentMode(this.agent)) {
            return (index.h("div", { class: "ps-layout" }, index.h("div", { class: "ps-cols" }, !this.isAllServicesAgentOwned && (index.h("div", { class: "ps-col " }, index.h("div", { class: "ps-stacked" }, index.h("span", { class: "ps-stacked__label" }, "Guest Balance:"), index.h("span", { class: "ps-stacked__value ps-stacked__value--danger" }, utils.formatAmount(this.currency.symbol, this.booking?.guest_financial?.due_amount))), index.h("div", { class: "ps-stacked " }, index.h("span", { class: "ps-stacked__label" }, "Guest Collected:"), index.h("span", { class: "ps-stacked__value" }, utils.formatAmount(this.currency.symbol, this.booking.guest_financial?.collected))))), index.h("div", { class: "ps-col" }, index.h("div", { class: "ps-stacked --stacked-right" }, index.h("span", { class: "ps-stacked__label ps-stacked__value" }, "Booking Total:"), index.h("span", { class: "ps-stacked__value" }, utils.formatAmount(this.currency.symbol, this.booking.financial?.gross_total ?? 0))), index.h("div", { class: "ps-stacked --stacked-right" }, index.h("span", { class: "ps-stacked__label" }, "Agent Total:"), index.h("span", { class: "ps-stacked__value" }, utils.formatAmount(this.currency.symbol, this.booking.agent_financial.gross_total ?? 0)))))));
        }
        return (
        // <div class="ps-layout">
        //   {this.shouldShowTotalCost() && (
        //     <div class="ps-row">
        //       <span class="ps-row__label">{locales.entries.Lcz_TotalCost}</span>
        //       <span class="ps-row__value">{formatAmount(this.currency.symbol, this.totalCost)}</span>
        //     </div>
        //   )}
        //   <div class="ps-row">
        //     <span class="ps-row__label">{locales.entries.Lcz_Balance}</span>
        //     <span class="ps-row__value ps-row__value--danger">{formatAmount(this.currency.symbol, this.balance)}</span>
        //   </div>
        //   {!this.isBookingCancelled && (
        //     <div class="ps-row">
        //       <span class="ps-row__label">{locales.entries.Lcz_Collected}</span>
        //       <span class="ps-row__value">{formatAmount(this.currency.symbol, this.collected)}</span>
        //     </div>
        //   )}
        //   <div class="ps-grand-total">
        //     <span class="ps-grand-total__label">Grand Total</span>
        //     <span class="ps-grand-total__value">{formatAmount(this.currency.symbol, this.booking.financial?.gross_total ?? 0)}</span>
        //   </div>
        // </div>
        index.h("div", { class: "ps-layout" }, index.h("div", { class: "ps-cols" }, index.h("div", { class: "ps-col " }, index.h("div", { class: "ps-stacked " }, index.h("span", { class: "ps-stacked__label" }, locales_store.locales.entries.Lcz_Balance, ":"), index.h("span", { class: "ps-stacked__value ps-stacked__value--danger" }, utils.formatAmount(this.currency.symbol, this.balance))), index.h("div", { class: "ps-stacked" }, index.h("span", { class: "ps-stacked__label" }, locales_store.locales.entries.Lcz_Collected, ":"), index.h("span", { class: "ps-stacked__value" }, utils.formatAmount(this.currency.symbol, this.collected)))), index.h("div", { class: "ps-col" }, this.shouldShowTotalCost() && (index.h("div", { class: "ps-stacked --stacked-right" }, index.h("span", { class: "ps-stacked__label ps-stacked__value" }, locales_store.locales.entries.Lcz_TotalCost), index.h("span", { class: "ps-stacked__value" }, utils.formatAmount(this.currency.symbol, this.totalCost)))), index.h("div", { class: "ps-stacked --stacked-right" }, index.h("span", { class: "ps-stacked__label ps-stacked__value" }, "Grand Total:"), index.h("span", { class: "ps-stacked__value" }, utils.formatAmount(this.currency.symbol, this.booking.financial?.gross_total ?? 0)))))));
    }
};
IrPaymentSummary.style = IrPaymentSummaryStyle0;

const irPaymentsFolioCss = ".sc-ir-payments-folio-h{display:block}.payment-divider.sc-ir-payments-folio{margin:0;padding:0}";
const IrPaymentsFolioStyle0 = irPaymentsFolioCss;

const IrPaymentsFolio = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.addPayment = index.createEvent(this, "addPayment", 7);
        this.editPayment = index.createEvent(this, "editPayment", 7);
        this.deletePayment = index.createEvent(this, "deletePayment", 7);
        this.issueReceipt = index.createEvent(this, "issueReceipt", 7);
    }
    payments = [];
    booking;
    isAddPaymentDisabled = false;
    addPayment;
    editPayment;
    deletePayment;
    issueReceipt;
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
                } }),
            index$1 < this.payments.length - 1 && index.h("wa-divider", { class: "payment-divider" }),
        ];
    }
    renderEmptyState() {
        return index.h("ir-empty-state", { showIcon: false });
    }
    render() {
        return (index.h("wa-card", { key: '604af713d21420dcc7e6f263eacc8f08d85cbe07', class: " payments-container" }, index.h("div", { key: 'ea988b956d5c09c1dbc87506a47cd825c6b55c40', slot: "header", class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("p", { key: '36e3a3132902d33e5338b0f8036a6718f8ebc757', class: "font-size-large p-0 m-0" }, "Guest Folio"), index.h(HelpDocButton, { key: '74e4f6ad7f6649c9f14db297ddbb709e962cfea4', message: "Help", href: "https://help.igloorooms.com/extranet/booking-details/guest-folio" })), !this.isAddPaymentDisabled && index.h("wa-tooltip", { key: 'e92f22740c2de8646bec85d177a9a2072013cf77', for: "create-payment" }, "Add folio entry"), index.h("ir-custom-button", { key: '1d5e5a65c8cbcaed2c2bcee4de09273f783f6930', disabled: this.isAddPaymentDisabled, slot: "header-actions", id: "create-payment", size: "small", variant: "neutral", appearance: "plain", onClickHandler: this.handleAddPayment }, index.h("wa-icon", { key: '4c64fbe1f90dad6eb946633bcc88f6f8293cb05c', name: "plus", style: { fontSize: '1rem' } })), this.hasPayments() ? this.payments.map((payment, index) => this.renderPaymentItem(payment, index)) : this.renderEmptyState()));
    }
};
IrPaymentsFolio.style = IrPaymentsFolioStyle0;

const irPickupCss = "";
const IrPickupStyle0 = irPickupCss;

const IrPickup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
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
        return (index.h("ir-drawer", { key: '63841e8618ffdeca2358e1cffda9071383a322e1', style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: locales_store.locales.entries.Lcz_Pickup, open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && (index.h("ir-pickup-form", { key: '8ffb08fa82726d9e9021a341a1681541cb9ed358', booking: this.booking, agent: this.agent, onCanSubmitPickupChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.canSubmitPickup = e.detail;
            }, defaultPickupData: this.defaultPickupData, numberOfPersons: this.numberOfPersons, bookingNumber: this.bookingNumber, bookingDates: this.bookingDates, onLoadingChange: e => (this.isLoading = e.detail), onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            }, formId: this._id })), index.h("div", { key: '0ba31d6fad9ccea60204dd54fa555faf737ce117', slot: "footer", class: 'ir__drawer-footer' }, index.h("ir-custom-button", { key: '2ce29a24793613e5473b37e2a052e4c5be486f36', class: `flex-fill`, size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, locales_store.locales.entries.Lcz_Cancel), this.canSubmitPickup && (index.h("ir-custom-button", { key: 'b88fcb101bc2f33bcb372b44d9729d16f3ba8021', type: "submit", loading: this.isLoading, form: this._id, size: "medium", class: `flex-fill`, variant: "brand" }, locales_store.locales.entries.Lcz_Save)))));
    }
};
IrPickup.style = IrPickupStyle0;

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
        const arrivalDateSchema = index$2.z
            .string()
            .min(1, { message: 'Arrival date is required.' })
            .regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid date format, expected YYYY-MM-DD.' });
        return index$2.z.object({
            location: index$2.z.preprocess(asNumber, index$2.z.number().int()).refine(value => (allowRemoval ? value === -1 || value > 0 : value > 0), {
                message: 'Please select a pickup option.',
            }),
            arrival_date: index$2.z
                .preprocess(value => (typeof value === 'string' ? value : value ?? ''), arrivalDateSchema)
                .refine(dateStr => {
                const date = moment.hooks(dateStr, 'YYYY-MM-DD', true);
                const min = moment.hooks(minDate, 'YYYY-MM-DD', true);
                const max = moment.hooks(maxDate, 'YYYY-MM-DD', true);
                return date.isValid() && min.isValid() && max.isValid() && date.isBetween(min, max, undefined, '[]');
            }, { message: `Arrival date must be between ${minDate} and ${maxDate}.` }),
            arrival_time: index$2.z
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
            flight_details: index$2.z.preprocess(value => (typeof value === 'string' ? value : ''), index$2.z.string().nonempty({ message: 'Flight details cannot be empty.' })),
            vehicle_type_code: index$2.z.preprocess(value => (typeof value === 'string' ? value : ''), index$2.z.string().nonempty({ message: 'Vehicle type code cannot be empty.' })),
            number_of_vehicles: index$2.z.preprocess(asNumber, index$2.z.number().int().min(1, { message: 'At least one vehicle is required.' })),
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

const irPickupFormCss = ".sc-ir-pickup-form-h{display:block}.custom-card-container.sc-ir-pickup-form{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #e4e5ec}.card-title.sc-ir-pickup-form{flex:1}.border-theme.sc-ir-pickup-form{border:1px solid #cacfe7}.pickup__container.sc-ir-pickup-form{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.price-input-container.sc-ir-pickup-form{max-width:290px}}";
const IrPickupFormStyle0 = irPickupFormCss;

const IrPickupForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.canSubmitPickupChange = index.createEvent(this, "canSubmitPickupChange", 7);
        this.loadingChange = index.createEvent(this, "loadingChange", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
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
        return (index.h("form", { key: 'fa9e9b149cacb73ee91e439034c6b524b5ee55d5', id: this.formId, class: "pickup__container", onSubmit: async (e) => {
                e.preventDefault();
                await this.savePickup();
            } }, index.h("ir-validator", { key: 'a9b05652e00f48c0fbc1c09b8e39bb4c1b670861', schema: this.pickupSchema.shape.location, autovalidate: this.autoValidate, value: this.pickupData.location, valueEvent: "change wa-change select-change", blurEvent: "wa-hide blur" }, index.h("wa-select", { key: '165ff33141adf3f77962e0ad2b6b2fe85f445f92', size: "small", onchange: e => this.handleLocationChange(e.target.value), defaultValue: this.pickupData.location === -1 ? '' : this.pickupData.location?.toString(), value: this.pickupData.location === -1 ? '' : this.pickupData.location?.toString() }, index.h("wa-option", { key: '3975e76c72a6c15d653cab1e3f3b0f1ebe2d54f4', value: "" }, locales_store.locales.entries.Lcz_Pickup_NoThankYou), this.pickupService.getAvailableLocations(locales_store.locales.entries.Lcz_Pickup_YesFrom).map(option => (index.h("wa-option", { key: `pickup-location-${option.value}`, value: option.value?.toString() }, option.text))))), this.shouldRenderDetails && (index.h("div", { key: '2242d74ac03b3275f66c51f9d5adbe36df1c33c2', class: "pickup__container", "data-testid": "pickup_body" }, index.h("ir-validator", { key: '4c546f6efed6e0a5bcc4dcfc4c1e4be713f11231', schema: this.pickupSchema.shape.arrival_date, autovalidate: this.autoValidate, value: this.pickupData.arrival_date ?? '', valueEvent: "dateChanged", blurEvent: "datePickerBlur blur" }, index.h("ir-custom-date-picker", { key: '33d14a326cd8565a3b72c155f2717b5d56ec0860', date: this.pickupData.arrival_date, minDate: this.bookingDates.from, maxDate: this.bookingDates?.to, emitEmptyDate: true, onDateChanged: evt => {
                this.updatePickupData('arrival_date', evt.detail.start?.format('YYYY-MM-DD') ?? null);
            }, label: locales_store.locales.entries.Lcz_ArrivalDate })), index.h("ir-validator", { key: 'e430f0e97668a11a05c43f25cf1f0e85a4689a6f', schema: this.pickupSchema.shape.arrival_time, autovalidate: this.autoValidate, value: this.pickupData.arrival_time, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, index.h("ir-input", { key: '4bdc86b93c8db184524e7c181d5036190f2599d1', value: this.pickupData.arrival_time, "onText-change": e => {
                this.updatePickupData('arrival_time', e.detail);
            }, mask: 'time', label: locales_store.locales.entries.Lcz_Time })), index.h("ir-validator", { key: '4b55e540a4404dfe154f472e69c1682dd1ded250', schema: this.pickupSchema.shape.flight_details, autovalidate: this.autoValidate, value: this.pickupData.flight_details, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, index.h("ir-input", { key: '40c33ce20229c470fce8ce62a268b7d9264375f0', "onText-change": e => this.updatePickupData('flight_details', e.detail), value: this.pickupData.flight_details, label: locales_store.locales.entries.Lcz_FlightDetails })), index.h("ir-validator", { key: '5afb376999e3c2b35219a439e593e44f3fbad76c', schema: this.pickupSchema.shape.vehicle_type_code, autovalidate: this.autoValidate, value: this.pickupData.vehicle_type_code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide blur" }, index.h("wa-select", { key: '001b015b9ebf4b48b63a637d07d268d130e8fcff', size: "small", onchange: e => this.handleVehicleTypeChange(e.target.value), value: this.pickupData.vehicle_type_code, defaultValue: this.pickupData.vehicle_type_code }, this.allowedOptionsByLocation.map(option => (index.h("wa-option", { value: option.vehicle.code, key: option.vehicle.code }, option.vehicle.description))))), index.h("ir-validator", { key: 'd91bc04bbe9b6bec636fff974b525a0a8aeabe84', schema: this.pickupSchema.shape.number_of_vehicles, autovalidate: this.autoValidate, value: this.pickupData.number_of_vehicles, valueEvent: "change wa-change select-change", blurEvent: "wa-hide blur" }, index.h("wa-select", { key: '237dc4a3b083316b48340ed0c0cbf78c6b39a662', size: "small", defaultValue: this.pickupData.number_of_vehicles?.toString(), value: this.pickupData.number_of_vehicles?.toString(), label: locales_store.locales.entries.Lcz_NbrOfVehicles, onchange: e => {
                this.handleVehicleQuantityChange(Number(e.target.value));
            } }, this.vehicleCapacity.map(i => (index.h("wa-option", { key: `capacity_${i}`, value: i.toString() }, i))))), index.h("ir-input", { key: '09ef719a51b32486d06c1fba03cd18a49b34fe87', mask: 'price', label: `${locales_store.locales.entries.Lcz_DueUponBooking}`, "onText-change": e => {
                this.pickupData = {
                    ...this.pickupData,
                    due_upon_booking: e.detail,
                };
            }, value: this.pickupData.due_upon_booking }, index.h("span", { key: 'db7cd91a03be5170692bbfef457e1144e6808429', slot: "start" }, this.pickupData.currency?.symbol)), functions.isAgentMode(this.agent) && (index.h("ir-service-assignee-select", { key: '96e1694c35d904d4fb1f5e3a94663dba68b14f97', agent: this.booking.agent, assigneeType: this.assignee, onAssignmentChange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.assignee = e.detail;
            } }))))));
    }
    static get watchers() { return {
        "defaultPickupData": ["handleSubmitPickupChange"],
        "pickupData": ["handleSubmitPickupChange"]
    }; }
};
IrPickupForm.style = IrPickupFormStyle0;

const irPickupViewCss = ".sc-ir-pickup-view-h{display:block}.pickup-body.sc-ir-pickup-view{display:flex;flex-direction:column;gap:0.5rem}.pickup-body--guest.sc-ir-pickup-view{border-left:3px solid var(--wa-color-neutral-300, #d4d4d8);padding-left:0.625rem}.pickup-body--agent.sc-ir-pickup-view{border-left:3px solid var(--wa-color-brand-fill-loud, #60a5fa);padding-left:0.625rem}.service-group__label.sc-ir-pickup-view{display:flex;align-items:center;gap:0.4rem;margin:0 0 0.5rem;font-size:0.75rem;font-weight:700;letter-spacing:0.06em;color:var(--wa-color-neutral-500, #71717a)}.service-group__label.--agent.sc-ir-pickup-view{color:var(--wa-color-primary-600, #2563eb)}.pickup-row--header.sc-ir-pickup-view{display:flex;justify-content:space-between;align-items:baseline;gap:0.5rem}.pickup-datetime.sc-ir-pickup-view{font-size:0.925rem;font-weight:600;color:var(--wa-color-neutral-900, #18181b)}.pickup-time.sc-ir-pickup-view{font-weight:400;color:var(--wa-color-neutral-600, #52525b)}.pickup-price.sc-ir-pickup-view{color:var(--wa-color-neutral-900, #18181b);white-space:nowrap}.pickup-dl.sc-ir-pickup-view{margin:0;display:flex;flex-direction:column;gap:0.2rem}.pickup-dl__row.sc-ir-pickup-view{display:flex;gap:0.35rem;font-size:0.875rem;flex-wrap:wrap}.pickup-dl__row.sc-ir-pickup-view dt.sc-ir-pickup-view{font-weight:600;color:var(--wa-color-neutral-600, #52525b);white-space:nowrap}.pickup-dl__row.sc-ir-pickup-view dt.sc-ir-pickup-view::after{content:':'}.pickup-dl__row.sc-ir-pickup-view dd.sc-ir-pickup-view{margin:0;color:var(--wa-color-neutral-800, #27272a)}.pickup-note.sc-ir-pickup-view{margin:0;font-size:0.825rem;color:var(--wa-color-neutral-500, #71717a);line-height:1.4;border-top:1px solid var(--wa-color-neutral-100, #f4f4f5);padding-top:0.4rem}";
const IrPickupViewStyle0 = irPickupViewCss;

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
        const statusTag = tx ? (index.h("ir-cl-status-tag", { style: { marginInlineStart: '0.5rem' }, transaction: { _rowId: '', ...utils$1.mapClTxToFolioRow(tx), balance: 0 }, size: "extra-small" })) : null;
        return (index.h(index.Host, null, index.h("wa-card", null, index.h("p", { slot: "header", class: 'font-size-large p-0 m-0' }, locales_store.locales.entries.Lcz_Pickup), index.h("wa-tooltip", { for: "pickup" }, pickup_info ? 'Edit' : 'Add', " pickup"), index.h("ir-custom-button", { slot: "header-actions", id: "pickup", size: "small", appearance: "plain", variant: "neutral" }, index.h("wa-icon", { name: "edit", style: { fontSize: '1rem' } })), pickup_info ? (index.h(index.Fragment, null, isAgent && (index.h("p", { class: `service-group__label${pickup_info.agent ? ' --agent' : ''}` }, pickup_info.agent ? pickup_info.agent.name : 'Guest', index.h("span", null, "Folio"))), index.h("div", { class: `pickup-body${isAgent ? (pickup_info.agent ? ' pickup-body--agent' : ' pickup-body--guest') : ''}` }, index.h("div", { class: "pickup-row pickup-row--header" }, index.h("span", { class: "pickup-datetime" }, moment.hooks(pickup_info.date, 'YYYY-MM-DD').format('MMM DD, YYYY'), pickup_info.hour && pickup_info.minute && index.h("span", { class: "pickup-time" }, " \u00B7 ", functions._formatTime(pickup_info.hour.toString(), pickup_info.minute.toString())), statusTag), index.h("strong", { class: "pickup-price" }, pickup_info.currency.symbol, pickup_info.total)), index.h("dl", { class: "pickup-dl" }, index.h("div", { class: "pickup-dl__row" }, index.h("dt", null, locales_store.locales.entries.Lcz_FlightDetails), index.h("dd", null, pickup_info.details)), index.h("div", { class: "pickup-dl__row" }, index.h("dt", null, "Vehicle"), index.h("dd", null, pickup_info.selected_option.vehicle.description)), index.h("div", { class: "pickup-dl__row" }, index.h("dt", null, locales_store.locales.entries.Lcz_NbrOfVehicles), index.h("dd", null, pickup_info.nbr_of_units))), (calendarData.calendar_data.pickup_service.pickup_instruction?.description || calendarData.calendar_data.pickup_service.pickup_cancelation_prepayment?.description) && (index.h("p", { class: "pickup-note" }, calendarData.calendar_data.pickup_service.pickup_instruction?.description, calendarData.calendar_data.pickup_service.pickup_cancelation_prepayment?.description))))) : (index.h("ir-empty-state", { showIcon: false })))));
    }
};
IrPickupView.style = IrPickupViewStyle0;

const irPmsLogsCss = ".sc-ir-pms-logs-h{display:block}.dialog-container-height.sc-ir-pms-logs{height:4rem}.list-title.sc-ir-pms-logs{margin:0;padding:0;font-weight:600;white-space:nowrap;display:inline}.list-item.sc-ir-pms-logs{margin:0;padding:0;font-size:14px;margin-left:5px;width:fit-content}.list-item.green.sc-ir-pms-logs{color:#629a4c;font-weight:600}.list-item.red.sc-ir-pms-logs{color:#ff4961;font-weight:600}";
const IrPmsLogsStyle0 = irPmsLogsCss;

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
        return (index.h("div", { key: '6f41e05fa07f703364c4102089b4f4ae6101b1e1', class: "" }, irInterceptor_store.isRequestPending('/Get_Exposed_PMS_Logs') ? (index.h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, index.h("ir-spinner", null))) : (index.h("div", { class: 'dialog-container-height' }, index.h("div", { class: "d-flex align-items-center ", style: { paddingBottom: '0.5rem' } }, index.h("p", { class: "list-title p-0 m-0" }, locales_store.locales.entries.Lcz_SentAt, ":"), this.pmsLogs?.sent_date ? (index.h("p", { class: "list-item" }, this.pmsLogs?.sent_date, " ", functions._formatTime(this.pmsLogs?.sent_hour.toString(), this.pmsLogs?.sent_minute.toString()))) : (index.h("p", { class: `list-item ${this.pmsLogs?.sent_date ? 'green' : 'red'}` }, this.pmsLogs?.is_acknowledged ? locales_store.locales.entries.Lcz_YES : locales_store.locales.entries.Lcz_NO))), index.h("div", { class: "d-flex align-items-center p-0 m-0" }, index.h("p", { class: "list-title p-0 m-0" }, locales_store.locales.entries.Lcz_Acknowledged), index.h("div", { class: "d-flex align-items-center", style: { gap: '1rem' } }, index.h("p", { class: `list-item  ${this.pmsLogs?.is_acknowledged ? 'green' : 'red'}` }, this.pmsLogs?.is_acknowledged ? locales_store.locales.entries.Lcz_YES : locales_store.locales.entries.Lcz_NO), !this.pmsLogs?.is_acknowledged && this.pmsLogs?.revision_id && this.userTypeCode === '1' && (index.h("ir-custom-button", { variant: "brand", loading: irInterceptor_store.isRequestPending('/Ack_Exposed_Revision'), onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const data = await this.bookingService.ackExposedRevision({
                    revision_id: this.pmsLogs?.revision_id,
                });
                this.error = data.ExceptionMsg;
            } }, "Acknowledge")))), this.error && (index.h("wa-callout", { size: "small", appearance: "filled-outlined", variant: "danger" }, this.error))))));
    }
};
IrPmsLogs.style = IrPmsLogsStyle0;

const irReservationInformationCss = ".sc-ir-reservation-information-h{display:block}.reservation-information.sc-ir-reservation-information{display:flex;flex-direction:column;gap:0.5rem !important}.reservation-information__property-name.sc-ir-reservation-information{margin:0;font-weight:600;margin-bottom:1rem}.reservation-information__row.sc-ir-reservation-information{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.reservation-information.sc-ir-reservation-information>ir-label.sc-ir-reservation-information,.reservation-information.sc-ir-reservation-information>ota-label.sc-ir-reservation-information,.reservation-information__row.sc-ir-reservation-information ir-label.sc-ir-reservation-information{display:flex;align-items:center}";
const IrReservationInformationStyle0 = irReservationInformationCss;

const IrReservationInformation = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.openSidebar = index.createEvent(this, "openSidebar", 7);
    }
    booking;
    countries;
    arrivalTime;
    userCountry = null;
    isOpen;
    openSidebar;
    reservationInformationEl;
    irBookingCompanyFormRef;
    irBookingExtraNoteRef;
    irArrivalTimeDialogRef;
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
        return (index.h("wa-card", { key: '4b6129ba77a858d5650b4284b37dd8fe4b38b496' }, index.h("div", { key: 'ec2c35ccf4c7753cbd00e17a7171d1c34a51888f', class: "reservation-information", ref: el => (this.reservationInformationEl = el) }, index.h("p", { key: '1f3710d702aa324012ee2ac8b31524b6fc54cac9', class: "reservation-information__property-name" }, this.booking.property.name || ''), index.h("ir-label", { key: '30caf50fa3241e0d3959705a0a32ded8850b5203', renderContentAsHtml: true, labelText: `${locales_store.locales.entries.Lcz_BookedOn}:`, content: `${functions._formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${functions._formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), index.h("div", { key: 'a0e86309dad6a90a3468bc102f4a507f2f2eb204', class: "reservation-information__row" }, index.h("ir-label", { key: '0b8df06d308b65b527153d51ee188c7abc58bf57', labelText: `${locales_store.locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, this.booking.guest?.nbr_confirmed_bookings > 1 && !this.booking.agent && (index.h("div", { key: '82bfc280160140819b7d4fe7a8994c3520832c4c', class: 'm-0 p-0 ', slot: "prefix" }, index.h("wa-tooltip", { key: 'afd8018c478ffe5b9310d0af5b62daa77ac615db', for: "guests_nbr_confirmed_bookings" }, `${locales_store.locales.entries.Lcz_BookingsNbr}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString())), index.h("div", { key: '30346c870ab05c358fa530a27428333ebe906d06', style: { color: '#FB0AAD' }, id: "guests_nbr_confirmed_bookings" }, index.h("span", { key: '5d0baba0a074526736e3fdfefcad71b022b63325' }, " ", this.booking.guest.nbr_confirmed_bookings), index.h("wa-icon", { key: '16041929bb961a27d892658f99eed41c196ff6eb', name: "heart", style: { color: '#FB0AAD' } }))))), index.h("wa-tooltip", { key: '848a8b078e7a55706f87cb4bd76eeb6a6847c35b', for: `edit_guest-details` }, "Edit guest details"), index.h("ir-custom-button", { key: '2bd71cf42cf710a0dc33c52f79629f8fbf8a2ef9', iconBtn: true, id: `edit_guest-details`, onClickHandler: e => this.handleEditClick(e, 'guest'), appearance: 'plain', variant: 'neutral' }, index.h("wa-icon", { key: 'cd89319b3d6c15f9e578d9e506156510bd2450f2', name: "edit", label: "Edit guest details", style: { fontSize: '1rem' } }))), !this.booking.agent && (index.h("div", { key: '50b3176cf91e9fdf9098d7c805231727e09b5dd2', class: "reservation-information__row" }, index.h("ir-label", { key: 'eeff154778d1db82a772b85819b4e46169fd0aa1', labelText: `Company:`, placeholder: 'No company name provided', content: `${this.booking.company_name ?? ''}${this.booking.company_tax_nbr ? ` - ${this.booking.company_tax_nbr}` : ''}`, display: 'flex' }), index.h("wa-tooltip", { key: '75986d7e98cddaa3f8f79eebdbe48bba5142555a', for: `edit_create-company-info` }, "Add company info"), index.h("ir-custom-button", { key: 'f10df5856f61d8ee2106f32b2f2734989d21ce62', iconBtn: true, id: `edit_create-company-info`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irBookingCompanyFormRef.openCompanyForm();
            }, appearance: 'plain', variant: 'neutral' }, index.h("wa-icon", { key: '57c28064167b97c1e37d31626654dafccbe29cfe', name: "edit", label: "Add or modify company info", style: { fontSize: '1rem' } })))), this.booking.guest.mobile && index.h("ir-label", { key: 'e8ee50cbfa9b29e1de214f9f48b05916351178ae', labelText: `${locales_store.locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() }), !this.booking.agent && index.h("ir-label", { key: '8cac526e28ab8a3904ca929d5b35045722873d5d', labelText: `${locales_store.locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && index.h("ir-label", { key: 'eb33afa7da54755485e37d70b5b961c988d8e7eb', labelText: `${locales_store.locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), this.booking?.guest?.address && index.h("ir-label", { key: '5e39d06dd7fdbe28b43dc624c1de146160d0d7a9', labelText: `${locales_store.locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.userCountry && (index.h("ir-label", { key: 'a7c32222aad7026fac24188bb0d28067ce6e5097', labelText: `${locales_store.locales.entries.Lcz_Country}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.booking.guest?.notes && index.h("ir-label", { key: '8863c2ebba4b53ee9a05e8213a0354073612ba35', display: "inline", labelText: `${locales_store.locales.entries.Lcz_GuestPrivateNote}:`, content: this.booking.guest?.notes }), this.booking.is_direct && (index.h("div", { key: '6ee31c8df55faa3ddb36a1b51af505b5de6beec8', class: "reservation-information__row" }, index.h("ir-label", { key: 'ad8dbbf9f31b711aab7d20ac5eaf56a55480bfee', labelText: `${locales_store.locales.entries.Lcz_ArrivalTime}:`, display: "flex", content: this.booking.arrival.description }), index.h("wa-tooltip", { key: '9be75565c21b17a0a19352799f88dc90fa2fbf0c', for: `edit_arrival_time` }, "Edit arrival time"), index.h("ir-custom-button", { key: 'de35411eaca63202bf0610ccacf469bc437895c4', iconBtn: true, id: `edit_arrival_time`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irArrivalTimeDialogRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, index.h("wa-icon", { key: '5b5b274093beb9ef96b3dc86aa0472e2ec35afe5', name: "edit", label: "Edit arrival time", style: { fontSize: '1rem' } })))), this.booking.promo_key && index.h("ir-label", { key: '3ea16fb2866ced940942e79b4dff48cf40a0abd7', labelText: `${locales_store.locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (index.h("div", { key: 'f84c7611a349e4d12fbdf3fcb933eef3f8a1ad80', class: "d-flex align-items-center" }, index.h("svg", { key: 'd39b0b16476be53d4bae99f6da7c9d14ff0ce091', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'c62f41d9a279d20b8d12243e1c9e1d5fa6457852', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), index.h("p", { key: 'bd3303b184ed1b359c7c82d20ca9b21b40d7fe25', class: "m-0 p-0 ml-1" }, locales_store.locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (index.h("ir-label", { labelText: `${locales_store.locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.booking.remark })) : (index.h("ota-label", { class: 'm-0 p-0', label: `${locales_store.locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.booking.ota_notes, maxVisibleItems: this.booking.ota_notes?.length })), index.h("div", { key: '02f7d64ae58f90ec2fc149e1c0a5ee958663aef3', class: "reservation-information__row" }, index.h("ir-label", { key: '3112166a8e19922783ce4eb2d9068e4b40c4f90a', labelText: `${locales_store.locales.entries.Lcz_BookingPrivateNote}:`, placeholder: locales_store.locales.entries.Lcz_VisibleToHotelOnly, content: privateNote, display: privateNote ? 'inline' : 'flex' }), index.h("wa-tooltip", { key: 'b067d54175afaaae004dafd98afca6f5631ad36f', for: `edit_create-extra-note` }, privateNote ? 'Edit' : 'Create', " private note"), index.h("ir-custom-button", { key: 'fa55ad07c8446ff02af6a1283326c5a3df2cd270', iconBtn: true, id: `edit_create-extra-note`, onClickHandler: () => {
                this.irBookingExtraNoteRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, index.h("wa-icon", { key: 'f3bd27db8b455d74ac465ea581df0ee367dda635', style: { fontSize: '1rem' }, name: "edit", label: "Edit or create private note" }))), index.h("ir-booking-extra-note", { key: '503216a239ccf005830da2923de46330ca366e7d', booking: this.booking, ref: el => (this.irBookingExtraNoteRef = el) }), index.h("ir-booking-company-dialog", { key: '8f0729fee64f185081875b29a58b8d3d5e43980c', booking: this.booking, ref: el => (this.irBookingCompanyFormRef = el) })), index.h("ir-arrival-time-dialog", { key: 'ec5018449a34451190543007b1141fd2dba00b4a', booking: this.booking, arrivalTime: this.arrivalTime, ref: el => (this.irArrivalTimeDialogRef = el) })));
    }
};
IrReservationInformation.style = IrReservationInformationStyle0;

const irRoomCss = ".light-blue-bg.sc-ir-room{background:#acecff;padding:0.1rem 0.3rem;border-radius:5px;display:block;max-width:100px;box-sizing:border-box;display:inline-block;overflow:hidden;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:default}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room span.sc-ir-room{display:inline;white-space:normal;line-height:1.5;word-break:break-word}.room_statements.sc-ir-room b.sc-ir-room{display:inline;margin-right:5px}.payment-container.sc-ir-room{position:absolute;right:1rem;height:fit-content}.sc-ir-room-h{position:relative}.subtotal_row.sc-ir-room{padding-top:8px;font-weight:600}.room_actions_btns.sc-ir-room{gap:0.5rem}.night-cost.sc-ir-room{color:#7cbebe}.room_actions_btns.sc-ir-room{white-space:nowrap;width:max-content}.booking-room__cell-tax-name.sc-ir-room{display:block;white-space:wrap !important}.room_actions_btns.sc-ir-room{flex:1 1 0%;display:flex;justify-content:flex-end}.mx-0-5.sc-ir-room{margin-left:2px !important;margin-right:2px !important}.tax-width.sc-ir-room{font-size:10px}.mx-01.sc-ir-room{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}*.sc-ir-room-h{box-sizing:border-box}.booking-room__collapse-btn.sc-ir-room{all:unset;display:inline-flex;align-items:center;align-self:flex-start;height:fit-content;border-radius:calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));aspect-ratio:1;cursor:pointer;transition:rotate var(--wa-transition-normal) var(--wa-transition-easing)}.booking-room__collapse-btn[data-state='opened'].sc-ir-room{rotate:90deg}.booking-room__collapse-btn[data-state='opened'].sc-ir-room:dir(rtl){rotate:-90deg}.booking-room__collapse-btn.sc-ir-room:focus-visible{outline:var(--wa-focus-ring);outline-offset:calc(var(--wa-panel-border-width) + var(--wa-focus-ring-offset))}.booking-room__header-row.sc-ir-room{display:flex;gap:var(--wa-space-sm, 0.5rem);margin:0}.booking-room__price-row.sc-ir-room{display:flex;align-items:center;gap:var(--wa-space-xs)}.booking-room__summary-row.sc-ir-room{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--wa-space-xs, 0.25rem)}.booking-room__summary-text.sc-ir-room,.booking-room__text-reset.sc-ir-room{margin:0;padding:0}.booking-room__summary-highlight.sc-ir-room{font-weight:600}.booking-room__dates-row.sc-ir-room{display:flex;flex-wrap:wrap;gap:var(--wa-space-xs, 0.25rem);align-items:center}.booking-room__date-view.sc-ir-room{flex:1 1 150px;min-width:140px;font-size:var(--wa-font-size-s);width:fit-content}.booking-room__guest-row.sc-ir-room{display:flex;flex-wrap:wrap;align-items:center;gap:0.5rem}.booking-room__guest-name.sc-ir-room{font-weight:600}.booking-room__bed-info.sc-ir-room{color:var(--wa-color-neutral-700)}.booking-room__departure-row.sc-ir-room{display:flex;flex-wrap:wrap;align-items:center;gap:0.5rem}.booking-room__departure-label.sc-ir-room{font-weight:500}.booking-room_summary.sc-ir-room{display:grid;gap:0.5rem}.booking-room__actions.sc-ir-room{display:flex;align-items:center}.booking-room__breakdown-row.sc-ir-room{display:flex;flex-direction:column;gap:0.5rem;margin:0.5rem 0}@media (min-width: 640px){.booking-room__breakdown-row.sc-ir-room{flex-direction:row;align-items:flex-start}}.booking-room__breakdown-label-wrapper.sc-ir-room{flex:0 0 auto;padding-top:0.25rem}.booking-room__breakdown-label.sc-ir-room{margin:0;padding-right:0.5rem;font-weight:600;white-space:nowrap}.booking-room__breakdown-table.sc-ir-room{flex:1 1 auto;overflow-x:auto}.booking-room__cell.sc-ir-room{font-size:var(--wa-font-size-sm);padding:0.125rem 0;line-height:1.3;white-space:nowrap}.booking-room__cell--right.sc-ir-room{text-align:right}.booking-room__cell--left.sc-ir-room{text-align:left}.booking-room__cell--pad-right.sc-ir-room{padding-right:0.5rem}.booking-room__cell--pad-left.sc-ir-room{padding-left:0.5rem}.booking-room__details.sc-ir-room,.booking-room__details.sc-ir-room::part(base),.booking-room__details.sc-ir-room::part(header),.booking-room__details.sc-ir-room::part(content){width:100%;box-sizing:border-box;padding:0}.booking-room__details.sc-ir-room::part(header){align-items:flex-start}.booking-room__price.sc-ir-room{font-weight:700;color:var(--wa-color-neutral-900);white-space:nowrap;text-align:right}";
const IrRoomStyle0 = irRoomCss;

const IrRoom = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.deleteFinished = index.createEvent(this, "deleteFinished", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.pressCheckIn = index.createEvent(this, "pressCheckIn", 7);
        this.pressCheckOut = index.createEvent(this, "pressCheckOut", 7);
        this.editInitiated = index.createEvent(this, "editInitiated", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.openSidebar = index.createEvent(this, "openSidebar", 7);
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
    // Booleans Conditions
    hasRoomEdit = false;
    hasRoomDelete = false;
    hasRoomAdd = false;
    hasCheckIn = false;
    hasCheckOut = false;
    agent;
    clTransactions = [];
    collapsed = true;
    isLoading = false;
    isToggling = false;
    modalReason = null;
    mainGuest;
    isModelOpen = false;
    isOpen = false;
    // Event Emitters
    deleteFinished;
    toast;
    pressCheckIn;
    pressCheckOut;
    editInitiated;
    resetBookingEvt;
    openSidebar;
    modal;
    toggleDialogRef;
    bookingService = new booking_service.BookingService();
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
            NAME: booking.formatName(this.mainGuest?.first_name, this.mainGuest?.last_name),
            EMAIL: this.booking.guest.email,
            PHONE: this.booking.guest.mobile,
            REFERENCE_TYPE: '',
            FROM_DATE: this.booking.from_date,
            TO_DATE: this.booking.to_date,
            TITLE: `${locales_store.locales.entries.Lcz_EditBookingFor} ${this.room?.roomtype?.name} ${this.room?.unit?.name || ''}`,
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
    async updateDepartureTime(code) {
        try {
            await this.bookingService.setDepartureTime({
                property_id: this.property_id,
                code,
                room_identifier: this.room.identifier,
            });
            this.toast.emit({
                type: 'success',
                description: '',
                title: 'Saved Successfully',
                position: 'top-right',
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    formatVariation({ infant_nbr, adult_nbr, children_nbr }) {
        const adultCount = adult_nbr > 0 ? adult_nbr : 0;
        const childCount = children_nbr > 0 ? children_nbr : 0;
        const infantCount = infant_nbr > 0 ? infant_nbr : 0;
        const adultLabel = adultCount > 1 ? locales_store.locales.entries.Lcz_Adults.toLowerCase() : locales_store.locales.entries.Lcz_Adult.toLowerCase();
        const childLabel = childCount > 1 ? locales_store.locales.entries.Lcz_Children.toLowerCase() : locales_store.locales.entries.Lcz_Child.toLowerCase();
        const infantLabel = infantCount > 1 ? locales_store.locales.entries.Lcz_Infants.toLowerCase() : locales_store.locales.entries.Lcz_Infant.toLowerCase();
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
    renderModalMessage() {
        switch (this.modalReason) {
            case 'delete':
                return `${locales_store.locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${this.room.roomtype.name} ${this.room.unit ? this.room.unit.name : ''} ${locales_store.locales.entries.Lcz_FromThisBooking}`;
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
    get acmTxByDate() {
        return new Map(this.clTransactions.filter(tx => tx.CATEGORY === 'ACM' && tx.BSA_REF === this.room.identifier).map(tx => [tx.SERVICE_DATE, tx]));
    }
    render() {
        const bed = this.getBedName();
        return (index.h(index.Host, { key: 'a9b0933f5156583b5623605b4110b192dbb48145' }, index.h("div", { key: 'a180bc61450a3fb889fcd3610bce4819248aa5c1', class: "booking-room__header-row" }, index.h("button", { key: '2fa4951076de48e3c650fa947d1726c7c58b0da6', "data-state": this.collapsed ? 'closed' : 'opened', class: "booking-room__collapse-btn", onClick: () => (this.collapsed = !this.collapsed) }, index.h("wa-icon", { key: 'adc7fd2d4565980f952035f7e7ca2dfc5990f7bd', name: "chevron-right" })), index.h("div", { key: '54bed59fd92b5922ddabd879716ae5f149ed8f9d', style: { width: '100%', cursor: 'default' } }, index.h("div", { key: 'e8d9912dc5c6bb24571ddbebcee591d57c88c4ba',
            // slot="summary"
            class: "booking-room_summary", style: { width: '100%', cursor: 'default' } }, index.h("div", { key: '08de5fdc717ee5f83801da3a8c609da295f19461', class: "booking-room__summary-row" }, index.h("p", { key: '789a97a4cb65c4168966852ddd47f8e86a70e1a5', class: "booking-room__summary-text" }, index.h("span", { key: 'd39950c3da49129710eca250227a37efc2665257', class: "booking-room__summary-highlight" }, this.myRoomTypeFoodCat || '', " "), " ", this.mealCodeName, ' ', this.room.rateplan.is_non_refundable && ` - ${locales_store.locales.entries.Lcz_NonRefundable}`, ' '), index.h("div", { key: '41e3ab7cb5126588b3fcc04efdce4e0c19dd565e', class: "booking-room__price-row" }, index.h("span", { key: '35d9fce18b5c0754d4541e8ecefa927d528766c3', class: "booking-room__price" }, utils.formatAmount(this.currency, this.room['gross_total'])), this.isEditable && (this.hasRoomEdit || this.hasRoomDelete) && (index.h("div", { key: 'e7ef02a0eb24a5c411c10025910258163ebbf664', class: "booking-room__actions" }, index.h("wa-dropdown", { key: '0afc46689f19a10653695d51b20aa125214613c8', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                switch (e.detail.item.value) {
                    case 'edit':
                        this.handleEditClick();
                        break;
                    case 'delete':
                        this.openModal('delete');
                        break;
                    case 'toggle':
                        this.toggleDialogRef.openModal();
                        break;
                }
            } }, index.h("ir-custom-button", { key: 'd3e9809503fc664cfe54641d0a20b818fe686a80', slot: "trigger", size: "small", class: "booking-room__edit-button", appearance: "plain", id: `actions-room-${this.room.identifier}`, iconBtn: true, variant: "neutral", style: { marginBottom: '4px' } }, index.h("wa-icon", { key: '7517b4f44676b085d75940708bad56642e749ef6', style: { fontSize: '1rem' }, label: "Actions", name: "ellipsis-vertical" })), this.hasRoomEdit && index.h("wa-dropdown-item", { key: '0e5eb9f2533b654b2aa02b925f07411ff2bd62f8', value: "edit" }, "Edit"), functions.isAgentMode(this.agent) && index.h("wa-dropdown-item", { key: 'd92f8fdd423944a105de9e834f0b1af4dda85256', value: "toggle" }, "Re-assign ", this.room.agent ? 'guest' : 'agent', " folio"), this.hasRoomDelete && (index.h("wa-dropdown-item", { key: '1a7339e6fbcae786cc33bd827dc385e289d35f6d', value: "delete", variant: "danger" }, "Delete"))))))), index.h("div", { key: 'aa4333684b6a21613c8bd62450a0944beba1a070', class: "booking-room__dates-row" }, index.h("ir-date-view", { key: 'f46722d5c4aa1c54b298ffc726b65866425aa37a', format: 'ddd, MMM DD, YYYY', class: "booking-room__date-view", from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), !calendarData.isSingleUnit(this.room.roomtype.id) && calendarData.calendar_data.is_frontdesk_enabled && this.room.unit && (
        // <div class={'d-flex justify-content-center align-items-center'}>
        //   <ir-tooltip message={(this.room.unit as IUnit).name} customSlot>
        //     <span slot="tooltip-trigger" class={`light-blue-bg  ${this.hasCheckIn || this.hasCheckOut ? 'mr-2' : ''} `}>
        //       {(this.room.unit as IUnit).name}
        //     </span>
        //   </ir-tooltip>
        // </div>
        index.h("ir-unit-tag", { key: '7942f1e39d31e1d9a7313ab9fb27f83bc33e6bae', unit: this.room.unit.name })), this.hasCheckIn && (index.h("ir-custom-button", { key: '6bc9d7d84be30636d0abc0d916111c5be3046793', onClickHandler: this.handleCheckIn.bind(this), id: "checkin", appearance: "outlined", variant: "brand" }, locales_store.locales.entries.Lcz_CheckIn)), this.hasCheckOut && (index.h("ir-custom-button", { key: '58f0b73a4a855fe46468925fa7d2557e50fe005e', appearance: "outlined", variant: "brand", onClickHandler: () => {
                this.modalReason = 'checkout';
            }, id: "checkout" }, locales_store.locales.entries.Lcz_CheckOut))), index.h("div", { key: '73375164bc45fb564d184389132ebe46513f3ff3', class: "booking-room__guest-row" }, index.h("p", { key: 'fff13da13af12cac8b37c41fbdcca3105fa3424c', class: "booking-room__text-reset booking-room__guest-name" }, `${this.mainGuest.first_name || ''} ${this.mainGuest.last_name || ''}`), this.room.rateplan.selected_variation.adult_nbr > 0 &&
            (this.room.unit ? (index.h(index.Fragment, null, index.h("wa-tooltip", { for: `view-guest-btn-${this.room.identifier}` }, "View guests"), index.h("ir-custom-button", { link: true, onClickHandler: () => this.showGuestModal(), id: `view-guest-btn-${this.room.identifier}`, variant: "brand", appearance: "plain" }, index.h("span", { innerHTML: this.formatVariation(this.room.occupancy) })))) : (index.h("span", { innerHTML: this.formatVariation(this.room.occupancy) }))), bed && index.h("p", { key: 'f0b9bc6b927401a6fbbbcb562329c19beb9643fa', class: "booking-room__text-reset booking-room__bed-info" }, "(", bed, ")")), this.includeDepartureTime && (index.h("div", { key: '3e8ce87f09dee228abb994956f51f9835ddc33c0', class: "booking-room__departure-row" }, index.h("p", { key: '13a1e16b6611998d84a6a803624c87e63a9c230a', class: "booking-room__text-reset booking-room__departure-label" }, "Expected departure time:"), index.h("wa-select", { key: '567939c6fe0b7d0c68bccbb0d3ab79e5962d4f50', onchange: e => {
                this.updateDepartureTime(e.target.value);
            }, style: { width: '140px' }, size: "small", placeholder: "Not provided", value: this.room.departure_time?.code, defaultValue: this.room.departure_time?.code }, this.departureTime?.map(dt => (index.h("wa-option", { key: dt.CODE_NAME, value: dt.CODE_NAME }, dt[`CODE_VALUE_${this.language?.toUpperCase()}`] ?? dt[`CODE_VALUE_EN`]))))))), !this.collapsed && (index.h("div", { key: 'ea262a93a5d1bd14ffd6bba47f60fca7a5b75473', class: "booking-room__details-container" }, index.h("div", { key: 'eb40024129e16abe4ba91847ae8521fdd00ed939', class: "booking-room__breakdown-row" }, index.h("div", { key: 'b57911e103bf0861732d64446e18dfbae57f6b02', class: "booking-room__breakdown-table" }, index.h("table", { key: 'f1ea7070f522a870e24deca036d43bbce7573f38' }, this.room.days.length > 0 &&
            (() => {
                const acmTxByDate = this.acmTxByDate;
                return this.room.days.map(room => {
                    const tx = acmTxByDate.get(room.date);
                    return (index.h("tr", null, index.h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, functions._getDay(room.date)), index.h("td", { class: "booking-room__cell booking-room__cell--right" }, utils.formatAmount(this.currency, room.amount)), room.cost > 0 && room.cost !== null && (index.h("td", { class: "booking-room__cell booking-room__cell--left booking-room__cell--pad-left night-cost" }, utils.formatAmount(this.currency, room.cost))), index.h("td", { class: "booking-room__cell booking-room__cell--pad-left" }, tx && index.h("ir-cl-status-tag", { transaction: { _rowId: '', ...utils$1.mapClTxToFolioRow(tx), balance: 0 }, size: "extra-small" }))));
                });
            })(), index.h("tr", { key: '6ff5d829aeab2806fe8340937039508691dec5fe', class: '' }, index.h("th", { key: 'd06ecb04cecfc0bf8cc7612aa59feb2d3d661f2f', class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right subtotal_row" }, locales_store.locales.entries.Lcz_SubTotal), index.h("th", { key: '9ddaff0d5b6ddd89fd61615fc92732be6586830c', class: "booking-room__cell booking-room__cell--right subtotal_row" }, utils.formatAmount(this.currency, this.room.total)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (index.h("th", { key: 'a302c477d4c9d1323f6e2ebdf447520c795bcfab', class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-left night-cost" }, utils.formatAmount(this.currency, this.room.cost)))), this.booking.is_direct ? (index.h(index.Fragment, null, (() => {
            const filtered_data = calendarData.calendar_data.taxes.filter(tx => tx.pct > 0 && tx.is_exlusive);
            return filtered_data.map(d => {
                const amount = d.is_exlusive
                    ? // Tax is added on top
                        this.room.total * d.pct
                    : // Tax is included in total → extract it
                        this.room.total - this.room.total / (1 + d.pct);
                return (index.h("tr", null, index.h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, index.h("span", { class: 'booking-room__cell-tax-name' }, d.is_exlusive ? locales_store.locales.entries.Lcz_Excluding : locales_store.locales.entries.Lcz_Including, " ", d.name, " (", d.pct, "%)")), index.h("td", { class: "booking-room__cell booking-room__cell--right" }, utils.formatAmount(this.currency, amount / 100)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (index.h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-left night-cost" }, utils.formatAmount(this.currency, (this.room.cost * d.pct) / 100)))));
            });
        })(), this.room.inclusive_taxes?.CALCULATED_INCLUSIVE_TAXES?.map(d => (index.h("tr", null, index.h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, index.h("span", { class: 'booking-room__cell-tax-name' }, locales_store.locales.entries.Lcz_Including, " ", d.TAX_NAME, " (", d.TAX_PCT * 100, "%)")), index.h("td", { class: "booking-room__cell booking-room__cell--right" }, utils.formatAmount(this.currency, d.CALCULATED_VALUE))))))) : (index.h(index.Fragment, null, (() => {
            const filtered_data = this.room.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (index.h("tr", null, index.h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, index.h("span", { class: 'booking-room__cell-tax-name' }, d.is_exlusive ? locales_store.locales.entries.Lcz_Excluding : locales_store.locales.entries.Lcz_Including, " ", d.name)), index.h("td", { class: "booking-room__cell booking-room__cell--right" }, d.currency.symbol, d.amount)));
            });
        })()))))), index.h("ir-label", { key: 'b4d087e20728ee7f59b6576a8d9dc29be9630e97', labelText: `${locales_store.locales.entries.Lcz_SmokingOptions}:`, display: "inline", content: this.getSmokingLabel() }), this.booking.is_direct && (index.h(index.Fragment, { key: '31991ee622a7d223d92684d0a50ceee995bbd5d0' }, this.room.rateplan.cancelation && (index.h("ir-label", { key: '8f87ba63c82ec644a78ad7d7e9cf85f484064f88', labelText: `${locales_store.locales.entries.Lcz_Cancellation}:`, display: "inline", content: this.room.rateplan.cancelation || '', renderContentAsHtml: true })), this.room.rateplan.guarantee && (index.h("ir-label", { key: 'a9c880daedc31b6c5aa8f65637f4f1ab24c70a95', labelText: `${locales_store.locales.entries.Lcz_Guarantee}:`, display: "inline", content: this.room.rateplan.guarantee || '', renderContentAsHtml: true })))), this.room.ota_meta && (index.h("div", { key: '2b06894cf35efb0089649159aa0759eadeffa513' }, index.h("ir-label", { key: '2afe18c614f34dd1f4af7e5802356720d3fa6593', labelText: `${locales_store.locales.entries.Lcz_MealPlan}:`, display: "inline", content: this.room.ota_meta.meal_plan }), index.h("ir-label", { key: '7d05bc5f613599a5fee213ecc716996f321416e5', labelText: `${locales_store.locales.entries.Lcz_Policies}:`, display: "inline", content: this.room.ota_meta.policies }))))))), index.h("ir-assignment-toggle-dialog", { key: '67dd656fb8ca250f2d5cc45bfcf69fba662b9964', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, onConfirmToggle: () => this.toggleRoomAgent() }, index.h("span", { key: 'afcbfd64404611f29b25670d7cff158f77e71623', slot: "message" }, "Move ", this.room.roomtype.name, " ", this.room.rateplan.short_name, " ", this.room.unit?.name, " to", ' ', index.h("b", { key: '2a869fd52b55e089a5404dd024d9773388fdb3f8' }, this.room.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent'), " folio"), ".")), index.h("ir-dialog", { key: '9706a224d8d8b4c6a70d3709f61756f0f68ae2f6', label: this.modalReason === 'delete' ? 'Alert' : locales_store.locales.entries.Lcz_Confirmation, ref: el => (this.modal = el), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalReason = null;
            }, lightDismiss: this.modalReason === 'checkin' }, index.h("p", { key: '893f71bf406046ed09030888da40e94660936708' }, this.renderModalMessage()), index.h("div", { key: 'b4f48dfb4ce9c5494744399b95b4af0e85a5ebcb', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: 'a8cc77d1b4921666b0b19de2bcfa8aeeac33b258', size: "medium", "data-dialog": "close", appearance: "filled", variant: "neutral" }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { key: '7317acb23fcfaf328729688a646a7689116bfc37', size: "medium", loading: this.isLoading, onClickHandler: e => this.handleModalConfirmation(e), variant: this.modalReason === 'delete' ? 'danger' : 'brand' }, this.modalReason === 'delete' ? locales_store.locales.entries.Lcz_Delete : locales_store.locales.entries.Lcz_Confirm))), index.h("ir-checkout-dialog", { key: '5c49c6fe0cd4079cbf0e702ed682c136fd6022e4', onCheckoutDialogClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalReason = null;
                if (e.detail.reason === 'openInvoice') {
                    this.isOpen = true;
                }
                else if (e.detail.reason === 'checkout') {
                    this.resetBookingEvt.emit();
                }
            }, identifier: this.room.identifier, open: this.modalReason === 'checkout', booking: this.booking }), index.h("ir-invoice", { key: '1dbdee03bff69f8d236dfaf5133fc844ed359e73', onInvoiceClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            }, open: this.isOpen, booking: this.booking, roomIdentifier: this.room.identifier })));
    }
    static get watchers() { return {
        "room": ["handleRoomDataChange"]
    }; }
};
IrRoom.style = IrRoomStyle0;

const irRoomGuestsCss = "";
const IrRoomGuestsStyle0 = irRoomGuestsCss;

const IrRoomGuests = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
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
        return (index.h("ir-drawer", { key: '290d94b9b97874708b6cfc396c2e747a8d07d8c3', style: {
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
            } }, this.open && (index.h("ir-room-guests-form", { key: 'e22508fad8e9abc2f350f09d642dff502cc311fd', sharedPersons: this.sharedPersons, roomName: this.roomName, countries: this.countries, totalGuests: this.totalGuests, identifier: this.identifier, bookingNumber: this.bookingNumber, checkIn: this.checkIn, language: this.language, onLoadingChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail;
            } })), index.h("div", { key: 'f42916204e9e2b388534d2adc6644bd3fbacc0bf', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: 'e3d949d66abe692af697ae4d40d6542b2e4417a8', size: "medium", "data-drawer": "close", appearance: "filled", variant: "neutral" }, locales_store.locales?.entries?.Lcz_Cancel ?? 'Save'), index.h("ir-custom-button", { key: 'f0478404879c85b5f58cb72c5c111df14ba82b64', value: "save", loading: this.isLoading === 'save', size: "medium", form: `room-guests__${this.identifier}`, type: "submit", variant: "brand" }, locales_store.locales?.entries?.Lcz_Save ?? 'Save'), this.checkIn && (index.h("ir-custom-button", { key: 'f024b6f58678cf8c975d302a130c49de17514563', value: "save_checkin", loading: this.isLoading === 'save_checkin', size: "medium", form: `room-guests__${this.identifier}`, type: "submit", variant: "brand" }, locales_store.locales.entries?.Lcz_CheckIn ?? 'Check in')))));
    }
};
IrRoomGuests.style = IrRoomGuestsStyle0;

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
            mask: index$3.MaskedRange,
            from: 1900,
            to: new Date().getFullYear(),
            placeholderChar: 'Y',
        },
        MM: {
            mask: index$3.MaskedRange,
            from: 1,
            to: 12,
            placeholderChar: 'M',
        },
        DD: {
            mask: index$3.MaskedRange,
            from: 1,
            to: 31,
            placeholderChar: 'D',
        },
    },
};

const irRoomGuestsFormCss = ".sc-ir-room-guests-form-h{display:block;height:100%;position:relative;text-align:start !important;padding-bottom:1rem !important}.id-select.sc-ir-room-guests-form{border-top-right-radius:0;border-bottom-right-radius:0;border-right-width:0}.sc-ir-room-guests-form-h{display:block;width:100%}.guests-labels.sc-ir-room-guests-form{display:none}.sharing_persons_label.sc-ir-room-guests-form{display:none}.loading-container.sc-ir-room-guests-form{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.guest_document.sc-ir-room-guests-form input.sc-ir-room-guests-form{border-top-left-radius:0;border-bottom-left-radius:0}.guests-labels.sc-ir-room-guests-form *.sc-ir-room-guests-form,.sharing_persons_label.sc-ir-room-guests-form{margin-bottom:0.5rem;padding-bottom:0}.room-guest__info-container.sc-ir-room-guests-form{display:flex;flex:1 1 0%;align-items:center}.room-guest__document.sc-ir-room-guests-form::part(base):dir(ltr),.room-guest__id-info.sc-ir-room-guests-form::part(combobox):dir(rtl){border-top-left-radius:0;border-bottom-left-radius:0}.room-guest__document.sc-ir-room-guests-form{flex:1 1 0%}.room-guest__id-info.sc-ir-room-guests-form::part(combobox):dir(ltr),.room-guest__document.sc-ir-room-guests-form::part(base):dir(rtl){border-top-right-radius:0;border-bottom-right-radius:0}.room-guest__id-info.sc-ir-room-guests-form::part(combobox):dir(ltr){border-right-width:0}.room-guest__id-info.sc-ir-room-guests-form::part(combobox):dir(rtl){border-left-width:0}.room-guest__id-info[open].sc-ir-room-guests-form,.room-guest__id-info.sc-ir-room-guests-form:focus-visible,.room-guest__id-info.sc-ir-room-guests-form:focus-within{z-index:2}.room-guest__section.sc-ir-room-guests-form{display:flex;flex-direction:column;margin-bottom:1rem}.room-guest__section.sc-ir-room-guests-form p.sc-ir-room-guests-form{margin:0;padding:0}.guest_label.sc-ir-room-guests-form{width:100px;display:inline-block;position:relative;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height);margin-bottom:0.5em !important}@media (min-width: 768px){.sharing_persons_label.sc-ir-room-guests-form{display:block}.guest_country_picker.sc-ir-room-guests-form{margin-bottom:3px}.room-guest__section.sc-ir-room-guests-form{display:block}.guest-grid.sc-ir-room-guests-form{display:grid;grid-template-columns:minmax(0, 120px) \n      minmax(0, 120px) \n      minmax(0, 120px) \n      minmax(0, 120px) \n      minmax(0, 1fr);gap:0.5rem;align-items:flex-start}.guest_label.sc-ir-room-guests-form,.sharing_persons_heading.sc-ir-room-guests-form,.main_guest_heading.sc-ir-room-guests-form{display:none}}";
const IrRoomGuestsFormStyle0 = irRoomGuestsFormCss;

const IrRoomGuestsForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.updateRoomGuests = index.createEvent(this, "updateRoomGuests", 7);
        this.loadingChange = index.createEvent(this, "loadingChange", 7);
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
    bookingService = new booking_service.BookingService();
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
                utils.validateSharedPerson(guest);
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
            if (error instanceof index$2.ZodError) {
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
            } }, index.h("section", { class: 'sheet-body' }, index.h("div", { class: "" }, index.h("div", { class: "guest-grid guests-labels" }, index.h("p", { class: "" }, locales_store.locales.entries.Lcz_MainGuest), index.h("p", { class: "" }), index.h("p", { class: " " }, locales_store.locales.entries.Lcz_DOB), index.h("p", { class: "" }, locales_store.locales.entries.Lcz_Nationality), index.h("p", { class: " " }, locales_store.locales.entries.Lcz_Documents)), index.h("h5", { class: "main_guest_heading" }, locales_store.locales.entries.Lcz_MainGuest), this.guests.map((guest, idx) => {
            let isRowValid = true;
            try {
                utils.validateSharedPerson(guest);
            }
            catch (error) {
                isRowValid = false;
            }
            // console.log(`row ${idx}=>${isRowValid}`);
            return (index.h(index.Fragment, null, idx === 1 && (index.h("div", { class: "d-flex mx-0 px-0" }, index.h("h5", { class: "mx-0 px-0 sharing_persons_heading" }, locales_store.locales.entries.Lcz_PersonsSharingRoom), index.h("p", { class: "mx-0 px-0 sharing_persons_label" }, locales_store.locales.entries.Lcz_PersonsSharingRoom))), index.h("div", { key: idx, class: "guest-grid" }, index.h("div", { class: "room-guest__section" }, index.h("label", { htmlFor: `first_name_${idx}`, class: "guest_label" }, "First name"), index.h("ir-validator", { class: "flex-grow-1", schema: utils.ZSharedPerson.shape.first_name }, index.h("ir-input", { "aria-invalid": String(!!this.error['first_name'] && !isRowValid), size: "small", id: `first_name_${idx}`, placeholder: "First name", "onText-change": e => this.updateGuestInfo(idx, { first_name: e.detail }), value: guest.first_name, maxlength: 40 }))), index.h("div", { class: "room-guest__section" }, index.h("label", { class: "guest_label" }, "Last name"), index.h("ir-input", { "aria-invalid": String(!!this.error['last_name'] && !isRowValid), size: "small", id: `last_name_${idx}`, placeholder: "Last name", "onText-change": e => this.updateGuestInfo(idx, { last_name: e.detail }), value: guest.last_name, maxlength: 40 })), index.h("div", { class: "room-guest__section" }, index.h("p", { class: "guest_label" }, locales_store.locales.entries.Lcz_DOB), index.h("ir-validator", { class: "flex-grow-1", schema: utils.ZSharedPerson.shape.dob }, index.h("ir-input", { "aria-invalid": String(!!this.error['dob'] && !isRowValid), id: `dob_${idx}`, mask: dateMask, size: "small", placeholder: "", "onText-change": e => {
                    this.updateGuestInfo(idx, { dob: e.detail });
                }, value: guest.dob }))), index.h("div", { class: "room-guest__section" }, index.h("p", { class: "guest_label" }, locales_store.locales.entries.Lcz_Nationality), index.h("div", { class: "flex-grow-1" }, index.h("ir-country-picker", { size: "small", variant: "modern", "aria-invalid": String(!!this.error['country_id'] && !guest.country_id), propertyCountry: this.propertyCountry, id: `{locales.entries.Lcz_Nationality}_${idx}`, error: !!this.error['country_id'] && !guest.country_id, country: this.countries?.find(c => c.id?.toString() === guest.country?.id?.toString()), onCountryChange: e => this.updateGuestInfo(idx, { country_id: e.detail?.id?.toString() ?? null, country: e.detail }), countries: this.countries }))), index.h("div", { class: "room-guest__section" }, index.h("p", { class: "guest_label" }, locales_store.locales.entries.Lcz_Documents), index.h("div", { class: 'room-guest__info-container flex-grow-1' }, index.h("wa-select", { class: "room-guest__id-info", defaultValue: guest.id_info?.type?.code ?? this.idTypes[0]?.CODE_NAME, value: guest.id_info?.type?.code, onchange: e => {
                    this.updateGuestInfo(idx, {
                        id_info: {
                            ...this.guests[idx].id_info,
                            type: {
                                code: e.target.value,
                                description: '',
                            },
                        },
                    });
                }, size: "small" }, this.idTypes?.map(t => {
                const label = t[`CODE_VALUE_${this.language.toUpperCase()}`] ?? t[`CODE_VALUE_EN`];
                return (index.h("wa-option", { value: t['CODE_NAME'], label: label }, label));
            })), index.h("wa-input", { size: "small", "aria-invalid": String(!!this.error['number'] && !isRowValid), class: "room-guest__document", defaultValue: guest?.id_info?.number, value: guest?.id_info?.number, maxlength: 18, placeholder: "12345", onchange: e => this.updateGuestInfo(idx, {
                    id_info: {
                        ...this.guests[idx].id_info,
                        number: e.target.value,
                    },
                }) }))))));
        })))));
    }
};
IrRoomGuestsForm.style = IrRoomGuestsFormStyle0;

const otaLabelCss = "*.sc-ota-label{margin:0;padding:0}.sc-ota-label-h{display:flex;margin-bottom:5px;gap:5px}.label_title.sc-ota-label{min-width:max-content;padding:0;margin:0;font-weight:600}.ota-message-list.sc-ota-label{margin:0 3px;padding:0;overflow:hidden;width:100%;word-wrap:break-word !important;overflow-wrap:break-word !important}.ota-message-item.sc-ota-label{width:100%;line-height:1.5;margin:0;padding:0;word-wrap:break-word !important;overflow-wrap:break-word !important}.ota-message-item.sc-ota-label::before{content:'- ';margin-right:0.25rem}.ota-visibility-toggle.sc-ota-label{background:white;color:var(--blue);padding:0;margin:0;margin-left:3px;font-size:12px;border:0}.ota-visibility-toggle.sc-ota-label:hover{color:#355270}.ota-message-list.sc-ota-label{margin:0 3px;padding:0;overflow:hidden;width:100%;word-wrap:break-word !important;overflow-wrap:break-word !important;white-space:normal;list-style:none}.ota-message-item.sc-ota-label{width:100%;line-height:1.5;margin:0 0 0 1.2em;padding:0;word-wrap:break-word !important;overflow-wrap:break-word !important;white-space:normal;position:relative}";
const OtaLabelStyle0 = otaLabelCss;

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
        return (index.h(index.Host, null, index.h("p", { class: 'label_title' }, this.label), index.h("ul", { class: "ota-message-list" }, displayedRemarks.map((remark, index$1) => (index.h("li", { key: v4.v4(), class: "ota-message-item" }, remark.statement, ' ', this.remarks.length > this.maxVisibleItems && index$1 === displayedRemarks.length - 1 && (index.h("button", { class: "ota-visibility-toggle", onClick: this.toggleShowAll }, this.showAll ? locales_store.locales.entries.Lcz_ShowLess : locales_store.locales.entries.Lcz_ShowMore))))))));
    }
};
OtaLabel.style = OtaLabelStyle0;

exports.igl_room_type = IglRoomType;
exports.ir_agent_billing = IrAgentBilling;
exports.ir_applicable_policies = IrApplicablePolicies;
exports.ir_arrival_time_dialog = IrArrivalTimeDialog;
exports.ir_assignment_toggle_dialog = IrAssignmentToggleDialog;
exports.ir_billing = IrBilling;
exports.ir_billing_drawer = IrBillingDrawer;
exports.ir_booking_assign_items = IrBookingAssignItems;
exports.ir_booking_city_ledger = IrBookingCityLedger;
exports.ir_booking_details = IrBookingDetails;
exports.ir_booking_editor = IrBookingEditor;
exports.ir_booking_editor_drawer = IrBookingEditorDrawer;
exports.ir_booking_editor_form = IrBookingEditorForm;
exports.ir_booking_editor_guest_form = IrBookingEditorGuestForm;
exports.ir_booking_editor_header = IrBookingEditorHeader;
exports.ir_booking_extra_note = IrBookingExtraNote;
exports.ir_booking_guarantee = IrBookingGuarantee;
exports.ir_booking_header = IrBookingHeader;
exports.ir_booking_rooms = IrBookingRooms;
exports.ir_booking_source_editor_dialog = IrBookingSourceEditorDialog;
exports.ir_booking_source_editor_form = IrBookingSourceEditorForm;
exports.ir_booking_status_tag = IrBookingStatusTag;
exports.ir_checkout_dialog = IrCheckoutDialog;
exports.ir_events_log = IrEventsLog;
exports.ir_extra_service = IrExtraService;
exports.ir_extra_service_config = IrExtraServiceConfig;
exports.ir_extra_service_config_form = IrExtraServiceConfigForm;
exports.ir_extra_services = IrExtraServices;
exports.ir_guest_billing = IrGuestBilling;
exports.ir_guest_info_drawer = IrGuestInfoDrawer;
exports.ir_guest_info_form = IrGuestInfoForm;
exports.ir_invoice = IrInvoice;
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
exports.ir_room_guests = IrRoomGuests;
exports.ir_room_guests_form = IrRoomGuestsForm;
exports.ota_label = OtaLabel;

//# sourceMappingURL=igl-room-type_47.cjs.entry.js.map
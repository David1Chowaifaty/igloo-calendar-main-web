'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const booking_service = require('./booking.service-d07cd065.js');
const moment = require('./moment-1780b03a.js');
const utils = require('./utils-d597c37f.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
const locales_store = require('./locales.store-32782582.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
const v4 = require('./v4-9b297151.js');
const utils$1 = require('./utils-cb089e29.js');
const axios = require('./axios-6e678d52.js');
const room_service = require('./room.service-f9117e70.js');
const payment_service = require('./payment.service-87fff556.js');
const Token = require('./Token-8fd11984.js');
const booking = require('./booking-c08b5e0f.js');
const index$1 = require('./index-8bb117a0.js');
const functions = require('./functions-337ee2a2.js');
const index$2 = require('./index-e9a28e3e.js');
const property_service = require('./property.service-98b87555.js');
const global_variables = require('./global.variables-108c9c1e.js');
require('./index-fbf1fe1d.js');
require('./type-976db45d.js');

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
        return (index.h(index.Host, { key: '227954c79ee16da37fa752c67530dedefd2c682b' }, isValidBookingType && this.roomType.rateplans?.length > 0 && index.h("h5", { key: 'acea99cc4096aa2e33972952c136f821b9bf2558', class: "roomtype__name" }, this.roomType.name), this.roomType.rateplans?.map(ratePlan => {
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
        return (index.h("ir-dialog", { key: '0b5c2f8541d62eb042bd7e6d9b2fe1940348a10c', label: "Edit Arrival Time", open: this.open, onIrDialogHide: () => {
                this.open = false;
            } }, index.h("wa-select", { key: '81a72e3673ee663d749007df81d2bbc2757bf6f0', size: "small", value: this.selectedArrivalTime, defaultValue: this.selectedArrivalTime, onchange: e => this.updateArrivalTime(e.target.value) }, this.arrivalTime.map(time => (index.h("wa-option", { value: time.CODE_NAME, selected: time.CODE_NAME === this.selectedArrivalTime }, time.CODE_VALUE_EN)))), index.h("div", { key: 'aa5e9e22ca41b0b1a9a840a138ce8432bf420c45', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '1cf8f384f6342bd85ed4ca0895817e145b173aca', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => this.closeDialog() }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { key: 'a38fd999aa104469bf0f5da6178a2bc24a24fd98', size: "medium", variant: "brand", onClickHandler: () => this.saveArrivalTime(), loading: this.isLoading }, locales_store.locales.entries.Lcz_Save))));
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
        return (index.h(index.Host, { key: '8eebdcf97427465a4c51bb54b51806963279f525' }, index.h("ir-dialog", { key: 'ff1acf9c0d92eaf26f6611f99f295e624d44fe8c', label: this.label, lightDismiss: false, ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, index.h("p", { key: '20f83f48220eea88f0e870fcffb0ad45acc47e31', class: "assignment-toggle-dialog__message" }, index.h("slot", { key: 'b821fd36f1d1ca1443486e0b339fa5d1f73c225a', name: "message" }, this.message)), index.h("div", { key: '8e0ca7f0a8af862bc2937b7d5e74f2f4d18ec0be', slot: "footer", class: "assignment-toggle-dialog__footer" }, index.h("ir-custom-button", { key: '3df3109f52292a226d9af88b69d4198cfece394c', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close", disabled: this.loading }, this.cancelLabel), index.h("ir-custom-button", { key: 'ce20f943b7e31e1c933b28fb291086a38087fea7', variant: "brand", size: "medium", loading: this.loading, onClickHandler: () => this.confirmToggle.emit() }, this.confirmLabel)))));
    }
};
IrAssignmentToggleDialog.style = IrAssignmentToggleDialogStyle0;

const irBillingCss = ".sc-ir-billing-h{display:flex;flex-direction:column;height:100%}.billing__container.sc-ir-billing{display:flex;flex-direction:column;gap:var(--wa-space-l)}.billing__section-title-row.sc-ir-billing{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem}.billing__section-title.sc-ir-billing{margin:0;padding:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m)}.billing__actions-row.sc-ir-billing{display:flex;align-items:center;justify-content:flex-end;gap:0.5rem}.billing__invoice-nbr.sc-ir-billing{margin:0;padding:0}.billing__invoice-nbr.--secondary.sc-ir-billing{font-size:0.75rem}.billing__price-col.sc-ir-billing{text-align:end !important}.billing__cards.sc-ir-billing{display:flex;flex-direction:column;gap:var(--wa-space-m);padding-bottom:var(--wa-space-l) !important}.billing__card.sc-ir-billing{display:block}.billing__card-header.sc-ir-billing{display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem}.billing__card-header-info.sc-ir-billing{display:flex;flex-direction:column}.billing__card-number.sc-ir-billing{margin:0;font-weight:var(--wa-font-weight-heading);font-family:var(--wa-font-family-heading)}.billing__card-type.sc-ir-billing{margin:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-secondary)}.billing__card-download-btn.sc-ir-billing{display:flex;align-items:center}.billing__card-details.sc-ir-billing{display:flex;gap:var(--wa-space-xs);justify-content:space-between}.billing__card-detail.sc-ir-billing{display:flex;flex-direction:column}.billing__card-detail-label.sc-ir-billing{margin:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.billing__card-detail-label.--amount.sc-ir-billing{text-align:end !important}.billing__card-detail-value.sc-ir-billing{margin:0;font-weight:var(--wa-font-weight-regular);font-size:var(--wa-font-size-s)}.billing__card-void-btn.sc-ir-billing{flex:1 1 0%}.billing__card-footer.sc-ir-billing{display:flex}.table-container.sc-ir-billing{display:none}.billing__card.sc-ir-billing::part(footer){padding-top:1rem;padding-bottom:1rem}@media (min-width: 768px){.billing__cards.sc-ir-billing{display:none}.table-container.sc-ir-billing{display:block}}";
const IrBillingStyle0 = irBillingCss;

const tableCss$1 = ".sc-ir-billing-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-billing td.sc-ir-billing{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-billing{overflow-x:auto}.table.sc-ir-billing td.sc-ir-billing{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-billing tbody.sc-ir-billing tr.sc-ir-billing:last-child>td.sc-ir-billing{border-bottom:0 !important}.table.sc-ir-billing thead.sc-ir-billing th.sc-ir-billing{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-billing thead.sc-ir-billing th.sc-ir-billing{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-billing .empty-row.sc-ir-billing{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-billing{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-billing td.sc-ir-billing{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-billing td.sc-ir-billing{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-billing,.ir-table-row.sc-ir-billing{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-billing{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-billing td.sc-ir-billing{transition-duration:var(--wa-transition-fast)}.table.sc-ir-billing thead.sc-ir-billing th.sortable.sc-ir-billing{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-billing thead.sc-ir-billing th.sortable.sc-ir-billing:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-billing thead.sc-ir-billing th.sortable.sc-ir-billing:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-billing:hover td.sc-ir-billing{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-billing:hover td.sc-ir-billing{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-billing:active td.sc-ir-billing{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-billing:hover td.sc-ir-billing{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-billing:active td.sc-ir-billing{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-billing:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-billing svg.sc-ir-billing{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-billing{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-billing,.data-table.sc-ir-billing{height:100%}";
const IrBillingStyle1 = tableCss$1;

const IrBilling = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.billingClose = index.createEvent(this, "billingClose", 7);
    }
    booking;
    isOpen = null;
    isLoading = 'page';
    invoiceInfo;
    selectedInvoice = null;
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
            window.open(My_Result);
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
            } }, "Issue invoice")), index.h("div", { class: "table-container" }, index.h("table", { class: "table" }, index.h("thead", null, index.h("tr", null, index.h("th", null, "Date"), index.h("th", null, "Number"), index.h("th", { class: "billing__price-col" }, "Amount"), index.h("th", null))), index.h("tbody", null, this.invoices?.map(invoice => {
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
        })))), index.h("div", { class: "billing__cards" }, this.invoices?.map(invoice => {
            const isValid = invoice.status.code === 'VALID';
            return (index.h("wa-card", { key: invoice.nbr, class: "billing__card" }, index.h("div", { class: "billing__card-header" }, index.h("div", { class: "billing__card-header-info" }, index.h("p", { class: "billing__card-number" }, isValid ? 'Invoice' : 'Credit note', ":", isValid ? invoice.nbr : invoice.credit_note.nbr), index.h("p", { class: "billing__card-type" }, isValid ? '' : invoice.nbr)), index.h("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } }, index.h("wa-tooltip", { for: `mobile-download-pdf-${invoice.system_id}` }, "Open PDF"), index.h("ir-custom-button", { onClickHandler: () => this.printInvoice({ invoice, mode: isValid ? 'invoice' : 'creditnote' }), loading: irInterceptor_store.isRequestPending('/Print_Invoice'), id: `mobile-download-pdf-${invoice.system_id}`, variant: "neutral", appearance: "plain", class: "billing__card-download-btn" }, index.h("wa-icon", { name: "file-pdf", style: { fontSize: '1rem' } })))), index.h("div", { class: "billing__card-details" }, index.h("div", { class: "billing__card-detail" }, index.h("p", { class: "billing__card-detail-label" }, "Date"), index.h("p", { class: "billing__card-detail-value" }, ' ', isValid ? moment.hooks(invoice.date, 'YYYY-MM-DD').format('MMM DD, YYYY') : moment.hooks(invoice.credit_note.date, 'YYYY-MM-DD').format('MMM DD, YYYY'))), index.h("div", { class: "billing__card-detail" }, index.h("p", { class: "billing__card-detail-label --amount" }, "Amount"), index.h("p", { class: "billing__card-detail-value" }, utils.formatAmount(invoice.currency.symbol, invoice.total_amount ?? 0)))), isValid && !invoice.credit_note && (index.h("div", { slot: "footer", class: "billing__card-footer" }, index.h("ir-custom-button", { onClickHandler: () => {
                    this.selectedInvoice = invoice.nbr;
                }, variant: "danger", appearance: "outlined", class: "billing__card-void-btn" }, "Void with credit note")))));
        })), this.invoiceInfo.invoices?.length === 0 && index.h("ir-empty-state", { style: { width: '100%', height: '40vh' } }))), index.h("ir-invoice", { invoiceInfo: this.invoiceInfo, onInvoiceClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = null;
            }, open: this.isOpen === 'invoice', booking: this.booking }), index.h("ir-dialog", { label: "Alert", open: this.selectedInvoice !== null, lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedInvoice = null;
            } }, index.h("p", null, "Void invoice ", this.selectedInvoice, " by generating a credit note?"), index.h("div", { slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, "Cancel"), index.h("ir-custom-button", { loading: this.isLoading === 'void', onClickHandler: this.voidInvoice.bind(this), size: "medium", variant: "danger" }, "Confirm")))));
    }
};
IrBilling.style = IrBillingStyle0 + IrBillingStyle1;

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
    /**
     * Emitted when the billing drawer has been closed.
     *
     * Listen to this event to respond to drawer close actions.
     *
     * @event billingClose
     */
    billingClose;
    render() {
        return (index.h("ir-drawer", { key: '118b38634ec8432034d40dd9632f3455e0e874b9', style: {
                '--ir-drawer-width': '50rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, class: "billing__drawer", onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.billingClose.emit();
            }, open: this.open, label: "Billing" }, this.open && index.h("ir-billing", { key: '693b6f289a801e3b6bbe6a7c51aa84bd11b00531', booking: this.booking })));
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
        return (index.h(index.Host, { key: 'b6a816b83e0a0b4f386ce72aad0763dce65b7178', size: "small" }, index.h("div", { key: 'e0ee1f7f9eca1900c9f8fa7aaf01a6abc33f9bd6', class: "assign-container" }, index.h("p", { key: '36c6e575968912358d6a549da30e8867796f4255', class: "assign-intro" }, "Select services for the Agent folio; others remain on the Guest folio."), rooms.length > 0 && (index.h("div", { key: '3bf2a33fdde969fc8e3d9a494f9d37fd8cf3686e', class: "assign-section" }, index.h("p", { key: 'fe0a6689ed71fc52dc389ff6d9f485fcd3fc1fcb', class: "assign-section__label" }, "Accommodation"), rooms.map(item => this.renderRoomItem(item)))), pickups.length > 0 && (index.h("div", { key: 'e14b5e7a78eb6cbd93ba8461cb15a80c81c3b527', class: "assign-section" }, index.h("p", { key: 'bd1ddafaf81a5da106731e084d16daf25407729e', class: "assign-section__label" }, "Pickup"), pickups.map(item => this.renderCheckItem(item)))), extras.length > 0 && (index.h("div", { key: '7a25fddd6e2a8085e6dc45937c8521820ec08a56', class: "assign-section" }, index.h("p", { key: 'c79cf6aa19923989610534180275772485f26afb', class: "assign-section__label" }, "Extra Services"), extras.map(item => this.renderExtraItem(item)))))));
    }
};
IrBookingAssignItems.style = IrBookingAssignItemsStyle0;

const irBookingCityLedgerCss = ".sc-ir-booking-city-ledger-h{display:block;width:100%;--ir-cell-padding:0.4rem 0.75rem}.booking-city-ledger__card.sc-ir-booking-city-ledger{width:100%}.booking-city-ledger__header-title.sc-ir-booking-city-ledger{display:flex;align-items:center;gap:0.5rem;font-weight:600}.booking-city-ledger__agent-name.sc-ir-booking-city-ledger{font-weight:400;color:var(--wa-color-neutral-600, #6b7280);font-size:var(--wa-font-size-s, 0.8125rem)}.booking-city-ledger__spinner-wrap.sc-ir-booking-city-ledger{display:flex;justify-content:center;align-items:center;padding:2rem}.booking-city-ledger__empty.sc-ir-booking-city-ledger,.booking-city-ledger__error.sc-ir-booking-city-ledger{margin:0;padding:1rem 0;text-align:center;font-size:0.875rem;color:var(--wa-color-neutral-500, #6b7280)}.booking-city-ledger__error.sc-ir-booking-city-ledger{color:var(--wa-color-danger-600, #dc2626)}.booking-city-ledger__table-wrap.sc-ir-booking-city-ledger{max-width:700px;margin:0 calc(var(--wa-card-padding, 1rem) * -1);margin-bottom:calc(var(--wa-card-padding, 1rem) * -1)}.text-right.sc-ir-booking-city-ledger{text-align:right !important}.is-debit.sc-ir-booking-city-ledger{color:var(--wa-color-danger-fill-loud) !important;font-weight:700}.is-credit.sc-ir-booking-city-ledger{color:var(--wa-color-success-fill-loud) !important;font-weight:700}.booking-city-ledger__cell-date.sc-ir-booking-city-ledger{white-space:nowrap;font-variant-numeric:tabular-nums}";
const IrBookingCityLedgerStyle0 = irBookingCityLedgerCss;

const tableCss = ".sc-ir-booking-city-ledger-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-booking-city-ledger td.sc-ir-booking-city-ledger{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-booking-city-ledger{overflow-x:auto}.table.sc-ir-booking-city-ledger td.sc-ir-booking-city-ledger{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-booking-city-ledger tbody.sc-ir-booking-city-ledger tr.sc-ir-booking-city-ledger:last-child>td.sc-ir-booking-city-ledger{border-bottom:0 !important}.table.sc-ir-booking-city-ledger thead.sc-ir-booking-city-ledger th.sc-ir-booking-city-ledger{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-booking-city-ledger thead.sc-ir-booking-city-ledger th.sc-ir-booking-city-ledger{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-booking-city-ledger .empty-row.sc-ir-booking-city-ledger{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-booking-city-ledger{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-booking-city-ledger td.sc-ir-booking-city-ledger{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-booking-city-ledger td.sc-ir-booking-city-ledger{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-booking-city-ledger,.ir-table-row.sc-ir-booking-city-ledger{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-booking-city-ledger{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-booking-city-ledger td.sc-ir-booking-city-ledger{transition-duration:var(--wa-transition-fast)}.table.sc-ir-booking-city-ledger thead.sc-ir-booking-city-ledger th.sortable.sc-ir-booking-city-ledger{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-booking-city-ledger thead.sc-ir-booking-city-ledger th.sortable.sc-ir-booking-city-ledger:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-booking-city-ledger thead.sc-ir-booking-city-ledger th.sortable.sc-ir-booking-city-ledger:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-booking-city-ledger:hover td.sc-ir-booking-city-ledger{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-booking-city-ledger:hover td.sc-ir-booking-city-ledger{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-booking-city-ledger:active td.sc-ir-booking-city-ledger{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-booking-city-ledger:hover td.sc-ir-booking-city-ledger{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-booking-city-ledger:active td.sc-ir-booking-city-ledger{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-booking-city-ledger:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-booking-city-ledger svg.sc-ir-booking-city-ledger{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-booking-city-ledger{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-booking-city-ledger,.data-table.sc-ir-booking-city-ledger{height:100%}";
const IrBookingCityLedgerStyle1 = tableCss;

const IrBookingCityLedger = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    cityLedgerService = new utils$1.CityLedgerService();
    /** Booking object; component is hidden when booking.agent is null. */
    booking;
    /** Active language code. */
    language = 'en';
    /** Service-category entries used to populate the transaction form. */
    svcCategories = [];
    isLoading = false;
    folioRows = [];
    drawerOpen = false;
    error = null;
    componentWillLoad() {
        if (this.booking?.agent) {
            this.fetchCityLedger();
        }
    }
    handleBookingChange(newVal, oldVal) {
        const agentChanged = newVal?.agent?.id !== oldVal?.agent?.id;
        const datesChanged = newVal?.from_date !== oldVal?.from_date || newVal?.to_date !== oldVal?.to_date;
        if (newVal?.agent && (agentChanged || datesChanged)) {
            this.fetchCityLedger();
        }
    }
    async fetchCityLedger() {
        if (!this.booking?.agent)
            return;
        this.isLoading = true;
        this.error = null;
        try {
            const result = await this.cityLedgerService.fetchCL({
                AGENCY_ID: this.booking.agent.id,
                START_DATE: this.booking.from_date,
                END_DATE: this.booking.to_date,
                START_ROW: 0,
                END_ROW: 200,
                SEARCH_QUERY: this.booking.booking_nbr,
            });
            let runningBalance = 0;
            this.folioRows = result.My_Cl_tx.map((tx, i) => {
                runningBalance = runningBalance + tx.DEBIT - tx.CREDIT;
                return { _rowId: String(i), ...utils$1.mapClTxToFolioRow(tx), balance: runningBalance };
            });
        }
        catch (err) {
            console.error('[ir-booking-city-ledger] fetchCL failed:', err);
            this.error = 'Failed to load city ledger.';
        }
        finally {
            this.isLoading = false;
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
        return `${calendarData.calendar_data.property?.currency?.symbol}${value.toFixed(2)}`;
    }
    renderTable() {
        if (this.folioRows.length === 0) {
            return index.h("p", { class: "booking-city-ledger__empty" }, "No city ledger entries for this period.");
        }
        return (index.h("div", { class: "table--container booking-city-ledger__table-wrap" }, index.h("table", { class: "table data-table" }, index.h("thead", null, index.h("tr", null, index.h("th", null, "Status"), index.h("th", null, "Date"), index.h("th", null, "Description"), index.h("th", { class: "text-right" }, "Debit"), index.h("th", { class: "text-right" }, "Credit"))), index.h("tbody", null, this.folioRows.map(row => (index.h("tr", { key: row._rowId, class: "ir-table-row" }, index.h("td", null, index.h("wa-tag", { size: "small", variant: row.status.variant }, row.status.label, row.status.id === 'billed' && index.h("wa-icon", { name: "lock" }))), index.h("td", { class: "booking-city-ledger__cell-date" }, moment.hooks(row.serviceDate).format('MMM DD, YYYY')), index.h("td", null, row.description || '—'), index.h("td", { class: "text-right is-debit" }, row.debit ? this.formatAmount(row.debit) : '—'), index.h("td", { class: "text-right is-credit" }, row.credit ? this.formatAmount(row.credit) : '—'))))))));
    }
    render() {
        if (!this.booking?.agent) {
            return index.h(index.Host, null);
        }
        return (index.h(index.Host, null, index.h("wa-card", { class: "booking-city-ledger__card" }, index.h("div", { slot: "header", class: "booking-city-ledger__header-title" }, index.h("p", { class: "font-size-large p-0 m-0" }, " Agent Folio")), index.h("wa-tooltip", { for: "booking-city-ledger-add-btn" }, "Add folio entry"), index.h("ir-custom-button", { slot: "header-actions", id: "booking-city-ledger-add-btn", size: "small", variant: "neutral", appearance: "plain", onClickHandler: () => (this.drawerOpen = true) }, index.h("wa-icon", { name: "plus", style: { fontSize: '1rem' } })), this.isLoading ? (index.h("div", { class: "booking-city-ledger__spinner-wrap" }, index.h("ir-spinner", null))) : this.error ? (index.h("p", { class: "booking-city-ledger__error" }, this.error)) : (this.renderTable())), index.h("ir-city-ledger-transaction-drawer", { open: this.drawerOpen, drawerLabel: "New Folio Entry", agent: this.booking.agent, booking: this.booking, serviceCategoryOptions: this.serviceCategoryOptions, bookingOptions: this.bookingOptions, onCloseDrawer: () => (this.drawerOpen = false), onTransactionSaved: async () => {
                this.drawerOpen = false;
                await this.fetchCityLedger();
            } })));
    }
    static get watchers() { return {
        "booking": ["handleBookingChange"]
    }; }
};
IrBookingCityLedger.style = IrBookingCityLedgerStyle0 + IrBookingCityLedgerStyle1;

const irBookingDetailsCss = ".sc-ir-booking-details-h{overflow-x:hidden;--ir-dialog-max-width:20rem;text-align:start;padding:var(--wa-space-l);position:relative;height:100%}.sc-ir-booking-details-h *.sc-ir-booking-details{box-sizing:border-box}.font-medium.sc-ir-booking-details{font-weight:600}.sc-ir-booking-details-h th.sc-ir-booking-details{font-weight:600}.booking-details__booking-info.sc-ir-booking-details{display:grid;padding:var(--wa-space-m);gap:var(--wa-space-l)}.booking-details__info-column.sc-ir-booking-details{display:flex;flex-direction:column;gap:var(--wa-space-l)}@media (min-width: 890px){.booking-details__info-column.sc-ir-booking-details{min-width:0}.booking-details__booking-info.sc-ir-booking-details{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 1024px){.booking-details__booking-info.sc-ir-booking-details{gap:var(--wa-space-xl)}}.h-28.sc-ir-booking-details{height:2rem}.mx-01.sc-ir-booking-details{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}.date-margin.sc-ir-booking-details{margin-right:5px}.pickup-margin.sc-ir-booking-details{margin-bottom:7px !important}.header-date.sc-ir-booking-details{padding-left:5px !important}.pointer.sc-ir-booking-details{cursor:pointer}.sc-ir-booking-details:root{--sidebar-width:50rem}.loading-container.sc-ir-booking-details{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.sm-padding-right.sc-ir-booking-details{padding-right:0.2rem}.sm-padding-left.sc-ir-booking-details{padding-left:0.2rem}.sm-padding-top.sc-ir-booking-details{padding-top:0.2rem}.sm-padding-bottom.sc-ir-booking-details{padding-bottom:0.2rem}.info-notes.sc-ir-booking-details{list-style:none;padding-left:0}.light-blue-bg.sc-ir-booking-details{background-color:#acecff;padding:0.2rem 0.3rem}.iframeHeight.sc-ir-booking-details{height:17.5rem}.dialog-title.sc-ir-booking-details{width:fit-content}";
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
    token = new Token.Token();
    arrivalTime;
    svcCategories;
    printingBaseUrl = 'https://gateway.igloorooms.com/PrintBooking/%1/printing?id=%2';
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
            const booking$1 = await this.bookingService.getExposedBooking(this.bookingNumber, this.language);
            this.booking = { ...booking$1 };
            this.splitIndex = booking.buildSplitIndex(this.booking.rooms);
            this.bookingChanged.emit(this.booking);
        }
        catch (error) {
            console.log(error);
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
    render() {
        if (!this.booking) {
            return (index.h("div", { class: 'loading-container' }, index.h("ir-spinner", null)));
        }
        return (index.h(index.Host, null, !this.is_from_front_desk && (index.h(index.Fragment, null, index.h("ir-toast", { style: { height: '0' } }), index.h("ir-interceptor", { style: { height: '0' } }))), index.h("ir-booking-header", { booking: this.booking, hasCloseButton: this.hasCloseButton, hasDelete: this.hasDelete, hasMenu: this.hasMenu, hasPrint: this.hasPrint, hasReceipt: calendarData.calendar_data.property.is_frontdesk_enabled, hasEmail: ['001', '002'].includes(this.booking?.status?.code) }), index.h("div", { class: "booking-details__booking-info" }, index.h("div", { class: "booking-details__info-column" }, index.h("ir-reservation-information", { arrivalTime: this.arrivalTime, countries: this.countries, booking: this.booking }), index.h("ir-booking-rooms", { booking: this.booking, propertyId: this.property_id, language: this.language, departureTime: this.departureTime, bedPreference: this.bedPreference, legendData: this.calendarData.legendData, roomsInfo: this.calendarData.roomsInfo, hasRoomAdd: this.hasRoomAdd, hasRoomEdit: this.hasRoomEdit, hasRoomDelete: this.hasRoomDelete, splitIndex: this.splitIndex, onRoomDeleteFinished: this.handleDeleteFinish }), index.h("ir-pickup-view", { booking: this.booking }), index.h("section", null, index.h("ir-extra-services", { language: this.language, svcCategories: this.svcCategories, booking: this.booking }))), index.h("ir-payment-details", { class: "booking-details__info-column", propertyId: this.property_id, paymentEntries: this.paymentEntries, paymentActions: this.paymentActions, booking: this.booking, svcCategories: this.svcCategories })), index.h("ir-dialog", { label: "Send Email", onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalRef.closeModal();
                this.modalState = null;
            }, ref: el => (this.modalRef = el) }, index.h("p", null, this.modalState?.message), index.h("div", { slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { loading: irInterceptor_store.isRequestPending('/Send_Booking_Confirmation_Email'), onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleModalConfirm();
            }, size: "medium", variant: "brand" }, locales_store.locales.entries.Lcz_Confirm))), index.h("ir-room-guests", { open: this.sidebarState === 'room-guest', countries: this.countries, language: this.language, identifier: this.sidebarPayload?.identifier, bookingNumber: this.booking.booking_nbr, roomName: this.sidebarPayload?.roomName, totalGuests: this.sidebarPayload?.totalGuests, sharedPersons: this.sidebarPayload?.sharing_persons, slot: "sidebar-body", checkIn: this.sidebarPayload?.checkin, onCloseModal: () => (this.sidebarState = null) }), index.h("ir-extra-service-config", { open: this.sidebarState === 'extra_service', service: this.selectedService, svcCategories: this.svcCategories, language: this.language, booking: this.booking, slot: "sidebar-body", onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.sidebarState = null;
                if (this.selectedService) {
                    this.selectedService = null;
                }
            } }), index.h("ir-pickup", { booking: this.booking, open: this.sidebarState === 'pickup', bookingDates: { from: this.booking.from_date, to: this.booking.to_date }, defaultPickupData: this.booking.pickup_info, bookingNumber: this.booking.booking_nbr, numberOfPersons: this.booking.occupancy.adult_nbr + this.booking.occupancy.children_nbr, onCloseModal: () => {
                this.sidebarState = null;
            } }), index.h("ir-billing-drawer", { open: this.sidebarState === 'invoice', onBillingClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.sidebarState = null;
            }, booking: this.booking }), index.h("ir-guest-info-drawer", { onGuestInfoDrawerClosed: () => {
                this.sidebarState = null;
            }, booking_nbr: this.bookingNumber, email: this.booking?.guest.email, language: this.language, open: this.sidebarState === 'guest' }), index.h("ir-payment-folio", { booking: this.booking, style: { height: 'auto' }, bookingNumber: this.booking.booking_nbr, paymentEntries: this.paymentEntries, payment: this.sidebarPayload?.payment, mode: this.sidebarPayload?.mode, ref: el => (this.paymentFolioRef = el), onCloseModal: () => (this.sidebarState = null) }), index.h("ir-booking-editor-drawer", { roomTypeIds: this.bookingItem?.roomsInfo?.map(r => r.id), onBookingEditorClosed: this.handleCloseBookingWindow.bind(this), unitId: this.bookingItem?.PR_ID, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, booking: this.booking, ticket: this.ticket, open: this.bookingItem !== null, roomIdentifier: this.bookingItem?.IDENTIFIER, language: this.language, propertyid: this.propertyid, checkIn: this.bookingItem?.FROM_DATE, checkOut: this.bookingItem?.TO_DATE })));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrBookingDetails.style = IrBookingDetailsStyle0;

const RoomsGuestsSchema = index$1.z.array(index$1.z
    .object({
    first_name: index$1.z.string().nonempty(),
    last_name: index$1.z.string().nonempty(),
    bed_preference: index$1.z.string().optional().nullable(),
    requires_bed_preference: index$1.z.boolean().nullable(),
})
    .superRefine((data, ctx) => {
    if (data.requires_bed_preference && !data.bed_preference) {
        ctx.addIssue({
            path: ['bed_preference'],
            message: 'Bed preference is required',
            code: index$1.z.ZodIssueCode.custom,
        });
    }
}));
const BookedByGuestSchema = index$1.z.object({
    firstName: index$1.z.string().nonempty(),
    lastName: index$1.z.string().nonempty(),
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
                    const newRooms = await generateNewRooms(null, check_in);
                    const { bookedByGuest } = booking_service.booking_store;
                    const isAgent = sourceOption.type === 'TRAVEL_AGENCY';
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
        return (index.h("ir-drawer", { key: '54b71876e1d3f4131a51df8ae0cc7026c7f16520', onDrawerHide: async (event) => {
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
            }, class: "booking-editor__drawer", label: this.drawerLabel, open: this.open }, this.open && this.ticket && (index.h("ir-booking-editor", { key: '730075efd6df237a33999613162cebc0aeec968f', onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail.cause;
            }, onAdjustBlockedUnit: event => this.handleAdjustBlockedUnitEvent(event), unitId: this.unitId, propertyId: this.propertyid, roomTypeIds: this.roomTypeIds, onResetBookingEvt: async () => {
                this.blockedUnit = undefined;
                this.initializeBlockedUnitState(undefined);
                await this.closeDrawer();
            }, step: this.step, blockedUnit: this.blockedUnit, language: this.language, booking: this.booking, mode: this.mode, checkIn: this.checkIn, checkOut: this.checkOut, identifier: this.roomIdentifier })), index.h("div", { key: '30ec758bdbb310c9c01df0433d10211d773faba9', slot: "footer", class: "ir__drawer-footer" }, this.renderFooter())));
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
    guests;
    totalCost = 0;
    assignee = 'guest';
    doReservation;
    bookingService = new booking_service.BookingService();
    bookingEditorService;
    totalRooms = 0;
    pickerEl;
    async componentWillLoad() {
        this.totalRooms = booking_service.calculateTotalRooms();
        this.totalCost = this.totalRooms > 1 ? await booking_service.getBookingTotalPrice() : 0;
        this.bookingEditorService = new IRBookingEditorService(this.mode);
        if (this.bookingEditorService.isEventType(['ADD_ROOM', 'SPLIT_BOOKING']) && functions.isAgentMode(this.booking)) {
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
        return (index.h("form", { key: '0d2101d06ad50f80e7fa9970ff6e179096996a9d', class: "booking-editor__guest-form", id: "new_booking_form", autoComplete: "off", onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                this.doReservation.emit(submitter?.value);
            } }, index.h("div", { key: '0be680efbc36b0940404bf8706ab07ea0f70d960', class: "booking-editor__header" }, index.h("ir-date-view", { key: '40c5b2e3807d03e924432d0932abfa06608ecbfa', class: "booking-editor__dates mr-1 flex-fill font-weight-bold font-medium-1", from_date: dates.checkIn, to_date: dates.checkOut, dateOption: "DD MMM YYYY" }), this.totalRooms > 1 && (index.h("div", { key: 'b9e4254b03a8f335332d18e6d1d1236f495185f0', class: "booking-editor__total mt-1 mt-md-0 text-right" }, index.h("span", { key: 'e8ed3eb686e83eb6b936062f066a3e6bacbd0e61', class: "booking-editor__total-label" }, locales_store.locales.entries.Lcz_TotalPrice), ' ', index.h("span", { key: '9f5d5ed60f721cfad05123dd2ce5179fe88204d8', class: "booking-editor__total-amount font-weight-bold font-medium-1" }, utils.formatAmount(calendarData.calendar_data.property.currency.symbol, this.totalCost))))), Object.values(booking_service.booking_store.ratePlanSelections).map(val => Object.values(val).map(ratePlan => {
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
        })), this.bookingEditorService.isEventType(['BAR_BOOKING', 'PLUS_BOOKING']) && (index.h("section", { key: '6dcdbc04c686f575823417b7c384f483bc3cff84', class: 'mt-2' }, index.h("div", { key: '289f5817f7636a9f04ef0c58b47a34235d0fafb1', class: "booking-editor__booked-by booking-editor__booked-by-header" }, index.h("h4", { key: '70d8bc0ace0fa4f6425e4121703c3bdeddc31fac', class: "booking-editor__heading booking-editor__booked-by-title" }, "Booked by"), booking_service.booking_store.bookingDraft?.agent ? (index.h("span", null, booking_service.booking_store.bookingDraft?.agent.name)) : (index.h(index.Fragment, null, index.h("ir-picker", { class: "booking-editor__booked-by-picker", appearance: "filled",
            // placeholder="Search customer by email, name or company name"
            placeholder: "Search customer by email or name", withClear: true, "onText-change": event => this.fetchGuests(event.detail), debounce: 500, loading: irInterceptor_store.isRequestPending('/Fetch_Exposed_Guests'), mode: "select-async", ref: el => (this.pickerEl = el), "onCombobox-select": this.handleComboboxSelect.bind(this) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (index.h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        })), booking_service.booking_store.bookedByGuest.id !== -1 && (index.h("ir-custom-button", { onClickHandler: () => {
                booking_service.updateBookedByGuest(booking_service.bookedByGuestBaseData);
                this.pickerEl.clearInput();
            }, variant: "brand" }, "Clear user"))))), index.h("ir-booking-editor-guest-form", { key: '4809c8caa816a4181214e59785832957114bbc91' }))), this.bookingEditorService.isEventType(['SPLIT_BOOKING', 'ADD_ROOM']) && functions.isAgentMode(this.booking) && (index.h("ir-service-assignee-select", { key: '001f6dbd8cb4a81429793c0010197a4cb3a8e8ae', style: { maxWidth: '500px' }, agent: this.booking.agent, assigneeType: this.assignee, onAssignmentChange: e => {
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
                mask: index$2.IMask.MaskedRange,
                from: 1,
                to: 12,
                maxLength: 2,
            },
            YY: {
                mask: index$2.IMask.MaskedRange,
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
        return (index.h(index.Host, { key: '5a6930ea1a3fffc3c8ec8c6d7146aed765a23234' }, index.h("section", { key: 'c5e0c02e4eb3af6c9e7b2e5fde5e1073c5b4ce56', class: "booking-editor__form-control" }, index.h("ir-input", { key: '395f3e7cfb6d11cef04772bf25579e83d07215d0', label: "Email address", "onText-change": e => booking_service.updateBookedByGuest({ email: e.detail }), mask: 'email', value: bookedByGuest.email, defaultValue: bookedByGuest.email, placeholder: "Email (leave empty if not available)" }), index.h("div", { key: '0a53758fc12e24861d1ecace9439eec37fefde84', class: "booking-editor__guest-name-group", id: "booking-editor-guest-name-group" }, index.h("ir-validator", { key: '06dc7708e36bcf578c278ef68420b6861659e84f', class: "booking-editor__guest-input-validator", value: bookedByGuest.firstName, schema: BookedByGuestSchema.shape.firstName }, index.h("ir-input", { key: 'd53bbef2e84265b95043befe750eb4cea5ddbdad', id: "booking-editor-guest-first-name", class: "booking-editor__guest-input --first-name",
            // label="Name"
            value: bookedByGuest.firstName, defaultValue: bookedByGuest.firstName, placeholder: "First name", autocomplete: "off", "onText-change": e => booking_service.updateBookedByGuest({ firstName: e.detail }) }, index.h("p", { key: '41f03c907062e11f1e87b0273315c953c862d0a2', style: { margin: '0', marginBottom: '0.5rem' }, slot: "label" }, index.h("span", { key: '4f784eb0b2b76da40bd79efcb685a173d19f64b6', class: "booking-editor__guest-input-label --first-name-pc-label" }, "Name"), index.h("span", { key: '3764d48b6ebedad88e2c19144415b557683adfe1', class: "booking-editor__guest-input-label --first-name-mobile-label" }, "First name")))), index.h("ir-validator", { key: '65cef517bde28679642895166652560bbf9a27cf', class: "booking-editor__guest-input-validator", value: bookedByGuest.lastName, schema: BookedByGuestSchema.shape.lastName }, index.h("ir-input", { key: '6eaab304c2ac5a2088045ffd8b6e36c2c8b323c3', id: "booking-editor-guest-last-name", class: "booking-editor__guest-input --last-name", label: "Last name", "onText-change": e => booking_service.updateBookedByGuest({ lastName: e.detail }), value: bookedByGuest.lastName, defaultValue: bookedByGuest.lastName, placeholder: "Last name", autocomplete: "off" }))), booking_service.booking_store.bookingDraft.agent ? (index.h("ir-input", { label: "Booking code", placeholder: "", value: bookedByGuest.bookingCode, defaultValue: bookedByGuest.bookingCode, "onText-change": e => booking_service.updateBookedByGuest({ bookingCode: e.detail }) })) : (index.h("ir-input", { label: "Company name", placeholder: "Company name", value: bookedByGuest.company, defaultValue: bookedByGuest.company, "onText-change": e => booking_service.updateBookedByGuest({ company: e.detail }) })), index.h("ir-country-picker", { key: '51e15709100f3d8eba73530ba5aa9bc4bb35d3b4', label: locales_store.locales.entries.Lcz_Country, variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.updateCountry(e), countries: selects.countries, country: selects.countries.find(c => c.id.toString() === bookedByGuest.countryId?.toString()) }), index.h("ir-mobile-input", { key: '4ef906fa7d12662f6f70f18e5ddc7b24a36815c5', size: "small", "onMobile-input-change": e => {
                booking_service.updateBookedByGuest({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => booking_service.updateBookedByGuest({ phone_prefix: e.detail.phone_prefix }), value: bookedByGuest.mobile, countryCode: selects.countries.find(c => c.phone_prefix === bookedByGuest.phone_prefix)?.code, countries: selects.countries }), index.h("wa-select", { key: '28c23d6c0061e83d0a3549d67c18b2a0e66cfeff', size: "small", label: locales_store.locales.entries.Lcz_YourArrivalTime, "data-testid": "arrival_time", id: v4.v4(), defaultValue: selects.arrivalTime[0].CODE_NAME, value: bookedByGuest.selectedArrivalTime, onchange: event => booking_service.updateBookedByGuest({ selectedArrivalTime: event.target.value }) }, selects.arrivalTime.map(time => (index.h("wa-option", { value: time.CODE_NAME, selected: bookedByGuest.selectedArrivalTime === time.CODE_NAME }, time.CODE_VALUE_EN))))), index.h("section", { key: '5f901e236e3e566cceea6fc59515342ed92d8488', class: 'booking-editor__form-control' }, index.h("wa-textarea", { key: '90360a67816e093cc5722f29c8511161b537f56f', onchange: event => booking_service.updateBookedByGuest({ note: event.target.value }), size: "small", value: bookedByGuest.note, defaultValue: bookedByGuest.note, label: locales_store.locales.entries.Lcz_AnyMessageForUs, rows: 3 }), (!agent || agent?.payment_mode?.code === '002') && (index.h(index.Fragment, { key: '1d5de65dcfb1895da9605b4f6ea99060eb60335f' }, this.paymentMethods.length > 1 && (index.h("wa-select", { key: '94cc1bd827afbd01976ca737736efc84af982bc7', label: 'Payment Method', size: "small", defaultValue: booking_service.booking_store?.selectedPaymentMethod?.code ?? this.paymentMethods[0].code, value: booking_service.booking_store?.selectedPaymentMethod?.code, onchange: e => booking_service.modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (index.h("wa-option", { value: p.code }, p.description))))), booking_service.booking_store.selectedPaymentMethod?.code === '001' && (index.h(index.Fragment, { key: '565fb047562e4c4b2bb4147def760987e93ab3bb' }, index.h("ir-input", { key: 'd751642d5dfdec291d168cc9d42185fe9e022365', value: bookedByGuest.cardNumber, defaultValue: bookedByGuest.cardNumber, "onText-change": e => booking_service.updateBookedByGuest({ cardNumber: e.detail.trim() }), label: locales_store.locales.entries.Lcz_CardNumber }), index.h("ir-input", { key: '2701dc073282f3eeefa626d07e44f2638767c932', value: bookedByGuest.cardHolderName, defaultValue: bookedByGuest.cardHolderName, "onText-change": e => booking_service.updateBookedByGuest({ cardHolderName: e.detail.trim() }), label: locales_store.locales.entries.Lcz_CardHolderName }), index.h("ir-input", { key: '78c8bb766e1a7c355a71ec8469981aa4d1c341f7', "onText-change": e => {
                const [month, year] = e.detail.split('/');
                booking_service.updateBookedByGuest({
                    expiryMonth: month,
                    expiryYear: year,
                });
            }, value: this.expiryDate, mask: this.expiryDateMask, label: locales_store.locales.entries.Lcz_ExpiryDate }))), booking_service.booking_store.selectedPaymentMethod?.code === '005' && (index.h(index.Fragment, { key: 'a37abc6b4109faa9d991ac51ff8457f46b3bb209' }, index.h("style", { key: '7d8c56244720715d5b93b9983a9b6e9c17d44094' }, `p{
              margin:0;
              padding:0}`), index.h("div", { key: '295f3fcafdaffc21858c290a91e664e87c9eef70', class: "booking-editor__payment-info-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description }))), index.h("wa-checkbox", { key: '2ac854d7427eab805d151c69e709e8a46ed6e76e', defaultChecked: bookedByGuest.emailGuest, checked: bookedByGuest.emailGuest, onchange: event => booking_service.updateBookedByGuest({ emailGuest: event.target.checked }) }, locales_store.locales.entries.Lcz_EmailTheGuest))))));
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
    adultsSchema = index$1.z.coerce.number().min(1);
    bookingEditorService = new IRBookingEditorService();
    BookedByGuestPickerSchema = index$1.z
        .object({
        firstName: index$1.z.string(),
        // lastName: z.string(),
    })
        .superRefine((data, ctx) => {
        if (!data.firstName) {
            ctx.addIssue({
                path: ['firstName'],
                code: index$1.z.ZodIssueCode.custom,
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
        this.datesSchema = index$1.z
            .object({
            checkIn: index$1.z.any(),
            checkOut: index$1.z.any(),
        })
            .superRefine((data, ctx) => {
            // ─────────────────────────────
            // checkIn validations
            // ─────────────────────────────
            if (!moment.hooks.isMoment(data.checkIn)) {
                ctx.addIssue({
                    path: ['checkIn'],
                    code: index$1.z.ZodIssueCode.custom,
                    message: 'Check-in date is required',
                });
            }
            if (moment.hooks.isMoment(data.checkIn) && this.bookingEditorService.isEventType(['SPLIT_BOOKING', 'ADD_ROOM']) && !data.checkIn.isSameOrBefore(this.booking.to_date)) {
                ctx.addIssue({
                    path: ['checkIn'],
                    code: index$1.z.ZodIssueCode.custom,
                    message: `${locales_store.locales.entries.Lcz_CheckInDateShouldBeMAx.replace('%1', moment.hooks(this.booking.from_date, 'YYYY-MM-DD').format('ddd, DD MMM YYYY')).replace('%2', moment.hooks(this.booking.to_date, 'YYYY-MM-DD').format('ddd, DD MMM YYYY'))}  `,
                });
            }
            // ─────────────────────────────
            // checkOut validations
            // ─────────────────────────────
            if (!moment.hooks.isMoment(data.checkOut)) {
                ctx.addIssue({
                    path: ['checkOut'],
                    code: index$1.z.ZodIssueCode.custom,
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
        return (index.h(index.Host, { key: '809869828ca104c33547a084ba217327678cf4a2' }, index.h("form", { key: 'e4cefefaf285c2b3ffbcdbd07e35f73388f8ebbb', onSubmit: this.handleSubmit.bind(this) }, this.bookingEditorService.isEventType('SPLIT_BOOKING') && (index.h("ir-validator", { key: 'c4265e16cb2c03b448d45af068809f55cb2a4f3c', value: booking_service.booking_store.bookedByGuest, class: "booking-editor-header__booking-picker-validator", showErrorMessage: true, schema: this.BookedByGuestPickerSchema }, index.h("ir-picker", { key: '3b7b817e3984dc72d3288517d82a50f4bc8a192e', withClear: true, mode: "select-async", class: "booking-editor-header__booking-picker", debounce: 300, ref: el => (this.pickerRef = el), label: `${locales_store.locales.entries.Lcz_Tobooking}#`,
            // defaultValue={Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : ''}
            // value={Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : ''}
            placeholder: locales_store.locales.entries.Lcz_BookingNumber, loading: this._isLoading, "onText-change": e => this.handleBookingSearch(e.detail), "onCombobox-select": this.selectGuest.bind(this) }, this.bookings.map(b => {
            const label = `${b.booking_nbr} ${b.guest.first_name} ${b.guest.last_name}`;
            return (index.h("ir-picker-item", { value: b.booking_nbr?.toString(), label: label }, label));
        })))), index.h("div", { key: '96ba8fea54120f101241f0b4bf9c4aaac9fa8500', class: "booking-editor-header__container" }, !this.bookingEditorService.isEventType(['EDIT_BOOKING', 'ADD_ROOM', 'SPLIT_BOOKING']) && (index.h("wa-select", { key: 'ce85e5581d0326a26f292ea691af9e305e4a15fb', size: "small", placeholder: locales_store.locales.entries.Lcz_Source, value: booking_service.booking_store.bookingDraft.source?.id?.toString(), defaultValue: booking_service.booking_store.bookingDraft.source?.id, "onwa-hide": this.stopEvent.bind(this), onchange: this.handleSourceChange.bind(this) }, sources.map(option => (option.type === 'LABEL' ? index.h("small", null, option.description) : index.h("wa-option", { value: option.id?.toString() }, option.description))))), index.h("ir-validator", { key: '51daa59dd2a2324a1452676c0105f27b42e5b797', class: "booking-editor__date-validator", showErrorMessage: true, value: booking_service.booking_store.bookingDraft.dates, schema: this.datesSchema, style: { position: 'relative' } }, index.h("ir-date-range", { key: 'ee0e092ae0ecdc715f7263213057418b764273e9', class: "booking-editor__date-range", defaultData: {
                fromDate: checkIn?.format('YYYY-MM-DD') ?? '',
                toDate: checkOut?.format('YYYY-MM-DD') ?? '',
            }, variant: "booking", withDateDifference: true, minDate: this.minDate, maxDate: this.maxDate, onDateRangeChange: this.handleDateRangeChange.bind(this) })), !this.bookingEditorService.isEventType('EDIT_BOOKING') && (index.h(index.Fragment, { key: 'b7a1057626c6f1a3728db0cb6d1eef4a59fc999d' }, index.h("ir-validator", { key: '680b42d6a8fe08b6689b393bfdade55e60cef8f0', value: adults, schema: this.adultsSchema }, index.h("wa-select", { key: 'a44ebddf19cf9dfaeaf4164e64121804241d98b9', class: "booking-editor-header__adults-select", size: "small", placeholder: locales_store.locales.entries.Lcz_AdultsCaption, value: adults?.toString(), defaultValue: adults?.toString(),
            // onwa-hide={this.stopEvent.bind(this)}
            onchange: this.handleAdultsChange.bind(this) }, Array.from({ length: calendarData.calendar_data.property.adult_child_constraints.adult_max_nbr }, (_, i) => i + 1).map(option => (index.h("wa-option", { value: option.toString() }, option))))), calendarData.calendar_data.property.adult_child_constraints.child_max_nbr > 0 && (index.h("wa-select", { key: '12d22fddf81c6416c9f8a843e98f3069f3d21623', class: "booking-editor-header__children-select", size: "small", placeholder: this.childrenSelectPlaceholder, value: children?.toString(), defaultValue: children?.toString(),
            // onwa-hide={this.stopEvent.bind(this)}
            onchange: this.handleChildrenChange.bind(this) }, Array.from({ length: calendarData.calendar_data.property.adult_child_constraints.child_max_nbr }, (_, i) => i + 1).map(option => (index.h("wa-option", { value: option.toString() }, option))))))), index.h("ir-custom-button", { key: 'a8782e6a6eacdb717fbc5dc72bc7e2a7ca2154fc', loading: this.isLoading, type: "submit", variant: "brand" }, "Check")), booking_service.booking_store.roomTypes?.length > 0 && !this.isLoading && (index.h("wa-callout", { key: '9569c8a8c89221050ea604e660ecbc7c0abaa2cf', size: "small", variant: "neutral", appearance: "filled", class: "booking-editor-header__tax_statement" }, calendarData.calendar_data.tax_statement)))));
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
        return (index.h("ir-dialog", { key: 'ccaf23d633220adad4f6b3a26c587cfb061487c9', label: "Private Note", open: this.open, onIrDialogHide: () => {
                this.open = false;
            } }, index.h("wa-textarea", { key: '4ce4bf84483b59244bf1eb0861cd8b69907435e0', size: "small", placeholder: locales_store.locales.entries.Lcz_PrivateNote_MaxChar, defaultValue: this.note, onchange: e => this.setNote(e.target.value), value: this.note }), index.h("div", { key: '86e4c51e6788b810f6146602d91f421b80a2a104', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '38f37f8a0d3992053f4c6a8b9673509d84951bfc', "data-dialog": "close", size: "medium", variant: "neutral", appearance: "filled", onClickHandler: () => this.closeModal.emit(null), class: `flex-fill'}` }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { key: '467ad15768c9674d80a9f3a1310452e19e1f4902', size: "medium", onClickHandler: () => this.savePrivateNote(), variant: "brand", loading: this.isLoading }, locales_store.locales.entries.Lcz_Save))));
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

const irBookingHeaderCss = ".sc-ir-booking-header-h{display:block}.booking-header__row.sc-ir-booking-header{display:flex;flex-direction:column;gap:1rem;padding:0 var(--wa-space-m);flex-wrap:wrap}.booking-header__actions.sc-ir-booking-header{display:flex;align-items:center;flex-wrap:wrap;justify-content:flex-end;gap:0.5rem}.booking-header__label-container.sc-ir-booking-header{display:flex;align-items:center}.booking-header__status-trigger.sc-ir-booking-header{width:100%}.booking-header__status-trigger.sc-ir-booking-header::part(base){justify-content:flex-start}.booking-header__status-trigger.sc-ir-booking-header::part(label){flex:1 1 0%;text-align:start}.booking-header__stretched-btn.sc-ir-booking-header{flex:1 1 0%}.booking-header__label.sc-ir-booking-header{padding:0;margin:0}.booking-header__label-container.sc-ir-booking-header{gap:1rem}.booking-header__info.sc-ir-booking-header,.booking-header__title.sc-ir-booking-header{display:flex;flex-direction:column;gap:1rem}.booking-header__label-number.sc-ir-booking-header{margin:0;padding:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l)}.booking-header__modified.sc-ir-booking-header{padding:0;margin:0;color:var(--wa-color-danger-fill-loud);width:fit-content}.booking-header__channel-number.sc-ir-booking-header{padding:0;margin:0}.booking-header__meta.sc-ir-booking-header{display:flex;align-items:center;gap:1rem;font-size:0.875rem}@media (min-width: 640px){.booking-header__title.sc-ir-booking-header{flex-direction:row;align-items:center}}@media (min-width: 768px){.booking-header__label.sc-ir-booking-header{display:flex;align-items:center;gap:0.5rem}.booking-header__row.sc-ir-booking-header,.booking-header__info.sc-ir-booking-header{flex-direction:row;align-items:center}.booking-header__row.sc-ir-booking-header{justify-content:space-between}}";
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
    invoiceDialogRef;
    bookingService = new booking_service.BookingService();
    cityLedgerService = new utils$1.CityLedgerService();
    alertMessage = `ALERT! Modifying an OTA booking will create a discrepancy between igloorooms and the source. Future guest modifications on the OTA may require manual adjustments of the booking.`;
    modalEl;
    bookingSourceEditor;
    bookingStatus = null;
    currentDialogStatus;
    booking;
    hasReceipt;
    hasPrint;
    hasDelete;
    hasMenu;
    hasCloseButton;
    hasEmail = true;
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
    render() {
        const lastManipulation = this.booking.ota_manipulations ? this.booking.ota_manipulations[this.booking.ota_manipulations.length - 1] : null;
        const showPms = (calendarData.calendar_data.property?.linked_pms || [])?.findIndex(lp => lp?.is_active && lp?.bookings_integration_mode?.code === '001') !== -1;
        return (index.h("div", { key: '02f7030d91f9ad57aa87558240c6d624d781b9a0', class: "booking-header" }, index.h("div", { key: '51db3a76c3cbb8d495763d49d8f208af81ccac62', class: "booking-header__row" }, index.h("div", { key: 'c2471fb50325c256e317ceb2b35f05507bd03f8c', class: "booking-header__info" }, index.h("div", { key: 'b86bc18691e88288667017eb9ed9212551eb3051', class: "booking-header__title" }, index.h("div", { key: '80e812c32c3a0254f43dd347a09a214f6f208fa5', class: "booking-header__label-container" }, this.hasMenu && (index.h(index.Fragment, { key: 'dce569c08cdf89c8a74cd8bc3082515ba1decef4' }, index.h("wa-tooltip", { key: '4a33dbbe6318eac2dea97ef99fabf74623abe1a9', for: "menu" }, "Go back"), index.h("ir-custom-button", { key: '67eeaaf81217d1fdeddc0a4595de3a85418ede76', id: "menu", variant: "neutral", size: "small", appearance: "plain" }, index.h("wa-icon", { key: '08ec9925fe5b991fd67969921770e901ef030b64', name: "arrow-left", style: { fontSize: '1.2rem' }, label: "Go back" })))), index.h("wa-avatar", { key: 'c21a84feb83c76ea2bf5c4d05cfce6a5eed979cd', shape: "circle", initials: this.initials, image: this.avatarImage, loading: "lazy" }), index.h("div", { key: '17d90c71fc2737ccfaf74d8c065d0d41b70d9549', class: "booking-header__identity" }, index.h("div", { key: '61a0b729ec2cdf063ccaef56f4c069c6ff7f09e0', class: 'booking-header__label' }, index.h("h4", { key: 'c618d508b478439ff4b2ea71b7e1807b026954f7', class: "booking-header__label-number" }, `${locales_store.locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`)), index.h("div", { key: '5e325e6421f1a268a022d37b08cb2377c6111b06', class: "booking-header__meta" }, index.h("p", { key: '70c3f04205180c4a38a63c35ae4ed34ebd2ec872', class: "booking-header__channel-number" }, this.booking?.agent ? (index.h("span", null, "Agent:", ' ', index.h("p", { class: 'truncate p-0 m-0', style: { maxWidth: '100px', display: 'inline-flex' } }, this.booking.agent.name))) : (this.booking.origin.Label)), !this.booking.is_direct && index.h("p", { key: 'd97415d36e07f39b74d5f6564e47e15abb7a5df2', class: "booking-header__channel-number" }, this.booking.channel_booking_nbr), index.h("ir-custom-button", { key: '209b2e170fd7da788fbf212a80abf207d3987246', link: true, onClickHandler: () => this.bookingSourceEditor.openDialog() }, "Change source"), lastManipulation && (index.h(index.Fragment, { key: '1aff689deb2d37c1a6a12c9e83a96c5e18562b83' }, index.h("p", { key: '1ba6944132e3ec8e93462c3d77db11ff40b48552', id: `booking-${this.booking.booking_nbr}-modified`, class: "booking-header__modified" }, "Modified"), index.h("wa-tooltip", { key: 'ac5a0d4eff852d1899f163488c1ad8cc04599fba', for: `booking-${this.booking.booking_nbr}-modified` }, index.h("div", { key: '6988d509b42218adac3b1525e5593f03ecbeadd0' }, index.h("p", { key: '22d9ec26a1b95506ddbbb90d4f1657d94b85349f', class: "m-0" }, "Modified by ", lastManipulation?.user, " at ", lastManipulation?.date, " ", lastManipulation?.hour, ":", lastManipulation?.minute, "."), index.h("p", { key: 'd5d7ac08804fff902f179fbb209787fb18c46583', class: "m-0" }, this.alertMessage)))))))))), index.h("div", { key: '314c9d7fc9cfc01dd7b5b0df9a34b84090856548', class: "booking-header__actions" }, index.h("div", { key: '656b873597742ee7bfec3d8b996688eab9c30671' }, this.booking.allowed_actions.length > 0 && this.booking.is_editable ? (index.h("wa-dropdown", { "onwa-hide": e => {
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
            appearance: 'outlined', size: "small", variant: "brand", class: "booking-header__status-trigger" }, index.h("ir-booking-status-tag", { slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), index.h("span", null, "Update status")), this.booking.allowed_actions.map(option => (index.h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))) : (index.h("ir-booking-status-tag", { status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }))), functions.isAgentMode(this.booking) && (index.h(index.Fragment, { key: '54c54231e7df95eb9131a36a092b90e42b3f5ff0' }, index.h("ir-custom-button", { key: 'df712d7ed704f8d17f4248d4d61c3dd1ca2b28d0', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.cityLedgerService.syncBookingToCityLedger({
                    booking_nbr: +this.booking.booking_nbr,
                    is_force_post: true,
                });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "warning" }, "Force city ledger"), index.h("ir-custom-button", { key: '81151e16e36d4756a6aa3bc41dc64664ec7698cc', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.invoiceDialogRef.openModal();
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "brand" }, "Invoice to agent"))), index.h("ir-custom-button", { key: '82fc35e7d4f33a42723c169807d9430a6d534a96', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "brand" }, "Logs"), showPms && (index.h("ir-custom-button", { key: '7c0352f986abdad1e82c53ce453ccaf5a1cd2f19', class: "booking-header__stretched-btn", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "PMS")), this.hasReceipt && (index.h(index.Fragment, { key: '5a5ee48fb7a0e511ce04bbf39a759304ff4a08f4' }, index.h("ir-custom-button", { key: '65036ace31b5878835d112bf528ac84c1ee9d2d8', class: "booking-header__stretched-btn", id: "invoice", variant: "brand", size: "small", appearance: "outlined" }, "Billing"))), this.hasPrint && (index.h(index.Fragment, { key: '5ce235da058b30dd37846103f5df4649e2109cde' }, index.h("wa-tooltip", { key: '0c4c3a90ef8cf0da8cf4d923b5ee3f9ff48f35a8', for: "print" }, "Print booking"), index.h("ir-custom-button", { key: '57f88817c7324ad98747bfb99593e34324db67b8', id: "print", variant: "brand", size: "small", appearance: "outlined" }, index.h("wa-icon", { key: 'b06490010553c091356f1cd08074578c18ed1eb0', label: "Print", name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (index.h(index.Fragment, { key: '7aa3c17e8ff374ab5c5098fe082f7b749a8e9202' }, index.h("wa-tooltip", { key: '22b984957b115758227425794c68661e40d6146d', for: "email" }, "Email this booking to guest"), index.h("ir-custom-button", { key: '26a352d99a9f1f2f5115aaf3d371b7602e58b148', id: "email", variant: "brand", size: "small", appearance: "outlined" }, index.h("wa-icon", { key: 'd822ac1bb389e7691172138ca98ee7f6d6aa8d27', name: "envelope", style: { fontSize: '1.2rem' }, label: "Email this booking" })))), this.hasDelete && (index.h(index.Fragment, { key: 'cdf7198d912275940d4ae88a56e5210fdc165c1a' }, index.h("wa-tooltip", { key: '0c7fdc65d9bd42afcdfc11f5ee5178ac3553ed2d', for: "book-delete" }, "Delete this booking"), index.h("ir-custom-button", { key: 'f19e8ca56a5feae79819e6929b25a29f1c5084a6', id: "book-delete", variant: "danger", size: "small", appearance: "plain" }, index.h("wa-icon", { key: '41075ceadeaa35b8727492e85a2bc0e7651bffd5', name: "envelope", style: { fontSize: '1.2rem' }, label: "Delete this booking" })))), this.hasCloseButton && (index.h("ir-custom-button", { key: '184d20b06af48c3dd5bd334332d037baacccbc79', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "small", appearance: "plain" }, index.h("wa-icon", { key: 'c9a9256b7cf6dfc922d111ee3706704800b2e1d4', name: "xmark", style: { fontSize: '1.2rem' }, label: "Go back" }))))), index.h("ir-dialog", { key: 'b0a7aff27a086faa751a136541e4d07a1b6986bf', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales_store.locales.entries.Lcz_PMS_Logs : locales_store.locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), index.h("ir-dialog", { key: '0ada03c68287371cf1aad331fe1316c5e0e4df95', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, index.h("p", { key: '31f833f2e52f67bb4afd309d03e7f16eb30772ca' }, this.booking.is_direct ? 'Are you sure you want to update this booking status?' : locales_store.locales.entries.Lcz_OTA_Modification_Alter), index.h("div", { key: '3b2cf9ca7ef39e2b63ecb1aaeffe2acc302c18f3', class: "ir-dialog__footer", slot: "footer" }, index.h("ir-custom-button", { key: 'ca8213c397dc6fd53f52026d3021fefb46a8a30f', "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales_store.locales?.entries?.Lcz_Cancel), index.h("ir-custom-button", { key: '4b4fb69550ef231c402d6f70a65e9ff923e2bef2', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "medium", variant: "brand", loading: irInterceptor_store.isRequestPending('/Change_Exposed_Booking_Status') }, locales_store.locales?.entries?.Lcz_Confirm))), index.h("ir-booking-source-editor-dialog", { key: 'd58652d8791a48d86d9d33cd1c7f895285299f47', booking: this.booking, ref: el => (this.bookingSourceEditor = el) }), index.h("ir-cl-invoice-dialog", { key: '6f871bb8d16e9a7742bbeea58578b816999515de', mode: "booking", agentId: this.booking.agent?.id, bookingNbr: +this.booking.booking_nbr, startDate: this.booking.from_date, endDate: this.booking.to_date, currencyId: calendarData.calendar_data.property.currency.id, ref: el => (this.invoiceDialogRef = el) })));
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
        return (index.h("ir-room", { key: room.identifier, room: room, property_id: this.propertyId, language: this.language, departureTime: this.departureTime, bedPreferences: this.bedPreference, isEditable: this.booking.is_editable, legendData: this.legendData, roomsInfo: this.roomsInfo, myRoomTypeFoodCat: room.roomtype.name, mealCodeName: room.rateplan.short_name, includeDepartureTime: includeDepartureTime, currency: this.booking.currency.symbol, hasRoomEdit: this.hasRoomEdit && this.booking.status.code !== '003' && this.booking.is_direct, hasRoomDelete: this.hasRoomDelete && this.booking.status.code !== '003' && this.booking.is_direct, hasCheckIn: showCheckin, hasCheckOut: showCheckout, booking: this.booking, bookingIndex: bookingIndex, onDeleteFinished: (e) => this.roomDeleteFinished.emit(e.detail) }));
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
        if (!functions.isAgentMode(this.booking)) {
            return this.renderRoomPool(rooms);
        }
        const guestRooms = rooms.filter(r => r.agent === null || r.agent === undefined);
        const agentRooms = rooms.filter(r => r.agent !== null && r.agent !== undefined);
        const agentName = this.booking.agent?.name ?? 'Agent';
        return (index.h(index.Fragment, null, index.h("p", { class: "service-group__label" }, "Guest", index.h("span", null, "Folio")), index.h("div", { class: "service-group service-group--guest" }, index.h("div", { class: "service-group__body" }, guestRooms.length === 0 ? index.h("p", { class: "service-group__empty" }, "No guest rooms") : this.renderRoomPool(guestRooms))), index.h("wa-divider", null), index.h("p", { class: "service-group__label --agent" }, agentName, index.h("span", null, "Folio")), index.h("div", { class: "service-group service-group--agent" }, index.h("div", { class: "service-group__body" }, agentRooms.length === 0 ? index.h("p", { class: "service-group__empty" }, "No agent rooms") : this.renderRoomPool(agentRooms)))));
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
        return (index.h("ir-dialog", { key: '53ce0c60f95c743365e64b1a733e77701dd84fc9', label: "Change Booking Source", onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, open: this.open }, this.open && (index.h("ir-booking-source-editor-form", { key: '237bbe1a7431d01626199e7faef1012aa5d8eb8f', booking: this.booking, onBookingSourceSaved: () => {
                this.closeDialog();
                setTimeout(() => this.resetBookingEvt.emit(null), 100);
            }, onLoadingChange: e => (this.isLoading = e.detail) })), index.h("div", { key: 'd1a7a5755cd09b706f9d9a179d947c3752224b84', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '1e0e8f32786ad7cb3e228f32e4677d03357052b3', size: "medium", "data-dialog": "close", appearance: "filled", variant: "neutral" }, "Cancel"), index.h("ir-custom-button", { key: 'df1a108bc0695cbcacd02b252a54b60cc145c430', type: "submit", form: `change-source-form-${this.booking?.booking_nbr}`, size: "medium", appearance: "accent", variant: "brand", loading: this.isLoading }, "Save"))));
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
        return (index.h("form", { key: '6151734dcb2f4284cca0de0cb8aadc02ea990625', id: `change-source-form-${this.booking?.booking_nbr}`, onSubmit: this.handleSubmit.bind(this) }, index.h("wa-select", { key: 'b461a29542c7cf63f4efe771dff7c06d74cb601c', label: "New source", onchange: this.handleSelectChange.bind(this), size: "small", value: this.selectedSource?.id, defaultValue: this.selectedSource?.id }, calendarData.calendar_data?.property?.allowed_booking_sources?.map(option => option.type === 'LABEL' ? (index.h("small", { key: option.id }, option.description)) : (index.h("wa-option", { key: option.id, value: option.id?.toString() }, option.description)))), isAssign && index.h("ir-booking-assign-items", { key: 'e1e023626b399cc5e4a96eb39f52905fff8d298a', items: this.buildAssignableItems(), onBookingSelectionChange: e => (this.checkedItems = e.detail) })));
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
        return (index.h("wa-badge", { key: 'a93547ce4f352b2c81880a224ffc1db7b805a791', style: { padding: '0.375em 0.625em', letterSpacing: '0.03rem' }, variant: this.badgeVariant[this.isRequestToCancel ? '003' : this.status.code] }, this.status.description.toUpperCase()));
    }
};
IrBookingStatusTag.style = IrBookingStatusTagStyle0;

const irCheckoutDialogCss = ".ir-dialog__footer{display:flex;align-items:center;gap:0.5rem;justify-content:flex-end;width:100%}.dialog__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px;min-width:31rem}:host{display:block}";
const IrCheckoutDialogStyle0 = irCheckoutDialogCss;

const IrCheckoutDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.checkoutDialogClosed = index.createEvent(this, "checkoutDialogClosed", 7);
    }
    open;
    /**
     * Booking data for the current room checkout action.
     */
    booking;
    /**
     * Unique identifier of the room being checked out.
     */
    identifier;
    isLoading = 'page';
    buttons = new Set();
    invoiceInfo;
    room;
    checkoutDialogClosed;
    bookingService = new booking_service.BookingService();
    async checkoutRoom({ e, source }) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.isLoading = source;
            await this.bookingService.handleExposedRoomInOut({
                booking_nbr: this.booking.booking_nbr,
                room_identifier: this.identifier,
                status: '002',
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
    async init() {
        if (!this.open) {
            return;
        }
        try {
            this.isLoading = 'page';
            this.invoiceInfo = await this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr });
            this.setupButtons();
            this.room = this.booking.rooms.find(r => r.identifier === this.identifier);
        }
        catch (error) {
        }
        finally {
            this.isLoading = null;
        }
    }
    setupButtons() {
        const toBeInvoicedRooms = this.invoiceInfo.invoiceable_items.filter(item => item.type === 'BSA' && item.reason?.code !== '001');
        //check if all rooms are invoiced
        const allRoomInvoiced = toBeInvoicedRooms.length === 0;
        if (allRoomInvoiced) {
            this.buttons.add('checkout');
            return;
        }
        //invoice and checkout : if some rooms are not invoiced
        this.buttons.add('invoice_checkout');
        //checkout without invoice :available except for last room in a booking
        if (toBeInvoicedRooms.length > 1) {
            this.buttons.add('checkout_without_invoice');
        }
    }
    render() {
        return (index.h("ir-dialog", { key: 'dc8cfc2ff6bfba37c05c726f5da8b35416441dd0', open: this.open, label: "Alert", style: { '--ir-dialog-width': 'fit-content' }, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.buttons.clear();
                this.checkoutDialogClosed.emit({ reason: 'cancel' });
            } }, this.isLoading === 'page' ? (index.h("div", { class: "dialog__loader-container" }, index.h("ir-spinner", null))) : (index.h("p", { style: { width: 'calc(31rem - var(--spacing))' } }, "Are you sure you want to check out unit ", this.room?.unit?.name, "?")), index.h("div", { key: '5f9162c2e29f0884848d91ed3ede41c1c33afd61', slot: "footer", class: "ir-dialog__footer" }, index.h(index.Fragment, { key: '160a7bf506e54f872e1a3f009c94a44fe91a837f' }, index.h("ir-custom-button", { key: '96fdc91646451e411d03de719141188197291b83', size: "medium", "data-dialog": "close", appearance: "filled", variant: "neutral" }, locales_store.locales?.entries?.Lcz_Cancel ?? 'Cancel'), this.buttons.has('checkout') && (index.h("ir-custom-button", { key: '810c03fdb56dfd3e6e7800b16b85fde8905b047a', size: "medium",
            // loading={this.isLoading}
            onClickHandler: e => this.checkoutRoom({ e, source: 'checkout' }), variant: 'brand', loading: this.isLoading === 'checkout' }, "Checkout")), this.buttons.has('checkout_without_invoice') && (index.h("ir-custom-button", { key: 'e68a3a3c0498b19e535e209c608db49ee73a53ab', loading: this.isLoading === 'skipCheckout', size: "medium",
            // loading={this.isLoading}
            onClickHandler: e => this.checkoutRoom({ e, source: 'skipCheckout' }), variant: 'brand', appearance: this.buttons.has('invoice_checkout') ? 'outlined' : 'accent' }, "Checkout without invoice")), this.buttons.has('invoice_checkout') && (index.h("ir-custom-button", { key: '25959e041399e0fed9d661595729206ff121179a', size: "medium", loading: this.isLoading === 'checkout&invoice', onClickHandler: e => {
                this.checkoutRoom({ e, source: 'checkout&invoice' });
            }, variant: 'brand', appearance: 'accent' }, "Checkout & invoice"))))));
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
        return (index.h("div", { key: 'af0bf0df339bbd5150d97cda2dda78eb3acbc8ee', class: "" }, irInterceptor_store.isRequestPending('/Get_Exposed_Booking_Events') ? (index.h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, index.h("ir-spinner", null))) : (index.h(index.Fragment, null, index.h("table", { class: " dialog-container-height" }, index.h("thead", { class: "sr-only" }, index.h("tr", null, index.h("th", null, "date"), index.h("th", null, "user"), index.h("th", null, "status"))), index.h("tbody", null, this.bookingEvents?.map(e => (index.h("tr", { key: e.id, class: "pb-1" }, index.h("td", { class: "event-row dates-row" }, index.h("span", null, e.date), index.h("span", null, String(e.hour).padStart(2, '0'), ":", String(e.minute).padStart(2, '0'), ":", String(e.second).padStart(2, '0'))), index.h("td", { class: "pl-3 event-row " }, e.type), index.h("td", { class: "pl-1 event-row " }, e.user))))))))));
    }
};
IrEventsLog.style = IrEventsLogStyle0;

const irExtraServiceCss = ".sc-ir-extra-service-h{display:block}.extra-service-container.sc-ir-extra-service{display:flex;align-items:start;justify-content:space-between;gap:0.5rem}.extra-service-container.sc-ir-extra-service *.sc-ir-extra-service:not(wa-dropdown-item){padding:0;margin:0;box-sizing:border-box}.extra-service-actions.sc-ir-extra-service{display:flex;align-items:center;gap:0.5rem}.extra-service-conditional-date.sc-ir-extra-service{margin-top:0.5rem}.extra-service-price.sc-ir-extra-service{white-space:nowrap}.extra-service-description.sc-ir-extra-service{word-break:break-all}";
const IrExtraServiceStyle0 = irExtraServiceCss;

const IrExtraService = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.editExtraService = index.createEvent(this, "editExtraService", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
    }
    service;
    booking;
    bookingNumber;
    currencySymbol;
    language = 'en';
    svcCategories;
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
        let category = this.svcCategories?.find(c => c.CODE_NAME === this.service?.category?.code);
        if (category) {
            return (index.h("span", null, index.h("b", null, utils.getEntryValue({ entry: category, language: this.language })), ": ", this.service.description));
        }
        return this.service.description;
    }
    render() {
        const agentMode = functions.isAgentMode(this.booking);
        return (index.h(index.Host, { key: '99d31165c96d5790c3d080ea6f0942ddc586d06d' }, index.h("div", { key: 'e09636b17cbcc0b9394347b8d6d022e6a1ada7ac' }, index.h("div", { key: '6dcaef8e19f4c13f0d2353921fef112d0cd7d6bc', class: 'extra-service-container' }, index.h("p", { key: '837473dc9340a978a999bd37ca66dd72befb96af', class: "extra-service-description" }, this.description), index.h("div", { key: 'f148a55f80470fb193722b4d9ae9207ce474f7ba', class: "extra-service-actions" }, !!this.service.price && this.service.price > 0 && (index.h("p", { key: 'dc6ccbb72a53bc4a8e75a3e0228124009221f4df', class: "extra-service-price p-0 m-0 font-weight-bold" }, utils.formatAmount(this.currencySymbol, this.service.price))), index.h("wa-dropdown", { key: 'fdec96c7fa3157c60487615cb6b3840986344e02', "onwa-show": e => {
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
            } }, index.h("ir-custom-button", { key: '5c579a3beba9974ab4a71364dad9692997acc8d5', slot: "trigger", size: "small", class: "booking-room__edit-button", appearance: "plain", id: `actions-room-${this.service.system_id}`, iconBtn: true, style: { marginBottom: '4px' }, variant: "neutral" }, index.h("wa-icon", { key: '2b0ff1223a6b7bbaee028202d3277f86a3d7957e', style: { fontSize: '1rem' }, label: "Actions", name: "ellipsis-vertical" })), index.h("wa-dropdown-item", { key: '379a72ce9a3fec694b5566359aecc68f47da48a7', value: "edit" }, "Edit"), agentMode && index.h("wa-dropdown-item", { key: '7111e6a3f35a0c78ea7b81ac8866b8a67064125f', value: "toggle" }, "Re-assign to ", this.service.agent ? 'guest' : 'agent', " folio"), index.h("wa-dropdown-item", { key: '7acf11176e430f8b6c0db6add07c59f702e6f4e4', value: "delete", variant: "danger" }, "Delete")))), index.h("div", { key: '773537990bbd322411f73490f429eb7ad4a8127b', class: "extra-service-conditional-date" }, this.service.start_date && this.service.end_date ? (index.h("ir-date-view", { class: "extra-service-date-view mr-1", from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (this.service.start_date && index.h("p", { class: "extra-service-date-view" }, moment.hooks(new Date(this.service.start_date)).format('MMM DD, YYYY'))))), index.h("ir-assignment-toggle-dialog", { key: '568887881b05236d47de93f3485d1bac82a2b09f', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, message: `Switch "${this.service.description}" to ${this.service.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent')}?`, onConfirmToggle: () => this.toggleServiceAgent() }, index.h("span", { key: '639cacd58186e67551bf8bd42e74753518aab107', slot: "message" }, "Re-assign ", this.description, " ", index.h("br", { key: 'abf3e23110a22ba384ff395a16bd5b72d8949f4f' }), " from ", this.service.agent ? 'Agent' : 'Guest', " folio to ", index.h("b", { key: '07fb767780501249c56ef2d64a071c5e5f3d39fe' }, this.service.agent ? 'Guest' : 'Agent', " folio"), ".")), index.h("ir-dialog", { key: 'fb68ab89ed1c3bdc789a6f90dafa49da3db4e308', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: "Alert", ref: el => (this.irModalRef = el), lightDismiss: false }, `${locales_store.locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales_store.locales.entries.Lcz_ThisService} ${locales_store.locales.entries.Lcz_FromThisBooking}`, index.h("div", { key: 'f0ffd74b0ab35499125ab61faf38488ffef39033', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '00156983664e0bfc2bd76bd389166d81bf3b591f', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close" }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { key: '624078dbab794cbafde5205197060ea3b5996307', onClickHandler: () => this.deleteService(), loading: irInterceptor_store.isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "medium" }, locales_store.locales.entries.Lcz_Delete)))));
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
    svcCategories = [];
    service;
    language;
    open;
    closeModal;
    closeDialog() {
        this.closeModal.emit();
    }
    render() {
        return (index.h("ir-drawer", { key: '1e3e1545a4ce04b8f493452ab19b93c8c9bff2f1', style: {
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
            }, label: locales_store.locales.entries.Lcz_ExtraServices }, this.open && (index.h("ir-extra-service-config-form", { key: 'c3ed2eb903c68bd2ccccbaab002f5936b67a1116', language: this.language ?? 'en', svcCategories: this.svcCategories, onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDialog();
            }, booking: this.booking, service: this.service })), index.h("div", { key: 'b63297520382b758dfe90e03645b5e86cee33349', slot: "footer", class: 'ir__drawer-footer' }, index.h("ir-custom-button", { key: '44a82e24903afdcdda05f9800f24410c7f3e424d', class: `flex-fill`, size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { key: '846226b78d94966f762f349d7438176e79cc6c89', type: "submit", loading: irInterceptor_store.isRequestPending('/Do_Booking_Extra_Service'), form: "extra-service-config-form", size: "medium", class: `flex-fill`, variant: "brand" }, locales_store.locales.entries.Lcz_Save))));
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
        if (functions.isAgentMode(this.booking)) {
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
            if (error instanceof index$1.ZodError) {
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
        return (index.h("form", { key: 'a67c96a15ee49f395c587913dec50f6fcfe045e0', id: "extra-service-config-form", onSubmit: async (e) => {
                e.preventDefault();
                this.saveAmenity();
            }, class: 'extra-service-config__container' }, this.categories.length > 0 && (index.h("ir-validator", { key: 'e3d7bfacc33d30bd8326ad5f505c6030f780bdb7', value: this.s_service?.category, schema: utils.ExtraServiceSchema.shape.category }, index.h("wa-select", { key: '8451ef7ca0e7a92564dbbcb09dcce687806aed95', size: "small", label: "Service category", value: this.s_service?.category?.code ?? '', defaultValue: this.s_service?.category?.code ?? '', onchange: (e) => {
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
        })))), index.h("ir-validator", { key: '2da3fa45ad3b3aac1636fd4735a8c63a8c39f318', id: "amenity description-validator", schema: utils.ExtraServiceSchema.shape.description }, index.h("wa-textarea", { key: '4a7648b7df4d9b45f76b002b80ebea8d026aa261', size: "small", defaultValue: this.s_service?.description, value: this.s_service?.description, onchange: e => this.updateService({ description: e.target.value }), id: "amenity-description", "aria-label": "Amenity description", maxlength: 250, label: locales_store.locales.entries.Lcz_Description })), index.h("ir-validator", { key: 'e0259c4cf99aa512e9069bba4363c2037126d875', value: this.s_service?.start_date ?? null, schema: utils.ExtraServiceSchema.shape.start_date }, index.h("ir-custom-date-picker", { key: 'e0f1c35811a5ca18f1565651241bb6e32ef87887', placeholder: "Select date", withClear: true, label: "Dates on", emitEmptyDate: true, date: this.s_service?.start_date, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => this.updateService({ start_date: e.detail.start?.format('YYYY-MM-DD') }) })), index.h("ir-custom-date-picker", { key: '5e1486f7553ffbbbe8b03316ed4a08d5d8ccfb77', withClear: true, emitEmptyDate: true, placeholder: "Select date", date: this.s_service?.end_date, minDate: this.s_service?.start_date ?? this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: e.detail.start?.format('YYYY-MM-DD') });
            }, label: "Till and including" }), index.h("ir-validator", { key: 'e1fdb9d99520fe4547871819af4440c9fe4f916b', value: this.s_service?.price ?? null, schema: utils.ExtraServiceSchema.shape.price }, index.h("ir-input", { key: '27e5f9649c13f9052bfded7db3ab7c9707a7945c', "onText-change": e => {
                this.updateService({ price: Number(e.detail) });
            }, defaultValue: this.s_service?.price?.toString(), value: this.s_service?.price?.toString(), mask: 'price', type: "text", label: `${locales_store.locales.entries.Lcz_Price} (including tax)` }, index.h("span", { key: '169981f3b7ddf3d07458a1aa30ed92ad110ee5cd', slot: "start" }, this.booking.currency.symbol))), index.h("ir-validator", { key: '0f96929a2766ba82a78589350ddb50300aa0d9a2', value: this.s_service?.cost ?? null, schema: utils.ExtraServiceSchema.shape.cost }, index.h("ir-input", { key: 'bb5276fa4c606c19f44dd18a1b2a2318548ffc2e', defaultValue: this.s_service?.cost?.toString(), "onText-change": e => this.updateService({ cost: Number(e.detail) }), value: this.s_service?.cost?.toString(), mask: 'price', label: `${locales_store.locales.entries.Lcz_Cost} (optional)` }, index.h("span", { key: '0c5d8137b583e8c9829aaff87c4ccd6940529d73', slot: "start" }, this.booking.currency.symbol))), functions.isAgentMode(this.booking) && (index.h("ir-service-assignee-select", { key: '61c71c333c753fb5c6c9ab81e3bd4abefd032d64', assigneeType: this.assignee, onAssignmentChange: e => this.assignmentChanged(e), agent: this.booking.agent }))));
    }
    static get watchers() { return {
        "service": ["handleServiceChange"]
    }; }
};
IrExtraServiceConfigForm.style = IrExtraServiceConfigFormStyle0;

const irExtraServicesCss = ".sc-ir-extra-services-h{display:block}.service-group.sc-ir-extra-services{padding:0.125rem 0 0.25rem;border-left:3px solid transparent;padding-left:0.625rem}.service-group--guest.sc-ir-extra-services{border-left-color:var(--wa-color-neutral-300, #d4d4d8)}.service-group--agent.sc-ir-extra-services{border-left-color:var(--wa-color-primary-500, #3b82f6)}.service-group__label.sc-ir-extra-services{display:flex;align-items:center;gap:0.4rem;margin:0 0 0.75rem;font-size:0.75rem;font-weight:700;letter-spacing:0.06em;color:var(--wa-color-neutral-500, #71717a)}.service-group__label.--agent.sc-ir-extra-services{color:var(--wa-color-primary-600, #2563eb)}.service-group__dot.sc-ir-extra-services{display:inline-block;width:6px;height:6px;border-radius:50%;background-color:var(--wa-color-neutral-400, #a1a1aa);flex-shrink:0}.service-group--agent.sc-ir-extra-services .service-group__dot.sc-ir-extra-services{background-color:var(--wa-color-primary-500, #3b82f6)}.service-group__empty.sc-ir-extra-services{margin:0;padding:0.375rem 0;font-size:0.85rem;color:var(--wa-color-neutral-400, #a1a1aa);font-style:italic}";
const IrExtraServicesStyle0 = irExtraServicesCss;

const IrExtraServices = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    language;
    svcCategories;
    isAgentMode = false;
    componentWillLoad() {
        if (this.booking) {
            this.isAgentMode = functions.isAgentMode(this.booking);
        }
    }
    handleBookingChange() {
        this.isAgentMode = functions.isAgentMode(this.booking);
    }
    renderServiceList(services) {
        return services.map((service, index$1) => (index.h(index.Fragment, null, index.h("ir-extra-service", { language: this.language, svcCategories: this.svcCategories, booking: this.booking, bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service }), index$1 !== services.length - 1 && index.h("wa-divider", null))));
    }
    render() {
        const services = this.booking.extra_services ?? [];
        if (this.isAgentMode) {
            const guestServices = services.filter(s => s.agent === null || s.agent === undefined);
            const agentServices = services.filter(s => s.agent !== null && s.agent !== undefined);
            const agentName = this.booking.agent?.name ?? 'Agent';
            return (index.h(index.Host, null, index.h("wa-card", null, index.h("p", { slot: "header", class: 'font-size-large p-0 m-0' }, locales_store.locales.entries.Lcz_ExtraServices), index.h("wa-tooltip", { for: "extra_service_btn" }, "Add extra service"), index.h("ir-custom-button", { slot: "header-actions", id: "extra_service_btn", size: "small", appearance: "plain", variant: "neutral" }, index.h("wa-icon", { name: "plus", style: { fontSize: '1rem' } })), services.length === 0 ? (index.h("ir-empty-state", null)) : (index.h(index.Fragment, null, index.h("p", { class: "service-group__label" }, "Guest", index.h("span", null, "Folio")), index.h("div", { class: "service-group service-group--guest" }, index.h("div", { class: "service-group__body" }, guestServices.length === 0 ? index.h("p", { class: "service-group__empty" }, "No guest services added") : this.renderServiceList(guestServices))), index.h("wa-divider", null), index.h("p", { class: "service-group__label --agent" }, agentName, index.h("span", null, "Folio")), index.h("div", { class: "service-group service-group--agent" }, index.h("div", { class: "service-group__body" }, agentServices.length === 0 ? index.h("p", { class: "service-group__empty" }, "No agent services added") : this.renderServiceList(agentServices))))))));
        }
        return (index.h(index.Host, null, index.h("wa-card", null, index.h("p", { slot: "header", class: 'font-size-large p-0 m-0 ' }, locales_store.locales.entries.Lcz_ExtraServices), index.h("wa-tooltip", { for: "extra_service_btn" }, "Add extra service"), index.h("ir-custom-button", { slot: "header-actions", id: "extra_service_btn", size: "small", appearance: "plain", variant: "neutral" }, index.h("wa-icon", { name: "plus", style: { fontSize: '1rem' } })), services.length === 0 && index.h("ir-empty-state", null), this.renderServiceList(services))));
    }
    static get watchers() { return {
        "booking": ["handleBookingChange"]
    }; }
};
IrExtraServices.style = IrExtraServicesStyle0;

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
        return (index.h("ir-drawer", { key: 'e83d1c78cbe7d1d2fea5722624224b47fffe3e3e', open: this.open, label: drawerLabel, onDrawerHide: this.handleDrawerHide, style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            } }, this.open && (index.h("ir-guest-info-form", { key: '21639e6f6c2ef5dcb9334fa8fb77353fd201406d', ticket: this.ticket, language: this.language, email: this.email, booking_nbr: this.booking_nbr, fromId: this._formId })), index.h("div", { key: '9475fe7fd997ba7eaf53c7275c0c0756b5385bee', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '5372fc3b24630b6d2de251010506515623f6de40', size: "medium", appearance: "filled", variant: "neutral", type: "button", onClickHandler: this.handleCancel }, locales_store.locales.entries?.Lcz_Cancel || 'Cancel'), index.h("ir-custom-button", { key: '7ef33256248254d1e7a08f552d6d6adbe9f9e431', type: "submit", form: this._formId, size: "medium", variant: "brand", loading: irInterceptor_store.isRequestPending('/Edit_Exposed_Guest') }, locales_store.locales.entries?.Lcz_Save || 'Save'))));
    }
};
IrGuestInfoDrawer.style = IrGuestInfoDrawerStyle0;

const nonEmptyString = (message) => index$1.z.string().trim().min(1, message);
const optionalEmailSchema = index$1.z.string().trim().email('Enter a valid email address').or(index$1.z.literal('')).optional().nullable();
const guestInfoFormSchema = index$1.z.object({
    first_name: nonEmptyString('First name is required'),
    last_name: nonEmptyString('Last name is required'),
    email: nonEmptyString('Email is required').email('Enter a valid email address'),
    alternative_email: optionalEmailSchema,
    country_id: index$1.z.number({ required_error: 'Country is required' }).int('Country is required').positive('Country is required'),
    mobile: nonEmptyString('Mobile number is required').min(5, 'Mobile number is too short'),
    country_phone_prefix: nonEmptyString('Country code is required'),
    notes: index$1.z.string().max(2000, 'Private note cannot exceed 2000 characters').optional(),
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
            }, countries: this.countries })), index.h("ir-validator", { schema: index$1.z.object({ mobile: guestInfoFormSchema.shape.mobile, phone_prefix: guestInfoFormSchema.shape.country_phone_prefix }), value: { mobile: this.guest?.mobile ?? '', phone_prefix: this.guest?.country_phone_prefix }, autovalidate: this.autoValidate, valueEvent: "mobile-input-change" }, index.h("ir-mobile-input", { size: "small", "onMobile-input-change": e => {
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
        return (index.h(index.Host, { key: '110e55d0cffd0c853f7d03fe43cba73cefd3618a' }, index.h("ir-drawer", { key: '54ba3b322f74c8041a00bfcf738cc76cd0944597', style: {
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
            } }, index.h("div", { key: '79e97b5aa2e21a05212bf3e3d4da2f13f6c0b6cc', class: "d-flex align-items-center", slot: "header-actions" }, index.h("wa-switch", { key: '9d9a1d236ecc5f117a891b0bf4d7c9c5f5c6adba', defaultChecked: this.viewMode === 'proforma', checked: this.viewMode === 'proforma', onchange: e => {
                if (e.target.checked) {
                    this.viewMode = 'proforma';
                }
                else {
                    this.viewMode = 'invoice';
                }
            } }, "Pro-forma")), this.open && (index.h("ir-invoice-form", { key: 'df101a8f3b2b757df262933e51088e780b4e7244', viewMode: this.viewMode, for: this.for, roomIdentifier: this.roomIdentifier, booking: this.booking, autoPrint: this.autoPrint, formId: this._id, onPreviewProformaInvoice: e => (this.invoice = e.detail.invoice), invoiceInfo: this.invoiceInfo, onLoadingChange: e => (this.isLoading = e.detail) })), index.h("div", { key: '7cced55ab1ee656d059e85422ed8e8e5ff4719ac', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: 'e76866d765d9dee62dd798607c649c79902dc5d8', size: "medium", appearance: "filled", class: "w-100 flex-fill", variant: "neutral", onClickHandler: () => {
                this.closeDrawer();
            } }, "Cancel"), index.h("ir-custom-button", { key: 'a37a31fae482c114f8325f9f3497eddb8ac89872', disabled: this.invoiceInfo?.invoiceable_items?.filter(i => i.is_invoiceable)?.length === 0, loading: this.isLoading, value: "invoice", type: "submit", form: this._id, class: "w-100 flex-fill", size: "medium", variant: "brand", id: `confirm-btn_${this._id}` }, "Confirm")), index.h("ir-preview-screen-dialog", { key: '0582471cdad06826ef0f037e9ea18f7255545026', onOpenChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!e.detail) {
                    this.invoice = null;
                }
            }, open: this.invoice !== null }, index.h("ir-proforma-invoice-preview", { key: '5848903151cee6885030a386f5efa253e6c8d147', invoice: this.invoice, property: calendarData.calendar_data.property, booking: this.booking })))));
    }
    static get watchers() { return {
        "booking": ["handleBookingChange"]
    }; }
};
IrInvoice.style = IrInvoiceStyle0;

const irInvoiceFormCss = "@layer wa-utilities {\n  .sc-ir-invoice-form-h[size='small'],\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  .sc-ir-invoice-form-h[size='medium'],\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  .sc-ir-invoice-form-h[size='large'],\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n\n.sc-ir-invoice-form-h {\n  display: block;\n  height: 100%;\n}\n.ir-invoice__container.sc-ir-invoice-form {\n  display: grid;\n  gap: var(--wa-space-l);\n  box-sizing: border-box;\n}\n.ir-invoice__service.sc-ir-invoice-form:last-child {\n  border-bottom-left-radius: var(--wa-border-radius-m);\n  border-bottom-right-radius: var(--wa-border-radius-m);\n}\n.ir-invoice__service.sc-ir-invoice-form:first-child {\n  border-top-left-radius: var(--wa-border-radius-m);\n  border-top-right-radius: var(--wa-border-radius-m);\n  border-top: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);\n}\n.ir-invoice__service.sc-ir-invoice-form {\n  border-bottom: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);\n  border-left: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);\n  border-right: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);\n  background-color: var(--wa-color-surface-default);\n  \n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n}\n.ir-invoice__service.sc-ir-invoice-form:not(:disabled):hover {\n  background-color: color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover));\n}\n.ir-invoice__checkbox.sc-ir-invoice-form, .ir-invoice__checkbox.sc-ir-invoice-form::part(base) {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  box-sizing: border-box;\n}\n.ir-invoice__room-info.sc-ir-invoice-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  padding: 0.5rem;\n}\n.ir-invoice__checkbox.sc-ir-invoice-form::part(base) {\n  min-height: var(--wa-form-control-height);\n  padding: 0 var(--wa-form-control-padding-inline);\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n}\n.ir-invoice__checkbox.group.sc-ir-invoice-form::part(base) {\n  padding-block: var(--wa-form-control-padding-inline);\n  align-items: flex-start;\n}\n.ir-invoice__checkbox.sc-ir-invoice-form::part(label) {\n  display: flex;\n  width: 100%;\n}\n.ir-invoice__room-checkbox-container.sc-ir-invoice-form {\n  display: flex;\n  gap: 0.5rem;\n  width: 100%;\n  justify-content: space-between;\n  text-align: start;\n  align-items: center;\n}\n.ir-invoice__room-checkbox-container.group.sc-ir-invoice-form {\n  flex-direction: column;\n}\n.ir-invoice__checkbox-price.sc-ir-invoice-form {\n  font-weight: 700;\n  color: var(--wa-color-neutral-900);\n  white-space: nowrap;\n  text-align: right;\n  flex: 1 1 0%;\n}\n.ir-invoice__price-column.sc-ir-invoice-form {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.25rem;\n  min-width: fit-content;\n}\n.ir-invoice__reason.sc-ir-invoice-form {\n  color: var(--wa-color-gray-60);\n  font-size: 0.75rem;\n  line-height: 1.2;\n  text-align: right;\n}\n.ir-invoice__form-control-label.sc-ir-invoice-form {\n  display: inline-flex;\n  color: var(--wa-form-control-label-color);\n  font-weight: var(--wa-form-control-label-font-weight);\n  line-height: var(--wa-form-control-label-line-height);\n  margin-block-end: 0.5em;\n}\n.ir-invoice__reason.sc-ir-invoice-form {\n  color: var(--wa-color-danger-fill-loud);\n}";
const IrInvoiceFormStyle0 = irInvoiceFormCss;

const IrInvoiceForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.invoiceOpen = index.createEvent(this, "invoiceOpen", 7);
        this.invoiceClose = index.createEvent(this, "invoiceClose", 7);
        this.invoiceCreated = index.createEvent(this, "invoiceCreated", 7);
        this.previewProformaInvoice = index.createEvent(this, "previewProformaInvoice", 7);
        this.loadingChange = index.createEvent(this, "loadingChange", 7);
    }
    /**
     * Controls how the invoice form behaves (e.g., "invoice", "proforma", "preview").
     */
    viewMode = 'invoice';
    /**
     * Unique ID applied to the underlying <form> element.
     */
    formId;
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
    invoiceInfo;
    selectedRecipient;
    isLoading;
    selectedItemKeys = new Set();
    invoicableKey;
    toBeInvoicedItems;
    invoiceDate = moment.hooks();
    notInvoiceableItemKeys = new Set();
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
    /**
     * Emitted when an invoice is created/confirmed.
     *
     * The event `detail` contains:
     * - `booking`: the booking associated with the invoice
     * - `recipientId`: the selected billing recipient
     * - `for`: whether the invoice is for `"room"` or `"booking"`
     * - `roomIdentifier`: the room identifier when invoicing a specific room
     * - `mode`: the current invoice mode
     */
    invoiceCreated;
    previewProformaInvoice;
    loadingChange;
    room;
    confirmButtonRef;
    bookingService = new booking_service.BookingService();
    invoiceTarget;
    apiDisabledItemKeys = new Set();
    alreadyInvoicedItemKeys = new Set();
    componentWillLoad() {
        this.init();
    }
    componentDidLoad() {
        this.confirmButtonRef = document.querySelector(`#confirm-btn_${this.formId}`);
    }
    handleViewModeChange() {
        if (this.invoicableKey?.size) {
            this.applyDefaultSelections(Array.from(this.invoicableKey.values()));
        }
        this.enforceNonInvoiceableSelections();
    }
    handleBookingChange() {
        if (this.booking) {
            this.selectedRecipient = this.booking.guest.id.toString();
            if (this.for === 'room' && this.roomIdentifier) {
                this.room = this.booking.rooms.find(r => r.identifier === this.roomIdentifier);
            }
        }
        this.setUpDisabledItems();
    }
    handleInvoiceInfoChange() {
        this.setupInvoicables(this.invoiceInfo);
    }
    /**
     * Builds the list of invoice items that cannot yet be invoiced based on dates, splits and API-provided flags.
     */
    setUpDisabledItems() {
        if (!this.booking || !this.invoicableKey?.size) {
            this.notInvoiceableItemKeys = new Set();
            return;
        }
        const invoiceDate = (this.invoiceDate ?? moment.hooks()).clone().startOf('day');
        const disabledKeys = new Set();
        const markIfBefore = (key, dateStr, options) => {
            if (options?.checkedOut) {
                return;
            }
            if (typeof key !== 'number' || !this.invoicableKey.has(key) || !dateStr) {
                return;
            }
            const parsed = moment.hooks(dateStr, 'YYYY-MM-DD', true);
            if (parsed.isValid() && invoiceDate.isBefore(parsed.clone().startOf('day'))) {
                disabledKeys.add(key);
            }
        };
        const rooms = this.booking.rooms ?? [];
        rooms.forEach(room => {
            markIfBefore(room.system_id, room.to_date, { checkedOut: room?.in_out?.code === '002' });
        });
        const pickupInfo = this.booking.pickup_info;
        if (pickupInfo) {
            markIfBefore(pickupInfo?.system_id, pickupInfo?.from_date ?? pickupInfo?.date);
        }
        (this.booking.extra_services ?? []).forEach(extra => {
            markIfBefore(extra.system_id, extra?.from_date ?? extra.start_date ?? extra.end_date ?? this.booking.from_date);
        });
        const splitIndex = booking.buildSplitIndex(rooms);
        if (splitIndex) {
            const roomsByIdentifier = new Map(rooms.map(room => [room.identifier, room]));
            splitIndex.heads.forEach(head => {
                const chain = splitIndex.chainOf.get(head) ?? [];
                if (chain.length <= 1) {
                    return;
                }
                const tailIdentifier = chain[chain.length - 1];
                const tailRoom = roomsByIdentifier.get(tailIdentifier);
                if (!tailRoom) {
                    return;
                }
                const tailCheckedOut = tailRoom.in_out?.code === '002';
                chain.forEach(identifier => {
                    const room = roomsByIdentifier.get(identifier);
                    if (!room || typeof room.system_id !== 'number' || !this.invoicableKey.has(room.system_id)) {
                        return;
                    }
                    if (tailCheckedOut) {
                        disabledKeys.delete(room.system_id);
                        return;
                    }
                    disabledKeys.add(room.system_id);
                });
            });
        }
        this.notInvoiceableItemKeys = disabledKeys;
        this.enforceNonInvoiceableSelections(this.getCombinedDisabledKeys(disabledKeys));
    }
    /**
     * Removes selections that correspond to disabled invoice items unless in proforma mode.
     */
    enforceNonInvoiceableSelections(disabledKeys) {
        if (this.viewMode === 'proforma') {
            return;
        }
        const enforcedDisabledKeys = disabledKeys ?? this.getCombinedDisabledKeys();
        if (!enforcedDisabledKeys.size) {
            return;
        }
        const nextKeys = new Set(this.selectedItemKeys);
        let changed = false;
        enforcedDisabledKeys.forEach(key => {
            if (nextKeys.delete(key)) {
                changed = true;
            }
        });
        if (changed) {
            this.syncSelectedItems(nextKeys);
        }
    }
    /**
     * Returns the union of API-disabled keys and client-calculated non-invoiceable keys.
     */
    getCombinedDisabledKeys(baseKeys) {
        const base = baseKeys ?? this.notInvoiceableItemKeys ?? new Set();
        const merged = new Set(base);
        this.apiDisabledItemKeys.forEach(key => merged.add(key));
        if (this.viewMode === 'invoice') {
            this.alreadyInvoicedItemKeys.forEach(key => merged.add(key));
        }
        return merged;
    }
    /**
     * Indicates whether an item was already invoiced, used to disable it in invoice mode.
     */
    isAlreadyInvoiced(systemId) {
        if (this.viewMode !== 'invoice' || typeof systemId !== 'number') {
            return false;
        }
        return this.alreadyInvoicedItemKeys.has(systemId);
    }
    /**
     * Synchronizes the selected keys set with derived arrays and button states.
     */
    syncSelectedItems(selectedKeys) {
        this.selectedItemKeys = selectedKeys;
        const selectedItems = [];
        selectedKeys.forEach(key => {
            const item = this.invoicableKey?.get(key);
            if (item) {
                selectedItems.push(item);
            }
        });
        this.toBeInvoicedItems = selectedItems;
        if (!this.confirmButtonRef) {
            return;
        }
        if (this.toBeInvoicedItems.length === 0) {
            this.confirmButtonRef.disabled = true;
        }
        else {
            if (this.confirmButtonRef.disabled) {
                this.confirmButtonRef.disabled = false;
            }
        }
    }
    /**
     * Indicates whether a room has an invoiceable entry.
     */
    canInvoiceRoom(room) {
        return Boolean(room && this.invoicableKey?.has(room.system_id));
    }
    /**
     * Checks if any rooms in a collection are invoiceable.
     */
    hasInvoiceableRooms(rooms) {
        return rooms.some(room => this.canInvoiceRoom(room));
    }
    /**
     * Returns the system IDs for rooms that can be invoiced.
     */
    getInvoiceableRoomIds(rooms) {
        const ids = [];
        rooms.forEach(room => {
            if (this.canInvoiceRoom(room)) {
                ids.push(room.system_id);
            }
        });
        return ids;
    }
    /**
     * Loads booking/invoice data and ancillary metadata required to render the form.
     */
    async init() {
        try {
            this.isLoading = true;
            // let invoiceInfo = this.invoiceInfo;
            // if (!this.invoiceInfo) {
            const [booking, invoiceInfo] = await Promise.all([
                this.bookingService.getExposedBooking(this.booking.booking_nbr, 'en', true),
                this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr }),
            ]);
            this.booking = { ...booking };
            // }
            this.setupInvoicables(invoiceInfo);
            if (this.booking) {
                this.selectedRecipient = this.booking.guest.id.toString();
                if (this.for === 'room' && this.roomIdentifier) {
                    this.room = this.booking.rooms.find(r => r.identifier === this.roomIdentifier);
                }
            }
            this.invoiceTarget = await this.bookingService.getSetupEntriesByTableName('_INVOICE_TARGET');
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    /**
     * Converts API invoiceable items into lookup maps/sets and applies default selections.
     */
    setupInvoicables(invoiceInfo) {
        const invoiceableItems = invoiceInfo?.invoiceable_items ?? [];
        const mapEntries = [];
        invoiceableItems.forEach(item => {
            mapEntries.push([item.key, item]);
            if (typeof item.system_id === 'number' && item.system_id !== item.key) {
                mapEntries.push([item.system_id, item]);
            }
        });
        this.invoicableKey = new Map(mapEntries);
        this.apiDisabledItemKeys = new Set(invoiceableItems.filter(item => !item.is_invoiceable).map(item => this.getSelectableKey(item)));
        const alreadyInvoicedKeys = [];
        invoiceableItems.forEach(item => {
            if (item.reason?.code !== '001') {
                return;
            }
            alreadyInvoicedKeys.push(item.key);
            if (typeof item.system_id === 'number' && item.system_id !== item.key) {
                alreadyInvoicedKeys.push(item.system_id);
            }
        });
        this.alreadyInvoicedItemKeys = new Set(alreadyInvoicedKeys);
        this.applyDefaultSelections(invoiceableItems);
        this.setUpDisabledItems();
    }
    /**
     * Selects invoiceable items by default, or all items in proforma mode.
     */
    applyDefaultSelections(items) {
        const keysToSelect = this.viewMode === 'proforma'
            ? items.map(item => this.getSelectableKey(item))
            : items
                .filter(item => item.is_invoiceable && item.reason?.code !== '001')
                .map(item => this.getSelectableKey(item));
        this.syncSelectedItems(new Set(keysToSelect));
    }
    /**
     * Resolves the correct checkbox key to use for a given invoiceable item.
     */
    getSelectableKey(item) {
        return typeof item.system_id === 'number' ? item.system_id : item.key;
    }
    /**
     * Handles confirming/creating the invoice.
     *
     * Emits the `invoiceCreated` event with invoice context, and if
     * `autoPrint` is `true`, triggers `window.print()` afterwards.
     */
    async handleConfirmInvoice(isProforma = false) {
        try {
            this.loadingChange.emit(true);
            const billed_to_name = this.selectedRecipient?.startsWith('room__') ? this.selectedRecipient.replace('room__', '').trim() : '';
            let target;
            const setTarget = (code) => {
                let f = this.invoiceTarget.find(t => t.CODE_NAME === code);
                if (!f) {
                    throw new Error(`Invalid code ${code}`);
                }
                return {
                    code: f.CODE_NAME,
                    description: f.CODE_VALUE_EN,
                };
            };
            if (this.selectedRecipient === 'company') {
                target = setTarget('002');
            }
            else {
                target = setTarget('001');
            }
            const invoice = {
                booking_nbr: this.booking.booking_nbr,
                currency: { id: this.booking.currency.id },
                Date: this.invoiceDate.format('YYYY-MM-DD'),
                items: this.toBeInvoicedItems,
                target,
                billed_to_name,
            };
            if (isProforma) {
                this.previewProformaInvoice.emit({ invoice });
                return;
            }
            await this.bookingService.issueInvoice({
                is_proforma: isProforma,
                property_id: calendarData.calendar_data.property.id,
                invoice,
            });
            const invoiceInfo = await this.bookingService.getBookingInvoiceInfo({
                booking_nbr: this.booking.booking_nbr,
            });
            await this.openLastInvoice(invoiceInfo);
            this.invoiceCreated.emit(invoiceInfo);
            this.invoiceClose.emit();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.loadingChange.emit(false);
        }
    }
    /**
     * Opens the most recently created invoice in a new window using the booking service.
     */
    async openLastInvoice(invoiceInfo) {
        const lastInvoice = invoiceInfo.invoices[invoiceInfo.invoices.length - 1];
        const { My_Result } = await this.bookingService.printInvoice({
            property_id: calendarData.calendar_data.property.id,
            mode: lastInvoice?.credit_note ? 'creditnote' : 'invoice',
            invoice_nbr: lastInvoice.nbr,
        });
        window.open(My_Result);
    }
    /**
     * Provides the minimum selectable invoice date depending on booking vs. room mode.
     */
    getMinDate() {
        if (this.for === 'room') {
            return this.room.to_date;
        }
        // const getMinCheckoutDate = () => {
        //   let minDate = moment();
        //   for (const room of this.booking.rooms) {
        //     const d = moment(room.to_date, 'YYYY-MM-DD');
        //     if (d.isBefore(minDate)) {
        //       minDate = d.clone();
        //     }
        //   }
        //   return minDate;
        // };
        // return getMinCheckoutDate().format('YYYY-MM-DD');
        return this.booking.from_date;
    }
    /**
     * Returns today's date as the maximum invoice date.
     */
    getMaxDate() {
        return moment.hooks().format('YYYY-MM-DD');
    }
    /**
     * Groups rooms so that linked/split rooms can be invoiced together and ordered consistently.
     */
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
        const splitIndex = booking.buildSplitIndex(rooms);
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
    /**
     * Renders the visual date range for a given service entry.
     */
    getDateView(fromDate, toDate) {
        if (!fromDate) {
            return;
        }
        const from_date = moment.hooks(fromDate, 'YYYY-MM-DD').format('MMM DD, YYYY');
        if (!toDate) {
            return index.h("span", null, from_date);
        }
        const to_date = moment.hooks(toDate, 'YYYY-MM-DD').format('MMM DD, YYYY');
        return (index.h("span", null, from_date, " ", index.h("wa-icon", { name: "arrow-right" }), " ", to_date));
    }
    /**
     * Outputs the non-invoiceable reason text for a given system ID when in invoice mode.
     */
    renderReasonDescription(systemId) {
        if (this.viewMode !== 'invoice' || typeof systemId !== 'number' || !this.invoicableKey?.size) {
            return null;
        }
        const item = this.invoicableKey.get(systemId);
        if (!item || item.is_invoiceable || !item.reason?.description) {
            return null;
        }
        return index.h("span", { class: "ir-invoice__reason" }, item.reason.description);
    }
    /**
     * Renders a price/value column along with any reason description for the given system ID.
     */
    renderPriceColumn(amount, systemId) {
        const hasAmount = typeof amount === 'number';
        const reason = this.renderReasonDescription(systemId);
        if (!hasAmount && !reason) {
            return null;
        }
        const currencySymbol = this.booking?.currency?.symbol ?? '';
        return (index.h("div", { class: "ir-invoice__price-column" }, hasAmount && index.h("span", { class: "ir-invoice__checkbox-price" }, utils.formatAmount(currencySymbol, amount)), reason));
    }
    /**
     * Handles toggling checkbox selections for invoiceable items.
     */
    handleCheckChange({ checked, system_id, system_ids }) {
        if (!this.invoicableKey) {
            return;
        }
        const ids = [...(Array.isArray(system_ids) ? system_ids : []), ...(typeof system_id === 'number' ? [system_id] : [])].filter((id) => typeof id === 'number');
        if (!ids.length) {
            return;
        }
        if (this.isDisabled(ids)) {
            return;
        }
        const nextKeys = new Set(this.selectedItemKeys);
        let changed = false;
        ids.forEach(id => {
            if (!this.invoicableKey.has(id)) {
                return;
            }
            if (checked) {
                if (!nextKeys.has(id)) {
                    nextKeys.add(id);
                    changed = true;
                }
            }
            else if (nextKeys.delete(id)) {
                changed = true;
            }
        });
        if (changed) {
            this.syncSelectedItems(nextKeys);
        }
    }
    /**
     * Determines if any ID in a collection is currently selected.
     */
    isSelected(system_ids = []) {
        if (!system_ids?.length) {
            return false;
        }
        for (const id of system_ids) {
            if (typeof id === 'number' && this.selectedItemKeys.has(id)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Determines if any member of a checkbox group should be disabled.
     */
    isDisabled(systemIds = []) {
        if (this.viewMode === 'proforma' || !systemIds?.length) {
            return false;
        }
        const disabledKeys = this.getCombinedDisabledKeys();
        if (!disabledKeys.size) {
            return false;
        }
        return systemIds.some(id => {
            if (typeof id !== 'number') {
                return false;
            }
            if (this.isAlreadyInvoiced(id)) {
                return true;
            }
            return disabledKeys.has(id);
        });
    }
    /**
     * Renders the room checkboxes, grouping split rooms when necessary.
     */
    renderRooms() {
        const rooms = this.booking?.rooms ?? [];
        if (!rooms.length || !this.invoicableKey?.size) {
            return null;
        }
        const { groups, hasSplitGroups } = this.computeRoomGroups(rooms);
        if (!hasSplitGroups) {
            const groupRooms = groups[0].rooms;
            const invoiceableRooms = groupRooms.filter(room => this.canInvoiceRoom(room));
            if (!invoiceableRooms.length) {
                return null;
            }
            return invoiceableRooms.map(room => {
                const isSelected = this.isSelected([room.system_id]);
                const isDisabled = this.isDisabled([room.system_id]);
                return (index.h("div", { class: "ir-invoice__service", key: room.identifier }, index.h("wa-checkbox", { disabled: isDisabled, size: "small", onchange: e => {
                        const value = e.target.checked;
                        this.handleCheckChange({ checked: value, system_id: room.system_id });
                    }, defaultChecked: isSelected, checked: isSelected, class: "ir-invoice__checkbox" }, index.h("div", { class: 'ir-invoice__room-checkbox-container align-items-center' }, index.h("div", { class: "ir-invoice__room-info" }, index.h("span", null, index.h("b", null, room.roomtype.name), index.h("span", { style: { paddingLeft: '0.5rem' } }, room.rateplan.short_name)), this.getDateView(room.from_date, room.to_date)), this.renderPriceColumn(room.gross_total, room.system_id))))
                // {this.renderRoomItem(room, indexById.get(room.identifier) ?? idx)}
                // {idx < groupRooms.length - 1 ? <wa-divider></wa-divider> : null}
                );
            });
        }
        return groups.map(group => {
            if (!this.hasInvoiceableRooms(group.rooms)) {
                return null;
            }
            const roomIds = this.getInvoiceableRoomIds(group.rooms);
            const isDisabled = this.isDisabled(roomIds);
            const isSelected = this.isSelected(roomIds);
            return (index.h("div", { class: "ir-invoice__service", key: group.order }, index.h("wa-checkbox", { disabled: isDisabled, size: "small", onchange: e => {
                    const value = e.target.checked;
                    this.handleCheckChange({ checked: value, system_ids: roomIds });
                }, defaultChecked: isSelected, checked: isSelected, class: "ir-invoice__checkbox group" }, index.h("div", { class: 'ir-invoice__room-checkbox-container group' }, group.rooms.map(room => {
                if (!this.canInvoiceRoom(room)) {
                    return null;
                }
                return (index.h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { class: "ir-invoice__room-info" }, index.h("p", null, index.h("b", null, room.roomtype.name), index.h("span", null, room.rateplan.short_name)), this.getDateView(room.from_date, room.to_date)), this.renderPriceColumn(room.gross_total, room.system_id)));
            })))));
        });
    }
    /**
     * Renders the pickup service row when invoiceable.
     */
    renderPickup() {
        const sysId = this.booking.pickup_info?.['system_id'];
        if (!this.invoicableKey?.has(sysId)) {
            return null;
        }
        const isSelected = this.isSelected([sysId]);
        const isDisabled = this.isDisabled([sysId]);
        return (index.h("div", { class: "ir-invoice__service" }, index.h("wa-checkbox", { disabled: isDisabled, size: "small", onchange: e => {
                const value = e.target.checked;
                this.handleCheckChange({ checked: value, system_id: sysId });
            }, defaultChecked: isSelected, checked: isSelected, class: "ir-invoice__checkbox" }, index.h("div", { class: "ir-invoice__room-checkbox-container" }, index.h("div", { class: 'ir-invoice__room-info' }, index.h("span", null, "Pickup"), this.getDateView(this.booking.pickup_info.date, null)), this.renderPriceColumn(this.booking.pickup_info.selected_option.amount, sysId)))));
    }
    /**
     * Renders the cancellation penalty checkbox when the booking contains one.
     */
    renderCancellationPenalty() {
        const cancellationPenalty = this.booking.financial.payments?.find(p => p.payment_type?.code === '013');
        if (!cancellationPenalty) {
            return null;
        }
        const sysId = cancellationPenalty?.system_id;
        if (!this.invoicableKey.has(sysId)) {
            return null;
        }
        const item = this.invoicableKey.get(sysId);
        const isSelected = this.isSelected([sysId]);
        const isDisabled = this.isDisabled([sysId]);
        return (index.h("div", { class: "ir-invoice__service" }, index.h("wa-checkbox", { disabled: isDisabled, size: "small", onchange: e => {
                const value = e.target.checked;
                this.handleCheckChange({ checked: value, system_id: sysId });
            }, defaultChecked: isSelected, checked: isSelected, class: "ir-invoice__checkbox" }, index.h("div", { class: "ir-invoice__room-checkbox-container" }, index.h("div", { class: 'ir-invoice__room-info' }, index.h("span", null, "Cancellation penalty"), this.getDateView(cancellationPenalty.date, null)), this.renderPriceColumn(item.amount, sysId)))));
    }
    render() {
        if (this.isLoading) {
            return (index.h("div", { class: "drawer__loader-container" }, index.h("ir-spinner", null)));
        }
        return (index.h(index.Host, { size: "small" }, index.h("form", { id: this.formId, onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                const shouldCreateProforma = this.viewMode === 'proforma' || submitter?.value === 'pro-forma';
                this.handleConfirmInvoice(shouldCreateProforma);
            }, class: "ir-invoice__container" }, index.h("ir-custom-date-picker", { onDateChanged: e => {
                this.invoiceDate = e.detail.start;
                this.setUpDisabledItems();
            }, label: "Date", date: this.invoiceDate.format('YYYY-MM-DD'), minDate: this.getMinDate(), maxDate: this.getMaxDate() }), index.h("ir-booking-billing-recipient", { onRecipientChange: e => (this.selectedRecipient = e.detail), booking: this.booking }), this.viewMode === 'invoice' && moment.hooks().isBefore(moment.hooks(this.booking.from_date, 'YYYY-MM-DD'), 'dates') ? (index.h("ir-empty-state", { message: "Invoices cannot be issued before guest arrival" })) : (index.h("div", { class: 'ir-invoice__services' }, index.h("p", { class: "ir-invoice__form-control-label" }, "Choose what to invoice ", index.h("span", { style: { color: 'var(--wa-color-gray-60)', paddingLeft: '0.5rem' } }, " (Disabled services are not eligible to be invoiced yet)")), index.h("div", { class: "ir-invoice__services-container" }, this.invoicableKey.size === 0 && index.h("ir-empty-state", { style: { marginTop: '3rem' } }), this.renderRooms(), this.booking.pickup_info && this.renderPickup(), this.booking.extra_services?.map(extra_service => {
            const sysId = extra_service.system_id;
            if (!this.invoicableKey?.has(sysId)) {
                return null;
            }
            const isSelected = this.isSelected([sysId]);
            const isDisabled = this.isDisabled([sysId]);
            return (index.h("div", { key: extra_service.system_id, class: "ir-invoice__service" }, index.h("wa-checkbox", { disabled: isDisabled, size: "small", onchange: e => {
                    const value = e.target.checked;
                    this.handleCheckChange({ checked: value, system_id: sysId });
                }, defaultChecked: isSelected, class: "ir-invoice__checkbox", checked: isSelected }, index.h("div", { class: "ir-invoice__room-checkbox-container" }, index.h("div", { class: 'ir-invoice__room-info' }, index.h("span", null, extra_service.description), this.getDateView(extra_service.start_date, extra_service.end_date)), this.renderPriceColumn(extra_service.price, sysId)))));
        }), this.renderCancellationPenalty()))))));
    }
    static get watchers() { return {
        "viewMode": ["handleViewModeChange"],
        "booking": ["handleBookingChange"],
        "invoiceInfo": ["handleInvoiceInfoChange"]
    }; }
};
IrInvoiceForm.style = IrInvoiceFormStyle0;

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
        const _number = await this.bookingService.getNextValue({ starter: `RC-${calendarData.calendar_data.property.aname}` });
        this.openPrintScreen.emit({
            mode: 'receipt',
            payload: {
                pid: detail.system_id?.toString(),
                rnb: `RC-${_number.My_Result}`,
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
        if (this.booking.financial.due_amount === 0) {
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
            index.h("wa-card", null, index.h("ir-payment-summary", { isBookingCancelled: ['003', '004'].includes(this.booking.status.code), totalCost: financial.gross_cost, balance: financial.due_amount, collected: financial.collected + financial.refunds, currency: currency }), index.h("ir-booking-guarantee", { booking: this.booking, bookingService: this.bookingService }), !['003', '004'].includes(this.booking.status.code) && this.booking.is_direct && (index.h("ir-applicable-policies", { propertyId: this.propertyId, booking: this.booking })), this.shouldShowRefundButton() && (index.h("div", { class: "d-flex mt-1" }, index.h("ir-custom-button", { variant: "brand", appearance: "outlined", onClickHandler: () => {
                    this.handleAddPayment({ type: 'refund', amount: Math.abs(this.booking.financial.cancelation_penality_as_if_today) });
                } }, `Refund ${utils.formatAmount(currency.symbol, Math.abs(this.booking.financial.cancelation_penality_as_if_today))}`))), this.shouldCancellationButton() && (index.h("div", { class: "d-flex mt-1" }, index.h("ir-custom-button", { variant: "brand", appearance: "outlined", onClickHandler: () => {
                    this.handleAddPayment({ type: 'cancellation-penalty', amount: Math.abs(this.booking.financial.cancelation_penality_as_if_today) });
                } }, `Charge cancellation penalty ${utils.formatAmount(currency.symbol, this.booking.financial.cancelation_penality_as_if_today)}`)))),
            index.h("ir-payments-folio", { booking: this.booking, payments: financial.payments || [], onAddPayment: () => this.handleAddPayment(), onEditPayment: e => this.handleEditPayment(e.detail), onDeletePayment: e => this.handleDeletePayment(e.detail), onIssueReceipt: e => this.handleIssueReceipt(e.detail) }),
            index.h("ir-booking-city-ledger", { booking: this.booking, language: this.language, svcCategories: this.svcCategories }),
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
        return (index.h("ir-drawer", { key: 'ae9914f0d42c1c19a0a1620821ecefe08ec09dc8', placement: "start", style: {
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
            } }, this.isOpen && (index.h("ir-payment-folio-form", { key: 'c4861f6cf70fa01de072db82ada998b1c8608cff', booking: this.booking, formId: this._id, onLoadingChanged: e => (this.isLoading = e.detail), onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeFolio();
            }, paymentEntries: this.paymentEntries, bookingNumber: this.bookingNumber, payment: this.payment, mode: this.mode })), index.h("div", { key: '08ef63412faf6ff473b9b977b9e6ce9383aa239e', slot: "footer", class: "w-100 d-flex align-items-center", style: { gap: 'var(--wa-space-xs)' } }, index.h("ir-custom-button", { key: '0b78d4ae70799389813d144d8548c26ecf724d36', class: "flex-fill", size: "medium", "data-drawer": "close", appearance: "filled", variant: "neutral", onClickHandler: () => this.closeFolio() }, "Cancel"), index.h("ir-custom-button", { key: '53435312f099648c0fcd1c468df67041fb37d10f', form: this._id, loading: this.isLoading === 'save', class: "flex-fill", size: "medium", type: "submit", value: "save",
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
const paymentTypeSchema = index$1.z.object({
    code: index$1.z.string().min(3).max(4),
    description: index$1.z.string(),
    operation: index$1.z.union([index$1.z.literal('CR'), index$1.z.literal('DB')]),
});
const paymentMethodSchema = index$1.z.object({
    code: index$1.z.string().min(3).max(4),
    description: index$1.z.string(),
    operation: index$1.z.string().optional().nullable(),
});
const folioBaseSchema = index$1.z.object({
    id: index$1.z.number().nullable().optional(),
    system_id: index$1.z.number().nullable().optional(),
    date: index$1.z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/)
        .refine(dateStr => {
        const date = moment.hooks(dateStr, DATE_FORMAT, true);
        return date.isValid();
    }, { message: `Invalid date` }),
    amount: index$1.z.coerce.number().min(0),
    reference: index$1.z.string().optional().nullable(),
    payment_type: paymentTypeSchema,
    payment_method: paymentMethodSchema.nullable().optional(),
});
const folioValidationSchema = folioBaseSchema.superRefine((data, ctx) => {
    if (requiresPaymentMethodCode(data.payment_type?.code) && !data.payment_method?.code) {
        ctx.addIssue({
            code: index$1.z.ZodIssueCode.custom,
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
            if (error instanceof index$1.ZodError) {
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
    hasUnassignedItems() {
        const hasUnassignedRoom = this.booking?.rooms?.some(r => r.agent === null) ?? false;
        const hasUnassignedPickup = this.booking?.pickup_info != null && this.booking.pickup_info.agent === null;
        const hasUnassignedExtraService = this.booking?.extra_services?.some(s => s.agent === null) ?? false;
        return hasUnassignedRoom || hasUnassignedPickup || hasUnassignedExtraService;
    }
    render() {
        // const isNewPayment = this.folioData?.payment_type?.code === '001' && this.folioData.id === -1;
        return (index.h("form", { key: '6db1ae78f2fb99e4941fa7110e70afce79ee2b7b', onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                if (submitter?.value === 'save') {
                    this.savePayment();
                }
            }, class: "payment-folio__form", id: this.formId }, index.h("ir-custom-date-picker", { key: '8d648509df39d6ed3487ad8a2fe434cc9fd012d0', id: this.controlIds.date, label: "Date", "aria-invalid": this.errors?.date && !this.folioData?.date ? 'true' : 'false', "data-testid": "pickup_date", onDateChanged: evt => {
                this.updateFolioData({ date: evt.detail.start?.format(DATE_FORMAT) });
            }, minDate: moment.hooks().add(-2, 'months').format('YYYY-MM-DD'), emitEmptyDate: true, maxDate: this.today, date: this.folioData?.date }), index.h("ir-validator", { key: '778fca4cf58e93b6cf38599ea98510fa676dc7ba', value: this.folioData?.payment_type?.code, autovalidate: this.autoValidate, schema: paymentTypeSchema.shape.code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide" }, index.h("wa-select", { key: 'ac28d7125982ab673b9325dd5f26a7b0de290f92', id: this.controlIds.transactionType, size: "small", "onwa-hide": event => this.stopEventPropagation(event), "onwa-show": event => this.stopEventPropagation(event), placeholder: "Select...", label: "Transaction type", defaultValue: this.folioData?.payment_type?.code, value: this.folioData?.payment_type?.code, disabled: this.mode === 'payment-action', onchange: event => {
                this.stopEventPropagation(event);
                this.handleDropdownChange(event.target.value);
            } }, index.h("wa-option", { key: '35d10caed3f331f3cc1c3d6e724177e9e64ce17a', value: "" }, "Select..."), this.renderDropdownItems())), this.requiresPaymentMethod(this.folioData?.payment_type?.code) && (index.h("ir-validator", { key: '163efc2535e459149765b63054d7f789fa59d0df', value: this.folioData?.payment_method?.code ?? '', autovalidate: this.autoValidate, schema: paymentMethodSchema.shape.code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide" }, index.h("wa-select", { key: '90e0bfdd3ac257fd39adae1eb0c5ac5f4c19b750', id: this.controlIds.paymentMethod, size: "small", label: `${this.folioData.payment_type?.code === '001' ? 'Payment' : 'Refund'} method`, "onwa-show": event => this.stopEventPropagation(event), "onwa-hide": event => this.stopEventPropagation(event), defaultValue: this.folioData?.payment_method?.code, value: this.folioData?.payment_method?.code ?? '', onchange: event => {
                this.stopEventPropagation(event);
                this.handlePaymentMethodDropdownChange(event.target.value);
            } }, index.h("wa-option", { key: '74b6feae52d4e4a8da9974342a49c9149d350c0d', value: "" }, "Select..."), this.paymentEntries?.methods?.map(pt => {
            return (index.h("wa-option", { key: pt.CODE_NAME, label: pt.CODE_VALUE_EN, value: pt.CODE_NAME }, pt.CODE_VALUE_EN));
        })))), index.h("ir-validator", { key: '7fb46b0fac81d5900cded25590705a64719d343d', value: this.folioData?.amount?.toString() ?? undefined, autovalidate: this.autoValidate, schema: folioBaseSchema.shape.amount, valueEvent: "text-change input input-change", blurEvent: "input-blur" }, index.h("ir-input", { key: '1b9c90bdc07ba95ab873219ba8939b7f9c50feb5', id: this.controlIds.amount, "aria-invalid": String(!!this.errors?.amount), value: this.folioData?.amount?.toString() ?? '', label: "Amount", mask: "price", min: 0, "onText-change": e => this.updateFolioData({ amount: !e.detail ? undefined : Number(e.detail) }) }, index.h("span", { key: '7b19db38b3850e4279d558587304f666636d035e', slot: "start" }, calendarData.calendar_data.currency.symbol))), index.h("ir-validator", { key: '6c9e3b6cd0f92b4ee99758977ddaad8d16132804', value: this.folioData?.reference ?? '', autovalidate: this.autoValidate, schema: folioBaseSchema.shape.reference, valueEvent: "text-change input input-change", blurEvent: "input-blur" }, index.h("ir-input", { key: '1d1fc69544ca208646ce6ce004e9c7ae25b41289', id: this.controlIds.reference, value: this.folioData?.reference ?? '', label: "Reference", maxlength: 50, "onText-change": e => this.updateFolioData({ reference: e.detail ?? '' }) })), functions.isAgentMode(this.booking) && this.hasUnassignedItems() && index.h("ir-service-assignee-select", { key: '29f90828f3579b01307ae27bd79747f59ddd2c0c', agent: this.booking.agent })));
    }
    static get watchers() { return {
        "payment": ["handlePaymentChange"],
        "paymentEntries": ["handlePaymentEntriesChange"]
    }; }
};
IrPaymentFolioForm.style = IrPaymentFolioFormStyle0;

const irPaymentItemCss = ".payment-item__payment-item.sc-ir-payment-item{display:flex;flex-direction:column;min-height:2.5rem}.payment-item__payment-item.sc-ir-payment-item p.sc-ir-payment-item{padding:0;margin:0;box-sizing:border-box}.payment-item__payment-body.sc-ir-payment-item{display:flex;flex-direction:column}.payment-item__payment-fields.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item{display:none}.payment-item__payment-toolbar.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:none}.payment-item__action-button.sc-ir-payment-item{cursor:pointer}.payment-item__payment-amount.sc-ir-payment-item{font-weight:700;white-space:nowrap}.payment-item__payment-amount.is-credit.sc-ir-payment-item{color:var(--wa-color-success-50)}.payment-item__payment-amount.is-debit.sc-ir-payment-item{color:var(--wa-color-danger-50)}.payment-item__payment-reference.sc-ir-payment-item{font-size:12px}@media (min-width: 640px){.payment-item__payment-item.sc-ir-payment-item{flex-direction:row;align-items:center;gap:1rem}.payment-item__payment-item.sc-ir-payment-item:hover{background:var(--wa-color-neutral-fill-quiet, #f1f2f3)}.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-actions.sc-ir-payment-item{display:inline-flex}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:inline-flex}.payment-item__payment-fields.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item,.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-actions.sc-ir-payment-item{display:none}.payment-item__payment-description.sc-ir-payment-item{padding:0 0.5rem !important}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item{display:inline-flex;align-items:center}.payment-item__payment-body.sc-ir-payment-item{flex:1 1 0%;justify-content:flex-start}.payment-item__payment-fields.sc-ir-payment-item{justify-content:flex-start;gap:0.5rem}.payment-item__payment-toolbar.sc-ir-payment-item{gap:0.5rem;align-items:center}}";
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
        return (index.h("div", { key: '6a34883b4022f4cfd3f883cdd766b490a04438ec', class: "payment-item__payment-item" }, index.h("div", { key: '9fdd57ad8e1ec9406360ede6fdf493b09df4ebe2', class: "payment-item__payment-body", part: "payment-body" }, index.h("div", { key: 'c78192afb5a7e4404bb711a881b23dcea61d9018', class: "payment-item__payment-fields", part: "payment-fields" }, index.h("p", { key: 'df7fdd46f84d07255f3837af3b39368b4f5b9256', class: "payment-item__payment-date" }, moment.hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), index.h("p", { key: '6da9a15a7f8960396b425fbf8c73a0ac626cc8c8', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, utils.formatAmount(this.payment.currency.symbol, this.payment.amount)), index.h("p", { key: '4e6d1c2c73be8b60f0a2c567ef662e8bef4052ea', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && index.h("p", { key: 'f755ebf58a93db40ba3120ed869d8627a0a99494', class: "payment-item__payment-reference" }, this.payment?.reference)), index.h("div", { key: 'b237110c8e6d706e8a0841d2b394422a22a58e85', class: "payment-item__payment-toolbar" }, index.h("p", { key: 'bb84ec68b249b17c1a1d2870381de3227d9cd67e', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, utils.formatAmount(this.payment.currency.symbol, this.payment.amount)), index.h("p", { key: 'd9f2eb813cafaf97e283bc8357ea4c12dc47b105', class: "payment-item__payment-description" }, paymentDescription), index.h("div", { key: '74b0fb314920c32e55ecee1f6fd7a54ffd41c75f', class: "payment-item__payment-actions" }, index.h("div", { key: 'ae539d998545f2c0077c8952ec19aa25dd869fd3', class: "d-flex align-items-center" }, index.h("wa-tooltip", { key: 'ccd9a86db4d5be9ce5bc8a6e9520b707f5343005', for: this._id }, "User: ", this.payment.time_stamp.user), index.h("wa-icon", { key: 'db6eb005052a8e5e70fac91cb7980b855764de15', name: "user", id: this._id }), index.h("wa-dropdown", { key: 'd3f7096dcb8c03e8e6dda8734c940da6adfb8e8c', "onwa-hide": e => {
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
            } }, index.h("ir-custom-button", { key: '9027bde4140b82a414bd50d90c0e10f33cd91ea1', slot: "trigger", appearance: "plain" }, index.h("wa-icon", { key: 'dc73cb29fcb0387aeb85672d208b1f935d7c8e99', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (index.h("wa-dropdown-item", { key: 'aa6b2e827d75bf77c08a83a2c73e88c8724aa148', value: "receipt" }, index.h("wa-icon", { key: 'ec1d0350921f87f76ce8cb97c94fadcc7dfbddb1', name: "receipt", slot: "icon" }), "Print Receipt")), index.h("wa-dropdown-item", { key: 'a88a781921e7f7d06d0189a1d8e866b41aadc446', value: "edit" }, index.h("wa-icon", { key: 'abfb8e483d43fdf7a621ddf4dc5086cd1ce33044', slot: "icon", name: "edit" }), "Edit"), index.h("wa-dropdown-item", { key: 'ab34c0e3cbd8566e71ef00e9c1aa29b3f4695f50', value: "delete", variant: "danger" }, index.h("wa-icon", { key: '74d335b8640787d9f2c201d7224db71c190352d6', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && index.h("p", { key: '4bccf7955143345217fa61163e161d0cdfbfc086', class: "payment-item__payment-reference" }, this.payment?.reference)));
    }
};
IrPaymentItem.style = IrPaymentItemStyle0;

const irPaymentSummaryCss = ".sc-ir-payment-summary-h{display:block}.sc-ir-payment-summary-h{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-payment-summary-h *.sc-ir-payment-summary{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}";
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
    shouldShowTotalCost() {
        return this.totalCost > 0 && this.totalCost !== null;
    }
    render() {
        return (index.h("div", { key: '923625f1cfcc562df4be1832576dd34892b2a18e', class: " m-0" }, this.shouldShowTotalCost() && (index.h("div", { key: '4d7d7ce603ec7665453e8d9e046684a11dd970d6', class: "mb-2 h4 total-cost-container" }, locales_store.locales.entries.Lcz_TotalCost, ":", index.h("span", { key: 'a73e0e3ce4af9cf087332f1539aeee8f7176de37' }, utils.formatAmount(this.currency.symbol, this.totalCost)))), index.h("div", { key: '8f80eb0c437c4d868bf21d604904c7aa46a8e90d', class: "h4 d-flex align-items-center justify-content-between" }, index.h("span", { key: 'c7ea6a8055f81e3c3ad973673ceb420ec3239248' }, locales_store.locales.entries.Lcz_Balance, ": "), index.h("span", { key: 'e333c54d4ed8777386674c2b3f484784c7495c63', class: "danger font-weight-bold" }, utils.formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (index.h("div", { key: 'bc0e1fa9b643ba096fb832b8b945fa0e0be86d34', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, index.h("span", { key: 'ae3902689fc2631597e5668e6cf24bbc74f7e74a' }, locales_store.locales.entries.Lcz_Collected, ": "), index.h("span", { key: '4576e9d7a273754fd380caf390df3c3707225c67' }, utils.formatAmount(this.currency.symbol, this.collected))))));
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
        return index.h("ir-empty-state", null);
    }
    render() {
        return (index.h("wa-card", { key: 'aa0d4f06841c36041c8c60ae88556d9314173433', class: " payments-container" }, index.h("div", { key: '8033c5c629010c059bb40d5e26b49b07de8f21b8', slot: "header", class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("p", { key: '0488a87d1fc14060d320f708d412e4e28c339fb8', class: "font-size-large p-0 m-0" }, this.booking?.agent ? 'Guest Folio' : 'Folio'), index.h(HelpDocButton, { key: '2ec70f009d008c8538f7b8d0264af63c76985893', message: "Help", href: "https://help.igloorooms.com/extranet/booking-details/guest-folio" })), index.h("wa-tooltip", { key: '6106cbf43e84c65b4817e3708eddeb58976c8380', for: "create-payment" }, "Add Payment"), index.h("ir-custom-button", { key: '7bf43113ad0a76b2b9965b17a589f628c65c9adb', slot: "header-actions", id: "create-payment", size: "small", variant: "neutral", appearance: "plain", onClickHandler: this.handleAddPayment }, index.h("wa-icon", { key: '8a2cfffb2306f115de20ab91605ff2bcdb98c178', name: "plus", style: { fontSize: '1rem' } })), this.hasPayments() ? this.payments.map((payment, index) => this.renderPaymentItem(payment, index)) : this.renderEmptyState()));
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
        return (index.h("ir-drawer", { key: '4a589fe939b401cc72d4dc83552f6fb3beb679c8', style: {
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
            } }, this.open && (index.h("ir-pickup-form", { key: '65e94092aa2d2aa56d88ea060145edecdda967c5', booking: this.booking, onCanSubmitPickupChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.canSubmitPickup = e.detail;
            }, defaultPickupData: this.defaultPickupData, numberOfPersons: this.numberOfPersons, bookingNumber: this.bookingNumber, bookingDates: this.bookingDates, onLoadingChange: e => (this.isLoading = e.detail), onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            }, formId: this._id })), index.h("div", { key: '3cdc71018b9da70dd0c57d8250762af72030b388', slot: "footer", class: 'ir__drawer-footer' }, index.h("ir-custom-button", { key: '94a05315213053b099291c9b39c125efb8013225', class: `flex-fill`, size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, locales_store.locales.entries.Lcz_Cancel), this.canSubmitPickup && (index.h("ir-custom-button", { key: '3d3abb7578364b1fe4f10713a11008a15b3d71af', type: "submit", loading: this.isLoading, form: this._id, size: "medium", class: `flex-fill`, variant: "brand" }, locales_store.locales.entries.Lcz_Save)))));
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
        const arrivalDateSchema = index$1.z
            .string()
            .min(1, { message: 'Arrival date is required.' })
            .regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid date format, expected YYYY-MM-DD.' });
        return index$1.z.object({
            location: index$1.z.preprocess(asNumber, index$1.z.number().int()).refine(value => (allowRemoval ? value === -1 || value > 0 : value > 0), {
                message: 'Please select a pickup option.',
            }),
            arrival_date: index$1.z
                .preprocess(value => (typeof value === 'string' ? value : value ?? ''), arrivalDateSchema)
                .refine(dateStr => {
                const date = moment.hooks(dateStr, 'YYYY-MM-DD', true);
                const min = moment.hooks(minDate, 'YYYY-MM-DD', true);
                const max = moment.hooks(maxDate, 'YYYY-MM-DD', true);
                return date.isValid() && min.isValid() && max.isValid() && date.isBetween(min, max, undefined, '[]');
            }, { message: `Arrival date must be between ${minDate} and ${maxDate}.` }),
            arrival_time: index$1.z
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
            flight_details: index$1.z.preprocess(value => (typeof value === 'string' ? value : ''), index$1.z.string().nonempty({ message: 'Flight details cannot be empty.' })),
            vehicle_type_code: index$1.z.preprocess(value => (typeof value === 'string' ? value : ''), index$1.z.string().nonempty({ message: 'Vehicle type code cannot be empty.' })),
            number_of_vehicles: index$1.z.preprocess(asNumber, index$1.z.number().int().min(1, { message: 'At least one vehicle is required.' })),
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
        else if (functions.isAgentMode(this.booking)) {
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
        return (index.h("form", { key: '12739a52ae319cc2133e52c34a38540c7baabd4e', id: this.formId, class: "pickup__container", onSubmit: async (e) => {
                e.preventDefault();
                await this.savePickup();
            } }, index.h("ir-validator", { key: 'f71cb0b67099740bad4efb0b762812ee1acf9215', schema: this.pickupSchema.shape.location, autovalidate: this.autoValidate, value: this.pickupData.location, valueEvent: "change wa-change select-change", blurEvent: "wa-hide blur" }, index.h("wa-select", { key: '57d22dad060f02e2f82eaa9b03d38400fd09d547', size: "small", onchange: e => this.handleLocationChange(e.target.value), defaultValue: this.pickupData.location === -1 ? '' : this.pickupData.location?.toString(), value: this.pickupData.location === -1 ? '' : this.pickupData.location?.toString() }, index.h("wa-option", { key: '18ede16d2b7433fa07f9ed876dfeb606d265a2f0', value: "" }, locales_store.locales.entries.Lcz_Pickup_NoThankYou), this.pickupService.getAvailableLocations(locales_store.locales.entries.Lcz_Pickup_YesFrom).map(option => (index.h("wa-option", { key: `pickup-location-${option.value}`, value: option.value?.toString() }, option.text))))), this.shouldRenderDetails && (index.h("div", { key: 'd0f428566c57feb53bc50a8f652f0ab9bd04da49', class: "pickup__container", "data-testid": "pickup_body" }, index.h("ir-validator", { key: 'c4f2da9c2db987063831cc479ba73f2884e42f27', schema: this.pickupSchema.shape.arrival_date, autovalidate: this.autoValidate, value: this.pickupData.arrival_date ?? '', valueEvent: "dateChanged", blurEvent: "datePickerBlur blur" }, index.h("ir-custom-date-picker", { key: 'a58ee79e82d40e42119f1ebf1c73fe60c577fafc', date: this.pickupData.arrival_date, minDate: this.bookingDates.from, maxDate: this.bookingDates?.to, emitEmptyDate: true, onDateChanged: evt => {
                this.updatePickupData('arrival_date', evt.detail.start?.format('YYYY-MM-DD') ?? null);
            }, label: locales_store.locales.entries.Lcz_ArrivalDate })), index.h("ir-validator", { key: '8eaf0eb704dc3a054968bfb02bbb305602a2dfa9', schema: this.pickupSchema.shape.arrival_time, autovalidate: this.autoValidate, value: this.pickupData.arrival_time, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, index.h("ir-input", { key: '4f62880546836f899cb1fe6fd5c87df5ede1cfcf', value: this.pickupData.arrival_time, "onText-change": e => {
                this.updatePickupData('arrival_time', e.detail);
            }, mask: 'time', label: locales_store.locales.entries.Lcz_Time })), index.h("ir-validator", { key: '811d2b2b586a62ab628d1492a9b47d7fb19f3908', schema: this.pickupSchema.shape.flight_details, autovalidate: this.autoValidate, value: this.pickupData.flight_details, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, index.h("ir-input", { key: 'ac4e47eeba620031dbd99475c169a8e02144f576', "onText-change": e => this.updatePickupData('flight_details', e.detail), value: this.pickupData.flight_details, label: locales_store.locales.entries.Lcz_FlightDetails })), index.h("ir-validator", { key: '75b39db6250bdcaaa1d51913bafecb18b836b137', schema: this.pickupSchema.shape.vehicle_type_code, autovalidate: this.autoValidate, value: this.pickupData.vehicle_type_code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide blur" }, index.h("wa-select", { key: 'fcb7e2fbdffcd0c61af04d0bf98037727c20bc1d', size: "small", onchange: e => this.handleVehicleTypeChange(e.target.value), value: this.pickupData.vehicle_type_code, defaultValue: this.pickupData.vehicle_type_code }, this.allowedOptionsByLocation.map(option => (index.h("wa-option", { value: option.vehicle.code, key: option.vehicle.code }, option.vehicle.description))))), index.h("ir-validator", { key: 'eb4ede8c35d9281c4bff86a4f27190c93d857cf7', schema: this.pickupSchema.shape.number_of_vehicles, autovalidate: this.autoValidate, value: this.pickupData.number_of_vehicles, valueEvent: "change wa-change select-change", blurEvent: "wa-hide blur" }, index.h("wa-select", { key: 'b1d42ae99d17951425a3931e3a726b5c75cad197', size: "small", defaultValue: this.pickupData.number_of_vehicles?.toString(), value: this.pickupData.number_of_vehicles?.toString(), label: locales_store.locales.entries.Lcz_NbrOfVehicles, onchange: e => {
                this.handleVehicleQuantityChange(Number(e.target.value));
            } }, this.vehicleCapacity.map(i => (index.h("wa-option", { key: `capacity_${i}`, value: i.toString() }, i))))), index.h("ir-input", { key: 'dc925e25a178f68851098b78c3eadcedc74c25c1', mask: 'price', label: `${locales_store.locales.entries.Lcz_DueUponBooking}`, "onText-change": e => {
                this.pickupData = {
                    ...this.pickupData,
                    due_upon_booking: e.detail,
                };
            }, value: this.pickupData.due_upon_booking }, index.h("span", { key: '73771dd22886afe191daa9f3fb48b2e59d81df7a', slot: "start" }, this.pickupData.currency?.symbol)), functions.isAgentMode(this.booking) && (index.h("ir-service-assignee-select", { key: '272f355779374a5e61328569ad82439d00b6691b', agent: this.booking.agent, assigneeType: this.assignee, onAssignmentChange: (e) => {
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

const irPickupViewCss = ".sc-ir-pickup-view-h{display:block}.pickup-info.sc-ir-pickup-view{display:flex;flex-direction:column;gap:0.75rem}.service-group.sc-ir-pickup-view{padding:0.125rem 0 0.25rem;border-left:3px solid transparent;padding-left:0.625rem}.service-group--guest.sc-ir-pickup-view{border-left-color:var(--wa-color-neutral-300, #d4d4d8)}.service-group--agent.sc-ir-pickup-view{border-left-color:var(--wa-color-primary-500, #3b82f6)}.service-group__label.sc-ir-pickup-view{display:flex;align-items:center;gap:0.4rem;margin:0 0 0.75rem;font-size:0.75rem;font-weight:700;letter-spacing:0.06em;color:var(--wa-color-neutral-500, #71717a)}.service-group__label.--agent.sc-ir-pickup-view{color:var(--wa-color-primary-600, #2563eb)}.service-group__dot.sc-ir-pickup-view{display:inline-block;width:6px;height:6px;border-radius:50%;background-color:var(--wa-color-neutral-400, #a1a1aa);flex-shrink:0}.service-group--agent.sc-ir-pickup-view .service-group__dot.sc-ir-pickup-view{background-color:var(--wa-color-primary-500, #3b82f6)}.pickup-info__summary.sc-ir-pickup-view{display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:space-between;align-items:center;color:#1f2a37}.pickup-info__datetime.sc-ir-pickup-view{font-weight:600;margin:0}.pickup-info__due.sc-ir-pickup-view{margin:0;color:#1f2a37}.pickup-info__details.sc-ir-pickup-view{display:flex;flex-direction:column;gap:0.3rem;color:#1f2a37}.pickup-info__line.sc-ir-pickup-view{margin:0;display:flex;flex-wrap:wrap;gap:0.25rem}.pickup-info__label.sc-ir-pickup-view{font-weight:600}.pickup-info__divider.sc-ir-pickup-view{opacity:0.4}.pickup-info__note.sc-ir-pickup-view{margin:0;color:#6b7280;font-size:0.875rem}@media (max-width: 600px){.pickup-info__summary.sc-ir-pickup-view{flex-direction:column;align-items:flex-start}}";
const IrPickupViewStyle0 = irPickupViewCss;

const IrPickupView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        if (!calendarData.calendar_data.pickup_service.is_enabled || !this.booking.is_editable) {
            return null;
        }
        return (index.h(index.Host, null, index.h("wa-card", null, index.h("p", { slot: "header", class: 'font-size-large p-0 m-0 ' }, locales_store.locales.entries.Lcz_Pickup), index.h("wa-tooltip", { for: "pickup" }, this.booking.pickup_info ? 'Edit' : 'Add', " pickup"), index.h("ir-custom-button", { slot: "header-actions", id: "pickup", size: "small", appearance: "plain", variant: "neutral" }, index.h("wa-icon", { name: "edit", style: { fontSize: '1rem' } })), this.booking.pickup_info ? (index.h(index.Fragment, null, functions.isAgentMode(this.booking) && (index.h("p", { class: `service-group__label ${functions.isAgentMode(this.booking) ? (this.booking?.pickup_info?.agent ? '--agent' : '') : ''}` }, index.h("span", null, "Bill to"), this.booking.pickup_info.agent ? this.booking.pickup_info.agent.name : 'Guest')), index.h("div", { class: `pickup-info${functions.isAgentMode(this.booking) ? (this.booking.pickup_info.agent ? ' service-group service-group--agent' : ' service-group service-group--guest') : ''}` }, index.h("div", { class: "pickup-info__summary" }, index.h("div", null, index.h("p", { class: "pickup-info__datetime" }, moment.hooks(this.booking.pickup_info.date, 'YYYY-MM-DD').format('MMM DD, YYYY'), this.booking.pickup_info.hour && this.booking.pickup_info.minute && (index.h("span", null, " \u2022 ", functions._formatTime(this.booking.pickup_info.hour.toString(), this.booking.pickup_info.minute.toString()))))), index.h("p", { class: "pickup-info__due" }, index.h("strong", null, this.booking.pickup_info.currency.symbol, this.booking.pickup_info.total))), index.h("div", { class: "pickup-info__details" }, index.h("ir-label", { display: "inline", labelText: `${locales_store.locales.entries.Lcz_FlightDetails}:`, content: this.booking.pickup_info.details }), index.h("p", { class: "pickup-info__line" }, index.h("span", { class: "pickup-info__label" }, "Vehicle:"), index.h("span", null, this.booking.pickup_info.selected_option.vehicle.description)), index.h("p", { class: "pickup-info__line" }, index.h("span", { class: "pickup-info__label" }, locales_store.locales.entries.Lcz_NbrOfVehicles, ":"), index.h("strong", null, this.booking.pickup_info.nbr_of_units))), index.h("p", { class: "pickup-info__note" }, calendarData.calendar_data.pickup_service.pickup_instruction.description, calendarData.calendar_data.pickup_service.pickup_cancelation_prepayment.description)))) : (index.h("ir-empty-state", null)))));
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
        return (index.h("div", { key: '8ba9736d8ec6d772def903f636cc9a8dd0c93ce7', class: "" }, irInterceptor_store.isRequestPending('/Get_Exposed_PMS_Logs') ? (index.h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, index.h("ir-spinner", null))) : (index.h("div", { class: 'dialog-container-height' }, index.h("div", { class: "d-flex align-items-center ", style: { paddingBottom: '0.5rem' } }, index.h("p", { class: "list-title p-0 m-0" }, locales_store.locales.entries.Lcz_SentAt, ":"), this.pmsLogs?.sent_date ? (index.h("p", { class: "list-item" }, this.pmsLogs?.sent_date, " ", functions._formatTime(this.pmsLogs?.sent_hour.toString(), this.pmsLogs?.sent_minute.toString()))) : (index.h("p", { class: `list-item ${this.pmsLogs?.sent_date ? 'green' : 'red'}` }, this.pmsLogs?.is_acknowledged ? locales_store.locales.entries.Lcz_YES : locales_store.locales.entries.Lcz_NO))), index.h("div", { class: "d-flex align-items-center p-0 m-0" }, index.h("p", { class: "list-title p-0 m-0" }, locales_store.locales.entries.Lcz_Acknowledged), index.h("div", { class: "d-flex align-items-center", style: { gap: '1rem' } }, index.h("p", { class: `list-item  ${this.pmsLogs?.is_acknowledged ? 'green' : 'red'}` }, this.pmsLogs?.is_acknowledged ? locales_store.locales.entries.Lcz_YES : locales_store.locales.entries.Lcz_NO), !this.pmsLogs?.is_acknowledged && this.pmsLogs?.revision_id && this.userTypeCode === '1' && (index.h("ir-custom-button", { variant: "brand", loading: irInterceptor_store.isRequestPending('/Ack_Exposed_Revision'), onClickHandler: async (e) => {
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

const irProformaInvoicePreviewCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}.main-container{max-width:56.25rem;margin-left:auto;margin-right:auto;}.label-title{padding:0;margin:0;color:rgb(51, 51, 51);font-weight:700}.label-value{padding-left:0.25rem;color:rgb(102, 102, 102);font-weight:600}.booking-details,.pickup-container{padding:0.94rem 0;border-top:1px solid rgb(128, 128, 128);border-bottom:1px solid rgb(128, 128, 128)}.accommodation-summary{display:flex;align-items:center;justify-content:space-between;padding:0.94rem 0;flex-wrap:wrap;gap:0.62rem}.booking-dates{color:rgb(51, 51, 51);font-weight:700;padding:0;margin:0}.roomtype-title td{padding-top:1.56rem;padding-right:0.62rem}.policies{font-size:0.88rem}.policies-container{padding:0.62rem 0.06rem 0.94rem 0.06rem}.policies{padding-inline:0.06rem}.room_amount_day{padding:0.31rem}.room_amount_day.amount{font-weight:700;text-transform:capitalize}.room_amount_day.rate{font-weight:700;color:rgb(51, 51, 51)}.pricing-summary{text-align:end;padding-left:0.62rem;padding-bottom:0.94rem}.room_amount.date{color:#1f2937;background:#f3f4f6}.room_amount.amount{margin-bottom:0.5rem}.pricing-breakdown{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:0.25rem}.property_name,.booked_on_date,.invoice_reference{color:rgb(51, 51, 51);font-size:0.88rem;font-weight:700}.booking-number{font-size:1.25rem;font-weight:600}.header{display:flex;justify-content:space-between;padding-bottom:0.94rem}.booked_on_date{font-weight:600}.reservation-details{display:flex;align-items:center;justify-content:flex-end}.origin-icon{height:2.5rem;width:2.5rem}.invoice_reference{text-align:end}.billing_header{color:#333;box-sizing:border-box;font-size:1rem}.billing_cell{text-align:left}.billing_table{padding:0.62rem 0}.billing_table caption{text-align:start;font-size:1.12rem;padding:0.62rem 0rem 0.94rem}.pickup-details{display:flex;align-items:center;flex-wrap:wrap}.pickup_title{font-size:1.12rem;padding:0rem 0 0.94rem 0}.car_name{color:#333;font-weight:bold;padding-right:0.62rem}.pickup-details .label-title{padding-right:0.62rem}.billing_reference{width:2.5rem}.room_amount_container{display:flex;flex-direction:column}.room_amount{min-width:4.38rem}.room_amount_empty{color:white;pointer-events:none;user-select:none;-webkit-user-drag:none;display:none}.room_amount_rate{display:none;color:#333;font-size:1rem;font-weight:bold}.room_amount_main_container{display:flex;flex-wrap:wrap;}@media only screen and (min-width: 768px){.room_amount_container{flex-direction:column}.billing_header,.billing_cell{padding:0.62rem}.billing_reference{width:auto}.room_amount_empty{display:block}.room_amount_rate{display:block}}:host{display:block;width:100%;color:#1b1d26;background-color:white;padding:1rem}.proforma-invoice__company-details::part(container){text-align:end;justify-content:flex-end}.invoice__layout{display:flex;justify-content:space-between}.invoice__column,.property-overview{display:flex;flex-direction:column}.invoice__column--property,.property-overview{align-items:flex-end;text-align:end}.bill-to-section,.property-overview{margin-top:0.875rem}.property-logo{height:2.5rem}.invoice{max-width:58.25rem;margin-left:auto !important;margin-right:auto !important}.proforma__accommodation-container{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;margin-bottom:1rem;padding:1rem 0;border-top:1px solid #d1d5db}.ir-proforma-invoice__service{display:flex;align-items:flex-start;justify-content:space-between}.ir-proforma-invoice__checkbox-price{font-weight:700;white-space:nowrap}.ir-proforma-invoice__cancellation-date{font-size:0.875rem;color:#374151}.ir-proforma-invoice__cancellation-info{display:flex;flex-direction:column;gap:0.25rem;max-width:80%}.proforma__accommodation-container .proforma__accommodation-title{font-weight:600;font-size:1.125rem ;line-height:1.75rem ;color:#111827}.invoice__title{font-size:1.3rem}.invoice__layout{padding:1rem 0}.proforma-payment__section{font-size:1rem;display:flex;flex-direction:column;padding:1rem 0;gap:0.5rem;border-top:1px solid #d1d5db}@media print{.invoice{min-width:100%;height:auto;min-height:auto}.invoice,.invoice *{visibility:visible}.invoice{position:absolute;top:0;left:0;width:100%}}";
const IrProformaInvoicePreviewStyle0 = irProformaInvoicePreviewCss;

const IrProformaInvoicePreview = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Booking context used to display property, guest, and folio details.
     */
    booking;
    /**
     * Invoice payload emitted by `ir-invoice-form`.
     * Totals will fall back to booking data when omitted.
     */
    invoice;
    /**
     * Property associated with the booking.
     */
    property;
    /**
     * Optional metadata fetched via `getBookingInvoiceInfo`.
     * Used to display reference numbers (invoice/credit note/etc.).
     */
    invoiceInfo;
    /**
     * Locale used for date formatting.
     */
    locale = 'en';
    /**
     * Optional footer text shown at the end of the preview.
     */
    footerNote;
    invocableKeys;
    componentWillLoad() {
        this.invocableKeys = new Set(this.invoice?.items?.map(i => i.key));
    }
    handleInvoiceChange() {
        this.invocableKeys = new Set(this.invoice?.items?.map(i => i.key));
    }
    get bookingNumber() {
        if (!this.booking.is_direct) {
            return `${this.booking.booking_nbr} | ${this.booking.channel_booking_nbr}`;
        }
        return this.booking.booking_nbr;
    }
    get CompanyLocation() {
        const { company } = this.property;
        const { postal, city, country } = company;
        if (!postal && !city && !country)
            return null;
        const location = [];
        if (postal) {
            location.push(postal);
        }
        if (city) {
            location.push(city);
        }
        if (country) {
            if (postal || city) {
                location.push(`,${country.name}`);
            }
            else {
                location.push(company.name);
            }
        }
        if (location.length === 0) {
            return null;
        }
        return index.h("p", { class: "invoice-company__location" }, location.join(' '));
    }
    get guestPhoneNumber() {
        const { country_phone_prefix, mobile_without_prefix } = this.booking.guest;
        // if (!is_direct) {
        //     return mobile;
        // }
        if (!country_phone_prefix) {
            return mobile_without_prefix;
        }
        return `+${country_phone_prefix?.replace('+', '')}-${mobile_without_prefix}`;
    }
    formatDisplayDate(value) {
        if (!value) {
            return null;
        }
        const parsedDate = moment.hooks(value, ['YYYY-MM-DD', moment.hooks.ISO_8601], true);
        if (!parsedDate.isValid()) {
            return null;
        }
        return parsedDate.format('MMMM DD, YYYY');
    }
    get issueDate() {
        return this.formatDisplayDate(this.invoice?.Date) ?? '—';
    }
    renderPropertyCompanyHeader() {
        const { company } = this.property;
        if (!company) {
            return null;
        }
        return (index.h("div", { class: "invoice-company", "aria-label": "Issuing company details" }, company.name && index.h("p", { class: "invoice-company__name" }, company.name), company.address && index.h("p", { class: "invoice-company__address" }, company.address), this.CompanyLocation, company.phone && (index.h("ir-printing-label", { class: "proforma-invoice__company-details", label: 'Phone:', content: `${company.country?.phone_prefix ?? ''} ${company.phone}`.trim() })), company.tax_nbr && index.h("ir-printing-label", { class: "proforma-invoice__company-details", label: 'Tax ID:', content: company.tax_nbr })));
    }
    renderPropertyInfo() {
        const propertyLocation = [this.property?.city?.name ?? null, this.property?.country?.name ?? null].filter(f => f !== null).join(', ');
        const propertyLogo = this.property?.space_theme?.logo;
        return (index.h("section", { class: "property-overview", "aria-label": "Property overview" }, index.h("div", { class: "property-overview__text" }, index.h("p", { class: "property-overview__name" }, this.property.name), index.h("p", { class: "property-overview__location" }, propertyLocation)), propertyLogo && index.h("img", { src: propertyLogo, alt: `${this.property.name} logo`, class: "property-logo" })));
    }
    formatBookingDates(date) {
        return moment.hooks(date, 'YYYY-MM-DD').format('DD-MMM-YYYY');
    }
    renderBillToSection() {
        const { guest, company_name, company_tax_nbr } = this.booking;
        const { target, billed_to_name } = this.invoice;
        if (target?.code === '002') {
            return (index.h("div", { class: "bill-to", "aria-label": "Bill to company" }, company_name && index.h("p", { class: "bill-to__name" }, company_name), company_tax_nbr && index.h("p", { class: "bill-to__id" }, company_tax_nbr)));
        }
        return (index.h("div", { class: "bill-to", "aria-label": "Bill to guest" }, billed_to_name && index.h("p", null, billed_to_name), index.h("p", { class: "bill-to__name" }, ' ', billed_to_name && index.h("b", null, "for"), " ", [guest.first_name ?? '', guest.last_name ?? ''].join(' ').trim()), guest.email && index.h("p", { class: "bill-to__contact" }, guest.email), this.guestPhoneNumber && index.h("p", { class: "bill-to__contact" }, this.guestPhoneNumber)));
    }
    renderCancellationPenalty() {
        const cancellationPenalty = this.booking.financial.payments?.find(p => p.payment_type?.code === '013');
        if (!cancellationPenalty) {
            return null;
        }
        const sysId = cancellationPenalty.system_id;
        if (!this.invocableKeys.has(sysId)) {
            return null;
        }
        return (index.h("section", { class: "proforma-payment__section" }, index.h("div", { class: "ir-proforma-invoice__service" }, index.h("div", { class: 'ir-proforma-invoice__cancellation-info' }, index.h("p", null, "Cancellation penalty"), index.h("p", { class: 'ir-proforma-invoice__cancellation-date' }, "( ", this.formatDisplayDate(cancellationPenalty.date), " )")), index.h("span", { class: "ir-proforma-invoice__checkbox-price" }, utils.formatAmount(this.booking.currency.symbol, cancellationPenalty.amount)))));
    }
    render() {
        if (!this.booking || !this.invoice || !this.property) {
            return;
        }
        const billToContent = this.renderBillToSection();
        const companyDetails = this.renderPropertyCompanyHeader();
        const propertyOverview = this.renderPropertyInfo();
        const totalNights = booking.calculateDaysBetweenDates(this.booking.from_date, this.booking.to_date);
        const invocableRoom = this.booking.rooms.filter(room => this.invocableKeys.has(room.system_id));
        const existInvocableRoom = invocableRoom.length > 0;
        const existInvocableExtraService = this.booking.extra_services?.some(service => this.invocableKeys.has(service.system_id));
        const existInvocablePickup = this.invocableKeys?.has(this.booking.pickup_info?.['system_id']);
        return (index.h(index.Host, null, index.h("article", { class: "invoice", "aria-label": "Pro-forma invoice" }, index.h("header", { class: "invoice__header" }, index.h("h3", { class: "invoice__title" }, "Pro-forma Invoice"), index.h("section", { class: "invoice__layout", "aria-label": "Invoice summary" }, index.h("div", { class: "invoice__column invoice__column--details" }, index.h("div", { class: "invoice__details" }, index.h("ir-printing-label", { label: "Date of issue:", content: this.issueDate }), index.h("ir-printing-label", { label: "Booking no:", content: this.bookingNumber })), billToContent && (index.h("section", { class: "bill-to-section", "aria-label": "Bill to" }, index.h("h4", { class: "section-heading" }, "Bill To"), billToContent))), index.h("div", { class: "invoice__column invoice__column--property" }, companyDetails && (index.h("section", { class: "issuer-section", "aria-label": "Issuer" }, companyDetails)), propertyOverview))), index.h("main", null, existInvocableRoom && (index.h("section", { style: { marginTop: '2.5rem' } }, index.h("div", { class: "proforma__accommodation-container" }, index.h("p", { class: "proforma__accommodation-title" }, "ACCOMMODATION"), index.h("p", { class: "booking-dates" }, this.formatBookingDates(this.booking?.from_date)), index.h("p", { class: "booking-dates" }, this.formatBookingDates(this.booking?.to_date)), index.h("p", { class: "number-of-nights" }, totalNights, " ", totalNights === 1 ? 'night' : 'nights'), index.h("p", { class: "vat-exclusion" }, index.h("i", null, this.property?.tax_statement))), index.h("div", null, invocableRoom.map((room, idx) => {
            return (index.h(index.Fragment, null, index.h("ir-print-room", { room: room, idx: idx, booking: this.booking, key: room.identifier, currency: this.booking.currency.symbol, property: this.property })));
        })))), existInvocablePickup && index.h("ir-printing-pickup", { pickup: this.booking.pickup_info }), existInvocableExtraService && (index.h("ir-printing-extra-service", { invocableKeys: this.invocableKeys, extraServices: this.booking.extra_services, currency: this.booking.currency })), this.renderCancellationPenalty(), index.h("section", { class: "proforma-payment__section" }, index.h("ir-printing-label", { label: "Balance:", content: utils.formatAmount(this.booking.currency.symbol, this.booking.financial.due_amount) }), index.h("ir-printing-label", { label: "Collected (payments - refunds):", content: utils.formatAmount(this.booking.currency.symbol, this.booking.financial.collected + this.booking.financial.refunds) }))), this.footerNote && (index.h("footer", { class: "invoice__footer" }, index.h("p", { class: "invoice__footer-note" }, this.footerNote))))));
    }
    static get watchers() { return {
        "invoice": ["handleInvoiceChange"]
    }; }
};
IrProformaInvoicePreview.style = IrProformaInvoicePreviewStyle0;

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
        return (index.h("wa-card", { key: '0f81cfc62db3e62042b7d0d2e30af6d15830c67d' }, index.h("div", { key: 'b7de0eb98bcf6e05424ad4a075a88e194c5a57bc', class: "reservation-information", ref: el => (this.reservationInformationEl = el) }, index.h("p", { key: 'bc48cc0117c79470400c6f8bf83942e79eb2bb19', class: "reservation-information__property-name" }, this.booking.property.name || ''), index.h("ir-label", { key: '7adc4137ca5f66eb51e1efc6a21f9698c5c0e33b', renderContentAsHtml: true, labelText: `${locales_store.locales.entries.Lcz_BookedOn}:`, content: `${functions._formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${functions._formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), index.h("div", { key: 'fafdca9b35af40806283f1fbb9aee1b851644af3', class: "reservation-information__row" }, index.h("ir-label", { key: '8fb420eacb0c2cbfb8c570b353bca479278c7b09', labelText: `${locales_store.locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, this.booking.guest?.nbr_confirmed_bookings > 1 && !this.booking.agent && (index.h("div", { key: '89e3a2245e1b728da12dcc08fc2dace0ba04d748', class: 'm-0 p-0 ', slot: "prefix" }, index.h("wa-tooltip", { key: 'f6947ec19feefb3a688573b8c8a666dc839e7a8c', for: "guests_nbr_confirmed_bookings" }, `${locales_store.locales.entries.Lcz_BookingsNbr}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString())), index.h("div", { key: '159cc0062c160c94af8032e830ab68e15bba6b9a', style: { color: '#FB0AAD' }, id: "guests_nbr_confirmed_bookings" }, index.h("span", { key: 'aba40b5da3d3b31eafd8f430af1885ffd0ac1f38' }, " ", this.booking.guest.nbr_confirmed_bookings), index.h("wa-icon", { key: 'e080096059e4d5028c82766470c8ac5ee8eb8fcb', name: "heart", style: { color: '#FB0AAD' } }))))), index.h("wa-tooltip", { key: 'ae12285e918473b5d0b4d561fcf370e1dcad5899', for: `edit_guest-details` }, "Edit guest details"), index.h("ir-custom-button", { key: '5aef6a6c6688e3c044972b03600f0664bd96b18e', iconBtn: true, id: `edit_guest-details`, onClickHandler: e => this.handleEditClick(e, 'guest'), appearance: 'plain', variant: 'neutral' }, index.h("wa-icon", { key: '20f40dd2c77bb13add975ab12d25f8c12eb7a99b', name: "edit", label: "Edit guest details", style: { fontSize: '1rem' } }))), !this.booking.agent && (index.h("div", { key: '5e3162caa45a9ac265ecc60aa062efc8bc379d5d', class: "reservation-information__row" }, index.h("ir-label", { key: 'e68ca3a7e25923f813c5c9331bf6c734fc8526d9', labelText: `Company:`, placeholder: 'No company name provided', content: `${this.booking.company_name ?? ''}${this.booking.company_tax_nbr ? ` - ${this.booking.company_tax_nbr}` : ''}`, display: 'flex' }), index.h("wa-tooltip", { key: 'ac4acf067ea46dd4db04451c5cfb17d5fdd958f3', for: `edit_create-company-info` }, "Add company info"), index.h("ir-custom-button", { key: 'f03132b12a7bc38b4d1be90cbefa6497f73dd00a', iconBtn: true, id: `edit_create-company-info`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irBookingCompanyFormRef.openCompanyForm();
            }, appearance: 'plain', variant: 'neutral' }, index.h("wa-icon", { key: 'ccf1848f107528876d82d27d60d395e1158efbae', name: "edit", label: "Add or modify company info", style: { fontSize: '1rem' } })))), this.booking.guest.mobile && index.h("ir-label", { key: '8b7a4e0530113587bf1d868116ed2eb6cb2cf91e', labelText: `${locales_store.locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() }), !this.booking.agent && index.h("ir-label", { key: '32d21fae51758b572df389d40bdffd30ba8d595a', labelText: `${locales_store.locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && index.h("ir-label", { key: '31d5ff2ed0da49b9f839ee742bc442f507a74f13', labelText: `${locales_store.locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), this.booking?.guest?.address && index.h("ir-label", { key: 'd5c0c0a2b29b2f242f4085851d860bb1b26004bb', labelText: `${locales_store.locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.userCountry && (index.h("ir-label", { key: 'b0730726afe400a11b68c37e37884516c3c1f902', labelText: `${locales_store.locales.entries.Lcz_Country}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.booking.guest?.notes && index.h("ir-label", { key: '8d56b495761469ef7b71432077300eb896fde30e', display: "inline", labelText: `${locales_store.locales.entries.Lcz_GuestPrivateNote}:`, content: this.booking.guest?.notes }), this.booking.is_direct && (index.h("div", { key: 'f3c2dfb543531ccffb154ca045fa9539016da828', class: "reservation-information__row" }, index.h("ir-label", { key: '60046f46a466cbab036f3fb6769efc22ffd2696e', labelText: `${locales_store.locales.entries.Lcz_ArrivalTime}:`, display: "flex", content: this.booking.arrival.description }), index.h("wa-tooltip", { key: 'fe01c083afd341dcb962774c7dda624cc081e935', for: `edit_arrival_time` }, "Edit arrival time"), index.h("ir-custom-button", { key: 'af3ad40808a0faa9a37399051edafc45488f033c', iconBtn: true, id: `edit_arrival_time`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irArrivalTimeDialogRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, index.h("wa-icon", { key: '7d8fc9c931cb350ae9c8cbb0c68b25c9f36f3858', name: "edit", label: "Edit arrival time", style: { fontSize: '1rem' } })))), this.booking.promo_key && index.h("ir-label", { key: '971d6ee5301d2f3c08ef03fd095f5cdfc08f9313', labelText: `${locales_store.locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (index.h("div", { key: 'ba5d5bacc1b3107812501f1fabdc6a073f59bf5a', class: "d-flex align-items-center" }, index.h("svg", { key: '5f8f9526892347c3402bda09811474f652acaa5c', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '359cf32a311dbdcfc6997282f0b5b39179a71952', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), index.h("p", { key: '7c05d14475a4476d95cff0c83393dc6117640117', class: "m-0 p-0 ml-1" }, locales_store.locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (index.h("ir-label", { labelText: `${locales_store.locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.booking.remark })) : (index.h("ota-label", { class: 'm-0 p-0', label: `${locales_store.locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.booking.ota_notes, maxVisibleItems: this.booking.ota_notes?.length })), index.h("div", { key: '911525468ae47a06b9295738ec9fda54692d440d', class: "reservation-information__row" }, index.h("ir-label", { key: 'e1cbd827def2b37ee3a8990a14cca30552c86870', labelText: `${locales_store.locales.entries.Lcz_BookingPrivateNote}:`, placeholder: locales_store.locales.entries.Lcz_VisibleToHotelOnly, content: privateNote, display: privateNote ? 'inline' : 'flex' }), index.h("wa-tooltip", { key: '0ee3426eb0052526083d31a9e3130b1800c48b2a', for: `edit_create-extra-note` }, privateNote ? 'Edit' : 'Create', " private note"), index.h("ir-custom-button", { key: '8f60193ae961f8b75f62c3de3136c70169152e13', iconBtn: true, id: `edit_create-extra-note`, onClickHandler: () => {
                this.irBookingExtraNoteRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, index.h("wa-icon", { key: '3fc1cb28260ba3f0941f60cd84d2b9b11c4d3567', style: { fontSize: '1rem' }, name: "edit", label: "Edit or create private note" }))), index.h("ir-booking-extra-note", { key: '2ea1bd0f1a5cca568ff85fcbda11a66c395a37f0', booking: this.booking, ref: el => (this.irBookingExtraNoteRef = el) }), index.h("ir-booking-company-dialog", { key: 'aa0abc0cf5b8ac82fee2c7c9064696fb50ea7f19', booking: this.booking, ref: el => (this.irBookingCompanyFormRef = el) })), index.h("ir-arrival-time-dialog", { key: 'fdd48228dff4d665a92bb76c9ace1cd8486f9462', booking: this.booking, arrivalTime: this.arrivalTime, ref: el => (this.irArrivalTimeDialogRef = el) })));
    }
};
IrReservationInformation.style = IrReservationInformationStyle0;

const irRoomCss = ".light-blue-bg.sc-ir-room{background:#acecff;padding:0.1rem 0.3rem;border-radius:5px;display:block;max-width:100px;box-sizing:border-box;display:inline-block;overflow:hidden;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:default}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room span.sc-ir-room{display:inline;white-space:normal;line-height:1.5;word-break:break-word}.room_statements.sc-ir-room b.sc-ir-room{display:inline;margin-right:5px}.payment-container.sc-ir-room{position:absolute;right:1rem;height:fit-content}.sc-ir-room-h{position:relative}.subtotal_row.sc-ir-room{padding-top:8px;font-weight:600}.room_actions_btns.sc-ir-room{gap:0.5rem}.night-cost.sc-ir-room{color:#7cbebe}.room_actions_btns.sc-ir-room{white-space:nowrap;width:max-content}.room_actions_btns.sc-ir-room{flex:1 1 0%;display:flex;justify-content:flex-end}.mx-0-5.sc-ir-room{margin-left:2px !important;margin-right:2px !important}.tax-width.sc-ir-room{font-size:10px}.mx-01.sc-ir-room{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}*.sc-ir-room-h{box-sizing:border-box}.booking-room__collapse-btn.sc-ir-room{all:unset;display:inline-flex;align-items:center;align-self:flex-start;height:fit-content;border-radius:calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));aspect-ratio:1;cursor:pointer;transition:rotate var(--wa-transition-normal) var(--wa-transition-easing)}.booking-room__collapse-btn[data-state='opened'].sc-ir-room{rotate:90deg}.booking-room__collapse-btn[data-state='opened'].sc-ir-room:dir(rtl){rotate:-90deg}.booking-room__collapse-btn.sc-ir-room:focus-visible{outline:var(--wa-focus-ring);outline-offset:calc(var(--wa-panel-border-width) + var(--wa-focus-ring-offset))}.booking-room__header-row.sc-ir-room{display:flex;gap:var(--wa-space-sm, 0.5rem);margin:0}.booking-room__price-row.sc-ir-room{display:flex;align-items:center;gap:var(--wa-space-xs)}.booking-room__summary-row.sc-ir-room{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--wa-space-xs, 0.25rem)}.booking-room__summary-text.sc-ir-room,.booking-room__text-reset.sc-ir-room{margin:0;padding:0}.booking-room__summary-highlight.sc-ir-room{font-weight:600}.booking-room__dates-row.sc-ir-room{display:flex;flex-wrap:wrap;gap:var(--wa-space-xs, 0.25rem);align-items:center}.booking-room__date-view.sc-ir-room{flex:1 1 150px;min-width:140px;width:fit-content}.booking-room__guest-row.sc-ir-room{display:flex;flex-wrap:wrap;align-items:center;gap:0.5rem}.booking-room__guest-name.sc-ir-room{font-weight:600}.booking-room__bed-info.sc-ir-room{color:var(--wa-color-neutral-700)}.booking-room__departure-row.sc-ir-room{display:flex;flex-wrap:wrap;align-items:center;gap:0.5rem}.booking-room__departure-label.sc-ir-room{font-weight:500}.booking-room_summary.sc-ir-room{display:grid;gap:0.5rem}.booking-room__actions.sc-ir-room{display:flex;align-items:center}.booking-room__breakdown-row.sc-ir-room{display:flex;flex-direction:column;gap:0.5rem;margin:0.5rem 0}@media (min-width: 640px){.booking-room__breakdown-row.sc-ir-room{flex-direction:row;align-items:flex-start}}.booking-room__breakdown-label-wrapper.sc-ir-room{flex:0 0 auto;padding-top:0.25rem}.booking-room__breakdown-label.sc-ir-room{margin:0;padding-right:0.5rem;font-weight:600;white-space:nowrap}.booking-room__breakdown-table.sc-ir-room{flex:1 1 auto;overflow-x:auto}.booking-room__cell.sc-ir-room{padding:0.125rem 0;line-height:1.3;white-space:nowrap}.booking-room__cell--right.sc-ir-room{text-align:right}.booking-room__cell--left.sc-ir-room{text-align:left}.booking-room__cell--pad-right.sc-ir-room{padding-right:0.5rem}.booking-room__cell--pad-left.sc-ir-room{padding-left:0.5rem}.booking-room__details.sc-ir-room,.booking-room__details.sc-ir-room::part(base),.booking-room__details.sc-ir-room::part(header),.booking-room__details.sc-ir-room::part(content){width:100%;box-sizing:border-box;padding:0}.booking-room__details.sc-ir-room::part(header){align-items:flex-start}.booking-room__price.sc-ir-room{font-weight:700;color:var(--wa-color-neutral-900);white-space:nowrap;text-align:right}";
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
    render() {
        const bed = this.getBedName();
        return (index.h(index.Host, { key: '7611864b10c9d72564e791bec93033a1ff6aa29a' }, index.h("div", { key: 'a450bc7e43ac8fbada4e37fff0733abe679ada63', class: "booking-room__header-row" }, index.h("button", { key: 'b8ebd1a3762a34954e1614eec6b0e5633a104af5', "data-state": this.collapsed ? 'closed' : 'opened', class: "booking-room__collapse-btn", onClick: () => (this.collapsed = !this.collapsed) }, index.h("wa-icon", { key: '5996c935d7b8c3a157249bb040fc888de801baa0', name: "chevron-right" })), index.h("div", { key: 'c9492c2abd1dd3ebec8d8c4bb1868ec52310f1fc', style: { width: '100%', cursor: 'default' } }, index.h("div", { key: 'f92ac949e9cbf7dcac40c636ab213a5ae3394d59',
            // slot="summary"
            class: "booking-room_summary", style: { width: '100%', cursor: 'default' } }, index.h("div", { key: '4a9c808283adf2abd80142bb3b63c834d5026087', class: "booking-room__summary-row" }, index.h("p", { key: 'f49d967020c4b43c0d7bfe492a79d7a659a43b1b', class: "booking-room__summary-text" }, index.h("span", { key: 'f908e9178408054358cee6416c6b0828ba648343', class: "booking-room__summary-highlight" }, this.myRoomTypeFoodCat || '', " "), " ", this.mealCodeName, ' ', this.room.rateplan.is_non_refundable && ` - ${locales_store.locales.entries.Lcz_NonRefundable}`, ' '), index.h("div", { key: 'a7fe9f3f3ecdd0abfa13b03e8c4ef776d18f4a7d', class: "booking-room__price-row" }, index.h("span", { key: 'fe64f1625931e1dcba7ddb4d21bdec2615fbe197', class: "booking-room__price" }, utils.formatAmount(this.currency, this.room['gross_total'])), this.isEditable && (this.hasRoomEdit || this.hasRoomDelete) && (index.h("div", { key: '86946bc73f949759842c508b0a4a5f8637221fc0', class: "booking-room__actions" }, index.h("wa-dropdown", { key: '640774346bc6ce810f430d449699016a5a143d7f', "onwa-show": e => {
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
            } }, index.h("ir-custom-button", { key: 'fb41ed6ddeb583dd716e50c18a2f0261b585b451', slot: "trigger", size: "small", class: "booking-room__edit-button", appearance: "plain", id: `actions-room-${this.room.identifier}`, iconBtn: true, variant: "neutral", style: { marginBottom: '4px' } }, index.h("wa-icon", { key: '19206b8efbac0f67b851fb90874631896af356a8', style: { fontSize: '1rem' }, label: "Actions", name: "ellipsis-vertical" })), this.hasRoomEdit && index.h("wa-dropdown-item", { key: 'c2e0792fb7381d9993028d0523a985ab4b0af894', value: "edit" }, "Edit"), functions.isAgentMode(this.booking) && index.h("wa-dropdown-item", { key: '5616d501f3f4dec70ca709226fc3249369236120', value: "toggle" }, "Re-assign ", this.room.agent ? 'guest' : 'agent', " folio"), this.hasRoomDelete && (index.h("wa-dropdown-item", { key: '9061dbe0b2971835dfc8c6ad7369790d058098ba', value: "delete", variant: "danger" }, "Delete"))))))), index.h("div", { key: '488b37a870c78b6931a4fa2de629dd436e6803bc', class: "booking-room__dates-row" }, index.h("ir-date-view", { key: 'a6a3328884d790f90c3dee5efaabd077d0a0a29d', format: 'ddd, MMM DD, YYYY', class: "booking-room__date-view", from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), !calendarData.isSingleUnit(this.room.roomtype.id) && calendarData.calendar_data.is_frontdesk_enabled && this.room.unit && (
        // <div class={'d-flex justify-content-center align-items-center'}>
        //   <ir-tooltip message={(this.room.unit as IUnit).name} customSlot>
        //     <span slot="tooltip-trigger" class={`light-blue-bg  ${this.hasCheckIn || this.hasCheckOut ? 'mr-2' : ''} `}>
        //       {(this.room.unit as IUnit).name}
        //     </span>
        //   </ir-tooltip>
        // </div>
        index.h("ir-unit-tag", { key: '14e66ff0dd0e6a7795d7532acea87360c04f59d4', unit: this.room.unit.name })), this.hasCheckIn && (index.h("ir-custom-button", { key: '55109a39b4db653f9f23b64d796b7aabb78d2a65', onClickHandler: this.handleCheckIn.bind(this), id: "checkin", appearance: "outlined", variant: "brand" }, locales_store.locales.entries.Lcz_CheckIn)), this.hasCheckOut && (index.h("ir-custom-button", { key: 'febcb88a045f22a499e54c9a440cd964ae0e1ae0', appearance: "outlined", variant: "brand", onClickHandler: () => {
                this.modalReason = 'checkout';
            }, id: "checkout" }, locales_store.locales.entries.Lcz_CheckOut))), index.h("div", { key: '86b10da335e578b74d3a5e026db3b8d2f015799b', class: "booking-room__guest-row" }, index.h("p", { key: '1a4ac2b7886ba1175fd19843b83acb975f9047c2', class: "booking-room__text-reset booking-room__guest-name" }, `${this.mainGuest.first_name || ''} ${this.mainGuest.last_name || ''}`), this.room.rateplan.selected_variation.adult_nbr > 0 &&
            (this.room.unit ? (index.h(index.Fragment, null, index.h("wa-tooltip", { for: `view-guest-btn-${this.room.identifier}` }, "View guests"), index.h("ir-custom-button", { link: true, onClickHandler: () => this.showGuestModal(), id: `view-guest-btn-${this.room.identifier}`, variant: "brand", appearance: "plain" }, index.h("span", { innerHTML: this.formatVariation(this.room.occupancy) })))) : (index.h("span", { innerHTML: this.formatVariation(this.room.occupancy) }))), bed && index.h("p", { key: '4b48ca8ec87bcec1dc7edf40bb00a11a542fc306', class: "booking-room__text-reset booking-room__bed-info" }, "(", bed, ")")), this.includeDepartureTime && (index.h("div", { key: '56fae4cd2ca3063d5edc4cbcc5fe9779997f51d4', class: "booking-room__departure-row" }, index.h("p", { key: 'bd5bc0a1c9954a351a55005c82744ec87fc61fe5', class: "booking-room__text-reset booking-room__departure-label" }, "Expected departure time:"), index.h("wa-select", { key: '42d346603d7bf0450bb098c112a0944c832c0ff3', onchange: e => {
                this.updateDepartureTime(e.target.value);
            }, style: { width: '140px' }, size: "small", placeholder: "Not provided", value: this.room.departure_time?.code, defaultValue: this.room.departure_time?.code }, this.departureTime?.map(dt => (index.h("wa-option", { key: dt.CODE_NAME, value: dt.CODE_NAME }, dt[`CODE_VALUE_${this.language?.toUpperCase()}`] ?? dt[`CODE_VALUE_EN`]))))))), !this.collapsed && (index.h("div", { key: 'fe30f93c07424af549ea3598f85b1eddf28e0046', class: "booking-room__details-container" }, index.h("div", { key: '24471f29543c0bcacf2d77a38e565b3d9373e1e4', class: "booking-room__breakdown-row" }, index.h("div", { key: '3d024c0ef66184e1a41147b5c55c60d0997abbb5', class: "booking-room__breakdown-label-wrapper" }, index.h("p", { key: '5d873ad9bbc23fdf3f522935a5c8f8c363bd8bdf', class: "booking-room__breakdown-label" }, `${locales_store.locales.entries.Lcz_Breakdown}:`)), index.h("div", { key: '0da931ed5b43658b4fc566870152f81eb3bee9a7', class: "booking-room__breakdown-table" }, index.h("table", { key: '0bf4372bb9ae75cca69c1ad2406e71d231f21284' }, this.room.days.length > 0 &&
            this.room.days.map(room => {
                return (index.h("tr", null, index.h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, functions._getDay(room.date)), index.h("td", { class: "booking-room__cell booking-room__cell--right" }, utils.formatAmount(this.currency, room.amount)), room.cost > 0 && room.cost !== null && (index.h("td", { class: "booking-room__cell booking-room__cell--left booking-room__cell--pad-left night-cost" }, utils.formatAmount(this.currency, room.cost)))));
            }), index.h("tr", { key: 'c5bee5b0d961b15343b7bc937b3da6eadfea4d09', class: '' }, index.h("th", { key: '8a8d06bf040d0e29a56d13fc877c388b5b332ab0', class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right subtotal_row" }, locales_store.locales.entries.Lcz_SubTotal), index.h("th", { key: '38b57bfd4511fa226c539a081f08704127f3d17f', class: "booking-room__cell booking-room__cell--right subtotal_row" }, utils.formatAmount(this.currency, this.room.total)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (index.h("th", { key: '0736f97ba7300d4bf1805d67d7598c2ea8d26685', class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-left night-cost" }, utils.formatAmount(this.currency, this.room.cost)))), this.booking.is_direct ? (index.h(index.Fragment, null, (() => {
            const filtered_data = calendarData.calendar_data.taxes.filter(tx => tx.pct > 0 && tx.is_exlusive);
            return filtered_data.map(d => {
                const amount = d.is_exlusive
                    ? // Tax is added on top
                        this.room.total * d.pct
                    : // Tax is included in total → extract it
                        this.room.total - this.room.total / (1 + d.pct);
                return (index.h("tr", null, index.h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, d.is_exlusive ? locales_store.locales.entries.Lcz_Excluding : locales_store.locales.entries.Lcz_Including, " ", d.name, " (", d.pct, "%)"), index.h("td", { class: "booking-room__cell booking-room__cell--right" }, utils.formatAmount(this.currency, amount / 100)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (index.h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-left night-cost" }, utils.formatAmount(this.currency, (this.room.cost * d.pct) / 100)))));
            });
        })(), this.room.inclusive_taxes?.CALCULATED_INCLUSIVE_TAXES?.map(d => (index.h("tr", null, index.h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, locales_store.locales.entries.Lcz_Including, " ", d.TAX_NAME, " (", d.TAX_PCT * 100, "%)"), index.h("td", { class: "booking-room__cell booking-room__cell--right" }, utils.formatAmount(this.currency, d.CALCULATED_VALUE))))))) : (index.h(index.Fragment, null, (() => {
            const filtered_data = this.room.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (index.h("tr", null, index.h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, d.is_exlusive ? locales_store.locales.entries.Lcz_Excluding : locales_store.locales.entries.Lcz_Including, " ", d.name), index.h("td", { class: "booking-room__cell booking-room__cell--right" }, d.currency.symbol, d.amount)));
            });
        })()))))), index.h("ir-label", { key: '7dbe0d6b20820bee42a27cd2f3da291953541c45', labelText: `${locales_store.locales.entries.Lcz_SmokingOptions}:`, display: "inline", content: this.getSmokingLabel() }), this.booking.is_direct && (index.h(index.Fragment, { key: '1af1197f94c84a742b91d25292b0bf1319e4e9ef' }, this.room.rateplan.cancelation && (index.h("ir-label", { key: '712cdacf6114761faaaf48a2a966c6a480569503', labelText: `${locales_store.locales.entries.Lcz_Cancellation}:`, display: "inline", content: this.room.rateplan.cancelation || '', renderContentAsHtml: true })), this.room.rateplan.guarantee && (index.h("ir-label", { key: '91943bc259d941c1a94aad8b77b21c0af6ddc6f2', labelText: `${locales_store.locales.entries.Lcz_Guarantee}:`, display: "inline", content: this.room.rateplan.guarantee || '', renderContentAsHtml: true })))), this.room.ota_meta && (index.h("div", { key: 'aacf3682ea3069c75e35ee6114ef5368356a0a16' }, index.h("ir-label", { key: '814cfd557eec835474c6e77725aa83117dc62df8', labelText: `${locales_store.locales.entries.Lcz_MealPlan}:`, display: "inline", content: this.room.ota_meta.meal_plan }), index.h("ir-label", { key: '03dc4fd01185933d7a72a34795a192a536ba49c2', labelText: `${locales_store.locales.entries.Lcz_Policies}:`, display: "inline", content: this.room.ota_meta.policies }))))))), index.h("ir-assignment-toggle-dialog", { key: '506916df509dbc69b0dcfa4e8b3a80576e573154', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, onConfirmToggle: () => this.toggleRoomAgent() }, index.h("span", { key: '1209c888460f37c2c457dd3b034b024d2abbd819', slot: "message" }, "Move ", this.room.roomtype.name, " ", this.room.rateplan.short_name, " ", this.room.unit?.name, " to", ' ', index.h("b", { key: '71b448f9f2ad9437a445164bec6db369918ee7bc' }, this.room.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent'), " folio"), ".")), index.h("ir-dialog", { key: 'cefe6bc13dd52e755f202738676cece87c37006f', label: this.modalReason === 'delete' ? 'Alert' : locales_store.locales.entries.Lcz_Confirmation, ref: el => (this.modal = el), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalReason = null;
            }, lightDismiss: this.modalReason === 'checkin' }, index.h("p", { key: 'dd48e320d9936194faec88fc4d770f0dada437e8' }, this.renderModalMessage()), index.h("div", { key: '9d90ea4aaa9bad0e9e3145490ac36d0d0c907abd', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '95530280fa4de7473099c54141e481bdd83a373e', size: "medium", "data-dialog": "close", appearance: "filled", variant: "neutral" }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { key: 'e2ff0601cc02e579c8aaadc5a050db09d21e53d9', size: "medium", loading: this.isLoading, onClickHandler: e => this.handleModalConfirmation(e), variant: this.modalReason === 'delete' ? 'danger' : 'brand' }, this.modalReason === 'delete' ? locales_store.locales.entries.Lcz_Delete : locales_store.locales.entries.Lcz_Confirm))), index.h("ir-checkout-dialog", { key: 'c90eebf4fa6c7861857e9b17e1ce0df7cb0e71c0', onCheckoutDialogClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalReason = null;
                if (e.detail.reason === 'openInvoice') {
                    this.isOpen = true;
                }
                else if (e.detail.reason === 'checkout') {
                    this.resetBookingEvt.emit();
                }
            }, identifier: this.room.identifier, open: this.modalReason === 'checkout', booking: this.booking }), index.h("ir-invoice", { key: 'f3725f2cdcfadb6c35661cb09e57609e079cee9f', onInvoiceClose: e => {
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
        return (index.h("ir-drawer", { key: '3b73546570c488afb7cb4e554fb18ddca17ad55b', style: {
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
            } }, this.open && (index.h("ir-room-guests-form", { key: 'ba7b5db72d7190503d1a0f96e71e41605b715685', sharedPersons: this.sharedPersons, roomName: this.roomName, countries: this.countries, totalGuests: this.totalGuests, identifier: this.identifier, bookingNumber: this.bookingNumber, checkIn: this.checkIn, language: this.language, onLoadingChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail;
            } })), index.h("div", { key: 'ab822d3076ae4fceace5b46dae72e524dc6cc161', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '8609d6807ef613f69f072b7cd18ffdbd40dac0d7', size: "medium", "data-drawer": "close", appearance: "filled", variant: "neutral" }, locales_store.locales?.entries?.Lcz_Cancel ?? 'Save'), index.h("ir-custom-button", { key: '6070df02e54711c85478a142ba596a4313fe0157', value: "save", loading: this.isLoading === 'save', size: "medium", form: `room-guests__${this.identifier}`, type: "submit", variant: "brand" }, locales_store.locales?.entries?.Lcz_Save ?? 'Save'), this.checkIn && (index.h("ir-custom-button", { key: '9a7c6aabebcdf859fed4a6be7c26ef87a776a980', value: "save_checkin", loading: this.isLoading === 'save_checkin', size: "medium", form: `room-guests__${this.identifier}`, type: "submit", variant: "brand" }, locales_store.locales.entries?.Lcz_CheckIn ?? 'Check in')))));
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
            mask: index$2.MaskedRange,
            from: 1900,
            to: new Date().getFullYear(),
            placeholderChar: 'Y',
        },
        MM: {
            mask: index$2.MaskedRange,
            from: 1,
            to: 12,
            placeholderChar: 'M',
        },
        DD: {
            mask: index$2.MaskedRange,
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
            if (error instanceof index$1.ZodError) {
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
exports.ir_guest_info_drawer = IrGuestInfoDrawer;
exports.ir_guest_info_form = IrGuestInfoForm;
exports.ir_invoice = IrInvoice;
exports.ir_invoice_form = IrInvoiceForm;
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
exports.ir_proforma_invoice_preview = IrProformaInvoicePreview;
exports.ir_reservation_information = IrReservationInformation;
exports.ir_room = IrRoom;
exports.ir_room_guests = IrRoomGuests;
exports.ir_room_guests_form = IrRoomGuestsForm;
exports.ota_label = OtaLabel;

//# sourceMappingURL=igl-room-type_47.cjs.entry.js.map
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { f as formatAmount } from './utils.js';
import { c as calendar_data } from './calendar-data.js';
import { l as locales } from './locales.store.js';
import { H as HelpDocButton } from './HelpButton.js';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irApplicablePoliciesCss = ".sc-ir-applicable-policies-h{display:flex;flex-direction:column;gap:1rem}.applicable-policies__container.sc-ir-applicable-policies{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:1rem}.applicable-policies__title.sc-ir-applicable-policies{font-size:1rem;font-weight:700;padding:0;margin:0}.applicable-policies__no-penalty.sc-ir-applicable-policies{padding:0;margin:0;font-size:0.875rem}.applicable-policies__statements.sc-ir-applicable-policies{display:flex;flex-direction:column;gap:0.5rem;background:rgb(30, 159, 242, 5%);padding:0.5rem 1rem;border:1px solid rgba(30, 159, 242, 40%);border-radius:0.25rem;max-height:200px;overflow-y:auto}.applicable-policies__highlighted-bracket.sc-ir-applicable-policies{color:rgba(30, 159, 242, 100%)}.applicable-policies__statement.sc-ir-applicable-policies{display:flex;flex-direction:column;border-bottom:1px solid #e5e7eb;padding-bottom:0.5rem}.applicable-policies__statement.sc-ir-applicable-policies:last-child{border-bottom:0;padding-bottom:0}.applicable-policies__room.sc-ir-applicable-policies{padding:0;margin:0;padding-bottom:0.5rem}.applicable-policies__bracket.sc-ir-applicable-policies{display:grid;grid-template-columns:repeat(2, 1fr);gap:0.25rem;font-size:0.875rem;padding-bottom:0.5rem}.applicable-policies__bracket-dates.sc-ir-applicable-policies{display:flex;align-items:center;gap:0.5rem;padding:0;margin:0}.applicable-policies__amount.sc-ir-applicable-policies{text-align:right;padding:0;margin:0;font-weight:600}.applicable-policies__statement-text.sc-ir-applicable-policies{padding:0;margin:0}.applicable-policies__brackets-table.sc-ir-applicable-policies{display:none}.applicable-policies__guarantee.sc-ir-applicable-policies{display:flex;justify-content:space-between;align-items:center;padding:0.5rem 1rem;border:1px solid rgba(255, 73, 97, 40%);border-radius:6px;background-color:rgba(255, 73, 97, 10%);margin-bottom:0.5rem;font-size:0.875rem}.applicable-policies__guarantee-info.sc-ir-applicable-policies{display:flex;align-items:center;gap:0.5rem}.applicable-policies__guarantee-date.sc-ir-applicable-policies{color:var(--text-muted, #666);padding:0;margin:0}.applicable-policies__guarantee-amount.sc-ir-applicable-policies{font-weight:600;color:var(--text-strong, #222);padding:0;margin:0}.applicable-policies__guarantee-label.sc-ir-applicable-policies{color:red;font-weight:700;padding:0;margin:0}.applicable-policies__guarantee-action.sc-ir-applicable-policies{width:fit-content}@media (min-width: 768px){.applicable-policies__brackets.sc-ir-applicable-policies{display:none}.applicable-policies__brackets-table.sc-ir-applicable-policies{display:block;width:100%;font-size:0.875rem}.applicable-policies__brackets-table.sc-ir-applicable-policies table.sc-ir-applicable-policies{width:100%}.applicable-policies__amount.sc-ir-applicable-policies,.applicable-policies__bracket-dates.sc-ir-applicable-policies{white-space:nowrap}.applicable-policies__statement-text.sc-ir-applicable-policies{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}}";
const IrApplicablePoliciesStyle0 = irApplicablePoliciesCss;

const IrApplicablePolicies = /*@__PURE__*/ proxyCustomElement(class IrApplicablePolicies extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.generatePayment = createEvent(this, "generatePayment", 7);
        this.language = 'en';
        this.cancellationStatements = [];
        this.isLoading = false;
    }
    componentWillLoad() {
        this.loadApplicablePolicies();
    }
    handleBookingChange() {
        this.loadApplicablePolicies();
    }
    async loadApplicablePolicies() {
        this.isLoading = true;
        try {
            const getPoliciesByType = (policies, type) => {
                return policies.find(p => p.type === type);
            };
            const statements = [];
            let total = 0;
            this.booking.rooms.forEach(room => {
                var _a, _b;
                const cancellationPolicy = getPoliciesByType(room.applicable_policies, 'cancelation');
                const guaranteePolicy = getPoliciesByType(room.applicable_policies, 'guarantee');
                if (cancellationPolicy) {
                    statements.push(Object.assign(Object.assign({}, cancellationPolicy), { roomType: room.roomtype, ratePlan: room.rateplan, brackets: cancellationPolicy.brackets
                            .map((bracket, index) => {
                            var _a;
                            if (bracket.amount > 0) {
                                return bracket;
                            }
                            if (index < (cancellationPolicy === null || cancellationPolicy === void 0 ? void 0 : cancellationPolicy.brackets.length) - 1 && ((_a = cancellationPolicy.brackets[index + 1]) === null || _a === void 0 ? void 0 : _a.amount) > 0) {
                                return bracket;
                            }
                        })
                            .filter(Boolean), checkInDate: room.from_date }));
                }
                if (guaranteePolicy) {
                    total += (_b = (_a = this.getCurrentBracket(guaranteePolicy.brackets)) === null || _a === void 0 ? void 0 : _a.gross_amount) !== null && _b !== void 0 ? _b : 0;
                }
            });
            this.guaranteeAmount = total;
            this.cancellationStatements = [...statements];
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
        return this.handleMultipleBrackets(bracket, index, brackets, checkInDate);
    }
    handleSingleBracket(bracketDueDate, checkInDate) {
        return {
            leftLabel: bracketDueDate.format('MMM DD'),
            showArrow: true,
            rightLabel: hooks(checkInDate, 'YYYY-MM-DD').format('MMM DD, YYYY'),
        };
    }
    handleMultipleBrackets(bracket, index, brackets, checkInDate) {
        const bracketDueDate = hooks(bracket.due_on, 'YYYY-MM-DD');
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
                rightLabel: nextBracketDueDate.format('MMM DD, YYYY'),
            };
        }
        // Last bracket
        if (index === brackets.length - 1) {
            return {
                leftLabel: bracketDueDate.clone().add(1, 'days').format('MMM DD'),
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
        const periodEndDate = nextBracketDueDate.clone();
        return {
            leftLabel: this.formatPreviousBracketDueOn(bracketDueDate, periodEndDate),
            showArrow: true,
            rightLabel: periodEndDate.format('MMM DD, YYYY'),
        };
    }
    getCurrentBracket(brackets) {
        const today = hooks();
        for (const bracket of brackets) {
            if (today.isSameOrAfter(hooks(bracket.due_on, 'YYYY-MM-DD'), 'days')) {
                return bracket;
            }
        }
        return null;
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
    checkCurrentBracket(bracket, nextBracket) {
        if (!(bracket === null || bracket === void 0 ? void 0 : bracket.due_on))
            return false;
        const today = hooks().startOf('day');
        const start = hooks(bracket.due_on, 'YYYY-MM-DD', true).startOf('day');
        if (!start.isValid())
            return false;
        // If there's no next bracket, this one applies from its start onward.
        if (!(nextBracket === null || nextBracket === void 0 ? void 0 : nextBracket.due_on)) {
            return today.isSameOrAfter(start, 'day');
        }
        const end = hooks(nextBracket.due_on, 'YYYY-MM-DD', true).startOf('day');
        if (!end.isValid()) {
            return today.isSameOrAfter(start, 'day');
        }
        // Active if today ∈ [start, end)
        return today.isSameOrAfter(start, 'day') && today.isBefore(end, 'day');
    }
    render() {
        var _a, _b;
        if (this.isLoading) {
            return null;
        }
        const remainingGuaranteeAmount = this.booking.financial.collected - this.guaranteeAmount;
        console.log(this.cancellationStatements);
        return (h(Host, null, this.guaranteeAmount !== 0 && (h("section", null, h("div", { class: "applicable-policies__guarantee" }, h("div", { class: "applicable-policies__guarantee-info" }, h("p", { class: "applicable-policies__guarantee-date" }, hooks(this.booking.booked_on.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { class: "applicable-policies__guarantee-amount" }, h("span", { class: "px-1" }, formatAmount(calendar_data.currency.symbol, remainingGuaranteeAmount < 0 ? Math.abs(remainingGuaranteeAmount) : this.guaranteeAmount))), h("p", { class: "applicable-policies__guarantee-label" }, "Guarantee ", remainingGuaranteeAmount < 0 ? 'balance' : '')), remainingGuaranteeAmount < 0 && (h("div", { class: "applicable-policies__guarantee-action" }, h("ir-button", { btn_color: "dark", text: "Pay", size: "sm", onClickHandler: () => {
                this.generatePayment.emit({
                    amount: Math.abs(remainingGuaranteeAmount),
                    currency: calendar_data.currency,
                    due_on: hooks().format('YYYY-MM-DD'),
                    pay_type_code: null,
                    reason: '',
                    type: 'OVERDUE',
                });
            } })))))), h("section", null, h("div", { class: "applicable-policies__container" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("p", { class: "applicable-policies__title font-size-large p-0 m-0" }, "Cancellation Schedule"), h(HelpDocButton, { message: "Help", href: "https://help.igloorooms.com/extranet/booking-details/guarantee-and-cancellation" })), h("p", { class: "applicable-policies__no-penalty" }, this.generateCancellationStatement())), ((_a = this.cancellationStatements) === null || _a === void 0 ? void 0 : _a.length) > 0 && (h("div", { class: "applicable-policies__statements" }, (_b = this.cancellationStatements) === null || _b === void 0 ? void 0 : _b.map(statement => (h("div", { class: "applicable-policies__statement" }, this.cancellationStatements.length > 1 && (h("p", { class: "applicable-policies__room" }, h("b", null, statement.roomType.name), " ", statement.ratePlan['short_name'], " ", statement.ratePlan.is_non_refundable ? ` - ${locales.entries.Lcz_NonRefundable}` : '')), h("div", { class: "applicable-policies__brackets" }, statement.brackets.map((bracket, idx) => {
            const { leftLabel, rightLabel, showArrow } = this.getBracketLabelsAndArrowState({
                index: idx,
                bracket,
                brackets: statement.brackets,
                checkInDate: statement.checkInDate,
            });
            const isInCurrentBracket = this.checkCurrentBracket(bracket, idx < statement.brackets.length - 1 ? statement.brackets[idx + 1] : null);
            return (h("div", { class: { 'applicable-policies__bracket': true, 'applicable-policies__highlighted-bracket': isInCurrentBracket } }, h("p", { class: "applicable-policies__bracket-dates" }, leftLabel, " ", showArrow && h("ir-icons", { name: "arrow_right", class: "applicable-policies__icon", style: { '--icon-size': '0.875rem' } }), " ", rightLabel), h("p", { class: "applicable-policies__amount" }, formatAmount(calendar_data.currency.symbol, bracket.gross_amount)), h("p", { class: "applicable-policies__statement-text" }, bracket.amount === 0 ? 'No penalty' : bracket.statement)));
        })), h("div", { class: "applicable-policies__brackets-table" }, h("table", null, h("tbody", null, statement.brackets.map((bracket, idx) => {
            const { leftLabel, rightLabel, showArrow } = this.getBracketLabelsAndArrowState({
                index: idx,
                bracket,
                brackets: statement.brackets,
                checkInDate: statement.checkInDate,
            });
            const isInCurrentBracket = this.checkCurrentBracket(bracket, idx < statement.brackets.length - 1 ? statement.brackets[idx + 1] : null);
            return (h("tr", { class: { 'applicable-policies__highlighted-bracket': isInCurrentBracket } }, h("td", { class: "applicable-policies__bracket-dates" }, leftLabel, " ", showArrow && h("ir-icons", { name: "arrow_right", class: "applicable-policies__icon", style: { '--icon-size': '0.875rem' } }), ' ', rightLabel), h("td", { class: "applicable-policies__amount px-1" }, formatAmount(calendar_data.currency.symbol, bracket.gross_amount)), h("td", { class: "applicable-policies__statement-text" }, bracket.amount === 0 ? 'No penalty' : bracket.statement)));
        }))))))))))));
    }
    static get watchers() { return {
        "booking": ["handleBookingChange"]
    }; }
    static get style() { return IrApplicablePoliciesStyle0; }
}, [2, "ir-applicable-policies", {
        "booking": [16],
        "propertyId": [2, "property-id"],
        "language": [1],
        "cancellationStatements": [32],
        "isLoading": [32],
        "guaranteeAmount": [32]
    }, undefined, {
        "booking": ["handleBookingChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-applicable-policies", "ir-button", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-applicable-policies":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrApplicablePolicies);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrApplicablePolicies as I, defineCustomElement as d };

//# sourceMappingURL=ir-applicable-policies2.js.map
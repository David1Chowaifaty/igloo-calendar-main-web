import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../../utils/utils";
import calendar_data from "../../../../stores/calendar-data";
import locales from "../../../../stores/locales.store";
import { HelpDocButton } from "../../../HelpButton";
import { ApplicablePoliciesService } from "../../../../services/applicable-policies.service";
import { BookingService } from "../../../../services/booking.service";
export class IrApplicablePolicies {
    constructor() {
        this.language = 'en';
        this.cancellationStatements = [];
        this.isLoading = false;
        this.shouldShowCancellationBrackets = true;
        this.applicablePoliciesService = new ApplicablePoliciesService(new BookingService());
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
        const bookedOnDate = moment(this.booking.booked_on.date, 'YYYY-MM-DD');
        const bracketDueDate = moment(bracket.due_on, 'YYYY-MM-DD');
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
        const momentCheckInDate = moment(checkInDate, 'YYYY-MM-DD');
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
            rightLabel: moment(checkInDate, 'YYYY-MM-DD').format('MMM DD, YYYY'),
        };
    }
    handleMultipleBrackets(bracket, index, brackets, checkInDate) {
        const bracketDueDate = moment(bracket.due_on, 'YYYY-MM-DD');
        const momentCheckInDate = moment(checkInDate, 'YYYY-MM-DD');
        // First bracket
        if (index === 0) {
            const nextBracket = brackets[index + 1];
            if (!nextBracket) {
                return { leftLabel: null, rightLabel: null, showArrow: false };
            }
            let nextBracketDueDate = moment(nextBracket.due_on, 'YYYY-MM-DD');
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
        if (moment(bracket.due_on, 'YYYY-MM-DD').isSameOrAfter(momentCheckInDate, 'days')) {
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
                rightLabel: moment(checkInDate).format('MMM DD, YYYY'),
            };
        }
        // Middle brackets
        const nextBracket = brackets[index + 1];
        if (!nextBracket) {
            return { leftLabel: null, rightLabel: null, showArrow: false };
        }
        const nextBracketDueDate = moment(nextBracket.due_on, 'YYYY-MM-DD');
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
        const today = moment().startOf('day');
        // Parse + validate + sort ascending by due_on
        const parsed = brackets
            .map(b => ({ b, date: moment(b.due_on, 'YYYY-MM-DD', true).startOf('day') }))
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
        var _a, _b;
        if (this.isLoading) {
            return null;
        }
        const remainingGuaranteeAmount = this.booking.financial.collected - this.guaranteeAmount;
        return (h(Host, null, this.guaranteeAmount !== 0 && (h("section", null, h("div", { class: "applicable-policies__guarantee" }, h("div", { class: "applicable-policies__guarantee-info" }, h("p", { class: "applicable-policies__guarantee-date" }, moment(this.booking.booked_on.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { class: "applicable-policies__guarantee-amount" }, h("span", { class: "px-1" }, formatAmount(calendar_data.currency.symbol, remainingGuaranteeAmount < 0 ? Math.abs(remainingGuaranteeAmount) : this.guaranteeAmount))), h("p", { class: "applicable-policies__guarantee-label" }, "Guarantee ", remainingGuaranteeAmount < 0 ? 'balance' : '')), remainingGuaranteeAmount < 0 && (h("div", { class: "applicable-policies__guarantee-action" }, h("ir-button", { btn_color: "dark", text: "Pay", size: "sm", onClickHandler: () => {
                this.generatePayment.emit({
                    amount: Math.abs(remainingGuaranteeAmount),
                    currency: calendar_data.currency,
                    due_on: moment().format('YYYY-MM-DD'),
                    pay_type_code: null,
                    reason: '',
                    type: 'OVERDUE',
                });
            } })))))), h("section", null, h("div", { class: "applicable-policies__container" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("p", { class: "applicable-policies__title font-size-large p-0 m-0" }, "Cancellation Schedule"), h(HelpDocButton, { message: "Help", href: "https://help.igloorooms.com/extranet/booking-details/guarantee-and-cancellation" })), h("p", { class: "applicable-policies__no-penalty" }, this.generateCancellationStatement())), ((_a = this.cancellationStatements) === null || _a === void 0 ? void 0 : _a.length) > 0 && this.shouldShowCancellationBrackets && (h("div", { class: "applicable-policies__statements" }, (_b = this.cancellationStatements) === null || _b === void 0 ? void 0 : _b.map(statement => {
            const currentBracket = this._getCurrentBracket(statement.brackets);
            // const isTodaySameOrAfterCheckInDate = moment().isSameOrAfter(moment(statement.checkInDate, 'YYYY-MM-DD').add(1, 'days'));
            return (h("div", { class: "applicable-policies__statement" }, this.cancellationStatements.length > 1 && (h("p", { class: "applicable-policies__room" }, h("b", null, statement.roomType.name), " ", statement.ratePlan['short_name'], " ", statement.ratePlan.is_non_refundable ? ` - ${locales.entries.Lcz_NonRefundable}` : '')), h("div", { class: "applicable-policies__brackets" }, statement.brackets.map((bracket, idx) => {
                const { leftLabel, rightLabel, showArrow } = this.getBracketLabelsAndArrowState({
                    index: idx,
                    bracket,
                    brackets: statement.brackets,
                    checkInDate: statement.checkInDate,
                });
                const isInCurrentBracket = moment(bracket.due_on, 'YYYY-MM-DD').isSame(currentBracket, 'date');
                return (h("div", { class: { 'applicable-policies__bracket': true, 'applicable-policies__highlighted-bracket': isInCurrentBracket } }, h("p", { class: "applicable-policies__bracket-dates" }, leftLabel, " ", showArrow && h("ir-icons", { name: "arrow_right", class: "applicable-policies__icon", style: { '--icon-size': '0.875rem' } }), ' ', rightLabel), h("p", { class: "applicable-policies__amount" }, formatAmount(calendar_data.currency.symbol, bracket.gross_amount)), h("p", { class: "applicable-policies__statement-text" }, bracket.amount === 0 ? 'No penalty' : bracket.statement)));
            })), h("div", { class: "applicable-policies__brackets-table" }, h("table", null, h("tbody", null, statement.brackets.map((bracket, idx) => {
                const { leftLabel, rightLabel, showArrow } = this.getBracketLabelsAndArrowState({
                    index: idx,
                    bracket,
                    brackets: statement.brackets,
                    checkInDate: statement.checkInDate,
                });
                const isInCurrentBracket = moment(bracket.due_on, 'YYYY-MM-DD').isSame(currentBracket, 'date');
                return (h("tr", { class: { 'applicable-policies__highlighted-bracket': isInCurrentBracket } }, h("td", { class: "applicable-policies__bracket-dates" }, leftLabel, " ", showArrow && h("ir-icons", { name: "arrow_right", class: "applicable-policies__icon", style: { '--icon-size': '0.875rem' } }), ' ', rightLabel), h("td", { class: "applicable-policies__amount px-1" }, formatAmount(calendar_data.currency.symbol, bracket.gross_amount)), h("td", { class: "applicable-policies__statement-text" }, bracket.amount === 0 ? 'No penalty' : bracket.statement)));
            }))))));
        }))))));
    }
    static get is() { return "ir-applicable-policies"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-applicable-policies.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-applicable-policies.css"]
        };
    }
    static get properties() {
        return {
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "propertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "property-id",
                "reflect": false
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "language",
                "reflect": false,
                "defaultValue": "'en'"
            }
        };
    }
    static get states() {
        return {
            "cancellationStatements": {},
            "isLoading": {},
            "guaranteeAmount": {}
        };
    }
    static get events() {
        return [{
                "method": "generatePayment",
                "name": "generatePayment",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IPaymentAction",
                    "resolved": "IPaymentAction",
                    "references": {
                        "IPaymentAction": {
                            "location": "import",
                            "path": "@/services/payment.service",
                            "id": "src/services/payment.service.ts::IPaymentAction"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "booking",
                "methodName": "handleBookingChange"
            }];
    }
}
//# sourceMappingURL=ir-applicable-policies.js.map

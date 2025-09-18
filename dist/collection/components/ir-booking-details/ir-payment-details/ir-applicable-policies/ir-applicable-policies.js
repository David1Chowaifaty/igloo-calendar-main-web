import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../../utils/utils";
import calendar_data from "../../../../stores/calendar-data";
import locales from "../../../../stores/locales.store";
export class IrApplicablePolicies {
    constructor() {
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
                    total += (_b = (_a = this.getCurrentBracket(guaranteePolicy.brackets)) === null || _a === void 0 ? void 0 : _a.amount) !== null && _b !== void 0 ? _b : 0;
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
        return this.handleMultipleBrackets(bracket, index, brackets, checkInDate);
    }
    handleSingleBracket(bracketDueDate, checkInDate) {
        return {
            leftLabel: bracketDueDate.format('MMM DD'),
            showArrow: true,
            rightLabel: moment(checkInDate, 'YYYY-MM-DD').format('MMM DD, YYYY'),
        };
    }
    handleMultipleBrackets(bracket, index, brackets, checkInDate) {
        const bracketDueDate = moment(bracket.due_on, 'YYYY-MM-DD');
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
                rightLabel: nextBracketDueDate.format('MMM DD, YYYY'),
            };
        }
        // Last bracket
        if (index === brackets.length - 1) {
            return {
                leftLabel: bracketDueDate.format('MMM DD'),
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
        const periodEndDate = nextBracketDueDate.clone().subtract(1, 'day');
        return {
            leftLabel: this.formatPreviousBracketDueOn(bracketDueDate, periodEndDate),
            showArrow: true,
            rightLabel: periodEndDate.format('MMM DD, YYYY'),
        };
    }
    getCurrentBracket(brackets) {
        const today = moment();
        for (const bracket of brackets) {
            if (today.isSameOrAfter(moment(bracket.due_on, 'YYYY-MM-DD'), 'days')) {
                return bracket;
            }
        }
        return null;
    }
    generateCancellationStatement() {
        const label = 'if cancelled today';
        const { cancelation_penality_as_if_today } = this.booking.financial;
        if (cancelation_penality_as_if_today === 0) {
            return `No penalty ${label}`;
        }
        return `${cancelation_penality_as_if_today < 0 ? 'Refund' : 'Charge'} ${formatAmount(calendar_data.currency.symbol, Math.abs(cancelation_penality_as_if_today))} ${label}`;
    }
    render() {
        var _a;
        if (this.isLoading) {
            return null;
        }
        const remainingGuaranteeAmount = this.booking.financial.collected - this.guaranteeAmount;
        console.log(this.cancellationStatements);
        return (h(Host, null, this.guaranteeAmount !== 0 && (h("section", null, h("div", { class: "applicable-policies__guarantee" }, h("div", { class: "applicable-policies__guarantee-info" }, h("p", { class: "applicable-policies__guarantee-date" }, moment(this.booking.booked_on.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { class: "applicable-policies__guarantee-amount" }, h("span", { class: "px-1" }, formatAmount(calendar_data.currency.symbol, remainingGuaranteeAmount < 0 ? Math.abs(remainingGuaranteeAmount) : this.guaranteeAmount))), h("p", { class: "applicable-policies__guarantee-label" }, "Guarantee ", remainingGuaranteeAmount < 0 ? 'balance' : '')), remainingGuaranteeAmount < 0 && (h("div", { class: "applicable-policies__guarantee-action" }, h("ir-button", { btn_color: "dark", text: "Pay", size: "sm", onClickHandler: () => {
                this.generatePayment.emit({
                    amount: Math.abs(remainingGuaranteeAmount),
                    currency: calendar_data.currency,
                    due_on: moment().format('YYYY-MM-DD'),
                    pay_type_code: null,
                    reason: '',
                    type: 'OVERDUE',
                });
            } })))))), h("section", null, h("div", { class: "applicable-policies__container" }, h("p", { class: "applicable-policies__title font-size-large p-0 m-0" }, "Cancellation Schedule"), h("p", { class: "applicable-policies__no-penalty" }, this.generateCancellationStatement())), h("div", { class: "applicable-policies__statements" }, (_a = this.cancellationStatements) === null || _a === void 0 ? void 0 : _a.map(statement => (h("div", { class: "applicable-policies__statement" }, this.cancellationStatements.length > 1 && (h("p", { class: "applicable-policies__room" }, h("b", null, statement.roomType.name), " ", statement.ratePlan['short_name'], " ", statement.ratePlan.is_non_refundable ? ` - ${locales.entries.Lcz_NonRefundable}` : '')), h("div", { class: "applicable-policies__brackets" }, statement.brackets.map((bracket, idx) => {
            const { leftLabel, rightLabel, showArrow } = this.getBracketLabelsAndArrowState({
                index: idx,
                bracket,
                brackets: statement.brackets,
                checkInDate: statement.checkInDate,
            });
            return (h("div", { class: "applicable-policies__bracket" }, h("p", { class: "applicable-policies__bracket-dates" }, leftLabel, " ", showArrow && h("ir-icons", { name: "arrow_right", class: "applicable-policies__icon", style: { '--icon-size': '0.875rem' } }), " ", rightLabel), h("p", { class: "applicable-policies__amount" }, formatAmount(calendar_data.currency.symbol, bracket.amount)), h("p", { class: "applicable-policies__statement-text" }, bracket.amount === 0 ? 'No penalty' : bracket.statement)));
        })), h("div", { class: "applicable-policies__brackets-table" }, h("table", null, h("tbody", null, statement.brackets.map((bracket, idx) => {
            const { leftLabel, rightLabel, showArrow } = this.getBracketLabelsAndArrowState({
                index: idx,
                bracket,
                brackets: statement.brackets,
                checkInDate: statement.checkInDate,
            });
            return (h("tr", null, h("td", { class: "applicable-policies__bracket-dates" }, leftLabel, " ", showArrow && h("ir-icons", { name: "arrow_right", class: "applicable-policies__icon", style: { '--icon-size': '0.875rem' } }), ' ', rightLabel), h("td", { class: "applicable-policies__amount px-1" }, formatAmount(calendar_data.currency.symbol, bracket.amount)), h("td", { class: "applicable-policies__statement-text" }, bracket.amount === 0 ? 'No penalty' : bracket.statement)));
        })))))))))));
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

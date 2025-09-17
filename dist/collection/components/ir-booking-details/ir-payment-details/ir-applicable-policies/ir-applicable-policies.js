import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../../utils/utils";
import calendar_data from "../../../../stores/calendar-data";
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
                    statements.push(Object.assign(Object.assign({}, cancellationPolicy), { roomType: room.roomtype, ratePlan: room.rateplan, brackets: cancellationPolicy.brackets.filter(b => b.amount > 0), checkInDate: room.from_date }));
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
    getBracketLabelsAndArrowState({ bracket, index, brackets }) {
        var _a;
        let leftLabel = '';
        let showArrow = true;
        let rightLabel = '';
        const MCheckInDate = moment(this.booking.booked_on.date, 'YYYY-MM-DD');
        if (brackets.length === 1) {
            const d1 = moment(bracket.due_on, 'YYYY-MM-DD');
            const isSameDay = d1.isSame(MCheckInDate, 'dates');
            leftLabel = isSameDay ? null : this.formatPreviousBracketDueOn(d1, MCheckInDate);
            showArrow = !isSameDay;
            rightLabel = MCheckInDate.format('MMM DD, YYYY');
        }
        else if (brackets.length > 1) {
            if (index === 0) {
                leftLabel = 'Until';
                showArrow = false;
                rightLabel = moment((_a = brackets[index + 1]) === null || _a === void 0 ? void 0 : _a.due_on, 'YYYY-MM-DD').format('MMM DD, YYYY');
            }
            else if (index === brackets.length - 1) {
                const leftDate = moment(bracket.due_on, 'YYYY-MM-DD');
                leftLabel = this.formatPreviousBracketDueOn(leftDate, MCheckInDate);
                rightLabel = MCheckInDate.format('MMM DD, YYYY');
            }
            else {
                const d1 = moment(bracket.due_on, 'YYYY-MM-DD');
                const d2 = moment(brackets[index + 1].due_on, 'YYYY-MM-DD').add(-1, 'days');
                leftLabel = this.formatPreviousBracketDueOn(d1, d2);
                rightLabel = d2.format('MMM DD, YYYY');
            }
        }
        return { leftLabel, rightLabel, showArrow };
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
        return (h(Host, null, this.guaranteeAmount && (h("section", null, h("div", { class: "applicable-policies__guarantee" }, h("div", { class: "applicable-policies__guarantee-info" }, h("p", { class: "applicable-policies__guarantee-date" }, moment(this.booking.booked_on.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { class: "applicable-policies__guarantee-amount" }, formatAmount(calendar_data.currency.symbol, this.guaranteeAmount)), h("p", { class: "applicable-policies__guarantee-label" }, "Guarantee")), remainingGuaranteeAmount < 0 && (h("div", { class: "applicable-policies__guarantee-action" }, h("ir-button", { btn_color: "dark", text: "Pay", size: "sm", onClickHandler: () => {
                this.generatePayment.emit({
                    amount: Math.abs(remainingGuaranteeAmount),
                    currency: calendar_data.currency,
                    due_on: moment().format('YYYY-MM-DD'),
                    pay_type_code: null,
                    reason: '',
                    type: 'OVERDUE',
                });
            } })))))), h("section", null, h("div", { class: "applicable-policies__container" }, h("p", { class: "applicable-policies__title font-size-large p-0 m-0" }, "Cancellation Schedule"), h("p", { class: "applicable-policies__no-penalty" }, this.generateCancellationStatement())), h("div", { class: "applicable-policies__statements" }, (_a = this.cancellationStatements) === null || _a === void 0 ? void 0 : _a.map(statement => (h("div", { class: "applicable-policies__statement" }, this.cancellationStatements.length > 1 && (h("p", { class: "applicable-policies__room" }, h("b", null, statement.roomType.name), " ", statement.ratePlan['short_name'])), h("div", { class: "applicable-policies__brackets" }, statement.brackets.map((bracket, idx) => {
            const { leftLabel, rightLabel, showArrow } = this.getBracketLabelsAndArrowState({
                index: idx,
                bracket,
                brackets: statement.brackets,
            });
            return (h("div", { class: "applicable-policies__bracket" }, h("p", { class: "applicable-policies__bracket-dates" }, leftLabel, " ", showArrow && h("ir-icons", { name: "arrow_right", class: "applicable-policies__icon", style: { '--icon-size': '0.875rem' } }), " ", rightLabel), h("p", { class: "applicable-policies__amount" }, formatAmount(calendar_data.currency.symbol, bracket.amount)), h("p", { class: "applicable-policies__statement-text" }, bracket.statement)));
        })), h("div", { class: "applicable-policies__brackets-table" }, h("table", null, h("tbody", null, statement.brackets.map((bracket, idx) => {
            const { leftLabel, rightLabel, showArrow } = this.getBracketLabelsAndArrowState({
                index: idx,
                bracket,
                brackets: statement.brackets,
            });
            return (h("tr", null, h("td", { class: "applicable-policies__bracket-dates" }, leftLabel, " ", showArrow && h("ir-icons", { name: "arrow_right", class: "applicable-policies__icon", style: { '--icon-size': '0.875rem' } }), ' ', rightLabel), h("td", { class: "applicable-policies__amount px-1" }, formatAmount(calendar_data.currency.symbol, bracket.amount)), h("td", { class: "applicable-policies__statement-text" }, bracket.statement)));
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

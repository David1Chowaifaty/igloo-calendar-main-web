import calendar_data from "../../../../stores/calendar-data";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrBalanceCell {
    financial;
    statusCode;
    isDirect;
    bookingNumber;
    currencySymbol;
    payBookingBalance;
    render() {
        return (h(Host, { key: '2ea63693ffb865d939f3ab026a72892a5bbc7607' }, h("p", { key: 'ffd7ec34c15e89655f05e16510ef56b51ae93db7', class: "ir-price" }, formatAmount(this.currencySymbol, this.financial.gross_total)), h("div", { key: '6c1faf957740334caa120268e298ab1713c78c05', class: "balance_button-container" }, ['003', '004'].includes(this.statusCode) && this.isDirect
            ? this.financial.cancelation_penality_as_if_today !== 0 &&
                this.financial.due_amount !== 0 && (h("ir-custom-button", { onClickHandler: () => {
                    this.payBookingBalance.emit({
                        booking_nbr: this.bookingNumber,
                        payment: {
                            amount: Math.abs(this.financial.cancelation_penality_as_if_today),
                            currency: calendar_data.property.currency,
                            date: moment().format('YYYY-MM-DD'),
                            designation: null,
                            payment_method: null,
                            payment_type: { code: '001', description: null, operation: null },
                            id: -1,
                            reference: '',
                        },
                    });
                }, style: { '--ir-c-btn-height': '1.3125rem' }, size: "small", variant: "danger", appearance: "outlined" }, h("span", null, this.financial.cancelation_penality_as_if_today < 0 ? 'Refund' : 'Charge', " "), formatAmount(this.currencySymbol, Math.abs(this.financial.cancelation_penality_as_if_today))))
            : this.financial.due_amount !== 0 && (h("ir-custom-button", { onClickHandler: () => {
                    this.payBookingBalance.emit({
                        booking_nbr: this.bookingNumber,
                        payment: {
                            amount: this.financial.due_amount,
                            currency: calendar_data.property.currency,
                            date: moment().format('YYYY-MM-DD'),
                            designation: null,
                            payment_method: null,
                            payment_type: { code: '001', description: null, operation: null },
                            id: -1,
                            reference: '',
                        },
                    });
                }, style: { '--ir-c-btn-height': '1.5rem' }, size: "small", variant: "danger", appearance: "outlined" }, formatAmount(this.currencySymbol, this.financial.due_amount))))));
    }
    static get is() { return "ir-balance-cell"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-balance-cell.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-balance-cell.css"]
        };
    }
    static get properties() {
        return {
            "financial": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking['financial']",
                    "resolved": "IFinancial",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "statusCode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "status-code",
                "reflect": false
            },
            "isDirect": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "is-direct",
                "reflect": false
            },
            "bookingNumber": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "booking-number",
                "reflect": false
            },
            "currencySymbol": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "currency-symbol",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "payBookingBalance",
                "name": "payBookingBalance",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ booking_nbr: string; payment: Payment }",
                    "resolved": "{ booking_nbr: string; payment: Payment; }",
                    "references": {
                        "Payment": {
                            "location": "import",
                            "path": "@/components/ir-booking-details/types",
                            "id": "src/components/ir-booking-details/types.ts::Payment"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-balance-cell.js.map

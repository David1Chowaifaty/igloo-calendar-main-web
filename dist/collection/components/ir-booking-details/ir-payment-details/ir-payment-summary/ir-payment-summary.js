import locales from "../../../../stores/locales.store";
import { formatAmount } from "../../../../utils/utils";
import { h } from "@stencil/core";
import { isAgentMode } from "../../functions";
import { ClTxTypeCode } from "../../../../types/enums";
export class IrPaymentSummary {
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
        h("div", { class: "ps-layout" }, h("div", { class: "ps-cols" }, h("div", { class: "ps-col " }, h("div", { class: "ps-stacked " }, h("span", { class: "ps-stacked__label" }, locales.entries.Lcz_Balance, ":"), h("span", { class: "ps-stacked__value ps-stacked__value--danger" }, formatAmount(this.currency.symbol, this.balance))), h("div", { class: "ps-stacked" }, h("span", { class: "ps-stacked__label" }, locales.entries.Lcz_Collected, ":"), h("span", { class: "ps-stacked__value" }, formatAmount(this.currency.symbol, this.collected)))), h("div", { class: "ps-col" }, this.shouldShowTotalCost() && (h("div", { class: "ps-stacked --stacked-right" }, h("span", { class: "ps-stacked__label ps-stacked__value" }, locales.entries.Lcz_TotalCost), h("span", { class: "ps-stacked__value" }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { class: "ps-stacked --stacked-right" }, h("span", { class: "ps-stacked__label ps-stacked__value" }, "Grand Total:"), h("span", { class: "ps-stacked__value" }, formatAmount(this.currency.symbol, this.booking.financial?.gross_total ?? 0)))))));
    }
    static get is() { return "ir-payment-summary"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-payment-summary.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-payment-summary.css"]
        };
    }
    static get properties() {
        return {
            "totalCost": {
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
                "reflect": false,
                "attribute": "total-cost"
            },
            "balance": {
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
                "reflect": false,
                "attribute": "balance"
            },
            "collected": {
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
                "reflect": false,
                "attribute": "collected"
            },
            "currency": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Currency",
                    "resolved": "Currency",
                    "references": {
                        "Currency": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::Currency",
                            "referenceLocation": "Currency"
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
            "isBookingCancelled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "reflect": false,
                "attribute": "is-booking-cancelled"
            },
            "isAllServicesAgentOwned": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "reflect": false,
                "attribute": "is-all-services-agent-owned"
            },
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
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
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
            "agent": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Agent",
                    "resolved": "{ name?: string; id?: number; email?: string; property_id?: any; code?: string; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent",
                            "referenceLocation": "Agent"
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
            "clTransactions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ClTx[]",
                    "resolved": "{ PR_ID?: number; ENTRY_DATE?: string; ENTRY_USER_ID?: number; OWNER_ID?: number; DOC_NUMBER?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; EXTERNAL_REF?: string; FD_ID?: number; BH_ID?: number; BSA_REF?: string; CATEGORY?: string; AGENT_BOOKING_NBR?: string; ADULTS_NBR?: number; CHILD_NBR?: number; INFANT_NBR?: number; GUEST_FIRST_NAME?: string; GUEST_LAST_NAME?: string; ROOM_CATEGORY_ID?: number; ROOM_TYPE_ID?: number; RATE_PLAN_ID?: number; SERVICE_DATE?: string; CITY_TAX_AMOUNT?: number; CITY_TAX_PERCENT?: number; CL_TX_ID?: number; CL_TX_TYPE_CODE?: string; DESCRIPTION?: string; IS_HOLD?: boolean; IS_LOCKED?: boolean; My_Bh?: any; My_Currency?: any; My_Fd?: { DOC_NUMBER?: string; FD_TYPE_CODE?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; AGENCY_NAME?: string; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT_DISPLAY?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; IS_PRINTED?: boolean; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT_DISPLAY?: string; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }; My_Pr?: any; My_Room_category?: any; RUNNING_BALANCE?: number; My_Room_type?: any; My_Travel_agency?: null; PAY_METHOD_CODE?: string; REL_ENTITY?: \"TBL_BSAD\" | \"TBL_BSP\"; REL_ENTITY_KEY?: number; TRAVEL_AGENCY_ID?: number; VAT_AMOUNT?: number; VAT_PERCENT?: number; }[]",
                    "references": {
                        "ClTx": {
                            "location": "import",
                            "path": "@/services/city-ledger/types",
                            "id": "src/services/city-ledger/types.ts::ClTx",
                            "referenceLocation": "ClTx"
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
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
}

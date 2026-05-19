import locales from "../../../../stores/locales.store";
import { formatAmount } from "../../../../utils/utils";
import { h } from "@stencil/core";
import { isAgentMode } from "../../functions";
export class IrPaymentSummary {
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
        if (isAgentMode(this.agent)) {
            return (h("div", { class: "ps-layout" }, h("div", { class: "ps-cols" }, !this.isAllServicesAgentOwned && (h("div", { class: "ps-col " }, h("div", { class: "ps-stacked" }, h("span", { class: "ps-stacked__label" }, "Guest Balance:"), h("span", { class: "ps-stacked__value ps-stacked__value--danger" }, formatAmount(this.currency.symbol, this.booking?.guest_financial?.due_amount))), h("div", { class: "ps-stacked " }, h("span", { class: "ps-stacked__label" }, "Guest Collected:"), h("span", { class: "ps-stacked__value" }, formatAmount(this.currency.symbol, this.booking.guest_financial?.collected))))), h("div", { class: "ps-col" }, h("div", { class: "ps-stacked --stacked-right" }, h("span", { class: "ps-stacked__label ps-stacked__value" }, "Booking Total:"), h("span", { class: "ps-stacked__value" }, formatAmount(this.currency.symbol, this.booking.financial?.gross_total ?? 0))), h("div", { class: "ps-stacked --stacked-right" }, h("span", { class: "ps-stacked__label" }, "Agent Total:"), h("span", { class: "ps-stacked__value" }, formatAmount(this.currency.symbol, this.booking.agent_financial.gross_total ?? 0)))))));
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
                "attribute": "total-cost",
                "reflect": false
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
                "attribute": "balance",
                "reflect": false
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
                "attribute": "collected",
                "reflect": false
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
                            "id": "src/models/property.ts::Currency"
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
                "attribute": "is-booking-cancelled",
                "reflect": false
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
                "attribute": "is-all-services-agent-owned",
                "reflect": false
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
            "agent": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Agent",
                    "resolved": "{ name?: string; email?: string; property_id?: any; code?: string; id?: number; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent"
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
            }
        };
    }
}
//# sourceMappingURL=ir-payment-summary.js.map

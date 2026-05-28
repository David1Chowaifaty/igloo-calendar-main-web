import calendar_data from "../../../stores/calendar-data";
import locales from "../../../stores/locales.store";
import { Fragment, Host, h } from "@stencil/core";
import { _formatTime, isAgentMode } from "../functions";
import moment from "moment";
import { mapClTxToFolioRow } from "../../ir-city-ledger/ir-city-ledger-folio/types";
export class IrPickupView {
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
        return (h(Host, null, h("wa-card", null, h("p", { slot: "header", class: 'font-size-large p-0 m-0' }, locales.entries.Lcz_Pickup), h("wa-tooltip", { for: "pickup" }, pickup_info ? 'Edit' : 'Add', " pickup"), h("ir-custom-button", { slot: "header-actions", id: "pickup", size: "small", appearance: "plain", variant: "neutral" }, h("wa-icon", { name: "edit", style: { fontSize: '1rem' } })), pickup_info ? (h(Fragment, null, isAgent && (h("p", { class: `service-group__label${pickup_info.agent ? ' --agent' : ''}` }, pickup_info.agent ? pickup_info.agent.name : 'Guest', h("span", null, "Folio"))), h("div", { class: `pickup-body${isAgent ? (pickup_info.agent ? ' pickup-body--agent' : ' pickup-body--guest') : ''}` }, h("div", { class: "pickup-row pickup-row--header" }, h("span", { class: "pickup-datetime" }, moment(pickup_info.date, 'YYYY-MM-DD').format('MMM DD, YYYY'), pickup_info.hour && pickup_info.minute && h("span", { class: "pickup-time" }, " \u00B7 ", _formatTime(pickup_info.hour.toString(), pickup_info.minute.toString())), statusTag), h("strong", { class: "pickup-price" }, pickup_info.currency.symbol, pickup_info.total)), h("dl", { class: "pickup-dl" }, h("div", { class: "pickup-dl__row" }, h("dt", null, locales.entries.Lcz_FlightDetails), h("dd", null, pickup_info.details)), h("div", { class: "pickup-dl__row" }, h("dt", null, "Vehicle"), h("dd", null, pickup_info.selected_option.vehicle.description)), h("div", { class: "pickup-dl__row" }, h("dt", null, locales.entries.Lcz_NbrOfVehicles), h("dd", null, pickup_info.nbr_of_units))), (calendar_data.pickup_service.pickup_instruction?.description || calendar_data.pickup_service.pickup_cancelation_prepayment?.description) && (h("p", { class: "pickup-note" }, calendar_data.pickup_service.pickup_instruction?.description, calendar_data.pickup_service.pickup_cancelation_prepayment?.description))))) : (h("ir-empty-state", null)))));
    }
    static get is() { return "ir-pickup-view"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-pickup-view.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-pickup-view.css"]
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
            },
            "clTransactions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ClTx[]",
                    "resolved": "{ PR_ID?: number; ENTRY_DATE?: string; ENTRY_USER_ID?: number; OWNER_ID?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; CURRENCY_ID?: number; CREDIT?: number; DEBIT?: number; DOC_NUMBER?: string; EXTERNAL_REF?: string; FD_ID?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; TOTAL_AMOUNT?: number; BH_ID?: number; BSA_REF?: string; CATEGORY?: string; AGENT_BOOKING_NBR?: string; ADULTS_NBR?: number; CHILD_NBR?: number; INFANT_NBR?: number; GUEST_FIRST_NAME?: string; GUEST_LAST_NAME?: string; ROOM_CATEGORY_ID?: number; ROOM_TYPE_ID?: number; RATE_PLAN_ID?: number; SERVICE_DATE?: string; CITY_TAX_AMOUNT?: number; CITY_TAX_PERCENT?: number; CL_TX_ID?: number; CL_TX_TYPE_CODE?: string; DESCRIPTION?: string; IS_HOLD?: boolean; IS_LOCKED?: boolean; My_Bh?: any; My_Currency?: any; My_Fd?: { FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; CURRENCY_ID?: number; AGENCY_NAME?: string; CREDIT?: number; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT?: number; DEBIT_DISPLAY?: string; DOC_NUMBER?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_CODE?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; IS_PRINTED?: boolean; NET_AMOUNT?: number; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT?: number; TAX_AMOUNT_DISPLAY?: string; TOTAL_AMOUNT?: number; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }; My_Pr?: any; My_Room_category?: any; RUNNING_BALANCE?: number; My_Room_type?: any; My_Travel_agency?: null; PAY_METHOD_CODE?: string; REL_ENTITY?: \"TBL_BSAD\" | \"TBL_BSP\"; REL_ENTITY_KEY?: number; TRAVEL_AGENCY_ID?: number; VAT_AMOUNT?: number; VAT_PERCENT?: number; }[]",
                    "references": {
                        "ClTx": {
                            "location": "import",
                            "path": "@/services/city-ledger/types",
                            "id": "src/services/city-ledger/types.ts::ClTx"
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
//# sourceMappingURL=ir-pickup-view.js.map

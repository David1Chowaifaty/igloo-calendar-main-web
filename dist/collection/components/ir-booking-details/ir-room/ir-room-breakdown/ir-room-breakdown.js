import { h, Fragment } from "@stencil/core";
import { _getDay } from "../../functions";
import calendar_data from "../../../../stores/calendar-data";
import { mapClTxToFolioRow } from "../../../ir-city-ledger/ir-city-ledger-folio/types";
import { SvcCategory } from "../../../../types/enums";
import { t } from "../../../../services/locale/t";
import { formatAmount } from "../../../../utils/number";
export class IrRoomBreakdown {
    room;
    booking;
    currency = 'USD';
    clTransactions = [];
    get acmTxByDate() {
        return new Map(this.clTransactions.filter(tx => tx.CATEGORY === SvcCategory.Accommodation && tx.BSA_REF === this.room.identifier).map(tx => [tx.SERVICE_DATE, tx]));
    }
    getSmokingLabel() {
        if (this.booking.is_direct) {
            if (!this.room.smoking_option) {
                return null;
            }
            const currRT = calendar_data.roomsInfo.find(rt => rt.id === this.room.roomtype.id);
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
    render() {
        return (h("div", { key: '3e235ca2b5ae76510538c431455da5cba8b6e388', class: "booking-room__details-container" }, h("div", { key: '3bcad772ee47f1aa97de9a0c1877330289626a9c', class: "booking-room__breakdown-row" }, h("div", { key: '844559088a0289024f95e1843129f4d7856f875e', class: "booking-room__breakdown-table" }, h("table", { key: 'ae7bceecc6765b257082c46d981365331ee76045' }, this.room.days.length > 0 &&
            (() => {
                const acmTxByDate = this.acmTxByDate;
                return this.room.days.map(room => {
                    const tx = acmTxByDate.get(room.date);
                    return (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, _getDay(room.date)), h("td", { class: "booking-room__cell booking-room__cell--right" }, formatAmount(this.currency, room.amount)), room.cost > 0 && room.cost !== null && (h("td", { class: "booking-room__cell booking-room__cell--left booking-room__cell--pad-left night-cost" }, formatAmount(this.currency, room.cost))), h("td", { class: "booking-room__cell booking-room__cell--pad-left" }, tx && h("ir-cl-status-tag", { transaction: { _rowId: '', ...mapClTxToFolioRow(tx), balance: 0 }, size: "extra-small" }))));
                });
            })(), h("tr", { key: 'f505c518b440c34ab1d2077e9b19c77a32053e6a', class: '' }, h("th", { key: 'dd37987a8a5806d78582b4b81615d16854483ecb', class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right subtotal_row" }, t('Lcz_SubTotal')), h("th", { key: '0c403924311ffb8efb6b283c83191b95f9a6eeb4', class: "booking-room__cell booking-room__cell--right subtotal_row" }, formatAmount(this.currency, this.room.total)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (h("th", { key: '442261a8613614ccaf2272d4d11a9629b853582f', class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-left night-cost" }, formatAmount(this.currency, this.room.cost)))), this.booking.is_direct ? (h(Fragment, null, (() => {
            const filtered_data = calendar_data.taxes.filter(tx => tx.pct > 0 && tx.is_exlusive);
            return filtered_data.map(d => {
                const amount = d.is_exlusive
                    ? // Tax is added on top
                        this.room.total * d.pct
                    : // Tax is included in total → extract it
                        this.room.total - this.room.total / (1 + d.pct);
                return (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, h("span", { class: 'booking-room__cell-tax-name' }, d.is_exlusive ? t('Lcz_Excluding', { fallback: 'Excluding' }) : t('Lcz_Including', { fallback: 'Including' }), " ", d.name, " (", d.pct, "%)")), h("td", { class: "booking-room__cell booking-room__cell--right" }, formatAmount(this.currency, amount / 100)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-left night-cost" }, formatAmount(this.currency, (this.room.cost * d.pct) / 100)))));
            });
        })(), this.room.inclusive_taxes?.CALCULATED_INCLUSIVE_TAXES?.map(d => (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, h("span", { class: 'booking-room__cell-tax-name' }, t('Lcz_Including', { fallback: 'Including' }), " ", d.TAX_NAME, " (", d.TAX_PCT * 100, "%)")), h("td", { class: "booking-room__cell booking-room__cell--right" }, formatAmount(this.currency, d.CALCULATED_VALUE))))))) : (h(Fragment, null, (() => {
            const filtered_data = this.room.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, h("span", { class: 'booking-room__cell-tax-name' }, d.is_exlusive ? t('Lcz_Excluding', { fallback: 'Excluding' }) : t('Lcz_Including', { fallback: 'Including' }), " ", d.name)), h("td", { class: "booking-room__cell booking-room__cell--right" }, formatAmount(d.currency.symbol, d.amount))));
            });
        })()))))), h("ir-label", { key: 'fe161ae362d35595f2e01a45d44138a9ad687d40', labelText: `${t('Lcz_SmokingOptions')}:`, display: "inline", content: this.getSmokingLabel() }), this.booking.is_direct && (h(Fragment, { key: 'dd8b91899c0074209d1a0807a6e81c983f58cb5e' }, this.room.rateplan.cancelation && (h("ir-label", { key: 'db87c87d4cfd4068c4e56aa55feb632051688233', labelText: `${t('Lcz_Cancellation')}:`, display: "inline", content: this.room.rateplan.cancelation || '', renderContentAsHtml: true })), this.room.rateplan.guarantee && (h("ir-label", { key: '8733c2515b27336e04d9952a6d01f71cf28793be', labelText: `${t('Lcz_Guarantee')}:`, display: "inline", content: this.room.rateplan.guarantee || '', renderContentAsHtml: true })))), this.room.ota_meta && (h("div", { key: '492ac1829b9c355baf357122c6fb12d57849aaa6' }, h("ir-label", { key: 'be9bf1e68e79899b06ffceb08b8a18e1131e4085', labelText: `${t('Lcz_MealPlan')}:`, display: "inline", content: this.room.ota_meta.meal_plan }), h("ir-label", { key: '43f0f1fc43dee6df70add0f68b6878b91d931050', labelText: `${t('Lcz_Policies', { fallback: 'Policies' })}:`, display: "inline", content: this.room.ota_meta.policies })))));
    }
    static get is() { return "ir-room-breakdown"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-room-breakdown.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-room-breakdown.css"]
        };
    }
    static get properties() {
        return {
            "room": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Room",
                    "resolved": "Room",
                    "references": {
                        "Room": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Room",
                            "referenceLocation": "Room"
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
            "currency": {
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
                "reflect": false,
                "attribute": "currency",
                "defaultValue": "'USD'"
            },
            "clTransactions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ClTx[]",
                    "resolved": "{ ENTRY_DATE?: string; ENTRY_USER_ID?: number; OWNER_ID?: number; DESCRIPTION?: string; PR_ID?: number; DOC_NUMBER?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; EXTERNAL_REF?: string; FD_ID?: number; BH_ID?: number; BSA_REF?: string; CATEGORY?: string; AGENT_BOOKING_NBR?: string; ADULTS_NBR?: number; CHILD_NBR?: number; INFANT_NBR?: number; GUEST_FIRST_NAME?: string; GUEST_LAST_NAME?: string; ROOM_CATEGORY_ID?: number; ROOM_TYPE_ID?: number; RATE_PLAN_ID?: number; SERVICE_DATE?: string; CITY_TAX_AMOUNT?: number; CITY_TAX_PERCENT?: number; CL_TX_ID?: number; CL_TX_TYPE_CODE?: string; IS_HOLD?: boolean; IS_LOCKED?: boolean; My_Bh?: any; My_Currency?: any; My_Fd?: { DOC_NUMBER?: string; FD_TYPE_CODE?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; AGENCY_NAME?: string; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT_DISPLAY?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; ISSUE_HOUR?: number; ISSUE_MINUTE?: number; IS_PRINTED?: boolean; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT_DISPLAY?: string; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }; My_Pr?: any; My_Room_category?: any; RUNNING_BALANCE?: number; My_Room_type?: any; My_Travel_agency?: null; PAY_METHOD_CODE?: string; REL_ENTITY?: \"TBL_BSAD\" | \"TBL_BSP\" | \"TBL_BSE\"; REL_ENTITY_KEY?: number; TRAVEL_AGENCY_ID?: number; VAT_AMOUNT?: number; VAT_PERCENT?: number; }[]",
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

/**
 * The setup tables whose entries are shown to the user — as select/radio options
 * or as labels — rather than only used for logic or echoed back to the API.
 *
 * A subset of `USED_SETUP_TABLES` (`./used-setup-tables.ts`) plus `_STAY_STATUS`,
 * which `src/utils/booking.ts` fetches directly. Hand-maintained snapshot (Nov 2026) —
 * **update it when display sites change**.
 *
 * Read by the app but not displayed, so deliberately absent:
 *   - `_PAY_TYPE_GROUP` — groups `_PAY_TYPE` options; its values are code lists
 *   - `_HB_PREFERENCE` — loaded by the meal report, never rendered
 *   - `_INVOICE_TARGET`, `_TA_PAYMENT_METHOD`, `_AGENT_RATE_TYPE` — sent to the API only
 *   - `_FD_STATUS`, `_TAXATION_STRATEGY` — declared in `TableEntries`, never fetched
 *
 * Displayed in English regardless of language (read `CODE_VALUE_EN` directly):
 * `_STAY_STATUS`, `_CL_POST_TIMING`.
 */
export declare const DISPLAYED_SETUP_TABLES: readonly ["_ARRIVAL_TIME", "_DEPARTURE_TIME", "_BED_PREFERENCE_TYPE", "_RATE_PRICING_MODE", "_CALENDAR_BLOCKED_TILL", "_STAY_STATUS", "_ID_TYPE", "_PAY_TYPE", "_PAY_METHOD", "_SVC_CATEGORY", "_VAT_INCLUDED", "_CITY_TAX_INCLUDED", "_SERVICE_CHARGE_INCLUDED", "_CL_TX_TYPE", "_FD_TYPE", "_AGENT_TYPE", "_CL_POST_TIMING", "_GAP_RULE", "_GAP_RANGE", "_HK_FREQUENCY", "_MEAL_TYPE", "_USER_TYPE"];
/** Membership test for the list above. */
export declare const DISPLAYED_SETUP_TABLE_SET: ReadonlySet<string>;

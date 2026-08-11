import { Tax } from "../../models/property";
export type AccChargeRule = {
    mode: string;
    value: number | null;
};
/** Finds a tax entry by keyword from the property's taxes array. Undefined means Not Applicable. */
export declare function findAccTax(keyword: string): Tax | undefined;
/** Converts a property tax entry to an AccChargeRule. Absent tax resolves to Not Applicable. */
export declare function toAccChargeRule(tax: Tax | undefined): AccChargeRule;
/**
 * Reads the property's current accommodation-level tax setup (VAT, City Tax, Service Charge,
 * Taxation Strategy) unchanged, for callers that must submit these required top-level fields
 * to `Handle_Exposed_Property_Tax_Categories` without actually managing/editing them.
 */
export declare function getAccTaxPayloadFields(): {
    VAT_INCLUDED_CODE: string;
    VAT_PC: number;
    CITY_TAX_INCLUDED_CODE: string;
    CITY_TAX_PCT: number;
    SERVICE_CHARGE_INCLUDED_CODE: string;
    SERVICE_CHARGE_PCT: number;
    TAXATION_STRATEGY: string;
};

import { IEntries } from "../../models/property";
import { z } from 'zod';
/**
 * Charge rule (VAT, City Tax, Service Charge)
 */
export declare const ChargeRuleSchema: z.ZodObject<{
    value: z.ZodNullable<z.ZodNumber>;
    mode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value?: number;
    mode?: string;
}, {
    value?: number;
    mode?: string;
}>;
export type ChargeRule = z.infer<typeof ChargeRuleSchema>;
/**
 * Main setup schema
 */
export declare const TaxAndChargeSetupSchema: z.ZodObject<{
    vat: z.ZodObject<{
        value: z.ZodNullable<z.ZodNumber>;
        mode: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value?: number;
        mode?: string;
    }, {
        value?: number;
        mode?: string;
    }>;
    cityTax: z.ZodNullable<z.ZodObject<{
        value: z.ZodNullable<z.ZodNumber>;
        mode: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value?: number;
        mode?: string;
    }, {
        value?: number;
        mode?: string;
    }>>;
    serviceCharge: z.ZodNullable<z.ZodObject<{
        value: z.ZodNullable<z.ZodNumber>;
        mode: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value?: number;
        mode?: string;
    }, {
        value?: number;
        mode?: string;
    }>>;
    serviceChargeCalculation: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    vat?: {
        value?: number;
        mode?: string;
    };
    cityTax?: {
        value?: number;
        mode?: string;
    };
    serviceCharge?: {
        value?: number;
        mode?: string;
    };
    serviceChargeCalculation?: string;
}, {
    vat?: {
        value?: number;
        mode?: string;
    };
    cityTax?: {
        value?: number;
        mode?: string;
    };
    serviceCharge?: {
        value?: number;
        mode?: string;
    };
    serviceChargeCalculation?: string;
}>;
export type TaxAndChargeSetup = z.infer<typeof TaxAndChargeSetupSchema>;
export type TaxesSetupEntries = {
    vat_included: IEntries[];
    svc_category: IEntries[];
    city_tax_included: IEntries[];
    service_charge_included: IEntries[];
};

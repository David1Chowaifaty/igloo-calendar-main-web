import { z } from "zod";
/**
 * Charge rule (VAT, City Tax, Service Charge)
 */
export const ChargeRuleSchema = z.object({
    value: z.number().nullable(),
    mode: z.string().min(1),
});
/**
 * Main setup schema
 */
export const TaxAndChargeSetupSchema = z.object({
    vat: ChargeRuleSchema,
    cityTax: ChargeRuleSchema.nullable(),
    serviceCharge: ChargeRuleSchema.nullable(),
    serviceChargeCalculation: z.string().nullable(),
});
//# sourceMappingURL=types.js.map

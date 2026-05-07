import { z } from "zod";
export var TaxationStrategy;
(function (TaxationStrategy) {
    TaxationStrategy["Normal"] = "000";
    TaxationStrategy["Cumulative"] = "001";
})(TaxationStrategy || (TaxationStrategy = {}));
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
    taxationStrategy: z.nativeEnum(TaxationStrategy).nullable(),
});
//# sourceMappingURL=types.js.map

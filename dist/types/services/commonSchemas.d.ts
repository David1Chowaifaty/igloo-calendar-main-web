import { z } from 'zod';
export declare const DateSchema: z.ZodEffects<z.ZodString, string, string>;
export declare const PropertyIdSchema: z.ZodNumber;
export declare const BookingNumberSchema: z.ZodString;
export declare const TaxTypesSchema: z.ZodOptional<z.ZodArray<z.ZodEnum<["VAT", "CITY_TAX", "SERVICE_CHARGE"]>, "many">>;

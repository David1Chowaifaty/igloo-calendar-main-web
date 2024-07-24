import { z } from 'zod';
export declare const ZCreditCardSchemaWithCvc: z.ZodObject<{
    cardNumber: z.ZodEffects<z.ZodString, string, string>;
    cvc: z.ZodString;
    cardHolderName: z.ZodString;
    expiryDate: z.ZodString;
}, "strip", z.ZodTypeAny, {
    cardNumber?: string;
    cvc?: string;
    cardHolderName?: string;
    expiryDate?: string;
}, {
    cardNumber?: string;
    cvc?: string;
    cardHolderName?: string;
    expiryDate?: string;
}>;
export declare const ZCreditCardSchemaWithoutCvc: z.ZodObject<{
    cardNumber: z.ZodString;
    cardHolderName: z.ZodString;
    expiryDate: z.ZodString;
}, "strip", z.ZodTypeAny, {
    cardNumber?: string;
    cardHolderName?: string;
    expiryDate?: string;
}, {
    cardNumber?: string;
    cardHolderName?: string;
    expiryDate?: string;
}>;
export declare const ICardProcessing: z.ZodUnion<[z.ZodObject<{
    code: z.ZodLiteral<"004">;
    cardNumber: z.ZodString;
    cardHolderName: z.ZodString;
    expiry_month: z.ZodString;
    expiry_year: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code?: "004";
    cardNumber?: string;
    cardHolderName?: string;
    expiry_month?: string;
    expiry_year?: string;
}, {
    code?: "004";
    cardNumber?: string;
    cardHolderName?: string;
    expiry_month?: string;
    expiry_year?: string;
}>, z.ZodObject<{
    code: z.ZodLiteral<"001">;
    cardNumber: z.ZodString;
    cardHolderName: z.ZodString;
    expiry_month: z.ZodString;
    expiry_year: z.ZodString;
    cvc: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code?: "001";
    cardNumber?: string;
    cardHolderName?: string;
    expiry_month?: string;
    expiry_year?: string;
    cvc?: string;
}, {
    code?: "001";
    cardNumber?: string;
    cardHolderName?: string;
    expiry_month?: string;
    expiry_year?: string;
    cvc?: string;
}>]>;

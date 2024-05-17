import { z } from 'zod';
export declare const ZCreditCardSchema: z.ZodEffects<z.ZodObject<{
    cardNumber: z.ZodEffects<z.ZodString, string, string>;
    cvc: z.ZodString;
    expiryDate: z.ZodEffects<z.ZodString, string, string>;
    cardHolderName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    cardNumber?: string;
    cvc?: string;
    expiryDate?: string;
    cardHolderName?: string;
}, {
    cardNumber?: string;
    cvc?: string;
    expiryDate?: string;
    cardHolderName?: string;
}>, {
    cardNumber?: string;
    cvc?: string;
    expiryDate?: string;
    cardHolderName?: string;
}, {
    cardNumber?: string;
    cvc?: string;
    expiryDate?: string;
    cardHolderName?: string;
}>;

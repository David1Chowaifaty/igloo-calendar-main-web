import { z } from 'zod';
export declare const guestInfoFormSchema: z.ZodObject<{
    first_name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodString;
    alternative_email: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>;
    country_id: z.ZodNumber;
    mobile: z.ZodString;
    country_phone_prefix: z.ZodString;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email?: string;
    country_id?: number;
    notes?: string;
    mobile?: string;
    first_name?: string;
    last_name?: string;
    alternative_email?: string;
    country_phone_prefix?: string;
}, {
    email?: string;
    country_id?: number;
    notes?: string;
    mobile?: string;
    first_name?: string;
    last_name?: string;
    alternative_email?: string;
    country_phone_prefix?: string;
}>;
export type GuestInfoFormValues = z.infer<typeof guestInfoFormSchema>;

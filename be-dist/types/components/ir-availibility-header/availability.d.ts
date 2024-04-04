import { z } from 'zod';
export declare const ExposedBookingAvailability: z.ZodObject<{
    propertyid: z.ZodNumber;
    from_date: z.ZodString;
    to_date: z.ZodString;
    room_type_ids: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    adult_nbr: z.ZodNumber;
    child_nbr: z.ZodNumber;
    language: z.ZodDefault<z.ZodString>;
    currency_ref: z.ZodString;
}, "strip", z.ZodTypeAny, {
    propertyid?: number;
    from_date?: string;
    to_date?: string;
    room_type_ids?: string[];
    adult_nbr?: number;
    child_nbr?: number;
    language?: string;
    currency_ref?: string;
}, {
    propertyid?: number;
    from_date?: string;
    to_date?: string;
    room_type_ids?: string[];
    adult_nbr?: number;
    child_nbr?: number;
    language?: string;
    currency_ref?: string;
}>;
export type TExposedBookingAvailability = z.infer<typeof ExposedBookingAvailability>;

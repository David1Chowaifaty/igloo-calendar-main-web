import { z } from 'zod';
export declare const IrUserFormData: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    mobile_number: z.ZodNumber;
    arrival_time: z.ZodString;
    message: z.ZodOptional<z.ZodString>;
    bookingForSomeoneElse: z.ZodDefault<z.ZodBoolean>;
    country_id: z.ZodNumber;
    country_code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    firstName?: string;
    lastName?: string;
    email?: string;
    mobile_number?: number;
    arrival_time?: string;
    message?: string;
    bookingForSomeoneElse?: boolean;
    country_id?: number;
    country_code?: string;
}, {
    firstName?: string;
    lastName?: string;
    email?: string;
    mobile_number?: number;
    arrival_time?: string;
    message?: string;
    bookingForSomeoneElse?: boolean;
    country_id?: number;
    country_code?: string;
}>;
export type TUserFormData = z.infer<typeof IrUserFormData>;

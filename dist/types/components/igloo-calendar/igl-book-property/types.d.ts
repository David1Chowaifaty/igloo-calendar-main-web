import { z } from 'zod';
export declare const GuestCredentials: z.ZodObject<{
    first_name: z.ZodString;
    last_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    first_name?: string;
    last_name?: string;
}, {
    first_name?: string;
    last_name?: string;
}>;
export declare const RoomGuestSchema: z.ZodEffects<z.ZodObject<{
    bed_preference: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    requires_bed_preference: z.ZodNullable<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    bed_preference?: string;
    requires_bed_preference?: boolean;
}, {
    bed_preference?: string;
    requires_bed_preference?: boolean;
}>, {
    bed_preference?: string;
    requires_bed_preference?: boolean;
}, {
    bed_preference?: string;
    requires_bed_preference?: boolean;
}>;
export declare const RoomsInfoSchema: z.ZodArray<z.ZodEffects<z.ZodObject<{
    bed_preference: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    requires_bed_preference: z.ZodNullable<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    bed_preference?: string;
    requires_bed_preference?: boolean;
}, {
    bed_preference?: string;
    requires_bed_preference?: boolean;
}>, {
    bed_preference?: string;
    requires_bed_preference?: boolean;
}, {
    bed_preference?: string;
    requires_bed_preference?: boolean;
}>, "many">;
export declare const BookingGuestSchema: z.ZodObject<{
    first_name: z.ZodString;
    last_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    first_name?: string;
    last_name?: string;
}, {
    first_name?: string;
    last_name?: string;
}>;

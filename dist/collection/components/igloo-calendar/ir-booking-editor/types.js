import { z } from "zod";
export const RoomsGuestsSchema = z.array(z
    .object({
    first_name: z.string().nonempty(),
    last_name: z.string().nonempty(),
    bed_preference: z.string().optional().nullable(),
    requires_bed_preference: z.boolean().nullable(),
})
    .superRefine((data, ctx) => {
    if (data.requires_bed_preference && !data.bed_preference) {
        ctx.addIssue({
            path: ['bed_preference'],
            message: 'Bed preference is required',
            code: z.ZodIssueCode.custom,
        });
    }
}));
export const BookedByGuestSchema = z.object({
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
});
const dayUseTimeSchema = z
    .string()
    .trim()
    .regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'Enter a valid time');
export const DayUseHoursSchema = z.object({
    from: dayUseTimeSchema,
    to: dayUseTimeSchema,
});

import { z } from "zod";
import { t } from "../../../services/locale/t";
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
            message: t('Lcz_BedPreferenceRequired', { fallback: 'Bed preference is required' }),
            code: z.ZodIssueCode.custom,
        });
    }
}));
export const BookedByGuestSchema = z.object({
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
});
// Lazy message: this schema is built at module load, before any locale is fetched.
const dayUseTimeSchema = z
    .string()
    .trim()
    .refine(value => /^([01]\d|2[0-3]):[0-5]\d$/.test(value), () => ({ message: t('Lcz_EnterAValidTime', { fallback: 'Enter a valid time' }) }));
export const DayUseHoursSchema = z.object({
    from: dayUseTimeSchema,
    to: dayUseTimeSchema,
});

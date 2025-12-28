import { z } from './index2.js';

const RoomsGuestsSchema = z.array(z
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
const BookedByGuestSchema = z.object({
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
});

export { BookedByGuestSchema as B, RoomsGuestsSchema as R };

//# sourceMappingURL=types3.js.map
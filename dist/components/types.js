import { z } from './index2.js';

const GuestCredentials = z.object({
    first_name: z.string().nonempty(),
    last_name: z.string().nonempty(),
});
const RoomGuestSchema = z
    .object({
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
});
z.array(RoomGuestSchema);
const BookingGuestSchema = z.object({
    first_name: z.string().nonempty(),
    last_name: z.string().nonempty(),
});

export { BookingGuestSchema as B, GuestCredentials as G, RoomGuestSchema as R };

//# sourceMappingURL=types.js.map
import { l as libExports } from './index-DeW5X45W.js';

const GuestCredentials = libExports.z.object({
    first_name: libExports.z.string().nonempty(),
    last_name: libExports.z.string().nonempty(),
});
const RoomGuestSchema = libExports.z
    .object({
    bed_preference: libExports.z.string().optional().nullable(),
    requires_bed_preference: libExports.z.boolean().nullable(),
})
    .superRefine((data, ctx) => {
    if (data.requires_bed_preference && !data.bed_preference) {
        ctx.addIssue({
            path: ['bed_preference'],
            message: 'Bed preference is required',
            code: libExports.z.ZodIssueCode.custom,
        });
    }
});
libExports.z.array(RoomGuestSchema);
const BookingGuestSchema = libExports.z.object({
    first_name: libExports.z.string().nonempty(),
    last_name: libExports.z.string().nonempty(),
});

export { BookingGuestSchema as B, GuestCredentials as G, RoomGuestSchema as R };

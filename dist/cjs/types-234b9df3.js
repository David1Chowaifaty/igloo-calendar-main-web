'use strict';

const index = require('./index-8bb117a0.js');

const GuestCredentials = index.z.object({
    first_name: index.z.string().nonempty(),
    last_name: index.z.string().nonempty(),
});
const RoomGuestSchema = index.z
    .object({
    bed_preference: index.z.string().optional().nullable(),
    requires_bed_preference: index.z.boolean().nullable(),
})
    .superRefine((data, ctx) => {
    if (data.requires_bed_preference && !data.bed_preference) {
        ctx.addIssue({
            path: ['bed_preference'],
            message: 'Bed preference is required',
            code: index.z.ZodIssueCode.custom,
        });
    }
});
index.z.array(RoomGuestSchema);
const BookingGuestSchema = index.z.object({
    first_name: index.z.string().nonempty(),
    last_name: index.z.string().nonempty(),
});

exports.BookingGuestSchema = BookingGuestSchema;
exports.GuestCredentials = GuestCredentials;
exports.RoomGuestSchema = RoomGuestSchema;

//# sourceMappingURL=types-234b9df3.js.map
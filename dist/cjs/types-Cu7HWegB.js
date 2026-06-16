'use strict';

var index = require('./index-CLqkDPTC.js');

const GuestCredentials = index.libExports.z.object({
    first_name: index.libExports.z.string().nonempty(),
    last_name: index.libExports.z.string().nonempty(),
});
const RoomGuestSchema = index.libExports.z
    .object({
    bed_preference: index.libExports.z.string().optional().nullable(),
    requires_bed_preference: index.libExports.z.boolean().nullable(),
})
    .superRefine((data, ctx) => {
    if (data.requires_bed_preference && !data.bed_preference) {
        ctx.addIssue({
            path: ['bed_preference'],
            message: 'Bed preference is required',
            code: index.libExports.z.ZodIssueCode.custom,
        });
    }
});
index.libExports.z.array(RoomGuestSchema);
const BookingGuestSchema = index.libExports.z.object({
    first_name: index.libExports.z.string().nonempty(),
    last_name: index.libExports.z.string().nonempty(),
});

exports.BookingGuestSchema = BookingGuestSchema;
exports.GuestCredentials = GuestCredentials;
exports.RoomGuestSchema = RoomGuestSchema;

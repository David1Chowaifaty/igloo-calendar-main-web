'use strict';

const utils = require('./utils-e5318ed5.js');

const GuestCredentials = utils.z.object({
    first_name: utils.z.string().nonempty(),
    last_name: utils.z.string().nonempty(),
});
const RoomGuestSchema = utils.z
    .object({
    bed_preference: utils.z.string().optional().nullable(),
    requires_bed_preference: utils.z.boolean().nullable(),
})
    .superRefine((data, ctx) => {
    if (data.requires_bed_preference && !data.bed_preference) {
        ctx.addIssue({
            path: ['bed_preference'],
            message: 'Bed preference is required',
            code: utils.z.ZodIssueCode.custom,
        });
    }
});
utils.z.array(RoomGuestSchema);
const BookingGuestSchema = utils.z.object({
    first_name: utils.z.string().nonempty(),
    last_name: utils.z.string().nonempty(),
});

exports.BookingGuestSchema = BookingGuestSchema;
exports.GuestCredentials = GuestCredentials;
exports.RoomGuestSchema = RoomGuestSchema;

//# sourceMappingURL=types-f516f85e.js.map
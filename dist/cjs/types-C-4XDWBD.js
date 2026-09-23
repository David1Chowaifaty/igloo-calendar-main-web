'use strict';

var t = require('./t-CyRK1btk.js');
var types = require('./types-BlCoz3jZ.js');

const GuestCredentials = types.objectType({
    first_name: types.stringType().nonempty(),
    last_name: types.stringType().nonempty(),
});
const RoomGuestSchema = types.objectType({
    bed_preference: types.stringType().optional().nullable(),
    requires_bed_preference: types.booleanType().nullable(),
})
    .superRefine((data, ctx) => {
    if (data.requires_bed_preference && !data.bed_preference) {
        ctx.addIssue({
            path: ['bed_preference'],
            message: t.t('Lcz_BedPreferenceRequired', { fallback: 'Bed preference is required' }),
            code: types.ZodIssueCode.custom,
        });
    }
});
types.arrayType(RoomGuestSchema);
const BookingGuestSchema = types.objectType({
    first_name: types.stringType().nonempty(),
    last_name: types.stringType().nonempty(),
});

exports.BookingGuestSchema = BookingGuestSchema;
exports.GuestCredentials = GuestCredentials;
exports.RoomGuestSchema = RoomGuestSchema;

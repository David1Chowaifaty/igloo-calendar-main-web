import { t } from './t-CHjay2ar.js';
import { o as objectType, s as stringType, b as booleanType, a as ZodIssueCode, d as arrayType } from './types-CB66a07H.js';

const GuestCredentials = objectType({
    first_name: stringType().nonempty(),
    last_name: stringType().nonempty(),
});
const RoomGuestSchema = objectType({
    bed_preference: stringType().optional().nullable(),
    requires_bed_preference: booleanType().nullable(),
})
    .superRefine((data, ctx) => {
    if (data.requires_bed_preference && !data.bed_preference) {
        ctx.addIssue({
            path: ['bed_preference'],
            message: t('Lcz_BedPreferenceRequired', { fallback: 'Bed preference is required' }),
            code: ZodIssueCode.custom,
        });
    }
});
arrayType(RoomGuestSchema);
const BookingGuestSchema = objectType({
    first_name: stringType().nonempty(),
    last_name: stringType().nonempty(),
});

export { BookingGuestSchema as B, GuestCredentials as G, RoomGuestSchema as R };

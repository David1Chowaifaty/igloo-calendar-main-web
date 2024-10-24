'use strict';

const index = require('./index-42419b2e.js');

const IrUserFormData = index.z.object({
    firstName: index.z.string().min(2, {
        message: 'FullNameCannotBeEmpty',
    }),
    lastName: index.z.string().min(2, {
        message: 'LastNameCannotBeEmpty',
    }),
    email: index.z.string().email({ message: 'InvalidEmail' }),
    mobile_number: index.z.coerce.number().min(5),
    arrival_time: index.z.string(),
    message: index.z.string().optional(),
    bookingForSomeoneElse: index.z.boolean().default(false),
    country_id: index.z.coerce.number(),
    country_phone_prefix: index.z.coerce.string().min(1),
    id: index.z.coerce.number().nullable().default(null),
});
const IrGuest = index.z.object({
    address: index.z.string().nullable().default(null),
    city: index.z.string().nullable().default(null),
    country_id: index.z.coerce.number().min(1),
    dob: index.z.string().nullable().default(null),
    email: index.z.string().email(),
    first_name: index.z.string().min(2, {
        message: 'FullNameCannotBeEmpty',
    }),
    id: index.z.coerce.number().nullable().default(null),
    last_name: index.z.string().min(3),
    mobile: index.z.coerce.number().min(5),
    subscribe_to_news_letter: index.z.boolean().default(false),
    country_phone_prefix: index.z.string().min(1), // cci?: ICCI | null;
    alternative_email: index.z.string().email().optional().nullable(),
});

exports.IrGuest = IrGuest;
exports.IrUserFormData = IrUserFormData;

//# sourceMappingURL=user_form-a3bf85d4.js.map
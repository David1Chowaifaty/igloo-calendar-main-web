'use strict';

var moment = require('./moment-CdViwxPQ.js');
var type = require('./type-BRhg-bzd.js');
var types = require('./types-BlCoz3jZ.js');

// export const ZIdInfo = z.object({
//   type: z.object({
//     code: z.string().min(3),
//     description: z.string(),
//   }),
//   number: z.string().min(2),
// });
// export const ZSharedPerson = z.object({
//   id: z.number(),
//   full_name: z.string().min(2),
//   country_id: z.coerce.number().min(0),
//   dob: z.coerce.date().transform(date => moment(date).format('YYYY-MM-DD')),
//   id_info: ZIdInfo,
// });
/**
 * ZIdInfo schema:
 * - `type.code`: Validates a non-empty string must be at least 3 chars.
 *   If empty string or not provided, validation is skipped.
 * - `type.description`: Same pattern for description (but no min length).
 * - `number`: Validates if non-empty string it should be at least 2 chars.
 */
const ZIdInfo = types.objectType({
    type: types.objectType({
        code: types.unionType([
            // If provided and non-empty, must have at least 3 chars
            types.stringType().min(3),
            // or it can be an empty string
            types.literalType(''),
        ])
            .optional(), // or undefined
        description: types.unionType([
            // If provided and non-empty, no special min
            types.stringType(),
            // or it can be empty string
            types.literalType(''),
        ])
            .optional(),
    }),
    number: types.unionType([
        // If provided and non-empty, must have at least 2 chars
        types.stringType().min(2),
        // or it can be empty string
        types.literalType(''),
    ])
        .optional()
        .nullable(),
});
/**
 * ZSharedPerson schema:
 * - `id`: Optional numeric field.
 * - `full_name`: If provided and non-empty, must be at least 2 chars.
 * - `country_id`: If provided, coerced to number, must be >= 0.
 * - `dob`: If provided, coerced to Date and formatted. Otherwise skipped.
 * - `id_info`: The nested object above; can also be omitted entirely.
 */
const ZSharedPerson = types.objectType({
    id: types.numberType().optional(),
    // full_name: z
    //   .union([
    //     z.string().min(2), // if provided and non-empty, must have min length 2
    //     z.literal(''), // or it can be empty string
    //   ])
    //   .optional(),
    first_name: types.unionType([
        types.stringType().min(2), // if provided and non-empty, must have min length 2
        types.literalType(''), // or it can be empty string
    ])
        .optional(),
    // .nullable(),
    last_name: types.stringType().optional(),
    // .union([
    //   z.string().min(2), // if provided and non-empty, must have min length 2
    //   z.literal(''), // or it can be empty string
    // ])
    // .nullable(),
    country_id: types.coerce
        .number()
        .min(0) // if provided, must be >= 0
        .optional(),
    dob: types.stringType()
        .nullable()
        .optional()
        .refine(value => value === undefined || moment.hooks(value, 'DD/MM/YYYY', true).isValid() || value === '' || value === null, 'Invalid date format')
        .transform(value => {
        if (value === undefined || value === '' || value === null)
            return null;
        const isDDMMYYYY = moment.hooks(value, 'DD/MM/YYYY', true).isValid();
        return isDDMMYYYY ? null : moment.hooks(value, 'DD/MM/YYYY').format('YYYY-MM-DD');
    }),
    id_info: ZIdInfo.optional(),
    is_main: types.booleanType().default(false),
});
// export const ZSharedPersons = z.array(ZSharedPerson).superRefine((data, ctx) => {
//   for (const d of data) {
//     validateSharedPerson(d, ctx);
//   }
// });
function validateSharedPerson(data) {
    ZSharedPerson.parse(data);
    const hasValue = (field) => {
        return field !== null && field !== undefined && field.trim() !== '';
    };
    const ctx = [];
    if (data.is_main) {
        if (!hasValue(data.first_name)) {
            ctx.push({
                path: ['first_name'],
                code: types.ZodIssueCode.custom,
                message: 'First name is required for main guest',
            });
        }
        // if (!hasValue(data.last_name)) {
        //   ctx.push({
        //     path: ['last_name'],
        //     code: ZodIssueCode.custom,
        //     message: 'Last name is required for main guest',
        //   });
        // }
    }
    // For non-main guests: check if ANY field has data
    const hasAnyFieldData = hasValue(data.first_name) ||
        // hasValue(data.last_name) ||
        hasValue(data.dob) ||
        (data.country_id !== null && data.country_id !== undefined && data.country_id > 0) ||
        hasValue(data.id_info?.number);
    // If any field has data, then first_name and last_name become required
    if (hasAnyFieldData) {
        if (!hasValue(data.first_name)) {
            ctx.push({
                path: ['first_name'],
                code: types.ZodIssueCode.custom,
                message: 'First name is required when other guest information is provided',
            });
        }
        // if (!hasValue(data.last_name)) {
        //   ctx.push({
        //     path: ['last_name'],
        //     code: ZodIssueCode.custom,
        //     message: 'Last name is required when other guest information is provided',
        //   });
        // }
    }
    if (ctx.length >= 1) {
        throw new types.ZodError(ctx);
    }
}
const ChargesSchema = types.objectType({
    city_tax_amount: types.numberType(),
    city_tax_percent: types.numberType(),
    net_amount: types.numberType(),
    service_charge_amount: types.numberType(),
    service_charge_percent: types.numberType(),
    tax_amount: types.numberType(),
    total_amount: types.numberType(),
    vat_amount: types.numberType(),
    vat_percent: types.numberType(),
});
const ExtraServiceSchema = types.objectType({
    booking_system_id: types.numberType().optional(),
    cost: types.coerce.number().nullable(),
    currency_id: types.numberType().min(1),
    description: types.stringType().optional().nullable(),
    end_date: types.stringType().nullable().optional().default(null),
    start_date: types.stringType().nonempty(),
    price: types.coerce.number().min(0.01),
    system_id: types.numberType().optional(),
    category: types.objectType({ code: types.stringType().nonempty() }).nullable().optional(),
    /** Physical room (unit) id this service is linked to, when the booking has multiple units. */
    pr_id: types.numberType().nullable().optional().default(null),
    room_identifier: types.stringType().nullable().optional().default(null),
    agent: type.AgentBaseSchema.extend({
        address: types.stringType().nullable(),
        agent_rate_type_code: type.AgentBaseSchema.shape.agent_rate_type_code.nullable(),
        agent_type_code: type.AgentBaseSchema.shape.agent_type_code.nullable(),
        city: types.stringType().nullable(),
        contact_name: types.stringType().nullable(),
        email: types.stringType().email().nullable(),
        is_active: types.booleanType().nullable(),
        pr_id: types.numberType().nullable().optional().default(null),
        is_send_guest_confirmation_email: types.booleanType().nullable(),
        notes: types.stringType().nullable(),
        payment_mode: type.AgentBaseSchema.shape.payment_mode.nullable(),
        phone: types.stringType().nullable(),
        tax_nbr: types.stringType().nullable(),
        cl_post_timing: type.AgentBaseSchema.shape.cl_post_timing.nullable(),
    }).nullable(),
    from_time: types.stringType().optional().nullable().default(null),
    to_time: types.stringType().optional().nullable().default(null),
    charges: ChargesSchema.optional(),
});
const ROOM_IN_OUT = {
    CHECKIN: '001',
    CHECKOUT: '002',
    IDLE: '000',
};

exports.ExtraServiceSchema = ExtraServiceSchema;
exports.ROOM_IN_OUT = ROOM_IN_OUT;
exports.ZSharedPerson = ZSharedPerson;
exports.validateSharedPerson = validateSharedPerson;

'use strict';

var index = require('./index-CLqkDPTC.js');
var moment = require('./moment-CdViwxPQ.js');
var type = require('./type-DzNPp0zr.js');

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
const ZIdInfo = index.libExports.z.object({
    type: index.libExports.z.object({
        code: index.libExports.z
            .union([
            // If provided and non-empty, must have at least 3 chars
            index.libExports.z.string().min(3),
            // or it can be an empty string
            index.libExports.z.literal(''),
        ])
            .optional(), // or undefined
        description: index.libExports.z
            .union([
            // If provided and non-empty, no special min
            index.libExports.z.string(),
            // or it can be empty string
            index.libExports.z.literal(''),
        ])
            .optional(),
    }),
    number: index.libExports.z
        .union([
        // If provided and non-empty, must have at least 2 chars
        index.libExports.z.string().min(2),
        // or it can be empty string
        index.libExports.z.literal(''),
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
const ZSharedPerson = index.libExports.z.object({
    id: index.libExports.z.number().optional(),
    // full_name: z
    //   .union([
    //     z.string().min(2), // if provided and non-empty, must have min length 2
    //     z.literal(''), // or it can be empty string
    //   ])
    //   .optional(),
    first_name: index.libExports.z
        .union([
        index.libExports.z.string().min(2), // if provided and non-empty, must have min length 2
        index.libExports.z.literal(''), // or it can be empty string
    ])
        .optional(),
    // .nullable(),
    last_name: index.libExports.z.string().optional(),
    // .union([
    //   z.string().min(2), // if provided and non-empty, must have min length 2
    //   z.literal(''), // or it can be empty string
    // ])
    // .nullable(),
    country_id: index.libExports.z.coerce
        .number()
        .min(0) // if provided, must be >= 0
        .optional(),
    dob: index.libExports.z
        .string()
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
    is_main: index.libExports.z.boolean().default(false),
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
                code: index.libExports.ZodIssueCode.custom,
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
                code: index.libExports.ZodIssueCode.custom,
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
        throw new index.libExports.ZodError(ctx);
    }
}
const ChargesSchema = index.libExports.z.object({
    city_tax_amount: index.libExports.z.number(),
    city_tax_percent: index.libExports.z.number(),
    net_amount: index.libExports.z.number(),
    service_charge_amount: index.libExports.z.number(),
    service_charge_percent: index.libExports.z.number(),
    tax_amount: index.libExports.z.number(),
    total_amount: index.libExports.z.number(),
    vat_amount: index.libExports.z.number(),
    vat_percent: index.libExports.z.number(),
});
const ExtraServiceSchema = index.libExports.z.object({
    booking_system_id: index.libExports.z.number().optional(),
    cost: index.libExports.z.coerce.number().nullable(),
    currency_id: index.libExports.z.number().min(1),
    description: index.libExports.z.string().optional().nullable(),
    end_date: index.libExports.z.string().nullable().optional().default(null),
    start_date: index.libExports.z.string().nonempty(),
    price: index.libExports.z.coerce.number().min(0.01),
    system_id: index.libExports.z.number().optional(),
    category: index.libExports.z.object({ code: index.libExports.z.string().nonempty() }).nullable().optional(),
    agent: type.AgentBaseSchema.extend({
        address: index.libExports.z.string().nullable(),
        agent_rate_type_code: type.AgentBaseSchema.shape.agent_rate_type_code.nullable(),
        agent_type_code: type.AgentBaseSchema.shape.agent_type_code.nullable(),
        city: index.libExports.z.string().nullable(),
        contact_name: index.libExports.z.string().nullable(),
        email: index.libExports.z.string().email().nullable(),
        is_active: index.libExports.z.boolean().nullable(),
        is_send_guest_confirmation_email: index.libExports.z.boolean().nullable(),
        notes: index.libExports.z.string().nullable(),
        payment_mode: type.AgentBaseSchema.shape.payment_mode.nullable(),
        phone: index.libExports.z.string().nullable(),
        tax_nbr: index.libExports.z.string().nullable(),
        cl_post_timing: type.AgentBaseSchema.shape.cl_post_timing.nullable(),
    }).nullable(),
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

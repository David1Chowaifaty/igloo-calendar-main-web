import { l as libExports } from './index-DeW5X45W.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { A as AgentBaseSchema } from './type-CBqEYOkK.js';

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
const ZIdInfo = libExports.z.object({
    type: libExports.z.object({
        code: libExports.z
            .union([
            // If provided and non-empty, must have at least 3 chars
            libExports.z.string().min(3),
            // or it can be an empty string
            libExports.z.literal(''),
        ])
            .optional(), // or undefined
        description: libExports.z
            .union([
            // If provided and non-empty, no special min
            libExports.z.string(),
            // or it can be empty string
            libExports.z.literal(''),
        ])
            .optional(),
    }),
    number: libExports.z
        .union([
        // If provided and non-empty, must have at least 2 chars
        libExports.z.string().min(2),
        // or it can be empty string
        libExports.z.literal(''),
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
const ZSharedPerson = libExports.z.object({
    id: libExports.z.number().optional(),
    // full_name: z
    //   .union([
    //     z.string().min(2), // if provided and non-empty, must have min length 2
    //     z.literal(''), // or it can be empty string
    //   ])
    //   .optional(),
    first_name: libExports.z
        .union([
        libExports.z.string().min(2), // if provided and non-empty, must have min length 2
        libExports.z.literal(''), // or it can be empty string
    ])
        .optional(),
    // .nullable(),
    last_name: libExports.z.string().optional(),
    // .union([
    //   z.string().min(2), // if provided and non-empty, must have min length 2
    //   z.literal(''), // or it can be empty string
    // ])
    // .nullable(),
    country_id: libExports.z.coerce
        .number()
        .min(0) // if provided, must be >= 0
        .optional(),
    dob: libExports.z
        .string()
        .nullable()
        .optional()
        .refine(value => value === undefined || hooks(value, 'DD/MM/YYYY', true).isValid() || value === '' || value === null, 'Invalid date format')
        .transform(value => {
        if (value === undefined || value === '' || value === null)
            return null;
        const isDDMMYYYY = hooks(value, 'DD/MM/YYYY', true).isValid();
        return isDDMMYYYY ? null : hooks(value, 'DD/MM/YYYY').format('YYYY-MM-DD');
    }),
    id_info: ZIdInfo.optional(),
    is_main: libExports.z.boolean().default(false),
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
                code: libExports.ZodIssueCode.custom,
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
                code: libExports.ZodIssueCode.custom,
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
        throw new libExports.ZodError(ctx);
    }
}
const ChargesSchema = libExports.z.object({
    city_tax_amount: libExports.z.number(),
    city_tax_percent: libExports.z.number(),
    net_amount: libExports.z.number(),
    service_charge_amount: libExports.z.number(),
    service_charge_percent: libExports.z.number(),
    tax_amount: libExports.z.number(),
    total_amount: libExports.z.number(),
    vat_amount: libExports.z.number(),
    vat_percent: libExports.z.number(),
});
const ExtraServiceSchema = libExports.z.object({
    booking_system_id: libExports.z.number().optional(),
    cost: libExports.z.coerce.number().nullable(),
    currency_id: libExports.z.number().min(1),
    description: libExports.z.string().optional().nullable(),
    end_date: libExports.z.string().nullable().optional().default(null),
    start_date: libExports.z.string().nonempty(),
    price: libExports.z.coerce.number().min(0.01),
    system_id: libExports.z.number().optional(),
    category: libExports.z.object({ code: libExports.z.string().nonempty() }).nullable().optional(),
    agent: AgentBaseSchema.extend({
        address: libExports.z.string().nullable(),
        agent_rate_type_code: AgentBaseSchema.shape.agent_rate_type_code.nullable(),
        agent_type_code: AgentBaseSchema.shape.agent_type_code.nullable(),
        city: libExports.z.string().nullable(),
        contact_name: libExports.z.string().nullable(),
        email: libExports.z.string().email().nullable(),
        is_active: libExports.z.boolean().nullable(),
        is_send_guest_confirmation_email: libExports.z.boolean().nullable(),
        notes: libExports.z.string().nullable(),
        payment_mode: AgentBaseSchema.shape.payment_mode.nullable(),
        phone: libExports.z.string().nullable(),
        tax_nbr: libExports.z.string().nullable(),
        cl_post_timing: AgentBaseSchema.shape.cl_post_timing.nullable(),
    }).nullable(),
    charges: ChargesSchema.optional(),
});
const ROOM_IN_OUT = {
    CHECKIN: '001',
    CHECKOUT: '002',
    IDLE: '000',
};

export { ExtraServiceSchema as E, ROOM_IN_OUT as R, ZSharedPerson as Z, validateSharedPerson as v };

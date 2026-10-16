'use strict';

var moment = require('./moment-CdViwxPQ.js');
var types = require('./types-BVJQZ50e.js');

const AgentsTypes = {
    TOUR_OPERATOR: '003'};

const ExposedAgentsPropsSchema = types.objectType({
    property_id: types.coerce.number(),
});
const ExposedAgentPropsSchema = types.objectType({
    id: types.coerce.number(),
});
const CodeDescriptionSchema = types.objectType({
    code: types.stringType(),
    description: types.stringType().nullable().optional(),
});
const AgentRateTypeCodeSchema = CodeDescriptionSchema;
const AgentTypeCodeSchema = CodeDescriptionSchema;
const PaymentModeSchema = CodeDescriptionSchema;
const ClPostTimingSchema = CodeDescriptionSchema;
const AgentBaseSchema = types.objectType({
    address: types.stringType(),
    agent_rate_type_code: AgentRateTypeCodeSchema,
    agent_type_code: AgentTypeCodeSchema.required(),
    city: types.stringType(),
    code: types.stringType().trim().min(5).max(10).or(types.literalType('')).nullable(),
    contact_name: types.stringType(),
    contract_nbr: types.anyType(),
    country_id: types.coerce.number().nullable(),
    currency_id: types.anyType(),
    due_balance: types.anyType(),
    email: types.stringType().email().nonempty(),
    email_copied_upon_booking: types.stringType().email().nullable(),
    id: types.numberType().default(-1),
    is_active: types.booleanType(),
    is_send_guest_confirmation_email: types.booleanType(),
    name: types.stringType().nonempty(),
    notes: types.stringType(),
    payment_mode: PaymentModeSchema,
    phone: types.stringType(),
    property_id: types.anyType(),
    provided_discount: types.anyType().default(null),
    question: types.stringType().nullable(),
    sort_order: types.anyType(),
    tax_nbr: types.stringType(),
    reference: types.stringType().nullable().optional(),
    verification_mode: types.stringType().nullable().default(null),
    has_opening_balance: types.booleanType().optional().default(false),
    cl_post_timing: ClPostTimingSchema.optional(),
});
const AgentSchema = AgentBaseSchema.superRefine((value, ctx) => {
    const trimmedCode = (value.code ?? '').trim();
    const trimmedQuestion = (value.question ?? '').trim();
    if (value.agent_type_code?.code === AgentsTypes.TOUR_OPERATOR) {
        if (value.verification_mode?.trim() !== '' && value.verification_mode !== null) {
            ctx.addIssue({
                code: types.ZodIssueCode.custom,
                message: `Verification mode must be empty when agent_type_code is ${AgentsTypes.TOUR_OPERATOR}.`,
                path: ['verification_mode'],
            });
        }
        if (trimmedCode !== '') {
            ctx.addIssue({
                code: types.ZodIssueCode.custom,
                message: `Code must be empty when agent_type_code is ${AgentsTypes.TOUR_OPERATOR}.`,
                path: ['code'],
            });
        }
        if (trimmedQuestion !== '') {
            ctx.addIssue({
                code: types.ZodIssueCode.custom,
                message: `Question must be empty when agent_type_code is ${AgentsTypes.TOUR_OPERATOR}.`,
                path: ['question'],
            });
        }
    }
    if (value.verification_mode === 'code' && trimmedCode.length === 0) {
        ctx.addIssue({
            code: types.ZodIssueCode.custom,
            message: 'Code is required when verification_mode is code.',
            path: ['code'],
        });
    }
    if (value.verification_mode === 'question' && value.question?.trim() === '') {
        ctx.addIssue({
            code: types.ZodIssueCode.custom,
            message: 'Question is required when verification_mode is question.',
            path: ['question'],
        });
    }
    const contractMissing = value.contract_nbr === null || value.contract_nbr === undefined || (typeof value.contract_nbr === 'string' && value.contract_nbr.trim() === '');
    if (value.agent_rate_type_code?.code === '004' && contractMissing) {
        ctx.addIssue({
            code: types.ZodIssueCode.custom,
            message: 'Contract number is required when agent_rate_type_code is 004.',
            path: ['contract_nbr'],
        });
    }
});
types.arrayType(AgentSchema).nullable();
const HandleExposedAgentPropsSchema = types.objectType({
    agent: AgentSchema,
});

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
    agent: AgentBaseSchema.extend({
        address: types.stringType().nullable(),
        agent_rate_type_code: AgentBaseSchema.shape.agent_rate_type_code.nullable(),
        agent_type_code: AgentBaseSchema.shape.agent_type_code.nullable(),
        city: types.stringType().nullable(),
        contact_name: types.stringType().nullable(),
        email: types.stringType().email().nullable(),
        is_active: types.booleanType().nullable(),
        pr_id: types.numberType().nullable().optional().default(null),
        is_send_guest_confirmation_email: types.booleanType().nullable(),
        notes: types.stringType().nullable(),
        payment_mode: AgentBaseSchema.shape.payment_mode.nullable(),
        phone: types.stringType().nullable(),
        tax_nbr: types.stringType().nullable(),
        cl_post_timing: AgentBaseSchema.shape.cl_post_timing.nullable(),
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

exports.AgentBaseSchema = AgentBaseSchema;
exports.AgentSchema = AgentSchema;
exports.AgentsTypes = AgentsTypes;
exports.ExposedAgentPropsSchema = ExposedAgentPropsSchema;
exports.ExposedAgentsPropsSchema = ExposedAgentsPropsSchema;
exports.ExtraServiceSchema = ExtraServiceSchema;
exports.HandleExposedAgentPropsSchema = HandleExposedAgentPropsSchema;
exports.ROOM_IN_OUT = ROOM_IN_OUT;
exports.ZSharedPerson = ZSharedPerson;
exports.validateSharedPerson = validateSharedPerson;

import { h as hooks } from './moment-Mki5YqAR.js';
import { o as objectType, c as coerce, s as stringType, b as booleanType, f as anyType, n as numberType, l as literalType, Z as ZodIssueCode, a as arrayType, u as unionType, g as ZodError } from './types-D3UHbzT8.js';

const AgentsTypes = {
    TOUR_OPERATOR: '003'};

const ExposedAgentsPropsSchema = objectType({
    property_id: coerce.number(),
});
const ExposedAgentPropsSchema = objectType({
    id: coerce.number(),
});
const CodeDescriptionSchema = objectType({
    code: stringType(),
    description: stringType().nullable().optional(),
});
const AgentRateTypeCodeSchema = CodeDescriptionSchema;
const AgentTypeCodeSchema = CodeDescriptionSchema;
const PaymentModeSchema = CodeDescriptionSchema;
const ClPostTimingSchema = CodeDescriptionSchema;
const AgentBaseSchema = objectType({
    address: stringType(),
    agent_rate_type_code: AgentRateTypeCodeSchema,
    agent_type_code: AgentTypeCodeSchema.required(),
    city: stringType(),
    code: stringType().trim().min(5).max(10).or(literalType('')).nullable(),
    contact_name: stringType(),
    contract_nbr: anyType(),
    country_id: coerce.number().nullable(),
    currency_id: anyType(),
    due_balance: anyType(),
    email: stringType().email().nonempty(),
    email_copied_upon_booking: stringType().email().nullable(),
    id: numberType().default(-1),
    is_active: booleanType(),
    is_send_guest_confirmation_email: booleanType(),
    name: stringType().nonempty(),
    notes: stringType(),
    payment_mode: PaymentModeSchema,
    phone: stringType(),
    property_id: anyType(),
    provided_discount: anyType().default(null),
    question: stringType().nullable(),
    sort_order: anyType(),
    tax_nbr: stringType(),
    reference: stringType().nullable().optional(),
    verification_mode: stringType().nullable().default(null),
    has_opening_balance: booleanType().optional().default(false),
    cl_post_timing: ClPostTimingSchema.optional(),
});
const AgentSchema = AgentBaseSchema.superRefine((value, ctx) => {
    const trimmedCode = (value.code ?? '').trim();
    const trimmedQuestion = (value.question ?? '').trim();
    if (value.agent_type_code?.code === AgentsTypes.TOUR_OPERATOR) {
        if (value.verification_mode?.trim() !== '' && value.verification_mode !== null) {
            ctx.addIssue({
                code: ZodIssueCode.custom,
                message: `Verification mode must be empty when agent_type_code is ${AgentsTypes.TOUR_OPERATOR}.`,
                path: ['verification_mode'],
            });
        }
        if (trimmedCode !== '') {
            ctx.addIssue({
                code: ZodIssueCode.custom,
                message: `Code must be empty when agent_type_code is ${AgentsTypes.TOUR_OPERATOR}.`,
                path: ['code'],
            });
        }
        if (trimmedQuestion !== '') {
            ctx.addIssue({
                code: ZodIssueCode.custom,
                message: `Question must be empty when agent_type_code is ${AgentsTypes.TOUR_OPERATOR}.`,
                path: ['question'],
            });
        }
    }
    if (value.verification_mode === 'code' && trimmedCode.length === 0) {
        ctx.addIssue({
            code: ZodIssueCode.custom,
            message: 'Code is required when verification_mode is code.',
            path: ['code'],
        });
    }
    if (value.verification_mode === 'question' && value.question?.trim() === '') {
        ctx.addIssue({
            code: ZodIssueCode.custom,
            message: 'Question is required when verification_mode is question.',
            path: ['question'],
        });
    }
    const contractMissing = value.contract_nbr === null || value.contract_nbr === undefined || (typeof value.contract_nbr === 'string' && value.contract_nbr.trim() === '');
    if (value.agent_rate_type_code?.code === '004' && contractMissing) {
        ctx.addIssue({
            code: ZodIssueCode.custom,
            message: 'Contract number is required when agent_rate_type_code is 004.',
            path: ['contract_nbr'],
        });
    }
});
arrayType(AgentSchema).nullable();
const HandleExposedAgentPropsSchema = objectType({
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
const ZIdInfo = objectType({
    type: objectType({
        code: unionType([
            // If provided and non-empty, must have at least 3 chars
            stringType().min(3),
            // or it can be an empty string
            literalType(''),
        ])
            .optional(), // or undefined
        description: unionType([
            // If provided and non-empty, no special min
            stringType(),
            // or it can be empty string
            literalType(''),
        ])
            .optional(),
    }),
    number: unionType([
        // If provided and non-empty, must have at least 2 chars
        stringType().min(2),
        // or it can be empty string
        literalType(''),
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
const ZSharedPerson = objectType({
    id: numberType().optional(),
    // full_name: z
    //   .union([
    //     z.string().min(2), // if provided and non-empty, must have min length 2
    //     z.literal(''), // or it can be empty string
    //   ])
    //   .optional(),
    first_name: unionType([
        stringType().min(2), // if provided and non-empty, must have min length 2
        literalType(''), // or it can be empty string
    ])
        .optional(),
    // .nullable(),
    last_name: stringType().optional(),
    // .union([
    //   z.string().min(2), // if provided and non-empty, must have min length 2
    //   z.literal(''), // or it can be empty string
    // ])
    // .nullable(),
    country_id: coerce
        .number()
        .min(0) // if provided, must be >= 0
        .optional(),
    dob: stringType()
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
    is_main: booleanType().default(false),
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
                code: ZodIssueCode.custom,
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
                code: ZodIssueCode.custom,
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
        throw new ZodError(ctx);
    }
}
const ChargesSchema = objectType({
    city_tax_amount: numberType(),
    city_tax_percent: numberType(),
    net_amount: numberType(),
    service_charge_amount: numberType(),
    service_charge_percent: numberType(),
    tax_amount: numberType(),
    total_amount: numberType(),
    vat_amount: numberType(),
    vat_percent: numberType(),
});
const ExtraServiceSchema = objectType({
    booking_system_id: numberType().optional(),
    cost: coerce.number().nullable(),
    currency_id: numberType().min(1),
    description: stringType().optional().nullable(),
    end_date: stringType().nullable().optional().default(null),
    start_date: stringType().nonempty(),
    price: coerce.number().min(0.01),
    system_id: numberType().optional(),
    category: objectType({ code: stringType().nonempty() }).nullable().optional(),
    /** Physical room (unit) id this service is linked to, when the booking has multiple units. */
    pr_id: numberType().nullable().optional().default(null),
    room_identifier: stringType().nullable().optional().default(null),
    agent: AgentBaseSchema.extend({
        address: stringType().nullable(),
        agent_rate_type_code: AgentBaseSchema.shape.agent_rate_type_code.nullable(),
        agent_type_code: AgentBaseSchema.shape.agent_type_code.nullable(),
        city: stringType().nullable(),
        contact_name: stringType().nullable(),
        email: stringType().email().nullable(),
        is_active: booleanType().nullable(),
        pr_id: numberType().nullable().optional().default(null),
        is_send_guest_confirmation_email: booleanType().nullable(),
        notes: stringType().nullable(),
        payment_mode: AgentBaseSchema.shape.payment_mode.nullable(),
        phone: stringType().nullable(),
        tax_nbr: stringType().nullable(),
        cl_post_timing: AgentBaseSchema.shape.cl_post_timing.nullable(),
    }).nullable(),
    from_time: stringType().optional().nullable().default(null),
    to_time: stringType().optional().nullable().default(null),
    charges: ChargesSchema.optional(),
});
const ROOM_IN_OUT = {
    CHECKIN: '001',
    CHECKOUT: '002',
    IDLE: '000',
};

export { AgentBaseSchema as A, ExposedAgentsPropsSchema as E, HandleExposedAgentPropsSchema as H, ROOM_IN_OUT as R, ZSharedPerson as Z, AgentsTypes as a, ExposedAgentPropsSchema as b, AgentSchema as c, ExtraServiceSchema as d, validateSharedPerson as v };

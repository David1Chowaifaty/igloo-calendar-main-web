import { o as objectType, c as coerce, s as stringType, b as booleanType, g as anyType, n as numberType, l as literalType, d as ZodIssueCode, a as arrayType } from './types-BG9uwIsj.js';

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

export { AgentBaseSchema as A, ExposedAgentsPropsSchema as E, HandleExposedAgentPropsSchema as H, ExposedAgentPropsSchema as a, AgentsTypes as b, AgentSchema as c };

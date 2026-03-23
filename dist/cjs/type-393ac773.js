'use strict';

const index = require('./index-8bb117a0.js');

const AgentsTypes = {
    TRAVEL_AGENT: '001',
    CORPORATE_CLIENT: '002',
    TOUR_OPERATOR: '003',
    AFFILIATE: '004',
};

const ExposedAgentsPropsSchema = index.z.object({
    property_id: index.z.coerce.number(),
});
const CodeDescriptionSchema = index.z.object({
    code: index.z.string(),
    description: index.z.string().nullable().optional(),
});
const AgentRateTypeCodeSchema = CodeDescriptionSchema;
const AgentTypeCodeSchema = CodeDescriptionSchema;
const PaymentModeSchema = CodeDescriptionSchema;
const ClPostTimingSchema = CodeDescriptionSchema;
const AgentBaseSchema = index.z.object({
    address: index.z.string(),
    agent_rate_type_code: AgentRateTypeCodeSchema,
    agent_type_code: AgentTypeCodeSchema.required(),
    city: index.z.string(),
    code: index.z.string().trim().min(5).max(10).or(index.z.literal('')).nullable(),
    contact_name: index.z.string(),
    contract_nbr: index.z.any(),
    country_id: index.z.coerce.number().nullable(),
    currency_id: index.z.any(),
    due_balance: index.z.any(),
    email: index.z.string().email().nonempty(),
    email_copied_upon_booking: index.z.string().email().nullable(),
    id: index.z.number().default(-1),
    is_active: index.z.boolean(),
    is_send_guest_confirmation_email: index.z.boolean(),
    name: index.z.string().nonempty(),
    notes: index.z.string(),
    payment_mode: PaymentModeSchema,
    phone: index.z.string(),
    property_id: index.z.any(),
    provided_discount: index.z.any().default(null),
    question: index.z.string().nullable(),
    sort_order: index.z.any(),
    tax_nbr: index.z.string(),
    reference: index.z.string().nullable().optional(),
    verification_mode: index.z.string().nullable().default(null),
    cl_post_timing: ClPostTimingSchema,
});
const AgentSchema = AgentBaseSchema.superRefine((value, ctx) => {
    const trimmedCode = (value.code ?? '').trim();
    const trimmedQuestion = (value.question ?? '').trim();
    if (value.agent_type_code?.code === AgentsTypes.TOUR_OPERATOR) {
        if (value.verification_mode?.trim() !== '' && value.verification_mode !== null) {
            ctx.addIssue({
                code: index.z.ZodIssueCode.custom,
                message: `Verification mode must be empty when agent_type_code is ${AgentsTypes.TOUR_OPERATOR}.`,
                path: ['verification_mode'],
            });
        }
        if (trimmedCode !== '') {
            ctx.addIssue({
                code: index.z.ZodIssueCode.custom,
                message: `Code must be empty when agent_type_code is ${AgentsTypes.TOUR_OPERATOR}.`,
                path: ['code'],
            });
        }
        if (trimmedQuestion !== '') {
            ctx.addIssue({
                code: index.z.ZodIssueCode.custom,
                message: `Question must be empty when agent_type_code is ${AgentsTypes.TOUR_OPERATOR}.`,
                path: ['question'],
            });
        }
    }
    if (value.verification_mode === 'code' && trimmedCode.length === 0) {
        ctx.addIssue({
            code: index.z.ZodIssueCode.custom,
            message: 'Code is required when verification_mode is code.',
            path: ['code'],
        });
    }
    if (value.verification_mode === 'question' && value.question?.trim() === '') {
        ctx.addIssue({
            code: index.z.ZodIssueCode.custom,
            message: 'Question is required when verification_mode is question.',
            path: ['question'],
        });
    }
    const contractMissing = value.contract_nbr === null || value.contract_nbr === undefined || (typeof value.contract_nbr === 'string' && value.contract_nbr.trim() === '');
    if (value.agent_rate_type_code?.code === '004' && contractMissing) {
        ctx.addIssue({
            code: index.z.ZodIssueCode.custom,
            message: 'Contract number is required when agent_rate_type_code is 004.',
            path: ['contract_nbr'],
        });
    }
});
index.z.array(AgentSchema).nullable();
const HandleExposedAgentPropsSchema = index.z.object({
    agent: AgentSchema,
});

exports.AgentBaseSchema = AgentBaseSchema;
exports.AgentSchema = AgentSchema;
exports.AgentsTypes = AgentsTypes;
exports.ExposedAgentsPropsSchema = ExposedAgentsPropsSchema;
exports.HandleExposedAgentPropsSchema = HandleExposedAgentPropsSchema;

//# sourceMappingURL=type-393ac773.js.map
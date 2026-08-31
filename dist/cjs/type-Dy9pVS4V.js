'use strict';

var index = require('./index-CLqkDPTC.js');

const AgentsTypes = {
    TOUR_OPERATOR: '003'};

const ExposedAgentsPropsSchema = index.libExports.z.object({
    property_id: index.libExports.z.coerce.number(),
});
const ExposedAgentPropsSchema = index.libExports.z.object({
    id: index.libExports.z.coerce.number(),
});
const CodeDescriptionSchema = index.libExports.z.object({
    code: index.libExports.z.string(),
    description: index.libExports.z.string().nullable().optional(),
});
const AgentRateTypeCodeSchema = CodeDescriptionSchema;
const AgentTypeCodeSchema = CodeDescriptionSchema;
const PaymentModeSchema = CodeDescriptionSchema;
const ClPostTimingSchema = CodeDescriptionSchema;
const AgentBaseSchema = index.libExports.z.object({
    address: index.libExports.z.string(),
    agent_rate_type_code: AgentRateTypeCodeSchema,
    agent_type_code: AgentTypeCodeSchema.required(),
    city: index.libExports.z.string(),
    code: index.libExports.z.string().trim().min(5).max(10).or(index.libExports.z.literal('')).nullable(),
    contact_name: index.libExports.z.string(),
    contract_nbr: index.libExports.z.any(),
    country_id: index.libExports.z.coerce.number().nullable(),
    currency_id: index.libExports.z.any(),
    due_balance: index.libExports.z.any(),
    email: index.libExports.z.string().email().nonempty(),
    email_copied_upon_booking: index.libExports.z.string().email().nullable(),
    id: index.libExports.z.number().default(-1),
    is_active: index.libExports.z.boolean(),
    is_send_guest_confirmation_email: index.libExports.z.boolean(),
    name: index.libExports.z.string().nonempty(),
    notes: index.libExports.z.string(),
    payment_mode: PaymentModeSchema,
    phone: index.libExports.z.string(),
    property_id: index.libExports.z.any(),
    provided_discount: index.libExports.z.any().default(null),
    question: index.libExports.z.string().nullable(),
    sort_order: index.libExports.z.any(),
    tax_nbr: index.libExports.z.string(),
    reference: index.libExports.z.string().nullable().optional(),
    verification_mode: index.libExports.z.string().nullable().default(null),
    has_opening_balance: index.libExports.z.boolean().optional().default(false),
    cl_post_timing: ClPostTimingSchema.optional(),
});
const AgentSchema = AgentBaseSchema.superRefine((value, ctx) => {
    const trimmedCode = (value.code ?? '').trim();
    const trimmedQuestion = (value.question ?? '').trim();
    if (value.agent_type_code?.code === AgentsTypes.TOUR_OPERATOR) {
        if (value.verification_mode?.trim() !== '' && value.verification_mode !== null) {
            ctx.addIssue({
                code: index.libExports.z.ZodIssueCode.custom,
                message: `Verification mode must be empty when agent_type_code is ${AgentsTypes.TOUR_OPERATOR}.`,
                path: ['verification_mode'],
            });
        }
        if (trimmedCode !== '') {
            ctx.addIssue({
                code: index.libExports.z.ZodIssueCode.custom,
                message: `Code must be empty when agent_type_code is ${AgentsTypes.TOUR_OPERATOR}.`,
                path: ['code'],
            });
        }
        if (trimmedQuestion !== '') {
            ctx.addIssue({
                code: index.libExports.z.ZodIssueCode.custom,
                message: `Question must be empty when agent_type_code is ${AgentsTypes.TOUR_OPERATOR}.`,
                path: ['question'],
            });
        }
    }
    if (value.verification_mode === 'code' && trimmedCode.length === 0) {
        ctx.addIssue({
            code: index.libExports.z.ZodIssueCode.custom,
            message: 'Code is required when verification_mode is code.',
            path: ['code'],
        });
    }
    if (value.verification_mode === 'question' && value.question?.trim() === '') {
        ctx.addIssue({
            code: index.libExports.z.ZodIssueCode.custom,
            message: 'Question is required when verification_mode is question.',
            path: ['question'],
        });
    }
    const contractMissing = value.contract_nbr === null || value.contract_nbr === undefined || (typeof value.contract_nbr === 'string' && value.contract_nbr.trim() === '');
    if (value.agent_rate_type_code?.code === '004' && contractMissing) {
        ctx.addIssue({
            code: index.libExports.z.ZodIssueCode.custom,
            message: 'Contract number is required when agent_rate_type_code is 004.',
            path: ['contract_nbr'],
        });
    }
});
index.libExports.z.array(AgentSchema).nullable();
const HandleExposedAgentPropsSchema = index.libExports.z.object({
    agent: AgentSchema,
});

exports.AgentBaseSchema = AgentBaseSchema;
exports.AgentSchema = AgentSchema;
exports.AgentsTypes = AgentsTypes;
exports.ExposedAgentPropsSchema = ExposedAgentPropsSchema;
exports.ExposedAgentsPropsSchema = ExposedAgentsPropsSchema;
exports.HandleExposedAgentPropsSchema = HandleExposedAgentPropsSchema;

'use strict';

var types = require('./types-BlCoz3jZ.js');

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

exports.AgentBaseSchema = AgentBaseSchema;
exports.AgentSchema = AgentSchema;
exports.AgentsTypes = AgentsTypes;
exports.ExposedAgentPropsSchema = ExposedAgentPropsSchema;
exports.ExposedAgentsPropsSchema = ExposedAgentsPropsSchema;
exports.HandleExposedAgentPropsSchema = HandleExposedAgentPropsSchema;

import { a as axios } from './axios-CleaxLzD.js';
import { a as AgentsTypes } from './type-CBqEYOkK.js';
import { l as libExports } from './index-DeW5X45W.js';

const ExposedAgentsPropsSchema = libExports.z.object({
    property_id: libExports.z.coerce.number(),
});
const ExposedAgentPropsSchema = libExports.z.object({
    id: libExports.z.coerce.number(),
});
const CodeDescriptionSchema = libExports.z.object({
    code: libExports.z.string(),
    description: libExports.z.string().nullable().optional(),
});
const AgentRateTypeCodeSchema = CodeDescriptionSchema;
const AgentTypeCodeSchema = CodeDescriptionSchema;
const PaymentModeSchema = CodeDescriptionSchema;
const ClPostTimingSchema = CodeDescriptionSchema;
const AgentBaseSchema = libExports.z.object({
    address: libExports.z.string(),
    agent_rate_type_code: AgentRateTypeCodeSchema,
    agent_type_code: AgentTypeCodeSchema.required(),
    city: libExports.z.string(),
    code: libExports.z.string().trim().min(5).max(10).or(libExports.z.literal('')).nullable(),
    contact_name: libExports.z.string(),
    contract_nbr: libExports.z.any(),
    country_id: libExports.z.coerce.number().nullable(),
    currency_id: libExports.z.any(),
    due_balance: libExports.z.any(),
    email: libExports.z.string().email().nonempty(),
    email_copied_upon_booking: libExports.z.string().email().nullable(),
    id: libExports.z.number().default(-1),
    is_active: libExports.z.boolean(),
    is_send_guest_confirmation_email: libExports.z.boolean(),
    name: libExports.z.string().nonempty(),
    notes: libExports.z.string(),
    payment_mode: PaymentModeSchema,
    phone: libExports.z.string(),
    property_id: libExports.z.any(),
    provided_discount: libExports.z.any().default(null),
    question: libExports.z.string().nullable(),
    sort_order: libExports.z.any(),
    tax_nbr: libExports.z.string(),
    reference: libExports.z.string().nullable().optional(),
    verification_mode: libExports.z.string().nullable().default(null),
    has_opening_balance: libExports.z.boolean().optional().default(false),
    cl_post_timing: ClPostTimingSchema.optional(),
});
const AgentSchema = AgentBaseSchema.superRefine((value, ctx) => {
    const trimmedCode = (value.code ?? '').trim();
    const trimmedQuestion = (value.question ?? '').trim();
    if (value.agent_type_code?.code === AgentsTypes.TOUR_OPERATOR) {
        if (value.verification_mode?.trim() !== '' && value.verification_mode !== null) {
            ctx.addIssue({
                code: libExports.z.ZodIssueCode.custom,
                message: `Verification mode must be empty when agent_type_code is ${AgentsTypes.TOUR_OPERATOR}.`,
                path: ['verification_mode'],
            });
        }
        if (trimmedCode !== '') {
            ctx.addIssue({
                code: libExports.z.ZodIssueCode.custom,
                message: `Code must be empty when agent_type_code is ${AgentsTypes.TOUR_OPERATOR}.`,
                path: ['code'],
            });
        }
        if (trimmedQuestion !== '') {
            ctx.addIssue({
                code: libExports.z.ZodIssueCode.custom,
                message: `Question must be empty when agent_type_code is ${AgentsTypes.TOUR_OPERATOR}.`,
                path: ['question'],
            });
        }
    }
    if (value.verification_mode === 'code' && trimmedCode.length === 0) {
        ctx.addIssue({
            code: libExports.z.ZodIssueCode.custom,
            message: 'Code is required when verification_mode is code.',
            path: ['code'],
        });
    }
    if (value.verification_mode === 'question' && value.question?.trim() === '') {
        ctx.addIssue({
            code: libExports.z.ZodIssueCode.custom,
            message: 'Question is required when verification_mode is question.',
            path: ['question'],
        });
    }
    const contractMissing = value.contract_nbr === null || value.contract_nbr === undefined || (typeof value.contract_nbr === 'string' && value.contract_nbr.trim() === '');
    if (value.agent_rate_type_code?.code === '004' && contractMissing) {
        ctx.addIssue({
            code: libExports.z.ZodIssueCode.custom,
            message: 'Contract number is required when agent_rate_type_code is 004.',
            path: ['contract_nbr'],
        });
    }
});
libExports.z.array(AgentSchema).nullable();
const HandleExposedAgentPropsSchema = libExports.z.object({
    agent: AgentSchema,
});

class AgentsService {
    async getExposedAgents(props) {
        const payload = ExposedAgentsPropsSchema.parse(props);
        const { data } = await axios.post('/Get_Exposed_Agents', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getExposedAgent(props) {
        const payload = ExposedAgentPropsSchema.parse(props);
        const { data } = await axios.post('/Get_Exposed_Agent', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async handleExposedAgent(props) {
        const payload = HandleExposedAgentPropsSchema.parse(props);
        const { data } = await axios.post('/Handle_Exposed_Agent', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}

export { AgentsService as A };

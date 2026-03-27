import { z } from 'zod';
export declare const ExposedAgentsPropsSchema: z.ZodObject<{
    property_id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    property_id?: number;
}, {
    property_id?: number;
}>;
export type ExposedAgentsProps = z.infer<typeof ExposedAgentsPropsSchema>;
export declare const CodeDescriptionSchema: z.ZodObject<{
    code: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    code?: string;
    description?: string;
}, {
    code?: string;
    description?: string;
}>;
export type CodeDescription = z.infer<typeof CodeDescriptionSchema>;
export declare const AgentRateTypeCodeSchema: z.ZodObject<{
    code: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    code?: string;
    description?: string;
}, {
    code?: string;
    description?: string;
}>;
export type AgentRateTypeCode = z.infer<typeof AgentRateTypeCodeSchema>;
export declare const AgentTypeCodeSchema: z.ZodObject<{
    code: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    code?: string;
    description?: string;
}, {
    code?: string;
    description?: string;
}>;
export type AgentTypeCode = z.infer<typeof AgentTypeCodeSchema>;
export declare const PaymentModeSchema: z.ZodObject<{
    code: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    code?: string;
    description?: string;
}, {
    code?: string;
    description?: string;
}>;
export type PaymentMode = z.infer<typeof PaymentModeSchema>;
export declare const ClPostTimingSchema: z.ZodObject<{
    code: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    code?: string;
    description?: string;
}, {
    code?: string;
    description?: string;
}>;
export type ClPostTiming = z.infer<typeof ClPostTimingSchema>;
export declare const AgentBaseSchema: z.ZodObject<{
    address: z.ZodString;
    agent_rate_type_code: z.ZodObject<{
        code: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
    }, {
        code?: string;
        description?: string;
    }>;
    agent_type_code: z.ZodObject<{
        code: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
    }, {
        code?: string;
        description?: string;
    }>;
    city: z.ZodString;
    code: z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>;
    contact_name: z.ZodString;
    contract_nbr: z.ZodAny;
    country_id: z.ZodNullable<z.ZodNumber>;
    currency_id: z.ZodAny;
    due_balance: z.ZodAny;
    email: z.ZodString;
    email_copied_upon_booking: z.ZodNullable<z.ZodString>;
    id: z.ZodDefault<z.ZodNumber>;
    is_active: z.ZodBoolean;
    is_send_guest_confirmation_email: z.ZodBoolean;
    name: z.ZodString;
    notes: z.ZodString;
    payment_mode: z.ZodObject<{
        code: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
    }, {
        code?: string;
        description?: string;
    }>;
    phone: z.ZodString;
    property_id: z.ZodAny;
    provided_discount: z.ZodDefault<z.ZodAny>;
    question: z.ZodNullable<z.ZodString>;
    sort_order: z.ZodAny;
    tax_nbr: z.ZodString;
    reference: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    verification_mode: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cl_post_timing: z.ZodObject<{
        code: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
    }, {
        code?: string;
        description?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    email?: string;
    property_id?: any;
    code?: string;
    address?: string;
    agent_rate_type_code?: {
        code?: string;
        description?: string;
    };
    agent_type_code?: {
        code?: string;
        description?: string;
    };
    city?: string;
    contact_name?: string;
    contract_nbr?: any;
    country_id?: number;
    currency_id?: any;
    due_balance?: any;
    email_copied_upon_booking?: string;
    id?: number;
    is_active?: boolean;
    is_send_guest_confirmation_email?: boolean;
    notes?: string;
    payment_mode?: {
        code?: string;
        description?: string;
    };
    phone?: string;
    provided_discount?: any;
    question?: string;
    sort_order?: any;
    tax_nbr?: string;
    reference?: string;
    verification_mode?: string;
    cl_post_timing?: {
        code?: string;
        description?: string;
    };
}, {
    name?: string;
    email?: string;
    property_id?: any;
    code?: string;
    address?: string;
    agent_rate_type_code?: {
        code?: string;
        description?: string;
    };
    agent_type_code?: {
        code?: string;
        description?: string;
    };
    city?: string;
    contact_name?: string;
    contract_nbr?: any;
    country_id?: number;
    currency_id?: any;
    due_balance?: any;
    email_copied_upon_booking?: string;
    id?: number;
    is_active?: boolean;
    is_send_guest_confirmation_email?: boolean;
    notes?: string;
    payment_mode?: {
        code?: string;
        description?: string;
    };
    phone?: string;
    provided_discount?: any;
    question?: string;
    sort_order?: any;
    tax_nbr?: string;
    reference?: string;
    verification_mode?: string;
    cl_post_timing?: {
        code?: string;
        description?: string;
    };
}>;
export declare const AgentSchema: z.ZodEffects<z.ZodObject<{
    address: z.ZodString;
    agent_rate_type_code: z.ZodObject<{
        code: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
    }, {
        code?: string;
        description?: string;
    }>;
    agent_type_code: z.ZodObject<{
        code: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
    }, {
        code?: string;
        description?: string;
    }>;
    city: z.ZodString;
    code: z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>;
    contact_name: z.ZodString;
    contract_nbr: z.ZodAny;
    country_id: z.ZodNullable<z.ZodNumber>;
    currency_id: z.ZodAny;
    due_balance: z.ZodAny;
    email: z.ZodString;
    email_copied_upon_booking: z.ZodNullable<z.ZodString>;
    id: z.ZodDefault<z.ZodNumber>;
    is_active: z.ZodBoolean;
    is_send_guest_confirmation_email: z.ZodBoolean;
    name: z.ZodString;
    notes: z.ZodString;
    payment_mode: z.ZodObject<{
        code: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
    }, {
        code?: string;
        description?: string;
    }>;
    phone: z.ZodString;
    property_id: z.ZodAny;
    provided_discount: z.ZodDefault<z.ZodAny>;
    question: z.ZodNullable<z.ZodString>;
    sort_order: z.ZodAny;
    tax_nbr: z.ZodString;
    reference: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    verification_mode: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cl_post_timing: z.ZodObject<{
        code: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
    }, {
        code?: string;
        description?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    email?: string;
    property_id?: any;
    code?: string;
    address?: string;
    agent_rate_type_code?: {
        code?: string;
        description?: string;
    };
    agent_type_code?: {
        code?: string;
        description?: string;
    };
    city?: string;
    contact_name?: string;
    contract_nbr?: any;
    country_id?: number;
    currency_id?: any;
    due_balance?: any;
    email_copied_upon_booking?: string;
    id?: number;
    is_active?: boolean;
    is_send_guest_confirmation_email?: boolean;
    notes?: string;
    payment_mode?: {
        code?: string;
        description?: string;
    };
    phone?: string;
    provided_discount?: any;
    question?: string;
    sort_order?: any;
    tax_nbr?: string;
    reference?: string;
    verification_mode?: string;
    cl_post_timing?: {
        code?: string;
        description?: string;
    };
}, {
    name?: string;
    email?: string;
    property_id?: any;
    code?: string;
    address?: string;
    agent_rate_type_code?: {
        code?: string;
        description?: string;
    };
    agent_type_code?: {
        code?: string;
        description?: string;
    };
    city?: string;
    contact_name?: string;
    contract_nbr?: any;
    country_id?: number;
    currency_id?: any;
    due_balance?: any;
    email_copied_upon_booking?: string;
    id?: number;
    is_active?: boolean;
    is_send_guest_confirmation_email?: boolean;
    notes?: string;
    payment_mode?: {
        code?: string;
        description?: string;
    };
    phone?: string;
    provided_discount?: any;
    question?: string;
    sort_order?: any;
    tax_nbr?: string;
    reference?: string;
    verification_mode?: string;
    cl_post_timing?: {
        code?: string;
        description?: string;
    };
}>, {
    name?: string;
    email?: string;
    property_id?: any;
    code?: string;
    address?: string;
    agent_rate_type_code?: {
        code?: string;
        description?: string;
    };
    agent_type_code?: {
        code?: string;
        description?: string;
    };
    city?: string;
    contact_name?: string;
    contract_nbr?: any;
    country_id?: number;
    currency_id?: any;
    due_balance?: any;
    email_copied_upon_booking?: string;
    id?: number;
    is_active?: boolean;
    is_send_guest_confirmation_email?: boolean;
    notes?: string;
    payment_mode?: {
        code?: string;
        description?: string;
    };
    phone?: string;
    provided_discount?: any;
    question?: string;
    sort_order?: any;
    tax_nbr?: string;
    reference?: string;
    verification_mode?: string;
    cl_post_timing?: {
        code?: string;
        description?: string;
    };
}, {
    name?: string;
    email?: string;
    property_id?: any;
    code?: string;
    address?: string;
    agent_rate_type_code?: {
        code?: string;
        description?: string;
    };
    agent_type_code?: {
        code?: string;
        description?: string;
    };
    city?: string;
    contact_name?: string;
    contract_nbr?: any;
    country_id?: number;
    currency_id?: any;
    due_balance?: any;
    email_copied_upon_booking?: string;
    id?: number;
    is_active?: boolean;
    is_send_guest_confirmation_email?: boolean;
    notes?: string;
    payment_mode?: {
        code?: string;
        description?: string;
    };
    phone?: string;
    provided_discount?: any;
    question?: string;
    sort_order?: any;
    tax_nbr?: string;
    reference?: string;
    verification_mode?: string;
    cl_post_timing?: {
        code?: string;
        description?: string;
    };
}>;
export type Agent = z.infer<typeof AgentSchema>;
export declare const AgentsSchema: z.ZodNullable<z.ZodArray<z.ZodEffects<z.ZodObject<{
    address: z.ZodString;
    agent_rate_type_code: z.ZodObject<{
        code: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
    }, {
        code?: string;
        description?: string;
    }>;
    agent_type_code: z.ZodObject<{
        code: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
    }, {
        code?: string;
        description?: string;
    }>;
    city: z.ZodString;
    code: z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>;
    contact_name: z.ZodString;
    contract_nbr: z.ZodAny;
    country_id: z.ZodNullable<z.ZodNumber>;
    currency_id: z.ZodAny;
    due_balance: z.ZodAny;
    email: z.ZodString;
    email_copied_upon_booking: z.ZodNullable<z.ZodString>;
    id: z.ZodDefault<z.ZodNumber>;
    is_active: z.ZodBoolean;
    is_send_guest_confirmation_email: z.ZodBoolean;
    name: z.ZodString;
    notes: z.ZodString;
    payment_mode: z.ZodObject<{
        code: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
    }, {
        code?: string;
        description?: string;
    }>;
    phone: z.ZodString;
    property_id: z.ZodAny;
    provided_discount: z.ZodDefault<z.ZodAny>;
    question: z.ZodNullable<z.ZodString>;
    sort_order: z.ZodAny;
    tax_nbr: z.ZodString;
    reference: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    verification_mode: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cl_post_timing: z.ZodObject<{
        code: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
    }, {
        code?: string;
        description?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    email?: string;
    property_id?: any;
    code?: string;
    address?: string;
    agent_rate_type_code?: {
        code?: string;
        description?: string;
    };
    agent_type_code?: {
        code?: string;
        description?: string;
    };
    city?: string;
    contact_name?: string;
    contract_nbr?: any;
    country_id?: number;
    currency_id?: any;
    due_balance?: any;
    email_copied_upon_booking?: string;
    id?: number;
    is_active?: boolean;
    is_send_guest_confirmation_email?: boolean;
    notes?: string;
    payment_mode?: {
        code?: string;
        description?: string;
    };
    phone?: string;
    provided_discount?: any;
    question?: string;
    sort_order?: any;
    tax_nbr?: string;
    reference?: string;
    verification_mode?: string;
    cl_post_timing?: {
        code?: string;
        description?: string;
    };
}, {
    name?: string;
    email?: string;
    property_id?: any;
    code?: string;
    address?: string;
    agent_rate_type_code?: {
        code?: string;
        description?: string;
    };
    agent_type_code?: {
        code?: string;
        description?: string;
    };
    city?: string;
    contact_name?: string;
    contract_nbr?: any;
    country_id?: number;
    currency_id?: any;
    due_balance?: any;
    email_copied_upon_booking?: string;
    id?: number;
    is_active?: boolean;
    is_send_guest_confirmation_email?: boolean;
    notes?: string;
    payment_mode?: {
        code?: string;
        description?: string;
    };
    phone?: string;
    provided_discount?: any;
    question?: string;
    sort_order?: any;
    tax_nbr?: string;
    reference?: string;
    verification_mode?: string;
    cl_post_timing?: {
        code?: string;
        description?: string;
    };
}>, {
    name?: string;
    email?: string;
    property_id?: any;
    code?: string;
    address?: string;
    agent_rate_type_code?: {
        code?: string;
        description?: string;
    };
    agent_type_code?: {
        code?: string;
        description?: string;
    };
    city?: string;
    contact_name?: string;
    contract_nbr?: any;
    country_id?: number;
    currency_id?: any;
    due_balance?: any;
    email_copied_upon_booking?: string;
    id?: number;
    is_active?: boolean;
    is_send_guest_confirmation_email?: boolean;
    notes?: string;
    payment_mode?: {
        code?: string;
        description?: string;
    };
    phone?: string;
    provided_discount?: any;
    question?: string;
    sort_order?: any;
    tax_nbr?: string;
    reference?: string;
    verification_mode?: string;
    cl_post_timing?: {
        code?: string;
        description?: string;
    };
}, {
    name?: string;
    email?: string;
    property_id?: any;
    code?: string;
    address?: string;
    agent_rate_type_code?: {
        code?: string;
        description?: string;
    };
    agent_type_code?: {
        code?: string;
        description?: string;
    };
    city?: string;
    contact_name?: string;
    contract_nbr?: any;
    country_id?: number;
    currency_id?: any;
    due_balance?: any;
    email_copied_upon_booking?: string;
    id?: number;
    is_active?: boolean;
    is_send_guest_confirmation_email?: boolean;
    notes?: string;
    payment_mode?: {
        code?: string;
        description?: string;
    };
    phone?: string;
    provided_discount?: any;
    question?: string;
    sort_order?: any;
    tax_nbr?: string;
    reference?: string;
    verification_mode?: string;
    cl_post_timing?: {
        code?: string;
        description?: string;
    };
}>, "many">>;
export type Agents = z.infer<typeof AgentsSchema>;
export declare const HandleExposedAgentPropsSchema: z.ZodObject<{
    agent: z.ZodEffects<z.ZodObject<{
        address: z.ZodString;
        agent_rate_type_code: z.ZodObject<{
            code: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code?: string;
            description?: string;
        }, {
            code?: string;
            description?: string;
        }>;
        agent_type_code: z.ZodObject<{
            code: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code?: string;
            description?: string;
        }, {
            code?: string;
            description?: string;
        }>;
        city: z.ZodString;
        code: z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>;
        contact_name: z.ZodString;
        contract_nbr: z.ZodAny;
        country_id: z.ZodNullable<z.ZodNumber>;
        currency_id: z.ZodAny;
        due_balance: z.ZodAny;
        email: z.ZodString;
        email_copied_upon_booking: z.ZodNullable<z.ZodString>;
        id: z.ZodDefault<z.ZodNumber>;
        is_active: z.ZodBoolean;
        is_send_guest_confirmation_email: z.ZodBoolean;
        name: z.ZodString;
        notes: z.ZodString;
        payment_mode: z.ZodObject<{
            code: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code?: string;
            description?: string;
        }, {
            code?: string;
            description?: string;
        }>;
        phone: z.ZodString;
        property_id: z.ZodAny;
        provided_discount: z.ZodDefault<z.ZodAny>;
        question: z.ZodNullable<z.ZodString>;
        sort_order: z.ZodAny;
        tax_nbr: z.ZodString;
        reference: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        verification_mode: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        cl_post_timing: z.ZodObject<{
            code: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code?: string;
            description?: string;
        }, {
            code?: string;
            description?: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        email?: string;
        property_id?: any;
        code?: string;
        address?: string;
        agent_rate_type_code?: {
            code?: string;
            description?: string;
        };
        agent_type_code?: {
            code?: string;
            description?: string;
        };
        city?: string;
        contact_name?: string;
        contract_nbr?: any;
        country_id?: number;
        currency_id?: any;
        due_balance?: any;
        email_copied_upon_booking?: string;
        id?: number;
        is_active?: boolean;
        is_send_guest_confirmation_email?: boolean;
        notes?: string;
        payment_mode?: {
            code?: string;
            description?: string;
        };
        phone?: string;
        provided_discount?: any;
        question?: string;
        sort_order?: any;
        tax_nbr?: string;
        reference?: string;
        verification_mode?: string;
        cl_post_timing?: {
            code?: string;
            description?: string;
        };
    }, {
        name?: string;
        email?: string;
        property_id?: any;
        code?: string;
        address?: string;
        agent_rate_type_code?: {
            code?: string;
            description?: string;
        };
        agent_type_code?: {
            code?: string;
            description?: string;
        };
        city?: string;
        contact_name?: string;
        contract_nbr?: any;
        country_id?: number;
        currency_id?: any;
        due_balance?: any;
        email_copied_upon_booking?: string;
        id?: number;
        is_active?: boolean;
        is_send_guest_confirmation_email?: boolean;
        notes?: string;
        payment_mode?: {
            code?: string;
            description?: string;
        };
        phone?: string;
        provided_discount?: any;
        question?: string;
        sort_order?: any;
        tax_nbr?: string;
        reference?: string;
        verification_mode?: string;
        cl_post_timing?: {
            code?: string;
            description?: string;
        };
    }>, {
        name?: string;
        email?: string;
        property_id?: any;
        code?: string;
        address?: string;
        agent_rate_type_code?: {
            code?: string;
            description?: string;
        };
        agent_type_code?: {
            code?: string;
            description?: string;
        };
        city?: string;
        contact_name?: string;
        contract_nbr?: any;
        country_id?: number;
        currency_id?: any;
        due_balance?: any;
        email_copied_upon_booking?: string;
        id?: number;
        is_active?: boolean;
        is_send_guest_confirmation_email?: boolean;
        notes?: string;
        payment_mode?: {
            code?: string;
            description?: string;
        };
        phone?: string;
        provided_discount?: any;
        question?: string;
        sort_order?: any;
        tax_nbr?: string;
        reference?: string;
        verification_mode?: string;
        cl_post_timing?: {
            code?: string;
            description?: string;
        };
    }, {
        name?: string;
        email?: string;
        property_id?: any;
        code?: string;
        address?: string;
        agent_rate_type_code?: {
            code?: string;
            description?: string;
        };
        agent_type_code?: {
            code?: string;
            description?: string;
        };
        city?: string;
        contact_name?: string;
        contract_nbr?: any;
        country_id?: number;
        currency_id?: any;
        due_balance?: any;
        email_copied_upon_booking?: string;
        id?: number;
        is_active?: boolean;
        is_send_guest_confirmation_email?: boolean;
        notes?: string;
        payment_mode?: {
            code?: string;
            description?: string;
        };
        phone?: string;
        provided_discount?: any;
        question?: string;
        sort_order?: any;
        tax_nbr?: string;
        reference?: string;
        verification_mode?: string;
        cl_post_timing?: {
            code?: string;
            description?: string;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    agent?: {
        name?: string;
        email?: string;
        property_id?: any;
        code?: string;
        address?: string;
        agent_rate_type_code?: {
            code?: string;
            description?: string;
        };
        agent_type_code?: {
            code?: string;
            description?: string;
        };
        city?: string;
        contact_name?: string;
        contract_nbr?: any;
        country_id?: number;
        currency_id?: any;
        due_balance?: any;
        email_copied_upon_booking?: string;
        id?: number;
        is_active?: boolean;
        is_send_guest_confirmation_email?: boolean;
        notes?: string;
        payment_mode?: {
            code?: string;
            description?: string;
        };
        phone?: string;
        provided_discount?: any;
        question?: string;
        sort_order?: any;
        tax_nbr?: string;
        reference?: string;
        verification_mode?: string;
        cl_post_timing?: {
            code?: string;
            description?: string;
        };
    };
}, {
    agent?: {
        name?: string;
        email?: string;
        property_id?: any;
        code?: string;
        address?: string;
        agent_rate_type_code?: {
            code?: string;
            description?: string;
        };
        agent_type_code?: {
            code?: string;
            description?: string;
        };
        city?: string;
        contact_name?: string;
        contract_nbr?: any;
        country_id?: number;
        currency_id?: any;
        due_balance?: any;
        email_copied_upon_booking?: string;
        id?: number;
        is_active?: boolean;
        is_send_guest_confirmation_email?: boolean;
        notes?: string;
        payment_mode?: {
            code?: string;
            description?: string;
        };
        phone?: string;
        provided_discount?: any;
        question?: string;
        sort_order?: any;
        tax_nbr?: string;
        reference?: string;
        verification_mode?: string;
        cl_post_timing?: {
            code?: string;
            description?: string;
        };
    };
}>;
export type HandleExposedAgentProps = z.infer<typeof HandleExposedAgentPropsSchema>;

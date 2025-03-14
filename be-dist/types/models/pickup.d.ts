import { z } from 'zod';
import moment from 'moment';
export declare const ZAllowedLocation: z.ZodObject<{
    description: z.ZodString;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id?: number;
    description?: string;
}, {
    id?: number;
    description?: string;
}>;
export declare const ZVehicle: z.ZodObject<{
    code: z.ZodString;
    description: z.ZodString;
    capacity: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    code?: string;
    description?: string;
    capacity?: number;
}, {
    code?: string;
    description?: string;
    capacity?: number;
}>;
export declare const ZPriceModel: z.ZodObject<{
    code: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code?: string;
    description?: string;
}, {
    code?: string;
    description?: string;
}>;
export declare const ZAllowedOptions: z.ZodObject<{
    amount: z.ZodNumber;
    currency: z.ZodObject<{
        code: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        symbol: z.ZodString;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        symbol?: string;
        code?: string;
        name?: string;
        id?: number;
    }, {
        symbol?: string;
        code?: string;
        name?: string;
        id?: number;
    }>;
    id: z.ZodNumber;
    location: z.ZodObject<{
        description: z.ZodString;
        id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id?: number;
        description?: string;
    }, {
        id?: number;
        description?: string;
    }>;
    vehicle: z.ZodObject<{
        code: z.ZodString;
        description: z.ZodString;
        capacity: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
        capacity?: number;
    }, {
        code?: string;
        description?: string;
        capacity?: number;
    }>;
    pricing_model: z.ZodObject<{
        code: z.ZodString;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
    }, {
        code?: string;
        description?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    id?: number;
    location?: {
        id?: number;
        description?: string;
    };
    currency?: {
        symbol?: string;
        code?: string;
        name?: string;
        id?: number;
    };
    amount?: number;
    vehicle?: {
        code?: string;
        description?: string;
        capacity?: number;
    };
    pricing_model?: {
        code?: string;
        description?: string;
    };
}, {
    id?: number;
    location?: {
        id?: number;
        description?: string;
    };
    currency?: {
        symbol?: string;
        code?: string;
        name?: string;
        id?: number;
    };
    amount?: number;
    vehicle?: {
        code?: string;
        description?: string;
        capacity?: number;
    };
    pricing_model?: {
        code?: string;
        description?: string;
    };
}>;
export declare const PickupFormData: z.ZodObject<{
    location: z.ZodNumber;
    flight_details: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    due_upon_booking: z.ZodString;
    number_of_vehicles: z.ZodNumber;
    currency: z.ZodObject<{
        code: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        symbol: z.ZodString;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        symbol?: string;
        code?: string;
        name?: string;
        id?: number;
    }, {
        symbol?: string;
        code?: string;
        name?: string;
        id?: number;
    }>;
    arrival_time: z.ZodString;
    arrival_date: z.ZodType<moment.Moment, z.ZodTypeDef, moment.Moment>;
    selected_option: z.ZodObject<{
        amount: z.ZodNumber;
        currency: z.ZodObject<{
            code: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
            symbol: z.ZodString;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            symbol?: string;
            code?: string;
            name?: string;
            id?: number;
        }, {
            symbol?: string;
            code?: string;
            name?: string;
            id?: number;
        }>;
        id: z.ZodNumber;
        location: z.ZodObject<{
            description: z.ZodString;
            id: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id?: number;
            description?: string;
        }, {
            id?: number;
            description?: string;
        }>;
        vehicle: z.ZodObject<{
            code: z.ZodString;
            description: z.ZodString;
            capacity: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            code?: string;
            description?: string;
            capacity?: number;
        }, {
            code?: string;
            description?: string;
            capacity?: number;
        }>;
        pricing_model: z.ZodObject<{
            code: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code?: string;
            description?: string;
        }, {
            code?: string;
            description?: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        id?: number;
        location?: {
            id?: number;
            description?: string;
        };
        currency?: {
            symbol?: string;
            code?: string;
            name?: string;
            id?: number;
        };
        amount?: number;
        vehicle?: {
            code?: string;
            description?: string;
            capacity?: number;
        };
        pricing_model?: {
            code?: string;
            description?: string;
        };
    }, {
        id?: number;
        location?: {
            id?: number;
            description?: string;
        };
        currency?: {
            symbol?: string;
            code?: string;
            name?: string;
            id?: number;
        };
        amount?: number;
        vehicle?: {
            code?: string;
            description?: string;
            capacity?: number;
        };
        pricing_model?: {
            code?: string;
            description?: string;
        };
    }>;
    vehicle_type_code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    location?: number;
    currency?: {
        symbol?: string;
        code?: string;
        name?: string;
        id?: number;
    };
    arrival_time?: string;
    flight_details?: string;
    due_upon_booking?: string;
    number_of_vehicles?: number;
    arrival_date?: moment.Moment;
    selected_option?: {
        id?: number;
        location?: {
            id?: number;
            description?: string;
        };
        currency?: {
            symbol?: string;
            code?: string;
            name?: string;
            id?: number;
        };
        amount?: number;
        vehicle?: {
            code?: string;
            description?: string;
            capacity?: number;
        };
        pricing_model?: {
            code?: string;
            description?: string;
        };
    };
    vehicle_type_code?: string;
}, {
    location?: number;
    currency?: {
        symbol?: string;
        code?: string;
        name?: string;
        id?: number;
    };
    arrival_time?: string;
    flight_details?: string;
    due_upon_booking?: string;
    number_of_vehicles?: number;
    arrival_date?: moment.Moment;
    selected_option?: {
        id?: number;
        location?: {
            id?: number;
            description?: string;
        };
        currency?: {
            symbol?: string;
            code?: string;
            name?: string;
            id?: number;
        };
        amount?: number;
        vehicle?: {
            code?: string;
            description?: string;
            capacity?: number;
        };
        pricing_model?: {
            code?: string;
            description?: string;
        };
    };
    vehicle_type_code?: string;
}>;
export declare const ZBookingPickupInfo: z.ZodObject<{
    currency: z.ZodObject<{
        code: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        symbol: z.ZodString;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        symbol?: string;
        code?: string;
        name?: string;
        id?: number;
    }, {
        symbol?: string;
        code?: string;
        name?: string;
        id?: number;
    }>;
    date: z.ZodString;
    details: z.ZodString;
    hour: z.ZodNumber;
    minute: z.ZodNumber;
    nbr_of_units: z.ZodNumber;
    selected_option: z.ZodObject<{
        amount: z.ZodNumber;
        currency: z.ZodObject<{
            code: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
            symbol: z.ZodString;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            symbol?: string;
            code?: string;
            name?: string;
            id?: number;
        }, {
            symbol?: string;
            code?: string;
            name?: string;
            id?: number;
        }>;
        id: z.ZodNumber;
        location: z.ZodObject<{
            description: z.ZodString;
            id: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id?: number;
            description?: string;
        }, {
            id?: number;
            description?: string;
        }>;
        vehicle: z.ZodObject<{
            code: z.ZodString;
            description: z.ZodString;
            capacity: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            code?: string;
            description?: string;
            capacity?: number;
        }, {
            code?: string;
            description?: string;
            capacity?: number;
        }>;
        pricing_model: z.ZodObject<{
            code: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code?: string;
            description?: string;
        }, {
            code?: string;
            description?: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        id?: number;
        location?: {
            id?: number;
            description?: string;
        };
        currency?: {
            symbol?: string;
            code?: string;
            name?: string;
            id?: number;
        };
        amount?: number;
        vehicle?: {
            code?: string;
            description?: string;
            capacity?: number;
        };
        pricing_model?: {
            code?: string;
            description?: string;
        };
    }, {
        id?: number;
        location?: {
            id?: number;
            description?: string;
        };
        currency?: {
            symbol?: string;
            code?: string;
            name?: string;
            id?: number;
        };
        amount?: number;
        vehicle?: {
            code?: string;
            description?: string;
            capacity?: number;
        };
        pricing_model?: {
            code?: string;
            description?: string;
        };
    }>;
    total: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    details?: string;
    date?: string;
    hour?: number;
    minute?: number;
    currency?: {
        symbol?: string;
        code?: string;
        name?: string;
        id?: number;
    };
    selected_option?: {
        id?: number;
        location?: {
            id?: number;
            description?: string;
        };
        currency?: {
            symbol?: string;
            code?: string;
            name?: string;
            id?: number;
        };
        amount?: number;
        vehicle?: {
            code?: string;
            description?: string;
            capacity?: number;
        };
        pricing_model?: {
            code?: string;
            description?: string;
        };
    };
    nbr_of_units?: number;
    total?: number;
}, {
    details?: string;
    date?: string;
    hour?: number;
    minute?: number;
    currency?: {
        symbol?: string;
        code?: string;
        name?: string;
        id?: number;
    };
    selected_option?: {
        id?: number;
        location?: {
            id?: number;
            description?: string;
        };
        currency?: {
            symbol?: string;
            code?: string;
            name?: string;
            id?: number;
        };
        amount?: number;
        vehicle?: {
            code?: string;
            description?: string;
            capacity?: number;
        };
        pricing_model?: {
            code?: string;
            description?: string;
        };
    };
    nbr_of_units?: number;
    total?: number;
}>;
export declare const ZDueParams: z.ZodObject<{
    code: z.ZodString;
    amount: z.ZodNumber;
    numberOfPersons: z.ZodNumber;
    number_of_vehicles: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    code?: string;
    amount?: number;
    number_of_vehicles?: number;
    numberOfPersons?: number;
}, {
    code?: string;
    amount?: number;
    number_of_vehicles?: number;
    numberOfPersons?: number;
}>;
export type TAllowedOptions = z.infer<typeof ZAllowedOptions>;
export type TAllowedLocation = z.infer<typeof ZAllowedLocation>;
export type TVehicle = z.infer<typeof ZVehicle>;
export type TPriceModel = z.infer<typeof ZPriceModel>;
export type TPickupFormData = z.infer<typeof PickupFormData>;
export type TBookingPickupInfo = z.infer<typeof ZBookingPickupInfo>;
export type TDueParams = z.infer<typeof ZDueParams>;

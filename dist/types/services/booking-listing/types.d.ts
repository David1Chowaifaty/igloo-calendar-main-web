import * as z from 'zod';
export declare const GetExposedBookingsCriteriaParamsSchema: z.ZodObject<{
    property_id: z.ZodNullable<z.ZodNumber>;
    language: z.ZodString;
}, "strip", z.ZodTypeAny, {
    language?: string;
    property_id?: number;
}, {
    language?: string;
    property_id?: number;
}>;
/** Request params for `Get_Exposed_Bookings_Criteria`. */
export type GetExposedBookingsCriteriaParams = z.infer<typeof GetExposedBookingsCriteriaParamsSchema>;
export declare const CriteriaChannelSchema: z.ZodObject<{
    is_direct: z.ZodBoolean;
    name: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value?: string;
    name?: string;
    is_direct?: boolean;
}, {
    value?: string;
    name?: string;
    is_direct?: boolean;
}>;
/** Booking channel available as a listing filter. */
export type ICriteriaChannel = z.infer<typeof CriteriaChannelSchema>;
export declare const SettlementMethodSchema: z.ZodObject<{
    code: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code?: string;
    name?: string;
}, {
    code?: string;
    name?: string;
}>;
/** Settlement method available as a listing filter. */
export type ISettlementMethods = z.infer<typeof SettlementMethodSchema>;
export declare const CriteriaStatusSchema: z.ZodObject<{
    code: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code?: string;
    name?: string;
}, {
    code?: string;
    name?: string;
}>;
/** Booking status available as a listing filter. */
export type ICriteriaStatuses = z.infer<typeof CriteriaStatusSchema>;
export declare const CriteriaTypeSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name?: string;
    id?: number;
}, {
    name?: string;
    id?: number;
}>;
/** Date filter type (e.g. booking date, arrival date). */
export type ICriteriaTypes = z.infer<typeof CriteriaTypeSchema>;
export declare const BalanceFilterSchema: z.ZodObject<{
    name: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value?: string;
    name?: string;
}, {
    value?: string;
    name?: string;
}>;
/** Balance filter option. */
export type BalanceFilter = z.infer<typeof BalanceFilterSchema>;
export declare const ExposedBookingsCriteriaSchema: z.ZodObject<{
    channels: z.ZodArray<z.ZodObject<{
        is_direct: z.ZodBoolean;
        name: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value?: string;
        name?: string;
        is_direct?: boolean;
    }, {
        value?: string;
        name?: string;
        is_direct?: boolean;
    }>, "many">;
    settlement_methods: z.ZodArray<z.ZodObject<{
        code: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        name?: string;
    }, {
        code?: string;
        name?: string;
    }>, "many">;
    statuses: z.ZodArray<z.ZodObject<{
        code: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        name?: string;
    }, {
        code?: string;
        name?: string;
    }>, "many">;
    types: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        id?: number;
    }, {
        name?: string;
        id?: number;
    }>, "many">;
    balance_filter: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value?: string;
        name?: string;
    }, {
        value?: string;
        name?: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    types?: {
        name?: string;
        id?: number;
    }[];
    channels?: {
        value?: string;
        name?: string;
        is_direct?: boolean;
    }[];
    settlement_methods?: {
        code?: string;
        name?: string;
    }[];
    statuses?: {
        code?: string;
        name?: string;
    }[];
    balance_filter?: {
        value?: string;
        name?: string;
    }[];
}, {
    types?: {
        name?: string;
        id?: number;
    }[];
    channels?: {
        value?: string;
        name?: string;
        is_direct?: boolean;
    }[];
    settlement_methods?: {
        code?: string;
        name?: string;
    }[];
    statuses?: {
        code?: string;
        name?: string;
    }[];
    balance_filter?: {
        value?: string;
        name?: string;
    }[];
}>;
/** Filter criteria returned by `Get_Exposed_Bookings_Criteria`. */
export type IExposedBookingsCriteria = z.infer<typeof ExposedBookingsCriteriaSchema>;
export declare const ExposedBookingsParamsSchema: z.ZodObject<{
    channel: z.ZodString;
    property_id: z.ZodNullable<z.ZodNumber>;
    balance_filter: z.ZodNullable<z.ZodString>;
    filter_type: z.ZodNullable<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    from: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
    to: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
    name: z.ZodNullable<z.ZodString>;
    book_nbr: z.ZodNullable<z.ZodString>;
    booking_status: z.ZodString;
    userTypeCode: z.ZodOptional<z.ZodNumber>;
    affiliate_id: z.ZodDefault<z.ZodNumber>;
    is_mpo_managed: z.ZodDefault<z.ZodBoolean>;
    is_mpo_used: z.ZodDefault<z.ZodBoolean>;
    is_for_mobile: z.ZodDefault<z.ZodBoolean>;
    is_combined_view: z.ZodDefault<z.ZodBoolean>;
    start_row: z.ZodNumber;
    end_row: z.ZodNumber;
    total_count: z.ZodNumber;
    is_to_export: z.ZodBoolean;
    property_ids: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber, "many">>>;
    language: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    language?: string;
    property_id?: number;
    book_nbr?: string;
    from?: string;
    to?: string;
    property_ids?: number[];
    start_row?: number;
    end_row?: number;
    total_count?: number;
    channel?: string;
    balance_filter?: string;
    filter_type?: string | number;
    booking_status?: string;
    userTypeCode?: number;
    affiliate_id?: number;
    is_mpo_managed?: boolean;
    is_mpo_used?: boolean;
    is_for_mobile?: boolean;
    is_combined_view?: boolean;
    is_to_export?: boolean;
}, {
    name?: string;
    language?: string;
    property_id?: number;
    book_nbr?: string;
    from?: string;
    to?: string;
    property_ids?: number[];
    start_row?: number;
    end_row?: number;
    total_count?: number;
    channel?: string;
    balance_filter?: string;
    filter_type?: string | number;
    booking_status?: string;
    userTypeCode?: number;
    affiliate_id?: number;
    is_mpo_managed?: boolean;
    is_mpo_used?: boolean;
    is_for_mobile?: boolean;
    is_combined_view?: boolean;
    is_to_export?: boolean;
}>;
/** Request params / user selection for `Get_Exposed_Bookings`. */
export type ExposedBookingsParams = z.infer<typeof ExposedBookingsParamsSchema>;
export declare const GetExposedBookingsOptionsSchema: z.ZodObject<{
    /** Append results to the stored bookings instead of replacing them (infinite scroll). */
    append: z.ZodOptional<z.ZodBoolean>;
    /** Return the results without touching the booking listing store. */
    skipStore: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    append?: boolean;
    skipStore?: boolean;
}, {
    append?: boolean;
    skipStore?: boolean;
}>;
/** Client-side options controlling how fetched bookings are stored. */
export type GetExposedBookingsOptions = z.infer<typeof GetExposedBookingsOptionsSchema>;
export declare const ExposedBookingsHeaderSchema: z.ZodObject<{
    total_count: z.ZodNumber;
    exported_data_url: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    total_count?: number;
    exported_data_url?: string;
}, {
    total_count?: number;
    exported_data_url?: string;
}>;
/** `My_Params_Get_Exposed_Bookings` response header. */
export type ExposedBookingsHeader = z.infer<typeof ExposedBookingsHeaderSchema>;
export declare const RemoveExposedBookingParamsSchema: z.ZodObject<{
    booking_nbr: z.ZodString;
    is_to_revover: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    booking_nbr?: string;
    is_to_revover?: boolean;
}, {
    booking_nbr?: string;
    is_to_revover?: boolean;
}>;
/** Request params for `Remove_Exposed_Booking`. */
export type RemoveExposedBookingParams = z.infer<typeof RemoveExposedBookingParamsSchema>;

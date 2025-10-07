import { z } from 'zod';
export declare const CurrencySchema: z.ZodObject<{
    code: z.ZodString;
    id: z.ZodNumber;
    symbol: z.ZodString;
}, "strip", z.ZodTypeAny, {
    symbol?: string;
    code?: string;
    id?: number;
}, {
    symbol?: string;
    code?: string;
    id?: number;
}>;
/**
 * Transforms UPPER_SNAKE_CASE keys to lowercase at parse time.
 * Output type is exactly the lowercased version of the base schema.
 */
declare const ExtendedChanelReportBaseSchema: z.ZodObject<z.objectUtil.extendShape<{
    NIGHTS: z.ZodNumber;
    PCT: z.ZodNumber;
    REVENUE: z.ZodNumber;
    SOURCE: z.ZodString;
    PROPERTY_ID: z.ZodNumber;
    PROPERTY_NAME: z.ZodString;
    currency: z.ZodObject<{
        code: z.ZodString;
        id: z.ZodNumber;
        symbol: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        symbol?: string;
        code?: string;
        id?: number;
    }, {
        symbol?: string;
        code?: string;
        id?: number;
    }>;
}, {
    last_year: z.ZodOptional<z.ZodObject<{
        NIGHTS: z.ZodNumber;
        PCT: z.ZodNumber;
        REVENUE: z.ZodNumber;
        SOURCE: z.ZodString;
        PROPERTY_ID: z.ZodNumber;
        PROPERTY_NAME: z.ZodString;
        currency: z.ZodObject<{
            code: z.ZodString;
            id: z.ZodNumber;
            symbol: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            symbol?: string;
            code?: string;
            id?: number;
        }, {
            symbol?: string;
            code?: string;
            id?: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        currency?: {
            symbol?: string;
            code?: string;
            id?: number;
        };
        NIGHTS?: number;
        PCT?: number;
        REVENUE?: number;
        SOURCE?: string;
        PROPERTY_ID?: number;
        PROPERTY_NAME?: string;
    }, {
        currency?: {
            symbol?: string;
            code?: string;
            id?: number;
        };
        NIGHTS?: number;
        PCT?: number;
        REVENUE?: number;
        SOURCE?: string;
        PROPERTY_ID?: number;
        PROPERTY_NAME?: string;
    }>>;
}>, "strip", z.ZodTypeAny, {
    currency?: {
        symbol?: string;
        code?: string;
        id?: number;
    };
    NIGHTS?: number;
    PCT?: number;
    REVENUE?: number;
    SOURCE?: string;
    PROPERTY_ID?: number;
    PROPERTY_NAME?: string;
    last_year?: {
        currency?: {
            symbol?: string;
            code?: string;
            id?: number;
        };
        NIGHTS?: number;
        PCT?: number;
        REVENUE?: number;
        SOURCE?: string;
        PROPERTY_ID?: number;
        PROPERTY_NAME?: string;
    };
}, {
    currency?: {
        symbol?: string;
        code?: string;
        id?: number;
    };
    NIGHTS?: number;
    PCT?: number;
    REVENUE?: number;
    SOURCE?: string;
    PROPERTY_ID?: number;
    PROPERTY_NAME?: string;
    last_year?: {
        currency?: {
            symbol?: string;
            code?: string;
            id?: number;
        };
        NIGHTS?: number;
        PCT?: number;
        REVENUE?: number;
        SOURCE?: string;
        PROPERTY_ID?: number;
        PROPERTY_NAME?: string;
    };
}>;
export declare const ChannelReportSchema: z.ZodObject<z.objectUtil.extendShape<{
    NIGHTS: z.ZodNumber;
    PCT: z.ZodNumber;
    REVENUE: z.ZodNumber;
    SOURCE: z.ZodString;
    PROPERTY_ID: z.ZodNumber;
    PROPERTY_NAME: z.ZodString;
    currency: z.ZodObject<{
        code: z.ZodString;
        id: z.ZodNumber;
        symbol: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        symbol?: string;
        code?: string;
        id?: number;
    }, {
        symbol?: string;
        code?: string;
        id?: number;
    }>;
}, {
    last_year: z.ZodOptional<z.ZodObject<{
        NIGHTS: z.ZodNumber;
        PCT: z.ZodNumber;
        REVENUE: z.ZodNumber;
        SOURCE: z.ZodString;
        PROPERTY_ID: z.ZodNumber;
        PROPERTY_NAME: z.ZodString;
        currency: z.ZodObject<{
            code: z.ZodString;
            id: z.ZodNumber;
            symbol: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            symbol?: string;
            code?: string;
            id?: number;
        }, {
            symbol?: string;
            code?: string;
            id?: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        currency?: {
            symbol?: string;
            code?: string;
            id?: number;
        };
        NIGHTS?: number;
        PCT?: number;
        REVENUE?: number;
        SOURCE?: string;
        PROPERTY_ID?: number;
        PROPERTY_NAME?: string;
    }, {
        currency?: {
            symbol?: string;
            code?: string;
            id?: number;
        };
        NIGHTS?: number;
        PCT?: number;
        REVENUE?: number;
        SOURCE?: string;
        PROPERTY_ID?: number;
        PROPERTY_NAME?: string;
    }>>;
}>, "strip", z.ZodTypeAny, {
    currency?: {
        symbol?: string;
        code?: string;
        id?: number;
    };
    NIGHTS?: number;
    PCT?: number;
    REVENUE?: number;
    SOURCE?: string;
    PROPERTY_ID?: number;
    PROPERTY_NAME?: string;
    last_year?: {
        currency?: {
            symbol?: string;
            code?: string;
            id?: number;
        };
        NIGHTS?: number;
        PCT?: number;
        REVENUE?: number;
        SOURCE?: string;
        PROPERTY_ID?: number;
        PROPERTY_NAME?: string;
    };
}, {
    currency?: {
        symbol?: string;
        code?: string;
        id?: number;
    };
    NIGHTS?: number;
    PCT?: number;
    REVENUE?: number;
    SOURCE?: string;
    PROPERTY_ID?: number;
    PROPERTY_NAME?: string;
    last_year?: {
        currency?: {
            symbol?: string;
            code?: string;
            id?: number;
        };
        NIGHTS?: number;
        PCT?: number;
        REVENUE?: number;
        SOURCE?: string;
        PROPERTY_ID?: number;
        PROPERTY_NAME?: string;
    };
}>;
export type ChannelReport = z.infer<typeof ExtendedChanelReportBaseSchema>;
export declare const ChannelReportResultSchema: z.ZodNullable<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
    NIGHTS: z.ZodNumber;
    PCT: z.ZodNumber;
    REVENUE: z.ZodNumber;
    SOURCE: z.ZodString;
    PROPERTY_ID: z.ZodNumber;
    PROPERTY_NAME: z.ZodString;
    currency: z.ZodObject<{
        code: z.ZodString;
        id: z.ZodNumber;
        symbol: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        symbol?: string;
        code?: string;
        id?: number;
    }, {
        symbol?: string;
        code?: string;
        id?: number;
    }>;
}, {
    last_year: z.ZodOptional<z.ZodObject<{
        NIGHTS: z.ZodNumber;
        PCT: z.ZodNumber;
        REVENUE: z.ZodNumber;
        SOURCE: z.ZodString;
        PROPERTY_ID: z.ZodNumber;
        PROPERTY_NAME: z.ZodString;
        currency: z.ZodObject<{
            code: z.ZodString;
            id: z.ZodNumber;
            symbol: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            symbol?: string;
            code?: string;
            id?: number;
        }, {
            symbol?: string;
            code?: string;
            id?: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        currency?: {
            symbol?: string;
            code?: string;
            id?: number;
        };
        NIGHTS?: number;
        PCT?: number;
        REVENUE?: number;
        SOURCE?: string;
        PROPERTY_ID?: number;
        PROPERTY_NAME?: string;
    }, {
        currency?: {
            symbol?: string;
            code?: string;
            id?: number;
        };
        NIGHTS?: number;
        PCT?: number;
        REVENUE?: number;
        SOURCE?: string;
        PROPERTY_ID?: number;
        PROPERTY_NAME?: string;
    }>>;
}>, "strip", z.ZodTypeAny, {
    currency?: {
        symbol?: string;
        code?: string;
        id?: number;
    };
    NIGHTS?: number;
    PCT?: number;
    REVENUE?: number;
    SOURCE?: string;
    PROPERTY_ID?: number;
    PROPERTY_NAME?: string;
    last_year?: {
        currency?: {
            symbol?: string;
            code?: string;
            id?: number;
        };
        NIGHTS?: number;
        PCT?: number;
        REVENUE?: number;
        SOURCE?: string;
        PROPERTY_ID?: number;
        PROPERTY_NAME?: string;
    };
}, {
    currency?: {
        symbol?: string;
        code?: string;
        id?: number;
    };
    NIGHTS?: number;
    PCT?: number;
    REVENUE?: number;
    SOURCE?: string;
    PROPERTY_ID?: number;
    PROPERTY_NAME?: string;
    last_year?: {
        currency?: {
            symbol?: string;
            code?: string;
            id?: number;
        };
        NIGHTS?: number;
        PCT?: number;
        REVENUE?: number;
        SOURCE?: string;
        PROPERTY_ID?: number;
        PROPERTY_NAME?: string;
    };
}>, "many">>;
export type ChannelReportResult = z.infer<typeof ChannelReportResultSchema>;
export declare const ChannelSalesParamsSchema: z.ZodObject<{
    AC_ID: z.ZodOptional<z.ZodString>;
    BOOK_CASE: z.ZodString;
    FROM_DATE: z.ZodString;
    TO_DATE: z.ZodString;
    WINDOW: z.ZodNumber;
    is_export_to_excel: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    LIST_AC_ID: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
}, "strip", z.ZodTypeAny, {
    FROM_DATE?: string;
    TO_DATE?: string;
    AC_ID?: string;
    BOOK_CASE?: string;
    WINDOW?: number;
    is_export_to_excel?: boolean;
    LIST_AC_ID?: number[];
}, {
    FROM_DATE?: string;
    TO_DATE?: string;
    AC_ID?: string;
    BOOK_CASE?: string;
    WINDOW?: number;
    is_export_to_excel?: boolean;
    LIST_AC_ID?: number[];
}>;
export type ChannelSalesParams = z.infer<typeof ChannelSalesParamsSchema>;
export declare const ChannelSalesFilterSchema: z.ZodObject<z.objectUtil.extendShape<{
    AC_ID: z.ZodOptional<z.ZodString>;
    BOOK_CASE: z.ZodString;
    FROM_DATE: z.ZodString;
    TO_DATE: z.ZodString;
    WINDOW: z.ZodNumber;
    is_export_to_excel: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    LIST_AC_ID: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
}, {
    include_previous_year: z.ZodBoolean;
}>, "strip", z.ZodTypeAny, {
    FROM_DATE?: string;
    TO_DATE?: string;
    AC_ID?: string;
    BOOK_CASE?: string;
    WINDOW?: number;
    is_export_to_excel?: boolean;
    LIST_AC_ID?: number[];
    include_previous_year?: boolean;
}, {
    FROM_DATE?: string;
    TO_DATE?: string;
    AC_ID?: string;
    BOOK_CASE?: string;
    WINDOW?: number;
    is_export_to_excel?: boolean;
    LIST_AC_ID?: number[];
    include_previous_year?: boolean;
}>;
export type ChannelSaleFilter = z.infer<typeof ChannelSalesFilterSchema>;
export declare const parseChannelReport: (data: unknown) => {
    currency?: {
        symbol?: string;
        code?: string;
        id?: number;
    };
    NIGHTS?: number;
    PCT?: number;
    REVENUE?: number;
    SOURCE?: string;
    PROPERTY_ID?: number;
    PROPERTY_NAME?: string;
    last_year?: {
        currency?: {
            symbol?: string;
            code?: string;
            id?: number;
        };
        NIGHTS?: number;
        PCT?: number;
        REVENUE?: number;
        SOURCE?: string;
        PROPERTY_ID?: number;
        PROPERTY_NAME?: string;
    };
};
export declare const safeParseChannelReport: (data: unknown) => z.SafeParseReturnType<{
    currency?: {
        symbol?: string;
        code?: string;
        id?: number;
    };
    NIGHTS?: number;
    PCT?: number;
    REVENUE?: number;
    SOURCE?: string;
    PROPERTY_ID?: number;
    PROPERTY_NAME?: string;
    last_year?: {
        currency?: {
            symbol?: string;
            code?: string;
            id?: number;
        };
        NIGHTS?: number;
        PCT?: number;
        REVENUE?: number;
        SOURCE?: string;
        PROPERTY_ID?: number;
        PROPERTY_NAME?: string;
    };
}, {
    currency?: {
        symbol?: string;
        code?: string;
        id?: number;
    };
    NIGHTS?: number;
    PCT?: number;
    REVENUE?: number;
    SOURCE?: string;
    PROPERTY_ID?: number;
    PROPERTY_NAME?: string;
    last_year?: {
        currency?: {
            symbol?: string;
            code?: string;
            id?: number;
        };
        NIGHTS?: number;
        PCT?: number;
        REVENUE?: number;
        SOURCE?: string;
        PROPERTY_ID?: number;
        PROPERTY_NAME?: string;
    };
}>;
export declare const parseChannelReportResult: (data: unknown) => {
    currency?: {
        symbol?: string;
        code?: string;
        id?: number;
    };
    NIGHTS?: number;
    PCT?: number;
    REVENUE?: number;
    SOURCE?: string;
    PROPERTY_ID?: number;
    PROPERTY_NAME?: string;
    last_year?: {
        currency?: {
            symbol?: string;
            code?: string;
            id?: number;
        };
        NIGHTS?: number;
        PCT?: number;
        REVENUE?: number;
        SOURCE?: string;
        PROPERTY_ID?: number;
        PROPERTY_NAME?: string;
    };
}[];
export declare const safeParseChannelReportResult: (data: unknown) => z.SafeParseReturnType<{
    currency?: {
        symbol?: string;
        code?: string;
        id?: number;
    };
    NIGHTS?: number;
    PCT?: number;
    REVENUE?: number;
    SOURCE?: string;
    PROPERTY_ID?: number;
    PROPERTY_NAME?: string;
    last_year?: {
        currency?: {
            symbol?: string;
            code?: string;
            id?: number;
        };
        NIGHTS?: number;
        PCT?: number;
        REVENUE?: number;
        SOURCE?: string;
        PROPERTY_ID?: number;
        PROPERTY_NAME?: string;
    };
}[], {
    currency?: {
        symbol?: string;
        code?: string;
        id?: number;
    };
    NIGHTS?: number;
    PCT?: number;
    REVENUE?: number;
    SOURCE?: string;
    PROPERTY_ID?: number;
    PROPERTY_NAME?: string;
    last_year?: {
        currency?: {
            symbol?: string;
            code?: string;
            id?: number;
        };
        NIGHTS?: number;
        PCT?: number;
        REVENUE?: number;
        SOURCE?: string;
        PROPERTY_ID?: number;
        PROPERTY_NAME?: string;
    };
}[]>;
export declare const parseChannelSalesParams: (data: unknown) => {
    FROM_DATE?: string;
    TO_DATE?: string;
    AC_ID?: string;
    BOOK_CASE?: string;
    WINDOW?: number;
    is_export_to_excel?: boolean;
    LIST_AC_ID?: number[];
};
export declare const safeParseChannelSalesParams: (data: unknown) => z.SafeParseReturnType<{
    FROM_DATE?: string;
    TO_DATE?: string;
    AC_ID?: string;
    BOOK_CASE?: string;
    WINDOW?: number;
    is_export_to_excel?: boolean;
    LIST_AC_ID?: number[];
}, {
    FROM_DATE?: string;
    TO_DATE?: string;
    AC_ID?: string;
    BOOK_CASE?: string;
    WINDOW?: number;
    is_export_to_excel?: boolean;
    LIST_AC_ID?: number[];
}>;
export { ChannelReportSchema as ReportSchema, ChannelReportResultSchema as ReportResultSchema, ChannelSalesParamsSchema as SalesParamsSchema };
export type { ChannelReport as Report, ChannelReportResult as ReportResult, ChannelSalesParams as SalesParams };

import { z } from 'zod';
/** The 13 fixed Accommodation Extras seeded on every property. */
export declare const AccommodationExtraCode: {
    readonly EarlyCheckin: "EARLY_CHECKIN";
    readonly LateCheckout: "LATE_CHECKOUT";
    readonly DayUse: "DAY_USE";
    readonly BabyCot: "BABY_COT";
    readonly ExtraBed: "EXTRA_BED";
    readonly HoneymoonPackage: "HONEYMOON_PACKAGE";
    readonly AnniversaryPackage: "ANNIVERSARY_PACKAGE";
    readonly Breakfast: "BREAKFAST";
    readonly Lunch: "LUNCH";
    readonly Dinner: "DINNER";
    readonly HalfBoard: "HALF_BOARD";
    readonly FullBoard: "FULL_BOARD";
    readonly Minibar: "MINIBAR";
};
export type AccommodationExtraCode = (typeof AccommodationExtraCode)[keyof typeof AccommodationExtraCode];
export declare const AccommodationExtraLabels: Record<AccommodationExtraCode, string>;
/** Ordered list used to render Accommodation Extras rows consistently. */
export declare const AccommodationExtraCodeOrder: AccommodationExtraCode[];
export declare const ExtraServiceSection: {
    readonly Accommodation: "accommodation";
    readonly BookingEngineAddon: "addon";
};
export type ExtraServiceSection = (typeof ExtraServiceSection)[keyof typeof ExtraServiceSection];
export declare const DayUseConfigSchema: z.ZodObject<{
    block_night: z.ZodDefault<z.ZodBoolean>;
    default_start_time: z.ZodDefault<z.ZodString>;
    default_end_time: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    block_night?: boolean;
    default_start_time?: string;
    default_end_time?: string;
}, {
    block_night?: boolean;
    default_start_time?: string;
    default_end_time?: string;
}>;
export type DayUseConfig = z.infer<typeof DayUseConfigSchema>;
export declare const defaultDayUseConfig: () => DayUseConfig;
export declare const ExtraServiceDefinitionSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodNumber>;
    property_id: z.ZodNumber;
    section: z.ZodEnum<["accommodation", "addon"]>;
    code: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    default_price: z.ZodNumber;
    vat_mode: z.ZodEnum<["001", "000"]>;
    allow_price_override: z.ZodDefault<z.ZodBoolean>;
    is_active: z.ZodDefault<z.ZodBoolean>;
    day_use_config: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        block_night: z.ZodDefault<z.ZodBoolean>;
        default_start_time: z.ZodDefault<z.ZodString>;
        default_end_time: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        block_night?: boolean;
        default_start_time?: string;
        default_end_time?: string;
    }, {
        block_night?: boolean;
        default_start_time?: string;
        default_end_time?: string;
    }>>>>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    id?: number;
    code?: string;
    property_id?: number;
    is_active?: boolean;
    section?: "accommodation" | "addon";
    default_price?: number;
    vat_mode?: "001" | "000";
    allow_price_override?: boolean;
    day_use_config?: {
        block_night?: boolean;
        default_start_time?: string;
        default_end_time?: string;
    };
}, {
    name?: string;
    id?: number;
    code?: string;
    property_id?: number;
    is_active?: boolean;
    section?: "accommodation" | "addon";
    default_price?: number;
    vat_mode?: "001" | "000";
    allow_price_override?: boolean;
    day_use_config?: {
        block_night?: boolean;
        default_start_time?: string;
        default_end_time?: string;
    };
}>;
export type ExtraServiceDefinition = z.infer<typeof ExtraServiceDefinitionSchema>;
export declare const GetExposedExtraServicesPropsSchema: z.ZodObject<{
    property_id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    property_id?: number;
}, {
    property_id?: number;
}>;
export type GetExposedExtraServicesProps = z.infer<typeof GetExposedExtraServicesPropsSchema>;
export declare const HandleExposedExtraServicePropsSchema: z.ZodObject<{
    extra_service: z.ZodObject<{
        id: z.ZodDefault<z.ZodNumber>;
        property_id: z.ZodNumber;
        section: z.ZodEnum<["accommodation", "addon"]>;
        code: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        default_price: z.ZodNumber;
        vat_mode: z.ZodEnum<["001", "000"]>;
        allow_price_override: z.ZodDefault<z.ZodBoolean>;
        is_active: z.ZodDefault<z.ZodBoolean>;
        day_use_config: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodObject<{
            block_night: z.ZodDefault<z.ZodBoolean>;
            default_start_time: z.ZodDefault<z.ZodString>;
            default_end_time: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            block_night?: boolean;
            default_start_time?: string;
            default_end_time?: string;
        }, {
            block_night?: boolean;
            default_start_time?: string;
            default_end_time?: string;
        }>>>>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        id?: number;
        code?: string;
        property_id?: number;
        is_active?: boolean;
        section?: "accommodation" | "addon";
        default_price?: number;
        vat_mode?: "001" | "000";
        allow_price_override?: boolean;
        day_use_config?: {
            block_night?: boolean;
            default_start_time?: string;
            default_end_time?: string;
        };
    }, {
        name?: string;
        id?: number;
        code?: string;
        property_id?: number;
        is_active?: boolean;
        section?: "accommodation" | "addon";
        default_price?: number;
        vat_mode?: "001" | "000";
        allow_price_override?: boolean;
        day_use_config?: {
            block_night?: boolean;
            default_start_time?: string;
            default_end_time?: string;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    extra_service?: {
        name?: string;
        id?: number;
        code?: string;
        property_id?: number;
        is_active?: boolean;
        section?: "accommodation" | "addon";
        default_price?: number;
        vat_mode?: "001" | "000";
        allow_price_override?: boolean;
        day_use_config?: {
            block_night?: boolean;
            default_start_time?: string;
            default_end_time?: string;
        };
    };
}, {
    extra_service?: {
        name?: string;
        id?: number;
        code?: string;
        property_id?: number;
        is_active?: boolean;
        section?: "accommodation" | "addon";
        default_price?: number;
        vat_mode?: "001" | "000";
        allow_price_override?: boolean;
        day_use_config?: {
            block_night?: boolean;
            default_start_time?: string;
            default_end_time?: string;
        };
    };
}>;
export type HandleExposedExtraServiceProps = z.infer<typeof HandleExposedExtraServicePropsSchema>;
export declare function createDefaultAccommodationExtra(propertyId: number, code: AccommodationExtraCode): ExtraServiceDefinition;
export declare function createBlankAddon(propertyId: number): ExtraServiceDefinition;

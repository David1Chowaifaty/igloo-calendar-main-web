import * as z from 'zod';
export declare const ParamsGetMealReportSchema: z.ZodObject<{
    property_id: z.ZodNumber;
    report_type: z.ZodEnum<["GUEST_LIST", "MEAL_COUNT"]>;
    from: z.ZodString;
    to: z.ZodString;
    meal_type_code: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    is_export_to_excel: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    property_id?: number;
    is_export_to_excel?: boolean;
    from?: string;
    to?: string;
    report_type?: "GUEST_LIST" | "MEAL_COUNT";
    meal_type_code?: string;
}, {
    property_id?: number;
    is_export_to_excel?: boolean;
    from?: string;
    to?: string;
    report_type?: "GUEST_LIST" | "MEAL_COUNT";
    meal_type_code?: string;
}>;
export type ParamsGetMealReport = z.infer<typeof ParamsGetMealReportSchema>;
export declare const ParamsSetHBPreferenceSchema: z.ZodObject<{
    property_id: z.ZodNumber;
    room_identifier: z.ZodString;
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    property_id?: number;
    code?: string;
    room_identifier?: string;
}, {
    property_id?: number;
    code?: string;
    room_identifier?: string;
}>;
export type ParamsSetHBPreference = z.infer<typeof ParamsSetHBPreferenceSchema>;
export interface MealGuestEntry {
    date: string;
    unit: {
        id: number;
        name: string;
    };
    guest: {
        first_name: string;
        last_name: string;
    };
    occupancy: {
        adult_nbr: number;
        children_nbr: number;
        infant_nbr: number;
    };
    rate_plan: {
        name: string;
        short_name: string;
    };
    source: {
        Label: string;
        Code: string;
    };
    is_arriving_today: boolean;
    room_identifier: string;
    hb_preference_code: string;
    booking_nbr: string;
}
export interface MealCountDaySummary {
    Date: string;
    Breakfast_Ad: number;
    Breakfast_Ch: number;
    Lunch_Ad: number;
    Lunch_Ch: number;
    Dinner_Ad: number;
    Dinner_Ch: number;
}
export interface GetMealReportResult {
    My_Result: {
        Guest_List: MealGuestEntry[];
        Meal_Count_Summary: MealCountDaySummary[];
    };
    My_Params_Get_Meal_Report?: {
        Link_excel: string;
    };
    ExceptionMsg: string;
}

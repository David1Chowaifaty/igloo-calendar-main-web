import { type ChannelReportResult, type ChannelSalesParams } from "../components/ir-sales-by-channel/types";
import { z } from 'zod';
export type FetchedProperty = {
    A_NAME: string;
    COUNTRY_CODE: string;
    COUNTRY_NAME: string;
    PROPERTY_ID: number;
    PROPERTY_NAME: string;
};
export type LinkedProperty = {
    name: string;
    property_id: number;
    token: string;
};
export type CountrySalesParams = {
    AC_ID: number;
    WINDOW: number;
    FROM_DATE: string;
    TO_DATE: string;
    BOOK_CASE: string;
    is_export_to_excel: boolean;
};
export type DailyRevenueReportParams = {
    date: string;
    property_id: string;
    is_export_to_excel: boolean;
};
export type MonthlyStatsParams = {
    property_id: number;
    from_date: string;
    to_date: string;
    is_export_to_excel?: boolean;
};
export interface MonthlyStatsResults {
    AverageOccupancy: number;
    DailyStats: DailyStat[];
    ExcelLink: null;
    PeakDays: PeakDay[];
    Occupancy_Difference_From_Previous_Month: number;
    TotalUnitsBooked: number;
    Total_Guests: number;
}
export declare const SetPropertyCalendarExtraParamsSchema: z.ZodObject<{
    property_id: z.ZodNumber;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value?: string;
    property_id?: number;
}, {
    value?: string;
    property_id?: number;
}>;
export type SetPropertyCalendarExtraParams = z.infer<typeof SetPropertyCalendarExtraParamsSchema>;
export interface PeakDay {
    Date: string;
    OccupancyPercent: number;
}
export interface DailyStat {
    Date: string;
    Occupancy: number;
    Units_booked: number;
    Rooms_Revenue: number;
    ADR: number;
    Total_Guests: number | undefined;
}
export declare const AllowedPropertiesSchema: z.ZodNullable<z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name?: string;
    id?: number;
}, {
    name?: string;
    id?: number;
}>, "many">>;
export type AllowedProperties = z.infer<typeof AllowedPropertiesSchema>;
export declare const SetRoomCalendarExtraParamsSchema: z.ZodObject<{
    property_id: z.ZodNumber;
    room_identifier: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value?: string;
    property_id?: number;
    room_identifier?: string;
}, {
    value?: string;
    property_id?: number;
    room_identifier?: string;
}>;
export type SetRoomCalendarExtraParams = z.infer<typeof SetRoomCalendarExtraParamsSchema>;
export declare const FetchNotificationsParamsSchema: z.ZodObject<{
    property_id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    property_id?: number;
}, {
    property_id?: number;
}>;
export declare const FetchNotificationsResultSchema: z.ZodArray<z.ZodObject<{
    message: z.ZodString;
    type: z.ZodEnum<["financial", "availability_alert"]>;
}, "strip", z.ZodTypeAny, {
    message?: string;
    type?: "financial" | "availability_alert";
}, {
    message?: string;
    type?: "financial" | "availability_alert";
}>, "many">;
export type FetchNotificationsResult = z.infer<typeof FetchNotificationsResultSchema>;
export declare const ExposedRectifierParamsSchema: z.ZodObject<{
    property_id: z.ZodNumber;
    room_type_ids: z.ZodArray<z.ZodNumber, "many">;
    from: z.ZodEffects<z.ZodString, string, string>;
    to: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    property_id?: number;
    room_type_ids?: number[];
    from?: string;
    to?: string;
}, {
    property_id?: number;
    room_type_ids?: number[];
    from?: string;
    to?: string;
}>;
export type ExposedRectifierParams = z.infer<typeof ExposedRectifierParamsSchema>;
export declare const FetchUnBookableRoomsSchema: z.ZodObject<{
    property_ids: z.ZodArray<z.ZodNumber, "many">;
    period_to_check: z.ZodNumber;
    consecutive_period: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    property_ids?: number[];
    period_to_check?: number;
    consecutive_period?: number;
}, {
    property_ids?: number[];
    period_to_check?: number;
    consecutive_period?: number;
}>;
export type FetchUnBookableRooms = z.infer<typeof FetchUnBookableRoomsSchema>;
export type FetchUnBookableRoomsResult = {
    first_night_not_bookable: string;
    property_id: number;
    room_type_id: number;
    room_type_name: string;
    country: {
        cities: null;
        code: null;
        currency: null;
        flag: null;
        gmt_offset: number;
        id: number;
        market_places: null;
        name: string;
        phone_prefix: null;
    };
}[];
export declare class PropertyService {
    getExposedProperty(params: {
        id: number | null;
        language: string;
        is_backend?: boolean;
        aname?: string;
        include_units_hk_status?: boolean;
        include_sales_rate_plans?: boolean;
    }): Promise<any>;
    exposedRectifier(params: ExposedRectifierParams): Promise<any>;
    setPropertyCalendarExtra(params: SetPropertyCalendarExtraParams): Promise<any>;
    setRoomCalendarExtra(params: SetRoomCalendarExtraParams): Promise<any>;
    getChannelSales(params: ChannelSalesParams): Promise<ChannelReportResult>;
    getExposedAllowedProperties(): Promise<{
        name?: string;
        id?: number;
    }[]>;
    searchExposedAllowedProperties(searchTerm: string): Promise<FetchedProperty[]>;
    getCountrySales(params: CountrySalesParams): Promise<any>;
    getDailyRevenueReport(params: DailyRevenueReportParams): Promise<any>;
    setExposedCleaningFrequency(params: {
        property_id: number;
        code: string;
    }): Promise<any>;
    getMonthlyStats(params: MonthlyStatsParams): Promise<MonthlyStatsResults>;
    fetchNotifications(property_id: number): Promise<FetchNotificationsResult>;
    fetchUnBookableRooms(params: FetchUnBookableRooms): Promise<FetchUnBookableRoomsResult | null>;
}

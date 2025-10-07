import { type ChannelReportResult, type ChannelSalesParams } from "../components/ir-sales-by-channel/types";
import { z } from 'zod';
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
export declare class PropertyService {
    getExposedProperty(params: {
        id: number | null;
        language: string;
        is_backend?: boolean;
        aname?: string;
        include_units_hk_status?: boolean;
        include_sales_rate_plans?: boolean;
    }): Promise<any>;
    getChannelSales(params: ChannelSalesParams): Promise<ChannelReportResult>;
    getExposedAllowedProperties(): Promise<{
        name?: string;
        id?: number;
    }[]>;
    getCountrySales(params: CountrySalesParams): Promise<any>;
    getDailyRevenueReport(params: DailyRevenueReportParams): Promise<any>;
    setExposedCleaningFrequency(params: {
        property_id: number;
        code: string;
    }): Promise<any>;
    getMonthlyStats(params: MonthlyStatsParams): Promise<MonthlyStatsResults>;
}

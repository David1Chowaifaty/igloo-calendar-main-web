export type CountrySalesParams = {
    AC_ID: number;
    WINDOW: number;
    FROM_DATE: string;
    TO_DATE: string;
    BOOK_CASE: string;
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
}
export declare class PropertyService {
    getExposedProperty(params: {
        id: number | null;
        language: string;
        is_backend?: boolean;
        aname?: string;
        include_units_hk_status?: boolean;
        include_sales_rate_plans?: boolean;
    }): Promise<any>;
    getCountrySales(params: CountrySalesParams): Promise<any>;
    setExposedCleaningFrequency(params: {
        property_id: number;
        code: string;
    }): Promise<any>;
    getMonthlyStats(params: MonthlyStatsParams): Promise<MonthlyStatsResults>;
}

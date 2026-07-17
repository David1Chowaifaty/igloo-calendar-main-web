import { type ChannelReportResult, type ChannelSalesParams } from "../../components/ir-sales-by-channel/types";
import { type CountrySalesParams, type DailyRevenueReportParams, type ExposedRectifierParams, type FetchedProperty, type FetchNotificationsResult, type FetchUnBookableRooms, type FetchUnBookableRoomsResult, type GetUnifiedFolioParams, type GetUnifiedFolioResponse, type HandleExposedPropertyTaxCategoriesParams, type MonthlyStatsParams, type MonthlyStatsResults, type SetPropertyCalendarExtraParams, type SetPropertyGapConfigParams, type SetRoomCalendarExtraParams, type PrintGuestFolioDocParams, type GetExposedBookingsByInvoicedStatusParams, type GetExposedBookingsByInvoicedStatusResult } from './types';
export declare class PropertyService {
    printGuestFolioDoc(params: PrintGuestFolioDocParams): Promise<string | null>;
    handleExposedPropertyTaxCategories(params: HandleExposedPropertyTaxCategoriesParams): Promise<any>;
    setPropertyGapConfig(params: SetPropertyGapConfigParams): Promise<any>;
    getExposedBookingsByInvoicedStatus(params: GetExposedBookingsByInvoicedStatusParams): Promise<GetExposedBookingsByInvoicedStatusResult>;
    getExposedProperty(params: {
        id: number | null;
        language: string;
        is_backend?: boolean;
        aname?: string;
        include_units_hk_status?: boolean;
        include_sales_rate_plans?: boolean;
    }): Promise<any>;
    getActiveOptimExposedProperties(): Promise<{
        name?: string;
        id?: number;
    }[]>;
    exposedRectifier(params: ExposedRectifierParams): Promise<any>;
    setPropertyCalendarExtra(params: SetPropertyCalendarExtraParams): Promise<any>;
    setRoomCalendarExtra(params: SetRoomCalendarExtraParams): Promise<any>;
    getChannelSales(params: ChannelSalesParams): Promise<ChannelReportResult>;
    getExposedAllowedProperties(): Promise<{
        name?: string;
        id?: number;
    }[]>;
    searchExposedAllowedProperties(searchTerm: string): Promise<FetchedProperty[]>;
    getUnifiedFolio(params: GetUnifiedFolioParams): Promise<GetUnifiedFolioResponse>;
    getCountrySales(params: CountrySalesParams): Promise<any>;
    getDailyRevenueReport(params: DailyRevenueReportParams): Promise<any>;
    setExposedCleaningFrequency(params: {
        property_id: number;
        code: string;
    }): Promise<any>;
    getMonthlyStats(params: MonthlyStatsParams): Promise<MonthlyStatsResults>;
    fetchNotifications(property_id: number): Promise<FetchNotificationsResult>;
    fetchUnBookableRooms(params: FetchUnBookableRooms): Promise<FetchUnBookableRoomsResult | null>;
    setExposedGapNightsPolicy(params: {
        property_id: number;
        rule_code: string;
        applicable_days: number;
    }): Promise<any>;
}

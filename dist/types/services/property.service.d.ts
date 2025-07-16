export type CountrySalesParams = {
    AC_ID: number;
    WINDOW: number;
    FROM_DATE: string;
    TO_DATE: string;
    BOOK_CASE: string;
    is_export_to_excel: boolean;
};
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
}

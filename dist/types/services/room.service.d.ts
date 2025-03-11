export declare class RoomService {
    SetAutomaticCheckInOut(props: {
        property_id: number;
        flag: boolean;
    }): Promise<any>;
    getExposedProperty(params: {
        id: number | null;
        language: string;
        is_backend?: boolean;
        aname?: string;
        include_units_hk_status?: boolean;
        include_sales_rate_plans?: boolean;
    }): Promise<any>;
    fetchLanguage(code: string, sections?: string[]): Promise<{
        entries: any;
        direction: any;
    }>;
    private transformArrayToObject;
}

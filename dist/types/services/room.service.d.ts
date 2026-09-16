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
    private generateColorForegrounds;
    private initializeBookingColors;
    private normalizeBookingColor;
    private syncCalendarExtra;
    /**
     * @deprecated Use `LocaleController.load({ language, tables })` directly.
     *
     * Kept as a delegate so the existing call sites keep working while gaining the
     * controller's caching, request de-duplication and guaranteed base tables.
     */
    fetchLanguage(code: string, sections?: string[]): Promise<{
        entries: import("@/stores/locales.store").TLocaleEntries;
        direction: "ltr" | "rtl";
    }>;
}

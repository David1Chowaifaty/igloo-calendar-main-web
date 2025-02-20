export declare class IrHkArchive {
    selectedDates: {
        start: string;
        end: string;
    };
    data: {
        id: number;
        date: string;
        hk_id: number;
        housekeeper: string;
        unit: {
            id: number;
            name: string;
        };
        booking_nbr: number;
    }[];
    componentWillLoad(): void;
    initializeData(): Promise<void>;
    handleDateRangeChange(e: CustomEvent): void;
    searchArchive(e: CustomEvent): Promise<void>;
    exportArchive(e: CustomEvent): Promise<void>;
    render(): any;
}

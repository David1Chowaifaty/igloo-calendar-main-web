export declare class IrHkArchive {
    selectedDates: {
        start: string;
        end: string;
    };
    componentWillLoad(): void;
    initializeData(): Promise<void>;
    handleDateRangeChange(e: CustomEvent): void;
    searchArchive(e: CustomEvent): Promise<void>;
    exportArchive(e: CustomEvent): Promise<void>;
    render(): any;
}

export declare class IrListingHeader {
    inputValue: string;
    private bookingListingService;
    componentWillLoad(): void;
    handleDateRangeChange(e: CustomEvent): void;
    handleSearchClicked(): Promise<void>;
    render(): any;
}

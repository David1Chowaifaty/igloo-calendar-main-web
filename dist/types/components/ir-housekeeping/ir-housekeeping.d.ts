export declare class IrHousekeeping {
    language: string;
    ticket: string;
    baseurl: string;
    propertyid: number;
    p: string;
    isLoading: boolean;
    private roomService;
    private houseKeepingService;
    componentWillLoad(): void;
    handleResetData(e: CustomEvent): Promise<void>;
    ticketChanged(newValue: string, oldValue: string): Promise<void>;
    initializeApp(): Promise<void>;
    render(): any;
}

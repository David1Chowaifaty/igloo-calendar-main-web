export declare class IrHousekeeping {
    language: string;
    ticket: string;
    propertyid: number;
    p: string;
    isLoading: boolean;
    private roomService;
    private houseKeepingService;
    private token;
    componentWillLoad(): void;
    handleResetData(e: CustomEvent): Promise<void>;
    ticketChanged(newValue: string, oldValue: string): void;
    initializeApp(): Promise<void>;
    render(): any;
}
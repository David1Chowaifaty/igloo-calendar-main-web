import { SetupEntries } from "../../models/IBooking";
export declare class IrHousekeeping {
    language: string;
    ticket: string;
    propertyid: number;
    p: string;
    baseUrl: string;
    isLoading: boolean;
    frequencies: SetupEntries[];
    private roomService;
    private houseKeepingService;
    private setupService;
    private ApiClient;
    /** Re-runs init when the language changes so server-localized data follows. */
    private languageSync;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
    handleResetData(e: CustomEvent): Promise<void>;
    ticketChanged(newValue: string, oldValue: string): void;
    initializeApp(): Promise<void>;
    render(): any;
}

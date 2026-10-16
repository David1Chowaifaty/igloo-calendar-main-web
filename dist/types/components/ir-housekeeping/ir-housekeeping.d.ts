import { IEntries } from "../../models/IBooking";
export declare class IrHousekeeping {
    language: string;
    ticket: string;
    propertyid: number;
    p: string;
    baseUrl: string;
    isLoading: boolean;
    frequencies: IEntries[];
    private roomService;
    private houseKeepingService;
    private bookingService;
    private token;
    componentWillLoad(): void;
    handleResetData(e: CustomEvent): Promise<void>;
    ticketChanged(newValue: string, oldValue: string): void;
    initializeApp(): Promise<void>;
    render(): any;
}

import { IEntries } from "../../models/IBooking";
import { EventEmitter } from '../../stencil-public-runtime';
import { IToast } from "../ui/ir-toast/toast";
export declare class IrHousekeeping {
    language: string;
    ticket: string;
    propertyid: number;
    p: string;
    baseUrl: string;
    isLoading: boolean;
    frequencies: IEntries[];
    toast: EventEmitter<IToast>;
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

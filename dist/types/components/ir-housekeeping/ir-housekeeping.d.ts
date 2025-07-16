import { EventEmitter } from '../../stencil-public-runtime';
import { IToast } from "../ui/ir-toast/toast";
export declare class IrHousekeeping {
    language: string;
    ticket: string;
    propertyid: number;
    p: string;
    baseUrl: string;
    isLoading: boolean;
    toast: EventEmitter<IToast>;
    private roomService;
    private houseKeepingService;
    private propertyService;
    private token;
    componentWillLoad(): void;
    handleResetData(e: CustomEvent): Promise<void>;
    ticketChanged(newValue: string, oldValue: string): void;
    initializeApp(): Promise<void>;
    private saveAutomaticCheckInCheckout;
    private saveCleaningFrequency;
    render(): any;
}

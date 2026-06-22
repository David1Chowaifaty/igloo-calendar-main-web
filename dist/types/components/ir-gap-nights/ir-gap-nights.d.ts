import { IEntries } from "../../models/IBooking";
export declare class IrGapNights {
    ticket: string;
    p: string;
    language: string;
    propertyid: number;
    isLoading: boolean;
    isSaving: boolean;
    selectedRule: string;
    applicableDays: number;
    gapRules: IEntries[];
    gapRanges: IEntries[];
    private propertyId;
    private tokenService;
    private roomService;
    private propertyService;
    private bookingService;
    componentWillLoad(): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    handlePChange(newValue: string, oldValue: string): void;
    handlePropertyIdChange(newValue: number, oldValue: number): void;
    private init;
    private save;
    render(): any;
}

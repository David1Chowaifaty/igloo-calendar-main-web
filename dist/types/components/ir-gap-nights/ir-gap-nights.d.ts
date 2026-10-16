import { SetupEntries } from "../../models/IBooking";
export declare class IrGapNights {
    ticket: string;
    p: string;
    language: string;
    propertyid: number;
    isLoading: boolean;
    isSaving: boolean;
    selectedRule: string;
    applicableDays: number;
    gapRules: SetupEntries[];
    gapRanges: SetupEntries[];
    private propertyId;
    private apiClientService;
    private roomService;
    private propertyService;
    private setupService;
    /** Re-runs init when the language changes so server-localized data follows. */
    private languageSync;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    handlePChange(newValue: string, oldValue: string): void;
    handlePropertyIdChange(newValue: number, oldValue: number): void;
    private init;
    private save;
    render(): any;
}

import { IrComboboxSelectEventDetail } from "../../../components";
import { Booking } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrPmsSearch {
    propertyid: string;
    ticket: string;
    language: string;
    shortcutHint: string | null;
    bookings: Booking[];
    isLoading: boolean;
    private apiClientService;
    private bookingListingService;
    private search$;
    private subscription;
    /** Results were fetched in the old language; drop them so the next search refetches in the new one. */
    private languageSync;
    comboboxSelect: EventEmitter<IrComboboxSelectEventDetail>;
    autoCompleteRef: HTMLIrAutocompleteElement;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    private detectShortcutHint;
    private focusInput;
    private fetchBookings;
    private handleComboboxSelect;
    render(): any;
}

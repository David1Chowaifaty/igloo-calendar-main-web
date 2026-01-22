import { IrComboboxSelectEventDetail } from "../../../components";
import { Booking } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrPmsSearch {
    propertyid: string;
    ticket: string;
    shortcutHint: string | null;
    bookings: Booking[];
    isLoading: boolean;
    private tokenService;
    private bookingListingService;
    comboboxSelect: EventEmitter<IrComboboxSelectEventDetail>;
    autoCompleteRef: HTMLIrAutocompleteElement;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    private detectShortcutHint;
    private focusInput;
    private fetchBookings;
    private handleComboboxSelect;
    render(): any;
}

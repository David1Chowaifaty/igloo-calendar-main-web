import { IrComboboxSelectEventDetail } from "../../../components";
import { Booking } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrPmsSearch {
    propertyid: string;
    ticket: string;
    shortcutHint: string | null;
    bookings: Booking[];
    isLoading: boolean;
    private pickerInputRef;
    private tokenService;
    private bookingListingService;
    comboboxSelect: EventEmitter<IrComboboxSelectEventDetail>;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    private detectShortcutHint;
    private focusInput;
    private fetchBookings;
    render(): any;
    private handleComboboxSelect;
}

import { EventEmitter } from '../../../stencil-public-runtime';
import { Guest } from "../../../models/booking.dto";
import { ICountry } from "../../../models/IBooking";
import { IToast } from "../../ui/ir-toast/toast";
export type GuestChangedEvent = Partial<Guest>;
export declare class IrGuestInfoForm {
    fromId: string;
    language: string;
    email: string;
    booking_nbr: string;
    ticket: string;
    guest: Guest;
    countries: ICountry[];
    isLoading: boolean;
    autoValidate: boolean;
    guestInfoDrawerClosed: EventEmitter<{
        source: Element;
    }>;
    resetBookingEvt: EventEmitter<null>;
    toast: EventEmitter<IToast>;
    guestChanged: EventEmitter<GuestChangedEvent>;
    private bookingService;
    private ApiClient;
    /** Re-runs init when the language changes so server-localized data follows. */
    private languageSync;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
    ticketChanged(newValue: string, oldValue: string): void;
    private handleInputChange;
    private init;
    private editGuest;
    render(): any;
}

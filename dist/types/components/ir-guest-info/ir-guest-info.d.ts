import { EventEmitter } from '../../stencil-public-runtime';
import { Guest } from "../../models/booking.dto";
import { ICountry } from "../../components";
export declare class GuestInfo {
    language: string;
    headerShown: boolean;
    email: string;
    booking_nbr: string;
    ticket: string;
    isInSideBar: boolean;
    countries: ICountry[];
    guest: Guest | null;
    isLoading: boolean;
    autoValidate: boolean;
    closeSideBar: EventEmitter<null>;
    resetBookingEvt: EventEmitter<null>;
    private bookingService;
    private ApiClient;
    /** Re-runs init when the language changes so server-localized data follows. */
    private languageSync;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
    ticketChanged(newValue: string, oldValue: string): void;
    init(): Promise<void>;
    private handleInputChange;
    private editGuest;
    render(): any;
}

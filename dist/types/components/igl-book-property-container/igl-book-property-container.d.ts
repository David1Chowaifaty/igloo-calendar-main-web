import { IglBookPropertyPayloadPlusBooking } from "../../models/igl-book-property";
import { EventEmitter } from '../../stencil-public-runtime';
import { ICountry } from "../../models/IBooking";
export declare class IglBookPropertyContainer {
    language: string;
    ticket: string;
    p: string;
    propertyid: number;
    from_date: string;
    to_date: string;
    withIrToastAndInterceptor: boolean;
    bookingItem: IglBookPropertyPayloadPlusBooking | null;
    showPaymentDetails: any;
    countries: ICountry[];
    calendarData: any;
    resetBookingData: EventEmitter<null>;
    private bookingService;
    private roomService;
    private ApiClient;
    setRoomsData(roomServiceResp: any): void;
    initializeApp(): Promise<void>;
    /** Re-runs init when the language changes so server-localized data follows. */
    private languageSync;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
    ticketChanged(newValue: string, oldValue: string): void;
    handleCloseBookingWindow(): void;
    handleTriggerClicked(): void;
    render(): any;
}

import { IglBookPropertyPayloadPlusBooking } from "../../models/igl-book-property";
import { EventEmitter } from '../../stencil-public-runtime';
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
    countryNodeList: any;
    calendarData: any;
    resetBookingData: EventEmitter<null>;
    private bookingService;
    private roomService;
    private token;
    setRoomsData(roomServiceResp: any): void;
    initializeApp(): Promise<void>;
    componentWillLoad(): void;
    ticketChanged(newValue: string, oldValue: string): void;
    handleCloseBookingWindow(): void;
    handleTriggerClicked(): void;
    render(): any;
}

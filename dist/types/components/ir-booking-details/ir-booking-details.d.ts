import { EventEmitter } from '../../stencil-public-runtime';
import { Booking, Guest, IPmsLog } from "../../models/booking.dto";
import { TIglBookPropertyPayload } from "../../models/igl-book-property";
import { ILocale } from "../../stores/locales.store";
import { IToast } from '../ir-toast/toast';
import { ICountry } from "../../models/IBooking";
export declare class IrBookingDetails {
    element: HTMLElement;
    language: string;
    ticket: string;
    bookingNumber: string;
    baseurl: string;
    propertyid: number;
    is_from_front_desk: boolean;
    hasPrint: boolean;
    hasReceipt: boolean;
    hasDelete: boolean;
    hasMenu: boolean;
    hasRoomEdit: boolean;
    hasRoomDelete: boolean;
    hasRoomAdd: boolean;
    hasCheckIn: boolean;
    hasCheckOut: boolean;
    hasCloseButton: boolean;
    bookingItem: TIglBookPropertyPayload | null;
    statusData: any[];
    tempStatus: string;
    showPaymentDetails: any;
    bookingData: Booking;
    countryNodeList: ICountry[];
    calendarData: any;
    guestData: Guest;
    defaultTexts: ILocale;
    rerenderFlag: boolean;
    sidebarState: 'guest' | 'pickup' | 'extra_note' | null;
    isUpdateClicked: boolean;
    pms_status: IPmsLog;
    isPMSLogLoading: boolean;
    userCountry: ICountry | null;
    toast: EventEmitter<IToast>;
    bookingChanged: EventEmitter<Booking>;
    closeSidebar: EventEmitter<null>;
    private bookingService;
    private roomService;
    private property;
    private dialogRef;
    componentDidLoad(): void;
    ticketChanged(): Promise<void>;
    setRoomsData(roomServiceResp: any): void;
    initializeApp(): Promise<void>;
    handleIconClick(e: any): void;
    handleEditSidebar(): void;
    handleSelectChange(e: CustomEvent<any>): void;
    openEditSidebar(): void;
    printBooking(mode?: 'invoice' | 'default'): void;
    updateStatus(): Promise<void>;
    openPMSLogsDialog(): Promise<void>;
    handleEditInitiated(e: CustomEvent<TIglBookPropertyPayload>): void;
    handleCloseBookingWindow(): void;
    handleDeleteFinish(e: CustomEvent): void;
    resetBookingData(): Promise<void>;
    handleResetBookingData(e: CustomEvent<Booking | null>): Promise<Booking>;
    renderPhoneNumber(): string;
    render(): any[];
    renderSidbarContent(): any;
}

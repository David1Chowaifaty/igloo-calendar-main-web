import { EventEmitter } from '../../stencil-public-runtime';
import { Booking, ExtraService, Guest, IPmsLog, SharedPerson } from "../../models/booking.dto";
import { TIglBookPropertyPayload } from "../../models/igl-book-property";
import { IToast } from "../ui/ir-toast/toast";
import { ICountry, IEntries } from "../../models/IBooking";
import { IPaymentAction } from "../../services/payment.service";
import { BookingDetailsSidebarEvents, OpenSidebarEvent, PaymentEntries, PrintScreenOptions } from './types';
import { SplitIndex } from "../../utils/booking";
export declare class IrBookingDetails {
    private bookingService;
    private roomService;
    private paymentService;
    private token;
    private arrivalTime;
    private svcCategories;
    private printingBaseUrl;
    private modalRef;
    private paymentFolioRef;
    element: HTMLElement;
    bedPreference: IEntries[];
    booking: Booking;
    bookingItem: TIglBookPropertyPayload | null;
    calendarData: any;
    countries: ICountry[];
    departureTime: IEntries[];
    guestData: Guest;
    isPMSLogLoading: boolean;
    isUpdateClicked: boolean;
    modalState: {
        type: 'email' | (string & {});
        message: string;
        loading: boolean;
    };
    paymentActions: IPaymentAction[];
    paymentEntries: PaymentEntries;
    pms_status: IPmsLog;
    property_id: number;
    rerenderFlag: boolean;
    roomGuest: any;
    selectedService: ExtraService;
    showPaymentDetails: any;
    sidebarPayload: any;
    sidebarState: BookingDetailsSidebarEvents | null;
    splitIndex: SplitIndex;
    statusData: any[];
    /**
     * Booking number used to fetch booking details.
     */
    bookingNumber: string;
    /**
     * Enables the check-in action in room components.
     */
    hasCheckIn: boolean;
    /**
     * Enables the check-out action in room components.
     */
    hasCheckOut: boolean;
    /**
     * Displays the close button in the booking header.
     */
    hasCloseButton: boolean;
    /**
     * Enables the delete booking action.
     */
    hasDelete: boolean;
    /**
     * Displays the navigation menu button.
     */
    hasMenu: boolean;
    /**
     * Enables the print booking option.
     */
    hasPrint: boolean;
    /**
     * Enables the receipt action in the booking header.
     */
    hasReceipt: boolean;
    /**
     * Allows adding new rooms to the booking.
     */
    hasRoomAdd: boolean;
    /**
     * Allows deleting rooms from the booking.
     */
    hasRoomDelete: boolean;
    /**
     * Allows editing existing rooms in the booking.
     */
    hasRoomEdit: boolean;
    /**
     * Indicates whether the component is rendered from the front desk context.
     * Disables interceptor and toast rendering when true.
     */
    is_from_front_desk: boolean;
    /**
     * Active language code used for translations and API requests.
     * Defaults to 'en'.
     */
    language: string;
    /**
     * Property alias or account name used when fetching exposed property data.
     */
    p: string;
    /**
     * Property ID used to retrieve property-specific configuration.
     */
    propertyid: number;
    /**
     * Authentication token used to initialize the component.
     * Triggers re-initialization when changed.
     */
    ticket: string;
    ticketChanged(newValue: string, oldValue: string): void;
    /**
     * Emitted whenever the booking object is updated.
     * Used to notify parent components about booking state changes.
     */
    bookingChanged: EventEmitter<Booking>;
    /**
     * Emitted when the sidebar should be closed.
     * Typically triggered by header actions (e.g., close button).
     */
    closeSidebar: EventEmitter<null>;
    /**
     * Emits toast notifications to the parent context.
     * Carries toast configuration such as message, type, and duration.
     */
    toast: EventEmitter<IToast>;
    componentWillLoad(): void;
    handleSideBarEvents(e: CustomEvent<OpenSidebarEvent<unknown>>): void;
    handleIconClick(e: CustomEvent): void;
    handleResetExposedCancellationDueAmount(e: CustomEvent): Promise<void>;
    handleEditInitiated(e: CustomEvent<TIglBookPropertyPayload>): void;
    handleRoomGuestsUpdate(e: CustomEvent<{
        identifier: string;
        guests: SharedPerson[];
    }>): void;
    handleResetBooking(e: CustomEvent<Booking | null>): Promise<void>;
    handleEditExtraService(e: CustomEvent): void;
    handleOpenPrintScreen(e: CustomEvent<PrintScreenOptions>): void;
    private setRoomsData;
    private initializeApp;
    private openPrintingScreen;
    private handleCloseBookingWindow;
    private handleDeleteFinish;
    private resetBooking;
    private handleModalConfirm;
    render(): any;
}

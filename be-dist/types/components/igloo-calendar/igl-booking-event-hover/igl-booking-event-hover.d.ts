import { EventEmitter } from '../../../stencil-public-runtime';
import { ICountry } from "../../../models/IBooking";
export declare class IglBookingEventHover {
    bookingEvent: {
        [key: string]: any;
    };
    bubbleInfoTop: boolean;
    currency: any;
    countryNodeList: ICountry[];
    is_vacation_rental: boolean;
    isLoading: string;
    showBookingPopup: EventEmitter;
    hideBubbleInfo: EventEmitter;
    deleteButton: EventEmitter<string>;
    bookingCreated: EventEmitter<{
        pool?: string;
        data: any[];
    }>;
    element: any;
    private fromTimeStamp;
    private toTimeStamp;
    private todayTimeStamp;
    private eventService;
    private hideButtons;
    shouldHideUnassignUnit: boolean;
    componentWillLoad(): void;
    handleKeyDown(event: KeyboardEvent): void;
    hideBubble(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    getBookingId(): any;
    getTotalOccupants(): string;
    getPhoneNumber(): any;
    getCountry(): string;
    getPhoneCode(): any;
    renderPhone(): any;
    getGuestNote(): any;
    getInternalNote(): any;
    getTotalPrice(): any;
    getCheckInDate(): any;
    getCheckOutDate(): any;
    getArrivalTime(): any;
    getRatePlan(): any;
    getEntryDate(): any;
    getReleaseAfterHours(): any;
    isNewBooking(): boolean;
    isCheckedIn(): boolean;
    isCheckedOut(): boolean;
    isBlockedDateEvent(): boolean;
    getRoomId(): any;
    getCategoryByRoomId(roomId: any): any;
    hasSplitBooking(): any;
    canCheckIn(): boolean;
    canCheckOut(): boolean;
    handleBlockDateUpdate(event: CustomEvent<{
        [key: string]: any;
    }>): void;
    handleEditBooking(): void;
    getStringDateFormat(dt: any): string;
    handleAddRoom(): void;
    handleCustomerCheckIn(): void;
    handleCustomerCheckOut(): void;
    handleDeleteEvent(): void;
    handleUpdateBlockedDates(): Promise<void>;
    handleConvertBlockedDateToBooking(): void;
    getRoomInfo(): any;
    renderTitle(eventType: any, roomInfo: any): string;
    private handleBookingOption;
    renderNote(): any;
    getInfoElement(): any;
    getNewBookingOptions(): any;
    getBlockedView(): any;
    render(): any;
}
import { EventEmitter } from '../../../stencil-public-runtime';
import { ICountry, RoomBlockDetails } from "../../../models/IBooking";
import { TAdultChildConstraints, TPropertyButtonsTypes } from "../../../models/igl-book-property";
import { IToast } from "../../ui/ir-toast/toast";
import { ICurrency } from "../../../models/calendarData";
export type IHistoryEntry = {
    dates: {
        checkIn: Date;
        checkOut: Date;
    };
    adults: number;
    children: number;
};
export declare class IglBookProperty {
    propertyid: number;
    allowedBookingSources: any;
    language: string;
    countries: ICountry[];
    showPaymentDetails: boolean;
    currency: ICurrency;
    bookingData: {
        [key: string]: any;
    };
    adultChildConstraints: TAdultChildConstraints;
    adultChildCount: {
        adult: number;
        child: number;
    };
    renderAgain: boolean;
    dateRangeData: {
        [key: string]: any;
    };
    defaultData: any;
    isLoading: string;
    bookingHistory: Array<{
        dates: {
            checkIn: Date;
            checkOut: Date;
        };
        adults: number;
        children: number;
    }>;
    closeBookingWindow: EventEmitter<{
        [key: string]: any;
    }>;
    blockedCreated: EventEmitter<RoomBlockDetails>;
    resetBookingEvt: EventEmitter<null>;
    animateIrButton: EventEmitter<string>;
    animateIrSelect: EventEmitter<string>;
    toast: EventEmitter<IToast>;
    private initialRoomIds;
    private sourceOption;
    private page;
    private showSplitBookingOption;
    private sourceOptions;
    private guestData;
    private bookedByInfoData;
    private blockDatesData;
    private ratePricingMode;
    private selectedUnits;
    private bedPreferenceType;
    private bookingService;
    private bookPropertyService;
    private defaultDateRange;
    private updatedBooking;
    private MAX_HISTORY_LENGTH;
    private didReservation;
    private wasBlockedUnit;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    clearBooking(e: CustomEvent): void;
    handleSpiltBookingSelected(e: CustomEvent<{
        key: string;
        data: unknown;
    }>): Promise<void>;
    handleAdultChildChange(event: CustomEvent): void;
    onDateRangeSelect(event: CustomEvent<{
        [key: string]: any;
    }>): void;
    handleSourceDropDown(event: CustomEvent): void;
    gotoSplitPageTwo(): void;
    handleButtonClicked(event: CustomEvent<{
        key: TPropertyButtonsTypes;
        data?: CustomEvent;
    }>): void;
    private updateBookingHistory;
    private handleKeyDown;
    private initializeDefaultDateRange;
    private initializeDefaultData;
    private fetchSetupEntriesAndInitialize;
    private initializeEventData;
    private initializeEditBookingData;
    private initializePage;
    fetchSetupEntries(): Promise<import("@/models/IBooking").ISetupEntries>;
    private isGuestDataIncomplete;
    private isButtonDisabled;
    private setSourceOptions;
    private setOtherProperties;
    private checkBookingAvailability;
    private updateBooking;
    private checkAndBlockDate;
    private closeWindow;
    private isEventType;
    private handleBlockDateUpdate;
    private handleGuestInfoUpdate;
    private handleBookedByInfoUpdate;
    private renderPage;
    private gotoPage;
    private getPageBlockDatesView;
    private handlePageTwoDataUpdateEvent;
    private handleBlockDate;
    private bookUser;
    private adjustBlockedDatesAfterReservation;
    private setLoadingState;
    private resetLoadingState;
    private getCurrentPage;
    render(): any;
}

import { EventEmitter } from '../../../../stencil-public-runtime';
import { IPageTwoDataUpdateProps } from "../../../../models/models";
import { IglBookPropertyPayloadEditBooking, TPropertyButtonsTypes } from '../../../../models/igl-book-property';
import { ICurrency } from "../../../../models/calendarData";
export declare class IglBookingForm {
    showPaymentDetails: boolean;
    currency: ICurrency;
    isEditOrAddRoomEvent: boolean;
    dateRangeData: {
        [key: string]: any;
    };
    bookingData: {
        [key: string]: any;
    };
    showSplitBookingOption: boolean;
    language: string;
    bookedByInfoData: {
        [key: string]: any;
    };
    propertyId: number;
    bedPreferenceType: any;
    selectedRooms: Map<string, Map<string, any>>;
    isLoading: string;
    countryNodeList: any;
    selectedGuestData: any;
    defaultGuestData: IglBookPropertyPayloadEditBooking;
    selectedBookedByData: any;
    guestData: any;
    selectedUnits: {
        [key: string]: any;
    };
    dataUpdateEvent: EventEmitter<IPageTwoDataUpdateProps>;
    buttonClicked: EventEmitter<{
        key: TPropertyButtonsTypes;
        data?: CustomEvent;
    }>;
    componentWillLoad(): void;
    initializeGuestData(): void;
    handleOnApplicationInfoDataUpdateEvent(event: CustomEvent, index: number): void;
    handleEventData(event: any, key: string, index: number): void;
    isGuestDataIncomplete(): boolean;
    isButtonDisabled(key: string): boolean;
    render(): any;
}

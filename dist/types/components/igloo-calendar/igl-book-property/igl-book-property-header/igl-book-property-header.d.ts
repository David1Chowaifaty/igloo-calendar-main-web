import { EventEmitter } from '../../../../stencil-public-runtime';
import { TAdultChildConstraints, TPropertyButtonsTypes } from '../../../../models/igl-book-property';
import { IToast } from "../../../ui/ir-toast/toast";
import { Booking } from "../../../../models/booking.dto";
export declare class IglBookPropertyHeader {
    splitBookingId: any;
    bookingData: any;
    minDate: string;
    message: string;
    bookingDataDefaultDateRange: {
        [key: string]: any;
    };
    showSplitBookingOption: boolean;
    adultChildConstraints: TAdultChildConstraints;
    splitBookings: any[];
    dateRangeData: any;
    bookedByInfoData: any;
    defaultDaterange: {
        from_date: string;
        to_date: string;
    };
    propertyId: number;
    wasBlockedUnit: boolean;
    isLoading: boolean;
    bookings: Booking[];
    splitBookingDropDownChange: EventEmitter<any>;
    checkClicked: EventEmitter<any>;
    buttonClicked: EventEmitter<{
        key: TPropertyButtonsTypes;
    }>;
    toast: EventEmitter<IToast>;
    spiltBookingSelected: EventEmitter<{
        key: string;
        data: unknown;
    }>;
    animateIrSelect: EventEmitter<string>;
    private bookingService;
    adultAnimationContainer: any;
    private fetchExposedBookings;
    private getSplitBookingList;
    private getSourceNode;
    private getAdultChildConstraints;
    private renderChildCaption;
    private handleButtonClicked;
    private isEventType;
    private getMinDate;
    private getMaxDate;
    render(): any;
}

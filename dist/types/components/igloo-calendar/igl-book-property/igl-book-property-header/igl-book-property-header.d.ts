import { EventEmitter } from '../../../../stencil-public-runtime';
import { TAdultChildConstraints, TPropertyButtonsTypes, TSourceOptions } from '../../../../models/igl-book-property';
import { IToast } from "../../../ui/ir-toast/toast";
import { Booking } from "../../../../models/booking.dto";
export declare class IglBookPropertyHeader {
    splitBookingId: any;
    bookingData: any;
    minDate: string;
    sourceOptions: TSourceOptions[];
    message: string;
    bookingDataDefaultDateRange: {
        [key: string]: any;
    };
    showSplitBookingOption: boolean;
    adultChildConstraints: TAdultChildConstraints;
    splitBookings: any[];
    adultChildCount: {
        adult: number;
        child: number;
    };
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
    sourceDropDownChange: EventEmitter<string>;
    adultChild: EventEmitter<any>;
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
    private sourceOption;
    adultAnimationContainer: any;
    private fetchExposedBookings;
    private getSplitBookingList;
    private getSourceNode;
    private handleAdultChildChange;
    private getAdultChildConstraints;
    private renderChildCaption;
    private handleButtonClicked;
    private isEventType;
    private getMinDate;
    private getMaxDate;
    render(): any;
}

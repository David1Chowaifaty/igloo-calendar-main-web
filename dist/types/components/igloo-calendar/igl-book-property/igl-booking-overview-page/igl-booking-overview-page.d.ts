import { EventEmitter } from '../../../../stencil-public-runtime';
import { TAdultChildConstraints } from '../../../../models/igl-book-property';
export declare class IglBookingOverviewPage {
    bookingData: any;
    propertyId: number;
    message: string;
    showSplitBookingOption: boolean;
    eventType: string;
    currency: any;
    adultChildConstraints: TAdultChildConstraints;
    ratePricingMode: any;
    dateRangeData: any;
    defaultDaterange: {
        from_date: string;
        to_date: string;
    };
    selectedRooms: Map<string, Map<string, any>>;
    bookedByInfoData: any;
    initialRoomIds: any;
    wasBlockedUnit: boolean;
    roomsDataUpdate: EventEmitter;
    getSplitBookings(): any;
    isEventType(event: string): boolean;
    setMinDate(): string;
    render(): any;
}

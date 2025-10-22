import { EventEmitter } from '../../../stencil-public-runtime';
import { ICountry } from "../../../models/IBooking";
import { CalendarModalEvent } from "../../../models/property-types";
import { BookingColor } from "../../../models/booking.dto";
import { CalendarSidebarState } from '../igloo-calendar';
export declare class IglBookingEventHover {
    element: HTMLIglBookingEventHoverElement;
    bookingEvent: {
        [key: string]: any;
    };
    bubbleInfoTop: boolean;
    currency: any;
    countries: ICountry[];
    is_vacation_rental: boolean;
    isLoading: string;
    shouldHideUnassignUnit: boolean;
    canCheckInOrCheckout: boolean;
    bookingColor: BookingColor | null;
    showBookingPopup: EventEmitter;
    hideBubbleInfo: EventEmitter;
    deleteButton: EventEmitter<string>;
    bookingCreated: EventEmitter<{
        pool?: string;
        data: any[];
    }>;
    showDialog: EventEmitter<CalendarModalEvent>;
    openCalendarSidebar: EventEmitter<CalendarSidebarState>;
    private eventService;
    private hideButtons;
    private propertyService;
    private baseColor;
    componentWillLoad(): void;
    private getEventLegend;
    handleBookingEventChange(newValue: any, oldValue: any): void;
    private getBookingId;
    private hideBubble;
    handleListenKeyDown(e: KeyboardEvent): void;
    private getTotalOccupants;
    private getPhoneNumber;
    private getCountry;
    private getPhoneCode;
    private renderPhone;
    private getInternalNote;
    private getTotalPrice;
    private getArrivalTime;
    private getRatePlan;
    private getEntryDate;
    private isNewBooking;
    private isCheckedIn;
    private isBlockedDateEvent;
    private hasSplitBooking;
    private canCheckIn;
    private canCheckOut;
    private handleBlockDateUpdate;
    private handleEditBooking;
    private getStringDateFormat;
    private handleAddRoom;
    private handleCustomerCheckIn;
    private handleCustomerCheckOut;
    private handleDeleteEvent;
    private handleUpdateBlockedDates;
    private handleConvertBlockedDateToBooking;
    private getRoomInfo;
    private renderTitle;
    private handleBookingOption;
    private getOTANotes;
    /**
     * Determines whether the current booking is eligible to be split.
     *
     * Rules enforced:
     *  1) Minimum stay — there must be at least 2 nights between `from_date` (check-in) and `to_date` (check-out).
     *     (Checkout is treated as exclusive; nights = `to_date - from_date` in whole days.)
     *  2) Proximity to checkout — disallow splitting when checkout is tomorrow or earlier
     *     (i.e., `to_date - today < 1 day` when all are normalized to start of day).
     *
     * @returns {boolean} `true` if the booking can be split under the rules above; otherwise `false`.
     *
     * @example
     * // Given defaultDates: { from_date: '2025-10-10', to_date: '2025-10-13' }
     * // nights = 3, and if checkout is more than a day away, returns true.
     * const canSplit = this.canSplitBooking(); // -> true
     */
    private canSplitBooking;
    private getInfoElement;
    private handleSplitBooking;
    private getNewBookingOptions;
    private getBlockedView;
    render(): any;
}

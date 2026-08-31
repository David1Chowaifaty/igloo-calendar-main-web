import { Booking, Room } from "../../../../models/booking.dto";
import { PropertyRoomType } from "../../../../models/IBooking";
import { RoomDates, SelectedUnit } from "../../../../models/room-selection";
import { SelectOption } from "../../../../utils/utils";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IglSplitBookingForm {
    booking: Booking;
    identifier: Room['identifier'];
    formId: string;
    selectedDates: RoomDates;
    room: Room;
    roomTypes: PropertyRoomType[];
    hasSearched: boolean;
    isSearching: boolean;
    selectedUnit: Partial<SelectedUnit>;
    isLoading: boolean;
    errors: Record<string, boolean> | null;
    mealPlanOptions: SelectOption[] | null;
    closeModal: EventEmitter<null>;
    private defaultDates;
    private bookingService;
    componentWillLoad(): void;
    private getRoom;
    private generateDates;
    private checkBookingAvailability;
    private doReservation;
    private updateSelectedUnit;
    /** Bookable room types, each reduced to its de-duplicated set of fully-available physical units. */
    private get eligibleRoomTypes();
    render(): any;
}

import { Booking, Room } from "../../../models/booking.dto";
import { PropertyRoomType } from "../../../models/IBooking";
import { SelectOption } from "../../../utils/utils";
import { EventEmitter } from '../../../stencil-public-runtime';
import { RoomDates, SelectedUnit } from './types';
export declare class IglSplitBooking {
    booking: Booking;
    identifier: Room['identifier'];
    selectedDates: RoomDates;
    room: Room;
    roomTypes: PropertyRoomType[];
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
    render(): any;
}

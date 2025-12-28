import { SelectedUnit } from "../../igloo-calendar/igl-split-booking/types";
import { Booking, Room } from "../../../models/booking.dto";
import { PropertyRoomType } from "../../../models/IBooking";
import { SelectOption } from "../../../utils/utils";
import { EventEmitter } from '../../../stencil-public-runtime';
import { Moment } from 'moment';
export declare class IrReallocationForm {
    booking: Booking;
    identifier: string;
    pool: string;
    formId: string;
    date: Moment;
    room: Room;
    roomTypes: PropertyRoomType[];
    selectedUnit: Partial<SelectedUnit>;
    errors: Record<string, boolean> | null;
    mealPlanOptions: SelectOption[] | null;
    closeModal: EventEmitter<null>;
    private bookingService;
    private eventsService;
    componentWillLoad(): void;
    private getRoom;
    private checkBookingAvailability;
    private getDates;
    private reallocateUnit;
    private updateSelectedUnit;
    private get minDate();
    render(): any;
}

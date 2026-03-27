import { EventEmitter } from '../../../../stencil-public-runtime';
import { BookingEditorMode } from '../types';
import { Room, Booking } from "../../../../models/booking.dto";
import { ExposedGuests } from "../../../../services/booking-service/types";
export declare class IrBookingEditorForm {
    mode: BookingEditorMode;
    room: Room;
    booking: Booking;
    guests: ExposedGuests;
    totalCost: number;
    assignee: 'agent' | 'guest';
    doReservation: EventEmitter<string>;
    private bookingService;
    private bookingEditorService;
    private totalRooms;
    pickerEl: HTMLIrPickerElement;
    componentWillLoad(): Promise<void>;
    handleRecalculation(e: CustomEvent): Promise<void>;
    private fetchGuests;
    private handleComboboxSelect;
    render(): any;
}

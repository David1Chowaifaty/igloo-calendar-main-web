import { EventEmitter } from '../../../../stencil-public-runtime';
import { BookingEditorMode } from '../types';
import { Room } from "../../../../models/booking.dto";
import { ExposedGuests } from "../../../../services/booking-service/types";
export declare class IrBookingEditorForm {
    mode: BookingEditorMode;
    room: Room;
    guests: ExposedGuests;
    doReservation: EventEmitter<string>;
    private bookingService;
    pickerEl: HTMLIrPickerElement;
    private fetchGuests;
    private handleComboboxSelect;
    render(): any;
}

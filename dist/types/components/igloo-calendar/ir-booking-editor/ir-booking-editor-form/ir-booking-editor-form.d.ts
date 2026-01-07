import { EventEmitter } from '../../../../stencil-public-runtime';
import { BookingEditorMode } from '../types';
import { Room } from "../../../../models/booking.dto";
import { ExposedGuests } from "../../../../services/booking-service/types";
export declare class IrBookingEditorForm {
    mode: BookingEditorMode;
    room: Room;
    guests: ExposedGuests;
    totalCost: number;
    doReservation: EventEmitter<string>;
    private bookingService;
    private totalRooms;
    pickerEl: HTMLIrPickerElement;
    componentWillLoad(): Promise<void>;
    handleRecalculation(e: CustomEvent): Promise<void>;
    private fetchGuests;
    private handleComboboxSelect;
    render(): any;
}

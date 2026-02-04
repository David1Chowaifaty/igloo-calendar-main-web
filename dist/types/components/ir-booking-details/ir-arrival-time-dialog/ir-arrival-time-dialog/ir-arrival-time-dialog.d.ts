import { Booking } from "../../../../models/booking.dto";
import { IEntries } from "../../../../models/IBooking";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrArrivalTimeDialog {
    booking: Booking;
    arrivalTime: IEntries[];
    isLoading: boolean;
    open: boolean;
    selectedArrivalTime: string;
    resetBookingEvt: EventEmitter<Booking | null>;
    private bookingService;
    openDialog(): Promise<void>;
    closeDialog(): Promise<void>;
    private updateArrivalTime;
    private getArrivalDescription;
    private saveArrivalTime;
    render(): any;
}

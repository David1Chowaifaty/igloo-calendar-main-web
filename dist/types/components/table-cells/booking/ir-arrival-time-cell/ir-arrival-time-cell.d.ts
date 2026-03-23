import { Booking } from "../../../../models/booking.dto";
export declare class IrArrivalTimeCell {
    display: 'block' | 'inline';
    arrival: Booking['arrival'];
    arrivalTimeLabel: string;
    render(): any;
}

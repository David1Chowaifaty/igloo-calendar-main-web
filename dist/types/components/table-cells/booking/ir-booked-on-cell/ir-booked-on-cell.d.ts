import { Booking } from "../../../../models/booking.dto";
export declare class IrBookedOnCell {
    display: 'inline' | 'block';
    bookedOn: Booking['booked_on'];
    label: string;
    showTime: boolean;
    render(): any;
}

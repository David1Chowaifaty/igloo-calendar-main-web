import { Booking } from "../../../models/booking.dto";
export declare class IrExtraServices {
    booking: Pick<Booking, 'currency' | 'extra_services' | 'booking_nbr'>;
    render(): any;
}

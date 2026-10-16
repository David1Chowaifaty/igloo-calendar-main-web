import { Booking, Room } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IglSplitBookingDrawer {
    booking: Booking;
    identifier: Room['identifier'];
    open: boolean;
    closeModal: EventEmitter<null>;
    private get room();
    render(): any;
}

import { Booking } from "../../models/booking.dto";
import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrReallocationDrawer {
    open: boolean;
    booking: Booking;
    roomIdentifier: string;
    pool: string;
    closeModal: EventEmitter<void>;
    private _id;
    render(): any;
}

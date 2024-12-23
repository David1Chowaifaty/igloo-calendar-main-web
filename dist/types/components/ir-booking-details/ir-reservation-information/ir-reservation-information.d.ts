import { Booking } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
import { ICountry } from "../../../models/IBooking";
import { OpenSidebarEvent } from '../types';
export declare class IrReservationInformation {
    booking: Booking;
    countries: ICountry[];
    openSidebar: EventEmitter<OpenSidebarEvent>;
    private handleEditClick;
    private renderPhoneNumber;
    render(): any;
}

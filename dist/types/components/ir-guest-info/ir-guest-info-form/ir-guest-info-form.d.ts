import { EventEmitter } from '../../../stencil-public-runtime';
import { Guest } from "../../../models/booking.dto";
import { ICountry } from "../../../models/IBooking";
export type GuestChangedEvent = Partial<Guest>;
export declare class IrGuestInfoForm {
    guest: Guest;
    language: string;
    countries: ICountry[];
    autoValidate: boolean;
    guestChanged: EventEmitter<GuestChangedEvent>;
    private handleInputChange;
    render(): any;
}

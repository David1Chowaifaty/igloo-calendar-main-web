import { EventEmitter } from '../../../stencil-public-runtime';
import { Guest } from "../../../models/booking.dto";
import { ICountry } from "../../../models/IBooking";
export declare class IrGuestInfoForm {
    guest: Guest;
    language: string;
    countries: ICountry[];
    autoValidate: boolean;
    guestChanged: EventEmitter<Guest>;
    private handleInputChange;
    render(): any;
}

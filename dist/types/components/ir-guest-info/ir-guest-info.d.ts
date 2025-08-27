import { EventEmitter } from '../../stencil-public-runtime';
import { Guest } from "../../models/booking.dto";
import { ICountry } from "../../components";
import { IToast } from "../ui/ir-toast/toast";
export declare class GuestInfo {
    language: string;
    headerShown: boolean;
    email: string;
    booking_nbr: string;
    ticket: string;
    isInSideBar: boolean;
    countries: ICountry[];
    guest: Guest | null;
    isLoading: boolean;
    autoValidate: boolean;
    closeSideBar: EventEmitter<null>;
    resetBookingEvt: EventEmitter<null>;
    toast: EventEmitter<IToast>;
    private bookingService;
    private roomService;
    private token;
    componentWillLoad(): Promise<void>;
    ticketChanged(newValue: string, oldValue: string): void;
    init(): Promise<void>;
    private handleInputChange;
    private editGuest;
    render(): any;
}

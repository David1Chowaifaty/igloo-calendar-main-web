import { Guest } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
import { ICountry } from "../../../models/IBooking";
import { IToast } from "../../ui/ir-toast/toast";
import { GuestChangedEvent } from "../../../components";
export declare class IrGuestInfoDrawer {
    open: boolean;
    language: string;
    email: string;
    booking_nbr: string;
    ticket: string;
    guest: Guest;
    countries: ICountry[];
    isLoading: boolean;
    autoValidate: boolean;
    guestInfoDrawerClosed: EventEmitter<{
        source: Element;
    }>;
    guestChanged: EventEmitter<GuestChangedEvent>;
    resetBookingEvt: EventEmitter<null>;
    toast: EventEmitter<IToast>;
    hostElement: HTMLElement;
    private bookingService;
    private roomService;
    private token;
    componentWillLoad(): void;
    ticketChanged(newValue: string, oldValue: string): void;
    openChanged(newValue: boolean): void;
    private init;
    private handleGuestChanged;
    private handleDrawerHide;
    private handleCancel;
    private editGuest;
    render(): any;
}

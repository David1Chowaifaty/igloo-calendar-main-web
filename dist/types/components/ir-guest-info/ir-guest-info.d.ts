import { EventEmitter } from '../../stencil-public-runtime';
import { Guest } from "../../models/booking.dto";
import { ICountry } from "../../components";
export declare class GuestInfo {
    language: string;
    headerShown: boolean;
    email: string;
    booking_nbr: string;
    ticket: string;
    countries: ICountry[];
    submit: boolean;
    guest: Guest | null;
    isLoading: boolean;
    closeSideBar: EventEmitter<null>;
    resetbooking: EventEmitter<null>;
    private bookingService;
    private roomService;
    private token;
    componentWillLoad(): Promise<void>;
    ticketChanged(newValue: string, oldValue: string): void;
    init(): Promise<void>;
    handleInputChange(key: keyof Guest, value: any): void;
    editGuest(): Promise<void>;
    render(): any[];
}

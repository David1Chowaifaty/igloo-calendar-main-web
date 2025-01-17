import { SharedPerson } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
import { ICountry, IEntries } from "../../../models/IBooking";
export declare class IrRoomGuests {
    /**
     * The name of the room currently being displayed.
     * Used to label the room in the user interface for clarity.
     */
    roomName: string;
    /**
     * A unique identifier for the room.
     * This is used to distinguish between rooms, especially when performing operations like saving or checking in guests.
     */
    identifier: string;
    /**
     * An array of people sharing the room.
     * Contains information about the {locales.entries.Lcz_MainGuest} and additional guests, such as their name, date of birth, {locales.entries.Lcz_Nationality}, and ID details.
     */
    sharedPersons: SharedPerson[];
    /**
     * The total number of guests for the room.
     * Determines how many guest input forms to display in the UI.
     */
    totalGuests: number;
    /**
     * A list of available countries.
     * Used to populate dropdowns for selecting the {locales.entries.Lcz_Nationality} of guests.
     */
    countries: ICountry[];
    /**
     * A boolean indicating whether the room is in the process of being checked in.
     * If true, additional actions like saving the room state as "checked in" are performed.
     */
    checkIn: boolean;
    /**
     * The language used for displaying text content in the component.
     * Defaults to English ('en'), but can be set to other supported languages.
     */
    language: string;
    /**
     * A unique booking number associated with the room.
     * This is used for backend operations like saving guest information or checking in the room.
     */
    bookingNumber: string;
    guests: SharedPerson[];
    idTypes: IEntries[];
    error: boolean;
    isLoading: boolean;
    submitted: boolean;
    propertyCountry: ICountry;
    closeModal: EventEmitter<null>;
    resetbooking: EventEmitter<null>;
    private bookingService;
    componentWillLoad(): void;
    private init;
    private initializeGuests;
    private updateGuestInfo;
    private saveGuests;
    render(): any;
}

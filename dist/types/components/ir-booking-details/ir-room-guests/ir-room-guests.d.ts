import { SharedPerson } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
import { ICountry } from "../../../models/IBooking";
export declare class IrRoomGuests {
    open: boolean;
    /**
     * The name of the unit (physical room) currently assigned.
     * Used to label the room in the user interface for clarity. When empty, the room has no
     * assigned unit and {@link roomType} is displayed instead.
     */
    roomName: string;
    /**
     * The room type name.
     * Displayed as a fallback label when the room has no assigned unit ({@link roomName} is empty).
     */
    roomType: string;
    /**
     * A unique identifier for the room.
     * This is used to distinguish between rooms, especially when performing operations like saving or checking in guests.
     */
    identifier: string;
    /**
     * An array of people sharing the room.
     * Contains information about the {t('Lcz_MainGuest')} and additional guests, such as their name, date of birth, {t('Lcz_Nationality')}, and ID details.
     */
    sharedPersons: SharedPerson[];
    /**
     * The total number of guests for the room.
     * Determines how many guest input forms to display in the UI.
     */
    totalGuests: number;
    /**
     * A list of available countries.
     * Used to populate dropdowns for selecting the {t('Lcz_Nationality')} of guests.
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
    closeModal: EventEmitter<null>;
    isLoading: string;
    render(): any;
}

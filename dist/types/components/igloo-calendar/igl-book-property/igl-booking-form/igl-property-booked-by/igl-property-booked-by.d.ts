import { EventEmitter } from '../../../../../stencil-public-runtime';
import { ICountry } from "../../../../../models/IBooking";
import { TPropertyButtonsTypes } from "../../../../../components";
import { ExposedGuests } from "../../../../../services/booking-service/types";
export declare class IglPropertyBookedBy {
    language: string;
    showPaymentDetails: boolean;
    defaultData: {
        [key: string]: any;
    };
    countries: ICountry[];
    propertyId: number;
    isButtonPressed: boolean;
    bookedByData: {
        [key: string]: any;
    };
    guests: ExposedGuests;
    dataUpdateEvent: EventEmitter<{
        [key: string]: any;
    }>;
    private bookingService;
    private arrivalTimeList;
    private currentMonth;
    private country;
    private paymentMethods;
    componentWillLoad(): void;
    handleButtonClicked(event: CustomEvent<{
        key: TPropertyButtonsTypes;
        data?: CustomEvent;
    }>): void;
    private assignCountryCode;
    private initializeDateData;
    private populateBookedByData;
    private handleDataChange;
    private handleCreditCardDataChange;
    private handleCountryChange;
    private updateGuest;
    private handleComboboxSelect;
    private clearEvent;
    private fetchGuests;
    private get expiryDate();
    render(): any;
}

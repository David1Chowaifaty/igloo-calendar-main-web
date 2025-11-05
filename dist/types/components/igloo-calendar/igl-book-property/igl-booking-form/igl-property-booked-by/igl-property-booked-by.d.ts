import { EventEmitter } from '../../../../../stencil-public-runtime';
import { ICountry } from "../../../../../models/IBooking";
import { TPropertyButtonsTypes } from "../../../../../components";
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
    dataUpdateEvent: EventEmitter<{
        [key: string]: any;
    }>;
    private bookingService;
    private arrivalTimeList;
    private expiryMonths;
    private expiryYears;
    private currentMonth;
    private country;
    private paymentMethods;
    componentWillLoad(): void;
    handleButtonClicked(event: CustomEvent<{
        key: TPropertyButtonsTypes;
        data?: CustomEvent;
    }>): void;
    private initializeExpiryYears;
    private assignCountryCode;
    private initializeDateData;
    private populateBookedByData;
    private handleDataChange;
    private handleCountryChange;
    private handleNumberInput;
    private checkUser;
    private updateGuest;
    private handleComboboxChange;
    private clearEvent;
    render(): any;
}

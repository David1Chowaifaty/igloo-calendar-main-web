import { EventEmitter } from '../../../../../stencil-public-runtime';
import { ICountry } from "../../../../../models/IBooking";
import { TPropertyButtonsTypes } from "../../../../../components";
export declare class IglPropertyBookedBy {
    language: string;
    showPaymentDetails: boolean;
    defaultData: {
        [key: string]: any;
    };
    dataUpdateEvent: EventEmitter<{
        [key: string]: any;
    }>;
    countries: ICountry[];
    propertyId: number;
    isButtonPressed: boolean;
    private bookingService;
    private arrivalTimeList;
    private expiryMonths;
    private expiryYears;
    private currentMonth;
    private country;
    bookedByData: {
        [key: string]: any;
    };
    componentWillLoad(): Promise<void>;
    private initializeExpiryYears;
    private assignCountryCode;
    private initializeDateData;
    private populateBookedByData;
    private handleDataChange;
    private handleCountryChange;
    private handleNumberInput;
    checkUser(): Promise<void>;
    private updateGuest;
    handleComboboxChange(e: CustomEvent): void;
    clearEvent(): void;
    handleButtonClicked(event: CustomEvent<{
        key: TPropertyButtonsTypes;
        data?: CustomEvent;
    }>): void;
    render(): any;
}

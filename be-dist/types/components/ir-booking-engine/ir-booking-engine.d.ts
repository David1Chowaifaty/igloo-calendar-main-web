import { Locale } from 'date-fns';
import { ICurrency, IExposedLanguages } from "../../models/common";
import { Variation } from "../../models/property";
import Stack from "../../models/stack";
export declare class IrBookingEngine {
    token: string;
    propertyId: number;
    baseUrl: string;
    injected: boolean;
    roomtype_id: number;
    selectedLocale: Locale;
    currencies: ICurrency[];
    languages: IExposedLanguages[];
    isLoading: boolean;
    private commonService;
    private propertyService;
    router: Stack<HTMLElement>;
    componentWillLoad(): Promise<void>;
    handleTokenChange(newValue: string, oldValue: string): void;
    initializeApp(): void;
    initRequest(): Promise<void>;
    handleVariationChange(e: CustomEvent, variations: Variation[], rateplanId: number, roomTypeId: number): void;
    handleNavigation(e: CustomEvent): void;
    handleResetBooking(e: CustomEvent): Promise<void>;
    resetBooking(): Promise<void>;
    checkAvailability(): Promise<void>;
    render(): any;
}

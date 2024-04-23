import { Locale } from 'date-fns';
import { ICurrency, IExposedLanguages, pages } from "../../models/common";
import { IExposedProperty, Variation } from "../../models/property";
import Stack from "../../models/stack";
export declare class IrBookingEngine {
    token: string;
    propertyId: number;
    baseUrl: string;
    selectedLocale: Locale;
    property: IExposedProperty;
    currencies: ICurrency[];
    languages: IExposedLanguages[];
    currentPage: pages;
    private commonService;
    private propertyService;
    router: Stack<HTMLElement>;
    componentWillLoad(): Promise<void>;
    handleTokenChange(newValue: string, oldValue: string): void;
    initializeApp(): void;
    initRequest(): Promise<void>;
    handleVariationChange(e: CustomEvent, variations: Variation[], rateplanId: number, roomTypeId: number): void;
    handleNavigation(e: CustomEvent): void;
    render(): any;
}

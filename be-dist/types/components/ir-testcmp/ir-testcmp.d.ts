import { Locale } from 'date-fns';
import { ICurrency, IExposedLanguages } from "../../models/common";
import { IExposedProperty } from "../../models/property";
export declare class IrTestcmp {
    token: string;
    propertyId: number;
    baseUrl: string;
    selectedLocale: Locale;
    property: IExposedProperty;
    currencies: ICurrency[];
    languages: IExposedLanguages[];
    private commonService;
    private propertyService;
    componentWillLoad(): void;
    handleTokenChange(): void;
    initializeApp(): void;
    initRequest(): Promise<void>;
    renderInternetMessage(isFree: boolean): "Free Internet" | "Paid Internet";
    renderRoomTypeAmenities(): any;
    render(): any;
}

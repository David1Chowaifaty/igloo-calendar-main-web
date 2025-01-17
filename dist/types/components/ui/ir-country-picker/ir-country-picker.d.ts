import { ICountry } from "../../../models/IBooking";
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrCountryPicker {
    countries: ICountry[];
    country: ICountry;
    error: boolean;
    propertyCountry: ICountry;
    inputValue: string;
    selectedCountry: ICountry;
    filteredCountries: ICountry[];
    searching: boolean;
    countryChange: EventEmitter<ICountry>;
    private debounceTimeout;
    componentWillLoad(): void;
    handleCountryChange(newCountry: ICountry, oldCountry: ICountry): void;
    private filterCountries;
    private selectCountry;
    private scrollToSelected;
    render(): any;
}

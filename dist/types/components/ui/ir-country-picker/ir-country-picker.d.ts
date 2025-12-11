import { ICountry } from "../../../models/IBooking";
import { EventEmitter } from '../../../stencil-public-runtime';
import { NativeWaInput } from '../ir-input/ir-input';
export declare class IrCountryPicker {
    /** The input's size. */
    size: NativeWaInput['size'];
    variant: 'modern' | 'default';
    /**
     * List of countries to display in the dropdown.
     */
    countries: ICountry[];
    /**
     * Currently selected country.
     */
    country: ICountry;
    /**
     * Whether to show an error state on the input.
     */
    error: boolean;
    /**
     * The property-associated country, shown separately if relevant.
     */
    propertyCountry: ICountry;
    /**
     * The label to display for the input.
     */
    label: string;
    /**
     * Test ID for automated testing.
     */
    testId: string;
    /**
     * Whether to automatically validate the input.
     */
    autoValidate: boolean;
    /**
     * The current input value typed by the user.
     */
    inputValue: string;
    /**
     * The currently selected country object.
     */
    selectedCountry: ICountry;
    /**
     * Filtered list of countries based on the user's input.
     */
    filteredCountries: ICountry[];
    /**
     * Whether the input is currently being used for searching.
     */
    searching: boolean;
    /**
     * Event emitted when a country is selected.
     */
    countryChange: EventEmitter<ICountry>;
    private debounceTimeout;
    componentWillLoad(): void;
    handleCountryChange(newCountry: ICountry, oldCountry: ICountry): void;
    /**
     * Filters the list of countries based on the current input.
     */
    private filterCountries;
    /**
     * Selects a country and emits the change event.
     */
    private selectCountry;
    /**
     * Scrolls to the selected country in the dropdown for accessibility.
     */
    private scrollToSelected;
    render(): any;
}

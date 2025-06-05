import { ICountry } from "../../../components";
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrPhoneInput {
    el: HTMLElement;
    /**
     * Label displayed next to the phone input.
     */
    label: string;
    /**
     * Initial phone number value.
     */
    value: string;
    /**
     * Disables the phone input when true.
     */
    disabled: boolean;
    /**
     * If true, styles the input to indicate an error state.
     */
    error: boolean;
    /**
     * Auth token used by the booking service (if needed).
     */
    token: string;
    /**
     * Two-letter language code used for country fetching.
     */
    language: string;
    /**
     * Default country ID used if no phone prefix is set.
     */
    default_country: number;
    /**
     * If provided, sets the phone prefix and updates selected country.
     */
    phone_prefix: string | null;
    /**
     * Placeholder text for the input.
     */
    placeholder: string;
    /**
     * Country list, used to populate prefix and dropdown.
     * If not provided, fetched from the booking service.
     */
    countries: ICountry[];
    /**
     * Identifier for test automation.
     */
    testId: string;
    /**
     * Emits when the user changes the phone number.
     * Emits `{ phone_prefix, mobile }` object.
     *
     * Example:
     * ```tsx
     * <ir-phone-input onTextChange={(e) => console.log(e.detail)} />
     * ```
     */
    textChange: EventEmitter<{
        phone_prefix: string;
        mobile: string;
    }>;
    /**
     * Tracks current user input value.
     */
    inputValue: string;
    /**
     * Tracks visibility of the country dropdown.
     */
    isDropdownVisible: boolean;
    /**
     * Currently selected country (based on prefix or ID).
     */
    currentCountry: ICountry;
    private bookingService;
    componentWillLoad(): Promise<void>;
    handleValueChange(newValue: any, oldValue: any): void;
    handlePhoneChange(newValue: any, oldValue: any): void;
    handleDocumentClick(event: MouseEvent): void;
    /**
     * Handles user input:
     * - Removes all characters except numbers and "+"
     * - Updates state and emits new phone number
     */
    private handleInputChange;
    /**
     * Sets the current country based on `phone_prefix` prop or country ID.
     * Emits current phone prefix and phone number.
     */
    private setCountryFromPhonePrefix;
    /**
     * Sets the current country by its ID.
     * Emits current phone prefix and phone number.
     */
    private setCurrentCountry;
    render(): any;
}

import { ICountry } from "../../../components";
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrPhoneInput {
    el: HTMLElement;
    mode: 'modern' | 'default';
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
     * Floating label text that appears inside the input and “floats” above
     * when the field is focused or has a value.
     *
     * - If provided, a floating label will be rendered inside the input container.
     * - If you omit this prop but set `label`, the old left-side static label is used.
     * - If you provide both `label` and `floatingLabel`, only the floating label is shown.
     *
     * Accessibility:
     * - The floating label is tied to the input via `aria-labelledby`.
     * - You can still set `placeholder`; the label will not be replaced by it.
     *
     * Examples:
     * ```tsx
     * <ir-phone-input floating-label label="Phone" />
     * ```
     */
    floatingLabel: boolean;
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
    /** Internal: input focus state for floating label. */
    hasFocus: boolean;
    private bookingService;
    /** Internal: ids for label/input pairing (a11y). */
    private inputId;
    private labelId;
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

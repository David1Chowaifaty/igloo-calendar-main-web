import { EventEmitter } from '../../../stencil-public-runtime';
import { ICountry } from "../../../models/IBooking";
import { NativeWaInput } from '../ir-input/ir-input';
export interface IrMobileInputChangeDetail {
    country: ICountry;
    value: string;
    formattedValue: string;
}
export declare class IrMobileInput {
    el: HTMLIrMobileInputElement;
    private static idCounter;
    private readonly componentId;
    private readonly inputId;
    private readonly labelId;
    private readonly descriptionId;
    private readonly errorId;
    private readonly countryStatusId;
    /** The input's size. */
    size: NativeWaInput['size'];
    /** Visible label for the phone input */
    label: string;
    /** Name attribute passed to the native input */
    name: string;
    /** Placeholder shown when the input is empty */
    placeholder: string;
    /** Help text rendered under the label */
    description?: string;
    /** Error message announced to screen readers */
    error?: string;
    /** Native required attribute */
    required: boolean;
    /** Whether the control is disabled */
    disabled: boolean;
    /** Selected country ISO code. Component updates this prop when a new country is chosen */
    countryCode?: string;
    /** Input value without formatting. Component keeps this prop in sync */
    value: string;
    /**
     * Country list, used to populate prefix and dropdown.
     * If not provided, fetched from the booking service.
     */
    countries: ICountry[];
    mobileInputChange: EventEmitter<IrMobileInputChangeDetail>;
    mobileInputCountryChange: EventEmitter<ICountry>;
    selectedCountry?: ICountry;
    isInvalid: boolean;
    componentWillLoad(): void;
    protected handleCountryCodeChange(nextCode?: string): void;
    protected handleSelectedCountryChange(next?: ICountry, previous?: ICountry): void;
    protected handleValueChange(newValue: string, oldValue: string): void;
    handleAriaInvalidChange(newValue: string, oldValue: string): void;
    private resolveCountry;
    private handleCountrySelect;
    render(): any;
}

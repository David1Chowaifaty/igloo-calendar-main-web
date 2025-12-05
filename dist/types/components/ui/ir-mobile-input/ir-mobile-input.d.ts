import { EventEmitter } from '../../../stencil-public-runtime';
import { ICountry } from "../../../models/IBooking";
import { NativeWaInput } from '../ir-custom-input/ir-custom-input';
export interface IrMobileInputChangeDetail {
    country: ICountry;
    value: string;
    formattedValue: string;
}
export declare class IrMobileInput {
    private static idCounter;
    private readonly componentId;
    private readonly inputId;
    private readonly labelId;
    private readonly descriptionId;
    private readonly errorId;
    private readonly countryStatusId;
    private inputRef?;
    private mask?;
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
    displayValue: string;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    protected handleCountryCodeChange(nextCode?: string): void;
    protected handleSelectedCountryChange(next?: ICountry, previous?: ICountry): void;
    protected handleValueChange(newValue: string, oldValue: string): void;
    private resolveCountry;
    private initializeMask;
    private rebuildMask;
    private destroyMask;
    private buildMaskOptions;
    private emitChange;
    private handleCountrySelect;
    private handlePlainInput;
    render(): any;
}

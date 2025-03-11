import { EventEmitter } from '../../../stencil-public-runtime';
import { ZodType } from 'zod';
export declare class IrPriceInput {
    el: HTMLIrPriceInputElement;
    /** The label for the input, optional */
    label?: string;
    /** Extra classnames for the input, optional */
    inputStyle?: string;
    /** Extra classnames for the label, optional */
    labelStyle?: string;
    /** The disabled for the input, optional */
    disabled?: boolean;
    /** The Currency for the input, optional */
    currency?: string;
    /** The AutoValidate for the input, optional */
    autoValidate?: boolean;
    /** Indicates the key to wrap the value (e.g., 'price' or 'cost') */
    wrapKey?: string;
    /**
     * A Zod schema for validating the input
     * Example: z.coerce.number()
     */
    zod?: ZodType<any, any>;
    /** Placeholder text for the input */
    placeholder: string;
    /** Initial value for the input */
    value: string;
    /** Whether the input is required */
    required: boolean;
    /** Minimum value for the price */
    minValue?: number;
    /** Maximum value for the price */
    maxValue?: number;
    /** Unique id for testing */
    testId?: string;
    /** Error*/
    error: boolean;
    /** Emits the current value on change */
    textChange: EventEmitter<string>;
    /** Emits the current value on blur */
    inputBlur: EventEmitter<string>;
    /** Emits the current value on focus */
    inputFocus: EventEmitter<void>;
    private id;
    private opts;
    private mask;
    private inputRef;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private initializeMask;
    private hasSpecialClass;
    private validateInput;
    private handleInputChange;
    private handleBlur;
    private handleFocus;
    render(): any;
}

import { EventEmitter } from '../../../stencil-public-runtime';
import { ZodType } from 'zod';
export declare class IrPriceInput {
    el: HTMLIrPriceInputElement;
    /** The label for the input, optional */
    label?: string;
    /** The readonly for the input, optional */
    readOnly?: boolean;
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
    /**
     * Extra class names applied to the outer <fieldset> wrapper.
     * Useful for spacing (e.g., margins/padding), width/layout utilities,
     * or theming the whole input group from the outside.
     * Example: "w-100 mb-2 d-flex align-items-center"
     */
    containerClassname: string;
    /**
     * Extra class names applied to the label container (<div class="input-group-prepend">)
     * that wraps the <label>. Use this to control label width, alignment,
     * spacing, or visibility at different breakpoints.
     * Example: "min-w-120 text-nowrap pe-2"
     */
    labelContainerClassname: string;
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

import { EventEmitter } from '../../../stencil-public-runtime';
import { FactoryArg } from 'imask';
import { ZodType } from 'zod';
export declare class IrInputText {
    el: HTMLIrInputTextElement;
    /** Name attribute for the input field */
    name: string;
    /** Value of the input field */
    value: string;
    /** Label text for the input */
    label: string;
    /** Placeholder text for the input */
    placeholder: string;
    /** Additional inline styles for the input */
    inputStyles: string;
    /** Whether the input field is required */
    required: boolean;
    /** Determines if the label is displayed */
    LabelAvailable: boolean;
    /** Whether the input field is read-only */
    readonly: boolean;
    /** Input type (e.g., text, password, email) */
    type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'datetime-local' | 'month' | 'week' | 'time' | 'color' | 'file' | 'hidden' | 'checkbox' | 'radio' | 'range' | 'button' | 'reset' | 'submit' | 'image';
    /** Whether the form has been submitted */
    submitted: boolean;
    /** Whether to apply default input styling */
    inputStyle: boolean;
    /** Size of the input field: small (sm), medium (md), or large (lg) */
    size: 'sm' | 'md' | 'lg';
    /** Text size inside the input field */
    textSize: 'sm' | 'md' | 'lg';
    /** Position of the label: left, right, or center */
    labelPosition: 'left' | 'right' | 'center';
    /** Background color of the label */
    labelBackground: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | null;
    /** Text color of the label */
    labelColor: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    /** Border color/style of the label */
    labelBorder: 'theme' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'none';
    /** Label width as a fraction of 12 columns (1-11) */
    labelWidth: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    /** Variant of the input: default or icon */
    variant: 'default' | 'icon';
    /** Whether the input is disabled */
    disabled: boolean;
    /** Whether the input has an error */
    error: boolean;
    /** Mask for the input field (optional) */
    mask: FactoryArg;
    /** Whether the input should auto-validate */
    autoValidate?: boolean;
    /** A Zod schema for validating the input */
    zod?: ZodType<any, any>;
    /** Key to wrap the value (e.g., 'price' or 'cost') */
    wrapKey?: string;
    /** Forcing css style to the input */
    inputForcedStyle?: {
        [key: string]: string;
    };
    /** Input id for testing purposes*/
    testId: string;
    /** Input max character length*/
    maxLength: number;
    initial: boolean;
    inputFocused: boolean;
    isError: boolean;
    textChange: EventEmitter<any>;
    inputBlur: EventEmitter<FocusEvent>;
    inputFocus: EventEmitter<FocusEvent>;
    private inputRef;
    private maskInstance;
    /**Input Id */
    private id;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleMaskChange(): void;
    watchHandler2(newValue: boolean): void;
    handleErrorChange(newValue: boolean, oldValue: boolean): void;
    handleAriaInvalidChange(newValue: string): void;
    private validateInput;
    private handleInputChange;
    private initMask;
    private handleBlur;
    render(): any;
}

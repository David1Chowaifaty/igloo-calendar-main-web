import { EventEmitter } from '../../../stencil-public-runtime';
import { masks } from './masks';
import { FactoryArg } from 'imask';
export type MaskName = keyof typeof masks;
export type MaskConfig<N extends MaskName = MaskName> = (typeof masks)[N];
export type MaskProp = MaskName | MaskConfig | FactoryArg;
export declare class IrInput {
    el: HTMLIrInputElement;
    /** Placeholder text displayed inside the input when empty. */
    placeholder: string;
    /** The label text displayed alongside or above the input. */
    label: string;
    /** The value of the input. */
    value: string;
    disabled: boolean;
    readonly: boolean;
    required: boolean;
    /** Type of input element — can be 'text', 'password', 'email', or 'number'. */
    type: 'text' | 'password' | 'email' | 'number';
    /** Controls where the label is positioned: 'default', 'side', or 'floating'. */
    labelPosition: 'default' | 'side' | 'floating';
    /** If true, displays a clear (X) button when the input has a value. */
    clearable: boolean;
    /** Maximum input length */
    maxLength: number;
    /** Hides the prefix slot content from assistive technologies when true. */
    prefixHidden: boolean;
    /** Hides the suffix slot content from assistive technologies when true. */
    suffixHidden: boolean;
    /** Maximum allowed value (for number or masked inputs). */
    max: number;
    /** Minimum allowed value (for number or masked inputs). */
    min: number;
    /** Mask for the input field (optional) */
    mask: MaskProp;
    _type: string;
    inputFocused: boolean;
    /** Fired on any value change (typing, programmatic set, or clear). */
    inputChange: EventEmitter<string>;
    /** Fired only when the clear button is pressed. */
    cleared: EventEmitter<void>;
    /** Fired only when the input is focused. */
    inputFocus: EventEmitter<FocusEvent>;
    /** Fired only when the input is blurred. */
    inputBlur: EventEmitter<FocusEvent>;
    private id;
    private prefixSlotEl;
    private resizeObs?;
    private _mask?;
    private inputRef;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    protected handleMaskPropsChange(): void;
    protected handleValueChange(newValue: string, oldValue: string): void;
    private handleInput;
    private handleFormReset;
    private onInput;
    private initializeMask;
    private rebuildMask;
    private destroyMask;
    private buildMaskOptions;
    private resolveMask;
    private clearValue;
    private toggleVisibility;
    private handlePrefixSlotChange;
    /** Measures prefix width and writes CSS var --ir-prefix-width on the host. */
    private measureAndSetPrefixWidth;
    private handleInputBlur;
    private handleInputFocus;
    render(): any;
}

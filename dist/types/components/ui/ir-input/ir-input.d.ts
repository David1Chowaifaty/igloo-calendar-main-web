import WaInput from '@awesome.me/webawesome/dist/components/input/input';
import { EventEmitter } from '../../../stencil-public-runtime';
import { masks } from './masks';
import { FactoryArg } from 'imask';
export type MaskName = keyof typeof masks;
export type MaskConfig<N extends MaskName = MaskName> = (typeof masks)[N];
export type MaskProp = MaskName | MaskConfig | FactoryArg;
export type NativeWaInput = WaInput;
export declare class IrInput {
    el: HTMLIrInputElement;
    name: string;
    /** The value of the input. */
    value: string;
    /**
     * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
     * to `text`.
     */
    type: NativeWaInput['type'];
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultValue: NativeWaInput['defaultValue'];
    /** The input's size. */
    size: NativeWaInput['size'];
    /** The input's visual appearance. */
    appearance: NativeWaInput['appearance'];
    /** Draws a pill-style input with rounded edges. */
    pill: NativeWaInput['pill'];
    returnMaskedValue: boolean;
    /** The input's label. If you need to display HTML, use the `label` slot instead. */
    label: NativeWaInput['label'];
    /** The input's hint. If you need to display HTML, use the `hint` slot instead. */
    hint: NativeWaInput['hint'];
    /** Adds a clear button when the input is not empty. */
    withClear: NativeWaInput['withClear'];
    /** Placeholder text to show as a hint when the input is empty. */
    placeholder: NativeWaInput['placeholder'];
    /** Makes the input readonly. */
    readonly: NativeWaInput['readonly'];
    /** Adds a button to toggle the password's visibility. Only applies to password types. */
    passwordToggle: NativeWaInput['passwordToggle'];
    /** Determines whether or not the password is currently visible. Only applies to password input types. */
    passwordVisible: NativeWaInput['passwordVisible'];
    /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
    withoutSpinButtons: NativeWaInput['withoutSpinButtons'];
    /**
     * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
     * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
     * the same document or shadow root for this to work.
     */
    form: NativeWaInput['form'];
    /** Makes the input a required field. */
    required: NativeWaInput['required'];
    /** A regular expression pattern to validate input against. */
    pattern: NativeWaInput['pattern'];
    /** The minimum length of input that will be considered valid. */
    minlength: NativeWaInput['minlength'];
    /** The maximum length of input that will be considered valid. */
    maxlength: NativeWaInput['maxlength'];
    /** The input's minimum value. Only applies to date and number input types. */
    min: NativeWaInput['min'];
    /** The input's maximum value. Only applies to date and number input types. */
    max: NativeWaInput['max'];
    /**
     * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
     * implied, allowing any numeric value. Only applies to date and number input types.
     */
    step: NativeWaInput['step'];
    /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
    autocapitalize: NativeWaInput['autocapitalize'];
    /** Indicates whether the browser's autocorrect feature is on or off. */
    autocorrect: NativeWaInput['autocorrect'];
    /**
     * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
     * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
     */
    autocomplete: NativeWaInput['autocomplete'];
    /** Indicates that the input should receive focus on page load. */
    autofocus: NativeWaInput['autofocus'];
    /** Used to customize the label or icon of the Enter key on virtual keyboards. */
    enterkeyhint: NativeWaInput['enterkeyhint'];
    /** Enables spell checking on the input. */
    spellcheck: NativeWaInput['spellcheck'];
    /**
     * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
     * keyboard on supportive devices.
     */
    inputmode: NativeWaInput['inputmode'];
    /**
     * Used for SSR. Will determine if the SSRed component will have the label slot rendered on initial paint.
     */
    withLabel: NativeWaInput['withLabel'];
    /**
     * Used for SSR. Will determine if the SSRed component will have the hint slot rendered on initial paint.
     */
    withHint: NativeWaInput['withHint'];
    /** Mask for the input field (optional) */
    mask: MaskProp;
    /** Disables the input. */
    disabled: boolean;
    /**
     * Custom CSS classes applied to the inner `<wa-input>` element.
     *
     * You can also target the exposed parts `::part(input)` and `::part(base)`
     * for deeper styling of the native input and container.
     */
    inputClass: string;
    textChange: EventEmitter<string>;
    inputBlur: EventEmitter<void>;
    inputFocus: EventEmitter<void>;
    private isValid;
    private slotState;
    private _mask?;
    private inputRef;
    private animationFrame;
    private slotObserver;
    private readonly SLOT_NAMES;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleDisabledChange(newValue: boolean, oldValue: boolean): void;
    protected handleMaskPropsChange(): void;
    handleAriaInvalidChange(e: any): void;
    handleValueChange(newValue: string, oldValue: string): void;
    private handleInput;
    private initializeMask;
    private setupSlotListeners;
    private removeSlotListeners;
    private handleSlotChange;
    private updateSlotState;
    private rebuildMask;
    private destroyMask;
    private clearAnimationFrame;
    private buildMaskOptions;
    private resolveMask;
    private handleChange;
    private handleClear;
    private handleBlur;
    private handleFocus;
    private hasSlot;
    render(): any;
}

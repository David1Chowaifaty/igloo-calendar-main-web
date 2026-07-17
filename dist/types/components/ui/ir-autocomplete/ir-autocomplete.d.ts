import { MaskProp, NativeWaInput } from '../ir-input/ir-input';
import { EventEmitter } from '../../../stencil-public-runtime';
import WaPopup from '@awesome.me/webawesome/dist/components/popup/popup';
type AutocompletePopupElement = WaPopup;
export declare class IrAutocomplete {
    el: HTMLIrAutocompleteElement;
    /**
     * Emits `combobox-change` even when the selected value does not change.
     *
     * @default true
     */
    emitOnSameValue: boolean;
    /** Whether the autocomplete dropdown is open. */
    open: boolean;
    /** Placement of the autocomplete dropdown relative to the input. */
    placement: AutocompletePopupElement['placement'];
    /** Name attribute forwarded to the underlying input element. */
    name: string;
    /** The value of the input. Not reflected to the host attribute — reflection would rewrite the DOM on every keystroke. */
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
     * Enables selection of multiple options.
     * When `true`, users can select more than one option at a time.
     * Defaults to `false`.
     */
    multiple: boolean;
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
     * When `true`, renders a chevron button on the trailing edge of the input
     * that toggles the dropdown open and closed — matching the visual pattern of
     * `<wa-select>`.
     *
     * Set to `true` when the autocomplete is used as a pure select (fixed option
     * list, no free-text filtering) so users have a clear affordance to open the
     * listbox. Leave at the default `false` for search-as-you-type inputs where
     * the dropdown opens automatically as the user types.
     */
    withExpandIcon: boolean;
    /**
     * Custom CSS classes applied to the inner `<ir-input>` element.
     *
     * You can also target the exposed parts `::part(input)` and `::part(base)`
     * for deeper styling of the native input and container.
     */
    inputClass: string;
    /**
     * In `multiple` mode, the maximum number of selected-option tags shown inside the input.
     * Any further selections collapse into a single "+N" overflow tag. Set to `0` to always
     * show every tag.
     */
    maxTagsVisible: number;
    private options;
    private slotStateVersion;
    private selectedOptions;
    textChange: EventEmitter<string>;
    comboboxChange: EventEmitter<string | string[]>;
    private currentOption?;
    private filterQuery;
    private listboxRef?;
    private inputRef?;
    private nativeInput?;
    private optionMeta;
    private optionContentObserver?;
    private readonly SLOT_NAMES;
    private slotManager;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    /**
     * Slot changes rebuild the option list, but consumers can also rewrite an option's
     * label/value or inner text in place without a slotchange firing. Drop the metadata
     * cache when that happens; it rebuilds lazily on the next access.
     */
    private observeOptionContent;
    show(): Promise<void>;
    focusInput(): Promise<void>;
    hide(): Promise<void>;
    /**
     * Applies the WAI-ARIA combobox pattern to the native input. String IDREFs like
     * `aria-activedescendant` are dangling across shadow roots, so the active option and
     * listbox are wired through ARIA element reflection where supported — never both
     * mechanisms, since setting the IDL property resets the string attribute per spec.
     */
    private setupInputAria;
    private syncAriaExpanded;
    private syncActiveDescendant;
    handleOpenChange(newValue: boolean): void;
    private getOffset;
    private scrollIntoView;
    handleValueChange(newValue: string): void;
    private refreshSelectedOptions;
    private emitChange;
    private getAllOptions;
    private getVisibleOptions;
    private getOptionMeta;
    private applyFilter;
    private clearFilter;
    private updateOptionsFromSlot;
    /**
     * Reassigns the currentOption pointer, clearing the highlight flag on the element it
     * previously pointed at. Keeps highlight updates O(1) instead of sweeping all options.
     */
    private setCurrentPointer;
    private clearCurrentOption;
    private ensureCurrentOption;
    private setCurrentOption;
    private getOptionLabel;
    private getOptionValue;
    private syncSelectedFromValue;
    private selectOption;
    private removeOption;
    private handleOptionClick;
    private handleTextChange;
    private handleOptionsSlotChange;
    private handleKeydownChange;
    private handleClick;
    private renderSelectedTags;
    private handleExpandIconClick;
    render(): any;
}
export {};

import { EventEmitter } from '../../stencil-public-runtime';
import { ComboboxOption, DataMode } from './types';
export declare class IrMCombobox {
    el: HTMLElement;
    /**
     * Placeholder text displayed in the input when no option is selected.
     */
    placeholder: string;
    /**
     * default selected option for the combobox.
     */
    defaultOption: ComboboxOption['value'];
    /**
     * Determines how the options are loaded into the component.
     * - 'static': Uses the options passed through the `options` prop or the default internal list.
     * - 'external': Emits search events for external handling, options updated via `options` prop.
     *
     * @default 'static'
     */
    dataMode: DataMode;
    /**
     * List of available options for the combobox when using static data mode.
     * If empty, falls back to a default internal option list.
     */
    options: ComboboxOption[];
    /**
     * Debounce delay in milliseconds for search events when using external data mode.
     * @default 300
     */
    debounceDelay: number;
    /**
     * Whether to show loading state
     */
    loading: boolean;
    /**
     * Whether to use slot content for custom dropdown rendering
     */
    useSlot: boolean;
    isOpen: boolean;
    selectedOption: ComboboxOption;
    focusedIndex: number;
    filteredOptions: ComboboxOption[];
    slotElements: HTMLElement[];
    hasPrefix: boolean;
    hasSuffix: boolean;
    itemChildren: HTMLIrMComboboxItemElement[];
    /**
     * Emitted when a user selects an option from the combobox.
     * The event payload contains the selected `ComboboxOption` object.
     */
    optionChange: EventEmitter<ComboboxOption>;
    /**
     * Emitted when the user types in the input field (debounced).
     * Used for external data fetching in 'external' data mode.
     */
    searchQuery: EventEmitter<string>;
    /**
     * Public method to select an option from external slot content
     */
    selectOptionFromSlot(option: ComboboxOption): Promise<void>;
    private inputRef;
    private dropdownRef;
    private id;
    private dropdownId;
    private debounceTimeout;
    private prefixSlotRef;
    private suffixSlotRef;
    private mo;
    private get isCompositionMode();
    watchOptionsChanged(newOptions: ComboboxOption[]): void;
    watchDefaultValueChanged(newOption: string): void;
    watchUseSlotChanged(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleDocumentKeyDown(event: KeyboardEvent): void;
    handleComboboxItemSelect(ev: CustomEvent<ComboboxOption>): void;
    handleComboboxItemRegister(): void;
    handleComboboxItemUnregister(): void;
    private applyDefaultOption;
    private initializeOptions;
    private handleDocumentClick;
    private openDropdown;
    private emitSearchQuery;
    private closeDropdown;
    private updateSlotElements;
    private updateAffixPresence;
    private removeSlotFocus;
    private focusSlotElement;
    private selectSlotElement;
    private handleKeyDown;
    private selectOption;
    private scrollToFocusedOption;
    private handleInput;
    private collectItemChildren;
    private updateSlotElementsForItems;
    private filterComposition;
    render(): any;
}

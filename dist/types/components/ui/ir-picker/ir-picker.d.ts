import { EventEmitter } from '../../../stencil-public-runtime';
import { NativeWaInput } from '../ir-input/ir-input';
export interface IrComboboxOption {
    value: string;
    label: string;
    disabled?: boolean;
}
type PickerItemElement = HTMLIrPickerItemElement & {
    active: boolean;
    selected: boolean;
};
export interface IrComboboxSelectEventDetail {
    item: IrComboboxOption;
}
export declare class IrPicker {
    /** Selected value (also shown in the input when `mode="select"`). */
    value: string;
    loading: boolean;
    mode: 'select' | 'default' | 'select-async';
    pill: boolean;
    /** Placeholder shown inside the input when there is no query. */
    placeholder: string;
    /** Optional label applied to the text field. */
    label?: string;
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultValue: NativeWaInput['defaultValue'];
    /**
     * Whether to show a clear button inside the input.
     * When clicked, the input value is cleared and the `combobox-clear` event is emitted.
     *
     * @default false
     */
    withClear: boolean;
    /** The input's size. */
    size: NativeWaInput['size'];
    /** The input's visual appearance. */
    appearance: NativeWaInput['appearance'];
    /** Delay (in milliseconds) before emitting the `text-change` event. Defaults to 300ms for async mode. */
    debounce: number;
    private static idCounter;
    private readonly componentId;
    private readonly listboxId;
    private readonly listboxLabelId;
    private readonly emptyStateId;
    private inputRef?;
    private nativeInput?;
    private slotRef?;
    private debounceTimer?;
    hostEl: HTMLElement;
    isOpen: boolean;
    query: string;
    activeIndex: number;
    filteredItems: PickerItemElement[];
    liveRegionMessage: string;
    slottedPickerItems: PickerItemElement[];
    isValid: string;
    /** Emitted when a value is selected from the combobox list. */
    comboboxSelect: EventEmitter<IrComboboxSelectEventDetail>;
    /** Emitted when the text input value changes. */
    textChange: EventEmitter<string>;
    /** Emitted when the clear button is clicked and the combobox value is cleared. */
    comboboxClear: EventEmitter<void>;
    /** Emitted when the clear button is clicked and the combobox value is cleared. */
    inputPickerBlurred: EventEmitter<void>;
    componentWillLoad(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
    open(): Promise<void>;
    close(): Promise<void>;
    handleKeyDown(e: any): void;
    handleDocumentClick(event: MouseEvent): void;
    handleDocumentFocus(event: FocusEvent): void;
    protected handleActiveIndexChange(): void;
    handleAriaInvalid(newValue: any): void;
    protected handleValueChange(newValue: string): void;
    clearInput(): Promise<void>;
    private closeCombobox;
    private handleInput;
    private handleInputFocus;
    private handleInputKeydown;
    /** Applies the filter and optionally emits a debounced text-change event. */
    private applyFilter;
    /** Emit the latest query value with a debounce suited for async searches. */
    private emitTextChange;
    private getTextChangeDelay;
    private syncQueryWithValue;
    private selectActiveItem;
    private handleSelection;
    private focusInput;
    private applyAriaAttributes;
    private scrollActiveOptionIntoView;
    private scrollSelectedIntoView;
    private capturePickerItemsFromSlot;
    private processPickerItems;
    private ensureItemIds;
    private getItemDisplayLabel;
    private matchesQuery;
    private updateItemVisibility;
    private updateSelectedFromValue;
    private updateActiveItemIndicators;
    private findNearestEnabledIndex;
    private focusEdgeItem;
    private moveActiveIndex;
    private findPickerItemFromEvent;
    private handleResultsClick;
    private handleResultsPointerDown;
    private handleSlotChange;
    render(): any;
    private updateLiveRegion;
    private runAfterNextFrame;
}
export {};

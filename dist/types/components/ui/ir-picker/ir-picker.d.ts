import { EventEmitter } from '../../../stencil-public-runtime';
import { NativeWaInput } from '../ir-custom-input/ir-custom-input';
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
    mode: 'select' | 'default';
    pill: boolean;
    /** Placeholder shown inside the input when there is no query. */
    placeholder: string;
    /** Optional label applied to the text field. */
    label?: string;
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultValue: NativeWaInput['defaultValue'];
    /** The input's size. */
    size: NativeWaInput['size'];
    /** The input's visual appearance. */
    appearance: NativeWaInput['appearance'];
    private static idCounter;
    private readonly componentId;
    private readonly listboxId;
    private readonly listboxLabelId;
    private readonly emptyStateId;
    private inputRef?;
    private nativeInput?;
    private slotRef?;
    hostEl: HTMLElement;
    isOpen: boolean;
    query: string;
    activeIndex: number;
    filteredItems: PickerItemElement[];
    liveRegionMessage: string;
    slottedPickerItems: PickerItemElement[];
    comboboxSelect: EventEmitter<IrComboboxSelectEventDetail>;
    componentWillLoad(): void;
    componentDidRender(): void;
    open(): Promise<void>;
    close(): Promise<void>;
    handleKeyDown(e: any): void;
    handleDocumentClick(event: MouseEvent): void;
    handleDocumentFocus(event: FocusEvent): void;
    protected handleActiveIndexChange(): void;
    protected handleValueChange(newValue: string): void;
    private closeCombobox;
    private handleInput;
    private handleInputFocus;
    private handleInputKeydown;
    private applyFilter;
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

import { IToast } from "../../../components";
import { EventEmitter } from '../../../stencil-public-runtime';
export type ComboboxItem = {
    id: string;
    name: string;
    image?: string;
    occupancy?: number;
};
export declare class IrCombobox {
    el: HTMLElement;
    /**
     * The list of items displayed in the combobox.
     */
    data: ComboboxItem[];
    /**
     * Debounce duration in milliseconds for search input.
     */
    duration: number;
    /**
     * Placeholder text for the input field.
     */
    placeholder: string;
    /**
     * The current value of the input field.
     */
    value: string;
    /**
     * Disables the combobox input when set to true.
     */
    disabled: boolean;
    /**
     * Autofocuses the input field when true.
     */
    autoFocus: boolean;
    /**
     * Unique identifier for the input element.
     */
    input_id: string;
    /**
     * The index of the currently selected item.
     */
    selectedIndex: number;
    /**
     * Tracks the actual focused index during keyboard navigation.
     */
    actualIndex: number;
    /**
     * Whether the dropdown is visible.
     */
    isComboBoxVisible: boolean;
    /**
     * Indicates if the component is in loading state.
     */
    isLoading: boolean;
    /**
     * Whether a selection was made before blur.
     */
    isItemSelected: boolean;
    /**
     * The current input value typed by the user.
     */
    inputValue: string;
    /**
     * Filtered list based on user input.
     */
    filteredData: ComboboxItem[];
    /**
     * Determines if the input should automatically receive focus.
     */
    componentShouldAutoFocus: boolean;
    /**
     * Emitted when a selection is made from the combobox.
     */
    comboboxValueChange: EventEmitter<{
        key: string;
        data: unknown;
    }>;
    /**
     * Emitted when the input is cleared by the user.
     */
    inputCleared: EventEmitter<null>;
    /**
     * Emits a toast notification.
     */
    toast: EventEmitter<IToast>;
    private inputRef;
    private debounceTimer;
    private blurTimeout;
    componentWillLoad(): void;
    componentDidLoad(): void;
    watchHandler(newValue: boolean, oldValue: boolean): void;
    handleDocumentClick(event: MouseEvent): void;
    disconnectedCallback(): void;
    /**
     * Handles keyboard navigation and selection inside the combobox.
     */
    private handleKeyDown;
    /**
     * Focuses the combobox input element.
     */
    private focusInput;
    /**
     * Scrolls the selected item into view when navigating.
     */
    private adjustScrollPosition;
    /**
     * Selects an item at the given index.
     */
    private selectItem;
    /**
     * Debounces calls to the fetch data function.
     */
    private debounceFetchData;
    /**
     * Makes the dropdown visible on input focus.
     */
    private handleFocus;
    /**
     * Resets the combobox state and optionally blurs the input.
     */
    private resetCombobox;
    /**
     * Filters data based on input value.
     */
    private fetchData;
    /**
     * Updates input value and triggers search.
     */
    private handleInputChange;
    /**
     * Clears input or resets dropdown if nothing selected on blur.
     */
    private handleBlur;
    /**
     * Handles key navigation on individual items.
     */
    private handleItemKeyDown;
    /**
     * Renders the dropdown list.
     */
    private renderDropdown;
    /**
     * Handles form submission by selecting the highlighted item.
     */
    private handleSubmit;
    render(): any;
}

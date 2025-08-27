import { EventEmitter } from '../../../stencil-public-runtime';
export type DropdownItem = {
    value: string | number;
};
export declare class IrDropdown {
    el: HTMLIrDropdownElement;
    value: DropdownItem['value'];
    isOpen: boolean;
    selectedOption: DropdownItem['value'];
    focusedIndex: number;
    slotElements: HTMLIrDropdownItemElement[];
    itemChildren: HTMLIrDropdownItemElement[];
    private mo;
    private dropdownRef;
    /**
     * Emitted when a user selects an option from the combobox.
     * The event payload contains the selected `ComboboxOption` object.
     */
    optionChange: EventEmitter<DropdownItem['value']>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleDocumentKeyDown(event: KeyboardEvent): void;
    handleDropdownItemSelect(ev: CustomEvent<DropdownItem['value']>): void;
    handleDropdownItemRegister(): void;
    handleDropdownItemUnregister(): void;
    handleValueChange(newValue: DropdownItem['value'], oldValue: DropdownItem['value']): void;
    private updateDropdownItemValue;
    private openDropdown;
    private closeDropdown;
    private handleDocumentClick;
    private collectItemChildren;
    private updateSlotElements;
    private removeSlotFocus;
    private focusSlotElement;
    private selectSlotElement;
    private handleKeyDown;
    private selectOption;
    private updateSlotElementsForItems;
    render(): any;
}

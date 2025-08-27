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
    itemChildren: HTMLIrDropdownItemElement[];
    private mo;
    private documentClickHandler;
    private isComponentConnected;
    private updateQueued;
    /**
     * Emitted when a user selects an option from the combobox.
     * The event payload contains the selected `DropdownItem` object.
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
    private getSelectedItemIndex;
    private openDropdown;
    private closeDropdown;
    private handleDocumentClick;
    private collectItemChildren;
    private updateItemElements;
    private removeItemFocus;
    private focusItemElement;
    private selectItemElement;
    private handleKeyDown;
    private selectOption;
    render(): any;
}

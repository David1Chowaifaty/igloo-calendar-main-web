import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrMenu {
    data: IItems[];
    menuItem: string;
    isDropdownVisible: boolean;
    searchQuery: string;
    selectedItemName: string;
    currentHighlightedIndex: number;
    usingKeyboard: boolean;
    el: HTMLElement;
    menuItemClick: EventEmitter<string | number>;
    private buttonRef;
    private listRef;
    private popoverInstance;
    private contentElement;
    handleKeyDown(event: KeyboardEvent): void;
    componentDidLoad(): void;
    handleDocumentClick(event: MouseEvent): void;
    handleMouseMove(): void;
    moveHighlight(delta: number): void;
    selectItem(index: number): void;
    closeDropdown(): void;
    toggleDropdown(): void;
    adjustPopoverPlacement(): void;
    scrollToItem(index: number): void;
    disableKeyboardPriority(): void;
    disconnectedCallback(): void;
    render(): any;
}

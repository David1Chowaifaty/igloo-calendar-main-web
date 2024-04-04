/// <reference types="node" />
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrDropdown {
    itemNames: IItems[];
    rtl: boolean;
    search: boolean;
    dropdownTitle: string;
    isDropdownVisible: boolean;
    searchQuery: string;
    selectedItemName: string;
    currentHighlightedIndex: number;
    usingKeyboard: boolean;
    removeKeyboardUsage: NodeJS.Timeout;
    el: HTMLElement;
    itemSelect: EventEmitter<string>;
    private buttonRef;
    private listRef;
    handleKeyDown(event: KeyboardEvent): void;
    handleClickOutside(event: MouseEvent): void;
    handleMouseMove(): void;
    moveHighlight(delta: number): void;
    selectItem(index: number): void;
    closeDropdown(): void;
    toggleDropdown(): void;
    scrollToItem(index: number): void;
    disableKeyboardPriority(): void;
    calculateDropdownPosition(): void;
    render(): any;
}

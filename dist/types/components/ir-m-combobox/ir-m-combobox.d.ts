import { EventEmitter } from '../../stencil-public-runtime';
export interface ComboboxOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export type ComboboxType = 'select' | 'editable' | 'multiselect';
export declare class IrMCombobox {
    el: HTMLElement;
    type: ComboboxType;
    label: string;
    placeholder: string;
    options: ComboboxOption[];
    value: string | string[];
    disabled: boolean;
    readonly: boolean;
    isOpen: boolean;
    activeOptionIndex: number;
    inputValue: string;
    selectedOptions: ComboboxOption[];
    irChange: EventEmitter<string | string[]>;
    irInput: EventEmitter<string>;
    irFocus: EventEmitter<void>;
    irBlur: EventEmitter<void>;
    private comboboxId;
    private listboxId;
    private labelId;
    componentWillLoad(): void;
    handleDocumentClick(event: Event): void;
    handleKeyDown(event: KeyboardEvent): void;
    private initializeValue;
    private navigateOptions;
    private selectCurrentOption;
    private selectOption;
    private handleInputChange;
    private handleInputFocus;
    private handleInputBlur;
    private toggleCombobox;
    private removeSelectedOption;
    private getFilteredOptions;
    render(): any;
}

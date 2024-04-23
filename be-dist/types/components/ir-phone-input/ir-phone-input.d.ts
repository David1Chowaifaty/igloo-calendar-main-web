import { EventEmitter } from '../../stencil-public-runtime';
import { ICountry } from "../../models/common";
export declare class IrPhoneInput {
    error: boolean;
    isVisible: boolean;
    currentHighlightedIndex: number;
    selectedItem: ICountry;
    filteredCountries: ICountry[];
    inputValue: string;
    el: HTMLElement;
    private popoverInstance;
    private triggerElement;
    private contentElement;
    private debounceTimeout;
    private commonService;
    textChange: EventEmitter<{
        phone_prefix: string;
        mobile: string;
    }>;
    private countries;
    searchInput: HTMLInputElement;
    phoneInput: HTMLInputElement;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    initializeCountries(): Promise<void>;
    initializePopover(): void;
    handleOutsideClick: (event: MouseEvent) => void;
    handleKeyboardPress: (e: KeyboardEvent) => void;
    toggleVisibility(): Promise<void>;
    disconnectedCallback(): void;
    synchroniseSuggestionsBox(): void;
    handleAutoCompleteKeyDown(e: KeyboardEvent): void;
    selectItem(index: number): void;
    filterData(str: string): ICountry[];
    handleFilterInputChange(e: InputEvent): void;
    handleInputChange(e: InputEvent): void;
    render(): any;
}

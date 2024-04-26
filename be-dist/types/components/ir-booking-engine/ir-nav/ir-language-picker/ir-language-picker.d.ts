import { ICurrency, IExposedLanguages } from "../../../../models/common";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrLanguagePicker {
    currencies: ICurrency[];
    languages: IExposedLanguages[];
    selectedOptions: {
        currency: ICurrency;
        language: IExposedLanguages;
    };
    closeDialog: EventEmitter<null>;
    resetBooking: EventEmitter<null>;
    langEl: HTMLButtonElement[];
    selectedIndex: number;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    init(): Promise<void>;
    handleLanguageChange(id: string): void;
    handleCurrencyChange(e: CustomEvent): void;
    handleConfirm(e: MouseEvent): void;
    handleKeyDown(e: KeyboardEvent): void;
    render(): any;
}

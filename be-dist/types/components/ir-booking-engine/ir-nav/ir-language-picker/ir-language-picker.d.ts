import { ICurrency, IExposedLanguages } from "../../../../models/commun";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrLanguagePicker {
    currencies: ICurrency[];
    languages: IExposedLanguages[];
    selectedCurrency: ICurrency;
    selectedLanguage: IExposedLanguages;
    closeDialog: EventEmitter<null>;
    resetBooking: EventEmitter<null>;
    private langEl;
    private selectedIndex;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    init(): void;
    handleLanguageChange(id: string): void;
    handleCurrencyChange(e: CustomEvent): void;
    handleConfirm(e: MouseEvent): void;
    handleKeyDown(e: KeyboardEvent): void;
    render(): any;
}

import { ICurrency, IExposedLanguages } from "../../models/common";
import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrLanguagePicker {
    currencies: ICurrency[];
    languages: IExposedLanguages[];
    selectedOptions: {
        currency: ICurrency;
        language: IExposedLanguages;
    };
    closeDialog: EventEmitter<null>;
    componentWillLoad(): Promise<void>;
    init(): Promise<void>;
    handleLanguageChange(e: CustomEvent): void;
    handleCurrencyChange(e: CustomEvent): void;
    handleConfirm(e: MouseEvent): void;
    render(): any;
}

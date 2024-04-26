import { TTabsState } from './nav-types';
import { ICurrency, IExposedLanguages } from "../../../models/common";
export declare class IrNav {
    currencies: ICurrency[];
    languages: IExposedLanguages[];
    logo: string;
    website: string;
    currentPage: TTabsState;
    private dialogRef;
    private sheetRef;
    handleButtonClick(e: CustomEvent, page: TTabsState): void;
    handleCloseDialog(e: CustomEvent): void;
    renderDialogBody(): any;
    renderLocationField(fieled: string | null, withComma?: boolean): string;
    render(): any;
}

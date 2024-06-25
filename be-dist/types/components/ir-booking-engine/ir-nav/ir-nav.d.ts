import { EventEmitter } from '../../../stencil-public-runtime';
import { TTabsState } from './nav-types';
import { ICurrency, IExposedLanguages, pages } from "../../../models/common";
export declare class IrNav {
    currencies: ICurrency[];
    languages: IExposedLanguages[];
    logo: string;
    website: string;
    isBookingListing: boolean;
    showBookingCode: boolean;
    showCurrency: boolean;
    routing: EventEmitter<pages>;
    currentPage: TTabsState;
    private dialogRef;
    private sheetRef;
    modalRef: HTMLIrModalElement;
    handleButtonClick(e: CustomEvent, page: TTabsState): void;
    handleCloseDialog(e: CustomEvent): void;
    renderDialogBody(): any;
    renderLocationField(field: string | null, withComma?: boolean): string;
    renderLocation(): string;
    renderLanguageTrigger(): any;
    handleItemSelect(e: CustomEvent): void | CustomEvent<pages>;
    render(): any;
}

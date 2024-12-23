import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrListingHeader {
    propertyId: number;
    language: string;
    p: string;
    inputValue: string;
    isLoading: 'search' | 'excel';
    preventPageLoad: EventEmitter<string>;
    private bookingListingService;
    private toDateRef;
    private downloadUrlTag;
    handleDateRangeChange(e: CustomEvent): void;
    handleSearchClicked(is_to_export: boolean): Promise<void>;
    handleClearUserField(): Promise<void>;
    private handleFromDateChange;
    render(): any;
}

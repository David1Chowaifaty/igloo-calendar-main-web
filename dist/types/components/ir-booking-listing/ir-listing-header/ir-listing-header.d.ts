import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrListingHeader {
    propertyId: number;
    language: string;
    baseurl: string;
    inputValue: string;
    isLoading: 'search' | 'excel';
    preventPageLoad: EventEmitter<string>;
    private bookingListingService;
    componentWillLoad(): void;
    private downloadUrlTag;
    handleDateRangeChange(e: CustomEvent): void;
    handleSearchClicked(is_to_export: boolean): Promise<void>;
    handleClearUserField(): Promise<void>;
    render(): any;
}

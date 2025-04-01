import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrListingHeader {
    propertyId: number;
    language: string;
    p: string;
    inputValue: string;
    isLoading: 'search' | 'excel';
    preventPageLoad: EventEmitter<string>;
    private bookingListingService;
    private handleSearchClicked;
    private handleClearUserField;
    render(): any;
}

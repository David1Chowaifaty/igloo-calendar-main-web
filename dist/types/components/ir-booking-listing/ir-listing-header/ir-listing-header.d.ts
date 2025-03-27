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
    private handleSearchClicked;
    private handleClearUserField;
    private handleFromDateChange;
    render(): any;
}

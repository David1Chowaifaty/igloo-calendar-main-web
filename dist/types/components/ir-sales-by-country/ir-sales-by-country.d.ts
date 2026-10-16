import { CountrySalesFilter, MappedCountries, SalesRecord } from './types';
export declare class IrSalesByCountry {
    language: string;
    ticket: string;
    propertyid: number;
    p: string;
    isLoading: 'filter' | 'export' | null;
    isPageLoading: boolean;
    property_id: number;
    salesData: SalesRecord[];
    salesFilters: CountrySalesFilter;
    countries: MappedCountries;
    private token;
    private roomService;
    private propertyService;
    private bookingService;
    private baseFilters;
    componentWillLoad(): void;
    ticketChanged(newValue: string, oldValue: string): void;
    private initializeApp;
    private getCountrySales;
    render(): any;
}

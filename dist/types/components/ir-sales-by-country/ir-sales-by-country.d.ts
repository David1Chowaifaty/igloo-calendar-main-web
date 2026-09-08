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
    private ApiClient;
    private roomService;
    private propertyService;
    private bookingService;
    private baseFilters;
    /** Re-runs init when the language changes so server-localized data follows. */
    private languageSync;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
    ticketChanged(newValue: string, oldValue: string): void;
    private initializeApp;
    private getCountrySales;
    render(): any;
}

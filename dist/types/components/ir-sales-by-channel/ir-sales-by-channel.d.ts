import { AllowedProperties } from "../../services/property.service";
import { ChannelReportResult, ChannelSaleFilter, SalesByChannelMode } from './types';
export declare class IrSalesByChannel {
    language: string;
    ticket: string;
    propertyid: string;
    p: string;
    mode: SalesByChannelMode;
    isLoading: 'filter' | 'export' | null;
    isPageLoading: boolean;
    salesData: ChannelReportResult;
    channelSalesFilters: ChannelSaleFilter;
    allowedProperties: AllowedProperties;
    propertyID: number;
    private token;
    private roomService;
    private propertyService;
    private baseFilters;
    componentWillLoad(): void;
    ticketChanged(newValue: string, oldValue: string): void;
    private initializeApp;
    private getChannelSales;
    render(): any;
}

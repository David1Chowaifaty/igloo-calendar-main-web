import { EventEmitter } from '../../../stencil-public-runtime';
import { ChannelSaleFilter } from '../types';
import { AllowedProperties } from "../../../services/property.service";
export declare class IrSalesByChannelFilters {
    isLoading: boolean;
    baseFilters: ChannelSaleFilter;
    allowedProperties: AllowedProperties;
    filters: ChannelSaleFilter;
    window: string;
    applyFilters: EventEmitter<ChannelSaleFilter>;
    componentWillLoad(): void;
    private updateFilter;
    private applyFiltersEvt;
    private resetFilters;
    private quickDates;
    render(): any;
}

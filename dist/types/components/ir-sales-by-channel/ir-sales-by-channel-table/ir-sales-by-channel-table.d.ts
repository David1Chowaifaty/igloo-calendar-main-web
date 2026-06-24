import { ChannelReportResult, SalesByChannelMode } from '../types';
import type { AllowedProperties } from "../../../services/property/types";
export declare class IrSalesByChannelTable {
    records: ChannelReportResult;
    allowedProperties: AllowedProperties;
    mode: SalesByChannelMode;
    visibleCount: number;
    properties: Map<number, string>;
    componentWillLoad(): void;
    handlePropertiesChange(): void;
    private setupProperties;
    private handleLoadMore;
    render(): any;
}

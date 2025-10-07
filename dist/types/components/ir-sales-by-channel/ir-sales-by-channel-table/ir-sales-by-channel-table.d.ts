import { ChannelReportResult } from '../types';
import { AllowedProperties } from "../../../services/property.service";
export declare class IrSalesByChannelTable {
    records: ChannelReportResult;
    allowedProperties: AllowedProperties;
    visibleCount: number;
    properties: Map<number, string>;
    componentWillLoad(): void;
    handlePropertiesChange(): void;
    private setupProperties;
    private handleLoadMore;
    render(): any;
}

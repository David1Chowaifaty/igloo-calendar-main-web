import { EventEmitter } from '../../../stencil-public-runtime';
import { ExtraServiceDefinition, ExtraServiceSection } from "../../../services/extra-services/types";
export declare class IrExtraServicesTable {
    services: ExtraServiceDefinition[];
    section: ExtraServiceSection;
    propertyId: number;
    upsertExtraService: EventEmitter<ExtraServiceDefinition>;
    toggleExtraServiceActive: EventEmitter<ExtraServiceDefinition>;
    private isAddonSection;
    private getVatLabel;
    private getDetails;
    private createAddon;
    render(): any;
}

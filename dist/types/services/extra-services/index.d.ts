import { ExtraServiceDefinition, GetExposedExtraServicesProps, HandleExposedExtraServiceProps } from './types';
export * from './types';
export declare const extraServicesCategories: Set<string>;
export declare class ExtraServicesService {
    getExposedExtraServices(props: GetExposedExtraServicesProps): Promise<ExtraServiceDefinition[]>;
    handleExposedExtraService(props: HandleExposedExtraServiceProps): Promise<ExtraServiceDefinition>;
}

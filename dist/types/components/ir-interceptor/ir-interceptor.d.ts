import { EventEmitter } from '../../stencil-public-runtime';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IToast } from "../ui/ir-toast/toast";
export declare class IrInterceptor {
    handledEndpoints: string[];
    suppressToastEndpoints: string[];
    isShown: boolean;
    isLoading: boolean;
    isUnassignedUnit: boolean;
    endpointsCount: number;
    isPageLoadingStopped: string | null;
    toast: EventEmitter<IToast>;
    handleStopPageLoading(e: CustomEvent): void;
    componentWillLoad(): void;
    setupAxiosInterceptors(): void;
    extractEndpoint(url: string): string;
    isHandledEndpoint(url: string): boolean;
    handleRequest(config: AxiosRequestConfig): AxiosRequestConfig<any>;
    handleResponse(response: AxiosResponse): AxiosResponse<any, any>;
    handleError(error: string, url: string, code: string): Promise<never>;
    render(): any;
}

import { AxiosRequestConfig, AxiosResponse } from 'axios';
export declare class IrInterceptor {
    isShown: boolean;
    isLoading: boolean;
    isUnassignedUnit: boolean;
    errorMessage: string | null;
    lastFailedRequest: AxiosRequestConfig | null;
    handledEndpoints: any[];
    alertRef: HTMLIrAlertDialogElement;
    private ignoredErrorRoutes;
    componentWillLoad(): void;
    setupAxiosInterceptors(): void;
    extractEndpoint(url: string): string;
    isHandledEndpoint(url: string): boolean;
    handleRequest(config: AxiosRequestConfig): AxiosRequestConfig<any>;
    handleResponse(response: AxiosResponse): AxiosResponse<any, any>;
    handleError(error: string): Promise<never>;
    retryLastRequest(): Promise<AxiosResponse<any, any>>;
    render(): any;
}

export declare class IrPage {
    label: string;
    description: string;
    /** Endpoints that show the embedded interceptor's full-page loader. Omit to keep the interceptor's default list. */
    handledEndpoints?: string[];
    render(): any;
}

export declare class ToastHelper {
    private static instance;
    private static getInstance;
    private static getReadyInstance;
    static notify(message: string, variant?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral', options?: {
        duration?: number;
        closable?: boolean;
        icon?: string;
    }): Promise<string>;
    static success(message: string, duration?: number): Promise<string>;
    static error(message: string, duration?: number): Promise<string>;
    static warning(message: string, duration?: number): Promise<string>;
    static info(message: string, duration?: number): Promise<string>;
}

export type SearchParams = {
    from_date: string;
    to_date: string;
};
export type CheckoutParams = {
    value: string;
    currency: string;
};
export type PurchaseParams = {
    value: string;
    currency: string;
};
export type ConversionType = 'google' | 'facebook';
export type GooglePurchaseParams = PurchaseParams & {
    transaction_id: string;
    roomnights: string;
};
export interface IConversion {
    init(): void;
    trackSearch(params: SearchParams): void;
    trackCheckout(params: CheckoutParams): void;
    trackPurchase(params: PurchaseParams): void;
}
interface Gtag {
    (event: 'event', eventName: string, eventParams?: {
        [key: string]: any;
    }): void;
    (command: 'config', targetId: string, configParams?: GtagConfigParams): void;
    (command: 'set', setConfig: GtagConfigParams): void;
    (command: 'set', targetId: string, setConfig: GtagConfigParams): void;
    (command: 'js', config: Date): void;
    (command: 'get', targetId: string, fieldName: string, callback?: (value: any) => void): void;
    (command: 'event', eventName: string, eventParams?: ControlParams & {
        [key: string]: any;
    }): void;
}
interface GtagConfigParams {
    [key: string]: any;
    send_page_view?: boolean;
}
interface ControlParams {
    groups?: string | string[];
    non_interaction?: boolean;
    transport_type?: 'beacon' | 'xhr' | 'image';
    event_callback?: () => void;
    event_timeout?: number;
}
declare global {
    interface Window {
        gtag: Gtag | undefined;
        dataLayer: any[];
    }
}
export {};

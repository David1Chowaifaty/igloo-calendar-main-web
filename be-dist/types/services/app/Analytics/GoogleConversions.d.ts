import { CheckoutParams, GooglePurchaseParams, IConversion, SearchParams } from './types';
export declare class GoogleConversion implements IConversion {
    private conversionId;
    static initialized: boolean;
    constructor(conversionId: string);
    init(): void;
    trackSearch({ from_date, to_date }: SearchParams): void;
    trackCheckout({ currency, value }: CheckoutParams): void;
    private static isGtagAvailable;
    trackPurchase({ currency, roomnights, transaction_id, value }: GooglePurchaseParams): void;
    /**
     * Sends an event to Google Analytics.
     *
     * @param eventName The name of the event.
     * @param eventParams Optional parameters to send with the event.
     */
    private trackEvent;
    trackConversion(): void;
}

import { CheckoutParams, IConversion, PurchaseParams, SearchParams } from './types';
export declare class FacebookConversion implements IConversion {
    private conversionId;
    static initialized: boolean;
    constructor(conversionId: string);
    init(): void;
    trackCheckout({ currency, value }: CheckoutParams): void;
    trackSearch({ from_date, to_date }: SearchParams): void;
    trackPurchase({ currency, value }: PurchaseParams): void;
}

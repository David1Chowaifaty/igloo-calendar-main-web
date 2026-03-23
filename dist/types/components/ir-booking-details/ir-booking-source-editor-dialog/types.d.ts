export interface AssignableItem {
    key: string;
    label: string;
    type: 'room' | 'pickup' | 'extra';
    ratePlanShortName?: string;
    isNonRefundable?: boolean;
    unitName?: string;
    fromDate?: string;
    toDate?: string;
    price?: number;
    currencySymbol?: string;
}

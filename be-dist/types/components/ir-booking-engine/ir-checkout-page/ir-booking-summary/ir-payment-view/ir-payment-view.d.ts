import { AllowedPaymentMethod } from "../../../../../models/property";
import { ZodIssue } from 'zod';
export declare class IrPaymentView {
    prepaymentAmount: number;
    errors: Record<string, ZodIssue>;
    selectedPaymentMethod: string;
    cardType: string;
    paymentDetails: {
        paymentMethods: AllowedPaymentMethod[];
        filteredMap: {
            id: string;
            value: string;
        }[];
    };
    imageLoadError: boolean;
    componentWillLoad(): void;
    handlePrePaymentAmount(newValue: number, oldValue: number): void;
    private setPaymentMethod;
    private setPaymentDetails;
    private getExpiryMask;
    private handlePaymentSelectionChange;
    private renderPaymentMethod;
    private renderPaymentOptions;
    render(): any;
}

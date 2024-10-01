import { ZodIssue } from 'zod';
export declare class IrPaymentView {
    prepaymentAmount: number;
    errors: Record<string, ZodIssue>;
    selectedPaymentMethod: string;
    cardType: string;
    componentWillLoad(): void;
    handlePrePaymentAmount(newValue: number, oldValue: number): void;
    private setPaymentMethod;
    private getExpiryMask;
    renderPaymentMethod(): any;
    handlePaymentSelectionChange(e: CustomEvent): void;
    renderPaymentOptions(): any;
    render(): any;
}

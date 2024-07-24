import { ZodIssue } from 'zod';
export declare class IrPaymentView {
    errors: Record<string, ZodIssue>;
    selectedPaymentMethod: string;
    componentWillLoad(): void;
    private getExpiryMask;
    renderPaymentMethod(): any;
    handlePaymentSelectionChange(e: CustomEvent): void;
    renderPaymentOptions(): any;
    render(): any;
}

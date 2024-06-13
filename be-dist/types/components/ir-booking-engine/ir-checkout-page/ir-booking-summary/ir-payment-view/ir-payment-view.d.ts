export declare class IrPaymentView {
    selectedPaymentMethod: string;
    componentWillLoad(): void;
    private getExpiryMask;
    renderPaymentMethod(): any;
    handlePaymentSelectionChange(e: CustomEvent): void;
    renderPaymentOptions(): any;
    render(): any;
}

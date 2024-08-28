import { PaymentOption } from "../../models/payment-options";
export declare class IrPaymentOption {
    baseurl: string;
    propertyid: string;
    ticket: string;
    paymentOptions: PaymentOption[];
    isLoading: boolean;
    selectedOption: PaymentOption | null;
    private paymentOptionService;
    propertyOptionsById: Map<string | number, PaymentOption>;
    propertyOptionsByCode: Map<string | number, PaymentOption>;
    componentWillLoad(): void;
    handleTokenChange(newValue: string, oldValue: string): void;
    init(): void;
    handleCloseModal(e: CustomEvent): void;
    private closeModal;
    fetchData(): Promise<void>;
    initServices(): void;
    private modifyPaymentList;
    handleCheckChange(e: CustomEvent, po: PaymentOption): Promise<void>;
    showEditButton(po: PaymentOption, ignoreActive?: boolean): boolean;
    render(): any;
}

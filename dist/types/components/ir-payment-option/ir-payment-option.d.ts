import { PaymentOption } from "../../models/payment-options";
export declare class IrPaymentOption {
    baseurl: string;
    propertyid: string;
    ticket: string;
    language: string;
    paymentOptions: PaymentOption[];
    isLoading: boolean;
    selectedOption: PaymentOption | null;
    private paymentOptionService;
    private roomService;
    private propertyOptionsById;
    private propertyOptionsByCode;
    componentWillLoad(): void;
    handleTokenChange(newValue: string, oldValue: string): void;
    init(): void;
    handleCloseModal(e: CustomEvent): void;
    private closeModal;
    private fetchData;
    private initServices;
    private modifyPaymentList;
    private handleCheckChange;
    private showEditButton;
    render(): any;
}

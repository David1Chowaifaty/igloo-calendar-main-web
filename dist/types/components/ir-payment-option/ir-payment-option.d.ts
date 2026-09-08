import { PaymentOption } from "../../models/payment-options";
export declare class IrPaymentOption {
    propertyid: string;
    ticket: string;
    p: string;
    language: string;
    defaultStyles: boolean;
    hideLogs: boolean;
    paymentOptions: PaymentOption[];
    isLoading: boolean;
    selectedOption: PaymentOption | null;
    private paymentOptionService;
    private roomService;
    private ApiClient;
    private propertyOptionsById;
    private propertyOptionsByCode;
    /** Re-runs init when the language changes so server-localized data follows. */
    private languageSync;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
    ticketChanged(newValue: string, oldValue: string): void;
    init(): void;
    handleCloseModal(e: CustomEvent): void;
    private closeModal;
    private fetchData;
    private initServices;
    private modifyPaymentList;
    private handleCheckChange;
    private changePaymentMethod;
    private showEditButton;
    render(): any;
}

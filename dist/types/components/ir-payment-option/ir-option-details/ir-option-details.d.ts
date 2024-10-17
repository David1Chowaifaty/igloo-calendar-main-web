import { PaymentOption } from "../../../models/payment-options";
import { EventEmitter } from '../../../stencil-public-runtime';
import { IToast } from '../../ir-toast/toast';
export declare class IrOptionDetails {
    propertyId: string;
    localizationIdx: number;
    selectedLanguage: string;
    invalid: boolean;
    closeModal: EventEmitter<PaymentOption | null>;
    toast: EventEmitter<IToast>;
    private paymentOptionService;
    componentWillLoad(): Promise<void>;
    private createBankTransferInfoObject;
    saveOption(e: Event): Promise<void>;
    private isEditorEmpty;
    handleSelectChange(e: CustomEvent): void;
    private handleTextAreaChange;
    private handlePaymentGatewayInfoChange;
    render(): any;
}

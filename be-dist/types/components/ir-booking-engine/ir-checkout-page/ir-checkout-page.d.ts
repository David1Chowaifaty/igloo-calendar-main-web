import { CheckoutErrors, pages } from "../../../models/common";
import { AllowedPaymentMethod } from "../../../models/property";
import { EventEmitter } from '../../../stencil-public-runtime';
import { ZodError } from 'zod';
export declare class IrCheckoutPage {
    isLoading: boolean;
    error: CheckoutErrors;
    selectedPaymentMethod: AllowedPaymentMethod | null;
    prepaymentAmount: number;
    isBookingConfirmed: boolean;
    routing: EventEmitter<pages>;
    private propertyService;
    private paymentService;
    private authService;
    private userForm;
    private bookingDetails;
    private pickupForm;
    private errorElement;
    alertRef: HTMLIrAlertDialogElement;
    componentWillLoad(): Promise<void>;
    private calculateTotalPrepaymentAmount;
    handlePrepaymentAmountChange(e: CustomEvent<number>): void;
    handleBooking(e: CustomEvent): Promise<void>;
    private validatePolicyAcceptance;
    private validatePayment;
    private resetErrorState;
    private validateUserForm;
    private validateBookingDetails;
    private validatePickupForm;
    handleError(cause: 'pickup' | 'user' | 'payment', error: ZodError<any>): void;
    private processBooking;
    private modifyConversionTag;
    private processPayment;
    scrollToError(): void;
    render(): any;
}

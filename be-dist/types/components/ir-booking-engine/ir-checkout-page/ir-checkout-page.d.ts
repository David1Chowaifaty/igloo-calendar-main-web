import { pages } from "../../../models/common";
import { EventEmitter } from '../../../stencil-public-runtime';
import { ZodError, ZodIssue } from 'zod';
export declare class IrCheckoutPage {
    isLoading: boolean;
    error: {
        cause: 'user' | 'pickup';
        issues: Record<string, ZodIssue>;
    } | {
        cause: 'booking-details' | 'booking-summary';
        issues: string;
    };
    private propertyService;
    private paymentService;
    private authService;
    routing: EventEmitter<pages>;
    userForm: HTMLIrUserFormElement;
    bookingDetails: HTMLIrBookingDetailsElement;
    pickupForm: HTMLIrPickupElement;
    errorElement: HTMLElement;
    componentWillLoad(): void;
    handleBooking(e: CustomEvent): Promise<void>;
    validatePolicyAcceptance(): boolean;
    private resetErrorState;
    private validateUserForm;
    private validateBookingDetails;
    private validatePickupForm;
    handleError(cause: 'pickup' | 'user', error: ZodError<any>): void;
    private processBooking;
    private processPayment;
    scrollToError(): void;
    render(): any;
}

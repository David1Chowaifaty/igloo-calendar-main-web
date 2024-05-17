import { pages } from "../../../models/common";
import { EventEmitter } from '../../../stencil-public-runtime';
import { ZodIssue } from 'zod';
export declare class IrCheckoutPage {
    isLoading: boolean;
    error: {
        cause: 'user' | 'pickup';
        issues: Record<string, ZodIssue>;
    };
    private propertyService;
    routing: EventEmitter<pages>;
    userForm: HTMLIrUserFormElement;
    bookingDetails: HTMLIrBookingDetailsElement;
    pickupForm: HTMLIrPickupElement;
    errorElement: HTMLElement;
    componentWillLoad(): void;
    handleBooking(e: CustomEvent): Promise<void>;
    scrollToError(): void;
    render(): any;
}

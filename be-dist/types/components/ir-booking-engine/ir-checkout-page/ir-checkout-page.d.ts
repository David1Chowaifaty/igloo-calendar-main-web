import { ZodIssue } from 'zod';
export declare class IrCheckoutPage {
    isLoading: boolean;
    error: {
        cause: 'user' | 'pickup';
        issues: Record<string, ZodIssue>;
    };
    private propertyService;
    componentWillLoad(): void;
    handleBooking(e: CustomEvent): Promise<void>;
    render(): any;
}

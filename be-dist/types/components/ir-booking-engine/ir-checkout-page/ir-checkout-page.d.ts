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
    componentWillLoad(): void;
    handleBooking(e: CustomEvent): Promise<void>;
    render(): any;
}

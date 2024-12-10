import { EventEmitter } from '../../stencil-public-runtime';
import { TBookingInfo } from "../../services/api/payment.service";
import { Booking } from "../../models/booking.dto";
export declare class IrBookingCancellation {
    booking_nbr: string;
    cancellation: string;
    cancellation_policies: TBookingInfo[];
    property_id: number;
    currency: {
        code: string;
        id: number;
    };
    booking: Booking;
    paymentAmount: number;
    isLoading: boolean;
    isOpen: boolean;
    policies: TBookingInfo[];
    openChange: EventEmitter<boolean>;
    cancellationResult: EventEmitter<{
        state: 'failed' | 'success';
        booking_nbr: string;
    }>;
    private alertDialog;
    private paymentService;
    setOverdueAmount(): Promise<void>;
    init(): Promise<void>;
    openDialog(): Promise<void>;
    private closeAlertDialog;
    render(): any;
}

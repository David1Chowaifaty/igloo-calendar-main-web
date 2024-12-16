import { EventEmitter } from '../../stencil-public-runtime';
import { TBookingInfo } from "../../services/api/payment.service";
import { Booking } from "../../models/booking.dto";
export declare class IrBookingCancellation {
    property_id: number;
    booking: Booking;
    isLoading: boolean;
    isOpen: boolean;
    policies: TBookingInfo[];
    cancellationMessage: string;
    openChange: EventEmitter<boolean>;
    cancellationResult: EventEmitter<{
        state: 'failed' | 'success';
        booking_nbr: string;
    }>;
    private alertDialog;
    private paymentService;
    private bookingService;
    init(): Promise<void>;
    private fetchRatePlansMoreDetails;
    openDialog(): Promise<void>;
    private closeAlertDialog;
    render(): any;
}

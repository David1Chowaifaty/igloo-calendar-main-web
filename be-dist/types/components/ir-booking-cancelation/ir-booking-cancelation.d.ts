import { EventEmitter } from '../../stencil-public-runtime';
import { TBookingInfo } from "../../services/api/payment.service";
export declare class IrBookingCancelation {
    booking_nbr: string;
    cancelation: string;
    cancelation_policies: TBookingInfo[];
    currency: {
        code: string;
        id: number;
    };
    paymentAmount: number;
    isOpen: boolean;
    openChange: EventEmitter<boolean>;
    cancelationResult: EventEmitter<{
        state: 'failed' | 'success';
        booking_nbr: string;
    }>;
    private alertDialog;
    private paymentService;
    componentWillLoad(): void;
    setOverdueAmount(): Promise<void>;
    openDialog(): Promise<void>;
    private closeAlertDialog;
    render(): any;
}

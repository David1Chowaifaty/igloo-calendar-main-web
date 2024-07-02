import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrBookingCancelation {
    booking_nbr: string;
    cancelation: string;
    openChange: EventEmitter<boolean>;
    cancelationResult: EventEmitter<{
        state: 'failed' | 'success';
        booking_nbr: string;
    }>;
    private alertDialog;
    private paymentService;
    componentWillLoad(): void;
    openDialog(): Promise<void>;
    private closeAlertDialog;
    render(): any;
}

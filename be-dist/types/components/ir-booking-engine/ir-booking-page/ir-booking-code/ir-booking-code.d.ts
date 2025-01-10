import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrBookingCode {
    code: string;
    validationMessage: {
        error: boolean;
        message: string;
    };
    closeDialog: EventEmitter<null>;
    resetBooking: EventEmitter<string>;
    handleSubmit(e: Event): Promise<void> | {
        error: true;
        message: string;
    };
    clearAgent(): Promise<void>;
    render(): any;
}

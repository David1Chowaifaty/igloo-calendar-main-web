import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrBookingCode {
    code: string;
    validationMessage: {
        error: boolean;
        message: string;
    };
    closeDialog: EventEmitter<null>;
    handleSubmit(e: Event): {
        error: true;
        message: string;
    };
    render(): any;
}

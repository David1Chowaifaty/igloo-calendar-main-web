import { EventEmitter } from '../../../../../stencil-public-runtime';
export declare class IrCouponDialog {
    coupon: string;
    validationMessage: {
        error: boolean;
        message: string;
    };
    isValid: boolean;
    resetBooking: EventEmitter<string>;
    dialogRef: HTMLIrDialogElement;
    activateCoupon(): {
        error: true;
        message: string;
    };
    removeCoupon(): void;
    render(): any;
}

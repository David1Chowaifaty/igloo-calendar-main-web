import { EventEmitter } from '../../../../../stencil-public-runtime';
export declare class IrCouponDialog {
    coupon: string;
    validationMessage: {
        error: boolean;
        message: string;
    };
    resetBooking: EventEmitter<null>;
    dialogRef: HTMLIrDialogElement;
    activateCoupon(): {
        error: true;
        message: string;
    };
    removeCoupon(): void;
    render(): any;
}

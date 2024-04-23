export declare class IrCouponDialog {
    coupon: string;
    validationMessage: {
        error: boolean;
        message: string;
    };
    dialogRef: HTMLIrDialogElement;
    activateCoupon(): {
        error: true;
        message: string;
    };
    removeCoupon(): void;
    render(): any;
}

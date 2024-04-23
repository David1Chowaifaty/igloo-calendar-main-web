import type { Components, JSX } from "../types/components";

interface IrCouponDialog extends Components.IrCouponDialog, HTMLElement {}
export const IrCouponDialog: {
    prototype: IrCouponDialog;
    new (): IrCouponDialog;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

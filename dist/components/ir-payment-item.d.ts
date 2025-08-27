import type { Components, JSX } from "../types/components";

interface IrPaymentItem extends Components.IrPaymentItem, HTMLElement {}
export const IrPaymentItem: {
    prototype: IrPaymentItem;
    new (): IrPaymentItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

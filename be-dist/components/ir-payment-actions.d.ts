import type { Components, JSX } from "../types/components";

interface IrPaymentActions extends Components.IrPaymentActions, HTMLElement {}
export const IrPaymentActions: {
    prototype: IrPaymentActions;
    new (): IrPaymentActions;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

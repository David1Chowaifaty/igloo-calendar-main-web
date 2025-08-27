import type { Components, JSX } from "../types/components";

interface IrPaymentAction extends Components.IrPaymentAction, HTMLElement {}
export const IrPaymentAction: {
    prototype: IrPaymentAction;
    new (): IrPaymentAction;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

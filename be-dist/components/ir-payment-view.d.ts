import type { Components, JSX } from "../types/components";

interface IrPaymentView extends Components.IrPaymentView, HTMLElement {}
export const IrPaymentView: {
    prototype: IrPaymentView;
    new (): IrPaymentView;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

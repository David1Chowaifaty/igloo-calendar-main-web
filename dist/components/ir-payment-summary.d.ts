import type { Components, JSX } from "../types/components";

interface IrPaymentSummary extends Components.IrPaymentSummary, HTMLElement {}
export const IrPaymentSummary: {
    prototype: IrPaymentSummary;
    new (): IrPaymentSummary;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

import type { Components, JSX } from "../types/components";

interface IrPaymentAnalytics extends Components.IrPaymentAnalytics, HTMLElement {}
export const IrPaymentAnalytics: {
    prototype: IrPaymentAnalytics;
    new (): IrPaymentAnalytics;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

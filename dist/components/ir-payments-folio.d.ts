import type { Components, JSX } from "../types/components";

interface IrPaymentsFolio extends Components.IrPaymentsFolio, HTMLElement {}
export const IrPaymentsFolio: {
    prototype: IrPaymentsFolio;
    new (): IrPaymentsFolio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

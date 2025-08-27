import type { Components, JSX } from "../types/components";

interface IrPaymentFolio extends Components.IrPaymentFolio, HTMLElement {}
export const IrPaymentFolio: {
    prototype: IrPaymentFolio;
    new (): IrPaymentFolio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

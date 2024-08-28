import type { Components, JSX } from "../types/components";

interface IrPaymentOption extends Components.IrPaymentOption, HTMLElement {}
export const IrPaymentOption: {
    prototype: IrPaymentOption;
    new (): IrPaymentOption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

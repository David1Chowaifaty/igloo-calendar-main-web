import type { Components, JSX } from "../types/components";

interface IrBilling extends Components.IrBilling, HTMLElement {}
export const IrBilling: {
    prototype: IrBilling;
    new (): IrBilling;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

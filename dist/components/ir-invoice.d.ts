import type { Components, JSX } from "../types/components";

interface IrInvoice extends Components.IrInvoice, HTMLElement {}
export const IrInvoice: {
    prototype: IrInvoice;
    new (): IrInvoice;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

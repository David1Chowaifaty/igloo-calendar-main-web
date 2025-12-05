import type { Components, JSX } from "../types/components";

interface IrInvoiceForm extends Components.IrInvoiceForm, HTMLElement {}
export const IrInvoiceForm: {
    prototype: IrInvoiceForm;
    new (): IrInvoiceForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

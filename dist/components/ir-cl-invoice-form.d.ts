import type { Components, JSX } from "../types/components";

interface IrClInvoiceForm extends Components.IrClInvoiceForm, HTMLElement {}
export const IrClInvoiceForm: {
    prototype: IrClInvoiceForm;
    new (): IrClInvoiceForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

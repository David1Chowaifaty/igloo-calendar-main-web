import type { Components, JSX } from "../types/components";

interface IrBookingCompanyForm extends Components.IrBookingCompanyForm, HTMLElement {}
export const IrBookingCompanyForm: {
    prototype: IrBookingCompanyForm;
    new (): IrBookingCompanyForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

import type { Components, JSX } from "../types/components";

interface IrBookingEditorForm extends Components.IrBookingEditorForm, HTMLElement {}
export const IrBookingEditorForm: {
    prototype: IrBookingEditorForm;
    new (): IrBookingEditorForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

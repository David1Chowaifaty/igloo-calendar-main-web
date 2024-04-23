import type { Components, JSX } from "../types/components";

interface IrUserForm extends Components.IrUserForm, HTMLElement {}
export const IrUserForm: {
    prototype: IrUserForm;
    new (): IrUserForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

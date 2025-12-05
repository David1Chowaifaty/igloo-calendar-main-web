import type { Components, JSX } from "../types/components";

interface IrPickupForm extends Components.IrPickupForm, HTMLElement {}
export const IrPickupForm: {
    prototype: IrPickupForm;
    new (): IrPickupForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

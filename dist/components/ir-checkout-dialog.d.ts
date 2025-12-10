import type { Components, JSX } from "../types/components";

interface IrCheckoutDialog extends Components.IrCheckoutDialog, HTMLElement {}
export const IrCheckoutDialog: {
    prototype: IrCheckoutDialog;
    new (): IrCheckoutDialog;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

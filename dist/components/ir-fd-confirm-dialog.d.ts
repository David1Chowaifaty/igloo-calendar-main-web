import type { Components, JSX } from "../types/components";

interface IrFdConfirmDialog extends Components.IrFdConfirmDialog, HTMLElement {}
export const IrFdConfirmDialog: {
    prototype: IrFdConfirmDialog;
    new (): IrFdConfirmDialog;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

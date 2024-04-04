import type { Components, JSX } from "../types/components";

interface IrAlertDialog extends Components.IrAlertDialog, HTMLElement {}
export const IrAlertDialog: {
    prototype: IrAlertDialog;
    new (): IrAlertDialog;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

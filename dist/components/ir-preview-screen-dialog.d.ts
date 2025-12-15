import type { Components, JSX } from "../types/components";

interface IrPreviewScreenDialog extends Components.IrPreviewScreenDialog, HTMLElement {}
export const IrPreviewScreenDialog: {
    prototype: IrPreviewScreenDialog;
    new (): IrPreviewScreenDialog;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

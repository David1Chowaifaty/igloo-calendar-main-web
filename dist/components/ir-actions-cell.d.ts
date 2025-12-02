import type { Components, JSX } from "../types/components";

interface IrActionsCell extends Components.IrActionsCell, HTMLElement {}
export const IrActionsCell: {
    prototype: IrActionsCell;
    new (): IrActionsCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

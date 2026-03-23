import type { Components, JSX } from "../types/components";

interface IrInputCell extends Components.IrInputCell, HTMLElement {}
export const IrInputCell: {
    prototype: IrInputCell;
    new (): IrInputCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

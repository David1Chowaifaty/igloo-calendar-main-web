import type { Components, JSX } from "../types/components";

interface IrUnitCell extends Components.IrUnitCell, HTMLElement {}
export const IrUnitCell: {
    prototype: IrUnitCell;
    new (): IrUnitCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

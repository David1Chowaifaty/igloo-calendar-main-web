import type { Components, JSX } from "../types/components";

interface IrBookedOnCell extends Components.IrBookedOnCell, HTMLElement {}
export const IrBookedOnCell: {
    prototype: IrBookedOnCell;
    new (): IrBookedOnCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

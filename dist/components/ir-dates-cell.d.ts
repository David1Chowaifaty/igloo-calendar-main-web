import type { Components, JSX } from "../types/components";

interface IrDatesCell extends Components.IrDatesCell, HTMLElement {}
export const IrDatesCell: {
    prototype: IrDatesCell;
    new (): IrDatesCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

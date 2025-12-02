import type { Components, JSX } from "../types/components";

interface IrBalanceCell extends Components.IrBalanceCell, HTMLElement {}
export const IrBalanceCell: {
    prototype: IrBalanceCell;
    new (): IrBalanceCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

import type { Components, JSX } from "../types/components";

interface IrSalesTable extends Components.IrSalesTable, HTMLElement {}
export const IrSalesTable: {
    prototype: IrSalesTable;
    new (): IrSalesTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

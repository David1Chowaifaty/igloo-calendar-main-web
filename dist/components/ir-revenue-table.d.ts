import type { Components, JSX } from "../types/components";

interface IrRevenueTable extends Components.IrRevenueTable, HTMLElement {}
export const IrRevenueTable: {
    prototype: IrRevenueTable;
    new (): IrRevenueTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

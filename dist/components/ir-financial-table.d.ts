import type { Components, JSX } from "../types/components";

interface IrFinancialTable extends Components.IrFinancialTable, HTMLElement {}
export const IrFinancialTable: {
    prototype: IrFinancialTable;
    new (): IrFinancialTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

import type { Components, JSX } from "../types/components";

interface IrDpReportTable extends Components.IrDpReportTable, HTMLElement {}
export const IrDpReportTable: {
    prototype: IrDpReportTable;
    new (): IrDpReportTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

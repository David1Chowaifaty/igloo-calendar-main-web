import type { Components, JSX } from "../types/components";

interface IrTasksTable extends Components.IrTasksTable, HTMLElement {}
export const IrTasksTable: {
    prototype: IrTasksTable;
    new (): IrTasksTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

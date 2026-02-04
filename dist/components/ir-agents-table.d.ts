import type { Components, JSX } from "../types/components";

interface IrAgentsTable extends Components.IrAgentsTable, HTMLElement {}
export const IrAgentsTable: {
    prototype: IrAgentsTable;
    new (): IrAgentsTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

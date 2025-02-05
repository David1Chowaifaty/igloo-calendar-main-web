import type { Components, JSX } from "../types/components";

interface IrTasksFilters extends Components.IrTasksFilters, HTMLElement {}
export const IrTasksFilters: {
    prototype: IrTasksFilters;
    new (): IrTasksFilters;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

import type { Components, JSX } from "../types/components";

interface IrGhsFilters extends Components.IrGhsFilters, HTMLElement {}
export const IrGhsFilters: {
    prototype: IrGhsFilters;
    new (): IrGhsFilters;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

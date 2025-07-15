import type { Components, JSX } from "../types/components";

interface IrPagination extends Components.IrPagination, HTMLElement {}
export const IrPagination: {
    prototype: IrPagination;
    new (): IrPagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

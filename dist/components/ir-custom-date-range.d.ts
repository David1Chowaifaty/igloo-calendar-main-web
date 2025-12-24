import type { Components, JSX } from "../types/components";

interface IrCustomDateRange extends Components.IrCustomDateRange, HTMLElement {}
export const IrCustomDateRange: {
    prototype: IrCustomDateRange;
    new (): IrCustomDateRange;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

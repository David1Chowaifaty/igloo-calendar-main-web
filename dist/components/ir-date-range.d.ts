import type { Components, JSX } from "../types/components";

interface IrDateRange extends Components.IrDateRange, HTMLElement {}
export const IrDateRange: {
    prototype: IrDateRange;
    new (): IrDateRange;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

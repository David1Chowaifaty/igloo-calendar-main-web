import type { Components, JSX } from "../types/components";

interface IrRevenueRow extends Components.IrRevenueRow, HTMLElement {}
export const IrRevenueRow: {
    prototype: IrRevenueRow;
    new (): IrRevenueRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

import type { Components, JSX } from "../types/components";

interface IrFinancialSummary extends Components.IrFinancialSummary, HTMLElement {}
export const IrFinancialSummary: {
    prototype: IrFinancialSummary;
    new (): IrFinancialSummary;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

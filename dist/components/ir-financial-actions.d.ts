import type { Components, JSX } from "../types/components";

interface IrFinancialActions extends Components.IrFinancialActions, HTMLElement {}
export const IrFinancialActions: {
    prototype: IrFinancialActions;
    new (): IrFinancialActions;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

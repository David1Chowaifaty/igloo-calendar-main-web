import type { Components, JSX } from "../types/components";

interface IrMealReport extends Components.IrMealReport, HTMLElement {}
export const IrMealReport: {
    prototype: IrMealReport;
    new (): IrMealReport;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

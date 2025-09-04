import type { Components, JSX } from "../types/components";

interface IrDailyRevenue extends Components.IrDailyRevenue, HTMLElement {}
export const IrDailyRevenue: {
    prototype: IrDailyRevenue;
    new (): IrDailyRevenue;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

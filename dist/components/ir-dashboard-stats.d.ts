import type { Components, JSX } from "../types/components";

interface IrDashboardStats extends Components.IrDashboardStats, HTMLElement {}
export const IrDashboardStats: {
    prototype: IrDashboardStats;
    new (): IrDashboardStats;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

import type { Components, JSX } from "../types/components";

interface IrDashboard extends Components.IrDashboard, HTMLElement {}
export const IrDashboard: {
    prototype: IrDashboard;
    new (): IrDashboard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

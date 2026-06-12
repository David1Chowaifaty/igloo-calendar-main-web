import type { Components, JSX } from "../types/components";

interface IrMetricCard extends Components.IrMetricCard, HTMLElement {}
export const IrMetricCard: {
    prototype: IrMetricCard;
    new (): IrMetricCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

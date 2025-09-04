import type { Components, JSX } from "../types/components";

interface IrStatsCard extends Components.IrStatsCard, HTMLElement {}
export const IrStatsCard: {
    prototype: IrStatsCard;
    new (): IrStatsCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

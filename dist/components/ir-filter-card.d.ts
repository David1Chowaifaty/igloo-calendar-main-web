import type { Components, JSX } from "../types/components";

interface IrFilterCard extends Components.IrFilterCard, HTMLElement {}
export const IrFilterCard: {
    prototype: IrFilterCard;
    new (): IrFilterCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

import type { Components, JSX } from "../types/components";

interface IrNewBadge extends Components.IrNewBadge, HTMLElement {}
export const IrNewBadge: {
    prototype: IrNewBadge;
    new (): IrNewBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

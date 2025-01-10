import type { Components, JSX } from "../types/components";

interface IrBadge extends Components.IrBadge, HTMLElement {}
export const IrBadge: {
    prototype: IrBadge;
    new (): IrBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

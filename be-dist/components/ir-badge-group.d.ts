import type { Components, JSX } from "../types/components";

interface IrBadgeGroup extends Components.IrBadgeGroup, HTMLElement {}
export const IrBadgeGroup: {
    prototype: IrBadgeGroup;
    new (): IrBadgeGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

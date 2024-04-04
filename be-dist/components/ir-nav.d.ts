import type { Components, JSX } from "../types/components";

interface IrNav extends Components.IrNav, HTMLElement {}
export const IrNav: {
    prototype: IrNav;
    new (): IrNav;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

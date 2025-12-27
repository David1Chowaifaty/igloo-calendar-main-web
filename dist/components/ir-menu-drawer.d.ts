import type { Components, JSX } from "../types/components";

interface IrMenuDrawer extends Components.IrMenuDrawer, HTMLElement {}
export const IrMenuDrawer: {
    prototype: IrMenuDrawer;
    new (): IrMenuDrawer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

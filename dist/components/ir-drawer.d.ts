import type { Components, JSX } from "../types/components";

interface IrDrawer extends Components.IrDrawer, HTMLElement {}
export const IrDrawer: {
    prototype: IrDrawer;
    new (): IrDrawer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

import type { Components, JSX } from "../types/components";

interface IrRectifierDrawer extends Components.IrRectifierDrawer, HTMLElement {}
export const IrRectifierDrawer: {
    prototype: IrRectifierDrawer;
    new (): IrRectifierDrawer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

import type { Components, JSX } from "../types/components";

interface IrMenuBarItem extends Components.IrMenuBarItem, HTMLElement {}
export const IrMenuBarItem: {
    prototype: IrMenuBarItem;
    new (): IrMenuBarItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

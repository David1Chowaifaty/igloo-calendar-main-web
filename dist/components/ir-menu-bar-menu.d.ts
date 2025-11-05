import type { Components, JSX } from "../types/components";

interface IrMenuBarMenu extends Components.IrMenuBarMenu, HTMLElement {}
export const IrMenuBarMenu: {
    prototype: IrMenuBarMenu;
    new (): IrMenuBarMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

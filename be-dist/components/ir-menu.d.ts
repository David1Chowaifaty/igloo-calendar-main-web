import type { Components, JSX } from "../types/components";

interface IrMenu extends Components.IrMenu, HTMLElement {}
export const IrMenu: {
    prototype: IrMenu;
    new (): IrMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

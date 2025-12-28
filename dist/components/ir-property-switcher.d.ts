import type { Components, JSX } from "../types/components";

interface IrPropertySwitcher extends Components.IrPropertySwitcher, HTMLElement {}
export const IrPropertySwitcher: {
    prototype: IrPropertySwitcher;
    new (): IrPropertySwitcher;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

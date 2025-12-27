import type { Components, JSX } from "../types/components";

interface IrMenuItem extends Components.IrMenuItem, HTMLElement {}
export const IrMenuItem: {
    prototype: IrMenuItem;
    new (): IrMenuItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

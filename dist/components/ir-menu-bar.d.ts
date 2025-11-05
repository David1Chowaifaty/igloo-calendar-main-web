import type { Components, JSX } from "../types/components";

interface IrMenuBar extends Components.IrMenuBar, HTMLElement {}
export const IrMenuBar: {
    prototype: IrMenuBar;
    new (): IrMenuBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

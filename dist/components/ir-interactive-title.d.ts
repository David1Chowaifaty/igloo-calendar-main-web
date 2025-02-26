import type { Components, JSX } from "../types/components";

interface IrInteractiveTitle extends Components.IrInteractiveTitle, HTMLElement {}
export const IrInteractiveTitle: {
    prototype: IrInteractiveTitle;
    new (): IrInteractiveTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

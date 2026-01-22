import type { Components, JSX } from "../types/components";

interface IrRectifier extends Components.IrRectifier, HTMLElement {}
export const IrRectifier: {
    prototype: IrRectifier;
    new (): IrRectifier;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

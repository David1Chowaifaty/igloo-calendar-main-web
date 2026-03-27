import type { Components, JSX } from "../types/components";

interface IrToastItem extends Components.IrToastItem, HTMLElement {}
export const IrToastItem: {
    prototype: IrToastItem;
    new (): IrToastItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

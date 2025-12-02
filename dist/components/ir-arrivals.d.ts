import type { Components, JSX } from "../types/components";

interface IrArrivals extends Components.IrArrivals, HTMLElement {}
export const IrArrivals: {
    prototype: IrArrivals;
    new (): IrArrivals;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

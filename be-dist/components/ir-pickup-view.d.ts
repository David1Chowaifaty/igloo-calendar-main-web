import type { Components, JSX } from "../types/components";

interface IrPickupView extends Components.IrPickupView, HTMLElement {}
export const IrPickupView: {
    prototype: IrPickupView;
    new (): IrPickupView;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
